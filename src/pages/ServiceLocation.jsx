import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { Arrow, CheckCircle } from '../components/Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { emiratesFor } from '../data/services.js'
import { asset } from '../lib/asset.js'

export default function ServiceLocation({ category, emirate }) {
  const { t, locale, content, href } = useLocale()
  const { company } = content
  const covered = emiratesFor(category, locale)
  const siblings = covered.filter((e) => e.slug !== emirate.slug)
  const lower = (s) => (locale === 'ar' ? s : s.toLowerCase())

  return (
    <main>
      <PageBanner
        eyebrow={`${category.name} — ${emirate.name}`}
        title={t('seo.categoryH1', { category: category.name, where: emirate.name })}
        text={category.tagline}
        img={category.img}
      />

      <section className="section">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: t('crumb.home'), path: '/' },
              { name: t('crumb.services'), path: '/services' },
              { name: category.name, path: `/services/${category.slug}` },
              { name: emirate.name, path: `/services/${category.slug}/${emirate.slug}` },
            ]}
          />

          <div className="split" style={{ marginTop: '2.5rem' }}>
            <div className="split-sticky has-figure">
              <Reveal><span className="eyebrow">{t('lbl.localCoverage')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-md">
                  {t('loc.deliveredIn', { category: category.name, emirate: emirate.name })}
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <Link to={href('/contact')} className="btn btn-solid">{t('cta.quote')}</Link>
              </Reveal>
              <Reveal delay={200} className="rail-figure-wrap">
                <figure className="rail-figure">
                  <img
                    src={asset(category.tallImg)}
                    alt={t('loc.figCaption', { category: category.name, emirate: emirate.name })}
                    loading="lazy"
                  />
                  <figcaption>
                    {t('loc.figCaption', { category: category.name, emirate: emirate.name })}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="split-body">
              <Reveal>
                <p className="lead" style={{ color: 'var(--ink)' }}>{emirate.context}</p>
              </Reveal>
              <Reveal delay={80}>
                <p>{category.intro}</p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  <strong>{t('loc.areasWeCover', { emirate: emirate.name })}</strong>{' '}
                  {emirate.areas}. {t('loc.areasTail')}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* one section per service — each targets "<service> in <emirate>" */}
      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal>
                <span className="eyebrow">{t('loc.ourServices', { category: lower(category.name) })}</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{t('loc.whatWeDeliver', { emirate: emirate.name })}</h2>
              </Reveal>
            </div>
          </div>

          <div className="loc-services">
            {category.services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60} className="loc-service">
                <CheckCircle className="check-ico" />
                <div>
                  <h3>{t('loc.inEmirate', { name: s.name, emirate: emirate.name })}</h3>
                  <p>{s.text}</p>
                  <Link to={href(`/services/${category.slug}/${s.slug}`)} className="text-link">
                    {t('svc.moreOn', { name: lower(s.name) })} <Arrow />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.faq')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">
                  {t('svc.faqHeading', {
                    name: t('loc.inEmirate', { name: category.name, emirate: emirate.name }),
                  })}
                </h2>
              </Reveal>
            </div>
          </div>
          <div className="faq-list">
            <Reveal className="faq-item">
              <h3>{t('loc.q1', { category: lower(category.name), emirate: emirate.name })}</h3>
              <p>
                {t('loc.a1', {
                  category: lower(category.name),
                  emirate: emirate.name,
                  areas: emirate.areas,
                  authority: emirate.authority,
                })}
              </p>
            </Reveal>
            <Reveal delay={60} className="faq-item">
              <h3>{t('loc.q2', { emirate: emirate.name })}</h3>
              <p>{t('loc.a2', { authority: emirate.authority })}</p>
            </Reveal>
            <Reveal delay={120} className="faq-item">
              <h3>
                {t('loc.q3', {
                  service: lower(category.services[0].name),
                  emirate: emirate.name,
                })}
              </h3>
              <p>
                {t('svc.priceA', { email: company.email, phone: company.phone })
                  .split(company.email)
                  .flatMap((part, i, all) =>
                    i < all.length - 1
                      ? [part, <a key="e" href={`mailto:${company.email}`} dir="ltr">{company.email}</a>]
                      : [part]
                  )}
              </p>
            </Reveal>
            <Reveal delay={180} className="faq-item">
              <h3>{t('loc.q4', { emirate: emirate.name })}</h3>
              <p>{t('loc.a4')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.otherEmirates')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{t('loc.elsewhere', { category: category.name })}</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Link to={href(`/services/${category.slug}`)} className="text-link">
                {t('svc.allOf', { category: lower(category.name) })} <Arrow />
              </Link>
            </Reveal>
          </div>
          <div className="loc-grid">
            {siblings.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 4) * 60}>
                <Link to={href(`/services/${category.slug}/${e.slug}`)} className="loc-card">
                  <span className="loc-card-name">
                    {t('loc.inEmirate', { name: category.name, emirate: e.name })}
                  </span>
                  <span className="loc-card-meta">{e.authority}</span>
                  <span className="text-link">{t('cta.view')} <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={t('loc.ctaTitle', { category: category.name, emirate: emirate.name })}
        text={t('loc.ctaText')}
      />
    </main>
  )
}
