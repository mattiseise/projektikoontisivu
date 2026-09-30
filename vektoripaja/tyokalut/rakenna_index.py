# -*- coding: utf-8 -*-
"""Vektoripajan index.html. Viikkojen tehtävät = 01-runko-v3.md § 8 lyhyiksi virkkeiksi pilkottuna."""
import json, os, subprocess
from html import escape

HERE = os.path.dirname(os.path.abspath(__file__))

# sykli / help / excerpt / paivat luetaan sisalto.js:stä, ettei kortti ja data eroa
info = json.loads(subprocess.check_output(["node", "-e", r'''
global.window={};eval(require("fs").readFileSync(process.argv[1],"utf8"));const N=window.NAYTTOPROJEKTI;
const o={};for(const [w,g] of Object.entries(N.viikkoOhjeet)) o[w]={sykli:!!g.sykli,help:!!g.help,paivat:!!g.paivat,connection:g.connection,feature:g.feature,skills:g.skills,extra:g.lisatehtavat||[],phases:N.vaiheet};
console.log(JSON.stringify(o));''', os.path.join(HERE, "..", "sisalto.js")]).decode("utf8"))

VAIHE = {v: (str(n), phase["lyhyt"])
         for n, phase in enumerate(info["40"]["phases"], 1)
         for v in phase["viikot"]}

PVM = {40: "28.9.–2.10.", 41: "5.–9.10.", 42: "12.–16.10.", 43: "19.–23.10.", 44: "26.–30.10.", 45: "2.–6.11.",
       46: "9.–13.11.", 47: "16.–20.11.", 48: "23.–27.11.", 49: "30.11.–4.12.", 50: "7.–11.12.", 51: "14.–17.12.",
       52: "21.–25.12.", 53: "28.12.–1.1.", 1: "4.–8.1.", 2: "11.–15.1.", 3: "18.–22.1.", 4: "25.–29.1.",
       5: "1.–5.2.", 6: "8.–12.2.", 7: "15.–19.2.", 8: "22.–26.2.", 9: "1.–5.3."}

LOMAT = {
    42: ("Syysloma", "Ei projektityötä eikä korvaavia tehtäviä. Jatka viikolla 43 tilatiedoston Seuraavana-kohdasta."),
    52: ("Joululoma", "Joululoma alkaa pe 18.12. Ei projektityötä eikä korvaavia tehtäviä."),
    53: ("Joululoma", "Joululoma jatkuu. Ei projektityötä eikä korvaavia tehtäviä."),
    1: ("Joululoma", "Joululoma päättyy su 10.1. Jatka ma 11.1. viikolla 2 tilatiedoston Seuraavana-kohdasta."),
    8: ("Talviloma", "Ei projektityötä eikä korvaavia tehtäviä. Jatka viikolla 9 näytön valmistelulla."),
}


