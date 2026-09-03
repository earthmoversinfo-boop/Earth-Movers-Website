import { useLocation } from 'react-router-dom'
import { WhatsApp } from './Icons.jsx'
import useLocale from '../i18n/useLocale.js'
import { splitLocale } from '../i18n/locale.js'
import { resolveServiceSegment } from '../data/services.js'

// Builds the wa.me link for whatever page the visitor is on. On a service,
// category or emirate page the message names the work, so the enquiry arrives
// already qualified instead of as "hi".
export function whatsAppMessage(pathname, locale, t, tax) {
  const { base } = splitLocale(pathname)
  const m = base.match(/^\/services\/([a-z-]+)(?:\/([a-z-]+))?$/)
  if (!m) return t('wa.msg')

  const category = tax.categoryBySlug[m[1]]
  if (!category) return t('wa.msg')
  if (!m[2]) return t('wa.msgService', { service: category.name })

  const found = resolveServiceSegment(category, m[2], locale)
  if (found.kind === 'service') return t('wa.msgService', { service: found.service.name })
  if (found.kind === 'emirate') {
    return t('wa.msgService', {
      service: t('loc.inEmirate', { name: category.name, emirate: found.emirate.name }),
    })
  }
  return t('wa.msg')
}

export function whatsAppHref(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export default function WhatsAppButton() {
  const { pathname } = useLocation()
  const { t, locale, tax, content } = useLocale()
  const { company } = content
  const href = whatsAppHref(company.whatsapp, whatsAppMessage(pathname, locale, t, tax))

  return (
    <a
      className="wa-fab"
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t('wa.aria')}
    >
      <WhatsApp className="wa-fab-icon" />
      <span className="wa-fab-label">{t('wa.label')}</span>
    </a>
  )
}
