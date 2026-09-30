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
  yhtenaisetViikot: true,
  aloitusNappi: "Aloita kaupan rakentaminen",
  apuOtsikko: "Tarvitsen toteutusapua",

  /* ---- projektin tavoitekuva (moottori v2.6) ----
   * Näkyy Näin käytät sivua -näkymän alussa, ja sivu avautuu siihen ensimmäisellä
   * kerralla. Kuva on luonnos: project-docs/lopputulos/proto.html kuvattuna 2x-tarkkuudella
   * (ks. project-docs/lopputulos/README.md). alue = [x, y, leveys, korkeus] prosentteina.
   */
  lopputulos: {
    kuvaus: "Valmis verkkokauppa näyttää Nopan Nurkan pelit kategorioittain. Asiakas voi hakea pelejä nimellä, kerätä niitä ostoskoriin ja tehdä tilauksen myös puhelimella ilman verkkomaksua. Henkilökunta lisää ja muokkaa tuotteita selaimessa ja näkee uudet tilaukset omassa näkymässään.",
    /* Aloituksen johdanto kertoo saman, joten kuvauslause näkyy vain työpaketissa. */
    naytaKuvaus: false,
    kuva: "assets/lopputulos.jpg",
    leveys: 1120,
    korkeus: 700,
    alt: "Kuvitteellinen näkymä valmiista Nopan Nurkka -verkkokaupasta. Tietokoneen selaimessa on auki Perhepelit-kategoria, jossa on kuusi peliä, ja ostoskori. Ostoskorissa on neljä peliä, joiden yhteishinta on 109,60 euroa, sekä Tee tilaus -painike ja huomautus, että maksu hoidetaan noudon tai toimituksen yhteydessä. Puhelimen näytöllä on henkilökunnan tilausnäkymä, jossa näkyy kolme uutta tilausta ja Merkitse käsitellyksi -painike.",
    kohdat: [
      { n: 1, teksti: "Asiakas selaa pelejä kategorioittain ja näkee jokaisen pelin kuvauksen ja hinnan.", alue: [3.0, 25.1, 47.0, 68.0] },
      { n: 2, teksti: "Ostoskorissa voi muuttaa määriä ja poistaa pelejä, ja kokonaissumma päivittyy heti.", alue: [51.4, 26.1, 21.5, 45.7] },
      { n: 3, teksti: "Kirjautunut asiakas tekee tilauksen, ja maksu hoidetaan vasta noudon tai toimituksen yhteydessä.", alue: [51.4, 72.7, 21.5, 19.9] },
      { n: 4, teksti: "Henkilökunta näkee uudet tilaukset omassa näkymässään ja merkitsee ne käsitellyiksi.", alue: [74.1, 22.9, 22.9, 73.7] }
    ]
  },

  paletti: {
    aksentti: "#c2410c",
    aksenttiTumma: "#9a3412",
    taulukkoSavy: "#fbeee5",
    riviSavy: "#fdf5ef"
  },

  /* ---- paperiaineiston tekstien yliajot (päivätön tila) ---- */
  lataukset: {
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title,
    aloitusHuomio: "Viikon työvaihe on tämän sivuston työohje. Kun muutat kaupan koodia, kirjaa muutos GitHub-issueksi valmis kun -ehtoineen ja tee se Työtapa-sivun kuudella askeleella. Testitapaus kirjataan testimatriisiin heti, viikon yhteenveto projektipäiväkirjaan viikon lopussa."
  },

  /* ---- vaiheet (moottori v2.7: numeroidut vaiheet, kuvaus näkyy aloituksessa ja vaihekuvassa) ---- */
  vaiheet: [
    { tunnus: "1", lyhyt: "Valmistelu", otsikko: "Toimeksianto ja suunnitelma", kuvaus: "Selvität asiakkaan tarpeen kysymyslistalla, pystytät repositoryn ja molemmat kehityspalvelimet ja teet suunnitelman: käyttäjätarinat, tietomallin ja GitHub-issuet. Suunnitelma tehdään ennen koodia, koska ostoskori ja tilaus rakentuvat tietomallin varaan.", kuvassa: ["Kysymyslista → työympäristö → suunnitelma ja issuet", "Tiedät, mitä rakennat ja missä järjestyksessä."], viikot: [1, 2], vari: "#8d5a2b" },
    { tunnus: "2", lyhyt: "Tuotteet verkkoon", otsikko: "Tuotteet näkyviin ja verkkoon", kuvaus: "Tuotteet tulevat SQLite-kannasta rajapinnan kautta itse rakennettuihin Vue-komponentteihin, kategoriat ja tuotesivut saavat omat osoitteensa, ja kauppa julkaistaan. Julkaisu tehdään jo nyt, koska sen ongelmat on helpointa korjata, kun rikottavaa on vähän.", kuvassa: ["Kanta → rajapinta → komponentit → reitit → julkaisu", "Tuotteet näkyvät julkisessa osoitteessa."], viikot: [3, 4, 5], vari: "#1a6fae" },
    { tunnus: "3", lyhyt: "Ostopolku", otsikko: "Asiakkaan ostopolku", kuvaus: "Rakennat ostopolun samassa järjestyksessä kuin asiakas sen kulkee: haku, ostoskori, tunnukset ja tilaus. Lopuksi ulkopuolinen henkilö kokeilee kauppaa asiakkaan roolissa, ja hänen palautteensa ohjaa seuraavaa vaihetta.", kuvassa: ["Haku → ostoskori → tunnukset → tilaus → katselmointi", "Asiakas löytää pelin ja tilaa sen ilman verkkomaksua."], viikot: [6, 7, 8, 9, 10], vari: "#c03434" },
    { tunnus: "4", lyhyt: "Viimeistely", otsikko: "Henkilökunta, tietoturva ja laatu", kuvaus: "Toteutat tärkeimmän palautemuutoksen, henkilökunnan tuote- ja tilausnäkymät roolisuojauksella ja saavutettavuustarkistuksen. Ominaisuuslista päättyy työviikolla 13, minkä jälkeen koettelet tietoturvan omin hyökkäystestein ja ajat koko testimatriisin julkaistua versiota vasten.", kuvassa: ["Palaute → henkilökunnan näkymät → tietoturva → testit", "Kauppa kestää oikeat käyttäjät ja hyökkäysyritykset."], viikot: [11, 12, 13, 14, 15], vari: "#2b6e6e" },
    { tunnus: "5", lyhyt: "Julkaisu", otsikko: "Julkaisu ja näyttö", kuvaus: "Jäädytät sisällön julkaisuehdokkaaksi, ja ulkopuolinen testaaja ottaa kaupan käyttöön pelkän kirjoitetun ohjeen avulla. Korjaat estävät löydökset, luovutat version 1.0 asiakkaalle ja osoitat osaamisesi näytössä.", kuvassa: ["Julkaisuehdokas → julkaisutesti → v1.0 → näyttö", "Asiakas saa kaupan, jonka voi ottaa käyttöön ohjeella."], viikot: [16, 17, 18], vari: "#6d3fa0" }
  ],
  poikkeamat: {
    vaiheita: "viisi vaihetta: suunnitelma (ei vielä koodia) ja julkinen tuotelista ovat eri tuloksia, ja yhdessä ne olisivat viiden viikon vaihe, jonka ensimmäinen näkyvä tulos syntyisi vasta julkaisussa"
  },
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 844,
    alt: "NoppaKaupan viisi vaihetta: 1 toimeksianto ja suunnitelma työviikoilla 1–2, 2 tuotteet näkyviin ja verkkoon työviikoilla 3–5, 3 asiakkaan ostopolku ja asiakaskatselmointi työviikoilla 6–10, 4 henkilökunnan työkalut, tietoturva ja laatu työviikoilla 11–15 sekä 5 julkaisu ja näyttö työviikoilla 16–18."
  },
  vaiheetJohdanto: "Ensin selvität, mitä asiakas tarvitsee, ja suunnittelet tietomallin, koska kori ja tilaus rakentuvat sen varaan. Sitten tuotteet tulevat näkyviin ja kauppa julkaistaan varhain, ja ostopolku rakennetaan samassa järjestyksessä kuin asiakas sen kulkee. Asiakkaan palaute ohjaa viimeistelyä, ja lopuksi ulkopuolinen testaaja varmistaa, että kauppa toimii pelkän ohjeen avulla.",
  vaiheetHuomio: "Työviikot ovat järjestysnumeroita, eivät kalenteriviikkoja, eikä projektissa ole lomaviikkoja. Katselmoinnit ovat työviikoilla 10 ja 16, ja niihin tarvitaan ulkopuolinen henkilö, jonka etsintä alkaa työviikolla 1. Ohjaajan kanssa käyt läpi kysymyslistan (1), rautalangat (2), korin ja istunnon päätökset (7–8), palautteen priorisoinnin (10) ja tietoturva-arvion (14).",

  /* ---- opiskelijalle näkyvä työn tasojen nimeäminen (moottori v2.7) ---- */
  tekstit: {
    goalListLabel: "Käyttäjän työnkulku",
    tasksLead: "Tee työvaiheet järjestyksessä. Ensimmäinen keskeneräinen vaihe on auki. Kun muutat kaupan koodia, kirjaa muutos GitHub-issueksi ja tee se Työtapa-sivun kuudella askeleella."
  },

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

  /* Sanasto: vain tämän projektin oikeasti käyttämät termit. Renderöidään
     Termit-näkymään ja viikkojen "Uudet termit" -laatikoihin. Jokainen termi
     selitetään myös juoksevassa tekstissä siinä kohdassa, jossa se tulee
     ensimmäisen kerran vastaan. */
  termisto: [
    { termi: "frontend", nimi: "Selaimessa toimiva osa", selite: "Se osa kaupasta, joka toimii asiakkaan selaimessa: näkymät, komponentit ja ulkoasu. Tässä projektissa frontend on kansiossa frontend/ ja se tehdään Vue 3:lla.", viikko: 1 },
    { termi: "backend", nimi: "Palvelimella toimiva osa", selite: "Se osa kaupasta, joka toimii palvelimella: tietokanta, rajapinta ja käyttöoikeudet. Tässä projektissa backend on kansiossa backend/ ja se tehdään FastAPI:lla.", viikko: 1 },
    { termi: "repository", nimi: "Projektin Git-varasto", selite: "Kansio, jota Git-versionhallinta seuraa ja joka viedään GitHubiin. Repositoryssä on koko projektin historia, ei vain uusin versio.", viikko: 1 },
    { termi: "commit", nimi: "Yksi tallennettu muutos", selite: "Yksi muutos tallennettuna Gitin historiaan: mitä muuttui, milloin ja kenen tekemänä. Tässä projektissa tehdään pieniä committeja usein, ei yhtä isoa viikon lopussa.", viikko: 1 },
    { termi: "GitHub-issue", nimi: "Yksi rajattu muutos GitHubissa", selite: "GitHubiin kirjattu yksi muutos kauppaan: otsikko, kuvaus ja valmis kun -ehto. Yksi issue on noin puolen tai yhden päivän työ, ja commit viittaa siihen numerolla, esimerkiksi #12. Sivun työvaihe on eri asia: yksi työvaihe voi sisältää useita issueita.", viikko: 2 },
    { termi: "P0", nimi: "Pakollinen ydin", selite: "Ominaisuudet, joiden on valmistuttava, tai kauppa ei ole valmis. P0 tehdään ensin ja kokonaan.", viikko: 2 },
    { termi: "P1", nimi: "Tärkeä jatkosisältö", selite: "Ominaisuudet, jotka tehdään vasta kun P0 toimii. P1 on tärkeä, mutta se ei estä julkaisua.", viikko: 2 },
    { termi: "P2", nimi: "Valinnainen lisä", selite: "Ominaisuudet, jotka voidaan jättää kokonaan pois. P2 tehdään vain, jos aikaa jää yli.", viikko: 2 },
    { termi: "JSON", selite: "Tekstimuoto, jossa tieto liikkuu selaimen ja palvelimen välillä ja jossa sen voi myös tallentaa tiedostoon. Rajapinta palauttaa tuotteet JSONina.", viikko: 2 },
    { termi: "API", nimi: "Rajapinta", selite: "Sovittu tapa, jolla frontend pyytää tietoa backendilta ja saa vastauksen. Tämän projektin rajapinta tehdään FastAPI:lla, ja sitä voi kokeilla selaimessa /docs-sivulta.", viikko: 3 },
    { termi: "endpoint", nimi: "Rajapinnan yksittäinen osoite", selite: "Yksi rajapinnan osoite, joka tekee yhden asian: esimerkiksi GET /api/tuotteet palauttaa tuotelistan. Rajapinta koostuu endpointeista.", viikko: 3 },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "Testitapaukset numeroidaan: T01 on ensimmäinen ja T14 viimeinen. Jokaisesta kirjataan lähtötila, toiminta, odotettu tulos ennen ajoa ja toteutunut tulos ajon jälkeen.", viikko: 3 },
    { termi: "seed-data", nimi: "Kannan aloitusdata", selite: "Itse keksitty aloitustavara, joka ajetaan tyhjään tietokantaan, jotta sovelluksessa on jotain näytettävää. Tässä projektissa noin 20 oman teeman tuotetta.", viikko: 3 },
    { termi: "CORS", selite: "Selaimen sääntö, joka estää sivua hakemasta tietoa toisesta osoitteesta ilman lupaa. Backendiin kirjataan, mistä osoitteista kutsut hyväksytään – tämä on tavallisin syy siihen, että julkaistu kauppa ei saa dataa.", viikko: 3 },
    { termi: "SPA", nimi: "Single-page application, yhden sivun sovellus", selite: "Sovellus, jonka selain lataa kerran ja joka vaihtaa näkymää itse. Osoitteiden pitää silti toimia myös suoraan avattuna ja sivun päivityksellä.", viikko: 4 },
    { termi: "build", nimi: "Tuotantoversion kääntäminen", selite: "Komento, joka kääntää frontendin lähdekoodin valmiiksi tiedostoiksi julkaisua varten (Vitessä npm run build, tulos kansioon dist/). Kehityspalvelin ei tee tätä.", viikko: 5 },
    { termi: "SQL", nimi: "Tietokannan kyselykieli", selite: "Kieli, jolla tietokannasta haetaan ja siihen kirjoitetaan, esimerkiksi SELECT * FROM tuote. SQLite on tietokanta, joka ymmärtää SQL:ää.", viikko: 6 },
    { termi: "SQL-injektio", selite: "Hyökkäys, jossa käyttäjän syöte ujutetaan osaksi tietokantakyselyä ja pääsee muuttamaan sen merkitystä. Estetään parametrisoidulla kyselyllä, jossa syöte ei koskaan liity osaksi kyselytekstiä.", viikko: 6 },
    { termi: "haara", nimi: "Branch", selite: "Erillinen kehityslinja, jossa yhtä ominaisuutta tehdään rauhassa ilman että pääversio rikkoutuu. Valmis haara yhdistetään takaisin pääversioon.", viikko: 7 },
    { termi: "pull request", nimi: "PR, pyyntö yhdistää haara", selite: "Pyyntö yhdistää haara pääversioon. Siinä näkyy muutos rivi riviltä, ja se katselmoidaan ennen yhdistämistä. Yksin tehdessä katselmoit oman muutoksesi itse.", viikko: 7 },
    { termi: "K1", nimi: "Virheenkorjausketjun tunnus", selite: "Virheenkorjausketjut numeroidaan K1, K2 ja K3. Yksi ketju on kokonaisuus: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti.", viikko: 7 },
    { termi: "regressiotesti", selite: "Testi, jolla varmistetaan, ettei korjaus rikkonut jotain, mikä toimi aiemmin. Se ajetaan korjatun kohdan vierestä, ei itse korjauksesta.", viikko: 7 },
    { termi: "JWT", nimi: "JSON Web Token", selite: "Allekirjoitettu tunnistetieto, jonka palvelin antaa kirjautumisen jälkeen ja jonka selain lähettää mukana jokaisessa pyynnössä. Vaihtoehto eväste-sessiolle.", viikko: 8 },
    { termi: "hash", nimi: "Tiiviste", selite: "Salasanasta laskettu merkkijono, josta alkuperäistä salasanaa ei saa takaisin. Kantaan tallennetaan vain hash, ei koskaan salasanaa sellaisenaan.", viikko: 8 },
    { termi: "XSS", nimi: "Cross-site scripting", selite: "Hyökkäys, jossa käyttäjän syöte päätyy sivulle koodina ja suoritetaan toisen käyttäjän selaimessa. Estetään sillä, ettei syötettä koskaan tulosteta raakana HTML:ksi.", viikko: 14 },
    { termi: "IDOR", nimi: "Suojaamaton viittaus tietoon", selite: "Aukko, jossa osoitteen tunnusta vaihtamalla näkee toisen käyttäjän tiedot. Estetään tarkistamalla jokaisessa haussa, kuuluuko rivi kirjautuneelle käyttäjälle.", viikko: 14 },
    { termi: "refaktorointi", selite: "Koodin selkeyttäminen niin, että toiminta pysyy täsmälleen ennallaan: parempi nimeäminen, toiston poisto, liian ison komponentin pilkkominen. Testit ajetaan ennen ja jälkeen.", viikko: 15 },
    { termi: "RC", nimi: "Release candidate, julkaisuehdokas", selite: "Lähes valmis versio, joka jäädytetään ja testataan ennen lopullista julkaisua. RC1 on ensimmäinen julkaisuehdokas; sen jälkeen korjataan vain estävät virheet.", viikko: 16 },
    { termi: "tagi", nimi: "Git-tag", selite: "Nimilappu, joka merkitsee yhden commitin historiasta, esimerkiksi v1.0-rc1. Tagista tiedetään myöhemmin, mikä versio oli testattavana.", viikko: 16 },
    { termi: "REST", selite: "Tapa rakentaa rajapinta niin, että osoite kertoo kohteen ja pyynnön tyyppi tekemisen: GET hakee, POST luo, PUT muuttaa ja DELETE poistaa. Tämän projektin rajapinta noudattaa sitä." }
  ],

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
      work: "Kerro konkreettiset tiedostot, komponentit, endpointit, GitHub-issuet ja testitapaukset.",
      reason: "Kerro päätös, vaihtoehdot, perustelu ja mitä opit.",
      evidence: "Esim. commit-linkki, GitHub-issue #12, testitapaus T05 tai pull requestin linkki.",
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
      "Suunnitelma-aineistoon kuuluvat myös [kayttajatarinat.md](kayttajatarinat.md) (käyttäjätarinat, P-luokat ja",
      "työmääräarviot) ja [vue-pinia-selvitys.md](vue-pinia-selvitys.md) (Vuen ja Pinian mahdollisuudet ja rajat).",
      "Päivitä työmääräarviot toteutuneen perusteella (viikko 11). Muutoshistoria on osa näyttöaineistoa.",
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
      "Rajauksen tasot: P0 on pakollinen ydin, jonka on valmistuttava. P1 on tärkeä",
      "jatkosisältö, joka tehdään vasta kun P0 toimii. P2 on valinnainen lisä, joka",
      "voidaan jättää pois.",
      "",
      "**P0 – pakollinen perusversio:** tuotteet kategorioittain, sanahaku, ostoskori,",
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
      "Vuen ja Pinian mahdollisuudet ja rajat omissa P0-tarinoissa: [vue-pinia-selvitys.md](vue-pinia-selvitys.md)",
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
      "## 6. Tietovarasto: sovitun SQLiten perustelu (viikko 2)",
      "",
      "SQLite on sovittu toteutustapa, koska tietomalli, ostoskori ja tilaukset rakentuvat sen varaan. Työviikon 2 vertailu perustelee sovitun valinnan vähintään yhtä vaihtoehtoa vasten. Jos vertailu puoltaa selvästi muuta, poikkeamasta sovitaan ohjaajan kanssa ennen työviikkoa 3.",
      "",
      arvo("tietovarastovertailu", "_(vertaa SQLiteä JSON-tiedostoon ja PostgreSQL:ään ja perustele, miksi sovittu SQLite sopii kauppaasi)_"),
      "",
      "## 7. Avoimet asiat – ohjaaja omistaa",
      "",
      "Näitä ei päätetä itse eikä tekoälyllä. Tyhjä kenttä on oikea tulos silloin,",
      "kun asiaa ei ole vielä sovittu.",
      "",
      onTäytetty("lisenssi")
        ? `- Lisenssi: ${arvo("lisenssi")}`
        : "- Lisenssi: EI VIELÄ SOVITTU – avoin asia (LICENSE repositoryyn heti kun sovittu)",
      onTäytetty("repoJulkisuus")
        ? `- Repositoryn julkisuus ja tekijänimi: ${arvo("repoJulkisuus")}`
        : "- Repositoryn julkisuus ja tekijänimi julkisessa repositoryssä: EI VIELÄ SOVITTU – avoin asia (alaikäisellä huoltajan suostumus ohjaajan kautta)",
      onTäytetty("alustalinjaus")
        ? `- Oppilaitoksen linja julkaisualustasta: ${arvo("alustalinjaus")}`
        : "- Oppilaitoksen linja julkaisualustasta (salliiko ilmaistasot vai oma palvelin): EI VIELÄ SOVITTU – avoin asia",
      onTäytetty("katselmoijat")
        ? `- Katselmoijien roolit viikoille 10 ja 16 (ei nimiä): ${arvo("katselmoijat")}`
        : "- Katselmoijien nimeäminen viikoille 10 ja 16: EI VIELÄ SOVITTU – avoin asia (etsintä käynnistetään viikolla 1, nimeäminen viimeistään ennen viikkoa 10; siihen asti ohjaaja toimii asiakkaan sijaisena ja vastaanottaa kysymyslistat ja tilannekatsaukset). Repositoryyn kirjataan heistä vain rooli.",
      onTäytetty("perusteversio")
        ? `- Perusteversion siirtymäsääntö (OPH-6216-2025): ${arvo("perusteversio")}`
        : "- Perusteversion siirtymäsääntö (OPH-6216-2025): EI VIELÄ SOVITTU – oppilaitoksen tulkinta, avoin asia",
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
      feature: "Kaupan runko käynnistyy omalla koneellasi README:n komennoilla, ja kysymyslistan vastaukset on kirjattu.",
      connection: "Ennen ensimmäistä komponenttia selvität kysymyslistalla, mitä Nopan Nurkka oikeasti tarvitsee ja mitä on rajattu pois. Samalla pystytät repositoryn ja molemmat kehityspalvelimet, koska Git-historia on työnäyte ensimmäisestä päivästä ja julkisen repositoryn sopimuksia ei voi perua jälkikäteen. Työviikolla 2 kysymysten vastaukset muuttuvat suunnitelmaksi.",
      deliverable: "Kysymyslista ohjaajalle, repository kansiorakenteineen sekä käynnistyvät Vite- ja FastAPI-kehityspalvelimet.",
      why: "Ilman sovittua rajausta ja toimivaa ympäristöä jokainen tuleva viikko alkaa selvittelyllä, ja julkisen repositoryn sopimukset eivät ole peruttavissa, koska Git-historia on pysyvä.",
      done: "Molemmat kehityspalvelimet käynnistyvät ohjeen komennoilla; repository on GitHubissa README:n ja ensimmäisen commitin kanssa; kysymyslista on ohjaajalla ja vastaukset tai avoimet asiat, mukaan lukien katselmoijien tilanne, on kirjattu.",
      record: "Kirjoita työviikon 1 merkintään: toimeksiannon epäselvät kohdat, kysymyslistan sisältö, ohjaajan vastaukset, repositoryn linkki, ensimmäisen commitin tunnus ja katselmoijien etsinnän tilanne.",
      skills: ["kehitysympäristö (p1)", "versionhallinta (s12)", "Vite- ja Vue-projektin luonti ja konfigurointi (k1)"],
      termit: ["frontend", "backend", "repository", "commit"],
      tehtavat: {
        "1-1": {
          miksi: "Kysymykset ratkaisevat rajauksen ennen koodia. Arvaamalla rakennettu kauppa tehdään helposti väärin.",
          osat: [
            ["Lue toimeksianto", "Lue Toimeksianto-sivu ja merkitse epäselvät kohdat: mitä asiakas tarkalleen haluaa, mitä hän on rajannut pois ja mitä hän ei ole sanonut ääneen."],
            ["Kirjoita kysymykset", "Kirjoita vähintään kuusi kysymystä asiakkaan tarpeesta ja rajauksesta. Yksi kysymys kysyy yhtä asiaa."],
            ["Vie lista ohjaajalle", "Käy kysymykset läpi ohjaajan kanssa. Hän toimii asiakkaan sijaisena, kunnes asiakkaan ulkopuolinen edustaja on nimetty, ja vastaa asiakkaan puolesta."],
            ["Merkitse vastausten tila", "Merkitse jokainen vastaus päätökseksi, oletukseksi tai avoimeksi asiaksi. Avoin asia odottaa vastausta, eikä sitä ratkaista itse."]
          ],
          valmis: "Kysymyslistassa on vähintään kuusi kysymystä, ja jokaisen perässä on ohjaajan vastaus tai merkintä avoimesta asiasta.",
          tallenna: "Kysymyslista tiedostoksi `project-docs/kysymykset.md` (viet sen repositoryyn työvaiheessa 3). Vastaukset omin sanoin työviikon 1 päiväkirjaan."
        },
        "1-2": {
          miksi: "Julkisen repositoryn historia on pysyvä, joten julkisuus ja tekijänimi sovitaan ennen ensimmäistä committia. Katselmoijia tarvitaan työviikoilla 10 ja 16, ja heidän etsintänsä vie aikaa.",
          osat: [
            ["Tee yksityisyystarkistus", "Sovi ohjaajan kanssa, mitä julkiseen repositoryyn saa laittaa. Henkilötietoja, salaisuuksia ja oikeiden kauppojen tekstejä tai kuvia ei laiteta."],
            ["Sovi tekijänimi", "Sovi, millä nimellä esiinnyt repositoryssa. Alaikäisen huoltajan suostumus hoidetaan ohjaajan kautta. Kirjaa nimi suunnitelmalomakkeen Tekijä-kenttään."],
            ["Käynnistä katselmoijien etsintä", "Pyydä ohjaajaa etsimään kanssasi ulkopuoliset katselmoijat työviikoille 10 ja 16. Oma ohjaaja ei käy katselmoijaksi."],
            ["Kirjaa avoimet asiat", "Kirjaa sopimatta jääneet asiat suunnitelmalomakkeen ohjaaja-kenttiin avoimiksi asioiksi. Tyhjä kenttä on oikea tulos, kunnes asia on sovittu."]
          ],
          valmis: "Repositoryn julkisuus ja tekijänimi on sovittu tai kirjattu avoimeksi asiaksi, ja katselmoijien etsintä on käynnissä.",
          tallenna: "Sovitut ja avoimet asiat suunnitelmalomakkeelle. Katselmoijien etsinnän tila työviikon 1 päiväkirjaan."
        },
        "1-3": {
          miksi: "Kaikki työnäytteet ovat repositoryssa, ja Git-historia on itsessään versionhallinnan työnäyte. Siksi se alkaa ensimmäisenä päivänä.",
          osat: [
            ["Luo kansiot", "Luo projektikansio ja sen alle kansiot `frontend/`, `backend/` ja `project-docs/`."],
            ["Lisää .gitignore", "Estä tiedostossa `.gitignore` ainakin `node_modules/`, `__pycache__/`, `*.db` ja `.env`, jotta riippuvuudet, kanta ja salaisuudet eivät päädy repositoryyn."],
            ["Kirjoita README", "Kirjoita `README.md`: mitä rakennat ja miten projekti käynnistetään. Käynnistyskomennot lisäät työvaiheessa 4."],
            ["Tallenna kysymyslista", "Tallenna työvaiheen 1 kysymyslista tiedostoksi `project-docs/kysymykset.md`."],
            ["Tee ensimmäinen commit", "Aja `git init` ja tee ensimmäinen commit. Luo GitHubiin repository sovitulla julkisuudella ja vie commit sinne komennolla `git push`."]
          ],
          valmis: "Repository on GitHubissa, siinä ovat kolme kansiota, README ja .gitignore, ja ensimmäinen commit näkyy historiassa.",
          tallenna: "Repositoryn osoite ja ensimmäisen commitin tunnus työviikon 1 päiväkirjaan.",
          sanat: ["repository", "commit"]
        },
        "1-4": {
          miksi: "Kauppa koostuu kahdesta osasta, jotka molemmat pitää saada käyntiin ennen ensimmäistä ominaisuutta. Toimiva ympäristö säästää jokaisen tulevan viikon alun.",
          osat: [
            ["Alusta frontend", "Luo Vue-projekti komennolla `npm create vite@latest frontend -- --template vue`, aja `npm install` ja käynnistä kehityspalvelin komennolla `npm run dev`."],
            ["Alusta backend", "Luo `backend/`-kansioon virtuaaliympäristö, asenna `pip install fastapi uvicorn` ja käynnistä sovellus komennolla `uvicorn main:app --reload`."],
            ["Avaa /docs-sivu", "Avaa backendin `/docs`-sivu selaimessa. FastAPI näyttää siellä rajapinnan, jota kokeilet tulevilla viikoilla."],
            ["Kirjaa komennot READMEen", "Lisää README:hen molempien palvelinten käynnistyskomennot ja tee commit."],
            ["Kokeile pelkällä README:llä", "Sulje terminaalit ja käynnistä molemmat palvelimet uudelleen pelkän README:n komennoilla."]
          ],
          valmis: "Molemmat kehityspalvelimet vastaavat selaimessa README:n komennoilla, ja backendin `/docs`-sivu aukeaa.",
          tallenna: "Käynnistyskomennot README:hen commitilla ja työviikon 1 päiväkirjaan.",
          sanat: ["frontend", "backend"]
        }
      },
      help: {
        title: "Perusta repository ja käynnistä molemmat palvelimet",
        tree: "noppakauppa/\n├─ frontend/          Vue 3 + Vite\n│  ├─ src/\n│  │  ├─ components/\n│  │  ├─ views/\n│  │  └─ main.js\n│  └─ package.json\n├─ backend/           FastAPI + SQLite\n│  ├─ main.py\n│  ├─ requirements.txt\n│  └─ .env.example\n├─ project-docs/      suunnitelma, päiväkirja, muistiot\n├─ README.md\n└─ .gitignore",
        actions: [
          "Luo kansiorakenne ja .gitignore (node_modules/, __pycache__/, *.db, .env).",
          "Alusta frontend: npm create vite@latest frontend -- --template vue, sitten npm install ja npm run dev.",
          "Alusta backend: virtuaaliympäristö, pip install fastapi uvicorn, sitten uvicorn main:app --reload.",
          "git init, ensimmäinen commit, luo GitHubiin repository ja push."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] npm run dev vastaa selaimessa\n[ ] uvicorn main:app --reload vastaa selaimessa\n[ ] /docs-sivu aukeaa backendistä\n[ ] .gitignore estää node_modules, .env ja *.db\n[ ] README kertoo mitä tehdään ja miten projekti käynnistetään\n[ ] kysymyslista on project-docs-kansiossa\n[ ] ensimmäinen commit on viety etärepositoryyn (push)",
        test: "Sulje molemmat terminaalit, avaa ne uudelleen ja käynnistä frontend ja backend pelkän README:n komennoilla. Molempien pitää vastata selaimessa.",
        links: [
          ["Vite: Getting Started", "https://vite.dev/guide/"],
          ["FastAPI: First Steps", "https://fastapi.tiangolo.com/tutorial/first-steps/"]
        ]
      },
      example: "Kysymyslista, jossa on muun muassa ”pitääkö tilauksesta lähteä sähköposti-ilmoitus vai riittääkö näkymä?” ja ”mitkä kategoriat teillä on käytössä liikkeessä?”, sekä ohjaajan vastaus kunkin kysymyksen perässä.",
      notEnough: "”Loin repositoryn ja projektit” ilman kysymyslistaa ja ilman että backend oikeasti käynnistyy.",
      paivat: [
        ["Tarve", "Lue toimeksianto ja kirjaa vähintään kuusi kysymystä ohjaajalle: mitä asiakas oikeasti tarvitsee ja mitä on rajattu pois."],
        ["Rajaus", "Sovi julkisen repositoryn asiat: yksityisyystarkistus, tekijänimi ja alaikäisellä huoltajan suostumus ohjaajan kautta."],
        ["Työkaluperusta", "Luo repository kansioineen ja alusta Vue+Vite-frontend ja FastAPI-backend. Käynnistä molemmat."],
        ["Suunnittele", "Aloita tekninen suunnitelma: käyttäjätarinat toimeksiannosta ja ensimmäinen luonnos tietomallista."],
        ["Ensimmäinen commit", "Vie kaikki Gitiin: README, kansiorakenne ja käynnistyvät projektit. Kirjoita viikon päiväkirjamerkintä."]
      ]
    },

    2: {
      type: "pohjustus",
      feature: "Tarinat, tietomalli ja rautalangat on kirjattu, ja kaupan pakollinen ydin on GitHubissa vähintään kahdeksana issuena.",
      excerpt: "En halua tähän ensimmäiseen versioon maksunvälitystä.",
      connection: "Työviikon 1 kysymysten vastaukset muuttuvat nyt käyttäjätarinoiksi, tietomalliksi ja GitHub-issueiksi. Tietomalli tehdään ennen koodia, koska ostoskori ja tilaus rakentuvat sen varaan, ja pakollisen ytimen rajaus estää ominaisuuslistaa kasvamasta. Tästä suunnitelmasta loput viikot ottavat järjestyksensä, ja työviikolla 3 tietomalli muuttuu oikeiksi tauluiksi.",
      deliverable: "suunnitelma.md, kayttajatarinat.md, vue-pinia-selvitys.md, tietomallikaavio, tietovarastovertailu, hyväksytyt rautalangat ja vähintään kahdeksan issueta.",
      why: "Ilman tietomallia ostoskori ja tilaus rakennetaan kahdesti; ilman P0-rajausta ominaisuuslista kasvaa eikä mikään valmistu.",
      done: "Käyttäjätarinat prioriteetteineen ja arvioineen ovat tiedostossa kayttajatarinat.md; suunnitelma.md:ssä on teemapäätös, tietomalli ja sovitun SQLiten perustelu, ja tietomallikaavio ja vue-pinia-selvitys.md ovat project-docs-kansiossa; issueita on vähintään kahdeksan ja P0 on merkitty; rautalankojen hyväksyntä on kirjattu: hyväksyjän rooli ja hänen palautteensa. Hyväksyjäksi käy ohjaaja asiakkaan sijaisena, jos asiakkaan edustajaa ei ole vielä nimetty.",
      record: "Kirjoita työviikon 2 merkintään: teemapäätös perusteluineen, sovitun tietovaraston perustelu, rautalankojen hyväksyjän rooli ja hänen palautteensa sekä linkki issue-listaan.",
      skills: ["asiakastarpeen selvittäminen (s1)", "priorisointi ja tehtäviksi jako (s4, s5)", "tietovaraston valinta (s8)", "kirjaston mahdollisuudet ja rajoitteet (k2)"],
      termit: ["GitHub-issue", "P0", "P1", "P2", "JSON"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "2-1": {
          miksi: "Ilman priorisointia ominaisuuslista kasvaa eikä mikään valmistu. Hyväksymiskriteerit kertovat, milloin kukin toiminto on valmis.",
          osat: [
            ["Poimi käyttäjät ja teot", "Poimi toimeksiannosta käyttäjät (asiakas, myyjä, yrittäjä) ja se, mitä kukin tekee kaupassa."],
            ["Kirjoita tarinat", "Kirjoita jokaisesta teosta käyttäjätarina muodossa ”Asiakkaana haluan …, jotta …”. Kirjaa sille hyväksymiskriteerit eli havaittavat ehdot, joista tiedät tarinan valmiiksi."],
            ["Priorisoi tarinat", "Merkitse jokaiselle tarinalle luokka: P0 on pakollinen ydin, P1 on tärkeä jatko, joka tehdään kun P0 toimii, ja P2 on valinnainen lisä. Kirjaa perustelu."],
            ["Rajaa maksunvälitys pois", "Kirjaa maksunvälitys pois rajatuksi asiakkaan päätöksellä, samoin tuotearvostelut, sähköposti-ilmoitukset ja reaaliaikainen varastosaldo."],
            ["Arvioi työmäärä", "Kirjaa jokaiselle tarinalle työmääräarvio päivinä. Päivität arviot toteutuneen perusteella työviikolla 11."]
          ],
          valmis: "Jokaisella tarinalla on hyväksymiskriteerit, luokka P0, P1 tai P2 perusteluineen ja työmääräarvio, ja maksunvälitys on kirjattu pois rajatuksi.",
          tallenna: "Tarinat tiedostoksi `project-docs/kayttajatarinat.md` commitilla. Suunnitelman lataus ei korvaa tätä tiedostoa.",
          sanat: ["P0", "P1", "P2"]
        },
        "2-2": {
          miksi: "Ostoskori ja tilaus rakentuvat tietomallin varaan. Jos malli on väärin, ne rakennetaan kahdesti.",
          osat: [
            ["Päätä tuoteteema", "Päätä, myytkö lautapelejä vai oman alasi tuotteita (ei ikärajatuotteita). Kirjaa teema ja perustelu suunnitelmalomakkeelle. Seed-data ja taulujen kentät tehdään tälle teemalle."],
            ["Piirrä taulut ja suhteet", "Piirrä taulut tuote, kategoria, käyttäjä rooleineen, tilaus ja tilausrivi sarakkeineen sekä niiden suhteet, esimerkiksi kategoria 1–n tuote."],
            ["Testaa kaavio toisella", "Pyydä toista henkilöä kertomaan kaaviostasi, mihin tauluun tilauksen rivikohtainen hinta tallennetaan. Jos hän ei osaa vastata, täydennä kaaviota."],
            ["Kirjaa tietomalli", "Tallenna kaavio kuvana, esimerkiksi `project-docs/tietomalli.png`, ja kirjoita taulut ja suhteet lyhyesti suunnitelmalomakkeen tietomallikenttään."]
          ],
          valmis: "Teema on päätetty perusteluineen, ja tietomallikaaviosta näkee viisi taulua, niiden suhteet ja sen, mihin tilausrivin hinta tallentuu.",
          tallenna: "Kaavio `project-docs/`-kansioon. Teema ja tietomalli suunnitelmalomakkeelle, josta lataat `project-docs/suunnitelma.md`:n."
        },
        "2-3": {
          miksi: "SQLite on sovittu toteutustapa, koska tietomalli, ostoskori ja tilaukset rakentuvat sen varaan. Työviikon 2 vertailu perustelee sovitun valinnan vähintään yhtä vaihtoehtoa vasten. Jos vertailu puoltaa selvästi muuta, poikkeamasta sovitaan ohjaajan kanssa ennen työviikkoa 3. Vertailu on tietovaraston valinnan työnäyte (s8).",
          osat: [
            ["Nimeä vaihtoehdot", "Vertaa sovittua SQLiteä JSON-tiedostoon ja PostgreSQL:ään. JSON on tekstimuoto, jossa tieto tallennetaan ja siirretään selaimen ja palvelimen välillä."],
            ["Vertaa kolmella perusteella", "Vertaa vaihtoehtoja datan rakenteen, käyttötilanteen ja laajuuden perusteella, esimerkiksi taulujen suhteet, yhtä aikaa tulevat tilaukset ja noin 200 tuotetta."],
            ["Kirjaa haitat", "Kirjaa jokaisen vaihtoehdon haitta ääneen, myös SQLiten."],
            ["Kirjoita perustelu", "Kirjoita suunnitelmalomakkeen tietovarastokenttään, miksi sovittu SQLite sopii oman kauppasi dataan. Kerro, millä viikolla palaat päätökseen."],
            ["Tarkista poikkeaman tarve", "Jos vertailu puoltaa selvästi muuta, sovi poikkeamasta ohjaajan kanssa ennen työviikkoa 3 ja kirjaa sopimus suunnitelmaan. Muuten jatkat SQLitellä."]
          ],
          valmis: "Vertailussa ovat SQLite, JSON-tiedosto ja PostgreSQL kolmella perusteella, jokaisen haitta ja perustelu sille, miksi sovittu SQLite sopii kaupan dataan.",
          tallenna: "Vertailu suunnitelmalomakkeelle ja siitä `project-docs/suunnitelma.md`:hen.",
          sanat: ["JSON"]
        },
        "2-4": {
          miksi: "Hyväksytyt rautalangat ovat se, mitä vasten näkymät toteutetaan ja tarkistetaan. Issueiksi pilkottu pakollinen ydin näyttää, mitä seuraavat viikot sisältävät.",
          osat: [
            ["Piirrä rautalangat", "Piirrä kaupan päänäkymien rautalangat. Rautalanka on karkea luonnos näkymän rakenteesta ilman värejä ja viimeisteltyä ulkoasua."],
            ["Hyväksytä rautalangat", "Näytä rautalangat hyväksyjälle ja kirjaa hänen palautteensa ja roolinsa, ei nimeä. Ohjaaja käy hyväksyjäksi asiakkaan sijaisena, jos asiakkaan edustajaa ei ole vielä nimetty."],
            ["Nimeä komponentit", "Kirjoita rautalangoista suunnitelmalomakkeelle komponenttijako ja sivukartta: mitkä komponentit, mikä hakee datan ja mikä vain esittää sen."],
            ["Kirjoita Vue- ja Pinia-selvitys", "Kirjoita `project-docs/vue-pinia-selvitys.md` taulukkona omista pakollisen ytimen (P0) tarinoista: mitä tehdään Vuella ja Pinialla ja mikä tulee ulkopuolelta ja mistä, esimerkiksi backend."],
            ["Linkitä selvitys", "Lisää suunnitelmalomakkeen komponenttijako-kenttään linkki tiedostoon `vue-pinia-selvitys.md`."],
            ["Pilko pakollinen ydin issueiksi", "Kirjaa pakollisen ytimen (P0) tarinoista vähintään kahdeksan GitHub-issueta tunnisteella P0. Jokaisessa on valmis kun -ehto, ja yksi issue on noin puolen tai yhden päivän työ."]
          ],
          valmis: "Rautalankojen hyväksyntä on kirjattu hyväksyjän roolilla, komponenttijako linkkeineen on suunnitelmassa, `vue-pinia-selvitys.md` on repositoryssa, ja GitHubissa on vähintään kahdeksan P0-issueta valmis kun -ehtoineen.",
          tallenna: "Rautalangat kansioon `project-docs/rautalangat/`, selvitys tiedostoon `project-docs/vue-pinia-selvitys.md` ja issuen numerot tiedostoon `kayttajatarinat.md`. Hyväksyjän rooli, hänen palautteensa ja issue-listan linkki työviikon 2 päiväkirjaan.",
          sanat: ["GitHub-issue", "P0"],
          apu: {
            otsikko: "Selvitystaulukon pohja (vue-pinia-selvitys.md)",
            code: "| P0-tarina | Vuella ja Pinialla | Ulkopuolelta | Mistä |\n|---|---|---|---|\n| tuotelista | komponentit, propsit | tuotedata | FastAPI-rajapinta |\n| ostoskori | Pinia-store | – | – |\n| kirjautuminen | lomake, auth-store | istunto, rooli | backend |\n| reititys | – | reitit | vue-router (vk 4) |\n\nKorvaa rivit omilla P0-tarinoillasi."
          }
        }
      },
      help: {
        title: "Tietomallin ja käyttäjätarinan työpohjat",
        tree: "tuote        (id, nimi, kategoria_id, hinta, kuvaus, saatavuus)\nkategoria    (id, nimi)\nkayttaja     (id, tunnus, salasana_hash, rooli, nimi, osoite)\ntilaus       (id, kayttaja_id, luotu, tila)\ntilausrivi   (id, tilaus_id, tuote_id, maara, hinta_tilaushetkella)\n\nkategoria 1 – n tuote\nkayttaja  1 – n tilaus\ntilaus    1 – n tilausrivi\ntuote     1 – n tilausrivi",
        actions: [
          "Täytä taulukot omalla teemallasi: mitä kenttiä juuri sinun tuotteesi tarvitsee?",
          "Kirjoita jokaisesta P0-toiminnosta yksi käyttäjätarina hyväksymiskriteereineen.",
          "Perustele sovittu SQLite kirjallisesti vertaamalla sitä vaihtoehtoihin omalla datallasi.",
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
      feature: "Kaupan etusivu näyttää SQLite-kannasta haetut tuotteet, ja sammutettu backend näkyy käyttäjälle virheilmoituksena eikä tyhjänä ruutuna.",
      connection: "Työviikon 2 tietomalli muuttuu nyt oikeiksi tauluiksi, ensimmäiseksi endpointiksi eli rajapinnan yksittäiseksi osoitteeksi ja ensimmäisiksi komponenteiksi. Data siirtyy pois koodista kantaan, koska henkilökunta lisää tuotteita myöhemmin selaimessa ja kovakoodattu lista kaatuisi silloin. Työviikolla 4 sama tuotelista saa kategoriat ja omat osoitteet.",
      deliverable: "SQLite-kanta seed-datalla, GET /api/tuotteet, TuoteLista- ja TuoteKortti-komponentit sekä testitapaukset T01–T02.",
      why: "Data pois koodista on koko kaupan perusta. Kovakoodattu lista kaatuu heti, kun henkilökunnan tuotehallinta tulee mukaan viikolla 12.",
      done: "Kehityspalvelin näyttää kannasta tulevat tuotteet; API palauttaa JSONia, mikä on testattu /docs-sivulta; kun backend sammutetaan, käyttäjä näkee virheilmoituksen eikä tyhjää ruutua.",
      record: "Kirjoita työviikon 3 merkintään: mitä seed-dataa loit ja miksi juuri nuo kentät, miten toteutit lataus-, tyhjä- ja virhetilat sekä T01:n ja T02:n tulos lyhyesti ja linkki testimatriisiin.",
      skills: ["tietovarastoyhteys (s9)", "rajapinnat (s10)", "komponentit ja reaktiivisuus (k3)", "rakenteinen ohjelmointi (p4)"],
      termit: ["API", "endpoint", "CORS", "T01", "seed-data"],
      tehtavat: {
        "3-1": {
          miksi: "Data pois koodista on koko kaupan perusta. Kovakoodattu lista kaatuu viimeistään, kun henkilökunta alkaa lisätä tuotteita työviikolla 12.",
          osat: [
            ["Luo taulut", "Toteuta työviikon 2 tietomallista ensin taulut `tuote` ja `kategoria` SQLite-kantaan."],
            ["Kirjoita seed-skripti", "Seed-data on aloitusdata, joka ajetaan tyhjään kantaan. Kirjoita skripti, joka lisää noin 20 oman teemasi tuotetta kaikilla kentillä. Keksi data itse, älä kopioi oikeasta kaupasta."],
            ["Aja ja tarkista", "Aja seed-skripti ja tarkista kannasta, että tuotteita ja kategorioita on odotettu määrä."],
            ["Pidä kanta poissa Gitistä", "Tarkista, että `.gitignore` estää `*.db`-tiedoston. Repositoryyn menee skripti, ei kanta."]
          ],
          valmis: "Kannassa on noin 20 oman teeman tuotetta kategorioineen, ja ne syntyvät uudelleen yhdellä seed-skriptin ajolla.",
          tallenna: "Taulujen luonti ja seed-skripti `backend/`-kansioon commitilla. Seed-datan kentät ja niiden perustelu työviikon 3 päiväkirjaan.",
          sanat: ["seed-data"]
        },
        "3-2": {
          miksi: "Endpoint on ensimmäinen osa rajapintaa, jonka kautta frontend saa tuotteet. Kun kokeilet sen ensin /docs-sivulla, tiedät myöhemmin, onko vika backendissä vai frontendissä.",
          osat: [
            ["Toteuta endpoint", "Kirjoita FastAPI-sovellukseen `GET /api/tuotteet`, joka hakee tuotteet kannasta ja palauttaa ne JSONina."],
            ["Kokeile /docs-sivulla", "Avaa backendin `/docs`-sivu, aja endpoint ja tarkista, että jokaisella tuotteella on kaikki kentät."],
            ["Kirjaa vastauksen muoto", "Kopioi yhden tuotteen JSON-vastaus talteen sellaisena kuin /docs-sivu sen näyttää. Frontend rakennetaan tätä muotoa vasten."]
          ],
          valmis: "`GET /api/tuotteet` palauttaa kannan tuotteet JSONina, ja se on kokeiltu /docs-sivulla ennen frontendin koodaamista.",
          tallenna: "Endpoint commitilla. Vastauksen muoto työviikon 3 päiväkirjaan.",
          sanat: ["API", "endpoint", "JSON"]
        },
        "3-3": {
          miksi: "Itse rakennettu tuotelista osoittaa, että osaat Vuen komponentit ja propsit. Toimeksianto kieltää valmiin käyttöliittymäkirjaston tässä näkymässä.",
          osat: [
            ["Salli kehitysosoite", "Lisää backendiin CORS-asetus, joka sallii kutsut Viten kehityspalvelimen osoitteesta. Ilman sitä selain estää haun."],
            ["Hae tuotteet", "Kirjoita `TuoteLista.vue`, joka hakee tuotteet fetch-kutsulla backendin osoitteesta, esimerkiksi `http://localhost:8000/api/tuotteet`, ja pitää ne komponentin tilassa."],
            ["Näytä yksi tuote", "Kirjoita `TuoteKortti.vue`, joka saa yhden tuotteen propsina eli komponentille annettuna arvona ja näyttää nimen, hinnan ja kuvauksen."],
            ["Kokoa näkymä", "Kytke komponentit järjestykseen App → TuoteLista → TuoteKortti. Älä käytä valmista käyttöliittymän komponenttikirjastoa."]
          ],
          valmis: "Kehityspalvelin näyttää kannasta tulevat tuotteet itse rakennetuissa komponenteissa.",
          tallenna: "Komponentit commitilla. Kuvakaappaus tuotelistasta työviikon 3 päiväkirjaan.",
          sanat: ["CORS"]
        },
        "3-4": {
          miksi: "Käyttäjän pitää nähdä, mitä tapahtuu, myös silloin kun mikään ei toimi. Testitapaukset T01 ja T02 aloittavat testimatriisin, joka ajetaan kokonaan työviikolla 15.",
          osat: [
            ["Näytä lataustila", "Näytä ”Ladataan tuotteita…” heti, kun haku alkaa, ei vasta vastauksen jälkeen."],
            ["Näytä tyhjä ja virhe", "Näytä tyhjästä tuloksesta oma viestinsä ja epäonnistuneesta hausta ymmärrettävä virheilmoitus. Tarkista vastauksen status ennen `.json()`-kutsua."],
            ["Aloita testimatriisi", "Luo `project-docs/testimatriisi.md` ja kirjaa testitapaukset T01 ja T02 ennen ajoa: tunnus, lähtötila, toiminta ja odotettu tulos."],
            ["Sammuta backend", "Sammuta backend ja lataa sivu uudelleen. Käyttäjän pitää nähdä virheilmoitus, ei tyhjää ruutua eikä pelkkää konsolivirhettä."],
            ["Aja testit", "Aja T01 ja T02, kirjaa toteutunut tulos matriisiin ja tee commit."]
          ],
          valmis: "Lataus-, tyhjä- ja virhetila näkyvät käyttäjälle, sammutettu backend antaa virheilmoituksen, ja T01:n ja T02:n odotettu ja toteutunut tulos ovat testimatriisissa.",
          tallenna: "Testitapaukset T01 ja T02 tiedostoon `project-docs/testimatriisi.md` commitilla. Tulos lyhyesti ja linkki testimatriisiin työviikon 3 päiväkirjaan.",
          sanat: ["T01"]
        }
      },
      help: {
        title: "Komponenttipuu ja API-kutsun tarkistuslista",
        tree: "App.vue\n└─ TuoteLista.vue        hakee datan, hallitsee tilat\n   ├─ (lataus)           ”Ladataan tuotteita…”\n   ├─ (virhe)            ”Tuotteita ei saatu haettua.”\n   ├─ (tyhjä)            ”Ei tuotteita.”\n   └─ TuoteKortti.vue    yksi tuote, saa propsina",
        actions: [
          "Luo taulut ja aja seed-skripti; tarkista rivimäärä kannasta.",
          "Toteuta GET /api/tuotteet ja kokeile se /docs-sivulla.",
          "Rakenna TuoteLista ja TuoteKortti itse ja välitä tuote propsina eli komponentille annettuna arvona.",
          "Toteuta kolme tilaa: lataus, virhe ja tyhjä tulos."
        ],
        code: "API-KUTSUN TARKISTUSLISTA\n[ ] osoite oikein (portti ja polku)\n[ ] CORS sallittu kehityspalvelimen osoitteelle\n    (CORS on selaimen sääntö: ilman lupaa se estää haun toisesta osoitteesta)\n[ ] vastauksen status tarkistetaan ennen .json()\n[ ] virhe näytetään käyttäjälle, ei vain konsoliin\n[ ] lataustila näkyy heti, ei vasta vastauksen jälkeen\n[ ] tyhjä tulos on oma viestinsä, ei virhe",
        test: "Sammuta backend ja lataa sivu uudelleen: käyttäjän pitää nähdä ymmärrettävä virheilmoitus, ei tyhjää ruutua eikä pelkkää konsolivirhettä.",
        links: [["Vue 3: Components Basics", "https://vuejs.org/guide/essentials/component-basics.html"]]
      },
      example: "Seed-tuote kaikilla kentillä (nimi, kategoria, hinta, kuvaus, saatavuus) ja API-vastauksen muoto kirjattuna päiväkirjaan sellaisena kuin /docs-sivu sen näyttää.",
      notEnough: "Tuotteet kovakoodattuna komponenttiin ”väliaikaisesti” tai valmiin käyttöliittymäkirjaston taulukko datan näyttämiseen."
    },

    4: {
      type: "feature",
      feature: "Asiakas avaa kategorian tai tuotteen suoraan sen omasta osoitteesta, myös puhelimella.",
      excerpt: "Pelejä pitää voida selailla kategorioittain ja hakea nimellä, koska kukaan ei jaksa selata kahtasataa peliä yhtenä listana.",
      connection: "Työviikon 3 tuotelista saa nyt rakenteen: kategoriat ja tuotesivut saavat omat osoitteensa, joita voi jakaa ja avata suoraan. Reititys tehdään ennen hakua, koria ja hallintanäkymiä, koska ne kaikki tarvitsevat oman osoitteen. Kun osoitteet toimivat selaimen päivityksellä, työviikon 5 julkaisu ei kaadu niihin.",
      deliverable: "vue-router konfiguroituna, kategorialistaus, kategoriakohtainen näkymä, tuotesivu reittiparametrilla, 404-reitti ja mobiilinavigaatio.",
      why: "Ilman reititystä haku, kori ja hallintanäkymät eivät saa osoitteita, ja URL:ien toimivuus päivityksellä on juuri se kohta, jossa yhden sivun sovellusten (single-page application, SPA) julkaisut tyypillisesti hajoavat viikolla 5. Saavutettavuus rakennetaan sisään nyt, jotta viikon 13 tarkistus on todentamista eikä uudelleenrakentamista.",
      done: "Jokaisella tuotteella ja kategorialla on oma URL, joka toimii myös selaimen päivityksellä; tuntematon osoite näyttää 404-näkymän; navigointi toimii omalla puhelimella ja perusnäkymissä pääsee liikkumaan näppäimistöllä.",
      record: "Kirjoita työviikon 4 merkintään: reittikartta, miksi ulkoinen reitityskomponentti tarvitaan, valitsemasi responsiivisuuden taitekohdat perusteluineen ja mitä puhelintesti paljasti.",
      skills: ["ulkoisen komponentin käyttöönotto: vue-router (k4)", "käyttöliittymä suunnitelmista (p6)", "responsiivisuus ja saavutettavuuden perusta"],
      termit: ["SPA"],
      tehtavat: {
        "4-1": {
          miksi: "Ilman reititystä haku, kori ja hallintanäkymät eivät saa omia osoitteita. vue-router on projektin ensimmäinen ulkoinen komponentti, ja sen käyttö perustellaan (k4).",
          osat: [
            ["Asenna router", "Asenna `vue-router` ja luo tiedosto, jossa reitit määritellään."],
            ["Piirrä reittikartta", "Kirjaa taulukkoon polku, komponentti, mistä data tulee ja tuleeko reitille myöhemmin suojaus. Pohja on toteutusavussa."],
            ["Määrittele reitit", "Määrittele reitit etusivulle, kategorialle `/kategoria/:id` ja tuotesivulle `/tuote/:id` reittikartan mukaan."],
            ["Perustele ulkoinen komponentti", "Kirjoita, miksi reititys kannattaa hoitaa ulkoisella komponentilla eikä itse tehdyllä ratkaisulla."]
          ],
          valmis: "Reitit on määritelty vue-routerilla, reittikartta on suunnitelmassa ja valinnan perustelu on kirjoitettu.",
          tallenna: "Reittikartta suunnitelmalomakkeen komponenttijako ja sivukartta -kenttään. Perustelu työviikon 4 päiväkirjaan."
        },
        "4-2": {
          miksi: "Asiakas haluaa selata pelejä kategorioittain, koska kukaan ei jaksa selata kahtasataa peliä yhtenä listana.",
          osat: [
            ["Toteuta kategoria-endpoint", "Lisää backendiin endpoint, joka palauttaa kategoriat, ja tapa hakea yhden kategorian tuotteet. Kokeile molemmat /docs-sivulla."],
            ["Näytä kategoriat", "Rakenna kategorialistaus, josta jokainen kategoria vie osoitteeseen `/kategoria/:id`."],
            ["Näytä kategorian tuotteet", "Rakenna `KategoriaNakyma`, joka hakee tuotteet reitin kategoria-id:n perusteella ja käyttää työviikon 3 TuoteKorttia."]
          ],
          valmis: "Kategorian valinta näyttää vain sen kategorian tuotteet omassa osoitteessaan.",
          tallenna: "Endpoint ja näkymät commitilla.",
          sanat: ["endpoint"]
        },
        "4-3": {
          miksi: "Jaettava osoite toimii vain, jos sivu latautuu myös suoraan avattuna. Juuri tässä yhden sivun sovellusten (SPA) julkaisut tyypillisesti hajoavat.",
          osat: [
            ["Hae tuote reittiparametrilla", "Rakenna `TuoteNakyma`, joka hakee tuotteen osoitteen vaihtuvan osan perusteella, esimerkiksi `/tuote/12`. Tätä osaa kutsutaan reittiparametriksi."],
            ["Käsittele tuntematon tuote", "Näytä selkeä viesti, jos tuotetta ei löydy annetulla id:llä."],
            ["Lisää 404-reitti", "Lisää reitti `/:pathMatch(.*)*`, joka näyttää oman 404-näkymän. 404 on virhekoodi, joka tarkoittaa, ettei osoitetta löydy."],
            ["Kokeile suoraa avausta", "Avaa tuotteen osoite suoraan uudessa välilehdessä ja paina selaimen päivitystä. Sivun pitää latautua oikein."]
          ],
          valmis: "Jokaisella tuotteella on oma osoite, joka toimii suoraan avattuna ja päivityksellä, ja tuntematon osoite näyttää 404-näkymän.",
          tallenna: "Näkymät ja reitit commitilla.",
          sanat: ["SPA"]
        },
        "4-4": {
          miksi: "Asiakkaat käyttävät kauppaa ensisijaisesti puhelimella. Kun saavutettavuus rakennetaan sisään nyt, työviikon 13 tarkistus on todentamista eikä uudelleenrakentamista.",
          osat: [
            ["Päätä taitekohdat", "Päätä responsiivisuuden taitekohdat eli leveydet, joissa asettelu muuttuu. Kirjaa ne perusteluineen suunnitelmalomakkeelle."],
            ["Rakenna mobiilinavigaatio", "Rakenna navigaatio, jolla kategoriat ja tuotteet löytyvät kapealla näytöllä."],
            ["Käytä semanttista HTML:ää", "Pidä otsikkotasot järjestyksessä, anna kuville alt-tekstit ja käytä linkeille ja napeille oikeita elementtejä."],
            ["Kokeile näppäimistöllä", "Liiku perusnäkymissä pelkällä Tab-näppäimellä ja tarkista, että fokus näkyy."],
            ["Testaa omalla puhelimella", "Käynnistä kehityspalvelin komennolla `npm run dev -- --host`, avaa kauppa omalla puhelimella samassa verkossa ja ota näkymästä kuvakaappaus."]
          ],
          valmis: "Navigointi toimii omalla puhelimella, perusnäkymissä pääsee liikkumaan näppäimistöllä, ja taitekohdat on kirjattu perusteluineen.",
          tallenna: "Taitekohdat suunnitelmalomakkeelle. Kuvakaappaus puhelimelta ja puhelintestin havainnot työviikon 4 päiväkirjaan."
        }
      },
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
        test: "Avaa yhden tuotteen osoite suoraan uudessa välilehdessä ja paina selaimen päivitystä. Sivun pitää latautua oikein. Kokeile sama omalla puhelimella.",
        links: [["Vue Router: Essentials", "https://router.vuejs.org/guide/"]]
      },
      example: "Reittitaulukko, jossa lukee /kategoria/:id → KategoriaNakyma → hakee tuotteet kategorialla, ja kuvakaappaus samasta näkymästä omalta puhelimelta.",
      notEnough: "Yksi pitkä sivu, jossa kategoriat ovat ankkurilinkkejä: ei reittejä eikä jaettavia osoitteita."
    },

    5: {
      type: "feature",
      feature: "Kuka tahansa voi avata NoppaKaupan julkisesta osoitteesta puhelimella ja nähdä tuotteet kannasta.",
      connection: "Työviikkojen 3 ja 4 kauppa siirtyy nyt pois omalta koneelta julkiseen osoitteeseen. Julkaisu tehdään jo nyt, koska CORS-asetusten, polkujen ja ympäristömuuttujien ongelmat on helpointa korjata, kun kaupassa on vielä vähän rikottavaa. Loput viikot tehdään ympäristössä, jossa julkaisu on jo kertaalleen onnistunut.",
      deliverable: "Julkaistu frontend ja backend, alustavertailu suunnitelmassa, ympäristömuuttujat kunnossa, käyttöönotto-ohjeen alku READMEssä ja testi T03.",
      why: "Tyhjähkö kauppa tuotannossa on parempi kuin valmis kauppa localhostissa: julkaisun ongelmat, kuten CORS-asetukset, polut ja ympäristömuuttujat, löytyvät nyt eikä viikolla 17.",
      done: "Julkinen URL näyttää tuotelistan kannasta; osoite toimii puhelimella ja toisella koneella; salaisuudet ja .env-tiedosto eivät ole repositoryssä.",
      record: "Kirjoita työviikon 5 merkintään: alustavertailu ja valintasi perustelu, mitä julkaisussa meni pieleen ja miten korjasit sen, sekä T03:n tulos toisella laitteella lyhyesti ja linkki testimatriisiin.",
      skills: ["julkaisu tuotantoympäristöön (s14)", "kehitys- ja tuotantokonfiguraatio (k1)", "salaisuuksien hallinta (s11:n pohjustus)"],
      termit: ["build"],
      tehtavat: {
        "5-1": {
          miksi: "Alustan rajoitteet, kuten uneen menevä palvelin tai häviävä SQLite-tiedosto, pitää tietää ennen tilin luontia. Vertailu on myös julkaisuosaamisen (s14) työnäyte.",
          osat: [
            ["Tarkista oppilaitoksen linja", "Kysy ohjaajalta, käyvätkö ilmaistasot vai käytetäänkö omaa palvelinta. Jos asia on auki, kirjaa se suunnitelmaan avoimeksi asiaksi."],
            ["Tee vertailutaulukko", "Vertaa vähintään kolmea alustaa: hinta, rajoitteet ja SQLite-tiedoston pysyvyys. Kirjaa myös ilmaistason rajoitteet, kuten uneen menevä palvelin."],
            ["Valitse ja perustele", "Valitse alusta ja kirjoita perustelu. Kerro, mitkä rajoitteet hyväksyit ja miksi. Tee tämä ennen kuin luot yhtään tiliä."]
          ],
          valmis: "Suunnitelmassa on vähintään kolmen alustan vertailu rajoitteineen ja perusteltu valinta.",
          tallenna: "Vertailu ja valinta suunnitelmalomakkeen julkaisualusta-kenttään ja siitä `project-docs/suunnitelma.md`:hen."
        },
        "5-2": {
          miksi: "Kehitys- ja tuotanto-osoitteen ero hoidetaan asetuksilla eikä koodia muuttamalla. Salaisuudet eivät saa koskaan päätyä julkiseen repositoryyn.",
          osat: [
            ["Siirrä rajapinnan osoite muuttujaan", "Lue rajapinnan osoite frontendissä ympäristömuuttujasta `VITE_API_URL`. Tarkista, ettei koodissa ole enää kovakoodattua localhostia."],
            ["Aseta backendin tuotantoasetukset", "Lue CORS-asetuksen sallima osoite ja muut asetukset ympäristömuuttujista. CORS kertoo backendille, mistä osoitteista selaimen kutsut hyväksytään."],
            ["Pidä salaisuudet poissa", "Listaa muuttujat tiedostoon `.env.example` ilman arvoja. Tarkista, että `.env` ja `*.db` ovat `.gitignore`-tiedostossa."],
            ["Kokeile build", "Aja `npm run build` puhtaassa kansiossa. Build kääntää lähdekoodin valmiiksi julkaisutiedostoiksi `dist/`-kansioon."]
          ],
          valmis: "Build onnistuu, rajapinnan osoite tulee ympäristömuuttujasta, ja `.env.example` on repositoryssa mutta `.env` ei.",
          tallenna: "Asetukset ja `.env.example` commitilla.",
          sanat: ["build", "CORS"]
        },
        "5-3": {
          miksi: "Tyhjähkö kauppa tuotannossa on parempi kuin valmis kauppa omalla koneella. Julkaisun ongelmat löytyvät nyt eivätkä vasta työviikolla 17.",
          osat: [
            ["Julkaise backend", "Julkaise backend ensin, aseta alustalle ympäristömuuttujat ja avaa julkaistun backendin `/docs`-sivu."],
            ["Julkaise frontend", "Julkaise frontend niin, että sen rajapinnan osoite osoittaa julkaistuun backendiin."],
            ["Tallenna loki", "Tarkista alustan julkaisuloki ja ota siitä kuvakaappaus."],
            ["Kirjaa testitapaus T03", "Kirjaa testimatriisiin ennen ajoa testitapaus T03: julkinen osoite näyttää tuotelistan kannasta laitteella, jolla et ole kehittänyt."],
            ["Savutestaa", "Savutesti on nopea tarkistus perusasioista. Avaa osoite puhelimella ja toisella koneella, avaa yksi tuotesivu suoraan ja päivitä se. Kirjaa tulos matriisiin."]
          ],
          valmis: "Julkinen osoite näyttää tuotelistan kannasta puhelimella ja toisella koneella, ja testitapauksen T03 tulos on testimatriisissa.",
          tallenna: "Julkinen osoite ja lokin kuvakaappaus työviikon 5 päiväkirjaan. Testitapaus T03 tiedostoon `project-docs/testimatriisi.md`.",
          sanat: ["T01"]
        },
        "5-4": {
          miksi: "Ohje, jolla joku muu saa kaupan käyntiin, on työviikon 16 julkaisutestin edellytys. Se on helpointa kirjoittaa nyt, kun asetukset ovat tuoreessa muistissa.",
          osat: [
            ["Kirjoita käynnistys", "Lisää README:hen ohje, jolla kauppa käynnistetään omalla koneella: riippuvuuksien asennus ja molempien palvelinten käynnistys."],
            ["Kirjaa ympäristömuuttujat", "Kerro README:ssä, mitkä muuttujat tarvitaan kehityksessä ja tuotannossa ja että mallit ovat tiedostossa `.env.example`."],
            ["Kirjaa julkaisu", "Kerro lyhyesti, mille alustalle kauppa julkaistaan ja missä järjestyksessä backend ja frontend viedään sinne."]
          ],
          valmis: "README:ssä on käyttöönoton ensimmäinen versio: käynnistys, ympäristömuuttujat ja julkaisu.",
          tallenna: "README commitilla repositoryyn."
        }
      },
      help: {
        title: "Julkaisun tarkistuslista",
        tree: "kehitys                     tuotanto\n--------------------------- ---------------------------\nnpm run dev                 npm run build → dist/\nVITE_API_URL=localhost      VITE_API_URL=julkinen osoite\nCORS: localhost-origin      CORS: julkaisun origin\nSQLite paikallinen tiedosto SQLite alustan levyllä\n.env (ei repositoryyn)      alustan ympäristömuuttujat",
        actions: [
          "Kirjoita alustavertailu suunnitelmaan ennen kuin luot yhtään tiliä.",
          "Siirrä API-osoite ympäristömuuttujaan ja tarkista, ettei koodissa ole kovakoodattua localhostia.",
          "Julkaise backend ensin, testaa sen /docs-sivu, julkaise sitten frontend.",
          "Lisää READMEen käyttöönoton ensimmäinen versio."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] build-komento toimii puhtaassa kansiossa\n[ ] API-osoite tulee ympäristömuuttujasta\n[ ] CORS-origin vastaa julkaistua frontendin osoitetta\n[ ] ympäristömuuttujat listattu .env.example-tiedostoon\n[ ] .env ja *.db ovat .gitignoressa\n[ ] julkinen osoite avautuu toisella laitteella\n[ ] julkaisuloki tallennettu tai kuvakaapattu",
        test: "Avaa julkinen osoite laitteella, jolla et ole koskaan kehittänyt, ja tarkista että tuotelista tulee kannasta. Kirjaa tulos testinä T03.",
        links: [["Vite: Env Variables and Modes", "https://vite.dev/guide/env-and-mode"]]
      },
      example: "Kolmen alustan vertailu rajoitteineen ja päätös: ”Render, koska ilmainen taso riittää ja tukee sekä staattista sivua että Python-palvelua”, sekä kirjaus siitä, mitä ilmaistason rajoitteita hyväksyit.",
      notEnough: "”Julkaisin Renderiin koska ohjeessa luki niin”, ilman vertailua ja ilman toisen laitteen savutestiä."
    },

    6: {
      type: "feature",
      feature: "Asiakas löytää pelin kirjoittamalla nimen osan hakukenttään, eikä erikoismerkeillä kirjoitettu haku riko mitään.",
      excerpt: "Pelejä pitää voida selailla kategorioittain ja hakea nimellä, koska kukaan ei jaksa selata kahtasataa peliä yhtenä listana.",
      connection: "Työviikon 4 kategoriat vievät asiakkaan jo oikeaan hyllyyn, ja nyt hän löytää pelin myös suoraan nimellä. Samalla käyttäjän syöte kulkee ensimmäistä kertaa kantaan asti, joten parametrisoitu kysely opitaan tässä eikä vasta tietoturvaviikolla. Hausta asiakas pääsee tuotteen luo, ja työviikolla 7 tuote päätyy ostoskoriin.",
      deliverable: "Haku-endpoint parametrisoidulla SQL-kyselyllä, hakukenttä ja tuloslista, tyhjän tuloksen ja virheen käsittely sekä testitapaukset T04–T05.",
      why: "Haku on ensimmäinen paikka, jossa käyttäjän syöte kulkee kantaan asti. Täällä ratkaistaan, opitaanko syötteiden käsittely oikein vai jääkö aukko koko sovellukseen.",
      done: "Haku ”nop” löytää ”Nopanheitto”-tuotteen; haku merkkijonolla '; DROP TABLE palauttaa nolla osumaa eikä kaada mitään; tyhjä tulos opastaa käyttäjää.",
      record: "Kirjoita työviikon 6 merkintään: miten parametrisoit kyselyn ja miksi, miten ratkaisit hakukentän viiveen tai Enter-painalluksen sekä T04:n ja T05:n tulokset lyhyesti ja linkki testimatriisiin.",
      skills: ["rajapinnat ja tiedon käsittely (s10)", "toimintalogiikka (s7)", "syötteiden tietoturva (s11)"],
      termit: ["SQL", "SQL-injektio"],
      tehtavat: {
        "6-1": {
          miksi: "Haku on ensimmäinen kohta, jossa käyttäjän syöte kulkee kantaan asti. Tässä ratkeaa, opitko syötteiden käsittelyn oikein vai jääkö aukko koko kauppaan.",
          osat: [
            ["Lisää kyselyparametri", "Laajenna `GET /api/tuotteet` ottamaan hakusana kyselyparametrina, esimerkiksi `?haku=nop`."],
            ["Parametrisoi kysely", "SQL on kyselykieli, jolla kantaa käsitellään. Kirjoita kysely `?`-paikkamerkillä, esimerkiksi `WHERE nimi LIKE ?`. Älä koskaan liitä syötettä kyselytekstiin merkkijonona."],
            ["Tee hausta kirjainkoosta riippumaton", "Tarkista, että hakusanat ”nop” ja ”NOP” löytävät saman tuotteen."],
            ["Kokeile /docs-sivulla", "Kokeile endpointia /docs-sivulla ensin tavallisella sanalla ja sitten syötteellä `'; DROP TABLE tuote; --`."],
            ["Kirjaa injektion vaara", "Kirjoita omin sanoin, mitä syötteen liimaaminen osaksi kyselyä mahdollistaisi. Sitä aukkoa kutsutaan SQL-injektioksi."]
          ],
          valmis: "Haku nimen osalla löytää tuotteen (esimerkiksi ”nop” → ”Nopanheitto”), ja haku `'; DROP TABLE tuote; --` palauttaa nolla osumaa kaatamatta mitään.",
          tallenna: "Endpoint commitilla. Selitys parametrisoinnista työviikon 6 päiväkirjaan.",
          sanat: ["SQL", "SQL-injektio", "endpoint"]
        },
        "6-2": {
          miksi: "Asiakas löytää pelin nimellä parissa sekunnissa, kun hakukenttä on aina käsillä.",
          osat: [
            ["Rakenna hakukenttä", "Rakenna hakukomponentti, jossa on labeliin kytketty tekstikenttä ja hakunappi."],
            ["Päätä hakutapa", "Päätä, hakeeko kenttä Enterillä vai pienellä viiveellä kirjoittamisen jälkeen, ja kirjaa perustelu."],
            ["Näytä tulokset", "Hae tulokset rajapinnasta ja näytä ne samoilla TuoteKorteilla kuin tuotelistassa."]
          ],
          valmis: "Hakukenttään kirjoitettu nimen osa näyttää osuvat tuotteet rajapinnasta, ja hakutavan valinta on perusteltu.",
          tallenna: "Komponentti commitilla. Hakutavan perustelu ja kuvakaappaus hakudemosta työviikon 6 päiväkirjaan."
        },
        "6-3": {
          miksi: "Tyhjä tulos ei ole virhe. Käyttäjän pitää erottaa, puuttuuko peli valikoimasta vai eikö haku toiminut.",
          osat: [
            ["Näytä tyhjä tulos", "Näytä opastava teksti, esimerkiksi ”Ei osumia. Kokeile lyhyempää hakusanaa tai selaa kategorioita.”"],
            ["Näytä virhe", "Näytä backend-virheestä oma viestinsä, joka eroaa tyhjän tuloksen viestistä."],
            ["Kokeile molemmat", "Hae sanalla, jota ei löydy. Sammuta sitten backend ja hae uudelleen. Viestien pitää erota toisistaan."]
          ],
          valmis: "Tyhjä tulos ja backend-virhe näyttävät eri viestin, eikä kumpikaan jätä ruutua tyhjäksi.",
          tallenna: "Muutokset commitilla."
        },
        "6-4": {
          miksi: "Testitapaukset näyttävät, että haku toimii myös erikoismerkeillä. Ne jatkavat testimatriisia, joka ajetaan kokonaan työviikolla 15.",
          osat: [
            ["Kirjaa tapaukset ennen ajoa", "Kirjaa testimatriisiin testitapaukset T04 ja T05 odotuksineen, esimerkiksi tavallinen haku ja haku erikoismerkeillä."],
            ["Aja testit", "Aja T04 ja T05 ja kirjaa toteutunut tulos matriisiin."],
            ["Tarkista kanta", "Tarkista erikoismerkkihaun jälkeen, että tuotetaulu on ehjä ja rivimäärä ennallaan."],
            ["Viittaa commitissa", "Viittaa commit-viestissä testitapauksiin T04 ja T05."]
          ],
          valmis: "T04:n ja T05:n odotettu ja toteutunut tulos ovat testimatriisissa, eikä erikoismerkkihaku muuttanut kantaa.",
          tallenna: "Testitapaukset tiedostoon `project-docs/testimatriisi.md` commitilla. Tulokset lyhyesti ja linkki testimatriisiin työviikon 6 päiväkirjaan.",
          sanat: ["T01"]
        }
      },
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
      feature: "Asiakas voi lisätä pelejä koriin, muuttaa määriä ja poistaa rivejä, ja kori säilyy sivun päivityksessä.",
      excerpt: "Haluan, että asiakas voi kerätä pelejä ostoskoriin, poistaa niitä siitä ja lopuksi tehdä tilauksen tai lähteä sivulta tilaamatta; sekin on ihan sallittua.",
      connection: "Työviikkojen 4 ja 6 kategoriat ja haku vievät asiakkaan tuotteen luo, ja nyt tuote päätyy ostoskoriin. Kori rakennetaan Pinia-storeksi omassa haarassa, koska se on kaupan tila, jonka varaan työviikon 9 tilaus rakentuu. Samalla harjoittelet hallitun yhdistämisen pull requestilla, jota tarvitset loppuprojektin muutoksissa.",
      deliverable: "Kori-store, korinäkymä määränmuutoksineen ja summineen, yhdistetty pull request, päätösmuistio korin tallennuksesta, testitapaukset T06–T07 ja virheenkorjausketju K1.",
      why: "Kori on kaupan tila. Jos tilanhallinta hajoaa komponentteihin, tilausviikko kaatuu. Haara ja pull request ovat lisäksi ainoa tapa näyttää hallittu yhdistäminen (s13) yksin tehdessä.",
      done: "Tuotteita voi lisätä ja poistaa, määrää muuttaa ja summa täsmää; kori säilyy sivun päivityksessä; pull request on yhdistetty ja mahdollinen konflikti on ratkaistu.",
      record: "Kirjoita työviikon 7 merkintään: korin tallennuspäätös perusteluineen ja ohjaajan kommentti, pull requestin linkki, T06:n ja T07:n tulokset lyhyesti ja linkki testimatriisiin sekä K1-ketju kokonaisena.",
      skills: ["Pinia-tilanhallinta (k3)", "haara ja pull request (s13)", "ratkaisuvaihtoehtojen vertailu (p9)"],
      termit: ["haara", "pull request", "K1", "regressiotesti"],
      tehtavat: {
        "7-1": {
          miksi: "Tallennustapa ratkaisee, säilyykö kori päivityksessä ja miten työviikon 9 tilaus lukee sen. Yhteinen päätös ohjaajan kanssa on ongelmanratkaisun työnäyte (p9).",
          osat: [
            ["Kuvaa vaihtoehdot", "Kuvaa kaksi tapaa: Pinia-store ja selaimen localStorage sekä backendiin tallennettu kori."],
            ["Vertaa hyödyt ja haitat", "Kirjoita kummankin hyödyt ja haitat omin sanoin, esimerkiksi säilyvyys, kirjautumattoman asiakkaan kori ja tilauksen muodostus. Kumpikaan vaihtoehto ei saa olla olkinukke."],
            ["Päätä ohjaajan kanssa", "Käy vertailu läpi ohjaajan kanssa ennen toteutusta ja tee päätös. Kirjaa ohjaajan kommentti."],
            ["Kirjaa päätös", "Kirjaa valinta ja perustelu suunnitelmalomakkeen ostoskorin tallennustapa -kenttään."]
          ],
          valmis: "Päätösmuistiossa on kaksi todellista vaihtoehtoa hyötyineen ja haittoineen, päätös ja ohjaajan kommentti.",
          tallenna: "Vertailu päätösmuistioksi `project-docs/paatos-ostoskori.md`. Päätös ja perustelu suunnitelmaan."
        },
        "7-2": {
          miksi: "Kori on kaupan tila. Kun se on yhdessä storessa eikä hajallaan komponenteissa, työviikon 9 tilaus voi lukea sen yhdestä paikasta.",
          osat: [
            ["Luo haara", "Luo haara `feature/ostoskori` ja tee kaikki korin muutokset siinä. Haara pitää keskeneräisen työn erillään pääversiosta."],
            ["Kirjoita store", "Luo `stores/kori.js`: tila `rivit`, getterit `kappalemaara`, `summa` ja `onTyhja` sekä actionit `lisaa`, `poista`, `muutaMaara` ja `tyhjenna`."],
            ["Estä väärät määrät", "Estä nolla, negatiivinen ja kohtuuttoman suuri määrä selkeällä viestillä. Saman tuotteen lisäys kasvattaa määrää eikä luo uutta riviä."],
            ["Säilytä kori päivityksessä", "Toteuta valitsemasi tallennustapa niin, että kori säilyy sivun päivityksen yli."]
          ],
          valmis: "Store lisää, poistaa ja muuttaa määriä oikein, summa täsmää, ja kori säilyy sivun päivityksessä.",
          tallenna: "Store pieninä commiteina haaraan `feature/ostoskori`.",
          sanat: ["haara"]
        },
        "7-3": {
          miksi: "Asiakas näkee korista, mitä hän on tilaamassa ja mitä se maksaa. Haara ja pull request ovat ainoa tapa näyttää hallittu yhdistäminen (s13), kun teet työn yksin.",
          osat: [
            ["Rakenna korinäkymä", "Rakenna reitille `/kori` näkymä, jossa rivit, määrän muutos, poisto ja kokonaissumma luetaan storesta."],
            ["Näytä määrä navigaatiossa", "Näytä korin kappalemäärä navigaatiossa, jotta asiakas näkee korin sisällön joka sivulta."],
            ["Avaa pull request", "Avaa GitHubissa pull request haarasta `feature/ostoskori` main-haaraan. Pull request on pyyntö yhdistää haara pääversioon."],
            ["Katselmoi oma muutos", "Lue muutos rivi riviltä ennen yhdistämistä. Ratkaise mahdollinen konflikti ja kirjaa, miten ratkaisit sen."],
            ["Yhdistä", "Yhdistä pull request ja tarkista, että kori toimii main-haarassa."]
          ],
          valmis: "Korinäkymä toimii main-haarassa, pull request on yhdistetty, ja mahdollinen konflikti on ratkaistu ja kirjattu.",
          tallenna: "Pull requestin linkki ja konfliktin ratkaisu työviikon 7 päiväkirjaan.",
          sanat: ["pull request"]
        },
        "7-4": {
          miksi: "Korin rajat testataan, koska kori laskee kaupan summat. K1 on ensimmäinen kolmesta virheenkorjausketjusta, jotka osoittavat järjestelmällisen virheiden korjaamisen (p2).",
          osat: [
            ["Kirjaa tapaukset ennen ajoa", "Kirjaa testimatriisiin testitapaukset T06 ja T07 odotuksineen, esimerkiksi määrän muutos ja kori sivun päivityksen jälkeen."],
            ["Aja testit", "Aja T06 ja T07 ja kirjaa toteutuneet tulokset matriisiin."],
            ["Valitse aito havainto", "Valitse korin teon aikana havaitsemasi virhe, esimerkiksi negatiivinen määrä. Ketju tehdään aidosta havainnosta, ei keksitystä."],
            ["Kirjaa ketju K1", "Kirjaa havainto, toistamisohje, syy, korjauscommit ja uusintatesti."],
            ["Aja regressiotesti", "Testaa korjatun kohdan vierestä, että aiemmin toiminut toimii yhä, ja kirjaa tulos ketjun loppuun."]
          ],
          valmis: "T06:n ja T07:n tulokset ovat testimatriisissa, ja K1-ketju on kokonainen havainnosta regressiotestiin.",
          tallenna: "Testitapaukset tiedostoon `project-docs/testimatriisi.md`. Tulokset lyhyesti ja linkki testimatriisiin sekä K1-ketju kokonaisena työviikon 7 päiväkirjaan.",
          sanat: ["T01", "K1", "regressiotesti"]
        }
      },
      help: {
        title: "Storen rakennepohja ja getterien tarkistuslista",
        tree: "stores/kori.js\n├─ state      rivit: [{ tuoteId, nimi, hinta, maara }]\n├─ getters    kappalemaara, summa, onTyhja\n└─ actions    lisaa(tuote), poista(tuoteId),\n              muutaMaara(tuoteId, maara), tyhjenna()",
        actions: [
          "Kirjoita vertailu ja käy se ohjaajan kanssa läpi ennen toteutusta.",
          "Luo haara feature/ostoskori ja tee muutokset vain siinä.",
          "Toteuta store ja kytke komponentit siihen. Älä pidä koria komponentin omassa tilassa.",
          "Avaa pull request, lue oma muutoksesi rivi riviltä ja yhdistä vasta sen jälkeen."
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
      feature: "Asiakas voi rekisteröityä ja kirjautua sisään ja ulos, eikä kannassa ole yhtään selkokielistä salasanaa.",
      excerpt: "Tilaamista varten asiakkaan pitää rekisteröityä, ja hänen pitää päästä katsomaan omaa tilaushistoriaansa ja korjaamaan omia yhteystietojaan.",
      connection: "Työviikon 7 ostoskori on olemassa, mutta tilaus tarvitsee tekijän. Tunnukset tehdään nyt, koska salasanakäsittelyä ei voi paikata jälkikäteen, ja käyttäjän roolikenttä lisätään heti, vaikka henkilökunnan näkymät tulevat vasta työviikolla 12. Kirjautuminen on työviikon 9 tilauksen edellytys.",
      deliverable: "Käyttäjätaulu (kayttaja) roolikenttineen, rekisteröityminen ja kirjautuminen, auth-store, päätösmuistio istuntoratkaisusta ja testitapaukset T08–T09.",
      why: "Tietoturva (s11) on tämän projektin painavin yksittäinen vaatimus: verkkokaupassa on oikeiden ihmisten salasanoja muistuttavaa dataa, ja salasanakäsittely on sen ydin, jota ei paikata jälkikäteen.",
      done: "Kannassa ei näy yhtään selkokielistä salasanaa; väärä salasana ja tuntematon tunnus antavat saman yleisen virheilmoituksen; kirjautumistila säilyy sivun päivityksessä ja uloskirjautuminen tyhjentää sen.",
      record: "Kirjoita työviikon 8 merkintään: istuntoratkaisun vertailu ja päätös ohjaajan kommentilla, mitä hash-kirjastoa käytit ja miksi, sekä T08:n ja T09:n tulokset lyhyesti ja linkki testimatriisiin.",
      skills: ["tietoturva: salasanat ja istunnot (s11)", "toimintalogiikka (s7)", "lomakkeet ja käyttäjäpalaute (p6, p7)"],
      termit: ["JWT", "hash"],
      tehtavat: {
        "8-1": {
          miksi: "Istuntoratkaisu vaikuttaa jokaiseen suojattuun pyyntöön tästä eteenpäin. Tietoturva (s11) on projektin painavin vaatimus, joten ratkaisu perustellaan ennen koodia.",
          osat: [
            ["Kuvaa vaihtoehdot", "Kuvaa JWT ja eväste-sessio. JWT on allekirjoitettu tunnistetieto, jonka selain lähettää jokaisessa pyynnössä. Eväste-sessiossa tieto pysyy palvelimen muistissa."],
            ["Vertaa omin sanoin", "Kirjoita kummankin hyödyt ja haitat omin sanoin: missä tunnistetieto säilyy, miten uloskirjautuminen toimii ja mitä hyökkääjä voisi tehdä."],
            ["Päätä ohjaajan kanssa", "Käy vertailu läpi ohjaajan kanssa, tee päätös ja kirjaa ohjaajan kommentti."],
            ["Kirjaa päätös", "Kirjaa valinta ja perustelu suunnitelmalomakkeen istuntoratkaisu-kenttään."]
          ],
          valmis: "Päätösmuistiossa ovat molempien vaihtoehtojen hyödyt ja haitat omin sanoin, päätös ja ohjaajan kommentti.",
          tallenna: "Vertailu päätösmuistioksi `project-docs/paatos-istunto.md`. Päätös ja perustelu suunnitelmaan.",
          sanat: ["JWT"]
        },
        "8-2": {
          miksi: "Salasanakäsittely on verkkokaupan tietoturvan ydin, jota ei voi paikata jälkikäteen. Kantaan tallennetaan vain hash, ei koskaan salasanaa.",
          osat: [
            ["Lisää roolikenttä", "Lisää käyttäjätauluun `kayttaja` roolikenttä heti, vaikka henkilökunnan näkymät tulevat vasta työviikolla 12."],
            ["Toteuta rekisteröinti", "Toteuta rekisteröinti-endpoint, joka validoi tunnuksen ja salasanan ja palauttaa virheestä selkeän viestin."],
            ["Hashaa salasana", "Laske salasanasta hash vakiintuneella kirjastolla, esimerkiksi bcryptillä. Hash on merkkijono, josta salasanaa ei saa takaisin. Älä käytä omaa salausta."],
            ["Tarkista kanta", "Avaa kanta ja katso käyttäjätaulun rivit. Salasanan pitää näkyä hashina (esimerkiksi alkaen `$2b$`), eikä selkokielistä salasanaa saa löytyä."]
          ],
          valmis: "Rekisteröityminen luo käyttäjän roolikenttineen, ja kannassa on vain hashattuja salasanoja.",
          tallenna: "Endpoint commitilla. Kuvakaappaus kantariveistä, joissa hash näkyy, työviikon 8 päiväkirjaan.",
          sanat: ["hash"]
        },
        "8-3": {
          miksi: "Tilaus tarvitsee tekijän. Kirjautumistila ja rooli ovat työviikon 9 tilauksen ja työviikon 12 hallintanäkymien edellytys.",
          osat: [
            ["Toteuta kirjautuminen", "Toteuta `POST /api/kirjaudu`, joka tarkistaa salasanan hashia vasten ja luo istunnon valitsemallasi tavalla."],
            ["Käytä samaa virheilmoitusta", "Anna väärälle salasanalle ja tuntemattomalle tunnukselle sama yleinen virheilmoitus, jotta tunnuksen olemassaoloa ei voi päätellä."],
            ["Luo auth-store", "Tee Piniaan auth-store, jossa ovat kirjautumistila ja rooli. Tila säilyy sivun päivityksessä."],
            ["Tyhjennä uloskirjautuessa", "Toteuta uloskirjautuminen, joka tyhjentää istunnon sekä palvelimelta että selaimesta."],
            ["Rakenna lomakkeet", "Rakenna reitille `/kirjaudu` rekisteröitymis- ja kirjautumislomake labeleineen ja virheviesteineen."]
          ],
          valmis: "Kirjautumistila säilyy sivun päivityksessä, uloskirjautuminen tyhjentää sen, eikä virheilmoitus paljasta, kumpi meni väärin.",
          tallenna: "Kirjautuminen, auth-store ja lomakkeet commitilla."
        },
        "8-4": {
          miksi: "Testitapaukset todistavat, että salasana- ja istuntokäsittely toimii myös virhetilanteissa.",
          osat: [
            ["Kirjaa tapaukset ennen ajoa", "Kirjaa testimatriisiin testitapaukset T08 ja T09 odotuksineen, esimerkiksi väärä salasana ja kirjautumistila sivun päivityksen jälkeen."],
            ["Aja testit", "Aja T08 ja T09 ja kirjaa toteutunut tulos matriisiin."],
            ["Kokeile uloskirjautumista", "Kirjaudu ulos, päivitä sivu ja tarkista, ettei kirjautunut tila palaa."]
          ],
          valmis: "T08:n ja T09:n odotettu ja toteutunut tulos ovat testimatriisissa, eikä kirjautunut tila palaa uloskirjautumisen jälkeen.",
          tallenna: "Testitapaukset tiedostoon `project-docs/testimatriisi.md` commitilla. Tulokset lyhyesti ja linkki testimatriisiin työviikon 8 päiväkirjaan.",
          sanat: ["T01"]
        }
      },
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
        test: "Avaa kanta ja katso käyttäjätaulun rivit: salasanan pitää näkyä hashina (esim. alkaen $2b$), eikä yhtään selkokielistä salasanaa saa löytyä.",
        links: [["OWASP: Password Storage Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html"]]
      },
      example: "Kantarivi, jossa hash alkaa $2b$…, ja päätösmuistio, jossa JWT:n ja eväste-session hyödyt ja haitat on kirjoitettu omin sanoin.",
      notEnough: "Salasanat md5:llä tai selkokielisenä ”koska tämä on vain harjoitus”; virheilmoitus, joka paljastaa kumpi meni väärin."
    },

    9: {
      type: "feature",
      feature: "Kirjautunut asiakas tilaa korin sisällön ilman verkkomaksua ja näkee tilauksen omassa tilaushistoriassaan.",
      excerpt: "En halua tähän ensimmäiseen versioon maksunvälitystä. Tilaus riittää: minä saan tiedon tilauksesta, ja hoidan maksun asiakkaan kanssa noudon tai toimituksen yhteydessä kuten tähänkin asti.",
      connection: "Ostoskori työviikolta 7 ja tunnukset työviikolta 8 yhdistyvät nyt tilaukseksi, ja asiakkaan ostopolku on kasassa alusta loppuun. Tilaus tallennetaan transaktiona tilaushetken hinnoilla, koska hinnanmuutos ei saa muuttaa vanhoja tilauksia. Työviikolla 10 ulkopuolinen henkilö kokeilee tätä ostopolkua.",
      deliverable: "Tilauksen luonti transaktiona, tilauslomake validointeineen, tilaushistorianäkymä, perustelu k4-lisäpaketista ja testitapaukset T10–T11.",
      why: "Tilaus on kaupan liiketoimintalogiikan huipentuma ja asiakkaan ”valmiin” määritelmän ydin, ja hinnan tallentaminen tilaushetkellä on se suunnittelupäätös, joka erottaa toimivan tietomallin rikkinäisestä.",
      done: "Tilaus näkyy kannassa riveineen ja tilaushetken hinnoilla; historia näyttää vain omat tilaukset; tyhjää koria ei voi tilata eikä kirjautumaton pääse tilaamaan.",
      record: "Kirjoita työviikon 9 merkintään: miten toteutit transaktion, minkä validointiratkaisun valitsit ja miksi sekä T10:n ja T11:n tulokset lyhyesti ja linkki testimatriisiin.",
      skills: ["toimintalogiikka (s7)", "ohjelmiston toiminnot suunnitelmista (p7)", "ulkoinen komponentti perustellusti (k4)", "rakenteinen ohjelmointi (p4)"],
      tehtavat: {
        "9-1": {
          miksi: "Tilaus on kaupan liiketoimintalogiikan huipentuma. Puolikas tilaus tai jälkikäteen muuttuva hinta rikkoisi yrittäjän tiedot.",
          osat: [
            ["Ota tilaustaulut käyttöön", "Luo taulut `tilaus` ja `tilausrivi` työviikon 2 tietomallin mukaan."],
            ["Tallenna yhtenä kokonaisuutena", "Toteuta `POST /api/tilaukset`, joka tallentaa tilauksen ja sen rivit samassa transaktiossa. Virhe kesken tallennuksen peruu kaiken (ROLLBACK)."],
            ["Kopioi hinta riville", "Kopioi tuotteen hinta tilausriville tilaushetkellä. Älä viittaa tuotteen nykyhintaan."],
            ["Suojaa kirjautumisella", "Hylkää kirjautumattoman pyyntö virhekoodilla 401 (ei kirjautunut) ja tyhjän korin tilaus selkeällä virheellä."],
            ["Kokeile keskeytystä", "Aiheuta virhe kesken tallennuksen, esimerkiksi olemattomalla tuotteen id:llä, ja tarkista, ettei kantaan jäänyt puolikasta tilausta."],
            ["Jaa koodi osiin", "Pidä reitti, kantakäsittely ja validointi omissa funktioissaan tai moduuleissaan. Viittaa commit-viestissä tilaustarinan issueen."]
          ],
          valmis: "Tilaus tallentuu kantaan riveineen ja tilaushetken hinnoilla, keskeytetty tilaus ei jätä puolikasta riviä, ja kirjautumaton saa virhekoodin 401.",
          tallenna: "Endpoint commitilla, joka viittaa issueen. Transaktion toteutustapa työviikon 9 päiväkirjaan.",
          apu: {
            otsikko: "Kaavio: näin tilaus tallentuu ja muuttuu",
            images: [["assets/tilauksen-kulku.svg", "Havainnekuva tilauksen kulusta. 1 Asiakas lähettää korin ja yhteystiedot tilauslomakkeelta. 2 Rajapinta tarkistaa kirjautumisen ja korin: kirjautumaton saa virhekoodin 401 ja tyhjä kori virheen. 3 Tilaus ja kaikki rivit tallentuvat samassa transaktiossa, ja rivi saa tuotteen hinnan tilaushetkellä. Virhe kesken peruu kaiken, eikä kori tyhjene. 4 Onnistuneen tilauksen jälkeen kori tyhjenee ja tilaus näkyy asiakkaan historiassa tilassa uusi. 5 Työviikolla 13 henkilökunta merkitsee tilauksen käsitellyksi, ja sama tila näkyy asiakkaan historiassa.", "Havainnekuva tilauksen kulusta, ei kuvakaappaus valmiista kaupasta."]]
          }
        },
        "9-2": {
          miksi: "Lomake on asiakkaan viimeinen askel ennen tilausta. Validointiratkaisu on joko toinen perusteltu ulkoinen komponentti (k4) tai perusteltu oma ratkaisu.",
          osat: [
            ["Valitse validointiratkaisu", "Valitse lomakkeen validointiin perusteltu lisäpaketti, esimerkiksi vee-validate, tai perustele kirjallisesti, miksi oma validointi riittää."],
            ["Kirjaa riippuvuusvaikutus", "Kirjaa suunnitelmalomakkeen lisäpaketti-kenttään paketti, sen käyttötarkoitus, konfigurointi ja riippuvuudet, joita se tuo."],
            ["Rakenna lomake", "Rakenna tilauslomake, jossa asiakas antaa tai tarkistaa yhteystietonsa ja näkee korin summan. Kerro lomakkeessa, että maksu hoidetaan noudon tai toimituksen yhteydessä."],
            ["Tyhjennä kori vain onnistuessa", "Tyhjennä kori vasta, kun rajapinta vahvistaa tilauksen. Epäonnistunut tilaus ei saa tyhjentää koria."]
          ],
          valmis: "Tilauslomake lähettää korin rajapintaan, kori tyhjenee vain onnistuneesta tilauksesta, ja validointiratkaisu on perusteltu suunnitelmassa.",
          tallenna: "Lomake commitilla. Lisäpaketin tai oman validoinnin perustelu suunnitelmaan."
        },
        "9-3": {
          miksi: "Asiakkaan pitää nähdä omat tilauksensa, mutta ei koskaan toisen asiakkaan tilauksia.",
          osat: [
            ["Toteuta historia-endpoint", "Toteuta `GET /api/tilaukset`, joka palauttaa vain kirjautuneen käyttäjän tilaukset riveineen. Kirjautumaton saa virhekoodin 401."],
            ["Rakenna historianäkymä", "Rakenna suojatulle reitille `/tilaukset` näkymä, jossa näkyvät tilausten päivä, rivit ja summa."],
            ["Kokeile hinnanmuutosta", "Tee tilaus, muuta tuotteen hintaa kannassa ja avaa historia. Vanhan tilauksen summan pitää pysyä ennallaan."],
            ["Kokeile toisella tunnuksella", "Kirjaudu toisella testitunnuksella ja tarkista, ettei ensimmäisen käyttäjän tilaus näy."]
          ],
          valmis: "Historia näyttää vain kirjautuneen käyttäjän omat tilaukset, eikä vanhan tilauksen summa muutu hinnanmuutoksesta.",
          tallenna: "Näkymä ja endpoint commitilla. Kuvakaappaus historiasta työviikon 9 päiväkirjaan."
        },
        "9-4": {
          miksi: "Tilaus on ostopolun tärkein kohta, joten sen rajat testataan ennen kuin ulkopuolinen kokeilee kauppaa työviikolla 10.",
          osat: [
            ["Kirjaa tapaukset ennen ajoa", "Kirjaa testimatriisiin testitapaukset T10 ja T11 odotuksineen, esimerkiksi onnistunut tilaus ja tyhjän korin tilausyritys."],
            ["Aja testit", "Aja T10 ja T11 ja kirjaa toteutunut tulos matriisiin."],
            ["Viittaa commitissa", "Viittaa commit-viestissä testitapauksiin T10 ja T11."]
          ],
          valmis: "T10:n ja T11:n odotettu ja toteutunut tulos ovat testimatriisissa.",
          tallenna: "Testitapaukset tiedostoon `project-docs/testimatriisi.md` commitilla. Tulokset lyhyesti ja linkki testimatriisiin työviikon 9 päiväkirjaan.",
          sanat: ["T01"]
        }
      },
      help: {
        title: "Tilausvirran sekvenssikaavio ja transaktiomuistilista",
        tree: "kori (Pinia)\n  ↓ tilauslomake: yhteystiedot\nPOST /api/tilaukset  { rivit, yhteystiedot }\n  ↓ BEGIN\n  ├─ INSERT tilaus\n  ├─ INSERT tilausrivi × n  (hinta tilaushetkellä)\n  └─ COMMIT   (virhe → ROLLBACK)\n  ↓\nkori tyhjenee → GET /api/tilaukset (vain omat)",
        actions: [
          "Toteuta tilauksen luonti yhtenä transaktiona ja testaa myös keskeytys.",
          "Kopioi tuotteen hinta tilausriville. Älä viittaa nykyhintaan.",
          "Suojaa tilaus- ja historia-endpointit kirjautumisella: kirjautumaton saa vastaukseksi virhekoodin 401.",
          "Valitse validointiratkaisu ja kirjaa perustelu ja riippuvuusvaikutus suunnitelmaan."
        ],
        code: "TRANSAKTIOMUISTILISTA\n[ ] tilaus ja rivit samassa transaktiossa\n[ ] virhe kesken → ROLLBACK, ei puolikasta tilausta\n[ ] rivin hinta kopioidaan tilaushetkellä\n[ ] tyhjää koria ei voi tilata\n[ ] kirjautumaton saa virhekoodin 401 (ei kirjautunut), ei tyhjää tilausta\n[ ] historia palauttaa vain kirjautuneen omat tilaukset",
        test: "Tee tilaus, muuta sen jälkeen tuotteen hintaa kannassa ja avaa tilaushistoria: vanhan tilauksen summan pitää pysyä ennallaan.",
        links: [["FastAPI: Dependencies", "https://fastapi.tiangolo.com/tutorial/dependencies/"]]
      },
      example: "Tilausrivi tallentaa hinnan tilaushetkellä, ja perustelu miksi: hinnanmuutos ei saa muuttaa vanhoja tilauksia.",
      notEnough: "Tilaus, joka viittaa tuotteen nykyhintaan; lisäpaketti asennettuna ilman perustelua tai kokonaan käyttämättä jätettynä."
    },

    10: {
      type: "katselmointi",
      feature: "Ulkopuolinen henkilö on löytänyt pelin, lisännyt sen koriin ja tilannut sen julkaistussa kaupassa, ja hänen palautteensa on GitHub-issueina.",
      excerpt: "Haluaisin nähdä toimivan version jo puolivälissä, että ehdin sanoa jos jokin on pielessä.",
      connection: "Ostopolku on kasassa työviikolta 9. Nyt sitä kokeilee ihminen, joka ei tiedä, miten kauppa on rakennettu, koska palaute puolivälissä ehtii vielä muuttaa suuntaa. Hänen havaintonsa ohjaavat vaiheen 4 työjärjestystä työviikosta 11 alkaen.",
      deliverable: "Katselmointimuistio rooleineen ja sitaatteineen, vähintään kolme palauteissueta prioriteetteineen ja asiakaskielinen yhteenveto.",
      why: "Palaute puolivälissä ehtii vielä muuttaa suuntaa; viikolla 16 se ei ehdi. Tämä on myös se osa projektia, jota ei voi tuottaa tekoälyllä.",
      done: "Katselmointimuistiossa on nimetty rooli, testaajan omat sanat ja niistä erillään oma tulkinta; vähintään kolme palautekohtaa on issueina prioriteetteineen; asiakasyhteenveto on kirjoitettu.",
      record: "Kirjoita työviikon 10 merkintään: missä roolissa testaaja toimi (ei nimeä), kolme vaikuttavinta sitaattia, oma tulkintasi niistä erikseen sekä issue-numerot ja prioriteetit.",
      skills: ["version katselmointi (s3)", "asiakaslähtöinen viestintä (s2)", "ratkaisujen arviointi yhdessä (p10)"],
      tehtavat: {
        "10-1": {
          miksi: "Palaute puolivälissä ehtii vielä muuttaa suuntaa. Katselmoija ei tiedä, miten kauppa on rakennettu, joten hän näkee sen niin kuin asiakas.",
          osat: [
            ["Sovi katselmoija", "Sovi aika asiakkaan edustajan kanssa: nimetty ulkopuolinen, esimerkiksi toinen opiskelija tai työpaikkaohjaaja, ei oma ohjaaja. Kirjaa muistioon vain hänen roolinsa."],
            ["Kirjoita tehtävärata", "Kirjoita kolme tehtävää julkaistulle osoitteelle: löydä peli, lisää se koriin ja tee tilaus."],
            ["Valmistele muistio", "Kirjaa muistion alkuun testaajan rooli (ei nimeä) sekä laite, selain, julkinen osoite ja testattavan version commit."]
          ],
          valmis: "Katselmoija ja aika on sovittu, ja tehtävärata ja ympäristön tiedot ovat muistiossa valmiina.",
          tallenna: "Muistiopohja tiedostoon `project-docs/katselmointimuistio.md`."
        },
        "10-2": {
          miksi: "Testaajan omat sanat ovat aineisto, jota tekoäly ei voi tuottaa. Kun tulkinta on erillään, näet, mitä hän oikeasti sanoi.",
          osat: [
            ["Anna tehtävät", "Anna katselmoijalle tehtävät yksi kerrallaan julkaistussa kaupassa ja pyydä häntä ajattelemaan ääneen. Älä neuvo kesken suorituksen."],
            ["Kirjaa sitaatit", "Kirjoita testaajan sanat havaintotaulukon sitaattisarakkeeseen, myös epäröinnit ja väärät klikkaukset. Merkitse puhujaksi rooli, esimerkiksi asiakkaan edustaja, ei nimeä."],
            ["Kirjoita tulkinta erikseen", "Kirjoita katselmoinnin jälkeen jokaisen sitaatin viereen oma tulkintasi omaan sarakkeeseensa."]
          ],
          valmis: "Muistiossa on nimetty rooli, testaajan sanat sitaatteina ja oma tulkinta erillään niistä.",
          tallenna: "Havainnot `project-docs/katselmointimuistio.md`:hen. Kolme vaikuttavinta sitaattia työviikon 10 päiväkirjaan."
        },
        "10-3": {
          miksi: "Palaute ohjaa seuraavan vaiheen työjärjestystä. Priorisointi ohjaajan kanssa on ratkaisujen yhteisen arvioinnin työnäyte (p10).",
          osat: [
            ["Kirjaa palauteissuet", "Kirjaa vähintään kolme palautekohtaa GitHub-issueiksi. Jokaisessa on viittaus sitaattiin ja valmis kun -ehto."],
            ["Priorisoi ohjaajan kanssa", "Käy issuet läpi ohjaajan kanssa saman viikon aikana ja anna jokaiselle prioriteetti."],
            ["Kirjaa sovitut muutokset", "Kirjaa muistion loppuun sovitut muutokset: issue, prioriteetti ja valmis kun -ehto."]
          ],
          valmis: "Vähintään kolme palautekohtaa on issueina prioriteetteineen, ja sovitut muutokset ovat muistiossa.",
          tallenna: "Issueiden numerot ja prioriteetit muistioon ja työviikon 10 päiväkirjaan.",
          sanat: ["GitHub-issue"]
        },
        "10-4": {
          miksi: "Asiakas päättää, mitä kauppaan tehdään, mutta hän ei lue issueita. Asiakaslähtöinen viestintä on arvioitava taito (s2).",
          osat: [
            ["Kerro, mitä testattiin", "Kerro yleiskielellä, kuka kokeili kauppaa ja mitä hän yritti tehdä."],
            ["Kerro, mitä löytyi", "Kerro tärkeimmät havainnot ilman teknisiä termejä."],
            ["Kerro, mitä tehdään seuraavaksi", "Kerro, mitkä muutokset tehdään ensin ja mitkä jäävät myöhemmäksi."],
            ["Tarkista muistio ohjaajalla", "Pyydä ohjaajaa osoittamaan, mitkä muistion kohdat ovat testaajan sanoja ja mitkä sinun tulkintaasi. Jos hän ei erota niitä, korjaa muistio."]
          ],
          valmis: "Yhteenveto kertoo ilman teknistä jargonia, mitä testattiin, mitä löytyi ja mitä seuraavaksi tehdään, ja ohjaaja erottaa muistiosta sitaatit ja tulkinnan.",
          tallenna: "Yhteenveto muistion loppuun tiedostoon `project-docs/katselmointimuistio.md`."
        }
      },
      help: {
        title: "Katselmointimuistion pohja",
        tree: "1. Testaajan rooli (ei nimeä)\n2. Ympäristö (laite, selain, osoite, versio/commit)\n3. Tehtävärata\n   1. löydä peli · 2. lisää koriin · 3. tee tilaus\n4. Havainnot: sitaatit sanasta sanaan\n5. Oma tulkinta (erillinen osio)\n6. Sovitut muutokset: issue + prioriteetti + valmis kun\n7. Asiakaskielinen yhteenveto",
        actions: [
          "Sovi testaaja ja aika hyvissä ajoin. Tämä on viikon kriittisin järjestely.",
          "Kirjoita tehtävärata valmiiksi ennen tapaamista.",
          "Ole hiljaa kun testaaja kokeilee; kirjaa jokainen epäröinti.",
          "Käy issuet ja prioriteetit läpi ohjaajan kanssa saman viikon aikana."
        ],
        code: "HAVAINTOTAULUKKO\n\naika | tehtävä | testaajan sanat (sitaatti) | oma tulkinta | issue\n-----+---------+----------------------------+--------------+------\n     |         |                            |              |\n\nSääntö: sitaattisarakkeeseen ei kirjoiteta omaa selitystä.",
        test: "Anna muistio ohjaajalle ja pyydä häntä osoittamaan, mitkä kohdat ovat testaajan sanoja ja mitkä sinun tulkintaasi. Jos hän ei erota niitä, muistio ei ole valmis.",
        links: [["Nielsen Norman Group: Thinking Aloud", "https://www.nngroup.com/articles/thinking-aloud-the-1-usability-tool/"]]
      },
      example: "Sitaatti ”en löytänyt ostoskoria puhelimella” ja oma tulkinta ”korikuvake on liian pieni mobiilinavigaatiossa” selvästi erikseen kirjattuina.",
      notEnough: "”Testaaja tykkäsi, pieniä juttuja löytyi”, ilman sitaatteja, nimettyä roolia ja sovittuja muutoksia."
    },

    11: {
      type: "feature",
      feature: "Katselmoinnin tärkein muutos näkyy julkaistussa kaupassa, ja asiakas voi korjata omat yhteystietonsa.",
      connection: "Työviikon 10 katselmointimuistio muuttuu nyt koodiksi ja julkaistuksi versioksi, koska palautteen kirjaaminen ilman toteutusta ei riitä. Samalla asiakkaan omien tietojen muokkaus täydentää työviikon 8 tunnukset. Päivitetyt työmääräarviot kertovat, mahtuuko loppu vielä aikatauluun ennen työviikon 13 ominaisuusrajaa.",
      deliverable: "Palautemuutos issuesta tuotantoon, omien tietojen muokkauslomake, päivitetyt työmääräarviot suunnitelmassa ja virheenkorjausketju K2.",
      why: "Palautteen kirjaaminen ilman toteutusta on teatteria. Arviointi katsoo ketjun päähän asti. Arvioiden päivittäminen on lisäksi s6:n aito työnäyte, ei rituaali.",
      done: "Muutos näkyy julkaistussa versiossa ja issue sulkeutuu committiin viitaten; omia tietoja voi muokata mutta käyttäjätunnusta ei; suunnitelma-aineistossa (kayttajatarinat.md) näkyy päivitetty arvio perusteluineen.",
      record: "Kirjoita työviikon 11 merkintään: minkä palautteen valitsit ja miksi juuri sen, issue → commit → tuotanto -ketju linkkeineen, mitkä arviot muuttuivat ja miksi sekä K2-ketju kokonaisena.",
      skills: ["tehtävien suunnittelu ja arviointi (s6)", "toimintalogiikka (s7)", "asiakaslähtöisyys (s2)"],
      tehtavat: {
        "11-1": {
          miksi: "Palautteen kirjaaminen ilman toteutusta ei riitä, sillä arviointi katsoo ketjun päähän asti: issue, haara, commit, julkaisu ja testaajan kuittaus.",
          osat: [
            ["Valitse muutos", "Ota työn alle se palauteissue, jonka ohjaaja ja sinä priorisoitte korkeimmalle. Tarkista, että siinä on valmis kun -ehto."],
            ["Tee muutos haarassa", "Luo haara, esimerkiksi `fix/23-korikuvake`, ja tee muutos siinä. Viittaa commit-viestissä issueen."],
            ["Yhdistä ja julkaise", "Yhdistä haara main-haaraan ja julkaise muutos tuotantoon."],
            ["Tarkista julkaisusta", "Avaa julkinen osoite toisella laitteella ja tarkista, että muutos näkyy siellä eikä vain kehityspalvelimella."],
            ["Pyydä kuittaus", "Pyydä testaajalta kuittaus viestillä tai lyhyellä kokeilulla ja liitä se katselmointimuistioon. Sulje issue."]
          ],
          valmis: "Muutos näkyy julkaistussa versiossa, issue on suljettu committiin viitaten, ja testaajan kuittaus on muistiossa.",
          tallenna: "Ketju issuesta committiin ja tuotantolinkkiin työviikon 11 päiväkirjaan.",
          sanat: ["haara", "GitHub-issue"]
        },
        "11-2": {
          miksi: "Asiakas haluaa korjata omat yhteystietonsa, mutta toimeksiannon mukaan käyttäjätunnusta ei tarvitse voida vaihtaa. Tämä täydentää työviikon 8 tunnukset.",
          osat: [
            ["Toteuta muokkaus-endpoint", "Toteuta endpoint, joka päivittää vain kirjautuneen käyttäjän yhteystiedot ja validoi ne."],
            ["Jätä tunnus muuttumattomaksi", "Älä ota käyttäjätunnusta vastaan muokkauspyynnössä, jotta sitä ei voi vaihtaa suorallakaan rajapintakutsulla."],
            ["Rakenna lomake", "Rakenna omat tiedot -lomake, joka näyttää nykyiset tiedot ja kertoo, onnistuiko tallennus."]
          ],
          valmis: "Omia yhteystietoja voi muokata ja ne tallentuvat, mutta käyttäjätunnusta ei voi vaihtaa.",
          tallenna: "Lomake ja endpoint commitilla.",
          sanat: ["endpoint"]
        },
        "11-3": {
          miksi: "Arvion vertaaminen toteutuneeseen on tehtävien suunnittelun ja arvioinnin työnäyte (s6). Muutoshistoria näyttää, mikä arvio muuttui ja miksi.",
          osat: [
            ["Vertaa arvio ja toteuma", "Käy läpi valmiiden tarinoiden arviot tiedostossa `project-docs/kayttajatarinat.md` ja kirjaa jokaisen viereen toteutunut aika."],
            ["Kirjaa poikkeaman syy", "Merkitse, mikä arvio piti, mikä ei ja mikä oli syy. Älä päivitä kaikkia kerralla muistin varassa, vaan käytä commit-historiaa ja päiväkirjaa."],
            ["Päivitä loput arviot", "Korjaa jäljellä olevien tarinoiden arviot sen perusteella, mitä opit."],
            ["Päivitä suunnitelma", "Päivitä suunnitelmalomakkeelle muuttuneet päätökset, lataa uusi `project-docs/suunnitelma.md` ja tee commit, jotta muutoshistoria säilyy."]
          ],
          valmis: "Arvioissa näkyvät toteutunut aika ja poikkeaman syy, ja päivitys on omana committinaan.",
          tallenna: "Päivitetyt arviot ja suunnitelma commitilla `project-docs/`-kansioon."
        },
        "11-4": {
          miksi: "K2 on toinen kolmesta virheenkorjausketjusta. Aito havainto tämän viikon työstä näyttää, että osaat korjata virheen järjestelmällisesti.",
          osat: [
            ["Valitse aito havainto", "Valitse viikon aikana havaitsemasi virhe. Kirjaa, mitä näkyi, missä ja millä laitteella."],
            ["Kirjaa toisto ja syy", "Kirjoita toistamisohje vaihe vaiheelta ja se, mikä koodissa aiheutti virheen."],
            ["Korjaa ja uusintatestaa", "Tee korjauscommit ja aja sama toistamisohje uudelleen."],
            ["Aja regressiotesti", "Testaa, että korjatun kohdan vieressä aiemmin toiminut toimii yhä, ja perustele, miksi valitsit juuri sen testin."]
          ],
          valmis: "K2-ketju on kokonainen: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti.",
          tallenna: "K2-ketju kokonaisena työviikon 11 päiväkirjaan.",
          sanat: ["K1", "regressiotesti"]
        }
      },
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
        test: "Avaa julkinen osoite toisella laitteella ja tarkista, että muutos näkyy siellä, ei vain omalla kehityspalvelimella.",
        links: [["GitHub Docs: Linking a pull request to an issue", "https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue"]]
      },
      example: "Issue #23 ”korikuvake ei erotu mobiilissa” → commit → julkaisu → testaajan uusi kuittaus viestillä, ja suunnitelmaan päivitetty arvio: arvioin 0,5 päivää, meni 1,5, koska mobiilinavigaatio piti rakentaa uudelleen.",
      notEnough: "”Korjasin pikkuvikoja” ilman kytköstä katselmointimuistioon; arviot päivitetty kaikki jälkikäteen samalla kertaa muistin varassa."
    },

    12: {
      type: "feature",
      feature: "Henkilökunta lisää ja muokkaa tuotteita selaimessa, mutta asiakkaan suora kutsu hallintarajapintaan hylätään.",
      excerpt: "Minun ja myyjäni pitää pystyä lisäämään ja muokkaamaan tuotteita suoraan selaimessa (en aio soittaa koodarille aina kun saan uuden pelierän).",
      connection: "Työviikon 8 roolikenttä otetaan nyt käyttöön: henkilökunta saa oman tuotehallinnan, ja sama kanta, joka työviikolla 3 vain luettiin, saa kirjoitusoperaatiot. Hallinta suojataan sekä rajapinnassa että käyttöliittymässä, koska pelkkä napin piilottaminen ei estä suoraa kutsua. Työviikolla 13 sama suojaus kattaa myös tilausten hallinnan.",
      deliverable: "Roolipohjainen pääsynhallinta kahdella tasolla, tuotehallintanäkymä lomakkeineen, validoinnit molemmilla puolilla ja testitapaukset T12–T13.",
      why: "Pelkkä napin piilottaminen ei ole pääsynhallintaa. Tämä viikko todistaa eron käyttöliittymäsuojauksen ja oikean suojauksen välillä, ja se on s11:n toinen kivijalka salasanojen rinnalla.",
      done: "Asiakasroolilla suora URL hallintanäkymään ohjaa pois ja suora rajapintakutsu palauttaa virhekoodin 401 (ei kirjautunut) tai 403 (ei oikeuksia); henkilökunnan lisäämä tuote näkyy heti kaupan puolella.",
      record: "Kirjoita työviikon 12 merkintään: miten toteutit suojauksen molemmilla tasoilla, mitä curl-kutsu palautti ilman istuntoa ja asiakasroolilla sekä T12:n ja T13:n tulokset lyhyesti ja linkki testimatriisiin.",
      skills: ["roolipohjainen tietoturva (s11)", "tietovaraston kirjoitusoperaatiot (s9)", "ohjelmiston toteutus komponenttikirjastolla (k5)"],
      tehtavat: {
        "12-1": {
          miksi: "Pelkkä napin piilottaminen ei ole pääsynhallintaa. Oikea suojaus on rajapinnassa, ja käyttöliittymän vahti vain ohjaa käyttäjää oikeaan paikkaan.",
          osat: [
            ["Lisää testitunnukset", "Lisää seed-dataan yksi henkilökunnan ja yksi asiakkaan tunnus, jotta voit testata molemmilla rooleilla."],
            ["Tarkista rooli rajapinnassa", "Tee FastAPI-riippuvuus, esimerkiksi `vaadi_henkilokunta`, ja liitä se jokaiseen hallintaendpointiin. Se palauttaa 401 (ei kirjautunut) ilman istuntoa ja 403 (ei oikeuksia) väärällä roolilla."],
            ["Lisää reitin vartija", "Lisää vue-routeriin navigointivahti (route guard), joka ohjaa muut kuin henkilökunnan pois hallintareiteiltä."],
            ["Kokeile suoraa osoitetta", "Avaa `/hallinta/tuotteet` asiakkaana. Sinut pitää ohjata pois."]
          ],
          valmis: "Hallintaendpointit palauttavat 401 ilman istuntoa ja 403 asiakkaan istunnolla, ja asiakas ohjataan pois hallintareiteiltä.",
          tallenna: "Suojaus commitilla. Kuvaus molemmista tasoista työviikon 12 päiväkirjaan.",
          apu: {
            otsikko: "Kaavio: kaksi suojauksen tasoa",
            images: [["assets/roolisuojaus.svg", "Havainnekuva kahdesta suojauksen tasosta. Taso 1 on selaimessa: reitin vartija ohjaa asiakkaan ja kirjautumattoman pois hallintasivuilta, mutta se piilottaa vain käyttöliittymän. Taso 2 on rajapinnassa: jokainen hallintakutsu tarkistetaan. Kutsu ilman istuntoa saa vastauksen 401 ei kirjautunut, asiakkaan istunnolla 403 ei oikeuksia ja henkilökunnan istunnolla kutsu onnistuu. Suora curl-kutsu ohittaa tason 1, joten vain taso 2 suojaa kantaa.", "Havainnekuva kahden tason suojauksesta, ei kuvakaappaus valmiista kaupasta."]]
          }
        },
        "12-2": {
          miksi: "Yrittäjä ja myyjä lisäävät uuden pelierän itse selaimessa. Sama kanta, joka työviikolla 3 vain luettiin, saa nyt kirjoitusoperaatiot.",
          osat: [
            ["Toteuta kirjoitus-endpointit", "Toteuta tuotteen lisäys (POST), muokkaus (PUT) ja poisto (DELETE) roolisuojattuina endpointteina."],
            ["Rakenna hallintanäkymä", "Rakenna reitille `/hallinta/tuotteet` tuotelista ja lomake lisäykseen ja muokkaukseen."],
            ["Vahvista poisto", "Kysy vahvistus ennen poistoa, jotta tuotetta ei poisteta vahingossa."],
            ["Kokeile kaupan puolella", "Lisää tuote henkilökuntana ja tarkista, että se näkyy heti kaupan tuotelistassa."]
          ],
          valmis: "Henkilökunta voi lisätä, muokata ja poistaa tuotteita selaimessa, ja lisätty tuote näkyy heti kaupan puolella.",
          tallenna: "Näkymä ja endpointit commitilla. Kuvakaappaus hallintanäkymästä työviikon 12 päiväkirjaan.",
          sanat: ["REST", "endpoint"]
        },
        "12-3": {
          miksi: "Lomakkeen validointi auttaa käyttäjää, mutta vain backendin validointi suojaa kantaa. Suora rajapintakutsu ohittaa lomakkeen kokonaan.",
          osat: [
            ["Validoi backendissä", "Tarkista backendissä pakolliset kentät ja se, että hinta on vähintään nolla. Palauta virheestä selkeä viesti."],
            ["Validoi lomakkeessa", "Näytä samat säännöt lomakkeessa kentän vieressä ennen lähetystä."],
            ["Kokeile lomakkeen ohi", "Lähetä negatiivinen hinta suoraan rajapintaan curl-työkalulla, joka lähettää pyynnön ilman selainta. Backendin pitää hylätä se."]
          ],
          valmis: "Negatiivinen hinta ja puuttuva pakollinen kenttä hylätään sekä lomakkeessa että suorassa rajapintakutsussa.",
          tallenna: "Validoinnit commitilla."
        },
        "12-4": {
          miksi: "Testit todistavat eron käyttöliittymäsuojauksen ja oikean suojauksen välillä. Ne ovat tietoturvan (s11) toinen kivijalka salasanojen rinnalla.",
          osat: [
            ["Kirjaa tapaukset ennen ajoa", "Kirjaa testimatriisiin testitapaukset T12 ja T13 odotuksineen: asiakasrooli yrittää hallintaan selaimella ja suoralla rajapintakutsulla."],
            ["Kutsu ilman istuntoa", "Lähetä `curl -X POST` hallintaendpointiin ilman istuntoa. Odotus on 401."],
            ["Kutsu asiakkaana", "Toista kutsu asiakkaan istunnolla. Odotus on 403, ei onnistunut lisäys."],
            ["Kirjaa tulokset", "Kirjaa vastaukset matriisiin ja kokeile vielä henkilökuntana, että lisäys onnistuu."]
          ],
          valmis: "T12:n ja T13:n tulokset curl-vastauksineen ovat testimatriisissa: 401 ilman istuntoa, 403 asiakkaana ja onnistunut lisäys henkilökuntana.",
          tallenna: "Testitapaukset tiedostoon `project-docs/testimatriisi.md` commitilla. curl-kutsujen vastaukset lyhyesti ja linkki testimatriisiin työviikon 12 päiväkirjaan.",
          sanat: ["T01"]
        }
      },
      help: {
        title: "Kaksikerroksisen suojauksen tarkistuslista",
        tree: "kerros 1 · frontend\n  vue-router beforeEach → ei roolia → ohjaus pois\n  (piilottaa vain käyttöliittymän)\n\nkerros 2 · backend\n  Depends(vaadi_henkilokunta)\n  ei istuntoa      → 401\n  väärä rooli      → 403\n  (tämä on oikea suojaus)",
        actions: [
          "Toteuta ensin API-tason tarkistus, vasta sitten käyttöliittymän vahti.",
          "Lisää seed-käyttäjä molemmille rooleille testausta varten.",
          "Validoi syötteet backendissä riippumatta siitä, mitä frontend tekee.",
          "Aja testit sekä selaimella että curlilla ja tallenna vastaukset."
        ],
        code: "TESTIKIRJAUS T12\n\ncurl -X POST <api>/api/tuotteet          ilman istuntoa   → odotus 401\ncurl -X POST <api>/api/tuotteet          asiakkaan istunnolla → odotus 403\nselain: /hallinta/tuotteet asiakkaana    → odotus: ohjaus pois\nselain: /hallinta/tuotteet henkilökuntana → odotus: näkymä aukeaa\n\nHavainto: ____   Tulos: ok / ei ok   Commit: ______",
        test: "Kirjaudu asiakkaana, kopioi istuntotieto ja kutsu hallintaendpointia suoraan curlilla: vastauksen pitää olla 403, ei onnistunut lisäys.",
        links: [["OWASP: Authorization Cheat Sheet", "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"]]
      },
      example: "Testikirjaus: curl -X POST /api/tuotteet ilman istuntoa → 401; asiakkaan istunnolla → 403; henkilökunnan istunnolla → 201 ja tuote näkyy kaupan puolella.",
      notEnough: "Hallintalinkki piilotettu navigaatiosta mutta API auki kaikille; validointi vain frontendissä."
    },

    13: {
      type: "feature",
      feature: "Henkilökunta merkitsee tilauksen käsitellyksi, asiakas näkee tilan historiassaan, ja ostopolun voi kulkea pelkällä näppäimistöllä.",
      excerpt: "Minun ja myyjäni pitää pystyä lisäämään ja muokkaamaan tuotteita suoraan selaimessa ja selaamaan asiakkaiden tekemiä tilauksia, jotta näen mitä pitää kerätä hyllystä.",
      connection: "Työviikon 12 tuotehallinta saa nyt parikseen tilausten hallinnan, ja yrittäjän arkityökalu on sen jälkeen kasassa. Ominaisuuslista päättyy tähän: viikon toisella puoliskolla todennat työviikon 4 saavutettavuusperustan, koska nyt kaikki näkymät ovat olemassa. Työviikosta 14 alkaen kauppaa vain koetellaan ja korjataan, uusia ominaisuuksia ei lisätä.",
      deliverable: "Henkilökunnan tilauslistaus suodatuksineen, tilan muutos ja sen näkyminen asiakkaalle, testitapaus T14 sekä Lighthouse-raportit ennen ja jälkeen korjausten.",
      why: "Tämä sulkee asiakkaan alkuperäisen tarpeen: yrittäjän arkityökalu on kasassa. Jos tämän jälkeen lisää ominaisuuksia, projekti on rajattu väärin. Saavutettavuus on webprojektissa vaatimus, ei kaunistus, ja se tarkistetaan nyt kun kaikki näkymät ovat olemassa.",
      done: "Henkilökunta näkee kaikkien tilaukset ja asiakas vain omansa; käsitellyksi-merkintä näkyy asiakkaalle; ostopolun voi kulkea läpi pelkällä näppäimistöllä; Lighthouse-raportit ennen ja jälkeen on tallennettu ja vähintään yksi saavutettavuuspuute on korjattu.",
      record: "Kirjoita työviikon 13 merkintään: mitä tietoa henkilökunnan tilausnäkymään valitsit ja miksi, T14:n tulos molemmilla rooleilla (linkki testimatriisiin) sekä saavutettavuuslöydökset ja Lighthouse-pisteet ennen ja jälkeen.",
      skills: ["toimintalogiikka: tilat ja niiden muutokset (s7)", "rajapinnat (s10)", "roolit (s11)", "saavutettavuus"],
      tehtavat: {
        "13-1": {
          miksi: "Yrittäjä näkee tilauksista, mitä hyllystä pitää kerätä. Tämä sulkee asiakkaan alkuperäisen tarpeen.",
          osat: [
            ["Toteuta listaus-endpoint", "Toteuta roolisuojattu endpoint, joka palauttaa kaikkien asiakkaiden tilaukset uusimmat ensin ja suodattaa ne tilan mukaan: uudet ja käsitellyt."],
            ["Valitse näytettävät tiedot", "Päätä, mitä henkilökunta tarvitsee, esimerkiksi tilaaja, rivit, summa ja tila, ja kirjaa perustelu."],
            ["Rakenna listanäkymä", "Rakenna hallintaan tilausnäkymä, jossa uusimmat tilaukset ovat ensin ja tilauksen rivit avautuvat sitä napauttamalla."]
          ],
          valmis: "Henkilökunta näkee kaikkien asiakkaiden tilaukset uusimmat ensin ja voi suodattaa uudet ja käsitellyt, mutta asiakas ei pääse näkymään.",
          tallenna: "Endpoint ja näkymä commitilla. Näytettävien tietojen perustelu työviikon 13 päiväkirjaan.",
          sanat: ["endpoint"]
        },
        "13-2": {
          miksi: "Tilan muutos on toimintalogiikkaa (s7): sama tilaus näkyy eri rooleille eri tavoin, ja muutos kulkee henkilökunnalta asiakkaalle.",
          osat: [
            ["Lisää tilan muutos", "Toteuta roolisuojattu endpoint, jolla henkilökunta merkitsee tilauksen käsitellyksi. Tilat ovat uusi ja käsitelty."],
            ["Lisää painike", "Lisää tilausnäkymään Merkitse käsitellyksi -painike, joka päivittää tilan heti näkyviin."],
            ["Näytä tila asiakkaalle", "Näytä tilauksen tila asiakkaan tilaushistoriassa."],
            ["Aja testitapaus T14", "Kirjaa testimatriisiin testitapaus T14 ennen ajoa. Merkitse tilaus käsitellyksi henkilökuntana ja tarkista asiakkaana, että tila näkyy historiassa."]
          ],
          valmis: "Henkilökunnan käsitellyksi-merkintä näkyy asiakkaan historiassa, asiakas näkee yhä vain omat tilauksensa, ja T14:n tulos on testimatriisissa.",
          tallenna: "Muutokset commitilla. Testitapaus T14 testimatriisiin ja kuvakaappaukset molemmilla rooleilla työviikon 13 päiväkirjaan.",
          sanat: ["T01"],
          apu: {
            otsikko: "Kaavio: tilauksen kulku ja tila",
            images: [["assets/tilauksen-kulku.svg", "Havainnekuva tilauksen kulusta. 1 Asiakas lähettää korin ja yhteystiedot tilauslomakkeelta. 2 Rajapinta tarkistaa kirjautumisen ja korin: kirjautumaton saa virhekoodin 401 ja tyhjä kori virheen. 3 Tilaus ja kaikki rivit tallentuvat samassa transaktiossa, ja rivi saa tuotteen hinnan tilaushetkellä. Virhe kesken peruu kaiken, eikä kori tyhjene. 4 Onnistuneen tilauksen jälkeen kori tyhjenee ja tilaus näkyy asiakkaan historiassa tilassa uusi. 5 Työviikolla 13 henkilökunta merkitsee tilauksen käsitellyksi, ja sama tila näkyy asiakkaan historiassa.", "Havainnekuva tilauksen kulusta, ei kuvakaappaus valmiista kaupasta."]]
          }
        },
        "13-3": {
          miksi: "Saavutettavuus on verkkokaupassa vaatimus, ei kaunistus. Nyt kun kaikki näkymät ovat olemassa, työviikon 4 perusta voidaan todentaa. Mittaus ennen korjauksia näyttää lähtötason.",
          osat: [
            ["Aja Lighthouse ennen korjauksia", "Lighthouse on Chromen kehittäjätyökalujen mittari, joka pisteyttää muun muassa saavutettavuuden. Aja se julkaistulle osoitteelle (Accessibility, Mobile) ja tallenna raportti."],
            ["Käy näkymät läpi", "Käy jokainen näkymä läpi tarkistuslistalla: näppäimistö ja fokus, kontrasti, labelit, otsikkohierarkia, alt-tekstit sekä ilmoitukset ruudunlukijalle."],
            ["Kulje ostopolku näppäimistöllä", "Kulje tuotelistasta tilauksen lähettämiseen pelkällä näppäimistöllä ja kirjaa jokainen kohta, jossa jäät jumiin."],
            ["Kirjaa löydökset", "Kirjaa löydökset listaksi ja merkitse, mitkä korjaat ensin."]
          ],
          valmis: "Lighthouse-raportti ennen korjauksia on tallennettu, ja löydökset on kirjattu näkymä kerrallaan.",
          tallenna: "Raportti tiedostoon `project-docs/lighthouse-ennen.*`. Löydöslista työviikon 13 päiväkirjaan."
        },
        "13-4": {
          miksi: "Ennen ja jälkeen -raportit näyttävät, että korjaus paransi saavutettavuutta. Pelkkä ”paransin saavutettavuutta” ei ole työnäyte.",
          osat: [
            ["Korjaa löydökset", "Korjaa vähintään yksi saavutettavuuspuute, esimerkiksi puuttuva labelin kytkentä hakukenttään."],
            ["Kokeile näppäimistöllä uudelleen", "Kulje ostopolku uudelleen pelkällä näppäimistöllä. Jokaisen napin ja kentän pitää olla saavutettavissa, ja fokuksen pitää näkyä."],
            ["Aja Lighthouse uudelleen", "Aja Lighthouse samoilla asetuksilla ja tallenna jälkimmäinen raportti."],
            ["Kirjaa pisteet", "Kirjaa pisteet ennen ja jälkeen sekä se, mikä korjaus muutti mitäkin."]
          ],
          valmis: "Vähintään yksi puute on korjattu, ostopolun voi kulkea pelkällä näppäimistöllä, ja molemmat Lighthouse-raportit ovat tallessa.",
          tallenna: "Raportti tiedostoon `project-docs/lighthouse-jalkeen.*` ja korjaukset commitilla. Pisteet ennen ja jälkeen työviikon 13 päiväkirjaan."
        }
      },
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
      feature: "Omat hyökkäystestit eivät enää murra kauppaa, ja jokaisella tunnistetulla riskillä on ratkaisu tai perusteltu jäännösriski.",
      connection: "Työviikkojen 6, 8, 12 ja 13 tietoturvaratkaisut kootaan nyt yhteen ja koetellaan: kauppaa katsotaan hyökkääjän eikä asiakkaan silmin. Tietoturva on projektin painavin vaatimus, ja arvio ilman omia testejä olisi pelkkä mielipide. Korjattu kauppa on työviikon 15 koko testiajon lähtökohta.",
      deliverable: "tietoturva-arvio.md, hyökkäystestien kirjaukset, vähintään kaksi kovennusta, virheenkorjausketju K3 ja ohjaajan läpikäynti.",
      why: "s11 on tässä projektissa painava vaatimus: verkkokaupassa käsitellään salasanoja, henkilötietoja ja rooleja. Arvio ilman omia testejä on mielipide, ei arvio.",
      done: "tietoturva-arvio.md:ssä jokaisella tunnistetulla riskillä on ratkaisu tai perusteltu jäännösriski; vähintään yksi aito löydös on korjattu täydellisenä K3-ketjuna; ohjaajan läpikäynti on kirjattu.",
      record: "Kirjoita työviikon 14 merkintään: mitkä hyökkäystestit ajoit ja mitä ne palauttivat, mikä löydös yllätti, mitkä kovennukset teit sekä K3-ketju kokonaisena ja ohjaajan kommentit.",
      skills: ["tietoturvan arviointi (s11)", "virheiden etsintä ja korjaus (p2)", "järjestelmällinen testaus (p3)"],
      termit: ["XSS", "IDOR"],
      tehtavat: {
        "14-1": {
          miksi: "Verkkokaupassa käsitellään salasanoja, yhteystietoja ja rooleja. Järjestelmällinen lista varmistaa, ettei mikään kohta jää katsomatta.",
          osat: [
            ["Avaa arviotiedosto", "Luo `project-docs/tietoturva-arvio.md` ja kopioi siihen toteutusavun kymmenen kohdan tarkistuslista."],
            ["Käy kohdat läpi", "Kirjaa jokaisesta kohdasta nykytila: syötteet, salasanat, istunnot, roolit, virheilmoitusten tietovuoto, salaisuudet, CORS ja HTTPS."],
            ["Merkitse koeteltavat kohdat", "Merkitse kohdat, jotka pitää koetella hyökkäystestillä seuraavassa työvaiheessa."]
          ],
          valmis: "Arviotiedostossa on jokaisen tarkistuslistan kohdan nykytila.",
          tallenna: "`project-docs/tietoturva-arvio.md` commitilla."
        },
        "14-2": {
          miksi: "Arvio ilman omia testejä on mielipide. Testit näyttävät, pitävätkö työviikkojen 6, 8 ja 12 ratkaisut.",
          osat: [
            ["Testaa injektio", "Syötä hakuun `'; DROP TABLE tuote; --` ja muita erikoismerkkejä. Kirjaa syöte, odotus ja tulos."],
            ["Testaa XSS", "XSS tarkoittaa, että syöte päätyy sivulle koodina. Tallenna tuotekenttään `<script>`-tagi henkilökuntana ja avaa tuote. Tagin pitää näkyä tekstinä."],
            ["Testaa IDOR", "IDOR on aukko, jossa tunnusta vaihtamalla näkee toisen tiedot. Hae toisen testikäyttäjän tilaus omalla istunnollasi id:tä vaihtamalla. Odotus on 403 tai 404."],
            ["Testaa hallinta ilman istuntoa", "Kutsu hallintarajapintaa curlilla ilman istuntoa ja asiakkaan istunnolla. Odotus on 401 ja 403."],
            ["Kirjaa jokainen testi", "Kirjaa jokainen testi arviotiedostoon muodossa syöte → odotus → tulos."]
          ],
          valmis: "Neljä hyökkäystestiä on ajettu julkaistua versiota vasten, ja jokaisesta on kirjattu syöte, odotus ja tulos.",
          tallenna: "Hyökkäystestien kirjaukset `project-docs/tietoturva-arvio.md`:hen.",
          sanat: ["SQL-injektio", "XSS", "IDOR"]
        },
        "14-3": {
          miksi: "Löydös on arvokas vasta korjattuna ja uusintatestattuna. K3 on kolmas virheenkorjausketju, ja se tehdään aidosta tietoturvalöydöksestä.",
          osat: [
            ["Tee vähintään kaksi kovennusta", "Korjaa löydökset tai kovenna heikoimmat kohdat. Vähintään kaksi kovennusta perustuu omien testiesi löydöksiin."],
            ["Uusintatestaa", "Aja jokaisen korjauksen jälkeen sama hyökkäystesti uudelleen."],
            ["Aja regressiotesti", "Aja jokaiselle korjaukselle vähintään yksi regressiotesti, esimerkiksi oma tilaushistoria toimii edelleen."],
            ["Kirjaa ketju K3", "Kirjaa yksi aito löydös kokonaisena ketjuna: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti."]
          ],
          valmis: "Vähintään kaksi kovennusta on tehty, jokainen korjaus on uusinta- ja regressiotestattu, ja K3-ketju on kokonainen.",
          tallenna: "Korjauscommitit repositoryyn. K3-ketju kokonaisena työviikon 14 päiväkirjaan.",
          sanat: ["K1", "regressiotesti"]
        },
        "14-4": {
          miksi: "Arvio kokoaa tietoturvan (s11) työnäytteet yhteen. Ohjaajan läpikäynti varmistaa, ettei jäännösriskejä jää piiloon.",
          osat: [
            ["Kirjaa ratkaisu tai jäännösriski", "Kirjoita jokaisesta tunnistetusta riskistä joko ratkaisu tai perusteltu jäännösriski. Tyhjiä kohtia ei jää."],
            ["Varaa läpikäynti", "Varaa ohjaajalle aika ja käy arvio läpi kohta kohdalta."],
            ["Kirjaa ohjaajan huomiot", "Kirjaa läpikäynnin päivä ja ohjaajan huomiot arvion loppuun."]
          ],
          valmis: "Jokaisella riskillä on ratkaisu tai perusteltu jäännösriski, ja ohjaajan läpikäynti on kirjattu.",
          tallenna: "`project-docs/tietoturva-arvio.md` commitilla. Ohjaajan kommentit työviikon 14 päiväkirjaan."
        }
      },
      help: {
        title: "Verkkokaupan tietoturvatarkistuslista",
        tree: " 1. Injektio          parametrisoidut kyselyt kaikkialla\n 2. XSS               käyttäjän syöte ei päädy HTML:ksi\n 3. IDOR              omistajuustarkistus jokaisessa haussa\n 4. Salasanat         hash, ei omaa kryptausta\n 5. Istunnot          vanheneminen, uloskirjautuminen\n 6. Roolit            tarkistus sekä frontendissä että rajapinnassa\n 7. Virheviestit      ei vuoda tunnuksia, polkuja tai jälkiä\n 8. Salaisuudet       .env ei repositoryssä, avaimet kierrätettävissä\n 9. CORS              vain omat originit sallittu\n10. HTTPS             tuotannossa aina, ei sekasisältöä",
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
      notEnough: "”Käytin parametrisoituja kyselyitä, joten sovellus on turvallinen”, yleistoteamus ilman ajettuja testejä ja jäännösriskien pohdintaa."
    },

    15: {
      type: "laatu",
      feature: "Koko testimatriisi on ajettu julkaistua versiota vasten, ja jokaisella rivillä on tulos.",
      connection: "Työviikkojen 3–14 testitapaukset ajetaan nyt yhtenä kokonaisuutena julkaistua versiota vasten. Regressioajo kertoo, rikkoivatko saavutettavuus- ja tietoturvakorjaukset jotain, ja refaktorointi siistii koodin ennen jäädytystä. Testattu versio jäädytetään työviikolla 16 julkaisuehdokkaaksi.",
      deliverable: "Testimatriisin tulostaulukko project-docs-kansiossa, regressioajojen tulokset, refaktorointicommitit perusteluineen ja poikkeamaissuet.",
      why: "Laatuviikko erottaa valmiin tuotteen toimivasta demosta, ja regressioajo on ainoa tapa tietää, että viikkojen 13 ja 14 korjaukset eivät rikkoneet mitään.",
      done: "Matriisin jokaisella rivillä on odotettu ja toteutunut tulos julkaistua versiota vasten; refaktorointicommiteissa testit on ajettu uudelleen ja tulos kirjattu; poikkeamat ovat issueina.",
      record: "Kirjoita työviikon 15 merkintään: montako riviä meni läpi ensimmäisellä ajolla, mitkä poikkeamat löytyivät ja mihin issueihin ne menivät, sekä mitä refaktoroit ja miksi juuri sen.",
      skills: ["testaus (p3)", "ylläpidettävä koodi (p5)", "suunnittelu, toteutus ja testaus kirjastolla (k5)"],
      termit: ["refaktorointi"],
      tehtavat: {
        "15-1": {
          miksi: "Laatuviikko erottaa valmiin tuotteen toimivasta demosta. Koko matriisi julkaistua versiota vasten on testaamisen työnäyte (p3).",
          osat: [
            ["Kirjaa ajoympäristö", "Kirjaa testimatriisin alkuun julkinen osoite ja testattavan version commit."],
            ["Aja rivit", "Aja testitapaukset T01–T14 rivi riviltä julkaistua versiota vasten, ei localhostia vasten. Kirjaa jokaisen rivin toteutunut tulos ja ok tai ei ok."],
            ["Kirjaa poikkeamat issueiksi", "Kirjaa jokainen poikkeama GitHub-issueksi ja merkitse issuen numero matriisin riville."],
            ["Korjaa estävät heti", "Korjaa estävät poikkeamat heti ja aja rivi uudelleen. Muut poikkeamat priorisoidaan."]
          ],
          valmis: "Matriisin jokaisella rivillä on odotettu ja toteutunut tulos julkaistua versiota vasten, ja poikkeamat ovat issueina.",
          tallenna: "Tulostaulukko tiedostoon `project-docs/testimatriisi.md` commitilla.",
          sanat: ["T01", "GitHub-issue"]
        },
        "15-2": {
          miksi: "Saavutettavuus- ja tietoturvakorjaukset voivat rikkoa toimintoja, jotka toimivat aiemmin. Regressioajo on ainoa tapa tietää, ettei niin käynyt.",
          osat: [
            ["Listaa korjaukset", "Listaa työviikkojen 13 ja 14 korjauscommitit ja se toiminto, johon kukin koskee."],
            ["Aja regressiotestit", "Aja jokaisen korjauksen viereiset toiminnot uudelleen, esimerkiksi haku, kori, tilaus ja hallinta."],
            ["Kirjaa tulokset", "Kirjaa regressioajojen tulokset testimatriisiin omaksi osiokseen ja poikkeamat issueiksi."]
          ],
          valmis: "Jokaiselle työviikkojen 13 ja 14 korjaukselle on ajettu regressiotesti, ja tulokset ovat testimatriisissa.",
          tallenna: "Regressioajojen tulokset tiedostoon `project-docs/testimatriisi.md`.",
          sanat: ["regressiotesti"]
        },
        "15-3": {
          miksi: "Luettava koodi on ylläpidettävää (p5). Refaktorointi tehdään ennen julkaisuehdokasta, ja testit todistavat, ettei toiminta muuttunut.",
          osat: [
            ["Valitse kohteet", "Valitse vähintään yksi, enintään kaksi kohdetta: epäselvä nimeäminen, toisteisuus tai liian iso komponentti. Kirjaa valinnan perustelu."],
            ["Aja osuvat rivit ensin", "Aja ennen muutosta ne matriisin rivit, jotka koskevat muutettavaa koodia."],
            ["Refaktoroi pienin askelin", "Refaktorointi on koodin selkeyttämistä niin, että toiminta ei muutu. Tee muutos pieninä committeina ja aja osuvat testit jokaisen jälkeen."],
            ["Vertaa tuloksia", "Aja samat rivit muutoksen jälkeen ja vertaa: yhdenkään rivin tulos ei saa muuttua."]
          ],
          valmis: "Refaktorointicommiteissa testit on ajettu ennen ja jälkeen, eikä yhdenkään rivin tulos muuttunut.",
          tallenna: "Refaktorointicommitit perusteluineen. Mitä refaktoroit ja miksi työviikon 15 päiväkirjaan.",
          sanat: ["refaktorointi"]
        }
      },
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
      feature: "Ulkopuolinen testaaja pääsee rekisteröitymisestä testitilaukseen puhtaassa ympäristössä pelkän kirjoitetun ohjeen avulla.",
      excerpt: "Valmis tämä on sitten, kun oikea asiakas löytää pelin, tilaa sen puhelimellaan, ja minä näen tilauksen omassa näkymässäni ilman että kukaan neuvoo vieressä.",
      connection: "Työviikon 15 testattu versio siivotaan ja jäädytetään nyt julkaisuehdokkaaksi. Sitä koettelee ihminen, jolla on käytössään vain kirjoitettu ohje, koska vain niin selviää, toimiiko julkaisu ilman sinua. Estävät löydökset korjataan työviikolla 17 ennen versiota 1.0.",
      deliverable: "Tagi v1.0-rc1, siivottu repository, valmis käyttöönotto- ja käyttöohje, julkaisutestin pöytäkirja ja ohjeen korjauslista.",
      why: "Julkaisu, jota kukaan muu ei saa käyttöön pelkällä ohjeella, ei ole julkaisu. RC-vaihe on ainoa paikka, jossa tämä selviää ilman että v1.0 on jo myöhässä.",
      done: "Testaaja pääsi ohjeen avulla rekisteröitymisestä testitilaukseen asti ilman suullista apua, tai jokainen epäröintikohta on kirjattu ohjeen korjauslistaksi; estävät virheet on listattu erikseen.",
      record: "Kirjoita työviikon 16 merkintään: mitä siivosit repositorystä, missä roolissa testaaja toimi ja missä ympäristössä, missä kohdissa hän epäröi sekä mitkä löydökset ovat estäviä ja mitkä eivät.",
      skills: ["julkaisuprosessi (s14)", "dokumentointi (k7)", "version katselmointi (s3)"],
      termit: ["RC", "tagi"],
      tehtavat: {
        "16-1": {
          miksi: "Julkaisutestaaja saa käyttöönsä vain kirjoitetun ohjeen. Siivottu repository ja valmis ohje ovat dokumentoinnin työnäyte (k7), ja ne tehdään ennen kuin testattava versio merkitään.",
          osat: [
            ["Siivoa repository", "Poista kokeilukansiot, kommentoitu kuollut koodi ja turhat tiedostot. Tarkista, ettei `.env`-tiedostoa tai avaimia ole historiassa."],
            ["Viimeistele README", "Täydennä README:hen käyttöönotto, käynnistys, riippuvuudet, ympäristömuuttujat ja tunnetut puutteet."],
            ["Kirjoita asiakasohje", "Kirjoita lyhyt asiakasohje kaupan käyttöön: rekisteröityminen, pelin etsiminen, tilaus ja henkilökunnan näkymät."],
            ["Lisää lähteet ja lisenssi", "Kirjaa kuvien ja aineistojen lähteet `CREDITS`-tiedostoon. Lisää `LICENSE`, jos lisenssi on sovittu ohjaajan kanssa."]
          ],
          valmis: "Repositoryssa ei ole turhia tiedostoja eikä salaisuuksia, ja README, asiakasohje ja CREDITS ovat valmiit.",
          tallenna: "Siivous ja ohjeet commitilla. Mitä siivosit, työviikon 16 päiväkirjaan."
        },
        "16-2": {
          miksi: "Julkaisuehdokas (RC) on versio, jota ei enää muuteta ennen testiä. Tagi kertoo myöhemmin, mikä versio oli testattavana.",
          osat: [
            ["Jäädytä sisältö", "Päätä, että tästä eteenpäin tehdään vain estävien virheiden korjauksia, ja kirjaa jäädytys päiväkirjaan."],
            ["Merkitse tagi", "Merkitse testattava commit tagilla `v1.0-rc1` ja vie se GitHubiin komennolla `git push --tags`. Tagi on nimilappu, joka merkitsee yhden commitin historiasta."],
            ["Julkaise julkaisuehdokas", "Julkaise tagattu versio tuotantoon ja tarkista, että julkinen osoite toimii."]
          ],
          valmis: "Tagi `v1.0-rc1` osoittaa siihen versioon, joka on julkaistu ja testataan.",
          tallenna: "Tagi GitHubiin. Jäädytyksen hetki työviikon 16 päiväkirjaan.",
          sanat: ["RC", "tagi"]
        },
        "16-3": {
          miksi: "Julkaisu, jota kukaan muu ei saa käyttöön pelkällä ohjeella, ei ole julkaisu. Tämä on version katselmoinnin toinen työnäyte (s3).",
          osat: [
            ["Sovi testaaja", "Sovi nimetty ulkopuolinen testaaja, mieluiten eri henkilö kuin työviikolla 10."],
            ["Valmistele puhdas ympäristö", "Käytä toista konetta tai selainta ilman evästeitä ja aiempia kirjautumisia."],
            ["Täytä pöytäkirjan alku", "Kirjaa pöytäkirjaan testaajan rooli (ei nimeä), ympäristö ja ohjeen versio. Tehtävät ovat: rekisteröidy, etsi tuote ja tilaa."],
            ["Anna vain kirjoitettu ohje", "Anna testaajalle README ja asiakasohje. Älä kerro mitään suullisesti."]
          ],
          valmis: "Testaaja aloittaa tyhjästä selaimesta pelkän kirjoitetun ohjeen avulla, ja pöytäkirjan alku on täytetty.",
          tallenna: "Pöytäkirja tiedostoon `project-docs/julkaisutesti.md`."
        },
        "16-4": {
          miksi: "Epäröintikohdat näyttävät, mistä ohjeesta tieto puuttui. Luokittelu ratkaisee, mitä työviikolla 17 saa vielä korjata.",
          osat: [
            ["Havainnoi puuttumatta", "Älä neuvo. Kirjaa jokainen epäröinti testaajan sanoin ja se, mistä ohjeesta tieto puuttui."],
            ["Tee ohjeen korjauslista", "Kirjaa jokainen kysymys tai epäröinti ohjeen korjauslistalle."],
            ["Korjaa ohje samana päivänä", "Korjaa ohje ja pyydä testaajaa kokeilemaan korjattu kohta uudelleen."],
            ["Luokittele löydökset", "Merkitse jokainen löydös estäväksi tai ei-estäväksi. Estävät korjataan työviikolla 17."]
          ],
          valmis: "Testaaja pääsi rekisteröitymisestä testitilaukseen ilman suullista apua, tai jokainen epäröinti on korjauslistalla. Estävät löydökset on listattu erikseen.",
          tallenna: "Havainnot, korjauslista ja luokittelu tiedostoon `project-docs/julkaisutesti.md`."
        }
      },
      help: {
        title: "Julkaisutestin pöytäkirjapohja",
        tree: "1. Testaajan rooli (ei nimeä)\n2. Ympäristö: laite, selain, ”ei aiempia tunnuksia, ei evästeitä”\n3. Käytössä ollut ohje (linkki tai versio)\n4. Tehtävät: rekisteröidy → etsi tuote → tilaa\n5. Havainnot: aika, kohta, testaajan sanat\n6. Luokittelu: estävä / ei-estävä\n7. Ohjeen korjauslista",
        actions: [
          "Merkitse RC:n git-tag ennen testiä, jotta testattu versio on tunnistettavissa.",
          "Poista repositorystä turhat tiedostot, kokeilut ja unohtuneet salaisuudet.",
          "Anna testaajalle vain kirjoitettu ohje. Älä kerro mitään suullisesti.",
          "Korjaa ohje samana päivänä ja pyydä testaajaa kokeilemaan korjattu kohta uudelleen."
        ],
        code: "REPOSITORYN SIIVOUSLISTA\n[ ] ei .env-tiedostoa eikä avaimia historiassa\n[ ] ei kokeilukansioita tai kommentoitua kuollutta koodia\n[ ] README: käyttöönotto, käynnistys, riippuvuudet, muuttujat\n[ ] asiakasohje: miten kauppaa käytetään\n[ ] LICENSE, jos lisenssi on sovittu\n[ ] CREDITS: kuvien ja aineistojen lähteet\n[ ] tagi v1.0-rc1 osoittaa testattuun versioon",
        test: "Pyydä testaajaa aloittamaan tyhjästä selaimesta pelkän README:n ja asiakasohjeen avulla. Jos hän joutuu kysymään yhdenkin asian, kysymys on ohjeen korjauslistalle.",
        links: [["Git: Tagging", "https://git-scm.com/book/en/v2/Git-Basics-Tagging"]]
      },
      example: "Havainto ”ohjeesta puuttui, että tili pitää luoda ennen tilausta” → ohjeen korjaus samana päivänä → uusi läpimeno ilman kysymyksiä.",
      notEnough: "Itse tehty ”puhtaan ympäristön testi” omalla koneella, omilla evästeillä ja omalla lihasmuistilla."
    },

    17: {
      type: "julkaisu",
      feature: "Nopan Nurkka saa julkisesta osoitteesta toimivan version 1.0 ja luovutusviestin, jonka ymmärtää ilman selityksiä.",
      excerpt: "Valmis tämä on sitten, kun oikea asiakas löytää pelin, tilaa sen puhelimellaan, ja minä näen tilauksen omassa näkymässäni ilman että kukaan neuvoo vieressä.",
      connection: "Työviikon 16 julkaisutestin estävät löydökset korjataan nyt, ja muut kirjataan tunnetuiksi puutteiksi, koska jäädytys pitää. Julkaisuehdokkaasta tulee versio 1.0, joka luovutetaan asiakkaalle selkokielisellä viestillä. Työviikolla 18 osoitat tästä valmiista versiosta jokaisen osaamisvaatimuksen työnäytteen.",
      deliverable: "Tagi v1.0, julkaisumuistio, valmis dokumentaatio ja asiakkaan luovutusviesti.",
      why: "Versio, jolla on numero, muutosluettelo ja luovutus, erottaa projektin harjoituksesta: työ valmistuu, ei lopu.",
      done: "Tagi v1.0 on olemassa; julkinen osoite toimii; README:n avulla ulkopuolinen saa kehitysympäristön käyntiin; luovutusviesti ja tunnetut puutteet on kirjattu.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät virheet korjasit ja miten, mitkä jäivät tunnetuiksi puutteiksi ja miksi, sekä mitä luovutusviestissä lupasit ja mitä rajasit pois.",
      skills: ["julkaisu tuotantoon (s14)", "julkaisu asiakkaan ympäristöön (k6)", "asiakaslähtöinen viestintä (s2)"],
      tehtavat: {
        "17-1": {
          miksi: "Jäädytys pitää: vain estävät virheet korjataan, jotta testattu versio ei muutu hallitsemattomasti.",
          osat: [
            ["Korjaa estävät", "Korjaa työviikon 16 estävät löydökset yksi kerrallaan omina committeinaan."],
            ["Regressiotestaa", "Aja jokaisen korjauksen jälkeen osuvat testimatriisin rivit uudelleen."],
            ["Kirjaa tunnetut puutteet", "Kirjaa ei-estävät löydökset README:hen tunnetuiksi puutteiksi. Niitä ei korjata nyt."]
          ],
          valmis: "Estävät löydökset on korjattu ja regressiotestattu, ja ei-estävät ovat README:ssä tunnettuina puutteina.",
          tallenna: "Korjauscommitit repositoryyn. Mitä korjasit ja mitä jäi puutteiksi, työviikon 17 päiväkirjaan.",
          sanat: ["regressiotesti"]
        },
        "17-2": {
          miksi: "Dokumentaatio kirjoitetaan käyttäjälle, ei arviointia varten. README:n avulla ulkopuolisen pitää saada kehitysympäristö käyntiin ennen kuin versio 1.0 merkitään.",
          osat: [
            ["Lue README ulkopuolisena", "Lue README kuin et tuntisi projektia: käyttöönotto, käynnistys, riippuvuudet, ympäristömuuttujat ja tunnetut puutteet."],
            ["Kokeile puhtaasta kansiosta", "Kloonaa repository uuteen kansioon ja käynnistä kauppa pelkän README:n komennoilla."],
            ["Korjaa puutteet", "Korjaa jokainen kohta, jossa jouduit arvaamaan, ja päivitä asiakasohje vastaamaan versiota 1.0."]
          ],
          valmis: "Puhtaaseen kansioon kloonattu kauppa käynnistyy pelkän README:n ohjeilla.",
          tallenna: "README ja asiakasohje commitilla."
        },
        "17-3": {
          miksi: "Versio, jolla on numero, muutosluettelo ja luovutus, erottaa projektin harjoituksesta: työ valmistuu eikä vain lopu.",
          osat: [
            ["Merkitse tagi", "Merkitse julkaistava commit tagilla `v1.0` ja vie tagi GitHubiin."],
            ["Julkaise tuotantoon", "Julkaise versio 1.0 tuotanto-buildina sovittuun ympäristöön."],
            ["Tarkista julkaisu", "Avaa julkinen osoite ja kulje tärkein polku: etsi peli, tilaa se ja katso tilaus henkilökunnan näkymästä."],
            ["Kirjoita julkaisumuistio", "Kirjoita muistio: mitä on mukana, mitä rajattiin pois ja miksi, tunnetut puutteet ja seuraavat askeleet."],
            ["Perusta näyttömatriisi", "Luo `project-docs/nayttomatriisi.md`: jokaiselle 32 vaatimukselle rivi, jossa ovat tunnus, työnäytteen linkki (commit, issue, tiedosto, tagi tai kuva) ja viikko. Täytä jo tiedossa olevat linkit."]
          ],
          valmis: "Tagi `v1.0` on olemassa, julkinen osoite toimii, julkaisumuistio kertoo mukana olevat ja pois rajatut asiat, ja `nayttomatriisi.md` on perustettu.",
          tallenna: "Julkaisumuistio tiedostoon `project-docs/julkaisumuistio.md` ja matriisi tiedostoon `project-docs/nayttomatriisi.md`. Tuotanto-URL työviikon 17 päiväkirjaan.",
          sanat: ["tagi", "build"]
        },
        "17-4": {
          miksi: "Asiakas ottaa kaupan käyttöön viestin perusteella. Maksurajauksen selittäminen asiakkaalle on osa asiakaslähtöisen viestinnän työnäytettä (s2).",
          osat: [
            ["Kerro, mitä tehtiin", "Kerro ilman teknistä jargonia, mitä kauppa tekee ja mistä osoitteesta se löytyy."],
            ["Kerro, mitä rajattiin pois", "Kerro, että maksunvälitys rajattiin pois asiakkaan omalla päätöksellä, ja mitä muuta jätettiin pois."],
            ["Kerro, miten kauppaa käytetään", "Kerro, miten henkilökunta lisää tuotteita ja käsittelee tilauksia, ja viittaa asiakasohjeeseen."],
            ["Ehdota seuraavaa versiota", "Kerro, mitä seuraava versio voisi sisältää ja mitkä tunnetut puutteet on kirjattu."]
          ],
          valmis: "Luovutusviesti kertoo yleiskielellä, mitä tehtiin, mitä rajattiin pois, miten kauppaa käytetään ja mitä seuraava versio voisi sisältää.",
          tallenna: "Luovutusviesti tiedostoon `project-docs/luovutusviesti.md`."
        }
      },
      example: "Julkaisumuistio, jossa on mukana olevat ominaisuudet, pois rajatut asiat perusteluineen, tunnetut puutteet ja seuraavat askeleet, sekä luovutusviesti, jonka asiakas ymmärtää ilman selityksiä.",
      notEnough: "”Julkaisin uusimman mainin” ilman tagia, muutoslistaa ja luovutusviestiä."
    },

    18: {
      type: "naytto",
      feature: "Arvioija löytää jokaisen 32 vaatimuksen työnäytteen toimivasta linkistä, ja demo mahtuu 8–10 minuuttiin.",
      connection: "Kaikki kaupan työ on tehty, ja työviikon 17 versio 1.0 on asiakkaalla. Viimeinen viikko tekee osaamisesta löydettävää, koska osaaminen, jota arvioija ei löydä, ei tule arvioiduksi. Mitään uutta ei lisätä: jokaiselle vaatimukselle osoitetaan paikka omassa aineistossa, ja demo näyttää tärkeimmän.",
      deliverable: "Täytetty project-docs/nayttomatriisi.md toimivine linkkeineen, harjoiteltu demorunko ja itsearviointi päiväkirjan viimeisenä merkintänä.",
      why: "Osaaminen, joka ei ole löydettävissä, ei tule arvioiduksi. Viimeinen viikko on täsmälinkitystä, ei tuotantoa.",
      done: "Matriisin jokaisella rivillä on toimiva linkki; demo on ajettu kellon kanssa vähintään kerran toiselle ihmiselle; itsearviointi nimeää konkreettisia tilanteita.",
      record: "Kirjoita työviikon 18 merkintään itsearviointi: mikä onnistui, missä tarvitsit apua ja mitä tekisit seuraavassa projektissa toisin, konkreettisin esimerkein.",
      skills: ["oman toiminnan arviointi (p11)", "dokumentointi (k7)"],
      tehtavat: {
        "18-1": {
          miksi: "Osaaminen, joka ei ole löydettävissä, ei tule arvioiduksi. Viimeinen viikko on täsmälinkitystä, ei tuotantoa.",
          osat: [
            ["Täydennä matriisitiedosto", "Täydennä `project-docs/nayttomatriisi.md` jokaiselle 32 vaatimukselle: tunnus, työnäytteen linkki (commit, issue, tiedosto, tagi tai kuva) ja viikko. Käytä Näyttömatriisi-sivua hakemistona."],
            ["Linkitä täsmällisesti", "Linkitä suoraan työnäytteeseen, ei pelkkään repositoryn etusivuun. Sama työnäyte saa osoittaa useita vaatimuksia."],
            ["Testaa linkit ulkopuolisena", "Avaa jokainen linkki kirjautumattomassa selaimessa ja tarkista, että se toimii myös ulkopuoliselle."]
          ],
          valmis: "Tiedostossa `nayttomatriisi.md` on jokaiselle 32 vaatimukselle rivi, jossa on viikko ja toimiva linkki työnäytteeseen.",
          tallenna: "`project-docs/nayttomatriisi.md` commitilla. Sivun näyttömatriisin rastit ovat vain oma muistilistasi."
        },
        "18-2": {
          miksi: "Demo näyttää arvioijalle, että osaat selittää ratkaisusi. Kellon kanssa harjoiteltu demo pysyy sovitussa ajassa.",
          osat: [
            ["Rakenna demon runko", "Kokoa runko: tilauspolku tuotannossa, yksi tekninen ratkaisu, yksi korjattu bugi ketjuna, Git-historia ja AI-lokin tarkistettu käyttö."],
            ["Aja demo kellon kanssa", "Aja demo kerran yksin ja pidä se 8–10 minuutissa."],
            ["Esitä toiselle ihmiselle", "Esitä demo kerran toiselle ihmiselle. Kirjaa, mihin aika kului ja mitä hän ei ymmärtänyt."],
            ["Korjaa runko", "Korjaa runkoa sen perusteella, mitä kuulija ei ymmärtänyt."]
          ],
          valmis: "Demo on ajettu kellon kanssa vähintään kerran toiselle ihmiselle, ja runko on korjattu palautteen perusteella.",
          tallenna: "Demorunko tiedostoon `project-docs/demo.md`. Kuulijan palaute työviikon 18 päiväkirjaan."
        },
        "18-3": {
          miksi: "Oman toiminnan arviointi on arvioitava taito (p11). Konkreettinen tilanne kertoo enemmän kuin tunnelma.",
          osat: [
            ["Nimeä onnistuminen", "Kirjoita tilanne, jossa onnistuit, ja se, mikä teki siitä onnistumisen."],
            ["Nimeä avun tarve", "Kirjoita tilanne, jossa tarvitsit apua, ja se, keneltä sait sen."],
            ["Kerro, mitä tekisit toisin", "Kirjoita, mitä tekisit seuraavassa projektissa toisin ja miksi."]
          ],
          valmis: "Itsearviointi nimeää konkreettisia tilanteita, ei tunnelmia.",
          tallenna: "Itsearviointi projektipäiväkirjan viimeisenä merkintänä (työviikko 18)."
        },
        "18-4": {
          miksi: "Arvioija tarvitsee aineiston yhdestä paikasta, ja linkkien pitää toimia myös hänelle.",
          osat: [
            ["Tarkista palautuspaketti", "Tarkista, että julkaistu versio 1.0, repository, `project-docs`-aineisto, `nayttomatriisi.md` ja demorunko ovat koossa."],
            ["Vie päiväkirja ja AI-loki", "Lataa koko projektipäiväkirja AI-lokeineen ja vie se tiedostoksi `project-docs/projektipaivakirja.md` commitilla."],
            ["Luovuta", "Luovuta aineisto ohjaajan kanssa sovitulla tavalla ja tarkista, että kaikki linkit toimivat myös ulkopuoliselle."]
          ],
          valmis: "Aineisto on luovutettu sovitulla tavalla, ja kaikki linkit toimivat ulkopuoliselle.",
          tallenna: "Luovutuksen tapa ja ajankohta työviikon 18 päiväkirjaan."
        }
      },
      example: "Itsearviointi, joka nimeää tilanteen: ”istuntoratkaisun vertailussa tarvitsin ohjaajan apua ymmärtääkseni evästeiden ja tokenien eron. Ensi kerralla varaan vertailuille enemmän aikaa”.",
      notEnough: "”Opin paljon uutta ja projekti sujui hyvin”, itsearviointi ilman yhtään konkreettista esimerkkiä.",
      paivat: [
        ["Sisältöjäädytys", "Viimeinen hyväksytty versio."],
        ["Aineisto", "Päiväkirja, testit ja linkit koossa."],
        ["Harjoittelu", "8–10 min demo ja itsearviointi."],
        ["Puskuri", "Tarkistus toisen henkilön kanssa."],
        ["Luovutus", "Matriisi linkitetty, aineisto luovutettu."]
      ]
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
      ["Päivä 1", "Sisältöjäädytys: viimeinen hyväksytty versio"],
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
      p0: "Pakollinen perusversio (P0): tuotteet kategorioittain, sanahaku, ostoskori, rekisteröityminen ja kirjautuminen, tilaus, tilaushistoria, omien tietojen muokkaus, tuotehallinta ja tilausten selaus. Maksunvälitys on rajattu pois asiakkaan päätöksellä. Sitä ei toteuteta osittainkaan.",
      roolit: [
        ["Opiskelija", "Toteuttaa kaupan, tekee omat päätöksensä perusteluineen, ajaa testit ja kirjaa työnäytteet. Sopii katselmointien käytännöt itse, kun katselmoijat on nimetty."],
        ["Ohjaaja / opettaja", "Vastaa kysymyslistaan viikolla 1 ja toimii asiakkaan sijaisena, kunnes asiakkaan edustaja on nimetty: vastaanottaa kysymyslistat ja tilannekatsaukset ja hyväksyy rautalangat viikolla 2. Lisäksi ohjaaja priorisoi palautteen viikolla 10, käy tietoturva-arvion läpi viikolla 14 ja tarkistaa laadun tarkistuspisteissä."],
        ["Asiakkaan edustaja (viikko 10)", "Nimetty ulkopuolinen henkilö (toinen opiskelija, työpaikkaohjaaja tai muu sovittu), ei oma ohjaaja. Esittää katselmoinnissa asiakasta, kokeilee julkaistua kauppaa tehtäväradalla ja antaa palautteen omin sanoin. Repositoryyn kirjataan vain rooli."],
        ["Julkaisutestaaja (viikko 16)", "Nimetty ulkopuolinen, mieluiten eri henkilö kuin viikolla 10. Ottaa kaupan käyttöön puhtaassa ympäristössä pelkän kirjoitetun ohjeen avulla ilman suullista apua."],
        ["Arvioija", "Arvioi näytön 32 vaatimusta työnäytteiden ja demon perusteella; käyttää opiskelijan tiedostoa project-docs/nayttomatriisi.md hakemistona."]
      ],
      tarkistuspisteet: [
        [1, "Toimeksianto ja ympäristö", "Kysymyslista on tehty ja vastattu; repo on olemassa; molemmat kehityspalvelimet käynnistyvät. Katselmoijien etsintä on käynnistetty."],
        [2, "Suunnitelma ja rajaus", "Käyttäjätarinat prioriteetteineen, tietomalli, tietovarastovertailu, teemapäätös ja vähintään kahdeksan issueta. Rautalankojen hyväksyntä kirjattu."],
        [5, "Ensijulkaisu", "Julkinen osoite toimii toisella laitteella; alustavertailu on kirjattu; salaisuudet eivät ole repossa."],
        [9, "Ostopolku valmis", "Tilaus tallentuu transaktiona tilaushetken hinnoilla; historia näyttää vain omat tilaukset; k4-lisäpaketin perustelu on kirjattu."],
        [10, "Asiakaskatselmointi", "Nimetty ulkopuolinen on testannut; sitaatit ja oma tulkinta ovat muistiossa erillään; palaute on issueina ja priorisoitu."],
        [13, "Ominaisuuslista päättyy", "Henkilökunnan tilausnäkymä toimii ja saavutettavuustarkistus on tehty Lighthouse-raportein. Tästä eteenpäin ei lisätä uusia ominaisuuksia."],
        [14, "Tietoturva-arvio", "Arvio läpikäydään ohjaajan kanssa: jokaisella riskillä on ratkaisu tai perusteltu jäännösriski; K3-ketju on kokonainen."],
        [16, "Julkaisuehdokas", "Tagi v1.0-rc1 on merkitty, repo on siivottu ja ulkopuolinen on tehnyt testitilauksen pelkän ohjeen avulla puhtaassa ympäristössä."],
        [18, "Näyttö", "project-docs/nayttomatriisi.md:n jokaisella rivillä on toimiva linkki; demo on harjoiteltu kellon kanssa; itsearviointi on kirjoitettu."]
      ],
      tyonaytteet: {
        p1: ["1", "Kehitysympäristö pystyssä: VS Code, Vite- ja FastAPI-kehityspalvelimet, selaimen kehittäjätyökalut; käynnistyskomennot READMEssä ja päiväkirjassa"],
        p2: ["7, 11, 14", "Kolme täydellistä virheenkorjausketjua (K1 ostoskori, K2 palautemuutos, K3 tietoturvalöydös): havainto → toisto → syy → korjauscommit → uusintatesti → regressiotesti"],
        p3: ["15", "14 tapauksen testimatriisi (odotettu tulos kirjattu ennen ajoa) ajettuna julkaistua versiota vasten; uusintatestaukset korjausten jälkeen"],
        p4: ["9", "Tilauslogiikka jaettuna moduuleihin ja funktioihin (reitit, kantakerros, validointi); frontissa komponentti- ja store-jako, ei yhtä jättitiedostoa"],
        p5: ["15", "Refaktorointicommitit perusteluineen: nimeäminen, toisteisuuden poisto, komponentin pilkkominen; testit vihreinä ennen ja jälkeen"],
        p6: ["4", "Näkymät toteutettu viikon 2 hyväksytyistä rautalangoista; responsiivisuuden taitekohdat ja mobiilitestaus oikealla puhelimella"],
        p7: ["9", "Tilaus ja tilaushistoria toteutettu käyttäjätarinoiden ja hyväksymiskriteerien mukaan; kytkentä tarina → issue → commit"],
        p8: ["2", "Tehtävät sovittu ohjaajan kanssa ja kirjattu issueiksi; tehtävien tila näkyvänä koko projektin ajan (issue-taulu)"],
        p9: ["7, 8", "Kaksi kirjattua vertailua ja yhteispäätöstä ohjaajan kanssa: korin tallennus (Pinia+localStorage vs. backend) ja istuntoratkaisu (JWT vs. eväste-sessio)"],
        p10: ["10", "Asiakaskatselmoinnin muistio: täyttääkö toteutus tarinat, mitä muutetaan ennen seuraavaa versiota; priorisoitu ohjaajan kanssa"],
        p11: ["18", "Itsearviointi konkreettisin tilantein: mikä onnistui, missä tarvitsi apua, mitä tekisi toisin"],
        s1: ["2", "Toimeksiannosta johdetut käyttäjätarinat, kysymyslista ja vastaukset, rajaus (maksaminen pois) kirjattuna"],
        s2: ["10, 17", "Katselmoinnin asiakaskielinen yhteenveto ja viikon 17 luovutusviesti, ilman teknistä jargonia; maksurajauksen selitys asiakkaalle"],
        s3: ["10, 16", "Kaksi katselmointia: asiakaskatselmointi puolivälissä ja RC:n julkaisutestaus; muistiot rooleineen ja sitaatteineen"],
        s4: ["2", "Käyttäjätarinoiden P0/P1/P2-priorisointi perusteluineen; P0 = toimiva ostopolku ilman maksua"],
        s5: ["2", "Tarinat pilkottu issueiksi (≥8 kpl), yksi issue ≈ 0,5–1 päivän työ; issue-taulu koko projektin ajan"],
        s6: ["11", "Työmääräarviot ja niiden päivitys toteutuneen perusteella: suunnitelman muutoshistoria näyttää mikä arvio muuttui ja miksi"],
        s7: ["9, 13", "Tilauksen muodostus transaktiona, tilaushetken hinnat, tilausten tilat ja niiden muutokset, roolikohtaiset näkymät"],
        s8: ["2", "Kirjallinen vertailu SQLite / JSON / PostgreSQL datan rakenteen, käyttötilanteen ja laajuuden perusteella; sovitun valinnan (SQLite) perustelu suunnitelmassa"],
        s9: ["3, 12", "Luku (tuotelista, haku) ja kirjoitus (tilaukset, tuotehallinnan lisäys/muokkaus/poisto) SQLite-kantaan hallitusti"],
        s10: ["6", "Oma REST-rajapinta: haku kyselyparametrilla, virhetilanteiden käsittely fetchissä, lataus/tyhjä/virhe-tilat käyttöliittymässä"],
        s11: ["8, 12, 14", "Salasanojen hashaus ja istuntopäätös (vko 8), kaksikerroksinen roolisuojaus (vko 12), tietoturva-arvio omine hyökkäystesteineen: injektio, XSS, IDOR (vko 14)"],
        s12: ["1", "Git koko projektin ajan: tarkoituksenmukaiset commitit, etärepository, sovitut haarakäytännöt; commit-historia näyttöaineistona"],
        s13: ["7", "Ostoskori toteutettu haarassa feature/ostoskori ja yhdistetty pull requestilla; mahdollinen konflikti ratkaistu ja kirjattu"],
        s14: ["5, 17", "Ensijulkaisu vertailtuun alustaan ympäristömuuttujineen (vko 5); RC- ja v1.0-julkaisut tageineen ja julkaisumuistioineen (vkot 16–17)"],
        k1: ["1, 5", "Vue 3 + Vite -projektin luonti ja konfigurointi; kehitys- ja tuotantoasetusten ero (API-osoite, build) dokumentoituna"],
        k2: ["2", "Selvitys project-docs/vue-pinia-selvitys.md (suunnitelman komponenttijako linkittää siihen): omat P0-tarinat taulukkona, mitä Vue/Pinia ratkaisee (komponentit, reaktiivisuus, tila) ja missä tarvitaan muuta (backend rooleille ja istunnoille, SPA:n rajoitteet)"],
        k3: ["3, 7", "Komponentit, propsit, computed-arvot ja Pinia-store (kori, auth) käytössä; itse rakennettu tuotelistanäkymä ilman valmista UI-kirjastoa"],
        k4: ["4, 9", "vue-router perusteltuna (reititys) ja yksi oma perusteltu lisäpaketti (esim. vee-validate); käyttötarkoitus, konfigurointi ja riippuvuusvaikutus kirjattu"],
        k5: ["15", "Komponenttirakenne ja vastuut suunnitelmassa, tarinoiden mukainen toteutus ja koko testimatriisi kirjastopohjaista sovellusta vasten"],
        k6: ["17", "Tuotanto-build ja v1.0-julkaisu sovittuun ympäristöön; luovutus asiakkaalle ohjeineen"],
        k7: ["16", "README: käyttöönotto, käynnistys, riippuvuudet, ympäristöasetukset, tunnetut puutteet; ulkopuolisen julkaisutestillä todennettu ohje"]
      },
      dokumentaatio: {
        kayttajalle: "README (käyttöönotto, käynnistys, riippuvuudet, ympäristömuuttujat, tunnetut puutteet) ja lyhyt asiakasohje kaupan käyttöön. Todennetaan viikon 16 julkaisutestillä: ulkopuolinen pääsee ohjeella rekisteröitymisestä testitilaukseen.",
        arviointiin: "Projektipäiväkirja, AI-loki, suunnitelma muutoshistorioineen, testimatriisin tulostaulukko, kolme virheenkorjausketjua, kaksi katselmointimuistiota, tietoturva-arvio, Lighthouse-raportit sekä issue- ja commit-historia.",
        vaatimus: "Dokumentaatio kirjoitetaan käyttäjälle, ei arviointia varten. Arviointiaineisto kootaan erikseen tiedostoon project-docs/nayttomatriisi.md: perustetaan viikolla 17 ja viimeistellään viikolla 18."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline: se saa selittää virheilmoituksia, ehdottaa testitapauksia ja tarkistaa ratkaisuja. Merkittävä käyttö kirjataan AI-lokiin muodossa ymmärrä, tarkista, testaa, kirjaa.",
        "Itse tehtävä ydin: komponenttirakenne, saavutettavuusratkaisut ja CSS. Tietoturvaratkaisut (salasanakäsittely, istunnot ja roolitarkistukset) pitää ymmärtää ja perustella itse. Viikon 3 tuotelistanäkymä rakennetaan kokonaan itse ilman valmista UI-komponenttikirjastoa.",
        "Projekti on suunniteltu kestämään kielimallin käyttöä: jokaisella viikolla on oma konteksti (oma teema ja seed-data, oma tietomalli), oma artefakti (testiajot, kuvakaappaukset, commit-historia, julkaisuloki) tai nimetty ihminen (ohjaaja, katselmoija, julkaisutestaaja). Yhtään viikkoa ei voi kuitata kopioimalla tehtävänantoa kielimalliin."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "Julkinen osoite, jossa v1.0 toimii, sekä git-tagit v1.0-rc1 ja v1.0."],
        ["Repository", "Lähdekoodi, README, asiakasohje, CREDITS ja mahdollinen LICENSE; ei salaisuuksia historiassa."],
        ["project-docs", "Suunnitelma, projektipäiväkirja, AI-loki, testimatriisin tulokset, katselmointimuistiot, tietoturva-arvio, Lighthouse-raportit ja luovutusviesti."],
        ["Näyttömatriisi", "project-docs/nayttomatriisi.md: 32 vaatimusta, joilla jokaisella on viikko ja toimiva linkki työnäytteeseen."],
        ["Demo", "8–10 minuutin esitys: tilauspolku tuotannossa, yksi tekninen ratkaisu, yksi korjattu bugi ketjuna, Git-historia ja AI-lokin tarkistettu käyttö."]
      ],
      huomiot: [
        ["Päivätön aikataulu", "Viikot 1–18 ovat työviikkoja opiskelijan omasta aloituksesta. Sivustolla ja paperiaineistossa ei ole kalenteripäivämääriä, joten sama aineisto kelpaa eri aloitusajankohtiin."],
        ["Katselmoijat ovat viikon 1 järjestelykysymys", "Etsintä käynnistetään heti viikolla 1 ja nimeäminen tehdään viimeistään ennen viikkoa 10. Kunnes asiakkaan edustaja on nimetty, ohjaaja toimii asiakkaan sijaisena ja vastaanottaa kysymyslistat ja tilannekatsaukset. Repositoryyn kirjataan henkilöistä vain rooli. Viikon 10 ja 16 katselmoija ei saa olla oma ohjaaja."],
        ["Maksunvälitys on rajattu pois asiakkaan suulla", "Rajaus on toimeksiannossa asiakkaan omana päätöksenä. Sitä ei toteuteta osittainkaan, ja rajauksen selittäminen asiakkaalle on osa s2:n työnäytettä."],
        ["Testiluokkien jakauma on tietoinen poikkeama", "14 testitapausta jakautuvat 6 normaalia, 4 rajaa ja 4 virhetilannetta. Virhetilanneluokka täydentyy viikon 14 hyökkäystesteillä (injektio, XSS, IDOR, auktorisointi), jotka kirjataan samalla tarkkuudella matriisin jatkoksi."],
        ["Viikon 13 jälkeen ei uusia ominaisuuksia", "Ominaisuuslistan päättyminen sanotaan opiskelijalle ääneen viikon 13 kortissa. Jos uusia ominaisuuksia ilmaantuu viikoilla 14–17, rajaus on pettänyt ja se on syytä ottaa puheeksi."],
        ["Avoimet asiat ovat ohjaajan pöydällä", "Lisenssi, repositoryn julkisuus ja tekijänimi (alaikäisellä huoltajan suostumus), oppilaitoksen linja julkaisualustasta, katselmoijien nimeäminen ja perusteversion siirtymäsääntö (OPH-6216-2025). Tyhjä kenttä suunnitelmassa on oikea tulos, kunnes asia on sovittu."]
      ]
    }
  }
};
