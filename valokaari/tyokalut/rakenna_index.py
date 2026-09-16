#!/usr/bin/env python3
"""Täyttää Valokaaren index.html:n TÄYTÄ-lohkot ja generoi 18 viikkokorttia.

Ajo: python3 rakenna_index.py <projektikansio>
Lukee <projektikansio>/index.html (uusi_projekti.py:n tuottama) ja kirjoittaa sen päälle.
Idempotentti vain kertaalleen: aja aina tuoreeseen generoituun runkoon (index.runko.html säilytetään).
"""
import os
import re
import sys

ROOT = sys.argv[1]
SRC = os.path.join(ROOT, "index.html")
BACKUP = os.path.join(ROOT, "tyokalut", "index.runko.html")

html = open(SRC, encoding="utf-8").read()
if not os.path.exists(BACKUP):
    open(BACKUP, "w", encoding="utf-8").write(html)
else:
    html = open(BACKUP, encoding="utf-8").read()

# ---------------------------------------------------------------- viikot
PHASES = {1: "A", 2: "A", 3: "A", 4: "A", 5: "A", 6: "B", 7: "B", 8: "B", 9: "B", 10: "B",
          11: "C", 12: "C", 13: "C", 14: "C", 15: "C", 16: "D", 17: "D", 18: "D"}
PHASE_SHORT = {"A": "Ydin", "B": "Ominaisuudet", "C": "Valmiiksi", "D": "Julkaisu"}

