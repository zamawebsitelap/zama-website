// ===================================================================
//  ZAMA - SITE CONFIG  (edit global settings here)
//  --------------------------------------------------------------
//  This is your single "control panel" for site-wide settings:
//  brand name, contact email, navigation links, social links, and
//  legal links. Page copy (headlines, paragraphs) lives separately
//  in src/content/pages/*.yml - see the README.
// ===================================================================

export const site = {
  name: 'ZAMA',
  tagline: 'We Are ZAMA.',

  // Your live domain. Used for canonical URLs, sitemap & SEO.
  // Keep this in sync with `site` in astro.config.mjs.
  url: 'https://wearezama.com',
  domain: 'wearezama.com',

  // The contact email shown in the footer, on the Contact page,
  // and inside structured data.
  email: 'christa@wearezama.com',
  // Optional contact phone number, used in the footer and structured data.
  phone: '',

  // Short description used as a fallback for SEO / social sharing.
  description:
    'ZAMA is a boutique digital marketing agency helping Washington, DC and South Florida brands grow through strategy, creative, paid media, social, and SEO.',
  defaultKeywords: [
    'boutique digital marketing agency',
    'digital marketing agency Washington DC',
    'South Florida marketing agency',
    'brand strategy',
    'paid media',
    'social media marketing',
    'email marketing',
    'SEO services',
  ],

  // Business location - powers the LocalBusiness structured data (SEO).
  location: {
    city: 'Washington',
    region: 'DC',
    regionName: 'District of Columbia',
    country: 'United States',
    countryCode: 'US',
    // Where you serve clients - shown to search & AI answer engines.
    areaServed: ['Washington, DC', 'South Florida', 'United States'],
  },

  // Default social-share image (1200×630 JPG — social scrapers don't
  // render SVGs). Swap the file in /public/images/.
  defaultOgImage: '/images/og-default.jpg',
};

// -------------------------------------------------------------------
//  Main navigation - add, remove, or reorder links here.
// -------------------------------------------------------------------
export const nav = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// -------------------------------------------------------------------
//  Social links - replace the URLs with your real profiles.
// -------------------------------------------------------------------
export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/wearezama.co/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61591643171758' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/zama-digital-marketing/?viewAsMember=true',
  },
];
