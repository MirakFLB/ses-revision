# Génère icon.ico + favicon.png pour le site SES (icône dorée « SES »).
import sys
try:
    from PIL import Image, ImageDraw, ImageFont
except Exception as e:
    print("NO_PIL", e); sys.exit(0)

SZ = 256
img = Image.new("RGBA", (SZ, SZ), (0, 0, 0, 0))
d = ImageDraw.Draw(img)
rad = 56

# fond doré arrondi
d.rounded_rectangle([8, 8, SZ - 8, SZ - 8], radius=rad, fill=(228, 183, 101, 255))

# reflet clair en haut
hi = Image.new("RGBA", (SZ, SZ), (0, 0, 0, 0))
ImageDraw.Draw(hi).rounded_rectangle([8, 8, SZ - 8, SZ // 2], radius=rad, fill=(255, 255, 255, 45))
img = Image.alpha_composite(img, hi)
d = ImageDraw.Draw(img)

# texte SES
font = None
for path in ["C:/Windows/Fonts/arialbd.ttf", "C:/Windows/Fonts/seguisb.ttf", "C:/Windows/Fonts/segoeuib.ttf"]:
    try:
        font = ImageFont.truetype(path, 98); break
    except Exception:
        continue
if font is None:
    font = ImageFont.load_default()

txt = "SES"
bbox = d.textbbox((0, 0), txt, font=font)
w, h = bbox[2] - bbox[0], bbox[3] - bbox[1]
d.text(((SZ - w) / 2 - bbox[0], (SZ - h) / 2 - bbox[1] - 6), txt, font=font, fill=(26, 18, 6, 255))

img.save("favicon.png")
img.save("icon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])
print("OK")
