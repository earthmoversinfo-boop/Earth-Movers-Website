// ---------------------------------------------------------------------------
// The site record on /projects — the company's own job photographs, grouped by
// the run of work they came from rather than by client.
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
  {
    slug: 'kerb-and-chambers',
    title: 'Kerb, channel and chamber works',
    text: 'Street-level infrastructure on a live urban road — kerb lines lifted and reset to new radii, sub-base regraded and rolled behind them, and utility chambers cut out, rebuilt and brought back up to the finished surface level.',
    photos: [
      { src: 'kerb-bedding', alt: 'Kerb line bedded on concrete along a new footpath edge' },
      { src: 'kerb-setting', alt: 'Setting kerbstones to line and level on the new radius' },
      { src: 'kerb-radius-crew', alt: 'Crew setting the kerb radius and backfilling behind the line' },
      { src: 'kerb-radius-cut', alt: 'Cutting a kerb to fit the radius at a footpath return' },
      { src: 'kerb-roller', alt: 'Ride-on roller compacting the sub-base behind the new kerb line' },
      { src: 'chamber-excavation', alt: 'Utility chamber exposed and squared out ready for rebuilding' },
      { src: 'chamber-cover-lift', alt: 'Chamber cover slab lifted clear so the frame can be reset' },
      { src: 'chamber-frame-setting', alt: 'Chamber frame set to the finished surface level' },
      { src: 'chamber-rebuild', alt: 'Chamber walls rebuilt around the existing service' },
      { src: 'service-saw-cutting', alt: 'Saw-cutting a trench line beside a protected service' },
      { src: 'backhoe-loading', alt: 'Backhoe loading broken-out material into the tipper on a live street' },
      { src: 'material-delivery', alt: 'Sub-base and bedding material delivered to the working face' },
    ],
  },
  {
    slug: 'footpath-and-interlock',
    title: 'Footpath and interlock paving',
    text: 'Footpaths and public areas relaid in interlock — bedding sand screeded to level, blocks laid to the pattern, edges cut in against the kerb line, and the surface compacted and jointed before it was handed back.',
    photos: [
      { src: 'paving-sand-screed', alt: 'Bedding sand screeded to level before the blocks go down' },
      { src: 'paving-crew-laying', alt: 'Paving crew laying interlock blocks to the pattern' },
      { src: 'paving-block-run', alt: 'Block run advancing along the footpath' },
      { src: 'paving-edge-line', alt: 'Cutting in the edge course against the kerb line' },
      { src: 'paving-curve-kerb', alt: 'Interlock laid around a curved kerb line' },
      { src: 'paving-plaza', alt: 'Paved area taking shape between the buildings' },
      { src: 'paving-block-delivery', alt: 'Interlock blocks unloaded and stacked at the working face' },
      { src: 'paving-night-works', alt: 'Night shift working the footpath while the road stays open' },
      { src: 'setting-out-night', alt: 'Setting out the next section after dark' },
      { src: 'paving-bollard-circle', alt: 'Bollards set into the finished paving at a vehicle entrance' },
      { src: 'footpath-finished', alt: 'Completed footpath handed back to pedestrians' },
      { src: 'footpath-street', alt: 'Finished footpath swept down before handover' },
    ],
  },
]

export const albumPhotos = albums.flatMap((a) => a.photos)
