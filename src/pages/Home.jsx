import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import Marquee from '../components/Marquee.jsx'
import CTA from '../components/CTA.jsx'
import { Arrow, iconMap } from '../components/Icons.jsx'
import { ExcavatorScene, FleetScene, TopoBackdrop } from '../components/Art.jsx'
import {
  company, stats, featuredServices, projects, process, values, fleet,
} from '../data/content.js'

export default function Home() {
  return (
    <main>
      {/* ---------------- hero ---------------- */}
      <section className="hero">
        <TopoBackdrop className="hero-topo" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Reveal>
              <span className="eyebrow">RTA-Approved Contractor · Dubai, UAE</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl">
                We move the earth.<br />
                <span className="accent-word">Dubai builds on it.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Earthworks, excavation and road construction for infrastructure,
                commercial and industrial projects — founded in Montreal in {company.founded},
                moving the UAE forward since {company.inUAE}.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="hero-actions">
                <Link to="/contact" className="btn btn-solid">
                  Start your project <Arrow className="btn-arrow" />
                </Link>
                <Link to="/services" className="btn btn-ghost">Explore services</Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero-art">
            <ExcavatorScene />
            <div className="hero-art-caption">
              <span>Site 07 — Bulk Excavation</span>
              <span>{company.coordinates}</span>
            </div>
          </Reveal>
        </div>

        <div className="wrap stat-band">
          <div className="stat-grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="stat-cell">
                <span className="stat-value">
                  <Counter value={s.value} />
                  <em>{s.suffix}</em>
                </span>
                <span className="stat-label">{s.label}</span>
                <span className="stat-note">{s.note}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- clients ---------------- */}
      <Marquee />

      {/* ---------------- services ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">01 — What we do</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">Heavy work, handled precisely.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link to="/services" className="text-link">
                All 17 services <Arrow />
              </Link>
            </Reveal>
          </div>

          <div className="svc-grid">
            {featuredServices.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <Reveal key={s.id} delay={(i % 3) * 90} className="svc-card">
                  <div className="svc-card-top">
                    <Icon className="svc-icon" />
                    <span className="index-num">0{i + 1}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <Link to="/services" className="svc-go" aria-label={`${s.title} — view service`}>
                    View service →
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- fleet ---------------- */}
      <section className="on-dark fleet-band section">
        <div className="wrap fleet-grid">
          <div className="fleet-copy">
            <Reveal><span className="eyebrow">02 — The fleet</span></Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg">One of the largest heavy-excavation fleets in Dubai.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">
                Excavators, bulldozers, piling rigs and rock breakers — owned, maintained
                and operated by us. Your programme never waits on a machine.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="fleet-chips">
                {fleet.map((f) => (
                  <span className="chip" key={f}>{f}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={280}>
              <Link to="/contact" className="btn btn-solid">
                Rent equipment <Arrow className="btn-arrow" />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={200} className="fleet-art">
            <FleetScene />
            <div className="fleet-art-caption">
              <span>Fleet yard — Dubai</span>
              <span>Operated · 24/7</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- about teaser ---------------- */}
      <section className="section">
        <div className="wrap split">
          <div className="split-sticky">
            <Reveal><span className="eyebrow">03 — Who we are</span></Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg">Montreal roots. Dubai muscle.</h2>
            </Reveal>
            <Reveal delay={160}>
              <Link to="/about" className="text-link">Our story <Arrow /></Link>
            </Reveal>
          </div>
          <div className="split-body">
            <Reveal>
              <p className="lead" style={{ color: 'var(--ink)' }}>
                Founded in {company.founded} in Montreal, Canada and established in Dubai
                since {company.inUAE}, Earth Movers International is a dynamic solution
                provider in civil and heavy construction, engineering, oil &amp; gas,
                recycling and demolition.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                Our teams meet the challenges of the construction sector across earth
                works, heavy equipment, material supply, transportation and logistics —
                with long-standing experience in site preparation, road works and ground
                engineering that delivers practical, build-ready outcomes.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                As a trusted RTA-approved road contractor, we use advanced technology to
                ensure safety, compliance and excellence in every project we take on —
                from beach profiling for Nakheel to asphalt renewal for Fujairah Cement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- projects ---------------- */}
      <section className="section hairline-top" style={{ paddingTop: 'var(--section)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">04 — Selected work</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">Proof, in the ground.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link to="/projects" className="text-link">All projects <Arrow /></Link>
            </Reveal>
          </div>

          <div className="proj-list">
            {projects.map((p, i) => (
              <Reveal key={p.client} delay={i * 80} className="proj-row">
                <span className="proj-client">{p.client}</span>
                <span className="proj-meta">{p.location}</span>
                <span className="proj-meta">{p.sector} · {p.year}</span>
                <span className="proj-value">{p.value}</span>
                <span className="proj-scope">{p.scope}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- process ---------------- */}
      <section className="on-dark section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">05 — How we work</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">From survey to sign-off.</h2>
              </Reveal>
            </div>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 90} className="process-step">
                <span className="index-num">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- values ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">06 — Why EMI</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">Built on ground rules.</h2>
              </Reveal>
            </div>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 90} className="value-card">
                <span className="index-num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <CTA text="Tell us about your site and scope — we’ll walk the ground with you and price the real work." />
    </main>
  )
}
