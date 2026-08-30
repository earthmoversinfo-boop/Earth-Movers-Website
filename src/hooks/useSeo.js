import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { seoFor } from '../seo.js'

// Keeps the document head in step with client-side navigation. The prerendered
// HTML already carries the correct tags on first load; this handles what
// happens after the visitor starts clicking.
export default function useSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const s = seoFor(pathname)
    document.title = s.title

    const set = (selector, tag, attrs) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement(tag)
        document.head.appendChild(el)
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
    }

    set('meta[name="description"]', 'meta', { name: 'description', content: s.description })
    set('link[rel="canonical"]', 'link', { rel: 'canonical', href: s.canonical })
    set('meta[property="og:title"]', 'meta', { property: 'og:title', content: s.title })
    set('meta[property="og:description"]', 'meta', { property: 'og:description', content: s.description })
    set('meta[property="og:url"]', 'meta', { property: 'og:url', content: s.canonical })
    set('meta[name="robots"]', 'meta', {
      name: 'robots',
      content: s.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large',
    })
  }, [pathname])
}
