import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PhotoAlbum from '../components/PhotoAlbum.jsx'
import PageBanner from '../components/PageBanner.jsx'
import useLocale from '../i18n/useLocale.js'
import { asset } from '../lib/asset.js'

const ALBUM = '/images/projects'

export default function Projects() {
  const { t, content } = useLocale()
  const { projects, projectCategories, sectors, images } = content
  const featured = projects.filter((p) => p.featured)

  // only the disciplines that actually have a project in them get a tab
  const tabs = projectCategories.filter((c) => projects.some((p) => p.category === c.slug))
  const [tab, setTab] = useState('all')
  const shown = tab === 'all' ? projects : projects.filter((p) => p.category === tab)
  const nameOf = (slug) => tabs.find((c) => c.slug === slug)?.name

  return (
    <main>
      <PageBanner
        eyebrow={t('proj.eyebrow')}
        title={t('proj.title')}
        text={t('proj.lead')}
        img={images.banners.projects}
      />

      {/* ---------------- selected case studies ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('proj.caseEyebrow')}</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">{t('proj.caseTitle')}</h2></Reveal>
            </div>
          </div>

          <div className="proj-cards">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80} className="proj-card">
                <div className="proj-card-media">
                  <Photo src={p.img} alt={`${p.client} — ${p.name}`} />
                </div>
                <span className="proj-card-sector">{p.client} · {p.place}</span>
                <h3>{p.name}</h3>
                <p>{p.scope}</p>
                <div className="proj-card-facts">
                  <span>{t('proj.year')} <strong>{p.year}</strong></span>
                  <span>{t('proj.value')} <strong dir="ltr">{p.value}</strong></span>
                  <span><strong>{t('proj.delivered')}</strong></span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- the full register ---------------- */}
      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('reg.eyebrow')}</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">{t('reg.title', { count: projects.length })}</h2></Reveal>
            </div>
            <Reveal delay={140}><p className="section-lead">{t('reg.lead')}</p></Reveal>
          </div>

          <div className="filter-pills">
            <button className={`pill${tab === 'all' ? ' active' : ''}`} onClick={() => setTab('all')}>
              {t('proj.all')} <span className="pill-count">{projects.length}</span>
            </button>
            {tabs.map((c) => (
              <button
                key={c.slug}
                className={`pill${tab === c.slug ? ' active' : ''}`}
                onClick={() => setTab(c.slug)}
              >
                {c.name}{' '}
                <span className="pill-count">{projects.filter((p) => p.category === c.slug).length}</span>
              </button>
            ))}
          </div>

          <div className="reg-grid">
            {shown.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 60} className="reg-card">
                {p.photos?.length ? (
                  <div className="reg-card-media">
                    <img src={asset(`${ALBUM}/${p.photos[0]}.jpg`)} alt={`${p.name} — ${p.client}`} loading="lazy" />
                  </div>
                ) : null}
                <span className="reg-card-tag">{nameOf(p.category)}</span>
                <h3>{p.name}</h3>
                <p className="reg-card-client">{p.client}</p>
                <p className="reg-card-scope">{p.scope}</p>
                <dl className="reg-card-meta">
                  {p.place ? (
                    <div><dt>{t('reg.place')}</dt><dd>{p.place}</dd></div>
                  ) : null}
                  {p.consultant ? (
                    <div><dt>{t('reg.consultant')}</dt><dd>{p.consultant}</dd></div>
                  ) : null}
                  {p.contractor ? (
                    <div><dt>{t('reg.contractor')}</dt><dd>{p.contractor}</dd></div>
                  ) : null}
                  {p.value ? (
                    <div><dt>{t('proj.value')}</dt><dd dir="ltr">{p.value}</dd></div>
                  ) : null}
                </dl>
              </Reveal>
            ))}
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
