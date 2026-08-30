import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { Arrow } from '../components/Icons.jsx'
import useLocale from '../i18n/useLocale.js'

export default function About() {
  const { t, content, href } = useLocale()
  const { company, stats, timeline, values, certifications, images } = content

  return (
    <main>
      <PageBanner
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        text={t('about.lead', { founded: company.founded, inUAE: company.inUAE })}
        img={images.banners.about}
      />

      <div className="dark-band">
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
          <div className="cert-row">
            <span>{t('home.certRow')}</span>
            {certifications.map((c) => (
              <strong key={c.title}>{c.title}</strong>
            ))}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div className="split-sticky">
            <Reveal><span className="eyebrow">{t('about.storyEyebrow')}</span></Reveal>
            <Reveal delay={80}><h2 className="display-lg">{t('about.storyTitle')}</h2></Reveal>
          </div>
          <div className="split-body">
            <Reveal>
              <p className="lead" style={{ color: 'var(--ink)' }}>{t('about.story1')}</p>
            </Reveal>
            <Reveal delay={90}>
              <p>{t('about.story2')}</p>
            </Reveal>
            <Reveal delay={160}>
              <p>{t('about.story3')}</p>
            </Reveal>
            <Reveal delay={200}>
              <Photo
                src={images.about}
                alt="Earth Movers International team and machinery at work"
                className="about-photo"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('about.milestones')}</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">{t('about.milestonesTitle')}</h2></Reveal>
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
            <Reveal><span className="eyebrow">{t('about.directionEyebrow')}</span></Reveal>
            <Reveal delay={80}><h2 className="display-lg">{t('about.directionTitle')}</h2></Reveal>
          </div>
          <div className="split-body">
            <Reveal>
              <p className="lead">{t('about.vision')}</p>
            </Reveal>
            <Reveal delay={90}>
              <p>{t('about.mission')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('about.valuesEyebrow')}</span></Reveal>
              <Reveal delay={80}><h2 className="display-lg">{t('about.valuesTitle')}</h2></Reveal>
            </div>
            <Reveal delay={160}>
              <Link to={href('/services')} className="btn btn-ghost">
                {t('about.seeServices')} <Arrow className="btn-arrow" />
              </Link>
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

      <CTA title={t('about.ctaTitle')} text={t('about.ctaText')} />
    </main>
  )
}
