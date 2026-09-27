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
    /* Transparent inner boxes so the card respects the dashboard background /
       any transparency applied via theme or card_mod. */
    --bc-box-bg: transparent;
    --bc-border: #26425f;
    --bc-radius: 18px;
  }

  ha-card {
    /* No hardcoded background: inherit the theme's default so transparency
       (e.g. via card_mod or a transparent theme) can be applied if needed. */
    background: var(--ha-card-background, var(--card-background-color, none));
    border: 1px solid var(--bc-border);
    border-radius: var(--bc-radius);
    box-shadow: 0 0 0 1px rgba(63, 208, 255, 0.06), 0 2px 10px rgba(0, 0, 0, 0.3);
    padding: 12px;
    color: var(--bc-txt);
    overflow: hidden;
  }

  /* ---------- Header ---------- */
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 8px;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 auto;
    min-width: 0;
  }
  .header-controls {
    display: contents;
  }
  .title-icon {
    width: 30px;
    height: 30px;
    border-radius: 9px;
    background: linear-gradient(145deg, #ff8a5c33, #ff8a5c11);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .title-icon ha-icon {
    --mdc-icon-size: 18px;
    color: var(--bc-ch);
  }
  .title-text {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    color: #cbd9ea;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .status-badge {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 8px;
    padding: 3px 10px;
    white-space: nowrap;
  }
  .badge {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 10px;
    padding: 6px 12px;
    cursor: pointer;
    flex: 0 0 auto;
    user-select: none;
  }
  .badge ha-icon {
    --mdc-icon-size: 15px;
  }
  .badge .lbl {
    font-size: 10px;
    letter-spacing: 0.5px;
    font-weight: 600;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #4a5a70;
  }

  /* ---------- Flow row ---------- */
  .flow-row {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
  }
  .unit {
    flex: 0 0 124px;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 14px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }
  .unit-icons {
    position: relative;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .unit-icons .boiler {
    --mdc-icon-size: 32px;
    color: #8aa0bd;
  }
  .unit-icons .flame {
    position: absolute;
    bottom: -2px;
    right: -2px;
    --mdc-icon-size: 18px;
    color: #3a4a60;
  }
  .unit-icons .flame.burning {
    color: #ff8a5c;
    animation: flicker 0.9s ease-in-out infinite;
  }
  @keyframes flicker {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.75; transform: scale(1.12); }
  }
  .unit .lbl {
    font-size: 10px;
    letter-spacing: 1px;
    color: var(--bc-sub);
    font-weight: 600;
  }
  .unit .val {
    font-size: 15px;
    font-weight: 700;
    color: var(--bc-ch);
  }

  .pipes {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .pipe {
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 14px;
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    flex: 1;
  }
  .pipe.tur { border-left: 3px solid var(--bc-ch); }
  .pipe.retur { border-left: 3px solid #4ecdc4; }
  .pipe .plabel { font-size: 13px; font-weight: 700; color: var(--bc-sub); letter-spacing: 1px; }
  .pipe .pval { font-size: 24px; font-weight: 700; }
  .pipe.tur .pval { color: var(--bc-ch); }
  .pipe.retur .pval { color: #4ecdc4; }

  .offset-box {
    flex: 0 0 260px;
    background: var(--bc-box-bg);
    border: 1px solid #5dcaa533;
    border-radius: 14px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    transition: opacity 0.2s;
  }
  .offset-box.disabled { opacity: 0.4; }
  .offset-title {
    font-size: 11px;
    color: var(--bc-sub);
    letter-spacing: 0.5px;
    font-weight: 600;
    text-align: center;
  }
  .offset-title .sp {
    color: #4ecdc4;
    font-size: 17px;
    font-weight: 700;
  }
  .offset-value {
    font-size: 24px;
    font-weight: 700;
    color: var(--bc-green);
    line-height: 1;
    text-align: center;
  }
  .slider {
    width: 100%;
    accent-color: var(--bc-green);
    cursor: pointer;
  }
  .ticks {
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #5a6f88;
    padding: 0 2px;
  }

  /* ---------- Setpoints row ---------- */
  .setpoints {
    display: flex;
    gap: 8px;
  }
  .sp-card {
    flex: 1;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 16px;
    padding: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .sp-card.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  .sp-head {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
  }
  .sp-head ha-icon { --mdc-icon-size: 17px; }
  .sp-head .t { font-size: 12px; font-weight: 600; color: var(--bc-txt); letter-spacing: 1px; }
  .sp-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 8px;
  }
  .step-btn {
    width: 44px;
    height: 34px;
    border-radius: 11px;
    background: #1d314f;
    border: none;
    color: var(--bc-txt);
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .step-btn:hover { background: #25425f; }
  .step-btn:active { transform: scale(0.95); }
  .sp-val { font-size: 28px; font-weight: 700; }
  .sp-val.display-only { padding: 4px 0; }
  .flow-row {
    display: grid;
    grid-template-columns: 124px repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(56px, 1fr));
    gap: 6px;
    margin-bottom: 8px;
    align-items: stretch;
  }

  .flow-row > .unit {
    grid-column: 1;
    grid-row: 1 / span 2;
    min-width: 0;
    box-sizing: border-box;
  }

  .flow-row > .pipes {
    display: contents;
  }

  .flow-row > .pipe.tur {
    grid-column: 2;
    grid-row: 1;
  }

  .flow-row > .pipe.retur {
    grid-column: 3;
    grid-row: 1;
  }

  .flow-row > .sensor-tile {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    padding: 7px 9px;
  }

  .sensor-tile .tile-label {
    align-self: flex-start;
    color: var(--bc-sub);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.7px;
    line-height: 1.2;
    overflow-wrap: anywhere;
    text-align: left;
  }

  .sensor-tile .tile-value {
    align-self: center;
    color: var(--bc-txt);
    font-size: 21px;
    font-weight: 700;
    line-height: 1.1;
    margin: auto 0;
    text-align: center;
  }

  .flow-row > .pipe.tur .tile-value { color: var(--bc-ch); }
  .flow-row > .pipe.retur .tile-value { color: var(--bc-dhw); }
  .flow-row > .outdoor-temp .tile-value { color: var(--bc-txt); }

  .flow-row > .outdoor-temp {
    grid-column: 2;
    grid-row: 2;
  }

  .flow-row > .pressure-card {
    grid-column: 3;
    grid-row: 2;
    background: var(--bc-box-bg);
    border-left: 3px solid var(--bc-green);
    cursor: pointer;
  }

  .pressure-value {
    color: var(--bc-green) !important;
  }

  .pressure-value span {
    color: var(--bc-sub);
    font-size: 14px;
    font-weight: 600;
  }

  .flow-row > .tile-wide {
    grid-column: 2 / span 2;
  }

  ha-card > .offset-box {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    margin: 0 0 8px;
  }

  @container boiler-card (max-width: 760px) {
    ha-card {
      padding: 12px;
      overflow: hidden;
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      gap: 8px;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .title-wrap {
      flex: 0 0 auto;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .header-controls {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .badge {
      padding: 6px 10px;
      width: 100%;
      flex: none;
      justify-content: center;
      min-width: 0;
      box-sizing: border-box;
    }

    .flow-row {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-template-rows: repeat(2, minmax(56px, auto));
      gap: 6px;
    }

    .unit,
    .pipes,
    .sp-card,
    .pipe {
      min-width: 0;
      box-sizing: border-box;
    }

    .unit {
      flex-basis: auto;
      width: 100%;
      min-width: 0;
      padding: 8px 6px;
      grid-column: 1;
      grid-row: 1 / span 2;
    }

    .pipe {
      padding: 8px 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
    }

    .flow-row > .sensor-tile {
      padding: 7px 7px;
    }

    .sensor-tile .tile-label {
      font-size: 10px;
      letter-spacing: 0.5px;
    }

    .sensor-tile .tile-value {
      font-size: clamp(17px, 4.5vw, 21px);
    }

    .pipe.tur {
      grid-column: 2;
      grid-row: 1;
    }

    .pipe.retur {
      grid-column: 3;
      grid-row: 1;
    }

    .flow-row > .outdoor-temp {
      grid-column: 2;
      grid-row: 2;
    }

    .flow-row > .pressure-card {
      grid-column: 3;
      grid-row: 2;
      justify-content: center;
      align-self: stretch;
    }

    .flow-row > .tile-wide {
      grid-column: 2 / span 2;
    }

    ha-card > .offset-box {
      width: 100%;
      min-width: 0;
      padding: 8px 7px;
    }

    .offset-box .offset-title {
      font-size: 10px;
      line-height: 1.2;
    }

    .offset-box .offset-value {
      font-size: 22px;
    }

    .setpoints {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      align-items: stretch;
    }

    .sp-card {
      width: 100%;
      min-width: 0;
      padding: 8px 7px;
      overflow: hidden;
    }

    .sp-head .t {
      letter-spacing: 0.6px;
      font-size: 11px;
    }

    .sp-val {
      font-size: clamp(20px, 6vw, 28px);
      white-space: nowrap;
    }

    .step-btn {
      width: 42px;
      height: 36px;
      font-size: 18px;
      flex-shrink: 0;
    }
  }

  @container boiler-card (max-width: 420px) {
    .title-text {
      font-size: 12px;
      letter-spacing: 0.7px;
    }

    .status-badge {
      font-size: 10px;
      padding: 3px 8px;
    }

    .badge .lbl {
      font-size: 9px;
    }

    .header {
      gap: 8px;
    }

    .unit {
      padding: 6px 4px;
    }

    .pipe {
      padding: 7px 5px;
    }

    .sensor-tile .tile-value {
      font-size: clamp(16px, 4.5vw, 20px);
    }

    .setpoints {
      gap: 7px;
    }
  }

  @media (max-width: 760px) {
    .header {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .title-wrap {
      grid-column: 1;
      width: 100%;
      min-width: 0;
      flex: none;
      box-sizing: border-box;
    }

    .header-controls {
      display: grid;
      grid-column: 1;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    .header-controls .badge {
      width: 100%;
      min-width: 0;
      flex: none;
      gap: 5px;
      padding: 6px 4px;
      box-sizing: border-box;
      overflow: hidden;
    }

    .header-controls .lbl {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: clamp(8px, 2.4vw, 10px);
    }
  }

  @media (min-width: 761px) {
    .flow-row {
      grid-template-rows: repeat(2, 72px);
      gap: 6px;
      margin-bottom: 8px;
    }

    .flow-row > .unit {
      padding: 6px;
      gap: 3px;
    }

    .unit-icons {
      width: 38px;
      height: 38px;
    }

    .unit-icons .boiler {
      --mdc-icon-size: 30px;
    }

    .unit-icons .flame {
      --mdc-icon-size: 17px;
    }

    .sensor-tile {
      padding: 6px 8px;
    }

    .sensor-tile .tile-label {
      font-size: 10px;
    }

    .sensor-tile .tile-value {
      font-size: 20px;
    }

    ha-card > .offset-box {
      padding: 6px 10px;
      gap: 3px;
      margin-bottom: 8px;
    }

    .offset-title {
      font-size: 10px;
    }

    .offset-title .sp {
      font-size: 15px;
    }

    .offset-value {
      font-size: 20px;
    }

    .offset-box .slider {
      margin: 0;
    }
  }

  ha-icon.clickable { cursor: pointer; }
  .unit.clickable { cursor: pointer; }
`;
