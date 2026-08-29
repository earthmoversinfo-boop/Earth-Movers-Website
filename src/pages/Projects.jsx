import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import Gallery from '../components/Gallery.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { projects, sectors, images } from '../data/content.js'

export default function Projects() {
  return (
    <main>
      <PageBanner
        eyebrow="Projects"
        title="A portfolio you can stand on."
        text="Selected works for public authorities and private clients across the UAE — a track record built on safety, quality and client satisfaction."
        img={images.banners.projects}
      />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Case studies</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">Selected work.</h2></Reveal>
            </div>
          </div>
          <div className="proj-cards">
            {projects.map((p, i) => (
              <Reveal key={p.client} delay={i * 90} className="proj-card">
                <div className="proj-card-media">
                  <Photo src={images.projects[i]} alt={`${p.client} — ${p.sector}`} />
                  <span className="proj-card-sector">{p.sector}</span>
                </div>
                <div className="proj-card-body">
                  <h3>{p.client}</h3>
                  <p>{p.scope}</p>
                </div>
                <div className="proj-card-facts">
                  <div className="proj-fact">
                    <span className="proj-fact-label">Location</span>
                    <span className="proj-fact-value">{p.location}</span>
                  </div>
                  <div className="proj-fact">
                    <span className="proj-fact-label">Year</span>
                    <span className="proj-fact-value">{p.year}</span>
                  </div>
                  <div className="proj-fact">
                    <span className="proj-fact-label">Value</span>
                    <span className="proj-fact-value">{p.value}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-dark">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Where we work</span></Reveal>
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

      <Gallery eyebrow="Site gallery" title="The work, in pictures." />

      <CTA
        title="Your project, next on this page."
        text="From AED 0.3M relocations to multi-million road renewals — every scope gets the same standard of delivery."
      />
    </main>
  )
}
