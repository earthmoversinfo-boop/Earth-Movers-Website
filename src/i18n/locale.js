// ---------------------------------------------------------------------------
// Locale plumbing. The site ships in English at the root and in Arabic under
// an /ar prefix — same slugs in both, so every page has a direct counterpart
// and the two can be declared as hreflang alternates of one another.
//
//   /services/road-works/asphalt-works
//   /ar/services/road-works/asphalt-works
//
// Everything here is pure so the prerenderer can use it server-side.
// ---------------------------------------------------------------------------

export const LOCALES = ['en', 'ar']
export const DEFAULT_LOCALE = 'en'

export const LOCALE_META = {
  en: { code: 'en', htmlLang: 'en', hreflang: 'en-AE', dir: 'ltr', name: 'English', short: 'EN' },
  ar: { code: 'ar', htmlLang: 'ar', hreflang: 'ar-AE', dir: 'rtl', name: 'العربية', short: 'ع' },
}

export const dirFor = (locale) => LOCALE_META[locale]?.dir || 'ltr'

const trimTrailing = (p) => p.replace(/\/+$/, '') || '/'

// '/ar/services/x/' -> { locale: 'ar', base: '/services/x' }
// '/services/x'     -> { locale: 'en', base: '/services/x' }
export function splitLocale(pathname) {
  const path = trimTrailing(pathname || '/')
  const m = path.match(/^\/(ar)(\/.*)?$/)
  if (m) return { locale: m[1], base: trimTrailing(m[2] || '/') }
  return { locale: DEFAULT_LOCALE, base: path }
}

// '/services/x' in 'ar' -> '/ar/services/x'
export function localeHref(base, locale = DEFAULT_LOCALE) {
  const path = trimTrailing(base)
  if (locale === DEFAULT_LOCALE) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

// Both URLs for one logical page, for hreflang and the language switcher.
export function alternatesFor(base) {
  return LOCALES.map((locale) => ({ locale, path: localeHref(base, locale) }))
}
