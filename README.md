# ZAMA — Marketing Website

A production-ready marketing website for **ZAMA**, a boutique digital marketing
agency in Washington, DC. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com) for speed, great SEO, and easy editing.

**Live domain:** wearezama.com · **Contact:** hello@wearezama.com

---

## Quick start

You need [Node.js](https://nodejs.org) 18.20+ (or 20+) installed. Then, in a
terminal, from this folder:

```bash
npm install     # install dependencies (run once)
npm run dev      # start a local preview at http://localhost:4321
npm run build    # build the final site into the /dist folder
npm run preview  # preview the built site locally
```

While `npm run dev` is running, open **http://localhost:4321** in your browser.
The site reloads automatically as you edit files.

---

## How to edit your site

Everything you'll realistically want to change lives in **plain text files** —
no need to touch the design code. Here's where to look.

### 1. Change global settings (menu, socials, email)
**File:** `src/config/site.ts`
Edit the brand name, contact email, navigation menu links, social media URLs,
and footer legal links. Each line has a short comment explaining it.

### 2. Change the words on a page
**Folder:** `src/content/pages/`
One file per page — just edit the text between the quotes:

| File | Page it controls |
|------|------------------|
| `home.yml` | Home page |
| `services.yml` | Services page (headline + intro) |
| `work.yml` | Work page (headline + intro) |
| `about.yml` | About page |
| `contact.yml` | Contact page + form fields |
| `blog.yml` | Blog index (headline + intro) |
| `faq.yml` | The FAQ questions & answers |

> Tip: keep the labels (like `heading:` or `intro:`) exactly as they are, and
> only change the text **after** them, inside the quotes.

### 3. Edit the list of services
**Folder:** `src/content/services/`
One file per service (e.g. `01-brand-strategy.yml`). Each has a `short`
description (used on the homepage card) and a `long` description (used on the
Services page). The number in the filename and the `order:` value control the
order they appear in.

### 4. Add or edit a blog post
**Folder:** `src/content/blog/`
Each post is a Markdown (`.md`) file. To add a post, **copy an existing file,
rename it** (e.g. `my-new-post.md`), and edit the top section (the part between
the `---` lines) plus the text below it:

```markdown
---
title: "Your post title"
description: "A one-sentence summary (also used for SEO)."
pubDate: 2026-07-01
author: "The ZAMA Team"
image: "/images/blog-default.svg"
imageAlt: "Describe the image for accessibility."
draft: false        # set to true to hide it while you're still writing
---

Write your post here in plain text. Use ## for section headings.
```

The two example posts are there to show you the format — edit or delete them.

### 5. Add or edit a case study (Work)
**Folder:** `src/content/work/`
Same idea as blog posts. Copy an existing file, rename it, and fill in the
fields: `client`, `industry`, `challenge`, `whatWeDid`, `results` (a list),
and `servicesUsed` (a list). Set `featured: true` to also show it on the
homepage's "Selected work" section. The three example case studies use
placeholder brands — replace them with your real projects.

### 6. Swap images
**Folder:** `public/images/`
All images live here as placeholder `.svg` files. To use your own photo, add it
to this folder (a `.jpg`, `.png`, or `.webp`), then update the matching
`image:` line in the content file to point at it — for example:

```yaml
image: "/images/my-hero-photo.jpg"
```

**Always** update the `imageAlt:` line too — it describes the image for
visually impaired visitors and helps SEO.

### 7. Add or edit testimonials
**Folder:** `src/content/testimonials/`
One file per testimonial. Edit the `quote`, `name`, `title`, and `company`
inside the quotes. To add another, copy a file and rename it; to hide one,
set `featured: false`. Testimonials show on the homepage.

> The three that ship are **placeholders** with `[bracketed]` text — replace
> them with real client quotes. Please don't reuse other companies' quotes.

### 8. Add your photos
Drop your image files into `public/images/` using these **exact names** and
they'll appear automatically (recommended: JPG, roughly the ratio shown):

| Save your photo as… | Appears on… | Best shape |
|---------------------|-------------|-----------|
| `hero-portrait.jpg` | Homepage hero | tall portrait (4:5) |
| `founder-portrait.jpg` | About page | tall portrait (4:5) |
| `contact-portrait.jpg` | Contact page | landscape (4:3) |
| `testimonial-1.jpg` … `-3.jpg` | Testimonial headshots | square (1:1) |

Each spot currently shows a grey placeholder that says exactly which filename
to drop in. (If you'd rather keep the `.svg` names, update the matching
`image:`/`photo:` line in the content file instead.)

### Fonts
Headlines use **Cormorant Garamond** (an elegant serif, italic on the hero);
body/buttons/labels use **Hanken Grotesk**. Both load from Google Fonts and are
configured in `tailwind.config.mjs` + `src/layouts/BaseLayout.astro`.

---

## What's already handled for you (SEO & performance)

- ✅ Unique title + meta description per page (edit them in `src/content/pages/`)
- ✅ Canonical tags, Open Graph & Twitter cards on every page
- ✅ Structured data (Organization, WebSite, ProfessionalService + LocalBusiness,
  Breadcrumbs, and an FAQ built from `faq.yml`)
- ✅ Auto-generated `sitemap` (`/sitemap-index.xml`) and `robots.txt`
- ✅ An RSS feed for the blog at `/rss.xml`
- ✅ Semantic HTML, one `<h1>` per page, keyboard-accessible navigation
- ✅ Lazy-loaded images with fixed aspect ratios (no layout shift)
- ✅ Subtle animations that automatically turn off for visitors who prefer
  reduced motion

---

## Making the contact form send email

The contact form currently shows a success message but does **not** send email
yet (there's no server). The easiest way to make it work is a free form service:

1. Sign up for [Formspree](https://formspree.io) (or Basin, Getform, etc.).
2. They give you a form URL like `https://formspree.io/f/abc123`.
3. In `src/pages/contact.astro`, find the `<form>` tag and add:
   `method="POST" action="https://formspree.io/f/abc123"`, then remove the
   demo `<script>` at the bottom of that file.

---

## Deploying your site

This site builds to plain static files (in `/dist`), so it can be hosted
almost anywhere for free. The simplest options:

- **Netlify** or **Vercel:** connect your Git repository, or drag-and-drop the
  `dist` folder after running `npm run build`. Build command: `npm run build`,
  publish directory: `dist`.
- **Cloudflare Pages / GitHub Pages:** same build command and output folder.

**Before you launch:** if your domain ever changes, update it in two places —
`site` in `astro.config.mjs` and `url` in `src/config/site.ts`.

---

## Project structure (for the curious)

```
zama-website/
├─ public/               # images, favicon, robots.txt (served as-is)
│  └─ images/            # ← swap your images here
├─ src/
│  ├─ config/site.ts     # ← global settings (menu, socials, email)
│  ├─ content/
│  │  ├─ pages/          # ← page copy (headlines, paragraphs)
│  │  ├─ services/       # ← the 8 services
│  │  ├─ work/           # ← case studies (Markdown)
│  │  └─ blog/           # ← blog posts (Markdown)
│  ├─ components/        # reusable design pieces (header, footer, cards…)
│  ├─ layouts/           # the shared page shell + <head>/SEO
│  ├─ pages/             # one file per URL (routing)
│  └─ styles/global.css  # base styles + brand palette variables
├─ astro.config.mjs      # Astro + integrations (sitemap)
└─ tailwind.config.mjs   # brand colors + fonts as theme tokens
```

Built with care. **We Are ZAMA.**
