#!/usr/bin/env python3
# ---------------------------------------------------------------------------
# Builds public/images/services/<slug>.jpg — one hero image per service page.
#
# The company's photo library is smaller than the number of service pages, so
# each image is a distinct 3:2 crop of the most relevant source photograph
# rather than the whole frame. Where two services share a source they are given
# different crop windows, so the pages do not read as duplicates.
#
# Each service gets two crops of the same source: a wide one for the banner
# and a portrait one for the rail beside the overview text. Their regions of
# interest differ, so a page shows two views of the subject rather than the
# same frame twice.
#
# A region is given as fractions of the source (x0, y0, x1, y1); the largest
# box of the wanted ratio that fits inside it and stays on the frame is taken.
#
# Run with:  python3 scripts/make-service-images.py   (needs Pillow)
# ---------------------------------------------------------------------------

from pathlib import Path
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'images' / 'services'
W, H = 1400, 933          # wide crop, used as the page banner
TW, TH = 900, 1125        # portrait crop, used in the overview rail

L = 'public/images/library'

# slug -> (source, region of interest)
PLAN = {
    # Earth Works
    'excavation':                  ('public/images/svc-earth-works.jpg', (0.18, 0.10, 0.95, 1.00)),
    'back-filling':                (f'{L}/operator-backhoe.jpg',         (0.00, 0.00, 1.00, 1.00)),
    'cut-and-fill':                ('1.jpg',                             (0.10, 0.10, 0.90, 1.00)),
    'leveling-and-compaction':     ('public/images/hero-slide-1.jpg',    (0.24, 0.00, 1.00, 1.00)),

    # Road Works
    'access-roads':                ('public/images/hero-slide-1.jpg',    (0.00, 0.00, 0.62, 1.00)),
    'road-base-laying':            ('public/images/fleet.jpg',           (0.00, 0.00, 1.00, 1.00)),
    'asphalt-works':               ('public/images/svc-road-works.jpg',  (0.22, 0.00, 1.00, 1.00)),
    'road-maintenance':            ('public/images/svc-road-works.jpg',  (0.00, 0.10, 0.60, 1.00)),
    'asphalt-patch-works':         ('public/images/project-fujairah.jpg',(0.00, 0.20, 0.66, 1.00)),
    'parking-construction':        ('public/images/hero-slide-3.jpg',    (0.00, 0.05, 0.66, 1.00)),
    'heavy-duty-interlock-paving': ('public/images/about.jpg',          (0.00, 0.00, 1.00, 1.00)),
    'kerbstones':                  ('2.jpg',                             (0.00, 0.30, 0.68, 1.00)),
    'road-markings':               ('public/images/svc-traffic-management.jpg', (0.42, 0.52, 1.00, 1.00)),

    # Traffic Management
    'lane-closure-permits':        ('public/images/svc-traffic-management.jpg', (0.00, 0.30, 0.62, 1.00)),
    'road-closure-permits':        ('public/images/project-fujairah.jpg',(0.24, 0.00, 1.00, 0.92)),
    'traffic-management':          ('public/images/svc-traffic-management.jpg', (0.10, 0.00, 1.00, 0.90)),

    # Utilities
    'rta-approved-entry-exit-works': ('public/images/hero-slide-1.jpg',  (0.16, 0.24, 0.74, 1.00)),
    'rta-service-protection':      (f'{L}/survey-setting-out.jpg',       (0.00, 0.00, 1.00, 1.00)),
    'row-permits':                 ('public/images/svc-utilities.jpg',   (0.00, 0.00, 1.00, 1.00)),
    'utilities-shifting':          ('public/images/svc-earth-works.jpg', (0.00, 0.28, 0.62, 1.00)),
    'noc-services':                ('public/images/banner-services.jpg', (0.00, 0.00, 1.00, 1.00)),
}


