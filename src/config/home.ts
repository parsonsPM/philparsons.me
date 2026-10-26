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

/** "How I can help": scenario questions the visitor might be asking. */
export const services = {
  eyebrow: 'How I can help',
  title: 'Where I come in.',
  items: [
    {
      icon: 'lightbulb',
      title: 'Need to kickstart a product?',
      text: "Whether it's a new venture or an initiative that has stalled, I work out where the team should focus first, set the direction and get results you can show early.",
    },
    {
      icon: 'pen-tool',
      title: 'Lost sight of the customer?',
      text: "I'll bring them back into view. Using data, research and experiments, I show your team what each customer segment needs and make sure it shapes what gets built. I work closely with your designers to get their best work.",
    },
    {
      icon: 'workflow',
      title: 'Need to align your teams?',
      text: "I'll get everyone pulling the same way. Having worked across design, engineering and the business, I bring each side behind one picture of the customer and a plan they can all explain, and leave habits that last after I've gone.",
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
