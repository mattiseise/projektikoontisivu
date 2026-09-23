# -*- coding: utf-8 -*-
"""Vektoripajan index.html. Viikkojen tehtävät = 01-runko-v3.md § 8 lyhyiksi virkkeiksi pilkottuna."""
import json, os, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))

# sykli / help / excerpt / paivat luetaan sisalto.js:stä, ettei kortti ja data eroa
info = json.loads(subprocess.check_output(["node", "-e", r'''
global.window={};eval(require("fs").readFileSync(process.argv[1],"utf8"));const N=window.NAYTTOPROJEKTI;
const o={};for(const [w,g] of Object.entries(N.viikkoOhjeet)) o[w]={sykli:!!g.sykli,help:!!g.help,excerpt:!!g.excerpt,paivat:!!g.paivat};
console.log(JSON.stringify(o));''', os.path.join(HERE, "..", "sisalto.js")]).decode("utf8"))

VAIHE = {}
for tunnus, lyhyt, viikot in [("A", "Työkalut", [40, 41, 42]), ("B", "MVP-ydin", [43, 44, 45, 46, 47]),
                              ("C", "MVP valmiiksi", [48, 49, 50, 51, 52, 53, 1]), ("D", "Jatkokehitys", [2, 3, 4, 5]),
                              ("E", "Julkaisu ja näyttö", [6, 7, 8, 9])]:
    for v in viikot:
        VAIHE[v] = (tunnus, lyhyt)

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
    40: ("Aloitus: työkalut, repository ja oma MVP", [
        "Asenna VS Code, Git, Node.js, Inkscape ja Blender. Vaihda VS Codeen ja GitHubiin korkean kontrastin teema.",
        "Luo julkinen repository README-tiedoston kanssa. Kloonaa se VS Codeen. Jaa se ohjaajalle.",
        "Kirjoita MVP omin sanoin tiedostoon <code>project-docs/mvp.md</code>. Tee commit ja push. Lähetä kysymyslista asiakkaille.",
        "Mittaa yhden agenttipyynnön hinta viestipohjalla. Kirjaa hinta päiväkirjaan."],
        "repositoryn osoite, <code>project-docs/mvp.md</code> GitHubissa ja agenttipyynnön hinta päiväkirjassa."),
    41: ("Harjoitussykli: pyörivä kuutio julki", [
        "Päätä, hyväksytkö teknisen ehdotuksen. Perustele päätös suunnitelmaan. Luo sitten tekninen pohja itse komennoilla.",
        "Kirjoita testitapaus T01 ennen koodia. Mitä odotat, kun kiertokulma saa ajan 0 ja nopeuden 0,5? Entä kun aika on 3?",
        "Tee kortti #1 (kuutio) työsyklillä mallikortin avulla. Aja T01.",
        "Tee kortti #2 (Pages-julkaisu) työsyklillä. Aja T02."],
        "Pages-osoite, issuet #1 ja #2 suljettuina sekä T01:n ja T02:n tulokset issueissa."),
    43: ("SVG-tuonti: polut näkyviin", [
        "Piirrä Inkscapessa testitiedosto, jossa on nimetyt layerit ja kolme sisäkkäistä ryhmää.",
        "Kirjoita testitapaukset T03–T05 ennen toteutusta: kolme polkua, SVG, jossa on <code>&lt;script&gt;</code>, ja tiedosto, joka ei ole SVG.",
        "Kirjaa kansiorakenne ja moduulien rajat suunnitelmaan.",
        "Toteuta tuonti työsyklillä kaistalla A, tiedosto kerrallaan.",
        "Kokeile SVGLoaderin rajoitteita omalla tiedostollasi. Kirjaa ne <code>kirjastot.md</code>:hen."],
        "oma SVG-tiedosto, T03–T05 issueissa ja <code>project-docs/kirjastot.md</code>."),
    44: ("Hierarkia: layerit ja ryhmät osiksi", [
        "Kirjoita hierarkian muunnoksen rajapinta ja testitapaukset T06–T08 ennen toteutusta.",
        "Toteuta muunnos puhtaana funktiona ja hierarkiapaneeli kaistalla C.",
        "Päätä valinnan toiminta. Kirjaa se suunnitelmaan.",
        "Vertaa kahta tapaa valita revolve. Tuo suositus ensi viikon palaveriin."],
        "rajapinta ja T06–T08 issueissa, hierarkiapaneeli Pages-osoitteessa ja valinnan päätös suunnitelmassa."),
    45: ("Revolve: profiilista pyörähdyskappale", [
        "Sovi palaverissa revolven valintatapa. Kirjaa, mitä profiilille tehdään akselin väärällä puolella.",
        "Kirjoita testitapaukset T09–T11 ennen toteutusta. Kysy tarvittaessa kysymystilasta, miten LatheGeometry lukee pisteet.",
        "Toteuta revolve, segmenttisäädin ja orbit työsyklillä."],
        "T09–T11 issueissa, pyörähdyskappale Pages-osoitteessa ja sovittu valintatapa issue-kommenttina."),
    46: ("Inflate ja kamera: putki ja suorat näkymät", [
        "Kirjoita testitapaukset T12–T14 ennen toteutusta.",
        "Toteuta inflate ja sivumäärän säädin työsyklillä. Kirjaa TubeGeometryn rajoitteet.",
        "Toteuta orientaatiokuutio ja view lock -painike työsyklillä."],
        "T12–T14 issueissa, putki ja suorat näkymät Pages-osoitteessa ja TubeGeometryn rajoitteet <code>kirjastot.md</code>:ssä."),
    47: ("Transformit: valitse, siirrä, kierrä ja skaalaa", [
        "Kirjoita testitapaus T15 ennen toteutusta. Mitä odotat lapsen paikalle, kun vanhempaa siirretään 10 yksikköä?",
        "Toteuta valinta suunnitelmasi mukaan. Toteuta siirto, kierto ja skaalaus työsyklillä.",
        "Aja T15. Jos se ei mene läpi kahdella yrityksellä, avaa havaintoissue."],
        "T15 issuessa, transformit Pages-osoitteessa ja P0-tilanne palaverin issue-kommentissa."),
    48: ("Pivot: kiertopiste prosentteina", [
        "Kirjoita pivotin syötteen tarkistuksen rajapinta ja testitapaukset T16–T18 ennen toteutusta.",
        "Toteuta pivot ja syötteen tarkistus työsyklillä.",
        "Lisää transformivalikko prosenttisyötöllä käyttöliittymävaatimuksesi mukaan."],
        "rajapinta ja T16–T18 issueissa sekä transformivalikko Pages-osoitteessa."),
    49: ("OBJ-vienti: osat erillisinä Blenderiin", [
        "Kirjoita objektijaon rajapinta ja testitapaukset T19–T20 ennen toteutusta.",
        "Toteuta vienti niin, että osien nimet säilyvät.",
        "Laske <code>o</code>-rivit VS Codessa. Avaa tiedosto Blenderissä kuvaohjeen mukaan.",
        "Kirjoita ensimmäinen virheenkorjausketju havaintoissueistasi. Kirjoita sille regressiotesti."],
        "T19–T20 issueissa, viety .obj-tiedosto, kuva Blenderistä ja virheenkorjausketju 1 havaintoissuessa."),
    50: ("Tallennus ja MVP: versio v0.1 julki", [
        "Vertaa tallennustapoja oman suunnitelmasi kriteereillä. Kirjaa valinta suunnitelmaan.",
        "Kirjoita testitapaukset T21–T22 ennen toteutusta.",
        "Toteuta tallennus ja avaus työsyklillä. Kirjoita tietoturva-arvio tuonnista ja avauksesta.",
        "Julkaise MVP. Merkitse versio tagilla v0.1."],
        "tallennusvertailu suunnitelmassa, T21–T22 issueissa, <code>project-docs/tietoturva.md</code> ja tagi v0.1."),
    51: ("Katselmointi: asiakkaat kokeilevat MVP:tä", [
        "Valmistele viiden minuutin demo omalla Inkscape-tiedostolla.",
        "Pidä katselmointi asiakkaiden kanssa. Pidä heidän havaintonsa erillään omasta tulkinnastasi.",
        "Tee havainnoista issuet. Kirjaa niihin asiakkaan prioriteetti.",
        "Kirjoita tilatiedoston Seuraavana-kohtaan viikon 2 ensimmäinen tehtävä issue-numeroineen."],
        "<code>project-docs/katselmointi.md</code>, havaintoissuet prioriteetteineen ja tilatiedoston Seuraavana-kohta."),
    2: ("Paluuviikko: testit läpi ja P1-järjestys", [
        "Aja <code>npm install</code>, <code>npm run dev</code> ja <code>npm test</code>. Kirjaa tulos.",
        "Ehdota P1-järjestys ja tuntiarviot asiakkaiden prioriteettien pohjalta. Sovi järjestys palaverissa.",
        "Tee yksi pieni korjaus katselmoinnin havainnoista kaistalla B."],
        "testiajon tulos päiväkirjassa, P1-järjestys issueissa ja korjauksen commit."),
    3: ("Päivitä SVG: muokattu piirros malliksi", [
        "Sovi palaverissa, miten osat tunnistetaan uudesta tiedostosta.",
        "Kirjoita testitapaus T23 ennen toteutusta.",
        "Toteuta toiminto omassa haarassa. Aja kaikki testit. Liitä haara päähaaraan pull requestilla."],
        "T23 issuessa ja yhdistetty pull request."),
    4: ("Jousto ja P1: rästit tai seuraava toiminto", [
        "Tee ensin P0-rästit omassa haarassa, jos niitä on.",
        "Kirjoita seuraavan P1-toiminnon testitapaus T24 ennen toteutusta.",
        "Toteuta toiminto työsyklillä. Kirjoita toinen virheenkorjausketju."],
        "T24 issuessa, valmis toiminto Pages-osoitteessa ja virheenkorjausketju 2 havaintoissuessa."),
    5: ("Saavutettavuus: isot kahvat ja näppäimistö", [
        "Aja Lighthouse. Kirjaa perusmittaus.",
        "Tarkista käyttöliittymävaatimuksesi. Kirjoita testitapaukset T25–T26 ennen toteutusta.",
        "Toteuta isot kahvat ja näppäimistökäyttö työsyklillä.",
        "Aja T25–T26 ja Lighthouse uudelleen. Vertaa tuloksia."],
        "Lighthousen tulokset ennen ja jälkeen, T25–T26 issueissa ja korjausten commitit."),
    6: ("Julkaisutesti: julkaisuehdokas v1.0-rc1", [
        "Jäädytä sisältö. Merkitse julkaisuehdokas tagilla v1.0-rc1.",
        "Täydennä README ja käyttöohje. Kerro ohjeessa Inkscapen nimeämissäännöt.",
        "Pyydä julkaisutestaajaa kulkemaan koko polku puhtaassa ympäristössä. Pidä hänen havaintonsa erillään omasta tulkinnastasi."],
        "tagi v1.0-rc1, README ja käyttöohje sekä <code>project-docs/julkaisutesti.md</code>."),
    7: ("v1.0: julkaisu ja asiakkaiden vahvistus", [
        "Korjaa estävät havainnot. Kirjoita kolmas virheenkorjausketju.",
        "Julkaise v1.0 tagilla. Pyydä asiakkaita vahvistamaan, että se toimii heidän koneellaan.",
        "Linkitä näyttömatriisin rivit päiväkirjan tunnusten avulla."],
        "tagi v1.0, virheenkorjausketju 3, asiakkaiden vahvistus ja linkitetty näyttömatriisi."),
    9: ("Näyttö: demo ja luovutus", [
        "Jäädytä sisältö maanantaina. Tarkista, että jokainen työnäyte on repositoryssa.",
        "Harjoittele demo ajastettuna: tuotos, yksi tekninen ratkaisu omin sanoin, korjattu virhe, Git-historia ja työnkulku yhdellä kortilla.",
        "Kirjoita itsearviointi kolmesta tilanteesta. Lähetä se ohjaajalle Teamsissa."],
        "demo, linkitetty näyttömatriisi ja itsearvioinnin lähetyspäivä päiväkirjassa."),
}

