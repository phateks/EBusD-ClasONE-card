import { LitElement, html, svg, nothing, TemplateResult, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent } from "custom-card-helpers";
import { BoilerCardConfig, CARD_VERSION, DEFAULTS, mapStatus, StatusKind } from "./types";
import { styles } from "./styles";

/* eslint-disable no-console */
console.info(
  `%c EBUSD-CLASONE-CARD %c v${CARD_VERSION} `,
  "color:#16243a;background:#4ecdc4;font-weight:700;border-radius:4px 0 0 4px;padding:2px 6px;",
  "color:#4ecdc4;background:#16243a;font-weight:700;border-radius:0 4px 4px 0;padding:2px 6px;"
);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ebusd-clasone-card",
  name: "EBusD Clas One Card",
  description: "Ariston Clas One boiler card (ebusd) — status, flow/return, flame, thermoregulation offset & computed setpoint, DHW/CH setpoints, pressure.",
  preview: true,
  documentationURL: "https://github.com/phateks/EBusD-ClasONE-card",
});

const STATUS_COLORS: Record<StatusKind, string> = {
  idle: "#8aa0bd",
  ch: "#ff8a5c",
  dhw: "#4ecdc4",
  other: "#8aa0bd",
  offline: "#ff5c5c",
};

/** HA states that mean "no value". */
const NO_VALUE = new Set(["unavailable", "unknown"]);
/** States of the connection entity that mean the eBUS link is down. */
const LINK_DOWN = new Set([
  "off",
  "false",
  "0",
  "no",
  "disconnected",
  "offline",
  "unavailable",
  "unknown",
]);

/** Wait this long after the last +/- click before writing to the boiler. */
const SETPOINT_DEBOUNCE_MS = 700;
/** Drop an optimistic value if the boiler does not confirm it within this time. */
const PENDING_TIMEOUT_MS = 15000;

interface Limits {
  min: number;
  max: number;
  step: number;
}

interface Pending {
  value: number;
  sent: boolean;
  timer?: number;
}

