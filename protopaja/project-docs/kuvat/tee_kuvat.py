#!/usr/bin/env python3
"""ProtoPajan omat luonnoskuvat.

Tekee viikkokorttien tavoitekuvat assets/viikot/viikko-NN.svg ja tavoitekuvan proton
project-docs/lopputulos/proto.html. Kuvat ovat luonnoksia tavoitellusta toiminnasta, eivät
kuvakaappauksia opiskelijoiden peleistä. Jokaisessa on LUONNOS-merkki.

Ajo projektikansiossa:  python3 project-docs/kuvat/tee_kuvat.py
Tavoitekuvan jpg:  bash <skilli>/scripts/lopputulos_kuva.sh project-docs/lopputulos/proto.html assets/lopputulos.jpg
"""
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parents[2]
FONT = "Arial, Helvetica, sans-serif"
MONO = "Menlo, Consolas, monospace"
INK, MUTED, LINE, PAPER, SOFT = "#1f1d1a", "#5f5a52", "#cfc8bc", "#ffffff", "#f4f1ec"
ACC, ACC_SOFT = "#be185d", "#fce7f3"
SKY, GRASS, STONE, GOLD, RED, BLUE, GREEN = "#dbeafe", "#4d7c0f", "#78716c", "#ca8a04", "#dc2626", "#2563eb", "#15803d"


def t(x, y, s, size=18, fill=INK, anchor="start", weight="normal", font=FONT):
    return f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}">{escape(s)}</text>'


def r(x, y, w, h, fill=PAPER, stroke=LINE, rx=8, sw=2, extra=""):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" {extra}/>'


def arrow(x1, y1, x2, y2, color=INK, dash=False, sw=3):
    d = ' stroke-dasharray="7 6"' if dash else ""
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}"{d} marker-end="url(#nuoli)"/>'


def button(x, y, w, label, primary=False):
    fill, col = (ACC, "#fff") if primary else (PAPER, INK)
    return r(x, y, w, 36, fill, ACC, 8) + t(x + w / 2, y + 24, label, 16, col, "middle", "bold")


def player(x, y, s=34):
    return (r(x, y, s, s, ACC, "#831843", 6) + f'<circle cx="{x + s * .35}" cy="{y + s * .38}" r="{s * .09}" fill="#fff"/>'
            f'<circle cx="{x + s * .68}" cy="{y + s * .38}" r="{s * .09}" fill="#fff"/>')


def flag(x, y):
    return (f'<line x1="{x}" y1="{y}" x2="{x}" y2="{y + 70}" stroke="{INK}" stroke-width="4"/>'
            f'<path d="M{x} {y} l42 13 l-42 13 z" fill="{GREEN}"/>')


def star(cx, cy, rr=11, fill=GOLD):
    import math
    pts = []
    for i in range(10):
        ang = -math.pi / 2 + i * math.pi / 5
        rad = rr if i % 2 == 0 else rr * .45
        pts.append(f"{cx + rad * math.cos(ang):.1f},{cy + rad * math.sin(ang):.1f}")
    return f'<polygon points="{" ".join(pts)}" fill="{fill}" stroke="#854d0e" stroke-width="1.5"/>'


def spikes(x, y, n=3):
    return "".join(f'<path d="M{x + i * 22} {y} l11 -20 l11 20 z" fill="{STONE}" stroke="{INK}" stroke-width="1.5"/>' for i in range(n))


def enemy(cx, cy, flash=False):
    out = f'<circle cx="{cx}" cy="{cy}" r="17" fill="#7c3aed" stroke="#3b0764" stroke-width="2"/>'
    out += f'<circle cx="{cx - 6}" cy="{cy - 4}" r="3" fill="#fff"/><circle cx="{cx + 6}" cy="{cy - 4}" r="3" fill="#fff"/>'
    if flash:
        out += f'<circle cx="{cx}" cy="{cy}" r="27" fill="none" stroke="{GOLD}" stroke-width="4" stroke-dasharray="5 5"/>'
    return out


def window(x, y, w, h, title, body_fill=SKY):
    return (r(x, y, w, h, PAPER, INK, 10) + f'<path d="M{x} {y + 10} q0 -10 10 -10 h{w - 20} q10 0 10 10 v24 h-{w} z" fill="{SOFT}" stroke="{INK}" stroke-width="2"/>'
            + t(x + 14, y + 23, title, 15, INK, weight="bold") + r(x + 8, y + 42, w - 16, h - 50, body_fill, "none", 4, 0))


def tag_luonnos(W):
    return r(W - 128, 14, 112, 30, ACC_SOFT, ACC, 15) + t(W - 72, 35, "LUONNOS", 15, ACC, "middle", "bold")


def svg(W, H, body, heading):
    defs = (f'<defs><marker id="nuoli" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
            f'<path d="M0 0 L10 5 L0 10 z" fill="{INK}"/></marker></defs>')
    head = t(20, 35, heading, 17, MUTED, weight="bold")
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" role="img">'
            f'{defs}<rect width="{W}" height="{H}" fill="{PAPER}"/>{head}{tag_luonnos(W)}{body}</svg>\n')


