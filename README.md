# Earth Movers International — Website Redesign

A complete redesign of [earthmoversint.com](https://www.earthmoversint.com) in a modern,
editorial style: structured grids, refined typography, generous whitespace and a
warm sand / ink / machine-orange palette.

Built with **Vite + React + React Router** (hash routing, so it works on any static host
with no server configuration).

## Pages

| Route | Page |
| --- | --- |
| `#/` | Home — hero, stats, clients, featured services, fleet, story, selected projects, process, values, CTA |
| `#/about` | About — story, milestones timeline, mission & vision, values |
| `#/services` | Services — all 17+ disciplines grouped into Earthworks, Roads & Infrastructure, Supply & Logistics |
| `#/projects` | Projects — case-study cards (Fujairah Cement, Dubai Municipality, Nakheel PJSC) and sectors served |
| `#/contact` | Contact — phone/email/office details, enquiry form (opens the visitor's email app), Google map |

## Develop

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deploy

The `dist/` folder is a fully static site. Deploy it to Netlify, Vercel, GitHub Pages
or any web host:

- **Netlify**: build command `npm run build`, publish directory `dist`.
- **cPanel / classic hosting**: run `npm run build` and upload the contents of `dist/`.

## Editing content

All text lives in one file: **`src/data/content.js`** — company details, stats,
services, projects, process steps, values and timeline. Edit there; no component
changes needed.

## Adding real photography

The design currently uses custom vector scenes (`src/components/Art.jsx`) in the two
image panels (home hero and fleet section). To use real site photos instead:

1. Copy photos from the WordPress media library (or new shots) into `public/images/`,
   e.g. `public/images/hero.jpg` and `public/images/fleet.jpg`.
2. In `src/pages/Home.jsx`, replace `<ExcavatorScene />` / `<FleetScene />` with
   `<img src="images/hero.jpg" alt="…" />` — the framed panel styling stays the same.

Photos with dark, warm tones work best against the sand/ink palette.
