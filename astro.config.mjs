// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://benjaminbalde.com',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Nicht gelistete Seiten aus dem Sitemap ausschliessen
      filter: (page) =>
        !page.includes('/p2050-godmtztq3lmi3n') && !page.includes('/verzeichnis-9wr4k2xhd7'),
    }),
  ],
});
