import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import Gallery from '../components/Gallery.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { projects, sectors, images } from '../data/content.js'

export default function Projects() {
  const filters = ['All', ...new Set(projects.map((p) => p.sector))]
  const [filter, setFilter] = useState('All')
  const shown = projects.filter((p) => filter === 'All' || p.sector === filter)

  return (
    <main>
      <PageBanner
        eyebrow="Projects"
        title="Selected work across the UAE."
        text="From public authorities to private clients — a track record built on safety, quality and client satisfaction."
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
                    <span>Year <strong>{p.year}</strong></span>
                    <span>Value <strong>{p.value}</strong></span>
                    <span><strong>Delivered</strong></span>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section on-dark">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Where We Work</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">Sectors we serve.</h2></Reveal>
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

      <Gallery eyebrow="Site Gallery" title="The places behind our work." />

      <CTA
        title="Your project, next on this page."
        text="From AED 0.3M relocations to multi-million road renewals — every scope gets the same standard of delivery."
      />
    </main>
  )
}
