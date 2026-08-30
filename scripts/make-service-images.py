#!/usr/bin/env python3
# ---------------------------------------------------------------------------
# Builds the site's service photography from the company's own job photographs
# in assets/originals/services/.
#
# Every service page gets two crops of the same photograph: a wide one for the
# page banner and a portrait one for the rail beside the overview text. Their
# regions of interest differ, so a page shows two views of the job rather than
# the same frame twice.
#
# A region is given as fractions of the source (x0, y0, x1, y1); the largest
# box of the wanted ratio that fits inside it and stays on the frame is taken.
#
# The five Utilities services are documentation-led rather than plant-led, so
# they keep their drawing and survey imagery; everything else is now a site
# photograph from an Earth Movers project.
#
# Run with:  python3 scripts/make-service-images.py   (needs Pillow)
# ---------------------------------------------------------------------------

from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'images' / 'services'
IMG = ROOT / 'public' / 'images'
W, H = 1400, 933          # wide crop, used as the page banner
TW, TH = 900, 1125        # portrait crop, used in the overview rail

S = 'assets/originals/services'   # the company's own job photographs
L = 'public/images/library'

# slug -> (source, region of interest)
PLAN = {
    # Earth Works
    'excavation':                  (f'{S}/excavation-2.jpg',            (0.05, 0.00, 1.00, 1.00)),
    'back-filling':                (f'{S}/backfilling.jpg',             (0.10, 0.10, 0.95, 0.95)),
    'cut-and-fill':                (f'{S}/cut-n-fill-2.jpg',            (0.00, 0.05, 0.74, 1.00)),
    'leveling-and-compaction':     (f'{S}/leveling-and-compaction.jpg', (0.15, 0.00, 1.00, 1.00)),

    # Road Works
    'access-roads':                (f'{S}/access-roads.jpg',            (0.00, 0.00, 1.00, 1.00)),
    'road-base-laying':            (f'{S}/road-base-laying.jpg',        (0.00, 0.28, 1.00, 0.92)),
    'asphalt-works':               (f'{S}/asphalt-works.jpg',           (0.30, 0.10, 1.00, 1.00)),
    'road-maintenance':            (f'{S}/road-maintenance.jpg',        (0.00, 0.15, 1.00, 0.85)),
    'asphalt-patch-works':         (f'{S}/asphalt-patch-works.jpg',     (0.00, 0.28, 1.00, 0.68)),
    'parking-construction':        (f'{S}/parkings.jpg',                (0.00, 0.00, 1.00, 1.00)),
    'heavy-duty-interlock-paving': (f'{S}/heavy-duty-interlock-paving.jpg', (0.00, 0.10, 1.00, 1.00)),
    'kerbstones':                  (f'{S}/kerbstones.jpg',              (0.00, 0.00, 1.00, 1.00)),
    'road-markings':               (f'{S}/road-markings.jpg',           (0.00, 0.10, 1.00, 1.00)),

    # Traffic Management
    'lane-closure-permits':        (f'{S}/lane-closure.jpg',            (0.30, 0.10, 1.00, 1.00)),
    'road-closure-permits':        (f'{S}/road-closure.jpg',            (0.00, 0.35, 1.00, 0.75)),
    'traffic-management':          (f'{S}/traffic-management.jpg',      (0.00, 0.30, 1.00, 0.65)),

    # Utilities — documentation-led, so these keep their drawing/survey imagery
    'rta-approved-entry-exit-works': (f'{L}/operator-backhoe.jpg',      (0.00, 0.00, 1.00, 1.00)),
    'rta-service-protection':      (f'{L}/survey-setting-out.jpg',      (0.00, 0.00, 1.00, 1.00)),
    'row-permits':                 ('public/images/svc-utilities.jpg',  (0.00, 0.00, 1.00, 1.00)),
    'utilities-shifting':          (f'{S}/backfilling.jpg',             (0.00, 0.05, 0.64, 1.00)),
    'noc-services':                ('public/images/banner-services.jpg',(0.00, 0.00, 1.00, 1.00)),
}


# Portrait regions. Where a source has a clear subject the tall crop moves in
# on it; where the interest is a long edge or surface it takes a section of it.
TALL = {
    'excavation':                  (0.30, 0.00, 0.98, 1.00),
    'back-filling':                (0.40, 0.05, 0.95, 0.95),
    'cut-and-fill':                (0.06, 0.00, 0.66, 1.00),
    'leveling-and-compaction':     (0.60, 0.00, 1.00, 1.00),
    'access-roads':                (0.18, 0.00, 0.62, 1.00),
    'road-base-laying':            (0.00, 0.35, 1.00, 1.00),
    'asphalt-works':               (0.42, 0.12, 0.78, 1.00),
    'road-maintenance':            (0.10, 0.10, 1.00, 1.00),
    'asphalt-patch-works':         (0.05, 0.22, 0.95, 0.92),
    'parking-construction':        (0.15, 0.00, 0.85, 1.00),
    'heavy-duty-interlock-paving': (0.20, 0.00, 0.80, 1.00),
    'kerbstones':                  (0.28, 0.00, 0.88, 1.00),
    'road-markings':               (0.38, 0.00, 0.95, 1.00),
    'lane-closure-permits':        (0.44, 0.20, 0.72, 1.00),
    'road-closure-permits':        (0.00, 0.30, 1.00, 0.85),
    'traffic-management':          (0.00, 0.25, 1.00, 0.80),
    'rta-approved-entry-exit-works': (0.02, 0.00, 0.78, 1.00),
    'rta-service-protection':      (0.14, 0.00, 0.90, 1.00),
    'row-permits':                 (0.00, 0.00, 1.00, 1.00),
    'utilities-shifting':          (0.02, 0.28, 0.44, 1.00),
    'noc-services':                (0.10, 0.00, 0.95, 1.00),
}

