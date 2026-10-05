# Vektoripaja – ohjattu näyttöprojekti

Ohjattu näyttöprojekti: Windowsilla toimiva low-poly 3D-mallinnin (Python-työpöytäsovellus), joka
tekee Inkscapen SVG-piirroksesta 3D-mallin ja vie sen .obj-tiedostoksi. Työ tehdään tekoälyavusteisesti:
Microsoft 365 Copilot auttaa suunnittelussa ja Tiedosto-kaistan toteutuksessa. GitHub Copilot
avustaa VS Codessa. Opiskelija päättää ja tarkistaa.

- Aikataulu: vk 40/2026 (ma 28.9.) – vk 9/2027 (pe 5.3.), 18 työviikkoa.
  Lomat vk 42, joululoma 18.12.–10.1. (vk 51 on neljä työpäivää) ja talviloma vk 8.
- Peruste: Tieto- ja viestintätekniikan perustutkinto, OPH-6216-2025 (perusteId 9816282).
  Ohjelmointi (10 vaatimusta, p5 osoitetaan muulla tavalla), Ohjelmistokehittäjänä
  toimiminen (14) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (7): 31 vaatimusta.
- Pedagoginen tarkistus: Linnea-portti hyväksyi viikkorungon kierroksella 3, **23.9.2026**
  (`material-pipeline-output/vektoripaja/01-runko-v3.md`, auditit `audit/linnea-r1…r3.md`).
- **Selkeysuudistus 5.10.2026 (moottori v2.8, Matin ja opiskelijan hyväksymä brief):** kirjoitus tehdään vain
  VS Codessa, ja dokumentit ovat valmiina tiedostoina opiskelijan repositoryn `project-docs`-kansiossa
  (`dokumentitRepossa`). Jokainen viittaus on linkki (`[[ohje:…]]`, `[[tiedosto:…]]`, `[[github:…]]`),
  toistuvat taidot ovat Työtapa-näkymän perusohjeissa ("Näin teet", 23 ohjetta) ja jokaisesta dokumentista on
  tiedostokortti ("Dokumentit"). Jokainen osatehtävä on muodossa otsikko, missä, tee ja näet nyt.
  `tarkista.js` tarkistaa tiukassa tilassa (`selkeys: "tiukka"`). Selaimeen kirjoitettu teksti ladataan
  siirtymänapista yhtenä tiedostona (viikon 41 ensimmäinen työvaihe). Kloonipolku: `KLOONIPOLKU`
  sisalto.js:n alussa (tyhjä = ohje käyttää File → Open Recent -listaa).
- Moottori v2.8 (sama kuin muissa näyttöprojekteissa) opt-in-ominaisuuksin: oma teema (`teema`),
  yhtenäiset viikko-ohjeet (`yhtenaisetViikot`, staattisesti `rakenna_index.py`:llä), työsykli (`sykli`),
  viikkorutiini, "Jos et tiedä, mitä tehdä" (`josJumissa`), kuvaohjeet (`kuvakaappaukset.json`),
  vuodenvaihde (`vuosi: [2026, 2027]`) ja lyhyt viikko 51 (`lyhyetViikot`).
- **Saavutettava ulkoasu:** värit, fonttikoko, kirjain-, sana- ja rivivälit,
  rivinpituus, 2 px reunat, 3 px fokus ja yksipalstaisuus tulevat `teema`-lohkosta ja jaetun
  `styles.css`:n `html[data-teema]`-säännöistä. Moottorin päivityksessä ulkoasu todennetaan
  vertaamalla lasketut tyylit ennen ja jälkeen kaikissa näkymissä leveänä ja kapeana (v2.7.4:
  0 tyylieroa). Vaihekuva `assets/projektin-vaiheet.svg` tehdään `tyokalut/tee_projektikuvat.py`:llä
  suuremmalla tekstillä; jaettu `tee_vaihekuva.js` ei kirjoita sitä (ei `vaihekuva`-kenttää).

