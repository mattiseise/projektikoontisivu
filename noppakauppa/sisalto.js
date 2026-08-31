/*
 * NoppaKauppa – projektin koko sisältödata.
 *
 * Päivätön tila: viikot ovat järjestysnumeroita 1–18, eivät kalenteriviikkoja.
 * Sivustolla ei ole yhtään kalenteripäivämäärää.
 *
 * app.js on geneerinen moottori eikä sisällä projektikohtaista tekstiä.
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "noppakauppa",
  nimi: "NoppaKauppa",
  vuosi: 2026,
  paivaton: true,
  viikot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  aloitusNappi: "Aloita kaupan rakentaminen",
  apuOtsikko: "Tarvitsen toteutusapua",

  paletti: {
    aksentti: "#c2410c",
    aksenttiTumma: "#9a3412",
    taulukkoSavy: "#fbeee5",
    riviSavy: "#fdf5ef"
  },

  /* ---- paperiaineiston tekstien yliajot (päivätön tila) ---- */
  lataukset: {
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 — " + title
  },

  /* ---- vaiheet ---- */
  vaiheet: [
    { tunnus: "A", lyhyt: "Ydin",      otsikko: "Kaupan ydin: toimeksianto, tietomalli ja julkaistu tuotelista",        viikot: [1, 2, 3, 4, 5],       vari: "#8d5a2b" },
    { tunnus: "B", lyhyt: "Ostopolku", otsikko: "Ostopolku: haku, kori, tunnukset, tilaus ja asiakaskatselmointi",     viikot: [6, 7, 8, 9, 10],      vari: "#1a6fae" },
    { tunnus: "C", lyhyt: "Valmiiksi", otsikko: "Valmiiksi: palautemuutos, henkilökunnan työkalut, tietoturva ja laatu", viikot: [11, 12, 13, 14, 15], vari: "#c03434" },
    { tunnus: "D", lyhyt: "Julkaisu",  otsikko: "Julkaisu ja näyttö",                                                   viikot: [16, 17, 18],          vari: "#2b6e6e" }
  ],

  /* ---- viikkonavigaation lyhyet nimet ---- */
  viikkoNimet: {
    1: "Aloitus",
    2: "Suunnitelma",
    3: "Tuotelista",
    4: "Kategoriat",
    5: "Ensijulkaisu",
    6: "Sanahaku",
    7: "Ostoskori",
    8: "Tunnukset",
    9: "Tilaus",
    10: "Asiakaskatselmointi",
    11: "Palautemuutos",
    12: "Tuotehallinta",
    13: "Tilaukset ja saavutettavuus",
    14: "Tietoturva",
    15: "Testaus",
    16: "Julkaisuehdokas",
    17: "Julkaisu v1.0",
    18: "Näyttö"
  },

  /* ---- viikkotyyppien kehystekstit ---- */
  kehykset: {
    pohjustus: {
      kicker: "Pohjustus",
      connectionLabel: "Näin viikko vie kauppaa eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    feature: {
      kicker: "Viikon tulos",
      connectionLabel: "Näin tulos rakentuu:",
      deliverableLabel: "Valmistuu tällä viikolla",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    katselmointi: {
      kicker: "Katselmointi: kauppa testissä",
      connectionLabel: "Näin viikko vie kauppaa eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    laatu: {
      kicker: "Laatuviikko",
      connectionLabel: "Näin viikko vie kauppaa eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    julkaisu: {
      kicker: "Julkaisuviikko",
      connectionLabel: "Näin viikko vie kaupan maaliin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    naytto: {
      kicker: "Näyttöviikko",
      connectionLabel: "Näin viikko vie näytön maaliin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    }
  },

  /* ---- projektipäiväkirja ---- */
  paivakirja: {
    tiedostonimi: "projektipaivakirja.md",
    polku: "project-docs/projektipaivakirja.md",
    vihjeet: {
      work: "Kerro konkreettiset tiedostot, komponentit, endpointit, tehtävät ja testit.",
      reason: "Kerro päätös, vaihtoehdot, perustelu ja mitä opit.",
      evidence: "Esim. commit-linkki, issue #12, PR-linkki tai testi T05.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla kerralla?"
    }
  },

  /* ---- suunnitelmadokumentti ---- */
  suunnitelma: {
    otsikko: "Tekninen suunnitelma",
    tiedostonimi: "suunnitelma.md",
    pakolliset: [
      "nimi", "tekija", "teema", "tietomalli", "komponenttijako", "taitekohdat",
      "julkaisualusta", "korinTallennus", "istuntoratkaisu", "lisapaketti"
    ],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      `# Tekninen suunnitelma – ${arvo("nimi", "_(projektin nimi puuttuu)_")}`,
      "",
      `Tekijä: ${arvo("tekija")} · Päivitetty: ${pvm}`,
      "",
      "Tämä suunnitelma kirjoitetaan viikolla 2 ja päivitetään viikoilla 5, 8, 9 ja 11.",
      "Päivitä myös työmääräarviot toteutuneen perusteella (viikko 11) — muutoshistoria on osa näyttöaineistoa.",
      "",
      "## 1. Tavoite (esitäytetty toimeksiannosta)",
      "",
      "Verkkokauppa, jossa asiakas selaa ja hakee tuotteita, kerää korin ja tilaa ilman",
      "maksunvälitystä; henkilökunta hallitsee tuotteita ja selaa tilauksia.",
      "",
      "## 2. Asiakas ja kohderyhmä (esitäytetty toimeksiannosta)",
      "",
      "Nopan Nurkan yrittäjä ja myyjä (henkilökunta) sekä liikkeen asiakkaat, jotka",
      "käyttävät kauppaa ensisijaisesti puhelimella.",
      "",
      "## 3. Rajaus (esitäytetty toimeksiannosta)",
      "",
      "**P0 — pakollinen perusversio:** tuotteet kategorioittain, sanahaku, ostoskori,",
      "rekisteröityminen ja kirjautuminen, tilaus, tilaushistoria, omien tietojen muokkaus,",
      "tuotehallinta ja tilausten selaus.",
      "",
      "**Pois rajattu:** maksunvälitys (asiakkaan päätös), tuotearvostelut,",
      "sähköposti-ilmoitukset ja varastosaldon reaaliaikaseuranta.",
      "",
      "## 4. Teknologialinja (esitäytetty toimeksiannosta)",
      "",
      "Vue 3 + Vite + Pinia, FastAPI + SQLite, julkaisualusta oman vertailun mukaan.",
      "",
      "## 5. Omat päätökset",
      "",
      `### 5.1 Tuoteteema (viikko 2, palataan viikolla 3)`,
      "",
      arvo("teema"),
      "",
      "### 5.2 Tietomalli: taulut ja suhteet (viikko 2, palataan viikoilla 9 ja 12)",
      "",
      arvo("tietomalli"),
      "",
      "### 5.3 Komponenttijako ja sivukartta (viikot 2–3, palataan viikolla 15)",
      "",
      arvo("komponenttijako"),
      "",
      "### 5.4 Responsiivisuuden taitekohdat (viikko 4, palataan viikoilla 10 ja 13)",
      "",
      arvo("taitekohdat"),
      "",
      "### 5.5 Julkaisualusta ja vertailu (viikko 5, palataan viikolla 16)",
      "",
      arvo("julkaisualusta"),
      "",
      "### 5.6 Ostoskorin tallennustapa (viikko 7, palataan viikolla 9)",
      "",
      arvo("korinTallennus"),
      "",
      "### 5.7 Istuntoratkaisu (viikko 8, palataan viikolla 14)",
      "",
      arvo("istuntoratkaisu"),
      "",
      "### 5.8 Ulkoinen lisäpaketti k4:ää varten (viikko 9, palataan viikolla 16)",
      "",
      arvo("lisapaketti"),
      "",
      "## 6. Tietovarastovertailu (viikko 2)",
      "",
      arvo("tietovarastovertailu", "_(kirjoita vertailu SQLite / JSON-tiedosto / PostgreSQL ja perustele valinta)_"),
      "",
      "## 7. Avoimet asiat — ohjaaja omistaa",
      "",
      "Näitä ei päätetä itse eikä tekoälyllä. Tyhjä kenttä on oikea tulos silloin,",
      "kun asiaa ei ole vielä sovittu.",
      "",
      onTäytetty("lisenssi")
        ? `- Lisenssi: ${arvo("lisenssi")}`
        : "- Lisenssi: EI VIELÄ SOVITTU — avoin asia (LICENSE repoon heti kun sovittu)",
      onTäytetty("repoJulkisuus")
        ? `- Repositoryn julkisuus ja tekijänimi: ${arvo("repoJulkisuus")}`
        : "- Repositoryn julkisuus ja tekijänimi julkisessa repossa: EI VIELÄ SOVITTU — avoin asia (alaikäisellä huoltajan suostumus ohjaajan kautta)",
      onTäytetty("alustalinjaus")
        ? `- Oppilaitoksen linja julkaisualustasta: ${arvo("alustalinjaus")}`
        : "- Oppilaitoksen linja julkaisualustasta (salliiko ilmaistasot vai oma palvelin): EI VIELÄ SOVITTU — avoin asia",
      onTäytetty("katselmoijat")
        ? `- Katselmoijat viikoille 10 ja 16: ${arvo("katselmoijat")}`
        : "- Katselmoijien nimeäminen viikoille 10 ja 16: EI VIELÄ SOVITTU — avoin asia (etsintä käynnistetään viikolla 1, nimeäminen viimeistään ennen viikkoa 10; siihen asti ohjaaja toimii asiakkaan äänenä)",
      onTäytetty("perusteversio")
        ? `- Perusteversion siirtymäsääntö (OPH-6216-2025): ${arvo("perusteversio")}`
        : "- Perusteversion siirtymäsääntö (OPH-6216-2025): EI VIELÄ SOVITTU — oppilaitoksen tulkinta, avoin asia",
      "",
      "---",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
      "Päivitä tiedosto joka kerta, kun teet uuden päätöksen tai ohjaaja vastaa avoimeen asiaan.",
      ""
    ].join("\n")
  },

  /* ---- viikkojen ohjaava sisältö ---- */
  viikkoOhjeet: {
    1: {
      type: "pohjustus",
      feature: "Viikon jälkeen toimeksianto on luettu ja kysymyslista viety ohjaajalle: repository on GitHubissa ensimmäisellä commitilla, ja sekä Vue+Vite-frontti että FastAPI-backend käynnistyvät omalla koneellasi.",
      connection: "Projekti alkaa toimeksiannosta ja työkaluista. Ennen ensimmäistä komponenttia sovitaan, mitä asiakas oikeasti tarvitsee ja millä välineillä kauppa rakennetaan.",
      deliverable: "Kysymyslista ohjaajalle, repository kansiorakenteineen sekä käynnistyvät Vite- ja FastAPI-kehityspalvelimet.",
      why: "Ilman sovittua rajausta ja toimivaa ympäristöä jokainen tuleva viikko alkaa selvittelyllä — ja julkisen repon sopimukset eivät ole peruttavissa, koska Git-historia on pysyvä.",
      done: "Molemmat kehityspalvelimet käynnistyvät ohjeen komennoilla; repo on GitHubissa README:n ja ensimmäisen commitin kanssa; kysymyslista on ohjaajalla ja vastaukset tai avoimet asiat, mukaan lukien katselmoijien tilanne, on kirjattu.",
      record: "Kirjoita työviikon 1 merkintään: toimeksiannon epäselvät kohdat, kysymyslistan sisältö, ohjaajan vastaukset, repositoryn linkki, ensimmäisen commitin tunnus ja katselmoijien etsinnän tilanne.",
      skills: ["kehitysympäristö (p1)", "versionhallinta (s12)", "Vite- ja Vue-projektin luonti ja konfigurointi (k1)"],
      steps: [
        ["Lue toimeksianto ja alleviivaa.", "Merkitse epäselvät kohdat: mitä asiakas tarkalleen haluaa, mitä hän on rajannut pois ja mitä hän ei ole sanonut ääneen."],
        ["Muotoile kysymyslista.", "Kirjoita vähintään kuusi kysymystä ja vie ne ohjaajalle. Merkitse jokainen vastaus päätökseksi, oletukseksi tai avoimeksi asiaksi."],
        ["Sovi julkisen repon asiat.", "Yksityisyystarkistus, tekijänimi ja alaikäisellä huoltajan suostumus ohjaajan kautta. Käynnistä samalla katselmoijien etsintä viikkoja 10 ja 16 varten — molemmat pysyvät avoimina asioina, kunnes vastaus on saatu."],
        ["Luo repository ja kansiot.", "Kansiot frontend/, backend/ ja project-docs/ sekä README ja .gitignore."],
        ["Alusta frontti ja backend.", "Luo Vite+Vue-projekti ja FastAPI-sovellus ja käynnistä molemmat kehityspalvelimet."],
        ["Committaa ja kirjaa.", "Tee ensimmäinen commit ja kirjoita viikon projektipäiväkirjamerkintä."]
      ],
      help: {
        title: "Perusta repository ja käynnistä molemmat palvelimet",
        tree: "noppakauppa/\n├─ frontend/          Vue 3 + Vite\n│  ├─ src/\n│  │  ├─ components/\n│  │  ├─ views/\n│  │  └─ main.js\n│  └─ package.json\n├─ backend/           FastAPI + SQLite\n│  ├─ main.py\n│  ├─ requirements.txt\n│  └─ .env.example\n├─ project-docs/      suunnitelma, päiväkirja, muistiot\n├─ README.md\n└─ .gitignore",
        actions: [
          "Luo kansiorakenne ja .gitignore (node_modules/, __pycache__/, *.db, .env).",
          "Alusta frontti: npm create vite@latest frontend -- --template vue, sitten npm install ja npm run dev.",
          "Alusta backend: virtuaaliympäristö, pip install fastapi uvicorn, sitten uvicorn main:app --reload.",
          "git init, ensimmäinen commit, luo GitHubiin repository ja push."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] npm run dev vastaa selaimessa\n[ ] uvicorn main:app --reload vastaa selaimessa\n[ ] /docs-sivu aukeaa backendistä\n[ ] .gitignore estää node_modules, .env ja *.db\n[ ] README kertoo mitä tehdään ja miten projekti käynnistetään\n[ ] kysymyslista on project-docs-kansiossa\n[ ] ensimmäinen commit on pushattu",
        test: "Sulje molemmat terminaalit, avaa ne uudelleen ja käynnistä frontti ja backend pelkän README:n komennoilla — molempien pitää vastata selaimessa.",
        links: [
          ["Vite: Getting Started", "https://vite.dev/guide/"],
          ["FastAPI: First Steps", "https://fastapi.tiangolo.com/tutorial/first-steps/"]
        ]
      },
      example: "Kysymyslista, jossa on muun muassa ”pitääkö tilauksesta lähteä sähköposti-ilmoitus vai riittääkö näkymä?” ja ”mitkä kategoriat teillä on käytössä liikkeessä?”, sekä ohjaajan vastaus kunkin kysymyksen perässä.",
      notEnough: "”Loin repon ja projektit” ilman kysymyslistaa ja ilman että backend oikeasti käynnistyy."
    },

    2: {
      type: "pohjustus",
      feature: "Viikon jälkeen tekninen suunnitelma on olemassa: priorisoidut käyttäjätarinat, SQLite-tietomalli, tietovarastovertailu, rautalangat ja P0-tehtävät issueina — ja teemapäätös on lyöty lukkoon.",
      excerpt: "En halua tähän ensimmäiseen versioon maksunvälitystä.",
      connection: "Viikon 1 kysymysten vastaukset muuttuvat nyt tarinoiksi, tauluiksi ja tehtäviksi. Tästä suunnitelmasta loput viikot ottavat järjestyksensä.",
      deliverable: "suunnitelma.md tarinoineen, tietomallikaavio, tietovarastovertailu, hyväksytyt rautalangat ja vähintään kahdeksan issueta.",
      why: "Ilman tietomallia ostoskori ja tilaus rakennetaan kahdesti; ilman P0-rajausta featurelista kasvaa eikä mikään valmistu.",
      done: "suunnitelma.md:ssä on tarinat prioriteetteineen, tietomallikaavio, tietovarastoperustelu ja teemapäätös; issueita on vähintään kahdeksan ja P0 on merkitty; rautalankojen hyväksyntä on kirjattu — kuka hyväksyi ja mitä hän sanoi. Hyväksyjäksi käy ohjaaja asiakkaan äänenä, jos katselmoijaa ei ole vielä nimetty.",
      record: "Kirjoita työviikon 2 merkintään: teemapäätös perusteluineen, tietovarastovalinta, kuka hyväksyi rautalangat ja mitä hän sanoi, sekä linkki issue-listaan.",
      skills: ["asiakastarpeen selvittäminen (s1)", "priorisointi ja tehtäviksi jako (s4, s5)", "tietovaraston valinta (s8)", "kirjaston mahdollisuudet ja rajoitteet (k2)"],
      resources: [["Avaa suunnitelmalomake", "#suunnitelma", false]],
      steps: [
        ["Poimi käyttäjät ja teot.", "Kirjoita toimeksiannosta käyttäjätarinat hyväksymiskriteereineen: asiakas, henkilökunta, yrittäjä."],
        ["Priorisoi P0, P1 ja P2.", "Perustele rajaus ja kirjaa maksunvälitys eksplisiittisesti pois rajatuksi."],
        ["Piirrä tietomalli.", "Taulut, sarakkeet ja suhteet: tuote, kategoria, käyttäjä rooleineen, tilaus ja tilausrivi."],
        ["Kirjoita tietovarastovertailu.", "Vertaa SQLite, JSON-tiedosto ja PostgreSQL datan rakenteen, käyttötilanteen ja laajuuden perusteella ja perustele valinta."],
        ["Luonnostele rautalangat ja hyväksytä ne.", "Piirrä päänäkymät ja kirjaa hyväksyjän palaute hänen sanoillaan. Ohjaaja asiakkaan äänenä käy, jos katselmoijaa ei ole vielä nimetty."],
        ["Pilko P0 issueiksi.", "Kirjaa vähintään kahdeksan issueta, joissa jokaisessa on valmis kun -ehto. Yksi issue on noin puolen tai yhden päivän työ."]
      ],
      help: {
        title: "Tietomallin ja käyttäjätarinan työpohjat",
        tree: "tuote        (id, nimi, kategoria_id, hinta, kuvaus, saatavuus)\nkategoria    (id, nimi)\nkayttaja     (id, tunnus, salasana_hash, rooli, nimi, osoite)\ntilaus       (id, kayttaja_id, luotu, tila)\ntilausrivi   (id, tilaus_id, tuote_id, maara, hinta_tilaushetkella)\n\nkategoria 1 — n tuote\nkayttaja  1 — n tilaus\ntilaus    1 — n tilausrivi\ntuote     1 — n tilausrivi",
        actions: [
          "Täytä taulukot omalla teemallasi: mitä kenttiä juuri sinun tuotteesi tarvitsee?",
          "Kirjoita jokaisesta P0-toiminnosta yksi käyttäjätarina hyväksymiskriteereineen.",
          "Vertaa tietovarastovaihtoehdot kirjallisesti ja perustele valinta omalla datallasi.",
          "Vie tarinat issueiksi ja merkitse P0-tunnisteet."
        ],
        code: "KÄYTTÄJÄTARINAPOHJA\n\n<roolina> haluan <teon>, jotta <hyöty>.\n\nHyväksymiskriteerit\n1. Kun ..., niin ...\n2. Kun ..., niin ...\n3. Virhetilanteessa ... näkyy ...\n\nPrioriteetti: P0 / P1 / P2\nArvio: ___ päivää   ·   Issue: #___",
        test: "Anna tietomallikaaviosi toiselle ihmiselle ja pyydä häntä kertomaan, mihin tauluun tilauksen rivikohtainen hinta tallennetaan. Jos hän ei osaa vastata kaaviosta, kaavio ei ole vielä valmis.",
        links: [["SQLite: Datatypes", "https://www.sqlite.org/datatype3.html"]]
      },
      example: "Tarina ”Asiakkaana haluan hakea pelejä nimellä, jotta löydän etsimäni parissa sekunnissa” ja sen kolme hyväksymiskriteeriä; tilausrivi-taulun perustelu, jossa kerrotaan miksi hinta tallennetaan tilaushetkellä.",
      notEnough: "Tekoälyn geneerinen verkkokauppasuunnitelma, jota ei ole kytketty Nopan Nurkan toimeksiantoon eikä omaan teemapäätökseen."
    },

    3: {
      type: "feature",
      feature: "Viikon jälkeen tuotelista tulee SQLite-kannasta FastAPI-rajapinnan kautta ja renderöityy itse rakennetuissa Vue-komponenteissa — lataus- ja virhetilat mukaan lukien.",
      connection: "Viikon 2 tietomalli muuttuu oikeiksi tauluiksi, ensimmäiseksi endpointiksi ja ensimmäisiksi komponenteiksi. Tästä eteenpäin data on kannassa, ei koodissa.",
      deliverable: "SQLite-kanta seed-datalla, GET /api/tuotteet, TuoteLista- ja TuoteKortti-komponentit sekä testit T01–T02.",
      why: "Data pois koodista on koko kaupan perusta — kovakoodattu lista kaatuu heti, kun henkilökunnan tuotehallinta tulee mukaan viikolla 12.",
      done: "Kehityspalvelin näyttää kannasta tulevat tuotteet; API palauttaa JSONia, mikä on testattu /docs-sivulta; kun backend sammutetaan, käyttäjä näkee virheilmoituksen eikä tyhjää ruutua.",
      record: "Kirjoita työviikon 3 merkintään: mitä seed-dataa loit ja miksi juuri nuo kentät, miten toteutit lataus-, tyhjä- ja virhetilat sekä T01:n ja T02:n odotetut ja toteutuneet tulokset.",
      skills: ["tietovarastoyhteys (s9)", "rajapinnat (s10)", "komponentit ja reaktiivisuus (k3)", "rakenteinen ohjelmointi (p4)"],
      steps: [
        ["Luo taulut.", "Toteuta viikon 2 tietomalli SQLiteen: tuote ja kategoria ensin."],
        ["Kirjoita seed-skripti.", "Noin 20 oman teeman tuotetta kaikilla kentillä. Data on sinun keksimääsi, ei kopioitu oikeasta kaupasta."],
        ["Toteuta endpoint.", "GET /api/tuotteet ja kokeile se FastAPI:n /docs-sivulla ennen frontin koodaamista."],
        ["Rakenna komponentit itse.", "App → TuoteLista → TuoteKortti ja fetch-kutsu. Älä käytä valmista UI-komponenttikirjastoa."],
        ["Toteuta lataus-, tyhjä- ja virhetilat.", "Käyttäjän pitää nähdä, mitä tapahtuu, myös silloin kun mikään ei toimi."],
        ["Aja T01 ja T02 ja committaa.", "Kirjaa odotettu tulos ennen ajoa ja toteutunut tulos ajon jälkeen."]
      ],
      help: {
        title: "Komponenttipuu ja API-kutsun tarkistuslista",
        tree: "App.vue\n└─ TuoteLista.vue        hakee datan, hallitsee tilat\n   ├─ (lataus)           ”Ladataan tuotteita…”\n   ├─ (virhe)            ”Tuotteita ei saatu haettua.”\n   ├─ (tyhjä)            ”Ei tuotteita.”\n   └─ TuoteKortti.vue    yksi tuote, saa propsina",
        actions: [
          "Luo taulut ja aja seed-skripti; tarkista rivimäärä kannasta.",
          "Toteuta GET /api/tuotteet ja kokeile se /docs-sivulla.",
          "Rakenna TuoteLista ja TuoteKortti itse ja välitä tuote propsina.",
          "Toteuta kolme tilaa: lataus, virhe ja tyhjä tulos."
        ],
        code: "API-KUTSUN TARKISTUSLISTA\n[ ] osoite oikein (portti ja polku)\n[ ] CORS sallittu kehityspalvelimen originille\n[ ] vastauksen status tarkistetaan ennen .json()\n[ ] virhe näytetään käyttäjälle, ei vain konsoliin\n[ ] lataustila näkyy heti, ei vasta vastauksen jälkeen\n[ ] tyhjä tulos on oma viestinsä, ei virhe",
        test: "Sammuta backend ja lataa sivu uudelleen: käyttäjän pitää nähdä ymmärrettävä virheilmoitus, ei tyhjää ruutua eikä pelkkää konsolivirhettä.",
        links: [["Vue 3: Components Basics", "https://vuejs.org/guide/essentials/component-basics.html"]]
      },
      example: "Seed-tuote kaikilla kentillä (nimi, kategoria, hinta, kuvaus, saatavuus) ja API-vastauksen muoto kirjattuna päiväkirjaan sellaisena kuin /docs-sivu sen näyttää.",
      notEnough: "Tuotteet kovakoodattuna komponenttiin ”väliaikaisesti” tai valmiin komponenttikirjaston taulukko datan näyttämiseen."
    },

    4: {
      type: "feature",
      feature: "Viikon jälkeen vue-router on käytössä: kategorianäkymä, tuotesivu omalla URL:llaan ja 404-näkymä. Navigointi toimii puhelimella.",
      excerpt: "Pelejä pitää voida selailla kategorioittain ja hakea nimellä, koska kukaan ei jaksa selata kahtasataa peliä yhtenä listana.",
      connection: "Viikon 3 tuotelista saa rakenteen: kategoriat ja tuotesivut saavat omat osoitteensa, joita voi jakaa ja avata suoraan.",
      deliverable: "vue-router konfiguroituna, kategorialistaus, kategoriakohtainen näkymä, tuotesivu reittiparametrilla, 404-reitti ja mobiilinavigaatio.",
      why: "Ilman reititystä haku, kori ja hallintanäkymät eivät saa osoitteita — ja URL:ien toimivuus päivityksellä on juuri se kohta, jossa SPA-julkaisut tyypillisesti hajoavat viikolla 5. Saavutettavuus rakennetaan sisään nyt, jotta viikon 13 tarkistus on todentamista eikä uudelleenrakentamista.",
      done: "Jokaisella tuotteella ja kategorialla on oma URL, joka toimii myös selaimen päivityksellä; tuntematon osoite näyttää 404-näkymän; navigointi toimii omalla puhelimella ja perusnäkymissä pääsee liikkumaan näppäimistöllä.",
      record: "Kirjoita työviikon 4 merkintään: reittikartta, miksi ulkoinen reitityskomponentti tarvitaan, valitsemasi responsiivisuuden taitekohdat perusteluineen ja mitä puhelintesti paljasti.",
      skills: ["ulkoisen komponentin käyttöönotto: vue-router (k4)", "käyttöliittymä suunnitelmista (p6)", "responsiivisuus ja saavutettavuuden perusta"],
      steps: [
        ["Asenna router ja piirrä reittikartta.", "Kirjaa samalla, miksi reititys kannattaa hoitaa ulkoisella komponentilla eikä itse tehdyllä ratkaisulla."],
        ["Toteuta kategoria-endpoint ja -näkymä.", "Kategorialistaus ja kategoriakohtainen tuotenäkymä."],
        ["Toteuta tuotesivu reittiparametrilla.", "Osoitteen pitää toimia myös silloin, kun se avataan suoraan ilman navigointia."],
        ["Lisää 404-reitti.", "Tuntematon osoite näyttää oman näkymänsä, ei tyhjää sivua."],
        ["Toteuta mobiilinavigaatio ja testaa puhelimella.", "Käytä semanttista HTML:ää, selkeää otsikkohierarkiaa ja alt-tekstejä. Päätä responsiivisuuden taitekohdat ja kirjaa ne suunnitelmaan."]
      ],
      help: {
        title: "Reittikartan pohja",
        tree: "/                       EtusivuNakyma      kaikki tuotteet\n/kategoria/:id          KategoriaNakyma    kategorian tuotteet\n/tuote/:id              TuoteNakyma        yksi tuote\n/kori                   KoriNakyma         (viikko 7)\n/kirjaudu               KirjautumisNakyma  (viikko 8)\n/tilaukset              HistoriaNakyma     (viikko 9, suojattu)\n/hallinta/tuotteet      TuoteHallinta      (viikko 12, roolisuojattu)\n/:pathMatch(.*)*        EiLoydyNakyma      404",
        actions: [
          "Asenna vue-router ja määrittele reitit yllä olevan kartan mukaan.",
          "Toteuta kategoria-endpoint backendiin ja kytke se kategorianäkymään.",
          "Hae tuotesivun data reittiparametrin perusteella ja käsittele tuntematon id.",
          "Testaa jokainen osoite selaimen päivityksellä ja omalla puhelimella."
        ],
        code: "REITTIKARTAN POHJA\n\npolku            | komponentti | mistä data tulee | suojaus myöhemmin\n-----------------+-------------+------------------+------------------\n                 |             |                  |\n\nTAITEKOHDAT\nkapea  ___ px asti:  yksi sarake, valikko piiloon\nkeskiverto ___ px:   kaksi saraketta\nleveä  ___ px:       kolme saraketta\nPerustelu: ______________________________________",
        test: "Avaa yhden tuotteen osoite suoraan uudessa välilehdessä ja paina selaimen päivitystä — sivun pitää latautua oikein. Kokeile sama omalla puhelimella.",
        links: [["Vue Router: Essentials", "https://router.vuejs.org/guide/"]]
      },
      example: "Reittitaulukko, jossa lukee /kategoria/:id → KategoriaNakyma → hakee tuotteet kategorialla, ja kuvakaappaus samasta näkymästä omalta puhelimelta.",
      notEnough: "Yksi pitkä sivu, jossa kategoriat ovat ankkurilinkkejä — ei reittejä eikä jaettavia osoitteita."
    },

    5: {
      type: "feature",
      feature: "Viikon jälkeen NoppaKauppa on julkisessa osoitteessa — frontend, backend ja kanta — ja julkaisualustan valinta on vertailtu ja perusteltu.",
      connection: "Viikkojen 3 ja 4 kauppa siirtyy pois omalta koneelta. Loput viikot tehdään ympäristössä, jossa julkaisu on jo kertaalleen onnistunut.",
      deliverable: "Julkaistu frontend ja backend, alustavertailu suunnitelmassa, ympäristömuuttujat kunnossa, käyttöönotto-ohjeen alku READMEssä ja testi T03.",
      why: "Tyhjähkö kauppa tuotannossa on parempi kuin valmis kauppa localhostissa — julkaisun ongelmat, kuten CORS, polut ja ympäristömuuttujat, löytyvät nyt eikä viikolla 17.",
      done: "Julkinen URL näyttää tuotelistan kannasta; osoite toimii puhelimella ja toisella koneella; salaisuudet ja .env-tiedosto eivät ole repositoryssä.",
      record: "Kirjoita työviikon 5 merkintään: alustavertailu ja valintasi perustelu, mitä julkaisussa meni pieleen ja miten korjasit sen, sekä T03:n tulos toisella laitteella.",
      skills: ["julkaisu tuotantoympäristöön (s14)", "kehitys- ja tuotantokonfiguraatio (k1)", "salaisuuksien hallinta (s11:n pohjustus)"],
      steps: [
        ["Tee vertailutaulukko.", "Vähintään kolme vaihtoehtoa: hinta, rajoitteet ja SQLite-tiedoston pysyvyys. Kirjaa myös ilmaistason rajoitteet, kuten uneen menevä palvelin."],
        ["Konfiguroi backendin tuotantoasetukset.", "CORS-originit ja ympäristömuuttujat. .env ei mene repositoryyn, .env.example menee."],
        ["Buildaa frontti ja osoita se tuotanto-APIin.", "Kehitys- ja tuotanto-osoitteen ero hoidetaan ympäristömuuttujalla, ei koodissa vaihtamalla."],
        ["Julkaise molemmat.", "Vie frontend ja backend valitsemallesi alustalle ja tarkista lokit."],
        ["Savutestaa toisella laitteella ja kirjaa T03.", "Avaa julkinen osoite laitteella, jolla et ole kehittänyt, ja kirjaa tulos."]
      ],
      help: {
        title: "Julkaisun tarkistuslista",
        tree: "kehitys                     tuotanto\n--------------------------- ---------------------------\nnpm run dev                 npm run build → dist/\nVITE_API_URL=localhost      VITE_API_URL=julkinen osoite\nCORS: localhost-origin      CORS: julkaisun origin\nSQLite paikallinen tiedosto SQLite alustan levyllä\n.env (ei repoon)            alustan ympäristömuuttujat",
        actions: [
          "Kirjoita alustavertailu suunnitelmaan ennen kuin luot yhtään tiliä.",
          "Siirrä API-osoite ympäristömuuttujaan ja tarkista, ettei koodissa ole kovakoodattua localhostia.",
          "Julkaise backend ensin, testaa sen /docs-sivu, julkaise sitten frontti.",
          "Lisää READMEen käyttöönoton ensimmäinen versio."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] build-komento toimii puhtaassa kansiossa\n[ ] API-osoite tulee ympäristömuuttujasta\n[ ] CORS-origin vastaa julkaistua frontin osoitetta\n[ ] ympäristömuuttujat listattu .env.example-tiedostoon\n[ ] .env ja *.db ovat .gitignoressa\n[ ] julkinen osoite avautuu toisella laitteella\n[ ] julkaisuloki tallennettu tai kuvakaapattu",
        test: "Avaa julkinen osoite laitteella, jolla et ole koskaan kehittänyt, ja tarkista että tuotelista tulee kannasta. Kirjaa tulos testinä T03.",
        links: [["Vite: Env Variables and Modes", "https://vite.dev/guide/env-and-mode"]]
      },
      example: "Kolmen alustan vertailu rajoitteineen ja päätös: ”Render, koska ilmainen taso riittää ja tukee sekä staattista sivua että Python-palvelua” — sekä kirjaus siitä, mitä ilmaistason rajoitteita hyväksyit.",
      notEnough: "”Julkaisin Renderiin koska ohjeessa luki niin” — ilman vertailua ja ilman toisen laitteen savutestiä."
    },

    6: {
      type: "feature",
      feature: "Viikon jälkeen sanahaku löytää tuotteet nimen osalla kirjainkoosta riippumatta; tyhjä tulos ja backend-virhe on käsitelty, ja kysely on parametrisoitu.",
      excerpt: "Pelejä pitää voida selailla kategorioittain ja hakea nimellä, koska kukaan ei jaksa selata kahtasataa peliä yhtenä listana.",
      connection: "Kategoriat ovat viikolta 4, ja nyt asiakas löytää tuotteen myös suoraan nimellä. Samalla käyttäjän syöte kulkee ensimmäistä kertaa kantaan asti.",
      deliverable: "Haku-endpoint parametrisoidulla SQL:llä, hakukenttä ja tuloslista, tyhjän tuloksen ja virheen käsittely sekä testit T04–T05.",
      why: "Haku on ensimmäinen paikka, jossa käyttäjän syöte kulkee kantaan asti — täällä ratkaistaan, opitaanko syötteiden käsittely oikein vai jääkö aukko koko sovellukseen.",
      done: "Haku ”nop” löytää ”Nopanheitto”-tuotteen; haku merkkijonolla '; DROP TABLE palauttaa nolla osumaa eikä kaada mitään; tyhjä tulos opastaa käyttäjää.",
      record: "Kirjoita työviikon 6 merkintään: miten parametrisoit kyselyn ja miksi, miten ratkaisit hakukentän viiveen tai Enter-painalluksen sekä T04:n ja T05:n odotetut ja toteutuneet tulokset.",
      skills: ["rajapinnat ja tiedon käsittely (s10)", "toimintalogiikka (s7)", "syötteiden tietoturva (s11)"],
      steps: [
        ["Toteuta haku-endpoint.", "Kyselyparametri ja hakulogiikka; kokeile endpoint ensin /docs-sivulla."],
        ["Parametrisoi kysely ja dokumentoi miksi.", "Kirjoita omin sanoin, mitä merkkijonojen yhdistäminen SQL:ään mahdollistaisi."],
        ["Rakenna hakukomponentti.", "Päätä, hakeeko kenttä Enterillä vai viiveellä kirjoituksen jälkeen, ja perustele valinta."],
        ["Toteuta tyhjä ja virhetila.", "Tyhjä tulos on opastava teksti, ei virhe; backend-virhe on oma viestinsä."],
        ["Aja T04 ja T05.", "Kirjaa odotettu tulos ennen ajoa ja liitä toteutunut tulos committiin."]
      ],
      help: {
        title: "Hakupolun kytkentäkaavio",
        tree: "hakukenttä (input)\n  ↓ komponentin tila\nfetch(\"/api/tuotteet?haku=...\")\n  ↓\nGET /api/tuotteet?haku=…\n  ↓ parametrisoitu SQL\nSELECT * FROM tuote WHERE nimi LIKE ?\n  ↓\ntuloslista · tyhjä tulos · virheilmoitus",
        actions: [
          "Toteuta endpoint kyselyparametrilla ja testaa se /docs-sivulla.",
          "Käytä aina parametrisidontaa (?-paikkamerkit), älä koskaan merkkijonojen yhdistämistä.",
          "Tee kirjainkoosta riippumaton haku ja tarkista se molemmilla kirjoitusasuilla.",
          "Toteuta tyhjä tulos ja virhetila omina näkyminään."
        ],
        code: "TESTITAPAUKSEN MUOTO\n\nTunnus:      T04\nLähtötila:   kanta seed-datalla, haku tyhjä\nToiminta:    kirjoita hakukenttään ”nop”\nOdotus:      (kirjoita ENNEN ajoa)\nHavainto:    (kirjoita ajon jälkeen)\nTulos:       ok / ei ok   ·   commit: ______",
        test: "Kirjoita hakukenttään '; DROP TABLE tuote; -- ja paina hakua: tuloksena on nolla osumaa, sovellus pysyy pystyssä ja kanta on ehjä.",
        links: [["SQLite: Prepared statements (Python sqlite3)", "https://docs.python.org/3/library/sqlite3.html"]]
      },
      example: "Testitapaus muodossa ”syöte → odotettu tulos → toteutunut tulos → commit”: haku erikoismerkeillä ei riko sovellusta eikä muuta kantaa.",
      notEnough: "Haku, joka suodattaa vain jo selaimeen ladattua listaa ilman kirjattua perustelua ja rajausta."
    },

    7: {
      type: "feature",
      feature: "Viikon jälkeen Pinia-ostoskori toimii: lisää, poista, muuta määrää, summa laskee oikein ja kori säilyy sivun päivityksen yli — ja koko ominaisuus syntyi omassa haarassa ja yhdistyi pääversioon pull requestilla.",
      excerpt: "Haluan, että asiakas voi kerätä pelejä ostoskoriin, poistaa niitä siitä ja lopuksi tehdä tilauksen — tai lähteä sivulta tilaamatta, sekin on ihan sallittua.",
      connection: "Haku ja kategoriat vievät asiakkaan tuotteen luo; nyt tuote päätyy koriin. Kori on se tila, jonka päälle viikon 9 tilaus rakennetaan.",
      deliverable: "Kori-store, korinäkymä määränmuutoksineen ja summineen, yhdistetty pull request, päätösmuistio korin tallennuksesta, testit T06–T07 ja virheenkorjausketju K1.",
      why: "Kori on kaupan tila — jos tilanhallinta hajoaa komponentteihin, tilausviikko kaatuu. Haara ja pull request ovat lisäksi ainoa tapa näyttää hallittu yhdistäminen (s13) yksin tehdessä.",
      done: "Tuotteita voi lisätä ja poistaa, määrää muuttaa ja summa täsmää; kori säilyy sivun päivityksessä; pull request on yhdistetty ja mahdollinen konflikti on ratkaistu.",
      record: "Kirjoita työviikon 7 merkintään: korin tallennuspäätös perusteluineen ja ohjaajan kommentti, PR-linkki, T06:n ja T07:n tulokset sekä K1-ketju kokonaisena.",
      skills: ["Pinia-tilanhallinta (k3)", "haara ja pull request (s13)", "ratkaisuvaihtoehtojen vertailu (p9)"],
      steps: [
        ["Vertaa korin tallennusvaihtoehdot.", "Pinia ja localStorage vastaan backend-kori. Käy vertailu läpi ohjaajan kanssa ja kirjaa päätös perusteluineen."],
        ["Luo haara ja toteuta store.", "Haara feature/ostoskori; storeen state, getterit ja actionit."],
        ["Rakenna korikomponentit.", "Korinäkymä, määrän muutos ja poisto sekä summan näyttö."],
        ["Lisää tallennuksen synkkaus.", "Toteuta valitsemasi tallennustapa niin, että kori säilyy sivun päivityksen yli."],
        ["Avaa pull request ja yhdistä.", "Katselmoi oma diff ennen yhdistämistä ja ratkaise mahdollinen konflikti."],
        ["Aja T06 ja T07 ja kirjaa K1.", "Kirjaa virheenkorjausketju aidosta havainnosta: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti."]
      ],
      help: {
        title: "Storen rakennepohja ja getterien tarkistuslista",
        tree: "stores/kori.js\n├─ state      rivit: [{ tuoteId, nimi, hinta, maara }]\n├─ getters    kappalemaara, summa, onTyhja\n└─ actions    lisaa(tuote), poista(tuoteId),\n              muutaMaara(tuoteId, maara), tyhjenna()",
        actions: [
          "Kirjoita vertailu ja käy se ohjaajan kanssa läpi ennen toteutusta.",
          "Luo haara feature/ostoskori ja tee muutokset vain siinä.",
          "Toteuta store ja kytke komponentit siihen — älä pidä koria komponentin omassa tilassa.",
          "Avaa PR, lue oma diff rivi riviltä ja yhdistä vasta sen jälkeen."
        ],
        code: "GETTERIEN TARKISTUSLISTA\n[ ] summa laskee määrät mukaan, ei vain rivien hintoja\n[ ] summa pyöristyy oikein rahaksi\n[ ] kappalemäärä näkyy navigaatiossa\n[ ] tyhjä kori tunnistetaan omana tilanaan\n[ ] määrää ei voi asettaa nollaksi tai negatiiviseksi\n[ ] saman tuotteen lisäys kasvattaa määrää, ei luo uutta riviä",
        test: "Lisää kaksi eri tuotetta, muuta toisen määräksi 3, päivitä sivu ja tarkista että kori ja summa ovat ennallaan.",
        links: [["Pinia: Core Concepts", "https://pinia.vuejs.org/core-concepts/"]]
      },
      example: "K1-ketju kokonaisena: havainto ”määräksi voi antaa -1” → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti.",
      notEnough: "Kori, joka toimii vain lisäyssuuntaan ja tyhjenee päivityksessä; ”vertailu”, jossa toinen vaihtoehto on olkinukke."
    },

    8: {
      type: "feature",
      feature: "Viikon jälkeen rekisteröityminen ja kirjautuminen toimivat: salasanat tallennetaan vain hashattuna, istunto hoidetaan perustellulla ratkaisulla, ja käyttäjällä on roolikenttä tulevia henkilökuntanäkymiä varten.",
      excerpt: "Tilaamista varten asiakkaan pitää rekisteröityä, ja hänen pitää päästä katsomaan omaa tilaushistoriaansa ja korjaamaan omia yhteystietojaan.",
      connection: "Kori on olemassa, mutta tilaus tarvitsee tekijän. Tunnukset ja roolit ovat sekä viikon 9 tilauksen että viikon 12 hallintanäkymien edellytys.",
      deliverable: "Users-taulu roolikenttineen, rekisteröityminen ja kirjautuminen, auth-store, päätösmuistio istuntoratkaisusta ja testit T08–T09.",
      why: "Tietoturva (s11) on tämän projektin painavin yksittäinen vaatimus — verkkokaupassa on oikeiden ihmisten salasanoja muistuttavaa dataa, ja salasanakäsittely on sen ydin, jota ei paikata jälkikäteen.",
      done: "Kannassa ei näy yhtään selkokielistä salasanaa; väärä salasana ja tuntematon tunnus antavat saman yleisen virheilmoituksen; kirjautumistila säilyy sivun päivityksessä ja uloskirjautuminen tyhjentää sen.",
      record: "Kirjoita työviikon 8 merkintään: istuntoratkaisun vertailu ja päätös ohjaajan kommentilla, mitä hash-kirjastoa käytit ja miksi, sekä T08:n ja T09:n tulokset.",
      skills: ["tietoturva: salasanat ja istunnot (s11)", "toimintalogiikka (s7)", "lomakkeet ja käyttäjäpalaute (p6, p7)"],
      steps: [
        ["Kirjoita vertailu ja päätös.", "JWT vastaan eväste-sessio: hyödyt ja haitat omin sanoin, päätös ja ohjaajan kommentti."],
        ["Lisää users-taulu roolikenttineen.", "Rooli on mukana heti, vaikka henkilökuntanäkymät tulevat vasta viikolla 12."],
        ["Toteuta rekisteröinti-endpoint.", "Validoinnit ja salasanan hashaus vakiintuneella kirjastolla — älä koskaan omaa kryptausta."],
        ["Toteuta kirjautuminen ja istunnon välitys.", "Uloskirjautuminen tyhjentää istunnon myös selaimen puolelta."],
        ["Rakenna lomakkeet virheviesteineen.", "Virheilmoitus ei saa paljastaa, kumpi meni väärin: tunnus vai salasana."],
        ["Aja T08 ja T09.", "Kirjaa odotukset ennen ajoa ja tulokset ajon jälkeen."]
      ],
      help: {
        title: "Auth-virran kaavio ja ”mitä ei koskaan tehdä” -lista",
        tree: "lomake (tunnus + salasana)\n  ↓\nPOST /api/kirjaudu\n  ↓ tarkista hash (bcrypt tms.)\nistunto: token tai eväste\n  ↓\nauth-store (Pinia): kirjautunut, rooli\n  ↓\nsuojattu reitti · suojattu endpoint",
        actions: [
          "Kirjoita vertailumuistio ennen toteutusta ja pyydä ohjaajan kommentti.",
          "Ota käyttöön hash-kirjasto ja tarkista kannasta, miltä tallennettu salasana näyttää.",
          "Toteuta kirjautuminen ja uloskirjautuminen sekä auth-store.",
          "Yhdenmukaista virheilmoitukset niin, ettei niistä voi päätellä tunnuksen olemassaoloa."
        ],
        code: "MITÄ EI KOSKAAN TEHDÄ\n[ ] omaa salasanan salausta tai md5/sha1-tiivistettä\n[ ] salasanaa lokiin, virheilmoitukseen tai URL:iin\n[ ] eri virheilmoitusta väärälle tunnukselle ja väärälle salasanalle\n[ ] tokenia selaimen tallennustilaan ilman kirjattua perustelua\n[ ] roolitarkistusta pelkästään käyttöliittymässä\n[ ] salaisuuksia repositoryyn",
        test: "Avaa kanta ja katso users-taulun rivit: salasanan pitää näkyä hashina (esim. alkaen $2b$), eikä yhtään selkokielistä salasanaa saa löytyä.",
        links: [["OWASP: Password Storage Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"]]
      },
      example: "Kantarivi, jossa hash alkaa $2b$…, ja päätösmuistio, jossa JWT:n ja eväste-session hyödyt ja haitat on kirjoitettu omin sanoin.",
      notEnough: "Salasanat md5:llä tai selkokielisenä ”koska tämä on vain harjoitus”; virheilmoitus, joka paljastaa kumpi meni väärin."
    },

    9: {
      type: "feature",
      feature: "Viikon jälkeen kirjautunut asiakas tilaa korin sisällön ilman maksunvälitystä: tilaus tallentuu riveineen tilaushetken hinnoilla, kori tyhjenee ja tilaus näkyy omassa tilaushistoriassa.",
      excerpt: "En halua tähän ensimmäiseen versioon maksunvälitystä. Tilaus riittää: minä saan tiedon tilauksesta, ja hoidan maksun asiakkaan kanssa noudon tai toimituksen yhteydessä kuten tähänkin asti.",
      connection: "Kori viikolta 7 ja tunnukset viikolta 8 yhdistyvät: tästä syntyy asiakkaan koko ostopolku alusta loppuun.",
      deliverable: "Tilauksen luonti transaktiona, tilauslomake validointeineen, tilaushistorianäkymä, perustelu k4-lisäpaketista ja testit T10–T11.",
      why: "Tilaus on kaupan liiketoimintalogiikan huipentuma ja asiakkaan ”valmiin” määritelmän ydin — ja hinnan tallentaminen tilaushetkellä on se suunnittelupäätös, joka erottaa toimivan tietomallin rikkinäisestä.",
      done: "Tilaus näkyy kannassa riveineen ja tilaushetken hinnoilla; historia näyttää vain omat tilaukset; tyhjää koria ei voi tilata eikä kirjautumaton pääse tilaamaan.",
      record: "Kirjoita työviikon 9 merkintään: miten toteutit transaktion, minkä validointiratkaisun valitsit ja miksi sekä T10:n ja T11:n odotetut ja toteutuneet tulokset.",
      skills: ["toimintalogiikka (s7)", "ohjelmiston toiminnot suunnitelmista (p7)", "ulkoinen komponentti perustellusti (k4)", "rakenteinen ohjelmointi (p4)"],
      steps: [
        ["Ota tilaustaulut käyttöön.", "Tilaus ja tilausrivi viikon 2 tietomallin mukaan."],
        ["Toteuta POST /api/tilaukset transaktiona.", "Tilaus ja sen rivit tallentuvat yhtenä kokonaisuutena tai eivät lainkaan."],
        ["Valitse ja perustele validointiratkaisu.", "Ota käyttöön oma perusteltu lisäpaketti (k4) tai perustele kirjallisesti, miksi oma validointi riittää."],
        ["Rakenna tilauslomake ja historianäkymä.", "Yhteystiedot lomakkeelle; historiassa näkyvät vain omat tilaukset."],
        ["Tyhjennä kori onnistumisen jälkeen.", "Epäonnistunut tilaus ei saa tyhjentää koria."],
        ["Aja T10 ja T11.", "Kirjaa odotukset ennen ajoa ja liitä tulokset committiin."]
      ],
      help: {
        title: "Tilausvirran sekvenssikaavio ja transaktiomuistilista",
        tree: "kori (Pinia)\n  ↓ tilauslomake: yhteystiedot\nPOST /api/tilaukset  { rivit, yhteystiedot }\n  ↓ BEGIN\n  ├─ INSERT tilaus\n  ├─ INSERT tilausrivi × n  (hinta tilaushetkellä)\n  └─ COMMIT   (virhe → ROLLBACK)\n  ↓\nkori tyhjenee → GET /api/tilaukset (vain omat)",
        actions: [
          "Toteuta tilauksen luonti yhtenä transaktiona ja testaa myös keskeytys.",
          "Kopioi tuotteen hinta tilausriville — älä viittaa nykyhintaan.",
          "Suojaa tilaus- ja historia-endpointit kirjautumisella.",
          "Valitse validointiratkaisu ja kirjaa perustelu ja riippuvuusvaikutus suunnitelmaan."
        ],
        code: "TRANSAKTIOMUISTILISTA\n[ ] tilaus ja rivit samassa transaktiossa\n[ ] virhe kesken → ROLLBACK, ei puolikasta tilausta\n[ ] rivin hinta kopioidaan tilaushetkellä\n[ ] tyhjää koria ei voi tilata\n[ ] kirjautumaton saa 401, ei tyhjää tilausta\n[ ] historia palauttaa vain kirjautuneen omat tilaukset",
        test: "Tee tilaus, muuta sen jälkeen tuotteen hintaa kannassa ja avaa tilaushistoria: vanhan tilauksen summan pitää pysyä ennallaan.",
        links: [["FastAPI: Dependencies", "https://fastapi.tiangolo.com/tutorial/dependencies/"]]
      },
      example: "Tilausrivi tallentaa hinnan tilaushetkellä — ja perustelu miksi: hinnanmuutos ei saa muuttaa vanhoja tilauksia.",
      notEnough: "Tilaus, joka viittaa tuotteen nykyhintaan; lisäpaketti asennettuna ilman perustelua tai kokonaan käyttämättä jätettynä."
    },

    10: {
      type: "katselmointi",
      feature: "Viikon jälkeen ulkopuolinen henkilö asiakkaan roolissa on kokeillut julkaistua kauppaa tehtäväradalla — löydä peli, koriin, tilaa — palaute on kirjattu hänen omin sanoin erillään omasta tulkinnasta, ja muutokset on sovittu issueiksi.",
      excerpt: "Haluaisin nähdä toimivan version jo puolivälissä, että ehdin sanoa jos jokin on pielessä.",
      connection: "Ostopolku on kasassa viikolta 9. Nyt sitä kokeilee ihminen, joka ei tiedä miten se on rakennettu — ja hänen havaintonsa ohjaavat vaiheen C työjärjestyksen.",
      deliverable: "Katselmointimuistio rooleineen ja sitaatteineen, vähintään kolme palauteissueta prioriteetteineen ja asiakaskielinen yhteenveto.",
      why: "Palaute puolivälissä ehtii vielä muuttaa suuntaa — viikolla 16 se ei ehdi. Tämä on myös se osa projektia, jota ei voi tuottaa tekoälyllä.",
      done: "Katselmointimuistiossa on nimetty rooli, testaajan omat sanat ja niistä erillään oma tulkinta; vähintään kolme palautekohtaa on issueina prioriteetteineen; asiakasyhteenveto on kirjoitettu.",
      record: "Kirjoita työviikon 10 merkintään: kuka testasi ja missä roolissa, kolme vaikuttavinta sitaattia, oma tulkintasi niistä erikseen sekä issue-numerot ja prioriteetit.",
      skills: ["version katselmointi (s3)", "asiakaslähtöinen viestintä (s2)", "ratkaisujen arviointi yhdessä (p10)"],
      steps: [
        ["Sovi aika ja rooli.", "Kutsu nimetty ulkopuolinen: toinen opiskelija, työpaikkaohjaaja tai muu sovittu henkilö — ei oma ohjaaja."],
        ["Kirjoita tehtävärata.", "Kolme tehtävää julkaistulla osoitteella. Älä neuvo kesken suorituksen."],
        ["Havainnoi ja kirjaa sitaatit.", "Kirjoita testaajan sanat sellaisenaan, myös epäröinnit ja väärät klikkaukset."],
        ["Erota oma tulkinta sitaateista.", "Muistiossa on kaksi saraketta: mitä hän sanoi ja mitä se tarkoittaa."],
        ["Kirjaa issuet ja prioriteetit.", "Muuta palaute issueiksi ja priorisoi ne ohjaajan kanssa."],
        ["Kirjoita asiakaskielinen yhteenveto.", "Kerro ilman teknistä jargonia, mitä testattiin, mitä löytyi ja mitä seuraavaksi tehdään."]
      ],
      help: {
        title: "Katselmointimuistion pohja",
        tree: "1. Testaaja ja rooli\n2. Ympäristö (laite, selain, osoite, versio/commit)\n3. Tehtävärata\n   T1 löydä peli · T2 lisää koriin · T3 tee tilaus\n4. Havainnot: sitaatit sanasta sanaan\n5. Oma tulkinta (erillinen osio)\n6. Sovitut muutokset: issue + prioriteetti + valmis kun\n7. Asiakaskielinen yhteenveto",
        actions: [
          "Sovi testaaja ja aika hyvissä ajoin — tämä on viikon kriittisin järjestely.",
          "Kirjoita tehtävärata valmiiksi ennen tapaamista.",
          "Ole hiljaa kun testaaja kokeilee; kirjaa jokainen epäröinti.",
          "Käy issuet ja prioriteetit läpi ohjaajan kanssa saman viikon aikana."
        ],
        code: "HAVAINTOTAULUKKO\n\naika | tehtävä | testaajan sanat (sitaatti) | oma tulkinta | issue\n-----+---------+----------------------------+--------------+------\n     |         |                            |              |\n\nSääntö: sitaattisarakkeeseen ei kirjoiteta omaa selitystä.",
        test: "Anna muistio ohjaajalle ja pyydä häntä osoittamaan, mitkä kohdat ovat testaajan sanoja ja mitkä sinun tulkintaasi. Jos hän ei erota niitä, muistio ei ole valmis.",
        links: [["Nielsen Norman Group: Thinking Aloud", "https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/"]]
      },
      example: "Sitaatti ”en löytänyt ostoskoria puhelimella” ja oma tulkinta ”korikuvake on liian pieni mobiilinavigaatiossa” selvästi erikseen kirjattuina.",
      notEnough: "”Testaaja tykkäsi, pieniä juttuja löytyi” — ilman sitaatteja, nimettyä roolia ja sovittuja muutoksia."
    },

    11: {
      type: "feature",
      feature: "Viikon jälkeen tärkein katselmointipalaute on toteutettu näkyväksi muutokseksi tuotantoon asti, asiakastietojen muokkaus on valmis, ja suunnitelman työmääräarviot on päivitetty toteutuneen perusteella.",
      connection: "Viikon 10 muistio muuttuu koodiksi ja julkaistuksi versioksi. Samalla asiakkaan omien tietojen hallinta täydentää tunnukset viikolta 8.",
      deliverable: "Palautemuutos issuesta tuotantoon, omien tietojen muokkauslomake, päivitetyt työmääräarviot suunnitelmassa ja virheenkorjausketju K2.",
      why: "Palautteen kirjaaminen ilman toteutusta on teatteria — arviointi katsoo ketjun päähän asti. Arvioiden päivittäminen on lisäksi s6:n aito työnäyte, ei rituaali.",
      done: "Muutos näkyy julkaistussa versiossa ja issue sulkeutuu committiin viitaten; omia tietoja voi muokata mutta käyttäjätunnusta ei; suunnitelmassa näkyy päivitetty arvio perusteluineen.",
      record: "Kirjoita työviikon 11 merkintään: minkä palautteen valitsit ja miksi juuri sen, issue → commit → tuotanto -ketju linkkeineen, mitkä arviot muuttuivat ja miksi sekä K2-ketju kokonaisena.",
      skills: ["tehtävien suunnittelu ja arviointi (s6)", "toimintalogiikka (s7)", "asiakaslähtöisyys (s2)"],
      steps: [
        ["Valitse muutos prioriteettien mukaan.", "Ota työn alle se palautekohta, jonka ohjaaja ja sinä priorisoitte korkeimmalle."],
        ["Toteuta haarassa ja yhdistä.", "Issue → haara → commit → yhdistäminen → julkaisu tuotantoon."],
        ["Rakenna omat tiedot -lomake.", "Yhteystiedot muokattavissa validointeineen; käyttäjätunnusta ei voi vaihtaa."],
        ["Päivitä suunnitelman arviot.", "Merkitse mikä arvio piti, mikä ei ja mikä oli syy. Älä päivitä kaikkia kerralla muistin varassa."],
        ["Kirjaa K2-ketju.", "Havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti."]
      ],
      help: {
        title: "Palautemuutoksen ketju ja K2-ketjun kirjauspohja",
        tree: "issue (viikon 10 palautteesta)\n  ↓\nhaara fix/<issue-numero>-<lyhyt-kuvaus>\n  ↓\ncommit, joka viittaa issueen\n  ↓\nyhdistäminen main-haaraan\n  ↓\njulkaisu tuotantoon\n  ↓\ntestaajan kuittaus (viesti tai lyhyt kokeilu)",
        actions: [
          "Avaa issue palautteesta, jos sitä ei vielä ole, ja kirjoita siihen valmis kun -ehto.",
          "Toteuta muutos omassa haarassa ja viittaa committiviestissä issueen.",
          "Julkaise muutos tuotantoon ja tarkista se julkisesta osoitteesta.",
          "Pyydä testaajalta kuittaus ja liitä se muistioon."
        ],
        code: "K2-KETJUN KIRJAUSPOHJA\n\nHavainto:        mitä näkyi, missä ja millä laitteella\nToistamisohje:   1) … 2) … 3) → virhe toistuu\nSyy:             mikä koodissa aiheutti sen\nKorjaus:         commit ______\nUusintatesti:    sama toistamisohje → tulos\nRegressiotesti:  mitä muuta testasit ja miksi juuri sen",
        test: "Avaa julkinen osoite toisella laitteella ja tarkista, että muutos näkyy siellä — ei vain omalla kehityspalvelimella.",
        links: [["GitHub Docs: Linking a pull request to an issue", "https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue"]]
      },
      example: "Issue #23 ”korikuvake ei erotu mobiilissa” → commit → julkaisu → testaajan uusi kuittaus viestillä, ja suunnitelmaan päivitetty arvio: arvioin 0,5 päivää, meni 1,5, koska mobiilinavigaatio piti rakentaa uudelleen.",
      notEnough: "”Korjasin pikkuvikoja” ilman kytköstä katselmointimuistioon; arviot päivitetty kaikki jälkikäteen samalla kertaa muistin varassa."
    },

    12: {
      type: "feature",
      feature: "Viikon jälkeen henkilökuntarooli hallitsee tuotteita selaimessa — lisäys, muokkaus ja poisto — ja hallintareitit on suojattu kahdella tasolla: route guard frontissa ja roolitarkistus API:ssa.",
      excerpt: "Minun ja myyjäni pitää pystyä lisäämään ja muokkaamaan tuotteita suoraan selaimessa — en aio soittaa koodarille aina kun saan uuden pelierän.",
      connection: "Viikon 8 roolikenttä otetaan käyttöön: sama kanta, joka viikolla 3 vain luettiin, saa nyt kirjoitusoperaatiot ja niiden suojauksen.",
      deliverable: "Roolipohjainen pääsynhallinta kahdella tasolla, tuotehallintanäkymä lomakkeineen, validoinnit molemmilla puolilla ja testit T12–T13.",
      why: "Pelkkä napin piilottaminen ei ole pääsynhallintaa — tämä viikko todistaa eron käyttöliittymäsuojauksen ja oikean suojauksen välillä, ja se on s11:n toinen kivijalka salasanojen rinnalla.",
      done: "Asiakasroolilla suora URL hallintanäkymään ohjaa pois ja suora API-kutsu palauttaa 401 tai 403; henkilökunnan lisäämä tuote näkyy heti kaupan puolella.",
      record: "Kirjoita työviikon 12 merkintään: miten toteutit suojauksen molemmilla tasoilla, mitä curl-kutsu palautti ilman istuntoa ja asiakasroolilla sekä T12:n ja T13:n tulokset.",
      skills: ["roolipohjainen tietoturva (s11)", "tietovaraston kirjoitusoperaatiot (s9)", "ohjelmiston toteutus komponenttikirjastolla (k5)"],
      steps: [
        ["Lisää henkilökuntarooli ja seed-käyttäjä.", "Yksi henkilökunnan tunnus seed-dataan, jotta testaus onnistuu molemmilla rooleilla."],
        ["Toteuta route guard.", "vue-routerin navigointivahti estää hallintareitit muilta kuin henkilökunnalta."],
        ["Toteuta API-tason roolitarkistus.", "FastAPI-riippuvuus, joka tarkistaa istunnon ja roolin jokaisessa hallintaendpointissa."],
        ["Rakenna hallintanäkymä ja lomakkeet.", "Lisäys, muokkaus ja poisto sekä vahvistus poistolle."],
        ["Validoi molemmin puolin.", "Hinta vähintään nolla ja pakolliset kentät sekä frontissa että backendissä."],
        ["Aja T12 ja T13.", "Testaa myös suoralla curl-kutsulla ilman istuntoa ja asiakkaan istunnolla."]
      ],
      help: {
        title: "Kaksikerroksisen suojauksen tarkistuslista",
        tree: "kerros 1 · frontend\n  vue-router beforeEach → ei roolia → ohjaus pois\n  (piilottaa vain käyttöliittymän)\n\nkerros 2 · backend\n  Depends(vaadi_henkilokunta)\n  ei istuntoa      → 401\n  väärä rooli      → 403\n  (tämä on oikea suojaus)",
        actions: [
          "Toteuta ensin API-tason tarkistus, vasta sitten käyttöliittymän vahti.",
          "Lisää seed-käyttäjä molemmille rooleille testausta varten.",
          "Validoi syötteet backendissä riippumatta siitä, mitä frontti tekee.",
          "Aja testit sekä selaimella että curlilla ja tallenna vastaukset."
        ],
        code: "TESTIKIRJAUS T12\n\ncurl -X POST <api>/api/tuotteet          ilman istuntoa   → odotus 401\ncurl -X POST <api>/api/tuotteet          asiakkaan istunnolla → odotus 403\nselain: /hallinta/tuotteet asiakkaana    → odotus: ohjaus pois\nselain: /hallinta/tuotteet henkilökuntana → odotus: näkymä aukeaa\n\nHavainto: ____   Tulos: ok / ei ok   Commit: ______",
        test: "Kirjaudu asiakkaana, kopioi istuntotieto ja kutsu hallintaendpointia suoraan curlilla: vastauksen pitää olla 403, ei onnistunut lisäys.",
        links: [["OWASP: Authorization Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"]]
      },
      example: "Testikirjaus: curl -X POST /api/tuotteet ilman istuntoa → 401; asiakkaan istunnolla → 403; henkilökunnan istunnolla → 201 ja tuote näkyy kaupan puolella.",
      notEnough: "Hallintalinkki piilotettu navigaatiosta mutta API auki kaikille; validointi vain frontissa."
    },

    13: {
      type: "feature",
      feature: "Viikon jälkeen henkilökunta selaa kaikkia tilauksia uusimmat ensin ja merkitsee tilauksen käsitellyksi — ja tilan muutos näkyy asiakkaan tilaushistoriassa. Featurelista päättyy tähän; viikon toinen puolisko on koko sovelluksen saavutettavuustarkistus.",
      excerpt: "Minun ja myyjäni pitää pystyä lisäämään ja muokkaamaan tuotteita suoraan selaimessa — ja selaamaan asiakkaiden tekemiä tilauksia, jotta näen mitä pitää kerätä hyllystä.",
      connection: "Tuotehallinta viikolta 12 saa parikseen tilausten hallinnan, ja viikon 4 saavutettavuusperusta todennetaan nyt, kun kaikki näkymät ovat olemassa.",
      deliverable: "Henkilökunnan tilauslistaus suodatuksineen, tilan muutos ja sen näkyminen asiakkaalle, testi T14 sekä Lighthouse-raportit ennen ja jälkeen korjausten.",
      why: "Tämä sulkee asiakkaan alkuperäisen tarpeen — yrittäjän arkityökalu on kasassa. Jos tämän jälkeen lisää featureja, projekti on rajattu väärin. Saavutettavuus on webprojektissa vaatimus, ei kaunistus, ja se tarkistetaan nyt kun kaikki näkymät ovat olemassa.",
      done: "Henkilökunta näkee kaikkien tilaukset ja asiakas vain omansa; käsitellyksi-merkintä näkyy asiakkaalle; ostopolun voi kulkea läpi pelkällä näppäimistöllä; Lighthouse-raportit ennen ja jälkeen on tallennettu ja vähintään yksi saavutettavuuspuute on korjattu.",
      record: "Kirjoita työviikon 13 merkintään: mitä tietoa henkilökunnan tilausnäkymään valitsit ja miksi, T14:n tulos molemmilla rooleilla sekä saavutettavuuslöydökset ja Lighthouse-pisteet ennen ja jälkeen.",
      skills: ["toimintalogiikka: tilat ja niiden muutokset (s7)", "rajapinnat (s10)", "roolit (s11)", "saavutettavuus"],
      steps: [
        ["Toteuta endpoint roolisuojauksella.", "Henkilökunnan tilauslistaus suodatuksella: uudet ja käsitellyt."],
        ["Rakenna listanäkymä ja tilan päivitys.", "Uusimmat ensin, rivit avattavissa, tila vaihdettavissa."],
        ["Aja T14 kahdella roolilla.", "Merkintä käsitellyksi henkilökunnan puolella näkyy asiakkaan historiassa."],
        ["Käy saavutettavuuslista läpi näkymä kerrallaan.", "Näppäimistökäyttö, kontrastit, label-kytkennät, otsikkohierarkia ja alt-tekstit. Korjaa löydökset."],
        ["Aja Lighthouse ennen ja jälkeen.", "Tallenna molemmat raportit project-docs-kansioon."]
      ],
      help: {
        title: "Saavutettavuustarkistuslista ja Lighthouse-ajo",
        tree: "näkymä kerrallaan:\n  [ ] näppäimistö   tab-järjestys looginen, fokus näkyy\n  [ ] kontrasti     teksti ja tausta riittävän erottuvat\n  [ ] label         jokainen lomakekenttä kytketty labeliin\n  [ ] hierarkia     yksi h1, ei hyppyjä tasoissa\n  [ ] alt           kuvilla kuvaava alt tai tyhjä alt koristeissa\n  [ ] ilmoitukset   virhe- ja onnistumisviestit myös ruudunlukijalle",
        actions: [
          "Toteuta tilausten listaus ja tilan muutos roolisuojattuna.",
          "Kulje koko ostopolku läpi pelkällä näppäimistöllä ja kirjaa jokainen kohta, jossa jäät jumiin.",
          "Aja Lighthouse ennen korjauksia ja tallenna raportti.",
          "Korjaa löydökset ja aja Lighthouse uudelleen; tallenna myös jälkimmäinen raportti."
        ],
        code: "LIGHTHOUSE-AJO\n\n1. Avaa julkaistu osoite Chromessa\n2. Kehittäjätyökalut → Lighthouse\n3. Valitse Accessibility, laite: Mobile\n4. Analyze page load → tallenna raportti (JSON tai PDF)\n5. Korjaa löydökset\n6. Aja uudelleen ja tallenna toinen raportti\n\nTallennuspaikka: project-docs/lighthouse-ennen.* ja -jalkeen.*",
        test: "Kulje reitti tuotelistasta tilauksen lähettämiseen pelkällä näppäimistöllä ilman hiirtä. Jokaisen napin ja kentän pitää olla saavutettavissa ja fokuksen näkyä.",
        links: [["WAI: Easy Checks", "https://www.w3.org/WAI/test-evaluate/preliminary/"]]
      },
      example: "Tilausnäkymän tietosisältö perusteltuna (kuka tilasi, mitä rivejä, summa, tila) ja saavutettavuuskorjaus: label-kytkentä hakukenttään sekä Lighthouse-pisteet ennen ja jälkeen.",
      notEnough: "Pelkkä kantataulun sisällön tulostus ruudulle ilman rivejä, tilaa ja roolirajausta; ”paransin saavutettavuutta” ilman ennen ja jälkeen -näyttöä."
    },

    14: {
      type: "laatu",
      feature: "Viikon jälkeen kirjallinen tietoturva-arvio on olemassa — uhkat, ratkaisut ja jäännösriskit — ja vähintään kaksi kovennusta on toteutettu omien hyökkäystestien löydösten perusteella.",
      connection: "Viikkojen 8, 12 ja 13 tietoturvaratkaisut kootaan yhteen ja koetellaan: nyt sovellusta katsotaan hyökkääjän eikä asiakkaan silmin.",
      deliverable: "tietoturva-arvio.md, hyökkäystestien kirjaukset, vähintään kaksi kovennusta, virheenkorjausketju K3 ja ohjaajan läpikäynti.",
      why: "s11 on tässä projektissa painava vaatimus: verkkokaupassa käsitellään salasanoja, henkilötietoja ja rooleja — arvio ilman omia testejä on mielipide, ei arvio.",
      done: "tietoturva-arvio.md:ssä jokaisella tunnistetulla riskillä on ratkaisu tai perusteltu jäännösriski; vähintään yksi aito löydös on korjattu täydellisenä K3-ketjuna; ohjaajan läpikäynti on kirjattu.",
      record: "Kirjoita työviikon 14 merkintään: mitkä hyökkäystestit ajoit ja mitä ne palauttivat, mikä löydös yllätti, mitkä kovennukset teit sekä K3-ketju kokonaisena ja ohjaajan kommentit.",
      skills: ["tietoturvan arviointi (s11)", "virheiden etsintä ja korjaus (p2)", "järjestelmällinen testaus (p3)"],
      steps: [
        ["Aja tarkistuslista kohta kohdalta.", "Syötteet, salasanat, istunnot, roolit, virheilmoitusten tietovuoto, salaisuudet, CORS ja HTTPS."],
        ["Tee hyökkäystestit ja kirjaa jokainen.", "SQL-injektio hakuun, XSS tuotekenttiin, toisen käyttäjän tilaushistoria id:tä vaihtamalla ja hallinta-API ilman istuntoa. Muoto: syöte → odotus → tulos."],
        ["Korjaa löydökset ja regressiotestaa.", "Jokainen korjaus saa uusintatestin ja vähintään yhden regressiotestin."],
        ["Kirjoita arvio.", "Jokaisesta riskistä joko ratkaisu tai perusteltu jäännösriski — ei tyhjiä kohtia."],
        ["Käy arvio läpi ohjaajan kanssa.", "Kirjaa läpikäynti ja ohjaajan huomiot muistioon."]
      ],
      help: {
        title: "Verkkokaupan tietoturvatarkistuslista",
        tree: " 1. Injektio          parametrisoidut kyselyt kaikkialla\n 2. XSS               käyttäjän syöte ei päädy HTML:ksi\n 3. IDOR              omistajuustarkistus jokaisessa haussa\n 4. Salasanat         hash, ei omaa kryptausta\n 5. Istunnot          vanheneminen, uloskirjautuminen\n 6. Roolit            tarkistus sekä frontissa että API:ssa\n 7. Virheviestit      ei vuoda tunnuksia, polkuja tai jälkiä\n 8. Salaisuudet       .env ei repossa, avaimet kierrätettävissä\n 9. CORS              vain omat originit sallittu\n10. HTTPS             tuotannossa aina, ei sekasisältöä",
        actions: [
          "Käy kymmenen kohtaa läpi järjestyksessä ja kirjaa jokaisesta tilanne.",
          "Aja neljä hyökkäystestiä omaa julkaistua sovellusta vasten ja tallenna vastaukset.",
          "Korjaa löydökset ja aja uusintatestit sekä regressiotestit.",
          "Kirjoita arvio ja varaa ohjaajalle aika läpikäyntiin."
        ],
        code: "HYÖKKÄYSTESTIN KIRJAUS\n\nTesti:     IDOR tilaushistoriassa\nSyöte:     GET /api/tilaukset/<toisen käyttäjän id> omalla istunnolla\nOdotus:    403, ei tietoja\nTulos:     ____________________\nKorjaus:   commit ______\nUusinta:   ____________________\nRegressio: oma historia toimii edelleen → ____",
        test: "Luo kaksi testikäyttäjää ja yritä hakea toisen tilaushistoriaa omalla istunnollasi id:tä vaihtamalla: vastauksen pitää olla 403 tai 404, ei toisen tilauksia.",
        links: [["OWASP Top Ten", "https://owasp.org/www-project-top-ten/"]]
      },
      example: "Löydös ”tilaushistorian osoitteesta sai toisen käyttäjän tilaukset id:tä vaihtamalla” → korjaus: omistajuustarkistus endpointissa → uusintatesti → regressiotesti oman historian toimivuudesta.",
      notEnough: "”Käytin parametrisoituja kyselyitä, joten sovellus on turvallinen” — yleistoteamus ilman ajettuja testejä ja jäännösriskien pohdintaa."
    },

    15: {
      type: "laatu",
      feature: "Viikon jälkeen koko testimatriisi eli neljätoista tapausta on ajettu julkaistua versiota vasten tuloksineen — mukaan lukien viikkojen 13 ja 14 korjausten regressiot — ja koodia on refaktoroitu vähintään yhdessä, enintään kahdessa kohdassa käyttäytymistä muuttamatta.",
      connection: "Viikkojen 3–14 testit kootaan yhdeksi ajoksi julkaistua versiota vasten, ja koodin luettavuus siistitään ennen julkaisuehdokasta.",
      deliverable: "Testimatriisin tulostaulukko project-docs-kansiossa, regressioajojen tulokset, refaktorointicommitit perusteluineen ja poikkeamaissuet.",
      why: "Laatuviikko erottaa valmiin tuotteen toimivasta demosta — ja regressioajo on ainoa tapa tietää, että viikkojen 13 ja 14 korjaukset eivät rikkoneet mitään.",
      done: "Matriisin jokaisella rivillä on odotettu ja toteutunut tulos julkaistua versiota vasten; refaktorointicommiteissa testit on ajettu uudelleen ja tulos kirjattu; poikkeamat ovat issueina.",
      record: "Kirjoita työviikon 15 merkintään: montako riviä meni läpi ensimmäisellä ajolla, mitkä poikkeamat löytyivät ja mihin issueihin ne menivät, sekä mitä refaktoroit ja miksi juuri sen.",
      skills: ["testaus (p3)", "ylläpidettävä koodi (p5)", "suunnittelu, toteutus ja testaus kirjastolla (k5)"],
      steps: [
        ["Aja matriisi rivi riviltä.", "T01–T14 julkaistua versiota vasten, ei localhostia vasten. Merkitse poikkeamat."],
        ["Kirjaa poikkeamat issueiksi.", "Korjaa estävät heti, muut priorisoidaan."],
        ["Aja viikkojen 13 ja 14 regressiot.", "Saavutettavuus- ja tietoturvakorjaukset eivät saa rikkoa toimintoja."],
        ["Valitse refaktorointikohteet ja perustele.", "Vähintään yksi, enintään kaksi: nimeäminen, toisteisuus tai liian iso komponentti."],
        ["Refaktoroi pienin askelin.", "Testit välissä; käyttäytyminen ei saa muuttua."],
        ["Päivitä tulostaulukko.", "Tallenna matriisin tulokset project-docs-kansioon."]
      ],
      help: {
        title: "Refaktoroinnin kohdelista ja matriisin tulostaulukon pohja",
        tree: "ETSI NÄITÄ HAJUJA\n├─ komponentti yli ~120 riviä\n├─ sama fetch-logiikka kolmessa paikassa\n├─ muuttujat data, temp, x, lista2\n├─ funktio, joka tekee kolme eri asiaa\n├─ syvä sisennys (yli kolme tasoa)\n└─ kommentti, joka selittää mitä koodi tekee\n   (nimeä uudelleen kommentin sijaan)",
        actions: [
          "Aja koko matriisi julkaistua versiota vasten ennen kuin kosket koodiin.",
          "Valitse enintään kaksi refaktorointikohdetta ja perustele valinta.",
          "Tee muutos pienin commiteina ja aja osuvat testit jokaisen jälkeen.",
          "Kirjaa tulokset taulukkoon ja vie se project-docs-kansioon."
        ],
        code: "MATRIISIN TULOSTAULUKKO\n\nT#  | tapaus | odotus | toteutunut | ok/ei | commit tai issue\n----+--------+--------+------------+-------+-----------------\nT01 |        |        |            |       |\nT02 |        |        |            |       |\n…   |        |        |            |       |\nT14 |        |        |            |       |\n\nAjoympäristö: julkaistu osoite ______   versio/commit ______",
        test: "Aja refaktoroinnin jälkeen samat matriisin rivit, jotka koskevat muutettua koodia, ja vertaa tuloksia ennen-tilanteeseen: yhdenkään rivin ei pidä muuttua.",
        links: [["Vue 3: Composables", "https://vuejs.org/guide/reusability/composables.html"]]
      },
      example: "Refaktorointi: 140-rivinen TilausNakyma pilkottu kolmeen komponenttiin, ja matriisin osuvat rivit ajettu vihreinä sekä ennen että jälkeen.",
      notEnough: "”Siistin koodia” ilman ennen ja jälkeen -näyttöä; matriisi ajettu localhostia eikä julkaistua versiota vasten."
    },

    16: {
      type: "katselmointi",
      feature: "Viikon jälkeen sisältö on jäädytetty ja julkaisuehdokas v1.0-rc1 on julkaistu — ja ulkopuolinen henkilö on ottanut kaupan käyttöön ja tehnyt testitilauksen puhtaassa ympäristössä pelkän kirjoitetun ohjeen avulla, ilman suullista apua.",
      excerpt: "Valmis tämä on sitten, kun oikea asiakas löytää pelin, tilaa sen puhelimellaan, ja minä näen tilauksen omassa näkymässäni ilman että kukaan neuvoo vieressä.",
      connection: "Viikon 15 testattu versio jäädytetään julkaisuehdokkaaksi, ja sitä koettelee ihminen, jolla on käytössään vain kirjoitettu ohje.",
      deliverable: "Tagi v1.0-rc1, siivottu repository, valmis käyttöönotto- ja käyttöohje, julkaisutestin pöytäkirja ja ohjeen korjauslista.",
      why: "Julkaisu, jota kukaan muu ei saa käyttöön pelkällä ohjeella, ei ole julkaisu. RC-vaihe on ainoa paikka, jossa tämä selviää ilman että v1.0 on jo myöhässä.",
      done: "Testaaja pääsi ohjeen avulla rekisteröitymisestä testitilaukseen asti ilman suullista apua — tai jokainen epäröintikohta on kirjattu ohjeen korjauslistaksi; estävät virheet on listattu erikseen.",
      record: "Kirjoita työviikon 16 merkintään: mitä siivosit repositorystä, kuka testasi ja missä ympäristössä, missä kohdissa hän epäröi sekä mitkä löydökset ovat estäviä ja mitkä eivät.",
      skills: ["julkaisuprosessi (s14)", "dokumentointi (k7)", "version katselmointi (s3)"],
      steps: [
        ["Jäädytä sisältö, julkaise RC ja tagaa.", "Merkitse git-tag v1.0-rc1. Tämän jälkeen vain estävien virheiden korjaukset."],
        ["Siivoa repository ja kirjoita ohjeet loppuun.", "README käyttöönottoineen ja lyhyt asiakasohje kaupan käyttöön."],
        ["Sovi testaaja ja ympäristö.", "Nimetty ulkopuolinen, mieluiten eri henkilö kuin viikolla 10; puhdas ympäristö eli toinen kone tai selain ilman evästeitä ja aiempia kirjautumisia."],
        ["Havainnoi puuttumatta.", "Älä neuvo. Kirjaa jokainen epäröinti ja se, mistä ohjeesta tieto puuttui."],
        ["Luokittele löydökset.", "Estävät ja ei-estävät erikseen; estävät korjataan viikolla 17."]
      ],
      help: {
        title: "Julkaisutestin pöytäkirjapohja",
        tree: "1. Testaajan nimi ja rooli\n2. Ympäristö: laite, selain, ”ei aiempia tunnuksia, ei evästeitä”\n3. Käytössä ollut ohje (linkki tai versio)\n4. Tehtävät: rekisteröidy → etsi tuote → tilaa\n5. Havainnot: aika, kohta, testaajan sanat\n6. Luokittelu: estävä / ei-estävä\n7. Ohjeen korjauslista",
        actions: [
          "Tagaa RC ennen testiä, jotta testattu versio on tunnistettavissa.",
          "Poista repositorystä turhat tiedostot, kokeilut ja unohtuneet salaisuudet.",
          "Anna testaajalle vain kirjoitettu ohje — älä kerro mitään suullisesti.",
          "Korjaa ohje samana päivänä ja pyydä testaajaa kokeilemaan korjattu kohta uudelleen."
        ],
        code: "REPON SIIVOUSLISTA\n[ ] ei .env-tiedostoa eikä avaimia historiassa\n[ ] ei kokeilukansioita tai kommentoitua kuollutta koodia\n[ ] README: käyttöönotto, käynnistys, riippuvuudet, muuttujat\n[ ] asiakasohje: miten kauppaa käytetään\n[ ] LICENSE, jos lisenssi on sovittu\n[ ] CREDITS: kuvien ja aineistojen lähteet\n[ ] tagi v1.0-rc1 osoittaa testattuun versioon",
        test: "Pyydä testaajaa aloittamaan tyhjästä selaimesta pelkän README:n ja asiakasohjeen avulla. Jos hän joutuu kysymään yhdenkin asian, kysymys on ohjeen korjauslistalle.",
        links: [["Git: Tagging", "https://git-scm.com/book/en/v2/Git-Basics-Tagging"]]
      },
      example: "Havainto ”ohjeesta puuttui, että tili pitää luoda ennen tilausta” → ohjeen korjaus samana päivänä → uusi läpimeno ilman kysymyksiä.",
      notEnough: "Itse tehty ”puhtaan ympäristön testi” omalla koneella, omilla evästeillä ja omalla lihasmuistilla."
    },

    17: {
      type: "julkaisu",
      feature: "Viikon jälkeen estävät virheet on korjattu — vain ne, jäädytys pitää — v1.0 on julkaistu tuotantoon ja luovutettu asiakkaalle selkokielisellä luovutusviestillä, ja dokumentaatio on valmis.",
      excerpt: "Valmis tämä on sitten, kun oikea asiakas löytää pelin, tilaa sen puhelimellaan, ja minä näen tilauksen omassa näkymässäni ilman että kukaan neuvoo vieressä.",
      connection: "Viikon 16 julkaisutestin estävät löydökset korjataan, ja julkaisuehdokkaasta tulee versio, joka luovutetaan asiakkaalle.",
      deliverable: "Tagi v1.0, julkaisumuistio, valmis dokumentaatio ja asiakkaan luovutusviesti.",
      why: "Versio, jolla on numero, muutosluettelo ja luovutus, erottaa projektin harjoituksesta — työ valmistuu, ei lopu.",
      done: "Tagi v1.0 on olemassa; julkinen osoite toimii; README:n avulla ulkopuolinen saa kehitysympäristön käyntiin; luovutusviesti ja tunnetut puutteet on kirjattu.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät virheet korjasit ja miten, mitkä jäivät tunnetuiksi puutteiksi ja miksi, sekä mitä luovutusviestissä lupasit ja mitä rajasit pois.",
      skills: ["julkaisu tuotantoon (s14)", "julkaisu asiakkaan ympäristöön (k6)", "asiakaslähtöinen viestintä (s2)"],
      steps: [
        ["Korjaa estävät ja regressiotestaa.", "Ei-estävät kirjataan tunnetuiksi puutteiksi, ei korjata nyt."],
        ["Julkaise ja tagaa v1.0.", "Kirjoita julkaisumuistio: mitä mukana, mitä rajattu pois ja miksi."],
        ["Tarkista README ulkopuolisen silmin.", "Käyttöönotto, käynnistys, riippuvuudet, ympäristömuuttujat ja tunnetut puutteet."],
        ["Kirjoita luovutusviesti asiakkaalle.", "Mitä tehtiin, mitä rajattiin pois (maksaminen), miten kauppaa käytetään ja mitä seuraava versio voisi sisältää — ilman teknistä jargonia."]
      ],
      example: "Julkaisumuistio, jossa on mukana olevat ominaisuudet, pois rajatut asiat perusteluineen, tunnetut puutteet ja seuraavat askeleet — sekä luovutusviesti, jonka asiakas ymmärtää ilman selityksiä.",
      notEnough: "”Deployasin uusimman mainin” ilman tagia, muutoslistaa ja luovutusviestiä."
    },

    18: {
      type: "naytto",
      feature: "Viikon jälkeen mitään uutta ei ole lisätty: kaikkien 32 vaatimuksen työnäytteet on täsmälinkitetty näyttömatriisiin, 8–10 minuutin demo on harjoiteltu ja itsearviointi on kirjoitettu.",
      connection: "Kaikki työ on tehty. Viimeinen viikko tekee osaamisesta löydettävää: jokaiselle vaatimukselle osoitetaan paikka omassa aineistossa.",
      deliverable: "Täytetty näyttömatriisi toimivine linkkeineen, harjoiteltu demorunko ja itsearviointi päiväkirjan viimeisenä merkintänä.",
      why: "Osaaminen, joka ei ole löydettävissä, ei tule arvioiduksi — viimeinen viikko on täsmälinkitystä, ei tuotantoa.",
      done: "Matriisin jokaisella rivillä on toimiva linkki; demo on ajettu kellon kanssa vähintään kerran toiselle ihmiselle; itsearviointi nimeää konkreettisia tilanteita.",
      record: "Kirjoita työviikon 18 merkintään itsearviointi: mikä onnistui, missä tarvitsit apua ja mitä tekisit seuraavassa projektissa toisin — konkreettisin esimerkein.",
      skills: ["oman toiminnan arviointi (p11)", "dokumentointi (k7)"],
      steps: [
        ["Käy matriisi rivi riviltä.", "Linkitä jokaisen vaatimuksen työnäyte: commit, issue, testi, muistio tai dokumentti. Testaa jokainen linkki."],
        ["Rakenna demon runko ja aja se kellon kanssa.", "Tilauspolku tuotannossa, yksi tekninen ratkaisu, yksi korjattu bugi ketjuna, Git-historia ja AI-lokin tarkistettu käyttö."],
        ["Esitä demo kerran toiselle ihmiselle.", "Kirjaa, mihin aika kului ja mitä hän ei ymmärtänyt."],
        ["Kirjoita itsearviointi konkreettisin esimerkein.", "Nimeä tilanteet, älä tunnelmia."],
        ["Luovuta aineisto sovitulla tavalla.", "Tarkista, että kaikki linkit toimivat myös ulkopuoliselle."]
      ],
      example: "Itsearviointi, joka nimeää tilanteen: ”istuntoratkaisun vertailussa tarvitsin ohjaajan apua ymmärtääkseni evästeiden ja tokenien eron — ensi kerralla varaan vertailuille enemmän aikaa”.",
      notEnough: "”Opin paljon uutta ja projekti sujui hyvin” — itsearviointi ilman yhtään konkreettista esimerkkiä."
    }
  },

  /* ---- opettajan aineisto: paperipaketti ja näyttösuunnitelma ---- */
  opettaja: {
    jakso: "18 työviikkoa · päivätön aikataulu, viikot 1–18",
    deadline: "18. työviikon perjantai",
    kansiKuvaus: "Lautapelien verkkokauppa: Vue 3, Pinia, FastAPI, SQLite ja julkaisu tuotantoon",
    kansiHuomiot: [
      "Aikataulu on päivätön: viikot ovat työviikkoja 1–18 opiskelijan omasta aloituksesta, eivät kalenteriviikkoja.",
      "Julkiseen repositoryyn ei laiteta henkilötietoja, salaisuuksia eikä oikeiden kauppojen tekstejä tai kuvia. Tuotedata keksitään itse."
    ],
    viimeisetPaivat: [
      ["Päivä 1", "Sisältöjäädytys — viimeinen hyväksytty versio"],
      ["Päivä 2", "Aineisto: päiväkirja, testimatriisi, muistiot ja linkit"],
      ["Päivä 3", "Harjoittelu: 8–10 minuutin demo ja itsearviointi"],
      ["Päivä 4", "Puskuri ja tarkistus toisen henkilön kanssa"],
      ["Päivä 5", "Luovutus: näyttömatriisi linkitetty, demo harjoiteltu, aineisto luovutettu"]
    ],

    pohjat: {
      aloitusVko: 1,
      kysymyksia: 8,
      vertailuVko: "2, 5, 7, 8 ja 9",
      katselmointiVkot: "10 ja 16",
      testiVko: 15,
      testeja: 14,
      ketjuja: 3,
      lisenssiVko: 16
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma · NoppaKauppa",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena. Aikataulu on päivätön: viikot ovat työviikkoja 1–18 opiskelijan omasta aloituksesta.",
      kohde: [
        "Näyttö annetaan Tieto- ja viestintätekniikan perustutkinnon (diaarinumero OPH-6216-2025, perusteId 9816282) kolmesta tutkinnon osasta: Ohjelmointi (45 osp, 11 vaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 vaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 vaatimusta). Vaatimuksia on yhteensä 32.",
        "Näytön kohteena on yksi ohjattu web-projekti: lautapeliliike Nopan Nurkan ensimmäinen verkkokauppa. Opiskelija toteuttaa sen Vue 3 + Vite + Pinia -frontilla ja FastAPI + SQLite -backendilla, julkaisee sen tuotantoon jo viikolla 5 ja luovuttaa version 1.0 asiakkaalle viikolla 17. Opiskelija saa vaihtaa tuotealan omaksi teemakseen viikolla 2; vaatimukset eivät muutu.",
        "Ympäristö: opiskelijan oma kehityskone, julkinen Git-repository ja opiskelijan viikolla 5 vertailema julkaisualusta. Oppilaitoksen linjaus julkaisualustasta on ohjaajan päätettävä avoin asia.",
        "Näyttöaineisto syntyy työn aikana: commit-historia, issuet, pull request, testimatriisi tuloksineen, kolme virheenkorjausketjua, kaksi katselmointimuistiota, tietoturva-arvio, Lighthouse-raportit sekä projektipäiväkirja ja AI-loki."
      ],
      p0: "Pakollinen perusversio (P0): tuotteet kategorioittain, sanahaku, ostoskori, rekisteröityminen ja kirjautuminen, tilaus, tilaushistoria, omien tietojen muokkaus, tuotehallinta ja tilausten selaus. Maksunvälitys on rajattu pois asiakkaan päätöksellä — sitä ei toteuteta osittainkaan.",
      roolit: [
        ["Opiskelija", "Toteuttaa kaupan, tekee omat päätöksensä perusteluineen, ajaa testit ja kirjaa työnäytteet. Sopii katselmointien käytännöt itse, kun katselmoijat on nimetty."],
        ["Ohjaaja / opettaja", "Vastaa kysymyslistaan viikolla 1, toimii asiakkaan äänenä viikolla 2 kunnes katselmoija on nimetty, priorisoi palautteen viikolla 10, käy tietoturva-arvion läpi viikolla 14 ja tarkistaa laadun tarkistuspisteissä."],
        ["Asiakasroolin esittäjä (viikko 10)", "Nimetty ulkopuolinen henkilö — toinen opiskelija, työpaikkaohjaaja tai muu sovittu — ei oma ohjaaja. Kokeilee julkaistua kauppaa tehtäväradalla ja antaa palautteen omin sanoin."],
        ["Julkaisutestaaja (viikko 16)", "Nimetty ulkopuolinen, mieluiten eri henkilö kuin viikolla 10. Ottaa kaupan käyttöön puhtaassa ympäristössä pelkän kirjoitetun ohjeen avulla ilman suullista apua."],
        ["Arvioija", "Arvioi näytön 32 vaatimusta työnäytteiden ja demon perusteella; käyttää sivuston näyttömatriisia hakemistona."]
      ],
      tarkistuspisteet: [
        [1, "Toimeksianto ja ympäristö", "Kysymyslista on tehty ja vastattu; repo on olemassa; molemmat kehityspalvelimet käynnistyvät. Katselmoijien etsintä on käynnistetty."],
        [2, "Suunnitelma ja rajaus", "Käyttäjätarinat prioriteetteineen, tietomalli, tietovarastovertailu, teemapäätös ja vähintään kahdeksan issueta. Rautalankojen hyväksyntä kirjattu."],
        [5, "Ensijulkaisu", "Julkinen osoite toimii toisella laitteella; alustavertailu on kirjattu; salaisuudet eivät ole repossa."],
        [9, "Ostopolku valmis", "Tilaus tallentuu transaktiona tilaushetken hinnoilla; historia näyttää vain omat tilaukset; k4-lisäpaketin perustelu on kirjattu."],
        [10, "Asiakaskatselmointi", "Nimetty ulkopuolinen on testannut; sitaatit ja oma tulkinta ovat muistiossa erillään; palaute on issueina ja priorisoitu."],
        [13, "Featurelista päättyy", "Henkilökunnan tilausnäkymä toimii ja saavutettavuustarkistus on tehty Lighthouse-raportein. Tästä eteenpäin ei lisätä uusia ominaisuuksia."],
        [14, "Tietoturva-arvio", "Arvio läpikäydään ohjaajan kanssa: jokaisella riskillä on ratkaisu tai perusteltu jäännösriski; K3-ketju on kokonainen."],
        [16, "Julkaisuehdokas", "v1.0-rc1 on tagattu, repo siivottu ja ulkopuolinen on tehnyt testitilauksen pelkän ohjeen avulla puhtaassa ympäristössä."],
        [18, "Näyttö", "Matriisin jokaisella rivillä on toimiva linkki; demo on harjoiteltu kellon kanssa; itsearviointi on kirjoitettu."]
      ],
      tyonaytteet: {
        p1: ["1", "Kehitysympäristö pystyssä: VS Code, Vite- ja FastAPI-kehityspalvelimet, selaimen kehittäjätyökalut; käynnistyskomennot READMEssä ja päiväkirjassa"],
        p2: ["7, 11, 14", "Kolme täydellistä virheenkorjausketjua (K1 ostoskori, K2 palautemuutos, K3 tietoturvalöydös): havainto → toisto → syy → korjauscommit → uusintatesti → regressiotesti"],
        p3: ["15", "14 tapauksen testimatriisi (odotettu tulos kirjattu ennen ajoa) ajettuna julkaistua versiota vasten; uusintatestaukset korjausten jälkeen"],
        p4: ["9", "Tilauslogiikka jaettuna moduuleihin ja funktioihin (reitit, kantakerros, validointi); frontissa komponentti- ja store-jako — ei yhtä jättitiedostoa"],
        p5: ["15", "Refaktorointicommitit perusteluineen: nimeäminen, toisteisuuden poisto, komponentin pilkkominen — testit vihreinä ennen ja jälkeen"],
        p6: ["4", "Näkymät toteutettu viikon 2 hyväksytyistä rautalangoista; responsiivisuuden taitekohdat ja mobiilitestaus oikealla puhelimella"],
        p7: ["9", "Tilaus ja tilaushistoria toteutettu käyttäjätarinoiden ja hyväksymiskriteerien mukaan; kytkentä tarina → issue → commit"],
        p8: ["2", "Tehtävät sovittu ohjaajan kanssa ja kirjattu issueiksi; tehtävien tila näkyvänä koko projektin ajan (issue-taulu)"],
        p9: ["7, 8", "Kaksi kirjattua vertailua ja yhteispäätöstä ohjaajan kanssa: korin tallennus (Pinia+localStorage vs. backend) ja istuntoratkaisu (JWT vs. eväste-sessio)"],
        p10: ["10", "Asiakaskatselmoinnin muistio: täyttääkö toteutus tarinat, mitä muutetaan ennen seuraavaa versiota — priorisoitu ohjaajan kanssa"],
        p11: ["18", "Itsearviointi konkreettisin tilantein: mikä onnistui, missä tarvitsi apua, mitä tekisi toisin"],
        s1: ["2", "Toimeksiannosta johdetut käyttäjätarinat, kysymyslista ja vastaukset, rajaus (maksaminen pois) kirjattuna"],
        s2: ["10, 17", "Katselmoinnin asiakaskielinen yhteenveto ja viikon 17 luovutusviesti — ilman teknistä jargonia; maksurajauksen selitys asiakkaalle"],
        s3: ["10, 16", "Kaksi katselmointia: asiakaskatselmointi puolivälissä ja RC:n julkaisutestaus — muistiot rooleineen ja sitaatteineen"],
        s4: ["2", "Käyttäjätarinoiden P0/P1/P2-priorisointi perusteluineen; P0 = toimiva ostopolku ilman maksua"],
        s5: ["2", "Tarinat pilkottu issueiksi (≥8 kpl), yksi issue ≈ 0,5–1 päivän työ; issue-taulu koko projektin ajan"],
        s6: ["11", "Työmääräarviot ja niiden päivitys toteutuneen perusteella: suunnitelman muutoshistoria näyttää mikä arvio muuttui ja miksi"],
        s7: ["9, 13", "Tilauksen muodostus transaktiona, tilaushetken hinnat, tilausten tilat ja niiden muutokset, roolikohtaiset näkymät"],
        s8: ["2", "Kirjallinen vertailu SQLite / JSON / PostgreSQL datan rakenteen, käyttötilanteen ja laajuuden perusteella; perusteltu valinta suunnitelmassa"],
        s9: ["3, 12", "Luku (tuotelista, haku) ja kirjoitus (tilaukset, tuotehallinnan lisäys/muokkaus/poisto) SQLite-kantaan hallitusti"],
        s10: ["6", "Oma REST-rajapinta: haku kyselyparametrilla, virhetilanteiden käsittely fetchissä, lataus/tyhjä/virhe-tilat käyttöliittymässä"],
        s11: ["8, 12, 14", "Salasanojen hashaus ja istuntopäätös (vko 8), kaksikerroksinen roolisuojaus (vko 12), tietoturva-arvio omine hyökkäystesteineen: injektio, XSS, IDOR (vko 14)"],
        s12: ["1", "Git koko projektin ajan: tarkoituksenmukaiset commitit, etärepository, sovitut haarakäytännöt; commit-historia näyttöaineistona"],
        s13: ["7", "Ostoskori toteutettu haarassa feature/ostoskori ja yhdistetty pull requestilla; mahdollinen konflikti ratkaistu ja kirjattu"],
        s14: ["5, 17", "Ensijulkaisu vertailtuun alustaan ympäristömuuttujineen (vko 5); RC- ja v1.0-julkaisut tageineen ja julkaisumuistioineen (vkot 16–17)"],
        k1: ["1, 5", "Vue 3 + Vite -projektin luonti ja konfigurointi; kehitys- ja tuotantoasetusten ero (API-osoite, build) dokumentoituna"],
        k2: ["2", "Selvitys suunnitelmassa: mitä Vue/Pinia ratkaisee (komponentit, reaktiivisuus, tila) ja missä tarvitaan muuta (backend rooleille ja istunnoille, SPA:n rajoitteet)"],
        k3: ["3, 7", "Komponentit, propsit, computed-arvot ja Pinia-store (kori, auth) käytössä; itse rakennettu tuotelistanäkymä ilman valmista UI-kirjastoa"],
        k4: ["4, 9", "vue-router perusteltuna (reititys) ja yksi oma perusteltu lisäpaketti (esim. vee-validate) — käyttötarkoitus, konfigurointi ja riippuvuusvaikutus kirjattu"],
        k5: ["15", "Komponenttirakenne ja vastuut suunnitelmassa, tarinoiden mukainen toteutus ja koko testimatriisi kirjastopohjaista sovellusta vasten"],
        k6: ["17", "Tuotanto-build ja v1.0-julkaisu sovittuun ympäristöön; luovutus asiakkaalle ohjeineen"],
        k7: ["16", "README: käyttöönotto, käynnistys, riippuvuudet, ympäristöasetukset, tunnetut puutteet — ulkopuolisen julkaisutestillä todennettu ohje"]
      },
      dokumentaatio: {
        kayttajalle: "README (käyttöönotto, käynnistys, riippuvuudet, ympäristömuuttujat, tunnetut puutteet) ja lyhyt asiakasohje kaupan käyttöön. Todennetaan viikon 16 julkaisutestillä: ulkopuolinen pääsee ohjeella rekisteröitymisestä testitilaukseen.",
        arviointiin: "Projektipäiväkirja, AI-loki, suunnitelma muutoshistorioineen, testimatriisin tulostaulukko, kolme virheenkorjausketjua, kaksi katselmointimuistiota, tietoturva-arvio, Lighthouse-raportit sekä issue- ja commit-historia.",
        vaatimus: "Dokumentaatio kirjoitetaan käyttäjälle, ei arviointia varten. Arviointiaineisto kootaan erikseen näyttömatriisin linkeiksi viikolla 18."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline: se saa selittää virheilmoituksia, ehdottaa testitapauksia ja tarkistaa ratkaisuja. Merkittävä käyttö kirjataan AI-lokiin muodossa ymmärrä, tarkista, testaa, kirjaa.",
        "Itse tehtävä ydin: komponenttirakenne, saavutettavuusratkaisut ja CSS. Tietoturvaratkaisut — salasanakäsittely, istunnot ja roolitarkistukset — pitää ymmärtää ja perustella itse. Viikon 3 tuotelistanäkymä rakennetaan kokonaan itse ilman valmista UI-komponenttikirjastoa.",
        "Projekti on suunniteltu kestämään kielimallin käyttöä: jokaisella viikolla on oma konteksti (oma teema ja seed-data, oma tietomalli), oma artefakti (testiajot, kuvakaappaukset, commit-historia, julkaisuloki) tai nimetty ihminen (ohjaaja, katselmoija, julkaisutestaaja). Yhtään viikkoa ei voi kuitata kopioimalla tehtävänantoa kielimalliin."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "Julkinen osoite, jossa v1.0 toimii, sekä git-tagit v1.0-rc1 ja v1.0."],
        ["Repository", "Lähdekoodi, README, asiakasohje, CREDITS ja mahdollinen LICENSE; ei salaisuuksia historiassa."],
        ["project-docs", "Suunnitelma, projektipäiväkirja, AI-loki, testimatriisin tulokset, katselmointimuistiot, tietoturva-arvio, Lighthouse-raportit ja luovutusviesti."],
        ["Näyttömatriisi", "32 vaatimusta, joilla jokaisella on toimiva linkki työnäytteeseen."],
        ["Demo", "8–10 minuutin esitys: tilauspolku tuotannossa, yksi tekninen ratkaisu, yksi korjattu bugi ketjuna, Git-historia ja AI-lokin tarkistettu käyttö."]
      ],
      huomiot: [
        ["Päivätön aikataulu", "Viikot 1–18 ovat työviikkoja opiskelijan omasta aloituksesta. Sivustolla ja paperiaineistossa ei ole kalenteripäivämääriä, joten sama aineisto kelpaa eri aloitusajankohtiin."],
        ["Katselmoijat ovat viikon 1 järjestelykysymys", "Etsintä käynnistetään heti viikolla 1 ja nimeäminen tehdään viimeistään ennen viikkoa 10. Kunnes katselmoija on nimetty, ohjaaja toimii asiakkaan äänenä (viikko 2). Viikon 10 ja 16 katselmoija ei saa olla oma ohjaaja."],
        ["Maksunvälitys on rajattu pois asiakkaan suulla", "Rajaus on toimeksiannossa asiakkaan omana päätöksenä. Sitä ei toteuteta osittainkaan, ja rajauksen selittäminen asiakkaalle on osa s2:n työnäytettä."],
        ["Testiluokkien jakauma on tietoinen poikkeama", "14 testitapausta jakautuvat 6 normaalia, 4 rajaa ja 4 virhetilannetta. Virhetilanneluokka täydentyy viikon 14 hyökkäystesteillä (injektio, XSS, IDOR, auktorisointi), jotka kirjataan samalla tarkkuudella matriisin jatkoksi."],
        ["Viikon 13 jälkeen ei uusia ominaisuuksia", "Featurelistan päättyminen sanotaan opiskelijalle ääneen viikon 13 kortissa. Jos uusia ominaisuuksia ilmaantuu viikoilla 14–17, rajaus on pettänyt ja se on syytä ottaa puheeksi."],
        ["Avoimet asiat ovat ohjaajan pöydällä", "Lisenssi, repositoryn julkisuus ja tekijänimi (alaikäisellä huoltajan suostumus), oppilaitoksen linja julkaisualustasta, katselmoijien nimeäminen ja perusteversion siirtymäsääntö (OPH-6216-2025). Tyhjä kenttä suunnitelmassa on oikea tulos, kunnes asia on sovittu."]
      ]
    }
  }
};
