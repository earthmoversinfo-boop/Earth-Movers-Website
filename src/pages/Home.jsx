import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Counter from '../components/Counter.jsx'
import Marquee from '../components/Marquee.jsx'
import CTA from '../components/CTA.jsx'
import Photo from '../components/Photo.jsx'
import { Arrow } from '../components/Icons.jsx'
import { FleetScene } from '../components/Art.jsx'
import useLocale from '../i18n/useLocale.js'
import { asset } from '../lib/asset.js'

function HeroSlider() {
  const [active, setActive] = useState(0)
  const { t, content, href } = useLocale()
  const { heroSlides } = content

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6000)
    return () => clearInterval(id)
  }, [heroSlides.length])

  const slide = heroSlides[active]

  return (
    <section className="hero" aria-label={t('home.heroAria')}>
      {heroSlides.map((s, i) => (
        <div key={s.img} className={`hero-slide${i === active ? ' active' : ''}`} aria-hidden={i !== active}>
          <img src={asset(s.img)} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
        </div>
      ))}
      <div className="wrap hero-content" key={active}>
        <Reveal><span className="eyebrow">{slide.eyebrow}</span></Reveal>
        <Reveal delay={90}>
          <h1>{slide.titlePre}<em>{slide.titleGold}</em>{slide.titlePost}</h1>
        </Reveal>
        <Reveal delay={170}><p className="lead">{slide.text}</p></Reveal>
        <Reveal delay={250}>
          <div className="hero-actions">
            <Link to={href('/contact')} className="btn btn-solid">{t('cta.quote')}</Link>
            <Link to={href('/projects')} className="text-link" style={{ color: '#fff' }}>
              {t('home.exploreProjects')} <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="hero-dots" role="tablist" aria-label={t('home.slidesAria')}>
        {heroSlides.map((s, i) => (
          <button
            key={s.img}
            className={`hero-dot${i === active ? ' active' : ''}`}
            aria-label={t('home.slideN', { n: i + 1 })}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const { t, tax, content, href } = useLocale()
  const { stats, projects, fleet, certifications, images } = content

  return (
    <main>
      <HeroSlider />

      {/* ---------------- stats + certifications on dark ---------------- */}
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

      {/* ---------------- our work ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('home.workEyebrow')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{t('home.workTitle')}</h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <Link to={href('/projects')} className="text-link">{t('home.allProjects')} <Arrow /></Link>
            </Reveal>
          </div>

          <div className="work-grid">
            {projects.map((p, i) => (
              <Reveal key={p.client} delay={i * 90} className="work-card">
                <div className="work-card-media">
                  <Photo src={images.projects[i]} alt={`${p.client} — ${p.sector}`} />
                </div>
                <span className="eyebrow">{p.sector} · {p.location}</span>
                <h3>{p.client}</h3>
                <p>{p.scope}</p>
                <span className="work-meta">{p.year} — {p.value}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- statement ---------------- */}
      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="statement">
            <Reveal><span className="eyebrow">{t('home.promiseEyebrow')}</span></Reveal>
            <Reveal delay={90}>
              <h2>
                {t('home.promise')}<em>{t('home.promiseEm')}</em>
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="kicker">
              <Reveal><span className="eyebrow">{t('home.whatEyebrow')}</span></Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg">{t('home.whatTitle')}</h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="lead">{t('home.whatLead')}</p>
              </Reveal>
            </div>
          </div>

          <div className="cat-grid">
            {tax.categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 70}>
                <Link to={href(`/services/${c.slug}`)} className="cat-tile">
                  <div className="svc-tile-media">
                    <Photo src={c.img} alt={c.name} />
                  </div>
                  <h3>{c.name}</h3>
                  <ul className="cat-tile-list">
                    {c.services
                      .filter((s) => !s.hideOnHome)
                      .map((s) => (
                        <li key={s.slug}>{s.name}</li>
                      ))}
                    {c.services.some((s) => s.hideOnHome) && (
                      <li className="cat-tile-more">
                        {t('home.plusServices', {
                          n: c.services.filter((s) => s.hideOnHome).length,
                        })}
                      </li>
                    )}
                  </ul>
                  <span className="cat-tile-foot">
                    <span className="cat-tile-where">
                      {c.coverage === 'all'
                        ? t('cov.availableAll')
                        : t('cov.availableDubai')}
                    </span>
                    <span className="text-link">{t('cta.explore')} <Arrow /></span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- fleet ---------------- */}
      <section className="on-dark section">
        <div className="wrap fleet-grid">
          <div className="fleet-copy">
            <Reveal><span className="eyebrow">{t('home.fleetEyebrow')}</span></Reveal>
            <Reveal delay={80}>
              <h2 className="display-lg">{t('home.fleetTitle')}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="lead">{t('home.fleetLead')}</p>
            </Reveal>
            <Reveal delay={220}>
              <div className="fleet-chips">
                {fleet.map((f) => (
                  <span className="chip" key={f}>{f}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={280}>
              <Link to={href('/contact')} className="btn btn-solid">{t('home.rentEquipment')}</Link>
            </Reveal>
          </div>
          <Reveal delay={200} className="fleet-art">
            <Photo src={images.fleet} alt={t('home.fleetAlt')} fallback={<FleetScene />} />
            <div className="fleet-art-caption">
              <span>{t('home.fleetCaption')}</span>
              <span>{t('home.fleetOperated')}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- clients ---------------- */}
      <Marquee label={t('home.marquee')} />

      {/* ---------------- CTA ---------------- */}
      <CTA title={t('about.ctaTitle')} text={t('home.ctaText')} />
    </main>
  )
}
