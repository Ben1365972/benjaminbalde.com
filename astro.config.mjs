// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
  site: 'https://benjaminbalde.com',
  trailingSlash: 'ignore',
  // Englische Startseite ist jetzt die EN-Ansicht der Speakerpage
  redirects: {
    '/en': '/#en',
  },
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Startseite ist statisch (public/index.html) und wird sonst nicht erfasst
      customPages: ['https://benjaminbalde.com/'],
      // Nicht gelistete Seiten aus dem Sitemap ausschliessen
      filter: (page) =>
        !page.includes('/p2050-godmtztq3lmi3n') && !page.includes('/legacy') && page !== 'https://benjaminbalde.com/en/',
    }),
  ],
});