# ---------------- viikkokuvat 880×420 ----------------
W, H = 880, 420
K = {}

K[1] = (window(30, 70, 380, 290, "Unity · oma scene · Game", "#93c5fd")
        + '<g transform="rotate(25 215 215)">' + r(170, 170, 90, 90, RED, "#7f1d1d", 4) + '</g>'
        + '<path d="M300 150 A 105 105 0 0 1 320 260" fill="none" stroke="#1f1d1a" stroke-width="3" marker-end="url(#nuoli)"/>'
        + r(52, 300, 336, 34, PAPER, INK, 17) + t(220, 323, "välilyönti kääntää suunnan", 16, INK, "middle", "bold")
        + r(470, 70, 380, 290, PAPER, INK, 10) + t(490, 103, "GitHub · Commits", 18, INK, weight="bold")
        + r(490, 125, 340, 82, SOFT) + t(506, 158, "Lähtötasokokeilu: oma scene", 18) + t(506, 186, "uusin commit", 16, MUTED)
        + r(490, 222, 340, 82, SOFT) + t(506, 255, "Kokeiluprojekti ja .gitignore", 18) + t(506, 283, "ensimmäinen commit", 16, MUTED)
        + t(445, 395, "Kloonattu kopio aukeaa, ja oma scene toimii Play-tilassa", 16, MUTED, "middle"))

def peli_kortti(x, nimi):
    return (r(x, 62, 250, 150, PAPER, INK, 10) + t(x + 16, 92, nimi, 18, ACC, weight="bold")
            + t(x + 16, 124, "Päämekaniikka: …", 16) + t(x + 16, 152, "Tavoite: …", 16) + t(x + 16, 180, "Pienin toimiva versio: …", 16))
kortit = [("1. Liike", "2 h"), ("2. Hyppy", "2 h"), ("3. Maali", "1 h"), ("4. Alkuvalikko", "2 h"), ("5. Loppuruutu", "1 h")]
tab = r(30, 232, 820, 172, SOFT, LINE, 8) + t(48, 262, "Tehtävätaulu · Tulossa: ensimmäisen pelin kortit tärkeysjärjestyksessä", 17, INK, weight="bold")
for j, (nimi, arvio) in enumerate(kortit):
    x = 48 + j * 160
    tab += r(x, 282, 148, 100, PAPER, ACC, 6) + t(x + 12, 312, nimi, 16, INK, weight="bold") + t(x + 12, 340, "valmis kun: …", 14, MUTED) + t(x + 12, 366, "arvio " + arvio, 15, ACC, weight="bold")
K[2] = peli_kortti(30, "Peli 1") + peli_kortti(315, "Peli 2") + peli_kortti(600, "Peli 3") + tab

K[3] = (window(110, 60, 660, 320, "Tasohyppely · kokeiluversio (build)") + r(118, 330, 644, 42, GRASS, "none", 0, 0)
        + r(330, 280, 70, 50, STONE, INK, 4) + r(560, 250, 70, 80, STONE, INK, 4)
        + player(240, 296) + f'<path d="M257 296 Q 300 170 360 250" fill="none" stroke="{ACC}" stroke-width="3" stroke-dasharray="7 6"/>'
        + r(620, 110, 130, 34, PAPER, INK, 17) + t(685, 133, "ei editoria", 16, INK, "middle", "bold")
        + t(440, 405, "Koottu versio käynnistyy ilman Unity-editoria.", 16, MUTED, "middle"))

