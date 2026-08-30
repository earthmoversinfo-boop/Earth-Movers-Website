// Bundles the hash-routed build into one self-contained HTML file (fonts and
// images inlined) for sharing as a preview link. Not used for deployment.

import fs from 'node:fs'
import path from 'node:path'

const dist = path.resolve('dist')
const out = process.argv[2] || path.resolve('preview.html')
const assets = fs.readdirSync(path.join(dist, 'assets'))
const mime = { woff2: 'font/woff2', woff: 'font/woff', jpg: 'image/jpeg', png: 'image/png' }
const dataUri = (p) => `data:${mime[p.split('.').pop()]};base64,${fs.readFileSync(p).toString('base64')}`

let css = fs.readFileSync(path.join(dist, 'assets', assets.find((f) => f.endsWith('.css'))), 'utf8')
css = css.replace(/url\((\.\/)?([^)'"]+\.(woff2|woff))\)/g, (m, _d, file) => {
  const fp = path.join(dist, 'assets', path.basename(file))
  return fs.existsSync(fp) ? `url(${dataUri(fp)})` : m
})

let js = fs.readFileSync(path.join(dist, 'assets', assets.find((f) => f.endsWith('.js'))), 'utf8')

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]
  )

// longest paths first so /images/library/x.jpg never collides with a prefix
const files = walk(path.join(dist, 'images'))
  .filter((f) => /\.(jpg|png)$/.test(f))
  .map((f) => ({ f, rel: '/' + path.relative(dist, f).split(path.sep).join('/') }))
  .sort((a, b) => b.rel.length - a.rel.length)

for (const { f, rel } of files) js = js.split(rel).join(dataUri(f))
js = js.replace(/<\/script/gi, '<\\/script')

const leftover = (js.match(/"\/images\/[a-z0-9/-]+\.(jpg|png)"/g) || []).length

fs.writeFileSync(
  out,
  `<title>Earth Movers International</title>
<meta name="description" content="Preview — Earth Movers International, Dubai. Earthworks, road works, traffic management and utilities.">
<style>
${css}
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`
)

console.log(
  `preview bundle -> ${out} (${(fs.statSync(out).size / 1048576).toFixed(2)} MB, ${files.length} images inlined, ${leftover} paths left)`
)
