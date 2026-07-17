# ZAMA - Marketing Website

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

Everything you'll realistically want to change lives in **plain text files** -
no need to touch the design code. Here's where to look.

### 1. Change global settings (menu, socials, email)
**File:** `src/config/site.ts`
Edit the brand name, contact email, navigation menu links, social media URLs,
and footer legal links. Each line has a short comment explaining it.

### 2. Change the words on a page
**Folder:** `src/content/pages/`
One file per page - just edit the text between the quotes:

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

The two example posts are there to show you the format - edit or delete them.

### 5. Add or edit a case study (Work)
**Folder:** `src/content/work/`
Same idea as blog posts. Copy an existing file, rename it, and fill in the
fields: `client`, `industry`, `challenge`, `whatWeDid`, `results` (a list),
and `servicesUsed` (a list). Set `featured: true` to also show it on the
homepage's "Selected work" section. The three example case studies use
placeholder brands - replace them with your real projects.

### 6. Swap images
**Folder:** `src/assets/images/`
Drop your photo in this folder (a `.jpg`, `.png`, or `.webp`), then update the
matching `image:` line in the content file to point at it — for example:

```yaml
image: "/images/my-hero-photo.jpg"
```

You don't need to resize or compress anything: every image in this folder is
automatically resized and converted to the modern WebP format when the site
builds. (One exception: the social-share image `public/images/og-default.jpg`
stays where it is — that exact file is what Facebook/LinkedIn previews use.)

**Always** update the `imageAlt:` line too — it describes the image for
visually impaired visitors and helps SEO.

### 7. Add or edit testimonials
**Folder:** `src/content/testimonials/`
One file per testimonial. Edit the `quote`, `name`, `title`, and `company`
inside the quotes. To add another, copy a file and rename it; to hide one,
set `featured: false`. Testimonials show on the homepage.

> The three that ship are **placeholders** with `[bracketed]` text - replace
> them with real client quotes. Please don't reuse other companies' quotes.

### Fonts
Headlines use **Cormorant Garamond** (an elegant serif, italic on the hero);
body/buttons/labels use **Hanken Grotesk**. Both are self-hosted (bundled with
the site — no Google Fonts request) and configured in `tailwind.config.mjs` +
`src/layouts/BaseLayout.astro`.

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

## The contact form

The contact form is wired to **Netlify Forms**: submissions are captured by
Netlify (no server needed) and listed under **Forms** in the Netlify dashboard.
To also get each submission by email, open the Netlify site → Forms →
**Form notifications** → add an email notification.

---

## Deploying your site

The site is hosted on **Netlify**, which builds and deploys automatically on
every push to `main` (settings pinned in `netlify.toml`: build `npm run build`,
publish `dist`).

**If your domain ever changes:** update it in two places —
`site` in `astro.config.mjs` and `url` in `src/config/site.ts` — and add the
new domain in the Netlify dashboard (Domain management → add domain → provision
the free HTTPS certificate).

---

## Project structure (for the curious)

```
zama-website/
├─ public/               # favicon, robots.txt, og-default.jpg (served as-is)
├─ src/
│  ├─ assets/images/     # ← swap your images here (auto-optimized at build)
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
