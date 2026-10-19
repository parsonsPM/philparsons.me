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
  text: "A UX designer turned product manager, with 18 years across travel marketplaces, payments and retail. I'm usually brought in when the customer has got lost behind the technology or the process.",
  primary: { label: 'Get in touch', href: 'mailto:hello@philparsons.me' } as Link | null,
  secondary: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phil-parsons' } as Link | null,
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
  eyebrow: 'How I can help',
  title: 'Where I come in.',
  items: [
    {
      icon: 'lightbulb',
      title: 'Starting something new',
      text: "The ask is ambiguous and nobody has defined the problem yet. I work out what's worth solving, and for whom, then shape the first version around it.",
    },
    {
      icon: 'workflow',
      title: 'Getting something unstuck',
      text: "It's live, but it isn't working for customers and nobody's sure why. I find where it breaks, test the fixes and get the numbers moving.",
    },
    {
      icon: 'layers',
      title: 'Scaling past the first version',
      text: 'It works for one case, one market or one kind of customer. I help take it to many without losing what made it work.',
    },
  ] as Item[],
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
