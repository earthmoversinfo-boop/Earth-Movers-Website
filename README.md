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

## Photography

The site ships with a curated set of regional photographs — desert construction,
heavy machinery and Dubai landmarks (Burj Al Arab, Atlantis/The Palm, the skyline) —
sourced from freely available website-template asset packs and processed to match
the warm sand/ink palette. Named slots live in `public/images/`; the gallery lives
in `public/images/library/` and is listed in `src/data/gallery.json`.

Every image slot renders a real photograph when the file exists and silently falls
back to vector art when it doesn't — so you can swap any photo by overwriting the
file with the same name, no code changes needed.

**To replace the current set with photos from earthmoversint.com:**

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

## SEO structure

The site is pre-rendered: `npm run build` emits a real HTML file for every route
with its own `<title>`, meta description, canonical URL and JSON-LD, plus
`sitemap.xml`, `robots.txt` and rewrite rules for Netlify (`_redirects`) and
Apache/cPanel (`.htaccess`). Search engines read finished HTML, not an empty
app shell.

### Service pages

| Route | Targets |
| --- | --- |
| `/services` | All four disciplines |
| `/services/earth-works` + `/{emirate}` | Excavation, back filling, cut & fill, levelling, compaction — all 7 emirates |
| `/services/road-works` + `/{emirate}` | Access roads, road base, asphalt, maintenance, patch works, parkings, interlock, kerbstones, markings — all 7 emirates |
| `/services/traffic-management/dubai` | Lane/road closure permits, traffic management |
| `/services/utilities/dubai` | RTA entry & exit works, service protection, ROW permits, utilities shifting, NOC services |

Emirate slugs: `dubai`, `abu-dhabi`, `sharjah`, `ajman`, `ras-al-khaimah`,
`fujairah`, `umm-al-quwain`.

Each location page carries a keyword-matched `<h1>` ("Road Works Contractor in
Sharjah"), an `<h3>` per service ("Access Roads in Sharjah"), local authority
context, an FAQ block marked up as `FAQPage`, and links to the other emirates.

To add or edit services, emirates or their copy, edit **`src/data/services.js`** —
routes, navigation, sitemap and structured data all follow from it.
