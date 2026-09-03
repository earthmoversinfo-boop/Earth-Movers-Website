// ---------------------------------------------------------------------------
// Single source of truth for page metadata. Used by the client (to update the
// document head on navigation) and by the prerender script (to bake real tags
// into each static HTML file, which is what search engines actually read).
//
// Every page exists in English at the root and in Arabic under /ar with the
// same slug, so each one declares the other as an hreflang alternate and the
// English URL as x-default.
// ---------------------------------------------------------------------------

import { contentFor } from './data/content.js'
import { emiratesFor, resolveServiceSegment, taxonomyFor } from './data/services.js'
import { guideFor, guidesFor } from './data/guides.js'
import { alternatesFor, DEFAULT_LOCALE, LOCALE_META, localeHref, splitLocale } from './i18n/locale.js'
import { translator } from './i18n/ui.js'
import { SITE_VERIFICATION } from './analytics.config.js'

export const SITE = 'https://www.earthmoversint.com'

const page = (locale, base, title, description, extra = {}) => ({
  locale,
  dir: LOCALE_META[locale].dir,
  htmlLang: LOCALE_META[locale].htmlLang,
  title,
  description,
  path: localeHref(base, locale),
  canonical: `${SITE}${localeHref(base, locale) === '/' ? '/' : localeHref(base, locale)}`,
  alternates: alternatesFor(base).map((a) => ({
    hreflang: LOCALE_META[a.locale].hreflang,
    href: `${SITE}${a.path === '/' ? '/' : a.path}`,
  })),
  xDefault: `${SITE}${localeHref(base, DEFAULT_LOCALE) === '/' ? '/' : localeHref(base, DEFAULT_LOCALE)}`,
  ...extra,
})

function organisationFor(locale) {
  const { company } = contentFor(locale)
  const t = translator(locale)
  return {
    '@type': 'GeneralContractor',
    '@id': `${SITE}/#organization`,
    name: t('seo.brand'),
    alternateName: 'Earth Movers International',
    url: SITE,
    telephone: company.phone,
    email: company.email,
    foundingDate: '1990',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.slice(0, 2).join(', '),
      addressLocality: company.address[2],
      addressCountry: 'AE',
    },
    areaServed: taxonomyFor(locale).emirates.map((e) => e.name),
  }
}

