import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { Arrow } from '../components/Icons.jsx'
import { serviceCategories, emiratesFor } from '../data/services.js'
import { images } from '../data/content.js'

export default function Services() {
  return (
    <main>
      <PageBanner
        eyebrow="Services"
        title="Earth works, road works, traffic management and utilities."
        text="Four disciplines, one accountable contractor — delivered with our own fleet, our own operators and RTA-approved processes across the UAE."
        img={images.banners.services}
      />

      {serviceCategories.map((category, gi) => {
        const locations = emiratesFor(category)
        const where = category.coverage === 'all' ? 'all seven emirates' : 'Dubai'
        return (
          <section
            key={category.slug}
            id={category.slug}
            className={`section${gi % 2 === 1 ? ' section-paper hairline-top' : ''}`}
          >
            <div className="wrap">
              <div className="section-head">
                <div className="kicker">
                  <Reveal><span className="eyebrow">{`0${gi + 1} — ${category.name}`}</span></Reveal>
                  <Reveal delay={80}><h2 className="display-lg">{category.tagline}</h2></Reveal>
                  <Reveal delay={140}><p className="lead">{category.intro}</p></Reveal>
                </div>
                <Reveal delay={180}>
                  <Link to={`/services/${category.slug}`} className="btn btn-ghost">
                    {category.name} <Arrow className="btn-arrow" />
                  </Link>
                </Reveal>
              </div>

              <div className="cat-split">
                <div className="cat-media">
                  <Photo src={category.img} alt={category.name} />
                </div>
                <div>
                  <h3 className="block-label">Services</h3>
                  <ul className="tag-list tag-list-links">
                    {category.services.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/services/${category.slug}/${s.slug}`}>{s.name}</Link>
                      </li>
                    ))}
                  </ul>

                  <h3 className="block-label" style={{ marginTop: '2rem' }}>
                    Available in {where}
                  </h3>
                  <div className="loc-links">
                    {locations.map((e) => (
                      <Link key={e.slug} to={`/services/${category.slug}/${e.slug}`}>
                        {e.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <CTA
        title="Scope in hand? Send it over."
        text="Share your drawings or bill of quantities and we’ll come back with a clear, realistic price."
      />
    </main>
  )
}
