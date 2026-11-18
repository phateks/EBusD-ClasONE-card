import { LitElement, html, nothing, TemplateResult, PropertyValues } from "lit";
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
    return html`
      <ha-card>
        ${this.renderHeader(offline)} ${this.renderFlowRow()} ${this.renderMiddle(offline)}
        ${this.renderSetpoints(offline)}
      </ha-card>
    `;
  }

  private renderHeader(offline: boolean): TemplateResult {
    const c = this.config;
    const { label, kind } = offline
      ? { label: "EBUS OFFLINE", kind: "offline" as StatusKind }
      : mapStatus(this.st(c.status_entity)?.state);
    const col = STATUS_COLORS[kind];
    // Clicking the badge opens the entity that explains the current state.
    const badgeEntity =
      offline && c.connection_entity ? c.connection_entity : c.status_entity ?? c.connection_entity;
    const openBadge = () => this.moreInfo(badgeEntity);

    return html`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon"><ha-icon icon="mdi:water-boiler"></ha-icon></div>
          <div class="title-text">${c.title ?? DEFAULTS.title}</div>
          ${badgeEntity
            ? html`<div
                class="status-badge clickable ${kind}"
                style="color:${col};border:1px solid ${col}44;background:${col}14;"
                role="button"
                tabindex="0"
                title=${offline ? "ebusd / eBUS nu răspunde" : label}
                @click=${openBadge}
                @keydown=${this.onKey(openBadge)}
              >
                ${offline ? html`<ha-icon icon="mdi:lan-disconnect"></ha-icon>` : nothing}${label}
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
                "tr"
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
        ${kind === "tr" ? html`<span class="dot"></span>` : nothing}
        ${icon ? html`<ha-icon icon=${icon}></ha-icon>` : nothing}
        <span class="lbl">${label}</span>
        ${kind === "ch" ? html`<span class="dot"></span>` : nothing}
      </div>
    `;
  }

  private renderFlowRow(): TemplateResult {
    const c = this.config;
    const flame = this.num(c.flame_power_entity);
    const burning = (flame ?? 0) > 0.1;
    const openFlame = () => this.moreInfo(c.flame_power_entity);

    return html`
      <div class="flow-row">
        <div
          class="unit clickable"
          role="button"
          tabindex="0"
          @click=${openFlame}
          @keydown=${this.onKey(openFlame)}
        >
          <div class="unit-icons">
            <ha-icon class="boiler" icon="mdi:water-boiler"></ha-icon>
            <ha-icon class="flame ${burning ? "burning" : ""}" icon="mdi:fire"></ha-icon>
          </div>
          <div class="lbl">${c.flame_label ?? DEFAULTS.flame_label}</div>
          <div class="val">${this.fmt(flame, 1, " kW")}</div>
        </div>

        <div class="pipes">
          ${this.renderTemperatureTile(
            c.flow_temp_entity,
            c.flow_temp_label ?? DEFAULTS.flow_temp_label,
            this.fmt(this.num(c.flow_temp_entity)),
            "tur"
          )}
          ${this.renderTemperatureTile(
            c.return_temp_entity,
            c.return_temp_label ?? DEFAULTS.return_temp_label,
            this.fmt(this.num(c.return_temp_entity)),
            "retur"
          )}
        </div>

        ${c.outdoor_temp_entity
          ? this.renderTemperatureTile(
              c.outdoor_temp_entity,
              c.outdoor_temp_label ?? DEFAULTS.outdoor_temp_label,
              this.fmt(this.num(c.outdoor_temp_entity), 1, "°C"),
              "outdoor-temp",
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
    value: string,
    className: string,
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
        <span class="tile-label">${label}</span>
        <span class="tile-value">${value}</span>
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
          >${alarm ? html`<ha-icon icon="mdi:alert-circle"></ha-icon>` : nothing}${label}</span
        >
        <span class="tile-value pressure-value">
          ${p === undefined ? "—" : p.toFixed(1)}<span> bar</span>
        </span>
      </div>
    `;
  }

  private renderMiddle(offline: boolean): TemplateResult | typeof nothing {
    const c = this.config;
    const hasConsumption = !!(c.dhw_consumption_entity || c.ch_consumption_entity);
    const offset = this.renderOffset(offline);
    if (!hasConsumption) return offset;
    return html`
      <div class="mid-row ${offset === nothing ? "single" : ""}">
        ${offset} ${this.renderConsumption()}
      </div>
    `;
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

    return html`
      <div class="offset-box ${disabled ? "disabled" : ""}">
        <div class="offset-title">
          ${label}${computed !== undefined
            ? html` <span class="sp">| ${computed.toFixed(0)}°</span>`
            : nothing}
        </div>
        <div class="sp-control">
          <button
            class="step-btn"
            aria-label="${label} −"
            ?disabled=${disabled || (shown !== undefined && shown <= min)}
            @click=${() => change(-step)}
          >
            −
          </button>
          <span class="offset-value ${pending ? "pending" : ""}">${offsetStr}</span>
          <button
            class="step-btn"
            aria-label="${label} +"
            ?disabled=${disabled || (shown !== undefined && shown >= max)}
            @click=${() => change(step)}
          >
            +
          </button>
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
    const fmt = (v: number | undefined) => this.fmt(v, digits, ` ${unit}`);
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
              <span class="cons-val">${fmt(v)}</span>
            </div>
          `
        : nothing;
    return html`
      <div class="cons-box">
        <div class="offset-title">${c.consumption_label ?? DEFAULTS.consumption_label}</div>
        ${row("mdi:shower-head", "dhw", "DHW", c.dhw_consumption_entity, dhw)}
        ${row("mdi:radiator", "ch", "CH", c.ch_consumption_entity, ch)}
        <div class="cons-total">
          <span class="cons-name">TOTAL</span>
          <span class="cons-total-val">${fmt(total)}</span>
        </div>
      </div>
    `;
  }

  private renderSetpoints(offline: boolean): TemplateResult {
    const c = this.config;
    // When thermoregulation is on, the CH setpoint is driven by the offset, so
    // the manual CH setpoint control is inactive.
    const chLocked = this.isOn(c.thermoreg_entity);
    return html`
      <div class="setpoints">
        ${this.renderSetpointCard(
          "mdi:shower-head",
          "#4ecdc4",
          c.dhw_setpoint_label ?? DEFAULTS.dhw_setpoint_label,
          c.dhw_setpoint_entity,
          c.dhw_setpoint_display_entity ?? c.dhw_setpoint_entity,
          this.limits(c.dhw_setpoint_entity, c.dhw_min, c.dhw_max, c.dhw_step, DEFAULTS.dhw),
          offline
        )}
        ${this.renderSetpointCard(
          "mdi:radiator",
          "#ff8a5c",
          c.ch_setpoint_label ?? DEFAULTS.ch_setpoint_label,
          c.ch_setpoint_entity,
          c.ch_setpoint_display_entity ?? c.ch_setpoint_entity,
          this.limits(c.ch_setpoint_entity, c.ch_min, c.ch_max, c.ch_step, DEFAULTS.ch),
          offline || chLocked
        )}
      </div>
    `;
  }

  private renderSetpointCard(
    icon: string,
    color: string,
    label: string,
    setEntity: string | undefined,
    displayEntity: string | undefined,
    { min, max, step }: Limits,
    locked: boolean
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
    return html`
      <div class="sp-card ${disabled ? "disabled" : ""}">
        <div class="sp-head">
          <ha-icon icon=${icon} style="color:${color};"></ha-icon>
          <span class="t">${label}</span>
        </div>
        <div class="sp-control">
          <button
            class="step-btn"
            aria-label="${label} −"
            ?disabled=${disabled || (shown !== undefined && shown <= min)}
            @click=${() => change(-step)}
          >
            −
          </button>
          <span class="sp-val ${pending ? "pending" : ""}" style="color:${color};"
            >${this.fmt(shown, digits)}</span
          >
          <button
            class="step-btn"
            aria-label="${label} +"
            ?disabled=${disabled || (shown !== undefined && shown >= max)}
            @click=${() => change(step)}
          >
            +
          </button>
        </div>
      </div>
    `;
  }
}
