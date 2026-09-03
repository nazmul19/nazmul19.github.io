# GrowStack

Professional technology consulting website for [growstack.tech](https://growstack.tech).

Static Next.js export, served from **GitHub Pages** (`nazmul19.github.io`).

## Stack

- Next.js (App Router, static `output: "export"`)
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Build and preview the static site:

```bash
npm run build
npm start
```

`npm run build` writes a static site to `out/` (including `.nojekyll` and `CNAME`).

## Contact form (Formspree)

This is a **static** site. The Formspree URL is baked in at **build** time. Setting a GitHub variable alone is not enough — you must **re-run the deploy workflow** afterward.

1. Create a form at [Formspree](https://formspree.io/) for `growstack.tech@gmail.com`.
2. Copy the endpoint, e.g. `https://formspree.io/f/xxxxxx` (or just the form id).
3. In GitHub: **Settings → Secrets and variables → Actions**
   - Prefer **Variables** → New repository variable  
   - Name: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`  
   - Value: `https://formspree.io/f/xxxxxx`  
   - (A **Secret** with the same name also works.)
4. Re-deploy: **Actions → Deploy GitHub Pages → Run workflow** (or push to `master`).
5. In Formspree, allow the domain `growstack.tech` if domain restrictions are enabled.

Locally, put the same value in `.env.local`, then `npm run build`.

If the endpoint is missing at build time, the form falls back to `mailto:growstack.tech@gmail.com`.

## Deploy to GitHub Pages

This repo builds a **static** site into `out/` and publishes it to the **`gh-pages`** branch via [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

### One-time Pages setting (required)

If you see the README instead of the website, Pages is still serving the source branch.

1. Open the repo on GitHub → **Settings → Pages**
2. Under **Build and deployment → Source**, choose **Deploy from a branch**
3. Branch: **`gh-pages`** / folder: **`/` (root)** → Save
4. Custom domain: `growstack.tech` (the workflow writes `CNAME` automatically)

### After every push to `master` / `main`

The workflow builds and updates `gh-pages`. Give it 1–2 minutes, then hard-refresh `https://growstack.tech`.

You can also run the workflow manually: **Actions → Deploy GitHub Pages → Run workflow**.

### Formspree (required for in-browser form submit)

Set repository variable or secret `NEXT_PUBLIC_FORMSPREE_ENDPOINT`, then **re-run this workflow**. Checking the Action log for “Formspree endpoint is configured” confirms it was picked up.

## Content edits

Most copy lives under `src/content/`:

- `brand.ts` — name, phone, email, headlines
- `services.ts`, `projects.ts`, `process.ts`, `capabilities.ts`, `audiences.ts`, `differentiators.ts`

## Brand rules

- Do not display a founder or personal name on the site.
- Do not invent clients, testimonials, logos, or numeric impact claims.
- Present work as **Selected Work** / representative solutions.
