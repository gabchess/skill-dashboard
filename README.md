> **Note:** This repo is the foundation for **Agent Grimoire** (agentlvlup.ai). All new development continues here under the new brand.

# Skill Dashboard

Find any AI skill and its trigger phrase in under 5 seconds.

Static dashboard for discovering 55+ skills across OpenClaw and Claude Code. Zero dependencies. Deployed to Vercel.

## Run Locally

Open `index.html` in a browser. That's it — no build step, no server needed.

```bash
open index.html
```

## Deploy

Push to Vercel. `vercel.json` is pre-configured for static hosting with no build command.

```bash
vercel --prod
```

## Update Skills Data

Edit `skills-data.js` directly. Each skill follows this shape:

```js
{
  id: 'kebab-case-id',       // unique
  name: 'Display Name',
  trigger: '/command or "phrase"',
  description: 'One-line description.',
  category: 'development',   // must match a key in CATEGORIES
  source: 'openclaw',        // openclaw | claude-skill | claude-plugin | system
  status: 'active',          // active | installed | roadmap
  keywords: ['search', 'terms'],
}
```

To add an API, append to `window.APIS`. To add a roadmap item, append to `window.ROADMAP`.

## File Structure

```
index.html        Single page, 4 tabs
styles.css        Dark theme, glow effects, responsive grid
skills-data.js    All skill/API/roadmap data
app.js            Rendering, search, filtering, tabs, clipboard, localStorage
vercel.json       Static deployment config
```
