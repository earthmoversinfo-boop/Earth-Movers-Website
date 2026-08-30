// ---------------------------------------------------------------------------
// Service taxonomy and location coverage.
//
// Four categories. Earth Works and Road Works are offered across all seven
// emirates; Traffic Management and Utilities are Dubai-only (they hang off RTA
// permitting). Every category/emirate pair becomes its own indexable page.
// ---------------------------------------------------------------------------

export const emirates = [
  {
    slug: 'dubai',
    name: 'Dubai',
    authority: 'RTA and Dubai Municipality',
    context:
      'Dubai runs the tightest permitting regime in the country. We are an RTA-approved contractor and work daily against RTA, Dubai Municipality, DDA, Trakhees and Dubai South requirements — which means approvals, NOCs and traffic diversions are handled in-house rather than sub-let.',
    areas: 'Business Bay, Al Quoz, Jebel Ali, Dubai South, Dubai Investment Park, Nad Al Sheba, Al Barsha and the wider emirate',
  },
  {
    slug: 'abu-dhabi',
    name: 'Abu Dhabi',
    authority: 'the Department of Municipalities and Transport (DMT)',
    context:
      'Abu Dhabi projects run to DMT and Abu Dhabi City Municipality specifications, with their own material approvals and testing regime. Our teams mobilise from Dubai with plant, operators and QA documentation set up for Abu Dhabi standards from day one.',
    areas: 'Mussafah, Khalifa Industrial Zone (KIZAD), Al Ain Road, Yas Island, Al Reem and the Western Region',
  },
  {
    slug: 'sharjah',
    name: 'Sharjah',
    authority: 'Sharjah Roads and Transport Authority (SRTA) and Sharjah Municipality',
    context:
      'Sharjah works are delivered under SRTA and Sharjah Municipality approvals. Industrial estates and new residential districts here need fast, well-documented earthworks and road packages — with dust and haulage controls that satisfy municipal inspection.',
    areas: 'Industrial Areas 1–18, Al Sajaa, Muwaileh, Al Zubair, University City and Kalba',
  },
  {
    slug: 'ajman',
    name: 'Ajman',
    authority: 'Ajman Municipality and Planning Department',
    context:
      'Ajman combines fast-moving residential development with established industrial zones. We deliver compact, well-sequenced earthworks and road packages under Ajman Municipality approvals, sized for plots where access and storage are limited.',
    areas: 'Al Jurf Industrial, Ajman Industrial Area, Al Zorah, Masfout and Manama',
  },
  {
    slug: 'ras-al-khaimah',
    name: 'Ras Al Khaimah',
    authority: 'RAK Municipality and the Public Works Department',
    context:
      'RAK ground is rock as often as it is sand. Our rock breakers, high-reach machines and quarry-experienced operators handle the mountain and hard-strata work that standard excavation fleets stall on, under RAK Municipality approvals.',
    areas: 'Al Ghail, Al Hamra, RAK Industrial Zones, Digdaga, Khuzam and the Al Jazeera corridor',
  },
  {
    slug: 'fujairah',
    name: 'Fujairah',
    authority: 'Fujairah Municipality',
    context:
      'We have delivered road and asphalt packages on the east coast since 2021, including works for Fujairah Cement Industry at Dibba. Mountain terrain, port traffic and long haulage distances are planned into the programme rather than discovered on site.',
    areas: 'Dibba, Masafi, Fujairah Port and Free Zone, Qidfa and the Kalba road corridor',
  },
  {
    slug: 'umm-al-quwain',
    name: 'Umm Al Quwain',
    authority: 'Umm Al Quwain Municipality',
    context:
      'Umm Al Quwain projects are typically greenfield: raw plots that need clearing, filling and levelling before anything can be set out. We bring the full plant train in one mobilisation so small and mid-size sites are not paying for repeat set-ups.',
    areas: 'UAQ Industrial Area, Al Salamah, Falaj Al Mualla and the Emirates Road corridor',
  },
]

export const emirateBySlug = Object.fromEntries(emirates.map((e) => [e.slug, e]))

