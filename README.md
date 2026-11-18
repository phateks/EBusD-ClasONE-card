# EBusD Clas One Card

A Home Assistant Lovelace card and companion setup documentation for monitoring and
controlling an **Ariston Clas One** through **ebusd** and MQTT.

This repository covers the complete path from the eBUS interface to the dashboard:

```text
Ariston Clas One
    -> compatible eBUS interface
    -> ebusd Home Assistant app
    -> MQTT broker and Home Assistant MQTT integration
    -> discovered Home Assistant entities
    -> EBusD Clas One Lovelace card
```

The card is only the dashboard layer. It does not install ebusd, configure MQTT, or
create boiler entities. Those parts must be set up and verified first.

## Documentation

- [End-to-end installation: ebusd, local CSV files, MQTT and the card](docs/SETUP.md)
- [Clas One CSV and entity reference](docs/CLASONE_ENTITIES.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Documentation index](docs/README.md)

## What the card displays

- Boiler status, CH and thermoregulation switches
- `EBUS OFFLINE` indicator in the status badge when ebusd or the eBUS link is down
- Red pressure tile when pressure is outside a configurable range
- Flame power and flow/return temperatures
- Optional outdoor temperature and boiler pressure
- Thermoregulation offset and, when configured, its computed flow setpoint
- DHW and CH setpoint controls

All card entities can be selected in the visual editor or set in YAML. All visible
labels can be customized. Values and controls depend on
the entities exposed by the user's ebusd/MQTT setup.

## Install the card

Install this repository as a Lovelace frontend card through HACS, or download
`ebusd-clasone-card.js` from a release and add it as a JavaScript module resource:

```yaml
url: /local/ebusd-clasone-card.js
type: module
```

For the separate ebusd app, Mosquitto, local configuration files, and MQTT discovery
steps, follow the [end-to-end setup guide](docs/SETUP.md).

## Example card configuration

Entity IDs below are examples. Select the entities actually created in your Home
Assistant instance; names vary with the ebusd configuration, MQTT discovery settings,
and entity registry.

```yaml
type: custom:ebusd-clasone-card
title: ARISTON CLAS ONE
status_entity: sensor.ebusd_boiler_boiler_status
ch_switch_entity: switch.ebusd_boiler_heating_status
thermoreg_entity: switch.ebusd_boiler_thermoregulation_switch
flame_power_entity: sensor.ebusd_boiler_flame_power_kw
flow_temp_entity: sensor.ebusd_boiler_lwt_temp
return_temp_entity: sensor.ebusd_boiler_ewt_temp
outdoor_temp_entity: sensor.ebusd_boiler_ext_temp
pressure_entity: sensor.ebusd_boiler_boiler_pressure
offset_entity: number.ebusd_boiler_z1_heat_offset_set
computed_setpoint_entity: sensor.ebusd_boiler_ch_flow_setpoint
dhw_setpoint_entity: number.ebusd_boiler_dhw_comfort_temp_set
dhw_setpoint_display_entity: sensor.ebusd_boiler_dhw_current_target_temp
ch_setpoint_entity: number.ebusd_boiler_z1_heat_setpoint_set
flow_temp_label: TUR
return_temp_label: RETUR
outdoor_temp_label: EXT
pressure_label: PRESSURE
```

### Optional settings

| Option | Default | Description |
| --- | --- | --- |
| `connection_entity` | none | Entity that is `on` while ebusd has an eBUS signal. When it is off or unavailable, the status badge shows `EBUS OFFLINE`. |
| `pressure_min` / `pressure_max` | `1.0` / `2.5` | The pressure tile turns red outside this range (bar). |
| `offset_min` / `offset_max` / `offset_step` | `-14` / `14` / `2` | Offset range and step for the − / + buttons. The starting value is read from `offset_entity`. |
| `dhw_consumption_entity` / `ch_consumption_entity` | none | Sensors for DHW and CH consumption. When at least one is set, a consumption box appears next to the offset box with DHW, CH and their total. Without them, the offset box takes the full width. The unit comes from the sensor (`kW` if missing). |
| `consumption_label` / `consumption_decimals` | `CONSUM` / `1` | Title and decimals of the consumption box. |
| `dhw_min` / `dhw_max` / `dhw_step` | entity attributes, else `36` / `60` / `1` | DHW setpoint range. |
| `ch_min` / `ch_max` / `ch_step` | entity attributes, else `30` / `80` / `1` | CH setpoint range. |
| `ch_switch_label`, `thermoreg_label`, `flame_label`, `offset_label`, `dhw_setpoint_label`, `ch_setpoint_label` | `CH`, `TERMOREGLARE`, `FLAME`, `OFFSET TERMOREGLARE`, `DHW SETPOINT`, `CH SETPOINT` | Label overrides. |

Without `connection_entity`, the card shows `EBUS OFFLINE` when the status sensor
becomes unavailable or unknown. ebusd publishes its signal state on the MQTT topic
`ebusd/global/signal`. If no entity exists for it, an MQTT binary sensor can be added
to `configuration.yaml`. Check the exact topic and payloads in MQTT Explorer first:

```yaml
mqtt:
  binary_sensor:
    - name: "ebusd signal"
      unique_id: ebusd_global_signal
      state_topic: "ebusd/global/signal"
      payload_on: "true"
      payload_off: "false"
      device_class: connectivity
```

The sample IDs are not guaranteed to match your installation. In particular, check the
entity domains for the two switches and writable setpoints before assigning them. See
the [entity reference](docs/CLASONE_ENTITIES.md) for the relationship between CSV
messages and card fields.

## Project files

- `src/` — card, editor, types and styles
- `ebusd-clasone-card.js` — built frontend bundle distributed by HACS/manual install
- [`ebusd/ariston/clas_one.csv`](docs/ebusd/ariston/clas_one.csv) — local Clas One
  ebusd message definitions
- [`ebusd/_templates.csv`](docs/ebusd/_templates.csv) — shared CSV templates used by
  the local definitions

The local CSV files are optional and are not a complete replacement for the standard
ebusd configuration CDN. Review the [installation guide](docs/SETUP.md) and the
[CSV-specific notes](docs/CLASONE_ENTITIES.md) before using them. The provided files
include write definitions and a message-ID discrepancy that must be checked against
your boiler and ebusd logs.

## Development

```bash
npm ci
npm run build
```

The build writes `ebusd-clasone-card.js` to the repository root.

## License

MIT. See [LICENSE](LICENSE).
