import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import ServiceIncludeCard from '../components/ServiceIncludeCard.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import NotFound from './NotFound.jsx'
import EmirateCard from '../components/EmirateCard.jsx'
import { Arrow, CheckCircle } from '../components/Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { emiratesFor } from '../data/services.js'

export default function ServiceCategory() {
  const { category: slug } = useParams()
  const { t, locale, tax, href } = useLocale()
  const category = tax.categoryBySlug[slug]
  if (!category) return <NotFound />

  const locations = emiratesFor(category, locale)
  const others = tax.categories.filter((c) => c.slug !== category.slug)
  const where = category.coverage === 'all' ? t('cov.whereAll') : t('cov.dubai')
  const lower = (s) => (locale === 'ar' ? s : s.toLowerCase())

  return (
    <main>
      <PageBanner
        eyebrow={t('lbl.services')}
        title={t('seo.categoryH1', { category: category.name, where })}
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
            ]}
          />

          <div className="section-head" style={{ marginTop: '2rem' }}>
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.overview')}</span></Reveal>
              <Reveal delay={80}><h2 className="display-md">{category.intro}</h2></Reveal>
            </div>
            <Reveal delay={140}>
              <Link to={href('/contact')} className="btn btn-solid">{t('cta.proposal')}</Link>
            </Reveal>
          </div>

          <h3 className="block-label">{t('lbl.included')}</h3>
          <div className="incl-grid">
            {category.services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 60}>
                <ServiceIncludeCard
                  to={href(`/services/${category.slug}/${s.slug}`)}
                  name={s.name}
                  text={s.text}
                  img={s.sqImg}
                  linkLabel={t('svc.detailLink', { name: s.name })}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.whereWeWork')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{t('svc.acrossWhere', { name: category.name, where })}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead">{t('svc.chooseEmirateCategory')}</p>
              </Reveal>
            </div>
          </div>

          <div className="em-grid">
            {locations.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 4) * 60}>
                <EmirateCard emirate={e} categorySlug={category.slug} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('lbl.exploreMore')}</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">{t('lbl.otherServices')}</h2></Reveal>
            </div>
          </div>
          <div className="svc-grid">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 70}>
                <Link to={href(`/services/${c.slug}`)} className="svc-tile">
                  <div className="svc-tile-media">
                    <Photo src={c.img} alt={c.name} />
                  </div>
                  <h3>{c.name}</h3>
                  <p>{c.tagline}</p>
                  <span className="text-link">{t('cta.explore')} <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={t('svc.needPriced', { name: lower(category.name) })}
        text={t('svc.ctaText')}
      />
    </main>
  )
}
