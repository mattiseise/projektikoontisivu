# NoppaKauppa – ohjattu näyttöprojekti

Selainpohjainen ohjaussivusto 18 työviikon näyttöprojektille, jossa opiskelija rakentaa
lautapeliliike Nopan Nurkan ensimmäisen verkkokaupan Vue 3:lla ja FastAPI:lla ja julkaisee
sen tuotantoon asiakkaan käyttöön. Maksunvälitys on rajattu pois asiakkaan päätöksellä.

Sivusto sisältää toimeksiannon, viikoittaiset ohjatut tehtävät, teknisen suunnitelman
lomakkeen, projektipäiväkirjan, AI-lokin ja näyttömatriisin. Näyttö annetaan Tieto- ja
viestintätekniikan perustutkinnon (diaarinumero OPH-6216-2025, perusteId 9816282) kolmesta
tutkinnon osasta: Ohjelmointi (11 vaatimusta), Ohjelmistokehittäjänä toimiminen (14) ja
Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (7), yhteensä 32 vaatimusta.

**Tämä repository on ohjaussivusto, ei itse verkkokauppa.** Opiskelija rakentaa
verkkokaupan omaan repositoryynsä; tämä sivusto kertoo, mitä milläkin viikolla tehdään ja
mitä näytössä arvioidaan.

## Päivätön aikataulu

Sivustolla ei ole yhtään kalenteripäivämäärää. Viikot 1–18 ovat **työviikkoja opiskelijan
omasta aloituksesta**, eivät kalenteriviikkoja: viikkokorttien rivi on muodossa
`Työviikko N / 18` ja luovutus on ”18. työviikon perjantai”. Sama aineisto kelpaa siis
mihin tahansa aloitusajankohtaan ja myös eri tahtiin eteneville opiskelijoille.

Käytännössä tämä tarkoittaa kolmea asiaa:

- `sisalto.js`:ssä on `paivaton: true`, `viikot: [1…18]` eikä `lomaViikot`-kenttää.
- Viimeisen viikon päivät ovat ”Päivä 1 … Päivä 5”, eivät viikonpäiviä tai päivämääriä.
- Paperisen työpaketin aikataulusarake on ”Ajoitus”, ja sen rivit lukevat
  `Työviikko N / 18`.

Jos aikataulu joskus sidotaan kalenteriin, muutos tehdään `project-docs/projekti.json`:iin
(poista `paivaton`, anna oikeat ISO-viikot ja vuosi) ja sivusto generoidaan uudelleen.
Yksittäisiä päivämääriä ei kirjoiteta käsin HTML:ään.

## Julkaiseminen

Sivusto on täysin staattinen eikä lähetä tietoja mihinkään.

1. Vie repository GitHubiin.
2. Ota GitHub Pages käyttöön: **Settings → Pages → Source: Deploy from a branch**,
   branch `main`, kansio `/ (root)`.
3. Repositoryn juuressa oleva `.nojekyll` estää Jekyll-käsittelyn. Älä poista sitä.

Paikallinen esikatselu: avaa `index.html` selaimessa tai käynnistä repositoryn juuressa
staattinen HTTP-palvelin (esimerkiksi `python3 -m http.server`).

## Rakenne

| Tiedosto | Mitä sisältää |
| --- | --- |
| `index.html` | sivuston rakenne, viikkokortit, suunnitelmalomake ja näyttömatriisi |
| `sisalto.js` | projektin koko sisältödata: viikkojen ohjeet, vaiheet, suunnitelmapohja, opettaja-aineisto |
| `app.js` | geneerinen moottori: **ei muokata projektikohtaisesti** |
| `styles.css` | ulkoasu; projektikohtaista vain `:root`-lohkon paletti |
| `kuvitukset.json` | SVG-kuvitusten tekstit ja värit |
| `project-docs/projekti.json` | projektin konfiguraatio ja koontikortin tiedot |
| `tyokalut/` | generaattorit ja tarkistusskripti; kopioituvat rungosta, ei muokata |

## Materiaalien generointi

```
python3 tyokalut/tee_kuvitukset.py    # SVG-kuvitukset + faviconit (vaatii Pillow'n)
npm install docx
node tyokalut/tee_lataukset.js        # docx-tiedostot + tyokalut/tyopaketti-print.html
node tyokalut/tarkista.js             # savutesti: index.html ja sisalto.js synkassa
```

Työpaketin PDF tulostetaan Chromen headless-tilassa:

```
<chrome> --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=downloads/noppakauppa-tyopaketti.pdf tyokalut/tyopaketti-print.html
```

`node tyokalut/tarkista.js` on nollatoleranssiportti: se ajetaan aina sisältömuutosten
jälkeen, ja sen pitää päättyä ilman virheitä.

## Tiedot ja yksityisyys

Tehtävien tila, projektipäiväkirja, suunnitelma ja AI-loki tallentuvat vain käyttäjän
selaimen paikalliseen tallennustilaan. Sivusto ei lähetä tietoja palvelimelle, eivätkä
merkinnät siirry opettajalle. Varsinainen näyttöaineisto viedään aina opiskelijan omaan
Git-repositoryyn.

Nopan Nurkka on kuvitteellinen liike. Projektissa ei käsitellä oikeita asiakastietoja
eikä maksuja.

## Pedagoginen hyväksyntä

Suunnitelma on läpäissyt Linnea-portin pedagogisen auditoinnin **31.8.2026**
(`projektit/linnea-portti.md`, luku 2). Portin korjattavat löydökset on toteutettu
suunnitelmassa ennen tätä sivustoa:

- viikon 15 kuorma kevennetty siirtämällä saavutettavuustarkistus viikolle 13 ja
  repositoryn siivous viikolle 16,
- viikon 2 done-ehto tehty toteutuskelpoiseksi: ohjaaja toimii asiakkaan äänenä, kunnes
  katselmoija on nimetty, ja katselmoijien etsintä käynnistetään jo viikolla 1,
- viikolle 11 lisätty toteutusapu (palautemuutoksen ketju ja K2-ketjun kirjauspohja),
- testiluokkien jakauma 6/4/4 kirjattu tietoiseksi poikkeamaksi opettajan aineistoon,
- viimeisen viikon päivät yhtenäistetty muotoon ”Päivä 1 … Päivä 5”.

## Avoimet asiat ohjaajalle

Nämä eivät ole sivuston puutteita vaan tarkoituksella auki, kunnes oppilaitos päättää:
lisenssi, repositoryn julkisuus ja tekijänimi, oppilaitoksen linja julkaisualustasta,
katselmoijien nimeäminen viikoille 10 ja 16 sekä perusteversion (OPH-6216-2025)
siirtymäsäännön tulkinta. Myös `koonti.ryhma` sekä sivuston ja repositoryn osoitteet
täydennetään `project-docs/projekti.json`:iin vasta julkaisuvaiheessa.