WEEKS = {
    1: ("Aloitus", [
        "Asenna työkalut (PHP 8.2 tai uudempi, Node LTS, Git, VS Code) ja kirjaa versiot README:hen.",
        "Luo GitHub-repository ja tee julkisen repon tarkistukset: yksityisyys, tekijänimi ja alaikäisen huoltajan suostumus ohjaajan kautta.",
        "Luo React + TypeScript -projekti Vitellä ja käynnistä kehityspalvelin. Käynnistä PHP:n sisäänrakennettu palvelin, joka palauttaa <code>{\"status\":\"ok\"}</code>.",
        "Lue toimeksianto, kirjoita kysymyslista ohjaajalle (vähintään kuusi kysymystä) ja luo kansiorakenne. Sitten ensimmäinen commit ja push.",
    ], "README:n versiotaulukko, kuvakaappaukset kehityspalvelimesta ja PHP-vastauksesta, kuitattu julkisuustarkistuslista, kysymyslista ja commit-historian alku (p1, k1; s12 alkaa)."),
    2: ("Suunnitelma ja priorisointi", [
        "Kirjaa ohjaajan vastaukset kysymyslistaan (nimi, päivä, vastaus omin sanoin) ja kirjoita käyttäjätarinat hyväksymiskriteereineen. Priorisoi ne P0/P1/P2 ohjaajan kanssa.",
        "Vertaa laskentatavat omalla koeajolla (<code>date_sun_info</code> Helsingille 21.6.) ja paikkakuntatiedon muodot (JSON-tiedosto vai SQLite). Päätä ohjaajan kanssa ja perustele.",
        "Piirrä rautalangat lomakkeesta, paikkalistasta ja kaaviosta sekä komponenttijako.",
        "Pilko P0 issueiksi työmääräarvioineen ja täytä suunnitelma.",
    ], "<code>project-docs/suunnitelma.md</code>, ohjaajan vastaukset, koeajon tuloste päiväkirjassa, kaksi vertailutaulukkoa, rautalangat, issue-taulu ja ohjaajan kirjattu hyväksyntä (s1, s4, s5, s8, p8, p9; k5 ja s6 alkavat)."),
    3: ("Julkaistu runko", [
        "Toteuta <code>GET /api/health</code> PHP:llä ja ohjaa Viten kehityspalvelimen <code>/api</code>-kutsut PHP:hen. Kirjoita <code>api-sopimus.md</code>: osoite, parametrit, vastauksen JSON-muoto ja virhevastaukset.",
        "Kirjoita ensimmäinen oma komponentti <code>HealthStatus</code>, joka hakee <code>/api/health</code>-vastauksen ja näyttää tilan.",
        "Valitse julkaisumalli suunnitelman kriteereillä ja julkaise sovellus ja rajapinta ohjaajan antamaan alustaan. Jos julkaisu ei onnistu torstaihin mennessä, kirjaa virhe ja alustan loki päiväkirjaan ja jatka viikkoon 4.",
        "Kirjoita selvitys taulukkona omista P0-tarinoista: mikä osa tehdään Reactilla ja Vitellä, mikä tulee ulkopuolelta ja mistä. Pyydä toista henkilöä avaamaan julkinen osoite omalla laitteellaan.",
    ], "Julkinen osoite, kuvakaappaus alustan lokinäkymästä, <code>vite.config.ts</code>:n proxy-asetus, <code>HealthStatus.tsx</code>, <code>project-docs/api-sopimus.md</code> ja <code>react-vite-selvitys.md</code>, julkaisuperustelu ja toisen henkilön kuittaus (k2; k1 täydentyy; k3, s10, s14 ja k6 alkavat)."),
    4: ("Päivänvalolaskenta", [
        "Hae odotusarvot ulkoisesta lähteestä ja kirjaa testitapaukset T01–T04 ennen koodia.",
        "Toteuta <code>Daylight</code>-moduuli: yhden päivän minuutit koordinaateille, koko vuoden lista, rajat 0–1440 ja karkausvuosi.",
        "Aja testit komennolla, vertaa PHP:n <code>date_sun_info</code>-referenssiin ja korjaa poikkeamat. Kirjaa jokainen löytynyt virhe heti bug-issueksi.",
    ], "<code>server/src/Daylight.php</code>, testitiedosto ja testiajon tuloste (T01–T04 odotusarvoineen ja lähteineen), vertailu referenssiin, bug-issuet ja commitit (p4, s7; p3 alkaa; p2:n raaka-aine)."),
    5: ("Paikkakuntahaku ja rajapinta", [
        "Ota paikkakuntadata käyttöön valitsemassasi muodossa (JSON tai SQLite) ja kirjaa tietolähteen lisenssi. Jos oma hankinta ei valmistu tiistaihin mennessä, käytä ohjaajan kuntaluetteloa.",
        "Toteuta haku nimellä: isot ja pienet kirjaimet, ä ja ö sekä ylimääräiset välilyönnit.",
        "Toteuta <code>GET /api/daylight?city=&amp;year=</code> sopimuksen mukaan. Validoi syötteet ja palauta virheet 400 ja 404 JSONina.",
        "Aja T05–T07 curl-komennolla ja kirjaa odotettu ja saatu vastaus.",
    ], "<code>server/src/Geocoder.php</code> ja rajapinnan reititys, paikkakuntatiedosto lisenssimerkintöineen, curl-tulosteet T05–T07 ja commitit (s9; s7 täydentyy; p7 alkaa; s10, jos käytät ulkoista rajapintaa)."),
    6: ("Ensimmäinen kaavio", [
        "Vertaa kolmea kaaviokirjastoa (koko omasta npm-tulosteesta, lisenssi, React-tuki, tooltip- ja merkintätuki, näppäimistötuki), perustele valinta ja kirjaa se riippuvuustaulukkoon.",
        "Luo ominaisuushaara, toteuta <code>api.ts</code> (rajapintakutsu fetchillä, vastauksen tyyppi, virheen käsittely) erillään kaaviosta ja piirrä Helsingin vuosi viivakaaviona lataus- ja virhetiloineen.",
        "Avaa pull request, katselmoi se itse, yhdistä ja julkaise. Kirjaa ja aja T16: sammuta palvelin ja tarkista, että selain näyttää virheilmoituksen eikä tyhjää sivua.",
    ], "<code>client/src/api.ts</code>, <code>DaylightChart</code>-komponentti, kaaviokirjastovertailu kokeilusarakkeineen, ensimmäinen pull request, kuvakaappaus julkaistusta kaaviosta ja T16:n virhetilasta (k4, s10, k3, s12; p6 alkaa)."),
    7: ("Monta paikkaa: itse rakennettu näkymä", [
        "Ota Tailwind käyttöön perusteltuna ulkoisena komponenttina ja rakenna lomake ja paikkalista alusta ilman valmista komponenttikittiä.",
        "Estä sama paikka kahdesti, anna jokaiselle sarjalle oma väri ja pidä asteikko 0–24 h kaikilla paikoilla.",
        "Kirjaa ja aja T08 (neljä paikkaa samassa kaaviossa) ja T09 (sama paikka toistamiseen hylätään ilmoituksella).",
        "Vertaa viikkopalaverien työmääräarviot toteumaan ja päivitä suunnitelma, jos arvio petti.",
    ], "<code>useLocations</code>-hook, <code>LocationForm</code>- ja <code>LocationList</code>-komponentit, Tailwind-perustelu riippuvuustaulukossa, T08–T09:n tulokset kuvakaappauksineen, arvio vs. toteuma -taulukko (p6, p7, k3, k4, s6)."),
    8: ("Tooltip ja ääripäät", [
        "Toteuta <code>format.ts</code> (minuutit → <code>23 h 59 min</code>, päivä → <code>21. kesäkuuta</code>) ja sen yksikkötestit T10–T11 ennen kaavioon kytkemistä.",
        "Toteuta tooltip: päivä, paikka ja kesto luettavassa muodossa hiirellä ja kosketuksella. Kirjaa, mitä kirjasto tukee näppäimistöllä, ja suunnittele korvaava reitti viikolle 12.",
        "Korosta kaamos (0 min) ja yötön yö (1440 min) kaaviossa Utsjoen ja Rovaniemen datalla.",
    ], "<code>client/src/format.ts</code> ja sen testit, tooltip-komponentti, kirjattu näppäimistörajoite ja kiertoreitti, kuvakaappaus Utsjoen kaaviosta korostuksineen (p3, k3, k2; p4 täydentyy)."),
    9: ("Leikkauspisteet", [
        "Kirjoita leikkauspisteen määritelmä ja toleranssi suunnitelmaan ja perustele se Utsjoki–Inari-esimerkillä.",
        "Toteuta <code>intersections.ts</code> puhtaana funktiona, joka yhdistää peräkkäiset päivät yhdeksi merkiksi. Kirjaa testit T12–T13 ennen ajoa.",
        "Piirrä merkit kaavioon ja anna niille oma tooltip: päivä, molemmat paikat ja kesto.",
    ], "<code>client/src/intersections.ts</code> ja sen testit, suunnitelman päätöskohta, kuvakaappaus Helsinki–Rovaniemi-leikkauksesta maaliskuussa (s7, p4, p3)."),
    10: ("Asiakaskatselmointi", [
        "Valmistele asiakaskielinen esittely ilman teknistä sanastoa ja kolmen paikan testitehtävä katselmoijalle. Herätä nukkuva julkaisualusta ennen tilaisuutta.",
        "Pidä katselmointi nimetyn ulkopuolisen kanssa julkaistulla väliversiolla. Kirjaa hänen sanansa sitaatteina.",
        "Kirjoita muistio: sitaatit, oma tulkinta erikseen ja priorisoidut muutokset issueiksi. Rajaa ohjaajan kanssa tärkein muutos enintään kahden päivän työksi.",
    ], "<code>project-docs/katselmointi-vk10.md</code> (rooli, ajankohta, sitaatit, tulkinta) ja muutosissuet P-luokin (s2, s3, p10; s1 täydentyy)."),
    11: ("Vuosivalinta ja palautemuutos kahdessa haarassa", [
        "Luo maanantaina kaksi haaraa samasta <code>main</code>-commitista: vuosivalinta ja palautemuutos.",
        "Toteuta ensin vuosivalitsin, joka hakee kaikkien paikkojen datan uudelleen, ja aja T14 (vuosi 2028 näyttää 366 pistettä). Yhdistä pull requestilla.",
        "Toteuta palautemuutos toisessa haarassa, ratkaise syntyvä merge-konflikti hallitusti, yhdistä ja julkaise. Jos konfliktia ei synny, ohjaaja tekee sovitun commitin <code>main</code>-haaraan.",
    ], "Kaksi pull requestia, konfliktin ratkaisun commit, <code>YearSelect</code>-komponentti, T14:n tulos ja muutokset julkaistussa versiossa (s13, s10, p7; s12 koonti; p10 täydentyy)."),
    12: ("Mobiili ja saavutettavuus", [
        "Testaa sovellus oikealla puhelimella ja korjaa asettelu Tailwindin taitekohdilla. Kuvakaappaukset ennen ja jälkeen.",
        "Toteuta viikolla 8 valittu näppäimistön kiertoreitti (datataulukko tai päivävalitsin) ja tarkista näppäinkäyttö, kontrasti, <code>label</code>-kytkennät ja otsikkohierarkia.",
        "Aja Lighthouse ennen ja jälkeen korjausten ja kirjaa tulokset.",
    ], "Kuvakaappaukset omalta puhelimelta, kiertoreitin komponentti, Lighthouse-raportit ennen ja jälkeen (k3, k2; p6 täydentyy)."),
    13: ("Tietoturva-arvio ja virheenkäsittely", [
        "Kirjoita oman sovelluksen uhkalista (5–8 riviä: uhka, testi, tulos, toimenpide) ja aja syötetaulukko T15 curlilla.",
        "Tee XSS-testi: lisää paikka nimellä <code>&lt;script&gt;alert(1)&lt;/script&gt;</code> ja varmista, että nimi näkyy tekstinä eikä suoritu.",
        "Käsittele yhden paikan virhe niin, että muut sarjat säilyvät (<code>Promise.allSettled</code>), ja varmista, ettei repossa ole salaisuuksia. Korjaa vain rivit, joilla saatu poikkeaa odotetusta; muut issueiksi.",
    ], "<code>project-docs/tietoturva-arvio.md</code> uhkalistoineen ja syötetaulukkoineen, XSS-testin kuvakaappaus, korjauscommitit (s11, s7)."),
    14: ("Testaus", [
        "Kokoa testiraportti: 16 testitapausta kolmessa luokassa, odotusarvot ja lähteet kirjattuina viikoilla 4–13 ennen ajoa; erottele komennolla ajettavat ja käsin ajettavat selaintestit.",
        "Aja PHP-testit (<code>composer test</code> tai <code>php tests/run.php</code>) ja Vitest-testit (<code>npm test</code>) ja kirjaa tulokset.",
        "Kirjaa vähintään kaksi täydellistä virheenkorjausketjua bug-issuelistan aidoista havainnoista.",
    ], "<code>project-docs/testiraportti.md</code>, testiajojen tulosteet ja virheenkorjausketjut commit-linkein (p3, p2, k5)."),
    15: ("Laatu ja dokumentaatio", [
        "Ota vastaan ohjaajan koodikatselmoinnin kolme nimettyä havaintoa, refaktoroi ne ja dokumentoi ennen ja jälkeen -diffit perusteluineen.",
        "Kirjoita README: käyttöönotto tyhjään ympäristöön, kehityskomennot, rajapinnan kuvaus esimerkkivastauksella ja riippuvuustaulukko <code>npm ls</code>- ja <code>composer show</code>-tulosteista lisensseineen.",
        "Lisää LICENSE ohjaajan päätöksen mukaan. Jos päätöstä ei ole, kirjaa avoin asia.",
    ], "Refaktorointimuistio diff-linkein ja ohjaajan havainnot, README, riippuvuustaulukko ja LICENSE tai kirjattu avoin asia (p5, k7, s12)."),
    16: ("Julkaisuehdokas ja julkaisutestaus", [
        "Tee jäädytyspäätös ja luokittele jäljellä olevat issuet estäviksi tai v1.1-listalle.",
        "Julkaise ja merkitse julkaisuehdokas Git-tagilla <code>v1.0-rc1</code>.",
        "Asenna sovellus itse puhtaaseen ympäristöön (toinen kone tai tyhjä kansio) pelkän ohjeen avulla ja korjaa ohje pöytäkirjan perusteella.",
        "Anna nimetylle ulkopuoliselle ohje ja osoite. Kirjaa hänen havaintonsa sitaatteina ja estävät virheet issueiksi.",
    ], "Tag <code>v1.0-rc1</code>, oma asennuspöytäkirja, julkaisutestauksen pöytäkirja ja estävien issueiden lista (s3, s14, k6)."),
    17: ("Julkaisu v1.0 ja luovutus", [
        "Korjaa estävät virheet täydellisenä virheenkorjausketjuna ja aja regressiotestit. Jos estäviä ei löytynyt, ota kolmas ketju bug-listalta.",
        "Merkitse v1.0 Git-tagilla, tee release, julkaise ja aja savutesti tuotannossa.",
        "Kirjoita julkaisutiedote ja luovutusviesti ohjaajalle asiakkaan roolissa. Vastaa hänen asiakaskysymykseensä.",
    ], "Tag <code>v1.0</code> ja release, kolmas virheenkorjausketju, savutestin kirjaus, <code>julkaisutiedote.md</code>, <code>luovutusviesti.md</code> ja asiakkaan kysymys vastauksineen (s14, k6, s2, p2)."),
    18: ("Näyttö", [
        "Täsmälinkitä näyttömatriisin 32 vaatimusta työnäytteisiin ja korjaa aukot.",
        "Harjoittele 8–10 minuutin demo kellon kanssa toiselle henkilölle.",
        "Kirjoita itsearviointi kolmesta nimetystä tilanteesta, pyydä ohjaajan vastakommentti ja luovuta näyttöpaketti.",
    ], "Täsmälinkitetty näyttömatriisi, demorunko, <code>itsearviointi.md</code> ohjaajan kommentilla (p11)."),
}

