import { Link } from 'react-router-dom'
import { Arrow, Pin } from './Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { taxonomies, taxonomyFor } from '../data/services.js'
import { asset } from '../lib/asset.js'

// The emirate cards appear in three places — the category page, a service page
// and the "other emirates" strip — so they are one component rather than three
// copies of the same markup.
//
// The card leads with the emirate itself: the section heading above it already
// says which service this is, so repeating "Road Works in …" on every card only
// buried the one word that differs. Underneath sits the same name in the other
// script, which is real information on a bilingual site.
//
// Each card carries a photograph from this category's own services, cycled by
// position so the seven cards differ from one another. The picture illustrates
// the work, not the place — we do not hold a photograph of every emirate, and
// captioning a Fujairah mountain road as "Ajman" would be a lie for the sake
// of decoration. So the alt text names the operation, and the emirate is said
// in words underneath where it belongs.
export default function EmirateCard({ emirate, categorySlug, index = 0, delay }) {
  const { locale, href } = useLocale()
  const other = locale === 'ar' ? 'en' : 'ar'
  const otherName = taxonomies[other].emirateBySlug[emirate.slug]?.name
  // Earth Works has five services covering seven emirates, so the wide crops
  // alone would repeat inside one view. The portrait crop of each service
  // extends the pool — a different framing of the same job rather than the
  // same frame twice. The category picture is deliberately not used here: it
  // is cut from one of these services already, so it would collide.
  const category = taxonomyFor(locale).categoryBySlug[categorySlug]
  const services = category?.services || []
  const pool = [
    ...services.map((sv) => ({ img: sv.img, name: sv.name })),
    ...services.map((sv) => ({ img: sv.tallImg, name: sv.name })),
  ]
  const shown = pool.length ? pool[index % pool.length] : null

  return (
    <Link
      to={href(`/services/${categorySlug}/${emirate.slug}`)}
      className="em-card"
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {shown && (
        <span className="em-card-media">
          <img src={asset(shown.img)} alt={shown.name} loading="lazy" />
        </span>
      )}
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
