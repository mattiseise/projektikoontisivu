/*
 * sisalto.js – TuntiTutkan koko sisältödata.
 *
 * app.js on geneerinen moottori eikä sisällä yhtään projektikohtaista
 * merkkijonoa. Kaikki opiskelijalle näkyvä teksti on tässä tiedostossa tai
 * index.html:ssä.
 *
 * Päivätön tila: viikot ovat järjestysnumeroita 1–18, eivät kalenteriviikkoja.
 * Sivustolla ei ole yhtään päivämäärää — projekti alkaa siitä, kun opiskelija
 * aloittaa, ja kestää 18 työviikkoa.
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "tuntitutka",
  nimi: "TuntiTutka",
  vuosi: 2026,
  paivaton: true,
  viikot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  aloitusNappi: "Aloita sovelluksen teko",
  apuOtsikko: "Tarvitsen toteutusapua",

  paletti: {
    aksentti: "#0e7490",
    aksenttiTumma: "#155e75",
    taulukkoSavy: "#e3f2f6",
    riviSavy: "#f2f9fb"
  },

  /* ---- paperiaineiston kielisäädöt: päivätön aikataulu ---- */
  lataukset: {
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 — " + title
  },

  /* ---- vaiheet ---- */
  vaiheet: [
    {
      tunnus: "A",
      lyhyt: "Ydin",
      otsikko: "Sovelluksen ydin: suunnitelma, julkaistu runko, roolit ja tuntikirjaus",
      viikot: [1, 2, 3, 4, 5],
      vari: "#1a6fae"
    },
    {
      tunnus: "B",
      lyhyt: "Ominaisuudet",
      otsikko: "Ominaisuudet: hallinta, omat kirjaukset, lasketut yhteenvedot ja asiakaskatselmointi",
      viikot: [6, 7, 8, 9, 10],
      vari: "#0e7490"
    },
    {
      tunnus: "C",
      lyhyt: "Valmiiksi",
      otsikko: "Valmiiksi: palautemuutos, mobiili, tietoturva, testaus ja laatu",
      viikot: [11, 12, 13, 14, 15],
      vari: "#b83280"
    },
    {
      tunnus: "D",
      lyhyt: "Julkaisu",
      otsikko: "Julkaisu: RC ja julkaisutestaus, v1.0 ja näyttö",
      viikot: [16, 17, 18],
      vari: "#ca8a04"
    }
  ],

  /* ---- viikkonavigaation lyhyet nimet ---- */
  viikkoNimet: {
    1: "Aloitus",
    2: "Suunnitelma",
    3: "Julkaistu runko",
    4: "Kirjautuminen",
    5: "Tuntikirjaus",
    6: "Hallinta",
    7: "Omat kirjaukset",
    8: "Laskenta",
    9: "Kaaviot",
    10: "Katselmointi",
    11: "Palautemuutos",
    12: "Mobiili ja saavutettavuus",
    13: "Tietoturva",
    14: "Testaus",
    15: "Laatu",
    16: "RC ja julkaisutestaus",
    17: "Julkaisu v1.0",
    18: "Näyttö"
  },

  /* ---- viikkotyyppien kehystekstit ---- */
  kehykset: {
    feature: {
      kicker: "Viikon tulos",
      connectionLabel: "Näin tulos rakentuu:",
      deliverableLabel: "Valmistuu tällä viikolla",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    pohjustus: {
      kicker: "Pohjustus",
      connectionLabel: "Näin viikko vie sovellusta eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    katselmointi: {
      kicker: "Katselmointi: sovellus testissä",
      connectionLabel: "Näin viikko vie sovellusta eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    laatu: {
      kicker: "Laatuviikko",
      connectionLabel: "Näin viikko lujittaa jo tehtyä:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    julkaisu: {
      kicker: "Julkaisuviikko",
      connectionLabel: "Näin viikko vie sovelluksen tuotantoon:",
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
      work: "Kerro konkreettiset tiedostot, reitit, komponentit, kyselyt ja testit.",
      reason: "Kerro päätös, vaihtoehdot, perustelu omalla datallasi ja mitä opit.",
      evidence: "Esim. commit-linkki, issue #12, testi T05 tai kuvakaappaus.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla kerralla?"
    }
  },

  /* ---- tekninen suunnitelma ---- */
  suunnitelma: {
    otsikko: "Tekninen suunnitelma",
    tiedostonimi: "suunnitelma.md",
    pakolliset: [
      "nimi", "tekija", "tavoite", "kohde", "tietomalli", "tietovarasto",
      "julkaisualusta", "istuntotapa", "komponenttijako", "reitityskirjasto",
      "viikkokaytanto", "kaaviokirjasto", "rajaus"
    ],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      `# Tekninen suunnitelma – ${arvo("nimi", "_(nimi puuttuu)_")}`,
      "",
      `Tekijä: ${arvo("tekija")} · Päivitetty: ${pvm}`,
      "",
      "Projekti: TuntiTutka, mainostoimiston työaikaseuranta. Suunnitelma täytetään",
      "työviikolla 2 ja päivitetään aina, kun päätös muuttuu.",
      "",
      "## 1. Tavoite (esitäytetty toimeksiannosta)",
      "",
      "Mainostoimiston työaikaseuranta, joka korvaa Excel-tuntilaput: työntekijät",
      "kirjaavat tunnit tehtävälajeittain, projektipäällikkö saa aina ajantasaiset",
      "yhteenvedot viikoittain, henkilöittäin ja tehtävälajeittain.",
      "",
      "### Tavoite omin sanoin",
      "",
      arvo("tavoite"),
      "",
      "## 2. Asiakas ja käyttäjäryhmät (esitäytetty)",
      "",
      "Kahdeksan hengen mainostoimiston projektipäällikkö (tilaaja) ja työntekijät;",
      "kaksi roolia, joilla on eri oikeudet.",
      "",
      "### Käyttäjäryhmät ja niiden tärkein tarve omin sanoin",
      "",
      arvo("kohde"),
      "",
      "## 3. P0-rajaus (esitäytetty)",
      "",
      "**P0:** kirjautuminen ja roolit · tuntikirjaus validointeineen · omat",
      "kirjaukset ja oma viikkosumma · projektien, projektityyppien ja",
      "tehtävälajien hallinta · projektin jäsenyydet · lasketut yhteenvedot",
      "kolmella ryhmittelyllä ja porautuminen.",
      "",
      "**P1:** kaaviot, mobiilihionta, CSV-vienti. **P2:** kirjausmuistutus,",
      "usean viikon vertailu.",
      "",
      "### Mitä EI toteuteta",
      "",
      arvo("rajaus"),
      "",
      "## 4. Laskentaperiaate (esitäytetty)",
      "",
      "Yhteenvetoja ei tallenneta — ne lasketaan kirjauksista jokaisella pyynnöllä.",
      "Tietokantaan ei tule summataulua.",
      "",
      "### Tietomalli: taulut, avaimet ja mitä EI tallenneta",
      "",
      arvo("tietomalli"),
      "",
      "## 5. Teknologia (esitäytetty)",
      "",
      "Svelte + Vite (frontend), Node.js + Express (backend), SQLite (tietovarasto).",
      "Ulkoiset komponentit: reitityskirjasto ja kaaviokirjasto — valinnat",
      "perustellaan alla. Valmista UI-komponenttikirjastoa ei käytetä: rakenne,",
      "saavutettavuusratkaisut ja CSS tehdään itse.",
      "",
      "## 6. Omat päätökset perusteluineen",
      "",
      "### Tietovarasto (SQLite / JSON-tiedosto / PostgreSQL) — työviikko 2–3",
      "",
      arvo("tietovarasto"),
      "",
      "### Julkaisualusta (Render / Fly.io / Railway) — työviikko 3",
      "",
      arvo("julkaisualusta"),
      "",
      "### Istuntotapa (evästesessio / token) — työviikko 4",
      "",
      arvo("istuntotapa"),
      "",
      "### Komponenttijako: näkymät ja komponenttien vastuut — työviikot 5 ja 15",
      "",
      arvo("komponenttijako"),
      "",
      "### Reitityskirjasto — työviikko 6",
      "",
      arvo("reitityskirjasto"),
      "",
      "### Viikkokäytäntö: ISO-viikko vai muu, viikon- ja vuodenvaihde — työviikko 7",
      "",
      arvo("viikkokaytanto"),
      "",
      "### Kaaviokirjasto — työviikko 9",
      "",
      arvo("kaaviokirjasto"),
      "",
      "## 7. Avoimet asiat — ohjaaja omistaa",
      "",
      "Näitä ei päätetä itse eikä tekoälyllä. Tyhjä kenttä on oikea tulos siihen",
      "asti, kunnes asia on sovittu.",
      "",
      onTäytetty("lisenssi")
        ? `- **Lisenssi:** ${arvo("lisenssi")}`
        : "- **Lisenssi:** EI VIELÄ SOVITTU — avoin asia (kysytään työviikolla 1, viimeistään 15)",
      onTäytetty("julkisuus")
        ? `- **Repositoryn julkisuus, tekijänimi ja alaikäisen huoltajan suostumus:** ${arvo("julkisuus")}`
        : "- **Repositoryn julkisuus, tekijänimi ja alaikäisen huoltajan suostumus:** EI VIELÄ SOVITTU — avoin asia (kuittaus työviikolla 1)",
      onTäytetty("katselmoijat")
        ? `- **Katselmoijien roolit (työviikot 10 ja 16):** ${arvo("katselmoijat")}`
        : "- **Katselmoijien roolit (työviikot 10 ja 16):** EI VIELÄ SOVITTU — avoin asia (nimeäminen viimeistään työviikolla 8)",
      onTäytetty("alustalinja")
        ? `- **Oppilaitoksen linja julkaisualustoista:** ${arvo("alustalinja")}`
        : "- **Oppilaitoksen linja julkaisualustoista:** EI VIELÄ SOVITTU — avoin asia (vaikuttaa työviikon 3 valintaan)",
      onTäytetty("perusteversio")
        ? `- **Perusteversion siirtymäsääntö (OPH-6216-2025):** ${arvo("perusteversio")}`
        : "- **Perusteversion siirtymäsääntö (OPH-6216-2025):** EI VIELÄ SOVITTU — avoin asia",
      onTäytetty("arviointi")
        ? `- **Arvioinnin järjestelyt (työviikko 18):** ${arvo("arviointi")}`
        : "- **Arvioinnin järjestelyt (työviikko 18):** EI VIELÄ SOVITTU — avoin asia",
      "",
      "---",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
      "Päivitä tiedosto ja tee uusi commit aina, kun päätös tarkentuu tai",
      "ohjaaja vastaa avoimeen asiaan.",
      ""
    ].join("\n")
  },

  /* ---- viikkojen ohjaava sisältö ---- */
  viikkoOhjeet: {
    1: {
      type: "pohjustus",
      feature: "Kehitysympäristö ja julkinen repository ovat valmiit, ja Svelte + Vite -sovellusrunko käynnistyy omalla koneella.",
      connection: "Työ alkaa työkaluista ja repositorysta: Git-historia on itsessään työnäyte, ja se alkaa ensimmäisestä työpäivästä.",
      deliverable: "Asennetut työkalut versioineen, julkinen repository tarkistuslistoineen, käynnistyvä Svelte + Vite -runko, kansiorakenne ja kysymyslista ohjaajalle.",
      why: "Ilman toimivaa ympäristöä ja repoa yksikään myöhempi viikko ei tuota näyttöaineistoa — Git-historia on s12-työnäyte ja sen pitää alkaa päivästä 1.",
      done: "Repositoryssa on käynnistyvä Svelte-runko ja README, jossa on käynnistyskomennot; ohjaaja on kuitannut julkisen repon tarkistuslistan; kysymyslistassa on vähintään kuusi kysymystä.",
      record: "Kirjoita työviikon 1 merkintään: asennetut työkalut versioineen, repositoryn osoite, ensimmäisen commitin tunnus, kysymyslistan kysymykset ja se, mitkä julkisuusasiat jäivät avoimiksi.",
      skills: ["kehitysympäristö", "Git", "npm ja Vite", "projektin rakenne"],
      steps: [
        ["Työkalut ja versiot.", "Asenna Node LTS, VS Code ja Git. Kirjaa jokaisesta versionumero ja tarkistuskomento README:hen — pelkkä 'asensin' ei riitä työnäytteeksi."],
        ["Repository ja julkisuustarkistus.", "Luo GitHub-repository ja käy läpi julkisen repon tarkistuslista: ei henkilötietoja, ei koulun tunnisteita, ei muiden nimiä. Sovi tekijänimestä ohjaajan kanssa. Jos olet alaikäinen, huoltajan suostumus hoidetaan ohjaajan kautta — kirjaa se avoimeksi asiaksi, kunnes se on kuitattu."],
        ["Svelte + Vite -runko käyntiin.", "Luo Svelte-projekti Vitellä ja käynnistä kehityspalvelin. Ota kuvakaappaus selaimessa näkyvästä rungosta."],
        ["Kansiorakenne ja README.", "Luo kansiot client/, server/ ja project-docs/. Kirjoita README:hen mitä olet tekemässä, kenelle ja millä komennoilla projekti käynnistyy."],
        ["Toimeksianto ja kysymyslista.", "Lue toimeksianto läpi ja alleviivaa pakolliset asiat. Kirjoita jokaisesta epäselvästä kohdasta kysymys ohjaajalle — tavoite on vähintään kuusi kysymystä."],
        ["Commit ja push.", "Tee ensimmäinen commit, jonka viesti kertoo projektin perustamisesta, ja vie se etärepositoryyn (git push)."]
      ],
      help: {
        title: "Perusta kehitysympäristö ja repository",
        tree: "tuntitutka/\n├─ client/            Svelte + Vite -sovellus\n│  ├─ src/\n│  └─ vite.config.js\n├─ server/            Express-palvelin (tulee työviikolla 3)\n├─ project-docs/      suunnitelma, päiväkirja, muistiot\n├─ README.md\n└─ .gitignore         node_modules/, *.db, .env",
        actions: [
          "Asenna Node LTS ja tarkista versiot: node -v, npm -v, git --version.",
          "Luo Svelte-runko: npm create vite@latest -- --template svelte, sitten npm install ja npm run dev.",
          "Luo GitHub-repository, aja git init, tee ensimmäinen commit ja vie se GitHubiin (git push).",
          "Käy julkisen repon tarkistuslista läpi ohjaajan kanssa ja pyydä kuittaus kirjallisena."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] node -v, npm -v ja git --version kirjattu README:hen\n[ ] npm run dev avaa sovelluksen selaimessa\n[ ] kansiot client/, server/ ja project-docs/ olemassa\n[ ] .gitignore estää node_modules/, *.db ja .env\n[ ] repositoryssa ei ole henkilötietoja eikä koulun tunnisteita\n[ ] tekijänimi sovittu ohjaajan kanssa\n[ ] kysymyslistassa vähintään 6 kysymystä\n[ ] ensimmäinen commit viety etärepositoryyn (push)",
        test: "Kloonaa repository toiseen kansioon ja varmista, että sovellus käynnistyy pelkän README:n ohjeilla.",
        links: [
          ["Vite: Getting Started", "https://vitejs.dev/guide/"],
          ["Svelte: virallinen tutoriaali", "https://svelte.dev/tutorial"],
          ["GitHub Docs: repositoryn luominen", "https://docs.github.com/en/repositories"]
        ]
      },
      example: "Versiotaulukko README:ssä: työkalu → versio → tarkistuskomento (Node 20.11.1 → node -v). Mukana kuvakaappaus käynnistyneestä dev-palvelimesta ja commit “Perusta projekti, kansiorakenne ja Svelte-runko”.",
      notEnough: "“Asensin kaikki ja kaikki toimii” ilman versionumeroita, kuvakaappausta ja ensimmäistä committia — mitään ei voi todentaa jälkikäteen."
    },

    2: {
      type: "pohjustus",
      feature: "Hyväksytty tekninen suunnitelma: priorisoidut käyttäjätarinat, tietomalli, tietovarastovertailu, rautalangat ja issue-taulu työmääräarvioineen.",
      excerpt: "Pahin puute ei ole kirjaaminen vaan raportointi.",
      connection: "Työviikon 1 kysymyslista saa vastaukset, ja toimeksianto muuttuu priorisoiduiksi käyttäjätarinoiksi ja tietomalliksi, joiden päälle koko loppuprojekti rakentuu.",
      deliverable: "project-docs/suunnitelma.md, tietomallikaavio, tietovarastovertailu, rautalangat kirjaus- ja raporttinäkymästä sekä issue-taulu työmääräarvioineen.",
      why: "Ilman priorisointia ominaisuuslista paisuu; ilman tietomallia raporttilaskenta menee uusiksi. Päätös “lasketaan, ei tallenneta” ratkaisee tässä, ettei sovellukseen synny synkronoitavia summatauluja.",
      done: "project-docs/suunnitelma.md on repossa ja ohjaaja on hyväksynyt rajauksen kirjatulla kommentilla; jokaisella P0-tarinalla on issue, hyväksymiskriteerit ja arvio tunteina.",
      record: "Kirjoita työviikon 2 merkintään: P0-rajaus, tietovarastovalinta perusteluineen, tietomallin taulut ja se, mitä päätit jättää tallentamatta. Liitä linkki issue-tauluun ja ohjaajan hyväksyntään.",
      skills: ["vaatimusmäärittely", "tietomallinnus", "priorisointi", "työn ositus"],
      resources: [["Avaa suunnitelmalomake", "#suunnitelma", false]],
      steps: [
        ["Käyttäjätarinat.", "Kirjoita toimeksiannosta käyttäjätarinat muodossa “Työntekijänä … jotta …” ja anna jokaiselle 2–4 hyväksymiskriteeriä."],
        ["Priorisointi ohjaajan kanssa.", "Merkitse jokainen tarina P0, P1 tai P2 yhdessä ohjaajan kanssa (hän toimii asiakkaan sijaisena). Kirjaa perustelut, älä vain kirjaimia."],
        ["Tietomalli.", "Piirrä taulut kayttaja, projekti, projektityyppi, tehtavalaji, kirjaus ja projektin_jasen avaimineen. Kirjaa kaavion viereen periaate: yhteenvetosummia ei tallenneta, ne lasketaan kirjauksista."],
        ["Tietovarastovertailu.", "Vertaa SQLiteä, JSON-tiedostoa ja PostgreSQLiä oman datasi rakenteen, käyttötilanteen ja laajuuden perusteella. Perustele valinta omilla tauluillasi, ei yleisillä ominaisuuksilla."],
        ["Rautalangat.", "Piirrä kirjausnäkymä ja raporttinäkymä käsin tai piirtotyökalulla. Merkitse mitä kenttiä ja mitä toimintoja kummassakin on."],
        ["Issuet ja työmääräarviot.", "Pilko P0-tarinat issueiksi, joissa jokaisessa on hyväksymiskriteerit ja arvio tunteina. Yksi issue on tyypillisesti puolen tai yhden päivän työ."]
      ],
      help: {
        title: "Tietomallin ja käyttäjätarinoiden pohjat",
        tree: "kayttaja       (id, nimi, sposti, salasana_hash, rooli, puhelin)\nprojekti       (id, nimi, tyyppi_id → projektityyppi, alkaa, paattyy, kuvaus)\nprojektityyppi (id, nimi)\ntehtavalaji    (id, tunnus, kuvaus)\nkirjaus        (id, kayttaja_id, projekti_id, tehtavalaji_id, paiva, tunnit, selite)\nprojektin_jasen(projekti_id, kayttaja_id)\n\nEI TAULUA: viikkosumma, henkilosumma, tehtavalajisumma",
        actions: [
          "Kirjoita jokainen käyttäjätarina hyväksymiskriteereineen ennen kuin piirrät tietomallin.",
          "Merkitse tietomalliin pääavaimet, viiteavaimet ja pakolliset kentät.",
          "Kirjoita vertailutaulukko kolmesta tietovarastosta ja perustele valinta omalla datallasi.",
          "Luo issuet ja kirjaa jokaiseen arvio tunteina — arvioihin palataan työviikolla 7."
        ],
        code: "TIETOMALLIN TARKISTUSLISTA\n[ ] jokaisella taululla on pääavain\n[ ] kirjaus viittaa käyttäjään, projektiin ja tehtävälajiin\n[ ] projektin jäsenyys on oma taulunsa (moni-moneen)\n[ ] tunnit on desimaaliluku, ei teksti\n[ ] päivä on yksiselitteisessä muodossa (esim. YYYY-MM-DD)\n[ ] EI summataulua — kirjaa tämä päätös näkyviin\n\nKÄYTTÄJÄTARINAPOHJA\n<roolina> <teen jotain>, jotta <hyöty>.\nHyväksymiskriteerit:\n1) …  2) …  3) …\nPrioriteetti: P0 / P1 / P2   Arvio: __ h",
        test: "Käy jokainen P0-tarina läpi tietomallia vasten ja kysy: löytyykö jokaiselle kriteerille kenttä tai taulu? Jos ei, tietomalli on kesken."
      },
      example: "Käyttäjätarina “Työntekijänä kirjaan tunnit projektille ja tehtävälajille, jotta projektipäällikkö näkee ajantasaisen tilanteen” + kolme hyväksymiskriteeriä + arvio 6 h + issue #12.",
      notEnough: "Ominaisuuslista ilman prioriteetteja, ja tietovarastoperustelu “SQLite on kevyt ja suosittu” ilman kytkentää omaan dataan."
    },

    3: {
      type: "feature",
      feature: "Tyhjä sovellusrunko on julkisessa osoitteessa: Express tarjoaa Svelte-buildin, /api/health vastaa ja SQLite-skeema syntyy skriptillä.",
      connection: "Työviikon 2 tietomalli muuttuu ajettavaksi skeemaksi, ja koko julkaisuputki testataan nyt, kun sovelluksessa ei vielä ole mitään rikkoutuvaa.",
      deliverable: "Express-palvelin health-reitteineen, SQLiten init-skripti, perusteltu julkaisualustavalinta, julkinen osoite README:ssä ja kirjallinen k2-selvitys.",
      why: "Webprofiilin sääntö: tyhjä sivu tuotannossa on parempi kuin valmis sivu localhostissa — julkaisuputki testataan kun se on vielä pieni, ei työviikolla 16 paniikissa.",
      done: "/api/health palauttaa 200 julkisessa osoitteessa toisen henkilön selaimella testattuna; init-skripti luo skeeman tyhjään tietokantaan; k2-selvitys ja alustaperustelu ovat repossa.",
      record: "Kirjoita työviikon 3 merkintään: julkinen osoite, valittu julkaisualusta ja kriteerit joilla valitsit sen, mitä julkaisussa meni pieleen ja miten korjasit sen. Liitä k2-selvitys.",
      skills: ["Express", "SQLite", "julkaisuputki", "ympäristöasetukset"],
      steps: [
        ["Express-runko ja health-reitti.", "Rakenna server/index.js, joka tarjoaa Sveltin tuotantobuildin staattisena ja vastaa reitillä /api/health JSON-muodossa."],
        ["Dev-proxy.", "Kytke Viten kehityspalvelimen proxy backendiin, jotta /api-kutsut menevät perille myös kehityksessä."],
        ["SQLite-skeema skriptillä.", "Kirjoita ajettava init-skripti, joka luo työviikon 2 tietomallin taulut tyhjään tietokantaan. Skeema on koodissa, ei käsin klikattuna."],
        ["Julkaisualustan vertailu ja valinta.", "Vertaa Renderiä, Fly.iota ja Railwayta kriteereillä: ilmainen taso, Node-tuki, SQLite-tiedoston pysyvyys ja levy, lokit. Tämä on oma päätöksesi — perustele se kirjallisesti."],
        ["Ensimmäinen julkaisu.", "Vie runko valitulle alustalle ja kirjaa julkinen osoite README:hen. Tarkista ympäristömuuttujat ja tietokantatiedoston polku."],
        ["Savutesti julkisessa osoitteessa.", "Pyydä toista henkilöä avaamaan /api/health omalla laitteellaan. Kirjaa tulos ja ota kuvakaappaus alustan julkaisulokista."]
      ],
      help: {
        title: "Palvelimen rakenne ja julkaisun tarkistuslista",
        tree: "server/\n├─ index.js        Express-sovellus, staattinen build ja reitit\n├─ db.js           tietokantayhteys yhdessä paikassa\n├─ init-db.js      skeeman luonti tyhjään kantaan\n└─ routes/\n   ├─ health.js\n   └─ (kirjaukset.js, raportit.js … tulevat myöhemmin)",
        actions: [
          "Tee reitti /api/health, joka palauttaa esimerkiksi { tila: \"ok\" } ja HTTP-koodin 200.",
          "Aja init-skripti tyhjään tietokantatiedostoon ja tarkista taulut.",
          "Kirjoita alustavertailu taulukkona ennen kuin luot tilin mihinkään palveluun.",
          "Julkaise, kirjaa osoite README:hen ja pyydä toista henkilöä testaamaan."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] tuotantobuild syntyy komennolla ja toimii paikallisesti\n[ ] palvelin kuuntelee alustan antamaa porttia (PORT)\n[ ] tietokantatiedoston polku on ympäristömuuttujassa\n[ ] .env EI ole repositoryssa\n[ ] alustan julkaisuloki tallessa kuvakaappauksena\n[ ] /api/health vastaa 200 julkisessa osoitteessa\n[ ] osoite on README:ssä\n\nk2-SELVITYS (taulukko)\nRatkaisee: komponentit, reaktiivisuus, sidonnat, build\nEi ratkaise: reititys, kaaviot, backend, tietokanta\nMistä lisä: reitityskirjasto (vk 6), kaaviokirjasto (vk 9), Express + SQLite",
        test: "Avaa julkinen osoite laitteella, jolla et ole koskaan kehittänyt projektia, ja tarkista että /api/health vastaa.",
        links: [
          ["Express: Serving static files", "https://expressjs.com/en/starter/static-files.html"],
          ["Vite: server.proxy", "https://vitejs.dev/config/server-options.html"]
        ]
      },
      example: "k2-selvitys taulukkona: “ratkaisee (komponentit, reaktiivisuus, build) / ei ratkaise (reititys, kaaviot, backend) / mistä lisä”. Alustavertailu neljällä kriteerillä ja valinta perusteluineen.",
      notEnough: "“Svelte on nopea ja moderni” ilman rajoitteiden nimeämistä, tai sovellus joka toimii vain localhostissa."
    },

    4: {
      type: "feature",
      feature: "Työntekijä ja projektipäällikkö kirjautuvat sisään ja näkevät roolinsa mukaisen navigaation; API-reitit on suojattu middlewarella.",
      connection: "Julkaistun rungon päälle tulee ensimmäinen oikea toiminto: käyttäjät ja roolit, joiden varaan kaikki myöhemmät rajaukset ja raportit rakentuvat.",
      deliverable: "Käyttäjätaulu bcrypt-hasheineen ja siemendata, kirjattu istuntotapavertailu ja päätös, kirjautuminen ja uloskirjautuminen sekä autentikointi- ja roolimiddleware.",
      why: "Roolit ovat koko sovelluksen perusta — raportit ja hallinta rajataan roolilla. Jos roolit lisätään jälkikäteen, jokainen reitti ja näkymä pitää avata uudelleen.",
      done: "Väärä salasana antaa selkeän suomenkielisen virheilmoituksen; työntekijä ei näe hallintanavigaatiota; kirjautuminen säilyy sivun päivityksessä; suora API-kutsu ilman kirjautumista palauttaa 401.",
      record: "Kirjoita työviikon 4 merkintään: istuntotapojen vertailu, ohjaajan kanssa tehty päätös perusteluineen sekä se, mitä middleware-ketju tarkistaa ja missä järjestyksessä.",
      skills: ["autentikointi", "bcrypt", "middleware", "roolipohjainen pääsy"],
      steps: [
        ["Käyttäjätaulu ja siemendata.", "Toteuta käyttäjätaulu ja tallenna salasanat bcrypt-hashina. Luo siemendata: yksi projektipäällikkö ja kaksi työntekijää."],
        ["Istuntotapojen vertailu ja päätös.", "Vertaa evästesessiota ja tokenia nimenomaan tässä sovelluksessa (SQLite, yksi palvelin). Tee päätös yhdessä ohjaajan kanssa ja kirjaa keskustelu muistioon."],
        ["Kirjautumislomake.", "Toteuta kirjautuminen ja uloskirjautuminen sekä roolitiedon välitys frontendiin. Virheviestit suomeksi ja kentän vieressä."],
        ["Middleware-ketju.", "Kirjoita autentikointimiddleware ja roolimiddleware. Erottele 401 (ei kirjautunut) ja 403 (ei oikeuksia)."],
        ["Roolin mukainen navigaatio.", "Näytä hallintalinkit vain projektipäällikölle. Navigaation piilottaminen ei kuitenkaan riitä: reitit suojataan palvelimella."],
        ["Testi molemmilla rooleilla.", "Kirjaudu sisään kummallakin roolilla ja tarkista näkymät. Kutsu suojattua API-reittiä ilman kirjautumista ja varmista 401."]
      ],
      help: {
        title: "Middleware-ketju ja 401/403-erottelu",
        tree: "Pyyntö\n  ↓\ntunnistaMiddleware   → ei istuntoa?      → 401 Kirjaudu sisään\n  ↓\nvaadiRooli(\"pp\")     → väärä rooli?      → 403 Ei oikeuksia\n  ↓\nreitin käsittelijä   → vastaus\n\nclient/src/\n├─ lib/istunto.js      store: kirjautunut käyttäjä ja rooli\n├─ Kirjautuminen.svelte\n└─ Navigaatio.svelte   näyttää linkit roolin mukaan",
        actions: [
          "Tallenna salasanat vain hashina — selväkielistä salasanaa ei kirjoiteta lokiin eikä kantaan.",
          "Kirjoita istuntotapavertailu ennen toteutusta ja käy se läpi ohjaajan kanssa.",
          "Lisää middleware jokaiselle suojatulle reitille, älä vain navigaatioon.",
          "Testaa molemmilla rooleilla ja kirjautumattomana."
        ],
        code: "401 vai 403?\n401 Unauthorized  = kuka olet? (ei istuntoa tai istunto vanhentunut)\n403 Forbidden     = tiedän kuka olet, mutta et saa tehdä tätä\n\nISTUNTOTAVAN VERTAILUPOHJA\n                     evästesessio     token\nMissä tila sijaitsee\nUloskirjautuminen\nUseampi palvelin\nRiskit tässä sovelluksessa\nTyömäärä\nPÄÄTÖS ja perustelu:\nKeskustelukumppani, rooli ja ajankohta:",
        test: "Kutsu suojattua reittiä ilman kirjautumista (curl) ja työntekijän istunnolla: odota 401 ja 403 — kirjaa saadut koodit."
      },
      example: "Vertailu, jossa molempien tapojen hyödyt ja riskit on kirjoitettu tämän sovelluksen ehdoilla (yksi palvelin, SQLite), ja päätös perusteltuna sekä ohjaajan nimi ja ajankohta kirjattuna.",
      notEnough: "Tekoälyn yleisperustelu “JWT on skaalautuva ja moderni” ilman kytkentää omaan projektiin — ja roolirajaus, joka on tehty vain piilottamalla nappi."
    },

    5: {
      type: "feature",
      feature: "Työntekijä kirjaa tunnit (projekti, tehtävälaji, tunnit, päivä, selitys) ja näkee omat kirjauksensa listana — kirjausnäkymä on rakennettu itse alusta ilman valmista UI-komponenttikirjastoa.",
      excerpt: "Kirjaamisen pitää olla niin helppoa, ettei sitä voi vältellä — valmis alle puolessa minuutissa, myös puhelimella.",
      connection: "Kirjautuneet käyttäjät saavat ensimmäisen oikean toiminnon: rivit, joista kaikki myöhemmät yhteenvedot lasketaan.",
      deliverable: "Kirjauslomake omina Svelte-komponentteina, POST /api/kirjaukset validointeineen, omien kirjausten lista ja virhesyötteiden testitaulukko.",
      why: "Tämä on sovelluksen P0-ydin: kaikki raportit lasketaan näistä riveistä, joten tämän viikon validointi ratkaisee raporttien luotettavuuden.",
      done: "Kirjaus tallentuu SQLiteen ja näkyy listassa sivun päivityksen jälkeenkin; virheellinen syöte ei tallennu ja käyttäjä näkee suomenkielisen virheviestin kentän vieressä; kirjaus onnistuu alle 30 sekunnissa — ota aika.",
      record: "Kirjoita työviikon 5 merkintään: komponenttijako ja kunkin komponentin vastuu, validointisäännöt kenttä kerrallaan sekä mitattu kirjausaika sekunteina.",
      skills: ["Svelte-komponentit ja sidonnat", "REST", "validointi molemmissa päissä"],
      steps: [
        ["Komponenttijako.", "Päätä ja kirjaa, mitkä komponentit näkymään tulee ja mikä on kunkin vastuu. Kirjaa jako suunnitelmaan — siihen palataan työviikolla 15."],
        ["Lomake ja sidonnat.", "Toteuta kirjauslomake työviikon 2 rautalangan mukaan omina komponentteina. Käytä Sveltin sidontoja lomakekenttiin."],
        ["Backend-validointi.", "Toteuta POST /api/kirjaukset. Tarkista palvelimella: tunnit välillä 0,25–24, pakolliset kentät täytetty, projekti ja tehtävälaji ovat olemassa."],
        ["Tallennus ja lista.", "Toteuta GET /api/kirjaukset/omat ja näytä omat kirjaukset listana. Tarkista, että lista säilyy sivun päivityksen jälkeen."],
        ["Virheviestit käyttäjälle.", "Näytä jokainen virhe suomeksi sen kentän vieressä, jota virhe koskee. Viesti kertoo mitä pitää tehdä, ei vain että jokin meni pieleen."],
        ["Virhesyötteiden läpitestaus.", "Testaa 0 h, negatiivinen, 25 h, ei-numeerinen ja puuttuva tehtävälaji. Kirjaa jokaisesta odotettu ja havaittu tulos taulukkoon."]
      ],
      help: {
        title: "Komponenttipuu ja validointitaulukko",
        tree: "client/src/kirjaus/\n├─ KirjausNakyma.svelte   hakee projektit ja tehtävälajit, kokoaa näkymän\n├─ KirjausLomake.svelte   kentät, sidonnat, lähetys\n├─ KirjausLista.svelte    omat kirjaukset taulukkona\n└─ KenttaVirhe.svelte     yhden kentän virheviesti\n\nserver/routes/kirjaukset.js\n├─ POST /api/kirjaukset\n└─ GET  /api/kirjaukset/omat",
        actions: [
          "Piirrä komponenttipuu ennen koodia ja kirjaa jokaisen vastuu yhdellä lauseella.",
          "Kirjoita validointisäännöt taulukkona: kenttä → sääntö → virheviesti.",
          "Toteuta sama sääntö sekä lomakkeessa että palvelimella — selainvalidointi yksin ei riitä.",
          "Ota aika omalta kirjaukselta ja kirjaa sekunnit päiväkirjaan."
        ],
        code: "KENTTÄ → SÄÄNTÖ → VIRHEVIESTI\nprojekti      pakollinen, oma jäsenyys   \"Valitse projekti.\"\ntehtavalaji   pakollinen, on olemassa    \"Valitse tehtävälaji.\"\ntunnit        0,25–24, numero            \"Tunnit voivat olla enintään 24.\"\ntunnit        > 0                        \"Tunteja pitää olla vähintään 0,25.\"\npaiva         pakollinen, kelvollinen    \"Valitse päivä.\"\nselite        enintään 200 merkkiä       \"Selite on liian pitkä.\"\n\nTESTITAULUKKO\nsyöte | odotettu | havaittu | täsmää?",
        test: "Lähetä POST /api/kirjaukset suoraan curlilla arvolla tunnit=25 ohittaen lomakkeen: palvelimen pitää hylätä kirjaus."
      },
      example: "Validointitaulukko, jossa jokaisella rivillä on syöte, odotettu tulos ja havaittu tulos: “tunnit=25 → hylätään → 'Tunnit voivat olla enintään 24' → täsmää”.",
      notEnough: "Lomake, joka tallentaa mitä tahansa, tai validointi vain selaimessa niin että API hyväksyy suoran kutsun."
    },

    6: {
      type: "feature",
      feature: "Projektipäällikkö perustaa projekteja, hallitsee projektityyppejä ja tehtävälajeja sekä liittää työntekijöitä projekteihin — ja sovellus on jaettu näkymiin reitityskirjastolla.",
      excerpt: "Minun pitää pystyä perustamaan projektit ja tehtävälajit itse sekä päättämään, kuka kirjaa mihinkin projektiin.",
      connection: "Kirjaus tarvitsee projekteja ja tehtävälajeja: nyt asiakas voi perustaa ne itse, ja jäsenyys rajaa kirjaukset oikeisiin projekteihin.",
      deliverable: "Perusteltu reitityskirjastovalinta, reittikartta, projektien CRUD, tehtävälajien ja projektityyppien hallinta sekä projektin jäsenyydet.",
      why: "Ilman hallintaa data syötetään käsin tietokantaan eikä asiakas voi käyttää sovellusta itse — ja jäsenyys rajaa kirjaukset oikeisiin projekteihin, mikä on raporttien oikeellisuuden ehto.",
      done: "Työntekijän kirjauslomakkeessa näkyvät vain projektit, joihin hänet on liitetty; vain projektipäällikkö pääsee hallintanäkymiin — testattu myös suoralla URL-osoitteella; reittikartta on dokumentoitu.",
      record: "Kirjoita työviikon 6 merkintään: reitityskirjaston vertailu ja valinta, reittikartta URL → näkymä → rooli sekä se, mitä kuormitusrajauksesta jouduit tekemään.",
      skills: ["reititys", "CRUD", "ulkoisen komponentin käyttöönotto", "roolirajaus"],
      steps: [
        ["Reitityskirjaston vertailu ja asennus.", "Vertaa kahta vaihtoehtoa (esimerkiksi svelte-routing ja page.js): koko, ylläpito, dokumentaatio ja se, mitä juuri tämä projekti tarvitsee. Asenna valittu ja kirjaa package.json-diffi."],
        ["Reittikartta (URL → näkymä → rooli).", "Kirjoita taulukko, jossa jokaiselle reitille on näkymä ja sallittu rooli. Tämä on samalla tarkistuslista roolirajaukselle."],
        ["Projekti-CRUD.", "Toteuta projektien luonti, muokkaus ja listaus: nimi, tyyppi, alku- ja loppupäivä sekä kuvaus."],
        ["Tehtävälajit ja tyypit.", "Toteuta tehtävälajien ja projektityyppien hallinta kevyenä: lisäys sekä nimen ja kuvauksen muokkaus riittävät. Poisto ja käytöstä poisto ovat P1 — tee ne vain jos viikosta jää aikaa."],
        ["Jäsenyydet.", "Toteuta työntekijän lisäys projektiin ja poisto projektista. Tarkista, että kirjauslomakkeen projektivalikko rajautuu jäsenyyden mukaan."],
        ["Roolitarkistus reiteillä.", "Testaa jokainen hallintareitti työntekijän istunnolla ja suoralla URL-osoitteella. Odotettu tulos on 403, ei näkymä."]
      ],
      help: {
        title: "Reittikartta ja roolirajauksen tarkistus",
        tree: "URL                      Näkymä                  Rooli\n/                        Kirjaus                 työntekijä, pp\n/omat                    Omat kirjaukset         työntekijä, pp\n/hallinta/projektit      Projektien hallinta     pp\n/hallinta/tehtavalajit   Tehtävälajit ja tyypit  pp\n/hallinta/jasenet        Projektin jäsenet       pp\n/raportit                Yhteenvedot             pp\n/kirjaudu                Kirjautuminen           kaikki",
        actions: [
          "Kirjoita vertailutaulukko ennen asennusta — asennus ilman perustelua ei ole työnäyte.",
          "Täytä reittikartta ja tarkista jokainen rivi sekä käyttöliittymästä että suoralla URL-osoitteella.",
          "Rajaa kirjauslomakkeen projektivalikko palvelimella, ei vain selaimessa.",
          "Jos viikko uhkaa paisua: pidä ydin (projektit, tehtävälajit, jäsenyys, roolirajaus) ja yksinkertaista projektityypit projektipäällikön muokattavaksi listaksi samaan näkymään."
        ],
        code: "KIRJASTOVERTAILU\n                  vaihtoehto A     vaihtoehto B\nKoko (kt)\nViimeisin julkaisu\nDokumentaatio\nMitä tämä projekti tarvitsee\nRiskit\nVALINTA ja perustelu:\n\nSUORA URL VÄÄRÄLLÄ ROOLILLA\n[ ] /hallinta/projektit työntekijänä      → odotettu 403\n[ ] /hallinta/tehtavalajit työntekijänä   → odotettu 403\n[ ] /raportit työntekijänä                → odotettu 403\n[ ] sama kirjautumattomana                → odotettu 401",
        test: "Avaa kaksi selainikkunaa, kirjaudu toiseen työntekijänä ja toiseen projektipäällikkönä, ja kokeile hallintareittejä molemmissa rinnakkain."
      },
      example: "Kirjastovertailu neljällä kriteerillä (koko, ylläpito, dokumentaatio, tämän projektin tarve) ja valinta perusteltuna; reittikartta, jonka jokainen rivi on testattu.",
      notEnough: "“Asensin kirjaston koska tutoriaali käytti sitä”, tai roolirajaus joka pettää suoralla URL-osoitteella."
    },

    7: {
      type: "feature",
      feature: "Työntekijä muokkaa ja poistaa omia kirjauksiaan, suodattaa niitä viikon ja projektin mukaan ja näkee oman viikkosummansa; omat yhteystiedot voi päivittää. Oma tuntikirjanpito TuntiTutkassa alkaa.",
      excerpt: "Jokainen näkee omat kirjauksensa ja omat yhteenvetonsa, mutta ei muiden — tuntitiedot ovat herkkää tietoa.",
      connection: "Kirjaukset ja jäsenyydet ovat olemassa; nyt niitä hallitaan turvallisesti ja sovellus otetaan omaan käyttöön, jotta raportteihin kertyy aitoa dataa.",
      deliverable: "Kirjauksen muokkaus ja poisto omistajuustarkistuksineen, viikko- ja projektisuodatus, oma viikkosumma, yhteystietojen päivitys ja omien työtuntien kirjaaminen sovellukseen.",
      why: "Omistajuus ja laskenta ovat toimintalogiikan ydintä — ja oma käyttö tuottaa aitoa dataa raportteihin sekä paljastaa käytettävyysongelmat ennen asiakasta. Samalla syntyy työnäyte omista työmääräarvioista verrattuna toteutuneisiin tunteihin.",
      done: "Toisen käyttäjän kirjausta ei voi muokata edes suoralla API-kutsulla (testi kirjattu: odotettu 403, saatu 403); viikkosumma täsmää käsin laskettuun; omia kirjauksia on sovelluksessa vähintään viikon verran.",
      record: "Kirjoita työviikon 7 merkintään: valittu viikkokäytäntö perusteluineen, omistajuustestin tulos sekä ensimmäinen vertailu työmääräarvioiden ja toteutuneiden tuntien välillä.",
      skills: ["tilanhallinta", "päivämäärä- ja viikkokäsittely", "käyttöoikeudet"],
      steps: [
        ["Muokkauslomake.", "Toteuta kirjauksen muokkaus ja poisto omien kirjausten listasta. Sama validointi kuin uudessa kirjauksessa."],
        ["Omistajuustarkistus backendissa.", "Tarkista palvelimella, että muokattava tai poistettava kirjaus kuuluu kirjautuneelle käyttäjälle. Vieras kirjaus → 403."],
        ["Suodattimet.", "Toteuta viikko- ja projektisuodatus omien kirjausten listaan. Päätä ja kirjaa viikkokäytäntö: ISO-viikko vai muu, ja miten viikon- ja vuodenvaihde käsitellään."],
        ["Viikkosumma.", "Laske oma viikkosumma kyselyllä — älä tallenna sitä mihinkään. Vertaa summaa käsin laskettuun."],
        ["Yhteystiedot.", "Toteuta omien yhteystietojen (puhelin, sähköposti) päivitys."],
        ["Oma käyttö käyntiin.", "Ala kirjata omat projektityötuntisi TuntiTutkaan tehtävälajeilla suunnittelu, koodaus, testaus ja dokumentointi. Vertaa toteumaa issueiden arvioihin."]
      ],
      help: {
        title: "Viikkonumerot ja omistajuustesti",
        tree: "GET    /api/kirjaukset/omat?viikko=&projekti=\nPUT    /api/kirjaukset/:id     omistajuustarkistus ennen päivitystä\nDELETE /api/kirjaukset/:id     omistajuustarkistus ennen poistoa\nGET    /api/kirjaukset/omat/viikkosumma?viikko=\nPUT    /api/kayttajat/minä     omat yhteystiedot",
        actions: [
          "Päätä viikkokäytäntö ja kirjaa se suunnitelmaan ennen kuin kirjoitat kyselyn.",
          "Tee omistajuustarkistus palvelimella jokaiseen muokkaus- ja poistoreittiin.",
          "Laske viikkosumma kyselyllä, älä tallenna sitä tauluun.",
          "Aloita oma kirjaaminen heti — dataa tarvitaan työviikkojen 8 ja 9 raportteihin."
        ],
        code: "VIIKKONUMERON SUDENKUOPAT (SQLite)\nstrftime('%W', paiva)  viikko alkaa maanantaista, mutta vuoden\n                       ensimmäinen osittainen viikko on 00\nstrftime('%G-%V', ...)  ISO-vuosi ja ISO-viikko — vuodenvaihde menee oikein\nPÄÄTÄ yksi tapa ja käytä sitä kaikkialla. Kirjaa päätös suunnitelmaan.\n\nOMISTAJUUSTESTI\ncurl -X PUT https://<osoite>/api/kirjaukset/17 \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"tunnit\":1}' --cookie \"<toisen käyttäjän istunto>\"\nOdotettu: 403. Kirjaa saatu koodi ja vastaus.",
        test: "Kirjaa tunti toisen käyttäjän nimissä suoralla API-kutsulla ja varmista, että palvelin estää sen — kirjaa odotettu ja saatu vastauskoodi."
      },
      example: "Done-testi kirjattuna: `curl -X PUT .../api/kirjaukset/17` toisen käyttäjän istunnolla → odotettu 403, saatu 403. Lisäksi viikkosumma 14,75 h vs. käsin laskettu 14,75 h.",
      notEnough: "Omistajuus tarkistetaan vain käyttöliittymässä (nappi piilotettu), mutta API hyväksyy kutsun."
    },

    8: {
      type: "feature",
      feature: "Raportti-API laskee työtunnit lennossa kolmella ryhmittelyllä — viikoittain, henkilöittäin ja tehtävälajeittain — eikä yhtään summaa tallenneta; projektipäällikkö näkee taulukkoyhteenvedon ja porautuu yksittäisiin kirjauksiin.",
      excerpt: "Näiden lukujen pitää olla aina ajan tasalla — ei 'viime kuun tilanne', vaan tilanne nyt.",
      connection: "Kirjauksia on kertynyt myös omasta käytöstä; nyt niistä lasketaan se tieto, jota asiakas on koko ajan halunnut.",
      deliverable: "Suunniteltu vastausmuoto, testiaineisto käsin laskettuine odotusarvoineen, laskentamoduuli yksikkötesteineen, kolme raporttireittiä sekä taulukkonäkymä ja porautuminen.",
      why: "Tämä on koko sovelluksen olemassaolon syy — asiakkaan ydinkipu on raportointi. “Lasketaan, ei tallenneta” pitää luvut aina ajan tasalla ilman synkronointibugeja; jos summat tallennettaisiin, jokainen muokkaus ja poisto vaatisi summien päivityksen.",
      done: "Kolme raporttireittiä palauttaa summat, jotka täsmäävät käsin laskettuihin odotusarvoihin vähintään kolmella eri testiaineistolla; tietokannassa ei ole summataulua ja skeema todistaa sen; laskentamoduulilla on vähintään kolme yksikkötestiä.",
      record: "Kirjoita työviikon 8 merkintään: raporttien vastausmuoto, käsin lasketut odotusarvot ja API:n palauttamat luvut rinnakkain sekä se, mikä laskennassa meni ensin väärin ja miksi.",
      skills: ["SQL-aggregointi", "toimintalogiikan moduulijako", "REST-suunnittelu", "yksikkötestaus"],
      steps: [
        ["Vastausmuodon suunnittelu.", "Piirrä raporttireittien JSON-vastaukset paperille ennen koodia: mitkä kentät, missä muodossa, mitä tyhjä tulos palauttaa."],
        ["Testiaineisto ja käsin lasketut odotusarvot.", "Rakenna testiaineisto (esimerkiksi 3 käyttäjää × 2 projektia × 3 tehtävälajia, viikonvaihteen ylitys mukana) ja laske odotetut summat käsin ennen toteutusta."],
        ["GROUP BY -kyselyt.", "Toteuta laskenta SQL-aggregoinnilla — tai perustellusti JavaScriptillä. Erota laskenta omaksi moduulikseen, jota reitit kutsuvat."],
        ["Rajaukset (aikaväli, projekti).", "Lisää aikaväli- ja projektirajaukset. Tarkista, että rajaukset koskevat kaikkia kolmea ryhmittelyä samalla tavalla."],
        ["Taulukkonäkymä.", "Toteuta projektipäällikön taulukkoyhteenveto: ryhmittely, rivit ja summat selkeästi luettavina."],
        ["Porautuminen kirjauksiin.", "Toteuta porautuminen: taulukon rivistä pääsee niihin yksittäisiin kirjauksiin, joista summa syntyy."]
      ],
      help: {
        title: "GROUP BY -rakenne ja odotusarvotaulukko",
        tree: "server/laskenta/\n├─ index.js          julkinen rajapinta: viikoittain, henkiloittain, lajeittain\n├─ kyselyt.js        SQL-lauseet yhdessä paikassa\n└─ laskenta.test.js  yksikkötestit\n\nserver/routes/raportit.js\n├─ GET /api/raportit/viikot?alkaa=&paattyy=&projekti=\n├─ GET /api/raportit/henkilot?…\n└─ GET /api/raportit/tehtavalajit?…",
        actions: [
          "Kirjoita odotusarvot taulukkoon ennen kuin ajat yhtäkään kyselyä.",
          "Pidä laskenta omassa moduulissaan: reitti vain ottaa parametrit ja palauttaa tuloksen.",
          "Tarkista skeemasta, ettei yhtään summataulua ole syntynyt.",
          "Kirjoita vähintään kolme yksikkötestiä: normaali aineisto, tyhjä viikko ja viikonvaihteen ylitys."
        ],
        code: "GROUP BY -RAKENNE\nSELECT  <ryhmittelysarake> AS ryhma,\n        SUM(k.tunnit)      AS tunnit\nFROM    kirjaus k\nJOIN    kayttaja ka ON ka.id = k.kayttaja_id\nJOIN    tehtavalaji t ON t.id = k.tehtavalaji_id\nWHERE   k.paiva BETWEEN ? AND ?\n  AND   (? IS NULL OR k.projekti_id = ?)\nGROUP BY ryhma\nORDER BY ryhma;\n\nODOTUSARVOTAULUKKO\naineisto | ryhmittely | käsin laskettu | API palautti | täsmää?",
        test: "Aja sama kysely kolmella eri testiaineistolla ja vertaa jokainen luku käsin laskettuun odotusarvoon — yksikin poikkeama on bugi, ei pyöristys."
      },
      example: "Taulukko, jossa on aineisto, ryhmittely, käsin laskettu summa, API:n palauttama summa ja täsmääkö-sarake — kaikki kolme aineistoa omalla rivistöllään.",
      notEnough: "“Raportit näyttävät oikein” ilman käsin laskettua vertailua, tai summien tallentaminen omaan tauluun “suorituskyvyn takia”."
    },

    9: {
      type: "feature",
      feature: "Projektipäällikön raporttinäkymä esittää viikkotunnit pylväskaaviona ja tehtävälajijakauman kaaviona; tyhjä data, verkkovirhe ja lataustila käsitellään.",
      connection: "Työviikon 8 raportti-API saa käyttöliittymän: sama data muunnetaan kaavion muotoon ja virhetilanteet käsitellään ennen asiakaskatselmointia.",
      deliverable: "Perusteltu kaaviokirjastovalinta, kaaviot oikeasta datasta, testattu muunnosfunktio, ryhmittelyn ja aikavälin valinta sekä virhe- ja lataustilat.",
      why: "Kaavio on asiakkaan “yhdellä silmäyksellä” -tarve, ja tämä viikko on päänäyte rajapinnan palauttaman tiedon käsittelystä muunnoksineen ja virhetilanteineen — ja samalla käyttöön tulee toinen ulkoinen komponentti.",
      done: "Kaaviot piirtyvät oikeasta datasta ja päivittyvät suodattimista; verkkovirhe (testataan katkaisemalla backend) näyttää viestin eikä tyhjää ruutua; muunnosfunktion testi menee läpi; valinta on perusteltu kirjallisesti.",
      record: "Kirjoita työviikon 9 merkintään: kaaviokirjaston vertailu ja valinta, muunnosfunktion tehtävä ja sen testin tulos sekä se, miten kukin virhetila testattiin.",
      skills: ["fetch ja asynkronisuus", "tiedon muunnos", "kaaviokirjasto", "virheenkäsittely"],
      steps: [
        ["Kirjastovertailu ja asennus.", "Vertaa kahta kaaviokirjastoa: koko, lisenssi, dokumentaatio ja saavutettavuus. Perustele valinta kirjallisesti ja asenna valittu."],
        ["Ensimmäinen kaavio kovakoodatulla datalla.", "Piirrä kaavio kiinteällä esimerkkidatalla, jotta kirjaston käyttö ja oma data eivät sekoitu toisiinsa."],
        ["Muunnosfunktio ja sen testi.", "Kirjoita funktio, joka muuntaa raportti-API:n JSON-vastauksen kaavion tarvitsemaan muotoon. Kirjoita funktiolle testi — se on puhdas funktio, joten se on helppo testata."],
        ["Suodattimet.", "Toteuta ryhmittelyn vaihto (viikko, henkilö, tehtävälaji) ja aikavälin valinta. Kaavion pitää päivittyä valinnasta."],
        ["Virhe- ja lataustilat.", "Käsittele kolme tilaa: tyhjä aineisto → ohjaava viesti, verkkovirhe → virheilmoitus ja uudelleenyritys, lataus → latausindikaattori."],
        ["Katselmointidemon valmistelu.", "Valmistele työviikon 10 demoa varten testitunnukset ja tarpeeksi kirjauksia, jotta kaaviot näyttävät jotain järkevää."]
      ],
      help: {
        title: "Muunnosfunktio ja virhetilojen tarkistuslista",
        tree: "client/src/raportit/\n├─ RaporttiNakyma.svelte   haku, tilat, suodattimet\n├─ Kaavio.svelte          kaaviokirjaston kääre\n├─ muunna.js             API-JSON → { labels, datasets }\n└─ muunna.test.js        muunnoksen yksikkötesti\n\nTilat: lataus → onnistui | tyhjä | virhe",
        actions: [
          "Erota tiedonhaku, muunnos ja piirto toisistaan — silloin muunnosta voi testata ilman selainta.",
          "Kirjoita muunnosfunktion testi ennen kuin kytket kaavion oikeaan dataan.",
          "Testaa verkkovirhe sammuttamalla backend kesken käytön.",
          "Tyhjä aineisto on normaali tilanne, ei virhe."
        ],
        code: "MUUNNOSFUNKTION RUNKO\n// syöte:  [{ ryhma: \"2026-W07\", tunnit: 12.5 }, …]\n// tuotos: { labels: [\"2026-W07\", …], datasets: [{ data: [12.5, …] }] }\nexport function muunnaKaavioksi(rivit) {\n  // 1) järjestä rivit\n  // 2) poimi labels\n  // 3) poimi arvot samassa järjestyksessä\n  // 4) palauta kaavion odottama rakenne\n}\n\nVIRHETILOJEN TARKISTUSLISTA\n[ ] tyhjä aineisto     → ohjaava viesti, ei tyhjää ruutua\n[ ] verkkovirhe        → virheilmoitus + uudelleenyritys\n[ ] lataus kesken      → latausindikaattori\n[ ] palvelinvirhe 500  → viesti, ei konsolikaatumista",
        test: "Sammuta backend kesken raporttihaun ja tarkista, että näkymä kertoo virheestä ja tarjoaa uudelleenyrityksen."
      },
      example: "Virhetilataulukko, jossa on tilanne, mitä käyttäjä näkee ja miten se testattiin — sekä muunnosfunktion testin ajotulos.",
      notEnough: "Kaavio, joka kaatuu tyhjään dataan, tai kirjastovalinta ilman vertailua."
    },

    10: {
      type: "katselmointi",
      feature: "Ulkopuolinen henkilö asiakkaan roolissa kokeilee julkaistua versiota molemmilla rooleilla; palaute on kirjattu testaajan omin sanoin erillään omasta tulkinnasta, ja muutokset on priorisoitu issueiksi.",
      excerpt: "Haluan kokeilla toimivaa väliversiota noin puolivälissä omilla käsilläni.",
      connection: "Puolet sovelluksesta on valmiina ja julkaistuna: nyt selviää, ratkaiseeko se oikeasti asiakkaan ongelman — ja mikä muuttuu ennen loppusuoraa.",
      deliverable: "Katselmointimuistio testaajan sitaatteineen, oma tulkinta erikseen kirjattuna ja priorisoitu muutoslista issueina.",
      why: "Palaute puolivälissä ehtii vielä muuttaa suuntaa — ja tämä on asiakasviestinnän ja katselmoinnin päätyönäyte, jota ei voi tuottaa tekoälyllä: oikea ihminen, oikeat sanat, oikea julkaistu sovellus.",
      done: "Katselmointimuistio (testaajan nimetty rooli, ajankohta, testaajan omat sanat, oma tulkinta, sovitut muutokset) on project-docs-kansiossa ja tärkein muutos on issueina hyväksymiskriteereineen.",
      record: "Kirjoita työviikon 10 merkintään: kuka testasi ja missä roolissa, kolme tärkeintä sitaattia, oma tulkinta niistä ja se, minkä muutoksen valitsit toteutettavaksi ensin.",
      skills: ["asiakasviestintä", "katselmointikäytäntö", "palautteen jäsentäminen"],
      resources: [["Lataa dokumentointipohjat (katselmointiloki)", "downloads/nayton-dokumentointipohjat.docx", true]],
      steps: [
        ["Katselmoinnin valmistelu.", "Tee esityslista ja kaksi testipolkua: työntekijä kirjaa tunnin, projektipäällikkö katsoo raportin ja porautuu. Valmistele tunnukset ja testidata etukäteen."],
        ["Esittely ja vapaa kokeilu.", "Esittele versio asiakaslähtöisesti: mitä sovellus tekee käyttäjälle, ei miten se on koodattu. Anna testaajan sitten kokeilla itse ilman opastusta."],
        ["Palautteen kirjaus sitaatteina.", "Kirjoita testaajan havainnot hänen omin sanoinaan. Älä siisti, älä tulkitse vielä."],
        ["Oma tulkinta erikseen.", "Kirjaa erilliseen sarakkeeseen, mitä uskot havainnon tarkoittavan ja mikä sen syy on."],
        ["Priorisointi ohjaajan kanssa.", "Käy muutokset läpi ohjaajan kanssa ja päätä, mikä toteutetaan työviikolla 11 ja mikä jää v1.1-listalle."],
        ["Muutokset issueiksi.", "Kirjaa sovitut muutokset issueiksi hyväksymiskriteereineen ja arvioineen."]
      ],
      help: {
        title: "Katselmointimuistion pohja",
        tree: "project-docs/katselmointi-vk10.md\n├─ Testaajan rooli ja ajankohta\n├─ Testattu versio (commit tai tag)\n├─ Testipolut (1 työntekijä, 2 projektipäällikkö)\n├─ Havainnot: | testaajan sanat | oma tulkinta |\n├─ Sovitut muutokset ja prioriteetit\n└─ Issue-numerot",
        actions: [
          "Sovi testaaja hyvissä ajoin ohjaajan kanssa — asiakkaan roolia ei esitä oma ohjaava opettajasi.",
          "Anna testaajan kokeilla itse: älä ota hiirtä käteesi, kun hän epäröi.",
          "Kirjoita sitaatit muistiin heti, älä muistin varassa jälkikäteen.",
          "Erota testaajan sanat ja oma tulkinta selvästi toisistaan."
        ],
        code: "HAVAINTOTAULUKKO\n# | testaajan omat sanat | oma tulkinta | päätös | issue\n1 | \"En löytänyt mistä vaihdan viikon\" | suodatin on\n  | listan alapuolella ja jää huomaamatta | siirretään | #31\n\nTESTIPOLKU 1 (työntekijä)\n[ ] kirjaudu sisään\n[ ] kirjaa tunti projektille ja tehtävälajille\n[ ] tarkista että kirjaus näkyy omassa listassa\n\nTESTIPOLKU 2 (projektipäällikkö)\n[ ] avaa raportit\n[ ] vaihda ryhmittelyä\n[ ] poraudu yhden henkilön kirjauksiin",
        test: "Anna testaajan tehdä molemmat testipolut ilman suullista apua ja merkitse jokainen kohta, jossa hän pysähtyi."
      },
      example: "“Testaaja: 'En löytänyt mistä vaihdan viikon' → tulkinta: suodatin on piilossa listan alla → päätös: siirretään suodatin listan yläpuolelle (issue #31).”",
      notEnough: "“Asiakas tykkäsi, pieniä korjauksia toivottiin” ilman sitaatteja, tulkintoja ja päätöksiä."
    },

    11: {
      type: "feature",
      feature: "Katselmoinnin tärkein muutos on toteutettu omassa haarassa ja yhdistetty pull requestilla pääversioon; vähintään yksi merge-konflikti on ratkaistu hallitusti.",
      connection: "Työviikon 10 palaute muuttuu koodiksi — ja samalla harjoitellaan se tapa, jolla ominaisuus liitetään olemassa olevaan versioon hallitusti.",
      deliverable: "Ominaisuushaara pienine commiteineen, pull request kuvauksineen ja itsekatselmointeineen, ratkaistu konflikti ja muutos tuotannossa.",
      why: "Ominaisuuden hallittu liittäminen olemassa olevaan versioon on oma vaatimuksensa — ja palaute, joka ei johda muutokseen, on kerätty turhaan.",
      done: "Pull requestin kuvaus ja keskustelu näyttävät mitä muutettiin ja miksi; muutos on tuotannossa; konfliktin ratkaisu näkyy historiassa; katselmointimuistion kohta on kuitattu linkillä.",
      record: "Kirjoita työviikon 11 merkintään: mikä muutos valittiin ja miksi juuri se, pull requestin linkki, miten konflikti syntyi ja miten ratkaisit sen.",
      skills: ["Git-haarat", "pull request", "konfliktin ratkaisu"],
      steps: [
        ["Issue ja kriteerit.", "Valitse katselmoinnin tärkein muutos ja tarkenna sen hyväksymiskriteerit issueen ennen kuin kirjoitat riviäkään."],
        ["Haara.", "Luo ominaisuushaara (feature branch), jonka nimi kertoo mitä tehdään — esimerkiksi feature/viikkosuodatin-ylos."],
        ["Toteutus pienin commitein.", "Tee muutos pienissä osissa. Yksi commit = yksi looginen muutos, viesti kertoo mitä ja miksi."],
        ["PR ja itsekatselmointi.", "Avaa pull request, kirjoita kuvaus (mitä, miksi, linkki palautteeseen) ja katselmoi oma koodisi kommentein: perustele valinnat ja merkitse kohdat, joita epäilet."],
        ["Konfliktin ratkaisu ja merge.", "Ratkaise merge-konflikti hallitusti ja yhdistä pääversioon. Jos konfliktia ei synny luonnostaan, tee ohjattu harjoituskonflikti ja merkitse se selvästi harjoitukseksi."],
        ["Julkaisu ja todennus palautetta vasten.", "Julkaise muutos ja tarkista se julkaistusta versiosta. Kuittaa katselmointimuistion kohta linkillä."]
      ],
      help: {
        title: "Konfliktin ratkaisu ja PR-kuvauksen pohja",
        tree: "git switch -c feature/viikkosuodatin-ylos\n… commitit …\ngit switch main && git pull\ngit switch feature/viikkosuodatin-ylos\ngit merge main          ← konflikti näkyy tässä\ngit status              ← mitkä tiedostot ovat kesken\n… ratkaise merkinnät …\nnpm test                ← testit ennen committia\ngit add . && git commit\n→ pull request → itsekatselmointi → merge",
        actions: [
          "Aloita aina päivitetystä main-haarasta, niin konfliktit pysyvät pieninä.",
          "Ratkaise konflikti tiedosto kerrallaan ja aja testit ennen committia.",
          "Kirjoita PR-kuvaus lukijalle, joka ei ollut katselmoinnissa mukana.",
          "Todenna muutos julkaistusta versiosta, ei vain omalta koneelta."
        ],
        code: "PR-KUVAUKSEN POHJA\n## Mitä\nYhdellä lauseella, mitä tämä muuttaa käyttäjälle.\n\n## Miksi\nPerustuu katselmointipalautteeseen (muistio, kohta N):\n\"testaajan sitaatti\"\n\n## Miten testattu\n- [ ] testipolku 1\n- [ ] testipolku 2\n- [ ] regressiotestit läpi\n\nSulkee #31\n\nKONFLIKTIMERKINNÄT\n<<<<<<< HEAD          ← oma versio\n=======               ← raja\n>>>>>>> main          ← toinen versio\nPoista merkinnät ja jätä tarkoitettu lopputulos.",
        test: "Avaa julkaistu versio ja tee juuri se asia, josta testaaja huomautti — sen pitää nyt onnistua ilman epäröintiä."
      },
      example: "PR-kuvaus: “Siirtää viikkosuodattimen listan yläpuolelle. Perustuu katselmointipalautteeseen (muistio, kohta 2). Sulkee #31.” — ja merge-commit historiassa.",
      notEnough: "Suora commit pääversioon viestillä “korjattu palautteet”, ilman haaraa, pull requestia ja kuvausta."
    },

    12: {
      type: "feature",
      feature: "Tuntikirjaus onnistuu oikealla puhelimella; sovellus toimii näppäimistöllä, lomakkeilla on label-kytkennät ja kontrastit riittävät — saavutettavuuspistemäärä on vähintään 90 ja ennen/jälkeen-raportit ovat tallessa.",
      excerpt: "Kirjaamisen pitää olla niin helppoa, ettei sitä voi vältellä — valmis alle puolessa minuutissa, myös puhelimella.",
      connection: "Toiminnot ovat kasassa; nyt varmistetaan, että ne toimivat siellä missä asiakkaan väki niitä käyttää — puhelimella, näppäimistöllä ja ruudunlukijalla.",
      deliverable: "Lighthouse-raportit ennen ja jälkeen, omat CSS-taitekohdat, korjattu näppäinpolku, label-kytkennät ja kaavion tekstivastine.",
      why: "Asiakkaan väki kirjaa tunteja asiakaskäynneillä puhelimella — ja saavutettavuus on webprofiilissa vaatimus, ei kaunistus. Ennen/jälkeen-mittaus tekee parannuksesta todistettavan.",
      done: "Kirjaus on tehty oikealla puhelimella alusta loppuun alle 30 sekunnissa; koko käyttöpolku kulkee pelkällä näppäimistöllä; saavutettavuuspistemäärä on vähintään 90 ja molemmat raportit ovat repossa.",
      record: "Kirjoita työviikon 12 merkintään: lähtö- ja lopputulokset numeroina, korjauslista kohta kohdalta, puhelimella mitattu kirjausaika ja se, mikä näppäinpolussa oli rikki.",
      skills: ["responsiivinen CSS", "saavutettavuus", "mittaustyökalut", "mobiilitestaus"],
      steps: [
        ["Lähtömittaus.", "Aja Lighthouse (saavutettavuus ja suorituskyky) ja tallenna raportti repositoryyn. Tämä on lähtötaso, jota vastaan parannus todistetaan."],
        ["Taitekohdat ja mobiilitesti laitteella.", "Korjaa responsiivisuus omilla CSS-taitekohdilla: kirjauslomake ja raportit mahtuvat puhelimen näytölle. Testaa oikealla laitteella ja ota aika kirjaukselta."],
        ["Näppäinpolku läpi sovelluksen.", "Kulje koko sovellus pelkällä näppäimistöllä: kirjautuminen, kirjaus, lista, raportit. Merkitse jokainen kohta, jossa fokus katoaa tai jumittuu."],
        ["Labelit, hierarkia ja kontrastit.", "Kytke jokainen lomakekenttä label-elementtiin, korjaa otsikkohierarkia ja varmista kontrastit. CSS-ratkaisut tehdään itse."],
        ["Kaavion tekstivastine.", "Anna jokaiselle kaaviolle tekstivastine: sama data taulukkona, jotta tieto on saatavilla ilman kuvaa."],
        ["Loppumittaus ja vertailu.", "Aja Lighthouse uudelleen, tallenna raportti ja kirjoita ennen/jälkeen-vertailu: mitkä korjaukset nostivat pistemäärää."]
      ],
      help: {
        title: "Saavutettavuustarkistuslista ja taitekohdat",
        tree: "Näppäinpolku (testaa Tabilla)\nKirjautuminen → sposti → salasana → Kirjaudu\n  ↓\nKirjaus → projekti → tehtävälaji → tunnit → päivä → selite → Tallenna\n  ↓\nOmat kirjaukset → suodattimet → rivin muokkaa/poista\n  ↓\nRaportit → ryhmittely → aikaväli → kaavio → tekstivastine",
        actions: [
          "Tallenna lähtömittaus ennen kuin korjaat mitään — muuten parannusta ei voi todistaa.",
          "Valitse taitekohdat oman sisältösi mukaan: siitä leveydestä, jossa taulukko tai lomake alkaa ahtautua.",
          "Testaa oikealla puhelimella, ei vain selaimen laitesimulaattorilla.",
          "Kirjaa jokainen korjaus omalle rivilleen korjauslistaan."
        ],
        code: "SAAVUTETTAVUUDEN TARKISTUSLISTA\n[ ] jokaisella kentällä on <label for> tai kentän sisältävä <label>\n[ ] otsikot h1 → h2 → h3 ilman hyppyjä\n[ ] fokus näkyy selvästi jokaisessa elementissä\n[ ] Tab-järjestys vastaa näkyvää järjestystä\n[ ] virheviesti on ohjelmallisesti kytketty kenttäänsä\n[ ] tekstin ja taustan kontrasti riittää myös napeissa\n[ ] kaaviolla on tekstivastine (sama data taulukkona)\n[ ] kuvilla on alt-teksti tai ne on merkitty koristeeksi\n\nENNEN/JÄLKEEN\nSaavutettavuus __ → __   Suorituskyky __ → __\nKorjaukset: 1) … 2) … 3) …",
        test: "Irrota hiiri ja tee koko kirjaus pelkällä näppäimistöllä — jos jokin kohta ei onnistu, se on korjattava."
      },
      example: "Ennen/jälkeen: “Saavutettavuus 71 → 96; korjattu: 4 label-kytkentää, kontrasti napeissa, fokusjärjestys modaalissa, kaavion tekstivastine.”",
      notEnough: "“Toimii puhelimella” ilman laitetta, mittausta ja korjauslistaa."
    },

    13: {
      type: "laatu",
      feature: "Tietoturvariskien arviointi on dokumentoitu ja korjaukset tehty: validointi molemmissa päissä, roolipohjainen pääsy jokaisella API-reitillä, salaisuudet ympäristömuuttujissa ja XSS-tarkistus selityskentille.",
      excerpt: "Jokainen näkee omat kirjauksensa ja omat yhteenvetonsa, mutta ei muiden — tuntitiedot ovat herkkää tietoa.",
      connection: "Kaikki reitit ovat nyt olemassa, joten ne voi käydä läpi kerralla: jokainen reitti jokaisella roolilla, ja löydökset korjataan ennen testausviikkoa.",
      deliverable: "Tietoturva-arvio jäännösriskeineen, ajettu reittitaulukko, korjaukset, salaisuudet .env-tiedostossa ja XSS-testin tulos.",
      why: "Työaikatiedot ovat henkilöön sidottua, palkkakeskusteluihin vaikuttavaa dataa — yksi vuotava raporttireitti vie luottamuksen koko järjestelmään. Asiakas sanoi sen itse: tuntitiedot ovat herkkää tietoa.",
      done: "Reittitaulukko on ajettu ja jokainen rivi täsmää odotettuun (poikkeamat korjattu ja uusintatestattu); skripti-syöte renderöityy tekstinä; repossa tai sen historiassa ei ole salaisuuksia; arviodokumentti on project-docs-kansiossa.",
      record: "Kirjoita työviikon 13 merkintään: viisi riskiluokkaa ja niiden ratkaisut, reittitaulukon poikkeamat ja korjaukset sekä se, mitä jäännösriskiä et voinut poistaa ja miksi.",
      skills: ["tietoturva-arviointi", "käyttöoikeustestaus", "ympäristömuuttujat", "XSS"],
      steps: [
        ["Riskien kartoitus.", "Käy läpi viisi riskiluokkaa: syötteet, käyttöoikeudet, salasanat, istunnot ja tietojen näkyvyys. Kirjaa jokaisesta riski, ratkaisu ja jäännösriski."],
        ["Reittitaulukon ajo.", "Tee taulukko, jossa on jokainen API-reitti kertaa kolme roolia (kirjautumaton, työntekijä, projektipäällikkö). Kirjaa odotettu vastaus ennen ajoa ja aja sitten jokainen rivi."],
        ["Korjaukset.", "Korjaa jokainen poikkeama ja uusintatestaa rivi. Poikkeama ilman uusintatestiä ei ole korjattu."],
        ["Salaisuudet ympäristöön.", "Siirrä salaisuudet .env-tiedostoon, lisää se gitignoreen ja tarkista, ettei niitä ole Git-historiassa."],
        ["XSS-testi.", "Kirjaa selitteeksi <script>alert(1)</script> ja tarkista jokainen näkymä, jossa selite näkyy: syötteen pitää näkyä tekstinä."],
        ["Arviodokumentti valmiiksi.", "Kokoa arvio, taulukko ja korjaukset yhdeksi dokumentiksi project-docs-kansioon."]
      ],
      help: {
        title: "Reittitaulukko ja riskilistan runko",
        tree: "RISKILUOKAT TÄSSÄ SOVELLUKSESSA\n1 Syötteet         validointi molemmissa päissä, SQL-parametrit\n2 Käyttöoikeudet   rooli + omistajuus jokaisella reitillä\n3 Salasanat        hash, ei lokeihin, ei siemendataan tuotannossa\n4 Istunnot         vanheneminen, uloskirjautuminen, evästeasetukset\n5 Näkyvyys         kuka näkee kenenkin tunnit ja yhteenvedot",
        actions: [
          "Kirjaa odotettu vastaus jokaiselle riville ennen kuin ajat taulukon.",
          "Käytä SQL-kyselyissä parametreja, älä merkkijonojen yhdistämistä.",
          "Tarkista Git-historia salaisuuksien varalta, ei vain nykyistä tilaa.",
          "Testaa XSS jokaisessa näkymässä, jossa käyttäjän kirjoittama teksti näkyy."
        ],
        code: "REITTITAULUKON POHJA\nreitti                          | kirjautumaton | työntekijä | pp\nGET  /api/kirjaukset/omat       | 401           | 200        | 200\nPUT  /api/kirjaukset/:toisen    | 401           | 403        | 403\nGET  /api/raportit/henkilot     | 401           | 403        | 200\nPOST /api/projektit             | 401           | 403        | 201\nGET  /api/kayttajat             | 401           | 403        | 200\n→ lisää jokainen oma reittisi ja kirjaa saatu vastaus rinnalle\n\nXSS-TESTI\nSelite: <script>alert(1)</script>\nOdotettu: teksti näkyy sellaisenaan kaikissa näkymissä,\nskripti ei suoritu, konsolissa ei virhettä.",
        test: "Aja koko reittitaulukko kolmella istunnolla ja merkitse jokaiseen soluun saatu vastauskoodi — vertaa ennen ajoa kirjattuun odotukseen."
      },
      example: "Taulukkorivi: “GET /api/raportit/henkilot · työntekijä · odotettu 403 · saatu 403 ✓”, ja jäännösriski kirjattuna: “siemendatan tunnukset on vaihdettava ennen oikeaa käyttöä”.",
      notEnough: "“Sovellus on turvallinen koska salasanat on hashattu bcryptillä” ilman reittien läpikäyntiä."
    },

    14: {
      type: "laatu",
      feature: "Vähintään 12 suunniteltua testitapausta on ajettu kolmessa luokassa — normaali, rajat ja virhetilanteet — ja vähintään kaksi täydellistä virheenkorjausketjua on dokumentoitu.",
      connection: "Tietoturvakorjausten jälkeen koko sovellus testataan kerralla: nyt on olemassa kaikki se, mitä testimatriisi on työviikolta 2 asti odottanut.",
      deliverable: "Täydennetty testimatriisi odotusarvoineen, ajetut testitulokset, vähintään kaksi täydellistä virheenkorjausketjua ja laskentamoduulin regressiotestit.",
      why: "Raportointisovellus, jonka summiin ei voi luottaa, on hyödytön — ja ilman ennen ajoa kirjattua odotusarvoa testi ei todista mitään — se vain toteaa, mitä sattui tapahtumaan.",
      done: "Testiraportissa jokaisella tapauksella on luokka, odotettu ja havaittu tulos sekä ajankohta; vähintään kaksi ketjua on täydellisiä commit-viittauksineen; regressiotestit ajetaan komennolla ja menevät läpi.",
      record: "Kirjoita työviikon 14 merkintään: montako tapausta ajoit ja montako meni läpi ensimmäisellä kerralla, kaksi virheenkorjausketjua kokonaisina sekä se, mitä testaus paljasti omasta koodistasi.",
      skills: ["testisuunnittelu", "virheenkorjaus", "regressiotestaus"],
      resources: [["Lataa dokumentointipohjat (testimatriisi)", "downloads/nayton-dokumentointipohjat.docx", true]],
      steps: [
        ["Matriisin täydennys.", "Täydennä testimatriisi vähintään 12 tapaukseen. Jaa tapaukset kolmeen luokkaan: normaali käyttö, rajat ja virhetilanteet."],
        ["Odotetut tulokset ennen ajoa.", "Kirjoita jokaiselle tapaukselle odotettu tulos ennen kuin ajat sen. Tämä on koko testauksen ydin."],
        ["Testiajot ja kirjaus.", "Aja testit ja kirjaa havaitut tulokset omaan sarakkeeseensa odotettujen viereen. Merkitse ajankohta."],
        ["Virheanalyysi.", "Selvitä jokaisen poikkeaman syy — ei arvausta, vaan devtoolsilla, lokeilla tai testiaineistolla todennettu syy."],
        ["Korjausketjut committeineen.", "Korjaa löytyneet virheet täydellisinä ketjuina: havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti."],
        ["Regressiotestit.", "Lisää laskentamoduulille yksikkötestit regressiosuojaksi: viikkorajat, tyhjä viikko ja vuodenvaihde."]
      ],
      help: {
        title: "Virheenkorjausketjun ja testiraportin pohjat",
        tree: "TESTILUOKAT (13 tapausta, jako 4 / 4 / 5)\nnormaali   T01 kirjaus · T02 hallinta · T03 viikkosumma · T04 roolit\nrajat      T05 0,25 h ja 24 h · T06 tyhjä viikko\n           T07 sunnuntai ja vuodenvaihde · T08 tyhjä projekti\nvirhe      T09 virheelliset tunnit · T10 suora API-kutsu\n           T11 XSS-selite · T12 verkkovirhe · T13 istunto vanhenee",
        actions: [
          "Kirjoita odotettu tulos ennen ajoa — jälkikäteen kirjattu odotus ei ole odotus.",
          "Aja jokainen tapaus ja kirjaa havainto, vaikka se olisi sama kuin odotus.",
          "Kirjaa jokainen ketju kaikkine kuutena kohtineen — puolikas ketju ei kelpaa työnäytteeksi.",
          "Älä keksi bugeja: jos aitoja ei löydy, pyydä ohjaajaa merkitsemään vikatehtäviä."
        ],
        code: "VIRHEENKORJAUSKETJUN 6 KENTTÄÄ\n1 Havainto            mitä näit, missä näkymässä, millä datalla\n2 Toistamisohje       askeleet, joilla virhe toistuu joka kerta\n3 Syy                 miten selvitit syyn ja mikä se oli\n4 Korjauscommit       commit-tunnus ja mitä se muutti\n5 Uusintatesti        sama testi uudelleen: tulos\n6 Regressiotesti      mitä muuta testasit ettei mennyt rikki\n\nTESTIRAPORTIN SARAKKEET\nT# | luokka | lähtötila | toiminta | odotus | havainto | tulos | aika",
        test: "Aja regressiotestit komennolla puhtaassa työhakemistossa ja tarkista, että kaikki menevät läpi ilman käsin tehtyjä vaiheita."
      },
      example: "Täysi ketju aidosta bugista: “T07: sunnuntain kirjaus näkyi väärällä viikolla → syy: strftime('%W') laskee vuoden ensimmäisen osittaisen viikon nollaksi → korjaus commit abc123 → uusintatesti ok → regressiotesti lisätty.”",
      notEnough: "“Testasin kaiken ja kaikki toimii” — ilman luokkia, odotusarvoja ja ketjuja."
    },

    15: {
      type: "laatu",
      feature: "Koodi on refaktoroitu testit vihreinä, ja dokumentaatio on valmis: README, käyttöönotto-ohje, riippuvuustaulukko ja asiakkaan pikaohjeet molemmille rooleille.",
      excerpt: "Mukana on ohje, jolla uusi työntekijä pääsee alkuun kysymättä minulta mitään.",
      connection: "Testit ovat vihreinä, joten koodia uskaltaa siistiä — ja käyttöönotto-ohje kirjoitetaan nyt, koska sitä testataan oikeasti työviikolla 16.",
      deliverable: "Kolme dokumentoitua refaktorointia ennen/jälkeen-diffeineen, README ja käyttöönotto-ohje, riippuvuustaulukko sekä pikaohjeet työntekijälle ja projektipäällikölle.",
      why: "Ylläpidettävyys ja dokumentointi todennetaan tässä — ja ilman testattavaa käyttöönotto-ohjetta työviikon 16 julkaisutestaus epäonnistuu varmasti.",
      done: "Regressiotestit menevät läpi refaktoroinnin jälkeen; ennen/jälkeen-diffit ja perustelut ovat repossa; dokumentit ovat repossa ja ohjeet on kirjoitettu käyttäjälle, ei arvioijalle; lisenssin tila on kirjattu.",
      record: "Kirjoita työviikon 15 merkintään: kolme refaktorointikohdetta ja miksi valitsit juuri ne, mitä dokumentaatiota kirjoitit ja kenelle sekä lisenssikysymyksen tila.",
      skills: ["refaktorointi", "ylläpidettävyys", "dokumentointi"],
      steps: [
        ["Refaktorointikohteiden valinta perusteluineen.", "Valitse kolme kohdetta: pitkä funktio, toistuva koodi ja epäselvä nimi. Perustele jokainen valinta yhdellä lauseella."],
        ["Refaktorointi testit vihreinä.", "Refaktoroi yksi kohde kerrallaan ja aja regressiotestit jokaisen jälkeen. Tallenna ennen/jälkeen-diffi."],
        ["README ja käyttöönotto-ohje.", "Kirjoita käyttöönotto-ohje, jolla sovelluksen saa asennettua tyhjään ympäristöön vaihe vaiheelta. Tätä ohjetta testataan oikeasti työviikolla 16."],
        ["Pikaohjeet rooleittain.", "Kirjoita työntekijän ohje (kirjaus) ja projektipäällikön ohje (projektit, tehtävälajit, raportit). Kirjoita käyttäjälle, älä arvioijalle."],
        ["Riippuvuustaulukko.", "Kokoa taulukko: paketti → rooli tässä projektissa → versio. Jokaiselle riippuvuudelle pitää olla syy."],
        ["Lisenssikysymys ohjaajalle.", "Kysy lisenssi ohjaajalta. Jos vastausta ei vielä ole, kirjaa se suunnitelmaan avoimeksi asiaksi — älä päätä itse."]
      ],
      help: {
        title: "README-runko ja refaktorointiperustelu",
        tree: "README.md\n├─ Mikä sovellus on ja kenelle\n├─ Vaatimukset (Node-versio, käyttöjärjestelmä)\n├─ Asennus vaihe vaiheelta\n├─ Ympäristömuuttujat (.env.esimerkki)\n├─ Käynnistys: kehitys ja tuotanto\n├─ Tietokannan alustus\n├─ Testien ajo\n└─ Riippuvuudet ja niiden rooli\n\nproject-docs/\n├─ kayttoonotto.md      tyhjästä ympäristöstä toimivaan sovellukseen\n├─ pikaohje-tyontekija.md\n└─ pikaohje-projektipaallikko.md",
        actions: [
          "Refaktoroi yksi asia kerrallaan ja aja testit jokaisen välissä.",
          "Kirjoita käyttöönotto-ohje niin, että sen voi seurata kirjaimellisesti ilman aiempaa tietoa projektista.",
          "Nimeä jokaiselle riippuvuudelle rooli — jos roolia ei löydy, harkitse poistoa.",
          "Kirjaa lisenssin tila myös silloin, kun se on yhä avoin."
        ],
        code: "REFAKTOROINTIPERUSTELUN POHJA\nKohde:            tiedosto ja funktio\nOngelma:          mikä tekee tästä vaikean ylläpitää\nEnnen:            lyhyt katkelma\nJälkeen:          lyhyt katkelma\nMiksi parempi:    1) … 2) … 3) …\nTestit:           ajettu, tulos\n\nRIIPPUVUUSTAULUKKO\npaketti | rooli tässä projektissa | versio\nexpress | HTTP-palvelin ja reitit  | x.y.z\n…",
        test: "Anna käyttöönotto-ohje toiselle henkilölle luettavaksi ja pyydä häntä merkitsemään jokainen kohta, jota hän ei ymmärrä ilman lisäkysymyksiä."
      },
      example: "Ennen/jälkeen-katkelma ja sen viereen “miksi jälkimmäinen on ylläpidettävämpi” kolmella konkreettisella syyllä — sekä regressiotestien ajotulos molempien jälkeen.",
      notEnough: "Kosmeettinen uudelleennimeäminen ilman perustelua, tai README jossa lukee vain “npm install”."
    },

    16: {
      type: "julkaisu",
      feature: "Sisältö on jäädytetty, julkaisuehdokas v1.0-rc1 on julkaistu ja merkitty Git-tagilla — ja nimetty ulkopuolinen henkilö on testannut sen molemmilla rooleilla pelkän kirjallisen ohjeen avulla.",
      excerpt: "Mukana on ohje, jolla uusi työntekijä pääsee alkuun kysymättä minulta mitään.",
      connection: "Dokumentaatio on kirjoitettu; nyt se pannaan koetukselle oikeassa tilanteessa — ensin itse puhtaassa ympäristössä, sitten ulkopuolisen käsissä.",
      deliverable: "Jäädytyspäätös ja issue-luokittelu, tagilla merkitty RC julkisessa osoitteessa, oma asennuspöytäkirja, korjattu käyttöönotto-ohje, ulkopuolisen testauspöytäkirja ja estävien issueiden lista.",
      why: "Julkaisutestaus julkaisuehdokasta vasten jättää kokonaisen viikon puskuria: mitä tahansa testaaja löytää, korjaukselle on aikaa ennen v1.0:aa. Jäädytys estää viimeisten viikkojen valumisen uusiin ominaisuuksiin, ja oma puhdas asennus siivoaa ohjeen aukot ennen ulkopuolisen vuoroa.",
      done: "v1.0-rc1 on julkisessa osoitteessa ja merkitty tagilla; oma asennuspöytäkirja ja ulkopuolisen testauspöytäkirja (nimetty rooli, ajankohta, testaajan omat sanat erillään omasta tulkinnasta) ovat repossa; estävät virheet on kirjattu issueiksi — niitä ei korjata kiireellä tällä viikolla vaan seuraavalla.",
      record: "Kirjoita työviikon 16 merkintään: jäädytyspäätös ja mitä jätit v1.1-listalle, oman puhtaan asennuksen epäröintikohdat ja ohjeeseen tehdyt korjaukset sekä ulkopuolisen tärkeimmät havainnot sitaatteina.",
      skills: ["tuotantobuild", "ympäristökonfiguraatio", "versiotagit", "julkaisutestauksen järjestäminen"],
      steps: [
        ["Jäädytyspäätös ja issue-luokittelu.", "Päätä ja kirjaa: uusia ominaisuuksia ei enää lisätä. Luokittele jäljellä olevat issuet estäviksi tai v1.1-listalle."],
        ["Build, asetukset ja RC-julkaisu tagilla.", "Tee tuotantobuild ja tarkista ympäristöasetukset: portti, tietokantatiedoston polku ja pysyvyys, salaisuudet ja NODE_ENV. Julkaise ja merkitse Git-tagilla v1.0-rc1."],
        ["Oma puhdas asennus ohjeella.", "Asenna sovellus itse puhtaaseen ympäristöön pelkän käyttöönotto-ohjeen avulla. Pidä pöytäkirjaa jokaisesta kohdasta, jossa epäröit."],
        ["Ohjeen korjaukset.", "Korjaa ohje pöytäkirjan perusteella ennen kuin annat sen ulkopuoliselle. Tallenna korjausdiffi."],
        ["Ulkopuolisen julkaisutestaus.", "Nimetty ulkopuolinen henkilö testaa julkaistua julkaisuehdokasta pelkän kirjallisen ohjeen avulla, ilman suullista apua, molemmilla rooleilla."],
        ["Havainnot pöytäkirjaan ja estävät issueiksi.", "Kirjaa havainnot testaajan omin sanoin ja oma tulkinta erikseen. Luokittele estävät virheet issueiksi seuraavan viikon korjattaviksi."]
      ],
      help: {
        title: "Julkaisun tarkistuslista ja testauspöytäkirja",
        tree: "project-docs/\n├─ asennuspoytakirja-vk16.md   oma puhdas asennus, epäröintikohdat\n└─ julkaisutestaus-vk16.md     ulkopuolisen testaus, sitaatit\n\nTESTAAJAN TEHTÄVÄLISTA (annetaan kirjallisena)\n1 Pääse alkuun pelkällä ohjeella\n2 Kirjaudu sisään työntekijänä\n3 Kirjaa tunti\n4 Kirjaudu sisään projektipäällikkönä\n5 Katso raportti ja poraudu yhden henkilön kirjauksiin",
        actions: [
          "Tee jäädytyspäätös kirjallisena — muuten uusia ominaisuuksia livahtaa mukaan.",
          "Asenna itse puhtaaseen ympäristöön ennen kuin annat ohjeen kenellekään.",
          "Älä auta testaajaa suullisesti: jokainen kysymys on ohjeen puute, ei testaajan vika.",
          "Kirjaa estävät virheet issueiksi äläkä korjaa niitä kiireellä tällä viikolla."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] tuotantobuild syntyy puhtaassa hakemistossa\n[ ] ympäristömuuttujat dokumentoitu ja asetettu\n[ ] tietokantatiedoston polku ja pysyvyys tarkistettu\n[ ] lokit näkyvät alustan lokinäkymässä\n[ ] savutesti julkisessa osoitteessa: kirjaus ja raportti\n[ ] git tag v1.0-rc1 luotu ja viety etärepositoryyn\n\nPÖYTÄKIRJAMERKINTÄ\nVaihe N: mitä tein → mihin pysähdyin → mitä ohjeeseen lisättiin\nTestaajan sitaatti: \"…\"\nOma tulkinta: …\nLuokitus: estävä / v1.1",
        test: "Anna ohje ja osoite testaajalle ilman yhtään suullista lisäystä ja katso kelloa: kuinka kauan alkuun pääseminen kesti."
      },
      example: "Pöytäkirjamerkintä: “Vaihe 4: ohje ei kertonut mihin .env luodaan → lisättiin ohjeeseen polku ja esimerkkitiedosto”, ja sen vieressä testaajan oma sitaatti havainnostaan.",
      notEnough: "“Asensin itse uudelleen ja toimi” — oma testaus ei ole ulkopuolinen katselmointi, eikä pöytäkirjaton asennus todista mitään."
    },

    17: {
      type: "julkaisu",
      feature: "Julkaisutestauksen estävät virheet on korjattu täydellisenä virheenkorjausketjuna, v1.0 on julkaistu ja merkitty tagilla, ja sovellus on luovutettu asiakkaalle.",
      connection: "Edellisen viikon havainnot muuttuvat korjauksiksi, ja julkaisuehdokkaasta tulee v1.0 — loppuviikko on puskuria, jota ei täytetä uusilla ominaisuuksilla.",
      deliverable: "Kolmas virheenkorjausketju, v1.0-tag ja release, julkaisutiedote, savutestin tulos ja luovutusviesti asiakkaalle.",
      why: "v1.0 ilman korjattuja estäviä virheitä on vain julkaisuehdokas uudella nimellä — ja koko viikon puskuri tekee julkaisusta hallitun tapahtuman, ei paniikkia. Luovutusviesti on asiakaslähtöisen viestinnän viimeinen näyte.",
      done: "v1.0 on julkisessa osoitteessa ja merkitty tagilla; kolmas ketju on täydellisenä repossa (tai kirjaus siitä, mistä aidosta havainnosta ketju ajettiin); savutestin tulos, julkaisutiedote ja luovutusviesti ovat repossa; viikolle jäi puskuriaikaa eikä mitään uutta aloitettu.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät virheet korjattiin ja miten, v1.0:n tagi ja julkaisutiedotteen ydin sekä se, mitä jätit tietoisesti v1.1-listalle.",
      skills: ["julkaisu tuotantoon", "release-käytännöt", "regressiotestaus", "asiakasviestintä"],
      steps: [
        ["Estävien korjaus ketjuna.", "Korjaa työviikon 16 estävät havainnot täydellisenä ketjuna: havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Jos estäviä ei löytynyt, aja ketju aiemmasta aidosta julkaisuehdokasvaiheen havainnosta — keksittyjä ei kirjata."],
        ["Regressioajo.", "Aja koko regressiotestisarja ennen julkaisua ja kirjaa tulos."],
        ["v1.0-tag ja release.", "Merkitse versio Git-tagilla v1.0 ja tee release. Julkaise tuotantoon."],
        ["Savutesti tuotannossa.", "Aja testipolut julkaistulle v1.0:lle: kirjaus ja raportti molemmilla rooleilla. Kirjaa tulos."],
        ["Julkaisutiedote.", "Kirjoita julkaisutiedote: mitä sovellus tekee, mitkä ovat tunnetut rajoitteet ja mitä v1.1-listalla on."],
        ["Luovutusviesti asiakkaalle.", "Kirjoita luovutusviesti asiakaskielellä: osoite, tunnukset ja pikaohjeet. Ei teknistä jargonia."]
      ],
      help: {
        title: "Julkaisutiedotteen ja luovutusviestin pohjat",
        tree: "git tag -a v1.0 -m \"Ensimmäinen tuotantoversio\"\ngit push origin v1.0\n→ release julkaisualustalle\n→ savutesti julkisessa osoitteessa\n→ julkaisutiedote project-docs-kansioon\n→ luovutusviesti asiakkaalle",
        actions: [
          "Korjaa vain estävät virheet — v1.1-lista on olemassa juuri tätä varten.",
          "Aja regressiotestit ennen tagia, älä sen jälkeen.",
          "Kirjoita julkaisutiedote ennen luovutusviestiä: tiedote on tekninen, viesti on asiakkaalle.",
          "Käytä puskuriaika tarkistuksiin, älä uusiin ominaisuuksiin."
        ],
        code: "JULKAISUTIEDOTTEEN POHJA\n# TuntiTutka v1.0\nMitä sovellus tekee: 3–5 riviä\nKäyttäjäroolit: mitä kumpikin voi tehdä\nTunnetut rajoitteet: rehellisesti, ei kaunistellen\nv1.1-lista: mitä on tulossa seuraavaksi\n\nLUOVUTUSVIESTIN POHJA (asiakaskielellä)\n- Osoite, josta sovellus löytyy\n- Miten pääset alkuun: 3 askelta\n- Mistä löydät ohjeet molemmille rooleille\n- Mitä sovellus EI tee\n- Kehen otat yhteyttä, jos jokin ei toimi",
        test: "Lue luovutusviesti ääneen ja poista jokainen sana, jota asiakas ei käyttäisi itse — jos sisältö kärsii, kirjoita kohta uudelleen."
      },
      example: "Testaajan havainnosta johdettu ketju: sitaatti → syy → korjauscommit → uusintatestin tulos → regressiotesti, ja sen perässä v1.0-tag ja savutestin kirjaus.",
      notEnough: "v1.0-tag ilman työviikon 16 pöytäkirjan havaintojen käsittelyä, tai “korjasin palautteet” ilman ketjua."
    },

    18: {
      type: "naytto",
      feature: "Mitään uutta ei rakenneta: näyttöaineisto on täsmälinkitetty kaikkiin 32 vaatimukseen, 8–10 minuutin demo on harjoiteltu ja itsearviointi on kirjoitettu.",
      connection: "Sovellus on luovutettu; viimeinen viikko kokoaa 17 työviikon aineiston niin, että arvioija löytää jokaisen työnäytteen.",
      deliverable: "Täsmälinkitetty näyttömatriisi, harjoiteltu demorunko, kirjoitettu itsearviointi ja luovutettu näyttöpaketti.",
      why: "Näytössä arvioidaan se, mikä löytyy — osaaminen, jota arvioija ei löydä, ei ole arvioijalle olemassa. Viimeinen viikko on täsmälinkitystä, ei tuotantoa.",
      done: "Jokainen matriisin rivi osoittaa olemassa olevaan aineistoon ja linkki aukeaa; demo on ajettu kellon kanssa vähintään kerran toiselle henkilölle; itsearviointi sisältää konkreettisia tilanteita, ei yleislauseita.",
      record: "Kirjoita työviikon 18 merkintään: mitkä matriisin kohdat olivat heikoimmin todennettuja ja miten korjasit ne, demon kesto harjoituksessa sekä itsearvioinnin ydin.",
      skills: ["näyttöaineiston kokoaminen", "esittäminen", "itsearviointi"],
      resources: [["Avaa näyttömatriisi", "#todisteet", false]],
      steps: [
        ["Matriisin täsmälinkitys.", "Käy kaikki 32 vaatimusta läpi ja liitä jokaiseen viikko, työnäyte ja toimiva linkki: commit, issue, dokumentti tai kuvakaappaus."],
        ["Aukkotarkistus.", "Etsi kohdat, joissa linkki puuttuu tai osoittaa epämääräiseen aineistoon. Korjaa ne nyt, kun aikaa vielä on."],
        ["Demoharjoitus toiselle ihmiselle.", "Harjoittele 8–10 minuutin demo kellon kanssa: kirjaus → raportti ja porautuminen → yksi tekninen ratkaisu (lasketut yhteenvedot) → yksi korjattu bugi ketjuineen → Git-historia → AI-lokin tarkistettu käyttö."],
        ["Itsearviointi.", "Kirjoita itsearviointi: mikä omassa työskentelyssäsi onnistui, missä tarvitsit apua ja keneltä, mitä tekisit seuraavassa projektissa toisin. Käytä konkreettisia tilanteita."],
        ["Puskuri ja luovutus.", "Tarkista aineiston aukot vielä kerran ja luovuta paketti. Jätä puskuria korjauksille."]
      ],
      example: "Itsearviointi: “Työviikolla 8 GROUP BY -viikkorajaus meni väärin; pyysin ohjaajalta apua strftime-muotoihin ja opin testaamaan aikarajat ensin.”",
      notEnough: "“Opin paljon ja projekti sujui hyvin” — ilman tilanteita, nimiä ja sitä, mitä tekisit toisin."
    }
  },

  /* ---- opettajan aineisto: paperinen työpaketti ja näyttösuunnitelma ---- */
  opettaja: {
    jakso: "18 työviikkoa · päivätön aikataulu",
    deadline: "18. työviikon perjantai",
    kansiKuvaus: "Työaikaseuranta mainostoimistolle: Svelte, Express, SQLite ja julkaisu tuotantoon",
    kansiHuomiot: [
      "Aikataulu on päivätön: työviikko 1 on se viikko, jolla opiskelija aloittaa, ja projekti kestää 18 työviikkoa.",
      "Julkiseen repositoryyn ei laiteta henkilötietoja, koulun tunnisteita eikä muiden nimiä. Tekijänimestä sovitaan ohjaajan kanssa."
    ],
    viimeisetPaivat: [
      ["Ma", "Sisältöjäädytys — viimeinen hyväksytty versio, matriisin täsmälinkitys alkaa"],
      ["Ti", "Aineisto: päiväkirja, AI-loki, testiraportti ja linkkien tarkistus"],
      ["Ke", "Demoharjoitus kellon kanssa (8–10 min) ja itsearvioinnin kirjoittaminen"],
      ["To", "Puskuri: aukkojen korjaus ja tarkistus toisen henkilön kanssa"],
      ["Pe", "Luovutus: näyttömatriisi, projektipäiväkirja, AI-loki ja julkaistu v1.0"]
    ],

    pohjat: {
      aloitusVko: 1,
      kysymyksia: 6,
      vertailuVko: 2,
      katselmointiVkot: "10 ja 16",
      testiVko: 14,
      testeja: 13,
      ketjuja: 3,
      lisenssiVko: 15
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma · TuntiTutka",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena. Peruste: Tieto- ja viestintätekniikan perustutkinto, diaarinumero OPH-6216-2025 (perusteId 9816282).",
      kohdeOtsikko: "1 · Näytön kohde ja ympäristö",
      kohde: [
        "Näyttö suoritetaan ohjattuna oppilaitosprojektina: opiskelija toteuttaa kahdeksan hengen mainostoimistolle työaikaseurantasovelluksen, jossa työntekijät kirjaavat tunnit projektille ja tehtävälajille ja projektipäällikkö saa ajantasaiset yhteenvedot viikoittain, henkilöittäin ja tehtävälajeittain. Toimeksiantaja on kuvitteellinen; ohjaaja toimii asiakkaan sijaisena rajausta ja priorisointia koskevissa päätöksissä.",
        "Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 11 vaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 vaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 vaatimusta) — yhteensä 32 osaamisvaatimusta.",
        "Tekninen ympäristö: Svelte + Vite (frontend), Node.js + Express (backend) ja SQLite (tietovarasto). Ulkoisia komponentteja otetaan käyttöön kaksi: reitityskirjasto (työviikko 6) ja kaaviokirjasto (työviikko 9). Valmista UI-komponenttikirjastoa ei käytetä, koska rakenne, saavutettavuusratkaisut ja CSS ovat juuri sitä osaamista, jota näyttö arvioi.",
        "Aikataulu on päivätön: 18 työviikkoa opiskelijan omasta aloitusviikosta lukien. Sivustolla ei ole kalenteripäivämääriä, joten sama aineisto käy eri ryhmille eri ajankohtina."
      ],
      p0: "Pakollinen perusversio (P0): kirjautuminen ja kaksi roolia · tuntikirjaus validointeineen · omat kirjaukset ja oma viikkosumma · projektien, projektityyppien ja tehtävälajien hallinta · projektin jäsenyydet · lasketut yhteenvedot kolmella ryhmittelyllä ja porautuminen yksittäisiin kirjauksiin. Yhteenvetosummia ei tallenneta.",
      roolit: [
        ["Opiskelija", "Toteuttaa sovelluksen, tekee ja perustelee omat tekniset päätökset, kirjoittaa projektipäiväkirjaa ja AI-lokia sekä kokoaa näyttöaineiston. Vastaa siitä, että jokainen työnäyte löytyy repositorysta."],
        ["Ohjaaja / opettaja", "Toimii asiakkaan sijaisena rajaus- ja priorisointipäätöksissä, hyväksyy suunnitelman ennen työviikkoa 3, tarkistaa laadun tarkistuspisteissä ja päättää ohjaajalle kuuluvat asiat (lisenssi, repositoryn julkisuus, katselmoijien nimeäminen, alustalinja, perusteversio, arvioinnin järjestelyt)."],
        ["Ulkopuolinen katselmoija (työviikko 10)", "Kokeilee väliversiota asiakkaan roolissa molemmilla käyttäjärooleilla. Ei ole opiskelijan oma ohjaava opettaja: rooliin sopii työelämäedustaja, toinen opettaja tai toinen opiskelija. Nimeäminen on ohjaajan päätös."],
        ["Julkaisutestaaja (työviikko 16)", "Testaa julkaistun julkaisuehdokkaan pelkän kirjallisen käyttöönotto-ohjeen avulla ilman suullista apua, molemmilla rooleilla. Eri henkilö kuin työviikolla 10, jos mahdollista."],
        ["Arvioijat (työviikko 18)", "Ottavat vastaan demon ja näyttöaineiston. Arvioinnin ajankohta ja arvioijat sovitaan ohjaajan kanssa."]
      ],
      tarkistuspisteet: [
        [1, "Ympäristö ja repository", "Käynnistyvä Svelte-runko, README käynnistyskomennoilla, julkisen repon tarkistuslista kuitattuna ja vähintään kuusi kysymystä ohjaajalle."],
        [2, "Suunnitelman hyväksyntä", "P0/P1/P2-priorisointi, tietomalli ja periaate 'summia ei tallenneta', tietovarastovertailu ja issue-taulu arvioineen. Hyväksyntä kirjataan ennen työviikkoa 3."],
        [3, "Ensimmäinen julkaisu", "Sovellusrunko julkisessa osoitteessa, /api/health vastaa toisen henkilön selaimella, init-skripti luo skeeman, k2-selvitys ja alustaperustelu repossa."],
        [5, "Tuntikirjaus", "Kirjaus tallentuu ja näkyy listassa, validointi toimii myös suoraan API:a kutsuttaessa, kirjausaika alle 30 sekuntia."],
        [8, "Yhteenvetojen laskenta", "Kolme raporttireittiä täsmää käsin laskettuihin odotusarvoihin kolmella aineistolla; skeemassa ei ole summataulua; laskentamoduulilla vähintään kolme yksikkötestiä."],
        [10, "Asiakaskatselmointi", "Katselmointimuistio testaajan sitaatteineen, oma tulkinta erikseen, priorisoidut muutokset issueina. Katselmoija nimetty viimeistään työviikolla 8."],
        [13, "Tietoturva", "Ajettu reittitaulukko (reitti × rooli × odotettu × saatu), korjaukset uusintatestattuina, salaisuudet .env:ssä ja poissa Git-historiasta, XSS-testi tehtynä."],
        [14, "Testaus", "Vähintään 12 testitapausta kolmessa luokassa odotusarvoineen ennen ajoa, vähintään kaksi täydellistä virheenkorjausketjua, regressiotestit ajettavissa komennolla."],
        [16, "Julkaisuehdokas ja julkaisutestaus", "v1.0-rc1 merkittynä tagilla ja julkisessa osoitteessa, oma asennuspöytäkirja, ulkopuolisen testauspöytäkirja ja estävät issueina."],
        [17, "v1.0", "Estävät korjattu täydellisenä ketjuna, v1.0 merkittynä tagilla ja julkaistuna, savutesti ajettuna, julkaisutiedote ja luovutusviesti repossa."],
        [18, "Näyttöaineisto", "Näyttömatriisi täsmälinkitettynä 32 vaatimukseen, demo harjoiteltuna kellon kanssa, itsearviointi konkreettisin tilantein."]
      ],
      tyonaytteet: {
        p1: ["1", "VS Code, Vite dev -palvelin ja selaimen kehittäjätyökalut käytössä: versiotaulukko, kuvakaappaus ja npm-skriptit README:ssä"],
        p2: ["14 (ketjut myös 8–9, 16–17)", "Kolme täydellistä virheenkorjausketjua: havainto → toisto → syy → korjauscommit → uusintatesti → regressiotesti; syyn selvitys kehittäjätyökaluilla ja lokeilla kuvattuna"],
        p3: ["14 (suunnittelu 2→, ajot 5, 9, 12)", "Testiraportti: vähintään 12 tapausta odotettuine tuloksineen ennen ajoa; lomakkeet, roolit, tallennus, virhetilanteet ja responsiivisuus testattu ja uusintatestattu"],
        p4: ["8", "Laskentalogiikka omana moduulina: funktiot, ehdot ja tietorakenteet raporttien ryhmittelyssä; moduulijako client / server / routes / laskenta"],
        p5: ["15", "Kolme dokumentoitua refaktorointia ennen/jälkeen-diffeineen ja perusteluineen; nimeämiskäytäntö ja vastuiden jako kuvattuna"],
        p6: ["5 (täydentyy 12)", "Kirjausnäkymä toteutettu työviikon 2 rautalangan mukaan itse ilman UI-kirjastoa; rautalanka ja toteutus rinnakkain, mobiili ja palautteet käyttäjälle"],
        p7: ["6 (täydentyy 7)", "Hallintanäkymien toiminnot toteutettu käyttäjätarinoiden ja hyväksymiskriteerien perusteella; issue → commit -ketju näkyvissä"],
        p8: ["2 (jatkuva)", "Issue-taulu ja viikoittainen sopiminen ohjaajan kanssa tiimiroolissa; tehtävien tila näkyvänä koko projektin ajan"],
        p9: ["4", "Istuntotapavertailu (evästesessio vs. token): molempien hyödyt ja riskit tässä sovelluksessa, kirjattu keskustelu ja yhteinen päätös ohjaajan kanssa"],
        p10: ["10 (täydentyy 11)", "Katselmointi: täyttääkö toteutus käyttäjätarinat, mitä muutetaan ennen seuraavaa versiota — muistio ja priorisoitu muutoslista"],
        p11: ["18", "Itsearviointi konkreettisin tilantein: mikä onnistui, missä tarvitsi apua ja keneltä, mitä tekisi toisin"],
        s1: ["2 (täydentyy 10)", "Toimeksianto purettu käyttäjätarinoiksi ja käyttäjäryhmiksi; kysymyslista ja kirjatut vastaukset; rajaus sovittu"],
        s2: ["10 (täydentyy 17)", "Katselmointiesittely ja luovutusviesti ilman teknistä jargonia: mitä ratkaisu tarkoittaa käyttäjälle, vaihtoehdot ja rajoitteet"],
        s3: ["10 ja 16", "Kaksi katselmointia: väliversion asiakaskatselmointi ja julkaisuehdokkaan julkaisutestaus — palaute ja sovitut muutokset kirjattuina"],
        s4: ["2", "P0/P1/P2-priorisointi ohjaajan kanssa; P0-ydin (kirjaus, roolit, raportit) toteutettu ensin"],
        s5: ["2 (jatkuva)", "Käyttäjätarinat pilkottu issueiksi (½–1 pv / issue) hyväksymiskriteereineen; issue-taulu koko projektin ajan"],
        s6: ["7 (alku 2)", "Työmääräarviot issueissa ja arvio vs. toteuma -vertailu opiskelijan omista TuntiTutka-kirjauksista; suunnitelman päivitys, kun arvio petti"],
        s7: ["8 (täydentyy 4, 7, 13)", "Yhteenvetojen laskenta lennossa (viikoittain, henkilöittäin, tehtävälajeittain, ei tallennettuja summia), käyttöoikeudet, validointi ja omistajuussäännöt"],
        s8: ["2", "Vertailu SQLite / JSON-tiedosto / PostgreSQL datan rakenteen, käyttötilanteen ja laajuuden perusteella; perusteltu valinta suunnitelmassa"],
        s9: ["5 (täydentyy 6–7)", "Kirjausten ja hallintadatan luku, lisäys, muokkaus ja poisto SQLitestä hallitusti; skeema ja init-skripti"],
        s10: ["9 (pohjustus 8)", "Raportti-API:n kutsu fetchillä, JSON-muunnos kaavion muotoon testattuna funktiona, virhetilanteet (tyhjä data, verkkovirhe, lataus) käsiteltyinä"],
        s11: ["13", "Tietoturva-arvio (syötteet, käyttöoikeudet, salasanat, istunnot, tietojen näkyvyys), ajettu reittitaulukko ja XSS-testi; salaisuudet .env:ssä"],
        s12: ["1→ (koonti 11)", "Git koko projektin ajan: tarkoituksenmukaiset commitit, etärepository ja haarakäytäntö; historia työnäytteenä"],
        s13: ["11", "Palautemuutos ominaisuushaarassa, pull request, itsekatselmointi, konfliktin ratkaisu ja merge pääversioon"],
        s14: ["17 (ensijulkaisu 3, julkaisutestaus 16)", "Tuotantobuild, ympäristöasetukset ja julkaisu valittuun pilvialustaan; v1.0 julkisessa osoitteessa asiakkaan käytettävissä"],
        k1: ["1 (täydentyy 3)", "Svelte + Vite -projektin luonti ja konfigurointi: vite.config, dev-proxy backendiin sekä kehitys- ja tuotantoasetukset"],
        k2: ["3", "Kirjallinen selvitys: mitä Svelte ja Vite ratkaisevat (komponentit, reaktiivisuus, build), mitä eivät (reititys, kaaviot) ja mistä puuttuva otetaan"],
        k3: ["5 (täydentyy 9)", "Komponentit, propsit, tapahtumat, lomakesidonnat, ehdollinen renderöinti ja store istuntotilalle — osoitettuna kirjaus- ja raporttinäkymissä"],
        k4: ["6 ja 9", "Kaksi perusteltua ulkoista komponenttia: reitityskirjasto (vertailu ja konfigurointi) ja kaaviokirjasto (koko, lisenssi, käyttötarkoitus, riippuvuus)"],
        k5: ["2 ja 14", "Komponenttirakenne ja vastuut suunnitelmassa; sovellus toteutettu Sveltellä käyttäjätarinoiden mukaan; omat ja kirjastoon liittyvät ratkaisut testattuina"],
        k6: ["16 (täydentyy 17)", "Viten tuotantobuild ja julkaisu sovittuun pilviympäristöön; julkaisuehdokkaan ja v1.0:n julkaisut tageineen"],
        k7: ["15", "README: käyttöönotto, käynnistys, riippuvuudet rooleineen, ympäristöasetukset; asiakkaan pikaohjeet molemmille rooleille"]
      },
      dokumentaatio: {
        kayttajalle: "README ja käyttöönotto-ohje (asennus tyhjään ympäristöön vaihe vaiheelta, ympäristömuuttujat, tietokannan alustus, testien ajo) sekä pikaohjeet molemmille rooleille: työntekijän kirjausohje ja projektipäällikön ohje projekteista, tehtävälajeista ja raporteista. Kirjoitetaan käyttäjälle, ei arvioijalle.",
        arviointiin: "Projektipäiväkirja, AI-loki, tekninen suunnitelma, katselmointimuistio (työviikko 10), tietoturva-arvio ja reittitaulukko (13), testiraportti ja virheenkorjausketjut (14), asennus- ja julkaisutestauspöytäkirjat (16) sekä täsmälinkitetty näyttömatriisi (18).",
        vaatimus: "Käyttöönotto-ohjeen kovavaatimus: ulkopuolinen henkilö saa sovelluksen käyttöön pelkän kirjallisen ohjeen avulla ilman suullista apua. Tämä testataan työviikolla 16 kahdessa vaiheessa: ensin opiskelija itse puhtaassa ympäristössä, sitten ulkopuolinen julkaistulla julkaisuehdokkaalla."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline: se saa selittää virheilmoituksia, ehdottaa testitapauksia, tarkistaa koodia ja auttaa dokumentaation kielessä. Jokainen merkittävä käyttö kirjataan AI-lokiin, jossa on kysymys, mitä käytettiin tai hylättiin, miten tarkistettiin ja aineistoviite.",
        "Ydin tehdään itse: yhteenvetojen laskentalogiikka, sovelluksen rakenne ja komponenttijako, saavutettavuusratkaisut ja CSS. Näitä näyttö nimenomaan arvioi, joten valmiiksi generoitu ratkaisu ilman omaa ymmärrystä ei ole työnäyte.",
        "Osa viikoista on rakennettu niin, ettei niitä voi suorittaa kielimallilla: työviikot 10 ja 16 vaativat nimetyn ulkopuolisen ihmisen omine sanoineen, työviikot 3 ja 16–17 oman julkisen osoitteen ja alustan lokit, työviikot 7–8 opiskelijan oman kirjausdatan ja käsin lasketut odotusarvot ja työviikko 12 mittausraportit omalta laitteelta."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "v1.0 julkisessa osoitteessa, Git-tag v1.0 ja release; julkaisutiedote ja luovutusviesti repositoryssä."],
        ["Repository", "Julkinen repository, jossa client/, server/ ja project-docs/ sekä koko commit-historia haaroineen ja pull requesteineen."],
        ["Suunnitelma ja päiväkirja", "project-docs/suunnitelma.md, projektipaivakirja.md ja ai-loki.md — päiväkirjasta on commit joka viikolta."],
        ["Laatuaineisto", "Testiraportti (vähintään 12 tapausta), kolme virheenkorjausketjua, tietoturva-arvio ja reittitaulukko, saavutettavuusraportit ennen ja jälkeen."],
        ["Katselmoinnit", "Katselmointimuistio (työviikko 10) ja julkaisutestauksen pöytäkirja (16) sekä oma asennuspöytäkirja."],
        ["Näyttöaineisto", "Täsmälinkitetty näyttömatriisi 32 vaatimukselle, demorunko ja itsearviointi."]
      ],
      huomiot: [
        ["Katselmoijat nimetään ajoissa", "Työviikon 10 katselmoija ja työviikon 16 julkaisutestaaja nimetään viimeistään työviikolla 8, jotta katselmointi ei kaadu järjestelyihin. Asiakkaan roolia ei esitä opiskelijan oma ohjaava opettaja."],
        ["Summia ei tallenneta", "Periaate 'yhteenvedot lasketaan, ei tallenneta' päätetään tietomallissa (työviikko 2), todennetaan done-ehdossa (8) ja testataan (T03, T06, T07). Jos opiskelija ehdottaa summataulua suorituskyvyn takia, pyydä perustelu mittauksella — tässä datamäärässä sitä ei ole."],
        ["Päivätön aikataulu", "Sivustolla ei ole kalenteripäivämääriä: viikot ovat työviikkoja 1–18 opiskelijan aloituksesta. Ryhmäkohtaiset päivämäärät sovitaan erikseen, esimerkiksi opintojakson omassa työtilassa."],
        ["Kuormitusrajaus työviikolla 6", "Jos hallintaviikko uhkaa paisua, projektityypit yksinkertaistetaan projektipäällikön muokattavaksi listaksi tehtävälajien kanssa samaan näkymään. Viikon pakollinen ydin on projektit, tehtävälajit, jäsenyys ja roolirajaus."],
        ["Aidot bugit, ei keksittyjä", "Virheenkorjausketjut kirjataan vain aidoista havainnoista. Jos aitoja ei löydy työviikkoon 14 mennessä, ohjaaja merkitsee vikatehtäviä, joista ketjut ajetaan."],
        ["Avoimet asiat pysyvät avoimina", "Lisenssi, repositoryn julkisuus ja tekijänimi, alaikäisen huoltajan suostumus, oppilaitoksen alustalinja, perusteversion siirtymäsääntö ja arvioinnin järjestelyt ovat ohjaajan päätöksiä. Tyhjä kenttä suunnitelmassa on oikea tulos siihen asti, kunnes asia on sovittu."]
      ]
    }
  }
};
