<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TERMINAL ROULETTE // AGENT 000</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

  :root {
    --phosphor: #33ff33;
    --bright: #66ff66;
    --dim: #1a8c1a;
    --very-dim: #0d4d0d;
    --bg: #000a00;
    --amber: #ffb000;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body {
    background: var(--bg);
    color: var(--phosphor);
    font-family: 'Share Tech Mono', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.4;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* CRT scanlines overlay */
  body::before {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 2px,
      rgba(0,0,0,0.18) 2px,
      rgba(0,0,0,0.18) 4px
    );
    pointer-events: none;
    z-index: 9999;
  }

  /* CRT flicker */
  body::after {
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at center, rgba(0,20,0,0) 60%, rgba(0,0,0,0.6) 100%);
    pointer-events: none;
    z-index: 9998;
    animation: flicker 8s infinite;
  }

  @keyframes flicker {
    0%, 95%, 100% { opacity: 1; }
    96% { opacity: 0.95; }
    97% { opacity: 0.98; }
    98% { opacity: 0.92; }
    99% { opacity: 1; }
  }

  .screen {
    display: none;
    width: 100%;
    max-width: 920px;
    margin: 0 auto;
    padding: 16px 12px;
  }
  .screen.active { display: block; }

  /* ── WELCOME SCREEN ── */
  #welcome-screen {
    max-width: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 20px 16px 40px;
    overflow-x: hidden;
  }
  #welcome-screen.active {
    display: flex;
  }

  .ascii-logo {
    font-size: 9px;
    line-height: 1.2;
    color: var(--bright);
    text-shadow: 0 0 8px var(--phosphor);
    white-space: pre;
    overflow-x: auto;
    max-width: 100%;
    margin-bottom: 10px;
    text-align: left;
  }

  .ascii-art {
    font-size: 10px;
    line-height: 1.15;
    color: var(--phosphor);
    text-shadow: 0 0 6px var(--phosphor);
    white-space: pre;
    overflow-x: auto;
    max-width: 100%;
    margin-bottom: 20px;
    text-align: left;
  }

  .welcome-box {
    border: 1px solid var(--phosphor);
    text-align: center;
    box-shadow: 0 0 14px var(--dim), inset 0 0 10px rgba(0,50,0,0.3);
    margin-bottom: 24px;
    width: 100%;
    max-width: 600px;
  }

  .welcome-box .wb-spacer {
    height: 10px;
  }
  .welcome-box .wb-row {
    padding: 6px 24px;
    color: var(--bright);
    text-shadow: 0 0 6px var(--phosphor);
    text-align: center;
  }
  .welcome-box .wb-title {
    font-size: 15px;
    letter-spacing: 2px;
    padding: 10px 24px;
    white-space: nowrap;
  }
  .welcome-box .wb-dim { color: var(--dim); font-size: 11px; }

  .btn-enter {
    background: transparent;
    border: 1px solid var(--phosphor);
    color: var(--bright);
    font-family: inherit;
    font-size: 14px;
    padding: 10px 36px;
    cursor: pointer;
    text-shadow: 0 0 8px var(--phosphor);
    box-shadow: 0 0 10px var(--dim);
    letter-spacing: 2px;
    transition: all 0.1s;
    animation: blink-border 1.5s step-end infinite;
  }
  .btn-enter:hover {
    background: var(--very-dim);
    box-shadow: 0 0 20px var(--phosphor);
  }

  @keyframes blink-border {
    0%, 100% { border-color: var(--phosphor); }
    50% { border-color: var(--dim); }
  }

  /* ── GAME SCREEN ── */
  #game-screen { padding-bottom: 40px; }

  .header-box {
    border: 1px solid var(--phosphor);
    margin-bottom: 14px;
    box-shadow: 0 0 10px var(--dim);
  }
  .header-title {
    padding: 4px 10px;
    color: var(--bright);
    text-shadow: 0 0 6px var(--phosphor);
    border-bottom: 1px solid var(--phosphor);
    font-size: 12px;
  }
  .header-stats {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: 1px solid var(--dim);
  }
  .stat-cell {
    padding: 6px 12px;
    border-right: 1px solid var(--dim);
  }
  .stat-cell:last-child { border-right: none; }
  .stat-label { color: var(--dim); font-size: 11px; }
  .stat-value { color: var(--bright); font-size: 15px; text-shadow: 0 0 8px var(--phosphor); }

  /* ── ROULETTE TABLE ── */
  .table-section { margin-bottom: 14px; }
  .table-title {
    text-align: center;
    color: var(--dim);
    margin-bottom: 8px;
    letter-spacing: 4px;
    font-size: 11px;
  }

  .roulette-table {
    border: 1px solid var(--phosphor);
    box-shadow: 0 0 8px var(--dim);
    overflow: hidden;
  }

  .table-grid {
    display: grid;
    grid-template-columns: 52px 1fr 60px;
    border-bottom: 1px solid var(--dim);
  }

  .zero-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid var(--dim);
    font-size: 15px;
    font-weight: bold;
    color: var(--bright);
    text-shadow: 0 0 10px var(--phosphor);
    background: rgba(0,40,0,0.4);
    min-height: 84px;
  }

  .numbers-grid {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: repeat(12, 1fr);
  }

  .num-cell {
    border-right: 1px solid rgba(51,255,51,0.15);
    border-bottom: 1px solid rgba(51,255,51,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 2px;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.12s;
    color: var(--phosphor);
    position: relative;
    user-select: none;
  }
  .num-cell:last-child { border-right: none; }
  .num-cell:hover { background: rgba(51,255,51,0.12); text-shadow: 0 0 8px var(--phosphor); }
  .num-cell.selected-num {
    background: rgba(51,255,51,0.25) !important;
    color: var(--bright);
    text-shadow: 0 0 12px var(--bright);
    box-shadow: inset 0 0 8px rgba(51,255,51,0.3);
  }
  .num-cell.winning {
    background: rgba(51,255,51,0.4) !important;
    color: #fff;
    text-shadow: 0 0 16px var(--bright), 0 0 4px #fff;
    animation: win-pulse 0.6s ease-in-out 3;
  }
  @keyframes win-pulse {
    0%, 100% { background: rgba(51,255,51,0.4); }
    50% { background: rgba(51,255,51,0.7); }
  }

  .num-cell .dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    position: absolute;
    bottom: 2px; right: 2px;
  }
  .dot.red { background: #cc2200; box-shadow: 0 0 4px #cc2200; }
  .dot.black { background: #222; border: 1px solid #444; }

  .col-bet-cell {
    border-left: 1px solid var(--dim);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: var(--dim);
    cursor: pointer;
    transition: all 0.12s;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    letter-spacing: 1px;
  }
  .col-bet-cell:hover { background: rgba(51,255,51,0.08); color: var(--phosphor); }
  .col-bet-cell.selected-bet { background: rgba(51,255,51,0.15); color: var(--bright); }

  .dozens-row {
    display: grid;
    grid-template-columns: 52px 1fr 60px;
    border-bottom: 1px solid var(--dim);
  }
  .dozens-inner {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .dozen-cell {
    padding: 6px 4px;
    text-align: center;
    font-size: 11px;
    color: var(--dim);
    cursor: pointer;
    border-right: 1px solid var(--dim);
    transition: all 0.12s;
    letter-spacing: 1px;
  }
  .dozen-cell:last-child { border-right: none; }
  .dozen-cell:hover { background: rgba(51,255,51,0.08); color: var(--phosphor); }
  .dozen-cell.selected-bet { background: rgba(51,255,51,0.15); color: var(--bright); }

  .outside-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
  .outside-cell {
    padding: 8px 4px;
    text-align: center;
    font-size: 11px;
    color: var(--dim);
    cursor: pointer;
    border-right: 1px solid var(--dim);
    transition: all 0.12s;
    letter-spacing: 1px;
  }
  .outside-cell:last-child { border-right: none; }
  .outside-cell:hover { background: rgba(51,255,51,0.08); color: var(--phosphor); }
  .outside-cell.selected-bet { background: rgba(51,255,51,0.15); color: var(--bright); }
  .outside-cell.red-cell { color: #884422; }
  .outside-cell.red-cell:hover, .outside-cell.red-cell.selected-bet { background: rgba(180,50,20,0.15); color: #cc4422; }
  .outside-cell.black-cell { color: #666; }
  .outside-cell.black-cell:hover, .outside-cell.black-cell.selected-bet { background: rgba(80,80,80,0.15); color: #aaa; }

  /* ── CONTROLS ── */
  .controls-section {
    border: 1px solid var(--dim);
    padding: 14px;
    margin-bottom: 14px;
    box-shadow: 0 0 6px var(--very-dim);
  }
  .controls-title {
    color: var(--dim);
    font-size: 11px;
    letter-spacing: 3px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--very-dim);
    padding-bottom: 6px;
  }
  .bet-display {
    margin-bottom: 12px;
    padding: 8px;
    border: 1px solid var(--very-dim);
    font-size: 12px;
  }
  .bet-display span { color: var(--bright); }

  .wager-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }
  .wager-label { color: var(--dim); font-size: 12px; white-space: nowrap; }
  .wager-input {
    background: transparent;
    border: 1px solid var(--phosphor);
    color: var(--bright);
    font-family: inherit;
    font-size: 14px;
    padding: 6px 10px;
    width: 120px;
    text-shadow: 0 0 6px var(--phosphor);
    box-shadow: 0 0 6px var(--dim);
    outline: none;
  }
  .wager-input:focus { border-color: var(--bright); box-shadow: 0 0 10px var(--phosphor); }
  .wager-input::placeholder { color: var(--dim); }

  .quick-bets {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .quick-btn {
    background: transparent;
    border: 1px solid var(--dim);
    color: var(--dim);
    font-family: inherit;
    font-size: 11px;
    padding: 4px 8px;
    cursor: pointer;
    transition: all 0.1s;
  }
  .quick-btn:hover { border-color: var(--phosphor); color: var(--phosphor); }

  .action-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .btn-spin {
    background: transparent;
    border: 1px solid var(--phosphor);
    color: var(--bright);
    font-family: inherit;
    font-size: 13px;
    padding: 10px 28px;
    cursor: pointer;
    text-shadow: 0 0 8px var(--phosphor);
    box-shadow: 0 0 10px var(--dim);
    letter-spacing: 2px;
    transition: all 0.1s;
    flex: 1;
  }
  .btn-spin:hover:not(:disabled) {
    background: rgba(51,255,51,0.08);
    box-shadow: 0 0 20px var(--phosphor);
  }
  .btn-spin:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .btn-cashout {
    background: transparent;
    border: 1px solid var(--dim);
    color: var(--dim);
    font-family: inherit;
    font-size: 11px;
    padding: 10px 16px;
    cursor: pointer;
    letter-spacing: 1px;
    transition: all 0.1s;
  }
  .btn-cashout:hover { border-color: #884422; color: #cc4422; }

  /* ── SPIN ANIMATION ── */
  .spin-section {
    display: none;
    border: 1px solid var(--dim);
    padding: 16px;
    margin-bottom: 14px;
    text-align: center;
  }
  .spin-section.active { display: block; }

  .spin-track {
    font-size: 18px;
    letter-spacing: 3px;
    margin: 10px 0;
    min-height: 28px;
    text-shadow: 0 0 10px var(--phosphor);
  }
  .spin-pointer {
    color: var(--bright);
    font-size: 13px;
    text-shadow: 0 0 8px var(--phosphor);
    margin-bottom: 6px;
  }
  .spin-track .center-num {
    color: var(--bright);
    font-weight: bold;
    text-shadow: 0 0 16px var(--bright);
    font-size: 22px;
  }
  .spin-track .side-num {
    color: var(--dim);
    font-size: 15px;
  }

  /* ── RESULT ── */
  .result-section {
    display: none;
    border: 1px solid var(--phosphor);
    padding: 14px;
    margin-bottom: 14px;
    box-shadow: 0 0 14px var(--dim);
    text-align: center;
  }
  .result-section.active { display: block; }

  .result-number {
    font-size: 32px;
    font-weight: bold;
    color: var(--bright);
    text-shadow: 0 0 20px var(--phosphor), 0 0 6px var(--bright);
    margin: 6px 0;
  }
  .result-label { color: var(--dim); font-size: 11px; letter-spacing: 3px; }
  .result-color { font-size: 13px; margin-top: 4px; }
  .result-color.RED { color: #cc4422; text-shadow: 0 0 8px #cc4422; }
  .result-color.BLACK { color: #aaa; }
  .result-color.ZERO { color: var(--bright); }

  .payout-msg {
    margin-top: 12px;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 8px 16px;
    border: 1px solid;
  }
  .payout-msg.win {
    border-color: var(--bright);
    color: var(--bright);
    text-shadow: 0 0 10px var(--phosphor);
    animation: win-flash 0.4s ease-in-out 4;
  }
  .payout-msg.loss {
    border-color: var(--dim);
    color: var(--dim);
  }
  @keyframes win-flash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  /* ── EXTENDED STATS BAR ── */
  .stats-bar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    border: 1px solid var(--very-dim);
    margin-bottom: 10px;
    font-size: 11px;
  }
  .stats-bar-cell {
    padding: 5px 10px;
    border-right: 1px solid var(--very-dim);
  }
  .stats-bar-cell:last-child { border-right: none; }
  .stats-bar-label { color: var(--very-dim); filter: brightness(2); font-size: 10px; letter-spacing: 1px; }
  .stats-bar-val { color: var(--phosphor); margin-top: 1px; }
  .stats-bar-val.pos { color: var(--bright); text-shadow: 0 0 6px var(--phosphor); }
  .stats-bar-val.neg { color: #884422; }
  .pb-delta { font-size: 9px; margin-left: 4px; opacity: 0.8; }
  .lb-me td { background: rgba(51,255,51,0.07) !important; outline: 1px solid var(--dim); }

  /* ── LAST RESULTS ── */
  .last-results-section {
    margin-bottom: 10px;
  }
  .last-results-label {
    color: var(--very-dim);
    filter: brightness(2);
    font-size: 10px;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }
  .last-results-row {
    display: flex;
    gap: 5px;
    align-items: center;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 2px;
  }
  .result-chip {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    font-size: 11px;
    font-weight: bold;
    flex-shrink: 0;
    transition: all 0.2s;
  }
  .result-chip.chip-zero { border-color: var(--phosphor); color: var(--bright); text-shadow: 0 0 6px var(--phosphor); }
  .result-chip.chip-red { border-color: #882200; color: #cc4422; }
  .result-chip.chip-black { border-color: #555; color: #999; }
  .result-chip.chip-new { animation: chip-pop 0.3s ease-out; }
  @keyframes chip-pop {
    0% { transform: scale(0.5); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }

  /* ── LOG ── */
  .log-section {
    border: 1px solid var(--very-dim);
    margin-bottom: 10px;
  }
  .log-title {
    padding: 4px 10px;
    color: var(--very-dim);
    font-size: 10px;
    letter-spacing: 3px;
    border-bottom: 1px solid var(--very-dim);
  }
  .log-entries {
    padding: 6px 10px;
    max-height: 72px;
    overflow-y: auto;
    font-size: 11px;
  }
  .log-entry { color: var(--dim); line-height: 1.6; }
  .log-entry.win-log { color: var(--phosphor); }
  .log-entry.loss-log { color: var(--very-dim); filter: brightness(1.5); }

  /* ── CHART ── */
  .chart-section {
    border: 1px solid var(--very-dim);
    margin-bottom: 14px;
  }
  .chart-title {
    padding: 4px 10px;
    color: var(--very-dim);
    font-size: 10px;
    letter-spacing: 3px;
    border-bottom: 1px solid var(--very-dim);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .chart-title span { color: var(--dim); }
  #balance-chart {
    display: block;
    width: 100%;
    height: 100px;
    image-rendering: pixelated;
  }

  /* ── HOT/COLD OVERLAY ── */
  .num-cell .heat-bar {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--dim);
    transition: width 0.3s;
  }

  /* ── GAME BANNER ── */
  .game-banner {
    text-align: center;
    overflow-x: auto;
    padding: 10px 0 0;
    border-bottom: 1px solid var(--very-dim);
    background: rgba(0,8,0,0.6);
  }
  .game-banner-logo {
    font-size: 6px;
    line-height: 1.25;
    white-space: pre;
    color: var(--phosphor);
    text-shadow: 0 0 3px var(--phosphor);
    margin: 0 auto;
    display: inline-block;
    text-align: left;
  }
  .game-banner-sep {
    color: var(--very-dim);
    font-size: 6px;
    letter-spacing: 0;
    margin: 2px 0;
    white-space: pre;
    display: block;
  }
  .game-banner-wheel {
    font-size: 6.5px;
    line-height: 1.15;
    white-space: pre;
    color: var(--dim);
    margin: 0 auto;
    display: inline-block;
    text-align: left;
    opacity: 0.85;
  }

  /* ── DAILY CHALLENGE ── */
  .daily-badge {
    display: inline-block;
    border: 1px solid #cc8800;
    color: #cc8800;
    font-size: 9px;
    padding: 1px 7px;
    letter-spacing: 2px;
    margin-left: 8px;
    vertical-align: middle;
    text-shadow: 0 0 6px #cc8800;
    animation: pulse-gold 1.5s ease-in-out infinite alternate;
  }
  @keyframes pulse-gold {
    from { opacity: 0.7; }
    to   { opacity: 1; }
  }
  .daily-spin-counter {
    font-size: 11px;
    color: #cc8800;
    letter-spacing: 2px;
    padding: 3px 8px;
    border: 1px solid #442200;
    display: inline-block;
  }
  .btn-daily {
    background: transparent;
    border: 1px solid #884400;
    color: #cc8800;
    font-family: inherit;
    font-size: 12px;
    padding: 8px 20px;
    cursor: pointer;
    letter-spacing: 2px;
    transition: all 0.15s;
    margin-top: 8px;
    text-shadow: 0 0 6px #cc8800;
  }
  .btn-daily:hover { border-color: #cc8800; background: rgba(204,136,0,0.07); }
  .lb-tabs {
    display: flex;
    gap: 0;
    margin-bottom: 14px;
    border-bottom: 1px solid var(--dim);
  }
  .lb-tab {
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--dim);
    font-family: inherit;
    font-size: 10px;
    padding: 6px 18px;
    cursor: pointer;
    letter-spacing: 2px;
    transition: all 0.1s;
    margin-bottom: -1px;
  }
  .lb-tab:hover { color: var(--phosphor); }
  .lb-tab.active { color: var(--bright); border-bottom-color: var(--bright); }
  .lb-tab.daily-tab.active { color: #cc8800; border-bottom-color: #cc8800; }

  /* ── USERNAME INPUT ── */
  .username-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    margin-bottom: 14px;
  }
  .username-label {
    color: var(--dim);
    font-size: 10px;
    letter-spacing: 3px;
  }
  .username-wrap {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--dim);
    padding: 4px 10px;
  }
  .username-prefix { color: var(--dim); font-size: 13px; }
  .username-field {
    background: transparent;
    border: none;
    color: var(--bright);
    font-family: inherit;
    font-size: 15px;
    letter-spacing: 3px;
    width: 180px;
    outline: none;
    text-transform: uppercase;
    caret-color: var(--phosphor);
  }
  .username-field::placeholder { color: var(--very-dim); filter: brightness(2); letter-spacing: 2px; }

  /* ── LEADERBOARD SCREEN ── */
  .lb-header {
    font-size: 10px;
    letter-spacing: 3px;
    color: var(--dim);
    border-bottom: 1px solid var(--dim);
    padding-bottom: 6px;
    margin-bottom: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lb-title-text {
    font-size: 14px;
    color: var(--bright);
    letter-spacing: 5px;
    text-shadow: 0 0 10px var(--phosphor);
    margin-bottom: 10px;
    text-align: center;
  }
  .lb-subtitle {
    color: var(--dim);
    font-size: 10px;
    text-align: center;
    margin-bottom: 16px;
    letter-spacing: 2px;
  }
  .lb-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
  }
  .lb-table th {
    color: var(--dim);
    font-weight: normal;
    text-align: left;
    letter-spacing: 2px;
    font-size: 10px;
    padding: 4px 8px;
    border-bottom: 1px solid var(--very-dim);
  }
  .lb-table td {
    padding: 5px 8px;
    border-bottom: 1px solid rgba(13,77,13,0.3);
    color: var(--phosphor);
  }
  .lb-table tr:hover td { background: rgba(51,255,51,0.04); }
  .lb-table .lb-rank { color: var(--dim); width: 36px; }
  .lb-table .lb-name { color: var(--bright); font-size: 12px; letter-spacing: 1px; }
  .lb-table .lb-pos { color: #33ff33; }
  .lb-table .lb-neg { color: #cc4422; }
  .lb-table .lb-gold td { background: rgba(255,220,0,0.04); }
  .lb-table .lb-gold .lb-rank { color: #ccaa00; }
  .lb-table .lb-silver .lb-rank { color: #888; }
  .lb-table .lb-bronze .lb-rank { color: #884422; }
  .streak-badge {
    display: inline-block;
    margin-left: 6px;
    font-size: 10px;
    color: #ffaa00;
    letter-spacing: 0;
    vertical-align: middle;
    text-shadow: 0 0 6px #ffaa00;
  }
  .streak-badge.max { color: #ff6600; text-shadow: 0 0 8px #ff6600; }
  .lb-empty {
    text-align: center;
    color: var(--dim);
    padding: 30px;
    font-size: 12px;
    letter-spacing: 2px;
  }
  .lb-loading {
    text-align: center;
    color: var(--dim);
    padding: 20px;
    font-size: 11px;
    letter-spacing: 2px;
  }
  .lb-actions {
    display: flex;
    gap: 10px;
    margin-top: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* ── LEADERBOARD / WELCOME EXTRA BUTTONS ── */
  .btn-leaderboard {
    background: transparent;
    border: 1px solid var(--dim);
    color: var(--dim);
    font-family: inherit;
    font-size: 12px;
    padding: 8px 20px;
    cursor: pointer;
    letter-spacing: 2px;
    transition: all 0.15s;
    margin-top: 8px;
  }
  .btn-leaderboard:hover { border-color: var(--phosphor); color: var(--phosphor); }
  .btn-submit-score {
    background: transparent;
    border: 1px solid var(--bright);
    color: var(--bright);
    font-family: inherit;
    font-size: 12px;
    padding: 9px 24px;
    cursor: pointer;
    letter-spacing: 2px;
    transition: all 0.15s;
    text-shadow: 0 0 8px var(--phosphor);
  }
  .btn-submit-score:hover { background: rgba(51,255,51,0.07); }
  .btn-submit-score:disabled { opacity: 0.4; cursor: not-allowed; }
  .submit-result {
    font-size: 11px;
    letter-spacing: 2px;
    min-height: 18px;
    color: var(--dim);
    text-align: center;
  }
  .btn-export {
    background: transparent;
    border: 1px solid var(--very-dim);
    color: var(--very-dim);
    filter: brightness(2);
    font-family: inherit;
    font-size: 10px;
    padding: 2px 8px;
    cursor: pointer;
    transition: all 0.1s;
    letter-spacing: 1px;
  }
  .btn-export:hover { border-color: var(--dim); color: var(--phosphor); }

  /* ── SOUND TOGGLE ── */
  .sound-toggle {
    background: transparent;
    border: 1px solid var(--very-dim);
    color: var(--very-dim);
    filter: brightness(2);
    font-family: inherit;
    font-size: 10px;
    padding: 2px 8px;
    cursor: pointer;
    transition: all 0.1s;
  }
  .sound-toggle:hover, .sound-toggle.on { border-color: var(--dim); color: var(--phosphor); }

  /* ── STRATEGY PANEL ── */
  .strategy-section {
    border: 1px solid var(--very-dim);
    margin-bottom: 10px;
  }
  .strategy-title {
    padding: 4px 10px;
    color: var(--very-dim);
    font-size: 10px;
    letter-spacing: 3px;
    border-bottom: 1px solid var(--very-dim);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .strategy-body {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: flex-end;
  }
  .strategy-field { display: flex; flex-direction: column; gap: 3px; }
  .strategy-label { color: var(--very-dim); filter: brightness(2); font-size: 10px; letter-spacing: 1px; }
  .strategy-select {
    background: transparent;
    border: 1px solid var(--dim);
    color: var(--phosphor);
    font-family: inherit;
    font-size: 11px;
    padding: 4px 6px;
    cursor: pointer;
    outline: none;
    min-width: 130px;
  }
  .strategy-select option { background: #000a00; color: var(--phosphor); }
  .strategy-input {
    background: transparent;
    border: 1px solid var(--dim);
    color: var(--bright);
    font-family: inherit;
    font-size: 12px;
    padding: 4px 8px;
    width: 90px;
    outline: none;
  }
  .strategy-input:focus { border-color: var(--phosphor); }
  .strategy-status {
    font-size: 11px;
    color: var(--dim);
    padding: 4px 0;
    flex: 1;
    min-width: 200px;
  }
  .strategy-status .s-active { color: var(--bright); text-shadow: 0 0 6px var(--phosphor); }
  .strategy-status .s-warn { color: #cc4422; }

  /* ── AUTO-SPIN ── */
  .autospin-row {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
    padding: 8px 10px;
    border-top: 1px solid var(--very-dim);
  }
  .autospin-label { color: var(--very-dim); filter: brightness(2); font-size: 10px; letter-spacing: 1px; }
  .autospin-btn {
    background: transparent;
    border: 1px solid var(--dim);
    color: var(--dim);
    font-family: inherit;
    font-size: 10px;
    padding: 3px 8px;
    cursor: pointer;
    transition: all 0.1s;
    letter-spacing: 1px;
  }
  .autospin-btn:hover { border-color: var(--phosphor); color: var(--phosphor); }
  .autospin-btn.active { border-color: var(--bright); color: var(--bright); text-shadow: 0 0 6px var(--phosphor); }
  .autospin-stop {
    background: transparent;
    border: 1px solid #882200;
    color: #cc4422;
    font-family: inherit;
    font-size: 10px;
    padding: 3px 12px;
    cursor: pointer;
    letter-spacing: 1px;
    display: none;
  }
  .autospin-stop.active { display: inline-block; }
  .autospin-counter { color: var(--dim); font-size: 11px; margin-left: 6px; }

  /* ── ODDS DISPLAY ── */
  .odds-row {
    display: flex;
    gap: 16px;
    padding: 5px 10px;
    font-size: 11px;
    border-top: 1px solid var(--very-dim);
    background: rgba(0,20,0,0.3);
    flex-wrap: wrap;
  }
  .odds-cell { color: var(--dim); }
  .odds-cell span { color: var(--phosphor); }
  .odds-cell .ev-pos { color: var(--bright); }
  .odds-cell .ev-neg { color: #884422; }

  /* ── TOOLTIP ── */
  .num-cell[data-hits]:hover::after {
    content: attr(data-hits) ' hits';
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #000a00;
    border: 1px solid var(--dim);
    color: var(--phosphor);
    font-size: 10px;
    padding: 2px 5px;
    white-space: nowrap;
    z-index: 100;
    pointer-events: none;
  }

  /* ── GAME OVER ── */
  #gameover-screen { text-align: center; padding: 60px 20px; }
  .gameover-box {
    border: 1px solid var(--phosphor);
    display: inline-block;
    padding: 30px 50px;
    box-shadow: 0 0 20px var(--dim);
  }
  .gameover-title {
    font-size: 22px;
    color: var(--bright);
    text-shadow: 0 0 16px var(--phosphor);
    letter-spacing: 4px;
    margin-bottom: 16px;
  }
  .gameover-stats { color: var(--dim); margin-bottom: 20px; line-height: 2; }
  .gameover-stats span { color: var(--phosphor); }
  .btn-restart {
    background: transparent;
    border: 1px solid var(--phosphor);
    color: var(--bright);
    font-family: inherit;
    font-size: 13px;
    padding: 10px 30px;
    cursor: pointer;
    letter-spacing: 2px;
    text-shadow: 0 0 6px var(--phosphor);
    box-shadow: 0 0 10px var(--dim);
    transition: all 0.1s;
  }
  .btn-restart:hover { background: rgba(51,255,51,0.08); box-shadow: 0 0 20px var(--phosphor); }

  /* scrollbar */
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--dim); }

  /* ── ACHIEVEMENTS ── */
  .achievement-toast {
    position: fixed; bottom: 24px; right: 24px; z-index: 999;
    background: #000a00; border: 1px solid #ccaa00;
    color: #ccaa00; font-family: inherit; font-size: 11px;
    padding: 10px 16px; letter-spacing: 1px;
    box-shadow: 0 0 18px rgba(204,170,0,0.3);
    animation: toastIn 0.3s ease, toastOut 0.4s ease 2.6s forwards;
    max-width: 320px;
  }
  @keyframes toastIn { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
  @keyframes toastOut { to { opacity:0; transform:translateY(14px); } }
  .achievement-label { color: #ffdd44; font-size: 9px; letter-spacing: 3px; margin-bottom: 3px; }
  .achievements-panel {
    margin: 10px 0; padding: 10px 14px;
    border: 1px solid #443300; background: rgba(204,170,0,0.03);
    font-size: 11px; letter-spacing: 1px;
  }
  .achievements-panel-title { color: #ccaa00; font-size: 10px; letter-spacing: 3px; margin-bottom: 8px; }
  .achievement-chip {
    display: inline-block; margin: 3px 4px 3px 0;
    padding: 2px 8px; border: 1px solid #884400;
    color: #ccaa00; font-size: 10px; letter-spacing: 1px;
  }

  /* ── GLITCH ── */
  @keyframes glitch-shift {
    0%   { clip-path: inset(0 0 95% 0); transform: skewX(-5deg); }
    20%  { clip-path: inset(40% 0 50% 0); transform: skewX(3deg); }
    40%  { clip-path: inset(70% 0 10% 0); transform: skewX(-2deg); }
    60%  { clip-path: inset(20% 0 75% 0); transform: skewX(4deg); }
    80%  { clip-path: inset(60% 0 30% 0); transform: skewX(-3deg); }
    100% { clip-path: inset(0 0 95% 0); transform: skewX(0); }
  }
  .glitching::before {
    content: ''; position: fixed; inset: 0; z-index: 9998; pointer-events: none;
    background: rgba(51,255,51,0.06); animation: glitch-shift 0.15s steps(1) 4;
  }
  .glitching .game-banner-logo, .glitching .header-box {
    animation: glitch-color 0.2s steps(2) 3;
  }
  @keyframes glitch-color {
    0%   { filter: hue-rotate(0deg) brightness(1); }
    33%  { filter: hue-rotate(90deg) brightness(1.4); }
    66%  { filter: hue-rotate(180deg) brightness(0.8); }
    100% { filter: hue-rotate(0deg) brightness(1); }
  }

  /* ── SYSTEM MESSAGE FEED ── */
  .sysmsg-feed {
    border: 1px solid var(--very-dim); margin-bottom: 10px;
    padding: 6px 10px; min-height: 28px; max-height: 70px; overflow: hidden;
    font-size: 10px; letter-spacing: 1px; color: var(--dim); filter: brightness(1.6);
    position: relative;
  }
  .sysmsg-line { margin: 1px 0; line-height: 1.5; }
  .sysmsg-line::before { content: '> '; color: var(--very-dim); filter: brightness(2); }
  .sysmsg-cursor { display: inline-block; width: 7px; background: var(--dim); animation: blink 0.9s step-end infinite; }

  /* ── SPIN HISTORY TIMELINE ── */
  .timeline-section {
    margin-bottom: 10px; border: 1px solid var(--very-dim);
    padding: 6px 8px;
  }
  .timeline-title { font-size: 10px; color: var(--dim); filter: brightness(1.6); letter-spacing: 2px; margin-bottom: 5px; }
  .timeline-track {
    display: flex; flex-wrap: wrap; gap: 2px;
    max-height: 40px; overflow: hidden;
  }
  .tl-block {
    width: 14px; height: 14px; display: inline-block;
    font-size: 7px; line-height: 14px; text-align: center;
    cursor: default; flex-shrink: 0;
  }
  .tl-red   { background: #661111; }
  .tl-black { background: #1a1a1a; border: 1px solid #333; }
  .tl-zero  { background: #114411; }

  /* ── KEYBOARD SHORTCUTS OVERLAY ── */
  .shortcuts-overlay {
    display: none; position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,10,0,0.92); align-items: center; justify-content: center;
  }
  .shortcuts-overlay.visible { display: flex; }
  .shortcuts-box {
    border: 1px solid var(--phosphor); padding: 24px 32px;
    font-size: 11px; letter-spacing: 2px; min-width: 340px;
    box-shadow: 0 0 40px rgba(51,255,51,0.12);
  }
  .shortcuts-title { color: var(--bright); font-size: 13px; letter-spacing: 4px; margin-bottom: 16px; text-align: center; }
  .shortcut-row { display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px solid var(--very-dim); }
  .shortcut-key { color: var(--bright); min-width: 80px; }
  .shortcut-desc { color: var(--dim); filter: brightness(1.8); }
  .shortcuts-close { text-align: center; margin-top: 14px; color: var(--dim); font-size: 10px; }

  /* ── SEED VIEWER MODAL ── */
  .seed-modal {
    display: none; position: fixed; inset: 0; z-index: 1000;
    background: rgba(0,10,0,0.93); align-items: center; justify-content: center;
  }
  .seed-modal.visible { display: flex; }
  .seed-box {
    border: 1px solid var(--dim); padding: 22px 28px;
    font-size: 11px; letter-spacing: 1px; max-width: 480px; width: 100%;
    box-shadow: 0 0 30px rgba(51,255,51,0.1);
  }
  .seed-title { color: var(--bright); letter-spacing: 4px; font-size: 13px; margin-bottom: 14px; }
  .seed-row { margin: 6px 0; }
  .seed-label { color: var(--dim); filter: brightness(1.8); font-size: 10px; letter-spacing: 2px; margin-bottom: 2px; }
  .seed-value { color: var(--phosphor); word-break: break-all; font-size: 10px; }
  .seed-sequence { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
  .seed-num { padding: 2px 5px; border: 1px solid var(--very-dim); font-size: 10px; color: var(--dim); filter: brightness(2); }
  .btn-seed { background: transparent; border: 1px solid var(--dim); color: var(--phosphor);
    font-family: inherit; font-size: 10px; padding: 4px 12px; cursor: pointer;
    letter-spacing: 2px; margin-top: 12px; margin-right: 8px; }
  .btn-seed:hover { border-color: var(--phosphor); }

  /* ── CHALLENGE MODE ── */
  .challenge-modes { margin: 8px 0; display: flex; flex-direction: column; gap: 6px; align-items: center; }
  .btn-challenge {
    background: transparent; border: 1px solid #334433;
    color: #668866; font-family: inherit; font-size: 11px;
    padding: 7px 24px; cursor: pointer; letter-spacing: 2px;
    width: 340px; transition: all 0.15s;
  }
  .btn-challenge:hover { border-color: var(--dim); color: var(--phosphor); background: rgba(51,255,51,0.03); }
  .challenge-sep { font-size: 10px; color: var(--very-dim); filter: brightness(2); letter-spacing: 3px; margin: 4px 0; }

  /* ── RIVAL ── */
  .rival-cell { font-size: 10px; }
  .rival-bar {
    border: 1px solid #442200; padding: 4px 10px; margin-bottom: 8px;
    font-size: 10px; letter-spacing: 1px; color: #884400; display: none;
  }
  .rival-bar.visible { display: block; }
  .rival-ahead { color: var(--bright); }
  .rival-behind { color: #cc4422; }

  /* ── SESSION TIMER ── */
  .session-timer-display { font-size: 10px; color: var(--dim); filter: brightness(1.8);
    letter-spacing: 2px; margin-left: 8px; }

  /* ── TOURNAMENT ── */
  .btn-tournament {
    display: block; margin: 8px auto 0;
    background: transparent; border: 1px solid #885500;
    color: #cc8833; font-family: inherit; font-size: 11px;
    padding: 7px 24px; cursor: pointer; letter-spacing: 2px;
    width: 340px; transition: all 0.15s;
  }
  .btn-tournament:hover { border-color: #ffaa44; color: #ffcc66; background: rgba(255,160,50,0.05); box-shadow: 0 0 10px rgba(200,120,0,0.2); }
  .tourn-modal {
    display: none; position: fixed; inset: 0; background: rgba(0,10,0,0.93);
    z-index: 999; justify-content: center; align-items: center;
  }
  .tourn-modal.active { display: flex; }
  .tourn-box {
    background: #000a00; border: 1px solid #885500; padding: 24px 28px;
    max-width: 440px; width: 92%; max-height: 85vh; overflow-y: auto;
    box-shadow: 0 0 40px rgba(200,120,0,0.15);
  }
  .tourn-title { font-size: 12px; color: #ffcc66; letter-spacing: 3px; text-align: center; margin-bottom: 16px; }
  .tourn-tabs { display: flex; gap: 8px; margin-bottom: 16px; justify-content: center; }
  .tourn-tab {
    background: transparent; border: 1px solid #553300; color: #885533;
    font-family: inherit; font-size: 10px; padding: 5px 16px; cursor: pointer;
    letter-spacing: 2px; transition: all 0.15s;
  }
  .tourn-tab.active { border-color: #cc8833; color: #ffcc66; }
  .tourn-tab:hover { border-color: #885500; color: #cc8833; }
  .tourn-field-label { font-size: 9px; color: #885533; letter-spacing: 2px; margin-bottom: 4px; }
  .tourn-code-display { font-size: 11px; color: #885533; letter-spacing: 2px; margin-bottom: 4px; text-align: center; }
  .tourn-code { font-size: 32px; color: #ffcc66; letter-spacing: 10px; text-shadow: 0 0 16px #cc8833; }
  .tourn-settings { font-size: 9px; color: #664422; letter-spacing: 2px; text-align: center; margin-bottom: 12px; }
  .tourn-lobby-title { font-size: 10px; color: #885533; letter-spacing: 2px; margin: 10px 0 4px; }
  .tourn-player-list { border: 1px solid #442200; padding: 6px 10px; min-height: 40px; }
  .tourn-player-row { display: flex; justify-content: space-between; font-size: 10px; letter-spacing: 1px; padding: 3px 0; color: #664422; border-bottom: 1px solid #221100; }
  .tourn-player-row:last-child { border-bottom: none; }
  .tourn-player-row.is-host { color: #ffcc66; }
  .tourn-msg-el { font-size: 10px; color: #cc4422; letter-spacing: 2px; margin-top: 10px; min-height: 16px; text-align: center; }
  /* Live rank panel during game */
  .tourn-rank-panel {
    display: none; border: 1px solid #553300; padding: 6px 10px;
    margin-bottom: 8px; background: rgba(30,10,0,0.6);
  }
  .tourn-rank-header { font-size: 9px; color: #885533; letter-spacing: 2px; margin-bottom: 5px; display: flex; justify-content: space-between; }
  .tourn-rank-row { display: flex; align-items: center; gap: 8px; font-size: 10px; letter-spacing: 1px; padding: 2px 0; }
  .tourn-rank-pos { color: #664422; width: 20px; font-size: 11px; }
  .tourn-rank-name { color: #cc8833; min-width: 80px; flex: 1; }
  .tourn-rank-name.is-you { color: #ffcc66; text-shadow: 0 0 6px #aa7700; }
  .tourn-rank-bal { color: var(--phosphor); font-size: 11px; }
  .tourn-rank-bal.leading { color: #ffcc66; text-shadow: 0 0 8px #aa7700; }
  .tourn-rank-status { font-size: 9px; color: #442200; letter-spacing: 1px; }
  /* Final results overlay */
  .tourn-results-overlay {
    display: none; position: fixed; inset: 0; background: rgba(0,8,0,0.97);
    z-index: 1001; justify-content: center; align-items: center;
  }
  .tourn-results-overlay.active { display: flex; }
  .tourn-results-box {
    background: #000a00; border: 1px solid #ffcc66; padding: 28px 36px;
    max-width: 480px; width: 92%; box-shadow: 0 0 60px rgba(200,150,0,0.25);
    text-align: center;
  }
  .tourn-results-title { font-size: 13px; color: #ffcc66; letter-spacing: 3px; margin-bottom: 6px; }
  .tourn-results-sub { font-size: 9px; color: #664422; letter-spacing: 2px; margin-bottom: 18px; }
  .tourn-result-row { display: flex; align-items: center; gap: 12px; padding: 7px 4px; border-bottom: 1px solid #1a0a00; font-size: 11px; letter-spacing: 1px; text-align: left; }
  .tourn-result-row:last-child { border-bottom: none; }
  .tourn-result-medal { font-size: 18px; width: 28px; text-align: center; }
  .tourn-result-name { color: #cc8833; flex: 1; }
  .tourn-result-name.is-you { color: #ffcc66; text-shadow: 0 0 8px #aa7700; }
  .tourn-result-bal { color: var(--phosphor); font-size: 12px; font-weight: bold; }
  .tourn-result-spins { font-size: 9px; color: #442200; letter-spacing: 1px; }
  .tourn-countdown { font-size: 36px; color: #ffcc66; text-align: center; letter-spacing: 8px; text-shadow: 0 0 20px #cc8833; margin: 8px 0; }
</style>
</head>
<body>

<!-- ══ WELCOME SCREEN ══ -->
<div id="welcome-screen" class="screen active">
  <pre class="ascii-logo"> ███   ███  █████ █   █ █████     ███   ███   ███     ████  ████  █████  ████ █████ █   █ █████  ████   
█ ░░█ █ ░░░ █░░░░░██  █░ ░█░░░   █ ░░█ █ ░░█ █ ░░█    █░░░█ █░░░█ █░░░░░█ ░░░░█░░░░░██  █░ ░█░░░█ ░░░░  
█████░█░ ██░████░░█░█ █░░ █░░░░  █░ ░█░█░ ░█░█░ ░█░   ████░░████░░████░░░███░░████░░█░█ █░░ █░░░░███░░░ 
█░░░█░█░░ █░█░░░░ █░░██░░ █░░    █░░ █░█░░ █░█░░ █░░  █░░░░ █░░█░ █░░░░   ░░█ █░░░░ █░░██░░ █░░   ░░█   
█░░░█░░███ ░█████░█░░ █░░ █░░     ███ ░░███ ░░███ ░░  █░░░░░█░░░█░█████░████░░█████░█░░ █░░ █░░ ████░░  
 ░░  ░░ ░░░ ░░░░░░ ░░  ░░  ░░      ░░░ ░ ░░░ ░ ░░░ ░   ░░    ░░  ░ ░░░░░ ░░░░ ░░░░░░ ░░  ░░  ░░  ░░░░ ░ 
  ░   ░  ░░░  ░░░░░ ░   ░   ░       ░░░   ░░░   ░░░     ░     ░   ░ ░░░░░ ░░░░  ░░░░░ ░   ░   ░   ░░░░ 

----------------------------------------------------------------------------------------------------------

█████ █████ ████  █   █ ███ █   █  ███  █        ████   ███  █   █ █     █████ █████ █████ █████   
 ░█░░░█░░░░░█░░░█ ██ ██░ █░░██  █░█ ░░█ █░       █░░░█ █ ░░█ █░  █░█░    █░░░░░ ░█░░░ ░█░░░█░░░░░  
  █░░░████░░████░░█░█ █░░█░░█░█ █░█████░█░░      ████░░█░ ░█░█░░ █░█░░   ████░░░ █░░░░ █░░░████░░░ 
  █░░ █░░░░ █░░█░ █░░░█░░█░░█░░██░█░░░█░█░░      █░░█░ █░░ █░█░░ █░█░░   █░░░░   █░░   █░░ █░░░░   
  █░░ █████░█░░░█░█░░ █░███░█░░ █░█░░░█░█████    █░░░█░ ███ ░░███ ░█████ █████░  █░░   █░░ █████░  
   ░░  ░░░░░ ░░  ░ ░░  ░░░░░ ░░  ░░░░  ░░░░░░░    ░░  ░  ░░░ ░ ░░░ ░░░░░░ ░░░░░   ░░    ░░  ░░░░░  
    ░   ░░░░░ ░   ░ ░   ░ ░░░ ░   ░ ░   ░ ░░░░░    ░   ░  ░░░   ░░░  ░░░░░ ░░░░░   ░     ░   ░░░░░  </pre>

  <pre class="ascii-art">
                               =+++++++++++++++++++
                        ---===+#**#%%%%%*-:@@@@%%#%+**+=====
                   -----#-%%%%%%#+#%%@@%:+=#%%%%@#*%%%%@@%**+=+==
               -::::*#%%%#*%@%%%%%--%%#=-+=--#%%%%#=%%%@%*#%%%#++====
            -::::*#%%#%@%%## ####*-----:=#+*:-=:--=#######%%%%*%%#-+===-
          ::::.*#%#%#%%####%::=*#%@+ *=:==.+:-*+  %= +.:#-######%#%%:+==-=
        :.....#%#%####*#::+%%%%:-=#%*+.%::::-+*@@+=:.%%+*+.:###:##%%%#+=---*
       :.....*#%######:-:%+*==%#%--::---:. =.-----:#:+==#%%%-:#########=---:.
      *.....+#%#%-##:::+ +=###=::::::::--==:.--::::::+#.=*= +%.:***####+---::*
      :.....+######::#.+.#==+:::.:..  -==-=-=--:#::::::+++* ##+-.**:###+=--::.
      ::::::-%#####:.++=*+++ ..  ..::#:::--::=:::::::::-++++++%-:*#####=---::.
      +-:::::*#--**: -**%%## .::::::::::-@----::::::::. -=.%###.:#####*=---::+
      .----::::####--+++=+=+::::=::::-:::=::---:::::::-#+=-%*++:###:#+==----:
       *=-------:#***:#=-#%%+++.:::::::::::::::::::::++++-+###:####*++==---=
        =*=--------#+#::=+=+:--%#+++--::::::::--*++- ++: +++=.*#*++=======*
         .*+=--=---=---+*:.##*==:==%%%+++%%%+++-%%*:+++++::%+**++==++===+=
           **#============+=*::++#..#+.*+%  # = =# :#::**+*++++++++++-#+#
           ++#*#%=+=+===+==+++++*++****#*********+****+*+*********-##+#+*
            #*+%%#%#%#=++=++=+++=+++**++++**+++**+**********#+*#*#*#++**
             :#****%%#%%##*=****++**+***+*+*++**+*+*#***:+#######****#
               #####***%#%####################%############=#*****##-
                 =############%+=###############%##:*####**#######
                    *##########################################:
                        ###################################*
                             %##########%%##%#########*</pre>

  <div class="welcome-box">
    <div class="wb-spacer"></div>
    <div class="wb-row center wb-title">[ ✦ ]&nbsp; T E R M I N A L &nbsp; R O U L E T T E &nbsp; [ ✦ ]</div>
    <div class="wb-spacer" style="border-top:1px solid var(--dim); border-bottom:1px solid var(--dim);"></div>
    <div class="wb-row wb-dim">- SYSTEM STATUS: ONLINE // NATIVE ASCII INTERFACE -</div>
    <div class="wb-row wb-dim" style="border-bottom:1px solid var(--phosphor);">- PROTOCOL: STANDARD EUROPEAN // 35:1 PAYOUTS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</div>
    <div class="wb-spacer"></div>
  </div>

  <div class="username-row">
    <div class="username-label">AGENT DESIGNATION (OPTIONAL)</div>
    <div class="username-wrap">
      <span class="username-prefix">></span>
      <input type="text" class="username-field" id="username-field" maxlength="20" placeholder="ENTER CALLSIGN" autocomplete="off" spellcheck="false">
    </div>
  </div>

  <button class="btn-enter" onclick="initGame(false, null)">[ PRESS ENTER TO INITIALIZE SEATING ]</button>
  <button class="btn-daily" onclick="initGame(true, null)">[ ★ DAILY CHALLENGE — <span id="dc-date-label"></span> ]</button>

  <div class="challenge-sep">── CHALLENGE MODES ──</div>
  <div class="challenge-modes">
    <button class="btn-challenge" onclick="initGame(false, {name:'POVERTY RUN',startBalance:200,maxSpins:20,desc:'$200 START — 20 SPINS — SURVIVE'})">[ ⚡ POVERTY RUN — $200 / 20 SPINS ]</button>
    <button class="btn-challenge" onclick="initGame(false, {name:'COLUMN GAMBIT',startBalance:500,maxSpins:30,colOnly:true,desc:'$500 — COLUMN BETS ONLY — 30 SPINS'})">[ ▦ COLUMN GAMBIT — $500 / COLUMNS ONLY ]</button>
    <button class="btn-challenge" onclick="initGame(false, {name:'HIGH STAKES',startBalance:2000,minBet:100,maxSpins:25,desc:'$2000 — MIN BET $100 — 25 SPINS'})">[ ♠ HIGH STAKES — $2000 / MIN $100 BET ]</button>
  </div>

  <button class="btn-tournament" onclick="openTournamentModal()">[ ⚔ TOURNAMENT MODE — LIVE MULTIPLAYER ]</button>

  <div class="username-row" style="margin-top:10px;">
    <div class="username-label">RIVAL CALLSIGN (OPTIONAL)</div>
    <div class="username-wrap">
      <span class="username-prefix">⚔</span>
      <input type="text" class="username-field" id="rival-field" maxlength="20" placeholder="ENTER RIVAL NAME" autocomplete="off" spellcheck="false">
    </div>
  </div>

  <button class="btn-leaderboard" onclick="showLeaderboard('welcome')">[ VIEW LEADERBOARD ]</button>
</div>

<!-- ══ GAME SCREEN ══ -->
<div id="game-screen" class="screen">

  <!-- Game Banner -->
  <div class="game-banner">
    <pre class="game-banner-logo"> ███   ███  █████ █   █ █████     ███   ███   ███     ████  ████  █████  ████ █████ █   █ █████  ████   
█ ░░█ █ ░░░ █░░░░░██  █░ ░█░░░   █ ░░█ █ ░░█ █ ░░█    █░░░█ █░░░█ █░░░░░█ ░░░░█░░░░░██  █░ ░█░░░█ ░░░░  
█████░█░ ██░████░░█░█ █░░ █░░░░  █░ ░█░█░ ░█░█░ ░█░   ████░░████░░████░░░███░░████░░█░█ █░░ █░░░░███░░░ 
█░░░█░█░░ █░█░░░░ █░░██░░ █░░    █░░ █░█░░ █░█░░ █░░  █░░░░ █░░█░ █░░░░   ░░█ █░░░░ █░░██░░ █░░   ░░█   
█░░░█░░███ ░█████░█░░ █░░ █░░     ███ ░░███ ░░███ ░░  █░░░░░█░░░█░█████░████░░█████░█░░ █░░ █░░ ████░░  
 ░░  ░░ ░░░ ░░░░░░ ░░  ░░  ░░      ░░░ ░ ░░░ ░ ░░░ ░   ░░    ░░  ░ ░░░░░ ░░░░ ░░░░░░ ░░  ░░  ░░  ░░░░ ░ 
  ░   ░  ░░░  ░░░░░ ░   ░   ░       ░░░   ░░░   ░░░     ░     ░   ░ ░░░░░ ░░░░  ░░░░░ ░   ░   ░   ░░░░ 
<span class="game-banner-sep">----------------------------------------------------------------------------------------------------------------------</span>
█████ █████ ████  █   █ ███ █   █  ███  █        ████   ███  █   █ █     █████ █████ █████ █████   
 ░█░░░█░░░░░█░░░█ ██ ██░ █░░██  █░█ ░░█ █░       █░░░█ █ ░░█ █░  █░█░    █░░░░░ ░█░░░ ░█░░░█░░░░░  
  █░░░████░░████░░█░█ █░░█░░█░█ █░█████░█░░      ████░░█░ ░█░█░░ █░█░░   ████░░░ █░░░░ █░░░████░░░ 
  █░░ █░░░░ █░░█░ █░░░█░░█░░█░░██░█░░░█░█░░      █░░█░ █░░ █░█░░ █░█░░   █░░░░   █░░   █░░ █░░░░   
  █░░ █████░█░░░█░█░░ █░███░█░░ █░█░░░█░█████    █░░░█░ ███ ░░███ ░█████ █████░  █░░   █░░ █████░  
   ░░  ░░░░░ ░░  ░ ░░  ░░░░░ ░░  ░░░░  ░░░░░░░    ░░  ░  ░░░ ░ ░░░ ░░░░░░ ░░░░░   ░░    ░░  ░░░░░  
    ░   ░░░░░ ░   ░ ░   ░ ░░░ ░   ░ ░   ░ ░░░░░    ░   ░  ░░░   ░░░  ░░░░░ ░░░░░   ░     ░   ░░░░░  </pre>
    <pre class="game-banner-wheel">                               =+++++++++++++++++++
                        ---===+#**#%%%%%*-:@@@@%%#%+**+=====
                   -----#-%%%%%%#+#%%@@%:+=#%%%%@#*%%%%@@%**+=+==
               -::::*#%%%#*%@%%%%%--%%#=-+=--#%%%%#=%%%@%*#%%%#++====
            -::::*#%%#%@%%## ####*-----:=#+*:-=:--=#######%%%%*%%#-+===-
          ::::.*#%#%#%%####%::=*#%@+ *=:==.+:-*+  %= +.:#-######%#%%:+==-=
        :.....#%#%####*#::+%%%%:-=#%*+.%::::-+*@@+=:.%%+*+.:###:##%%%#+=---*
       :.....*#%######:-:%+*==%#%--::---:. =.-----:#:+==#%%%-:#########=---:.
      *.....+#%#%-##:::+ +=###=::::::::--==:.--::::::+#.=*= +%.:***####+---::*
      :.....+######::#.+.#==+:::.:..  -==-=-=--:#::::::+++* ##+-.**:###+=--::.
      ::::::-%#####:.++=*+++ ..  ..::#:::--::=:::::::::-++++++%-:*#####=---::.
      +-:::::*#--**: -**%%## .::::::::::-@----::::::::. -=.%###.:#####*=---::+
      .----::::####--+++=+=+::::=::::-:::=::---:::::::-#+=-%*++:###:#+==----:
       *=-------:#***:#=-#%%+++.:::::::::::::::::::::++++-+###:####*++==---=
        =*=--------#+#::=+=+:--%#+++--::::::::--*++- ++: +++=.*#*++=======*
         .*+=--=---=---+*:.##*==:==%%%+++%%%+++-%%*:+++++::%+**++==++===+=
           **#============+=*::++#..#+.*+%  # = =# :#::**+*++++++++++-#+#
           ++#*#%=+=+===+==+++++*++****#*********+****+*+*********-##+#+*
            #*+%%#%#%#=++=++=+++=+++**++++**+++**+**********#+*#*#*#++**
             :#****%%#%%##*=****++**+***+*+*++**+*+*#***:+#######****#
               #####***%#%####################%############=#*****##-
                 =############%+=###############%##:*####**#######
                    *##########################################:
                        ###################################*
                             %##########%%##%#########*</pre>
  </div>

  <!-- Header -->
  <div class="header-box">
    <div class="header-title" style="display:flex;justify-content:space-between;align-items:center;">
      <span>&nbsp;&nbsp;>> LOG:&nbsp; AGENT 000 TERMINAL CASINO ~ DIRECT MAINFRAME FEED<span id="daily-header-badge"></span></span>
      <div style="display:flex;gap:8px;align-items:center;">
        <span class="session-timer-display" id="session-timer">00:00</span>
        <span id="daily-spin-counter-header" style="display:none;" class="daily-spin-counter"></span>
        <button class="btn-seed" id="seed-viewer-btn" style="display:none;font-size:9px;padding:2px 8px;margin:0;" onclick="showSeedModal()">[ 🔍 VERIFY SEED ]</button>
        <button class="sound-toggle on" id="sound-toggle" onclick="toggleSound()" title="Toggle sound">&#9834; SFX</button>
        <button class="sound-toggle" onclick="toggleShortcuts()" title="Keyboard shortcuts">[ ? ]</button>
      </div>
    </div>
    <div class="header-stats">
      <div class="stat-cell">
        <div class="stat-label">AGENT</div>
        <div class="stat-value" id="agent-display" style="color:#ff4444;text-shadow:0 0 8px #ff2222;">ANON</div>
      </div>
      <div class="stat-cell">
        <div class="stat-label">BANKROLL</div>
        <div class="stat-value">$<span id="balance-display">1000</span></div>
      </div>
      <div class="stat-cell">
        <div class="stat-label">SPINS LOGGED</div>
        <div class="stat-value" id="spins-display">0</div>
      </div>
      <div class="stat-cell">
        <div class="stat-label">TOTAL WINS</div>
        <div class="stat-value" id="wins-display">0</div>
      </div>
    </div>
  </div>

  <!-- Rival bar -->
  <div class="rival-bar" id="rival-bar"></div>

  <!-- Tournament live rank panel -->
  <div class="tourn-rank-panel" id="tournament-rank-panel">
    <div class="tourn-rank-header">
      <span>⚔ TOURNAMENT — LIVE RANKINGS</span>
      <span id="tournament-rank-code"></span>
    </div>
    <div id="tournament-rank-list"></div>
  </div>

  <!-- Challenge mode indicator -->
  <div id="challenge-banner" style="display:none; text-align:center; font-size:10px; color:#668866; letter-spacing:2px; padding:4px; border:1px solid #334433; margin-bottom:6px;"></div>

  <!-- Extended stats bar -->
  <div class="stats-bar">
    <div class="stats-bar-cell">
      <div class="stats-bar-label">NET P&amp;L</div>
      <div class="stats-bar-val" id="stat-pnl">$0</div>
    </div>
    <div class="stats-bar-cell">
      <div class="stats-bar-label">WIN RATE</div>
      <div class="stats-bar-val" id="stat-winrate">--%</div>
    </div>
    <div class="stats-bar-cell">
      <div class="stats-bar-label">STREAK</div>
      <div class="stats-bar-val" id="stat-streak">--</div>
    </div>
    <div class="stats-bar-cell">
      <div class="stats-bar-label">BEST WIN</div>
      <div class="stats-bar-val pos" id="stat-bestwin">--</div>
    </div>
    <div class="stats-bar-cell" id="pb-cell" style="display:none;">
      <div class="stats-bar-label">DAILY PB</div>
      <div class="stats-bar-val" id="stat-pb">--</div>
    </div>
  </div>

  <!-- Last results -->
  <div class="last-results-section">
    <div class="last-results-label">// RECENT RESULTS</div>
    <div class="last-results-row" id="last-results-row">
      <span style="color:var(--very-dim);filter:brightness(2);font-size:11px;">NO SPINS YET</span>
    </div>
  </div>

  <!-- Table -->
  <div class="table-section">
    <div class="table-title">--- CASINO TABLE LAYOUT ---</div>
    <div class="roulette-table">
      <div class="table-grid">
        <div class="zero-cell" id="num-0" onclick="selectNumber(0)">0</div>
        <div class="numbers-grid" id="numbers-grid"></div>
        <div style="display:flex; flex-direction:column; border-left: 1px solid var(--dim);">
          <div class="col-bet-cell" id="col-3" onclick="selectOutside('col3')" title="3rd column: 3,6,9...36">[2:1]<br>COL 3</div>
          <div class="col-bet-cell" id="col-2" onclick="selectOutside('col2')" title="2nd column: 2,5,8...35">[2:1]<br>COL 2</div>
          <div class="col-bet-cell" id="col-1" onclick="selectOutside('col1')" title="1st column: 1,4,7...34">[2:1]<br>COL 1</div>
        </div>
      </div>
      <div class="dozens-row">
        <div style="border-right: 1px solid var(--dim); display:flex; align-items:center; justify-content:center; color:var(--very-dim); font-size:10px; padding:4px;">─</div>
        <div class="dozens-inner">
          <div class="dozen-cell" id="doz-1" onclick="selectOutside('doz1')">1ST 12</div>
          <div class="dozen-cell" id="doz-2" onclick="selectOutside('doz2')">2ND 12</div>
          <div class="dozen-cell" id="doz-3" onclick="selectOutside('doz3')">3RD 12</div>
        </div>
        <div style="border-left:1px solid var(--dim);"></div>
      </div>
      <div class="outside-row">
        <div class="outside-cell" id="out-low" onclick="selectOutside('low')">1-18</div>
        <div class="outside-cell" id="out-even" onclick="selectOutside('even')">EVEN</div>
        <div class="outside-cell red-cell" id="out-red" onclick="selectOutside('red')">RED</div>
        <div class="outside-cell black-cell" id="out-black" onclick="selectOutside('black')">BLACK</div>
        <div class="outside-cell" id="out-odd" onclick="selectOutside('odd')">ODD</div>
        <div class="outside-cell" id="out-high" onclick="selectOutside('high')">19-36</div>
      </div>
    </div>
  </div>

  <!-- Controls -->
  <div class="controls-section">
    <div class="controls-title">[ ALLOCATION CHOICE MENU ]</div>
    <div class="bet-display" id="bet-display">
      SELECTED BET: <span id="bet-description">-- NO BET SELECTED --</span>
      &nbsp;&nbsp;|&nbsp;&nbsp; PAYOUT: <span id="bet-payout">--</span>
    </div>
    <div class="odds-row" id="odds-row">
      <div class="odds-cell">WIN PROB: <span id="odds-prob">--</span></div>
      <div class="odds-cell">EDGE: <span id="odds-edge">--</span></div>
      <div class="odds-cell">EV per $100: <span id="odds-ev">--</span></div>
      <div class="odds-cell" style="margin-left:auto;color:var(--very-dim);filter:brightness(2);font-size:10px;">[ENTER] = SPIN</div>
    </div>
    <div class="wager-row">
      <span class="wager-label">INPUT WAGER QUANTITY ($):</span>
      <input type="number" class="wager-input" id="wager-input" placeholder="0" min="1">
      <div class="quick-bets">
        <button class="quick-btn" onclick="setWager(10)">$10</button>
        <button class="quick-btn" onclick="setWager(25)">$25</button>
        <button class="quick-btn" onclick="setWager(50)">$50</button>
        <button class="quick-btn" onclick="setWager(100)">$100</button>
        <button class="quick-btn" onclick="setWager('half')">½</button>
        <button class="quick-btn" onclick="setWager('all')">ALL IN</button>
        <button class="quick-btn" id="repeat-btn" onclick="repeatLastBet()" disabled title="Repeat last bet">↺ REPEAT</button>
      </div>
    </div>
    <div class="action-row">
      <button class="btn-spin" id="spin-btn" onclick="executeSpin()" disabled>
        [ INITIATE ROTATION SEQUENCE ]
      </button>
      <button class="btn-cashout" onclick="cashOut()">TERMINATE CONNECTION (CASH OUT)</button>
    </div>
  </div>

  <!-- Strategy Panel -->
  <div class="strategy-section">
    <div class="strategy-title">
      <span>// BETTING STRATEGY ENGINE</span>
      <span id="strategy-badge" style="color:var(--dim);font-size:10px;">MANUAL MODE</span>
    </div>
    <div class="strategy-body">
      <div class="strategy-field">
        <div class="strategy-label">STRATEGY</div>
        <select class="strategy-select" id="strategy-select" onchange="onStrategyChange()">
          <option value="manual">MANUAL</option>
          <option value="martingale">MARTINGALE (×2 on loss)</option>
          <option value="fibonacci">FIBONACCI SEQUENCE</option>
          <option value="dalembert">D'ALEMBERT (+1/-1 unit)</option>
          <option value="paroli">PAROLI (×2 on win, 3× cap)</option>
        </select>
      </div>
      <div class="strategy-field" id="field-base">
        <div class="strategy-label">BASE BET ($)</div>
        <input type="number" class="strategy-input" id="strategy-base" value="10" min="1" oninput="onStrategyChange()">
      </div>
      <div class="strategy-field" id="field-maxbet">
        <div class="strategy-label">MAX BET CAP ($)</div>
        <input type="number" class="strategy-input" id="strategy-maxbet" value="500" min="1" oninput="onStrategyChange()">
      </div>
      <div class="strategy-status" id="strategy-status">SELECT A STRATEGY TO ACTIVATE AUTO-WAGER</div>
    </div>
    <div class="autospin-row">
      <span class="autospin-label">AUTO-SPIN:</span>
      <button class="autospin-btn" onclick="startAutoSpin(5)">×5</button>
      <button class="autospin-btn" onclick="startAutoSpin(10)">×10</button>
      <button class="autospin-btn" onclick="startAutoSpin(25)">×25</button>
      <button class="autospin-btn" onclick="startAutoSpin(50)">×50</button>
      <button class="autospin-btn" onclick="startAutoSpin(100)">×100</button>
      <button class="autospin-stop" id="autospin-stop" onclick="stopAutoSpin()">[ ABORT ]</button>
      <span class="autospin-counter" id="autospin-counter"></span>
    </div>
  </div>

  <!-- Spin animation -->
  <div class="spin-section" id="spin-section">
    <div style="color:var(--dim); letter-spacing:3px; font-size:11px; margin-bottom:10px;">WHEEL PHYSICS ENGINE ACTIVE</div>
    <div class="spin-pointer">&#9662; SELECTOR &#9662;</div>
    <div class="spin-track" id="spin-track">─</div>
    <div style="color:var(--dim); font-size:11px; margin-top:8px;" id="spin-status">CALCULATING TRAJECTORY...</div>
  </div>

  <!-- Result -->
  <div class="result-section" id="result-section">
    <div class="result-label">ROTATION RESULT</div>
    <div class="result-number" id="result-number">--</div>
    <div class="result-color" id="result-color-label"></div>
    <div class="payout-msg" id="payout-msg"></div>
  </div>

  <!-- Spin history timeline -->
  <div class="timeline-section">
    <div class="timeline-title">// SPIN SEQUENCE TIMELINE</div>
    <div class="timeline-track" id="timeline-track">
      <span style="color:var(--very-dim);filter:brightness(2);font-size:10px;letter-spacing:1px;">NO SPINS YET</span>
    </div>
  </div>

  <!-- System message feed -->
  <div class="sysmsg-feed" id="sysmsg-feed">
    <div class="sysmsg-line">SYSTEM ONLINE — AWAITING OPERATOR INPUT<span class="sysmsg-cursor"></span></div>
  </div>

  <!-- Log -->
  <div class="log-section">
    <div class="log-title" style="display:flex;justify-content:space-between;align-items:center;">
      <span>// TRANSACTION LOG</span>
      <button class="btn-export" onclick="exportCSV()">⬇ EXPORT CSV</button>
    </div>
    <div class="log-entries" id="log-entries"></div>
  </div>

  <!-- Chart -->
  <div class="chart-section">
    <div class="chart-title">
      <span>// BANKROLL HISTORY</span>
      <span id="chart-range"></span>
    </div>
    <canvas id="balance-chart"></canvas>
  </div>

</div>

<!-- ══ GAME OVER / CASHOUT SCREEN ══ -->
<div id="gameover-screen" class="screen">
  <div class="gameover-box">
    <div class="gameover-title" id="gameover-title">BALANCE EXHAUSTED</div>
    <div class="gameover-stats" id="gameover-stats"></div>
    <div id="achievements-panel" class="achievements-panel" style="display:none;">
      <div class="achievements-panel-title">★ ACHIEVEMENTS UNLOCKED</div>
      <div id="achievements-list"></div>
    </div>
    <div id="submit-score-block" style="margin: 14px 0; display:flex; flex-direction:column; align-items:center; gap:8px;">
      <div class="username-row" style="margin-bottom:4px;" id="go-name-row">
        <div class="username-label">SUBMIT AS:</div>
        <div class="username-wrap">
          <span class="username-prefix">></span>
          <input type="text" class="username-field" id="go-username-field" maxlength="20" placeholder="ENTER CALLSIGN" autocomplete="off" spellcheck="false">
        </div>
      </div>
      <button class="btn-submit-score" id="submit-score-btn" onclick="submitScore()">[ SUBMIT TO LEADERBOARD ]</button>
      <div class="submit-result" id="submit-result"></div>
    </div>
    <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
      <button class="btn-restart" onclick="restartGame()">[ REINITIALIZE SESSION ]</button>
      <button class="btn-leaderboard" onclick="showLeaderboard('gameover')">[ VIEW LEADERBOARD ]</button>
      <button class="btn-leaderboard" onclick="exportCSV()">[ EXPORT LOG CSV ]</button>
      <button class="btn-leaderboard" onclick="copyShareCard()">[ 📋 COPY RESULT CARD ]</button>
    </div>
    <div id="share-card-msg" style="font-size:10px;color:var(--bright);letter-spacing:2px;margin-top:8px;text-align:center;min-height:16px;"></div>
  </div>
</div>

<!-- ══ KEYBOARD SHORTCUTS OVERLAY ══ -->
<div class="shortcuts-overlay" id="shortcuts-overlay" onclick="toggleShortcuts()">
  <div class="shortcuts-box" onclick="event.stopPropagation()">
    <div class="shortcuts-title">// KEYBOARD SHORTCUTS</div>
    <div class="shortcut-row"><span class="shortcut-key">ENTER</span><span class="shortcut-desc">SPIN THE WHEEL</span></div>
    <div class="shortcut-row"><span class="shortcut-key">R</span><span class="shortcut-desc">REPEAT LAST BET</span></div>
    <div class="shortcut-row"><span class="shortcut-key">1 / 2 / 3</span><span class="shortcut-desc">BET $10 / $25 / $50</span></div>
    <div class="shortcut-row"><span class="shortcut-key">4 / 5</span><span class="shortcut-desc">BET $100 / $250</span></div>
    <div class="shortcut-row"><span class="shortcut-key">S</span><span class="shortcut-desc">FOCUS STRATEGY PANEL</span></div>
    <div class="shortcut-row"><span class="shortcut-key">G</span><span class="shortcut-desc">TOGGLE GLITCH MODE</span></div>
    <div class="shortcut-row"><span class="shortcut-key">ESC / ?</span><span class="shortcut-desc">CLOSE THIS PANEL</span></div>
    <div class="shortcuts-close">CLICK OUTSIDE OR PRESS ESC TO CLOSE</div>
  </div>
</div>

<!-- ══ SEED VIEWER MODAL ══ -->
<div class="seed-modal" id="seed-modal" onclick="closeSeedModal()">
  <div class="seed-box" onclick="event.stopPropagation()">
    <div class="seed-title">// PROVABLY FAIR — SEED VERIFICATION</div>
    <div class="seed-row"><div class="seed-label">CHALLENGE DATE</div><div class="seed-value" id="sv-date"></div></div>
    <div class="seed-row"><div class="seed-label">FNV SEED HASH (HEX)</div><div class="seed-value" id="sv-seed"></div></div>
    <div class="seed-row"><div class="seed-label">PRNG ALGORITHM</div><div class="seed-value">MULBERRY32 — DETERMINISTIC</div></div>
    <div class="seed-row">
      <div class="seed-label">FIRST 10 WHEEL RESULTS (INDEX → NUMBER)</div>
      <div class="seed-sequence" id="sv-sequence"></div>
    </div>
    <div>
      <button class="btn-seed" onclick="copySeedInfo()">[ COPY VERIFICATION DATA ]</button>
      <button class="btn-seed" onclick="closeSeedModal()">[ CLOSE ]</button>
    </div>
  </div>
</div>

<!-- ══ TOURNAMENT MODAL ══ -->
<div class="tourn-modal" id="tournament-modal" onclick="closeTournamentModal(event)">
  <div class="tourn-box" onclick="event.stopPropagation()">
    <div class="tourn-title">⚔ TOURNAMENT MODE — LIVE MULTIPLAYER</div>
    <div class="tourn-tabs">
      <button class="tourn-tab active" id="tab-create" onclick="switchTournTab('create')">[ CREATE ROOM ]</button>
      <button class="tourn-tab" id="tab-join" onclick="switchTournTab('join')">[ JOIN ROOM ]</button>
    </div>
    <!-- CREATE PANEL -->
    <div id="tourn-create-panel">
      <div class="tourn-field-label">YOUR CALLSIGN</div>
      <div class="username-wrap" style="margin-bottom:14px;">
        <span class="username-prefix">></span>
        <input type="text" class="username-field" id="tourn-create-name" maxlength="20" placeholder="ENTER CALLSIGN" autocomplete="off" spellcheck="false">
      </div>
      <button class="btn-enter" onclick="tournCreate()" style="font-size:11px;padding:8px 20px;">[ CREATE ROOM ]</button>
    </div>
    <!-- JOIN PANEL -->
    <div id="tourn-join-panel" style="display:none;">
      <div class="tourn-field-label">YOUR CALLSIGN</div>
      <div class="username-wrap" style="margin-bottom:10px;">
        <span class="username-prefix">></span>
        <input type="text" class="username-field" id="tourn-join-name" maxlength="20" placeholder="ENTER CALLSIGN" autocomplete="off" spellcheck="false">
      </div>
      <div class="tourn-field-label">ROOM CODE</div>
      <div class="username-wrap" style="margin-bottom:14px;">
        <span class="username-prefix">#</span>
        <input type="text" class="username-field" id="tourn-join-code" maxlength="4" placeholder="XXXX" autocomplete="off" spellcheck="false" style="text-transform:uppercase;letter-spacing:4px;font-size:18px;" oninput="this.value=this.value.toUpperCase()">
      </div>
      <button class="btn-enter" onclick="tournJoin()" style="font-size:11px;padding:8px 20px;">[ JOIN ROOM ]</button>
    </div>
    <!-- LOBBY -->
    <div id="tourn-lobby" style="display:none;">
      <div class="tourn-code-display">
        ROOM CODE: <span class="tourn-code" id="tourn-code-display">----</span>
        <button class="btn-seed" onclick="copyTournCode()" style="font-size:9px;padding:2px 8px;margin-left:8px;" id="tourn-copy-btn">[ COPY ]</button>
      </div>
      <div class="tourn-settings">20 SPINS &middot; $500 START BALANCE &middot; MAX 8 AGENTS</div>
      <div class="tourn-lobby-title">// CONNECTED AGENTS</div>
      <div class="tourn-player-list" id="tourn-player-list"><div style="color:#442200;font-size:10px;letter-spacing:1px;">LOADING...</div></div>
      <div id="tourn-host-controls" style="display:none;margin-top:12px;text-align:center;">
        <button class="btn-enter" id="tourn-start-btn" onclick="tournStart()" style="font-size:11px;padding:8px 20px;">[ START TOURNAMENT ]</button>
        <div style="font-size:9px;color:#664422;margin-top:6px;letter-spacing:2px;">AS HOST — YOU CONTROL THE START</div>
      </div>
      <div id="tourn-waiting-msg" style="display:none;font-size:10px;color:#664422;letter-spacing:2px;margin-top:12px;text-align:center;">WAITING FOR HOST TO START...</div>
    </div>
    <!-- Countdown display -->
    <div id="tourn-countdown" style="display:none;" class="tourn-countdown"></div>
    <div class="tourn-msg-el" id="tourn-msg"></div>
    <button class="btn-leaderboard" onclick="closeTournamentModal()" style="margin-top:14px;font-size:10px;display:block;margin-left:auto;margin-right:auto;">[ CLOSE ]</button>
  </div>
</div>

<!-- ══ TOURNAMENT FINAL RESULTS OVERLAY ══ -->
<div class="tourn-results-overlay" id="tournament-results-overlay">
  <div class="tourn-results-box">
    <div class="tourn-results-title">⚔ TOURNAMENT COMPLETE</div>
    <div class="tourn-results-sub" id="tourn-results-sub">FINAL STANDINGS</div>
    <div id="tournament-final-list" style="margin:16px 0;"></div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:16px;">
      <button class="btn-restart" onclick="closeTournamentResults()">[ RETURN TO LOBBY ]</button>
      <button class="btn-leaderboard" onclick="copyTournResults()">[ COPY RESULTS ]</button>
    </div>
  </div>
</div>

<!-- ══ LEADERBOARD SCREEN ══ -->
<div id="leaderboard-screen" class="screen">
  <div style="max-width:860px; margin:0 auto; padding:20px;">
    <div class="lb-header">
      <span>// TERMINAL ROULETTE — GLOBAL RECORDS</span>
      <button class="btn-leaderboard" id="lb-back-btn" onclick="leaderboardGoBack()" style="margin-top:0; padding:4px 14px; font-size:10px;">[ ← BACK ]</button>
    </div>
    <div class="lb-tabs">
      <button class="lb-tab active" id="lb-tab-global" onclick="switchLbTab('global')">ALL TIME</button>
      <button class="lb-tab daily-tab" id="lb-tab-daily" onclick="switchLbTab('daily')">★ DAILY CHALLENGE</button>
    </div>
    <div class="lb-title-text" id="lb-main-title">⬛ ALL-TIME LEADERBOARD ⬛</div>
    <div class="lb-subtitle" id="lb-main-subtitle">RANKED BY NET PROFIT/LOSS — TOP 20 AGENTS</div>
    <div id="lb-body">
      <div class="lb-loading">FETCHING RECORDS...</div>
    </div>
    <div class="lb-actions">
      <button class="btn-leaderboard" onclick="refreshCurrentLbTab()" style="margin-top:0;">[ ↺ REFRESH ]</button>
    </div>
  </div>
</div>

<script>
  // ── CONSTANTS ──
  const WHEEL_NUMBERS = [0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26];
  const RED_NUMS = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

  // ── TOURNAMENT STATE ──
  let tournamentMode = false;
  let tournamentCode = '';
  let tournamentIsHost = false;
  let tournamentMaxSpins = 20;
  let tournamentStartBalance = 500;
  let tournamentSSE = null;
  let tournamentPlayers = [];
  let tournamentMyName = '';
  let tournamentAllDone = false;

  // ── STATE ──
  let balance = 1000;
  let totalSpins = 0;
  let wins = 0;
  let selectedBetType = null;
  let selectedNumber = null;
  let spinning = false;
  let balanceHistory = [1000];
  let lastResults = [];
  let numFrequency = {};
  let currentStreak = 0;
  let bestWin = 0;
  let soundEnabled = true;
  let audioCtx = null;

  // ── STRATEGY STATE ──
  let strategyMode = 'manual';
  let martingaleCurrentBet = 10;
  const FIB = [1,1,2,3,5,8,13,21,34,55,89,144,233,377];
  let fibIndex = 0;
  let dalembertLevel = 0;
  let paroliStreak = 0;

  // ── AUTO-SPIN STATE ──
  let autoSpinRunning = false;
  let autoSpinRemaining = 0;

  // ── LAST BET (repeat) ──
  let lastBetType = null;
  let lastBetNumber = null;
  let lastBetWager = 0;

  // ── PLAYER / LEADERBOARD ──
  let playerName = 'ANON';
  let leaderboardFrom = 'welcome';
  let scoreSubmitted = false;
  let spinLog = [];
  let currentLbTab = 'global';

  // ── DAILY CHALLENGE ──
  let isDailyChallenge = false;
  let dailyDate = '';
  let dailySequence = [];
  let dailySpinIndex = 0;
  const DAILY_SPINS = 50;
  let personalBest = null;

  // ── CHALLENGE MODE ──
  let challengeConfig = null;

  // ── ACHIEVEMENTS ──
  let earnedAchievements = new Set();
  const ACHIEVEMENTS = [
    { id:'ZERO_HUNTER',   label:'ZERO HUNTER',   desc:'Land on 0' },
    { id:'ZERO_TWICE',    label:'ZERO TWICE',    desc:'Land on 0 two times' },
    { id:'HIGH_ROLLER',   label:'HIGH ROLLER',   desc:'Place a bet of $500 or more' },
    { id:'HOT_STREAK',    label:'HOT STREAK',    desc:'Win 5 in a row' },
    { id:'COLD_STREAK',   label:'COLD STREAK',   desc:'Lose 5 in a row' },
    { id:'COMEBACK_KID',  label:'COMEBACK KID',  desc:'Drop below $300 then reach $1500' },
    { id:'JACKPOT',       label:'JACKPOT',       desc:'Win $1000+ in a single spin' },
    { id:'CENTURION',     label:'CENTURION',     desc:'Complete 100 spins' },
    { id:'LUCKY_7',       label:'LUCKY 7',       desc:'Land on number 7' },
    { id:'LAST_STAND',    label:'LAST STAND',    desc:'Win with balance under $20' },
  ];
  let wentBroke = false;
  let zeroCount = 0;

  // ── RIVAL ──
  let rivalName = '';
  let rivalBest = null;

  // ── SESSION TIMER ──
  let sessionStart = null;
  let timerInterval = null;

  // ── GLITCH ──
  let glitchManual = false;

  // ── SYSTEM MESSAGES ──
  let sysMessages = [];
  let idleTimer = null;
  const IDLE_MSG = [
    'OPERATOR INACTIVITY DETECTED — PLACE A BET TO CONTINUE',
    'ANOMALY ALERT — EXTENDED PAUSE IN TRANSACTION SEQUENCE',
    'SYSTEM WARNING — NO INPUT REGISTERED IN 30 SECONDS',
    'MONITORING ACTIVE — AWAITING NEXT BET INSTRUCTION',
  ];
  const ZERO_MSG = [
    'ANOMALY DETECTED — ZERO POCKET REGISTERED — HOUSE COLLECTS ALL',
    'CRITICAL EVENT — NUMBER 00 — ALL OUTSIDE BETS VOIDED',
    'ZERO PROBABILITY MATERIALIZED — STATISTICALLY IMPROBABLE',
  ];
  const BIG_WIN_MSG = [
    'SIGNIFICANT CREDIT TRANSFER DETECTED — BALANCE SURGE LOGGED',
    'POSITIVE VARIANCE EVENT — ABOVE-THRESHOLD PAYOUT RECORDED',
    'TRANSACTION ALERT — LARGE CREDIT DEPOSIT FROM WHEEL RESULT',
  ];
  const LOW_BAL_MSG = [
    'WARNING — BANKROLL APPROACHING CRITICAL THRESHOLD',
    'ALERT — BALANCE DEPLETING RAPIDLY — CONSIDER POSITION REDUCTION',
    'RISK MONITOR — DANGEROUS EXPOSURE LEVEL DETECTED',
  ];

  function getColorName(n) {
    if (n === 0) return 'ZERO';
    return RED_NUMS.has(n) ? 'RED' : 'BLACK';
  }

  // ── AUDIO ──
  function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
  }

  function playTick() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.value = 480 + Math.random() * 120;
      osc.type = 'square';
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);
      osc.start(); osc.stop(ctx.currentTime + 0.04);
    } catch(e) {}
  }

  function playWin() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      [523, 659, 784].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain); gain.connect(ctx.destination);
        osc.frequency.value = freq;
        osc.type = 'sine';
        const t = ctx.currentTime + i * 0.12;
        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
        osc.start(t); osc.stop(t + 0.25);
      });
    } catch(e) {}
  }

  function playLoss() {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.frequency.value = 180;
      osc.type = 'sawtooth';
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(); osc.stop(ctx.currentTime + 0.35);
    } catch(e) {}
  }

  function toggleSound() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('sound-toggle');
    btn.classList.toggle('on', soundEnabled);
    btn.textContent = soundEnabled ? '♩ SFX' : '✕ SFX';
  }

  // ── ACHIEVEMENTS ──
  function unlockAchievement(id) {
    if (earnedAchievements.has(id)) return;
    earnedAchievements.add(id);
    const def = ACHIEVEMENTS.find(a => a.id === id);
    if (!def) return;
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = '<div class="achievement-label">★ ACHIEVEMENT UNLOCKED</div>' + def.label + '<br><span style="font-size:9px;color:var(--dim);filter:brightness(2)">' + def.desc + '</span>';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3100);
  }

  function checkAchievements(resultNum, isWin, payout, wager) {
    if (resultNum === 0) { zeroCount++; unlockAchievement('ZERO_HUNTER'); if (zeroCount >= 2) unlockAchievement('ZERO_TWICE'); }
    if (resultNum === 7) unlockAchievement('LUCKY_7');
    if (wager >= 500) unlockAchievement('HIGH_ROLLER');
    if (currentStreak >= 5) unlockAchievement('HOT_STREAK');
    if (currentStreak <= -5) unlockAchievement('COLD_STREAK');
    if (isWin && payout >= 1000) unlockAchievement('JACKPOT');
    if (totalSpins >= 100) unlockAchievement('CENTURION');
    if (balance < 300) wentBroke = true;
    if (wentBroke && balance >= 1500) unlockAchievement('COMEBACK_KID');
    if (isWin && (balance - payout) < 20) unlockAchievement('LAST_STAND');
  }

  // ── GLITCH EVENTS ──
  function maybeGlitch() {
    if (glitchManual) return;
    if (Math.random() < 0.03) triggerGlitch();
  }

  function triggerGlitch() {
    document.body.classList.add('glitching');
    pushSysMsg('DISPLAY CORRUPTION DETECTED — RECALIBRATING TERMINAL...');
    setTimeout(() => document.body.classList.remove('glitching'), 700);
  }

  // ── SYSTEM MESSAGES ──
  function pushSysMsg(text) {
    sysMessages.push(text);
    if (sysMessages.length > 4) sysMessages.shift();
    const feed = document.getElementById('sysmsg-feed');
    if (!feed) return;
    feed.innerHTML = sysMessages.map(m =>
      '<div class="sysmsg-line">' + m + '</div>'
    ).join('') + '<span class="sysmsg-cursor"></span>';
  }

  function reactiveMsg(resultNum, isWin, payout, wager) {
    resetIdleTimer();
    if (resultNum === 0) { pushSysMsg(ZERO_MSG[Math.floor(Math.random()*ZERO_MSG.length)]); return; }
    if (isWin && payout >= 500) { pushSysMsg(BIG_WIN_MSG[Math.floor(Math.random()*BIG_WIN_MSG.length)]); return; }
    if (balance < 100) { pushSysMsg(LOW_BAL_MSG[Math.floor(Math.random()*LOW_BAL_MSG.length)]); return; }
    if (currentStreak >= 4) { pushSysMsg('CONSECUTIVE WIN SEQUENCE IN PROGRESS — STREAK: ' + currentStreak); return; }
    if (currentStreak <= -4) { pushSysMsg('CONSECUTIVE LOSS SEQUENCE DETECTED — EVALUATE STRATEGY'); return; }
  }

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      pushSysMsg(IDLE_MSG[Math.floor(Math.random()*IDLE_MSG.length)]);
    }, 30000);
  }

  // ── SESSION TIMER ──
  function startSessionTimer() {
    sessionStart = Date.now();
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      const el = document.getElementById('session-timer');
      if (!el) return;
      const secs = Math.floor((Date.now() - sessionStart) / 1000);
      const m = String(Math.floor(secs / 60)).padStart(2, '0');
      const s = String(secs % 60).padStart(2, '0');
      el.textContent = m + ':' + s;
    }, 1000);
  }

  function getSessionDuration() {
    if (!sessionStart) return '00:00';
    const secs = Math.floor((Date.now() - sessionStart) / 1000);
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return m + ':' + s;
  }

  // ── SPIN HISTORY TIMELINE ──
  function updateTimeline(resultNum) {
    const track = document.getElementById('timeline-track');
    if (!track) return;
    if (track.querySelector('span')) track.innerHTML = '';
    const color = resultNum === 0 ? 'tl-zero' : (RED_NUMS.has(resultNum) ? 'tl-red' : 'tl-black');
    const block = document.createElement('div');
    block.className = 'tl-block ' + color;
    block.title = resultNum + ' (' + getColorName(resultNum) + ')';
    track.appendChild(block);
  }

  // ── KEYBOARD SHORTCUTS ──
  function toggleShortcuts() {
    const el = document.getElementById('shortcuts-overlay');
    if (el) el.classList.toggle('visible');
  }

  document.addEventListener('keydown', function(e) {
    const tag = (document.activeElement || {}).tagName;
    if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
    if (e.key === 'Escape') {
      document.getElementById('shortcuts-overlay').classList.remove('visible');
      closeSeedModal();
    }
    if (e.key === '?') { e.preventDefault(); toggleShortcuts(); return; }
    if (e.key === 'g' || e.key === 'G') { triggerGlitch(); return; }
    if (e.key === 's' || e.key === 'S') { document.getElementById('strategy-select') && document.getElementById('strategy-select').focus(); return; }
    const betPresets = { '1': 10, '2': 25, '3': 50, '4': 100, '5': 250 };
    if (betPresets[e.key]) {
      const inp = document.getElementById('wager-input');
      if (inp) { inp.value = betPresets[e.key]; inp.dispatchEvent(new Event('input')); }
    }
  });

  // ── SHAREABLE RESULT CARD ──
  function generateShareCard() {
    const netPnl = balance - (challengeConfig ? challengeConfig.startBalance : 1000);
    const pnlStr = (netPnl >= 0 ? '+$' : '-$') + Math.abs(netPnl);
    const wr = totalSpins > 0 ? ((wins / totalSpins) * 100).toFixed(1) : '0.0';
    const mode = challengeConfig ? challengeConfig.name : (isDailyChallenge ? 'DAILY CHALLENGE' : 'STANDARD');
    const dur = getSessionDuration();
    const date = new Date().toISOString().slice(0, 10);
    return [
      '╔══════════════════════════════════════╗',
      '║     TERMINAL ROULETTE — RESULT       ║',
      '╠══════════════════════════════════════╣',
      '║  AGENT   : ' + (playerName + '                        ').slice(0, 26) + '║',
      '║  MODE    : ' + (mode + '                        ').slice(0, 26) + '║',
      '║  DATE    : ' + date + '                   ║',
      '╠══════════════════════════════════════╣',
      '║  BALANCE : $' + (String(balance) + '                       ').slice(0, 25) + '║',
      '║  NET P&L : ' + (pnlStr + '                        ').slice(0, 26) + '║',
      '║  SPINS   : ' + (String(totalSpins) + '                        ').slice(0, 26) + '║',
      '║  WIN RATE: ' + (wr + '%                       ').slice(0, 26) + '║',
      '║  BEST WIN: +$' + (String(bestWin) + '                      ').slice(0, 24) + '║',
      '║  SESSION : ' + (dur + '                        ').slice(0, 26) + '║',
      earnedAchievements.size > 0
        ? '╠══════════════════════════════════════╣'
        : null,
      earnedAchievements.size > 0
        ? '║  ACHIEVEMENTS: ' + ([...earnedAchievements].join(', ') + '             ').slice(0, 22) + '║'
        : null,
      '╚══════════════════════════════════════╝',
      'Played at: ' + window.location.href,
    ].filter(Boolean).join('\n');
  }

  async function copyShareCard() {
    try {
      await navigator.clipboard.writeText(generateShareCard());
      const el = document.getElementById('share-card-msg');
      if (el) { el.textContent = '✓ RESULT CARD COPIED TO CLIPBOARD'; setTimeout(() => { el.textContent = ''; }, 3000); }
    } catch(e) {
      const el = document.getElementById('share-card-msg');
      if (el) el.textContent = 'CLIPBOARD NOT AVAILABLE — USE BROWSER COPY';
    }
  }

  // ── SEED VIEWER ──
  function showSeedModal() {
    if (!isDailyChallenge) return;
    document.getElementById('sv-date').textContent = dailyDate;
    document.getElementById('sv-seed').textContent = '0x' + dateToSeed(dailyDate).toString(16).toUpperCase().padStart(8, '0');
    const seqEl = document.getElementById('sv-sequence');
    seqEl.innerHTML = '';
    const preview = dailySequence.slice(0, 10);
    preview.forEach((idx, i) => {
      const n = WHEEL_NUMBERS[idx];
      const span = document.createElement('span');
      span.className = 'seed-num';
      span.textContent = '#' + (i + 1) + ':' + n;
      seqEl.appendChild(span);
    });
    document.getElementById('seed-modal').classList.add('visible');
  }

  function closeSeedModal() {
    document.getElementById('seed-modal').classList.remove('visible');
  }

  async function copySeedInfo() {
    const text = 'TERMINAL ROULETTE — DAILY SEED VERIFICATION\n' +
      'Date: ' + dailyDate + '\n' +
      'FNV Seed: 0x' + dateToSeed(dailyDate).toString(16).toUpperCase() + '\n' +
      'Algorithm: Mulberry32\n' +
      'First 10 results: ' + dailySequence.slice(0, 10).map((i, n) => '#' + (n+1) + ':' + WHEEL_NUMBERS[i]).join(', ');
    try { await navigator.clipboard.writeText(text); } catch(e) {}
  }

  // ── RIVAL ──
  async function fetchRivalBest(name) {
    if (!name) return;
    try {
      const res = await fetch('/api/personal-best?name=' + encodeURIComponent(name.toUpperCase()));
      const data = await res.json();
      if (data.dailyBest !== null) {
        rivalBest = data.dailyBest;
        updateRivalBar();
      }
    } catch(e) {}
  }

  function updateRivalBar() {
    const bar = document.getElementById('rival-bar');
    if (!bar || !rivalName || rivalBest === null) return;
    const delta = balance - rivalBest;
    const sign = delta >= 0 ? '+' : '';
    const cls = delta >= 0 ? 'rival-ahead' : 'rival-behind';
    bar.className = 'rival-bar visible';
    bar.innerHTML = '⚔ RIVAL: <strong>' + rivalName + '</strong> — PB: $' + rivalBest +
      ' — YOU: <span class="' + cls + '">' + sign + '$' + delta + ' ' +
      (delta >= 0 ? '▲ AHEAD' : '▼ BEHIND') + '</span>';
  }

  // ── PERSONAL BEST ──
  // ── TOURNAMENT FUNCTIONS ──

  function openTournamentModal() {
    document.getElementById('tournament-modal').classList.add('active');
    switchTournTab('create');
  }

  function closeTournamentModal(e) {
    if (e && e.target && e.target.id !== 'tournament-modal') return;
    document.getElementById('tournament-modal').classList.remove('active');
  }

  function switchTournTab(tab) {
    document.getElementById('tab-create').classList.toggle('active', tab === 'create');
    document.getElementById('tab-join').classList.toggle('active', tab === 'join');
    document.getElementById('tourn-create-panel').style.display = tab === 'create' ? '' : 'none';
    document.getElementById('tourn-join-panel').style.display = tab === 'join' ? '' : 'none';
    document.getElementById('tourn-lobby').style.display = 'none';
    document.getElementById('tourn-countdown').style.display = 'none';
    document.getElementById('tourn-msg').textContent = '';
    document.getElementById('tourn-msg').style.color = '#cc4422';
  }

  function setTournMsg(msg, isGood) {
    const el = document.getElementById('tourn-msg');
    el.textContent = msg;
    el.style.color = isGood ? '#ffcc66' : '#cc4422';
  }

  async function tournCreate() {
    const name = (document.getElementById('tourn-create-name').value || '').trim().toUpperCase() || 'ANON';
    setTournMsg('CREATING ROOM...', true);
    try {
      const r = await fetch('/api/tournament/create', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ playerName: name })
      });
      const data = await r.json();
      if (!data.ok) { setTournMsg(data.error || 'ERROR', false); return; }
      tournamentMyName = name;
      tournamentCode = data.code;
      tournamentIsHost = true;
      tournamentMaxSpins = data.maxSpins;
      tournamentStartBalance = data.startBalance;
      showTournLobby(data.code, true);
      connectTournSSE(data.code, name);
    } catch { setTournMsg('CONNECTION ERROR', false); }
  }

  async function tournJoin() {
    const name = (document.getElementById('tourn-join-name').value || '').trim().toUpperCase() || 'ANON';
    const code = (document.getElementById('tourn-join-code').value || '').trim().toUpperCase();
    if (!code || code.length !== 4) { setTournMsg('ENTER 4-CHARACTER ROOM CODE', false); return; }
    setTournMsg('JOINING ROOM ' + code + '...', true);
    try {
      const r = await fetch('/api/tournament/join', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ playerName: name, code })
      });
      const data = await r.json();
      if (!r.ok) { setTournMsg(data.error || 'ERROR', false); return; }
      tournamentMyName = name;
      tournamentCode = data.code;
      tournamentIsHost = false;
      tournamentMaxSpins = data.maxSpins;
      tournamentStartBalance = data.startBalance;
      showTournLobby(data.code, false);
      connectTournSSE(data.code, name);
    } catch { setTournMsg('CONNECTION ERROR', false); }
  }

  function showTournLobby(code, isHost) {
    document.getElementById('tourn-create-panel').style.display = 'none';
    document.getElementById('tourn-join-panel').style.display = 'none';
    document.getElementById('tourn-lobby').style.display = '';
    document.getElementById('tourn-code-display').textContent = code;
    document.getElementById('tourn-host-controls').style.display = isHost ? '' : 'none';
    document.getElementById('tourn-waiting-msg').style.display = isHost ? 'none' : '';
    setTournMsg('', true);
  }

  function renderTournLobby(players) {
    const list = document.getElementById('tourn-player-list');
    if (!list) return;
    list.innerHTML = players.map(p =>
      `<div class="tourn-player-row${p.isHost ? ' is-host' : ''}">
        <span>${p.isHost ? '⚑ ' : '· '}${p.name}</span>
        <span style="font-size:9px;letter-spacing:1px;">${p.isHost ? '[HOST]' : '[READY]'}</span>
      </div>`
    ).join('');
  }

  function copyTournCode() {
    navigator.clipboard.writeText(tournamentCode).catch(() => {});
    const btn = document.getElementById('tourn-copy-btn');
    if (btn) { btn.textContent = '[ COPIED ]'; setTimeout(() => { btn.textContent = '[ COPY ]'; }, 1500); }
  }

  function connectTournSSE(code, name) {
    if (tournamentSSE) { tournamentSSE.close(); tournamentSSE = null; }
    tournamentSSE = new EventSource(`/api/tournament/events/${code}?name=${encodeURIComponent(name)}`);
    tournamentSSE.onmessage = (e) => {
      try { handleSSEMessage(JSON.parse(e.data)); } catch {}
    };
    tournamentSSE.onerror = () => {};
  }

  function handleSSEMessage(msg) {
    if (msg.type === 'init' || msg.type === 'player_joined') {
      tournamentPlayers = msg.players || [];
      renderTournLobby(tournamentPlayers);

    } else if (msg.type === 'tournament_start') {
      tournamentPlayers = msg.players || [];
      // 3-2-1 countdown in modal
      const cdEl = document.getElementById('tourn-countdown');
      cdEl.style.display = '';
      setTournMsg('TOURNAMENT INITIALIZING', true);
      let count = 3;
      const tick = () => {
        if (count > 0) {
          cdEl.textContent = count;
          count--;
          setTimeout(tick, 700);
        } else {
          cdEl.textContent = 'GO!';
          setTimeout(() => {
            document.getElementById('tournament-modal').classList.remove('active');
            cdEl.style.display = 'none';
            initTournamentGame();
          }, 500);
        }
      };
      tick();

    } else if (msg.type === 'rank_update') {
      tournamentPlayers = msg.players || [];
      updateTournamentRankPanel();

    } else if (msg.type === 'tournament_over') {
      tournamentPlayers = msg.players || [];
      tournamentAllDone = true;
      updateTournamentRankPanel();
      if (document.getElementById('gameover-screen').classList.contains('active')) {
        showTournamentResults();
      }
    }
  }

  function initTournamentGame() {
    document.getElementById('username-field').value = tournamentMyName;
    tournamentMode = true;
    tournamentAllDone = false;
    initGame(false, {
      name: 'TOURNAMENT',
      startBalance: tournamentStartBalance,
      maxSpins: tournamentMaxSpins,
      desc: 'TOURNAMENT — CODE: ' + tournamentCode + ' — ' + tournamentMaxSpins + ' SPINS'
    });
    const panel = document.getElementById('tournament-rank-panel');
    panel.style.display = '';
    document.getElementById('tournament-rank-code').textContent = 'ROOM: ' + tournamentCode;
    updateTournamentRankPanel();
  }

  async function reportTournamentSpin(done) {
    if (!tournamentMode || !tournamentCode) return;
    try {
      fetch('/api/tournament/spin', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ code: tournamentCode, playerName: tournamentMyName, balance, spins: totalSpins, done: !!done })
      });
    } catch {}
  }

  function updateTournamentRankPanel() {
    const list = document.getElementById('tournament-rank-list');
    if (!list) return;
    if (!tournamentPlayers.length) return;
    const maxBal = Math.max(...tournamentPlayers.map(p => p.balance));
    list.innerHTML = tournamentPlayers.map((p, i) => {
      const isMe = p.name === tournamentMyName;
      const isLeading = p.balance === maxBal && i === 0;
      return `<div class="tourn-rank-row">
        <span class="tourn-rank-pos">#${i+1}</span>
        <span class="tourn-rank-name${isMe ? ' is-you' : ''}">${p.name}${isMe ? ' ◄' : ''}</span>
        <span class="tourn-rank-bal${isLeading ? ' leading' : ''}">$${p.balance}</span>
        <span class="tourn-rank-status">${p.done ? '✓ DONE' : p.spins + '/' + tournamentMaxSpins}</span>
      </div>`;
    }).join('');
  }

  function showTournamentResults() {
    const overlay = document.getElementById('tournament-results-overlay');
    const list = document.getElementById('tournament-final-list');
    const medals = ['🥇', '🥈', '🥉'];
    const myPos = tournamentPlayers.findIndex(p => p.name === tournamentMyName) + 1;
    document.getElementById('tourn-results-sub').textContent =
      myPos ? 'YOUR FINAL RANK: #' + myPos + ' OF ' + tournamentPlayers.length : 'FINAL STANDINGS';
    list.innerHTML = tournamentPlayers.map((p, i) => {
      const isMe = p.name === tournamentMyName;
      const medal = medals[i] || ('#' + (i + 1));
      const pnl = p.balance - tournamentStartBalance;
      return `<div class="tourn-result-row">
        <span class="tourn-result-medal">${medal}</span>
        <span class="tourn-result-name${isMe ? ' is-you' : ''}">${p.name}${isMe ? ' ◄ YOU' : ''}</span>
        <span class="tourn-result-bal">$${p.balance}</span>
        <span class="tourn-result-spins" style="color:${pnl>=0?'#33aa33':'#aa3322'}">${pnl>=0?'+':''}\$${pnl}</span>
      </div>`;
    }).join('');
    overlay.classList.add('active');
  }

  function copyTournResults() {
    const lines = ['⚔ TERMINAL ROULETTE — TOURNAMENT RESULTS', '========================', ''];
    tournamentPlayers.forEach((p, i) => {
      const medals = ['🥇','🥈','🥉'];
      const pnl = p.balance - tournamentStartBalance;
      lines.push((medals[i] || ('#' + (i+1))) + ' ' + p.name + ' — $' + p.balance + ' (' + (pnl>=0?'+':'') + '$' + pnl + ')');
    });
    lines.push('', 'ROOM: ' + tournamentCode + ' · ' + tournamentMaxSpins + ' SPINS · $' + tournamentStartBalance + ' START');
    navigator.clipboard.writeText(lines.join('\n')).catch(() => {});
  }

  function closeTournamentResults() {
    document.getElementById('tournament-results-overlay').classList.remove('active');
    if (tournamentSSE) { tournamentSSE.close(); tournamentSSE = null; }
    tournamentMode = false; tournamentCode = ''; tournamentPlayers = [];
    restartGame();
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
  }

  async function tournStart() {
    const btn = document.getElementById('tourn-start-btn');
    btn.disabled = true; btn.textContent = '[ STARTING... ]';
    try {
      const r = await fetch('/api/tournament/start', {
        method: 'POST', headers: {'Content-Type':'application/json'},
        body: JSON.stringify({ code: tournamentCode, playerName: tournamentMyName })
      });
      const data = await r.json();
      if (!data.ok) {
        setTournMsg(data.error || 'ERROR', false);
        btn.disabled = false; btn.textContent = '[ START TOURNAMENT ]';
      }
      // SSE 'tournament_start' triggers actual game start
    } catch {
      setTournMsg('CONNECTION ERROR', false);
      btn.disabled = false; btn.textContent = '[ START TOURNAMENT ]';
    }
  }

  async function fetchPersonalBest(name) {
    try {
      const res = await fetch('/api/personal-best?name=' + encodeURIComponent(name));
      const data = await res.json();
      if (data.dailyBest !== null) {
        personalBest = data.dailyBest;
        document.getElementById('pb-cell').style.display = '';
        document.getElementById('stat-pb').textContent = '$' + personalBest;
      }
    } catch(e) { /* silent */ }
  }

  // ── DAILY CHALLENGE ENGINE ──
  function dateToSeed(str) {
    let h = 0x811c9dc5;
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h || 1;
  }

  function mulberry32(a) {
    return function() {
      a |= 0; a = a + 0x6D2B79F5 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }

  function generateDailySequence(dateStr, count) {
    const rng = mulberry32(dateToSeed(dateStr));
    const seq = [];
    for (let i = 0; i < count; i++) seq.push(Math.floor(rng() * WHEEL_NUMBERS.length));
    return seq;
  }

  function updateDailyHeader() {
    const badge = document.getElementById('daily-header-badge');
    const counter = document.getElementById('daily-spin-counter-header');
    if (isDailyChallenge) {
      badge.innerHTML = ' <span class="daily-badge">★ DAILY ' + dailyDate + '</span>';
      const rem = DAILY_SPINS - dailySpinIndex;
      counter.style.display = 'inline-block';
      counter.textContent = rem > 0 ? 'SPIN ' + dailySpinIndex + '/' + DAILY_SPINS : 'COMPLETE';
    } else {
      badge.innerHTML = '';
      counter.style.display = 'none';
    }
  }

  // ── LEADERBOARD TABS ──
  function switchLbTab(tab) {
    currentLbTab = tab;
    document.getElementById('lb-tab-global').classList.toggle('active', tab === 'global');
    document.getElementById('lb-tab-daily').classList.toggle('active', tab === 'daily');
    if (tab === 'global') {
      document.getElementById('lb-main-title').textContent = '⬛ ALL-TIME LEADERBOARD ⬛';
      document.getElementById('lb-main-subtitle').textContent = 'RANKED BY NET PROFIT/LOSS — TOP 20 AGENTS';
      loadLeaderboard();
    } else {
      const today = new Date().toISOString().slice(0, 10);
      document.getElementById('lb-main-title').textContent = '★ DAILY CHALLENGE — ' + today;
      document.getElementById('lb-main-subtitle').textContent = 'SAME WHEEL SEQUENCE — RANKED BY FINAL BALANCE';
      loadDailyLeaderboard();
    }
  }

  function refreshCurrentLbTab() { switchLbTab(currentLbTab); }

  async function loadDailyLeaderboard() {
    const body = document.getElementById('lb-body');
    body.innerHTML = '<div class="lb-loading">FETCHING TODAY\'S RECORDS...</div>';
    const today = new Date().toISOString().slice(0, 10);
    try {
      const res = await fetch('/api/daily-leaderboard?date=' + today);
      const data = await res.json();
      if (!data.length) {
        body.innerHTML = '<div class="lb-empty">NO ENTRIES YET — PLAY THE DAILY CHALLENGE!</div>';
        return;
      }
      const rankClass = ['lb-gold','lb-silver','lb-bronze'];
      let html = '<table class="lb-table"><thead><tr>' +
        '<th>RANK</th><th>AGENT</th><th>STREAK</th><th>BALANCE</th><th>NET P&L</th>' +
        '<th>SPINS</th><th>WIN RATE</th><th>BEST WIN</th>' +
        '</tr></thead><tbody>';
      data.forEach((row, i) => {
        const rc = i < 3 ? rankClass[i] : '';
        const rank = i < 3 ? ['#1','#2','#3'][i] : '#' + (i + 1);
        const pnl = row.netPnl >= 0 ? '+$' + row.netPnl : '-$' + Math.abs(row.netPnl);
        const pnlClass = row.netPnl >= 0 ? 'lb-pos' : 'lb-neg';
        const streak = row.streak || 1;
        const streakClass = streak >= 7 ? 'max' : '';
        const streakHtml = streak > 1
          ? `<span class="streak-badge ${streakClass}">🔥${streak}d</span>`
          : '<span style="color:var(--very-dim)">—</span>';
        const isMe = playerName && row.name === playerName;
        html += `<tr class="${rc}${isMe ? ' lb-me' : ''}">
          <td class="lb-rank">${rank}</td>
          <td class="lb-name">${row.name}${isMe ? ' ◀' : ''}</td>
          <td style="text-align:center">${streakHtml}</td>
          <td>$${row.balance}</td>
          <td class="${pnlClass}">${pnl}</td>
          <td>${row.spins}</td>
          <td>${Number(row.winRate).toFixed(1)}%</td>
          <td>${row.bestWin > 0 ? '+$' + row.bestWin : '--'}</td>
        </tr>`;
      });
      html += '</tbody></table>';
      body.innerHTML = html;
    } catch(e) {
      body.innerHTML = '<div class="lb-empty">ERROR LOADING RECORDS</div>';
    }
  }

  // ── LEADERBOARD & SCORE ──
  function showLeaderboard(from) {
    leaderboardFrom = from || 'welcome';
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById('leaderboard-screen').classList.add('active');
    loadLeaderboard();
  }

  function leaderboardGoBack() {
    document.getElementById('leaderboard-screen').classList.remove('active');
    if (leaderboardFrom === 'gameover') {
      document.getElementById('gameover-screen').classList.add('active');
    } else {
      document.getElementById('welcome-screen').classList.add('active');
    }
  }

  async function loadLeaderboard() {
    const body = document.getElementById('lb-body');
    body.innerHTML = '<div class="lb-loading">FETCHING RECORDS...</div>';
    try {
      const res = await fetch('/api/leaderboard');
      const data = await res.json();
      if (!data.length) {
        body.innerHTML = '<div class="lb-empty">NO RECORDS YET — BE THE FIRST!</div>';
        return;
      }
      const rankClass = ['lb-gold','lb-silver','lb-bronze'];
      const medals = ['#1','#2','#3'];
      let html = '<table class="lb-table"><thead><tr>' +
        '<th>RANK</th><th>AGENT</th><th>NET P&L</th><th>BALANCE</th>' +
        '<th>SPINS</th><th>WIN RATE</th><th>BEST WIN</th><th>DATE</th>' +
        '</tr></thead><tbody>';
      data.forEach((row, i) => {
        const rc = i < 3 ? rankClass[i] : '';
        const rank = i < 3 ? medals[i] : '#' + (i + 1);
        const pnl = row.netPnl >= 0 ? '+$' + row.netPnl : '-$' + Math.abs(row.netPnl);
        const pnlClass = row.netPnl >= 0 ? 'lb-pos' : 'lb-neg';
        const isMe = playerName && row.name === playerName;
        html += `<tr class="${rc}${isMe ? ' lb-me' : ''}">
          <td class="lb-rank">${rank}</td>
          <td class="lb-name">${row.name}${isMe ? ' ◀' : ''}</td>
          <td class="${pnlClass}">${pnl}</td>
          <td>$${row.balance}</td>
          <td>${row.spins}</td>
          <td>${Number(row.winRate).toFixed(1)}%</td>
          <td>${row.bestWin > 0 ? '+$' + row.bestWin : '--'}</td>
          <td style="color:var(--dim);font-size:10px;">${row.date || '--'}</td>
        </tr>`;
      });
      html += '</tbody></table>';
      body.innerHTML = html;
    } catch(e) {
      body.innerHTML = '<div class="lb-empty">ERROR LOADING RECORDS</div>';
    }
  }

  async function submitScore() {
    const nameField = document.getElementById('go-username-field');
    const name = (nameField.value.trim() || playerName || 'ANON').toUpperCase().slice(0, 20);
    const btn = document.getElementById('submit-score-btn');
    const resultEl = document.getElementById('submit-result');

    if (totalSpins === 0) {
      resultEl.textContent = 'NO SPINS RECORDED — PLAY FIRST';
      resultEl.style.color = '#cc4422';
      return;
    }

    btn.disabled = true;
    resultEl.textContent = 'TRANSMITTING...';
    resultEl.style.color = 'var(--dim)';

    try {
      const payload = {
        name,
        balance,
        netPnl: balance - 1000,
        spins: totalSpins,
        wins,
        winRate: totalSpins > 0 ? parseFloat(((wins / totalSpins) * 100).toFixed(1)) : 0,
        bestWin,
        ...(isDailyChallenge ? { challengeDate: dailyDate } : {})
      };
      const res = await fetch('/api/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.ok) {
        scoreSubmitted = true;
        let msg = '✓ SCORE RECORDED — RANKED #' + data.rank;
        if (isDailyChallenge && data.streak > 1) {
          const fire = data.streak >= 7 ? '🔥🔥' : '🔥';
          msg += ' — ' + fire + ' ' + data.streak + '-DAY STREAK!';
        }
        resultEl.textContent = msg;
        resultEl.style.color = 'var(--bright)';
        btn.textContent = '[ SUBMITTED ]';
      } else {
        throw new Error('Server error');
      }
    } catch(e) {
      resultEl.textContent = 'TRANSMISSION ERROR — TRY AGAIN';
      resultEl.style.color = '#cc4422';
      btn.disabled = false;
    }
  }

  // ── CSV EXPORT ──
  function exportCSV() {
    if (!spinLog.length) { alert('NO SPINS TO EXPORT'); return; }
    const name = playerName || 'ANON';
    let csv = 'SPIN,NUMBER,COLOR,RESULT,PAYOUT,WAGER,BALANCE\r\n';
    spinLog.forEach(r => {
      csv += `${r.spin},${r.num},${r.color},${r.win ? 'WIN' : 'LOSS'},${r.win ? '+$' + r.payout : '-$' + r.wager},$${r.wager},$${r.balance}\r\n`;
    });
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'terminal-roulette-' + name.replace(/\s+/g,'_') + '-' + new Date().toISOString().slice(0,10) + '.csv';
    a.click();
    URL.revokeObjectURL(url);
  }

  // ── ODDS DISPLAY ──
  function updateOddsDisplay() {
    const probEl = document.getElementById('odds-prob');
    const edgeEl = document.getElementById('odds-edge');
    const evEl   = document.getElementById('odds-ev');
    if (!selectedBetType) {
      probEl.textContent = '--'; edgeEl.textContent = '--'; evEl.textContent = '--';
      evEl.className = '';
      return;
    }
    let winCount = 0, payout = 0;
    if (selectedBetType === 'number') { winCount = 1; payout = 35; }
    else if (['red','black','even','odd','low','high'].includes(selectedBetType)) { winCount = 18; payout = 1; }
    else { winCount = 12; payout = 2; }
    const prob = winCount / 37;
    const ev   = prob * payout - (1 - prob);
    probEl.textContent = (prob * 100).toFixed(2) + '%  (' + winCount + '/37)';
    edgeEl.textContent = (-ev * 100).toFixed(2) + '%';
    const evPer100 = (ev * 100).toFixed(2);
    evEl.textContent = (ev >= 0 ? '+' : '') + '$' + evPer100;
    evEl.className = ev >= 0 ? 'ev-pos' : 'ev-neg';
  }

  // ── STRATEGY ENGINE ──
  function getStrategyBase() { return Math.max(1, parseInt(document.getElementById('strategy-base').value) || 10); }
  function getStrategyMax()  { return Math.max(1, parseInt(document.getElementById('strategy-maxbet').value) || 500); }

  function computeStrategyBet() {
    const base = getStrategyBase(), maxBet = getStrategyMax();
    let bet = base;
    if (strategyMode === 'martingale') {
      bet = Math.min(martingaleCurrentBet, maxBet, balance);
    } else if (strategyMode === 'fibonacci') {
      bet = Math.min(base * FIB[Math.min(fibIndex, FIB.length - 1)], maxBet, balance);
    } else if (strategyMode === 'dalembert') {
      bet = Math.min(base * (1 + dalembertLevel), maxBet, balance);
    } else if (strategyMode === 'paroli') {
      bet = Math.min(base * Math.pow(2, paroliStreak), maxBet, balance);
    }
    return Math.max(1, Math.floor(Math.min(bet, balance)));
  }

  function applyStrategyBet() {
    if (strategyMode === 'manual') return;
    document.getElementById('wager-input').value = computeStrategyBet();
    updateSpinBtn();
  }

  function updateStrategyAfterResult(isWin) {
    const base = getStrategyBase(), maxBet = getStrategyMax();
    if (strategyMode === 'martingale') {
      martingaleCurrentBet = isWin ? base : Math.min(martingaleCurrentBet * 2, maxBet);
    } else if (strategyMode === 'fibonacci') {
      fibIndex = isWin ? Math.max(0, fibIndex - 2) : Math.min(fibIndex + 1, FIB.length - 1);
    } else if (strategyMode === 'dalembert') {
      dalembertLevel = isWin ? Math.max(0, dalembertLevel - 1) : dalembertLevel + 1;
    } else if (strategyMode === 'paroli') {
      if (isWin) { paroliStreak = paroliStreak >= 2 ? 0 : paroliStreak + 1; }
      else { paroliStreak = 0; }
    }
  }

  function updateStrategyStatus() {
    if (strategyMode === 'manual') return;
    const base = getStrategyBase(), maxBet = getStrategyMax();
    const nextBet = computeStrategyBet();
    let info = '';
    if (strategyMode === 'martingale') {
      info = 'NEXT BET: <span class="s-active">$' + nextBet + '</span>  |  CAP: $' + maxBet + '  |  BASE: $' + base;
      if (martingaleCurrentBet >= maxBet) info += '  |  <span class="s-warn">AT CAP — RESETTING</span>';
    } else if (strategyMode === 'fibonacci') {
      info = 'STEP: <span class="s-active">' + (fibIndex+1) + '</span>  |  MULTIPLIER: ×' + FIB[Math.min(fibIndex,FIB.length-1)] + '  |  NEXT BET: <span class="s-active">$' + nextBet + '</span>';
    } else if (strategyMode === 'dalembert') {
      info = 'LEVEL: <span class="s-active">+' + dalembertLevel + '</span>  |  UNIT $' + base + '  |  NEXT BET: <span class="s-active">$' + nextBet + '</span>';
    } else if (strategyMode === 'paroli') {
      info = 'WIN STREAK: <span class="s-active">' + paroliStreak + '/3</span>  |  NEXT BET: <span class="s-active">$' + nextBet + '</span>';
    }
    document.getElementById('strategy-status').innerHTML = info;
  }

  function onStrategyChange() {
    strategyMode = document.getElementById('strategy-select').value;
    const base = getStrategyBase();
    martingaleCurrentBet = base; fibIndex = 0; dalembertLevel = 0; paroliStreak = 0;
    const badge = document.getElementById('strategy-badge');
    const maxField = document.getElementById('field-maxbet');
    if (strategyMode === 'manual') {
      badge.textContent = 'MANUAL MODE'; badge.style.color = 'var(--dim)';
      document.getElementById('strategy-status').textContent = 'SELECT A STRATEGY TO ACTIVATE AUTO-WAGER';
      maxField.style.display = 'none';
    } else {
      badge.textContent = strategyMode.toUpperCase() + ' ACTIVE'; badge.style.color = 'var(--bright)';
      maxField.style.display = 'flex';
      applyStrategyBet();
      updateStrategyStatus();
    }
  }

  // ── AUTO-SPIN ──
  function startAutoSpin(count) {
    if (!selectedBetType) { alert('SELECT A BET TYPE FIRST'); return; }
    if (spinning) return;
    autoSpinRunning = true;
    autoSpinRemaining = count;
    document.getElementById('autospin-stop').classList.add('active');
    updateAutoSpinCounter();
    runNextAutoSpin();
  }

  function stopAutoSpin() {
    autoSpinRunning = false;
    autoSpinRemaining = 0;
    document.getElementById('autospin-stop').classList.remove('active');
    document.getElementById('autospin-counter').textContent = '';
  }

  function updateAutoSpinCounter() {
    document.getElementById('autospin-counter').textContent =
      autoSpinRunning ? autoSpinRemaining + ' SPINS REMAINING' : '';
  }

  async function runNextAutoSpin() {
    if (!autoSpinRunning || autoSpinRemaining <= 0) { stopAutoSpin(); return; }
    if (strategyMode !== 'manual') applyStrategyBet();
    const wager = parseInt(document.getElementById('wager-input').value) || 0;
    if (!selectedBetType || wager <= 0 || wager > balance) { stopAutoSpin(); return; }
    await executeSpin();
    if (balance <= 0) { stopAutoSpin(); return; }
    autoSpinRemaining--;
    updateAutoSpinCounter();
    if (autoSpinRemaining > 0 && autoSpinRunning) {
      setTimeout(runNextAutoSpin, 500);
    } else {
      stopAutoSpin();
    }
  }

  // ── REPEAT LAST BET ──
  function repeatLastBet() {
    if (!lastBetType || spinning) return;
    if (lastBetType === 'number') selectNumber(lastBetNumber);
    else selectOutside(lastBetType);
    if (lastBetWager > 0 && lastBetWager <= balance) {
      document.getElementById('wager-input').value = lastBetWager;
    }
    updateSpinBtn();
  }

  // ── BUILD TABLE ──
  function buildTable() {
    const grid = document.getElementById('numbers-grid');
    grid.innerHTML = '';
    const rows = [[], [], []];
    for (let n = 1; n <= 36; n++) {
      const rowIdx = (n % 3 === 0) ? 0 : (n % 3 === 2) ? 1 : 2;
      rows[rowIdx].push(n);
    }
    for (let r = 0; r < 3; r++) {
      for (let n of rows[r]) {
        const cell = document.createElement('div');
        cell.className = 'num-cell';
        cell.id = 'num-' + n;
        cell.innerHTML = n;
        const dot = document.createElement('div');
        dot.className = 'dot ' + (RED_NUMS.has(n) ? 'red' : 'black');
        cell.appendChild(dot);
        const heatBar = document.createElement('div');
        heatBar.className = 'heat-bar';
        heatBar.id = 'heat-' + n;
        cell.appendChild(heatBar);
        cell.onclick = () => selectNumber(n);
        grid.appendChild(cell);
      }
    }
  }

  // ── FREQUENCY HEATMAP ──
  function updateHeatmap() {
    const maxFreq = Math.max(1, ...Object.values(numFrequency));
    for (let n = 0; n <= 36; n++) {
      const bar = document.getElementById('heat-' + n);
      const cell = document.getElementById('num-' + n);
      if (!bar) continue;
      const freq = numFrequency[n] || 0;
      const pct = freq / maxFreq;
      bar.style.background = pct > 0.6
        ? 'var(--bright)' : pct > 0.3
        ? 'var(--phosphor)' : 'var(--dim)';
      bar.style.width = Math.round(pct * 100) + '%';
      if (cell) cell.setAttribute('data-hits', freq + ' hits · ' + totalSpins + ' spins');
    }
  }

  // ── LAST RESULTS ──
  function pushResult(num) {
    lastResults.unshift(num);
    if (lastResults.length > 20) lastResults.pop();
    const row = document.getElementById('last-results-row');
    row.innerHTML = '';
    lastResults.forEach((n, i) => {
      const chip = document.createElement('div');
      chip.className = 'result-chip ' + (n === 0 ? 'chip-zero' : RED_NUMS.has(n) ? 'chip-red' : 'chip-black');
      if (i === 0) chip.classList.add('chip-new');
      chip.textContent = n;
      row.appendChild(chip);
    });
  }

  // ── CHART ──
  function drawChart() {
    const canvas = document.getElementById('balance-chart');
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.offsetWidth;
    const h = 100;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, w, h);

    const data = balanceHistory;
    if (data.length < 2) {
      ctx.fillStyle = '#0d4d0d';
      ctx.font = '11px monospace';
      ctx.fillText('AWAITING DATA...', 10, 55);
      return;
    }

    const minV = Math.min(...data);
    const maxV = Math.max(...data);
    const range = maxV - minV || 1;
    const pad = { top: 10, bottom: 14, left: 6, right: 6 };
    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    const toX = i => pad.left + (i / (data.length - 1)) * chartW;
    const toY = v => pad.top + chartH - ((v - minV) / range) * chartH;

    // Grid lines
    ctx.strokeStyle = '#0d4d0d';
    ctx.lineWidth = 1;
    [0.25, 0.5, 0.75].forEach(frac => {
      const y = pad.top + chartH * (1 - frac);
      ctx.beginPath(); ctx.moveTo(pad.left, y); ctx.lineTo(w - pad.right, y); ctx.stroke();
    });

    // Starting line at $1000
    const startY = toY(1000);
    if (startY >= pad.top && startY <= pad.top + chartH) {
      ctx.strokeStyle = '#1a8c1a';
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(pad.left, startY); ctx.lineTo(w - pad.right, startY); ctx.stroke();
      ctx.setLineDash([]);
    }

    // Fill
    ctx.beginPath();
    ctx.moveTo(toX(0), toY(data[0]));
    data.forEach((v, i) => { if (i > 0) ctx.lineTo(toX(i), toY(v)); });
    ctx.lineTo(toX(data.length - 1), pad.top + chartH);
    ctx.lineTo(pad.left, pad.top + chartH);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, pad.top, 0, pad.top + chartH);
    grad.addColorStop(0, 'rgba(51,255,51,0.18)');
    grad.addColorStop(1, 'rgba(51,255,51,0.01)');
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    ctx.moveTo(toX(0), toY(data[0]));
    data.forEach((v, i) => { if (i > 0) ctx.lineTo(toX(i), toY(v)); });
    ctx.strokeStyle = '#33ff33';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#33ff33';
    ctx.shadowBlur = 4;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Dot at end
    const lastX = toX(data.length - 1);
    const lastY = toY(data[data.length - 1]);
    ctx.beginPath();
    ctx.arc(lastX, lastY, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#66ff66';
    ctx.shadowColor = '#66ff66';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Labels
    ctx.fillStyle = '#1a8c1a';
    ctx.font = '9px monospace';
    ctx.fillText('$' + maxV, pad.left + 2, pad.top + 9);
    ctx.fillText('$' + minV, pad.left + 2, pad.top + chartH - 2);

    // Range label
    document.getElementById('chart-range').textContent =
      'START $1000  →  NOW $' + data[data.length - 1];
  }

  // ── EXTENDED STATS ──
  function updateExtendedStats(isWin, payout, wager) {
    const netPnl = balance - 1000;
    const pnlEl = document.getElementById('stat-pnl');
    pnlEl.textContent = (netPnl >= 0 ? '+' : '') + '$' + netPnl;
    pnlEl.className = 'stats-bar-val ' + (netPnl > 0 ? 'pos' : netPnl < 0 ? 'neg' : '');

    const wrEl = document.getElementById('stat-winrate');
    wrEl.textContent = totalSpins > 0 ? ((wins / totalSpins) * 100).toFixed(1) + '%' : '--%';

    if (isWin) {
      currentStreak = currentStreak > 0 ? currentStreak + 1 : 1;
      if (payout > bestWin) bestWin = payout;
    } else {
      currentStreak = currentStreak < 0 ? currentStreak - 1 : -1;
    }
    const stEl = document.getElementById('stat-streak');
    stEl.textContent = currentStreak > 0
      ? '+' + currentStreak + ' WIN'
      : currentStreak < 0
      ? currentStreak + ' LOSS'
      : '--';
    stEl.className = 'stats-bar-val ' + (currentStreak > 0 ? 'pos' : currentStreak < 0 ? 'neg' : '');

    document.getElementById('stat-bestwin').textContent = bestWin > 0 ? '+$' + bestWin : '--';

    if (isDailyChallenge && personalBest !== null) {
      const delta = balance - personalBest;
      const sign = delta >= 0 ? '+' : '';
      const pbEl = document.getElementById('stat-pb');
      pbEl.innerHTML = '$' + personalBest +
        ' <span class="pb-delta" style="color:' + (delta >= 0 ? 'var(--bright)' : '#cc4422') + '">' +
        sign + '$' + delta + '</span>';
      pbEl.className = 'stats-bar-val';
    }
  }

  function selectNumber(n) {
    if (spinning) return;
    clearBetHighlights();
    selectedBetType = 'number';
    selectedNumber = n;
    document.getElementById('num-' + n).classList.add('selected-num');
    document.getElementById('bet-description').textContent = 'SINGLE NUMBER: ' + n + ' (' + getColorName(n) + ')';
    document.getElementById('bet-payout').textContent = '35:1';
    updateOddsDisplay();
    if (strategyMode !== 'manual') applyStrategyBet();
    updateSpinBtn();
  }

  function selectOutside(type) {
    if (spinning) return;
    clearBetHighlights();
    selectedBetType = type;
    selectedNumber = null;
    const descs = {
      red:   ['RED REGISTER', '1:1'],
      black: ['BLACK REGISTER', '1:1'],
      even:  ['EVEN REGISTER', '1:1'],
      odd:   ['ODD REGISTER', '1:1'],
      low:   ['LOW REGISTER (1-18)', '1:1'],
      high:  ['HIGH REGISTER (19-36)', '1:1'],
      doz1:  ['1ST DOZEN (1-12)', '2:1'],
      doz2:  ['2ND DOZEN (13-24)', '2:1'],
      doz3:  ['3RD DOZEN (25-36)', '2:1'],
      col1:  ['COLUMN 1 (1,4,7...34)', '2:1'],
      col2:  ['COLUMN 2 (2,5,8...35)', '2:1'],
      col3:  ['COLUMN 3 (3,6,9...36)', '2:1'],
    };
    const [desc, payout] = descs[type] || ['UNKNOWN', '--'];
    document.getElementById('bet-description').textContent = desc;
    document.getElementById('bet-payout').textContent = payout;
    const idMap = {red:'out-red', black:'out-black', even:'out-even', odd:'out-odd', low:'out-low', high:'out-high', doz1:'doz-1', doz2:'doz-2', doz3:'doz-3', col1:'col-1', col2:'col-2', col3:'col-3'};
    if (idMap[type]) document.getElementById(idMap[type]).classList.add('selected-bet');
    updateOddsDisplay();
    if (strategyMode !== 'manual') applyStrategyBet();
    updateSpinBtn();
  }

  function clearBetHighlights() {
    document.querySelectorAll('.num-cell').forEach(c => c.classList.remove('selected-num', 'winning'));
    document.querySelectorAll('.selected-bet').forEach(c => c.classList.remove('selected-bet'));
    const num0 = document.getElementById('num-0');
    if (num0) num0.classList.remove('selected-num', 'winning');
  }

  function setWager(val) {
    const inp = document.getElementById('wager-input');
    if (val === 'half') {
      inp.value = Math.floor(balance / 2);
    } else if (val === 'all') {
      inp.value = balance;
    } else {
      inp.value = Math.min(val, balance);
    }
    updateSpinBtn();
  }

  function updateSpinBtn() {
    const wager = parseInt(document.getElementById('wager-input').value) || 0;
    const ready = selectedBetType !== null && wager > 0 && wager <= balance && !spinning;
    document.getElementById('spin-btn').disabled = !ready;
  }

  // ── KEYBOARD ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !spinning) {
      const btn = document.getElementById('spin-btn');
      if (btn && !btn.disabled) executeSpin();
    }
  });

  // ── SPIN LOGIC ──
  async function executeSpin() {
    const wager = parseInt(document.getElementById('wager-input').value);
    if (!wager || wager <= 0 || wager > balance || !selectedBetType || spinning) return;

    // Challenge mode enforcement
    if (challengeConfig) {
      if (challengeConfig.colOnly && !['col1','col2','col3'].includes(selectedBetType)) {
        pushSysMsg('CHALLENGE RULE VIOLATION — COLUMN BETS ONLY IN THIS MODE');
        return;
      }
      if (challengeConfig.minBet && wager < challengeConfig.minBet) {
        pushSysMsg('CHALLENGE RULE VIOLATION — MINIMUM BET IS $' + challengeConfig.minBet);
        return;
      }
    }

    // Save for repeat
    lastBetType = selectedBetType;
    lastBetNumber = selectedNumber;
    lastBetWager = wager;
    document.getElementById('repeat-btn').disabled = false;

    spinning = true;
    updateSpinBtn();
    document.getElementById('result-section').classList.remove('active');

    const spinSection = document.getElementById('spin-section');
    spinSection.classList.add('active');
    document.getElementById('spin-status').textContent = 'CALCULATING TRAJECTORY...';

    const forcedIdx = (isDailyChallenge && dailySpinIndex < dailySequence.length)
      ? dailySequence[dailySpinIndex] : undefined;
    const resultNum = await runSpinAnimation(forcedIdx);
    if (isDailyChallenge) { dailySpinIndex++; updateDailyHeader(); }
    totalSpins++;

    const colorName = getColorName(resultNum);
    let isWin = false;
    let payout = 0;

    if (selectedBetType === 'number' && resultNum === selectedNumber) {
      isWin = true; payout = wager * 35;
    } else if (selectedBetType === 'red' && colorName === 'RED') {
      isWin = true; payout = wager;
    } else if (selectedBetType === 'black' && colorName === 'BLACK') {
      isWin = true; payout = wager;
    } else if (selectedBetType === 'even' && resultNum !== 0 && resultNum % 2 === 0) {
      isWin = true; payout = wager;
    } else if (selectedBetType === 'odd' && resultNum % 2 !== 0) {
      isWin = true; payout = wager;
    } else if (selectedBetType === 'low' && resultNum >= 1 && resultNum <= 18) {
      isWin = true; payout = wager;
    } else if (selectedBetType === 'high' && resultNum >= 19 && resultNum <= 36) {
      isWin = true; payout = wager;
    } else if (selectedBetType === 'doz1' && resultNum >= 1 && resultNum <= 12) {
      isWin = true; payout = wager * 2;
    } else if (selectedBetType === 'doz2' && resultNum >= 13 && resultNum <= 24) {
      isWin = true; payout = wager * 2;
    } else if (selectedBetType === 'doz3' && resultNum >= 25 && resultNum <= 36) {
      isWin = true; payout = wager * 2;
    } else if (selectedBetType === 'col1' && resultNum !== 0 && resultNum % 3 === 1) {
      isWin = true; payout = wager * 2;
    } else if (selectedBetType === 'col2' && resultNum !== 0 && resultNum % 3 === 2) {
      isWin = true; payout = wager * 2;
    } else if (selectedBetType === 'col3' && resultNum !== 0 && resultNum % 3 === 0) {
      isWin = true; payout = wager * 2;
    }

    if (isWin) {
      balance += payout;
      wins++;
      playWin();
    } else {
      balance -= wager;
      playLoss();
    }

    // Track frequency
    numFrequency[resultNum] = (numFrequency[resultNum] || 0) + 1;
    balanceHistory.push(balance);
    pushResult(resultNum);
    updateHeatmap();
    updateExtendedStats(isWin, payout, wager);
    checkAchievements(resultNum, isWin, payout, wager);
    reactiveMsg(resultNum, isWin, payout, wager);
    updateTimeline(resultNum);
    maybeGlitch();
    if (rivalBest !== null) updateRivalBar();
    if (tournamentMode) reportTournamentSpin(false);

    clearBetHighlights();
    const winCell = document.getElementById('num-' + resultNum);
    if (winCell) winCell.classList.add('winning');

    document.getElementById('result-number').textContent = resultNum;
    const colorLabel = document.getElementById('result-color-label');
    colorLabel.textContent = colorName;
    colorLabel.className = 'result-color ' + colorName;

    const payoutMsg = document.getElementById('payout-msg');
    if (isWin) {
      payoutMsg.textContent = '>>> TRANSACTION RESOLVED: CREDIT RECEIVED +$' + payout + ' <<<';
      payoutMsg.className = 'payout-msg win';
    } else {
      payoutMsg.textContent = '>>> TRANSACTION RESOLVED: LOSS DEDUCTION -$' + wager + ' <<<';
      payoutMsg.className = 'payout-msg loss';
    }

    document.getElementById('result-section').classList.add('active');
    document.getElementById('balance-display').textContent = balance;
    document.getElementById('spins-display').textContent = totalSpins;
    document.getElementById('wins-display').textContent = wins;

    addLog(resultNum, colorName, isWin, payout, wager);
    drawChart();

    // Strategy: update sequence state and refresh wager for next spin
    updateStrategyAfterResult(isWin);
    updateStrategyStatus();
    if (strategyMode !== 'manual' && !autoSpinRunning) applyStrategyBet();

    spinning = false;
    updateSpinBtn();

    if (balance <= 0) {
      setTimeout(() => showGameOver(false), 1400);
    } else if (isDailyChallenge && dailySpinIndex >= DAILY_SPINS) {
      setTimeout(() => showGameOver(true), 1400);
    } else if (challengeConfig && challengeConfig.maxSpins && totalSpins >= challengeConfig.maxSpins) {
      setTimeout(() => showGameOver(true), 1400);
    }
  }

  function runSpinAnimation(forcedWheelIdx) {
    return new Promise(resolve => {
      const totalTicks = 60 + Math.floor(Math.random() * 25);
      let currentIndex = Math.floor(Math.random() * WHEEL_NUMBERS.length);
      let tick = 0;
      let lastTickTime = 0;
      const track = document.getElementById('spin-track');
      const statusEl = document.getElementById('spin-status');

      function getDelay(t) {
        let d = 15;
        if (t > totalTicks - 35) d += 8;
        if (t > totalTicks - 20) d += 18;
        if (t > totalTicks - 12) d += 35;
        if (t > totalTicks - 7)  d += 70;
        if (t > totalTicks - 4)  d += 140;
        if (t > totalTicks - 2)  d += 300;
        return d;
      }

      function step() {
        if (tick >= totalTicks) {
          const useIdx = (forcedWheelIdx !== undefined)
            ? forcedWheelIdx
            : (currentIndex % WHEEL_NUMBERS.length);
          const finalNum = WHEEL_NUMBERS[useIdx];
          track.innerHTML = '<span class="center-num">[' + pad(finalNum) + ']</span>';
          statusEl.textContent = '[ LOCKED — VALUE: ' + finalNum + ' ]';
          resolve(finalNum);
          return;
        }

        const nums = [];
        for (let i = -2; i <= 2; i++) {
          const idx = (currentIndex + i + WHEEL_NUMBERS.length) % WHEEL_NUMBERS.length;
          nums.push(WHEEL_NUMBERS[idx]);
        }
        const renderHtml =
          '<span style="color:var(--very-dim);filter:brightness(2)">' + pad(nums[0]) + '</span>' +
          '  <span style="color:var(--dim)">' + pad(nums[1]) + '</span>' +
          '  <span class="center-num">[' + pad(nums[2]) + ']</span>  ' +
          '<span style="color:var(--dim)">' + pad(nums[3]) + '</span>' +
          '  <span style="color:var(--very-dim);filter:brightness(2)">' + pad(nums[4]) + '</span>';

        track.innerHTML = renderHtml;

        const delay = getDelay(tick);
        if (delay < 60) playTick();

        currentIndex = (currentIndex + 1) % WHEEL_NUMBERS.length;
        tick++;

        const progress = tick / totalTicks;
        if (progress < 0.6) statusEl.textContent = 'SPINNING AT FULL VELOCITY...';
        else if (progress < 0.85) statusEl.textContent = 'DECELERATING...';
        else statusEl.textContent = 'FINAL APPROACH...';

        setTimeout(step, delay);
      }

      step();
    });
  }

  function pad(n) {
    return (n < 10 ? '0' : '') + n;
  }

  function addLog(num, color, win, payout, wager) {
    const log = document.getElementById('log-entries');
    const entry = document.createElement('div');
    const ts = 'SPIN #' + String(totalSpins).padStart(3, '0');
    if (win) {
      entry.className = 'log-entry win-log';
      entry.textContent = ts + '  │  ' + pad(num) + ' ' + color.padEnd(5) + '  │  WIN  +$' + payout;
    } else {
      entry.className = 'log-entry loss-log';
      entry.textContent = ts + '  │  ' + pad(num) + ' ' + color.padEnd(5) + '  │  LOSS -$' + wager;
    }
    log.insertBefore(entry, log.firstChild);
    // Push to spin log for CSV export
    spinLog.push({ spin: totalSpins, num, color, win, payout, wager, balance });
  }

  function cashOut() {
    if (spinning) return;
    showGameOver(true);
  }

  function showGameOver(isCashout) {
    stopAutoSpin();
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('gameover-screen').classList.add('active');

    const title = document.getElementById('gameover-title');
    const stats = document.getElementById('gameover-stats');
    const startBal = challengeConfig ? challengeConfig.startBalance : 1000;
    const netPnl = balance - startBal;
    const sessionDur = getSessionDuration();
    clearInterval(timerInterval);

    if (challengeConfig) {
      title.textContent = '>>> ' + challengeConfig.name + ' — CHALLENGE COMPLETE <<<';
    } else if (isCashout) {
      title.textContent = '>>> CASHOUT SEQUENCE SUCCESSFUL <<<';
    } else {
      title.textContent = '>>> CRITICAL FAULT: BALANCE EXHAUSTED <<<';
    }

    stats.innerHTML =
      'TERMINAL BALANCE: <span>$' + balance + '</span><br>' +
      'NET P&amp;L: <span style="color:' + (netPnl >= 0 ? 'var(--bright)' : '#cc4422') + '">' + (netPnl >= 0 ? '+' : '') + '$' + netPnl + '</span><br>' +
      'TOTAL SPINS: <span>' + totalSpins + '</span><br>' +
      'WIN RATE: <span>' + (totalSpins > 0 ? ((wins/totalSpins)*100).toFixed(1) : '0.0') + '%</span><br>' +
      'BEST WIN: <span>+$' + bestWin + '</span><br>' +
      'SESSION TIME: <span>' + sessionDur + '</span>';

    // Tournament: report done, hide submit score
    if (tournamentMode) {
      reportTournamentSpin(true);
      document.getElementById('submit-score-block').style.display = 'none';
    } else {
      document.getElementById('submit-score-block').style.display = '';
    }
    if (tournamentAllDone) {
      setTimeout(showTournamentResults, 800);
    }

    // Show achievements panel
    const achPanel = document.getElementById('achievements-panel');
    const achList = document.getElementById('achievements-list');
    if (earnedAchievements.size > 0) {
      achPanel.style.display = 'block';
      achList.innerHTML = [...earnedAchievements].map(id => {
        const def = ACHIEVEMENTS.find(a => a.id === id);
        return def ? '<span class="achievement-chip" title="' + def.desc + '">★ ' + def.label + '</span>' : '';
      }).join('');
    } else {
      achPanel.style.display = 'none';
    }
    document.getElementById('share-card-msg').textContent = '';

    // Pre-fill submit name from welcome-screen input
    const goField = document.getElementById('go-username-field');
    goField.value = playerName !== 'ANON' ? playerName : '';
    goField.placeholder = playerName !== 'ANON' ? playerName : 'ENTER CALLSIGN';

    // Reset submit button state
    scoreSubmitted = false;
    const submitBtn = document.getElementById('submit-score-btn');
    submitBtn.disabled = false;
    submitBtn.textContent = '[ SUBMIT TO LEADERBOARD ]';
    document.getElementById('submit-result').textContent = '';
  }

  function restartGame() {
    balance = 1000;
    totalSpins = 0;
    wins = 0;
    selectedBetType = null;
    selectedNumber = null;
    spinning = false;
    balanceHistory = [1000];
    lastResults = [];
    numFrequency = {};
    currentStreak = 0;
    bestWin = 0;

    martingaleCurrentBet = getStrategyBase();
    fibIndex = 0; dalembertLevel = 0; paroliStreak = 0;
    stopAutoSpin();
    lastBetType = null; lastBetNumber = null; lastBetWager = 0;
    scoreSubmitted = false; spinLog = [];
    isDailyChallenge = false; dailySpinIndex = 0; dailySequence = [];
    personalBest = null; challengeConfig = null;
    earnedAchievements = new Set(); wentBroke = false; zeroCount = 0;
    rivalName = ''; rivalBest = null;
    sysMessages = []; clearTimeout(idleTimer);
    clearInterval(timerInterval); sessionStart = null;
    document.getElementById('pb-cell').style.display = 'none';
    document.getElementById('stat-pb').textContent = '--';
    document.getElementById('rival-bar').className = 'rival-bar';
    document.getElementById('challenge-banner').style.display = 'none';
    document.getElementById('tournament-rank-panel').style.display = 'none';
    document.getElementById('tournament-results-overlay').classList.remove('active');
    if (!tournamentMode) { tournamentCode = ''; tournamentPlayers = []; }
    document.getElementById('seed-viewer-btn').style.display = 'none';
    document.getElementById('session-timer').textContent = '00:00';
    document.getElementById('timeline-track').innerHTML =
      '<span style="color:var(--very-dim);filter:brightness(2);font-size:10px;letter-spacing:1px;">NO SPINS YET</span>';
    document.getElementById('sysmsg-feed').innerHTML =
      '<div class="sysmsg-line">SYSTEM ONLINE — AWAITING OPERATOR INPUT<span class="sysmsg-cursor"></span></div>';

    document.getElementById('agent-display').textContent = 'ANON';
    document.getElementById('balance-display').textContent = '1000';
    document.getElementById('spins-display').textContent = '0';
    document.getElementById('wins-display').textContent = '0';
    document.getElementById('stat-pnl').textContent = '$0';
    document.getElementById('stat-winrate').textContent = '--%';
    document.getElementById('stat-streak').textContent = '--';
    document.getElementById('stat-bestwin').textContent = '--';
    document.getElementById('bet-description').textContent = '-- NO BET SELECTED --';
    document.getElementById('bet-payout').textContent = '--';
    document.getElementById('wager-input').value = '';
    document.getElementById('repeat-btn').disabled = true;
    document.getElementById('log-entries').innerHTML = '';
    document.getElementById('last-results-row').innerHTML =
      '<span style="color:var(--very-dim);filter:brightness(2);font-size:11px;">NO SPINS YET</span>';
    document.getElementById('spin-section').classList.remove('active');
    document.getElementById('result-section').classList.remove('active');
    document.getElementById('odds-prob').textContent = '--';
    document.getElementById('odds-edge').textContent = '--';
    document.getElementById('odds-ev').textContent = '--';
    clearBetHighlights();
    updateHeatmap();
    updateSpinBtn();
    onStrategyChange();
    drawChart();

    document.getElementById('gameover-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
  }

  function initGame(isDaily, cfg) {
    const nameVal = document.getElementById('username-field').value.trim().toUpperCase();
    playerName = nameVal || 'ANON';
    isDailyChallenge = !!isDaily;
    challengeConfig = cfg || null;
    earnedAchievements = new Set();
    wentBroke = false; zeroCount = 0;
    sysMessages = [];
    rivalName = (document.getElementById('rival-field').value || '').trim().toUpperCase();
    rivalBest = null;

    if (challengeConfig) {
      balance = challengeConfig.startBalance;
      balanceHistory = [balance];
    }

    if (isDailyChallenge) {
      dailyDate = new Date().toISOString().slice(0, 10);
      dailySequence = generateDailySequence(dailyDate, DAILY_SPINS);
      dailySpinIndex = 0;
    }

    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('game-screen').classList.add('active');
    buildTable();
    updateSpinBtn();
    document.getElementById('wager-input').addEventListener('input', updateSpinBtn);
    document.getElementById('field-maxbet').style.display = 'none';
    document.getElementById('agent-display').textContent = playerName;
    document.getElementById('balance-display').textContent = balance;

    const banner = document.getElementById('challenge-banner');
    if (challengeConfig) {
      banner.style.display = 'block';
      banner.textContent = '[ ' + challengeConfig.name + ' ] — ' + challengeConfig.desc;
    } else {
      banner.style.display = 'none';
    }

    const seedBtn = document.getElementById('seed-viewer-btn');
    if (seedBtn) seedBtn.style.display = isDailyChallenge ? 'inline-block' : 'none';

    updateDailyHeader();
    startSessionTimer();
    pushSysMsg('SESSION INITIALIZED — AGENT: ' + playerName + ' — BALANCE: $' + balance);
    resetIdleTimer();

    if (isDailyChallenge && playerName && playerName !== 'ANON') fetchPersonalBest(playerName);
    if (rivalName) fetchRivalBest(rivalName);

    setTimeout(drawChart, 50);
  }

  window.addEventListener('resize', () => { if (balanceHistory.length > 0) drawChart(); });

  // ── PAGE LOAD INIT ──
  (function() {
    const today = new Date().toISOString().slice(0, 10);
    const el = document.getElementById('dc-date-label');
    if (el) el.textContent = today;
  })();
</script>
</body>
</html>
