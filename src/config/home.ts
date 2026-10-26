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
  eyebrow: 'Where I come in',
  title: 'Getting products moving, customers in view, teams aligned.',
  items: [
    {
      icon: 'lightbulb',
      title: 'Need to kickstart a product?',
      text: "Whether it's a new venture or an initiative that has stalled, I partner with the team to find where to focus first, set a clear direction and get results you can show early.",
    },
    {
      icon: 'pen-tool',
      title: 'Lost sight of the customer?',
      text: 'Data, research and experimentation bring them back into view. I help your team see what each customer segment needs and make sure it shapes what gets built, working closely with your designers to get their best work.',
    },
    {
      icon: 'workflow',
      title: 'Need to align your teams?',
      text: "Having worked across design, engineering and the business, I bring each side together around one picture of the customer and a plan they can all explain. The habits stay after I've gone.",
    },
  ] as Item[],
};

/** "How I work": numbered steps, styled like the theme's About page principles. */
export const howIWork = {
  eyebrow: 'How I work',
  title: 'Learn first, test everything, back the team.',
  items: [
    {
      title: 'Dig around first',
      text: 'I get to know your team, your customers, your data and how decisions really get made before suggesting where to focus.',
    },
    {
      title: 'Bring the customer into the room',
      text: 'Customers and users take part in the work itself, in research, design sessions and even the team. On one programme, customer service agents sat in our scrum teams and checked the software as it was built.',
    },
    {
      title: 'Back the experts',
      text: 'Designers and engineers know their craft. I give them clear problems, room to solve them and cover when they need it.',
    },
    {
      title: 'Ship small, learn fast',
      text: 'New features go out as experiments, so every next step is backed by how real customers use them.',
    },
  ] as { title: string; text: string }[],
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
