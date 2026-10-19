export interface NavLink {
  label: string;
  href: string;
}

/**
 * Only chosen copy goes in here: this repo is public. Anything left empty
 * (an empty string or list, or `enabled: false`) is hidden on the site.
 */
export const siteConfig = {
  name: 'Phil Parsons',
  title: 'Phil Parsons - Contract Senior Product Manager',
  description:
    'Phil Parsons, the design-led product manager. A UX designer turned product manager with 18 years across travel marketplaces, payments and retail. Contract Senior Product Manager for customer experience, AI and automation.',
  siteUrl: 'https://philparsons.me',
  language: 'en-GB',
  locale: 'en_GB',
  dateLocale: 'en-GB',
  socialImage: '/og-image.png',

  author: {
    name: 'Phil Parsons',
    role: 'Product manager',
    /** Shown in the footer as "based in …". Leave empty to hide. */
    location: '',
    /** Drives the closing "Let's talk" panel. Leave empty to hide it. */
    email: 'hello@philparsons.me',
  },

  /** The pill above the homepage headline ("Right now"). Set `enabled: false` to remove it. */
  availability: {
    enabled: false,
    label: '',
  },

  /** The button at the end of the header and in the mobile menu. Leave `href` empty to hide it. */
  action: { label: 'Get in touch', href: 'mailto:hello@philparsons.me' },

  /** A PDF in `public/`, offered on the resume page. Leave empty to hide the button. */
  resumePdf: '',

  /** The banner and preferences dialog. Off: the site has no analytics or marketing cookies. */
  cookieConsent: {
    enabled: false,
  },

  socials: [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/phil-parsons' }] satisfies NavLink[],
};

/** Pages are parked in `src/pages/_hidden/` until they have content. Add links here as they come back. */
export const navigation: NavLink[] = [];

export const legalLinks: NavLink[] = [];
