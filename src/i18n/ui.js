// ---------------------------------------------------------------------------
// Interface strings — the chrome that repeats across pages. Page prose lives
// in the content and service-content files instead.
//
// Values may carry {placeholders}; t('svc.covers', { name }) fills them in.
//
// The Arabic is written for a UAE contracting audience: the authority names,
// permit vocabulary and plant terminology are the ones used in RTA and
// municipality submissions, not literal translations of the English.
// ---------------------------------------------------------------------------

export const UI = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.quote': 'Get a Quote',
    'nav.primary': 'Primary',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.homeAria': 'Earth Movers International — home',
    'nav.language': 'Language',
    'nav.switchTo': 'العربية',
    'nav.switchAria': 'Switch to Arabic',
    'nav.allServices': 'All services',
    'nav.talkToUs': 'Talk to us',

    'cov.all': 'all 7 emirates',
    'cov.dubai': 'Dubai',
    'cov.allLong': 'all seven emirates',
    'cov.whereAll': 'the UAE',
    'cov.availableAll': 'Available in all 7 emirates',
    'cov.availableDubai': 'Available in Dubai',
    'cov.availableIn': 'Available in {where}',
    'cov.and': ' & ',

    'crumb.home': 'Home',
    'crumb.services': 'Services',

    'cta.quote': 'Request a quote',
    'cta.proposal': 'Request a proposal',
    'cta.start': 'Start a project',
    'cta.explore': 'Explore',
    'cta.view': 'View',
    'cta.readMore': 'Read more',

    'lbl.overview': 'Overview',
    'lbl.scope': 'Scope',
    'lbl.glance': 'At a glance',
    'lbl.whereWeWork': 'Where we work',
    'lbl.faq': 'Common questions',
    'lbl.related': 'Related services',
    'lbl.included': 'What’s included',
    'lbl.services': 'Services',
    'lbl.exploreMore': 'Explore more',
    'lbl.otherServices': 'Other services',
    'lbl.localCoverage': 'Local coverage',
    'lbl.otherEmirates': 'Other emirates',

    'svc.detailLink': '{name} in detail',
    'svc.moreOn': 'More on {name}',
    'svc.covers': 'What our {name} package covers.',
    'svc.acrossWhere': '{name} across {where}.',
    'svc.withOwnFleet': '{name} in {where}, delivered with our own fleet.',
    'svc.faqHeading': '{name} — FAQs',
    'svc.chooseEmirate':
      'We deliver {name} as part of our {category} package. Choose your emirate for local coverage and the approving authority.',
    'svc.chooseEmirateCategory':
      'Choose your emirate for local coverage, approving authority and the areas we operate in.',
    'svc.allOf': 'All {category}',
    'svc.priceQ': 'How do I get a price for {name}?',
    'svc.priceA':
      'Send drawings, a bill of quantities or a description of the scope to {email}, or call {phone}. Where it helps, we walk the ground with you before pricing.',
    'svc.needPriced': 'Need {name} priced?',
    'svc.ctaText':
      'Send your drawings or bill of quantities and we’ll come back with a clear, realistic price.',
    'svc.otherIn': 'Other {category} services',

    'loc.inEmirate': '{name} in {emirate}',
    'loc.deliveredIn': '{category} in {emirate}, delivered with our own fleet.',
    'loc.whatWeDeliver': 'What we deliver in {emirate}.',
    'loc.ourServices': 'Our {category} services',
    'loc.areasWeCover': 'Areas we cover in {emirate}:',
    'loc.areasTail':
      'Whether the scope is a single plot or a multi-phase infrastructure package, the same plant, operators and supervision deliver it.',
    'loc.figCaption': '{category} in {emirate} — our own plant, operators and supervision.',
    'loc.elsewhere': '{category} elsewhere in the UAE',
    'loc.ctaTitle': '{category} in {emirate}?',
    'loc.ctaText':
      'Tell us about the site and scope — we’ll price the real work and mobilise from Dubai.',
    'loc.q1': 'Do you carry out {category} in {emirate}?',
    'loc.a1':
      'Yes. We deliver {category} across {emirate}, including {areas}, working to {authority} standards with our own excavators, dozers, graders and rollers.',
    'loc.q2': 'Are you an approved contractor for works in {emirate}?',
    'loc.a2':
      'We are an RTA-approved contractor and work to the requirements of {authority}. Method statements, permits and material approvals are prepared and submitted by our own team.',
    'loc.q3': 'How do I get a price for {service} in {emirate}?',
    'loc.q4': 'How quickly can you mobilise to {emirate}?',
    'loc.a4':
      'Because the fleet is owned rather than hired, mobilisation is a scheduling question rather than an availability one — typically within days of approval.',

    'foot.company': 'Company',
    'foot.areas': 'Areas We Serve',
    'foot.contact': 'Contact',
    'foot.directions': 'Get directions',
    'foot.rights': 'All rights reserved.',
    'foot.blurb':
      'Founded in Montreal in {founded}, in Dubai since {inUAE}. An RTA-approved earthworks and road construction contractor serving infrastructure, commercial and industrial projects across the UAE.',
    'foot.certRta': 'RTA Approved',
    'foot.certDm': 'Dubai Municipality',
    'foot.certSince': 'Since 1990',
    'foot.place': 'Dubai, UAE',

    'seo.brand': 'Earth Movers International',
    'seo.homeTitle': 'RTA-Approved Road & Earthworks Contractor in Dubai | {brand}',
    'seo.homeDesc':
      'Earth Movers International is an RTA-approved road and earthworks contractor in Dubai, UAE. Excavation, road construction, asphalt works, traffic management and utilities across all seven emirates since 1990.',
    'seo.aboutTitle': 'About Us — Earthworks & Road Contractor Since 1990 | {brand}',
    'seo.aboutDesc':
      'Founded in Montreal in 1990 and established in Dubai since 2005, Earth Movers International delivers earthworks, road construction and heavy equipment services across the UAE.',
    'seo.projectsTitle': 'Projects — Road & Earthworks Case Studies in the UAE | {brand}',
    'seo.projectsDesc':
      'Selected road, earthworks and marine projects delivered for Fujairah Cement Industry, Dubai Municipality and Nakheel PJSC across the UAE.',
    'seo.contactTitle': 'Contact — Request a Quote | {brand}, Dubai',
    'seo.contactDesc':
      'Contact Earth Movers International in Business Bay, Dubai. Call {phone} or send your scope and drawings for a priced proposal.',
    'seo.servicesTitle': 'Services — Earth Works, Road Works, Traffic Management & Utilities | {brand}',
    'seo.servicesDesc':
      'Earthworks, road works, traffic management and utilities across the UAE. Excavation, asphalt, access roads, RTA permits, entry-exit works and service protection from an RTA-approved contractor.',
    'seo.categoryH1': '{category} Contractor in {where}',
    'seo.categoryTitle': '{category} Contractor in {where} — {first} & More | {brand}',
    'seo.categoryDesc':
      '{category} services across {where}: {list}. RTA-approved contractor with its own fleet, operating in {emirates}.',
    'seo.locationTitle': '{category} Contractor in {emirate} — {lead} | {brand}',
    'seo.locationDesc':
      '{category} in {emirate}: {list}. Approved contractor working to {authority} standards, with our own plant and operators.',
    'seo.serviceTitle': '{h1} | {brand}',
    'seo.serviceDesc':
      '{lead} {brand} is an RTA-approved contractor delivering {service} across {emirates}.',
    'seo.notFoundTitle': 'Page Not Found | {brand}',
    'seo.notFoundDesc': 'The page you are looking for does not exist.',

    'home.heroAria': 'Earth Movers International highlights',
    'home.slidesAria': 'Hero slides',
    'home.slideN': 'Slide {n}',
    'home.exploreProjects': 'Explore our projects',
    'home.certRow': 'Certifications & registrations',
    'home.workEyebrow': 'Our Work',
    'home.workTitle': 'The projects that tell our story.',
    'home.allProjects': 'All projects',
    'home.promiseEyebrow': 'Our Promise',
    'home.promise':
      'We move the earth, we build the roads, and we earn the trust of every client we serve — ',
    'home.promiseEm': 'every single day.',
    'home.whatEyebrow': 'What We Do',
    'home.whatTitle': 'Four disciplines. One accountable partner.',
    'home.whatLead':
      'Earth works, road works, traffic management and utilities — delivered with our own fleet, our own operators and RTA-approved processes.',
    'home.plusServices': 'plus {n} services',
    'home.fleetEyebrow': 'The Fleet',
    'home.fleetTitle': 'One of the largest heavy-excavation fleets in Dubai.',
    'home.fleetLead':
      'Excavators, bulldozers, graders, rollers and rock breakers — owned, maintained and operated by us. Your programme never waits on a machine.',
    'home.rentEquipment': 'Discuss your programme',
    'home.fleetCaption': 'Fleet operations — Dubai',
    'home.fleetOperated': 'Operated · 24/7',
    'home.fleetAlt': 'Excavators and a dozer moving fill on an Earth Movers site',
    'home.marquee': 'Trusted across the UAE',
    'home.ctaText':
      'Tell us about your site and scope — we’ll walk the ground with you and price the real work.',

    'about.eyebrow': 'About Us',
    'about.title': 'Three decades of moving ground.',
    'about.lead':
      'From Montreal in {founded} to Dubai since {inUAE} — a contractor built around heavy machines, experienced hands and ground that gets handed over right.',
    'about.storyEyebrow': 'The story',
    'about.storyTitle': 'Who we are',
    'about.story1':
      'Earth Movers International is a dynamic and preferred solution provider in the fields of civil and heavy construction, engineering, oil & gas, recycling and demolition.',
    'about.story2':
      'Our team was incorporated to help meet the challenges faced by the construction sector in the fields of earth works, road construction and heavy plant operation. Today we support infrastructure, commercial and industrial projects across the UAE as a Dubai-based road construction and earthworks contractor.',
    'about.story3':
      'We maintain one of Dubai’s largest fleets of heavy excavation equipment — excavators, bulldozers, graders, rollers, rock breakers and specialised machinery — so projects are completed quickly, effectively and safely. As an RTA-approved contractor, compliance is built into everything we deliver.',
    'about.photoAlt': 'Earth Movers International team and machinery at work',
    'about.milestones': 'Milestones',
    'about.milestonesTitle': 'The road so far.',
    'about.directionEyebrow': 'Direction',
    'about.directionTitle': 'Mission & vision',
    'about.vision':
      'Our vision is to make Earth Movers International a global brand in the field of earth works, heavy construction equipment and services.',
    'about.mission':
      'Our mission is simpler still: deliver practical, build-ready ground — safely, on programme and to specification — so every client can build with confidence on what we hand over.',
    'about.valuesEyebrow': 'Values',
    'about.valuesTitle': 'Ground rules.',
    'about.seeServices': 'See our services',
    'about.ctaTitle': 'Build on solid ground.',
    'about.ctaText': 'Talk to the team that has been moving the earth since 1990.',

    'proj.eyebrow': 'Projects',
    'proj.title': 'Selected work across the UAE.',
    'proj.lead':
      'From public authorities to private clients — a track record built on safety, quality and client satisfaction.',
    'proj.all': 'All',
    'proj.year': 'Year',
    'proj.value': 'Value',
    'proj.delivered': 'Delivered',
    'proj.whereEyebrow': 'Where We Work',
    'proj.whereTitle': 'Sectors we serve.',
    'proj.galleryEyebrow': 'Site Gallery',
    'proj.galleryTitle': 'The places behind our work.',
    'proj.ctaTitle': 'Your project, next on this page.',
    'proj.ctaText':
      'From AED 0.3M relocations to multi-million road renewals — every scope gets the same standard of delivery.',

    'wa.label': 'WhatsApp us',
    'wa.aria': 'Message Earth Movers International on WhatsApp',
    'wa.cardLabel': 'WhatsApp',
    'wa.cardNote': 'Send a location pin, site photos or a drawing',
    'wa.msg':
      'Hello Earth Movers International — I would like to discuss a project.\nLocation and scope:',
    'wa.msgService':
      'Hello Earth Movers International — I would like a price.\nService: {service}\nLocation and scope:',
    'ct.reachEyebrow': 'Reach us',
    'ct.callLabel': 'Call the office',
    'ct.callNote': 'Fastest route — we answer during working hours',
    'ct.emailLabel': 'Email us',
    'ct.emailNote': 'Best for drawings and bills of quantities',
    'ct.officeNote': 'Visits by appointment',
    'ct.formEyebrow': 'Send your scope',
    'ct.formTitle': 'Tell us what you need built.',
    'ct.formLead':
      'Three details and a sentence about the job is enough to start. We price the real scope, and where it helps we walk the ground with you first.',
    'ct.need': 'What do you need?',
    'ct.needPlaceholder': 'Choose a service',
    'ct.notSure': 'Not sure yet — advise me',
    'ct.optional': 'optional',
    'ct.detailsHint': 'Location, approximate quantities and your target dates, if you have them.',
    'ct.noteBefore':
      'Sending opens your own email app with everything filled in, addressed to {email}. Nothing is submitted to this website.',
    'ct.mapEyebrow': 'Find us',
    'ct.mapHeading': 'Business Bay, Dubai.',
    'ct.eyebrow': 'Contact',
    'ct.title': 'Let’s walk your site.',
    'ct.lead':
      'Call, write or drop by — tell us about your scope and we’ll come back with a clear plan and an honest price.',
    'ct.phone': 'Phone',
    'ct.email': 'Email',
    'ct.office': 'Office',
    'ct.hours': 'Hours',
    'ct.hoursValue': 'Monday – Saturday, 8:00 – 18:00',
    'ct.hoursSite': 'Site operations: 24/7',
    'ct.name': 'Name',
    'ct.namePlaceholder': 'Your name',
    'ct.phonePlaceholder': '+971 …',
    'ct.emailPlaceholder': 'you@company.com',
    'ct.interest': 'Services of interest',
    'ct.details': 'Project details',
    'ct.detailsPlaceholder': 'Location, scope, timeline — whatever you have so far.',
    'ct.send': 'Send enquiry',
    'ct.note': 'Submitting opens your email app with the enquiry addressed to {email}.',
    'ct.subject': 'Enquiry: {picked} — {name}',
    'ct.general': 'General',
    'ct.mapTitle': 'Earth Movers International — Capital Golden Tower, Business Bay, Dubai',

    'nf.title': 'This ground hasn’t been broken yet.',
    'nf.text': 'The page you’re looking for doesn’t exist — but the rest of the site does.',
    'nf.back': 'Back to home',
    'guides.eyebrow': 'Guides',
    'guides.title': 'Road and earthworks guides',
    'guides.lead':
      'How the work is actually done in the UAE — written by the people who do it, for clients, consultants and anyone specifying it.',
    'guides.crumb': 'Guides',
    'guides.kicker': 'Guide',
    'guides.read': 'Read the guide',
    'guides.contents': 'Contents',
    'guides.railLead': 'Need this delivered rather than explained? Tell us the scope and we will price it.',
    'guides.relatedTitle': 'The services behind this',
    'guides.relatedLead': 'If you need this delivered rather than explained, these are the pages to start from.',
    'seo.guidesTitle': 'Road & Earthworks Guides | {brand}',
    'seo.guidesDesc':
      'Practical guides to road construction, excavation, asphalt and earthworks in the UAE, from an RTA-approved contractor.',
    'seo.guideTitle': '{title} | {brand}',
  },

  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.projects': 'مشاريعنا',
    'nav.contact': 'اتصل بنا',
    'nav.quote': 'اطلب عرض سعر',
    'nav.primary': 'القائمة الرئيسية',
    'nav.openMenu': 'فتح القائمة',
    'nav.closeMenu': 'إغلاق القائمة',
    'nav.homeAria': 'إيرث موفرز إنترناشيونال — الصفحة الرئيسية',
    'nav.language': 'اللغة',
    'nav.switchTo': 'English',
    'nav.switchAria': 'التبديل إلى الإنجليزية',
    'nav.allServices': 'كل الخدمات',
    'nav.talkToUs': 'تحدّث إلينا',

    'cov.all': 'جميع إمارات الدولة السبع',
    'cov.dubai': 'دبي',
    'cov.allLong': 'إمارات الدولة السبع',
    'cov.whereAll': 'الإمارات',
    'cov.availableAll': 'متوفرة في جميع الإمارات السبع',
    'cov.availableDubai': 'متوفرة في دبي',
    'cov.availableIn': 'متوفرة في {where}',
    'cov.and': ' و',

    'crumb.home': 'الرئيسية',
    'crumb.services': 'الخدمات',

    'cta.quote': 'اطلب عرض سعر',
    'cta.proposal': 'اطلب عرضاً فنياً',
    'cta.start': 'ابدأ مشروعك',
    'cta.explore': 'استعرض',
    'cta.view': 'عرض',
    'cta.readMore': 'اقرأ المزيد',

    'lbl.overview': 'نظرة عامة',
    'lbl.scope': 'نطاق العمل',
    'lbl.glance': 'لمحة سريعة',
    'lbl.whereWeWork': 'أين نعمل',
    'lbl.faq': 'أسئلة متكررة',
    'lbl.related': 'خدمات ذات صلة',
    'lbl.included': 'ما الذي يشمله العمل',
    'lbl.services': 'الخدمات',
    'lbl.exploreMore': 'استعرض المزيد',
    'lbl.otherServices': 'خدمات أخرى',
    'lbl.localCoverage': 'التغطية المحلية',
    'lbl.otherEmirates': 'إمارات أخرى',

    'svc.detailLink': 'تفاصيل {name}',
    'svc.moreOn': 'المزيد عن {name}',
    'svc.covers': 'ما الذي تشمله حزمة {name} لدينا.',
    'svc.acrossWhere': '{name} في {where}.',
    'svc.withOwnFleet': 'ننفذ {name} في {where} بمعداتنا وكوادرنا.',
    'svc.faqHeading': '{name} — أسئلة متكررة',
    'svc.chooseEmirate':
      'ننفذ {name} ضمن حزمة {category}. اختر إمارتك للاطلاع على التغطية المحلية والجهة المانحة للموافقات.',
    'svc.chooseEmirateCategory':
      'اختر إمارتك للاطلاع على التغطية المحلية والجهة المانحة للموافقات والمناطق التي نعمل فيها.',
    'svc.allOf': 'كل {category}',
    'svc.priceQ': 'كيف أحصل على عرض سعر لأعمال {name}؟',
    'svc.priceA':
      'أرسل المخططات أو جدول الكميات أو وصفاً لنطاق العمل إلى {email}، أو اتصل على {phone}. وعند الحاجة نعاين الموقع معك قبل التسعير.',
    'svc.needPriced': 'تحتاج تسعير أعمال {name}؟',
    'svc.ctaText': 'أرسل مخططاتك أو جدول الكميات وسنعود إليك بسعر واضح وواقعي.',
    'svc.otherIn': 'خدمات {category} الأخرى',

    'loc.inEmirate': '{name} في {emirate}',
    'loc.deliveredIn': 'ننفذ {category} في {emirate} بمعداتنا وكوادرنا.',
    'loc.whatWeDeliver': 'ما ننفذه في {emirate}.',
    'loc.ourServices': 'خدمات {category} لدينا',
    'loc.areasWeCover': 'المناطق التي نغطيها في {emirate}:',
    'loc.areasTail':
      'وسواء كان النطاق قطعة أرض واحدة أو حزمة بنية تحتية متعددة المراحل، فإن المعدات والمشغّلين والإشراف هم أنفسهم في الحالتين.',
    'loc.figCaption': '{category} في {emirate} — بمعداتنا ومشغّلينا وإشرافنا.',
    'loc.elsewhere': '{category} في باقي إمارات الدولة',
    'loc.ctaTitle': 'هل تحتاج {category} في {emirate}؟',
    'loc.ctaText':
      'أخبرنا عن الموقع ونطاق العمل — نُسعّر العمل الفعلي ونجهّز التعبئة من دبي.',
    'loc.q1': 'هل تنفذون {category} في {emirate}؟',
    'loc.a1':
      'نعم. ننفذ {category} في مختلف أنحاء {emirate}، بما في ذلك {areas}، وفق اشتراطات {authority}، وبحفاراتنا وجرافاتنا ومسوّياتنا ومداحلنا الخاصة.',
    'loc.q2': 'هل أنتم مقاول معتمد للأعمال في {emirate}؟',
    'loc.a2':
      'نحن مقاول معتمد لدى هيئة الطرق والمواصلات ونعمل وفق متطلبات {authority}. ويتولى فريقنا إعداد وتقديم بيانات الطرق والتصاريح واعتمادات المواد.',
    'loc.q3': 'كيف أحصل على سعر لأعمال {service} في {emirate}؟',
    'loc.q4': 'ما سرعة تعبئتكم إلى {emirate}؟',
    'loc.a4':
      'لأن المعدات مملوكة لنا وليست مستأجرة، فإن التعبئة مسألة جدولة لا مسألة توفّر — وعادة خلال أيام من الاعتماد.',

    'foot.company': 'الشركة',
    'foot.areas': 'مناطق التغطية',
    'foot.contact': 'التواصل',
    'foot.directions': 'الاتجاهات على الخريطة',
    'foot.rights': 'جميع الحقوق محفوظة.',
    'foot.blurb':
      'تأسست في مونتريال عام {founded}، وتعمل في دبي منذ عام {inUAE}. مقاول أعمال ترابية وإنشاء طرق معتمد لدى هيئة الطرق والمواصلات، ينفذ مشاريع البنية التحتية والتجارية والصناعية في مختلف أنحاء الإمارات.',
    'foot.certRta': 'معتمد من هيئة الطرق والمواصلات',
    'foot.certDm': 'بلدية دبي',
    'foot.certSince': 'منذ عام 1990',
    'foot.place': 'دبي، الإمارات',

    'seo.brand': 'إيرث موفرز إنترناشيونال',
    'seo.homeTitle': 'مقاول طرق وأعمال ترابية معتمد من هيئة الطرق والمواصلات في دبي | {brand}',
    'seo.homeDesc':
      'إيرث موفرز إنترناشيونال مقاول طرق وأعمال ترابية معتمد لدى هيئة الطرق والمواصلات في دبي، الإمارات. حفريات وإنشاء طرق وأعمال أسفلت وإدارة مرور وأعمال مرافق في إمارات الدولة السبع منذ عام 1990.',
    'seo.aboutTitle': 'من نحن — مقاول أعمال ترابية وطرق منذ عام 1990 | {brand}',
    'seo.aboutDesc':
      'تأسست في مونتريال عام 1990 وتعمل في دبي منذ 2005. تقدّم إيرث موفرز إنترناشيونال خدمات الأعمال الترابية وإنشاء الطرق وإدارة المرور في مختلف أنحاء الإمارات.',
    'seo.projectsTitle': 'مشاريعنا — نماذج أعمال طرق وأعمال ترابية في الإمارات | {brand}',
    'seo.projectsDesc':
      'مختارات من مشاريع الطرق والأعمال الترابية والبحرية المنفَّذة لشركة الفجيرة لصناعة الإسمنت وبلدية دبي ونخيل ش.م.ع في مختلف أنحاء الإمارات.',
    'seo.contactTitle': 'اتصل بنا — اطلب عرض سعر | {brand}، دبي',
    'seo.contactDesc':
      'تواصل مع إيرث موفرز إنترناشيونال في الخليج التجاري بدبي. اتصل على {phone} أو أرسل نطاق العمل والمخططات للحصول على عرض سعر.',
    'seo.servicesTitle': 'خدماتنا — أعمال ترابية وطرق وإدارة مرور ومرافق | {brand}',
    'seo.servicesDesc':
      'أعمال ترابية وأعمال طرق وإدارة مرور وأعمال مرافق في مختلف أنحاء الإمارات. حفريات وأسفلت وطرق وصول وتصاريح هيئة الطرق والمواصلات وأعمال مداخل ومخارج وحماية خدمات، من مقاول معتمد.',
    'seo.categoryH1': 'مقاول {category} في {where}',
    'seo.categoryTitle': 'مقاول {category} في {where} — {first} والمزيد | {brand}',
    'seo.categoryDesc':
      'خدمات {category} في {where}: {list}. مقاول معتمد من هيئة الطرق والمواصلات بمعداته الخاصة، ويعمل في {emirates}.',
    'seo.locationTitle': 'مقاول {category} في {emirate} — {lead} | {brand}',
    'seo.locationDesc':
      '{category} في {emirate}: {list}. مقاول معتمد يعمل وفق معايير {authority}، بمعداته ومشغّليه الخاصين.',
    'seo.serviceTitle': '{h1} | {brand}',
    'seo.serviceDesc': '{lead} {brand} مقاول معتمد ينفّذ {service} في {emirates}.',
    'seo.notFoundTitle': 'الصفحة غير موجودة | {brand}',
    'seo.notFoundDesc': 'الصفحة التي تبحث عنها غير موجودة.',

    'home.heroAria': 'أبرز أعمال إيرث موفرز إنترناشيونال',
    'home.slidesAria': 'شرائح الواجهة',
    'home.slideN': 'شريحة {n}',
    'home.exploreProjects': 'استعرض مشاريعنا',
    'home.certRow': 'الاعتمادات والتسجيلات',
    'home.workEyebrow': 'أعمالنا',
    'home.workTitle': 'المشاريع التي تروي قصتنا.',
    'home.allProjects': 'كل المشاريع',
    'home.promiseEyebrow': 'وعدنا',
    'home.promise':
      'نحرّك التربة، ونبني الطرق، ونكسب ثقة كل عميل نعمل معه — ',
    'home.promiseEm': 'كل يوم دون استثناء.',
    'home.whatEyebrow': 'ما الذي نقدّمه',
    'home.whatTitle': 'أربعة تخصصات. شريك واحد مسؤول.',
    'home.whatLead':
      'أعمال ترابية وأعمال طرق وإدارة مرور وأعمال مرافق — تُنفَّذ بمعداتنا ومشغّلينا ووفق إجراءات معتمدة من هيئة الطرق والمواصلات.',
    'home.plusServices': 'و{n} خدمات أخرى',
    'home.fleetEyebrow': 'الأسطول',
    'home.fleetTitle': 'أحد أكبر أساطيل الحفر الثقيل في دبي.',
    'home.fleetLead':
      'حفارات وجرافات ومسوّيات ومداحل وكسّارات صخور — مملوكة لنا ونتولى صيانتها وتشغيلها. برنامجك الزمني لا ينتظر معدة.',
    'home.rentEquipment': 'ناقش برنامجك',
    'home.fleetCaption': 'عمليات الأسطول — دبي',
    'home.fleetOperated': 'بمشغّلين · على مدار الساعة',
    'home.fleetAlt': 'حفارات وجرافة تنقل الردم في أحد مواقع إيرث موفرز',
    'home.marquee': 'موضع ثقة في مختلف أنحاء الإمارات',
    'home.ctaText':
      'أخبرنا عن موقعك ونطاق العمل — نعاين الأرض معك ونُسعّر العمل الفعلي.',

    'about.eyebrow': 'من نحن',
    'about.title': 'ثلاثة عقود من تحريك الأرض.',
    'about.lead':
      'من مونتريال عام {founded} إلى دبي منذ {inUAE} — مقاول قائم على معدات ثقيلة وأيدٍ خبيرة وأرض تُسلَّم كما ينبغي.',
    'about.storyEyebrow': 'الحكاية',
    'about.storyTitle': 'من نحن',
    'about.story1':
      'إيرث موفرز إنترناشيونال مزوّد حلول نشط ومفضَّل في مجالات الإنشاءات المدنية والثقيلة والهندسة والنفط والغاز وإعادة التدوير والهدم.',
    'about.story2':
      'تأسّس فريقنا لمواجهة التحديات التي يواجهها قطاع الإنشاءات في مجالات الأعمال الترابية وإنشاء الطرق وتشغيل المعدات الثقيلة. واليوم ندعم مشاريع البنية التحتية والتجارية والصناعية في مختلف أنحاء الإمارات، بصفتنا مقاول إنشاء طرق وأعمال ترابية مقرّه دبي.',
    'about.story3':
      'نملك أحد أكبر أساطيل معدات الحفر الثقيل في دبي — حفارات وجرافات ومسوّيات ومداحل وكسّارات صخور ومعدات متخصصة — لتُنجَز المشاريع بسرعة وفاعلية وأمان. وبصفتنا مقاولاً معتمداً لدى هيئة الطرق والمواصلات، فإن الامتثال مبنيّ في كل ما ننفّذه.',
    'about.photoAlt': 'فريق إيرث موفرز إنترناشيونال ومعداته أثناء العمل',
    'about.milestones': 'محطات',
    'about.milestonesTitle': 'الطريق حتى الآن.',
    'about.directionEyebrow': 'الاتجاه',
    'about.directionTitle': 'الرسالة والرؤية',
    'about.vision':
      'رؤيتنا أن تصبح إيرث موفرز إنترناشيونال علامة عالمية في مجال الأعمال الترابية ومعدات وخدمات الإنشاءات الثقيلة.',
    'about.mission':
      'ورسالتنا أبسط من ذلك: تسليم أرض عملية جاهزة للبناء — بأمان وفي موعدها ووفق المواصفات — ليبني كل عميل بثقة على ما نسلّمه.',
    'about.valuesEyebrow': 'قيمنا',
    'about.valuesTitle': 'قواعد راسخة.',
    'about.seeServices': 'اطّلع على خدماتنا',
    'about.ctaTitle': 'ابنِ على أرض صلبة.',
    'about.ctaText': 'تحدّث إلى الفريق الذي يحرّك الأرض منذ عام 1990.',

    'proj.eyebrow': 'مشاريعنا',
    'proj.title': 'مختارات من أعمالنا في الإمارات.',
    'proj.lead':
      'من الجهات الحكومية إلى العملاء من القطاع الخاص — سجلّ مبني على السلامة والجودة ورضا العميل.',
    'proj.all': 'الكل',
    'proj.year': 'السنة',
    'proj.value': 'القيمة',
    'proj.delivered': 'مُسلَّم',
    'proj.whereEyebrow': 'أين نعمل',
    'proj.whereTitle': 'القطاعات التي نخدمها.',
    'proj.galleryEyebrow': 'معرض المواقع',
    'proj.galleryTitle': 'الأماكن التي تقف خلف أعمالنا.',
    'proj.ctaTitle': 'مشروعك، التالي على هذه الصفحة.',
    'proj.ctaText':
      'من عمليات نقل بقيمة 0.3 مليون درهم إلى تجديد طرق بملايين الدراهم — كل نطاق يحصل على المستوى نفسه من التنفيذ.',

    'wa.label': 'واتساب',
    'wa.aria': 'راسل إيرث موفرز إنترناشيونال على واتساب',
    'wa.cardLabel': 'واتساب',
    'wa.cardNote': 'أرسل موقعاً على الخريطة أو صوراً من الموقع أو مخططاً',
    'wa.msg':
      'السلام عليكم، إيرث موفرز إنترناشيونال — أرغب في مناقشة مشروع.\nالموقع ونطاق العمل:',
    // Structured rather than joined with a preposition: several service names
    // already begin with "أعمال", which "لأعمال {service}" would double.
    'wa.msgService':
      'السلام عليكم، إيرث موفرز إنترناشيونال — أرغب في الحصول على عرض سعر.\nالخدمة: {service}\nالموقع ونطاق العمل:',
    'ct.reachEyebrow': 'تواصل مباشر',
    'ct.callLabel': 'اتصل بالمكتب',
    'ct.callNote': 'أسرع وسيلة — نردّ خلال ساعات العمل',
    'ct.emailLabel': 'راسلنا بالبريد',
    'ct.emailNote': 'الأنسب لإرسال المخططات وجداول الكميات',
    'ct.officeNote': 'الزيارة بموعد مسبق',
    'ct.formEyebrow': 'أرسل نطاق عملك',
    'ct.formTitle': 'أخبرنا بما تريد تنفيذه.',
    'ct.formLead':
      'ثلاث معلومات وسطر واحد عن العمل تكفي للبدء. نُسعّر النطاق الفعلي، وعند الحاجة نعاين الموقع معك أولاً.',
    'ct.need': 'ما الذي تحتاجه؟',
    'ct.needPlaceholder': 'اختر الخدمة',
    'ct.notSure': 'لست متأكداً — أرجو المشورة',
    'ct.optional': 'اختياري',
    'ct.detailsHint': 'الموقع والكميات التقريبية والمواعيد المستهدفة، إن توفّرت.',
    'ct.noteBefore':
      'الإرسال يفتح تطبيق البريد لديك وقد عُبّئت الرسالة بالكامل، موجَّهة إلى {email}. لا يُرسَل شيء إلى هذا الموقع.',
    'ct.mapEyebrow': 'موقعنا',
    'ct.mapHeading': 'الخليج التجاري، دبي.',
    'ct.eyebrow': 'تواصل معنا',
    'ct.title': 'لنعاين موقعك.',
    'ct.lead':
      'اتصل أو راسلنا أو زُرنا — أخبرنا عن نطاق عملك ونعود إليك بخطة واضحة وسعر صادق.',
    'ct.phone': 'الهاتف',
    'ct.email': 'البريد الإلكتروني',
    'ct.office': 'المكتب',
    'ct.hours': 'ساعات العمل',
    'ct.hoursValue': 'الاثنين – السبت، 8:00 – 18:00',
    'ct.hoursSite': 'العمليات في المواقع: على مدار الساعة',
    'ct.name': 'الاسم',
    'ct.namePlaceholder': 'اسمك',
    'ct.phonePlaceholder': '+971 …',
    'ct.emailPlaceholder': 'you@company.com',
    'ct.interest': 'الخدمات محل الاهتمام',
    'ct.details': 'تفاصيل المشروع',
    'ct.detailsPlaceholder': 'الموقع ونطاق العمل والجدول الزمني — أي معلومات متاحة لديك.',
    'ct.send': 'إرسال الطلب',
    'ct.note': 'الإرسال يفتح تطبيق البريد لديك والرسالة موجَّهة إلى {email}.',
    'ct.subject': 'طلب: {picked} — {name}',
    'ct.general': 'استفسار عام',
    'ct.mapTitle': 'إيرث موفرز إنترناشيونال — برج كابيتال الذهبي، الخليج التجاري، دبي',

    'nf.title': 'هذه الأرض لم تُفتح بعد.',
    'nf.text': 'الصفحة التي تبحث عنها غير موجودة — لكن بقية الموقع موجودة.',
    'nf.back': 'العودة إلى الرئيسية',
    'guides.eyebrow': 'أدلة',
    'guides.title': 'أدلة الطرق والأعمال الترابية',
    'guides.lead':
      'كيف يُنفَّذ العمل فعلاً في الإمارات — بقلم من ينفّذونه، للعملاء والاستشاريين ولكل من يضع المواصفات.',
    'guides.crumb': 'الأدلة',
    'guides.kicker': 'دليل',
    'guides.read': 'اقرأ الدليل',
    'guides.contents': 'المحتويات',
    'guides.railLead': 'تريد تنفيذ هذا لا شرحه؟ أخبرنا بالنطاق ونسعّره لك.',
    'guides.relatedTitle': 'الخدمات وراء هذا الدليل',
    'guides.relatedLead': 'إن كنت تريد تنفيذ هذا لا شرحه، فهذه الصفحات نقطة البداية.',
    'seo.guidesTitle': 'أدلة الطرق والأعمال الترابية | {brand}',
    'seo.guidesDesc':
      'أدلة عملية لإنشاء الطرق والحفر والأسفلت والأعمال الترابية في الإمارات، من مقاول معتمد لدى هيئة الطرق والمواصلات.',
    'seo.guideTitle': '{title} | {brand}',
  },
}

// t('svc.covers', { name: 'Excavation' }) — falls back to English, then the key.
export function translator(locale) {
  const table = UI[locale] || UI.en
  return (key, vars) => {
    const raw = table[key] ?? UI.en[key] ?? key
    if (!vars) return raw
    return raw.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m))
  }
}
