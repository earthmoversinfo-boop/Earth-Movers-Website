// ---------------------------------------------------------------------------
// Single source of truth for page metadata. Used by the client (to update the
// document head on navigation) and by the prerender script (to bake real tags
// into each static HTML file, which is what search engines actually read).
// ---------------------------------------------------------------------------

import { company } from './data/content.js'
import {
  serviceCategories,
  categoryBySlug,
  emirateBySlug,
  emiratesFor,
  resolveServiceSegment,
} from './data/services.js'

export const SITE = 'https://www.earthmoversint.com'
const BRAND = 'Earth Movers International'

const page = (title, description, path, extra = {}) => ({
  title,
  description,
  canonical: `${SITE}${path === '/' ? '/' : path}`,
  path,
  ...extra,
})

const organisation = {
  '@type': 'GeneralContractor',
  '@id': `${SITE}/#organization`,
  name: BRAND,
  url: SITE,
  telephone: company.phone,
  email: company.email,
  foundingDate: '1990',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Capital Golden Tower, Office 706, 7th Floor',
    addressLocality: 'Business Bay, Dubai',
    addressCountry: 'AE',
  },
  areaServed: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah', 'Fujairah', 'Umm Al Quwain'],
}

function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${it.path}`,
    })),
  }
}

const STATIC = {
  '/': page(
    `RTA-Approved Road & Earthworks Contractor in Dubai | ${BRAND}`,
    'Earth Movers International is an RTA-approved road and earthworks contractor in Dubai, UAE. Excavation, road construction, asphalt works, traffic management and utilities across all seven emirates since 1990.',
    '/'
  ),
  '/about': page(
    `About Us — Earthworks & Road Contractor Since 1990 | ${BRAND}`,
    'Founded in Montreal in 1990 and established in Dubai since 2005, Earth Movers International delivers earthworks, road construction and heavy equipment services across the UAE.',
    '/about'
  ),
  '/projects': page(
    `Projects — Road & Earthworks Case Studies in the UAE | ${BRAND}`,
    'Selected road, earthworks and marine projects delivered for Fujairah Cement Industry, Dubai Municipality and Nakheel PJSC across the UAE.',
    '/projects'
  ),
  '/contact': page(
    `Contact — Request a Quote | ${BRAND}, Dubai`,
    `Contact Earth Movers International in Business Bay, Dubai. Call ${company.phone} or send your scope and drawings for a priced proposal.`,
    '/contact'
  ),
}

function categorySeo(category) {
  const list = emiratesFor(category)
  const where = category.coverage === 'all' ? 'the UAE' : 'Dubai'
  const names = category.services.map((s) => s.name).join(', ')
  return page(
    `${category.name} Contractor in ${where} — ${category.services[0].name} & More | ${BRAND}`,
    `${category.name} services across ${where}: ${names.toLowerCase()}. RTA-approved contractor with its own fleet, operating in ${list.map((e) => e.name).join(', ')}.`,
    `/services/${category.slug}`,
    {
      jsonLd: [
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: category.name, path: `/services/${category.slug}` },
        ]),
        {
          '@type': 'Service',
          name: `${category.name} — ${BRAND}`,
          serviceType: category.name,
          provider: organisation,
          areaServed: list.map((e) => ({ '@type': 'AdministrativeArea', name: e.name })),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${category.name} services`,
            itemListElement: category.services.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.name,
                description: s.text,
                url: `${SITE}/services/${category.slug}/${s.slug}`,
              },
            })),
          },
        },
        {
          '@type': 'ItemList',
          name: `${category.name} services`,
          itemListElement: category.services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.name,
            url: `${SITE}/services/${category.slug}/${s.slug}`,
          })),
        },
      ],
    }
  )
}

