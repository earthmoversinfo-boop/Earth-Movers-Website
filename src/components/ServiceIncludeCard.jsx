import { Link } from 'react-router-dom'
import { Arrow, CheckCircle } from './Icons.jsx'
import { asset } from '../lib/asset.js'

// One card per service, used by both the category page ("What's included") and
// the emirate page ("What we deliver in <emirate>"). Those lists were pure
// text, which on a page with six or nine entries reads as a wall — so each
// entry now leads with the photograph from that service's own page. The check
// badge stays, because the list is still saying "this is included", but it
// rides on the image instead of occupying a column of its own.
export default function ServiceIncludeCard({ to, name, text, linkLabel, img, alt, stacked }) {
  return (
    <Link to={to} className={`incl-card${stacked ? ' incl-card-stacked' : ''}`}>
      <span className="incl-card-media">
        <img src={asset(img)} alt={alt || name} loading="lazy" />
        <span className="incl-card-tick" aria-hidden="true">
          <CheckCircle />
        </span>
      </span>
      <span className="incl-card-body">
        <h3>{name}</h3>
        <p>{text}</p>
        <span className="text-link">
          {linkLabel} <Arrow />
        </span>
      </span>
    </Link>
  )
}
