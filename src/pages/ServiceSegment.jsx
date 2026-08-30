import { useParams } from 'react-router-dom'
import ServiceDetail from './ServiceDetail.jsx'
import ServiceLocation from './ServiceLocation.jsx'
import NotFound from './NotFound.jsx'
import useLocale from '../i18n/useLocale.js'
import { resolveServiceSegment } from '../data/services.js'

// /services/<category>/<segment> serves two page families — an individual
// service and the category in one emirate. Service and emirate slugs never
// collide, so the segment itself decides which component renders. Slugs are
// shared across languages, so this works identically under /ar.
export default function ServiceSegment() {
  const { category: cSlug, segment } = useParams()
  const { locale, tax } = useLocale()
  const category = tax.categoryBySlug[cSlug]
  if (!category) return <NotFound />

  const match = resolveServiceSegment(category, segment, locale)
  if (match.kind === 'service') {
    return <ServiceDetail category={category} service={match.service} />
  }
  if (match.kind === 'emirate') {
    return <ServiceLocation category={category} emirate={match.emirate} />
  }
  return <NotFound />
}
