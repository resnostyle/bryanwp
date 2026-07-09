// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import linksData from './src/data/links.json' with { type: 'json' };
import { validateLinks } from './src/lib/validate-links.ts';

validateLinks(linksData);

// https://astro.build/config
export default defineConfig({
  output: 'static',
  /** Align with `/go/<slug>/` + static hosts that map `…/index.html` to trailing-slash URLs */
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
