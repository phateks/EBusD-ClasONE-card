# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[0.1.0]: ../../releases/tag/v0.1.0
