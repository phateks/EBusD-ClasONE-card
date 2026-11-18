import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from "custom-card-helpers";

export interface BoilerCardConfig extends LovelaceCardConfig {
  type: string;
  title?: string;
  subtitle?: string;

  // Status
  status_entity?: string; // sensor.ebusd_boiler_boiler_status
  connection_entity?: string; // binary_sensor for the eBUS signal (on = connected)

  // Header toggles
  ch_switch_entity?: string; // switch.ebusd_boiler_heating_status (CH)
  thermoreg_entity?: string; // switch.ebusd_boiler_thermoregulation_switch
  ch_switch_label?: string;
  thermoreg_label?: string;

  // Flow unit
  flame_power_entity?: string; // sensor.ebusd_boiler_flame_power_kw
  flame_label?: string;
  flow_temp_entity?: string; // TUR  (sensor.ebusd_boiler_lwt_temp)
  return_temp_entity?: string; // RETUR (sensor.ebusd_boiler_ewt_temp)
  outdoor_temp_entity?: string; // Outdoor temperature sensor
  flow_temp_label?: string;
  return_temp_label?: string;
  outdoor_temp_label?: string;
  pressure_label?: string;

  // Offset / thermoregulation
  offset_entity?: string; // number.ebusd_boiler_z1_heat_offset_set
  offset_label?: string;
  offset_min?: number; // -14
  offset_max?: number; // 14
  offset_step?: number; // 2
  computed_setpoint_entity?: string; // sensor.ebusd_boiler_ch_flow_setpoint

  // Consumption box (optional). Shown next to the offset box when at least one
  // entity is set; otherwise the offset box keeps the full width.
  dhw_consumption_entity?: string;
  ch_consumption_entity?: string;
  consumption_label?: string;
  consumption_decimals?: number; // default 1

  // Setpoints row
  dhw_setpoint_entity?: string; // number.ebusd_boiler_dhw_comfort_temp_set
  dhw_setpoint_display_entity?: string; // sensor.ebusd_boiler_dhw_current_target_temp
  dhw_setpoint_label?: string;
  dhw_min?: number; // 36
  dhw_max?: number; // 60
  dhw_step?: number; // 1

  ch_setpoint_entity?: string; // number.ebusd_boiler_z1_heat_setpoint_set
  ch_setpoint_display_entity?: string; // same number or sensor
  ch_setpoint_label?: string;
  ch_min?: number; // 30
  ch_max?: number; // 80
  ch_step?: number; // 1

  // Pressure
  pressure_entity?: string; // sensor.ebusd_boiler_boiler_pressure
  pressure_min?: number; // below this the pressure tile turns red (default 1.0)
  pressure_max?: number; // above this the pressure tile turns red (default 2.5)
}

export const CARD_VERSION = "0.3.0";

export const DEFAULTS = {
  title: "ARISTON CLAS ONE",
  ch_switch_label: "CH",
  thermoreg_label: "TERMOREGLARE",
  flame_label: "FLAME",
  flow_temp_label: "TUR",
  return_temp_label: "RETUR",
  outdoor_temp_label: "EXT",
  pressure_label: "PRESIUNE",
  offset_label: "OFFSET TERMOREGLARE",
  dhw_setpoint_label: "DHW SETPOINT",
  ch_setpoint_label: "CH SETPOINT",
  consumption_label: "CONSUM",
  consumption_decimals: 1,
  offset: { min: -14, max: 14, step: 2 },
  dhw: { min: 36, max: 60, step: 1 },
  ch: { min: 30, max: 80, step: 1 },
  pressure_min: 1.0,
  pressure_max: 2.5,
} as const;

// Status mapping: raw ebusd boiler_status -> label + color key
export type StatusKind = "idle" | "ch" | "dhw" | "other" | "offline";

export function mapStatus(raw: string | undefined): { label: string; kind: StatusKind } {
  if (!raw) return { label: "—", kind: "other" };
  const s = raw.toLowerCase();
  if (s === "standby") return { label: "IDLE", kind: "idle" };
  if (s === "heating") return { label: "CH HEATING", kind: "ch" };
  if (s === "heating hot water" || s === "water tank" || s === "comfort")
    return { label: "DHW HEATING", kind: "dhw" };
  return { label: raw.toUpperCase(), kind: "other" };
}

declare global {
  interface HTMLElementTagNameMap {
    "ebusd-clasone-card": LovelaceCard;
    "ebusd-clasone-card-editor": LovelaceCardEditor;
  }
  interface Window {
    customCards?: Array<{
      type: string;
      name: string;
      description: string;
      preview?: boolean;
      documentationURL?: string;
    }>;
  }
}
