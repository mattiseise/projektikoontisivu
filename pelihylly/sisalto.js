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
  yhtenaisetViikot: true,
  aloitusNappi: "Aloita PeliHyllyn teko",
  apuOtsikko: "Tarvitsen toteutusapua",

  /* ---- projektin tavoitekuva (moottori v2.6) ----
   * Näkyy Näin käytät sivua -näkymän alussa, ja sivu avautuu siihen ensimmäisellä
   * kerralla. Kuva on luonnos: project-docs/lopputulos/proto.html kuvattuna 2x-tarkkuudella
   * (ks. project-docs/lopputulos/README.md). alue = [x, y, leveys, korkeus] prosentteina.
   */
  lopputulos: {
    kuvaus: "PeliHylly on Pelikellari ry:n jäsenten verkkopalvelu. Jokainen kirjaa palveluun pelinsä laitteineen, tähtiarvioineen ja kommentteineen ja vaihtaa pelin tilaa yhdellä napilla. Julkinen profiili näyttää kenelle tahansa, mitä jäsen pelaa nyt ja miten hänen hyllynsä on muuttunut.",
    /* Aloituksen johdanto kertoo saman, joten kuvauslause näkyy vain työpaketissa. */
    naytaKuvaus: false,
    kuva: "assets/lopputulos.jpg",
    leveys: 1120,
    korkeus: 700,
    alt: "Kuvassa on PeliHylly-palvelun valmis profiilisivu tietokoneen selaimessa: Aino Virtasen pelit tiloittain, parhaillaan pelattavat pelit, laitteittaiset tilastot, tilahistoria ja pelilista, jossa jokaisen pelin tilan voi vaihtaa yhdellä napilla. Oikealla puhelimen näytöllä on sama palvelu kapeana, ja siinä pelin tila on juuri vaihdettu Läpi-tilaan ja muutos tallentunut tilahistoriaan.",
    kohdat: [
      { n: 1, teksti: "Julkinen profiili näyttää, mitä jäsen pelaa nyt ja montako peliä on missäkin tilassa laitteittain.", alue: [4.2, 28.1, 45.2, 28.6] },
      { n: 2, teksti: "Tilahistoria näyttää aikajärjestyksessä jokaisen tilanmuutoksen, esimerkiksi milloin peli tuli hyllyyn tai meni läpi.", alue: [50.8, 28.1, 21.4, 29.1] },
      { n: 3, teksti: "Pelilistassa näkyvät laite, tähtiarvio ja oma kommentti, ja tila vaihtuu yhdellä napilla.", alue: [4.2, 59.3, 68.0, 35.1] },
      { n: 4, teksti: "Puhelimellakin tila vaihtuu yhdellä napautuksella, ja muutos tallentuu tilahistoriaan.", alue: [73.5, 20.7, 22.1, 72.9] }
    ]
  },

  paletti: {
    aksentti: "#6d28d9",
    aksenttiTumma: "#5b21b6",
    taulukkoSavy: "#ede9fe",
    riviSavy: "#f6f3fd"
  },

  /* ---- vaiheet (moottori v2.7: numeroidut vaiheet, kuvaus näkyy aloituksessa ja vaihekuvassa) ----
   * vari = styles.css:n --phase-a … --phase-e (vaihe 1 = a). */
  vaiheet: [
    { tunnus: "1", lyhyt: "Valmistelu", otsikko: "Suunnitelma ja julkaistu runko", kuvaus: "Puret toimeksiannon kysymyksiksi, teet ohjaajan kuittaaman suunnitelman ja viet tyhjän palvelun julkiseen osoitteeseen. Julkaisu tehdään heti, koska sen ongelmat on halvinta korjata, kun rikottavaa on vähän.", kuvassa: ["Toimeksianto → suunnitelma → julkinen osoite", "Palvelun pohja on verkossa ennen ensimmäistä peliä."], viikot: [1, 2, 3], vari: "#8d5a2b" },
    { tunnus: "2", lyhyt: "Oma hylly", otsikko: "Oma hylly: pelit ja tilanvaihto", kuvaus: "Rakennat pelilistan tietokannasta, oman lisäyslomakkeen validointeineen ja yhden napin tilanvaihdon, joka kirjaa tilahistorian. Asiakkaan tärkein toive toimii ennen kuin palveluun tulee muita käyttäjiä.", kuvassa: ["Pelilista → lisäyslomake → tila yhdellä napilla", "Oma peli hyllyyn, tila vaihtuu ja historia kirjautuu."], viikot: [4, 5, 6], vari: "#6b7f3f" },
    { tunnus: "3", lyhyt: "Jäsenet", otsikko: "Jäsenet, profiilit ja katselmointi", kuvaus: "Lisäät rekisteröitymisen, kirjautumisen ja omistajuustarkistuksen, julkisen profiilin sekä haun. Asiakkaan edustaja kokeilee koko polkua työviikolla 10, ja hänen palautteensa ohjaa seuraavaa vaihetta.", kuvassa: ["Kirjautuminen → profiili → haku → katselmointi", "Asiakkaan edustaja kokeilee palvelua työviikolla 10."], viikot: [7, 8, 9, 10], vari: "#5b6b8c" },
    { tunnus: "4", lyhyt: "Viimeistely", otsikko: "Palaute, laatu ja käyttöönotto-ohje", kuvaus: "Toteutat palautteen tärkeimmän muutoksen ja teet palvelusta puhelimella ja näppäimistöllä toimivan. Testaat kaiken tuotantoa vasten, siistit koodin, arvioit tietoturvan ja kirjoitat käyttöönotto-ohjeen.", kuvassa: ["Palautemuutos → saavutettavuus → testaus → ohje", "Palvelu kestää oikeat käyttäjät ilman tekijää."], viikot: [11, 12, 13, 14, 15], vari: "#8d4a5b" },
    { tunnus: "5", lyhyt: "Julkaisu", otsikko: "Julkaisu ja näyttö", kuvaus: "Ulkopuolinen testaaja ottaa julkaisuehdokkaan käyttöön pelkän kirjallisen ohjeen avulla. Korjaat estävät virheet, julkaiset v1.0:n ja esittelet työsi näytössä.", kuvassa: ["Julkaisuehdokas → julkaisutesti → v1.0 → näyttö", "Yhdistys saa palvelun käyttöön kirjallisella ohjeella."], viikot: [16, 17, 18], vari: "#0f766e" }
  ],
  poikkeamat: {
    vaiheita: "viisi vaihetta: valmistelu (tyhjä palvelu verkossa) ja oma hylly (pelit, lisäys ja tilanvaihto) ovat eri tuloksia; yhdessä ne olisivat kuuden viikon vaihe ilman näkyvää välitulosta, ja jako neljään irrottaisi tilanvaihdon listasta ja lisäyksestä, joiden varaan se rakentuu"
  },
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 844,
    alt: "PeliHyllyn viisi vaihetta: 1 suunnitelma ja julkaistu runko työviikoilla 1–3, 2 oma hylly eli pelilista, lisäys ja tilanvaihto työviikoilla 4–6, 3 jäsenet, profiilit ja asiakaskatselmointi työviikoilla 7–10, 4 palaute, laatu ja käyttöönotto-ohje työviikoilla 11–15 sekä 5 julkaisu ja näyttö työviikoilla 16–18."
  },
  vaiheetJohdanto: "Ensin varmistat, että palvelu pääsee verkkoon ja että suunnitelma on sovittu. Sitten rakennat oman hyllyn toiminnot, koska kirjautuminen ja profiili tarvitsevat pelit ja tilahistorian. Asiakkaan palaute ohjaa viimeistelyä, ja lopuksi ulkopuolinen testaaja varmistaa, että yhdistys saa palvelun käyttöön ilman sinua.",
  vaiheetHuomio: "Työviikot ovat järjestysnumeroita omasta aloituksestasi, eivät kalenteriviikkoja. Tehtävistä sovitaan ohjaajan kanssa joka viikko työviikosta 2 alkaen. Katselmoinnit ovat työviikoilla 10 ja 16, ja ohjaaja nimeää katselmoijat viimeistään työviikolla 3.",

  /* ---- opiskelijalle näkyvä työn tasojen nimeäminen (moottori v2.7) ----
   * Työvaihe = tämän sivun viikko-ohjeen kohta. GitHub-issue = yksi rajattu muutos palveluun.
   * Työtapa = kuuden askeleen kierros, jolla yksi issue tehdään (Työtapa-sivu). */
  tekstit: {
    tasksLead: "Tee työvaiheet järjestyksessä. Ensimmäinen keskeneräinen vaihe on auki. Kun työvaihe muuttaa palvelua, tee muutos GitHub-issueina Työtapa-sivun kuudella askeleella."
  },

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

  /* ---- sanasto ----
     Vain tämän projektin oikeasti käyttämät termit. Jokainen termi selitetään
     myös siinä kohdassa, jossa se tulee ensimmäisen kerran vastaan; tämä lista
     on kertaus- ja hakuväline. `viikko` = työviikko, jolla termi tulee ensi
     kertaa vastaan; ilman viikkoa = termi opetetaan aloitussivuilla. */
  termisto: [
    { termi: "P0", nimi: "Pakollinen ydin", selite: "Toiminnot, joiden on valmistuttava, tai palvelua ei ole: rekisteröityminen ja kirjautuminen, pelien lisäys ja muokkaus, tilanvaihto ja tilahistoria, julkinen profiili sekä julkaisu tuotantoon. P0 tehdään ensin, ennen P1:tä ja P2:ta." },
    { termi: "P1", nimi: "Tärkeä jatko", selite: "Toiminnot, jotka tehdään sitten kun P0 toimii: haku ja suodatus, tähtiarvostelut ja kommentit sekä profiilikuva. Kokoelmat ovat P1-laajennus, josta päätetään erikseen työviikolla 11." },
    { termi: "P2", nimi: "Valinnainen lisä", selite: "Toiminnot, jotka saavat jäädä kokonaan pois ilman että työ on kesken. Tässä projektissa P2 tarkoittaa viestejä toisten profiileihin: asiakas sanoi itse, että ne voivat jäädä." },
    { termi: "GitHub-issue", nimi: "Yksi toteutustehtävä GitHubissa", selite: "Yksi rajattu muutos palveluun GitHubin tehtävälistalla, esimerkiksi ”#23 Tilan vaihto kirjaa historiarivin”. Issuessa ovat tavoite, hyväksymiskriteerit, työmääräarvio ja testin tulos. Issue on yleensä puolen tai yhden päivän työ, ja yksi sivun työvaihe voi sisältää useita issueita. Issue tehdään Työtapa-sivun kuudella askeleella." },
    { termi: "commit", nimi: "Tallennettu muutos", selite: "Yksi nimetty muutos versionhallinnassa. Commitin viesti kertoo, mitä muutit; commit-tunniste on linkki, jolla työnäyte löytyy myöhemmin näyttömatriisista." },
    { termi: "repository", nimi: "Projektin koodivarasto", selite: "Versionhallinnan säilytyspaikka, jossa ovat koodi, dokumentit ja koko muutoshistoria. Työnäyte on aina repositoryssa, ei tällä sivulla." },
    { termi: "haara", nimi: "Branch", selite: "Erillinen kehityslinja, jossa muutoksen voi tehdä rauhassa ilman että pääversio rikkoutuu. Työviikosta 6 alkaen isommat muutokset tehdään omassa haarassa." },
    { termi: "PR", nimi: "Pull request", selite: "Pyyntö yhdistää oman haaran muutokset pääversioon. Pull requestin kuvaus kertoo mitä muutit, miksi ja miten testasit, ja muutos käydään läpi ennen yhdistämistä." },
    { termi: "API", nimi: "Rajapinta", selite: "Osoitteisto, jonka kautta selain hakee ja tallentaa tietoa palvelimelta. Yksi osoite on API-reitti: esimerkiksi GET /api/games palauttaa pelilistan." },
    { termi: "JSON", nimi: "Tiedon siirtomuoto", selite: "Tekstimuoto, jossa tieto liikkuu selaimen ja palvelimen välillä. Samaa muotoa voi käyttää myös tiedostoon tallentamiseen, ja siksi JSON-tiedosto on yksi tietovarastovaihtoehto.", viikko: 2 },
    { termi: "tuotantobuild", nimi: "Julkaisua varten koottu versio", selite: "Kehitystiedostoista koottu paketti, joka viedään julkiseen osoitteeseen. Se ei ole sama kuin kehityspalvelimen versio, joten se testataan aina erikseen.", viikko: 3 },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "T tarkoittaa testitapausta ja numero yksilöi sen: T01 on ensimmäinen testitapaus, T02 toinen. Odotettu tulos kirjataan aina ennen ajoa, ja sama tunnus seuraa testiä testimatriisiin asti.", viikko: 4 },
    { termi: "SQL", nimi: "Tietokannan kyselykieli", selite: "Kieli, jolla tietokannalta kysytään tietoa ja jolla sinne kirjoitetaan. SQLite ymmärtää SQL:ää: SELECT hakee rivejä ja GROUP BY laskee koosteita.", viikko: 8 },
    { termi: "XSS", nimi: "Cross-site scripting", selite: "Hyökkäys, jossa käyttäjän syöttämä teksti – esimerkiksi pelin kommentti – päätyy sivulle koodina ja ajautuu muiden selaimessa. Torjunta on syötteen käsittely tekstinä, ei koodina.", viikko: 14 },
    { termi: "CRUD", nimi: "Luonti, luku, muokkaus ja poisto", selite: "Neljä perustoimintoa, joita tietoon kohdistetaan: uuden lisääminen, lukeminen, muokkaaminen ja poistaminen. PeliHyllyssä ne täydentyvät työviikkojen 4–9 aikana." },
    { termi: "REST", nimi: "Yleinen rajapinnan tyyli", selite: "Tapa rakentaa API niin, että jokaisella tietokohteella on oma osoite ja pyynnön menetelmä kertoo mitä tehdään: GET hakee, POST lisää, PATCH muokkaa ja DELETE poistaa." },
    { termi: "RC", nimi: "Release candidate, julkaisuehdokas", selite: "Lähes valmis versio, joka julkaistaan testattavaksi ennen lopullista julkaisua. RC1 on ensimmäinen julkaisuehdokas; sen jälkeen korjataan vain estävät virheet.", viikko: 15 },
    { termi: "tag", nimi: "Versiomerkintä", selite: "Nimi, joka kiinnitetään tiettyyn commitiin, jotta juuri se versio löytyy myöhemmin: v1.0-rc1 on julkaisuehdokas ja v1.0 valmis julkaisu.", viikko: 16 }
  ],

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
      evidence: "Esim. commit-tunniste, GitHub-issue #12, pull request -linkki, testitapaus T06 tai muistion nimi.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla työskentelykerralla?"
    }
  },

  /* ---- paperiaineiston kieliyliajot (päivätön tila) ---- */
  lataukset: {
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title,
    aloitusHuomio: "Viikon työvaihe on tämän sivuston työohje. Kun työvaihe muuttaa palvelua, kirjaa muutos GitHub-issueksi hyväksymiskriteereineen ja tee se Työtapa-sivun kuudella askeleella. Testin tulos kirjataan testimatriisiin heti, viikon yhteenveto projektipäiväkirjaan viikon lopussa."
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
      "Käyttäjätarinat hyväksymiskriteereineen ja prioriteetteineen: `project-docs/kayttajatarinat.md`.",
      "",
      "**P0 – pakollinen ydin:** rekisteröityminen ja kirjautuminen, pelien lisäys ja",
      "muokkaus, tilanvaihto + automaattinen tilahistoria, julkinen profiili tilastoineen,",
      "julkaisu tuotantoon.",
      "",
      "**P1 (aikataulutettu):** haku ja suodatus (työviikko 9), tähtiarvostelut ja",
      "kommentit (lomakkeen kenttinä työviikolla 5), profiilikuva.",
      "",
      "**P1-laajennus (päätöspiste työviikolla 11):** kokoelmat (monta-moneen)",
      "toteutetaan omana haarana vaiheessa 4 (työviikot 11–15) vain, jos P0 ja testaus ovat aikataulussa;",
      "muuten siirtyy v1.1-listalle. Ei epäonnistuminen vaan rajauspäätös.",
      "",
      "**P2 (saa jäädä pois):** viestit toisten profiileihin ja niihin vastaaminen.",
      "",
      "## 4. Reunaehdot",
      "",
      "- Vierailija näkee profiilit ja listat ilman tunnuksia.",
      "- Muokkaus vain omille peleille.",
      "- Salasanat tallennetaan hashattuina eli yksisuuntaisesti salattuina, ei selväkielisinä.",
      "- Palvelu julkisessa osoitteessa.",
      "- Suomenkielinen käyttöliittymä.",
      "",
      "## 5. Omat päätökset perusteluineen",
      "",
      `### 5.1 Aiheen muunnelma (työviikko 2)`,
      "",
      arvo("aihe"),
      "",
      "### 5.2 Tietovaraston perustelu: sovittu toteutustapa SQLite (työviikko 2)",
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
        : "- Repositoryn julkisuus: EI VIELÄ SOVITTU, avoin asia. Julkisessa repositoryssa sovitaan tekijänimestä ja alaikäisellä huoltajan suostumus hoidetaan ohjaajan kautta.",
      onTäytetty("perusteversio")
        ? `- Perusteversion siirtymäsääntö: ${arvo("perusteversio")}`
        : "- Perusteversion siirtymäsääntö (OPH-6216-2025 / aiempi peruste): EI VIELÄ SOVITTU, oppilaitoksen linja.",
      onTäytetty("katselmoijat")
        ? `- Katselmoijat: ${arvo("katselmoijat")}`
        : "- Katselmoijat: EI VIELÄ SOVITTU, avoin asia. Asiakkaan edustaja (nimetty ulkopuolinen, ei oma ohjaava opettaja) nimetään viimeistään työviikolla 3 ja toimii työviikolla 10; julkaisutestaaja (eri henkilö) toimii työviikolla 16. Tähän kirjataan vain roolit, ei nimiä.",
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
    /* ============ VAIHE 1: VALMISTELU (1–3) ============ */
    1: {
      type: "pohjustus",
      feature: "Ohjaaja avaa repositoryn toisella koneella ja saa sovellusrungon käyntiin pelkän README:n ohjeilla.",
      connection: "Projekti alkaa toimeksiannosta ja työkaluista, ennen ensimmäistä komponenttia. Tällä viikolla puret toimeksiannon kysymyksiksi ja rakennat ympäristön, jossa työ tallentuu muuallekin kuin omalle koneelle. Kysymysten vastauksista tulee työviikolla 2 suunnitelma, ja sama repository kerää kaikki työnäytteet näyttöön asti.",
      deliverable: "Kysymyslista `project-docs/kysymykset.md`, todennetut työkaluversiot, Vite + React -projektirunko sekä etärepository ensimmäisine committeineen.",
      why: "Ilman toimivaa ympäristöä ja etärepositorya yksikään myöhempi viikko ei tallennu näyttöaineistoksi, ja julkisen repositoryn virhettä (henkilötieto historiassa) ei saa perumalla pois.",
      done: "Ohjaaja avaa repositoryn osoitteen toisella koneella: README kertoo mikä projekti on, ja `npm install && npm run dev` käynnistää sovellusrungon. Kysymyslista on `project-docs/kysymykset.md`-tiedostossa.",
      record: "Kirjoita työviikon 1 merkintään: mitkä kohdat toimeksiannosta jäivät epäselviksi, kysymyslistan tärkein kysymys, työkalujen versiotulosteet, repositoryn osoite ja ensimmäisen commitin tunniste.",
      skills: ["kehitysympäristö (p1, k1)", "versionhallinta (s12)", "vaatimusten purku (s1)", "julkisen repositoryn tietosuoja"],
      tehtavat: {
        "1-1": {
          miksi: "Rajaus ratkeaa kysymällä, ei arvaamalla. Vastaukset muuttuvat työviikolla 2 käyttäjätarinoiksi ja rajaukseksi.",
          osat: [
            ["Lue toimeksianto", "Lue Pelikellari ry:n toimeksianto kokonaan ja alleviivaa vaatimukset, esimerkiksi tilanvaihto yhdellä napilla ja vierailijan näkymä ilman tunnuksia."],
            ["Merkitse epäselvyydet", "Merkitse kohdat, joista et tiedä, mitä asiakas tarkoittaa tai milloin toiminto on valmis."],
            ["Kirjoita kysymyslista", "Kirjoita tiedostoon `project-docs/kysymykset.md` vähintään kahdeksan kysymystä, joihin et tiedä vastausta."],
            ["Tarkista, että kysymys pakottaa päätöksen", "Muotoile kysymykset niin, että vastaus muuttaa jotain toteutuksessa. Katso viikon esimerkki."],
            ["Vie lista ohjaajalle", "Käy lista läpi ohjaajan kanssa. Hän toimii asiakkaan sijaisena, kunnes asiakkaan edustaja on nimetty. Kirjaa vastaukset kysymysten alle työviikon 2 tarinoita varten."]
          ],
          valmis: "`project-docs/kysymykset.md` sisältää vähintään kahdeksan kysymystä, ja lista on käyty läpi ohjaajan kanssa.",
          tallenna: "`project-docs/kysymykset.md` repositoryyn. Epäselvät kohdat ja tärkein kysymys työviikon 1 päiväkirjaan."
        },
        "1-2": {
          miksi: "Ilman toimivaa ympäristöä yksikään myöhempi viikko ei tallennu näyttöaineistoksi. Versiotulosteet todistavat, millä työkaluilla työ on tehty.",
          osat: [
            ["Asenna työkalut", "Asenna Node.js:n LTS-versio eli pitkään tuettu vakaa versio, Git ja editori, esimerkiksi VS Code."],
            ["Ota versiot talteen", "Aja `node -v` ja `git --version` ja kopioi tulosteet työviikon 1 päiväkirjaan."],
            ["Luo kansiot", "Luo projektin juureen kansiot `client/`, `server/` ja `project-docs/`. Kaikki dokumentaatio menee `project-docs`-kansioon."],
            ["Luo React-projekti", "Aja `client`-kansiossa `npm create vite@latest` ja valitse React."],
            ["Käynnistä kehityspalvelin", "Aja `npm install` ja `npm run dev` ja avaa sovellusrunko selaimessa."]
          ],
          valmis: "Versiotulosteet ovat tallessa, ja `npm run dev` käynnistää sovellusrungon `client`-kansiossa.",
          tallenna: "Versiotulosteet työviikon 1 päiväkirjaan. Projektirunko viedään repositoryyn seuraavassa työvaiheessa."
        },
        "1-3": {
          miksi: "Etärepository on projektin koodivarasto muuallakin kuin omalla koneella. Sieltä ohjaaja ja arvioija löytävät jokaisen työnäytteen.",
          osat: [
            ["Kirjoita README", "Kirjoita `README.md`: mikä PeliHylly on ja miten sovellusrunko käynnistetään."],
            ["Lisää .gitignore", "Lisää `.gitignore`, joka estää `node_modules`-kansion ja `.env`-tiedostot pääsemästä repositoryyn."],
            ["Tee ensimmäinen commit", "Tee ensimmäinen commit kuvaavalla viestillä, esimerkiksi ”Vite + React -runko ja README”."],
            ["Vie etärepositoryyn", "Luo etärepository GitHubiin ja vie commitit sinne komennolla `git push`."],
            ["Kokeile kloonausta", "Kloonaa repository toiseen kansioon ja tarkista, että runko käynnistyy pelkän README:n ohjeilla."]
          ],
          valmis: "Repository on GitHubissa, README kertoo, mikä projekti on, ja kloonattu kopio käynnistyy README:n ohjeilla.",
          tallenna: "Repositoryn osoite ja ensimmäisen commitin tunniste työviikon 1 päiväkirjaan.",
          sanat: ["repository", "commit"]
        },
        "1-4": {
          miksi: "Julkisen repositoryn virhettä ei saa perumalla pois: henkilötieto tai salasana jää historiaan. Siksi pelisäännöt sovitaan ennen kuin repositoryyn kertyy sisältöä.",
          osat: [
            ["Tarkista historia", "Käy repositoryn tiedostot ja commit-historia läpi. Niissä ei saa olla henkilötietoja, salasanoja eikä avaimia."],
            ["Sovi tekijänimestä", "Sovi ohjaajan kanssa, millä nimellä olet tekijänä repositoryssa, ja kirjaa se suunnitelman Tekijä-kenttään."],
            ["Tarkista suostumustarve", "Kysy ohjaajalta, tarvitaanko huoltajan suostumus. Alaikäisellä se hoidetaan ohjaajan kautta."],
            ["Merkitse avoimet asiat", "Repositoryn julkisuus ja lisenssi ovat ohjaajan päätöksiä. Jätä ne suunnitelmassa avoimiksi, kunnes ne on sovittu."]
          ],
          valmis: "Julkisen repositoryn tarkistuslista on käyty ohjaajan kanssa, ja sopimatta olevat asiat on merkitty avoimiksi.",
          tallenna: "Sovitut asiat suunnitelmaan (Tekijä ja ohjaajan kentät). Tarkistuksen tulos työviikon 1 päiväkirjaan."
        }
      },
      help: {
        title: "Perusta repository ja todenna työkalut",
        tree: "pelihylly/\n├─ client/            React + Vite\n│  ├─ src/\n│  └─ package.json\n├─ server/            Express + SQLite\n│  └─ package.json\n├─ project-docs/      suunnitelma, testit, päiväkirja, AI-loki\n│  └─ kysymykset.md\n├─ README.md\n└─ .gitignore",
        actions: [
          "Luo kansiot client/, server/ ja project-docs/. Kaikki dokumentaatio menee project-docs-kansioon.",
          "Aja node -v ja git --version ja liitä tulosteet päiväkirjaan.",
          "Luo Vite + React -projekti client-kansioon ja käynnistä kehityspalvelin.",
          "Kirjoita README, lisää .gitignore, tee ensimmäinen commit ja push etärepositoryyn."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] node -v ja git --version tulostettu ja talletettu\n[ ] client/ kääntyy ja dev-palvelin käynnistyy\n[ ] README kertoo mikä projekti on ja miten se käynnistetään\n[ ] .gitignore estää node_modules-kansion ja .env-tiedostot\n[ ] project-docs/kysymykset.md sisältää vähintään 8 kysymystä\n[ ] ensimmäinen commit on viety etärepositoryyn (push)\n\nJULKISEN REPOSITORYN TARKISTUSLISTA\n[ ] historiassa ei ole henkilötietoja, salasanoja eikä avaimia\n[ ] tekijänimestä on sovittu ohjaajan kanssa\n[ ] alaikäisellä huoltajan suostumus hoidettu ohjaajan kautta\n[ ] repositoryn julkisuus on ohjaajan päätös; merkitse avoimeksi asiaksi kunnes sovittu",
        test: "Kloonaa repository toiseen kansioon ja tarkista, että sovellusrunko käynnistyy pelkän README:n ohjeilla.",
        links: [["Vite: Getting Started", "https://vite.dev/guide/"], ["GitHub Docs: repositoryn luominen", "https://docs.github.com/en/repositories"]]
      },
      example: "Kysymyslistan kysymys, joka pakottaa päätöksen: ”Näkeekö vierailija myös tähtiarviot ja kommentit vai vain tilat?”",
      notEnough: "”Asensin Noden ja VS Coden” ilman versiotulosteita ja ilman kysymyslistaa.",
      paivat: [
        ["Tarve", "Lue Pelikellari ry:n toimeksianto ja alleviivaa vaatimukset ja epäselvyydet."],
        ["Rajaus", "Kirjaa vähintään kahdeksan kysymyksen lista ohjaajalle: rajaus ratkeaa kysymällä, ei arvaamalla."],
        ["Työkaluperusta", "Asenna ja todenna työkalut: Node.js:n LTS-versio (pitkään tuettu vakaa versio), Git ja editori. Tulosteet talteen päiväkirjaan."],
        ["Suunnittele", "Luo Vite + React -projekti ja käynnistä kehityspalvelin. Sovi ohjaajan kanssa julkisen repositoryn pelisäännöistä."],
        ["Ensimmäinen commit", "Luo etärepository, lisää README ja .gitignore ja tee ensimmäinen commit ja push. Projekti on nyt olemassa muuallakin kuin omalla koneella."]
      ]
    },

    2: {
      type: "pohjustus",
      termit: ["JSON"],
      feature: "Ohjaaja on kuitannut pakollisen ytimen rajauksen, ja jokaisella sen issuella on hyväksymiskriteerit ja työmääräarvio.",
      excerpt: "Mieluummin vähemmän ja kunnolla.",
      connection: "Työviikon 1 kysymyslista sai vastauksia, ja nyt ne muuttuvat käyttäjätarinoiksi, tietomalliksi ja rajaukseksi. Päätät, mitä tehdään ensin ja miten tieto tallennetaan, koska tilahistoria ja kokoelmat on vaikea lisätä jälkikäteen. Samaa suunnitelmaa vasten rakennat ja tarkistat työtä työviikosta 3 alkaen.",
      deliverable: "`project-docs/suunnitelma.md`, tietomallikaavio, sivukartta ja rautalangat, tietovarastovertailu sekä issue-taulu työmääräarvioineen.",
      why: "Ilman rajausta 18 viikkoa valuu ominaisuuslistan kasvattamiseen; ilman tietomallia tilahistoria ja kokoelmat joudutaan repimään auki myöhemmin.",
      done: "Suunnitelma on `project-docs/suunnitelma.md`-tiedostossa, ohjaaja on kuitannut P0-rajauksen kirjallisesti (issue-kommentti), ja jokaisella P0-issuella on työmääräarvio.",
      record: "Kirjoita työviikon 2 merkintään: mitkä tarinat jäivät P0:n ulkopuolelle ja miksi, tietovarastovalinnan perustelu omin sanoin sekä linkki issue-tauluun ja ohjaajan kuittaukseen.",
      skills: ["priorisointi (s4)", "työn ositus ja arviointi (s5, s6)", "tietovaraston valinta (s8)", "komponenttirakenteen suunnittelu (k5)"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "2-1": {
          miksi: "Ilman rajausta 18 viikkoa valuu ominaisuuslistan kasvattamiseen. Hyväksymiskriteerit kertovat myöhemmin, milloin toiminto on valmis.",
          osat: [
            ["Kirjoita tarinat", "Kirjoita tiedostoon `project-docs/kayttajatarinat.md` jokaisesta toiminnosta tarina muodossa ”Jäsenenä haluan…, jotta…”. Käytä työviikon 1 vastauksia."],
            ["Lisää hyväksymiskriteerit", "Kirjoita jokaiseen tarinaan 1–3 havaittavaa kriteeriä, joista ulkopuolinen voi todeta, onko tarina valmis."],
            ["Luokittele tarinat", "Merkitse tarinat: pakollinen ydin (P0), tärkeä jatko (P1) tai valinnainen lisä (P2). Profiiliviestit kuuluvat P2:een."],
            ["Priorisoi ohjaajan kanssa", "Käy luokittelu läpi ohjaajan kanssa ja muuta sitä, jos rajauksesta sovitaan toisin."],
            ["Pyydä kirjallinen kuittaus", "Avaa GitHubiin issue ”P0-rajaus”, linkitä siihen tarinatiedosto ja pyydä ohjaajalta kuittaus issue-kommenttina."]
          ],
          valmis: "Jokaisella tarinalla on hyväksymiskriteerit ja prioriteetti, ja ohjaaja on kuitannut pakollisen ytimen (P0) rajauksen issue-kommentissa.",
          tallenna: "`project-docs/kayttajatarinat.md` repositoryyn. Linkki ohjaajan kuittaukseen ja P0:n ulkopuolelle jääneet tarinat työviikon 2 päiväkirjaan."
        },
        "2-2": {
          miksi: "Ilman tietomallia tilahistoria ja kokoelmat joudutaan repimään auki myöhemmin. Profiilin rautalankaa vasten toteutus tarkistetaan työviikolla 8.",
          osat: [
            ["Piirrä tietomalli", "Piirrä taulut, avaimet, viiteavaimet ja tilahistorian rakenne. Viikon toteutusavun kentät ovat esimerkki: päätä omat."],
            ["Nimeä tilat alustavasti", "Kirjaa pelin tilat, esimerkiksi hyllyssä, kesken ja läpi. Nimet testataan käytännössä työviikolla 6."],
            ["Piirrä sivukartta", "Piirrä näkymät ja siirtymät niiden välillä, esimerkiksi etusivu, pelit, pelin sivu, profiili ja kirjautuminen."],
            ["Piirrä rautalangat", "Piirrä rautalangat eli karkeat luonnokset näkymien rakenteesta paperille tai työkalulla. Tee profiilisivusta tarkin."],
            ["Kirjaa suunnitelmaan", "Kirjoita tietomallin ja sivukartan tiivistelmä suunnitelman kenttiin ja tallenna kuvat `project-docs/`-kansioon."]
          ],
          valmis: "Tietomallissa näkyvät taulut ja avaimet, ja profiilin rautalanka on niin tarkka, että toteutusta voi verrata siihen työviikolla 8.",
          tallenna: "Tietomallikaavio, sivukartta ja rautalangat kuvina `project-docs/`-kansioon. Tiivistelmät suunnitelman kenttiin Tietomalli ja Sivukartta."
        },
        "2-3": {
          miksi: "SQLite on sovittu toteutustapa, koska myöhemmät viikot rakentuvat sen varaan. Vertailulla osoitat, että osaat perustella tietovaraston valinnan.",
          osat: [
            ["Valitse kriteerit", "Päätä omat vertailukriteerit, esimerkiksi datan rakenne, monta-moneen-suhteet, samanaikainen kirjoitus ja julkaisun helppous."],
            ["Vertaile SQLiteä muihin", "Täytä vertailutaulukko: SQLite vähintään yhtä vaihtoehtoa vasten, esimerkiksi JSON-tiedosto tai palvelintietokanta. JSON-tiedosto on tavallinen tekstitiedosto, johon tieto tallennetaan."],
            ["Perustele SQLite", "Kirjoita 2–3 virkkeen perustelu, miksi SQLite sopii PeliHyllyyn. Viittaa kriteereihisi."],
            ["Kirjaa suunnitelmaan", "Kirjoita vertailu ja perustelu suunnitelman kenttään Tietovarasto ja perustelu."],
            ["Kerro tulos ohjaajalle", "Kerro vertailun tulos ohjaajalle. Jos vertailu puoltaa selvästi muuta, sovi poikkeamasta ohjaajan kanssa ennen työviikkoa 3."]
          ],
          valmis: "Suunnitelmassa on vertailu, jossa SQLiteä verrataan omilla kriteereillä vähintään yhteen vaihtoehtoon, ja perustelu sovitulle valinnalle.",
          tallenna: "Vertailu ja perustelu suunnitelman kenttään Tietovarasto ja perustelu. Perustelu omin sanoin työviikon 2 päiväkirjaan.",
          sanat: ["JSON"]
        },
        "2-4": {
          miksi: "Issue-taulu ohjaa työtä koko projektin ajan. Arvioita verrataan toteumaan työviikolla 11.",
          osat: [
            ["Pilko tarinat", "Pilko jokainen pakollisen ytimen (P0) tarina GitHub-issueiksi. Yksi issue on yksi rajattu muutos, yleensä puolen tai yhden päivän työ."],
            ["Kirjaa kriteerit issueen", "Kopioi issueen ne tarinan hyväksymiskriteerit, joihin issue vastaa."],
            ["Arvioi työmäärä", "Kirjaa jokaiseen issueen työmääräarvio tunteina tai päivinä."],
            ["Järjestä issue-taulu", "Järjestä issuet issue-tauluun siihen järjestykseen, jossa aiot tehdä ne."],
            ["Sovi aloitus ohjaajan kanssa", "Sovi ohjaajan kanssa, mitkä issuet tehdään ensin. Tehtävistä sovitaan näin joka viikko tästä eteenpäin."]
          ],
          valmis: "Jokaisella pakollisen ytimen (P0) issuella on hyväksymiskriteerit ja työmääräarvio.",
          tallenna: "Issue-taulun linkki työviikon 2 päiväkirjaan.",
          sanat: ["GitHub-issue"]
        }
      },
      help: {
        title: "Tietomallin pohja ja käyttäjätarinan muoto",
        tree: "users            id · kayttajanimi · salasana_hash · sahkoposti · profiilikuva · luotu\ngames            id · user_id → users.id · nimi · laite · tila · tahdet · kommentti · pelaa_nyt · luotu\nstatus_history   id · game_id → games.id · vanha_tila · uusi_tila · aikaleima\ncollections      id · user_id → users.id · nimi · kuvaus\ncollection_games game_id → games.id · collection_id → collections.id  (liitostaulu)",
        actions: [
          "Kirjoita jokaisesta P0-toiminnosta käyttäjätarina hyväksymiskriteereineen.",
          "Piirrä tietomalli ja merkitse avaimet ja viiteavaimet. Kentät ovat esimerkki, päätä omat.",
          "Vertaile SQLiteä omilla kriteereilläsi vähintään yhtä vaihtoehtoa vasten (JSON-tiedosto, palvelintietokanta) ja perustele sovittu valinta. Jos vertailu puoltaa selvästi muuta, sovi poikkeamasta ohjaajan kanssa ennen työviikkoa 3.",
          "Piirrä sivukartta ja rautalangat; tee profiilisivusta tarkin luonnos, koska sitä vasten toteutus tarkistetaan työviikolla 8.",
          "Pilko P0 issueiksi ja kirjaa jokaiseen työmääräarvio tunteina tai päivinä."
        ],
        code: "KÄYTTÄJÄTARINAN POHJA\nJäsenenä haluan ______________________ jotta ______________________.\nHyväksytty kun:\n  - ______________________________________________\n  - ______________________________________________\nPrioriteetti: P0 / P1 / P2      Arvio: ____ h\n\nTIETOVARASTOVERTAILUN POHJA\nKriteeri                | SQLite | JSON-tiedosto | palvelintietokanta\nDatan rakenne           |        |               |\nMonta-moneen-suhteet    |        |               |\nSamanaikainen kirjoitus |        |               |\nJulkaisun helppous      |        |               |\nPerustelu sovitulle SQLitelle (2–3 virkettä): ______________________________",
        test: "Näytä yksi P0-tarina ohjaajalle ja kysy: pystyisikö ulkopuolinen sanomaan hyväksymiskriteerien perusteella, onko tarina valmis vai ei?",
        links: [["SQLite: Datatypes", "https://www.sqlite.org/datatype3.html"]]
      },
      example: "Tarina hyväksymiskriteereineen: ”Jäsenenä haluan vaihtaa pelin tilan yhdellä napilla, jotta kirjaaminen ei jää tekemättä. Hyväksytty kun: tila vaihtuu pelin sivulta, muutos näkyy historiassa.”",
      notEnough: "”Teen pelisivuston Reactilla ja SQLitellä” -tasoinen suunnitelma ilman rajausta ja arvioita."
    },

    3: {
      type: "feature",
      termit: ["tuotantobuild"],
      feature: "Kuka tahansa voi avata PeliHyllyn rungon julkisesta osoitteesta, ja `/api/health` vastaa tuotannossa.",
      excerpt: "Minä ymmärrän pelejä, en palvelimia.",
      connection: "Työviikon 2 sivukartta ja tietomalli muuttuvat nyt koodiksi: reitit vastaavat sivukarttaa, ja migraatioskripti luo tietomallin taulut. Koko putki viedään heti julkiseen osoitteeseen, koska julkaisun ongelmat, kuten ympäristömuuttujat ja SQLiten levypolku, on halvinta korjata, kun rikottavaa on vähän. Samaan osoitteeseen tulevat työviikosta 4 alkaen pelit ja työviikolla 17 versio v1.0.",
      deliverable: "Julkinen osoite, jossa navigoitava React-runko ja vastaava `/api/health`, SQLite-skeema migraatioskriptinä, k2-muistio ja ensimmäinen tilannekatsaus asiakkaalle.",
      why: "Julkaisuputken ongelmat (ympäristömuuttujat, SQLiten levypolku) löytyvät nyt työviikolla 3 eivätkä työviikolla 17.",
      done: "Julkinen osoite näyttää navigoitavan rungon, `/api/health` vastaa tuotannossa, ja tilannekatsausviesti on lähetetty ja tallennettu `project-docs/viestit.md`-tiedostoon.",
      record: "Kirjoita työviikon 3 merkintään: julkaisualustojen vertailu ja valinta perusteluineen, mikä julkaisussa yllätti, k2-muistion ydinhavainto sekä julkinen osoite.",
      skills: ["komponenttikirjaston mahdollisuudet ja rajoitteet (k2)", "ulkoinen komponentti react-router (k4)", "julkaisu tuotantoon (s14)", "asiakaslähtöinen viestintä (s2)"],
      tehtavat: {
        "3-1": {
          miksi: "Reititys ei kuulu Reactin ytimeen, ja juuri se on k2-havainto: tiedät, mitä kirjasto ratkaisee ja mitä ei. Reitit vastaavat työviikon 2 sivukarttaa.",
          osat: [
            ["Kirjoita k2-muistio", "Kirjoita `project-docs/k2-muistio.md`: mitä React ratkaisee (komponentit, tila, renderöinti), mitä ei (reititys, palvelin, tietovarasto) ja mitä siitä seuraa PeliHyllylle."],
            ["Asenna react-router", "Asenna react-router `client`-kansioon ja kirjaa riippuvuus perusteluineen k2-muistioon."],
            ["Rakenna kolme reittiä", "Tee sivut Etusivu, Pelit ja Profiili kansioon `client/src/sivut/` ja reitit tiedostoon `App.jsx`. Sisällöksi riittää paikanpitäjä."],
            ["Lisää navigaatio", "Lisää navigaatio, jolla pääsee jokaiselle kolmelle sivulle."],
            ["Vertaa sivukarttaan", "Tarkista, että reitit vastaavat työviikon 2 sivukarttaa. Kirjaa poikkeama suunnitelman kenttään Sivukartta ja komponenttijako."]
          ],
          valmis: "Kolme reittiä toimii navigaatiosta, ja k2-muistio kertoo omin sanoin, miksi reititys tarvitsee erillisen kirjaston.",
          tallenna: "`project-docs/k2-muistio.md` ja reitit commitilla repositoryyn."
        },
        "3-2": {
          miksi: "Palvelin ja tietokanta tarvitaan ennen ensimmäistä julkaisua, koska tuotannon ongelmat, kuten SQLiten levypolku, löytyvät vain oikealta alustalta.",
          osat: [
            ["Luo Express-projekti", "Luo `server`-kansioon Express-projekti ja tiedosto `server/index.js`, joka käynnistää palvelimen."],
            ["Tee terveystarkistus", "Toteuta reitti `/api/health`, joka palauttaa version ja tietokantayhteyden tilan. Kokeile sitä selaimessa."],
            ["Kytke SQLite", "Tee tiedosto `server/db.js`, joka avaa SQLite-tietokannan. Lue tietokannan polku ympäristömuuttujasta."],
            ["Kirjoita migraatioskripti", "Kirjoita `server/migrate.js`, joka luo työviikon 2 tietomallin taulut eli tietokannan skeeman ja tulostaa, montako taulua syntyi."],
            ["Aja migraatio", "Aja migraatio tyhjään tietokantaan ja tarkista tulosteesta, että taulujen määrä vastaa tietomallia."]
          ],
          valmis: "`/api/health` vastaa paikallisesti, ja migraatio luo tietomallin taulut tyhjään tietokantaan.",
          tallenna: "`server/`-kansion tiedostot commitilla repositoryyn. Migraation tuloste työviikon 3 päiväkirjaan."
        },
        "3-3": {
          miksi: "Julkaisuputken ongelmat löytyvät nyt eivätkä vasta työviikolla 17. Sama julkinen osoite pysyy käytössä v1.0-julkaisuun asti.",
          osat: [
            ["Vertaile alustat", "Täytä vertailutaulukko: Render, Railway ja Fly.io. Kriteereinä ilmainen taso, levyn pysyvyys SQLite-tiedostolle, ympäristömuuttujat ja käyttöönoton työmäärä."],
            ["Tee päätös", "Valitse alusta ja kirjaa perustelu suunnitelman kenttään Julkaisualusta. Tilin omistajuus sovitaan ohjaajan kanssa."],
            ["Kokoa tuotantobuild", "Aja `client`-kansiossa `npm run build` ja tarkista, että Express tarjoilee `client/dist`-kansion."],
            ["Aseta ympäristö", "Aseta salaisuudet ja tietokannan polku alustan ympäristömuuttujiksi. Tarkista, että SQLite-tiedosto on pysyvällä levyllä."],
            ["Julkaise ja tarkista", "Julkaise ja avaa julkinen osoite sekä `/api/health` puhelimella mobiiliverkossa."],
            ["Kirjaa osoite", "Lisää julkinen osoite README:hen ja ota julkaisulokista kuvakaappaus."]
          ],
          valmis: "Julkinen osoite näyttää navigoitavan rungon, ja `/api/health` vastaa tuotannossa.",
          tallenna: "Julkaisulokin kuvakaappaus `project-docs/`-kansioon, osoite README:hen ja alustojen vertailu työviikon 3 päiväkirjaan.",
          sanat: ["tuotantobuild"]
        },
        "3-4": {
          miksi: "Asiakas ymmärtää pelejä, ei palvelimia. Asiakaslähtöinen viestintä on arvioitavaa osaamista, ja katsaus kertoo, että palvelu on jo verkossa.",
          osat: [
            ["Valitse vastaanottaja", "Lähetä katsaus asiakkaan edustajalle. Jos häntä ei ole vielä nimetty, ohjaaja toimii asiakkaan sijaisena ja vastaanottaa katsauksen."],
            ["Kirjoita kolme virkettä", "Kerro ilman teknistä jargonia, mitä nyt on valmiina, mitä seuraavaksi tehdään ja mistä osoitteesta palvelun näkee."],
            ["Poista jargon", "Lue viesti asiakkaan silmin ja vaihda sanat kuten rajapinta, build tai migraatio arkikielelle."],
            ["Lähetä ja tallenna", "Lähetä viesti ja tallenna se tiedostoon `project-docs/viestit.md`. Kirjaa vastaanottajasta vain rooli, ei nimeä."]
          ],
          valmis: "Tilannekatsaus on lähetetty ja tallennettu `project-docs/viestit.md`-tiedostoon.",
          tallenna: "`project-docs/viestit.md` commitilla repositoryyn."
        }
      },
      help: {
        title: "Monorepo, julkaisu ja SQLiten sijainti tuotannossa",
        tree: "pelihylly/\n├─ client/          React + Vite (npm run build → dist/)\n│  └─ src/\n│     ├─ main.jsx\n│     ├─ App.jsx        reitit\n│     └─ sivut/         Etusivu · Pelit · Profiili\n├─ server/          Express\n│  ├─ index.js          tarjoilee API:n ja client/dist-kansion\n│  ├─ db.js             SQLite-yhteys\n│  └─ migrate.js        luo taulut\n└─ project-docs/\n   ├─ k2-muistio.md\n   └─ viestit.md",
        actions: [
          "Asenna react-router ja kirjaa riippuvuus perusteluineen k2-muistioon.",
          "Rakenna kolme reittiä ja navigaatio; sisällöksi riittää paikanpitäjä.",
          "Tee /api/health, joka palauttaa version ja tietokantayhteyden tilan.",
          "Kirjoita migraatioskripti, joka luo viikon 2 taulut ja tulostaa, montako taulua syntyi.",
          "Vertaile julkaisualustat (Render, Railway, Fly.io) ja julkaise valitulle alustalle.",
          "Lähetä tilannekatsaus asiakkaan edustajalle tai, jos häntä ei ole vielä nimetty, ohjaajalle asiakkaan sijaisena. Tallenna viesti project-docs/viestit.md-tiedostoon ja kirjaa vastaanottajasta vain rooli."
        ],
        code: "JULKAISUALUSTOJEN VERTAILUN POHJA\nKriteeri                        | Render | Railway | Fly.io\nIlmainen taso ja rajat          |        |         |\nLevyn pysyvyys (SQLite-tiedosto)|        |         |\nYmpäristömuuttujat              |        |         |\nKäyttöönoton työmäärä           |        |         |\nValinta ja perustelu: ______________________________\n\nJULKAISUN TARKISTUSLISTA\n[ ] tuotantobuild syntyy paikallisesti (npm run build)\n[ ] SQLite-tiedosto on pysyvällä levyllä, ei väliaikaiskansiossa\n[ ] salaisuudet ovat ympäristömuuttujissa, eivät repositoryssa\n[ ] /api/health vastaa julkisesta osoitteesta\n[ ] osoite on kirjattu README:hen ja lähetetty asiakkaalle",
        test: "Avaa julkinen osoite ja `/api/health` puhelimen selaimessa mobiiliverkossa. Jos ne toimivat siellä, palvelu ei ole enää vain omalla koneellasi.",
        links: [["React Router: Tutorial", "https://reactrouter.com/start/framework/installation"], ["Express: Hello world", "https://expressjs.com/en/starter/hello-world.html"]]
      },
      example: "Tilannekatsauksen sävy: ”Palvelun pohja on nyt verkossa. Siinä ei vielä ole pelejä, mutta osoite pysyy samana koko projektin ajan.”",
      notEnough: "”React on hyvä koska se on suosittu” k2-muistiona; sovellus toimii vain localhostissa."
    },

    /* ============ VAIHE 2: OMA HYLLY (4–6) ============ */
    4: {
      type: "feature",
      termit: ["T01"],
      feature: "Käyttäjä näkee pelilistan tietokannasta, ja jos palvelin on alhaalla, hän saa selkeän virheilmoituksen tyhjän sivun sijaan.",
      connection: "Työviikon 3 tyhjät reitit saavat nyt sisällön. Sama tietokanta, jonka migraatio loi, tarjoillaan oman rajapintareitin kautta React-komponenteille, ja virhetilat käsitellään heti. Lukuyhteys on pohja, jonka päälle työviikolla 5 tulee pelin lisäys.",
      deliverable: "Siemendataskripti, `GET /api/games`, PeliLista- ja PeliKortti-komponentit, oma fetch-hookki sekä käsitellyt lataus- ja virhetilat.",
      why: "Data pois koodista on koko arkiston perusta; virhetilan käsittely nyt säästää jokaisen tulevan näkymän.",
      done: "Lista renderöityy tuotannossa tietokannan datasta; kun API on alhaalla, sivu näyttää virheilmoituksen eikä jää tyhjäksi; molemmista kuvakaappaus.",
      record: "Kirjoita työviikon 4 merkintään: miten jaoit vastuut komponenttien kesken, mitä virhetilan testaaminen paljasti sekä testitapausten T01–T02 odotetut ja toteutuneet tulokset.",
      skills: ["yhteys tietovarastoon (s9)", "rakenteinen ohjelmointi ja komponenttijako (p4)", "Reactin hookit ja datavirta (k3)", "fetch ja virhetilat (s10)"],
      tehtavat: {
        "4-1": {
          miksi: "Data pois koodista on koko arkiston perusta. Sama reitti palvelee myöhemmin listaa, profiilia ja hakua.",
          osat: [
            ["Kirjoita siemendata", "Kirjoita `server/seed.js`, joka lisää tietokantaan omat esimerkkipelisi. Kirjoita pelit itse, älä kopioi ulkopuolista tietokantaa."],
            ["Aja siemendata", "Aja skripti ja tarkista `sqlite3`-kyselyllä, että pelit ovat tietokannassa."],
            ["Tee lukureitti", "Toteuta `GET /api/games`, joka lukee pelit tietokannasta ja palauttaa ne JSON-muodossa."],
            ["Kokeile reittiä", "Avaa reitti selaimessa tai curlilla ja vertaa vastausta siemendataan."]
          ],
          valmis: "`GET /api/games` palauttaa siemendatan pelit tietokannasta.",
          tallenna: "Siemendataskripti ja reitti commitilla repositoryyn.",
          sanat: ["JSON"]
        },
        "4-2": {
          miksi: "Komponenttijako ja oma hookki ovat Reactin ydintä ja rakenteisen ohjelmoinnin työnäyte. Jokaisella osalla on yksi vastuu.",
          osat: [
            ["Tee oma hookki", "Kirjoita hookki `usePelit()`, joka hakee pelit useEffectin ja fetchin avulla ja palauttaa datan, lataustilan ja virheen."],
            ["Rakenna lista ja kortti", "Tee komponentit PeliLista ja PeliKortti. Lista saa pelit propsina ja piirtää kortin jokaiselle pelille."],
            ["Erota tilamerkki", "Tee TilaMerkki-komponentti, joka näyttää pelin tilan. Kortti ei itse päätä tilan ulkoasua."],
            ["Kytke Pelit-sivuun", "Käytä hookkia PelitSivu-komponentissa ja näytä lista reitillä, jonka teit työviikolla 3."],
            ["Julkaise ja tarkista", "Julkaise muutos ja tarkista, että lista näkyy tuotannossa tietokannan datasta."]
          ],
          valmis: "Pelilista näkyy tuotannossa tietokannan datasta, ja jokaisella komponentilla on yksi vastuu.",
          tallenna: "Komponentit ja hookki commitilla. Vastuunjako omin sanoin työviikon 4 päiväkirjaan."
        },
        "4-3": {
          miksi: "Virhetilan käsittely nyt säästää työtä jokaisessa tulevassa näkymässä. Käyttäjä ei saa jäädä tyhjän sivun eteen.",
          osat: [
            ["Näytä lataustila", "Näytä käyttäjälle viesti tai merkki silloin, kun pelejä haetaan."],
            ["Tarkista vastaus", "Tarkista hookissa `response.ok` ja palauta virhe, jos palvelin vastaa virheellä."],
            ["Kirjoita virheviesti", "Näytä virhe käyttäjän kielellä, esimerkiksi ”Pelien haku ei onnistunut. Yritä hetken päästä uudelleen.”"],
            ["Käsittele tyhjä lista", "Näytä oma viesti, jos pelejä ei ole. Älä jätä sivua tyhjäksi."],
            ["Sammuta palvelin", "Sammuta palvelin, lataa sivu uudelleen ja ota kuvakaappaus sekä normaalitilasta että virhetilasta."]
          ],
          valmis: "Kun palvelin on alhaalla, sivu näyttää virheilmoituksen eikä jää tyhjäksi. Molemmista tiloista on kuvakaappaus.",
          tallenna: "Kuvakaappaukset normaali- ja virhetilasta `project-docs/`-kansioon ja muutokset commitilla."
        },
        "4-4": {
          miksi: "Testi ilman ennalta kirjattua odotusta on klikkailua. Tästä alkaa testimatriisi, joka ajetaan kokonaan työviikolla 13.",
          osat: [
            ["Luo testimatriisi", "Luo tiedosto `project-docs/testimatriisi.md`, jossa on sarakkeet tunnus, luokka, askeleet, odotettu tulos, toteutunut tulos ja viikko."],
            ["Kirjaa testitapaus T01", "Normaali käyttö: pelilista latautuu ja näyttää siemendatan. Kirjaa odotettu tulos ennen ajoa."],
            ["Kirjaa testitapaus T02", "Virhetilanne: palvelin on alhaalla, ja käyttäjä näkee virheilmoituksen. Kirjaa odotettu tulos ennen ajoa."],
            ["Aja ja kirjaa tulokset", "Aja molemmat testitapaukset ja kirjaa toteutuneet tulokset matriisiin."],
            ["Tee commit", "Tee commit, jonka viesti kertoo, mitkä testitapaukset lisättiin."]
          ],
          valmis: "Testimatriisissa ovat testitapaukset T01 ja T02: odotettu tulos kirjattuna ennen ajoa ja toteutunut tulos ajon jälkeen.",
          tallenna: "`project-docs/testimatriisi.md` commitilla. Odotetut ja toteutuneet tulokset lyhyesti työviikon 4 päiväkirjaan."
        }
      },
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
      feature: "Jäsen lisää pelin tähtiarvioineen ja kommentteineen, ja virheellinen syöte hylätään kentittäisellä viestillä myös suorassa kutsussa.",
      connection: "Työviikolla 4 pelejä vain luettiin, nyt niitä myös kirjoitetaan. Rakennat lomakkeen itse ja tarkistat syötteet sekä selaimessa että palvelimella, koska rajapintaa voi kutsua suoraan selaimen ohi. Tähtiarviot ja kommentit syntyvät lomakkeen kenttinä, ja samaa lomaketta käytetään myöhemmin pelin muokkaukseen.",
      deliverable: "Itse rakennettu lisäyslomake, `POST /api/games` palvelinvalidointeineen, kentittäiset virheviestit sekä validointisääntötaulukko ja testitapaukset T03–T05.",
      why: "Selainvalidointi yksin on kosmetiikkaa: kuka tahansa voi kutsua APIa suoraan. Tämä on ensimmäinen tietoturvateko.",
      done: "Tyhjä nimi, ylipitkä nimi ja onnistunut lisäys käyttäytyvät ennalta kirjatun odotuksen mukaan sekä selaimessa että suoralla API-kutsulla (curl-tuloste talteen).",
      record: "Kirjoita työviikon 5 merkintään: validointisäännöt ja se, missä kerroksessa kukin tarkistetaan, mitä curl-ajo paljasti sekä T03–T05:n tulokset.",
      skills: ["toimintojen toteutus suunnitelmista (p7)", "rajapinnat ja tiedon käsittely (s10)", "validointi kahdessa kerroksessa", "itse rakennettu näkymä"],
      tehtavat: {
        "5-1": {
          miksi: "Lomake on ensimmäinen alusta itse rakennettava näkymä ja työnäyte siitä, että toteutat käyttöliittymän suunnitelmasta.",
          osat: [
            ["Suunnittele kentät", "Päätä kentät nimi, laite, tila, tähdet ja kommentti sekä niiden pakollisuus suunnitelman mukaan."],
            ["Kirjaa säännöt ensin", "Täytä validointisääntötaulukko ennen koodia: kenttä, sääntö, virheviesti ja missä sääntö tarkistetaan."],
            ["Rakenna lomake", "Tee PeliLomake-komponentti ilman valmista käyttöliittymäkirjastoa. Kenttien arvot ovat Reactin tilassa, eli lomake on kontrolloitu."],
            ["Kytke labelit", "Kytke jokainen label omaan kenttäänsä. Tähtiarvion pitää toimia myös näppäimistöllä."],
            ["Lisää selainvalidointi", "Toteuta taulukon säännöt selaimessa ennen kuin lomake lähettää pyynnön."]
          ],
          valmis: "Lomake toimii näppäimistöllä, jokainen kenttä on kytketty labeliinsa, ja validointisäännöt on kirjattu taulukkoon ennen koodia.",
          tallenna: "Validointisääntötaulukko `project-docs/`-kansioon ja lomake commitilla repositoryyn."
        },
        "5-2": {
          miksi: "Selainvalidointi yksin on kosmetiikkaa, koska kuka tahansa voi kutsua rajapintaa suoraan. Palvelinvalidointi on projektin ensimmäinen tietoturvateko.",
          osat: [
            ["Tee lisäysreitti", "Toteuta `POST /api/games`, joka tallentaa pelin tietokantaan ja palauttaa lisätyn pelin."],
            ["Toteuta samat säännöt", "Tarkista Expressissä samat säännöt kuin selaimessa sääntötaulukon mukaan."],
            ["Palauta virhelista", "Palauta virheelliseen pyyntöön virhekoodi 400 (virheellinen pyyntö) ja virhelista kentittäin, esimerkiksi `{ nimi: \"…\" }`."],
            ["Todista curlilla", "Lähetä curlilla selaimen ohi pyyntö ilman pakollisia kenttiä ja tallenna tuloste. Kirjaa odotus ennen ajoa."]
          ],
          valmis: "Tyhjä pyyntö curlilla saa vastaukseksi virhekoodin 400 ja virhelistan, ja onnistunut lisäys tallentuu tietokantaan.",
          tallenna: "curl-tulosteet `project-docs/`-kansioon ja reitti commitilla repositoryyn."
        },
        "5-3": {
          miksi: "Käyttäjän pitää tietää, mikä kenttä on väärin ja miksi. Ohjelmallinen kytkentä kertoo saman myös ruudunlukijalle.",
          osat: [
            ["Käytä samaa virhemuotoa", "Käytä samaa virhemuotoa selaimessa ja palvelimella, jotta palvelimen virhelista näkyy samoissa kohdissa."],
            ["Näytä viesti kentän vieressä", "Näytä kunkin kentän virheviesti heti kentän alla, ei vain sivun yläreunassa."],
            ["Kytke viesti kenttään", "Kytke virheviesti kenttään `aria-describedby`-attribuutilla."],
            ["Kokeile palvelimen virhettä", "Ohita selainvalidointi hetkeksi ja tarkista, että palvelimen palauttama virhe näkyy oikean kentän vieressä."]
          ],
          valmis: "Virheviesti näkyy oikean kentän vieressä sekä selaimen että palvelimen hylkäämässä pyynnössä, ja viesti on kytketty kenttään.",
          tallenna: "Muutokset commitilla ja kuvakaappaus kentittäisistä virheviesteistä `project-docs/`-kansioon."
        },
        "5-4": {
          miksi: "Testitapaukset todistavat, että sama sääntö hylkää pyynnön sekä selaimessa että suorassa kutsussa.",
          osat: [
            ["Kirjaa testitapaus T03", "Normaali käyttö: onnistunut lisäys. Kirjaa testimatriisiin odotettu tulos ennen ajoa."],
            ["Kirjaa testitapaus T04", "Raja: ylipitkä nimi, esimerkiksi 101 merkkiä. Kirjaa odotettu tulos ennen ajoa."],
            ["Kirjaa testitapaus T05", "Virhetilanne: suora kutsu curlilla ilman pakollisia kenttiä. Kirjaa odotettu tulos ennen ajoa."],
            ["Aja ja vertaa", "Aja tapaukset selaimessa ja curlilla ja kirjaa toteutuneet tulokset. Molempien pitää hylätä virheellinen pyyntö samalla säännöllä."]
          ],
          valmis: "Testitapaukset T03–T05 on kirjattu odotuksineen ennen ajoa, ja toteutuneet tulokset on kirjattu matriisiin.",
          tallenna: "`project-docs/testimatriisi.md` commitilla. Validointisäännöt ja curl-ajon havainnot työviikon 5 päiväkirjaan."
        }
      },
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
      notEnough: "Pelkkä `required`-attribuutti HTML:ssä; valmiin käyttöliittymäkirjaston lomakekomponentti."
    },

    6: {
      type: "feature",
      feature: "Jäsen vaihtaa pelin tilan yhdellä napilla, ja jokainen muutos näkyy pelin tilahistoriassa.",
      excerpt: "Tärkeintä on, että pelin tilan vaihtaminen on yhden napin juttu.",
      connection: "Työviikolla 5 peli saatiin hyllyyn, nyt se saa elämän. Työviikon 2 tietomallin tilahistoriataulu otetaan käyttöön, ja tilojen nimet testataan käytännössä. Kun tilanvaihto toimii, profiili voi työviikolla 8 koota historiasta jäsenen tilastot.",
      deliverable: "Oma tilamalli sallittuine siirtymineen, tilanvaihto-API transaktiossa, tilahistoria pelin sivulla ja ”pelaan parhaillaan” -merkintä.",
      why: "Asiakkaan tärkein virke on ”tilan vaihtaminen on yhden napin juttu”, ja ilman transaktiota historia valehtelee juuri silloin, kun jokin menee vikaan.",
      done: "Tilan vaihto näkyy heti pelin sivulla, ja `status_history`-taulussa on rivi, jonka aikaleima ja vanha→uusi tila täsmäävät; suora tietokantakysely liitetty päiväkirjaan.",
      record: "Kirjoita työviikon 6 merkintään: valitsemasi tilat ja sallitut siirtymät perusteluineen, miten varmistit transaktion sekä T06:n tulos ja sqlite3-kyselyn tuloste.",
      skills: ["toimintalogiikka (s7)", "toimintojen toteutus suunnitelmista (p7)", "transaktiot ja tietovaraston eheys"],
      tehtavat: {
        "6-1": {
          miksi: "Tilanvaihto on asiakkaan tärkein toive. Tilat ja siirtymät ovat palvelun toimintalogiikkaa, ja ne päätetään ennen koodia.",
          osat: [
            ["Nimeä tilat", "Nimeä tilat itse, esimerkiksi hyllyssä, kesken, läpi ja kaikki tehty. Älä kopioi aihekuvauksesta miettimättä."],
            ["Täytä siirtymätaulukko", "Kirjaa taulukkoon, mistä tilasta mihin pääsee ja mihin ei."],
            ["Perustele estot", "Kirjoita jokaiselle estetylle siirtymälle yhden virkkeen perustelu."],
            ["Päivitä suunnitelma", "Päivitä suunnitelman kenttä Tietomalli ja tilojen nimet ja kirjaa, mikä muuttui työviikon 2 tietomallista."]
          ],
          valmis: "Suunnitelmassa ovat tilojen nimet ja siirtymätaulukko, jossa jokainen estetty siirtymä on perusteltu.",
          tallenna: "Siirtymätaulukko `project-docs/`-kansioon ja päivitetty `project-docs/suunnitelma.md` commitilla."
        },
        "6-2": {
          miksi: "Ilman transaktiota historia valehtelee juuri silloin, kun jokin menee vikaan: tila vaihtuu, mutta historiarivi puuttuu, tai päinvastoin.",
          osat: [
            ["Tee tilanvaihtoreitti", "Toteuta rajapintareitti, joka vaihtaa yhden pelin tilan."],
            ["Tarkista siirtymä", "Hylkää siirtymä, jota siirtymätaulukko ei salli, ja palauta selkeä virhe."],
            ["Kirjoita transaktio", "Päivitä `games`-taulun tila ja lisää `status_history`-tauluun vanha tila, uusi tila ja aikaleima samassa transaktiossa."],
            ["Kokeile virhettä", "Aiheuta tarkoituksella virhe historiarivin lisäyksessä ja tarkista, ettei myöskään tila muuttunut."]
          ],
          valmis: "Tilanvaihto ja historiarivi tallentuvat yhdessä, ja epäonnistunut vaihto ei jätä voimaan tilaa eikä riviä.",
          tallenna: "Reitti commitilla repositoryyn. Miten varmistit transaktion, työviikon 6 päiväkirjaan.",
          apu: {
            otsikko: "Havainnekuva: näin tilanvaihto kulkee",
            images: [
              ["assets/tilanvaihto.svg", "Havainnekuva tilanvaihdosta. Jäsen painaa pelin sivulla tilanappia, ja selain lähettää Expressille pyynnön, jossa ovat peli ja uusi tila. Express tarkistaa siirtymätaulukosta, onko siirtymä sallittu. Estetty siirtymä palauttaa virheen, eikä mitään tallenneta. Sallittu siirtymä aloittaa transaktion: games-taulun tila päivitetään ja status_history-tauluun lisätään rivi, jossa ovat vanha tila, uusi tila ja aikaleima. Jos jompikumpi epäonnistuu, ROLLBACK peruu molemmat. Onnistuessa COMMIT tallentaa molemmat, ja pelin sivu näyttää uuden tilan ja historiarivin.", "Havainnekuva, ei kuvakaappaus. Tila ja historiarivi tallentuvat yhdessä tai eivät ollenkaan."]
            ]
          }
        },
        "6-3": {
          miksi: "Asiakkaan mukaan tilan vaihtamisen pitää olla yhden napin juttu, muuten kukaan ei kirjaa. Historia näyttää, että muutos jäi talteen.",
          osat: [
            ["Tee pelin sivu", "Tee pelin sivu, jolla näkyvät pelin tiedot ja nykyinen tila."],
            ["Lisää tilanappi", "Lisää pelin sivulle nappi, joka vaihtaa tilan yhdellä painalluksella ja päivittää näkymän heti."],
            ["Näytä historia", "Näytä pelin tilahistoria aikajärjestyksessä, uusin ylimpänä."],
            ["Lisää pelaan parhaillaan -merkintä", "Toteuta merkintä, jonka jäsen voi laittaa päälle ja pois."],
            ["Tarkista julkaistussa versiossa", "Vaihda tila julkaistussa versiossa ja tarkista, että uusi tila ja historiarivi näkyvät heti."]
          ],
          valmis: "Tilan vaihto yhdellä napilla näkyy heti pelin sivulla ja historiassa, ja pelaan parhaillaan -merkintä tallentuu.",
          tallenna: "Muutokset commitilla ja kuvakaappaus pelin sivusta historioineen `project-docs/`-kansioon."
        },
        "6-4": {
          miksi: "Käyttöliittymä voi näyttää oikealta, vaikka tietokanta olisi väärässä tilassa. Suora kysely todistaa, että historia on oikeasti tallessa.",
          osat: [
            ["Kirjaa testitapaus T06", "Normaali käyttö: tilanvaihto luo historiarivin, jonka vanha ja uusi tila täsmäävät. Kirjaa odotettu tulos testimatriisiin ennen ajoa."],
            ["Aja kysely ennen", "Aja todennuskysely `sqlite3`-komennolla ennen tilanvaihtoa ja tallenna tuloste."],
            ["Vaihda tila kerran", "Vaihda yhden pelin tila käyttöliittymästä."],
            ["Aja kysely jälkeen", "Aja sama kysely ja tarkista, että syntyi täsmälleen yksi rivi oikealla aikaleimalla."],
            ["Kirjaa tulos", "Kirjaa toteutunut tulos testimatriisiin ja liitä molemmat tulosteet päiväkirjaan."]
          ],
          valmis: "Testitapaus T06 on kirjattu odotuksineen ennen ajoa, ja kyselyn tulosteet ennen ja jälkeen todistavat yhden täsmäävän historiarivin.",
          tallenna: "`project-docs/testimatriisi.md` commitilla. sqlite3-tulosteet ennen ja jälkeen työviikon 6 päiväkirjaan."
        }
      },
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
      notEnough: "Tila vaihtuu, mutta historia syntyy vain selainpuolen muistiin; tilat on kopioitu aihekuvauksesta miettimättä siirtymiä."
    },

    /* ============ VAIHE 3: JÄSENET (7–10) ============ */
    7: {
      type: "feature",
      feature: "Jäsen rekisteröityy ja kirjautuu, ja vain pelin omistaja voi muokata peliä, myös suoralla rajapintakutsulla.",
      excerpt: "Pienen yhdistyksen maine ei kestä vuotoa.",
      connection: "Työviikoilla 4–6 kuka tahansa pystyi muokkaamaan mitä tahansa. Nyt pelit saavat omistajan, ja aiemmat muokkausreitit suojataan omistajuustarkistuksella. Kirjautuminen on edellytys julkiselle profiilille, jonka rakennat työviikolla 8.",
      deliverable: "Vertailumuistio istunto vs. token ohjaajan kommentilla, rekisteröityminen bcrypt-hashilla, kirjautuminen sekä suojatut muokkausreitit.",
      why: "”Pienen yhdistyksen maine ei kestä vuotoa”, ja omistajuustarkistuksen puute on juuri se virhe, jota selain ei koskaan paljasta.",
      done: "Toisen käyttäjän pelin muokkausyritys palauttaa 403 (curl-tuloste talteen); tietokannassa ja lokeissa ei näy selväkielistä salasanaa; vertailumuistiossa on ohjaajan kommentti.",
      record: "Kirjoita työviikon 7 merkintään: autentikointivertailun kriteerit ja päätös, miten suojasit reitit, sekä T07–T08:n tulokset ja curl-tulosteet.",
      skills: ["tietoturvan perusteet: hash ja istunto/token (s11)", "ratkaisuvaihtoehtojen vertailu yhdessä (p9)", "Reactin tilanhallinta ja context (k3)"],
      tehtavat: {
        "7-1": {
          miksi: "Kirjautumistapa päätetään yhdessä ohjaajan kanssa. Vertailu omilla kriteereillä on työnäyte ratkaisuvaihtoehtojen etsimisestä.",
          osat: [
            ["Valitse kriteerit", "Kirjaa omat kriteerit, esimerkiksi palvelinten määrä, tietoturva, toteutuksen työmäärä ja uloskirjautuminen."],
            ["Vertaile kaksi tapaa", "Kirjoita vertailumuistio: istuntopohjainen kirjautuminen ja token omia kriteereitäsi vasten."],
            ["Päätä ohjaajan kanssa", "Käy vertailu läpi ohjaajan kanssa ja tehkää päätös yhdessä. Pyydä ohjaajalta kommentti muistioon."],
            ["Kirjaa päätös", "Kirjoita päätös perusteluineen suunnitelman kenttään Autentikointitapa."]
          ],
          valmis: "Vertailumuistiossa ovat omat kriteerit, päätös ja ohjaajan kommentti.",
          tallenna: "Vertailumuistio `project-docs/`-kansioon ja päätös `project-docs/suunnitelma.md`-tiedostoon commitilla."
        },
        "7-2": {
          miksi: "Pienen yhdistyksen maine ei kestä vuotoa. Salasana tallennetaan vain yksisuuntaisesti salattuna, jotta vuotokaan ei paljasta sitä.",
          osat: [
            ["Tee käyttäjätaulu", "Tee migraatio `users`-taululle: käyttäjänimi, salasanan hash, sähköposti ja valinnainen profiilikuva."],
            ["Hashaa salasana", "Tallenna salasana bcrypt-hashina eli yksisuuntaisesti salattuna. Selväkielinen salasana ei tallennu koskaan."],
            ["Tee rekisteröitymisreitti", "Toteuta `POST /api/users` validointeineen samaan tapaan kuin työviikon 5 lomakkeessa."],
            ["Tarkista kanta ja lokit", "Rekisteröi testikäyttäjä ja tarkista tietokannasta ja palvelinlokista, ettei selväkielistä salasanaa näy missään."]
          ],
          valmis: "Rekisteröityminen toimii, ja tietokannassa ja lokeissa näkyy vain salasanan hash.",
          tallenna: "Muutokset commitilla ja tietokantatarkistuksen tuloste työviikon 7 päiväkirjaan."
        },
        "7-3": {
          miksi: "Omistajuustarkistuksen puute on virhe, jota selain ei koskaan paljasta. Työviikoilla 4–6 kuka tahansa pystyi muokkaamaan mitä tahansa.",
          osat: [
            ["Toteuta kirjautuminen", "Toteuta `POST /api/login`, joka vertaa salasanaa hashiin. Virheviesti ei paljasta, oliko väärin tunnus vai salasana."],
            ["Päätä elinkaari", "Päätä istunnon tai tokenin voimassaoloaika ja toteuta uloskirjautuminen, joka mitätöi sen."],
            ["Kirjoita middleware", "Kirjoita middleware eli välikäsittelijä, joka tarkistaa jokaisesta muokkauspyynnöstä kirjautumisen (401) ja omistajuuden (403)."],
            ["Suojaa vanhat reitit", "Lisää middleware pelin lisäykseen, muokkaukseen ja tilanvaihtoon."],
            ["Erota näkymät", "Tee selaimeen kirjautuneen ja vierailijan näkymät erikseen Reactin contextin avulla."]
          ],
          valmis: "Vain kirjautunut omistaja voi muokata peliään. Kirjautumaton pyyntö saa virhekoodin 401 ja toisen käyttäjän pyyntö virhekoodin 403.",
          tallenna: "Muutokset commitilla. Suojattujen reittien lista työviikon 7 päiväkirjaan.",
          apu: {
            otsikko: "Havainnekuva: näin suojattu pyyntö tarkistetaan",
            images: [
              ["assets/suojattu-pyynto.svg", "Havainnekuva suojatusta muokkauspyynnöstä. Selain lähettää muokkauspyynnön. Middleware tarkistaa ensin, onko pyytäjä kirjautunut: jos ei, vastaus on 401. Sitten se tarkistaa, omistaako kirjautunut käyttäjä pelin: jos ei, vastaus on 403. Vasta sen jälkeen muutos tehdään tietokantaan. Pelkkä kirjautumisen tarkistus ei riitä, koska silloin kuka tahansa kirjautunut voisi muokata toisen pelejä.", "Havainnekuva, ei kuvakaappaus. Middleware tarkistaa sekä kirjautumisen että omistajuuden."]
            ]
          }
        },
        "7-4": {
          miksi: "Tietoturva todennetaan hyökkäämällä omaa palvelua vastaan. Selaimesta et näe, suojaako palvelin reitin oikeasti.",
          osat: [
            ["Kirjaa testitapaus T07", "Virhetilanne: väärä salasana. Kirjautuminen estyy, eikä viesti paljasta, kumpi kenttä oli väärin. Kirjaa odotus ennen ajoa."],
            ["Kirjaa testitapaus T08", "Virhetilanne: toisen käyttäjän pelin muokkaus rajapinnan kautta saa virhekoodin 403. Kirjaa odotus ennen ajoa."],
            ["Hyökkää itseäsi vastaan", "Kirjaudu käyttäjänä A, ota istunto tai token talteen ja yritä muokata käyttäjän B peliä curlilla."],
            ["Kirjaa tulokset", "Kirjaa toteutuneet tulokset testimatriisiin ja tallenna curl-tulosteet."]
          ],
          valmis: "Testitapaukset T07 ja T08 on ajettu, ja curl-tuloste näyttää virhekoodin 403 toisen käyttäjän peliin.",
          tallenna: "`project-docs/testimatriisi.md` ja curl-tulosteet commitilla. Tulokset työviikon 7 päiväkirjaan."
        }
      },
      help: {
        title: "Kirjautumisvirta ja tietoturvan tarkistuslista",
        tree: "Rekisteröityminen\n  selain → POST /api/users → bcrypt.hash(salasana) → users-taulu\n\nKirjautuminen\n  selain → POST /api/login → bcrypt.compare → istunto tai token\n\nSuojattu pyyntö\n  selain → PATCH /api/games/:id\n        → onkoKirjautunut?         ei → 401 (ei kirjautunut)\n        → omistaakoTämänPelin?     ei → 403 (ei oikeutta)\n        → suorita muutos",
        actions: [
          "Kirjoita vertailumuistio istunnosta ja tokenista omilla kriteereilläsi ja pyydä ohjaajalta kommentti.",
          "Tallenna salasanat bcrypt-hashina. Tarkista tietokannasta, ettei selväkielistä salasanaa ole missään.",
          "Toteuta kirjautuminen ja päätä istunnon tai tokenin voimassaoloaika.",
          "Kirjoita middleware, joka tarkistaa sekä kirjautumisen että omistajuuden.",
          "Erota kirjautuneen ja vierailijan näkymät selainpuolella contextin avulla.",
          "Aja curlilla muokkauspyyntö toisen käyttäjän peliin ja tallenna 403-tuloste."
        ],
        code: "TIETOTURVAN TARKISTUSLISTA (työviikko 7)\n[ ] salasana hashattu, ei koskaan selväkielisenä kannassa eikä lokeissa\n[ ] kirjautumisen virheviesti ei paljasta, oliko väärin tunnus vai salasana\n[ ] jokainen muokkausreitti tarkistaa omistajuuden, ei vain kirjautumista\n[ ] istunnon tai tokenin voimassaolo on päätetty ja kirjattu\n[ ] uloskirjautuminen mitätöi istunnon tai tokenin\n\nT7 · väärä salasana → kirjautuminen estyy, viesti ei paljasta kumpi kenttä oli väärin\nT8 · toisen käyttäjän pelin muokkaus APIssa → 403\nOdotus ennen ajoa: ____________________  Toteutunut: ____________________",
        test: "Kirjaudu käyttäjänä A, ota talteen istunto tai token ja yritä sillä muokata käyttäjän B peliä curlilla; vastauksen pitää olla 403.",
        links: [["OWASP: Password Storage Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"]]
      },
      example: "Vertailumuistion kriteeri: ”SQLite ja yksi palvelin → istunto riittää; token olisi perusteltu vasta erillisellä API-asiakkaalla.”",
      notEnough: "”Valitsin token-kirjautumisen koska se on moderni”; salasanan pituusraja ainoana turvatoimena."
    },

    8: {
      type: "feature",
      termit: ["SQL"],
      feature: "Vierailija avaa jäsenen profiilin ilman tunnuksia ja näkee, mitä jäsen pelaa nyt, tilastot tiloittain ja laitteittain sekä tilahistorian.",
      excerpt: "Profiili on yhdistyksen yhteinen olohuone.",
      connection: "Työviikkojen 6 ja 7 tilahistoria ja käyttäjät saavat nyt näyteikkunan. Profiili kokoaa saman datan koosteiksi, jotka vierailijakin näkee ilman tunnuksia, ja toteutusta verrataan työviikon 2 rautalankaan. Kun jäsenillä on profiilit, työviikon 9 haku auttaa löytämään pelejä kasvavasta hyllystä.",
      deliverable: "Profiilin kooste-API GROUP BY -kyselyineen, itse rakennettu profiilinäkymä reitillä `/kayttaja/:nimi`, vierailijanäkymä sekä rautalankavertailu poikkeamineen.",
      why: "Profiili on asiakkaan ”yhteinen olohuone” ja koko palvelun näyteikkuna, ja suunnitelmasta toteuttaminen (p6) todentuu vain, jos luonnos ja lopputulos voidaan asettaa rinnakkain.",
      done: "Vierailija näkee profiilin tilastoineen yksityisessä selainikkunassa, ja tilastoluvut täsmäävät tietokannan tarkistuskyselyyn; rautalankavertailu on päiväkirjassa.",
      record: "Kirjoita työviikon 8 merkintään: poikkeamat rautalangasta perusteluineen, T09:n tulos sekä (jos aito bugi osui tälle viikolle) virheenkorjausketju 1 kokonaisuudessaan.",
      skills: ["käyttöliittymän toteutus suunnitelmista (p6)", "Reactin hookit ja reititysparametrit (k3)", "SQL-koosteet", "virheiden jäljitys kehittäjätyökaluilla (p2)"],
      tehtavat: {
        "8-1": {
          miksi: "Luvut lasketaan tietokannassa eikä selaimessa koko datasta. Yksi reitti kokoaa koko profiilin, jotta sivu ei tee viittä pyyntöä.",
          osat: [
            ["Kirjoita koostekyselyt", "Laske pelien määrä tiloittain ja laitteittain SQL:n GROUP BY -kyselyillä."],
            ["Hae pelaa nyt ja historia", "Hae pelit, joilla on pelaan parhaillaan -merkintä, ja jäsenen tilahistoria aikajärjestyksessä."],
            ["Kokoa yhteen reittiin", "Toteuta reitti, joka palauttaa koko profiilin datan yhdellä kutsulla, esimerkiksi `/api/users/:nimi/profiili`."],
            ["Tarkista luvut käsin", "Laske sama luku käsin tietokannasta ja vertaa sitä reitin palauttamaan lukuun."]
          ],
          valmis: "Koostereitti palauttaa tilastot, ja luvut täsmäävät käsin ajettuun tarkistuskyselyyn.",
          tallenna: "Reitti commitilla ja tarkistuskyselyn tuloste työviikon 8 päiväkirjaan.",
          sanat: ["SQL"]
        },
        "8-2": {
          miksi: "Profiili on asiakkaan sanoin yhdistyksen yhteinen olohuone ja koko palvelun näyteikkuna. Se on toinen alusta itse rakennettava näkymä.",
          osat: [
            ["Reititä nimen mukaan", "Lisää reitti `/kayttaja/:nimi` react-routerin parametrilla ja lue nimi sivulla."],
            ["Rakenna komponentit", "Tee itse ProfiiliOtsikko, TilastoKortit, LaiteJakauma, PelaaNytLista ja HistoriaLista ilman valmista käyttöliittymäkirjastoa."],
            ["Hae data omalla hookilla", "Hae profiilin kooste omalla hookilla ja käsittele lataus- ja virhetila kuten työviikolla 4."],
            ["Käsittele tuntematon nimi", "Näytä selkeä viesti, jos käyttäjää ei löydy."],
            ["Jäljitä virheet", "Kun data ei näy odotetusti, jäljitä syy kehittäjätyökalujen Network-välilehdeltä ja palvelinlokista."]
          ],
          valmis: "Profiilisivu aukeaa osoitteesta `/kayttaja/<nimi>`, ja tuntematon nimi näyttää selkeän viestin.",
          tallenna: "Muutokset commitilla ja kuvakaappaus profiilisivusta `project-docs/`-kansioon."
        },
        "8-3": {
          miksi: "Asiakas haluaa, että vieraat näkevät profiilit ilman tunnuksia. Muokkaustoiminnot eivät saa näkyä vierailijalle.",
          osat: [
            ["Avaa yksityinen ikkuna", "Avaa profiili yksityisessä selainikkunassa ilman kirjautumista."],
            ["Tarkista näkyvät tiedot", "Tarkista, että tilastot, pelaa nyt -lista ja historia näkyvät."],
            ["Tarkista piilotetut toiminnot", "Tarkista, ettei vierailija näe tilanappia eikä muokkaustoimintoja."],
            ["Vertaa tietokantaan", "Vertaa sivun tilastolukuja tietokannan tarkistuskyselyyn."]
          ],
          valmis: "Vierailija näkee profiilin tilastoineen yksityisessä ikkunassa, ja luvut täsmäävät tietokantaan.",
          tallenna: "Kuvakaappaus vierailijanäkymästä `project-docs/`-kansioon ja vertailun tulos työviikon 8 päiväkirjaan."
        },
        "8-4": {
          miksi: "Suunnitelmasta toteuttaminen todentuu vain, jos luonnos ja lopputulos voidaan asettaa rinnakkain.",
          osat: [
            ["Aseta rinnakkain", "Aseta työviikon 2 rautalanka ja profiilisivun kuvakaappaus rinnakkain samaan kuvaan tai dokumenttiin."],
            ["Kirjaa poikkeamat", "Kirjaa jokainen poikkeama rautalangasta ja sen perustelu."],
            ["Kirjaa testitapaus T09", "Raja: profiili, jolla ei ole yhtään peliä, näyttää nollatilastot ja tyhjän tilan viestin eikä kaadu. Kirjaa odotus ennen ajoa."],
            ["Aja testitapaus T09", "Aja testi uudella käyttäjällä ja kirjaa toteutunut tulos testimatriisiin."],
            ["Tarkista virheenkorjausketju 1", "Jos löysit tällä viikolla aidon bugin, kirjaa se virheenkorjausketjuksi 1 testimatriisiin. Jos et löytänyt, kirjaa se päiväkirjaan."]
          ],
          valmis: "Rautalanka ja toteutus ovat rinnakkain poikkeamineen, ja testitapaus T09 on ajettu.",
          tallenna: "Rinnakkaiskuva `project-docs/`-kansioon, T09 `project-docs/testimatriisi.md`-tiedostoon ja poikkeamat perusteluineen työviikon 8 päiväkirjaan."
        }
      },
      help: {
        title: "SQL-koosteet ja profiilin komponenttipuu",
        tree: "ProfiiliSivu (/kayttaja/:nimi)\n├─ ProfiiliOtsikko      nimi · kuva · liittymispäivä\n├─ TilastoKortit        lukumäärät tiloittain\n├─ LaiteJakauma        lukumäärät laitteittain\n├─ PelaaNytLista       pelaa_nyt = 1\n└─ HistoriaLista       status_history aikajärjestyksessä",
        actions: [
          "Kirjoita koostekyselyt SQL:llä. Älä laske lukuja selainpuolella koko datasta.",
          "Kokoa profiilin data yhteen API-reittiin, jotta sivu ei tee viittä pyyntöä.",
          "Rakenna tilastokortit ja listat itse ilman valmista käyttöliittymäkirjastoa.",
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
      feature: "Jäsen löytää pelin nimen, laitteen ja tilan mukaan, ja haku ilman osumia kertoo, miten pääsee takaisin koko listaan.",
      connection: "Työviikon 8 profiili näytti, että pelejä kertyy nopeasti. Nyt pelilista saa haun ja suodatuksen, jotka tehdään tietokantakyselyssä eikä selaimen muistissa. Samalla tuot toisen ulkoisen komponentin ja kirjaat kokoelmien päätöskriteerit, jotta asiakas voi työviikolla 10 kokeilla koko palvelua.",
      deliverable: "Haku ja suodatus API-parametreina parametrisoiduilla kyselyillä, suodatuskäyttöliittymä tyhjän tuloksen tiloineen, perustelumuistio toisesta ulkoisesta komponentista sekä kokoelmien laajennuspäätöksen kriteerit.",
      why: "Ilman hakua arkisto muuttuu käyttökelvottomaksi heti kun pelejä on kymmeniä; ulkoisen komponentin perustelu erottaa kirjaston käyttäjän kirjaston ymmärtäjästä (k4). Kokoelmat on tietoisesti erotettu omaksi laajennuspäätökseksi: yksi kunnolla tehty ominaisuus opettaa enemmän kuin kolme puolivalmista.",
      done: "Suodatus ”NES + pelattu läpi” palauttaa vain oikeat rivit sekä käyttöliittymässä että suoralla API-kutsulla; haku ilman osumia näyttää tyhjän tilan viestin; perustelumuistio ulkoisesta komponentista ja kokoelmien päätöskriteerit ovat repositoryssa.",
      record: "Kirjoita työviikon 9 merkintään: miten kokosit WHERE-ehdot turvallisesti, mikä ulkoinen komponentti valikoitui ja miksi, arviosi sen itse tekemisen työmäärästä sekä kokoelmien päätöskriteerit.",
      skills: ["ulkoiset komponentit perustellusti (k4)", "rajapinnat ja kyselyparametrit (s10)", "parametrisoidut kyselyt ja SQL-injektion torjunta"],
      tehtavat: {
        "9-1": {
          miksi: "Ilman hakua arkisto on käyttökelvoton heti, kun pelejä on kymmeniä. Parametrisoitu kysely torjuu SQL-injektion eli hyökkäyksen, jossa käyttäjä syöttää kyselyyn omaa SQL:ää.",
          osat: [
            ["Lisää kyselyparametrit", "Lisää reittiin `GET /api/games` parametrit `nimi`, `laite` ja `tila`."],
            ["Kokoa ehdot listasta", "Rakenna WHERE-ehdot listasta ja anna arvot aina parametreina. Älä liimaa arvoja kyselymerkkijonoon."],
            ["Suodata tietokannassa", "Tee suodatus kyselyssä. Älä suodata selaimessa koko dataa."],
            ["Kokeile injektiota", "Syötä hakuun heittomerkki tai pätkä SQL:ää ja tarkista, että kysely käsittelee sen tekstinä."]
          ],
          valmis: "Suodatus toimii kyselyparametreilla suoraan rajapinnasta, eikä hakuun syötetty SQL muuta kyselyä.",
          tallenna: "Muutokset commitilla ja esimerkkikutsut tuloksineen työviikon 9 päiväkirjaan.",
          sanat: ["SQL"]
        },
        "9-2": {
          miksi: "Käyttäjän pitää ymmärtää, miksi tulos on tyhjä ja miten pääsee takaisin koko listaan.",
          osat: [
            ["Tee suodatuskentät", "Tee hakukenttä nimelle ja valinnat laitteelle ja tilalle."],
            ["Päivitä tulokset", "Hae tulokset rajapinnasta aina, kun suodatin muuttuu."],
            ["Tee tyhjä tila", "Näytä viesti, kun hakuun ei löydy osumia, ja nappi, joka nollaa suodattimet."],
            ["Vertaa suoraan kutsuun", "Aja sama suodatus käyttöliittymästä ja suoraan osoitteesta kyselyparametreilla. Tulosten pitää olla samat."]
          ],
          valmis: "Suodatus ”NES + pelattu läpi” palauttaa samat rivit käyttöliittymässä ja suorassa kutsussa, ja tyhjä haku näyttää viestin ja nollausnapin.",
          tallenna: "Kuvakaappaus käyttöliittymän ja suoran kutsun rinnakkaisista tuloksista `project-docs/`-kansioon ja muutokset commitilla."
        },
        "9-3": {
          miksi: "Perusteltu valinta erottaa kirjaston käyttäjän kirjaston ymmärtäjästä. Arvio itse tekemisen hinnasta näyttää, miksi kirjasto kannattaa.",
          osat: [
            ["Nimeä tarve", "Päätä, mihin tarpeeseen komponentti tulee, esimerkiksi kaavio profiiliin."],
            ["Vertaile kaksi ehdokasta", "Täytä vertailu: tarve, koko ja riippuvuudet, saavutettavuus ja arvio itse tekemisen työmäärästä."],
            ["Asenna ja konfiguroi", "Asenna valittu komponentti ja käytä sitä yhdessä paikassa. Kirjaa, mitä asetuksia muutit ja miksi."],
            ["Kirjaa perustelu", "Kirjoita perustelumuistio `project-docs/`-kansioon ja päätös suunnitelman kenttään Toinen ulkoinen komponentti."],
            ["Kirjaa riippuvuus", "Lisää README:hen kirjasto, versio ja mihin sitä käytetään."]
          ],
          valmis: "Komponentti toimii palvelussa, ja perustelumuistiossa ovat vertailu, valinta ja arvio itse tekemisen työmäärästä.",
          tallenna: "Perustelumuistio `project-docs/`-kansioon, päätös `project-docs/suunnitelma.md`-tiedostoon ja asennus commitilla."
        },
        "9-4": {
          miksi: "Kokoelmat on tietoisesti erotettu omaksi päätöksekseen: yksi kunnolla tehty ominaisuus opettaa enemmän kuin kolme puolivalmista.",
          osat: [
            ["Kirjaa kokoelmien kriteerit", "Kirjaa suunnitelman kenttään Kokoelmien laajennuspäätös, millä ehdoilla kokoelmat toteutetaan. Päätös tehdään vasta työviikolla 11."],
            ["Kirjaa testitapaus T10", "Normaali käyttö: suodatus laitteen ja tilan mukaan palauttaa vain oikeat rivit. Kirjaa odotus ennen ajoa."],
            ["Kirjaa testitapaus T11", "Raja: haku ilman osumia näyttää tyhjän tilan viestin. Kirjaa odotus ennen ajoa."],
            ["Aja ja kirjaa", "Aja testitapaukset ja kirjaa toteutuneet tulokset testimatriisiin."]
          ],
          valmis: "Kokoelmien päätöskriteerit ovat suunnitelmassa, ja testitapaukset T10 ja T11 on ajettu.",
          tallenna: "`project-docs/suunnitelma.md` ja `project-docs/testimatriisi.md` commitilla. Kriteerit työviikon 9 päiväkirjaan."
        }
      },
      help: {
        title: "Suodatuksen SQL-runko ja komponenttivertailu",
        tree: "GET /api/games?nimi=&laite=&tila=\n  ehdot = []   arvot = []\n  jos nimi  → ehdot.push(\"nimi LIKE ?\")   arvot.push('%' + nimi + '%')\n  jos laite → ehdot.push(\"laite = ?\")     arvot.push(laite)\n  jos tila  → ehdot.push(\"tila = ?\")      arvot.push(tila)\n  SELECT * FROM games\n  [ WHERE ehdot.join(\" AND \") ]\n  ORDER BY nimi",
        actions: [
          "Rakenna WHERE-ehdot listasta ja anna arvot aina parametreina. Älä liimaa niitä kyselymerkkijonoon: liimattuun kyselyyn käyttäjä voi syöttää omaa SQL:ää, ja sitä hyökkäystä kutsutaan SQL-injektioksi.",
          "Toteuta suodatuskentät ja päivitä tulokset API-kutsulla, älä suodata koko dataa selaimessa.",
          "Tee tyhjän tuloksen tila, jossa on viesti ja nappi suodattimien nollaukseen.",
          "Vertaile kaksi ulkoista komponenttiehdokasta, valitse toinen ja arvioi mitä sen tekeminen itse maksaisi.",
          "Kirjaa suunnitelmaan kokoelmien laajennuspäätöksen kriteerit: toteutus vain, jos P0 ja testaus ovat aikataulussa työviikolla 11."
        ],
        code: "KOMPONENTTIVERTAILUN POHJA\nEhdokas | Mihin tarpeeseen | Koko ja riippuvuudet | Saavutettavuus | Itse tekemisen arvio\nA       |                  |                      |                |\nB       |                  |                      |                |\nValinta ja perustelu (2–3 virkettä): ______________________________\nRiippuvuus kirjattu dokumentaatioon: kyllä / ei\n\nKOKOELMIEN PÄÄTÖSKRITEERIT (päätös työviikolla 11)\n[ ] P0 on kokonaan valmis ja tuotannossa\n[ ] testimatriisi on ajettavissa aikataulussa\n[ ] jäljellä on riittävästi aikaa omalle haaralle vaiheessa 4\nMuuten: kokoelmat siirtyvät v1.1-listalle. Rajauspäätös, ei epäonnistuminen.",
        test: "Aja sama suodatus sekä käyttöliittymästä että suoraan API-osoitteesta kyselyparametreilla: tulosten pitää olla identtiset.",
        links: [["OWASP: SQL Injection Prevention", "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"]]
      },
      example: "Komponenttiperustelu: ”Kaaviokirjasto piirtää saavutettavan pylväskaavion; itse tehtynä kaavion piirtäminen veisi arviolta viikon ja olisi ydinosaamisen ulkopuolella.”",
      notEnough: "Suodatus toteutettu selainpuolella `filter()`-metodilla koko datalle; ”Asensin kirjaston X” ilman perustelua, konfiguraation ymmärrystä tai riippuvuuden kirjausta."
    },

    10: {
      type: "katselmointi",
      feature: "Asiakkaan edustaja on kokeillut julkaistua palvelua itse, ja hänen havaintonsa ovat priorisoituina issueina.",
      excerpt: "Noin puolivälissä haluan itse kokeilla palvelua.",
      connection: "Vaiheet 2 ja 3 on rakennettu omien oletusten varassa. Nyt asiakkaan edustaja käyttää julkaistua palvelua itse koko polun rekisteröitymisestä toisen jäsenen profiiliin. Hänen havainnoistaan johdetaan vaiheen 4 työjärjestys ja työviikon 11 palautemuutos.",
      deliverable: "Katselmointimuistio (rooli, ajankohta, vähintään viisi lainausta erillään tulkinnasta), priorisoitu issue-taulu ja yhteenvetoviesti asiakkaalle.",
      why: "Tämä on viimeinen hetki muuttaa suuntaa halvalla: vaiheen 4 työjärjestys johdetaan tästä palautteesta, ei omista mieltymyksistä.",
      done: "Katselmointimuistiossa on vähintään viisi asiakkaan havaintoa hänen omilla sanoillaan erillään omasta tulkinnasta, ja issueissa on niistä johdetut priorisoidut tehtävät.",
      record: "Kirjoita työviikon 10 merkintään: yllättävin havainto ja miksi se yllätti, mitkä muutokset sovittiin ennen v1.0:aa ja mitkä siirtyivät, sekä linkki katselmointimuistioon.",
      skills: ["version katselmointi (s3)", "ratkaisujen arviointi yhdessä (p10)", "asiakaslähtöinen viestintä (s2)"],
      tehtavat: {
        "10-1": {
          miksi: "Katselmointi on viimeinen hetki muuttaa suuntaa halvalla. Valmis runko pitää tilaisuuden asiakkaan käytössä eikä sinun esittelyssäsi.",
          osat: [
            ["Varmista katselmoija", "Tarkista ohjaajalta asiakkaan edustaja. Hän on nimetty ulkopuolinen henkilö, ei oma ohjaava opettajasi."],
            ["Kirjoita demopolku", "Kirjaa katselmointimuistioon, mitä asiakas tekee itse: rekisteröityy, lisää pelin, vaihtaa tilan, katsoo profiiliaan ja löytää toisen jäsenen profiilin."],
            ["Kirjoita loppukysymykset", "Kirjaa kysymykset, jotka esität lopuksi, esimerkiksi mikä oli helpointa ja mitä puuttuu, jotta asiakas ottaisi palvelun käyttöön."],
            ["Tarkista versio", "Tarkista, että demopolku toimii julkaistussa versiossa, ja kirjaa version commit muistioon."]
          ],
          valmis: "Katselmointimuistiossa ovat demopolku, loppukysymykset ja julkaistun version tunniste.",
          tallenna: "Katselmointimuistion runko `project-docs/`-kansioon commitilla."
        },
        "10-2": {
          miksi: "Ulkopuolinen käyttäjä löytää ongelmat, joita tekijä ei enää näe. Siksi et neuvo, ellei työ pysähdy kokonaan.",
          osat: [
            ["Kirjaa rooli ja ajankohta", "Kirjaa muistioon katselmoijan rooli ja ajankohta, ei nimeä. Nimet eivät kuulu julkiseen repositoryyn."],
            ["Anna asiakkaan käyttää", "Anna asiakkaan tehdä demopolku itse. Älä neuvo, ellei työ pysähdy kokonaan."],
            ["Kirjaa omat sanat", "Kirjaa lyhyinä lainauksina, mitä asiakas tekee ja sanoo, vähintään viisi havaintoa. Tarkemmat muistiinpanot lähetät ohjaajalle Teamsissa, jos hän pyytää."],
            ["Esitä loppukysymykset", "Esitä valmistellut kysymykset ja kirjaa vastaukset asiakkaan sanoin."]
          ],
          valmis: "Muistiossa ovat rooli, ajankohta ja vähintään viisi asiakkaan havaintoa hänen omilla sanoillaan.",
          tallenna: "Katselmointimuistio `project-docs/`-kansioon commitilla."
        },
        "10-3": {
          miksi: "Vaiheen 4 työjärjestys johdetaan asiakkaan havainnoista, ei omista mieltymyksistä. Siksi sanat ja tulkinta pidetään erillään.",
          osat: [
            ["Erota sarakkeet", "Kirjaa muistioon asiakkaan sanat ja oma tulkintasi eri sarakkeisiin."],
            ["Tarkista erottelu", "Lue muistio läpi ja tarkista, että jokaisesta rivistä näkee, mikä on asiakkaan sanomaa."],
            ["Priorisoi yhdessä", "Päättäkää yhdessä ohjaajan ja asiakkaan edustajan kanssa, mitkä muutokset tehdään ennen v1.0:aa ja mitkä siirtyvät v1.1:een."],
            ["Kirjaa päätökset", "Merkitse jokaiselle havainnolle päätös: ennen v1.0:aa tai v1.1."]
          ],
          valmis: "Jokaisella havainnolla on erillinen tulkinta ja yhdessä sovittu päätös.",
          tallenna: "Päivitetty katselmointimuistio commitilla. Yllättävin havainto työviikon 10 päiväkirjaan."
        },
        "10-4": {
          miksi: "Sovittu muutos ilman issueta unohtuu. Yhteenveto kertoo asiakkaalle, että häntä kuunneltiin.",
          osat: [
            ["Tee issuet", "Tee jokaisesta ennen v1.0:aa sovitusta muutoksesta oma issue, joka viittaa muistion havaintoon."],
            ["Järjestä issue-taulu", "Järjestä issue-taulu uudelleen ja merkitse v1.1:een siirtyvät erikseen."],
            ["Kirjoita yhteenveto", "Kirjoita asiakkaalle lyhyt viesti ilman teknistä jargonia: mitä muutetaan ja mitä siirtyy."],
            ["Lähetä ja tallenna", "Lähetä viesti ja tallenna se tiedostoon `project-docs/viestit.md`. Kirjaa vastaanottajasta vain rooli."]
          ],
          valmis: "Jokaisesta sovitusta muutoksesta on issue, ja yhteenveto on lähetetty ja tallennettu.",
          tallenna: "Issue-taulun linkki työviikon 10 päiväkirjaan ja `project-docs/viestit.md` commitilla."
        }
      },
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

    /* ============ VAIHE 4: VIIMEISTELY (11–15) ============ */
    11: {
      type: "feature",
      feature: "Asiakkaan tärkein toive on muutettu palveluun, ja muutos on tuotannossa pull requestin kautta.",
      connection: "Työviikon 10 palaute muuttuu nyt koodiksi. Teet tärkeimmän muutoksen omassa haarassa ja yhdistät sen pääversioon pull requestilla, ja samalla suunnitelman arviot testataan toteumaa vasten. Kokoelmapäätös ratkaisee, mitä vaiheen 4 loppuviikoilla rakennetaan.",
      deliverable: "Feature-haara ja pull request kuvauksineen, muutos tuotannossa, päivitetty suunnitelma arvioineen ja kokoelmapäätöksineen sekä asiakasviesti.",
      why: "Hallittu yhdistäminen pääversioon (s13) on oma vaatimuksensa, ja palautteesta johdettu muutos todistaa, että katselmointi ei ollut seremonia.",
      done: "PR:ssä on kuvaus, viittaus palautteeseen ja katselmointikommentti; muutos on tuotannossa; suunnitelman muutosvertailu (diff) näyttää päivitetyt arviot.",
      record: "Kirjoita työviikon 11 merkintään: mikä muutos valittiin ja miksi, miten arvio erosi toteumasta, kokoelmien päätös perusteluineen sekä PR-linkki.",
      skills: ["liittäminen olemassa olevaan versioon (s13)", "versionhallinnan työnkulku (s12)", "suunnittelun ja arvioinnin päivitys (s6)"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "11-1": {
          miksi: "Palautteesta johdettu muutos todistaa, että katselmointi ei ollut seremonia.",
          osat: [
            ["Valitse muutos", "Valitse katselmointimuistiosta tärkein ennen v1.0:aa sovittu muutos."],
            ["Viittaa havaintoon", "Kirjaa issueen, mihin muistion havaintoon muutos perustuu. Lainaa asiakkaan sanat."],
            ["Kirjaa kriteerit", "Kirjoita issueen havaittavat hyväksymiskriteerit ennen koodia."],
            ["Arvioi työmäärä", "Kirjaa issueen työmääräarvio, jota verrataan toteumaan tämän viikon lopussa."]
          ],
          valmis: "Issuessa ovat viittaus asiakkaan havaintoon, hyväksymiskriteerit ja työmääräarvio.",
          tallenna: "Issue GitHubissa. Valinnan perustelu työviikon 11 päiväkirjaan."
        },
        "11-2": {
          miksi: "Oma haara pitää pääversion toimivana, ja pienet commitit tekevät muutoksesta katselmoitavan.",
          osat: [
            ["Luo haara", "Luo haara muodossa `feature/…`, esimerkiksi `feature/tilanappi-ensisijaiseksi`."],
            ["Tee pienet commitit", "Tee muutos pienin commitein: yksi looginen muutos kerrallaan ja kuvaava viesti."],
            ["Testaa kriteereitä vasten", "Tarkista jokainen hyväksymiskriteeri ja aja siihen liittyvä testitapaus uudelleen."],
            ["Lisää uusi testitapaus", "Kirjaa muutokselle testimatriisiin uusi testitapaus odotuksineen ennen ajoa ja aja se."]
          ],
          valmis: "Muutos on omassa haarassa kuvaavasti nimetyin commitein, ja hyväksymiskriteerit on tarkistettu.",
          tallenna: "Haara ja commitit repositoryssa. Testitulokset `project-docs/testimatriisi.md`-tiedostoon.",
          sanat: ["haara", "commit"]
        },
        "11-3": {
          miksi: "Hallittu yhdistäminen pääversioon on oma arvioitava vaatimuksensa. Kuvaus ja katselmointi näyttävät, mitä muuttui ja miten se testattiin.",
          osat: [
            ["Avaa pull request", "Avaa pull request ja kirjoita kuvaus: mitä, miksi, miten testattu sekä riskit ja rajaukset."],
            ["Katselmoi oma muutos", "Käy muutos läpi kuin vieraan koodina ja kirjoita pull requestiin katselmointikommentti."],
            ["Yhdistä ja ratkaise konflikti", "Yhdistä pääversioon ja ratkaise konflikti hallitusti. Jos konfliktia ei synny, pyydä ohjaajalta harjoituskonflikti."],
            ["Julkaise ja tarkista", "Julkaise pääversio ja tarkista muutos tuotannossa."]
          ],
          valmis: "Pull requestissa ovat kuvaus, viittaus palautteeseen ja katselmointikommentti, ja muutos on tuotannossa.",
          tallenna: "Pull requestin linkki työviikon 11 päiväkirjaan.",
          sanat: ["PR"]
        },
        "11-4": {
          miksi: "Arvio vastaan toteuma näyttää, miten osaat arvioida työtä. Kokoelmapäätös tehdään kriteereillä, jotka kirjasit työviikolla 9.",
          osat: [
            ["Vertaa arviot toteumaan", "Kirjaa suunnitelmaan issueiden arvio ja toteuma tunteina sekä se, mitä opit arvioinnista."],
            ["Tee kokoelmapäätös", "Päätä työviikon 9 kriteereillä: kokoelmat omana haarana vaiheessa 4 tai v1.1-listalle. Siirto on rajauspäätös, ei epäonnistuminen."],
            ["Lataa suunnitelma", "Päivitä suunnitelmalomakkeen kentät, lataa `suunnitelma.md` ja korvaa repositoryn vanha tiedosto."],
            ["Kerro asiakkaalle", "Kerro asiakkaalle lyhyesti ilman jargonia, mikä muuttui, ja tallenna viesti tiedostoon `project-docs/viestit.md`."]
          ],
          valmis: "Suunnitelman muutosvertailu (diff) näyttää päivitetyt arviot ja kokoelmapäätöksen perusteluineen, ja asiakasviesti on tallennettu.",
          tallenna: "`project-docs/suunnitelma.md` ja `project-docs/viestit.md` commitilla."
        }
      },
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
      example: "PR-kuvaus: ”Nostaa tilanvaihdon pelikortin ensisijaiseksi toiminnoksi (katselmointi, havainto 2). Testattu T06 uudelleen + uusi tapaus mobiilissa.”",
      notEnough: "Suora push mainiin ”koska teen yksin”; PR ilman kuvausta."
    },

    12: {
      type: "feature",
      feature: "Jäsen lisää pelin puhelimella ja pelkällä näppäimistöllä, ja Lighthouse-luvut ennen ja jälkeen näyttävät, mikä parani.",
      connection: "Kaikki näkymät ovat nyt olemassa, ja palautemuutos on tehty. Ennen testausviikkoa viimeistelet ne laitteille ja käyttötavoille, joita et itse käytä kehittäessäsi: puhelimelle ja pelkälle näppäimistölle. Työviikolla 13 koko palvelu testataan tässä kunnossa tuotantoa vasten.",
      deliverable: "Omat taitekohdat ja mobiiliin korjatut näkymät, tarkistettu näppäinpolku ja fokus, korjatut kontrastit ja label-kytkennät sekä Lighthouse-raportit ennen ja jälkeen.",
      why: "Saavutettavuus on webprofiilissa vaatimus, ei kaunistus. Yhdistyksen jäsenet käyttävät palvelua sohvalta puhelimella.",
      done: "Pelin lisäys onnistuu puhelimella ja pelkällä näppäimistöllä; Lighthouse-saavutettavuus on kirjattu ennen ja jälkeen, ja jokainen korjaus on selitetty omin sanoin.",
      record: "Kirjoita työviikon 12 merkintään: valitsemasi taitekohdat perusteluineen, mitkä ongelmat näppäintestaus paljasti, Lighthouse-luvut ennen ja jälkeen sekä T12:n tulos.",
      skills: ["responsiivinen CSS itse", "saavutettavuus: näppäinkäyttö, kontrasti, labelit", "käyttöliittymän viimeistely suunnitelmia vasten (p6)"],
      tehtavat: {
        "12-1": {
          miksi: "Yhdistyksen jäsenet käyttävät palvelua sohvalta puhelimella. CSS on omaa käsialaasi, joten taitekohdat ovat oma päätöksesi.",
          osat: [
            ["Aja Lighthouse ennen", "Aja Lighthouse keskeisille näkymille ja ota ennen-luvut talteen ennen ensimmäistäkään korjausta."],
            ["Käy polut puhelimella", "Käy rekisteröityminen, pelin lisäys, tilanvaihto ja profiili läpi oikealla puhelimella."],
            ["Päätä taitekohdat", "Päätä taitekohdat sen mukaan, missä sisältö hajoaa, ei laitemallien mukaan."],
            ["Korjaa näkymät", "Korjaa keskeiset näkymät omalla CSS:llä niin, ettei vaakavieritystä synny."],
            ["Kirjaa perustelu", "Kirjoita taitekohdat perusteluineen suunnitelman kenttään Responsiivisuuden taitekohdat."]
          ],
          valmis: "Keskeiset näkymät toimivat puhelimella ilman vaakavieritystä, ja taitekohdat on perusteltu suunnitelmassa.",
          tallenna: "Lighthouse-raportit ennen ja kuvakaappaukset puhelimelta `project-docs/`-kansioon, taitekohdat suunnitelmaan ja CSS commitilla."
        },
        "12-2": {
          miksi: "Saavutettavuus on webprofiilissa vaatimus, ei kaunistus. Näppäintestaus löytää katkot, joita hiirellä ei huomaa.",
          osat: [
            ["Irrota hiiri", "Tee rekisteröityminen ja pelin lisäys alusta loppuun pelkällä näppäimistöllä."],
            ["Tarkista fokusjärjestys", "Tarkista, että fokus etenee sivun luettavassa järjestyksessä ylhäältä alas."],
            ["Tarkista fokuksen näkyvyys", "Tarkista, että fokus näkyy jokaisessa kohteessa, myös omissa napeissa."],
            ["Korjaa katkot", "Korjaa jokainen kohta, johon jäit jumiin, ja kirjaa korjaus omin sanoin."]
          ],
          valmis: "Rekisteröityminen ja pelin lisäys onnistuvat pelkällä näppäimistöllä, ja fokus näkyy koko ajan.",
          tallenna: "Korjaukset commitilla ja näppäintestauksen löydökset työviikon 12 päiväkirjaan."
        },
        "12-3": {
          miksi: "Violetti aksentti ja omat komponentit voivat jäädä alle kontrastivaatimuksen. Ruudunlukija tarvitsee labelit, alt-tekstit ja otsikkorakenteen.",
          osat: [
            ["Mittaa kontrastit", "Mittaa tekstin kontrasti myös violetilla aksentilla. Vaatimus on vähintään 4.5:1."],
            ["Tarkista alt-tekstit", "Anna jokaiselle merkitykselliselle kuvalle alt-teksti, esimerkiksi profiilikuvalle."],
            ["Tarkista label-kytkennät", "Tarkista, että jokainen kenttä ja virheviesti on kytketty ohjelmallisesti."],
            ["Tarkista otsikot", "Tarkista, että otsikot etenevät h1 → h2 → h3 ilman hyppyjä."]
          ],
          valmis: "Kontrastit täyttävät vaatimuksen, ja jokaisella kentällä ja merkityksellisellä kuvalla on tekstivastine.",
          tallenna: "Korjaukset commitilla ja tarkistuslistan tulos työviikon 12 päiväkirjaan."
        },
        "12-4": {
          miksi: "Ennen- ja jälkeen-luvut näyttävät, mikä parani. Jokainen muutos selitetään omin sanoin eikä pelkkänä lukuna.",
          osat: [
            ["Aja Lighthouse jälkeen", "Aja Lighthouse samoille näkymille kuin ennen korjauksia ja tallenna raportit."],
            ["Selitä erot", "Selitä omin sanoin, mistä korjauksesta kukin muutos tuli."],
            ["Kirjaa testitapaus T12", "Raja: profiilisivu 320 pikselin leveydellä ilman vaakavieritystä, ja toiminnot ovat käytettävissä. Kirjaa odotus ennen ajoa."],
            ["Aja testitapaus T12", "Aja testi ja kirjaa toteutunut tulos testimatriisiin."]
          ],
          valmis: "Lighthouse-raportit ennen ja jälkeen on tallennettu, jokainen ero on selitetty, ja testitapaus T12 on ajettu.",
          tallenna: "Lighthouse-raportit `project-docs/`-kansioon, T12 `project-docs/testimatriisi.md`-tiedostoon ja luvut työviikon 12 päiväkirjaan."
        }
      },
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
      feature: "Koko testimatriisi on ajettu tuotantoversiota vasten, ja löydökset on korjattu täydellisinä ketjuina regressiotestiin asti.",
      connection: "Työviikkojen 4–12 aikana testimatriisiin kertyi yksittäisiä testitapauksia. Nyt matriisi täydennetään ja ajetaan ensimmäistä kertaa kokonaisuutena tuotantoa vasten, ja löydökset korjataan täydellisinä ketjuina. Matriisi on turvaverkko, jota vasten koodia siistitään työviikolla 14.",
      deliverable: "Täydennetty testimatriisi tuloksineen, virheenkorjausketju 2 regressiotestiin asti sekä korjauscommitit.",
      why: "Testaus ilman ennalta kirjattua odotusta on klikkailua, ja ilman toistamisohjetta korjaus on arvaus.",
      done: "Vähintään 12 testitapausta on kirjoitettu ja ajettu työviikkoon 13 mennessä: matriisin jokaisella rivillä on odotettu tulos (kirjattu ennen ajoa) ja toteutunut tulos. Vähintään yksi täydellinen ketju on viety regressiotestiin asti tällä viikolla.",
      record: "Kirjoita työviikon 13 merkintään: montako tapausta epäonnistui ja mitä ne paljastivat, ketju 2 kokonaisuudessaan sekä mitä regressiotestasit.",
      skills: ["järjestelmällinen testaus (p3)", "virheiden etsintä ja korjaus (p2)", "testiluokat ja regressio"],
      resources: [["Lataa dokumentointipohjat (.docx)", "downloads/nayton-dokumentointipohjat.docx", true]],
      tehtavat: {
        "13-1": {
          miksi: "Testaus ilman ennalta kirjattua odotusta on klikkailua. Luokat pitävät huolen, että testaat myös rajat ja virhetilanteet.",
          osat: [
            ["Kokoa aiemmat tapaukset", "Tarkista, että testimatriisissa ovat kaikki aiemmat testitapaukset T01–T12."],
            ["Lisää uudet tapaukset", "Lisää tapauksia niin, että vähintään 12 on kirjoitettu ja ajettu työviikkoon 13 mennessä kolmessa luokassa: normaali käyttö, rajat ja virhetilanteet."],
            ["Tasapainota luokat", "Tarkista, että jokaisessa luokassa on suunnilleen kolmannes tapauksista."],
            ["Kirjaa odotukset", "Kirjoita jokaisen tapauksen odotettu tulos ennen kuin ajat sen."]
          ],
          valmis: "Matriisissa on vähintään 12 testitapausta kolmessa luokassa, ja jokaisella on odotettu tulos ennen ajoa. Koko projektissa tapauksia on vähintään 14, sillä testitapaus T14 ajetaan työviikolla 16.",
          tallenna: "`project-docs/testimatriisi.md` commitilla."
        },
        "13-2": {
          miksi: "Tuotanto on se, mitä asiakas käyttää. Paikallinen kehityspalvelin ei paljasta julkaisun virheitä.",
          osat: [
            ["Varmista versio", "Tarkista, että julkaistu versio on sama kuin pääversio, ja kirjaa sen commit matriisiin."],
            ["Aja tuotantoa vasten", "Aja jokainen tapaus julkisessa osoitteessa. Älä oikaise omalla koneella."],
            ["Kirjaa toteutunut tulos", "Kirjaa jokaiselle riville toteutunut tulos heti ajon jälkeen."],
            ["Kirjaa löydökset", "Kirjaa jokainen epäonnistunut tapaus toistamisohjeineen niin tarkasti, että toinen henkilö pystyy toistamaan vian."]
          ],
          valmis: "Matriisin jokaisella rivillä on odotettu ja toteutunut tulos tuotantoversiosta.",
          tallenna: "`project-docs/testimatriisi.md` commitilla ja epäonnistuneiden tapausten määrä työviikon 13 päiväkirjaan."
        },
        "13-3": {
          miksi: "Ilman toistamisohjetta korjaus on arvaus. Täydellinen ketju todistaa, että osaat etsiä ja korjata virheitä.",
          osat: [
            ["Jäljitä syy", "Jäljitä syy kehittäjätyökaluilla, verkkopyynnöistä ja palvelinlokista."],
            ["Korjaa ja uusintatestaa", "Tee korjauscommit ja aja sama testitapaus uudelleen."],
            ["Aja regressio", "Aja ydinpolut uudelleen ja varmista, ettei korjaus rikkonut muuta."],
            ["Kirjaa ketju 2", "Kirjaa ketju kokonaan: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti."],
            ["Varmista, että ketju on aito", "Keksittyä bugia ei kirjata. Jos aitoja löydöksiä ei ole, pyydä ohjaajalta vikatehtävä."]
          ],
          valmis: "Vähintään yksi täydellinen virheenkorjausketju on viety regressiotestiin asti tällä viikolla.",
          tallenna: "Ketju 2 `project-docs/testimatriisi.md`-tiedostoon ja korjauscommitit repositoryyn."
        },
        "13-4": {
          miksi: "Oikea käyttäjä voi menettää yhteyden kesken lähetyksen. Palvelun pitää kertoa, mitä tapahtui, eikä kadottaa tietoa huomaamatta.",
          osat: [
            ["Kirjaa testitapaus T13", "Virhetilanne: verkkoyhteys katkeaa kesken lomakkeen lähetyksen. Kirjaa odotettu tulos ennen ajoa."],
            ["Katkaise yhteys", "Katkaise yhteys kehittäjätyökalujen Network-välilehdellä (Offline) juuri ennen lähetystä."],
            ["Kirjaa tulos", "Kirjaa, mitä käyttäjä näki ja jäikö tietokantaan puolikas rivi."],
            ["Tarkista poikkeama", "Jos tulos poikkesi odotuksesta, korjaa se samalla ketjumallilla kuin työvaiheessa 3."]
          ],
          valmis: "Testitapaus T13 on ajettu ja kirjattu, ja mahdollinen poikkeama on korjattu ketjuna.",
          tallenna: "`project-docs/testimatriisi.md` commitilla."
        }
      },
      help: {
        title: "Testimatriisi ja virheenkorjausketjun kirjaus",
        tree: "LUOKAT\nnormaali käyttö  T01 · T03 · T06 · T10 · T14\nrajat            T04 · T09 · T11 · T12\nvirhetilanteet   T02 · T05 · T07 · T08 · T13\n\nKolmannesperiaate: jokaisessa luokassa suunnilleen kolmannes tapauksista.",
        actions: [
          "Täydennä matriisi niin, että vähintään 12 testitapausta on kirjoitettu ja ajettu työviikkoon 13 mennessä ja luokat ovat tasapainossa. Koko projektissa tapauksia on vähintään 14.",
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
      example: "Rajatapaus: ”T09: profiili, jolla 0 peliä → tilastot näyttävät nollat, sivu ei kaadu, tyhjän tilan viesti näkyy.”",
      notEnough: "”Testasin kaikki toiminnot, kaikki toimii” ilman matriisia; keksitty bugi ketjun täytteeksi. Jos aitoja ei löydy, ohjaaja antaa vikatehtävän."
    },

    14: {
      type: "laatu",
      termit: ["XSS"],
      feature: "Koodin rakenne on siistitty pienin commitein ilman toiminnan muutosta, ja tietoturva-arvio kertoo jokaisen riskin ratkaisun omassa koodissa.",
      connection: "Työviikon 13 testimatriisi antaa turvaverkon. Nyt koodia voi siistiä ja todistaa regressioajolla, ettei toiminta muuttunut, ja samalla arvioit tietoturvan koko palvelulle. Siisti ja arvioitu koodi on pohja, jolle työviikon 15 käyttöönotto-ohje kirjoitetaan.",
      deliverable: "Refaktorointikohteiden lista, refaktorointicommit-sarja, `project-docs/tietoturva-arvio.md` sekä regressiokirjaus ennen ja jälkeen.",
      why: "Ylläpidettävä koodi (p5) todentuu vain ennen/jälkeen-näytöllä, ja tietoturva-arvio ilman koodiviittauksia on esseetä, ei arviota.",
      done: "Refaktorointicommitit ovat pieniä ja kuvaavasti nimettyjä; testimatriisin ydinrivit menevät läpi ennen ja jälkeen; `project-docs/tietoturva-arvio.md` kattaa vähintään viisi riskiä ratkaisuineen ja koodiviittauksineen.",
      record: "Kirjoita työviikon 14 merkintään: mitkä nimet ja rakenteet muuttuivat ja miksi, viisi tunnistamaasi tietoturvariskiä ratkaisuineen sekä mitkä riskit jäivät avoimiksi.",
      skills: ["ylläpidettävä koodi (p5)", "rakenteinen ohjelmointi syvemmin (p4)", "tietoturvan arviointi (s11)"],
      tehtavat: {
        "14-1": {
          miksi: "Ylläpidettävä koodi todentuu vain ennen ja jälkeen -näytöllä. Lista ennen muutoksia estää, ettei siistiminen karkaa uusiksi ominaisuuksiksi.",
          osat: [
            ["Aja ydinrivit ennen", "Aja testimatriisin ydinrivit ja kirjaa tulokset regressiokirjaukseen ennen ensimmäistäkään muutosta."],
            ["Lue koodi vieraan silmin", "Käy komponentit ja reittitiedostot läpi ja merkitse kohdat, joita et ymmärrä heti."],
            ["Tunnista kohteet", "Etsi komponentit, joilla on monta vastuuta, toistuva logiikka, epäselvät nimet ja reittitiedostot, jotka pitäisi jakaa moduuleihin."],
            ["Kirjaa lista", "Kirjaa refaktorointikohteet listaksi: kohde, ongelma ja aiottu muutos."]
          ],
          valmis: "Refaktorointikohteet on listattu, ja testimatriisin ydinrivien tulokset on kirjattu ennen muutoksia.",
          tallenna: "Kohdelista ja regressiokirjauksen ennen-sarake `project-docs/`-kansioon commitilla."
        },
        "14-2": {
          miksi: "Yksi kohde yhdessä commitissa tekee jokaisesta muutoksesta tarkistettavan ja tarvittaessa peruttavan.",
          osat: [
            ["Tee yksi kohde kerrallaan", "Tee jokainen listan kohde omana committinaan."],
            ["Nimeä commit kuvaavasti", "Kirjoita viesti, joka kertoo muutoksen, esimerkiksi ”PeliKortin tilanvaihto omaan hookkiin useTilanvaihto”."],
            ["Muuta vain rakennetta", "Muuta vain rakennetta ja nimiä. Jos huomaat bugin, kirjaa se erikseen testimatriisiin."],
            ["Kirjaa ennen ja jälkeen", "Kirjaa listaan jokaisesta kohteesta, mitä muuttui, esimerkiksi `data2` → `profiiliKooste`."]
          ],
          valmis: "Jokainen listan kohde on omana kuvaavasti nimettynä committinaan.",
          tallenna: "Refaktorointicommitit repositoryssa ja ennen ja jälkeen -muutokset kohdelistaan."
        },
        "14-3": {
          miksi: "Tietoturva-arvio ilman koodiviittauksia on esseetä, ei arviota. Työviikon 7 suojaukset tarkistetaan nyt koko palvelulle.",
          osat: [
            ["Käy riskit läpi", "Käy tietoturvatarkistuslista läpi omaa koodia vasten: syötteet, salasanat, istunnot tai tokenit, tietojen näkyvyys, SQL-injektio ja XSS."],
            ["Kokeile XSS-hyökkäystä", "Kirjoita pelin kommenttiin `<script>`-tagi ja tarkista, että sivu näyttää sen tekstinä eikä aja sitä."],
            ["Kirjoita arvio", "Kirjoita `project-docs/tietoturva-arvio.md`: riski, ratkaisu tässä projektissa ja missä koodissa. Vähintään viisi riskiä."],
            ["Kirjaa avoimet riskit", "Kirjaa loppuun rehellisesti riskit, joita et ehtinyt käsitellä."]
          ],
          valmis: "`project-docs/tietoturva-arvio.md` kattaa vähintään viisi riskiä ratkaisuineen ja koodiviittauksineen.",
          tallenna: "`project-docs/tietoturva-arvio.md` commitilla. Avoimet riskit työviikon 14 päiväkirjaan.",
          sanat: ["XSS", "SQL"]
        },
        "14-4": {
          miksi: "Jos yksikin tulos muuttui, refaktorointi muutti toimintaa eikä ollut refaktorointia.",
          osat: [
            ["Aja ydinrivit jälkeen", "Aja samat ydinrivit kuin työvaiheessa 1, nyt refaktoroinnin jälkeen."],
            ["Vertaa tuloksia", "Kirjaa tulokset regressiokirjauksen jälkeen-sarakkeeseen ja vertaa niitä ennen-sarakkeeseen."],
            ["Tarkista muutokset", "Jos jokin tulos muuttui, peru tai korjaa kyseinen commit ja aja rivi uudelleen."]
          ],
          valmis: "Testimatriisin ydinrivit menevät läpi sekä ennen että jälkeen refaktoroinnin.",
          tallenna: "Regressiokirjaus `project-docs/`-kansioon commitilla."
        }
      },
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
        code: "TIETOTURVATARKISTUSLISTA\nRiski                        | Ratkaisu tässä projektissa | Missä koodissa\nSyötteiden validointi        |                            |\nSalasanojen tallennus        |                            |\nIstunnot tai tokenit         |                            |\nTietojen näkyvyys (vierailija)|                           |\nSQL-injektio                 |                            |\nXSS (käyttäjän kommentit)    |                            |\n\nAvoimet riskit (ei ehditty): ______________________________\n\nREGRESSIOKIRJAUS\nTestitapaus | Tulos ennen refaktorointia | Tulos jälkeen",
        test: "Aja testimatriisin ydinrivit refaktoroinnin jälkeen: jos yksikin tulos muuttui, refaktorointi muutti toimintaa eikä ollut refaktorointia.",
        links: [["OWASP Top Ten", "https://owasp.org/www-project-top-ten/"]]
      },
      example: "Ennen ja jälkeen: ”`data2` → `profiiliKooste`; PeliKortin tilanvaihtologiikka omaan hookkiin `useTilanvaihto`.”",
      notEnough: "Tekoälyn yleinen ”koodisi näyttää hyvältä” -arvio; tietoturva-arvio, jossa riskit on lueteltu ilman viittausta omaan koodiin."
    },

    15: {
      type: "laatu",
      termit: ["RC"],
      feature: "Kuka tahansa saa palvelun käyntiin puhtaassa kansiossa pelkän README:n ja käyttöönotto-ohjeen avulla.",
      excerpt: "Saan kirjallisen ohjeen, jolla yhdistys saa palvelun käyttöön vaikka tekijä ei ole paikalla.",
      connection: "Koodi on työviikon 14 jäljiltä siistiä ja testattua. Nyt siitä kirjoitetaan ohje, jolla yhdistys saa palvelun käyttöön ilman tekijää, ja todistat sen itse kuivaharjoituksella puhtaassa kansiossa. Työviikolla 16 ulkopuolinen testaaja seuraa samaa ohjetta ilman suullista apua.",
      deliverable: "README ja käyttöönotto-ohje, `.env.example`, riippuvuustaulukko ja arkkitehtuurikuvaus (k7-lista), kuivaharjoituksen loki sekä julkaisuehdokkaan (release candidate, RC) jäädytyksen tarkistuslista.",
      why: "Asiakkaan ”vaikka tekijä ei ole paikalla” -vaatimus ja työviikon 16 julkaisutesti kaatuvat, jos ohje olettaa hiljaista tietoa.",
      done: "`git clone` puhtaaseen kansioon ja ohjeen komennot tuottavat toimivan sovelluksen ilman yhtään ohjeen ulkopuolista temppua; jokainen matkalla kirjattu tökkäys on korjattu ohjeeseen.",
      record: "Kirjoita työviikon 15 merkintään: mihin kuivaharjoitus tökkäsi ja miten korjasit ohjeen, mitkä riippuvuudet vaativat selityksen sekä jäädytyslistan sisältö.",
      skills: ["dokumentointi sovitulla tavalla (k7)", "ympäristöasetusten hallinta", "asiakaslähtöinen ohjeistus"],
      tehtavat: {
        "15-1": {
          miksi: "Asiakas haluaa ohjeen, jolla yhdistys saa palvelun käyttöön ilman tekijää. Työviikon 16 testaaja seuraa juuri tätä ohjetta.",
          osat: [
            ["Rakenna runko", "Kirjoita README:n runko: mikä PeliHylly on ja kenelle, vaatimukset, asennus, ympäristömuuttujat, migraatiot, käynnistys, julkaisu ja tunnetut puutteet."],
            ["Lisää odotetut tulosteet", "Kirjoita jokaiseen askeleeseen odotettu tuloste tai näkyvä lopputulos, esimerkiksi ”taulut luotu (5)”."],
            ["Tee .env.example", "Tee `.env.example`, jossa on jokainen tarvittava muuttuja ilman todellisia salaisuuksia."],
            ["Kirjaa v1.1-lista", "Lisää loppuun tunnetut puutteet ja v1.1-lista."]
          ],
          valmis: "README kertoo, mitä palvelu tekee ja kenelle, ja jokaisella asennusaskeleella on odotettu tulos.",
          tallenna: "`README.md` ja `.env.example` commitilla repositoryyn."
        },
        "15-2": {
          miksi: "Dokumentointi sovitulla tavalla on arvioitava vaatimus. Ylläpitäjä tarvitsee tiedon siitä, mitä kukin kirjasto tekee.",
          osat: [
            ["Taulukoi riippuvuudet", "Kirjoita taulukko: kirjasto, versio ja mihin sitä käytetään. Mukaan tulevat react-router ja toinen ulkoinen komponentti."],
            ["Piirrä arkkitehtuuri", "Piirrä yksi kuva client–server–tietokanta-rakenteesta ja lisää se README:hen."],
            ["Kuvaa komponenttirakenne", "Kuvaa pääkomponentit ja niiden vastuut lyhyesti."],
            ["Kuvaa ympäristöasetukset", "Kerro, mitkä asetukset eroavat kehityksessä ja tuotannossa ja mistä ne luetaan."]
          ],
          valmis: "README:ssä ovat riippuvuustaulukko, arkkitehtuurikuva, komponenttirakenne ja ympäristöasetukset.",
          tallenna: "Päivitetty `README.md` ja arkkitehtuurikuva commitilla."
        },
        "15-3": {
          miksi: "Ohje, jota ei ole itse seurattu puhtaassa kansiossa, olettaa hiljaista tietoa. Kuivaharjoitus löytää tökkäykset ennen ulkopuolista testaajaa.",
          osat: [
            ["Kloonaa puhtaaseen kansioon", "Kloonaa repository uuteen kansioon, jossa ei ole `node_modules`-kansiota eikä `.env`-tiedostoa."],
            ["Seuraa ohjetta kirjaimellisesti", "Tee vain se, mitä ohjeessa lukee. Älä käytä muistiasi."],
            ["Kirjaa tökkäykset", "Kirjaa kuivaharjoituksen lokiin jokainen kohta, jossa jouduit arvaamaan: askel, ohjeen teksti, mitä tapahtui ja korjaus."],
            ["Korjaa ohje", "Korjaa jokainen tökkäys ohjeeseen ja aja korjattu askel uudelleen."]
          ],
          valmis: "`git clone` puhtaaseen kansioon ja ohjeen komennot tuottavat toimivan sovelluksen ilman yhtään ohjeen ulkopuolista temppua.",
          tallenna: "Kuivaharjoituksen loki `project-docs/`-kansioon ja ohjeen korjaukset commitilla."
        },
        "15-4": {
          miksi: "Työviikolla 16 sisältö jäädytetään. Lista kertoo etukäteen, minkä pitää olla kunnossa ennen julkaisuehdokkaan (RC) versiomerkintää.",
          osat: [
            ["Kokoa lista", "Kokoa jäädytyksen tarkistuslista: ei uusia ominaisuuksia, ydinrivit menevät läpi, `.env.example` vastaa tuotantoa ja migraatiot toimivat puhtaaseen kantaan."],
            ["Sovi versiomerkinnän nimi", "Sovi julkaisuehdokkaan versiomerkinnän nimi, esimerkiksi `v1.0-rc1`."],
            ["Käy lista läpi", "Käy lista läpi nykyistä versiota vasten ja merkitse, mikä on vielä kesken."]
          ],
          valmis: "Jäädytyslista on repositoryssa, ja jokaisen kohdan tila on merkitty.",
          tallenna: "Jäädytyslista `project-docs/`-kansioon commitilla ja sen sisältö työviikon 15 päiväkirjaan.",
          sanat: ["RC", "tag"]
        }
      },
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
        code: "KUIVAHARJOITUKSEN LOKI\nAskel | Ohjeen teksti | Mitä oikeasti tapahtui | Korjaus ohjeeseen\n1     |               |                        |\n2     |               |                        |\n\nRC-JÄÄDYTYKSEN TARKISTUSLISTA (työviikkoa 16 varten)\n[ ] uusia ominaisuuksia ei enää lisätä\n[ ] testimatriisin ydinrivit menevät läpi\n[ ] .env.example vastaa tuotannon muuttujia\n[ ] migraatiot ajautuvat puhtaaseen kantaan\n[ ] README on kuivaharjoitettu ja korjattu\n[ ] versiomerkinnän (tag) nimi sovittu (esim. v1.0-rc1)",
        test: "Kloonaa repository uuteen kansioon ja seuraa ohjetta ilman muistiasi: jos joudut kertaakaan arvaamaan, ohje ei ole vielä valmis.",
        links: []
      },
      example: "Ohjeen askel odotetulla tulosteella: ”Aja `npm run migrate`: tulosteessa lukee ’taulut luotu (5)’.”",
      notEnough: "README, jossa on vain ”npm install, npm run dev”; ohje, jota ei ole itse seurattu puhtaassa kansiossa."
    },

    /* ============ VAIHE 5: JULKAISU (16–18) ============ */
    16: {
      type: "katselmointi",
      termit: ["tag"],
      feature: "Ulkopuolinen testaaja ottaa julkaisuehdokkaan käyttöön pelkän kirjallisen ohjeen avulla, ja jokainen epäröinti on kirjattu ja luokiteltu.",
      excerpt: "Saan kirjallisen ohjeen, jolla yhdistys saa palvelun käyttöön vaikka tekijä ei ole paikalla.",
      connection: "Työviikon 15 ohje pannaan nyt koetukselle. Jäädytät sisällön, julkaiset julkaisuehdokkaan ja annat toisen ulkopuolisen henkilön ottaa sen käyttöön puhtaassa ympäristössä ilman, että saat auttaa. Estäviksi luokitellut löydökset korjataan työviikolla 17 ennen v1.0:aa.",
      deliverable: "Julkaisuehdokkaan tag eli versiomerkintä Gitissä, julkaistu julkaisuehdokas asiakkaan ympäristössä, julkaisutestin pöytäkirja, löydösten estävä/ei-estävä-luokittelu ja aloitettu virheenkorjausketju 3.",
      why: "Julkaisutesti puhtaassa ympäristössä on ainoa todiste siitä, että palvelu ja ohje toimivat jonkun muun kuin tekijän käsissä.",
      done: "Testaaja rekisteröityi, lisäsi pelin ja vaihtoi tilan ilman suullista apua, tai jokainen epäröintikohta on kirjattu ja luokiteltu; RC-tag on repositoryssa ja estävien vikojen ketjut aloitettu.",
      record: "Kirjoita työviikon 16 merkintään: missä testaaja epäröi ja mitä hän sanoi, mitkä löydökset ovat estäviä ja miksi, sekä ketju 3:n alku.",
      skills: ["version katselmointi (s3)", "julkaisu asiakkaan ympäristöön (k6)", "virheiden jäljitys tuoreeltaan (p2)", "estävä/ei-estävä-priorisointi"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "16-1": {
          miksi: "Julkaisutesti tarvitsee version, joka ei muutu testin aikana. Versiomerkintä kertoo, mitä versiota testattiin.",
          osat: [
            ["Jäädytä sisältö", "Käy työviikon 15 jäädytyslista läpi. Tästä eteenpäin ei lisätä uusia ominaisuuksia."],
            ["Kokoa tuotantobuild", "Aja Viten tuotantobuild ja tarkista, että se syntyy virheittä."],
            ["Merkitse versio", "Luo julkaisuehdokkaan versiomerkintä eli tag, esimerkiksi `v1.0-rc1`, ja vie se etärepositoryyn."],
            ["Julkaise asiakkaan ympäristöön", "Julkaise julkaisuehdokas asiakkaan ympäristöön ja tarkista julkinen osoite."],
            ["Kirjaa jäädytys", "Kirjaa jäädytys suunnitelmaan, lataa `suunnitelma.md` ja korvaa repositoryn vanha tiedosto."]
          ],
          valmis: "Julkaisuehdokkaan tag on repositoryssa, ja sama versio vastaa asiakkaan ympäristössä.",
          tallenna: "Tag repositoryssa, julkinen osoite työviikon 16 päiväkirjaan ja päivitetty `project-docs/suunnitelma.md` commitilla.",
          sanat: ["tag", "tuotantobuild"]
        },
        "16-2": {
          miksi: "Julkaisutesti puhtaassa ympäristössä on ainoa todiste siitä, että palvelu ja ohje toimivat jonkun muun kuin tekijän käsissä.",
          osat: [
            ["Varmista testaaja", "Sovi ohjaajan kanssa julkaisutestaaja. Hän on eri henkilö kuin työviikon 10 asiakkaan edustaja."],
            ["Kirjaa rooli ja ajankohta", "Kirjaa julkaisutestin pöytäkirjaan testaajan rooli, ajankohta ja testattava versio. Älä kirjaa nimeä."],
            ["Anna vain ohje", "Anna testaajalle repositoryn osoite, kirjallinen käyttöönotto-ohje ja palvelun osoite. Älä anna suullisia vinkkejä tai valmista .env-tiedostoa."],
            ["Kirjaa testitapaus T14", "Normaali käyttö: puhtaan ympäristön käyttöönotto pelkän kirjallisen ohjeen avulla. Kirjaa odotettu tulos ennen testiä."]
          ],
          valmis: "Pöytäkirjassa ovat testaajan rooli, ajankohta ja versio, ja testitapaus T14 on kirjattu odotuksineen.",
          tallenna: "Julkaisutestin pöytäkirja `project-docs/`-kansioon ja T14 `project-docs/testimatriisi.md`-tiedostoon."
        },
        "16-3": {
          miksi: "Jälkikäteen muistista kirjattu havainto ei kelpaa. Testaajan sanat näyttävät, missä ohje olettaa hiljaista tietoa.",
          osat: [
            ["Havainnoi auttamatta", "Testaaja puhuu ja tekee, sinä kirjaat. Älä auta, ellei työ pysähdy kokonaan."],
            ["Kirjaa vaiheittain", "Kirjaa pöytäkirjaan vaiheet: käyttöönotto ohjeesta, rekisteröityminen, pelin lisääminen ja tilan vaihto."],
            ["Kirjaa epäröinnit", "Kirjaa jokainen epäröintikohta testaajan sanoin."],
            ["Tee korjauslista", "Muuta epäröintikohdat ohjeen korjauslistaksi ja kirjaa testitapauksen T14 toteutunut tulos."]
          ],
          valmis: "Testaaja rekisteröityi, lisäsi pelin ja vaihtoi tilan ilman suullista apua, tai jokainen epäröintikohta on kirjattu hänen sanoinaan.",
          tallenna: "Pöytäkirja ja korjauslista `project-docs/`-kansioon commitilla."
        },
        "16-4": {
          miksi: "Jäädytyksen jälkeen korjataan vain estävät virheet. Luokittelu yhdessä ohjaajan kanssa pitää v1.0:n aikataulussa.",
          osat: [
            ["Luokittele yhdessä", "Luokittele löydökset ohjaajan kanssa. Estävä löydös estää pakollisen toiminnon, kadottaa dataa tai vuotaa tietoa. Muut siirtyvät v1.1-listalle."],
            ["Kirjaa perustelut", "Kirjaa jokaisen luokittelun peruste pöytäkirjaan."],
            ["Aloita ketju 3", "Aloita estävästä löydöksestä virheenkorjausketju 3: havainto, toistamisohje ja syy."],
            ["Kirjaa löydökset suunnitelmaan", "Kirjaa julkaisutestin löydökset suunnitelmaan ja lataa päivitetty `suunnitelma.md`."]
          ],
          valmis: "Jokainen löydös on luokiteltu perusteluineen, ja estävien vikojen ketjut on aloitettu.",
          tallenna: "Luokittelu pöytäkirjaan, ketju 3 `project-docs/testimatriisi.md`-tiedostoon ja `project-docs/suunnitelma.md` commitilla."
        }
      },
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
      feature: "Asiakkaan osoitteessa on versio v1.0, joka toimii myös laitteella, jolla palvelua ei ole ennen käytetty.",
      connection: "Työviikon 16 estävät löydökset korjataan, ja ketju 3 viedään regressiotestiin asti. Sen jälkeen sama osoite, joka avattiin työviikolla 3, saa version v1.0, ja asiakas saa tiedotteen omalla kielellään. Julkaistu versio on se työnäyte, jonka esittelet näytössä työviikolla 18.",
      deliverable: "Korjatut estävät virheet ja ketju 3 regressiotestiin asti, tuotantobuild ja tag `v1.0`, julkaisutiedote asiakkaalle sekä savutestikirjaus.",
      why: "Työ ei saa loppua vaan valmistua: versioitu, tuotannossa oleva ja tiedotettu julkaisu on s14:n ja koko projektin päätepiste.",
      done: "Osoite toimii yksityisessä selainikkunassa ja toisella laitteella; repositoryssa on tag `v1.0`; julkaisutiedote kertoo asiakkaan kielellä, mitä palvelu tekee ja mitä siirtyi jatkoon.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät virheet korjattiin ja miten ne todennettiin, ketju 3 loppuun asti sekä savutestin tulokset molemmilta laitteilta.",
      skills: ["julkaisu tuotantoympäristöön (s14)", "julkaisu asiakkaan ympäristöön (k6)", "versiointi ja julkaisutiedote"],
      tehtavat: {
        "17-1": {
          miksi: "Vain estävät virheet korjataan, jotta jäädytys pitää ja v1.0 on sama palvelu, jota testattiin.",
          osat: [
            ["Korjaa vain estävät", "Korjaa työviikolla 16 estäviksi luokitellut virheet. Muut odottavat v1.1-listalla."],
            ["Uusintatestaa", "Aja jokaisen korjatun löydöksen testi uudelleen."],
            ["Aja regressio", "Aja testimatriisin ydinpolut uudelleen."],
            ["Kirjaa ketju 3 loppuun", "Kirjaa ketjuun korjauscommit, uusintatesti ja regressiotesti."]
          ],
          valmis: "Estävät virheet on korjattu ja uusintatestattu, ja ketju 3 on kirjattu regressiotestiin asti.",
          tallenna: "Korjauscommitit repositoryyn ja ketju 3 `project-docs/testimatriisi.md`-tiedostoon."
        },
        "17-2": {
          miksi: "Versioitu, tuotannossa oleva julkaisu on koko projektin päätepiste.",
          osat: [
            ["Tarkista salaisuudet", "Tarkista, ettei yksikään salaisuus ole repositoryssa ja että ympäristömuuttujat on asetettu alustalle."],
            ["Kokoa tuotantobuild", "Aja tuotantobuild ja tarkista, että se syntyy virheittä."],
            ["Aja migraatiot", "Aja migraatiot tuotannon tietokantaan."],
            ["Merkitse versio", "Luo tag `v1.0` ja vie se etärepositoryyn."],
            ["Julkaise samaan osoitteeseen", "Julkaise samaan osoitteeseen, jonka asiakas on tuntenut työviikosta 3 asti."],
            ["Perusta näyttömatriisi", "Luo `project-docs/nayttomatriisi.md`: rivi jokaiselle 32 vaatimukselle, jossa ovat tunnus, työnäytteen linkki ja viikko. Lisää ensimmäiseksi linkiksi tag `v1.0`."]
          ],
          valmis: "Repositoryssa on tag `v1.0`, ja sama versio vastaa asiakkaan tuntemassa osoitteessa.",
          tallenna: "Tag repositoryssa, perustettu `project-docs/nayttomatriisi.md` commitilla ja julkaisun vaiheet työviikon 17 päiväkirjaan.",
          sanat: ["tag", "tuotantobuild"]
        },
        "17-3": {
          miksi: "Asiakas ymmärtää pelejä, ei palvelimia. Tiedote kertoo hänen kielellään, mitä palvelu tekee ja mitä on tulossa.",
          osat: [
            ["Kerro, mitä palvelu tekee", "Kerro ilman jargonia, mitä jäsen voi tehdä: rekisteröityä, lisätä pelin, vaihtaa tilan ja katsoa kaverin profiilia."],
            ["Kerro, mitä siirtyi", "Kerro, mitä siirtyi v1.1:een ja miksi, esimerkiksi profiiliviestit."],
            ["Liitä osoite ja ohje", "Liitä tiedotteeseen palvelun osoite ja tieto siitä, mistä käyttöönotto-ohje löytyy."],
            ["Lähetä ja tallenna", "Lähetä tiedote asiakkaalle ja tallenna se tiedostoon `project-docs/viestit.md`."]
          ],
          valmis: "Julkaisutiedote on lähetetty, ja se kertoo asiakkaan kielellä, mitä palvelu tekee ja mitä siirtyi jatkoon.",
          tallenna: "`project-docs/viestit.md` commitilla."
        },
        "17-4": {
          miksi: "Oma selain muistaa kirjautumiset ja välimuistin. Puhdas ikkuna ja toinen laite näyttävät, mitä uusi jäsen näkee.",
          osat: [
            ["Avaa yksityinen ikkuna", "Avaa osoite yksityisessä selainikkunassa ja tee koko polku rekisteröitymisestä tilanvaihtoon."],
            ["Kokeile toisella laitteella", "Tee sama polku laitteella, jolla et ole koskaan kirjautunut palveluun."],
            ["Kirjaa savutesti", "Kirjaa savutestiin molemmat laitteet ja tulokset."]
          ],
          valmis: "Palvelu toimii koko polulta yksityisessä selainikkunassa ja toisella laitteella.",
          tallenna: "Savutestikirjaus `project-docs/`-kansioon ja tulokset työviikon 17 päiväkirjaan."
        }
      },
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
        code: "JULKAISUN TARKISTUSLISTA\n[ ] estävät virheet korjattu ja uusintatestattu\n[ ] regressio ajettu ydinpoluille\n[ ] tuotantobuild syntyy virheittä\n[ ] ympäristömuuttujat asetettu, ei salaisuuksia repositoryssa\n[ ] migraatiot ajettu tuotantokantaan\n[ ] tag v1.0 luotu ja viety etärepositoryyn (push)\n[ ] julkinen osoite toimii yksityisessä ikkunassa\n[ ] toinen laite testattu\n[ ] julkaisutiedote lähetetty ja tallennettu project-docs/viestit.md\n\nSAVUTESTI\nLaite 1: __________  tulos: __________\nLaite 2: __________  tulos: __________",
        test: "Avaa osoite laitteella, jolla et ole koskaan kirjautunut palveluun, ja tee koko polku rekisteröitymisestä tilanvaihtoon.",
        links: []
      },
      example: "Tiedotteen sävy: ”PeliHylly on nyt auki. Rekisteröidy, lisää ensimmäinen pelisi ja katso kaverin profiilia. Profiiliviestit tulevat seuraavassa versiossa.”",
      notEnough: "”Deployasin, toimii mulla” ilman tagia, tiedotetta ja puhtaan ympäristön tarkistusta."
    },

    18: {
      type: "naytto",
      feature: "Arvioija avaa näyttömatriisista minkä tahansa rivin ja löytää siihen liittyvän työnäytteen alle minuutissa.",
      connection: "17 työviikkoa on tuottanut committeja, muistioita ja testitapauksia. Viimeisellä viikolla et rakenna mitään uutta, vaan teet niistä löydettäviä: jokainen vaatimus saa suoran linkin työnäytteeseen. Harjoiteltu demo ja itsearvio kertovat arvioijalle, mitä teit ja miksi.",
      deliverable: "Täsmälinkitetty näyttömatriisi, harjoiteltu 8–10 minuutin demo, kirjallinen itsearvio ja ohjaajalle luovutettu paketti.",
      why: "Osaaminen, jota arvioija ei löydä, ei ole näytössä olemassa: viimeinen viikko on löydettäväksi tekemistä, ei tuotantoa.",
      done: "Ohjaaja avaa matriisista satunnaisen rivin ja päätyy oikeaan työnäytteeseen alle minuutissa; demo pysyy harjoituksessa ajassa; itsearvio ja AI-loki ovat päiväkirjan mukana repositoryssa.",
      record: "Kirjoita työviikon 18 merkintään: mitkä matriisin rivit olivat vaikeimmat linkittää ja miksi, demon harjoiteltu kesto sekä itsearvion tärkein havainto.",
      skills: ["oman toiminnan arviointi (p11)", "näyttöaineiston jäsentäminen", "esittäminen"],
      resources: [["Siirry näyttömatriisiin", "#view-naytto", false]],
      tehtavat: {
        "18-1": {
          miksi: "Osaaminen, jota arvioija ei löydä, ei ole näytössä olemassa. Viimeinen viikko on löydettäväksi tekemistä, ei tuotantoa.",
          osat: [
            ["Linkitä rivi kerrallaan", "Täydennä `project-docs/nayttomatriisi.md` rivi kerrallaan: vaatimuksen tunnus, työnäytteen linkki (commit, issue, tiedosto, tagi tai kuva) ja viikko. Sama työnäyte saa esiintyä useilla riveillä."],
            ["Avaa jokainen linkki", "Avaa linkki ja tarkista, että se osoittaa juuri oikeaan työnäytteeseen."],
            ["Merkitse aukot", "Merkitse rivit, joille et löydä työnäytettä."],
            ["Käy aukot ohjaajan kanssa", "Käy merkityt rivit läpi ohjaajan kanssa ja sovi, mikä työnäyte niihin kelpaa."]
          ],
          valmis: "Jokaisella 32 vaatimuksella on suora linkki työnäytteeseen, ja aukot on käyty läpi ohjaajan kanssa.",
          tallenna: "`project-docs/nayttomatriisi.md` commitilla. Vaikeimmin linkitettävät rivit työviikon 18 päiväkirjaan."
        },
        "18-2": {
          miksi: "Demossa arvioija näkee palvelun toiminnassa ja kuulee, miten perustelet ratkaisusi. Harjoitus pitää esityksen ajassa.",
          osat: [
            ["Kirjoita demorunko", "Kirjoita runko: palvelu ja asiakas, palvelu toiminnassa, yksi tekninen ratkaisu, yksi korjattu bugi, Git-historia ja tekoälyn käyttö sekä v1.1."],
            ["Valitse esimerkit", "Valitse esiteltävä tekninen ratkaisu, esimerkiksi tilahistorian transaktio, ja yksi täydellinen virheenkorjausketju."],
            ["Harjoittele kellon kanssa", "Harjoittele demo ääneen kellon kanssa vähintään kahdesti ja kirjaa kesto."],
            ["Tarkista kesto", "Jos demo ylittää 10 minuuttia, lyhennä runkoa ja harjoittele uudelleen."]
          ],
          valmis: "Demo on harjoiteltu vähintään kahdesti, ja se pysyy 8–10 minuutissa.",
          tallenna: "Demorunko `project-docs/`-kansioon ja harjoiteltu kesto työviikon 18 päiväkirjaan."
        },
        "18-3": {
          miksi: "Oman toiminnan arviointi on arvioitava vaatimus. Yleinen ”opin paljon” ei kerro, mitä osaat.",
          osat: [
            ["Vastaa kysymyksiin", "Vastaa itsearvion kysymyksiin: mikä onnistui, missä tarvitsit apua, minkä päätöksen tekisit toisin, miten tekoäly vaikutti ja mitä veisit seuraavaan projektiin."],
            ["Liitä esimerkit", "Liitä jokaiseen vastaukseen konkreettinen esimerkki ja linkki työnäytteeseen."],
            ["Tarkista AI-loki", "Tarkista, että AI-loki on ajan tasalla. Se tulee mukaan päiväkirjan lataukseen."],
            ["Vie repositoryyn", "Lataa koko projektipäiväkirja AI-lokeineen ja vie se repositoryyn itsearvion kanssa."]
          ],
          valmis: "Itsearviossa on vastaus jokaiseen kysymykseen konkreettisin esimerkein, ja itsearvio ja AI-loki ovat repositoryssa.",
          tallenna: "Itsearvio `project-docs/`-kansioon ja päiväkirja AI-lokeineen tiedostoon `project-docs/projektipaivakirja.md`."
        },
        "18-4": {
          miksi: "Toinen silmäpari löytää rikkinäisen linkin ennen arvioijaa. Kuittaus todistaa, mitä luovutit.",
          osat: [
            ["Pyydä tarkistus", "Pyydä toista henkilöä avaamaan matriisin linkit ja valitsemaan satunnainen rivi. Työnäytteen pitää löytyä alle minuutissa."],
            ["Korjaa rikkinäiset linkit", "Korjaa jokainen linkki, joka ei auennut."],
            ["Tarkista paketti", "Käy luovutuspaketin tarkistuslista läpi: matriisi, päiväkirja, AI-loki, tag `v1.0`, julkinen osoite, itsearvio ja demorunko."],
            ["Luovuta ja pyydä kuittaus", "Luovuta paketti ohjaajalle ja pyydä luovutuskuittaus."]
          ],
          valmis: "Ohjaaja on kuitannut paketin, ja satunnainen matriisin rivi johtaa oikeaan työnäytteeseen alle minuutissa.",
          tallenna: "Luovutuskuittaus työviikon 18 päiväkirjaan."
        }
      },
      help: {
        title: "Demorunko ja itsearvion kysymykset",
        tree: "DEMO 8–10 MIN\n1 min   palvelu ja asiakas lyhyesti\n3 min   palvelu toiminnassa: rekisteröityminen → peli → tila → profiili\n2 min   yksi tekninen ratkaisu: tilahistorian transaktio\n2 min   yksi korjattu bugi täytenä ketjuna\n1 min   Git-historia ja tekoälyn tarkistettu käyttö\n1 min   mitä jäi v1.1:een ja miksi",
        actions: [
          "Käy project-docs/nayttomatriisi.md rivi riviltä ja liitä jokaiseen suora linkki: commit, pull request, dokumentti, testitapaus tai muistio.",
          "Merkitse rivit, joille et löydä työnäytettä, ja käy ne läpi ohjaajan kanssa.",
          "Harjoittele demo ääneen kellon kanssa vähintään kahdesti.",
          "Kirjoita itsearvio konkreettisin esimerkein.",
          "Pyydä toista henkilöä tarkistamaan, että jokainen linkki aukeaa.",
          "Luovuta paketti ohjaajalle ja pyydä luovutuskuittaus."
        ],
        code: "ITSEARVION KYSYMYKSET\n1. Mikä onnistui parhaiten ja mistä tiedät sen?\n2. Missä tarvitsit apua ja keneltä?\n3. Minkä arvion tai päätöksen tekisit toisin ja miksi?\n4. Miten tekoälyn käyttö vaikutti työhösi ja mitä teit itse?\n5. Mitä veisit seuraavaan projektiin?\n\nLUOVUTUSPAKETIN TARKISTUS\n[ ] project-docs/nayttomatriisi.md täsmälinkitettynä (32 riviä)\n[ ] projektipäiväkirja repositoryssa\n[ ] AI-loki repositoryssa\n[ ] tag v1.0 ja julkinen osoite\n[ ] itsearvio ja demorunko",
        test: "Pyydä toista henkilöä valitsemaan matriisista satunnainen rivi ja mittaa, löytyykö työnäyte alle minuutissa.",
        links: []
      },
      example: "Itsearvion konkretia: ”Aliarvioin kirjautumisen työmäärän kahdella päivällä. Seuraavassa projektissa teen auth-vertailun jo suunnitteluviikolla.”",
      notEnough: "”Opin paljon Reactista ja projekti oli opettavainen.”",
      paivat: [
        ["Sisältöjäädytys", "Viimeinen hyväksytty versio."],
        ["Aineisto", "Päiväkirja, testit ja linkit koossa."],
        ["Harjoittelu", "8–10 min demo ja itsearviointi."],
        ["Puskuri", "Tarkistus toisen henkilön kanssa."],
        ["Luovutus", "Näyttömatriisi täsmälinkitettynä, päiväkirja, AI-loki ja v1.0 luovutettu ohjaajalle."]
      ]
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
      testiLuokat: "Testitapauksia on vähintään 14 koko projektissa, ja niistä vähintään 12 on kirjoitettu ja ajettu työviikkoon 13 mennessä. Merkitse jokaiselle testitapaukselle luokka: normaali käyttö, raja tai virhetilanne. Kirjoita odotus ennen testiajoa.",
      ketjuja: 3,
      lisenssiVko: 1
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma – PeliHylly",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena.",
      kohde: [
        "Näyttö toteutetaan oppilaitosympäristössä ohjattuna projektinäyttönä. Perusteena on Tieto- ja viestintätekniikan perustutkinto (perusteId 9816282, diaarinumero OPH-6216-2025). Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 11 osaamisvaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 osaamisvaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 osaamisvaatimusta), yhteensä 32 osaamisvaatimusta.",
        "Opiskelija rakentaa 18 työviikon aikana PeliHyllyn: pelikirjaston seurantapalvelun kuvitteelliselle Pelikellari ry:lle. Toteutus on React + Vite -frontend, Node.js + Express -backend ja SQLite-tietovarasto (sovittu toteutustapa, jonka opiskelija perustelee vertailulla työviikolla 2); palvelu julkaistaan tuotantoon julkiseen osoitteeseen. Työ tehdään yksin, mutta ohjaaja toimii kehitystiimin toisena osapuolena priorisoinnissa, vertailupäätöksissä ja ratkaisujen arvioinnissa (p8–p10).",
        "Viikot ovat työviikkoja opiskelijan omasta aloituksesta, eivät kalenteriviikkoja. Näyttöaineisto syntyy työn aikana: commitit, pull requestit, muistiot, testimatriisi, projektipäiväkirja ja AI-loki elävät samassa repositoryssa."
      ],
      p0: "Pakollinen perusversio (P0): rekisteröityminen ja kirjautuminen, pelien lisäys ja muokkaus, tilanvaihto sekä automaattinen tilahistoria, julkinen profiili tilastoineen ja julkaisu tuotantoon. Haku ja suodatus sekä arvostelut ovat P1; kokoelmat ovat P1-laajennus, josta päätetään työviikolla 11; profiiliviestit ovat P2 ja saavat jäädä pois.",
      roolit: [
        ["Opiskelija", "Toteuttaa palvelun, tekee omat perustellut päätöksensä, kirjaa projektipäiväkirjaa ja AI-lokia sekä kokoaa näyttöaineiston."],
        ["Ohjaaja / opettaja", "Vastaa ohjauksesta ja arvioinnista, kuittaa P0-rajauksen, osallistuu vertailupäätöksiin (työviikot 2, 7 ja 11) ja tarkistuspisteisiin sekä nimeää katselmoijat. Toimii asiakkaan sijaisena, kunnes asiakkaan edustaja on nimetty, ja vastaanottaa siihen asti kysymyslistan ja tilannekatsaukset. Katselmoinneissa asiakasta esittää nimetty edustaja."],
        ["Asiakkaan edustaja (työviikko 10)", "Nimetty ulkopuolinen henkilö Pelikellari ry:n toiminnanvetäjän roolissa, esimerkiksi toinen opettaja, työelämäedustaja tai toisen ryhmän opiskelija. Ei opiskelijan oma ohjaava opettaja. Nimetään viimeistään työviikolla 3."],
        ["Julkaisutestaaja (työviikko 16)", "Toinen ulkopuolinen henkilö, eri kuin asiakkaan edustaja. Ottaa julkaisuehdokkaan käyttöön puhtaassa ympäristössä pelkän kirjallisen ohjeen avulla ilman suullista apua."],
        ["Arvioija", "Ottaa vastaan 8–10 minuutin demon työviikolla 18 ja käy näyttömatriisin läpi täsmälinkkeineen."]
      ],
      tarkistuspisteet: [
        [2, "Suunnitelma ja P0-rajaus", "Käyttäjätarinat hyväksymiskriteereineen, priorisointi, tietomalli, tietovarastovertailu ja työmääräarviot. Ohjaaja kuittaa P0-rajauksen kirjallisesti."],
        [3, "Julkaistu runko ja katselmoijat", "Julkinen osoite vastaa, /api/health toimii tuotannossa, k2-muistio kirjoitettu. Asiakkaan edustaja ja julkaisutestaaja nimetään."],
        [5, "Validointi kahdessa kerroksessa", "Itse rakennettu lomake, palvelinvalidointi 400-vastauksineen, curl-tulosteet ja testitapaukset T03–T05."],
        [7, "Autentikointipäätös ja omistajuus", "Vertailumuistio istunto vs. token ohjaajan kommentilla; 403-tuloste toisen käyttäjän peliin; salasanat hashattuina."],
        [10, "Asiakaskatselmointi", "Katselmointimuistio: rooli, ajankohta, vähintään viisi havaintoa asiakkaan omin sanoin erillään tulkinnasta, priorisoidut issuet."],
        [13, "Testimatriisin ajo", "Testitapauksia on vähintään 14 koko projektissa, ja niistä vähintään 12 on kirjoitettu ja ajettu työviikkoon 13 mennessä: odotus ennen ajoa, toteutuneet tulokset ja virheenkorjausketju 2 regressiotestiin asti."],
        [16, "Julkaisuehdokas ja julkaisutesti", "RC-tag, ulkopuolisen testaajan pöytäkirja, löydösten estävä/ei-estävä-luokittelu ja ketju 3:n aloitus."],
        [18, "Näyttö", "Näyttömatriisi täsmälinkitettynä, demo ajassa, itsearvio ja AI-loki repositoryssa."]
      ],
      tyonaytteet: {
        p1: ["1", "VS Code + Vite-dev-palvelin käytössä koko projektin; työkalutodennusten tulosteet ja kehittäjätyökalujen käyttö ketjukirjauksissa"],
        p2: ["8, 13, 16", "Kolme täydellistä virheenkorjausketjua: ketju 1 kehitystyössä löytyneestä aidosta bugista (ankkuri työviikko 8), ketju 2 testimatriisin löydöksestä, ketju 3 julkaisutestin estävästä löydöksestä"],
        p3: ["13", "Testimatriisi kolmessa luokassa: vähintään 12 tapausta kirjoitettu ja ajettu työviikkoon 13 mennessä (koko projektissa vähintään 14), odotettu tulos kirjattu ennen ajoa, uusintatestit korjausten jälkeen"],
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
        s12: ["1", "Git koko projektin ajan: etärepository työviikosta 1, kuvaavat commitit, feature-haarat työviikosta 6 alkaen"],
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
        ["Näyttömatriisi", "project-docs/nayttomatriisi.md: 32 vaatimusta täsmälinkitettyinä työnäytteisiin (tunnus, linkki ja viikko)."],
        ["Itsearvio ja demo", "Kirjallinen itsearvio ja 8–10 minuutin demo."]
      ],
      huomiot: [
        ["Päivätön tila", "Viikot 1–18 ovat työviikkoja opiskelijan omasta aloituksesta. Aineistossa ei ole kalenteripäivämääriä, joten sama paketti käy mille tahansa aloitusajankohdalle."],
        ["Katselmoijat ovat ohjaajan päätös", "Asiakkaan edustaja nimetään viimeistään työviikolla 3 ja hän toimii työviikolla 10; julkaisutestaaja on eri henkilö ja toimii työviikolla 16. Kumpikaan ei ole opiskelijan oma ohjaava opettaja."],
        ["Virheenkorjausketju 1 on ehdollinen", "Ketju 1 ankkuroidaan työviikolle 8, mutta se kirjataan siinä viikossa, jossa aito bugi osuu. Keksittyjä bugeja ei kirjata: jos aitoja ei löydy, ohjaaja merkitsee vikatehtävän."],
        ["Kokoelmat ovat rajauspäätös", "Kokoelmien (monta-moneen) toteutus päätetään työviikolla 11 työviikolla 9 kirjatuilla kriteereillä. Siirto v1.1-listalle on hyväksytty lopputulos, ei epäonnistuminen."],
        ["Aiheen muunnelma", "Opiskelija voi toteuttaa videopeliarkiston sijaan esimerkiksi musiikki- tai elokuva-arkiston, jos hän perustelee ohjaajalle, mikä muunnelmassa on järkevää: esimerkiksi CD-arkistossa tilahistorian tilalle sopii kuunteluhistoria tai levyn kunto."],
        ["Nimet julkisessa repositoryssa", "Repositoryyn kirjataan henkilöistä vain rooli, esimerkiksi ohjaaja, asiakkaan edustaja tai julkaisutestaaja. Nimet ja sanatarkat muistiinpanot lähetetään ohjaajalle Teamsissa, jos niitä tarvitaan."],
        ["Asiakkaan sijainen", "Kunnes asiakkaan ulkopuolinen edustaja on nimetty, ohjaava opettaja toimii asiakkaan sijaisena ja vastaanottaa työviikon 1 kysymyslistan ja työviikon 3 tilannekatsauksen. Katselmoinneissa asiakasta esittää nimetty edustaja."],
        ["Avoimet asiat", "Lisenssi, repositoryn julkisuus, perusteversion siirtymäsääntö, katselmoijien nimeäminen ja julkaisualustan tilin omistajuus ovat ohjaajan tai oppilaitoksen päätöksiä. Tyhjä kenttä suunnitelmassa on oikea tulos, kunnes asia on sovittu."]
      ]
    }
  }
};