Sivusto on staattinen ja julkaistaan koontisivun repositoryn mukana GitHub Pagesiin:
<https://mattiseise.github.io/projektikoontisivu/vektoripaja/>

## Rakenne

| Tiedosto | Mitä sisältää |
| --- | --- |
| `index.html` | **generoitu** (`tyokalut/rakenna_index.py`): näkymät, viikkokortit ja näyttömatriisi |
| `tyokalut/index.runko.html` | index.html:n pohja: näkymien tekstit (toimeksianto, työtapa, suunnitelma …) |
| `tyokalut/rakenna_index.py` | viikkojen tehtävät, Näytä-rivit, lomakortit ja matriisin työnäytteet |
| `sisalto.js` | viikkojen ohjeet, työsykli, sanasto, suunnitelmapohja ja opettaja-aineisto |
| `kuvakaappaukset.json` | kuvaohjeiden lähde: mitä kuvataan, alt-tekstit ja numeroidut kohdat |
| `pohjat/` | opiskelijan repositoryn pohjatiedostot: `PROJEKTIN-TILA.md`, `tehtavakortti.md`, `copilot-instructions.md` ja `havainto.md` (tulevat repositoryyn ohjaajan pull requestilla) |
| `pohjat/python-pohja/project-docs/` | **generoitu** (`tyokalut/tee_pohjat.js` tiedostokorteista): dokumenttipohjat suunnitelma, projektipäiväkirja (työviikot päivämäärineen), AI-loki, kysymykset, kirjastot, tietoturva, katselmointi, julkaisutesti, saavutettavuus ja `kuvat/` |
| `pohjat/python-pohja/` | viikon 41 valmis kuutiosovellus ja testi: julkaisu (`release.yml`, `vektoripaja.spec`, `rakenna_exe.bat`), itsetesti, teema, `requirements.txt` ja `tarkista_ymparisto.py`; pakataan tiedostoksi `pohjat/vektoripaja-pohja.zip` |
| `app.js` | geneerinen moottori — **ei muokata projektikohtaisesti** |
| `styles.css` | ulkoasu; projektikohtaista vain `:root`-lohkon paletti |
| `kuvitukset.json` | faviconin ja AI-merkin lähde (sivun SVG-kuvitukset on jätetty pois) |
| `teematesti/` | teematestisivu, jolla opiskelija hyväksyi ulkoasun ennen rakentamista |

## Muokkaus ja generointi

```
python tyokalut/rakenna_index.py      # index.html pohjasta ja taulukoista
node tyokalut/tee_pohjat.js           # pohjat/python-pohja/project-docs/ tiedostokorteista
python tyokalut/tee_python_pohja.py   # pohjat/vektoripaja-pohja.zip kansiosta pohjat/python-pohja/
npm install docx
node tyokalut/tee_lataukset.js        # docx-tiedostot + tyopaketti-print.html ja -tuloste.html
python tyokalut/tee_kuvitukset.py     # faviconit ja AI-merkki (vaatii Pillow'n); poista syntyvät kuvitus-SVG:t
node tyokalut/tarkista.js             # nollatoleranssi virheille
```

PDF:t headless-selaimella (Google Chrome voi jäädä roikkumaan tulostuksen jälkeen; Playwrightin
`chrome-headless-shell` sulkeutuu itse):

```
chrome --headless --no-pdf-header-footer --print-to-pdf=downloads/vektoripaja-tyopaketti.pdf tyokalut/tyopaketti-print.html
chrome --headless --no-pdf-header-footer --print-to-pdf=downloads/vektoripaja-tyopaketti-tuloste.pdf tyokalut/tyopaketti-tuloste.html
```

## Kuvaohjeiden kuvat

