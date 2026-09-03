// ---------------------------------------------------------------------------
// Editorial guides, kept at the root slugs the old site already ranks on.
//
// These are not new content ideas: every one of them is a URL earning
// impressions on earthmoversint.com today. /road-construction-process alone
// draws 5,002 impressions a quarter plus 2,009 AI Overview impressions, which
// is the single largest block of visibility the company has and the most
// fragile to move. So the paths stay exactly where they are and the pages are
// rewritten underneath them.
//
// Each guide ends by pointing at the service pages that answer the intent
// commercially — the old versions ranked and then dead-ended, which is why
// four of them earn impressions and no clicks at all.
//
//   slug      root path, unchanged from the old site
//   title     H1 and the opener of the meta title
//   lead      standfirst, also the meta description
//   updated   ISO date, emitted as dateModified
//   sections  { h, p[] } — the body
//   related   service paths the guide should hand off to
// ---------------------------------------------------------------------------

export const guides = [
  {
    slug: 'road-construction-process',
    title: 'The Road Construction Process, Step by Step',
    lead: 'How a road actually gets built in the UAE — from survey and formation through sub-base, road base and asphalt to markings and handover.',
    updated: '2026-08-31',
    sections: [
      {
        h: 'What the process actually is',
        p: [
          'A road is a stack of layers, each one built on the layer below and each one tested before the next goes on. Skip a test and the failure surfaces years later in the wearing course, where it costs several times more to fix than it would have cost to get right. The sequence below is the one an RTA, DMT or municipality job runs to in the UAE, and it does not vary much between a plot access and a dual carriageway — only the thicknesses and the paperwork do.',
        ],
      },
      {
        h: '1. Survey and setting out',
        p: [
          'Existing levels are picked up and compared against the design. This is where cut and fill volumes get confirmed, where a discrepancy between the drawing and the ground is caught, and where the road alignment is physically pegged out. Getting this wrong is the most expensive mistake available, because everything downstream inherits it.',
        ],
      },
      {
        h: '2. Clearing and formation',
        p: [
          'Vegetation, obstructions, uncontrolled fill and anything else unsuitable comes out. The formation — the prepared subgrade the road sits on — is then cut or filled to level and compacted. Field density testing confirms it before anything else is placed. A soft spot left in the formation will telegraph all the way up through the pavement.',
        ],
      },
      {
        h: '3. Sub-base',
        p: [
          'Granular sub-base is laid in controlled layers, watered and compacted. It spreads load, and it gives a working platform for the plant that follows. Each layer is tested for density; the grading of the material is checked against the approved source, because material that segregates in delivery gives a layer that passes in one place and fails in another.',
        ],
      },
      {
        h: '4. Road base',
        p: [
          'Crushed aggregate road base is the structural heart of the pavement. It goes down to the authority grading, gets trimmed to level and falls, and is compacted to the specified density. Levels are surveyed before the asphalt goes on, because any dip here becomes a ponding problem on the finished surface that no amount of wearing course will hide.',
        ],
      },
      {
        h: '5. Prime coat and asphalt',
        p: [
          'A prime or tack coat bonds the base to the asphalt. Binder course goes on first, then the wearing course, each laid by paver and closed by rollers while the mat is still in the temperature window. Compaction here is time-critical in a way nothing else on the job is: once the mat cools below the range, the density that was not achieved cannot be recovered.',
          'Joints are where asphalt fails first. Longitudinal and transverse joints are cut, tacked and rolled deliberately rather than left to chance, because an open joint lets water into the base and the base is what the road depends on.',
        ],
      },
      {
        h: '6. Kerbs, drainage and markings',
        p: [
          'Kerbs and channels define the edge and carry surface water to the drainage. Line marking, hatching, arrows and studs go on last, to the approved marking drawing. On an RTA road the marking layout is part of the approval, not a detail to be settled on site.',
        ],
      },
      {
        h: '7. Testing, handover and defects',
        p: [
          'The file matters as much as the road. Density results, material certificates, level surveys and as-built drawings are what the authority signs off against. A road built correctly with an incomplete file still fails handover, and assembling that file after the fact is far harder than compiling it as the layers go down.',
        ],
      },
    ],
    related: [
      '/services/road-works/road-base-laying',
      '/services/road-works/asphalt-works',
      '/services/earth-works/leveling-and-compaction',
      '/services/road-works/access-roads',
    ],
  },
  {
    slug: 'asphalt-vs-concrete-roads',
    title: 'Asphalt vs Concrete Roads: Which to Specify in the UAE',
    lead: 'Cost, heat performance, repairability and service life compared for UAE conditions — and where each one is actually the right answer.',
    updated: '2026-08-31',
    sections: [
      {
        h: 'The short answer',
        p: [
          'Asphalt is cheaper to build, far cheaper to repair, and can be opened to traffic within hours. Concrete lasts longer under heavy static loads and does not rut in extreme heat. In the UAE that usually means asphalt for carriageways, access roads and car parks, and concrete for container yards, heavy industrial hardstanding and anywhere loaded wheels stand still in the sun.',
        ],
      },
      {
        h: 'Cost',
        p: [
          'Concrete typically costs substantially more to lay than an equivalent asphalt pavement, and the gap widens on smaller areas where the batching and curing overheads cannot be spread. Over a long life the whole-life numbers get closer, but only if the concrete is never dug up — one service crossing through a concrete slab erases years of savings.',
        ],
      },
      {
        h: 'Heat',
        p: [
          'This is where the UAE differs from the textbooks. Summer surface temperatures push asphalt binder toward the top of its softening range, and under stationary heavy wheel loads that shows up as rutting. The answer is usually a modified binder and a properly designed mix rather than a switch to concrete — but where loaded vehicles genuinely stand still for hours, concrete stops being an over-specification and starts being the correct choice.',
        ],
      },
      {
        h: 'Repair and services',
        p: [
          'An asphalt patch is a same-day operation: saw cut, break out, reinstate, roll, reopen. A concrete repair means breaking out a full bay, reinstating reinforcement and waiting for a cure. If the pavement sits over services that will be accessed again — which on almost every UAE plot they will be — asphalt is the pragmatic answer.',
        ],
      },
      {
        h: 'Service life',
        p: [
          'A well-built asphalt pavement with a maintained surface gives long service, with the wearing course resurfaced periodically while the base stays put. Concrete lasts longer before major intervention but fails less gracefully: asphalt degrades visibly and can be planed and overlaid, while a failed slab needs replacing.',
        ],
      },
      {
        h: 'How to decide',
        p: [
          'Ask what stands on it and for how long. Moving traffic, parking bays, access roads, internal estate roads — asphalt. Container stacking, crane pads, heavy static loads, wash-down areas — concrete. Mixed-use yards are often best split rather than surfaced in one material throughout.',
        ],
      },
    ],
    related: [
      '/services/road-works/asphalt-works',
      '/services/road-works/parking-construction',
      '/services/road-works/heavy-duty-interlock-paving',
      '/services/road-works/road-maintenance',
    ],
  },
  {
    slug: 'excavation-in-construction',
    title: 'Excavation in Construction: Types, Methods and Controls',
    lead: 'What excavation involves on a UAE project — bulk and detailed digging, rock, batters, dewatering, disposal and the controls that keep it safe.',
    updated: '2026-08-31',
    sections: [
      {
        h: 'What excavation covers',
        p: [
          'Excavation is any removal of ground to reach a design level. On a UAE site it splits into bulk excavation — large volumes taken down to a formation or basement level — and detailed excavation for footings, pile caps, pits and trenches, where the tolerance is tight and the machine is small.',
        ],
      },
      {
        h: 'Reading the ground first',
        p: [
          'The geotechnical report decides the method. Coastal Dubai and Sharjah plots are typically loose sand over a caprock band, so batters have to be pulled back or the sides supported. Ras Al Khaimah and Fujairah put you into hard strata within a few metres, which means breakers and a different production rate. Older industrial plots hide uncontrolled fill, buried slabs and abandoned services that appear on no drawing.',
        ],
      },
      {
        h: 'Batters, benching and support',
        p: [
          'An unsupported face in sand does not give warning before it goes. Excavations are either battered back to a safe angle, benched in steps, or supported — sheet piling, shoring or soldier piles depending on depth and what is next to the dig. Which one applies is a design decision taken from the soil report, not a judgement made in the hole.',
        ],
      },
      {
        h: 'Water',
        p: [
          'Groundwater across much of the UAE coast is shallow and saline. Below the water table, dewatering runs alongside the excavation, with discharge consented and monitored. Saline groundwater also drives the material specification for anything placed back against structures.',
        ],
      },
      {
        h: 'Services',
        p: [
          'Scanning and trial pits before machines start is not optional. A struck live cable or water main stops the job, and on an RTA or utility corridor it brings a penalty as well. Anything uncharted should be recorded and reported before it is removed.',
        ],
      },
      {
        h: 'Disposal',
        p: [
          'Excavated material is classified, loaded and hauled to a permitted tip under municipal disposal permit, with tickets retained for the project file. Suitable material kept on site as fill is almost always cheaper than exporting it and importing replacement later — that decision belongs at tender stage, not once the tippers are running.',
        ],
      },
    ],
    related: [
      '/services/earth-works/excavation',
      '/services/earth-works/site-preparation',
      '/services/earth-works/back-filling',
      '/services/earth-works/leveling-and-compaction',
    ],
  },
  {
    slug: 'common-asphalt-repair-techniques',
    title: 'Common Asphalt Repair Techniques Explained',
    lead: 'Patching, milling and overlay, crack sealing and full-depth reinstatement — what each one fixes, and when it is the wrong tool.',
    updated: '2026-08-31',
    sections: [
      {
        h: 'Diagnose before you repair',
        p: [
          'Almost every failed asphalt repair is a surface treatment applied to a base problem. Cracking, rutting and potholes are symptoms; the cause is underneath, in a base that is holding water or was never compacted properly. Resurfacing over a failed base buys a year at most.',
        ],
      },
      {
        h: 'Crack sealing',
        p: [
          'The cheapest intervention and, done early, the highest value. Sealing keeps water out of the base, and water in the base is what turns a hairline crack into a pothole. It works on isolated cracks in a sound pavement; it does nothing for crocodile cracking, which is a structural signal.',
        ],
      },
      {
        h: 'Surface patching',
        p: [
          'Saw-cut a rectangle, break out the failed surface, tack the edges, reinstate and compact. Fast and effective where the base below is sound. Patch edges are where the repair fails, so cutting square and tacking properly matters more than the material used.',
        ],
      },
      {
        h: 'Full-depth reinstatement',
        p: [
          'Where the base has gone — crocodile cracking, deformation, a service crossing — the repair has to go down to sound material and rebuild the layers. More expensive, and the only thing that actually works. This is the standard repair after a utility trench, and it is where cheap reinstatement shows itself within a year.',
        ],
      },
      {
        h: 'Milling and overlay',
        p: [
          'Plane off the worn wearing course and lay a new one. The right answer for a road whose base is sound but whose surface is worn, oxidised or rutted at the top. It restores ride quality and levels without touching the structure, and it keeps the finished level unchanged — which matters where kerbs and gullies are fixed.',
        ],
      },
      {
        h: 'Choosing between them',
        p: [
          'If water is getting in but the pavement is sound, seal. If the surface has failed locally, patch. If the base has failed, reinstate full depth. If the surface is worn across an area but the structure is intact, mill and overlay. Anything else is deferring the cost at interest.',
        ],
      },
    ],
    related: [
      '/services/road-works/road-maintenance',
      '/services/road-works/asphalt-patch-works',
      '/services/road-works/asphalt-works',
      '/services/traffic-management/lane-closure-permits',
    ],
  },
  {
    slug: 'type-of-asphalt-mix',
    title: 'Types of Asphalt Mix and Where Each One Is Used',
    lead: 'Wearing course, binder course, base course and the modified mixes — how UAE specifications differ and what to ask for.',
    updated: '2026-08-31',
    sections: [
      {
        h: 'The pavement is layered, and so are the mixes',
        p: [
          'An asphalt pavement is not one material. Each layer has a different job, so each has a different aggregate size, binder content and compaction target. Specifying "asphalt" without saying which layer is how the wrong mix ends up on site.',
        ],
      },
      {
        h: 'Wearing course',
        p: [
          'The top layer, and the only one anyone sees. Smaller aggregate for ride quality and skid resistance, denser gradation to keep water out. This is the layer that gets planed and replaced during the pavement life while the structure below stays put.',
        ],
      },
      {
        h: 'Binder course',
        p: [
          'The intermediate layer that carries load down from the surface. Larger aggregate, laid thicker than the wearing course. Compaction here matters structurally — under-compacted binder course shows up as rutting under wheel paths long before the surface itself wears out.',
        ],
      },
      {
        h: 'Base course',
        p: [
          'Where the pavement design calls for asphalt rather than granular material in the structural layer, base course is a coarse, heavily compacted mix carrying the main structural duty. Common on heavily trafficked roads and industrial pavements.',
        ],
      },
      {
        h: 'Modified binders',
        p: [
          'Polymer-modified binders widen the temperature range the asphalt performs across. In the UAE the reason is summer heat: a modified binder resists rutting under standing heavy loads where a conventional binder softens. Worth the cost on bus stops, junction approaches, loading areas and anywhere vehicles stop rather than pass.',
        ],
      },
      {
        h: 'Authority specifications',
        p: [
          'RTA, DMT and each municipality publish their own mix designs and approved sources. A mix approved for one is not automatically acceptable to another, and material approval is a submission with a lead time. Fix the specification and the source before the programme depends on the paver arriving.',
        ],
      },
    ],
    related: [
      '/services/road-works/asphalt-works',
      '/services/road-works/asphalt-patch-works',
      '/services/road-works/road-base-laying',
      '/services/road-works/road-base-laying',
    ],
  },
  {
    slug: 'future-of-road-construction-dubai',
    title: 'The Future of Road Construction in Dubai',
    lead: 'Machine control, recycled pavement, cooler surfacing and tighter permitting — what is actually changing on Dubai road projects.',
    updated: '2026-08-31',
    sections: [
      {
        h: 'Machine control is now the baseline',
        p: [
          'GPS and total-station guidance on graders, dozers and pavers has moved from a differentiator to an expectation on larger Dubai packages. The gain is not speed so much as rework: layers hit level first time, material overrun drops, and the as-built survey stops being an argument.',
        ],
      },
      {
        h: 'Recycled and reclaimed material',
        p: [
          'Reclaimed asphalt pavement and recycled aggregate are increasingly accepted in lower layers where the specification allows. The constraint is consistency rather than the principle — recycled material has to be graded and tested as rigorously as virgin, and that is a supply chain question before it is an engineering one.',
        ],
      },
      {
        h: 'Heat and surface performance',
        p: [
          'Rising summer temperatures push binder selection and mix design harder every year. Modified binders on standing-load areas are becoming routine rather than exceptional, and cool-surfacing trials are running on pedestrian and low-speed areas where surface temperature is a comfort issue rather than a structural one.',
        ],
      },
      {
        h: 'Permitting is getting tighter, not looser',
        p: [
          'RTA permitting for lane closures, diversions and works in the road reserve continues to demand more up front: better drawings, tighter timing windows, clearer stakeholder coordination. Contractors who treat permits as a submission after award rather than a design activity before it keep losing programme to it.',
        ],
      },
      {
        h: 'What it means for a project today',
        p: [
          'None of this changes the fundamentals — survey, formation, base, asphalt, testing. It changes the tolerance for getting them wrong, and it moves more of the risk to the front of the programme, into material approvals and permits, where it is cheapest to manage.',
        ],
      },
    ],
    related: [
      '/services/road-works/dubai',
      '/services/traffic-management/lane-closure-permits',
      '/services/road-works/asphalt-works',
      '/services/utilities/row-permits',
    ],
  },
]

import { guidesAr } from './guides.ar.js'
import { DEFAULT_LOCALE, LOCALES } from '../i18n/locale.js'

// Arabic reuses the English slugs, so a guide is the base entry with the
// locale's title, lead and prose merged over it. Structure stays identical,
// which is what keeps the hreflang pairing one-to-one.
const OVERLAYS = { ar: guidesAr }

function buildGuides(locale) {
  const overlay = OVERLAYS[locale]
  if (!overlay) return guides
  return guides.map((g) => {
    const o = overlay[g.slug]
    return o ? { ...g, ...o } : g
  })
}

export const guidesByLocale = Object.fromEntries(
  LOCALES.map((l) => [l, buildGuides(l)])
)

export function guidesFor(locale) {
  return guidesByLocale[locale] || guidesByLocale[DEFAULT_LOCALE]
}

export function guideFor(slug, locale = DEFAULT_LOCALE) {
  return guidesFor(locale).find((g) => g.slug === slug) || null
}

export const guideBySlug = Object.fromEntries(guides.map((g) => [g.slug, g]))
export const guidePaths = guides.map((g) => `/${g.slug}`)
export const allGuideRoutes = () => ['/guides', ...guidePaths]