K[4] = (r(30, 60, 820, 330, SKY, LINE, 10) + r(30, 340, 820, 50, GRASS, "none", 0, 0) + r(330, 260, 140, 18, STONE, INK, 4)
        + spikes(250, 340) + star(400, 238) + star(560, 300) + flag(760, 270) + player(90, 306)
        + f'<path d="M107 306 Q 200 230 300 300 Q 380 200 470 250 Q 620 330 750 300" fill="none" stroke="{ACC}" stroke-width="3" stroke-dasharray="7 6"/>'
        + r(300, 110, 300, 90, PAPER, INK, 12) + t(450, 150, "Maali!", 30, ACC, "middle", "bold") + t(450, 182, "Kierros päättyi", 18, INK, "middle"))

def ruutu(x, otsikko):
    return r(x, 70, 240, 250, PAPER, INK, 10) + t(x + 120, 102, otsikko, 18, INK, "middle", "bold")
K[5] = (ruutu(30, "Alkuvalikko") + t(150, 140, "Tähtijahti", 22, ACC, "middle", "bold") + button(90, 160, 120, "Aloita", True)
        + t(150, 230, "Nuolet: liiku", 16, MUTED, "middle") + t(150, 254, "Välilyönti: hyppää", 16, MUTED, "middle") + t(150, 278, "Kerää 5 tähteä", 16, MUTED, "middle")
        + ruutu(320, "Peli") + r(328, 112, 224, 200, SKY, "none", 4, 0) + t(340, 136, "Kerätty 3 / 5", 17, INK, weight="bold")
        + player(380, 230) + star(470, 210) + f'<circle cx="470" cy="210" r="24" fill="none" stroke="{GOLD}" stroke-width="3" stroke-dasharray="4 4"/>'
        + ruutu(610, "Loppuruutu") + t(730, 150, "Maali!", 24, ACC, "middle", "bold") + button(650, 180, 160, "Uudelleen", True) + button(650, 230, 160, "Alkuvalikkoon")
        + arrow(272, 195, 316, 195) + arrow(562, 195, 606, 195)
        + f'<path d="M730 324 Q 730 395 450 395 Q 150 395 150 330" fill="none" stroke="{INK}" stroke-width="3" stroke-dasharray="7 6" marker-end="url(#nuoli)"/>'
        + t(450, 385, "Uudelleen tai takaisin alkuvalikkoon", 16, MUTED, "middle"))

K[6] = (window(30, 70, 250, 200, "Kokeiluversio v0.1") + player(130, 190) + flag(220, 160)
        + t(155, 300, "Asiakas pelaa ilman neuvoja", 16, MUTED, "middle")
        + r(310, 70, 290, 310, "#fffbeb", "#d6c79e", 6) + t(330, 102, "Palautekirjaus", 18, INK, weight="bold")
        + t(330, 136, "Asiakkaan sanat:", 16, MUTED) + t(330, 164, "”Maaliin tulo on niin", 17) + t(330, 188, "nopea, etten ehtinyt", 17) + t(330, 212, "nähdä, mitä tapahtui.”", 17)
        + f'<line x1="330" y1="234" x2="580" y2="234" stroke="{LINE}" stroke-width="2"/>'
        + t(330, 262, "Oma tulkinta:", 16, MUTED) + t(330, 290, "Loppuruutu näkyy", 17) + t(330, 314, "vähintään 3 s.", 17)
        + r(630, 70, 220, 310, SOFT, LINE, 8) + t(646, 102, "Tulossa", 18, INK, weight="bold")
        + r(646, 120, 188, 70, PAPER, ACC, 6) + t(660, 150, "Loppuruutu 3 s", 16) + t(660, 176, "lähde: palaute", 15, MUTED)
        + r(646, 205, 188, 70, PAPER, ACC, 6) + t(660, 235, "Ohje näkyviin", 16) + t(660, 261, "lähde: palaute", 15, MUTED)
        + arrow(604, 290, 640, 240))

grid = ["#####", "#P.B#", "#.B.#", "#T.T#", "#####"]
def kentta(x0, y0, s, solved=False, blocked=False):
    out = ""
    for yy, row in enumerate(grid):
        for xx, ch in enumerate(row):
            X, Y = x0 + xx * s, y0 + yy * s
            out += r(X, Y, s, s, STONE if ch == "#" else "#f5f5f4", "#a8a29e", 0, 1)
            if ch == "T":
                out += f'<circle cx="{X + s / 2}" cy="{Y + s / 2}" r="{s * .28}" fill="none" stroke="{GREEN}" stroke-width="4"/>'
    boxes = [(1, 3), (3, 3)] if solved else [(3, 1), (1, 3)]
    for bx, by in boxes:
        out += r(x0 + bx * s + 6, y0 + by * s + 6, s - 12, s - 12, "#b45309", "#78350f", 4, 2)
    out += player(x0 + (2 if solved else 1) * s + 8, y0 + (2 if solved else 1) * s + 8, s - 16)
    return out
