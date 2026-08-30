import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import { Arrow, CheckCircle } from '../components/Icons.jsx'
import { emiratesFor } from '../data/services.js'
import { company } from '../data/content.js'

// One page per individual service, at /services/<category>/<service>.
export default function ServiceDetail({ category, service }) {
  const locations = emiratesFor(category)
  const where = category.coverage === 'all' ? 'the UAE' : 'Dubai'
  const siblings = category.services.filter((s) => s.slug !== service.slug)

  return (
    <main>
      <PageBanner
        eyebrow={category.name}
        title={service.h1}
        text={service.lead}
        img={service.img}
      />

      <section className="section">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: category.name, path: `/services/${category.slug}` },
              { name: service.name, path: `/services/${category.slug}/${service.slug}` },
            ]}
          />

          <div className="split" style={{ marginTop: '2.5rem' }}>
            <div className="split-sticky">
              <Reveal><span className="eyebrow">Overview</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-md">{`${service.name} in ${where}, delivered with our own fleet.`}</h2>
              </Reveal>
              <Reveal delay={140}>
                <Link to="/contact" className="btn btn-solid">Request a quote</Link>
              </Reveal>
            </div>
            <div className="split-body">
              <Reveal>
                <p className="lead" style={{ color: 'var(--ink)' }}>{service.intro}</p>
              </Reveal>
              {service.body.map((para, i) => (
                <Reveal key={i} delay={80 + i * 60}><p>{para}</p></Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Scope</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`What our ${service.name.toLowerCase()} package covers.`}</h2>
              </Reveal>
            </div>
          </div>

          <div className="check-grid">
            {service.scope.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 60} className="check-item">
                <CheckCircle className="check-ico" />
                <p>{item}</p>
              </Reveal>
            ))}
          </div>

          <h3 className="block-label" style={{ marginTop: '3rem' }}>At a glance</h3>
          <dl className="spec-table">
            {service.specs.map(([label, value]) => (
              <div key={label} className="spec-row">
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Where we work</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`${service.name} across ${where}.`}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead">
                  {`We deliver ${service.name.toLowerCase()} as part of our ${category.name.toLowerCase()} package. Choose your emirate for local coverage and the approving authority.`}
                </p>
              </Reveal>
            </div>
          </div>

          <div className="loc-grid">
            {locations.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 4) * 60}>
                <Link to={`/services/${category.slug}/${e.slug}`} className="loc-card">
                  <span className="loc-card-name">{`${service.name} in ${e.name}`}</span>
                  <span className="loc-card-meta">{e.authority}</span>
                  <span className="text-link">View <Arrow /></span>
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
              <Reveal><span className="eyebrow">Common questions</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`${service.name} — FAQs`}</h2>
              </Reveal>
            </div>
          </div>
          <div className="faq-list">
            {service.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 60} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </Reveal>
            ))}
            <Reveal delay={service.faqs.length * 60} className="faq-item">
              <h3>{`How do I get a price for ${service.name.toLowerCase()}?`}</h3>
              <p>
                Send drawings, a bill of quantities or a description of the scope to{' '}
                <a href={`mailto:${company.email}`}>{company.email}</a>, or call{' '}
                <a href={company.phoneHref}>{company.phone}</a>. Where it helps, we walk the
                ground with you before pricing.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Related services</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`Other ${category.name.toLowerCase()} services`}</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Link to={`/services/${category.slug}`} className="text-link">
                All {category.name.toLowerCase()} <Arrow />
              </Link>
            </Reveal>
          </div>
          <div className="loc-grid">
            {siblings.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
                <Link to={`/services/${category.slug}/${s.slug}`} className="loc-card">
                  <span className="loc-card-name">{s.name}</span>
                  <span className="loc-card-meta">{s.lead}</span>
                  <span className="text-link">View <Arrow /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title={`Need ${service.name.toLowerCase()} priced?`}
        text="Send your drawings or bill of quantities and we’ll come back with a clear, realistic price."
      />
    </main>
  )
}
