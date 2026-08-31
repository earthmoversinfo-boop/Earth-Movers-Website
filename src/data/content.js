// ---------------------------------------------------------------------------
// All site content for Earth Movers International lives in this file.
// Edit text here — the components render whatever is defined below.
// ---------------------------------------------------------------------------

export const company = {
  name: 'Earth Movers International',
  legalName: 'Earth Movers International Prime Contracting L.L.C',
  short: 'EMI',
  tagline: 'Earthworks & Road Construction — Dubai, UAE',
  phone: '+971 55 172 7024',
  phoneHref: 'tel:+971551727024',
  // wa.me takes the number in international form with no plus or spaces
  whatsapp: '971551727024',
  email: 'Earthmoversinfo@gmail.com',
  address: ['Capital Golden Tower', 'Office 706, 7th Floor', 'Business Bay, Dubai, UAE'],
  // Google Business listing — used for the footer map and directions link
  mapQuery: 'Earth Movers International Prime Contracting L.L.C, Capital Golden Tower, Business Bay, Dubai',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Earth Movers International Prime Contracting L.L.C, Capital Golden Tower, Business Bay, Dubai'),
  coordinates: "25.1857° N, 55.2766° E",
  founded: 1990,
  inUAE: 2005,
  social: {
    facebook: 'https://www.facebook.com/earthmoversint/',
    linkedin: 'https://www.linkedin.com/company/earth-movers-international',
  },
}

// Named photo slots. Drop files with these names into public/images/ (or point
// entries at files in public/images/library/ after running `npm run fetch-images`)
// and the site uses them automatically; missing files fall back to vector art.
export const images = {
  hero: '/images/hero.jpg',
  fleet: '/images/fleet.jpg',
  about: '/images/about.jpg',
  projects: ['/images/project-fujairah.jpg', '/images/project-municipality.jpg', '/images/project-nakheel.jpg'],
  banners: {
    about: '/images/banner-about.jpg',
    services: '/images/banner-services.jpg',
    projects: '/images/banner-projects.jpg',
    contact: '/images/banner-contact.jpg',
  },
}

// Hero slides. Title is split so the highlighted words render in brand gold.
export const heroSlides = [
  {
    img: '/images/hero-slide-1.jpg',
    eyebrow: 'Earth Movers International — Dubai, UAE',
    titlePre: 'No.1 RTA-Approved ',
    titleGold: 'Road Contractor',
    titlePost: ' in Dubai',
    text: 'We deliver reliable, high-quality road construction with advanced technology — your trusted partner for highways, access roads and infrastructure projects.',
  },
  {
    img: '/images/hero-slide-2.jpg',
    eyebrow: 'Building the ground the UAE rises from',
    titlePre: 'Earthworks, excavation and ',
    titleGold: 'heavy construction',
    titlePost: '.',
    text: 'Infrastructure, commercial and industrial projects across the Emirates — founded in Montreal in 1990, in Dubai since 2005.',
  },
  {
    img: '/images/hero-slide-3.jpg',
    eyebrow: 'RTA-approved asphalt & road works',
    titlePre: 'Asphalt laid to ',
    titleGold: 'tight tolerances',
    titlePost: '.',
    text: 'From sub-base to wearing course — compacted, tested and handed over ready for traffic.',
  },
]

export const certifications = [
  { title: 'RTA Approved', text: 'Roads & Transport Authority approved road contractor' },
  { title: 'Dubai Municipality', text: 'Aligned with municipality standards and permits' },
  { title: 'Since 1990', text: 'Founded in Montreal, in Dubai since 2005' },
  { title: 'HSE First', text: 'Method statements and permits on every lift' },
]

export const hse = [
  {
    title: 'Health & Safety',
    text: 'Every task is planned through method statements, permits to work and daily toolbox talks — so every person goes home safe, every day.',
  },
  {
    title: 'Quality',
    text: 'Compaction tests, level checks and handover certificates on every package. Ground you can build on, documented.',
  },
  {
    title: 'Environment',
    text: 'Dust suppression, controlled disposal and material recycling wherever the ground allows — building without leaving a mark we shouldn’t.',
  },
]

