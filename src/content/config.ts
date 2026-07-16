import { defineCollection, z } from 'astro:content';

// ===================================================================
//  CONTENT COLLECTIONS
//  These describe the "shape" of your editable content so Astro can
//  validate it. You normally won't edit this file — you'll edit the
//  content itself in the folders below:
//
//    src/content/pages/     -> page copy (headlines, paragraphs)   [.yml]
//    src/content/services/  -> the 8 services                      [.yml]
//    src/content/work/      -> case studies                        [.md]
//    src/content/blog/      -> blog posts                          [.md]
// ===================================================================

// ---- Page copy (one .yml file per page). Loose schema so you can
//      freely add/rename fields without breaking the build. ----------
const pages = defineCollection({
  type: 'data',
  schema: z.object({}).passthrough(),
});

// ---- Services: shown on the homepage grid and the Services page. ---
const services = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(), // e.g. "Brand Strategy"
    short: z.string(), // short description (homepage card)
    long: z.string(), // longer description (Services page)
    order: z.number().default(0), // controls display order (low = first)
  }),
});

// ---- Case studies (Markdown). Add a new .md file to add a project. -
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(), // headline for the case study
    client: z.string(),
    industry: z.string(),
    summary: z.string(), // short teaser shown on the Work grid
    challenge: z.string(), // "The Challenge"
    whatWeDid: z.string(), // "What We Did"
    results: z.array(z.string()), // "The Results" (bullet list)
    servicesUsed: z.array(z.string()), // "Services Used"
    image: z.string(), // path under /public, e.g. /images/work-1.svg
    imageAlt: z.string(), // describe the image for accessibility + SEO
    order: z.number().default(0),
    featured: z.boolean().default(false), // show in homepage "Selected work"
    draft: z.boolean().default(false), // set true to hide while editing
  }),
});

// ---- Testimonials (one .yml file per quote). Add a file to add one. ----
const testimonials = defineCollection({
  type: 'data',
  schema: z.object({
    quote: z.string(), // the client's words
    name: z.string(), // client name
    title: z.string(), // their role, e.g. "CEO"
    company: z.string(), // their company
    photo: z.string().default('/images/og-default.jpg'), // headshot in src/assets/images
    photoAlt: z.string().default('Client headshot'),
    order: z.number().default(0),
    featured: z.boolean().default(true), // show on the homepage
  }),
});

// ---- Blog posts (Markdown). Add a new .md file to publish a post. --
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // used for previews + SEO meta description
    pubDate: z.date(), // e.g. 2026-01-15
    author: z.string().default('The ZAMA Team'),
    image: z.string().default('/images/og-default.jpg'),
    imageAlt: z.string().default('ZAMA insights'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false), // set true to hide while editing
  }),
});

export const collections = { pages, services, work, blog, testimonials };
