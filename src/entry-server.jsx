import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppRoutes } from './App.jsx'
import { allServiceRoutes } from './data/services.js'
import { headTagsFor, SITE } from './seo.js'

// Renders a route to static HTML so crawlers (and the first paint) get real
// content instead of an empty <div id="root">.
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  )
}

export const routes = ['/', '/about', '/projects', '/contact', ...allServiceRoutes()]
export { headTagsFor, SITE }