export const news = [
  {
    title: '18 Major RTA Road Projects That Will Slash Dubai Traffic',
    tag: 'Industry Insight',
    href: 'https://earthmoversint.com/rta-road-projects-dubai-traffic/',
  },
  {
    title: 'Road Construction Process & Equipment Needs',
    tag: 'From Our Blog',
    href: 'https://earthmoversint.com/road-construction-process-equipment-needs/',
  },
  {
    title: 'TMA Rental in Dubai & Abu Dhabi — Safer Road Works',
    tag: 'Services',
    href: 'https://tmarentalabudhabi.earthmoversint.com/',
  },
]

export const stats = [
  { value: 35, suffix: '+', label: 'Years since founding', note: 'Montreal, 1990' },
  { value: 20, suffix: '+', label: 'Years in the UAE', note: 'Dubai, since 2005' },
  { value: 17, suffix: '', label: 'Service disciplines', note: 'Earthworks to asphalt' },
  { value: 24, suffix: '/7', label: 'Fleet availability', note: 'Across the Emirates' },
]

// Authorities and organisations whose approvals/registrations EMI holds.
export const approvals = [
  'RTA',
  'FNRC',
  'Dubai Municipality',
  'TAQA',
  'Fujairah Municipality',
  'Sharjah RTA',
  'Parsons',
  'DDA',
  'Dubai South',
  'Dubai Ports',
]

export const clients = [
  'Nakheel PJSC',
  'Dubai Municipality',
  'Fujairah Cement Industry',
  'RTA-Approved Contractor',
  'Infrastructure · Commercial · Industrial',
]

// Featured on the home page (six disciplines)
export const featuredServices = [
  {
    id: 'excavation',
    title: 'Excavation',
    icon: 'excavator',
    img: '/images/library/operator-backhoe.jpg',
    blurb:
      'Bulk excavation, basements and deep digs, powered by one of the largest heavy-excavation fleets in Dubai.',
  },
  {
    id: 'road-construction',
    title: 'Road Construction',
    icon: 'road',
    img: '/images/project-fujairah.jpg',
    blurb:
      'RTA-approved road contracting — road base, sub-base, compaction and finishing for roads across the UAE.',
  },
  {
    id: 'cut-and-fill',
    title: 'Cut & Fill',
    icon: 'grade',
    img: '/images/fleet.jpg',
    blurb:
      'Precision grading and levelling to design elevations, balancing cut and fill for efficient earthworks.',
  },
  {
    id: 'site-preparation',
    title: 'Site Preparation',
    icon: 'site',
    img: '/images/about.jpg',
    blurb:
      'Land clearing, demolition and ground stabilisation that hands over a clean, build-ready site.',
  },
  {
    id: 'asphalt',
    title: 'Asphalt Works',
    icon: 'asphalt',
    img: '/images/library/golden-hour-site.jpg',
    blurb:
      'Old asphalt removal, milling and new asphalt laying with certified materials and tight tolerances.',
  },
  {
    id: 'traffic-management',
    title: 'Traffic Management',
    icon: 'crane',
    img: '/images/svc-traffic-management.jpg',
    blurb:
      'Permits, diversions and compliant traffic management for works inside a live road corridor.',
  },
]