card_m = re.search(r'<article class="week-card" id="week-1" data-week="1">[\s\S]*?</article>', html)
assert card_m, "viikkokortin mallia ei löytynyt"
template = card_m.group(0)


def make_card(n):
    title, tasks, evidence = WEEKS[n]
    ph = PHASES[n]
    c = template
    c = c.replace('id="week-1" data-week="1"', f'id="week-{n}" data-week="{n}"')
    c = re.sub(r'data-week-label="[^"]*">[^<]*</p>',
               f'data-week-label="Työviikko {n} / 18">Vaihe {ph} · {PHASE_SHORT[ph]} · Työviikko {n} / 18</p>', c, count=1)
    c = re.sub(r'<h1 class="view-title">[^<]*</h1>', f'<h1 class="view-title">{title}</h1>', c, count=1)
    c = re.sub(r'<span class="week-status" data-week-status>0 / \d+</span>',
               f'<span class="week-status" data-week-status>0 / {len(tasks)}</span>', c, count=1)
    rows = "\n".join(
        f'            <label class="task-row"><input type="checkbox" data-task="{n}-{i}"><span class="task-box" aria-hidden="true"></span><span class="task-text">{t}</span></label>'
        for i, t in enumerate(tasks, 1))
    c = re.sub(r'<div class="task-list">[\s\S]*?\n            </div>', f'<div class="task-list">\n{rows}\n            </div>', c, count=1)
    c = re.sub(r'<p class="evidence">[\s\S]*?</p>', f'<p class="evidence"><strong>Näytä:</strong> {evidence}</p>', c, count=1)
    c = re.sub(r'<!-- TÄYTÄ:[\s\S]*?-->\s*', '', c)
    c = c.replace('data-week-journal="1"', f'data-week-journal="{n}"')
    return c


cards = "\n\n".join(make_card(n) for n in range(1, 19))
html = html.replace(template, cards)

# ---------------------------------------------------------------- TÄYTÄ-lohkot
BRIEF = """
          <p>Vedän Rovaniemellä pientä matkailuyritystä, Revontuli Travelia. Myymme Lapin-matkoja ulkomaalaisille ja eteläsuomalaisille, ja joka syksy käyn saman keskustelun: asiakas kysyy, onko joulukuussa Utsjoella täysin pimeää ja pitääkö kesäkuussa Rovaniemellä nukkua silmälaput päässä. Vastaan sanoilla ja taulukoilla, mutta kukaan ei hahmota numeroista, kuinka jyrkästi päivän pituus muuttuu, kun siirtyy Helsingistä napapiirin pohjoispuolelle.</p>
          <p>Haluan verkkosivullemme kuvan, joka näyttää päivän pituuden vuoden jokaisena päivänä millä tahansa Suomen paikkakunnalla. Asiakkaan pitää voida kirjoittaa paikkakunnan nimi, lisätä se kaavioon ja verrata sitä toiseen paikkaan samassa kuvassa, vaikka Helsinkiä Utsjokeen. Kun hän vie hiiren kaavion päälle, hänen pitää nähdä tarkka päivä, paikka ja se, kuinka monta tuntia ja minuuttia valoa sinä päivänä on. Kaamos ja yötön yö ovat meidän myyntiargumenttimme: haluan, että ne erottuvat kuvasta yhdellä katseella.</p>
          <p>Paikkakunnat eivät saa olla ennalta lukittu lista. Asiakkaat kysyvät Kilpisjärvestä, Inarista ja Kuusamosta, ja jos nimi kirjoitetaan väärin tai sitä ei tunneta, sovelluksen pitää sanoa se selvästi eikä jäädä tyhjäksi. Vuoden pitää olla valittavissa, koska teemme tarjoukset seuraavalle talvelle jo edellisenä keväänä, ja karkausvuoden pitää toimia oikein. Olisi hienoa, jos kuvassa näkyisivät myös ne päivät, joina kahdessa paikassa on yhtä pitkä päivä. Silloin voin sanoa asiakkaalle, että maaliskuun lopulla Rovaniemellä on yhtä valoisaa kuin Helsingissä.</p>
          <p>Haluan kokeilla toimivaa väliversiota noin puolivälissä omilla käsilläni: en halua kalvoesitystä vaan oikean sovelluksen, johon lisään kolme paikkaa ja katson, ymmärränkö kuvan ilman selityksiä. Valmis tarkoittaa minulle tätä: sovellus on verkossa osoitteessa, jonka voin laittaa sivuillemme, se toimii myös puhelimella, se näyttää Suomen paikkakunnat oikein kaamoksesta yöttömään yöhön, ja mukana on ohje, jolla saan sen käyntiin kysymättä keneltäkään.</p>
          <p class="assignment-note">Revontuli Travel ja sen yrittäjä ovat kuvitteellisia. Ohjaava opettaja toimii asiakkaan sijaisena rajaus- ja priorisointipäätöksissä. Työviikon 10 katselmoinnissa asiakkaan roolia esittää ohjaajan nimeämä ulkopuolinen henkilö, ei oma ohjaava opettajasi.</p>
"""

