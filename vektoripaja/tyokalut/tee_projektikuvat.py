"""Vektoripajan omat, muokattavat SVG-havainnekuvat. Ei kuvakaappauksia.

Ajo: python tyokalut/tee_projektikuvat.py
Tekstit ovat lisäksi sivun HTML:ssä. Vain sininen ja musta, kuten opiskelijan teemassa.
"""
from html import escape
import math
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / 'assets'
BLUE = '#1fa4e3'
FONT = 'Arial, sans-serif'

def text(x, y, value, size=28, bold=False, anchor='start'):
    return f'<text x="{x}" y="{y}" fill="{BLUE}" font-family="{FONT}" font-size="{size}" font-weight="{700 if bold else 400}" text-anchor="{anchor}">{escape(value)}</text>'

def svg(width, height, title, description, content):
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc">
<title id="title">{escape(title)}</title><desc id="desc">{escape(description)}</desc>
<rect width="{width}" height="{height}" fill="#000"/>
<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0 0L6 3L0 6" fill="none" stroke="{BLUE}" stroke-width="1.4"/></marker></defs>
{content}
</svg>'''

PROFILE = [(0, 60), (30, 78), (125, 90), (195, 45), (245, 42), (280, 58)]

def vase(cx, baseline, scale=1):
    # Revolve the same half-profile into a 12-sided mesh and project it.
    def point(height, radius, angle):
        return (cx + scale*radius*math.cos(angle), baseline - scale*height + scale*.30*radius*math.sin(angle))
    faces = []
    for j in range(len(PROFILE)-1):
        for k in range(12):
            a, b = k*math.tau/12, (k+1)*math.tau/12
            points = [point(*PROFILE[j],a), point(*PROFILE[j],b), point(*PROFILE[j+1],b), point(*PROFILE[j+1],a)]
            depth = math.sin((a+b)/2)
            if depth < 0: continue  # hidden back surface
            shade = int(30 + 90 * (1-abs(math.cos((a+b)/2))))
            faces.append((depth, f'<polygon points="{" ".join(f"{x:.1f},{y:.1f}" for x,y in points)}" fill="rgb(0,{shade},{int(shade*1.35)})" stroke="{BLUE}" stroke-width="1.7"/>'))
    result = ''.join(face for _,face in sorted(faces))
    h,r = PROFILE[-1]
    result += f'<ellipse cx="{cx}" cy="{baseline-scale*h}" rx="{scale*r}" ry="{scale*.30*r}" fill="#000" stroke="{BLUE}" stroke-width="2"/>'
    return result

def workflow():
    c = ''
    for x,n,title in [(18,1,'Piirrä'),(380,2,'Muodosta ja muokkaa'),(742,3,'Vie malliksi')]:
        c += f'<rect x="{x}" y="18" width="320" height="504" rx="12" fill="#000" stroke="{BLUE}" stroke-width="2"/>'
        c += f'<circle cx="{x+38}" cy="58" r="21" fill="{BLUE}"/>'
        c += f'<text x="{x+38}" y="67" fill="#000" font-family="{FONT}" font-size="27" font-weight="700" text-anchor="middle">{n}</text>'
        c += text(x+70,66,title,23,True)
    c += text(178,115,'Inkscape · SVG',25,True,'middle')
    # Profile axis and the exact radius/height curve used by the 3D mesh.
    c += f'<path d="M105 155V465" stroke="{BLUE}" stroke-width="2" stroke-dasharray="8 6"/>'
    path = 'M105 452' + ''.join(f'L{105+r} {452-h}' for h,r in PROFILE) + 'L105 172Z'
    c += f'<path d="{path}" fill="#063b55" stroke="{BLUE}" stroke-width="3"/>'
    for h,r in PROFILE:
        c += f'<rect x="{101+r}" y="{448-h}" width="8" height="8" fill="{BLUE}"/>'
    c += text(178,495,'Puoliprofiili',23,False,'middle')
    c += text(540,115,'Vektoripaja · 3D',25,True,'middle')
    c += vase(540,452)
    c += text(540,495,'Pyörähdyskappale',23,False,'middle')
    c += text(902,115,'Blender · OBJ',25,True,'middle')
    c += vase(902,452)
    c += text(902,495,'Sama malli vientitiedostossa',19,False,'middle')
    for x in [345,707]:
        c += f'<path d="M{x} 282H{x+27}" fill="none" stroke="{BLUE}" stroke-width="3" marker-end="url(#arrow)"/>'
    return svg(1080,540,'Piirroksesta 3D-malliksi',
      'Inkscapen puoliprofiili pyöräytetään Vektoripajassa särmikkääksi maljakoksi. Sama malli viedään OBJ-tiedostona Blenderiin. Havainnekuva ei ole kuvakaappaus sovelluksesta.',c)

def roadmap():
    rows = [
      ('Valmistelu','Viikot 40–41','Työkalut ja kuutioharjoitus','Opit tekemään, testaamaan ja julkaisemaan.', 'Syysloma · viikko 42'),
      ('Piirroksesta 3D-malliksi','Viikot 43–47','Tuonti → osat → muodot → muokkaus','Sovelluksen perustoiminnot syntyvät.', ''),
      ('Ensimmäinen toimiva versio','Viikot 48–51','Kiertopiste → vienti → tallennus → kokeilu','Asiakkaat kokeilevat koko työnkulkua.', 'Joululoma · viikot 52–1'),
      ('Parannukset','Viikot 2–5','Korjaukset ja sovitut jatkotoiminnot','Palaute ohjaa seuraavia muutoksia.', ''),
      ('Julkaisu ja näyttö','Viikot 6–9','Julkaisutesti → v1.0 → esittely','Toinen käyttäjä saa sovelluksen käyttöön.', 'Talviloma viikolla 8 · näyttö viikolla 9'),
    ]
    c = text(40,49,'Mitä syntyy missäkin vaiheessa?',32,True)
    for n,(title,weeks,action,why,holiday) in enumerate(rows,1):
        y = 78+(n-1)*171
        c += f'<rect x="90" y="{y}" width="752" height="152" rx="12" fill="#000" stroke="{BLUE}" stroke-width="2"/>'
        c += f'<circle cx="45" cy="{y+29}" r="24" fill="{BLUE}"/>'
        c += f'<text x="45" y="{y+39}" fill="#000" font-family="{FONT}" font-size="30" font-weight="700" text-anchor="middle">{n}</text>'
        if n < 5:
            c += f'<path d="M45 {y+60}V{y+157}" stroke="{BLUE}" stroke-width="2" marker-end="url(#arrow)"/>'
        c += text(112,y+34,title,29,True)
        c += text(820,y+34,weeks,23,False,'end')
        c += text(112,y+70,action,26)
        c += text(112,y+105,why,24)
        if holiday: c += text(112,y+135,holiday,21)
    return svg(880,940,'Vektoripajan viisi vaihetta',
      'Valmistelu viikoilla 40–41, 3D-mallin rakentaminen 43–47, ensimmäinen toimiva versio 48–51, parannukset 2–5 ja julkaisu sekä näyttö 6–9. Syysloma 42, joululoma 52–1 ja talviloma 8 ovat taukoja.',c)

if __name__ == '__main__':
    OUT.mkdir(exist_ok=True)
    (OUT/'piirroksesta-malliksi.svg').write_text(workflow(),encoding='utf-8')
    (OUT/'projektin-vaiheet.svg').write_text(roadmap(),encoding='utf-8')
    print('Created two original SVG diagrams.')
