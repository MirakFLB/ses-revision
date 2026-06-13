# -*- coding: utf-8 -*-
"""Fiche PDF des définitions sourcées (9 chapitres évaluables à l'écrit).
   - page de garde + sommaire (1 colonne)
   - 1 chapitre = 1 nouvelle page : en-tête pleine largeur + définitions en 2 colonnes
   - chaque définition insécable (jamais coupée entre 2 colonnes/pages)
"""
import json, os
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer,
                                HRFlowable, KeepTogether, PageBreak, FrameBreak, NextPageTemplate)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

DATA = json.load(open("fiche_data.json", "r", encoding="utf-8"))

INK    = HexColor("#19212e"); TEXT = HexColor("#2b313b")
ACCENT = HexColor("#a9781f"); ACCENT2 = HexColor("#876018")
SOURCE = HexColor("#a59a82"); RULE = HexColor("#e6d9b6"); LIGHT = HexColor("#6a7280")

F = "C:/Windows/Fonts/"
def reg(name, file, fb="Helvetica"):
    try: pdfmetrics.registerFont(TTFont(name, F + file)); return name
    except Exception: return fb
BODY=reg("Body","arial.ttf"); BODY_B=reg("Body-B","arialbd.ttf")
BODY_I=reg("Body-I","ariali.ttf"); BODY_BI=reg("Body-BI","arialbi.ttf")
HEAD=reg("Head","georgia.ttf"); HEAD_B=reg("Head-B","georgiab.ttf")
if BODY == "Body":
    registerFontFamily("Body", normal="Body", bold=BODY_B, italic=BODY_I, boldItalic=BODY_BI)

SUBS = {ord(a): b for a, b in zip("₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹", "0123456789"*2)}
def esc(s):
    s = (s or "").translate(SUBS)
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
def src_label(s):
    if not s: return ""
    return "déf. de cours" if s.strip().lower() == "cours" else s

s_title = ParagraphStyle("t", fontName=HEAD_B, fontSize=30, leading=34, textColor=INK)
s_ey2   = ParagraphStyle("e2", fontName=BODY_B, fontSize=11, leading=15, textColor=ACCENT2, spaceBefore=2)
s_sub   = ParagraphStyle("s", fontName=BODY, fontSize=11, leading=15, textColor=LIGHT, spaceBefore=8)
s_intro = ParagraphStyle("i", fontName=BODY, fontSize=9, leading=13.5, textColor=LIGHT, spaceBefore=4)
s_somh  = ParagraphStyle("sh", fontName=HEAD_B, fontSize=13, leading=16, textColor=ACCENT, spaceBefore=22, spaceAfter=4)
s_sompt = ParagraphStyle("sp", fontName=BODY_B, fontSize=9, leading=13, textColor=ACCENT2, spaceBefore=9, spaceAfter=2)
s_somc  = ParagraphStyle("sc", fontName=BODY, fontSize=10, leading=15.5, textColor=TEXT, leftIndent=10)

s_eye   = ParagraphStyle("ey", fontName=BODY_B, fontSize=8.5, leading=11, textColor=ACCENT2)
s_chttl = ParagraphStyle("ct", fontName=HEAD_B, fontSize=17, leading=20, textColor=INK, spaceBefore=1, spaceAfter=1)
s_note  = ParagraphStyle("n", fontName=BODY, fontSize=9.6, leading=13, textColor=TEXT,
                         leftIndent=12, bulletIndent=1, spaceAfter=6,
                         bulletColor=ACCENT, bulletFontName=BODY_B, bulletFontSize=8)
s_subh  = ParagraphStyle("sub", fontName=BODY_B, fontSize=9.3, leading=12, textColor=ACCENT2,
                         spaceBefore=9, spaceAfter=4)

def notion(term, definition, source):
    src = (' <font name="%s" size=7.6 color="#a59a82"><i>· %s</i></font>'
           % (BODY, esc(src_label(source)))) if source else ""
    return Paragraph('<font name="%s" color="#19212e"><b>%s</b></font> — %s%s'
                     % (BODY_B, esc(term), esc(definition), src), s_note, bulletText="▪")

# ---------- page de garde (1 colonne) ----------
story = []
story.append(Spacer(1, 16))
story.append(Paragraph("Fiche de définitions", s_title))
story.append(Paragraph("Sciences économiques et sociales", s_ey2))
story.append(Paragraph("Les 12 chapitres du programme · Baccalauréat 2026", s_sub))
story.append(Spacer(1, 8))
story.append(HRFlowable(width="100%", thickness=1.6, color=ACCENT, spaceBefore=2, spaceAfter=8))
story.append(Paragraph(
    "Définitions concises, correctes et sourcées, qui structurent le cours. "
    "Programme officiel — BO spécial n°8 du 25 juillet 2019. Les 9 chapitres évaluables à "
    "l'écrit et les 3 chapitres « Grand Oral » (au programme mais pas à l'écrit, signalés en rouge). "
    "La source figure après chaque définition (INSEE, SES-ENS Lyon, Melchior, vie-publique, "
    "La finance pour tous, Observatoire des inégalités, Banque de France, Parlement européen…). "
    "« déf. de cours » = définition standard de manuel.", s_intro))
