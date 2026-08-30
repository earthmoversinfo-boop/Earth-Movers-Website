import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import CTA from '../components/CTA.jsx'
import PageBanner from '../components/PageBanner.jsx'
import Breadcrumbs from '../components/Breadcrumbs.jsx'
import NotFound from './NotFound.jsx'
import { Arrow, CheckCircle } from '../components/Icons.jsx'
import { categoryBySlug, emirateBySlug, emiratesFor } from '../data/services.js'
import { company } from '../data/content.js'

export default function ServiceLocation() {
  const { category: cSlug, emirate: eSlug } = useParams()
  const category = categoryBySlug[cSlug]
  const emirate = emirateBySlug[eSlug]
  if (!category || !emirate) return <NotFound />

  const covered = emiratesFor(category)
  if (!covered.some((e) => e.slug === emirate.slug)) return <NotFound />

  const siblings = covered.filter((e) => e.slug !== emirate.slug)

  return (
    <main>
      <PageBanner
        eyebrow={`${category.name} — ${emirate.name}`}
        title={`${category.name} Contractor in ${emirate.name}`}
        text={`${category.tagline} Delivered to ${emirate.authority} standards.`}
        img={category.img}
      />

      <section className="section">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: category.name, path: `/services/${category.slug}` },
              { name: emirate.name, path: `/services/${category.slug}/${emirate.slug}` },
            ]}
          />

          <div className="split" style={{ marginTop: '2.5rem' }}>
            <div className="split-sticky">
              <Reveal><span className="eyebrow">Local coverage</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-md">{`${category.name} in ${emirate.name}, delivered with our own fleet.`}</h2>
              </Reveal>
              <Reveal delay={140}>
                <Link to="/contact" className="btn btn-solid">Request a quote</Link>
              </Reveal>
            </div>
            <div className="split-body">
              <Reveal>
                <p className="lead" style={{ color: 'var(--ink)' }}>{emirate.context}</p>
              </Reveal>
              <Reveal delay={80}>
                <p>{category.intro}</p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  <strong>Areas we cover in {emirate.name}:</strong> {emirate.areas}. Whether
                  the scope is a single plot or a multi-phase infrastructure package, the same
                  plant, operators and supervision deliver it.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* one section per service — each targets "<service> in <emirate>" */}
      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Our {category.name.toLowerCase()} services</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`What we deliver in ${emirate.name}.`}</h2>
              </Reveal>
            </div>
          </div>

          <div className="loc-services">
            {category.services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 60} className="loc-service">
                <CheckCircle className="check-ico" />
                <div>
                  <h3>{`${s.name} in ${emirate.name}`}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Common questions</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`${category.name} in ${emirate.name} — FAQs`}</h2>
              </Reveal>
            </div>
          </div>
          <div className="faq-list">
            <Reveal className="faq-item">
              <h3>{`Do you carry out ${category.name.toLowerCase()} in ${emirate.name}?`}</h3>
              <p>
                Yes. We deliver {category.name.toLowerCase()} across {emirate.name}, including{' '}
                {emirate.areas}, working to {emirate.authority} standards with our own
                excavators, dozers, graders and rollers.
              </p>
            </Reveal>
            <Reveal delay={60} className="faq-item">
              <h3>{`Are you an approved contractor for works in ${emirate.name}?`}</h3>
              <p>
                We are an RTA-approved contractor and work to the requirements of{' '}
                {emirate.authority}. Method statements, permits and material approvals are
                prepared and submitted by our own team.
              </p>
            </Reveal>
            <Reveal delay={120} className="faq-item">
              <h3>{`How do I get a price for ${category.services[0].name.toLowerCase()} in ${emirate.name}?`}</h3>
              <p>
                Send drawings, a bill of quantities or a description of the scope to{' '}
                <a href={`mailto:${company.email}`}>{company.email}</a>, or call{' '}
                <a href={company.phoneHref}>{company.phone}</a>. Where it helps, we walk the
                ground with you before pricing.
              </p>
            </Reveal>
            <Reveal delay={180} className="faq-item">
              <h3>{`How quickly can you mobilise to ${emirate.name}?`}</h3>
              <p>
                Because the fleet is owned rather than hired, mobilisation is a scheduling
                question rather than an availability one — typically within days of approval
                for standard packages.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">Other emirates</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{`${category.name} elsewhere in the UAE`}</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <Link to={`/services/${category.slug}`} className="text-link">
                All {category.name.toLowerCase()} <Arrow />
              </Link>
            </Reveal>
          </div>
          <div className="loc-grid">
            {siblings.map((e, i) => (
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

      <CTA
        title={`${category.name} in ${emirate.name}?`}
        text={`Tell us about the site and scope — we’ll price the real work and mobilise from Dubai.`}
      />
    </main>
  )
}
