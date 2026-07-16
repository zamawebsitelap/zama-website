/** @type {import('tailwindcss').Config} */

// -------------------------------------------------------------------
//  ZAMA - Tailwind theme tokens
//  The brand palette and fonts are defined here so they can be used
//  as utility classes (e.g. bg-cream, text-terracotta, font-serif).
//  These mirror the CSS variables in src/styles/global.css.
// -------------------------------------------------------------------
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ---- Brand palette (edit hex values to re-skin the site) ----
        cream: '#FBF8F3', // primary background, warm ivory
        white: '#FFFFFF', // cards, contrast
        terracotta: {
          DEFAULT: '#BE6A4D', // primary accent, CTAs, links
          deep: '#9E4E37', // hover / pressed
        },
        gold: '#B08D57', // fine details, dividers, hover accents
        charcoal: '#33322E', // primary body text
        ink: '#121212', // footer, high-contrast section ("black")
        // ---- Industrial structural neutrals ----
        stone: '#ECE6DC', // warm light gray for alternating sections
        concrete: '#D8D1C4', // slightly deeper structural tone / borders
      },
      fontFamily: {
        // Headlines / display ONLY (large sizes) - elegant high-contrast serif.
        // Use its italic for hero lines and emphasis.
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'Cambria', 'serif'],
        // Body, UI, buttons, labels - everything small uses this grotesk.
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      // Comfortable editorial type scale
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2.25rem, 4.5vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.35rem, 2vw, 1.75rem)', { lineHeight: '1.2' }],
        'lead': ['clamp(1.125rem, 1.6vw, 1.4rem)', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        label: '0.22em', // small-caps section labels
      },
      maxWidth: {
        prose: '68ch',
      },
      spacing: {
        section: 'clamp(4.5rem, 10vw, 9rem)', // vertical rhythm between sections
      },
      borderColor: {
        hairline: 'rgba(176, 141, 87, 0.35)', // gold thin rules
      },
      // Industrial = sharp, near-square edges. This overrides Tailwind's
      // rounded-* utilities site-wide so cards/buttons/inputs read as crisp
      // panels rather than soft "AI" bubbles. (rounded-full still = pill.)
      borderRadius: {
        none: '0',
        sm: '1px',
        DEFAULT: '2px',
        md: '2px',
        lg: '2px',
        xl: '3px',
        '2xl': '3px',
        '3xl': '4px',
        full: '9999px',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2.5rem',
        lg: '4rem',
      },
      screens: {
        '2xl': '1240px', // keep an elegant, contained editorial width
      },
    },
  },
  plugins: [],
};
