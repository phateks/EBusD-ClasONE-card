import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor, fireEvent } from "custom-card-helpers";
import { BoilerCardConfig } from "./types";

const SCHEMA = [
  { name: "title", selector: { text: {} } },
  {
    name: "status_entity",
    selector: { entity: { domain: ["sensor"] } },
  },
  {
    name: "ch_switch_entity",
    selector: { entity: { domain: ["switch"] } },
  },
  {
    name: "thermoreg_entity",
    selector: { entity: { domain: ["switch"] } },
  },
  {
    name: "flame_power_entity",
    selector: { entity: { domain: ["sensor"] } },
  },
  {
    name: "flow_temp_entity",
    selector: { entity: { domain: ["sensor"] } },
  },
  {
    name: "return_temp_entity",
    selector: { entity: { domain: ["sensor"] } },
  },
  {
    name: "offset_entity",
    selector: { entity: { domain: ["number", "input_number"] } },
  },
  {
    name: "computed_setpoint_entity",
    selector: { entity: { domain: ["sensor"] } },
  },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "offset_min", selector: { number: { mode: "box", step: 1 } } },
      { name: "offset_max", selector: { number: { mode: "box", step: 1 } } },
      { name: "offset_step", selector: { number: { mode: "box", step: 1 } } },
    ],
  },
  {
    name: "dhw_setpoint_entity",
    selector: { entity: { domain: ["number", "input_number"] } },
  },
  {
    name: "dhw_setpoint_display_entity",
    selector: { entity: { domain: ["sensor", "number"] } },
  },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "dhw_min", selector: { number: { mode: "box", step: 1 } } },
      { name: "dhw_max", selector: { number: { mode: "box", step: 1 } } },
      { name: "dhw_step", selector: { number: { mode: "box", step: 1 } } },
    ],
  },
  {
    name: "ch_setpoint_entity",
    selector: { entity: { domain: ["number", "input_number"] } },
  },
  {
    name: "ch_setpoint_display_entity",
    selector: { entity: { domain: ["sensor", "number"] } },
  },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "ch_min", selector: { number: { mode: "box", step: 1 } } },
      { name: "ch_max", selector: { number: { mode: "box", step: 1 } } },
      { name: "ch_step", selector: { number: { mode: "box", step: 1 } } },
    ],
  },
  {
    name: "pressure_entity",
    selector: { entity: { domain: ["sensor"] } },
  },
];

const LABELS: Record<string, string> = {
  title: "Titlu card",
  status_entity: "Status boiler (sensor)",
  ch_switch_entity: "Switch CH / încălzire",
  thermoreg_entity: "Switch termoreglare",
  flame_power_entity: "Putere flacără (kW)",
  flow_temp_entity: "Temperatură TUR",
  return_temp_entity: "Temperatură RETUR",
  offset_entity: "Offset termoreglare (number, -14..+14)",
  computed_setpoint_entity: "Setpoint TUR calculat (sensor)",
  offset_min: "Offset min",
  offset_max: "Offset max",
  offset_step: "Offset pas",
  dhw_setpoint_entity: "DHW setpoint (number, control)",
  dhw_setpoint_display_entity: "DHW setpoint (afișaj)",
  dhw_min: "DHW min",
  dhw_max: "DHW max",
  dhw_step: "DHW pas",
  ch_setpoint_entity: "CH setpoint (number, control)",
  ch_setpoint_display_entity: "CH setpoint (afișaj)",
  ch_min: "CH min",
  ch_max: "CH max",
  ch_step: "CH pas",
  pressure_entity: "Presiune (sensor)",
};

@customElement("ebusd-clasone-card-editor")
export class EbusdClasOneCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: BoilerCardConfig;

  public setConfig(config: BoilerCardConfig): void {
    this._config = config;
  }

  private _computeLabel = (schema: { name: string }): string => {
    return LABELS[schema.name] ?? schema.name;
  };

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value as BoilerCardConfig;
    fireEvent(this as any, "config-changed", { config });
  }
}
