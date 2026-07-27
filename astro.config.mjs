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
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://wearezama.com';
const basePath = process.env.SITE_BASE_PATH || '/';

export default defineConfig({
  site: siteUrl,
  base: basePath,
  integrations: [
    tailwind(),
    // auto-generates /sitemap-index.xml + /sitemap-0.xml at build time.
    // Guard: if legal placeholder pages (/privacy, /terms) are ever
    // re-added, keep them out of the sitemap (they ship as noindex).
    sitemap({
      filter: (page) => !page.includes('/privacy') && !page.includes('/terms'),
    }),
  ],
});
