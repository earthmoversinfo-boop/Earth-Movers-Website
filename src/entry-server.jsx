import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App.jsx'
import { allServiceRoutes } from './data/services.js'
import { headTagsFor, seoFor, SITE } from './seo.js'
import { LOCALES, localeHref } from './i18n/locale.js'

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  )
}

// Every page exists in both languages at the same slug, so the route list is
// the language-neutral set mounted once per locale.
const BASE_ROUTES = ['/', '/about', '/projects', '/contact', ...allServiceRoutes()]

export const routes = LOCALES.flatMap((locale) =>
  BASE_ROUTES.map((base) => localeHref(base, locale))
)

export { headTagsFor, seoFor, SITE, BASE_ROUTES, LOCALES, localeHref }
