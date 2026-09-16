# Valokaari – ohjattu näyttöprojekti

Ohjattu näyttöprojekti: päivänvalon pituuden visualisointi Suomen paikkakunnille
rakennetaan PHP-rajapinnalla ja React-käyttöliittymällä 18 työviikossa ja
julkaistaan tuotantoon.

Tämä kansio on **opiskelijan ohjaussivusto**, ei itse sovellus. Sivusto
sisältää viikkorungon, ohjatut viikkotehtävät, suunnitelmalomakkeen,
projektipäiväkirjan, AI-lokin, projektikohtaisen sanaston, ePerusteista kootun
näyttömatriisin (32 vaatimusta) sekä paperisen työpaketin ja opettajan
näyttösuunnitelman. Opiskelijan oma sovellus (PHP 8.2+, React + TypeScript +
Vite, Tailwind CSS, kaaviokirjasto) syntyy opiskelijan omaan
GitHub-repositoryyn.

- **Toimeksianto:** kuvitteellinen Lapin matkailuyritys Revontuli Travel haluaa
  verkkosivulleen kaavion, joka näyttää päivän pituuden vuoden jokaisena
  päivänä millä tahansa Suomen paikkakunnalla: usea paikka samassa kuvassa,
  tooltip, kaamos ja yötön yö korostettuina, leikkauspisteet, vuosivalinta.
- **Tutkinto:** Tieto- ja viestintätekniikan perustutkinto, diaarinumero
  OPH-6216-2025 (perusteId 9816282).
- **Tutkinnon osat:** Ohjelmointi (11 vaatimusta) · Ohjelmistokehittäjänä
  toimiminen (14) · Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla
  (7). Yhteensä 32 osaamisvaatimusta.
- **Kesto:** 18 työviikkoa, neljä vaihetta (5 + 5 + 5 + 3). Katselmoinnit
  työviikoilla 10 ja 16, julkaisuehdokas 16, v1.0 17, näyttö 18.
- **Testauksen minimit:** 16 testitapausta (T01–T16) kolmessa luokassa,
  3 täydellistä virheenkorjausketjua, 2 ulkopuolista testaajaa.

## Pedagoginen tarkistus

Viikkorunko ajettiin material-pipeline-skillin Linnea-portin läpi ennen
sisällön kirjoittamista: kierros 1 **korjattava** (23 löydöstä, 5 rakenteellista),
kierros 2 **hyväksytty** 16.9.2026 (9 kirjoitusvaiheen täsmennystä, jotka on viety
viikkoteksteihin). Raportit ja hyväksytty runko: `opettajalle/`. Kielenhuolto:
Börje (`opettajalle/audit-borje.md`).

## Ohjaajan tehtävät ennen työviikkoa 1

Runko edellyttää ohjaajalta valmistelua, jota ilman työviikkoa 3 ei voi tehdä:

1. **Julkaisualusta:** valitse alusta, joka ajaa PHP 8.2:ta ja rakentaa
   staattisen `client/dist`-kansion (esim. Render tai Fly.io Dockerfilella,
   Railway, oppilaitoksen PHP-palvelin). Kokeile se itse ja anna opiskelijalle
   testattu polku: build alustalla, `client/dist` gitignoressa, automaattinen
   julkaisu `main`-haarasta, staattisten tiedostojen tarjoilu PHP:stä.
2. **Kuntaluettelo koordinaatteineen** varapoluksi työviikolle 5 (noin 309
   kuntaa, lähde ja lisenssi kirjattuna, esim. GeoNames CC BY 4.0).
3. **Viikkopalaverit** työviikoilla 2–17 (10 min, voi olla 3–4 opiskelijan
   ryhmäkierros), koodikatselmointi työviikolla 14, asiakasvastaus 17,
   vastakommentti 18. Katselmoijat ja lisenssipäätös työviikkoon 8 mennessä.

Tarkemmin: `sisalto.js` → `opettaja.nayttosuunnitelma.huomiot` ja
`downloads/nayttosuunnitelma.docx`.

## Päivätön aikataulu

Sivustolla **ei ole yhtään kalenteripäivämäärää**. Viikot ovat työviikkoja
1–18 opiskelijan omasta aloitusviikosta lukien: työviikko 1 on se viikko, jolla
opiskelija aloittaa, ja luovutus on 18. työviikon perjantai. Viikkokorttien
alaotsikko on muotoa `Työviikko N / 18`, ja sama muoto toistuu paperisessa
työpaketissa. Näin sama aineisto käy eri ryhmille eri ajankohtina.

## Rakenne

| Tiedosto | Mitä sisältää |
| --- | --- |
| `index.html` | sivuston rakenne, viikkokortit ja näyttömatriisi |
| `sisalto.js` | projektin koko sisältödata: viikkojen ohjeet, vaiheet, sanasto, suunnitelmapohja, opettaja-aineisto |
| `app.js` | geneerinen moottori (v2.3), ei muokata projektikohtaisesti |
| `styles.css` | ulkoasu; projektikohtaista vain `:root`-lohkon paletti |
| `kuvitukset.json` | SVG-kuvitusten tekstit ja värit |
| `project-docs/projekti.json` | koonnin ja päivitysten lähde |
| `opettajalle/` | hyväksytty viikkorunko, Linnean ja Börjen raportit |
| `tyokalut/` | `tarkista.js`, `tee_kuvitukset.py`, `tee_lataukset.js`, `index.runko.html` |

## Julkaisu ja esikatselu

Sivusto on täysin staattinen ja julkaistaan projektikoontisivun alikansiona
GitHub Pagesiin: `https://mattiseise.github.io/projektikoontisivu/valokaari/`.
Paikallinen esikatselu: käynnistä HTTP-palvelin koontirepon juuressa ja avaa
`valokaari/index.html`.

## Tiedot ja yksityisyys

Tehtävien tila, projektipäiväkirja, suunnitelma ja AI-loki tallentuvat vain
käyttäjän selaimen paikalliseen tallennustilaan. Sivusto ei lähetä tietoja
palvelimelle. Revontuli Travel ja sen yrittäjä ovat kuvitteellisia.

## Materiaalien generointi

```
node tyokalut/tarkista.js             # rakenne, tunnukset, termistö: nollatoleranssi virheille
python3 tyokalut/tee_kuvitukset.py    # SVG-kuvitukset + faviconit (vaatii Pillow'n)
npm install --no-save docx && node tyokalut/tee_lataukset.js   # docx-tiedostot + tyopaketti-print.html
```

Työpaketin PDF: tulosta `tyokalut/tyopaketti-print.html` Chromen headless-tilassa
(`--print-to-pdf`) tiedostoksi `downloads/valokaari-tyopaketti.pdf`.
