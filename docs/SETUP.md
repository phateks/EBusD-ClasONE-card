# End-to-end setup

This guide describes the path from a Clas One boiler to the card:

```text
Boiler -> eBUS interface -> ebusd app -> MQTT broker -> HA MQTT integration -> entities -> card
```

The card does not communicate with the boiler or broker directly. It reads Home
Assistant states and calls Home Assistant services for controls. Complete and verify
the ebusd/MQTT setup before configuring the card.

## Requirements and responsibilities

- An Ariston Clas One installation connected to eBUS.
- An eBUS interface supported by [ebusd](https://github.com/john30/ebusd/wiki/6.-Hardware).
  The interface is required hardware; the ebusd app alone cannot connect to the boiler.
- Home Assistant OS or a Supervisor-based installation that supports Home Assistant
  apps/add-ons.
- An MQTT broker reachable by Home Assistant and ebusd. This guide uses the official
  Mosquitto broker app.
- The EBusD Clas One card frontend, installed separately through HACS or manually.

The eBUSd app is a third-party wrapper around the upstream ebusd daemon. It is separate
from both the Home Assistant MQTT integration and this Lovelace card.

## 1. Install the MQTT broker and integration

1. In Home Assistant, open **Settings → Apps → App store** (called **Add-ons** in
   older Home Assistant versions).
2. Install and start the official
   [Mosquitto broker app](https://github.com/home-assistant/addons/tree/master/mosquitto).
3. Confirm the **MQTT** integration is present under **Settings → Devices & services**.
   If it is not configured automatically, add the built-in MQTT integration and follow
   its setup flow.

The broker transports messages. The MQTT integration connects Home Assistant to that
broker and creates Home Assistant entities from MQTT discovery messages. These are
related but separate components.

## 2. Install the eBUSd Home Assistant app

1. In the Apps store, open the menu for app repositories and add:
   `https://github.com/LukasGrebe/ha-addons`
2. Find **eBUSd**, install it, and open its configuration page.
3. Connect the eBUS interface:
   - **USB:** choose the adapter's TTY device, preferably its stable `/dev/serial/by-id/...`
     path.
   - **Network:** enter the full adapter device string, including its protocol prefix
     (for example `ens:192.168.1.100` or `enh:192.168.1.100:123`). Use the exact protocol
     and address required by your adapter.
   - Leave the device fields empty only if your adapter supports the app's mDNS
     discovery workflow.
4. Start the app and inspect its log for successful adapter connection and bus scanning.

The app's available settings can change between releases. Follow its current
[documentation](https://github.com/LukasGrebe/ha-addons/tree/main/ebusd) if a label or
option differs from this guide.

### Common eBUSd app options

The current app uses a **Commandline options** list. Put one flag in each list entry;
do not combine flags in one entry.

| Option | Purpose |
|---|---|
| `--scanconfig` | Scan the bus and select matching device definitions. |
| `--pollinterval=30` | Example of changing the polling interval; choose an appropriate rate for your system. |
| `--configpath=/config/ebusd-configuration/en` | Example path when using a local checkout of the eBUS CDN's English CSV configuration. |
| `--httpport=8889` | Enables the ebusd HTTP interface if you need it. |

Do not add MQTT broker credentials manually when using the Mosquitto app integration.
The eBUSd app can receive them from Supervisor. Avoid publishing logs or configuration
files containing broker credentials.

## 3. Decide whether to use the included local CSV files

ebusd 24.1 and later uses the [eBUS configuration CDN](https://ebus.github.io/) by
default. If the default configuration discovers your boiler and exposes the messages
you need, you can use it without the local files in this repository.

The repository's local files are optional additions:

- [`ebusd/_templates.csv`](ebusd/_templates.csv) contains shared CSV templates.
- [`ebusd/ariston/clas_one.csv`](ebusd/ariston/clas_one.csv) contains boiler-specific
  message definitions.

They are **not a complete copy of the CDN**. Do not point `--configpath` at a folder
containing only these files if you still rely on the CDN for device scanning or other
messages.

### Use local definitions alongside the CDN configuration

The current eBUSd app maps its own host configuration folder to `/config` inside the
container. The host folder for the LukasGrebe app is documented as
`/addon_configs/2ad9b828_ebusd/`; confirm the actual folder/slug in the app's current
documentation before using it.

To use a local checkout:

1. Back up the app configuration folder.
2. Place a local checkout of the
   [eBUS CDN repository](https://github.com/eBUS/ebus.github.io) under the app config
   folder, preserving its language and manufacturer directory structure.
3. Copy the provided files into the corresponding locations in that checkout:

   ```text
   /addon_configs/<slug>/ebusd-configuration/en/_templates.csv
   /addon_configs/<slug>/ebusd-configuration/en/ariston/clas_one.csv
   ```

   The corresponding paths inside the container are:

   ```text
   /config/ebusd-configuration/en/_templates.csv
   /config/ebusd-configuration/en/ariston/clas_one.csv
   ```

   If the CDN checkout already has an `_templates.csv`, back it up and merge the
   required definitions rather than silently replacing it.
4. Add these as separate entries in the eBUSd app's **Commandline options** list:

   ```text
   --configpath=/config/ebusd-configuration/en
   --scanconfig
   ```

5. Restart eBUSd. Read the logs and verify the config path, device scan, and loaded
   definitions before using writable entities.

The app's config volume is **not** the Home Assistant Core `/config` directory. For
the app path, use an access method with permission to reach `/addon_configs/<slug>/`,
such as the documented Studio Code Server, SSH or Samba workflow. Do not assume every
file-editor add-on can see this path.

### Safety notes for the included CSVs

- The provided profile includes **write** definitions for heating/DHW switches,
  temperature setpoints and thermoregulation offset. Those definitions can cause
  physical changes to the heating system. Confirm the target boiler, bus addresses,
  value ranges and behavior before enabling or using controls.
- The CSV comments describe a tested adapter/boiler setup, not a guarantee for every
  Clas One variant or firmware.
- There is a mismatch in the current outdoor-temperature definition: the active CSV row
  uses message ID `200f/7647`, while the adjacent comments describe `2010/7647`.
  Verify the correct message against your bus trace and ebusd logs before using this
  row. The card's outdoor-temperature tile itself can use any valid HA sensor.
- `_templates.csv` includes error-code labels noted in the file as originating from an
  Ariston Hybrid setup. They may not match every Clas One installation.
- Review the [full message reference](CLASONE_ENTITIES.md) before copying or modifying
  definitions.

## 4. Enable MQTT discovery and check entities

The LukasGrebe app's **Seed HA MQTT integration config** option is enabled by default.
On its first start, the app copies its bundled `mqtt-hassio.cfg` to its app config
folder and adds the ebusd MQTT JSON and integration-config options. This enables
Home Assistant MQTT discovery for matching, observed ebusd messages.

Important:

- The seeded file is not overwritten on subsequent starts. Back it up before editing.
- MQTT discovery filters messages. A CSV definition does not guarantee that an entity
  will appear: the message must be available/observed and pass the active integration
  filters.
- Entity IDs are assigned by Home Assistant and can differ from examples in this
  repository. Always select the real entity from your instance.
- A custom `--mqttint` or an external broker changes the setup. Follow the app's
  current instructions; do not copy credentials into a public YAML file.

Check the result in:

1. **Settings → Devices & services → MQTT → Devices** for discovered MQTT devices.
2. **Developer tools → States** to inspect exact entity IDs, state strings, units and
   availability.
3. The eBUSd app logs and, if needed, the app's `ebusctl` terminal for scan/read
   diagnostics.

The official [Home Assistant MQTT documentation](https://www.home-assistant.io/integrations/mqtt/)
explains broker setup, discovery, topics and entity naming.

## 5. Install and configure the card

Install the card through HACS (add this repository as a Lovelace dashboard custom
repository) or use the JavaScript bundle from a release:

1. Copy `ebusd-clasone-card.js` into Home Assistant's `/config/www/` directory.
2. Add this dashboard resource:

   ```yaml
   url: /local/ebusd-clasone-card.js
   type: module
   ```

3. Reload the browser/dashboard after installing or updating the bundle.
4. Add **EBusD Clas One Card** from the dashboard card picker and use its visual
   editor to select entities.

You can instead use YAML. The exact entity IDs depend on your MQTT setup:

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
```

The card's offset/DHW/CH min, max and step options control its slider/buttons; make
them match the actual number entity's limits and the boiler's supported settings.
While thermoregulation is on, the card disables the manual CH setpoint buttons.

For the meaning and origin of each message/entity, see the
[Clas One reference](CLASONE_ENTITIES.md). For failures, see
[Troubleshooting](TROUBLESHOOTING.md).

## References

- [LukasGrebe eBUSd app documentation](https://github.com/LukasGrebe/ha-addons/tree/main/ebusd)
- [Upstream ebusd](https://github.com/john30/ebusd)
- [Upstream ebusd run options](https://github.com/john30/ebusd/wiki/2.-Run)
- [Upstream eBUS configuration CDN](https://github.com/eBUS/ebus.github.io)
- [Home Assistant MQTT integration](https://www.home-assistant.io/integrations/mqtt/)