K[7] = (r(30, 70, 250, 270, "#111827", "none", 8, 0) + "".join(t(70, 125 + i * 44, row, 30, "#e5e7eb", font=MONO) for i, row in enumerate(grid))
        + t(155, 365, "kentta.txt", 16, MUTED, "middle") + arrow(292, 205, 360, 205)
        + kentta(380, 70, 54) + f'<path d="M{380 + 3 * 54 + 27} {70 + 54 + 27} l40 0" stroke="{RED}" stroke-width="4" marker-end="url(#nuoli)"/>'
        + t(700, 115, "✕ estynyt siirto", 17, RED, weight="bold") + t(700, 145, "laatikko ei mene", 16, MUTED) + t(700, 167, "seinän läpi", 16, MUTED)
        + t(515, 375, "Yhden merkin muutos tiedostossa muuttaa kentän.", 16, MUTED, "middle"))

K[8] = (kentta(40, 70, 48) + r(40, 330, 240, 40, SOFT, LINE, 8) + t(160, 356, "R = palauta alkutilanne", 16, INK, "middle", "bold")
        + f'<path d="M300 200 Q 360 130 420 200" fill="none" stroke="{INK}" stroke-width="3" marker-end="url(#nuoli)"/>' + t(360, 120, "palautus datasta", 16, MUTED, "middle")
        + kentta(460, 70, 48, solved=True) + r(470, 150, 262, 120, PAPER, INK, 12) + t(601, 190, "Ratkaistu!", 26, ACC, "middle", "bold")
        + button(480, 210, 105, "Uudelleen") + button(592, 210, 132, "Alkuvalikkoon") + t(600, 395, "Valikko on sama prefab kuin ensimmäisessä pelissä.", 16, MUTED, "middle"))

steps = ["Havainto", "Toistamisohje", "Syy", "Korjauscommit", "Uusintatesti", "Regressiotesti"]
chain = ""
for i, s in enumerate(steps):
    x = 30 + (i % 3) * 200
    y = 80 if i < 3 else 210
    chain += r(x, y, 170, 70, ACC_SOFT if s == "Uusintatesti" else PAPER, ACC, 8) + t(x + 85, y + 42, s, 17, INK, "middle", "bold")
    if i in (0, 1, 3, 4):
        chain += arrow(x + 172, y + 35, x + 196, y + 35)
chain += f'<path d="M455 152 Q 455 180 115 190 L115 206" fill="none" stroke="{INK}" stroke-width="3" marker-end="url(#nuoli)"/>'
chain += t(315, 302, "✓ läpi", 18, GREEN, "middle", "bold")
K[9] = (chain + r(650, 70, 200, 300, SOFT, LINE, 8) + t(666, 100, "Vertaisarvio", 18, INK, weight="bold")
        + r(666, 120, 168, 56, PAPER, RED, 6) + t(678, 146, "Estävä: pelaaja", 15, RED, weight="bold") + t(678, 166, "laatikon päällä", 15)
        + r(666, 190, 168, 56, PAPER, LINE, 6) + t(678, 216, "Muu virhe", 15, INK, weight="bold") + t(678, 236, "ohje puuttuu", 15)
        + r(666, 260, 168, 56, PAPER, LINE, 6) + t(678, 286, "Parannus: laatikot", 15, INK, weight="bold") + t(678, 306, "erottuvat huonosti", 15)
        + t(340, 400, "Korjaat virheen ketjuna.", 16, MUTED, "middle"))

