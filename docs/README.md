# Documentation

This project documents both the Lovelace card and the ebusd/MQTT path that supplies
its data.

1. [End-to-end setup](SETUP.md) — compatible hardware, the Home Assistant ebusd app,
   Mosquitto, local CSV files, MQTT discovery and card installation.
2. [Clas One CSV and entity reference](CLASONE_ENTITIES.md) — what the included
   ebusd messages represent and how they connect to card fields.
3. [Troubleshooting](TROUBLESHOOTING.md) — checks for bus communication, MQTT discovery,
   entity IDs, and card controls.

The files in [`ebusd/`](ebusd/) are optional local message definitions. They are
provided as a starting point for the tested setup described in the comments, not as a
universal configuration for every Ariston model, firmware, eBUS adapter, or ebusd
version.
