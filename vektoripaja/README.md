# Vektoripaja – ohjattu näyttöprojekti

Ohjattu näyttöprojekti: selaimessa toimiva low-poly 3D-mallinnin, joka tekee Inkscapen
SVG-piirroksesta 3D-mallin ja vie sen .obj-tiedostoksi. Työ tehdään tekoälyavusteisesti:
Copilot (Microsoft 365) suunnittelee, GitHub Copilot toteuttaa, opiskelija päättää ja tarkistaa.

- Aikataulu: vk 40/2026 (ma 28.9.) – vk 9/2027 (pe 5.3.), 18 työviikkoa.
  Lomat vk 42, joululoma 18.12.–10.1. (vk 51 on neljä työpäivää) ja talviloma vk 8.
- Peruste: Tieto- ja viestintätekniikan perustutkinto, OPH-6216-2025 (perusteId 9816282).
  Ohjelmointi (10 vaatimusta, p5 osoitetaan muulla tavalla), Ohjelmistokehittäjänä
  toimiminen (14) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (7): 31 vaatimusta.
- Pedagoginen tarkistus: Linnea-portti hyväksyi viikkorungon kierroksella 3, **23.9.2026**
  (`material-pipeline-output/vektoripaja/01-runko-v3.md`, auditit `audit/linnea-r1…r3.md`).
- Moottori v2.4.1 opt-in-ominaisuuksin: oma teema (`teema`), työsykli (`sykli`),
  viikkorutiini, "Jos et tiedä, mitä tehdä" (`josJumissa`), kuvaohjeet (`kuvakaappaukset.json`),
  vuodenvaihde (`vuosi: [2026, 2027]`) ja lyhyt viikko 51 (`lyhyetViikot`).

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
| `pohjat/` | opiskelijan repositoryn pohjatiedostot (ladataan viikoilla 40 ja 43) |
| `app.js` | geneerinen moottori — **ei muokata projektikohtaisesti** |
| `styles.css` | ulkoasu; projektikohtaista vain `:root`-lohkon paletti |
| `kuvitukset.json` | faviconin ja AI-merkin lähde (sivun SVG-kuvitukset on jätetty pois) |
| `teematesti/` | teematestisivu, jolla opiskelija hyväksyi ulkoasun ennen rakentamista |

## Muokkaus ja generointi

```
python tyokalut/rakenna_index.py      # index.html pohjasta ja taulukoista
node tyokalut/tee_pohjat.js           # pohjat/*.md viikon 40 kopioitavista pohjista
npm install docx
node tyokalut/tee_lataukset.js        # docx-tiedostot + tyopaketti-print.html ja -tuloste.html
python tyokalut/tee_kuvitukset.py     # faviconit ja AI-merkki (vaatii Pillow'n); poista syntyvät kuvitus-SVG:t
node tyokalut/tarkista.js             # nollatoleranssi virheille
```

PDF:t Chromen headless-tilassa:

```
chrome --headless --no-pdf-header-footer --print-to-pdf=downloads/vektoripaja-tyopaketti.pdf tyokalut/tyopaketti-print.html
chrome --headless --no-pdf-header-footer --print-to-pdf=downloads/vektoripaja-tyopaketti-tuloste.pdf tyokalut/tyopaketti-tuloste.html
```

## Kuvaohjeiden kuvat

`kuvakaappaukset.json` listaa 19 kuvaohjetta. Yksi (`github-uusi-issue`) on mallikuva, muut
näkyvät paikanpitäjinä, kunnes kuva lisätään. Kuva otetaan GitHubin Dark high contrast-,
VS Coden Dark High Contrast- tai M365 Copilotin näkymästä demorepositoryssa, rajattuna yhteen
kohtaan. Tallenna kuva kansioon `assets/kuvakaappaukset/`, täytä `tiedosto`, `leveys`, `korkeus`
ja `pvm`, tarkista kohtien tekstit kuvaa vasten ja lisää jokaiselle kohdalle `alue`
(`[x, y, leveys, korkeus]` prosentteina). `tarkista.js` varoittaa puuttuvista kuvista.

## Tiedot ja yksityisyys

Tehtävien tila, työsykli, projektipäiväkirja, suunnitelma ja AI-loki tallentuvat vain käyttäjän
selaimen paikalliseen tallennustilaan. Sivusto ei lähetä tietoja palvelimelle. Opiskelijan
repository on julkinen: itsearviointi, ohjaajan kommentit sekä testaajien nimet ja sanatarkat
lausumat toimitetaan ohjaajalle Teamsissa tai sähköpostilla, eivät repositoryyn.