function breadcrumbs(locale, items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE}${localeHref(it.path, locale)}`,
    })),
  }
}

// The photographs on /projects are the company's own, and each one carries a
// caption that says what it shows. Declaring them lets the album be understood
// as a gallery of original work rather than page decoration.
function albumGallery(locale) {
  const { albums } = contentFor(locale)
  const t = translator(locale)
  return {
    '@type': 'ImageGallery',
    name: t('album.title'),
    description: t('album.lead'),
    url: `${SITE}${localeHref('/projects', locale)}`,
    associatedMedia: albums.flatMap((album) =>
      album.photos.map((photo) => ({
        '@type': 'ImageObject',
        contentUrl: `${SITE}/images/projects/${photo.src}-full.jpg`,
        thumbnailUrl: `${SITE}/images/projects/${photo.src}.jpg`,
        caption: photo.alt,
        creditText: t('seo.brand'),
        ...(album.place ? { contentLocation: { '@type': 'Place', name: album.place } } : {}),
      }))
    ),
  }
}

function staticSeo(locale, base) {
  const t = translator(locale)
  const { company } = contentFor(locale)
  const brand = t('seo.brand')
  const map = {
    '/': ['seo.homeTitle', 'seo.homeDesc'],
    '/about': ['seo.aboutTitle', 'seo.aboutDesc'],
    '/projects': ['seo.projectsTitle', 'seo.projectsDesc'],
    '/contact': ['seo.contactTitle', 'seo.contactDesc'],
  }
  if (!map[base]) return null
  const [titleKey, descKey] = map[base]
  const jsonLd = [organisationFor(locale)]
  if (base === '/projects') jsonLd.push(albumGallery(locale))
  return page(
    locale,
    base,
    t(titleKey, { brand }),
    t(descKey, { brand, phone: company.phone }),
    { jsonLd }
  )
}

function servicesIndexSeo(locale) {
  const t = translator(locale)
  const tax = taxonomyFor(locale)
  const brand = t('seo.brand')
  return page(locale, '/services', t('seo.servicesTitle', { brand }), t('seo.servicesDesc'), {
    jsonLd: [
      breadcrumbs(locale, [
        { name: t('crumb.home'), path: '/' },
        { name: t('crumb.services'), path: '/services' },
      ]),
      {
        '@type': 'ItemList',
        itemListElement: tax.categories.map((c, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: c.name,
          url: `${SITE}${localeHref(`/services/${c.slug}`, locale)}`,
        })),
      },
    ],
  })
}

function categorySeo(locale, category) {
  const t = translator(locale)
  const brand = t('seo.brand')
  const list = emiratesFor(category, locale)
  const where = category.coverage === 'all' ? t('cov.whereAll') : t('cov.dubai')
  const sep = locale === 'ar' ? '، ' : ', '
  const names = category.services.map((s) => s.name).join(sep)
  return page(
    locale,
    `/services/${category.slug}`,
    t('seo.categoryTitle', {
      category: category.name,
      where,
      first: category.services[0].name,
      brand,
    }),
    t('seo.categoryDesc', {
      category: category.name,
      where,
      list: locale === 'ar' ? names : names.toLowerCase(),
      emirates: list.map((e) => e.name).join(sep),
    }),
    {
      jsonLd: [
        breadcrumbs(locale, [
          { name: t('crumb.home'), path: '/' },
          { name: t('crumb.services'), path: '/services' },
          { name: category.name, path: `/services/${category.slug}` },
        ]),
        {
          '@type': 'Service',
          name: `${category.name} — ${brand}`,
          serviceType: category.name,
          provider: organisationFor(locale),
          areaServed: list.map((e) => ({ '@type': 'AdministrativeArea', name: e.name })),
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: category.name,
            itemListElement: category.services.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: s.name,
                description: s.text,
                url: `${SITE}${localeHref(`/services/${category.slug}/${s.slug}`, locale)}`,
              },
            })),
          },
        },
        {
          '@type': 'ItemList',
          name: category.name,
          itemListElement: category.services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: s.name,
            url: `${SITE}${localeHref(`/services/${category.slug}/${s.slug}`, locale)}`,
          })),
        },
      ],
    }
  )
}

function serviceSeo(locale, category, service) {
  const t = translator(locale)
  const brand = t('seo.brand')
  const list = emiratesFor(category, locale)
  const sep = locale === 'ar' ? '، ' : ', '
  return page(
    locale,
    `/services/${category.slug}/${service.slug}`,
    t('seo.serviceTitle', { h1: service.h1, brand }),
    t('seo.serviceDesc', {
      lead: service.lead,
      brand,
      service: locale === 'ar' ? service.name : service.name.toLowerCase(),
      emirates: list.map((e) => e.name).join(sep),
    }).slice(0, 320),
    {
      jsonLd: [
        breadcrumbs(locale, [
          { name: t('crumb.home'), path: '/' },
          { name: t('crumb.services'), path: '/services' },
          { name: category.name, path: `/services/${category.slug}` },
          { name: service.name, path: `/services/${category.slug}/${service.slug}` },
        ]),
        {
          '@type': 'Service',
          name: service.h1,
          serviceType: service.name,
          description: service.intro,
          provider: organisationFor(locale),
          areaServed: list.map((e) => ({ '@type': 'AdministrativeArea', name: e.name })),
          isPartOf: {
            '@type': 'Service',
            name: category.name,
            url: `${SITE}${localeHref(`/services/${category.slug}`, locale)}`,
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: service.name,
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

function locationSeo(locale, category, emirate) {
  const t = translator(locale)
  const brand = t('seo.brand')
  const sep = locale === 'ar' ? '، ' : ', '
  const lead = category.services.slice(0, 3).map((s) => s.name).join(sep)
  const names = category.services.map((s) => s.name).join(sep)
  const { company } = contentFor(locale)
  return page(
    locale,
    `/services/${category.slug}/${emirate.slug}`,
    t('seo.locationTitle', { category: category.name, emirate: emirate.name, lead, brand }),
    t('seo.locationDesc', {
      category: category.name,
      emirate: emirate.name,
      list: locale === 'ar' ? names : names.toLowerCase(),
      authority: emirate.authority,
    }),
    {
      jsonLd: [
        breadcrumbs(locale, [
          { name: t('crumb.home'), path: '/' },
          { name: t('crumb.services'), path: '/services' },
          { name: category.name, path: `/services/${category.slug}` },
          { name: emirate.name, path: `/services/${category.slug}/${emirate.slug}` },
        ]),
        {
          '@type': 'Service',
          name: t('loc.inEmirate', { name: category.name, emirate: emirate.name }),
          serviceType: category.name,
          provider: organisationFor(locale),
          areaServed: { '@type': 'AdministrativeArea', name: emirate.name },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: t('loc.inEmirate', { name: category.name, emirate: emirate.name }),
            itemListElement: category.services.map((s) => ({
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: t('loc.inEmirate', { name: s.name, emirate: emirate.name }),
                description: s.text,
                url: `${SITE}${localeHref(`/services/${category.slug}/${s.slug}`, locale)}`,
              },
            })),
          },
        },
        {
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: t('loc.q1', { category: category.name, emirate: emirate.name }),
              acceptedAnswer: {
                '@type': 'Answer',
                text: t('loc.a1', {
                  category: category.name,
                  emirate: emirate.name,
                  areas: emirate.areas,
                  authority: emirate.authority,
                }),
              },
            },
            {
              '@type': 'Question',
              name: t('loc.q3', {
                service: category.services[0].name,
                emirate: emirate.name,
              }),
              acceptedAnswer: {
                '@type': 'Answer',
                text: t('svc.priceA', { email: company.email, phone: company.phone }),
              },
            },
          ],
        },
      ],
    }
  )
}

function guidesIndexSeo(locale) {
  const t = translator(locale)
  const brand = t('seo.brand')
  return page(locale, '/guides', t('seo.guidesTitle', { brand }), t('seo.guidesDesc'), {
    jsonLd: [
      breadcrumbs(locale, [
        { name: t('crumb.home'), path: '/' },
        { name: t('guides.crumb'), path: '/guides' },
      ]),
      {
        '@type': 'ItemList',
        itemListElement: guidesFor(locale).map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: g.title,
          url: `${SITE}${localeHref(`/${g.slug}`, locale)}`,
        })),
      },
    ],
  })
}

// A guide is an Article rather than a Service page: it answers a question
// instead of selling the work, and the structured data should say so.
function guideSeo(locale, guide) {
  const t = translator(locale)
  const brand = t('seo.brand')
  return page(
    locale,
    `/${guide.slug}`,
    t('seo.guideTitle', { title: guide.title, brand }),
    guide.lead,
    {
      jsonLd: [
        breadcrumbs(locale, [
          { name: t('crumb.home'), path: '/' },
          { name: t('guides.crumb'), path: '/guides' },
          { name: guide.title, path: `/${guide.slug}` },
        ]),
        {
          '@type': 'Article',
          headline: guide.title,
          description: guide.lead,
          inLanguage: LOCALE_META[locale].htmlLang,
          dateModified: guide.updated,
          mainEntityOfPage: `${SITE}${localeHref(`/${guide.slug}`, locale)}`,
          author: { '@id': `${SITE}/#organization` },
          publisher: { '@id': `${SITE}/#organization` },
        },
        organisationFor(locale),
      ],
    }
  )
}