export const serviceCategories = [
  {
    slug: 'earth-works',
    name: 'Earth Works',
    coverage: 'all',
    tagline: 'Ground moved, shaped and compacted to specification.',
    img: '/images/svc-earth-works.jpg',
    intro:
      'Everything that happens before a structure or a road can be built: cutting, filling, levelling and compacting raw ground into a tested, build-ready platform. We own the fleet — excavators, dozers, loaders, graders, rollers and rock breakers — so programme is set by the works, not by hire availability.',
    services: [
      {
        slug: 'excavation',
        name: 'Excavation',
        keyword: 'excavation contractor',
        text: 'Bulk and detailed excavation for basements, foundations, services and infrastructure corridors — from open cut in sand to hard strata broken out with hydraulic breakers. Batters, benching and shoring are planned to the geotechnical report, and arisings are hauled and disposed of under permit.',
      },
      {
        slug: 'back-filling',
        name: 'Back Filling',
        keyword: 'backfilling contractor',
        text: 'Structural and service backfill placed in controlled layers with approved material, watered and compacted to the specified density. Trench and basement surrounds are the classic source of settlement later — we test each lift rather than filling to the top and hoping.',
      },
      {
        slug: 'cut-and-fill',
        name: 'Cut & Fill',
        keyword: 'cut and fill contractor',
        text: 'Balanced cut-and-fill operations that bring a site to design levels while keeping material on site wherever it is suitable. Survey-controlled with machine guidance, so haulage, import and disposal costs are cut without losing the design profile.',
      },
      {
        slug: 'leveling',
        name: 'Leveling & Grading',
        keyword: 'land leveling contractor',
        text: 'Grading and fine levelling to design elevations and falls, whether that is a formation level for a road, a slab platform, a yard or a laydown area. Graders and GPS-guided blades hold tolerance across large areas.',
      },
      {
        slug: 'compaction',
        name: 'Compaction',
        keyword: 'compaction works contractor',
        text: 'Layer-by-layer compaction with the right roller for the material — vibratory smooth drum, padfoot or plate in confined areas — supported by field density testing and compaction certificates that satisfy consultant and authority sign-off.',
      },
    ],
  },
  {
    slug: 'road-works',
    name: 'Road Works',
    coverage: 'all',
    tagline: 'Access roads, asphalt and everything that carries traffic.',
    img: '/images/svc-road-works.jpg',
    intro:
      'Full road packages from formation to final surface: sub-base and road base, asphalt binder and wearing courses, interlock, kerbs, parking and markings. As an RTA-approved road contractor we build to authority specification, with material approvals and testing documented as we go.',
    services: [
      {
        slug: 'access-roads',
        name: 'Access Roads',
        keyword: 'access roads contractor',
        text: 'Temporary and permanent access roads into plots, sites, plants and remote facilities — formation, sub-base, road base and surfacing, sized for the loads that will actually use them. Built early so heavy deliveries are not stuck at the boundary.',
      },
      {
        slug: 'road-base-laying',
        name: 'Road Base Laying',
        keyword: 'road base laying contractor',
        text: 'Supply, spreading, watering and compaction of aggregate sub-base and road base to specified thickness and density. Levels are surveyed and layers are tested before anything is paved over — the layer that decides whether a road lasts.',
      },
      {
        slug: 'asphalt-works',
        name: 'Asphalt Works',
        keyword: 'asphalt contractor',
        text: 'Binder and wearing course asphalt laid by paver to specified thickness, temperature and joint detail, with approved mixes from certified plants. Includes tack coat, prime coat, milling of existing surfaces and rolling to the required density.',
      },
      {
        slug: 'road-maintenance',
        name: 'Road Maintenance',
        keyword: 'road maintenance contractor',
        text: 'Planned and reactive maintenance for internal roads, industrial estates and community networks: resurfacing, crack sealing, edge repair, drainage clearing and reinstatement — programmed to keep the network open while work proceeds.',
      },
      {
        slug: 'heavy-duty-interlock-paving',
        name: 'Heavy Duty Interlock Paving',
        keyword: 'interlock paving contractor',
        text: 'Heavy-duty interlock and paver block for yards, container areas, service roads and hardstandings that see loaded trucks and forklifts. Correct bedding sand, edge restraint and block thickness — the difference between a yard that holds and one that ruts.',
      },
      {
        slug: 'kerbstones',
        name: 'Kerbstones',
        keyword: 'kerbstone installation contractor',
        text: 'Supply and installation of kerbstones and channels to line and level on concrete haunching — road kerbs, parking kerbs, radius units and drop kerbs at crossings and entrances, finished to authority profile.',
      },
      {
        slug: 'road-markings',
        name: 'Road Markings',
        keyword: 'road marking contractor',
        text: 'Thermoplastic and cold-paint road markings: lane lines, hatching, arrows, crossings, parking bays, numbering and rumble strips — applied to authority standards with reflective beading where specified.',
      },
    ],
  },
  {
    slug: 'traffic-management',
    name: 'Traffic Management',
    coverage: ['dubai'],
    tagline: 'Permits, diversions and safe works within live traffic.',
    img: '/images/svc-traffic-management.jpg',
    intro:
      'Working inside a live road corridor is a permitting exercise as much as a construction one. We prepare traffic diversion drawings, secure RTA permits and install and maintain compliant traffic management so your works proceed without shutting the network — or attracting a stop-work notice.',
    services: [
      {
        slug: 'lane-closure-permits',
        name: 'Lane Closure Permits',
        keyword: 'lane closure permit',
        text: 'Application, drawings and approval for single and multi-lane closures on RTA roads, including night-work windows, tapers, signage schedules and the safety measures the permit conditions require. We handle submission through to permit issue.',
      },
      {
        slug: 'road-closure-permits',
        name: 'Road Closure Permits',
        keyword: 'road closure permit',
        text: 'Full road and carriageway closures with approved diversion routes: traffic impact justification, diversion drawings, staged programmes and coordination with RTA, Police and affected stakeholders before and during the closure.',
      },
      {
        slug: 'traffic-management',
        name: 'Traffic Management Services',
        keyword: 'traffic management contractor',
        text: 'Supply, installation, maintenance and removal of traffic management on site: cones, barriers, delineators, warning and directional signage, flashing arrow boards, TMA (truck-mounted attenuator) units and trained flagmen, inspected and maintained for the life of the works.',
      },
    ],
  },
  {
    slug: 'utilities',
    name: 'Utilities',
    coverage: ['dubai'],
    tagline: 'Entry-exit works, service protection and the approvals behind them.',
    img: '/images/svc-utilities.jpg',
    intro:
      'The works that connect a plot to the network and keep existing services safe while you build. We are RTA-approved for entry and exit works and handle the permit chain — ROW, NOCs, service protection and utility shifting — so approvals do not become the critical path on your programme.',
    services: [
      {
        slug: 'rta-approved-entry-exit-works',
        name: 'RTA Approved Entry & Exit Works',
        keyword: 'RTA approved entry exit contractor',
        text: 'Design-compliant construction of plot entrances and exits onto RTA roads: drop kerbs, aprons, transitions, drainage continuity, marking and signage — executed by an RTA-approved contractor so the works are accepted and the access is legally usable.',
      },
      {
        slug: 'rta-service-protection',
        name: 'RTA Service Protection',
        keyword: 'RTA service protection works',
        text: 'Protection of existing utilities inside the road reserve during construction: trial pits and service scanning, concrete or sleeve protection, slabbing, supports for exposed services and reinstatement — carried out to RTA and utility-owner requirements.',
      },
      {
        slug: 'row-permits',
        name: 'ROW Permits',
        keyword: 'ROW permit Dubai',
        text: 'Right-of-way permit applications for works within road reserves and public land: drawings, method statements, stakeholder NOCs and follow-through to issue, plus compliance during the works so the permit stays valid to completion.',
      },
      {
        slug: 'utilities-shifting',
        name: 'Utilities Shifting',
        keyword: 'utility shifting contractor',
        text: 'Diversion and relocation of services that clash with new works — ducts, cables, water and irrigation lines — coordinated with DEWA, Etisalat, du, Empower and the relevant authority, including shutdown windows, protection and reinstatement.',
      },
      {
        slug: 'noc-services',
        name: 'NOC Services',
        keyword: 'NOC services Dubai',
        text: 'Preparation and processing of No Objection Certificates across the authorities and utility owners a project touches. We assemble the drawing package, submit, answer comments and track approvals to issue so construction can start on time.',
      },
    ],
  },
]

export const categoryBySlug = Object.fromEntries(serviceCategories.map((c) => [c.slug, c]))

// Emirates a given category serves.
export function emiratesFor(category) {
  return category.coverage === 'all'
    ? emirates
    : emirates.filter((e) => category.coverage.includes(e.slug))
}

// Every category/emirate combination that should exist as a page.
export function allServiceRoutes() {
  const routes = ['/services']
  for (const c of serviceCategories) {
    routes.push(`/services/${c.slug}`)
    for (const e of emiratesFor(c)) routes.push(`/services/${c.slug}/${e.slug}`)
  }
  return routes
}
