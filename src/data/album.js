// ---------------------------------------------------------------------------
// Photographs whose project is not yet identified, grouped by the run of work
// they came from. A project's own pictures live on its entry in projects.js and
// render above these; a set moves out of this file the moment its document
// arrives and names the contract. The urban kerb, chamber and interlock sets
// left here when document 32 identified them as the JVC access job.
//
// Every caption describes what the frame shows. Where a photograph does not
// evidence a client, a contract or a date, none is claimed: the albums are
// titled by the work and, where the setting places it, by the emirate.
//
// `src` is a file stem. scripts/make-project-images.py writes two sizes of each
// one into public/images/projects: `<stem>.jpg` for the grid and
// `<stem>-full.jpg` for the lightbox.
// ---------------------------------------------------------------------------

export const albums = [
  {
    slug: 'road-base-and-asphalt',
    title: 'Road base, asphalt and stone-pitched drainage',
    place: 'Fujairah',
    text: 'An access road built through the mountain plant area — subgrade tested before it was covered, aggregate base spread and trimmed to level, the wearing course laid by paver and rolled, and the run-off channels beside it pitched by hand in graded rock.',
    photos: [
      { src: 'fuj-density-test', alt: 'Field density test on the compacted subgrade before the base course goes down' },
      { src: 'fuj-aggregate-windrow', alt: 'Aggregate base spread in a windrow ready for trimming' },
      { src: 'fuj-roadbase-plant', alt: 'Road base worked past the plant, with the excavator and tipper on the run' },
      { src: 'fuj-grader', alt: 'Motor grader trimming the road base to level' },
      { src: 'fuj-asphalt-strip', alt: 'First asphalt run laid through the mountain section' },
      { src: 'fuj-paver-crew', alt: 'Paving crew working behind the asphalt paver' },
      { src: 'fuj-paver-tipper', alt: 'Asphalt paver taking a load from the tipper on the wearing course' },
      { src: 'fuj-roller-channel', alt: 'Tandem roller compacting the mat beside the finished stone-pitched channel' },
      { src: 'fuj-stone-pitching-crew', alt: 'Crew hand-pitching rock into the drainage channel beside the carriageway' },
      { src: 'fuj-stone-placing', alt: 'Placing and bedding graded rock along the channel invert' },
      { src: 'fuj-channel-curve', alt: 'Stone-pitched channel following the curve of the road' },
      { src: 'fuj-channel-landscape', alt: 'Completed stone-pitched drainage channel running down to the outfall' },
    ],
  },
  {
    slug: 'resurfacing-and-markings',
    title: 'Resurfacing, patch repairs and road markings',
    place: 'Fujairah',
    text: 'A live road rebuilt without closing it: failed sections saw-cut, dug out and reinstated, a full-width overlay laid and compacted by a paver train, and the crossings re-marked at the end of the shift before traffic came back on.',
    photos: [
      { src: 'res-carriageway', alt: 'Carriageway formation prepared for the overlay, fenced off from traffic' },
      { src: 'res-saw-cutting', alt: 'Saw-cutting the edge of a failed section before it is broken out' },
      { src: 'res-patch-strip', alt: 'Hot asphalt raked out into a reinstated patch' },
      { src: 'res-patch-compaction', alt: 'Compacting a reinstatement patch with a walk-behind roller' },
      { src: 'res-patch-reinstatement', alt: 'Reinstatement patches across the carriageway ahead of the overlay' },
      { src: 'res-paver-train', alt: 'Paver and rollers working the wearing course across the full width' },
      { src: 'res-paver-close', alt: 'Asphalt paver laying the wearing course' },
      { src: 'res-roller-mat', alt: 'Tandem roller on the fresh mat' },
      { src: 'res-rollers-pair', alt: 'Two rollers working the mat behind the paver' },
      { src: 'res-roller-train', alt: 'Roller train following the paver on a full-width overlay' },
      { src: 'res-crossing-markings', alt: 'Yellow and white pedestrian crossing marked out on the new surface' },
      { src: 'res-crossing-dusk', alt: 'Finished crossing markings at dusk, ready for the road to reopen' },
    ],
  },
]

export const albumPhotos = albums.flatMap((a) => a.photos)