export function seoFor(pathname) {
  const { locale, base } = splitLocale(pathname)
  const t = translator(locale)

  const stat = staticSeo(locale, base)
  if (stat) return stat
  if (base === '/services') return servicesIndexSeo(locale)
  if (base === '/guides') return guidesIndexSeo(locale)

  const guide = guideFor(base.replace(/^\//, ''), locale)
  if (guide) return guideSeo(locale, guide)

  const m = base.match(/^\/services\/([a-z-]+)(?:\/([a-z-]+))?$/)
  if (m) {
    const category = taxonomyFor(locale).categoryBySlug[m[1]]
    if (category && !m[2]) return categorySeo(locale, category)
    if (category) {
      const found = resolveServiceSegment(category, m[2], locale)
      if (found.kind === 'service') return serviceSeo(locale, category, found.service)
      if (found.kind === 'emirate') return locationSeo(locale, category, found.emirate)
    }
  }

  return page(
    locale,
    base,
    t('seo.notFoundTitle', { brand: t('seo.brand') }),
    t('seo.notFoundDesc'),
    { noindex: true }
  )
}

// Full <head> markup for a route — used by the prerender script.
export function headTagsFor(pathname) {
  const s = seoFor(pathname)
  const esc = (x) => String(x).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')
  // Search Console proves ownership from a meta tag in the served HTML, so it
  // has to be baked in by the prerenderer — a tag added by JavaScript after
  // load is not there when Google fetches the page.
  const verification = SITE_VERIFICATION
    ? [`<meta name="google-site-verification" content="${esc(SITE_VERIFICATION)}">`]
    : []
  const graph = {
    '@context': 'https://schema.org',
    '@graph': (s.jsonLd || [organisationFor(s.locale)]).map((n) => ({ ...n })),
  }
  return [
    `<title>${esc(s.title)}</title>`,
    `<meta name="description" content="${esc(s.description)}">`,
    ...verification,
    s.noindex
      ? '<meta name="robots" content="noindex,follow">'
      : '<meta name="robots" content="index,follow,max-image-preview:large">',
    `<link rel="canonical" href="${esc(s.canonical)}">`,
    ...(s.noindex
      ? []
      : [
          ...s.alternates.map(
            (a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}">`
          ),
          `<link rel="alternate" hreflang="x-default" href="${esc(s.xDefault)}">`,
        ]),
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${esc(translator(s.locale)('seo.brand'))}">`,
    `<meta property="og:title" content="${esc(s.title)}">`,
    `<meta property="og:description" content="${esc(s.description)}">`,
    `<meta property="og:url" content="${esc(s.canonical)}">`,
    `<meta property="og:image" content="${SITE}/images/hero-slide-1.jpg">`,
    `<meta property="og:locale" content="${s.locale === 'ar' ? 'ar_AE' : 'en_AE'}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="geo.region" content="AE-DU">`,
    `<script type="application/ld+json">${JSON.stringify(graph)}</script>`,
  ].join('\n    ')
}
