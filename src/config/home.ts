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
  title: 'Products that work for customers.',
  highlight: 'Teams that work for each other.',
  text: 'Product manager, fluent in design, engineering and business.',
  primary: null as Link | null,
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