function serviceSeo(category, service) {
  const list = emiratesFor(category)
  const where = category.coverage === 'all' ? 'the UAE' : 'Dubai'
  return page(
    `${service.h1} | ${BRAND}`,
    `${service.lead} ${BRAND} is an RTA-approved contractor delivering ${service.name.toLowerCase()} across ${list.map((e) => e.name).join(', ')}.`.slice(0, 300),
    `/services/${category.slug}/${service.slug}`,
    {
      jsonLd: [
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: category.name, path: `/services/${category.slug}` },
          { name: service.name, path: `/services/${category.slug}/${service.slug}` },
        ]),
        {
          '@type': 'Service',
          name: service.h1,
          serviceType: service.name,
          description: service.intro,
          provider: organisation,
          areaServed: list.map((e) => ({ '@type': 'AdministrativeArea', name: e.name })),
          isPartOf: {
            '@type': 'Service',
            name: category.name,
            url: `${SITE}/services/${category.slug}`,
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${service.name} — what is included`,
            itemListElement: service.scope.map((item) => ({
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: item },
            })),
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
      ],
    }
  )
}

function locationSeo(category, emirate) {
  const lead = category.services.slice(0, 3).map((s) => s.name).join(', ')
  return page(
    `${category.name} Contractor in ${emirate.name} — ${lead} | ${BRAND}`,
    `${category.name} in ${emirate.name}: ${category.services.map((s) => s.name.toLowerCase()).join(', ')}. Approved contractor working to ${emirate.authority} standards, with our own plant and operators.`,
    `/services/${category.slug}/${emirate.slug}`,
    {
      jsonLd: [
        breadcrumbs([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: category.name, path: `/services/${category.slug}` },
          { name: emirate.name, path: `/services/${category.slug}/${emirate.slug}` },
        ]),
        {
          '@type': 'Service',
          name: `${category.name} in ${emirate.name}`,
          serviceType: category.name,
          provider: organisation,
          areaServed: { '@type': 'AdministrativeArea', name: emirate.name },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: `${category.name} in ${emirate.name}`,
            itemListElement: category.services.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: `${s.name} in ${emirate.name}`,
                description: s.text,
              },
            })),
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `Do you carry out ${category.name.toLowerCase()} in ${emirate.name}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `Yes. ${BRAND} delivers ${category.name.toLowerCase()} across ${emirate.name}, including ${emirate.areas}, working to ${emirate.authority} standards with our own excavators, dozers, graders and rollers.`,
              },
            },
            {
              '@type': 'Question',
              name: `How do I get a quote for ${category.services[0].name.toLowerCase()} in ${emirate.name}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `Send your drawings, bill of quantities or a description of the scope to ${company.email}, or call ${company.phone}. We walk the ground where needed and return a priced proposal.`,
              },
            },
          ],
        },
      ],
    }
  )
}

export function seoFor(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  if (STATIC[path]) return { ...STATIC[path], jsonLd: [organisation] }

  if (path === '/services') {
    return page(
      `Services — Earth Works, Road Works, Traffic Management & Utilities | ${BRAND}`,
      'Earthworks, road works, traffic management and utilities across the UAE. Excavation, asphalt, access roads, RTA permits, entry-exit works and service protection from an RTA-approved contractor.',
      '/services',
      {
        jsonLd: [
          breadcrumbs([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
          {
            '@type': 'ItemList',
            itemListElement: serviceCategories.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.name,
              url: `${SITE}/services/${c.slug}`,
            })),
          },
        ],
      }
    )
  }

  const m = path.match(/^\/services\/([a-z-]+)(?:\/([a-z-]+))?$/)
  if (m) {
    const category = categoryBySlug[m[1]]
    if (category && !m[2]) return categorySeo(category)
    if (category) {
      const found = resolveServiceSegment(category, m[2])
      if (found.kind === 'service') return serviceSeo(category, found.service)
      if (found.kind === 'emirate') return locationSeo(category, found.emirate)
    }
  }

  return page(`Page Not Found | ${BRAND}`, 'The page you are looking for does not exist.', path, {
    noindex: true,
  })
}

// Full <head> markup for a route — used by the prerender script.
export function headTagsFor(pathname) {
  const s = seoFor(pathname)
  const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
  const graph = {
    '@context': 'https://schema.org',
    '@graph': (s.jsonLd || [organisation]).map((n) => ({ ...n })),
  }
  return [
    `<title>${esc(s.title)}</title>`,
    `<meta name="description" content="${esc(s.description)}">`,
    s.noindex ? '<meta name="robots" content="noindex,follow">' : '<meta name="robots" content="index,follow,max-image-preview:large">',
    `<link rel="canonical" href="${esc(s.canonical)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${BRAND}">`,
    `<meta property="og:title" content="${esc(s.title)}">`,
    `<meta property="og:description" content="${esc(s.description)}">`,
    `<meta property="og:url" content="${esc(s.canonical)}">`,
    `<meta property="og:image" content="${SITE}/images/hero-slide-1.jpg">`,
    `<meta property="og:locale" content="en_AE">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="geo.region" content="AE-DU">`,
    `<script type="application/ld+json">${JSON.stringify(graph)}</script>`,
  ].join('\n    ')
}