K[10] = (f'<circle cx="300" cy="225" r="160" fill="#e7e5e4" stroke="{INK}" stroke-width="3"/>' + player(283, 208)
         + f'<path d="M320 190 A 50 50 0 0 1 340 245" fill="none" stroke="{GOLD}" stroke-width="7"/>'
         + enemy(400, 160, flash=True) + enemy(200, 300) + enemy(410, 320) + arrow(195, 285, 270, 245, MUTED, True) + arrow(400, 305, 330, 250, MUTED, True)
         + r(560, 90, 290, 190, "#111827", "none", 8, 0) + t(580, 125, "EnemySettings", 18, "#f9a8d4", font=MONO)
         + t(580, 165, "speed = 2", 18, "#e5e7eb", font=MONO) + t(580, 200, "spawnInterval = 3", 18, "#e5e7eb", font=MONO) + t(580, 235, "hitPoints = 1", 18, "#e5e7eb", font=MONO)
         + t(705, 320, "Asetus datasta: muutos näkyy", 16, MUTED, "middle") + t(705, 344, "seuraavalla käynnistyksellä.", 16, MUTED, "middle"))

def loppu(x, otsikko, voitto):
    out = r(x, 70, 390, 300, "#e7e5e4", INK, 10)
    if voitto:
        out += r(x + 20, 88, 110, 36, PAPER, INK, 6) + t(x + 75, 113, "0:00", 20, INK, "middle", "bold")
    else:
        out += r(x + 20, 92, 200, 24, PAPER, INK, 4) + t(x + 232, 111, "kestävyys 0", 16, MUTED)
    return (out + r(x + 70, 150, 250, 170, PAPER, INK, 12) + t(x + 195, 205, otsikko, 30, ACC if voitto else RED, "middle", "bold")
            + button(x + 90, 235, 210, "Uudelleen", True) + button(x + 90, 278, 210, "Alkuvalikkoon"))
K[11] = loppu(30, "Selvisit!", True) + loppu(460, "Hävisit", False) + t(440, 400, "Kierros päättyy vain kerran: voittoon tai häviöön.", 16, MUTED, "middle")

def mini(x, nimi, sitaatti):
    return (r(x, 62, 250, 150, SKY, INK, 8) + t(x + 14, 88, nimi, 17, INK, weight="bold")
            + r(x, 220, 250, 58, "#fffbeb", "#d6c79e", 6) + t(x + 12, 254, sitaatti, 15))
K[12] = (mini(30, "Tasohyppely", "”Maali tulee liian nopeasti.”") + player(110, 150) + flag(220, 120)
         + mini(315, "Pulmapeli", "”Palautus on tärkein.”") + kentta(390, 100, 20)
         + mini(600, "Toimintapeli", "”Ajastin isommaksi.”") + enemy(700, 150) + player(650, 150, 26)
         + r(30, 296, 520, 112, SOFT, LINE, 8) + t(46, 322, "Korjataan työviikolla 13", 17, INK, weight="bold")
         + "".join(r(46 + i * 165, 336, 150, 56, PAPER, ACC, 6) + t(58 + i * 165, 362, f"{i + 1}. korjaus", 15, INK, weight="bold") + t(58 + i * 165, 382, f"arvio {(1, 2, 1)[i]} h", 14, MUTED) for i in range(3))
         + r(570, 296, 280, 112, SOFT, LINE, 8) + t(586, 322, "Tiedossa olevat puutteet", 17, INK, weight="bold") + t(586, 352, "• toinen vihollistyyppi", 15) + t(586, 376, "• lisää kenttiä", 15))

hdr = ["Testitapaus", "Peli", "Odotettu tulos", "Havaittu", "Uusintatesti"]
xs = [40, 190, 300, 600, 720]
K[13] = (r(30, 70, 820, 300, PAPER, INK, 8) + r(30, 70, 820, 44, SOFT, INK, 8)
         + "".join(t(x, 99, h, 16, INK, weight="bold") for x, h in zip(xs, hdr))
         + t(40, 150, "T21", 17, font=MONO) + t(190, 150, "taso", 17) + t(300, 150, "Loppuruutu näkyy 3 s", 16) + t(600, 150, "✕ 1 s", 17, RED, weight="bold") + t(720, 150, "✓ läpi", 17, GREEN, weight="bold")
         + t(40, 200, "T22", 17, font=MONO) + t(190, 200, "pulma", 17) + t(300, 200, "R palauttaa laatikot", 16) + t(600, 200, "✓", 17, GREEN, weight="bold") + t(720, 200, "–", 17, MUTED)
         + t(40, 250, "T23", 17, font=MONO) + t(190, 250, "taso", 17) + t(300, 250, "Peruskierros alusta loppuun", 16) + t(600, 250, "✓", 17, GREEN, weight="bold") + t(720, 250, "regressio", 15, MUTED)
         + t(440, 400, "Odotettu tulos kirjataan ennen korjausta. Uusintatesti ajetaan korjauksen jälkeen.", 16, MUTED, "middle"))

