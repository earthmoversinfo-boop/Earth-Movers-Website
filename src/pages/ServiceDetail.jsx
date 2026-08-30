import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { Arrow, CheckCircle } from '../components/Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { emiratesFor } from '../data/services.js'
import { asset } from '../lib/asset.js'

// One page per individual service, at /services/<category>/<service>.
export default function ServiceDetail({ category, service }) {
  const { t, locale, content, href } = useLocale()
  const { company } = content
  const locations = emiratesFor(category, locale)
  const where = category.coverage === 'all' ? t('cov.whereAll') : t('cov.dubai')
  const siblings = category.services.filter((s) => s.slug !== service.slug)

  return (
    <main>
      <PageBanner
        eyebrow={category.name}
        title={service.h1}
        text={service.lead}
        img={service.img}
      />

      <section className="section">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: t('crumb.home'), path: '/' },
              { name: t('crumb.services'), path: '/services' },
              { name: category.name, path: `/services/${category.slug}` },
              { name: service.name, path: `/services/${category.slug}/${service.slug}` },
            ]}
          />

          <div className="split" style={{ marginTop: '2.5rem' }}>
            <div className="split-sticky has-figure">
              <Reveal><span className="eyebrow">{t('lbl.overview')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-md">{t('svc.withOwnFleet', { name: service.name, where })}</h2>
              </Reveal>
              <Reveal delay={140}>
                <Link to={href('/contact')} className="btn btn-solid">{t('cta.quote')}</Link>
              </Reveal>
              <Reveal delay={200} className="rail-figure-wrap">
                <figure className="rail-figure">
                  <img src={asset(service.tallImg)} alt={service.caption} loading="lazy" />
                  <figcaption>{service.caption}</figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="split-body">
              <Reveal>
                <p className="lead" style={{ color: 'var(--ink)' }}>{service.intro}</p>
              </Reveal>
              {service.body.map((para, i) => (
                <Reveal key={i} delay={80 + i * 60}><p>{para}</p></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.scope')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">
                  {t('svc.covers', {
                    name: locale === 'ar' ? service.name : service.name.toLowerCase(),
                  })}
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="check-grid">
            {service.scope.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 60} className="check-item">
                <CheckCircle className="check-ico" />
                <p>{item}</p>
              </Reveal>
            ))}
          </div>

          <h3 className="block-label" style={{ marginTop: '3rem' }}>{t('lbl.glance')}</h3>
          <dl className="spec-table">
            {service.specs.map(([label, value]) => (
              <div key={label} className="spec-row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.whereWeWork')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{t('svc.acrossWhere', { name: service.name, where })}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead">
                  {t('svc.chooseEmirate', {
                    name: locale === 'ar' ? service.name : service.name.toLowerCase(),
                    category: locale === 'ar' ? category.name : category.name.toLowerCase(),
                  })}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="loc-grid">
            {locations.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 4) * 60}>
                <Link to={href(`/services/${category.slug}/${e.slug}`)} className="loc-card">
                  <span className="loc-card-name">
                    {t('loc.inEmirate', { name: service.name, emirate: e.name })}
                  </span>
                  <span className="loc-card-meta">{e.authority}</span>
                  <span className="text-link">{t('cta.view')} <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.faq')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{t('svc.faqHeading', { name: service.name })}</h2>
              </Reveal>
            </div>
          </div>
          <div className="faq-list">
            {service.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
            <Reveal delay={service.faqs.length * 60} className="faq-item">
              <h3>
                {t('svc.priceQ', {
                  name: locale === 'ar' ? service.name : service.name.toLowerCase(),
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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.related')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">
                  {t('svc.otherIn', {
                    category: locale === 'ar' ? category.name : category.name.toLowerCase(),
                  })}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Link to={href(`/services/${category.slug}`)} className="text-link">
                {t('svc.allOf', {
                  category: locale === 'ar' ? category.name : category.name.toLowerCase(),
                })}{' '}
                <Arrow />
              </Link>
            </Reveal>
          </div>
          <div className="loc-grid">
            {siblings.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
                <Link to={href(`/services/${category.slug}/${s.slug}`)} className="loc-card">
                  <span className="loc-card-name">{s.name}</span>
                  <span className="loc-card-meta">{s.lead}</span>
                  <span className="text-link">{t('cta.view')} <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={t('svc.needPriced', {
          name: locale === 'ar' ? service.name : service.name.toLowerCase(),
        })}
        text={t('svc.ctaText')}
      />
    </main>
  )
}
