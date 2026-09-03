#!/usr/bin/env python3
# ---------------------------------------------------------------------------
# Builds the /projects photo album from the company's own job photographs in
# assets/originals/projects/.
#
# Unlike the service imagery, these are not cropped to a house ratio: the album
# is a masonry grid, so each frame keeps its own shape and the page reads like
# a site record rather than a stock set. Two sizes come out of each source —
# a small one for the grid and a larger one the lightbox loads on demand.
#
# TRIM removes a watermark or a photographer's shadow from the few frames that
# carry one; PUNCH lifts the frames shot through haze so the album reads as one
# camera rather than several.
#
# Run with:  python3 scripts/make-project-images.py   (needs Pillow)
# ---------------------------------------------------------------------------

from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / 'assets' / 'originals' / 'projects'
OUT = ROOT / 'public' / 'images' / 'projects'

GRID = 680        # longest side of the grid image
FULL = 1100       # longest side of the image the lightbox loads

# name -> (left, top, right, bottom) as fractions, for frames that carry a
# camera watermark or the photographer's own shadow along one edge
TRIM = {
    'res-paver-close':     (0.00, 0.00, 1.00, 0.91),   # date/place stamp
    'res-patch-strip':     (0.00, 0.00, 1.00, 0.93),   # shadow in the corner
    'res-crossing-dusk':   (0.00, 0.04, 1.00, 1.00),
}

# name -> (contrast, colour) for the hazy frames
PUNCH = {
    'fuj-aggregate-windrow': (1.14, 1.22),
    'fuj-roadbase-plant':    (1.16, 1.26),
    'fuj-stone-pitching-crew': (1.14, 1.24),
    'fuj-channel-curve':     (1.10, 1.16),
    'fuj-asphalt-strip':     (1.10, 1.18),
    'res-roller-mat':        (1.08, 1.14),
    'res-rollers-pair':      (1.08, 1.14),
    'res-roller-train':      (1.06, 1.12),
    'res-carriageway':       (1.10, 1.18),
}


def resize(im, longest):
    w, h = im.size
    s = longest / max(w, h)
    if s >= 1:
        return im.copy()
    return im.resize((max(1, round(w * s)), max(1, round(h * s))), Image.LANCZOS)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    sources = sorted(SRC.glob('*.jpg'))
    if not sources:
        print(f'  nothing in {SRC}')
        return

    for path in sources:
        name = path.stem
        im = Image.open(path).convert('RGB')
        if name in TRIM:
            w, h = im.size
            x0, y0, x1, y1 = TRIM[name]
            im = im.crop((round(x0 * w), round(y0 * h), round(x1 * w), round(y1 * h)))
        if name in PUNCH:
            contrast, colour = PUNCH[name]
            im = ImageEnhance.Contrast(im).enhance(contrast)
            im = ImageEnhance.Color(im).enhance(colour)

        for longest, suffix, quality in ((GRID, '', 76), (FULL, '-full', 75)):
            out = resize(im, longest)
            # the grid image is shown small, so it needs the edge back that the
            # downscale took off; the lightbox image is near native size and
            # sharpening it only adds artefacts and bytes
            if not suffix:
                out = out.filter(ImageFilter.UnsharpMask(radius=1.1, percent=44, threshold=3))
            out.save(OUT / f'{name}{suffix}.jpg', quality=quality, optimize=True, progressive=True)

    total = sum(f.stat().st_size for f in OUT.glob('*.jpg'))
    print(f'  {len(sources)} photographs -> {len(list(OUT.glob("*.jpg")))} files, '
          f'{total / 1_048_576:.1f} MB')


if __name__ == '__main__':
    main()