SOVITTU = """
            <p style="margin-top:8px"><strong>Backend eli palvelinpuoli:</strong> PHP 8.2 tai uudempi ilman kehystä. Yksi rajapinta <code>GET /api/daylight?city=Helsinki&amp;year=2026</code> palauttaa paikan koordinaatit ja jokaisen päivän päivänvalon minuutteina JSON-muodossa. Rajapinnan muoto sovitaan kirjallisesti työviikolla 2 ennen koodia.</p>
            <p style="margin-top:8px"><strong>Frontend eli selainpuoli:</strong> React + TypeScript + Vite. Kaavio piirretään kaaviokirjastolla, jonka valitset ja perustelet työviikolla 6; se on ainoa valmis käyttöliittymäkomponentti. Tailwind CSS otetaan käyttöön työviikolla 7, kun lomake ja paikkalista rakennetaan alusta itse. Rajapintakutsut ovat omassa moduulissaan erillään kaaviosta.</p>
            <p style="margin-top:8px"><strong>Kansiot:</strong> <code>client/</code> (React-sovellus), <code>server/</code> (PHP-rajapinta ja sen testit) ja <code>project-docs/</code> (suunnitelma, rajapintasopimus, päiväkirja, muistiot ja raportit).</p>
            <p style="margin-top:8px"><strong>P0-minimi:</strong> paikkakunnan nimi koordinaateiksi · päivänvalo joka päivälle rajoissa 0–1440 min · karkausvuosi oikein · usea paikka samassa kaaviossa yhteisellä asteikolla · paikan poisto · selkeä virheilmoitus tuntemattomasta paikasta · tooltip eli hiiren tai kosketuksen alle avautuva vihjeruutu (päivä, paikka, kesto) · kaamos ja yötön yö korostettuina.</p>
            <p style="margin-top:8px"><strong>P1:</strong> leikkauspisteet, vuosivalinta, mobiilinäkymä ja saavutettavuus. <strong>P2:</strong> kuvan jako linkkinä, paikkojen tallennus selaimeen.</p>
            <p style="margin-top:8px"><strong>Julkaisu:</strong> sovellus ja <code>/api/health</code> viedään julkiseen osoitteeseen jo työviikolla 3, ja samaa julkaisuputkea käytetään loppuun asti: julkaisuehdokas työviikolla 16 ja v1.0 työviikolla 17. Oletusmalli on yksi PHP-palvelin, joka tarjoilee sekä buildatun sovelluksen että rajapinnan samasta osoitteesta. Build tehdään alustalla, ja <code>client/dist</code> on gitignoressa. Ohjaaja on kokeillut alustan ennen projektin alkua.</p>
            <p style="margin-top:8px"><strong>Viikkopalaveri:</strong> työviikoilla 2–17 pidetään ohjaajan kanssa 10 minuutin viikkopalaveri (voi olla 3–4 opiskelijan ryhmäkierros). Sovitut tehtävät, arviot ja edellisen viikon toteuma kirjataan issueihin, ohjaajan nimi ja päivä päiväkirjaan. Työviikolta 6 jokainen ominaisuus tehdään omassa haarassa ja yhdistetään pull requestilla eli yhdistämispyynnöllä, jonka katselmoit itse ennen yhdistämistä.</p>
"""

RAJAUS = """
            <p>Näitä <strong>ei</strong> toteuteta tässä projektissa, vaikka ne tuntuisivat helpoilta lisäyksiltä:</p>
            <ul>
              <li>Laravel tai muu PHP-kehys: yhden rajapinnan sovelluksessa kehys on ylimääräinen riippuvuus</li>
              <li>käyttäjätunnukset, kirjautuminen ja tallennetut suosikit palvelimella</li>
              <li>muiden maiden paikkakunnat tai maailmankartta</li>
              <li>säätiedot, lämpötilat ja revontuliennusteet</li>
              <li>auringonnousun ja -laskun kellonajat tooltipissa (vain päivän pituus)</li>
              <li>valmis käyttöliittymäkomponenttikirjasto (MUI, Chakra tai vastaava): komponenttirakenne ja saavutettavuusratkaisut tehdään itse Tailwindilla</li>
            </ul>
            <p>Kuvan jako linkkinä ja paikkojen tallennus selaimeen ovat P2-listalla: ne tehdään vain, jos kaikki P0 ja P1 on valmiina. Älä vaihda tekniikkaa kesken projektin: React, TypeScript, Vite, Tailwind ja PHP lukitaan työviikolla 1.</p>
"""

RESURSSIT = """
            <ul>
              <li><strong>Paikkakuntien koordinaatit:</strong> avoin aineisto, esimerkiksi GeoNames (lisenssi CC BY 4.0) tai Maanmittauslaitoksen paikannimirekisteri (CC BY 4.0), rajattuna Suomen kuntiin ja taajamiin. Vaihtoehtona ulkoinen geokoodausrajapinta (geokoodaus tarkoittaa nimen muuttamista koordinaateiksi), esimerkiksi Nominatim tai Open-Meteo Geocoding. Valinta ja lisenssi kirjataan suunnitelmaan työviikolla 2.</li>
              <li><strong>Päivänvalon odotusarvot:</strong> Ilmatieteen laitoksen auringonnousu- ja laskuajat tai timeanddate.com. Näistä haetaan testitapausten odotetut tulokset ennen kuin oma laskenta ajetaan.</li>
              <li><strong>Laskentakaava:</strong> auringonnousuyhtälö (NOAA:n julkaisema) tai PHP:n sisäänrakennettu <code>date_sun_info</code>-funktio. Kumpaa käytät, on oma päätöksesi työviikolla 2, ja toista käytetään referenssinä.</li>
              <li><strong>Dokumentaatio:</strong> PHP:n, Reactin, Viten, Tailwindin ja valitun kaaviokirjaston virallinen dokumentaatio on ensisijainen lähde. Jokainen asennettu paketti perustellaan ja kirjataan riippuvuustaulukkoon (paketti, rooli tässä projektissa, versio, lisenssi).</li>
              <li><strong>Ei henkilötietoja:</strong> sovellus ei käsittele henkilötietoja, eikä testidataan tai repositoryyn kirjoiteta oikeiden ihmisten nimiä.</li>
            </ul>
            <p><strong>Tekoälyn raja:</strong> tekoäly saa selittää virheilmoituksia, ehdottaa testitapauksia ja tarkistaa koodiasi. Päivänvalolaskenta, leikkauspisteiden logiikka, komponenttirakenne ja saavutettavuusratkaisut tehdään itse. Jokainen merkittävä käyttö kirjataan AI-lokiin.</p>
"""

