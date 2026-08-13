import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import { TopoBackdrop } from '../components/Art.jsx'
import { projects, sectors } from '../data/content.js'

export default function Projects() {
  return (
    <main>
      <section className="wrap page-hero">
        <TopoBackdrop className="hero-topo" />
        <Reveal><span className="eyebrow">Projects</span></Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl">A portfolio you can stand on.</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="lead">
            Selected works for public authorities and private clients across the
            UAE — a track record built on safety, quality and client satisfaction.
          </p>
        </Reveal>
      </section>

      <section className="section hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">01 — Case studies</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">Selected work.</h2></Reveal>
            </div>
          </div>
          <div className="proj-cards">
            {projects.map((p, i) => (
              <Reveal key={p.client} delay={i * 90} className="proj-card">
                <div className="proj-card-head">
                  <span className="proj-card-sector">{p.sector}</span>
                  <span className="index-num">0{i + 1}</span>
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
                  <div className="proj-fact">
                    <span className="proj-fact-label">Status</span>
                    <span className="proj-fact-value">Delivered</span>
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
              <Reveal><span className="eyebrow">02 — Where we work</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">Sectors we serve.</h2></Reveal>
            </div>
          </div>
          <div className="sector-grid" style={{ borderColor: 'var(--dark-line)' }}>
            {sectors.map((s, i) => (
              <Reveal
                key={s.title}
                delay={(i % 3) * 80}
                className="sector-cell"
                style={{ borderColor: 'var(--dark-line)' }}
              >
                <span className="index-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--sand-soft-on-dark)' }}>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Your project, next on this page."
        text="From AED 0.3M relocations to multi-million road renewals — every scope gets the same standard of delivery."
      />
    </main>
  )
}
