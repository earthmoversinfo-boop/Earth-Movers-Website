import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { seoFor } from '../seo.js'
import { installLinkTracking, trackPageView } from '../lib/analytics.js'

// Fires a page_view on every route, including the first. React 18's strict
// mode runs effects twice in development, and a route can re-render without
// the path changing, so the last path sent is remembered and a repeat is
// dropped — a double-counted landing page quietly halves every rate you go on
// to calculate.
export default function useAnalytics() {
  const { pathname } = useLocation()
  const lastSent = useRef(null)

  useEffect(() => {
    installLinkTracking()
  }, [])

  useEffect(() => {
    if (lastSent.current === pathname) return
    lastSent.current = pathname
    // The title is taken from the SEO table rather than document.title so the
    // value does not depend on whether useSeo's effect has run yet.
    trackPageView(pathname, seoFor(pathname).title)
  }, [pathname])
}
