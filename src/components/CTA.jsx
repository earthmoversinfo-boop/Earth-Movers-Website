import { Link } from 'react-router-dom'
import Reveal from './Reveal.jsx'
import { Arrow } from './Icons.jsx'
import useLocale from '../i18n/useLocale.js'

export default function CTA({ title, text }) {
  const { t, content, href } = useLocale()
  const { company } = content
  return (
    <section className="cta-panel">
      <div className="cta-inner">
        <Reveal><span className="eyebrow">{t('cta.start')}</span></Reveal>
        <Reveal delay={80}><h2 className="display-lg">{title}</h2></Reveal>
        {text && <Reveal delay={140}><p className="lead">{text}</p></Reveal>}
        <Reveal delay={200}>
          <div className="hero-actions">
            <Link to={href('/contact')} className="btn btn-ink">
              {t('cta.quote')} <Arrow className="btn-arrow" />
            </Link>
            <a href={company.phoneHref} className="btn btn-ghost" dir="ltr">{company.phone}</a>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="cta-contact-row">
            <a href={`mailto:${company.email}`} dir="ltr">{company.email}</a>
            <span>{company.address.join('، ')}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
