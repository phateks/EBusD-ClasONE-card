import { css } from "lit";

export const styles = css`
  :host {
    display: block;
    min-width: 0;
    container-name: boiler-card;
    container-type: inline-size;
    --bc-accent: #4ecdc4;
    --bc-ch: #ff8a5c;
    --bc-dhw: #4ecdc4;
    --bc-green: #5dcaa5;
    --bc-txt: #e8eef6;
    --bc-sub: #8aa0bd;
    --bc-title: #dbe6f3;
    --bc-muted: #3a4a60;
    --bc-alarm: #ff5c5c;
    /* Inner surfaces are translucent tints (not opaque fills) so the card still
       follows the dashboard background / card_mod transparency. */
    --bc-surface: color-mix(in srgb, #9fb6d6 6%, transparent);
    --bc-surface-hi: color-mix(in srgb, #9fb6d6 10%, transparent);
    --bc-line: color-mix(in srgb, #9fb6d6 14%, transparent);
    --bc-border: #26425f;
    --bc-radius: 18px;
    --bc-tile-radius: 13px;
    --bc-btn-bg: color-mix(in srgb, #9fb6d6 12%, transparent);
    --bc-btn-hover: color-mix(in srgb, #9fb6d6 20%, transparent);
    --bc-gap: 7px;
    --st: #8aa0bd;
  }

  /* Light HA theme: keep the accents, switch text/surfaces to theme colours. */
  :host([light]) {
    --bc-txt: var(--primary-text-color, #1c2733);
    --bc-sub: var(--secondary-text-color, #5b6b7d);
    --bc-title: var(--primary-text-color, #1c2733);
    --bc-border: var(--divider-color, #d5dee8);
    --bc-muted: #c3ced9;
    --bc-alarm: #d93838;
    --bc-surface: color-mix(in srgb, #3c5a80 5%, transparent);
    --bc-surface-hi: color-mix(in srgb, #3c5a80 8%, transparent);
    --bc-line: color-mix(in srgb, #3c5a80 12%, transparent);
    --bc-btn-bg: color-mix(in srgb, #3c5a80 9%, transparent);
    --bc-btn-hover: color-mix(in srgb, #3c5a80 15%, transparent);
    --bc-ch: #f0703c;
    --bc-dhw: #1fa99f;
    --bc-green: #2fa57e;
  }

  ha-card {
    background: var(--ha-card-background, var(--card-background-color, none));
    border: 1px solid var(--bc-border);
    border-radius: var(--bc-radius);
    box-shadow: 0 2px 14px rgba(0, 0, 0, 0.25);
    padding: 12px;
    color: var(--bc-txt);
    overflow: hidden;
    position: relative;
    font-variant-numeric: tabular-nums;
  }
  /* Soft status glow in the top-left corner (CH = orange, DHW = teal). */
  ha-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(
      120% 60% at 0% 0%,
      color-mix(in srgb, var(--st) 12%, transparent),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.6s;
  }
  ha-card.st-ch::before,
  ha-card.st-dhw::before,
  ha-card.st-offline::before { opacity: 1; }
  ha-card > * { position: relative; }

  .u {
    font-size: 0.5em;
    font-weight: 600;
    color: var(--bc-sub);
    margin-left: 2px;
    letter-spacing: 0;
  }

  /* ---------- Header ---------- */
  .header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 12px;
    margin-bottom: 10px;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 auto;
    min-width: 0;
  }
  .header-controls {
    display: flex;
    gap: var(--bc-gap);
  }
  .title-icon {
    width: 34px;
    height: 34px;
    border-radius: 11px;
    background: color-mix(in srgb, var(--st) 16%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.4s, box-shadow 0.4s;
  }
  .title-icon ha-icon { --mdc-icon-size: 20px; color: var(--st); transition: color 0.4s; }
  .title-icon.active { box-shadow: 0 0 16px -4px var(--st); }
  .title-text {
    font-size: 15px;
    font-weight: 600;
    color: var(--bc-title);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
  .status-badge {
    flex-shrink: 0;
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: var(--st);
    background: color-mix(in srgb, var(--st) 12%, transparent);
    border-radius: 999px;
    padding: 3px 9px 3px 8px;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
  .status-badge ha-icon { --mdc-icon-size: 13px; }
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--st);
  }
  .status-dot.live { animation: ping 1.8s ease-out infinite; }
  @keyframes ping {
    0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--st) 60%, transparent); }
    100% { box-shadow: 0 0 0 6px transparent; }
  }
  .status-badge.offline { animation: pulse 1.6s ease-in-out infinite; }
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.55; }
  }

  /* Toggle pills with a mini switch */
  .badge {
    --tg: var(--bc-sub);
    display: flex;
    align-items: center;
    gap: 7px;
    background: var(--bc-surface);
    border: 1px solid transparent;
    border-radius: 11px;
    padding: 5px 8px 5px 10px;
    cursor: pointer;
    user-select: none;
    transition: background 0.25s, border-color 0.25s;
    min-width: 0;
  }
  .badge.ch { --tg-on: var(--bc-ch); }
  .badge.tr { --tg-on: var(--bc-green); }
  .badge.on {
    --tg: var(--tg-on);
    background: color-mix(in srgb, var(--tg-on) 14%, transparent);
    border-color: color-mix(in srgb, var(--tg-on) 30%, transparent);
  }
  .badge ha-icon { --mdc-icon-size: 16px; color: var(--tg); flex-shrink: 0; }
  .badge .lbl {
    flex: 1 1 auto;
    font-size: 10.5px;
    letter-spacing: 0.6px;
    font-weight: 700;
    color: var(--tg);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .track {
    width: 26px;
    height: 15px;
    border-radius: 8px;
    background: var(--bc-muted);
    position: relative;
    flex-shrink: 0;
    transition: background 0.25s;
  }
  .knob {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    transition: transform 0.25s;
  }
  .badge.on .track { background: var(--tg-on); }
  .badge.on .knob { transform: translateX(11px); }
  .badge.unavailable { opacity: 0.45; cursor: not-allowed; }

  /* ---------- Shared surfaces ---------- */
  .unit,
  .pipe,
  .box {
    background: var(--bc-surface);
    border-radius: var(--bc-tile-radius);
    box-sizing: border-box;
    min-width: 0;
    position: relative;
    transition: background 0.2s, opacity 0.2s;
  }
  .clickable { cursor: pointer; }
  .pipe.clickable:hover,
  .unit.clickable:hover,
  .cons-row.clickable:hover { background: var(--bc-surface-hi); }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    flex-shrink: 0;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.3px;
    padding: 1px 7px;
    border-radius: 999px;
    background: var(--bc-btn-bg);
    color: var(--bc-sub);
    white-space: nowrap;
    line-height: 18px;
  }
  .chip ha-icon { --mdc-icon-size: 13px; }
  .chip.accent {
    background: color-mix(in srgb, var(--bc-accent) 16%, transparent);
    color: var(--bc-accent);
    font-size: 11.5px;
  }

  /* Thin progress line glued to the bottom edge of a tile: carries
     information without adding height. */
  .edge-bar {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: var(--bc-line);
    overflow: hidden;
  }
  .edge-bar > span { position: absolute; top: 0; bottom: 0; transition: left 0.3s, width 0.3s; }
  .edge-bar .fill { left: 0; }
  .edge-bar .zero { width: 2px; margin-left: -1px; background: var(--bc-sub); opacity: 0.7; z-index: 1; }

  /* ---------- Flow row ---------- */
  .flow-row {
    display: grid;
    grid-template-columns: minmax(0, 0.85fr) repeat(2, minmax(0, 1fr));
    grid-auto-rows: minmax(56px, auto);
    gap: var(--bc-gap);
    margin-bottom: var(--bc-gap);
  }
  .flow-row > .unit { grid-column: 1; grid-row: 1 / span 2; }
  .flow-row > .tur { grid-column: 2; grid-row: 1; }
  .flow-row > .retur { grid-column: 3; grid-row: 1; }
  .flow-row > .outdoor-temp { grid-column: 2; grid-row: 2; }
  .flow-row > .pressure-card { grid-column: 3; grid-row: 2; }
  .flow-row > .tile-wide { grid-column: 2 / span 2; }

  .unit {
    padding: 8px 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0;
  }
  .unit-text { display: flex; flex-direction: column; align-items: center; }
  .unit.burning {
    background: radial-gradient(
        90% 70% at 50% 35%,
        color-mix(in srgb, var(--bc-ch) 16%, transparent),
        transparent 75%
      ),
      var(--bc-surface);
  }
  .ring {
    position: relative;
    width: 66px;
    height: 66px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ring svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .ring circle { fill: none; stroke-width: 6; stroke-linecap: round; }
  .ring-bg { stroke: var(--bc-line); }
  .ring-fg {
    stroke: var(--bc-ch);
    transition: stroke-dasharray 0.8s ease;
    filter: drop-shadow(0 0 4px color-mix(in srgb, var(--bc-ch) 60%, transparent));
  }
  .ring .flame { --mdc-icon-size: 25px; color: var(--bc-muted); transition: color 0.3s; }
  .unit.burning .flame {
    color: var(--bc-ch);
    animation: flicker 1.2s ease-in-out infinite;
    filter: drop-shadow(0 0 6px color-mix(in srgb, var(--bc-ch) 70%, transparent));
  }
  @keyframes flicker {
    0%, 100% { transform: scale(1) rotate(0); }
    30% { transform: scale(1.07) rotate(-3deg); }
    60% { transform: scale(0.96) rotate(2deg); }
  }
  .unit .val {
    font-size: 20px;
    font-weight: 700;
    color: var(--bc-txt);
    line-height: 1.1;
    margin-top: -4px;
  }
  .unit.burning .val { color: var(--bc-ch); }
  .unit .lbl {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--bc-sub);
    font-weight: 700;
  }

  /* ----- Electric border (heat demand) ----- */
  .unit.electric {
    box-shadow: 0 0 14px -2px color-mix(in srgb, var(--bc-ch) 55%, transparent),
      inset 0 0 18px -6px color-mix(in srgb, var(--bc-ch) 70%, transparent);
  }
  svg.electric {
    position: absolute;
    top: 1px;
    left: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    overflow: visible;
    pointer-events: none;
    filter: drop-shadow(0 0 2px var(--bc-ch)) drop-shadow(0 0 6px #ff6a1f);
  }
  svg.electric rect { fill: none; }
  .eb-halo { stroke: var(--bc-ch); stroke-width: 5; opacity: 0.18; }
  .eb-arc { stroke: var(--bc-ch); stroke-width: 2.2; }
  .eb-core { stroke: #ffe6cf; stroke-width: 0.9; opacity: 0.9; }
  :host([light]) svg.electric { filter: drop-shadow(0 0 2px var(--bc-ch)); }
  :host([light]) .eb-core { stroke: #fff4ea; }

  /* ----- Sensor tiles ----- */
  .sensor-tile {
    --tile: var(--bc-sub);
    padding: 8px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2px;
    overflow: hidden;
  }
  .sensor-tile.tur { --tile: var(--bc-ch); }
  .sensor-tile.retur { --tile: var(--bc-dhw); }
  .sensor-tile.outdoor-temp { --tile: #8fb3ff; }
  .sensor-tile.pressure-card { --tile: var(--bc-green); }
  .tile-label {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--bc-sub);
    font-size: 10.5px;
    font-weight: 700;
    letter-spacing: 0.7px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
  }
  .tile-label ha-icon { --mdc-icon-size: 15px; color: var(--tile); flex-shrink: 0; }
  .tile-value {
    font-size: 23px;
    font-weight: 600;
    line-height: 1;
    color: var(--bc-txt);
    white-space: nowrap;
  }
  .sensor-tile.tur .tile-value { color: var(--bc-ch); }
  .sensor-tile.retur .tile-value { color: var(--bc-dhw); }
  .pressure-value { color: var(--bc-green); }

  .p-scale {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: var(--bc-line);
  }
  .p-band {
    position: absolute;
    top: 0;
    bottom: 0;
    background: color-mix(in srgb, var(--bc-green) 55%, transparent);
  }
  .p-mark {
    position: absolute;
    bottom: 0;
    width: 3px;
    height: 7px;
    border-radius: 2px 2px 0 0;
    background: var(--bc-txt);
    transform: translateX(-50%);
  }
  .pressure-card.alarm {
    --tile: var(--bc-alarm);
    background: color-mix(in srgb, var(--bc-alarm) 14%, transparent);
    animation: alarm-glow 1.6s ease-in-out infinite;
  }
  .pressure-card.alarm .tile-label,
  .pressure-card.alarm .pressure-value { color: var(--bc-alarm); }
  .pressure-card.alarm .p-mark { background: var(--bc-alarm); }
  @keyframes alarm-glow {
    0%, 100% { box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bc-alarm) 30%, transparent); }
    50% { box-shadow: inset 0 0 0 1px var(--bc-alarm), 0 0 12px color-mix(in srgb, var(--bc-alarm) 40%, transparent); }
  }

  /* ---------- Controls: offset, consumption, setpoints ---------- */
  .controls {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--bc-gap);
  }
  .controls.odd > :first-child { grid-column: 1 / -1; }

  .box {
    --bx: var(--bc-accent);
    padding: 8px 10px 11px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
    overflow: hidden;
  }
  .box .edge-bar .fill { background: var(--bx); }
  .box-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    min-height: 20px;
  }
  .box-title {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 10.5px;
    color: var(--bc-sub);
    letter-spacing: 0.7px;
    font-weight: 700;
    min-width: 0;
  }
  .box-title > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .box-title ha-icon { --mdc-icon-size: 15px; color: var(--bx); flex-shrink: 0; }

  .offset-box { --bx: var(--bc-green); }
  .offset-box.disabled .sp-control,
  .offset-box.disabled .edge-bar { opacity: 0.4; }
  .offset-value {
    font-size: 27px;
    font-weight: 700;
    color: var(--bc-green);
    line-height: 1;
    text-align: center;
    min-width: 2.1em;
  }

  .cons-box { --bx: var(--bc-accent); justify-content: flex-start; }
  .cons-total-val {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    color: var(--bc-txt);
    white-space: nowrap;
  }
  .cons-rows { display: flex; flex-direction: column; gap: 1px; margin: auto 0; }
  .split { display: flex; gap: 2px; }
  .split > span { position: static; display: block; height: 100%; transition: width 0.5s; }
  .split .dhw { background: var(--bc-dhw); }
  .split .ch { background: var(--bc-ch); }
  .cons-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    border-radius: 7px;
    padding: 1px 4px;
    margin: 0 -4px;
  }
  .cons-name {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: var(--bc-sub);
    font-weight: 700;
    font-size: 10.5px;
    letter-spacing: 0.5px;
  }
  .cons-name ha-icon { --mdc-icon-size: 15px; }
  .cons-name.dhw ha-icon { color: var(--bc-dhw); }
  .cons-name.ch ha-icon { color: var(--bc-ch); }
  .cons-val { font-weight: 600; color: var(--bc-txt); white-space: nowrap; }
  .cons-val .u { font-size: 0.8em; }

  .sp-card.dhw { --bx: var(--bc-dhw); }
  .sp-card.ch { --bx: var(--bc-ch); }
  .sp-card {
    background: linear-gradient(
        160deg,
        color-mix(in srgb, var(--bx) 13%, transparent),
        color-mix(in srgb, var(--bx) 3%, transparent) 70%
      ),
      var(--bc-surface);
  }
  .sp-val {
    font-size: 30px;
    font-weight: 700;
    line-height: 1;
    color: var(--bx);
    white-space: nowrap;
    transition: opacity 0.2s;
  }
  .sp-val .u { font-size: 1em; font-weight: 400; color: var(--bx); opacity: 0.6; margin-left: 0; }
  .sp-card.disabled { background: var(--bc-surface); }
  .sp-card.disabled .sp-val,
  .sp-card.disabled .step-btn,
  .sp-card.disabled .edge-bar { opacity: 0.45; }

  .sp-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }
  .step-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--bc-btn-bg);
    border: none;
    color: var(--bc-txt);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    padding: 0;
    transition: background 0.15s, transform 0.1s;
  }
  .step-btn ha-icon { --mdc-icon-size: 20px; }
  .step-btn:hover:not(:disabled) { background: var(--bc-btn-hover); }
  .step-btn:active:not(:disabled) { transform: scale(0.92); }
  .step-btn:disabled { opacity: 0.35; cursor: default; }
  /* Value clicked but not yet confirmed by the boiler. */
  .sp-val.pending,
  .offset-value.pending { opacity: 0.55; }

  .clickable:focus-visible,
  .badge:focus-visible,
  .step-btn:focus-visible {
    outline: 2px solid var(--bc-accent);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .pressure-card.alarm,
    .status-badge.offline,
    .status-dot.live,
    .unit.burning .flame { animation: none; }
  }

  /* ================= Responsive =================
     Phone (default): toggles on a second header row, 2-row sensor block,
     controls in 2 columns.
     Tablet (≥ 600px): header on one row, sensors on one row.
     Desktop (≥ 780px): controls on one row as well. */

  @container boiler-card (max-width: 599px) {
    .header-controls {
      flex: 1 1 100%;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @container boiler-card (max-width: 400px) {
    ha-card { padding: 10px; }
    :host { --bc-gap: 6px; }
    .ring { width: 56px; height: 56px; }
    .ring .flame { --mdc-icon-size: 22px; }
    .unit .val { font-size: 17px; }
    .sensor-tile { padding: 7px 8px; }
    .tile-value { font-size: 20px; }
    .tile-label { font-size: 10px; letter-spacing: 0.4px; }
    .sp-val { font-size: 25px; }
    .offset-value { font-size: 23px; }
    .step-btn { width: 34px; height: 34px; }
    .box { padding: 7px 8px 10px; }
    .box-title { font-size: 10px; letter-spacing: 0.4px; }
    .title-text { font-size: 14px; }
    .status-badge { font-size: 10px; }
  }
  @container boiler-card (max-width: 330px) {
    .controls { grid-template-columns: minmax(0, 1fr); }
    .controls.odd > :first-child { grid-column: auto; }
  }

  @container boiler-card (min-width: 600px) {
    .flow-row {
      grid-template-columns: minmax(0, 1.25fr) repeat(4, minmax(0, 1fr));
      grid-auto-rows: minmax(68px, auto);
    }
    .flow-row > * { grid-row: 1 !important; grid-column: auto !important; }
    .flow-row > .tile-wide { grid-column: span 2 !important; }
    .unit { flex-direction: row; gap: 8px; padding: 6px 10px; }
    .unit-text { align-items: flex-start; }
    .ring { width: 54px; height: 54px; }
    .ring .flame { --mdc-icon-size: 21px; }
    .unit .val { margin-top: 0; }
  }

  @container boiler-card (min-width: 780px) {
    .controls { grid-template-columns: repeat(var(--n), minmax(0, 1fr)); }
    .controls.odd > :first-child { grid-column: auto; }
  }

  @container boiler-card (min-width: 1000px) {
    :host { --bc-gap: 9px; }
    ha-card { padding: 14px; }
    .tile-value { font-size: 26px; }
    .sp-val { font-size: 32px; }
  }
`;
