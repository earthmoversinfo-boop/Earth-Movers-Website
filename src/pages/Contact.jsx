import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { Arrow, WhatsApp } from '../components/Icons.jsx'
import { whatsAppHref, whatsAppMessage } from '../components/WhatsAppButton.jsx'
import useLocale from '../i18n/useLocale.js'

export default function Contact() {
  const { t, locale, tax, content } = useLocale()
  const { company, images } = content
  const waHref = whatsAppHref(company.whatsapp, whatsAppMessage('/contact', locale, t, tax))
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  // Opens the visitor's mail client with the enquiry pre-filled — works on any
  // static host with no backend required.
  const submit = (e) => {
    e.preventDefault()
    const picked = form.service || t('ct.general')
    const subject = encodeURIComponent(t('ct.subject', { picked, name: form.name }))
    const body = encodeURIComponent(
      [
        `${t('ct.name')}: ${form.name}`,
        `${t('ct.phone')}: ${form.phone}`,
        `${t('ct.email')}: ${form.email}`,
        `${t('ct.need')} ${picked}`,
        '',
        form.message,
      ].join('\n')
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <PageBanner
        eyebrow={t('ct.eyebrow')}
        title={t('ct.title')}
        text={t('ct.lead')}
        img={images.banners.contact}
      />

      {/* 1 — the two things a visitor most often wants: to call, or to write */}
      <section className="section">
        <div className="wrap">
          <h2 className="block-label">{t('ct.reachEyebrow')}</h2>

          <div className="reach-grid">
            <Reveal>
              <a href={company.phoneHref} className="reach-card">
                <span className="reach-label">{t('ct.callLabel')}</span>
                <span className="reach-value" dir="ltr">{company.phone}</span>
                <span className="reach-note">{t('ct.callNote')}</span>
              </a>
            </Reveal>
            <Reveal delay={70}>
              <a href={waHref} target="_blank" rel="noreferrer" className="reach-card reach-card-wa">
                <span className="reach-label">
                  <WhatsApp className="reach-wa-icon" /> {t('wa.cardLabel')}
                </span>
                <span className="reach-value" dir="ltr">{company.phone}</span>
                <span className="reach-note">{t('wa.cardNote')}</span>
              </a>
            </Reveal>
            <Reveal delay={140}>
              <a href={`mailto:${company.email}`} className="reach-card">
                <span className="reach-label">{t('ct.emailLabel')}</span>
                <span className="reach-value" dir="ltr">{company.email}</span>
                <span className="reach-note">{t('ct.emailNote')}</span>
              </a>
            </Reveal>
          </div>

          <div className="reach-meta">
            <Reveal className="reach-meta-item">
              <span className="label">{t('ct.office')}</span>
              <address>{company.address.join(', ')}</address>
              <span className="reach-note">{t('ct.officeNote')}</span>
            </Reveal>
            <Reveal delay={70} className="reach-meta-item">
              <span className="label">{t('ct.hours')}</span>
              <address>
                {t('ct.hoursValue')}
                <br />
                {t('ct.hoursSite')}
              </address>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2 — the form, kept to three required fields and one choice */}
      <section className="section section-paper hairline-top">
        <div className="wrap">
          <div className="form-head">
            <Reveal><span className="eyebrow">{t('ct.formEyebrow')}</span></Reveal>
            <Reveal delay={80}><h2 className="display-md">{t('ct.formTitle')}</h2></Reveal>
            <Reveal delay={140}><p className="lead">{t('ct.formLead')}</p></Reveal>
          </div>

          <Reveal delay={160}>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-name">{t('ct.name')}</label>
                  <input
                    id="cf-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={set('name')}
                    placeholder={t('ct.namePlaceholder')}
                  />
                </div>
                <div className="field">
                  <label htmlFor="cf-phone">{t('ct.phone')}</label>
                  <input
                    id="cf-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    dir="ltr"
                    value={form.phone}
                    onChange={set('phone')}
                    placeholder={t('ct.phonePlaceholder')}
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-email">
                  {t('ct.email')} <span className="field-optional">{t('ct.optional')}</span>
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  dir="ltr"
                  value={form.email}
                  onChange={set('email')}
                  placeholder={t('ct.emailPlaceholder')}
                />
              </div>

              {/* one choice instead of eighteen checkboxes */}
              <div className="field">
                <label htmlFor="cf-service">{t('ct.need')}</label>
                <div className="select-wrap">
                  <select id="cf-service" name="service" value={form.service} onChange={set('service')}>
                    <option value="">{t('ct.needPlaceholder')}</option>
                    {tax.categories.map((c) => (
                      <option key={c.slug} value={c.name}>{c.name}</option>
                    ))}
                    <option value={t('ct.notSure')}>{t('ct.notSure')}</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="cf-message">{t('ct.details')}</label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  value={form.message}
                  onChange={set('message')}
                  placeholder={t('ct.detailsPlaceholder')}
                />
                <span className="field-hint">{t('ct.detailsHint')}</span>
              </div>

              {/* what will happen, said before the button rather than after it */}
              <p className="form-note">{t('ct.noteBefore', { email: company.email })}</p>

              <button type="submit" className="btn btn-solid form-submit">
                {t('ct.send')} <Arrow className="btn-arrow" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* 3 — reference, not an action */}
      <section className="section">
        <div className="wrap">
          <div className="form-head">
            <Reveal><span className="eyebrow">{t('ct.mapEyebrow')}</span></Reveal>
            <Reveal delay={80}><h2 className="display-md">{t('ct.mapHeading')}</h2></Reveal>
          </div>
          <Reveal className="map-frame">
            <iframe
              title={t('ct.mapTitle')}
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </main>
  )
}
