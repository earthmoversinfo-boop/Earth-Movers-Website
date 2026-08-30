// ---------------------------------------------------------------------------
// Renders every route to a static HTML file carrying its own <title>, meta
// description, canonical URL and JSON-LD, then writes sitemap.xml, robots.txt
// and host rewrite rules. Runs as part of `npm run build`.
// ---------------------------------------------------------------------------

import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const dist = path.resolve('dist')
const bundle = pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href
const { render, routes, headTagsFor, SITE } = await import(bundle)

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

  const html = template
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta name="description"[^>]*>\s*/i, '')
    .replace('</head>', `    ${headTagsFor(route)}\n    ${hints.join('\n    ')}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)

  const dir = route === '/' ? dist : path.join(dist, route)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
}

const today = new Date().toISOString().slice(0, 10)
const priorityOf = (r) => {
  if (r === '/') return '1.0'
  if (r.split('/').filter(Boolean).length === 3) return '0.8'   // category/emirate
  if (r.startsWith('/services')) return '0.9'
  return '0.7'
}

const urls = routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r === '/' ? '/' : r}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorityOf(r)}</priority>
  </url>`
  )
  .join('\n')

fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
)

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`
)

// SPA fallbacks — the prerendered files are served first where they exist.
fs.writeFileSync(path.join(dist, '_redirects'), '/*    /index.html   200\n')
fs.writeFileSync(
  path.join(dist, '.htaccess'),
  `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]
  RewriteRule ^ index.html [L]
</IfModule>
`
)

console.log(`prerendered ${routes.length} routes -> sitemap.xml, robots.txt, _redirects, .htaccess`)
