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
- Flame power and flow/return temperatures
- Optional outdoor temperature and boiler pressure
- Thermoregulation offset and, when configured, its computed flow setpoint
- DHW and CH setpoint controls

All card entities can be selected in the visual editor or set in YAML. The four
temperature/pressure tile labels can also be customized. Values and controls depend on
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

The sample IDs are not guaranteed to match your installation. In particular, check the
entity domains for the two switches and writable setpoints before assigning them. See
the [entity reference](docs/CLAS_ONE_ENTITIES.md) for the relationship between CSV
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
[CSV-specific notes](docs/CLAS_ONE_ENTITIES.md) before using them. The provided files
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
