# TuntiTutka – ohjattu näyttöprojekti

Ohjattu näyttöprojekti: työaikaseurantasovellus mainostoimistolle rakennetaan
toiminto kerrallaan 18 työviikossa ja julkaistaan tuotantoon.

Tämä repository on **opiskelijan ohjaussivusto**, ei itse sovellus. Sivusto
sisältää viikkorungon, ohjatut viikkotehtävät, suunnitelmalomakkeen,
projektipäiväkirjan, AI-lokin, ePerusteista kootun näyttömatriisin (32
vaatimusta) sekä paperisen työpaketin ja opettajan näyttösuunnitelman.
Opiskelijan oma sovellus (Svelte + Vite, Node.js + Express, SQLite) syntyy
opiskelijan omaan GitHub-repositoryyn.

- **Tutkinto:** Tieto- ja viestintätekniikan perustutkinto, diaarinumero
  OPH-6216-2025 (perusteId 9816282).
- **Tutkinnon osat:** Ohjelmointi (11 vaatimusta) · Ohjelmistokehittäjänä
  toimiminen (14) · Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla
  (7) — yhteensä 32 osaamisvaatimusta.
- **Kesto:** 18 työviikkoa, neljä vaihetta (5 + 5 + 5 + 3).

## Päivätön aikataulu

Sivustolla **ei ole yhtään kalenteripäivämäärää**. Viikot ovat työviikkoja
1–18 opiskelijan omasta aloitusviikosta lukien: työviikko 1 on se viikko, jolla
opiskelija aloittaa, ja luovutus on 18. työviikon perjantai. Viikkokorttien
alaotsikko on muotoa `Työviikko N / 18`, ja sama muoto toistuu paperisessa
työpaketissa. Näin sama aineisto käy eri ryhmille eri ajankohtina.

Ryhmäkohtaiset päivämäärät sovitaan erikseen, esimerkiksi opintojakson omassa
työtilassa — niitä ei kirjoiteta tähän repositoryyn.

## Julkaisu

Sivusto on täysin staattinen. Julkaise repositoryn juuresta `main`-haarasta
GitHub Pagesiin: repositoryn asetukset → Pages → Deploy from a branch → `main`
ja `/ (root)`. Tiedosto `.nojekyll` on jo mukana, joten Pages tarjoilee kaikki
tiedostot sellaisenaan.

Paikallinen esikatselu: avaa `index.html` selaimessa tai käynnistä paikallinen
HTTP-palvelin repositoryn juuressa.

## Rakenne

| Tiedosto | Mitä sisältää |
| --- | --- |
| `index.html` | sivuston rakenne, 18 viikkokorttia ja näyttömatriisi |
| `sisalto.js` | projektin koko sisältödata: viikkojen ohjeet, vaiheet, suunnitelmapohja, opettaja-aineisto |
| `app.js` | geneerinen moottori — **ei muokata projektikohtaisesti** |
| `styles.css` | ulkoasu; projektikohtaista vain `:root`-lohkon paletti |
| `kuvitukset.json` | SVG-kuvitusten tekstit ja värit |
| `project-docs/projekti.json` | projektin konfiguraatio ja koontikortin tiedot |
| `assets/` | generoidut SVG-kuvitukset ja faviconit |
| `downloads/` | generoitu työpaketti (PDF ja Word) sekä opettajan asiakirjat |

## Materiaalien generointi

```
python3 tyokalut/tee_kuvitukset.py    # SVG-kuvitukset + faviconit (vaatii Pillow'n)
npm install docx
node tyokalut/tee_lataukset.js        # docx-tiedostot + tyokalut/tyopaketti-print.html
node tyokalut/tarkista.js             # savutesti: index.html ja sisalto.js yhtenäisiä
```

Työpaketin PDF tulostetaan `tyokalut/tyopaketti-print.html`-tiedostosta Chromen
headless-tilassa:

```
<chrome> --headless --disable-gpu --no-sandbox --no-pdf-header-footer \
  --print-to-pdf=downloads/tuntitutka-tyopaketti.pdf tyokalut/tyopaketti-print.html
```

## Tiedot ja yksityisyys

Tehtävien tila, projektipäiväkirja, suunnitelma ja AI-loki tallentuvat vain
käyttäjän selaimen paikalliseen tallennustilaan. Sivusto ei lähetä tietoja
palvelimelle. Toimeksiannon mainostoimisto ja sen projektipäällikkö ovat
kuvitteellisia; sivustolla ei ole henkilönimiä.

## Pedagoginen hyväksyntä

Suunnitelma on läpäissyt pedagogisen Linnea-portin 31.8.2026: ei estäviä
löydöksiä. Auditoinnin kriteeristönä olivat pedagoginen runko (mitoitus,
AI-resilienssi, katselmoinnit, testaus), ePerusteiden 32 vaatimusta ja
suunnittelubriiffin päivätön tila. Portin korjattavat huomiot on käsitelty
suunnitelmassa ennen toteutusta — muun muassa työviikon 6 kuormitusrajaus ja
julkaisutestauksen ajoitus julkaisuehdokasta vasten työviikolla 16, jolloin
työviikko 17 jää estävien korjauksille ja v1.0-julkaisulle.
