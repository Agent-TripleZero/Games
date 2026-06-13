const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

const DATA_DIR = path.join(__dirname, 'data');
const SCORES_FILE = path.join(DATA_DIR, 'scores.json');
const STREAKS_FILE = path.join(DATA_DIR, 'streaks.json');

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(SCORES_FILE)) fs.writeFileSync(SCORES_FILE, '[]');
if (!fs.existsSync(STREAKS_FILE)) fs.writeFileSync(STREAKS_FILE, '{}');

function readScores() {
  try { return JSON.parse(fs.readFileSync(SCORES_FILE, 'utf8')); }
  catch { return []; }
}

function writeScores(scores) {
  fs.writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2));
}

function readStreaks() {
  try { return JSON.parse(fs.readFileSync(STREAKS_FILE, 'utf8')); }
  catch { return {}; }
}

function writeStreaks(streaks) {
  fs.writeFileSync(STREAKS_FILE, JSON.stringify(streaks, null, 2));
}

function prevDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00Z');
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function computeStreak(name, challengeDate) {
  const streaks = readStreaks();
  const key = name.trim().toUpperCase();
  const rec = streaks[key] || { lastDate: null, streak: 0 };
  let newStreak;
  if (rec.lastDate === prevDate(challengeDate)) {
    newStreak = rec.streak + 1;
  } else if (rec.lastDate === challengeDate) {
    newStreak = rec.streak;
  } else {
    newStreak = 1;
  }
  if (rec.lastDate !== challengeDate) {
    streaks[key] = { lastDate: challengeDate, streak: newStreak };
    writeStreaks(streaks);
  }
  return newStreak;
}

// ── TOURNAMENT IN-MEMORY STORE ──
const tournaments = new Map();

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function genCode() {
  let code = '';
  for (let i = 0; i < 4; i++) code += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return code;
}

function sanitizePlayers(t) {
  return t.players
    .map(p => ({ name: p.name, balance: p.balance, spins: p.spins, done: p.done, isHost: p.name === t.host }))
    .sort((a, b) => b.balance - a.balance);
}

function broadcast(t, data) {
  const msg = `data: ${JSON.stringify(data)}\n\n`;
  t.clients.forEach(res => { try { res.write(msg); } catch {} });
}

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ── LEADERBOARD ──
app.get('/api/leaderboard', (req, res) => {
  const scores = readScores().filter(s => !s.challengeDate);
  const top = scores.sort((a, b) => b.netPnl - a.netPnl).slice(0, 20);
  res.json(top);
});

app.get('/api/personal-best', (req, res) => {
  const name = String(req.query.name || '').trim().toUpperCase().slice(0, 20);
  if (!name) return res.json({ dailyBest: null });
  const scores = readScores();
  const daily = scores.filter(s => s.challengeDate && s.name === name);
  const dailyBest = daily.length ? Math.max(...daily.map(s => s.balance)) : null;
  res.json({ dailyBest });
});

app.get('/api/daily-leaderboard', (req, res) => {
  const date = req.query.date || new Date().toISOString().slice(0, 10);
  const scores = readScores().filter(s => s.challengeDate === date);
  const top = scores.sort((a, b) => b.balance - a.balance).slice(0, 20);
  res.json(top);
});

