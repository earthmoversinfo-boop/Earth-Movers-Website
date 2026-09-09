#!/usr/bin/env node
// ---------------------------------------------------------------------------
// Downloads every image from the earthmoversint.com WordPress media library
// into public/images/library/ and writes src/data/gallery.json — a record of
// what was fetched, with each file's alt text, so the frames worth using can be
// picked out by hand. Run with:  npm run fetch-images
//
// Requires network access to earthmoversint.com (run it on your own machine,
// or in a Claude session whose environment allows that domain).
// ---------------------------------------------------------------------------

import { mkdir, writeFile } from 'node:fs/promises'
import { createWriteStream } from 'node:fs'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'
import path from 'node:path'

const SITE = 'https://earthmoversint.com'
const OUT_DIR = 'public/images/library'
const MANIFEST = 'src/data/gallery.json'

const stripHtml = (s = '') => s.replace(/<[^>]*>/g, '').trim()

async function fetchMediaPage(page) {
  const url = `${SITE}/wp-json/wp/v2/media?per_page=100&page=${page}&media_type=image`
  const res = await fetch(url)
  if (!res.ok) {
    // Pagination past the last page returns 400 — that's normal completion.
    if (page > 1 && (res.status === 400 || res.status === 404)) return null
    throw new Error(`${url} responded ${res.status} ${res.statusText}`)
  }
  const items = await res.json()
  return Array.isArray(items) && items.length ? items : null
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  const manifest = []
  const seen = new Set()

  let page = 1
  let items
  try {
    while ((items = await fetchMediaPage(page))) {
      for (const item of items) {
        const src = item.source_url
        if (!src || !/^image\//.test(item.mime_type || '')) continue

        let name = decodeURIComponent(path.basename(new URL(src).pathname))
          .replace(/[^a-zA-Z0-9._-]/g, '_')
        while (seen.has(name)) name = `_${name}`
        seen.add(name)

        try {
          const res = await fetch(src)
          if (!res.ok) { console.warn(`  skip (${res.status}): ${src}`); continue }
          await pipeline(Readable.fromWeb(res.body), createWriteStream(path.join(OUT_DIR, name)))
          manifest.push({
            src: `images/library/${name}`,
            alt: stripHtml(item.alt_text || item.title?.rendered || 'Earth Movers International'),
          })
          console.log(`  saved: ${name}`)
        } catch (err) {
          console.warn(`  failed: ${src} — ${err.message}`)
        }
      }
      page += 1
    }
  } catch (err) {
    console.error(`\nCould not fetch the media library from ${SITE}:\n  ${err.message}`)
    console.error('Run this script from a machine (or session) with network access to that domain.')
    process.exitCode = 1
    if (!manifest.length) return
  }

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
  console.log(`\nDone: ${manifest.length} images in ${OUT_DIR}, manifest written to ${MANIFEST}`)
  console.log('Rebuild the site (npm run build) to include them.')
}

main()
