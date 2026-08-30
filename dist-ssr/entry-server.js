import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Icons.jsx
function Logo({ variant = "dark" }) {
	const img = /* @__PURE__ */ jsx("img", {
		src: "/images/logo.png",
		alt: "Earth Movers International",
		className: "logo-img"
	});
	if (variant === "light") return /* @__PURE__ */ jsx("span", {
		className: "logo-chip",
		children: img
	});
	return img;
}
function CheckCircle({ className }) {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 24 24",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ jsx("circle", {
			cx: "12",
			cy: "12",
			r: "10.5",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5"
		}), /* @__PURE__ */ jsx("path", {
			d: "M7.5 12.2l3 3 6-6.4",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.8",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
function Arrow({ className }) {
	return /* @__PURE__ */ jsx("svg", {
		viewBox: "0 0 16 16",
		width: "14",
		height: "14",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("path", {
			d: "M1 8h13M9 3l5 5-5 5",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6"
		})
	});
}
//#endregion
//#region src/data/content.js
var company = {
	name: "Earth Movers International",
	legalName: "Earth Movers International Prime Contracting L.L.C",
	short: "EMI",
	tagline: "Earthworks & Road Construction — Dubai, UAE",
	phone: "+971 55 172 7024",
	phoneHref: "tel:+971551727024",
	email: "Earthmoversinfo@gmail.com",
	address: [
		"Capital Golden Tower",
		"Office 706, 7th Floor",
		"Business Bay, Dubai, UAE"
	],
	mapQuery: "Earth Movers International Prime Contracting L.L.C, Capital Golden Tower, Business Bay, Dubai",
	mapsLink: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Earth Movers International Prime Contracting L.L.C, Capital Golden Tower, Business Bay, Dubai"),
	coordinates: "25.1857° N, 55.2766° E",
	founded: 1990,
	inUAE: 2005,
	social: {
		facebook: "https://www.facebook.com/earthmoversint/",
		linkedin: "https://www.linkedin.com/company/earth-movers-international"
	}
};
var images = {
	hero: "/images/hero.jpg",
	fleet: "/images/fleet.jpg",
	about: "/images/about.jpg",
	projects: [
		"/images/project-fujairah.jpg",
		"/images/project-municipality.jpg",
		"/images/project-nakheel.jpg"
	],
	banners: {
		about: "/images/banner-about.jpg",
		services: "/images/banner-services.jpg",
		projects: "/images/banner-projects.jpg",
		contact: "/images/banner-contact.jpg"
	}
};
var heroSlides = [
	{
		img: "/images/hero-slide-1.jpg",
		eyebrow: "Earth Movers International — Dubai, UAE",
		titlePre: "No.1 RTA-Approved ",
		titleGold: "Road Contractor",
		titlePost: " in Dubai",
		text: "We deliver reliable, high-quality road construction with advanced technology — your trusted partner for highways, access roads and infrastructure projects."
	},
	{
		img: "/images/hero-slide-2.jpg",
		eyebrow: "Building the ground the UAE rises from",
		titlePre: "Earthworks, excavation and ",
		titleGold: "heavy construction",
		titlePost: ".",
		text: "Infrastructure, commercial and industrial projects across the Emirates — founded in Montreal in 1990, in Dubai since 2005."
	},
	{
		img: "/images/hero-slide-3.jpg",
		eyebrow: "RTA-approved asphalt & road works",
		titlePre: "Asphalt laid to ",
		titleGold: "tight tolerances",
		titlePost: ".",
		text: "From sub-base to wearing course — compacted, tested and handed over ready for traffic."
	}
];
var certifications = [
	{
		title: "RTA Approved",
		text: "Roads & Transport Authority approved road contractor"
	},
	{
		title: "Dubai Municipality",
		text: "Aligned with municipality standards and permits"
	},
	{
		title: "Since 1990",
		text: "Founded in Montreal, in Dubai since 2005"
	},
	{
		title: "HSE First",
		text: "Method statements and permits on every lift"
	}
];
var stats = [
	{
		value: 35,
		suffix: "+",
		label: "Years since founding",
		note: "Montreal, 1990"
	},
	{
		value: 20,
		suffix: "+",
		label: "Years in the UAE",
		note: "Dubai, since 2005"
	},
	{
		value: 17,
		suffix: "",
		label: "Service disciplines",
		note: "Earthworks to asphalt"
	},
	{
		value: 24,
		suffix: "/7",
		label: "Fleet availability",
		note: "Across the Emirates"
	}
];
var clients = [
	"Nakheel PJSC",
	"Dubai Municipality",
	"Fujairah Cement Industry",
	"RTA-Approved Contractor",
	"Infrastructure · Commercial · Industrial"
];
var projects = [
	{
		client: "Fujairah Cement Industry",
		location: "Dibba, Fujairah",
		year: "2021",
		value: "AED 1.8M",
		sector: "Roads & Asphalt",
		scope: "Removal of old asphalt, levelling, road base and sub-base, compaction, and new asphalt laying."
	},
	{
		client: "Dubai Municipality",
		location: "Dubai",
		year: "2017",
		value: "AED 0.3M",
		sector: "Specialised Logistics",
		scope: "Relocation of animals from Dubai Airport to the Safari — planned, permitted and executed without incident."
	},
	{
		client: "Nakheel PJSC",
		location: "Dubai",
		year: "2015",
		value: "AED 0.7M",
		sector: "Marine Works",
		scope: "Levelling of beach sand, placement of boulders, and compaction of the area."
	}
];
var sectors = [
	{
		title: "Infrastructure",
		text: "Roads, highways and utility corridors for public authorities."
	},
	{
		title: "Commercial",
		text: "Site preparation and enabling works for commercial developments."
	},
	{
		title: "Industrial",
		text: "Heavy earthworks for plants, cement works and logistics facilities."
	},
	{
		title: "Oil & Gas",
		text: "Trenching and pipeline works executed to sector standards."
	},
	{
		title: "Marine & Coastal",
		text: "Beach profiling, boulder placement and coastal protection."
	},
	{
		title: "Residential",
		text: "Land clearing and grading for master-planned communities."
	}
];
var values = [
	{
		title: "Safety, first and always",
		text: "Every method statement, every permit, every lift — planned so that people go home safe."
	},
	{
		title: "Compliance built in",
		text: "RTA-approved and aligned with municipality standards, so approvals never stall your programme."
	},
	{
		title: "Fleet depth",
		text: "One of the largest heavy-excavation fleets in Dubai means no waiting on machines."
	},
	{
		title: "Straight dealing",
		text: "Clear scope, honest pricing and communication you can plan around."
	}
];
var fleet = [
	"Excavators",
	"Bulldozers",
	"Wheel Loaders",
	"Piling Rigs",
	"Rock Breakers",
	"Graders",
	"Compactors",
	"Cranes",
	"Tippers & Trailers",
	"TMA Units"
];
var timeline = [
	{
		year: "1990",
		title: "Founded in Montreal, Canada",
		text: "Earth Movers International begins as an earthworks and heavy-equipment contractor in Montreal."
	},
	{
		year: "2005",
		title: "Expansion to Dubai, UAE",
		text: "EMI establishes its Dubai operation as the emirate accelerates into a global construction market."
	},
	{
		year: "2015–2021",
		title: "Landmark deliveries",
		text: "Projects for Nakheel PJSC, Dubai Municipality and Fujairah Cement Industry cement EMI’s reputation across sectors."
	},
	{
		year: "Today",
		title: "RTA-approved, fleet-strong",
		text: "A trusted road and earthworks contractor with one of the largest heavy-excavation fleets in Dubai."
	}
];
//#endregion
//#region src/data/service-content.js
var serviceContent = {
	excavation: {
		img: "/images/services/excavation.jpg",
		h1: "Excavation Contractor in the UAE",
		lead: "Bulk and detailed excavation for basements, foundations, services and infrastructure corridors — in sand, fill or hard rock.",
		intro: "Excavation is where a programme is won or lost. We take a plot from existing ground to a surveyed, inspected formation level using our own excavators, breakers, loaders and tippers — so the platform is handed to the next trade on the date it was promised, not the date a hire company could supply a machine.",
		body: ["Ground across the UAE rarely behaves the same way twice. Coastal Dubai and Sharjah plots are typically loose sand over a caprock band; Ras Al Khaimah and Fujairah put you into hard strata within the first few metres; older industrial plots hide uncontrolled fill, buried slabs and abandoned services. We read the geotechnical report before mobilising and match the spread to it — long-reach machines where batters have to be pulled back, hydraulic breakers where the rock line comes up early, and confined-space machines where boundaries leave no room to slope.", "Everything is cut to survey control, with levels checked as the dig proceeds rather than at the end. Batters, benching and temporary slope protection are set out to the design; arisings are classified, loaded and hauled under municipal disposal permits with tickets retained for the project file. Where dewatering, shoring or piling contractors are working alongside us, the sequence is agreed up front so the excavation face is never waiting on someone else."],
		scope: [
			"Bulk excavation to formation level for basements, podiums and platforms",
			"Detailed excavation for footings, pile caps, ground beams and pits",
			"Trench excavation for drainage, ducts, water and cable routes",
			"Rock breaking and hard-strata removal with hydraulic breakers",
			"Batters, benching and temporary slope protection to the design",
			"Loading, haulage, tipping and disposal under municipal permit",
			"Setting out, level checks and as-dug survey by our own surveyor"
		],
		specs: [
			["Plant", "Tracked excavators, hydraulic rock breakers, wheel loaders, tippers and trailers"],
			["Typical use", "Basements, foundations, service corridors, tank pits, infrastructure trenches"],
			["Control", "Survey setting-out, layer level checks, disposal tickets, as-dug records"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Do you carry out excavation in rock?",
				a: "Yes. Hydraulic rock breakers and high-flow carriers are part of our own fleet, which matters on Ras Al Khaimah and Fujairah sites where the rock line comes up quickly. We price rock separately from soft dig so you can see exactly what the ground is costing you."
			},
			{
				q: "Do you remove and dispose of the excavated material?",
				a: "Yes. Loading, haulage and tipping are included, carried out under the relevant municipal disposal permit with tickets retained. Where material is suitable for reuse as fill we say so at tender stage — keeping it on site is usually cheaper than importing later."
			},
			{
				q: "Can you work alongside a shoring or piling contractor?",
				a: "Routinely. We agree the dig sequence, access and craneage windows with the shoring, piling and dewatering teams before mobilising, so the excavation face and the specialist works are never blocking one another."
			}
		]
	},
	"back-filling": {
		img: "/images/services/back-filling.jpg",
		h1: "Backfilling Contractor in the UAE",
		lead: "Structural and service backfill placed in controlled, tested layers — the work that stops settlement appearing a year later.",
		intro: "Backfilling looks like the simplest operation on a site and is the most common source of long-term defects. Trench reinstatement that settles, basement surrounds that pull away from the structure, slabs that crack over a service run — almost all of it traces back to material tipped in bulk instead of placed and compacted in layers.",
		body: ["We backfill with approved material to the specified layer thickness, watering to optimum moisture content and compacting each lift before the next is placed. Around structures, the fill is brought up evenly on all sides so nothing is pushed out of line. Around services, bedding and surround are placed by hand or with light plate compactors to protect the pipe or duct, and only then is machine compaction taken over the top.", "Field density testing is carried out lift by lift and the results are compiled into the compaction records the consultant and the authority need at handover. Where imported fill is required we source approved granular material with test certificates rather than whatever is closest, because the certificate is what gets the layer signed off."],
		scope: [
			"Structural backfill to basements, retaining walls, culverts and manholes",
			"Trench backfill over drainage, water, irrigation, cable and duct runs",
			"Pipe and duct bedding and surround placed by hand or plate",
			"Supply of approved imported granular fill with test certificates",
			"Layer placement, watering and compaction to specified density",
			"Field density testing and compaction records for handover",
			"Reinstatement of the surface above — asphalt, interlock or landscaping"
		],
		specs: [
			["Plant", "Backhoe loaders, wheel loaders, smooth drum and padfoot rollers, plate compactors, water bowsers"],
			["Typical use", "Basement surrounds, trench reinstatement, culverts, manholes, retaining structures"],
			["Control", "Layer thickness control, moisture control, field density testing, compaction certificates"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "What material do you use for backfill?",
				a: "Excavated material where it is suitable and approved, imported granular fill where it is not. Either way the material is tested and certified before it goes in — reusing site-won material is only a saving if it actually passes."
			},
			{
				q: "Do you provide compaction test results?",
				a: "Yes. Field density testing is carried out layer by layer and the results are compiled into compaction records issued with the handover documentation, which is what consultants and authorities ask for at inspection."
			},
			{
				q: "Can you reinstate the surface after backfilling?",
				a: "Yes. Because we also carry out road base, asphalt, interlock and kerbing works, trench reinstatement can be completed to the finished surface by one contractor rather than handed to a second one."
			}
		]
	},
	"cut-and-fill": {
		img: "/images/services/cut-and-fill.jpg",
		h1: "Cut and Fill Contractor in the UAE",
		lead: "Balanced cut-and-fill that brings a site to design levels while keeping material on site wherever it is suitable.",
		intro: "Cut and fill is an earthworks balance exercise before it is a machine exercise. Every cubic metre you export and then re-import is paid for twice, so the first thing we do is model the earthworks quantities against the design levels and find how much of the cut can legitimately become fill.",
		body: ["Dozers and scrapers move the bulk, graders trim to profile and rollers compact each layer as it is placed. Machine control and survey checks hold the design surface across large, featureless areas — the sort of plot where a few centimetres of drift over a hundred metres turns into an expensive correction at slab stage.", "Where cut and fill do not balance, we tell you at tender stage rather than after mobilisation, along with the haulage and disposal or import cost that closes the gap. Stockpile locations, haul routes and dust control are planned into the site layout so the operation does not choke its own access or attract a municipal notice."],
		scope: [
			"Earthworks quantity balance against design levels before mobilisation",
			"Bulk cut with dozers, excavators and loading shovels",
			"Placement of site-won fill in controlled, compacted layers",
			"Trimming to design profile with graders and machine control",
			"Stockpile management, haul road formation and dust control",
			"Import of approved fill or export of surplus where the balance requires it",
			"Survey control and as-built level records at each stage"
		],
		specs: [
			["Plant", "Crawler dozers, tracked excavators, wheel loaders, motor graders, vibratory rollers, water bowsers"],
			["Typical use", "Plot platforms, industrial yards, road formation, landscaped and terraced sites"],
			["Control", "Earthworks balance model, machine guidance, survey level checks, layer testing"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "How do you keep haulage costs down on a cut-and-fill job?",
				a: "By balancing the earthworks before anyone mobilises. Material that can legitimately be reused as fill stays on site, which removes both the disposal charge and the import charge. We show the balance in the tender so the assumption is visible rather than buried in a rate."
			},
			{
				q: "Can you work to a machine-guidance model?",
				a: "Yes. Where a design surface is issued we work to survey control and machine guidance, which holds tolerance far better than eye-and-string across open plots and reduces the amount of correction work at formation level."
			},
			{
				q: "Do you handle dust and haul road control?",
				a: "Yes. Water bowsers, haul route formation and stockpile placement are planned into the site layout from the start, because dust complaints and blocked access stop an earthworks operation faster than plant breakdowns do."
			}
		]
	},
	leveling: {
		img: "/images/services/leveling.jpg",
		h1: "Land Levelling & Grading Contractor in the UAE",
		lead: "Grading and fine levelling to design elevations and falls — formation levels, slab platforms, yards and laydown areas.",
		intro: "Levelling and grading is the last earthworks operation before something permanent is built on top, which is why tolerance matters more here than anywhere else in the sequence. A formation that is out by a few centimetres is paid for again in extra base, extra asphalt or extra blinding.",
		body: ["Motor graders with GPS-guided blades hold the design surface across large areas, with survey checks taken on a grid rather than at a handful of convenient points. Falls are set to the drainage design so water leaves the platform where the drawings say it should — a yard that ponds is a levelling failure, not a drainage one.", "We grade to formation level for roads and pavements, to platform level for slabs and buildings, and to finished level for open yards, laydown areas and hardstandings. Where the surface will carry traffic before construction starts, the graded formation is compacted and sealed so it survives site traffic rather than rutting in the first week."],
		scope: [
			"Grading to formation level for roads, pavements and hardstandings",
			"Fine levelling of slab and building platforms to design elevation",
			"Setting falls and crossfalls to the drainage design",
			"Trimming, boxing out and profiling of yards and laydown areas",
			"GPS and machine-guided blade control on open areas",
			"Grid-based survey checks with recorded level sheets",
			"Compaction and sealing of the graded surface against site traffic"
		],
		specs: [
			["Plant", "Motor graders with blade control, vibratory rollers, tracked and wheeled excavators, water bowsers"],
			["Typical use", "Road formation, slab platforms, industrial yards, laydown and storage areas, car park sub-grade"],
			["Control", "Total station and GPS survey, grid level sheets, tolerance checks before sign-off"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "What tolerance do you work to on levelling?",
				a: "To the tolerance stated in the specification for the layer concerned — formation, sub-base and finished surfaces each carry a different allowance. Levels are checked on a survey grid and recorded, so the sign-off is based on evidence rather than a walk-round."
			},
			{
				q: "Can you level a site that has already been filled by someone else?",
				a: "Yes, though we survey the existing surface first. If the fill underneath was not placed in tested layers, grading the top of it only hides the problem — we will say so and price the correction rather than paper over it."
			},
			{
				q: "Do you set the falls for drainage?",
				a: "Yes. Crossfalls and longitudinal falls are set to the drainage design and checked before the surface is signed off, so the platform sheds water to the gullies and channels instead of ponding in the middle."
			}
		]
	},
	compaction: {
		img: "/images/services/compaction.jpg",
		h1: "Compaction Works Contractor in the UAE",
		lead: "Layer-by-layer compaction with the right roller for the material, backed by field density testing and compaction certificates.",
		intro: "Compaction is the part of earthworks that is invisible once it is finished and expensive when it is wrong. Everything above it — base, asphalt, slabs, kerbs — depends on a platform that has been brought to the specified density in controlled layers, with results that a consultant will actually accept.",
		body: ["The roller has to suit the material. Vibratory smooth drums for granular fill and sub-base, padfoot rollers for cohesive material, plate compactors and trench rollers in confined areas and around services. Layer thickness is controlled to what the plant can genuinely compact rather than what is quick to spread, and moisture is brought to optimum with bowsers before rolling starts.", "Field density tests are taken layer by layer and issued as compaction records with the handover pack. Where a layer fails, it is reworked and retested rather than covered — a habit that costs an afternoon and saves a rebuild."],
		scope: [
			"Compaction of fill, sub-grade and sub-base in controlled layers",
			"Selection of roller type to suit granular or cohesive material",
			"Moisture conditioning to optimum content with water bowsers",
			"Confined-area compaction with plate compactors and trench rollers",
			"Proof rolling of formation before base or paving",
			"Field density testing layer by layer, with rework where a layer fails",
			"Compaction certificates and records for consultant and authority sign-off"
		],
		specs: [
			["Plant", "Single and tandem vibratory rollers, padfoot rollers, pneumatic tyred rollers, plate compactors, water bowsers"],
			["Typical use", "Road formation and sub-base, structural fill, trench reinstatement, yard and platform sub-grade"],
			["Control", "Layer thickness control, moisture control, field density testing, compaction certificates"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "What density do you compact to?",
				a: "To the percentage of maximum dry density stated in the project specification for that layer — typically higher for sub-base under a road than for general fill. The target is agreed before work starts and tested as the layers go in."
			},
			{
				q: "Do you supply compaction test certificates?",
				a: "Yes. Field density testing is carried out through an approved laboratory and the certificates are issued as part of the handover documentation, which is what the consultant and the authority ask for at inspection."
			},
			{
				q: "Can you compact in confined areas and around services?",
				a: "Yes. Trench rollers and plate compactors are used where a full-size roller cannot reach or would risk damaging a service, with the bedding and surround compacted by hand before machine compaction is taken over the top."
			}
		]
	},
	"access-roads": {
		img: "/images/services/access-roads.jpg",
		h1: "Access Roads Contractor in the UAE",
		lead: "Temporary and permanent access roads into plots, sites, plants and remote facilities — built for the loads that will actually use them.",
		intro: "An access road is the first thing a project needs and the last thing anyone budgets properly. Deliveries that cannot reach the plot, low-loaders bogged at the boundary and a haul route that turns to ruts after the first rain all cost more than building the road correctly at the start.",
		body: ["We build access roads as a full pavement rather than a graded track: formation, compacted sub-base, road base and a surface sized for the axle loads the route will carry. For a construction access that will later be replaced, that may be a compacted base with a bituminous seal. For a permanent plant or facility access, it is a designed pavement with kerbs, drainage falls and markings.", "Alignment, turning circles and gradients are set for the vehicles that will actually use the road — low-loaders, concrete trucks, tankers and container trailers need geometry that a car does not. Where the access ties into a public road, the connection is an RTA entry-and-exit or municipal approval matter, and we handle that permit chain as part of the same package."],
		scope: [
			"Route survey, alignment and gradient setting for heavy vehicle access",
			"Clearing, formation and compacted sub-grade preparation",
			"Sub-base and road base laying, watering and compaction",
			"Asphalt surfacing or bituminous seal to suit the road life",
			"Drainage falls, culverts and side drains where the route needs them",
			"Kerbing, edge protection and turning heads for heavy vehicles",
			"Tie-in to the public road under RTA or municipal approval"
		],
		specs: [
			["Plant", "Excavators, dozers, graders, wheel loaders, rollers, pavers, tippers, water bowsers"],
			["Typical use", "Construction site access, plot entrances, plant and factory access, haul roads, remote facility roads"],
			["Control", "Survey alignment, layer thickness and density testing, surface level checks"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Can you build a temporary access road quickly?",
				a: "Yes. A compacted base access with a bituminous seal can be built in a short mobilisation and is normally the right answer for a route that will be dug up again later. We will tell you when a temporary road is false economy for the traffic you have described."
			},
			{
				q: "Do you handle the connection to the main road?",
				a: "Yes. Where the access ties into an RTA road it is an entry-and-exit works package, which we are RTA-approved to carry out, including the drawings, permit and reinstatement. On municipal roads we handle the equivalent approval."
			},
			{
				q: "Can the access road carry low-loaders and concrete trucks?",
				a: "That is what it is designed for. Pavement thickness, turning circles and gradients are set for the heaviest vehicle on your delivery schedule rather than for a standard light-traffic section."
			}
		]
	},
	"road-base-laying": {
		img: "/images/services/road-base-laying.jpg",
		h1: "Road Base Laying Contractor in the UAE",
		lead: "Supply, spreading, watering and compaction of aggregate sub-base and road base to specified thickness and density.",
		intro: "Road base is the layer that decides whether a road lasts. Asphalt is a wearing surface, not a structure — if the base beneath it is under-compacted, badly graded or laid to the wrong thickness, the surface will crack and rut no matter how good the mix was.",
		body: ["We supply approved aggregate with test certificates, spread it to controlled layer thickness, condition it to optimum moisture and compact it to the specified density. Levels are surveyed before and after each layer, and field density testing is carried out lift by lift rather than once at the top. Proof rolling before paving picks up soft spots while they are still cheap to fix.", "Grading matters as much as compaction. Material that segregates during tipping or spreading gives a layer that tests well in one spot and fails in another, so stockpiling, haulage and spreading are handled to keep the aggregate consistent from the quarry to the blade."],
		scope: [
			"Supply of approved sub-base and road base aggregate with test certificates",
			"Sub-grade preparation and proof rolling before base is laid",
			"Spreading to controlled layer thickness by grader or paver",
			"Moisture conditioning with water bowsers to optimum content",
			"Compaction to specified density with vibratory and pneumatic rollers",
			"Layer-by-layer field density testing and level survey",
			"Proof rolling and formation handover ready for asphalt or interlock"
		],
		specs: [
			["Plant", "Motor graders, wheel loaders, tippers, vibratory and pneumatic tyred rollers, water bowsers"],
			["Typical use", "Road and highway pavements, car parks, industrial yards, container hardstandings, access roads"],
			["Control", "Aggregate test certificates, layer thickness control, field density testing, surface level survey"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "What thickness of road base do you lay?",
				a: "Whatever the pavement design calls for, built up in layers that the compaction plant can genuinely achieve density through. Where a design asks for a single thick lift we will flag it, because an untestable layer is a problem at inspection."
			},
			{
				q: "Do you supply the aggregate as well as lay it?",
				a: "Yes. We supply approved sub-base and road base material with test certificates from certified sources, or work with a client-nominated supplier if the material is already contracted."
			},
			{
				q: "How do you prove the base is acceptable before asphalt?",
				a: "Layer-by-layer field density testing, a level survey of the finished base, and proof rolling with a loaded vehicle to expose soft spots. All three are documented and handed over before paving starts."
			}
		]
	},
	"asphalt-works": {
		img: "/images/services/asphalt-works.jpg",
		h1: "Asphalt Contractor in the UAE",
		lead: "Binder and wearing course asphalt laid by paver to specified thickness, temperature and joint detail, from approved plant mixes.",
		intro: "Asphalt is unforgiving about temperature and joints. A mix that arrives too cool, a joint that is not properly cut and tacked, or rolling that starts too late will show up as ravelling and cracking within a season — usually just after the defects period closes.",
		body: ["We lay binder and wearing course by paver to the specified thickness, working from approved mixes at certified plants with delivery temperatures recorded. Prime and tack coats are applied at the correct rate, longitudinal and transverse joints are cut back and tacked, and the rolling pattern is set to reach density while the mat is still within its temperature window.", "For overlays and reconstruction, existing surfaces are milled to profile, edges are saw-cut clean and levels are checked so the new surface ties in without a lip. As an RTA-approved road contractor we work to authority specification on public roads, with material approvals, testing and core results documented as the work proceeds rather than assembled afterwards."],
		scope: [
			"Prime coat and tack coat application at specified rates",
			"Binder course and wearing course laying by paver",
			"Milling and planing of existing asphalt to profile",
			"Longitudinal and transverse joint preparation and sealing",
			"Rolling to specified density within the mix temperature window",
			"Core testing, thickness checks and surface regularity survey",
			"Reinstatement around manholes, gullies and service crossings"
		],
		specs: [
			["Plant", "Asphalt pavers, tandem and pneumatic tyred rollers, milling machines, bitumen sprayers, tippers"],
			["Typical use", "Roads and highways, internal estate roads, car parks, industrial yards, overlays and reconstruction"],
			["Control", "Approved plant mixes, delivery temperature records, density and core testing, level and regularity survey"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Are you an approved asphalt contractor for RTA roads?",
				a: "Yes. We are an RTA-approved road contractor and work to authority specification on public roads, including the material approvals, testing regime and documentation the approval requires."
			},
			{
				q: "Can you work at night to avoid closing a road in the day?",
				a: "Yes, and on live RTA roads night working is usually the only permitted window. We prepare the traffic diversion drawings and secure the lane or road closure permit as part of the same package."
			},
			{
				q: "Do you carry out overlays on an existing surface?",
				a: "Yes — milling to profile, edge saw-cutting, tack coat and overlay, with levels checked so the new surface ties into kerbs, gullies and adjoining sections without a lip."
			}
		]
	},
	"road-maintenance": {
		img: "/images/services/road-maintenance.jpg",
		h1: "Road Maintenance Contractor in the UAE",
		lead: "Planned and reactive maintenance for internal roads, industrial estates and community networks — programmed to keep the network open.",
		intro: "Road maintenance is a scheduling problem as much as a construction one. The works themselves are straightforward; doing them without closing the estate, blocking a loading bay or stranding residents is what separates a maintenance contractor from a paving contractor.",
		body: ["We survey the network, grade the defects and put a programme against them, so spend goes to the sections that are failing rather than the sections that are easiest to reach. Crack sealing and edge repair early is a fraction of the cost of reconstruction later, and a condition survey makes that argument with evidence instead of opinion.", "Work is sequenced and phased so access is maintained throughout — half-width working, night shifts, temporary diversions and staged handbacks. On public roads the traffic management and permits are handled by our own team; on private estates we coordinate with facilities management and residents so nobody discovers the closure on the morning it starts."],
		scope: [
			"Condition survey and defect grading across the network",
			"Resurfacing, overlay and localised reconstruction",
			"Crack sealing, edge repair and joint treatment",
			"Pothole and settlement repair, including trench reinstatement failures",
			"Gully, channel and drainage clearing and repair",
			"Kerb, channel and road marking renewal",
			"Phased programming with traffic management to keep the network open"
		],
		specs: [
			["Plant", "Milling machines, pavers, tandem rollers, saw cutters, jetting and clearing plant, traffic management units"],
			["Typical use", "Industrial estates, community and residential networks, plant and warehouse roads, car park networks"],
			["Control", "Condition survey records, prioritised maintenance programme, phased handback with traffic management"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Can you maintain a road network without closing it?",
				a: "In most cases yes, by working half-width, at night, or in phased sections with temporary diversions. The sequence is agreed before mobilisation so tenants, residents and deliveries know what is happening and when."
			},
			{
				q: "Do you provide a condition survey before pricing?",
				a: "Yes. Surveying and grading the defects first means the budget goes to the sections that are actually failing, and gives you a defensible case for the spend rather than a lump sum with no basis."
			},
			{
				q: "Do you handle reactive callouts as well as planned work?",
				a: "Yes. Reactive repairs — potholes, settlement over a service trench, a failed reinstatement — can be run alongside a planned maintenance programme under the same arrangement."
			}
		]
	},
	"asphalt-patch-works": {
		img: "/images/services/asphalt-patch-works.jpg",
		h1: "Asphalt Patch Repair Contractor in the UAE",
		lead: "Saw-cut, excavate, reinstate and compact — patch repairs done so the joint does not fail in the first season.",
		intro: "Most failed patches fail at the edge. A ragged break-out, no tack on the vertical face and backfill that was never properly compacted give you a patch that sinks, opens at the joint and lets water into the layers you were trying to protect.",
		body: ["We saw-cut the perimeter to a clean rectangle, break out to sound material, and rebuild the layers properly — compacted base, tack coat on every face, asphalt in lifts and rolled to density. The joint is sealed so the repair is watertight, and the finished surface is flush with the surrounding road rather than proud or dished.", "Patching is most often needed after a utility crossing, a trench reinstatement that has settled, or localised failure over a soft spot. In each case we look at why the failure happened — repairing the surface over a base that is still failing simply buys a few months."],
		scope: [
			"Saw-cutting to a clean, square perimeter",
			"Break-out and removal of failed material to sound base",
			"Base repair, replacement and compaction where the failure runs deep",
			"Tack coat to all vertical faces and the prepared base",
			"Asphalt reinstatement in lifts, rolled to specified density",
			"Joint sealing and flush finish with the surrounding surface",
			"Utility trench and crossing reinstatement to authority standard"
		],
		specs: [
			["Plant", "Road saws, breakers, mini excavators, plate compactors, trench rollers, tandem rollers, hot boxes"],
			["Typical use", "Utility crossing reinstatement, trench repair, pothole and settlement repair, car park and estate road patching"],
			["Control", "Cut-back to sound material, layer compaction testing, flush level check, joint sealing"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Why do patch repairs keep failing on our road?",
				a: "Usually because the break-out was not taken back to sound material, the vertical faces were not tacked, or the base under the patch was never repaired. A patch is only as good as the layer it sits on, which is why we investigate the base rather than just replacing the surface."
			},
			{
				q: "Can you patch a road that is still in use?",
				a: "Yes. Patching is normally done under lane closure or half-width working, with the traffic management and, on RTA roads, the closure permit handled by our own team."
			},
			{
				q: "How quickly can a patched section be reopened?",
				a: "Once the asphalt has cooled sufficiently and been rolled to density — typically the same shift for a standard patch. Night working lets a section be repaired and handed back before the morning peak."
			}
		]
	},
	parkings: {
		img: "/images/services/parkings.jpg",
		h1: "Car Park Construction Contractor in the UAE",
		lead: "Complete parking areas from sub-grade to line marking — base, surfacing, kerbing, drainage falls, bays and signage.",
		intro: "A car park is a small road network with tight geometry and a lot of edges, and it is usually the last package on a project — which is exactly why it ends up rushed. Bay dimensions, aisle widths, accessible bays and falls to the gullies all have to satisfy the authority layout standard before the surface can be signed off.",
		body: ["We build the whole thing: sub-grade preparation, compacted base, surfacing in asphalt or heavy-duty interlock, kerbing to the bay and island layout, drainage falls and gullies, wheel stops, bollards, bay marking, numbering, directional arrows and signage. Because it is one contractor, the falls actually reach the gullies and the marking actually fits the kerb lines.", "Surface choice is driven by use. Asphalt is faster and cheaper over large open areas; heavy-duty interlock is the better answer where vehicles turn on the spot, where fuel and oil spillage is likely, or where sections may need lifting later for services beneath."],
		scope: [
			"Sub-grade preparation, sub-base and road base to the pavement design",
			"Surfacing in asphalt or heavy-duty interlock paving",
			"Kerbing to bay, island and perimeter layout, including drop kerbs",
			"Drainage falls, gullies and channel drains",
			"Bay marking, numbering, arrows, hatching and accessible bays",
			"Wheel stops, bollards, barriers and signage",
			"Layout to authority parking standards and handover documentation"
		],
		specs: [
			["Plant", "Graders, rollers, pavers, interlock laying crews, kerb-laying crews, marking plant"],
			["Typical use", "Commercial and retail car parks, staff and labour accommodation parking, warehouse and yard parking, community parking"],
			["Control", "Layout to authority standard, level and fall survey, layer compaction testing, marking set-out"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Asphalt or interlock for a car park?",
				a: "Asphalt over large open areas where cost and speed matter. Heavy-duty interlock where vehicles turn on the spot, where spillage is likely, or where sections may need to be lifted later for services — because interlock can be taken up and relaid without a visible repair."
			},
			{
				q: "Do you set out the bays to the authority standard?",
				a: "Yes. Bay dimensions, aisle widths, accessible bay provision and signage are set out to the applicable authority layout standard, which is what the parking area will be inspected against."
			},
			{
				q: "Can you resurface and remark an existing car park?",
				a: "Yes — milling and overlay, or localised repair, followed by full remarking and signage renewal, phased so part of the parking stays available while the work proceeds."
			}
		]
	},
	"heavy-duty-interlock-paving": {
		img: "/images/services/heavy-duty-interlock-paving.jpg",
		h1: "Interlock Paving Contractor in the UAE",
		lead: "Heavy-duty interlock and paver block for yards, container areas, service roads and hardstandings that carry loaded trucks.",
		intro: "Interlock either holds for twenty years or ruts in the first month, and the difference is almost never the block itself. Block thickness, bedding sand grading and depth, laying pattern and — above all — edge restraint are what decide whether a heavily loaded yard stays flat.",
		body: ["For trafficked areas we use heavy-duty blocks laid in a herringbone pattern, which locks under braking and turning loads in a way that stretcher bond does not. Bedding sand is laid to a consistent depth over a compacted, level base, and every free edge gets a concrete-haunched restraint — kerb, edging or channel — because a yard fails from the edges inwards.", "The base underneath is built as a full pavement, not a levelling layer. Once laid, blocks are vibrated in and jointing sand is swept and re-swept until the joints are full, which is when the surface actually starts behaving as an interlocking pavement rather than a set of loose blocks."],
		scope: [
			"Sub-grade preparation, sub-base and road base to the loading design",
			"Supply of heavy-duty interlock blocks in the specified thickness and finish",
			"Screeded bedding sand to consistent depth over a level base",
			"Herringbone and pattern laying for trafficked areas",
			"Concrete-haunched edge restraint, kerbs, channels and edgings",
			"Vibration, jointing sand sweeping and final compaction",
			"Falls, drainage channels and gully surrounds within the paved area"
		],
		specs: [
			["Plant", "Graders, rollers, plate compactors with protective pads, block cutters, laying crews"],
			["Typical use", "Container and truck yards, warehouse hardstandings, service roads, forecourts, car parks, walkways"],
			["Control", "Block thickness to loading, bedding depth control, level and fall survey, edge restraint inspection"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "What block thickness do we need for a truck yard?",
				a: "Heavy-duty thickness rather than the thinner blocks used for footpaths and light parking, over a base designed for the axle loads. We size both together, because a thick block over a thin base still ruts."
			},
			{
				q: "Why does interlock rut where trucks turn?",
				a: "Almost always missing or weak edge restraint, or bedding sand laid too deep or unevenly. Turning loads push blocks sideways, and without a haunched restraint to push against, the pattern opens up."
			},
			{
				q: "Can interlock be lifted and relaid for services underneath?",
				a: "Yes, and it is one of the main reasons to choose it over asphalt in a yard. Blocks are lifted, the trench is worked and backfilled, and the same blocks are relaid — with no permanent patch visible."
			}
		]
	},
	kerbstones: {
		img: "/images/services/kerbstones.jpg",
		h1: "Kerbstone Installation Contractor in the UAE",
		lead: "Supply and installation of kerbstones and channels to line and level on concrete haunching, finished to authority profile.",
		intro: "Kerbs are the visible line that every other element is judged against. A kerb run that wanders in plan or dips in level makes a well-built road look badly built, and it is the first thing an authority inspector puts a string line to.",
		body: ["We set kerbs to line and level on a concrete bed with haunching to the back, using survey control on straights and templates on radii so curves are true rather than approximate. Joints are consistent, drop kerbs at crossings and entrances are transitioned properly, and the channel line is set so water actually runs to the gullies.", "We install road kerbs, parking and island kerbs, radius units, drop kerbs and channels, in the profiles specified by RTA, Dubai Municipality and the other emirate authorities. Kerbing is usually the interface between road, parking and landscaping packages, so we sequence it with whoever is either side of us rather than fixing the line and leaving them to cope."],
		scope: [
			"Supply of kerbstones, channels, radius and drop units to authority profile",
			"Setting out to line and level with survey control",
			"Concrete bed and haunching to the specified section",
			"Straight runs, radii, islands and traffic-calming kerb lines",
			"Drop kerbs and transitions at crossings, entrances and accessible routes",
			"Channel laying and falls to gullies and drainage points",
			"Backing, reinstatement and finishing behind the kerb line"
		],
		specs: [
			["Plant", "Kerb-laying crews, mini excavators, concrete supply, saw cutters, survey instruments"],
			["Typical use", "Road and highway kerbing, car park and island kerbs, entrance drop kerbs, community and estate roads"],
			["Control", "Line and level survey, haunching inspection, joint consistency, profile compliance"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Which kerb profiles do you install?",
				a: "The profiles specified by the relevant authority — RTA and Dubai Municipality profiles in Dubai, and the equivalent standards in the other emirates — including road kerbs, parking kerbs, radius units, drop kerbs and channels."
			},
			{
				q: "Do you install drop kerbs for a plot entrance?",
				a: "Yes. On an RTA road the entrance is an entry-and-exit works package, which we are RTA-approved to carry out, covering the drop kerb, apron, transition, drainage continuity and reinstatement."
			},
			{
				q: "Can you replace damaged kerbs on an existing road?",
				a: "Yes. Damaged units are cut out, the bed and haunching are reformed and new units are set to match the existing line and level, with the adjoining surface reinstated."
			}
		]
	},
	"road-markings": {
		img: "/images/services/road-markings.jpg",
		h1: "Road Marking Contractor in the UAE",
		lead: "Thermoplastic and cold-paint markings — lane lines, hatching, arrows, crossings, bays and numbering to authority standards.",
		intro: "Markings are the last operation and the one everybody sees. They also have the shortest weather window: applied to a surface that is damp, dusty or too cool, thermoplastic will lift within weeks no matter how good the set-out was.",
		body: ["We set out from the drawings, prepare the surface, and apply thermoplastic or cold paint at the specified thickness with reflective beading where the specification calls for it. On new asphalt we allow the surface to cure before application; on existing surfaces we clean, and remove old markings by grinding or blasting rather than painting over them.", "Work covers highway and estate lane lines, hatching, arrows and legends, pedestrian crossings, cycle lanes, parking bays and numbering, rumble strips and speed table markings. On live roads the marking operation runs under lane closure with our own traffic management and, where the road is RTA, our own permit."],
		scope: [
			"Set-out from drawings and pre-marking on site",
			"Surface preparation, cleaning and removal of redundant markings",
			"Thermoplastic application at specified thickness with reflective beading",
			"Cold-paint marking where specified or for temporary works",
			"Lane lines, edge lines, hatching, arrows, legends and stop lines",
			"Pedestrian crossings, cycle lanes, parking bays and bay numbering",
			"Rumble strips, speed table markings and coloured surfacing"
		],
		specs: [
			["Plant", "Thermoplastic applicators, cold-paint machines, pre-heaters, grinders and blasters, traffic management units"],
			["Typical use", "Highways and estate roads, car parks, industrial yards, community roads, warehouse floors and circulation routes"],
			["Control", "Set-out check against drawings, surface condition and temperature check, thickness and beading compliance"],
			["Coverage", "All seven emirates, mobilised from Dubai"]
		],
		faqs: [
			{
				q: "Thermoplastic or paint?",
				a: "Thermoplastic for permanent markings on trafficked roads — it is thicker, lasts far longer and takes reflective beading properly. Cold paint for temporary markings, low-traffic areas and situations where the layout will change again shortly."
			},
			{
				q: "Can you remove existing markings?",
				a: "Yes, by grinding or blasting rather than overpainting. Painting over a redundant line leaves a ghost mark that is still visible at night and in wet conditions, which is exactly when it causes confusion."
			},
			{
				q: "How long before a newly marked road can be reopened?",
				a: "Thermoplastic sets in minutes, so a section can normally be handed back within the same closure window. That is what makes night marking under a lane closure practical on busy roads."
			}
		]
	},
	"lane-closure-permits": {
		img: "/images/services/lane-closure-permits.jpg",
		h1: "Lane Closure Permits in Dubai",
		lead: "Application, drawings and approval for single and multi-lane closures on RTA roads, from submission through to permit issue.",
		intro: "A lane closure permit is a drawing exercise with a deadline attached. The RTA does not approve an intention to close a lane — it approves a specific taper, a specific signage schedule, a specific working window and a specific set of safety measures, drawn and justified.",
		body: ["We prepare the traffic diversion drawings, set the taper lengths and signage schedule to the approach speed, define the working window — almost always night hours on a busy corridor — and submit the package. Comments are answered and resubmitted by the same team, so the application does not stall waiting for someone to interpret the response.", "Because we also install and maintain the traffic management on site, the permit that gets approved is the layout that actually gets built. That matters at inspection: most stop-work notices on a closure are not for working without a permit but for working to a layout that does not match the one approved."],
		scope: [
			"Traffic diversion and lane closure drawings prepared to RTA standards",
			"Taper design, signage schedules and speed-appropriate advance warning",
			"Working window definition, including night-work and weekend windows",
			"Submission, comment response and follow-through to permit issue",
			"Installation of the approved layout on site by our own crews",
			"Maintenance and inspection of the closure for the life of the works",
			"Permit extension and staged amendment where the programme changes"
		],
		specs: [
			["Authority", "Roads and Transport Authority (RTA), Dubai"],
			["Typical use", "Utility works in the carriageway, asphalt and patching works, service protection, entry-exit construction"],
			["Deliverables", "Approved diversion drawings, issued permit, installed and maintained layout, compliance during works"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "How long does an RTA lane closure permit take?",
				a: "It depends on the road, the extent of the closure and how clean the submission is. A well-prepared package for a straightforward night closure moves quickly; a multi-lane closure on a strategic corridor takes longer and attracts more comments. We give you a realistic date at the start rather than an optimistic one."
			},
			{
				q: "Do you install the traffic management as well as get the permit?",
				a: "Yes, and it is the reason the two are worth buying together. The layout that is installed matches the layout that was approved, which is what an RTA inspector checks on site."
			},
			{
				q: "Can you get a permit for daytime lane closures?",
				a: "On some roads, yes; on strategic corridors the RTA will normally only permit night working. We will tell you which category your road falls into before you build a programme around a daytime window."
			}
		]
	},
	"road-closure-permits": {
		img: "/images/services/road-closure-permits.jpg",
		h1: "Road Closure Permits in Dubai",
		lead: "Full road and carriageway closures with approved diversion routes, staged programmes and stakeholder coordination.",
		intro: "A full road closure is a bigger conversation than a lane closure. The RTA is being asked to send traffic somewhere else, so the application has to justify why the closure is necessary, prove the diversion route can absorb the traffic, and show the works cannot be staged any other way.",
		body: ["We prepare the traffic impact justification, the diversion route drawings and the staging programme, and coordinate with the RTA, Dubai Police and the stakeholders the closure affects — businesses, buildings, bus routes and emergency access. Where a single closure will not be approved, we restructure the works into stages that will be.", "Once approved, the closure is installed, signed, lit and maintained by our own crews and handed back to the agreed programme. Diversion signage is checked through the closure period rather than installed and forgotten, because a diversion that has lost a sign is what generates the complaint that ends the permit early."],
		scope: [
			"Traffic impact assessment and justification for the closure",
			"Diversion route design, drawings and advance signage strategy",
			"Staged closure programmes where a single closure is not approvable",
			"Coordination with RTA, Dubai Police and affected stakeholders",
			"Submission, comment response and follow-through to permit issue",
			"Installation, lighting and maintenance of the closure and diversion",
			"Handback to programme, with staged reopening where required"
		],
		specs: [
			["Authority", "Roads and Transport Authority (RTA) and Dubai Police"],
			["Typical use", "Carriageway reconstruction, major utility crossings, bridge and structure works, event and decoration installations"],
			["Deliverables", "Approved diversion drawings, issued permit, installed closure and diversion, stakeholder notifications"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "When is a full road closure approved rather than a lane closure?",
				a: "When the works genuinely cannot be done under partial closure and a viable diversion route exists. If neither is true, the application will be refused — so we assess it honestly first and, where necessary, restage the works into lane closures that will be approved."
			},
			{
				q: "Do you notify the businesses and residents affected?",
				a: "Yes. Stakeholder notification and coordination is part of the package, along with emergency access arrangements. Closures fail on complaints far more often than on engineering."
			},
			{
				q: "What happens if the works overrun the permitted window?",
				a: "We plan handback with contingency, and where an extension is genuinely needed we apply for it in advance. Overrunning a closure window without approval is the fastest way to lose credibility with the authority on the next application."
			}
		]
	},
	"traffic-management": {
		img: "/images/services/traffic-management.jpg",
		h1: "Traffic Management Contractor in Dubai",
		lead: "Supply, installation, maintenance and removal of compliant traffic management — cones, barriers, signage, arrow boards, TMA units and flagmen.",
		intro: "Traffic management is what stands between a live carriageway and the people working in it. It is also the element most often installed once and then left to degrade — cones scattered by passing traffic, a sign turned by the wind, a taper that has shortened by twenty metres since the first night.",
		body: ["We supply and install traffic management to the approved layout: advance warning and directional signage, cones and delineators, safety barriers, flashing arrow boards, lighting, and truck-mounted attenuator (TMA) units on high-speed roads. Trained flagmen are provided where the layout requires manual control at accesses and crossings.", "The layout is then inspected and maintained for the life of the works, not just on the first shift, and it is removed cleanly at the end so the road is handed back without residual signage confusing drivers. Where the works are on an RTA road, we prepare the diversion drawings and hold the permit as well, so one team is accountable for the drawing, the approval and what is physically on the ground."],
		scope: [
			"Traffic management layouts installed to the approved drawings",
			"Advance warning, directional and speed signage to authority standard",
			"Cones, delineators, safety barriers and pedestrian protection",
			"Flashing arrow boards, warning lights and night lighting",
			"Truck-mounted attenuator (TMA) units for high-speed carriageways",
			"Trained flagmen and manual traffic control at accesses and crossings",
			"Routine inspection, maintenance and clean removal at completion"
		],
		specs: [
			["Authority", "Roads and Transport Authority (RTA), Dubai"],
			["Typical use", "Carriageway works, utility crossings, service protection, asphalt and patching, entry-exit construction, events"],
			["Equipment", "Cones, delineators, barriers, signage, arrow boards, lighting, TMA units, flagmen"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "Do you provide TMA units?",
				a: "Yes. Truck-mounted attenuator units are provided where the road speed and layout require impact protection for the working area — typically on high-speed carriageways and for mobile or short-duration works."
			},
			{
				q: "Do you maintain the traffic management during the works?",
				a: "Yes. The layout is inspected and reinstated through the works rather than installed once. Displaced cones, turned signs and shortened tapers are the usual reasons an inspection fails."
			},
			{
				q: "Can you provide traffic management without doing the construction?",
				a: "Yes. We supply, install, maintain and remove traffic management as a standalone package, including the diversion drawings and RTA permit where the works are on an RTA road."
			}
		]
	},
	"rta-approved-entry-exit-works": {
		img: "/images/services/rta-approved-entry-exit-works.jpg",
		h1: "RTA Approved Entry & Exit Works Contractor in Dubai",
		lead: "Plot entrances and exits onto RTA roads, constructed by an RTA-approved contractor so the access is accepted and legally usable.",
		intro: "An entry-exit onto an RTA road is not a kerb job. It is a controlled connection to the public highway, and the RTA will only accept it if the design is approved, the contractor is approved, and what was built matches what was drawn.",
		body: ["We handle the package end to end: the entry-exit drawings and submission, the permit, and the construction itself — drop kerbs, apron, transitions and levels, continuity of the road drainage across the access, surfacing, marking and signage — followed by reinstatement of everything disturbed within the road reserve.", "The most common reason an access fails inspection is drainage. An entrance that interrupts the channel line, or that discharges plot water onto the carriageway, will not be signed off however well it is finished. We set the levels so the road drainage runs through unbroken and the plot drains to its own system."],
		scope: [
			"Entry and exit design drawings and RTA submission",
			"Permit application and follow-through to approval",
			"Drop kerbs, aprons, transitions and access geometry",
			"Continuity of road channel and drainage across the access",
			"Sub-base, base and asphalt or interlock surfacing of the access",
			"Marking, signage and, where required, guardrail and bollard protection",
			"Reinstatement of the road reserve and handover documentation"
		],
		specs: [
			["Authority", "Roads and Transport Authority (RTA), Dubai"],
			["Typical use", "Plot and villa entrances, commercial and retail accesses, warehouse and industrial gate access, fuel station accesses"],
			["Approval", "Carried out by an RTA-approved contractor, with drawings, permit and as-built documentation"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "Why does an entry-exit have to be done by an RTA-approved contractor?",
				a: "Because the works are inside the road reserve. The RTA will not issue the permit, and will not accept the completed access, unless the contractor carrying it out holds their approval. We do."
			},
			{
				q: "Do you prepare the entry-exit drawings as well?",
				a: "Yes. Drawings, submission, comment response and permit are all handled in-house, then the same team builds it — so what is constructed matches what was approved."
			},
			{
				q: "Why do plot accesses fail RTA inspection?",
				a: "Most often drainage: a broken channel line across the access, or plot water discharging onto the carriageway. Levels and geometry that do not match the approved drawing are the next most common cause."
			}
		]
	},
	"rta-service-protection": {
		img: "/images/services/rta-service-protection.jpg",
		h1: "RTA Service Protection Works in Dubai",
		lead: "Protection of existing utilities inside the road reserve during construction — scanning, trial pits, physical protection and reinstatement.",
		intro: "Every metre of road reserve in Dubai has something buried in it: DEWA cables, Etisalat and du ducts, water mains, irrigation, district cooling. Service protection is the discipline of proving where those services are before a machine goes near them, and physically protecting them while the works proceed.",
		body: ["We scan and trace the route, open trial pits to expose and confirm depths and alignments, and record what is actually there against what the drawings claimed — the two frequently differ. Where services are exposed or at risk, they are physically protected: concrete surround, sleeving, protection slabs, or supports and cradles where a service is spanning an open excavation.", "The works are carried out to RTA and utility-owner requirements, with the relevant NOCs in place, and everything disturbed inside the road reserve is reinstated to authority standard afterwards. Getting this wrong is expensive in a way that is out of all proportion to the works — a struck 11kV cable or a severed fibre route costs far more than the protection would have."],
		scope: [
			"Service scanning, tracing and route marking before excavation",
			"Trial pits to expose and confirm depth, alignment and condition",
			"Comparison of found services against record drawings, with reporting",
			"Concrete surround, sleeving and protection slabs to exposed services",
			"Supports and cradles for services spanning open excavations",
			"NOC coordination with DEWA, Etisalat, du, Empower and the RTA",
			"Reinstatement of the road reserve to authority standard"
		],
		specs: [
			["Authority", "RTA, with utility-owner NOCs from DEWA, Etisalat, du, Empower and others as applicable"],
			["Typical use", "Works in the road reserve, utility crossings, entry-exit construction, trenching near live services"],
			["Deliverables", "Trial pit records, service location report, protection details, NOCs, reinstatement documentation"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "Do you scan for services before excavating?",
				a: "Always, and then we prove the scan with trial pits. Record drawings in an established road corridor are a starting point, not evidence — the depth or alignment on the drawing is frequently not what is in the ground."
			},
			{
				q: "Who obtains the NOCs from the utility owners?",
				a: "We do. NOC coordination with DEWA, Etisalat, du, Empower and the RTA is part of the package, along with the drawings and method statements each of them wants to see."
			},
			{
				q: "What happens if you find a service that is not on the drawings?",
				a: "Work stops in that area, the service is exposed and identified, the owner is notified and the protection or diversion is agreed before excavation continues. It is recorded and reported rather than worked around quietly."
			}
		]
	},
	"row-permits": {
		img: "/images/services/row-permits.jpg",
		h1: "ROW Permits in Dubai",
		lead: "Right-of-way permit applications for works within road reserves and public land — drawings, NOCs and compliance to completion.",
		intro: "A ROW permit is what makes work inside a road reserve or on public land lawful. It is also the item most likely to sit on a programme as a single line with no duration against it, until the day someone discovers the works cannot start.",
		body: ["We prepare the full application: layout and section drawings, method statements, traffic arrangements, the stakeholder NOCs the authority requires, and the supporting documents that stop the submission being returned. Comments are answered by the same team that drew the package, which is usually the difference between a resubmission cycle of days and one of weeks.", "The permit is only half the job. Conditions attached to it — working hours, protection measures, reinstatement standards, notification requirements — have to be complied with for the permit to stay valid through to completion, and we manage that on site as well as on paper."],
		scope: [
			"Assessment of which permits and NOCs a scope actually requires",
			"Layout, section and traffic arrangement drawings for submission",
			"Method statements and supporting documentation",
			"Stakeholder NOC collection from utility owners and authorities",
			"Submission, comment response and follow-through to permit issue",
			"Compliance with permit conditions during the works",
			"Reinstatement to authority standard and permit closeout"
		],
		specs: [
			["Authority", "RTA and Dubai Municipality, with utility-owner and stakeholder NOCs as applicable"],
			["Typical use", "Works in road reserves, utility crossings and shifting, service protection, entry-exit works, temporary installations"],
			["Deliverables", "Submitted drawing package, collected NOCs, issued ROW permit, compliance and closeout records"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "How long does a ROW permit take in Dubai?",
				a: "It depends on the location, the extent of the works and how many stakeholder NOCs are involved. The controllable part is submission quality — a complete, correct package avoids the resubmission cycles that cause most of the delay."
			},
			{
				q: "Can you apply for a ROW permit if we are doing the works ourselves?",
				a: "Yes. We handle permit and NOC packages as a standalone service, though on works inside the road reserve the authority will also want the contractor carrying them out to hold the relevant approval."
			},
			{
				q: "What happens if permit conditions are not met on site?",
				a: "The permit can be suspended and the works stopped. Conditions on working hours, protection and reinstatement are managed on site as part of the service, not just recorded at application stage."
			}
		]
	},
	"utilities-shifting": {
		img: "/images/services/utilities-shifting.jpg",
		h1: "Utility Shifting Contractor in Dubai",
		lead: "Diversion and relocation of services that clash with new works — ducts, cables, water and irrigation — coordinated with the utility owners.",
		intro: "Utility shifting is a coordination problem wearing a construction costume. The excavation and the new route are straightforward; the shutdown window, the owner approval and the sequence in which three different utilities can be moved without any of them losing supply are what set the programme.",
		body: ["We identify the clash, agree the new route with the owner, secure the NOCs and permits, and carry out the diversion — new duct or pipe route, protection, connection, commissioning support and abandonment or removal of the redundant run. Shutdown windows with DEWA, Etisalat, du and Empower are booked and worked to, because a missed window can put weeks into a programme.", "Where a clash can be designed out instead of moved, we say so. Shifting a service is always more expensive than adjusting a level or an alignment, and it is worth an hour of review before committing to a diversion that the project may not actually need."],
		scope: [
			"Clash identification against the design and verified service positions",
			"New route proposal and agreement with the utility owner",
			"NOC and permit applications for the diversion",
			"Excavation, ducting, bedding, protection and backfill on the new route",
			"Shutdown window coordination with DEWA, Etisalat, du and Empower",
			"Connection, commissioning support and testing with the owner",
			"Abandonment or removal of the redundant run and reinstatement"
		],
		specs: [
			["Authority", "RTA and Dubai Municipality, with owner approvals from DEWA, Etisalat, du, Empower and others"],
			["Typical use", "Service clashes with new roads and structures, plot development, entry-exit works, road widening"],
			["Deliverables", "Approved diversion route, NOCs and permits, constructed and commissioned diversion, as-built records"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "Who approves a utility diversion?",
				a: "The utility owner — DEWA, Etisalat, du, Empower or the relevant authority — together with the RTA or municipality for the works inside the road reserve. We assemble and run both approval tracks."
			},
			{
				q: "How are shutdowns handled?",
				a: "Shutdown windows are booked with the owner in advance and the works are planned to fit inside them, with the crew, plant and materials on site before the window opens. Missing a booked window is expensive in programme terms."
			},
			{
				q: "Can a clash be avoided instead of diverting the service?",
				a: "Often, yes — a level adjustment or a small alignment change is usually far cheaper than a diversion. We check that first and tell you when shifting is genuinely the only option."
			}
		]
	},
	"noc-services": {
		img: "/images/services/noc-services.jpg",
		h1: "NOC Services in Dubai",
		lead: "Preparation and processing of No Objection Certificates across the authorities and utility owners a project touches.",
		intro: "NOCs are the quiet critical path. A project can be fully designed, funded and resourced and still be unable to start because one utility owner has not signed off a drawing that was submitted incomplete two months earlier.",
		body: ["We work out which NOCs a scope actually needs, assemble the drawing package each authority and owner wants to see, submit, answer comments and track the approvals through to issue. Different bodies want different things — a DEWA submission does not look like an RTA submission, and sending the wrong package is what generates the first rejection.", "The value is in knowing the sequence. Some NOCs depend on others being issued first, and submitting them in the wrong order guarantees a return. We run them in parallel where that is possible and in sequence where it is not, and give you a realistic view of the approval programme rather than an optimistic one."],
		scope: [
			"Assessment of which NOCs and approvals a scope requires",
			"Assembly of the drawing and document package for each body",
			"Submissions to RTA, Dubai Municipality, DEWA, Etisalat, du and Empower",
			"Submissions to DDA, Trakhees, Dubai South and free zone authorities as applicable",
			"Comment response, resubmission and approval tracking",
			"Sequencing of dependent approvals to avoid avoidable rejections",
			"Handover of the issued NOC set with the project documentation"
		],
		specs: [
			["Authority", "RTA, Dubai Municipality, DEWA, Etisalat, du, Empower, DDA, Trakhees, Dubai South and free zone authorities"],
			["Typical use", "Works in road reserves, utility crossings and diversions, entry-exit works, plot development, temporary installations"],
			["Deliverables", "Submitted packages, tracked approvals, issued NOC set, approval programme"],
			["Coverage", "Dubai"]
		],
		faqs: [
			{
				q: "Which NOCs will our project need?",
				a: "It depends on where the works sit and what they touch. Send us the location and scope and we will list the authorities and utility owners involved, in the order they need to be approached."
			},
			{
				q: "Can you obtain NOCs if another contractor is doing the works?",
				a: "Yes. NOC and permit processing is offered as a standalone service, although some approvals also require the executing contractor to hold the relevant authority approval."
			},
			{
				q: "Why do NOC submissions get rejected?",
				a: "Usually an incomplete package, a drawing in the wrong format for that body, or a submission made before a dependent approval was issued. All three are avoidable, and avoiding them is most of what this service is."
			}
		]
	}
};
//#endregion
//#region src/data/services.js
var emirates = [
	{
		slug: "dubai",
		name: "Dubai",
		authority: "RTA and Dubai Municipality",
		context: "Dubai runs the tightest permitting regime in the country. We are an RTA-approved contractor and work daily against RTA, Dubai Municipality, DDA, Trakhees and Dubai South requirements — which means approvals, NOCs and traffic diversions are handled in-house rather than sub-let.",
		areas: "Business Bay, Al Quoz, Jebel Ali, Dubai South, Dubai Investment Park, Nad Al Sheba, Al Barsha and the wider emirate"
	},
	{
		slug: "abu-dhabi",
		name: "Abu Dhabi",
		authority: "the Department of Municipalities and Transport (DMT)",
		context: "Abu Dhabi projects run to DMT and Abu Dhabi City Municipality specifications, with their own material approvals and testing regime. Our teams mobilise from Dubai with plant, operators and QA documentation set up for Abu Dhabi standards from day one.",
		areas: "Mussafah, Khalifa Industrial Zone (KIZAD), Al Ain Road, Yas Island, Al Reem and the Western Region"
	},
	{
		slug: "sharjah",
		name: "Sharjah",
		authority: "Sharjah Roads and Transport Authority (SRTA) and Sharjah Municipality",
		context: "Sharjah works are delivered under SRTA and Sharjah Municipality approvals. Industrial estates and new residential districts here need fast, well-documented earthworks and road packages — with dust and haulage controls that satisfy municipal inspection.",
		areas: "Industrial Areas 1–18, Al Sajaa, Muwaileh, Al Zubair, University City and Kalba"
	},
	{
		slug: "ajman",
		name: "Ajman",
		authority: "Ajman Municipality and Planning Department",
		context: "Ajman combines fast-moving residential development with established industrial zones. We deliver compact, well-sequenced earthworks and road packages under Ajman Municipality approvals, sized for plots where access and storage are limited.",
		areas: "Al Jurf Industrial, Ajman Industrial Area, Al Zorah, Masfout and Manama"
	},
	{
		slug: "ras-al-khaimah",
		name: "Ras Al Khaimah",
		authority: "RAK Municipality and the Public Works Department",
		context: "RAK ground is rock as often as it is sand. Our rock breakers, high-reach machines and quarry-experienced operators handle the mountain and hard-strata work that standard excavation fleets stall on, under RAK Municipality approvals.",
		areas: "Al Ghail, Al Hamra, RAK Industrial Zones, Digdaga, Khuzam and the Al Jazeera corridor"
	},
	{
		slug: "fujairah",
		name: "Fujairah",
		authority: "Fujairah Municipality",
		context: "We have delivered road and asphalt packages on the east coast since 2021, including works for Fujairah Cement Industry at Dibba. Mountain terrain, port traffic and long haulage distances are planned into the programme rather than discovered on site.",
		areas: "Dibba, Masafi, Fujairah Port and Free Zone, Qidfa and the Kalba road corridor"
	},
	{
		slug: "umm-al-quwain",
		name: "Umm Al Quwain",
		authority: "Umm Al Quwain Municipality",
		context: "Umm Al Quwain projects are typically greenfield: raw plots that need clearing, filling and levelling before anything can be set out. We bring the full plant train in one mobilisation so small and mid-size sites are not paying for repeat set-ups.",
		areas: "UAQ Industrial Area, Al Salamah, Falaj Al Mualla and the Emirates Road corridor"
	}
];
var serviceCategories = [
	{
		slug: "earth-works",
		name: "Earth Works",
		coverage: "all",
		tagline: "Ground moved, shaped and compacted to specification.",
		img: "/images/svc-earth-works.jpg",
		intro: "Everything that happens before a structure or a road can be built: cutting, filling, levelling and compacting raw ground into a tested, build-ready platform. We own the fleet — excavators, dozers, loaders, graders, rollers and rock breakers — so programme is set by the works, not by hire availability.",
		services: [
			{
				slug: "excavation",
				name: "Excavation",
				keyword: "excavation contractor",
				text: "Bulk and detailed excavation for basements, foundations, services and infrastructure corridors — from open cut in sand to hard strata broken out with hydraulic breakers. Batters, benching and shoring are planned to the geotechnical report, and arisings are hauled and disposed of under permit."
			},
			{
				slug: "back-filling",
				name: "Back Filling",
				keyword: "backfilling contractor",
				text: "Structural and service backfill placed in controlled layers with approved material, watered and compacted to the specified density. Trench and basement surrounds are the classic source of settlement later — we test each lift rather than filling to the top and hoping."
			},
			{
				slug: "cut-and-fill",
				name: "Cut & Fill",
				keyword: "cut and fill contractor",
				text: "Balanced cut-and-fill operations that bring a site to design levels while keeping material on site wherever it is suitable. Survey-controlled with machine guidance, so haulage, import and disposal costs are cut without losing the design profile."
			},
			{
				slug: "leveling",
				name: "Leveling & Grading",
				keyword: "land leveling contractor",
				text: "Grading and fine levelling to design elevations and falls, whether that is a formation level for a road, a slab platform, a yard or a laydown area. Graders and GPS-guided blades hold tolerance across large areas."
			},
			{
				slug: "compaction",
				name: "Compaction",
				keyword: "compaction works contractor",
				text: "Layer-by-layer compaction with the right roller for the material — vibratory smooth drum, padfoot or plate in confined areas — supported by field density testing and compaction certificates that satisfy consultant and authority sign-off."
			}
		]
	},
	{
		slug: "road-works",
		name: "Road Works",
		coverage: "all",
		tagline: "Access roads, asphalt and everything that carries traffic.",
		img: "/images/svc-road-works.jpg",
		intro: "Full road packages from formation to final surface: sub-base and road base, asphalt binder and wearing courses, interlock, kerbs, parking and markings. As an RTA-approved road contractor we build to authority specification, with material approvals and testing documented as we go.",
		services: [
			{
				slug: "access-roads",
				name: "Access Roads",
				keyword: "access roads contractor",
				text: "Temporary and permanent access roads into plots, sites, plants and remote facilities — formation, sub-base, road base and surfacing, sized for the loads that will actually use them. Built early so heavy deliveries are not stuck at the boundary."
			},
			{
				slug: "road-base-laying",
				name: "Road Base Laying",
				keyword: "road base laying contractor",
				text: "Supply, spreading, watering and compaction of aggregate sub-base and road base to specified thickness and density. Levels are surveyed and layers are tested before anything is paved over — the layer that decides whether a road lasts."
			},
			{
				slug: "asphalt-works",
				name: "Asphalt Works",
				keyword: "asphalt contractor",
				text: "Binder and wearing course asphalt laid by paver to specified thickness, temperature and joint detail, with approved mixes from certified plants. Includes tack coat, prime coat, milling of existing surfaces and rolling to the required density."
			},
			{
				slug: "road-maintenance",
				name: "Road Maintenance",
				keyword: "road maintenance contractor",
				text: "Planned and reactive maintenance for internal roads, industrial estates and community networks: resurfacing, crack sealing, edge repair, drainage clearing and reinstatement — programmed to keep the network open while work proceeds."
			},
			{
				slug: "asphalt-patch-works",
				name: "Asphalt Patch Works",
				keyword: "asphalt patch repair contractor",
				hideOnHome: true,
				text: "Saw-cut, excavate, reinstate and compact — patch repairs done properly so the joint does not fail in the first season. Ideal after utility crossings, trench reinstatement, or pothole and settlement repair across car parks and estate roads."
			},
			{
				slug: "parkings",
				name: "Car Parks & Parking Areas",
				keyword: "car park construction contractor",
				hideOnHome: true,
				text: "Complete parking areas from sub-grade to line marking: base, surfacing in asphalt or interlock, kerbing, drainage falls, wheel stops, bay marking and signage — built to authority layout standards and handed over ready to use."
			},
			{
				slug: "heavy-duty-interlock-paving",
				name: "Heavy Duty Interlock Paving",
				keyword: "interlock paving contractor",
				text: "Heavy-duty interlock and paver block for yards, container areas, service roads and hardstandings that see loaded trucks and forklifts. Correct bedding sand, edge restraint and block thickness — the difference between a yard that holds and one that ruts."
			},
			{
				slug: "kerbstones",
				name: "Kerbstones",
				keyword: "kerbstone installation contractor",
				hideOnHome: true,
				text: "Supply and installation of kerbstones and channels to line and level on concrete haunching — road kerbs, parking kerbs, radius units and drop kerbs at crossings and entrances, finished to authority profile."
			},
			{
				slug: "road-markings",
				name: "Road Markings",
				keyword: "road marking contractor",
				hideOnHome: true,
				text: "Thermoplastic and cold-paint road markings: lane lines, hatching, arrows, crossings, parking bays, numbering and rumble strips — applied to authority standards with reflective beading where specified."
			}
		]
	},
	{
		slug: "traffic-management",
		name: "Traffic Management",
		coverage: ["dubai"],
		tagline: "Permits, diversions and safe works within live traffic.",
		img: "/images/svc-traffic-management.jpg",
		intro: "Working inside a live road corridor is a permitting exercise as much as a construction one. We prepare traffic diversion drawings, secure RTA permits and install and maintain compliant traffic management so your works proceed without shutting the network — or attracting a stop-work notice.",
		services: [
			{
				slug: "lane-closure-permits",
				name: "Lane Closure Permits",
				keyword: "lane closure permit",
				text: "Application, drawings and approval for single and multi-lane closures on RTA roads, including night-work windows, tapers, signage schedules and the safety measures the permit conditions require. We handle submission through to permit issue."
			},
			{
				slug: "road-closure-permits",
				name: "Road Closure Permits",
				keyword: "road closure permit",
				text: "Full road and carriageway closures with approved diversion routes: traffic impact justification, diversion drawings, staged programmes and coordination with RTA, Police and affected stakeholders before and during the closure."
			},
			{
				slug: "traffic-management",
				name: "Traffic Management Services",
				keyword: "traffic management contractor",
				text: "Supply, installation, maintenance and removal of traffic management on site: cones, barriers, delineators, warning and directional signage, flashing arrow boards, TMA (truck-mounted attenuator) units and trained flagmen, inspected and maintained for the life of the works."
			}
		]
	},
	{
		slug: "utilities",
		name: "Utilities",
		coverage: ["dubai"],
		tagline: "Entry-exit works, service protection and the approvals behind them.",
		img: "/images/svc-utilities.jpg",
		intro: "The works that connect a plot to the network and keep existing services safe while you build. We are RTA-approved for entry and exit works and handle the permit chain — ROW, NOCs, service protection and utility shifting — so approvals do not become the critical path on your programme.",
		services: [
			{
				slug: "rta-approved-entry-exit-works",
				name: "RTA Approved Entry & Exit Works",
				keyword: "RTA approved entry exit contractor",
				text: "Design-compliant construction of plot entrances and exits onto RTA roads: drop kerbs, aprons, transitions, drainage continuity, marking and signage — executed by an RTA-approved contractor so the works are accepted and the access is legally usable."
			},
			{
				slug: "rta-service-protection",
				name: "RTA Service Protection",
				keyword: "RTA service protection works",
				text: "Protection of existing utilities inside the road reserve during construction: trial pits and service scanning, concrete or sleeve protection, slabbing, supports for exposed services and reinstatement — carried out to RTA and utility-owner requirements."
			},
			{
				slug: "row-permits",
				name: "ROW Permits",
				keyword: "ROW permit Dubai",
				text: "Right-of-way permit applications for works within road reserves and public land: drawings, method statements, stakeholder NOCs and follow-through to issue, plus compliance during the works so the permit stays valid to completion."
			},
			{
				slug: "utilities-shifting",
				name: "Utilities Shifting",
				keyword: "utility shifting contractor",
				text: "Diversion and relocation of services that clash with new works — ducts, cables, water and irrigation lines — coordinated with DEWA, Etisalat, du, Empower and the relevant authority, including shutdown windows, protection and reinstatement."
			},
			{
				slug: "noc-services",
				name: "NOC Services",
				keyword: "NOC services Dubai",
				text: "Preparation and processing of No Objection Certificates across the authorities and utility owners a project touches. We assemble the drawing package, submit, answer comments and track approvals to issue so construction can start on time."
			}
		]
	}
].map((c) => ({
	...c,
	services: c.services.map((s) => ({
		...s,
		...serviceContent[s.slug] || {}
	}))
}));
var categoryBySlug = Object.fromEntries(serviceCategories.map((c) => [c.slug, c]));
var emirateBySlug = Object.fromEntries(emirates.map((e) => [e.slug, e]));
var allServices = serviceCategories.flatMap((c) => c.services.map((s) => ({
	...s,
	category: c,
	path: `/services/${c.slug}/${s.slug}`
})));
Object.fromEntries(allServices.map((s) => [s.slug, s]));
function emiratesFor(category) {
	return category.coverage === "all" ? emirates : emirates.filter((e) => category.coverage.includes(e.slug));
}
function resolveServiceSegment(category, slug) {
	if (emirateBySlug[slug] && emiratesFor(category).some((e) => e.slug === slug)) return {
		kind: "emirate",
		emirate: emirateBySlug[slug]
	};
	const service = category.services.find((s) => s.slug === slug);
	return service ? {
		kind: "service",
		service
	} : { kind: "none" };
}
function allServiceRoutes() {
	const routes = ["/services"];
	for (const c of serviceCategories) {
		routes.push(`/services/${c.slug}`);
		for (const s of c.services) routes.push(`/services/${c.slug}/${s.slug}`);
		for (const e of emiratesFor(c)) routes.push(`/services/${c.slug}/${e.slug}`);
	}
	return routes;
}
//#endregion
//#region src/components/Nav.jsx
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [open, setOpen] = useState(false);
	const location = useLocation();
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		setOpen(false);
		window.scrollTo(0, 0);
	}, [location.pathname]);
	useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	const path = location.pathname.replace(/\/+$/, "") || "/";
	const known = [
		"/",
		"/about",
		"/services",
		"/projects",
		"/contact"
	].includes(path) || /^\/services\/[a-z-]+(\/[a-z-]+)?$/.test(path);
	const solid = scrolled || hovered || open || !known;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: `nav ${solid ? "solid" : "overlay"}`,
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap nav-inner",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "brand",
					"aria-label": "Earth Movers International — home",
					children: /* @__PURE__ */ jsx(Logo, { variant: solid ? "dark" : "light" })
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "nav-links",
					"aria-label": "Primary",
					children: [links.map((l) => l.to === "/services" ? /* @__PURE__ */ jsxs("div", {
						className: "nav-item",
						children: [/* @__PURE__ */ jsx(NavLink, {
							to: l.to,
							className: ({ isActive }) => `nav-link${isActive ? " active" : ""}`,
							children: l.label
						}), /* @__PURE__ */ jsx("div", {
							className: "nav-menu",
							children: serviceCategories.map((c) => /* @__PURE__ */ jsxs(Link, {
								to: `/services/${c.slug}`,
								children: [/* @__PURE__ */ jsx("strong", { children: c.name }), /* @__PURE__ */ jsxs("span", { children: [
									c.services.slice(0, 3).map((x) => x.name).join(" · "),
									" —",
									" ",
									c.coverage === "all" ? "all 7 emirates" : "Dubai"
								] })]
							}, c.slug))
						})]
					}, l.to) : /* @__PURE__ */ jsx(NavLink, {
						to: l.to,
						end: l.to === "/",
						className: ({ isActive }) => `nav-link${isActive ? " active" : ""}`,
						children: l.label
					}, l.to)), /* @__PURE__ */ jsx(Link, {
						to: "/contact",
						className: "btn btn-solid nav-cta",
						children: "Get a Quote"
					})]
				}),
				/* @__PURE__ */ jsxs("button", {
					className: `nav-burger${open ? " open" : ""}`,
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen(!open),
					children: [
						/* @__PURE__ */ jsx("span", {}),
						/* @__PURE__ */ jsx("span", {}),
						/* @__PURE__ */ jsx("span", {})
					]
				})
			]
		})
	}), /* @__PURE__ */ jsxs("div", {
		className: `mobile-menu${open ? " open" : ""}`,
		children: [links.map((l) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
			to: l.to,
			onClick: () => setOpen(false),
			children: l.label
		}), l.to === "/services" && /* @__PURE__ */ jsx("div", {
			className: "sub-links",
			children: serviceCategories.map((c) => /* @__PURE__ */ jsx(Link, {
				to: `/services/${c.slug}`,
				onClick: () => setOpen(false),
				children: c.name
			}, c.slug))
		})] }, l.to)), /* @__PURE__ */ jsxs("div", {
			className: "mobile-menu-contact",
			children: [/* @__PURE__ */ jsx("a", {
				href: company.phoneHref,
				children: company.phone
			}), /* @__PURE__ */ jsx("a", {
				href: `mailto:${company.email}`,
				children: company.email
			})]
		})]
	})] });
}
//#endregion
//#region src/components/Footer.jsx
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsx("footer", {
		className: "footer",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "footer-grid",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "footer-brand",
						children: [
							/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "brand",
								"aria-label": "Earth Movers International — home",
								children: /* @__PURE__ */ jsx(Logo, { variant: "light" })
							}),
							/* @__PURE__ */ jsxs("p", { children: [
								"Founded in Montreal in ",
								company.founded,
								", in Dubai since ",
								company.inUAE,
								". An RTA-approved earthworks and road construction contractor serving infrastructure, commercial and industrial projects across the UAE."
							] }),
							/* @__PURE__ */ jsxs("div", {
								className: "footer-certs",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "footer-cert",
										children: "RTA Approved"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "footer-cert",
										children: "Dubai Municipality"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "footer-cert",
										children: "Since 1990"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ jsx("h4", { children: "Company" }),
							/* @__PURE__ */ jsx(Link, {
								to: "/about",
								children: "About"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/services",
								children: "Services"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/projects",
								children: "Projects"
							}),
							/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								children: "Contact"
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [/* @__PURE__ */ jsx("h4", { children: "Services" }), serviceCategories.map((c) => /* @__PURE__ */ jsx(Link, {
							to: `/services/${c.slug}`,
							children: c.name
						}, c.slug))]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [/* @__PURE__ */ jsx("h4", { children: "Areas We Serve" }), emirates.map((e) => /* @__PURE__ */ jsx(Link, {
							to: `/services/road-works/${e.slug}`,
							children: e.name
						}, e.slug))]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ jsx("h4", { children: "Contact" }),
							/* @__PURE__ */ jsx("a", {
								href: company.phoneHref,
								children: company.phone
							}),
							/* @__PURE__ */ jsx("a", {
								href: `mailto:${company.email}`,
								children: company.email
							}),
							company.address.map((line) => /* @__PURE__ */ jsx("span", { children: line }, line)),
							/* @__PURE__ */ jsxs("a", {
								className: "footer-map",
								href: company.mapsLink,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `${company.legalName} — open in Google Maps`,
								children: [/* @__PURE__ */ jsx("iframe", {
									title: `${company.legalName} — location`,
									src: `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`,
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade",
									tabIndex: -1
								}), /* @__PURE__ */ jsx("span", {
									className: "footer-map-cta",
									children: "Get directions"
								})]
							}),
							/* @__PURE__ */ jsxs("span", {
								style: { marginTop: "0.4rem" },
								children: [
									/* @__PURE__ */ jsx("a", {
										href: company.social.facebook,
										target: "_blank",
										rel: "noreferrer",
										children: "Facebook"
									}),
									"  ·  ",
									/* @__PURE__ */ jsx("a", {
										href: company.social.linkedin,
										target: "_blank",
										rel: "noreferrer",
										children: "LinkedIn"
									})
								]
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "footer-bottom",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					"© ",
					year,
					" ",
					company.legalName,
					". All rights reserved."
				] }), /* @__PURE__ */ jsxs("span", { children: [company.coordinates, " — Dubai, UAE"] })]
			})]
		})
	});
}
//#endregion
//#region src/components/Reveal.jsx
function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				el.classList.add("in");
				io.disconnect();
			}
		}, {
			threshold: .12,
			rootMargin: "0px 0px -6% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ jsx(Tag, {
		ref,
		className: `reveal ${className}`,
		style: delay ? { "--reveal-delay": `${delay}ms` } : void 0,
		...rest,
		children
	});
}
//#endregion
//#region src/components/Counter.jsx
function Counter({ value, duration = 1400 }) {
	const ref = useRef(null);
	const [display, setDisplay] = useState(0);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		let raf;
		const io = new IntersectionObserver(([entry]) => {
			if (!entry.isIntersecting) return;
			io.disconnect();
			const start = performance.now();
			const tick = (now) => {
				const t = Math.min(1, (now - start) / duration);
				const eased = 1 - Math.pow(1 - t, 3);
				setDisplay(Math.round(eased * value));
				if (t < 1) raf = requestAnimationFrame(tick);
			};
			raf = requestAnimationFrame(tick);
		}, {
			threshold: .2,
			rootMargin: "0px 0px -5% 0px"
		});
		io.observe(el);
		return () => {
			io.disconnect();
			cancelAnimationFrame(raf);
		};
	}, [value, duration]);
	return /* @__PURE__ */ jsx("span", {
		ref,
		children: display
	});
}
//#endregion
//#region src/components/Marquee.jsx
function Marquee({ label }) {
	const track = /* @__PURE__ */ jsx("div", {
		className: "marquee-track",
		"aria-hidden": "true",
		children: [...clients, ...clients].map((c, i) => /* @__PURE__ */ jsx("span", {
			className: "marquee-item",
			children: c
		}, i))
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "marquee-band",
		role: "presentation",
		children: [label && /* @__PURE__ */ jsx("div", {
			className: "marquee-label",
			children: label
		}), /* @__PURE__ */ jsxs("div", {
			className: "marquee",
			children: [track, track]
		})]
	});
}
//#endregion
//#region src/components/CTA.jsx
function CTA({ title = "Let’s break ground.", text }) {
	return /* @__PURE__ */ jsx("section", {
		className: "cta-panel",
		children: /* @__PURE__ */ jsxs("div", {
			className: "cta-inner",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: "Start a project"
				}) }),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ jsx("h2", {
						className: "display-lg",
						children: title
					})
				}),
				text && /* @__PURE__ */ jsx(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ jsx("p", {
						className: "lead",
						children: text
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ jsxs("div", {
						className: "hero-actions",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/contact",
							className: "btn btn-ink",
							children: ["Request a quote ", /* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })]
						}), /* @__PURE__ */ jsx("a", {
							href: company.phoneHref,
							className: "btn btn-ghost",
							children: company.phone
						})]
					})
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 260,
					children: /* @__PURE__ */ jsxs("div", {
						className: "cta-contact-row",
						children: [/* @__PURE__ */ jsx("a", {
							href: `mailto:${company.email}`,
							children: company.email
						}), /* @__PURE__ */ jsx("span", { children: company.address.join(", ") })]
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/Photo.jsx
function Photo({ src, alt = "", className = "", fallback = null, style }) {
	const [failed, setFailed] = useState(false);
	if (!src || failed) return fallback;
	return /* @__PURE__ */ jsx("img", {
		src,
		alt,
		className,
		style,
		loading: "lazy",
		onError: () => setFailed(true)
	});
}
//#endregion
//#region src/components/Art.jsx
function FleetScene() {
	return /* @__PURE__ */ jsxs("svg", {
		viewBox: "0 0 640 360",
		className: "scene-static",
		"aria-hidden": "true",
		style: {
			width: "100%",
			height: "auto"
		},
		children: [
			/* @__PURE__ */ jsx("rect", {
				width: "640",
				height: "360",
				fill: "#211e16"
			}),
			/* @__PURE__ */ jsxs("g", {
				stroke: "#f4f1ea",
				strokeOpacity: "0.08",
				fill: "none",
				strokeWidth: "1.5",
				children: [/* @__PURE__ */ jsx("path", { d: "M-20 90 C 140 60, 300 130, 460 90 S 640 60, 700 100" }), /* @__PURE__ */ jsx("path", { d: "M-20 140 C 140 110, 300 180, 460 140 S 640 110, 700 150" })]
			}),
			/* @__PURE__ */ jsx("rect", {
				y: "276",
				width: "640",
				height: "84",
				fill: "#2a261b"
			}),
			/* @__PURE__ */ jsx("path", {
				d: "M0 276 h640",
				stroke: "#f4f1ea",
				strokeOpacity: "0.16"
			}),
			/* @__PURE__ */ jsxs("g", {
				transform: "translate(70 176)",
				children: [
					/* @__PURE__ */ jsx("rect", {
						x: "20",
						y: "64",
						width: "120",
						height: "30",
						rx: "15",
						fill: "#f4f1ea"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "27",
						y: "71",
						width: "106",
						height: "16",
						rx: "8",
						fill: "#211e16"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "30",
						y: "34",
						width: "86",
						height: "30",
						fill: "#d9651c"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "42",
						y: "10",
						width: "42",
						height: "24",
						fill: "#d9651c"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "48",
						y: "16",
						width: "24",
						height: "14",
						fill: "#211e16"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M140 40 L168 40 L168 94 L156 94 Z",
						fill: "#f4f1ea"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M116 52 L140 44",
						stroke: "#b04e10",
						strokeWidth: "6"
					})
				]
			}),
			/* @__PURE__ */ jsxs("g", {
				transform: "translate(330 160)",
				children: [
					/* @__PURE__ */ jsx("path", {
						d: "M10 66 L26 26 L150 26 L150 84 L10 84 Z",
						fill: "#d9651c"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M20 62 L32 34 L142 34",
						fill: "none",
						stroke: "#211e16",
						strokeWidth: "4"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "150",
						y: "48",
						width: "56",
						height: "36",
						fill: "#f4f1ea"
					}),
					/* @__PURE__ */ jsx("rect", {
						x: "160",
						y: "56",
						width: "22",
						height: "16",
						fill: "#211e16"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "52",
						cy: "94",
						r: "16",
						fill: "#f4f1ea"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "52",
						cy: "94",
						r: "7",
						fill: "#211e16"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "108",
						cy: "94",
						r: "16",
						fill: "#f4f1ea"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "108",
						cy: "94",
						r: "7",
						fill: "#211e16"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "178",
						cy: "94",
						r: "16",
						fill: "#f4f1ea"
					}),
					/* @__PURE__ */ jsx("circle", {
						cx: "178",
						cy: "94",
						r: "7",
						fill: "#211e16"
					}),
					/* @__PURE__ */ jsx("path", {
						d: "M30 26 L60 8 L96 22 L126 6 L150 26 Z",
						fill: "#3a3423"
					})
				]
			}),
			/* @__PURE__ */ jsx("g", {
				stroke: "#f4f1ea",
				strokeOpacity: "0.3",
				children: /* @__PURE__ */ jsx("path", {
					d: "M60 322 h520",
					strokeDasharray: "2 10"
				})
			})
		]
	});
}
//#endregion
//#region src/pages/Home.jsx
function HeroSlider() {
	const [active, setActive] = useState(0);
	useEffect(() => {
		const id = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6e3);
		return () => clearInterval(id);
	}, []);
	const slide = heroSlides[active];
	return /* @__PURE__ */ jsxs("section", {
		className: "hero",
		"aria-label": "Earth Movers International highlights",
		children: [
			heroSlides.map((s, i) => /* @__PURE__ */ jsx("div", {
				className: `hero-slide${i === active ? " active" : ""}`,
				"aria-hidden": i !== active,
				children: /* @__PURE__ */ jsx("img", {
					src: s.img,
					alt: "",
					loading: i === 0 ? "eager" : "lazy"
				})
			}, s.img)),
			/* @__PURE__ */ jsxs("div", {
				className: "wrap hero-content",
				children: [
					/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: slide.eyebrow
					}) }),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ jsxs("h1", { children: [
							slide.titlePre,
							/* @__PURE__ */ jsx("em", { children: slide.titleGold }),
							slide.titlePost
						] })
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 170,
						children: /* @__PURE__ */ jsx("p", {
							className: "lead",
							children: slide.text
						})
					}),
					/* @__PURE__ */ jsx(Reveal, {
						delay: 250,
						children: /* @__PURE__ */ jsxs("div", {
							className: "hero-actions",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-solid",
								children: "Request a quote"
							}), /* @__PURE__ */ jsxs(Link, {
								to: "/projects",
								className: "text-link",
								style: { color: "#fff" },
								children: ["Explore our projects ", /* @__PURE__ */ jsx(Arrow, {})]
							})]
						})
					})
				]
			}, active),
			/* @__PURE__ */ jsx("div", {
				className: "hero-dots",
				role: "tablist",
				"aria-label": "Hero slides",
				children: heroSlides.map((s, i) => /* @__PURE__ */ jsx("button", {
					className: `hero-dot${i === active ? " active" : ""}`,
					"aria-label": `Slide ${i + 1}`,
					onClick: () => setActive(i)
				}, s.img))
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(HeroSlider, {}),
		/* @__PURE__ */ jsx("div", {
			className: "dark-band",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "stat-grid",
					children: stats.map((s, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i * 80,
						className: "stat-cell",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "stat-value",
								children: [/* @__PURE__ */ jsx(Counter, { value: s.value }), /* @__PURE__ */ jsx("em", { children: s.suffix })]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "stat-label",
								children: s.label
							}),
							/* @__PURE__ */ jsx("span", {
								className: "stat-note",
								children: s.note
							})
						]
					}, s.label))
				}), /* @__PURE__ */ jsxs("div", {
					className: "cert-row",
					children: [/* @__PURE__ */ jsx("span", { children: "Certifications & registrations" }), certifications.map((c) => /* @__PURE__ */ jsx("strong", { children: c.title }, c.title))]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "section-head",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Our Work"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: "The projects that tell our story."
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/projects",
							className: "text-link",
							children: ["All projects ", /* @__PURE__ */ jsx(Arrow, {})]
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "work-grid",
					children: projects.map((p, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i * 90,
						className: "work-card",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "work-card-media",
								children: /* @__PURE__ */ jsx(Photo, {
									src: images.projects[i],
									alt: `${p.client} — ${p.sector}`
								})
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "eyebrow",
								children: [
									p.sector,
									" · ",
									p.location
								]
							}),
							/* @__PURE__ */ jsx("h3", { children: p.client }),
							/* @__PURE__ */ jsx("p", { children: p.scope }),
							/* @__PURE__ */ jsxs("span", {
								className: "work-meta",
								children: [
									p.year,
									" — ",
									p.value
								]
							})
						]
					}, p.client))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsx("div", {
				className: "wrap",
				children: /* @__PURE__ */ jsxs("div", {
					className: "statement",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Our Promise"
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ jsxs("h2", { children: ["We move the earth, we build the roads, and we earn the trust of every client we serve — ", /* @__PURE__ */ jsx("em", { children: "every single day." })] })
					})]
				})
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "What We Do"
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: "Four disciplines. One accountable partner."
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx("p", {
									className: "lead",
									children: "Earth works, road works, traffic management and utilities — delivered with our own fleet, our own operators and RTA-approved processes."
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "cat-grid",
					children: serviceCategories.map((c, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 70,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${c.slug}`,
							className: "cat-tile",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "svc-tile-media",
									children: /* @__PURE__ */ jsx(Photo, {
										src: c.img,
										alt: c.name
									})
								}),
								/* @__PURE__ */ jsx("h3", { children: c.name }),
								/* @__PURE__ */ jsxs("ul", {
									className: "cat-tile-list",
									children: [c.services.filter((s) => !s.hideOnHome).map((s) => /* @__PURE__ */ jsx("li", { children: s.name }, s.slug)), c.services.some((s) => s.hideOnHome) && /* @__PURE__ */ jsx("li", {
										className: "cat-tile-more",
										children: `plus ${c.services.filter((s) => s.hideOnHome).length} services`
									})]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "cat-tile-foot",
									children: [/* @__PURE__ */ jsx("span", {
										className: "cat-tile-where",
										children: c.coverage === "all" ? "Available in all 7 emirates" : "Available in Dubai"
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-link",
										children: ["Explore ", /* @__PURE__ */ jsx(Arrow, {})]
									})]
								})
							]
						})
					}, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "on-dark section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap fleet-grid",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "fleet-copy",
					children: [
						/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "The Fleet"
						}) }),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: "One of the largest heavy-excavation fleets in Dubai."
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ jsx("p", {
								className: "lead",
								children: "Excavators, bulldozers, piling rigs and rock breakers — owned, maintained and operated by us. Your programme never waits on a machine."
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 220,
							children: /* @__PURE__ */ jsx("div", {
								className: "fleet-chips",
								children: fleet.map((f) => /* @__PURE__ */ jsx("span", {
									className: "chip",
									children: f
								}, f))
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 280,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-solid",
								children: "Rent equipment"
							})
						})
					]
				}), /* @__PURE__ */ jsxs(Reveal, {
					delay: 200,
					className: "fleet-art",
					children: [/* @__PURE__ */ jsx(Photo, {
						src: images.fleet,
						alt: "Wheel loader working sand stockpiles",
						fallback: /* @__PURE__ */ jsx(FleetScene, {})
					}), /* @__PURE__ */ jsxs("div", {
						className: "fleet-art-caption",
						children: [/* @__PURE__ */ jsx("span", { children: "Fleet operations — Dubai" }), /* @__PURE__ */ jsx("span", { children: "Operated · 24/7" })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx(Marquee, { label: "Trusted across the UAE" }),
		/* @__PURE__ */ jsx(CTA, { text: "Tell us about your site and scope — we’ll walk the ground with you and price the real work." })
	] });
}
//#endregion
//#region src/components/PageBanner.jsx
function PageBanner({ eyebrow, title, text, img }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "page-hero",
		children: [/* @__PURE__ */ jsx(Photo, {
			src: img,
			alt: "",
			className: "page-hero-bg"
		}), /* @__PURE__ */ jsxs("div", {
			className: "page-hero-inner",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: eyebrow
				}) }),
				/* @__PURE__ */ jsx(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ jsx("h1", {
						className: "display-xl",
						children: title
					})
				}),
				text && /* @__PURE__ */ jsx(Reveal, {
					delay: 160,
					children: /* @__PURE__ */ jsx("p", {
						className: "lead",
						children: text
					})
				})
			]
		})]
	});
}
//#endregion
//#region src/pages/About.jsx
function About() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: "About Us",
			title: "Three decades of moving ground.",
			text: `From Montreal in ${company.founded} to Dubai since ${company.inUAE} — a contractor built around heavy machines, experienced hands and ground that gets handed over right.`,
			img: images.banners.about
		}),
		/* @__PURE__ */ jsx("div", {
			className: "dark-band",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "stat-grid",
					children: stats.map((s, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i * 80,
						className: "stat-cell",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "stat-value",
								children: [/* @__PURE__ */ jsx(Counter, { value: s.value }), /* @__PURE__ */ jsx("em", { children: s.suffix })]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "stat-label",
								children: s.label
							}),
							/* @__PURE__ */ jsx("span", {
								className: "stat-note",
								children: s.note
							})
						]
					}, s.label))
				}), /* @__PURE__ */ jsxs("div", {
					className: "cert-row",
					children: [/* @__PURE__ */ jsx("span", { children: "Certifications & registrations" }), certifications.map((c) => /* @__PURE__ */ jsx("strong", { children: c.title }, c.title))]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap split",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "split-sticky",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "The story"
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsx("h2", {
							className: "display-lg",
							children: "Who we are"
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "split-body",
					children: [
						/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
							className: "lead",
							style: { color: "var(--ink)" },
							children: "Earth Movers International is a dynamic and preferred solution provider in the fields of civil and heavy construction, engineering, oil & gas, recycling and demolition."
						}) }),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 90,
							children: /* @__PURE__ */ jsx("p", { children: "Our team was incorporated to help meet the challenges faced by the construction sector in the fields of earth works, heavy equipment, material supply, transportation and logistics. Today we support infrastructure, commercial and industrial projects across the UAE as a Dubai-based road construction and earthworks contractor." })
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ jsx("p", { children: "We maintain one of Dubai’s largest fleets of heavy excavation equipment — excavators, bulldozers, piling rigs, rock breakers and specialised machinery — so projects are completed quickly, effectively and safely. As an RTA-approved contractor, compliance is built into everything we deliver." })
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 200,
							children: /* @__PURE__ */ jsx(Photo, {
								src: images.about,
								alt: "Earth Movers International team and machinery at work",
								className: "about-photo"
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Milestones"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: "The road so far."
							})
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "timeline",
					children: timeline.map((t, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i * 70,
						className: "timeline-row",
						children: [/* @__PURE__ */ jsx("span", {
							className: "timeline-year",
							children: t.year
						}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", { children: t.title }), /* @__PURE__ */ jsx("p", { children: t.text })] })]
					}, t.year))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "on-dark section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap split",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "split-sticky",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Direction"
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsx("h2", {
							className: "display-lg",
							children: "Mission & vision"
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "split-body",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
						className: "lead",
						children: "Our vision is to make Earth Movers International a global brand in the field of earth works, heavy construction equipment and services."
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ jsx("p", { children: "Our mission is simpler still: deliver practical, build-ready ground — safely, on programme and to specification — so every client can build with confidence on what we hand over." })
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "section-head",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Values"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: "Ground rules."
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ jsxs(Link, {
							to: "/services",
							className: "btn btn-ghost",
							children: ["See our services ", /* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })]
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "values-grid",
					children: values.map((v, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i % 2 * 90,
						className: "value-card",
						children: [/* @__PURE__ */ jsx("h3", { children: v.title }), /* @__PURE__ */ jsx("p", { children: v.text })]
					}, v.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: "Build on solid ground.",
			text: "Talk to the team that has been moving the earth since 1990."
		})
	] });
}
//#endregion
//#region src/pages/Services.jsx
function Services() {
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: "Services",
			title: "Earth works, road works, traffic management and utilities.",
			text: "Four disciplines, one accountable contractor — delivered with our own fleet, our own operators and RTA-approved processes across the UAE.",
			img: images.banners.services
		}),
		serviceCategories.map((category, gi) => {
			const locations = emiratesFor(category);
			const where = category.coverage === "all" ? "all seven emirates" : "Dubai";
			return /* @__PURE__ */ jsx("section", {
				id: category.slug,
				className: `section${gi % 2 === 1 ? " section-paper hairline-top" : ""}`,
				children: /* @__PURE__ */ jsxs("div", {
					className: "wrap",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "section-head",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "kicker",
							children: [
								/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
									className: "eyebrow",
									children: `0${gi + 1} — ${category.name}`
								}) }),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 80,
									children: /* @__PURE__ */ jsx("h2", {
										className: "display-lg",
										children: category.tagline
									})
								}),
								/* @__PURE__ */ jsx(Reveal, {
									delay: 140,
									children: /* @__PURE__ */ jsx("p", {
										className: "lead",
										children: category.intro
									})
								})
							]
						}), /* @__PURE__ */ jsx(Reveal, {
							delay: 180,
							children: /* @__PURE__ */ jsxs(Link, {
								to: `/services/${category.slug}`,
								className: "btn btn-ghost",
								children: [
									category.name,
									" ",
									/* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })
								]
							})
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "cat-split",
						children: [/* @__PURE__ */ jsx("div", {
							className: "cat-media",
							children: /* @__PURE__ */ jsx(Photo, {
								src: category.img,
								alt: category.name
							})
						}), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", {
								className: "block-label",
								children: "Services"
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "tag-list tag-list-links",
								children: category.services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: `/services/${category.slug}/${s.slug}`,
									children: s.name
								}) }, s.slug))
							}),
							/* @__PURE__ */ jsxs("h3", {
								className: "block-label",
								style: { marginTop: "2rem" },
								children: ["Available in ", where]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "loc-links",
								children: locations.map((e) => /* @__PURE__ */ jsx(Link, {
									to: `/services/${category.slug}/${e.slug}`,
									children: e.name
								}, e.slug))
							})
						] })]
					})]
				})
			}, category.slug);
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: "Scope in hand? Send it over.",
			text: "Share your drawings or bill of quantities and we’ll come back with a clear, realistic price."
		})
	] });
}
//#endregion
//#region src/components/Breadcrumbs.jsx
function Breadcrumbs({ items }) {
	return /* @__PURE__ */ jsx("nav", {
		className: "crumbs",
		"aria-label": "Breadcrumb",
		children: items.map((it, i) => /* @__PURE__ */ jsxs("span", { children: [i > 0 && /* @__PURE__ */ jsx("span", {
			className: "crumb-sep",
			"aria-hidden": "true",
			children: "/"
		}), i === items.length - 1 ? /* @__PURE__ */ jsx("span", {
			"aria-current": "page",
			children: it.name
		}) : /* @__PURE__ */ jsx(Link, {
			to: it.path,
			children: it.name
		})] }, it.path))
	});
}
//#endregion
//#region src/pages/NotFound.jsx
function NotFound() {
	return /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsxs("section", {
		className: "wrap section",
		style: {
			marginTop: "calc(var(--topbar-h) + var(--nav-h))",
			minHeight: "50vh",
			display: "grid",
			gap: "1.2rem",
			alignContent: "center",
			justifyItems: "start"
		},
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "eyebrow",
				children: "404"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "display-xl",
				children: "This ground hasn’t been broken yet."
			}),
			/* @__PURE__ */ jsx("p", {
				className: "lead",
				children: "The page you’re looking for doesn’t exist — but the rest of the site does."
			}),
			/* @__PURE__ */ jsxs(Link, {
				to: "/",
				className: "btn btn-ink",
				children: ["Back to home ", /* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })]
			})
		]
	}) });
}
//#endregion
//#region src/pages/ServiceCategory.jsx
function ServiceCategory() {
	const { category: slug } = useParams();
	const category = categoryBySlug[slug];
	if (!category) return /* @__PURE__ */ jsx(NotFound, {});
	const locations = emiratesFor(category);
	const others = serviceCategories.filter((c) => c.slug !== category.slug);
	const where = category.coverage === "all" ? "the UAE" : "Dubai";
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: "Services",
			title: `${category.name} Contractor in ${where}`,
			text: category.tagline,
			img: category.img
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ jsx(Breadcrumbs, { items: [
						{
							name: "Home",
							path: "/"
						},
						{
							name: "Services",
							path: "/services"
						},
						{
							name: category.name,
							path: `/services/${category.slug}`
						}
					] }),
					/* @__PURE__ */ jsxs("div", {
						className: "section-head",
						style: { marginTop: "2rem" },
						children: [/* @__PURE__ */ jsxs("div", {
							className: "kicker",
							children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Overview"
							}) }), /* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-md",
									children: category.intro
								})
							})]
						}), /* @__PURE__ */ jsx(Reveal, {
							delay: 140,
							children: /* @__PURE__ */ jsx(Link, {
								to: "/contact",
								className: "btn btn-solid",
								children: "Request a proposal"
							})
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "block-label",
						children: "What’s included"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "check-grid",
						children: category.services.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i % 2 * 60,
							children: /* @__PURE__ */ jsxs(Link, {
								to: `/services/${category.slug}/${s.slug}`,
								className: "check-item check-item-link",
								children: [/* @__PURE__ */ jsx(CheckCircle, { className: "check-ico" }), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", { children: s.name }),
									/* @__PURE__ */ jsx("p", { children: s.text }),
									/* @__PURE__ */ jsxs("span", {
										className: "text-link",
										children: [
											`${s.name} in detail`,
											" ",
											/* @__PURE__ */ jsx(Arrow, {})
										]
									})
								] })]
							})
						}, s.slug))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Where we work"
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: `${category.name} across ${where}.`
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx("p", {
									className: "lead",
									children: "Choose your emirate for local coverage, approving authority and the areas we operate in."
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-grid",
					children: locations.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 60,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${category.slug}/${e.slug}`,
							className: "loc-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-name",
									children: `${category.name} in ${e.name}`
								}),
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-meta",
									children: e.authority
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: ["View ", /* @__PURE__ */ jsx(Arrow, {})]
								})
							]
						})
					}, e.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Explore more"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: "Other services"
							})
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "svc-grid",
					children: others.map((c, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 3 * 70,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${c.slug}`,
							className: "svc-tile",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "svc-tile-media",
									children: /* @__PURE__ */ jsx(Photo, {
										src: c.img,
										alt: c.name
									})
								}),
								/* @__PURE__ */ jsx("h3", { children: c.name }),
								/* @__PURE__ */ jsx("p", { children: c.tagline }),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: ["Explore ", /* @__PURE__ */ jsx(Arrow, {})]
								})
							]
						})
					}, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: `Need ${category.name.toLowerCase()} priced?`,
			text: "Send your drawings or bill of quantities and we’ll come back with a clear, realistic price."
		})
	] });
}
//#endregion
//#region src/pages/ServiceDetail.jsx
function ServiceDetail({ category, service }) {
	const locations = emiratesFor(category);
	const where = category.coverage === "all" ? "the UAE" : "Dubai";
	const siblings = category.services.filter((s) => s.slug !== service.slug);
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: category.name,
			title: service.h1,
			text: service.lead,
			img: service.img
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx(Breadcrumbs, { items: [
					{
						name: "Home",
						path: "/"
					},
					{
						name: "Services",
						path: "/services"
					},
					{
						name: category.name,
						path: `/services/${category.slug}`
					},
					{
						name: service.name,
						path: `/services/${category.slug}/${service.slug}`
					}
				] }), /* @__PURE__ */ jsxs("div", {
					className: "split",
					style: { marginTop: "2.5rem" },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "split-sticky",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Overview"
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-md",
									children: `${service.name} in ${where}, delivered with our own fleet.`
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "btn btn-solid",
									children: "Request a quote"
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "split-body",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
							className: "lead",
							style: { color: "var(--ink)" },
							children: service.intro
						}) }), service.body.map((para, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: 80 + i * 60,
							children: /* @__PURE__ */ jsx("p", { children: para })
						}, i))]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "section-head",
						children: /* @__PURE__ */ jsxs("div", {
							className: "kicker",
							children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Scope"
							}) }), /* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: `What our ${service.name.toLowerCase()} package covers.`
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "check-grid",
						children: service.scope.map((item, i) => /* @__PURE__ */ jsxs(Reveal, {
							delay: i % 2 * 60,
							className: "check-item",
							children: [/* @__PURE__ */ jsx(CheckCircle, { className: "check-ico" }), /* @__PURE__ */ jsx("p", { children: item })]
						}, item))
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "block-label",
						style: { marginTop: "3rem" },
						children: "At a glance"
					}),
					/* @__PURE__ */ jsx("dl", {
						className: "spec-table",
						children: service.specs.map(([label, value]) => /* @__PURE__ */ jsxs("div", {
							className: "spec-row",
							children: [/* @__PURE__ */ jsx("dt", { children: label }), /* @__PURE__ */ jsx("dd", { children: value })]
						}, label))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Where we work"
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: `${service.name} across ${where}.`
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx("p", {
									className: "lead",
									children: `We deliver ${service.name.toLowerCase()} as part of our ${category.name.toLowerCase()} package. Choose your emirate for local coverage and the approving authority.`
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-grid",
					children: locations.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 60,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${category.slug}/${e.slug}`,
							className: "loc-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-name",
									children: `${service.name} in ${e.name}`
								}),
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-meta",
									children: e.authority
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: ["View ", /* @__PURE__ */ jsx(Arrow, {})]
								})
							]
						})
					}, e.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Common questions"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: `${service.name} — FAQs`
							})
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "faq-list",
					children: [service.faqs.map((f, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i * 60,
						className: "faq-item",
						children: [/* @__PURE__ */ jsx("h3", { children: f.q }), /* @__PURE__ */ jsx("p", { children: f.a })]
					}, f.q)), /* @__PURE__ */ jsxs(Reveal, {
						delay: service.faqs.length * 60,
						className: "faq-item",
						children: [/* @__PURE__ */ jsx("h3", { children: `How do I get a price for ${service.name.toLowerCase()}?` }), /* @__PURE__ */ jsxs("p", { children: [
							"Send drawings, a bill of quantities or a description of the scope to",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: `mailto:${company.email}`,
								children: company.email
							}),
							", or call",
							" ",
							/* @__PURE__ */ jsx("a", {
								href: company.phoneHref,
								children: company.phone
							}),
							". Where it helps, we walk the ground with you before pricing."
						] })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "section-head",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Related services"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: `Other ${category.name.toLowerCase()} services`
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${category.slug}`,
							className: "text-link",
							children: [
								"All ",
								category.name.toLowerCase(),
								" ",
								/* @__PURE__ */ jsx(Arrow, {})
							]
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-grid",
					children: siblings.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 60,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${category.slug}/${s.slug}`,
							className: "loc-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-name",
									children: s.name
								}),
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-meta",
									children: s.lead
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: ["View ", /* @__PURE__ */ jsx(Arrow, {})]
								})
							]
						})
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: `Need ${service.name.toLowerCase()} priced?`,
			text: "Send your drawings or bill of quantities and we’ll come back with a clear, realistic price."
		})
	] });
}
//#endregion
//#region src/pages/ServiceLocation.jsx
function ServiceLocation({ category, emirate }) {
	const siblings = emiratesFor(category).filter((e) => e.slug !== emirate.slug);
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: `${category.name} — ${emirate.name}`,
			title: `${category.name} Contractor in ${emirate.name}`,
			text: `${category.tagline} Delivered to ${emirate.authority} standards.`,
			img: category.img
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx(Breadcrumbs, { items: [
					{
						name: "Home",
						path: "/"
					},
					{
						name: "Services",
						path: "/services"
					},
					{
						name: category.name,
						path: `/services/${category.slug}`
					},
					{
						name: emirate.name,
						path: `/services/${category.slug}/${emirate.slug}`
					}
				] }), /* @__PURE__ */ jsxs("div", {
					className: "split",
					style: { marginTop: "2.5rem" },
					children: [/* @__PURE__ */ jsxs("div", {
						className: "split-sticky",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Local coverage"
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-md",
									children: `${category.name} in ${emirate.name}, delivered with our own fleet.`
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "btn btn-solid",
									children: "Request a quote"
								})
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "split-body",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
								className: "lead",
								style: { color: "var(--ink)" },
								children: emirate.context
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("p", { children: category.intro })
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsxs("p", { children: [
									/* @__PURE__ */ jsxs("strong", { children: [
										"Areas we cover in ",
										emirate.name,
										":"
									] }),
									" ",
									emirate.areas,
									". Whether the scope is a single plot or a multi-phase infrastructure package, the same plant, operators and supervision deliver it."
								] })
							})
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("span", {
							className: "eyebrow",
							children: [
								"Our ",
								category.name.toLowerCase(),
								" services"
							]
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: `What we deliver in ${emirate.name}.`
							})
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-services",
					children: category.services.map((s, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i % 3 * 60,
						className: "loc-service",
						children: [/* @__PURE__ */ jsx(CheckCircle, { className: "check-ico" }), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", { children: `${s.name} in ${emirate.name}` }),
							/* @__PURE__ */ jsx("p", { children: s.text }),
							/* @__PURE__ */ jsxs(Link, {
								to: `/services/${category.slug}/${s.slug}`,
								className: "text-link",
								children: [
									`More on ${s.name.toLowerCase()}`,
									" ",
									/* @__PURE__ */ jsx(Arrow, {})
								]
							})
						] })]
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Common questions"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: `${category.name} in ${emirate.name} — FAQs`
							})
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "faq-list",
					children: [
						/* @__PURE__ */ jsxs(Reveal, {
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: `Do you carry out ${category.name.toLowerCase()} in ${emirate.name}?` }), /* @__PURE__ */ jsxs("p", { children: [
								"Yes. We deliver ",
								category.name.toLowerCase(),
								" across ",
								emirate.name,
								", including",
								" ",
								emirate.areas,
								", working to ",
								emirate.authority,
								" standards with our own excavators, dozers, graders and rollers."
							] })]
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: 60,
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: `Are you an approved contractor for works in ${emirate.name}?` }), /* @__PURE__ */ jsxs("p", { children: [
								"We are an RTA-approved contractor and work to the requirements of",
								" ",
								emirate.authority,
								". Method statements, permits and material approvals are prepared and submitted by our own team."
							] })]
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: 120,
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: `How do I get a price for ${category.services[0].name.toLowerCase()} in ${emirate.name}?` }), /* @__PURE__ */ jsxs("p", { children: [
								"Send drawings, a bill of quantities or a description of the scope to",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: `mailto:${company.email}`,
									children: company.email
								}),
								", or call",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: company.phoneHref,
									children: company.phone
								}),
								". Where it helps, we walk the ground with you before pricing."
							] })]
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: 180,
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: `How quickly can you mobilise to ${emirate.name}?` }), /* @__PURE__ */ jsx("p", { children: "Because the fleet is owned rather than hired, mobilisation is a scheduling question rather than an availability one — typically within days of approval for standard packages." })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "section-head",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Other emirates"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: `${category.name} elsewhere in the UAE`
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${category.slug}`,
							className: "text-link",
							children: [
								"All ",
								category.name.toLowerCase(),
								" ",
								/* @__PURE__ */ jsx(Arrow, {})
							]
						})
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-grid",
					children: siblings.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 60,
						children: /* @__PURE__ */ jsxs(Link, {
							to: `/services/${category.slug}/${e.slug}`,
							className: "loc-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-name",
									children: `${category.name} in ${e.name}`
								}),
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-meta",
									children: e.authority
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: ["View ", /* @__PURE__ */ jsx(Arrow, {})]
								})
							]
						})
					}, e.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: `${category.name} in ${emirate.name}?`,
			text: `Tell us about the site and scope — we’ll price the real work and mobilise from Dubai.`
		})
	] });
}
//#endregion
//#region src/pages/ServiceSegment.jsx
function ServiceSegment() {
	const { category: cSlug, segment } = useParams();
	const category = categoryBySlug[cSlug];
	if (!category) return /* @__PURE__ */ jsx(NotFound, {});
	const match = resolveServiceSegment(category, segment);
	if (match.kind === "service") return /* @__PURE__ */ jsx(ServiceDetail, {
		category,
		service: match.service
	});
	if (match.kind === "emirate") return /* @__PURE__ */ jsx(ServiceLocation, {
		category,
		emirate: match.emirate
	});
	return /* @__PURE__ */ jsx(NotFound, {});
}
//#endregion
//#region src/data/gallery.json
var gallery_default = [
	{
		"src": "/images/library/burj-al-arab-sunset.jpg",
		"alt": "Burj Al Arab at sunset, Dubai"
	},
	{
		"src": "/images/library/operator-backhoe.jpg",
		"alt": "Operator with backhoe loader on site"
	},
	{
		"src": "/images/library/tower-cranes.jpg",
		"alt": "Tower cranes over a rising structure"
	},
	{
		"src": "/images/library/survey-setting-out.jpg",
		"alt": "Surveyor setting out with total station"
	},
	{
		"src": "/images/library/golden-hour-site.jpg",
		"alt": "On site at golden hour"
	},
	{
		"src": "/images/library/crew-climb.jpg",
		"alt": "Site crew climbing scaffold against blue sky"
	},
	{
		"src": "/images/library/ready-for-shift.jpg",
		"alt": "Ready for the shift — dusk over the works"
	},
	{
		"src": "/images/library/atlantis-palm.jpg",
		"alt": "Atlantis, The Palm — built on Nakheel land, Dubai"
	},
	{
		"src": "/images/library/skyline-clouds.jpg",
		"alt": "Dubai skyline rising above the clouds"
	}
];
//#endregion
//#region src/components/Gallery.jsx
function Gallery({ eyebrow = "From our sites", title = "The work, in pictures.", limit }) {
	if (!gallery_default.length) return null;
	const shots = limit ? gallery_default.slice(0, limit) : gallery_default;
	return /* @__PURE__ */ jsx("section", {
		className: "section hairline-top",
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap",
			children: [/* @__PURE__ */ jsx("div", {
				className: "section-head",
				children: /* @__PURE__ */ jsxs("div", {
					className: "kicker",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: eyebrow
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsx("h2", {
							className: "display-lg",
							children: title
						})
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "gallery-grid",
				children: shots.map((g, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i % 3 * 70,
					children: /* @__PURE__ */ jsx("img", {
						src: g.src,
						alt: g.alt,
						loading: "lazy"
					})
				}, g.src))
			})]
		})
	});
}
//#endregion
//#region src/pages/Projects.jsx
function Projects() {
	const filters = ["All", ...new Set(projects.map((p) => p.sector))];
	const [filter, setFilter] = useState("All");
	const shown = projects.filter((p) => filter === "All" || p.sector === filter);
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: "Projects",
			title: "Selected work across the UAE.",
			text: "From public authorities to private clients — a track record built on safety, quality and client satisfaction.",
			img: images.banners.projects
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "filter-pills",
					children: filters.map((f) => /* @__PURE__ */ jsx("button", {
						className: `pill${filter === f ? " active" : ""}`,
						onClick: () => setFilter(f),
						children: f
					}, f))
				}), /* @__PURE__ */ jsx("div", {
					className: "proj-cards",
					children: shown.map((p) => {
						const i = projects.indexOf(p);
						return /* @__PURE__ */ jsxs(Reveal, {
							delay: i % 3 * 80,
							className: "proj-card",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "proj-card-media",
									children: /* @__PURE__ */ jsx(Photo, {
										src: images.projects[i],
										alt: `${p.client} — ${p.sector}`
									})
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "proj-card-sector",
									children: [
										p.sector,
										" · ",
										p.location
									]
								}),
								/* @__PURE__ */ jsx("h3", { children: p.client }),
								/* @__PURE__ */ jsx("p", { children: p.scope }),
								/* @__PURE__ */ jsxs("div", {
									className: "proj-card-facts",
									children: [
										/* @__PURE__ */ jsxs("span", { children: ["Year ", /* @__PURE__ */ jsx("strong", { children: p.year })] }),
										/* @__PURE__ */ jsxs("span", { children: ["Value ", /* @__PURE__ */ jsx("strong", { children: p.value })] }),
										/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("strong", { children: "Delivered" }) })
									]
								})
							]
						}, p.client);
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section on-dark",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx("div", {
					className: "section-head",
					children: /* @__PURE__ */ jsxs("div", {
						className: "kicker",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Where We Work"
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: "Sectors we serve."
							})
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "sector-grid",
					children: sectors.map((s, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i % 3 * 80,
						className: "sector-cell",
						children: [/* @__PURE__ */ jsx("h3", { children: s.title }), /* @__PURE__ */ jsx("p", { children: s.text })]
					}, s.title))
				})]
			})
		}),
		/* @__PURE__ */ jsx(Gallery, {
			eyebrow: "Site Gallery",
			title: "The places behind our work."
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: "Your project, next on this page.",
			text: "From AED 0.3M relocations to multi-million road renewals — every scope gets the same standard of delivery."
		})
	] });
}
//#endregion
//#region src/pages/Contact.jsx
var SERVICE_OPTIONS = [
	"Excavation",
	"Road Construction",
	"Asphalt Works",
	"Cut & Fill",
	"Site Preparation",
	"Trenching & Piling",
	"Material Supply",
	"Equipment Rental"
];
function Contact() {
	const [form, setForm] = useState({
		name: "",
		phone: "",
		email: "",
		message: ""
	});
	const [services, setServices] = useState([]);
	const set = (key) => (e) => setForm({
		...form,
		[key]: e.target.value
	});
	const toggleService = (s) => setServices((cur) => cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]);
	const submit = (e) => {
		e.preventDefault();
		const picked = services.join(", ") || "General";
		const subject = encodeURIComponent(`Enquiry: ${picked} — ${form.name}`);
		const body = encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nServices: ${picked}\n\n${form.message}`);
		window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
	};
	return /* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx(PageBanner, {
		eyebrow: "Contact",
		title: "Let’s walk your site.",
		text: "Call, write or drop by — tell us about your scope and we’ll come back with a clear plan and an honest price.",
		img: images.banners.contact
	}), /* @__PURE__ */ jsxs("section", {
		className: "section",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "wrap contact-grid",
			children: [/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", {
				className: "contact-info",
				children: [
					/* @__PURE__ */ jsxs(Reveal, {
						className: "contact-item",
						children: [/* @__PURE__ */ jsx("span", {
							className: "label",
							children: "Phone"
						}), /* @__PURE__ */ jsx("a", {
							href: company.phoneHref,
							children: company.phone
						})]
					}),
					/* @__PURE__ */ jsxs(Reveal, {
						delay: 60,
						className: "contact-item",
						children: [/* @__PURE__ */ jsx("span", {
							className: "label",
							children: "Email"
						}), /* @__PURE__ */ jsx("a", {
							href: `mailto:${company.email}`,
							children: company.email
						})]
					}),
					/* @__PURE__ */ jsxs(Reveal, {
						delay: 120,
						className: "contact-item",
						children: [/* @__PURE__ */ jsx("span", {
							className: "label",
							children: "Office"
						}), /* @__PURE__ */ jsx("address", { children: company.address.map((line) => /* @__PURE__ */ jsxs("span", { children: [line, /* @__PURE__ */ jsx("br", {})] }, line)) })]
					}),
					/* @__PURE__ */ jsxs(Reveal, {
						delay: 180,
						className: "contact-item",
						children: [/* @__PURE__ */ jsx("span", {
							className: "label",
							children: "Hours"
						}), /* @__PURE__ */ jsxs("address", { children: [
							"Monday – Saturday, 8:00 – 18:00",
							/* @__PURE__ */ jsx("br", {}),
							"Site operations: 24/7"
						] })]
					})
				]
			}) }), /* @__PURE__ */ jsx(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ jsxs("form", {
					className: "contact-form",
					onSubmit: submit,
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "form-row",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "field",
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "cf-name",
									children: "Name"
								}), /* @__PURE__ */ jsx("input", {
									id: "cf-name",
									required: true,
									value: form.name,
									onChange: set("name"),
									placeholder: "Your name"
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "field",
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "cf-phone",
									children: "Phone"
								}), /* @__PURE__ */ jsx("input", {
									id: "cf-phone",
									value: form.phone,
									onChange: set("phone"),
									placeholder: "+971 …"
								})]
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "field",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "cf-email",
								children: "Email"
							}), /* @__PURE__ */ jsx("input", {
								id: "cf-email",
								type: "email",
								required: true,
								value: form.email,
								onChange: set("email"),
								placeholder: "you@company.com"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "field",
							children: [/* @__PURE__ */ jsx("label", { children: "Services of interest" }), /* @__PURE__ */ jsx("div", {
								className: "chip-checks",
								children: SERVICE_OPTIONS.map((s) => /* @__PURE__ */ jsxs("label", {
									className: "chip-check",
									children: [/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										checked: services.includes(s),
										onChange: () => toggleService(s)
									}), /* @__PURE__ */ jsx("span", { children: s })]
								}, s))
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "field",
							children: [/* @__PURE__ */ jsx("label", {
								htmlFor: "cf-message",
								children: "Project details"
							}), /* @__PURE__ */ jsx("textarea", {
								id: "cf-message",
								required: true,
								value: form.message,
								onChange: set("message"),
								placeholder: "Location, scope, timeline — whatever you have so far."
							})]
						}),
						/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("button", {
							type: "submit",
							className: "btn btn-solid",
							children: ["Send enquiry ", /* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })]
						}) }),
						/* @__PURE__ */ jsxs("p", {
							className: "form-note",
							children: [
								"Submitting opens your email app with the enquiry addressed to ",
								company.email,
								"."
							]
						})
					]
				})
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "wrap",
			children: /* @__PURE__ */ jsx(Reveal, {
				className: "map-frame",
				children: /* @__PURE__ */ jsx("iframe", {
					title: "Earth Movers International — Capital Golden Tower, Business Bay, Dubai",
					src: `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`,
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				})
			})
		})]
	})] });
}
//#endregion
//#region src/seo.js
var SITE = "https://www.earthmoversint.com";
var BRAND = "Earth Movers International";
var page = (title, description, path, extra = {}) => ({
	title,
	description,
	canonical: `${SITE}${path === "/" ? "/" : path}`,
	path,
	...extra
});
var organisation = {
	"@type": "GeneralContractor",
	"@id": `${SITE}/#organization`,
	name: BRAND,
	url: SITE,
	telephone: company.phone,
	email: company.email,
	foundingDate: "1990",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Capital Golden Tower, Office 706, 7th Floor",
		addressLocality: "Business Bay, Dubai",
		addressCountry: "AE"
	},
	areaServed: [
		"Dubai",
		"Abu Dhabi",
		"Sharjah",
		"Ajman",
		"Ras Al Khaimah",
		"Fujairah",
		"Umm Al Quwain"
	]
};
function breadcrumbs(items) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((it, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: it.name,
			item: `${SITE}${it.path}`
		}))
	};
}
var STATIC = {
	"/": page(`RTA-Approved Road & Earthworks Contractor in Dubai | ${BRAND}`, "Earth Movers International is an RTA-approved road and earthworks contractor in Dubai, UAE. Excavation, road construction, asphalt works, traffic management and utilities across all seven emirates since 1990.", "/"),
	"/about": page(`About Us — Earthworks & Road Contractor Since 1990 | ${BRAND}`, "Founded in Montreal in 1990 and established in Dubai since 2005, Earth Movers International delivers earthworks, road construction and heavy equipment services across the UAE.", "/about"),
	"/projects": page(`Projects — Road & Earthworks Case Studies in the UAE | ${BRAND}`, "Selected road, earthworks and marine projects delivered for Fujairah Cement Industry, Dubai Municipality and Nakheel PJSC across the UAE.", "/projects"),
	"/contact": page(`Contact — Request a Quote | ${BRAND}, Dubai`, `Contact Earth Movers International in Business Bay, Dubai. Call ${company.phone} or send your scope and drawings for a priced proposal.`, "/contact")
};
function categorySeo(category) {
	const list = emiratesFor(category);
	const where = category.coverage === "all" ? "the UAE" : "Dubai";
	const names = category.services.map((s) => s.name).join(", ");
	return page(`${category.name} Contractor in ${where} — ${category.services[0].name} & More | ${BRAND}`, `${category.name} services across ${where}: ${names.toLowerCase()}. RTA-approved contractor with its own fleet, operating in ${list.map((e) => e.name).join(", ")}.`, `/services/${category.slug}`, { jsonLd: [
		breadcrumbs([
			{
				name: "Home",
				path: "/"
			},
			{
				name: "Services",
				path: "/services"
			},
			{
				name: category.name,
				path: `/services/${category.slug}`
			}
		]),
		{
			"@type": "Service",
			name: `${category.name} — ${BRAND}`,
			serviceType: category.name,
			provider: organisation,
			areaServed: list.map((e) => ({
				"@type": "AdministrativeArea",
				name: e.name
			})),
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: `${category.name} services`,
				itemListElement: category.services.map((s) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: s.name,
						description: s.text,
						url: `${SITE}/services/${category.slug}/${s.slug}`
					}
				}))
			}
		},
		{
			"@type": "ItemList",
			name: `${category.name} services`,
			itemListElement: category.services.map((s, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: s.name,
				url: `${SITE}/services/${category.slug}/${s.slug}`
			}))
		}
	] });
}
function serviceSeo(category, service) {
	const list = emiratesFor(category);
	category.coverage;
	return page(`${service.h1} | ${BRAND}`, `${service.lead} ${BRAND} is an RTA-approved contractor delivering ${service.name.toLowerCase()} across ${list.map((e) => e.name).join(", ")}.`.slice(0, 300), `/services/${category.slug}/${service.slug}`, { jsonLd: [
		breadcrumbs([
			{
				name: "Home",
				path: "/"
			},
			{
				name: "Services",
				path: "/services"
			},
			{
				name: category.name,
				path: `/services/${category.slug}`
			},
			{
				name: service.name,
				path: `/services/${category.slug}/${service.slug}`
			}
		]),
		{
			"@type": "Service",
			name: service.h1,
			serviceType: service.name,
			description: service.intro,
			provider: organisation,
			areaServed: list.map((e) => ({
				"@type": "AdministrativeArea",
				name: e.name
			})),
			isPartOf: {
				"@type": "Service",
				name: category.name,
				url: `${SITE}/services/${category.slug}`
			},
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: `${service.name} — what is included`,
				itemListElement: service.scope.map((item) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: item
					}
				}))
			}
		},
		{
			"@type": "FAQPage",
			mainEntity: service.faqs.map((f) => ({
				"@type": "Question",
				name: f.q,
				acceptedAnswer: {
					"@type": "Answer",
					text: f.a
				}
			}))
		}
	] });
}
function locationSeo(category, emirate) {
	const lead = category.services.slice(0, 3).map((s) => s.name).join(", ");
	return page(`${category.name} Contractor in ${emirate.name} — ${lead} | ${BRAND}`, `${category.name} in ${emirate.name}: ${category.services.map((s) => s.name.toLowerCase()).join(", ")}. Approved contractor working to ${emirate.authority} standards, with our own plant and operators.`, `/services/${category.slug}/${emirate.slug}`, { jsonLd: [
		breadcrumbs([
			{
				name: "Home",
				path: "/"
			},
			{
				name: "Services",
				path: "/services"
			},
			{
				name: category.name,
				path: `/services/${category.slug}`
			},
			{
				name: emirate.name,
				path: `/services/${category.slug}/${emirate.slug}`
			}
		]),
		{
			"@type": "Service",
			name: `${category.name} in ${emirate.name}`,
			serviceType: category.name,
			provider: organisation,
			areaServed: {
				"@type": "AdministrativeArea",
				name: emirate.name
			},
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: `${category.name} in ${emirate.name}`,
				itemListElement: category.services.map((s) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: `${s.name} in ${emirate.name}`,
						description: s.text
					}
				}))
			}
		},
		{
			"@type": "FAQPage",
			mainEntity: [{
				"@type": "Question",
				name: `Do you carry out ${category.name.toLowerCase()} in ${emirate.name}?`,
				acceptedAnswer: {
					"@type": "Answer",
					text: `Yes. ${BRAND} delivers ${category.name.toLowerCase()} across ${emirate.name}, including ${emirate.areas}, working to ${emirate.authority} standards with our own excavators, dozers, graders and rollers.`
				}
			}, {
				"@type": "Question",
				name: `How do I get a quote for ${category.services[0].name.toLowerCase()} in ${emirate.name}?`,
				acceptedAnswer: {
					"@type": "Answer",
					text: `Send your drawings, bill of quantities or a description of the scope to ${company.email}, or call ${company.phone}. We walk the ground where needed and return a priced proposal.`
				}
			}]
		}
	] });
}
function seoFor(pathname) {
	const path = pathname.replace(/\/+$/, "") || "/";
	if (STATIC[path]) return {
		...STATIC[path],
		jsonLd: [organisation]
	};
	if (path === "/services") return page(`Services — Earth Works, Road Works, Traffic Management & Utilities | ${BRAND}`, "Earthworks, road works, traffic management and utilities across the UAE. Excavation, asphalt, access roads, RTA permits, entry-exit works and service protection from an RTA-approved contractor.", "/services", { jsonLd: [breadcrumbs([{
		name: "Home",
		path: "/"
	}, {
		name: "Services",
		path: "/services"
	}]), {
		"@type": "ItemList",
		itemListElement: serviceCategories.map((c, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: c.name,
			url: `${SITE}/services/${c.slug}`
		}))
	}] });
	const m = path.match(/^\/services\/([a-z-]+)(?:\/([a-z-]+))?$/);
	if (m) {
		const category = categoryBySlug[m[1]];
		if (category && !m[2]) return categorySeo(category);
		if (category) {
			const found = resolveServiceSegment(category, m[2]);
			if (found.kind === "service") return serviceSeo(category, found.service);
			if (found.kind === "emirate") return locationSeo(category, found.emirate);
		}
	}
	return page(`Page Not Found | ${BRAND}`, "The page you are looking for does not exist.", path, { noindex: true });
}
function headTagsFor(pathname) {
	const s = seoFor(pathname);
	const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	const graph = {
		"@context": "https://schema.org",
		"@graph": (s.jsonLd || [organisation]).map((n) => ({ ...n }))
	};
	return [
		`<title>${esc(s.title)}</title>`,
		`<meta name="description" content="${esc(s.description)}">`,
		s.noindex ? "<meta name=\"robots\" content=\"noindex,follow\">" : "<meta name=\"robots\" content=\"index,follow,max-image-preview:large\">",
		`<link rel="canonical" href="${esc(s.canonical)}">`,
		`<meta property="og:type" content="website">`,
		`<meta property="og:site_name" content="${BRAND}">`,
		`<meta property="og:title" content="${esc(s.title)}">`,
		`<meta property="og:description" content="${esc(s.description)}">`,
		`<meta property="og:url" content="${esc(s.canonical)}">`,
		`<meta property="og:image" content="${SITE}/images/hero-slide-1.jpg">`,
		`<meta property="og:locale" content="en_AE">`,
		`<meta name="twitter:card" content="summary_large_image">`,
		`<meta name="geo.region" content="AE-DU">`,
		`<script type="application/ld+json">${JSON.stringify(graph)}<\/script>`
	].join("\n    ");
}
//#endregion
//#region src/hooks/useSeo.js
function useSeo() {
	const { pathname } = useLocation();
	useEffect(() => {
		const s = seoFor(pathname);
		document.title = s.title;
		const set = (selector, tag, attrs) => {
			let el = document.head.querySelector(selector);
			if (!el) {
				el = document.createElement(tag);
				document.head.appendChild(el);
			}
			Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
		};
		set("meta[name=\"description\"]", "meta", {
			name: "description",
			content: s.description
		});
		set("link[rel=\"canonical\"]", "link", {
			rel: "canonical",
			href: s.canonical
		});
		set("meta[property=\"og:title\"]", "meta", {
			property: "og:title",
			content: s.title
		});
		set("meta[property=\"og:description\"]", "meta", {
			property: "og:description",
			content: s.description
		});
		set("meta[property=\"og:url\"]", "meta", {
			property: "og:url",
			content: s.canonical
		});
		set("meta[name=\"robots\"]", "meta", {
			name: "robots",
			content: s.noindex ? "noindex,follow" : "index,follow,max-image-preview:large"
		});
	}, [pathname]);
}
//#endregion
//#region src/App.jsx
function AppRoutes() {
	useSeo();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Nav, {}),
		/* @__PURE__ */ jsxs(Routes, { children: [
			/* @__PURE__ */ jsx(Route, {
				path: "/",
				element: /* @__PURE__ */ jsx(Home, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/about",
				element: /* @__PURE__ */ jsx(About, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/services",
				element: /* @__PURE__ */ jsx(Services, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/services/:category",
				element: /* @__PURE__ */ jsx(ServiceCategory, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/services/:category/:segment",
				element: /* @__PURE__ */ jsx(ServiceSegment, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/projects",
				element: /* @__PURE__ */ jsx(Projects, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "/contact",
				element: /* @__PURE__ */ jsx(Contact, {})
			}),
			/* @__PURE__ */ jsx(Route, {
				path: "*",
				element: /* @__PURE__ */ jsx(NotFound, {})
			})
		] }),
		/* @__PURE__ */ jsx(Footer, {})
	] });
}
//#endregion
//#region src/entry-server.jsx
function render(url) {
	return renderToString(/* @__PURE__ */ jsx(StaticRouter, {
		location: url,
		children: /* @__PURE__ */ jsx(AppRoutes, {})
	}));
}
var routes = [
	"/",
	"/about",
	"/projects",
	"/contact",
	...allServiceRoutes()
];
//#endregion
export { SITE, headTagsFor, render, routes };
