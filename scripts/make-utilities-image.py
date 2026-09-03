#!/usr/bin/env python3
# ---------------------------------------------------------------------------
# Builds public/images/svc-utilities.jpg — the image behind the Utilities tile.
#
# It is a drawing sheet rather than a site photograph, because the Utilities
# services (ROW permits, NOC, RTA service protection) are permit-and-drawing
# work. The two source crops in assets/originals/ come from one of the
# company's own RTA-approved submissions:
#
#   shop-drawing-titleblock.png  the title block, EMI named as Road Contractor
#   rta-approval-stamp.png       the RTA ROW permit stamp, ROWPS-26052025-5166
#
# The Earth Movers logo is the prominent element; the RTA stamp sits small and
# angled beneath it, the way an approval is stamped onto a sheet.
#
# Run with:  python3 scripts/make-utilities-image.py   (needs Pillow)
# ---------------------------------------------------------------------------

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
ORIG = ROOT / "assets" / "originals"
OUT = ROOT / "public" / "images" / "svc-utilities.jpg"

W, H = 1600, 1066
PAD = 30                                  # desk showing around the sheet

DESK       = (223, 228, 234)
PAPER      = (253, 254, 255)
GRID       = (235, 240, 245)
GRID_MAJOR = (223, 231, 238)
FRAME_OUT  = (186, 195, 204)
FRAME_IN   = (138, 149, 160)
INK        = (58, 63, 70)
MUTED      = (146, 153, 161)
GOLD       = (237, 166, 58)

SANS = "/usr/share/fonts/truetype/liberation/LiberationSans-%s.ttf"

# --- desk, then the sheet lying on it with a soft shadow -------------------
base = Image.new("RGB", (W, H), DESK)

shadow = Image.new("L", (W, H), 0)
ImageDraw.Draw(shadow).rectangle([PAD + 3, PAD + 6, W - PAD + 3, H - PAD + 8], fill=120)
base.paste(Image.new("RGB", (W, H), (150, 158, 167)), (0, 0),
           shadow.filter(ImageFilter.GaussianBlur(9)))

sx0, sy0, sx1, sy1 = PAD, PAD, W - PAD - 1, H - PAD - 1
sheet_w, sheet_h = sx1 - sx0 + 1, sy1 - sy0 + 1
sheet = Image.new("RGB", (sheet_w, sheet_h), PAPER)
d = ImageDraw.Draw(sheet)

for x in range(0, sheet_w, 32):
    d.line([(x, 0), (x, sheet_h)], fill=GRID_MAJOR if x % 160 == 0 else GRID, width=1)
for y in range(0, sheet_h, 32):
    d.line([(0, y), (sheet_w, y)], fill=GRID_MAJOR if y % 160 == 0 else GRID, width=1)

# drawing sheet frame
d.rectangle([0, 0, sheet_w - 1, sheet_h - 1], outline=FRAME_OUT, width=2)
d.rectangle([16, 16, sheet_w - 17, sheet_h - 17], outline=FRAME_IN, width=3)

# --- title block, full frame height on the right --------------------------
tb = Image.open(ORIG / "shop-drawing-titleblock.png").convert("RGB")
tb_h = sheet_h - 36
tb_w = round(tb.width * tb_h / tb.height)
tb = tb.resize((tb_w, tb_h), Image.LANCZOS)
tb_x = sheet_w - 18 - tb_w
sheet.paste(tb, (tb_x, 18))
d.rectangle([tb_x, 18, tb_x + tb_w - 1, 18 + tb_h - 1], outline=FRAME_IN, width=2)

mcx = (18 + tb_x - 2) // 2


def tracked(draw, cx, y, text, font, fill, track):
    """Centred text with letter spacing, which Pillow has no setting for."""
    widths = [draw.textlength(ch, font=font) for ch in text]
    x = cx - (sum(widths) + track * (len(text) - 1)) / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + track


# --- Earth Movers logo: the prominent element, pasted at native size ------
logo = Image.open(ROOT / "public" / "images" / "logo.png").convert("RGBA")
ly = 196
sheet.paste(logo, (mcx - logo.width // 2, ly), logo)

ry = ly + logo.height + 42
d.line([(mcx - 120, ry), (mcx + 120, ry)], fill=GOLD, width=4)
tracked(d, mcx, ry + 24, "ROW PERMITS  ·  NOC  ·  SERVICE PROTECTION",
        ImageFont.truetype(SANS % "Bold", 25), INK, 3.0)

# --- RTA approval stamp: small, angled, ink only so it rides on the sheet --
stamp = Image.open(ORIG / "rta-approval-stamp.png").convert("RGB")
sw = 358
stamp = stamp.resize((sw, round(stamp.height * sw / stamp.width)), Image.LANCZOS)

mask = stamp.convert("L").point(lambda v: 0 if v > 234 else min(255, int((234 - v) * 3.4)))
mask = mask.filter(ImageFilter.GaussianBlur(0.4))
ink = Image.new("RGBA", stamp.size)
ink.paste(stamp, (0, 0))
ink.putalpha(mask)
ink = ink.rotate(-5.0, resample=Image.BICUBIC, expand=True)
ink.putalpha(ink.getchannel("A").point(lambda v: int(v * 0.94)))

sy = ry + 92
sheet.paste(ink, (mcx - ink.width // 2, sy), ink)

tracked(d, mcx, sy + ink.height + 22, "APPROVED BY ROADS & TRANSPORT AUTHORITY — DUBAI",
        ImageFont.truetype(SANS % "Regular", 21), MUTED, 1.5)

base.paste(sheet, (sx0, sy0))
base = base.filter(ImageFilter.UnsharpMask(radius=1.0, percent=45, threshold=3))
base.save(OUT, quality=92, subsampling=0, optimize=True)
print(f"wrote {OUT} {base.size}")
