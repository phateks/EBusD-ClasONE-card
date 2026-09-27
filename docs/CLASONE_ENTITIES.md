# Clas One messages and Home Assistant entities

This page explains the message names in the repository's
[`clas_one.csv`](ebusd/ariston/clas_one.csv) and how their values relate to the card.
The CSV is a local ebusd profile, not the Lovelace card configuration itself.

## Important: entity IDs are not guaranteed

The CSV message name, circuit, ebusd version, active MQTT integration file and Home
Assistant entity registry all affect the final entity ID and domain. The IDs below are
examples only. Before configuring the card, open **Developer tools → States** and
select the entities that actually exist in your installation.

The card also accepts entities from other integrations where the state/value and
service domain are compatible. For example, outdoor temperature may come from a
weather integration rather than ebusd.

## Card display/control map

| Card field | CSV message or source | Meaning and behavior |
|---|---|---|
| `status_entity` | `boiler_status` | Boiler state. Known strings `standby`, `heating`, `heating hot water`, `water tank` and `comfort` are mapped to card labels; other states are displayed as their uppercase value. |
| `ch_switch_entity` | `heating_status` | CH enable/disable switch. The card calls Home Assistant's `homeassistant.toggle` service. |
| `thermoreg_entity` | `thermoregulation_switch` | Thermoregulation enable/disable switch. The card calls `homeassistant.toggle`; its state also controls the OFFSET disabled style and CH setpoint lockout. |
| `flame_power_entity` | `flame_power_kw` | Current flame power, displayed in kW. The flame animation is based on a value greater than 0.1. |
| `flow_temp_entity` | `LWT_temp` | CH flow temperature (TUR), in °C. |
| `return_temp_entity` | `EWT_temp` | CH return temperature (RETUR), in °C. |
| `outdoor_temp_entity` | `ext_temp` in the provided profile, or another HA sensor | Optional outdoor temperature. The card displays one decimal and `°C`. The current CSV's active message ID conflicts with its comments; verify it before relying on it. |
| `pressure_entity` | `boiler_pressure` | Boiler/system pressure in bar. |
| `offset_entity` | `z1_heat_offset_set` write control and the corresponding offset read/broadcast definition | Thermoregulation offset control. Select the actual writable number entity. Slider min/max/step should agree with the entity and boiler configuration. |
| `computed_setpoint_entity` | `ch_flow_setpoint` | Computed CH flow target in °C; shown beside the OFFSET title while thermoregulation is on. |
| `dhw_setpoint_entity` | `dhw_comfort_temp_set` | Writable DHW comfort target. The card's +/- controls call `number.set_value`. |
| `dhw_setpoint_display_entity` | `dhw_current_target_temp` or another sensor/number | Optional display fallback if the writable DHW entity has no numeric state. |
| `ch_setpoint_entity` | `z1_heat_setpoint_set` | Writable CH zone 1 target. The card disables +/- while thermoregulation is on. |
| `ch_setpoint_display_entity` | Optional sensor/number | Optional display fallback for the CH control. |

Tile names can be customized independently with `flow_temp_label`,
`return_temp_label`, `outdoor_temp_label` and `pressure_label`. Defaults are `TUR`,
`RETUR`, `EXT` and `PRESIUNE`.

### Status handling

The profile defines numeric boiler status values with labels such as `standby`,
`heating`, `heating hot water`, `water tank`, `circulating`, `manual test`,
`comfort`, `gas_circuit_deaeration`, `auto_calibration`, `low_water_pressure` and
`no_flame`. MQTT discovery may expose a translated label, a number or another state
representation depending on the active configuration. The card only maps the five
strings listed in the table; any other state is shown as text rather than being
silently treated as idle.

## Messages in the provided CSV

The profile contains more than the fields used by the card.

### Temperature, status and pressure

