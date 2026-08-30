import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import NotFound from './NotFound.jsx'
import { Arrow, CheckCircle } from '../components/Icons.jsx'
import { categoryBySlug, emiratesFor, serviceCategories } from '../data/services.js'

export default function ServiceCategory() {
  const { category: slug } = useParams()
  const category = categoryBySlug[slug]
  if (!category) return <NotFound />

  const locations = emiratesFor(category)
  const others = serviceCategories.filter((c) => c.slug !== category.slug)
  const where = category.coverage === 'all' ? 'the UAE' : 'Dubai'

  return (
    <main>
      <PageBanner
        eyebrow="Services"
        title={`${category.name} Contractor in ${where}`}
        text={category.tagline}
        img={category.img}
      />

      <section className="section">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: category.name, path: `/services/${category.slug}` },
            ]}
          />

          <div className="section-head" style={{ marginTop: '2rem' }}>
            <div className="kicker">
              <Reveal><span className="eyebrow">Overview</span></Reveal>
              <Reveal delay={80}><h2 className="display-md">{category.intro}</h2></Reveal>
            </div>
            <Reveal delay={140}>
              <Link to="/contact" className="btn btn-solid">Request a proposal</Link>
            </Reveal>
          </div>

          <h3 className="block-label">What&rsquo;s included</h3>
          <div className="check-grid">
            {category.services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 60}>
                <Link
                  to={`/services/${category.slug}/${s.slug}`}
                  className="check-item check-item-link"
                >
                  <CheckCircle className="check-ico" />
                  <div>
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                    <span className="text-link">{`${s.name} in detail`} <Arrow /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Where we work</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`${category.name} across ${where}.`}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead">
                  Choose your emirate for local coverage, approving authority and the
                  areas we operate in.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="loc-grid">
            {locations.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 4) * 60}>
                <Link to={`/services/${category.slug}/${e.slug}`} className="loc-card">
                  <span className="loc-card-name">{`${category.name} in ${e.name}`}</span>
                  <span className="loc-card-meta">{e.authority}</span>
                  <span className="text-link">View <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Explore more</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">Other services</h2></Reveal>
            </div>
          </div>
          <div className="svc-grid">
            {others.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 70}>
                <Link to={`/services/${c.slug}`} className="svc-tile">
                  <div className="svc-tile-media">
                    <Photo src={c.img} alt={c.name} />
                  </div>
                  <h3>{c.name}</h3>
                  <p>{c.tagline}</p>
                  <span className="text-link">Explore <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Need ${category.name.toLowerCase()} priced?`}
        text="Send your drawings or bill of quantities and we’ll come back with a clear, realistic price."
      />
    </main>
  )
}