HELP_SMALL = {41: "mallikortti ja kansiorakenne"}
JARJESTYS = [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 1, 2, 3, 4, 5, 6, 7, 8, 9]


def eyebrow(w):
    t, l = VAIHE[w]
    return f'<p class="view-eyebrow" data-week-label="{PVM[w]}">Vaihe {t} · {l} · Viikko {w} · {PVM[w]}</p>'


def week_card(w):
    otsikko, tehtavat, nayta = VIIKOT[w]
    i = info[str(w)]
    out = [f'        <article class="week-card" id="week-{w}" data-week="{w}">',
           f'          {eyebrow(w)}',
           f'          <h1 class="view-title">{otsikko}</h1>',
           '',
           '          <div class="week-kicker" data-week-kicker hidden>',
           '            <span class="section-label" data-week-kicker-label>Viikon jälkeen</span>',
           '            <p data-week-kicker-text></p>',
           '          </div>']
    if i["sykli"]:
        out.append('          <section data-week-cycle hidden></section>')
    if i["excerpt"]:
        out += ['          <blockquote class="week-quote" data-week-quote hidden>',
                '            <p class="quote-text" data-quote-text></p>',
                '            <p class="quote-source">Toimeksiannosta: viikko toteuttaa tätä asiakkaan toivetta</p>',
                '          </blockquote>']
    out += ['          <p class="week-connection" data-week-connection hidden></p>',
            '          <div class="week-why-grid grid-2" data-week-why hidden>',
            '            <div class="card"><p class="section-label" data-why-deliverable-label>Tällä viikolla valmistuu</p><p data-why-deliverable-text></p></div>',
            '            <div class="card"><p class="section-label">Miksi tämä tehdään</p><p data-why-why-text></p></div>',
            '          </div>',
            '          <div class="week-skills" data-week-skills hidden>',
            '            <p class="skill-tags-label" data-skills-label>Viikon osaaminen</p>',
            '            <ul class="skill-tags" data-skills-list></ul>',
            '          </div>',
            '',
            '          <section class="view-section">',
            f'            <div class="section-heading-row"><h2>Viikon tehtävät</h2><span class="week-status" data-week-status>0 / {len(tehtavat)}</span></div>',
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
            '          <div class="outcome-grid">',
            '            <div class="card"><p class="section-label">Valmis kun</p><p class="checkpoint"></p></div>',
            f'            <div class="card"><p class="section-label section-label-accent">Näytä</p><p class="evidence"><strong>Näytä:</strong> {nayta}</p></div>',
            '          </div>',
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
            '              <label><span>Missä työnäyte on? Lisää vaatimuksen tunnus, esimerkiksi s12.</span><input type="text" data-journal-field="evidence"></label>',
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
                      f'          <p>{teksti}</p>',
                      '        </article>'])


