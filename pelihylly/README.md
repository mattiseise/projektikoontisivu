# PeliHylly – ohjattu näyttöprojekti

Ohjattu näyttöprojekti: oma pelikirjastopalvelu rakennetaan Reactilla ja Expressillä viikko
kerrallaan 18 työviikossa ja julkaistaan tuotantoon.

## Mikä tämä sivusto on

Tämä repository sisältää **ohjaussivuston**, ei itse pelikirjastopalvelua. Sivusto ohjaa
opiskelijan 18 työviikon näyttöprojektin läpi: se sisältää toimeksiannon, suunnitelmalomakkeen,
18 viikkokorttia tehtävineen ja toteutusapuineen, projektipäiväkirjan, AI-lokin, näyttömatriisin
(32 osaamisvaatimusta) sekä paperisen työpaketin ja opettajan näyttösuunnitelman.

Opiskelijan varsinainen työ — React-sovellus, Express-palvelin, SQLite-tietokanta ja
dokumentaatio — tehdään **eri repositoryyn** kansioihin `client/`, `server/` ja `project-docs/`.

Näyttö kattaa kolme tutkinnon osaa (Tieto- ja viestintätekniikan perustutkinto,
diaarinumero OPH-6216-2025, perusteId 9816282):

| Tutkinnon osa | Vaatimuksia | Tunnukset |
| --- | --- | --- |
| Ohjelmointi | 11 | p1–p11 |
| Ohjelmistokehittäjänä toimiminen | 14 | s1–s14 |
| Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla | 7 | k1–k7 |

## Päivätön tila

Sivusto on **päivätön**: viikot 1–18 ovat työviikkoja opiskelijan omasta aloituksesta, eivät
kalenteriviikkoja. Sivustolla, työpaketissa ja opettajan aineistossa ei ole yhtään
kalenteripäivämäärää, joten sama paketti käy mille tahansa aloitusajankohdalle ja mille tahansa
tahdille. Viikkokorteissa lukee `Työviikko N / 18`, ja luovutus ajoittuu työviikon 18 loppuun.

Käytännössä tämä tarkoittaa, että ohjaaja sopii aloituspäivän opiskelijan kanssa eikä
aikataulua tarvitse päivittää lukuvuoden vaihtuessa.

## Pedagoginen hyväksyntä

Suunnitelma on läpäissyt Linnea-portin (pedagoginen auditointi kriteeristönä pedagoginen runko,
ePerusteiden 32 vaatimusta ja suunnittelubriiffi). **Hyväksyntäpäivä 31.8.2026.** Auditoinnissa
todennettiin kattavuus 32/32, viikkokohtainen AI-resilienssi, havaittavat valmis kun -ehdot,
mitoitus (4 vaihetta, 14 testitapausta, 3 virheenkorjausketjua, 2 ulkopuolista katselmointia)
sekä päivättömyys.

## Rakenne

| Tiedosto | Mitä sisältää |
| --- | --- |
| `index.html` | sivuston rakenne, viikkokortit ja näyttömatriisi |
| `sisalto.js` | projektin koko sisältödata: viikkojen ohjeet, vaiheet, suunnitelmapohja, opettaja-aineisto |
| `app.js` | geneerinen moottori — **ei muokata projektikohtaisesti** |
| `styles.css` | ulkoasu; projektikohtaista vain `:root`-lohkon paletti |
| `kuvitukset.json` | SVG-kuvitusten tekstit ja värit |
| `project-docs/projekti.json` | projektin konfiguraatio (viikot, vaiheet, paletti, tokenit, koontikortti) |
| `tyokalut/` | generaattorit ja tarkistusskripti — **ei muokata projektikohtaisesti** |
| `assets/`, `downloads/` | generoidut SVG-kuvitukset, faviconit sekä docx- ja pdf-lataukset |

## Julkaiseminen

Sivusto on täysin staattinen eikä vaadi rakennusvaihetta.

1. Vie repository GitHubiin.
2. Repositoryn asetuksissa: **Settings → Pages → Source: Deploy from a branch**,
   branch `main` ja kansio `/ (root)`.
3. Sivusto ilmestyy osoitteeseen `https://<käyttäjä>.github.io/pelihylly/`.

Repositoryn juuressa on `.nojekyll`, joten alaviivalla alkavat kansiot toimivat sellaisenaan.
Mikä tahansa muu staattinen isännöinti (Netlify, Cloudflare Pages) toimii yhtä lailla: julkaise
repositoryn juuri sellaisenaan.

## Paikallinen esikatselu

Avaa `index.html` selaimessa tai käynnistä paikallinen HTTP-palvelin repositoryn juuressa.

## Tiedot ja yksityisyys

Tehtävien tila, projektipäiväkirja, suunnitelma ja AI-loki tallentuvat vain käyttäjän selaimen
paikalliseen tallennustilaan. Sivusto ei lähetä tietoja palvelimelle. Rasti sivustolla ei ole
palautus — työnäyte on aina opiskelijan omassa Git-repositoryssa.

## Materiaalien generointi

```
npm install docx
node tyokalut/tee_lataukset.js        # docx-tiedostot + tyopaketti-print.html
python3 tyokalut/tee_kuvitukset.py    # SVG-kuvitukset + faviconit (vaatii Pillow'n)
node tyokalut/tarkista.js             # savutesti: index.html ja sisalto.js synkassa
```

Työpaketin PDF: tulosta `tyokalut/tyopaketti-print.html` Chromen headless-tilassa
(`--print-to-pdf`) tiedostoksi `downloads/pelihylly-tyopaketti.pdf`.
