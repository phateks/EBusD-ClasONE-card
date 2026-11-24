import { LitElement, html, nothing, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, LovelaceCardEditor, fireEvent } from "custom-card-helpers";
import { BoilerCardConfig, DEFAULTS } from "./types";

const entity = (name: string, domain: string[]) => ({
  name,
  selector: { entity: { domain } },
});
const text = (name: string) => ({ name, selector: { text: {} } });
const box = (name: string, step = 1) => ({
  name,
  selector: { number: { mode: "box", step } },
});
const grid = (schema: unknown[]) => ({ type: "grid", name: "", schema });
const section = (title: string, schema: unknown[], expanded = false) => ({
  type: "expandable",
  name: "",
  title,
  expanded,
  schema,
});

const SCHEMA = [
  grid([text("title"), text("height")]),
  section(
    "Status și conexiune",
    [
      entity("status_entity", ["sensor"]),
      entity("connection_entity", ["binary_sensor", "sensor"]),
      entity("ch_switch_entity", ["switch", "input_boolean"]),
      entity("thermoreg_entity", ["switch", "input_boolean"]),
      grid([text("ch_switch_label"), text("thermoreg_label")]),
    ],
    true
  ),
  section("Temperaturi, flacără și presiune", [
    entity("flame_power_entity", ["sensor"]),
    grid([text("flame_label"), box("flame_max", 0.5)]),
    { name: "flame_glow", selector: { boolean: {} } },
    entity("flow_temp_entity", ["sensor"]),
    text("flow_temp_label"),
    entity("return_temp_entity", ["sensor"]),
    text("return_temp_label"),
    entity("outdoor_temp_entity", ["sensor"]),
    text("outdoor_temp_label"),
    entity("pressure_entity", ["sensor"]),
    text("pressure_label"),
    grid([box("pressure_min", 0.1), box("pressure_max", 0.1)]),
  ]),
  section("Termoreglare", [
    entity("offset_entity", ["number", "input_number"]),
    text("offset_label"),
    entity("computed_setpoint_entity", ["sensor"]),
    grid([box("offset_min"), box("offset_max"), box("offset_step")]),
  ]),
  section("Consum (opțional)", [
    entity("dhw_consumption_entity", ["sensor"]),
    entity("ch_consumption_entity", ["sensor"]),
    grid([text("consumption_label"), box("consumption_decimals")]),
  ]),
  section("Setpoint-uri DHW / CH", [
    entity("dhw_setpoint_entity", ["number", "input_number"]),
    entity("dhw_setpoint_display_entity", ["sensor", "number"]),
    text("dhw_setpoint_label"),
    grid([box("dhw_min"), box("dhw_max"), box("dhw_step")]),
    entity("ch_setpoint_entity", ["number", "input_number"]),
    entity("ch_setpoint_display_entity", ["sensor", "number"]),
    text("ch_setpoint_label"),
    grid([box("ch_min"), box("ch_max"), box("ch_step")]),
  ]),
];

const LABELS: Record<string, string> = {
  title: "Titlu card",
  status_entity: "Status boiler (sensor)",
  connection_entity: "Conexiune eBUS (opțional, on = conectat)",
  ch_switch_entity: "Switch CH / încălzire",
  thermoreg_entity: "Switch termoreglare",
  ch_switch_label: "Nume buton CH",
  thermoreg_label: "Nume buton termoreglare",
  flame_power_entity: "Putere flacără (kW)",
  flame_label: "Nume casetă flacără",
  flame_max: "Putere maximă inel flacără (kW)",
  flame_glow: "Glow pe flacără când centrala cere căldură",
  height: "Înălțime card (ex. 360px; gol = automat)",
  flow_temp_entity: "Temperatură TUR",
  flow_temp_label: "Nume casetă TUR",
  return_temp_entity: "Temperatură RETUR",
  return_temp_label: "Nume casetă RETUR",
  outdoor_temp_entity: "Temperatură exterioară",
  outdoor_temp_label: "Nume casetă exterioară",
  pressure_entity: "Presiune (sensor)",
  pressure_label: "Nume casetă presiune",
  pressure_min: `Alarmă sub (bar, implicit ${DEFAULTS.pressure_min})`,
  pressure_max: `Alarmă peste (bar, implicit ${DEFAULTS.pressure_max})`,
  offset_entity: "Offset termoreglare (number)",
  offset_label: "Titlu offset",
  computed_setpoint_entity: "Setpoint TUR calculat (sensor)",
  offset_min: "Offset min",
  offset_max: "Offset max",
  offset_step: "Offset pas",
  dhw_consumption_entity: "Consum DHW (sensor)",
  ch_consumption_entity: "Consum CH (sensor)",
  consumption_label: "Titlu casetă consum",
  consumption_decimals: "Zecimale consum",
  dhw_setpoint_entity: "DHW setpoint (number, control)",
  dhw_setpoint_display_entity: "DHW setpoint (afișaj)",
  dhw_setpoint_label: "Titlu DHW",
  dhw_min: "DHW min",
  dhw_max: "DHW max",
  dhw_step: "DHW pas",
  ch_setpoint_entity: "CH setpoint (number, control)",
  ch_setpoint_display_entity: "CH setpoint (afișaj)",
  ch_setpoint_label: "Titlu CH",
  ch_min: "CH min",
  ch_max: "CH max",
  ch_step: "CH pas",
};

const HELPERS: Record<string, string> = {
  connection_entity:
    "Când e off/indisponibil, badge-ul de status arată EBUS OFFLINE. Fără ea, cardul se bazează doar pe senzorul de status.",
  offset_min: `Gol = implicit ${DEFAULTS.offset.min} / ${DEFAULTS.offset.max}, pas ${DEFAULTS.offset.step}.`,
  dhw_consumption_entity:
    "Dacă nu setezi niciun senzor de consum, caseta nu apare și offset-ul ocupă tot rândul. Totalul = DHW + CH.",
  dhw_min: "Gol = valoarea din entitate.",
  ch_min: "Gol = valoarea din entitate.",
};

@customElement("ebusd-clasone-card-editor")
export class EbusdClasOneCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: BoilerCardConfig;

  public setConfig(config: BoilerCardConfig): void {
    this._config = config;
  }

  private _computeLabel = (schema: { name: string }): string =>
    LABELS[schema.name] ?? schema.name;

  private _computeHelper = (schema: { name: string }): string | undefined =>
    HELPERS[schema.name];

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) return nothing;
    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = { ...(ev.detail.value as BoilerCardConfig) };
    // Drop cleared fields so defaults / entity attributes apply again.
    for (const key of Object.keys(config)) {
      const v = config[key];
      if (v === "" || v === undefined || v === null) delete config[key];
    }
    fireEvent(this as any, "config-changed", { config });
  }
}
