// ---------------------------------------------------------------------------
// 301 map for the URLs the old earthmoversint.com site ranks for.
//
// Source: Google Search Console, 29 May - 28 Aug 2026, 74 URLs / 540 clicks /
// 59,703 impressions. Every old URL either resolves to a page on the new site
// or is redirected to the closest real equivalent. Nothing is pointed at the
// homepage: Google reads a mass redirect to "/" as a soft 404 and passes no
// value, so a parent category is used where there is no direct match.
//
// The guide URLs are deliberately kept at the root with their original slugs.
// /road-construction-process/ alone carries 5,002 impressions and 2,009 AI
// Overview impressions, and that kind of visibility is the most fragile thing
// on the site, so it keeps the exact path it already ranks on.
//
// Old paths are written without a trailing slash; the rules generated from
// this table match with or without one.
// ---------------------------------------------------------------------------

export const REDIRECTS = [
  // ---- Tier A: highest traffic. Direct equivalents. --------------------
  ['/backfilling', '/services/earth-works/back-filling'],
  ['/asphalt-contractors-dubai', '/services/road-works/asphalt-works'],
  ['/road-construction-abu-dhabi', '/services/road-works/abu-dhabi'],
  ['/rta-approved-entry-exit-works', '/services/utilities/rta-approved-entry-exit-works'],
  ['/traffic-management-abu-dhabi', '/services/traffic-management/abu-dhabi'],
  ['/material-shifting-services-dubai', '/services/supply/material-shifting'],
  ['/stone-supply-dubai', '/services/supply/stone-supply'],
  ['/road-base-supply-dubai', '/services/supply/road-base-supply'],
  ['/interlock-contractors-dubai', '/services/road-works/heavy-duty-interlock-paving'],
  ['/earth-works-abu-dhabi', '/services/earth-works/abu-dhabi'],
  ['/land-clearing-services-dubai', '/services/earth-works/site-preparation'],

  // ---- Tier B ----------------------------------------------------------
  ['/road-construction-dubai', '/services/road-works/dubai'],
  ['/curb-stone-contractors-dubai', '/services/road-works/kerbstones'],
  ['/parking-construction-dubai', '/services/road-works/parking-construction'],
  ['/road-closure-permits', '/services/traffic-management/road-closure-permits'],
  ['/traffic-diversions', '/services/traffic-management/traffic-management'],
  ['/road-marking-company-dubai', '/services/road-works/road-markings'],
  ['/leveling-and-grading', '/services/earth-works/leveling-and-compaction'],
  ['/excavation-service-abu-dhabi', '/services/earth-works/abu-dhabi'],
  ['/construction-companies-in-uae', '/about'],
  ['/site-preparation', '/services/earth-works/site-preparation'],
  ['/excavation-contractors-dubai', '/services/earth-works/excavation'],
  ['/pipeline-laying-dubai', '/services/utilities/utilities-shifting'],
  ['/infrastructure-piping-dubai', '/services/utilities'],
  ['/traffic-management', '/services/traffic-management'],
  ['/earth-work-services-dubai', '/services/earth-works/dubai'],
  ['/sand-supply-dubai', '/services/supply/sand-supply'],
  ['/temporary-road-contractors-dubai', '/services/road-works/access-roads'],
  ['/gabion-boxes-supply-dubai', '/services/supply/gabion-boxes'],
  ['/road-works-fujairah', '/services/road-works/fujairah'],
  ['/asphalt-works-fujairah', '/services/road-works/fujairah'],
  ['/aggregate-supply-dubai', '/services/supply/aggregate-supply'],
  ['/material-shifting-in-dubai', '/services/supply/material-shifting'],

  // Piling is not an Earth Movers service. Both of these rank for it, so they
  // go to the excavation page rather than being left to 404.
  ['/piling-contractors-dubai', '/services/earth-works/excavation'],
  ['/piling-in-construction', '/services/earth-works/excavation'],

  // ---- Tier C ----------------------------------------------------------
  ['/road-maintenance', '/services/road-works/road-maintenance'],
  ['/cut-and-fill-services-dubai', '/services/earth-works/cut-and-fill'],
  ['/roads-and-infrastructure-works-dubai', '/services/road-works'],
  ['/trenching', '/services/utilities/utilities-shifting'],
  ['/lane-closure-permits', '/services/traffic-management/lane-closure-permits'],
  ['/earth-works-fujairah', '/services/earth-works/fujairah'],
  ['/pipeline-maintenance-dubai', '/services/utilities/rta-service-protection'],
  ['/mountain-removal-services-dubai', '/services/earth-works/excavation'],
  ['/rta-road-projects-dubai-traffic', '/services/traffic-management/dubai'],
  ['/gravel-road-construction-dubai', '/services/road-works/road-base-laying'],
  ['/construction-material-supply-dubai', '/services/supply'],
  ['/dot-approved-entry-and-exit', '/services/utilities/rta-approved-entry-exit-works'],
  ['/yard-preparation-fujairah', '/services/earth-works/fujairah'],
  ['/smart-parking-contractor-dubai', '/services/road-works/parking-construction'],

  // ---- Tier D: no clicks, redirected to the nearest parent. ------------
  ['/rta-highway-contractors-dubai', '/services/road-works/dubai'],
  ['/blog', '/guides'],
  ['/curb-stones-abu-dhabi', '/services/road-works/kerbstones'],
  ['/category/construction-equipments', '/services'],
  ['/parking-areas-abu-dhabi', '/services/road-works/parking-construction'],
  ['/asphalt-road-base-ajman', '/services/road-works/ajman'],
  ['/road-construction-ajman', '/services/road-works/ajman'],
  ['/category/construction', '/services'],
  ['/asphalt-road-abu-dhabi', '/services/road-works/abu-dhabi'],
  ['/road-construction-ras-al-khaimah', '/services/road-works/ras-al-khaimah'],

  // Services Earth Movers no longer sells. Sent to the nearest parent so the
  // links keep resolving; drop them here if the offer comes back.
  ['/heavy-equipment-rental-uae', '/services'],
  ['/marine-work-services-dubai', '/services'],
  ['/breakwater-construction-dubai', '/services/earth-works'],
  ['/golf-course-landscaping-dubai', '/services/earth-works'],
  ['/landscaping-services-dubai', '/services'],
]

// Old URLs that stay exactly where they are, so they need no rule at all:
// /, /about, /contact, /projects, and the six guides at their original slugs.
export const PRESERVED = [
  '/',
  '/about',
  '/contact',
  '/projects',
  '/road-construction-process',
  '/asphalt-vs-concrete-roads',
  '/excavation-in-construction',
  '/common-asphalt-repair-techniques',
  '/future-of-road-construction-dubai',
  '/type-of-asphalt-mix',
]