VIIKOT = {
    40: ('Aloitus: työkalut ja projektin rajaus', ['Valmistele työkalut', 'Perusta projektin repository', 'Rajaa ensimmäinen versio', 'Mittaa agentin krediittikulutus'], 'repositoryn osoite, <code>project-docs/suunnitelma.md</code> GitHubissa ja agenttipyynnön hinta päiväkirjassa.'),
    41: ('Harjoitus: pyörivä kuutio julki', ['Valmistele harjoitussovellus', 'Määrittele kuution testi', 'Rakenna pyörivä kuutio', 'Julkaise harjoitussovellus'], 'releasen v0.0.41 osoite, issuet #1 ja #2 suljettuina sekä testien 1 ja 2 tulokset issueissa.'),
    43: ('Piirroksen tuonti (SVG)', ['Piirrä tuonnin testiaineisto', 'Määrittele tuonnin testit', 'Suunnittele sovelluksen rakenne', 'Rakenna SVG-tuonti', 'Tarkista ja julkaise tuonti'], 'oma SVG-tiedosto, testit 3–5 issueissa, <code>project-docs/kirjastot.md</code> ja release v0.0.43.'),
    44: ('Piirroksen ryhmistä mallin osiksi', ['Määrittele osien rakenteen testit', 'Rakenna osien hierarkia', 'Päätä osan valinnan toiminta', 'Valmistele seuraava mallinnustoiminto'], 'rajapinta, testit 6–8 ja maailmamuunnoksen lisätesti issueissa, hierarkiapaneeli releasessa v0.0.44 ja valinnan päätös suunnitelmassa.'),
    45: ('Profiilista pyörähdyskappale (revolve)', ['Sovi pyörähdyskappaleen toiminta', 'Määrittele pyörähdyskappaleen testit', 'Rakenna ja julkaise pyörähdyskappale'], 'testit 9–11 issueissa, pyörähdyskappale releasessa v0.0.45 ja sovittu valintatapa issue-kommenttina.'),
    46: ('Viivasta putki ja mallin näkymät', ['Määrittele putken ja kameran testit', 'Rakenna viivasta putki', 'Rakenna suorat näkymät'], 'testit 12–14 issueissa, putki ja suorat näkymät releasessa v0.0.46 ja putkigeometrian rajoitteet <code>kirjastot.md</code>:ssä.'),
    47: ('Osien siirto, kierto ja skaalaus', ['Määrittele osien muokkaamisen testi', 'Rakenna osien muokkaaminen', 'Tarkista ja julkaise muokkaaminen'], 'testi 15 issuessa, transformit releasessa v0.0.47 ja pakollisen ytimen tilanne palaverin issue-kommentissa.'),
    48: ('Kiertopisteen säätäminen (pivot)', ['Määrittele kiertopisteen testit', 'Rakenna kiertopisteen laskenta', 'Lisää kiertopisteen säätimet'], 'rajapinta ja testit 16–18 issueissa sekä pivotin kentät releasessa v0.0.48.'),
    49: ('Mallin vienti Blenderiin (OBJ)', ['Määrittele viennin testit', 'Rakenna OBJ-vienti', 'Kokeile mallia Blenderissä', 'Dokumentoi korjaus ja julkaise'], 'testit 19–20 issueissa, viety .obj-tiedosto, kuva Blenderistä ja virheenkorjausketju 1 havaintoissuessa.'),
    50: ('Tallennus ja ensimmäinen toimiva versio', ['Valitse tallennustapa', 'Määrittele tallennuksen testit', 'Rakenna tallennus ja avaus', 'Julkaise ensimmäinen toimiva versio'], 'tallennusvertailu suunnitelmassa, testit 21–22 issueissa, <code>project-docs/tietoturva.md</code> ja release v0.1.'),
    51: ('Asiakkaat kokeilevat ensimmäistä versiota', ['Valmistele asiakkaiden kokeilu', 'Kerää asiakkaiden palaute', 'Muuta havainnot tehtäviksi', 'Kirjaa loman jälkeinen jatko'], '<code>project-docs/katselmointi.md</code>, havaintoissuet prioriteetteineen ja tilatiedoston Seuraavana-kohta.'),
    2: ('Paluu ja parannusten järjestys', ['Varmista aiemman version toiminta', 'Sovi parannusten järjestys', 'Tee ensimmäinen korjaus'], 'testiajon tulos päiväkirjassa, tärkeän jatkon järjestys issueissa ja korjauksen commit.'),
    3: ('Muokatun piirroksen päivittäminen', ['Sovi osien tunnistaminen', 'Määrittele päivityksen testi', 'Rakenna piirroksen päivitys'], 'testi 23 issuessa ja yhdistetty pull request.'),
    4: ('Puutteet ja sovitut parannukset', ['Tarkista perustoimintojen puutteet', 'Määrittele seuraavan toiminnon testi', 'Toteuta sovittu parannus'], 'testi 24 issuessa, valmis toiminto päähaarassa ja virheenkorjausketju 2 havaintoissuessa.'),
    5: ('Selkeät säätimet ja näppäimistökäyttö', ['Mittaa saavutettavuus', 'Määrittele käyttöliittymän testit', 'Paranna säätimien käyttöä', 'Tarkista muutosten vaikutus'], 'FastPassin tulokset ennen ja jälkeen, testit 25–26 issueissa ja korjausten commitit.'),
    6: ('Julkaisun kokeilu toisella koneella', ['Valmistele julkaisuehdokas', 'Kirjoita käyttäjän ohje', 'Kokeile julkaisua toisella koneella'], 'tagi v1.0-rc1, README ja käyttöohje sekä <code>project-docs/julkaisutesti.md</code>.'),
    7: ('Valmis sovellus v1.0', ['Korjaa julkaisun esteet', 'Julkaise valmis sovellus', 'Kokoa työnäytteiden linkit'], 'tagi v1.0, virheenkorjausketju 3, asiakkaiden vahvistus ja linkitetty näyttömatriisi.'),
    9: ('Projektin esittely ja luovutus', ['Tarkista luovutettava aineisto', 'Harjoittele projektin esittely', 'Arvioi ja luovuta työsi'], 'demo, linkitetty näyttömatriisi ja itsearvioinnin lähetyspäivä päiväkirjassa.'),
}

