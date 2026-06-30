import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, fireEvent } from "custom-card-helpers";
import { BoilerCardConfig, CARD_VERSION, mapStatus, StatusKind } from "./types";
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
};

@customElement("ebusd-clasone-card")
export class EbusdClasOneCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: BoilerCardConfig;

  public static styles = styles;

  public static async getConfigElement() {
    await import("./editor");
    return document.createElement("ebusd-clasone-card-editor");
  }

  public static getStubConfig(): BoilerCardConfig {
    return {
      type: "custom:ebusd-clasone-card",
      title: "ARISTON CLAS ONE",
      status_entity: "sensor.ebusd_boiler_boiler_status",
      ch_switch_entity: "switch.ebusd_boiler_heating_status",
      thermoreg_entity: "switch.heating_ebusd_boiler_thermoregulation_switch",
      flame_power_entity: "sensor.ebusd_boiler_flame_power_kw",
      flow_temp_entity: "sensor.ebusd_boiler_lwt_temp",
      return_temp_entity: "sensor.ebusd_boiler_ewt_temp",
      offset_entity: "number.ariston_heating_flow_offset_1",
      offset_min: -14,
      offset_max: 14,
      offset_step: 2,
      computed_setpoint_entity: "sensor.ebusd_boiler_ch_flow_setpoint",
      dhw_setpoint_entity: "number.ebusd_boiler_dhw_comfort_temp_set",
      dhw_setpoint_display_entity: "sensor.ebusd_boiler_dhw_current_target_temp",
      dhw_min: 36,
      dhw_max: 60,
      dhw_step: 1,
      ch_setpoint_entity: "number.ebusd_boiler_z1_heat_setpoint_set",
      ch_min: 30,
      ch_max: 80,
      ch_step: 1,
      pressure_entity: "sensor.ebusd_boiler_boiler_pressure",
    };
  }

  public setConfig(config: BoilerCardConfig): void {
    if (!config) throw new Error("Invalid configuration");
    this.config = {
      offset_min: -14,
      offset_max: 14,
      offset_step: 2,
      dhw_min: 36,
      dhw_max: 60,
      dhw_step: 1,
      ch_min: 30,
      ch_max: 80,
      ch_step: 1,
      title: "ARISTON CLAS ONE",
      ...config,
    };
  }

  public getCardSize(): number {
    return 4;
  }

  protected shouldUpdate(changed: Map<string, unknown>): boolean {
    if (!this.config) return false;
    // Multi-entity card: re-render on any config or hass state change so the
    // UI reflects sensor/switch updates instantly.
    return changed.has("config") || changed.has("hass");
  }

  // ---------- helpers ----------
  private st(id?: string) {
    return id ? this.hass?.states?.[id] : undefined;
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

  private toggle(id?: string) {
    if (!id) return;
    this.hass.callService("homeassistant", "toggle", { entity_id: id });
  }
  private moreInfo(id?: string) {
    if (!id) return;
    fireEvent(this as any, "hass-more-info", { entityId: id });
  }
  private setNumber(id: string | undefined, value: number) {
    if (!id) return;
    this.hass.callService("number", "set_value", { entity_id: id, value });
  }

  // ---------- render ----------
  protected render(): TemplateResult | typeof nothing {
    if (!this.config || !this.hass) return nothing;
    return html`
      <ha-card>
        ${this.renderHeader()} ${this.renderFlowRow()} ${this.renderSetpoints()}
      </ha-card>
    `;
  }

  private renderHeader(): TemplateResult {
    const c = this.config;
    const raw = this.st(c.status_entity)?.state;
    const { label, kind } = mapStatus(raw);
    const col = STATUS_COLORS[kind];
    const chOn = this.isOn(c.ch_switch_entity);
    const trOn = this.isOn(c.thermoreg_entity);

    return html`
      <div class="header">
        <div class="title-wrap">
          <div class="title-icon"><ha-icon icon="mdi:water-boiler"></ha-icon></div>
          <div class="title-text">${c.title}</div>
          ${c.status_entity
            ? html`<div
                class="status-badge"
                style="color:${col};border:1px solid ${col}44;background:${col}14;"
              >
                ${label}
              </div>`
            : nothing}
        </div>

        ${c.ch_switch_entity
          ? html`<div
              class="badge"
              style="background:${chOn ? "#3a2410" : "var(--bc-box-bg)"};border-color:${chOn
                ? "#ff8a5c55"
                : "var(--bc-border)"};"
              @click=${() => this.toggle(c.ch_switch_entity)}
            >
              <ha-icon icon="mdi:radiator" style="color:${chOn ? "#ff8a5c" : "#8aa0bd"};"></ha-icon>
              <span class="lbl" style="color:${chOn ? "#ff8a5c" : "#8aa0bd"};">CH</span>
              <span class="dot" style="background:${chOn ? "#ff8a5c" : "#4a5a70"};box-shadow:${chOn
                ? "0 0 8px #ff8a5c"
                : "none"};"></span>
            </div>`
          : nothing}

        ${c.thermoreg_entity
          ? html`<div
              class="badge"
              style="background:${trOn ? "#163a2a" : "var(--bc-box-bg)"};border-color:${trOn
                ? "#5dcaa555"
                : "var(--bc-border)"};"
              @click=${() => this.toggle(c.thermoreg_entity)}
            >
              <span class="dot" style="background:${trOn ? "#5dcaa5" : "#4a5a70"};box-shadow:${trOn
                ? "0 0 8px #5dcaa5"
                : "none"};"></span>
              <span class="lbl" style="color:${trOn ? "#5dcaa5" : "#8aa0bd"};">TERMOREGLARE</span>
            </div>`
          : nothing}
      </div>
    `;
  }

  private renderFlowRow(): TemplateResult {
    const c = this.config;
    const flame = this.num(c.flame_power_entity) ?? 0;
    const burning = flame > 0.1;
    const tur = this.num(c.flow_temp_entity);
    const retur = this.num(c.return_temp_entity);

    return html`
      <div class="flow-row">
        <div class="unit">
          <div class="unit-icons">
            <ha-icon class="boiler" icon="mdi:water-boiler"></ha-icon>
            <ha-icon class="flame ${burning ? "burning" : ""}" icon="mdi:fire"></ha-icon>
          </div>
          <div class="lbl">FLAME</div>
          <div class="val">${this.fmt(flame, 1, " kW")}</div>
        </div>

        <div class="pipes">
          <div class="pipe tur" @click=${() => this.moreInfo(c.flow_temp_entity)}>
            <span class="plabel">TUR</span>
            <span class="pval">${this.fmt(tur)}</span>
          </div>
          <div class="pipe retur" @click=${() => this.moreInfo(c.return_temp_entity)}>
            <span class="plabel">RETUR</span>
            <span class="pval">${this.fmt(retur)}</span>
          </div>
        </div>

        ${this.renderOffset()}
      </div>
    `;
  }

  private renderOffset(): TemplateResult | typeof nothing {
    const c = this.config;
    if (!c.offset_entity) return nothing;
    const trOn = this.isOn(c.thermoreg_entity);
    const offset = this.num(c.offset_entity);
    const offsetStr =
      offset === undefined ? "--" : `${offset > 0 ? "+" : ""}${offset.toFixed(0)}`;
    const computed = trOn ? this.num(c.computed_setpoint_entity) : undefined;
    const min = c.offset_min ?? -14;
    const max = c.offset_max ?? 14;
    const step = c.offset_step ?? 2;

    return html`
      <div class="offset-box ${trOn ? "" : "disabled"}">
        <div class="offset-title">
          OFFSET TERMOREGLARE${computed !== undefined
            ? html` <span class="sp">| ${computed.toFixed(0)}°</span>`
            : nothing}
        </div>
        <div class="offset-value">${offsetStr}</div>
        <input
          class="slider"
          type="range"
          min=${min}
          max=${max}
          step=${step}
          .value=${String(offset ?? 0)}
          ?disabled=${!trOn}
          @change=${(e: Event) =>
            this.setNumber(c.offset_entity, parseFloat((e.target as HTMLInputElement).value))}
        />
        <div class="ticks">
          <span>${min}</span><span>0</span><span>${max}</span>
        </div>
      </div>
    `;
  }

  private renderSetpoints(): TemplateResult {
    const c = this.config;
    return html`
      <div class="setpoints">
        ${this.renderSetpointCard(
          "mdi:shower-head",
          "#4ecdc4",
          "DHW SETPOINT",
          c.dhw_setpoint_entity,
          c.dhw_setpoint_display_entity ?? c.dhw_setpoint_entity,
          c.dhw_min ?? 36,
          c.dhw_max ?? 60,
          c.dhw_step ?? 1
        )}
        ${this.renderSetpointCard(
          "mdi:radiator",
          "#ff8a5c",
          "CH SETPOINT",
          c.ch_setpoint_entity,
          c.ch_setpoint_display_entity ?? c.ch_setpoint_entity,
          c.ch_min ?? 30,
          c.ch_max ?? 80,
          c.ch_step ?? 1
        )}
        ${c.pressure_entity
          ? this.renderPressure(c.pressure_entity)
          : nothing}
      </div>
    `;
  }

  private renderSetpointCard(
    icon: string,
    color: string,
    label: string,
    setEntity: string | undefined,
    displayEntity: string | undefined,
    min: number,
    max: number,
    step: number
  ): TemplateResult | typeof nothing {
    if (!setEntity) return nothing;
    const cur = this.num(displayEntity);
    const setVal = this.num(setEntity) ?? cur ?? min;
    const change = (delta: number) => {
      const next = Math.min(max, Math.max(min, setVal + delta));
      this.setNumber(setEntity, next);
    };
    return html`
      <div class="sp-card">
        <div class="sp-head">
          <ha-icon icon=${icon} style="color:${color};"></ha-icon>
          <span class="t">${label}</span>
        </div>
        <div class="sp-control">
          <button class="step-btn" @click=${() => change(-step)}>−</button>
          <span class="sp-val" style="color:${color};">${this.fmt(cur ?? setVal)}</span>
          <button class="step-btn" @click=${() => change(step)}>+</button>
        </div>
      </div>
    `;
  }

  private renderPressure(entity: string): TemplateResult {
    const p = this.num(entity);
    return html`
      <div class="sp-card">
        <div class="sp-head">
          <ha-icon icon="mdi:gauge" style="color:#5dcaa5;"></ha-icon>
          <span class="t">PRESIUNE</span>
        </div>
        <div
          class="sp-val display-only clickable"
          style="color:#5dcaa5;"
          @click=${() => this.moreInfo(entity)}
        >
          ${p === undefined ? "—" : p.toFixed(1)}<span
            style="font-size:14px;color:#8aa0bd;font-weight:600;"
          >
            bar</span
          >
        </div>
      </div>
    `;
  }
}