OHJAAJA = """
          <ul>
            <li><strong>Lisenssi:</strong> mikä lisenssi työhön tulee? Kysy työviikolla 1, päätös viimeistään työviikolla 8, ja lisää LICENSE repositoryyn heti, kun asia on sovittu.</li>
            <li><strong>Repositoryn julkisuus ja tekijänimi:</strong> saako repo olla julkinen ja millä nimellä esiinnyt? Alaikäisen huoltajan suostumus hoidetaan ohjaajan kautta.</li>
            <li><strong>Katselmoijien roolit:</strong> kuka esittää asiakasta työviikolla 10 (ei oma ohjaava opettajasi) ja kuka toimii julkaisutestaajana työviikolla 16? Nimeäminen viimeistään työviikolla 8.</li>
            <li><strong>Julkaisualusta:</strong> mihin alustaan sovellus julkaistaan? Ohjaaja valitsee alustan (PHP 8.2 ja staattinen build), kokeilee sen itse ja antaa testatun polun ennen työviikkoa 1, viimeistään työviikolla 2. Ilman tätä työviikkoa 3 ei voi tehdä.</li>
            <li><strong>Perusteversion siirtymäsääntö:</strong> minkä perusteversion mukaan näyttö arvioidaan (OPH-6216-2025)?</li>
            <li><strong>Arvioinnin järjestelyt:</strong> näytön ajankohta ja arvioijat työviikolle 18.</li>
          </ul>
"""

TESTIT = """
            <li>Vähintään 12 suunniteltua testitapausta (tässä projektissa 16) kolmessa luokassa: normaali käyttö, rajat ja virhetilanteet. Testitapaukset numeroidaan T01, T02 ja niin edelleen: T tarkoittaa testitapausta ja numero yksilöi sen.</li>
            <li>Odotettu tulos kirjataan jokaisesta tapauksesta ennen ajoa. Päivänvalon odotusarvot haetaan ulkoisesta lähteestä (Ilmatieteen laitos tai timeanddate), ei omasta koodista.</li>
            <li>3 täydellistä virheenkorjausketjua aidoista havainnoista: havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Regressiotesti tarkoittaa, että vanha testi ajetaan uudelleen, jotta korjaus ei riko aiemmin toiminutta.</li>
            <li>Rajatapaukset: Utsjoki 21.12. (0 min) ja 21.6. (1440 min), Rovaniemen yöttömän yön ensimmäinen ja viimeinen päivä, karkausvuosi 2028 (366 päivää) ja 2027 (365), vuodenvaihde.</li>
            <li>Virhetilanteet: tuntematon paikkakunta, tyhjä syöte, vuosi rajojen ulkopuolella, verkkovirhe (palvelin sammutettu) ja sama paikka kahdesti.</li>
            <li>Jokainen havaittu virhe kirjataan heti GitHub-issueksi tunnisteella <code>bug</code>: mitä odotit, mitä tapahtui. Työviikkojen 14 ja 17 virheenkorjausketjut otetaan tältä listalta, ei keksitä.</li>
            <li>Rajapinta testataan myös suoraan komentoriviltä curl-komennolla, joka hakee osoitteen ilman selainta, ei vain käyttöliittymän kautta.</li>
            <li>Yksikkötestit (yhden funktion testi ilman käyttöliittymää) laskenta-, muotoilu- ja leikkauspistemoduuleille ajetaan komennolla ja toimivat regressiosuojana.</li>
            <li>Julkaistu versio testataan puhtaassa ympäristössä: ensin itse, sitten ulkopuolinen pelkän kirjallisen ohjeen avulla.</li>
"""

TYOKALUT = """
            <li><strong>Työkalut:</strong> PHP 8.2 tai uudempi, Node LTS, Git ja VS Code. Selainpuolen runko syntyy komennolla <code>npm create vite@latest -- --template react-ts</code>, palvelin käynnistyy komennolla <code>php -S localhost:8000 -t server/public</code>.</li>
            <li><strong>Kirjastot:</strong> Tailwind CSS ja yksi kaaviokirjasto. Jokainen asennettu paketti perustellaan ja kirjataan riippuvuustaulukkoon (paketti, rooli, versio, lisenssi). Tarkista lisenssi ennen asennusta.</li>
            <li><strong>Aineisto:</strong> paikkakuntien koordinaatit avoimesta lähteestä lisenssi kirjattuna tai ulkoisesta geokoodausrajapinnasta; päivänvalon odotusarvot Ilmatieteen laitokselta tai timeanddate-sivulta. Ei henkilötietoja.</li>
            <li><strong>Viikkopalaveri ja issuet:</strong> 10 minuuttia ohjaajan kanssa joka viikko työviikoilta 2–17. Sovitut tehtävät, arviot ja toteuma kirjataan issueihin, ohjaajan nimi ja päivä päiväkirjaan. Havaitut virheet kirjataan heti bug-issueiksi. Ohjaaja lisätään repositoryn yhteistyökumppaniksi (collaborator) työviikolla 1.</li>
            <li><strong>Tekoälyn rajat:</strong> tekoäly saa selittää, ehdottaa ja tarkistaa. Päivänvalolaskenta, leikkauspisteiden logiikka, komponenttirakenne ja saavutettavuusratkaisut tehdään itse. Jokainen merkittävä käyttö kirjataan AI-lokiin.</li>
"""

PREFILLED = """
          <article><h3>1 · Tavoite</h3><p>Lapin matkailuyrityksen verkkosivulle upotettava sovellus, joka näyttää kaaviona päivän pituuden Suomen paikkakunnilla vuoden jokaisena päivänä: käyttäjä kirjoittaa paikkakunnan, lisää sen kaavioon, vertaa useita paikkoja, näkee tooltipissa päivän ja keston ja erottaa kaamoksen ja yöttömän yön yhdellä katseella.</p></article>
          <article><h3>2 · Asiakas ja käyttäjät</h3><p>Revontuli Travelin yrittäjä (tilaaja) ja yrityksen asiakkaat, jotka suunnittelevat Lapin-matkaa ja haluavat ymmärtää valoisan ajan määrän eri paikoissa ja vuodenaikoina. Käyttäjä ei ole tekninen eikä lue numerotaulukoita.</p></article>
          <article><h3>3 · P0-rajaus</h3><p><strong>P0:</strong> paikkakunnan nimi koordinaateiksi · päivänvalo joka päivälle rajoissa 0–1440 min · karkausvuosi oikein · usea paikka yhteisellä asteikolla · paikan poisto · virheilmoitus tuntemattomasta paikasta · tooltip · kaamos ja yötön yö korostettuina.</p><p><strong>P1:</strong> leikkauspisteet, vuosivalinta, mobiilinäkymä ja saavutettavuus. <strong>P2:</strong> kuvan jako linkkinä, paikkojen tallennus selaimeen.</p></article>
          <article><h3>4 · Rajapintasopimus</h3><p><code>GET /api/daylight?city=Helsinki&amp;year=2026</code> palauttaa JSON-olion, jossa on <code>location</code> (nimi, leveys- ja pituusaste), <code>year</code> ja <code>days</code>-lista (<code>date</code>, <code>daylightMinutes</code>). Virheet palautetaan JSONina: 400 kun syöte on virheellinen, 404 kun paikkaa ei löydy, 502 kun ulkoinen palvelu ei vastaa. Sopimus kirjoitetaan tiedostoon <code>project-docs/api-sopimus.md</code> ennen koodia.</p></article>
          <article><h3>5 · Teknologia ja työtapa</h3><p>PHP 8.2+ ilman kehystä (backend), React + TypeScript + Vite (frontend), Tailwind CSS työviikolta 7, kaaviokirjasto oman vertailun mukaan. Laskenta, muotoilu ja leikkauspisteet omissa moduuleissaan erillään komponenteista. Lomake ja paikkalista rakennetaan alusta itse; valmista komponenttikittiä ei käytetä. Oletusjulkaisumalli on yksi PHP-palvelin, build alustalla. Viikkopalaveri ohjaajan kanssa joka viikko, bug-issuet työviikolta 4, ominaisuushaarat ja pull requestit työviikolta 6.</p></article>
          <article><h3>6 · Avoimet asiat – ohjaaja omistaa</h3><p>Lisenssi · repositoryn julkisuus, tekijänimi ja alaikäisen huoltajan suostumus · katselmoijien roolit työviikoille 10 ja 16 · julkaisualusta ja ohjaajan testattu polku · perusteversion siirtymäsääntö (OPH-6216-2025) · arvioinnin järjestelyt työviikolle 18.</p><small class="plan-open-note">Näitä ei päätetä itse eikä tekoälyllä. Tyhjä kenttä on oikea tulos siihen asti, kunnes asia on sovittu ohjaajan kanssa.</small></article>
"""

