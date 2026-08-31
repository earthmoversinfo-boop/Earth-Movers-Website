// ---------------------------------------------------------------------------
// Renders every route in every language to a static HTML file carrying its own
// <html lang>/<dir>, <title>, meta description, canonical URL, hreflang
// alternates and JSON-LD, then writes sitemap.xml, robots.txt and host rewrite
// rules. Runs as part of `npm run build`.
// ---------------------------------------------------------------------------

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { REDIRECTS } from '../src/data/redirects.js'

const dist = path.resolve('dist')
// '/' for the real site, '/<repo>/' for a GitHub Pages project site
const BASE = (process.env.PUBLIC_BASE || '/').replace(/\/+$/, '')
// A staging copy must never be indexed — the live site is the one that ranks
const STAGING = Boolean(process.env.PUBLIC_BASE)
const bundle = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href
const { render, routes, headTagsFor, seoFor, SITE, BASE_ROUTES, LOCALES, localeHref } =
  await import(bundle)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

for (const route of routes) {
  // React 19 emits resource hints (<link rel="preload">) inline in the string it
  // renders, but hoists them into <head> on the client. Lift them into the head
  // ourselves so the markup matches at hydration — and so the hints actually work.
  const hints = []
  const body = render(route).replace(/<link\b[^>]*>/g, (tag) => {
    hints.push(tag)
    return ''
  })

  const seo = seoFor(route)
  const html = template
    .replace(/<html[^>]*>/i, `<html lang="${seo.htmlLang}" dir="${seo.dir}">`)
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta name="description"[^>]*>\s*/i, '')
    .replace('</head>', `    ${headTagsFor(route)}\n    ${hints.join('\n    ')}\n  </head>`)
    // The staging copy must not compete with the real domain in search. This
    // has to be a meta tag on the page: GitHub Pages cannot set an
    // X-Robots-Tag header, and robots.txt alone does not prevent indexing —
    // it only stops the crawl, so a URL somebody links to can still be listed.
    .replace(
      /<meta name="robots"[^>]*>/i,
      STAGING ? '<meta name="robots" content="noindex,nofollow">' : '$&'
    )
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const dir = route === '/' ? dist : path.join(dist, route)
  // note: `route` is already relative to the site root, so the base prefix
  // belongs in the URLs inside the page, not in the file path on disk
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
}

const today = new Date().toISOString().slice(0, 10)
const priorityOf = (base) => {
  if (base === '/') return '1.0'
  if (base.split('/').filter(Boolean).length === 3) return '0.8' // category/service or /emirate
  if (base.startsWith('/services')) return '0.9'
  return '0.7'
}

const abs = (p) => `${SITE}${p === '/' ? '/' : p}`

// One <url> per language, each listing every language as an alternate — the
// form Google asks for on a multilingual site.
const urls = BASE_ROUTES.flatMap((base) =>
  LOCALES.map((locale) => {
    const alternates = LOCALES.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l === 'ar' ? 'ar-AE' : 'en-AE'}" href="${abs(localeHref(base, l))}"/>`
    ).join('\n')
    return `  <url>
    <loc>${abs(localeHref(base, locale))}</loc>
${alternates}
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localeHref(base, 'en'))}"/>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorityOf(base)}</priority>
  </url>`
  })
).join('\n')

fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
)

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  STAGING
    ? // Crawling is allowed on purpose: a blocked page is never fetched, so
      // the noindex meta on it is never read, and the URL can still be listed
      // from an inbound link. Letting the crawler in is what gets it removed.
      `User-agent: *
Allow: /
`
    : `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`
)

if (STAGING) {
  // GitHub Pages: skip Jekyll, and serve the app for any unmatched path
  fs.writeFileSync(path.join(dist, '.nojekyll'), '')
  fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
}

// 301s for the old site's ranking URLs, then the SPA fallback. Order matters
// in both files: a redirect written after the catch-all never fires.
const esc = (p) => p.slice(1).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

fs.writeFileSync(
  path.join(dist, '_redirects'),
  REDIRECTS.map(([from, to]) => `${from}    ${to}    301!`).join('\n') +
    '\n\n/*    /index.html   200\n'
)

fs.writeFileSync(
  path.join(dist, '.htaccess'),
  `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Old site -> new site. Trailing slash optional; query strings preserved.
${REDIRECTS.map(([from, to]) => `  RewriteRule ^${esc(from)}/?$ ${to} [R=301,L]`).join('\n')}

  # Everything else: serve the prerendered file if there is one, else the app.
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^ index.html [L]
</IfModule>
`
)

console.log(
  `prerendered ${routes.length} routes (${LOCALES.join(', ')}) at base "${BASE || '/'}"` +
    `${STAGING ? ' [staging: noindex, 404 fallback]' : ''} -> sitemap.xml, robots.txt, _redirects, .htaccess`
)
