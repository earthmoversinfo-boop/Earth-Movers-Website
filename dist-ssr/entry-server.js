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
//#region src/i18n/locale.js
var LOCALES = ["en", "ar"];
var LOCALE_META = {
	en: {
		code: "en",
		htmlLang: "en",
		hreflang: "en-AE",
		dir: "ltr",
		name: "English",
		short: "EN"
	},
	ar: {
		code: "ar",
		htmlLang: "ar",
		hreflang: "ar-AE",
		dir: "rtl",
		name: "العربية",
		short: "ع"
	}
};
var trimTrailing = (p) => p.replace(/\/+$/, "") || "/";
function splitLocale(pathname) {
	const path = trimTrailing(pathname || "/");
	const m = path.match(/^\/(ar)(\/.*)?$/);
	if (m) return {
		locale: m[1],
		base: trimTrailing(m[2] || "/")
	};
	return {
		locale: "en",
		base: path
	};
}
function localeHref(base, locale = "en") {
	const path = trimTrailing(base);
	if (locale === "en") return path;
	return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
function alternatesFor(base) {
	return LOCALES.map((locale) => ({
		locale,
		path: localeHref(base, locale)
	}));
}
//#endregion
//#region src/i18n/ui.js
var UI = {
	en: {
		"nav.home": "Home",
		"nav.about": "About Us",
		"nav.services": "Services",
		"nav.projects": "Projects",
		"nav.contact": "Contact",
		"nav.quote": "Get a Quote",
		"nav.primary": "Primary",
		"nav.openMenu": "Open menu",
		"nav.closeMenu": "Close menu",
		"nav.homeAria": "Earth Movers International — home",
		"nav.language": "Language",
		"nav.switchTo": "العربية",
		"nav.switchAria": "Switch to Arabic",
		"nav.allServices": "All services",
		"nav.talkToUs": "Talk to us",
		"cov.all": "all 7 emirates",
		"cov.dubai": "Dubai",
		"cov.allLong": "all seven emirates",
		"cov.whereAll": "the UAE",
		"cov.availableAll": "Available in all 7 emirates",
		"cov.availableDubai": "Available in Dubai",
		"cov.availableIn": "Available in {where}",
		"crumb.home": "Home",
		"crumb.services": "Services",
		"cta.quote": "Request a quote",
		"cta.proposal": "Request a proposal",
		"cta.start": "Start a project",
		"cta.explore": "Explore",
		"cta.view": "View",
		"cta.readMore": "Read more",
		"lbl.overview": "Overview",
		"lbl.scope": "Scope",
		"lbl.glance": "At a glance",
		"lbl.whereWeWork": "Where we work",
		"lbl.faq": "Common questions",
		"lbl.related": "Related services",
		"lbl.included": "What’s included",
		"lbl.services": "Services",
		"lbl.exploreMore": "Explore more",
		"lbl.otherServices": "Other services",
		"lbl.localCoverage": "Local coverage",
		"lbl.otherEmirates": "Other emirates",
		"svc.detailLink": "{name} in detail",
		"svc.moreOn": "More on {name}",
		"svc.covers": "What our {name} package covers.",
		"svc.acrossWhere": "{name} across {where}.",
		"svc.withOwnFleet": "{name} in {where}, delivered with our own fleet.",
		"svc.faqHeading": "{name} — FAQs",
		"svc.chooseEmirate": "We deliver {name} as part of our {category} package. Choose your emirate for local coverage and the approving authority.",
		"svc.chooseEmirateCategory": "Choose your emirate for local coverage, approving authority and the areas we operate in.",
		"svc.allOf": "All {category}",
		"svc.priceQ": "How do I get a price for {name}?",
		"svc.priceA": "Send drawings, a bill of quantities or a description of the scope to {email}, or call {phone}. Where it helps, we walk the ground with you before pricing.",
		"svc.needPriced": "Need {name} priced?",
		"svc.ctaText": "Send your drawings or bill of quantities and we’ll come back with a clear, realistic price.",
		"svc.otherIn": "Other {category} services",
		"loc.inEmirate": "{name} in {emirate}",
		"loc.deliveredIn": "{category} in {emirate}, delivered with our own fleet.",
		"loc.whatWeDeliver": "What we deliver in {emirate}.",
		"loc.ourServices": "Our {category} services",
		"loc.areasWeCover": "Areas we cover in {emirate}:",
		"loc.areasTail": "Whether the scope is a single plot or a multi-phase infrastructure package, the same plant, operators and supervision deliver it.",
		"loc.figCaption": "{category} in {emirate} — our own plant, operators and supervision.",
		"loc.elsewhere": "{category} elsewhere in the UAE",
		"loc.ctaTitle": "{category} in {emirate}?",
		"loc.ctaText": "Tell us about the site and scope — we’ll price the real work and mobilise from Dubai.",
		"loc.q1": "Do you carry out {category} in {emirate}?",
		"loc.a1": "Yes. We deliver {category} across {emirate}, including {areas}, working to {authority} standards with our own excavators, dozers, graders and rollers.",
		"loc.q2": "Are you an approved contractor for works in {emirate}?",
		"loc.a2": "We are an RTA-approved contractor and work to the requirements of {authority}. Method statements, permits and material approvals are prepared and submitted by our own team.",
		"loc.q3": "How do I get a price for {service} in {emirate}?",
		"loc.q4": "How quickly can you mobilise to {emirate}?",
		"loc.a4": "Because the fleet is owned rather than hired, mobilisation is a scheduling question rather than an availability one — typically within days of approval.",
		"foot.company": "Company",
		"foot.areas": "Areas We Serve",
		"foot.contact": "Contact",
		"foot.directions": "Get directions",
		"foot.rights": "All rights reserved.",
		"foot.blurb": "Founded in Montreal in {founded}, in Dubai since {inUAE}. An RTA-approved earthworks and road construction contractor serving infrastructure, commercial and industrial projects across the UAE.",
		"foot.certRta": "RTA Approved",
		"foot.certDm": "Dubai Municipality",
		"foot.certSince": "Since 1990",
		"foot.place": "Dubai, UAE",
		"seo.brand": "Earth Movers International",
		"seo.homeTitle": "RTA-Approved Road & Earthworks Contractor in Dubai | {brand}",
		"seo.homeDesc": "Earth Movers International is an RTA-approved road and earthworks contractor in Dubai, UAE. Excavation, road construction, asphalt works, traffic management and utilities across all seven emirates since 1990.",
		"seo.aboutTitle": "About Us — Earthworks & Road Contractor Since 1990 | {brand}",
		"seo.aboutDesc": "Founded in Montreal in 1990 and established in Dubai since 2005, Earth Movers International delivers earthworks, road construction and heavy equipment services across the UAE.",
		"seo.projectsTitle": "Projects — Road & Earthworks Case Studies in the UAE | {brand}",
		"seo.projectsDesc": "Selected road, earthworks and marine projects delivered for Fujairah Cement Industry, Dubai Municipality and Nakheel PJSC across the UAE.",
		"seo.contactTitle": "Contact — Request a Quote | {brand}, Dubai",
		"seo.contactDesc": "Contact Earth Movers International in Business Bay, Dubai. Call {phone} or send your scope and drawings for a priced proposal.",
		"seo.servicesTitle": "Services — Earth Works, Road Works, Traffic Management & Utilities | {brand}",
		"seo.servicesDesc": "Earthworks, road works, traffic management and utilities across the UAE. Excavation, asphalt, access roads, RTA permits, entry-exit works and service protection from an RTA-approved contractor.",
		"seo.categoryH1": "{category} Contractor in {where}",
		"seo.categoryTitle": "{category} Contractor in {where} — {first} & More | {brand}",
		"seo.categoryDesc": "{category} services across {where}: {list}. RTA-approved contractor with its own fleet, operating in {emirates}.",
		"seo.locationTitle": "{category} Contractor in {emirate} — {lead} | {brand}",
		"seo.locationDesc": "{category} in {emirate}: {list}. Approved contractor working to {authority} standards, with our own plant and operators.",
		"seo.serviceTitle": "{h1} | {brand}",
		"seo.serviceDesc": "{lead} {brand} is an RTA-approved contractor delivering {service} across {emirates}.",
		"seo.notFoundTitle": "Page Not Found | {brand}",
		"seo.notFoundDesc": "The page you are looking for does not exist.",
		"home.heroAria": "Earth Movers International highlights",
		"home.slidesAria": "Hero slides",
		"home.slideN": "Slide {n}",
		"home.exploreProjects": "Explore our projects",
		"home.certRow": "Certifications & registrations",
		"home.workEyebrow": "Our Work",
		"home.workTitle": "The projects that tell our story.",
		"home.allProjects": "All projects",
		"home.promiseEyebrow": "Our Promise",
		"home.promise": "We move the earth, we build the roads, and we earn the trust of every client we serve — ",
		"home.promiseEm": "every single day.",
		"home.whatEyebrow": "What We Do",
		"home.whatTitle": "Four disciplines. One accountable partner.",
		"home.whatLead": "Earth works, road works, traffic management and utilities — delivered with our own fleet, our own operators and RTA-approved processes.",
		"home.plusServices": "plus {n} services",
		"home.fleetEyebrow": "The Fleet",
		"home.fleetTitle": "One of the largest heavy-excavation fleets in Dubai.",
		"home.fleetLead": "Excavators, bulldozers, piling rigs and rock breakers — owned, maintained and operated by us. Your programme never waits on a machine.",
		"home.rentEquipment": "Rent equipment",
		"home.fleetCaption": "Fleet operations — Dubai",
		"home.fleetOperated": "Operated · 24/7",
		"home.fleetAlt": "Wheel loader working sand stockpiles",
		"home.marquee": "Trusted across the UAE",
		"home.ctaText": "Tell us about your site and scope — we’ll walk the ground with you and price the real work.",
		"about.eyebrow": "About Us",
		"about.title": "Three decades of moving ground.",
		"about.lead": "From Montreal in {founded} to Dubai since {inUAE} — a contractor built around heavy machines, experienced hands and ground that gets handed over right.",
		"about.storyEyebrow": "The story",
		"about.storyTitle": "Who we are",
		"about.story1": "Earth Movers International is a dynamic and preferred solution provider in the fields of civil and heavy construction, engineering, oil & gas, recycling and demolition.",
		"about.story2": "Our team was incorporated to help meet the challenges faced by the construction sector in the fields of earth works, heavy equipment, material supply, transportation and logistics. Today we support infrastructure, commercial and industrial projects across the UAE as a Dubai-based road construction and earthworks contractor.",
		"about.story3": "We maintain one of Dubai’s largest fleets of heavy excavation equipment — excavators, bulldozers, piling rigs, rock breakers and specialised machinery — so projects are completed quickly, effectively and safely. As an RTA-approved contractor, compliance is built into everything we deliver.",
		"about.photoAlt": "Earth Movers International team and machinery at work",
		"about.milestones": "Milestones",
		"about.milestonesTitle": "The road so far.",
		"about.directionEyebrow": "Direction",
		"about.directionTitle": "Mission & vision",
		"about.vision": "Our vision is to make Earth Movers International a global brand in the field of earth works, heavy construction equipment and services.",
		"about.mission": "Our mission is simpler still: deliver practical, build-ready ground — safely, on programme and to specification — so every client can build with confidence on what we hand over.",
		"about.valuesEyebrow": "Values",
		"about.valuesTitle": "Ground rules.",
		"about.seeServices": "See our services",
		"about.ctaTitle": "Build on solid ground.",
		"about.ctaText": "Talk to the team that has been moving the earth since 1990.",
		"proj.eyebrow": "Projects",
		"proj.title": "Selected work across the UAE.",
		"proj.lead": "From public authorities to private clients — a track record built on safety, quality and client satisfaction.",
		"proj.all": "All",
		"proj.year": "Year",
		"proj.value": "Value",
		"proj.delivered": "Delivered",
		"proj.whereEyebrow": "Where We Work",
		"proj.whereTitle": "Sectors we serve.",
		"proj.galleryEyebrow": "Site Gallery",
		"proj.galleryTitle": "The places behind our work.",
		"proj.ctaTitle": "Your project, next on this page.",
		"proj.ctaText": "From AED 0.3M relocations to multi-million road renewals — every scope gets the same standard of delivery.",
		"ct.reachEyebrow": "Reach us",
		"ct.callLabel": "Call the office",
		"ct.callNote": "Fastest route — we answer during working hours",
		"ct.emailLabel": "Email us",
		"ct.emailNote": "Best for drawings and bills of quantities",
		"ct.officeNote": "Visits by appointment",
		"ct.formEyebrow": "Send your scope",
		"ct.formTitle": "Tell us what you need built.",
		"ct.formLead": "Three details and a sentence about the job is enough to start. We price the real scope, and where it helps we walk the ground with you first.",
		"ct.need": "What do you need?",
		"ct.needPlaceholder": "Choose a service",
		"ct.notSure": "Not sure yet — advise me",
		"ct.optional": "optional",
		"ct.detailsHint": "Location, approximate quantities and your target dates, if you have them.",
		"ct.noteBefore": "Sending opens your own email app with everything filled in, addressed to {email}. Nothing is submitted to this website.",
		"ct.mapEyebrow": "Find us",
		"ct.mapHeading": "Business Bay, Dubai.",
		"ct.eyebrow": "Contact",
		"ct.title": "Let’s walk your site.",
		"ct.lead": "Call, write or drop by — tell us about your scope and we’ll come back with a clear plan and an honest price.",
		"ct.phone": "Phone",
		"ct.email": "Email",
		"ct.office": "Office",
		"ct.hours": "Hours",
		"ct.hoursValue": "Monday – Saturday, 8:00 – 18:00",
		"ct.hoursSite": "Site operations: 24/7",
		"ct.name": "Name",
		"ct.namePlaceholder": "Your name",
		"ct.phonePlaceholder": "+971 …",
		"ct.emailPlaceholder": "you@company.com",
		"ct.interest": "Services of interest",
		"ct.details": "Project details",
		"ct.detailsPlaceholder": "Location, scope, timeline — whatever you have so far.",
		"ct.send": "Send enquiry",
		"ct.note": "Submitting opens your email app with the enquiry addressed to {email}.",
		"ct.subject": "Enquiry: {picked} — {name}",
		"ct.general": "General",
		"ct.mapTitle": "Earth Movers International — Capital Golden Tower, Business Bay, Dubai",
		"nf.title": "This ground hasn’t been broken yet.",
		"nf.text": "The page you’re looking for doesn’t exist — but the rest of the site does.",
		"nf.back": "Back to home"
	},
	ar: {
		"nav.home": "الرئيسية",
		"nav.about": "من نحن",
		"nav.services": "خدماتنا",
		"nav.projects": "مشاريعنا",
		"nav.contact": "اتصل بنا",
		"nav.quote": "اطلب عرض سعر",
		"nav.primary": "القائمة الرئيسية",
		"nav.openMenu": "فتح القائمة",
		"nav.closeMenu": "إغلاق القائمة",
		"nav.homeAria": "إيرث موفرز إنترناشيونال — الصفحة الرئيسية",
		"nav.language": "اللغة",
		"nav.switchTo": "English",
		"nav.switchAria": "التبديل إلى الإنجليزية",
		"nav.allServices": "كل الخدمات",
		"nav.talkToUs": "تحدّث إلينا",
		"cov.all": "جميع إمارات الدولة السبع",
		"cov.dubai": "دبي",
		"cov.allLong": "إمارات الدولة السبع",
		"cov.whereAll": "الإمارات",
		"cov.availableAll": "متوفرة في جميع الإمارات السبع",
		"cov.availableDubai": "متوفرة في دبي",
		"cov.availableIn": "متوفرة في {where}",
		"crumb.home": "الرئيسية",
		"crumb.services": "الخدمات",
		"cta.quote": "اطلب عرض سعر",
		"cta.proposal": "اطلب عرضاً فنياً",
		"cta.start": "ابدأ مشروعك",
		"cta.explore": "استعرض",
		"cta.view": "عرض",
		"cta.readMore": "اقرأ المزيد",
		"lbl.overview": "نظرة عامة",
		"lbl.scope": "نطاق العمل",
		"lbl.glance": "لمحة سريعة",
		"lbl.whereWeWork": "أين نعمل",
		"lbl.faq": "أسئلة متكررة",
		"lbl.related": "خدمات ذات صلة",
		"lbl.included": "ما الذي يشمله العمل",
		"lbl.services": "الخدمات",
		"lbl.exploreMore": "استعرض المزيد",
		"lbl.otherServices": "خدمات أخرى",
		"lbl.localCoverage": "التغطية المحلية",
		"lbl.otherEmirates": "إمارات أخرى",
		"svc.detailLink": "تفاصيل {name}",
		"svc.moreOn": "المزيد عن {name}",
		"svc.covers": "ما الذي تشمله حزمة {name} لدينا.",
		"svc.acrossWhere": "{name} في {where}.",
		"svc.withOwnFleet": "ننفذ {name} في {where} بمعداتنا وكوادرنا.",
		"svc.faqHeading": "{name} — أسئلة متكررة",
		"svc.chooseEmirate": "ننفذ {name} ضمن حزمة {category}. اختر إمارتك للاطلاع على التغطية المحلية والجهة المانحة للموافقات.",
		"svc.chooseEmirateCategory": "اختر إمارتك للاطلاع على التغطية المحلية والجهة المانحة للموافقات والمناطق التي نعمل فيها.",
		"svc.allOf": "كل {category}",
		"svc.priceQ": "كيف أحصل على عرض سعر لأعمال {name}؟",
		"svc.priceA": "أرسل المخططات أو جدول الكميات أو وصفاً لنطاق العمل إلى {email}، أو اتصل على {phone}. وعند الحاجة نعاين الموقع معك قبل التسعير.",
		"svc.needPriced": "تحتاج تسعير أعمال {name}؟",
		"svc.ctaText": "أرسل مخططاتك أو جدول الكميات وسنعود إليك بسعر واضح وواقعي.",
		"svc.otherIn": "خدمات {category} الأخرى",
		"loc.inEmirate": "{name} في {emirate}",
		"loc.deliveredIn": "ننفذ {category} في {emirate} بمعداتنا وكوادرنا.",
		"loc.whatWeDeliver": "ما ننفذه في {emirate}.",
		"loc.ourServices": "خدمات {category} لدينا",
		"loc.areasWeCover": "المناطق التي نغطيها في {emirate}:",
		"loc.areasTail": "وسواء كان النطاق قطعة أرض واحدة أو حزمة بنية تحتية متعددة المراحل، فإن المعدات والمشغّلين والإشراف هم أنفسهم في الحالتين.",
		"loc.figCaption": "{category} في {emirate} — بمعداتنا ومشغّلينا وإشرافنا.",
		"loc.elsewhere": "{category} في باقي إمارات الدولة",
		"loc.ctaTitle": "هل تحتاج {category} في {emirate}؟",
		"loc.ctaText": "أخبرنا عن الموقع ونطاق العمل — نُسعّر العمل الفعلي ونجهّز التعبئة من دبي.",
		"loc.q1": "هل تنفذون {category} في {emirate}؟",
		"loc.a1": "نعم. ننفذ {category} في مختلف أنحاء {emirate}، بما في ذلك {areas}، وفق اشتراطات {authority}، وبحفاراتنا وجرافاتنا ومسوّياتنا ومداحلنا الخاصة.",
		"loc.q2": "هل أنتم مقاول معتمد للأعمال في {emirate}؟",
		"loc.a2": "نحن مقاول معتمد لدى هيئة الطرق والمواصلات ونعمل وفق متطلبات {authority}. ويتولى فريقنا إعداد وتقديم بيانات الطرق والتصاريح واعتمادات المواد.",
		"loc.q3": "كيف أحصل على سعر لأعمال {service} في {emirate}؟",
		"loc.q4": "ما سرعة تعبئتكم إلى {emirate}؟",
		"loc.a4": "لأن المعدات مملوكة لنا وليست مستأجرة، فإن التعبئة مسألة جدولة لا مسألة توفّر — وعادة خلال أيام من الاعتماد.",
		"foot.company": "الشركة",
		"foot.areas": "مناطق التغطية",
		"foot.contact": "التواصل",
		"foot.directions": "الاتجاهات على الخريطة",
		"foot.rights": "جميع الحقوق محفوظة.",
		"foot.blurb": "تأسست في مونتريال عام {founded}، وتعمل في دبي منذ عام {inUAE}. مقاول أعمال ترابية وإنشاء طرق معتمد لدى هيئة الطرق والمواصلات، ينفذ مشاريع البنية التحتية والتجارية والصناعية في مختلف أنحاء الإمارات.",
		"foot.certRta": "معتمد من هيئة الطرق والمواصلات",
		"foot.certDm": "بلدية دبي",
		"foot.certSince": "منذ عام 1990",
		"foot.place": "دبي، الإمارات",
		"seo.brand": "إيرث موفرز إنترناشيونال",
		"seo.homeTitle": "مقاول طرق وأعمال ترابية معتمد من هيئة الطرق والمواصلات في دبي | {brand}",
		"seo.homeDesc": "إيرث موفرز إنترناشيونال مقاول طرق وأعمال ترابية معتمد لدى هيئة الطرق والمواصلات في دبي، الإمارات. حفريات وإنشاء طرق وأعمال أسفلت وإدارة مرور وأعمال مرافق في إمارات الدولة السبع منذ عام 1990.",
		"seo.aboutTitle": "من نحن — مقاول أعمال ترابية وطرق منذ عام 1990 | {brand}",
		"seo.aboutDesc": "تأسست في مونتريال عام 1990 وتعمل في دبي منذ 2005. تقدّم إيرث موفرز إنترناشيونال خدمات الأعمال الترابية وإنشاء الطرق والمعدات الثقيلة في مختلف أنحاء الإمارات.",
		"seo.projectsTitle": "مشاريعنا — نماذج أعمال طرق وأعمال ترابية في الإمارات | {brand}",
		"seo.projectsDesc": "مختارات من مشاريع الطرق والأعمال الترابية والبحرية المنفَّذة لشركة الفجيرة لصناعة الإسمنت وبلدية دبي ونخيل ش.م.ع في مختلف أنحاء الإمارات.",
		"seo.contactTitle": "اتصل بنا — اطلب عرض سعر | {brand}، دبي",
		"seo.contactDesc": "تواصل مع إيرث موفرز إنترناشيونال في الخليج التجاري بدبي. اتصل على {phone} أو أرسل نطاق العمل والمخططات للحصول على عرض سعر.",
		"seo.servicesTitle": "خدماتنا — أعمال ترابية وطرق وإدارة مرور ومرافق | {brand}",
		"seo.servicesDesc": "أعمال ترابية وأعمال طرق وإدارة مرور وأعمال مرافق في مختلف أنحاء الإمارات. حفريات وأسفلت وطرق وصول وتصاريح هيئة الطرق والمواصلات وأعمال مداخل ومخارج وحماية خدمات، من مقاول معتمد.",
		"seo.categoryH1": "مقاول {category} في {where}",
		"seo.categoryTitle": "مقاول {category} في {where} — {first} والمزيد | {brand}",
		"seo.categoryDesc": "خدمات {category} في {where}: {list}. مقاول معتمد من هيئة الطرق والمواصلات بمعداته الخاصة، ويعمل في {emirates}.",
		"seo.locationTitle": "مقاول {category} في {emirate} — {lead} | {brand}",
		"seo.locationDesc": "{category} في {emirate}: {list}. مقاول معتمد يعمل وفق معايير {authority}، بمعداته ومشغّليه الخاصين.",
		"seo.serviceTitle": "{h1} | {brand}",
		"seo.serviceDesc": "{lead} {brand} مقاول معتمد ينفّذ {service} في {emirates}.",
		"seo.notFoundTitle": "الصفحة غير موجودة | {brand}",
		"seo.notFoundDesc": "الصفحة التي تبحث عنها غير موجودة.",
		"home.heroAria": "أبرز أعمال إيرث موفرز إنترناشيونال",
		"home.slidesAria": "شرائح الواجهة",
		"home.slideN": "شريحة {n}",
		"home.exploreProjects": "استعرض مشاريعنا",
		"home.certRow": "الاعتمادات والتسجيلات",
		"home.workEyebrow": "أعمالنا",
		"home.workTitle": "المشاريع التي تروي قصتنا.",
		"home.allProjects": "كل المشاريع",
		"home.promiseEyebrow": "وعدنا",
		"home.promise": "نحرّك التربة، ونبني الطرق، ونكسب ثقة كل عميل نعمل معه — ",
		"home.promiseEm": "كل يوم دون استثناء.",
		"home.whatEyebrow": "ما الذي نقدّمه",
		"home.whatTitle": "أربعة تخصصات. شريك واحد مسؤول.",
		"home.whatLead": "أعمال ترابية وأعمال طرق وإدارة مرور وأعمال مرافق — تُنفَّذ بمعداتنا ومشغّلينا ووفق إجراءات معتمدة من هيئة الطرق والمواصلات.",
		"home.plusServices": "و{n} خدمات أخرى",
		"home.fleetEyebrow": "الأسطول",
		"home.fleetTitle": "أحد أكبر أساطيل الحفر الثقيل في دبي.",
		"home.fleetLead": "حفارات وجرافات وحفارات خوازيق وكسّارات صخور — مملوكة لنا ونتولى صيانتها وتشغيلها. برنامجك الزمني لا ينتظر معدة.",
		"home.rentEquipment": "استئجار المعدات",
		"home.fleetCaption": "عمليات الأسطول — دبي",
		"home.fleetOperated": "بمشغّلين · على مدار الساعة",
		"home.fleetAlt": "لودر بعجل يعمل على أكوام الرمل",
		"home.marquee": "موضع ثقة في مختلف أنحاء الإمارات",
		"home.ctaText": "أخبرنا عن موقعك ونطاق العمل — نعاين الأرض معك ونُسعّر العمل الفعلي.",
		"about.eyebrow": "من نحن",
		"about.title": "ثلاثة عقود من تحريك الأرض.",
		"about.lead": "من مونتريال عام {founded} إلى دبي منذ {inUAE} — مقاول قائم على معدات ثقيلة وأيدٍ خبيرة وأرض تُسلَّم كما ينبغي.",
		"about.storyEyebrow": "الحكاية",
		"about.storyTitle": "من نحن",
		"about.story1": "إيرث موفرز إنترناشيونال مزوّد حلول نشط ومفضَّل في مجالات الإنشاءات المدنية والثقيلة والهندسة والنفط والغاز وإعادة التدوير والهدم.",
		"about.story2": "تأسّس فريقنا لمواجهة التحديات التي يواجهها قطاع الإنشاءات في مجالات الأعمال الترابية والمعدات الثقيلة وتوريد المواد والنقل والخدمات اللوجستية. واليوم ندعم مشاريع البنية التحتية والتجارية والصناعية في مختلف أنحاء الإمارات، بصفتنا مقاول إنشاء طرق وأعمال ترابية مقرّه دبي.",
		"about.story3": "نملك أحد أكبر أساطيل معدات الحفر الثقيل في دبي — حفارات وجرافات وحفارات خوازيق وكسّارات صخور ومعدات متخصصة — لتُنجَز المشاريع بسرعة وفاعلية وأمان. وبصفتنا مقاولاً معتمداً لدى هيئة الطرق والمواصلات، فإن الامتثال مبنيّ في كل ما ننفّذه.",
		"about.photoAlt": "فريق إيرث موفرز إنترناشيونال ومعداته أثناء العمل",
		"about.milestones": "محطات",
		"about.milestonesTitle": "الطريق حتى الآن.",
		"about.directionEyebrow": "الاتجاه",
		"about.directionTitle": "الرسالة والرؤية",
		"about.vision": "رؤيتنا أن تصبح إيرث موفرز إنترناشيونال علامة عالمية في مجال الأعمال الترابية ومعدات وخدمات الإنشاءات الثقيلة.",
		"about.mission": "ورسالتنا أبسط من ذلك: تسليم أرض عملية جاهزة للبناء — بأمان وفي موعدها ووفق المواصفات — ليبني كل عميل بثقة على ما نسلّمه.",
		"about.valuesEyebrow": "قيمنا",
		"about.valuesTitle": "قواعد راسخة.",
		"about.seeServices": "اطّلع على خدماتنا",
		"about.ctaTitle": "ابنِ على أرض صلبة.",
		"about.ctaText": "تحدّث إلى الفريق الذي يحرّك الأرض منذ عام 1990.",
		"proj.eyebrow": "مشاريعنا",
		"proj.title": "مختارات من أعمالنا في الإمارات.",
		"proj.lead": "من الجهات الحكومية إلى العملاء من القطاع الخاص — سجلّ مبني على السلامة والجودة ورضا العميل.",
		"proj.all": "الكل",
		"proj.year": "السنة",
		"proj.value": "القيمة",
		"proj.delivered": "مُسلَّم",
		"proj.whereEyebrow": "أين نعمل",
		"proj.whereTitle": "القطاعات التي نخدمها.",
		"proj.galleryEyebrow": "معرض المواقع",
		"proj.galleryTitle": "الأماكن التي تقف خلف أعمالنا.",
		"proj.ctaTitle": "مشروعك، التالي على هذه الصفحة.",
		"proj.ctaText": "من عمليات نقل بقيمة 0.3 مليون درهم إلى تجديد طرق بملايين الدراهم — كل نطاق يحصل على المستوى نفسه من التنفيذ.",
		"ct.reachEyebrow": "تواصل مباشر",
		"ct.callLabel": "اتصل بالمكتب",
		"ct.callNote": "أسرع وسيلة — نردّ خلال ساعات العمل",
		"ct.emailLabel": "راسلنا بالبريد",
		"ct.emailNote": "الأنسب لإرسال المخططات وجداول الكميات",
		"ct.officeNote": "الزيارة بموعد مسبق",
		"ct.formEyebrow": "أرسل نطاق عملك",
		"ct.formTitle": "أخبرنا بما تريد تنفيذه.",
		"ct.formLead": "ثلاث معلومات وسطر واحد عن العمل تكفي للبدء. نُسعّر النطاق الفعلي، وعند الحاجة نعاين الموقع معك أولاً.",
		"ct.need": "ما الذي تحتاجه؟",
		"ct.needPlaceholder": "اختر الخدمة",
		"ct.notSure": "لست متأكداً — أرجو المشورة",
		"ct.optional": "اختياري",
		"ct.detailsHint": "الموقع والكميات التقريبية والمواعيد المستهدفة، إن توفّرت.",
		"ct.noteBefore": "الإرسال يفتح تطبيق البريد لديك وقد عُبّئت الرسالة بالكامل، موجَّهة إلى {email}. لا يُرسَل شيء إلى هذا الموقع.",
		"ct.mapEyebrow": "موقعنا",
		"ct.mapHeading": "الخليج التجاري، دبي.",
		"ct.eyebrow": "تواصل معنا",
		"ct.title": "لنعاين موقعك.",
		"ct.lead": "اتصل أو راسلنا أو زُرنا — أخبرنا عن نطاق عملك ونعود إليك بخطة واضحة وسعر صادق.",
		"ct.phone": "الهاتف",
		"ct.email": "البريد الإلكتروني",
		"ct.office": "المكتب",
		"ct.hours": "ساعات العمل",
		"ct.hoursValue": "الاثنين – السبت، 8:00 – 18:00",
		"ct.hoursSite": "العمليات في المواقع: على مدار الساعة",
		"ct.name": "الاسم",
		"ct.namePlaceholder": "اسمك",
		"ct.phonePlaceholder": "+971 …",
		"ct.emailPlaceholder": "you@company.com",
		"ct.interest": "الخدمات محل الاهتمام",
		"ct.details": "تفاصيل المشروع",
		"ct.detailsPlaceholder": "الموقع ونطاق العمل والجدول الزمني — أي معلومات متاحة لديك.",
		"ct.send": "إرسال الطلب",
		"ct.note": "الإرسال يفتح تطبيق البريد لديك والرسالة موجَّهة إلى {email}.",
		"ct.subject": "طلب: {picked} — {name}",
		"ct.general": "استفسار عام",
		"ct.mapTitle": "إيرث موفرز إنترناشيونال — برج كابيتال الذهبي، الخليج التجاري، دبي",
		"nf.title": "هذه الأرض لم تُفتح بعد.",
		"nf.text": "الصفحة التي تبحث عنها غير موجودة — لكن بقية الموقع موجودة.",
		"nf.back": "العودة إلى الرئيسية"
	}
};
function translator(locale) {
	const table = UI[locale] || UI.en;
	return (key, vars) => {
		const raw = table[key] ?? UI.en[key] ?? key;
		if (!vars) return raw;
		return raw.replace(/\{(\w+)\}/g, (m, k) => k in vars ? String(vars[k]) : m);
	};
}
//#endregion
//#region src/data/service-content.js
var serviceContent = {
	excavation: {
		img: "/images/services/excavation.jpg",
		h1: "Excavation Contractor in the UAE",
		lead: "Bulk and detailed excavation for basements, foundations, services and infrastructure corridors — in sand, fill or hard rock.",
		caption: "Tracked excavator cutting to formation level through sand and caprock.",
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
		caption: "Backhoe placing surround material over a service trench.",
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
		caption: "Dozer pushing site-won material up to design level.",
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
		caption: "Motor graders trimming a formation to design level and crossfall.",
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
		caption: "Vibratory roller closing a formation before the base goes down.",
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
		caption: "Graders forming an access road ahead of the base layers.",
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
		caption: "Loader working an aggregate stockpile for road base.",
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
		caption: "Rollers closing a wearing course behind the paver.",
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
		caption: "Resurfacing a carriageway under half-width working.",
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
		caption: "Break-out and reinstatement at a utility crossing.",
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
		caption: "Surfacing an open parking area before kerbs and marking.",
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
		caption: "Setting out a hardstanding before the blocks are laid.",
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
		caption: "The finished edge — kerb line, channel and asphalt shoulder.",
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
		caption: "Lane markings and traffic management on a live carriageway.",
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
		caption: "Cones, barriers and signage set to an approved closure layout.",
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
		caption: "A signed diversion in place around a closed carriageway.",
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
		caption: "Traffic management maintained around works in a live road.",
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
		caption: "A new plot access tying into the public road.",
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
		caption: "Survey and setting out before excavating near live services.",
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
		caption: "An RTA-approved permit drawing for works in the road reserve.",
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
		caption: "Excavating a new route for a diverted service.",
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
		caption: "The drawing package prepared for authority and utility-owner approval.",
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
//#region src/data/service-content.ar.js
var serviceContentAr = {
	excavation: {
		h1: "مقاول حفريات في الإمارات",
		lead: "حفر كلي وتفصيلي للبدرومات والأساسات والخدمات وممرات البنية التحتية — في الرمل أو الردم أو الصخر الصلب.",
		caption: "حفارة مجنزرة تحفر حتى منسوب التأسيس في الرمل والطبقة الصخرية.",
		intro: "الحفر هو المرحلة التي يُكسب فيها البرنامج الزمني أو يُخسر. ننقل قطعة الأرض من مستواها القائم إلى منسوب تأسيس مرصود ومعتمَد باستخدام حفاراتنا وكسّاراتنا ولوادرنا وقلاباتنا — فتُسلَّم المنصة للمقاول التالي في الموعد الموعود، لا في الموعد الذي يتيحه مكتب تأجير معدات.",
		body: ["نادراً ما تتصرف الأرض في الإمارات بالطريقة نفسها مرتين. فقطع الأراضي الساحلية في دبي والشارقة رمل سائب فوق طبقة صخرية سطحية؛ ورأس الخيمة والفجيرة تضعانك في طبقات صلبة خلال الأمتار الأولى؛ والمواقع الصناعية القديمة تخفي ردماً غير مضبوط وبلاطات مدفونة وخدمات مهجورة. نقرأ التقرير الجيوتقني قبل التعبئة ونطابق المعدات عليه — أذرع طويلة حيث يلزم تراجع الميول، وكسّارات هيدروليكية حيث يرتفع خط الصخر مبكراً، ومعدات ضيقة حيث لا تترك الحدود مجالاً للميل.", "يُنفَّذ كل شيء بضبط مساحي، وتُراجَع المناسيب أثناء الحفر لا عند نهايته. وتُخطَّط الميول والمدرّجات وحماية الجوانب المؤقتة وفق التصميم؛ ويُصنَّف الناتج ويُحمَّل ويُنقَل ويُطرَح بموجب تصاريح بلدية مع الاحتفاظ بالإيصالات لملف المشروع. وحيث يعمل مقاولو نزح المياه أو الحوائط الساندة أو الخوازيق إلى جانبنا، يُتَّفق على التسلسل مسبقاً حتى لا تنتظر جبهة الحفر أحداً."],
		scope: [
			"حفر كلي حتى منسوب التأسيس للبدرومات والمنصات",
			"حفر تفصيلي للقواعد وهامات الخوازيق والجسور الأرضية والحُفَر",
			"حفر خنادق للتصريف ومجاري الكابلات والمياه",
			"تكسير الصخور وإزالة الطبقات الصلبة بالكسّارات الهيدروليكية",
			"الميول والمدرّجات وحماية الجوانب المؤقتة وفق التصميم",
			"التحميل والنقل والطرح والتخلص بموجب تصريح بلدي",
			"التوقيع المساحي ومراجعة المناسيب ومسح ما بعد الحفر"
		],
		specs: [
			["المعدات", "حفارات مجنزرة وكسّارات صخور هيدروليكية ولوادر ذات إطارات وقلابات ومقطورات"],
			["الاستخدامات", "البدرومات والأساسات وممرات الخدمات وحُفَر الخزانات وخنادق البنية التحتية"],
			["الضبط والتوثيق", "توقيع مساحي ومراجعة مناسيب الطبقات وإيصالات الطرح وسجلات ما بعد الحفر"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "هل تنفذون الحفر في الصخر؟",
				a: "نعم. الكسّارات الصخرية الهيدروليكية وحاملاتها عالية التدفق جزء من أسطولنا، وهو أمر مهم في مواقع رأس الخيمة والفجيرة حيث يرتفع خط الصخر بسرعة. ونُسعّر الصخر بشكل منفصل عن الحفر اللين حتى ترى بالضبط ما تكلّفه الأرض."
			},
			{
				q: "هل تتولون نقل ناتج الحفر والتخلص منه؟",
				a: "نعم. التحميل والنقل والطرح مشمولة، وتُنفَّذ بموجب تصريح الطرح البلدي المعني مع الاحتفاظ بالإيصالات. وحيث تكون المادة صالحة لإعادة الاستخدام كردم نُشير إلى ذلك في مرحلة العطاء — فإبقاؤها في الموقع عادةً أرخص من استيراد بديل لاحقاً."
			},
			{
				q: "هل يمكنكم العمل بالتوازي مع مقاول حوائط ساندة أو خوازيق؟",
				a: "بشكل اعتيادي. نتفق على تسلسل الحفر والوصول ونوافذ الرافعات مع فرق الحوائط الساندة والخوازيق ونزح المياه قبل التعبئة، فلا تعيق جبهة الحفر الأعمال المتخصصة ولا العكس."
			}
		]
	},
	"back-filling": {
		h1: "مقاول أعمال ردم في الإمارات",
		lead: "ردم إنشائي وردم حول الخدمات يُوضع على طبقات مضبوطة ومُختبَرة — العمل الذي يمنع ظهور الهبوط بعد عام.",
		caption: "لودر خلفي يضع مادة الغلاف فوق خندق خدمات.",
		intro: "يبدو الردم أبسط عملية في الموقع، وهو في الواقع أكثر مصادر العيوب طويلة الأمد. خندق يهبط بعد إعادة الحالة، ومحيط بدروم ينفصل عن الهيكل، وبلاطة تتشقق فوق مسار خدمة — كلها تعود غالباً إلى مادة أُلقيت دفعة واحدة بدل أن تُوضع وتُدمك على طبقات.",
		body: ["نردم بمواد معتمدة بسماكة الطبقة المحددة، مع الترطيب حتى المحتوى الرطوبي الأمثل ودمك كل طبقة قبل وضع التالية. وحول المنشآت يُرفع الردم بالتساوي من جميع الجهات حتى لا يُدفع شيء عن استقامته. وحول الخدمات تُوضع طبقة الفرش والغلاف يدوياً أو بصفيحة دمك خفيفة لحماية الأنبوب أو المجرى، وعندها فقط يُنقَل الدمك الآلي إلى ما فوقها.", "تُجرى اختبارات الكثافة الحقلية طبقة بطبقة وتُجمَّع نتائجها في سجلات الدمك التي يطلبها الاستشاري والجهة المختصة عند التسليم. وحيث يلزم ردم مستورد، نوفّر مادة حبيبية معتمدة بشهادات اختبار بدل أقرب مادة متاحة، لأن الشهادة هي ما يعتمد الطبقة."],
		scope: [
			"ردم إنشائي حول البدرومات والجدران الساندة والعبّارات وغرف التفتيش",
			"ردم الخنادق فوق خطوط التصريف والمياه والري والكابلات والمجاري",
			"فرش وغلاف الأنابيب والمجاري يدوياً أو بصفيحة دمك",
			"توريد ردم حبيبي مستورد معتمد بشهادات اختبار",
			"وضع الطبقات وترطيبها ودمكها حتى الكثافة المحددة",
			"اختبارات الكثافة الحقلية وسجلات الدمك للتسليم",
			"إعادة السطح العلوي — أسفلت أو إنترلوك أو تنسيق موقع"
		],
		specs: [
			["المعدات", "لوادر خلفية ولوادر ذات إطارات ومداحل ملساء وذات أقدام وصفائح دمك وصهاريج مياه"],
			["الاستخدامات", "محيط البدرومات وإعادة حالة الخنادق والعبّارات وغرف التفتيش والمنشآت الساندة"],
			["الضبط والتوثيق", "ضبط سماكة الطبقة والمحتوى الرطوبي واختبارات الكثافة الحقلية وشهادات الدمك"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "ما المادة التي تستخدمونها في الردم؟",
				a: "المادة الناتجة من الحفر حيث تكون صالحة ومعتمدة، وردم حبيبي مستورد حيث لا تكون كذلك. وفي الحالتين تُختبَر المادة وتُعتمَد قبل وضعها — فإعادة استخدام مادة الموقع لا تُعدّ توفيراً إلا إذا اجتازت الاختبار فعلاً."
			},
			{
				q: "هل تقدّمون نتائج اختبارات الدمك؟",
				a: "نعم. تُجرى اختبارات الكثافة الحقلية طبقة بطبقة وتُجمَّع النتائج في سجلات دمك تُسلَّم ضمن وثائق التسليم، وهي ما يطلبه الاستشاري والجهة المختصة عند التفتيش."
			},
			{
				q: "هل تعيدون السطح إلى حالته بعد الردم؟",
				a: "نعم. ولأننا ننفّذ كذلك أعمال طبقة الأساس والأسفلت والإنترلوك وأحجار الأرصفة، يمكن إنهاء إعادة حالة الخندق حتى السطح النهائي بمقاول واحد بدل تسليمها لمقاول ثانٍ."
			}
		]
	},
	"cut-and-fill": {
		h1: "مقاول أعمال قطع وردم في الإمارات",
		lead: "قطع وردم متوازن يصل بالموقع إلى المناسيب التصميمية مع إبقاء المواد في الموقع حيثما كانت صالحة.",
		caption: "جرافة تدفع مادة الموقع حتى المنسوب التصميمي.",
		intro: "القطع والردم عملية موازنة كميات قبل أن تكون عملية معدات. فكل متر مكعب تُصدّره ثم تعيد استيراده تدفع ثمنه مرتين، لذا أول ما نفعله هو نمذجة كميات الأعمال الترابية مقابل المناسيب التصميمية لمعرفة كم من القطع يمكن أن يصبح ردماً بشكل مشروع.",
		body: ["تنقل الجرافات والقاشطات الكتلة الأكبر، وتشذّب المسوّيات المقطع، وتدمك المداحل كل طبقة عند وضعها. ويحافظ التوجيه الآلي والمراجعة المساحية على السطح التصميمي عبر مساحات واسعة وخالية من المعالم — وهي المواقع التي يتحول فيها انحراف بضعة سنتيمترات على مئة متر إلى تصحيح مكلف عند مرحلة البلاطة.", "وحين لا يتوازن القطع مع الردم نُخبرك بذلك في مرحلة العطاء لا بعد التعبئة، ومعه تكلفة النقل والطرح أو الاستيراد التي تسدّ الفارق. وتُدرَج مواقع أكوام التخزين ومسارات النقل وضبط الغبار في مخطط الموقع حتى لا تخنق العملية وصولها ولا تستدعي مخالفة بلدية."],
		scope: [
			"موازنة كميات الأعمال الترابية مقابل المناسيب التصميمية قبل التعبئة",
			"القطع الكلي بالجرافات والحفارات ولوادر التحميل",
			"وضع الردم الناتج من الموقع على طبقات مضبوطة ومدموكة",
			"التشذيب حتى المقطع التصميمي بالمسوّيات والتوجيه الآلي",
			"إدارة أكوام التخزين وتشكيل طرق النقل وضبط الغبار",
			"استيراد ردم معتمد أو تصدير الفائض حسبما تقتضيه الموازنة",
			"الضبط المساحي وسجلات المناسيب المنفَّذة في كل مرحلة"
		],
		specs: [
			["المعدات", "جرافات مجنزرة وحفارات مجنزرة ولوادر ذات إطارات ومسوّيات ومداحل هزّازة وصهاريج مياه"],
			["الاستخدامات", "منصات قطع الأراضي والساحات الصناعية ومنسوب تأسيس الطرق والمواقع المدرّجة"],
			["الضبط والتوثيق", "نموذج موازنة الكميات والتوجيه الآلي ومراجعة المناسيب واختبار الطبقات"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "كيف تخفّضون تكاليف النقل في أعمال القطع والردم؟",
				a: "بموازنة الأعمال الترابية قبل أن تتحرك أي معدة. فالمادة الصالحة لإعادة الاستخدام كردم تبقى في الموقع، وهو ما يلغي رسوم الطرح ورسوم الاستيراد معاً. ونُظهر الموازنة في العطاء ليكون الافتراض واضحاً لا مدفوناً داخل سعر بند."
			},
			{
				q: "هل تعملون وفق نموذج توجيه آلي؟",
				a: "نعم. حيث يصدر سطح تصميمي نعمل بالضبط المساحي والتوجيه الآلي، وهو يحافظ على السماحية أفضل بكثير من العمل بالنظر والخيط في المساحات المفتوحة، ويقلّل أعمال التصحيح عند منسوب التأسيس."
			},
			{
				q: "هل تتولون ضبط الغبار وطرق النقل؟",
				a: "نعم. تُدرَج صهاريج المياه وتشكيل مسارات النقل ومواقع أكوام التخزين في مخطط الموقع منذ البداية، لأن شكاوى الغبار وإعاقة الوصول توقف عملية الأعمال الترابية أسرع من أعطال المعدات."
			}
		]
	},
	leveling: {
		h1: "مقاول تسوية وتمهيد أراضٍ في الإمارات",
		lead: "تمهيد وتسوية دقيقة حتى المناسيب والميول التصميمية — مناسيب التأسيس ومنصات البلاطات والساحات ومناطق التخزين.",
		caption: "مسوّيات تشذّب منسوب التأسيس حتى المنسوب والميل العرضي التصميميين.",
		intro: "التسوية والتمهيد آخر عملية ترابية قبل أن يُبنى فوقها شيء دائم، ولذلك تكون السماحية هنا أهم منها في أي مرحلة أخرى. فمنسوب تأسيس يزيد أو ينقص بضعة سنتيمترات يُدفع ثمنه مرة أخرى في طبقة أساس إضافية أو أسفلت إضافي أو خرسانة نظافة إضافية.",
		body: ["تحافظ المسوّيات ذات الشفرات الموجَّهة بالأقمار الاصطناعية على السطح التصميمي عبر مساحات واسعة، مع مراجعة مساحية تُؤخذ على شبكة نقاط لا على بضع نقاط مريحة. وتُضبط الميول وفق تصميم التصريف ليغادر الماء المنصة من حيث تقول المخططات — فالساحة التي يتجمع فيها الماء عيب تسوية لا عيب تصريف.", "نُمهّد حتى منسوب التأسيس للطرق والأرصفة، وحتى منسوب المنصة للبلاطات والمباني، وحتى المنسوب النهائي للساحات ومناطق التخزين والأرضيات المكشوفة. وحيث يحمل السطح حركة قبل بدء الإنشاء، يُدمك المنسوب المُمهَّد ويُغلَق ليصمد أمام حركة الموقع بدل أن يتخدّد في الأسبوع الأول."],
		scope: [
			"التمهيد حتى منسوب التأسيس للطرق والأرصفة والأرضيات الصلبة",
			"تسوية دقيقة لمنصات البلاطات والمباني حتى المنسوب التصميمي",
			"ضبط الميول الطولية والعرضية وفق تصميم التصريف",
			"التشذيب والتحديد وتشكيل الساحات ومناطق التخزين",
			"ضبط الشفرة بالتوجيه الآلي وأنظمة الأقمار الاصطناعية في المساحات المفتوحة",
			"مراجعة مساحية على شبكة نقاط مع كشوف مناسيب موثّقة",
			"دمك وإغلاق السطح المُمهَّد لمقاومة حركة الموقع"
		],
		specs: [
			["المعدات", "مسوّيات بضبط شفرة ومداحل هزّازة وحفارات مجنزرة وبعجل وصهاريج مياه"],
			["الاستخدامات", "منسوب تأسيس الطرق ومنصات البلاطات والساحات الصناعية ومناطق التخزين وتربة المواقف"],
			["الضبط والتوثيق", "مسح بالمحطة المتكاملة والأقمار الاصطناعية وكشوف مناسيب شبكية ومراجعة السماحية قبل الاعتماد"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "ما السماحية التي تعملون ضمنها في التسوية؟",
				a: "السماحية المنصوص عليها في المواصفة للطبقة المعنية — فمنسوب التأسيس وطبقة ما تحت الأساس والأسطح النهائية لكلٍّ سماحيته. وتُراجَع المناسيب على شبكة مساحية وتُوثَّق، فيكون الاعتماد مبنياً على دليل لا على جولة ميدانية."
			},
			{
				q: "هل يمكنكم تسوية موقع سبق أن ردمه مقاول آخر؟",
				a: "نعم، لكننا نمسح السطح القائم أولاً. فإذا لم يكن الردم أسفله قد وُضع على طبقات مُختبَرة، فإن تمهيد سطحه يخفي المشكلة فقط — وسنقول ذلك ونُسعّر التصحيح بدل تجميل الوضع."
			},
			{
				q: "هل تضبطون ميول التصريف؟",
				a: "نعم. تُضبط الميول العرضية والطولية وفق تصميم التصريف وتُراجَع قبل اعتماد السطح، ليصرّف السطح إلى المصافي والمجاري بدل تجمّع الماء في وسطه."
			}
		]
	},
	compaction: {
		h1: "مقاول أعمال دمك في الإمارات",
		lead: "دمك طبقة بطبقة بالمدحلة المناسبة للمادة، مدعوماً باختبارات الكثافة الحقلية وشهادات الدمك.",
		caption: "مدحلة هزّازة تُغلق منسوب التأسيس قبل فرش طبقة الأساس.",
		intro: "الدمك هو الجزء الذي يختفي عن العين حين ينتهي، ويصبح مكلفاً حين يكون خاطئاً. فكل ما فوقه — طبقة الأساس والأسفلت والبلاطات وأحجار الأرصفة — يعتمد على منصة بلغت الكثافة المحددة على طبقات مضبوطة، وبنتائج يقبلها الاستشاري فعلاً.",
		body: ["المدحلة يجب أن تناسب المادة: مداحل هزّازة ملساء للمواد الحبيبية وطبقة ما تحت الأساس، ومداحل ذات أقدام للمواد المتماسكة، وصفائح دمك ومداحل خنادق في الأماكن الضيقة وحول الخدمات. وتُضبط سماكة الطبقة على ما تستطيع المعدات دمكه فعلاً لا على ما يسهل فرشه، وتُرفع الرطوبة إلى الحد الأمثل بالصهاريج قبل بدء الدحل.", "تُؤخذ اختبارات الكثافة الحقلية طبقة بطبقة وتُصدَر كسجلات دمك ضمن حزمة التسليم. وحين ترسب طبقة، تُعاد معالجتها وتُختبَر من جديد بدل تغطيتها — عادة تكلّف بعد ظهيرة وتوفّر إعادة بناء كاملة."],
		scope: [
			"دمك الردم والتربة الطبيعية وطبقة ما تحت الأساس على طبقات مضبوطة",
			"اختيار نوع المدحلة بما يناسب المواد الحبيبية أو المتماسكة",
			"تهيئة الرطوبة حتى المحتوى الأمثل بصهاريج المياه",
			"الدمك في الأماكن الضيقة بصفائح الدمك ومداحل الخنادق",
			"الدحل الاختباري لمنسوب التأسيس قبل طبقة الأساس أو التبليط",
			"اختبارات الكثافة الحقلية طبقة بطبقة مع إعادة المعالجة عند الرسوب",
			"شهادات وسجلات دمك لاعتماد الاستشاري والجهة المختصة"
		],
		specs: [
			["المعدات", "مداحل هزّازة مفردة ومزدوجة ومداحل ذات أقدام ومداحل إطارات هوائية وصفائح دمك وصهاريج مياه"],
			["الاستخدامات", "منسوب تأسيس الطرق وطبقة ما تحت الأساس والردم الإنشائي وإعادة حالة الخنادق وتربة الساحات"],
			["الضبط والتوثيق", "ضبط سماكة الطبقة والرطوبة واختبارات الكثافة الحقلية وشهادات الدمك"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "إلى أي كثافة تدمكون؟",
				a: "إلى النسبة المئوية من الكثافة الجافة القصوى المنصوص عليها في مواصفة المشروع لتلك الطبقة — وهي عادة أعلى لطبقة ما تحت الأساس تحت الطريق منها للردم العام. ويُتَّفق على المستهدف قبل البدء ويُختبَر مع وضع الطبقات."
			},
			{
				q: "هل توفّرون شهادات اختبار الدمك؟",
				a: "نعم. تُجرى اختبارات الكثافة الحقلية عبر مختبر معتمد وتُصدَر الشهادات ضمن وثائق التسليم، وهي ما تطلبه الجهة المختصة والاستشاري عند التفتيش."
			},
			{
				q: "هل يمكنكم الدمك في الأماكن الضيقة وحول الخدمات؟",
				a: "نعم. تُستخدم مداحل الخنادق وصفائح الدمك حيث لا تصل المدحلة الكاملة أو حيث قد تُلحق ضرراً بخدمة قائمة، مع دمك طبقة الفرش والغلاف يدوياً قبل نقل الدمك الآلي إلى ما فوقها."
			}
		]
	},
	"access-roads": {
		h1: "مقاول طرق وصول في الإمارات",
		lead: "طرق وصول مؤقتة ودائمة إلى قطع الأراضي والمواقع والمصانع والمنشآت البعيدة — مصمَّمة للأحمال التي ستستخدمها فعلاً.",
		caption: "مسوّيات تشكّل طريق وصول قبل فرش طبقات الأساس.",
		intro: "طريق الوصول أول ما يحتاجه المشروع وآخر ما تُرصد له ميزانية صحيحة. فالتوريدات التي لا تصل إلى قطعة الأرض، والمقطورات المنخفضة العالقة عند الحدود، ومسار نقل يتحول إلى أخاديد بعد أول مطر — كلها تكلّف أكثر من بناء الطريق بشكل صحيح من البداية.",
		body: ["نبني طرق الوصول كرصف كامل لا كمسار مُمهَّد: منسوب تأسيس، وطبقة ما تحت الأساس مدموكة، وطبقة أساس، وسطح مصمَّم لأحمال المحاور التي سيحملها المسار. وبالنسبة لطريق وصول إنشائي سيُستبدل لاحقاً، قد يكون ذلك طبقة أساس مدموكة بطبقة إغلاق بيتومينية. أما لطريق مصنع أو منشأة دائم، فهو رصف مصمَّم بأحجار أرصفة وميول تصريف وتخطيط أرضي.", "تُضبط الاستقامة وأنصاف أقطار الدوران والميول للمركبات التي ستستخدم الطريق فعلاً — فالمقطورات المنخفضة وخلاطات الخرسانة والصهاريج ومقطورات الحاويات تحتاج هندسة لا تحتاجها السيارة. وحيث يرتبط الطريق بطريق عام، تكون الوصلة مسألة اعتماد مداخل ومخارج لدى هيئة الطرق والمواصلات أو موافقة بلدية، ونتولى سلسلة التصاريح تلك ضمن الحزمة نفسها."],
		scope: [
			"مسح المسار وضبط الاستقامة والميول لحركة المركبات الثقيلة",
			"التنظيف وتشكيل منسوب التأسيس وتجهيز التربة الطبيعية المدموكة",
			"فرش طبقة ما تحت الأساس وطبقة الأساس وترطيبها ودمكها",
			"سطح أسفلتي أو طبقة إغلاق بيتومينية بحسب عمر الطريق المطلوب",
			"ميول التصريف والعبّارات والمصارف الجانبية حيث يتطلبها المسار",
			"أحجار الأرصفة وحماية الحواف ومناطق الدوران للمركبات الثقيلة",
			"الربط مع الطريق العام باعتماد هيئة الطرق والمواصلات أو البلدية"
		],
		specs: [
			["المعدات", "حفارات وجرافات ومسوّيات ولوادر ومداحل وفرّادات وقلابات وصهاريج مياه"],
			["الاستخدامات", "وصول مواقع الإنشاء ومداخل قطع الأراضي وطرق المصانع ومسارات النقل وطرق المنشآت البعيدة"],
			["الضبط والتوثيق", "الاستقامة المساحية واختبارات سماكة الطبقات وكثافتها ومراجعة مناسيب السطح"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "هل يمكنكم بناء طريق وصول مؤقت بسرعة؟",
				a: "نعم. طريق وصول بطبقة أساس مدموكة وطبقة إغلاق بيتومينية يمكن تنفيذه بتعبئة قصيرة، وهو عادةً الحل الصحيح لمسار سيُحفر مجدداً لاحقاً. وسنخبرك متى يكون الطريق المؤقت اقتصاداً زائفاً بالنسبة للحركة التي وصفتها."
			},
			{
				q: "هل تتولون الربط مع الطريق الرئيسي؟",
				a: "نعم. حيث يرتبط الوصول بطريق تابع لهيئة الطرق والمواصلات فهو حزمة أعمال مداخل ومخارج، ونحن معتمدون لدى الهيئة لتنفيذها، بما يشمل المخططات والتصريح وإعادة الحالة. وعلى الطرق البلدية نتولى الموافقة المكافئة."
			},
			{
				q: "هل يتحمل طريق الوصول المقطورات المنخفضة وخلاطات الخرسانة؟",
				a: "هذا ما صُمِّم من أجله. تُضبط سماكة الرصف وأنصاف أقطار الدوران والميول لأثقل مركبة في جدول توريداتك لا لمقطع حركة خفيفة نمطي."
			}
		]
	},
	"road-base-laying": {
		h1: "مقاول فرش طبقة الأساس في الإمارات",
		lead: "توريد وفرش وترطيب ودمك طبقة ما تحت الأساس وطبقة الأساس بالسماكة والكثافة المحددتين.",
		caption: "لودر يعمل على كومة ركام مخصصة لطبقة الأساس.",
		intro: "طبقة الأساس هي التي تقرّر عمر الطريق. فالأسفلت طبقة تآكل لا هيكل إنشائي — وإذا كانت الطبقة تحته ناقصة الدمك أو سيئة التدرّج أو مفروشة بسماكة خاطئة، فسيتشقق السطح ويتخدّد مهما كانت الخلطة جيدة.",
		body: ["نورّد ركاماً معتمداً بشهادات اختبار، ونفرشه بسماكة طبقة مضبوطة، ونهيّئه حتى المحتوى الرطوبي الأمثل، وندمكه حتى الكثافة المحددة. وتُرصد المناسيب مساحياً قبل كل طبقة وبعدها، وتُجرى اختبارات الكثافة الحقلية لكل طبقة لا مرة واحدة في الأعلى. والدحل الاختباري قبل التبليط يكشف المواضع اللينة وهي ما تزال رخيصة الإصلاح.", "والتدرّج لا يقل أهمية عن الدمك. فالمادة التي تنفصل حبيباتها أثناء التفريغ أو الفرش تعطي طبقة تنجح في موضع وترسب في آخر، لذلك تُدار أكوام التخزين والنقل والفرش لإبقاء الركام متجانساً من المحجر حتى الشفرة."],
		scope: [
			"توريد ركام معتمد لطبقة ما تحت الأساس وطبقة الأساس بشهادات اختبار",
			"تجهيز التربة الطبيعية والدحل الاختباري قبل فرش طبقة الأساس",
			"الفرش بسماكة طبقة مضبوطة بالمسوّية أو الفرّادة",
			"تهيئة الرطوبة بصهاريج المياه حتى المحتوى الأمثل",
			"الدمك حتى الكثافة المحددة بمداحل هزّازة وإطارات هوائية",
			"اختبارات كثافة حقلية طبقة بطبقة ومسح للمناسيب",
			"الدحل الاختباري وتسليم منسوب جاهز للأسفلت أو الإنترلوك"
		],
		specs: [
			["المعدات", "مسوّيات ولوادر ذات إطارات وقلابات ومداحل هزّازة وإطارات هوائية وصهاريج مياه"],
			["الاستخدامات", "أرصفة الطرق والطرق السريعة والمواقف والساحات الصناعية وأرضيات الحاويات وطرق الوصول"],
			["الضبط والتوثيق", "شهادات اختبار الركام وضبط سماكة الطبقة واختبارات الكثافة الحقلية ومسح مناسيب السطح"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "ما سماكة طبقة الأساس التي تفرشونها؟",
				a: "ما يتطلبه تصميم الرصف، مبنياً على طبقات تستطيع معدات الدمك بلوغ الكثافة خلالها فعلاً. وحين يطلب التصميم طبقة واحدة سميكة نُشير إلى ذلك، لأن الطبقة التي لا يمكن اختبارها مشكلة عند التفتيش."
			},
			{
				q: "هل تورّدون الركام إضافة إلى فرشه؟",
				a: "نعم. نورّد مواد طبقة ما تحت الأساس وطبقة الأساس المعتمدة بشهادات اختبار من مصادر مرخّصة، أو نعمل مع مورّد يسميه العميل إذا كانت المادة متعاقداً عليها مسبقاً."
			},
			{
				q: "كيف تثبتون أن طبقة الأساس مقبولة قبل الأسفلت؟",
				a: "باختبارات كثافة حقلية طبقة بطبقة، ومسح لمناسيب الطبقة المنتهية، ودحل اختباري بمركبة محمّلة لكشف المواضع اللينة. وتُوثَّق الثلاثة وتُسلَّم قبل بدء التبليط."
			}
		]
	},
	"asphalt-works": {
		h1: "مقاول أسفلت في الإمارات",
		lead: "أسفلت طبقة الرابطة والطبقة السطحية يُفرَش بالفرّادة وفق السماكة ودرجة الحرارة وتفصيل الوصلات المحددة، من خلطات محطات معتمدة.",
		caption: "مداحل تُغلق الطبقة السطحية خلف الفرّادة.",
		intro: "الأسفلت لا يسامح في درجة الحرارة ولا في الوصلات. فخلطة تصل باردة، أو وصلة لم تُقصّ وتُلصَّق بشكل صحيح، أو دحل بدأ متأخراً — كلها تظهر تفتّتاً وتشققاً خلال موسم واحد، غالباً بعد انتهاء فترة الصيانة مباشرة.",
		body: ["نفرش طبقة الرابطة والطبقة السطحية بالفرّادة وفق السماكة المحددة، من خلطات معتمدة في محطات مرخّصة مع تسجيل درجات حرارة التوريد. وتُطبَّق طبقتا التأسيس والتلصيق بالمعدلات الصحيحة، وتُقَصّ الوصلات الطولية والعرضية وتُلصَّق، ويُضبط نمط الدحل لبلوغ الكثافة والفرشة ما تزال ضمن نافذة حرارتها.", "وفي أعمال إعادة الطبقة السطحية وإعادة البناء، تُكشط الأسطح القائمة حتى المقطع المطلوب، وتُقَصّ الحواف بالمنشار، وتُراجَع المناسيب ليرتبط السطح الجديد دون حافة بارزة. وبصفتنا مقاول طرق معتمداً لدى هيئة الطرق والمواصلات، ننفّذ وفق مواصفة الجهة المختصة على الطرق العامة، مع توثيق اعتمادات المواد والاختبارات ونتائج العينات الأسطوانية أثناء العمل لا بعده."],
		scope: [
			"تطبيق طبقة التأسيس وطبقة التلصيق بالمعدلات المحددة",
			"فرش طبقة الرابطة والطبقة السطحية بالفرّادة",
			"كشط وتقشير الأسفلت القائم حتى المقطع المطلوب",
			"تجهيز الوصلات الطولية والعرضية وإغلاقها",
			"الدحل حتى الكثافة المحددة ضمن نافذة حرارة الخلطة",
			"اختبار العينات الأسطوانية ومراجعة السماكة ومسح انتظام السطح",
			"إعادة الحالة حول غرف التفتيش والمصافي وعبور الخدمات"
		],
		specs: [
			["المعدات", "فرّادات أسفلت ومداحل مزدوجة وإطارات هوائية وآلات كشط ورشّاشات بيتومين وقلابات"],
			["الاستخدامات", "الطرق والطرق السريعة والطرق الداخلية والمواقف والساحات الصناعية وإعادة الطبقة السطحية وإعادة البناء"],
			["الضبط والتوثيق", "خلطات محطات معتمدة وسجلات حرارة التوريد واختبارات الكثافة والعينات ومسح المناسيب والانتظام"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "هل أنتم مقاول أسفلت معتمد لطرق هيئة الطرق والمواصلات؟",
				a: "نعم. نحن مقاول طرق معتمد لدى هيئة الطرق والمواصلات وننفّذ وفق مواصفة الجهة المختصة على الطرق العامة، بما يشمل اعتمادات المواد ومنظومة الاختبارات والتوثيق الذي يتطلبه الاعتماد."
			},
			{
				q: "هل يمكنكم العمل ليلاً لتفادي إغلاق الطريق نهاراً؟",
				a: "نعم، وعلى طرق هيئة الطرق والمواصلات الحيّة يكون العمل الليلي عادةً النافذة الوحيدة المسموح بها. ونُعِدّ مخططات التحويل المروري ونستخرج تصريح إغلاق المسار أو الطريق ضمن الحزمة نفسها."
			},
			{
				q: "هل تنفذون إعادة الطبقة السطحية فوق سطح قائم؟",
				a: "نعم — كشط حتى المقطع، وقصّ الحواف بالمنشار، وطبقة تلصيق، ثم الطبقة الجديدة، مع مراجعة المناسيب ليرتبط السطح بأحجار الأرصفة والمصافي والمقاطع المجاورة دون حافة بارزة."
			}
		]
	},
	"road-maintenance": {
		h1: "مقاول صيانة طرق في الإمارات",
		lead: "صيانة مُبرمَجة وطارئة للطرق الداخلية والمناطق الصناعية وشبكات المجمعات — مُجدوَلة لإبقاء الشبكة مفتوحة.",
		caption: "إعادة الطبقة السطحية لمسار مع العمل بنصف العرض.",
		intro: "صيانة الطرق مسألة جدولة بقدر ما هي مسألة تنفيذ. فالأعمال نفسها مباشرة؛ لكن إنجازها دون إغلاق المنطقة أو تعطيل رصيف تحميل أو عزل السكان هو ما يفرّق بين مقاول صيانة ومقاول تبليط.",
		body: ["نمسح الشبكة ونصنّف العيوب ونضع لها برنامجاً، فيذهب الإنفاق إلى المقاطع المتدهورة فعلاً لا إلى المقاطع الأسهل وصولاً. وسدّ الشقوق وإصلاح الحواف مبكراً جزء يسير من كلفة إعادة البناء لاحقاً، ومسح الحالة يقدّم هذه الحجة بالدليل لا بالرأي.", "ويُقسَّم العمل ويُرتَّب للحفاظ على الوصول طوال المدة — عمل بنصف عرض الطريق، ومناوبات ليلية، وتحويلات مؤقتة، وتسليم على مراحل. وعلى الطرق العامة يتولى فريقنا إدارة المرور والتصاريح؛ وفي المجمعات الخاصة ننسّق مع إدارة المرافق والسكان حتى لا يكتشف أحد الإغلاق صباح يوم بدئه."],
		scope: [
			"مسح الحالة وتصنيف العيوب على مستوى الشبكة",
			"إعادة الطبقة السطحية وإعادة البناء الموضعي",
			"سدّ الشقوق وإصلاح الحواف ومعالجة الوصلات",
			"إصلاح الحفر والهبوط، بما في ذلك إخفاقات إعادة حالة الخنادق",
			"تنظيف وإصلاح المصافي والمجاري وشبكة التصريف",
			"تجديد أحجار الأرصفة والمجاري والتخطيط الأرضي",
			"برمجة مرحلية مع إدارة المرور لإبقاء الشبكة مفتوحة"
		],
		specs: [
			["المعدات", "آلات كشط وفرّادات ومداحل مزدوجة ومناشير قصّ ومعدات شفط وتنظيف ووحدات إدارة مرور"],
			["الاستخدامات", "المناطق الصناعية وشبكات المجمعات السكنية وطرق المصانع والمستودعات وشبكات المواقف"],
			["الضبط والتوثيق", "سجلات مسح الحالة وبرنامج صيانة مرتَّب بالأولوية وتسليم مرحلي مع إدارة المرور"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "هل يمكنكم صيانة شبكة طرق دون إغلاقها؟",
				a: "في معظم الحالات نعم، بالعمل بنصف العرض أو ليلاً أو بمقاطع مرحلية مع تحويلات مؤقتة. ويُتَّفق على التسلسل قبل التعبئة ليعرف المستأجرون والسكان وجهات التوريد ما الذي يحدث ومتى."
			},
			{
				q: "هل تقدّمون مسح حالة قبل التسعير؟",
				a: "نعم. مسح العيوب وتصنيفها أولاً يوجّه الميزانية إلى المقاطع المتدهورة فعلاً، ويمنحك مبرراً قابلاً للدفاع عن الإنفاق بدل مبلغ إجمالي بلا أساس."
			},
			{
				q: "هل تتعاملون مع البلاغات الطارئة إضافة إلى الأعمال المبرمجة؟",
				a: "نعم. الإصلاحات الطارئة — الحفر، والهبوط فوق خندق خدمة، وإعادة حالة فاشلة — يمكن تشغيلها إلى جانب برنامج صيانة مبرمَج ضمن الترتيب نفسه."
			}
		]
	},
	"asphalt-patch-works": {
		h1: "مقاول ترقيع أسفلت في الإمارات",
		lead: "قصّ بالمنشار وتكسير وإعادة تنفيذ ودمك — ترقيع يُنفَّذ بأصوله حتى لا تفشل الوصلة في الموسم الأول.",
		caption: "تكسير وإعادة حالة عند نقطة عبور خدمات.",
		intro: "معظم الترقيعات الفاشلة تفشل عند الحافة. فتكسير غير منتظم، وعدم تلصيق الوجه الرأسي، وردم لم يُدمك أصلاً، تعطيك رقعة تهبط وتنفتح عند الوصلة وتُدخل الماء إلى الطبقات التي كنت تحاول حمايتها.",
		body: ["نقصّ المحيط بالمنشار ليصبح مستطيلاً نظيفاً، ونكسّر حتى المادة السليمة، ثم نعيد بناء الطبقات بأصولها — طبقة أساس مدموكة، وطبقة تلصيق على كل وجه، وأسفلت على طبقات مدحولة حتى الكثافة. وتُغلق الوصلة لتكون الرقعة مانعة للماء، ويأتي السطح النهائي مستوياً مع الطريق المحيط لا بارزاً ولا غائراً.", "والترقيع يُطلب غالباً بعد عبور خدمة، أو إعادة حالة خندق هبطت، أو انهيار موضعي فوق موضع لين. وفي كل حالة نبحث في سبب الانهيار — فإصلاح السطح فوق طبقة أساس ما تزال تنهار لا يشتري سوى بضعة أشهر."],
		scope: [
			"القصّ بالمنشار حتى محيط نظيف ومستقيم",
			"تكسير وإزالة المادة المنهارة حتى طبقة الأساس السليمة",
			"إصلاح طبقة الأساس واستبدالها ودمكها حيث يمتد الانهيار عميقاً",
			"طبقة تلصيق على جميع الأوجه الرأسية وعلى طبقة الأساس المهيَّأة",
			"إعادة الأسفلت على طبقات مدحولة حتى الكثافة المحددة",
			"إغلاق الوصلة وإنهاء السطح مستوياً مع محيطه",
			"إعادة حالة خنادق الخدمات وعبورها وفق معايير الجهة المختصة"
		],
		specs: [
			["المعدات", "مناشير طرق وكسّارات وحفارات صغيرة وصفائح دمك ومداحل خنادق ومداحل مزدوجة وصناديق حفظ حرارة"],
			["الاستخدامات", "إعادة حالة عبور الخدمات وإصلاح الخنادق وإصلاح الحفر والهبوط وترقيع المواقف والطرق الداخلية"],
			["الضبط والتوثيق", "التكسير حتى المادة السليمة واختبار دمك الطبقات ومراجعة استواء السطح وإغلاق الوصلات"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "لماذا تستمر الترقيعات في الفشل على طريقنا؟",
				a: "عادةً لأن التكسير لم يصل إلى المادة السليمة، أو لأن الأوجه الرأسية لم تُلصَّق، أو لأن طبقة الأساس تحت الرقعة لم تُصلَح أصلاً. فالرقعة بجودة الطبقة التي تجلس عليها، ولذلك نفحص طبقة الأساس بدل استبدال السطح فقط."
			},
			{
				q: "هل يمكن الترقيع والطريق ما يزال مستخدماً؟",
				a: "نعم. يُنفَّذ الترقيع عادةً تحت إغلاق مسار أو بالعمل بنصف العرض، ويتولى فريقنا إدارة المرور، وعلى طرق هيئة الطرق والمواصلات تصريح الإغلاق كذلك."
			},
			{
				q: "متى يمكن إعادة فتح المقطع المُرقَّع؟",
				a: "بعد أن يبرد الأسفلت بالقدر الكافي ويُدحل حتى الكثافة — عادةً ضمن المناوبة نفسها لرقعة اعتيادية. والعمل الليلي يتيح إصلاح المقطع وتسليمه قبل ذروة الصباح."
			}
		]
	},
	parkings: {
		h1: "مقاول إنشاء مواقف سيارات في الإمارات",
		lead: "مواقف متكاملة من التربة الطبيعية حتى التخطيط الأرضي — طبقة أساس وسطح وأحجار أرصفة وميول تصريف ومواقف ولوحات.",
		caption: "تنفيذ الطبقة السطحية لموقف مكشوف قبل أحجار الأرصفة والتخطيط.",
		intro: "الموقف شبكة طرق مصغّرة بهندسة ضيقة وحواف كثيرة، وهو عادةً آخر حزمة في المشروع — ولهذا تحديداً ينتهي به الأمر مستعجلاً. فأبعاد المواقف وعروض الممرات ومواقف أصحاب الهمم والميول نحو المصافي، كلها يجب أن تستوفي معيار التخطيط المعتمد قبل اعتماد السطح.",
		body: ["ننفّذ الحزمة كاملة: تجهيز التربة الطبيعية، وطبقة أساس مدموكة، وسطح أسفلتي أو إنترلوك للأحمال الثقيلة، وأحجار أرصفة وفق تخطيط المواقف والجزر، وميول ومصافي تصريف، وصدّامات وأعمدة، وتخطيط المواقف وترقيمها وأسهم الاتجاه واللوحات. ولأن المقاول واحد، تصل الميول إلى المصافي فعلاً ويطابق التخطيط خطوط أحجار الأرصفة فعلاً.", "واختيار السطح يحكمه الاستخدام. فالأسفلت أسرع وأقل كلفة على المساحات المفتوحة الواسعة؛ والإنترلوك للأحمال الثقيلة أنسب حيث تدور المركبات في مكانها، أو حيث يُحتمل انسكاب الوقود والزيوت، أو حيث قد يلزم رفع مقاطع لاحقاً للوصول إلى خدمات تحتها."],
		scope: [
			"تجهيز التربة الطبيعية وطبقة ما تحت الأساس وطبقة الأساس وفق تصميم الرصف",
			"سطح أسفلتي أو تبليط إنترلوك للأحمال الثقيلة",
			"أحجار أرصفة وفق تخطيط المواقف والجزر والمحيط، مع الأحجار المنخفضة",
			"ميول التصريف والمصافي والمجاري الخطية",
			"تخطيط المواقف وترقيمها والأسهم والتظليل ومواقف أصحاب الهمم",
			"صدّامات وأعمدة وحواجز ولوحات إرشادية",
			"تخطيط وفق معايير المواقف المعتمدة ووثائق التسليم"
		],
		specs: [
			["المعدات", "مسوّيات ومداحل وفرّادات وفرق تبليط إنترلوك وفرق تركيب أحجار أرصفة ومعدات تخطيط"],
			["الاستخدامات", "مواقف المجمعات التجارية والتجزئة ومواقف سكن الموظفين والعمال ومواقف المستودعات والساحات ومواقف المجمعات السكنية"],
			["الضبط والتوثيق", "التخطيط وفق المعيار المعتمد ومسح المناسيب والميول واختبارات دمك الطبقات وتوقيع التخطيط الأرضي"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "أسفلت أم إنترلوك للموقف؟",
				a: "الأسفلت للمساحات المفتوحة الواسعة حيث تهمّ الكلفة والسرعة. والإنترلوك للأحمال الثقيلة حيث تدور المركبات في مكانها، أو يُحتمل الانسكاب، أو قد يلزم رفع مقاطع لاحقاً للوصول إلى خدمات — لأن الإنترلوك يُرفع ويُعاد فرشه دون أثر إصلاح ظاهر."
			},
			{
				q: "هل تخطّطون المواقف وفق المعيار المعتمد؟",
				a: "نعم. تُضبط أبعاد المواقف وعروض الممرات ومخصصات مواقف أصحاب الهمم واللوحات وفق معيار التخطيط المعتمد لدى الجهة المختصة، وهو ما سيُفتَّش الموقف على أساسه."
			},
			{
				q: "هل يمكنكم إعادة سطح موقف قائم وإعادة تخطيطه؟",
				a: "نعم — كشط وإعادة طبقة سطحية، أو إصلاح موضعي، يليه تخطيط كامل وتجديد للوحات، على مراحل تُبقي جزءاً من المواقف متاحاً أثناء العمل."
			}
		]
	},
	"heavy-duty-interlock-paving": {
		h1: "مقاول تبليط إنترلوك في الإمارات",
		lead: "إنترلوك وبلوك للأحمال الثقيلة للساحات ومناطق الحاويات وطرق الخدمة والأرضيات التي تحمل الشاحنات المحمّلة.",
		caption: "توقيع أرضية صلبة قبل البدء بفرش البلوك.",
		intro: "الإنترلوك إما أن يصمد عشرين عاماً أو يتخدّد في الشهر الأول، والفارق لا يكاد يكون البلوك نفسه. فسماكة البلوك، وتدرّج رمل الفرش وعمقه، ونمط الفرش، وقبل ذلك كله حصر الحواف — هي ما يقرّر بقاء الساحة المحمّلة مستوية.",
		body: ["في المناطق التي تعبرها الحركة نستخدم بلوكاً للأحمال الثقيلة يُفرَش بنمط عظمة السمكة، وهو يتشابك تحت أحمال الكبح والدوران بشكل لا يوفّره النمط المستقيم. ويُفرَش رمل الفرش بعمق ثابت فوق طبقة أساس مدموكة ومستوية، وتحصل كل حافة حرة على حصر خرساني الكتف — رصيف أو حجر حدّي أو مجرى — لأن الساحة تنهار من الحواف إلى الداخل.", "وتُبنى الطبقة أسفلها كرصف كامل لا كطبقة تسوية. وبعد الفرش، تُهزّ البلوكات وتُكنَس رمال الفواصل مراراً حتى تمتلئ الفواصل، وعندها فقط يبدأ السطح بالتصرف كرصف متشابك لا كمجموعة بلوكات سائبة."],
		scope: [
			"تجهيز التربة الطبيعية وطبقة ما تحت الأساس وطبقة الأساس وفق تصميم الأحمال",
			"توريد بلوك إنترلوك للأحمال الثقيلة بالسماكة والتشطيب المحددين",
			"رمل فرش مُسوّى بعمق ثابت فوق طبقة أساس مستوية",
			"الفرش بنمط عظمة السمكة والأنماط المخصصة للمناطق المرورية",
			"حصر حواف خرساني الكتف وأحجار أرصفة ومجارٍ وحدّيات",
			"الهزّ وكنس رمال الفواصل والدمك النهائي",
			"الميول ومجاري التصريف ومحيط المصافي داخل المنطقة المبلّطة"
		],
		specs: [
			["المعدات", "مسوّيات ومداحل وصفائح دمك بوسائد واقية وقاطعات بلوك وفرق فرش متخصصة"],
			["الاستخدامات", "ساحات الحاويات والشاحنات وأرضيات المستودعات وطرق الخدمة والساحات الأمامية والمواقف والممرات"],
			["الضبط والتوثيق", "سماكة البلوك وفق الأحمال وضبط عمق الفرش ومسح المناسيب والميول وفحص حصر الحواف"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "ما سماكة البلوك المطلوبة لساحة شاحنات؟",
				a: "سماكة الأحمال الثقيلة لا البلوك الأرق المستخدم للممرات والمواقف الخفيفة، فوق طبقة أساس مصمَّمة لأحمال المحاور. ونحدّد الاثنين معاً، لأن بلوكاً سميكاً فوق طبقة أساس رقيقة يتخدّد أيضاً."
			},
			{
				q: "لماذا يتخدّد الإنترلوك حيث تدور الشاحنات؟",
				a: "في الغالب بسبب غياب حصر الحواف أو ضعفه، أو رمل فرش مفروش بعمق زائد أو غير منتظم. فأحمال الدوران تدفع البلوكات جانبياً، وبلا كتف خرساني تستند إليه ينفتح النمط."
			},
			{
				q: "هل يمكن رفع الإنترلوك وإعادة فرشه للوصول إلى خدمات تحته؟",
				a: "نعم، وهو أحد أهم أسباب اختياره على الأسفلت في الساحات. تُرفع البلوكات ويُنفَّذ الخندق ويُردَم وتُعاد البلوكات نفسها — دون رقعة دائمة ظاهرة."
			}
		]
	},
	kerbstones: {
		h1: "مقاول تركيب أحجار الأرصفة في الإمارات",
		lead: "توريد وتركيب أحجار الأرصفة والمجاري على استقامة ومنسوب فوق كتف خرساني، وفق القطاع المعتمد لدى الجهة المختصة.",
		caption: "الحافة المنتهية — خط أحجار الرصيف والمجرى وكتف الأسفلت.",
		intro: "أحجار الأرصفة هي الخط الظاهر الذي يُقاس عليه كل عنصر آخر. فمسار حجر يتمايل أفقياً أو ينخفض رأسياً يجعل طريقاً جيد التنفيذ يبدو رديئاً، وهو أول ما يضع عليه مفتّش الجهة المختصة خيط الاستقامة.",
		body: ["نركّب الأحجار على استقامة ومنسوب فوق قاعدة خرسانية بكتف خلفي، بضبط مساحي في المستقيمات وقوالب في الأقواس لتأتي المنحنيات صحيحة لا تقريبية. وتكون الفواصل منتظمة، وتُنفَّذ الأحجار المنخفضة عند المعابر والمداخل بوصلات انتقالية سليمة، ويُضبط خط المجرى ليجري الماء إلى المصافي فعلاً.", "ونركّب أحجار الطرق وأحجار المواقف والجزر والقطاعات المنحنية والأحجار المنخفضة والمجاري، بالقطاعات التي تحددها هيئة الطرق والمواصلات وبلدية دبي وسائر الجهات في الإمارات الأخرى. وأحجار الأرصفة عادةً نقطة التقاء بين حزم الطرق والمواقف وتنسيق الموقع، لذا نُرتّب تسلسلها مع من يسبقنا ومن يلينا بدل تثبيت الخط وتركهم يتدبرون أمرهم."],
		scope: [
			"توريد أحجار الأرصفة والمجاري والقطاعات المنحنية والمنخفضة وفق القطاع المعتمد",
			"التوقيع على استقامة ومنسوب بضبط مساحي",
			"قاعدة خرسانية وكتف خلفي وفق المقطع المحدد",
			"المسارات المستقيمة والأقواس والجزر وخطوط تهدئة السرعة",
			"الأحجار المنخفضة والوصلات الانتقالية عند المعابر والمداخل والمسارات الميسّرة",
			"فرش المجاري وضبط الميول نحو المصافي ونقاط التصريف",
			"الدعم والردم وإنهاء ما خلف خط أحجار الأرصفة"
		],
		specs: [
			["المعدات", "فرق تركيب متخصصة وحفارات صغيرة وتوريد خرسانة ومناشير قصّ وأجهزة مساحة"],
			["الاستخدامات", "أحجار الطرق والطرق السريعة وأحجار المواقف والجزر والأحجار المنخفضة للمداخل والطرق الداخلية"],
			["الضبط والتوثيق", "مسح الاستقامة والمنسوب وفحص الكتف الخرساني وانتظام الفواصل ومطابقة القطاع"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "ما قطاعات أحجار الأرصفة التي تركّبونها؟",
				a: "القطاعات التي تحددها الجهة المختصة — قطاعات هيئة الطرق والمواصلات وبلدية دبي في دبي، والمعايير المكافئة في الإمارات الأخرى — وتشمل أحجار الطرق وأحجار المواقف والقطاعات المنحنية والأحجار المنخفضة والمجاري."
			},
			{
				q: "هل تركّبون أحجاراً منخفضة لمدخل قطعة أرض؟",
				a: "نعم. وعلى طريق تابع لهيئة الطرق والمواصلات يكون المدخل حزمة أعمال مداخل ومخارج، ونحن معتمدون لدى الهيئة لتنفيذها، بما يشمل الحجر المنخفض وأرضية المدخل والوصلة الانتقالية واستمرارية التصريف وإعادة الحالة."
			},
			{
				q: "هل يمكنكم استبدال أحجار تالفة على طريق قائم؟",
				a: "نعم. تُقتلع الوحدات التالفة، وتُعاد القاعدة والكتف، وتُركَّب وحدات جديدة على استقامة ومنسوب مطابقين للقائم، مع إعادة السطح المجاور إلى حالته."
			}
		]
	},
	"road-markings": {
		h1: "مقاول تخطيط ودهان طرق في الإمارات",
		lead: "تخطيط بالثيرموبلاستيك والدهان البارد — خطوط المسارات والتظليل والأسهم والمعابر والمواقف والترقيم وفق المعايير المعتمدة.",
		caption: "تخطيط المسارات وإدارة المرور على مسار مفتوح للحركة.",
		intro: "التخطيط آخر عملية وأكثر ما يراه الناس. وهو كذلك صاحب أضيق نافذة مناخية: فالثيرموبلاستيك المطبَّق على سطح رطب أو مغبَّر أو بارد أكثر من اللازم سينفصل خلال أسابيع مهما كان التوقيع دقيقاً.",
		body: ["نوقّع من المخططات، ونهيّئ السطح، ونطبّق الثيرموبلاستيك أو الدهان البارد بالسماكة المحددة مع حبيبات عاكسة حيثما اشترطت المواصفة. وعلى الأسفلت الجديد نترك السطح ليتماسك قبل التطبيق؛ وعلى الأسطح القائمة ننظّف ونزيل التخطيط القديم بالجلخ أو السفع بدل الدهان فوقه.", "وتشمل الأعمال خطوط المسارات على الطرق السريعة والطرق الداخلية، والتظليل والأسهم والعبارات، ومعابر المشاة، ومسارات الدراجات، ومواقف السيارات وترقيمها، والمطبّات الصوتية وتخطيط المطبّات. وعلى الطرق الحيّة تجري عملية التخطيط تحت إغلاق مسار بإدارة مرور من فريقنا، وبتصريحنا نحن حيث يكون الطريق تابعاً لهيئة الطرق والمواصلات."],
		scope: [
			"التوقيع من المخططات والتعليم المسبق في الموقع",
			"تجهيز السطح وتنظيفه وإزالة التخطيط الملغى",
			"تطبيق الثيرموبلاستيك بالسماكة المحددة مع حبيبات عاكسة",
			"الدهان البارد حيث تحدده المواصفة أو للأعمال المؤقتة",
			"خطوط المسارات والحواف والتظليل والأسهم والعبارات وخطوط الوقوف",
			"معابر المشاة ومسارات الدراجات ومواقف السيارات وترقيمها",
			"المطبّات الصوتية وتخطيط المطبّات والأسطح الملوّنة"
		],
		specs: [
			["المعدات", "آلات ثيرموبلاستيك وآلات دهان بارد ومسخّنات وجلاخات وآلات سفع ووحدات إدارة مرور"],
			["الاستخدامات", "الطرق السريعة والطرق الداخلية والمواقف والساحات الصناعية وطرق المجمعات وأرضيات المستودعات ومسارات الحركة"],
			["الضبط والتوثيق", "مراجعة التوقيع مقابل المخططات وفحص حالة السطح ودرجة حرارته ومطابقة السماكة والحبيبات"],
			["التغطية", "جميع إمارات الدولة السبع، بالتعبئة من دبي"]
		],
		faqs: [
			{
				q: "ثيرموبلاستيك أم دهان؟",
				a: "الثيرموبلاستيك للتخطيط الدائم على الطرق التي تحمل حركة — فهو أسمك ويدوم أطول بكثير ويستقبل الحبيبات العاكسة بشكل صحيح. والدهان البارد للتخطيط المؤقت والمناطق قليلة الحركة والحالات التي سيتغير فيها التخطيط قريباً."
			},
			{
				q: "هل يمكنكم إزالة التخطيط القائم؟",
				a: "نعم، بالجلخ أو السفع لا بالدهان فوقه. فالدهان فوق خط ملغى يترك أثراً شبحياً يبقى ظاهراً ليلاً وفي الأجواء الممطرة، وهي بالضبط الظروف التي يسبب فيها التباساً."
			},
			{
				q: "كم يلزم قبل إعادة فتح طريق جرى تخطيطه؟",
				a: "يتماسك الثيرموبلاستيك خلال دقائق، فيمكن تسليم المقطع عادةً ضمن نافذة الإغلاق نفسها. وهذا ما يجعل التخطيط الليلي تحت إغلاق مسار عملياً على الطرق المزدحمة."
			}
		]
	},
	"lane-closure-permits": {
		h1: "تصاريح إغلاق المسارات في دبي",
		lead: "إعداد الطلب والمخططات واستصدار الموافقة لإغلاق مسار أو عدة مسارات على طرق هيئة الطرق والمواصلات، من التقديم حتى صدور التصريح.",
		caption: "مخاريط وحواجز ولوحات وفق مخطط إغلاق معتمد.",
		intro: "تصريح إغلاق المسار عمل مخططات يرتبط بموعد نهائي. فالهيئة لا تعتمد نيّة بإغلاق مسار — بل تعتمد طول انحراف محدداً، وجدول لوحات محدداً، ونافذة عمل محددة، ومجموعة محددة من إجراءات السلامة، مرسومة ومبرَّرة.",
		body: ["نُعِدّ مخططات التحويل المروري، ونضبط أطوال الانحراف وجدول اللوحات وفق سرعة الاقتراب، ونحدد نافذة العمل — وهي في الممرات المزدحمة ساعات ليلية دائماً تقريباً — ثم نقدّم الحزمة. ويردّ الفريق نفسه على الملاحظات ويعيد التقديم، فلا يتعثر الطلب في انتظار من يفسّر الرد.", "ولأننا كذلك ننصب منظومة إدارة المرور في الموقع ونصونها، فإن التصريح الذي يُعتمَد هو المخطط الذي يُنفَّذ فعلاً. وهذا مهم عند التفتيش: فمعظم إشعارات إيقاف العمل على إغلاق ما لا تصدر لعدم وجود تصريح، بل للعمل وفق مخطط يخالف المعتمد."],
		scope: [
			"مخططات التحويل المروري وإغلاق المسارات وفق معايير هيئة الطرق والمواصلات",
			"تصميم الانحرافات وجداول اللوحات والتحذير المسبق المناسب للسرعة",
			"تحديد نافذة العمل، بما يشمل النوافذ الليلية ونهاية الأسبوع",
			"التقديم والرد على الملاحظات والمتابعة حتى صدور التصريح",
			"تركيب المخطط المعتمد في الموقع بفرقنا الخاصة",
			"صيانة الإغلاق وتفتيشه طوال مدة الأعمال",
			"تمديد التصريح وتعديله على مراحل عند تغيّر البرنامج"
		],
		specs: [
			["الجهة المختصة", "هيئة الطرق والمواصلات — دبي"],
			["الاستخدامات", "أعمال المرافق داخل المسار وأعمال الأسفلت والترقيع وحماية الخدمات وتنفيذ المداخل والمخارج"],
			["المخرجات", "مخططات تحويل معتمدة وتصريح صادر ومخطط منصوب ومَصون والتزام أثناء التنفيذ"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "كم يستغرق تصريح إغلاق مسار من هيئة الطرق والمواصلات؟",
				a: "يعتمد على الطريق ومدى الإغلاق ونظافة الطلب المقدَّم. فحزمة مُعَدّة جيداً لإغلاق ليلي بسيط تتحرك بسرعة؛ أما إغلاق عدة مسارات على ممر استراتيجي فيستغرق وقتاً أطول ويستدعي ملاحظات أكثر. ونعطيك تاريخاً واقعياً من البداية بدل تاريخ متفائل."
			},
			{
				q: "هل تنصبون إدارة المرور إضافة إلى استخراج التصريح؟",
				a: "نعم، وهذا سبب وجاهة شرائهما معاً. فالمخطط المنصوب يطابق المخطط المعتمد، وهو ما يتحقق منه مفتّش الهيئة في الموقع."
			},
			{
				q: "هل يمكن الحصول على تصريح لإغلاق مسارات نهاراً؟",
				a: "على بعض الطرق نعم؛ وعلى الممرات الاستراتيجية تسمح الهيئة عادةً بالعمل الليلي فقط. وسنخبرك بأي فئة يقع طريقك قبل أن تبني برنامجاً على نافذة نهارية."
			}
		]
	},
	"road-closure-permits": {
		h1: "تصاريح إغلاق الطرق في دبي",
		lead: "إغلاق كامل للطرق والمسارات مع مسارات تحويل معتمدة وبرامج مرحلية وتنسيق مع الجهات المعنية.",
		caption: "تحويلة مُلوَّحة قائمة حول مسار مغلق.",
		intro: "الإغلاق الكامل للطريق حديث أكبر من إغلاق مسار. فأنت تطلب من هيئة الطرق والمواصلات أن ترسل الحركة إلى مكان آخر، ولذلك يجب أن يبرّر الطلب ضرورة الإغلاق، وأن يثبت قدرة مسار التحويل على استيعاب الحركة، وأن يبيّن تعذّر تنفيذ الأعمال على مراحل بأي صورة أخرى.",
		body: ["نُعِدّ تبرير الأثر المروري ومخططات مسار التحويل وبرنامج المراحل، وننسّق مع هيئة الطرق والمواصلات وشرطة دبي والجهات التي يمسّها الإغلاق — من منشآت تجارية ومبانٍ وخطوط حافلات ومسارات طوارئ. وحيث لا يُتوقَّع اعتماد إغلاق واحد، نعيد هيكلة الأعمال إلى مراحل قابلة للاعتماد.", "وبعد الاعتماد، يُنصَب الإغلاق ويُلوَّح ويُضاء ويُصان بفرقنا ويُسلَّم وفق البرنامج المتفق عليه. وتُراجَع لوحات التحويل طوال مدة الإغلاق لا أن تُنصَب وتُنسى، لأن تحويلاً فقد لوحة هو ما يولّد الشكوى التي تنهي التصريح مبكراً."],
		scope: [
			"دراسة الأثر المروري وتبرير الإغلاق",
			"تصميم مسار التحويل ومخططاته واستراتيجية اللوحات المسبقة",
			"برامج إغلاق مرحلية حيث يتعذر اعتماد إغلاق واحد",
			"التنسيق مع هيئة الطرق والمواصلات وشرطة دبي والجهات المتأثرة",
			"التقديم والرد على الملاحظات والمتابعة حتى صدور التصريح",
			"تركيب وإضاءة وصيانة الإغلاق ومسار التحويل",
			"التسليم وفق البرنامج مع إعادة الفتح على مراحل عند الاقتضاء"
		],
		specs: [
			["الجهة المختصة", "هيئة الطرق والمواصلات وشرطة دبي"],
			["الاستخدامات", "إعادة بناء المسارات وعبور المرافق الكبرى وأعمال الجسور والمنشآت وتركيبات الفعاليات والزينة"],
			["المخرجات", "مخططات تحويل معتمدة وتصريح صادر وإغلاق وتحويل منصوبان وإشعارات للجهات المعنية"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "متى يُعتمَد إغلاق كامل بدل إغلاق مسار؟",
				a: "حين يتعذر فعلاً تنفيذ الأعمال تحت إغلاق جزئي ويتوفر مسار تحويل صالح. وإذا لم يتحقق الشرطان يُرفض الطلب — لذلك نقيّم ذلك بصراحة أولاً، ونعيد عند اللزوم تقسيم الأعمال إلى إغلاقات مسارات قابلة للاعتماد."
			},
			{
				q: "هل تُخطرون المنشآت والسكان المتأثرين؟",
				a: "نعم. إخطار الجهات المعنية والتنسيق معها جزء من الحزمة، إلى جانب ترتيبات وصول الطوارئ. فالإغلاقات تفشل بسبب الشكاوى أكثر بكثير مما تفشل بسبب الهندسة."
			},
			{
				q: "ماذا يحدث إذا تجاوزت الأعمال النافذة المصرَّح بها؟",
				a: "نخطط للتسليم مع هامش احتياطي، وحيث يلزم تمديد فعلي نتقدّم به مسبقاً. فتجاوز نافذة الإغلاق دون موافقة أسرع طريق لفقدان المصداقية لدى الجهة المختصة في الطلب التالي."
			}
		]
	},
	"traffic-management": {
		h1: "مقاول إدارة المرور في دبي",
		lead: "توريد وتركيب وصيانة وإزالة منظومة إدارة مرور مطابقة — مخاريط وحواجز ولوحات ولوحات أسهم ووحدات TMA ومنظّمو مرور.",
		caption: "إدارة مرور مصانة حول أعمال داخل طريق مفتوح للحركة.",
		intro: "إدارة المرور هي ما يفصل بين مسار حيّ والعاملين داخله. وهي كذلك العنصر الأكثر عرضة للتركيب مرة واحدة ثم تُترك لتتدهور — مخاريط تبعثرها الحركة العابرة، ولوحة أدارتها الريح، وانحراف قَصُر عشرات الأمتار منذ الليلة الأولى.",
		body: ["نورّد وننصب منظومة إدارة المرور وفق المخطط المعتمد: لوحات تحذير مسبق ولوحات إرشادية، ومخاريط وعواكس، وحواجز سلامة، ولوحات أسهم ضوئية، وإنارة، ووحدات تخفيف الصدم المركّبة على الشاحنات (TMA) على الطرق عالية السرعة. ويُوفَّر منظّمو مرور مدرَّبون حيث يستلزم المخطط ضبطاً يدوياً عند المداخل والمعابر.", "ثم يُفتَّش المخطط ويُصان طوال مدة الأعمال لا في المناوبة الأولى فحسب، ويُزال بالكامل عند الانتهاء ليُسلَّم الطريق دون لوحات متبقية تربك السائقين. وحيث تكون الأعمال على طريق تابع لهيئة الطرق والمواصلات، نُعِدّ مخططات التحويل ونحمل التصريح كذلك، فيكون فريق واحد مسؤولاً عن المخطط والاعتماد وما هو قائم فعلاً على الأرض."],
		scope: [
			"تركيب مخططات إدارة المرور وفق المخططات المعتمدة",
			"لوحات التحذير المسبق والإرشاد والسرعة وفق معايير الجهة المختصة",
			"المخاريط والعواكس وحواجز السلامة وحماية المشاة",
			"لوحات الأسهم الضوئية وأضواء التحذير والإنارة الليلية",
			"وحدات تخفيف الصدم المركّبة على الشاحنات (TMA) للمسارات عالية السرعة",
			"منظّمو مرور مدرَّبون وضبط يدوي عند المداخل والمعابر",
			"التفتيش الدوري والصيانة والإزالة الكاملة عند الإنجاز"
		],
		specs: [
			["الجهة المختصة", "هيئة الطرق والمواصلات — دبي"],
			["الاستخدامات", "أعمال المسارات وعبور المرافق وحماية الخدمات والأسفلت والترقيع وتنفيذ المداخل والمخارج والفعاليات"],
			["المعدات", "مخاريط وعواكس وحواجز ولوحات ولوحات أسهم وإنارة ووحدات TMA ومنظّمو مرور"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "هل توفّرون وحدات TMA؟",
				a: "نعم. تُوفَّر وحدات تخفيف الصدم المركّبة على الشاحنات حيث تتطلب سرعة الطريق ومخطط العمل حماية من الاصطدام لمنطقة العمل — عادةً على المسارات عالية السرعة والأعمال المتحركة أو قصيرة المدة."
			},
			{
				q: "هل تصونون منظومة إدارة المرور أثناء الأعمال؟",
				a: "نعم. يُفتَّش المخطط ويُعاد إلى وضعه طوال الأعمال لا أن يُنصَب مرة واحدة. فالمخاريط المزاحة واللوحات المستديرة والانحرافات التي قَصُرت هي الأسباب المعتادة لرسوب التفتيش."
			},
			{
				q: "هل يمكنكم توفير إدارة المرور دون تنفيذ الأعمال الإنشائية؟",
				a: "نعم. نورّد وننصب ونصون ونزيل منظومة إدارة المرور كحزمة مستقلة، بما يشمل مخططات التحويل وتصريح هيئة الطرق والمواصلات حيث تكون الأعمال على طريق تابع لها."
			}
		]
	},
	"rta-approved-entry-exit-works": {
		h1: "مقاول مداخل ومخارج معتمد من هيئة الطرق والمواصلات في دبي",
		lead: "مداخل ومخارج قطع الأراضي على طرق الهيئة، ينفّذها مقاول معتمد فيُقبَل العمل ويصبح المدخل قابلاً للاستخدام نظامياً.",
		caption: "مدخل قطعة أرض جديد يرتبط بالطريق العام.",
		intro: "المدخل والمخرج على طريق تابع لهيئة الطرق والمواصلات ليس عمل أحجار أرصفة. إنه وصلة منضبطة بالطريق العام، ولن تقبلها الهيئة إلا إذا كان التصميم معتمداً والمقاول معتمداً وما نُفِّذ مطابقاً لما رُسِم.",
		body: ["نتولى الحزمة من طرفها إلى طرفها: مخططات المدخل والمخرج وتقديمها، والتصريح، والتنفيذ نفسه — أحجار منخفضة وأرضية مدخل ووصلات انتقالية ومناسيب، واستمرارية تصريف الطريق عبر المدخل، وطبقة سطحية وتخطيط ولوحات — يليها إعادة كل ما مُسّ داخل حرم الطريق إلى حالته.", "وأكثر أسباب رسوب المدخل في التفتيش هو التصريف. فمدخل يقطع خط المجرى، أو يصرّف مياه القطعة إلى المسار، لن يُعتمَد مهما كان تشطيبه جيداً. لذلك نضبط المناسيب ليمرّ تصريف الطريق دون انقطاع وتصرّف القطعة إلى شبكتها الخاصة."],
		scope: [
			"مخططات تصميم المدخل والمخرج وتقديمها لهيئة الطرق والمواصلات",
			"طلب التصريح والمتابعة حتى الاعتماد",
			"الأحجار المنخفضة وأرضية المدخل والوصلات الانتقالية وهندسة الوصول",
			"استمرارية مجرى الطريق وتصريفه عبر المدخل",
			"طبقة ما تحت الأساس وطبقة الأساس والسطح الأسفلتي أو الإنترلوك للمدخل",
			"التخطيط واللوحات، وحواجز الحماية والأعمدة حيث تُشترط",
			"إعادة حرم الطريق إلى حالته ووثائق التسليم"
		],
		specs: [
			["الجهة المختصة", "هيئة الطرق والمواصلات — دبي"],
			["الاستخدامات", "مداخل قطع الأراضي والفلل والمداخل التجارية ومداخل المستودعات والمنشآت الصناعية ومحطات الوقود"],
			["الاعتماد", "ينفّذها مقاول معتمد لدى هيئة الطرق والمواصلات، مع المخططات والتصريح ووثائق ما بعد التنفيذ"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "لماذا يجب أن ينفّذ المدخل والمخرج مقاول معتمد من الهيئة؟",
				a: "لأن الأعمال تقع داخل حرم الطريق. فالهيئة لا تصدر التصريح ولا تقبل المدخل المنجَز ما لم يكن المقاول المنفّذ حاصلاً على اعتمادها. ونحن حاصلون عليه."
			},
			{
				q: "هل تُعِدّون مخططات المدخل والمخرج أيضاً؟",
				a: "نعم. المخططات والتقديم والرد على الملاحظات والتصريح تُنجَز داخل الشركة، ثم ينفّذ الفريق نفسه العمل — فيطابق المنفَّذ ما اعتُمِد."
			},
			{
				q: "لماذا ترسب مداخل قطع الأراضي في تفتيش الهيئة؟",
				a: "في الغالب بسبب التصريف: انقطاع خط المجرى عبر المدخل، أو تصريف مياه القطعة إلى المسار. ويليه في الشيوع اختلاف المناسيب والهندسة عن المخطط المعتمد."
			}
		]
	},
	"rta-service-protection": {
		h1: "أعمال حماية الخدمات في دبي",
		lead: "حماية المرافق القائمة داخل حرم الطريق أثناء التنفيذ — مسح وحفر استكشافي وحماية مادية وإعادة حالة.",
		caption: "مسح وتوقيع قبل الحفر بجوار خدمات حيّة.",
		intro: "كل متر من حرم الطريق في دبي يخفي شيئاً مدفوناً: كابلات هيئة كهرباء ومياه دبي، ومجاري اتصالات ودو، وخطوط مياه رئيسية، وري، وتبريد مركزي. وحماية الخدمات هي انضباط إثبات مواقع تلك الخدمات قبل أن تقترب منها أي معدة، ثم حمايتها مادياً أثناء الأعمال.",
		body: ["نمسح المسار ونتتبّعه، ونفتح حفراً استكشافية لكشف الأعماق والاستقامات وتأكيدها، ونوثّق ما هو موجود فعلاً مقابل ما تدّعيه المخططات — وكثيراً ما يختلف الاثنان. وحيث تكون الخدمات مكشوفة أو معرّضة للخطر، تُحمى مادياً: غلاف خرساني أو أكمام أو بلاطات حماية أو دعامات وحوامل للخدمة العابرة فوق حفر مفتوح.", "وتُنفَّذ الأعمال وفق متطلبات هيئة الطرق والمواصلات ومالكي المرافق، مع شهادات عدم الممانعة اللازمة، ويُعاد كل ما مُسّ داخل حرم الطريق إلى معايير الجهة المختصة بعد ذلك. والخطأ هنا مكلف بصورة لا تتناسب إطلاقاً مع حجم الأعمال — فكابل جهد متوسط مقطوع أو مسار ألياف مقطوع يكلّف أضعاف ما كانت ستكلّفه الحماية."],
		scope: [
			"مسح الخدمات وتتبّعها وتعليم المسار قبل الحفر",
			"حفر استكشافي لكشف العمق والاستقامة والحالة وتأكيدها",
			"مقارنة الخدمات المكتشفة بمخططات السجلات مع تقرير بالنتائج",
			"غلاف خرساني وأكمام وبلاطات حماية للخدمات المكشوفة",
			"دعامات وحوامل للخدمات العابرة فوق حفر مفتوح",
			"تنسيق شهادات عدم الممانعة مع هيئة كهرباء ومياه دبي واتصالات ودو وإمباور والهيئة",
			"إعادة حرم الطريق إلى حالته وفق معايير الجهة المختصة"
		],
		specs: [
			["الجهة المختصة", "هيئة الطرق والمواصلات، مع شهادات عدم ممانعة من هيئة كهرباء ومياه دبي واتصالات ودو وإمباور وغيرها"],
			["الاستخدامات", "الأعمال داخل حرم الطريق وعبور المرافق وتنفيذ المداخل والمخارج والحفر قرب خدمات حيّة"],
			["المخرجات", "سجلات الحفر الاستكشافي وتقرير مواقع الخدمات وتفاصيل الحماية وشهادات عدم الممانعة ووثائق إعادة الحالة"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "هل تمسحون بحثاً عن الخدمات قبل الحفر؟",
				a: "دائماً، ثم نثبت نتيجة المسح بحفر استكشافي. فمخططات السجلات في ممر طريق قائم نقطة بداية لا دليلاً — إذ كثيراً ما يختلف العمق أو الاستقامة المدوّنان عمّا هو في الأرض."
			},
			{
				q: "من يستخرج شهادات عدم الممانعة من مالكي المرافق؟",
				a: "نحن. تنسيق شهادات عدم الممانعة مع هيئة كهرباء ومياه دبي واتصالات ودو وإمباور وهيئة الطرق والمواصلات جزء من الحزمة، إلى جانب المخططات وبيانات طرق العمل التي يطلبها كلٌّ منهم."
			},
			{
				q: "ماذا يحدث إذا وجدتم خدمة غير مدوّنة في المخططات؟",
				a: "يتوقف العمل في تلك المنطقة، وتُكشف الخدمة وتُحدَّد هويتها، ويُخطَر مالكها، ويُتَّفق على الحماية أو التحويل قبل استئناف الحفر. ويُوثَّق ذلك ويُبلَّغ عنه لا أن يُتجاوَز بهدوء."
			}
		]
	},
	"row-permits": {
		h1: "تصاريح حق الطريق في دبي",
		lead: "طلبات تصاريح حق الطريق للأعمال داخل حرم الطرق والأراضي العامة — المخططات وشهادات عدم الممانعة والالتزام حتى الإنجاز.",
		caption: "مخطط تصريح معتمد من هيئة الطرق والمواصلات لأعمال داخل حرم الطريق.",
		intro: "تصريح حق الطريق هو ما يجعل العمل داخل حرم الطريق أو على أرض عامة عملاً مشروعاً. وهو كذلك البند الأكثر احتمالاً لأن يظهر في البرنامج الزمني كسطر واحد بلا مدة، حتى يكتشف أحدهم يوماً أن الأعمال لا تستطيع البدء.",
		body: ["نُعِدّ الطلب كاملاً: مخططات المسقط والقطاعات، وبيانات طرق العمل، وترتيبات المرور، وشهادات عدم الممانعة التي تشترطها الجهة، والمستندات المساندة التي تمنع إعادة الطلب. ويردّ على الملاحظات الفريق نفسه الذي أعدّ الحزمة، وهو عادةً الفارق بين دورة إعادة تقديم بأيام وأخرى بأسابيع.", "والتصريح نصف العمل فحسب. فالاشتراطات المرفقة به — ساعات العمل وإجراءات الحماية ومعايير إعادة الحالة ومتطلبات الإخطار — يجب الالتزام بها ليبقى التصريح سارياً حتى الإنجاز، ونحن ندير ذلك في الموقع كما نديره على الورق."],
		scope: [
			"تقييم التصاريح وشهادات عدم الممانعة التي يتطلبها نطاق العمل فعلاً",
			"مخططات المسقط والقطاعات وترتيبات المرور للتقديم",
			"بيانات طرق العمل والمستندات المساندة",
			"جمع شهادات عدم الممانعة من مالكي المرافق والجهات المعنية",
			"التقديم والرد على الملاحظات والمتابعة حتى صدور التصريح",
			"الالتزام باشتراطات التصريح أثناء التنفيذ",
			"إعادة الحالة وفق معايير الجهة المختصة وإغلاق التصريح"
		],
		specs: [
			["الجهة المختصة", "هيئة الطرق والمواصلات وبلدية دبي، مع شهادات عدم ممانعة من مالكي المرافق والجهات المعنية"],
			["الاستخدامات", "الأعمال داخل حرم الطرق وعبور ونقل المرافق وحماية الخدمات والمداخل والمخارج والتركيبات المؤقتة"],
			["المخرجات", "حزمة مخططات مقدَّمة وشهادات عدم ممانعة مجمَّعة وتصريح حق طريق صادر وسجلات التزام وإغلاق"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "كم يستغرق تصريح حق الطريق في دبي؟",
				a: "يعتمد على الموقع ومدى الأعمال وعدد شهادات عدم الممانعة المطلوبة. والجزء الذي يمكن التحكم فيه هو جودة التقديم — فالحزمة الكاملة والصحيحة تتفادى دورات إعادة التقديم التي تسبّب معظم التأخير."
			},
			{
				q: "هل يمكنكم استخراج تصريح حق طريق إذا كنا سننفّذ الأعمال بأنفسنا؟",
				a: "نعم. نتولى حزم التصاريح وشهادات عدم الممانعة كخدمة مستقلة، وإن كانت الجهة المختصة ستشترط كذلك في الأعمال داخل حرم الطريق أن يحمل المقاول المنفّذ الاعتماد المطلوب."
			},
			{
				q: "ماذا يحدث إذا لم تُستوفَ اشتراطات التصريح في الموقع؟",
				a: "يمكن تعليق التصريح وإيقاف الأعمال. لذلك تُدار اشتراطات ساعات العمل والحماية وإعادة الحالة في الموقع كجزء من الخدمة، لا أن تُسجَّل عند التقديم فقط."
			}
		]
	},
	"utilities-shifting": {
		h1: "مقاول نقل وتحويل المرافق في دبي",
		lead: "تحويل ونقل الخدمات المتعارضة مع الأعمال الجديدة — مجاري الكابلات والكابلات والمياه والري — بالتنسيق مع مالكي المرافق.",
		caption: "حفر مسار جديد لخدمة يجري تحويلها.",
		intro: "نقل المرافق مشكلة تنسيق ترتدي ثوب التنفيذ. فالحفر والمسار الجديد أمران مباشران؛ أما نافذة الفصل وموافقة المالك والتسلسل الذي يمكن به تحريك ثلاث خدمات مختلفة دون أن تفقد أي منها التغذية، فهو ما يحدّد البرنامج الزمني.",
		body: ["نحدد التعارض، ونتفق على المسار الجديد مع المالك، ونستخرج شهادات عدم الممانعة والتصاريح، وننفّذ التحويل — مسار مجارٍ أو أنابيب جديد وحماية وربط ودعم للتشغيل التجريبي وإلغاء أو إزالة الخط الملغى. وتُحجَز نوافذ الفصل مع هيئة كهرباء ومياه دبي واتصالات ودو وإمباور ويُلتزَم بها، لأن نافذة فائتة قد تضيف أسابيع إلى البرنامج.", "وحيث يمكن تفادي التعارض بالتصميم بدل تحريكه، نقول ذلك. فنقل خدمة أغلى دائماً من تعديل منسوب أو استقامة، ويستحق الأمر ساعة مراجعة قبل الالتزام بتحويل قد لا يحتاجه المشروع أصلاً."],
		scope: [
			"تحديد التعارضات مقابل التصميم ومواقع الخدمات المؤكدة",
			"اقتراح المسار الجديد والاتفاق عليه مع مالك المرفق",
			"طلبات شهادات عدم الممانعة والتصاريح اللازمة للتحويل",
			"الحفر ومدّ المجاري والفرش والحماية والردم على المسار الجديد",
			"تنسيق نوافذ الفصل مع هيئة كهرباء ومياه دبي واتصالات ودو وإمباور",
			"الربط ودعم التشغيل التجريبي والاختبار مع المالك",
			"إلغاء أو إزالة الخط الملغى وإعادة الحالة"
		],
		specs: [
			["الجهة المختصة", "هيئة الطرق والمواصلات وبلدية دبي، مع موافقات مالكي المرافق"],
			["الاستخدامات", "تعارض الخدمات مع الطرق والمنشآت الجديدة وتطوير قطع الأراضي والمداخل والمخارج وتوسعة الطرق"],
			["المخرجات", "مسار تحويل معتمد وشهادات عدم ممانعة وتصاريح وتحويل منفَّذ ومُشغَّل وسجلات ما بعد التنفيذ"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "من يعتمد تحويل مرفق؟",
				a: "مالك المرفق — هيئة كهرباء ومياه دبي أو اتصالات أو دو أو إمباور أو الجهة المعنية — إلى جانب هيئة الطرق والمواصلات أو البلدية للأعمال داخل حرم الطريق. ونحن نتولى مساري الاعتماد معاً."
			},
			{
				q: "كيف تُدار عمليات الفصل؟",
				a: "تُحجَز نوافذ الفصل مع المالك مسبقاً ويُخطَّط العمل ليقع داخلها، مع وجود الفريق والمعدات والمواد في الموقع قبل فتح النافذة. ففوات نافذة محجوزة مكلف من حيث البرنامج الزمني."
			},
			{
				q: "هل يمكن تفادي التعارض بدل تحويل الخدمة؟",
				a: "غالباً نعم — فتعديل منسوب أو تغيير بسيط في الاستقامة أرخص بكثير من التحويل. نتحقق من ذلك أولاً ونخبرك متى يكون النقل هو الخيار الوحيد فعلاً."
			}
		]
	},
	"noc-services": {
		h1: "خدمات شهادات عدم الممانعة في دبي",
		lead: "إعداد ومعالجة شهادات عدم الممانعة لدى الجهات ومالكي المرافق الذين يمسّهم المشروع.",
		caption: "حزمة المخططات المُعدّة لاعتماد الجهات ومالكي المرافق.",
		intro: "شهادات عدم الممانعة هي المسار الحرج الصامت. فقد يكون المشروع مصمَّماً وممولاً ومجهَّزاً بالكامل ومع ذلك يعجز عن البدء لأن مالك مرفق واحداً لم يعتمد مخططاً قُدِّم ناقصاً قبل شهرين.",
		body: ["نحدد شهادات عدم الممانعة التي يحتاجها نطاق العمل فعلاً، ونُجهّز حزمة المخططات التي تطلبها كل جهة ومالك، ونقدّم ونردّ على الملاحظات ونتابع الموافقات حتى الإصدار. فلكل جهة متطلباتها — وحزمة هيئة كهرباء ومياه دبي لا تشبه حزمة هيئة الطرق والمواصلات، وإرسال الحزمة الخاطئة هو ما يولّد أول رفض.", "والقيمة الحقيقية في معرفة التسلسل. فبعض الشهادات مشروطة بصدور غيرها أولاً، وتقديمها بترتيب خاطئ يضمن إعادتها. نُشغّلها بالتوازي حيث يمكن وبالتتابع حيث يلزم، ونعطيك صورة واقعية عن برنامج الموافقات لا صورة متفائلة."],
		scope: [
			"تقييم شهادات عدم الممانعة والموافقات التي يتطلبها نطاق العمل",
			"تجهيز حزمة المخططات والمستندات لكل جهة",
			"التقديم لهيئة الطرق والمواصلات وبلدية دبي وهيئة كهرباء ومياه دبي واتصالات ودو وإمباور",
			"التقديم لسلطة دبي للتطوير وتراخيص ودبي الجنوب وسلطات المناطق الحرة عند الاقتضاء",
			"الرد على الملاحظات وإعادة التقديم ومتابعة الموافقات",
			"ترتيب الموافقات المترابطة لتفادي الرفض غير الضروري",
			"تسليم مجموعة شهادات عدم الممانعة الصادرة ضمن وثائق المشروع"
		],
		specs: [
			["الجهات", "هيئة الطرق والمواصلات وبلدية دبي وهيئة كهرباء ومياه دبي واتصالات ودو وإمباور وسلطة دبي للتطوير وتراخيص ودبي الجنوب وسلطات المناطق الحرة"],
			["الاستخدامات", "الأعمال داخل حرم الطرق وعبور وتحويل المرافق والمداخل والمخارج وتطوير قطع الأراضي والتركيبات المؤقتة"],
			["المخرجات", "حزم مقدَّمة وموافقات متابَعة ومجموعة شهادات صادرة وبرنامج موافقات"],
			["التغطية", "دبي"]
		],
		faqs: [
			{
				q: "ما شهادات عدم الممانعة التي سيحتاجها مشروعنا؟",
				a: "يعتمد ذلك على موقع الأعمال وما تمسّه. أرسل لنا الموقع ونطاق العمل وسنُعِدّ لك قائمة بالجهات ومالكي المرافق المعنيين، مرتَّبة بالتسلسل الذي ينبغي مخاطبتهم به."
			},
			{
				q: "هل يمكنكم استخراج شهادات عدم الممانعة إذا كان مقاول آخر ينفّذ الأعمال؟",
				a: "نعم. تُقدَّم معالجة شهادات عدم الممانعة والتصاريح كخدمة مستقلة، وإن كانت بعض الموافقات تشترط كذلك أن يحمل المقاول المنفّذ اعتماد الجهة المعنية."
			},
			{
				q: "لماذا تُرفض طلبات شهادات عدم الممانعة؟",
				a: "عادةً بسبب حزمة ناقصة، أو مخطط بصيغة لا تناسب تلك الجهة، أو تقديم تمّ قبل صدور موافقة يعتمد عليها. والثلاثة قابلة للتفادي، وتفاديها هو جوهر هذه الخدمة."
			}
		]
	}
};
//#endregion
//#region src/data/services.ar.js
var emiratesAr = {
	dubai: {
		name: "دبي",
		authority: "هيئة الطرق والمواصلات وبلدية دبي",
		context: "تطبّق دبي أدقّ منظومة تصاريح في الدولة. ونحن مقاول معتمد لدى هيئة الطرق والمواصلات، نعمل يومياً وفق اشتراطات الهيئة وبلدية دبي وسلطة دبي للتطوير وتراخيص ودبي الجنوب — أي أن الموافقات وشهادات عدم الممانعة والتحويلات المرورية تُنجَز داخل الشركة لا عبر مقاول من الباطن.",
		areas: "الخليج التجاري والقوز وجبل علي ودبي الجنوب ومجمع دبي للاستثمار وند الشبا والبرشاء وسائر أنحاء الإمارة"
	},
	"abu-dhabi": {
		name: "أبوظبي",
		authority: "دائرة البلديات والنقل",
		context: "تُنفَّذ مشاريع أبوظبي وفق مواصفات دائرة البلديات والنقل وبلدية مدينة أبوظبي، ولكلٍّ منظومته في اعتماد المواد والاختبارات. وتتحرك فرقنا من دبي ومعها المعدات والمشغّلون ووثائق ضبط الجودة مُهيَّأة لمعايير أبوظبي منذ اليوم الأول.",
		areas: "مصفح ومدينة خليفة الصناعية (كيزاد) وطريق العين وجزيرة ياس والريم والمنطقة الغربية"
	},
	sharjah: {
		name: "الشارقة",
		authority: "هيئة الطرق والمواصلات في الشارقة وبلدية الشارقة",
		context: "تُنفَّذ أعمال الشارقة باعتمادات هيئة الطرق والمواصلات وبلدية الشارقة. وتحتاج المناطق الصناعية والأحياء السكنية الجديدة هنا إلى حزم أعمال ترابية وطرق سريعة التنفيذ وموثّقة جيداً، مع ضبط للغبار والنقل يفي بمتطلبات التفتيش البلدي.",
		areas: "المناطق الصناعية من 1 إلى 18 والسجعة ومويلح والزبير والمدينة الجامعية وكلباء"
	},
	ajman: {
		name: "عجمان",
		authority: "دائرة البلدية والتخطيط في عجمان",
		context: "تجمع عجمان بين تطوير سكني سريع الحركة ومناطق صناعية راسخة. وننفذ فيها حزم أعمال ترابية وطرق مضبوطة التسلسل باعتمادات دائرة البلدية والتخطيط، مصمَّمة لقطع الأراضي محدودة المساحة والوصول.",
		areas: "الجرف الصناعية ومنطقة عجمان الصناعية والزوراء ومصفوت والمنامة"
	},
	"ras-al-khaimah": {
		name: "رأس الخيمة",
		authority: "بلدية رأس الخيمة ودائرة الأشغال العامة",
		context: "أرض رأس الخيمة صخرية بقدر ما هي رملية. وتتعامل كسّاراتنا الهيدروليكية ومعداتنا ذات الأذرع الطويلة ومشغّلونا ذوو الخبرة المحجرية مع الأعمال الجبلية والطبقات الصلبة التي تتعثّر عندها أساطيل الحفر الاعتيادية، وذلك باعتمادات بلدية رأس الخيمة.",
		areas: "الغيل والحمراء والمناطق الصناعية في رأس الخيمة ودقداقة وخزام ومحور الجزيرة"
	},
	fujairah: {
		name: "الفجيرة",
		authority: "بلدية الفجيرة",
		context: "ننفّذ حزم الطرق والأسفلت على الساحل الشرقي منذ عام 2021، ومنها أعمال لشركة الفجيرة لصناعة الإسمنت في دبا. والتضاريس الجبلية وحركة الميناء ومسافات النقل الطويلة تُدرَج في البرنامج الزمني مسبقاً بدل اكتشافها في الموقع.",
		areas: "دبا ومسافي وميناء الفجيرة والمنطقة الحرة وقدفع ومحور طريق كلباء"
	},
	"umm-al-quwain": {
		name: "أم القيوين",
		authority: "بلدية أم القيوين",
		context: "مشاريع أم القيوين في الغالب أراضٍ بكر: قطع خام تحتاج إلى تنظيف وردم وتسوية قبل أن يُرفَع فيها أي منسوب. ونجلب قطار المعدات كاملاً في تعبئة واحدة حتى لا تدفع المواقع الصغيرة والمتوسطة ثمن تعبئات متكررة.",
		areas: "منطقة أم القيوين الصناعية والسلامة وفلج المعلا ومحور شارع الإمارات"
	}
};
var categoriesAr = {
	"earth-works": {
		name: "الأعمال الترابية",
		tagline: "تحريك التربة وتشكيلها ودمكها وفق المواصفات.",
		intro: "كل ما يسبق إنشاء مبنى أو طريق: القطع والردم والتسوية والدمك لتحويل الأرض الخام إلى منصة جاهزة للبناء ومُختبَرة. ونحن نملك المعدات — حفارات وجرافات ولوادر ومسوّيات ومداحل وكسّارات صخور — فيبقى البرنامج الزمني محكوماً بالعمل لا بتوفّر التأجير.",
		services: {
			excavation: {
				name: "الحفر",
				keyword: "مقاول حفريات",
				text: "حفر كلي وتفصيلي للبدرومات والأساسات والخدمات وممرات البنية التحتية — من الحفر المفتوح في الرمل إلى الطبقات الصلبة التي تُكسَر بالكسّارات الهيدروليكية. وتُخطَّط الميول والمدرّجات وفق التقرير الجيوتقني، ويُنقَل الناتج ويُطرَح بموجب تصريح."
			},
			"back-filling": {
				name: "أعمال الردم",
				keyword: "مقاول ردم",
				text: "ردم إنشائي وردم حول الخدمات يُوضَع على طبقات مضبوطة بمواد معتمدة، مع الترطيب والدمك حتى الكثافة المطلوبة. ومحيط الخنادق والبدرومات هو المصدر الكلاسيكي للهبوط لاحقاً، لذلك نختبر كل طبقة بدل الردم حتى الأعلى وانتظار الأفضل."
			},
			"cut-and-fill": {
				name: "القطع والردم",
				keyword: "مقاول قطع وردم",
				text: "عمليات قطع وردم متوازنة تصل بالموقع إلى المناسيب التصميمية مع إبقاء المواد في الموقع حيثما كانت صالحة. تُنفَّذ بضبط مساحي وتوجيه آلي، فتنخفض تكاليف النقل والاستيراد والطرح دون فقدان المقطع التصميمي."
			},
			leveling: {
				name: "التسوية والتمهيد",
				keyword: "مقاول تسوية أراضي",
				text: "تمهيد وتسوية دقيقة حتى المناسيب والميول التصميمية، سواء كان المطلوب منسوب تأسيس لطريق أو منصة بلاطة أو ساحة أو منطقة تخزين. وتحافظ المسوّيات وشفرات التوجيه بالأقمار الاصطناعية على السماحية عبر مساحات واسعة."
			},
			compaction: {
				name: "الدمك",
				keyword: "مقاول أعمال دمك",
				text: "دمك طبقة بطبقة بالمدحلة المناسبة لنوع المادة — هزّازة أسطوانية ملساء أو ذات أقدام أو صفيحة في الأماكن الضيقة — مدعوماً باختبارات الكثافة الحقلية وشهادات دمك تفي باعتماد الاستشاري والجهة المختصة."
			}
		}
	},
	"road-works": {
		name: "أعمال الطرق",
		tagline: "طرق الوصول والأسفلت وكل ما يحمل الحركة المرورية.",
		intro: "حزم طرق متكاملة من منسوب التأسيس حتى الطبقة السطحية: طبقة ما تحت الأساس وطبقة الأساس، وأسفلت الرابطة والطبقة السطحية، والإنترلوك وأحجار الأرصفة والمواقف والتخطيط الأرضي. وبصفتنا مقاول طرق معتمداً لدى هيئة الطرق والمواصلات، ننفّذ وفق مواصفات الجهة المختصة مع توثيق اعتمادات المواد والاختبارات أولاً بأول.",
		services: {
			"access-roads": {
				name: "طرق الوصول",
				keyword: "مقاول طرق وصول",
				text: "طرق وصول مؤقتة ودائمة إلى قطع الأراضي والمواقع والمصانع والمنشآت البعيدة — منسوب تأسيس وطبقة ما تحت الأساس وطبقة أساس وطبقة سطحية، مصمَّمة للأحمال التي ستستخدمها فعلاً. تُبنى مبكراً حتى لا تتوقف التوريدات الثقيلة عند حدود الموقع."
			},
			"road-base-laying": {
				name: "فرش طبقة الأساس",
				keyword: "مقاول فرش طبقة أساس",
				text: "توريد وفرش وترطيب ودمك طبقة ما تحت الأساس وطبقة الأساس بالسماكة والكثافة المحددتين. وتُرصد المناسيب مساحياً وتُختبَر الطبقات قبل تغطيتها بأي شيء — فهي الطبقة التي تقرر عمر الطريق."
			},
			"asphalt-works": {
				name: "أعمال الأسفلت",
				keyword: "مقاول أسفلت",
				text: "فرش أسفلت طبقة الرابطة والطبقة السطحية بالفرّادة وفق السماكة ودرجة الحرارة وتفصيل الوصلات المحددة، بخلطات معتمدة من محطات مرخّصة. ويشمل طبقة التلصيق وطبقة التأسيس وكشط الأسطح القائمة والدحل حتى الكثافة المطلوبة."
			},
			"road-maintenance": {
				name: "صيانة الطرق",
				keyword: "مقاول صيانة طرق",
				text: "صيانة مُبرمَجة وطارئة للطرق الداخلية والمناطق الصناعية وشبكات المجمعات: إعادة الطبقة السطحية وسدّ الشقوق وإصلاح الحواف وتنظيف التصريف وإعادة الحالة — مُجدوَلة لإبقاء الشبكة مفتوحة أثناء العمل."
			},
			"asphalt-patch-works": {
				name: "أعمال ترقيع الأسفلت",
				keyword: "مقاول ترقيع أسفلت",
				text: "قصّ بالمنشار وتكسير وإعادة تنفيذ ودمك — ترقيع يُنفَّذ بأصوله حتى لا تفشل الوصلة في الموسم الأول. مثالي بعد عبور الخدمات أو إعادة حالة الخنادق أو إصلاح الحفر والهبوط في المواقف والطرق الداخلية."
			},
			parkings: {
				name: "مواقف السيارات",
				keyword: "مقاول إنشاء مواقف سيارات",
				text: "مواقف متكاملة من التربة الطبيعية حتى التخطيط الأرضي: طبقة أساس وطبقة سطحية أسفلتية أو إنترلوك، وأحجار أرصفة، وميول تصريف، وصدّامات، وتخطيط المواقف ولوحاتها — وفق معايير التخطيط المعتمدة وجاهزة للاستخدام عند التسليم."
			},
			"heavy-duty-interlock-paving": {
				name: "تبليط الإنترلوك للأحمال الثقيلة",
				keyword: "مقاول تبليط إنترلوك",
				text: "إنترلوك وبلوك للأحمال الثقيلة للساحات ومناطق الحاويات وطرق الخدمة والأرضيات التي تعبرها الشاحنات المحمّلة والرافعات الشوكية. رمل فرش صحيح وحصر حواف وسماكة بلوك مناسبة — وهو الفرق بين ساحة تصمد وأخرى تتخدّد."
			},
			kerbstones: {
				name: "أحجار الأرصفة (الكيربستون)",
				keyword: "مقاول تركيب أحجار أرصفة",
				text: "توريد وتركيب أحجار الأرصفة والمجاري على استقامة ومنسوب فوق قاعدة وكتف خرساني — أحجار الطرق والمواقف والقطاعات المنحنية والأحجار المنخفضة عند المعابر والمداخل، منفَّذة وفق القطاع المعتمد لدى الجهة المختصة."
			},
			"road-markings": {
				name: "التخطيط الأرضي للطرق",
				keyword: "مقاول دهان وتخطيط طرق",
				text: "تخطيط أرضي بالثيرموبلاستيك والدهان البارد: خطوط المسارات والتظليل والأسهم والمعابر ومواقف السيارات وترقيمها والمطبّات الصوتية — مطبَّقة وفق معايير الجهة المختصة مع حبيبات عاكسة حيثما اشتُرطت."
			}
		}
	},
	"traffic-management": {
		name: "إدارة المرور",
		tagline: "التصاريح والتحويلات والعمل الآمن داخل الحركة المرورية.",
		intro: "العمل داخل ممر مروري حيّ مسألة تصاريح بقدر ما هي مسألة تنفيذ. نُعِدّ مخططات التحويلات المرورية، ونستخرج تصاريح هيئة الطرق والمواصلات، وننصب منظومة إدارة مرور مطابقة ونصونها، لتمضي أعمالك دون إغلاق الشبكة — ودون أن تستدعي إشعار إيقاف عمل.",
		services: {
			"lane-closure-permits": {
				name: "تصاريح إغلاق المسارات",
				keyword: "تصريح إغلاق مسار",
				text: "إعداد الطلب والمخططات واستصدار الموافقة لإغلاق مسار واحد أو عدة مسارات على طرق هيئة الطرق والمواصلات، بما يشمل نوافذ العمل الليلي وأطوال الانحراف وجداول اللوحات وإجراءات السلامة التي تشترطها الموافقة. نتولى الأمر من التقديم حتى صدور التصريح."
			},
			"road-closure-permits": {
				name: "تصاريح إغلاق الطرق",
				keyword: "تصريح إغلاق طريق",
				text: "إغلاق كامل للطرق والمسارات مع مسارات تحويل معتمدة: تبرير الأثر المروري ومخططات التحويل والبرامج المرحلية والتنسيق مع هيئة الطرق والمواصلات والشرطة والجهات المتأثرة قبل الإغلاق وأثناءه."
			},
			"traffic-management": {
				name: "خدمات إدارة المرور",
				keyword: "مقاول إدارة مرور",
				text: "توريد وتركيب وصيانة وإزالة منظومة إدارة المرور في الموقع: مخاريط وحواجز وعواكس ولوحات تحذيرية وإرشادية ولوحات أسهم ضوئية ووحدات تخفيف الصدم المركّبة على الشاحنات (TMA) ومنظّمو مرور مدرَّبون، مع تفتيش وصيانة طوال مدة الأعمال."
			}
		}
	},
	utilities: {
		name: "أعمال المرافق",
		tagline: "المداخل والمخارج وحماية الخدمات والموافقات التي تسبقها.",
		intro: "الأعمال التي تربط قطعة الأرض بالشبكة وتحافظ على سلامة الخدمات القائمة أثناء البناء. نحن معتمدون لدى هيئة الطرق والمواصلات لأعمال المداخل والمخارج، ونتولّى سلسلة التصاريح — حق الطريق وشهادات عدم الممانعة وحماية الخدمات ونقل المرافق — حتى لا تتحوّل الموافقات إلى المسار الحرج في برنامجك.",
		services: {
			"rta-approved-entry-exit-works": {
				name: "أعمال المداخل والمخارج المعتمدة",
				keyword: "مقاول مداخل ومخارج معتمد من هيئة الطرق والمواصلات",
				text: "تنفيذ مداخل ومخارج قطع الأراضي على طرق هيئة الطرق والمواصلات وفق التصميم المعتمد: أحجار منخفضة وأرضية مدخل ووصلات انتقالية واستمرارية للتصريف وتخطيط ولوحات — ينفّذها مقاول معتمد لدى الهيئة، فيُقبَل العمل ويصبح المدخل قابلاً للاستخدام نظامياً."
			},
			"rta-service-protection": {
				name: "حماية الخدمات",
				keyword: "أعمال حماية الخدمات",
				text: "حماية المرافق القائمة داخل حرم الطريق أثناء التنفيذ: حفر استكشافي ومسح للخدمات، وحماية خرسانية أو بأكمام، وبلاطات حماية، ودعامات للخدمات المكشوفة، وإعادة الحالة — وفق متطلبات هيئة الطرق والمواصلات ومالكي المرافق."
			},
			"row-permits": {
				name: "تصاريح حق الطريق",
				keyword: "تصريح حق الطريق في دبي",
				text: "طلبات تصاريح حق الطريق للأعمال داخل حرم الطرق والأراضي العامة: المخططات وبيانات طرق العمل وشهادات عدم الممانعة من الجهات المعنية والمتابعة حتى الإصدار، إضافة إلى الالتزام باشتراطات التصريح أثناء التنفيذ حتى الإنجاز."
			},
			"utilities-shifting": {
				name: "نقل وتحويل المرافق",
				keyword: "مقاول نقل وتحويل خدمات",
				text: "تحويل ونقل الخدمات المتعارضة مع الأعمال الجديدة — مجاري الكابلات والكابلات وخطوط المياه والري — بالتنسيق مع هيئة كهرباء ومياه دبي واتصالات ودو وإمباور والجهة المختصة، بما يشمل نوافذ الفصل والحماية وإعادة الحالة."
			},
			"noc-services": {
				name: "خدمات شهادات عدم الممانعة",
				keyword: "شهادة عدم ممانعة في دبي",
				text: "إعداد ومعالجة شهادات عدم الممانعة لدى الجهات ومالكي المرافق الذين يمسّهم المشروع. نُجهّز حزمة المخططات ونقدّمها ونردّ على الملاحظات ونتابع الموافقات حتى الإصدار ليبدأ التنفيذ في موعده."
			}
		}
	}
};
//#endregion
//#region src/data/services.js
var EMIRATES = [
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
var CATEGORIES = [
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
];
var OVERLAYS = { ar: {
	emirates: emiratesAr,
	categories: categoriesAr,
	content: serviceContentAr
} };
function buildEmirates(locale) {
	const overlay = OVERLAYS[locale]?.emirates;
	return EMIRATES.map((e) => ({
		...e,
		...overlay?.[e.slug] || {}
	}));
}
function buildCategories(locale) {
	const overlay = OVERLAYS[locale];
	return CATEGORIES.map((c) => {
		const co = overlay?.categories?.[c.slug];
		return {
			...c,
			...co ? {
				name: co.name,
				tagline: co.tagline,
				intro: co.intro
			} : {},
			tallImg: `/images/services/category-${c.slug}-tall.jpg`,
			services: c.services.map((s) => {
				const merged = {
					...s,
					...serviceContent[s.slug] || {},
					...co?.services?.[s.slug] || {},
					...overlay?.content?.[s.slug] || {}
				};
				return {
					...merged,
					tallImg: merged.img.replace(/\.jpg$/, "-tall.jpg")
				};
			})
		};
	});
}
function buildTaxonomy(locale) {
	const emirates = buildEmirates(locale);
	const categories = buildCategories(locale);
	const allServices = categories.flatMap((c) => c.services.map((s) => ({
		...s,
		category: c,
		path: `/services/${c.slug}/${s.slug}`
	})));
	return {
		locale,
		emirates,
		categories,
		emirateBySlug: Object.fromEntries(emirates.map((e) => [e.slug, e])),
		categoryBySlug: Object.fromEntries(categories.map((c) => [c.slug, c])),
		allServices,
		serviceBySlug: Object.fromEntries(allServices.map((s) => [s.slug, s]))
	};
}
var taxonomies = Object.fromEntries(LOCALES.map((l) => [l, buildTaxonomy(l)]));
function taxonomyFor(locale) {
	return taxonomies[locale] || taxonomies["en"];
}
var base = taxonomies["en"];
base.emirates;
var serviceCategories = base.categories;
base.emirateBySlug;
base.categoryBySlug;
base.allServices;
base.serviceBySlug;
function emiratesFor(category, locale = "en") {
	const list = taxonomyFor(locale).emirates;
	return category.coverage === "all" ? list : list.filter((e) => category.coverage.includes(e.slug));
}
function resolveServiceSegment(category, slug, locale = "en") {
	const tax = taxonomyFor(locale);
	if (tax.emirateBySlug[slug] && emiratesFor(category, locale).some((e) => e.slug === slug)) return {
		kind: "emirate",
		emirate: tax.emirateBySlug[slug]
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
//#region src/data/content.ar.js
var companyAr = {
	name: "إيرث موفرز إنترناشيونال",
	legalName: "إيرث موفرز إنترناشيونال للمقاولات الرئيسية ذ.م.م",
	tagline: "أعمال ترابية وإنشاء طرق — دبي، الإمارات",
	address: [
		"برج كابيتال الذهبي",
		"مكتب 706، الطابق السابع",
		"الخليج التجاري، دبي، الإمارات"
	]
};
var heroSlidesAr = [
	{
		eyebrow: "إيرث موفرز إنترناشيونال — دبي، الإمارات",
		titlePre: "مقاول الطرق ",
		titleGold: "الأول المعتمد",
		titlePost: " من هيئة الطرق والمواصلات في دبي",
		text: "ننفّذ أعمال إنشاء الطرق بجودة عالية وموثوقية تامة وبتقنيات حديثة — شريكك الموثوق في الطرق السريعة وطرق الوصول ومشاريع البنية التحتية."
	},
	{
		eyebrow: "نبني الأرض التي تنهض منها الإمارات",
		titlePre: "أعمال ترابية وحفر و",
		titleGold: "إنشاءات ثقيلة",
		titlePost: ".",
		text: "مشاريع بنية تحتية وتجارية وصناعية في مختلف أنحاء الإمارات — تأسست في مونتريال عام 1990، وفي دبي منذ 2005."
	},
	{
		eyebrow: "أعمال أسفلت وطرق معتمدة من هيئة الطرق والمواصلات",
		titlePre: "أسفلت يُفرَش ضمن ",
		titleGold: "سماحيات دقيقة",
		titlePost: ".",
		text: "من طبقة ما تحت الأساس حتى الطبقة السطحية — مدموك ومُختبَر ومُسلَّم جاهزاً للحركة."
	}
];
var certificationsAr = [
	{
		title: "معتمد من الهيئة",
		text: "مقاول طرق معتمد لدى هيئة الطرق والمواصلات"
	},
	{
		title: "بلدية دبي",
		text: "متوافق مع معايير البلدية ومنظومة تصاريحها"
	},
	{
		title: "منذ عام 1990",
		text: "تأسست في مونتريال، وفي دبي منذ 2005"
	},
	{
		title: "السلامة أولاً",
		text: "بيانات طرق العمل والتصاريح في كل مرحلة"
	}
];
var hseAr = [
	{
		title: "الصحة والسلامة",
		text: "كل مهمة مخطَّطة عبر بيانات طرق العمل وتصاريح العمل ولقاءات السلامة اليومية — ليعود كل فرد إلى بيته سالماً، كل يوم."
	},
	{
		title: "الجودة",
		text: "اختبارات دمك ومراجعة مناسيب وشهادات تسليم في كل حزمة. أرض يمكنك البناء عليها، وموثّقة."
	},
	{
		title: "البيئة",
		text: "كبح الغبار والتخلص المنضبط وإعادة تدوير المواد حيثما سمحت الأرض — نبني دون أن نترك أثراً لا ينبغي تركه."
	}
];
var newsAr = [
	{
		title: "18 مشروع طرق كبرى لهيئة الطرق والمواصلات تخفّف ازدحام دبي",
		tag: "رؤية قطاعية"
	},
	{
		title: "مراحل إنشاء الطرق والمعدات التي تحتاجها",
		tag: "من مدونتنا"
	},
	{
		title: "تأجير وحدات TMA في دبي وأبوظبي — أعمال طرق أكثر أماناً",
		tag: "خدمات"
	}
];
var statsAr = [
	{
		label: "عاماً منذ التأسيس",
		note: "مونتريال، 1990"
	},
	{
		label: "عاماً في الإمارات",
		note: "دبي، منذ 2005"
	},
	{
		label: "تخصصاً في الخدمات",
		note: "من الأعمال الترابية حتى الأسفلت"
	},
	{
		label: "جاهزية الأسطول",
		note: "في مختلف الإمارات"
	}
];
var clientsAr = [
	"نخيل ش.م.ع",
	"بلدية دبي",
	"شركة الفجيرة لصناعة الإسمنت",
	"مقاول معتمد من هيئة الطرق والمواصلات",
	"بنية تحتية · تجاري · صناعي"
];
var projectsAr = [
	{
		client: "شركة الفجيرة لصناعة الإسمنت",
		location: "دبا، الفجيرة",
		sector: "طرق وأسفلت",
		scope: "إزالة الأسفلت القديم والتسوية وطبقة الأساس وطبقة ما تحت الأساس والدمك وفرش أسفلت جديد."
	},
	{
		client: "بلدية دبي",
		location: "دبي",
		sector: "لوجستيات متخصصة",
		scope: "نقل حيوانات من مطار دبي إلى السفاري — مخطَّط ومُصرَّح ومنفَّذ دون أي حادث."
	},
	{
		client: "نخيل ش.م.ع",
		location: "دبي",
		sector: "أعمال بحرية",
		scope: "تسوية رمال الشاطئ ووضع الصخور ودمك المنطقة."
	}
];
var sectorsAr = [
	{
		title: "البنية التحتية",
		text: "طرق وطرق سريعة وممرات مرافق للجهات الحكومية."
	},
	{
		title: "التجاري",
		text: "تجهيز المواقع والأعمال التمكينية للمشاريع التجارية."
	},
	{
		title: "الصناعي",
		text: "أعمال ترابية ثقيلة للمصانع ومعامل الإسمنت والمنشآت اللوجستية."
	},
	{
		title: "النفط والغاز",
		text: "أعمال خنادق وخطوط أنابيب تُنفَّذ وفق معايير القطاع."
	},
	{
		title: "البحري والساحلي",
		text: "تشكيل الشواطئ ووضع الصخور وأعمال الحماية الساحلية."
	},
	{
		title: "السكني",
		text: "تنظيف وتمهيد الأراضي للمجمعات السكنية المخطَّطة."
	}
];
var processAr = [
	{
		title: "المعاينة والتقييم",
		text: "نعاين الأرض ونراجع المخططات ونرصد المناسيب، ونُسعّر النطاق الحقيقي لا تقديراً له."
	},
	{
		title: "التخطيط والتعبئة",
		text: "بيانات طرق العمل والتصاريح والالتزام باشتراطات الهيئة جاهزة، والمعدات المناسبة في الموقع."
	},
	{
		title: "التنفيذ",
		text: "مشغّلون ذوو خبرة ينقلون التربة على استقامة ومنسوب، مع إشراف وضبط جودة في كل طبقة."
	},
	{
		title: "الدمك والتسليم",
		text: "اختبارات وشهادات دمك وتسليم نظيف — أرض يستطيع مشروعك البناء عليها."
	}
];
var valuesAr = [
	{
		title: "السلامة أولاً ودائماً",
		text: "كل بيان طريقة عمل وكل تصريح وكل مرحلة — مخطَّطة ليعود الناس إلى بيوتهم سالمين."
	},
	{
		title: "الامتثال مبني في العمل",
		text: "معتمدون لدى هيئة الطرق والمواصلات ومتوافقون مع معايير البلدية، فلا تعطّل الموافقات برنامجك."
	},
	{
		title: "عمق الأسطول",
		text: "امتلاك أحد أكبر أساطيل الحفر الثقيل في دبي يعني ألا تنتظر معدة."
	},
	{
		title: "تعامل مباشر",
		text: "نطاق واضح وتسعير صادق وتواصل يمكنك التخطيط على أساسه."
	}
];
var fleetAr = [
	"حفارات",
	"جرافات",
	"لوادر ذات إطارات",
	"حفارات خوازيق",
	"كسّارات صخور",
	"مسوّيات",
	"مداحل دمك",
	"رافعات",
	"قلابات ومقطورات",
	"وحدات TMA"
];
var timelineAr = [
	{
		title: "التأسيس في مونتريال، كندا",
		text: "انطلقت إيرث موفرز إنترناشيونال كمقاول أعمال ترابية ومعدات ثقيلة في مونتريال."
	},
	{
		title: "التوسع إلى دبي، الإمارات",
		text: "أسّست الشركة عملياتها في دبي مع تسارع الإمارة نحو سوق إنشاءات عالمي."
	},
	{
		title: "مشاريع فارقة",
		text: "مشاريع لنخيل ش.م.ع وبلدية دبي وشركة الفجيرة لصناعة الإسمنت رسّخت سمعة الشركة عبر القطاعات."
	},
	{
		title: "اليوم",
		text: "مقاول طرق وأعمال ترابية موثوق ومعتمد، بأحد أكبر أساطيل الحفر الثقيل في دبي."
	}
];
var approvalsAr = [
	"هيئة الطرق والمواصلات",
	"FNRC",
	"بلدية دبي",
	"طاقة",
	"بلدية الفجيرة",
	"طرق ومواصلات الشارقة",
	"بارسونز",
	"سلطة دبي للتطوير",
	"دبي الجنوب",
	"موانئ دبي"
];
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
var hse = [
	{
		title: "Health & Safety",
		text: "Every task is planned through method statements, permits to work and daily toolbox talks — so every person goes home safe, every day."
	},
	{
		title: "Quality",
		text: "Compaction tests, level checks and handover certificates on every package. Ground you can build on, documented."
	},
	{
		title: "Environment",
		text: "Dust suppression, controlled disposal and material recycling wherever the ground allows — building without leaving a mark we shouldn’t."
	}
];
var news = [
	{
		title: "18 Major RTA Road Projects That Will Slash Dubai Traffic",
		tag: "Industry Insight",
		href: "https://earthmoversint.com/rta-road-projects-dubai-traffic/"
	},
	{
		title: "Road Construction Process & Equipment Needs",
		tag: "From Our Blog",
		href: "https://earthmoversint.com/road-construction-process-equipment-needs/"
	},
	{
		title: "TMA Rental in Dubai & Abu Dhabi — Safer Road Works",
		tag: "Services",
		href: "https://tmarentalabudhabi.earthmoversint.com/"
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
var approvals = [
	"RTA",
	"FNRC",
	"Dubai Municipality",
	"TAQA",
	"Fujairah Municipality",
	"Sharjah RTA",
	"Parsons",
	"DDA",
	"Dubai South",
	"Dubai Ports"
];
var clients = [
	"Nakheel PJSC",
	"Dubai Municipality",
	"Fujairah Cement Industry",
	"RTA-Approved Contractor",
	"Infrastructure · Commercial · Industrial"
];
var featuredServices = [
	{
		id: "excavation",
		title: "Excavation",
		icon: "excavator",
		img: "/images/library/operator-backhoe.jpg",
		blurb: "Bulk excavation, basements and deep digs, powered by one of the largest heavy-excavation fleets in Dubai."
	},
	{
		id: "road-construction",
		title: "Road Construction",
		icon: "road",
		img: "/images/project-fujairah.jpg",
		blurb: "RTA-approved road contracting — road base, sub-base, compaction and finishing for roads across the UAE."
	},
	{
		id: "cut-and-fill",
		title: "Cut & Fill",
		icon: "grade",
		img: "/images/fleet.jpg",
		blurb: "Precision grading and levelling to design elevations, balancing cut and fill for efficient earthworks."
	},
	{
		id: "site-preparation",
		title: "Site Preparation",
		icon: "site",
		img: "/images/about.jpg",
		blurb: "Land clearing, demolition and ground stabilisation that hands over a clean, build-ready site."
	},
	{
		id: "asphalt",
		title: "Asphalt Works",
		icon: "asphalt",
		img: "/images/library/golden-hour-site.jpg",
		blurb: "Old asphalt removal, milling and new asphalt laying with certified materials and tight tolerances."
	},
	{
		id: "equipment-rental",
		title: "Equipment Rental",
		icon: "crane",
		img: "/images/library/tower-cranes.jpg",
		blurb: "Excavators, bulldozers, loaders, cranes and TMA units — operated or bare rental, project-ready."
	}
];
var serviceGroups = [
	{
		id: "earthworks",
		number: "01",
		title: "Earthworks & Ground Engineering",
		intro: "The full early-stage scope that turns raw land into a build-ready platform — measured, moved and compacted to specification.",
		services: [
			{
				title: "Excavation",
				text: "Bulk excavation, basement digs and confined works delivered with excavators, rock breakers and specialised machinery from one of the largest fleets in Dubai."
			},
			{
				title: "Cut & Fill",
				text: "Balanced cut-and-fill operations that grade sites to design elevations while minimising haulage and material waste."
			},
			{
				title: "Earth Works",
				text: "End-to-end earthworks — excavation, grading, levelling and compaction — for infrastructure, commercial and industrial projects."
			},
			{
				title: "Site Preparation",
				text: "Clearing, grubbing, demolition and ground stabilisation that hands over a clean, compacted, build-ready site."
			},
			{
				title: "Land Clearing",
				text: "Clearing programmes for residential, commercial and infrastructure developments across Dubai and the wider UAE."
			},
			{
				title: "Mountain & Rock Removal",
				text: "Heavy rock breaking and mountain removal using hydraulic breakers and high-reach machines — no compromise on safety."
			},
			{
				title: "Trenching",
				text: "Utility, pipeline and drainage trenching cut to line and level, with shoring and backfill to specification."
			},
			{
				title: "Piling",
				text: "Piling rigs and foundation works that put reliable ground under heavy structures."
			}
		]
	},
	{
		id: "roads",
		number: "02",
		title: "Roads & Infrastructure",
		intro: "As a trusted RTA-approved contractor, we build and maintain the roads Dubai runs on — from sub-base to final surface.",
		services: [
			{
				title: "Road Construction",
				text: "RTA-approved road contracting: formation, road base, sub-base, compaction and finishing for internal roads, highways and industrial access."
			},
			{
				title: "Asphalt Works",
				text: "Removal of old asphalt, milling, and new asphalt laying with certified mixes, laid to tight tolerances."
			},
			{
				title: "Highway Construction",
				text: "Highway contracting for the RTA and private clients — large-scale earthworks, pavement structure and road furniture."
			},
			{
				title: "Road Maintenance",
				text: "Ongoing road maintenance and rehabilitation works that keep networks safe, compliant and open to traffic."
			},
			{
				title: "Concrete Repair & Maintenance",
				text: "Structural concrete repair, surface reinstatement and preventive maintenance for roads and hardstandings."
			},
			{
				title: "Pipeline Maintenance",
				text: "Excavation, protection and reinstatement works around live pipeline corridors, executed to oil-and-gas standards."
			}
		]
	},
	{
		id: "supply",
		number: "03",
		title: "Supply, Logistics & Marine",
		intro: "Material, machines and logistics — the supporting muscle that keeps programmes moving on schedule.",
		services: [
			{
				title: "Construction Material Supply",
				text: "Aggregates, road base, sub-base and fill material supplied and delivered against programme."
			},
			{
				title: "Material Shifting & Haulage",
				text: "Bulk material shifting and transport with a dedicated tipper and trailer fleet, managed loads and disposal."
			},
			{
				title: "Heavy Equipment Rental",
				text: "Excavators, bulldozers, loaders, cranes and TMA (truck-mounted attenuator) units — operated or bare, short or long term."
			},
			{
				title: "Marine & Coastal Works",
				text: "Beach levelling, boulder placement and coastal protection works, delivered for clients such as Nakheel PJSC."
			},
			{
				title: "Recycling & Demolition",
				text: "Controlled demolition with segregation and recycling of construction material wherever the ground allows."
			}
		]
	}
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
var process = [
	{
		step: "01",
		title: "Survey & Assess",
		text: "We walk the ground, review drawings and survey levels, and price the real scope — not an estimate of it."
	},
	{
		step: "02",
		title: "Plan & Mobilise",
		text: "Method statements, permits and RTA compliance in place, the right machines mobilised to site."
	},
	{
		step: "03",
		title: "Execute",
		text: "Experienced operators move the earth to line and level, with supervision and QA at every lift."
	},
	{
		step: "04",
		title: "Compact & Hand Over",
		text: "Testing, compaction certificates and a clean handover — ground your project can build on."
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
var zip = (base, overlay) => overlay ? base.map((item, i) => ({
	...item,
	...overlay[i] || {}
})) : base;
var EN = {
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
	serviceGroups
};
var BY_LOCALE = {
	en: EN,
	ar: {
		...EN,
		company: {
			...company,
			...companyAr
		},
		heroSlides: zip(heroSlides, heroSlidesAr),
		certifications: zip(certifications, certificationsAr),
		hse: zip(hse, hseAr),
		news: zip(news, newsAr),
		stats: zip(stats, statsAr),
		clients: clientsAr,
		projects: zip(projects, projectsAr),
		sectors: zip(sectors, sectorsAr),
		process: zip(process, processAr),
		values: zip(values, valuesAr),
		fleet: fleetAr,
		timeline: zip(timeline, timelineAr),
		approvals: approvalsAr
	}
};
function contentFor(locale) {
	return BY_LOCALE[locale] || BY_LOCALE["en"];
}
//#endregion
//#region src/i18n/useLocale.js
function useLocale() {
	const { pathname } = useLocation();
	const { locale, base } = splitLocale(pathname);
	const meta = LOCALE_META[locale] || LOCALE_META.en;
	return {
		locale,
		dir: meta.dir,
		isRtl: meta.dir === "rtl",
		meta,
		base,
		t: translator(locale),
		tax: taxonomyFor(locale),
		content: contentFor(locale),
		href: (path) => localeHref(path, locale),
		alternates: alternatesFor(base)
	};
}
//#endregion
//#region src/components/Nav.jsx
var LINKS = [
	{
		path: "/",
		key: "nav.home"
	},
	{
		path: "/about",
		key: "nav.about"
	},
	{
		path: "/services",
		key: "nav.services"
	},
	{
		path: "/projects",
		key: "nav.projects"
	},
	{
		path: "/contact",
		key: "nav.contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = useState(false);
	const [hovered, setHovered] = useState(false);
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const { t, tax, content, href, locale } = useLocale();
	const { company } = content;
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
	const { base } = splitLocale(location.pathname);
	const known = [
		"/",
		"/about",
		"/services",
		"/projects",
		"/contact"
	].includes(base) || /^\/services\/[a-z-]+(\/[a-z-]+)?$/.test(base);
	const solid = scrolled || hovered || open || !known;
	const other = LOCALES.find((l) => l !== locale);
	const otherHref = localeHref(base, other);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("header", {
		className: `nav ${solid ? "solid" : "overlay"}`,
		onMouseEnter: () => setHovered(true),
		onMouseLeave: () => setHovered(false),
		children: /* @__PURE__ */ jsxs("div", {
			className: "wrap nav-inner",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: href("/"),
					className: "brand",
					"aria-label": t("nav.homeAria"),
					children: /* @__PURE__ */ jsx(Logo, { variant: solid ? "dark" : "light" })
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "nav-links",
					"aria-label": t("nav.primary"),
					children: [
						LINKS.map((l) => l.path === "/services" ? /* @__PURE__ */ jsxs("div", {
							className: "nav-item",
							children: [/* @__PURE__ */ jsx(NavLink, {
								to: href(l.path),
								className: ({ isActive }) => `nav-link${isActive ? " active" : ""}`,
								children: t(l.key)
							}), /* @__PURE__ */ jsx("div", {
								className: "nav-mega",
								children: /* @__PURE__ */ jsxs("div", {
									className: "wrap nav-mega-inner",
									children: [tax.categories.map((c) => /* @__PURE__ */ jsxs("div", {
										className: "nav-mega-col",
										children: [
											/* @__PURE__ */ jsxs(Link, {
												to: href(`/services/${c.slug}`),
												className: "nav-mega-head",
												children: [/* @__PURE__ */ jsx("span", { children: c.name }), /* @__PURE__ */ jsx(Arrow, {})]
											}),
											/* @__PURE__ */ jsx("span", {
												className: "nav-mega-where",
												children: c.coverage === "all" ? t("cov.availableAll") : t("cov.availableDubai")
											}),
											/* @__PURE__ */ jsx("ul", {
												className: "nav-mega-list",
												children: c.services.map((sv) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: href(`/services/${c.slug}/${sv.slug}`),
													children: sv.name
												}) }, sv.slug))
											})
										]
									}, c.slug)), /* @__PURE__ */ jsxs("div", {
										className: "nav-mega-foot",
										children: [/* @__PURE__ */ jsxs(Link, {
											to: href("/services"),
											className: "text-link",
											children: [
												t("nav.allServices"),
												" ",
												/* @__PURE__ */ jsx(Arrow, {})
											]
										}), /* @__PURE__ */ jsxs("span", {
											className: "nav-mega-contact",
											children: [
												t("nav.talkToUs"),
												" ",
												/* @__PURE__ */ jsx("a", {
													href: company.phoneHref,
													dir: "ltr",
													children: company.phone
												})
											]
										})]
									})]
								})
							})]
						}, l.path) : /* @__PURE__ */ jsx(NavLink, {
							to: href(l.path),
							end: l.path === "/",
							className: ({ isActive }) => `nav-link${isActive ? " active" : ""}`,
							children: t(l.key)
						}, l.path)),
						/* @__PURE__ */ jsx("span", {
							className: "nav-rule",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: otherHref,
							className: "nav-link nav-lang",
							lang: other,
							hrefLang: other,
							"aria-label": t("nav.switchAria"),
							children: t("nav.switchTo")
						}),
						/* @__PURE__ */ jsx(Link, {
							to: href("/contact"),
							className: "btn btn-solid nav-cta",
							children: t("nav.quote")
						})
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					className: `nav-burger${open ? " open" : ""}`,
					"aria-label": open ? t("nav.closeMenu") : t("nav.openMenu"),
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
		children: [
			LINKS.map((l) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
				to: href(l.path),
				onClick: () => setOpen(false),
				children: t(l.key)
			}), l.path === "/services" && /* @__PURE__ */ jsx("div", {
				className: "sub-links",
				children: tax.categories.map((c) => /* @__PURE__ */ jsx(Link, {
					to: href(`/services/${c.slug}`),
					onClick: () => setOpen(false),
					children: c.name
				}, c.slug))
			})] }, l.path)),
			/* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Link, {
				to: otherHref,
				className: "mobile-lang",
				lang: other,
				hrefLang: other,
				"aria-label": t("nav.switchAria"),
				onClick: () => setOpen(false),
				children: [t("nav.switchTo"), /* @__PURE__ */ jsx("span", {
					className: "mobile-lang-note",
					children: t("nav.language")
				})]
			}) }),
			/* @__PURE__ */ jsxs("div", {
				className: "mobile-menu-contact",
				children: [/* @__PURE__ */ jsx("a", {
					href: company.phoneHref,
					dir: "ltr",
					children: company.phone
				}), /* @__PURE__ */ jsx("a", {
					href: `mailto:${company.email}`,
					dir: "ltr",
					children: company.email
				})]
			})
		]
	})] });
}
//#endregion
//#region src/components/Footer.jsx
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const { t, tax, content, href } = useLocale();
	const { company } = content;
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
								to: href("/"),
								className: "brand",
								"aria-label": t("nav.homeAria"),
								children: /* @__PURE__ */ jsx(Logo, { variant: "light" })
							}),
							/* @__PURE__ */ jsx("p", { children: t("foot.blurb", {
								founded: company.founded,
								inUAE: company.inUAE
							}) }),
							/* @__PURE__ */ jsxs("div", {
								className: "footer-certs",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "footer-cert",
										children: t("foot.certRta")
									}),
									/* @__PURE__ */ jsx("span", {
										className: "footer-cert",
										children: t("foot.certDm")
									}),
									/* @__PURE__ */ jsx("span", {
										className: "footer-cert",
										children: t("foot.certSince")
									})
								]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ jsx("h4", { children: t("foot.company") }),
							/* @__PURE__ */ jsx(Link, {
								to: href("/about"),
								children: t("nav.about")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: href("/services"),
								children: t("nav.services")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: href("/projects"),
								children: t("nav.projects")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: href("/contact"),
								children: t("nav.contact")
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [/* @__PURE__ */ jsx("h4", { children: t("lbl.services") }), tax.categories.map((c) => /* @__PURE__ */ jsx(Link, {
							to: href(`/services/${c.slug}`),
							children: c.name
						}, c.slug))]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [/* @__PURE__ */ jsx("h4", { children: t("foot.areas") }), tax.emirates.map((e) => /* @__PURE__ */ jsx(Link, {
							to: href(`/services/road-works/${e.slug}`),
							children: e.name
						}, e.slug))]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "footer-col",
						children: [
							/* @__PURE__ */ jsx("h4", { children: t("foot.contact") }),
							/* @__PURE__ */ jsx("a", {
								href: company.phoneHref,
								dir: "ltr",
								children: company.phone
							}),
							/* @__PURE__ */ jsx("a", {
								href: `mailto:${company.email}`,
								dir: "ltr",
								children: company.email
							}),
							company.address.map((line) => /* @__PURE__ */ jsx("span", { children: line }, line)),
							/* @__PURE__ */ jsxs("a", {
								className: "footer-map",
								href: company.mapsLink,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": `${company.legalName} — ${t("foot.directions")}`,
								children: [/* @__PURE__ */ jsx("iframe", {
									title: `${company.legalName} — ${t("foot.contact")}`,
									src: `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`,
									loading: "lazy",
									referrerPolicy: "no-referrer-when-downgrade",
									tabIndex: -1
								}), /* @__PURE__ */ jsx("span", {
									className: "footer-map-cta",
									children: t("foot.directions")
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
					". ",
					t("foot.rights")
				] }), /* @__PURE__ */ jsxs("span", {
					dir: "ltr",
					children: [
						company.coordinates,
						" — ",
						t("foot.place")
					]
				})]
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
	const { content } = useLocale();
	const { clients } = content;
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
function CTA({ title, text }) {
	const { t, content, href } = useLocale();
	const { company } = content;
	return /* @__PURE__ */ jsx("section", {
		className: "cta-panel",
		children: /* @__PURE__ */ jsxs("div", {
			className: "cta-inner",
			children: [
				/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
					className: "eyebrow",
					children: t("cta.start")
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
							to: href("/contact"),
							className: "btn btn-ink",
							children: [
								t("cta.quote"),
								" ",
								/* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })
							]
						}), /* @__PURE__ */ jsx("a", {
							href: company.phoneHref,
							className: "btn btn-ghost",
							dir: "ltr",
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
							dir: "ltr",
							children: company.email
						}), /* @__PURE__ */ jsx("span", { children: company.address.join("، ") })]
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
	const { t, content, href } = useLocale();
	const { heroSlides } = content;
	useEffect(() => {
		const id = setInterval(() => setActive((a) => (a + 1) % heroSlides.length), 6e3);
		return () => clearInterval(id);
	}, [heroSlides.length]);
	const slide = heroSlides[active];
	return /* @__PURE__ */ jsxs("section", {
		className: "hero",
		"aria-label": t("home.heroAria"),
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
								to: href("/contact"),
								className: "btn btn-solid",
								children: t("cta.quote")
							}), /* @__PURE__ */ jsxs(Link, {
								to: href("/projects"),
								className: "text-link",
								style: { color: "#fff" },
								children: [
									t("home.exploreProjects"),
									" ",
									/* @__PURE__ */ jsx(Arrow, {})
								]
							})]
						})
					})
				]
			}, active),
			/* @__PURE__ */ jsx("div", {
				className: "hero-dots",
				role: "tablist",
				"aria-label": t("home.slidesAria"),
				children: heroSlides.map((s, i) => /* @__PURE__ */ jsx("button", {
					className: `hero-dot${i === active ? " active" : ""}`,
					"aria-label": t("home.slideN", { n: i + 1 }),
					onClick: () => setActive(i)
				}, s.img))
			})
		]
	});
}
function Home() {
	const { t, tax, content, href } = useLocale();
	const { stats, projects, fleet, certifications, images } = content;
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
					children: [/* @__PURE__ */ jsx("span", { children: t("home.certRow") }), certifications.map((c) => /* @__PURE__ */ jsx("strong", { children: c.title }, c.title))]
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
							children: t("home.workEyebrow")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("home.workTitle")
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href("/projects"),
							className: "text-link",
							children: [
								t("home.allProjects"),
								" ",
								/* @__PURE__ */ jsx(Arrow, {})
							]
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
						children: t("home.promiseEyebrow")
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ jsxs("h2", { children: [t("home.promise"), /* @__PURE__ */ jsx("em", { children: t("home.promiseEm") })] })
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
								children: t("home.whatEyebrow")
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: t("home.whatTitle")
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx("p", {
									className: "lead",
									children: t("home.whatLead")
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "cat-grid",
					children: tax.categories.map((c, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 70,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href(`/services/${c.slug}`),
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
										children: t("home.plusServices", { n: c.services.filter((s) => s.hideOnHome).length })
									})]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "cat-tile-foot",
									children: [/* @__PURE__ */ jsx("span", {
										className: "cat-tile-where",
										children: c.coverage === "all" ? t("cov.availableAll") : t("cov.availableDubai")
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-link",
										children: [
											t("cta.explore"),
											" ",
											/* @__PURE__ */ jsx(Arrow, {})
										]
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
							children: t("home.fleetEyebrow")
						}) }),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("home.fleetTitle")
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ jsx("p", {
								className: "lead",
								children: t("home.fleetLead")
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
								to: href("/contact"),
								className: "btn btn-solid",
								children: t("home.rentEquipment")
							})
						})
					]
				}), /* @__PURE__ */ jsxs(Reveal, {
					delay: 200,
					className: "fleet-art",
					children: [/* @__PURE__ */ jsx(Photo, {
						src: images.fleet,
						alt: t("home.fleetAlt"),
						fallback: /* @__PURE__ */ jsx(FleetScene, {})
					}), /* @__PURE__ */ jsxs("div", {
						className: "fleet-art-caption",
						children: [/* @__PURE__ */ jsx("span", { children: t("home.fleetCaption") }), /* @__PURE__ */ jsx("span", { children: t("home.fleetOperated") })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsx(Marquee, { label: t("home.marquee") }),
		/* @__PURE__ */ jsx(CTA, {
			title: t("about.ctaTitle"),
			text: t("home.ctaText")
		})
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
	const { t, content, href } = useLocale();
	const { company, stats, timeline, values, certifications, images } = content;
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: t("about.eyebrow"),
			title: t("about.title"),
			text: t("about.lead", {
				founded: company.founded,
				inUAE: company.inUAE
			}),
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
					children: [/* @__PURE__ */ jsx("span", { children: t("home.certRow") }), certifications.map((c) => /* @__PURE__ */ jsx("strong", { children: c.title }, c.title))]
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
						children: t("about.storyEyebrow")
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsx("h2", {
							className: "display-lg",
							children: t("about.storyTitle")
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "split-body",
					children: [
						/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
							className: "lead",
							style: { color: "var(--ink)" },
							children: t("about.story1")
						}) }),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 90,
							children: /* @__PURE__ */ jsx("p", { children: t("about.story2") })
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 160,
							children: /* @__PURE__ */ jsx("p", { children: t("about.story3") })
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
							children: t("about.milestones")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("about.milestonesTitle")
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
						children: t("about.directionEyebrow")
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsx("h2", {
							className: "display-lg",
							children: t("about.directionTitle")
						})
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "split-body",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("p", {
						className: "lead",
						children: t("about.vision")
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 90,
						children: /* @__PURE__ */ jsx("p", { children: t("about.mission") })
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
							children: t("about.valuesEyebrow")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("about.valuesTitle")
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 160,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href("/services"),
							className: "btn btn-ghost",
							children: [
								t("about.seeServices"),
								" ",
								/* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })
							]
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
			title: t("about.ctaTitle"),
			text: t("about.ctaText")
		})
	] });
}
//#endregion
//#region src/pages/Services.jsx
function Services() {
	const { t, locale, tax, content, href } = useLocale();
	const { images } = content;
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: t("lbl.services"),
			title: t("home.whatTitle"),
			text: t("home.whatLead"),
			img: images.banners.services
		}),
		tax.categories.map((category, gi) => {
			const locations = emiratesFor(category, locale);
			const where = category.coverage === "all" ? t("cov.allLong") : t("cov.dubai");
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
								to: href(`/services/${category.slug}`),
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
								children: t("lbl.services")
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "tag-list tag-list-links",
								children: category.services.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: href(`/services/${category.slug}/${s.slug}`),
									children: s.name
								}) }, s.slug))
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "block-label",
								style: { marginTop: "2rem" },
								children: t("cov.availableIn", { where })
							}),
							/* @__PURE__ */ jsx("div", {
								className: "loc-links",
								children: locations.map((e) => /* @__PURE__ */ jsx(Link, {
									to: href(`/services/${category.slug}/${e.slug}`),
									children: e.name
								}, e.slug))
							})
						] })]
					})]
				})
			}, category.slug);
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: t("about.ctaTitle"),
			text: t("svc.ctaText")
		})
	] });
}
//#endregion
//#region src/components/Breadcrumbs.jsx
function Breadcrumbs({ items }) {
	const { href } = useLocale();
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
			to: href(it.path),
			children: it.name
		})] }, it.path))
	});
}
//#endregion
//#region src/pages/NotFound.jsx
function NotFound() {
	const { t, href } = useLocale();
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
				children: t("nf.title")
			}),
			/* @__PURE__ */ jsx("p", {
				className: "lead",
				children: t("nf.text")
			}),
			/* @__PURE__ */ jsxs(Link, {
				to: href("/"),
				className: "btn btn-ink",
				children: [
					t("nf.back"),
					" ",
					/* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })
				]
			})
		]
	}) });
}
//#endregion
//#region src/pages/ServiceCategory.jsx
function ServiceCategory() {
	const { category: slug } = useParams();
	const { t, locale, tax, href } = useLocale();
	const category = tax.categoryBySlug[slug];
	if (!category) return /* @__PURE__ */ jsx(NotFound, {});
	const locations = emiratesFor(category, locale);
	const others = tax.categories.filter((c) => c.slug !== category.slug);
	const where = category.coverage === "all" ? t("cov.whereAll") : t("cov.dubai");
	const lower = (s) => locale === "ar" ? s : s.toLowerCase();
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: t("lbl.services"),
			title: t("seo.categoryH1", {
				category: category.name,
				where
			}),
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
							name: t("crumb.home"),
							path: "/"
						},
						{
							name: t("crumb.services"),
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
								children: t("lbl.overview")
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
								to: href("/contact"),
								className: "btn btn-solid",
								children: t("cta.proposal")
							})
						})]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "block-label",
						children: t("lbl.included")
					}),
					/* @__PURE__ */ jsx("div", {
						className: "check-grid",
						children: category.services.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
							delay: i % 2 * 60,
							children: /* @__PURE__ */ jsxs(Link, {
								to: href(`/services/${category.slug}/${s.slug}`),
								className: "check-item check-item-link",
								children: [/* @__PURE__ */ jsx(CheckCircle, { className: "check-ico" }), /* @__PURE__ */ jsxs("div", { children: [
									/* @__PURE__ */ jsx("h3", { children: s.name }),
									/* @__PURE__ */ jsx("p", { children: s.text }),
									/* @__PURE__ */ jsxs("span", {
										className: "text-link",
										children: [
											t("svc.detailLink", { name: s.name }),
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
								children: t("lbl.whereWeWork")
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: t("svc.acrossWhere", {
										name: category.name,
										where
									})
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx("p", {
									className: "lead",
									children: t("svc.chooseEmirateCategory")
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-grid",
					children: locations.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 60,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href(`/services/${category.slug}/${e.slug}`),
							className: "loc-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-name",
									children: t("loc.inEmirate", {
										name: category.name,
										emirate: e.name
									})
								}),
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-meta",
									children: e.authority
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: [
										t("cta.view"),
										" ",
										/* @__PURE__ */ jsx(Arrow, {})
									]
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
							children: t("lbl.exploreMore")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("lbl.otherServices")
							})
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "svc-grid",
					children: others.map((c, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 3 * 70,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href(`/services/${c.slug}`),
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
									children: [
										t("cta.explore"),
										" ",
										/* @__PURE__ */ jsx(Arrow, {})
									]
								})
							]
						})
					}, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: t("svc.needPriced", { name: lower(category.name) }),
			text: t("svc.ctaText")
		})
	] });
}
//#endregion
//#region src/pages/ServiceDetail.jsx
function ServiceDetail({ category, service }) {
	const { t, locale, content, href } = useLocale();
	const { company } = content;
	const locations = emiratesFor(category, locale);
	const where = category.coverage === "all" ? t("cov.whereAll") : t("cov.dubai");
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
						name: t("crumb.home"),
						path: "/"
					},
					{
						name: t("crumb.services"),
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
						className: "split-sticky has-figure",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: t("lbl.overview")
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-md",
									children: t("svc.withOwnFleet", {
										name: service.name,
										where
									})
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx(Link, {
									to: href("/contact"),
									className: "btn btn-solid",
									children: t("cta.quote")
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 200,
								className: "rail-figure-wrap",
								children: /* @__PURE__ */ jsxs("figure", {
									className: "rail-figure",
									children: [/* @__PURE__ */ jsx("img", {
										src: service.tallImg,
										alt: service.caption,
										loading: "lazy"
									}), /* @__PURE__ */ jsx("figcaption", { children: service.caption })]
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
								children: t("lbl.scope")
							}) }), /* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: t("svc.covers", { name: locale === "ar" ? service.name : service.name.toLowerCase() })
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
						children: t("lbl.glance")
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
								children: t("lbl.whereWeWork")
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-lg",
									children: t("svc.acrossWhere", {
										name: service.name,
										where
									})
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx("p", {
									className: "lead",
									children: t("svc.chooseEmirate", {
										name: locale === "ar" ? service.name : service.name.toLowerCase(),
										category: locale === "ar" ? category.name : category.name.toLowerCase()
									})
								})
							})
						]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-grid",
					children: locations.map((e, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 60,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href(`/services/${category.slug}/${e.slug}`),
							className: "loc-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-name",
									children: t("loc.inEmirate", {
										name: service.name,
										emirate: e.name
									})
								}),
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-meta",
									children: e.authority
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: [
										t("cta.view"),
										" ",
										/* @__PURE__ */ jsx(Arrow, {})
									]
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
							children: t("lbl.faq")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("svc.faqHeading", { name: service.name })
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
						children: [/* @__PURE__ */ jsx("h3", { children: t("svc.priceQ", { name: locale === "ar" ? service.name : service.name.toLowerCase() }) }), /* @__PURE__ */ jsx("p", { children: t("svc.priceA", {
							email: company.email,
							phone: company.phone
						}).split(company.email).flatMap((part, i, all) => i < all.length - 1 ? [part, /* @__PURE__ */ jsx("a", {
							href: `mailto:${company.email}`,
							dir: "ltr",
							children: company.email
						}, "e")] : [part]) })]
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
							children: t("lbl.related")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("svc.otherIn", { category: locale === "ar" ? category.name : category.name.toLowerCase() })
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href(`/services/${category.slug}`),
							className: "text-link",
							children: [
								t("svc.allOf", { category: locale === "ar" ? category.name : category.name.toLowerCase() }),
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
							to: href(`/services/${category.slug}/${s.slug}`),
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
									children: [
										t("cta.view"),
										" ",
										/* @__PURE__ */ jsx(Arrow, {})
									]
								})
							]
						})
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: t("svc.needPriced", { name: locale === "ar" ? service.name : service.name.toLowerCase() }),
			text: t("svc.ctaText")
		})
	] });
}
//#endregion
//#region src/pages/ServiceLocation.jsx
function ServiceLocation({ category, emirate }) {
	const { t, locale, content, href } = useLocale();
	const { company } = content;
	const siblings = emiratesFor(category, locale).filter((e) => e.slug !== emirate.slug);
	const lower = (s) => locale === "ar" ? s : s.toLowerCase();
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: `${category.name} — ${emirate.name}`,
			title: t("seo.categoryH1", {
				category: category.name,
				where: emirate.name
			}),
			text: category.tagline,
			img: category.img
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsx(Breadcrumbs, { items: [
					{
						name: t("crumb.home"),
						path: "/"
					},
					{
						name: t("crumb.services"),
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
						className: "split-sticky has-figure",
						children: [
							/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: t("lbl.localCoverage")
							}) }),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 80,
								children: /* @__PURE__ */ jsx("h2", {
									className: "display-md",
									children: t("loc.deliveredIn", {
										category: category.name,
										emirate: emirate.name
									})
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 140,
								children: /* @__PURE__ */ jsx(Link, {
									to: href("/contact"),
									className: "btn btn-solid",
									children: t("cta.quote")
								})
							}),
							/* @__PURE__ */ jsx(Reveal, {
								delay: 200,
								className: "rail-figure-wrap",
								children: /* @__PURE__ */ jsxs("figure", {
									className: "rail-figure",
									children: [/* @__PURE__ */ jsx("img", {
										src: category.tallImg,
										alt: t("loc.figCaption", {
											category: category.name,
											emirate: emirate.name
										}),
										loading: "lazy"
									}), /* @__PURE__ */ jsx("figcaption", { children: t("loc.figCaption", {
										category: category.name,
										emirate: emirate.name
									}) })]
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
									/* @__PURE__ */ jsx("strong", { children: t("loc.areasWeCover", { emirate: emirate.name }) }),
									" ",
									emirate.areas,
									". ",
									t("loc.areasTail")
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
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: t("loc.ourServices", { category: lower(category.name) })
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("loc.whatWeDeliver", { emirate: emirate.name })
							})
						})]
					})
				}), /* @__PURE__ */ jsx("div", {
					className: "loc-services",
					children: category.services.map((s, i) => /* @__PURE__ */ jsxs(Reveal, {
						delay: i % 3 * 60,
						className: "loc-service",
						children: [/* @__PURE__ */ jsx(CheckCircle, { className: "check-ico" }), /* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("h3", { children: t("loc.inEmirate", {
								name: s.name,
								emirate: emirate.name
							}) }),
							/* @__PURE__ */ jsx("p", { children: s.text }),
							/* @__PURE__ */ jsxs(Link, {
								to: href(`/services/${category.slug}/${s.slug}`),
								className: "text-link",
								children: [
									t("svc.moreOn", { name: lower(s.name) }),
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
							children: t("lbl.faq")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("svc.faqHeading", { name: t("loc.inEmirate", {
									name: category.name,
									emirate: emirate.name
								}) })
							})
						})]
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "faq-list",
					children: [
						/* @__PURE__ */ jsxs(Reveal, {
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: t("loc.q1", {
								category: lower(category.name),
								emirate: emirate.name
							}) }), /* @__PURE__ */ jsx("p", { children: t("loc.a1", {
								category: lower(category.name),
								emirate: emirate.name,
								areas: emirate.areas,
								authority: emirate.authority
							}) })]
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: 60,
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: t("loc.q2", { emirate: emirate.name }) }), /* @__PURE__ */ jsx("p", { children: t("loc.a2", { authority: emirate.authority }) })]
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: 120,
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: t("loc.q3", {
								service: lower(category.services[0].name),
								emirate: emirate.name
							}) }), /* @__PURE__ */ jsx("p", { children: t("svc.priceA", {
								email: company.email,
								phone: company.phone
							}).split(company.email).flatMap((part, i, all) => i < all.length - 1 ? [part, /* @__PURE__ */ jsx("a", {
								href: `mailto:${company.email}`,
								dir: "ltr",
								children: company.email
							}, "e")] : [part]) })]
						}),
						/* @__PURE__ */ jsxs(Reveal, {
							delay: 180,
							className: "faq-item",
							children: [/* @__PURE__ */ jsx("h3", { children: t("loc.q4", { emirate: emirate.name }) }), /* @__PURE__ */ jsx("p", { children: t("loc.a4") })]
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
							children: t("lbl.otherEmirates")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("loc.elsewhere", { category: category.name })
							})
						})]
					}), /* @__PURE__ */ jsx(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ jsxs(Link, {
							to: href(`/services/${category.slug}`),
							className: "text-link",
							children: [
								t("svc.allOf", { category: lower(category.name) }),
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
							to: href(`/services/${category.slug}/${e.slug}`),
							className: "loc-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-name",
									children: t("loc.inEmirate", {
										name: category.name,
										emirate: e.name
									})
								}),
								/* @__PURE__ */ jsx("span", {
									className: "loc-card-meta",
									children: e.authority
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-link",
									children: [
										t("cta.view"),
										" ",
										/* @__PURE__ */ jsx(Arrow, {})
									]
								})
							]
						})
					}, e.slug))
				})]
			})
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: t("loc.ctaTitle", {
				category: category.name,
				emirate: emirate.name
			}),
			text: t("loc.ctaText")
		})
	] });
}
//#endregion
//#region src/pages/ServiceSegment.jsx
function ServiceSegment() {
	const { category: cSlug, segment } = useParams();
	const { locale, tax } = useLocale();
	const category = tax.categoryBySlug[cSlug];
	if (!category) return /* @__PURE__ */ jsx(NotFound, {});
	const match = resolveServiceSegment(category, segment, locale);
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
	const { t, content } = useLocale();
	const { projects, sectors, images } = content;
	const ALL = t("proj.all");
	const filters = [ALL, ...new Set(projects.map((p) => p.sector))];
	const [filter, setFilter] = useState(ALL);
	const shown = projects.filter((p) => filter === ALL || p.sector === filter);
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: t("proj.eyebrow"),
			title: t("proj.title"),
			text: t("proj.lead"),
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
										/* @__PURE__ */ jsxs("span", { children: [
											t("proj.year"),
											" ",
											/* @__PURE__ */ jsx("strong", { children: p.year })
										] }),
										/* @__PURE__ */ jsxs("span", { children: [
											t("proj.value"),
											" ",
											/* @__PURE__ */ jsx("strong", {
												dir: "ltr",
												children: p.value
											})
										] }),
										/* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx("strong", { children: t("proj.delivered") }) })
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
							children: t("proj.whereEyebrow")
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-lg",
								children: t("proj.whereTitle")
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
			eyebrow: t("proj.galleryEyebrow"),
			title: t("proj.galleryTitle")
		}),
		/* @__PURE__ */ jsx(CTA, {
			title: t("proj.ctaTitle"),
			text: t("proj.ctaText")
		})
	] });
}
//#endregion
//#region src/pages/Contact.jsx
function Contact() {
	const { t, locale, tax, content } = useLocale();
	const { company, images } = content;
	const [form, setForm] = useState({
		name: "",
		phone: "",
		email: "",
		service: "",
		message: ""
	});
	const set = (key) => (e) => setForm({
		...form,
		[key]: e.target.value
	});
	const submit = (e) => {
		e.preventDefault();
		const picked = form.service || t("ct.general");
		const subject = encodeURIComponent(t("ct.subject", {
			picked,
			name: form.name
		}));
		const body = encodeURIComponent([
			`${t("ct.name")}: ${form.name}`,
			`${t("ct.phone")}: ${form.phone}`,
			`${t("ct.email")}: ${form.email}`,
			`${t("ct.need")} ${picked}`,
			"",
			form.message
		].join("\n"));
		window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
	};
	return /* @__PURE__ */ jsxs("main", { children: [
		/* @__PURE__ */ jsx(PageBanner, {
			eyebrow: t("ct.eyebrow"),
			title: t("ct.title"),
			text: t("ct.lead"),
			img: images.banners.contact
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "block-label",
						children: t("ct.reachEyebrow")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "reach-grid",
						children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("a", {
							href: company.phoneHref,
							className: "reach-card",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "reach-label",
									children: t("ct.callLabel")
								}),
								/* @__PURE__ */ jsx("span", {
									className: "reach-value",
									dir: "ltr",
									children: company.phone
								}),
								/* @__PURE__ */ jsx("span", {
									className: "reach-note",
									children: t("ct.callNote")
								})
							]
						}) }), /* @__PURE__ */ jsx(Reveal, {
							delay: 70,
							children: /* @__PURE__ */ jsxs("a", {
								href: `mailto:${company.email}`,
								className: "reach-card",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "reach-label",
										children: t("ct.emailLabel")
									}),
									/* @__PURE__ */ jsx("span", {
										className: "reach-value",
										dir: "ltr",
										children: company.email
									}),
									/* @__PURE__ */ jsx("span", {
										className: "reach-note",
										children: t("ct.emailNote")
									})
								]
							})
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "reach-meta",
						children: [/* @__PURE__ */ jsxs(Reveal, {
							className: "reach-meta-item",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "label",
									children: t("ct.office")
								}),
								/* @__PURE__ */ jsx("address", { children: company.address.join(", ") }),
								/* @__PURE__ */ jsx("span", {
									className: "reach-note",
									children: t("ct.officeNote")
								})
							]
						}), /* @__PURE__ */ jsxs(Reveal, {
							delay: 70,
							className: "reach-meta-item",
							children: [/* @__PURE__ */ jsx("span", {
								className: "label",
								children: t("ct.hours")
							}), /* @__PURE__ */ jsxs("address", { children: [
								t("ct.hoursValue"),
								/* @__PURE__ */ jsx("br", {}),
								t("ct.hoursSite")
							] })]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section section-paper hairline-top",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "form-head",
					children: [
						/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: t("ct.formEyebrow")
						}) }),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ jsx("h2", {
								className: "display-md",
								children: t("ct.formTitle")
							})
						}),
						/* @__PURE__ */ jsx(Reveal, {
							delay: 140,
							children: /* @__PURE__ */ jsx("p", {
								className: "lead",
								children: t("ct.formLead")
							})
						})
					]
				}), /* @__PURE__ */ jsx(Reveal, {
					delay: 160,
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
										children: t("ct.name")
									}), /* @__PURE__ */ jsx("input", {
										id: "cf-name",
										name: "name",
										autoComplete: "name",
										required: true,
										value: form.name,
										onChange: set("name"),
										placeholder: t("ct.namePlaceholder")
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "field",
									children: [/* @__PURE__ */ jsx("label", {
										htmlFor: "cf-phone",
										children: t("ct.phone")
									}), /* @__PURE__ */ jsx("input", {
										id: "cf-phone",
										name: "phone",
										type: "tel",
										autoComplete: "tel",
										inputMode: "tel",
										required: true,
										dir: "ltr",
										value: form.phone,
										onChange: set("phone"),
										placeholder: t("ct.phonePlaceholder")
									})]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "field",
								children: [/* @__PURE__ */ jsxs("label", {
									htmlFor: "cf-email",
									children: [
										t("ct.email"),
										" ",
										/* @__PURE__ */ jsx("span", {
											className: "field-optional",
											children: t("ct.optional")
										})
									]
								}), /* @__PURE__ */ jsx("input", {
									id: "cf-email",
									name: "email",
									type: "email",
									autoComplete: "email",
									inputMode: "email",
									dir: "ltr",
									value: form.email,
									onChange: set("email"),
									placeholder: t("ct.emailPlaceholder")
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "field",
								children: [/* @__PURE__ */ jsx("label", {
									htmlFor: "cf-service",
									children: t("ct.need")
								}), /* @__PURE__ */ jsx("div", {
									className: "select-wrap",
									children: /* @__PURE__ */ jsxs("select", {
										id: "cf-service",
										name: "service",
										value: form.service,
										onChange: set("service"),
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "",
												children: t("ct.needPlaceholder")
											}),
											tax.categories.map((c) => /* @__PURE__ */ jsx("option", {
												value: c.name,
												children: c.name
											}, c.slug)),
											/* @__PURE__ */ jsx("option", {
												value: t("ct.notSure"),
												children: t("ct.notSure")
											})
										]
									})
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "field",
								children: [
									/* @__PURE__ */ jsx("label", {
										htmlFor: "cf-message",
										children: t("ct.details")
									}),
									/* @__PURE__ */ jsx("textarea", {
										id: "cf-message",
										name: "message",
										required: true,
										value: form.message,
										onChange: set("message"),
										placeholder: t("ct.detailsPlaceholder")
									}),
									/* @__PURE__ */ jsx("span", {
										className: "field-hint",
										children: t("ct.detailsHint")
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "form-note",
								children: t("ct.noteBefore", { email: company.email })
							}),
							/* @__PURE__ */ jsxs("button", {
								type: "submit",
								className: "btn btn-solid form-submit",
								children: [
									t("ct.send"),
									" ",
									/* @__PURE__ */ jsx(Arrow, { className: "btn-arrow" })
								]
							})
						]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "section",
			children: /* @__PURE__ */ jsxs("div", {
				className: "wrap",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "form-head",
					children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: t("ct.mapEyebrow")
					}) }), /* @__PURE__ */ jsx(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ jsx("h2", {
							className: "display-md",
							children: t("ct.mapHeading")
						})
					})]
				}), /* @__PURE__ */ jsx(Reveal, {
					className: "map-frame",
					children: /* @__PURE__ */ jsx("iframe", {
						title: t("ct.mapTitle"),
						src: `https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`,
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})]
			})
		})
	] });
}
//#endregion
//#region src/seo.js
var SITE = "https://www.earthmoversint.com";
var page = (locale, base, title, description, extra = {}) => ({
	locale,
	dir: LOCALE_META[locale].dir,
	htmlLang: LOCALE_META[locale].htmlLang,
	title,
	description,
	path: localeHref(base, locale),
	canonical: `${SITE}${localeHref(base, locale) === "/" ? "/" : localeHref(base, locale)}`,
	alternates: alternatesFor(base).map((a) => ({
		hreflang: LOCALE_META[a.locale].hreflang,
		href: `${SITE}${a.path === "/" ? "/" : a.path}`
	})),
	xDefault: `${SITE}${localeHref(base, "en") === "/" ? "/" : localeHref(base, "en")}`,
	...extra
});
function organisationFor(locale) {
	const { company } = contentFor(locale);
	const t = translator(locale);
	return {
		"@type": "GeneralContractor",
		"@id": `${SITE}/#organization`,
		name: t("seo.brand"),
		alternateName: "Earth Movers International",
		url: SITE,
		telephone: company.phone,
		email: company.email,
		foundingDate: "1990",
		address: {
			"@type": "PostalAddress",
			streetAddress: company.address.slice(0, 2).join(", "),
			addressLocality: company.address[2],
			addressCountry: "AE"
		},
		areaServed: taxonomyFor(locale).emirates.map((e) => e.name)
	};
}
function breadcrumbs(locale, items) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((it, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: it.name,
			item: `${SITE}${localeHref(it.path, locale)}`
		}))
	};
}
function staticSeo(locale, base) {
	const t = translator(locale);
	const { company } = contentFor(locale);
	const brand = t("seo.brand");
	const map = {
		"/": ["seo.homeTitle", "seo.homeDesc"],
		"/about": ["seo.aboutTitle", "seo.aboutDesc"],
		"/projects": ["seo.projectsTitle", "seo.projectsDesc"],
		"/contact": ["seo.contactTitle", "seo.contactDesc"]
	};
	if (!map[base]) return null;
	const [titleKey, descKey] = map[base];
	return page(locale, base, t(titleKey, { brand }), t(descKey, {
		brand,
		phone: company.phone
	}), { jsonLd: [organisationFor(locale)] });
}
function servicesIndexSeo(locale) {
	const t = translator(locale);
	const tax = taxonomyFor(locale);
	return page(locale, "/services", t("seo.servicesTitle", { brand: t("seo.brand") }), t("seo.servicesDesc"), { jsonLd: [breadcrumbs(locale, [{
		name: t("crumb.home"),
		path: "/"
	}, {
		name: t("crumb.services"),
		path: "/services"
	}]), {
		"@type": "ItemList",
		itemListElement: tax.categories.map((c, i) => ({
			"@type": "ListItem",
			position: i + 1,
			name: c.name,
			url: `${SITE}${localeHref(`/services/${c.slug}`, locale)}`
		}))
	}] });
}
function categorySeo(locale, category) {
	const t = translator(locale);
	const brand = t("seo.brand");
	const list = emiratesFor(category, locale);
	const where = category.coverage === "all" ? t("cov.whereAll") : t("cov.dubai");
	const sep = locale === "ar" ? "، " : ", ";
	const names = category.services.map((s) => s.name).join(sep);
	return page(locale, `/services/${category.slug}`, t("seo.categoryTitle", {
		category: category.name,
		where,
		first: category.services[0].name,
		brand
	}), t("seo.categoryDesc", {
		category: category.name,
		where,
		list: locale === "ar" ? names : names.toLowerCase(),
		emirates: list.map((e) => e.name).join(sep)
	}), { jsonLd: [
		breadcrumbs(locale, [
			{
				name: t("crumb.home"),
				path: "/"
			},
			{
				name: t("crumb.services"),
				path: "/services"
			},
			{
				name: category.name,
				path: `/services/${category.slug}`
			}
		]),
		{
			"@type": "Service",
			name: `${category.name} — ${brand}`,
			serviceType: category.name,
			provider: organisationFor(locale),
			areaServed: list.map((e) => ({
				"@type": "AdministrativeArea",
				name: e.name
			})),
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: category.name,
				itemListElement: category.services.map((s) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: s.name,
						description: s.text,
						url: `${SITE}${localeHref(`/services/${category.slug}/${s.slug}`, locale)}`
					}
				}))
			}
		},
		{
			"@type": "ItemList",
			name: category.name,
			itemListElement: category.services.map((s, i) => ({
				"@type": "ListItem",
				position: i + 1,
				name: s.name,
				url: `${SITE}${localeHref(`/services/${category.slug}/${s.slug}`, locale)}`
			}))
		}
	] });
}
function serviceSeo(locale, category, service) {
	const t = translator(locale);
	const brand = t("seo.brand");
	const list = emiratesFor(category, locale);
	const sep = locale === "ar" ? "، " : ", ";
	return page(locale, `/services/${category.slug}/${service.slug}`, t("seo.serviceTitle", {
		h1: service.h1,
		brand
	}), t("seo.serviceDesc", {
		lead: service.lead,
		brand,
		service: locale === "ar" ? service.name : service.name.toLowerCase(),
		emirates: list.map((e) => e.name).join(sep)
	}).slice(0, 320), { jsonLd: [
		breadcrumbs(locale, [
			{
				name: t("crumb.home"),
				path: "/"
			},
			{
				name: t("crumb.services"),
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
			provider: organisationFor(locale),
			areaServed: list.map((e) => ({
				"@type": "AdministrativeArea",
				name: e.name
			})),
			isPartOf: {
				"@type": "Service",
				name: category.name,
				url: `${SITE}${localeHref(`/services/${category.slug}`, locale)}`
			},
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: service.name,
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
function locationSeo(locale, category, emirate) {
	const t = translator(locale);
	const brand = t("seo.brand");
	const sep = locale === "ar" ? "، " : ", ";
	const lead = category.services.slice(0, 3).map((s) => s.name).join(sep);
	const names = category.services.map((s) => s.name).join(sep);
	const { company } = contentFor(locale);
	return page(locale, `/services/${category.slug}/${emirate.slug}`, t("seo.locationTitle", {
		category: category.name,
		emirate: emirate.name,
		lead,
		brand
	}), t("seo.locationDesc", {
		category: category.name,
		emirate: emirate.name,
		list: locale === "ar" ? names : names.toLowerCase(),
		authority: emirate.authority
	}), { jsonLd: [
		breadcrumbs(locale, [
			{
				name: t("crumb.home"),
				path: "/"
			},
			{
				name: t("crumb.services"),
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
			name: t("loc.inEmirate", {
				name: category.name,
				emirate: emirate.name
			}),
			serviceType: category.name,
			provider: organisationFor(locale),
			areaServed: {
				"@type": "AdministrativeArea",
				name: emirate.name
			},
			hasOfferCatalog: {
				"@type": "OfferCatalog",
				name: t("loc.inEmirate", {
					name: category.name,
					emirate: emirate.name
				}),
				itemListElement: category.services.map((s) => ({
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: t("loc.inEmirate", {
							name: s.name,
							emirate: emirate.name
						}),
						description: s.text,
						url: `${SITE}${localeHref(`/services/${category.slug}/${s.slug}`, locale)}`
					}
				}))
			}
		},
		{
			"@type": "FAQPage",
			mainEntity: [{
				"@type": "Question",
				name: t("loc.q1", {
					category: category.name,
					emirate: emirate.name
				}),
				acceptedAnswer: {
					"@type": "Answer",
					text: t("loc.a1", {
						category: category.name,
						emirate: emirate.name,
						areas: emirate.areas,
						authority: emirate.authority
					})
				}
			}, {
				"@type": "Question",
				name: t("loc.q3", {
					service: category.services[0].name,
					emirate: emirate.name
				}),
				acceptedAnswer: {
					"@type": "Answer",
					text: t("svc.priceA", {
						email: company.email,
						phone: company.phone
					})
				}
			}]
		}
	] });
}
function seoFor(pathname) {
	const { locale, base } = splitLocale(pathname);
	const t = translator(locale);
	const stat = staticSeo(locale, base);
	if (stat) return stat;
	if (base === "/services") return servicesIndexSeo(locale);
	const m = base.match(/^\/services\/([a-z-]+)(?:\/([a-z-]+))?$/);
	if (m) {
		const category = taxonomyFor(locale).categoryBySlug[m[1]];
		if (category && !m[2]) return categorySeo(locale, category);
		if (category) {
			const found = resolveServiceSegment(category, m[2], locale);
			if (found.kind === "service") return serviceSeo(locale, category, found.service);
			if (found.kind === "emirate") return locationSeo(locale, category, found.emirate);
		}
	}
	return page(locale, base, t("seo.notFoundTitle", { brand: t("seo.brand") }), t("seo.notFoundDesc"), { noindex: true });
}
function headTagsFor(pathname) {
	const s = seoFor(pathname);
	const esc = (x) => String(x).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
	const graph = {
		"@context": "https://schema.org",
		"@graph": (s.jsonLd || [organisationFor(s.locale)]).map((n) => ({ ...n }))
	};
	return [
		`<title>${esc(s.title)}</title>`,
		`<meta name="description" content="${esc(s.description)}">`,
		s.noindex ? "<meta name=\"robots\" content=\"noindex,follow\">" : "<meta name=\"robots\" content=\"index,follow,max-image-preview:large\">",
		`<link rel="canonical" href="${esc(s.canonical)}">`,
		...s.noindex ? [] : [...s.alternates.map((a) => `<link rel="alternate" hreflang="${a.hreflang}" href="${esc(a.href)}">`), `<link rel="alternate" hreflang="x-default" href="${esc(s.xDefault)}">`],
		`<meta property="og:type" content="website">`,
		`<meta property="og:site_name" content="${esc(translator(s.locale)("seo.brand"))}">`,
		`<meta property="og:title" content="${esc(s.title)}">`,
		`<meta property="og:description" content="${esc(s.description)}">`,
		`<meta property="og:url" content="${esc(s.canonical)}">`,
		`<meta property="og:image" content="${SITE}/images/hero-slide-1.jpg">`,
		`<meta property="og:locale" content="${s.locale === "ar" ? "ar_AE" : "en_AE"}">`,
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
		document.documentElement.lang = s.htmlLang;
		document.documentElement.dir = s.dir;
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
		set("meta[property=\"og:locale\"]", "meta", {
			property: "og:locale",
			content: s.locale === "ar" ? "ar_AE" : "en_AE"
		});
		set("meta[name=\"robots\"]", "meta", {
			name: "robots",
			content: s.noindex ? "noindex,follow" : "index,follow,max-image-preview:large"
		});
		document.head.querySelectorAll("link[rel=\"alternate\"][hreflang]").forEach((el) => el.remove());
		if (!s.noindex) for (const a of [...s.alternates, {
			hreflang: "x-default",
			href: s.xDefault
		}]) {
			const el = document.createElement("link");
			el.setAttribute("rel", "alternate");
			el.setAttribute("hreflang", a.hreflang);
			el.setAttribute("href", a.href);
			document.head.appendChild(el);
		}
	}, [pathname]);
}
//#endregion
//#region src/App.jsx
var PAGES = [
	{
		path: "",
		element: /* @__PURE__ */ jsx(Home, {})
	},
	{
		path: "about",
		element: /* @__PURE__ */ jsx(About, {})
	},
	{
		path: "services",
		element: /* @__PURE__ */ jsx(Services, {})
	},
	{
		path: "services/:category",
		element: /* @__PURE__ */ jsx(ServiceCategory, {})
	},
	{
		path: "services/:category/:segment",
		element: /* @__PURE__ */ jsx(ServiceSegment, {})
	},
	{
		path: "projects",
		element: /* @__PURE__ */ jsx(Projects, {})
	},
	{
		path: "contact",
		element: /* @__PURE__ */ jsx(Contact, {})
	}
];
function AppRoutes() {
	useSeo();
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Nav, {}),
		/* @__PURE__ */ jsxs(Routes, { children: [LOCALES.flatMap((locale) => {
			const prefix = locale === "en" ? "" : `/${locale}`;
			return PAGES.map((p) => {
				const path = `${prefix}/${p.path}`.replace(/\/+$/, "") || "/";
				return /* @__PURE__ */ jsx(Route, {
					path,
					element: p.element
				}, path);
			});
		}), /* @__PURE__ */ jsx(Route, {
			path: "*",
			element: /* @__PURE__ */ jsx(NotFound, {})
		})] }),
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
var BASE_ROUTES = [
	"/",
	"/about",
	"/projects",
	"/contact",
	...allServiceRoutes()
];
var routes = LOCALES.flatMap((locale) => BASE_ROUTES.map((base) => localeHref(base, locale)));
//#endregion
export { BASE_ROUTES, LOCALES, SITE, headTagsFor, localeHref, render, routes, seoFor };
