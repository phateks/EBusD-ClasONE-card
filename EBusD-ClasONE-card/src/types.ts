import { LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from "custom-card-helpers";

export interface BoilerCardConfig extends LovelaceCardConfig {
  type: string;
  title?: string;
  subtitle?: string;

  // Status
  status_entity?: string; // sensor.ebusd_boiler_boiler_status

  // Header toggles
  ch_switch_entity?: string; // switch.ebusd_boiler_heating_status (CH)
  thermoreg_entity?: string; // switch.heating_ebusd_boiler_thermoregulation_switch

  // Flow unit
  flame_power_entity?: string; // sensor.ebusd_boiler_flame_power_kw
  flow_temp_entity?: string; // TUR  (sensor.ebusd_boiler_lwt_temp)
  return_temp_entity?: string; // RETUR (sensor.ebusd_boiler_ewt_temp)

  // Offset / thermoregulation
  offset_entity?: string; // number.ariston_heating_flow_offset_1
  offset_min?: number; // -14
  offset_max?: number; // 14
  offset_step?: number; // 2
  computed_setpoint_entity?: string; // sensor.ebusd_boiler_ch_flow_setpoint (38)

  // Setpoints row
  dhw_setpoint_entity?: string; // number.ebusd_boiler_dhw_comfort_temp_set
  dhw_setpoint_display_entity?: string; // sensor.ebusd_boiler_dhw_current_target_temp
  dhw_min?: number; // 36
  dhw_max?: number; // 60
  dhw_step?: number; // 1

  ch_setpoint_entity?: string; // number.ebusd_boiler_z1_heat_setpoint_set
  ch_setpoint_display_entity?: string; // same number or sensor
  ch_min?: number; // 30
  ch_max?: number; // 80
  ch_step?: number; // 1

  pressure_entity?: string; // sensor.ebusd_boiler_boiler_pressure
}

export const CARD_VERSION = "1.0.0";

// Status mapping: raw ebusd boiler_status -> label + color key
export type StatusKind = "idle" | "ch" | "dhw" | "other";

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
