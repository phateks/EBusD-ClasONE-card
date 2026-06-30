# EBusD Clas One Card

A custom Lovelace card for **Ariston Clas One** boilers integrated via **[ebusd](https://github.com/john30/ebusd)** (with optional Ariston-cloud fallback for values ebusd doesn't expose, such as the computed flow setpoint).

Shows, in one compact card:

- **Status** badge (IDLE / CH HEATING / DHW HEATING) derived from the boiler status sensor
- **CH** and **Thermoregulation** toggles in the header
- **Flame** power (kW) with an animated flame when burning
- **TUR / RETUR** (flow / return) temperatures
- **Thermoregulation offset** (−14…+14) with a slider, plus the **computed flow setpoint** shown next to the title when thermoregulation is active
- **DHW setpoint** and **CH setpoint** with −/+ controls
- **Pressure** (bar)

All entities are configurable through a visual editor — nothing is hardcoded.

![preview](docs/preview.png)

## Installation

### HACS (recommended)

1. In HACS → **Frontend** → three-dot menu → **Custom repositories**.
2. Add this repository URL, category **Lovelace** (Dashboard).
3. Install **EBusD Clas One Card**.
4. Reload your browser (Ctrl+Shift+R).

### Manual

1. Download `ebusd-clasone-card.js` from the [latest release](../../releases).
2. Copy it to `/config/www/`.
3. Add the resource (Settings → Dashboards → Resources):
   ```yaml
   url: /local/ebusd-clasone-card.js
   type: module
   ```

## Usage

Add the card via the UI ("Add card" → search **EBusD Clas One**) and use the visual editor, or in YAML:

```yaml
type: custom:ebusd-clasone-card
title: ARISTON CLAS ONE
status_entity: sensor.ebusd_boiler_boiler_status
ch_switch_entity: switch.ebusd_boiler_heating_status
thermoreg_entity: switch.heating_ebusd_boiler_thermoregulation_switch
flame_power_entity: sensor.ebusd_boiler_flame_power_kw
flow_temp_entity: sensor.ebusd_boiler_lwt_temp
return_temp_entity: sensor.ebusd_boiler_ewt_temp
offset_entity: number.ariston_heating_flow_offset_1
offset_min: -14
offset_max: 14
offset_step: 2
computed_setpoint_entity: sensor.ebusd_boiler_ch_flow_setpoint
dhw_setpoint_entity: number.ebusd_boiler_dhw_comfort_temp_set
dhw_setpoint_display_entity: sensor.ebusd_boiler_dhw_current_target_temp
dhw_min: 36
dhw_max: 60
dhw_step: 1
ch_setpoint_entity: number.ebusd_boiler_z1_heat_setpoint_set
ch_min: 30
ch_max: 80
ch_step: 1
pressure_entity: sensor.ebusd_boiler_boiler_pressure
```

## Configuration options

| Option | Type | Default | Description |
|---|---|---|---|
| `title` | string | `ARISTON CLAS ONE` | Card title |
| `status_entity` | sensor | — | Boiler status (mapped to IDLE / CH / DHW) |
| `ch_switch_entity` | switch | — | Central-heating toggle |
| `thermoreg_entity` | switch | — | Thermoregulation toggle |
| `flame_power_entity` | sensor | — | Flame power in kW (animates when > 0.1) |
| `flow_temp_entity` | sensor | — | Flow (TUR) temperature |
| `return_temp_entity` | sensor | — | Return (RETUR) temperature |
| `offset_entity` | number | — | Thermoregulation flow offset |
| `offset_min` / `offset_max` / `offset_step` | number | −14 / 14 / 2 | Offset slider range |
| `computed_setpoint_entity` | sensor | — | Computed flow setpoint, shown next to the title when thermoregulation is on |
| `dhw_setpoint_entity` | number | — | DHW setpoint (the −/+ control writes here) |
| `dhw_setpoint_display_entity` | sensor/number | = control | Value shown in the DHW box |
| `dhw_min` / `dhw_max` / `dhw_step` | number | 36 / 60 / 1 | DHW limits |
| `ch_setpoint_entity` | number | — | CH setpoint (control) |
| `ch_setpoint_display_entity` | sensor/number | = control | Value shown in the CH box |
| `ch_min` / `ch_max` / `ch_step` | number | 30 / 80 / 1 | CH limits |
| `pressure_entity` | sensor | — | System pressure (bar) |

Any option you leave empty simply hides that part of the card.

## Notes on the computed flow setpoint

ebusd does not expose the thermoregulation-computed flow setpoint out of the box. On the Clas One it is broadcast on **`200f` / ID `6197`**. You can add it to your ebusd CSV:

```
b,boiler,ch_flow_setpoint,CH Flow Setpoint,37,fe,200f,6197,,,SIN,10,°C
```

Then point `computed_setpoint_entity` at the resulting `sensor.ebusd_boiler_ch_flow_setpoint`. If you prefer, you can use the Ariston cloud integration's `sensor.*_ch_flow_setpoint_temp` instead.

## Development

```bash
npm install
npm run build   # outputs ebusd-clasone-card.js (repo root)
npm run watch   # rebuild on change
```

## License

MIT
