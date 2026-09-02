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

1. Create a form at [Formspree](https://formspree.io/) that delivers to `growstack.tech@gmail.com`.
2. Copy the form endpoint (example: `https://formspree.io/f/xxxxxx`).
3. Add an environment variable:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
```

- Locally: create `.env.local` with the variable above.
- On GitHub: repo **Settings → Secrets and variables → Actions** → add secret `NEXT_PUBLIC_FORMSPREE_ENDPOINT`.

If the variable is unset, the contact form falls back to a `mailto:` compose using `growstack.tech@gmail.com`.

## Deploy to GitHub Pages

This repo ships a workflow at [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

1. Push to `main` or `master` (or run the workflow manually).
2. In the GitHub repo: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions**.
3. After the workflow succeeds, the site is available at `https://nazmul19.github.io/`.

### Custom domain `growstack.tech`

`public/CNAME` is set to `growstack.tech` and is copied into `out/` on build.

1. In GitHub Pages settings, confirm the custom domain `growstack.tech`.
2. At your DNS provider, point the domain to GitHub Pages (A records for apex and/or CNAME for `www`, per [GitHub’s docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Enable HTTPS once DNS has propagated.

## Content edits

Most copy lives under `src/content/`:

- `brand.ts` — name, phone, email, headlines
- `services.ts`, `projects.ts`, `process.ts`, `capabilities.ts`, `audiences.ts`, `differentiators.ts`

## Brand rules

- Do not display a founder or personal name on the site.
- Do not invent clients, testimonials, logos, or numeric impact claims.
- Present work as **Selected Work** / representative solutions.