ck = ["käynnistys", "ohjausohje", "päämekaniikka", "palaute", "päättyminen", "uudelleenaloitus", "paluu valikkoon"]
K[14] = ("".join(window(30, 65 + i * 112, 300, 100, n + " (build)", "#e7e5e4") + t(180, 145 + i * 112, "kierros 10 / 10", 16, INK, "middle", "bold")
                 for i, n in enumerate(["Tasohyppely", "Pulmapeli", "Toimintapeli"]))
         + r(380, 65, 470, 325, SOFT, LINE, 8) + t(400, 97, "Jokaisesta pelistä seitsemän perustestiä", 17, INK, weight="bold")
         + "".join(t(410, 132 + i * 36, "✓", 19, GREEN, weight="bold") + t(440, 132 + i * 36, c, 17) for i, c in enumerate(ck)))

ohje = ["## Kierroksen kesto", "1. Avaa scene Areena.", "2. Valitse Hierarchy-", "   ikkunasta RoundTimer.", "3. Muuta Inspector-ikkunassa", "   kentän Round Length arvoa.", "4. Paina Play."]
K[15] = (r(30, 70, 420, 280, "#111827", "none", 8, 0) + "".join(t(48, 106 + i * 36, line, 15, "#f9a8d4" if i == 0 else "#e5e7eb", font=MONO) for i, line in enumerate(ohje))
         + arrow(462, 210, 512, 210) + r(520, 70, 330, 280, PAPER, INK, 8) + r(520, 70, 330, 40, SOFT, INK, 8) + t(536, 97, "Inspector · RoundTimer", 16, INK, weight="bold")
         + t(536, 150, "Round Length", 16) + r(700, 128, 130, 34, ACC_SOFT, ACC, 4) + t(716, 151, "60", 16, ACC, weight="bold")
         + t(536, 200, "Round Manager", 16) + r(700, 178, 130, 34, PAPER, LINE, 4) + t(716, 201, "RoundManager", 14)
         + t(685, 310, "Arvo on sekunteina.", 15, MUTED, "middle")
         + t(440, 390, "Ohjeen avulla asetus löytyy ja muuttuu alle minuutissa.", 17, MUTED, "middle"))

K[16] = (r(30, 80, 250, 170, "#e7e5e4", INK, 10) + r(110, 250, 90, 14, STONE, "none", 2, 0)
         + f'<circle cx="155" cy="320" r="26" fill="#a8a29e"/><path d="M110 395 q45 -60 90 0" fill="#a8a29e"/>'
         + r(42, 92, 226, 30, SOFT, LINE, 4) + t(54, 113, "Inspector · RoundTimer", 14, INK, weight="bold")
         + t(54, 160, "Round Length", 15) + r(54, 172, 200, 34, ACC_SOFT, ACC, 4) + t(66, 195, "60 → 30", 16, ACC, weight="bold")
         + t(155, 235, "puhdas klooni · v0.9", 14, MUTED, "middle")
         + r(320, 70, 260, 320, "#fffbeb", "#d6c79e", 6) + t(340, 102, "Kirjallinen ohje", 18, INK, weight="bold")
         + t(340, 140, "1. Avaa Unity Hub.", 16) + t(340, 172, "2. Valitse Add ja kansio.", 16) + r(332, 186, 236, 36, "#fee2e2", RED, 4) + t(340, 210, "3. Avaa valikko.", 16, RED, weight="bold")
         + t(340, 248, "4. Paina Play.", 16) + f'<circle cx="590" cy="204" r="18" fill="{RED}"/>' + t(590, 211, "?", 20, "#fff", "middle", "bold")
         + r(620, 130, 230, 120, PAPER, INK, 10) + t(636, 160, "Testaaja:", 15, MUTED) + t(636, 186, "”En tiennyt, mikä", 16) + t(636, 210, "näistä on valikko.”", 16)
         + r(620, 270, 230, 110, ACC_SOFT, ACC, 8) + t(636, 298, "Korjattu ohje:", 15, ACC, weight="bold") + t(636, 324, "3. Avaa scene", 16) + t(636, 348, "Scenes/Valikko.", 16, font=MONO))

