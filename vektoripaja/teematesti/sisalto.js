/*
 * Vektoripaja – TEEMATESTI (briefin kohta 6.6), runko v2.
 * Yksi viikkokortti (vk 41) kokonaan: työsykli kopiointinappeineen, kuvaohje,
 * "Jos et tiedä, mitä tehdä" ja viikkorutiini. Viikot 40 ja 43 ovat lyhyitä,
 * jotta tilat (✓ Valmis, → Nyt, ○ Tulossa) näkyvät valikossa. Sisältö on luonnos.
 * Moottori: app.js v2.4 (teema, sykli, kuvaohjeet ja vakiolohkot ovat opt-in).
 */
window.NAYTTOPROJEKTI = {
  slug: "vektoripaja-teematesti",
  nimi: "Vektoripaja",
  vuosi: [2026, 2027],
  viikot: [40, 41, 42, 43],
  lomaViikot: [42],
  aloitusNappi: "Aloita viikosta 40",

  /* ---------- opiskelijan teema (brief 6.1) ---------- */
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

  vaiheet: [
    { tunnus: "A", lyhyt: "Työkalut", otsikko: "Työkalut ja harjoitussykli", viikot: [40, 41, 42], vari: "#1fa4e3" },
    { tunnus: "B", lyhyt: "MVP-ydin", otsikko: "MVP-ydin: SVG:stä muotoja", viikot: [43], vari: "#1fa4e3" }
  ],

  viikkoNimet: { 40: "Aloitus", 41: "Harjoitussykli", 42: "Syysloma", 43: "SVG-tuonti" },

  kehykset: {
    pohjustus: { kicker: "Viikon jälkeen", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    feature: { kicker: "Viikon tulos", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" }
  },

  /* ---------- viikkorutiini: sama joka viikko (runko v2 § 6.1) ---------- */
  viikkorutiini: {
    otsikko: "Viikkorutiini",
    johdanto: "Nämä rastit eivät ole viikon tehtäviä. Ne ovat joka viikon vakiotehtävät.",
    kohdat: [
      { milloin: "Maanantai", teksti: "Aloita uusi Copilot-keskustelu. Liitä siihen tilatiedosto." },
      { milloin: "Maanantai", teksti: "Tarkista krediitit GitHubin käyttönäkymästä. Kirjaa luku päiväkirjaan." },
      { milloin: "Maanantai tai tiistai", teksti: "Käy viikkopalaveri ohjaajan kanssa. Selitä ääneen edellisen viikon funktio. Jos edellisellä viikolla ei ollut funktiota, kerro, mitä teit ja mihin jäit. Sovi viikon kortit. Kirjaa ne issueihin: \"Sovittu viikkopalaverissa pp.kk.\"" },
      { milloin: "Perjantai", teksti: "Selitä yksi viikon funktio selityspohjalla päiväkirjaan. Lataa päiväkirja. Tee commit." }
    ]
  },

  /* ---------- "Jos et tiedä, mitä tehdä": sama joka viikko (runko v2 § 6.2) ---------- */
  josJumissa: {
    otsikko: "Jos et tiedä, mitä tehdä",
    johdanto: "Käy kysymykset läpi järjestyksessä. Kun kysymys sopii tilanteeseesi, tee sen ohje.",
    kohdat: [
      { kysymys: "1. Onko GitHubissa avoin issue, jolla on label tehtäväkortti?", ohje: "Avaa issue. Katso sen lopusta syklin tarkistuslista. Jatka ensimmäisestä askeleesta, jonka rasti puuttuu." },
      { kysymys: "2. Ei avointa korttia?", ohje: "Avaa `PROJEKTIN-TILA.md`. Katso kohta Seuraavana. Aloita työsyklin askeleesta 1." },
      { kysymys: "3. Viikon tulos on valmis, mutta viikkoa on jäljellä?", ohje: "Tee viikon lisätehtävä. Se on Näin etenet -listan lopussa. Jos viikolla ei ole omaa lisätehtävää, kirjoita viikon funktiolle yksi virhetilannetesti. Kirjaa odotettu tulos ennen ajoa." },
      { kysymys: "4. Viikko loppuu, ja tulos on kesken?", ohje: "Kirjaa tilatiedoston Seuraavana-kohtaan, mihin jäit. Ohjaaja päättää jatkosta seuraavan viikon palaverissa maanantaina tai tiistaina. Tee sillä välin virhetilannetesti viikon funktiolle." },
      {
        kysymys: "5. Mikään yllä olevista ei auta?",
        ohje: "Lähetä ohjaajalle Teams-viesti tällä pohjalla:",
        pohja: { otsikko: "Viesti ohjaajalle", teksti: "Hei, olen jumissa viikolla {viikko}.\nYritin: \nJäin kohtaan: \nRuudulla näkyy: " }
      }
    ]
  },

  /* ---------- työsykli: sama joka tehtäväkortissa (brief 5.1–5.2, runko v2 § 5) ---------- */
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
        valmis: "kortissa on kuusi kohtaa, ja testissä on sinun odotettu tuloksesi.",
        jumissa: [
          { kysymys: "Copilot kirjoitti koodia eikä korttia?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Pyydä korttia uudelleen", teksti: "Älä kirjoita koodia. Kirjoita vain tehtäväkortti pyytämässäni muodossa." } },
          { kysymys: "Copilot muutti odotetun tulokseni?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Palauta oma odotettu tulos", teksti: "Käytä testissä minun odotettua tulostani sanatarkasti: (liitä tähän)." } },
          { kysymys: "En osaa kirjoittaa odotettua tulosta?", ohje: "Kirjoita, mitä ruudulla pitää näkyä, kun kortti on valmis. Esimerkiksi: Kun avaan sivun, kuutio pyörii. Luku tai näkyvä asia riittää." },
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
          "Tarkista kortti: tavoite, kaista, tiedostot, älä tee, hyväksymiskriteerit ja testi tunnuksella.",
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
          { kysymys: "En löydä Issues-välilehteä?", ohje: "Avaa repositoryn Settings. Valitse General. Laita kohdassa Features rasti kohtaan Issues." }
        ]
      },
      {
        nimi: "Rakenna",
        paikka: "VS Code tai selain",
        tyokalu: "testi kaistalla B, toteutus kortin kaistalla (A = Copilot kirjoittaa yhden tiedoston kerrallaan)",
        oma: "kirjoitat testiin oman odotetun arvosi. Päätät jokaisesta tekoälyn vastauksesta: hyväksyn, korjautan tai hylkään. Kirjaat päätöksen ja perusteen AI-lokiin. Kortin täydennykset kirjataan yhtenä merkintänä. Rastita 3a issuessa, kun testi on kirjoitettu. Rastita 3b, kun toteutus on valmis.",
        ohje: [
          "Kirjoita testi ensin (3a). Avaa testitiedosto. Kirjoita kommentti, jossa on syöte ja sinun odotettu arvosi. Hyväksy täydennys Tab-näppäimellä.",
          "Kirjoita tulos testiin tekstinä tai muodossa tosi tai epätosi, jos tulos ei ole luku. Esimerkki: virheilmoitus näkyy = tosi.",
          "Kirjoita odotettu tulos issueen, jos kortin testi tehdään käsin selaimessa. Siirry silloin suoraan kohtaan 3b.",
          "Toteuta kortti sitten kortin kaistalla (3b). Kaistalla A pyydä Copilotilta yksi tiedosto kerrallaan. Kopioi pohja. Liitä sen perään kortti ja tiedoston nykyinen sisältö.",
          "Lue muutos ennen kuin hyväksyt sen. Älä hyväksy muutoksia testitiedostoon.",
          "Tallenna tiedostot. Aja terminaalissa `npm run dev`."
        ],
        pohja: {
          otsikko: "Kaista A: liitä tämä Copilotiin",
          teksti: "Toteuta tämä tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku, esimerkiksi src/App.jsx)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy ennen kuin kirjoitat koodia.\n\nTehtäväkortti:\n(liitä kortti tähän)\n\nTiedoston nykyinen sisältö:\n(liitä tiedosto tähän)"
        },
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
          { kysymys: "Muutos koskisi testitiedostoa?", ohje: "Hylkää muutos. Testi on sinun odotettu tuloksesi. Sitä ei muuteta koodin mukaan. Kirjaa hylkäys AI-lokiin." },
          { kysymys: "Korjaus vaatisi muutoksia kortin ulkopuolelle?", ohje: "Älä hyväksy muutosta. Vie asia Copilotille askeleessa 5. Pyydä uusi kortti." },
          { kysymys: "Sovellus ei käynnisty ollenkaan?", ohje: "Aja terminaalissa `npm install` ja sitten `npm run dev`. Jos tulee virhe, toimi kuten kohdassa Tuliko virheilmoitus." }
        ]
      },
      {
        nimi: "Tarkista",
        paikka: "VS Code",
        tyokalu: "sinä itse: VS Coden terminaali ja selain",
        oma: "etsit testikoodista oman odotetun arvosi ennen kuin ajat testin. Jos arvoa ei löydy tai se on muuttunut, palaa kohtaan 3a ja kirjoita testi uudelleen. Rastita askel 4 issuessa.",
        ohje: [
          "Avaa testitiedosto. Etsi siitä oma odotettu arvosi. Jos tulos on teksti tai tosi tai epätosi, etsi rivi, joka tarkistaa sen.",
          "Aja terminaalissa `npm test`.",
          "Tee kortin käsin tehtävät testit selaimessa. Vertaa havaittua tulosta odotettuun tulokseen. Kirjaa molemmat.",
          "Kirjaa tulos issueen: läpi tai ei läpi, ja mitä näit."
        ],
        pohja: { otsikko: "Testin kirjaus issueen", teksti: "Testi T__\nOdotettu tulos (löytyi testikoodista rivillä __): \nHavaittu tulos: \nTulos: läpi / ei läpi" },
        valmis: "issuessa on odotettu ja havaittu tulos jokaisesta kortin testistä.",
        jumissa: [
          { kysymys: "Testi ei mennyt läpi?", ohje: "Palaa kohtaan 3b. Korjaa toteutus. Älä muuta testiä. Jos sama testi epäonnistuu toisen kerran, avaa havaintoissue ja siirry askeleeseen 5." },
          { kysymys: "En löydä omaa arvoani testikoodista?", ohje: "Palaa kohtaan 3a, koska testi ei silloin tarkista sinun tulostasi. Kirjoita testi uudelleen kommentista, jossa on oma arvosi. Kirjaa tämä AI-lokiin." },
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
          teksti: "Tehtäväkortti #(numero) on tehty.\nMitä tapahtui (oma lause): \nKaista: A / B. Riittikö se? (oma lause): \nTestin tulos: läpi / ei läpi\nMitä hylkäsin tai korjautin ja miksi: \n\n1. Päivitä PROJEKTIN-TILA.md: valmista, seuraavana, tehdyt päätökset ja avoimet kysymykset. Anna koko tiedosto.\n2. Anna seuraava tehtäväkortti samassa muodossa. Jos viikon tavoite on valmis, sano se."
        },
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
        valmis: "commit on GitHubissa, issue on suljettu, ja AI-lokissa on merkintä.",
        jumissa: [
          { kysymys: "Push ei onnistu?", ohje: "Valitse VS Codessa ensin Sync Changes. Tee sitten push uudelleen. Jos virhe jatkuu, lähetä virheilmoitus ohjaajalle Teamsissa." },
          { kysymys: "Issue ei sulkeutunut?", ohje: "Tarkista, että commit-viestissä lukee `Closes #N` oikealla numerolla. Tarkista myös, että push meni päähaaraan `main`." }
        ]
      }
    ]
  },

  viikkoOhjeet: {
    40: {
      type: "pohjustus",
      feature: "VS Code ja GitHub ovat korkean kontrastin teemassa. Komennot `git --version` ja `node --version` tulostavat versiot. Julkinen repository on kloonattu VS Codeen ja jaettu ohjaajalle. `project-docs/mvp.md` on pushattu.",
      connection: "Tällä viikolla ei vielä rakenneta sovellusta. Laitat työkalut kuntoon. Kirjoitat omin sanoin, mitä MVP:hen kuuluu.",
      deliverable: "Versiotulosteet · kloonattu ja jaettu repository · `project-docs/mvp.md` GitHubissa · agenttipyynnön hinta päiväkirjassa.",
      why: "Ilman omaa MVP-kuvausta Copilot pilkkoo väärää asiaa. Ilman mittausta et tiedä, montako agenttipyyntöä voit tehdä kuukauden krediiteillä.",
      done: "Ohjaaja näkee repositoryn, `mvp.md` on GitHubissa, kysymyslista on lähetetty, ja päiväkirjassa on agenttipyynnön hinta tai merkintä \"odottaa käyttönäkymää\".",
      record: "MVP:n perustelu omin sanoin, repositoryn osoite ja agenttipyynnön hinta.",
      skills: ["Asiakkaan tarpeiden selvittäminen", "Tärkeysjärjestys P0, P1 ja P2", "Kehitysympäristön käyttöönotto"],
      steps: [
        ["Sovi ohjaajan kanssa.", "Sovi Teamsissa tekijänimi ja viikkopalaverin päivä, maanantai tai tiistai."],
        ["Asenna työkalut.", "Asenna VS Code, Git, Node.js, Inkscape ja Blender. Aja terminaalissa <code>git --version</code> ja <code>node --version</code>."],
        ["Vaihda teemat.", "Valitse VS Codessa teema Dark High Contrast. Valitse GitHubin asetuksissa teema Dark high contrast."],
        ["Aseta Git.", "Aseta Gitin nimeksi sovittu tekijänimi. Aseta sähköpostiksi GitHubin noreply-osoite. Näin omaa sähköpostiosoitettasi ei julkaista."],
        ["Luo repository.", "Luo GitHubissa julkinen repository. Valitse Add a README file."],
        ["Kloonaa repository.", "Kloonaa repository VS Codeen. Kloonaus tekee siitä kopion omalle koneellesi."],
        ["Lisää pohjat.", "Lisää kolme pohjatiedostoa ensi viikkoa varten: tilatiedosto <code>PROJEKTIN-TILA.md</code>, tehtäväkorttipohja ja <code>copilot-instructions.md</code>."],
        ["Jaa repository.", "Lisää ohjaaja Collaboratoriksi. Katso kuvaohje alta."],
        ["Kirjoita MVP.", "Kirjoita <code>project-docs/mvp.md</code>: P0-lista ja miksi muut asiat odottavat. Poista samalla suunnitelmastasi <code>[cite: n]</code>-merkinnät. Copilot saa selittää termejä, mutta perustelu on sinun."],
        ["Tee commit ja push.", "Tallenna muutokset commitiksi. Lähetä ne GitHubiin pushilla."],
        ["Lähetä kysymyslista.", "Lähetä kysymyksesi asiakkaille Teamsissa. Vastaukset käydään läpi ensi viikon palaverissa."],
        ["Katso krediitit ennen mittausta.", "Avaa GitHubin käyttönäkymä. Kirjaa, montako krediittiä on käytetty."],
        ["Tee yksi agenttipyyntö.", "Avaa VS Codessa GitHub Copilotin chat. Valitse tila Agent. Kopioi viestipohja alta. Lähetä se."],
        ["Kirjaa hinta.", "Avaa käyttönäkymä uudelleen. Hinta on nykyinen luku miinus aiempi luku. Jos luku ei ole muuttunut, kirjaa \"odottaa käyttönäkymää\" ja katso huomenna."],
        ["Tee lisätehtävä.", "Valitse oman suunnitelmasi P0-listasta viisi termiä. Kirjoita jokaisesta yksi suomenkielinen rivi."]
      ],
      pohjat: [{ otsikko: "Mittauksen viestipohja GitHub Copilotille (agenttitila)", teksti: "Lue README.md ja ehdota sen alkuun yksi lause, joka kertoo, mikä Vektoripaja on. Älä muuta muita tiedostoja." }],
      example: "`mvp.md`: \"Revolve on P0, koska maljakko ja pyörä tehdään sillä. Boolean-toiminnot ovat P2-jatkolistalla, koska malli toimii ilman niitä.\"",
      notEnough: "\"MVP on kaikki [MVP]-merkityt asiat.\" Lista on kopioitu suunnitelmasta. Siinä ei kerrota, miksi jokin jää pois.",
      termit: ["MVP", "P0", "P1", "P2", "repository", "kloonaus", "tilatiedosto", "krediitti"],
      kuvaohjeet: ["github-collaborators"]
    },
    41: {
      type: "feature",
      feature: "Selaimessa pyörii Three.js-kuutio omassa Pages-osoitteessasi. Testitapaukset T01 ja T02 menevät läpi.",
      excerpt: "Haluamme nähdä jokaisen välivaiheen verkossa, emme vain kuvakaappauksina.",
      connection: "Viikolla 40 asensit työkalut. Nyt käyt työsyklin läpi vaarattomalla tehtävällä. Kuutio poistetaan myöhemmin, mutta sama sykli toistuu joka viikko.",
      deliverable: "Julkaistu sivu, jossa kuutio pyörii · testitapaukset T01 ja T02 · kaksi issueta suljettuna commit-viestillä.",
      why: "Jos sykli opitaan vasta SVG-tuonnin kanssa, uusi työtapa ja vaikea tehtävä tulevat yhtä aikaa. Silloin et tiedä, johtuuko ongelma työtavasta vai tehtävästä.",
      done: "Pages-osoite näyttää pyörivän kuution myös toisella koneella, `npm test` näyttää, että T01 menee läpi, ja issuet #1 ja #2 on suljettu commitilla.",
      record: "Pages-osoite, issuiden numerot, T01:n odotettu ja havaittu tulos sekä yksi funktio selityspohjalla.",
      skills: ["Tehtäväkortti ja hyväksymiskriteerit", "Tekninen pohja: Vite, React, Three.js ja Vitest", "Testi ennen koodia", "Julkaisu GitHub Pagesiin"],
      termit: ["työsykli", "tehtäväkortti", "issue", "kaista", "T01", "tekninen pohja", "GitHub Pages"],
      steps: [
        ["Päätä ensin.", "Lue tekninen ehdotus. Kirjaa suunnitelmaan, hyväksytkö sen. Perustele päätös P0:lla."],
        ["Luo tekninen pohja itse.", "Avaa repositoryn kansio VS Codessa. Aja <code>npm create vite@latest . -- --template react</code> ja <code>npm install</code>."],
        ["Lisää kirjastot itse.", "Aja <code>npm install three @react-three/fiber @react-three/drei</code> ja <code>npm install -D vitest</code>."],
        ["Kirjoita T01 ennen koodia.", "Funktio <code>kiertokulma(aika, nopeus)</code> saa ajan 0 ja nopeuden 0,5. Mitä odotat? Entä kun aika on 3? Kirjaa vastaukset ennen ajoa."],
        ["Tee kortti #1 työsyklillä.", "Kortti: kuutio pyörii etusivulla. Vertaa Copilotin korttia toteutusavun mallikorttiin."],
        ["Tee kortti #2 työsyklillä.", "Kortti: sovellus julkaistaan GitHub Pagesiin. Testi T02: avaa osoite toisella koneella."],
        ["Tee lisätehtävä.", "Lisätesti: mitä odotat, kun aika on negatiivinen? Kirjaa vastaus ennen ajoa."]
      ],
      example: "Perustelu suunnitelmaan: \"Hyväksyn ehdotuksen. SVGLoader lukee Inkscapen SVG:n, LatheGeometry tekee revolven ja Vitest testaa puhtaat funktiot.\"",
      notEnough: "\"Hyväksyn, koska Copilot suositteli tätä.\" Perustelussa ei ole yhtään P0-toimintoa.",
      help: {
        title: "Mallikortti, testipohja ja kansiorakenne",
        tree: "vektoripaja/\n├─ .github/\n│  ├─ ISSUE_TEMPLATE/tehtavakortti.md\n│  ├─ copilot-instructions.md\n│  └─ workflows/pages.yml\n├─ project-docs/\n│  └─ mvp.md\n├─ src/\n│  ├─ App.jsx\n│  ├─ index.css\n│  ├─ kierto.js\n│  └─ kierto.test.js\n├─ PROJEKTIN-TILA.md\n├─ README.md\n├─ package.json\n└─ vite.config.js",
        actions: [
          "Kopioi testipohja tiedostoon `src/kierto.test.js`. Kirjoita omat odotetut arvosi `___`-kohtiin (työsyklin kohta 3a).",
          "Pyydä kaistalla A tiedostot yksi kerrallaan: `src/kierto.js`, `src/App.jsx` ja `src/index.css`.",
          "Lisää tiedostoon `vite.config.js` rivi `base: \"/vektoripaja/\"`. Valitse GitHubissa Settings → Pages → Source: GitHub Actions."
        ],
        code: "MALLIKORTTI #1\n## Tavoite\nKuutio pyörii etusivulla.\n## Kaista ja perustelu\nA. Kolme tiedostoa, pyydetään yksi kerrallaan.\n## Tiedostot\nsrc/kierto.js, src/App.jsx, src/index.css\n## Älä tee\nÄlä lisää muita kirjastoja. Älä muuta tiedostoa src/kierto.test.js.\n## Hyväksymiskriteerit\n- [ ] Kuutio näkyy ja pyörii tasaisesti.\n- [ ] Tausta on musta ja teksti #1fa4e3 CSS-muuttujina.\n## Testi\nT01: kiertokulma(0, 0.5) → (sinun arvosi) ja kiertokulma(3, 0.5) → (sinun arvosi)\n## Sykli\n- [ ] 1 Suunniteltu  - [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu  - [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu  - [ ] 5 Raportoitu  - [ ] 6 Kirjattu\n\nTESTIPOHJA src/kierto.test.js\nimport { test, expect } from \"vitest\";\nimport { kiertokulma } from \"./kierto.js\";\n\ntest(\"T01 kiertokulma\", () => {\n  expect(kiertokulma(0, 0.5)).toBe(___);\n  expect(kiertokulma(3, 0.5)).toBe(___);\n});",
        test: "Avaa Pages-osoite puhelimella tai toisella koneella. Kuution pitää pyöriä."
      },
      sykli: {
        pohjat: {
          1: {
            otsikko: "Viikon 41 kortti #1: täytä ja liitä Copilotiin",
            teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko 41: harjoitussykli.\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti tekee vain pyörivän kuution etusivulle.\nMinun odotettu tulokseni: Kun syöte on kiertokulma(0, 0.5), tuloksen pitää olla ___. Kun syöte on kiertokulma(3, 0.5), tuloksen pitää olla ___.\nRajapinta: kiertokulma(aika, nopeus) palauttaa luvun.\n\nKirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista (A, B tai C) ja perustelu\n## Tiedostot\n## Älä tee (testitiedostot aina tässä)\n## Hyväksymiskriteerit\n## Testi: tunnus, syöte ja odotettu tulos\n\nKäytä minun odotettua tulostani sellaisenaan. Älä kirjoita koodia."
          }
        },
        ohjeet: {
          3: [
            "Kirjoita testi ensin (3a). Kortissa #1 kopioi toteutusavun testipohja tiedostoon `src/kierto.test.js`. Kirjoita omat arvosi `___`-kohtiin.",
            "Kirjoita kortin #2 testin T02 odotettu tulos issueen. T02 tehdään käsin selaimessa. Siirry sitten suoraan kohtaan 3b.",
            "Toteuta kortti sitten kaistalla A (3b). Pyydä Copilotilta yksi tiedosto kerrallaan: ensin `src/kierto.js`, sitten `src/App.jsx`, sitten `src/index.css`.",
            "Lue jokainen tiedosto ennen kuin hyväksyt sen. Älä hyväksy muutoksia testitiedostoon.",
            "Tallenna tiedostot. Aja terminaalissa `npm run dev`."
          ]
        },
        lisa: {
          3: "Tällä viikolla testi kirjoitetaan testipohjaan. Kommentista kirjoitettava testi (kaista B) otetaan käyttöön viikolla 43."
        },
        jumissa: {
          3: [
            { kysymys: "`npm create vite` kysyy kysymyksiä?", ohje: "Valitse framework React. Valitse variant JavaScript. Jos se kysyy kansion tyhjentämisestä, valitse Ignore files and continue." }
          ],
          4: [
            { kysymys: "Pages-sivu on tyhjä tai valkoinen?", ohje: "Avaa `vite.config.js`. Viten `base` puuttuu tai on väärin. Tarkista rivi `base: \"/vektoripaja/\"`. Nimen pitää olla sama kuin repositoryn nimi." }
          ]
        }
      }
    },
    43: {
      type: "feature",
      feature: "Inkscapessa piirretty SVG avautuu sovellukseen. Sen polut näkyvät 3D-näkymässä viivoina.",
      connection: "Nyt sykli on tuttu. Ensimmäinen oikea ominaisuus on tuonti. Ilman sitä mallista ei synny mitään.",
      deliverable: "Oma testitiedosto Inkscapesta · testitapaukset T03–T05 · polut näkymässä · `kirjastot.md`.",
      why: "Kaikki myöhemmät viikot tarvitsevat tuodut polut. Jos tuonti on epävarma, myös revolve ja inflate ovat epävarmoja.",
      done: "Oma SVG avautuu tiedostonvalinnalla, T03–T05 menevät läpi, ja `project-docs/kirjastot.md`:ssä on kaksi SVGLoaderin rajoitetta omalla tiedostolla kokeiltuna.",
      record: "Kansiorakenne ja moduulirajat sekä yksi SVGLoaderin rajoite omalla tiedostolla kokeiltuna.",
      skills: ["SVG-tiedoston tuonti", "Moduulien rajat", "Komponenttikirjaston rajoitteet", "Ulkoinen tiedosto turvallisesti"],
      termit: ["kaista", "täydennys", "moduuli", "havaintoissue", "JSON"],
      steps: [
        ["Piirrä testitiedosto.", "Tee Inkscapessa nimetyt layerit ja kolme sisäkkäistä ryhmää."],
        ["Kirjoita T03–T05 ensin.", "T03: tiedostossa on kolme polkua. T04: SVG, jossa on <code>&lt;script&gt;</code>. T05: tiedosto, joka ei ole SVG. Kirjaa jokaiselle, mitä odotat."],
        ["Kirjaa rakenne.", "Kirjaa suunnitelmaan kansiorakenne ja moduulien rajat."],
        ["Toteuta työsyklillä.", "Kirjoita testit kaistalla B kommentista. Toteuta tuonti kaistalla A, tiedosto kerrallaan."],
        ["Kokeile rajoitteita.", "Kokeile omalla tiedostollasi, mitä SVGLoader ei lue. Kirjaa se <code>kirjastot.md</code>:hen."]
      ],
      example: "`kirjastot.md`: \"SVGLoader ei lue tekstiä. Kokeilin tiedostolla elain.svg: teksti jäi pois.\"",
      notEnough: "\"SVGLoaderilla on rajoitteita.\" Mitään ei ole kokeiltu omalla tiedostolla.",
      sykli: true
    }
  },

  termisto: [
    { termi: "MVP", nimi: "Minimum Viable Product", selite: "Pienin käytettävä versio. Tässä projektissa MVP on sama kuin P0.", viikko: 40 },
    { termi: "P0", nimi: "Pakollinen ydin", selite: "Toiminnot, joiden pitää valmistua ennen joulua.", viikko: 40 },
    { termi: "P1", nimi: "Tärkeä jatko", selite: "Toiminnot, jotka tehdään joululoman jälkeen, kun P0 toimii.", viikko: 40 },
    { termi: "P2", nimi: "Jatkolista", selite: "Toiminnot, jotka jäävät tämän näytön jälkeen tehtäviksi. Ne eivät ole hylättyjä.", viikko: 40 },
    { termi: "repository", nimi: "Git-repository", selite: "Projektin kansio GitHubissa. Siellä on koodi, historia ja issuet.", viikko: 40 },
    { termi: "kloonaus", selite: "Repositoryn kopio omalle koneelle. VS Code ja GitHub Copilot käsittelevät kloonattua kansiota.", viikko: 40 },
    { termi: "tilatiedosto", nimi: "PROJEKTIN-TILA.md", selite: "Valmista, seuraavana, tehdyt päätökset ja avoimet kysymykset. Liität sen Copilotiin. Älä anna sitä GitHub Copilotille.", viikko: 40 },
    { termi: "krediitti", nimi: "GitHub Copilotin käyttöraha", selite: "200 krediittiä kuukaudessa. Agenttitila kuluttaa niitä. Budjetti nollautuu kuun 1. päivänä.", viikko: 40 },
    { termi: "Copilot", selite: "Microsoft 365 Copilot BC:n tunnuksella, selaimessa. Suunnittelee ja pilkkoo tehtävät tehtäväkorteiksi." },
    { termi: "GitHub Copilot", selite: "VS Coden koodityökalu. Toteuttaa tehtäväkortin." },
    { termi: "työsykli", nimi: "Kuusi askelta", selite: "Suunnittele, Siirrä, Rakenna, Tarkista, Raportoi ja Kirjaa. Sama jokaisessa tehtäväkortissa.", viikko: 41 },
    { termi: "tehtäväkortti", selite: "Yksi rajattu tehtävä: tavoite, kaista, tiedostot, älä tee, hyväksymiskriteerit ja testi.", viikko: 41 },
    { termi: "issue", nimi: "GitHub-issue", selite: "Tehtäväkortti GitHubissa, label tehtäväkortti. Suljetaan commit-viestin rivillä `Closes #N`.", viikko: 41 },
    { termi: "kaista", nimi: "A, B tai C", selite: "Toteutustapa. A: Copilot kirjoittaa koodin yksi tiedosto kerrallaan. B (viikolta 43): kommentti ja täydennys VS Codessa, myös testit. C (viikolta 44): GitHub Copilotin agenttitila useaan tiedostoon.", viikko: 41 },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "T tarkoittaa testitapausta. Numero yksilöi sen. Odotettu tulos kirjataan ennen kuin koodi tehdään. Lisätesti on ylimääräinen testi ilman numeroa.", viikko: 41 },
    { termi: "tekninen pohja", nimi: "Vite, React, Three.js ja Vitest", selite: "Sovelluksen perusta. Vite käynnistää ja rakentaa sovelluksen. React tekee näkymät. Three.js piirtää 3D:n. Vitest ajaa testit.", viikko: 41 },
    { termi: "GitHub Pages", selite: "Julkaisupaikka. GitHub Actions julkaisee sovelluksen automaattisesti jokaisen pushin jälkeen.", viikko: 41 },
    { termi: "täydennys", selite: "GitHub Copilotin harmaa koodiehdotus VS Codessa. Hyväksytään Tab-näppäimellä. Ei kuluta krediittejä.", viikko: 43 },
    { termi: "moduuli", selite: "Kansio tai tiedosto, jolla on yksi vastuu. Esimerkiksi tuonti on eri moduuli kuin vienti.", viikko: 43 },
    { termi: "havaintoissue", nimi: "label havainto", selite: "Issue, johon kirjataan virhe: mitä odotit, mitä tapahtui ja miten virheen saa toistettua. Suljetaan korjauscommitilla.", viikko: 43 },
    { termi: "JSON", nimi: "tallennusmuoto", selite: "Tekstimuotoinen tiedosto, johon projektin tiedot tallennetaan ja josta ne avataan uudelleen.", viikko: 43 }
  ],

  paivakirja: { tiedostonimi: "projektipaivakirja.md", polku: "project-docs/projektipaivakirja.md" },

  suunnitelma: {
    otsikko: "Suunnitelma",
    tiedostonimi: "suunnitelma.md",
    pakolliset: ["tallennus"],
    markdown: ({ arvo, onTäytetty, pvm }) => `# Vektoripaja – suunnitelma (teematesti)

Päivitetty ${pvm}

## B · Omat päätökset

- Tallennustapa ja perustelu: ${arvo("tallennus")}

## C · Ohjaajan päätökset

- Lisenssi: ${onTäytetty("lisenssi") ? arvo("lisenssi") : "EI VIELÄ SOVITTU: avoin asia"}
`
  }
};
