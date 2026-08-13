import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import { TopoBackdrop } from '../components/Art.jsx'
import { serviceGroups } from '../data/content.js'

export default function Services() {
  return (
    <main>
      <section className="wrap page-hero">
        <TopoBackdrop className="hero-topo" />
        <Reveal><span className="eyebrow">Services</span></Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl">Every stage of the ground game.</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="lead">
            Seventeen disciplines across earthworks, roads and logistics — delivered
            with our own fleet, our own operators and RTA-approved processes.
          </p>
        </Reveal>
      </section>

      {serviceGroups.map((group, gi) => (
        <section key={group.id} className={`section ${gi === 0 ? 'hairline-top' : ''}`} id={group.id}>
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">
                <Reveal><span className="eyebrow">{group.number} — {group.title}</span></Reveal>
                <Reveal delay={80}><h2 className="display-md">{group.intro}</h2></Reveal>
              </div>
            </div>
            <div className="catalog-grid">
              {group.services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 80} className="catalog-cell">
                  <span className="index-num">
                    {group.number}.{String(i + 1).padStart(2, '0')}
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTA
        title="Scope in hand? Send it over."
        text="Share your drawings or bill of quantities and we’ll come back with a clear, realistic price."
      />
    </main>
  )
}
