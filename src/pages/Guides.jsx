import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import useLocale from '../i18n/useLocale.js'
import { guidesFor } from '../data/guides.js'

export default function Guides() {
  const { t, locale, href, content } = useLocale()
  const guides = guidesFor(locale)

  return (
    <main>
      <PageBanner
        eyebrow={t('guides.eyebrow')}
        title={t('guides.title')}
        text={t('guides.lead')}
        img={content.images.banners.services}
      />

      <section className="section">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: t('crumb.home'), path: '/' },
              { name: t('guides.crumb'), path: '/guides' },
            ]}
          />
          <div className="guide-grid">
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 70}>
                <Link to={href(`/${g.slug}`)} className="guide-card">
                  <span className="guide-card-kicker">{t('guides.kicker')}</span>
                  <h2>{g.title}</h2>
                  <p>{g.lead}</p>
                  <span className="guide-card-more">{t('guides.read')}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
