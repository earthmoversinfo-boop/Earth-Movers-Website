import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import Marquee from '../components/Marquee.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import { Arrow } from '../components/Icons.jsx'
import { FleetScene } from '../components/Art.jsx'
import {
  company, stats, projects, fleet,
  heroSlides, certifications, images,
} from '../data/content.js'
import { serviceCategories, emiratesFor } from '../data/services.js'

function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6000)
    return () => clearInterval(id)
  }, [])

  const slide = heroSlides[active]

  return (
    <section className="hero" aria-label="Earth Movers International highlights">
      {heroSlides.map((s, i) => (
        <div key={s.img} className={`hero-slide${i === active ? ' active' : ''}`} aria-hidden={i !== active}>
          <img src={s.img} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="wrap hero-content" key={active}>
        <Reveal><span className="eyebrow">{slide.eyebrow}</span></Reveal>
        <Reveal delay={90}>
          <h1>{slide.titlePre}<em>{slide.titleGold}</em>{slide.titlePost}</h1>
        </Reveal>
        <Reveal delay={170}><p className="lead">{slide.text}</p></Reveal>
        <Reveal delay={250}>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-solid">Request a quote</Link>
            <Link to="/projects" className="text-link" style={{ color: '#fff' }}>
              Explore our projects <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {heroSlides.map((s, i) => (
          <button
            key={s.img}
            className={`hero-dot${i === active ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <HeroSlider />

      {/* ---------------- stats + certifications on dark ---------------- */}
      <div className="dark-band">
        <div className="wrap">
          <div className="stat-grid">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="stat-cell">
                <span className="stat-value">
                  <Counter value={s.value} />
                  <em>{s.suffix}</em>
                </span>
                <span className="stat-label">{s.label}</span>
                <span className="stat-note">{s.note}</span>
              </Reveal>
            ))}
          </div>
          <div className="cert-row">
            <span>Certifications &amp; registrations</span>
            {certifications.map((c) => (
              <strong key={c.title}>{c.title}</strong>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- our work ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Our Work</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">The projects that tell our story.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link to="/projects" className="text-link">All projects <Arrow /></Link>
            </Reveal>
          </div>

          <div className="work-grid">
            {projects.map((p, i) => (
              <Reveal key={p.client} delay={i * 90} className="work-card">
                <div className="work-card-media">
                  <Photo src={images.projects[i]} alt={`${p.client} — ${p.sector}`} />
                </div>
                <span className="eyebrow">{p.sector} · {p.location}</span>
                <h3>{p.client}</h3>
                <p>{p.scope}</p>
                <span className="work-meta">{p.year} — {p.value}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- statement ---------------- */}
      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="statement">
            <Reveal><span className="eyebrow">Our Promise</span></Reveal>
            <Reveal delay={90}>
              <h2>
                We move the earth, we build the roads, and we earn the trust of
                every client we serve — <em>every single day.</em>
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">What We Do</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">Four disciplines. One accountable partner.</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead">
                  Earth works, road works, traffic management and utilities — delivered
                  with our own fleet, our own operators and RTA-approved processes.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="cat-grid">
            {serviceCategories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 70}>
                <Link to={`/services/${c.slug}`} className="cat-tile">
                  <div className="svc-tile-media">
                    <Photo src={c.img} alt={c.name} />
                  </div>
                  <h3>{c.name}</h3>
                  <ul className="cat-tile-list">
                    {c.services
                      .filter((s) => !s.hideOnHome)
                      .map((s) => (
                        <li key={s.slug}>{s.name}</li>
                      ))}
                    {c.services.some((s) => s.hideOnHome) && (
                      <li className="cat-tile-more">
                        {`plus ${c.services.filter((s) => s.hideOnHome).length} services`}
                      </li>
                    )}
                  </ul>
                  <span className="cat-tile-foot">
                    <span className="cat-tile-where">
                      {c.coverage === 'all'
                        ? 'Available in all 7 emirates'
                        : 'Available in Dubai'}
                    </span>
                    <span className="text-link">Explore <Arrow /></span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- fleet ---------------- */}
      <section className="on-dark section">
        <div className="wrap fleet-grid">
          <div className="fleet-copy">
            <Reveal><span className="eyebrow">The Fleet</span></Reveal>
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
              <Link to="/contact" className="btn btn-solid">Rent equipment</Link>
            </Reveal>
          </div>
          <Reveal delay={200} className="fleet-art">
            <Photo src={images.fleet} alt="Wheel loader working sand stockpiles" fallback={<FleetScene />} />
            <div className="fleet-art-caption">
              <span>Fleet operations — Dubai</span>
              <span>Operated · 24/7</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- clients ---------------- */}
      <Marquee label="Trusted across the UAE" />

      {/* ---------------- CTA ---------------- */}
      <CTA text="Tell us about your site and scope — we’ll walk the ground with you and price the real work." />
    </main>
  )
}
