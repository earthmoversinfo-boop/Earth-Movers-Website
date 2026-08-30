import { useParams } from 'react-router-dom'
import ServiceDetail from './ServiceDetail.jsx'
import ServiceLocation from './ServiceLocation.jsx'
import NotFound from './NotFound.jsx'
import { categoryBySlug, resolveServiceSegment } from '../data/services.js'

// /services/<category>/<segment> serves two page families — an individual
// service and the category in one emirate. Service and emirate slugs never
// collide, so the segment itself decides which component renders.
export default function ServiceSegment() {
  const { category: cSlug, segment } = useParams()
  const category = categoryBySlug[cSlug]
  if (!category) return <NotFound />

  const match = resolveServiceSegment(category, segment)
  if (match.kind === 'service') {
    return <ServiceDetail category={category} service={match.service} />
  }
  if (match.kind === 'emirate') {
    return <ServiceLocation category={category} emirate={match.emirate} />
  }
  return <NotFound />
}
