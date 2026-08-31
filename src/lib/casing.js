// Service and category names are written in title case, but most of the copy
// drops them mid-sentence — "what our road maintenance package covers". A
// plain toLowerCase() does the right thing for those and the wrong thing for
// the acronyms the industry runs on, turning RTA Service Protection into "rta
// service protection". Anything already fully capitalised is left alone.
//
// Arabic has no letter case, so the name is returned untouched.
const ACRONYM = /^[A-Z0-9&]{2,}$/

export function lowerName(name, locale) {
  if (locale === 'ar' || !name) return name
  return name
    .split(' ')
    .map((word) => (ACRONYM.test(word) ? word : word.toLowerCase()))
    .join(' ')
}
