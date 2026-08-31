/*
 * PeliHylly – ohjattu näyttöprojekti, 18 työviikkoa, päivätön tila.
 *
 * Tämä tiedosto on projektin ainoa sisältötiedosto JavaScriptin puolella.
 * app.js on geneerinen moottori eikä sisällä projektikohtaista tekstiä.
 *
 * Päivätön tila: viikot ovat järjestysnumeroita 1–18 opiskelijan omasta
 * aloituksesta, eivät kalenteriviikkoja. Sivustolla ei ole yhtään
 * kalenteripäivämäärää.
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "pelihylly",
  nimi: "PeliHylly",
  vuosi: 2026,
  paivaton: true,
  viikot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  aloitusNappi: "Aloita PeliHyllyn teko",
  apuOtsikko: "Tarvitsen toteutusapua",

  paletti: {
    aksentti: "#6d28d9",
    aksenttiTumma: "#5b21b6",
    taulukkoSavy: "#ede9fe",
    riviSavy: "#f6f3fd"
  },

  /* ---- vaiheet ---- */
  vaiheet: [
    { tunnus: "A", lyhyt: "Ydin",      otsikko: "Palvelun ydin: toimeksianto, suunnitelma ja julkaistu pelilista", viikot: [1, 2, 3, 4, 5],        vari: "#8d5a2b" },
    { tunnus: "B", lyhyt: "Ominaisuudet", otsikko: "Tilat, käyttäjät, profiilit ja asiakaskatselmointi",               viikot: [6, 7, 8, 9, 10],       vari: "#6b7f3f" },
    { tunnus: "C", lyhyt: "Valmiiksi", otsikko: "Palautemuutos, saavutettavuus, testaus, laatu ja dokumentaatio",   viikot: [11, 12, 13, 14, 15],   vari: "#5b6b8c" },
    { tunnus: "D", lyhyt: "Julkaisu",  otsikko: "Julkaisuehdokas, v1.0 ja näyttö",                                  viikot: [16, 17, 18],           vari: "#8d4a5b" }
  ],

  /* ---- viikkonavigaation lyhyet nimet ---- */
  viikkoNimet: {
    1: "Aloitus",
    2: "Suunnitelma",
    3: "Julkaistu runko",
    4: "Pelilista",
    5: "Lisäys ja validointi",
    6: "Tilat ja historia",
    7: "Käyttäjät",
    8: "Profiilisivu",
    9: "Haku ja suodatus",
    10: "Asiakaskatselmointi",
    11: "Palautemuutos",
    12: "Saavutettavuus",
    13: "Testausviikko",
    14: "Laatuviikko",
    15: "Dokumentaatio",
    16: "Julkaisuehdokas",
    17: "Julkaisu v1.0",
    18: "Näyttö"
  },

  /* ---- viikkotyyppien kehystekstit ---- */
  kehykset: {
    pohjustus: {
      kicker: "Pohjustus",
      connectionLabel: "Näin viikko vie projektia eteenpäin:",
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
      kicker: "Katselmointi: työ testissä",
      connectionLabel: "Näin viikko vie projektia eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    laatu: {
      kicker: "Laatuviikko",
      connectionLabel: "Näin viikko nostaa työn laatua:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    julkaisu: {
      kicker: "Julkaisuviikko",
      connectionLabel: "Näin viikko vie palvelun maaliin:",
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
      work: "Kerro konkreettiset tiedostot, komponentit, API-reitit ja testitapaukset, joita työstit.",
      reason: "Kerro päätös, vaihtoehdot, perustelu ja mitä opit, omin sanoin.",
      evidence: "Esim. commit-tunniste, issue #12, PR-linkki, testirivi T06 tai muistion nimi.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla työskentelykerralla?"
    }
  },

  /* ---- paperiaineiston kieliyliajot (päivätön tila) ---- */
  lataukset: {
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title
  },

  /* ---- suunnitelmadokumentti ---- */
  suunnitelma: {
    otsikko: "Tekninen suunnitelma ja sivukartta",
    tiedostonimi: "suunnitelma.md",
    pakolliset: [
      "nimi", "tekija", "aihe", "tietovarasto", "tietomalli", "sivukartta",
      "julkaisualusta", "autentikointi", "komponentti", "kokoelmat", "taitekohdat"
    ],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      `# Tekninen suunnitelma ja sivukartta – ${arvo("nimi", "_(projektin nimi puuttuu)_")}`,
      "",
      `Tekijä: ${arvo("tekija")} · Päivitetty: ${pvm}`,
      "",
      "Täytetään työviikolla 2 · päivitetään työviikoilla 11 ja 16.",
      "",
      "## 1. Asiakas ja tarve",
      "",
      "Pelikellari ry (kuvitteellinen peliharrastajien yhdistys) haluaa jäsenilleen",
      "pelikirjaston seurantapalvelun: pelit, tilat, tähtiarviot, kommentit, kokoelmat,",
      "julkiset profiilit ja tilahistoria.",
      "",
      "## 2. Käyttäjäryhmät",
      "",
      "- Rekisteröitynyt jäsen: hallinnoi omaa hyllyään.",
      "- Vierailija: katselee profiileja ja pelilistoja ilman tunnuksia.",
      "",
      "## 3. Rajaus ja prioriteetit",
      "",
      "**P0 – pakollinen ydin:** rekisteröityminen ja kirjautuminen, pelien lisäys ja",
      "muokkaus, tilanvaihto + automaattinen tilahistoria, julkinen profiili tilastoineen,",
      "julkaisu tuotantoon.",
      "",
      "**P1 (aikataulutettu):** haku ja suodatus (työviikko 9), tähtiarvostelut ja",
      "kommentit (lomakkeen kenttinä työviikolla 5), profiilikuva.",
      "",
      "**P1-laajennus (päätöspiste työviikolla 11):** kokoelmat (monta-moneen)",
      "toteutetaan omana haarana vaiheessa C vain, jos P0 ja testaus ovat aikataulussa;",
      "muuten siirtyy v1.1-listalle. Ei epäonnistuminen vaan rajauspäätös.",
      "",
      "**P2 (saa jäädä pois):** viestit toisten profiileihin ja niihin vastaaminen.",
      "",
      "## 4. Reunaehdot",
      "",
      "- Vierailija näkee profiilit ja listat ilman tunnuksia.",
      "- Muokkaus vain omille peleille.",
      "- Salasanat hashattuna.",
      "- Palvelu julkisessa osoitteessa.",
      "- Suomenkielinen käyttöliittymä.",
      "",
      "## 5. Omat päätökset perusteluineen",
      "",
      `### 5.1 Aiheen muunnelma (työviikko 2)`,
      "",
      arvo("aihe"),
      "",
      "### 5.2 Tietovarasto ja perustelu (työviikko 2)",
      "",
      arvo("tietovarasto"),
      "",
      "### 5.3 Tietomalli ja tilojen nimet (työviikko 2, testataan työviikolla 6)",
      "",
      arvo("tietomalli"),
      "",
      "### 5.4 Sivukartta ja komponenttijako (työviikko 2, testataan työviikoilla 3 ja 8)",
      "",
      arvo("sivukartta"),
      "",
      "### 5.5 Julkaisualusta (työviikko 3)",
      "",
      arvo("julkaisualusta"),
      "",
      "### 5.6 Autentikointitapa (työviikko 7)",
      "",
      arvo("autentikointi"),
      "",
      "### 5.7 Toinen ulkoinen komponentti (työviikko 9)",
      "",
      arvo("komponentti"),
      "",
      "### 5.8 Kokoelmien laajennuspäätös (kriteerit työviikolla 9, päätös työviikolla 11)",
      "",
      arvo("kokoelmat"),
      "",
      "### 5.9 Responsiivisuuden taitekohdat (työviikko 12)",
      "",
      arvo("taitekohdat"),
      "",
      "## 6. Ohjaajan päätökset ja avoimet asiat",
      "",
      onTäytetty("lisenssi")
        ? `- Lisenssi: ${arvo("lisenssi")}`
        : "- Lisenssi: EI VIELÄ SOVITTU, avoin asia (LICENSE repositoryyn heti kun sovittu).",
      onTäytetty("repojulkisuus")
        ? `- Repositoryn julkisuus: ${arvo("repojulkisuus")}`
        : "- Repositoryn julkisuus: EI VIELÄ SOVITTU, avoin asia. Julkisessa repossa sovitaan tekijänimestä ja alaikäisellä huoltajan suostumus hoidetaan ohjaajan kautta.",
      onTäytetty("perusteversio")
        ? `- Perusteversion siirtymäsääntö: ${arvo("perusteversio")}`
        : "- Perusteversion siirtymäsääntö (OPH-6216-2025 / aiempi peruste): EI VIELÄ SOVITTU, oppilaitoksen linja.",
      onTäytetty("katselmoijat")
        ? `- Katselmoijat: ${arvo("katselmoijat")}`
        : "- Katselmoijat: EI VIELÄ SOVITTU, avoin asia. Asiakkaan edustaja (nimetty ulkopuolinen, ei oma ohjaava opettaja) nimetään viimeistään työviikolla 3 ja toimii työviikolla 10; julkaisutestaaja (eri henkilö) toimii työviikolla 16.",
      onTäytetty("alustatili")
        ? `- Julkaisualustan tilin omistajuus: ${arvo("alustatili")}`
        : "- Julkaisualustan tilin omistajuus (opiskelijan oma vai oppilaitoksen tili): EI VIELÄ SOVITTU, oppilaitoksen linja.",
      "",
      "---",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
      "Päivitä tiedosto työviikolla 11 (arviot vs. toteuma, kokoelmapäätös) ja",
      "työviikolla 16 (jäädytys ja julkaisutestin löydökset).",
      ""
    ].join("\n")
  },

  /* ---- viikkojen ohjaava sisältö ---- */
  viikkoOhjeet: {
    /* ============================ VAIHE A ============================ */
    1: {
      type: "pohjustus",
      feature: "Kehitysympäristö toimii, repository on olemassa julkisen repon pelisäännöillä, ja toimeksiannosta on kirjattu kysymyslista ohjaajalle; ensimmäinen commit on tehty.",
      connection: "Projekti alkaa toimeksiannosta ja työkaluista: ennen ensimmäistä komponenttia varmistat, että ympäristö toimii ja että työ tallentuu muuallekin kuin omalle koneelle.",
      deliverable: "Kysymyslista `project-docs/kysymykset.md`, todennetut työkaluversiot, Vite + React -projektirunko sekä etärepository ensimmäisine committeineen.",
      why: "Ilman toimivaa ympäristöä ja etärepositorya yksikään myöhempi viikko ei tallennu näyttöaineistoksi, ja julkisen repon virhettä (henkilötieto historiassa) ei saa perumalla pois.",
      done: "Ohjaaja avaa repositoryn osoitteen toisella koneella: README kertoo mikä projekti on, ja `npm install && npm run dev` käynnistää sovellusrungon. Kysymyslista on `project-docs/kysymykset.md`-tiedostossa.",
      record: "Kirjoita työviikon 1 merkintään: mitkä kohdat toimeksiannosta jäivät epäselviksi, kysymyslistan tärkein kysymys, työkalujen versiotulosteet, repositoryn osoite ja ensimmäisen commitin tunniste.",
      skills: ["kehitysympäristö (p1, k1)", "versionhallinta (s12)", "vaatimusten purku (s1)", "julkisen repon tietosuoja"],
      steps: [
        ["Pura toimeksianto.", "Alleviivaa vaatimukset ja epäselvyydet."],
        ["Kirjaa kysymyslista.", "Vähintään kahdeksan kysymystä, joihin et tiedä vastausta."],
        ["Todenna työkalut.", "Aja `node -v` ja `git --version` ja ota tulosteet talteen."],
        ["Luo projekti.", "`npm create vite@latest` (React) ja käynnistä kehityspalvelin."],
        ["Vie Gitiin.", "README, .gitignore, ensimmäinen commit ja push."],
        ["Käy julkisen repon tarkistuslista ohjaajan kanssa.", "Yksityisyystarkistus, tekijänimestä sopiminen ja alaikäisellä huoltajan suostumus ohjaajan kautta."]
      ],
      help: {
        title: "Perusta repository ja todenna työkalut",
        tree: "pelihylly/\n├─ client/            React + Vite\n│  ├─ src/\n│  └─ package.json\n├─ server/            Express + SQLite\n│  └─ package.json\n├─ project-docs/      suunnitelma, testit, päiväkirja, AI-loki\n│  └─ kysymykset.md\n├─ README.md\n└─ .gitignore",
        actions: [
          "Luo kansiot client/, server/ ja project-docs/. Kaikki dokumentaatio menee project-docs-kansioon.",
          "Aja node -v ja git --version ja liitä tulosteet päiväkirjaan.",
          "Luo Vite + React -projekti client-kansioon ja käynnistä kehityspalvelin.",
          "Kirjoita README, lisää .gitignore, tee ensimmäinen commit ja push etärepositoryyn."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] node -v ja git --version tulostettu ja talletettu\n[ ] client/ kääntyy ja dev-palvelin käynnistyy\n[ ] README kertoo mikä projekti on ja miten se käynnistetään\n[ ] .gitignore estää node_modules-kansion ja .env-tiedostot\n[ ] project-docs/kysymykset.md sisältää vähintään 8 kysymystä\n[ ] ensimmäinen commit on viety etärepositoryyn (push)\n\nJULKISEN REPON TARKISTUSLISTA\n[ ] historiassa ei ole henkilötietoja, salasanoja eikä avaimia\n[ ] tekijänimestä on sovittu ohjaajan kanssa\n[ ] alaikäisellä huoltajan suostumus hoidettu ohjaajan kautta\n[ ] repon julkisuus on ohjaajan päätös; merkitse avoimeksi asiaksi kunnes sovittu",
        test: "Kloonaa repository toiseen kansioon ja tarkista, että sovellusrunko käynnistyy pelkän README:n ohjeilla.",
        links: [["Vite: Getting Started", "https://vite.dev/guide/"], ["GitHub Docs: repositoryn luominen", "https://docs.github.com/en/repositories"]]
      },
      example: "Kysymyslistan kysymys, joka pakottaa päätöksen: ”Näkeekö vierailija myös tähtiarviot ja kommentit vai vain tilat?”",
      notEnough: "”Asensin Noden ja VS Coden” ilman versiotulosteita ja ilman kysymyslistaa."
    },

    2: {
      type: "pohjustus",
      feature: "Tekninen suunnitelma on repositoryssa: priorisoidut käyttäjätarinat (P0/P1/P2), tietomalli, tietovarastovertailu, sivukartta ja rautalangat, ja P0 on pilkottu issueiksi työmääräarvioineen.",
      excerpt: "Mieluummin vähemmän ja kunnolla.",
      connection: "Viikon 1 kysymyslista sai vastaukset; nyt vastaukset muuttuvat käyttäjätarinoiksi, tietomalliksi ja rajaukseksi, joiden mukaan loput 16 viikkoa etenevät.",
      deliverable: "`project-docs/suunnitelma.md`, tietomallikaavio, sivukartta ja rautalangat, tietovarastovertailu sekä issue-taulu työmääräarvioineen.",
      why: "Ilman rajausta 18 viikkoa valuu ominaisuuslistan kasvattamiseen; ilman tietomallia tilahistoria ja kokoelmat joudutaan repimään auki myöhemmin.",
      done: "Suunnitelma on `project-docs/suunnitelma.md`-tiedostossa, ohjaaja on kuitannut P0-rajauksen kirjallisesti (issue-kommentti), ja jokaisella P0-issuella on työmääräarvio.",
      record: "Kirjoita työviikon 2 merkintään: mitkä tarinat jäivät P0:n ulkopuolelle ja miksi, tietovarastovalinnan perustelu omin sanoin sekä linkki issue-tauluun ja ohjaajan kuittaukseen.",
      skills: ["priorisointi (s4)", "työn ositus ja arviointi (s5, s6)", "tietovaraston valinta (s8)", "komponenttirakenteen suunnittelu (k5)"],
      resources: [["Avaa suunnitelmalomake", "#suunnitelma", false]],
      steps: [
        ["Käyttäjätarinat.", "Kirjoita muodossa ”Jäsenenä haluan… jotta…” ja lisää jokaiseen hyväksymiskriteerit."],
        ["Priorisointi ohjaajan kanssa.", "P0 on toimiva ydin; profiiliviestit menevät P2:een."],
        ["Tietomalli.", "Taulut, avaimet ja tilahistorian rakenne."],
        ["Tietovarastovertailu.", "Kolme vaihtoehtoa, omat kriteerit ja päätös perusteluineen."],
        ["Sivukartta ja rautalangat.", "Paperille tai työkalulla; profiilisivu tarkimmin."],
        ["Issuet ja arviot.", "Pilko jokainen P0-tarina tehtäviksi ja arvioi työmäärä."]
      ],
      help: {
        title: "Tietomallin pohja ja käyttäjätarinan muoto",
        tree: "users            id · kayttajanimi · salasana_hash · sahkoposti · profiilikuva · luotu\ngames            id · user_id → users.id · nimi · laite · tila · tahdet · kommentti · pelaa_nyt · luotu\nstatus_history   id · game_id → games.id · vanha_tila · uusi_tila · aikaleima\ncollections      id · user_id → users.id · nimi · kuvaus\ncollection_games game_id → games.id · collection_id → collections.id  (liitostaulu)",
        actions: [
          "Kirjoita jokaisesta P0-toiminnosta käyttäjätarina hyväksymiskriteereineen.",
          "Piirrä tietomalli ja merkitse avaimet ja viiteavaimet. Kentät ovat esimerkki, päätä omat.",
          "Vertaile SQLite, JSON-tiedosto ja palvelintietokanta omilla kriteereilläsi ja perustele valinta.",
          "Piirrä sivukartta ja rautalangat; tee profiilisivusta tarkin luonnos, koska sitä vasten toteutus tarkistetaan työviikolla 8.",
          "Pilko P0 issueiksi ja kirjaa jokaiseen työmääräarvio tunteina tai päivinä."
        ],
        code: "KÄYTTÄJÄTARINAN POHJA\nJäsenenä haluan ______________________ jotta ______________________.\nHyväksytty kun:\n  - ______________________________________________\n  - ______________________________________________\nPrioriteetti: P0 / P1 / P2      Arvio: ____ h\n\nTIETOVARASTOVERTAILUN POHJA\nKriteeri                | SQLite | JSON-tiedosto | palvelintietokanta\nDatan rakenne           |        |               |\nMonta-moneen-suhteet    |        |               |\nSamanaikainen kirjoitus |        |               |\nJulkaisun helppous      |        |               |\nValinta ja perustelu (2–3 virkettä): ______________________________",
        test: "Näytä yksi P0-tarina ohjaajalle ja kysy: pystyisikö ulkopuolinen sanomaan hyväksymiskriteerien perusteella, onko tarina valmis vai ei?",
        links: [["SQLite: Datatypes", "https://www.sqlite.org/datatype3.html"]]
      },
      example: "Tarina hyväksymiskriteereineen: ”Jäsenenä haluan vaihtaa pelin tilan yhdellä napilla, jotta kirjaaminen ei jää tekemättä. Hyväksytty kun: tila vaihtuu pelin sivulta, muutos näkyy historiassa.”",
      notEnough: "”Teen pelisivuston Reactilla ja SQLitellä” -tasoinen suunnitelma ilman rajausta ja arvioita."
    },

    3: {
      type: "feature",
      feature: "Reititetty React-runko ja Express + SQLite -perusta ovat julkaistuna oikeassa osoitteessa: tyhjä sivu tuotannossa ennen valmista sivua localhostissa.",
      excerpt: "Minä ymmärrän pelejä, en palvelimia.",
      connection: "Viikon 2 sivukartta ja tietomalli muuttuvat koodiksi: reitit vastaavat sivukarttaa ja migraatioskripti luo tietomallin taulut, ja koko putki viedään heti tuotantoon.",
      deliverable: "Julkinen osoite, jossa navigoitava React-runko ja vastaava `/api/health`, SQLite-skeema migraatioskriptinä, k2-muistio ja ensimmäinen tilannekatsaus asiakkaalle.",
      why: "Julkaisuputken ongelmat (ympäristömuuttujat, SQLiten levypolku) löytyvät nyt työviikolla 3 eivätkä työviikolla 17.",
      done: "Julkinen osoite näyttää navigoitavan rungon, `/api/health` vastaa tuotannossa, ja tilannekatsausviesti on lähetetty ja tallennettu `project-docs/viestit.md`-tiedostoon.",
      record: "Kirjoita työviikon 3 merkintään: julkaisualustojen vertailu ja valinta perusteluineen, mikä julkaisussa yllätti, k2-muistion ydinhavainto sekä julkinen osoite.",
      skills: ["komponenttikirjaston mahdollisuudet ja rajoitteet (k2)", "ulkoinen komponentti react-router (k4)", "julkaisu tuotantoon (s14)", "asiakaslähtöinen viestintä (s2)"],
      steps: [
        ["k2-muistio.", "Kirjaa mitä React ratkaisee (komponentit, tila, renderöinti) ja mitä ei (reititys, palvelin, tietovarasto); siksi react-router."],
        ["Reitit.", "Kolme sivua (etusivu, pelit, profiili) ja navigaatio."],
        ["Express-runko.", "`/api/health` palauttaa versiotiedon."],
        ["SQLite-skeema.", "Migraatioskripti ajaa taulut viikon 2 tietomallista."],
        ["Julkaisu.", "Ympäristömuuttujat, tuotantobuild ja julkinen osoite."],
        ["Tilannekatsaus asiakkaalle.", "Kolme virkettä ilman teknistä jargonia sekä linkki."]
      ],
      help: {
        title: "Monorepo, julkaisu ja SQLiten sijainti tuotannossa",
        tree: "pelihylly/\n├─ client/          React + Vite (npm run build → dist/)\n│  └─ src/\n│     ├─ main.jsx\n│     ├─ App.jsx        reitit\n│     └─ sivut/         Etusivu · Pelit · Profiili\n├─ server/          Express\n│  ├─ index.js          tarjoilee API:n ja client/dist-kansion\n│  ├─ db.js             SQLite-yhteys\n│  └─ migrate.js        luo taulut\n└─ project-docs/\n   ├─ k2-muistio.md\n   └─ viestit.md",
        actions: [
          "Asenna react-router ja kirjaa riippuvuus perusteluineen k2-muistioon.",
          "Rakenna kolme reittiä ja navigaatio; sisällöksi riittää paikanpitäjä.",
          "Tee /api/health, joka palauttaa version ja tietokantayhteyden tilan.",
          "Kirjoita migraatioskripti, joka luo viikon 2 taulut ja tulostaa, montako taulua syntyi.",
          "Vertaile julkaisualustat (Render, Railway, Fly.io) ja julkaise valitulle alustalle.",
          "Lähetä tilannekatsaus asiakasroolissa toimivalle henkilölle ja tallenna viesti project-docs/viestit.md-tiedostoon."
        ],
        code: "JULKAISUALUSTOJEN VERTAILUN POHJA\nKriteeri                        | Render | Railway | Fly.io\nIlmainen taso ja rajat          |        |         |\nLevyn pysyvyys (SQLite-tiedosto)|        |         |\nYmpäristömuuttujat              |        |         |\nKäyttöönoton työmäärä           |        |         |\nValinta ja perustelu: ______________________________\n\nJULKAISUN TARKISTUSLISTA\n[ ] tuotantobuild syntyy paikallisesti (npm run build)\n[ ] SQLite-tiedosto on pysyvällä levyllä, ei väliaikaiskansiossa\n[ ] salaisuudet ovat ympäristömuuttujissa, eivät repossa\n[ ] /api/health vastaa julkisesta osoitteesta\n[ ] osoite on kirjattu README:hen ja lähetetty asiakkaalle",
        test: "Avaa julkinen osoite ja `/api/health` puhelimen selaimessa mobiiliverkossa. Jos ne toimivat siellä, palvelu ei ole enää vain omalla koneellasi.",
        links: [["React Router: Tutorial", "https://reactrouter.com/start/framework/installation"], ["Express: Hello world", "https://expressjs.com/en/starter/hello-world.html"]]
      },
      example: "Tilannekatsauksen sävy: ”Palvelun pohja on nyt verkossa. Siinä ei vielä ole pelejä, mutta osoite pysyy samana koko projektin ajan.”",
      notEnough: "”React on hyvä koska se on suosittu” k2-muistiona; sovellus toimii vain localhostissa."
    },

    4: {
      type: "feature",
      feature: "Pelilista tulee SQLite-tietokannasta oman API:n kautta ja renderöityy komponentteina; myös virhetila on käsitelty.",
      connection: "Viikon 3 tyhjät reitit saavat sisällön: sama tietokanta, joka luotiin migraatiolla, tarjoillaan nyt oman API-reitin kautta React-komponenteille.",
      deliverable: "Siemendataskripti, `GET /api/games`, PeliLista- ja PeliKortti-komponentit, oma fetch-hookki sekä käsitellyt lataus- ja virhetilat.",
      why: "Data pois koodista on koko arkiston perusta; virhetilan käsittely nyt säästää jokaisen tulevan näkymän.",
      done: "Lista renderöityy tuotannossa tietokannan datasta; kun API on alhaalla, sivu näyttää virheilmoituksen eikä jää tyhjäksi; molemmista kuvakaappaus.",
      record: "Kirjoita työviikon 4 merkintään: miten jaoit vastuut komponenttien kesken, mitä virhetilan testaaminen paljasti sekä testitapausten T1–T2 odotetut ja toteutuneet tulokset.",
      skills: ["yhteys tietovarastoon (s9)", "rakenteinen ohjelmointi ja komponenttijako (p4)", "Reactin hookit ja datavirta (k3)", "fetch ja virhetilat (s10)"],
      steps: [
        ["Siemendata.", "Skripti lisää omat esimerkkipelit tietokantaan."],
        ["API-reitti.", "GET palauttaa pelit JSONina tietokannasta."],
        ["Datahaku.", "useEffect ja fetch omaan hookkiin."],
        ["Komponenttijako.", "Lista, kortti ja tilaindikaattori; vastuut erillään."],
        ["Virhetila.", "Sammuta backend ja katso, mitä käyttäjä näkee."],
        ["Testaa ja tee commit.", "Kirjaa T1–T2 odotuksineen ennen ajoa ja aja ne."]
      ],
      help: {
        title: "Komponenttipuu ja fetchin tarkistuslista",
        tree: "App\n└─ PelitSivu\n   ├─ usePelit()          oma hookki: lataus · virhe · data\n   └─ PeliLista\n      └─ PeliKortti\n         └─ TilaMerkki",
        actions: [
          "Kirjoita siemendataskripti, joka lisää omat esimerkkipelisi. Älä kovakoodaa niitä komponenttiin.",
          "Tee GET /api/games, joka lukee pelit tietokannasta.",
          "Siirrä fetch omaan hookkiin, joka palauttaa datan, lataustilan ja virheen.",
          "Jaa käyttöliittymä listaan, korttiin ja tilamerkkiin; jokaisella yksi vastuu.",
          "Sammuta palvelin ja ota kuvakaappaus siitä, mitä käyttäjä näkee."
        ],
        code: "FETCHIN TARKISTUSLISTA\n[ ] lataustila: käyttäjä näkee, että jotain tapahtuu\n[ ] virhetila: response.ok tarkistettu, viesti käyttäjän kielellä\n[ ] tyhjä tulos: oma viesti, ei tyhjää sivua\n[ ] siivous: keskeytetty pyyntö ei päivitä purettua komponenttia\n\nTESTIKIRJAUS (odotus ENNEN ajoa)\nT1 · normaali  · Pelilista latautuu ja näyttää siemendatan\n     Odotus: ____________________  Toteutunut: ____________________\nT2 · virhetilanne · API alhaalla → käyttäjä näkee virheilmoituksen\n     Odotus: ____________________  Toteutunut: ____________________",
        test: "Sammuta palvelin ja lataa sivu uudelleen: näetkö virheilmoituksen vai tyhjän sivun? Vain ensimmäinen kelpaa.",
        links: [["React: Synchronizing with Effects", "https://react.dev/learn/synchronizing-with-effects"]]
      },
      example: "Virhetilan viesti käyttäjän kielellä: ”Pelien haku ei onnistunut. Yritä hetken päästä uudelleen.”",
      notEnough: "Pelidata kovakoodattuna komponentin sisään tai virhetila `console.log`-rivinä."
    },

    5: {
      type: "feature",
      feature: "Peli lisätään itse alusta rakennetulla lomakkeella tähtiarvioineen ja kommentteineen, ja syötteet validoidaan sekä selaimessa että palvelimella; virheviestit kentittäin.",
      connection: "Viikolla 4 dataa vain luettiin; nyt sitä myös kirjoitetaan. Arvostelu syntyy tässä lomakkeen kenttinä, ja samaa lomaketta käytetään myöhemmin pelin muokkaukseen.",
      deliverable: "Itse rakennettu lisäyslomake, `POST /api/games` palvelinvalidointeineen, kentittäiset virheviestit sekä validointisääntötaulukko ja testitapaukset T3–T5.",
      why: "Selainvalidointi yksin on kosmetiikkaa: kuka tahansa voi kutsua APIa suoraan. Tämä on ensimmäinen tietoturvateko.",
      done: "Tyhjä nimi, ylipitkä nimi ja onnistunut lisäys käyttäytyvät ennalta kirjatun odotuksen mukaan sekä selaimessa että suoralla API-kutsulla (curl-tuloste talteen).",
      record: "Kirjoita työviikon 5 merkintään: validointisäännöt ja se, missä kerroksessa kukin tarkistetaan, mitä curl-ajo paljasti sekä T3–T5:n tulokset.",
      skills: ["toimintojen toteutus suunnitelmista (p7)", "rajapinnat ja tiedon käsittely (s10)", "validointi kahdessa kerroksessa", "itse rakennettu näkymä"],
      steps: [
        ["Kenttäsuunnittelu.", "Nimi, laite, tila, tähdet ja kommentti; pakollisuudet suunnitelmasta."],
        ["Kontrolloitu lomake.", "Reactin tila, ei UI-komponenttikirjastoa."],
        ["Selainvalidointi.", "Kirjaa säännöt taulukkona ennen toteutusta."],
        ["Palvelinvalidointi.", "Samat säännöt Expressissä, 400-vastaus ja virhelista."],
        ["Virheviestit.", "Kentittäin ja ohjelmallisesti kytkettynä (aria-describedby)."],
        ["Testaa curlilla.", "Ohita selain ja todista palvelinvalidointi."]
      ],
      help: {
        title: "Validointisääntöjen taulukkopohja",
        tree: "PeliLomake\n├─ Kentta(nimi)      label + input + virheviesti\n├─ Kentta(laite)\n├─ TilaValinta\n├─ TahtiArvio        1–5, näppäimistöllä käytettävä\n└─ Kentta(kommentti)\n\nvirheet = { nimi: \"…\", laite: \"…\" }   ← sama muoto selaimessa ja palvelimella",
        actions: [
          "Täytä sääntötaulukko ennen kuin kirjoitat riviäkään validointikoodia.",
          "Rakenna lomake itse: label kytketään kenttään, tila on Reactin hallussa.",
          "Toteuta samat säännöt Expressissä ja palauta 400 sekä virhelista kentittäin.",
          "Näytä virheviesti kentän vieressä ja kytke se aria-describedby-attribuutilla.",
          "Aja curlilla pyyntö ilman pakollisia kenttiä ja tallenna tuloste."
        ],
        code: "VALIDOINTISÄÄNNÖT\nKenttä    | Sääntö                    | Virheviesti                                | Missä tarkistetaan\nnimi      | pakollinen, 1–100 merkkiä | Anna pelin nimi (enintään 100 merkkiä)     | selain + palvelin\nlaite     |                           |                                            |\ntila      |                           |                                            |\ntahdet    |                           |                                            |\nkommentti |                           |                                            |\n\nCURL-TODENNUS\ncurl -i -X POST <osoite>/api/games -H \"Content-Type: application/json\" -d '{}'\nOdotus ennen ajoa: ____________________\nToteutunut: ____________________",
        test: "Lähetä lomake tyhjällä nimellä sekä selaimesta että curlilla. Molempien pitää hylätä pyyntö samalla säännöllä.",
        links: [["MDN: Client-side form validation", "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"]]
      },
      example: "Sääntörivi: ”nimi · pakollinen, 1–100 merkkiä · ’Anna pelin nimi (enintään 100 merkkiä)’ · selain + palvelin.”",
      notEnough: "Pelkkä `required`-attribuutti HTML:ssä; UI-kirjaston valmis lomakekomponentti."
    },

    /* ============================ VAIHE B ============================ */
    6: {
      type: "feature",
      feature: "Pelin tila vaihdetaan yhdellä napilla, ja jokainen muutos kirjautuu automaattisesti tilahistoriaan; palvelun ydinlupaus toimii.",
      excerpt: "Tärkeintä on, että pelin tilan vaihtaminen on yhden napin juttu.",
      connection: "Viikolla 5 peli saatiin hyllyyn; nyt se saa elämän. Viikon 2 tietomallin `status_history` otetaan käyttöön ja tilojen nimet testataan käytännössä.",
      deliverable: "Oma tilamalli sallittuine siirtymineen, tilanvaihto-API transaktiossa, tilahistoria pelin sivulla ja ”pelaan parhaillaan” -merkintä.",
      why: "Asiakkaan tärkein virke on ”tilan vaihtaminen on yhden napin juttu”, ja ilman transaktiota historia valehtelee juuri silloin, kun jokin menee vikaan.",
      done: "Tilan vaihto näkyy heti pelin sivulla, ja `status_history`-taulussa on rivi, jonka aikaleima ja vanha→uusi tila täsmäävät; suora tietokantakysely liitetty päiväkirjaan.",
      record: "Kirjoita työviikon 6 merkintään: valitsemasi tilat ja sallitut siirtymät perusteluineen, miten varmistit transaktion sekä T6:n tulos ja sqlite3-kyselyn tuloste.",
      skills: ["toimintalogiikka (s7)", "toimintojen toteutus suunnitelmista (p7)", "transaktiot ja tietovaraston eheys"],
      steps: [
        ["Tilamalli.", "Nimeä tilat itse (esim. hyllyssä / kesken / läpi / kaikki tehty) ja päätä sallitut siirtymät."],
        ["Siirtymätaulukko.", "Kirjaa mistä tilasta mihin pääsee ja mihin ei."],
        ["Transaktio.", "Tilan päivitys ja historiarivi yhdessä: molemmat tai ei kumpaakaan."],
        ["Käyttöliittymä.", "Yhden napin tilanvaihto pelin sivulla."],
        ["Historia näkyviin.", "Aikajärjestyksessä, uusin ylimpänä."],
        ["Todista tietokannasta.", "Aja `sqlite3`-kysely ennen ja jälkeen ja tallenna tulosteet."]
      ],
      help: {
        title: "Siirtymätaulukko ja transaktiomalli",
        tree: "Mistä \\ Mihin | hyllyssä | kesken | läpi | kaikki tehty\nhyllyssä      |    –     |   ✓    |  ✓   |      ?\nkesken        |    ✓     |   –    |  ✓   |      ?\nläpi          |    ?     |   ✓    |  –   |      ✓\nkaikki tehty  |    ?     |   ?    |  ?   |      –\n\n(Taulukko on pohja: nimeä tilat ja päätä ✓/– itse ja perustele.)",
        actions: [
          "Päätä tilojen nimet ja kirjaa ne suunnitelmaan. Älä kopioi aihekuvauksesta miettimättä.",
          "Täytä siirtymätaulukko ja perustele jokainen estetty siirtymä.",
          "Toteuta tilanvaihto niin, että päivitys ja historiarivi kirjoitetaan samassa transaktiossa.",
          "Tee tilanvaihdosta yhden napin toiminto pelin sivulla.",
          "Aja tietokantakysely ennen ja jälkeen ja liitä molemmat tulosteet päiväkirjaan."
        ],
        code: "TRANSAKTIOMALLI (Express + SQLite)\nBEGIN;\n  UPDATE games SET tila = ? WHERE id = ? AND user_id = ?;\n  INSERT INTO status_history (game_id, vanha_tila, uusi_tila, aikaleima)\n  VALUES (?, ?, ?, ?);\nCOMMIT;          -- virheessä ROLLBACK: kumpikaan ei jää voimaan\n\nTODENNUSKYSELY\nsqlite3 data.db \"SELECT * FROM status_history WHERE game_id = 1 ORDER BY aikaleima DESC LIMIT 3;\"\nOdotus ennen ajoa: ____________________\nToteutunut: ____________________",
        test: "Vaihda tila kerran ja aja todennuskysely: syntyikö täsmälleen yksi rivi, jonka vanha ja uusi tila vastaavat tekemääsi muutosta?",
        links: [["SQLite: Transaction", "https://www.sqlite.org/lang_transaction.html"]]
      },
      example: "Historiarivin muoto: ”peli_id, vanha_tila, uusi_tila, aikaleima; ja miksi kaikki neljä tarvitaan.”",
      notEnough: "Tila vaihtuu, mutta historia syntyy vain frontin muistiin; tilat on kopioitu aihekuvauksesta miettimättä siirtymiä."
    },

    7: {
      type: "feature",
      feature: "Rekisteröityminen ja kirjautuminen toimivat turvallisesti, ja vain kirjautunut käyttäjä voi muokata omia pelejään; todennettu myös API-tasolla.",
      excerpt: "Pienen yhdistyksen maine ei kestä vuotoa.",
      connection: "Viikoilla 4–6 kuka tahansa pystyi muokkaamaan mitä tahansa. Nyt pelit saavat omistajan, ja aiemmat reitit suojataan omistajuustarkistuksella.",
      deliverable: "Vertailumuistio istunto vs. token ohjaajan kommentilla, rekisteröityminen bcrypt-hashilla, kirjautuminen sekä suojatut muokkausreitit.",
      why: "”Pienen yhdistyksen maine ei kestä vuotoa”, ja omistajuustarkistuksen puute on juuri se virhe, jota selain ei koskaan paljasta.",
      done: "Toisen käyttäjän pelin muokkausyritys palauttaa 403 (curl-tuloste talteen); tietokannassa ja lokeissa ei näy selväkielistä salasanaa; vertailumuistiossa on ohjaajan kommentti.",
      record: "Kirjoita työviikon 7 merkintään: autentikointivertailun kriteerit ja päätös, miten suojasit reitit, sekä T7–T8:n tulokset ja curl-tulosteet.",
      skills: ["tietoturvan perusteet: hash ja istunto/token (s11)", "ratkaisuvaihtoehtojen vertailu yhdessä (p9)", "Reactin tilanhallinta ja context (k3)"],
      steps: [
        ["Vertailu.", "Kaksi toteutustapaa, omat kriteerit ja päätös ohjaajan kanssa."],
        ["Users-taulu ja hash.", "Salasana ei tallennu koskaan selväkielisenä."],
        ["Kirjautuminen.", "Päätä istunnon tai tokenin elinkaari ja toteuta se."],
        ["Suojaus.", "Middleware tarkistaa omistajuuden, ei pelkkää kirjautumista."],
        ["Frontin tila.", "Kirjautuneen näkymä ja vierailijan näkymä erikseen."],
        ["Hyökkää itseäsi vastaan.", "Aja curlilla pyyntö toisen käyttäjän peliin ja odota 403:a."]
      ],
      help: {
        title: "Kirjautumisvirta ja tietoturvan tarkistuslista",
        tree: "Rekisteröityminen\n  selain → POST /api/users → bcrypt.hash(salasana) → users-taulu\n\nKirjautuminen\n  selain → POST /api/login → bcrypt.compare → istunto tai token\n\nSuojattu pyyntö\n  selain → PATCH /api/games/:id\n        → onkoKirjautunut?         ei → 401\n        → omistaakoTämänPelin?     ei → 403\n        → suorita muutos",
        actions: [
          "Kirjoita vertailumuistio istunnosta ja tokenista omilla kriteereilläsi ja pyydä ohjaajalta kommentti.",
          "Tallenna salasanat bcrypt-hashina. Tarkista tietokannasta, ettei selväkielistä salasanaa ole missään.",
          "Toteuta kirjautuminen ja päätä istunnon tai tokenin voimassaoloaika.",
          "Kirjoita middleware, joka tarkistaa sekä kirjautumisen että omistajuuden.",
          "Erota kirjautuneen ja vierailijan näkymät frontissa contextin avulla.",
          "Aja curlilla muokkauspyyntö toisen käyttäjän peliin ja tallenna 403-tuloste."
        ],
        code: "TIETOTURVAN TARKISTUSLISTA (työviikko 7)\n[ ] salasana hashattu, ei koskaan selväkielisenä kannassa eikä lokeissa\n[ ] kirjautumisen virheviesti ei paljasta, oliko väärin tunnus vai salasana\n[ ] jokainen muokkausreitti tarkistaa omistajuuden, ei vain kirjautumista\n[ ] istunnon tai tokenin voimassaolo on päätetty ja kirjattu\n[ ] uloskirjautuminen mitätöi istunnon tai tokenin\n\nT7 · väärä salasana → kirjautuminen estyy, viesti ei paljasta kumpi kenttä oli väärin\nT8 · toisen käyttäjän pelin muokkaus APIssa → 403\nOdotus ennen ajoa: ____________________  Toteutunut: ____________________",
        test: "Kirjaudu käyttäjänä A, ota talteen istunto tai token ja yritä sillä muokata käyttäjän B peliä curlilla; vastauksen pitää olla 403.",
        links: [["OWASP: Password Storage Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"]]
      },
      example: "Vertailumuistion kriteeri: ”SQLite ja yksi palvelin → istunto riittää; token olisi perusteltu vasta erillisellä API-asiakkaalla.”",
      notEnough: "”Valitsin JWT:n koska se on moderni”; salasanan pituusraja ainoana turvatoimena."
    },

    8: {
      type: "feature",
      feature: "Julkinen profiilisivu kokoaa viikon 2 rautalangan mukaisesti parhaillaan pelattavat pelit, tilastot laitteittain ja tiloittain sekä tilahistorian.",
      excerpt: "Profiili on yhdistyksen yhteinen olohuone.",
      connection: "Viikkojen 6 ja 7 tilahistoria ja käyttäjät saavat vihdoin näyteikkunan: profiili kokoaa saman datan koosteiksi, jotka vierailijakin näkee.",
      deliverable: "Profiilin kooste-API GROUP BY -kyselyineen, itse rakennettu profiilinäkymä reitillä `/kayttaja/:nimi`, vierailijanäkymä sekä rautalankavertailu poikkeamineen.",
      why: "Profiili on asiakkaan ”yhteinen olohuone” ja koko palvelun näyteikkuna, ja suunnitelmasta toteuttaminen (p6) todentuu vain, jos luonnos ja lopputulos voidaan asettaa rinnakkain.",
      done: "Vierailija näkee profiilin tilastoineen yksityisessä selainikkunassa, ja tilastoluvut täsmäävät tietokannan tarkistuskyselyyn; rautalankavertailu on päiväkirjassa.",
      record: "Kirjoita työviikon 8 merkintään: poikkeamat rautalangasta perusteluineen, T9:n tulos sekä (jos aito bugi osui tälle viikolle) virheenkorjausketju 1 kokonaisuudessaan.",
      skills: ["käyttöliittymän toteutus suunnitelmista (p6)", "Reactin hookit ja reititysparametrit (k3)", "SQL-koosteet", "virheiden jäljitys kehittäjätyökaluilla (p2)"],
      steps: [
        ["Koostekyselyt.", "Lukumäärät tiloittain ja laitteittain suoraan SQL:llä."],
        ["Kooste-API.", "Yksi reitti palauttaa koko profiilin datan."],
        ["Komponentit.", "Tilastokortit, ”pelaa nyt” -lista ja historia, itse rakennettuina."],
        ["Reititysparametri.", "react-routerin `:nimi`-parametri profiilin osoitteessa."],
        ["Vierailijatesti.", "Avaa profiili yksityisessä selainikkunassa ilman kirjautumista."],
        ["Rautalankavertailu.", "Kuvakaappaus rinnan luonnoksen kanssa, poikkeamat kirjattuna."]
      ],
      help: {
        title: "SQL-koosteet ja profiilin komponenttipuu",
        tree: "ProfiiliSivu (/kayttaja/:nimi)\n├─ ProfiiliOtsikko      nimi · kuva · liittymispäivä\n├─ TilastoKortit        lukumäärät tiloittain\n├─ LaiteJakauma        lukumäärät laitteittain\n├─ PelaaNytLista       pelaa_nyt = 1\n└─ HistoriaLista       status_history aikajärjestyksessä",
        actions: [
          "Kirjoita koostekyselyt SQL:llä. Älä laske lukuja frontissa koko datasta.",
          "Kokoa profiilin data yhteen API-reittiin, jotta sivu ei tee viittä pyyntöä.",
          "Rakenna tilastokortit ja listat itse ilman valmista UI-kirjastoa.",
          "Reititä profiili nimen mukaan ja käsittele tuntematon nimi selkeällä viestillä.",
          "Aseta viikon 2 rautalanka ja kuvakaappaus rinnakkain ja kirjaa jokainen poikkeama perusteluineen."
        ],
        code: "KOOSTEKYSELYN RUNKO\nSELECT tila, COUNT(*) AS maara\nFROM games\nWHERE user_id = ?\nGROUP BY tila;\n\nSELECT laite, COUNT(*) AS maara\nFROM games\nWHERE user_id = ?\nGROUP BY laite\nORDER BY maara DESC;\n\nTARKISTUS: laske sama luku käsin kannasta ja vertaa sivun näyttämään lukuun.\n\nT9 · raja · profiili, jolla 0 peliä → nollatilastot ja tyhjän tilan viesti, ei kaatumista\nOdotus ennen ajoa: ____________________  Toteutunut: ____________________",
        test: "Avaa profiili yksityisessä selainikkunassa ilman kirjautumista ja vertaa tilastolukuja suoraan kannasta ajettuun tarkistuskyselyyn.",
        links: [["SQLite: SELECT ja GROUP BY", "https://www.sqlite.org/lang_select.html"], ["Chrome DevTools: Network", "https://developer.chrome.com/docs/devtools/network"]]
      },
      example: "Poikkeamakirjaus: ”Luonnoksessa tilastot olivat piirakkana; toteutin lukukortteina, koska luvut ovat vertailukelpoisempia ja toteutus on saavutettavampi.”",
      notEnough: "Profiili näyttää vain pelilistan ilman koosteita; ”tein sivun fiilispohjalta” ilman vertailua luonnokseen."
    },

    9: {
      type: "feature",
      feature: "Pelilistaa voi hakea ja suodattaa nimen, laitteen ja tilan mukaan suoraan tietokantakyselyssä, ja toinen ulkoinen komponentti on tuotu perustellusti.",
      connection: "Viikon 8 profiili näytti, että pelejä kertyy nopeasti. Nyt sama data saa haun ja suodatuksen: kyselyssä, ei selaimen muistissa.",
      deliverable: "Haku ja suodatus API-parametreina parametrisoiduilla kyselyillä, suodatuskäyttöliittymä tyhjän tuloksen tiloineen, perustelumuistio toisesta ulkoisesta komponentista sekä kokoelmien laajennuspäätöksen kriteerit.",
      why: "Ilman hakua arkisto muuttuu käyttökelvottomaksi heti kun pelejä on kymmeniä; ulkoisen komponentin perustelu erottaa kirjaston käyttäjän kirjaston ymmärtäjästä (k4). Kokoelmat on tietoisesti erotettu omaksi laajennuspäätökseksi: yksi kunnolla tehty ominaisuus opettaa enemmän kuin kolme puolivalmista.",
      done: "Suodatus ”NES + pelattu läpi” palauttaa vain oikeat rivit sekä käyttöliittymässä että suoralla API-kutsulla; haku ilman osumia näyttää tyhjän tilan viestin; perustelumuistio ulkoisesta komponentista ja kokoelmien päätöskriteerit ovat repositoryssa.",
      record: "Kirjoita työviikon 9 merkintään: miten kokosit WHERE-ehdot turvallisesti, mikä ulkoinen komponentti valikoitui ja miksi, arviosi sen itse tekemisen työmäärästä sekä kokoelmien päätöskriteerit.",
      skills: ["ulkoiset komponentit perustellusti (k4)", "rajapinnat ja kyselyparametrit (s10)", "parametrisoidut kyselyt ja injektion torjunta"],
      steps: [
        ["Kyselyparametrit.", "API suodattaa SQL:ssä, ei frontissa koko dataa selaamalla."],
        ["Turvallinen SQL.", "Kokoa WHERE-ehdot parametrisoituina, ei merkkijonoliimausta."],
        ["Suodatuskäyttöliittymä.", "Kentät, valinnat ja tulosten päivitys."],
        ["Tyhjä tulos.", "Viesti käyttäjälle ja suodattimien nollaus."],
        ["Ulkoisen komponentin vertailu.", "Kaksi ehdokasta, valinta, konfigurointi ja käyttö yhdessä paikassa perustellusti."],
        ["Testaa.", "Kirjaa ja aja T10–T11 (suodatus, tyhjä hakutulos)."]
      ],
      help: {
        title: "Suodatuksen SQL-runko ja komponenttivertailu",
        tree: "GET /api/games?nimi=&laite=&tila=\n  ehdot = []   arvot = []\n  jos nimi  → ehdot.push(\"nimi LIKE ?\")   arvot.push('%' + nimi + '%')\n  jos laite → ehdot.push(\"laite = ?\")     arvot.push(laite)\n  jos tila  → ehdot.push(\"tila = ?\")      arvot.push(tila)\n  SELECT * FROM games\n  [ WHERE ehdot.join(\" AND \") ]\n  ORDER BY nimi",
        actions: [
          "Rakenna WHERE-ehdot listasta ja anna arvot aina parametreina. Älä liimaa niitä kyselymerkkijonoon.",
          "Toteuta suodatuskentät ja päivitä tulokset API-kutsulla, älä suodata koko dataa selaimessa.",
          "Tee tyhjän tuloksen tila, jossa on viesti ja nappi suodattimien nollaukseen.",
          "Vertaile kaksi ulkoista komponenttiehdokasta, valitse toinen ja arvioi mitä sen tekeminen itse maksaisi.",
          "Kirjaa suunnitelmaan kokoelmien laajennuspäätöksen kriteerit: toteutus vain, jos P0 ja testaus ovat aikataulussa työviikolla 11."
        ],
        code: "KOMPONENTTIVERTAILUN POHJA\nEhdokas | Mihin tarpeeseen | Koko ja riippuvuudet | Saavutettavuus | Itse tekemisen arvio\nA       |                  |                      |                |\nB       |                  |                      |                |\nValinta ja perustelu (2–3 virkettä): ______________________________\nRiippuvuus kirjattu dokumentaatioon: kyllä / ei\n\nKOKOELMIEN PÄÄTÖSKRITEERIT (päätös työviikolla 11)\n[ ] P0 on kokonaan valmis ja tuotannossa\n[ ] testimatriisi on ajettavissa aikataulussa\n[ ] jäljellä on riittävästi aikaa omalle haaralle vaiheessa C\nMuuten: kokoelmat siirtyvät v1.1-listalle. Rajauspäätös, ei epäonnistuminen.",
        test: "Aja sama suodatus sekä käyttöliittymästä että suoraan API-osoitteesta kyselyparametreilla: tulosten pitää olla identtiset.",
        links: [["OWASP: SQL Injection Prevention", "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"]]
      },
      example: "Komponenttiperustelu: ”Kaaviokirjasto piirtää saavutettavan pylväskaavion; itse tehtynä SVG-toteutus veisi arviolta viikon ja olisi ydinosaamisen ulkopuolella.”",
      notEnough: "Suodatus toteutettu frontissa `filter()`-metodilla koko datalle; ”Asensin kirjaston X” ilman perustelua, konfiguraation ymmärrystä tai riippuvuuden kirjausta."
    },

    10: {
      type: "katselmointi",
      feature: "Asiakkaan edustaja on kokeillut julkaistua versiota, ja palaute on kirjattu hänen omilla sanoillaan, priorisoitu ja muutettu issueiksi.",
      excerpt: "Noin puolivälissä haluan itse kokeilla palvelua.",
      connection: "Vaihe B on rakennettu omien oletusten varassa. Nyt ulkopuolinen käyttää palvelua itse, ja vaiheen C työjärjestys johdetaan hänen havainnoistaan.",
      deliverable: "Katselmointimuistio (rooli, ajankohta, vähintään viisi lainausta erillään tulkinnasta), priorisoitu issue-taulu ja yhteenvetoviesti asiakkaalle.",
      why: "Tämä on viimeinen hetki muuttaa suuntaa halvalla: vaiheen C työjärjestys johdetaan tästä palautteesta, ei omista mieltymyksistä.",
      done: "Katselmointimuistiossa on vähintään viisi asiakkaan havaintoa hänen omilla sanoillaan erillään omasta tulkinnasta, ja issueissa on niistä johdetut priorisoidut tehtävät.",
      record: "Kirjoita työviikon 10 merkintään: yllättävin havainto ja miksi se yllätti, mitkä muutokset sovittiin ennen v1.0:aa ja mitkä siirtyivät, sekä linkki katselmointimuistioon.",
      skills: ["version katselmointi (s3)", "ratkaisujen arviointi yhdessä (p10)", "asiakaslähtöinen viestintä (s2)"],
      steps: [
        ["Runko.", "Päätä, mitä asiakas tekee itse ja mitä kysyt lopuksi."],
        ["Tilaisuus.", "Kirjaa nimetty rooli ja ajankohta; asiakas käyttää, sinä et auta ellei ole pakko."],
        ["Kirjaus.", "Asiakkaan omat sanat lainauksina, oma tulkinta erikseen."],
        ["Priorisointi yhdessä.", "Mikä muuttuu ennen v1.0:aa ja mikä siirtyy."],
        ["Issuet.", "Jokainen sovittu muutos omaksi tehtäväksi."],
        ["Yhteenveto asiakkaalle.", "Lyhyt viesti ilman teknistä jargonia."]
      ],
      help: {
        title: "Katselmointirunko ja havainto/tulkinta-kirjaus",
        tree: "DEMOPOLKU (asiakas tekee itse)\n1. rekisteröityminen\n2. pelin lisääminen\n3. tilan vaihtaminen\n4. oman profiilin katsominen\n5. toisen jäsenen profiilin löytäminen\n\nLOPUKSI KYSYTÄÄN\n- Mikä oli helpointa? Mikä hankalinta?\n- Mitä odotit tapahtuvan, kun painoit ___?\n- Mitä puuttuu, jotta ottaisit tämän käyttöön?",
        actions: [
          "Sovi ohjaajan kanssa nimetty ulkopuolinen henkilö asiakkaan edustajaksi, ei oma ohjaava opettaja.",
          "Valmistele demopolku ja kirjaa se etukäteen muistioon.",
          "Anna asiakkaan käyttää palvelua itse; kirjaa mitä hän tekee ja sanoo, äläkä neuvo ellei työ pysähdy.",
          "Erota muistiossa asiakkaan sanat ja oma tulkintasi eri sarakkeisiin.",
          "Priorisoikaa muutokset yhdessä ja tee jokaisesta issue.",
          "Lähetä yhteenveto asiakkaalle ja tallenna se project-docs/viestit.md-tiedostoon."
        ],
        code: "KATSELMOINTIMUISTIO\nRooli: ______________________  Ajankohta: työviikko 10, ____.\nVersio (commit tai tag): ______________________\n\n#  Havainto (asiakkaan omin sanoin)          | Oma tulkinta                     | Päätös\n1  \"________________________________\"        | ________________________________ | ennen v1.0 / v1.1\n2  \"________________________________\"        | ________________________________ | ennen v1.0 / v1.1\n3  \"________________________________\"        | ________________________________ | ennen v1.0 / v1.1\n4  \"________________________________\"        | ________________________________ | ennen v1.0 / v1.1\n5  \"________________________________\"        | ________________________________ | ennen v1.0 / v1.1\n\nSovitut issuet: #____ #____ #____",
        test: "Lue muistio läpi ja tarkista, että jokaisesta rivistä näkee, mikä on asiakkaan sanomaa ja mikä sinun tulkintaasi.",
        links: []
      },
      example: "Kirjauspari: Havainto: ”En löytänyt mistä tilaa vaihdetaan.” Tulkinta: ”Tilanappi hukkuu kortin muiden tietojen sekaan. Nostetaan ensisijaiseksi toiminnoksi.”",
      notEnough: "”Asiakas tykkäsi, pieniä korjauksia tulossa” -yhteenveto ilman lainauksia ja issueita."
    },

    /* ============================ VAIHE C ============================ */
    11: {
      type: "feature",
      feature: "Katselmoinnin tärkein muutos on toteutettu omassa haarassa ja yhdistetty pull requestilla pääversioon, ja suunnitelman työmääräarviot on päivitetty toteutunutta vasten.",
      connection: "Viikon 10 palaute muuttuu koodiksi. Samalla suunnitelman arviot testataan toteumaa vasten ja kokoelmien laajennuspäätös tehdään viikolla 9 kirjatuilla kriteereillä.",
      deliverable: "Feature-haara ja pull request kuvauksineen, muutos tuotannossa, päivitetty suunnitelma arvioineen ja kokoelmapäätöksineen sekä asiakasviesti.",
      why: "Hallittu yhdistäminen pääversioon (s13) on oma vaatimuksensa, ja palautteesta johdettu muutos todistaa, että katselmointi ei ollut seremonia.",
      done: "PR:ssä on kuvaus, viittaus palautteeseen ja katselmointikommentti; muutos on tuotannossa; suunnitelman diff näyttää päivitetyt arviot.",
      record: "Kirjoita työviikon 11 merkintään: mikä muutos valittiin ja miksi, miten arvio erosi toteumasta, kokoelmien päätös perusteluineen sekä PR-linkki.",
      skills: ["liittäminen olemassa olevaan versioon (s13)", "versionhallinnan työnkulku (s12)", "suunnittelun ja arvioinnin päivitys (s6)"],
      resources: [["Avaa suunnitelmalomake", "#suunnitelma", false]],
      steps: [
        ["Valinta ja kriteerit.", "Viittaa katselmointimuistion havaintoon ja kirjaa hyväksymiskriteerit."],
        ["Haara.", "Nimeä haara muodossa `feature/…`."],
        ["Toteutus pienin commitein.", "Yksi looginen muutos per commit."],
        ["PR ja itsekatselmointi.", "Kuvaukseen: mitä, miksi ja miten testattu."],
        ["Merge ja konflikti.", "Yhdistä pääversioon hallitusti ja ratkaise mahdollinen konflikti."],
        ["Suunnitelmapäivitys.", "Kirjaa arvio vastaan toteuma ja tee kokoelmien laajennuspäätös."]
      ],
      help: {
        title: "Haara, pull request ja suunnitelman päivitys",
        tree: "main ─────●───────────────●── merge ──●─→ tuotanto\n           \\                 /\n            ●──●──●──●──────      feature/tilanappi-ensisijaiseksi\n            pienet commitit",
        actions: [
          "Valitse katselmoinnin tärkein havainto ja kirjaa sille hyväksymiskriteerit.",
          "Luo feature-haara ja tee muutos pienin, kuvaavasti nimetyin commitein.",
          "Avaa pull request ja käy oma muutoksesi läpi kuin vieraan koodina.",
          "Yhdistä pääversioon ja ratkaise konflikti hallitusti. Jos konfliktia ei synny, pyydä ohjaajalta harjoituskonflikti.",
          "Päivitä suunnitelmaan arvio vs. toteuma ja tee kokoelmien laajennuspäätös viikon 9 kriteereillä.",
          "Kerro asiakkaalle lyhyesti, mikä muuttui."
        ],
        code: "PR-KUVAUKSEN POHJA\n## Mitä\n______________________________________________\n## Miksi\nKatselmointimuistio, havainto ____: \"__________________________\"\n## Miten testattu\n- Testitapaus T__ ajettu uudelleen: tulos ______\n- Uusi tapaus: ______________________________\n## Riskit ja rajaukset\n______________________________________________\n\nARVIO VS. TOTEUMA\nIssue | Arvio (h) | Toteuma (h) | Mitä opit arvioinnista\n#__   |           |             |",
        test: "Avaa pull request selaimessa: näkeekö ulkopuolinen kuvauksesta, mitä muuttui, miksi ja millä testillä se todennettiin?",
        links: [["GitHub Docs: About pull requests", "https://docs.github.com/en/pull-requests"]]
      },
      example: "PR-kuvaus: ”Nostaa tilanvaihdon pelikortin ensisijaiseksi toiminnoksi (katselmointi, havainto 2). Testattu T6 uudelleen + uusi tapaus mobiilissa.”",
      notEnough: "Suora push mainiin ”koska teen yksin”; PR ilman kuvausta."
    },

    12: {
      type: "feature",
      feature: "Palvelu toimii puhelimella ja pelkällä näppäimistöllä, ja Lighthouse-tulokset ennen ja jälkeen on kirjattu parannuksineen; CSS on omaa käsialaa.",
      connection: "Kaikki näkymät ovat nyt olemassa. Ennen testausviikkoa ne viimeistellään laitteille ja käyttötavoille, joita et itse käytä kehittäessäsi.",
      deliverable: "Omat taitekohdat ja mobiiliin korjatut näkymät, tarkistettu näppäinpolku ja fokus, korjatut kontrastit ja label-kytkennät sekä Lighthouse-raportit ennen ja jälkeen.",
      why: "Saavutettavuus on webprofiilissa vaatimus, ei kaunistus. Yhdistyksen jäsenet käyttävät palvelua sohvalta puhelimella.",
      done: "Pelin lisäys onnistuu puhelimella ja pelkällä näppäimistöllä; Lighthouse-saavutettavuus on kirjattu ennen ja jälkeen, ja jokainen korjaus on selitetty omin sanoin.",
      record: "Kirjoita työviikon 12 merkintään: valitsemasi taitekohdat perusteluineen, mitkä ongelmat näppäintestaus paljasti, Lighthouse-luvut ennen ja jälkeen sekä T12:n tulos.",
      skills: ["responsiivinen CSS itse", "saavutettavuus: näppäinkäyttö, kontrasti, labelit", "käyttöliittymän viimeistely suunnitelmia vasten (p6)"],
      steps: [
        ["Mobiilikatselmus.", "Käy keskeiset polut läpi oikealla puhelimella."],
        ["Taitekohdat.", "Päätä omat breakpointit sisällön mukaan, älä laitemallien."],
        ["Näppäintestaus.", "Tee rekisteröityminen ja pelin lisäys ilman hiirtä."],
        ["Kontrastit ja labelit.", "Tarkista myös violetti aksentti ja jokaisen kentän label-kytkentä."],
        ["Lighthouse-ajot.", "Ota ennen-luku talteen ennen korjauksia."],
        ["Kirjaus.", "Selitä omin sanoin, mikä parani ja miksi."]
      ],
      help: {
        title: "Saavutettavuuden tarkistuslista",
        tree: "NÄPPÄINPOLKU (ilman hiirtä)\nTab   → seuraava kohde   Vaihto+Tab → edellinen\nEnter → painike ja linkki  Väli → valintaruutu\nEsc   → sulkee modaalin ja palauttaa fokuksen\n\nTarkista: näkyykö fokus aina? Eteneekö järjestys ylhäältä alas?",
        actions: [
          "Käy keskeiset näkymät läpi oikealla puhelimella ja korjaa vaakavieritys pois.",
          "Päätä taitekohdat sen mukaan, missä sisältö hajoaa. Kirjaa perustelu.",
          "Tee koko pelin lisäys pelkällä näppäimistöllä ja korjaa löytämäsi katkot.",
          "Tarkista kontrastit, alt-tekstit, label-kytkennät ja otsikkohierarkia.",
          "Aja Lighthouse ennen ja jälkeen ja selitä jokainen muutos omin sanoin."
        ],
        code: "SAAVUTETTAVUUDEN TARKISTUSLISTA\n[ ] fokus näkyy jokaisessa kohteessa, myös omissa napeissa\n[ ] fokusjärjestys vastaa sivun luettavaa järjestystä\n[ ] jokaisella kentällä on label, joka on ohjelmallisesti kytketty\n[ ] virheviesti on kytketty kenttään (aria-describedby)\n[ ] tekstin kontrasti vähintään 4.5:1, myös violetilla aksentilla\n[ ] jokaisella merkityksellisellä kuvalla on alt-teksti\n[ ] otsikot h1 → h2 → h3 ilman hyppyjä\n[ ] 320 px leveydellä ei vaakavieritystä\n\nT12 · raja · profiilisivu 320 px leveydellä: ei vaakavieritystä, toiminnot käytettävissä\nOdotus ennen ajoa: ____________________  Toteutunut: ____________________",
        test: "Irrota hiiri ja lisää yksi peli alusta loppuun pelkällä näppäimistöllä. Jos jäät jumiin, olet löytänyt korjattavan kohdan.",
        links: [["MDN: Accessibility", "https://developer.mozilla.org/en-US/docs/Web/Accessibility"], ["Lighthouse", "https://developer.chrome.com/docs/lighthouse/overview"]]
      },
      example: "Korjauskirjaus: ”Fokus katosi modaalin taakse. Siirsin fokuksen modaalin ensimmäiseen kenttään ja palautin sulkiessa.”",
      notEnough: "”Lisäsin aria-labelit” ilman näppäintestausta; Lighthouse-luku ilman selitystä siitä, mistä muutos tuli."
    },

    13: {
      type: "laatu",
      feature: "Koko testimatriisi (vähintään 12 tapausta kolmessa luokassa) on ajettu tuotantoversiota vasten, ja löydökset on viety täydellisinä virheenkorjausketjuina korjauksiin asti.",
      connection: "Viikkojen 4–12 aikana syntyneet yksittäiset testitapaukset kootaan yhdeksi matriisiksi ja ajetaan kerralla tuotantoa vasten, ensimmäistä kertaa kokonaisuutena.",
      deliverable: "Täydennetty testimatriisi tuloksineen, virheenkorjausketju 2 regressiotestiin asti sekä korjauscommitit.",
      why: "Testaus ilman ennalta kirjattua odotusta on klikkailua, ja ilman toistamisohjetta korjaus on arvaus.",
      done: "Matriisin jokaisella rivillä on odotettu tulos (kirjattu ennen ajoa) ja toteutunut tulos; vähintään yksi täydellinen ketju on viety regressiotestiin asti tällä viikolla.",
      record: "Kirjoita työviikon 13 merkintään: montako tapausta epäonnistui ja mitä ne paljastivat, ketju 2 kokonaisuudessaan sekä mitä regressiotestasit.",
      skills: ["järjestelmällinen testaus (p3)", "virheiden etsintä ja korjaus (p2)", "testiluokat ja regressio"],
      resources: [["Lataa dokumentointipohjat (.docx)", "downloads/nayton-dokumentointipohjat.docx", true]],
      steps: [
        ["Matriisin täydennys.", "Aiemmat T1–T12 ja uudet tapaukset; pidä luokat tasapainossa."],
        ["Ajo tuotantoa vasten.", "Ei localhost-oikaisua."],
        ["Havaintojen kirjaus.", "Toistamisohje niin tarkasti, että toinen henkilö toistaa vian."],
        ["Syyn jäljitys.", "Kehittäjätyökalut, verkkopyynnöt ja palvelinloki."],
        ["Korjaus ja uusintatesti.", "Korjauscommit ja sama testi uudelleen."],
        ["Regressiotarkistus.", "Aja ydinpolut uudelleen korjauksen jälkeen."]
      ],
      help: {
        title: "Testimatriisi ja virheenkorjausketjun kirjaus",
        tree: "LUOKAT\nnormaali käyttö  T1 · T3 · T6 · T10 · T14\nrajat            T4 · T9 · T11 · T12\nvirhetilanteet   T2 · T5 · T7 · T8 · T13\n\nKolmannesperiaate: jokaisessa luokassa suunnilleen kolmannes tapauksista.",
        actions: [
          "Täydennä matriisi niin, että tapauksia on vähintään 12 ja luokat ovat tasapainossa.",
          "Kirjoita jokaisen tapauksen odotettu tulos ennen kuin ajat sen.",
          "Aja koko matriisi julkaistua tuotantoversiota vasten.",
          "Kirjaa jokainen löydös toistamisohjeineen ja jäljitä syy kehittäjätyökalujen ja palvelinlokin avulla.",
          "Korjaa, uusintatestaa ja aja lopuksi ydinpolut regressiona.",
          "Aja T13: katkaise verkkoyhteys kesken lomakkeen lähetyksen."
        ],
        code: "TESTIMATRIISIN RIVI\nId | Luokka | Askeleet | Odotettu tulos | Toteutunut tulos | Viikko\nT__|        |          |                |                  |\n\nVIRHEENKORJAUSKETJU (ketju 2)\n1. Havainto:        ______________________________________\n2. Toistamisohje:   1) ______ 2) ______ 3) ______\n3. Syy:             ______________________________________\n4. Korjauscommit:   ______________________________________\n5. Uusintatesti:    T__ → tulos ______\n6. Regressiotesti:  mitä muuta ajettiin ja tulos ______",
        test: "Anna toistamisohje toiselle henkilölle ilman muuta selitystä. Jos hän ei saa vikaa toistettua, ohje ei ole vielä valmis.",
        links: []
      },
      example: "Rajatapaus: ”T9: profiili, jolla 0 peliä → tilastot näyttävät nollat, sivu ei kaadu, tyhjän tilan viesti näkyy.”",
      notEnough: "”Testasin kaikki toiminnot, kaikki toimii” ilman matriisia; keksitty bugi ketjun täytteeksi. Jos aitoja ei löydy, ohjaaja antaa vikatehtävän."
    },

    14: {
      type: "laatu",
      feature: "Koodin rakenne ja nimeäminen on refaktoroitu pienin commitein ilman toiminnan muutosta, ja tietoturva-arvio on dokumentoitu ratkaisuineen.",
      connection: "Viikon 13 testimatriisi antaa turvaverkon: nyt koodia voi siistiä ja todistaa regressioajolla, ettei toiminta muuttunut.",
      deliverable: "Refaktorointikohteiden lista, refaktorointicommit-sarja, `project-docs/tietoturva-arvio.md` sekä regressiokirjaus ennen ja jälkeen.",
      why: "Ylläpidettävä koodi (p5) todentuu vain ennen/jälkeen-näytöllä, ja tietoturva-arvio ilman koodiviittauksia on esseetä, ei arviota.",
      done: "Refaktorointicommitit ovat pieniä ja kuvaavasti nimettyjä; testimatriisin ydinrivit menevät läpi ennen ja jälkeen; `project-docs/tietoturva-arvio.md` kattaa vähintään viisi riskiä ratkaisuineen ja koodiviittauksineen.",
      record: "Kirjoita työviikon 14 merkintään: mitkä nimet ja rakenteet muuttuivat ja miksi, viisi tunnistamaasi tietoturvariskiä ratkaisuineen sekä mitkä riskit jäivät avoimiksi.",
      skills: ["ylläpidettävä koodi (p5)", "rakenteinen ohjelmointi syvemmin (p4)", "tietoturvan arviointi (s11)"],
      steps: [
        ["Rakennekatselmus.", "Lue oma koodi kuin vieraan silmin ja listaa kohteet."],
        ["Refaktorointi.", "Yksi kohde = yksi commit."],
        ["Regressioajo.", "Todista, ettei toiminta muuttunut."],
        ["Tietoturvatarkistuslista.", "Käy riskit läpi omaa koodia vasten."],
        ["Arvio dokumentiksi.", "Riski → ratkaisu → missä koodissa."],
        ["Avoimet riskit.", "Kirjaa rehellisesti, mitä ei ehditty."]
      ],
      help: {
        title: "Refaktorointikohteet ja tietoturvatarkistuslista",
        tree: "REFAKTOROINTIKOHTEIDEN TUNNISTUS\n□ komponentti yli ~150 riviä          → jaa vastuun mukaan\n□ sama logiikka kahdessa paikassa     → nosta omaksi funktioksi tai hookiksi\n□ nimi ei kerro sisältöä (data, temp) → nimeä uudelleen\n□ komponentti sekä hakee että piirtää → erota datahaku hookkiin\n□ reittitiedosto tekee kaiken         → jaa moduuleihin",
        actions: [
          "Listaa refaktorointikohteet ennen kuin muutat mitään.",
          "Tee jokainen kohde omana committinaan kuvaavalla viestillä.",
          "Aja testimatriisin ydinrivit ennen ja jälkeen ja kirjaa tulokset.",
          "Käy tietoturvariskit läpi omaa koodia vasten ja kirjoita arvio riski → ratkaisu → koodiviittaus.",
          "Kirjaa loppuun rehellisesti ne riskit, joita ei ehditty käsitellä."
        ],
        code: "TIETOTURVATARKISTUSLISTA\nRiski                        | Ratkaisu tässä projektissa | Missä koodissa\nSyötteiden validointi        |                            |\nSalasanojen tallennus        |                            |\nIstunnot tai tokenit         |                            |\nTietojen näkyvyys (vierailija)|                           |\nSQL-injektio                 |                            |\nXSS (käyttäjän kommentit)    |                            |\n\nAvoimet riskit (ei ehditty): ______________________________\n\nREGRESSIOKIRJAUS\nTestirivi | Tulos ennen refaktorointia | Tulos jälkeen",
        test: "Aja testimatriisin ydinrivit refaktoroinnin jälkeen: jos yksikin tulos muuttui, refaktorointi muutti toimintaa eikä ollut refaktorointia.",
        links: [["OWASP Top Ten", "https://owasp.org/www-project-top-ten/"]]
      },
      example: "Ennen ja jälkeen: ”`data2` → `profiiliKooste`; PeliKortin tilanvaihtologiikka omaan hookkiin `useTilanvaihto`.”",
      notEnough: "Tekoälyn yleinen ”koodisi näyttää hyvältä” -arvio; tietoturva-arvio, jossa riskit on lueteltu ilman viittausta omaan koodiin."
    },

    15: {
      type: "laatu",
      feature: "Käyttöönotto-ohje ja dokumentaatio ovat niin valmiit, että ulkopuolinen saa palvelun käyntiin pelkän ohjeen avulla; todistettu omalla kuivaharjoituksella puhtaassa kansiossa.",
      excerpt: "Saan kirjallisen ohjeen, jolla yhdistys saa palvelun käyttöön vaikka tekijä ei ole paikalla.",
      connection: "Koodi on viikon 14 jäljiltä siistiä ja testattua; nyt siitä kirjoitetaan ohje, jota työviikon 16 ulkopuolinen testaaja seuraa ilman suullista apua.",
      deliverable: "README ja käyttöönotto-ohje, `.env.example`, riippuvuustaulukko ja arkkitehtuurikuvaus (k7-lista), kuivaharjoituksen loki sekä RC-jäädytyksen tarkistuslista.",
      why: "Asiakkaan ”vaikka tekijä ei ole paikalla” -vaatimus ja työviikon 16 julkaisutesti kaatuvat, jos ohje olettaa hiljaista tietoa.",
      done: "`git clone` puhtaaseen kansioon ja ohjeen komennot tuottavat toimivan sovelluksen ilman yhtään ohjeen ulkopuolista temppua; jokainen matkalla kirjattu tökkäys on korjattu ohjeeseen.",
      record: "Kirjoita työviikon 15 merkintään: mihin kuivaharjoitus tökkäsi ja miten korjasit ohjeen, mitkä riippuvuudet vaativat selityksen sekä jäädytyslistan sisältö.",
      skills: ["dokumentointi sovitulla tavalla (k7)", "ympäristöasetusten hallinta", "asiakaslähtöinen ohjeistus"],
      steps: [
        ["README-rakenne.", "Mitä palvelu tekee, kenelle ja miten se saadaan käyntiin."],
        ["Ympäristöasetukset.", "`.env.example` ilman salaisuuksia."],
        ["Riippuvuustaulukko.", "Kirjasto, versio ja mihin sitä käytetään."],
        ["Arkkitehtuurikuvaus.", "Client, server ja tietokanta yhdellä kuvalla."],
        ["Kuivaharjoitus.", "Kloonaa puhtaaseen kansioon ja seuraa ohjetta orjallisesti; kirjaa jokainen tökkäys."],
        ["Jäädytyslista.", "Kokoa työviikon 16 RC-jäädytyksen tarkistuslista."]
      ],
      help: {
        title: "README-runko ja kuivaharjoituksen kirjaus",
        tree: "README.md\n1. Mikä PeliHylly on ja kenelle\n2. Vaatimukset (Node-versio, Git)\n3. Asennus (client ja server)\n4. Ympäristömuuttujat (.env.example)\n5. Tietokannan migraatiot\n6. Käynnistys kehityksessä\n7. Tuotantobuild ja julkaisu\n8. Riippuvuudet ja mihin niitä käytetään\n9. Tunnetut puutteet ja v1.1-lista",
        actions: [
          "Kirjoita jokainen ohjeen askel niin, että siihen kuuluu odotettu tuloste tai näkyvä lopputulos.",
          "Tee .env.example, jossa on jokainen tarvittava muuttuja ilman todellisia salaisuuksia.",
          "Taulukoi riippuvuudet: kirjasto, versio ja mihin sitä käytetään.",
          "Piirrä yksi kuva client–server–tietokanta-rakenteesta.",
          "Kloonaa repository puhtaaseen kansioon ja seuraa ohjetta kirjaimellisesti. Kirjaa jokainen kohta, jossa jouduit arvaamaan.",
          "Korjaa jokainen tökkäys ohjeeseen ja kokoa jäädytyslista."
        ],
        code: "KUIVAHARJOITUKSEN LOKI\nAskel | Ohjeen teksti | Mitä oikeasti tapahtui | Korjaus ohjeeseen\n1     |               |                        |\n2     |               |                        |\n\nRC-JÄÄDYTYKSEN TARKISTUSLISTA (työviikkoa 16 varten)\n[ ] uusia ominaisuuksia ei enää lisätä\n[ ] testimatriisin ydinrivit menevät läpi\n[ ] .env.example vastaa tuotannon muuttujia\n[ ] migraatiot ajautuvat puhtaaseen kantaan\n[ ] README on kuivaharjoitettu ja korjattu\n[ ] tag-nimi sovittu (esim. v1.0-rc1)",
        test: "Kloonaa repository uuteen kansioon ja seuraa ohjetta ilman muistiasi: jos joudut kertaakaan arvaamaan, ohje ei ole vielä valmis.",
        links: []
      },
      example: "Ohjeen askel odotetulla tulosteella: ”Aja `npm run migrate`: tulosteessa lukee ’taulut luotu (5)’.”",
      notEnough: "README, jossa on vain ”npm install, npm run dev”; ohje, jota ei ole itse seurattu puhtaassa kansiossa."
    },

    /* ============================ VAIHE D ============================ */
    16: {
      type: "katselmointi",
      feature: "Sisältö on jäädytetty, julkaisuehdokas on julkaistu asiakkaan ympäristöön, ja ulkopuolinen testaaja on ottanut palvelun käyttöön pelkän kirjallisen ohjeen avulla; vain estävät virheet korjataan.",
      excerpt: "Saan kirjallisen ohjeen, jolla yhdistys saa palvelun käyttöön vaikka tekijä ei ole paikalla.",
      connection: "Viikon 15 ohje pannaan koetukselle: toinen ulkopuolinen henkilö ottaa julkaisuehdokkaan käyttöön puhtaassa ympäristössä ilman että saat auttaa.",
      deliverable: "RC-tag ja julkaistu julkaisuehdokas asiakkaan ympäristössä, julkaisutestin pöytäkirja, löydösten estävä/ei-estävä-luokittelu ja aloitettu virheenkorjausketju 3.",
      why: "Julkaisutesti puhtaassa ympäristössä on ainoa todiste siitä, että palvelu ja ohje toimivat jonkun muun kuin tekijän käsissä.",
      done: "Testaaja rekisteröityi, lisäsi pelin ja vaihtoi tilan ilman suullista apua, tai jokainen epäröintikohta on kirjattu ja luokiteltu; RC-tag on repositoryssa ja estävien vikojen ketjut aloitettu.",
      record: "Kirjoita työviikon 16 merkintään: missä testaaja epäröi ja mitä hän sanoi, mitkä löydökset ovat estäviä ja miksi, sekä ketju 3:n alku.",
      skills: ["version katselmointi (s3)", "julkaisu asiakkaan ympäristöön (k6)", "virheiden jäljitys tuoreeltaan (p2)", "estävä/ei-estävä-priorisointi"],
      resources: [["Avaa suunnitelmalomake", "#suunnitelma", false]],
      steps: [
        ["Jäädytys.", "Ei uusia ominaisuuksia tästä eteenpäin."],
        ["RC-julkaisu.", "Viten tuotantobuild, tag (esim. `v1.0-rc1`) ja asiakkaan ympäristö."],
        ["Testijärjestely.", "Nimetty rooli ja ajankohta kirjataan; T14 ajetaan tässä."],
        ["Havainnointi.", "Testaaja puhuu, sinä kirjaat, et auta."],
        ["Luokittelu.", "Estävä vai ei, yhdessä ohjaajan kanssa."],
        ["Ketju 3.", "Aloita estävän vian täydellinen virheenkorjausketju."]
      ],
      help: {
        title: "Julkaisutestin järjestely ja luokittelukriteerit",
        tree: "TESTAAJALLE ANNETAAN\n- repositoryn osoite tai paketti\n- kirjallinen käyttöönotto-ohje\n- palvelun julkinen osoite\n\nTESTAAJALLE EI ANNETA\n- suullisia vinkkejä\n- valmiiksi täytettyä .env-tiedostoa\n- apua, ellei työ pysähdy kokonaan",
        actions: [
          "Jäädytä sisältö ja kirjaa jäädytyshetki committiin tai tagiin.",
          "Rakenna tuotantobuild, merkitse julkaisuehdokas tagilla ja julkaise asiakkaan ympäristöön.",
          "Sovi ohjaajan kanssa julkaisutestaaja, eri henkilö kuin työviikon 10 asiakkaan edustaja.",
          "Kirjaa testaajan omat sanat ja jokainen epäröintikohta ohjeen korjauslistaksi.",
          "Luokittele löydökset ohjaajan kanssa estäviin ja v1.1:een siirtyviin.",
          "Aloita estävästä löydöksestä virheenkorjausketju 3."
        ],
        code: "JULKAISUTESTIN PÖYTÄKIRJA\nTestaajan rooli: ______________  Ajankohta: työviikko 16, ____.\nVersio: v1.0-rc__   Ympäristö: puhdas kone / puhdas kansio\n\n#  Vaihe                    | Onnistui | Epäröinti (testaajan sanoin) | Korjaus ohjeeseen\n1  käyttöönotto ohjeesta    |          |                              |\n2  rekisteröityminen        |          |                              |\n3  pelin lisääminen         |          |                              |\n4  tilan vaihto             |          |                              |\n\nLUOKITTELUKRITEERIT\nEstävä      = estää P0-toiminnon, kadottaa dataa tai vuotaa tietoa\nEi estävä   = kosmeettinen, kiertotie olemassa → v1.1-lista\n\nT14 · normaali · puhtaan ympäristön käyttöönotto pelkän kirjallisen ohjeen avulla",
        test: "Katso pöytäkirjaa: pystyisikö ohjaaja luokittelemaan jokaisen löydöksen estäväksi tai ei-estäväksi pelkän kirjauksen perusteella?",
        links: []
      },
      example: "Luokittelu: ”Rekisteröityminen kaatuu tyhjään sähköpostiin → estävä. Tähtien väri himmeä → v1.1.”",
      notEnough: "Itse tehty ”julkaisutesti” omalla koneella omilla tunnuksilla; havainnot muistinvaraisesti jälkikäteen."
    },

    17: {
      type: "julkaisu",
      feature: "Estävät virheet on korjattu ja uusintatestattu, v1.0 on tuotannossa asiakkaan osoitteessa tagilla merkittynä, ja julkaisutiedote on kirjoitettu asiakkaan kielellä.",
      connection: "Työviikon 16 estävät löydökset korjataan ja ketju 3 viedään regressiotestiin asti; sen jälkeen sama osoite, joka avattiin työviikolla 3, saa version v1.0.",
      deliverable: "Korjatut estävät virheet ja ketju 3 regressiotestiin asti, tuotantobuild ja tag `v1.0`, julkaisutiedote asiakkaalle sekä savutestikirjaus.",
      why: "Työ ei saa loppua vaan valmistua: versioitu, tuotannossa oleva ja tiedotettu julkaisu on s14:n ja koko projektin päätepiste.",
      done: "Osoite toimii yksityisessä selainikkunassa ja toisella laitteella; repositoryssa on tag `v1.0`; julkaisutiedote kertoo asiakkaan kielellä, mitä palvelu tekee ja mitä siirtyi jatkoon.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät virheet korjattiin ja miten ne todennettiin, ketju 3 loppuun asti sekä savutestin tulokset molemmilta laitteilta.",
      skills: ["julkaisu tuotantoympäristöön (s14)", "julkaisu asiakkaan ympäristöön (k6)", "versiointi ja julkaisutiedote"],
      steps: [
        ["Korjaukset ja regressio.", "Vain estävät virheet; jäädytys pitää."],
        ["Ympäristötarkistus.", "Salaisuudet ympäristömuuttujissa, ei repossa."],
        ["Build ja tag.", "Tuotantobuild ja tag `v1.0`."],
        ["Julkaisu.", "Sama osoite kuin työviikosta 3."],
        ["Tiedote.", "Asiakkaan kielellä, ilman jargonia."],
        ["Savutesti.", "Yksityinen selainikkuna ja toinen laite."]
      ],
      help: {
        title: "Julkaisun tarkistuslista",
        tree: "JULKAISUN JÄRJESTYS\n1. estävien korjaus + uusintatesti\n2. regressio: ydinpolut uudelleen\n3. tuotantobuild\n4. ympäristömuuttujat tarkistettu\n5. migraatiot ajettu\n6. tag v1.0\n7. julkaisu\n8. savutesti kahdella laitteella\n9. tiedote asiakkaalle",
        actions: [
          "Korjaa vain estävät löydökset ja vie ketju 3 regressiotestiin asti.",
          "Tarkista, ettei yksikään salaisuus ole repositoryssa.",
          "Rakenna tuotantobuild, aja migraatiot ja merkitse versio tagilla `v1.0`.",
          "Julkaise samaan osoitteeseen, jonka asiakas on tuntenut työviikosta 3 asti.",
          "Kirjoita julkaisutiedote ilman teknistä jargonia ja kerro, mikä siirtyi v1.1:een.",
          "Savutestaa yksityisessä selainikkunassa ja toisella laitteella."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] estävät virheet korjattu ja uusintatestattu\n[ ] regressio ajettu ydinpoluille\n[ ] tuotantobuild syntyy virheittä\n[ ] ympäristömuuttujat asetettu, ei salaisuuksia repossa\n[ ] migraatiot ajettu tuotantokantaan\n[ ] tag v1.0 luotu ja viety etärepositoryyn (push)\n[ ] julkinen osoite toimii yksityisessä ikkunassa\n[ ] toinen laite testattu\n[ ] julkaisutiedote lähetetty ja tallennettu project-docs/viestit.md\n\nSAVUTESTI\nLaite 1: __________  tulos: __________\nLaite 2: __________  tulos: __________",
        test: "Avaa osoite laitteella, jolla et ole koskaan kirjautunut palveluun, ja tee koko polku rekisteröitymisestä tilanvaihtoon.",
        links: []
      },
      example: "Tiedotteen sävy: ”PeliHylly on nyt auki. Rekisteröidy, lisää ensimmäinen pelisi ja katso kaverin profiilia. Profiiliviestit tulevat seuraavassa versiossa.”",
      notEnough: "”Deployasin, toimii mulla” ilman tagia, tiedotetta ja puhtaan ympäristön tarkistusta."
    },

    18: {
      type: "naytto",
      feature: "Mitään uutta ei rakenneta: näyttömatriisin kaikki 32 vaatimusta on täsmälinkitetty työnäytteisiin, demo on harjoiteltu ja itsearvio kirjoitettu.",
      connection: "17 työviikkoa on tuottanut committeja, muistioita ja testirivejä. Viimeinen viikko tekee niistä löydettäviä: jokainen vaatimus saa suoran linkin.",
      deliverable: "Täsmälinkitetty näyttömatriisi, harjoiteltu 8–10 minuutin demo, kirjallinen itsearvio ja ohjaajalle luovutettu paketti.",
      why: "Osaaminen, jota arvioija ei löydä, ei ole näytössä olemassa: viimeinen viikko on löydettäväksi tekemistä, ei tuotantoa.",
      done: "Ohjaaja avaa matriisista satunnaisen rivin ja päätyy oikeaan työnäytteeseen alle minuutissa; demo pysyy harjoituksessa ajassa; itsearvio ja AI-loki ovat päiväkirjan mukana repositoryssa.",
      record: "Kirjoita työviikon 18 merkintään: mitkä matriisin rivit olivat vaikeimmat linkittää ja miksi, demon harjoiteltu kesto sekä itsearvion tärkein havainto.",
      skills: ["oman toiminnan arviointi (p11)", "näyttöaineiston jäsentäminen", "esittäminen"],
      resources: [["Siirry näyttömatriisiin", "#todisteet", false]],
      steps: [
        ["Matriisin linkitys.", "Rivi kerrallaan: avaa linkki ja tarkista, että se osoittaa oikeaan työnäytteeseen."],
        ["Aukkojen tarkistus ohjaajan kanssa.", "Käykää yhdessä läpi rivit, joille et löytänyt työnäytettä."],
        ["Demoharjoitus.", "Ääneen ja kellon kanssa, 8–10 minuuttia."],
        ["Itsearvio.", "Konkretia, ei yleisyyksiä."],
        ["Puskuri.", "Anna toisen henkilön tarkistaa paketti."],
        ["Luovutus.", "Luovuta paketti ohjaajalle."]
      ],
      help: {
        title: "Demorunko ja itsearvion kysymykset",
        tree: "DEMO 8–10 MIN\n1 min   palvelu ja asiakas lyhyesti\n3 min   palvelu toiminnassa: rekisteröityminen → peli → tila → profiili\n2 min   yksi tekninen ratkaisu: tilahistorian transaktio\n2 min   yksi korjattu bugi täytenä ketjuna\n1 min   Git-historia ja tekoälyn tarkistettu käyttö\n1 min   mitä jäi v1.1:een ja miksi",
        actions: [
          "Käy näyttömatriisi rivi riviltä ja liitä jokaiseen suora linkki: commit, PR, dokumentti, testirivi tai muistio.",
          "Merkitse rivit, joille et löydä työnäytettä, ja käy ne läpi ohjaajan kanssa.",
          "Harjoittele demo ääneen kellon kanssa vähintään kahdesti.",
          "Kirjoita itsearvio konkreettisin esimerkein.",
          "Pyydä toista henkilöä tarkistamaan, että jokainen linkki aukeaa.",
          "Luovuta paketti ohjaajalle ja pyydä luovutuskuittaus."
        ],
        code: "ITSEARVION KYSYMYKSET\n1. Mikä onnistui parhaiten ja mistä tiedät sen?\n2. Missä tarvitsit apua ja keneltä?\n3. Minkä arvion tai päätöksen tekisit toisin ja miksi?\n4. Miten tekoälyn käyttö vaikutti työhösi ja mitä teit itse?\n5. Mitä veisit seuraavaan projektiin?\n\nLUOVUTUSPAKETIN TARKISTUS\n[ ] näyttömatriisi täsmälinkitettynä (32 riviä)\n[ ] projektipäiväkirja repositoryssa\n[ ] AI-loki repositoryssa\n[ ] tag v1.0 ja julkinen osoite\n[ ] itsearvio ja demorunko",
        test: "Pyydä toista henkilöä valitsemaan matriisista satunnainen rivi ja mittaa, löytyykö työnäyte alle minuutissa.",
        links: []
      },
      example: "Itsearvion konkretia: ”Aliarvioin kirjautumisen työmäärän kahdella päivällä. Seuraavassa projektissa teen auth-vertailun jo suunnitteluviikolla.”",
      notEnough: "”Opin paljon Reactista ja projekti oli opettavainen.”"
    }
  },

  /* ---- opettajan paperiaineisto ---- */
  opettaja: {
    jakso: "Työviikot 1–18",
    deadline: "työviikon 18 lopussa",
    kansiKuvaus: "Oma pelikirjastopalvelu: React, Express, SQLite ja julkaisu tuotantoon",
    kansiHuomiot: [
      "Julkiseen repositoryyn ei laiteta henkilötietoja, salasanoja eikä ympäristömuuttujien arvoja.",
      "Viikot ovat työviikkoja opiskelijan omasta aloituksesta; paketissa ei ole kalenteripäivämääriä.",
      "Rasti tässä vihossa ei ole palautus: työnäyte on aina Git-repositoryssa."
    ],
    viimeisetPaivat: [
      ["Päivä 1", "Sisältöjäädytys – viimeinen hyväksytty versio"],
      ["Päivä 2", "Aineisto: päiväkirja, testit, AI-loki ja linkit"],
      ["Päivä 3", "Harjoittelu: 8–10 min demo ja itsearviointi"],
      ["Päivä 4", "Puskuri: tarkistus toisen henkilön kanssa"],
      ["Päivä 5", "Luovutus ohjaajalle"]
    ],

    pohjat: {
      aloitusVko: 1,
      kysymyksia: 8,
      vertailuVko: "2, 3, 7 ja 9",
      katselmointiVkot: "10 ja 16",
      testiVko: 13,
      testeja: 14,
      ketjuja: 3,
      lisenssiVko: 1
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma – PeliHylly",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena.",
      kohde: [
        "Näyttö toteutetaan oppilaitosympäristössä ohjattuna projektinäyttönä. Perusteena on Tieto- ja viestintätekniikan perustutkinto (perusteId 9816282, diaarinumero OPH-6216-2025). Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 11 osaamisvaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 osaamisvaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 osaamisvaatimusta), yhteensä 32 osaamisvaatimusta.",
        "Opiskelija rakentaa 18 työviikon aikana PeliHyllyn: pelikirjaston seurantapalvelun kuvitteelliselle Pelikellari ry:lle. Toteutus on React + Vite -frontend, Node.js + Express -backend ja SQLite-tietovarasto; palvelu julkaistaan tuotantoon julkiseen osoitteeseen. Työ tehdään yksin, mutta ohjaaja toimii kehitystiimin toisena osapuolena priorisoinnissa, vertailupäätöksissä ja ratkaisujen arvioinnissa (p8–p10).",
        "Viikot ovat työviikkoja opiskelijan omasta aloituksesta, eivät kalenteriviikkoja. Näyttöaineisto syntyy työn aikana: commitit, pull requestit, muistiot, testimatriisi, projektipäiväkirja ja AI-loki elävät samassa repositoryssa."
      ],
      p0: "Pakollinen perusversio (P0): rekisteröityminen ja kirjautuminen, pelien lisäys ja muokkaus, tilanvaihto sekä automaattinen tilahistoria, julkinen profiili tilastoineen ja julkaisu tuotantoon. Haku ja suodatus sekä arvostelut ovat P1; kokoelmat ovat P1-laajennus, josta päätetään työviikolla 11; profiiliviestit ovat P2 ja saavat jäädä pois.",
      roolit: [
        ["Opiskelija", "Toteuttaa palvelun, tekee omat perustellut päätöksensä, kirjaa projektipäiväkirjaa ja AI-lokia sekä kokoaa näyttöaineiston."],
        ["Ohjaaja / opettaja", "Vastaa ohjauksesta ja arvioinnista, kuittaa P0-rajauksen, osallistuu vertailupäätöksiin (työviikot 2, 7 ja 11) ja tarkistuspisteisiin sekä nimeää katselmoijat. Ei toimi asiakkaan edustajana."],
        ["Asiakkaan edustaja (työviikko 10)", "Nimetty ulkopuolinen henkilö Pelikellari ry:n toiminnanvetäjän roolissa, esimerkiksi toinen opettaja, työelämäedustaja tai toisen ryhmän opiskelija. Ei opiskelijan oma ohjaava opettaja. Nimetään viimeistään työviikolla 3."],
        ["Julkaisutestaaja (työviikko 16)", "Toinen ulkopuolinen henkilö, eri kuin asiakkaan edustaja. Ottaa julkaisuehdokkaan käyttöön puhtaassa ympäristössä pelkän kirjallisen ohjeen avulla ilman suullista apua."],
        ["Arvioija", "Ottaa vastaan 8–10 minuutin demon työviikolla 18 ja käy näyttömatriisin läpi täsmälinkkeineen."]
      ],
      tarkistuspisteet: [
        [2, "Suunnitelma ja P0-rajaus", "Käyttäjätarinat hyväksymiskriteereineen, priorisointi, tietomalli, tietovarastovertailu ja työmääräarviot. Ohjaaja kuittaa P0-rajauksen kirjallisesti."],
        [3, "Julkaistu runko ja katselmoijat", "Julkinen osoite vastaa, /api/health toimii tuotannossa, k2-muistio kirjoitettu. Asiakkaan edustaja ja julkaisutestaaja nimetään."],
        [5, "Validointi kahdessa kerroksessa", "Itse rakennettu lomake, palvelinvalidointi 400-vastauksineen, curl-tulosteet ja testitapaukset T3–T5."],
        [7, "Autentikointipäätös ja omistajuus", "Vertailumuistio istunto vs. token ohjaajan kommentilla; 403-tuloste toisen käyttäjän peliin; salasanat hashattuina."],
        [10, "Asiakaskatselmointi", "Katselmointimuistio: rooli, ajankohta, vähintään viisi havaintoa asiakkaan omin sanoin erillään tulkinnasta, priorisoidut issuet."],
        [13, "Testimatriisin ajo", "Vähintään 12 testitapausta odotuksineen ennen ajoa, toteutuneet tulokset ja virheenkorjausketju 2 regressiotestiin asti."],
        [16, "Julkaisuehdokas ja julkaisutesti", "RC-tag, ulkopuolisen testaajan pöytäkirja, löydösten estävä/ei-estävä-luokittelu ja ketju 3:n aloitus."],
        [18, "Näyttö", "Näyttömatriisi täsmälinkitettynä, demo ajassa, itsearvio ja AI-loki repositoryssa."]
      ],
      tyonaytteet: {
        p1: ["1", "VS Code + Vite-dev-palvelin käytössä koko projektin; työkalutodennusten tulosteet ja kehittäjätyökalujen käyttö ketjukirjauksissa"],
        p2: ["8, 13, 16", "Kolme täydellistä virheenkorjausketjua: ketju 1 kehitystyössä löytyneestä aidosta bugista (ankkuri työviikko 8), ketju 2 testimatriisin löydöksestä, ketju 3 julkaisutestin estävästä löydöksestä"],
        p3: ["13", "Testimatriisi ≥12 tapausta kolmessa luokassa, odotettu tulos kirjattu ennen ajoa, uusintatestit korjausten jälkeen"],
        p4: ["4, 14", "Komponenttijako (PeliLista/PeliKortti), oma fetch-hookki, Express-reittien moduulijako; syvennys refaktoroinnissa työviikolla 14"],
        p5: ["14", "Refaktorointicommit-sarja: nimeäminen, toiston poisto, vastuiden selkeytys; toiminta todistetusti ennallaan regressioajolla"],
        p6: ["5, 8, 12", "Profiilisivu toteutettu työviikon 2 rautalangan mukaan; kuvakaappaus ja luonnos rinnakkain, poikkeamat perusteltu (myös lomake vko 5, responsiivisuus vko 12)"],
        p7: ["6", "Tilanvaihto ja tilahistoria toteutettu käyttäjätarinan ja hyväksymiskriteerien mukaan; kriteerit ja toteutus linkitetty issueen"],
        p8: ["2", "Viikoittainen tehtävien sopiminen ohjaajan kanssa; issue-taulu pitää tilanteen näkyvänä koko projektin ajan"],
        p9: ["7", "Vertailumuistio istunto vs. token omilla kriteereillä; päätös tehty ja kirjattu yhdessä ohjaajan kanssa"],
        p10: ["10", "Asiakaskatselmointi: täyttääkö toteutus tarinat, mitä muutetaan ennen v1.0:aa; priorisointi yhdessä"],
        p11: ["18", "Kirjallinen itsearvio: mikä onnistui, missä tarvitsi apua, mitä tekisi toisin, konkreettisin esimerkein"],
        s1: ["1", "Toimeksiannon purku ja vähintään kahdeksan kysymyksen lista; vastaukset kirjattu ja viety käyttäjätarinoiksi työviikolla 2"],
        s2: ["3, 10, 17", "Tilannekatsaus asiakkaalle julkaistusta rungosta ilman jargonia; jatkuu katselmointiyhteenvedossa (vko 10) ja julkaisutiedotteessa (vko 17)"],
        s3: ["10, 16", "Asiakaskatselmointi julkaistusta versiosta: runko, asiakkaan omat sanat, sovitut muutokset; toinen katselmointi on julkaisutestaus työviikolla 16"],
        s4: ["2", "Käyttäjätarinoiden P0/P1/P2-priorisointi ohjaajan kanssa; profiiliviestit tietoisesti P2:een"],
        s5: ["2", "P0-tarinat pilkottu issueiksi; issue-taulu työn ohjauksen välineenä koko projektin"],
        s6: ["2, 11", "Työmääräarviot issueissa; arvio vs. toteuma päivitetty suunnitelmaan työviikolla 11"],
        s7: ["6", "Tilakone sallittuine siirtymineen ja historiakirjaus transaktiossa; lisäksi omistajuustarkistukset (vko 7) ja suodatuslogiikka (vko 9)"],
        s8: ["2", "Vertailu SQLite / JSON-tiedosto / palvelintietokanta datan rakenteen, käyttötilanteen ja laajuuden perusteella; kirjattu perustelu suunnitelmassa"],
        s9: ["4", "SQLite-yhteys Expressistä: skeeman migraatio, siemendata, luku/lisäys/muokkaus hallitusti (CRUD täydentyy työviikoilla 5–9)"],
        s10: ["5, 9", "Oma REST-rajapinta: POST validointeineen ja virhevastauksineen, frontin fetch-käsittely virhetiloineen; kyselyparametrit työviikolla 9"],
        s11: ["14", "Dokumentoitu tietoturva-arvio: syötteet, salasanahashit, istunnot, tietojen näkyvyys, SQL-injektio, XSS; riski → ratkaisu → koodiviittaus (perusta vko 7)"],
        s12: ["1", "Git koko projektin ajan: etärepository työviikosta 1, kuvaavat commitit, feature-haarat vaiheesta B alkaen"],
        s13: ["11", "Palautemuutos feature-haarassa ja pull request pääversioon: kuvaus, itsekatselmointi, merge ja konfliktin ratkaisu"],
        s14: ["17", "v1.0: tuotantobuild, ympäristöasetukset, julkaisu valittuun pilviympäristöön, tag ja savutesti (ensimmäinen julkaisu jo vko 3)"],
        k1: ["1", "Vite + React -projektin luonti ja konfigurointi; kehitys- ja tuotantoasetukset (.env, build) kuntoon työviikkoon 3 mennessä"],
        k2: ["3", "k2-muistio: mitä React ratkaisee (komponentit, tila, renderöinti) ja mitä ei (reititys, palvelin, tietovarasto), ja mitä siitä seuraa tälle projektille"],
        k3: ["8", "Profiilisivu: komponentit, propsit, hookit (useState/useEffect, oma hookki), reititysparametrit, kirjautuneen tila contextilla (vko 7)"],
        k4: ["9", "react-router (vko 3) ja toinen ulkoinen komponentti perusteltuna: vertailu, konfigurointi ja riippuvuuden kirjaus dokumentaatioon"],
        k5: ["13", "Kokonaisketju: komponenttirakenne ja vastuut suunniteltu (vko 2), toteutettu työviikoilla 3–12, testattu matriisilla työviikolla 13"],
        k6: ["16", "Viten tuotantobuild julkaisuehdokkaana asiakkaan ympäristöön julkaisutestausta varten; v1.0 samaan osoitteeseen työviikolla 17"],
        k7: ["15", "README + käyttöönotto-ohje: asennus, käynnistys, riippuvuudet, ympäristöasetukset; todistettu kuivaharjoituksella ja työviikon 16 ulkopuolisella testillä"]
      },
      dokumentaatio: {
        kayttajalle: "README ja käyttöönotto-ohje: mitä PeliHylly tekee, vaatimukset, asennus, .env.example, migraatiot, käynnistys ja julkaisu. Kirjoitetaan työviikolla 15 ja testataan ulkopuolisella työviikolla 16.",
        arviointiin: "Projektipäiväkirja, AI-loki, suunnitelma päivityksineen, vertailumuistiot, katselmointimuistio, julkaisutestin pöytäkirja, testimatriisi, tietoturva-arvio ja täsmälinkitetty näyttömatriisi.",
        vaatimus: "Käyttöohjeen laatu mitataan työviikolla 16: ulkopuolinen testaaja ottaa palvelun käyttöön puhtaassa ympäristössä pelkän kirjallisen ohjeen avulla, ilman suullista apua."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline. Se saa selittää virheilmoituksia, tarkistaa ratkaisuja ja ehdottaa testitapauksia. Näytön ydin (komponenttirakenne, saavutettavuusratkaisut ja CSS) tehdään itse, ja koko sovelluksen CSS on opiskelijan omaa. Vähintään kaksi näkymää (pelin lisäyslomake työviikolla 5 ja profiilisivu työviikolla 8) rakennetaan alusta itse ilman valmista UI-komponenttikirjastoa.",
        "Jokainen 18 viikosta sisältää osuuden, jota ei voi suorittaa kielimallilla: oma ympäristö ja omat komentotulosteet, oma tietomalli ja oma data, curl- ja tietokantatodennukset omaa palvelua vasten, nimettyjen ulkopuolisten ihmisten sanat sekä oma julkaistu osoite. Merkittävä tekoälyn käyttö kirjataan AI-lokiin muodossa ymmärrä → tarkista → testaa → kirjaa."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "Palvelu julkisessa osoitteessa, tag v1.0 repositoryssa."],
        ["Repository", "client/, server/ ja project-docs/. Kaikki dokumentaatio project-docs-kansiossa."],
        ["Projektipäiväkirja ja AI-loki", "project-docs/projektipaivakirja.md ja AI-loki, viety repositoryyn viikoittain."],
        ["Suunnitelma", "project-docs/suunnitelma.md, päivitetty työviikoilla 11 ja 16."],
        ["Testiaineisto", "Testimatriisi tuloksineen ja kolme täydellistä virheenkorjausketjua."],
        ["Katselmoinnit", "Asiakaskatselmoinnin muistio (vko 10) ja julkaisutestin pöytäkirja (vko 16)."],
        ["Näyttömatriisi", "32 vaatimusta täsmälinkitettyinä työnäytteisiin."],
        ["Itsearvio ja demo", "Kirjallinen itsearvio ja 8–10 minuutin demo."]
      ],
      huomiot: [
        ["Päivätön tila", "Viikot 1–18 ovat työviikkoja opiskelijan omasta aloituksesta. Aineistossa ei ole kalenteripäivämääriä, joten sama paketti käy mille tahansa aloitusajankohdalle."],
        ["Katselmoijat ovat ohjaajan päätös", "Asiakkaan edustaja nimetään viimeistään työviikolla 3 ja hän toimii työviikolla 10; julkaisutestaaja on eri henkilö ja toimii työviikolla 16. Kumpikaan ei ole opiskelijan oma ohjaava opettaja."],
        ["Virheenkorjausketju 1 on ehdollinen", "Ketju 1 ankkuroidaan työviikolle 8, mutta se kirjataan siinä viikossa, jossa aito bugi osuu. Keksittyjä bugeja ei kirjata: jos aitoja ei löydy, ohjaaja merkitsee vikatehtävän."],
        ["Kokoelmat ovat rajauspäätös", "Kokoelmien (monta-moneen) toteutus päätetään työviikolla 11 työviikolla 9 kirjatuilla kriteereillä. Siirto v1.1-listalle on hyväksytty lopputulos, ei epäonnistuminen."],
        ["Aiheen muunnelma", "Opiskelija voi toteuttaa videopeliarkiston sijaan esimerkiksi musiikki- tai elokuva-arkiston, jos hän perustelee ohjaajalle, mikä muunnelmassa on järkevää: esimerkiksi CD-arkistossa tilahistorian tilalle sopii kuunteluhistoria tai levyn kunto."],
        ["Avoimet asiat", "Lisenssi, repositoryn julkisuus, perusteversion siirtymäsääntö, katselmoijien nimeäminen ja julkaisualustan tilin omistajuus ovat ohjaajan tai oppilaitoksen päätöksiä. Tyhjä kenttä suunnitelmassa on oikea tulos, kunnes asia on sovittu."]
      ]
    }
  }
};
