// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// -------------------------------------------------------------------
//  Astro configuration
//  `site` is your live domain. It is used to build canonical URLs,
//  the sitemap, and structured data. If you launch on a different
//  domain, change it here (and in src/config/site.ts).
// -------------------------------------------------------------------
export default defineConfig({
  site: 'https://wearezama.com',
  integrations: [
    tailwind(),
    // auto-generates /sitemap-index.xml + /sitemap-0.xml at build time.
    sitemap(),
  ],
});
