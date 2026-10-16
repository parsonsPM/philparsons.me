# philparsons.me

Phil Parsons's personal site. Built with Astro and Tailwind CSS on the [Maria theme](https://github.com/xocothemes/maria) by Andrei Alba (MIT licence, see `LICENSE`). Deployed as static files to Cloudflare.

## Working on it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type check
```

## Where things live

- `src/config/site.ts`: name, contact, availability ("Right now"), header action, socials, navigation
- `src/config/home.ts`: homepage copy (keyword line, hero, proof points, How I work, testimonials, closing panel)
- `src/content/work/`: case studies, one folder per project (format in `CUSTOMIZATION.md`)
- `src/styles/global.css`: colour tokens (`--accent` and friends) and the type scale
- `src/pages/_hidden/`: theme pages not live yet (about, resume, work, privacy, terms, cookies). Move a page back up into `src/pages/` and add it to `navigation` when it has real content.

## Rules

- **This repo is public, so only chosen copy goes in.** Drafts live elsewhere. Empty strings, `null` and empty lists hide that part of the page.
- No employer-confidential detail.
- The header keeps its links on the right at every screen size, with no hamburger or floating menu.

`CUSTOMIZATION.md` and `CHANGELOG.md` are the theme's own documentation, kept for reference.
