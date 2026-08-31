import { Link } from 'react-router-dom'
import { Arrow, Pin } from './Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { taxonomies } from '../data/services.js'

// The emirate cards appear in three places — the category page, a service page
// and the "other emirates" strip — so they are one component rather than three
// copies of the same markup.
//
// The card leads with the emirate itself: the section heading above it already
// says which service this is, so repeating "Road Works in …" on every card only
// buried the one word that differs. Underneath sits the same name in the other
// script, which is real information on a bilingual site and gives the grid the
// character a row of plain white boxes was missing.
export default function EmirateCard({ emirate, categorySlug, delay }) {
  const { locale, href } = useLocale()
  const other = locale === 'ar' ? 'en' : 'ar'
  const otherName = taxonomies[other].emirateBySlug[emirate.slug]?.name

  return (
    <Link
      to={href(`/services/${categorySlug}/${emirate.slug}`)}
      className="em-card"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      <span className="em-card-top">
        <Pin className="em-card-pin" />
        <span className="em-card-name">{emirate.name}</span>
      </span>
      {otherName && (
        <span className="em-card-alt" lang={other}>{otherName}</span>
      )}
      <span className="em-card-foot">
        <span className="em-card-authority">{emirate.authority}</span>
        <Arrow className="em-card-arrow" />
      </span>
    </Link>
  )
}