# Portrait regions. Where a source has a clear subject the tall crop moves in
# on it; where the interest is a long edge or surface it takes a section of it.
TALL = {
    'excavation':                  (0.30, 0.00, 0.85, 1.00),
    'back-filling':                (0.18, 0.00, 0.92, 1.00),
    'cut-and-fill':                (0.28, 0.05, 0.86, 1.00),
    'leveling-and-compaction':     (0.02, 0.06, 0.42, 1.00),
    'access-roads':                (0.06, 0.00, 0.55, 1.00),
    'road-base-laying':            (0.10, 0.00, 0.80, 1.00),
    'asphalt-works':               (0.44, 0.00, 1.00, 1.00),
    'road-maintenance':            (0.00, 0.20, 0.42, 1.00),
    'asphalt-patch-works':         (0.10, 0.24, 0.62, 1.00),
    'parking-construction':        (0.20, 0.00, 0.72, 1.00),
    'heavy-duty-interlock-paving': (0.24, 0.00, 0.86, 1.00),
    'kerbstones':                  (0.00, 0.34, 0.46, 1.00),
    'road-markings':               (0.46, 0.40, 1.00, 1.00),
    'lane-closure-permits':        (0.06, 0.26, 0.54, 1.00),
    'road-closure-permits':        (0.34, 0.00, 0.92, 0.94),
    'traffic-management':          (0.22, 0.00, 0.78, 0.96),
    'rta-approved-entry-exit-works': (0.22, 0.16, 0.72, 1.00),
    'rta-service-protection':      (0.14, 0.00, 0.90, 1.00),
    'row-permits':                 (0.00, 0.00, 1.00, 1.00),
    'utilities-shifting':          (0.08, 0.22, 0.58, 1.00),
    'noc-services':                (0.10, 0.00, 0.95, 1.00),
}

# A drawing is a landscape document: cropping it to portrait cuts the title
# block off. These are fitted whole onto a paper ground instead.
FIT_TALL = {'row-permits', 'category-utilities'}

# Category images, for the rail on the emirate pages.
CATEGORY_TALL = {
    'earth-works':        (0.22, 0.06, 0.86, 1.00),
    'road-works':         (0.36, 0.00, 1.00, 1.00),
    'traffic-management': (0.16, 0.00, 0.74, 0.96),
    'utilities':          (0.00, 0.00, 1.00, 1.00),
}


def crop_to(im, box, target):
    """Largest crop of the given ratio centred on the region, clamped to frame."""
    iw, ih = im.size
    x0, y0, x1, y1 = box[0] * iw, box[1] * ih, box[2] * iw, box[3] * ih
    rw, rh = x1 - x0, y1 - y0
    cw, ch = (rw, rw / target) if rw / rh > target else (rh * target, rh)
    # a region can be a different shape to the frame, so shrink the 3:2 box
    # until it fits inside the source rather than letting it run off the edge
    scale = min(1.0, iw / cw, ih / ch)
    cw, ch = cw * scale, ch * scale
    cx, cy = (x0 + x1) / 2, (y0 + y1) / 2
    cx = min(max(cx, cw / 2), iw - cw / 2)
    cy = min(max(cy, ch / 2), ih - ch / 2)
    return im.crop((round(cx - cw / 2), round(cy - ch / 2),
                    round(cx + cw / 2), round(cy + ch / 2)))


def render(im, box, size, out, fit=False):
    w, h = size
    if fit:
        c = Image.new('RGB', (w, h), (240, 242, 245))
        inner = im.copy()
        inner.thumbnail((round(w * 0.92), round(h * 0.92)), Image.LANCZOS)
        c.paste(inner, ((w - inner.width) // 2, (h - inner.height) // 2))
    else:
        c = crop_to(im, box, w / h).resize((w, h), Image.LANCZOS)
    c = c.filter(ImageFilter.UnsharpMask(radius=1.2, percent=48, threshold=3))
    c.save(out, quality=86, optimize=True, progressive=True)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (src, box) in PLAN.items():
        path = ROOT / src
        if not path.exists():
            print(f'  skip {slug}: {src} not found')
            continue
        im = Image.open(path).convert('RGB')
        render(im, box, (W, H), OUT / f'{slug}.jpg')
        render(im, TALL.get(slug, box), (TW, TH), OUT / f'{slug}-tall.jpg',
               fit=slug in FIT_TALL)

    # the four category images, for the rail on the emirate pages
    for slug, box in CATEGORY_TALL.items():
        im = Image.open(ROOT / f'public/images/svc-{slug}.jpg').convert('RGB')
        render(im, box, (TW, TH), OUT / f'category-{slug}-tall.jpg',
               fit=f'category-{slug}' in FIT_TALL)

    print(f'wrote {len(list(OUT.glob("*.jpg")))} service images to {OUT}')


if __name__ == '__main__':
    main()