viikkokortit = "\n\n".join(holiday_card(w) if w in LOMAT else week_card(w) for w in JARJESTYS)
tehtavia = sum(len(v[1]) for v in VIIKOT.values())

# ---- näyttömatriisi: nimet ePerusteista (00-vaatimukset-eperusteet.txt), työnäyte tästä projektista ----
MATRIISI = [
    ("Ohjelmointi", [
        ("Opiskelija käyttää ohjelmistokehitysympäristöä", [
            ("p1", "käyttää ohjelmointieditoria tai kehitysympäristöä", "VS Code, GitHub Copilot, Viten kehityspalvelin ja Vitest käytössä viikoilta 40 ja 41. Versiot README:ssä. Paluuviikon ajo viikolla 2."),
            ("p2", "etsii ja korjaa virheitä ohjelmakoodista", "Kolme virheenkorjausketjua havaintoissueista viikoilla 49, 4 ja 7: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti."),
            ("p3", "testaa ohjelman toimintoja", "Testitapaukset T01–T26 ja lisätestit viikoilta 41–5. Kirjoitat odotetun tuloksen itse testikoodiin ennen toteutusta. Tulokset issueissa.")]),
        ("Opiskelija ohjelmoi", [
            ("p4", "käyttää rakenteista ohjelmointia toteutuksissa", "Kolme funktiota selityspohjalla: hierarkian muunnos (viikko 44), pivotin syötteen tarkistus (48) ja OBJ-objektijako (49). Rajapinta ennen toteutusta. Selitys ääneen seuraavan viikon palaverissa."),
            ("p6", "tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia", "Hierarkiapaneeli (44), view lock (46), transformivalikko (48) sekä isot kahvat ja näppäimistökäyttö (5) käyttöliittymävaatimuksesi mukaan. Lighthouse ennen ja jälkeen."),
            ("p7", "tulkitsee suunnitelmia ja toteuttaa ohjelmiston toimintoja", "MVP-kuvauksesta tehtäväkortit ja toiminnot: tuonti (43), revolve (45), inflate (46) ja transformit (47) hyväksymiskriteerien mukaan.")]),
        ("Opiskelija toimii ohjelmistokehitystiimin jäsenenä", [
            ("p8", "sopii tehtävistä tiimin muiden jäsenten kanssa", "Issue-kommentit \"Sovittu viikkopalaverissa pp.kk.\" joka viikolta 41–7."),
            ("p9", "etsii ratkaisuvaihtoehtoja ja ratkoo ongelmia yhdessä tiimin kanssa", "Revolven valintatavan vertailu ja yhteinen päätös (44–45). Osien tunnistustapa Päivitä SVG -toimintoon (3)."),
            ("p10", "arvioi ratkaisujen toimivuuden yhdessä tiimin kanssa", "Katselmointi asiakkaiden kanssa (51). Palaverin arvio MVP:n ratkaisuista P1:tä varten (2)."),
            ("p11", "arvioi omaa toimintaa tiimin jäsenenä", "Itsearviointi kolmesta tilanteesta viikolla 9. Se lähetetään ohjaajalle Teamsissa. Päiväkirjaan kirjataan vain tilanteiden päivät ja issue-numerot.")]),
    ], ("p5", "kirjoittaa ylläpidettävää ohjelmakoodia")),
    ("Ohjelmistokehittäjänä toimiminen", [
        ("Opiskelija kommunikoi asiakkaan kanssa", [
            ("s1", "selvittää kehitystiimin kanssa asiakkaan tarpeet", "Kysymyslista asiakkaille (40). Vastaukset tiedostossa <code>project-docs/kysymykset.md</code> (41). MVP omin sanoin."),
            ("s2", "viestii tekniset asiat asiakaslähtöisesti", "Viiden minuutin demo katselmoinnissa (51). README ja käyttöohje käyttäjälle (6)."),
            ("s3", "osallistuu version katselmointiin", "<code>project-docs/katselmointi.md</code>: asiakkaiden sanat, oma tulkinta ja sovitut muutokset (51).")]),
        ("Opiskelija suunnittelee ohjelmiston toteutuksen", [
            ("s4", "asettaa kehitystiimin kanssa toteutettavat toiminnot tärkeysjärjestykseen", "P0/P1/P2-karsinta perusteluineen (40). Asiakkaiden prioriteetit (51). P1-järjestys palaverissa (2)."),
            ("s5", "jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi", "Tehtäväkortit hyväksymiskriteereineen viikolta 41 alkaen. Oma rajausehdotus ja tarkistusrivi issueissa."),
            ("s6", "suunnittelee ja arvioi kehitystiimin kanssa tehtävien toteuttamista", "Kaistan valinta ja toteuman vertailu Raportoi-askeleessa. Krediittimittaus (40). P1-tuntiarviot (2).")]),
        ("Opiskelija kehittää ohjelmiston toimintalogiikkaa ja tietovarastoyhteyksiä", [
            ("s7", "kehittää ohjelmiston toimintalogiikkaa", "Hierarkia, revolve, inflate, transformit ja pivot (44–48) sekä Päivitä SVG (3)."),
            ("s8", "valitsee ohjelmistoon sopivan tietovaraston", "Tallennustapojen vertailu oman suunnitelman kriteereillä ja oman mallin JSON-tiedoston koko (50)."),
            ("s9", "toteuttaa yhteyden tietovarastoon", "Tallennus ja avaus JSON-tiedostona. Versionumero ja rakenteen tarkistus (50)."),
            ("s10", "hyödyntää rajapintoja ja käsittelee tietoa", "Selaimen tiedostojen luku, SVGLoader (43), OBJExporter (49) ja JSON (50)."),
            ("s11", "arvioi ohjelmiston tietoturvaa", "T04 haitallinen SVG (43), T22 rikottu JSON (50) ja <code>project-docs/tietoturva.md</code>: uhka, testi, tulos ja toimenpide.")]),
        ("Opiskelija versioi ja julkaisee ohjelman", [
            ("s12", "käyttää versionhallintaa", "Commitit rivillä <code>Closes #N</code> koko projektin ajan. Tagit v0.1, v1.0-rc1 ja v1.0."),
            ("s13", "liittää ohjelman osan olemassa olevaan versioon", "Päivitä SVG omassa haarassa, pull request ja merge päähaaraan, kun kaikki testit menevät läpi (3)."),
            ("s14", "julkaisee ohjelman tuotantoympäristöön", "GitHub Pages -julkaisu GitHub Actionsilla: harjoitus (41), MVP v0.1 (50) ja v1.0 (7).")]),
    ], None),
    ("Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla", [
        ("Opiskelija käyttää kehitysympäristöä", [
            ("k1", "ottaa käyttöön ja konfiguroi ohjelmistokomponenttikirjaston käyttöön soveltuvan kehittämisympäristön", "Vite + React + Three.js + Vitest -pohja omin komennoin ja <code>vite.config.js</code>:n <code>base</code>-asetus (41)."),
            ("k2", "selvittää ohjelmistokomponenttikirjaston tarjoamat mahdollisuudet ja rajoitteet", "<code>project-docs/kirjastot.md</code>: SVGLoaderin (43) ja TubeGeometryn (46) rajoitteet omilla tiedostoilla kokeiltuina."),
            ("k3", "käyttää ohjelmistokomponenttikirjaston tärkeimpiä toimintoja ja työkaluja", "LatheGeometry, TubeGeometry, drein TransformControls, OrbitControls ja orientaatiokuutio (45–48)."),
            ("k4", "tuo kehittämisympäristöön ulkoisia komponentteja", "npm-paketit three, @react-three/fiber, @react-three/drei ja vitest omin komennoin (41).")]),
        ("Opiskelija toteuttaa ohjelmiston ohjelmistokomponenttikirjastolla", [
            ("k5", "suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen", "MVP v0.1 komponenttikirjastolla testeineen (43–50)."),
            ("k6", "julkaisee ohjelmiston asiakkaan ympäristöön", "MVP asiakkaiden kokeiltavaksi (50). Asiakkaiden vahvistus v1.0:sta omalla koneellaan (7)."),
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