Aloitusnäkymä kertoo tavoitteen ja viisi vaihetta. Jokaisen työviikon alussa on vaihepolku,
yksi yhteys kokonaisprojektiin ja lyhyt tavoite. Projektin 126 työvaihetta on jaettu
osatehtäviin (selkeysuudistus 5.10.2026: yksi osatehtävä on yksi toimenpide, ja jokaisessa on
Missä, Tee ja Näet nyt). Vanhat tehtävätunnukset säilyvät, ja moottori siirtää aiemmat rastit
osatehtäviin (`versio`, `vanha`, `perii`). Viikon työvaihe on viikon sivun osa; GitHub-issue on
tehtäväkortti, johon työsykliä käytetään. Sisältö on lukutestattu ilman taustatietoa kolmesti
(viikko 41 neljästi), jokaisen kierroksen havainnot on korjattu, ja teksti on kielenhuollettu (Börje).

Omat havainnekuvat `assets/piirroksesta-malliksi.svg` ja `assets/projektin-vaiheet.svg`
syntyvät komennolla `python tyokalut/tee_projektikuvat.py`. Ne ovat muokattavia SVG-kuvia,
eivät kuvakaappauksia valmiista sovelluksesta. Sama sisältö on myös HTML-tekstinä.
Kuvat ovat tätä projektia varten tehtyjä omia kuvituksia, eivät verkkolähteiden kuvia.

`kuvakaappaukset.json` listaa 28 kuvaohjetta, joista jokaisella on kuva. Mukana on 27 lisättyä kuvaa sekä aiempi issue-mallikuva. Kuvat sisältävät omia kuvakaappauksia, verkkolähteiden esimerkkejä sekä kaksi kuvaksi ladottua paikallista tulostetta. Erot ja versiot kerrotaan kuvateksteissä.

[Lähteet, käyttöehdot ja rajaukset](assets/kuvakaappaukset/LAHTEET.md). Verkkokuvan `pvm` kertoo alkuperäisen ajankohdan, jos se tunnetaan, ja lisäyspäivän. Aluemerkinnät koskevat vain kuvassa näkyviä vaiheita.

## Tiedot ja yksityisyys

Tehtävien rastit ja työsyklin askel tallentuvat vain käyttäjän selaimen paikalliseen tallennustilaan.
Suunnitelma, projektipäiväkirja ja AI-loki kirjoitetaan VS Codessa opiskelijan repositoryyn (v2.8);
ennen 5.10.2026 selaimeen kirjoitettu teksti ladataan siirtymänapista. Sivusto ei lähetä tietoja palvelimelle. Opiskelijan
repository on julkinen: itsearviointi, ohjaajan kommentit sekä testaajien nimet ja sanatarkat
lausumat toimitetaan ohjaajalle Teamsissa tai sähköpostilla, eivät repositoryyn.

## Viikko 41: työkalujen käyttöönotto

Viikon tavoite on saada valmiiksi tehty kuutio pyörimään opiskelijan ruudulla.
Python-pohjassa ovat valmiina `vektoripaja/ikkuna.py`, `vektoripaja/kierto.py` ja
`tests/test_kierto.py`. Opiskelija purkaa pohjan, asentaa kirjastot, käynnistää
sovelluksen ja ajaa valmiit tarkistukset. Koodin teettämistä, testin kirjoittamista,
tehtäväkortteja tai releasea ei vaadita tällä viikolla. Aiemmat dokumentit ja
selaimen tekstit säilytetään viikon kahdessa ensimmäisessä valmistelukohdassa.
Asiakkaiden vastaukset ja kirjastojen lisenssit käsitellään viikolla 43.

`assets/kuutio-pyorii.gif` on renderöity valmiin kuution geometriasta, väreistä ja
kiertokulma-funktiosta: 480 × 360, yksi täysi kierros noin kahdessa sekunnissa.
Animaatio toistuu kerran ja jää paikalleen; kuvateksti ja alt-teksti kertovat tavoitteen.
