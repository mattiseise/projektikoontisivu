/*
 * sisalto.js – Vektoripajan koko sisältödata.
 *
 * app.js on geneerinen moottori (v2.4.1) eikä sisällä projektikohtaista tekstiä.
 * Opiskelijalle näkyvä teksti on tässä tiedostossa, index.html:ssä ja
 * kuvakaappaukset.json:ssa.
 *
 * Runko: Linnea-portti hyväksyi viikkorungon 23.9.2026 kierroksella 3
 * (material-pipeline-output/vektoripaja/01-runko-v3.md). Ryhmän A tarkennukset
 * on viety tähän sisältöön.
 *
 * Opt-in-ominaisuudet: teema, sykli, josJumissa, viikkorutiini, kuvaohjeet,
 * lyhyetViikot ja poikkeamat. Jakso ylittää vuodenvaihteen: viikot annetaan
 * kalenterijärjestyksessä ja vuosi on [2026, 2027].
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "vektoripaja",
  nimi: "Vektoripaja",
  vuosi: [2026, 2027],
  viikot: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  lomaViikot: [42, 52, 53, 1, 8],
  lyhyetViikot: { 51: 4 },
  tiivisSivupalkki: true,
  aloitusNappi: "Aloita viikosta 40",
  apuOtsikko: "Tarvitsen toteutusapua",

  /* Tietoiset mitoituspoikkeamat (tarkista.js raportoi INFO-rivinä). */
  poikkeamat: {
    vaiheita: "viisi vaihetta: vaihe A on harjoitusvaihe, ja viikot 43–51 olisivat yhtenä vaiheena liian pitkä (Linnea r1–r3)",
    viikon43tehtavat: "viikolla 43 on viisi tehtävää, koska yhdistelmätehtävät jaettiin yhden asian rasteiksi (Linnea r3, B3)"
  },

  paletti: {
    aksentti: "#1fa4e3",
    aksenttiTumma: "#0e6f9e",
    taulukkoSavy: "#e6f4fb",
    riviSavy: "#f3fafd"
  },

  /* ---- opiskelijan teema (brief 6.1). Teematesti hyväksytty 23.9.2026: yksi väri ja tilasymbolit. ---- */
  teema: {
    tausta: "#000000",
    teksti: "#1fa4e3",
    otsikot: "#1fa4e3",
    korostus: "#1fa4e3",
    korostusTeksti: "#000000",
    kehys: "#1fa4e3",
    fontti: "Arial, sans-serif",
    perusfontti: "1.5rem",
    kirjainvali: "1px",
    sanavali: "0.3rem",
    rivikorkeus: 1.6,
    rivinPituus: "60ch",
    reuna: "2px",
    fokus: "3px",
    yksiPalsta: true,
    tilaTekstit: true,
    tuloste: { tausta: "#ffffff", teksti: "#000000", otsikot: "#000000", koko: 18 }
  },

  tekstit: {
    exampleLabel: "✓ Esimerkki riittävästä tarkkuudesta",
    notEnoughLabel: "✗ Tämä ei vielä riitä",
    stepsLead: (n) => `${n} askelta · tee järjestyksessä`
  },

  /* ---- vaiheet ---- */
  vaiheet: [
    { tunnus: "A", lyhyt: "Työkalut", otsikko: "Työkalut ja harjoitussykli", viikot: [40, 41, 42], vari: "#1fa4e3" },
    { tunnus: "B", lyhyt: "MVP-ydin", otsikko: "MVP-ydin: SVG:stä muotoja", viikot: [43, 44, 45, 46, 47], vari: "#1fa4e3" },
    { tunnus: "C", lyhyt: "MVP valmiiksi", otsikko: "MVP valmiiksi ja katselmointi", viikot: [48, 49, 50, 51, 52, 53, 1], vari: "#1fa4e3" },
    { tunnus: "D", lyhyt: "Jatkokehitys", otsikko: "Jatkokehitys katselmoinnin pohjalta", viikot: [2, 3, 4, 5], vari: "#1fa4e3" },
    { tunnus: "E", lyhyt: "Julkaisu ja näyttö", otsikko: "Julkaisu ja näyttö", viikot: [6, 7, 8, 9], vari: "#1fa4e3" }
  ],

  /* ---- viikkonavigaation lyhyet nimet ---- */
  viikkoNimet: {
    40: "Aloitus",
    41: "Harjoitussykli",
    42: "Syysloma",
    43: "SVG-tuonti",
    44: "Hierarkia",
    45: "Revolve",
    46: "Inflate ja kamera",
    47: "Transformit",
    48: "Pivot",
    49: "OBJ-vienti",
    50: "Tallennus ja MVP",
    51: "Katselmointi",
    52: "Joululoma",
    53: "Joululoma",
    1: "Joululoma",
    2: "Paluuviikko",
    3: "Päivitä SVG",
    4: "Jousto ja P1",
    5: "Saavutettavuus",
    6: "Julkaisutesti",
    7: "v1.0",
    8: "Talviloma",
    9: "Näyttö"
  },

  /* ---- viikkotyyppien kehystekstit ---- */
  kehykset: {
    pohjustus: { kicker: "Viikon jälkeen", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    feature: { kicker: "Viikon tulos", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    katselmointi: { kicker: "Katselmointi", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    julkaisu: { kicker: "Julkaisuviikko", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    naytto: { kicker: "Näyttöviikko", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" }
  },

  /* ---- viikkorutiini: sama joka viikko (runko v3 § 6.1) ---- */
  viikkorutiini: {
    otsikko: "Viikkorutiini",
    johdanto: "Nämä rastit eivät ole viikon tehtäviä. Ne ovat joka viikon vakiotehtävät.",
    kohdat: [
      { milloin: "Maanantai", teksti: "Aloita uusi Copilot-keskustelu. Liitä siihen tilatiedosto." },
      { milloin: "Maanantai", teksti: "Tarkista krediitit GitHubin käyttönäkymästä. Kirjaa luku päiväkirjaan." },
      { milloin: "Maanantai tai tiistai", teksti: "Käy viikkopalaveri ohjaajan kanssa. Selitä ääneen edellisen viikon funktio. Jos edellisellä viikolla ei ollut funktiota, kerro, mitä teit ja mihin jäit. Sovi viikon kortit. Kirjaa ne issueihin: \"Sovittu viikkopalaverissa pp.kk.\"" },
      { milloin: "Perjantai", teksti: "Selitä yksi viikon funktio selityspohjalla päiväkirjaan, jos viikolla tehtiin funktio. Lataa päiväkirja. Tee commit." }
    ]
  },

  /* ---- "Jos et tiedä, mitä tehdä": sama joka viikko (runko v3 § 6.2) ---- */
  josJumissa: {
    otsikko: "Jos et tiedä, mitä tehdä",
    johdanto: "Käy kysymykset läpi järjestyksessä. Kun kysymys sopii tilanteeseesi, toimi sen ohjeen mukaan.",
    kohdat: [
      { kysymys: "1. Onko GitHubissa avoin issue, jolla on label tehtäväkortti?", ohje: "Avaa issue. Katso sen lopusta syklin tarkistuslista. Jatka ensimmäisestä askeleesta, jonka rasti puuttuu." },
      { kysymys: "2. Ei avointa korttia?", ohje: "Avaa `PROJEKTIN-TILA.md`. Katso kohta Seuraavana. Aloita työsyklin askeleesta 1." },
      { kysymys: "3. Viikon tulos on valmis, mutta viikkoa on jäljellä?", ohje: "Tee viikon lisätehtävä. Se on Näin etenet -listan lopussa. Jos viikolla ei ole omaa lisätehtävää, kirjoita viikon funktiolle lisätesti, joka kokeilee virheellistä syötettä. Kirjaa odotettu tulos ennen ajoa." },
      { kysymys: "4. Viikko loppuu, ja tulos on kesken?", ohje: "Kirjaa tilatiedoston Seuraavana-kohtaan, mihin jäit. Ohjaaja päättää jatkosta seuraavan viikon palaverissa maanantaina tai tiistaina. Tee sillä välin lisätesti viikon funktiolle." },
      {
        kysymys: "5. Mikään yllä olevista ei auta?",
        ohje: "Lähetä ohjaajalle Teams-viesti tällä pohjalla:",
        pohja: { otsikko: "Viesti ohjaajalle", teksti: "Hei, olen jumissa viikolla {viikko}.\nYritin: \nJäin kohtaan: \nRuudulla näkyy: " }
      }
    ]
  },

  /* ---- työsykli: sama joka tehtäväkortissa (brief 5.1–5.2, runko v3 § 5) ---- */
  sykli: {
    otsikko: "Työsykli",
    johdanto: "Tee askeleet järjestyksessä. Yksi kierros on yksi tehtäväkortti. Kun kierros on valmis, aloita seuraava kortti askeleesta 1.",
    askeleet: [
      {
        nimi: "Suunnittele",
        paikka: "selain",
        tyokalu: "Copilot (Microsoft 365, BC:n tunnus)",
        oma: "täytät viestipohjan kaksi kohtaa ennen lähettämistä: mitä kortti tekee ja mikä on odotettu tulos. Funktion kortissa kirjoitat myös rajapinnan: nimi, syöte ja paluuarvo. Askel 1 rastitetaan issuessa askeleessa 2.",
        ohje: [
          "Avaa Copilot selaimessa BC:n tunnuksella.",
          "Aloita uusi keskustelu, jos viikko on vaihtunut tai keskustelu on jo pitkä.",
          "Liitä keskusteluun tilatiedosto `PROJEKTIN-TILA.md`.",
          "Kopioi viestipohja. Täytä sen kaksi kohtaa.",
          "Lähetä viesti. Tarkista, että kortissa on kaikki kuusi kohtaa."
        ],
        pohja: {
          otsikko: "Täytä ja liitä tämä Copilotiin",
          teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko {viikko}: {nimi}\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti tekee vain ___\nMinun odotettu tulokseni: Kun syöte on ___, tuloksen pitää olla ___.\n\nKirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista (A, B tai C) ja perustelu\n## Tiedostot\n## Älä tee (testitiedostot aina tässä)\n## Hyväksymiskriteerit\n## Testi: tunnus, syöte ja odotettu tulos\n\nKäytä minun odotettua tulostani sellaisenaan. Älä kirjoita koodia."
        },
        kuvaohjeet: ["copilot-uusi-keskustelu", "copilot-tilatiedosto"],
        valmis: "kortissa on kuusi kohtaa, ja testissä on sinun odotettu tuloksesi.",
        jumissa: [
          { kysymys: "Copilot kirjoitti koodia eikä korttia?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Pyydä korttia uudelleen", teksti: "Älä kirjoita koodia. Kirjoita vain tehtäväkortti pyytämässäni muodossa." } },
          { kysymys: "Copilot muutti odotetun tulokseni?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Palauta oma odotettu tulos", teksti: "Käytä testissä minun odotettua tulostani sanatarkasti: (liitä tähän)." } },
          { kysymys: "En osaa kirjoittaa odotettua tulosta?", ohje: "Kirjoita, mitä ruudulla pitää näkyä, kun kortti on valmis. Esimerkiksi: \"Kun avaan sivun, kuutio pyörii.\" Luku tai näkyvä asia riittää." },
          { kysymys: "Kortti tuntuu liian isolta?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Pyydä pienempi kortti", teksti: "Kortti on liian iso. Jaa se kahteen korttiin ja anna nyt vain ensimmäinen." } },
          { kysymys: "Copilot ei aukea tai tunnus ei toimi?", ohje: "Lähetä ohjaajalle Teams-viesti: mikä ei toimi ja mitä näet ruudulla. Tee sillä välin viikon tehtävä, joka ei tarvitse Copilotia." }
        ]
      },
      {
        nimi: "Siirrä",
        paikka: "GitHub, selain",
        tyokalu: "GitHub",
        oma: "tarkistat kortin tarkistuslistalla. Kirjoitat issueen yhden rivin: \"Muutin kortista ___\" tai \"En muuttanut, koska ___\". Rastita askeleet 1 ja 2 issuessa.",
        ohje: [
          "Avaa repositoryn Issues-välilehti.",
          "Valitse New issue. Valitse pohja Tehtäväkortti.",
          "Liitä Copilotin kortti kuvauskenttään.",
          "Tarkista kortti: tavoite, kaista, tiedostot, Älä tee -kohta, hyväksymiskriteerit ja testi tunnuksella.",
          "Kirjoita otsikko, joka alkaa verbillä. Lisää label tehtäväkortti. Tallenna issue."
        ],
        pohja: {
          otsikko: "Tarkistusrivi issuen loppuun",
          teksti: "Tarkistin kortin: Muutin kortista ___ / En muuttanut, koska ___"
        },
        kuvaohjeet: ["github-uusi-issue"],
        valmis: "issue on tallennettu, siinä on tarkistusrivi, ja tiedät issuen numeron.",
        jumissa: [
          { kysymys: "New issue ei näytä pohjaa Tehtäväkortti?", ohje: "Tarkista, että tiedosto `.github/ISSUE_TEMPLATE/tehtavakortti.md` on pushattu GitHubiin. Liitä sillä välin kortti tyhjään issueen." },
          { kysymys: "Label tehtäväkortti puuttuu listasta?", ohje: "Luo label kerran. Avaa Issues. Valitse Labels ja New label. Kirjoita nimeksi tehtäväkortti. Tee samalla label havainto." },
          { kysymys: "En löydä Issues-välilehteä?", ohje: "Avaa repositoryn Settings. Valitse General. Laita kohdassa Features rasti kohtaan Issues." }
        ]
      },
      {
        nimi: "Rakenna",
        paikka: "VS Code tai selain",
        tyokalu: "testi kaistalla B, toteutus kortin kaistalla",
        oma: "kirjoitat testiin oman odotetun tuloksesi. Päätät jokaisesta tekoälyn vastauksesta: hyväksyn, korjautan tai hylkään. Kirjaat päätöksen ja perusteen AI-lokiin. Yhden kortin täydennykset kirjataan yhtenä merkintänä. Rastita 3a issuessa, kun testi on kirjoitettu. Rastita 3b, kun toteutus on valmis.",
        ohje: [
          "Kirjoita testi ensin (3a). Avaa testitiedosto. Kirjoita kommentti, jossa on syöte ja sinun odotettu tuloksesi. Hyväksy täydennys Tab-näppäimellä.",
          "Kirjoita tulos testiin tekstinä tai muodossa tosi tai epätosi, jos tulos ei ole luku. Riittää: `virheilmoitus = \"Tiedosto ei ole SVG.\"`. Ei riitä: \"virhe tulee\".",
          "Kirjoita odotettu tulos issueen, jos kortin testi tehdään käsin selaimessa. Siirry silloin suoraan kohtaan 3b.",
          "Toteuta kortti sitten kortin kaistalla (3b). Kaistalla A pyydä Copilotilta yksi tiedosto kerrallaan. Kaistalla C käytä GitHub Copilotin agenttitilaa.",
          "Lue muutos, ennen kuin hyväksyt sen. Älä hyväksy muutoksia testitiedostoon.",
          "Tallenna tiedostot. Aja terminaalissa `npm run dev`."
        ],
        pohja: [
          {
            otsikko: "Kaista A: liitä tämä Copilotiin",
            teksti: "Toteuta tämä tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku, esimerkiksi src/App.jsx)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTehtäväkortti:\n(liitä kortti tähän)\n\nTiedoston nykyinen sisältö:\n(liitä tiedosto tähän)"
          },
          {
            otsikko: "Kaista C: liitä tämä GitHub Copilotiin (agenttitila)",
            teksti: "Toteuta issue #(numero) tämän kortin mukaan.\nMuuta vain kortin Tiedostot-kohdassa lueteltuja tiedostoja.\nÄlä muuta testejä.\nÄlä refaktoroi muuta koodia.\nJos tarvitset muutoksia muihin tiedostoihin, lopeta ja kerro, mitä ja miksi.\n\n(liitä kortti tähän)"
          }
        ],
        kuvaohjeet: ["vscode-taydennys", "vscode-hyvaksy-muutos"],
        valmis: "muutos on tallennettu, sovellus käynnistyy komennolla `npm run dev`, ja AI-lokissa on päätös.",
        jumissa: [
          {
            kysymys: "Tuliko virheilmoitus?",
            ohje: "Kopioi virhe Copilotille alla olevalla pohjalla. Jos korjaus ei auta toisella yrityksellä, avaa havaintoissue.",
            pohja: [
              { otsikko: "Kysy virheestä Copilotilta", teksti: "Sain tämän virheen, kun tein tehtäväkorttia #(numero). Selitä ensin lyhyesti, mikä virheen aiheuttaa. Ehdota sitten korjaus vain kortin tiedostoihin. Älä muuta testejä.\n\nVirhe:\n(liitä virhe tähän)" }
            ],
            jatko: [
              { kysymys: "Korjaus ei auttanut, ja virhe tuli toisen kerran?", ohje: "Lopeta yrittäminen. Tämä on kahden yrityksen sääntö. Avaa havaintoissue tällä pohjalla. Siirry sitten askeleeseen 5.", pohja: { otsikko: "Havaintoissue: otsikoksi \"Havainto: …\", label havainto", teksti: "## Mitä odotin\n\n## Mitä tapahtui\n(liitä virheilmoitus)\n\n## Miten virheen saa toistettua\n1. \n\n## Syy omin sanoin\n(kirjoita, kun syy löytyy)\n\nSuljetaan korjauscommitilla: Closes #(tämän issuen numero)" } }
            ]
          },
          { kysymys: "Sama asia on epäonnistunut kaksi kertaa?", ohje: "Lopeta yrittäminen. Tämä on kahden yrityksen sääntö. Avaa havaintoissue (label havainto). Kirjaa siihen, mitä kokeilit. Siirry sitten askeleeseen 5." },
          { kysymys: "GitHub Copilot kysyy, miten jokin pitäisi suunnitella?", ohje: "Älä päätä sitä GitHub Copilotissa. Vie kysymys Copilotille askeleessa 5. Pyydä päivitetty kortti." },
          { kysymys: "Muutos koskisi testitiedostoa?", ohje: "Hylkää muutos. Testi on sinun odotettu tuloksesi. Sitä ei muuteta koodin mukaan. Kirjaa hylkäys AI-lokiin." },
          { kysymys: "Korjaus vaatisi muutoksia kortin ulkopuolelle?", ohje: "Älä hyväksy muutosta. Vie asia Copilotille askeleessa 5. Pyydä uusi kortti." },
          { kysymys: "Sovellus ei käynnisty ollenkaan?", ohje: "Aja terminaalissa `npm install` ja sitten `npm run dev`. Jos tulee virhe, toimi kuten kohdassa \"Tuliko virheilmoitus?\"" },
          { kysymys: "Krediittejä on jäljellä alle 25 prosenttia?", ohje: "Käytä kaistoja A ja B kuun loppuun asti. Kerro asiasta ohjaajalle viikkopalaverissa." }
        ]
      },
      {
        nimi: "Tarkista",
        paikka: "VS Code",
        tyokalu: "sinä itse: VS Coden terminaali ja selain",
        oma: "etsit testikoodista oman odotetun tuloksesi, ennen kuin ajat testin. Jos tulosta ei löydy tai se on muuttunut, palaa kohtaan 3a ja kirjoita testi uudelleen. Rastita askel 4 issuessa.",
        ohje: [
          "Avaa testitiedosto. Etsi `expect`-rivi, joka tarkistaa oman odotetun tuloksesi. Tulos voi olla luku, teksti tai tosi tai epätosi.",
          "Aja terminaalissa `npm test`.",
          "Tee kortin käsin tehtävät testit selaimessa. Vertaa havaittua tulosta odotettuun tulokseen. Kirjaa molemmat.",
          "Kirjaa tulos issueen: läpi tai ei läpi, ja mitä näit."
        ],
        pohja: { otsikko: "Testin kirjaus issueen", teksti: "Testi T__\nOdotettu tulos (löytyi testikoodista rivillä __): \nHavaittu tulos: \nTulos: läpi / ei läpi" },
        kuvaohjeet: ["vscode-terminaali"],
        valmis: "issuessa on odotettu ja havaittu tulos jokaisesta kortin testistä.",
        jumissa: [
          { kysymys: "Testi ei mennyt läpi?", ohje: "Palaa kohtaan 3b. Korjaa toteutus. Älä muuta testiä. Jos sama testi epäonnistuu toisen kerran, avaa havaintoissue ja siirry askeleeseen 5." },
          { kysymys: "En löydä omaa odotettua tulostani testikoodista?", ohje: "Palaa kohtaan 3a, koska testi ei silloin tarkista sinun tulostasi. Kirjoita testi uudelleen kommentista, jossa on oma odotettu tuloksesi. Kirjaa tämä AI-lokiin." },
          { kysymys: "`npm test` ei löydä testejä?", ohje: "Tarkista, että testitiedoston nimen lopussa on `.test.js`. Jos syy ei löydy, lähetä ohjaajalle Teams-viesti." }
        ]
      },
      {
        nimi: "Raportoi",
        paikka: "selain",
        tyokalu: "Copilot (sama keskustelu)",
        oma: "kirjoitat ensin yhden oman lauseen: mitä tapahtui ja vastasiko tulos odotettua. Vertaat valittua kaistaa siihen, miten työ oikeasti meni. Rastita askel 5 issuessa.",
        ohje: [
          "Palaa samaan Copilot-keskusteluun.",
          "Kopioi viestipohja. Kirjoita siihen kaksi omaa lausetta.",
          "Lähetä viesti. Copilot päivittää tilatiedoston ja antaa seuraavan kortin.",
          "Korvaa repositoryn `PROJEKTIN-TILA.md` Copilotin päivittämällä versiolla."
        ],
        pohja: {
          otsikko: "Täytä ja liitä tämä Copilotiin",
          teksti: "Tehtäväkortti #(numero) on tehty.\nMitä tapahtui (oma lause): \nKaista: A / B / C. Riittikö se? (oma lause): \nTestin tulos: läpi / ei läpi\nMitä hylkäsin tai korjautin ja miksi: \n\n1. Päivitä PROJEKTIN-TILA.md: valmista, seuraavana, tehdyt päätökset ja avoimet kysymykset. Anna koko tiedosto.\n2. Anna seuraava tehtäväkortti samassa muodossa. Jos viikon tavoite on valmis, sano se."
        },
        kuvaohjeet: ["copilot-kopioi-vastaus"],
        valmis: "tilatiedosto on päivitetty, ja sinulla on seuraava kortti tai tieto siitä, että viikon kortit ovat valmiit.",
        jumissa: [
          { kysymys: "Keskustelu on pitkä, ja Copilot unohtaa asioita?", ohje: "Aloita uusi keskustelu. Liitä tilatiedosto ja tämä viesti:", pohja: { otsikko: "Uusi keskustelu", teksti: "Jatkan projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\nViikko {viikko}: {nimi}\nViikon tavoite: {feature}\n\nAnna seuraava tehtäväkortti samassa muodossa kuin ennen." } },
          { kysymys: "Copilotin kortti ei liity viikon tavoitteeseen?", ohje: "Kopioi viikon tavoite tältä sivulta. Pyydä korttia uudelleen. Mainitse, mikä kortissa oli väärin." }
        ]
      },
      {
        nimi: "Kirjaa",
        paikka: "VS Code ja tämä sivu",
        tyokalu: "VS Code, GitHub ja tämän sivun AI-loki",
        oma: "kirjoitat commit-viestin itse, verbi edellä. Rastita askel 6 issuessa.",
        ohje: [
          "Tee commit VS Codessa. Kirjoita viestiin, mitä teit. Lisää viestiin rivi `Closes #N`.",
          "Tee push.",
          "Tarkista GitHubista, että issue sulkeutui.",
          "Tee merkintä tämän sivun AI-lokiin."
        ],
        pohja: { otsikko: "Commit-viestin pohja", teksti: "(mitä tein, verbi edellä)\n\nCloses #(numero)" },
        kuvaohjeet: ["vscode-commit-push", "github-issue-sulkeutuu"],
        valmis: "commit on GitHubissa, issue on suljettu, ja AI-lokissa on merkintä.",
        jumissa: [
          { kysymys: "Push ei onnistu?", ohje: "Valitse VS Codessa ensin Sync Changes. Tee sitten push uudelleen. Jos virhe jatkuu, lähetä virheilmoitus ohjaajalle Teamsissa." },
          { kysymys: "Issue ei sulkeutunut?", ohje: "Tarkista, että commit-viestissä lukee `Closes #N` oikealla numerolla. Tarkista myös, että push meni päähaaraan `main`. Päähaara on repositoryn päälinja, josta julkaisu tehdään." }
        ]
      }
    ]
  },

  /* ---- viikkojen ohjaava sisältö ---- */
  viikkoOhjeet: {
    40: {
      type: "pohjustus",
      rutiini: false,
      josJumissa: false,
      feature: "VS Code ja GitHub ovat korkean kontrastin teemassa. Komennot `git --version` ja `node --version` tulostavat versiot. Julkinen repository on kloonattu VS Codeen ja jaettu ohjaajalle. `project-docs/mvp.md` on pushattu.",
      connection: "Tällä viikolla ei vielä rakenneta sovellusta. Laitat työkalut kuntoon. Kirjoitat omin sanoin, mitä MVP:hen kuuluu. Seuraavan viikon työsykli tarvitsee kaiken tämän.",
      deliverable: "Versiotulosteet · kloonattu ja jaettu repository · kolme pohjatiedostoa · `project-docs/mvp.md` GitHubissa · lähetetty kysymyslista · agenttipyynnön hinta päiväkirjassa.",
      why: "Ilman omaa MVP-kuvausta Copilot pilkkoo väärää asiaa. Ilman mittausta et tiedä, montako agenttipyyntöä voit tehdä kuukauden krediiteillä.",
      done: "Ohjaaja näkee repositoryn, `mvp.md` on GitHubissa, kysymyslista on lähetetty, ja päiväkirjassa on agenttipyynnön hinta tai merkintä \"odottaa käyttönäkymää\".",
      record: "MVP:n perustelu omin sanoin, repositoryn osoite, agenttipyynnön hinta ja vaatimustunnukset p1 ja s4.",
      skills: ["Asiakkaan tarpeiden selvittäminen", "Tärkeysjärjestys P0, P1 ja P2", "Kehitysympäristön käyttöönotto", "Versionhallinnan aloitus"],
      termit: ["MVP", "P0", "P1", "P2", "repository", "kloonaus", "commit", "push", "tilatiedosto", "krediitti"],
      paivat: [
        ["Sopiminen ja asennus", "Sovi tekijänimi ja palaveripäivä. Asenna työkalut ja vaihda teemat."],
        ["Repository", "Aseta Git. Luo repository, kloonaa se ja lisää pohjat."],
        ["MVP", "Lue toimeksianto. Kirjoita `mvp.md` omin sanoin."],
        ["Commit ja kysymykset", "Tee commit ja push. Lähetä kysymyslista asiakkaille."],
        ["Mittaus", "Mittaa agenttipyynnön hinta. Kirjoita päiväkirja ja tee commit."]
      ],
      steps: [
        ["Sovi ohjaajan kanssa.", "Sovi Teamsissa tekijänimi ja viikkopalaverin päivä, maanantai tai tiistai. Tee tämä ennen Gitin asetuksia."],
        ["Asenna työkalut.", "Asenna VS Code, Git, Node.js, Inkscape ja Blender. Aja terminaalissa <code>git --version</code> ja <code>node --version</code>."],
        ["Vaihda teemat.", "Valitse VS Codessa teema Dark High Contrast. Valitse GitHubin asetuksissa teema Dark high contrast."],
        ["Aseta Git.", "Aseta Gitin nimeksi sovittu tekijänimi. Aseta sähköpostiksi GitHubin noreply-osoite. Näin omaa sähköpostiosoitettasi ei julkaista. Katso kuvaohje alta."],
        ["Luo repository.", "Luo GitHubissa julkinen repository nimellä <code>vektoripaja</code>. Valitse Add a README file. README on repositoryn etusivun ohje."],
        ["Kloonaa repository.", "Kloonaa repository VS Codeen. Kloonaus tekee siitä kopion omalle koneellesi."],
        ["Lisää pohjat.", "Lisää kolme pohjatiedostoa ensi viikkoa varten: tilatiedosto <code>PROJEKTIN-TILA.md</code>, tehtäväkorttipohja ja <code>.github/copilot-instructions.md</code>. Pohjat ovat alla kopioitavina."],
        ["Jaa repository.", "Lisää ohjaaja Collaboratoriksi. Collaborator on henkilö, joka näkee repositoryn ja voi kommentoida sitä."],
        ["Kirjoita MVP.", "Kirjoita <code>project-docs/mvp.md</code>: P0-lista ja miksi muut asiat odottavat. Poista samalla suunnitelmastasi <code>[cite: n]</code>-merkinnät. Copilot saa selittää termejä, mutta perustelu on sinun. Kirjaa käyttö AI-lokiin."],
        ["Tee commit ja push.", "Tallenna muutokset commitiksi. Commit on yksi nimetty muutos. Lähetä se GitHubiin pushilla."],
        ["Lähetä kysymyslista.", "Kirjoita vähintään kolme kysymystä asiakkaille. Käytä pohjaa alta. Lähetä kysymykset Teamsissa. Vastaukset käydään läpi ensi viikon palaverissa."],
        ["Katso krediitit ennen mittausta.", "Avaa GitHubin käyttönäkymä. Käyttönäkymä on sivu, jolla krediittien kulutus näkyy. Kirjaa, montako krediittiä on käytetty."],
        ["Avaa GitHub Copilot.", "Avaa VS Codessa GitHub Copilotin chat."],
        ["Vaihda agenttitilaan.", "Valitse chatin tilaksi Agent. Agenttitila muokkaa tiedostoja ja kuluttaa krediittejä."],
        ["Lähetä mittauksen viestipohja.", "Viestipohja on valmis viesti, jonka kopioit. Kopioi mittauksen viestipohja alta ja lähetä se. Hylkää ehdotettu muutos, jos se koskee muita tiedostoja kuin README:tä."],
        ["Kirjaa hinta.", "Avaa käyttönäkymä uudelleen. Hinta on nykyinen luku miinus aiempi luku. Kirjaa hinta päiväkirjaan. Jos luku ei ole muuttunut, kirjaa \"odottaa käyttönäkymää\" ja katso huomenna."],
        ["Tee lisätehtävä.", "Valitse oman suunnitelmasi P0-listasta viisi termiä. Kirjoita jokaisesta yksi suomenkielinen rivi."]
      ],
      pohjat: [
        { otsikko: "Kysymyslista asiakkaille (Teams)", teksti: "Hei Matti ja Antti,\nKysymyksiä Vektoripajasta:\n1. \n2. \n3. \nKäydäänkö vastaukset läpi viikkopalaverissa?" },
        { otsikko: "Mittauksen viestipohja GitHub Copilotille (agenttitila)", teksti: "Lue README.md ja ehdota sen alkuun yksi lause, joka kertoo, mikä Vektoripaja on. Älä muuta muita tiedostoja." },
        { otsikko: "PROJEKTIN-TILA.md (repositoryn juureen)", teksti: "# PROJEKTIN-TILA – Vektoripaja\nTämä tiedosto annetaan vain Copilotille (Microsoft 365). Älä liitä sitä GitHub Copilotiin.\n\nPäivitetty: pp.kk.vvvv · Viikko: __\n\n## Valmista\n- \n\n## Seuraavana\n- (seuraava tehtävä ja issue-numero)\n\n## Tehdyt päätökset\n- (päätös · peruste · viikko)\n\n## Avoimet kysymykset\n- (kysymys · kenelle · mihin mennessä)\n\n## Krediitit\nKäytetty tässä kuussa: __ / 200\nKaista C sallittu: kyllä / ei (alle 25 % jäljellä → ei)" },
        { otsikko: "Tehtäväkorttipohja (.github/ISSUE_TEMPLATE/tehtavakortti.md)", teksti: "---\nname: Tehtäväkortti\nabout: Yksi rajattu tehtävä työsyklin mukaan\ntitle: \"\"\nlabels: tehtäväkortti\n---\n\n## Tavoite\n\n## Kaista (A, B tai C) ja perustelu\n\n## Tiedostot\n\n## Älä tee\n- Älä muuta testitiedostoja.\n\n## Hyväksymiskriteerit\n- [ ] \n\n## Testi: tunnus, syöte ja odotettu tulos\nT__: \nOma odotettu tulokseni: \n\n## Oma tarkistus\nMuutin kortista ___ / En muuttanut, koska ___\n\n## Sykli\n- [ ] 1 Suunniteltu\n- [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu\n- [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu\n- [ ] 5 Raportoitu\n- [ ] 6 Kirjattu" },
        { otsikko: "Ohjeet GitHub Copilotille (.github/copilot-instructions.md)", teksti: "# Vektoripaja – ohjeet GitHub Copilotille\n\n## Projekti\nSelainpohjainen low-poly 3D-mallinnin.\nInkscapen SVG → 3D-malli → .obj-tiedosto.\nTekninen pohja: Vite, React, Three.js\n(@react-three/fiber, @react-three/drei) ja Vitest.\n\n## Rakenne\n(Täydennä viikolla 43: kansiot ja moduulien rajat.)\nTestit ovat tiedoston vieressä: nimi.test.js.\n\n## Säännöt\n- Toteuta vain tehtäväkortin tehtävä.\n- Muuta vain kortin Tiedostot-kohdassa lueteltuja tiedostoja.\n- Älä muuta testejä. Testit kirjoittaa opiskelija.\n- Älä refaktoroi pyytämättä.\n- Älä lisää npm-paketteja ilman lupaa.\n- Kysy, jos kortti on epäselvä. Älä arvaa.\n- Kun kortti pyytää funktiota, kirjoita puhdas funktio.\n- Koodin ja commitien kieli: ___ (oma valintasi).\n- Vastaa suomeksi." },
        { otsikko: "Jos jäät jumiin: viesti ohjaajalle (Teams)", teksti: "Hei, olen jumissa viikolla 40.\nYritin: \nJäin kohtaan: \nRuudulla näkyy: " }
      ],
      resources: [
        ["Lataa PROJEKTIN-TILA.md", "pohjat/PROJEKTIN-TILA.md", true],
        ["Lataa tehtavakortti.md", "pohjat/tehtavakortti.md", true],
        ["Lataa copilot-instructions.md", "pohjat/copilot-instructions.md", true]
      ],
      kuvaohjeet: ["github-noreply", "vscode-kloonaus", "github-collaborators", "vscode-commit-push", "github-kayttonakyma"],
      example: "`mvp.md`: \"Revolve on P0, koska maljakko ja pyörä tehdään sillä. Boolean-toiminnot ovat P2-jatkolistalla, koska malli toimii ilman niitä.\"",
      notEnough: "\"MVP on kaikki [MVP]-merkityt asiat.\" Lista on kopioitu suunnitelmasta. Siinä ei kerrota, miksi jokin jää pois."
    },
    41: {
      type: "feature",
      feature: "Selaimessa pyörii Three.js-kuutio omassa Pages-osoitteessasi. Testitapaukset T01 ja T02 menevät läpi.",
      excerpt: "Haluamme nähdä jokaisen välivaiheen verkossa, emme vain kuvakaappauksina.",
      connection: "Viikolla 40 asensit työkalut. Nyt käyt työsyklin läpi vaarattomalla tehtävällä. Kuutio poistetaan myöhemmin, mutta sama sykli toistuu joka viikko.",
      deliverable: "Julkaistu sivu, jossa kuutio pyörii · testitapaukset T01 ja T02 · kaksi issueta suljettuna commit-viestillä · päätös teknisestä pohjasta suunnitelmassa.",
      why: "Jos sykli opitaan vasta SVG-tuonnin kanssa, uusi työtapa ja vaikea tehtävä tulevat yhtä aikaa. Silloin et tiedä, johtuuko ongelma työtavasta vai tehtävästä.",
      done: "Pages-osoite näyttää pyörivän kuution myös toisella laitteella, esimerkiksi puhelimella. `npm test` näyttää, että T01 menee läpi. Issuet #1 ja #2 on suljettu commitilla.",
      record: "Pages-osoite, issueiden numerot, T01:n odotettu ja havaittu tulos, kiertokulma-funktio selityspohjalla ja vaatimustunnukset k1, k4 ja s14.",
      skills: ["Tehtäväkortti ja hyväksymiskriteerit", "Tekninen pohja: Vite, React, Three.js ja Vitest", "Testi ennen koodia", "Julkaisu GitHub Pagesiin"],
      termit: ["työsykli", "tehtäväkortti", "issue", "kaista", "T01", "tekninen pohja", "GitHub Pages"],
      steps: [
        ["Käy viikkopalaveri.", "Käy läpi asiakkaiden vastaukset kysymyslistaasi. Kirjaa ne tiedostoon <code>project-docs/kysymykset.md</code>. Viikkopalaveri on viikon tapaaminen ohjaajan kanssa."],
        ["Päätä ensin.", "Lue tekninen ehdotus suunnitelmasta. Kirjaa suunnitelmaan, hyväksytkö sen. Perustele päätös P0-toiminnoilla."],
        ["Kirjaa käyttöliittymävaatimus.", "Kirjoita suunnitelmaan, millainen sovelluksesi ulkoasun pitää olla: taustaväri, tekstin väri, tekstin koko ja painikkeiden koko. Kortin #1 hyväksymiskriteeri tulee tästä."],
        ["Luo tekninen pohja itse.", "Avaa repositoryn kansio VS Codessa. Aja <code>npm create vite@latest . -- --template react</code> ja <code>npm install</code>."],
        ["Lisää kirjastot itse.", "Aja <code>npm install three @react-three/fiber @react-three/drei</code> ja <code>npm install -D vitest</code>."],
        ["Kirjoita T01 ennen koodia.", "Funktio <code>kiertokulma(aika, nopeus)</code> saa ajan 0 ja nopeuden 0,5. Mitä odotat? Entä kun aika on 3? Kirjaa vastaukset ennen ajoa."],
        ["Tee kortti #1 työsyklillä.", "Kortti: kuutio pyörii etusivulla. Vertaa Copilotin korttia toteutusavun mallikorttiin."],
        ["Tee kortti #2 työsyklillä.", "Kortti: sovellus julkaistaan GitHub Pagesiin. Testi T02: avaa osoite toisella laitteella, esimerkiksi puhelimella."],
        ["Tee lisätehtävä.", "Lisätesti: mitä odotat, kun aika on negatiivinen? Kirjaa vastaus ennen ajoa. Lisätesti on ylimääräinen testi ilman T-numeroa."]
      ],
      example: "Perustelu suunnitelmaan: \"Hyväksyn ehdotuksen. SVGLoader lukee Inkscapen SVG:n, LatheGeometry tekee revolven ja Vitest testaa puhtaat funktiot.\"",
      notEnough: "\"Hyväksyn, koska Copilot suositteli tätä.\" Perustelussa ei ole yhtään P0-toimintoa.",
      help: {
        title: "Mallikortti, testipohja ja kansiorakenne",
        tree: "vektoripaja/\n├─ .github/\n│  ├─ ISSUE_TEMPLATE/tehtavakortti.md\n│  ├─ copilot-instructions.md\n│  └─ workflows/pages.yml\n├─ project-docs/\n│  ├─ mvp.md\n│  └─ kysymykset.md\n├─ src/\n│  ├─ App.jsx\n│  ├─ index.css\n│  ├─ kierto.js\n│  └─ kierto.test.js\n├─ PROJEKTIN-TILA.md\n├─ README.md\n├─ package.json\n└─ vite.config.js",
        actions: [
          "Kopioi testipohja tiedostoon `src/kierto.test.js`. Kirjoita omat odotetut tuloksesi `___`-kohtiin (työsyklin kohta 3a).",
          "Pyydä kaistalla A tiedostot yksi kerrallaan: `src/kierto.js`, `src/App.jsx` ja `src/index.css`.",
          "Lisää tiedostoon `package.json` skripti `\"test\": \"vitest run\"`.",
          "Lisää tiedostoon `vite.config.js` rivi `base: \"/vektoripaja/\"`. Valitse GitHubissa Settings → Pages → Source: GitHub Actions."
        ],
        code: "MALLIKORTTI #1\n## Tavoite\nKuutio pyörii etusivulla.\n## Kaista ja perustelu\nA. Kolme tiedostoa, pyydetään yksi kerrallaan.\n## Tiedostot\nsrc/kierto.js, src/App.jsx, src/index.css\n## Älä tee\nÄlä lisää muita kirjastoja. Älä muuta tiedostoa src/kierto.test.js.\n## Hyväksymiskriteerit\n- [ ] Kuutio näkyy ja pyörii tasaisesti.\n- [ ] Tausta on musta ja teksti #1fa4e3.\n## Testi\nT01: kiertokulma(0, 0.5) → (oma odotettu tuloksesi) ja kiertokulma(3, 0.5) → (oma odotettu tuloksesi)\n## Sykli\n- [ ] 1 Suunniteltu  - [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu  - [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu  - [ ] 5 Raportoitu  - [ ] 6 Kirjattu\n\nTESTIPOHJA src/kierto.test.js\nimport { test, expect } from \"vitest\";\nimport { kiertokulma } from \"./kierto.js\";\n\ntest(\"T01 kiertokulma\", () => {\n  expect(kiertokulma(0, 0.5)).toBe(___);\n  expect(kiertokulma(3, 0.5)).toBe(___);\n});",
        test: "Avaa Pages-osoite puhelimella tai toisella laitteella. Kuution pitää pyöriä."
      },
      sykli: {
        pohjat: {
          1: {
            otsikko: "Viikon 41 kortti #1: täytä ja liitä Copilotiin",
            teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko 41: Harjoitussykli\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti tekee vain pyörivän kuution etusivulle.\nMinun odotettu tulokseni: Kun syöte on kiertokulma(0, 0.5), tuloksen pitää olla ___. Kun syöte on kiertokulma(3, 0.5), tuloksen pitää olla ___.\nRajapinta: kiertokulma(aika, nopeus) palauttaa luvun.\n\nKirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista (A, B tai C) ja perustelu\n## Tiedostot\n## Älä tee (testitiedostot aina tässä)\n## Hyväksymiskriteerit\n## Testi: tunnus, syöte ja odotettu tulos\n\nKäytä minun odotettua tulostani sellaisenaan. Älä kirjoita koodia."
          },
          3: {
            otsikko: "Kaista A: liitä tämä Copilotiin",
            teksti: "Toteuta tämä tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku, esimerkiksi src/App.jsx)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTehtäväkortti:\n(liitä kortti tähän)\n\nTiedoston nykyinen sisältö:\n(liitä tiedosto tähän)"
          }
        },
        ohjeet: {
          3: [
            "Kirjoita testi ensin (3a). Kortissa #1 kopioi toteutusavun testipohja tiedostoon `src/kierto.test.js`. Kirjoita omat arvosi `___`-kohtiin.",
            "Kirjoita kortin #2 testin T02 odotettu tulos issueen. T02 tehdään käsin. Siirry sitten suoraan kohtaan 3b.",
            "Toteuta kortti sitten kaistalla A (3b). Kaista A tarkoittaa, että Copilot kirjoittaa koodin yksi tiedosto kerrallaan. Pyydä ensin `src/kierto.js`, sitten `src/App.jsx`, sitten `src/index.css`.",
            "Lue jokainen tiedosto, ennen kuin hyväksyt sen. Älä hyväksy muutoksia testitiedostoon.",
            "Tallenna tiedostot. Aja terminaalissa `npm run dev`."
          ]
        },
        lisa: {
          3: "Tällä viikolla testi kirjoitetaan testipohjaan. Kommentista kirjoitettava testi (kaista B) otetaan käyttöön viikolla 43. Kaista C otetaan käyttöön viikolla 44."
        },
        jumissa: {
          3: [
            { kysymys: "`npm create vite` kysyy kysymyksiä?", ohje: "Valitse framework React. Valitse variant JavaScript. Jos se kysyy kansion tyhjentämisestä, valitse Ignore files and continue." }
          ],
          4: [
            { kysymys: "Pages-sivu on tyhjä tai valkoinen?", ohje: "Avaa `vite.config.js`. Viten `base` puuttuu tai on väärä. Tarkista rivi `base: \"/vektoripaja/\"`. Nimen pitää olla sama kuin repositoryn nimi." }
          ]
        }
      }
    },
    43: {
      type: "feature",
      feature: "Inkscapessa piirretty SVG avautuu sovellukseen. Sen polut näkyvät 3D-näkymässä viivoina.",
      excerpt: "Tarvitsemme selaimessa toimivan työkalun, joka avaa Inkscapessa piirretyn SVG-tiedoston ja tekee siitä low-poly-mallin.",
      connection: "Nyt sykli on tuttu. Ensimmäinen oikea ominaisuus on tuonti. Ilman sitä mallista ei synny mitään.",
      deliverable: "Oma testitiedosto Inkscapesta · testitapaukset T03–T05 · kansiorakenne suunnitelmassa · polut näkymässä · `project-docs/kirjastot.md`.",
      why: "Kaikki myöhemmät viikot tarvitsevat tuodut polut. Jos tuonti on epävarma, myös revolve ja inflate ovat epävarmoja.",
      done: "Oma SVG avautuu tiedostonvalinnalla, T03–T05 menevät läpi, ja `project-docs/kirjastot.md`:ssä on kaksi SVGLoaderin rajoitetta omalla tiedostolla kokeiltuna.",
      record: "Kansiorakenne ja moduulien rajat, yksi SVGLoaderin rajoite omalla tiedostolla kokeiltuna, viikon funktio selityspohjalla ja vaatimustunnukset k2 ja s10.",
      skills: ["SVG-tiedoston tuonti", "Moduulien rajat", "Komponenttikirjaston rajoitteet", "Ulkoinen tiedosto turvallisesti"],
      termit: ["täydennys", "moduuli", "havaintoissue", "layer"],
      steps: [
        ["Piirrä testitiedosto.", "Tee Inkscapessa nimetyt layerit ja kolme sisäkkäistä ryhmää. Katso kuvaohje alta. Tallenna tiedosto kansioon <code>testiaineisto/</code>."],
        ["Kirjoita T03–T05 ensin.", "T03: tiedostossa on kolme polkua. T04: SVG, jossa on <code>&lt;script&gt;</code>-elementti. T05: tiedosto, joka ei ole SVG. Kirjaa jokaiselle, mitä odotat."],
        ["Lisää havaintopohja.", "Tallenna havaintopohja tiedostoon <code>.github/ISSUE_TEMPLATE/havainto.md</code>. Kun huomaat virheen, tee siitä havaintoissue: mitä odotit, mitä tapahtui ja miten virheen saa toistettua."],
        ["Kirjaa rakenne.", "Kirjaa suunnitelmaan kansiorakenne ja moduulien rajat. Moduuli on kansio tai tiedosto, jolla on yksi vastuu. Päivitä sama rakenne tiedostoon <code>copilot-instructions.md</code>."],
        ["Sovi dokumentointitapa.", "Sovi palaverissa, miten ohjelma dokumentoidaan: README ja käyttöohje. Kirjaa sovittu tapa suunnitelmaan."],
        ["Toteuta työsyklillä.", "Kirjoita testit kaistalla B kommentista. Toteuta tuonti kaistalla A, tiedosto kerrallaan."],
        ["Kokeile rajoitteita.", "Kokeile omalla tiedostollasi, mitä SVGLoader ei lue. Kirjaa se <code>project-docs/kirjastot.md</code>:hen."]
      ],
      example: "`kirjastot.md`: \"SVGLoader ei lue tekstiä. Kokeilin tiedostolla elain.svg: tekstiobjekti jäi pois.\"",
      notEnough: "\"SVGLoaderilla on rajoitteita.\" Mitään ei ole kokeiltu omalla tiedostolla.",
      resources: [
        ["Lataa havainto.md", "pohjat/havainto.md", true]
      ],
      kuvaohjeet: ["inkscape-layerit"],
      help: {
        title: "SVG:n lukeminen turvallisesti",
        tree: "tiedostonvalinta (<input type=\"file\">)\n  → file.text()          SVG tekstinä\n  → SVGLoader.parse()    polut, ei suoritusta\n  → viivat näkymään      yksi viiva per polku",
        actions: [
          "Lue tiedosto tekstinä: `await file.text()`.",
          "Anna teksti SVGLoaderille: `new SVGLoader().parse(teksti)`. Tulos on olio, jossa on `paths`-lista.",
          "Älä lisää SVG:tä sivulle `innerHTML`:llä. Silloin sen `<script>` voisi suorittua. Tämä on testin T04 syy.",
          "Tarkista tiedoston tyyppi ennen lukemista. Näin T05 saa selkeän virheilmoituksen."
        ],
        code: "TUONNIN TARKISTUSLISTA\n[ ] tiedostonvalinta hyväksyy vain .svg-tiedostot\n[ ] SVG luetaan tekstinä ja annetaan SVGLoaderille\n[ ] SVG:tä ei lisätä sivulle innerHTML:llä\n[ ] muu tiedosto antaa selkeän virheilmoituksen\n[ ] T03–T05 ovat testitiedostossa omina riveinään",
        test: "Avaa oma SVG, testitiedosto, jossa on script-elementti, ja tekstitiedosto. Kirjaa jokaisen tulos.",
        links: [["three.js: SVGLoader", "https://threejs.org/docs/#examples/en/loaders/SVGLoader"]]
      },
      sykli: {
        pohjat: {
          3: {
            otsikko: "Kaista A: liitä tämä Copilotiin",
            teksti: "Toteuta tämä tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTehtäväkortti:\n(liitä kortti tähän)\n\nTiedoston nykyinen sisältö:\n(liitä tiedosto tähän)"
          }
        },
        lisa: {
          3: "Tällä viikolla kirjoitat testin ensimmäisen kerran kaistalla B. Kaista B tarkoittaa, että kirjoitat kommentin ja hyväksyt GitHub Copilotin täydennyksen. Täydennys on harmaa koodiehdotus, jonka hyväksyt Tab-näppäimellä."
        }
      }
    },
    44: {
      type: "feature",
      feature: "SVG:n layerit ja ryhmät muuttuvat scene graphiksi eli 3D-näkymän vanhempi–lapsi-puuksi. Hierarkiapaneeli näyttää osien nimet sisennettyinä.",
      excerpt: "Piirroksen layerit ja ryhmät muuttuvat mallin osiksi niin, että pää pysyy kiinni vartalossa, kun vartaloa siirretään.",
      connection: "Viikolla 43 polut tulivat 3D-näkymään irrallisina. Nyt niille tulee rakenne: mikä osa on minkäkin lapsi. Viikon 47 transformit ja viikon 49 vienti tarvitsevat tämän puun.",
      deliverable: "Muunnoksen rajapinta ja testitapaukset T06–T08 · muunnos puhtaana funktiona · hierarkiapaneeli · valinnan toiminta suunnitelmassa · revolven valintatapojen vertailu.",
      why: "Ilman puuta osat eivät seuraa toisiaan. Silloin pää jää paikalleen, kun vartaloa siirretään, eikä .obj-tiedostoon synny osia.",
      done: "Oman tiedostosi kolme ryhmätasoa näkyvät paneelissa sisennettyinä, T06–T08 menevät läpi, ja suunnitelmassa on valinnan toiminta perusteluineen.",
      record: "Hierarkian muunnos selityspohjalla (tämä on viikon funktio), valinnan toiminnan perustelu ja vaatimustunnukset p4, p6 ja s7.",
      skills: ["Puun läpikäynti: rekursio tai silmukka", "Puhdas funktio ja rajapinta", "Käyttöliittymän osa suunnitelman mukaan", "Kaista C: agenttitila"],
      termit: ["scene graph", "hierarkiapaneeli", "puhdas funktio", "rajapinta"],
      steps: [
        ["Kirjoita rajapinta.", "Kirjoita korttiin funktion nimi, mitä se saa (SVG:n ryhmä) ja mitä se palauttaa (solmu, jolla on nimi ja lapset). Rajapinta on funktion nimi, syöte ja paluuarvo."],
        ["Kirjoita T06–T08.", "T06: kolmen tason ryhmät. T07: tyhjä ryhmä. T08: ryhmä ilman nimeä. Kirjaa jokaiselle, mitä odotat."],
        ["Tee kortti kaistalla C.", "Kortti koskee funktiota ja paneelia eli useaa tiedostoa. Kaista C tarkoittaa GitHub Copilotin agenttitilaa. Katso kuvaohjeet alta."],
        ["Päätä valinnan toiminta.", "Kun käyttäjä klikkaa osaa, valitaanko lapsi vai koko kappale? Kirjaa päätös ja peruste suunnitelmaan."],
        ["Vertaa revolven valintatapoja.", "Vertaa kahta tapaa: valinta ja painike sovelluksessa, tai nimimerkintä Inkscapessa, esimerkiksi layerin nimen perässä <code>[revolve]</code>. Kirjaa hyvät ja huonot puolet. Tuo suositus ensi viikon palaveriin."]
      ],
      example: "Selityspohja: \"Saa SVG-ryhmän. Palauttaa solmun, jolla on nimi ja lapset. Valitsee: jos ryhmällä ei ole nimeä, käyttää tunnusta. Toistaa: kutsuu itseään jokaiselle lapsiryhmälle. T06 tarkistaa kolmen tason puun.\"",
      notEnough: "\"Funktio muuntaa SVG:n hierarkiaksi.\" Selityksestä puuttuvat syöte, paluuarvo, valinta, toisto ja testi.",
      kuvaohjeet: ["vscode-chat-tilat", "vscode-liita-tiedosto"],
      help: {
        title: "Inkscapen layerit ja ryhmät SVG:ssä",
        tree: "<svg>\n  <g inkscape:groupmode=\"layer\" inkscape:label=\"Vartalo\">\n    <path .../>\n    <g inkscape:label=\"Pää\">\n      <g inkscape:label=\"Korvat\"> <path .../> </g>\n    </g>\n  </g>\n</svg>",
        actions: [
          "Layerin nimi on attribuutissa `inkscape:label`. Jos nimeä ei ole, käytä `id`-attribuuttia.",
          "Lue ryhmät `DOMParser`illa: `new DOMParser().parseFromString(teksti, \"image/svg+xml\")`. DOMParser ei suorita skriptejä.",
          "Käy puu läpi ryhmä kerrallaan. Jokaisesta `<g>`-elementistä tulee solmu, ja sen `<g>`-lapsista tulee solmun lapset.",
          "Puhdas funktio ei muuta saamaansa dataa. Se palauttaa uuden solmun."
        ],
        code: "FUNKTION TARKISTUSLISTA\n[ ] rajapinta kirjoitettu korttiin ennen toteutusta\n[ ] ei sivuvaikutuksia: palauttaa uuden solmun\n[ ] tyhjä ryhmä käsitelty (T07)\n[ ] nimetön ryhmä saa tunnuksen (T08)\n[ ] paneeli näyttää sisennykset oikein",
        test: "Avaa oma testitiedostosi. Vertaa paneelin puuta Inkscapen Layers and Objects -paneeliin. Niiden pitää olla samat."
      },
      sykli: true
    },
    45: {
      type: "feature",
      feature: "Puoliprofiilista syntyy pyörähdyskappale. Segmenttien määrää voi säätää välillä 3–32. Kappaletta voi kiertää hiirellä joka puolelta.",
      excerpt: "Puoliprofiilista pitää syntyä pyörähdyskappale, esimerkiksi maljakko, ja viivasta putki, esimerkiksi johto tai sarvi.",
      connection: "Nyt osat ovat puussa. Ensimmäinen muoto on revolve: puoliprofiili pyörähtää akselin ympäri, ja siitä syntyy kappale. Revolve tarkoittaa pyörähdyskappaletta.",
      deliverable: "Sovittu valintatapa suunnitelmassa · oma hyväksymiskriteeri profiilille · testitapaukset T09–T11 · revolve, segmenttisäädin ja orbit.",
      why: "Revolve on MVP:n ensimmäinen oikea 3D-muoto. Ilman sitä maljakkoa, pyörää tai kupolia ei synny.",
      done: "Oma profiilisi pyörähtää kappaleeksi, segmenttisäädin muuttaa särmien määrää välillä 3–32, ja T09–T11 menevät läpi.",
      record: "Sovittu valintatapa ja oma hyväksymiskriteeri akselin väärälle puolelle, viikon funktio selityspohjalla ja vaatimustunnukset p9, s7 ja k3.",
      skills: ["Ratkaisuvaihtoehdot yhdessä tiimin kanssa", "Toimintalogiikka: profiili kappaleeksi", "Komponenttikirjaston geometria", "Rajatapausten testaus"],
      termit: ["revolve", "orbit", "kysymystila"],
      steps: [
        ["Sovi valintatapa palaverissa.", "Esitä vertailusi. Sovi valintatapa ohjaajan kanssa. Kirjaa sovittu tapa issue-kommenttina ja suunnitelmaan."],
        ["Päätä akselin väärän puolen käsittely.", "Mitä tehdään, jos profiilin piste on akselin väärällä puolella? Kirjaa oma hyväksymiskriteeri suunnitelmaan. Se on testin T11 odotettu tulos."],
        ["Kirjoita T09–T11.", "T09: profiilin pisteet. T10: segmenttien määrä 2 ja 33. T11: piste akselin väärällä puolella. Kirjaa odotukset ennen koodia."],
        ["Kysy kysymystilassa.", "Avaa GitHub Copilotin chat Ask-tilassa. Kysy, miten LatheGeometry lukee pisteet. Kysymystila vastaa, mutta ei muuta tiedostoja."],
        ["Tee kortit työsyklillä.", "Tee revolve, segmenttisäädin ja orbit. Orbit tarkoittaa, että näkymää kierretään hiirellä."]
      ],
      example: "T11:n hyväksymiskriteeri: \"Jos piste on akselin väärällä puolella, se siirretään akselille ja käyttäjä näkee huomautuksen.\"",
      notEnough: "\"Virheelliset pisteet käsitellään.\" Kriteeristä ei näe, mitä pisteelle tapahtuu eikä mitä käyttäjä näkee.",
      help: {
        title: "LatheGeometry ja profiili",
        tree: "SVG-profiili              LatheGeometry\nx = etäisyys akselista  →  points (Vector2-lista)\ny = korkeus (käännä)     →  segments = 3…32",
        actions: [
          "LatheGeometry saa listan pisteitä ja segmenttien määrän: `new LatheGeometry(pisteet, segmentit)`.",
          "SVG:n y-akseli kasvaa alaspäin, Three.js:n ylöspäin. Käännä y-arvot.",
          "Piste x = 0 on akselilla. Profiili piirretään akselin toiselle puolelle.",
          "Orbit: lisää näkymään drein `<OrbitControls />`."
        ],
        code: "REVOLVEN TARKISTUSLISTA\n[ ] valintatapa sovittu ja kirjattu\n[ ] T11:n kriteeri kirjattu ennen koodia\n[ ] segmenttisäädin rajaa arvot 3–32 (T10)\n[ ] kappale näkyy oikein päin\n[ ] orbit toimii hiirellä",
        test: "Piirrä maljakon puoliprofiili. Kokeile segmenttimääriä 3, 8 ja 32. Kappaleen pitää muuttua kulmikkaasta pyöreäksi.",
        links: [["three.js: LatheGeometry", "https://threejs.org/docs/#api/en/geometries/LatheGeometry"]]
      },
      sykli: true
    },
    46: {
      type: "feature",
      feature: "Viivapolusta syntyy putki, jossa on 3–8 sivua. Orientaatiokuutiolla kamera kääntyy katsomaan suoraan edestä, sivulta tai ylhäältä. View lock -painike lukitsee kierron.",
      excerpt: "Mallia pitää voida katsoa suoraan edestä, sivulta ja ylhäältä.",
      connection: "Inflate toistaa revolven kaavan: polku, geometria, säädin ja testit. Inflate tarkoittaa, että viivasta tulee putki. Toinen osa on kamera. Suunnitelmasi Orthographic Plane Snap tehdään kahdessa osassa: P0:ssa kamera kääntyy suoraan akselin suuntaan eli suoraan näkymään, P1:ssä lisätään ortografinen näkymä.",
      deliverable: "Testitapaukset T12–T14 · inflate ja sivumäärän säädin · TubeGeometryn rajoitteet `kirjastot.md`:ssä · orientaatiokuutio ja view lock -painike.",
      why: "Putkella tehdään johdot, sarvet ja raajat. Suora näkymä ja view lock tarvitaan tarkkaan työhön: ilman niitä kamera kääntyy vahingossa, kun siirrät osia viikolla 47.",
      done: "Inflate on valmis, kun oma polkusi muuttuu putkeksi, sivumäärän voi valita väliltä 3–8 ja T12–T13 menevät läpi. Kamera on valmis, kun kuution sivua klikkaamalla kamera kääntyy suoraan akselin suuntaan, view lock estää kierron ja T14 menee läpi. Jos kamera siirtyy viikolle 47, se on sovittu vaihtoehto eikä virhe.",
      record: "Kumpi osa valmistui ensin, TubeGeometryn rajoitteet, viikon funktio selityspohjalla ja vaatimustunnukset s7, k2, k3 ja p6.",
      skills: ["Toimintalogiikka: polku putkeksi", "Komponenttikirjaston rajoitteet", "Valmiit komponentit: orientaatiokuutio", "Käyttöliittymän tila: view lock"],
      termit: ["inflate", "orientaatiokuutio", "suora näkymä", "view lock"],
      steps: [
        ["Tee ensin inflate.", "Inflate on P0-kohta 4 ja kamera P0-kohta 6. Tee inflate ensin. Jos aika loppuu, kamera siirtyy viikon 47 alkuun. Siitä sovitaan palaverissa. Se on suunniteltu vaihtoehto."],
        ["Kirjoita T12–T14.", "T12: sivujen määrä 2 ja 9. T13: suljettu polku. T14: view lock on päällä, ja yrität kiertää näkymää. Kirjaa odotukset ennen koodia."],
        ["Tee inflate työsyklillä.", "Tee putki ja sivumäärän säädin. Kokeile omilla poluillasi. Kirjaa TubeGeometryn rajoitteet <code>project-docs/kirjastot.md</code>:hen."],
        ["Tee kamera työsyklillä.", "Orientaatiokuutio on kuutio näkymän kulmassa. Kun klikkaat sen sivua, kamera kääntyy katsomaan mallia suoraan sivun suunnasta. View lock on painike, joka estää kameran kiertymisen."]
      ],
      example: "Kameran hyväksymiskriteeri: \"Kun klikkaan kuution Front-sivua, kamera katsoo mallia suoraan edestä. Kaukana olevat osat näyttävät edelleen pienemmiltä. Se on oikein, koska ortografinen näkymä on P1.\"",
      notEnough: "\"Kamera toimii ortografisesti.\" Kriteeristä ei näe, mitä ruudulla tapahtuu, ja se lupaa P1-toiminnon.",
      help: {
        title: "TubeGeometry ja orientaatiokuutio",
        tree: "SVG-polku → käyrä (Curve) → TubeGeometry(käyrä, pituussegmentit, säde, sivut 3…8, suljettu)\nnäkymä: <GizmoHelper> + <GizmoViewcube />   ·   <OrbitControls enableRotate={!lukittu} />",
        actions: [
          "Tee polun pisteistä käyrä, esimerkiksi `new CatmullRomCurve3(pisteet)`.",
          "TubeGeometryn neljäs parametri on sivujen määrä. Rajaa se välille 3–8 (T12).",
          "Orientaatiokuutio: drein `GizmoHelper` ja `GizmoViewcube`.",
          "View lock: tallenna tila muuttujaan ja anna se OrbitControlsille: `enableRotate={!lukittu}`."
        ],
        code: "VIIKON TARKISTUSLISTA\n[ ] inflate ensin, kamera sitten\n[ ] sivumäärä rajattu 3–8\n[ ] suljettu polku sulkeutuu (T13)\n[ ] kuution sivu kääntää kameran suoraan akselin suuntaan\n[ ] view lock estää kierron (T14) ja näkyy painikkeessa tekstinä",
        test: "Paina view lock päälle. Yritä kiertää näkymää hiirellä. Näkymän ei pidä kääntyä.",
        links: [["three.js: TubeGeometry", "https://threejs.org/docs/#api/en/geometries/TubeGeometry"]]
      },
      sykli: true
    },
    47: {
      type: "feature",
      feature: "Osan voi valita, siirtää, kiertää ja skaalata. Lapset seuraavat vanhempaa.",
      excerpt: "Osia pitää voida valita, siirtää, kiertää ja skaalata.",
      connection: "Nyt muodot ovat valmiit ja kamera pysyy paikallaan view lockilla. Seuraavaksi osia muokataan. Viikon 44 scene graph hoitaa sen, että lapset seuraavat vanhempaa.",
      deliverable: "P0-tilanne käsitelty palaverissa · testitapaus T15 · valinta, siirto, kierto ja skaalaus.",
      why: "Ilman transformeja mallin osat jäävät siihen, mihin tuonti ne toi. Transformi tarkoittaa siirtoa, kiertoa ja skaalausta.",
      done: "Osan voi valita suunnitelmasi mukaan. Siirto, kierto ja skaalaus toimivat. T15 menee läpi, tai siitä on havaintoissue.",
      record: "P0-tilanne ja palaverin päätös, T15:n tulos, viikon funktio selityspohjalla ja vaatimustunnukset p7 ja s7.",
      skills: ["Toiminnot suunnitelman mukaan", "Scene graphin käyttö", "Havaintojen kirjaus"],
      termit: ["transformi"],
      steps: [
        ["Tuo P0-tilanne palaveriin.", "Palaverissa katsotaan, onko P0 aikataulussa. Jos ei ole, ohjaaja päättää, mikä katselmoidaan keskeneräisenä ja mikä tehdään viikolla 4. Jos kamera siirtyi tälle viikolle, tee se ensin."],
        ["Kirjoita T15.", "Vanhempaa siirretään 10 yksikköä x-suunnassa. Mihin odotat lapsen siirtyvän? Kirjaa odotus ennen koodia."],
        ["Tee valinta ja transformit työsyklillä.", "Käytä suunnitelmasi valinnan toimintaa. Käytä view lockia, kun siirrät osia."],
        ["Aja T15.", "Jos T15 ei mene läpi kahdella yrityksellä, avaa havaintoissue."]
      ],
      example: "T15:n kirjaus issuessa: \"T15: vanhempi x +10. Odotin, että lapsen maailmakoordinaatti x muuttuu saman verran. Havaittu: muuttui saman verran. Läpi.\"",
      notEnough: "\"Lapset seuraavat, testattu.\" Kirjauksesta ei näe syötettä, odotusta eikä havaintoa.",
      help: {
        title: "Transformit ja lapset",
        tree: "Group \"Vartalo\"            ← TransformControls siirtää tätä\n  └─ Group \"Pää\"           ← seuraa automaattisesti\n       └─ Mesh \"Korvat\"",
        actions: [
          "Drein `TransformControls` antaa kahvat. Tila vaihdetaan: `mode=\"translate\"`, `\"rotate\"` tai `\"scale\"`.",
          "Three.js:ssä lapsi on vanhemman koordinaatistossa. Kun vanhempi liikkuu, lapsi liikkuu mukana ilman omaa koodia.",
          "Lapsen maailmakoordinaatin saat näin: `lapsi.getWorldPosition(new Vector3())`. Sillä tarkistetaan T15.",
          "Poista view lock hetkeksi, jos haluat katsoa tulosta toisesta suunnasta."
        ],
        code: "TRANSFORMIEN TARKISTUSLISTA\n[ ] valinta toimii suunnitelman mukaan\n[ ] siirto, kierto ja skaalaus vaihdettavissa\n[ ] lapset seuraavat vanhempaa (T15)\n[ ] tila näkyy tekstinä: Siirto, Kierto tai Skaalaus",
        test: "Siirrä vartaloa. Pään ja korvien pitää liikkua mukana. Siirrä sitten päätä. Vartalon ei pidä liikkua."
      },
      sykli: true
    },
    48: {
      type: "feature",
      feature: "Pivot on oletuksena kappaleen keskipisteessä. Sen voi asettaa transformivalikossa prosentteina X/Y/Z.",
      connection: "Viikolla 47 osat kiersivät ja skaalautuivat keskipisteensä ympäri. Nyt käyttäjä valitsee pisteen itse. Pivot on piste, jonka ympäri kappale kiertää ja skaalautuu.",
      deliverable: "Pivotin syötteen tarkistuksen rajapinta · testitapaukset T16–T18 · pivot · transformivalikko prosenttisyötöllä.",
      why: "Ilman pivotia korva kiertyy oman keskipisteensä ympäri eikä kiinnityskohdan ympäri. Prosenttisyöttö on tarkempi kuin hiirellä vetäminen.",
      done: "Pivot 50/50/50 on keskipisteessä, prosentit muuttavat pivotin paikkaa, virheellinen syöte käsitellään kriteerisi mukaan, ja T16–T18 menevät läpi.",
      record: "Pivotin syötteen tarkistus selityspohjalla (tämä on viikon funktio), T16–T18 ja vaatimustunnukset p4, p6 ja s7.",
      skills: ["Valinta: syötteen tarkistus", "Toimintalogiikka: pivotin laskenta", "Käyttöliittymä vaatimuksen mukaan"],
      termit: ["pivot", "transformivalikko"],
      steps: [
        ["Kirjoita rajapinta.", "Pivotin syötteen tarkistus: nimi, syöte (prosentti) ja paluuarvo. Kirjaa korttiin."],
        ["Kirjoita T16–T18.", "T16: 50/50/50. T17: 0 % ja 100 %. T18: −10, 150 ja teksti. Kirjaa, mitä odotat. T18:n odotus on oma kriteerisi: hylätäänkö arvo vai rajataanko se."],
        ["Tee pivot ja tarkistus työsyklillä.", "Tee ensin syötteen tarkistus puhtaana funktiona. Tee sitten pivotin siirto."],
        ["Lisää transformivalikko.", "Transformivalikko on valikko, jossa pivot syötetään prosentteina. X, Y ja Z ovat omia kenttiään. Kentillä on nimi, ja ne toimivat näppäimistöllä käyttöliittymävaatimuksesi mukaan."]
      ],
      example: "Selityspohja: \"Saa prosentin. Palauttaa luvun 0–100 tai virheen. Valitsee: jos syöte ei ole luku, palauttaa virheen. Jos luku on alle 0, palauttaa 0. Toistaa: ei toistoa. T18 tarkistaa virheelliset syötteet.\"",
      notEnough: "\"Funktio tarkistaa syötteen.\" Selityksestä ei näe, mitä tapahtuu arvolle −10 tai tekstille.",
      help: {
        title: "Pivot prosentteina",
        tree: "rajat = Box3().setFromObject(osa)       min ja max\npivot = min + (max − min) × prosentti / 100\n50/50/50 → keskipiste · 0/0/0 → min-kulma · 100/100/100 → max-kulma",
        actions: [
          "Laske osan rajat: `new Box3().setFromObject(osa)`.",
          "Laske pivot jokaiselle akselille erikseen yllä olevalla kaavalla.",
          "Siirrä pivot: laita osa ryhmän sisään, siirrä ryhmä pivotin kohtaan ja osa vastakkaiseen suuntaan.",
          "Käytä kentissä `<input type=\"number\">`- ja `<label>`-elementtejä, jotta ruudunlukija lukee kentän nimen."
        ],
        code: "PIVOTIN TARKISTUSLISTA\n[ ] rajapinta korttiin ennen toteutusta\n[ ] tarkistus on puhdas funktio\n[ ] 50/50/50 on keskipiste (T16)\n[ ] 0 ja 100 ovat reunat (T17)\n[ ] virheellinen syöte kriteerin mukaan (T18)\n[ ] kentillä on label",
        test: "Aseta korvalle pivot 50/0/50. Kierrä korvaa. Sen pitää kiertyä alareunansa ympäri."
      },
      sykli: true
    },
    49: {
      type: "feature",
      feature: "Malli tallentuu .obj-tiedostoksi, jossa jokainen osa on oma objektinsa. Tiedosto aukeaa Blenderissä.",
      excerpt: "Valmis malli viedään .obj-tiedostoksi niin, että jokainen osa on oma objektinsa.",
      connection: "Mallin osat ovat puussa, ja niillä on nimet. Nyt ne viedään tiedostoon. OBJ on 3D-tiedostomuoto, jossa jokainen osa alkaa rivillä, jonka alussa on o-kirjain. Viikolla on myös ensimmäinen virheenkorjausketju.",
      deliverable: "Objektijaon rajapinta · testitapaukset T19–T20 · .obj-vienti · tarkistus VS Codessa ja Blenderissä · virheenkorjausketju 1 ja sen regressiotesti.",
      why: "Ilman vientiä malli jää sovellukseen. Asiakas haluaa jatkaa mallia toisessa ohjelmassa.",
      done: "Kolmen osan mallista syntyy .obj-tiedosto, jossa on kolme o-riviä osien nimillä. Tiedosto aukeaa Blenderissä. T19–T20 menevät läpi. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa.",
      record: "Objektijako selityspohjalla (tämä on viikon funktio), virheenkorjausketju 1 ja vaatimustunnukset p2, s10 ja k3.",
      skills: ["Tiedon käsittely: malli tiedostoksi", "Toisto: osat objekteiksi", "Virheen syy omin sanoin", "Regressiotesti"],
      termit: ["OBJ", "virheenkorjausketju", "regressiotesti", "vikatehtävä"],
      steps: [
        ["Kirjoita rajapinta ja testit.", "Kirjoita objektijaon rajapinta korttiin. Kirjoita T19: kolmen osan malli. T20: tyhjä näkymä. Kirjaa, mitä odotat."],
        ["Tee vienti työsyklillä.", "Osien nimien pitää säilyä tiedostossa."],
        ["Tarkista tiedosto kahdella tavalla.", "Avaa .obj VS Codessa. Laske rivit, jotka alkavat o-kirjaimella. Avaa tiedosto sitten Blenderissä kuvaohjeen mukaan."],
        ["Kirjoita virheenkorjausketju 1.", "Valitse yksi havaintoissue. Kirjaa siihen kuusi osaa: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti."],
        ["Kirjoita regressiotesti.", "Regressiotesti on testi, joka toistaa korjatun virheen ja jää testeihin. Kirjoita se kaistalla B kuten kohdassa 3a. Nimeä se issuen mukaan, esimerkiksi regressiotesti #12."],
        ["Pyydä vikatehtävä, jos havaintoissueita ei ole.", "Kerro siitä palaverissa. Ohjaaja antaa vikatehtävän. Vikatehtävä on tarkoituksellinen virhe, josta ketju tehdään."]
      ],
      example: "Syy omin sanoin: \"Pivot laskettiin maailmakoordinaateissa, vaikka lapsi on vanhemman koordinaatistossa. Siksi lapsi hyppäsi.\"",
      notEnough: "\"Syy: koodissa oli bugi.\" Kirjauksesta ei näe, mikä meni väärin eikä miksi.",
      kuvaohjeet: ["blender-obj"],
      pohjat: [
        { otsikko: "Virheenkorjausketju havaintoissueen", teksti: "## Virheenkorjausketju\n1. Havainto: \n2. Toistamisohje: \n3. Syy omin sanoin: \n4. Korjauscommit: \n5. Uusintatesti: \n6. Regressiotesti: regressiotesti #(tämän issuen numero)" }
      ],
      help: {
        title: "OBJExporter ja osien nimet",
        tree: "o Vartalo\nv …  f …\no Pää\nv …  f …\no Korvat\nv …  f …",
        actions: [
          "Tuo OBJExporter: `import { OBJExporter } from \"three/examples/jsm/exporters/OBJExporter.js\"`.",
          "`new OBJExporter().parse(näkymä)` palauttaa tekstin. Jokainen Mesh, jolla on nimi, saa oman o-rivin.",
          "Anna jokaiselle Meshille nimi hierarkian solmusta.",
          "Lataa teksti tiedostona: tee `Blob` ja linkki, jossa on `download`-attribuutti."
        ],
        code: "VIENNIN TARKISTUSLISTA\n[ ] rajapinta korttiin ennen toteutusta\n[ ] o-rivejä on yhtä monta kuin osia (T19)\n[ ] tyhjä näkymä käsitelty (T20)\n[ ] nimet ovat samat kuin hierarkiapaneelissa\n[ ] tiedosto aukeaa Blenderissä",
        test: "Vie kolmen osan malli. Avaa tiedosto VS Codessa ja hae tekstiä \"o \". Osumia pitää olla kolme.",
        links: [["three.js: OBJExporter", "https://threejs.org/docs/#examples/en/exporters/OBJExporter"]]
      },
      sykli: true
    },
    50: {
      type: "feature",
      feature: "Projektin voi tallentaa JSON-tiedostoksi ja avata samassa tilassa. MVP on julkaistu versiona v0.1.",
      excerpt: "Keskeneräinen työ pitää voida tallentaa ja avata myöhemmin samassa tilassa.",
      connection: "Tämä on MVP:n viimeinen P0-kohta. JSON on tekstimuotoinen tiedosto, johon projektin tiedot tallennetaan. Viikon lopussa MVP julkaistaan katselmointia varten.",
      deliverable: "Tallennustapojen vertailu suunnitelmassa · testitapaukset T21–T22 · tallennus ja avaus · tietoturva-arvio · tagi v0.1.",
      why: "Ilman tallennusta keskeneräinen malli katoaa, kun sivu suljetaan. Ilman julkaisua asiakkaat eivät voi kokeilla MVP:tä viikolla 51.",
      done: "Tallennettu projekti avautuu samassa tilassa, rikottu tiedosto antaa virheilmoituksen, `project-docs/tietoturva.md` on repositoryssa, ja tagi v0.1 näkyy GitHubissa.",
      record: "Tallennustavan valinta perusteluineen, oman mallisi JSON-koko, tietoturva-arvion tärkein uhka ja vaatimustunnukset s8, s9, s11 ja s14.",
      skills: ["Tietovaraston valinta", "Yhteys tietovarastoon", "Tietoturvan arviointi", "Julkaisu ja versiointi"],
      termit: ["JSON", "tagi", "tietoturva-arvio"],
      steps: [
        ["Vertaa tallennustapoja.", "Käytä oman suunnitelmasi kriteerejä. Säilyvätkö polut, parametrit, transformit ja vanhempi–lapsi-suhteet? Vertaa ainakin JSON-tiedostoa ja selaimen tallennusta. Kirjaa oman mallisi JSON-tiedoston koko."],
        ["Kirjoita T21–T22.", "T21: tallenna ja avaa. T22: rikottu JSON-tiedosto. Kirjaa, mitä odotat."],
        ["Tee tallennus ja avaus työsyklillä.", "Tallenna tiedostoon versionumero. Silloin vanhan tiedoston tunnistaa myöhemmin."],
        ["Kirjoita tietoturva-arvio.", "Tee taulukko: uhka, testi, tulos ja toimenpide. Käy läpi ainakin haitallinen SVG (T04) ja rikottu JSON (T22). Tallenna arvio tiedostoon <code>project-docs/tietoturva.md</code>."],
        ["Julkaise MVP.", "Tee tagi v0.1 ja release GitHubissa. Tagi on nimetty versio. Tarkista Pages-osoite toisella laitteella."]
      ],
      example: "Vertailun rivi: \"JSON-tiedosto: säilyttää polut, parametrit ja suhteet, siirtyy koneelta toiselle. Oma malli 14 kt.\"",
      notEnough: "\"JSON, koska se on yleinen.\" Perustelu ei liity omaan malliin eikä omiin kriteereihin.",
      help: {
        title: "Tallennus ja avaus",
        tree: "{\n  \"versio\": 1,\n  \"osat\": [ { \"nimi\": \"Vartalo\", \"polku\": \"…\", \"muoto\": \"revolve\", \"segmentit\": 12,\n              \"transformi\": { … }, \"lapset\": [ … ] } ]\n}",
        actions: [
          "Tallenna oma data, älä Three.js-olioita: `JSON.stringify(data, null, 2)`.",
          "Avaa tiedosto kuten viikolla 43: `await file.text()`.",
          "Lue JSON `try`–`catch`-lohkossa. Rikottu tiedosto antaa silloin virheilmoituksen eikä kaada sovellusta (T22).",
          "Tarkista, että tiedostossa on `versio` ja `osat`, ennen kuin rakennat mallin."
        ],
        code: "TALLENNUKSEN TARKISTUSLISTA\n[ ] tallennetaan oma data, ei Three.js-olioita\n[ ] versionumero tiedostossa\n[ ] avaus palauttaa saman tilan (T21)\n[ ] rikottu tiedosto → virheilmoitus (T22)\n[ ] tietoturva-arvio repositoryssa",
        test: "Tallenna malli. Lataa sivu uudelleen. Avaa tiedosto. Mallin pitää näyttää samalta."
      },
      sykli: true
    },
    51: {
      type: "katselmointi",
      feature: "Asiakkaat ovat kokeilleet MVP:tä. Jokaisesta havainnosta on issue, jossa on asiakkaan antama prioriteetti.",
      excerpt: "Ennen joulua kokeilemme itse ensimmäistä toimivaa versiota ja kerromme, mitä muutetaan.",
      connection: "Viikolla 50 julkaisit MVP:n. Nyt asiakkaat kokeilevat sitä. Katselmointi tarkoittaa, että asiakas kokeilee versiota ja kertoo, mitä muutetaan. Viikolla on neljä työpäivää.",
      deliverable: "Viiden minuutin demo · katselmointiloki rooleilla · havainnot issueina prioriteetteineen · tilatiedoston Seuraavana-kohta viikolle 2.",
      why: "Ilman katselmointia jatkokehitys perustuu arvaukseen. Asiakkaiden prioriteetit ohjaavat, mitkä P1-toiminnot tehdään ensin.",
      done: "Katselmointiloki on tiedostossa `project-docs/katselmointi.md`, jokaisesta havainnosta on issue prioriteetteineen, ja tilatiedoston Seuraavana-kohdassa on viikon 2 ensimmäinen tehtävä issue-numeroineen.",
      record: "Asiakkaiden tärkein havainto tiivistettynä, oma tulkintasi erikseen ja vaatimustunnukset s2, s3, p10 ja s4.",
      skills: ["Version katselmointi", "Asiakaslähtöinen viestintä", "Palautteen priorisointi"],
      termit: ["katselmointi"],
      steps: [
        ["Varaa katselmointiaika.", "Varaa aika asiakkaiden kanssa Teamsissa. Tarkista ohjaajalta, miten katselmointi kirjataan."],
        ["Valmistele demo.", "Näytä viidessä minuutissa omalla Inkscape-tiedostollasi: tuonti, revolve, inflate, transformit ja vienti. Harjoittele kerran ajastettuna."],
        ["Pidä katselmointi.", "Anna asiakkaiden kokeilla itse. Kirjaa havainnot lokiin omin sanoin tiivistettynä. Älä kirjoita julkiseen repositoryyn nimiä tai sanatarkkoja lausumia."],
        ["Kirjoita tulkinta erikseen.", "Kirjoita oma tulkintasi lokin kohtaan Oma tulkinta. Älä sekoita sitä asiakkaiden havaintoihin."],
        ["Tee havainnoista issuet.", "Tee jokaisesta havainnosta issue. Kirjaa siihen asiakkaan antama prioriteetti."],
        ["Päivitä tilatiedosto.", "Kirjoita Seuraavana-kohtaan viikon 2 ensimmäinen tehtävä ja sen issue-numero. Tee commit ennen lomaa."]
      ],
      pohjat: [
        { otsikko: "Katselmointiloki (project-docs/katselmointi.md)", teksti: "# Katselmointi pp.kk.vvvv\nVersio: v0.1 (commit ___)\nOsallistujat: asiakas 1, asiakas 2 (roolit, ei nimiä)\n\n## Asiakkaiden havainnot tiivistettynä (ei nimiä, ei sanatarkkoja lausumia)\n- \n\n## Oma tulkinta\n- \n\n## Sovitut muutokset\n- issue #__ · prioriteetti __" },
        { otsikko: "Demon runko (5 min)", teksti: "1. Tavoite yhdellä lauseella\n2. Tuonti omasta Inkscape-tiedostosta\n3. Revolve ja inflate\n4. Transformit ja pivot\n5. Vienti .obj-tiedostoksi\n6. Kysymys asiakkaille: mitä muutetaan ensin?" }
      ],
      example: "Loki: \"Havainto (asiakas 1): segmenttien määrän säädintä ei löytynyt. Oma tulkinta: säädin on liian pieni ja väärässä paikassa.\"",
      notEnough: "\"Asiakkaat pitivät työkalusta. Pieniä korjauksia.\" Lokista ei näe, mitä asiakkaat havaitsivat eikä mitä muutetaan."
    },
    2: {
      type: "pohjustus",
      feature: "Kaikki testit menevät läpi. P1-järjestys on sovittu tuntiarvioineen. Yksi pieni korjaus katselmoinnista on GitHubissa.",
      connection: "Loma on ohi. Tilatiedosto kertoo, mihin jäit. Tällä viikolla ei tehdä uusia ominaisuuksia.",
      deliverable: "Testiajon tulos päiväkirjassa · P1-järjestys tuntiarvioineen issueissa · yksi pieni korjaus kaistalla B.",
      why: "Loman jälkeen ympäristö voi olla rikki ja asiat unohtuneet. Kun kaikki testit menevät läpi, tiedät, että lähtötaso on kunnossa.",
      done: "`npm test` näyttää, että kaikki testit menevät läpi, P1-järjestys on sovittu palaverissa, ja korjauksen commit on GitHubissa.",
      record: "Testiajon tulos, P1-järjestys ja arviot, palaverin arvio MVP:n ratkaisuista ja vaatimustunnukset p1, s4, s6 ja p10.",
      skills: ["Kehitysympäristön käyttö", "Tärkeysjärjestys", "Työmäärän arviointi"],
      steps: [
        ["Käynnistä ympäristö.", "Aja <code>npm install</code>, <code>npm run dev</code> ja <code>npm test</code>. Kirjaa tulos päiväkirjaan."],
        ["Lue tilatiedosto.", "Avaa <code>PROJEKTIN-TILA.md</code>. Aloita uusi Copilot-keskustelu tilatiedostolla."],
        ["Ehdota P1-järjestys.", "Asiakkaat antoivat prioriteetit katselmoinnissa. Ehdota järjestys. Arvioi jokaiselle toiminnolle tunnit."],
        ["Arvioi MVP palaverissa.", "Käy palaverissa läpi, mikä MVP:n ratkaisu kestää P1-toiminnot ja mikä ei. Ohjaaja on tässä tiimin jäsenen roolissa. Sovi P1-järjestys."],
        ["Tee pieni korjaus kaistalla B.", "Valitse katselmoinnin havaintoissueista pieni korjaus. Tee se työsyklillä."],
        ["Tarkista krediitit.", "Budjetti nollautui 1.1. Kirjaa tammikuun lähtötilanne päiväkirjaan."]
      ],
      example: "P1-järjestys: \"1. Päivitä SVG, 6 h (asiakkaan prioriteetti 1). 2. Kulmasnappaus, 3 h. 3. PiP-esikatselu, 8 h.\"",
      notEnough: "\"P1: päivitys, snappaus ja PiP.\" Järjestyksestä puuttuvat arviot ja asiakkaan prioriteetti.",
      sykli: true
    },
    3: {
      type: "feature",
      feature: "Päivitä SVG -toiminto rakentaa mallin uudelleen muokatusta tiedostosta. Osien transformit säilyvät.",
      excerpt: "Kun piirrosta muokataan Inkscapessa, mallin pitää päivittyä ilman, että kaikki tehdään alusta.",
      connection: "Tämä on asiakkaiden tärkein P1-toiminto. Tällä viikolla työ tehdään ensimmäisen kerran omassa haarassa ja liitetään päähaaraan pull requestilla.",
      deliverable: "Sovittu tunnistustapa · testitapaus T23 · toiminto omassa haarassa · pull request ja merge.",
      why: "Ilman päivitystä jokainen Inkscape-muutos pakottaa tekemään transformit uudelleen. Silloin vektoripohjaisuus menettää hyötynsä.",
      done: "Muokattu SVG päivittyy malliin, transformit säilyvät, kaikki testit menevät läpi, ja pull request on yhdistetty päähaaraan.",
      record: "Tunnistustapa ja sen perustelu, pull requestin linkki, viikon funktio selityspohjalla ja vaatimustunnukset s13, s7 ja p9.",
      skills: ["Ohjelman osan liittäminen versioon", "Toimintalogiikka: osien tunnistus", "Ongelmanratkaisu yhdessä"],
      termit: ["haara", "pull request", "merge"],
      steps: [
        ["Sovi tunnistustapa.", "Sovi palaverissa, miten osa tunnistetaan uudesta tiedostosta: nimellä vai tunnisteella. Kirjaa päätös suunnitelmaan."],
        ["Kirjoita T23.", "Muokkaa testitiedostoa Inkscapessa ja päivitä malli Päivitä SVG -toiminnolla. Mitä odotat transformeille? Kirjaa ennen koodia."],
        ["Tee oma haara.", "Haara on oma työlinja. Muutokset eivät vaikuta päähaaraan <code>main</code>, ennen kuin liität ne."],
        ["Tee toiminto työsyklillä haarassa.", "Tee kortit tavalliseen tapaan. Tee commitit haaraan."],
        ["Aja kaikki testit.", "Aja <code>npm test</code>. Kaikkien vanhojen testien pitää mennä läpi."],
        ["Tee pull request ja merge.", "Pull request on pyyntö liittää haara päähaaraan. Lue muutokset itse. Tee sitten merge eli liitä haara päähaaraan."]
      ],
      example: "Tunnistustavan perustelu: \"Tunnistan osat inkscape:label-nimellä, koska nimet näkyvät hierarkiapaneelissa ja pysyvät, kun polkua muokataan.\"",
      notEnough: "\"Tunnistan osat nimellä.\" Perustelusta puuttuu, miksi nimi on parempi kuin tunniste omassa työssäsi.",
      kuvaohjeet: ["github-pull-request"],
      sykli: true
    },
    4: {
      type: "feature",
      feature: "Jos P0-rästejä on, ne ovat valmiit. Muuten seuraava sovittu P1-toiminto toimii.",
      connection: "Tämä on joustoviikko. Ensin tehdään P0-rästit, jos viikon 47 palaverissa niin sovittiin. Sitten jatketaan P1-järjestyksessä.",
      deliverable: "P0-rästit omassa haarassa tai seuraava P1-toiminto · testitapaus T24 · virheenkorjausketju 2.",
      why: "P0 painaa arvioinnissa enemmän kuin P1. Rästit tehdään ensin, jotta MVP on kokonainen.",
      done: "P0-rästit on liitetty päähaaraan pull requestilla, tai P1-toiminto toimii ja T24 menee läpi. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa.",
      record: "Mitä tehtiin ja miksi juuri se, T24:n tulos, virheenkorjausketju 2 ja vaatimustunnukset p2 ja s7.",
      skills: ["Priorisointi", "Toimintalogiikka", "Virheenkorjaus"],
      steps: [
        ["Tarkista rästit.", "Katso palaverissa, jäikö P0:sta jotain kesken. Jos jäi, tee se ensin omassa haarassa ja liitä pull requestilla."],
        ["Valitse P1-toiminto.", "Jos rästejä ei ole, ota P1-järjestyksen seuraava toiminto."],
        ["Kirjoita T24.", "Kirjoita toiminnon testi ennen toteutusta. Esimerkiksi kulmasnappauksessa: mitä odotat, kun kulma on 22° ja kun se on 23°?"],
        ["Tee toiminto työsyklillä.", "Käytä haaraa, jos muutos koskee useaa tiedostoa."],
        ["Kirjoita virheenkorjausketju 2.", "Valitse havaintoissue ja kirjaa kuusi osaa kuten viikolla 49. Kirjoita regressiotesti kaistalla B."]
      ],
      example: "Päiväkirja: \"Tein ensin P0-rästin: kamera ei kääntynyt Top-sivusta. Sovittu palaverissa 12.1. Sitten kulmasnappaus.\"",
      notEnough: "\"Tein P1-juttuja.\" Merkinnästä ei näe, mikä tehtiin eikä miksi juuri se.",
      pohjat: [
        { otsikko: "Virheenkorjausketju havaintoissueen", teksti: "## Virheenkorjausketju\n1. Havainto: \n2. Toistamisohje: \n3. Syy omin sanoin: \n4. Korjauscommit: \n5. Uusintatesti: \n6. Regressiotesti: regressiotesti #(tämän issuen numero)" }
      ],
      sykli: true
    },
    5: {
      type: "feature",
      feature: "Sovelluksessa on isot kahvat ja näppäimistökäyttö. Lighthousen tulokset ennen ja jälkeen on kirjattu. Mikään kohta ei heikentynyt, ja löydetyt puutteet on korjattu.",
      excerpt: "Työkalun pitää olla selkeä: iso tila piirtämiselle, isot painikkeet ja hyvä kontrasti.",
      connection: "Perusteema tuli sovellukseen jo viikolla 41. Nyt teet saavutettavuuden loppuun: isot kahvat, näppäimistökäyttö ja ruudunlukijan tuki. Kahva on tartuntakohta, josta osaa siirretään, kierretään tai skaalataan. Lighthouse on Chromen työkalu, joka mittaa sivun saavutettavuuden.",
      deliverable: "Lighthouse-perusmittaus · testitapaukset T25–T26 · isot kahvat ja näppäimistökäyttö · Lighthouse-jälkimittaus.",
      why: "Saavutettavuus on asiakkaan vaatimus. Ilman mittausta et voi näyttää, mikä parani.",
      done: "Lighthousen tulokset ennen ja jälkeen on kirjattu, mikään kohta ei heikentynyt, T25–T26 menevät läpi, ja löydetyt puutteet on korjattu tai kirjattu issueiksi.",
      record: "Lighthousen tulokset ennen ja jälkeen, T25–T26 ja vaatimustunnukset p6 ja p3.",
      skills: ["Käyttöliittymä vaatimuksen mukaan", "Saavutettavuuden testaus", "Mittaaminen ennen ja jälkeen"],
      termit: ["kahva", "Lighthouse"],
      steps: [
        ["Aja Lighthouse ensin.", "Avaa sovellus Chromessa. Avaa kehittäjätyökalut ja Lighthouse. Aja saavutettavuusmittaus. Kirjaa tulos."],
        ["Tarkista vaatimus.", "Lue käyttöliittymävaatimuksesi suunnitelmasta. Mitä vielä puuttuu?"],
        ["Kirjoita T25–T26.", "T25: käytä kaikkia painikkeita näppäimistöllä. T26: testaa ruudunlukijalla, onko jokaisella painikkeella nimi. Kirjaa, mitä odotat."],
        ["Tee kahvat ja näppäimistö työsyklillä.", "Tee transformikahvoista isot. Tarkista, että Tab-järjestys on looginen."],
        ["Mittaa uudelleen.", "Aja T25–T26 ja Lighthouse uudelleen. Vertaa tuloksia. Kirjaa, mikä parani ja mikä jäi."]
      ],
      example: "Kirjaus: \"Lighthouse ennen 86, jälkeen 97. Korjattu: kahdelta painikkeelta puuttui nimi. Jäi: view lockin tila ei vaihdu ruudunlukijalle, issue #31.\"",
      notEnough: "\"Saavutettavuus parani.\" Kirjauksesta puuttuvat luvut ja se, mikä muuttui.",
      kuvaohjeet: ["chrome-lighthouse"],
      sykli: true
    },
    6: {
      type: "julkaisu",
      feature: "Julkaisuehdokas v1.0-rc1 on jäädytetty. Toinen opiskelija on kulkenut README:n avulla koko polun Inkscape-piirroksesta .obj-tiedostoon.",
      excerpt: "Valmis tarkoittaa meille tätä: työkalu on verkossa, oma piirroksemme muuttuu malliksi, .obj aukeaa toisessa ohjelmassa, ja mukana on ohje, jolla joku muu saa työkalun käyttöön kysymättä meiltä.",
      connection: "Julkaisuehdokas (RC) on versio, jossa sisältö on jäädytetty. Sisältöjäädytys tarkoittaa, että uusia ominaisuuksia ei enää lisätä. Tällä viikolla testataan, saako joku muu työkalun käyttöön pelkällä ohjeella.",
      deliverable: "Tagi v1.0-rc1 · README ja käyttöohje · julkaisutestin epäröintilista.",
      why: "Jos ohje toimii vain sinulle, asiakas ei saa työkalua käyttöön. Jokainen epäröinti on ohjeen korjauslista.",
      done: "Julkaisutestaajan .obj-tiedosto aukeaa, ja epäröinnit on listattu pöytäkirjaan. Testaajan nimi ja sanatarkat lausumat on lähetetty ohjaajalle Teamsissa. Repositoryyn on kirjattu vain rooli.",
      record: "Julkaisutestin tärkein epäröintikohta roolilla kirjattuna, ohjeeseen tehty korjaus ja vaatimustunnukset k7, s2 ja s14.",
      skills: ["Dokumentointi sovitulla tavalla", "Julkaisuehdokas", "Asiakaslähtöinen viestintä"],
      termit: ["RC", "sisältöjäädytys"],
      steps: [
        ["Varaa testiaika ja kone.", "Sovi julkaisutestaajan kanssa aika. Varmista, että hänen koneellaan on Inkscape."],
        ["Jäädytä ja tee tagi.", "Jäädytä sisältö. Tee tagi v1.0-rc1 ja release."],
        ["Täydennä README.", "Kirjoita README ja käyttöohje. Kerro Inkscapen nimeämissäännöt: layerit, ryhmät ja mahdolliset nimimerkinnät."],
        ["Pidä julkaisutesti.", "Anna testaajalle vain README. Seuraa, älä neuvo. Testaaja kulkee polun: piirros, tuonti, revolve tai inflate ja vienti."],
        ["Listaa epäröinnit.", "Kirjaa pöytäkirjaan jokainen kohta, jossa testaaja epäröi. Kirjoita se omin sanoin ja roolilla \"julkaisutestaaja\". Lähetä testaajan nimi ja sanatarkat lausumat ohjaajalle Teamsissa."],
        ["Korjaa ohje.", "Korjaa README jokaisen epäröinnin kohdalta. Tee estävistä virheistä issuet viikolle 7."]
      ],
      pohjat: [
        { otsikko: "Julkaisutestin pöytäkirja (project-docs/julkaisutesti.md)", teksti: "# Julkaisutesti pp.kk.vvvv\nVersio: v1.0-rc1\nTestaaja: julkaisutestaaja (rooli)\nLaite ja selain: \n\n## Polku\n1. Piirros Inkscapessa: \n2. Tuonti: \n3. Revolve tai inflate: \n4. Vienti .obj: \n\n## Epäröinnit omin sanoin (ei sanatarkkoja lausumia)\n- \n\n## Korjaukset ohjeeseen\n- " }
      ],
      example: "Epäröinti: \"Julkaisutestaaja ei tiennyt, tuleeko merkintä layerin nimen eteen vai perään. Korjaus: README:hen esimerkki nimestä.\"",
      notEnough: "\"Testi meni hyvin.\" Pöytäkirjasta ei näe, missä testaaja epäröi."
    },
    7: {
      type: "julkaisu",
      feature: "Julkaisutestin estävät havainnot on korjattu. Versio v1.0 on julki. Asiakkaat ovat vahvistaneet, että se toimii heidän koneellaan. Näyttömatriisin jokaisella rivillä on linkki työnäytteeseen.",
      excerpt: "Valmis tarkoittaa meille tätä: työkalu on verkossa, oma piirroksemme muuttuu malliksi, .obj aukeaa toisessa ohjelmassa, ja mukana on ohje, jolla joku muu saa työkalun käyttöön kysymättä meiltä.",
      connection: "Viikolla 6 löytyivät viimeiset esteet. Nyt ne korjataan, ja v1.0 julkaistaan. Samalla näyttöaineisto linkitetään valmiiksi.",
      deliverable: "Virheenkorjausketju 3 · tagi v1.0 ja release-teksti · asiakkaiden vahvistus · linkitetty näyttömatriisi.",
      why: "Julkaisu ilman korjauksia jättää asiakkaalle tunnetut viat. Ilman linkitystä arvioija ei löydä työnäytteitä.",
      done: "Estävät issuet on suljettu, tagi v1.0 näkyy GitHubissa, asiakkaat ovat vahvistaneet toimivuuden, ja jokaisella matriisin rivillä on linkki.",
      record: "Virheenkorjausketju 3, asiakkaiden vahvistus ja vaatimustunnukset p2, s12, s14 ja k6.",
      skills: ["Virheenkorjaus", "Julkaisu tuotantoon", "Näyttöaineiston kokoaminen"],
      termit: ["työnäyte", "näyttömatriisi"],
      steps: [
        ["Korjaa estävät havainnot.", "Korjaa viikon 6 estävät issuet työsyklillä."],
        ["Kirjoita virheenkorjausketju 3.", "Valitse yksi korjauksista. Kirjaa ketjun kuusi osaa kuten viikolla 49."],
        ["Julkaise v1.0.", "Tee tagi v1.0 ja release. Kirjoita release-tekstiin, mitä versiossa on."],
        ["Pyydä asiakkaiden vahvistus.", "Lähetä asiakkaille linkki viestipohjalla. Pyydä vahvistus, että työkalu toimii heidän koneellaan."],
        ["Linkitä näyttömatriisi.", "Työnäyte on yksi tuotos, joka osoittaa osaamisesi. Päiväkirjassa on jokaisen viikon kohdalla vaatimustunnukset. Kopioi päiväkirjasta linkit näyttömatriisin riveille tunnusten mukaan."]
      ],
      example: "Matriisin rivi: \"s13: pull request #24 (viikko 3), merge-commit a1b2c3d.\"",
      notEnough: "\"s13: tehty.\" Rivistä puuttuu linkki työnäytteeseen.",
      pohjat: [
        { otsikko: "Viesti asiakkaille (Teams)", teksti: "Hei Matti ja Antti,\nVektoripaja v1.0 on julkaistu: (osoite)\nOhje: (README-linkki)\nVoitteko vahvistaa, että työkalu toimii teidän koneellanne?" }
      ],
      sykli: true
    },
    9: {
      type: "naytto",
      rutiini: false,
      feature: "Ajastettu 8–10 minuutin demo on pidetty. Kaikki viisi osaa on näytetty. Aineisto on luovutettu pe 5.3.2027.",
      connection: "Tällä viikolla ei lisätä mitään uutta. Osaaminen tehdään löydettäväksi ja näytetään.",
      deliverable: "Jäädytetty repository · harjoiteltu demo · itsearviointi ohjaajalle · luovutettu näyttöaineisto.",
      why: "Arvioija näkee osaamisesi vain, jos työnäytteet löytyvät ja osaat selittää ne.",
      done: "Demo on pidetty 8–10 minuutissa, kaikki viisi osaa on näytetty, itsearviointi on lähetetty ohjaajalle, ja aineisto on luovutettu perjantaina.",
      record: "Demon viisi osaa ja kesto, itsearvioinnin kolmen tilanteen päivät ja issue-numerot sekä vaatimustunnus p11.",
      skills: ["Oman toiminnan arviointi", "Teknisen ratkaisun selittäminen", "Näyttöaineiston luovutus"],
      paivat: [
        ["Jäädytys", "Jäädytä sisältö. Tarkista, että jokainen työnäyte on repositoryssa."],
        ["Aineisto", "Tarkista päiväkirja, AI-loki ja näyttömatriisin linkit."],
        ["Demon harjoittelu", "Harjoittele demo ajastettuna toiselle henkilölle."],
        ["Puskuri", "Korjaa, mikä harjoituksessa jäi kesken. Kirjoita itsearviointi."],
        ["Demo ja luovutus", "Pidä demo. Luovuta aineisto."]
      ],
      steps: [
        ["Jäädytä sisältö maanantaina.", "Älä lisää enää ominaisuuksia. Tarkista, että jokainen työnäyte on repositoryssa."],
        ["Harjoittele demo ajastettuna.", "Näytä viisi osaa: tuotos, yksi tekninen ratkaisu omin sanoin, korjattu virhe, Git-historia ja työnkulku yhdellä kortilla."],
        ["Näytä työnkulku yhdellä kortilla.", "Näytä yhden kortin polku: oma rajaus ja odotettu tulos, issue, GitHub Copilot, perusteltu hylkäys tai korjautus ja commit."],
        ["Kirjoita itsearviointi.", "Valitse päiväkirjasta kolme tilannetta. Niistä on kirjattu päivä ja issue-numero. Kirjoita arvio alla olevaan pohjaan. Lähetä se ohjaajalle Teamsissa, ei repositoryyn."],
        ["Luovuta aineisto.", "Luovuta näyttöaineisto perjantaina 5.3.2027."]
      ],
      pohjat: [
        { otsikko: "Demon runko (8–10 min)", teksti: "1. Tuotos toiminnassa: oma piirros → malli → .obj (2 min)\n2. Yksi tekninen ratkaisu omin sanoin (2 min)\n3. Yksi korjattu virhe ja sen syy (1–2 min)\n4. Git-historia: issuet, commitit, pull request, tagit (1–2 min)\n5. Työnkulku yhdellä kortilla: rajaus ja odotettu tulos → issue → GitHub Copilot → perusteltu hylkäys → commit (2 min)" },
        { otsikko: "Itsearviointi (lähetetään ohjaajalle Teamsissa)", teksti: "# Itsearviointi\n## Tilanne 1 (pp.kk., issue #__)\nMitä tapahtui: \nMitä tein: \nMitä tekisin toisin: \n\n## Tilanne 2 (pp.kk., issue #__)\n\n## Tilanne 3 (pp.kk., issue #__)" }
      ],
      example: "Tekninen ratkaisu omin sanoin: \"Hierarkian muunnos kutsuu itseään jokaiselle ryhmälle. Siksi korvat pysyvät pään lapsina, ja .obj-tiedostossa ne ovat omia objektejaan.\"",
      notEnough: "\"Tein 3D-mallintimen Reactilla.\" Demosta puuttuvat ratkaisu, korjattu virhe, historia ja työnkulku."
    }
  },

  /* ---- sanasto: vain tämän projektin termit (runko v3 § 4, merkitykset v2:n mukaan) ----
     Jokainen termi selitetään myös ensimmäisen käytön kohdassa. */
  termisto: [
    { termi: "Copilot", nimi: "Microsoft 365 Copilot", selite: "Tekoäly selaimessa BC:n tunnuksella. Suunnittelee ja pilkkoo viikon tavoitteen tehtäväkorteiksi. Tässä projektissa sana Copilot tarkoittaa aina tätä.", viikko: 40 },
    { termi: "GitHub Copilot", nimi: "koodityökalu VS Codessa", selite: "Tekoäly, joka toteuttaa tehtäväkortin VS Codessa. Tässä projektissa sana GitHub Copilot tarkoittaa aina tätä.", viikko: 40 },
    { termi: "MVP", nimi: "Minimum Viable Product", selite: "Pienin käytettävä versio. Tässä projektissa MVP on sama kuin P0 ja valmistuu ennen joulua.", viikko: 40 },
    { termi: "P0", nimi: "Pakollinen ydin", selite: "Toiminnot, joiden pitää valmistua ennen joulua. Ilman niitä tuotosta ei ole.", viikko: 40 },
    { termi: "P1", nimi: "Tärkeä jatko", selite: "Toiminnot, jotka tehdään joululoman jälkeen, kun P0 toimii.", viikko: 40 },
    { termi: "P2", nimi: "Jatkolista", selite: "Toiminnot, jotka jäävät tämän näytön jälkeen tehtäviksi. Ne eivät ole hylättyjä.", viikko: 40 },
    { termi: "SVG", nimi: "vektorikuva", selite: "Kuvan tiedostomuoto, jossa kuva koostuu poluista. Inkscape tallentaa piirrokset SVG-tiedostoiksi.", viikko: 40 },
    { termi: "low-poly", selite: "3D-malli, jossa on vähän monikulmioita. Pinnat näkyvät tasaisina, kulmikkaina paloina.", viikko: 40 },
    { termi: "repository", nimi: "Git-repository", selite: "Projektin kansio GitHubissa. Siellä on koodi, historia ja issuet. Kaikki työnäytteet ovat repositoryssa.", viikko: 40 },
    { termi: "README", selite: "Repositoryn etusivun ohje. Kertoo, mikä työkalu on ja miten sen saa käyttöön.", viikko: 40 },
    { termi: "kloonaus", selite: "Repositoryn kopiointi omalle koneelle. VS Code ja GitHub Copilot käsittelevät kloonattua kansiota.", viikko: 40 },
    { termi: "commit", selite: "Yksi nimetty muutos Gitissä. Commitilla on viesti ja tunnus.", viikko: 40 },
    { termi: "push", selite: "Commitien lähetys omalta koneelta GitHubiin.", viikko: 40 },
    { termi: "Collaborator", selite: "Henkilö, jolle repository on jaettu. Ohjaaja näkee ja voi kommentoida repositorya.", viikko: 40 },
    { termi: "tilatiedosto", nimi: "PROJEKTIN-TILA.md", selite: "Tiedosto, jossa on kohdat Valmista, Seuraavana, Tehdyt päätökset ja Avoimet kysymykset. Liität sen Copilotiin. Älä anna sitä GitHub Copilotille.", viikko: 40 },
    { termi: "viestipohja", selite: "Valmis viesti, jonka kopioit ja täydennät. Sivun Kopioi-nappi kopioi sen.", viikko: 40 },
    { termi: "krediitti", nimi: "GitHub Copilotin käyttöraha", selite: "200 krediittiä kuukaudessa. Yksi krediitti on 0,01 USD. Agenttitila kuluttaa niitä. Täydennykset ovat ilmaisia. Budjetti nollautuu kuun 1. päivänä, eikä käyttämätön osuus siirry.", viikko: 40 },
    { termi: "agenttitila", nimi: "Agent", selite: "GitHub Copilotin tila, joka muokkaa useaa tiedostoa. Kuluttaa krediittejä.", viikko: 40 },
    { termi: "käyttönäkymä", selite: "GitHubin sivu, jolla krediittien kulutus näkyy.", viikko: 40 },
    { termi: "projektipäiväkirja", selite: "Tämän sivun viikkokirjaus: mitä teit, miksi ja missä työnäyte on. Ladataan kansioon project-docs joka viikko.", viikko: 40 },
    { termi: "AI-loki", selite: "Tämän sivun loki tekoälyn käytöstä: mihin pyysit apua, hyväksyitkö, korjautitko vai hylkäsitkö ja miksi.", viikko: 40 },
    { termi: "viikkopalaveri", selite: "Viikon tapaaminen ohjaajan kanssa maanantaina tai tiistaina. Tiimi tarkoittaa tässä projektissa sinua ja ohjaajaa.", viikko: 40 },
    { termi: "työsykli", nimi: "kuusi askelta", selite: "Suunnittele, Siirrä, Rakenna, Tarkista, Raportoi ja Kirjaa. Sama jokaisessa tehtäväkortissa.", viikko: 41 },
    { termi: "tehtäväkortti", selite: "Yksi rajattu tehtävä: tavoite, kaista, tiedostot, Älä tee -kohta, hyväksymiskriteerit ja testi.", viikko: 41 },
    { termi: "hyväksymiskriteeri", selite: "Havaittava ehto, jonka pitää toteutua, jotta kortti on valmis. Esimerkiksi: kuutio näkyy ja pyörii.", viikko: 41 },
    { termi: "issue", nimi: "GitHub-issue", selite: "Tehtäväkortti GitHubissa, label tehtäväkortti. Suljetaan commit-viestin rivillä `Closes #N`.", viikko: 41 },
    { termi: "mallikortti", selite: "Valmis esimerkkikortti, johon omaa korttia verrataan. Viikolla 41 siinä on myös testipohja.", viikko: 41 },
    { termi: "kaista", nimi: "A, B tai C", selite: "Toteutustapa. A: Copilot kirjoittaa koodin yksi tiedosto kerrallaan. B (viikolta 43): kommentti ja täydennys VS Codessa, myös testit. C (viikolta 44): GitHub Copilotin agenttitila useaan tiedostoon.", viikko: 41 },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "T tarkoittaa testitapausta. Numero yksilöi sen: T01 on ensimmäinen, T02 toinen. Odotettu tulos kirjataan, ennen kuin koodi tehdään. Lisätesti on ylimääräinen testi ilman numeroa.", viikko: 41 },
    { termi: "tekninen pohja", nimi: "Vite, React, Three.js ja Vitest", selite: "Sovelluksen perusta. Vite käynnistää ja rakentaa sovelluksen. React tekee näkymät. Three.js piirtää 3D:n. Vitest ajaa testit.", viikko: 41 },
    { termi: "GitHub Pages", selite: "Julkaisupaikka. GitHub Actions on automaatio, joka julkaisee sovelluksen jokaisen pushin jälkeen.", viikko: 41 },
    { termi: "main", nimi: "päähaara", selite: "Repositoryn päälinja. Julkaisu tehdään päähaarasta.", viikko: 41 },
    { termi: "kahden yrityksen sääntö", selite: "Kun sama asia epäonnistuu kahdesti, lopetetaan yrittäminen ja palataan Copilotille.", viikko: 41 },
    { termi: "täydennys", selite: "GitHub Copilotin harmaa koodiehdotus VS Codessa. Hyväksytään Tab-näppäimellä. Ei kuluta krediittejä.", viikko: 43 },
    { termi: "moduuli", selite: "Kansio tai tiedosto, jolla on yksi vastuu. Esimerkiksi tuonti on eri moduuli kuin vienti.", viikko: 43 },
    { termi: "havaintoissue", nimi: "label havainto", selite: "Issue, johon kirjataan virhe: mitä odotit, mitä tapahtui ja miten virheen saa toistettua. Suljetaan korjauscommitilla.", viikko: 43 },
    { termi: "layer", nimi: "Inkscapen taso", selite: "Inkscapen piirroksen taso. Layerin nimestä tulee mallin osan nimi.", viikko: 43 },
    { termi: "scene graph", nimi: "vanhempi–lapsi-puu", selite: "3D-näkymän rakenne, jossa osat ovat vanhempi–lapsi-suhteessa. Kun vanhempi liikkuu, lapset liikkuvat mukana.", viikko: 44 },
    { termi: "hierarkiapaneeli", selite: "Sovelluksen paneeli, joka näyttää scene graphin osat sisennettyinä.", viikko: 44 },
    { termi: "puhdas funktio", selite: "Funktio, joka ei muuta mitään itsensä ulkopuolella. Sama syöte antaa aina saman tuloksen.", viikko: 44 },
    { termi: "rajapinta", selite: "Funktion nimi, syöte ja paluuarvo. Rajapinta kirjoitetaan korttiin ennen toteutusta.", viikko: 44 },
    { termi: "revolve", nimi: "pyörähdyskappale", selite: "Puoliprofiili pyörähtää akselin ympäri, ja siitä syntyy kappale, esimerkiksi maljakko.", viikko: 45 },
    { termi: "orbit", selite: "Näkymän kierto hiirellä mallin ympäri.", viikko: 45 },
    { termi: "kysymystila", nimi: "Ask", selite: "GitHub Copilotin tila, joka vastaa kysymyksiin mutta ei muuta tiedostoja.", viikko: 45 },
    { termi: "inflate", nimi: "polusta putki", selite: "Viivapolusta tulee putki, jossa on 3–8 sivua. Esimerkiksi johto tai sarvi.", viikko: 46 },
    { termi: "orientaatiokuutio", nimi: "Orientation Gizmo", selite: "Kuutio näkymän kulmassa. Kun klikkaat sen sivua, kamera kääntyy katsomaan mallia suoraan sivun suunnasta.", viikko: 46 },
    { termi: "suora näkymä", selite: "Katsot mallia tasan yhden akselin suunnasta, kuin pöydän reunalta tai ylhäältä. Suunnitelmassasi tämä on osa Orthographic Plane Snapia.", viikko: 46 },
    { termi: "ortografinen näkymä", nimi: "P1", selite: "Näkymä, jossa kaukana olevat osat eivät pienene kuten valokuvassa. Tehdään P1:ssä. P0:ssa kaukana olevat osat näyttävät pienemmiltä, ja se on oikein.", viikko: 46 },
    { termi: "view lock", selite: "Painike, joka estää kameran kiertymisen, kun teet tarkkaa työtä.", viikko: 46 },
    { termi: "transformi", selite: "Osan siirto, kierto ja skaalaus.", viikko: 47 },
    { termi: "pivot", selite: "Piste, jonka ympäri kappale kiertää ja skaalautuu. Oletuksena keskipisteessä.", viikko: 48 },
    { termi: "transformivalikko", selite: "Valikko, jossa pivot syötetään prosentteina X, Y ja Z.", viikko: 48 },
    { termi: "OBJ", nimi: ".obj-tiedosto", selite: "3D-tiedostomuoto. Jokainen osa alkaa rivillä, jonka alussa on o-kirjain.", viikko: 49 },
    { termi: "virheenkorjausketju", selite: "Havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Projektissa tehdään kolme ketjua.", viikko: 49 },
    { termi: "regressiotesti", selite: "Testi, joka toistaa korjatun virheen ja jää testeihin. Se varmistaa, ettei virhe palaa.", viikko: 49 },
    { termi: "vikatehtävä", selite: "Ohjaajan tekemä tarkoituksellinen virhe. Siitä tehdään virheenkorjausketju, jos aitoa havaintoa ei ole.", viikko: 49 },
    { termi: "JSON", nimi: "tallennusmuoto", selite: "Tekstimuotoinen tiedosto, johon projektin tiedot tallennetaan ja josta ne avataan uudelleen.", viikko: 50 },
    { termi: "tagi", selite: "Nimetty versio Gitissä, esimerkiksi v0.1 tai v1.0.", viikko: 50 },
    { termi: "tietoturva-arvio", selite: "Taulukko: uhka, testi, tulos ja toimenpide. Tässä projektissa uhkia ovat esimerkiksi haitallinen SVG ja rikottu JSON.", viikko: 50 },
    { termi: "katselmointi", selite: "Asiakas kokeilee versiota ja kertoo, mitä muutetaan. Asiakkaan sanat kirjataan erillään omasta tulkinnasta.", viikko: 51 },
    { termi: "haara", selite: "Oma työlinja. Muutokset eivät vaikuta päähaaraan, ennen kuin haara liitetään.", viikko: 3 },
    { termi: "pull request", nimi: "PR", selite: "Muutospyyntö, jolla haara liitetään päähaaraan. Luet muutokset ennen liittämistä.", viikko: 3 },
    { termi: "merge", selite: "Haaran liittäminen päähaaraan.", viikko: 3 },
    { termi: "kahva", selite: "Tartuntakohta 3D-näkymässä. Kahvasta vetämällä osaa siirretään, kierretään tai skaalataan.", viikko: 5 },
    { termi: "Lighthouse", selite: "Chromen kehittäjätyökalujen mittari. Se mittaa sivun saavutettavuuden pisteinä 0–100.", viikko: 5 },
    { termi: "RC", nimi: "julkaisuehdokas, release candidate", selite: "Versio, jossa sisältö on jäädytetty ja joka testataan ennen v1.0:aa. Tagi on v1.0-rc1.", viikko: 6 },
    { termi: "sisältöjäädytys", selite: "Uusia ominaisuuksia ei enää lisätä. Vain estävät virheet korjataan.", viikko: 6 },
    { termi: "työnäyte", selite: "Yksi tuotos, joka osoittaa osaamisesi: commit, issue, testi, kuva tai muistio.", viikko: 7 },
    { termi: "näyttömatriisi", selite: "Tämän sivun lista tutkinnon vaatimuksista. Jokaisella rivillä on linkki työnäytteeseen.", viikko: 7 }
  ],

  /* ---- projektipäiväkirja ---- */
  paivakirja: {
    tiedostonimi: "projektipaivakirja.md",
    polku: "project-docs/projektipaivakirja.md",
    vihjeet: {
      work: "Kerro tiedostot, kortit ja testit. Kerro yksi funktio selityspohjalla.",
      reason: "Kerro päätös, vaihtoehdot ja peruste.",
      evidence: "Issue #12, commit, testitapaus T05 ja vaatimustunnus, esimerkiksi s12.",
      next: "Mikä on ensimmäinen asia, josta jatkat?"
    }
  },

  /* ---- suunnitelmadokumentti: A perustiedot · esitäytetty · B omat päätökset · C ohjaajan päätökset ---- */
  suunnitelma: {
    otsikko: "Suunnitelma",
    tiedostonimi: "suunnitelma.md",
    pakolliset: ["nimi", "tekija", "mvp", "tekninenPohja", "kayttoliittyma", "rakenne", "dokumentointi", "valinta", "revolveValinta", "akseli", "tallennus", "p1Jarjestys", "tunnistus"],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      `# Vektoripaja – suunnitelma`,
      "",
      `Päivitetty: ${pvm}`,
      "",
      "## A · Perustiedot",
      "",
      `- Projektin nimi: ${arvo("nimi")}`,
      `- Tekijä (sovittu ohjaajan kanssa): ${arvo("tekija")}`,
      "",
      "## 1 · Tavoite (esitäytetty toimeksiannosta)",
      "",
      "Selaimessa toimiva työkalu, joka avaa Inkscapessa piirretyn SVG-tiedoston ja tekee",
      "siitä low-poly-mallin. Layerit ja ryhmät muuttuvat mallin osiksi, puoliprofiilista",
      "syntyy pyörähdyskappale ja viivasta putki. Malli viedään .obj-tiedostoksi niin, että",
      "jokainen osa on oma objektinsa.",
      "",
      "## 2 · Asiakas ja käyttäjät (esitäytetty)",
      "",
      "Asiakkaat ovat Matti Seise ja Antti Honkasalo. Käyttäjät ovat opiskelijoita, jotka",
      "piirtävät sujuvasti Inkscapessa mutta jäävät jumiin perinteisissä 3D-ohjelmissa.",
      "",
      "## 3 · P0, P1 ja P2 (esitäytetty)",
      "",
      "**P0 (ennen joulua):** SVG-tuonti · layerit ja ryhmät osiksi (scene graph) ·",
      "pyörähdyskappale eli revolve 3–32 segmenttiä · putki eli inflate 3–8 sivua ·",
      "valinta, siirto, kierto ja skaalaus, lapset seuraavat, pivot keskipisteessä ja",
      "prosentteina · kierto hiirellä eli orbit, suorat näkymät orientaatiokuutiosta ja",
      "view lock -painike · .obj-vienti osat erillisinä · tallennus ja avaus JSON-tiedostona.",
      "",
      "**P1 (loman jälkeen):** Päivitä SVG · kierto tasakulmiin (kulmasnappaus) · pieni",
      "esikatseluikkuna (PiP) · kierto lapselle ja sen alaosille · oma teema ja isot",
      "kahvat · ortografinen näkymä · view lockin pikanäppäin.",
      "",
      "**P2 (jatkolista näytön jälkeen):** Bézier-kynä ja polkujen muokkaus sovelluksessa ·",
      "Boolean-toiminnot · platoniset kappaleet · medial axis -inflaatio · UV-sidonta ·",
      "hierarkiaa ymmärtävä raycasting ja törmäyssäännöt.",
      "",
      "### MVP omin sanoin (viikko 40)",
      "",
      arvo("mvp"),
      "",
      "## 4 · Tekninen ehdotus (esitäytetty, päätös on sinun viikolla 41)",
      "",
      "Vite + React + Three.js (@react-three/fiber, @react-three/drei), testit Vitestillä,",
      "julkaisu GitHub Pagesiin GitHub Actionsilla. P0 rakentuu valmiista komponenteista:",
      "SVGLoader lukee SVG:n, LatheGeometry tekee revolven, TubeGeometry tekee inflaten,",
      "OBJExporter tekee viennin ja drein komponentit hoitavat transformit, kameran ja",
      "orientaatiokuution. Testit kohdistuvat puhtaisiin funktioihin.",
      "",
      "### Hyväksynkö ehdotuksen ja miksi (viikko 41)",
      "",
      arvo("tekninenPohja"),
      "",
      "## 5 · Työtapa (esitäytetty)",
      "",
      "Työsykli joka tehtäväkortille: Suunnittele (Copilot) → Siirrä (GitHub) → Rakenna",
      "(testi ensin, sitten toteutus kortin kaistalla) → Tarkista (itse) → Raportoi",
      "(Copilot) → Kirjaa (commit ja AI-loki). Viikkopalaveri ohjaajan kanssa maanantaina",
      "tai tiistaina. Krediitit tarkistetaan maanantaisin.",
      "",
      "## B · Omat päätökset",
      "",
      `- **Käyttöliittymävaatimus omasta teemasta (viikko 41):** ${arvo("kayttoliittyma")}`,
      `- **Kansiorakenne ja moduulien rajat (viikko 43):** ${arvo("rakenne")}`,
      `- **Dokumentointitapa, sovittu palaverissa (viikko 43):** ${arvo("dokumentointi")}`,
      `- **Valinnan toiminta: lapsi vai koko kappale (viikko 44):** ${arvo("valinta")}`,
      `- **Revolven valintatapa, sovittu palaverissa (viikko 45):** ${arvo("revolveValinta")}`,
      `- **Profiili akselin väärällä puolella, T11:n kriteeri (viikko 45):** ${arvo("akseli")}`,
      `- **Tallennustapa omilla kriteereillä ja JSON-koko (viikko 50):** ${arvo("tallennus")}`,
      `- **P1-järjestys ja tuntiarviot (viikko 2):** ${arvo("p1Jarjestys")}`,
      `- **Osien tunnistus päivityksessä (viikko 3):** ${arvo("tunnistus")}`,
      "",
      "## C · Ohjaajan päätökset",
      "",
      "Näitä ei päätetä itse eikä tekoälyllä. Tyhjä kenttä on oikea tulos,",
      "kunnes asia on sovittu.",
      "",
      onTäytetty("krediitit") ? `- **Krediittien lisärahoitus:** ${arvo("krediitit")}` : "- **Krediittien lisärahoitus (lisäkrediitit vai BC:n organisaatiolisenssi):** EI VIELÄ PÄÄTETTY, avoin asia (lokakuun loppuun mennessä)",
      onTäytetty("lisenssi") ? `- **Lisenssi:** ${arvo("lisenssi")}` : "- **Lisenssi:** EI VIELÄ SOVITTU, avoin asia (ennen viikkoa 6)",
      onTäytetty("katselmointiKirjaus") ? `- **Katselmoinnin kirjaustapa:** ${arvo("katselmointiKirjaus")}` : "- **Katselmoinnin kirjaustapa:** EI VIELÄ SOVITTU, avoin asia (ennen viikkoa 51)",
      onTäytetty("p0Myohastyminen") ? `- **P0-myöhästymisen ratkaisu:** ${arvo("p0Myohastyminen")}` : "- **P0-myöhästymisen ratkaisu:** päätetään viikon 47 palaverissa, jos P0 ei ole aikataulussa",
      onTäytetty("julkaisutestaaja") ? `- **Julkaisutestaaja:** ${arvo("julkaisutestaaja")}` : "- **Julkaisutestaaja (toinen opiskelija):** EI VIELÄ NIMETTY, avoin asia (viimeistään viikolla 5)",
      onTäytetty("arviointi") ? `- **Näytön ajankohta ja arvioijat:** ${arvo("arviointi")}` : "- **Näytön ajankohta ja arvioijat (viikko 9):** EI VIELÄ SOVITTU, avoin asia",
      "",
      "---",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
      "Päivitä, kun päätät asioita tai ohjaaja vastaa avoimiin asioihin.",
      ""
    ].join("\n")
  },

  /* ---- opettaja-aineisto: näyttösuunnitelma ja dokumentointipohjat ---- */
  opettaja: {
    jakso: "Vk 40/2026–vk 9/2027 · syysloma vk 42 · joululoma 18.12.–10.1. · talviloma vk 8",
    deadline: "pe 5.3.2027",
    kansiKuvaus: "Low-poly 3D-mallinnin selaimessa: Inkscapen SVG → 3D-malli → .obj. Tekoälyavusteinen työtapa: Copilot suunnittelee, GitHub Copilot toteuttaa.",
    kansiHuomiot: [
      "Repository on julkinen. Sinne ei laiteta henkilötietoja, testaajien nimiä eikä itsearviointia. Ne lähetetään ohjaajalle Teamsissa.",
      "Viikkopalaveri ohjaajan kanssa on maanantaina tai tiistaina. Päivä sovitaan viikolla 40."
    ],
    viimeisetPaivat: [
      ["Ma 1.3.", "Sisältöjäädytys: työnäytteet repositoryssa"],
      ["Ti 2.3.", "Aineisto: päiväkirja, AI-loki ja näyttömatriisin linkit"],
      ["Ke 3.3.", "Demon harjoittelu ajastettuna toiselle henkilölle"],
      ["To 4.3.", "Puskuri ja itsearviointi Teamsissa ohjaajalle"],
      ["Pe 5.3.", "Demo ja luovutus"]
    ],

    pohjat: {
      aloitusVko: 40,
      kysymyksia: 6,
      vertailuVko: 50,
      katselmointiVkot: "51 ja 6",
      testiVko: 49,
      testeja: 26,
      ketjuja: 3,
      lisenssiVko: 6
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma · Vektoripaja",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena. Peruste: Tieto- ja viestintätekniikan perustutkinto, diaarinumero OPH-6216-2025 (perusteId 9816282). Viikkorunko on hyväksytty pedagogisessa tarkistuksessa (Linnea-portti, kierros 3, 23.9.2026) ennen sisällön kirjoittamista.",
      kohdeOtsikko: "1 · Näytön kohde ja ympäristö",
      kohde: [
        "Näyttö suoritetaan ohjattuna oppilaitosprojektina. Opiskelija toteuttaa selainpohjaisen low-poly 3D-mallintimen, joka tekee Inkscapen SVG-piirroksesta 3D-mallin (revolve ja inflate), muuntaa layerit ja ryhmät vanhempi–lapsi-puuksi, tukee transformeja ja pivotia, näyttää mallin orientaatiokuution suorista näkymistä ja vie mallin .obj-tiedostoksi osat erillisinä. Toimeksiantajat ovat Matti Seise ja Antti Honkasalo. Matti Seise on myös ohjaaja.",
        "Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 10 vaatimusta tässä näytössä), Ohjelmistokehittäjänä toimiminen (45 osp, 14 vaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 vaatimusta). Yhteensä 31 osaamisvaatimusta. Ohjelmoinnin vaatimus \"kirjoittaa ylläpidettävää ohjelmakoodia\" (p5) osoitetaan muulla tavalla ohjaajan päätöksellä 23.9.2026, koska koodin kirjoittaa tässä työtavassa pääosin tekoäly.",
        "Tekninen ympäristö: Vite + React + Three.js (@react-three/fiber, @react-three/drei), testit Vitestillä, julkaisu GitHub Pagesiin GitHub Actionsilla. Tekoälytyökalut: Microsoft 365 Copilot (BC, suunnittelu ja pilkkominen) ja GitHub Copilot (Student, toteutus VS Codessa). GitHub Copilotin budjetti on 200 krediittiä kuukaudessa.",
        "Aikataulu on päivätty: vk 40/2026 (ma 28.9.) – vk 9/2027 (pe 5.3.), 18 työviikkoa. Lomat vk 42, joululoma 18.12.–10.1. (vk 51 on neljä työpäivää) ja talviloma vk 8."
      ],
      p0: "Pakollinen perusversio (P0, ennen joulua): SVG-tuonti · layerit ja ryhmät scene graphiksi · revolve 3–32 segmenttiä · inflate 3–8 sivua · valinta, siirto, kierto ja skaalaus, lapset seuraavat, pivot keskipisteessä ja prosentteina · orbit, suorat näkymät orientaatiokuutiosta ja view lock -painike · .obj-vienti osat erillisinä · tallennus ja avaus JSONina. P1: Päivitä SVG, kulmasnappaus, PiP, kierron kohderajaukset, oma teema ja isot kahvat, ortografinen näkymä, view lockin pikanäppäin.",
      roolit: [
        ["Opiskelija", "Pilkkoo tavoitteet tehtäväkorteiksi, tekee arkkitehtuuripäätökset, kirjoittaa testien odotetut arvot ennen toteutusta, hyväksyy, korjauttaa tai hylkää tekoälyn tuotoksen perustellen, selittää virheen syyn ja funktiot omin sanoin sekä kokoaa näyttöaineiston. Koodin kirjoittaa pääosin tekoäly."],
        ["Ohjaaja (Matti Seise)", "Viikkopalaveri ma tai ti (sovitut kortit issue-kommentteina, edellisen viikon funktio ääneen), P0-tarkistuspiste vk 47, vikatehtävä tarvittaessa, ohjaajan päätökset (tekijänimi, lisenssi, krediitit, katselmoinnin kirjaustapa, julkaisutestaaja, arviointi). Toimii tiimin jäsenen roolissa vk 2:n ratkaisuarviossa."],
        ["Asiakkaat (Matti Seise ja Antti Honkasalo)", "Vastaavat kysymyslistaan vk 40–41, katselmoivat MVP:n vk 51 ja antavat P1-prioriteetit sekä vahvistavat v1.0:n toimivuuden omalla koneellaan vk 7. Kun Matti toimii asiakkaana, se kerrotaan tehtävässä."],
        ["Julkaisutestaaja (toinen opiskelija, vk 6)", "Kulkee README:n avulla koko polun Inkscape-piirroksesta .obj-tiedostoon ilman suullista apua. Nimi ja sanat toimitetaan ohjaajalle Teamsissa; repositoryyn kirjataan rooli. Nimetään viimeistään vk 5."],
        ["Arvioijat (vk 9)", "Ottavat vastaan demon ja näyttöaineiston. Ajankohta ja arvioijat sovitaan ohjaajan kanssa."]
      ],
      tarkistuspisteet: [
        [40, "Ympäristö ja repository", "Versiot, julkinen repository noreply-sähköpostilla, ohjaaja Collaboratorina, kolme pohjatiedostoa, mvp.md omin sanoin, kysymyslista lähetetty, agenttipyynnön hinta kirjattu."],
        [41, "Harjoitussykli", "Kaksi issueta syklin tarkistuslistoineen, T01:n oma arvo testikoodissa ennen toteutusta, Pages-osoite toimii toisella laitteella, päätös teknisestä pohjasta B-osiossa."],
        [44, "Hierarkia ja kaista C", "T06–T08, puhdas muunnosfunktio rajapintoineen, hierarkiapaneeli, valinnan toiminta B-osiossa. Kaista C:n krediittikulutus kirjattuna."],
        [47, "P0-tarkistuspiste", "Onko P0 aikataulussa? Jos ei, ohjaaja päättää, mikä katselmoidaan keskeneräisenä ja mikä tehdään vk 4:llä omassa haarassa pull requestilla."],
        [49, "Vienti ja ketju 1", "T19–T20, o-rivit ja Blender, ensimmäinen virheenkorjausketju kuudella osalla ja regressiotestillä. Vikatehtävä, jos aitoa havaintoa ei ole."],
        [50, "MVP v0.1", "Tallennusvertailu omilla kriteereillä, T21–T22, tietoturva-arvio, tagi v0.1 ja Pages-julkaisu."],
        [51, "Katselmointi", "Katselmointiloki rooleilla, asiakkaiden sanat erillään tulkinnasta, havainnot issueina prioriteetein, tilatiedosto lomaa varten."],
        [3, "Pull request", "Päivitä SVG omassa haarassa, T23, kaikki testit läpi ennen mergeä, pull request yhdistetty."],
        [6, "Julkaisuehdokas", "v1.0-rc1, README ja käyttöohje, julkaisutestaajan pöytäkirja epäröinteineen."],
        [7, "v1.0", "Estävät korjattu, ketju 3, tagi v1.0, asiakkaiden vahvistus, näyttömatriisi linkitetty."],
        [9, "Näyttö", "Demo 8–10 min viidellä osalla (mukana työnkulku yhdellä kortilla), itsearviointi Teamsissa, aineisto luovutettu."]
      ],
      tyonaytteet: {
        p1: ["40, 41, 2", "VS Code, GitHub Copilot, Vite ja Vitest käytössä: versiot README:ssä, kehityspalvelin ja testiajot, paluuviikon ajo"],
        p2: ["49, 4, 7 (havainnot 43→)", "Kolme virheenkorjausketjua havaintoissueista: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti"],
        p3: ["41, 43–50, 3–5", "T01–T26 ja lisätestit: odotettu tulos kirjoitettu itse testikoodiin ennen toteutusta, tulokset issueissa"],
        p4: ["44→45, 48→49, 49→50", "Rajapinta ennen toteutusta, selityspohja kolmesta funktiosta (hierarkian muunnos, pivotin syötteen tarkistus, OBJ-objektijako), selitys ääneen seuraavan viikon palaverissa (ohjaajan päätös 23.9.2026)"],
        p6: ["41, 44, 46, 48, 5", "Hierarkiapaneeli, view lock, transformivalikko ja isot kahvat käyttöliittymävaatimuksen mukaan; Lighthouse ennen ja jälkeen"],
        p7: ["43, 45, 46, 47", "MVP-kuvauksesta kortit ja toiminnot: tuonti, revolve, inflate ja transformit hyväksymiskriteerien mukaan"],
        p8: ["41→7", "Issue-kommentit \"Sovittu viikkopalaverissa pp.kk.\" joka viikolta"],
        p9: ["44–45, 3", "Revolven valintatavan vertailu ja yhteinen päätös, osien tunnistustapa päivityksessä"],
        p10: ["51, 2", "Katselmointi asiakkaiden kanssa; ohjaaja tiimin roolissa arvioi MVP:n ratkaisut P1:tä varten"],
        p11: ["9", "Itsearviointi kolmesta tilanteesta Teamsissa ohjaajalle; päiväkirjassa vain päivä ja issue"],
        s1: ["40, 41", "Kysymyslista asiakkaille, vastaukset kirjattuina kysymykset.md:hen, MVP omin sanoin"],
        s2: ["51, 6", "Demo katselmoinnissa, README ja käyttöohje käyttäjälle"],
        s3: ["51", "Katselmointiloki: asiakkaiden sanat, oma tulkinta, sovitut muutokset"],
        s4: ["40, 51, 2", "P0/P1/P2-karsinta perusteluineen, asiakkaiden prioriteetit, P1-järjestys"],
        s5: ["41→", "Tehtäväkortit hyväksymiskriteereineen, oma rajausehdotus ja tarkistusrivi issueissa"],
        s6: ["40, 41→, 2", "Kaistan valinta ja toteuman vertailu RAPORTOI-askeleessa, krediittimittaus, P1-tuntiarviot"],
        s7: ["44–48, 3", "Hierarkia, revolve, inflate, transformit, pivot ja päivitys"],
        s8: ["50", "Tallennustapojen vertailu oman suunnitelman kriteereillä ja oman mallin JSON-koko"],
        s9: ["50", "JSON-tallennus ja avaus, versionumero ja rakenteen tarkistus"],
        s10: ["43, 49, 50", "Selaimen tiedostorajapinta, SVGLoader, OBJExporter ja JSON"],
        s11: ["43, 50", "T04 haitallinen SVG, T22 rikottu JSON, tietoturva-arvio uhka–testi–tulos–toimenpide"],
        s12: ["40→7", "Commitit rivillä Closes #N, tagit v0.1, v1.0-rc1 ja v1.0"],
        s13: ["3 (rästit 4)", "Haara, pull request ja merge päähaaraan kaikki testit läpi"],
        s14: ["41, 50, 7", "Pages-julkaisu GitHub Actionsilla: harjoitus, MVP v0.1 ja v1.0"],
        k1: ["41", "Vite + React + Three.js + Vitest -pohja opiskelijan omin komennoin"],
        k2: ["43, 46", "kirjastot.md: SVGLoaderin ja TubeGeometryn rajoitteet omilla tiedostoilla kokeiltuina"],
        k3: ["45–48", "LatheGeometry, TubeGeometry, drein TransformControls, OrbitControls ja GizmoViewcube"],
        k4: ["41", "npm-paketit three, @react-three/fiber, @react-three/drei ja vitest omin komennoin"],
        k5: ["43–50", "MVP v0.1 komponenttikirjastolla testeineen"],
        k6: ["50, 7", "Julkaisu asiakkaiden käyttöön ja asiakkaiden vahvistus v1.0:sta"],
        k7: ["43, 6", "Dokumentointitapa sovittu vk 43, README ja käyttöohje vk 6"]
      },
      dokumentaatio: {
        kayttajalle: "README ja käyttöohje: työkalun avaaminen, Inkscapen nimeämissäännöt (layerit, ryhmät, mahdolliset nimimerkinnät), tuonti, revolve, inflate, transformit, pivot, kamera, vienti ja tallennus. Kirjoitetaan käyttäjälle, ei arvioijalle.",
        arviointiin: "Projektipäiväkirja vaatimustunnuksineen, AI-loki hyväksy/korjauta/hylkää-päätöksineen, suunnitelma A/B/C, issuet syklin tarkistuslistoineen, kirjastot.md, tietoturva.md, katselmointi.md, julkaisutesti.md, virheenkorjausketjut havaintoissueissa sekä linkitetty näyttömatriisi. Itsearviointi Teamsissa.",
        vaatimus: "Käyttöönotto-ohjeen kovavaatimus: toinen opiskelija kulkee README:n avulla koko polun Inkscape-piirroksesta .obj-tiedostoon ilman suullista apua (vk 6)."
      },
      tekoaly: [
        "Tekoälyrajaus poikkeaa rungosta tarkoituksella: koodin kirjoittaa pääosin tekoäly. Ydinosaaminen, jota näyttö arvioi, on vaatimusten pilkkominen tehtäväkorteiksi, arkkitehtuuripäätökset, testien odotetut arvot ennen toteutusta, tekoälyn tuotoksen hylkääminen tai korjauttaminen perustellusti, virheen syyn selittäminen, Git- ja issue-työskentely sekä koodin selittäminen (viikon funktio selityspohjalla ja ääneen palaverissa, demossa yksi tekninen ratkaisu).",
        "Työsykli: Suunnittele (Copilot) → Siirrä (GitHub) → Rakenna (testi ensin kaistalla B, toteutus kaistalla A, B tai C) → Tarkista (itse, oma arvo haetaan testikoodista) → Raportoi (Copilot) → Kirjaa. Jokainen tekoälyn vastaus kirjataan AI-lokiin päätöksellä hyväksyn, korjautan tai hylkään. Näyttöön vähintään kolme perusteltua hylkäystä tai korjautusta, demoon yksi.",
        "Viikot on rakennettu niin, ettei niitä voi suorittaa kopioimalla tehtävänantoa kielimalliin: joka viikko viikkopalaveri ohjaajan kanssa, oma Inkscape-tiedosto ja omat päätökset B-osiossa, omat testiarvot, issuet ja commitit GitHubissa, katselmointi asiakkaiden kanssa vk 51 ja julkaisutesti toisella opiskelijalla vk 6."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "v1.0 GitHub Pagesissa, tagi v1.0 ja release-teksti."],
        ["Repository", "Julkinen repository: koodi, testit, issuet syklin tarkistuslistoineen, pull request ja tagit v0.1, v1.0-rc1 ja v1.0."],
        ["Suunnitelma ja päiväkirja", "project-docs/suunnitelma.md, mvp.md, kysymykset.md, projektipaivakirja.md ja AI-loki. Päiväkirjasta commit joka viikolta."],
        ["Laatuaineisto", "T01–T26 issueissa, kolme virheenkorjausketjua, kirjastot.md, tietoturva.md, Lighthouse ennen ja jälkeen."],
        ["Katselmoinnit", "katselmointi.md (vk 51) ja julkaisutesti.md (vk 6) rooleilla; nimet ja sanatarkat lausumat Teamsissa ohjaajalla."],
        ["Näyttöaineisto", "Linkitetty näyttömatriisi 31 vaatimukselle, demo ja itsearviointi (Teams)."]
      ],
      huomiot: [
        ["Ennen 28.9.2026", "GitHub Education -vahvistus ja Copilot Student -tilaus (vahvistus voi kestää päiviä), opiskelijan GitHub-tunnus ja tekijänimi, asennusoikeudet (VS Code, Git, Node.js, Inkscape, Blender), demorepository kuvaohjeiden kuvakaappauksia varten."],
        ["Kuvaohjeiden kuvakaappaukset", "kuvakaappaukset.json listaa kuvattavat näkymät, alt-tekstit ja numeroidut kohdat. Kuvat otetaan GitHubin Dark high contrast- ja VS Coden Dark High Contrast -teemassa, M365 Copilot BC:n tenantista, rajattuina yhteen kohtaan. Kuvan lisäämisen jälkeen kohtien alueet (alue: x, y, leveys, korkeus prosentteina) asetetaan kuvan mukaan. tarkista.js varoittaa puuttuvista kuvista."],
        ["p5 osoitetaan muulla tavalla", "Vaatimus \"kirjoittaa ylläpidettävää ohjelmakoodia\" ei ole matriisissa rastina (ohjaajan päätös 23.9.2026). Osoitustapa sovitaan erikseen."],
        ["Krediitit", "200 krediittiä kuukaudessa ei välttämättä riitä agenttitilaan. Lisärahoitus (lisäkrediitit vai BC:n organisaatiolisenssi) on avoin ohjaajan päätös, takaraja lokakuun loppu. Alle 25 % jäljellä → kaistat A ja B kuun loppuun."],
        ["P0-tarkistuspiste vk 47", "Jos P0 on myöhässä, ohjaaja päättää viikon 47 palaverissa, mikä katselmoidaan keskeneräisenä ja mikä tehdään vk 4:llä omassa haarassa pull requestilla."],
        ["Aidot bugit", "Virheenkorjausketjut tehdään havaintoissueista. Jos aitoja havaintoja ei ole, ohjaaja antaa vikatehtävän. Keksittyjä bugeja ei kirjata."],
        ["Julkisuuden raja", "Itsearviointi, ohjaajan kommentti sekä testaajien ja katselmoijien nimet ja sanatarkat lausumat eivät kuulu julkiseen repositoryyn. Ne lähetetään Teamsissa tai sähköpostilla. Repositoryyn kirjataan roolit."],
        ["Opettajan tarkistusavain", "Testien odotetut tulokset eivät näy sivulla. Tarkistusavain on pedagogisessa rungossa (01-runko-v3.md § 13)."]
      ]
    }
  }
};