FIELDS = """
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Projektin nimi<input type="text" data-plan-field="nimi" placeholder="Valokaari – päivänvalon pituus Suomen paikkakunnilla"></label><span class="plan-row-week">viikko 1</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Tekijä (tekijänimi sovitaan ohjaajan kanssa)<input type="text" data-plan-field="tekija" placeholder="Etunimi tai sovittu tekijänimi"></label><span class="plan-row-week">viikko 1</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Tavoite omin sanoin: mistä tiedät onnistuneesi?<input type="text" data-plan-field="tavoite" placeholder="Matkailija näkee yhdellä katseella, milloin Utsjoella on kaamos ja milloin Helsingissä on yhtä valoisaa kuin Rovaniemellä"></label><span class="plan-row-week">viikko 2</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Käyttäjät ja heidän tärkein tarpeensa omin sanoin<input type="text" data-plan-field="kohde" placeholder="Matkailija: ymmärtää valon määrän ilman numeroita. Yrittäjä: upottaa kuvan sivuilleen"></label><span class="plan-row-week">viikko 2</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Laskentatapa ja perustelu: oma auringonnousuyhtälö / PHP:n date_sun_info / kirjasto<input type="text" data-plan-field="laskentatapa" placeholder="Valinta, referenssi jota vasten testataan, ja mitä valinnasta jää huonommaksi"></label><span class="plan-row-week">viikot 2 ja 4</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Paikkakuntatiedon muoto ja perustelu: JSON-tiedosto / SQLite (ulkoinen geokoodaus vain perustellusti)<input type="text" data-plan-field="tietolahde" placeholder="Muoto, haun toteutus, tietolähde ja lisenssi, mitä tapahtuu kun paikkaa ei löydy"></label><span class="plan-row-week">viikot 2 ja 5</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Julkaisumalli: yksi PHP-palvelin tarjoilee sekä sovelluksen että rajapinnan / frontend erillään<input type="text" data-plan-field="julkaisumalli" placeholder="Oletus: yksi palvelin tarjoilee sovelluksen ja rajapinnan. Jos kaksi, perustele lisätyö"></label><span class="plan-row-week">viikko 3</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Kaaviokirjasto ja perustelu<input type="text" data-plan-field="kaaviokirjasto" placeholder="Vertailu: koko, lisenssi, React-tuki, tooltip- ja merkintätuki, saavutettavuus"></label><span class="plan-row-week">viikko 6</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Komponenttijako ja tilanhallinta: komponentit ja niiden vastuut<input type="text" data-plan-field="komponenttijako" placeholder="LocationForm, LocationList, DaylightChart, YearSelect ja useLocations: kunkin vastuu yhdellä lauseella"></label><span class="plan-row-week">viikot 7 ja 15</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Leikkauspisteen määritelmä ja toleranssi<input type="text" data-plan-field="leikkauspiste" placeholder="Merkinvaihto vai erotus ≤ N min; miten peräkkäiset päivät yhdistetään yhdeksi merkiksi"></label><span class="plan-row-week">viikko 9</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-oma">OMA</span><label class="plan-row-field">Rajaus: mitä EI toteuteta<input type="text" data-plan-field="rajaus" placeholder="Esimerkiksi kirjautuminen, säätiedot, muiden maiden paikat"></label><span class="plan-row-week">viikot 10 ja 16</span></div>
          <p class="plan-calibration"><strong>Ei riitä:</strong> &rdquo;Recharts, koska se on suosittu&rdquo; tai &rdquo;date_sun_info, koska se on valmis&rdquo;. <strong>Riittää:</strong> vaihtoehdot nimettyinä, kriteerit omasta datastasi ja käyttötilanteestasi (napapiirin pohjoispuoliset paikat, 366 pistettä sarjassa, tooltip kosketuksella), valinta ja se, mikä valinnasta jää huonommaksi.</p>

          <div class="plan-row"><span class="plan-tag plan-tag-ohjaaja">OHJAAJA</span><label class="plan-row-field">Lisenssi (kysytään työviikolla 1, päätös viimeistään työviikolla 8)<input type="text" data-plan-field="lisenssi" placeholder="Jätä tyhjäksi, kunnes ohjaaja on päättänyt"></label><span class="plan-row-week">avoin asia</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-ohjaaja">OHJAAJA</span><label class="plan-row-field">Repositoryn julkisuus, tekijänimi ja huoltajan suostumus<input type="text" data-plan-field="julkisuus" placeholder="Jätä tyhjäksi, kunnes ohjaaja on kuitannut"></label><span class="plan-row-week">avoin asia</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-ohjaaja">OHJAAJA</span><label class="plan-row-field">Katselmoijien roolit työviikoille 10 ja 16<input type="text" data-plan-field="katselmoijat" placeholder="Jätä tyhjäksi, kunnes ohjaaja on nimennyt"></label><span class="plan-row-week">avoin asia</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-ohjaaja">OHJAAJA</span><label class="plan-row-field">Julkaisualusta ja ohjaajan testattu polku (ennen työviikkoa 1)<input type="text" data-plan-field="alustalinja" placeholder="Jätä tyhjäksi, kunnes ohjaaja on antanut alustan ja polun"></label><span class="plan-row-week">avoin asia</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-ohjaaja">OHJAAJA</span><label class="plan-row-field">Perusteversion siirtymäsääntö (OPH-6216-2025)<input type="text" data-plan-field="perusteversio" placeholder="Jätä tyhjäksi, kunnes ohjaaja on vahvistanut"></label><span class="plan-row-week">avoin asia</span></div>
          <div class="plan-row"><span class="plan-tag plan-tag-ohjaaja">OHJAAJA</span><label class="plan-row-field">Arvioinnin järjestelyt työviikolle 18<input type="text" data-plan-field="arviointi" placeholder="Jätä tyhjäksi, kunnes ajankohta ja arvioijat on sovittu"></label><span class="plan-row-week">avoin asia</span></div>
"""

