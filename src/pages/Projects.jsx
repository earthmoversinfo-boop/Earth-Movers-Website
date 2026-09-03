import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PhotoAlbum from '../components/PhotoAlbum.jsx'
import PageBanner from '../components/PageBanner.jsx'
import useLocale from '../i18n/useLocale.js'

export default function Projects() {
  const { t, content } = useLocale()
  const { projects, sectors, images } = content
  const ALL = t('proj.all')
  const filters = [ALL, ...new Set(projects.map((p) => p.sector))]
  const [filter, setFilter] = useState(ALL)
  const shown = projects.filter((p) => filter === ALL || p.sector === filter)

  return (
    <main>
      <PageBanner
        eyebrow={t('proj.eyebrow')}
        title={t('proj.title')}
        text={t('proj.lead')}
        img={images.banners.projects}
      />

      <section className="section">
        <div className="wrap">
          <div className="filter-pills">
            {filters.map((f) => (
              <button
                key={f}
                className={`pill${filter === f ? ' active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="proj-cards">
            {shown.map((p) => {
              const i = projects.indexOf(p)
              return (
                <Reveal key={p.client} delay={(i % 3) * 80} className="proj-card">
                  <div className="proj-card-media">
                    <Photo src={images.projects[i]} alt={`${p.client} — ${p.sector}`} />
                  </div>
                  <span className="proj-card-sector">{p.sector} · {p.location}</span>
                  <h3>{p.client}</h3>
                  <p>{p.scope}</p>
                  <div className="proj-card-facts">
                    <span>{t('proj.year')} <strong>{p.year}</strong></span>
                    <span>{t('proj.value')} <strong dir="ltr">{p.value}</strong></span>
                    <span><strong>{t('proj.delivered')}</strong></span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <PhotoAlbum />

      <section className="section on-dark">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('proj.whereEyebrow')}</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">{t('proj.whereTitle')}</h2></Reveal>
            </div>
          </div>
          <div className="sector-grid">
            {sectors.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80} className="sector-cell">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title={t('proj.ctaTitle')} text={t('proj.ctaText')} />
    </main>
  )
}
