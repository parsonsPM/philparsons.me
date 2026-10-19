/**
 * Homepage copy. Only chosen copy goes in here: this repo is public.
 * Empty strings, `null` and empty lists hide that part of the page.
 */

interface Link {
  label: string;
  href: string;
}

interface Item {
  icon: string;
  title: string;
  text: string;
}

interface Quote {
  quote: string;
  name: string;
  role: string;
}

export const hero = {
  /** Small keyword line above the headline. */
  role: 'Contract Senior Product Manager · Customer experience · AI & automation',
  /** The headline: `title`, then `highlight` in the serif accent, then `after`. Each is optional. */
  title: 'The design-led',
  highlight: 'product manager.',
  after: '',
  text: 'Fluent in design, engineering and business.',
  primary: { label: 'Get in touch', href: 'mailto:hello@philparsons.me' } as Link | null,
  secondary: null as Link | null,
  /** Proof points. */
  facts: [] as { value: string; label: string }[],
};

export const work = {
  eyebrow: 'Selected work',
  title: 'Case studies',
  text: '',
  /** How many featured case studies the homepage shows. */
  limit: 4,
};

/** "How I work". */
export const services = {
  eyebrow: '',
  title: '',
  items: [] as Item[],
};

export const testimonials = {
  eyebrow: '',
  title: '',
  items: [] as Quote[],
};

export const closing = {
  eyebrow: '',
  title: '',
  highlight: '',
  text: '',
};
