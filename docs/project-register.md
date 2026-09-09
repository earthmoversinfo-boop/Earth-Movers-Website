# Project register and photographs

The register on `/projects` is built from `src/data/projects.js` (English) and
`src/data/projects.ar.js` (Arabic overlay — same order, words only).

## Adding photographs to a project

The project documents (`NN_Complete.docx`) are the source. A .docx is a zip, so
both the write-up and the full-resolution photographs come straight out of it:

```
unzip -o NN_Complete.docx -d /tmp/docNN     # word/document.xml + word/media/
```

`word/document.xml` holds the project number, name, client and scope; the
photographs sit in `word/media/` at the resolution they were pasted in, and
`word/_rels/document.xml.rels` maps each `r:embed` id to its file, which is how
the pictures are put back in the order they appear in the document.

Then:

1. Copy the frames worth using into `assets/originals/projects/`, named after
   the project id with a number: `khorfakkan-road-diversion-1.jpg`, `-2.jpg`…
2. Run `python3 scripts/make-project-images.py`. It writes two sizes of each into
   `public/images/projects/` — `<stem>.jpg` for the grid and `<stem>-full.jpg`
   for the lightbox.
3. Add them to that project's `photos` array in `projects.js` as
   `{ src, alt }`. The first one becomes the card image; all of them appear in
   the album on `/projects`, under the project's own name.
4. Add the Arabic caption for each one, in the same order, to the matching entry
   in `projects.ar.js`. Captions are what search engines read and what the
   lightbox shows, so they say what the frame shows rather than repeating the
   project name.

Nothing in the page needs touching: a register card grows a photograph, and the
album grows a section, as soon as `photos` is non-empty.

## The register

| id | Project | Client | Discipline |
| --- | --- | --- | --- |
| tawyeen-new-asphalt-road | New Asphalt Road, Al Tawyeen | Fujairah National Resources Corporation | Roads & Asphalt |
| dibba-bulk-terminal-p1 | Dibba Bulk Handling Terminal — Package 01 | Port of Fujairah | Roads & Asphalt |
| siji-new-asphalt-road | Construction of New Asphalt Road, Siji | Fujairah National Resources Corporation | Roads & Asphalt |
| power-intl-sharjah-cement-road | New Asphalt Road for Power International & Sharjah Cement | Fujairah National Resources Corporation | Roads & Asphalt |
| tawyeen-weighbridge-road | Extension of Weighbridge Road, Al Tawyeen | Fujairah National Resources Corporation | Roads & Asphalt |
| hassyan-internal-road | Internal Road, Hassyan Power Station | DHCN Construction LLC | Roads & Asphalt |
| el-sewedy-layyah | El Sewedy PSP, Layyah Power Station | El Sewedy Power | Roads & Asphalt |
| creative-house-asphalt | Asphalt Road Works | Creative House Scaffolding | Roads & Asphalt |
| fci-road-patches | FCI Road Patch Repair Works | Fujairah Cement Industries | Maintenance & Repair |
| fujairah-31-locations | Repair and Restoration of Roads at 31 Locations | Fujairah National Resources Corporation | Maintenance & Repair |
| tawyeen-siji-rehabilitation | Maintenance & Rehabilitation of Roads, Al Tawyeen and Siji | Fujairah National Resources Corporation | Maintenance & Repair |
| tawyeen-rehabilitation | Maintenance & Rehabilitation of Road, Al Tawyeen | Fujairah National Resources Corporation | Maintenance & Repair |
| tawyeen-roundabout | Maintenance & Rehabilitation of Al Tawyeen Roundabout and Road | Fujairah National Resources Corporation | Maintenance & Repair |
| siji-asphalt-road-repair | Repair of Asphalt Road, Siji | Fujairah National Resources Corporation | Maintenance & Repair |
| dubai-taxi-reinstatement | Asphalt Reinstatement Works | Dubai Taxi | Maintenance & Repair |
| jabal-mibreh-road | Reconstruction of Jabal Mibreh Road, Al Tawyeen | Ministry of Infrastructure Development | Earthworks & Formation |
| damac-sun-city-access | Temporary Access Road, DAMAC Sun City | DAMAC | Earthworks & Formation |
| damac-al-yufra-2 | DAMAC Al Yufra 2 | Infranets Contracting LLC | Earthworks & Formation |
| uaq-161-migd-water | 161 MIGD Umm Al Quwain Independent Water Project | Al Manadar Road Contracting | Earthworks & Formation |
| riddhi-siddhi-thouban | Riddhi Siddhi Crushers, Thouban Project | Riddhi Siddhi Crushers | Earthworks & Formation |
| aark-paving-access | Building External Paving Access | AARK Developers LLC | Paving & Plot Access |
| jvc-interlock-access | Temporary Interlock Access to Building, JVC | Al Rams Prime Construction | Paving & Plot Access |
| mercedes-gac-access | Mercedes-Benz Majlis and GAC Ittihad | Al Rams Prime Construction | Paving & Plot Access |
| al-rams-external-pavement | Proposed External Pavement and Plot Access Works | Al Rams Prime Construction | Paving & Plot Access |
| salimi-external-pavement | Proposed External Pavement and Plot Access Works | Mohammad Javed Salimi | Paving & Plot Access |
| bns-paving-access | Building External Paving Access | BNS Contracting | Paving & Plot Access |
| dubai-holding-house-connection | DM Sewerage and Drainage House Connection | Dubai Holding | Utilities & Drainage |
| al-serh-house-connection | DM Sewerage and Drainage House Connection | Al Serh Al Kabeer Construction LLC | Utilities & Drainage |
| ikhlas-house-connection | DM Sewerage and Drainage House Connection | Ikhlas Building Contracting | Utilities & Drainage |
| hassyan-sleeve-works | Sleeve Works, Hassyan Power Station | DHCN Construction LLC | Utilities & Drainage |
| dibba-bulk-terminal-p2 | Dibba Bulk Handling Terminal — Package 02 | Port of Fujairah | Traffic Management |
| khorfakkan-road-diversion | Khorfakkan Tunnels Road Diversion | Sharjah Roads and Transport Authority | Traffic Management |
| nakheel-beach | Beach Profiling and Boulder Placement | Nakheel PJSC | Marine & Coastal |
| dubai-municipality-relocation | Animal Relocation, Dubai Airport to Dubai Safari | Dubai Municipality | Specialised Works |
| el-sewedy-awir | El Sewedy PSP, Al Awir Power Station | El Sewedy Power | Specialised Works |