HELP_SMALL = {41: "mallikortti, kansiorakenne ja julkaisu"}
JARJESTYS = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 1, 2, 3, 4, 5, 6, 7, 8, 9]


def eyebrow(w):
    t, l = VAIHE[w]
    return f'<p class="view-eyebrow" data-week-label="{PVM[w]}">Vaihe {t} · {l} · Viikko {w} · {PVM[w]}</p>'


def phase_path(w):
    phases = info["40"]["phases"]
    links = []
    for n, phase in enumerate(phases, 1):
        current = ' aria-current="step"' if w in phase["viikot"] else ''
        links.append(f'<a href="#week-{phase["viikot"][0]}" data-open-week="{phase["viikot"][0]}"{current}>{n}. {escape(phase["lyhyt"])}</a>')
    return '<nav class="project-phase-path" aria-label="Projektin vaiheet">' + ''.join(links) + '</nav>'


def project_connection(w):
    if w in LOMAT:
        return phase_path(w)
    i = info[str(w)]
    return "\n".join([
        phase_path(w),
        f'          <section class="card project-connection" aria-labelledby="week-{w}-project-connection">',
        f'            <h2 class="section-label" id="week-{w}-project-connection">Miten tämän viikon asiat liittyvät kokonaisprojektiin</h2>',
        f'            <p>{escape(i["connection"])}</p>',
        '            <h2 class="section-label project-week-goal">Viikon tavoite</h2>',
        f'            <p>{escape(i["feature"])}</p>',
        '          </section>'])


def week_card(w):
    otsikko, tehtavat, nayta = VIIKOT[w]
    i = info[str(w)]
    out = [f'        <article class="week-card" id="week-{w}" data-week="{w}">',
           f'          {eyebrow(w)}',
           f'          <h1 class="view-title">{otsikko}</h1>',
           project_connection(w),
           '']
    out += ['          <section class="view-section">',
            f'            <div class="section-heading-row"><h2>Viikon työvaiheet</h2><span class="week-status" data-week-status>0 / {len(tehtavat)}</span></div>',
            '            <div class="task-list">']
    for n, t in enumerate(tehtavat, 1):
        out.append(f'            <label class="task-row"><input type="checkbox" data-task="{w}-{n}"><span class="task-box" aria-hidden="true"></span><span class="task-text">{t}</span></label>')
    out += ['            </div>',
            '          </section>',
            '',
            '          <section class="view-section lesson-instructions">',
            '            <div class="section-heading-row"><h2>Näin etenet</h2><span class="lesson-label" data-lesson-label>tee järjestyksessä</span></div>',
            '            <nav class="resource-actions" data-week-resources hidden aria-label="Tämän viikon pohjat"></nav>',
            '            <ol data-lesson-list></ol>',
            '          </section>']
    if i["sykli"]:
        out += ['          <details class="view-section week-workflow">',
                '            <summary>Työsykli GitHub-issuen tekemiseen</summary>',
                '            <p>Käytä tätä, kun tehtäväkortti pyytää toteuttamaan muutoksen työsyklillä. Yksi kierros on yksi GitHub-issue.</p>',
                '            <section data-week-cycle hidden></section>',
                '          </details>']
    if i["extra"]:
        out += ['          <details class="view-section">', '<summary>Lisätehtävä, jos viikon tavoite on valmis</summary>', '<ol>']
        for title, text in i["extra"]:
            out.append(f'<li><strong>{escape(title)}</strong> {text}</li>')
        out += ['</ol>', '</details>']
    if i["help"]:
        small = HELP_SMALL.get(w, "avaa, jos jäät jumiin – kokeile ensin itse")
        out += ['',
                '          <details class="impl-help" data-week-help hidden>',
                f'            <summary><span data-help-title>Tarvitsen toteutusapua</span><small>{small}</small></summary>',
                '            <div class="impl-help-content" data-help-content></div>',
                '          </details>']
    if i["paivat"]:
        out += ['',
                '          <div class="day-rhythm" data-week-days hidden>',
                '            <p class="section-label">Viikon päivärytmi</p>',
                '            <div class="day-grid" data-day-grid></div>',
                '          </div>']
    out += ['',
            '          <section class="card view-section week-finish">',
            '            <h2>Viikon lopputarkistus</h2>',
            '            <h3>Toiminta on tarkistettu, kun</h3><p class="checkpoint"></p>',
            f'            <h3>Työnäyte talteen</h3><p class="evidence">{nayta}</p>',
            '          </section>',
            '          <details class="view-section">',
            '            <summary>Mitä osaamista viikon työ osoittaa?</summary>',
            '            <div class="week-skills" data-week-skills hidden>',
            '              <p class="skill-tags-label" data-skills-label>Viikon osaaminen</p>',
            '              <ul class="skill-tags" data-skills-list></ul>',
            '            </div>',
            '          </details>',
            '',
            f'          <section class="week-journal" data-week-journal="{w}">',
            '            <div class="journal-heading">',
            '              <h2>Viikon projektipäiväkirja</h2>',
            '              <div class="journal-actions-top">',
            '                <button class="button button-secondary button-pill" type="button" data-open-view="ailoki">+ Kirjaa AI-apu</button>',
            '                <button class="button button-secondary button-pill" type="button" data-open-view="paivakirja">Koko päiväkirja →</button>',
            '              </div>',
            '            </div>',
            '            <p class="journal-lead">Vastaa viikon lopussa kolmeen kysymykseen. Kentät tallentuvat vain tähän selaimeen.</p>',
            '            <p class="journal-record" data-journal-record></p>',
            '            <div class="journal-fields">',
            '              <label><span>Mitä tein ja miten?</span><textarea rows="3" data-journal-field="work"></textarea></label>',
            '              <label><span>Miksi tein näin?</span><textarea rows="2" data-journal-field="reason"></textarea></label>',
            '              <label><span>Missä työnäyte on? Kirjoita myös näyttömatriisin vaatimus, esimerkiksi versionhallinta.</span><input type="text" data-journal-field="evidence"></label>',
            '            </div>',
            '            <span data-journal-status>Ei vielä kirjattu</span>',
            '          </section>',
            '',
            '          <nav class="week-pager" data-week-pager aria-label="Siirtyminen viikkojen välillä"></nav>',
            '        </article>']
    return "\n".join(out)


