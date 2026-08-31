// ---------------------------------------------------------------------------
// Long-form, per-service page content, keyed by service slug (slugs are unique
// across all four categories). services.js merges this onto each service, and
// ServiceDetail.jsx renders it at /services/<category>/<service>.
//
// Every entry is written for one search intent — "<service> contractor in
// Dubai" and the same phrase for the other emirates — so the copy carries the
// service name, the work it actually involves, and the authority it is built
// for, rather than generic filler.
//
//   h1      the page heading, written for the phrase the page targets
//   lead    one line under the H1, also the meta description opener
//   img     hero image for the page
//   intro   opening paragraph, sits beside the H2
//   body    two or three further paragraphs of detail
//   scope   what is included, rendered as a checked list
//   specs   label/value rows — plant, applications, standards, coverage
//   faqs    three questions, also emitted as FAQPage structured data
// ---------------------------------------------------------------------------

export const serviceContent = {
  // ---- Earth Works --------------------------------------------------------
  excavation: {
    img: '/images/services/excavation.jpg',
    h1: 'Excavation Contractor in the UAE',
    lead: 'Bulk and detailed excavation for basements, foundations, services and infrastructure corridors — in sand, fill or hard rock.',
    caption: 'Tracked excavator lifting spoil clear of an open cut.',
    intro:
      'Excavation is where a programme is won or lost. We take a plot from existing ground to a surveyed, inspected formation level using our own excavators, breakers, loaders and tippers — so the platform is handed to the next trade on the date it was promised, not the date a hire company could supply a machine.',
    body: [
      'Ground across the UAE rarely behaves the same way twice. Coastal Dubai and Sharjah plots are typically loose sand over a caprock band; Ras Al Khaimah and Fujairah put you into hard strata within the first few metres; older industrial plots hide uncontrolled fill, buried slabs and abandoned services. We read the geotechnical report before mobilising and match the spread to it — long-reach machines where batters have to be pulled back, hydraulic breakers where the rock line comes up early, and confined-space machines where boundaries leave no room to slope.',
      'Everything is cut to survey control, with levels checked as the dig proceeds rather than at the end. Batters, benching and temporary slope protection are set out to the design; arisings are classified, loaded and hauled under municipal disposal permits with tickets retained for the project file. Where dewatering, shoring or piling contractors are working alongside us, the sequence is agreed up front so the excavation face is never waiting on someone else.',
    ],
    scope: [
      'Bulk excavation to formation level for basements, podiums and platforms',
      'Detailed excavation for footings, pile caps, ground beams and pits',
      'Trench excavation for drainage, ducts, water and cable routes',
      'Rock breaking and hard-strata removal with hydraulic breakers',
      'Batters, benching and temporary slope protection to the design',
      'Loading, haulage, tipping and disposal under municipal permit',
      'Setting out, level checks and as-dug survey by our own surveyor',
    ],
    specs: [
      ['Plant', 'Tracked excavators, hydraulic rock breakers, wheel loaders, tippers and trailers' ],
      ['Typical use', 'Basements, foundations, service corridors, tank pits, infrastructure trenches'],
      ['Control', 'Survey setting-out, layer level checks, disposal tickets, as-dug records'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Do you carry out excavation in rock?',
        a: 'Yes. Hydraulic rock breakers and high-flow carriers are part of our own fleet, which matters on Ras Al Khaimah and Fujairah sites where the rock line comes up quickly. We price rock separately from soft dig so you can see exactly what the ground is costing you.',
      },
      {
        q: 'Do you remove and dispose of the excavated material?',
        a: 'Yes. Loading, haulage and tipping are included, carried out under the relevant municipal disposal permit with tickets retained. Where material is suitable for reuse as fill we say so at tender stage — keeping it on site is usually cheaper than importing later.',
      },
      {
        q: 'Can you work alongside a shoring or piling contractor?',
        a: 'Routinely. We agree the dig sequence, access and craneage windows with the shoring, piling and dewatering teams before mobilising, so the excavation face and the specialist works are never blocking one another.',
      },
    ],
  },

  'back-filling': {
    img: '/images/services/back-filling.jpg',
    h1: 'Backfilling Contractor in the UAE',
    lead: 'Structural and service backfill placed in controlled, tested layers — the work that stops settlement appearing a year later.',
    caption: 'Excavators placing and spreading imported fill across the platform.',
    intro:
      'Backfilling looks like the simplest operation on a site and is the most common source of long-term defects. Trench reinstatement that settles, basement surrounds that pull away from the structure, slabs that crack over a service run — almost all of it traces back to material tipped in bulk instead of placed and compacted in layers.',
    body: [
      'We backfill with approved material to the specified layer thickness, watering to optimum moisture content and compacting each lift before the next is placed. Around structures, the fill is brought up evenly on all sides so nothing is pushed out of line. Around services, bedding and surround are placed by hand or with light plate compactors to protect the pipe or duct, and only then is machine compaction taken over the top.',
      'Field density testing is carried out lift by lift and the results are compiled into the compaction records the consultant and the authority need at handover. Where imported fill is required we source approved granular material with test certificates rather than whatever is closest, because the certificate is what gets the layer signed off.',
    ],
    scope: [
      'Structural backfill to basements, retaining walls, culverts and manholes',
      'Trench backfill over drainage, water, irrigation, cable and duct runs',
      'Pipe and duct bedding and surround placed by hand or plate',
      'Supply of approved imported granular fill with test certificates',
      'Layer placement, watering and compaction to specified density',
      'Field density testing and compaction records for handover',
      'Reinstatement of the surface above — asphalt, interlock or landscaping',
    ],
    specs: [
      ['Plant', 'Backhoe loaders, wheel loaders, smooth drum and padfoot rollers, plate compactors, water bowsers'],
      ['Typical use', 'Basement surrounds, trench reinstatement, culverts, manholes, retaining structures'],
      ['Control', 'Layer thickness control, moisture control, field density testing, compaction certificates'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'What material do you use for backfill?',
        a: 'Excavated material where it is suitable and approved, imported granular fill where it is not. Either way the material is tested and certified before it goes in — reusing site-won material is only a saving if it actually passes.',
      },
      {
        q: 'Do you provide compaction test results?',
        a: 'Yes. Field density testing is carried out layer by layer and the results are compiled into compaction records issued with the handover documentation, which is what consultants and authorities ask for at inspection.',
      },
      {
        q: 'Can you reinstate the surface after backfilling?',
        a: 'Yes. Because we also carry out road base, asphalt, interlock and kerbing works, trench reinstatement can be completed to the finished surface by one contractor rather than handed to a second one.',
      },
    ],
  },

  'cut-and-fill': {
    img: '/images/services/cut-and-fill.jpg',
    h1: 'Cut and Fill Contractor in the UAE',
    lead: 'Balanced cut-and-fill that brings a site to design levels while keeping material on site wherever it is suitable.',
    caption: 'Dozer pushing site-won material up to design level.',
    intro:
      'Cut and fill is an earthworks balance exercise before it is a machine exercise. Every cubic metre you export and then re-import is paid for twice, so the first thing we do is model the earthworks quantities against the design levels and find how much of the cut can legitimately become fill.',
    body: [
      'Dozers and scrapers move the bulk, graders trim to profile and rollers compact each layer as it is placed. Machine control and survey checks hold the design surface across large, featureless areas — the sort of plot where a few centimetres of drift over a hundred metres turns into an expensive correction at slab stage.',
      'Where cut and fill do not balance, we tell you at tender stage rather than after mobilisation, along with the haulage and disposal or import cost that closes the gap. Stockpile locations, haul routes and dust control are planned into the site layout so the operation does not choke its own access or attract a municipal notice.',
    ],
    scope: [
      'Earthworks quantity balance against design levels before mobilisation',
      'Bulk cut with dozers, excavators and loading shovels',
      'Placement of site-won fill in controlled, compacted layers',
      'Trimming to design profile with graders and machine control',
      'Stockpile management, haul road formation and dust control',
      'Import of approved fill or export of surplus where the balance requires it',
      'Survey control and as-built level records at each stage',
    ],
    specs: [
      ['Plant', 'Crawler dozers, tracked excavators, wheel loaders, motor graders, vibratory rollers, water bowsers'],
      ['Typical use', 'Plot platforms, industrial yards, road formation, landscaped and terraced sites'],
      ['Control', 'Earthworks balance model, machine guidance, survey level checks, layer testing'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'How do you keep haulage costs down on a cut-and-fill job?',
        a: 'By balancing the earthworks before anyone mobilises. Material that can legitimately be reused as fill stays on site, which removes both the disposal charge and the import charge. We show the balance in the tender so the assumption is visible rather than buried in a rate.',
      },
      {
        q: 'Can you work to a machine-guidance model?',
        a: 'Yes. Where a design surface is issued we work to survey control and machine guidance, which holds tolerance far better than eye-and-string across open plots and reduces the amount of correction work at formation level.',
      },
      {
        q: 'Do you handle dust and haul road control?',
        a: 'Yes. Water bowsers, haul route formation and stockpile placement are planned into the site layout from the start, because dust complaints and blocked access stop an earthworks operation faster than plant breakdowns do.',
      },
    ],
  },

  'leveling-and-compaction': {
    img: '/images/services/leveling-and-compaction.jpg',
    h1: 'Leveling & Compaction Contractor in the UAE',
    lead: 'Fine levelling to design elevations and falls, then compaction in tested layers — the two operations that decide whether what goes on top holds.',
    caption: 'A single-drum roller closing the trimmed formation to level.',
    intro:
      'Levelling and compaction are the last earthworks operations before something permanent is built on top, and they only work as a pair. A surface trimmed to perfect tolerance over a platform that was never brought to density will settle anyway; a well-compacted platform at the wrong level is paid for again in extra base, extra asphalt or extra blinding.',
    body: [
      'Motor graders with GPS-guided blades hold the design surface across large areas, with survey checks taken on a grid rather than at a handful of convenient points. Falls are set to the drainage design so water leaves the platform where the drawings say it should — a yard that ponds is a levelling failure, not a drainage one.',
      'The roller then has to suit the material: vibratory smooth drums for granular fill and sub-base, padfoot rollers for cohesive material, plate compactors and trench rollers in confined areas and around services. Layer thickness is controlled to what the plant can genuinely compact rather than what is quick to spread, and moisture is brought to optimum with bowsers before rolling starts.',
      'We work to formation level for roads and pavements, to platform level for slabs and buildings, and to finished level for open yards, laydown areas and hardstandings. Field density tests are taken layer by layer and issued as compaction records with the handover pack; where a layer fails it is reworked and retested rather than covered — a habit that costs an afternoon and saves a rebuild.',
    ],
    scope: [
      'Grading and fine levelling to formation, platform and finished levels',
      'Setting falls and crossfalls to the drainage design',
      'GPS and machine-guided blade control across open areas',
      'Compaction of fill, sub-grade and sub-base in controlled layers',
      'Roller selection to suit granular or cohesive material',
      'Moisture conditioning to optimum content with water bowsers',
      'Confined-area compaction with plate compactors and trench rollers',
      'Grid survey level sheets, field density testing and proof rolling',
      'Compaction certificates for consultant and authority sign-off',
    ],
    specs: [
      ['Plant', 'Motor graders with blade control, single and tandem vibratory rollers, padfoot and pneumatic tyred rollers, plate compactors, water bowsers'],
      ['Typical use', 'Road formation and sub-base, slab platforms, industrial yards, laydown and storage areas, car park sub-grade'],
      ['Control', 'Total station and GPS survey, grid level sheets, layer thickness and moisture control, field density testing, compaction certificates'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'What tolerance and density do you work to?',
        a: 'Both come from the project specification for the layer concerned — formation, sub-base and finished surfaces each carry their own level tolerance, and density is a stated percentage of maximum dry density, typically higher under a road than for general fill. Levels are checked on a survey grid and density is tested as the layers go in, so sign-off rests on records rather than a walk-round.',
      },
      {
        q: 'Do you supply level sheets and compaction certificates?',
        a: 'Yes. Grid level sheets and field density testing through an approved laboratory are both issued as part of the handover documentation, which is what the consultant and the authority ask for at inspection.',
      },
      {
        q: 'Can you level and compact a site someone else has already filled?',
        a: 'Yes, though we survey and test the existing surface first. If the fill underneath was not placed in tested layers, trimming and rolling the top of it only hides the problem — we will say so and price the correction rather than paper over it.',
      },
    ],
  },

  // ---- Road Works ---------------------------------------------------------
  'access-roads': {
    img: '/images/services/access-roads.jpg',
    h1: 'Access Roads Contractor in the UAE',
    lead: 'Temporary and permanent access roads into plots, sites, plants and remote facilities — built for the loads that will actually use them.',
    caption: 'A grader forming an access road ahead of the base layers.',
    intro:
      'An access road is the first thing a project needs and the last thing anyone budgets properly. Deliveries that cannot reach the plot, low-loaders bogged at the boundary and a haul route that turns to ruts after the first rain all cost more than building the road correctly at the start.',
    body: [
      'We build access roads as a full pavement rather than a graded track: formation, compacted sub-base, road base and a surface sized for the axle loads the route will carry. For a construction access that will later be replaced, that may be a compacted base with a bituminous seal. For a permanent plant or facility access, it is a designed pavement with kerbs, drainage falls and markings.',
      'Alignment, turning circles and gradients are set for the vehicles that will actually use the road — low-loaders, concrete trucks, tankers and container trailers need geometry that a car does not. Where the access ties into a public road, the connection is an RTA entry-and-exit or municipal approval matter, and we handle that permit chain as part of the same package.',
    ],
    scope: [
      'Route survey, alignment and gradient setting for heavy vehicle access',
      'Clearing, formation and compacted sub-grade preparation',
      'Sub-base and road base laying, watering and compaction',
      'Asphalt surfacing or bituminous seal to suit the road life',
      'Drainage falls, culverts and side drains where the route needs them',
      'Kerbing, edge protection and turning heads for heavy vehicles',
      'Tie-in to the public road under RTA or municipal approval',
    ],
    specs: [
      ['Plant', 'Excavators, dozers, graders, wheel loaders, rollers, pavers, tippers, water bowsers'],
      ['Typical use', 'Construction site access, plot entrances, plant and factory access, haul roads, remote facility roads'],
      ['Control', 'Survey alignment, layer thickness and density testing, surface level checks'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Can you build a temporary access road quickly?',
        a: 'Yes. A compacted base access with a bituminous seal can be built in a short mobilisation and is normally the right answer for a route that will be dug up again later. We will tell you when a temporary road is false economy for the traffic you have described.',
      },
      {
        q: 'Do you handle the connection to the main road?',
        a: 'Yes. Where the access ties into an RTA road it is an entry-and-exit works package, which we are RTA-approved to carry out, including the drawings, permit and reinstatement. On municipal roads we handle the equivalent approval.',
      },
      {
        q: 'Can the access road carry low-loaders and concrete trucks?',
        a: 'That is what it is designed for. Pavement thickness, turning circles and gradients are set for the heaviest vehicle on your delivery schedule rather than for a standard light-traffic section.',
      },
    ],
  },

  'road-base-laying': {
    img: '/images/services/road-base-laying.jpg',
    h1: 'Road Base Laying Contractor in the UAE',
    lead: 'Supply, spreading, watering and compaction of aggregate sub-base and road base to specified thickness and density.',
    caption: 'A granular base course trimmed and compacted, ready for surfacing.',
    intro:
      'Road base is the layer that decides whether a road lasts. Asphalt is a wearing surface, not a structure — if the base beneath it is under-compacted, badly graded or laid to the wrong thickness, the surface will crack and rut no matter how good the mix was.',
    body: [
      'We supply approved aggregate with test certificates, spread it to controlled layer thickness, condition it to optimum moisture and compact it to the specified density. Levels are surveyed before and after each layer, and field density testing is carried out lift by lift rather than once at the top. Proof rolling before paving picks up soft spots while they are still cheap to fix.',
      'Grading matters as much as compaction. Material that segregates during tipping or spreading gives a layer that tests well in one spot and fails in another, so stockpiling, haulage and spreading are handled to keep the aggregate consistent from the quarry to the blade.',
    ],
    scope: [
      'Supply of approved sub-base and road base aggregate with test certificates',
      'Sub-grade preparation and proof rolling before base is laid',
      'Spreading to controlled layer thickness by grader or paver',
      'Moisture conditioning with water bowsers to optimum content',
      'Compaction to specified density with vibratory and pneumatic rollers',
      'Layer-by-layer field density testing and level survey',
      'Proof rolling and formation handover ready for asphalt or interlock',
    ],
    specs: [
      ['Plant', 'Motor graders, wheel loaders, tippers, vibratory and pneumatic tyred rollers, water bowsers'],
      ['Typical use', 'Road and highway pavements, car parks, industrial yards, container hardstandings, access roads'],
      ['Control', 'Aggregate test certificates, layer thickness control, field density testing, surface level survey'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'What thickness of road base do you lay?',
        a: 'Whatever the pavement design calls for, built up in layers that the compaction plant can genuinely achieve density through. Where a design asks for a single thick lift we will flag it, because an untestable layer is a problem at inspection.',
      },
      {
        q: 'Do you supply the aggregate as well as lay it?',
        a: 'Yes. We supply approved sub-base and road base material with test certificates from certified sources, or work with a client-nominated supplier if the material is already contracted.',
      },
      {
        q: 'How do you prove the base is acceptable before asphalt?',
        a: 'Layer-by-layer field density testing, a level survey of the finished base, and proof rolling with a loaded vehicle to expose soft spots. All three are documented and handed over before paving starts.',
      },
    ],
  },

  'asphalt-works': {
    img: '/images/services/asphalt-works.jpg',
    h1: 'Asphalt Contractor in the UAE',
    lead: 'Binder and wearing course asphalt laid by paver to specified thickness, temperature and joint detail, from approved plant mixes.',
    caption: 'Rollers closing a wearing course behind the paver.',
    intro:
      'Asphalt is unforgiving about temperature and joints. A mix that arrives too cool, a joint that is not properly cut and tacked, or rolling that starts too late will show up as ravelling and cracking within a season — usually just after the defects period closes.',
    body: [
      'We lay binder and wearing course by paver to the specified thickness, working from approved mixes at certified plants with delivery temperatures recorded. Prime and tack coats are applied at the correct rate, longitudinal and transverse joints are cut back and tacked, and the rolling pattern is set to reach density while the mat is still within its temperature window.',
      'For overlays and reconstruction, existing surfaces are milled to profile, edges are saw-cut clean and levels are checked so the new surface ties in without a lip. As an RTA-approved road contractor we work to authority specification on public roads, with material approvals, testing and core results documented as the work proceeds rather than assembled afterwards.',
    ],
    scope: [
      'Prime coat and tack coat application at specified rates',
      'Binder course and wearing course laying by paver',
      'Milling and planing of existing asphalt to profile',
      'Longitudinal and transverse joint preparation and sealing',
      'Rolling to specified density within the mix temperature window',
      'Core testing, thickness checks and surface regularity survey',
      'Reinstatement around manholes, gullies and service crossings',
    ],
    specs: [
      ['Plant', 'Asphalt pavers, tandem and pneumatic tyred rollers, milling machines, bitumen sprayers, tippers'],
      ['Typical use', 'Roads and highways, internal estate roads, car parks, industrial yards, overlays and reconstruction'],
      ['Control', 'Approved plant mixes, delivery temperature records, density and core testing, level and regularity survey'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Are you an approved asphalt contractor for RTA roads?',
        a: 'Yes. We are an RTA-approved road contractor and work to authority specification on public roads, including the material approvals, testing regime and documentation the approval requires.',
      },
      {
        q: 'Can you work at night to avoid closing a road in the day?',
        a: 'Yes, and on live RTA roads night working is usually the only permitted window. We prepare the traffic diversion drawings and secure the lane or road closure permit as part of the same package.',
      },
      {
        q: 'Do you carry out overlays on an existing surface?',
        a: 'Yes — milling to profile, edge saw-cutting, tack coat and overlay, with levels checked so the new surface ties into kerbs, gullies and adjoining sections without a lip.',
      },
    ],
  },

  'road-maintenance': {
    img: '/images/services/road-maintenance.jpg',
    h1: 'Road Maintenance Contractor in the UAE',
    lead: 'Planned and reactive maintenance for internal roads, industrial estates and community networks — programmed to keep the network open.',
    caption: 'Fatigue cracking at the carriageway edge, recorded before repair.',
    intro:
      'Road maintenance is a scheduling problem as much as a construction one. The works themselves are straightforward; doing them without closing the estate, blocking a loading bay or stranding residents is what separates a maintenance contractor from a paving contractor.',
    body: [
      'We survey the network, grade the defects and put a programme against them, so spend goes to the sections that are failing rather than the sections that are easiest to reach. Crack sealing and edge repair early is a fraction of the cost of reconstruction later, and a condition survey makes that argument with evidence instead of opinion.',
      'Work is sequenced and phased so access is maintained throughout — half-width working, night shifts, temporary diversions and staged handbacks. On public roads the traffic management and permits are handled by our own team; on private estates we coordinate with facilities management and residents so nobody discovers the closure on the morning it starts.',
    ],
    scope: [
      'Condition survey and defect grading across the network',
      'Resurfacing, overlay and localised reconstruction',
      'Crack sealing, edge repair and joint treatment',
      'Pothole and settlement repair, including trench reinstatement failures',
      'Gully, channel and drainage clearing and repair',
      'Kerb, channel and road marking renewal',
      'Phased programming with traffic management to keep the network open',
    ],
    specs: [
      ['Plant', 'Milling machines, pavers, tandem rollers, saw cutters, jetting and clearing plant, traffic management units'],
      ['Typical use', 'Industrial estates, community and residential networks, plant and warehouse roads, car park networks'],
      ['Control', 'Condition survey records, prioritised maintenance programme, phased handback with traffic management'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Can you maintain a road network without closing it?',
        a: 'In most cases yes, by working half-width, at night, or in phased sections with temporary diversions. The sequence is agreed before mobilisation so tenants, residents and deliveries know what is happening and when.',
      },
      {
        q: 'Do you provide a condition survey before pricing?',
        a: 'Yes. Surveying and grading the defects first means the budget goes to the sections that are actually failing, and gives you a defensible case for the spend rather than a lump sum with no basis.',
      },
      {
        q: 'Do you handle reactive callouts as well as planned work?',
        a: 'Yes. Reactive repairs — potholes, settlement over a service trench, a failed reinstatement — can be run alongside a planned maintenance programme under the same arrangement.',
      },
    ],
  },

  'asphalt-patch-works': {
    img: '/images/services/asphalt-patch-works.jpg',
    h1: 'Asphalt Patch Repair Contractor in the UAE',
    lead: 'Saw-cut, excavate, reinstate and compact — patch repairs done so the joint does not fail in the first season.',
    caption: 'Hand-working the joints as a reinstated section is laid and closed.',
    intro:
      'Most failed patches fail at the edge. A ragged break-out, no tack on the vertical face and backfill that was never properly compacted give you a patch that sinks, opens at the joint and lets water into the layers you were trying to protect.',
    body: [
      'We saw-cut the perimeter to a clean rectangle, break out to sound material, and rebuild the layers properly — compacted base, tack coat on every face, asphalt in lifts and rolled to density. The joint is sealed so the repair is watertight, and the finished surface is flush with the surrounding road rather than proud or dished.',
      'Patching is most often needed after a utility crossing, a trench reinstatement that has settled, or localised failure over a soft spot. In each case we look at why the failure happened — repairing the surface over a base that is still failing simply buys a few months.',
    ],
    scope: [
      'Saw-cutting to a clean, square perimeter',
      'Break-out and removal of failed material to sound base',
      'Base repair, replacement and compaction where the failure runs deep',
      'Tack coat to all vertical faces and the prepared base',
      'Asphalt reinstatement in lifts, rolled to specified density',
      'Joint sealing and flush finish with the surrounding surface',
      'Utility trench and crossing reinstatement to authority standard',
    ],
    specs: [
      ['Plant', 'Road saws, breakers, mini excavators, plate compactors, trench rollers, tandem rollers, hot boxes'],
      ['Typical use', 'Utility crossing reinstatement, trench repair, pothole and settlement repair, car park and estate road patching'],
      ['Control', 'Cut-back to sound material, layer compaction testing, flush level check, joint sealing'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Why do patch repairs keep failing on our road?',
        a: 'Usually because the break-out was not taken back to sound material, the vertical faces were not tacked, or the base under the patch was never repaired. A patch is only as good as the layer it sits on, which is why we investigate the base rather than just replacing the surface.',
      },
      {
        q: 'Can you patch a road that is still in use?',
        a: 'Yes. Patching is normally done under lane closure or half-width working, with the traffic management and, on RTA roads, the closure permit handled by our own team.',
      },
      {
        q: 'How quickly can a patched section be reopened?',
        a: 'Once the asphalt has cooled sufficiently and been rolled to density — typically the same shift for a standard patch. Night working lets a section be repaired and handed back before the morning peak.',
      },
    ],
  },

  'parking-construction': {
    img: '/images/services/parking-construction.jpg',
    h1: 'Parking Construction Contractor in the UAE',
    lead: 'Complete parking areas from sub-grade to line marking — base, surfacing, kerbing, drainage falls, bays and signage.',
    caption: 'Marked bays and wheel stops on a finished parking deck.',
    intro:
      'A car park is a small road network with tight geometry and a lot of edges, and it is usually the last package on a project — which is exactly why it ends up rushed. Bay dimensions, aisle widths, accessible bays and falls to the gullies all have to satisfy the authority layout standard before the surface can be signed off.',
    body: [
      'We build the whole thing: sub-grade preparation, compacted base, surfacing in asphalt or heavy-duty interlock, kerbing to the bay and island layout, drainage falls and gullies, wheel stops, bollards, bay marking, numbering, directional arrows and signage. Because it is one contractor, the falls actually reach the gullies and the marking actually fits the kerb lines.',
      'Surface choice is driven by use. Asphalt is faster and cheaper over large open areas; heavy-duty interlock is the better answer where vehicles turn on the spot, where fuel and oil spillage is likely, or where sections may need lifting later for services beneath.',
    ],
    scope: [
      'Sub-grade preparation, sub-base and road base to the pavement design',
      'Surfacing in asphalt or heavy-duty interlock paving',
      'Kerbing to bay, island and perimeter layout, including drop kerbs',
      'Drainage falls, gullies and channel drains',
      'Bay marking, numbering, arrows, hatching and accessible bays',
      'Wheel stops, bollards, barriers and signage',
      'Layout to authority parking standards and handover documentation',
    ],
    specs: [
      ['Plant', 'Graders, rollers, pavers, interlock laying crews, kerb-laying crews, marking plant'],
      ['Typical use', 'Commercial and retail car parks, staff and labour accommodation parking, warehouse and yard parking, community parking'],
      ['Control', 'Layout to authority standard, level and fall survey, layer compaction testing, marking set-out'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Asphalt or interlock for a car park?',
        a: 'Asphalt over large open areas where cost and speed matter. Heavy-duty interlock where vehicles turn on the spot, where spillage is likely, or where sections may need to be lifted later for services — because interlock can be taken up and relaid without a visible repair.',
      },
      {
        q: 'Do you set out the bays to the authority standard?',
        a: 'Yes. Bay dimensions, aisle widths, accessible bay provision and signage are set out to the applicable authority layout standard, which is what the parking area will be inspected against.',
      },
      {
        q: 'Can you resurface and remark an existing car park?',
        a: 'Yes — milling and overlay, or localised repair, followed by full remarking and signage renewal, phased so part of the parking stays available while the work proceeds.',
      },
    ],
  },

  'heavy-duty-interlock-paving': {
    img: '/images/services/heavy-duty-interlock-paving.jpg',
    h1: 'Interlock Paving Contractor in the UAE',
    lead: 'Heavy-duty interlock and paver block for yards, container areas, service roads and hardstandings that carry loaded trucks.',
    caption: 'Interlocking blocks laid to line and level across a heavy-duty deck.',
    intro:
      'Interlock either holds for twenty years or ruts in the first month, and the difference is almost never the block itself. Block thickness, bedding sand grading and depth, laying pattern and — above all — edge restraint are what decide whether a heavily loaded yard stays flat.',
    body: [
      'For trafficked areas we use heavy-duty blocks laid in a herringbone pattern, which locks under braking and turning loads in a way that stretcher bond does not. Bedding sand is laid to a consistent depth over a compacted, level base, and every free edge gets a concrete-haunched restraint — kerb, edging or channel — because a yard fails from the edges inwards.',
      'The base underneath is built as a full pavement, not a levelling layer. Once laid, blocks are vibrated in and jointing sand is swept and re-swept until the joints are full, which is when the surface actually starts behaving as an interlocking pavement rather than a set of loose blocks.',
    ],
    scope: [
      'Sub-grade preparation, sub-base and road base to the loading design',
      'Supply of heavy-duty interlock blocks in the specified thickness and finish',
      'Screeded bedding sand to consistent depth over a level base',
      'Herringbone and pattern laying for trafficked areas',
      'Concrete-haunched edge restraint, kerbs, channels and edgings',
      'Vibration, jointing sand sweeping and final compaction',
      'Falls, drainage channels and gully surrounds within the paved area',
    ],
    specs: [
      ['Plant', 'Graders, rollers, plate compactors with protective pads, block cutters, laying crews'],
      ['Typical use', 'Container and truck yards, warehouse hardstandings, service roads, forecourts, car parks, walkways'],
      ['Control', 'Block thickness to loading, bedding depth control, level and fall survey, edge restraint inspection'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'What block thickness do we need for a truck yard?',
        a: 'Heavy-duty thickness rather than the thinner blocks used for footpaths and light parking, over a base designed for the axle loads. We size both together, because a thick block over a thin base still ruts.',
      },
      {
        q: 'Why does interlock rut where trucks turn?',
        a: 'Almost always missing or weak edge restraint, or bedding sand laid too deep or unevenly. Turning loads push blocks sideways, and without a haunched restraint to push against, the pattern opens up.',
      },
      {
        q: 'Can interlock be lifted and relaid for services underneath?',
        a: 'Yes, and it is one of the main reasons to choose it over asphalt in a yard. Blocks are lifted, the trench is worked and backfilled, and the same blocks are relaid — with no permanent patch visible.',
      },
    ],
  },

  kerbstones: {
    img: '/images/services/kerbstones.jpg',
    h1: 'Kerbstone Installation Contractor in the UAE',
    lead: 'Supply and installation of kerbstones and channels to line and level on concrete haunching, finished to authority profile.',
    caption: 'The finished edge — kerb line, channel and asphalt shoulder.',
    intro:
      'Kerbs are the visible line that every other element is judged against. A kerb run that wanders in plan or dips in level makes a well-built road look badly built, and it is the first thing an authority inspector puts a string line to.',
    body: [
      'We set kerbs to line and level on a concrete bed with haunching to the back, using survey control on straights and templates on radii so curves are true rather than approximate. Joints are consistent, drop kerbs at crossings and entrances are transitioned properly, and the channel line is set so water actually runs to the gullies.',
      'We install road kerbs, parking and island kerbs, radius units, drop kerbs and channels, in the profiles specified by RTA, Dubai Municipality and the other emirate authorities. Kerbing is usually the interface between road, parking and landscaping packages, so we sequence it with whoever is either side of us rather than fixing the line and leaving them to cope.',
    ],
    scope: [
      'Supply of kerbstones, channels, radius and drop units to authority profile',
      'Setting out to line and level with survey control',
      'Concrete bed and haunching to the specified section',
      'Straight runs, radii, islands and traffic-calming kerb lines',
      'Drop kerbs and transitions at crossings, entrances and accessible routes',
      'Channel laying and falls to gullies and drainage points',
      'Backing, reinstatement and finishing behind the kerb line',
    ],
    specs: [
      ['Plant', 'Kerb-laying crews, mini excavators, concrete supply, saw cutters, survey instruments'],
      ['Typical use', 'Road and highway kerbing, car park and island kerbs, entrance drop kerbs, community and estate roads'],
      ['Control', 'Line and level survey, haunching inspection, joint consistency, profile compliance'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Which kerb profiles do you install?',
        a: 'The profiles specified by the relevant authority — RTA and Dubai Municipality profiles in Dubai, and the equivalent standards in the other emirates — including road kerbs, parking kerbs, radius units, drop kerbs and channels.',
      },
      {
        q: 'Do you install drop kerbs for a plot entrance?',
        a: 'Yes. On an RTA road the entrance is an entry-and-exit works package, which we are RTA-approved to carry out, covering the drop kerb, apron, transition, drainage continuity and reinstatement.',
      },
      {
        q: 'Can you replace damaged kerbs on an existing road?',
        a: 'Yes. Damaged units are cut out, the bed and haunching are reformed and new units are set to match the existing line and level, with the adjoining surface reinstated.',
      },
    ],
  },

  'road-markings': {
    img: '/images/services/road-markings.jpg',
    h1: 'Road Marking Contractor in the UAE',
    lead: 'Thermoplastic and cold-paint markings — lane lines, hatching, arrows, crossings, bays and numbering to authority standards.',
    caption: 'Thermoplastic laid to line — crossing bars and lane edge in one pass.',
    intro:
      'Markings are the last operation and the one everybody sees. They also have the shortest weather window: applied to a surface that is damp, dusty or too cool, thermoplastic will lift within weeks no matter how good the set-out was.',
    body: [
      'We set out from the drawings, prepare the surface, and apply thermoplastic or cold paint at the specified thickness with reflective beading where the specification calls for it. On new asphalt we allow the surface to cure before application; on existing surfaces we clean, and remove old markings by grinding or blasting rather than painting over them.',
      'Work covers highway and estate lane lines, hatching, arrows and legends, pedestrian crossings, cycle lanes, parking bays and numbering, rumble strips and speed table markings. On live roads the marking operation runs under lane closure with our own traffic management and, where the road is RTA, our own permit.',
    ],
    scope: [
      'Set-out from drawings and pre-marking on site',
      'Surface preparation, cleaning and removal of redundant markings',
      'Thermoplastic application at specified thickness with reflective beading',
      'Cold-paint marking where specified or for temporary works',
      'Lane lines, edge lines, hatching, arrows, legends and stop lines',
      'Pedestrian crossings, cycle lanes, parking bays and bay numbering',
      'Rumble strips, speed table markings and coloured surfacing',
    ],
    specs: [
      ['Plant', 'Thermoplastic applicators, cold-paint machines, pre-heaters, grinders and blasters, traffic management units'],
      ['Typical use', 'Highways and estate roads, car parks, industrial yards, community roads, warehouse floors and circulation routes'],
      ['Control', 'Set-out check against drawings, surface condition and temperature check, thickness and beading compliance'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Thermoplastic or paint?',
        a: 'Thermoplastic for permanent markings on trafficked roads — it is thicker, lasts far longer and takes reflective beading properly. Cold paint for temporary markings, low-traffic areas and situations where the layout will change again shortly.',
      },
      {
        q: 'Can you remove existing markings?',
        a: 'Yes, by grinding or blasting rather than overpainting. Painting over a redundant line leaves a ghost mark that is still visible at night and in wet conditions, which is exactly when it causes confusion.',
      },
      {
        q: 'How long before a newly marked road can be reopened?',
        a: 'Thermoplastic sets in minutes, so a section can normally be handed back within the same closure window. That is what makes night marking under a lane closure practical on busy roads.',
      },
    ],
  },

  // ---- Traffic Management -------------------------------------------------
  'lane-closure-permits': {
    img: '/images/services/lane-closure-permits.jpg',
    h1: 'Lane Closure Permits in Dubai',
    lead: 'Application, drawings and approval for single and multi-lane closures on RTA roads, from submission through to permit issue.',
    caption: 'Cones, barriers and signage set to an approved closure layout.',
    intro:
      'A lane closure permit is a drawing exercise with a deadline attached. The RTA does not approve an intention to close a lane — it approves a specific taper, a specific signage schedule, a specific working window and a specific set of safety measures, drawn and justified.',
    body: [
      'We prepare the traffic diversion drawings, set the taper lengths and signage schedule to the approach speed, define the working window — almost always night hours on a busy corridor — and submit the package. Comments are answered and resubmitted by the same team, so the application does not stall waiting for someone to interpret the response.',
      'Because we also install and maintain the traffic management on site, the permit that gets approved is the layout that actually gets built. That matters at inspection: most stop-work notices on a closure are not for working without a permit but for working to a layout that does not match the one approved.',
    ],
    scope: [
      'Traffic diversion and lane closure drawings prepared to RTA standards',
      'Taper design, signage schedules and speed-appropriate advance warning',
      'Working window definition, including night-work and weekend windows',
      'Submission, comment response and follow-through to permit issue',
      'Installation of the approved layout on site by our own crews',
      'Maintenance and inspection of the closure for the life of the works',
      'Permit extension and staged amendment where the programme changes',
    ],
    specs: [
      ['Authority', 'Roads and Transport Authority (RTA), Dubai'],
      ['Typical use', 'Utility works in the carriageway, asphalt and patching works, service protection, entry-exit construction'],
      ['Deliverables', 'Approved diversion drawings, issued permit, installed and maintained layout, compliance during works'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'How long does an RTA lane closure permit take?',
        a: 'It depends on the road, the extent of the closure and how clean the submission is. A well-prepared package for a straightforward night closure moves quickly; a multi-lane closure on a strategic corridor takes longer and attracts more comments. We give you a realistic date at the start rather than an optimistic one.',
      },
      {
        q: 'Do you install the traffic management as well as get the permit?',
        a: 'Yes, and it is the reason the two are worth buying together. The layout that is installed matches the layout that was approved, which is what an RTA inspector checks on site.',
      },
      {
        q: 'Can you get a permit for daytime lane closures?',
        a: 'On some roads, yes; on strategic corridors the RTA will normally only permit night working. We will tell you which category your road falls into before you build a programme around a daytime window.',
      },
    ],
  },

  'road-closure-permits': {
    img: '/images/services/road-closure-permits.jpg',
    h1: 'Road Closure Permits in Dubai',
    lead: 'Full road and carriageway closures with approved diversion routes, staged programmes and stakeholder coordination.',
    caption: 'A signed diversion in place around a closed carriageway.',
    intro:
      'A full road closure is a bigger conversation than a lane closure. The RTA is being asked to send traffic somewhere else, so the application has to justify why the closure is necessary, prove the diversion route can absorb the traffic, and show the works cannot be staged any other way.',
    body: [
      'We prepare the traffic impact justification, the diversion route drawings and the staging programme, and coordinate with the RTA, Dubai Police and the stakeholders the closure affects — businesses, buildings, bus routes and emergency access. Where a single closure will not be approved, we restructure the works into stages that will be.',
      'Once approved, the closure is installed, signed, lit and maintained by our own crews and handed back to the agreed programme. Diversion signage is checked through the closure period rather than installed and forgotten, because a diversion that has lost a sign is what generates the complaint that ends the permit early.',
    ],
    scope: [
      'Traffic impact assessment and justification for the closure',
      'Diversion route design, drawings and advance signage strategy',
      'Staged closure programmes where a single closure is not approvable',
      'Coordination with RTA, Dubai Police and affected stakeholders',
      'Submission, comment response and follow-through to permit issue',
      'Installation, lighting and maintenance of the closure and diversion',
      'Handback to programme, with staged reopening where required',
    ],
    specs: [
      ['Authority', 'Roads and Transport Authority (RTA) and Dubai Police'],
      ['Typical use', 'Carriageway reconstruction, major utility crossings, bridge and structure works, event and decoration installations'],
      ['Deliverables', 'Approved diversion drawings, issued permit, installed closure and diversion, stakeholder notifications'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'When is a full road closure approved rather than a lane closure?',
        a: 'When the works genuinely cannot be done under partial closure and a viable diversion route exists. If neither is true, the application will be refused — so we assess it honestly first and, where necessary, restage the works into lane closures that will be approved.',
      },
      {
        q: 'Do you notify the businesses and residents affected?',
        a: 'Yes. Stakeholder notification and coordination is part of the package, along with emergency access arrangements. Closures fail on complaints far more often than on engineering.',
      },
      {
        q: 'What happens if the works overrun the permitted window?',
        a: 'We plan handback with contingency, and where an extension is genuinely needed we apply for it in advance. Overrunning a closure window without approval is the fastest way to lose credibility with the authority on the next application.',
      },
    ],
  },

  'traffic-management': {
    img: '/images/services/traffic-management.jpg',
    h1: 'Traffic Management Contractor in Dubai',
    lead: 'Supply, installation, maintenance and removal of compliant traffic management — cones, barriers, signage, arrow boards, TMA units and flagmen.',
    caption: 'Traffic management maintained around works in a live road.',
    intro:
      'Traffic management is what stands between a live carriageway and the people working in it. It is also the element most often installed once and then left to degrade — cones scattered by passing traffic, a sign turned by the wind, a taper that has shortened by twenty metres since the first night.',
    body: [
      'We supply and install traffic management to the approved layout: advance warning and directional signage, cones and delineators, safety barriers, flashing arrow boards, lighting, and truck-mounted attenuator (TMA) units on high-speed roads. Trained flagmen are provided where the layout requires manual control at accesses and crossings.',
      'The layout is then inspected and maintained for the life of the works, not just on the first shift, and it is removed cleanly at the end so the road is handed back without residual signage confusing drivers. Where the works are on an RTA road, we prepare the diversion drawings and hold the permit as well, so one team is accountable for the drawing, the approval and what is physically on the ground.',
    ],
    scope: [
      'Traffic management layouts installed to the approved drawings',
      'Advance warning, directional and speed signage to authority standard',
      'Cones, delineators, safety barriers and pedestrian protection',
      'Flashing arrow boards, warning lights and night lighting',
      'Truck-mounted attenuator (TMA) units for high-speed carriageways',
      'Trained flagmen and manual traffic control at accesses and crossings',
      'Routine inspection, maintenance and clean removal at completion',
    ],
    specs: [
      ['Authority', 'Roads and Transport Authority (RTA), Dubai'],
      ['Typical use', 'Carriageway works, utility crossings, service protection, asphalt and patching, entry-exit construction, events'],
      ['Equipment', 'Cones, delineators, barriers, signage, arrow boards, lighting, TMA units, flagmen'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'Do you provide TMA units?',
        a: 'Yes. Truck-mounted attenuator units are provided where the road speed and layout require impact protection for the working area — typically on high-speed carriageways and for mobile or short-duration works.',
      },
      {
        q: 'Do you maintain the traffic management during the works?',
        a: 'Yes. The layout is inspected and reinstated through the works rather than installed once. Displaced cones, turned signs and shortened tapers are the usual reasons an inspection fails.',
      },
      {
        q: 'Can you provide traffic management without doing the construction?',
        a: 'Yes. We supply, install, maintain and remove traffic management as a standalone package, including the diversion drawings and RTA permit where the works are on an RTA road.',
      },
    ],
  },

  // ---- Utilities ----------------------------------------------------------
  'rta-approved-entry-exit-works': {
    img: '/images/services/rta-approved-entry-exit-works.jpg',
    h1: 'RTA Approved Entry & Exit Works Contractor in Dubai',
    lead: 'Plot entrances and exits onto RTA roads, constructed by an RTA-approved contractor so the access is accepted and legally usable.',
    caption: 'Checking an approved entry and exit against the drawing on site.',
    intro:
      'An entry-exit onto an RTA road is not a kerb job. It is a controlled connection to the public highway, and the RTA will only accept it if the design is approved, the contractor is approved, and what was built matches what was drawn.',
    body: [
      'We handle the package end to end: the entry-exit drawings and submission, the permit, and the construction itself — drop kerbs, apron, transitions and levels, continuity of the road drainage across the access, surfacing, marking and signage — followed by reinstatement of everything disturbed within the road reserve.',
      'The most common reason an access fails inspection is drainage. An entrance that interrupts the channel line, or that discharges plot water onto the carriageway, will not be signed off however well it is finished. We set the levels so the road drainage runs through unbroken and the plot drains to its own system.',
    ],
    scope: [
      'Entry and exit design drawings and RTA submission',
      'Permit application and follow-through to approval',
      'Drop kerbs, aprons, transitions and access geometry',
      'Continuity of road channel and drainage across the access',
      'Sub-base, base and asphalt or interlock surfacing of the access',
      'Marking, signage and, where required, guardrail and bollard protection',
      'Reinstatement of the road reserve and handover documentation',
    ],
    specs: [
      ['Authority', 'Roads and Transport Authority (RTA), Dubai'],
      ['Typical use', 'Plot and villa entrances, commercial and retail accesses, warehouse and industrial gate access, fuel station accesses'],
      ['Approval', 'Carried out by an RTA-approved contractor, with drawings, permit and as-built documentation'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'Why does an entry-exit have to be done by an RTA-approved contractor?',
        a: 'Because the works are inside the road reserve. The RTA will not issue the permit, and will not accept the completed access, unless the contractor carrying it out holds their approval. We do.',
      },
      {
        q: 'Do you prepare the entry-exit drawings as well?',
        a: 'Yes. Drawings, submission, comment response and permit are all handled in-house, then the same team builds it — so what is constructed matches what was approved.',
      },
      {
        q: 'Why do plot accesses fail RTA inspection?',
        a: 'Most often drainage: a broken channel line across the access, or plot water discharging onto the carriageway. Levels and geometry that do not match the approved drawing are the next most common cause.',
      },
    ],
  },

  'rta-service-protection': {
    img: '/images/services/rta-service-protection.jpg',
    h1: 'RTA Service Protection Works in Dubai',
    lead: 'Protection of existing utilities inside the road reserve during construction — scanning, trial pits, physical protection and reinstatement.',
    caption: 'Survey and setting out before excavating near live services.',
    intro:
      'Every metre of road reserve in Dubai has something buried in it: DEWA cables, Etisalat and du ducts, water mains, irrigation, district cooling. Service protection is the discipline of proving where those services are before a machine goes near them, and physically protecting them while the works proceed.',
    body: [
      'We scan and trace the route, open trial pits to expose and confirm depths and alignments, and record what is actually there against what the drawings claimed — the two frequently differ. Where services are exposed or at risk, they are physically protected: concrete surround, sleeving, protection slabs, or supports and cradles where a service is spanning an open excavation.',
      'The works are carried out to RTA and utility-owner requirements, with the relevant NOCs in place, and everything disturbed inside the road reserve is reinstated to authority standard afterwards. Getting this wrong is expensive in a way that is out of all proportion to the works — a struck 11kV cable or a severed fibre route costs far more than the protection would have.',
    ],
    scope: [
      'Service scanning, tracing and route marking before excavation',
      'Trial pits to expose and confirm depth, alignment and condition',
      'Comparison of found services against record drawings, with reporting',
      'Concrete surround, sleeving and protection slabs to exposed services',
      'Supports and cradles for services spanning open excavations',
      'NOC coordination with DEWA, Etisalat, du, Empower and the RTA',
      'Reinstatement of the road reserve to authority standard',
    ],
    specs: [
      ['Authority', 'RTA, with utility-owner NOCs from DEWA, Etisalat, du, Empower and others as applicable'],
      ['Typical use', 'Works in the road reserve, utility crossings, entry-exit construction, trenching near live services'],
      ['Deliverables', 'Trial pit records, service location report, protection details, NOCs, reinstatement documentation'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'Do you scan for services before excavating?',
        a: 'Always, and then we prove the scan with trial pits. Record drawings in an established road corridor are a starting point, not evidence — the depth or alignment on the drawing is frequently not what is in the ground.',
      },
      {
        q: 'Who obtains the NOCs from the utility owners?',
        a: 'We do. NOC coordination with DEWA, Etisalat, du, Empower and the RTA is part of the package, along with the drawings and method statements each of them wants to see.',
      },
      {
        q: 'What happens if you find a service that is not on the drawings?',
        a: 'Work stops in that area, the service is exposed and identified, the owner is notified and the protection or diversion is agreed before excavation continues. It is recorded and reported rather than worked around quietly.',
      },
    ],
  },

  'row-permits': {
    img: '/images/services/row-permits.jpg',
    h1: 'ROW Permits in Dubai',
    lead: 'Right-of-way permit applications for works within road reserves and public land — drawings, NOCs and compliance to completion.',
    caption: 'An RTA-approved permit drawing for works in the road reserve.',
    intro:
      'A ROW permit is what makes work inside a road reserve or on public land lawful. It is also the item most likely to sit on a programme as a single line with no duration against it, until the day someone discovers the works cannot start.',
    body: [
      'We prepare the full application: layout and section drawings, method statements, traffic arrangements, the stakeholder NOCs the authority requires, and the supporting documents that stop the submission being returned. Comments are answered by the same team that drew the package, which is usually the difference between a resubmission cycle of days and one of weeks.',
      'The permit is only half the job. Conditions attached to it — working hours, protection measures, reinstatement standards, notification requirements — have to be complied with for the permit to stay valid through to completion, and we manage that on site as well as on paper.',
    ],
    scope: [
      'Assessment of which permits and NOCs a scope actually requires',
      'Layout, section and traffic arrangement drawings for submission',
      'Method statements and supporting documentation',
      'Stakeholder NOC collection from utility owners and authorities',
      'Submission, comment response and follow-through to permit issue',
      'Compliance with permit conditions during the works',
      'Reinstatement to authority standard and permit closeout',
    ],
    specs: [
      ['Authority', 'RTA and Dubai Municipality, with utility-owner and stakeholder NOCs as applicable'],
      ['Typical use', 'Works in road reserves, utility crossings and shifting, service protection, entry-exit works, temporary installations'],
      ['Deliverables', 'Submitted drawing package, collected NOCs, issued ROW permit, compliance and closeout records'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'How long does a ROW permit take in Dubai?',
        a: 'It depends on the location, the extent of the works and how many stakeholder NOCs are involved. The controllable part is submission quality — a complete, correct package avoids the resubmission cycles that cause most of the delay.',
      },
      {
        q: 'Can you apply for a ROW permit if we are doing the works ourselves?',
        a: 'Yes. We handle permit and NOC packages as a standalone service, though on works inside the road reserve the authority will also want the contractor carrying them out to hold the relevant approval.',
      },
      {
        q: 'What happens if permit conditions are not met on site?',
        a: 'The permit can be suspended and the works stopped. Conditions on working hours, protection and reinstatement are managed on site as part of the service, not just recorded at application stage.',
      },
    ],
  },

  'utilities-shifting': {
    img: '/images/services/utilities-shifting.jpg',
    h1: 'Utility Shifting Contractor in Dubai',
    lead: 'Diversion and relocation of services that clash with new works — ducts, cables, water and irrigation — coordinated with the utility owners.',
    caption: 'Excavating a new route for a diverted service.',
    intro:
      'Utility shifting is a coordination problem wearing a construction costume. The excavation and the new route are straightforward; the shutdown window, the owner approval and the sequence in which three different utilities can be moved without any of them losing supply are what set the programme.',
    body: [
      'We identify the clash, agree the new route with the owner, secure the NOCs and permits, and carry out the diversion — new duct or pipe route, protection, connection, commissioning support and abandonment or removal of the redundant run. Shutdown windows with DEWA, Etisalat, du and Empower are booked and worked to, because a missed window can put weeks into a programme.',
      'Where a clash can be designed out instead of moved, we say so. Shifting a service is always more expensive than adjusting a level or an alignment, and it is worth an hour of review before committing to a diversion that the project may not actually need.',
    ],
    scope: [
      'Clash identification against the design and verified service positions',
      'New route proposal and agreement with the utility owner',
      'NOC and permit applications for the diversion',
      'Excavation, ducting, bedding, protection and backfill on the new route',
      'Shutdown window coordination with DEWA, Etisalat, du and Empower',
      'Connection, commissioning support and testing with the owner',
      'Abandonment or removal of the redundant run and reinstatement',
    ],
    specs: [
      ['Authority', 'RTA and Dubai Municipality, with owner approvals from DEWA, Etisalat, du, Empower and others'],
      ['Typical use', 'Service clashes with new roads and structures, plot development, entry-exit works, road widening'],
      ['Deliverables', 'Approved diversion route, NOCs and permits, constructed and commissioned diversion, as-built records'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'Who approves a utility diversion?',
        a: 'The utility owner — DEWA, Etisalat, du, Empower or the relevant authority — together with the RTA or municipality for the works inside the road reserve. We assemble and run both approval tracks.',
      },
      {
        q: 'How are shutdowns handled?',
        a: 'Shutdown windows are booked with the owner in advance and the works are planned to fit inside them, with the crew, plant and materials on site before the window opens. Missing a booked window is expensive in programme terms.',
      },
      {
        q: 'Can a clash be avoided instead of diverting the service?',
        a: 'Often, yes — a level adjustment or a small alignment change is usually far cheaper than a diversion. We check that first and tell you when shifting is genuinely the only option.',
      },
    ],
  },

  'noc-services': {
    img: '/images/services/noc-services.jpg',
    h1: 'NOC Services in Dubai',
    lead: 'Preparation and processing of No Objection Certificates across the authorities and utility owners a project touches.',
    caption: 'The drawing package prepared for authority and utility-owner approval.',
    intro:
      'NOCs are the quiet critical path. A project can be fully designed, funded and resourced and still be unable to start because one utility owner has not signed off a drawing that was submitted incomplete two months earlier.',
    body: [
      'We work out which NOCs a scope actually needs, assemble the drawing package each authority and owner wants to see, submit, answer comments and track the approvals through to issue. Different bodies want different things — a DEWA submission does not look like an RTA submission, and sending the wrong package is what generates the first rejection.',
      'The value is in knowing the sequence. Some NOCs depend on others being issued first, and submitting them in the wrong order guarantees a return. We run them in parallel where that is possible and in sequence where it is not, and give you a realistic view of the approval programme rather than an optimistic one.',
    ],
    scope: [
      'Assessment of which NOCs and approvals a scope requires',
      'Assembly of the drawing and document package for each body',
      'Submissions to RTA, Dubai Municipality, DEWA, Etisalat, du and Empower',
      'Submissions to DDA, Trakhees, Dubai South and free zone authorities as applicable',
      'Comment response, resubmission and approval tracking',
      'Sequencing of dependent approvals to avoid avoidable rejections',
      'Handover of the issued NOC set with the project documentation',
    ],
    specs: [
      ['Authority', 'RTA, Dubai Municipality, DEWA, Etisalat, du, Empower, DDA, Trakhees, Dubai South and free zone authorities'],
      ['Typical use', 'Works in road reserves, utility crossings and diversions, entry-exit works, plot development, temporary installations'],
      ['Deliverables', 'Submitted packages, tracked approvals, issued NOC set, approval programme'],
      ['Coverage', 'Dubai'],
    ],
    faqs: [
      {
        q: 'Which NOCs will our project need?',
        a: 'It depends on where the works sit and what they touch. Send us the location and scope and we will list the authorities and utility owners involved, in the order they need to be approached.',
      },
      {
        q: 'Can you obtain NOCs if another contractor is doing the works?',
        a: 'Yes. NOC and permit processing is offered as a standalone service, although some approvals also require the executing contractor to hold the relevant authority approval.',
      },
      {
        q: 'Why do NOC submissions get rejected?',
        a: 'Usually an incomplete package, a drawing in the wrong format for that body, or a submission made before a dependent approval was issued. All three are avoidable, and avoiding them is most of what this service is.',
      },
    ],
  },
  // ---- Supply & Logistics -------------------------------------------------
  'road-base-supply': {
    img: '/images/services/road-base-supply.jpg',
    h1: 'Road Base Supplier in Dubai & the UAE',
    lead: 'Crushed aggregate road base and sub-base to RTA, DMT and municipality gradings, delivered with the test certificates the layer needs.',
    caption: 'Graded road base tipped and spread ahead of the roller.',
    intro:
      'Road base is the layer that decides whether a road lasts. Get the grading wrong and the surface tells you eighteen months later, in rutting and cracking that costs more to repair than the material ever saved. We supply road base and sub-base from quarries whose material is already approved by the authority you are building for, and we deliver it with the paperwork that lets the layer be laid and signed off.',
    body: [
      'Different authorities want different things. RTA road base is not interchangeable with a DMT grading, and a municipality job in Sharjah or Ajman will have its own accepted sources. We match the source to the specification before the first load moves, and supply grading analysis, CBR, Los Angeles abrasion and plasticity results with the material rather than a fortnight afterwards when the consultant asks.',
      'Consistency between loads matters as much as the first test. Material that segregates in the stockpile or on the tipper gives a layer that passes density in one spot and fails three metres away, and the retest is on your programme, not the quarry\u2019s. We load from working faces rather than the tail of a pile, and run our own tippers, so a delivery that has to arrive before the roller does actually arrives before the roller does.',
    ],
    scope: [
      'Aggregate road base to RTA, DMT and municipality gradings',
      'Sub-base and capping layer material',
      'Grading, CBR, LAA and plasticity certificates with delivery',
      'Approved-source material for authority-supervised works',
      'Bulk delivery by our own tipper and trailer fleet',
      'Scheduled deliveries tied to your laying and rolling programme',
      'Supply-and-lay packages where you want one accountable party',
    ],
    specs: [
      ['Materials', 'Road base, sub-base, capping layer, crusher run'],
      ['Typical use', 'Road and car park formation, hardstanding, yard and platform build-up'],
      ['Control', 'Grading analysis, CBR, LAA, plasticity index, delivery tickets'],
      ['Coverage', 'All seven emirates, delivered from approved UAE quarries'],
    ],
    faqs: [
      {
        q: 'Is your road base approved for RTA road works?',
        a: 'Yes. We supply from quarries whose material already holds the relevant authority approval, and provide the grading and CBR certification with delivery. If your project is under DMT or a municipality instead, tell us at enquiry stage and we source against that specification rather than substituting an RTA grading.',
      },
      {
        q: 'Can you supply and lay, or supply only?',
        a: 'Either. Many clients take supply-only where they already have a laying team. Where we supply and lay, the density testing and the material certification come from the same party, which removes the argument about whether a failed test is a material problem or a compaction problem.',
      },
      {
        q: 'What quantities do you deliver?',
        a: 'From a single 20-tonne load up to continuous daily supply for a road package. For sustained deliveries we agree a schedule against your laying programme so material arrives ahead of the paver and the roller rather than sitting in a stockpile losing grading.',
      },
    ],
  },
  'aggregate-supply': {
    img: '/images/services/aggregate-supply.jpg',
    h1: 'Aggregate Supplier in Dubai & the UAE',
    lead: 'Single-size and graded aggregates from 5mm to 40mm, from approved crushers, with consistent grading load to load.',
    caption: 'Graded aggregate stockpiled and loaded from the working face.',
    intro:
      'Aggregate is bought on a certificate and judged on the twentieth load. We supply single-size and graded aggregate for concrete, asphalt, drainage and pipe bedding from approved crushers across the UAE, and we hold the grading steady across a delivery programme rather than only on the sample that went to the lab.',
    body: [
      'Sizes run from 5mm through 10, 14, 20 and 40mm, plus graded blends where the mix design calls for them. For structural concrete we supply against the consultant\u2019s approved source list; for asphalt, to the mix design already lodged with the authority; for drainage blankets and pipe surround, to the clean, single-size gradings that actually let water through instead of silting up in the first year.',
      'Where a project is chloride- or sulphate-sensitive \u2014 which on coastal plots is most of them \u2014 we supply the chemical results alongside the physical ones. Aggregate that passes grading and fails sulphate content is still a rejected load, and finding that out after the pour is expensive.',
    ],
    scope: [
      'Single-size aggregate: 5mm, 10mm, 14mm, 20mm, 40mm',
      'Graded aggregate blends to mix design',
      'Concrete aggregate from consultant-approved sources',
      'Asphalt aggregate to the approved mix design',
      'Drainage and filter media, pipe bedding and surround',
      'Grading, soundness, LAA and chemical test certificates',
      'Bulk delivery across the emirates by our own fleet',
    ],
    specs: [
      ['Sizes', '5mm, 10mm, 14mm, 20mm, 40mm and graded blends'],
      ['Typical use', 'Structural concrete, asphalt mixes, drainage blankets, pipe bedding'],
      ['Control', 'Grading, LAA, soundness, sulphate and chloride content'],
      ['Coverage', 'All seven emirates, from approved UAE crushers'],
    ],
    faqs: [
      {
        q: 'Do you supply aggregate for structural concrete?',
        a: 'Yes, from sources on the consultant\u2019s approved list, with grading, soundness and chemical certification. If the source has not been approved yet we can submit the material for approval as part of the supply package.',
      },
      {
        q: 'Can you hold one grading across a long delivery programme?',
        a: 'That is the point of buying from us rather than the cheapest load available on the day. We fix the source at the start of the package and load from working faces rather than pile tails, so the grading you approved is the grading that keeps arriving.',
      },
      {
        q: 'Do you supply washed aggregate?',
        a: 'Yes, where the specification requires it \u2014 typically for exposed concrete, filter media and drainage applications where fines would block the layer. Washed material is priced separately because it costs more to produce.',
      },
    ],
  },
  'sand-supply': {
    img: '/images/services/sand-supply.jpg',
    h1: 'Sand Supplier in Dubai & the UAE',
    lead: 'Fill sand, sweet sand and washed sand in bulk for backfill, bedding, blinding and platform raising.',
    caption: 'Fill sand delivered and spread for a platform build-up.',
    intro:
      'Sand is the highest-volume material on most UAE sites and the one most often bought on price alone. The difference shows up in the compaction results and, on coastal plots, in the sulphate and chloride figures. We supply fill, sweet and washed sand in bulk with the test results the specification asks for, delivered on our own tippers against your programme.',
    body: [
      'Fill sand goes into bulk platform raising and general backfill, where what matters is that it compacts predictably and does not carry contamination. Sweet sand \u2014 low in salts \u2014 is what you want against structures, in trench surround and under slabs, because the alternative is chloride attack on reinforcement that nobody sees for a decade. Washed sand goes where the specification calls for a clean, controlled grading: blinding, bedding and screeds.',
      'For anything placed against concrete or reinforcement we supply sulphate and chloride results as standard rather than on request. It is a small cost at supply stage and an enormous one to discover later.',
    ],
    scope: [
      'Fill sand for platform raising and bulk backfill',
      'Sweet sand for structural backfill and trench surround',
      'Washed sand for blinding, bedding and screeds',
      'Sulphate and chloride testing where the specification requires it',
      'Grading and compaction characteristics on request',
      'Bulk delivery by tipper and trailer, scheduled to the works',
      'Supply-and-place with compaction and density testing',
    ],
    specs: [
      ['Materials', 'Fill sand, sweet sand, washed sand'],
      ['Typical use', 'Platform raising, structural and trench backfill, blinding, bedding'],
      ['Control', 'Grading, sulphate and chloride content, field density on placed material'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'What is the difference between fill sand and sweet sand?',
        a: 'Sweet sand is low in soluble salts, which is why specifications call for it against concrete, reinforcement and buried services. Fill sand is for bulk volume where there is no structure in contact. Using fill sand where sweet sand was specified is a common and expensive substitution \u2014 we quote them separately so the difference is visible.',
      },
      {
        q: 'Do you provide sulphate and chloride test results?',
        a: 'Yes, as standard for any sand going against structures or reinforcement, and on request for bulk fill. Coastal plots across the UAE routinely need them and the consultant will ask.',
      },
      {
        q: 'Can you place and compact the sand as well as supply it?',
        a: 'Yes. Supply-and-place is often the better arrangement: the material certification and the field density results then come from one party, and there is no dispute about whether a failed layer was the sand or the compaction.',
      },
    ],
  },
  'stone-supply': {
    img: '/images/services/stone-supply.jpg',
    h1: 'Stone Supplier in Dubai & the UAE',
    lead: 'Rock armour, rip-rap, boulders and crushed stone, sized to the drawing and delivered graded.',
    caption: 'Sized stone loaded for slope and scour protection.',
    intro:
      'Stone is specified by size distribution, and it is usually delivered as whatever came off the face that morning. We supply rock armour, rip-rap, boulders and crushed stone graded to the drawing \u2014 which matters, because a slope protection layer built from the wrong size distribution does not fail gradually, it fails in one storm.',
    body: [
      'We source from quarries in Ras Al Khaimah and Fujairah, where the hard rock is, and grade at the quarry rather than sorting on your site at your cost. Sizes run from crushed stone and gabion fill up through rip-rap and armour rock and on to individual placed boulders for landscape and scour protection.',
      'Delivery is by trailer with the loading arranged so the material arrives in the size bands you ordered. Where the stone is going into gabions or into placed slope protection, our own teams can carry out the placing as well, so the specified profile is what actually ends up on the bank.',
    ],
    scope: [
      'Rock armour and rip-rap graded to the drawing',
      'Gabion fill stone, sized to the basket',
      'Individual boulders for landscape and scour protection',
      'Crushed stone for hardstanding and haul roads',
      'Quarry grading, so sorting does not happen at your cost',
      'Delivery by trailer across the emirates',
      'Placing by our own teams where the profile is specified',
    ],
    specs: [
      ['Materials', 'Armour rock, rip-rap, gabion fill, boulders, crushed stone'],
      ['Typical use', 'Slope and scour protection, gabion walls, hardstanding, landscape features'],
      ['Control', 'Size grading at source, density and durability certification'],
      ['Coverage', 'All seven emirates, from RAK and Fujairah quarries'],
    ],
    faqs: [
      {
        q: 'Can you supply stone graded to a specific size band?',
        a: 'Yes, and we grade at the quarry rather than delivering mixed material for you to sort on site. Give us the size distribution from the drawing and that is what gets loaded.',
      },
      {
        q: 'Do you supply and place slope protection?',
        a: 'Yes. Where a profile is specified \u2014 slope protection, scour aprons, channel lining \u2014 supply-and-place means the delivered grading and the finished profile are one party\u2019s responsibility.',
      },
      {
        q: 'Where does the stone come from?',
        a: 'Hard rock quarries in Ras Al Khaimah and Fujairah, which is where the UAE\u2019s armour-grade material is produced. Certification travels with the load.',
      },
    ],
  },
  'gabion-boxes': {
    img: '/images/services/gabion-boxes.jpg',
    h1: 'Gabion Boxes Supplier in Dubai & the UAE',
    lead: 'Galvanised and PVC-coated gabion baskets and mattresses, supplied loose or filled and placed by our own teams.',
    caption: 'Gabion baskets filled and faced along a retained edge.',
    intro:
      'Gabions do a job that concrete cannot: they retain, they drain, and they tolerate movement without cracking. We supply galvanised and PVC-coated baskets and mattresses in standard and made-to-order sizes, and we fill and place them where you want the finished wall rather than a pallet of mesh.',
    body: [
      'Coating matters more here than anywhere else in the package. Heavily galvanised mesh is adequate inland; anything within reach of salt spray or brackish groundwater wants PVC coating, and the difference in service life is measured in decades. We will tell you which one the location needs rather than quoting the cheaper one and leaving it to you.',
      'Where we place as well as supply, the stone comes from our own supply line \u2014 sized to the basket so the face is packed rather than loosely tipped. A gabion wall is judged on its face, and a well-packed face is a labour decision made at the time of building, not a material that can be fixed afterwards.',
    ],
    scope: [
      'Galvanised gabion baskets in standard and custom sizes',
      'PVC-coated baskets for coastal and saline exposure',
      'Gabion mattresses for channel lining and scour aprons',
      'Lacing wire, spirals, stiffeners and geotextile backing',
      'Sized gabion fill stone from our own supply line',
      'Filling and placing by our own teams',
      'Retaining walls, embankment protection and channel works',
    ],
    specs: [
      ['Materials', 'Galvanised and PVC-coated mesh baskets, mattresses, fixings, geotextile'],
      ['Typical use', 'Retaining walls, embankment and slope protection, channel lining, landscape'],
      ['Control', 'Mesh gauge and coating certification, fill grading, face packing'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'Should I use galvanised or PVC-coated gabions?',
        a: 'Galvanised is fine inland and away from saline groundwater. Anywhere within reach of salt spray, tidal water or brackish ground, PVC coating is worth the difference \u2014 it is the coating, not the stone, that determines how long the wall stands.',
      },
      {
        q: 'Do you fill and place, or supply the baskets only?',
        a: 'Both. Supply-only is common where you have your own labour. Where we place, the fill stone comes from our own supply line sized to the basket, and the face is hand-packed rather than tipped, which is what the finished appearance depends on.',
      },
      {
        q: 'Can you supply non-standard basket sizes?',
        a: 'Yes. Standard sizes cover most work, but retaining walls with an unusual profile or a specific stepping arrangement are made to order against the drawing.',
      },
    ],
  },
  'material-shifting': {
    img: '/images/services/material-shifting.jpg',
    h1: 'Material Shifting & Haulage Contractor in Dubai',
    lead: 'Bulk movement of material on and off site with our own tippers, trailers and loaders \u2014 muck-away, import and internal shifting.',
    caption: 'Tippers and a loader working a stockpile for haulage off site.',
    intro:
      'Material shifting is the part of a programme that is invisible until it stops. A dig cannot continue when there is nowhere to put the spoil, and a fill cannot proceed when the import is a day behind. We run our own tippers, trailers and loaders, so haulage is a resource we control rather than one we book.',
    body: [
      'The work splits three ways. Muck-away takes excavated material off site under municipal disposal permit, with tickets retained for the project file \u2014 which matters, because disposal without a permit trail is a compliance problem long after the hole is filled. Import brings in fill, sand and aggregate against the laying programme. Internal shifting moves material between stockpiles and working areas on large sites, which is usually cheaper than exporting and re-importing the same material twice.',
      'We also move plant. Low-beds and trailers transport excavators, dozers, rollers and breakers between sites and across the emirates, with the permits and escorts that oversize loads need. On a multi-site programme that is often the constraint nobody prices until it bites.',
    ],
    scope: [
      'Muck-away and disposal under municipal permit, tickets retained',
      'Import of fill, sand, aggregate and road base to programme',
      'Internal shifting between stockpiles and working areas',
      'Stockpile management, loading and re-handling',
      'Plant transport by low-bed and trailer across the emirates',
      'Oversize load permits and escorts where required',
      'Scheduled haulage tied to the excavation or laying sequence',
    ],
    specs: [
      ['Plant', 'Tippers, tipper trailers, low-beds, wheel loaders, excavators'],
      ['Typical use', 'Muck-away, fill import, internal site shifting, plant relocation'],
      ['Control', 'Disposal permits and tickets, load records, delivery scheduling'],
      ['Coverage', 'All seven emirates, based in Dubai'],
    ],
    faqs: [
      {
        q: 'Do you handle the disposal permits?',
        a: 'Yes. Excavated material goes to a permitted tip under the relevant municipal disposal permit, and the tickets are retained for the project file. Disposal without that trail is a compliance exposure that outlasts the works.',
      },
      {
        q: 'Can you keep up with a continuous excavation?',
        a: 'That is what owning the fleet is for. We size the haulage to the dig rate at tender stage so the excavator is never standing waiting for a tipper, and we can add units from our own fleet rather than waiting on a hire company.',
      },
      {
        q: 'Do you transport plant as well as material?',
        a: 'Yes \u2014 excavators, dozers, rollers, breakers and graders moved by low-bed and trailer across the emirates, including the permits and escorts oversize loads require.',
      },
    ],
  },
  // ---- Earth Works (continued) --------------------------------------------
  'site-preparation': {
    img: '/images/services/site-preparation.jpg',
    h1: 'Land Clearing & Site Preparation Contractor in Dubai',
    lead: 'Plots cleared down to workable ground and handed over graded, stabilised and ready to build.',
    caption: 'A plot cleared and graded, ready for setting out.',
    intro:
      'Site preparation is the work that turns a plot into a site. Vegetation, demolition arisings, buried slabs, abandoned services and uncontrolled fill all have to come out before anything useful can be set out, and what is actually underground is rarely what the drawing says. We clear, remove and grade, and we tell you what we found.',
    body: [
      'Older industrial and residential plots across Dubai and the Northern Emirates are full of things nobody recorded: previous foundations, buried tanks, dead cables, capped wells, imported fill of unknown origin. We scan and trial-pit before the machines start, so a live service is found by a survey rather than by a bucket. Anything uncharted is recorded and reported before it is removed.',
      'Once the plot is clear the platform is graded to the levels you need for setting out, and stabilised so it stays workable through the first weeks of the programme \u2014 haul routes, working areas and a surface that survives rain and plant movement. Arisings are classified, loaded and hauled under municipal disposal permit with tickets retained.',
    ],
    scope: [
      'Vegetation, tree and root removal',
      'Demolition arisings, buried slabs and obstruction removal',
      'Service scanning and trial pits before machines start',
      'Removal of uncontrolled and contaminated fill',
      'Classification, haulage and disposal under municipal permit',
      'Grading to working levels and platform stabilisation',
      'Haul routes and working areas set up for the following trades',
    ],
    specs: [
      ['Plant', 'Excavators, dozers, wheel loaders, breakers, tippers, graders and rollers'],
      ['Typical use', 'New plots, redevelopment sites, industrial yards, infrastructure corridors'],
      ['Control', 'Service scanning, trial pits, disposal tickets, level survey on handover'],
      ['Coverage', 'All seven emirates, mobilised from Dubai'],
    ],
    faqs: [
      {
        q: 'What happens if you find services that are not on the drawings?',
        a: 'We stop, record and report before anything is removed. We scan and trial-pit ahead of the machines precisely so uncharted services are found by a survey rather than by a bucket, and so the decision about diverting or protecting them is yours to make.',
      },
      {
        q: 'Do you handle demolition as well as clearing?',
        a: 'We remove slabs, foundations, boundary structures and the arisings from previous use. Full structural demolition of standing buildings is a separate scope \u2014 tell us what is on the plot and we will say plainly what is in and out.',
      },
      {
        q: 'Is disposal included?',
        a: 'Yes. Material is classified, loaded and hauled to a permitted tip under the relevant municipal disposal permit, with tickets retained for the project file.',
      },
    ],
  },
}
