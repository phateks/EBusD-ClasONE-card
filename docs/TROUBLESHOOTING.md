# Troubleshooting

Work through the layers in order. A missing card value is often caused upstream of
the card.

## 1. Check the physical eBUS connection and ebusd

- Confirm that the eBUS adapter is compatible and selected correctly in the eBUSd app.
- Check the app log for adapter connection, bus activity and scan/configuration errors.
- Use the app's terminal/`ebusctl` where available to inspect `info`, `scan result` and
  a read of the message in question. Use the command syntax documented by the current
  ebusd version.
- A CSV definition does not prove the boiler transmits that message or that the
  addresses/frame match your installation.

## 2. Check MQTT broker connectivity

- Confirm the Mosquitto broker app and the Home Assistant MQTT integration are running.
- Check eBUSd logs for MQTT connection failures.
- When using an external broker, verify host, port, credentials, firewall and network
  reachability. Do not paste passwords into public issue reports.
- The eBUSd app normally receives broker credentials from the Supervisor when using
  the Mosquitto app; avoid adding a second, conflicting broker configuration.

## 3. Check MQTT discovery and entity creation

- Verify the eBUSd app's **Seed HA MQTT integration config** setting and its logs.
- The seeded `mqtt-hassio.cfg` is created on first start and is not overwritten on
  every restart. Back it up before editing.
- Discovery filters can omit a message even when it exists in a CSV. Check the active
  `mqtt-hassio.cfg`, whether the message has been observed, and whether the current
  filter includes its circuit/name/direction.
- Look under **Settings → Devices & services → MQTT → Devices**, then inspect exact
  IDs, domain, units and state in **Developer tools → States**.
- Home Assistant may preserve an entity ID in its entity registry after message names
  or discovery configuration change. Do not rely on guessed IDs.

## 4. Check local CSV paths

For the LukasGrebe eBUSd app, `/config` inside the container maps to its dedicated host
app folder under `/addon_configs/<slug>/`. It is not the Home Assistant Core `/config`
directory.

If the app reports no CSV files:

- Confirm `--configpath` points to the directory that directly contains the language
  CSV files and/or manufacturer subdirectories.
- With a CDN checkout, point to its language directory (for example
  `/config/ebusd-configuration/en`), not the repository root.
- Confirm the local files preserve their expected directories and that the app can
  read them.
- Put each ebusd flag in its own app `commandline_options` entry.
- Read any “Did you mean…” or config path hints in the startup log.

See the app's current
[custom message definitions documentation](https://github.com/LukasGrebe/ha-addons/tree/main/ebusd#custom-message-definitions)
before changing the config source.

## 5. Check card configuration and behavior

- Select entities from the actual Home Assistant entity picker; do not assume the
  sample entity IDs exist on your system.
- `—` means the entity is missing, unavailable, or its state is non-numeric for a
  numeric tile.
- Status text other than the recognized values is shown as uppercase raw text.
- If toggles do not act, confirm the selected entity is a working HA switch and that
  the corresponding ebusd write definition and permissions are in place.
- If setpoints do not change, confirm the entity is in the `number` domain and accepts
  `number.set_value`; verify its min/max/step and ebusd write definition.
- The CH setpoint control is intentionally disabled while thermoregulation is on.
- If outdoor temperature is unavailable, use another HA temperature entity or verify
  the local `ext_temp` message. The included CSV has a `200f/7647` versus `2010/7647`
  comment/definition discrepancy; see the [entity reference](CLASONE_ENTITIES.md).

## 6. Updating the card frontend

After replacing the bundle or installing an update:

1. Confirm the served `ebusd-clasone-card.js` is the new file.
2. Reload the Home Assistant dashboard/browser and clear cached frontend resources if
   needed.
3. For a HACS installation, allow HACS to finish the update before refreshing.

## Reporting an issue

Include the Home Assistant version, eBUSd app version, adapter type, relevant redacted
startup log lines, the relevant CSV row, and whether the MQTT entity exists. Never
include MQTT passwords, tokens, public IPs, or other secrets.
