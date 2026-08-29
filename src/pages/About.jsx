import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { Arrow } from '../components/Icons.jsx'
import { company, stats, timeline, values, certifications, images } from '../data/content.js'

export default function About() {
  return (
    <main>
      <PageBanner
        eyebrow="About Us"
        title="Three decades of moving ground."
        text={`From Montreal in ${company.founded} to Dubai since ${company.inUAE} — a contractor built around heavy machines, experienced hands and ground that gets handed over right.`}
        img={images.banners.about}
      />

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

      <div className="cert-strip">
        <div className="wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div key={c.title} className="cert-cell">
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div className="split-sticky">
            <Reveal><span className="eyebrow">The story</span></Reveal>
            <Reveal delay={80}><h2 className="display-lg">Who we are</h2></Reveal>
          </div>
          <div className="split-body">
            <Reveal>
              <p className="lead" style={{ color: 'var(--ink)' }}>
                Earth Movers International is a dynamic and preferred solution provider
                in the fields of civil and heavy construction, engineering, oil &amp; gas,
                recycling and demolition.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                Our team was incorporated to help meet the challenges faced by the
                construction sector in the fields of earth works, heavy equipment,
                material supply, transportation and logistics. Today we support
                infrastructure, commercial and industrial projects across the UAE
                as a Dubai-based road construction and earthworks contractor.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                We maintain one of Dubai&rsquo;s largest fleets of heavy excavation
                equipment — excavators, bulldozers, piling rigs, rock breakers and
                specialised machinery — so projects are completed quickly, effectively
                and safely. As an RTA-approved contractor, compliance is built into
                everything we deliver.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <Photo
                src={images.about}
                alt="Earth Movers International team and machinery at work"
                className="about-photo"
                style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', border: 'none' }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-mist hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Milestones</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">The road so far.</h2></Reveal>
            </div>
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 70} className="timeline-row">
                <span className="timeline-year">{t.year}</span>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="on-dark section">
        <div className="wrap split">
          <div className="split-sticky">
            <Reveal><span className="eyebrow">Direction</span></Reveal>
            <Reveal delay={80}><h2 className="display-lg">Mission &amp; vision</h2></Reveal>
          </div>
          <div className="split-body">
            <Reveal>
              <p className="lead">
                Our vision is to make Earth Movers International a global brand in the
                field of earth works, heavy construction equipment and services.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <p>
                Our mission is simpler still: deliver practical, build-ready ground —
                safely, on programme and to specification — so every client can build
                with confidence on what we hand over.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Values</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">Ground rules.</h2></Reveal>
            </div>
            <Reveal delay={160}>
              <Link to="/services" className="btn btn-ghost">See our services <Arrow className="btn-arrow" /></Link>
            </Reveal>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 90} className="value-card">
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Build on solid ground." text="Talk to the team that has been moving the earth since 1990." />
    </main>
  )
}
