// ---------------------------------------------------------------------------
// Image paths are stored absolute ("/images/x.jpg") because the site normally
// serves from the root of its own domain. A GitHub Pages project site serves
// from /<repo>/ instead, so every one of those paths has to be prefixed with
// whatever base the build was made for.
//
// Vite exposes that as BASE_URL — "/" for the real site, "/Earth-Movers-Website./"
// for the staging deploy — so this is a no-op in production.
// ---------------------------------------------------------------------------

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '')

export function asset(path) {
  if (!path || !path.startsWith('/')) return path
  return BASE + path
}