# A drawing is a landscape document: cropping it to portrait cuts the title
# block off. These are fitted whole onto a paper ground instead.
FIT_TALL = {'row-permits', 'category-utilities'}

# Category images. The wide file is the card on /services and the banner on the
# category pages; the tall one is the rail on the emirate pages. Utilities keeps
# its stamped-drawing composite, which make-utilities-image.py builds.
CATEGORY = {
    'earth-works':        (f'{S}/cut-n-fill-2.jpg',       (0.00, 0.00, 1.00, 1.00), (0.30, 0.00, 0.95, 1.00)),
    'road-works':         (f'{S}/asphalt-works.jpg',      (0.00, 0.05, 1.00, 1.00), (0.00, 0.10, 0.46, 1.00)),
    'traffic-management': (f'{S}/lane-closure.jpg',       (0.00, 0.00, 1.00, 0.94), (0.00, 0.00, 0.46, 1.00)),
    'utilities':          ('public/images/svc-utilities.jpg', None,                 (0.00, 0.00, 1.00, 1.00)),
}
CAT_W, CAT_H = 1600, 1066

# Home-page slots that the job photographs serve better than the stock frames
# they replace: two of the three hero slides, and the fleet picture.
NAMED = {
    'hero-slide-1.jpg': (f'{S}/leveling-and-compaction.jpg', (0.00, 0.00, 1.00, 1.00), (1920, 820), None),
    # the fleet picture sits in a dark band, so the pale sand needs holding up
    'fleet.jpg':        (f'{S}/backfilling.jpg',             (0.02, 0.02, 0.98, 0.86), (1400, 875), (1.18, 1.30)),
}


# Some of the site photographs were taken through summer haze and come out
# flat and grey next to the rest. These get a measured contrast and colour lift
# so the set reads as one library rather than as photos from two cameras.
PUNCH = {
    'road-base-laying':    (1.16, 1.28),
    'road-maintenance':    (1.14, 1.22),
    'asphalt-patch-works': (1.10, 1.18),
    'traffic-management':  (1.06, 1.12),
    'road-closure-permits': (1.06, 1.10),
}


def crop_to(im, box, target):
    """Largest crop of the given ratio centred on the region, clamped to frame."""
    iw, ih = im.size
    x0, y0, x1, y1 = box[0] * iw, box[1] * ih, box[2] * iw, box[3] * ih
    rw, rh = x1 - x0, y1 - y0
    cw, ch = (rw, rw / target) if rw / rh > target else (rh * target, rh)
    # a region can be a different shape to the frame, so shrink the box until
    # it fits inside the source rather than letting it run off the edge
    scale = min(1.0, iw / cw, ih / ch)
    cw, ch = cw * scale, ch * scale
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    cx = min(max(cx, cw / 2), iw - cw / 2)
    cy = min(max(cy, ch / 2), ih - ch / 2)
    return im.crop((round(cx - cw / 2), round(cy - ch / 2),
                    round(cx + cw / 2), round(cy + ch / 2)))


def render(im, box, size, out, fit=False, punch=None):
    w, h = size
    if fit:
        c = Image.new('RGB', (w, h), (240, 242, 245))
        inner = im.copy()
        inner.thumbnail((round(w * 0.92), round(h * 0.92)), Image.LANCZOS)
        c.paste(inner, ((w - inner.width) // 2, (h - inner.height) // 2))
    else:
        c = crop_to(im, box, w / h).resize((w, h), Image.LANCZOS)
    if punch:
        contrast, colour = punch
        c = ImageEnhance.Contrast(c).enhance(contrast)
        c = ImageEnhance.Color(c).enhance(colour)
    c = c.filter(ImageFilter.UnsharpMask(radius=1.2, percent=48, threshold=3))
    c.save(out, quality=86, optimize=True, progressive=True)


def load(src):
    path = ROOT / src
    return Image.open(path).convert('RGB') if path.exists() else None


def main():
    OUT.mkdir(parents=True, exist_ok=True)

    for slug, (src, box) in PLAN.items():
        im = load(src)
        if im is None:
            print(f'  skip {slug}: {src} not found')
            continue
        punch = PUNCH.get(slug)
        render(im, box, (W, H), OUT / f'{slug}.jpg', punch=punch)
        render(im, TALL.get(slug, box), (TW, TH), OUT / f'{slug}-tall.jpg',
               fit=slug in FIT_TALL, punch=punch)

    # category card/banner and the rail picture on the emirate pages
    for slug, (src, wide, tall) in CATEGORY.items():
        im = load(src)
        if im is None:
            print(f'  skip category {slug}: {src} not found')
            continue
        if wide is not None:
            render(im, wide, (CAT_W, CAT_H), IMG / f'svc-{slug}.jpg')
        render(im, tall, (TW, TH), OUT / f'category-{slug}-tall.jpg',
               fit=f'category-{slug}' in FIT_TALL, punch=PUNCH.get(slug))

    # home-page slots
    for name, (src, box, size, punch) in NAMED.items():
        im = load(src)
        if im is None:
            print(f'  skip {name}: {src} not found')
            continue
        render(im, box, size, IMG / name, punch=punch)

    print(f'wrote {len(list(OUT.glob("*.jpg")))} service images to {OUT}')


if __name__ == '__main__':
    main()