def holiday_card(w):
    otsikko, teksti = LOMAT[w]
    return "\n".join([f'        <article class="holiday-card" id="week-{w}" data-week="{w}">',
                      f'          {eyebrow(w)}',
                      f'          <h1 class="view-title">{otsikko}</h1>',
                      project_connection(w),
                      f'          <p>{teksti}</p>',
                      '        </article>'])


viikkokortit = "\n\n".join(holiday_card(w) if w in LOMAT else week_card(w) for w in JARJESTYS)
tehtavia = sum(len(v[1]) for v in VIIKOT.values())

# ---- näyttömatriisi: nimet ePerusteista (00-vaatimukset-eperusteet.txt), työnäyte tästä projektista ----
MATRIISI = [
    ("Ohjelmointi", [
        ("Opiskelija käyttää ohjelmistokehitysympäristöä", [
            ("p1", "käyttää ohjelmointieditoria tai kehitysympäristöä", "VS Code, GitHub Copilot, Pythonin virtuaaliympäristö ja pytest käytössä viikoilta 40 ja 41. Versiot README:ssä. Paluuviikon ajo viikolla 2."),
            ("p2", "etsii ja korjaa virheitä ohjelmakoodista", "Kolme virheenkorjausketjua havaintoissueista viikoilla 49, 4 ja 7: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti."),
            ("p3", "testaa ohjelman toimintoja", "Testit 1–26 ja lisätestit viikoilta 41, 43–50 ja 3–5, myös maailmamuunnoksen lisätesti (44). Kirjoitat odotetun tuloksen itse testikoodiin ennen toteutusta. Tulokset issueissa.")]),
        ("Opiskelija ohjelmoi", [
            ("p4", "käyttää rakenteista ohjelmointia toteutuksissa", "Kolme funktiota selityspohjalla: hierarkian muunnos (viikko 44), pivotin syötteen tarkistus (48) ja OBJ-objektijako (49). Lisäksi maailmamuunnos puhtaana funktiona (44). Rajapinta ennen toteutusta. Selitys ääneen seuraavan viikon palaverissa."),
            ("p6", "tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia", "Hierarkiapaneeli (44), view lock (46), transformipaneeli (47–48) sekä isot kahvat ja näppäimistökäyttö (5) käyttöliittymävaatimuksesi mukaan. Accessibility Insights ennen ja jälkeen."),
            ("p7", "tulkitsee suunnitelmia ja toteuttaa ohjelmiston toimintoja", "MVP-kuvauksesta tehtäväkortit ja toiminnot: tuonti (43), revolve (45), inflate (46) ja transformit (47) hyväksymiskriteerien mukaan.")]),
        ("Opiskelija toimii ohjelmistokehitystiimin jäsenenä", [
            ("p8", "sopii tehtävistä tiimin muiden jäsenten kanssa", "Issue-kommentit \"Sovittu viikkopalaverissa pp.kk.\" joka viikolta 41–7."),
            ("p9", "etsii ratkaisuvaihtoehtoja ja ratkoo ongelmia yhdessä tiimin kanssa", "Revolven valintatavan vertailu ja yhteinen päätös (44–45). Osien tunnistustapa Päivitä SVG -toimintoon (3)."),
            ("p10", "arvioi ratkaisujen toimivuuden yhdessä tiimin kanssa", "Katselmointi asiakkaiden kanssa (51). Palaverin arvio MVP:n ratkaisuista tärkeää jatkoa varten (2)."),
            ("p11", "arvioi omaa toimintaa tiimin jäsenenä", "Itsearviointi kolmesta tilanteesta viikolla 9. Se lähetetään ohjaajalle Teamsissa. Päiväkirjaan kirjataan vain tilanteiden päivät ja issue-numerot.")]),
    ], ("p5", "kirjoittaa ylläpidettävää ohjelmakoodia")),
    ("Ohjelmistokehittäjänä toimiminen", [
        ("Opiskelija kommunikoi asiakkaan kanssa", [
            ("s1", "selvittää kehitystiimin kanssa asiakkaan tarpeet", "Kysymyslista asiakkaille (40). Vastaukset tiedostossa <code>project-docs/kysymykset.md</code> (41). MVP omin sanoin."),
            ("s2", "viestii tekniset asiat asiakaslähtöisesti", "Viiden minuutin demo katselmoinnissa (51). README ja käyttöohje käyttäjälle (6)."),
            ("s3", "osallistuu version katselmointiin", "<code>project-docs/katselmointi.md</code>: asiakkaiden sanat, oma tulkinta ja sovitut muutokset (51).")]),
        ("Opiskelija suunnittelee ohjelmiston toteutuksen", [
            ("s4", "asettaa kehitystiimin kanssa toteutettavat toiminnot tärkeysjärjestykseen", "Karsinta pakolliseen ytimeen, tärkeään jatkoon ja jatkolistaan perusteluineen (40). Asiakkaiden prioriteetit (51). Tärkeän jatkon järjestys palaverissa (2)."),
            ("s5", "jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi", "Tehtäväkortit hyväksymiskriteereineen viikolta 41 alkaen. Oma rajausehdotus ja tarkistusrivi issueissa."),
            ("s6", "suunnittelee ja arvioi kehitystiimin kanssa tehtävien toteuttamista", "Kaistan valinta ja toteuman vertailu Raportoi-askeleessa. Krediittimittaus (40). Tärkeän jatkon tuntiarviot (2).")]),
        ("Opiskelija kehittää ohjelmiston toimintalogiikkaa ja tietovarastoyhteyksiä", [
            ("s7", "kehittää ohjelmiston toimintalogiikkaa", "Hierarkia, revolve, inflate, transformit ja pivot (44–48) sekä Päivitä SVG (3)."),
            ("s8", "valitsee ohjelmistoon sopivan tietovaraston", "Tallennustapojen vertailu oman suunnitelman kriteereillä ja oman mallin JSON-tiedoston koko (50)."),
            ("s9", "toteuttaa yhteyden tietovarastoon", "Tallennus ja avaus valitulla tallennusmuodolla. Versionumero ja rakenteen tarkistus (50)."),
            ("s10", "hyödyntää rajapintoja ja käsittelee tietoa", "Tiedoston avaus QFileDialogilla ja SVG:n luku svgelementsillä (43), .obj-vienti trimeshillä (49) ja JSON (50)."),
            ("s11", "arvioi ohjelmiston tietoturvaa", "Testi 4: haitallinen SVG (43). Testi 22: rikottu tallennus (50). Tietoturva-arvio <code>project-docs/tietoturva.md</code>: uhka, testi, tulos ja toimenpide.")]),
        ("Opiskelija versioi ja julkaisee ohjelman", [
            ("s12", "käyttää versionhallintaa", "Commitit rivillä <code>Closes #N</code> koko projektin ajan. Tagit: harjoitus v0.0.41, viikkoversiot v0.0.43–v0.0.49, v0.1, v1.0-rc1 ja v1.0."),
            ("s13", "liittää ohjelman osan olemassa olevaan versioon", "Päivitä SVG omassa haarassa, pull request ja merge päähaaraan, kun kaikki testit menevät läpi (3)."),
            ("s14", "julkaisee ohjelman tuotantoympäristöön", "Release GitHub Actionsilla: Windows-versio, itsetesti ja zip. Harjoitus (41), viikkoversiot (43–49), MVP v0.1 (50) ja v1.0 (7).")]),
    ], None),
    ("Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla", [
        ("Opiskelija käyttää kehitysympäristöä", [
            ("k1", "ottaa käyttöön ja konfiguroi ohjelmistokomponenttikirjaston käyttöön soveltuvan kehittämisympäristön", "PySide6 + PyVista + trimesh + pytest -pohja omin komennoin: virtuaaliympäristö, kirjastojen asennus ja <code>tarkista_ymparisto.py</code> (41)."),
            ("k2", "selvittää ohjelmistokomponenttikirjaston tarjoamat mahdollisuudet ja rajoitteet", "<code>project-docs/kirjastot.md</code>: svgelementsin (43) ja putkigeometrian (46) rajoitteet omilla tiedostoilla kokeiltuina."),
            ("k3", "käyttää ohjelmistokomponenttikirjaston tärkeimpiä toimintoja ja työkaluja", "trimeshin revolve, PyVistan tube-suodatin, kamera ja orientaatiowidget sekä Qt:n transformipaneeli (45–48)."),
            ("k4", "tuo kehittämisympäristöön ulkoisia komponentteja", "pip-paketit omin komennoin ja <code>requirements.txt</code> (41).")]),
        ("Opiskelija toteuttaa ohjelmiston ohjelmistokomponenttikirjastolla", [
            ("k5", "suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen", "MVP v0.1 komponenttikirjastolla testeineen (43–50)."),
            ("k6", "julkaisee ohjelmiston asiakkaan ympäristöön", "MVP-release asiakkaiden kokeiltavaksi (50). Antti vahvistaa v1.0-releasen omalla Windows-koneellaan, Matti demon tai opiskelijan koneen kautta (7)."),
            ("k7", "dokumentoi ohjelmiston sovitulla tavalla", "Dokumentointitapa sovittu palaverissa (43). README ja käyttöohje, joiden avulla julkaisutestaaja kulkee koko polun (6).")]),
    ], None),
]


