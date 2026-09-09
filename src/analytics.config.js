// ---------------------------------------------------------------------------
// Analytics IDs. THIS IS THE ONLY FILE YOU EDIT to turn tracking on.
//
// Everything stays inert while these are empty — no script is loaded, no
// cookie is set, no request leaves the browser. Paste an ID and it starts.
// A wrong ID is worse than none, because it quietly pollutes somebody else's
// property, so nothing is guessed here.
//
// WHERE EACH ONE COMES FROM
//
//   GA4_ID   analytics.google.com -> Admin -> Data streams -> your web stream.
//            Looks like 'G-XXXXXXXXXX'. This is the "Google tag".
//
//   ADS_ID   ads.google.com -> Tools -> Conversions -> Google tag.
//            Looks like 'AW-XXXXXXXXX'. Only needed if you run Google Ads.
//            Leave empty otherwise. (Note: this is Google *Ads*. AdSense is a
//            different product — it pays you to show ads on your own site,
//            which is not what a contractor's site is for.)
//
//   GTM_ID   Only if you would rather manage tags in Google Tag Manager than
//            here. Looks like 'GTM-XXXXXXX'. If you set this, leave GA4_ID
//            empty and configure GA4 inside GTM instead — running both sends
//            every event twice.
//
//   SITE_VERIFICATION
//            search.google.com/search-console -> Settings -> Ownership
//            verification -> HTML tag. Paste only the content="..." value.
//            Needed once to prove the domain is yours; it can stay afterwards.
//
// Google Search Console needs no tag for its data — it reports on impressions
// and clicks from Google's side. The verification string above is only about
// proving ownership. To join GSC data to this site's behaviour data, link the
// two in GA4: Admin -> Product links -> Search Console links.
// ---------------------------------------------------------------------------

export const GA4_ID = ''
export const ADS_ID = ''
export const GTM_ID = ''
export const SITE_VERIFICATION = ''

// Set true while testing to see every event in the browser console instead of
// guessing whether it fired. Leave false in production.
export const DEBUG = false
