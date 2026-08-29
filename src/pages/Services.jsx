import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { CheckCircle } from '../components/Icons.jsx'
import { serviceGroups, images } from '../data/content.js'

export default function Services() {
  return (
    <main>
      <PageBanner
        eyebrow="Services"
        title="Every stage of the ground game."
        text="Seventeen disciplines across earthworks, roads and logistics — delivered with our own fleet, our own operators and RTA-approved processes."
        img={images.banners.services}
      />

      {serviceGroups.map((group, gi) => (
        <section key={group.id} className={`section${gi % 2 === 1 ? ' section-paper hairline-top' : ''}`} id={group.id}>
          <div className="wrap">
            <div className="section-head">
              <div className="kicker">
                <Reveal><span className="eyebrow">{group.title}</span></Reveal>
                <Reveal delay={80}><h2 className="display-md">{group.intro}</h2></Reveal>
              </div>
            </div>
            <div className="check-grid">
              {group.services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 70} className="check-item">
                  <CheckCircle className="check-ico" />
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
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
