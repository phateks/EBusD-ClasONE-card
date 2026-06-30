import { css } from "lit";

export const styles = css`
  :host {
    --bc-accent: #4ecdc4;
    --bc-ch: #ff8a5c;
    --bc-dhw: #4ecdc4;
    --bc-green: #5dcaa5;
    --bc-txt: #e8eef6;
    --bc-sub: #8aa0bd;
    --bc-box-bg: #0f1d30;
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
    padding: 16px;
    color: var(--bc-txt);
    overflow: hidden;
  }

  /* ---------- Header ---------- */
  .header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .title-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1 1 auto;
    min-width: 0;
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
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .unit-icons {
    position: relative;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .unit-icons .boiler {
    --mdc-icon-size: 40px;
    color: #8aa0bd;
  }
  .unit-icons .flame {
    position: absolute;
    bottom: -2px;
    right: -2px;
    --mdc-icon-size: 22px;
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
    padding: 12px 16px;
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
    padding: 12px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
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
    gap: 12px;
  }
  .sp-card {
    flex: 1;
    background: var(--bc-box-bg);
    border: 1px solid var(--bc-border);
    border-radius: 16px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
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
    height: 40px;
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

  ha-icon.clickable { cursor: pointer; }
`;
