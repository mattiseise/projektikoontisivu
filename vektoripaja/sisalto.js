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
    4: "Jousto ja tärkeä jatko",
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
          teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko {viikko}: {nimi}\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti tekee vain ___\nMinun odotettu tulokseni: Kun syöte on ___, tuloksen pitää olla ___.\n\nKirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista (Tiedosto, Täydennys tai Agentti) ja perustelu\n## Tiedostot\n## Älä tee (testitiedostot aina tässä)\n## Hyväksymiskriteerit\n## Testi: numero ja nimi, syöte ja odotettu tulos\n\nKäytä minun odotettua tulostani sellaisenaan. Älä kirjoita koodia."
        },
        kuvaohjeet: ["copilot-uusi-keskustelu", "copilot-tilatiedosto"],
        valmis: "kortissa on kuusi kohtaa, ja testissä on sinun odotettu tuloksesi.",
        jumissa: [
          { kysymys: "Copilot kirjoitti koodia eikä korttia?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Pyydä korttia uudelleen", teksti: "Älä kirjoita koodia. Kirjoita vain tehtäväkortti pyytämässäni muodossa." } },
          { kysymys: "Copilot muutti odotetun tulokseni?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Palauta oma odotettu tulos", teksti: "Käytä testissä minun odotettua tulostani sanatarkasti: (liitä tähän)." } },
          { kysymys: "En osaa kirjoittaa odotettua tulosta?", ohje: "Kirjoita, mitä ruudulla pitää näkyä, kun kortti on valmis. Esimerkiksi: \"Kun käynnistän sovelluksen, kuutio pyörii.\" Luku tai näkyvä asia riittää." },
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
          "Tarkista kortti: tavoite, kaista, tiedostot, Älä tee -kohta, hyväksymiskriteerit ja testi numeroineen ja nimineen.",
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
        tyokalu: "testi Täydennys-kaistalla, toteutus kortin kaistalla",
        oma: "kirjoitat testiin oman odotetun tuloksesi. Päätät jokaisesta tekoälyn vastauksesta: hyväksyn, korjautan tai hylkään. Kirjaat päätöksen ja perusteen AI-lokiin. Yhden kortin täydennykset kirjataan yhtenä merkintänä. Rastita 3a issuessa, kun testi on kirjoitettu. Rastita 3b, kun toteutus on valmis.",
        ohje: [
          "Kirjoita testi ensin (3a). Avaa testitiedosto. Kirjoita kommentti, jossa on syöte ja sinun odotettu tuloksesi. Hyväksy täydennys Tab-näppäimellä.",
          "Jos tulos ei ole luku, kirjoita se testiin tekstinä tai muodossa `True` tai `False`. Riittää: `virheilmoitus = \"Tiedosto ei ole SVG.\"`. Ei riitä: \"virhe tulee\".",
          "Jos kortin testi tehdään käsin sovelluksessa, kirjoita odotettu tulos issueen. Siirry silloin suoraan kohtaan 3b.",
          "Toteuta kortti sitten kortin kaistalla (3b). Tiedosto-kaistalla pyydä Copilotilta yksi tiedosto kerrallaan. Agentti-kaistalla käytä GitHub Copilotin agenttitilaa.",
          "Lue muutos, ennen kuin hyväksyt sen. Älä hyväksy muutoksia testitiedostoon.",
          "Tallenna tiedostot. Aja terminaalissa `python main.py`."
        ],
        pohja: [
          {
            otsikko: "Tiedosto-kaista: liitä tämä Copilotiin",
            teksti: "Toteuta tämä tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku, esimerkiksi vektoripaja/ikkuna.py)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTehtäväkortti:\n(liitä kortti tähän)\n\nTiedoston nykyinen sisältö:\n(liitä tiedosto tähän)"
          },
          {
            otsikko: "Agentti-kaista: liitä tämä GitHub Copilotiin (agenttitila)",
            teksti: "Toteuta issue #(numero) tämän kortin mukaan.\nMuuta vain kortin Tiedostot-kohdassa lueteltuja tiedostoja.\nÄlä muuta testejä.\nÄlä refaktoroi muuta koodia.\nJos tarvitset muutoksia muihin tiedostoihin, lopeta ja kerro, mitä ja miksi.\n\n(liitä kortti tähän)"
          }
        ],
        kuvaohjeet: ["vscode-taydennys", "vscode-hyvaksy-muutos"],
        valmis: "muutos on tallennettu, sovellus käynnistyy komennolla `python main.py`, ja AI-lokissa on päätös.",
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
          { kysymys: "Sovellus ei käynnisty ollenkaan?", ohje: "Tarkista ensin, että terminaalin rivin alussa lukee (.venv). Jos ei lue, toimi kuten kohdassa \"Terminaalissa lukee `ModuleNotFoundError`?\" Aja sitten `pip install -r requirements.txt` ja `python main.py`. Jos tulee virhe, toimi kuten kohdassa \"Tuliko virheilmoitus?\"" },
          { kysymys: "Terminaali sanoo `running scripts is disabled`?", ohje: "Windows estää PowerShellissä virtuaaliympäristön käynnistyksen. Avaa terminaali komentokehotteena. Valitse terminaalin +-painikkeen vierestä nuoli. Valitse sitten Command Prompt. Tarkista, että terminaalin rivin alussa lukee (.venv)." },
          { kysymys: "Terminaalissa lukee `ModuleNotFoundError`?", ohje: "Python ei löydä kirjastoa. Syy on yleensä se, että tulkki on väärä tai virtuaaliympäristö ei ole päällä. Paina VS Codessa Ctrl+Shift+P. Valitse Python: Select Interpreter. Valitse sitten tulkki, jonka polussa on `.venv`. Avaa uusi terminaali. Tarkista, että terminaalin rivin alussa lukee (.venv). Aja komento uudelleen." },
          { kysymys: "Krediittejä on jäljellä alle 25 prosenttia?", ohje: "Käytä Tiedosto- ja Täydennys-kaistoja kuun loppuun asti. Kerro asiasta ohjaajalle viikkopalaverissa." }
        ]
      },
      {
        nimi: "Tarkista",
        paikka: "VS Code",
        tyokalu: "sinä itse: VS Coden terminaali ja sovellus",
        oma: "etsit testikoodista oman odotetun tuloksesi, ennen kuin ajat testin. Jos tulosta ei löydy tai se on muuttunut, palaa kohtaan 3a ja kirjoita testi uudelleen. Rastita askel 4 issuessa.",
        ohje: [
          "Avaa testitiedosto. Etsi `assert`-rivi, joka tarkistaa oman odotetun tuloksesi. Tulos voi olla luku, teksti, `True` tai `False`.",
          "Aja terminaalissa `pytest`. Voit myös valita VS Coden Testing-paneelista Run Tests.",
          "Jos kortin testejä tehdään käsin, tee ne sovelluksessa. Vertaa havaittua tulosta odotettuun tulokseen. Kirjaa molemmat.",
          "Kirjaa tulos issueen: läpi tai ei läpi, ja mitä näit."
        ],
        pohja: { otsikko: "Testin kirjaus issueen", teksti: "Testi __: (nimi)\nOdotettu tulos (löytyi testikoodista rivillä __): \nHavaittu tulos: \nTulos: läpi / ei läpi" },
        kuvaohjeet: ["vscode-terminaali", "vscode-testing"],
        valmis: "issuessa on odotettu ja havaittu tulos jokaisesta kortin testistä.",
        jumissa: [
          { kysymys: "Testi ei mennyt läpi?", ohje: "Palaa kohtaan 3b. Korjaa toteutus. Älä muuta testiä. Jos sama testi epäonnistuu toisen kerran, avaa havaintoissue ja siirry askeleeseen 5." },
          { kysymys: "En löydä omaa odotettua tulostani testikoodista?", ohje: "Palaa kohtaan 3a, koska testi ei silloin tarkista sinun tulostasi. Kirjoita testi uudelleen kommentista, jossa on oma odotettu tuloksesi. Kirjaa tämä AI-lokiin." },
          { kysymys: "`pytest` ei löydä testejä?", ohje: "Tarkista, että testitiedosto on `tests/`-kansiossa. Tiedoston nimen pitää alkaa `test_`. Myös testifunktion nimen pitää alkaa `test_`. Jos terminaali ei tunne komentoa `pytest`, tarkista, että terminaalin rivin alussa lukee (.venv). Jos syytä ei löydy, lähetä ohjaajalle Teams-viesti." }
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
          teksti: "Tehtäväkortti #(numero) on tehty.\nMitä tapahtui (oma lause): \nKaista: Tiedosto / Täydennys / Agentti. Riittikö se? (oma lause): \nTestin tulos: läpi / ei läpi\nMitä hylkäsin tai korjautin ja miksi: \n\n1. Päivitä PROJEKTIN-TILA.md: valmista, seuraavana, tehdyt päätökset ja avoimet kysymykset. Anna koko tiedosto.\n2. Anna seuraava tehtäväkortti samassa muodossa. Jos viikon tavoite on valmis, sano se."
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
      feature: "VS Code ja GitHub ovat korkean kontrastin teemassa. Komennot `git --version` ja `python --version` tulostavat versiot. Julkinen repository on kloonattu VS Codeen ja jaettu ohjaajalle. `project-docs/mvp.md` on pushattu.",
      connection: "Tällä viikolla ei vielä rakenneta sovellusta. Laitat työkalut kuntoon. Kirjoitat omin sanoin, mitä MVP:hen kuuluu. Seuraavan viikon työsykli tarvitsee kaiken tämän.",
      deliverable: "Versiotulosteet · kloonattu ja jaettu repository · kolme pohjatiedostoa · `project-docs/mvp.md` GitHubissa · lähetetty kysymyslista · agenttipyynnön hinta päiväkirjassa.",
      why: "Ilman omaa MVP-kuvausta Copilot pilkkoo väärää asiaa. Ilman mittausta et tiedä, montako agenttipyyntöä voit tehdä kuukauden krediiteillä.",
      done: "Ohjaaja näkee repositoryn, `mvp.md` on GitHubissa, kysymyslista on lähetetty, ja päiväkirjassa on agenttipyynnön hinta tai merkintä \"odottaa käyttönäkymää\".",
      record: "MVP:n perustelu omin sanoin, repositoryn osoite, agenttipyynnön hinta ja näyttömatriisin vaatimukset: kehitysympäristö ja tärkeysjärjestys.",
      skills: ["Asiakkaan tarpeiden selvittäminen", "Tärkeysjärjestys: pakollinen ydin, tärkeä jatko ja jatkolista", "Kehitysympäristön käyttöönotto", "Versionhallinnan aloitus"],
      termit: ["MVP", "pakollinen ydin", "tärkeä jatko", "jatkolista", "tulkki", "pip", "virtuaaliympäristö", "repository", "kloonaus", "commit", "push", "tilatiedosto", "krediitti"],
      paivat: [
        ["Sopiminen ja asennus", "Sovi tekijänimi ja palaveripäivä. Asenna työkalut ja vaihda teemat."],
        ["Repository", "Aseta Git. Luo repository, kloonaa se ja lisää pohjat."],
        ["MVP", "Lue toimeksianto. Kirjoita `mvp.md` omin sanoin."],
        ["Commit ja kysymykset", "Tee commit ja push. Lähetä kysymyslista asiakkaille."],
        ["Mittaus", "Mittaa agenttipyynnön hinta. Kirjoita päiväkirja ja tee commit."]
      ],
      steps: [
        ["Sovi ohjaajan kanssa.", "Sovi Teamsissa tekijänimi ja viikkopalaverin päivä, maanantai tai tiistai. Tee tämä ennen Gitin asetuksia."],
        ["Asenna VS Code, Git, Inkscape ja Blender.", "Onko tämä jo tehty? Tarkista ohjelmat yksi kerrallaan. Asenna vain puuttuvat. Aja VS Coden terminaalissa <code>git --version</code>. Node.js:ää ei tarvita. Jos asensit sen jo, voit jättää sen koneelle."],
        ["Asenna Python 3.13.", "Onko tämä jo tehty? Aja terminaalissa <code>python --version</code>. Jos tuloste alkaa <code>Python 3.13</code>, siirry seuraavaan askeleeseen. Muuten lataa Python 3.13:n Windows installer (64-bit) python.org-sivulta, ei Microsoft Storesta. Rastita asennuksen ensimmäisessä ikkunassa Add python.exe to PATH. Katso kuvaohje alta."],
        ["Tarkista tulkki ja pip.", "Python-tulkki on ohjelma, joka ajaa Python-koodin. pip on Pythonin paketinhallinta. Se asentaa kirjastoja ja tulee Pythonin mukana. Sulje VS Code ja avaa se uudelleen. Aja <code>python --version</code>. Tulosteen pitää alkaa <code>Python 3.13</code>. Aja sitten <code>python -m pip --version</code>. Tulosteen lopussa pitää lukea <code>(python 3.13)</code>. Jos näkyy muu versio, lähetä ohjaajalle Teams-viesti."],
        ["Asenna VS Coden Python-laajennus.", "Onko tämä jo tehty? Avaa VS Codessa Extensions. Hae Python. Julkaisija on Microsoft. Jos laajennuksen kohdalla lukee Uninstall, laajennus on jo asennettu. Muuten valitse Install. Ensi viikolla luot laajennuksella virtuaaliympäristön (.venv). Se on projektin oma kansio, johon projektin kirjastot asennetaan."],
        ["Vaihda teemat.", "Valitse VS Codessa teema Dark High Contrast. Valitse GitHubin asetuksissa teema Dark high contrast."],
        ["Aseta Git.", "Aseta Gitin nimeksi sovittu tekijänimi. Aseta sähköpostiksi GitHubin noreply-osoite. Näin omaa sähköpostiosoitettasi ei julkaista. Katso kuvaohje alta."],
        ["Luo repository.", "Luo GitHubissa julkinen repository nimellä <code>vektoripaja</code>. Valitse Add a README file. README on repositoryn etusivun ohje."],
        ["Kloonaa repository.", "Kloonaa repository VS Codeen. Kloonaus tekee siitä kopion omalle koneellesi."],
        ["Lisää pohjat.", "Lisää kolme pohjatiedostoa ensi viikkoa varten: tilatiedosto <code>PROJEKTIN-TILA.md</code>, tehtäväkorttipohja ja <code>.github/copilot-instructions.md</code>. Pohjat ovat alla kopioitavina."],
        ["Jaa repository.", "Lisää ohjaaja Collaboratoriksi. Collaborator on henkilö, joka näkee repositoryn ja voi kommentoida sitä."],
        ["Kirjoita MVP.", "Kirjoita <code>project-docs/mvp.md</code>: pakollisen ytimen lista ja miksi muut asiat odottavat. Poista samalla suunnitelmastasi <code>[cite: n]</code>-merkinnät. Copilot saa selittää termejä, mutta perustelu on sinun. Kirjaa käyttö AI-lokiin."],
        ["Tee commit ja push.", "Tallenna muutokset commitiksi. Commit on yksi nimetty muutos. Lähetä se GitHubiin pushilla."],
        ["Lähetä kysymyslista.", "Kirjoita vähintään kolme kysymystä asiakkaille. Käytä pohjaa alta. Lähetä kysymykset Teamsissa. Vastaukset käydään läpi ensi viikon palaverissa."],
        ["Katso krediitit ennen mittausta.", "Avaa GitHubin käyttönäkymä. Käyttönäkymä on sivu, jolla krediittien kulutus näkyy. Kirjaa, montako krediittiä on käytetty."],
        ["Avaa GitHub Copilot.", "Avaa VS Codessa GitHub Copilotin chat."],
        ["Vaihda agenttitilaan.", "Valitse chatin tilaksi Agent. Agenttitila muokkaa tiedostoja ja kuluttaa krediittejä."],
        ["Lähetä mittauksen viestipohja.", "Viestipohja on valmis viesti, jonka kopioit. Kopioi mittauksen viestipohja alta ja lähetä se. Hylkää ehdotettu muutos, jos se koskee muita tiedostoja kuin README:tä."],
        ["Kirjaa hinta.", "Avaa käyttönäkymä uudelleen. Hinta on nykyinen luku miinus aiempi luku. Kirjaa hinta päiväkirjaan. Jos luku ei ole muuttunut, kirjaa \"odottaa käyttönäkymää\" ja katso huomenna."],
        ["Tee lisätehtävä.", "Valitse oman suunnitelmasi pakollisen ytimen listasta viisi termiä. Kirjoita jokaisesta yksi suomenkielinen rivi."]
      ],
      pohjat: [
        { otsikko: "Kysymyslista asiakkaille (Teams)", teksti: "Hei Matti ja Antti,\nKysymyksiä Vektoripajasta:\n1. \n2. \n3. \nKäydäänkö vastaukset läpi viikkopalaverissa?" },
        { otsikko: "Mittauksen viestipohja GitHub Copilotille (agenttitila)", teksti: "Lue README.md ja ehdota sen alkuun yksi lause, joka kertoo, mikä Vektoripaja on. Älä muuta muita tiedostoja." },
        { otsikko: "PROJEKTIN-TILA.md (repositoryn juureen)", teksti: "# PROJEKTIN-TILA – Vektoripaja\nTämä tiedosto annetaan vain Copilotille (Microsoft 365). Älä liitä sitä GitHub Copilotiin.\n\nPäivitetty: pp.kk.vvvv · Viikko: __\n\n## Valmista\n- \n\n## Seuraavana\n- (seuraava tehtävä ja issue-numero)\n\n## Tehdyt päätökset\n- (päätös · peruste · viikko)\n\n## Avoimet kysymykset\n- (kysymys · kenelle · mihin mennessä)\n\n## Krediitit\nKäytetty tässä kuussa: __ / 200\nAgentti-kaista sallittu: kyllä / ei (alle 25 % jäljellä → ei)" },
        { otsikko: "Tehtäväkorttipohja (.github/ISSUE_TEMPLATE/tehtavakortti.md)", teksti: "---\nname: Tehtäväkortti\nabout: Yksi rajattu tehtävä työsyklin mukaan\ntitle: \"\"\nlabels: tehtäväkortti\n---\n\n## Tavoite\n\n## Kaista (Tiedosto, Täydennys tai Agentti) ja perustelu\n\n## Tiedostot\n\n## Älä tee\n- Älä muuta testitiedostoja.\n\n## Hyväksymiskriteerit\n- [ ] \n\n## Testi: numero ja nimi, syöte ja odotettu tulos\nTesti __: \nOma odotettu tulokseni: \n\n## Oma tarkistus\nMuutin kortista ___ / En muuttanut, koska ___\n\n## Sykli\n- [ ] 1 Suunniteltu\n- [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu\n- [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu\n- [ ] 5 Raportoitu\n- [ ] 6 Kirjattu" },
        { otsikko: "Ohjeet GitHub Copilotille (.github/copilot-instructions.md)", teksti: "# Vektoripaja – ohjeet GitHub Copilotille\n\n## Projekti\nWindows-työpöytäsovellus (Python): low-poly 3D-mallinnin.\nInkscapen SVG → 3D-malli → .obj-tiedosto.\nTekninen pohja: Python 3.13, PySide6 (Qt), PyVista ja pyvistaqt\n(3D-näkymä), trimesh ja numpy (geometria ja OBJ), svgelements (SVG)\nja pytest (testit).\nKäynnistys: python main.py\nJulkaisu: PyInstaller tekee Windows-version, joka toimii ilman Pythonia.\n\n## Rakenne\n(Täydennä viikolla 43: kansiot ja moduulien rajat.)\nTestit ovat kansiossa tests/: tests/test_nimi.py.\n\n## Säännöt\n- Toteuta vain tehtäväkortin tehtävä.\n- Muuta vain kortin Tiedostot-kohdassa lueteltuja tiedostoja.\n- Älä muuta testejä. Testit kirjoittaa opiskelija.\n- Älä refaktoroi pyytämättä.\n- Älä lisää pip-paketteja ilman lupaa. Uusi paketti menee requirements.txt:hen.\n- Geometria- ja muunnosfunktiot ovat puhtaita funktioita ilman Qt:ta.\n- Kysy, jos kortti on epäselvä. Älä arvaa.\n- Kun kortti pyytää funktiota, kirjoita puhdas funktio.\n- Koodin ja commitien kieli: ___ (oma valintasi).\n- Vastaa suomeksi." },
        { otsikko: "Jos jäät jumiin: viesti ohjaajalle (Teams)", teksti: "Hei, olen jumissa viikolla 40.\nYritin: \nJäin kohtaan: \nRuudulla näkyy: " }
      ],
      resources: [
        ["Lataa PROJEKTIN-TILA.md", "pohjat/PROJEKTIN-TILA.md", true],
        ["Lataa tehtavakortti.md", "pohjat/tehtavakortti.md", true],
        ["Lataa copilot-instructions.md", "pohjat/copilot-instructions.md", true]
      ],
      kuvaohjeet: ["python-asennus", "github-noreply", "vscode-kloonaus", "github-collaborators", "vscode-commit-push", "github-kayttonakyma"],
      example: "`mvp.md`: \"Revolve kuuluu pakolliseen ytimeen, koska maljakko ja pyörä tehdään sillä. Boolean-toiminnot ovat jatkolistalla, koska malli toimii ilman niitä.\"",
      notEnough: "\"MVP on kaikki [MVP]-merkityt asiat.\" Lista on kopioitu suunnitelmasta. Siinä ei kerrota, miksi jokin jää pois."
    },
    41: {
      type: "feature",
      feature: "Sovelluksen ikkunassa pyörii kuutio. Testit 1 ja 2 menevät läpi. GitHubin releasessa on zip, jonka itsetesti meni läpi.",
      excerpt: "Haluamme kokeilla jokaista välivaihetta, emme vain katsoa kuvakaappauksia.",
      connection: "Viikolla 40 asensit työkalut. Nyt käyt työsyklin läpi vaarattomalla tehtävällä. Kuutio poistetaan myöhemmin, mutta sama sykli toistuu joka viikko.",
      deliverable: "Ikkuna, jossa kuutio pyörii · testit 1 ja 2 · release-zip GitHubissa · kaksi issueta suljettuna commit-viestillä · päätös teknisestä pohjasta suunnitelmassa.",
      why: "Jos sykli opitaan vasta SVG-tuonnin kanssa, uusi työtapa ja vaikea tehtävä tulevat yhtä aikaa. Silloin et tiedä, johtuuko ongelma työtavasta vai tehtävästä.",
      done: "Releasen zipistä purettu sovellus käynnistyy, ja kuutio pyörii. Actionsin ajo on vihreä, eli itsetesti meni läpi. `pytest` näyttää, että testi 1 menee läpi. Issuet #1 ja #2 on suljettu commitilla.",
      record: "Releasen osoite, issueiden numerot, testin 1 odotettu ja havaittu tulos, kiertokulma-funktio selityspohjalla ja näyttömatriisin vaatimukset: kehitysympäristön käyttöönotto, ulkoiset komponentit ja julkaisu tuotantoon.",
      skills: ["Tehtäväkortti ja hyväksymiskriteerit", "Tekninen pohja: PySide6, PyVista, trimesh ja pytest", "Testi ennen koodia", "Julkaisu releasena GitHub Actionsilla"],
      termit: ["työsykli", "tehtäväkortti", "issue", "kaista", "testi", "tekninen pohja", "requirements.txt", "tagi", "GitHub Actions", "paketointi", "itsetesti", "release", "zip"],
      steps: [
        ["Käy viikkopalaveri.", "Käy läpi asiakkaiden vastaukset kysymyslistaasi. Kirjaa ne tiedostoon <code>project-docs/kysymykset.md</code>. Viikkopalaveri on viikon tapaaminen ohjaajan kanssa."],
        ["Päätä ensin.", "Lue tekninen ehdotus suunnitelmasta. Kirjaa suunnitelmaan, hyväksytkö sen. Perustele päätös pakollisen ytimen toiminnoilla."],
        ["Kirjaa käyttöliittymävaatimus.", "Kirjoita suunnitelmaan, millainen sovelluksesi ulkoasun pitää olla: taustaväri, tekstin väri, tekstin koko ja painikkeiden koko. Kortin #1 hyväksymiskriteeri tulee tästä."],
        ["Pura pohja repositoryyn.", "Lataa alta <code>vektoripaja-pohja.zip</code>. Napsauta sitä hiiren oikealla painikkeella. Valitse Pura kaikki. Valitse kohteeksi repositorysi kansio. Pohjassa ovat valmiina julkaisun ja itsetestin tiedostot. Mukana on myös lista kirjastoista versioineen. Sen nimi on <code>requirements.txt</code>."],
        ["Luo virtuaaliympäristö itse.", "Avaa repositoryn kansio VS Codessa. Paina Ctrl+Shift+P. Valitse Python: Create Environment. Valitse sitten Venv. Valitse lopuksi Python 3.13. Jos VS Code tarjoaa kirjastojen asennusta, älä valitse listasta mitään. Valitse OK. Asennat kirjastot itse seuraavassa askeleessa. Katso kuvaohje alta."],
        ["Asenna kirjastot itse.", "Avaa uusi terminaali. Tarkista, että terminaalin rivin alussa lukee (.venv). Aja <code>pip install -r requirements.txt</code>. Aja sitten <code>python tarkista_ymparisto.py</code>. Rivien alussa pitää lukea OK. Viimeisellä rivillä lukee Ympäristö on kunnossa."],
        ["Kirjaa kirjastot README:hen.", "Kirjoita README:hen kirjastojen nimet ja lisenssit. Lisenssin näet komennolla <code>pip show</code>. Kirjoita komennon perään kirjaston nimi, esimerkiksi <code>pip show PySide6</code>."],
        ["Kirjoita testi 1 ennen koodia.", "Testi 1: kiertokulma. Funktio <code>kiertokulma(aika, nopeus)</code> saa ajan 0 ja nopeuden 0,5. Mitä odotat? Entä kun aika on 3? Kirjaa vastaukset ennen ajoa."],
        ["Tee kortti #1 työsyklillä.", "Kortti: kuutio pyörii sovelluksen ikkunassa. Vertaa Copilotin korttia toteutusavun mallikorttiin."],
        ["Tee kortti #2 työsyklillä.", "Kortti: sovellus julkaistaan releasena. Release on GitHubin julkaisusivu, josta valmiin version voi ladata zip-tiedostona. Julkaisu alkaa nimetystä versiosta Gitissä. Sitä kutsutaan tagiksi. Katso toteutusavusta, miten julkaiset."],
        ["Tee testi 2 puretusta kansiosta.", "Testi 2: julkaisu. Lataa zip releasesta. Pura se valitsemalla Pura kaikki. Käynnistä <code>Vektoripaja.exe</code> puretusta kansiosta, älä VS Codesta. Kuution pitää pyöriä."],
        ["Tee lisätehtävä.", "Lisätesti: mitä odotat, kun aika on negatiivinen? Kirjaa vastaus ennen ajoa. Lisätesti on ylimääräinen testi ilman T-numeroa."]
      ],
      resources: [
        ["Lataa vektoripaja-pohja.zip", "pohjat/vektoripaja-pohja.zip", true]
      ],
      kuvaohjeet: ["vscode-create-environment", "vscode-tulkki", "tarkista-ymparisto", "github-actions-ajo", "github-release-lataus", "windows-pura-kaikki", "windows-smartscreen"],
      example: "Perustelu suunnitelmaan: \"Hyväksyn ehdotuksen. svgelements lukee Inkscapen SVG:n, trimesh tekee revolven ja .obj-viennin, ja pytest testaa puhtaat funktiot.\"",
      notEnough: "\"Hyväksyn, koska Copilot suositteli tätä.\" Perustelussa ei ole yhtään pakollisen ytimen toimintoa.",
      help: {
        title: "Mallikortti, testipohja, kansiorakenne ja julkaisu",
        tree: "vektoripaja/\n├─ .github/\n│  ├─ ISSUE_TEMPLATE/tehtavakortti.md\n│  ├─ copilot-instructions.md\n│  └─ workflows/release.yml     (pohja)\n├─ .venv/                        (oma, ei GitHubiin)\n├─ esimerkit/esimerkki.svg       (pohja)\n├─ project-docs/\n│  ├─ mvp.md\n│  └─ kysymykset.md\n├─ tests/\n│  └─ test_kierto.py\n├─ vektoripaja/                  (paketin kansio: sovelluksen koodi)\n│  ├─ __init__.py                (pohja)\n│  ├─ ikkuna.py\n│  ├─ itsetesti.py               (pohja)\n│  ├─ kierto.py\n│  ├─ teema.py                   (pohja)\n│  └─ teema.qss                  (pohja)\n├─ .gitignore                    (pohja)\n├─ LUE_MINUT.txt                 (pohja)\n├─ PROJEKTIN-TILA.md\n├─ README.md\n├─ main.py                       (pohja)\n├─ pytest.ini                    (pohja)\n├─ rakenna_exe.bat               (pohja)\n├─ requirements.txt              (pohja)\n├─ tarkista_ymparisto.py         (pohja)\n└─ vektoripaja.spec              (pohja)",
        actions: [
          "Kopioi testipohja tiedostoon `tests/test_kierto.py`. Kirjoita omat odotetut tuloksesi `___`-kohtiin (työsyklin kohta 3a).",
          "Pyydä Tiedosto-kaistalla tiedostot yksi kerrallaan: ensin `vektoripaja/kierto.py`, sitten `vektoripaja/ikkuna.py`. Pohjan `main.py` kutsuu funktiota `kaynnista()` tiedostosta `vektoripaja/ikkuna.py`. Älä muuta tiedostoa `main.py`.",
          "Kortti #2: tee ensin commit ja push. Aja sitten terminaalissa `git tag v0.0.41`. Aja sen jälkeen `git push origin v0.0.41`. Tagin push käynnistää GitHub Actionsin. Se ajaa testit ja tekee Windows-version. Windows-version tekemistä kutsutaan paketoinniksi. Lopuksi se ajaa Windows-versiolle itsetestin.",
          "Avaa GitHubissa Actions-välilehti. Kun ajo on vihreä, avaa Releases. Siellä on zip `Vektoripaja-v0.0.41-windows.zip`.",
          "Tagin numero on viikon numero: viikolla 41 `v0.0.41`, viikolla 43 `v0.0.43`. Jos julkaiset saman viikon version uudelleen, lisää loppuun `-2`, esimerkiksi `v0.0.41-2`. Samaa tagia ei käytetä kahdesti."
        ],
        code: "MALLIKORTTI #1\n## Tavoite\nKuutio pyörii sovelluksen ikkunassa.\n## Kaista ja perustelu\nTiedosto. Kaksi tiedostoa, pyydetään yksi kerrallaan.\n## Tiedostot\nvektoripaja/kierto.py, vektoripaja/ikkuna.py\n## Älä tee\nÄlä lisää muita kirjastoja. Älä muuta tiedostoja main.py ja tests/test_kierto.py.\n## Hyväksymiskriteerit\n- [ ] Komento python main.py avaa ikkunan, jossa kuutio pyörii tasaisesti.\n- [ ] Tausta on musta ja teksti #1fa4e3 (vektoripaja/teema.py).\n- [ ] Funktio kiertokulma ei käytä Qt:ta.\n## Testi\nTesti 1 (kiertokulma): kiertokulma(0, 0.5) → (oma odotettu tuloksesi) ja kiertokulma(3, 0.5) → (oma odotettu tuloksesi)\n## Sykli\n- [ ] 1 Suunniteltu  - [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu  - [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu  - [ ] 5 Raportoitu  - [ ] 6 Kirjattu\n\nTESTIPOHJA tests/test_kierto.py\nfrom vektoripaja.kierto import kiertokulma\n\n\ndef test_1_kiertokulma():\n    assert kiertokulma(0, 0.5) == ___\n    assert kiertokulma(3, 0.5) == ___",
        test: "Testi 2 (julkaisu): lataa zip releasesta. Pura se valitsemalla Pura kaikki. Käynnistä Vektoripaja.exe puretusta kansiosta. Kuution pitää pyöriä. Jos Windows sanoo \"Windows suojasi tietokonettasi\", valitse Lisätietoja. Valitse sitten Suorita silti."
      },
      sykli: {
        pohjat: {
          1: {
            otsikko: "Viikon 41 kortti #1: täytä ja liitä Copilotiin",
            teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko 41: Harjoitussykli\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti tekee vain pyörivän kuution sovelluksen ikkunaan.\nMinun odotettu tulokseni: Kun syöte on kiertokulma(0, 0.5), tuloksen pitää olla ___. Kun syöte on kiertokulma(3, 0.5), tuloksen pitää olla ___.\nRajapinta: kiertokulma(aika, nopeus) palauttaa luvun.\n\nKirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista (Tiedosto, Täydennys tai Agentti) ja perustelu\n## Tiedostot\n## Älä tee (testitiedostot aina tässä)\n## Hyväksymiskriteerit\n## Testi: numero ja nimi, syöte ja odotettu tulos\n\nKäytä minun odotettua tulostani sellaisenaan. Älä kirjoita koodia."
          },
          3: {
            otsikko: "Tiedosto-kaista: liitä tämä Copilotiin",
            teksti: "Toteuta tämä tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku, esimerkiksi vektoripaja/ikkuna.py)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTehtäväkortti:\n(liitä kortti tähän)\n\nTiedoston nykyinen sisältö:\n(liitä tiedosto tähän)"
          }
        },
        ohjeet: {
          3: [
            "Kirjoita testi ensin (3a). Kortissa #1 kopioi toteutusavun testipohja tiedostoon `tests/test_kierto.py`. Kirjoita omat arvosi `___`-kohtiin.",
            "Kortissa #2 kirjoita testin 2 odotettu tulos issueen. Testi 2 tehdään käsin. Siirry sitten suoraan kohtaan 3b.",
            "Toteuta kortti sitten Tiedosto-kaistalla (3b). Tiedosto-kaista tarkoittaa, että Copilot kirjoittaa koodin yksi tiedosto kerrallaan. Pyydä ensin `vektoripaja/kierto.py`, sitten `vektoripaja/ikkuna.py`.",
            "Kortissa #2 et kirjoita koodia. Julkaisun tiedostot ovat pohjassa. Toteutat kortin tekemällä tagin ja pushaamalla sen. Katso toteutusapu.",
            "Lue jokainen tiedosto, ennen kuin hyväksyt sen. Älä hyväksy muutoksia testitiedostoon.",
            "Tallenna tiedostot. Aja terminaalissa `python main.py`."
          ]
        },
        lisa: {
          3: "Tällä viikolla testi kirjoitetaan testipohjaan. Täydennys-kaista otetaan käyttöön viikolla 43. Silloin testi kirjoitetaan kommentista. Agentti-kaista otetaan käyttöön viikolla 44."
        },
        jumissa: {
          3: [
            { kysymys: "Python: Create Environment ei näy, tai listassa ei ole Python 3.13:a?", ohje: "Tarkista, että VS Coden Python-laajennus on asennettu (viikko 40). Sulje VS Code ja avaa se uudelleen. Jos Python 3.13 puuttuu yhä, aja terminaalissa `python --version`. Lähetä tuloste ohjaajalle Teamsissa." },
            { kysymys: "`python main.py` sanoo, ettei `vektoripaja.ikkuna`-moduulia löydy?", ohje: "Tiedosto `vektoripaja/ikkuna.py` tehdään kortissa #1. Jos olet jo tehnyt sen, tarkista, että se on kansiossa `vektoripaja` eikä repositoryn juuressa." }
          ],
          4: [
            { kysymys: "Actions-ajo on punainen?", ohje: "Avaa Actions-välilehdeltä punainen ajo. Avaa sitten sen punainen askel. Lue viimeiset rivit. Jos punaisen askeleen nimi on Aja testit (pytest), aja `pytest` omalla koneellasi. Korjaa virhe ennen uutta tagia. Muuten kopioi rivit Copilotille työsyklin pohjalla \"Kysy virheestä Copilotilta\"." },
            { kysymys: "Releases-sivulla ei ole zipiä?", ohje: "Pelkkä commit ei tee releasea. Tarkista, että ajoit `git push origin v0.0.41`. Katso Actions-välilehdeltä, onko ajo vielä kesken. Ajo kestää noin 10 minuuttia." },
            { kysymys: "Windows sanoo \"Windows suojasi tietokonettasi\"?", ohje: "Tämä on Microsoft Defender SmartScreen. Se varoittaa, koska sovellusta ei ole allekirjoitettu. Valitse Lisätietoja ja sitten Suorita silti." }
          ]
        }
      }
    },
    43: {
      type: "feature",
      feature: "Inkscapessa piirretty SVG avautuu sovellukseen. Sen polut näkyvät 3D-näkymässä viivoina.",
      excerpt: "Tarvitsemme Windowsilla toimivan työpöytäsovelluksen, joka avaa Inkscapessa piirretyn SVG-tiedoston ja tekee siitä low-poly-mallin.",
      connection: "Nyt sykli on tuttu. Ensimmäinen oikea ominaisuus on tuonti. Ilman sitä mallista ei synny mitään.",
      deliverable: "Oma testitiedosto Inkscapesta · testit 3–5 · kansiorakenne suunnitelmassa · polut näkymässä · `project-docs/kirjastot.md` · viikon release.",
      why: "Kaikki myöhemmät viikot tarvitsevat tuodut polut. Jos tuonti on epävarma, myös revolve ja inflate ovat epävarmoja.",
      done: "Oma SVG avautuu tiedostoikkunasta, testit 3–5 menevät läpi, ja `project-docs/kirjastot.md`:ssä on kaksi svgelementsin rajoitetta omalla tiedostolla kokeiltuna.",
      record: "Kansiorakenne ja moduulien rajat, yksi svgelementsin rajoite omalla tiedostolla kokeiltuna, viikon funktio selityspohjalla ja näyttömatriisin vaatimukset: kirjaston rajoitteet ja tiedon käsittely.",
      skills: ["SVG-tiedoston tuonti", "Moduulien rajat", "Komponenttikirjaston rajoitteet", "Ulkoinen tiedosto turvallisesti"],
      termit: ["täydennys", "moduuli", "havaintoissue", "layer"],
      steps: [
        ["Piirrä testitiedosto.", "Tee Inkscapessa nimetyt layerit ja kolme sisäkkäistä ryhmää. Katso kuvaohje alta. Tallenna tiedosto kansioon <code>testiaineisto/</code>."],
        ["Kirjoita testit 3–5 ensin.", "Testi 3: kolme polkua. Tiedostossa on kolme polkua. Testi 4: haitallinen SVG. SVG:ssä on <code>&lt;script&gt;</code>-elementti. Testi 5: väärä tiedosto. Tiedosto ei ole SVG. Kirjaa jokaiselle, mitä odotat."],
        ["Lisää havaintopohja.", "Tallenna havaintopohja tiedostoon <code>.github/ISSUE_TEMPLATE/havainto.md</code>. Kun huomaat virheen, tee siitä havaintoissue: mitä odotit, mitä tapahtui ja miten virheen saa toistettua."],
        ["Kirjaa rakenne.", "Kirjaa suunnitelmaan kansiorakenne ja moduulien rajat. Moduuli on kansio tai tiedosto, jolla on yksi vastuu. Päivitä sama rakenne tiedostoon <code>copilot-instructions.md</code>."],
        ["Sovi dokumentointitapa.", "Sovi palaverissa, miten ohjelma dokumentoidaan: README ja käyttöohje. Kirjaa sovittu tapa suunnitelmaan."],
        ["Toteuta työsyklillä.", "Kirjoita testit Täydennys-kaistalla kommentista. Toteuta tuonti Tiedosto-kaistalla, tiedosto kerrallaan."],
        ["Kokeile rajoitteita.", "Kokeile omalla tiedostollasi, mitä svgelements ei lue. Kirjaa se <code>project-docs/kirjastot.md</code>:hen."],
        ["Julkaise viikon versio.", "Tee tagi <code>v0.0.43</code> ja pushaa se kuten viikolla 41. Kun Actions-ajo on vihreä, viikon versio on releasessa. Asiakkaat voivat kokeilla sitä."]
      ],
      example: "`kirjastot.md`: \"svgelements ei tee tekstistä polkuja. Kokeilin tiedostolla elain.svg: tekstiobjekti jäi pois näkymästä.\"",
      notEnough: "\"svgelementsillä on rajoitteita.\" Mitään ei ole kokeiltu omalla tiedostolla.",
      resources: [
        ["Lataa havainto.md", "pohjat/havainto.md", true]
      ],
      kuvaohjeet: ["inkscape-layerit"],
      help: {
        title: "SVG:n lukeminen turvallisesti",
        tree: "Avaa-painike → QFileDialog.getOpenFileName()   vain .svg\n  → SVG.parse(polku)        svgelements lukee datana, ei suorita mitään\n  → polkujen pisteet        y-arvot käännetään: −y\n  → viivat PyVistaan        yksi viiva per polku",
        actions: [
          "Avaa tiedosto Qt:n tiedostoikkunalla: `QFileDialog.getOpenFileName(self, \"Avaa SVG\", \"\", \"SVG (*.svg)\")`.",
          "Lue SVG svgelementsillä: `SVG.parse(polku)`. Käy läpi `svg.elements()` ja ota talteen `Path`-elementit.",
          "svgelements lukee SVG:n datana. Se ei suorita `<script>`-elementtiä. Tämä on testin 4 syy.",
          "SVG:n y-akseli kasvaa alaspäin, 3D-näkymän ylöspäin. Käännä y-arvot: `-y`.",
          "Tee polun pisteistä viiva: `pyvista.lines_from_points(pisteet)`. Piirrä viiva näkymään: `plotter.add_mesh(viiva)`.",
          "Tarkista tiedoston pääte ja sisältö ennen lukemista. Näin väärä tiedosto antaa selkeän virheilmoituksen (testi 5)."
        ],
        code: "TUONNIN TARKISTUSLISTA\n[ ] tiedostoikkuna näyttää vain .svg-tiedostot\n[ ] SVG luetaan svgelementsillä, ei omalla tekstinkäsittelyllä\n[ ] y-arvot käännetään\n[ ] muu tiedosto antaa selkeän virheilmoituksen\n[ ] testit 3–5 ovat testitiedostossa omina funktioinaan",
        test: "Avaa oma SVG, testitiedosto, jossa on script-elementti, ja tekstitiedosto. Kirjaa jokaisen tulos.",
        links: [
          ["svgelements", "https://github.com/meerk40t/svgelements"],
          ["Qt for Python: QFileDialog", "https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QFileDialog.html"],
          ["PyVista: lines_from_points", "https://docs.pyvista.org/api/utilities/_autosummary/pyvista.lines_from_points.html"]
        ]
      },
      sykli: {
        pohjat: {
          3: {
            otsikko: "Tiedosto-kaista: liitä tämä Copilotiin",
            teksti: "Toteuta tämä tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTehtäväkortti:\n(liitä kortti tähän)\n\nTiedoston nykyinen sisältö:\n(liitä tiedosto tähän)"
          }
        },
        lisa: {
          3: "Tällä viikolla kirjoitat testin ensimmäisen kerran Täydennys-kaistalla. Se tarkoittaa, että kirjoitat kommentin ja hyväksyt GitHub Copilotin täydennyksen. Täydennys on harmaa koodiehdotus, jonka hyväksyt Tab-näppäimellä."
        }
      }
    },
    44: {
      type: "feature",
      feature: "SVG:n layerit ja ryhmät muuttuvat solmupuuksi eli mallin vanhempi–lapsi-puuksi. Hierarkiapaneeli näyttää osien nimet sisennettyinä.",
      excerpt: "Piirroksen layerit ja ryhmät muuttuvat mallin osiksi niin, että pää pysyy kiinni vartalossa, kun vartaloa siirretään.",
      connection: "Viikolla 43 polut tulivat 3D-näkymään irrallisina. Nyt niille tulee rakenne: mikä osa on minkäkin lapsi. PyVistassa osat eivät ole sisäkkäin, joten teet puun itse. Viikon 47 transformit ja viikon 49 vienti tarvitsevat tämän puun.",
      deliverable: "Muunnoksen rajapinta ja testit 6–8 · muunnos puhtaana funktiona · maailmamuunnos ja sen lisätesti · hierarkiapaneeli · valinnan toiminta suunnitelmassa · revolven valintatapojen vertailu · viikon release.",
      why: "Ilman puuta osat eivät seuraa toisiaan. Silloin pää jää paikalleen, kun vartaloa siirretään, eikä .obj-tiedostoon synny osia.",
      done: "Oman tiedostosi kolme ryhmätasoa näkyvät paneelissa sisennettyinä. Testit 6–8 ja maailmamuunnoksen lisätesti menevät läpi. Suunnitelmassa on valinnan toiminta perusteluineen.",
      record: "Hierarkian muunnos selityspohjalla (tämä on viikon funktio), valinnan toiminnan perustelu ja näyttömatriisin vaatimukset: rakenteinen ohjelmointi, käyttöliittymä ja toimintalogiikka.",
      skills: ["Puun läpikäynti: rekursio tai silmukka", "Puhdas funktio ja rajapinta", "Käyttöliittymän osa suunnitelman mukaan", "Agentti-kaista: agenttitila"],
      termit: ["solmupuu", "maailmamuunnos", "hierarkiapaneeli", "puhdas funktio", "rajapinta"],
      steps: [
        ["Kirjoita rajapinta.", "Kirjoita korttiin funktion nimi, mitä se saa (SVG:n ryhmä) ja mitä se palauttaa (solmu, jolla on nimi, lapset ja oma muunnos). Rajapinta on funktion nimi, syöte ja paluuarvo."],
        ["Kirjoita testit 6–8.", "Testi 6: kolme tasoa. Ryhmät ovat kolmessa tasossa. Testi 7: tyhjä ryhmä. Testi 8: nimetön ryhmä. Kirjaa jokaiselle, mitä odotat."],
        ["Kirjoita maailmamuunnos.", "Maailmamuunnos kertoo osan lopullisen paikan näkymässä. Se lasketaan näin: vanhemman maailmamuunnos kertaa osan oma muunnos. Kirjoita siitä puhdas funktio ilman Qt:ta. Kirjoita ensin lisätesti: kun vanhempaa ei ole siirretty, kierretty eikä skaalattu, lapsen maailmamuunnos on sama kuin sen oma muunnos."],
        ["Tee kortti Agentti-kaistalla.", "Kortti koskee funktiota ja paneelia eli useaa tiedostoa. Agentti-kaista tarkoittaa GitHub Copilotin agenttitilaa. Katso kuvaohjeet alta."],
        ["Päätä valinnan toiminta.", "Kun käyttäjä klikkaa osaa, valitaanko lapsi vai koko kappale? Kirjaa päätös ja peruste suunnitelmaan."],
        ["Vertaa revolven valintatapoja.", "Vertaa kahta tapaa: valinta ja painike sovelluksessa, tai nimimerkintä Inkscapessa, esimerkiksi layerin nimen perässä <code>[revolve]</code>. Kirjaa hyvät ja huonot puolet. Tuo suositus ensi viikon palaveriin."],
        ["Julkaise viikon versio.", "Tee tagi <code>v0.0.44</code> ja pushaa se. Kun Actions-ajo on vihreä, viikon versio on releasessa."]
      ],
      example: "Selityspohja: \"Saa SVG-ryhmän. Palauttaa solmun, jolla on nimi, lapset ja oma muunnos. Valitsee: jos ryhmällä ei ole nimeä, käyttää id:tä. Toistaa: kutsuu itseään jokaiselle lapsiryhmälle. Testi 6 tarkistaa kolmen tason puun.\"",
      notEnough: "\"Funktio muuntaa SVG:n hierarkiaksi.\" Selityksestä puuttuvat syöte, paluuarvo, valinta, toisto ja testi.",
      kuvaohjeet: ["vscode-chat-tilat", "vscode-liita-tiedosto"],
      help: {
        title: "Solmupuu ja maailmamuunnos",
        tree: "<svg>\n  <g inkscape:groupmode=\"layer\" inkscape:label=\"Vartalo\">\n    <path .../>\n    <g inkscape:label=\"Pää\">\n      <g inkscape:label=\"Korvat\"> <path .../> </g>\n    </g>\n  </g>\n</svg>\n\nSolmu(\"Vartalo\", muunnos=4×4, lapset=[\n  Solmu(\"Pää\", lapset=[Solmu(\"Korvat\")])])\n\nmaailmamuunnos(lapsi) = maailmamuunnos(vanhempi) @ lapsi.muunnos",
        actions: [
          "svgelementsissä ryhmä on `Group`. Layerin nimi on sen `values`-sanakirjassa: `ryhma.values.get(\"{http://www.inkscape.org/namespaces/inkscape}label\")`. Jos nimeä ei ole, käytä `ryhma.id`:tä.",
          "Tee oma luokka `Solmu`: nimi, lapset ja oma muunnos. Muunnos on numpyn 4×4-matriisi, aluksi `numpy.eye(4)`.",
          "Käy puu läpi ryhmä kerrallaan. Jokaisesta ryhmästä tulee solmu, ja sen aliryhmistä tulee solmun lapset.",
          "PyVistan kappaleet eivät ole sisäkkäin. Siksi lapsen paikka lasketaan itse: `vanhemman_maailma @ solmu.muunnos`. Merkki `@` on matriisien kertolasku.",
          "VTK:ssa on myös `vtkAssembly`, joka liikuttaa lapsia mukana. Tässä projektissa käytetään omaa funktiota, koska sen voi testata.",
          "Näytä puu Qt:n `QTreeWidget`-paneelissa. Jokaisesta solmusta tulee `QTreeWidgetItem`.",
          "Puhdas funktio ei muuta saamaansa dataa. Se palauttaa uuden solmun."
        ],
        code: "FUNKTION TARKISTUSLISTA\n[ ] rajapinta kirjoitettu korttiin ennen toteutusta\n[ ] ei sivuvaikutuksia: palauttaa uuden solmun\n[ ] tyhjä ryhmä käsitelty (testi 7)\n[ ] nimetön ryhmä saa nimekseen id:n (testi 8)\n[ ] maailmamuunnos on puhdas funktio ilman Qt:ta, ja sillä on lisätesti\n[ ] paneeli näyttää sisennykset oikein",
        test: "Avaa oma testitiedostosi. Vertaa paneelin puuta Inkscapen Layers and Objects -paneeliin. Niiden pitää olla samat.",
        links: [
          ["numpy: matriisien kertolasku (@)", "https://numpy.org/doc/stable/reference/generated/numpy.matmul.html"],
          ["Qt for Python: QTreeWidget", "https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QTreeWidget.html"]
        ]
      },
      sykli: true
    },
    45: {
      type: "feature",
      feature: "Puoliprofiilista syntyy pyörähdyskappale. Segmenttien määrää voi säätää välillä 3–32. Kappaletta voi kiertää hiirellä joka puolelta.",
      excerpt: "Puoliprofiilista pitää syntyä pyörähdyskappale, esimerkiksi maljakko, ja viivasta putki, esimerkiksi johto tai sarvi.",
      connection: "Nyt osat ovat puussa. Ensimmäinen muoto on revolve: puoliprofiili pyörähtää akselin ympäri, ja siitä syntyy kappale. Revolve tarkoittaa pyörähdyskappaletta.",
      deliverable: "Sovittu valintatapa suunnitelmassa · oma hyväksymiskriteeri profiilille · testit 9–11 · revolve, segmenttisäädin ja orbit · viikon release.",
      why: "Revolve on MVP:n ensimmäinen oikea 3D-muoto. Ilman sitä maljakkoa, pyörää tai kupolia ei synny.",
      done: "Oma profiilisi pyörähtää kappaleeksi, segmenttisäädin muuttaa särmien määrää välillä 3–32, ja testit 9–11 menevät läpi.",
      record: "Sovittu valintatapa ja oma hyväksymiskriteeri akselin väärälle puolelle, viikon funktio selityspohjalla ja näyttömatriisin vaatimukset: ratkaisut yhdessä, toimintalogiikka ja kirjaston toiminnot.",
      skills: ["Ratkaisuvaihtoehdot yhdessä tiimin kanssa", "Toimintalogiikka: profiili kappaleeksi", "Komponenttikirjaston geometria", "Rajatapausten testaus"],
      termit: ["revolve", "orbit", "kysymystila"],
      steps: [
        ["Sovi valintatapa palaverissa.", "Esitä vertailusi. Sovi valintatapa ohjaajan kanssa. Kirjaa sovittu tapa issue-kommenttina ja suunnitelmaan."],
        ["Päätä akselin väärän puolen käsittely.", "Mitä tehdään, jos profiilin piste on akselin väärällä puolella? Kirjaa oma hyväksymiskriteeri suunnitelmaan. Se on testin 11 odotettu tulos."],
        ["Kirjoita testit 9–11.", "Testi 9: profiilin pisteet. Testi 10: segmenttien rajat, kun määrä on 2 ja 33. Testi 11: akselin väärä puoli. Profiilin piste on akselin väärällä puolella. Kirjaa odotukset ennen koodia."],
        ["Kysy kysymystilassa.", "Avaa GitHub Copilotin chat kysymystilassa eli Ask-tilassa. Kysy, miten <code>trimesh.creation.revolve</code> lukee pisteet. Kysymystila vastaa, mutta ei muuta tiedostoja."],
        ["Tee kortit työsyklillä.", "Tee revolve, segmenttisäädin ja orbit. Orbit tarkoittaa, että näkymää kierretään hiirellä. PyVistan kamerassa se on valmiina."],
        ["Julkaise viikon versio.", "Tee tagi <code>v0.0.45</code> ja pushaa se. Kun Actions-ajo on vihreä, viikon versio on releasessa."]
      ],
      example: "Testin 11 hyväksymiskriteeri: \"Jos piste on akselin väärällä puolella, se siirretään akselille ja käyttäjä näkee huomautuksen.\"",
      notEnough: "\"Virheelliset pisteet käsitellään.\" Kriteeristä ei näe, mitä pisteelle tapahtuu eikä mitä käyttäjä näkee.",
      help: {
        title: "trimeshin revolve ja profiili",
        tree: "SVG-profiili                  trimesh.creation.revolve\nx = etäisyys akselista    →  pisteet: [(x, korkeus), …]\ny = korkeus (käännä: −y)  →  sections = 3…32",
        actions: [
          "revolve saa profiilin pisteet ja segmenttien määrän: `trimesh.creation.revolve(pisteet, sections=segmentit)`. Pisteet ovat pareja: etäisyys akselista ja korkeus.",
          "SVG:n y-akseli kasvaa alaspäin, 3D-näkymän ylöspäin. Käännä y-arvot.",
          "Piste x = 0 on akselilla. Profiili piirretään akselin toiselle puolelle.",
          "Tuloksena on trimesh-kappale. Näytä se PyVistassa: `plotter.add_mesh(pyvista.wrap(kappale))`.",
          "Segmenttisäädin on Qt:n `QSpinBox`. Tee rajaus 3–32 puhtaana funktiona, jotta testi 10 voi tarkistaa sen.",
          "Orbit on PyVistassa valmiina: näkymää voi kiertää hiirellä. Sinun ei tarvitse tehdä sitä itse."
        ],
        code: "REVOLVEN TARKISTUSLISTA\n[ ] valintatapa sovittu ja kirjattu\n[ ] testin 11 kriteeri kirjattu ennen koodia\n[ ] segmenttien määrä rajataan 3–32 (testi 10)\n[ ] kappale näkyy oikein päin\n[ ] orbit toimii hiirellä",
        test: "Piirrä maljakon puoliprofiili. Kokeile segmenttimääriä 3, 8 ja 32. Kappaleen pitää muuttua kulmikkaasta pyöreäksi.",
        links: [
          ["trimesh: creation.revolve", "https://trimesh.org/trimesh.creation.html"],
          ["PyVista: Plotter", "https://docs.pyvista.org/api/plotting/_autosummary/pyvista.Plotter.html"]
        ]
      },
      sykli: true
    },
    46: {
      type: "feature",
      feature: "Viivapolusta syntyy putki, jossa on 3–8 sivua. Orientaatiowidgetillä kameran voi kääntää katsomaan suoraan edestä, sivulta tai ylhäältä. View lock -painike lukitsee kierron.",
      excerpt: "Mallia pitää voida katsoa suoraan edestä, sivulta ja ylhäältä.",
      connection: "Inflate tarkoittaa, että viivasta tulee putki. Se toistaa revolven kaavan: polku, geometria, säädin ja testit. Toinen osa on kamera. Suunnitelmasi Orthographic Plane Snap tehdään kahdessa vaiheessa. Pakollisessa ytimessä kamera kääntyy suoraan akselin suuntaan. Tätä kutsutaan suoraksi näkymäksi. Tärkeässä jatkossa lisätään ortografinen näkymä.",
      deliverable: "Testit 12–14 · inflate ja sivumäärän säädin · putkigeometrian rajoitteet `kirjastot.md`:ssä · orientaatiowidget ja view lock -painike · viikon release.",
      why: "Putkella tehdään johdot, sarvet ja raajat. Suora näkymä ja view lock tarvitaan tarkkaan työhön: ilman niitä kamera kääntyy vahingossa, kun siirrät osia viikolla 47.",
      done: "Inflate on valmis, kun oma polkusi muuttuu putkeksi, sivumäärän voi valita väliltä 3–8 ja testit 12–13 menevät läpi. Kamera on valmis, kun orientaatiowidgetin akselin klikkaus kääntää kameran suoraan akselin suuntaan, view lock estää kierron ja testi 14 menee läpi. Jos kamera siirtyy viikolle 47, se on sovittu vaihtoehto eikä virhe.",
      record: "Kumpi osa valmistui ensin, putkigeometrian rajoitteet, viikon funktio selityspohjalla ja näyttömatriisin vaatimukset: toimintalogiikka, kirjaston rajoitteet, kirjaston toiminnot ja käyttöliittymä.",
      skills: ["Toimintalogiikka: polku putkeksi", "Komponenttikirjaston rajoitteet", "Valmiit komponentit: orientaatiowidget", "Käyttöliittymän tila: view lock"],
      termit: ["inflate", "orientaatiowidget", "suora näkymä", "view lock"],
      steps: [
        ["Tee ensin inflate.", "Inflate on pakollisen ytimen kohta 4 ja kamera kohta 6. Tee inflate ensin. Jos aika loppuu, kamera siirtyy viikon 47 alkuun. Siitä sovitaan palaverissa. Se on suunniteltu vaihtoehto."],
        ["Kirjoita testit 12–14.", "Testi 12: sivujen rajat, kun määrä on 2 ja 9. Testi 13: suljettu polku. Testi 14: view lock. View lock on päällä, ja yrität kiertää näkymää. Kirjaa odotukset ennen koodia."],
        ["Tee inflate työsyklillä.", "Tee putki PyVistan tube-suodattimella. Tee myös sivumäärän säädin. Kokeile omilla poluillasi. Kirjaa putkigeometrian rajoitteet <code>project-docs/kirjastot.md</code>:hen."],
        ["Tee kamera työsyklillä.", "Orientaatiowidget on pieni akselikuvio näkymän kulmassa. Kun klikkaat sen akselia, kamera kääntyy katsomaan mallia suoraan akselin suunnasta. View lock on painike, joka estää kameran kiertymisen."],
        ["Julkaise viikon versio.", "Tee tagi <code>v0.0.46</code> ja pushaa se. Kun Actions-ajo on vihreä, viikon versio on releasessa."]
      ],
      example: "Kameran hyväksymiskriteeri: \"Kun klikkaan orientaatiowidgetin Z-akselia, kamera katsoo mallia suoraan ylhäältä. Kaukana olevat osat näyttävät edelleen pienemmiltä. Se on oikein, koska ortografinen näkymä kuuluu tärkeään jatkoon.\"",
      notEnough: "\"Kamera toimii ortografisesti.\" Kriteeristä ei näe, mitä ruudulla tapahtuu, ja se lupaa tärkeän jatkon toiminnon.",
      help: {
        title: "Putki ja orientaatiowidget",
        tree: "SVG-polku → pisteet (x, −y, 0) → pyvista.lines_from_points(pisteet)\n  → .tube(radius=säde, n_sides=3…8, capping=True)\n  → trimesh-kappale vientiä varten\nnäkymä: plotter.add_camera_orientation_widget()\nview lock: plotter.enable_2d_style()   ·   kierto takaisin: plotter.enable_trackball_style()",
        actions: [
          "Tee polun pisteistä viiva: `pyvista.lines_from_points(pisteet)`. Suljetulle polulle lisää `close=True` (testi 13).",
          "Tee viivasta putki: `viiva.tube(radius=säde, n_sides=sivut, capping=True)`. Rajaa sivujen määrä välille 3–8 puhtaalla funktiolla (testi 12).",
          "Muunna putki trimesh-kappaleeksi: `trimesh.Trimesh(vertices=putki.points, faces=putki.triangulate().regular_faces)`. Näin vienti viikolla 49 toimii kaikille osille samalla tavalla.",
          "Orientaatiowidget: `plotter.add_camera_orientation_widget()`. Valmiit kuvakulmat saat myös painikkeisiin: `plotter.view_xy()`, `plotter.view_xz()` ja `plotter.view_yz()`.",
          "View lock vaihtaa hiiren ohjaustavan: `plotter.enable_2d_style()` sallii siirron ja zoomin mutta ei kiertoa. `plotter.enable_trackball_style()` palauttaa kierron."
        ],
        code: "VIIKON TARKISTUSLISTA\n[ ] inflate ensin, kamera sitten\n[ ] sivujen määrä rajattu 3–8 (testi 12)\n[ ] suljettu polku sulkeutuu (testi 13)\n[ ] orientaatiowidgetin akseli kääntää kameran suoraan akselin suuntaan\n[ ] view lock estää kierron (testi 14) ja näkyy painikkeessa tekstinä",
        test: "Paina view lock päälle. Yritä kiertää näkymää hiirellä. Näkymän ei pidä kääntyä.",
        links: [
          ["PyVista: tube", "https://docs.pyvista.org/api/core/_autosummary/pyvista.PolyDataFilters.tube.html"],
          ["PyVista: add_camera_orientation_widget", "https://docs.pyvista.org/api/plotting/_autosummary/pyvista.Plotter.add_camera_orientation_widget.html"]
        ]
      },
      sykli: true
    },
    47: {
      type: "feature",
      feature: "Osan voi valita. Sen voi siirtää, kiertää ja skaalata transformipaneelin numerokentillä ja näppäimistöllä. Lapset seuraavat vanhempaa.",
      excerpt: "Osia pitää voida valita, siirtää, kiertää ja skaalata.",
      connection: "Nyt muodot ovat valmiit ja kamera pysyy paikallaan view lockilla. Seuraavaksi osia muokataan. Viikon 44 maailmamuunnos hoitaa sen, että lapset seuraavat vanhempaa.",
      deliverable: "Pakollisen ytimen tilanne käsitelty palaverissa · testi 15 · valinta, siirto, kierto ja skaalaus transformipaneelissa · viikon release.",
      why: "Ilman transformeja mallin osat jäävät siihen, mihin tuonti ne toi. Transformi tarkoittaa siirtoa, kiertoa ja skaalausta.",
      done: "Osan voi valita suunnitelmasi mukaan. Siirto, kierto ja skaalaus toimivat numerokentillä ja pikanäppäimillä. Testi 15 menee läpi, tai siitä on havaintoissue.",
      record: "Pakollisen ytimen tilanne ja palaverin päätös, testin 15 tulos, viikon funktio selityspohjalla ja näyttömatriisin vaatimukset: toiminnot suunnitelmasta ja toimintalogiikka.",
      skills: ["Toiminnot suunnitelman mukaan", "Solmupuun käyttö", "Havaintojen kirjaus"],
      termit: ["transformi", "transformipaneeli"],
      steps: [
        ["Tuo pakollisen ytimen tilanne palaveriin.", "Palaverissa katsotaan, onko pakollinen ydin aikataulussa. Jos ei ole, ohjaaja päättää, mikä katselmoidaan keskeneräisenä ja mikä tehdään viikolla 4. Jos kamera siirtyi tälle viikolle, tee se ensin."],
        ["Kirjoita testi 15.", "Testi 15: lapsi seuraa. Vanhempaa siirretään 10 yksikköä x-suunnassa. Mihin odotat lapsen siirtyvän? Kirjaa odotus ennen koodia. Testi käyttää viikon 44 maailmamuunnosta."],
        ["Tee transformipaneeli työsyklillä.", "Transformipaneelissa on numerokentät siirrolle, kierrolle ja skaalaukselle. Lisää pikanäppäimet suunnitelmasi mukaan. Käytä view lockia, kun siirrät osia."],
        ["Aja testi 15.", "Jos testi 15 ei mene läpi kahdella yrityksellä, avaa havaintoissue."],
        ["Julkaise viikon versio.", "Tee tagi <code>v0.0.47</code> ja pushaa se. Kun Actions-ajo on vihreä, viikon versio on releasessa."]
      ],
      example: "Testin 15 kirjaus issuessa: \"Testi 15: vanhempi x +10. Odotin, että lapsen maailmakoordinaatti x muuttuu saman verran. Havaittu: muuttui saman verran. Läpi.\"",
      notEnough: "\"Lapset seuraavat, testattu.\" Kirjauksesta ei näe syötettä, odotusta eikä havaintoa.",
      help: {
        title: "Transformipaneeli ja lapset",
        tree: "Solmu \"Vartalo\"      ← transformipaneeli muuttaa tämän omaa muunnosta\n  └─ Solmu \"Pää\"        maailmamuunnos = Vartalon maailma @ Pään oma\n       └─ Solmu \"Korvat\"",
        actions: [
          "Tee paneeliin numerokentät Qt:n `QDoubleSpinBox`-elementeillä: siirto X, Y ja Z, kierto ja skaalaus. Anna jokaiselle kentälle nimi `QLabel`illa.",
          "Kun kentän arvo muuttuu, päivitä valitun solmun oma muunnos. Laske sitten koko puun maailmamuunnokset uudelleen. Aseta ne PyVistan kappaleille: `aktori.user_matrix = maailma`.",
          "Lapsi ei liiku mukana itsestään, koska PyVistan kappaleet eivät ole sisäkkäin. Siksi lapsen paikka lasketaan viikon 44 maailmamuunnoksella. Myös testi 15 käyttää sitä.",
          "Pikanäppäin: `QShortcut(QKeySequence(\"Ctrl+Right\"), self)`. Kirjaa pikanäppäimet README:hen.",
          "Raahattavat kahvat 3D-näkymässä kuuluvat tärkeään jatkoon (viikko 5)."
        ],
        code: "TRANSFORMIEN TARKISTUSLISTA\n[ ] valinta toimii suunnitelman mukaan\n[ ] siirto, kierto ja skaalaus numerokentillä ja näppäimistöllä\n[ ] lapset seuraavat vanhempaa (testi 15)\n[ ] maailmamuunnos lasketaan yhdessä funktiossa\n[ ] kentillä on nimi, ja ne toimivat näppäimistöllä",
        test: "Siirrä vartaloa. Pään ja korvien pitää liikkua mukana. Siirrä sitten päätä. Vartalon ei pidä liikkua.",
        links: [
          ["Qt for Python: QDoubleSpinBox", "https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QDoubleSpinBox.html"]
        ]
      },
      sykli: true
    },
    48: {
      type: "feature",
      feature: "Pivot on oletuksena kappaleen keskipisteessä. Sen voi asettaa transformipaneelissa prosentteina X, Y ja Z.",
      connection: "Viikolla 47 osat kiersivät ja skaalautuivat keskipisteensä ympäri. Nyt käyttäjä valitsee pisteen itse. Pivot on piste, jonka ympäri kappale kiertää ja skaalautuu.",
      deliverable: "Pivotin syötteen tarkistuksen rajapinta · testit 16–18 · pivot · pivotin prosenttikentät transformipaneelissa · viikon release.",
      why: "Ilman pivotia korva kiertyy oman keskipisteensä ympäri eikä kiinnityskohdan ympäri. Prosenttisyöttö on tarkempi kuin hiirellä vetäminen.",
      done: "Pivot 50/50/50 on keskipisteessä, prosentit muuttavat pivotin paikkaa, virheellinen syöte käsitellään kriteerisi mukaan, ja testit 16–18 menevät läpi.",
      record: "Pivotin syötteen tarkistus selityspohjalla (tämä on viikon funktio), testit 16–18 ja näyttömatriisin vaatimukset: rakenteinen ohjelmointi, käyttöliittymä ja toimintalogiikka.",
      skills: ["Valinta: syötteen tarkistus", "Toimintalogiikka: pivotin laskenta", "Käyttöliittymä vaatimuksen mukaan"],
      termit: ["pivot"],
      steps: [
        ["Kirjoita rajapinta.", "Pivotin syötteen tarkistus: nimi, syöte (prosentti) ja paluuarvo. Kirjaa korttiin."],
        ["Kirjoita testit 16–18.", "Testi 16: pivot keskellä, 50/50/50. Testi 17: pivot reunoilla, 0 % ja 100 %. Testi 18: väärä pivot-syöte, −10, 150 ja teksti. Kirjaa, mitä odotat. Testin 18 odotus on oma kriteerisi: hylätäänkö arvo vai rajataanko se."],
        ["Tee pivot ja tarkistus työsyklillä.", "Tee ensin syötteen tarkistus puhtaana funktiona. Tee sitten pivotin siirto."],
        ["Lisää pivot transformipaneeliin.", "Lisää paneeliin kolme kenttää, joissa pivot syötetään prosentteina: X, Y ja Z. Kentillä on nimi, ja ne toimivat näppäimistöllä käyttöliittymävaatimuksesi mukaan."],
        ["Julkaise viikon versio.", "Tee tagi <code>v0.0.48</code> ja pushaa se. Kun Actions-ajo on vihreä, viikon versio on releasessa."]
      ],
      example: "Selityspohja: \"Saa prosentin. Palauttaa luvun 0–100 tai virheen. Valitsee: jos syöte ei ole luku, palauttaa virheen. Jos luku on alle 0, palauttaa 0. Toistaa: ei toistoa. Testi 18 tarkistaa virheelliset syötteet.\"",
      notEnough: "\"Funktio tarkistaa syötteen.\" Selityksestä ei näe, mitä tapahtuu arvolle −10 tai tekstille.",
      help: {
        title: "Pivot prosentteina",
        tree: "rajat = kappale.bounds                  trimesh: rivit min ja max\npivot = min + (max − min) × prosentti / 100\n50/50/50 → keskipiste · 0/0/0 → min-kulma · 100/100/100 → max-kulma",
        actions: [
          "Laske osan rajat: trimesh-kappaleen `kappale.bounds` antaa kaksi riviä, min ja max.",
          "Laske pivot kaikille akseleille kerralla numpylla: `pivot = min + (max - min) * prosentit / 100`.",
          "Kierto pivotin ympäri: siirrä pivot origoon, kierrä ja siirrä takaisin. Matriiseina: `siirto(pivot) @ kierto @ siirto(-pivot)`. Tämä kuuluu osan omaan muunnokseen.",
          "Käytä kentissä `QDoubleSpinBox`- ja `QLabel`-elementtejä. Kytke nimi kenttään: `label.setBuddy(kentta)`. Näin ruudunlukija lukee kentän nimen."
        ],
        code: "PIVOTIN TARKISTUSLISTA\n[ ] rajapinta korttiin ennen toteutusta\n[ ] tarkistus on puhdas funktio\n[ ] 50/50/50 on keskipiste (testi 16)\n[ ] 0 ja 100 ovat reunat (testi 17)\n[ ] virheellinen syöte kriteerin mukaan (testi 18)\n[ ] kentillä on nimi",
        test: "Aseta korvalle pivot 50/0/50. Kierrä korvaa. Sen pitää kiertyä alareunansa ympäri.",
        links: [
          ["trimesh: Trimesh.bounds", "https://trimesh.org/trimesh.base.html"]
        ]
      },
      sykli: true
    },
    49: {
      type: "feature",
      feature: "Malli tallentuu .obj-tiedostoksi, jossa jokainen osa on oma objektinsa. Tiedosto aukeaa Blenderissä.",
      excerpt: "Valmis malli viedään .obj-tiedostoksi niin, että jokainen osa on oma objektinsa.",
      connection: "Mallin osat ovat puussa, ja niillä on nimet. Nyt ne viedään tiedostoon. OBJ on 3D-tiedostomuoto, jossa jokainen osa alkaa rivillä, jonka alussa on o-kirjain. Viikolla on myös ensimmäinen virheenkorjausketju.",
      deliverable: "Objektijaon rajapinta · testit 19–20 · .obj-vienti · tarkistus VS Codessa ja Blenderissä · virheenkorjausketju 1 ja sen regressiotesti · viikon release.",
      why: "Ilman vientiä malli jää sovellukseen. Asiakas haluaa jatkaa mallia toisessa ohjelmassa.",
      done: "Kolmen osan mallista syntyy .obj-tiedosto, jossa on kolme o-riviä osien nimillä. Tiedosto aukeaa Blenderissä. Testit 19–20 menevät läpi. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa.",
      record: "Objektijako selityspohjalla (tämä on viikon funktio), virheenkorjausketju 1 ja näyttömatriisin vaatimukset: virheiden korjaus, tiedon käsittely ja kirjaston toiminnot.",
      skills: ["Tiedon käsittely: malli tiedostoksi", "Toisto: osat objekteiksi", "Virheen syy omin sanoin", "Regressiotesti"],
      termit: ["OBJ", "virheenkorjausketju", "regressiotesti", "vikatehtävä"],
      steps: [
        ["Kirjoita rajapinta ja testit.", "Kirjoita objektijaon rajapinta korttiin. Testi 19: kolmen osan vienti. Testi 20: tyhjä vienti, kun mallissa ei ole osia. Kirjaa, mitä odotat."],
        ["Tee vienti työsyklillä.", "Osien nimien pitää säilyä tiedostossa."],
        ["Tarkista tiedosto kahdella tavalla.", "Avaa .obj VS Codessa. Laske rivit, jotka alkavat o-kirjaimella. Avaa tiedosto sitten Blenderissä kuvaohjeen mukaan."],
        ["Kirjoita virheenkorjausketju 1.", "Valitse yksi havaintoissue. Kirjaa siihen kuusi osaa: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti."],
        ["Kirjoita regressiotesti.", "Regressiotesti on testi, joka toistaa korjatun virheen ja jää testeihin. Kirjoita se Täydennys-kaistalla kuten kohdassa 3a. Nimeä se issuen mukaan, esimerkiksi regressiotesti #12."],
        ["Pyydä vikatehtävä, jos havaintoissueita ei ole.", "Kerro siitä palaverissa. Ohjaaja antaa vikatehtävän. Vikatehtävä on tarkoituksellinen virhe, josta ketju tehdään."],
        ["Julkaise viikon versio.", "Tee tagi <code>v0.0.49</code> ja pushaa se. Kun Actions-ajo on vihreä, viikon versio on releasessa."]
      ],
      example: "Syy omin sanoin: \"Pivot laskettiin maailmakoordinaateissa, vaikka lapsen oma muunnos on vanhemman koordinaatistossa. Siksi lapsi hyppäsi.\"",
      notEnough: "\"Syy: koodissa oli bugi.\" Kirjauksesta ei näe, mikä meni väärin eikä miksi.",
      kuvaohjeet: ["blender-obj"],
      pohjat: [
        { otsikko: "Virheenkorjausketju havaintoissueen", teksti: "## Virheenkorjausketju\n1. Havainto: \n2. Toistamisohje: \n3. Syy omin sanoin: \n4. Korjauscommit: \n5. Uusintatesti: \n6. Regressiotesti: regressiotesti #(tämän issuen numero)" }
      ],
      help: {
        title: "OBJ-vienti trimeshillä ja osien nimet",
        tree: "o Vartalo\nv …  f …\no Pää\nv …  f …\no Korvat\nv …  f …",
        actions: [
          "Tee vientiä varten `trimesh.Scene()`. Lisää jokainen osa omana geometrianaan: `scene.add_geometry(kappale, geom_name=nimi, node_name=nimi)`.",
          "Käytä kappaleena kopiota, joka on siirretty osan maailmamuunnoksella: `kappale.copy().apply_transform(maailma)`. Näin osat ovat tiedostossa samoilla paikoilla kuin näkymässä.",
          "Vie tiedosto: `scene.export(polku)`. Tiedostopääte `.obj` valitsee muodon. Jokainen geometria saa oman o-rivin.",
          "Kysy tallennuspaikka Qt:n tiedostoikkunalla: `QFileDialog.getSaveFileName(self, \"Vie OBJ\", \"malli.obj\", \"OBJ (*.obj)\")`.",
          "trimesh ei vie tyhjää mallia, vaan antaa virheen `ValueError`. Päätä testissä 20, mitä käyttäjä silloin näkee."
        ],
        code: "VIENNIN TARKISTUSLISTA\n[ ] rajapinta korttiin ennen toteutusta\n[ ] o-rivejä on yhtä monta kuin osia (testi 19)\n[ ] tyhjä malli käsitelty (testi 20)\n[ ] nimet ovat samat kuin hierarkiapaneelissa\n[ ] tiedosto aukeaa Blenderissä",
        test: "Vie kolmen osan malli. Avaa tiedosto VS Codessa ja hae tekstiä \"o \". Osumia pitää olla kolme.",
        links: [
          ["trimesh: Scene.export", "https://trimesh.org/trimesh.scene.scene.html"]
        ]
      },
      sykli: true
    },
    50: {
      type: "feature",
      feature: "Projektin voi tallentaa JSON-tiedostoksi ja avata samassa tilassa. MVP on julkaistu versiona v0.1.",
      excerpt: "Keskeneräinen työ pitää voida tallentaa ja avata myöhemmin samassa tilassa.",
      connection: "Tämä on pakollisen ytimen viimeinen kohta. JSON on tekstimuoto, jolla projektin tiedot tallennetaan tiedostoon. Viikon lopussa MVP julkaistaan katselmointia varten.",
      deliverable: "Tallennustapojen vertailu suunnitelmassa · testit 21–22 · tallennus ja avaus · tietoturva-arvio · release v0.1.",
      why: "Ilman tallennusta keskeneräinen malli katoaa, kun sovellus suljetaan. Ilman julkaisua asiakkaat eivät voi kokeilla MVP:tä viikolla 51.",
      done: "Tallennettu projekti avautuu samassa tilassa, rikottu tiedosto antaa virheilmoituksen, `project-docs/tietoturva.md` on repositoryssa, ja releasen v0.1 zipistä purettu sovellus käynnistyy.",
      record: "Tallennustavan valinta perusteluineen, oman mallisi JSON-koko, tietoturva-arvion tärkein uhka ja näyttömatriisin vaatimukset: tietovaraston valinta, yhteys tietovarastoon, tietoturva ja julkaisu tuotantoon.",
      skills: ["Tietovaraston valinta", "Yhteys tietovarastoon", "Tietoturvan arviointi", "Julkaisu ja versiointi"],
      termit: ["JSON", "tietoturva-arvio"],
      steps: [
        ["Vertaa tallennustapoja.", "Käytä oman suunnitelmasi kriteerejä. Säilyvätkö polut, parametrit, transformit ja vanhempi–lapsi-suhteet? Vertaa ainakin JSON-tiedostoa ja Qt:n asetustallennusta <code>QSettings</code>. Kirjaa oman mallisi JSON-tiedoston koko."],
        ["Kirjoita testit 21–22.", "Testi 21: tallennus ja avaus. Tallennat mallin ja avaat sen. Testi 22: rikottu tallennus. Avaat rikotun JSON-tiedoston. Kirjaa, mitä odotat."],
        ["Tee tallennus ja avaus työsyklillä.", "Tallenna tiedostoon versionumero. Silloin vanhan tiedoston tunnistaa myöhemmin."],
        ["Kirjoita tietoturva-arvio.", "Tee taulukko: uhka, testi, tulos ja toimenpide. Käy läpi ainakin haitallinen SVG (testi 4) ja rikottu tallennus (testi 22). Tallenna arvio tiedostoon <code>project-docs/tietoturva.md</code>."],
        ["Julkaise MVP.", "Tee tagi <code>v0.1</code> ja pushaa se. Kun Actions-ajo on vihreä, lataa zip releasesta. Pura se ja käynnistä sovellus puretusta kansiosta."]
      ],
      example: "Vertailun rivi: \"JSON-tiedosto: säilyttää polut, parametrit ja suhteet, siirtyy koneelta toiselle. Oma malli 14 kt.\"",
      notEnough: "\"JSON, koska se on yleinen.\" Perustelu ei liity omaan malliin eikä omiin kriteereihin.",
      help: {
        title: "Tallennus ja avaus",
        tree: "{\n  \"versio\": 1,\n  \"osat\": [ { \"nimi\": \"Vartalo\", \"polku\": \"…\", \"muoto\": \"revolve\", \"segmentit\": 12,\n              \"muunnos\": [[…], …], \"lapset\": [ … ] } ]\n}",
        actions: [
          "Tallenna oma data, älä trimesh- tai PyVista-olioita: `json.dumps(data, indent=2)`.",
          "Muunnokset ovat numpyn matriiseja. Tallenna ne listoina: `muunnos.tolist()`.",
          "Kysy tiedosto Qt:n tiedostoikkunalla kuten viikolla 43. Käytä avaukseen `getOpenFileName`. Käytä tallennukseen `getSaveFileName`.",
          "Lue JSON `try`–`except json.JSONDecodeError` -lohkossa. Rikottu tiedosto antaa silloin virheilmoituksen eikä kaada sovellusta (testi 22).",
          "Tarkista, että tiedostossa on `versio` ja `osat`, ennen kuin rakennat mallin."
        ],
        code: "TALLENNUKSEN TARKISTUSLISTA\n[ ] tallennetaan oma data, ei trimesh- tai PyVista-olioita\n[ ] versionumero tiedostossa\n[ ] avaus palauttaa saman tilan (testi 21)\n[ ] rikottu tiedosto → virheilmoitus (testi 22)\n[ ] tietoturva-arvio repositoryssa",
        test: "Tallenna malli. Sulje sovellus ja käynnistä se uudelleen. Avaa tiedosto. Mallin pitää näyttää samalta.",
        links: [
          ["Python: json", "https://docs.python.org/3/library/json.html"]
        ]
      },
      sykli: true
    },
    51: {
      type: "katselmointi",
      feature: "Asiakkaat ovat kokeilleet MVP:tä. Jokaisesta havainnosta on issue, jossa on asiakkaan antama prioriteetti.",
      excerpt: "Ennen joulua kokeilemme itse ensimmäistä toimivaa versiota ja kerromme, mitä muutetaan.",
      connection: "Viikolla 50 julkaisit MVP:n. Nyt asiakkaat kokeilevat sitä. Katselmointi tarkoittaa, että asiakas kokeilee versiota ja kertoo, mitä muutetaan. Viikolla on neljä työpäivää.",
      deliverable: "Viiden minuutin demo · katselmointiloki rooleilla · havainnot issueina prioriteetteineen · tilatiedoston Seuraavana-kohta viikolle 2.",
      why: "Ilman katselmointia jatkokehitys perustuu arvaukseen. Asiakkaiden prioriteetit ohjaavat, mitkä tärkeän jatkon toiminnot tehdään ensin.",
      done: "Katselmointiloki on tiedostossa `project-docs/katselmointi.md`, jokaisesta havainnosta on issue prioriteetteineen, ja tilatiedoston Seuraavana-kohdassa on viikon 2 ensimmäinen tehtävä issue-numeroineen.",
      record: "Asiakkaiden tärkein havainto tiivistettynä, oma tulkintasi erikseen ja näyttömatriisin vaatimukset: viestintä asiakkaalle, katselmointi, ratkaisujen arviointi ja tärkeysjärjestys.",
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
      feature: "Kaikki testit menevät läpi. Tärkeän jatkon järjestys on sovittu tuntiarvioineen. Yksi pieni korjaus katselmoinnista on GitHubissa.",
      connection: "Loma on ohi. Tilatiedosto kertoo, mihin jäit. Tällä viikolla ei tehdä uusia ominaisuuksia.",
      deliverable: "Testiajon tulos päiväkirjassa · tärkeän jatkon järjestys tuntiarvioineen issueissa · yksi pieni korjaus Täydennys-kaistalla.",
      why: "Loman jälkeen ympäristö voi olla rikki ja asiat unohtuneet. Kun kaikki testit menevät läpi, tiedät, että lähtötaso on kunnossa.",
      done: "`npm test` näyttää, että kaikki testit menevät läpi, tärkeän jatkon järjestys on sovittu palaverissa, ja korjauksen commit on GitHubissa.",
      record: "Testiajon tulos, tärkeän jatkon järjestys ja arviot, palaverin arvio MVP:n ratkaisuista ja näyttömatriisin vaatimukset: kehitysympäristö, tärkeysjärjestys, toteutuksen suunnittelu ja ratkaisujen arviointi.",
      skills: ["Kehitysympäristön käyttö", "Tärkeysjärjestys", "Työmäärän arviointi"],
      steps: [
        ["Käynnistä ympäristö.", "Aja <code>npm install</code>, <code>npm run dev</code> ja <code>npm test</code>. Kirjaa tulos päiväkirjaan."],
        ["Lue tilatiedosto.", "Avaa <code>PROJEKTIN-TILA.md</code>. Aloita uusi Copilot-keskustelu tilatiedostolla."],
        ["Ehdota tärkeän jatkon järjestys.", "Asiakkaat antoivat prioriteetit katselmoinnissa. Ehdota järjestys. Arvioi jokaiselle toiminnolle tunnit."],
        ["Arvioi MVP palaverissa.", "Käy palaverissa läpi, mikä MVP:n ratkaisu kestää tärkeän jatkon toiminnot ja mikä ei. Ohjaaja on tässä tiimin jäsenen roolissa. Sovi järjestys."],
        ["Tee pieni korjaus Täydennys-kaistalla.", "Valitse katselmoinnin havaintoissueista pieni korjaus. Tee se työsyklillä."],
        ["Tarkista krediitit.", "Budjetti nollautui 1.1. Kirjaa tammikuun lähtötilanne päiväkirjaan."]
      ],
      example: "Tärkeän jatkon järjestys: \"1. Päivitä SVG, 6 h (asiakkaan prioriteetti 1). 2. Kulmasnappaus, 3 h. 3. Pieni esikatseluikkuna, 8 h.\"",
      notEnough: "\"Jatko: päivitys, snappaus ja esikatselu.\" Järjestyksestä puuttuvat arviot ja asiakkaan prioriteetti.",
      sykli: true
    },
    3: {
      type: "feature",
      feature: "Päivitä SVG -toiminto rakentaa mallin uudelleen muokatusta tiedostosta. Osien transformit säilyvät.",
      excerpt: "Kun piirrosta muokataan Inkscapessa, mallin pitää päivittyä ilman, että kaikki tehdään alusta.",
      connection: "Asiakkaat pitävät tätä tärkeän jatkon toimintoa tärkeimpänä. Tällä viikolla työ tehdään ensimmäisen kerran omassa haarassa ja liitetään päähaaraan pull requestilla.",
      deliverable: "Sovittu tunnistustapa · testi 23 · toiminto omassa haarassa · pull request ja merge.",
      why: "Ilman päivitystä jokainen Inkscape-muutos pakottaa tekemään transformit uudelleen. Silloin vektoripohjaisuus menettää hyötynsä.",
      done: "Muokattu SVG päivittyy malliin, transformit säilyvät, kaikki testit menevät läpi, ja pull request on yhdistetty päähaaraan.",
      record: "Tunnistustapa ja sen perustelu, pull requestin linkki, viikon funktio selityspohjalla ja näyttömatriisin vaatimukset: osan liittäminen versioon, toimintalogiikka ja ratkaisut yhdessä.",
      skills: ["Ohjelman osan liittäminen versioon", "Toimintalogiikka: osien tunnistus", "Ongelmanratkaisu yhdessä"],
      termit: ["haara", "pull request", "merge"],
      steps: [
        ["Sovi tunnistustapa.", "Sovi palaverissa, miten osa tunnistetaan uudesta tiedostosta: nimellä vai tunnisteella. Kirjaa päätös suunnitelmaan."],
        ["Kirjoita testi 23.", "Testi 23: Päivitä SVG. Muokkaa testitiedostoa Inkscapessa ja päivitä malli Päivitä SVG -toiminnolla. Mitä odotat transformeille? Kirjaa odotus ennen koodia."],
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
      feature: "Jos pakollisesta ytimestä on rästejä, ne ovat valmiit. Muuten seuraava sovittu tärkeän jatkon toiminto toimii.",
      connection: "Tämä on joustoviikko. Ensin tehdään pakollisen ytimen rästit, jos viikon 47 palaverissa niin sovittiin. Sitten jatketaan tärkeän jatkon järjestyksessä.",
      deliverable: "Pakollisen ytimen rästit omassa haarassa tai seuraava tärkeän jatkon toiminto · testi 24 · virheenkorjausketju 2.",
      why: "Pakollinen ydin painaa arvioinnissa enemmän kuin tärkeä jatko. Rästit tehdään ensin, jotta MVP on kokonainen.",
      done: "Pakollisen ytimen rästit on liitetty päähaaraan pull requestilla, tai tärkeän jatkon toiminto toimii ja testi 24 menee läpi. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa.",
      record: "Mitä tehtiin ja miksi juuri se, testin 24 tulos, virheenkorjausketju 2 ja näyttömatriisin vaatimukset: virheiden korjaus ja toimintalogiikka.",
      skills: ["Priorisointi", "Toimintalogiikka", "Virheenkorjaus"],
      steps: [
        ["Tarkista rästit.", "Katso palaverissa, jäikö pakollisesta ytimestä jotain kesken. Jos jäi, tee se ensin omassa haarassa. Liitä se päähaaraan pull requestilla."],
        ["Valitse tärkeän jatkon toiminto.", "Jos rästejä ei ole, ota järjestyksen seuraava toiminto."],
        ["Kirjoita testi 24.", "Testi 24: seuraava toiminto. Kirjoita toiminnon testi ennen toteutusta. Esimerkiksi kulmasnappauksessa: mitä odotat, kun kulma on 22° ja kun se on 23°?"],
        ["Tee toiminto työsyklillä.", "Käytä haaraa, jos muutos koskee useaa tiedostoa."],
        ["Kirjoita virheenkorjausketju 2.", "Valitse havaintoissue ja kirjaa kuusi osaa kuten viikolla 49. Kirjoita regressiotesti Täydennys-kaistalla."]
      ],
      example: "Päiväkirja: \"Tein ensin pakollisen ytimen rästin: kamera ei kääntynyt ylänäkymään. Sovittu palaverissa 12.1. Sitten kulmasnappaus.\"",
      notEnough: "\"Tein jatkojuttuja.\" Merkinnästä ei näe, mikä tehtiin eikä miksi juuri se.",
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
      deliverable: "Lighthouse-perusmittaus · testit 25–26 · isot kahvat ja näppäimistökäyttö · Lighthouse-jälkimittaus.",
      why: "Saavutettavuus on asiakkaan vaatimus. Ilman mittausta et voi näyttää, mikä parani.",
      done: "Lighthousen tulokset ennen ja jälkeen on kirjattu, mikään kohta ei heikentynyt, testit 25–26 menevät läpi, ja löydetyt puutteet on korjattu tai kirjattu issueiksi.",
      record: "Lighthousen tulokset ennen ja jälkeen, testit 25–26 ja näyttömatriisin vaatimukset: käyttöliittymä ja testaus.",
      skills: ["Käyttöliittymä vaatimuksen mukaan", "Saavutettavuuden testaus", "Mittaaminen ennen ja jälkeen"],
      termit: ["kahva", "Lighthouse"],
      steps: [
        ["Aja Lighthouse ensin.", "Avaa sovellus Chromessa. Avaa kehittäjätyökalut ja Lighthouse. Aja saavutettavuusmittaus. Kirjaa tulos."],
        ["Tarkista vaatimus.", "Lue käyttöliittymävaatimuksesi suunnitelmasta. Mitä vielä puuttuu?"],
        ["Kirjoita testit 25–26.", "Testi 25: näppäimistö. Käytä kaikkia painikkeita näppäimistöllä. Testi 26: painikkeiden nimet. Testaa ruudunlukijalla, onko jokaisella painikkeella nimi. Kirjaa, mitä odotat."],
        ["Tee kahvat ja näppäimistö työsyklillä.", "Tee transformikahvoista isot. Tarkista, että Tab-järjestys on looginen."],
        ["Mittaa uudelleen.", "Aja testit 25–26 ja Lighthouse uudelleen. Vertaa tuloksia. Kirjaa, mikä parani ja mikä jäi."]
      ],
      example: "Kirjaus: \"Lighthouse ennen 86, jälkeen 97. Korjattu: kahdelta painikkeelta puuttui nimi. Jäi: view lockin tila ei vaihdu ruudunlukijalle, issue #31.\"",
      notEnough: "\"Saavutettavuus parani.\" Kirjauksesta puuttuvat luvut ja se, mikä muuttui.",
      kuvaohjeet: ["chrome-lighthouse"],
      sykli: true
    },
    6: {
      type: "julkaisu",
      feature: "Julkaisuehdokas v1.0-rc1 on jäädytetty. Toinen opiskelija on kulkenut README:n avulla koko polun Inkscape-piirroksesta .obj-tiedostoon.",
      excerpt: "Valmis tarkoittaa meille tätä: työkalun voi ladata GitHubista ja käynnistää Windows-koneella ilman Pythonia, oma piirroksemme muuttuu malliksi, .obj aukeaa toisessa ohjelmassa, ja mukana on ohje, jolla joku muu saa työkalun käyttöön kysymättä meiltä.",
      connection: "Julkaisuehdokas (RC) on versio, jossa sisältö on jäädytetty. Sisältöjäädytys tarkoittaa, että uusia ominaisuuksia ei enää lisätä. Tällä viikolla testataan, saako joku muu työkalun käyttöön pelkällä ohjeella.",
      deliverable: "Tagi v1.0-rc1 · README ja käyttöohje · julkaisutestin epäröintilista.",
      why: "Jos ohje toimii vain sinulle, asiakas ei saa työkalua käyttöön. Jokainen epäröinti on ohjeen korjauslista.",
      done: "Julkaisutestaajan .obj-tiedosto aukeaa, ja epäröinnit on listattu pöytäkirjaan. Testaajan nimi ja sanatarkat lausumat on lähetetty ohjaajalle Teamsissa. Repositoryyn on kirjattu vain rooli.",
      record: "Julkaisutestin tärkein epäröintikohta roolilla kirjattuna, ohjeeseen tehty korjaus ja näyttömatriisin vaatimukset: dokumentointi, viestintä asiakkaalle ja julkaisu tuotantoon.",
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
      excerpt: "Valmis tarkoittaa meille tätä: työkalun voi ladata GitHubista ja käynnistää Windows-koneella ilman Pythonia, oma piirroksemme muuttuu malliksi, .obj aukeaa toisessa ohjelmassa, ja mukana on ohje, jolla joku muu saa työkalun käyttöön kysymättä meiltä.",
      connection: "Viikolla 6 löytyivät viimeiset esteet. Nyt ne korjataan, ja v1.0 julkaistaan. Samalla näyttöaineisto linkitetään valmiiksi.",
      deliverable: "Virheenkorjausketju 3 · tagi v1.0 ja release-teksti · asiakkaiden vahvistus · linkitetty näyttömatriisi.",
      why: "Julkaisu ilman korjauksia jättää asiakkaalle tunnetut viat. Ilman linkitystä arvioija ei löydä työnäytteitä.",
      done: "Estävät issuet on suljettu, tagi v1.0 näkyy GitHubissa, asiakkaat ovat vahvistaneet toimivuuden, ja jokaisella matriisin rivillä on linkki.",
      record: "Virheenkorjausketju 3, asiakkaiden vahvistus ja näyttömatriisin vaatimukset: virheiden korjaus, versionhallinta, julkaisu tuotantoon ja julkaisu asiakkaalle.",
      skills: ["Virheenkorjaus", "Julkaisu tuotantoon", "Näyttöaineiston kokoaminen"],
      termit: ["työnäyte", "näyttömatriisi"],
      steps: [
        ["Korjaa estävät havainnot.", "Korjaa viikon 6 estävät issuet työsyklillä."],
        ["Kirjoita virheenkorjausketju 3.", "Valitse yksi korjauksista. Kirjaa ketjun kuusi osaa kuten viikolla 49."],
        ["Julkaise v1.0.", "Tee tagi v1.0 ja release. Kirjoita release-tekstiin, mitä versiossa on."],
        ["Pyydä asiakkaiden vahvistus.", "Lähetä asiakkaille linkki viestipohjalla. Pyydä vahvistus, että työkalu toimii heidän koneellaan."],
        ["Linkitä näyttömatriisi.", "Työnäyte on yksi tuotos, joka osoittaa osaamisesi. Päiväkirjassa on jokaisen viikon kohdalla näyttömatriisin vaatimukset. Kopioi päiväkirjasta linkit näyttömatriisin oikeille riveille."]
      ],
      example: "Matriisin rivillä \"liittää ohjelman osan olemassa olevaan versioon\": pull request #24 (viikko 3), merge-commit a1b2c3d.",
      notEnough: "\"Tehty.\" Rivistä puuttuu linkki työnäytteeseen.",
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
      record: "Demon viisi osaa ja kesto, itsearvioinnin kolmen tilanteen päivät ja issue-numerot sekä näyttömatriisin vaatimus: oman toiminnan arviointi.",
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
    { termi: "MVP", nimi: "Minimum Viable Product", selite: "Pienin käytettävä versio. Tässä projektissa MVP on sama kuin pakollinen ydin ja valmistuu ennen joulua.", viikko: 40 },
    { termi: "pakollinen ydin", selite: "Toiminnot, joiden pitää valmistua ennen joulua. Ilman niitä tuotosta ei ole.", viikko: 40 },
    { termi: "tärkeä jatko", selite: "Toiminnot, jotka tehdään joululoman jälkeen, kun pakollinen ydin toimii.", viikko: 40 },
    { termi: "jatkolista", selite: "Toiminnot, jotka jäävät tämän näytön jälkeen tehtäviksi. Ne eivät ole hylättyjä.", viikko: 40 },
    { termi: "SVG", nimi: "vektorikuva", selite: "Kuvan tiedostomuoto, jossa kuva koostuu poluista. Inkscape tallentaa piirrokset SVG-tiedostoiksi.", viikko: 40 },
    { termi: "low-poly", selite: "3D-malli, jossa on vähän monikulmioita. Pinnat näkyvät tasaisina, kulmikkaina paloina.", viikko: 40 },
    { termi: "tulkki", nimi: "Python-tulkki", selite: "Ohjelma, joka ajaa Python-koodin. Komento `python` käynnistää tulkin. Tässä projektissa käytetään Python 3.13:a.", viikko: 40 },
    { termi: "pip", nimi: "Pythonin paketinhallinta", selite: "Työkalu, joka asentaa Python-kirjastoja. Se tulee Pythonin mukana. Kirjastot asennetaan komennolla `pip install` virtuaaliympäristöön.", viikko: 40 },
    { termi: "virtuaaliympäristö", nimi: ".venv", selite: "Projektin oma Python-kansio `.venv`. Projektin kirjastot asennetaan sinne, joten ne eivät sekoitu koneen muihin Python-projekteihin. Kun virtuaaliympäristö on päällä, terminaalin rivin alussa lukee (.venv). Se luodaan viikolla 41.", viikko: 40 },
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
    { termi: "kaista", nimi: "Tiedosto, Täydennys tai Agentti", selite: "Toteutustapa. Tiedosto-kaista: Copilot kirjoittaa koodin yksi tiedosto kerrallaan. Täydennys-kaista (viikolta 43): kommentti ja täydennys VS Codessa, myös testit. Agentti-kaista (viikolta 44): GitHub Copilotin agenttitila useaan tiedostoon.", viikko: 41 },
    { termi: "testi", nimi: "numeroitu testitapaus", selite: "Testillä on numero ja nimi, esimerkiksi testi 1: kiertokulma. Numero kertoo järjestyksen: testi 1 on ensimmäinen, testi 2 toinen. Odotettu tulos kirjataan, ennen kuin koodi tehdään. Lisätesti on ylimääräinen testi ilman numeroa.", viikko: 41 },
    { termi: "tekninen pohja", nimi: "PySide6, PyVista, trimesh ja pytest", selite: "Sovelluksen perusta. PySide6 (Qt) tekee ikkunan ja painikkeet. PyVista piirtää 3D-näkymän. trimesh tekee 3D-kappaleet ja .obj-tiedoston. pytest ajaa testit.", viikko: 41 },
    { termi: "requirements.txt", nimi: "kirjastolista", selite: "Tiedosto, jossa ovat projektin kirjastot versioineen. Kirjastot asennetaan komennolla `pip install -r requirements.txt`. Uusi kirjasto lisätään tänne vain ohjaajan luvalla.", viikko: 41 },
    { termi: "tagi", selite: "Nimetty versio Gitissä, esimerkiksi v0.0.41, v0.1 tai v1.0. Tagin push käynnistää julkaisun.", viikko: 41 },
    { termi: "GitHub Actions", selite: "GitHubin automaatio. Kun pushaat tagin, automaatio ajaa testit ja tekee Windows-version. Sitten se ajaa Windows-versiolle itsetestin ja lisää zipin releaseen.", viikko: 41 },
    { termi: "paketointi", selite: "Sovellus ja sen kirjastot kootaan kansioksi, joka toimii ilman Pythonia. Tässä projektissa paketoinnin tekee PyInstaller tiedoston `vektoripaja.spec` ohjeilla.", viikko: 41 },
    { termi: "itsetesti", selite: "Sovelluksen oma tarkistus: `Vektoripaja.exe --itsetesti`. Se lukee esimerkki-SVG:n ja tekee siitä 3D-kappaleet ja .obj-tiedoston. Ikkunaa ei avata. GitHub Actions ajaa sen jokaiselle julkaisulle.", viikko: 41 },
    { termi: "release", nimi: "julkaisusivu", selite: "GitHubin sivu, josta valmiin version voi ladata. Tässä projektissa releasessa on zip, jossa on Windows-versio.", viikko: 41 },
    { termi: "zip", nimi: "pakattu kansio", selite: "Yksi tiedosto, jonka sisällä on kansio. Pura zip ennen käyttöä: hiiren oikea painike ja Pura kaikki.", viikko: 41 },
    { termi: "main", nimi: "päähaara", selite: "Repositoryn päälinja. Julkaisu tehdään päähaarasta.", viikko: 41 },
    { termi: "kahden yrityksen sääntö", selite: "Kun sama asia epäonnistuu kahdesti, lopetetaan yrittäminen ja palataan Copilotille.", viikko: 41 },
    { termi: "täydennys", selite: "GitHub Copilotin harmaa koodiehdotus VS Codessa. Hyväksytään Tab-näppäimellä. Ei kuluta krediittejä.", viikko: 43 },
    { termi: "moduuli", selite: "Kansio tai tiedosto, jolla on yksi vastuu. Esimerkiksi tuonti on eri moduuli kuin vienti.", viikko: 43 },
    { termi: "havaintoissue", nimi: "label havainto", selite: "Issue, johon kirjataan virhe: mitä odotit, mitä tapahtui ja miten virheen saa toistettua. Suljetaan korjauscommitilla.", viikko: 43 },
    { termi: "layer", nimi: "Inkscapen taso", selite: "Inkscapen piirroksen taso. Layerin nimestä tulee mallin osan nimi.", viikko: 43 },
    { termi: "solmupuu", nimi: "vanhempi–lapsi-puu", selite: "Mallin rakenne, jossa jokainen osa on solmu. Solmulla on nimi, lapset ja oma muunnos. Kun vanhempi liikkuu, lapset liikkuvat mukana, koska lapsen paikka lasketaan vanhemman kautta.", viikko: 44 },
    { termi: "maailmamuunnos", selite: "Osan lopullinen paikka, kierto ja koko 3D-näkymässä. Lasketaan näin: vanhemman maailmamuunnos kertaa osan oma muunnos.", viikko: 44 },
    { termi: "hierarkiapaneeli", selite: "Sovelluksen paneeli, joka näyttää solmupuun osat sisennettyinä.", viikko: 44 },
    { termi: "puhdas funktio", selite: "Funktio, joka ei muuta mitään itsensä ulkopuolella. Sama syöte antaa aina saman tuloksen.", viikko: 44 },
    { termi: "rajapinta", selite: "Funktion nimi, syöte ja paluuarvo. Rajapinta kirjoitetaan korttiin ennen toteutusta.", viikko: 44 },
    { termi: "revolve", nimi: "pyörähdyskappale", selite: "Puoliprofiili pyörähtää akselin ympäri, ja siitä syntyy kappale, esimerkiksi maljakko.", viikko: 45 },
    { termi: "orbit", selite: "Näkymän kierto hiirellä mallin ympäri.", viikko: 45 },
    { termi: "kysymystila", nimi: "Ask", selite: "GitHub Copilotin tila, joka vastaa kysymyksiin mutta ei muuta tiedostoja.", viikko: 45 },
    { termi: "inflate", nimi: "polusta putki", selite: "Viivapolusta tulee putki, jossa on 3–8 sivua. Esimerkiksi johto tai sarvi.", viikko: 46 },
    { termi: "orientaatiowidget", nimi: "kameran suuntakuvio", selite: "Pieni akselikuvio näkymän kulmassa. Kun klikkaat sen akselia, kamera kääntyy katsomaan mallia suoraan akselin suunnasta.", viikko: 46 },
    { termi: "suora näkymä", selite: "Katsot mallia tasan yhden akselin suunnasta, kuin pöydän reunalta tai ylhäältä. Suunnitelmassasi tämä on osa Orthographic Plane Snapia.", viikko: 46 },
    { termi: "ortografinen näkymä", selite: "Näkymä, jossa kaukana olevat osat eivät pienene kuten valokuvassa. Tehdään tärkeässä jatkossa. Pakollisessa ytimessä kaukana olevat osat näyttävät pienemmiltä, ja se on oikein.", viikko: 46 },
    { termi: "view lock", selite: "Painike, joka estää kameran kiertymisen, kun teet tarkkaa työtä.", viikko: 46 },
    { termi: "transformi", selite: "Osan siirto, kierto ja skaalaus.", viikko: 47 },
    { termi: "transformipaneeli", selite: "Paneeli, jossa osan siirto, kierto, skaalaus ja pivot syötetään numerokenttiin X, Y ja Z. Toimii myös näppäimistöllä.", viikko: 47 },
    { termi: "pivot", selite: "Piste, jonka ympäri kappale kiertää ja skaalautuu. Oletuksena keskipisteessä.", viikko: 48 },
    { termi: "OBJ", nimi: ".obj-tiedosto", selite: "3D-tiedostomuoto. Jokainen osa alkaa rivillä, jonka alussa on o-kirjain.", viikko: 49 },
    { termi: "virheenkorjausketju", selite: "Havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Projektissa tehdään kolme ketjua.", viikko: 49 },
    { termi: "regressiotesti", selite: "Testi, joka toistaa korjatun virheen ja jää testeihin. Se varmistaa, ettei virhe palaa.", viikko: 49 },
    { termi: "vikatehtävä", selite: "Ohjaajan tekemä tarkoituksellinen virhe. Siitä tehdään virheenkorjausketju, jos aitoa havaintoa ei ole.", viikko: 49 },
    { termi: "JSON", nimi: "tallennusmuoto", selite: "Tekstimuotoinen tiedosto, johon projektin tiedot tallennetaan ja josta ne avataan uudelleen.", viikko: 50 },
    { termi: "tietoturva-arvio", selite: "Taulukko: uhka, testi, tulos ja toimenpide. Tässä projektissa uhkia ovat esimerkiksi haitallinen SVG ja rikottu JSON.", viikko: 50 },
    { termi: "katselmointi", selite: "Asiakas kokeilee versiota ja kertoo, mitä muutetaan. Asiakkaan sanat kirjataan erillään omasta tulkinnasta.", viikko: 51 },
    { termi: "haara", selite: "Oma työlinja. Muutokset eivät vaikuta päähaaraan, ennen kuin haara liitetään.", viikko: 3 },
    { termi: "pull request", nimi: "muutospyyntö", selite: "Muutospyyntö, jolla haara liitetään päähaaraan. Luet muutokset ennen liittämistä.", viikko: 3 },
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
      evidence: "Issue #12, commit, testi 5 ja näyttömatriisin vaatimus, esimerkiksi versionhallinta.",
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
      "Windowsilla toimiva työpöytäsovellus, joka avaa Inkscapessa piirretyn SVG-tiedoston ja tekee",
      "siitä low-poly-mallin. Layerit ja ryhmät muuttuvat mallin osiksi, puoliprofiilista",
      "syntyy pyörähdyskappale ja viivasta putki. Malli viedään .obj-tiedostoksi niin, että",
      "jokainen osa on oma objektinsa.",
      "",
      "## 2 · Asiakas ja käyttäjät (esitäytetty)",
      "",
      "Asiakkaat ovat Matti Seise ja Antti Honkasalo. Käyttäjät ovat opiskelijoita, jotka",
      "piirtävät sujuvasti Inkscapessa mutta jäävät jumiin perinteisissä 3D-ohjelmissa.",
      "",
      "## 3 · Pakollinen ydin, tärkeä jatko ja jatkolista (esitäytetty)",
      "",
      "**Pakollinen ydin (ennen joulua):** SVG-tuonti · layerit ja ryhmät osiksi (solmupuu) ·",
      "pyörähdyskappale eli revolve 3–32 segmenttiä · putki eli inflate 3–8 sivua ·",
      "valinta, siirto, kierto ja skaalaus, lapset seuraavat, pivot keskipisteessä ja",
      "prosentteina · kierto hiirellä eli orbit, suorat näkymät orientaatiowidgetistä ja",
      "view lock -painike · .obj-vienti osat erillisinä · tallennus ja avaus JSON-tiedostona.",
      "",
      "**Tärkeä jatko (loman jälkeen):** Päivitä SVG · kierto tasakulmiin (kulmasnappaus) · pieni",
      "esikatseluikkuna · kierto lapselle ja sen alaosille · oma teema ja isot",
      "kahvat · ortografinen näkymä · view lockin pikanäppäin.",
      "",
      "**Jatkolista (näytön jälkeen):** Bézier-kynä ja polkujen muokkaus sovelluksessa ·",
      "Boolean-toiminnot · platoniset kappaleet · medial axis -inflaatio · UV-sidonta ·",
      "hierarkiaa ymmärtävä raycasting ja törmäyssäännöt.",
      "",
      "### MVP omin sanoin (viikko 40)",
      "",
      arvo("mvp"),
      "",
      "## 4 · Tekninen ehdotus (esitäytetty, päätös on sinun viikolla 41)",
      "",
      "Työpöytäsovellus Python 3.13:lla ja PySide6:lla (Qt), 3D-näkymä PyVistalla (pyvistaqt),",
      "geometria ja .obj trimeshillä, SVG:n luku svgelementsillä ja testit pytestillä.",
      "Julkaisu: GitHub Actions tekee tagista Windows-version PyInstallerilla, ajaa sille",
      "itsetestin ja lisää zipin GitHubin releaseen. Pakollinen ydin rakentuu valmiista osista.",
      "svgelements lukee SVG:n. trimesh tekee revolven ja .obj-viennin. PyVistan",
      "tube-suodatin tekee inflaten. PyVistan kamera ja orientaatiowidget näyttävät",
      "suorat näkymät. Transformit tehdään Qt:n numerokentillä ja pikanäppäimillä.",
      "Vanhempi–lapsi-muunnokset lasketaan omalla puhtaalla funktiolla. Testit",
      "kohdistuvat puhtaisiin funktioihin.",
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
      `- **Profiili akselin väärällä puolella, testin 11 kriteeri (viikko 45):** ${arvo("akseli")}`,
      `- **Tallennustapa omilla kriteereillä ja JSON-koko (viikko 50):** ${arvo("tallennus")}`,
      `- **Tärkeän jatkon järjestys ja tuntiarviot (viikko 2):** ${arvo("p1Jarjestys")}`,
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
      onTäytetty("p0Myohastyminen") ? `- **Pakollisen ytimen myöhästymisen ratkaisu:** ${arvo("p0Myohastyminen")}` : "- **Pakollisen ytimen myöhästymisen ratkaisu:** päätetään viikon 47 palaverissa, jos pakollinen ydin ei ole aikataulussa",
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
    kansiKuvaus: "Low-poly 3D-mallinnin Windows-työpöytäsovelluksena (Python): Inkscapen SVG → 3D-malli → .obj. Tekoälyavusteinen työtapa: Copilot suunnittelee, GitHub Copilot toteuttaa.",
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
        "Näyttö suoritetaan ohjattuna oppilaitosprojektina. Opiskelija toteuttaa low-poly 3D-mallintimen Windows-työpöytäsovelluksena, joka tekee Inkscapen SVG-piirroksesta 3D-mallin (revolve ja inflate), muuntaa layerit ja ryhmät vanhempi–lapsi-puuksi, tukee transformeja ja pivotia, näyttää mallin suorista näkymistä ja vie mallin .obj-tiedostoksi osat erillisinä. Toimeksiantajat ovat Matti Seise ja Antti Honkasalo. Matti Seise on myös ohjaaja.",
        "Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 10 vaatimusta tässä näytössä), Ohjelmistokehittäjänä toimiminen (45 osp, 14 vaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 vaatimusta). Yhteensä 31 osaamisvaatimusta. Ohjelmoinnin vaatimus \"kirjoittaa ylläpidettävää ohjelmakoodia\" (p5) osoitetaan muulla tavalla ohjaajan päätöksellä 23.9.2026, koska koodin kirjoittaa tässä työtavassa pääosin tekoäly.",
        "Tekninen ympäristö: Python 3.13, PySide6 (Qt), PyVista ja pyvistaqt (VTK), trimesh ja numpy, svgelements, testit pytestillä. Julkaisu: GitHub Actions (windows-latest) tekee versiotagista PyInstallerilla Windows-version (onedir), ajaa pytestin ja valmiille .exe:lle itsetestin (--itsetesti) ja lisää zipin GitHubin releaseen. Valmis versio toimii ilman Pythonia. macOS-versiota ei tehdä. Opiskelija saa julkaisun, itsetestin ja kirjastolistan tiedostot viikon 41 pohjana (pohjat/vektoripaja-pohja.zip). Saavutettavuus mitataan Accessibility Insights for Windowsilla (FastPass), näppäimistötestillä ja Windowsin Lukijalla. Tekoälytyökalut: Microsoft 365 Copilot (BC, suunnittelu ja pilkkominen) ja GitHub Copilot (Student, toteutus VS Codessa). GitHub Copilotin budjetti on 200 krediittiä kuukaudessa.",
        "Aikataulu on päivätty: vk 40/2026 (ma 28.9.) – vk 9/2027 (pe 5.3.), 18 työviikkoa. Lomat vk 42, joululoma 18.12.–10.1. (vk 51 on neljä työpäivää) ja talviloma vk 8."
      ],
      p0: "Pakollinen ydin (P0, ennen joulua): SVG-tuonti · layerit ja ryhmät solmupuuksi · revolve 3–32 segmenttiä · inflate 3–8 sivua · valinta, siirto, kierto ja skaalaus, lapset seuraavat, pivot keskipisteessä ja prosentteina · orbit, suorat näkymät orientaatiowidgetistä ja view lock -painike · .obj-vienti osat erillisinä · tallennus ja avaus JSONina. Tärkeä jatko (P1): Päivitä SVG, kulmasnappaus, pieni esikatseluikkuna (PiP), kierron kohderajaukset, oma teema ja isot kahvat, ortografinen näkymä, view lockin pikanäppäin.",
      roolit: [
        ["Opiskelija", "Pilkkoo tavoitteet tehtäväkorteiksi, tekee arkkitehtuuripäätökset, kirjoittaa testien odotetut arvot ennen toteutusta, hyväksyy, korjauttaa tai hylkää tekoälyn tuotoksen perustellen, selittää virheen syyn ja funktiot omin sanoin sekä kokoaa näyttöaineiston. Koodin kirjoittaa pääosin tekoäly."],
        ["Ohjaaja (Matti Seise)", "Viikkopalaveri ma tai ti (sovitut kortit issue-kommentteina, edellisen viikon funktio ääneen), pakollisen ytimen (P0) tarkistuspiste vk 47, vikatehtävä tarvittaessa, ohjaajan päätökset (tekijänimi, lisenssi, krediitit, katselmoinnin kirjaustapa, julkaisutestaaja, arviointi). Toimii tiimin jäsenen roolissa vk 2:n ratkaisuarviossa."],
        ["Asiakkaat (Matti Seise ja Antti Honkasalo)", "Vastaavat kysymyslistaan vk 40–41, katselmoivat MVP:n vk 51 ja antavat tärkeän jatkon (P1) prioriteetit. Vk 7 Antti vahvistaa, että v1.0-release toimii hänen Windows-koneellaan; Matti (Mac) vahvistaa demon tai opiskelijan koneen kautta. Kun Matti toimii asiakkaana, se kerrotaan tehtävässä."],
        ["Julkaisutestaaja (toinen opiskelija, vk 6)", "Kulkee README:n avulla koko polun Inkscape-piirroksesta .obj-tiedostoon ilman suullista apua. Nimi ja sanat toimitetaan ohjaajalle Teamsissa; repositoryyn kirjataan rooli. Nimetään viimeistään vk 5."],
        ["Arvioijat (vk 9)", "Ottavat vastaan demon ja näyttöaineiston. Ajankohta ja arvioijat sovitaan ohjaajan kanssa."]
      ],
      tarkistuspisteet: [
        [40, "Ympäristö ja repository", "Versiot, julkinen repository noreply-sähköpostilla, ohjaaja Collaboratorina, kolme pohjatiedostoa, mvp.md omin sanoin, kysymyslista lähetetty, agenttipyynnön hinta kirjattu."],
        [41, "Harjoitussykli", "Kaksi issueta syklin tarkistuslistoineen, testin 1 (T01) oma arvo testikoodissa ennen toteutusta, tarkista_ymparisto.py läpi, release-zip v0.0.41 purettuna käynnistyy (testi 2, T02) ja itsetesti läpi Actionsissa, päätös teknisestä pohjasta B-osiossa."],
        [44, "Hierarkia ja Agentti-kaista (C)", "Testit 6–8 (T06–T08), puhdas muunnosfunktio rajapintoineen, maailmamuunnos puhtaana funktiona lisätesteineen, hierarkiapaneeli (QTreeWidget), valinnan toiminta B-osiossa. Agentti-kaistan (C) krediittikulutus kirjattuna."],
        [47, "Pakollisen ytimen (P0) tarkistuspiste", "Onko pakollinen ydin aikataulussa? Jos ei, ohjaaja päättää, mikä katselmoidaan keskeneräisenä ja mikä tehdään vk 4:llä omassa haarassa pull requestilla."],
        [49, "Vienti ja ketju 1", "Testit 19–20 (T19–T20), o-rivit trimeshin viennistä ja tarkistus Blenderissä, ensimmäinen virheenkorjausketju kuudella osalla ja regressiotestillä. Vikatehtävä, jos aitoa havaintoa ei ole."],
        [50, "MVP v0.1", "Tallennusvertailu omilla kriteereillä, testit 21–22 (T21–T22), tietoturva-arvio, tagi v0.1 ja release-zip, itsetesti läpi."],
        [51, "Katselmointi", "Katselmointiloki rooleilla, asiakkaiden sanat erillään tulkinnasta, havainnot issueina prioriteetein, tilatiedosto lomaa varten."],
        [3, "Pull request", "Päivitä SVG omassa haarassa, testi 23 (T23), kaikki testit läpi ennen mergeä, pull request yhdistetty."],
        [6, "Julkaisuehdokas", "v1.0-rc1, README ja käyttöohje, julkaisutestaajan pöytäkirja epäröinteineen."],
        [7, "v1.0", "Estävät korjattu, ketju 3, tagi v1.0, asiakkaiden vahvistus, näyttömatriisi linkitetty."],
        [9, "Näyttö", "Demo 8–10 min viidellä osalla (mukana työnkulku yhdellä kortilla), itsearviointi Teamsissa, aineisto luovutettu."]
      ],
      tyonaytteet: {
        p1: ["40, 41, 2", "VS Code, GitHub Copilot, Python-virtuaaliympäristö ja pytest käytössä: versiot README:ssä, sovelluksen käynnistys ja testiajot, paluuviikon ajo"],
        p2: ["49, 4, 7 (havainnot 43→)", "Kolme virheenkorjausketjua havaintoissueista: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti"],
        p3: ["41, 43–50, 3–5", "Testit 1–26 (T01–T26) ja lisätestit, myös maailmamuunnoksen lisätesti vk 44: odotettu tulos kirjoitettu itse testikoodiin ennen toteutusta, tulokset issueissa"],
        p4: ["44→45, 48→49, 49→50", "Rajapinta ennen toteutusta, selityspohja kolmesta funktiosta (hierarkian muunnos, pivotin syötteen tarkistus, OBJ-objektijako) sekä maailmamuunnos puhtaana funktiona (vk 44), selitys ääneen seuraavan viikon palaverissa (ohjaajan päätös 23.9.2026)"],
        p6: ["41, 44, 46, 47–48, 5", "Hierarkiapaneeli, view lock, transformipaneeli (QDoubleSpinBox ja pikanäppäimet) ja isot kahvat käyttöliittymävaatimuksen mukaan; Accessibility Insights ennen ja jälkeen"],
        p7: ["43, 45, 46, 47", "MVP-kuvauksesta kortit ja toiminnot: tuonti, revolve, inflate ja transformit hyväksymiskriteerien mukaan"],
        p8: ["41→7", "Issue-kommentit \"Sovittu viikkopalaverissa pp.kk.\" joka viikolta"],
        p9: ["44–45, 3", "Revolven valintatavan vertailu ja yhteinen päätös, osien tunnistustapa päivityksessä"],
        p10: ["51, 2", "Katselmointi asiakkaiden kanssa; ohjaaja tiimin roolissa arvioi MVP:n ratkaisut tärkeää jatkoa (P1) varten"],
        p11: ["9", "Itsearviointi kolmesta tilanteesta Teamsissa ohjaajalle; päiväkirjassa vain päivä ja issue"],
        s1: ["40, 41", "Kysymyslista asiakkaille, vastaukset kirjattuina kysymykset.md:hen, MVP omin sanoin"],
        s2: ["51, 6", "Demo katselmoinnissa, README ja käyttöohje käyttäjälle"],
        s3: ["51", "Katselmointiloki: asiakkaiden sanat, oma tulkinta, sovitut muutokset"],
        s4: ["40, 51, 2", "Karsinta pakolliseen ytimeen, tärkeään jatkoon ja jatkolistaan (P0/P1/P2) perusteluineen, asiakkaiden prioriteetit, tärkeän jatkon järjestys"],
        s5: ["41→", "Tehtäväkortit hyväksymiskriteereineen, oma rajausehdotus ja tarkistusrivi issueissa"],
        s6: ["40, 41→, 2", "Kaistan valinta ja toteuman vertailu RAPORTOI-askeleessa, krediittimittaus, tärkeän jatkon (P1) tuntiarviot"],
        s7: ["44–48, 3", "Hierarkia, revolve, inflate, transformit, pivot ja päivitys"],
        s8: ["50", "Tallennustapojen vertailu oman suunnitelman kriteereillä ja oman mallin JSON-koko"],
        s9: ["50", "JSON-tallennus ja avaus, versionumero ja rakenteen tarkistus"],
        s10: ["43, 49, 50", "QFileDialog, svgelements, trimesh-vienti ja JSON"],
        s11: ["43, 50", "Testi 4 (T04): haitallinen SVG, testi 22 (T22): rikottu tallennus, tietoturva-arvio uhka–testi–tulos–toimenpide"],
        s12: ["40→7", "Commitit rivillä Closes #N, tagit: harjoitus v0.0.41, viikkoversiot v0.0.43–v0.0.49, v0.1, v1.0-rc1 ja v1.0"],
        s13: ["3 (rästit 4)", "Haara, pull request ja merge päähaaraan kaikki testit läpi"],
        s14: ["41, 43–50, 7", "Releasen rakentaminen ja julkaisu GitHub Actionsilla (PyInstaller, itsetesti, zip): harjoitus v0.0.41, viikkoversiot v0.0.43–v0.0.49, MVP v0.1 ja v1.0"],
        k1: ["41", "PySide6 + PyVista + trimesh + pytest -pohja opiskelijan omin komennoin"],
        k2: ["43, 46", "kirjastot.md: svgelementsin ja putkigeometrian rajoitteet omilla tiedostoilla kokeiltuina"],
        k3: ["45–48", "trimeshin revolve, PyVistan tube-suodatin, kamera ja orientaatiowidget, Qt:n transformipaneeli"],
        k4: ["41", "pip-paketit omin komennoin, requirements.txt"],
        k5: ["43–50", "MVP v0.1 komponenttikirjastolla testeineen"],
        k6: ["50, 7", "Release asiakkaiden käyttöön; Antti vahvistaa v1.0:n omalla Windows-koneellaan, Matti demon tai opiskelijan koneen kautta"],
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
        ["Julkaistu tuotos", "v1.0-release: zip, itsetesti läpi, release-teksti ja tagi v1.0."],
        ["Repository", "Julkinen repository: koodi, testit, issuet syklin tarkistuslistoineen, pull request ja tagit v0.1, v1.0-rc1 ja v1.0."],
        ["Suunnitelma ja päiväkirja", "project-docs/suunnitelma.md, mvp.md, kysymykset.md, projektipaivakirja.md ja AI-loki. Päiväkirjasta commit joka viikolta."],
        ["Laatuaineisto", "Testit 1–26 (T01–T26) issueissa, kolme virheenkorjausketjua, kirjastot.md, tietoturva.md, Accessibility Insights ennen ja jälkeen."],
        ["Katselmoinnit", "katselmointi.md (vk 51) ja julkaisutesti.md (vk 6) rooleilla; nimet ja sanatarkat lausumat Teamsissa ohjaajalla."],
        ["Näyttöaineisto", "Linkitetty näyttömatriisi 31 vaatimukselle, demo ja itsearviointi (Teams)."]
      ],
      huomiot: [
        ["Ennen 28.9.2026", "GitHub Education -vahvistus ja Copilot Student -tilaus (vahvistus voi kestää päiviä), opiskelijan GitHub-tunnus ja tekijänimi, asennusoikeudet (VS Code ja Python-laajennus, Git, Python 3.13, Inkscape, Blender; Windowsissa myös Accessibility Insights for Windows), demorepository kuvaohjeiden kuvakaappauksia varten."],
        ["Kuvaohjeiden kuvakaappaukset", "kuvakaappaukset.json listaa kuvattavat näkymät, alt-tekstit ja numeroidut kohdat. Kuvat otetaan GitHubin Dark high contrast- ja VS Coden Dark High Contrast -teemassa, M365 Copilot BC:n tenantista, rajattuina yhteen kohtaan. Kuvan lisäämisen jälkeen kohtien alueet (alue: x, y, leveys, korkeus prosentteina) asetetaan kuvan mukaan. tarkista.js varoittaa puuttuvista kuvista."],
        ["p5 osoitetaan muulla tavalla", "Vaatimus \"kirjoittaa ylläpidettävää ohjelmakoodia\" ei ole matriisissa rastina (ohjaajan päätös 23.9.2026). Osoitustapa sovitaan erikseen."],
        ["Krediitit", "200 krediittiä kuukaudessa ei välttämättä riitä agenttitilaan. Lisärahoitus (lisäkrediitit vai BC:n organisaatiolisenssi) on avoin ohjaajan päätös, takaraja lokakuun loppu. Alle 25 % jäljellä → kaistat A ja B kuun loppuun."],
        ["Pakollisen ytimen (P0) tarkistuspiste vk 47", "Jos pakollinen ydin on myöhässä, ohjaaja päättää viikon 47 palaverissa, mikä katselmoidaan keskeneräisenä ja mikä tehdään vk 4:llä omassa haarassa pull requestilla."],
        ["Aidot bugit", "Virheenkorjausketjut tehdään havaintoissueista. Jos aitoja havaintoja ei ole, ohjaaja antaa vikatehtävän. Keksittyjä bugeja ei kirjata."],
        ["Julkisuuden raja", "Itsearviointi, ohjaajan kommentti sekä testaajien ja katselmoijien nimet ja sanatarkat lausumat eivät kuulu julkiseen repositoryyn. Ne lähetetään Teamsissa tai sähköpostilla. Repositoryyn kirjataan roolit."],
        ["Opettajan tarkistusavain", "Testien odotetut tulokset eivät näy sivulla. Tarkistusavain on pedagogisessa rungossa (01-runko-v3.md § 13)."]
      ]
    }
  }
};
