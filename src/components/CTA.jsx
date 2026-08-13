import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { Arrow } from './Icons.jsx'
import { TopoBackdrop } from './Art.jsx'
import { company } from '../data/content.js'

export default function CTA({ title = 'Let’s break ground.', text }) {
  return (
    <section className="on-dark cta-panel">
      <TopoBackdrop className="hero-topo" style={{ color: '#f4f1ea', opacity: 0.06 }} />
      <div className="cta-inner">
        <Reveal><span className="eyebrow">Start a project</span></Reveal>
        <Reveal delay={80}><h2 className="display-lg">{title}</h2></Reveal>
        {text && <Reveal delay={140}><p className="lead">{text}</p></Reveal>}
        <Reveal delay={200}>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-solid">
              Request a quote <Arrow className="btn-arrow" />
            </Link>
            <a href={company.phoneHref} className="btn btn-ghost">{company.phone}</a>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="cta-contact-row">
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <span>{company.address.join(', ')}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