tree = ["luovutus-v1.0/", "├─ Tasohyppely-Windows-v1.0.zip", "├─ Pulmapeli-Windows-v1.0.zip", "├─ Toimintapeli-Windows-v1.0.zip", "├─ Unity-projektit/", "└─ docs/  (3 ohjetta)"]
lista = ["pelattavat versiot", "Unity-projektit", "Unity-versio", "jatkotyöstöohje", "assetit ja lisenssit", "testit ja puutteet"]
K[17] = (r(30, 70, 440, 300, "#111827", "none", 8, 0) + "".join(t(52, 112 + i * 40, line, 16, "#e5e7eb", font=MONO) for i, line in enumerate(tree))
         + r(500, 70, 350, 300, SOFT, LINE, 8) + t(516, 98, "Luovutuslista", 18, INK, weight="bold")
         + "".join(t(522, 130 + i * 30, "✓", 18, GREEN, weight="bold") + t(548, 130 + i * 30, c, 16) for i, c in enumerate(lista))
         + r(30, 382, 160, 30, ACC_SOFT, ACC, 15) + t(110, 403, "tag v1.0", 16, ACC, "middle", "bold"))

def esittely(x, kuka, metodi, testi):
    return (r(x, 62, 400, 270, PAPER, INK, 10) + t(x + 20, 94, kuka, 20, ACC, weight="bold")
            + r(x + 20, 112, 360, 70, "#111827", "none", 6, 0) + t(x + 34, 142, "// oma ratkaisu", 15, "#9ca3af", font=MONO) + t(x + 34, 168, metodi, 16, "#fbcfe8", font=MONO)
            + r(x + 20, 196, 360, 40, SOFT, LINE, 6) + t(x + 34, 222, testi, 16)
            + r(x + 20, 248, 360, 64, SOFT, LINE, 6) + t(x + 34, 274, "Näyttömatriisin rivi:", 15, MUTED) + t(x + 34, 298, "täsmälinkki omaan committiin", 16))
matriisi = [("p3 testaus", "testitapaus T21"), ("s13 osan liittäminen", "merge-commit"), ("k6 julkaisu", "tag v1.0"), ("p11 oma toiminta", "itsearviointi")]
K[18] = (esittely(30, "Oma ratkaisu", "void EndRound(bool won)", "testitapaus T21: loppuruutu")
         + r(450, 62, 400, 270, SOFT, LINE, 10) + t(470, 94, "Oma näyttömatriisi", 20, ACC, weight="bold")
         + "".join(t(470, 140 + i * 46, a, 16, INK, weight="bold") + t(680, 140 + i * 46, "→ " + b, 15, MUTED) for i, (a, b) in enumerate(matriisi))
         + r(170, 350, 540, 46, ACC_SOFT, ACC, 10) + t(440, 380, "✓ Ohjaajan pyytämä muutos toimii Play-tilassa", 17, ACC, "middle", "bold"))

OTSIKOT = {1: "Ensimmäinen oma muutos", 2: "Suunnitelma ja ensimmäisen pelin kortit", 3: "Kokeiluversio ilman editoria", 4: "Pelattava kierros", 5: "Valikot, uudelleenaloitus ja palaute",
           6: "Asiakaskokeilu", 7: "Kenttä datasta ja päämekaniikka", 8: "Ratkaisu ja palautus", 9: "Vertaisarvio ja virheenkorjausketju", 10: "Pelaaja, vihollinen ja asetukset datasta",
           11: "Selviytyminen tai häviö", 12: "Asiakaskatselmointi", 13: "Korjaukset ja uusintatestit", 14: "Kootut peliversiot testattuina", 15: "Asetus löytyy ohjeen avulla",
           16: "Vastaanottotesti", 17: "Luovutuspaketti", 18: "Oman osaamisen esittely"}

out = ROOT / "assets" / "viikot"
out.mkdir(parents=True, exist_ok=True)
for w, body in K.items():
    (out / f"viikko-{w:02d}.svg").write_text(svg(W, H, body, f"Työviikko {w}: {OTSIKOT[w]}"), encoding="utf-8")

