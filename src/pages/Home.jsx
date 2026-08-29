import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import Marquee from '../components/Marquee.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import Gallery from '../components/Gallery.jsx'
import { Arrow, iconMap } from '../components/Icons.jsx'
import { FleetScene } from '../components/Art.jsx'
import {
  company, stats, featuredServices, projects, process, hse, fleet,
  heroSlides, news, images,
} from '../data/content.js'

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
            <Link to="/contact" className="btn btn-solid">
              Contact us <Arrow className="btn-arrow" />
            </Link>
            <Link to="/projects" className="btn btn-outline-light">View projects</Link>
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

      {/* ---------------- stats ---------------- */}
      <div className="stat-band">
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
        </div>
      </div>

      {/* ---------------- clients ---------------- */}
      <Marquee />

      {/* ---------------- services ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">What we do</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">Complete ground &amp; road solutions.</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead">
                  Seventeen disciplines across earthworks, roads and logistics —
                  delivered with our own fleet and RTA-approved processes.
                </p>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <Link to="/services" className="btn btn-ghost">
                All services <Arrow className="btn-arrow" />
              </Link>
            </Reveal>
          </div>

          <div className="svc-grid">
            {featuredServices.map((s, i) => {
              const Icon = iconMap[s.icon]
              return (
                <Reveal key={s.id} delay={(i % 3) * 90} className="svc-card">
                  <div className="svc-card-media">
                    <Photo src={s.img} alt={s.title} />
                    <span className="svc-icon-chip"><Icon /></span>
                  </div>
                  <div className="svc-card-body">
                    <h3>{s.title}</h3>
                    <p>{s.blurb}</p>
                    <Link to="/services" className="text-link">
                      Learn more <Arrow />
                    </Link>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- about teaser ---------------- */}
      <section className="section section-mist hairline-top">
        <div className="wrap split">
          <div className="split-sticky">
            <Reveal><span className="eyebrow">Who we are</span></Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg">Founded in Montreal. Proven in Dubai.</h2>
            </Reveal>
            <Reveal delay={160}>
              <Link to="/about" className="btn btn-ghost">About the company <Arrow className="btn-arrow" /></Link>
            </Reveal>
          </div>
          <div className="split-body">
            <Reveal>
              <p className="lead" style={{ color: 'var(--ink)' }}>
                Since {company.founded}, Earth Movers International has been a preferred
                solution provider in civil and heavy construction, engineering,
                oil &amp; gas, recycling and demolition.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                Established in Dubai since {company.inUAE}, our teams meet the challenges
                of the construction sector across earth works, heavy equipment, material
                supply, transportation and logistics — supporting infrastructure,
                commercial and industrial projects across the UAE.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                As a trusted RTA-approved road contractor, we use advanced technology to
                ensure safety, compliance and excellence in every project — from beach
                profiling for Nakheel to asphalt renewal for Fujairah Cement Industry.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <Photo
                src={images.about}
                alt="Earth Movers International engineers on site"
                className="about-photo"
                style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: 'none' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- fleet ---------------- */}
      <section className="on-dark fleet-band section">
        <div className="wrap fleet-grid">
          <div className="fleet-copy">
            <Reveal><span className="eyebrow">The fleet</span></Reveal>
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
            <Photo src={images.fleet} alt="Wheel loader working sand stockpiles" fallback={<FleetScene />} />
            <div className="fleet-art-caption">
              <span>Fleet operations — Dubai</span>
              <span>Operated · 24/7</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- projects ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Selected work</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">A track record you can stand on.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link to="/projects" className="btn btn-ghost">All projects <Arrow className="btn-arrow" /></Link>
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

      {/* ---------------- HSE ---------------- */}
      <section className="on-dark section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Our commitments</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">Safety, quality and environment — built in.</h2>
              </Reveal>
            </div>
          </div>
          <div className="hse-grid">
            {hse.map((h, i) => (
              <Reveal key={h.title} delay={i * 90} className="hse-card">
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- process ---------------- */}
      <section className="section section-mist">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">How we work</span></Reveal>
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

      {/* ---------------- gallery ---------------- */}
      <Gallery limit={6} eyebrow="From our sites" title="The work, in pictures." />

      {/* ---------------- news ---------------- */}
      <section className="section section-mist hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">News &amp; insights</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">From the road ahead.</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <a href="https://earthmoversint.com/blog/" target="_blank" rel="noreferrer" className="btn btn-ghost">
                Visit the blog <Arrow className="btn-arrow" />
              </a>
            </Reveal>
          </div>
          <div className="news-grid">
            {news.map((n, i) => (
              <Reveal key={n.title} delay={i * 90}>
                <a href={n.href} target="_blank" rel="noreferrer" className="news-card">
                  <span className="news-tag">{n.tag}</span>
                  <h3>{n.title}</h3>
                  <span className="text-link">Read more <Arrow /></span>
                </a>
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