// Full catalogue for the Services page, grouped by discipline
export const serviceGroups = [
  {
    id: 'earthworks',
    number: '01',
    title: 'Earthworks & Ground Engineering',
    intro:
      'The full early-stage scope that turns raw land into a build-ready platform — measured, moved and compacted to specification.',
    services: [
      {
        title: 'Excavation',
        text: 'Bulk excavation, basement digs and confined works delivered with excavators, rock breakers and specialised machinery from one of the largest fleets in Dubai.',
      },
      {
        title: 'Cut & Fill',
        text: 'Balanced cut-and-fill operations that grade sites to design elevations while minimising haulage and material waste.',
      },
      {
        title: 'Earth Works',
        text: 'End-to-end earthworks — excavation, grading, levelling and compaction — for infrastructure, commercial and industrial projects.',
      },
      {
        title: 'Site Preparation',
        text: 'Clearing, grubbing, demolition and ground stabilisation that hands over a clean, compacted, build-ready site.',
      },
      {
        title: 'Land Clearing',
        text: 'Clearing programmes for residential, commercial and infrastructure developments across Dubai and the wider UAE.',
      },
      {
        title: 'Mountain & Rock Removal',
        text: 'Heavy rock breaking and mountain removal using hydraulic breakers and high-reach machines — no compromise on safety.',
      },
      {
        title: 'Trenching',
        text: 'Utility, pipeline and drainage trenching cut to line and level, with shoring and backfill to specification.',
      },
    ],
  },
  {
    id: 'roads',
    number: '02',
    title: 'Roads & Infrastructure',
    intro:
      'As a trusted RTA-approved contractor, we build and maintain the roads Dubai runs on — from sub-base to final surface.',
    services: [
      {
        title: 'Road Construction',
        text: 'RTA-approved road contracting: formation, road base, sub-base, compaction and finishing for internal roads, highways and industrial access.',
      },
      {
        title: 'Asphalt Works',
        text: 'Removal of old asphalt, milling, and new asphalt laying with certified mixes, laid to tight tolerances.',
      },
      {
        title: 'Highway Construction',
        text: 'Highway contracting for the RTA and private clients — large-scale earthworks, pavement structure and road furniture.',
      },
      {
        title: 'Road Maintenance',
        text: 'Ongoing road maintenance and rehabilitation works that keep networks safe, compliant and open to traffic.',
      },
      {
        title: 'Concrete Repair & Maintenance',
        text: 'Structural concrete repair, surface reinstatement and preventive maintenance for roads and hardstandings.',
      },
      {
        title: 'Pipeline Maintenance',
        text: 'Excavation, protection and reinstatement works around live pipeline corridors, executed to oil-and-gas standards.',
      },
    ],
  },
  {
    id: 'marine',
    number: '03',
    title: 'Marine, Demolition & Permits',
    intro:
      'The supporting scopes that sit either side of the main works — coastal, demolition and the approvals behind both.',
    services: [
      {
        title: 'Marine & Coastal Works',
        text: 'Beach levelling, boulder placement and coastal protection works, delivered for clients such as Nakheel PJSC.',
      },
      {
        title: 'Recycling & Demolition',
        text: 'Controlled demolition with segregation and recycling of construction material wherever the ground allows.',
      },
    ],
  },
]

export const projects = [
  {
    client: 'Fujairah Cement Industry',
    location: 'Dibba, Fujairah',
    year: '2021',
    value: 'AED 1.8M',
    sector: 'Roads & Asphalt',
    scope:
      'Removal of old asphalt, levelling, road base and sub-base, compaction, and new asphalt laying.',
  },
  {
    client: 'Dubai Municipality',
    location: 'Dubai',
    year: '2017',
    value: 'AED 0.3M',
    sector: 'Specialised Logistics',
    scope: 'Relocation of animals from Dubai Airport to the Safari — planned, permitted and executed without incident.',
  },
  {
    client: 'Nakheel PJSC',
    location: 'Dubai',
    year: '2015',
    value: 'AED 0.7M',
    sector: 'Marine Works',
    scope: 'Levelling of beach sand, placement of boulders, and compaction of the area.',
  },
]

export const sectors = [
  { title: 'Infrastructure', text: 'Roads, highways and utility corridors for public authorities.' },
  { title: 'Commercial', text: 'Site preparation and enabling works for commercial developments.' },
  { title: 'Industrial', text: 'Heavy earthworks for plants, cement works and logistics facilities.' },
  { title: 'Oil & Gas', text: 'Trenching and pipeline works executed to sector standards.' },
  { title: 'Marine & Coastal', text: 'Beach profiling, boulder placement and coastal protection.' },
  { title: 'Residential', text: 'Land clearing and grading for master-planned communities.' },
]

