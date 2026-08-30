import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { Arrow } from '../components/Icons.jsx'
import useLocale from '../i18n/useLocale.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [services, setServices] = useState([])
  const { t, locale, tax, content } = useLocale()
  const { company, images } = content

  // The enquiry checkboxes are the site's own service list, so they stay in
  // step with the taxonomy and appear in whichever language is being read.
  const serviceOptions = tax.categories.flatMap((c) =>
    c.services.filter((s) => !s.hideOnHome).map((s) => s.name)
  )

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const toggleService = (s) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]))

  // Opens the visitor's mail client with the enquiry pre-filled — works on any
  // static host with no backend required.
  const submit = (e) => {
    e.preventDefault()
    const picked = services.join(locale === 'ar' ? '، ' : ', ') || t('ct.general')
    const subject = encodeURIComponent(t('ct.subject', { picked, name: form.name }))
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nServices: ${picked}\n\n${form.message}`
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

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <div className="contact-info">
              <Reveal className="contact-item">
                <span className="label">{t('ct.phone')}</span>
                <a href={company.phoneHref} dir="ltr">{company.phone}</a>
              </Reveal>
              <Reveal delay={60} className="contact-item">
                <span className="label">{t('ct.email')}</span>
                <a href={`mailto:${company.email}`} dir="ltr">{company.email}</a>
              </Reveal>
              <Reveal delay={120} className="contact-item">
                <span className="label">{t('ct.office')}</span>
                <address>
                  {company.address.map((line) => (
                    <span key={line}>{line}<br /></span>
                  ))}
                </address>
              </Reveal>
              <Reveal delay={180} className="contact-item">
                <span className="label">{t('ct.hours')}</span>
                <address>
                  {t('ct.hoursValue')}<br />
                  {t('ct.hoursSite')}
                </address>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-name">{t('ct.name')}</label>
                  <input id="cf-name" required value={form.name} onChange={set('name')} placeholder={t('ct.namePlaceholder')} />
                </div>
                <div className="field">
                  <label htmlFor="cf-phone">{t('ct.phone')}</label>
                  <input id="cf-phone" value={form.phone} onChange={set('phone')} placeholder={t('ct.phonePlaceholder')} dir="ltr" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-email">{t('ct.email')}</label>
                <input id="cf-email" type="email" required value={form.email} onChange={set('email')} placeholder={t('ct.emailPlaceholder')} dir="ltr" />
              </div>
              <div className="field">
                <label>{t('ct.interest')}</label>
                <div className="chip-checks">
                  {serviceOptions.map((s) => (
                    <label className="chip-check" key={s}>
                      <input
                        type="checkbox"
                        checked={services.includes(s)}
                        onChange={() => toggleService(s)}
                      />
                      <span>{s}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-message">{t('ct.details')}</label>
                <textarea
                  id="cf-message"
                  required
                  value={form.message}
                  onChange={set('message')}
                  placeholder={t('ct.detailsPlaceholder')}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-solid">
                  {t('ct.send')} <Arrow className="btn-arrow" />
                </button>
              </div>
              <p className="form-note">{t('ct.note', { email: company.email })}</p>
            </form>
          </Reveal>
        </div>

        <div className="wrap">
          <Reveal className="map-frame">
            <iframe
              title="Earth Movers International — Capital Golden Tower, Business Bay, Dubai"
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
