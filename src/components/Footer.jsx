import { Link } from 'react-router-dom'
import { BrandMark } from './Icons.jsx'
import { company, serviceGroups } from '../data/content.js'

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
              <BrandMark className="brand-mark" />
              <span className="brand-name">
                Earth Movers
                <small style={{ color: 'var(--sand-faint-on-dark)' }}>International</small>
              </span>
            </Link>
            <p>
              Founded in Montreal in {company.founded}, in Dubai since {company.inUAE}. An
              RTA-approved earthworks and road construction contractor serving
              infrastructure, commercial and industrial projects across the UAE.
            </p>
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
            {footerServices.map((s) => (
              <Link key={s} to="/services">{s}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <a href={company.phoneHref}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.address.map((line) => (
              <span key={line}>{line}</span>
            ))}
            <span style={{ marginTop: '0.6rem' }}>
              <a href={company.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
              {'  ·  '}
              <a href={company.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {company.name}. All rights reserved.</span>
          <span>{company.coordinates} — Dubai, UAE</span>
        </div>
      </div>
    </footer>
  )
}
