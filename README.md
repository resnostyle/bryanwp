# Linkpage

Personal links page built with [Astro](https://astro.build).

Node.js **24.17+** (see `.mise.toml`). With [mise](https://mise.jdx.dev/):

```sh
mise install
mise run install   # npm ci
mise dev           # dev server on http://localhost:4321
```

Or without mise:

```sh
npm install
npm run dev
```

## Scripts

- `npm run dev` — dev server (default port 4321)
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the build locally
- `npm run check` — TypeScript + Astro typecheck

Edit `src/data/links.json` to change links, title, tagline, description, and author. `robots.txt` and `sitemap.xml` are generated from that file at build time.