story.append(Paragraph("Sommaire", s_somh))
story.append(HRFlowable(width="100%", thickness=0.8, color=RULE, spaceBefore=0, spaceAfter=2))
for p in DATA["parts"]:
    story.append(Paragraph(p["name"].upper(), s_sompt))
    for c in p["chapters"]:
        tag = "" if c.get("ecrit", True) else '  <font color="#b0552b" size=8>· Grand Oral (pas à l\'écrit)</font>'
        story.append(Paragraph("Chapitre %d — %s%s" % (c["num"], esc(c["title"]), tag), s_somc))

# ---------- chapitres (en-tête pleine largeur + 2 colonnes) ----------
story.append(NextPageTemplate("two"))
story.append(PageBreak())
flat = [(p["name"], c) for p in DATA["parts"] for c in p["chapters"]]
for idx, (part, c) in enumerate(flat):
    if idx > 0:
        story.append(PageBreak())
    # en-tête (remplit le cadre du haut, pleine largeur)
    tagc = "" if c.get("ecrit", True) else '  <font color="#b0552b">· PAS À L\'ÉCRIT — GRAND ORAL</font>'
    story.append(Paragraph("%s · CHAPITRE %d%s" % (part.upper(), c["num"], tagc), s_eye))
    story.append(Paragraph(esc(c["title"]), s_chttl))
    story.append(HRFlowable(width="100%", thickness=1.2, color=ACCENT, spaceBefore=3, spaceAfter=0))
    story.append(FrameBreak())  # bascule vers la 1re colonne
    for n in c["notions"]:
        story.append(KeepTogether([notion(n["t"], n["d"], n["s"])]))
    if c["auteurs"]:
        story.append(KeepTogether([
            Paragraph("Auteurs &amp; théories à connaître", s_subh),
            notion(c["auteurs"][0]["n"], c["auteurs"][0]["d"], c["auteurs"][0].get("s", "")),
        ]))
        for a in c["auteurs"][1:]:
            story.append(KeepTogether([notion(a["n"], a["d"], a.get("s", ""))]))

# ---------- gabarits de page ----------
W, H = A4
LM = RM = 1.5*cm; TM = 1.5*cm; BM = 1.6*cm
HDR = 2.45*cm; GAP = 0.7*cm
COLW = (W - LM - RM - GAP) / 2
cols_top = H - TM - HDR - 0.25*cm
COLH = cols_top - BM

cover_frame = Frame(LM, BM, W-LM-RM, H-TM-BM, id="cover", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
hdr_frame   = Frame(LM, H-TM-HDR, W-LM-RM, HDR, id="hdr", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
colL = Frame(LM, BM, COLW, COLH, id="L", leftPadding=0, rightPadding=6, topPadding=0, bottomPadding=0)
colR = Frame(LM+COLW+GAP, BM, COLW, COLH, id="R", leftPadding=6, rightPadding=0, topPadding=0, bottomPadding=0)

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont(BODY, 7.5); canvas.setFillColor(SOURCE)
    canvas.drawString(LM, 1.05*cm, "SES — Fiche de définitions · Bac 2026")
    canvas.drawRightString(W-RM, 1.05*cm, "p. %d" % doc.page)
    canvas.setStrokeColor(RULE); canvas.setLineWidth(0.5)
    canvas.line(LM, 1.38*cm, W-RM, 1.38*cm)
    # filet vertical fin entre les colonnes (pages chapitres)
    if doc.page > 1:
        canvas.setStrokeColor(RULE); canvas.setLineWidth(0.4)
        canvas.line(LM+COLW+GAP/2, BM, LM+COLW+GAP/2, cols_top)
    canvas.restoreState()

OUT = "SES - Fiche de definitions (programme complet - 12 chapitres).pdf"
doc = BaseDocTemplate(OUT, pagesize=A4, leftMargin=LM, rightMargin=RM, topMargin=TM, bottomMargin=BM,
                      title="SES — Fiche de définitions (Bac 2026)", author="Révision SES")
doc.addPageTemplates([
    PageTemplate(id="cover", frames=[cover_frame], onPage=footer),
    PageTemplate(id="two", frames=[hdr_frame, colL, colR], onPage=footer),
])
doc.build(story)
print("OK ->", os.path.abspath(OUT))
