import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { Arrow } from '../components/Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { emiratesFor } from '../data/services.js'

export default function Services() {
  const { t, locale, tax, content, href } = useLocale()
  const { images } = content

  return (
    <main>
      <PageBanner
        eyebrow={t('lbl.services')}
        title={t('home.whatTitle')}
        text={t('home.whatLead')}
        img={images.banners.services}
      />

      {tax.categories.map((category, gi) => {
        const locations = emiratesFor(category, locale)
        const where = category.coverage === 'all' ? t('cov.allLong') : t('cov.dubai')
        return (
          <section
            key={category.slug}
            id={category.slug}
            className={`section${gi % 2 === 1 ? ' section-paper hairline-top' : ''}`}
          >
            <div className="wrap">
              <div className="section-head">
                <div className="kicker">
                  <Reveal><span className="eyebrow">{`0${gi + 1} — ${category.name}`}</span></Reveal>
                  <Reveal delay={80}><h2 className="display-lg">{category.tagline}</h2></Reveal>
                  <Reveal delay={140}><p className="lead">{category.intro}</p></Reveal>
                </div>
                <Reveal delay={180}>
                  <Link to={href(`/services/${category.slug}`)} className="btn btn-ghost">
                    {category.name} <Arrow className="btn-arrow" />
                  </Link>
                </Reveal>
              </div>

              <div className="cat-split">
                <div className="cat-media">
                  <Photo src={category.img} alt={category.name} />
                </div>
                <div>
                  <h3 className="block-label">{t('lbl.services')}</h3>
                  <ul className="tag-list tag-list-links">
                    {category.services.map((s) => (
                      <li key={s.slug}>
                        <Link to={href(`/services/${category.slug}/${s.slug}`)}>{s.name}</Link>
                      </li>
                    ))}
                  </ul>

                  <h3 className="block-label" style={{ marginTop: '2rem' }}>
                    {t('cov.availableIn', { where })}
                  </h3>
                  <div className="loc-links">
                    {locations.map((e) => (
                      <Link key={e.slug} to={href(`/services/${category.slug}/${e.slug}`)}>
                        {e.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <CTA title={t('about.ctaTitle')} text={t('svc.ctaText')} />
    </main>
  )
}