export const process = [
  {
    step: '01',
    title: 'Survey & Assess',
    text: 'We walk the ground, review drawings and survey levels, and price the real scope — not an estimate of it.',
  },
  {
    step: '02',
    title: 'Plan & Mobilise',
    text: 'Method statements, permits and RTA compliance in place, the right machines mobilised to site.',
  },
  {
    step: '03',
    title: 'Execute',
    text: 'Experienced operators move the earth to line and level, with supervision and QA at every lift.',
  },
  {
    step: '04',
    title: 'Compact & Hand Over',
    text: 'Testing, compaction certificates and a clean handover — ground your project can build on.',
  },
]

export const values = [
  {
    title: 'Safety, first and always',
    text: 'Every method statement, every permit, every lift — planned so that people go home safe.',
  },
  {
    title: 'Compliance built in',
    text: 'RTA-approved and aligned with municipality standards, so approvals never stall your programme.',
  },
  {
    title: 'Fleet depth',
    text: 'One of the largest heavy-excavation fleets in Dubai means no waiting on machines.',
  },
  {
    title: 'Straight dealing',
    text: 'Clear scope, honest pricing and communication you can plan around.',
  },
]

export const fleet = [
  'Excavators',
  'Bulldozers',
  'Wheel Loaders',
  'Rock Breakers',
  'Graders',
  'Compactors',
  'Cranes',
  'Tippers & Trailers',
  'TMA Units',
]

export const timeline = [
  {
    year: '1990',
    title: 'Founded in Montreal, Canada',
    text: 'Earth Movers International begins as an earthworks and heavy-equipment contractor in Montreal.',
  },
  {
    year: '2005',
    title: 'Expansion to Dubai, UAE',
    text: 'EMI establishes its Dubai operation as the emirate accelerates into a global construction market.',
  },
  {
    year: '2015–2021',
    title: 'Landmark deliveries',
    text: 'Projects for Nakheel PJSC, Dubai Municipality and Fujairah Cement Industry cement EMI’s reputation across sectors.',
  },
  {
    year: 'Today',
    title: 'RTA-approved, fleet-strong',
    text: 'A trusted road and earthworks contractor with one of the largest heavy-excavation fleets in Dubai.',
  },
]

// ---------------------------------------------------------------------------
// Locale accessor. The Arabic overlay in content.ar.js carries only the words —
// images, links, phone numbers, years and figures are shared, so each entry is
// merged position-by-position onto its English counterpart.
// ---------------------------------------------------------------------------

import { DEFAULT_LOCALE } from '../i18n/locale.js'
import * as ar from './content.ar.js'

const zip = (base, overlay) =>
  overlay ? base.map((item, i) => ({ ...item, ...(overlay[i] || {}) })) : base

const EN = {
  company,
  heroSlides,
  certifications,
  hse,
  news,
  stats,
  clients,
  projects,
  sectors,
  process,
  values,
  fleet,
  timeline,
  approvals,
  images,
  featuredServices,
  serviceGroups,
}

const AR = {
  ...EN,
  company: { ...company, ...ar.companyAr },
  heroSlides: zip(heroSlides, ar.heroSlidesAr),
  certifications: zip(certifications, ar.certificationsAr),
  hse: zip(hse, ar.hseAr),
  news: zip(news, ar.newsAr),
  stats: zip(stats, ar.statsAr),
  clients: ar.clientsAr,
  projects: zip(projects, ar.projectsAr),
  sectors: zip(sectors, ar.sectorsAr),
  process: zip(process, ar.processAr),
  values: zip(values, ar.valuesAr),
  fleet: ar.fleetAr,
  timeline: zip(timeline, ar.timelineAr),
  approvals: ar.approvalsAr,
}

const BY_LOCALE = { en: EN, ar: AR }

export function contentFor(locale) {
  return BY_LOCALE[locale] || BY_LOCALE[DEFAULT_LOCALE]
}