| CSV message | Defined value | Purpose |
|---|---|---|
| `LWT_temp` | CH flow temperature (`6810`, `SIN`, scale 10, °C) | TUR tile |
| `EWT_temp` | CH return temperature (`6910`, `SIN`, scale 10, °C) | RETUR tile |
| `boiler_pressure` | System pressure (`7547`, `UCH`, scale 10, bar) | Pressure tile |
| `flame_power_kw` | Flame power (`6847`, `UIN`, scale 10, kW) | Flame tile |
| `flame_active` | Flame active flag (`0e11`, `onoff`) | Additional signal; the card animation uses flame power instead |
| `boiler_status` | Boiler status (`c04b`) | Header status |
| `last_error` | Error code and date fields (`0400`) | Additional diagnostic message; decoding depends on error-code templates |
| `ext_temp` | Outdoor temperature, defined as `SIN` scale 10, °C | Optional EXT tile; see the discrepancy warning below |
| `dhw_current_target_temp` | DHW current target (`6147`, `UCH`, scale 2, °C) | Optional DHW display fallback |
| `ch_flow_setpoint` | CH flow setpoint (`6197`, `SIN`, scale 10, °C) | Computed flow target display |
| `z1_setpoint_temp` | Zone 1 current setpoint (`6996`, `SIN`, scale 10, °C) | Additional CH diagnostic |
| `z1_heat_request` | Zone 1 heating request (`0191`, off/on values) | Additional CH diagnostic |

`SIN`, `UIN` and `UCH` are ebusd data types; the scale/unit fields are part of the
message definition. The actual Home Assistant state and unit should be checked after
MQTT discovery rather than inferred from an entity ID.

### Writable switches and targets

| CSV message | What it represents |
|---|---|
| `heating_status` | CH enable switch: broadcast/read state plus write definition |
| `dhw_status` | DHW enable switch: broadcast/read state plus write definition |
| `thermoregulation_switch` | Thermoregulation enable switch: broadcast/read state plus write definition |
| `dhw_comfort_temp_set` | Writable DHW comfort temperature |
| `dhw_economy_temp_set` | Writable DHW economy temperature |
| `dhw_comfort_mode` | DHW comfort mode (`off`, `timed`, `always_on`) |
| `z1_day_temp_set` | Zone 1 day target |
| `z1_night_temp_set` | Zone 1 night target |
| `z1_heat_setpoint_set` | Zone 1 CH target used by the card's CH control |
| `z1_heat_water_max_temp_set` | Zone 1 maximum heating-water temperature |
| `z1_heat_water_min_temp_set` | Zone 1 minimum heating-water temperature |
| `z1_heat_therm_type` | Thermoregulation type/mode |
| `z1_heat_offset_set` | Writable zone 1 offset used by the card |
| `z1_heat_offset` | Corresponding broadcast/read offset value |

These definitions can issue commands to the boiler. Confirm that the setpoint ranges
and entity services match your installation before exposing them to users or automations.

### Counters and diagnostics

The CSV also defines burner CH/DHW hours, pump hours, ignition and diverter cycles,
flame lift-offs, circulation/fan cycles, boiler lifetime, nominal power, boiler type,
pump operation/modulation, gas modulation, maximum/minimum power percentages, warning
pressure, post-circulation time, maintenance months, maintenance warning enablement,
and boiler software version.

These are additional ebusd messages; they are not automatically displayed by this card.
Their availability depends on whether the boiler responds to the requests and whether
the MQTT integration configuration publishes them.

## Outdoor-temperature definition discrepancy

In the current `clas_one.csv`, the active row is:

```text
b,boiler,ext_temp,External Temp,37,fe,200f,7647,,,SIN,10,°C
```

The adjacent comments describe frame `2010/7647`, not `200f/7647`. This is a real
inconsistency in the repository file. Do not infer the correct frame from the comment
or this documentation alone. Verify it against a confirmed trace for your adapter,
boiler and current ebusd version before using the local row. If your outdoor sensor
already comes from another HA integration, configure that entity instead and omit
`ext_temp` from the local file if it is not validated.

## Shared `_templates.csv`

The [`_templates.csv`](ebusd/_templates.csv) file defines shared data types such as
on/off, thermoregulation modes and pump operation. It also contains a large
`error_code` mapping. Its comments say those error labels were collected for an Ariston
Hybrid/Nimbus/Genus One Hybrid setup and may be configuration-specific. Do not assume
every error number or label is valid for every Clas One.

## What the card does with values

- Sensor tiles open the entity's Home Assistant more-info dialog when tapped.
- Numeric sensor states are parsed as numbers; missing or non-numeric states display
  `—`.
- Outdoor temperature is formatted to one decimal place with `°C`; TUR/RETUR use
  whole degrees; pressure uses one decimal place with `bar`.
- CH/DHW +/- buttons change the configured number by the selected step and clamp it to
  the card's configured minimum/maximum. Configure these to match the underlying HA
  number entity.
- Switch badges call `homeassistant.toggle`; setpoints call `number.set_value`.
- The card does not write raw MQTT messages or communicate with ebusd directly.
