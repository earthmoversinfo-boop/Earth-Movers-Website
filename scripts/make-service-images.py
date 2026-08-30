#!/usr/bin/env python3
# ---------------------------------------------------------------------------
# Builds public/images/services/<slug>.jpg — one hero image per service page.
#
# The company's photo library is smaller than the number of service pages, so
# each image is a distinct 3:2 crop of the most relevant source photograph
# rather than the whole frame. Where two services share a source they are given
# different crop windows, so the pages do not read as duplicates.
#
# `crop` is the region of interest as fractions of the source (x0, y0, x1, y1);
# the largest 3:2 box that fits inside it and stays on the frame is taken.
#
# Run with:  python3 scripts/make-service-images.py   (needs Pillow)
# ---------------------------------------------------------------------------

from pathlib import Path
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'public' / 'images' / 'services'
W, H = 1400, 933

L = 'public/images/library'

# slug -> (source, region of interest)
PLAN = {
    # Earth Works
    'excavation':                  ('public/images/svc-earth-works.jpg', (0.18, 0.10, 0.95, 1.00)),
    'back-filling':                (f'{L}/operator-backhoe.jpg',         (0.00, 0.00, 1.00, 1.00)),
    'cut-and-fill':                ('1.jpg',                             (0.10, 0.10, 0.90, 1.00)),
    'leveling':                    ('public/images/hero-slide-1.jpg',    (0.30, 0.00, 1.00, 1.00)),
    'compaction':                  ('public/images/hero-slide-3.jpg',    (0.28, 0.00, 1.00, 1.00)),

    # Road Works
    'access-roads':                ('public/images/hero-slide-1.jpg',    (0.00, 0.00, 0.62, 1.00)),
    'road-base-laying':            ('public/images/fleet.jpg',           (0.00, 0.00, 1.00, 1.00)),
    'asphalt-works':               ('public/images/svc-road-works.jpg',  (0.22, 0.00, 1.00, 1.00)),
    'road-maintenance':            ('public/images/svc-road-works.jpg',  (0.00, 0.10, 0.60, 1.00)),
    'asphalt-patch-works':         ('public/images/project-fujairah.jpg',(0.00, 0.20, 0.66, 1.00)),
    'parkings':                    ('public/images/hero-slide-3.jpg',    (0.00, 0.05, 0.66, 1.00)),
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


def crop_3x2(im, box):
    """Largest 3:2 crop centred on the region of interest, clamped to the frame."""
    iw, ih = im.size
    x0, y0, x1, y1 = box[0] * iw, box[1] * ih, box[2] * iw, box[3] * ih
    rw, rh = x1 - x0, y1 - y0
    target = W / H
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


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (src, box) in PLAN.items():
        path = ROOT / src
        if not path.exists():
            print(f'  skip {slug}: {src} not found')
            continue
        im = Image.open(path).convert('RGB')
        im = crop_3x2(im, box).resize((W, H), Image.LANCZOS)
        im = im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=48, threshold=3))
        im.save(OUT / f'{slug}.jpg', quality=86, optimize=True, progressive=True)
    print(f'wrote {len(list(OUT.glob("*.jpg")))} service images to {OUT}')


if __name__ == '__main__':
    main()
