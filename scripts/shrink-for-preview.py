#!/usr/bin/env python3
"""Downscale a tree of images for the single-file preview bundle.

Called by scripts/bundle-preview.mjs. The deployed site always serves the
originals from public/images — this only keeps the shareable preview, which
carries every photograph inline as base64, inside a single page's size budget.

Usage: shrink-for-preview.py <src dir> <dest dir> <max width>
"""

import sys
from pathlib import Path
from PIL import Image

src, dest, max_w = Path(sys.argv[1]), Path(sys.argv[2]), int(sys.argv[3])

for f in src.rglob('*'):
    if f.suffix.lower() not in {'.jpg', '.jpeg', '.png'}:
        continue
    out = dest / f.relative_to(src)
    out.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(f)
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
    if f.suffix.lower() == '.png':
        im.save(out, optimize=True)
    else:
        im.convert('RGB').save(out, quality=76, optimize=True, progressive=True)
