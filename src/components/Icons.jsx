// Line-drawn service icons, 48x48 viewBox, stroke follows currentColor.

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
  const img = <img src="/images/logo.png" alt="Earth Movers International" className="logo-img" />
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