# ---------------- tavoitekuvan proto 1120×700 ----------------
PW, PH = 1120, 700
px = [24.6, 385.3, 745.9]
def paneeli(x, nimi, sisalto, alateksti):
    return (r(x, 108, 349, 395, SKY, INK, 10) + r(x, 108, 349, 40, PAPER, INK, 10) + t(x + 16, 135, nimi, 19, INK, weight="bold") + sisalto
            + r(x + 10, 455, 329, 40, PAPER, LINE, 6) + t(x + 174, 481, alateksti, 16, INK, "middle"))
taso = (r(px[0] + 2, 400, 345, 50, GRASS, "none", 0, 0) + spikes(px[0] + 150, 400) + star(px[0] + 120, 300) + star(px[0] + 210, 260) + flag(px[0] + 290, 330)
        + player(px[0] + 50, 366) + f'<path d="M{px[0] + 67} 366 Q {px[0] + 150} 270 {px[0] + 240} 360" fill="none" stroke="{ACC}" stroke-width="3" stroke-dasharray="7 6"/>'
        + t(px[0] + 20, 175, "Kerätty 3 / 5", 17, INK, weight="bold"))
pulma = kentta(px[1] + 52, 175, 49) + t(px[1] + 20, 175, "", 1)
toim = (f'<circle cx="{px[2] + 175}" cy="300" r="130" fill="#e7e5e4" stroke="{INK}" stroke-width="3"/>' + player(px[2] + 158, 283)
        + enemy(px[2] + 110, 220) + enemy(px[2] + 255, 260, flash=True) + enemy(px[2] + 140, 380) + r(px[2] + 260, 160, 76, 34, PAPER, INK, 6) + t(px[2] + 298, 184, "0:42", 19, INK, "middle", "bold"))
def chips(items, x, y):
    out = ""
    for e in items:
        w = len(e) * 8.6 + 30
        out += r(x, y, w, 40, PAPER, ACC, 20) + t(x + w / 2, y + 25, e, 15, INK, "middle")
        x += w + 10
    return out


ev = ["Unity Hub → Add", "Assets/Scenes", "Assets/Scripts", "asetukset Inspectorissa", "Unity-versio README:ssä"]
proto_svg = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {PW} {PH}" width="{PW}" height="{PH}">'
             f'<defs><marker id="nuoli" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{INK}"/></marker></defs>'
             f'<rect width="{PW}" height="{PH}" fill="#faf8f5"/>'
             + t(24, 50, "ProtoPaja · kolme prototyyppiä pelimusiikin kurssille", 28, INK, weight="bold")
             + t(24, 84, "Luonnos tavoitellusta kokonaisuudesta. Ei kuvakaappaus opiskelijoiden peleistä.", 18, MUTED)
             + r(PW - 150, 30, 126, 34, ACC_SOFT, ACC, 17) + t(PW - 87, 53, "LUONNOS", 17, ACC, "middle", "bold")
             + paneeli(px[0], "Tasohyppely", taso, "Maali päättää kierroksen")
             + paneeli(px[1], "Pulmapeli", pulma, "R palauttaa alkutilanteen")
             + paneeli(px[2], "Toimintapeli", toim, "Selviä 60 sekuntia")
             + r(24.6, 509, 1070.8, 50, PAPER, INK, 10)
             + "".join(button(60 + i * 360, 516, 130, "Uudelleen", True) + button(200 + i * 360, 516, 150, "Alkuvalikkoon") for i in range(3))
             + r(24.6, 575, 1070.8, 105, "#fffbeb", "#d6c79e", 10) + t(44, 605, "Jatkotyöstöohje musiikkikurssille: miten projekti avataan ja mistä scenet, skriptit ja asetukset löytyvät", 18, INK, weight="bold")
             + chips(ev, 44, 622)
             + '</svg>')
proto = f"""<!doctype html>
<html lang="fi"><head><meta charset="utf-8"><title>ProtoPaja – tavoitekuvan luonnos</title>
<style>html,body{{margin:0;background:#faf8f5}} svg{{display:block}}</style></head>
<body>
<!-- Generoitu: project-docs/kuvat/tee_kuvat.py. Luonnos, ei kuvakaappaus opiskelijoiden peleistä. -->
{proto_svg}
</body></html>
"""
(ROOT / "project-docs" / "lopputulos").mkdir(parents=True, exist_ok=True)
(ROOT / "project-docs" / "lopputulos" / "proto.html").write_text(proto, encoding="utf-8")
print("Kuvat:", len(K), "viikkokuvaa ja tavoitekuvan proto")
