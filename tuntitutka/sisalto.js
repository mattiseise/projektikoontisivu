/*
 * sisalto.js – TuntiTutkan koko sisältödata.
 *
 * app.js on geneerinen moottori eikä sisällä yhtään projektikohtaista
 * merkkijonoa. Kaikki opiskelijalle näkyvä teksti on tässä tiedostossa tai
 * index.html:ssä.
 *
 * Päivätön tila: viikot ovat järjestysnumeroita 1–18, eivät kalenteriviikkoja.
 * Sivustolla ei ole yhtään päivämäärää: projekti alkaa siitä, kun opiskelija
 * aloittaa, ja kestää 18 työviikkoa.
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "tuntitutka",
  nimi: "TuntiTutka",
  vuosi: 2026,
  paivaton: true,
  viikot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  yhtenaisetViikot: true,
  aloitusNappi: "Aloita sovelluksen teko",
  apuOtsikko: "Tarvitsen toteutusapua",

  /* ---- projektin tavoitekuva (moottori v2.6) ----
   * Näkyy Projektin kokonaiskuva -näkymän alussa, ja sivu avautuu siihen ensimmäisellä
   * kerralla. Kuva on luonnos: project-docs/lopputulos/proto.html kuvattuna 2x-tarkkuudella
   * (ks. project-docs/lopputulos/README.md). alue = [x, y, leveys, korkeus] prosentteina.
   * Kohdat ovat käyttäjän työnkulun järjestyksessä: työntekijä kirjaa, projektipäällikkö katsoo.
   */
  lopputulos: {
    kuvaus: "TuntiTutka on mainostoimiston sovellus työajan seurantaan. Siinä työntekijä kirjaa tuntinsa nopeasti myös puhelimella ja näkee vain omat kirjauksensa. Projektipäällikkö perustaa projektit ja näkee aina ajantasaiset yhteenvedot projekteittain, henkilöittäin ja tehtävälajeittain.",
    /* Aloituksen johdanto kertoo saman, joten kuvauslause näkyy vain työpaketissa. */
    naytaKuvaus: false,
    kuva: "assets/lopputulos.jpg",
    leveys: 1120,
    korkeus: 700,
    alt: "Tavoitekuva valmiista TuntiTutka-sovelluksesta. Selainikkunassa näkyy projektipäällikön Yhteenvedot-näkymä viikolta 12: pylväskaavio tunneista projekteittain, donitsikaavio tehtävälajien osuuksista ja taulukko tunneista henkilöittäin, jossa yhden henkilön kirjaukset on avattu. Oikealla puhelimessa on työntekijän Kirjaa tunnit -lomake ja oma viikkosumma 30,0 tuntia.",
    kohdat: [
      { n: 1, teksti: "Työntekijä kirjaa tunnit puhelimella alle puolessa minuutissa ja näkee oman viikkosummansa.", alue: [72.9, 20.3, 22.0, 74.3] },
      { n: 2, teksti: "Projektipäällikkö näkee pylväskaaviosta, montako tuntia kuhunkin projektiin kului valitulla viikolla.", alue: [4.6, 27.6, 38.6, 38.6] },
      { n: 3, teksti: "Tehtävälajikaavio kertoo, mikä osuus ajasta meni suunnitteluun, tuotantoon, palavereihin ja korjauksiin.", alue: [4.6, 67.9, 38.6, 26.3] },
      { n: 4, teksti: "Projektipäällikkö näkee tunnit henkilöittäin ja avaa yksittäisen työntekijän kirjaukset.", alue: [44.4, 27.6, 27.1, 66.6] }
    ]
  },

  paletti: {
    aksentti: "#0e7490",
    aksenttiTumma: "#155e75",
    taulukkoSavy: "#e3f2f6",
    riviSavy: "#f2f9fb"
  },

  /* ---- paperiaineiston kielisäädöt: päivätön aikataulu ---- */
  lataukset: {
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title,
    aloitusHuomio: "Viikon työvaihe on tämän sivuston työohje. Kun toteutat muutoksen sovellukseen, kirjaa se GitHub-issueksi hyväksymiskriteereineen ja tee se Työtapa-sivun kuudella askeleella. Testin tulos kirjataan issueen heti, viikon yhteenveto projektipäiväkirjaan viikon lopussa."
  },

  /* ---- vaiheet (moottori v2.7: numeroidut vaiheet, kuvaus näkyy aloituksessa ja vaihekuvassa) ----
   * Vaiheen N väri on styles.css:n --phase-a, --phase-b … (1 = a). */
  vaiheet: [
    { tunnus: "1", lyhyt: "Valmistelu", otsikko: "Valmistelu ja julkaistu runko", kuvaus: "Otat työkalut käyttöön, teet hyväksytyn suunnitelman ja tietomallin ja viet tyhjän rungon julkiseen osoitteeseen. Tietomalli tehdään ensin, koska kaikki yhteenvedot lasketaan sen tauluista, ja julkaisu on helpointa korjata, kun rikottavaa on vähän.", kuvassa: ["Työkalut → suunnitelma ja tietomalli → julkinen osoite", "Julkaisuputki toimii, ennen kuin mitään voi rikkoa."], viikot: [1, 2, 3], vari: "#1a6fae" },
    { tunnus: "2", lyhyt: "Kirjaaminen", otsikko: "Tuntien kirjaaminen", kuvaus: "Rakennat kirjautumisen ja roolit, tuntikirjauksen, projektien hallinnan ja omien kirjausten käsittelyn. Vaiheen lopussa työntekijät kirjaavat tunnit oikeisiin projekteihin ja sinä kirjaat omasi, joten raportteihin kertyy aitoa dataa.", kuvassa: ["Roolit → tuntikirjaus → hallinta → omat kirjaukset", "Kirjauksia kertyy, ja niistä voi laskea yhteenvedot."], viikot: [4, 5, 6, 7], vari: "#0e7490" },
    { tunnus: "3", lyhyt: "Yhteenvedot", otsikko: "Yhteenvedot ja asiakaskatselmointi", kuvaus: "Lasket kirjauksista yhteenvedot kolmella ryhmittelyllä ja teet niistä kaaviot. Asiakkaan roolissa oleva testaaja kokeilee väliversiota, ja hänen palautteensa ohjaa loppua.", kuvassa: ["Laskenta → kaaviot → asiakaskatselmointi", "Projektipäällikkö näkee ajantasaiset yhteenvedot."], viikot: [8, 9, 10], vari: "#b83280" },
    { tunnus: "4", lyhyt: "Viimeistely", otsikko: "Viimeistely ja laatu", kuvaus: "Toteutat katselmoinnin tärkeimmän muutoksen, teet sovelluksesta puhelimella ja näppäimistöllä toimivan ja arvioit tietoturvan. Testaus ja dokumentaatio kootaan valmiiksi ennen julkaisua.", kuvassa: ["Palautemuutos → mobiili → tietoturva → testaus → ohjeet", "Sovellus kestää oikeat käyttäjät ja virheet."], viikot: [11, 12, 13, 14, 15], vari: "#a16207" },
    { tunnus: "5", lyhyt: "Julkaisu ja näyttö", otsikko: "Julkaisu ja näyttö", kuvaus: "Ulkopuolinen testaaja kokeilee julkaisuehdokasta pelkän kirjallisen ohjeen avulla. Korjaat estävät virheet, julkaiset v1.0:n ja kokoat näyttöaineiston.", kuvassa: ["Julkaisuehdokas → v1.0 → näyttö", "Tiimi saa osoitteen ja ohjeen, jolla pääsee alkuun."], viikot: [16, 17, 18], vari: "#6d28d9" }
  ],
  poikkeamat: {
    vaiheita: "viisi vaihetta: tuntien kirjaaminen ja yhteenvedot ovat eri tuloksia (kirjauksia kertyy vs. niistä lasketut raportit), ja yhdessä ne olisivat seitsemän viikon vaihe, jossa asiakaskatselmointi jää vaiheen sisälle ilman omaa välitulosta"
  },
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 844,
    alt: "TuntiTutkan viisi vaihetta: 1 valmistelu ja julkaistu runko työviikoilla 1–3, 2 tuntien kirjaaminen työviikoilla 4–7, 3 yhteenvedot ja asiakaskatselmointi työviikoilla 8–10, 4 viimeistely ja laatu työviikoilla 11–15 sekä 5 julkaisu ja näyttö työviikoilla 16–18."
  },
  vaiheetJohdanto: "Ensin teet suunnitelman ja tietomallin ja varmistat, että sovellus pääsee verkkoon. Sitten rakennat kirjaamisen, koska yhteenvedot lasketaan kirjatuista tunneista. Asiakkaan palaute ohjaa viimeistelyä, ja lopuksi ulkopuolinen testaaja varmistaa, että sovellus ja ohje toimivat ilman sinua.",
  vaiheetHuomio: "Työviikot ovat järjestysnumeroita, eivät kalenteriviikkoja. Projektissa ei ole lomia eikä lyhyitä viikkoja. Tehtävistä sovitaan ohjaajan kanssa joka viikko, katselmoinnit ovat työviikoilla 10 ja 16, ja katselmoijat nimetään viimeistään työviikolla 8.",

  /* ---- opiskelijalle näkyvä työn tasojen nimeäminen (moottori v2.7) ---- */
  tekstit: {
    goalListLabel: "Käyttäjän työnkulku",
    tasksLead: "Tee työvaiheet järjestyksessä. Ensimmäinen keskeneräinen vaihe on auki. Kun toteutat muutoksen sovellukseen, kirjaa se GitHub-issueksi ja tee se Työtapa-sivun kuudella askeleella."
  },

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
    16: "Julkaisuehdokas",
    17: "Julkaisu v1.0",
    18: "Näyttö"
  },

  /* ---- sanasto: vain tämän projektin oikeasti käyttämät termit ---- */
  termisto: [
    { termi: "repository", nimi: "repo, projektin kansio versionhallinnassa", selite: "GitHubissa oleva projektin kansio, jossa koodi, dokumentit ja koko muutoshistoria säilyvät. TuntiTutkan repositoryssa ovat kansiot client/, server/ ja project-docs/.", viikko: 1 },
    { termi: "commit", nimi: "yksi tallennettu muutos", selite: "Git-historiaan tallennettu muutos ja sen viesti. Yksi commit on yksi looginen muutos, ja commit-historia on itsessään näyttöaineistoa.", viikko: 1 },
    { termi: "frontend", nimi: "selaimessa toimiva osa", selite: "Se osa sovelluksesta, jonka käyttäjä näkee ja jota hän klikkaa. TuntiTutkan frontend tehdään Sveltellä ja Vitellä kansioon client/." },
    { termi: "backend", nimi: "palvelimella toimiva osa", selite: "Se osa sovelluksesta, joka ajetaan palvelimella: rajapinta, käyttöoikeudet ja tietokantayhteys. TuntiTutkan backend tehdään Node.js:llä ja Expressillä kansioon server/." },
    { termi: "p1, s1, k1", nimi: "näyttömatriisin vaatimustunnukset", selite: "Viikkojen Näytä-riveillä olevat tunnukset viittaavat näyttömatriisin osaamisvaatimuksiin: p on Ohjelmointi, s on Ohjelmistokehittäjänä toimiminen ja k on ohjelmistokomponenttikirjasto. Numero yksilöi vaatimuksen, esimerkiksi s7." },
    { termi: "P0", nimi: "pakollinen ydin", selite: "Ominaisuudet, joiden on valmistuttava ennen mitään lisäominaisuuksia: kirjautuminen ja roolit, tuntikirjaus, omat kirjaukset ja lasketut yhteenvedot. P0 tehdään ensin.", viikko: 2 },
    { termi: "P1", nimi: "tärkeä jatkosisältö", selite: "Sisältö, joka tehdään vasta kun P0 toimii. TuntiTutkassa P1 on kaaviot, mobiilihionta ja yhteenvetojen vienti taulukkotiedostoksi.", viikko: 2 },
    { termi: "P2", nimi: "valinnainen lisä", selite: "Sisältö, joka voidaan jättää kokonaan pois ilman että työ jää kesken. TuntiTutkassa P2 on kirjausmuistutus ja usean viikon vertailu.", viikko: 2 },
    { termi: "GitHub-issue", nimi: "yhden muutoksen tehtäväkortti GitHubissa", selite: "Yksi rajattu muutos sovellukseen: tavoite, hyväksymiskriteerit ja työmääräarvio. Yksi issue on tyypillisesti puolen tai yhden päivän työ, ja siihen viitataan numerolla, esimerkiksi #12. Sivun työvaihe voi sisältää useita issueita, ja jokainen issue tehdään Työtapa-sivun kuudella askeleella.", viikko: 2 },
    { termi: "API", nimi: "sovelluksen rajapinta", selite: "Palvelimen osoitteet, joita selain kutsuu tietojen hakemiseen ja tallentamiseen, esimerkiksi /api/kirjaukset. TuntiTutkan rajapinta tarkistaa oikeudet itse: käyttöliittymästä piilotettu nappi ei ole suojaus.", viikko: 3 },
    { termi: "JSON", nimi: "tekstimuotoinen tietomuoto", selite: "Tapa esittää tieto nimi–arvo-pareina tekstinä. TuntiTutkassa JSON on sekä yksi vertailtavista tietovarastoista (JSON-tiedosto) että muoto, jossa rajapinta palauttaa kirjaukset ja raportit selaimelle.", viikko: 3 },
    { termi: "build", nimi: "valmiiksi käännetty tuotantoversio", selite: "Komennolla tuotettu versio sovelluksesta, joka viedään palvelimelle. Kehityspalvelin ei ole build: julkaistava versio syntyy aina erikseen.", viikko: 3 },
    { termi: "CSV", nimi: "taulukkotiedostomuoto", selite: "Tekstitiedosto, jossa sarakkeet on erotettu toisistaan ja jonka taulukkolaskenta avaa sellaisenaan. TuntiTutkassa yhteenvetojen vienti CSV-tiedostoksi on P1-sisältöä." },
    { termi: "middleware", nimi: "välikerros", selite: "Palvelimen funktio, joka tarkistaa jokaisen pyynnön ennen kuin reitin oma käsittelijä ajetaan. TuntiTutkassa middleware tarkistaa kirjautumisen (401) ja roolin (403).", viikko: 4 },
    { termi: "REST", nimi: "rajapinnan osoitetyyli", selite: "Tapa rakentaa rajapinta niin, että osoite kertoo kohteen ja HTTP-metodi toiminnon: GET /api/kirjaukset hakee kirjaukset ja POST /api/kirjaukset lisää uuden.", viikko: 5 },
    { termi: "CRUD", nimi: "luonti, luku, muokkaus ja poisto", selite: "Tietueen neljä perustoimintoa. Projektien CRUD tarkoittaa, että projektipäällikkö voi luoda, listata, muokata ja poistaa projektit itse ilman että tietokantaan kosketaan käsin.", viikko: 6 },
    { termi: "SQL", nimi: "tietokannan kyselykieli", selite: "Kieli, jolla tietoa haetaan ja muokataan SQLite-kannassa. TuntiTutkan yhteenvedot lasketaan SQL-kyselyllä jokaisella pyynnöllä, eikä summia tallenneta mihinkään.", viikko: 8 },
    { termi: "haara", nimi: "branch", selite: "Oma kehityslinja, jossa muutoksen voi tehdä rikkomatta pääversiota. Työviikolla 11 palautemuutos tehdään omassa haarassa ja yhdistetään pääversioon vasta katselmoinnin jälkeen.", viikko: 11 },
    { termi: "pull request", nimi: "PR, pyyntö yhdistää haara pääversioon", selite: "GitHubissa avattava pyyntö, jossa haaran muutokset esitellään, katselmoidaan ja yhdistetään pääversioon. Kuvaus kertoo mitä muutettiin ja miksi. Lyhenne on PR.", viikko: 11 },
    { termi: "XSS", nimi: "skriptin ujuttaminen syötteeseen", selite: "Hyökkäys, jossa syötekenttään kirjoitettu skripti ajetaan toisen käyttäjän selaimessa. TuntiTutkassa testataan, että kirjauksen selitekenttään kirjoitettu skripti näkyy pelkkänä tekstinä.", viikko: 13 },
    { termi: "T01", nimi: "testitapauksen tunnus", selite: "T tarkoittaa testitapausta ja numero yksilöi sen: T01 on ensimmäinen testitapaus ja T02 toinen. TuntiTutkassa tapauksia on 14 (T01–T14), ja jokaisen odotettu tulos kirjataan ennen ajoa.", viikko: 14 },
    { termi: "RC", nimi: "release candidate, julkaisuehdokas", selite: "Lähes valmis versio, joka julkaistaan ja testataan ennen lopullista julkaisua. TuntiTutkan ensimmäinen julkaisuehdokas on v1.0-rc1 työviikolla 16.", viikko: 16 },
    { termi: "tagi", nimi: "versiomerkintä Git-historiassa", selite: "Nimilappu, joka kiinnitetään tiettyyn committiin, jotta juuri se versio löytyy myöhemmin: v1.0-rc1 ja v1.0. Release on tagin ympärille tehty julkaisumerkintä kuvauksineen.", viikko: 16 }
  ],

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
      evidence: "Esim. commit-linkki, GitHub-issue #12, testitapaus T05 tai kuvakaappaus.",
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
      "## 3. Prioriteetit P0, P1 ja P2 (esitäytetty)",
      "",
      "P0 on pakollinen ydin, jonka on valmistuttava. P1 on tärkeä jatkosisältö,",
      "joka tehdään kun P0 toimii. P2 on valinnainen lisä, joka voidaan jättää pois.",
      "",
      "**P0:** kirjautuminen ja roolit · tuntikirjaus validointeineen · omat",
      "kirjaukset ja oma viikkosumma · projektien, projektityyppien ja",
      "tehtävälajien hallinta · projektin jäsenyydet · lasketut yhteenvedot",
      "kolmella ryhmittelyllä ja porautuminen.",
      "",
      "**P1:** kaaviot, mobiilihionta, yhteenvetojen vienti taulukkotiedostoksi",
      "(CSV). **P2:** kirjausmuistutus, usean viikon vertailu.",
      "",
      "### Mitä EI toteuteta",
      "",
      arvo("rajaus"),
      "",
      "## 4. Laskentaperiaate (esitäytetty)",
      "",
      "Yhteenvetoja ei tallenneta. Ne lasketaan kirjauksista jokaisella pyynnöllä.",
      "Tietokantaan ei tule summataulua.",
      "",
      "### Tietomalli: taulut, avaimet ja mitä EI tallenneta",
      "",
      arvo("tietomalli"),
      "",
      "## 5. Teknologia ja sovittu toteutustapa (esitäytetty)",
      "",
      "Svelte + Vite (frontend eli selaimessa toimiva osa), Node.js + Express",
      "(backend eli palvelimella toimiva osa), SQLite (tietovarasto).",
      "SQLite on sovittu toteutustapa, koska myöhemmät työviikot rakentuvat sen",
      "varaan. Työviikolla 2 perustelet sen vertailemalla sitä JSON-tiedostoon ja",
      "PostgreSQLiin (s8). Jos vertailu puoltaa selvästi muuta, poikkeamasta",
      "sovitaan ohjaajan kanssa ennen työviikkoa 3.",
      "Ulkoiset komponentit: reitityskirjasto ja kaaviokirjasto (valinnat",
      "perustellaan alla). Valmista käyttöliittymäkirjastoa ei käytetä: rakenne,",
      "saavutettavuusratkaisut ja CSS tehdään itse.",
      "",
      "## 6. Omat päätökset perusteluineen",
      "",
      "### Tietovaraston perustelu: sovittu SQLite vs. JSON-tiedosto ja PostgreSQL – työviikko 2",
      "",
      "JSON on tekstimuotoinen tietomuoto, jossa tieto on nimi–arvo-pareina.",
      "",
      arvo("tietovarasto"),
      "",
      "### Julkaisualusta (Render / Fly.io / Railway) – työviikko 3",
      "",
      arvo("julkaisualusta"),
      "",
      "### Istuntotapa (evästesessio / token) – työviikko 4",
      "",
      arvo("istuntotapa"),
      "",
      "### Komponenttijako: näkymät ja komponenttien vastuut – työviikot 5 ja 15",
      "",
      arvo("komponenttijako"),
      "",
      "### Reitityskirjasto – työviikko 6",
      "",
      arvo("reitityskirjasto"),
      "",
      "### Viikkokäytäntö: ISO-viikko vai muu, viikon- ja vuodenvaihde – työviikko 7",
      "",
      arvo("viikkokaytanto"),
      "",
      "### Kaaviokirjasto – työviikko 9",
      "",
      arvo("kaaviokirjasto"),
      "",
      "## 7. Avoimet asiat – ohjaaja omistaa",
      "",
      "Näitä ei päätetä itse eikä tekoälyllä. Tyhjä kenttä on oikea tulos siihen",
      "asti, kunnes asia on sovittu.",
      "",
      onTäytetty("lisenssi")
        ? `- **Lisenssi:** ${arvo("lisenssi")}`
        : "- **Lisenssi:** EI VIELÄ SOVITTU, avoin asia (kysytään työviikolla 1, viimeistään 15)",
      onTäytetty("julkisuus")
        ? `- **Repositoryn julkisuus, tekijänimi ja alaikäisen huoltajan suostumus:** ${arvo("julkisuus")}`
        : "- **Repositoryn julkisuus, tekijänimi ja alaikäisen huoltajan suostumus:** EI VIELÄ SOVITTU, avoin asia (kuittaus työviikolla 1)",
      onTäytetty("katselmoijat")
        ? `- **Katselmoijien roolit (työviikot 10 ja 16, vain roolit, nimet ohjaajalle Teamsissa):** ${arvo("katselmoijat")}`
        : "- **Katselmoijien roolit (työviikot 10 ja 16, vain roolit, nimet ohjaajalle Teamsissa):** EI VIELÄ SOVITTU, avoin asia (nimeäminen viimeistään työviikolla 8)",
      onTäytetty("alustalinja")
        ? `- **Oppilaitoksen linja julkaisualustoista:** ${arvo("alustalinja")}`
        : "- **Oppilaitoksen linja julkaisualustoista:** EI VIELÄ SOVITTU, avoin asia (vaikuttaa työviikon 3 valintaan)",
      onTäytetty("perusteversio")
        ? `- **Perusteversion siirtymäsääntö (OPH-6216-2025):** ${arvo("perusteversio")}`
        : "- **Perusteversion siirtymäsääntö (OPH-6216-2025):** EI VIELÄ SOVITTU, avoin asia",
      onTäytetty("arviointi")
        ? `- **Arvioinnin järjestelyt (työviikko 18):** ${arvo("arviointi")}`
        : "- **Arvioinnin järjestelyt (työviikko 18):** EI VIELÄ SOVITTU, avoin asia",
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
      feature: "Svelte-sovellusrunko käynnistyy omalla koneellasi README:n ohjeilla, ja julkinen repository on tarkistettu.",
      connection: "Lähtöaineistona on toimeksianto, ja tällä viikolla syntyvät kehitysympäristö, julkinen repository ja käynnistyvä Svelte-runko. Git-historia on itsessään työnäyte, joten se aloitetaan ensimmäisenä työpäivänä. Kysymyslistan vastauksilla rajaat työviikolla 2 sen, mitä rakennetaan.",
      deliverable: "Asennetut työkalut versioineen, julkinen repository tarkistuslistoineen, käynnistyvä Svelte + Vite -runko, kansiorakenne ja kysymyslista ohjaajalle.",
      why: "Ilman toimivaa ympäristöä ja repoa yksikään myöhempi viikko ei tuota näyttöaineistoa: Git-historia on s12-työnäyte ja sen pitää alkaa päivästä 1.",
      done: "Repositoryssa on käynnistyvä Svelte-runko ja README, jossa on käynnistyskomennot; ohjaaja on kuitannut julkisen repon tarkistuslistan; kysymyslistassa on vähintään kuusi kysymystä.",
      record: "Kirjoita työviikon 1 merkintään: asennetut työkalut versioineen, repositoryn osoite, ensimmäisen commitin tunnus, kysymyslistan kysymykset ja se, mitkä julkisuusasiat jäivät avoimiksi.",
      skills: ["kehitysympäristö", "Git", "npm ja Vite", "projektin rakenne"],
      termit: ["repository", "commit"],
      tehtavat: {
        "1-1": {
          miksi: "Kirjatut versiot kertovat, millä ympäristöllä sovellus toimii. Pelkkä ”asensin” ei riitä työnäytteeksi, koska sitä ei voi todentaa jälkikäteen.",
          osat: [
            ["Asenna työkalut", "Asenna Node LTS eli pitkään tuettu vakaa versio, VS Code ja Git."],
            ["Tarkista versiot", "Aja komennot `node -v`, `npm -v` ja `git --version` ja kirjoita tulokset muistiin."],
            ["Kirjaa versiotaulukko", "Tee `README.md`-tiedostoon taulukko: työkalu, versio ja tarkistuskomento, esimerkiksi Node 20.11.1 → `node -v`."]
          ],
          valmis: "README.md:ssä on taulukko, jossa jokaisella työkalulla on versio ja tarkistuskomento.",
          tallenna: "README.md repositoryyn ensimmäisessä commitissa (työvaihe 4). Versiot myös työviikon 1 päiväkirjaan."
        },
        "1-2": {
          miksi: "Repositoryssa säilyvät koodi, dokumentit ja koko muutoshistoria. Julkisuustarkistus suojaa sinua ja muita, ennen kuin mitään julkaistaan.",
          osat: [
            ["Luo repository", "Luo GitHubiin repository eli repo: projektin kansio versionhallinnassa. Kloonaa se omalle koneellesi."],
            ["Käy tarkistuslista läpi", "Käy julkisen repon tarkistuslista läpi: ei henkilötietoja, ei koulun tunnisteita eikä muiden nimiä."],
            ["Sovi tekijänimi", "Sovi ohjaajan kanssa, millä nimellä esiinnyt repositoryssa. Jos olet alaikäinen, huoltajan suostumus hoidetaan ohjaajan kautta."],
            ["Pyydä kuittaus", "Pyydä ohjaajalta tarkistuslistaan kirjallinen kuittaus. Kirjaa kuittaamatta jäävät asiat avoimiksi asioiksi, kunnes ne on sovittu."]
          ],
          valmis: "Repository on olemassa, ja ohjaaja on kuitannut julkisen repon tarkistuslistan kirjallisesti.",
          tallenna: "Repositoryn osoite ja julkisuusasioiden tila työviikon 1 päiväkirjaan. Avoimiksi jääneet asiat suunnitelman OHJAAJA-kenttiin.",
          sanat: ["repository"]
        },
        "1-3": {
          miksi: "Käynnistyvä runko todistaa, että kehitysympäristö toimii. Kansiot erottavat selaimen, palvelimen ja dokumentit toisistaan koko projektin ajan.",
          osat: [
            ["Luo sovellusrunko", "Luo Svelte + Vite -projekti kansioon `client/` komennolla `npm create vite@latest` (pohja svelte) ja aja `npm install`."],
            ["Käynnistä kehityspalvelin", "Aja `npm run dev` ja avaa sovellus selaimessa. Ota kuvakaappaus käynnistyneestä rungosta."],
            ["Luo kansiorakenne", "Luo kansiot `server/` ja `project-docs/`. Lisää `.gitignore`, joka estää kansion `node_modules/`, tietokantatiedostot `*.db` ja tiedoston `.env`."],
            ["Kirjoita README", "Kirjoita README:hen, mitä olet tekemässä, kenelle ja millä komennoilla projekti käynnistyy."]
          ],
          valmis: "`npm run dev` avaa rungon selaimessa, ja kansiot `client/`, `server/` ja `project-docs/` sekä README ja .gitignore ovat olemassa.",
          tallenna: "Kuvakaappaus käynnistyneestä rungosta työviikon 1 päiväkirjaan. Kansiot ja README menevät repositoryyn työvaiheen 4 commitissa."
        },
        "1-4": {
          miksi: "Kun kysyt epäselvät kohdat, ne ratkeavat ennen työviikon 2 rajausta eikä niitä tarvitse arvata. Ensimmäinen commit aloittaa Git-historian, joka on osa näyttöaineistoa.",
          osat: [
            ["Lue toimeksianto", "Lue toimeksianto läpi ja alleviivaa pakolliset asiat. Asiakkaan ydinkipu on raportointi, ei kirjaaminen."],
            ["Kirjoita kysymykset", "Kirjoita jokaisesta epäselvästä kohdasta kysymys tiedostoon `project-docs/kysymykset.md`. Ohjaaja vastaa asiakkaan sijaisena. Tavoite on vähintään kuusi kysymystä."],
            ["Kysy lisenssistä", "Ota kysymyslistaan mukaan lisenssi. Toimeksiannon mukaan se kysytään ohjaajalta jo työviikolla 1."],
            ["Tee ensimmäinen commit", "Tee commit eli tallenna muutos Git-historiaan viestillä, joka kertoo projektin perustamisesta, esimerkiksi ”Perusta projekti, kansiorakenne ja Svelte-runko”."],
            ["Vie GitHubiin", "Vie commit etärepositoryyn eli GitHubiin komennolla `git push` ja tarkista, että tiedostot näkyvät GitHubissa."]
          ],
          valmis: "Kysymyslistassa on vähintään kuusi kysymystä, ja ensimmäinen commit näkyy GitHubissa.",
          tallenna: "`project-docs/kysymykset.md` repositoryyn. Ensimmäisen commitin tunnus ja kysymykset työviikon 1 päiväkirjaan.",
          sanat: ["commit"]
        }
      },
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
      notEnough: "“Asensin kaikki ja kaikki toimii” ilman versionumeroita, kuvakaappausta ja ensimmäistä committia: mitään ei voi todentaa jälkikäteen.",
      paivat: [
        ["Tarve", "Lue toimeksianto ja poimi asiakkaan ydinkipu: raportointi. Aloita kysymyslista ohjaajalle."],
        ["Työkalut", "Asenna Node, VS Code ja Git. Kirjaa versiot README:hen."],
        ["Repository", "Luo GitHub-repository ja käy julkisen repon tarkistuslista läpi ohjaajan kanssa."],
        ["Sovellusrunko", "Luo Svelte + Vite -runko ja kansiot client/, server/ ja project-docs/. Kirjoita README:n käynnistyskomennot."],
        ["Talteen", "Täydennä kysymyslista, tee ensimmäinen commit ja push ja kokeile, että runko käynnistyy README:n ohjeilla."]
      ]
    },

    2: {
      type: "pohjustus",
      feature: "Ohjaaja hyväksyy suunnitelmasi: jokaisella pakollisen ytimen (P0) tarinalla on GitHub-issue, hyväksymiskriteerit ja työmääräarvio.",
      excerpt: "Pahin puute ei ole kirjaaminen vaan raportointi.",
      connection: "Työviikon 1 kysymyslista saa nyt vastaukset, ja toimeksianto muuttuu priorisoiduiksi käyttäjätarinoiksi, tietomalliksi ja GitHub-issueiksi. Tietomallin päätös ”lasketaan, ei tallenneta” ratkaisee jo nyt, ettei sovellukseen synny summatauluja, joita pitäisi pitää ajan tasalla. Hyväksytyn suunnitelman varaan rakennat työviikolla 3 tietokannan ja julkaistun rungon.",
      deliverable: "project-docs/suunnitelma.md, tietomallikaavio, tietovarastovertailu, rautalangat kirjaus- ja raporttinäkymästä sekä issue-taulu työmääräarvioineen.",
      why: "Ilman priorisointia ominaisuuslista paisuu; ilman tietomallia raporttilaskenta menee uusiksi. Päätös “lasketaan, ei tallenneta” ratkaisee tässä, ettei sovellukseen synny synkronoitavia summatauluja.",
      done: "project-docs/suunnitelma.md on repossa ja ohjaaja on hyväksynyt rajauksen kirjatulla kommentilla; jokaisella P0-tarinalla on issue, hyväksymiskriteerit ja arvio tunteina.",
      record: "Kirjoita työviikon 2 merkintään: P0-rajaus, sovitun SQLiten perustelu vertailuineen, tietomallin taulut ja se, mitä päätit jättää tallentamatta. Liitä linkki issue-tauluun ja ohjaajan hyväksyntään.",
      skills: ["vaatimusmäärittely", "tietomallinnus", "priorisointi", "työn ositus"],
      termit: ["P0", "P1", "P2", "GitHub-issue"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "2-1": {
          miksi: "Käyttäjätarina kertoo, mitä käyttäjä tarvitsee ja miksi. Priorisointi estää ominaisuuslistaa paisumasta, koska keskeneräinen pakollinen ydin painaa arvioinnissa enemmän kuin puuttuva lisäominaisuus.",
          osat: [
            ["Kirjaa ohjaajan vastaukset", "Käy työviikon 1 kysymyslista läpi ohjaajan kanssa, joka toimii asiakkaan sijaisena. Kirjaa jokainen vastaus kysymyksen alle omin sanoin."],
            ["Kirjoita tarinat", "Kirjoita toimeksiannosta käyttäjätarinat muodossa ”Työntekijänä … jotta …” tai ”Projektipäällikkönä … jotta …”. Anna jokaiselle 2–4 hyväksymiskriteeriä."],
            ["Priorisoi ohjaajan kanssa", "Merkitse tarinat prioriteetein yhdessä ohjaajan kanssa. P0 on pakollinen ydin, P1 on tärkeä jatko ja P2 on valinnainen lisä."],
            ["Kirjaa perustelut", "Kirjoita jokaisen prioriteetin viereen perustelu, älä pelkkää kirjainta. Täytä suunnitelmaan tavoite ja käyttäjäryhmät omin sanoin."]
          ],
          valmis: "Jokaisella tarinalla on 2–4 hyväksymiskriteeriä ja perusteltu prioriteetti, ja ohjaajan vastaukset on kirjattu kysymyslistaan.",
          tallenna: "Käyttäjätarinat ja kysymyslista vastauksineen `project-docs/`-kansioon. P0-rajaus työviikon 2 päiväkirjaan.",
          sanat: ["P0","P1","P2"]
        },
        "2-2": {
          miksi: "Tietomalli ratkaisee, mistä raportit lasketaan. Jos summat tallennettaisiin, jokainen muokkaus ja poisto vaatisi myös summien päivityksen.",
          osat: [
            ["Piirrä taulut", "Piirrä taulut kayttaja, projekti, projektityyppi, tehtavalaji, kirjaus ja projektin_jasen. Merkitse pääavaimet, viiteavaimet ja pakolliset kentät."],
            ["Kirjaa periaate", "Kirjoita kaavion viereen periaate: yhteenvetosummia ei tallenneta, vaan ne lasketaan kirjauksista jokaisella pyynnöllä."],
            ["Tarkista tarinoita vasten", "Käy jokainen pakollisen ytimen (P0) tarina läpi mallia vasten: löytyykö jokaiselle hyväksymiskriteerille kenttä tai taulu? Jos ei, täydennä mallia."],
            ["Kirjaa suunnitelmaan", "Kirjoita taulut, avaimet ja se, mitä ei tallenneta, suunnitelman Tietomalli-kenttään."]
          ],
          valmis: "Tietomallikaaviossa on kaikki kuusi taulua avaimineen, ja periaate ”summia ei tallenneta” on kirjattu kaavioon ja suunnitelmaan.",
          tallenna: "Tietomallikaavio kuvana `project-docs/`-kansioon. Taulut ja tallentamatta jätettävät summat työviikon 2 päiväkirjaan.",
          sanat: ["P0"]
        },
        "2-3": {
          miksi: "SQLite on sovittu toteutustapa, koska myöhemmät työviikot rakentuvat sen varaan. Työviikolla 2 perustelet sen vertailemalla sitä JSON-tiedostoon ja PostgreSQLiin (s8). Jos vertailu puoltaa selvästi muuta, poikkeamasta sovitaan ohjaajan kanssa ennen työviikkoa 3.",
          osat: [
            ["Tee vertailutaulukko", "Vertaa SQLiteä JSON-tiedostoon ja PostgreSQLiin. JSON on tekstimuotoinen tietomuoto, jossa tieto on nimi–arvo-pareina."],
            ["Käytä omia kriteereitä", "Arvioi vaihtoehdot oman datasi rakenteen, käyttötilanteen ja laajuuden perusteella, älä yleisten ominaisuuksien."],
            ["Kirjaa perustelu", "Kirjoita suunnitelman Tietovarasto-kenttään, miksi SQLite sopii tähän sovellukseen ja mikä siinä jää vaihtoehtoja huonommaksi."],
            ["Tarkista poikkeama", "Jos vertailu puoltaa selvästi muuta kuin SQLiteä, sovi poikkeamasta ohjaajan kanssa ennen työviikkoa 3 ja kirjaa sopimus suunnitelmaan."]
          ],
          valmis: "SQLiteä on verrattu JSON-tiedostoon ja PostgreSQLiin omilla kriteereilläsi, ja perustelu omilla tauluillasi on suunnitelmassa.",
          tallenna: "Vertailutaulukko `project-docs/`-kansioon. Perustelu työviikon 2 päiväkirjaan.",
          sanat: ["JSON"]
        },
        "2-4": {
          miksi: "Rautalanka näyttää ennen koodia, mitä kenttiä ja toimintoja näkymissä on. Issueiksi pilkottu työ näyttää, mitä tehdään seuraavaksi ja kauanko se kestää.",
          osat: [
            ["Piirrä rautalangat", "Piirrä kirjausnäkymä ja raporttinäkymä käsin tai piirtotyökalulla. Rautalanka on yksinkertainen näkymäluonnos ilman värejä. Merkitse kummankin kentät ja toiminnot."],
            ["Pilko issueiksi", "Pilko pakollisen ytimen (P0) tarinat GitHub-issueiksi. Yksi issue on tyypillisesti puolen tai yhden päivän työ."],
            ["Lisää kriteerit ja arviot", "Kirjoita jokaiseen issueen hyväksymiskriteerit ja työmääräarvio tunteina. Arvioihin palataan työviikolla 7."],
            ["Vie suunnitelma repositoryyn", "Täytä Suunnitelma-näkymän kentät, lataa `suunnitelma.md` ja tallenna se polkuun `project-docs/suunnitelma.md` commitilla."],
            ["Pyydä hyväksyntä", "Pyydä ohjaajalta kirjattu hyväksyntä rajaukselle, esimerkiksi kommenttina issueen. Suunnitelma hyväksytään ennen työviikkoa 3."]
          ],
          valmis: "Jokaisella P0-tarinalla on issue, hyväksymiskriteerit ja arvio tunteina, ja ohjaajan hyväksyntä on kirjattu.",
          tallenna: "Rautalangat ja `suunnitelma.md` `project-docs/`-kansioon. Linkki issue-tauluun ja ohjaajan hyväksyntään työviikon 2 päiväkirjaan.",
          sanat: ["GitHub-issue","P0"]
        }
      },
      help: {
        title: "Tietomallin ja käyttäjätarinoiden pohjat",
        tree: "kayttaja       (id, nimi, sposti, salasana_hash, rooli, puhelin)\nprojekti       (id, nimi, tyyppi_id → projektityyppi, alkaa, paattyy, kuvaus)\nprojektityyppi (id, nimi)\ntehtavalaji    (id, tunnus, kuvaus)\nkirjaus        (id, kayttaja_id, projekti_id, tehtavalaji_id, paiva, tunnit, selite)\nprojektin_jasen(projekti_id, kayttaja_id)\n\nEI TAULUA: viikkosumma, henkilosumma, tehtavalajisumma",
        actions: [
          "Kirjoita jokainen käyttäjätarina hyväksymiskriteereineen ennen kuin piirrät tietomallin.",
          "Merkitse tietomalliin pääavaimet, viiteavaimet ja pakolliset kentät.",
          "Kirjoita vertailutaulukko kolmesta tietovarastosta ja perustele sovittu SQLite omalla datallasi.",
          "Luo issuet ja kirjaa jokaiseen arvio tunteina. Arvioihin palataan työviikolla 7."
        ],
        code: "TIETOMALLIN TARKISTUSLISTA\n[ ] jokaisella taululla on pääavain\n[ ] kirjaus viittaa käyttäjään, projektiin ja tehtävälajiin\n[ ] projektin jäsenyys on oma taulunsa (moni-moneen)\n[ ] tunnit on desimaaliluku, ei teksti\n[ ] päivä on yksiselitteisessä muodossa (esim. YYYY-MM-DD)\n[ ] EI summataulua: kirjaa tämä päätös näkyviin\n\nKÄYTTÄJÄTARINAPOHJA\n<roolina> <teen jotain>, jotta <hyöty>.\nHyväksymiskriteerit:\n1) …  2) …  3) …\nPrioriteetti: P0 / P1 / P2   Arvio: __ h",
        test: "Käy jokainen P0-tarina läpi tietomallia vasten ja kysy: löytyykö jokaiselle kriteerille kenttä tai taulu? Jos ei, tietomalli on kesken."
      },
      example: "Käyttäjätarina “Työntekijänä kirjaan tunnit projektille ja tehtävälajille, jotta projektipäällikkö näkee ajantasaisen tilanteen” + kolme hyväksymiskriteeriä + arvio 6 h + issue #12.",
      notEnough: "Ominaisuuslista ilman prioriteetteja, ja tietovarastoperustelu “SQLite on kevyt ja suosittu” ilman kytkentää omaan dataan."
    },

    3: {
      type: "feature",
      feature: "Kuka tahansa voi avata TuntiTutkan julkisesta osoitteesta, ja osoite `/api/health` vastaa toisen henkilön laitteella.",
      connection: "Työviikon 2 tietomalli muuttuu nyt ajettavaksi skeemaksi, ja sovellus saa palvelimen. Koko julkaisuputki testataan tällä viikolla, koska se on helpointa korjata, kun sovelluksessa ei vielä ole mitään rikkoutuvaa. Samaa julkaisuputkea käytät julkaisuehdokkaaseen ja v1.0:aan asti.",
      deliverable: "Express-palvelin health-reitteineen, SQLiten init-skripti, perusteltu julkaisualustavalinta, julkinen osoite README:ssä ja kirjallinen k2-selvitys (osaamisvaatimus k2: mitä Svelte ja Vite ratkaisevat ja mitä eivät).",
      why: "Webprofiilin sääntö: tyhjä sivu tuotannossa on parempi kuin valmis sivu localhostissa: julkaisuputki testataan kun se on vielä pieni, ei työviikolla 16 paniikissa.",
      done: "/api/health palauttaa 200 julkisessa osoitteessa toisen henkilön selaimella testattuna; init-skripti luo skeeman tyhjään tietokantaan; k2-selvitys ja alustaperustelu ovat repossa.",
      record: "Kirjoita työviikon 3 merkintään: julkinen osoite, valittu julkaisualusta ja kriteerit joilla valitsit sen, mitä julkaisussa meni pieleen ja miten korjasit sen. Liitä k2-selvitys.",
      skills: ["Express", "SQLite", "julkaisuputki", "ympäristöasetukset"],
      termit: ["API", "JSON", "build"],
      tehtavat: {
        "3-1": {
          miksi: "Palvelin on se osa, joka myöhemmin tarkistaa oikeudet ja laskee raportit. Health-reitti kertoo yhdellä kutsulla, että palvelin vastaa.",
          osat: [
            ["Tee palvelin", "Rakenna `server/index.js`, joka tarjoaa Sveltin tuotantobuildin staattisena. Build on valmiiksi käännetty, julkaistava versio sovelluksesta."],
            ["Lisää health-reitti", "Tee reitti `/api/health`, joka palauttaa JSONin, esimerkiksi `{ tila: \"ok\" }`, ja HTTP-koodin 200. Se on oman rajapintasi (API) ensimmäinen osoite."],
            ["Kytke dev-proxy", "Lisää Viten asetuksiin proxy eli välitysasetus, joka ohjaa kehityspalvelimen `/api`-kutsut Express-palvelimelle."],
            ["Kokeile molemmat", "Avaa `/api/health` sekä Expressin osoitteessa että Viten kehityspalvelimen kautta. Saman vastauksen pitää näkyä molemmissa."]
          ],
          valmis: "`/api/health` palauttaa 200 ja JSONin sekä Expressin osoitteessa että Viten proxyn kautta.",
          tallenna: "`server/index.js`, reitti ja proxy-asetus commitilla repositoryyn.",
          sanat: ["build","API","JSON"]
        },
        "3-2": {
          miksi: "Kun skeema on koodissa, tietokannan voi luoda samalla tavalla mihin tahansa ympäristöön. Käsin klikattua rakennetta ei voi toistaa.",
          osat: [
            ["Kirjoita init-skripti", "Skeema tarkoittaa tietokannan taulurakennetta. Kirjoita `server/init-db.js`, joka luo työviikon 2 tietomallin taulut tyhjään tietokantaan."],
            ["Keskitä yhteys", "Tee tietokantayhteys yhteen paikkaan, esimerkiksi `server/db.js`, jotta reitit eivät avaa omia yhteyksiään."],
            ["Aja ja tarkista", "Aja skripti tyhjään tietokantatiedostoon ja tarkista, että kaikki taulut syntyivät eikä summataulua ole."]
          ],
          valmis: "Init-skripti luo tyhjään tietokantaan kaikki tietomallin taulut, eikä tietokantatiedosto ole repositoryssa.",
          tallenna: "`server/init-db.js` ja `server/db.js` commitilla. Skeema ja init-skripti pohjustavat tietovarastoyhteyden työnäytettä (s9)."
        },
        "3-3": {
          miksi: "Alustan pitää säilyttää SQLite-tiedosto julkaisujen välillä, tai kirjaukset katoavat. Vertailu ennen tilin luontia estää väärän valinnan.",
          osat: [
            ["Tarkista oppilaitoksen linja", "Kysy ohjaajalta oppilaitoksen linja ilmaisista pilvipalveluista, jos se on vielä avoin. Linja rajaa valintaasi."],
            ["Vertaa alustoja", "Vertaa Renderiä, Fly.iota ja Railwayta taulukkona: ilmainen taso, Node-tuki, SQLite-tiedoston pysyvyys ja levy sekä lokit."],
            ["Perustele valinta", "Valitse alusta ja kirjoita perustelu suunnitelman Julkaisualusta-kenttään. Tämä on oma päätöksesi."]
          ],
          valmis: "Alustavertailu on taulukkona, ja valinta on perusteltu suunnitelmassa, ennen kuin loit tilin mihinkään palveluun.",
          tallenna: "Alustavertailu `project-docs/`-kansioon. Valittu alusta ja valintakriteerit työviikon 3 päiväkirjaan."
        },
        "3-4": {
          miksi: "Tyhjä sivu tuotannossa on parempi kuin valmis sivu omalla koneella. Selvitys näyttää, mitä Svelte ja Vite ratkaisevat ja mitä otat muualta.",
          osat: [
            ["Tarkista asetukset", "Varmista, että palvelin kuuntelee alustan antamaa porttia (PORT), tietokantatiedoston polku on ympäristömuuttujassa eikä `.env` ole repositoryssa."],
            ["Julkaise", "Vie runko valitulle alustalle ja kirjaa julkinen osoite README:hen. Ota kuvakaappaus alustan julkaisulokista."],
            ["Tee savutesti", "Savutesti on nopea tarkistus, että perustoiminto vastaa julkaistussa versiossa. Pyydä toista henkilöä avaamaan `/api/health` omalla laitteellaan ja kirjaa tulos."],
            ["Kirjoita selvitys", "Kirjoita taulukkona, mitä Svelte ja Vite ratkaisevat, mitä eivät ja mistä puuttuva otetaan. Tämä on osaamisvaatimuksen k2 työnäyte."]
          ],
          valmis: "`/api/health` palauttaa 200 julkisessa osoitteessa toisen henkilön laitteella, ja selvitys ja alustaperustelu ovat repositoryssa.",
          tallenna: "Julkinen osoite README:hen, julkaisulokin kuvakaappaus ja selvitys `project-docs/`-kansioon. Mitä julkaisussa meni pieleen ja miten korjasit sen, työviikon 3 päiväkirjaan."
        }
      },
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
      feature: "Työntekijä ja projektipäällikkö kirjautuvat sisään ja näkevät roolinsa mukaisen navigaation, ja suojattu reitti vastaa ilman kirjautumista koodilla 401.",
      connection: "Julkaistun rungon päälle tulee ensimmäinen oikea toiminto: käyttäjät ja roolit. Kirjaukset, hallinta ja raportit rajataan roolilla, joten roolit tehdään nyt, eikä jokaista reittiä ja näkymää tarvitse myöhemmin avata uudelleen. Työviikolla 5 kirjautunut työntekijä kirjaa ensimmäiset tuntinsa.",
      deliverable: "Käyttäjätaulu bcrypt-hasheineen ja siemendata, kirjattu istuntotapavertailu ja päätös, kirjautuminen ja uloskirjautuminen sekä autentikointi- ja roolimiddleware.",
      why: "Roolit ovat koko sovelluksen perusta: raportit ja hallinta rajataan roolilla. Jos roolit lisätään jälkikäteen, jokainen reitti ja näkymä pitää avata uudelleen.",
      done: "Väärä salasana antaa selkeän suomenkielisen virheilmoituksen; työntekijä ei näe hallintanavigaatiota; kirjautuminen säilyy sivun päivityksessä; suora API-kutsu ilman kirjautumista palauttaa 401.",
      record: "Kirjoita työviikon 4 merkintään: istuntotapojen vertailu, ohjaajan kanssa tehty päätös perusteluineen sekä se, mitä middleware-ketju tarkistaa ja missä järjestyksessä.",
      skills: ["autentikointi", "bcrypt", "middleware", "roolipohjainen pääsy"],
      termit: ["middleware"],
      tehtavat: {
        "4-1": {
          miksi: "Kirjautuminen tarvitsee käyttäjät ja roolit. Salasana tallennetaan vain hashina, jotta vuotanutkaan tietokanta ei paljasta sitä.",
          osat: [
            ["Tee käyttäjätaulu", "Toteuta `kayttaja`-taulu, jossa on nimi, sähköposti, salasanan hash, rooli ja puhelin."],
            ["Hashaa salasanat", "Tallenna salasanat bcrypt-hashina. Hash on salasanasta laskettu tiiviste, josta alkuperäistä salasanaa ei saa takaisin. Selväkielistä salasanaa ei kirjoiteta lokiin eikä kantaan."],
            ["Luo siemendata", "Luo skripti, joka lisää yhden projektipäällikön ja kaksi työntekijää. Käytä keksittyjä tunnuksia, ei oikeiden ihmisten tietoja."]
          ],
          valmis: "Tietokannassa on yksi projektipäällikkö ja kaksi työntekijää, eikä yhtään salasanaa ole tallennettu selväkielisenä.",
          tallenna: "Taulu ja siemenskripti commitilla repositoryyn."
        },
        "4-2": {
          miksi: "Istuntotapa ratkaisee, miten palvelin tunnistaa kirjautuneen käyttäjän. Yhdessä tehty ja perusteltu päätös on osaamisvaatimuksen p9 työnäyte.",
          osat: [
            ["Vertaa tapoja", "Vertaa evästesessiota ja tokenia eli selaimelle annettavaa tunnistetietoa juuri tässä sovelluksessa: SQLite ja yksi palvelin. Kirjoita molempien hyödyt ja riskit."],
            ["Päätä yhdessä", "Käy vertailu läpi ohjaajan kanssa ennen toteutusta ja tee päätös yhdessä."],
            ["Kirjaa keskustelu", "Kirjaa muistioon päätös, perustelu, keskustelukumppanin rooli (esimerkiksi ohjaaja) ja ajankohta, ei nimeä. Täytä suunnitelman Istuntotapa-kenttä."]
          ],
          valmis: "Vertailu on kirjoitettu tämän sovelluksen ehdoilla, ja yhteinen päätös on kirjattu keskustelukumppanin roolin ja ajankohdan kanssa.",
          tallenna: "Vertailu ja muistio `project-docs/`-kansioon. Päätös perusteluineen työviikon 4 päiväkirjaan."
        },
        "4-3": {
          miksi: "Kirjautuminen kertoo käyttöliittymälle, kuka käyttäjä on ja mikä hänen roolinsa on. Navigaatio näyttää kummallekin roolille vain sen tarvitsemat näkymät.",
          osat: [
            ["Tee kirjautuminen", "Toteuta kirjautumislomake, kirjautuminen ja uloskirjautuminen valitsemallasi istuntotavalla."],
            ["Välitä rooli", "Välitä roolitieto selaimeen, esimerkiksi storeen `client/src/lib/istunto.js`. Kirjautuminen säilyy, kun sivu päivitetään."],
            ["Näytä virheet", "Väärä salasana antaa selkeän suomenkielisen virheilmoituksen kentän vieressä."],
            ["Rajaa navigaatio", "Näytä hallintalinkit vain projektipäällikölle. Piilotettu linkki ei ole suojaus: reitit suojataan palvelimella työvaiheessa 4."]
          ],
          valmis: "Molemmat roolit kirjautuvat sisään ja ulos, kirjautuminen säilyy sivun päivityksessä, eikä työntekijä näe hallintalinkkejä.",
          tallenna: "Kuvakaappaukset navigaatiosta molemmilla rooleilla työviikon 4 päiväkirjaan. Koodi commitilla."
        },
        "4-4": {
          miksi: "Käyttöliittymästä piilotettu nappi ei estä suoraa kutsua rajapintaan. Middleware tarkistaa jokaisen pyynnön palvelimella, ennen kuin reitti ajetaan.",
          osat: [
            ["Tunnista käyttäjä", "Middleware on välikerros, joka tarkistaa pyynnön ennen reitin omaa käsittelijää. Kirjoita autentikointimiddleware, joka palauttaa 401, jos voimassa olevaa istuntoa ei ole."],
            ["Tarkista rooli", "Kirjoita roolimiddleware, joka palauttaa 403, jos käyttäjällä ei ole reitin vaatimaa roolia."],
            ["Suojaa jokainen reitti", "Lisää middleware jokaiselle suojatulle reitille, älä vain navigaatioon."],
            ["Testaa molemmilla rooleilla", "Kirjaudu kummallakin roolilla ja tarkista, että kumpikin näkee vain omat näkymänsä."],
            ["Kutsu reittiä suoraan", "Kutsu suojattua reittiä curlilla ilman kirjautumista ja työntekijän istunnolla. curl on komentorivin työkalu, jolla rajapintaa kutsutaan ilman selainta. Kirjaa saadut koodit."]
          ],
          valmis: "Suora kutsu suojattuun reittiin ilman kirjautumista palauttaa 401, ja työntekijän kutsu projektipäällikön reittiin palauttaa 403.",
          tallenna: "Middleware-koodin commit. Mitä middleware-ketju tarkistaa, missä järjestyksessä ja mitkä koodit sait, työviikon 4 päiväkirjaan.",
          sanat: ["middleware","API"],
          apu: {
            "otsikko": "Havainnekuva: näin pyyntö kulkee middlewaren läpi",
            "images": [
              [
                "assets/reitin-suojaus.svg",
                "Havainnekuva pyynnön kulusta. Pyyntö tulee ensin tunnistusmiddlewareen: jos istuntoa ei ole, palvelin vastaa 401 Kirjaudu sisään. Sitten roolimiddleware tarkistaa roolin: väärällä roolilla vastaus on 403 Ei oikeuksia. Vasta sen jälkeen reitin käsittelijä ajetaan ja palauttaa vastauksen. Esimerkkinä työntekijä, joka kutsuu projektipäällikön raporttireittiä, saa 403.",
                "Havainnekuva, ei kuvakaappaus. Tarkistukset tehdään palvelimella jokaisella pyynnöllä."
              ]
            ]
          }
        }
      },
      help: {
        title: "Middleware-ketju ja 401/403-erottelu",
        tree: "Pyyntö\n  ↓\ntunnistaMiddleware   → ei istuntoa?      → 401 Kirjaudu sisään\n  ↓\nvaadiRooli(\"pp\")     → väärä rooli?      → 403 Ei oikeuksia\n  ↓\nreitin käsittelijä   → vastaus\n\nclient/src/\n├─ lib/istunto.js      store: kirjautunut käyttäjä ja rooli\n├─ Kirjautuminen.svelte\n└─ Navigaatio.svelte   näyttää linkit roolin mukaan",
        actions: [
          "Tallenna salasanat vain hashina. Selväkielistä salasanaa ei kirjoiteta lokiin eikä kantaan.",
          "Kirjoita istuntotapavertailu ennen toteutusta ja käy se läpi ohjaajan kanssa.",
          "Lisää middleware jokaiselle suojatulle reitille, älä vain navigaatioon.",
          "Testaa molemmilla rooleilla ja kirjautumattomana."
        ],
        code: "401 vai 403?\n401 Unauthorized  = kuka olet? (ei istuntoa tai istunto vanhentunut)\n403 Forbidden     = tiedän kuka olet, mutta et saa tehdä tätä\n\nISTUNTOTAVAN VERTAILUPOHJA\n                     evästesessio     token\nMissä tila sijaitsee\nUloskirjautuminen\nUseampi palvelin\nRiskit tässä sovelluksessa\nTyömäärä\nPÄÄTÖS ja perustelu:\nKeskustelukumppanin rooli (ei nimeä) ja ajankohta:",
        test: "Kutsu suojattua reittiä ilman kirjautumista curlilla – curl on komentorivin työkalu, jolla rajapintaa voi kutsua ilman selainta – ja sitten työntekijän istunnolla: odota 401 ja 403. Kirjaa saadut koodit."
      },
      example: "Vertailu, jossa molempien tapojen hyödyt ja riskit on kirjoitettu tämän sovelluksen ehdoilla (yksi palvelin, SQLite), ja päätös perusteltuna sekä keskustelukumppanin rooli (ohjaaja) ja ajankohta kirjattuna.",
      notEnough: "Tekoälyn yleisperustelu “token on skaalautuva ja moderni” ilman kytkentää omaan projektiin, ja roolirajaus, joka on tehty vain piilottamalla nappi."
    },

    5: {
      type: "feature",
      feature: "Työntekijä kirjaa tunnit projektille ja tehtävälajille alle 30 sekunnissa ja näkee kirjauksen omassa listassaan.",
      excerpt: "Kirjaamisen pitää olla niin helppoa, ettei sitä voi vältellä: valmis alle puolessa minuutissa, myös puhelimella.",
      connection: "Työviikolla 4 syntyneet kirjautuminen ja roolit kertovat, kuka kirjaa. Nyt rakennat itse kirjauksen: lomakkeen, tallennusreitin ja omien kirjausten listan. Kaikki myöhemmät yhteenvedot lasketaan näistä riveistä, joten tämän viikon validointi ratkaisee, voiko raportteihin luottaa.",
      deliverable: "Kirjauslomake omina Svelte-komponentteina, POST /api/kirjaukset validointeineen, omien kirjausten lista ja virhesyötteiden testitaulukko.",
      why: "Tämä on sovelluksen P0-ydin: kaikki raportit lasketaan näistä riveistä, joten tämän viikon validointi ratkaisee raporttien luotettavuuden.",
      done: "Kirjaus tallentuu SQLiteen ja näkyy listassa sivun päivityksen jälkeenkin; virheellinen syöte ei tallennu ja käyttäjä näkee suomenkielisen virheviestin kentän vieressä; kirjaus onnistuu alle 30 sekunnissa. Ota aika.",
      record: "Kirjoita työviikon 5 merkintään: komponenttijako ja kunkin komponentin vastuu, validointisäännöt kenttä kerrallaan sekä mitattu kirjausaika sekunteina.",
      skills: ["Svelte-komponentit ja sidonnat", "REST", "validointi molemmissa päissä"],
      termit: ["REST"],
      tehtavat: {
        "5-1": {
          miksi: "Lomake on se osa, jota työntekijä käyttää joka päivä. Kun jaat sen pieniin komponentteihin, jokaisella osalla on yksi vastuu ja sitä on helppo muuttaa palautteen perusteella.",
          osat: [
            ["Päätä komponenttijako", "Nimeä kirjausnäkymän komponentit ja kirjoita kunkin vastuu yhdellä lauseella suunnitelman Komponenttijako-kenttään. Jakoon palataan työviikolla 15."],
            ["Rakenna lomake rautalangan mukaan", "Toteuta kirjauslomake työviikon 2 rautalangan mukaan kansioon `client/src/kirjaus/`. Kentät ovat projekti, tehtävälaji, tunnit, päivä ja selite. Valmista käyttöliittymäkirjastoa ei käytetä."],
            ["Kytke kentät sidonnoilla", "Käytä Sveltin sidontoja (`bind:value`) lomakekenttiin, jotta lomakkeen tila on aina sama kuin kentissä näkyy."]
          ],
          valmis: "Lomake näkyy selaimessa kaikkine kenttineen, ja komponenttijako on kirjattu suunnitelmaan.",
          tallenna: "Komponentit commitilla kansioon `client/src/kirjaus/`. Komponenttijakokaavio ja kuvakaappaus lomakkeesta työviikon 5 päiväkirjaan."
        },
        "5-2": {
          miksi: "Palvelimen validointi estää virheelliset rivit silloinkin, kun joku ohittaa lomakkeen. Jokainen hyväksytty rivi päätyy raportteihin.",
          osat: [
            ["Tee tallennusreitti", "Toteuta `POST /api/kirjaukset` tiedostoon `server/routes/kirjaukset.js`. REST-tyylissä osoite kertoo kohteen ja HTTP-metodi toiminnon: POST lisää ja GET hakee."],
            ["Validoi palvelimella", "Tarkista palvelimella, että tunnit ovat välillä 0,25–24, pakolliset kentät on täytetty sekä projekti ja tehtävälaji ovat olemassa."],
            ["Validoi myös lomakkeessa", "Toteuta samat säännöt lomakkeeseen. Pelkkä selaimen validointi ei riitä, koska rajapintaa voi kutsua suoraan."],
            ["Näytä virhe kentän vieressä", "Näytä jokainen virhe suomeksi sen kentän vieressä, jota virhe koskee. Viesti kertoo, mitä pitää tehdä, esimerkiksi ”Tunnit voivat olla enintään 24.”"]
          ],
          valmis: "Kelvollinen kirjaus tallentuu SQLiteen. Virheellinen syöte hylätään sekä lomakkeessa että palvelimella, ja suomenkielinen viesti näkyy kentän vieressä.",
          tallenna: "Reitti ja validointi commitilla. Validointisäännöt taulukkona (kenttä → sääntö → virheviesti) työviikon 5 päiväkirjaan.",
          sanat: ["REST"]
        },
        "5-3": {
          miksi: "Lista näyttää työntekijälle, että kirjaus tallentui. Samaa hakua laajennetaan työviikolla 7 muokkaukseen ja suodatukseen.",
          osat: [
            ["Tee hakureitti", "Toteuta `GET /api/kirjaukset/omat`, joka palauttaa vain kirjautuneen käyttäjän kirjaukset."],
            ["Rakenna lista", "Näytä omat kirjaukset taulukkona omassa komponentissaan, esimerkiksi `KirjausLista.svelte`."],
            ["Tarkista pysyvyys", "Päivitä sivu ja tarkista, että kirjaukset näkyvät yhä listassa. Ne tulevat tietokannasta, eivät selaimen muistista."]
          ],
          valmis: "Omat kirjaukset näkyvät listassa myös sivun päivityksen jälkeen, eikä listassa näy muiden käyttäjien kirjauksia.",
          tallenna: "Reitti ja lista commitilla. Kuvakaappaus lomakkeesta ja listasta työviikon 5 päiväkirjaan."
        },
        "5-4": {
          miksi: "Virhesyötteiden testi todistaa, että validointi toimii. Kirjausaika mittaa asiakkaan omaa vaatimusta: kirjaus on valmis alle puolessa minuutissa.",
          osat: [
            ["Kirjaa odotukset", "Tee taulukko, jossa on syöte, odotettu tulos, havaittu tulos ja täsmääkö. Kirjoita odotettu tulos ennen kuin kokeilet."],
            ["Testaa virhesyötteet", "Kokeile lomakkeella arvoja 0 h, negatiivinen, 25 h, ei-numeerinen ja puuttuva tehtävälaji. Kirjaa jokaisen havaittu tulos."],
            ["Ohita lomake", "Lähetä `tunnit=25` suoraan rajapintaan curlilla. curl on komentorivin työkalu, jolla rajapintaa kutsutaan ilman selainta. Palvelimen pitää hylätä kirjaus."],
            ["Mittaa kirjausaika", "Ota aika yhdestä kirjauksesta alusta loppuun ja kirjaa sekunnit. Tavoite on alle 30 sekuntia."]
          ],
          valmis: "Jokainen virhesyöte hylätään sekä lomakkeessa että suorassa rajapintakutsussa, ja kirjaus onnistuu alle 30 sekunnissa.",
          tallenna: "Testitaulukko ja mitattu kirjausaika sekunteina työviikon 5 päiväkirjaan."
        }
      },
      help: {
        title: "Komponenttipuu ja validointitaulukko",
        tree: "client/src/kirjaus/\n├─ KirjausNakyma.svelte   hakee projektit ja tehtävälajit, kokoaa näkymän\n├─ KirjausLomake.svelte   kentät, sidonnat, lähetys\n├─ KirjausLista.svelte    omat kirjaukset taulukkona\n└─ KenttaVirhe.svelte     yhden kentän virheviesti\n\nserver/routes/kirjaukset.js\n├─ POST /api/kirjaukset\n└─ GET  /api/kirjaukset/omat",
        actions: [
          "Piirrä komponenttipuu ennen koodia ja kirjaa jokaisen vastuu yhdellä lauseella.",
          "Kirjoita validointisäännöt taulukkona: kenttä → sääntö → virheviesti.",
          "Toteuta sama sääntö sekä lomakkeessa että palvelimella. Selainvalidointi yksin ei riitä.",
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
      feature: "Projektipäällikkö perustaa projektin ja liittää siihen työntekijän, ja työntekijä näkee kirjauslomakkeessa vain omat projektinsa.",
      excerpt: "Minun pitää pystyä perustamaan projektit ja tehtävälajit itse sekä päättämään, kuka kirjaa mihinkin projektiin.",
      connection: "Kirjauslomake tarvitsee projekteja ja tehtävälajeja, ja ilman hallintaa ne pitäisi syöttää tietokantaan käsin. Nyt projektipäällikkö perustaa ne itse ja päättää jäsenyyksillä, kuka kirjaa mihinkin projektiin. Jäsenyys rajaa kirjaukset oikeisiin projekteihin, mikä on raporttien oikeellisuuden ehto.",
      deliverable: "Perusteltu reitityskirjastovalinta, reittikartta, projektien CRUD eli luonti, luku, muokkaus ja poisto, tehtävälajien ja projektityyppien hallinta sekä projektin jäsenyydet.",
      why: "Ilman hallintaa data syötetään käsin tietokantaan eikä asiakas voi käyttää sovellusta itse, ja jäsenyys rajaa kirjaukset oikeisiin projekteihin, mikä on raporttien oikeellisuuden ehto.",
      done: "Työntekijän kirjauslomakkeessa näkyvät vain projektit, joihin hänet on liitetty; vain projektipäällikkö pääsee hallintanäkymiin (testattu myös suoralla URL-osoitteella); projektin, jolla on kirjauksia, poisto palauttaa 409 ja käyttöliittymä kertoo syyn; reittikartta on dokumentoitu.",
      record: "Kirjoita työviikon 6 merkintään: reitityskirjaston vertailu ja valinta, reittikartta URL → näkymä → rooli sekä se, mitä kuormitusrajauksesta jouduit tekemään.",
      skills: ["reititys", "CRUD", "ulkoisen komponentin käyttöönotto", "roolirajaus"],
      termit: ["CRUD"],
      tehtavat: {
        "6-1": {
          miksi: "Reitityskirjasto on sovelluksen ensimmäinen ulkoinen komponentti, ja sen käyttöönotto pitää perustella. Reittikartta on samalla roolirajauksen tarkistuslista.",
          osat: [
            ["Vertaa vaihtoehtoja", "Vertaa kahta reitityskirjastoa, esimerkiksi svelte-routing ja page.js: koko, ylläpito, dokumentaatio ja se, mitä juuri tämä projekti tarvitsee."],
            ["Perustele ja asenna", "Kirjaa valinta perusteluineen suunnitelman Reitityskirjasto-kenttään ennen asennusta. Asenna sitten valittu kirjasto."],
            ["Kirjaa package.json-diffi", "Tallenna package.json-diffi eli se, mitä riippuvuuksia asennus lisäsi."],
            ["Tee reittikartta", "Kirjoita taulukko URL → näkymä → sallittu rooli jokaiselle reitille ja jaa sovellus näihin näkymiin."]
          ],
          valmis: "Valinta on perusteltu suunnitelmassa, kirjasto on asennettu, ja jokaisella reittikartan rivillä on näkymä ja sallittu rooli.",
          tallenna: "Kirjastovertailu ja reittikartta `project-docs/`-kansioon, package.json-diffi commitissa."
        },
        "6-2": {
          miksi: "Asiakas haluaa perustaa projektit itse ilman, että tietokantaan kosketaan käsin. Projekti on se, jolle tunnit kirjataan ja josta raportit lasketaan.",
          osat: [
            ["Tee projektien reitit", "CRUD tarkoittaa tietueen neljää perustoimintoa: luonti, luku, muokkaus ja poisto. Toteuta projekteille nämä reitit ja suojaa ne projektipäällikön roolilla."],
            ["Rakenna hallintanäkymä", "Rakenna projektien listaus sekä luonti, muokkaus ja poisto. Projektilla on nimi, tyyppi, alku- ja loppupäivä sekä kuvaus."],
            ["Estä kirjauksellisen projektin poisto", "Salli poisto vain, jos projektilla ei ole kirjauksia. Muuten rajapinta palauttaa 409 (ristiriita) ja käyttöliittymä kertoo syyn, jotta raporttien summat eivät muutu jälkikäteen."],
            ["Kokeile hallintaa", "Perusta testiprojekti, muokkaa sen aikaväliä ja poista se. Yritä poistaa myös projekti, jolla on kirjauksia: odotettu tulos on 409 ja selkeä viesti."]
          ],
          valmis: "Projektipäällikkö voi luoda, listata, muokata ja poistaa projekteja ilman tietokannan käsin muokkausta, ja projektin, jolla on kirjauksia, poisto palauttaa 409 ja käyttöliittymä kertoo syyn.",
          tallenna: "Reitit ja näkymä commitilla. Kuvakaappaus hallintanäkymästä työviikon 6 päiväkirjaan.",
          sanat: ["CRUD"]
        },
        "6-3": {
          miksi: "Tehtävälajeista syntyy raportin jako suunnitteluun, tuotantoon, palavereihin ja korjauksiin. Kevyt toteutus riittää, jotta viikko ei paisu.",
          osat: [
            ["Toteuta lisäys", "Toteuta tehtävälajin ja projektityypin lisäys hallintanäkymään."],
            ["Toteuta muokkaus", "Toteuta nimen ja kuvauksen muokkaus. Poisto ja käytöstä poisto kuuluvat tärkeään jatkoon (P1): tee ne vain, jos viikosta jää aikaa."],
            ["Tarkista kuormitus", "Jos viikko uhkaa paisua, pidä ydin eli projektit, tehtävälajit, jäsenyys ja roolirajaus. Yksinkertaista projektityypit muokattavaksi listaksi samaan näkymään ja kirjaa rajaus."]
          ],
          valmis: "Projektipäällikkö voi lisätä tehtävälajin ja projektityypin ja muokata niiden nimeä ja kuvausta, ja mahdollinen kuormitusrajaus on kirjattu.",
          tallenna: "Koodi commitilla. Kuormitusrajauksesta tehdyt päätökset työviikon 6 päiväkirjaan.",
          sanat: ["P1"]
        },
        "6-4": {
          miksi: "Jäsenyys päättää, kuka kirjaa mihinkin projektiin. Ilman sitä kirjauksia voisi tehdä vääriin projekteihin, ja raportit näyttäisivät väärää tietoa.",
          osat: [
            ["Toteuta jäsenyys", "Toteuta työntekijän lisäys projektiin ja poisto projektista `projektin_jasen`-tauluun."],
            ["Rajaa projektivalikko", "Rajaa kirjauslomakkeen projektivalikko jäsenyyden mukaan palvelimella, ei vain selaimessa."],
            ["Testaa hallintareitit", "Kokeile jokaista hallintareittiä työntekijän istunnolla ja suoralla URL-osoitteella. Odotettu tulos on 403, ei näkymä. Kirjautumattomana odotettu tulos on 401."]
          ],
          valmis: "Työntekijän kirjauslomakkeessa näkyvät vain projektit, joihin hänet on liitetty, ja jokainen hallintareitti palauttaa työntekijälle 403 myös suoralla URL-osoitteella.",
          tallenna: "Testattu reittikartta ja demo molemmilla rooleilla työviikon 6 päiväkirjaan."
        }
      },
      help: {
        title: "Reittikartta ja roolirajauksen tarkistus",
        tree: "URL                      Näkymä                  Rooli\n/                        Kirjaus                 työntekijä, pp\n/omat                    Omat kirjaukset         työntekijä, pp\n/hallinta/projektit      Projektien hallinta     pp\n/hallinta/tehtavalajit   Tehtävälajit ja tyypit  pp\n/hallinta/jasenet        Projektin jäsenet       pp\n/raportit                Yhteenvedot             pp\n/kirjaudu                Kirjautuminen           kaikki",
        actions: [
          "Kirjoita vertailutaulukko ennen asennusta. Asennus ilman perustelua ei ole työnäyte.",
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
      feature: "Työntekijä muokkaa ja poistaa vain omia kirjauksiaan, suodattaa niitä viikon ja projektin mukaan ja näkee oman viikkosummansa.",
      excerpt: "Jokainen näkee omat kirjauksensa ja omat yhteenvetonsa, mutta ei muiden. Tuntitiedot ovat herkkää tietoa.",
      connection: "Kirjaukset ja jäsenyydet ovat nyt olemassa. Tällä viikolla työntekijä hallitsee omia kirjauksiaan turvallisesti, ja sinä alat kirjata omat projektituntisi TuntiTutkaan. Oma käyttö tuottaa työviikkojen 8 ja 9 raportteihin aitoa dataa ja paljastaa käytettävyysongelmat ennen asiakasta.",
      deliverable: "Kirjauksen muokkaus ja poisto omistajuustarkistuksineen, viikko- ja projektisuodatus, oma viikkosumma, yhteystietojen päivitys ja omien työtuntien kirjaaminen sovellukseen.",
      why: "Omistajuus ja laskenta ovat toimintalogiikan ydintä, ja oma käyttö tuottaa aitoa dataa raportteihin sekä paljastaa käytettävyysongelmat ennen asiakasta. Samalla syntyy työnäyte omista työmääräarvioista verrattuna toteutuneisiin tunteihin.",
      done: "Toisen käyttäjän kirjausta ei voi muokata edes suoralla API-kutsulla (testi kirjattu: odotettu 403, saatu 403); viikkosumma täsmää käsin laskettuun; omia kirjauksia on sovelluksessa vähintään viikon verran.",
      record: "Kirjoita työviikon 7 merkintään: valittu viikkokäytäntö perusteluineen, omistajuustestin tulos sekä ensimmäinen vertailu työmääräarvioiden ja toteutuneiden tuntien välillä.",
      skills: ["tilanhallinta", "päivämäärä- ja viikkokäsittely", "käyttöoikeudet"],
      tehtavat: {
        "7-1": {
          miksi: "Virheellisen kirjauksen pitää voida korjata. Omistajuustarkistus varmistaa, ettei kukaan muuta toisen tunteja, koska tuntitiedot ovat herkkää tietoa.",
          osat: [
            ["Tee muokkaus ja poisto", "Lisää omien kirjausten listaan muokkaus ja poisto. Käytä samaa validointia kuin uudessa kirjauksessa."],
            ["Tarkista omistajuus", "Tarkista palvelimella reiteissä `PUT` ja `DELETE /api/kirjaukset/:id`, että kirjaus kuuluu kirjautuneelle käyttäjälle. Vieras kirjaus palauttaa 403."],
            ["Testaa suoralla kutsulla", "Yritä muokata toisen käyttäjän kirjausta curlilla toisen käyttäjän istunnolla. Kirjaa odotettu ja saatu vastauskoodi."]
          ],
          valmis: "Toisen käyttäjän kirjausta ei voi muokata eikä poistaa edes suoralla rajapintakutsulla: odotettu 403, saatu 403.",
          tallenna: "Omistajuustestin tulos työviikon 7 päiväkirjaan. Koodi commitilla."
        },
        "7-2": {
          miksi: "Viikko on sekä työntekijän että projektipäällikön tärkein aikajakso. Kun viikkokäytäntö päätetään nyt, samat viikot näkyvät listassa, viikkosummassa ja raporteissa.",
          osat: [
            ["Päätä viikkokäytäntö", "Valitse ISO-viikko eli kansainvälisen standardin viikkonumerointi, jossa viikko alkaa maanantaista, tai muu tapa. Päätä, miten viikon- ja vuodenvaihde käsitellään."],
            ["Kirjaa päätös", "Kirjoita valinta perusteluineen suunnitelman Viikkokäytäntö-kenttään, ennen kuin kirjoitat kyselyn."],
            ["Toteuta suodattimet", "Lisää omien kirjausten listaan viikko- ja projektisuodatus reitille `GET /api/kirjaukset/omat?viikko=&projekti=`."]
          ],
          valmis: "Lista näyttää valitun viikon ja projektin kirjaukset, ja viikkokäytäntö on kirjattu suunnitelmaan.",
          tallenna: "Valittu viikkokäytäntö perusteluineen työviikon 7 päiväkirjaan. Koodi commitilla."
        },
        "7-3": {
          miksi: "Viikkosumma on ensimmäinen laskettu yhteenveto, ja se lasketaan kyselyllä samalla periaatteella kuin työviikon 8 raportit. Omat yhteystiedot pitää voida päivittää ilman projektipäällikköä.",
          osat: [
            ["Laske viikkosumma", "Laske oma viikkosumma kyselyllä reitillä `GET /api/kirjaukset/omat/viikkosumma?viikko=`. Älä tallenna summaa mihinkään."],
            ["Vertaa käsin laskettuun", "Laske saman viikon tunnit käsin ja vertaa niitä sovelluksen summaan."],
            ["Toteuta yhteystiedot", "Toteuta omien yhteystietojen eli puhelimen ja sähköpostin päivitys."]
          ],
          valmis: "Viikkosumma täsmää käsin laskettuun eikä sitä ole tallennettu tietokantaan, ja käyttäjä voi päivittää omat yhteystietonsa.",
          tallenna: "Käsin lasketun ja sovelluksen summan vertailu työviikon 7 päiväkirjaan."
        },
        "7-4": {
          miksi: "Oma käyttö tuottaa raportteihin aitoa dataa ja paljastaa käytettävyysongelmat ennen asiakasta. Samalla syntyy työnäyte arvioiden ja toteuman vertailusta (s6).",
          osat: [
            ["Lisää tehtävälajit", "Lisää TuntiTutkaan tehtävälajit suunnittelu, koodaus, testaus ja dokumentointi."],
            ["Kirjaa tuntisi", "Kirjaa tästä eteenpäin omat projektityötuntisi TuntiTutkaan tehtävälajeittain."],
            ["Vertaa arvioihin", "Vertaa toteutuneita tunteja issueiden työmääräarvioihin ja aloita arvio vs. toteuma -taulukko."]
          ],
          valmis: "Sovelluksessa on vähintään viikon verran omia kirjauksiasi, ja arvio vs. toteuma -taulukossa on ensimmäiset rivit.",
          tallenna: "Kuvakaappaus omista kirjauksista ja ensimmäinen arvioiden ja toteuman vertailu työviikon 7 päiväkirjaan."
        }
      },
      help: {
        title: "Viikkonumerot ja omistajuustesti",
        tree: "GET    /api/kirjaukset/omat?viikko=&projekti=\nPUT    /api/kirjaukset/:id     omistajuustarkistus ennen päivitystä\nDELETE /api/kirjaukset/:id     omistajuustarkistus ennen poistoa\nGET    /api/kirjaukset/omat/viikkosumma?viikko=\nPUT    /api/kayttajat/minä     omat yhteystiedot",
        actions: [
          "Päätä viikkokäytäntö ja kirjaa se suunnitelmaan ennen kuin kirjoitat kyselyn.",
          "Tee omistajuustarkistus palvelimella jokaiseen muokkaus- ja poistoreittiin.",
          "Laske viikkosumma kyselyllä, älä tallenna sitä tauluun.",
          "Aloita oma kirjaaminen heti: dataa tarvitaan työviikkojen 8 ja 9 raportteihin."
        ],
        code: "VIIKKONUMERON SUDENKUOPAT (SQLite)\nstrftime('%W', paiva)  viikko alkaa maanantaista, mutta vuoden\n                       ensimmäinen osittainen viikko on 00\nstrftime('%G-%V', ...)  ISO-vuosi ja ISO-viikko – vuodenvaihde menee oikein\nPÄÄTÄ yksi tapa ja käytä sitä kaikkialla. Kirjaa päätös suunnitelmaan.\n\nOMISTAJUUSTESTI\ncurl -X PUT https://<osoite>/api/kirjaukset/17 \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"tunnit\":1}' --cookie \"<toisen käyttäjän istunto>\"\nOdotettu: 403. Kirjaa saatu koodi ja vastaus.",
        test: "Kirjaa tunti toisen käyttäjän nimissä suoralla API-kutsulla ja varmista, että palvelin estää sen. Kirjaa odotettu ja saatu vastauskoodi."
      },
      example: "Done-testi kirjattuna: `curl -X PUT .../api/kirjaukset/17` toisen käyttäjän istunnolla → odotettu 403, saatu 403. Lisäksi viikkosumma 14,75 h vs. käsin laskettu 14,75 h.",
      notEnough: "Omistajuus tarkistetaan vain käyttöliittymässä (nappi piilotettu), mutta API hyväksyy kutsun."
    },

    8: {
      type: "feature",
      feature: "Projektipäällikkö näkee ajantasaisen taulukkoyhteenvedon kolmella ryhmittelyllä ja pääsee rivistä yksittäisiin kirjauksiin.",
      excerpt: "Näiden lukujen pitää olla aina ajan tasalla: ei 'viime kuun tilanne', vaan tilanne nyt.",
      connection: "Kirjauksia on nyt kertynyt myös omasta käytöstäsi. Tällä viikolla lasket niistä sen tiedon, jota asiakas on koko ajan halunnut: tunnit viikoittain, henkilöittäin ja tehtävälajeittain. Työviikolla 9 samat luvut saavat kaaviot, ja työviikolla 10 asiakkaan roolissa oleva testaaja kokeilee niitä.",
      deliverable: "Suunniteltu vastausmuoto, testiaineisto käsin laskettuine odotusarvoineen, laskentamoduuli yksikkötesteineen, kolme raporttireittiä sekä taulukkonäkymä ja porautuminen.",
      why: "Tämä on koko sovelluksen olemassaolon syy: asiakkaan ydinkipu on raportointi. “Lasketaan, ei tallenneta” pitää luvut aina ajan tasalla ilman synkronointibugeja; jos summat tallennettaisiin, jokainen muokkaus ja poisto vaatisi summien päivityksen.",
      done: "Kolme raporttireittiä palauttaa summat, jotka täsmäävät käsin laskettuihin odotusarvoihin vähintään kolmella eri testiaineistolla; tietokannassa ei ole summataulua ja skeema todistaa sen; laskentamoduulilla on vähintään kolme yksikkötestiä.",
      record: "Kirjoita työviikon 8 merkintään: raporttien vastausmuoto, käsin lasketut odotusarvot ja API:n palauttamat luvut rinnakkain sekä se, mikä laskennassa meni ensin väärin ja miksi.",
      skills: ["SQL-aggregointi", "toimintalogiikan moduulijako", "REST-suunnittelu", "yksikkötestaus"],
      termit: ["SQL"],
      tehtavat: {
        "8-1": {
          miksi: "Kun vastauksen muoto on sovittu ennen koodia, laskenta, taulukko ja työviikon 9 kaaviot tietävät, mitä odottaa.",
          osat: [
            ["Piirrä vastaukset", "Piirrä kolmen raporttireitin JSON-vastaukset paperille: mitkä kentät ja missä muodossa."],
            ["Päätä tyhjä tulos", "Päätä, mitä reitti palauttaa, kun aikavälillä ei ole kirjauksia. Tyhjä tulos on normaali tilanne, ei virhe."],
            ["Nimeä reitit", "Kirjaa reitit ja parametrit, esimerkiksi `GET /api/raportit/viikot?alkaa=&paattyy=&projekti=` sekä vastaavat `/henkilot` ja `/tehtavalajit`."]
          ],
          valmis: "Kolmen raporttireitin vastausmuoto ja tyhjän tuloksen muoto on kirjattu ennen ensimmäistäkään kyselyä.",
          tallenna: "Vastausmuoto kuvana tai tekstinä `project-docs/`-kansioon ja työviikon 8 päiväkirjaan.",
          sanat: ["JSON"]
        },
        "8-2": {
          miksi: "Käsin lasketut odotusarvot ovat ainoa tapa todistaa, että summat ovat oikein. Ne lasketaan ennen toteutusta, jotta tulos ei ohjaa odotusta.",
          osat: [
            ["Rakenna aineistot", "Rakenna kolme testiaineistoa: normaali (esimerkiksi 3 käyttäjää × 2 projektia × 3 tehtävälajia), tyhjä viikko ja viikonvaihteen ylittävä aineisto."],
            ["Laske odotusarvot", "Laske jokaiselle aineistolle ja ryhmittelylle odotetut summat käsin."],
            ["Kirjaa taulukkoon", "Kirjaa odotusarvot taulukkoon: aineisto, ryhmittely ja käsin laskettu summa. Sarakkeet rajapinnan palauttamalle summalle ja täsmäävyydelle jäävät vielä tyhjiksi."]
          ],
          valmis: "Odotusarvotaulukossa on käsin lasketut summat kolmelle aineistolle ja kolmelle ryhmittelylle, ja se on kirjattu ennen ajoa.",
          tallenna: "Odotusarvotaulukko `project-docs/`-kansioon ennen ensimmäistä ajoa."
        },
        "8-3": {
          miksi: "Tämä on sovelluksen olemassaolon syy. Kun laskenta on omassa moduulissaan, sitä voi testata ilman selainta, ja periaate ”lasketaan, ei tallenneta” pitää luvut aina ajan tasalla.",
          osat: [
            ["Kirjoita kyselyt", "SQL on tietokannan kyselykieli: GROUP BY ryhmittelee rivit ja SUM laskee ryhmän summan. Toteuta kolme ryhmittelyä kyselyinä (tai perustellusti JavaScriptillä) kansioon `server/laskenta/`."],
            ["Lisää rajaukset", "Lisää aikaväli- ja projektirajaus. Tarkista, että rajaukset koskevat kaikkia kolmea ryhmittelyä samalla tavalla."],
            ["Tee reitit", "Tee kolme raporttireittiä tiedostoon `server/routes/raportit.js`. Reitti vain ottaa parametrit ja kutsuu laskentamoduulia."],
            ["Kirjoita yksikkötestit", "Kirjoita laskentamoduulille vähintään kolme yksikkötestiä: normaali aineisto, tyhjä viikko ja viikonvaihteen ylitys."],
            ["Vertaa odotusarvoihin", "Aja reitit kolmella testiaineistolla ja kirjaa palautetut summat odotusarvotaulukkoon. Tarkista skeemasta, ettei summataulua ole syntynyt."]
          ],
          valmis: "Kolme raporttireittiä palauttaa summat, jotka täsmäävät käsin laskettuihin kolmella aineistolla, yksikkötestit menevät läpi eikä skeemassa ole summataulua.",
          tallenna: "Laskentamoduulin ja testien commit. Odotusarvot ja rajapinnan palauttamat luvut rinnakkain työviikon 8 päiväkirjaan.",
          sanat: ["SQL"],
          apu: {
            "otsikko": "Havainnekuva: näin yhteenveto lasketaan kirjauksista",
            "images": [
              [
                "assets/yhteenvedon-laskenta.svg",
                "Havainnekuva yhteenvedon laskennasta. Kirjaus-taulussa on viisi riviä: Aino 7,5 tuntia suunnittelua, Aino 2,0 tuntia palaveria, Eetu 4,0 tuntia tuotantoa, Eetu 1,5 tuntia palaveria ja Helmi 6,0 tuntia tuotantoa. Kysely SELECT henkilö, SUM(tunnit) FROM kirjaus GROUP BY henkilö laskee niistä kolme riviä: Aino 9,5, Eetu 5,5 ja Helmi 6,0 tuntia, yhteensä 21,0 tuntia. Kun Eetu muokkaa kirjauksensa 1,5 tunnista 2,5 tuntiin, seuraava pyyntö laskee Eetun summaksi 6,5 tuntia. Summataulua ei ole, joten mitään ei tarvitse päivittää erikseen.",
                "Havainnekuva, ei kuvakaappaus. Yhteenveto lasketaan kirjauksista jokaisella pyynnöllä."
              ]
            ]
          }
        },
        "8-4": {
          miksi: "Asiakas haluaa nähdä tilanteen yhdellä silmäyksellä ja tarvittaessa porautua yksittäisen tekijän kirjauksiin asti.",
          osat: [
            ["Rakenna taulukko", "Toteuta projektipäällikön taulukkoyhteenveto: ryhmittely, rivit ja summat selkeästi luettavina."],
            ["Lisää porautuminen", "Toteuta porautuminen: taulukon rivistä pääsee niihin yksittäisiin kirjauksiin, joista summa syntyy."],
            ["Tarkista summa riveistä", "Laske porautumisnäkymän kirjausten tunnit yhteen ja vertaa taulukon riviin. Lukujen pitää olla samat."]
          ],
          valmis: "Projektipäällikkö näkee taulukon kolmella ryhmittelyllä, ja jokaisesta rivistä pääsee niihin kirjauksiin, joista summa syntyy.",
          tallenna: "Kuvakaappaus taulukosta ja porautumisesta työviikon 8 päiväkirjaan. Koodi commitilla."
        }
      },
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
        test: "Aja sama kysely kolmella eri testiaineistolla ja vertaa jokainen luku käsin laskettuun odotusarvoon. Yksikin poikkeama on bugi, ei pyöristys."
      },
      example: "Taulukko, jossa on aineisto, ryhmittely, käsin laskettu summa, API:n palauttama summa ja täsmääkö-sarake; kaikki kolme aineistoa omalla rivistöllään.",
      notEnough: "“Raportit näyttävät oikein” ilman käsin laskettua vertailua, tai summien tallentaminen omaan tauluun “suorituskyvyn takia”."
    },

    9: {
      type: "feature",
      feature: "Projektipäällikkö näkee viikkotunnit ja tehtävälajijakauman kaavioina, jotka päivittyvät valinnoista eivätkä kaadu tyhjään dataan tai verkkovirheeseen.",
      connection: "Työviikon 8 raporttireitit palauttavat oikeat summat, mutta asiakas haluaa nähdä ne yhdellä silmäyksellä. Nyt muunnat saman datan kaavioiksi ja käsittelet tyhjän datan, verkkovirheen ja lataustilan. Näin väliversio on valmis työviikon 10 asiakaskatselmointiin.",
      deliverable: "Perusteltu kaaviokirjastovalinta, kaaviot oikeasta datasta, testattu muunnosfunktio, ryhmittelyn ja aikavälin valinta sekä virhe- ja lataustilat.",
      why: "Kaavio on asiakkaan “yhdellä silmäyksellä” -tarve, ja tämä viikko on päänäyte rajapinnan palauttaman tiedon käsittelystä muunnoksineen ja virhetilanteineen, ja samalla käyttöön tulee toinen ulkoinen komponentti.",
      done: "Kaaviot piirtyvät oikeasta datasta ja päivittyvät suodattimista; verkkovirhe (testataan katkaisemalla backend) näyttää viestin eikä tyhjää ruutua; muunnosfunktion testi menee läpi; valinta on perusteltu kirjallisesti.",
      record: "Kirjoita työviikon 9 merkintään: kaaviokirjaston vertailu ja valinta, muunnosfunktion tehtävä ja sen testin tulos sekä se, miten kukin virhetila testattiin.",
      skills: ["fetch ja asynkronisuus", "tiedon muunnos", "kaaviokirjasto", "virheenkäsittely"],
      tehtavat: {
        "9-1": {
          miksi: "Kaaviokirjasto on sovelluksen toinen ulkoinen komponentti, ja sen koko, lisenssi ja saavutettavuus vaikuttavat koko sovellukseen.",
          osat: [
            ["Vertaa kirjastoja", "Vertaa kahta kaaviokirjastoa: koko, lisenssi, dokumentaatio ja saavutettavuus."],
            ["Perustele ja asenna", "Kirjaa valinta perusteluineen suunnitelman Kaaviokirjasto-kenttään ja asenna valittu kirjasto."],
            ["Piirrä kiinteällä datalla", "Piirrä ensimmäinen kaavio kiinteällä esimerkkidatalla, jotta kirjaston käyttö ja oma data eivät sekoitu toisiinsa."]
          ],
          valmis: "Kirjastovalinta on perusteltu suunnitelmassa, ja ensimmäinen kaavio piirtyy kiinteällä datalla.",
          tallenna: "Kirjastovertailu `project-docs/`-kansioon, asennus commitilla."
        },
        "9-2": {
          miksi: "Muunnosfunktio erottaa rajapinnan vastauksen kaavion tarvitsemasta muodosta. Puhdas funktio on helppo testata ilman selainta.",
          osat: [
            ["Hae raportit", "Hae raporttireittien data raporttinäkymään selaimen fetch-funktiolla."],
            ["Kirjoita muunnos", "Kirjoita funktio, esimerkiksi `muunnaKaavioksi` tiedostoon `client/src/raportit/muunna.js`, joka muuntaa rajapinnan JSON-vastauksen kaavion tarvitsemaan muotoon."],
            ["Testaa muunnos", "Kirjoita funktiolle testi, ennen kuin kytket kaavion oikeaan dataan. Aja testi ja kirjaa tulos."],
            ["Kytke oikea data", "Korvaa kiinteä esimerkkidata muunnetulla raporttidatalla."]
          ],
          valmis: "Muunnosfunktion testi menee läpi, ja kaaviot piirtyvät oikeasta raporttidatasta.",
          tallenna: "Muunnosfunktio ja testi commitilla. Testin ajotulos työviikon 9 päiväkirjaan.",
          sanat: ["JSON"]
        },
        "9-3": {
          miksi: "Projektipäällikkö haluaa katsoa samaa dataa eri kulmista: viikoittain, henkilöittäin ja tehtävälajeittain.",
          osat: [
            ["Lisää ryhmittely", "Toteuta ryhmittelyn vaihto: viikko, henkilö ja tehtävälaji."],
            ["Lisää aikaväli", "Toteuta aikavälin valinta, joka välittyy raporttireitin parametreiksi."],
            ["Tarkista päivitys", "Vaihda ryhmittelyä ja aikaväliä ja tarkista, että kaavio päivittyy jokaisesta valinnasta."]
          ],
          valmis: "Kaavio päivittyy jokaisesta ryhmittelyn ja aikavälin valinnasta.",
          tallenna: "Kuvakaappaukset kaavioista kahdella eri valinnalla työviikon 9 päiväkirjaan."
        },
        "9-4": {
          miksi: "Tyhjä ruutu tai kaatunut näkymä vie asiakkaan luottamuksen. Katselmoinnissa kaavioiden pitää myös näyttää jotain järkevää.",
          osat: [
            ["Käsittele tyhjä aineisto", "Näytä ohjaava viesti, kun valitulla aikavälillä ei ole kirjauksia. Tyhjä aineisto on normaali tilanne, ei virhe."],
            ["Käsittele verkkovirhe", "Näytä virheilmoitus ja uudelleenyritys. Testaa sammuttamalla backend kesken raporttihaun."],
            ["Näytä lataustila", "Näytä latausindikaattori, kun haku on kesken."],
            ["Kirjaa virhetilat", "Kirjaa taulukkoon jokaisesta tilasta, mitä käyttäjä näkee ja miten se testattiin."],
            ["Valmistele demodata", "Valmistele työviikon 10 katselmointia varten testitunnukset molemmille rooleille ja niin paljon kirjauksia, että kaaviot näyttävät järkevältä."]
          ],
          valmis: "Tyhjä aineisto, verkkovirhe ja lataus näkyvät käyttäjälle viestinä eivätkä tyhjänä ruutuna, ja demodata on valmiina.",
          tallenna: "Virhetilataulukko ja kuvakaappaukset virhetiloista työviikon 9 päiväkirjaan."
        }
      },
      help: {
        title: "Muunnosfunktio ja virhetilojen tarkistuslista",
        tree: "client/src/raportit/\n├─ RaporttiNakyma.svelte   haku, tilat, suodattimet\n├─ Kaavio.svelte          kaaviokirjaston kääre\n├─ muunna.js             API-JSON → { labels, datasets }\n└─ muunna.test.js        muunnoksen yksikkötesti\n\nTilat: lataus → onnistui | tyhjä | virhe",
        actions: [
          "Erota tiedonhaku, muunnos ja piirto toisistaan. Silloin muunnosta voi testata ilman selainta.",
          "Kirjoita muunnosfunktion testi ennen kuin kytket kaavion oikeaan dataan.",
          "Testaa verkkovirhe sammuttamalla backend kesken käytön.",
          "Tyhjä aineisto on normaali tilanne, ei virhe."
        ],
        code: "MUUNNOSFUNKTION RUNKO\n// syöte:  [{ ryhma: \"2026-W07\", tunnit: 12.5 }, …]\n// tuotos: { labels: [\"2026-W07\", …], datasets: [{ data: [12.5, …] }] }\nexport function muunnaKaavioksi(rivit) {\n  // 1) järjestä rivit\n  // 2) poimi labels\n  // 3) poimi arvot samassa järjestyksessä\n  // 4) palauta kaavion odottama rakenne\n}\n\nVIRHETILOJEN TARKISTUSLISTA\n[ ] tyhjä aineisto     → ohjaava viesti, ei tyhjää ruutua\n[ ] verkkovirhe        → virheilmoitus + uudelleenyritys\n[ ] lataus kesken      → latausindikaattori\n[ ] palvelinvirhe 500  → viesti, ei konsolikaatumista",
        test: "Sammuta backend kesken raporttihaun ja tarkista, että näkymä kertoo virheestä ja tarjoaa uudelleenyrityksen."
      },
      example: "Virhetilataulukko, jossa on tilanne, mitä käyttäjä näkee ja miten se testattiin, sekä muunnosfunktion testin ajotulos.",
      notEnough: "Kaavio, joka kaatuu tyhjään dataan, tai kirjastovalinta ilman vertailua."
    },

    10: {
      type: "katselmointi",
      feature: "Asiakkaan roolissa oleva testaaja on kokeillut julkaistua versiota molemmilla rooleilla, ja sovitut muutokset ovat priorisoituina issueina.",
      excerpt: "Haluan kokeilla toimivaa väliversiota noin puolivälissä omilla käsilläni.",
      connection: "Kirjaus, hallinta ja yhteenvedot toimivat julkaistussa versiossa. Nyt asiakkaan roolissa oleva ulkopuolinen testaaja kokeilee sitä omin käsin, ja selviää, ratkaiseeko sovellus asiakkaan ongelman. Palaute puolivälissä ehtii vielä muuttaa suuntaa, ja tärkein muutos toteutetaan työviikolla 11.",
      deliverable: "Katselmointimuistio testaajan sitaatteineen (puhuja merkitty roolilla), oma tulkinta erikseen kirjattuna ja priorisoitu muutoslista issueina.",
      why: "Palaute puolivälissä ehtii vielä muuttaa suuntaa, ja tämä on asiakasviestinnän ja katselmoinnin päätyönäyte, jota ei voi tuottaa tekoälyllä: oikea ihminen, oikeat sanat, oikea julkaistu sovellus.",
      done: "Katselmointimuistio (testaajan rooli, ajankohta, testaajan omat sanat roolilla merkittyinä, oma tulkinta, sovitut muutokset) on project-docs-kansiossa; testaajan nimi on lähetetty ohjaajalle Teamsissa; tärkein muutos on issueina hyväksymiskriteereineen.",
      record: "Kirjoita työviikon 10 merkintään: testaajan rooli (ei nimeä), kolme tärkeintä sitaattia, oma tulkinta niistä ja se, minkä muutoksen valitsit toteutettavaksi ensin.",
      skills: ["asiakasviestintä", "katselmointikäytäntö", "palautteen jäsentäminen"],
      resources: [["Lataa dokumentointipohjat (katselmointiloki)", "downloads/nayton-dokumentointipohjat.docx", true]],
      tehtavat: {
        "10-1": {
          miksi: "Hyvin valmisteltu katselmointi käyttää testaajan ajan sovelluksen kokeiluun eikä tunnusten etsimiseen.",
          osat: [
            ["Varmista testaaja", "Varmista ohjaajan kanssa testaaja ja ajankohta. Asiakkaan roolia ei esitä oma ohjaava opettajasi."],
            ["Tee esityslista", "Kirjoita esityslista ja kaksi testipolkua: työntekijä kirjaa tunnin, projektipäällikkö katsoo raportin ja porautuu."],
            ["Tarkista tunnukset ja data", "Tarkista, että testitunnukset toimivat julkaistussa versiossa ja kirjauksia on tarpeeksi."],
            ["Kirjaa testattu versio", "Kirjaa muistion alkuun testattava versio (commit tai tagi) ja testaajan rooli, esimerkiksi asiakkaan edustaja. Nimeä ei kirjata repositoryyn."]
          ],
          valmis: "Testaaja ja ajankohta on sovittu, testipolut on kirjoitettu ja tunnukset toimivat julkaistussa versiossa.",
          tallenna: "Esityslista ja testipolut muistioon `project-docs/katselmointi-vk10.md`."
        },
        "10-2": {
          miksi: "Asiakasta kiinnostaa, mitä sovellus tekee hänelle, ei miten se on koodattu. Vapaa kokeilu paljastaa, missä käyttäjä oikeasti pysähtyy.",
          osat: [
            ["Esittele asiakaslähtöisesti", "Kerro, mitä sovellus tekee työntekijälle ja projektipäällikölle. Jätä tekninen toteutus pois."],
            ["Anna kokeilla itse", "Anna testaajan tehdä molemmat testipolut ilman opastusta. Älä ota hiirtä käteesi, kun hän epäröi."],
            ["Merkitse pysähdykset", "Merkitse muistiin jokainen kohta, jossa testaaja pysähtyi tai kysyi jotain."]
          ],
          valmis: "Testaaja on tehnyt molemmat testipolut itse, ja pysähdyskohdat on merkitty.",
          tallenna: "Pysähdyskohdat katselmointimuistioon jo katselmoinnin aikana."
        },
        "10-3": {
          miksi: "Testaajan omat sanat ovat työnäyte, jota ei voi tuottaa tekoälyllä. Kun tulkinta on erillään, näet myöhemmin, mitä hän oikeasti sanoi.",
          osat: [
            ["Kirjaa sitaatit", "Kirjoita testaajan havainnot muistioon heti hänen omin sanoinaan lyhyinä lainauksina. Merkitse puhuja roolilla, esimerkiksi ”asiakkaan edustaja”, ei nimellä. Älä siisti äläkä tulkitse vielä."],
            ["Kirjaa tulkinta", "Kirjaa erilliseen sarakkeeseen, mitä uskot havainnon tarkoittavan ja mikä sen syy on."],
            ["Lähetä nimet ohjaajalle", "Lähetä testaajan nimi ohjaajalle Teamsissa. Sinne menevät myös muistiinpanot, joista henkilön voi tunnistaa. Repositoryyn kirjataan henkilöstä vain rooli."]
          ],
          valmis: "Muistiossa jokaisella havainnolla on testaajan omat sanat roolilla merkittyinä ja erillinen oma tulkinta, ja testaajan nimi on lähetetty ohjaajalle Teamsissa.",
          tallenna: "`project-docs/katselmointi-vk10.md`. Kolme tärkeintä sitaattia roolilla merkittyinä työviikon 10 päiväkirjaan. Nimi ohjaajalle Teamsissa."
        },
        "10-4": {
          miksi: "Palaute, joka ei johda sovittuun muutokseen, on kerätty turhaan. Priorisointi ohjaajan kanssa kertoo, mikä tehdään työviikolla 11.",
          osat: [
            ["Priorisoi ohjaajan kanssa", "Käy muutokset läpi ohjaajan kanssa ja päätä, mikä toteutetaan työviikolla 11 ja mikä jää v1.1-listalle."],
            ["Kirjaa issueiksi", "Kirjaa sovitut muutokset GitHub-issueiksi hyväksymiskriteereineen ja arvioineen."],
            ["Kirjaa päätökset muistioon", "Lisää muistioon sovitut muutokset, niiden prioriteetit ja issue-numerot."]
          ],
          valmis: "Tärkein muutos on issueina hyväksymiskriteereineen, ja muistiossa näkyvät sovitut muutokset issue-numeroineen.",
          tallenna: "Muistio ja issuet. Ensimmäiseksi valittu muutos perusteluineen työviikon 10 päiväkirjaan."
        }
      },
      help: {
        title: "Katselmointimuistion pohja",
        tree: "project-docs/katselmointi-vk10.md\n├─ Testaajan rooli ja ajankohta\n├─ Testattu versio (commit tai tag)\n├─ Testipolut (1 työntekijä, 2 projektipäällikkö)\n├─ Havainnot: | rooli | testaajan sanat | oma tulkinta |\n├─ Sovitut muutokset ja prioriteetit\n└─ Issue-numerot",
        actions: [
          "Sovi testaaja hyvissä ajoin ohjaajan kanssa. Asiakkaan roolia ei esitä oma ohjaava opettajasi.",
          "Anna testaajan kokeilla itse: älä ota hiirtä käteesi, kun hän epäröi.",
          "Kirjoita sitaatit muistiin heti, älä muistin varassa jälkikäteen. Merkitse puhuja roolilla, ei nimellä.",
          "Erota testaajan sanat ja oma tulkinta selvästi toisistaan."
        ],
        code: "HAVAINTOTAULUKKO (puhuja roolilla, ei nimeä)\n# | rooli | testaajan havainto hänen sanoillaan | oma tulkinta | päätös | issue\n1 | asiakkaan edustaja | \"En löytänyt mistä vaihdan viikon\"\n  | suodatin on listan alapuolella ja jää huomaamatta | siirretään | #31\n\nTESTIPOLKU 1 (työntekijä)\n[ ] kirjaudu sisään\n[ ] kirjaa tunti projektille ja tehtävälajille\n[ ] tarkista että kirjaus näkyy omassa listassa\n\nTESTIPOLKU 2 (projektipäällikkö)\n[ ] avaa raportit\n[ ] vaihda ryhmittelyä\n[ ] poraudu yhden henkilön kirjauksiin",
        test: "Anna testaajan tehdä molemmat testipolut ilman suullista apua ja merkitse jokainen kohta, jossa hän pysähtyi."
      },
      example: "“Asiakkaan edustaja: 'En löytänyt mistä vaihdan viikon' → tulkinta: suodatin on piilossa listan alla → päätös: siirretään suodatin listan yläpuolelle (issue #31).”",
      notEnough: "“Asiakas tykkäsi, pieniä korjauksia toivottiin” ilman sitaatteja, tulkintoja ja päätöksiä."
    },

    11: {
      type: "feature",
      feature: "Testaajan tärkein havainto on korjattu julkaistussa versiossa, ja muutos on liitetty pääversioon pull requestilla.",
      connection: "Työviikon 10 katselmoinnin tärkein muutos muuttuu nyt koodiksi. Teet sen omassa haarassa ja liität pääversioon pull requestilla, koska ominaisuuden hallittu liittäminen olemassa olevaan versioon on oma osaamisvaatimuksensa. Palaute, joka ei johda muutokseen, on kerätty turhaan.",
      deliverable: "Ominaisuushaara pienine commiteineen, pull request kuvauksineen ja itsekatselmointeineen, ratkaistu konflikti ja muutos tuotannossa.",
      why: "Ominaisuuden hallittu liittäminen olemassa olevaan versioon on oma vaatimuksensa, ja palaute, joka ei johda muutokseen, on kerätty turhaan.",
      done: "Pull requestin kuvaus ja keskustelu näyttävät mitä muutettiin ja miksi; muutos on tuotannossa; konfliktin ratkaisu näkyy historiassa; katselmointimuistion kohta on kuitattu linkillä.",
      record: "Kirjoita työviikon 11 merkintään: mikä muutos valittiin ja miksi juuri se, pull requestin linkki, miten konflikti syntyi ja miten ratkaisit sen.",
      skills: ["Git-haarat", "pull request", "konfliktin ratkaisu"],
      termit: ["haara", "pull request"],
      tehtavat: {
        "11-1": {
          miksi: "Tarkat hyväksymiskriteerit kertovat ennen koodia, milloin muutos on valmis ja mitä tarkistat julkaistusta versiosta.",
          osat: [
            ["Valitse muutos", "Valitse katselmoinnin tärkein muutos niistä issueista, jotka sovittiin ohjaajan kanssa työviikolla 10."],
            ["Tarkenna kriteerit", "Kirjoita issueen hyväksymiskriteerit, jotka voi tarkistaa julkaistusta versiosta."],
            ["Linkitä palautteeseen", "Lisää issueen viittaus katselmointimuistion kohtaan ja testaajan sitaattiin."]
          ],
          valmis: "Issuessa on hyväksymiskriteerit ja viittaus katselmointimuistion kohtaan, ennen kuin olet kirjoittanut riviäkään koodia.",
          tallenna: "Issue GitHubissa. Valittu muutos ja valinnan syy työviikon 11 päiväkirjaan."
        },
        "11-2": {
          miksi: "Haarassa muutoksen voi tehdä rikkomatta pääversiota. Pienet commitit näyttävät, miten muutos eteni.",
          osat: [
            ["Luo haara", "Luo ominaisuushaara eli oma kehityslinja päivitetystä main-haarasta. Nimeä se tehtävän mukaan, esimerkiksi `feature/viikkosuodatin-ylos`."],
            ["Tee pienet commitit", "Tee muutos pienissä osissa. Yksi commit on yksi looginen muutos, ja viesti kertoo, mitä ja miksi."],
            ["Vie haara GitHubiin", "Vie haara etärepositoryyn komennolla `git push`, jotta voit avata siitä pull requestin."]
          ],
          valmis: "Muutos on omassa haarassa useana pienenä committina, ja haara näkyy GitHubissa.",
          tallenna: "Haara ja commitit GitHubissa.",
          sanat: ["haara"]
        },
        "11-3": {
          miksi: "Pull request näyttää, mitä muutettiin ja miksi. Konfliktin hallittu ratkaisu on osa ominaisuuden liittämistä olemassa olevaan versioon.",
          osat: [
            ["Avaa pull request", "Avaa pull request (PR) eli pyyntö yhdistää haara pääversioon. Kirjoita kuvaus: mitä, miksi ja linkki palautteeseen."],
            ["Katselmoi oma koodi", "Kommentoi pull requestiin omat valintasi perusteluineen ja merkitse kohdat, joita epäilet."],
            ["Ratkaise konflikti", "Merge-konflikti syntyy, kun sama kohta on muuttunut molemmissa haaroissa. Ratkaise se tiedosto kerrallaan ja aja testit ennen commitia."],
            ["Harjoittele tarvittaessa", "Jos konfliktia ei synny luonnostaan, tee ohjattu harjoituskonflikti ja merkitse se selvästi harjoitukseksi."],
            ["Yhdistä pääversioon", "Yhdistä haara pääversioon eli tee merge, kun kuvaus ja itsekatselmointi ovat valmiit."]
          ],
          valmis: "Pull requestin kuvaus ja kommentit näyttävät, mitä muutettiin ja miksi, ja konfliktin ratkaisu näkyy historiassa.",
          tallenna: "Pull requestin linkki sekä se, miten konflikti syntyi ja miten ratkaisit sen, työviikon 11 päiväkirjaan.",
          sanat: ["pull request"]
        },
        "11-4": {
          miksi: "Muutos on valmis vasta, kun se toimii siellä, missä asiakas sitä käyttää.",
          osat: [
            ["Julkaise", "Julkaise yhdistetty pääversio samalla julkaisuputkella kuin ennenkin."],
            ["Todenna palautetta vasten", "Avaa julkaistu versio ja tee juuri se asia, josta testaaja huomautti. Sen pitää nyt onnistua ilman epäröintiä."],
            ["Kuittaa muistio", "Kuittaa katselmointimuistion kohta linkillä pull requestiin."]
          ],
          valmis: "Muutos toimii julkaistussa versiossa, ja katselmointimuistion kohta on kuitattu linkillä.",
          tallenna: "Ennen/jälkeen-kuvakaappaus työviikon 11 päiväkirjaan."
        }
      },
      help: {
        title: "Konfliktin ratkaisu ja PR-kuvauksen pohja",
        tree: "git switch -c feature/viikkosuodatin-ylos\n… commitit …\ngit switch main && git pull\ngit switch feature/viikkosuodatin-ylos\ngit merge main          ← konflikti näkyy tässä\ngit status              ← mitkä tiedostot ovat kesken\n… ratkaise merkinnät …\nnpm test                ← testit ennen committia\ngit add . && git commit\n→ pull request → itsekatselmointi → merge",
        actions: [
          "Aloita aina päivitetystä main-haarasta, niin konfliktit pysyvät pieninä.",
          "Ratkaise konflikti tiedosto kerrallaan ja aja testit ennen committia.",
          "Kirjoita PR-kuvaus lukijalle, joka ei ollut katselmoinnissa mukana.",
          "Todenna muutos julkaistusta versiosta, ei vain omalta koneelta."
        ],
        code: "PR-KUVAUKSEN POHJA\n## Mitä\nYhdellä lauseella, mitä tämä muuttaa käyttäjälle.\n\n## Miksi\nPerustuu katselmointipalautteeseen (muistio, kohta N):\nasiakkaan edustaja: \"sitaatti\"\n\n## Miten testattu\n- [ ] testipolku 1\n- [ ] testipolku 2\n- [ ] regressiotestit läpi\n\nSulkee #31\n\nKONFLIKTIMERKINNÄT\n<<<<<<< HEAD          ← oma versio\n=======               ← raja\n>>>>>>> main          ← toinen versio\nPoista merkinnät ja jätä tarkoitettu lopputulos.",
        test: "Avaa julkaistu versio ja tee juuri se asia, josta testaaja huomautti. Sen pitää nyt onnistua ilman epäröintiä."
      },
      example: "PR-kuvaus: “Siirtää viikkosuodattimen listan yläpuolelle. Perustuu katselmointipalautteeseen (muistio, kohta 2). Sulkee #31.” Lisäksi merge-commit historiassa.",
      notEnough: "Suora commit pääversioon viestillä “korjattu palautteet”, ilman haaraa, pull requestia ja kuvausta."
    },

    12: {
      type: "feature",
      feature: "Työntekijä kirjaa tunnin oikealla puhelimella alle 30 sekunnissa, ja koko sovellus toimii pelkällä näppäimistöllä.",
      excerpt: "Kirjaamisen pitää olla niin helppoa, ettei sitä voi vältellä: valmis alle puolessa minuutissa, myös puhelimella.",
      connection: "Toiminnot ovat kasassa, ja palautemuutos on tuotannossa. Nyt varmistat, että ne toimivat siellä, missä asiakkaan väki niitä käyttää: puhelimella asiakaskäynnillä, näppäimistöllä ja ruudunlukijalla. Mittaus ennen ja jälkeen tekee parannuksesta todistettavan.",
      deliverable: "Lighthouse-raportit ennen ja jälkeen, omat CSS-taitekohdat, korjattu näppäinpolku, label-kytkennät ja kaavion tekstivastine.",
      why: "Asiakkaan väki kirjaa tunteja asiakaskäynneillä puhelimella, ja saavutettavuus on webprofiilissa vaatimus, ei kaunistus. Ennen/jälkeen-mittaus tekee parannuksesta todistettavan.",
      done: "Kirjaus on tehty oikealla puhelimella alusta loppuun alle 30 sekunnissa; koko käyttöpolku kulkee pelkällä näppäimistöllä; saavutettavuuspistemäärä on vähintään 90 ja molemmat raportit ovat repossa.",
      record: "Kirjoita työviikon 12 merkintään: lähtö- ja lopputulokset numeroina, korjauslista kohta kohdalta, puhelimella mitattu kirjausaika ja se, mikä näppäinpolussa oli rikki.",
      skills: ["responsiivinen CSS", "saavutettavuus", "mittaustyökalut", "mobiilitestaus"],
      tehtavat: {
        "12-1": {
          miksi: "Lähtömittaus on se taso, jota vastaan parannus todistetaan. Ilman sitä ennen/jälkeen-vertailua ei voi tehdä.",
          osat: [
            ["Aja Lighthouse", "Aja Lighthouse eli Chromen kehittäjätyökalujen laatumittari julkaistulle versiolle: saavutettavuus ja suorituskyky."],
            ["Tallenna raportti", "Tallenna raportti repositoryyn, ennen kuin korjaat mitään."],
            ["Kirjaa luvut", "Kirjaa saavutettavuuden ja suorituskyvyn pistemäärät muistiin."]
          ],
          valmis: "Lähtötason raportti on repositoryssa, ja pistemäärät on kirjattu ennen ensimmäistäkään korjausta.",
          tallenna: "Lighthouse-raportti `project-docs/`-kansioon, pistemäärät työviikon 12 päiväkirjaan."
        },
        "12-2": {
          miksi: "Asiakkaan väki kirjaa tunteja asiakaskäynneillä puhelimella. Selaimen laitesimulaattori ei paljasta kaikkea.",
          osat: [
            ["Valitse taitekohdat", "Valitse taitekohdat oman sisältösi mukaan: siitä leveydestä, jossa lomake tai taulukko alkaa ahtautua."],
            ["Korjaa CSS", "Korjaa responsiivisuus omilla CSS-taitekohdilla niin, että kirjauslomake ja raportit mahtuvat puhelimen näytölle."],
            ["Testaa puhelimella", "Tee kirjaus oikealla puhelimella alusta loppuun ja ota aika. Tavoite on alle 30 sekuntia."]
          ],
          valmis: "Kirjaus on tehty oikealla puhelimella alusta loppuun alle 30 sekunnissa.",
          tallenna: "Kuvakaappaus puhelimelta ja mitattu kirjausaika työviikon 12 päiväkirjaan."
        },
        "12-3": {
          miksi: "Saavutettavuus on webprofiilissa vaatimus, ei kaunistus. Sovellus, joka toimii näppäimistöllä ja ruudunlukijalla, on selkeämpi myös hiiren käyttäjälle.",
          osat: [
            ["Kulje näppäinpolku", "Kulje koko sovellus pelkällä näppäimistöllä: kirjautuminen, kirjaus, lista ja raportit. Merkitse jokainen kohta, jossa fokus katoaa tai jumittuu."],
            ["Kytke labelit", "Kytke jokainen lomakekenttä label-elementtiin ja virheviesti ohjelmallisesti kenttäänsä."],
            ["Korjaa hierarkia ja kontrastit", "Korjaa otsikkohierarkia ilman hyppyjä ja varmista kontrastit myös napeissa. CSS-ratkaisut tehdään itse."],
            ["Lisää kaavion tekstivastine", "Anna jokaiselle kaaviolle tekstivastine: sama data taulukkona, jotta tieto on saatavilla ilman kuvaa."],
            ["Kirjaa korjauslista", "Kirjaa jokainen korjaus omalle rivilleen korjauslistaan."]
          ],
          valmis: "Koko käyttöpolku kulkee pelkällä näppäimistöllä, jokaisella kentällä on label ja jokaisella kaaviolla tekstivastine.",
          tallenna: "Korjauslista ja näppäinpolun kuvaus työviikon 12 päiväkirjaan."
        },
        "12-4": {
          miksi: "Ennen/jälkeen-vertailu todistaa, mitkä korjaukset oikeasti paransivat sovellusta.",
          osat: [
            ["Aja Lighthouse uudelleen", "Aja sama mittaus samalle sivulle ja tallenna raportti repositoryyn."],
            ["Kirjoita vertailu", "Kirjoita ennen/jälkeen-vertailu: pistemäärät ja ne korjaukset, jotka nostivat niitä."],
            ["Tarkista tavoite", "Tarkista, että saavutettavuuspistemäärä on vähintään 90. Jos ei ole, palaa korjauslistaan."]
          ],
          valmis: "Saavutettavuuspistemäärä on vähintään 90, ja molemmat raportit ja vertailu ovat repositoryssa.",
          tallenna: "Loppuraportti ja vertailu `project-docs/`-kansioon. Lähtö- ja lopputulokset numeroina työviikon 12 päiväkirjaan."
        }
      },
      help: {
        title: "Saavutettavuustarkistuslista ja taitekohdat",
        tree: "Näppäinpolku (testaa Tabilla)\nKirjautuminen → sposti → salasana → Kirjaudu\n  ↓\nKirjaus → projekti → tehtävälaji → tunnit → päivä → selite → Tallenna\n  ↓\nOmat kirjaukset → suodattimet → rivin muokkaa/poista\n  ↓\nRaportit → ryhmittely → aikaväli → kaavio → tekstivastine",
        actions: [
          "Tallenna lähtömittaus ennen kuin korjaat mitään. Muuten parannusta ei voi todistaa.",
          "Valitse taitekohdat oman sisältösi mukaan: siitä leveydestä, jossa taulukko tai lomake alkaa ahtautua.",
          "Testaa oikealla puhelimella, ei vain selaimen laitesimulaattorilla.",
          "Kirjaa jokainen korjaus omalle rivilleen korjauslistaan."
        ],
        code: "SAAVUTETTAVUUDEN TARKISTUSLISTA\n[ ] jokaisella kentällä on <label for> tai kentän sisältävä <label>\n[ ] otsikot h1 → h2 → h3 ilman hyppyjä\n[ ] fokus näkyy selvästi jokaisessa elementissä\n[ ] Tab-järjestys vastaa näkyvää järjestystä\n[ ] virheviesti on ohjelmallisesti kytketty kenttäänsä\n[ ] tekstin ja taustan kontrasti riittää myös napeissa\n[ ] kaaviolla on tekstivastine (sama data taulukkona)\n[ ] kuvilla on alt-teksti tai ne on merkitty koristeeksi\n\nENNEN/JÄLKEEN\nSaavutettavuus __ → __   Suorituskyky __ → __\nKorjaukset: 1) … 2) … 3) …",
        test: "Irrota hiiri ja tee koko kirjaus pelkällä näppäimistöllä. Jos jokin kohta ei onnistu, se on korjattava."
      },
      example: "Ennen/jälkeen: “Saavutettavuus 71 → 96; korjattu: 4 label-kytkentää, kontrasti napeissa, fokusjärjestys modaalissa, kaavion tekstivastine.”",
      notEnough: "“Toimii puhelimella” ilman laitetta, mittausta ja korjauslistaa."
    },

    13: {
      type: "laatu",
      feature: "Jokainen rajapinnan reitti vastaa jokaiselle roolille odotetulla koodilla, ja selitekenttään kirjoitettu skripti näkyy pelkkänä tekstinä.",
      excerpt: "Jokainen näkee omat kirjauksensa ja omat yhteenvetonsa, mutta ei muiden. Tuntitiedot ovat herkkää tietoa.",
      connection: "Kaikki reitit ovat nyt olemassa, joten ne voi käydä läpi kerralla: jokainen reitti jokaisella roolilla. Työaikatiedot ovat henkilöön sidottua tietoa, ja yksi vuotava raporttireitti vie luottamuksen koko järjestelmään. Löydökset korjataan nyt, jotta työviikon 14 testaus tehdään turvallista versiota vastaan.",
      deliverable: "Tietoturva-arvio jäännösriskeineen, ajettu reittitaulukko, korjaukset, salaisuudet .env-tiedostossa ja XSS-testin tulos.",
      why: "Työaikatiedot ovat henkilöön sidottua, palkkakeskusteluihin vaikuttavaa dataa: yksi vuotava raporttireitti vie luottamuksen koko järjestelmään. Asiakas sanoi sen itse: tuntitiedot ovat herkkää tietoa.",
      done: "Reittitaulukko on ajettu ja jokainen rivi täsmää odotettuun (poikkeamat korjattu ja uusintatestattu); skripti-syöte renderöityy tekstinä; repossa tai sen historiassa ei ole salaisuuksia; arviodokumentti on project-docs-kansiossa.",
      record: "Kirjoita työviikon 13 merkintään: viisi riskiluokkaa ja niiden ratkaisut, reittitaulukon poikkeamat ja korjaukset sekä se, mitä jäännösriskiä et voinut poistaa ja miksi.",
      skills: ["tietoturva-arviointi", "käyttöoikeustestaus", "ympäristömuuttujat", "XSS"],
      termit: ["XSS"],
      tehtavat: {
        "13-1": {
          miksi: "Riskiluokat ohjaavat, mitä testaat ja korjaat. Kirjattu jäännösriski kertoo rehellisesti, mitä ei voitu poistaa.",
          osat: [
            ["Käy riskiluokat läpi", "Käy läpi viisi riskiluokkaa: syötteet, käyttöoikeudet, salasanat, istunnot ja tietojen näkyvyys."],
            ["Kirjaa arvio", "Kirjaa jokaisesta riskiluokasta riski, ratkaisu ja jäännösriski."],
            ["Tarkista kyselyt", "Tarkista, että SQL-kyselyt käyttävät parametreja eivätkä yhdistä käyttäjän syötettä merkkijonoon."]
          ],
          valmis: "Riskiarviossa on viisi riskiluokkaa, ja jokaisella on riski, ratkaisu ja jäännösriski.",
          tallenna: "Arvio `project-docs/`-kansioon. Riskiluokat ja ratkaisut työviikon 13 päiväkirjaan.",
          sanat: ["SQL"]
        },
        "13-2": {
          miksi: "Reittitaulukko löytää sen, mitä käyttöliittymästä ei näe: reitin, joka vastaa väärälle roolille.",
          osat: [
            ["Tee reittitaulukko", "Tee taulukko, jossa on jokainen rajapinnan reitti kertaa kolme roolia: kirjautumaton, työntekijä ja projektipäällikkö."],
            ["Kirjaa odotukset", "Kirjaa jokaiselle riville odotettu vastauskoodi ennen ajoa."],
            ["Aja taulukko", "Aja jokainen rivi kolmella istunnolla ja kirjaa saatu vastauskoodi odotetun viereen."]
          ],
          valmis: "Jokaisella reittitaulukon rivillä on odotettu ja saatu vastaus, ja poikkeamat on merkitty.",
          tallenna: "Ajettu reittitaulukko `project-docs/`-kansioon."
        },
        "13-3": {
          miksi: "Poikkeama ilman uusintatestiä ei ole korjattu. Repositoryyn päätynyt salaisuus on vuotanut, vaikka tiedosto poistettaisiin myöhemmin.",
          osat: [
            ["Korjaa poikkeamat", "Korjaa jokainen reittitaulukon poikkeama ja aja rivi uudelleen."],
            ["Siirrä salaisuudet", "Siirrä salaisuudet `.env`-tiedostoon ja varmista, että se on `.gitignore`-tiedostossa."],
            ["Tarkista Git-historia", "Tarkista Git-historia salaisuuksien varalta, ei vain nykyistä tilaa."]
          ],
          valmis: "Jokainen reittitaulukon rivi täsmää odotettuun uusintatestin jälkeen, eikä repositoryssa tai sen historiassa ole salaisuuksia.",
          tallenna: "Korjausten ja `.env`-järjestelyn commitit. Poikkeamat ja korjaukset työviikon 13 päiväkirjaan."
        },
        "13-4": {
          miksi: "Selite on vapaata tekstiä, jonka projektipäällikkö näkee porautuessaan. Jos siihen kirjoitettu skripti suoritetaan, toisen käyttäjän istunto on vaarassa.",
          osat: [
            ["Syötä skripti", "XSS tarkoittaa hyökkäystä, jossa syötekenttään kirjoitettu skripti ajetaan toisen käyttäjän selaimessa. Kirjaa selitteeksi `<script>alert(1)</script>`."],
            ["Tarkista näkymät", "Avaa jokainen näkymä, jossa selite näkyy. Syötteen pitää näkyä tekstinä, eikä konsolissa saa olla virhettä."],
            ["Kokoa arvio", "Kokoa riskiarvio, reittitaulukko, korjaukset ja XSS-testin tulos yhdeksi dokumentiksi `project-docs/`-kansioon."]
          ],
          valmis: "Skriptisyöte näkyy tekstinä kaikissa näkymissä, ja tietoturva-arvio on yhtenä dokumenttina repositoryssa.",
          tallenna: "XSS-testin kuvakaappaus ja tietoturva-arvio `project-docs/`-kansioon. Jäännösriski, jota et voinut poistaa, työviikon 13 päiväkirjaan.",
          sanat: ["XSS"]
        }
      },
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
        test: "Aja koko reittitaulukko kolmella istunnolla ja merkitse jokaiseen soluun saatu vastauskoodi. Vertaa ennen ajoa kirjattuun odotukseen."
      },
      example: "Taulukkorivi: “GET /api/raportit/henkilot · työntekijä · odotettu 403 · saatu 403 ✓”, ja jäännösriski kirjattuna: “siemendatan tunnukset on vaihdettava ennen oikeaa käyttöä”.",
      notEnough: "“Sovellus on turvallinen koska salasanat on hashattu bcryptillä” ilman reittien läpikäyntiä."
    },

    14: {
      type: "laatu",
      feature: "Vähintään 12 suunniteltua testitapausta on ajettu odotusarvoja vasten, ja vähintään kaksi virhettä on korjattu täydellisinä virheenkorjausketjuina.",
      connection: "Tietoturvakorjausten jälkeen koko sovellus testataan kerralla, koska nyt on olemassa kaikki se, mitä testimatriisi on työviikolta 2 asti odottanut. Raportointisovellus, jonka summiin ei voi luottaa, on hyödytön. Löydetyt virheet korjataan täydellisinä ketjuina, ja regressiotestit suojaavat laskentaa julkaisuun asti.",
      deliverable: "Täydennetty testimatriisi odotusarvoineen, ajetut testitulokset, vähintään kaksi täydellistä virheenkorjausketjua ja laskentamoduulin regressiotestit.",
      why: "Raportointisovellus, jonka summiin ei voi luottaa, on hyödytön. Ilman ennen ajoa kirjattua odotusarvoa testi ei todista mitään: se vain toteaa, mitä sattui tapahtumaan.",
      done: "Testiraportissa jokaisella tapauksella on luokka, odotettu ja havaittu tulos sekä ajankohta; vähintään kaksi ketjua on täydellisiä commit-viittauksineen; regressiotestit ajetaan komennolla ja menevät läpi.",
      record: "Kirjoita työviikon 14 merkintään: montako tapausta ajoit ja montako meni läpi ensimmäisellä kerralla, kaksi virheenkorjausketjua kokonaisina sekä se, mitä testaus paljasti omasta koodistasi.",
      skills: ["testisuunnittelu", "virheenkorjaus", "regressiotestaus"],
      termit: ["T01"],
      resources: [["Lataa dokumentointipohjat (testimatriisi)", "downloads/nayton-dokumentointipohjat.docx", true]],
      tehtavat: {
        "14-1": {
          miksi: "Ilman ennen ajoa kirjattua odotusarvoa testi ei todista mitään: se vain toteaa, mitä sattui tapahtumaan.",
          osat: [
            ["Täydennä tapaukset", "Täydennä testimatriisi vähintään 12 tapaukseen. Jokainen testitapaus saa tunnuksen T01–T14, jotta siihen voi viitata päiväkirjassa ja korjausketjussa."],
            ["Jaa luokkiin", "Jaa tapaukset kolmeen luokkaan: normaali käyttö, rajat ja virhetilanteet."],
            ["Kirjaa odotukset", "Kirjoita jokaiselle tapaukselle odotettu tulos, ennen kuin ajat sen."]
          ],
          valmis: "Matriisissa on vähintään 12 tapausta kolmessa luokassa, ja jokaisella on odotettu tulos ennen ajoa.",
          tallenna: "Testimatriisi `project-docs/`-kansioon tai dokumentointipohjan testimatriisiin.",
          sanat: ["T01"]
        },
        "14-2": {
          miksi: "Kun havaittu tulos on odotetun vieressä, näet heti, mikä toimii ja mikä ei.",
          osat: [
            ["Aja tapaukset", "Aja jokainen testitapaus ja kirjaa havaittu tulos omaan sarakkeeseensa odotetun viereen, myös silloin, kun se on sama kuin odotus."],
            ["Merkitse ajankohta", "Merkitse jokaiseen tapaukseen ajankohta ja tulos: läpi tai poikkeama."],
            ["Laske tulos", "Laske, montako tapausta meni läpi ensimmäisellä ajolla."]
          ],
          valmis: "Testiraportissa jokaisella tapauksella on luokka, odotettu ja havaittu tulos sekä ajankohta.",
          tallenna: "Testiraportti `project-docs/`-kansioon. Ensimmäisellä ajolla läpi menneiden määrä työviikon 14 päiväkirjaan."
        },
        "14-3": {
          miksi: "Täydellinen ketju todistaa, että virhe on ymmärretty ja korjattu eikä korjaus rikkonut muuta.",
          osat: [
            ["Selvitä syy", "Selvitä jokaisen poikkeaman syy selaimen kehittäjätyökaluilla, lokeilla tai testiaineistolla. Arvaus ei riitä."],
            ["Korjaa ketjuna", "Korjaa virhe ketjuna: havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti."],
            ["Kirjaa kaksi ketjua", "Kirjaa vähintään kaksi ketjua kokonaisina, kaikki kuusi kohtaa commit-viittauksineen."],
            ["Tarkista aitous", "Älä keksi virheitä. Jos aitoja ei löydy, pyydä ohjaajaa merkitsemään vikatehtäviä, joista ketjut ajetaan."]
          ],
          valmis: "Vähintään kaksi virheenkorjausketjua on täydellisiä commit-viittauksineen ja perustuu aitoihin havaintoihin.",
          tallenna: "Ketjut `project-docs/`-kansioon tai dokumentointipohjaan. Kaksi ketjua kokonaisina työviikon 14 päiväkirjaan."
        },
        "14-4": {
          miksi: "Regressiotesti paljastaa heti, jos aiemmin toiminut laskenta menee rikki, kun koodia muutetaan työviikolla 15.",
          osat: [
            ["Kirjoita testit", "Lisää laskentamoduulille yksikkötestit viikkorajoille, tyhjälle viikolle ja vuodenvaihteelle."],
            ["Aja komennolla", "Aja testit yhdellä komennolla puhtaassa työhakemistossa ilman käsin tehtyjä vaiheita."],
            ["Tarkista tulos", "Tarkista, että kaikki testit menevät läpi, ja kirjaa ajotulos."]
          ],
          valmis: "Regressiotestit ajetaan yhdellä komennolla ja menevät läpi.",
          tallenna: "Testikoodin commit ja ajotulos työviikon 14 päiväkirjaan."
        }
      },
      help: {
        title: "Virheenkorjausketjun ja testiraportin pohjat",
        tree: "TESTILUOKAT (14 tapausta, jako 4 / 4 / 6)\nnormaali   T01 kirjaus · T02 hallinta · T03 viikkosumma · T04 roolit\nrajat      T05 0,25 h ja 24 h · T06 tyhjä viikko\n           T07 sunnuntai ja vuodenvaihde · T08 tyhjä projekti\nvirhe      T09 virheelliset tunnit · T10 suora API-kutsu\n           T11 XSS-selite · T12 verkkovirhe · T13 istunto vanhenee\n           T14 projektin poisto, kun kirjauksia on (409)",
        actions: [
          "Kirjoita odotettu tulos ennen ajoa. Jälkikäteen kirjattu odotus ei ole odotus.",
          "Aja jokainen tapaus ja kirjaa havainto, vaikka se olisi sama kuin odotus.",
          "Kirjaa jokainen ketju kaikkine kuutena kohtineen. Puolikas ketju ei kelpaa työnäytteeksi.",
          "Älä keksi bugeja: jos aitoja ei löydy, pyydä ohjaajaa merkitsemään vikatehtäviä."
        ],
        code: "VIRHEENKORJAUSKETJUN 6 KENTTÄÄ\n1 Havainto            mitä näit, missä näkymässä, millä datalla\n2 Toistamisohje       askeleet, joilla virhe toistuu joka kerta\n3 Syy                 miten selvitit syyn ja mikä se oli\n4 Korjauscommit       commit-tunnus ja mitä se muutti\n5 Uusintatesti        sama testi uudelleen: tulos\n6 Regressiotesti      mitä muuta testasit ettei mennyt rikki\n\nTESTIRAPORTIN SARAKKEET\nT# | luokka | lähtötila | toiminta | odotus | havainto | tulos | aika",
        test: "Aja regressiotestit komennolla puhtaassa työhakemistossa ja tarkista, että kaikki menevät läpi ilman käsin tehtyjä vaiheita."
      },
      example: "Täysi ketju aidosta bugista: “testitapaus T07: sunnuntain kirjaus näkyi väärällä viikolla → syy: strftime('%W') laskee vuoden ensimmäisen osittaisen viikon nollaksi → korjaus commit abc123 → uusintatesti ok → regressiotesti lisätty.”",
      notEnough: "“Testasin kaiken ja kaikki toimii”, ilman luokkia, odotusarvoja ja ketjuja."
    },

    15: {
      type: "laatu",
      feature: "Uusi käyttäjä pääsee alkuun pelkillä ohjeilla, ja refaktoroitu koodi toimii samoin kuin ennen, mikä näkyy vihreinä testeinä.",
      excerpt: "Mukana on ohje, jolla uusi työntekijä pääsee alkuun kysymättä minulta mitään.",
      connection: "Testit ovat vihreinä, joten koodia uskaltaa nyt siistiä: jos refaktorointi rikkoo jotain, regressiotestit kertovat sen heti. Samalla kirjoitat käyttöönotto-ohjeen ja pikaohjeet, koska niitä testataan oikeasti työviikolla 16. Ilman toimivaa ohjetta julkaisutestaus epäonnistuu.",
      deliverable: "Kolme dokumentoitua refaktorointia ennen/jälkeen-diffeineen, README ja käyttöönotto-ohje, riippuvuustaulukko sekä pikaohjeet työntekijälle ja projektipäällikölle.",
      why: "Ylläpidettävyys ja dokumentointi todennetaan tässä, ja ilman testattavaa käyttöönotto-ohjetta työviikon 16 julkaisutestaus epäonnistuu varmasti.",
      done: "Regressiotestit menevät läpi refaktoroinnin jälkeen; ennen/jälkeen-diffit ja perustelut ovat repossa; dokumentit ovat repossa ja ohjeet on kirjoitettu käyttäjälle, ei arvioijalle; lisenssin tila on kirjattu.",
      record: "Kirjoita työviikon 15 merkintään: kolme refaktorointikohdetta ja miksi valitsit juuri ne, mitä dokumentaatiota kirjoitit ja kenelle sekä lisenssikysymyksen tila.",
      skills: ["refaktorointi", "ylläpidettävyys", "dokumentointi"],
      tehtavat: {
        "15-1": {
          miksi: "Refaktorointi eli rakenteen parannus ilman toiminnan muutosta tekee koodista helpomman ylläpitää. Testit todistavat, että toiminta ei muuttunut.",
          osat: [
            ["Valitse kohteet", "Valitse kolme kohdetta: pitkä funktio, toistuva koodi ja epäselvä nimi. Perustele jokainen valinta yhdellä lauseella."],
            ["Refaktoroi yksi kerrallaan", "Refaktoroi yksi kohde kerrallaan ja aja regressiotestit jokaisen jälkeen."],
            ["Tallenna diffit", "Tallenna jokaisesta ennen/jälkeen-diffi ja kirjoita, miksi jälkimmäinen on ylläpidettävämpi."]
          ],
          valmis: "Kolme refaktorointia on tehty, regressiotestit menevät läpi jokaisen jälkeen, ja diffit perusteluineen ovat repositoryssa.",
          tallenna: "Ennen/jälkeen-diffit ja perustelut `project-docs/`-kansioon. Kohteet ja valinnan syyt työviikon 15 päiväkirjaan."
        },
        "15-2": {
          miksi: "Asiakas haluaa ohjeen, jolla uusi työntekijä pääsee alkuun kysymättä häneltä mitään. Ohjetta testataan oikeasti työviikolla 16.",
          osat: [
            ["Täydennä README", "Täydennä README: mikä sovellus on ja kenelle, vaatimukset, käynnistys, tietokannan alustus ja testien ajo."],
            ["Kirjoita käyttöönotto-ohje", "Kirjoita `project-docs/kayttoonotto.md`, jolla sovelluksen saa asennettua tyhjään ympäristöön vaihe vaiheelta."],
            ["Dokumentoi ympäristömuuttujat", "Lisää esimerkkitiedosto `.env.esimerkki` ja kerro ohjeessa, mihin `.env` luodaan."],
            ["Pyydä lukija", "Anna ohje toiselle luettavaksi ja pyydä häntä merkitsemään jokainen kohta, jota hän ei ymmärrä ilman lisäkysymyksiä."]
          ],
          valmis: "README ja käyttöönotto-ohje ovat repositoryssa, ja ohjetta voi seurata kirjaimellisesti ilman aiempaa tietoa projektista.",
          tallenna: "`README.md` ja `project-docs/kayttoonotto.md` commitilla."
        },
        "15-3": {
          miksi: "Pikaohjeet kirjoitetaan käyttäjälle, ei arvioijalle. Riippuvuustaulukko kertoo, miksi jokainen paketti on mukana.",
          osat: [
            ["Kirjoita työntekijän ohje", "Kirjoita `project-docs/pikaohje-tyontekija.md`: miten tunnit kirjataan."],
            ["Kirjoita projektipäällikön ohje", "Kirjoita `project-docs/pikaohje-projektipaallikko.md`: projektit, tehtävälajit ja raportit."],
            ["Kokoa riippuvuudet", "Kokoa taulukko: paketti → rooli tässä projektissa → versio. Jos paketille ei löydy roolia, harkitse sen poistoa."]
          ],
          valmis: "Molemmille rooleille on pikaohje käyttäjän kielellä, ja jokaisella riippuvuudella on taulukossa rooli ja versio.",
          tallenna: "Pikaohjeet ja riippuvuustaulukko repositoryyn. Kenelle kirjoitit minkäkin ohjeen, työviikon 15 päiväkirjaan."
        },
        "15-4": {
          miksi: "Lisenssi on ohjaajan päätös, jota ei tehdä itse eikä tekoälyllä. Toimeksiannon mukaan se kysytään viimeistään työviikolla 15.",
          osat: [
            ["Kysy ohjaajalta", "Kysy lisenssiä ohjaajalta, jos sitä ei ole vielä sovittu."],
            ["Kirjaa tila", "Kirjaa vastaus suunnitelman Lisenssi-kenttään. Jos vastausta ei vielä ole, jätä kenttä avoimeksi asiaksi äläkä päätä itse."],
            ["Tarkista LICENSE", "Jos lisenssi on sovittu, lisää `LICENSE`-tiedosto repositoryyn. Jos ei ole, kirjaa asia päiväkirjaan avoimena."]
          ],
          valmis: "Lisenssin tila on kirjattu suunnitelmaan: sovittu lisenssi on LICENSE-tiedostona, tai avoin asia on merkitty avoimeksi.",
          tallenna: "Suunnitelman päivitys commitilla. Lisenssikysymyksen tila työviikon 15 päiväkirjaan."
        }
      },
      help: {
        title: "README-runko ja refaktorointiperustelu",
        tree: "README.md\n├─ Mikä sovellus on ja kenelle\n├─ Vaatimukset (Node-versio, käyttöjärjestelmä)\n├─ Asennus vaihe vaiheelta\n├─ Ympäristömuuttujat (.env.esimerkki)\n├─ Käynnistys: kehitys ja tuotanto\n├─ Tietokannan alustus\n├─ Testien ajo\n└─ Riippuvuudet ja niiden rooli\n\nproject-docs/\n├─ kayttoonotto.md      tyhjästä ympäristöstä toimivaan sovellukseen\n├─ pikaohje-tyontekija.md\n└─ pikaohje-projektipaallikko.md",
        actions: [
          "Refaktoroi yksi asia kerrallaan ja aja testit jokaisen välissä.",
          "Kirjoita käyttöönotto-ohje niin, että sen voi seurata kirjaimellisesti ilman aiempaa tietoa projektista.",
          "Nimeä jokaiselle riippuvuudelle rooli. Jos roolia ei löydy, harkitse poistoa.",
          "Kirjaa lisenssin tila myös silloin, kun se on yhä avoin."
        ],
        code: "REFAKTOROINTIPERUSTELUN POHJA\nKohde:            tiedosto ja funktio\nOngelma:          mikä tekee tästä vaikean ylläpitää\nEnnen:            lyhyt katkelma\nJälkeen:          lyhyt katkelma\nMiksi parempi:    1) … 2) … 3) …\nTestit:           ajettu, tulos\n\nRIIPPUVUUSTAULUKKO\npaketti | rooli tässä projektissa | versio\nexpress | HTTP-palvelin ja reitit  | x.y.z\n…",
        test: "Anna käyttöönotto-ohje toiselle henkilölle luettavaksi ja pyydä häntä merkitsemään jokainen kohta, jota hän ei ymmärrä ilman lisäkysymyksiä."
      },
      example: "Ennen/jälkeen-katkelma ja sen viereen “miksi jälkimmäinen on ylläpidettävämpi” kolmella konkreettisella syyllä, sekä regressiotestien ajotulos molempien jälkeen.",
      notEnough: "Kosmeettinen uudelleennimeäminen ilman perustelua, tai README jossa lukee vain “npm install”."
    },

    16: {
      type: "julkaisu",
      feature: "Ulkopuolinen testaaja on ottanut julkaisuehdokkaan v1.0-rc1 käyttöön pelkän kirjallisen ohjeen avulla ja kokeillut molempia rooleja.",
      excerpt: "Mukana on ohje, jolla uusi työntekijä pääsee alkuun kysymättä minulta mitään.",
      connection: "Dokumentaatio on kirjoitettu ja sovellus testattu. Nyt jäädytät sisällön ja panet sekä sovelluksen että ohjeen koetukselle: ensin itse puhtaassa ympäristössä, sitten ulkopuolisen testaajan käsissä. Kun julkaisutestaus tehdään julkaisuehdokasta vasten, työviikko 17 jää kokonaan löydösten korjaamiseen ja v1.0:n julkaisuun.",
      deliverable: "Jäädytyspäätös ja issue-luokittelu, tagilla merkitty julkaisuehdokas (RC) julkisessa osoitteessa, oma asennuspöytäkirja, korjattu käyttöönotto-ohje, ulkopuolisen testauspöytäkirja ja estävien issueiden lista.",
      why: "Julkaisutestaus julkaisuehdokasta vasten jättää kokonaisen viikon puskuria: mitä tahansa testaaja löytää, korjaukselle on aikaa ennen v1.0:aa. Jäädytys estää viimeisten viikkojen valumisen uusiin ominaisuuksiin, ja oma puhdas asennus siivoaa ohjeen aukot ennen ulkopuolisen vuoroa.",
      done: "v1.0-rc1 on julkisessa osoitteessa ja merkitty tagilla; oma asennuspöytäkirja ja ulkopuolisen testauspöytäkirja (testaajan rooli, ajankohta, testaajan omat sanat roolilla merkittyinä erillään omasta tulkinnasta) ovat repossa; testaajan nimi on lähetetty ohjaajalle Teamsissa; estävät virheet on kirjattu issueiksi (niitä ei korjata kiireellä tällä viikolla vaan seuraavalla).",
      record: "Kirjoita työviikon 16 merkintään: jäädytyspäätös ja mitä jätit v1.1-listalle, oman puhtaan asennuksen epäröintikohdat ja ohjeeseen tehdyt korjaukset sekä ulkopuolisen tärkeimmät havainnot sitaatteina (puhuja roolilla).",
      skills: ["tuotantobuild", "ympäristökonfiguraatio", "versiotagit", "julkaisutestauksen järjestäminen"],
      termit: ["RC", "tagi"],
      tehtavat: {
        "16-1": {
          miksi: "Jäädytys estää viimeisiä viikkoja valumasta uusiin ominaisuuksiin. Luokittelu kertoo, mikä on korjattava ennen v1.0:aa.",
          osat: [
            ["Kirjaa jäädytys", "Päätä ja kirjaa: uusia ominaisuuksia ei enää lisätä."],
            ["Luokittele issuet", "Käy jäljellä olevat issuet läpi ja merkitse ne estäviksi tai v1.1-listalle."],
            ["Kirjaa v1.1-lista", "Kirjaa, mitä jätit tietoisesti v1.1-listalle."]
          ],
          valmis: "Jäädytyspäätös on kirjattu, ja jokainen avoin issue on merkitty estäväksi tai v1.1-listalle.",
          tallenna: "Jäädytyspäätös ja v1.1-lista työviikon 16 päiväkirjaan."
        },
        "16-2": {
          miksi: "Julkaisuehdokas eli release candidate (RC) on lähes valmis versio, jota testataan ennen lopullista julkaisua. Tagi kiinnittää testattavan version.",
          osat: [
            ["Tee tuotantobuild", "Tee tuotantobuild puhtaassa hakemistossa."],
            ["Tarkista asetukset", "Tarkista ympäristöasetukset: portti, tietokantatiedoston polku ja pysyvyys, salaisuudet ja `NODE_ENV`."],
            ["Julkaise ja tee savutesti", "Julkaise ja aja savutesti julkisessa osoitteessa: kirjaus ja raportti. Tarkista, että lokit näkyvät alustan lokinäkymässä."],
            ["Merkitse tagilla", "Merkitse versio Git-tagilla `v1.0-rc1` ja vie tagi etärepositoryyn. Tagi on versiomerkintä, joka kiinnitetään yhteen committiin."]
          ],
          valmis: "v1.0-rc1 on julkisessa osoitteessa ja merkitty tagilla, ja savutesti on ajettu.",
          tallenna: "Tagi `v1.0-rc1` ja release GitHubissa. Savutestin tulos työviikon 16 päiväkirjaan.",
          sanat: ["RC","tagi"]
        },
        "16-3": {
          miksi: "Oma puhdas asennus löytää ohjeen aukot, ennen kuin ulkopuolinen testaaja joutuu niihin.",
          osat: [
            ["Asenna ohjeella", "Asenna sovellus puhtaaseen ympäristöön pelkän käyttöönotto-ohjeen avulla."],
            ["Pidä pöytäkirjaa", "Kirjaa tiedostoon `project-docs/asennuspoytakirja-vk16.md` jokainen kohta, jossa epäröit: mitä tein, mihin pysähdyin ja mitä ohjeeseen lisättiin."],
            ["Korjaa ohje", "Korjaa ohje pöytäkirjan perusteella, ennen kuin annat sen ulkopuoliselle. Tallenna korjausdiffi."]
          ],
          valmis: "Asennuspöytäkirja on repositoryssa, ja ohjetta on korjattu sen perusteella ennen ulkopuolisen testausta.",
          tallenna: "Asennuspöytäkirja ja ohjeen korjausdiffi repositoryyn. Epäröintikohdat työviikon 16 päiväkirjaan."
        },
        "16-4": {
          miksi: "Vain ulkopuolinen henkilö voi todistaa, että ohje riittää ilman sinua. Jokainen hänen kysymyksensä on ohjeen puute, ei testaajan vika.",
          osat: [
            ["Anna ohje ja osoite", "Anna nimetylle ulkopuoliselle käyttöönotto-ohje, julkinen osoite ja kirjallinen tehtävälista. Älä auta suullisesti."],
            ["Testauta molemmat roolit", "Testaaja pääsee alkuun, kirjaa tunnin työntekijänä ja katsoo raportin projektipäällikkönä. Katso kellosta, kauanko alkuun pääseminen kesti."],
            ["Kirjaa havainnot", "Kirjaa havainnot testaajan omin sanoin tiedostoon `project-docs/julkaisutestaus-vk16.md` ja oma tulkinta erikseen. Merkitse puhuja roolilla ”julkaisutestaaja” ja lähetä nimi ohjaajalle Teamsissa."],
            ["Kirjaa estävät issueiksi", "Luokittele havainnot estäviksi tai v1.1-listalle ja kirjaa estävät issueiksi. Niitä ei korjata kiireellä tällä viikolla vaan työviikolla 17."]
          ],
          valmis: "Testauspöytäkirjassa on testaajan rooli, ajankohta, testaajan omat sanat ja oma tulkinta erikseen, testaajan nimi on lähetetty ohjaajalle Teamsissa, ja estävät virheet ovat issueina.",
          tallenna: "Julkaisutestauksen pöytäkirja ja estävien issueiden lista repositoryyn. Tärkeimmät havainnot sitaatteina roolilla merkittyinä työviikon 16 päiväkirjaan. Nimi ohjaajalle Teamsissa."
        }
      },
      help: {
        title: "Julkaisun tarkistuslista ja testauspöytäkirja",
        tree: "project-docs/\n├─ asennuspoytakirja-vk16.md   oma puhdas asennus, epäröintikohdat\n└─ julkaisutestaus-vk16.md     ulkopuolisen testaus, sitaatit roolilla\n\nTESTAAJAN TEHTÄVÄLISTA (annetaan kirjallisena)\n1 Pääse alkuun pelkällä ohjeella\n2 Kirjaudu sisään työntekijänä\n3 Kirjaa tunti\n4 Kirjaudu sisään projektipäällikkönä\n5 Katso raportti ja poraudu yhden henkilön kirjauksiin",
        actions: [
          "Tee jäädytyspäätös kirjallisena. Muuten uusia ominaisuuksia livahtaa mukaan.",
          "Asenna itse puhtaaseen ympäristöön ennen kuin annat ohjeen kenellekään.",
          "Älä auta testaajaa suullisesti: jokainen kysymys on ohjeen puute, ei testaajan vika.",
          "Kirjaa estävät virheet issueiksi äläkä korjaa niitä kiireellä tällä viikolla."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] tuotantobuild syntyy puhtaassa hakemistossa\n[ ] ympäristömuuttujat dokumentoitu ja asetettu\n[ ] tietokantatiedoston polku ja pysyvyys tarkistettu\n[ ] lokit näkyvät alustan lokinäkymässä\n[ ] savutesti julkisessa osoitteessa: kirjaus ja raportti\n[ ] git tag v1.0-rc1 luotu ja viety etärepositoryyn\n\nPÖYTÄKIRJAMERKINTÄ\nVaihe N: mitä tein → mihin pysähdyin → mitä ohjeeseen lisättiin\nJulkaisutestaajan sitaatti: \"…\"\nOma tulkinta: …\nLuokitus: estävä / v1.1",
        test: "Anna ohje ja osoite testaajalle ilman yhtään suullista lisäystä ja katso kelloa: kuinka kauan alkuun pääseminen kesti."
      },
      example: "Pöytäkirjamerkintä: “Vaihe 4: ohje ei kertonut mihin .env luodaan → lisättiin ohjeeseen polku ja esimerkkitiedosto”, ja sen vieressä julkaisutestaajan oma sitaatti havainnostaan (roolilla, ei nimellä).",
      notEnough: "“Asensin itse uudelleen ja toimi”: oma testaus ei ole ulkopuolinen katselmointi, eikä pöytäkirjaton asennus todista mitään."
    },

    17: {
      type: "julkaisu",
      feature: "Asiakas saa v1.0:n julkisesta osoitteesta ja luovutusviestin, jolla tiimi pääsee alkuun.",
      connection: "Työviikon 16 julkaisutestauksen havainnot muuttuvat nyt korjauksiksi, ja julkaisuehdokkaasta tulee v1.0. Koska testaus tehtiin jo julkaisuehdokasta vasten, tämä viikko riittää estävien virheiden korjaamiseen ilman kiirettä. Loppuviikko on puskuria, jota ei täytetä uusilla ominaisuuksilla.",
      deliverable: "Kolmas virheenkorjausketju, v1.0-tagi ja release, julkaisutiedote, savutestin tulos ja luovutusviesti asiakkaalle.",
      why: "v1.0 ilman korjattuja estäviä virheitä on vain julkaisuehdokas uudella nimellä, ja koko viikon puskuri tekee julkaisusta hallitun tapahtuman, ei paniikkia. Luovutusviesti on asiakaslähtöisen viestinnän viimeinen näyte.",
      done: "v1.0 on julkisessa osoitteessa ja merkitty tagilla; kolmas ketju on täydellisenä repossa (tai kirjaus siitä, mistä aidosta havainnosta ketju ajettiin); savutestin tulos, julkaisutiedote ja luovutusviesti ovat repossa; project-docs/nayttomatriisi.md on perustettu; viikolle jäi puskuriaikaa eikä mitään uutta aloitettu.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät virheet korjattiin ja miten, v1.0:n tagi ja julkaisutiedotteen ydin sekä se, mitä jätit tietoisesti v1.1-listalle.",
      skills: ["julkaisu tuotantoon", "release-käytännöt", "regressiotestaus", "asiakasviestintä"],
      tehtavat: {
        "17-1": {
          miksi: "v1.0 ilman korjattuja estäviä virheitä on vain julkaisuehdokas uudella nimellä. Tämä on projektin kolmas virheenkorjausketju.",
          osat: [
            ["Korjaa ketjuna", "Korjaa työviikon 16 estävät havainnot täydellisenä ketjuna: havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti."],
            ["Tarkista lähtöhavainto", "Jos estäviä ei löytynyt, aja ketju aiemmasta aidosta julkaisuehdokasvaiheen havainnosta. Keksittyjä virheitä ei kirjata."],
            ["Korjaa vain estävät", "Jätä muut havainnot v1.1-listalle. Lista on olemassa juuri tätä varten."]
          ],
          valmis: "Kolmas virheenkorjausketju on täydellisenä repositoryssa, ja siinä kerrotaan, mistä aidosta havainnosta se ajettiin.",
          tallenna: "Ketju `project-docs/`-kansioon. Korjatut estävät virheet ja korjaustapa työviikon 17 päiväkirjaan."
        },
        "17-2": {
          miksi: "Tagi ja release kiinnittävät sen version, jonka asiakas saa. Regressiotestit ajetaan ennen tagia, jotta julkaistu versio on testattu.",
          osat: [
            ["Aja regressiotestit", "Aja koko regressiotestisarja ennen tagia ja kirjaa tulos."],
            ["Merkitse tagilla", "Merkitse versio Git-tagilla `v1.0` ja vie tagi etärepositoryyn."],
            ["Tee release", "Tee GitHubiin release eli julkaisumerkintä, johon liitetään versio ja sen kuvaus."],
            ["Julkaise tuotantoon", "Julkaise v1.0 tuotantoon samalla julkaisuputkella kuin julkaisuehdokas."]
          ],
          valmis: "v1.0 on julkisessa osoitteessa, ja se on merkitty tagilla ja releasella regressiotestien jälkeen.",
          tallenna: "Tagi `v1.0` ja release GitHubissa. Regressioajon tulos työviikon 17 päiväkirjaan.",
          sanat: ["tagi"]
        },
        "17-3": {
          miksi: "Savutesti varmistaa, että julkaistu versio toimii, eikä vain oma kopiosi. Julkaisutiedote kertoo rehellisesti, mitä v1.0 tekee ja mitä ei.",
          osat: [
            ["Aja savutesti", "Aja testipolut julkaistulle v1.0:lle: kirjaus ja raportti molemmilla rooleilla. Kirjaa tulos."],
            ["Kirjoita tiedote", "Kirjoita julkaisutiedote `project-docs/`-kansioon: mitä sovellus tekee, mitä kumpikin rooli voi tehdä, tunnetut rajoitteet ja v1.1-lista."],
            ["Tarkista rajoitteet", "Lue tunnetut rajoitteet vielä kerran: ne kerrotaan rehellisesti, ei kaunistellen."]
          ],
          valmis: "Savutestin tulos ja julkaisutiedote ovat repositoryssa.",
          tallenna: "Savutestin kirjaus ja julkaisutiedote repositoryyn. Tiedotteen ydin työviikon 17 päiväkirjaan."
        },
        "17-4": {
          miksi: "Luovutusviesti on asiakaslähtöisen viestinnän viimeinen näyte: tiedote on tekninen, viesti on asiakkaalle. Näyttömatriisi perustetaan nyt, jotta työviikolla 18 jää vain viimeistely.",
          osat: [
            ["Kirjoita viesti", "Kirjoita luovutusviesti asiakaskielellä: osoite, tunnukset, miten pääsee alkuun ja mistä pikaohjeet löytyvät molemmille rooleille."],
            ["Kerro rajat", "Kerro, mitä sovellus ei tee ja keneen otetaan yhteyttä, jos jokin ei toimi."],
            ["Poista jargon", "Lue viesti ääneen ja poista jokainen sana, jota asiakas ei käyttäisi itse."],
            ["Käytä puskuri tarkistuksiin", "Käytä loppuviikko tarkistuksiin. Älä aloita mitään uutta ominaisuutta."],
            ["Perusta näyttömatriisi", "Luo `project-docs/nayttomatriisi.md`: rivi jokaiselle 32 vaatimukselle, jossa on tunnus, työnäytteen linkki (commit, issue, tiedosto, tagi tai kuva) ja viikko. Täytä jo tiedossa olevat linkit."]
          ],
          valmis: "Luovutusviesti on repositoryssa ilman teknistä jargonia, näyttömatriisi on perustettu, ja viikolle jäi puskuriaikaa eikä mitään uutta aloitettu.",
          tallenna: "Luovutusviesti `project-docs/`-kansioon ja `project-docs/nayttomatriisi.md` commitilla. Se, mitä jätit tietoisesti v1.1-listalle, työviikon 17 päiväkirjaan."
        }
      },
      help: {
        title: "Julkaisutiedotteen ja luovutusviestin pohjat",
        tree: "git tag -a v1.0 -m \"Ensimmäinen tuotantoversio\"\ngit push origin v1.0\n→ release julkaisualustalle\n→ savutesti julkisessa osoitteessa\n→ julkaisutiedote project-docs-kansioon\n→ luovutusviesti asiakkaalle",
        actions: [
          "Korjaa vain estävät virheet; v1.1-lista on olemassa juuri tätä varten.",
          "Aja regressiotestit ennen tagia, älä sen jälkeen.",
          "Kirjoita julkaisutiedote ennen luovutusviestiä: tiedote on tekninen, viesti on asiakkaalle.",
          "Käytä puskuriaika tarkistuksiin, älä uusiin ominaisuuksiin."
        ],
        code: "JULKAISUTIEDOTTEEN POHJA\n# TuntiTutka v1.0\nMitä sovellus tekee: 3–5 riviä\nKäyttäjäroolit: mitä kumpikin voi tehdä\nTunnetut rajoitteet: rehellisesti, ei kaunistellen\nv1.1-lista: mitä on tulossa seuraavaksi\n\nLUOVUTUSVIESTIN POHJA (asiakaskielellä)\n- Osoite, josta sovellus löytyy\n- Miten pääset alkuun: 3 askelta\n- Mistä löydät ohjeet molemmille rooleille\n- Mitä sovellus EI tee\n- Kehen otat yhteyttä, jos jokin ei toimi",
        test: "Lue luovutusviesti ääneen ja poista jokainen sana, jota asiakas ei käyttäisi itse. Jos sisältö kärsii, kirjoita kohta uudelleen."
      },
      example: "Julkaisutestaajan havainnosta johdettu ketju: sitaatti → syy → korjauscommit → uusintatestin tulos → regressiotesti, ja sen perässä v1.0-tagi ja savutestin kirjaus.",
      notEnough: "v1.0-tagi ilman työviikon 16 pöytäkirjan havaintojen käsittelyä, tai “korjasin palautteet” ilman ketjua."
    },

    18: {
      type: "naytto",
      feature: "Arvioija löytää näyttömatriisin linkeistä työnäytteen jokaiseen 32 vaatimukseen, ja 8–10 minuutin demo on harjoiteltu.",
      connection: "Sovellus on luovutettu, eikä mitään uutta enää rakenneta. Viimeinen viikko kokoaa 17 työviikon aineiston niin, että arvioija löytää jokaisen työnäytteen, koska osaaminen, jota arvioija ei löydä, ei ole hänelle olemassa. Demo ja itsearviointi näyttävät, mitä osaat itse perustella.",
      deliverable: "Linkitetty näyttömatriisi project-docs/nayttomatriisi.md, harjoiteltu demorunko, kirjoitettu itsearviointi ja luovutettu näyttöpaketti.",
      why: "Näytössä arvioidaan se, mikä löytyy: osaaminen, jota arvioija ei löydä, ei ole arvioijalle olemassa. Viimeinen viikko on täsmälinkitystä, ei tuotantoa.",
      done: "Jokainen project-docs/nayttomatriisi.md-tiedoston rivi osoittaa olemassa olevaan aineistoon ja linkki aukeaa; demo on ajettu kellon kanssa vähintään kerran toiselle henkilölle; itsearviointi sisältää konkreettisia tilanteita, ei yleislauseita.",
      record: "Kirjoita työviikon 18 merkintään: mitkä matriisin kohdat olivat heikoimmin todennettuja ja miten korjasit ne, demon kesto harjoituksessa sekä itsearvioinnin ydin.",
      skills: ["näyttöaineiston kokoaminen", "esittäminen", "itsearviointi"],
      resources: [["Avaa näyttömatriisi", "#view-naytto", false]],
      tehtavat: {
        "18-1": {
          miksi: "Näytössä arvioidaan se, mikä löytyy. Toimiva linkki jokaisella rivillä säästää arvioijan aikaa ja näyttää työsi.",
          osat: [
            ["Käy vaatimukset läpi", "Täydennä `project-docs/nayttomatriisi.md`: jokaisella 32 vaatimuksella on tunnus, työnäytteen linkki (commit, issue, tiedosto, tagi tai kuva) ja viikko. Sama työnäyte saa esiintyä useilla riveillä."],
            ["Etsi aukot", "Etsi kohdat, joissa linkki puuttuu tai osoittaa epämääräiseen aineistoon."],
            ["Korjaa aukot", "Korjaa heikoimmin todennetut kohdat nyt, kun aikaa vielä on."],
            ["Tarkista aineisto", "Tarkista, että päiväkirja, AI-loki ja testiraportti ovat repositoryssa ja linkit aukeavat."]
          ],
          valmis: "Tiedoston `project-docs/nayttomatriisi.md` jokainen rivi osoittaa olemassa olevaan aineistoon, ja jokainen linkki aukeaa.",
          tallenna: "`project-docs/nayttomatriisi.md` commitilla. Heikoimmin todennetut kohdat ja niiden korjaus työviikon 18 päiväkirjaan. Sivun näyttömatriisin rastit ovat vain oma muistilistasi."
        },
        "18-2": {
          miksi: "Demo näyttää 8–10 minuutissa, mitä rakensit ja miksi. Harjoitus kellon kanssa paljastaa, mihin aika oikeasti menee.",
          osat: [
            ["Tee demorunko", "Rakenna runko: kirjaus → raportti ja porautuminen → yksi tekninen ratkaisu (lasketut yhteenvedot) → yksi korjattu virhe ketjuineen → Git-historia → AI-lokin tarkistettu käyttö."],
            ["Harjoittele kellon kanssa", "Esitä demo toiselle henkilölle ja ota aika. Tavoite on 8–10 minuuttia."],
            ["Korjaa runkoa", "Korjaa runkoa sen mukaan, mihin aika meni ja mitä kuulija kysyi."]
          ],
          valmis: "Demo on ajettu kellon kanssa vähintään kerran toiselle henkilölle, ja sen kesto on kirjattu.",
          tallenna: "Demorunko repositoryyn. Demon kesto harjoituksessa työviikon 18 päiväkirjaan."
        },
        "18-3": {
          miksi: "Itsearviointi on osaamisvaatimuksen p11 työnäyte. Konkreettiset tilanteet näyttävät, että arvio perustuu omaan työhön.",
          osat: [
            ["Kirjoita onnistumiset", "Kirjoita, mikä omassa työskentelyssäsi onnistui. Nimeä tilanne ja työviikko."],
            ["Kirjoita avun tarve", "Kirjoita, missä tarvitsit apua ja keneltä sait sen. Kirjaa auttaja roolilla, esimerkiksi ohjaaja tai toinen opiskelija, ei nimellä."],
            ["Kirjoita, mitä tekisit toisin", "Kirjoita, mitä tekisit seuraavassa projektissa toisin ja miksi."]
          ],
          valmis: "Itsearvioinnissa on konkreettisia tilanteita työviikkoineen, ei yleislauseita.",
          tallenna: "Itsearviointi repositoryyn. Sen ydin työviikon 18 päiväkirjaan."
        },
        "18-4": {
          miksi: "Viimeinen tarkistus toisen henkilön kanssa löytää aukot, joita et itse enää huomaa.",
          osat: [
            ["Käytä puskuripäivä", "Käy aineisto läpi toisen henkilön kanssa ja korjaa löydetyt aukot. Mitään uutta ei rakenneta."],
            ["Kokoa paketti", "Kokoa näyttöpaketti: linkitetty näyttömatriisi `project-docs/nayttomatriisi.md`, projektipäiväkirja, AI-loki, demorunko, itsearviointi ja julkaistu v1.0."],
            ["Luovuta", "Luovuta paketti arvioijalle ohjaajan kanssa sovitulla tavalla."]
          ],
          valmis: "Aukkojen tarkistus toisen henkilön kanssa on tehty, ja näyttöpaketti on luovutettu arvioijalle.",
          tallenna: "Luovutettu paketti. Luovutuksen ajankohta ja sisältö työviikon 18 päiväkirjaan."
        }
      },
      example: "Itsearviointi: “Työviikolla 8 GROUP BY -viikkorajaus meni väärin; pyysin ohjaajalta apua strftime-muotoihin ja opin testaamaan aikarajat ensin.”",
      notEnough: "“Opin paljon ja projekti sujui hyvin”, ilman tilanteita, rooleja ja sitä, mitä tekisit toisin.",
      paivat: [
        ["Sisältöjäädytys", "Viimeinen hyväksytty versio; matriisin täsmälinkitys alkaa."],
        ["Aineisto", "Päiväkirja, AI-loki, testiraportti ja linkkien tarkistus."],
        ["Harjoittelu", "8–10 minuutin demo kellon kanssa ja itsearviointi."],
        ["Puskuri", "Aukkojen korjaus ja tarkistus toisen henkilön kanssa."],
        ["Luovutus", "Näyttömatriisi täsmälinkitettynä, projektipäiväkirja, AI-loki ja julkaistu v1.0 luovutettu arvioijalle."]
      ]
    }
  },

  /* ---- opettajan aineisto: paperinen työpaketti ja näyttösuunnitelma ---- */
  opettaja: {
    jakso: "18 työviikkoa · päivätön aikataulu",
    deadline: "18. työviikon perjantai",
    kansiKuvaus: "Työaikaseuranta mainostoimistolle: Svelte, Express, SQLite ja julkaisu tuotantoon",
    kansiHuomiot: [
      "Aikataulu on päivätön: työviikko 1 on se viikko, jolla opiskelija aloittaa, ja projekti kestää 18 työviikkoa.",
      "Julkiseen repositoryyn ei laiteta henkilötietoja, koulun tunnisteita eikä muiden nimiä. Henkilöistä kirjataan vain rooli: testaajien sitaatit jäävät muistioihin roolilla merkittyinä, ja nimet lähetetään ohjaajalle Teamsissa. Tekijänimestä sovitaan ohjaajan kanssa."
    ],
    viimeisetPaivat: [
      ["Ma", "Sisältöjäädytys: viimeinen hyväksytty versio, matriisin täsmälinkitys alkaa"],
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
      testeja: 14,
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
        "Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 11 vaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 vaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 vaatimusta). Yhteensä 32 osaamisvaatimusta.",
        "Tekninen ympäristö: Svelte + Vite (frontend), Node.js + Express (backend) ja SQLite (tietovarasto). Ulkoisia komponentteja otetaan käyttöön kaksi: reitityskirjasto (työviikko 6) ja kaaviokirjasto (työviikko 9). Valmista UI-komponenttikirjastoa ei käytetä, koska rakenne, saavutettavuusratkaisut ja CSS ovat juuri sitä osaamista, jota näyttö arvioi.",
        "Aikataulu on päivätön: 18 työviikkoa opiskelijan omasta aloitusviikosta lukien. Sivustolla ei ole kalenteripäivämääriä, joten sama aineisto käy eri ryhmille eri ajankohtina."
      ],
      p0: "Pakollinen perusversio (P0): kirjautuminen ja kaksi roolia · tuntikirjaus validointeineen · omat kirjaukset ja oma viikkosumma · projektien, projektityyppien ja tehtävälajien hallinta · projektin jäsenyydet · lasketut yhteenvedot kolmella ryhmittelyllä ja porautuminen yksittäisiin kirjauksiin. Yhteenvetosummia ei tallenneta.",
      roolit: [
        ["Opiskelija", "Toteuttaa sovelluksen, tekee ja perustelee omat tekniset päätökset, kirjoittaa projektipäiväkirjaa ja AI-lokia sekä kokoaa näyttöaineiston. Vastaa siitä, että jokainen työnäyte löytyy repositorysta."],
        ["Ohjaaja / opettaja", "Toimii asiakkaan sijaisena, kunnes asiakkaan ulkopuolinen edustaja on nimetty: vastaanottaa kysymyslistat ja tekee rajaus- ja priorisointipäätökset. Katselmoinneissa asiakasta esittää nimetty edustaja. Lisäksi ohjaaja hyväksyy suunnitelman ennen työviikkoa 3, tarkistaa laadun tarkistuspisteissä ja päättää ohjaajalle kuuluvat asiat (lisenssi, repositoryn julkisuus, katselmoijien nimeäminen, alustalinja, perusteversio, arvioinnin järjestelyt)."],
        ["Ulkopuolinen katselmoija (työviikko 10)", "Kokeilee väliversiota asiakkaan roolissa molemmilla käyttäjärooleilla. Ei ole opiskelijan oma ohjaava opettaja: rooliin sopii työelämäedustaja, toinen opettaja tai toinen opiskelija. Nimeäminen on ohjaajan päätös. Repositoryyn kirjataan vain rooli; nimi toimitetaan ohjaajalle Teamsissa."],
        ["Julkaisutestaaja (työviikko 16)", "Testaa julkaistun julkaisuehdokkaan pelkän kirjallisen käyttöönotto-ohjeen avulla ilman suullista apua, molemmilla rooleilla. Eri henkilö kuin työviikolla 10, jos mahdollista. Repositoryyn kirjataan vain rooli; nimi toimitetaan ohjaajalle Teamsissa."],
        ["Arvioijat (työviikko 18)", "Ottavat vastaan demon ja näyttöaineiston. Arvioinnin ajankohta ja arvioijat sovitaan ohjaajan kanssa."]
      ],
      tarkistuspisteet: [
        [1, "Ympäristö ja repository", "Käynnistyvä Svelte-runko, README käynnistyskomennoilla, julkisen repon tarkistuslista kuitattuna ja vähintään kuusi kysymystä ohjaajalle."],
        [2, "Suunnitelman hyväksyntä", "P0/P1/P2-priorisointi, tietomalli ja periaate 'summia ei tallenneta', tietovarastovertailu ja issue-taulu arvioineen. Hyväksyntä kirjataan ennen työviikkoa 3."],
        [3, "Ensimmäinen julkaisu", "Sovellusrunko julkisessa osoitteessa, /api/health vastaa toisen henkilön selaimella, init-skripti luo skeeman, k2-selvitys ja alustaperustelu repossa."],
        [5, "Tuntikirjaus", "Kirjaus tallentuu ja näkyy listassa, validointi toimii myös suoraan API:a kutsuttaessa, kirjausaika alle 30 sekuntia."],
        [8, "Yhteenvetojen laskenta", "Kolme raporttireittiä täsmää käsin laskettuihin odotusarvoihin kolmella aineistolla; skeemassa ei ole summataulua; laskentamoduulilla vähintään kolme yksikkötestiä."],
        [10, "Asiakaskatselmointi", "Katselmointimuistio testaajan sitaatteineen (puhuja roolilla), oma tulkinta erikseen, priorisoidut muutokset issueina; testaajan nimi ohjaajalle Teamsissa. Katselmoija nimetty viimeistään työviikolla 8."],
        [13, "Tietoturva", "Ajettu reittitaulukko (reitti × rooli × odotettu × saatu), korjaukset uusintatestattuina, salaisuudet .env:ssä ja poissa Git-historiasta, XSS-testi tehtynä."],
        [14, "Testaus", "Vähintään 12 testitapausta kolmessa luokassa odotusarvoineen ennen ajoa, vähintään kaksi täydellistä virheenkorjausketjua, regressiotestit ajettavissa komennolla."],
        [16, "Julkaisuehdokas ja julkaisutestaus", "v1.0-rc1 merkittynä tagilla ja julkisessa osoitteessa, oma asennuspöytäkirja, ulkopuolisen testauspöytäkirja sitaatteineen (puhuja roolilla, nimi Teamsissa) ja estävät issueina."],
        [17, "v1.0", "Estävät korjattu täydellisenä ketjuna, v1.0 merkittynä tagilla ja julkaistuna, savutesti ajettuna, julkaisutiedote ja luovutusviesti repossa, project-docs/nayttomatriisi.md perustettu."],
        [18, "Näyttöaineisto", "Linkitetty näyttömatriisi project-docs/nayttomatriisi.md viimeisteltynä 32 vaatimukseen, demo harjoiteltuna kellon kanssa, itsearviointi konkreettisin tilantein."]
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
        p10: ["10 (täydentyy 11)", "Katselmointi: täyttääkö toteutus käyttäjätarinat, mitä muutetaan ennen seuraavaa versiota; muistio ja priorisoitu muutoslista"],
        p11: ["18", "Itsearviointi konkreettisin tilantein: mikä onnistui, missä tarvitsi apua ja keneltä, mitä tekisi toisin"],
        s1: ["2 (täydentyy 10)", "Toimeksianto purettu käyttäjätarinoiksi ja käyttäjäryhmiksi; kysymyslista ja kirjatut vastaukset; rajaus sovittu"],
        s2: ["10 (täydentyy 17)", "Katselmointiesittely ja luovutusviesti ilman teknistä jargonia: mitä ratkaisu tarkoittaa käyttäjälle, vaihtoehdot ja rajoitteet"],
        s3: ["10 ja 16", "Kaksi katselmointia: väliversion asiakaskatselmointi ja julkaisuehdokkaan julkaisutestaus; palaute testaajan sanoin (puhuja roolilla, ei nimeä) ja sovitut muutokset kirjattuina"],
        s4: ["2", "P0/P1/P2-priorisointi ohjaajan kanssa; P0-ydin (kirjaus, roolit, raportit) toteutettu ensin"],
        s5: ["2 (jatkuva)", "Käyttäjätarinat pilkottu issueiksi (½–1 pv / issue) hyväksymiskriteereineen; issue-taulu koko projektin ajan"],
        s6: ["7 (alku 2)", "Työmääräarviot issueissa ja arvio vs. toteuma -vertailu opiskelijan omista TuntiTutka-kirjauksista; suunnitelman päivitys, kun arvio petti"],
        s7: ["8 (täydentyy 4, 7, 13)", "Yhteenvetojen laskenta lennossa (viikoittain, henkilöittäin, tehtävälajeittain, ei tallennettuja summia), käyttöoikeudet, validointi ja omistajuussäännöt"],
        s8: ["2", "Sovitun SQLiten perustelu vertailemalla sitä JSON-tiedostoon ja PostgreSQLiin datan rakenteen, käyttötilanteen ja laajuuden perusteella; perustelu suunnitelmassa"],
        s9: ["5 (täydentyy 6–7)", "Kirjausten ja hallintadatan luku, lisäys, muokkaus ja poisto SQLitestä hallitusti; skeema ja init-skripti"],
        s10: ["9 (pohjustus 8)", "Raportti-API:n kutsu fetchillä, JSON-muunnos kaavion muotoon testattuna funktiona, virhetilanteet (tyhjä data, verkkovirhe, lataus) käsiteltyinä"],
        s11: ["13", "Tietoturva-arvio (syötteet, käyttöoikeudet, salasanat, istunnot, tietojen näkyvyys), ajettu reittitaulukko ja XSS-testi; salaisuudet .env:ssä"],
        s12: ["1→ (koonti 11)", "Git koko projektin ajan: tarkoituksenmukaiset commitit, etärepository ja haarakäytäntö; historia työnäytteenä"],
        s13: ["11", "Palautemuutos ominaisuushaarassa, pull request, itsekatselmointi, konfliktin ratkaisu ja merge pääversioon"],
        s14: ["17 (ensijulkaisu 3, julkaisutestaus 16)", "Tuotantobuild, ympäristöasetukset ja julkaisu valittuun pilvialustaan; v1.0 julkisessa osoitteessa asiakkaan käytettävissä"],
        k1: ["1 (täydentyy 3)", "Svelte + Vite -projektin luonti ja konfigurointi: vite.config, dev-proxy backendiin sekä kehitys- ja tuotantoasetukset"],
        k2: ["3", "Kirjallinen selvitys: mitä Svelte ja Vite ratkaisevat (komponentit, reaktiivisuus, build), mitä eivät (reititys, kaaviot) ja mistä puuttuva otetaan"],
        k3: ["5 (täydentyy 9)", "Komponentit, propsit, tapahtumat, lomakesidonnat, ehdollinen renderöinti ja store istuntotilalle; osoitettuna kirjaus- ja raporttinäkymissä"],
        k4: ["6 ja 9", "Kaksi perusteltua ulkoista komponenttia: reitityskirjasto (vertailu ja konfigurointi) ja kaaviokirjasto (koko, lisenssi, käyttötarkoitus, riippuvuus)"],
        k5: ["2 ja 14", "Komponenttirakenne ja vastuut suunnitelmassa; sovellus toteutettu Sveltellä käyttäjätarinoiden mukaan; omat ja kirjastoon liittyvät ratkaisut testattuina"],
        k6: ["16 (täydentyy 17)", "Viten tuotantobuild ja julkaisu sovittuun pilviympäristöön; julkaisuehdokkaan ja v1.0:n julkaisut tageineen"],
        k7: ["15", "README: käyttöönotto, käynnistys, riippuvuudet rooleineen, ympäristöasetukset; asiakkaan pikaohjeet molemmille rooleille"]
      },
      dokumentaatio: {
        kayttajalle: "README ja käyttöönotto-ohje (asennus tyhjään ympäristöön vaihe vaiheelta, ympäristömuuttujat, tietokannan alustus, testien ajo) sekä pikaohjeet molemmille rooleille: työntekijän kirjausohje ja projektipäällikön ohje projekteista, tehtävälajeista ja raporteista. Kirjoitetaan käyttäjälle, ei arvioijalle.",
        arviointiin: "Projektipäiväkirja, AI-loki, tekninen suunnitelma, katselmointimuistio (työviikko 10), tietoturva-arvio ja reittitaulukko (13), testiraportti ja virheenkorjausketjut (14), asennus- ja julkaisutestauspöytäkirjat (16) sekä linkitetty näyttömatriisi project-docs/nayttomatriisi.md (perustetaan 17, viimeistellään 18). Katselmointimuistioissa sitaattien puhuja on merkitty roolilla; nimet ovat ohjaajalla Teamsissa.",
        vaatimus: "Käyttöönotto-ohjeen kovavaatimus: ulkopuolinen henkilö saa sovelluksen käyttöön pelkän kirjallisen ohjeen avulla ilman suullista apua. Tämä testataan työviikolla 16 kahdessa vaiheessa: ensin opiskelija itse puhtaassa ympäristössä, sitten ulkopuolinen julkaistulla julkaisuehdokkaalla."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline: se saa selittää virheilmoituksia, ehdottaa testitapauksia, tarkistaa koodia ja auttaa dokumentaation kielessä. Jokainen merkittävä käyttö kirjataan AI-lokiin, jossa on kysymys, mitä käytettiin tai hylättiin, miten tarkistettiin ja aineistoviite.",
        "Ydin tehdään itse: yhteenvetojen laskentalogiikka, sovelluksen rakenne ja komponenttijako, saavutettavuusratkaisut ja CSS. Näitä näyttö nimenomaan arvioi, joten valmiiksi generoitu ratkaisu ilman omaa ymmärrystä ei ole työnäyte.",
        "Osa viikoista on rakennettu niin, ettei niitä voi suorittaa kielimallilla: työviikot 10 ja 16 vaativat nimetyn ulkopuolisen ihmisen omine sanoineen (sitaatit roolilla merkittyinä, nimet ohjaajalle Teamsissa), työviikot 3 ja 16–17 oman julkisen osoitteen ja alustan lokit, työviikot 7–8 opiskelijan oman kirjausdatan ja käsin lasketut odotusarvot ja työviikko 12 mittausraportit omalta laitteelta."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "v1.0 julkisessa osoitteessa, Git-tag v1.0 ja release; julkaisutiedote ja luovutusviesti repositoryssä."],
        ["Repository", "Julkinen repository, jossa client/, server/ ja project-docs/ sekä koko commit-historia haaroineen ja pull requesteineen."],
        ["Suunnitelma ja päiväkirja", "project-docs/suunnitelma.md, projektipaivakirja.md ja ai-loki.md. Päiväkirjasta on commit joka viikolta."],
        ["Laatuaineisto", "Testiraportti (vähintään 12 tapausta), kolme virheenkorjausketjua, tietoturva-arvio ja reittitaulukko, saavutettavuusraportit ennen ja jälkeen."],
        ["Katselmoinnit", "Katselmointimuistio (työviikko 10) ja julkaisutestauksen pöytäkirja (16) sitaatteineen, puhuja roolilla merkittynä, sekä oma asennuspöytäkirja; nimet ohjaajalla Teamsissa."],
        ["Näyttöaineisto", "Linkitetty näyttömatriisi project-docs/nayttomatriisi.md 32 vaatimukselle, demorunko ja itsearviointi."]
      ],
      huomiot: [
        ["Katselmoijat nimetään ajoissa", "Työviikon 10 katselmoija ja työviikon 16 julkaisutestaaja nimetään viimeistään työviikolla 8, jotta katselmointi ei kaadu järjestelyihin. Asiakkaan roolia ei esitä opiskelijan oma ohjaava opettaja."],
        ["Summia ei tallenneta", "Periaate 'yhteenvedot lasketaan, ei tallenneta' päätetään tietomallissa (työviikko 2), todennetaan done-ehdossa (8) ja testataan (T03, T06, T07). Jos opiskelija ehdottaa summataulua suorituskyvyn takia, pyydä perustelu mittauksella. Tässä datamäärässä sitä ei ole."],
        ["Päivätön aikataulu", "Sivustolla ei ole kalenteripäivämääriä: viikot ovat työviikkoja 1–18 opiskelijan aloituksesta. Ryhmäkohtaiset päivämäärät sovitaan erikseen, esimerkiksi opintojakson omassa työtilassa."],
        ["Kuormitusrajaus työviikolla 6", "Jos hallintaviikko uhkaa paisua, projektityypit yksinkertaistetaan projektipäällikön muokattavaksi listaksi tehtävälajien kanssa samaan näkymään. Viikon pakollinen ydin on projektit, tehtävälajit, jäsenyys ja roolirajaus."],
        ["Aidot bugit, ei keksittyjä", "Virheenkorjausketjut kirjataan vain aidoista havainnoista. Jos aitoja ei löydy työviikkoon 14 mennessä, ohjaaja merkitsee vikatehtäviä, joista ketjut ajetaan."],
        ["Avoimet asiat pysyvät avoimina", "Lisenssi, repositoryn julkisuus ja tekijänimi, alaikäisen huoltajan suostumus, oppilaitoksen alustalinja, perusteversion siirtymäsääntö ja arvioinnin järjestelyt ovat ohjaajan päätöksiä. Tyhjä kenttä suunnitelmassa on oikea tulos siihen asti, kunnes asia on sovittu."]
      ]
    }
  }
};
