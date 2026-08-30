import { Link } from 'react-router-dom'
import { Logo } from './Icons.jsx'
import { company } from '../data/content.js'
import { serviceCategories, emirates } from '../data/services.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const footerServices = [
    'Excavation',
    'Road Construction',
    'Asphalt Works',
    'Site Preparation',
    'Trenching & Piling',
    'Equipment Rental',
  ]

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand" aria-label="Earth Movers International — home">
              <Logo variant="light" />
            </Link>
            <p>
              Founded in Montreal in {company.founded}, in Dubai since {company.inUAE}. An
              RTA-approved earthworks and road construction contractor serving
              infrastructure, commercial and industrial projects across the UAE.
            </p>
            <div className="footer-certs">
              <span className="footer-cert">RTA Approved</span>
              <span className="footer-cert">Dubai Municipality</span>
              <span className="footer-cert">Since 1990</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            {serviceCategories.map((c) => (
              <Link key={c.slug} to={`/services/${c.slug}`}>{c.name}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Areas We Serve</h4>
            {emirates.map((e) => (
              <Link key={e.slug} to={`/services/road-works/${e.slug}`}>{e.name}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.address.map((line) => (
              <span key={line}>{line}</span>
            ))}

            <a
              className="footer-map"
              href={company.mapsLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${company.legalName} — open in Google Maps`}
            >
              <iframe
                title={`${company.legalName} — location`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                tabIndex={-1}
              />
              <span className="footer-map-cta">Get directions</span>
            </a>

            <span style={{ marginTop: '0.4rem' }}>
              <a href={company.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
              {'  ·  '}
              <a href={company.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {company.legalName}. All rights reserved.</span>
          <span>{company.coordinates} — Dubai, UAE</span>
        </div>
      </div>
    </footer>
  )
}
