// ---------------------------------------------------------------------------
// Google tag wiring.
//
// Two jobs the default snippet does badly on a site like this one:
//
// 1. This is a single-page app. The tag fires one page_view on load and then
//    never again, so every route a visitor reaches by clicking is invisible.
//    Automatic page_view is switched off and fired manually on each route
//    change instead.
//
// 2. A hit that only says "/services/road-works/fujairah" makes you parse
//    URLs in a report. Every event carries the page's meaning as parameters —
//    page_type, category, service, emirate, locale — so GA4 can group and
//    compare without string surgery. Register these as custom dimensions in
//    GA4 (Admin -> Custom definitions) and they become usable in reports;
//    unregistered, they are still collected but only visible in DebugView.
//
// Nothing loads while the IDs in analytics.config.js are empty.
// ---------------------------------------------------------------------------

import { ADS_ID, DEBUG, GA4_ID, GTM_ID } from '../analytics.config.js'
import { splitLocale } from '../i18n/locale.js'
import { resolveServiceSegment, taxonomyFor } from '../data/services.js'
import { guideFor } from '../data/guides.js'

const isBrowser = typeof window !== 'undefined'
const enabled = Boolean(GA4_ID || ADS_ID || GTM_ID)

let loaded = false

// gtag pushes its `arguments` object, not an array. Google's processor relies
// on that shape, so this mirrors the official snippet rather than improving on
// it — a plain array is the classic way to end up with a tag that loads and
// silently records nothing.
function gtag() {
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments)
}

// Classifies a path into the things you will actually want to segment by.
// Kept here rather than in the components so every event describes a page the
// same way, whether it came from a route change or a button.
export function describePath(pathname) {
  const { locale, base } = splitLocale(pathname)
  const out = { locale, page_path: base }

  if (base === '/') return { ...out, page_type: 'home' }
  if (base === '/about') return { ...out, page_type: 'about' }
  if (base === '/projects') return { ...out, page_type: 'projects' }
  if (base === '/contact') return { ...out, page_type: 'contact' }
  if (base === '/services') return { ...out, page_type: 'services_index' }
  if (base === '/guides') return { ...out, page_type: 'guides_index' }

  const m = base.match(/^\/services\/([a-z-]+)(?:\/([a-z-]+))?$/)
  if (m) {
    const category = taxonomyFor(locale).categoryBySlug[m[1]]
    if (category && !m[2]) {
      return { ...out, page_type: 'service_category', category: m[1] }
    }
    if (category) {
      const found = resolveServiceSegment(category, m[2], locale)
      if (found.kind === 'service') {
        return { ...out, page_type: 'service', category: m[1], service: m[2] }
      }
      if (found.kind === 'emirate') {
        return { ...out, page_type: 'service_location', category: m[1], emirate: m[2] }
      }
    }
  }

  if (guideFor(base.replace(/^\//, ''), locale)) {
    return { ...out, page_type: 'guide', guide: base.replace(/^\//, '') }
  }

  return { ...out, page_type: 'not_found' }
}

// Injects the tag once, on the first route the visitor lands on.
function load() {
  if (loaded || !enabled || !isBrowser) return
  loaded = true

  const src = GTM_ID
    ? `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    : `https://www.googletagmanager.com/gtag/js?id=${GA4_ID || ADS_ID}`

  const tag = document.createElement('script')
  tag.async = true
  tag.src = src
  document.head.appendChild(tag)

  if (GTM_ID) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' })
    return
  }

  gtag('js', new Date())
  // page_view is sent by hand on every route change, including the first, so
  // the automatic one would double-count the landing page.
  if (GA4_ID) gtag('config', GA4_ID, { send_page_view: false, debug_mode: DEBUG })
  if (ADS_ID) gtag('config', ADS_ID)
}

export function trackPageView(pathname, title) {
  if (!enabled || !isBrowser) return
  load()
  const info = describePath(pathname)
  const payload = {
    ...info,
    page_title: title || document.title,
    page_location: window.location.href,
    // content_group is a first-class GA4 dimension, so page types are usable
    // in reports without registering anything.
    content_group: info.page_type,
  }
  if (DEBUG) console.info('[analytics] page_view', payload)
  if (GTM_ID) window.dataLayer.push({ event: 'page_view', ...payload })
  else gtag('event', 'page_view', payload)
}

// One entry point for the things that are worth money: a call, a WhatsApp
// message, an email, a submitted enquiry. Each carries the page it happened
// on, so you can see which service or emirate page actually produces work
// rather than only which one gets traffic.
export function trackEvent(name, params = {}) {
  if (!enabled || !isBrowser) return
  load()
  const payload = { ...describePath(window.location.pathname), ...params }
  if (DEBUG) console.info(`[analytics] ${name}`, payload)
  if (GTM_ID) window.dataLayer.push({ event: name, ...payload })
  else gtag('event', name, payload)
}

export const ANALYTICS_ENABLED = enabled

// One delegated listener rather than an onClick on every phone, email and
// WhatsApp link. There are nine of them across the header, footer, CTA band,
// contact page and the floating button, and a handler attached to each is a
// handler somebody forgets on the tenth. This also catches links added later
// without anyone remembering analytics exists.
//
// Uses capture so it still records the click when something downstream calls
// stopPropagation, and reads the href off the closest anchor so a click on an
// icon inside the link still counts.
export function installLinkTracking() {
  if (!enabled || !isBrowser || installLinkTracking.done) return
  installLinkTracking.done = true

  document.addEventListener(
    'click',
    (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href]') : null
      if (!a) return
      const href = a.getAttribute('href') || ''

      if (href.startsWith('tel:')) {
        trackEvent('click_call', { method: 'phone', link_url: href })
      } else if (href.startsWith('mailto:')) {
        trackEvent('click_email', { method: 'email', link_url: href })
      } else if (/(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/.test(href)) {
        trackEvent('click_whatsapp', { method: 'whatsapp' })
      }
    },
    true
  )
}
