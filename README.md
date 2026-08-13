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

## Using the photos from earthmoversint.com

The site is photo-first: every image slot renders a real photograph when the file
exists and silently falls back to vector art when it doesn't.

**Pull the entire media library from the live site (one command):**

```bash
npm run fetch-images
```

This downloads every image from the WordPress media library at earthmoversint.com
into `public/images/library/` and writes `src/data/gallery.json`. The photo
galleries on the Home and Projects pages appear automatically once it has run.
(It needs network access to earthmoversint.com — run it on your own machine, or in
a Claude session whose environment allows that domain.)

**Named slots** (hero, fleet, about, project cards) are defined in the `images`
map at the top of `src/data/content.js`. Drop files with these names into
`public/images/`:

| File | Where it appears |
| --- | --- |
| `images/hero.jpg` | Home — hero panel |
| `images/fleet.jpg` | Home — fleet section |
| `images/about.jpg` | About — story section |
| `images/project-fujairah.jpg` | Projects — Fujairah Cement card |
| `images/project-municipality.jpg` | Projects — Dubai Municipality card |
| `images/project-nakheel.jpg` | Projects — Nakheel card |

…or edit the `images` map to point at files in `images/library/` after fetching.
Photos with dark, warm tones work best against the sand/ink palette.