@customElement("ebusd-clasone-card")
export class EbusdClasOneCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: BoilerCardConfig;
  /** Optimistic values for writable numbers, keyed by entity id. */
  @state() private pending: Record<string, Pending> = {};

  public static styles = styles;

  public static async getConfigElement() {
    await import("./editor");
    return document.createElement("ebusd-clasone-card-editor");
  }

  public static getStubConfig(): BoilerCardConfig {
    return {
      type: "custom:ebusd-clasone-card",
      title: DEFAULTS.title,
      status_entity: "sensor.ebusd_boiler_boiler_status",
      ch_switch_entity: "switch.ebusd_boiler_heating_status",
      thermoreg_entity: "switch.ebusd_boiler_thermoregulation_switch",
      flame_power_entity: "sensor.ebusd_boiler_flame_power_kw",
      flow_temp_entity: "sensor.ebusd_boiler_lwt_temp",
      return_temp_entity: "sensor.ebusd_boiler_ewt_temp",
      outdoor_temp_entity: "sensor.ebusd_boiler_ext_temp",
      pressure_entity: "sensor.ebusd_boiler_boiler_pressure",
      offset_entity: "number.ebusd_boiler_z1_heat_offset_set",
      computed_setpoint_entity: "sensor.ebusd_boiler_ch_flow_setpoint",
      dhw_setpoint_entity: "number.ebusd_boiler_dhw_comfort_temp_set",
      dhw_setpoint_display_entity: "sensor.ebusd_boiler_dhw_current_target_temp",
      ch_setpoint_entity: "number.ebusd_boiler_z1_heat_setpoint_set",
    };
  }

  public setConfig(config: BoilerCardConfig): void {
    if (!config) throw new Error("Invalid configuration");
    // Labels, min/max/step and thresholds are resolved at render time: card
    // config first, then the entity's own attributes, then built-in defaults.
    this.config = { ...config };
  }

  public getCardSize(): number {
    return 6;
  }

  /** Sizing hint for the Sections dashboard layout. */
  public getGridOptions() {
    return { columns: 12, min_columns: 6 };
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    for (const p of Object.values(this.pending)) if (p.timer) clearTimeout(p.timer);
    this.pending = {};
  }

  // ---------- update control ----------
  private trackedEntities(): string[] {
    const c = this.config;
    return [
      c.status_entity,
      c.connection_entity,
      c.ch_switch_entity,
      c.thermoreg_entity,
      c.flame_power_entity,
      c.flow_temp_entity,
      c.return_temp_entity,
      c.outdoor_temp_entity,
      c.pressure_entity,
      c.offset_entity,
      c.computed_setpoint_entity,
      c.dhw_consumption_entity,
      c.ch_consumption_entity,
      c.dhw_setpoint_entity,
      c.dhw_setpoint_display_entity,
      c.ch_setpoint_entity,
      c.ch_setpoint_display_entity,
    ].filter((id): id is string => !!id);
  }

  protected shouldUpdate(changed: PropertyValues): boolean {
    if (!this.config) return false;
    if (changed.size > 1 || !changed.has("hass")) return true;
    // Only hass changed: re-render only if one of our entities or the theme changed.
    const old = changed.get("hass") as HomeAssistant | undefined;
    if (!old || !this.hass) return true;
    if (this.darkMode(old) !== this.darkMode(this.hass)) return true;
    return this.trackedEntities().some((id) => old.states[id] !== this.hass.states[id]);
  }

  protected willUpdate(changed: PropertyValues): void {
    if (!changed.has("hass") || !this.hass) return;
    // Drop optimistic values once the boiler reports them back.
    let next: Record<string, Pending> | undefined;
    for (const [id, p] of Object.entries(this.pending)) {
      if (p.sent && this.num(id) === p.value) {
        next = next ?? { ...this.pending };
        delete next[id];
      }
    }
    if (next) this.pending = next;
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has("hass") && this.hass) {
      this.toggleAttribute("light", this.darkMode(this.hass) === false);
    }
  }

  // ---------- helpers ----------
  private darkMode(hass: HomeAssistant): boolean | undefined {
    return (hass.themes as unknown as { darkMode?: boolean } | undefined)?.darkMode;
  }
  private st(id?: string) {
    return id ? this.hass?.states?.[id] : undefined;
  }
  private available(id?: string): boolean {
    const s = this.st(id);
    return !!s && !NO_VALUE.has(s.state);
  }
  private num(id?: string): number | undefined {
    const s = this.st(id);
    if (!s) return undefined;
    const v = parseFloat(s.state);
    return isNaN(v) ? undefined : v;
  }
  private isOn(id?: string): boolean {
    return this.st(id)?.state === "on";
  }
  private fmt(v: number | undefined, digits = 0, suffix = "°"): string {
    if (v === undefined) return "—";
    return `${v.toFixed(digits)}${suffix}`;
  }
  private decimals(step: number): number {
    const s = String(step);
    return s.includes(".") ? s.split(".")[1].length : 0;
  }

  /** Resolve limits: card config, then the entity's attributes, then defaults. */
  private limits(
    id: string | undefined,
    min: number | undefined,
    max: number | undefined,
    step: number | undefined,
    fallback: Limits
  ): Limits {
    const a = (this.st(id)?.attributes ?? {}) as Record<string, unknown>;
    const pick = (cfg: number | undefined, attr: unknown, def: number) => {
      if (typeof cfg === "number" && !isNaN(cfg)) return cfg;
      const n = typeof attr === "number" ? attr : parseFloat(String(attr));
      return isNaN(n) ? def : n;
    };
    return {
      min: pick(min, a.min, fallback.min),
      max: pick(max, a.max, fallback.max),
      step: pick(step, a.step, fallback.step) || fallback.step,
    };
  }

  /** True when the eBUS link is down or the boiler status cannot be read. */
  private isOffline(): boolean {
    const c = this.config;
    if (c.connection_entity) {
      const s = this.st(c.connection_entity);
      if (!s || LINK_DOWN.has(s.state.toLowerCase())) return true;
    }
    if (c.status_entity && !this.available(c.status_entity)) return true;
    return false;
  }

  /** Keyboard activation for elements that act as buttons. */
  private onKey(action: () => void) {
    return (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        action();
      }
    };
  }

  private toggle(id?: string) {
    if (!id || !this.available(id)) return;
    this.hass.callService("homeassistant", "toggle", { entity_id: id });
  }
  private moreInfo(id?: string) {
    if (!id) return;
    fireEvent(this as any, "hass-more-info", { entityId: id });
  }
  private setNumber(id: string, value: number) {
    // number.* and input_number.* entities each use their own domain's service.
    const domain = id.split(".")[0] === "input_number" ? "input_number" : "number";
    this.hass.callService(domain, "set_value", { entity_id: id, value });
  }

  /** Show `value` immediately and write it to the boiler after `delay` ms. */
  private queueNumber(id: string, value: number, delay: number) {
    const prev = this.pending[id];
    if (prev?.timer) clearTimeout(prev.timer);

    const send = () => {
      const cur = this.pending[id];
      if (!cur || cur.value !== value) return;
      this.setNumber(id, value);
      this.pending = { ...this.pending, [id]: { value, sent: true } };
      // Drop the optimistic value if the boiler never confirms it.
      window.setTimeout(() => {
        const p = this.pending[id];
        if (p?.sent && p.value === value) {
          const rest = { ...this.pending };
          delete rest[id];
          this.pending = rest;
        }
      }, PENDING_TIMEOUT_MS);
    };

    const entry: Pending = { value, sent: false };
    if (delay > 0) entry.timer = window.setTimeout(send, delay);
    this.pending = { ...this.pending, [id]: entry };
    if (delay <= 0) send();
  }

  // ---------- render ----------
  protected render(): TemplateResult | typeof nothing {
    if (!this.config || !this.hass) return nothing;
    const offline = this.isOffline();
    const { kind } = this.statusInfo(offline);
    return html`
      <ha-card class="st-${kind}" style="--st:${STATUS_COLORS[kind]};">
        ${this.renderHeader(offline)} ${this.renderFlowRow(kind)} ${this.renderControls(offline)}
      </ha-card>
    `;
  }

  private statusInfo(offline: boolean): { label: string; kind: StatusKind } {
    return offline
      ? { label: "EBUS OFFLINE", kind: "offline" }
      : mapStatus(this.st(this.config.status_entity)?.state);
  }

  private renderHeader(offline: boolean): TemplateResult {
    const c = this.config;
    const { label, kind } = this.statusInfo(offline);
    // Clicking the badge opens the entity that explains the current state.
    const badgeEntity =
      offline && c.connection_entity ? c.connection_entity : c.status_entity ?? c.connection_entity;
    const openBadge = () => this.moreInfo(badgeEntity);
    const active = kind === "ch" || kind === "dhw";

    return html`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon ${active ? "active" : ""}">
            <ha-icon icon="mdi:water-boiler"></ha-icon>
          </div>
          <div class="title-text">${c.title ?? DEFAULTS.title}</div>
          ${badgeEntity
            ? html`<div
                class="status-badge clickable ${kind}"
                role="button"
                tabindex="0"
                title=${offline ? "ebusd / eBUS nu răspunde" : label}
                @click=${openBadge}
                @keydown=${this.onKey(openBadge)}
              >
                ${offline
                  ? html`<ha-icon icon="mdi:lan-disconnect"></ha-icon>`
                  : html`<span class="status-dot ${active ? "live" : ""}"></span>`}${label}
              </div>`
            : nothing}
        </div>

        <div class="header-controls">
          ${c.ch_switch_entity
            ? this.renderToggle(
                c.ch_switch_entity,
                c.ch_switch_label ?? DEFAULTS.ch_switch_label,
                "ch",
                "mdi:radiator"
              )
            : nothing}
          ${c.thermoreg_entity
            ? this.renderToggle(
                c.thermoreg_entity,
                c.thermoreg_label ?? DEFAULTS.thermoreg_label,
                "tr",
                "mdi:home-thermometer-outline"
              )
            : nothing}
        </div>
      </div>
    `;
  }

  private renderToggle(
    id: string,
    label: string,
    kind: "ch" | "tr",
    icon?: string
  ): TemplateResult {
    const on = this.isOn(id);
    const avail = this.available(id);
    const act = () => this.toggle(id);
    return html`
      <div
        class="badge ${kind} ${on ? "on" : ""} ${avail ? "" : "unavailable"}"
        role="switch"
        aria-checked=${on ? "true" : "false"}
        aria-disabled=${avail ? "false" : "true"}
        tabindex=${avail ? "0" : "-1"}
        title=${avail ? label : `${label}: indisponibil`}
        @click=${act}
        @keydown=${this.onKey(act)}
      >
        ${icon ? html`<ha-icon icon=${icon}></ha-icon>` : nothing}
        <span class="lbl">${label}</span>
        <span class="track"><span class="knob"></span></span>
      </div>
    `;
  }

  /**
   * Animated "electric" outline: an SVG rect distorted by turbulence noise
   * whose seed changes in discrete steps, giving a crackling arc effect.
   */
  private renderElectric(): TemplateResult {
    const id = this.electricId;
    const animate = !this.reducedMotion();
    const seeds = "1;4;7;2;9;5;3;8;6;10;12;11";
    return html`
      <svg class="electric" aria-hidden="true">
        <defs>
          <filter id=${id} x="-15%" y="-15%" width="130%" height="130%" color-interpolation-filters="sRGB">
            <feTurbulence type="turbulence" baseFrequency="0.032" numOctaves="4" seed="1" result="noise">
              ${animate
                ? svg`<animate attributeName="seed" values=${seeds} dur="1.1s" calcMode="discrete" repeatCount="indefinite"></animate>`
                : nothing}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
          </filter>
        </defs>
        <rect class="eb-arc" width="100%" height="100%" rx="13" filter="url(#${id})"></rect>
        <rect class="eb-core" width="100%" height="100%" rx="13" filter="url(#${id})"></rect>
      </svg>
    `;
  }

  private readonly electricId = `eb-${Math.random().toString(36).slice(2, 9)}`;
  private reducedMotion(): boolean {
    return !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  }

  private renderFlowRow(kind: StatusKind): TemplateResult {
    const c = this.config;
    const flame = this.num(c.flame_power_entity);
    const burning = (flame ?? 0) > 0.1;
    // The boiler is asking for heat: heating/DHW status or a lit burner.
    const demand = burning || kind === "ch" || kind === "dhw";
    const electric = demand && c.electric_border !== false;
    const openFlame = () => this.moreInfo(c.flame_power_entity);
    const fmax = c.flame_max ?? DEFAULTS.flame_max;
    const frac = Math.max(0, Math.min(1, (flame ?? 0) / (fmax || 1)));
    // Ring gauge: r=34, 270° arc.
    const C = 2 * Math.PI * 34;
    const arc = C * 0.75;

    return html`
      <div class="flow-row">
        <div
          class="unit clickable ${burning ? "burning" : ""} ${electric ? "electric" : ""}"
          role="button"
          tabindex="0"
          title="${c.flame_label ?? DEFAULTS.flame_label}: ${this.fmt(flame, 1, " kW")}"
          @click=${openFlame}
          @keydown=${this.onKey(openFlame)}
        >
          ${electric ? this.renderElectric() : nothing}
          <div class="ring">
            <svg viewBox="0 0 80 80" aria-hidden="true">
              <circle class="ring-bg" cx="40" cy="40" r="34"
                stroke-dasharray="${arc} ${C}" transform="rotate(135 40 40)"></circle>
              <circle class="ring-fg" cx="40" cy="40" r="34" opacity=${frac > 0 ? 1 : 0}
                stroke-dasharray="${arc * frac} ${C}" transform="rotate(135 40 40)"></circle>
            </svg>
            <ha-icon class="flame" icon="mdi:fire"></ha-icon>
          </div>
          <div class="unit-text">
            <div class="val">
              ${flame === undefined ? "—" : flame.toFixed(1)}<span class="u">kW</span>
            </div>
            <div class="lbl">${c.flame_label ?? DEFAULTS.flame_label}</div>
          </div>
        </div>

        ${this.renderTemperatureTile(
          c.flow_temp_entity,
          c.flow_temp_label ?? DEFAULTS.flow_temp_label,
          this.num(c.flow_temp_entity),
          0,
          "tur",
          "mdi:thermometer-chevron-up"
        )}
        ${this.renderTemperatureTile(
          c.return_temp_entity,
          c.return_temp_label ?? DEFAULTS.return_temp_label,
          this.num(c.return_temp_entity),
          0,
          "retur",
          "mdi:thermometer-chevron-down"
        )}
        ${c.outdoor_temp_entity
          ? this.renderTemperatureTile(
              c.outdoor_temp_entity,
              c.outdoor_temp_label ?? DEFAULTS.outdoor_temp_label,
              this.num(c.outdoor_temp_entity),
              1,
              "outdoor-temp",
              "mdi:home-export-outline",
              !c.pressure_entity
            )
          : nothing}
        ${c.pressure_entity
          ? this.renderPressure(c.pressure_entity, !c.outdoor_temp_entity)
          : nothing}
      </div>
    `;
  }

  private renderTemperatureTile(
    entity: string | undefined,
    label: string,
    value: number | undefined,
    digits: number,
    className: string,
    icon: string,
    alone = false
  ): TemplateResult {
    const open = () => this.moreInfo(entity);
    return html`
      <div
        class="pipe sensor-tile ${className} clickable ${alone ? "tile-wide" : ""}"
        role="button"
        tabindex="0"
        @click=${open}
        @keydown=${this.onKey(open)}
      >
        <span class="tile-label"><ha-icon icon=${icon}></ha-icon>${label}</span>
        <span class="tile-value"
          >${value === undefined ? "—" : value.toFixed(digits)}<span class="u">°C</span></span
        >
      </div>
    `;
  }

  private renderPressure(entity: string, alone: boolean): TemplateResult {
    const c = this.config;
    const p = this.num(entity);
    const lo = c.pressure_min ?? DEFAULTS.pressure_min;
    const hi = c.pressure_max ?? DEFAULTS.pressure_max;
    const low = p !== undefined && p < lo;
    const high = p !== undefined && p > hi;
    const alarm = low || high;
    const label = c.pressure_label ?? DEFAULTS.pressure_label;
    const hint = low ? `Presiune sub ${lo} bar` : high ? `Presiune peste ${hi} bar` : label;
    const open = () => this.moreInfo(entity);
    // Scale 0..3 bar; the green band marks the configured normal range.
    const SCALE = Math.max(3, hi + 0.5);
    const pct = (v: number) => `${Math.max(0, Math.min(100, (v / SCALE) * 100))}%`;
    return html`
      <div
        class="pipe sensor-tile pressure-card clickable ${alarm ? "alarm" : ""} ${alone
          ? "tile-wide"
          : ""}"
        role="button"
        tabindex="0"
        title=${hint}
        @click=${open}
        @keydown=${this.onKey(open)}
      >
        <span class="tile-label"
          ><ha-icon icon=${alarm ? "mdi:alert-circle" : "mdi:gauge"}></ha-icon>${label}</span
        >
        <span class="tile-value pressure-value"
          >${p === undefined ? "—" : p.toFixed(1)}<span class="u">bar</span></span
        >
        <div class="p-scale" aria-hidden="true">
          <span class="p-band" style="left:${pct(lo)};right:calc(100% - ${pct(hi)});"></span>
          ${p !== undefined ? html`<span class="p-mark" style="left:${pct(p)};"></span>` : nothing}
        </div>
      </div>
    `;
  }

  /**
   * Offset, consumption and the two setpoints share one grid: 2 columns on
   * phones, a single row on tablets / desktops (see the container queries).
   */
  private renderControls(offline: boolean): TemplateResult {
    const c = this.config;
    const chLocked = this.isOn(c.thermoreg_entity);
    const items = [
      this.renderOffset(offline),
      c.dhw_consumption_entity || c.ch_consumption_entity ? this.renderConsumption() : nothing,
      this.renderSetpointCard(
        "dhw",
        "mdi:shower-head",
        c.dhw_setpoint_label ?? DEFAULTS.dhw_setpoint_label,
        c.dhw_setpoint_entity,
        c.dhw_setpoint_display_entity ?? c.dhw_setpoint_entity,
        this.limits(c.dhw_setpoint_entity, c.dhw_min, c.dhw_max, c.dhw_step, DEFAULTS.dhw),
        offline
      ),
      // With thermoregulation on, the CH setpoint is driven by the offset.
      this.renderSetpointCard(
        "ch",
        "mdi:radiator",
        c.ch_setpoint_label ?? DEFAULTS.ch_setpoint_label,
        c.ch_setpoint_entity,
        c.ch_setpoint_display_entity ?? c.ch_setpoint_entity,
        this.limits(c.ch_setpoint_entity, c.ch_min, c.ch_max, c.ch_step, DEFAULTS.ch),
        offline || chLocked,
        !offline && chLocked
      ),
    ].filter((t) => t !== nothing);
    if (!items.length) return html``;
    return html`<div class="controls ${items.length % 2 ? "odd" : ""}" style="--n:${items.length};">
      ${items}
    </div>`;
  }

  private stepBtn(
    label: string,
    dir: -1 | 1,
    disabled: boolean,
    onClick: () => void
  ): TemplateResult {
    return html`<button
      class="step-btn"
      aria-label="${label} ${dir < 0 ? "−" : "+"}"
      ?disabled=${disabled}
      @click=${onClick}
    >
      <ha-icon icon=${dir < 0 ? "mdi:minus" : "mdi:plus"}></ha-icon>
    </button>`;
  }

  private renderOffset(offline: boolean): TemplateResult | typeof nothing {
    const c = this.config;
    if (!c.offset_entity) return nothing;
    const id = c.offset_entity;
    const trOn = this.isOn(c.thermoreg_entity);
    // Limits come from the card config or the built-in defaults (-14..+14,
    // step 2); the entity's own min/max/step are not used here.
    const min = c.offset_min ?? DEFAULTS.offset.min;
    const max = c.offset_max ?? DEFAULTS.offset.max;
    const step = c.offset_step || DEFAULTS.offset.step;
    const pending = this.pending[id];
    // Start from the value the boiler reports; never write from an unknown state.
    const current = this.num(id);
    const shown = pending?.value ?? current;
    const disabled = offline || !trOn || !this.available(id) || current === undefined;
    const digits = this.decimals(step);
    const offsetStr =
      shown === undefined ? "--" : `${shown > 0 ? "+" : ""}${shown.toFixed(digits)}`;
    const computed = trOn ? this.num(c.computed_setpoint_entity) : undefined;
    const label = c.offset_label ?? DEFAULTS.offset_label;
    const change = (delta: number) => {
      if (disabled || shown === undefined) return;
      const raw = Math.min(max, Math.max(min, shown + delta));
      const next = parseFloat(raw.toFixed(digits));
      if (next === shown) return;
      this.queueNumber(id, next, SETPOINT_DEBOUNCE_MS);
    };
    // Edge bar: filled from 0 towards the current offset on the min..max scale.
    const span = max - min || 1;
    const zero = Math.max(0, Math.min(100, ((0 - min) / span) * 100));
    const pos = shown === undefined ? zero : ((shown - min) / span) * 100;

    return html`
      <div class="box offset-box ${disabled ? "disabled" : ""}">
        <div class="box-head">
          <span class="box-title" title=${label}
            ><ha-icon icon="mdi:tune-vertical-variant"></ha-icon><span>${label}</span></span
          >
          ${computed !== undefined
            ? html`<span class="chip accent" title="Tur calculat de termoreglare"
                ><ha-icon icon="mdi:arrow-right-thin"></ha-icon>${computed.toFixed(0)}°</span
              >`
            : !trOn
            ? html`<span class="chip">OFF</span>`
            : nothing}
        </div>
        <div class="sp-control">
          ${this.stepBtn(label, -1, disabled || (shown !== undefined && shown <= min), () =>
            change(-step)
          )}
          <span class="offset-value ${pending ? "pending" : ""}">${offsetStr}</span>
          ${this.stepBtn(label, 1, disabled || (shown !== undefined && shown >= max), () =>
            change(step)
          )}
        </div>
        <div class="edge-bar" aria-hidden="true">
          <span class="zero" style="left:${zero}%;"></span>
          <span class="fill" style="left:${Math.min(pos, zero)}%;width:${Math.abs(pos - zero)}%;"></span>
        </div>
      </div>
    `;
  }

  private renderConsumption(): TemplateResult {
    const c = this.config;
    const digits = c.consumption_decimals ?? DEFAULTS.consumption_decimals;
    const unitOf = (id?: string) =>
      (this.st(id)?.attributes?.unit_of_measurement as string | undefined) ?? "kW";
    const unit = unitOf(c.dhw_consumption_entity ?? c.ch_consumption_entity);
    const dhw = this.num(c.dhw_consumption_entity);
    const ch = this.num(c.ch_consumption_entity);
    const total = dhw === undefined && ch === undefined ? undefined : (dhw ?? 0) + (ch ?? 0);
    const share = (v?: number) => (total && v ? Math.max(0, (v / total) * 100) : 0);
    const val = (v: number | undefined) =>
      v === undefined ? "—" : html`${v.toFixed(digits)}<span class="u">${unit}</span>`;
    const row = (icon: string, cls: string, name: string, id: string | undefined, v?: number) =>
      id
        ? html`
            <div
              class="cons-row clickable"
              role="button"
              tabindex="0"
              @click=${() => this.moreInfo(id)}
              @keydown=${this.onKey(() => this.moreInfo(id))}
            >
              <span class="cons-name ${cls}"><ha-icon icon=${icon}></ha-icon>${name}</span>
              <span class="cons-val">${val(v)}</span>
            </div>
          `
        : nothing;
    return html`
      <div class="box cons-box">
        <div class="box-head">
          <span class="box-title"
            ><ha-icon icon="mdi:lightning-bolt-outline"></ha-icon><span
              >${c.consumption_label ?? DEFAULTS.consumption_label}</span
            ></span
          >
          <span class="cons-total-val">${val(total)}</span>
        </div>
        <div class="cons-rows">
          ${row("mdi:shower-head", "dhw", "DHW", c.dhw_consumption_entity, dhw)}
          ${row("mdi:radiator", "ch", "CH", c.ch_consumption_entity, ch)}
        </div>
        <div class="edge-bar split" aria-hidden="true">
          <span class="dhw" style="width:${share(dhw)}%;"></span>
          <span class="ch" style="width:${share(ch)}%;"></span>
        </div>
      </div>
    `;
  }

  private renderSetpointCard(
    kind: "dhw" | "ch",
    icon: string,
    label: string,
    setEntity: string | undefined,
    displayEntity: string | undefined,
    { min, max, step }: Limits,
    locked: boolean,
    auto = false
  ): TemplateResult | typeof nothing {
    if (!setEntity) return nothing;
    // The control entity (a number) is the source of truth: it writes the value
    // to the boiler and reads the boiler value back. The display entity is only
    // a fallback. A pending value shows what the user just clicked.
    const pending = this.pending[setEntity];
    const current = this.num(setEntity) ?? this.num(displayEntity);
    const shown = pending?.value ?? current;
    // Never write a value derived from an unknown state.
    const disabled = locked || !this.available(setEntity) || current === undefined;
    const digits = this.decimals(step);
    const change = (delta: number) => {
      if (disabled || shown === undefined) return;
      const raw = Math.min(max, Math.max(min, shown + delta));
      const next = parseFloat(raw.toFixed(digits));
      if (next === shown) return;
      this.queueNumber(setEntity, next, SETPOINT_DEBOUNCE_MS);
    };
    const pct =
      shown === undefined ? 0 : Math.max(0, Math.min(100, ((shown - min) / (max - min || 1)) * 100));
    return html`
      <div class="box sp-card ${kind} ${disabled ? "disabled" : ""}">
        <div class="box-head">
          <span class="box-title" title=${label}
            ><ha-icon icon=${icon}></ha-icon><span>${label}</span></span
          >
          ${auto
            ? html`<span class="chip" title="Setat automat de termoreglare"
                ><ha-icon icon="mdi:lock-outline"></ha-icon>AUTO</span
              >`
            : nothing}
        </div>
        <div class="sp-control">
          ${this.stepBtn(label, -1, disabled || (shown !== undefined && shown <= min), () =>
            change(-step)
          )}
          <span class="sp-val ${pending ? "pending" : ""}"
            >${shown === undefined ? "—" : shown.toFixed(digits)}<span class="u">°</span></span
          >
          ${this.stepBtn(label, 1, disabled || (shown !== undefined && shown >= max), () =>
            change(step)
          )}
        </div>
        <div class="edge-bar" aria-hidden="true"><span class="fill" style="width:${pct}%;"></span></div>
      </div>
    `;
  }
}