def matriisi():
    osat = []
    for i, (nimi, ryhmat, muulla) in enumerate(MATRIISI):
        rivit = []
        maara = 0
        for ryhma, vaatimukset in ryhmat:
            rivit.append(f'            <p class="matrix-group">{ryhma}</p>')
            for tunnus, vnimi, nayte in vaatimukset:
                maara += 1
                rivit.append(f'            <label class="matrix-row"><input type="checkbox" data-evidence="{tunnus}"><span><strong>{vnimi}</strong> {nayte}</span></label>')
                if muulla and tunnus == "p4":
                    rivit.append(f'            <p class="footnote">Vaatimus <strong>{muulla[1]}</strong> osoitetaan tässä näytössä muulla tavalla. Tästä ei ole rastia. Ohjaaja sopii tavan kanssasi.</p>')
        auki = " open" if i == 0 else ""
        osat.append("\n".join([f'        <details class="matrix"{auki}>',
                               f'          <summary><span class="matrix-title">{nimi}</span><span class="matrix-count">{maara} vaatimusta</span></summary>',
                               '          <div class="matrix-list">'] + rivit + ['          </div>', '        </details>']))
    return "\n\n".join(osat)


VAATIMUKSIA = sum(len(v) for _, r, _ in MATRIISI for _, v in r)

tpl = open(os.path.join(HERE, "index.runko.html"), encoding="utf-8").read()
html = (tpl.replace("%%VIIKKOKORTIT%%", viikkokortit)
           .replace("%%MATRIISI%%", matriisi())
           .replace("%%VAATIMUKSIA%%", str(VAATIMUKSIA)))
assert "%%" not in html
open(os.path.join(HERE, "..", "index.html"), "w", encoding="utf-8", newline="\n").write(html)
print("tehtäviä", tehtavia, "· vaatimuksia", VAATIMUKSIA, "· viikkoja", len(VIIKOT))
