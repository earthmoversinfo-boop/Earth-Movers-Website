import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { Arrow } from '../components/Icons.jsx'
import { company, images } from '../data/content.js'

const SERVICE_OPTIONS = [
  'Excavation',
  'Road Construction',
  'Asphalt Works',
  'Cut & Fill',
  'Site Preparation',
  'Trenching & Piling',
  'Material Supply',
  'Equipment Rental',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [services, setServices] = useState([])

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const toggleService = (s) =>
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]))

  // Opens the visitor's mail client with the enquiry pre-filled — works on any
  // static host with no backend required.
  const submit = (e) => {
    e.preventDefault()
    const picked = services.join(', ') || 'General'
    const subject = encodeURIComponent(`Enquiry: ${picked} — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nServices: ${picked}\n\n${form.message}`
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
  }

  return (
    <main>
      <PageBanner
        eyebrow="Contact"
        title="Let’s walk your site."
        text="Call, write or drop by — tell us about your scope and we’ll come back with a clear plan and an honest price."
        img={images.banners.contact}
      />

      <section className="section">
        <div className="wrap contact-grid">
          <div>
            <div className="contact-info">
              <Reveal className="contact-item">
                <span className="label">Phone</span>
                <a href={company.phoneHref}>{company.phone}</a>
              </Reveal>
              <Reveal delay={60} className="contact-item">
                <span className="label">Email</span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </Reveal>
              <Reveal delay={120} className="contact-item">
                <span className="label">Office</span>
                <address>
                  {company.address.map((line) => (
                    <span key={line}>{line}<br /></span>
                  ))}
                </address>
              </Reveal>
              <Reveal delay={180} className="contact-item">
                <span className="label">Hours</span>
                <address>
                  Monday – Saturday, 8:00 – 18:00<br />
                  Site operations: 24/7
                </address>
              </Reveal>
            </div>
          </div>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" required value={form.name} onChange={set('name')} placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="cf-phone">Phone</label>
                  <input id="cf-phone" value={form.phone} onChange={set('phone')} placeholder="+971 …" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com" />
              </div>
              <div className="field">
                <label>Services of interest</label>
                <div className="chip-checks">
                  {SERVICE_OPTIONS.map((s) => (
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
                <label htmlFor="cf-message">Project details</label>
                <textarea
                  id="cf-message"
                  required
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Location, scope, timeline — whatever you have so far."
                />
              </div>
              <div>
                <button type="submit" className="btn btn-solid">
                  Send enquiry <Arrow className="btn-arrow" />
                </button>
              </div>
              <p className="form-note">
                Submitting opens your email app with the enquiry addressed to {company.email}.
              </p>
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
