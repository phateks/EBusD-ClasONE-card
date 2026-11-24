# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-11-24

This release changes only the documentation. The card's code and behaviour are the
same as in 1.0.3; the bundle differs only in the version it reports.

### Added

- "Open in HACS" button in the README and in the setup guide, to add the repository
  to HACS in one click.
- Screenshots in the README: wide (desktop) layout, the four states (CH heating, DHW
  heating, standby with a low pressure alarm, eBUS offline), a card stretched to a
  taller Sections slot, and the light theme.
- README sections that describe every part of the card (header, sensors, controls),
  the layout at each card width, and how the card fills a given height.
- Documentation for the `flame_max` and `flame_glow` options and for the
  `flow_temp_label`, `return_temp_label`, `outdoor_temp_label` and `pressure_label`
  label overrides.
- Troubleshooting entries for a flame ring that fills too early or never fills, and
  for a card that does not fill its Sections slot.

### Changed

- Installation instructions split into one click (HACS), HACS step by step, and
  manual install.
- New, smaller preview image.
- The setup guide and troubleshooting page mention the `AUTO` chip on the CH setpoint
  while thermoregulation is on.

### Fixed

- README images now use absolute URLs, so they also show on the repository page in
  HACS.
- The gas consumption section described a TOTAL row; the total is shown in the corner
  of the consumption box.

## [1.0.3] - 2026-11-24

### Added

- The card fills the height it is given: the rows set in a Sections dashboard, or
  the new `height` option (for example `height: 360px`). The inner tiles stretch
  to fill it, and the values, the flame ring and the − / + buttons scale with the
  tile size. The card never gets shorter than its content. Without a height from
  outside, it keeps its natural size.
- `height` field in the visual editor.

### Changed

- In a Sections dashboard the card now has a minimum of 4 rows, and the tiles
  stretch to fill the rows set in the card's layout options. To match the height
  of a neighbouring card, set the rows there (or `grid_options: rows: N` in YAML).
- The values, the flame ring and the − / + buttons no longer have fixed sizes;
  they scale with the tile. On small tiles some of them can be a little smaller
  than in 1.0.2 (for example the flame ring is at least 54px instead of 66px).

## [1.0.2] - 2026-11-23

### Added

- `flame_glow` option (default `true`): a soft glow on the flame tile while
  the boiler is asking for heat (CH/DHW status or a lit burner). Set
  `flame_glow: false` to turn it off. The visual editor has a toggle for it.

### Changed

- Removed the animated "electric" outline around the flame tile. While the
  boiler is asking for heat, the flame tile now shows only the soft glow.
- `electric_border` is deprecated and the visual editor no longer shows it.
  `electric_border: false` from 1.0.0 still works and turns the glow off.

## [1.0.1] - 2026-11-23

### Changed

- Removed the glow effects from the flame tile: the background glow while the
  burner is lit, the drop-shadow on the power ring and flame icon, and the halo
  and drop-shadow around the animated "electric" outline. The outline itself
  and the flame flicker animation are unchanged.
- Values on the flow, return, outdoor and pressure tiles are now right-aligned.

## [1.0.0] - 2026-11-23

### Added

- Flame power ring gauge on the flame tile (270° arc). Its full scale is set
  with the new `flame_max` option (kW, default 24).
- Animated "electric" outline around the flame tile while the boiler is asking
  for heat (CH/DHW status or a lit burner). Turn it off with
  `electric_border: false`. The animation stops when the system asks for reduced
  motion (`prefers-reduced-motion`).
- Pressure scale under the pressure value. A band marks the normal range
  (`pressure_min` … `pressure_max`) and a marker shows the current pressure.
- Thin bars under the offset, setpoint and consumption boxes: the offset bar is
  filled from 0, the setpoint bar shows the value within its min…max range and
  the consumption bar shows the DHW / CH split.
- `AUTO` chip on the CH setpoint while thermoregulation drives it, and an `OFF`
  chip on the offset box while thermoregulation is off.
- Icons on the flow, return, outdoor and pressure tiles.
- Visual editor fields for `flame_max` and `electric_border`.
- Gas energy counters `gas_energy_ch` / `gas_energy_dhw` (kWh) in the bundled
  ebusd CSV (`docs/ebusd/ariston/clas_one.csv`).
- README section on gas consumption, with a daily `utility_meter` example.

### Changed

- Redesigned card layout. The card takes its accent colour from the boiler
  status. The thermoregulation and CH buttons are toggle switches, the status
  badge has a pulsing dot during heating/DHW, and −/+ buttons use icons.
- The offset, consumption, DHW setpoint and CH setpoint boxes now share one
  grid: two columns on narrow cards, one row on wide cards.
- The layout now adapts to the card's own width (container queries) instead of
  the screen width, so it also fits narrow columns on wide screens.
- The consumption total moved into the consumption box header.
- Bundled ebusd CSV: burner hours, fan cycles and several read-only settings are
  no longer polled periodically (`r1` → `r`); `boiler_current_modulation` was
  removed from it.
- Updated the entity reference, setup and troubleshooting docs for the
  consumption box and offset buttons, and the preview screenshot.

## [0.3.1] - 2026-11-18

### Fixed

- The thermoregulation offset title is now aligned with the consumption box
  title (both on the top line of their boxes); the − / + stepper is centred in
  the remaining space.

## [0.3.0] - 2026-11-18

### Added

- Optional consumption box next to the thermoregulation offset, configured with
  `dhw_consumption_entity` and `ch_consumption_entity`. It shows DHW, CH and
  their total (DHW + CH); the unit is taken from the sensor. Without these
  entities the offset box keeps the full width.