app.post('/api/score', (req, res) => {
  const { name, balance, netPnl, spins, wins, winRate, bestWin, challengeDate } = req.body;
  if (!name || spins === undefined || netPnl === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const cleanName = String(name).trim().toUpperCase().slice(0, 20) || 'ANON';
  const scores = readScores();

  let streak = 0;
  if (challengeDate) {
    streak = computeStreak(cleanName, String(challengeDate).slice(0, 10));
  }

  const entry = {
    name: cleanName,
    balance: Number(balance),
    netPnl: Number(netPnl),
    spins: Number(spins),
    wins: Number(wins),
    winRate: Number(winRate),
    bestWin: Number(bestWin),
    date: new Date().toISOString().slice(0, 10),
    timestamp: Date.now()
  };
  if (challengeDate) {
    entry.challengeDate = String(challengeDate).slice(0, 10);
    entry.streak = streak;
  }

  scores.push(entry);
  writeScores(scores);

  const sameCategory = scores.filter(s => challengeDate ? s.challengeDate === entry.challengeDate : !s.challengeDate);
  const rank = sameCategory.filter(s => s.balance >= entry.balance).length;
  res.json({ ok: true, rank, streak });
});

// ── TOURNAMENT ENDPOINTS ──

app.post('/api/tournament/create', (req, res) => {
  const name = String(req.body.playerName || 'ANON').trim().toUpperCase().slice(0, 20) || 'ANON';
  let code;
  let attempts = 0;
  do { code = genCode(); attempts++; } while (tournaments.has(code) && attempts < 100);

  const tournament = {
    code,
    status: 'lobby',
    host: name,
    maxSpins: 20,
    startBalance: 500,
    players: [{ name, balance: 500, spins: 0, done: false }],
    clients: new Map(),
    createdAt: Date.now()
  };
  tournaments.set(code, tournament);

  setTimeout(() => tournaments.delete(code), 2 * 60 * 60 * 1000);

  res.json({ ok: true, code, maxSpins: tournament.maxSpins, startBalance: tournament.startBalance, host: name });
});

app.post('/api/tournament/join', (req, res) => {
  const name = String(req.body.playerName || 'ANON').trim().toUpperCase().slice(0, 20) || 'ANON';
  const code = String(req.body.code || '').toUpperCase().trim();
  const t = tournaments.get(code);
  if (!t) return res.status(404).json({ error: 'ROOM NOT FOUND' });
  if (t.status !== 'lobby') return res.status(400).json({ error: 'TOURNAMENT ALREADY STARTED' });
  if (t.players.length >= 8) return res.status(400).json({ error: 'ROOM FULL (MAX 8 AGENTS)' });
  if (t.players.find(p => p.name === name)) return res.status(400).json({ error: 'CALLSIGN TAKEN IN THIS ROOM' });

  t.players.push({ name, balance: t.startBalance, spins: 0, done: false });
  broadcast(t, { type: 'player_joined', players: sanitizePlayers(t) });
  res.json({ ok: true, code: t.code, maxSpins: t.maxSpins, startBalance: t.startBalance, host: t.host });
});

app.post('/api/tournament/start', (req, res) => {
  const name = String(req.body.playerName || '').trim().toUpperCase();
  const code = String(req.body.code || '').toUpperCase();
  const t = tournaments.get(code);
  if (!t) return res.status(404).json({ error: 'ROOM NOT FOUND' });
  if (t.host !== name) return res.status(403).json({ error: 'ONLY HOST CAN START' });
  if (t.status !== 'lobby') return res.status(400).json({ error: 'ALREADY STARTED' });

  t.status = 'active';
  t.startedAt = Date.now();
  broadcast(t, { type: 'tournament_start', players: sanitizePlayers(t) });
  res.json({ ok: true });
});

app.post('/api/tournament/spin', (req, res) => {
  const name = String(req.body.playerName || '').trim().toUpperCase();
  const code = String(req.body.code || '').toUpperCase();
  const t = tournaments.get(code);
  if (!t) return res.status(404).json({ error: 'ROOM NOT FOUND' });

  const player = t.players.find(p => p.name === name);
  if (!player) return res.status(400).json({ error: 'PLAYER NOT IN ROOM' });

  player.balance = Number(req.body.balance) || player.balance;
  player.spins = Number(req.body.spins) || player.spins;
  if (req.body.done) player.done = true;

  broadcast(t, { type: 'rank_update', players: sanitizePlayers(t) });

  if (t.status === 'active' && t.players.every(p => p.done)) {
    t.status = 'finished';
    broadcast(t, { type: 'tournament_over', players: sanitizePlayers(t) });
  }

  res.json({ ok: true });
});

app.get('/api/tournament/events/:code', (req, res) => {
  const code = req.params.code.toUpperCase();
  const t = tournaments.get(code);
  if (!t) return res.status(404).end();
  const name = String(req.query.name || '').trim().toUpperCase();

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const initMsg = JSON.stringify({ type: 'init', status: t.status, players: sanitizePlayers(t), host: t.host, maxSpins: t.maxSpins });
  res.write(`data: ${initMsg}\n\n`);

  const clientKey = name + '_' + Date.now();
  t.clients.set(clientKey, res);

  const heartbeat = setInterval(() => { try { res.write(': ping\n\n'); } catch { clearInterval(heartbeat); } }, 20000);

  req.on('close', () => {
    clearInterval(heartbeat);
    t.clients.delete(clientKey);
  });
});

app.get('/api/tournament/room/:code', (req, res) => {
  const code = req.params.code.toUpperCase();
  const t = tournaments.get(code);
  if (!t) return res.status(404).json({ error: 'ROOM NOT FOUND' });
  res.json({ status: t.status, players: sanitizePlayers(t), host: t.host, maxSpins: t.maxSpins, startBalance: t.startBalance });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Terminal Roulette running on port ${PORT}`);
});
