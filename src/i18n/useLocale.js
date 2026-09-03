import { useLocation } from 'react-router-dom'
import { LOCALE_META, alternatesFor, localeHref, splitLocale } from './locale.js'
import { translator } from './ui.js'
import { taxonomyFor } from '../data/services.js'
import { contentFor } from '../data/content.js'

// One hook for everything a component needs to render in the current language:
// the locale itself, its text direction, the translator, the locale's taxonomy
// and content, and a helper that keeps every internal link inside the language
// the visitor is already reading.
export default function useLocale() {
  const { pathname } = useLocation()
  const { locale, base } = splitLocale(pathname)
  const meta = LOCALE_META[locale] || LOCALE_META.en

  return {
    locale,
    dir: meta.dir,
    isRtl: meta.dir === 'rtl',
    meta,
    base,
    t: translator(locale),
    tax: taxonomyFor(locale),
    content: contentFor(locale),
    // '/services/x' -> '/ar/services/x' while reading Arabic
    href: (path) => localeHref(path, locale),
    alternates: alternatesFor(base),
  }
}
