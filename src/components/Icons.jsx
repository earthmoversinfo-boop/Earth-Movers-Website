// Line-drawn service icons, 48x48 viewBox, stroke follows currentColor.

import { asset } from '../lib/asset.js'

const base = {
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'square',
}

// Silver gridded sphere with golden continents, matching the company logo.
export function GlobeMark({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="emiGlobe" cx="0.38" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#d8d8d8" />
          <stop offset="1" stopColor="#8f8f8f" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="11.1" fill="url(#emiGlobe)" />
      <g stroke="#7f7f7f" strokeWidth="0.55" fill="none">
        <circle cx="12" cy="12" r="11.1" />
        <ellipse cx="12" cy="12" rx="7.3" ry="11.1" />
        <ellipse cx="12" cy="12" rx="2.9" ry="11.1" />
        <path d="M0.9 12h22.2" />
        <path d="M1.7 7.4c3-1.7 17.6-1.7 20.6 0" />
        <path d="M1.7 16.6c3 1.7 17.6 1.7 20.6 0" />
        <path d="M3.9 3.6c2.4-.9 13.8-.9 16.2 0" />
        <path d="M3.9 20.4c2.4.9 13.8.9 16.2 0" />
      </g>
      <g fill="#EFAF2A" stroke="#C88F15" strokeWidth="0.3">
        <path d="M5.2 4.9c2.2-1.3 5.3-1 6.5.3.9 1-.1 1.9-1.2 1.8-1.2-.1-1.6 1.1-2.4 1.8-1 .9-2.6.5-3.1-.7-.4-1.1-.5-2.4.2-3.2Z" />
        <path d="M9.3 12.1c1.5-.6 3 0 3.6 1.3.6 1.5-.1 3.5-1.1 4.7-.7.9-1.8.7-2.2-.4-.5-1.5-.9-2.9-.7-4.3.1-.6.2-1.1.4-1.3Z" />
        <path d="M17.6 6.8c1.4-.5 2.9 0 3.4 1.1.4 1-.1 2-1 2.3-1.1.4-2.3 0-2.8-1-.4-.9-.3-2 .4-2.4Z" />
      </g>
    </svg>
  )
}

// The company's actual logo file (public/images/logo.png, transparent
// background). The dark charcoal lettering needs a light ground, so the
// footer's dark variant sits it on a white chip.
export function Logo({ variant = 'dark' }) {
  const img = <img src={asset('/images/logo.png')} alt="Earth Movers International" className="logo-img" />
  if (variant === 'light') return <span className="logo-chip">{img}</span>
  return img
}

export function IconExcavator(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="8" y="30" width="22" height="7" rx="3.5" />
      <circle cx="13" cy="33.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="19" cy="33.5" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="25" cy="33.5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M12 30v-8h12v8" />
      <path d="M17 22v-5h5v5" />
      <path d="M24 24l12-9" />
      <path d="M36 15l5 9" />
      <path d="M41 24l-5 3 2 4 5-3" />
    </svg>
  )
}

export function IconRoad(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M16 8L8 40" />
      <path d="M32 8l8 32" />
      <path d="M24 10v4M24 20v5M24 31v5" />
    </svg>
  )
}

export function IconGrade(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M6 36h36" />
      <path d="M6 36l14-14h8l14 14" strokeDasharray="3 4" />
      <path d="M14 28l6 8M28 22l10 14" />
      <path d="M20 14h8" />
    </svg>
  )
}

export function IconSite(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M8 38h32" />
      <path d="M12 38V22l10-8v24" />
      <path d="M26 38V20h10v18" />
      <path d="M30 24h2M30 29h2M16 26h2M16 31h2" />
    </svg>
  )
}

export function IconAsphalt(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <rect x="8" y="20" width="16" height="10" />
      <circle cx="32" cy="30" r="6" />
      <path d="M38 30h4M8 36h34" />
      <path d="M12 16l4-6h8l2 6" />
    </svg>
  )
}

export function IconCrane(props) {
  return (
    <svg {...base} {...props} aria-hidden="true">
      <path d="M14 40V10l24 8" />
      <path d="M14 18l24 0" strokeDasharray="0" />
      <path d="M30 18v8" />
      <path d="M27 30h6l-3-4z" />
      <path d="M8 40h14" />
    </svg>
  )
}

export const iconMap = {
  excavator: IconExcavator,
  road: IconRoad,
  grade: IconGrade,
  site: IconSite,
  asphalt: IconAsphalt,
  crane: IconCrane,
}

export function CheckCircle({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 12.2l3 3 6-6.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Arrow({ className }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" className={className} aria-hidden="true">
      <path d="M1 8h13M9 3l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

// WhatsApp's own mark, used the way their brand guidance allows: to label a
// button that opens a chat with us.
export function WhatsApp({ className }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className={className} aria-hidden="true" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.44 9.91-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01c-1.48 0-2.94-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Z" />
    </svg>
  )
}