- `consumption_label` and `consumption_decimals` options.
- Visual editor section for the consumption options.

### Changed

- The thermoregulation offset uses − / + buttons instead of a slider. The value
  starts from the boiler's current offset and is written after a short
  debounce. Range and step default to -14…+14, step 2, and no longer come from
  the entity's attributes; set `offset_min` / `offset_max` / `offset_step` if
  your boiler uses a different range. The buttons stay disabled until the
  boiler reports a current offset value.

## [0.2.0] - 2026-11-15

### Added

- `EBUS OFFLINE` indicator in the status badge when the status sensor is
  unavailable/unknown or the optional `connection_entity` (eBUS signal) is
  off/unavailable; controls are disabled while offline. The badge opens the
  more-info dialog of the relevant entity.
- Pressure alarm: the pressure tile turns red outside a configurable range
  (`pressure_min` / `pressure_max`, default 1.0–2.5 bar).
- Label overrides for every visible text: `ch_switch_label`, `thermoreg_label`,
  `flame_label`, `offset_label`, `dhw_setpoint_label`, `ch_setpoint_label`.
- Light theme support (colours follow the Home Assistant theme when dark mode
  is off).
- Sizing hint for the Sections dashboard layout (`getGridOptions`).
- Keyboard and screen-reader support: focusable tiles, toggles and badge, ARIA
  roles/labels, visible focus outline; animations respect
  `prefers-reduced-motion`.
- Optimistic, dimmed display of setpoint/offset values until the boiler
  confirms them (reverts after ~15 s if not confirmed).
- Support for `input_boolean` toggles in the editor.
- Documentation: end-to-end setup guide (ebusd, MQTT, local CSV files),
  Clas One entity reference, troubleshooting guide, card preview image,
  example ebusd CSV files, and an MQTT `binary_sensor` example for the eBUS
  signal.

### Changed

- Min/max/step for the offset slider and setpoints now come from the card
  config, then the entity's own `min`/`max`/`step` attributes, then the
  built-in defaults (previously the built-in defaults always overrode the
  entity attributes).
- The +/− setpoint buttons are debounced (700 ms) and send a single value
  after the last click; buttons are disabled at min/max.
- The offset value updates live while the slider is dragged.
- Toggles, setpoint buttons and the offset slider are disabled while their
  entity is unavailable.
- Visual editor reorganised into collapsible sections with helper texts;
  clearing a field removes it from the config so defaults apply again.
- The card re-renders only when one of its own entities or the theme changes.
- Stub config uses the current ebusd entity IDs and includes outdoor
  temperature and pressure.
- Card size hint increased from 4 to 6.
- Example ebusd CSV files moved from `docs/#for_Home_Assistant#/ebusd/` to
  `docs/ebusd/`.
- README rewritten around the full ebusd → MQTT → Home Assistant → card path.

### Fixed

- Setpoints using `input_number` entities now call `input_number.set_value`
  instead of `number.set_value`.
- Floating-point drift when stepping setpoints with decimal steps; values are
  shown with the precision of the step.
- The card no longer writes a setpoint derived from an unknown state.
- Unavailable flame power shows `—` instead of `0.0 kW`.
- Broken links to the entity reference in the README.

## [0.1.0] - 2026-09-27

### Added

- Custom Lovelace card for Ariston Clas One boilers via ebusd (with optional
  Ariston cloud fallback): status badge, CH and thermoregulation toggles, flame
  power with animated flame, flow/return temperatures, pressure,
  thermoregulation offset slider with computed flow setpoint, and DHW/CH
  setpoint controls.
- Visual editor for configuring all entities.
- Optional outdoor temperature tile (`outdoor_temp_entity`).
- Configurable tile labels: `flow_temp_label`, `return_temp_label`,
  `outdoor_temp_label`, `pressure_label`.
- Clicking the flame/boiler unit opens the more-info dialog for the flame power
  entity.
- Responsive layout for narrow screens (620px and 420px breakpoints).
- Claude-based release workflow (GitHub Actions).

### Changed

- Redesigned the temperature/pressure area as four tiles; the thermoregulation
  offset now has its own row.
- Reworked desktop and mobile layouts, including a more compact vertical layout
  and a redesigned header.
- Inner boxes use a transparent background so the card follows the theme.
- The CH setpoint control is disabled while thermoregulation is active.
- Setpoint boxes show the value of the control (number) entity, so the card
  reflects the value that was set.
- The card re-renders instantly on state changes; removed hardcoded background.
- Build outputs a single `ebusd-clasone-card.js` bundle in the repository root,
  matching `hacs.json`.

### Fixed

- Outdoor temperature is shown with one decimal.
- Offset tile being rendered inside the flow row.
- Tabs overlapping the card on mobile.
- Header layout issues.
- Inconsistent editor class naming between card and editor registrations.
- Stale v1.0.0 bundle being served from a duplicate `dist/` copy.

[1.1.0]: ../../compare/v1.0.3...v1.1.0
[1.0.3]: ../../compare/v1.0.2...v1.0.3
[1.0.2]: ../../compare/v1.0.1...v1.0.2
[1.0.1]: ../../compare/v1.0.0...v1.0.1
[1.0.0]: ../../compare/v0.3.1...v1.0.0
[0.3.1]: ../../compare/v0.3.0...v0.3.1
[0.3.0]: ../../compare/v0.2.0...v0.3.0
[0.2.0]: ../../compare/v0.1.0...v0.2.0
[0.1.0]: ../../releases/tag/v0.1.0
