# Muhammad Afzaal — Portfolio Website

A modern, animated one-page portfolio built with pure HTML, CSS & JavaScript.

## Deploy to Vercel (free) — 2 minutes

**Easiest — no account setup, no terminal:**
1. Go to https://vercel.com and sign up (free) with GitHub, GitLab, or email.
2. Click **"Add New" → "Project"**.
3. Choose **"Deploy without Git"** / drag-and-drop, and drop this whole `portfolio` folder in.
4. Click **Deploy**. Done — you'll get a live link like `muhammad-afzaal.vercel.app`.

**Alternative — with GitHub (recommended for future edits):**
1. Create a new GitHub repository and upload these files (`index.html`, `style.css`, `script.js`, `assets/`, `vercel.json`).
2. On https://vercel.com, click **"Add New" → "Project"** → **Import** your GitHub repo.
3. Leave all settings as default (no framework, static site) and click **Deploy**.
4. Every future push to GitHub will auto-redeploy your site.

**Alternative — Vercel CLI:**
```bash
npm i -g vercel
cd portfolio
vercel --prod
```

## Files
- `index.html` — page structure & content
- `style.css` — all styling, layout, animations
- `script.js` — typing effect, scroll reveals, 3D tilt card, mobile menu
- `assets/afzaal.png` — your photo
- `vercel.json` — tells Vercel this is a static site

## Editing content
Open `index.html` and edit text directly — skills, education, and contact info are all in plain HTML near the top of each section (search for `id="skills"`, `id="education"`, `id="contact"`).
