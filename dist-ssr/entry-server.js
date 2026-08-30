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
var emirateBySlug = Object.fromEntries(emirates.map((e) => [e.slug, e]));
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
				text: "Supply and installation of kerbstones and channels to line and level on concrete haunching — road kerbs, parking kerbs, radius units and drop kerbs at crossings and entrances, finished to authority profile."
			},
			{
				slug: "road-markings",
				name: "Road Markings",
				keyword: "road marking contractor",
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
];
var categoryBySlug = Object.fromEntries(serviceCategories.map((c) => [c.slug, c]));
function emiratesFor(category) {
	return category.coverage === "all" ? emirates : emirates.filter((e) => category.coverage.includes(e.slug));
}
function allServiceRoutes() {
	const routes = ["/services"];
	for (const c of serviceCategories) {
		routes.push(`/services/${c.slug}`);
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
			children: [
				/* @__PURE__ */ jsxs("div", {
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
								/* @__PURE__ */ jsxs("span", {
									style: { marginTop: "0.6rem" },
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
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-location",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "footer-location-text",
						children: [
							/* @__PURE__ */ jsx("h4", { children: "Our Location" }),
							/* @__PURE__ */ jsx("p", {
								className: "footer-legal-name",
								children: company.legalName
							}),
							/* @__PURE__ */ jsx("address", { children: company.address.map((line) => /* @__PURE__ */ jsxs("span", { children: [line, /* @__PURE__ */ jsx("br", {})] }, line)) }),
							/* @__PURE__ */ jsx("a", {
								href: company.mapsLink,
								target: "_blank",
								rel: "noreferrer",
								className: "text-link",
								children: "Get directions"
							})
						]
					}), /* @__PURE__ */ jsx("div", {
						className: "footer-map",
						children: /* @__PURE__ */ jsx("iframe", {
							title: `${company.legalName} — location on Google Maps`,
							src: `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade"
						})
					})]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "footer-bottom",
					children: [/* @__PURE__ */ jsxs("span", { children: [
						"© ",
						year,
						" ",
						company.legalName,
						". All rights reserved."
					] }), /* @__PURE__ */ jsxs("span", { children: [company.coordinates, " — Dubai, UAE"] })]
				})
			]
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
								/* @__PURE__ */ jsx("ul", {
									className: "cat-tile-list",
									children: c.services.filter((s) => !s.hideOnHome).map((s) => /* @__PURE__ */ jsx("li", { children: s.name }, s.slug))
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
								className: "tag-list",
								children: category.services.map((s) => /* @__PURE__ */ jsx("li", { children: s.name }, s.slug))
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
						children: category.services.map((s, i) => /* @__PURE__ */ jsxs(Reveal, {
							delay: i % 2 * 60,
							className: "check-item",
							children: [/* @__PURE__ */ jsx(CheckCircle, { className: "check-ico" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: s.name }), /* @__PURE__ */ jsx("p", { children: s.text })] })]
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
//#region src/pages/ServiceLocation.jsx
function ServiceLocation() {
	const { category: cSlug, emirate: eSlug } = useParams();
	const category = categoryBySlug[cSlug];
	const emirate = emirateBySlug[eSlug];
	if (!category || !emirate) return /* @__PURE__ */ jsx(NotFound, {});
	const covered = emiratesFor(category);
	if (!covered.some((e) => e.slug === emirate.slug)) return /* @__PURE__ */ jsx(NotFound, {});
	const siblings = covered.filter((e) => e.slug !== emirate.slug);
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
						children: [/* @__PURE__ */ jsx(CheckCircle, { className: "check-ico" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", { children: `${s.name} in ${emirate.name}` }), /* @__PURE__ */ jsx("p", { children: s.text })] })]
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
	return page(`${category.name} Contractor in ${where} — ${category.services[0].name} & More | ${BRAND}`, `${category.name} services across ${where}: ${names.toLowerCase()}. RTA-approved contractor with its own fleet, operating in ${list.map((e) => e.name).join(", ")}.`, `/services/${category.slug}`, { jsonLd: [breadcrumbs([
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
	]), {
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
					description: s.text
				}
			}))
		}
	}] });
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
		const emirate = emirateBySlug[m[2]];
		if (category && emirate && emiratesFor(category).some((e) => e.slug === emirate.slug)) return locationSeo(category, emirate);
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
				path: "/services/:category/:emirate",
				element: /* @__PURE__ */ jsx(ServiceLocation, {})
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
