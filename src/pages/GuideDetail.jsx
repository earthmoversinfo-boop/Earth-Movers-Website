import { Link, useLocation } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import NotFound from './NotFound.jsx'
import useLocale from '../i18n/useLocale.js'
import { guideFor } from '../data/guides.js'
import { taxonomyFor } from '../data/services.js'

// Section headings become anchor targets for the contents rail. Arabic
// headings carry no ASCII, so a positional id is used rather than a slug.
function anchor(h) {
  const slug = h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  return slug || `s-${h.length}`
}

// Resolves the service a `related` path points at, so the hand-off cards carry
// the service's own name in the reader's language rather than a raw slug.
function serviceLabel(path, locale) {
  const m = path.match(/^\/services\/([a-z-]+)(?:\/([a-z-]+))?$/)
  if (!m) return null
  const tax = taxonomyFor(locale)
  const category = tax.categoryBySlug[m[1]]
  if (!category) return null
  if (!m[2]) return { name: category.name, note: category.tagline }
  const service = category.services.find((s) => s.slug === m[2])
  if (service) return { name: service.name, note: category.name }
  const emirate = tax.emirates.find((e) => e.slug === m[2])
  if (emirate) return { name: `${category.name} — ${emirate.name}`, note: emirate.authority }
  return null
}

export default function GuideDetail() {
  const { pathname } = useLocation()
  const { t, locale, href } = useLocale()
  const slug = pathname.replace(/^\/ar/, '').replace(/^\//, '').replace(/\/$/, '')
  const guide = guideFor(slug, locale)
  if (!guide) return <NotFound />

  const related = guide.related
    .map((path) => ({ path, label: serviceLabel(path, locale) }))
    .filter((r) => r.label)

  return (
    <main>
      <PageBanner
        eyebrow={t('guides.kicker')}
        title={guide.title}
        text={guide.lead}
        img={`/images/services/${slug === 'excavation-in-construction' ? 'excavation' : 'asphalt-works'}.jpg`}
      />

      <section className="section">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: t('crumb.home'), path: '/' },
              { name: t('guides.crumb'), path: '/guides' },
              { name: guide.title, path: `/${guide.slug}` },
            ]}
          />

          <div className="guide-layout">
            <article className="guide-body">
              {guide.sections.map((sec, i) => (
                <Reveal key={sec.h} delay={i * 40}>
                  <h2 id={anchor(sec.h)}>{sec.h}</h2>
                  {sec.p.map((para) => (
                    <p key={para.slice(0, 40)}>{para}</p>
                  ))}
                </Reveal>
              ))}
            </article>

            {/* A long article read on a wide screen leaves the measure short of
                the grid. Rather than padding it out, the space carries the
                contents and the one thing a reader who got this far might
                actually want next. */}
            <aside className="guide-rail">
              <nav className="guide-toc" aria-label={t('guides.contents')}>
                <h2>{t('guides.contents')}</h2>
                <ol>
                  {guide.sections.map((sec) => (
                    <li key={sec.h}>
                      <a href={`#${anchor(sec.h)}`}>{sec.h}</a>
                    </li>
                  ))}
                </ol>
              </nav>
              <div className="guide-rail-cta">
                <p>{t('guides.railLead')}</p>
                <Link to={href('/contact')} className="btn btn-solid">
                  {t('cta.quote')}
                </Link>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="guide-related">
              <h2 className="display-sm">{t('guides.relatedTitle')}</h2>
              <p className="guide-related-lead">{t('guides.relatedLead')}</p>
              <div className="svc-card-grid">
                {related.map((r) => (
                  <Link key={r.path} to={href(r.path)} className="svc-card svc-card-plain">
                    <div className="svc-card-body">
                      <span className="svc-card-eyebrow">{r.label.note}</span>
                      <h3>{r.label.name}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA />
    </main>
  )
}