MATRIX = """
        <details class="matrix" open>
          <summary><span class="matrix-title">Ohjelmointi</span><span class="matrix-count">11 vaatimusta</span></summary>
          <div class="matrix-list">
            <p class="matrix-group">Opiskelija käyttää ohjelmistokehitysympäristöä</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="p1"><span><strong>käyttää ohjelmointieditoria tai kehitysympäristöä</strong> VS Code, Viten kehityspalvelin, PHP:n sisäänrakennettu palvelin ja selaimen kehittäjätyökalut käytössä työviikolta 1: versiotaulukko, kuvakaappaukset ja käynnistyskomennot README:ssä.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p2"><span><strong>etsii ja korjaa virheitä ohjelmakoodista</strong> Kolme täydellistä virheenkorjausketjua (työviikot 14 ja 17; havainnot myös 4–5, 8–9 ja 16): havainto, toisto, syy, korjauscommit, uusintatesti ja regressiotesti.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p3"><span><strong>testaa ohjelman toimintoja</strong> Testiraportti työviikolta 14: 16 testitapausta odotusarvoineen ennen ajoa (T01–T16); laskenta, rajapinta, muotoilu, leikkauspisteet, karkausvuosi ja virhetilanteet testattuina; ajot työviikoilla 4–9, 11 ja 13.</span></label>
            <p class="matrix-group">Opiskelija ohjelmoi</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="p4"><span><strong>käyttää rakenteista ohjelmointia toteutuksissa</strong> Päivänvalolaskenta omana PHP-moduulina työviikolla 4 (funktiot, ehdot, rajatarkistus, karkausvuosi), muotoilu- ja leikkauspistemoduulit TypeScriptillä työviikoilla 8 ja 9; moduulijako client, server ja project-docs.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p5"><span><strong>kirjoittaa ylläpidettävää ohjelmakoodia</strong> Kolme refaktorointia työviikolla 15 ohjaajan koodikatselmoinnin nimetyistä havainnoista, ennen ja jälkeen -diffeineen ja perusteluineen.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p6"><span><strong>tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia</strong> Lomake, sijaintilista ja kaavionäkymä toteutettu työviikolla 7 työviikon 2 rautalankojen mukaan Tailwindilla ilman valmista komponenttikirjastoa; mobiili ja saavutettavuus työviikolla 12.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p7"><span><strong>tulkitsee suunnitelmia ja toteuttaa ohjelmiston toimintoja</strong> Paikan lisäys, poisto ja duplikaatin esto työviikolla 7 sekä vuosivalinta työviikolla 11 käyttäjätarinoiden ja hyväksymiskriteerien perusteella; rajapinnan toiminnot työviikolla 5. Issue → commit -ketju näkyvissä.</span></label>
            <p class="matrix-group">Opiskelija toimii ohjelmistokehitystiimin jäsenenä</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="p8"><span><strong>sopii tehtävistä tiimin muiden jäsenten kanssa</strong> Viikkopalaveri ohjaajan kanssa työviikoilta 2–17: sovitut tehtävät, arviot ja edellisen viikon toteuma kirjattuina issueihin, ohjaajan nimi ja päivä päiväkirjassa.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p9"><span><strong>etsii ratkaisuvaihtoehtoja ja ratkoo ongelmia yhdessä tiimin kanssa</strong> Kaksi vertailua työviikolla 2 (laskentatapa; paikkakuntatiedon muoto) ja yhteinen päätös ohjaajan kanssa kirjattuna; yhdessä ratkotut ongelmat nimettyinä työviikoilla 3 (julkaisu), 4 (napapiirin laskenta-ansat) ja 11 (merge-konflikti).</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p10"><span><strong>arvioi ratkaisujen toimivuuden yhdessä tiimin kanssa</strong> Katselmointi työviikolla 10: ymmärtääkö asiakkaan roolissa oleva henkilö kaavion ilman selityksiä ja mitä muutetaan. Muistio ja priorisoitu muutoslista, todennus työviikolla 11.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="p11"><span><strong>arvioi omaa toimintaa tiimin jäsenenä</strong> Itsearviointi työviikolla 18 kolmesta nimetystä tilanteesta (työviikon 10 palaute, työviikon 16 testaajan epäröinti, yksi viikkopalaveri, jossa sovittu muuttui) ja ohjaajan vastakommentti.</span></label>
          </div>
        </details>

        <details class="matrix">
          <summary><span class="matrix-title">Ohjelmistokehittäjänä toimiminen</span><span class="matrix-count">14 vaatimusta</span></summary>
          <div class="matrix-list">
            <p class="matrix-group">Opiskelija kommunikoi asiakkaan kanssa</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="s1"><span><strong>selvittää kehitystiimin kanssa asiakkaan tarpeet</strong> Toimeksianto purettu käyttäjätarinoiksi ja käyttäjäryhmiksi työviikolla 2; kysymyslista ja kirjatut vastaukset, rajaus sovittu ja täydennetty katselmoinnissa työviikolla 10.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s2"><span><strong>viestii tekniset asiat asiakaslähtöisesti</strong> Katselmointiesittely työviikolla 10 ja luovutusviesti ohjaajalle asiakkaan roolissa työviikolla 17 ilman teknistä sanastoa, sekä vastaus asiakkaan kysymykseen.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s3"><span><strong>osallistuu version katselmointiin</strong> Kaksi katselmointia: väliversion asiakaskatselmointi työviikolla 10 ja julkaisuehdokkaan julkaisutestaus työviikolla 16. Palaute ja sovitut muutokset kirjattuina.</span></label>
            <p class="matrix-group">Opiskelija suunnittelee ohjelmiston toteutuksen</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="s4"><span><strong>asettaa kehitystiimin kanssa toteutettavat toiminnot tärkeysjärjestykseen</strong> P0-, P1- ja P2-priorisointi ohjaajan kanssa työviikolla 2; P0-ydin eli oikea päivänvalodata, usea paikka ja virheilmoitus toteutettu ensin.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s5"><span><strong>jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi</strong> Käyttäjätarinat pilkottu issueiksi työviikolla 2 hyväksymiskriteereineen, noin puolen tai yhden päivän kokoisina; issue-taulu koko projektin ajan.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s6"><span><strong>suunnittelee ja arvioi kehitystiimin kanssa tehtävien toteuttamista</strong> Työmääräarviot ja toteumat issueissa jokaisen viikkopalaverin jälkeen työviikolta 2; arvio vs. toteuma -vertailu työviikolla 7 ja suunnitelman päivitys, kun arvio petti.</span></label>
            <p class="matrix-group">Opiskelija kehittää ohjelmiston toimintalogiikkaa ja tietovarastoyhteyksiä</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="s7"><span><strong>kehittää ohjelmiston toimintalogiikkaa</strong> Päivänvalolaskenta rajoin 0–1440 ja karkausvuosin työviikolla 4, haun normalisointi ja syötteiden validointi työviikolla 5, leikkauspisteiden laskenta toleranssilla työviikolla 9, yhden paikan virheen käsittely työviikolla 13.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s8"><span><strong>valitsee ohjelmistoon sopivan tietovaraston</strong> Paikkakuntatiedon muodon vertailu työviikolla 2 (JSON-tiedosto vai SQLite; ulkoinen geokoodausrajapinta vain perustellusti) haun, kattavuuden, lisenssin ja verkkoriippuvuuden perusteella; perusteltu valinta suunnitelmassa.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s9"><span><strong>toteuttaa yhteyden tietovarastoon</strong> Paikkakuntatiedon luku ja haku nimellä työviikolla 5 (normalisointi, puuttuva paikka) omassa Geocoder-moduulissa; SQLite-polulla yhteyskerros, JSON-polulla latausmoduuli ja tiedoston rakenne; tietolähteen lisenssi kirjattuna.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s10"><span><strong>hyödyntää rajapintoja ja käsittelee tietoa</strong> Oman rajapinnan kutsu fetchillä työviikoilla 3 ja 6, JSON-vastauksen muunnos kaavion sarjaksi tyypitettynä, lataus- ja virhetilat käsiteltyinä; uudelleenhaku vuosivalinnalla työviikolla 11; ulkoinen geokoodausrajapinta työviikolla 5, jos käytössä.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s11"><span><strong>arvioi ohjelmiston tietoturvaa</strong> Tietoturva-arvio työviikolla 13 oman sovelluksen uhkalistana (uhka, testi, tulos, toimenpide): syötteiden rajat, XSS-testi paikan nimellä, ulkoisen palvelun aikakatkaisu, salaisuudet poissa repositorysta; ajettu syötetaulukko T15.</span></label>
            <p class="matrix-group">Opiskelija versioi ja julkaisee ohjelman</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="s12"><span><strong>käyttää versionhallintaa</strong> Git koko projektin ajan työviikolta 1: tarkoituksenmukaiset commitit, etärepository, ominaisuushaarat ja pull requestit työviikolta 6, tagit. Historia työnäytteenä, koonti työviikoilla 11 ja 15.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s13"><span><strong>liittää ohjelman osan olemassa olevaan versioon</strong> Palautemuutos ominaisuushaarassa työviikolla 11: pull request, itsekatselmointi, konfliktin ratkaisu ja merge pääversioon.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="s14"><span><strong>julkaisee ohjelman tuotantoympäristöön</strong> Tuotantobuild ja julkaisu valittuun alustaan: ensijulkaisu työviikolla 3, julkaisuehdokas työviikolla 16 ja v1.0 työviikolla 17 julkisessa osoitteessa.</span></label>
          </div>
        </details>

        <details class="matrix">
          <summary><span class="matrix-title">Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla</span><span class="matrix-count">7 vaatimusta</span></summary>
          <div class="matrix-list">
            <p class="matrix-group">Opiskelija käyttää kehitysympäristöä</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="k1"><span><strong>ottaa käyttöön ja konfiguroi ohjelmistokomponenttikirjaston käyttöön soveltuvan kehittämisympäristön</strong> React + TypeScript + Vite -projektin luonti työviikolla 1; Viten proxy PHP-rajapintaan ja tuotantobuildin asetukset työviikolla 3; Tailwindin konfigurointi työviikolla 7.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="k2"><span><strong>selvittää ohjelmistokomponenttikirjaston tarjoamat mahdollisuudet ja rajoitteet</strong> Selvitys taulukkona omista P0-tarinoista työviikolla 3: mikä osa tehdään Reactilla ja Vitellä, mikä tulee ulkopuolelta ja mistä; kaaviokirjaston näppäimistörajoite ja kiertoreitti kirjattuina työviikoilla 8 ja 12.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="k3"><span><strong>käyttää ohjelmistokomponenttikirjaston tärkeimpiä toimintoja ja työkaluja</strong> Komponentit, propsit, tila ja hookit (useState, useEffect, oma useLocations), ehdollinen renderöinti ja lomakkeen käsittely osoitettuina työviikoilla 3, 6–8 ja 11–12.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="k4"><span><strong>tuo kehittämisympäristöön ulkoisia komponentteja</strong> Kaksi perusteltua ulkoista komponenttia: kaaviokirjasto työviikolla 6 (vertailu kokeilusarakkeella, koko, lisenssi, riippuvuudet) ja Tailwind CSS työviikolla 7 (mitä se ratkaisee lomakkeessa ja listassa, konfigurointi).</span></label>
            <p class="matrix-group">Opiskelija toteuttaa ohjelmiston ohjelmistokomponenttikirjastolla</p>
            <label class="matrix-row"><input type="checkbox" data-evidence="k5"><span><strong>suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen</strong> Komponenttijako ja vastuut suunnitelmassa työviikolla 2, sovellus toteutettu Reactilla käyttäjätarinoiden mukaan työviikoilla 6–9 ja 11–12, omat ja kirjastoon liittyvät ratkaisut testattuina työviikolla 14.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="k6"><span><strong>julkaisee ohjelmiston asiakkaan ympäristöön</strong> Viten tuotantobuild ja PHP-rajapinta julkaistuna sovittuun alustaan: julkaisuehdokas tagilla v1.0-rc1 työviikolla 16 ja v1.0 työviikolla 17.</span></label>
            <label class="matrix-row"><input type="checkbox" data-evidence="k7"><span><strong>dokumentoi ohjelmiston sovitulla tavalla</strong> README työviikolla 15: käyttöönotto tyhjään ympäristöön, kehityskomennot, rajapinnan kuvaus esimerkkivastauksella ja riippuvuustaulukko lisensseineen; lisäksi asiakkaan pikaohje.</span></label>
          </div>
        </details>
"""

