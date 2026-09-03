# Analytics

## Turning it on

Edit **`src/analytics.config.js`** and paste your IDs. Nothing loads until you
do — no script, no cookie, no request. Then rebuild and deploy.

| Constant | Where to get it | Looks like |
| --- | --- | --- |
| `GA4_ID` | analytics.google.com → Admin → Data streams → your web stream | `G-XXXXXXXXXX` |
| `ADS_ID` | ads.google.com → Tools → Conversions → Google tag (only if you run Ads) | `AW-XXXXXXXXX` |
| `GTM_ID` | Only if you prefer Tag Manager. If set, leave `GA4_ID` empty | `GTM-XXXXXXX` |
| `SITE_VERIFICATION` | Search Console → Settings → Ownership verification → HTML tag | a long random string |

Set `DEBUG = true` temporarily to log every event to the browser console.

**Do not set both `GA4_ID` and `GTM_ID`.** If GTM is configured to load GA4,
you will record every event twice and halve every rate you calculate.

## What is tracked

### Page views

Fired on every route, including client-side navigation. The default Google tag
only fires once per full page load, so on a single-page app it misses every
page the visitor reaches by clicking — which here is most of them.

Every page view carries:

| Parameter | Example |
| --- | --- |
| `page_type` | `service`, `service_location`, `service_category`, `guide`, `contact`, `home` |
| `category` | `road-works` |
| `service` | `asphalt-works` |
| `emirate` | `fujairah` |
| `locale` | `en` or `ar` |
| `content_group` | same as `page_type` |

This is what lets you ask "do Fujairah pages convert better than Dubai ones"
or "which discipline earns the most enquiries" without parsing URLs in a
report.

### Conversion events

| Event | Fires when | Extra parameters |
| --- | --- | --- |
| `click_call` | any `tel:` link is clicked | `link_url` |
| `click_whatsapp` | the floating button or any WhatsApp link | — |
| `click_email` | any `mailto:` link | `link_url` |
| `submit_enquiry` | the contact form is submitted | `service_enquired`, `has_email` |

All four carry the page parameters above, so you can see **which page produced
the enquiry**, not just that one happened.

They are caught by a single delegated listener rather than a handler on each
link, so links added later are tracked automatically.

## After the IDs are in — do these in GA4

1. **Register the custom dimensions.** Admin → Custom definitions → Create
   custom dimension, scope *Event*, for each of: `page_type`, `category`,
   `service`, `emirate`, `locale`. Without this the parameters are still
   collected but only visible in DebugView, not in reports. Do it early —
   dimensions are not backfilled.

2. **Mark the conversions.** Admin → Events → toggle *Mark as key event* on
   `click_call`, `click_whatsapp`, `submit_enquiry`.

3. **Link Search Console.** Admin → Product links → Search Console links. This
   is what joins GSC's impressions and queries to this site's behaviour, so
   you can see which query brought someone who then called.

4. **Link Google Ads** (if you run it). Admin → Product links → Google Ads, then
   import the key events above as conversions.

## Two honest limits

**The contact form hands off to a mail client.** `submit_enquiry` records that
the visitor pressed send with a filled form — not that an email was actually
sent. It is a strong intent signal, not a delivery receipt. A server-side form
would close that gap and is the single biggest improvement available here.

**Tel and WhatsApp clicks are intent, not calls.** A click means the dialler
opened. Whether the call connected or the message was sent is not observable
from a web page by anyone.

## Privacy

The site sets no cookie and sends nothing while the IDs are empty. Once GA4 is
on, it sets its own cookies. The UAE has no consent-banner requirement
equivalent to the EU's, but if you expect meaningful EU traffic you would need
a consent banner and Google Consent Mode. Neither is built here — say the word
if that changes.
