# benjaminbalde.com

Personal site of Benjamin Balde — a minimal, editorial consulting presence.
Built with [Astro](https://astro.build), self-hosted fonts, no client framework.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # static output → dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  layouts/Base.astro       # <head>, nav, footer, grain, view transitions, reveal-on-scroll
  components/Nav.astro      # sticky navigation
  components/Footer.astro
  pages/
    index.astro            # home: hero, Haltung, Schwerpunkte, Journal-Teaser, Kontakt
    ansatz.astro           # approach / principles
    journal.astro          # blog — "Bald verfügbar" (coming soon)
    impressum.astro
    datenschutz.astro
  styles/global.css        # design tokens + shared styles
public/
  CNAME                    # benjaminbalde.com
  favicon.svg, robots.txt
```

## Deploy

The built site is published to the `gh-pages` branch, which GitHub Pages serves
at the custom domain (`public/CNAME`). `public/.nojekyll` keeps Astro's `_astro/`
assets from being stripped by Jekyll.

```bash
npm run build
cd dist && git init -b gh-pages && git add -A \
  && git commit -m "Deploy" \
  && git push -f https://github.com/Ben1365972/benjaminbalde.com.git gh-pages
```

> To switch to an automated GitHub Actions deploy instead, add a Pages workflow
> under `.github/workflows/` and grant the push token the `workflow` scope, then
> set **Settings → Pages → Source** to **GitHub Actions**.