REPLACEMENTS = [
    "",            # 1 kaytto: lead
    "",            # 2 kaytto: osaamistavoite
    "",            # 3 kaytto: P0/P1/P2
    "",            # 4 kaytto: principle-grid
    "",            # 5 kaytto: opettaja-docx
    BRIEF,         # 6 toimeksianto: brief-text
    SOVITTU,       # 7 toimeksianto: sovittu toteutustapa
    RAJAUS,        # 8 toimeksianto: pidä rajaus
    RESURSSIT,     # 9 toimeksianto: resurssit
    OHJAAJA,       # 10 toimeksianto: sovi ohjaajan kanssa
    "",            # 11 toimeksianto: lanka
    TESTIT,        # 12 tyotapa: check-list
    TYOKALUT,      # 13 tyotapa: tooling-list
    "",            # 14 viikko: iso ohjekommentti
    "",            # 15 viikko: loput viikkokortit
    PREFILLED,     # 16 suunnitelma: prefilled
    FIELDS,        # 17 suunnitelma: kentät
    "",            # 18 ailoki
    MATRIX,        # 19 naytto
]

comments = list(re.finditer(r'[ \t]*<!-- TÄYTÄ:[\s\S]*?-->\n?', html))
print(f"TÄYTÄ-lohkoja: {len(comments)}")
for i, c in enumerate(comments, 1):
    print(f"  {i:2d}. {c.group(0).strip()[:70]}")
assert len(comments) == len(REPLACEMENTS), "TÄYTÄ-lohkojen määrä ei täsmää korvauslistaan"
out = []
pos = 0
for c, rep in zip(comments, REPLACEMENTS):
    out.append(html[pos:c.start()])
    out.append(rep.lstrip("\n") if rep else "")
    pos = c.end()
out.append(html[pos:])
html = "".join(out)

# ---------------------------------------------------------------- pienet täydennykset
html = html.replace("T03 · testiajon tuloste ja Utsjoen kaavion kuvakaappaus", "testitapaus T03 · testiajon tuloste ja Utsjoen kaavion kuvakaappaus")
html = html.replace("{{AI_KUVA_ALT}}", "Tekoälyn käytön neljä sääntöä: kysy, tarkista, testaa ja kirjaa.")
html = html.replace(
    '<span><span data-log-count>0 merkintää</span> · loki tulee mukaan koko projektipäiväkirjan lataukseen.</span>',
    '<span><span data-log-count>0 merkintää</span> · loki tulee mukaan koko projektipäiväkirjan lataukseen. Älä syötä henkilötietoja, salaisuuksia tai muuta luottamuksellista aineistoa.</span>')

open(SRC, "w", encoding="utf-8").write(html)
left = re.findall(r"\{\{([A-Z0-9_]+)\}\}", html)
print("Kirjoitettu:", SRC, "| rivejä:", html.count("\n"), "| tokeneita jäljellä:", left, "| TÄYTÄ jäljellä:", html.count("TÄYTÄ:"))
