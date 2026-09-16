/*
 * sisalto.js – Valokaaren koko sisältödata.
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
  slug: "valokaari",
  nimi: "Valokaari",
  vuosi: 2026,
  paivaton: true,
  viikot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  tiivisSivupalkki: true,
  aloitusNappi: "Aloita Valokaaren teko",
  apuOtsikko: "Tarvitsen toteutusapua",

  paletti: {
    aksentti: "#c2410c",
    aksenttiTumma: "#9a3412",
    taulukkoSavy: "#fdece3",
    riviSavy: "#fef7f2"
  },

  /* ---- paperiaineiston kielisäädöt: päivätön aikataulu ---- */
  lataukset: {
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title
  },

  /* ---- vaiheet ---- */
  vaiheet: [
    { tunnus: "A", lyhyt: "Ydin", otsikko: "Ydin: työkalut, suunnitelma, julkaistu runko ja oikea päivänvalodata", viikot: [1, 2, 3, 4, 5], vari: "#a16207" },
    { tunnus: "B", lyhyt: "Ominaisuudet", otsikko: "Ominaisuudet: kaavio, monta paikkaa, tooltip, leikkauspisteet ja asiakaskatselmointi", viikot: [6, 7, 8, 9, 10], vari: "#c2410c" },
    { tunnus: "C", lyhyt: "Valmiiksi", otsikko: "Valmiiksi: vuosivalinta ja palautemuutos, mobiili ja saavutettavuus, tietoturva, testaus ja laatu", viikot: [11, 12, 13, 14, 15], vari: "#9f1239" },
    { tunnus: "D", lyhyt: "Julkaisu", otsikko: "Julkaisu: julkaisuehdokas ja julkaisutestaus, v1.0 ja näyttö", viikot: [16, 17, 18], vari: "#1e3a8a" }
  ],

  /* ---- viikkonavigaation lyhyet nimet ---- */
  viikkoNimet: {
    1: "Aloitus",
    2: "Suunnitelma",
    3: "Julkaistu runko",
    4: "Päivänvalolaskenta",
    5: "Paikkakuntahaku ja rajapinta",
    6: "Ensimmäinen kaavio",
    7: "Monta paikkaa",
    8: "Tooltip ja ääripäät",
    9: "Leikkauspisteet",
    10: "Asiakaskatselmointi",
    11: "Vuosivalinta ja palautemuutos",
    12: "Mobiili ja saavutettavuus",
    13: "Tietoturva-arvio",
    14: "Testaus",
    15: "Laatu ja dokumentaatio",
    16: "Julkaisuehdokas",
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

  /* ---- sanasto: vain tämän projektin oikeasti käyttämät termit ----
     Jokainen termi selitetään myös ensimmäisen käytön kohdassa. Sanasto on
     kertausta varten, ei selityksen korvike. */
  termisto: [
    { termi: "repository", nimi: "Git-repository, repo", selite: "Projektin versionhallittu kansio GitHubissa. Kaikki työnäytteet ovat repositoryssa, eivät tällä sivulla.", viikko: 1 },
    { termi: "commit", nimi: "Versionhallintaan tallennettu muutos", selite: "Yksi nimetty muutoskokonaisuus, jolla on viesti ja tunnus. Pieni commit on helpompi lukea ja perua kuin suuri.", viikko: 1 },
    { termi: "push", nimi: "Muutosten vienti etärepositoryyn", selite: "Komento, joka siirtää omat commitit GitHubiin. Vasta pushin jälkeen työ on työnäyte.", viikko: 1 },
    { termi: "backend", nimi: "Palvelinpuoli", selite: "Se osa sovellusta, joka ajetaan palvelimella. Valokaaressa PHP-koodi, joka laskee päivänvalon ja palauttaa sen rajapinnan kautta.", viikko: 1 },
    { termi: "frontend", nimi: "Selainpuoli", selite: "Se osa sovellusta, joka ajetaan käyttäjän selaimessa. Valokaaressa React-sovellus, joka piirtää kaavion.", viikko: 1 },
    { termi: "API", nimi: "Rajapinta (application programming interface)", selite: "Sovittu tapa, jolla selain pyytää tietoa palvelimelta. Valokaaren rajapinta on yksi osoite: GET /api/daylight?city=Helsinki&year=2026.", viikko: 1 },
    { termi: "JSON", nimi: "Tekstipohjainen tietomuoto", selite: "Muoto, jossa rajapinta palauttaa tiedon: avaimia ja arvoja aaltosulkeissa. Sekä PHP että selain osaavat lukea ja kirjoittaa sitä.", viikko: 1 },
    { termi: "kehityspalvelin", nimi: "Viten kehityspalvelin", selite: "Paikallinen palvelin, joka näyttää React-sovelluksen selaimessa ja päivittää sen heti, kun tallennat tiedoston. Käynnistyy komennolla npm run dev.", viikko: 1 },
    { termi: "GitHub-issue", nimi: "Tehtäväkortti GitHubissa", selite: "Yksi rajattu työtehtävä, jolla on otsikko, kuvaus, hyväksymiskriteerit ja työmääräarvio. Bug-issue on tunnisteella bug merkitty virhehavainto.", viikko: 2 },
    { termi: "käyttäjätarina", nimi: "Vaatimus käyttäjän näkökulmasta", selite: "Muotoa ”Matkailijana haluan … jotta …”. Jokaisella tarinalla on 2–4 hyväksymiskriteeriä, joista tiedät, milloin se on valmis.", viikko: 2 },
    { termi: "P0", nimi: "Pakollinen ydin", selite: "Toiminnot, joiden on valmistuttava ennen mitään lisäominaisuuksia. Valokaaressa oikea päivänvalodata, usea paikka, virheilmoitus, tooltip ja ääripäiden korostus.", viikko: 2 },
    { termi: "P1", nimi: "Tärkeä jatko", selite: "Tehdään, kun P0 toimii ja on testattu. Valokaaressa leikkauspisteet, vuosivalinta, mobiili ja saavutettavuus.", viikko: 2 },
    { termi: "P2", nimi: "Valinnainen lisä", selite: "Saa jäädä projektin ulkopuolelle, jos aika ei riitä. Poisjättö on rajauspäätös, ei epäonnistuminen.", viikko: 2 },
    { termi: "rautalanka", nimi: "Käyttöliittymän luonnos", selite: "Yksinkertainen piirros siitä, mitä näkymässä on ja missä. Ei värejä, ei lopullista ulkoasua. Toteutus tarkistetaan sitä vasten.", viikko: 2 },
    { termi: "viikkopalaveri", nimi: "Ohjaajan kanssa joka viikko", selite: "10 minuuttia: sovitut tehtävät, arviot ja edellisen viikon toteuma kirjataan issueihin, ohjaajan nimi ja päivä päiväkirjaan. Tämä on tiimissä sopimisen työnäyte.", viikko: 2 },
    { termi: "proxy", nimi: "Välityspalvelin kehityksessä", selite: "Viten asetus, joka ohjaa selaimen /api-pyynnöt kehityspalvelimelta PHP-palvelimelle. Selain näkee yhden osoitteen, vaikka palvelimia on kaksi.", viikko: 3 },
    { termi: "build", nimi: "Tuotantobuild", selite: "Komento npm run build kääntää React-sovelluksen valmiiksi tiedostoiksi client/dist-kansioon. Kansio ei mene Gitiin: build tehdään julkaisualustalla.", viikko: 3 },
    { termi: "fetch", nimi: "Selaimen tapa hakea tietoa", selite: "JavaScriptin funktio, joka lähettää pyynnön rajapintaan ja palauttaa vastauksen. Valokaaressa kaikki fetch-kutsut ovat api.ts-tiedostossa.", viikko: 3 },
    { termi: "komponentti", nimi: "React-komponentti", selite: "Itsenäinen käyttöliittymän pala, joka saa tietoa propseina ja voi pitää omaa tilaa. HealthStatus on ensimmäinen, DaylightChart ja LocationList seuraavat.", viikko: 3 },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "T tarkoittaa testitapausta ja numero yksilöi sen: T01 on ensimmäinen, T16 viimeinen. Odotettu tulos kirjataan aina ennen ajoa.", viikko: 4 },
    { termi: "yksikkötesti", nimi: "Yhden funktion testi", selite: "Testi, joka kutsuu yhtä funktiota tunnetulla syötteellä ja vertaa tulosta odotettuun. Ajetaan komennolla ilman selainta. PHP:ssä PHPUnit tai oma testiskripti, TypeScriptissä Vitest.", viikko: 4 },
    { termi: "Composer", nimi: "PHP:n paketinhallinta", selite: "Työkalu, joka asentaa PHP-kirjastot (esimerkiksi PHPUnitin) ja ajaa skriptit komennolla composer test. Vastaa npm:ää PHP-puolella.", viikko: 4 },
    { termi: "bug-issue", nimi: "Virhehavainto issueksi", selite: "Jokainen havaittu virhe kirjataan heti GitHub-issueksi tunnisteella bug: mitä odotit, mitä tapahtui. Virheenkorjausketjut otetaan tältä listalta.", viikko: 4 },
    { termi: "geokoodaus", nimi: "Nimestä koordinaateiksi", selite: "Paikkakunnan nimen muuttaminen leveys- ja pituusasteiksi. Valokaaressa se tehdään omasta paikkakuntatiedostosta; ulkoinen geokoodausrajapinta on vaihtoehto.", viikko: 5 },
    { termi: "curl", nimi: "Komentorivin osoitehakija", selite: "Komento, joka hakee osoitteen ilman selainta ja tulostaa vastauksen. Sillä testataan rajapintaa suoraan: curl \"http://localhost:8000/api/daylight?city=Helsinki&year=2026\".", viikko: 5 },
    { termi: "ominaisuushaara", nimi: "Feature branch", selite: "Oma Git-haara yhdelle ominaisuudelle. Työ tehdään haarassa ja yhdistetään main-haaraan pull requestilla, kun se on valmis.", viikko: 6 },
    { termi: "pull request", nimi: "Yhdistämispyyntö", selite: "GitHubin pyyntö yhdistää haara pääversioon. Siinä näkyvät muutokset ja kuvaus. Katselmoit sen itse ennen yhdistämistä. Työviikolla 11 kahden pull requestin yhdistäminen tuottaa merge-konfliktin, joka ratkaistaan käsin.", viikko: 6 },
    { termi: "hook", nimi: "React-hook", selite: "Funktio, jolla komponentti käyttää tilaa (useState) tai sivuvaikutuksia (useEffect). Oma hook useLocations kokoaa paikkojen tilan yhteen paikkaan.", viikko: 7 },
    { termi: "tooltip", nimi: "Vihjeruutu", selite: "Ruutu, joka avautuu hiiren tai kosketuksen alle kaaviossa ja näyttää päivän, paikan ja keston, esimerkiksi ”21. kesäkuuta · Rovaniemi · 23 h 59 min”.", viikko: 8 },
    { termi: "Vitest", nimi: "TypeScript-testiajuri", selite: "Viten kanssa toimiva testityökalu, joka ajaa format.ts- ja intersections.ts-moduulien yksikkötestit komennolla npm test.", viikko: 8 },
    { termi: "leikkauspiste", nimi: "Kahden paikan yhtä pitkä päivä", selite: "Päivä, jona kahden paikan päivänvalo on yhtä pitkä tai lähes yhtä pitkä (erotus alle toleranssin). Peräkkäiset osumat yhdistetään yhdeksi merkiksi.", viikko: 9 },
    { termi: "toleranssi", nimi: "Sallittu erotus", selite: "Kuinka monta minuuttia kahden paikan päivänvalo saa erota, jotta päivä lasketaan leikkauspisteeksi. Oma päätös, joka perustellaan ja testataan.", viikko: 9 },
    { termi: "merge-konflikti", nimi: "Yhdistämisen ristiriita", selite: "Syntyy, kun kaksi haaraa on muuttanut samaa kohtaa tiedostossa. Git pysähtyy ja pyytää valitsemaan, mikä versio jää. Ratkaisu tehdään käsin ja committataan.", viikko: 11 },
    { termi: "Lighthouse", nimi: "Selaimen laatumittari", selite: "Chromen kehittäjätyökalujen raportti, joka mittaa saavutettavuuden, suorituskyvyn ja parhaat käytännöt. Ajetaan ennen ja jälkeen korjausten.", viikko: 12 },
    { termi: "XSS", nimi: "Cross-site scripting", selite: "Hyökkäys, jossa käyttäjän syöte (esimerkiksi paikan nimi) suoritetaan koodina sivulla. Testataan syöttämällä script-tagi nimeksi ja tarkistamalla, että se näkyy tekstinä.", viikko: 13 },
    { termi: "CORS", nimi: "Selaimen alkuperärajoitus", selite: "Selain estää pyynnöt toiseen osoitteeseen, ellei palvelin salli niitä. Yhden palvelimen mallissa asetusta ei tarvita; kahden palvelimen mallissa PHP:n pitää sallia frontendin osoite.", viikko: 13 },
    { termi: "regressiotesti", nimi: "Vanha testi uudelleen", selite: "Korjauksen jälkeen aiemmat testit ajetaan uudelleen, jotta korjaus ei riko aiemmin toiminutta. Viimeinen askel jokaisessa virheenkorjausketjussa.", viikko: 14 },
    { termi: "refaktorointi", nimi: "Rakenteen parannus ilman toiminnan muutosta", selite: "Koodi järjestetään uudelleen niin, että se toimii samalla tavalla mutta on helpompi lukea ja ylläpitää. Testit todistavat, että toiminta ei muuttunut.", viikko: 15 },
    { termi: "RC", nimi: "Release candidate, julkaisuehdokas", selite: "Lähes valmis versio, jota ulkopuolinen testaa ennen lopullista julkaisua. v1.0-rc1 on ensimmäinen julkaisuehdokas.", viikko: 16 },
    { termi: "Git-tag", nimi: "Nimetty versio historiassa", selite: "Merkki, joka kiinnittää tietyn commitin versionumeroon, esimerkiksi v1.0-rc1 tai v1.0. Tagista tehdään GitHubissa release.", viikko: 16 },
    { termi: "savutesti", nimi: "Nopea tarkistus julkaisun jälkeen", selite: "Muutama tärkein testipolku ajetaan julkaistulle versiolle heti julkaisun jälkeen: paikan lisäys, tooltip, vuosivalinta.", viikko: 17 }
  ],

  /* ---- projektipäiväkirja ---- */
  paivakirja: {
    tiedostonimi: "projektipaivakirja.md",
    polku: "project-docs/projektipaivakirja.md",
    vihjeet: {
      work: "Kerro konkreettiset tiedostot, funktiot, komponentit, testit ja komennot.",
      reason: "Kerro päätös, vaihtoehdot, perustelu omalla datallasi ja mitä opit.",
      evidence: "Esim. commit-linkki, GitHub-issue #12, testitapaus T05 tai kuvakaappaus.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla kerralla?"
    }
  },

  /* ---- tekninen suunnitelma ---- */
  suunnitelma: {
    otsikko: "Tekninen suunnitelma ja rajapintasopimus",
    tiedostonimi: "suunnitelma.md",
    pakolliset: [
      "nimi", "tekija", "tavoite", "kohde", "laskentatapa", "tietolahde",
      "julkaisumalli", "kaaviokirjasto", "komponenttijako", "leikkauspiste", "rajaus"
    ],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      `# Tekninen suunnitelma – ${arvo("nimi", "_(nimi puuttuu)_")}`,
      "",
      `Tekijä: ${arvo("tekija")} · Päivitetty: ${pvm}`,
      "",
      "Projekti: Valokaari, päivänvalon pituus Suomen paikkakunnilla. Suunnitelma",
      "täytetään työviikolla 2 ja päivitetään aina, kun päätös muuttuu.",
      "",
      "## 1. Tavoite (esitäytetty toimeksiannosta)",
      "",
      "Lapin matkailuyrityksen verkkosivulle upotettava sovellus, joka näyttää",
      "kaaviona päivän pituuden Suomen paikkakunnilla vuoden jokaisena päivänä:",
      "käyttäjä kirjoittaa paikkakunnan, lisää sen kaavioon, vertaa useita paikkoja,",
      "näkee tooltipissa päivän ja keston ja erottaa kaamoksen ja yöttömän yön",
      "yhdellä katseella.",
      "",
      "### Tavoite omin sanoin",
      "",
      arvo("tavoite"),
      "",
      "## 2. Asiakas ja käyttäjät (esitäytetty)",
      "",
      "Revontuli Travelin yrittäjä (tilaaja) ja yrityksen asiakkaat, jotka",
      "suunnittelevat Lapin-matkaa. Käyttäjä ei ole tekninen eikä lue numerotaulukoita.",
      "",
      "### Käyttäjät ja heidän tärkein tarpeensa omin sanoin",
      "",
      arvo("kohde"),
      "",
      "## 3. P0-rajaus (esitäytetty)",
      "",
      "**P0:** paikkakunnan nimi koordinaateiksi · päivänvalo joka päivälle rajoissa",
      "0–1440 min · karkausvuosi oikein · usea paikka yhteisellä asteikolla · paikan",
      "poisto · virheilmoitus tuntemattomasta paikasta · tooltip · kaamos ja yötön yö",
      "korostettuina.",
      "",
      "**P1:** leikkauspisteet, vuosivalinta, mobiilinäkymä ja saavutettavuus.",
      "**P2:** kuvan jako linkkinä, paikkojen tallennus selaimeen.",
      "",
      "### Mitä EI toteuteta",
      "",
      arvo("rajaus"),
      "",
      "## 4. Rajapintasopimus (esitäytetty luonnos, tarkennetaan työviikolla 3)",
      "",
      "`GET /api/daylight?city=Helsinki&year=2026` palauttaa JSON-olion: `location`",
      "(name, latitude, longitude), `year` ja `days` (date, daylightMinutes).",
      "Virheet JSONina: 400 virheellinen syöte, 404 paikkaa ei löydy, 502 ulkoinen",
      "palvelu ei vastaa. Tarkka sopimus: `project-docs/api-sopimus.md`.",
      "",
      "## 5. Teknologia ja työtapa (esitäytetty)",
      "",
      "PHP 8.2+ ilman kehystä (backend), React + TypeScript + Vite (frontend),",
      "Tailwind CSS työviikolta 7, kaaviokirjasto oman vertailun mukaan. Laskenta,",
      "muotoilu ja leikkauspisteet omissa moduuleissaan. Lomake ja paikkalista",
      "rakennetaan alusta itse. Oletusjulkaisumalli on yksi PHP-palvelin, build",
      "alustalla. Viikkopalaveri ohjaajan kanssa joka viikko, bug-issuet työviikolta 4,",
      "ominaisuushaarat ja pull requestit työviikolta 6.",
      "",
      "## 6. Omat päätökset perusteluineen",
      "",
      "### Laskentatapa (oma auringonnousuyhtälö / PHP:n date_sun_info / kirjasto) – työviikot 2 ja 4",
      "",
      arvo("laskentatapa"),
      "",
      "### Paikkakuntatiedon muoto (JSON-tiedosto / SQLite) – työviikot 2 ja 5",
      "",
      arvo("tietolahde"),
      "",
      "### Julkaisumalli (yksi palvelin / frontend erillään) – työviikko 3",
      "",
      arvo("julkaisumalli"),
      "",
      "### Kaaviokirjasto – työviikko 6",
      "",
      arvo("kaaviokirjasto"),
      "",
      "### Komponenttijako ja tilanhallinta – työviikot 7 ja 15",
      "",
      arvo("komponenttijako"),
      "",
      "### Leikkauspisteen määritelmä ja toleranssi – työviikko 9",
      "",
      arvo("leikkauspiste"),
      "",
      "## 7. Avoimet asiat – ohjaaja omistaa",
      "",
      "Näitä ei päätetä itse eikä tekoälyllä. Tyhjä kenttä on oikea tulos siihen",
      "asti, kun asia on sovittu.",
      "",
      onTäytetty("alustalinja")
        ? `- **Julkaisualusta ja ohjaajan testattu polku:** ${arvo("alustalinja")}`
        : "- **Julkaisualusta ja ohjaajan testattu polku:** EI VIELÄ ANNETTU, avoin asia (ohjaaja antaa ennen työviikkoa 1, viimeistään työviikolla 2; tarvitaan työviikon 3 julkaisuun)",
      onTäytetty("lisenssi")
        ? `- **Lisenssi:** ${arvo("lisenssi")}`
        : "- **Lisenssi:** EI VIELÄ SOVITTU, avoin asia (kysytään työviikolla 1, päätös viimeistään työviikolla 8)",
      onTäytetty("julkisuus")
        ? `- **Repositoryn julkisuus, tekijänimi ja alaikäisen huoltajan suostumus:** ${arvo("julkisuus")}`
        : "- **Repositoryn julkisuus, tekijänimi ja alaikäisen huoltajan suostumus:** EI VIELÄ SOVITTU, avoin asia (kuittaus työviikolla 1)",
      onTäytetty("katselmoijat")
        ? `- **Katselmoijien roolit (työviikot 10 ja 16):** ${arvo("katselmoijat")}`
        : "- **Katselmoijien roolit (työviikot 10 ja 16):** EI VIELÄ NIMETTY, avoin asia (viimeistään työviikolla 8)",
      onTäytetty("perusteversio")
        ? `- **Perusteversion siirtymäsääntö:** ${arvo("perusteversio")}`
        : "- **Perusteversion siirtymäsääntö (OPH-6216-2025):** EI VIELÄ VAHVISTETTU, avoin asia",
      onTäytetty("arviointi")
        ? `- **Arvioinnin järjestelyt (työviikko 18):** ${arvo("arviointi")}`
        : "- **Arvioinnin järjestelyt (työviikko 18):** EI VIELÄ SOVITTU, avoin asia",
      "",
      "---",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
      "Päivitä, kun ohjaaja vastaa avoimiin asioihin.",
      ""
    ].join("\n")
  },

  /* ---- viikkojen ohjaava sisältö ---- */
  viikkoOhjeet: {
    1: {
      type: "pohjustus",
      feature: "PHP:n sisäänrakennettu palvelin ja React + Vite -runko käynnistyvät omalla koneella, ja julkinen repository on olemassa ja tarkistettu.",
      connection: "Työ alkaa työkaluista ja repositorysta: Git-historia on itsessään työnäyte, ja se alkaa ensimmäisestä työpäivästä. Valokaaressa on kaksi ajoympäristöä, PHP ja Node, ja molempien pitää toimia, ennen kuin mitään muuta kannattaa aloittaa.",
      deliverable: "Asennetut työkalut versioineen, julkinen repository tarkistuslistoineen, käynnistyvä React + Vite -runko, PHP-palvelin, joka palauttaa JSON-vastauksen, kansiorakenne ja kysymyslista ohjaajalle.",
      why: "Ilman toimivaa ympäristöä ja repoa yksikään myöhempi viikko ei tuota näyttöaineistoa: Git-historia on versionhallinnan työnäyte, ja sen pitää alkaa päivästä 1. Kysymyslista on ainoa tapa saada rajaus ratkeamaan kysymällä, ei arvaamalla.",
      done: "Nimetty toinen henkilö (luokkakaveri tai ohjaaja) saa rungon käyntiin pelkän README:n avulla; ohjaaja on kuitannut julkisen repon tarkistuslistan ja hänet on lisätty repositoryn yhteistyökumppaniksi; kysymyslistassa on vähintään kuusi kysymystä.",
      record: "Kirjoita työviikon 1 merkintään: asennetut työkalut versioineen, repositoryn osoite, ensimmäisen commitin tunnus, kysymyslistan kysymykset, kuka sai rungon käyntiin ohjeellasi ja mitkä julkisuusasiat jäivät avoimiksi.",
      skills: ["kehitysympäristö", "Git", "npm ja Vite", "PHP:n sisäänrakennettu palvelin"],
      termit: ["repository", "commit", "push", "backend", "frontend", "API", "JSON", "kehityspalvelin"],
      steps: [
        ["Työkalut ja versiot.", "Asenna PHP 8.2 tai uudempi, Node LTS, Git ja VS Code. Kirjaa jokaisesta versionumero ja tarkistuskomento README:hen (`php -v`, `node -v`, `npm -v`, `git --version`). Pelkkä ”asensin” ei riitä työnäytteeksi."],
        ["Repository ja julkisuustarkistus.", "Luo GitHub-repository ja käy läpi julkisen repon tarkistuslista: ei henkilötietoja, ei koulun tunnisteita, ei muiden nimiä. Sovi tekijänimestä ohjaajan kanssa. Jos olet alaikäinen, huoltajan suostumus hoidetaan ohjaajan kautta. Lisää ohjaaja yhteistyökumppaniksi (collaborator): hän tarvitsee oikeuden työviikoilla 11 ja 15."],
        ["React + Vite -runko käyntiin.", "Luo `client/`-kansioon React + TypeScript -projekti Vitellä ja käynnistä kehityspalvelin komennolla `npm run dev`. Ota kuvakaappaus selaimessa näkyvästä rungosta. Tailwindia ei asenneta vielä: se tulee työviikolla 7, kun sitä oikeasti tarvitaan."],
        ["PHP-palvelin käyntiin.", "Luo `server/public/index.php`, joka palauttaa `{\"status\":\"ok\"}` JSON-muodossa oikealla sisältötyypillä, ja käynnistä PHP:n sisäänrakennettu palvelin komennolla `php -S localhost:8000 -t server/public`. Avaa osoite selaimessa ja ota kuvakaappaus."],
        ["Toimeksianto ja kysymyslista.", "Lue toimeksianto läpi ja alleviivaa pakolliset asiat. Kirjoita jokaisesta epäselvästä kohdasta kysymys ohjaajalle tiedostoon `project-docs/kysymykset.md`. Tavoite on vähintään kuusi kysymystä, esimerkiksi: mitä tapahtuu, jos kaksi kuntaa on samannimisiä?"],
        ["Commit, push ja toisen henkilön testi.", "Tee ensimmäinen commit, jonka viesti kertoo projektin perustamisesta, ja vie se etärepositoryyn (push). Pyydä nimettyä toista henkilöä kloonaamaan repo ja käynnistämään molemmat palvelimet pelkän README:n avulla. Kirjaa, mihin hän pysähtyi."]
      ],
      help: {
        title: "Perusta kehitysympäristö ja repository",
        tree: "valokaari/\n├─ client/               React + TypeScript + Vite\n│  ├─ src/\n│  └─ vite.config.ts\n├─ server/\n│  ├─ public/index.php   palauttaa {\"status\":\"ok\"}\n│  └─ src/               Daylight.php, Geocoder.php (tulevat vk 4–5)\n├─ project-docs/         suunnitelma, päiväkirja, muistiot\n├─ README.md\n└─ .gitignore            node_modules/, client/dist/, vendor/, .env",
        actions: [
          "Tarkista versiot: php -v, node -v, npm -v, git --version. Kirjaa README:n taulukkoon.",
          "Luo React-runko: cd client && npm create vite@latest . -- --template react-ts, sitten npm install ja npm run dev.",
          "Luo server/public/index.php: header('Content-Type: application/json'); echo json_encode(['status' => 'ok']);",
          "Käynnistä PHP: php -S localhost:8000 -t server/public ja avaa http://localhost:8000.",
          "Luo GitHub-repository, aja git init, tee ensimmäinen commit ja vie se GitHubiin (git push)."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] php -v, node -v, npm -v ja git --version kirjattu README:hen\n[ ] npm run dev avaa React-rungon selaimessa\n[ ] php -S palauttaa {\"status\":\"ok\"} osoitteessa localhost:8000\n[ ] kansiot client/, server/ ja project-docs/ olemassa\n[ ] .gitignore estää node_modules/, client/dist/, vendor/ ja .env\n[ ] repositoryssa ei ole henkilötietoja eikä koulun tunnisteita\n[ ] tekijänimi sovittu ja ohjaaja lisätty collaboratoriksi\n[ ] kysymyslistassa vähintään 6 kysymystä\n[ ] ensimmäinen commit viety etärepositoryyn (push)\n[ ] toinen henkilö sai molemmat palvelimet käyntiin README:llä",
        test: "Kloonaa repository itse toiseen kansioon ja käynnistä molemmat palvelimet pelkän README:n ohjeilla, ennen kuin annat sen toiselle.",
        links: [
          ["Vite: Getting Started", "https://vite.dev/guide/"],
          ["React: Quick Start", "https://react.dev/learn"],
          ["PHP: sisäänrakennettu palvelin", "https://www.php.net/manual/en/features.commandline.webserver.php"],
          ["GitHub Docs: repositoryn luominen", "https://docs.github.com/en/repositories"]
        ]
      },
      example: "Versiotaulukko README:ssä: työkalu → versio → tarkistuskomento (PHP 8.3.6 → php -v). Mukana kuvakaappaukset React-rungosta ja PHP:n JSON-vastauksesta, commit ”Perusta projekti: client, server ja project-docs” ja merkintä ”Aino sai palvelimet käyntiin, pysähtyi kohtaan php -S, koska portti puuttui ohjeesta”.",
      notEnough: "”Asensin kaikki ja kaikki toimii” ilman versionumeroita, kuvakaappauksia, ensimmäistä committia ja toisen henkilön kokeilua: mitään ei voi todentaa jälkikäteen.",
      paivat: [
        ["Tarve", "Lue toimeksianto ja poimi asiakkaan ydinongelma: numeroita ei hahmoteta, kuva tarvitaan. Kirjaa kysymyslista ohjaajalle."],
        ["Työkalut", "Asenna PHP, Node ja Git. Kirjaa versiot README:hen."],
        ["Kaksi palvelinta", "Luo React-runko ja PHP:n index.php. Käynnistä molemmat ja ota kuvakaappaukset."],
        ["Repository", "Luo GitHub-repository, tee julkisuustarkistukset, lisää ohjaaja yhteistyökumppaniksi (collaborator), commit ja push."],
        ["Toisen henkilön testi", "Anna README toiselle henkilölle ja kirjaa, mihin hän pysähtyi. Korjaa ohje."]
      ]
    },

    2: {
      type: "pohjustus",
      feature: "Hyväksytty tekninen suunnitelma: ohjaajan vastaukset kysymyslistaan, priorisoidut käyttäjätarinat, kaksi vertailua omalla koeajolla, rautalangat, komponenttijako ja issue-taulu työmääräarvioineen.",
      excerpt: "Kaamos ja yötön yö ovat meidän myyntiargumenttimme: haluan, että ne erottuvat kuvasta yhdellä katseella.",
      connection: "Työviikon 1 kysymyslista saa vastaukset, ja toimeksianto muuttuu priorisoiduiksi käyttäjätarinoiksi ja päätöksiksi, joiden varaan koko loppuprojekti rakentuu. Tämä on ensimmäinen kirjattu viikkopalaveri ohjaajan kanssa.",
      deliverable: "project-docs/suunnitelma.md, ohjaajan vastaukset kysymyksiin, käyttäjätarinat P0/P1/P2-luokin, laskentatapavertailu koeajon tulosteella, paikkakuntatiedon muodon vertailu, rautalangat kolmesta näkymästä, komponenttijako ja issue-taulu arvioineen.",
      why: "Ilman priorisointia ominaisuuslista paisuu; ilman omaa koeajoa laskentatavan valinta on arvaus. Toiminnot jaetaan kolmeen luokkaan: P0 on pakollinen ydin, P1 tärkeä jatko ja P2 valinnainen lisä. Keskeneräinen P0 painaa arvioinnissa enemmän kuin puuttuva P2.",
      done: "project-docs/suunnitelma.md on repossa ja ohjaaja on hyväksynyt rajauksen kirjatulla kommentilla; ohjaajan vastaukset kysymyksiin on kirjattu nimellä ja päivällä; jokaisella P0-tarinalla on GitHub-issue, hyväksymiskriteerit ja arvio tunteina; koeajon tuloste on päiväkirjassa.",
      record: "Kirjoita työviikon 2 merkintään: ohjaajan vastaukset omin sanoin, P0-rajaus, laskentatavan ja paikkakuntatiedon muodon valinta perusteluineen, koeajon tuloste ja linkki issue-tauluun sekä ohjaajan hyväksyntään.",
      skills: ["vaatimusmäärittely", "priorisointi", "vertailu omalla datalla", "työn ositus"],
      termit: ["GitHub-issue", "käyttäjätarina", "P0", "P1", "P2", "rautalanka", "viikkopalaveri"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      steps: [
        ["Ohjaajan vastaukset.", "Pidä viikkopalaveri ohjaajan kanssa ja kirjaa jokainen vastaus kysymyslistaan: nimi, päivä, vastaus omin sanoin. Vastaus, jota ei kirjattu, ei ole työnäyte."],
        ["Käyttäjätarinat.", "Kirjoita toimeksiannosta käyttäjätarinat (vaatimus käyttäjän näkökulmasta) muodossa ”Matkailijana haluan … jotta …” ja anna jokaiselle 2–4 hyväksymiskriteeriä. Esimerkki: ”Matkailijana haluan lisätä Utsjoen kaavioon, jotta näen, milloin siellä on kaamos” → kriteerit: nimi hyväksytään isoilla ja pienillä kirjaimilla; kaamosjakso näkyy 0 minuutin tasona; sama paikka ei tule kahdesti."],
        ["Priorisointi ohjaajan kanssa.", "Merkitse jokainen tarina P0, P1 tai P2 yhdessä ohjaajan kanssa (hän toimii asiakkaan sijaisena). Kirjaa perustelut, älä vain kirjaimia."],
        ["Laskentatavan vertailu ja koeajo.", "Vertaa kolmea tapaa laskea päivänvalo: oma auringonnousuyhtälö, PHP:n sisäänrakennettu `date_sun_info` ja valmis kirjasto. Aja koeajo komennolla `php -r` Helsingille 21.6. ja liitä tuloste päiväkirjaan. Vertaa tulosta Ilmatieteen laitoksen tai timeanddate-sivun arvoon. Päätä ohjaajan kanssa, mikä toteutetaan ja mikä jää referenssiksi."],
        ["Paikkakuntatiedon muoto.", "Vertaa JSON-tiedostoa ja SQLite-tietokantaa oman hakusi kannalta: miten haet nimellä, miten normalisoit ä:n ja ö:n, kuinka paljon dataa on (noin 300 kuntaa). Ulkoinen geokoodausrajapinta on vaihtoehto vain perustellusti: se tuo verkkovirheet ja käyttörajat mukaan. Datan hankinta ei ole tämän viikon työ: ohjaaja tarjoaa kuntaluettelon varapolkuna työviikolla 5."],
        ["Rautalangat, komponenttijako ja issuet.", "Piirrä rautalangat (yksinkertaiset näkymäluonnokset) lomakkeesta, paikkalistasta ja kaaviosta. Nimeä komponentit ja kunkin vastuu yhdellä lauseella. Pilko P0-tarinat GitHub-issueiksi, noin puolen tai yhden päivän kokoisiksi, ja anna jokaiselle työmääräarvio tunteina. Täytä suunnitelmalomake ja lataa suunnitelma.md repositoryyn."]
      ],
      help: {
        title: "Suunnitelman ja koeajon pohjat",
        tree: "project-docs/\n├─ kysymykset.md          kysymys → ohjaajan vastaus (nimi, päivä)\n├─ suunnitelma.md         ladataan tältä sivulta\n├─ kayttajatarinat.md     tarina, kriteerit, P-luokka\n├─ vertailu-laskenta.md   3 tapaa × kriteerit + koeajon tuloste\n├─ vertailu-tietomuoto.md JSON vs. SQLite omalla haulla\n└─ rautalangat/           lomake.png, lista.png, kaavio.png",
        actions: [
          "Koeajo: php -r 'print_r(date_sun_info(strtotime(\"2026-06-21\"), 60.17, 24.94));' ja muunna aikaleimat kellonajoiksi.",
          "Vertailukriteerit laskentatavalle: tarkkuus referenssiin nähden, käytös napapiirin pohjoispuolella (0 ja 1440), oma ymmärrys, testattavuus.",
          "Vertailukriteerit tietomuodolle: haku nimellä, ä/ö-normalisointi, tiedoston koko, päivitettävyys, riippuvuudet.",
          "Issue-pohja: otsikko verbillä, kuvaus, hyväksymiskriteerit listana, arvio tunteina, P-luokka tunnisteena."
        ],
        code: "KÄYTTÄJÄTARINAN POHJA\nMatkailijana haluan [toiminto], jotta [hyöty].\nHyväksymiskriteerit:\n- [havaittava ehto 1]\n- [havaittava ehto 2]\nPrioriteetti: P0 / P1 / P2 – perustelu: …\nArvio: … h\n\nVERTAILUTAULUKON POHJA\n| Kriteeri | Vaihtoehto A | Vaihtoehto B | Vaihtoehto C |\n| tarkkuus vs. referenssi | | | |\n| Utsjoki 21.12. → 0? | | | |\n| oma ymmärrys | | | |\n| testattavuus | | | |\nValinta ja se, mikä valinnasta jää huonommaksi: …",
        test: "Anna suunnitelma ohjaajalle ja pyydä häntä nimeämään yksi P0-tarina, jonka hyväksymiskriteereistä ei voi päätellä, milloin se on valmis. Korjaa se ennen hyväksyntää."
      },
      example: "Vertailutaulukko: ”date_sun_info antaa Helsingille 21.6. 18 h 55 min, referenssi 18 h 56 min; Utsjoella 21.6. se palauttaa true, ei aikaa → tarvitsen rajatarkistuksen joka tapauksessa. Valitsen oman yhtälön, koska haluan ymmärtää polaarijaksot, ja käytän date_sun_infoa referenssinä.” Ohjaajan kommentti issue #3:ssa: ”Rajaus hyväksytty 2. työviikolla, ML.”",
      notEnough: "Tekoälyn kirjoittama yleinen vertailu (”SQLite on kevyt ja suosittu”) ilman omaa koeajoa, omaa hakua ja ohjaajan kirjattua kommenttia."
    },

    3: {
      type: "feature",
      feature: "Sovellus, jossa on yksi oma React-komponentti, ja PHP-rajapinnan /api/health ovat julkisessa osoitteessa; kehityksessä Viten proxy ohjaa /api-kutsut PHP:hen; rajapintasopimus ja React-selvitys ovat repossa.",
      excerpt: "Valmis tarkoittaa minulle tätä: sovellus on verkossa osoitteessa, jonka voin laittaa sivuillemme.",
      connection: "Tyhjä sivu tuotannossa voittaa valmiin sivun localhostissa. Julkaisuputki rakennetaan nyt, kun sovelluksessa ei ole vielä mitään rikottavaa, ja samaa putkea käytetään julkaisuehdokkaaseen ja v1.0:aan asti. Ensimmäinen oma komponentti pohjustaa työviikon 6 kaaviotyön.",
      deliverable: "Julkinen osoite, jossa sovellus ja /api/health vastaavat; HealthStatus-komponentti; vite.config.ts:n proxy-asetus; julkaisumallin perustelu; project-docs/api-sopimus.md; project-docs/react-vite-selvitys.md taulukkona omista P0-tarinoista.",
      why: "Julkaisu on projektin todennäköisin kaatumiskohta, koska PHP:tä ei voi ajaa staattisilla alustoilla. Siksi se tehdään ensimmäisenä ja siihen on varapolku. Yksi palvelin, joka tarjoilee sekä buildatun sovelluksen että rajapinnan samasta osoitteesta, säästää CORS-asetukset, kaksi ympäristöä ja kaksi nukkuvaa ilmaispalvelua.",
      done: "Toinen henkilö avaa julkisen osoitteen ja /api/health omalla laitteellaan ja näkee HealthStatus-komponentin ilmoittavan ”ok”; alustan lokinäkymästä on kuvakaappaus; build tehdään alustalla ja client/dist on gitignoressa; api-sopimus.md ja selvitystaulukko ovat repossa.",
      record: "Kirjoita työviikon 3 merkintään: valittu julkaisumalli ja alusta perusteluineen, mihin julkaisu jumitti ja miten se ratkesi (tai varapolun käyttö), proxy-asetuksen sisältö ja se, mitä selvitystaulukko paljasti ulkopuolelta tulevista osista.",
      skills: ["julkaisu tuotantoon", "Vite-proxy ja build", "React-komponentti ja fetch", "rajapintasopimus"],
      termit: ["proxy", "build", "fetch", "komponentti"],
      steps: [
        ["Maanantai: julkaisumalli ja ensimmäinen julkaisuyritys.", "Valitse julkaisumalli suunnitelman kriteereillä. Oletus on yksi PHP-palvelin, joka tarjoilee client/dist-kansion ja /api-reitit. Seuraa ohjaajan antamaa testattua polkua ja tee ensimmäinen julkaisuyritys heti maanantaina, vaikka sovellus on lähes tyhjä."],
        ["/api/health ja proxy.", "Toteuta server/public/index.php:hen reititys: /api/health palauttaa JSONin, muut polut tarjoilevat buildatun sovelluksen. Lisää vite.config.ts:ään proxy, joka ohjaa kehityspalvelimen /api-pyynnöt osoitteeseen http://localhost:8000. Selain näkee yhden osoitteen, vaikka palvelimia on kaksi."],
        ["HealthStatus-komponentti.", "Kirjoita ensimmäinen oma komponentti: se hakee fetchillä /api/health, pitää vastauksen tilassa (useState) ja näyttää ”Rajapinta: ok” tai virheen. Käytä suhteellista osoitetta /api/health, niin sama koodi toimii proxyn kautta ja tuotannossa."],
        ["Torstai: varapolun tarkistus.", "Jos julkinen osoite ei toimi torstaihin mennessä, kirjaa virhe ja alustan loki päiväkirjaan, tee bug-issue ja jatka työviikkoon 4. Ohjaaja antaa varapolun maanantain viikkopalaverissa. Julkaisun jumi ei ole sinun vikasi, mutta kirjaamatta jäänyt jumi on."],
        ["Rajapintasopimus.", "Kirjoita project-docs/api-sopimus.md: osoite, parametrit (city, year), vastauksen JSON-muoto esimerkillä, virhevastaukset 400, 404 ja 502 esimerkeillä. Tätä vasten sekä PHP että React rakennetaan työviikoilla 5 ja 6."],
        ["Selvitys taulukkona ja toisen henkilön testi.", "Kirjoita react-vite-selvitys.md taulukkona omista P0-tarinoista: tarina → mikä osa tehdään Reactilla ja Vitellä → mikä tulee ulkopuolelta (kaavio, laskenta, tyylit) → mistä. Pyydä toista henkilöä avaamaan julkinen osoite omalla laitteellaan ja kirjaa tulos."]
      ],
      help: {
        title: "Yhden palvelimen julkaisumalli ja proxy",
        tree: "TUOTANTO (yksi palvelin)\nselain → https://osoite/           → PHP tarjoilee client/dist/index.html\nselain → https://osoite/api/health → PHP: index.php reitittää\n\nKEHITYS (kaksi palvelinta, yksi osoite)\nselain → http://localhost:5173/           → Vite dev\nselain → http://localhost:5173/api/health → Vite proxy → http://localhost:8000\n\nJULKAISUPUTKI\ngit push main → alusta ajaa: npm ci && npm run build (client) → PHP käynnistyy\nclient/dist/ on .gitignoressa: build tehdään alustalla, ei omalla koneella",
        actions: [
          "Reititys index.php:ssä: jos polku alkaa /api, aja rajapintakoodi; muuten palauta client/dist/index.html (tai pyydetty staattinen tiedosto, jos se on olemassa).",
          "Vite proxy: server: { proxy: { '/api': 'http://localhost:8000' } } vite.config.ts-tiedostossa.",
          "Kaksipalvelinmalli vain perustellusti: silloin tarvitset CORS-otsakkeet PHP:hen, ympäristömuuttujan rajapinnan osoitteelle ja kaksi julkaisua joka viikko.",
          "Ota kuvakaappaus alustan lokinäkymästä heti ensimmäisen onnistuneen julkaisun jälkeen."
        ],
        code: "SELVITYSTAULUKON POHJA (react-vite-selvitys.md)\n| P0-tarina | Reactilla / Vitellä | Ulkopuolelta | Mistä |\n| paikan lisäys | lomake, tila, lista | – | – |\n| kaavio | kaavion tila ja data | piirto | kaaviokirjasto (vk 6) |\n| päivänvalo | – | laskenta | oma PHP-moduuli (vk 4) |\n| ulkoasu | komponenttirakenne | tyyliluokat | Tailwind (vk 7) |\n\nJULKAISUN TARKISTUSLISTA\n[ ] julkinen osoite aukeaa toisella laitteella\n[ ] /api/health palauttaa {\"status\":\"ok\"}\n[ ] HealthStatus näyttää ”ok” tuotannossa\n[ ] client/dist ei ole repossa\n[ ] alustan loki kuvakaappauksena päiväkirjassa",
        test: "Avaa julkinen osoite puhelimella mobiiliverkossa, ei koulun wifissä. Jos HealthStatus näyttää ”ok”, sekä sovellus että rajapinta ovat oikeasti verkossa."
      },
      example: "Päiväkirja: ”Julkaisu jumitti tiistaina: alusta ei löytänyt client/dist-kansiota, koska build-komento ajettiin väärässä kansiossa. Ratkesi ohjaajan kanssa lisäämällä build-komentoon cd client. Loki kuvakaappauksena, bug-issue #9 suljettu.” Selvitystaulukossa neljä P0-riviä, joista kahdessa ulkopuolinen osa.",
      notEnough: "”Julkaisin sovelluksen” ilman osoitetta, toisen henkilön kokeilua ja lokia, tai selvitys, joka luettelee Reactin yleisiä ominaisuuksia ilman kytkentää omiin tarinoihin."
    },

    4: {
      type: "feature",
      feature: "PHP-moduuli Daylight laskee yhden päivän päivänvalon minuutit koordinaateille ja koko vuoden listan; arvot pysyvät välillä 0–1440, karkausvuosi tuottaa 366 päivää, ja testit T01–T04 menevät läpi komennolla.",
      excerpt: "Kukaan ei hahmota numeroista, kuinka jyrkästi päivän pituus muuttuu, kun siirtyy Helsingistä napapiirin pohjoispuolelle.",
      connection: "Työviikon 2 laskentatapapäätös muuttuu koodiksi. Tämä on sovelluksen ydinlogiikka: jos laskenta on väärin, kaunis kaavio näyttää väärää tietoa. Siksi odotusarvot haetaan ulkoisesta lähteestä, ennen kuin riviäkään koodia kirjoitetaan.",
      deliverable: "server/src/Daylight.php, testitiedosto ja testiajon tuloste T01–T04 odotusarvoineen ja lähteineen, vertailu date_sun_info-referenssiin ja bug-issuet löydetyistä virheistä.",
      why: "Napapiirin pohjoispuoli rikkoo naiivin kaavan: tuntikulman kosini menee yli yhden, ja tulos on NaN eikä 0 tai 1440. Tämä on odotettu virhe, ei sinun vikasi. Sen löytäminen, kirjaaminen ja korjaaminen on ensimmäinen aito virheenkorjausketjun raaka-aine.",
      done: "Testit T01–T04 menevät läpi komennolla (`composer test` tai `php tests/run.php`); vuosi 2028 palauttaa 366 riviä ja 2027 365; mikään arvo ei ole alle 0 tai yli 1440; poikkeamat referenssiin on kirjattu ja selitetty; löydetyt virheet ovat bug-issueina.",
      record: "Kirjoita työviikon 4 merkintään: mistä odotusarvot haettiin, mikä kaava tai funktio on käytössä, mikä meni ensin pieleen Utsjoella ja miten korjasit sen, testiajon tuloste ja poikkeamat referenssiin.",
      skills: ["rakenteinen ohjelmointi", "yksikkötestit PHP:llä", "rajatapaukset", "referenssiin vertaaminen"],
      termit: ["T01", "yksikkötesti", "Composer", "bug-issue"],
      steps: [
        ["Odotusarvot ennen koodia.", "Hae Ilmatieteen laitoksen tai timeanddate-sivun auringonnousu- ja laskuajat ja laske niistä päivänvalo minuutteina: T01 Helsinki 21.6.2026 ≈ 18 h 56 min, T02 Helsinki 21.12.2026 ≈ 5 h 49 min, T03 Utsjoki 21.12.2026 = 0 min, T04 Utsjoki 21.6.2026 = 1440 min. Kirjaa lähde ja toleranssi ±3 min testitiedostoon. Testitapaukset numeroidaan T01, T02 ja niin edelleen."],
        ["Testit ensin.", "Kirjoita neljä yksikkötestiä (yhden funktion testi ilman selainta), jotka kutsuvat `Daylight::minutesForDate(lat, lon, date)` ja vertaavat tulosta odotusarvoon. Valitse PHPUnit Composerin kautta tai oma `tests/run.php`-skripti. Aja testit: niiden pitää epäonnistua, koska moduulia ei vielä ole."],
        ["Yhden päivän laskenta.", "Toteuta laskenta valitsemallasi tavalla. Oma yhtälö: päivän numero → auringon deklinaatio → tuntikulma → päivänvalo. Jos käytät date_sun_infoa, käsittele paluuarvot true (aurinko ei laske) ja false (aurinko ei nouse). Rajaa tulos aina välille 0–1440."],
        ["Koko vuosi ja karkausvuosi.", "Toteuta `Daylight::yearFor(lat, lon, year)`, joka palauttaa listan päivistä muodossa {date, daylightMinutes}. Laske päivien määrä kalenterista, älä oleta 365:tä. Tarkista 2027 (365) ja 2028 (366)."],
        ["Vertaa referenssiin ja kirjaa virheet.", "Aja oma laskenta ja date_sun_info rinnakkain kolmelle paikalle ja neljälle päivälle. Kirjaa poikkeamat ja niiden syy (refraktio, aikavyöhyke, pyöristys). Jokainen löydetty virhe kirjataan heti GitHub-issueksi tunnisteella bug: mitä odotit, mitä tapahtui. Näistä issueista otetaan työviikon 14 virheenkorjausketjut."],
        ["Viikkopalaveri ja commit.", "Käy ohjaajan kanssa läpi, miten Utsjoen tapaus ratkesi. Se on yhdessä ratkottu ongelma: kirjaa se. Committaa moduuli ja testit erillisinä committeina."]
      ],
      help: {
        title: "Päivänvalolaskennan ansat ja testipohja",
        tree: "server/\n├─ src/Daylight.php        minutesForDate(), yearFor()\n├─ tests/DaylightTest.php  T01–T04 (PHPUnit) TAI\n├─ tests/run.php           T01–T04 omana skriptinä\n└─ composer.json           \"scripts\": { \"test\": \"phpunit tests\" }\n\nANSAT – NÄMÄ OVAT ODOTETTUJA, EIVÄT OMA VIKA\n1 acos(x), kun x > 1 tai x < -1 → NaN. Napapiirin pohjoispuolella\n  kesällä ja talvella. Ratkaisu: tarkista arvoalue ennen acos-kutsua:\n  x >= 1 → 0 min (kaamos), x <= -1 → 1440 min (yötön yö).\n2 Refraktio: ilmakehä taittaa valon, joten aurinko näkyy ennen kuin se\n  on horisontissa. Ilman -0,833° korjausta Rovaniemi 21.6. antaa\n  n. 23 h 40 min, ei 24 h. Referenssit käyttävät korjausta.\n3 date_sun_info palauttaa polaarijaksoilla true/false, ei aikaleimaa.\n  Tarkista tyyppi ennen kuin lasket erotusta.\n4 Aikavyöhyke: laske päivän pituus, älä kellonaikoja. Erotus\n  nousu → lasku ei riipu vyöhykkeestä, kellonajat riippuvat.",
        actions: [
          "Kirjoita testit ennen moduulia ja katso niiden epäonnistuvan.",
          "Laske ensin Helsinki 21.6. käsin paperilla yhtälöllä ja vertaa referenssiin, ennen kuin koodaat silmukkaa.",
          "Kun Utsjoki antaa NaN, älä hätäänny: se on ansa 1. Kirjaa bug-issue ja korjaa rajatarkistuksella.",
          "Vertaa lopuksi omaa tulosta date_sun_info-funktion tulokseen samoilla syötteillä ja kirjaa erot."
        ],
        code: "TESTITAPAUKSEN KIRJAUSPOHJA (ennen ajoa)\nT01 · Helsinki (60.17, 24.94) · 2026-06-21\nOdotettu: 1136 min (18 h 56 min), lähde: timeanddate, toleranssi ±3\nToteutunut: … · Tila: läpi / ei läpi · Commit: …\n\nRAJATARKISTUKSEN PERIAATE\ncosH = (cos(zenith) - sin(lat) * sin(decl)) / (cos(lat) * cos(decl))\njos cosH >= 1  → 0       // aurinko ei nouse\njos cosH <= -1 → 1440    // aurinko ei laske\nmuuten minuutit = 2 * acos(cosH) asteina / 15 * 60, rajattuna 0–1440",
        test: "Aja `php -r` ja tulosta Utsjoen (69.91, 27.03) päivänvalo joka kuukauden 21. päivälle. Jos listassa on NaN tai arvo yli 1440, rajatarkistus puuttuu.",
        links: [
          ["PHP: date_sun_info", "https://www.php.net/manual/en/function.date-sun-info.php"],
          ["PHPUnit: Getting Started", "https://phpunit.de/getting-started/phpunit-11.html"],
          ["NOAA: auringonnousuyhtälö (Sunrise Equation)", "https://gml.noaa.gov/grad/solcalc/calcdetails.html"]
        ]
      },
      example: "Testiajon tuloste: ”T01 läpi (1135, odotettu 1136 ±3) · T02 läpi · T03 EI LÄPI: NaN, odotettu 0 → bug-issue #11 → rajatarkistus lisätty commit 4f2a → T03 läpi · T04 läpi”. Päiväkirjassa vertailu referenssiin: ”ero enintään 2 min, Rovaniemi 21.6. vaati refraktiokorjauksen”.",
      notEnough: "Laskenta, joka toimii Helsingille, mutta jota ei ole ajettu Utsjoelle eikä karkausvuodelle, tai testit, joiden odotusarvo on kopioitu omasta tulosteesta jälkikäteen."
    },

    5: {
      type: "feature",
      feature: "GET /api/daylight?city=&year= palauttaa sopimuksen mukaisen JSONin oikealle paikkakunnalle; tuntematon nimi antaa 404-virheen ja virheellinen syöte 400-virheen JSONina.",
      excerpt: "Paikkakunnat eivät saa olla ennalta lukittu lista.",
      connection: "Työviikon 4 laskenta ja työviikon 2 tietomuotopäätös kytketään rajapintaan, jonka sopimus kirjoitettiin työviikolla 3. Viikon lopussa selain voisi jo hakea dataa, vaikka kaaviota ei vielä ole.",
      deliverable: "server/src/Geocoder.php, paikkakuntatiedosto lisenssimerkintöineen (JSON tai SQLite), rajapinnan reititys ja validointi index.php:ssä, curl-tulosteet T05–T07.",
      why: "Ilman nimen normalisointia ”utsjoki” ja ”Utsjoki” ovat eri paikkoja, ja ilman validointia rajapinta laskee vuoden 999999 päivät loputtomiin. Tietolähteen lisenssi kirjataan nyt, koska jälkikäteen sitä ei muista.",
      done: "T05 (Helsinki 2026 → 200, 365 riviä, nimi ja koordinaatit), T06 (”utsjoki” pienillä → 200 Utsjoki) ja T07 (”Tuntematonkylä” → 404 JSON-virhe) antavat curlilla kirjatut vastaukset; paikkakuntatiedoston lähde ja lisenssi ovat README:ssä; syötteiden pituus ja vuosiväli tarkistetaan.",
      record: "Kirjoita työviikon 5 merkintään: mistä paikkakuntadata tuli ja millä lisenssillä (tai käytitkö ohjaajan kuntaluetteloa), miten normalisoit nimen, mitkä rajat annoit syötteille ja T05–T07:n tulosteet.",
      skills: ["tietovaraston käyttö", "syötteiden validointi", "JSON-rajapinta", "curl-testaus"],
      termit: ["geokoodaus", "curl"],
      steps: [
        ["Paikkakuntadata käyttöön.", "Ota käyttöön paikkakuntien koordinaatit valitsemassasi muodossa. Oma hankinta avoimesta lähteestä (GeoNames tai Maanmittauslaitos, lisenssi CC BY 4.0) on sallittu, jos se valmistuu tiistaihin mennessä; muuten käytä ohjaajan kuntaluetteloa. Kirjaa lähde, lisenssi ja päivämäärä README:hen heti."],
        ["Geocoder-moduuli.", "Toteuta `Geocoder::find(name)`, joka palauttaa paikan nimen ja koordinaatit tai null. Normalisoi haku: pienet kirjaimet mb_strtolower-funktiolla (ä ja ö eivät toimi tavallisella strtolower-funktiolla), ylimääräiset välilyönnit pois. Geokoodaus tarkoittaa juuri tätä: nimestä koordinaateiksi."],
        ["Validointi.", "Tarkista syötteet ennen laskentaa: city ei tyhjä eikä yli 100 merkkiä, year kokonaisluku välillä 1900–2100. Virheellinen syöte → HTTP 400 ja JSON {\"error\": \"…\"}. Tuntematon paikka → 404. Kirjaa rajat api-sopimus.md-tiedostoon."],
        ["Rajapinnan reitti.", "Kytke index.php:hen reitti /api/daylight: lue parametrit, validoi, hae koordinaatit Geocoderilla, laske vuosi Daylight-moduulilla ja palauta sopimuksen mukainen JSON. Pidä reititys, validointi, haku ja laskenta erillisinä funktioina."],
        ["curl-testit T05–T07.", "Kirjaa odotetut vastaukset ennen ajoa ja aja curl-komennolla (hakee osoitteen ilman selainta): T05 Helsinki 2026, T06 ”utsjoki”, T07 ”Tuntematonkylä”. Liitä tulosteet päiväkirjaan. Jos jokin poikkeaa, bug-issue ja korjaus."],
        ["Viikkopalaveri.", "Kirjaa toteumat issueihin ja sovi seuraavan viikon kaaviokirjastovertailun kriteerit ohjaajan kanssa."]
      ],
      help: {
        title: "Rajapinnan reititys ja curl-testit",
        tree: "server/\n├─ public/index.php      reititys: /api/health, /api/daylight, muuten dist\n├─ src/Daylight.php      vk 4\n├─ src/Geocoder.php      find(name) → ['name','lat','lon'] | null\n├─ data/paikkakunnat.json  TAI data/paikkakunnat.sqlite\n└─ README.md             tietolähde, lisenssi, päivä\n\nVASTAUS (api-sopimus.md)\n{ \"location\": { \"name\": \"Utsjoki\", \"latitude\": 69.91, \"longitude\": 27.03 },\n  \"year\": 2026,\n  \"days\": [ { \"date\": \"2026-01-01\", \"daylightMinutes\": 0 }, … ] }\nVIRHE\n404 { \"error\": \"Paikkakuntaa ei löydy\", \"city\": \"Tuntematonkylä\" }\n400 { \"error\": \"Vuosi pitää olla välillä 1900–2100\" }",
        actions: [
          "Normalisointi: $key = trim(mb_strtolower($name, 'UTF-8')); vertaa samalla tavalla normalisoituun avaimeen.",
          "JSON-tiedosto: lue kerran json_decode-funktiolla ja hae taulukosta. SQLite: PDO('sqlite:…') ja SELECT … WHERE name_key = :key.",
          "Palauta virheet aina JSONina ja oikealla HTTP-koodilla: http_response_code(404).",
          "Testaa curlilla: curl -i \"http://localhost:8000/api/daylight?city=utsjoki&year=2026\" | head -20"
        ],
        code: "CURL-TESTIN KIRJAUSPOHJA\nT06 · curl -i \"…/api/daylight?city=utsjoki&year=2026\"\nOdotettu: 200, location.name = \"Utsjoki\", 365 riviä\nSaatu: … · Tila: läpi / ei läpi\n\nVALIDOINNIN TARKISTUSLISTA\n[ ] tyhjä city → 400\n[ ] city yli 100 merkkiä → 400\n[ ] year ei numero → 400\n[ ] year 1899 tai 2101 → 400\n[ ] tuntematon paikka → 404, ei 500\n[ ] kaikki virheet JSONina, ei PHP-varoituksia vastauksessa",
        test: "Aja curl ilman year-parametria ja väärällä year-arvolla. Jos vastauksessa näkyy PHP:n varoitusteksti eikä JSON, validointi puuttuu tai on väärässä paikassa."
      },
      example: "README: ”Paikkakuntadata: GeoNames FI (populated places, P.PPL), ladattu 3. työviikolla, CC BY 4.0, 312 riviä, muunnettu paikkakunnat.json-tiedostoksi skriptillä tools/muunna.php.” Päiväkirjassa T05–T07 tulosteet ja merkintä ”T06 ei mennyt läpi: strtolower ei käsitellyt ä:tä → bug #14 → mb_strtolower”.",
      notEnough: "Rajapinta, joka toimii vain ”Helsinki” isolla alkukirjaimella, palauttaa PHP-varoituksen tuntemattomalla nimellä ja jonka tietolähdettä ei ole kirjattu."
    },

    6: {
      type: "feature",
      feature: "Selain hakee Helsingin datan omasta rajapinnasta ja piirtää sen viivakaaviona; lataus- ja virhetila näkyvät; kaaviokirjasto on valittu vertailulla, ja työ tehtiin ensimmäisessä ominaisuushaarassa.",
      excerpt: "Haluan verkkosivullemme kuvan, joka näyttää päivän pituuden vuoden jokaisena päivänä millä tahansa Suomen paikkakunnalla.",
      connection: "Rajapinta on valmis, joten nyt selain alkaa käyttää sitä. Työviikon 3 HealthStatus-komponentti näytti tavan: fetch, tila, ehdollinen renderöinti. Nyt sama tehdään oikealle datalle ja piirretään kaaviokirjastolla. Tästä viikosta alkaen jokainen ominaisuus tehdään omassa haarassa.",
      deliverable: "Kaaviokirjastovertailu kokeilusarakkeella, client/src/api.ts, DaylightChart-komponentti, ensimmäinen pull request, kuvakaappaus julkaistusta kaaviosta ja T16:n virhetilasta.",
      why: "Kaaviokirjasto on projektin tärkein ulkoinen komponentti: sen valinta vaikuttaa tooltipiin, merkintöihin ja saavutettavuuteen viikoilla 8, 9 ja 12. Vertailu ilman omaa kokeilua on kielimallin taulukko; yksi koeasennus paljastaa, mitä dokumentaatio ei kerro. Rajapintakutsut pidetään omassa moduulissa, jotta kaavio ei tiedä mitään fetchistä.",
      done: "Kaavio näkyy julkaistussa versiossa; api.ts sisältää kaikki rajapintakutsut ja vastauksen TypeScript-tyypin; T16 on kirjattu ja ajettu: kun PHP-palvelin sammutetaan, selain näyttää virheilmoituksen eikä tyhjää sivua; ensimmäinen pull request on yhdistetty itsekatselmoinnin jälkeen.",
      record: "Kirjoita työviikon 6 merkintään: kolme vertailtua kirjastoa ja kokeilusarakkeen havainnot, valinta ja se, mikä siitä jää huonommaksi, api.ts:n rajapinta (funktion nimi ja tyyppi), T16:n tulos ja pull requestin linkki.",
      skills: ["ulkoisen komponentin valinta", "fetch ja TypeScript-tyypit", "React-tila ja ehdollinen renderöinti", "ominaisuushaara ja pull request"],
      termit: ["ominaisuushaara", "pull request"],
      steps: [
        ["Haara ja issue.", "Luo ominaisuushaara (oma Git-haara yhdelle ominaisuudelle), esimerkiksi feature/ensimmainen-kaavio, ja tarkenna issueen hyväksymiskriteerit. Tästä viikosta alkaen main-haaraan ei committata suoraan."],
        ["Kaaviokirjastovertailu kokeilulla.", "Vertaa kolmea kirjastoa (esimerkiksi Recharts, Chart.js react-chartjs-2:n kanssa, Apache ECharts): paketin koko omasta npm-tulosteesta, lisenssi, React-tuki, tooltipin ja merkintöjen tuki, näppäimistötuki, dokumentaatio. Asenna vähintään yksi koeasennuksena ja piirrä sillä yksi sarja. Kirjaa valinta ja riippuvuustaulukon rivi."],
        ["api.ts.", "Kirjoita client/src/api.ts: TypeScript-tyyppi rajapinnan vastaukselle (sama kuin api-sopimus.md), funktio fetchDaylight(city, year), joka palauttaa datan tai heittää virheen viestillä. Kaikki fetch-kutsut ovat tässä tiedostossa, ei komponenteissa."],
        ["DaylightChart.", "Toteuta komponentti, joka saa datan propsina ja piirtää viivakaavion: x-akselilla päivä, y-akselilla tunnit 0–24. Emokomponentti hakee Helsingin datan, näyttää ”Ladataan…” ja virhetilan ehdollisesti."],
        ["T16 ja julkaisu.", "Kirjaa T16 ennen ajoa: ”kun PHP-palvelin on sammutettu, sivu näyttää virheilmoituksen eikä tyhjää kaaviota”. Sammuta palvelin, aja testi, kirjaa tulos. Avaa pull request, lue muutokset itse läpi, yhdistä ja julkaise."],
        ["Viikkopalaveri.", "Näytä ohjaajalle kaavio julkaistusta osoitteesta ja kirjaa toteumat issueihin."]
      ],
      help: {
        title: "api.ts:n rakenne ja kaaviokirjaston vertailupohja",
        tree: "client/src/\n├─ api.ts              tyypit + fetchDaylight(city, year)\n├─ components/\n│  ├─ HealthStatus.tsx  vk 3\n│  └─ DaylightChart.tsx saa datan propsina, ei hae itse\n└─ App.tsx             hakee datan, tila: loading | error | data\n\nVASTAUKSEN TYYPPI (api.ts)\ntype DaylightDay = { date: string; daylightMinutes: number };\ntype DaylightResponse = {\n  location: { name: string; latitude: number; longitude: number };\n  year: number;\n  days: DaylightDay[];\n};",
        actions: [
          "npm view <paketti> dist.unpackedSize ja license antavat koon ja lisenssin omaan tulosteeseen.",
          "fetchDaylight tarkistaa response.ok ja heittää virheen, jonka viesti tulee rajapinnan JSON-virheestä.",
          "Kaavion y-akseli kiinnitetään välille 0–24 h jo nyt: myöhemmin paikkoja vertaillaan samalla asteikolla.",
          "Pull request: kirjoita kuvaukseen mitä muutit ja miten testasit; lue diff läpi kuin toisen tekemänä."
        ],
        code: "KAAVIOKIRJASTOVERTAILU (vertailu-kaaviokirjasto.md)\n| Kriteeri | Recharts | Chart.js | ECharts |\n| koko (npm view) | | | |\n| lisenssi | | | |\n| React-komponentit | | | |\n| tooltip muokattava | | | |\n| merkinnät/annotaatiot | | | |\n| näppäimistötuki | | | |\n| KOKEILU: yksi sarja piirtyi? aikaa? | | | |\nValinta: … Mikä jää huonommaksi: …\n\nT16 · verkkovirhe\nOdotettu: PHP sammutettu → ”Rajapintaan ei saada yhteyttä” näkyy, ei tyhjää kaaviota\nSaatu: … · Tila: …",
        test: "Sammuta PHP-palvelin ja lataa sivu. Jos näet tyhjän kaavion tai konsolivirheen ilman käyttäjälle näkyvää tekstiä, virhetila puuttuu."
      },
      example: "Vertailu: ”Recharts 4,9 MB / MIT / tooltip muokattava / ei natiivia näppäimistötukea / kokeilu: sarja piirtyi 25 minuutissa. Valitsen Rechartsin React-komponenttien takia; näppäimistötuki jää huonommaksi ja ratkaistaan viikolla 12.” Pull request #17 yhdistetty, T16 läpi kuvakaappauksella.",
      notEnough: "Kaavio, joka piirtyy localhostissa, mutta jonka fetch on komponentin sisällä, virhetilaa ei ole ja kirjasto valittiin ”koska se on suosittu”."
    },

    7: {
      type: "feature",
      feature: "Lomake lisää paikan, lista näyttää mukana olevat paikat poistonapilla, sama paikka ei tule kahdesti, jokaisella sarjalla on oma väri ja kaikki paikat näkyvät samalla 0–24 h asteikolla. Lomake ja lista on rakennettu alusta itse Tailwindilla.",
      excerpt: "Asiakkaan pitää voida kirjoittaa paikkakunnan nimi, lisätä se kaavioon ja verrata sitä toiseen paikkaan samassa kuvassa, vaikka Helsinkiä Utsjokeen.",
      connection: "Yhden sarjan kaavio kasvaa vertailuksi. Tämä on projektin itse rakennettu näkymä: ei valmista komponenttikittiä, vaan omat komponentit ja Tailwindin tyyliluokat. Tilanhallinta kootaan yhteen omaan hookiin, jotta työviikon 11 vuosivalinta voi käyttää samaa tilaa.",
      deliverable: "Tailwind-asennus perusteluineen, LocationForm- ja LocationList-komponentit, useLocations-hook, T08–T09:n tulokset, arvio vs. toteuma -taulukko viikkopalaverien kirjauksista.",
      why: "Käyttöliittymän toteuttaminen suunnitelmasta on oma vaatimuksensa, ja se todennetaan vain näkymällä, jonka olet rakentanut itse rautalangan mukaan. Yhteinen asteikko on vertailun ehto: jos jokainen sarja skaalautuu omaan maksimiinsa, Utsjoen kaamos ja Helsingin talvi näyttävät samalta.",
      done: "T08: Helsinki, Tampere, Rovaniemi ja Utsjoki näkyvät samassa kaaviossa eri väreillä ja yhteisellä asteikolla; T09: sama paikka toistamiseen hylätään ilmoituksella; paikan voi poistaa listasta; Tailwind on riippuvuustaulukossa perusteltuna; arvio vs. toteuma -taulukko on päiväkirjassa.",
      record: "Kirjoita työviikon 7 merkintään: komponenttien vastuut, mitä Tailwind ratkaisi tässä näkymässä ja mitä ei, miten duplikaatti tunnistetaan, T08–T09:n tulokset ja arvio vs. toteuma -taulukon opetus.",
      skills: ["komponenttijako ja propsit", "oma hook ja tila", "Tailwind perusteltuna tuontina", "arvio vs. toteuma"],
      termit: ["hook"],
      steps: [
        ["Haara ja Tailwind.", "Luo ominaisuushaara. Asenna ja konfiguroi Tailwind CSS ja kirjaa riippuvuustaulukkoon, mitä se ratkaisee tässä näkymässä (välit, värit, lomakkeen ulkoasu ilman omaa CSS-tiedostoa) ja mitä ei (rakenne, saavutettavuus, tila). Tämä on toinen perusteltu ulkoinen komponentti."],
        ["useLocations-hook.", "Kirjoita oma hook (funktio, jolla komponentti käyttää tilaa), joka pitää listan paikoista tiloineen: ladataan, valmis, virhe. Se tarjoaa funktiot addLocation(name) ja removeLocation(name). Duplikaatti tarkistetaan normalisoidusta nimestä ennen hakua."],
        ["LocationForm ja LocationList.", "Rakenna lomake (tekstikenttä, lisäysnappi, label kytkettynä kenttään) ja lista (nimi, värimerkki, poistonappi) rautalangan mukaan. Ei valmista komponenttikittiä: rakenne ja luokat ovat sinun."],
        ["Värit ja asteikko.", "Anna jokaiselle paikalle väri kiinteästä paletista lisäysjärjestyksessä ja käytä samaa väriä listassa ja kaaviossa. Kiinnitä y-akseli välille 0–24 h."],
        ["T08–T09.", "Kirjaa odotukset ennen ajoa. T08: neljä paikkaa samassa kaaviossa. T09: ”Helsinki” toistamiseen hylätään ilmoituksella ”Helsinki on jo kaaviossa”. Ota kuvakaappaukset."],
        ["Arvio vs. toteuma ja viikkopalaveri.", "Kokoa taulukko viikkopalaverien kirjauksista: issue, arvio, toteuma, ero. Kirjaa, missä arvio petti eniten ja miksi, ja päivitä suunnitelman arviot loppuviikoille."]
      ],
      help: {
        title: "Tailwind-sanasto tähän näkymään ja hookin rakenne",
        tree: "client/src/\n├─ hooks/useLocations.ts     tila + addLocation + removeLocation\n├─ components/\n│  ├─ LocationForm.tsx       props: onAdd(name)\n│  ├─ LocationList.tsx       props: locations, onRemove(name)\n│  └─ DaylightChart.tsx      props: locations (useita sarjoja)\n└─ App.tsx                   kutsuu useLocations, jakaa propsit\n\nTAILWIND-LUOKAT, JOTKA RIITTÄVÄT LOMAKKEESEEN JA LISTAAN\nasettelu: flex, flex-col, gap-2, gap-4, items-center, justify-between\nvälit:    p-2, p-4, px-3, py-2, mt-4, mb-2\nteksti:   text-sm, text-lg, font-semibold, text-gray-700\nkenttä:   border, rounded, w-full, focus:outline-none, focus:ring-2\nnappi:    bg-orange-600, text-white, rounded, hover:bg-orange-700, disabled:opacity-50\nvirhe:    text-red-700, bg-red-50, border-red-200",
        actions: [
          "Asenna Tailwind Viten ohjeen mukaan (@tailwindcss/vite) ja tarkista, että yksi luokka vaikuttaa, ennen kuin kirjoitat lisää.",
          "Hookin tila: { name, color, status: 'loading' | 'ready' | 'error', data?, error? }[] – yksi olio per paikka.",
          "Duplikaatti: vertaa trim + toLowerCase -normalisoituja nimiä, palauta ilmoitus lomakkeelle.",
          "Kaavio saa propsina vain valmiit sarjat; lataus- ja virhetilat näytetään listassa paikan kohdalla."
        ],
        code: "ARVIO VS. TOTEUMA (paivakirjaan)\n| Issue | Arvio h | Toteuma h | Ero | Miksi |\n| #21 kaaviokirjastovertailu | 2 | 4 | +2 | koeasennus vaati Viten uudelleenkäynnistyksen |\n| #23 api.ts | 3 | 2 | -1 | tyyppi oli sopimuksesta valmis |\nOpetus: …\n\nT09 · duplikaatti\nOdotettu: ”Helsinki” toistamiseen → ilmoitus, lista pysyy 4 rivissä, ei uutta hakua\nSaatu: … · Tila: …",
        test: "Lisää ”Utsjoki”, ” utsjoki ” ja ”UTSJOKI”. Jos listaan tulee enemmän kuin yksi rivi, normalisointi puuttuu lomakkeen puolelta."
      },
      example: "Riippuvuustaulukko: ”tailwindcss 4.x, MIT, rooli: lomakkeen ja listan tyyliluokat; ei korvaa rakennetta eikä label-kytkentöjä, jotka tein itse.” Kuvakaappaus neljästä paikasta eri väreillä, T09 läpi ilmoituksella. Arvio vs. toteuma: kuusi issueta, arviot pettivät keskimäärin +1,5 h, syy kirjattu.",
      notEnough: "Valmiista komponenttikirjastosta kopioitu lomake, kaavio jossa jokainen paikka skaalautuu omaan maksimiinsa, tai arvio vs. toteuma -taulukko, joka on täytetty muistista jälkikäteen."
    },

    8: {
      type: "feature",
      feature: "Tooltip näyttää päivän, paikan ja keston luettavassa muodossa, ja kaamos (0 min) sekä yötön yö (1440 min) erottuvat kaaviosta.",
      excerpt: "Kun hän vie hiiren kaavion päälle, hänen pitää nähdä tarkka päivä, paikka ja se, kuinka monta tuntia ja minuuttia valoa sinä päivänä on.",
      connection: "Data on oikein ja paikkoja on monta, mutta minuutit eivät kerro matkailijalle mitään. Muotoilu tehdään omassa moduulissa testeineen, ja kaavio vain käyttää sitä. Ääripäiden korostus on asiakkaan myyntiargumentti, joten se ei ole koristus.",
      deliverable: "client/src/format.ts ja sen Vitest-testit T10–T11, tooltip-komponentti, kaamoksen ja yöttömän yön korostus, kirjattu näppäimistörajoite ja päätös kiertoreitistä.",
      why: "Muotoilu on logiikkaa, ja logiikka testataan ilman selainta. ”0 min” ja ”24 h” ovat rajatapaukset, jotka menevät helposti väärin (”0 h 0 min”, ”24 h 0 min”). Näppäimistötuki riippuu kirjastosta, joten rajoite kirjataan rehellisesti ja kiertoreitti päätetään nyt, toteutetaan työviikolla 12.",
      done: "T10 ja T11 menevät läpi komennolla `npm test`; tooltip toimii hiirellä ja kosketuksella ja näyttää esimerkiksi ”21. kesäkuuta · Rovaniemi · 23 h 59 min”; Utsjoen kaamosjaksot ja yöttömän yön jaksot erottuvat kaaviosta; päiväkirjassa on kirjattu, mitä kirjasto tukee näppäimistöllä, ja päätös kiertoreitistä (datataulukko vai päivävalitsin) perusteluineen.",
      record: "Kirjoita työviikon 8 merkintään: format.ts:n funktiot ja niiden testit, miten tooltip on toteutettu kirjaston keinoin, miten ääripäät korostetaan, ja näppäimistörajoite sekä kiertoreitin valinta perusteluineen.",
      skills: ["muotoilulogiikka moduulina", "Vitest-yksikkötestit", "kaaviokirjaston tooltip ja merkinnät", "rajoitteen kirjaaminen"],
      termit: ["tooltip", "Vitest"],
      steps: [
        ["Haara ja testit ensin.", "Luo ominaisuushaara. Asenna Vitest ja kirjoita testit format.ts:lle ennen toteutusta: T10 formatMinutes(0) → ”0 min”, formatMinutes(1440) → ”24 h”, formatMinutes(61) → ”1 h 1 min”; T11 formatDate(”2026-06-21”) → ”21. kesäkuuta”. Aja ja katso niiden epäonnistuvan."],
        ["format.ts.", "Toteuta molemmat funktiot puhtaina funktioina: ne eivät koske DOMiin eivätkä kaavioon. Käytä suomen kuukausien nimiä partitiivissa (”kesäkuuta”). Aja testit, kunnes ne menevät läpi."],
        ["Tooltip.", "Toteuta kaaviokirjaston tooltip omalla sisällöllä: päivä, paikka, kesto, format.ts:n funktioilla. Testaa hiirellä ja puhelimen kosketuksella. Tooltipin pitää nimetä paikka myös silloin, kun sarjoja on neljä."],
        ["Ääripäiden korostus.", "Korosta 0 minuutin ja 1440 minuutin jaksot kirjaston merkintätuella (viite-alue, viiteviiva tai erillinen merkintä) ja nimeä ne kaaviossa ”kaamos” ja ”yötön yö”. Testaa Utsjoen ja Rovaniemen datalla: Rovaniemellä yötön yö on lyhyt, Utsjoella pitkä."],
        ["Näppäimistörajoite ja kiertoreitin päätös.", "Kokeile tooltipia pelkällä näppäimistöllä. Kirjaa, mitä kirjasto tukee ja mitä ei. Päätä kiertoreitti työviikolle 12: datataulukko kaavion alla (tiivistettynä esimerkiksi kuukauden 1. ja 15. päivä) vai päivävalitsin, joka näyttää valitun päivän arvot kaikille paikoille. Perustele ja kirjaa suunnitelmaan; tämä on samalla kirjaston rajoitteen selvitys."],
        ["Pull request ja viikkopalaveri.", "Yhdistä, julkaise ja näytä ohjaajalle Utsjoen kaavio korostuksineen."]
      ],
      help: {
        title: "format.ts:n testipohja ja korostuksen periaate",
        tree: "client/src/\n├─ format.ts             formatMinutes(min), formatDate(iso)\n├─ format.test.ts        T10, T11 (Vitest)\n└─ components/\n   ├─ DaylightTooltip.tsx  saa kirjastolta pisteen, käyttää format.ts\n   └─ DaylightChart.tsx    lisää viitealueet 0 ja 1440\n\npackage.json: \"scripts\": { \"test\": \"vitest run\" }",
        actions: [
          "formatMinutes: h = Math.floor(min / 60), m = min % 60; 0 → ”0 min”; m === 0 → ”N h”; h === 0 → ”N min”; muuten ”N h M min”.",
          "formatDate: jaa ISO-päivä osiin ja hae kuukauden nimi omasta taulukosta; älä luota selaimen kieliasetukseen.",
          "Korostus: kirjaston viitealue (reference area) y = 0 ja y = 1440 tai päivien alue, joina arvo on 0 tai 1440; vaihtoehtona pisteen väri ääripäissä.",
          "Kirjaa näppäimistökokeilu rehellisesti: ”Tab ei siirry pisteisiin” on kelvollinen havainto."
        ],
        code: "T10 · formatMinutes\n| syöte | odotettu |\n| 0     | ”0 min”  |\n| 61    | ”1 h 1 min” |\n| 1136  | ”18 h 56 min” |\n| 1440  | ”24 h”  |\nT11 · formatDate(”2026-06-21”) → ”21. kesäkuuta”\n\nNÄPPÄIMISTÖRAJOITE (kirjataan suunnitelmaan)\nKirjasto: … Tuki: … Puute: …\nKiertoreitti vk 12: datataulukko / päivävalitsin, perustelu: …",
        test: "Aja `npm test` ja tarkista, että T10:n neljä riviä ja T11 menevät läpi. Vie sitten puhelimella sormi Utsjoen tammikuun kohdalle: tooltipin pitää sanoa ”0 min”, ei ”0 h 0 min”."
      },
      example: "Tooltip: ”21. kesäkuuta · Rovaniemi · 23 h 59 min”. Kaaviossa Utsjoen 0-taso ja 1440-taso merkitty alueina ”kaamos” ja ”yötön yö”. Päiväkirja: ”Recharts-tooltip ei aukea näppäimistöllä; valitsen päivävalitsimen viikolle 12, koska 365 × 4 riviä taulukkona on liian pitkä.”",
      notEnough: "Tooltip, joka näyttää ”daylightMinutes: 1439”, ääripäät ilman nimeä, tai muotoilufunktio komponentin sisällä ilman testiä."
    },

    9: {
      type: "feature",
      feature: "Sovellus laskee ja merkitsee kaavioon päivät, joina kahden paikan päivänvalo on yhtä pitkä tai lähes yhtä pitkä, ja merkin tooltip nimeää päivän, molemmat paikat ja keston.",
      excerpt: "Silloin voin sanoa asiakkaalle, että maaliskuun lopulla Rovaniemellä on yhtä valoisaa kuin Helsingissä.",
      connection: "Data on päiväkohtaista, joten kaksi käyrää ei leikkaa tarkasti vaan ohittaa toisensa. Määritelmä ja toleranssi ovat sinun päätöksiäsi, ja ne testataan omalla datalla. Laskenta on puhdas funktio erillään kaaviosta, kuten format.ts.",
      deliverable: "Leikkauspisteen määritelmä ja toleranssi suunnitelmassa, client/src/intersections.ts ja sen testit T12–T13, merkit kaaviossa omalla tooltipilla.",
      why: "Tämä on projektin käsitteellisesti vaikein viikko: tasauspäivien ympärillä kaikki paikat ovat lähellä 12 tuntia, ja yöttömän yön aikana kahdessa Lapin paikassa on molemmissa 1440 minuuttia viikkojen ajan. Ilman peräkkäisten päivien yhdistämistä kaavio täyttyy kymmenistä merkeistä ja lakkaa kertomasta mitään.",
      done: "T12: Helsinki–Rovaniemi antaa leikkauksen maalis- ja syyskuussa, ei kesäkuussa; T13: Utsjoki–Inari antaa yöttömän yön ajalta yhden merkin, ei kymmeniä; testit menevät läpi komennolla; kaaviossa on merkki, jonka tooltip nimeää molemmat paikat ja päivän; määritelmä ja toleranssi ovat suunnitelmassa perusteltuina.",
      record: "Kirjoita työviikon 9 merkintään: valittu määritelmä ja toleranssi perusteluineen, miten peräkkäiset päivät yhdistetään, T12–T13:n tulokset ja se, mitä tasauspäivät tekivät ensimmäiselle versiolle.",
      skills: ["algoritmin määrittely ja toleranssi", "puhdas funktio ja testit", "kaavion merkinnät", "rajatapaukset omalla datalla"],
      termit: ["leikkauspiste", "toleranssi"],
      steps: [
        ["Määritelmä paperilla.", "Piirrä kaksi käyrää: Helsinki ja Rovaniemi maaliskuussa (ohittavat toisensa) ja Utsjoki ja Inari kesäkuussa (molemmat 1440 pitkään). Päätä: onko leikkaus merkinvaihto (a − b vaihtaa etumerkkiä), erotus alle toleranssin, vai molemmat? Mikä toleranssi minuutteina? Kirjaa päätös ja perustelu suunnitelmaan."],
        ["Testit ensin.", "Kirjoita T12 ja T13 Vitestillä oikealla rajapintadatalla (tallenna vastaukset testiaineistoksi). T12: Helsinki–Rovaniemi → merkit maalis- ja syyskuussa, ei kesäkuussa. T13: Utsjoki–Inari → yöttömän yön jakso tuottaa yhden merkin, ei yhtä per päivä."],
        ["intersections.ts.", "Toteuta findIntersections(seriesA, seriesB, toleranceMin) puhtaana funktiona, joka palauttaa listan {date, minutesA, minutesB}. Yhdistä peräkkäiset osumat yhdeksi merkiksi (jakson ensimmäinen päivä tai keskipäivä). Laske parit kaikille paikoille, kun paikkoja on useampi kuin kaksi."],
        ["Merkit kaavioon.", "Piirrä merkit kaavioon kirjaston merkintätuella (piste, viiteviiva tai erillinen sarja) ja anna niille oma tooltip: ”20. maaliskuuta · Helsinki ja Rovaniemi · noin 12 h”. Jos kirjasto ei tue merkintöjä, piirrä ne erillisenä sarjana, jossa vain leikkauspäivillä on arvo."],
        ["Pull request ja viikkopalaveri.", "Yhdistä, julkaise ja näytä ohjaajalle Helsinki–Rovaniemi-esimerkki. Kirjaa bug-issuet, jos tasauspäivät tuottivat ylimääräisiä merkkejä."]
      ],
      help: {
        title: "Leikkauspisteen laskennan runko",
        tree: "client/src/\n├─ intersections.ts        findIntersections(a, b, tolerance) → Intersection[]\n├─ intersections.test.ts   T12, T13 tallennetulla rajapintadatalla\n└─ test-data/\n   ├─ helsinki-2026.json    curl-tuloste tallennettuna\n   ├─ rovaniemi-2026.json\n   ├─ utsjoki-2026.json\n   └─ inari-2026.json\n\nPIIRROS 1 · Helsinki (─) ja Rovaniemi (···) maalis–syyskuu\n 24h │        ···········\n     │     ···           ···\n 12h │──··─────────────────··──   ← ohittavat toisensa n. 20.3. ja 23.9.\n     │ ··                     ··\n  0h │\n\nPIIRROS 2 · Utsjoki ja Inari kesäkuu: molemmat 1440 viikkoja\n 24h │ ═══════════════════════   ← erotus 0 joka päivä → YKSI merkki, ei 40",
        actions: [
          "Käy päivät läpi järjestyksessä: d = a[i] − b[i]. Osuma, kun |d| <= toleranssi tai d:n etumerkki vaihtuu edellisestä päivästä.",
          "Ryhmittele peräkkäiset osumat: uusi merkki alkaa vain, kun edellinen päivä ei ollut osuma.",
          "Kun paikkoja on N, laske parit i < j ja anna jokaiselle merkille molemmat nimet.",
          "Jos tasauspäivät tuottavat merkin joka parille, se on oikea tulos: kaikilla on n. 12 h. Näytä silloin yksi yhteinen merkki tai pienennä toleranssia ja kirjaa päätös."
        ],
        code: "T12 · Helsinki–Rovaniemi 2026, toleranssi N min\nOdotettu: merkki välillä 15.–25.3. ja 18.–28.9.; ei merkkiä kesä–heinäkuussa\nSaatu: … · Tila: …\n\nT13 · Utsjoki–Inari 2026\nOdotettu: yöttömän yön jaksolta (touko–heinäkuu) enintään 1 merkki; kaamokselta enintään 1\nSaatu: … · Tila: …\n\nPALUUARVO\n{ date: \"2026-03-20\", a: \"Helsinki\", b: \"Rovaniemi\", minutesA: 731, minutesB: 728 }",
        test: "Lisää Helsinki, Rovaniemi ja Utsjoki ja laske merkit. Jos maaliskuussa on enemmän kuin kolme merkkiä (yksi per pari), peräkkäisten päivien yhdistäminen ei toimi."
      },
      example: "Suunnitelma: ”Leikkaus = erotus ≤ 10 min tai merkinvaihto. Peräkkäiset osumat yhdistetään ja merkki asetetaan jakson keskipäivälle. Toleranssi 10 min, koska päiväkohtainen muutos keväällä on Rovaniemellä n. 7 min/päivä; pienemmällä toleranssilla ohitus voi jäädä väliin.” T12 ja T13 läpi, kuvakaappaus maaliskuun merkistä tooltipilla.",
      notEnough: "Merkki joka päivälle, jona erotus on pieni (40 merkkiä kesäkuussa), toleranssi ilman perustelua, tai laskenta kaaviokomponentin sisällä ilman testiä."
    },

    10: {
      type: "katselmointi",
      feature: "Nimetty ulkopuolinen henkilö on kokeillut julkaistua väliversiota asiakkaan roolissa, ja hänen havaintonsa ovat muistiossa sitaatteina erillään omasta tulkinnastasi, muutokset issueina.",
      excerpt: "Haluan kokeilla toimivaa väliversiota noin puolivälissä omilla käsilläni: en halua kalvoesitystä vaan oikean sovelluksen, johon lisään kolme paikkaa ja katson, ymmärränkö kuvan ilman selityksiä.",
      connection: "Vaihe B päättyy siihen, että joku muu kuin sinä käyttää sovellusta. Asiakkaan roolia esittää ohjaajan nimeämä ulkopuolinen henkilö, ei oma ohjaava opettajasi. Tämä on se osa projektia, jota ei voi tuottaa tekoälyllä.",
      deliverable: "Asiakaskielinen esittely, kolmen paikan testitehtävä, katselmointimuistio (rooli, ajankohta, sitaatit, oma tulkinta erikseen) ja priorisoidut muutosissuet.",
      why: "Palaute, joka kerätään, ennen kuin on myöhäistä muuttaa, on halvin palaute. Testaajan omat sanat erillään tulkinnasta ovat asiakaslähtöisen viestinnän työnäyte: kun kirjoitat ”käyttäjä ei löytänyt poistonappia”, se on tulkintasi; kun kirjoitat ”’Miten tän saa pois?’”, se on havainto.",
      done: "Katselmointimuistio on repossa: katselmoijan rooli ja ajankohta, vähintään viisi sitaattia, oma tulkinta erillään, priorisoidut muutokset issueina P-luokin; ohjaajan kanssa on rajattu tärkein muutos enintään kahden päivän työksi työviikolle 11.",
      record: "Kirjoita työviikon 10 merkintään: kuka katselmoi ja missä roolissa, mitä hän sanoi sanatarkasti, mitä tulkitsit siitä, mikä muutos valittiin työviikolle 11 ja miksi juuri se.",
      skills: ["asiakaslähtöinen viestintä", "katselmoinnin järjestäminen", "palautteen kirjaaminen", "priorisointi palautteesta"],
      steps: [
        ["Herätä alusta ja valmistele esittely.", "Ilmaisalustat nukkuvat käyttämättä: avaa julkinen osoite 10 minuuttia ennen tilaisuutta. Kirjoita asiakaskielinen esittely, korkeintaan kolme virkettä ilman teknistä sanastoa: mitä kuva kertoo matkailijalle."],
        ["Testitehtävä paperille.", "Kirjoita katselmoijalle kolme tehtävää: 1) lisää Helsinki, Rovaniemi ja Utsjoki, 2) kerro, milloin Utsjoella on kaamos, 3) kerro, milloin Rovaniemellä on yhtä valoisaa kuin Helsingissä. Älä auta suullisesti: jokainen kysymys on sovelluksen puute, ei katselmoijan vika."],
        ["Katselmointi.", "Anna osoite ja tehtävät nimetylle ulkopuoliselle. Kirjoita hänen sanansa sanatarkasti sitaatteina sitä mukaa. Kirjaa myös, mihin hän pysähtyi ja kuinka kauan."],
        ["Muistio kahdessa osassa.", "Kirjoita project-docs/katselmointi-vk10.md: ensin sitaatit, sitten oma tulkinta ja päätökset erillään. Jokainen muutosehdotus GitHub-issueksi P-luokalla."],
        ["Viikkopalaveri: rajaus työviikolle 11.", "Valitse ohjaajan kanssa tärkein muutos ja rajaa se enintään kahden päivän työksi; suurempi jaetaan ja loppu on P1. Tarkista samalla, koskeeko muutos useLocations-tiedostoa: se ratkaisee työviikon 11 konfliktisuunnitelman."]
      ],
      help: {
        title: "Katselmointimuistion pohja",
        tree: "project-docs/katselmointi-vk10.md\n├─ 1 Katselmoija: rooli (asiakas), ajankohta, kesto\n├─ 2 Tehtävät, jotka annettiin\n├─ 3 Sitaatit (sanatarkasti, numeroituina)\n├─ 4 Oma tulkinta sitaatti kerrallaan\n├─ 5 Päätökset: issue, P-luokka, viikko\n└─ 6 Mitä ei muuteta ja miksi",
        actions: [
          "Testaa julkinen osoite puhelimella ennen tilaisuutta; jos alusta nukkuu, herätä se.",
          "Älä selitä kesken kokeilun. Kirjoita ylös kysymykset, joihin et vastannut.",
          "Sitaatti ja tulkinta eri kappaleisiin. Tulkinta alkaa sanalla ”Tulkinta:”.",
          "Rajaa työviikon 11 muutos ohjaajan kanssa heti: enintään kaksi päivää."
        ],
        code: "SITAATTI → TULKINTA → PÄÄTÖS\nSitaatti 3: ”Mistä mä näen, mikä viiva on Utsjoki?”\nTulkinta: värilegenda puuttuu tai on liian kaukana kaaviosta.\nPäätös: issue #31 ”Näytä paikan nimi ja väri kaavion legendassa”, P0, vk 11, arvio 4 h.\n\nSitaatti 5: ”Aa, tossa kohtaa ne on samassa.” (leikkauspiste maaliskuussa)\nTulkinta: merkki toimii ilman selitystä.\nPäätös: ei muutosta.",
        test: "Anna testitehtävät katselmoijalle ja katso kelloa: kuinka kauan kolme paikkaa ja kaamoksen löytäminen kesti ilman apua."
      },
      example: "Muistio: ”Katselmoija: työelämäedustaja asiakkaan roolissa, 10. työviikon torstai, 25 min. Sitaatti 1: ’Mihin mä kirjotan sen kaupungin?’ → tulkinta: lomake ei erotu → issue #30, P0.” Viisi sitaattia, kolme issueta, yksi rajattu kahden päivän muutos.",
      notEnough: "”Asiakas tykkäsi, pieniä korjauksia toivottiin” ilman sitaatteja, roolia, ajankohtaa ja issueita, tai katselmointi, jossa oma ohjaava opettaja esitti asiakasta."
    },

    11: {
      type: "feature",
      feature: "Käyttäjä valitsee vuoden ja kaikki paikat haetaan uudelleen; katselmoinnin tärkein muutos on toteutettu; molemmat tehtiin omissa haaroissa, ja niiden välinen merge-konflikti on ratkaistu hallitusti.",
      excerpt: "Vuoden pitää olla valittavissa, koska teemme tarjoukset seuraavalle talvelle jo edellisenä keväänä, ja karkausvuoden pitää toimia oikein.",
      connection: "Palaute muuttuu koodiksi, ja toimeksiannon vuosivalinta toteutuu. Molemmat koskevat samaa tilatiedostoa useLocations, joten kaksi haaraa törmää. Se on tarkoitus: ominaisuuden liittäminen olemassa olevaan versioon hallitusti on oma vaatimuksensa, ja yksin tehdyssä projektissa konflikti ei synny itsestään.",
      deliverable: "YearSelect-komponentti, vuoden tila useLocations-hookissa, T14:n tulos, palautemuutos, kaksi pull requestia, konfliktin ratkaisun commit ja muutokset tuotannossa.",
      why: "Merge-konflikti on Git-taidon kohta, jonka moni oppii vasta työelämässä paniikissa. Tässä se tehdään tarkoituksella pienessä mittakaavassa: kaksi haaraa, yksi tiedosto, ohjaaja vierellä. Vuosivalinta tehdään ensin, koska se on toimeksiannon P0 ja palautemuutoksen koko on epävarma.",
      done: "Kaksi pull requestia on yhdistetty; konfliktin ratkaisun commit näkyy historiassa; T14: vuosi 2028 näyttää tuotannossa 366 pistettä ja 2027 365; katselmointimuistion päätös on kuitattu linkillä; jos konfliktia ei syntynyt, ohjaajan commit ja sen ratkaisu on kirjattu.",
      record: "Kirjoita työviikon 11 merkintään: molempien haarojen nimet ja pull requestit, mikä konflikti syntyi ja miten ratkaisit sen (mitä valitsit ja miksi), T14:n tulos ja mikä palautemuutos toteutettiin.",
      skills: ["Git-haarat ja konfliktin ratkaisu", "tilan laajentaminen hookissa", "uudelleenhaku", "pull request -kuvaus"],
      termit: ["merge-konflikti"],
      steps: [
        ["Maanantai: kaksi haaraa samasta commitista.", "Luo molemmat ominaisuushaarat samasta main-haaran commitista: feature/vuosivalinta ja feature/palaute-31 (issuen numero). Jos loisit toisen vasta ensimmäisen yhdistämisen jälkeen, konfliktia ei syntyisi."],
        ["Vuosivalinta ensin.", "Lisää vuosi useLocations-hookin tilaan ja YearSelect-komponentti (select-elementti, label kytkettynä). Vuoden vaihto hakee kaikkien paikkojen datan uudelleen api.ts:n kautta ja näyttää lataustilan. Kirjaa T14 ennen ajoa: ”2028 → jokaisella sarjalla 366 pistettä, 2027 → 365”."],
        ["Ensimmäinen pull request.", "Avaa pull request vuosivalinnasta, katselmoi itse, yhdistä main-haaraan ja julkaise. Aja T14 tuotannossa."],
        ["Palautemuutos toisessa haarassa.", "Toteuta katselmoinnin rajattu muutos toisessa haarassa, joka luotiin maanantaina. Kun avaat pull requestin, Git ilmoittaa merge-konfliktista (kaksi haaraa on muuttanut samaa kohtaa useLocations-tiedostossa)."],
        ["Konfliktin ratkaisu.", "Avaa konfliktitiedosto, lue molemmat versiot merkkien <<<<<<< ja >>>>>>> välistä ja päätä rivi riviltä, mikä jää. Aja testit ja sovellus, ennen kuin committaat ratkaisun. Commit-viesti kertoo, mitä valitsit. Jos konfliktia ei synny (muutos ei koskenut samaa tiedostoa), ohjaaja tekee maanantaina sovitun pienen commitin main-haaraan ja ratkaiset siitä syntyvän konfliktin."],
        ["Yhdistä, julkaise, kuittaa.", "Yhdistä toinen pull request, julkaise ja kuittaa katselmointimuistion päätös linkillä. Viikkopalaverissa käy konfliktin ratkaisu läpi ohjaajan kanssa: se on yhdessä ratkottu ongelma."]
      ],
      help: {
        title: "Konfliktin synty ja ratkaisu askel askeleelta",
        tree: "main ──●── (ma) ──────────────────────●──────────●── main\n         \\                             /            /\n          ├─ feature/vuosivalinta ──●──┘ PR #1      /\n          └─ feature/palaute-31 ────────●──────────┘ PR #2 → konflikti\n\nMolemmat haarat muokkaavat client/src/hooks/useLocations.ts\n→ PR #2 ei yhdisty automaattisesti → ratkaistaan käsin\n\nKONFLIKTIMERKIT TIEDOSTOSSA\n<<<<<<< HEAD\n  (main-haaran versio: vuosivalinta)\n=======\n  (oman haaran versio: palautemuutos)\n>>>>>>> feature/palaute-31",
        actions: [
          "git switch main && git pull, sitten git switch -c feature/vuosivalinta ja git switch -c feature/palaute-31 samasta kohdasta.",
          "Ratkaise konflikti editorissa: säilytä yleensä molemmat muutokset, poista merkit, aja npm test ja npm run dev.",
          "git add + git commit -m \"Ratkaise konflikti useLocations: vuosi ja legenda\" – viesti kertoo, mitä valitsit.",
          "Varareitti: jos konfliktia ei synny, ohjaaja committaa main-haaraan sovitun rivin (esim. paletin värin) ja sinä yhdistät sen haaraasi."
        ],
        code: "T14 · vuosivalinta ja karkausvuosi\nOdotettu: valitse 2028 → jokaisella sarjalla 366 pistettä, x-akselin viimeinen päivä 31.12.2028; 2027 → 365\nSaatu: … · Tila: …\n\nPULL REQUESTIN KUVAUS\nMitä: …\nMiksi (issue #…): …\nMiten testattu: T14 tuotannossa, npm test\nKonflikti: mitä valittiin ja miksi",
        test: "Vaihda vuosi 2028 → 2027 → 2028 nopeasti peräkkäin. Jos kaavio näyttää väärän vuoden pisteitä, vanha haku ehtii valmistua uuden jälkeen: hylkää vanhentuneet vastaukset."
      },
      example: "Historia: ”PR #38 Vuosivalinta yhdistetty · PR #39 Legenda kaavioon: konflikti useLocations.ts riveillä 12–20, ratkaistu säilyttämällä sekä year-tila että color-kenttä · commit 7c1e ’Ratkaise konflikti useLocations: vuosi ja legenda’.” T14 läpi: 2028 → 366 pistettä tuotannossa.",
      notEnough: "Molemmat muutokset suoraan main-haaraan, tai konflikti, joka ”ratkaistiin” ottamalla oma versio kokonaan ilman lukemista, tai vuosivalinta ilman T14:ää."
    },

    12: {
      type: "laatu",
      feature: "Sovellus toimii puhelimella ja näppäimistöllä: asettelu mukautuu, työviikon 8 kiertoreitti on toteutettu, ja Lighthouse-raportit ennen ja jälkeen osoittavat korjaukset.",
      excerpt: "Se toimii myös puhelimella.",
      connection: "Ominaisuudet ovat valmiit, nyt ne tehdään käytettäviksi kaikille. Työviikolla 8 kirjattu näppäimistörajoite saa nyt ratkaisunsa. Saavutettavuus ei ole koristus vaan vaatimus: matkailija lukee kuvan puhelimella junassa.",
      deliverable: "Kuvakaappaukset omalta puhelimelta ennen ja jälkeen, Tailwindin taitekohtien korjaukset, kiertoreitin komponentti (datataulukko tai päivävalitsin), Lighthouse-raportit ennen ja jälkeen.",
      why: "Kaavio, joka on 1 200 pikseliä leveä, on puhelimella lukukelvoton, ja tooltip, joka aukeaa vain hiirellä, sulkee näppäimistökäyttäjät ulos. Lighthouse antaa ennen ja jälkeen -luvut, joita ei voi keksiä.",
      done: "Sovellus toimii oikealla puhelimella ilman vaakasuuntaista rullausta; jokainen lomakkeen kenttä on saavutettavissa Tab-näppäimellä ja sillä on label; kiertoreitti näyttää valitun päivän arvot kaikille paikoille ilman hiirtä; Lighthouse-saavutettavuuspisteet ennen ja jälkeen on kirjattu ja jälkeen-luku on korkeampi tai syy on selitetty.",
      record: "Kirjoita työviikon 12 merkintään: mitä puhelimella meni rikki ja miten korjasit, mikä kiertoreitti toteutettiin, Lighthouse-luvut ennen ja jälkeen ja mitkä korjaukset nostivat lukua.",
      skills: ["responsiivinen asettelu Tailwindilla", "näppäinkäyttö ja label-kytkennät", "Lighthouse-mittaus", "kirjaston rajoitteen kiertäminen"],
      termit: ["Lighthouse"],
      steps: [
        ["Mittaa ensin.", "Aja Lighthouse (Chromen kehittäjätyökalut → Lighthouse → Accessibility) julkaistulle versiolle ja tallenna raportti. Avaa sovellus omalla puhelimella ja ota kuvakaappaukset. Kirjaa jokainen ongelma, ennen kuin korjaat mitään."],
        ["Puhelin.", "Korjaa asettelu Tailwindin taitekohdilla (sm:, md:): lomake ja lista allekkain kapealla, kaavio täyttää leveyden ja pysyy luettavana. Testaa oikealla laitteella, ei vain selaimen kapealla ikkunalla."],
        ["Kiertoreitti.", "Toteuta työviikolla 8 valittu kiertoreitti: päivävalitsin, joka näyttää valitun päivän arvot kaikille paikoille format.ts:n muodossa, tai tiivistetty datataulukko kaavion alla. Sen pitää toimia pelkällä näppäimistöllä."],
        ["Näppäimistö ja kontrasti.", "Käy sovellus läpi Tab-näppäimellä: järjestys, näkyvä kohdistus, jokaiselle kentälle label, napeille kuvaava teksti. Tarkista kontrastit Tailwindin väreillä ja otsikkohierarkia (yksi h1, sitten h2)."],
        ["Mittaa jälkeen ja julkaise.", "Aja Lighthouse uudelleen, tallenna raportti ja vertaa. Pull request, julkaisu, viikkopalaveri."]
      ],
      help: {
        title: "Saavutettavuuden tarkistuslista",
        tree: "project-docs/saavutettavuus/\n├─ lighthouse-ennen.html\n├─ lighthouse-jalkeen.html\n├─ puhelin-ennen.png\n└─ puhelin-jalkeen.png\n\nclient/src/components/\n└─ DaySelector.tsx  TAI  DataTable.tsx   (vk 8:n päätös)",
        actions: [
          "Tailwind: flex-col md:flex-row lomakkeelle ja listalle; kaaviolle w-full ja kirjaston responsive-kontti.",
          "Jokainen input: <label htmlFor=…> ja id; jokainen nappi: kuvaava teksti, ei pelkkä kuvake.",
          "Näkyvä kohdistus: focus:ring-2 focus:ring-orange-600 – älä poista outlinea ilman korvaavaa.",
          "Lighthouse-raportti tallennetaan HTML:nä, ei vain kuvakaappauksena luvusta."
        ],
        code: "TARKISTUSLISTA\n[ ] ei vaakasuuntaista rullausta puhelimella\n[ ] Tab kulkee lomake → lista → vuosi → kiertoreitti loogisessa järjestyksessä\n[ ] jokaisella kentällä label, jokaisella napilla teksti\n[ ] kohdistus näkyy\n[ ] kontrasti vähintään 4,5:1 tekstille\n[ ] yksi h1, väliotsikot h2\n[ ] kiertoreitti antaa saman tiedon kuin tooltip ilman hiirtä\n[ ] Lighthouse ennen: … / jälkeen: …",
        test: "Irrota hiiri (tai älä koske siihen) ja lisää Utsjoki, vaihda vuosi ja lue tammikuun 15. päivän arvo pelkällä näppäimistöllä. Jos jokin vaihe ei onnistu, se on korjauslistan rivi."
      },
      example: "Päiväkirja: ”Lighthouse-saavutettavuus 71 → 96. Korjaukset: label-kytkennät (3), kontrasti listan harmaassa tekstissä, näkyvä kohdistus napeille. Puhelimella kaavio vuoti oikealle 40 px: korjattu w-full ja ResponsiveContainer. Päivävalitsin toteutettu: näyttää 15.1.2026 Utsjoki 0 min, Helsinki 6 h 30 min.”",
      notEnough: "”Testasin puhelimella ja toimii” ilman kuvakaappauksia, tai Lighthouse ajettu vain jälkeen, tai kiertoreitti jätetty pois koska ”kirjasto ei tue”."
    },

    13: {
      type: "laatu",
      feature: "Oman sovelluksen uhkalista on kirjoitettu ja testattu: rajapinta hylkää huonot syötteet hallitusti, paikan nimi näytetään turvallisesti, yhden paikan virhe ei kaada muita, eikä repossa ole salaisuuksia.",
      excerpt: "Jos nimi kirjoitetaan väärin tai sitä ei tunneta, sovelluksen pitää sanoa se selvästi eikä jäädä tyhjäksi.",
      connection: "Sovellus on julkinen, joten kuka tahansa voi lähettää sille mitä tahansa. Tämä viikko arvioi, mitä silloin tapahtuu. Suuri osa on työviikon 5 validoinnin todentamista, mutta uhkalista pakottaa ajattelemaan oman sovelluksen näkökulmasta, ei yleisen listan.",
      deliverable: "project-docs/tietoturva-arvio.md: uhkalista (uhka, testi, tulos, toimenpide), syötetaulukko T15 curlilla ajettuna, XSS-testin kuvakaappaus, Promise.allSettled-käsittely yhden paikan virheelle, korjauscommitit.",
      why: "Tietoturvan arviointi on oma vaatimuksensa, ja arviointi tarkoittaa omaa uhkalistaa, ei kopioitua yleislistaa. year=999999 voi ajaa palvelimen laskemaan miljoonia päiviä; paikan nimi <script> voi suorittaa koodia, jos se sijoitetaan väärin. Molemmat testataan omalla sovelluksella.",
      done: "Uhkalistassa on 5–8 riviä omasta sovelluksesta muodossa uhka → testi → tulos → toimenpide; T15:n syötetaulukko on ajettu curlilla ja jokainen rivi, jolla saatu poikkesi odotetusta, on korjattu tai issueina; XSS-testi näyttää nimen tekstinä; tuntematon paikka listassa ei kaada muita sarjoja; git log ja tiedostot eivät sisällä avaimia tai salasanoja.",
      record: "Kirjoita työviikon 13 merkintään: uhkalistan rivit ja mitkä niistä paljastivat korjattavaa, T15:n poikkeamat, XSS-testin tulos ja se, miten yhden paikan virhe nyt käsitellään.",
      skills: ["tietoturvan arviointi omalla uhkalistalla", "syötteiden rajaaminen", "XSS-testaus", "virheenkäsittely rinnakkaisissa hauissa"],
      termit: ["XSS", "CORS"],
      steps: [
        ["Uhkalista omasta sovelluksesta.", "Kirjoita 5–8 riviä: mikä voi mennä pieleen juuri tässä sovelluksessa. Esimerkiksi: ylipitkä year → pitkä silmukka; paikan nimi <script> → suoritetaan sivulla (XSS eli cross-site scripting); ylipitkä city → muistin käyttö; ulkoinen geokoodauspalvelu ei vastaa → pyyntö jää jumiin; salaisuudet repossa; CORS eli selaimen alkuperärajoitus, jos sovellus ja rajapinta ovat eri osoitteissa. Jokaiselle riville testi ja odotettu tulos ennen ajoa."],
        ["T15: syötetaulukko curlilla.", "Aja syötteet: tyhjä city, 200 merkin city, year=1800, year=abc, year=999999, city=<script>alert(1)</script>. Kirjaa saatu HTTP-koodi ja vastaus jokaiselle. Vertaa odotettuun."],
        ["XSS-testi selaimessa.", "Lisää lomakkeella paikka nimellä <script>alert(1)</script>. Odotettu: rajapinta palauttaa 404, ja nimi näkyy listassa ja virheilmoituksessa tekstinä, ei suoritu. React suojaa tekstisisällön itse, mutta tarkista, ettet käytä dangerouslySetInnerHTML-ominaisuutta missään. Kuvakaappaus."],
        ["Yhden paikan virhe.", "Muuta useLocations käyttämään Promise.allSettled-funktiota tai käsittele jokaisen paikan virhe erikseen: kun ”Tuntematonkylä” epäonnistuu, muut sarjat pysyvät kaaviossa ja virhe näkyy listassa sen paikan kohdalla. Testaa neljällä paikalla, joista yksi on väärin kirjoitettu."],
        ["Salaisuudet ja korjaukset.", "Tarkista git log ja tiedostot: ei avaimia, salasanoja eikä .env-tiedostoa repossa. Korjaa vain uhkalistan rivit, joilla saatu poikkesi odotetusta; muut kirjataan issueiksi. Jos aikaa jää, toteuta samannimisten paikkojen käsittely (P1). Pull request, julkaisu, viikkopalaveri."]
      ],
      help: {
        title: "Uhkalistan ja syötetaulukon pohjat",
        tree: "project-docs/tietoturva-arvio.md\n├─ 1 Uhkalista: uhka → testi → tulos → toimenpide (5–8 riviä)\n├─ 2 T15 syötetaulukko: syöte → odotettu → saatu\n├─ 3 XSS-testi: kuvakaappaus\n├─ 4 Salaisuustarkistus: git log --all -p | grep -i key/secret/password\n└─ 5 Mitä jätettiin issueiksi ja miksi",
        actions: [
          "Rajaa year jo validoinnissa (1900–2100): silloin year=999999 ei koskaan pääse silmukkaan.",
          "Rajaa city 100 merkkiin ja hylkää tyhjä; palauta aina JSON, ei PHP-varoituksia.",
          "Promise.allSettled palauttaa jokaisen haun tilan erikseen: käsittele fulfilled ja rejected paikkakohtaisesti.",
          "Jos käytät ulkoista geokoodausta: aseta aikakatkaisu (esim. 5 s) ja palauta 502 JSONina, kun palvelu ei vastaa."
        ],
        code: "UHKALISTAN RIVI\n| Uhka | Testi | Odotettu | Saatu | Toimenpide |\n| year=999999 laskee miljoonia päiviä | curl …?city=Helsinki&year=999999 | 400 alle 100 ms | … | rajaus 1900–2100 (tehty vk 5) / korjaus |\n| city=<script> suoritetaan | lomake + curl | 404, nimi tekstinä | … | – |\n\nT15 · syötetaulukko\n| Syöte | Odotettu | Saatu |\n| city= | 400 | |\n| city=200 merkkiä | 400 | |\n| year=abc | 400 | |\n| year=1800 | 400 | |\n| city=<script>alert(1)</script> | 404, ei suoritusta | |",
        test: "Lisää Helsinki, Rovaniemi, ”Tuntematonkylä” ja Utsjoki. Jos kaavio tyhjenee tai kolme oikeaa paikkaa katoavat, yhden paikan virhe kaataa edelleen muut."
      },
      example: "Uhkalista: kuusi riviä, joista kahdessa saatu poikkesi odotetusta: ”year=abc antoi 500 ja PHP-varoituksen → korjattu is_numeric-tarkistuksella, commit 9d2f” ja ”Tuntematonkylä tyhjensi kaavion → Promise.allSettled, commit a41c”. XSS-testi: nimi näkyy tekstinä, kuvakaappaus. Salaisuustarkistus: ei osumia.",
      notEnough: "Yleinen tietoturvalista (OWASP Top 10 kopioituna) ilman omia testejä, tai syötetaulukko, jonka saatu-sarake on tyhjä tai täytetty olettaen."
    },

    14: {
      type: "laatu",
      feature: "Testiraportti kokoaa 16 testitapausta kolmessa luokassa odotusarvoineen, testit ajetaan komennolla PHP:llä ja TypeScriptillä, ja vähintään kaksi täydellistä virheenkorjausketjua on kirjattu aidoista havainnoista.",
      excerpt: "Se näyttää Suomen paikkakunnat oikein kaamoksesta yöttömään yöhön.",
      connection: "Testit T01–T16 on kirjattu ja ajettu viikoilla 4–13 sitä mukaa kuin toiminnot valmistuivat. Tämä viikko kokoaa ne yhdeksi raportiksi, ajaa kaiken uudelleen julkaistua versiota vasten ja kirjaa virheenkorjausketjut bug-issuelistalta.",
      deliverable: "project-docs/testiraportti.md (16 tapausta: luokka, odotettu, saatu, tila, lähde, ajettava vai käsin), testiajojen tulosteet PHP:stä ja Vitestistä, kaksi täydellistä virheenkorjausketjua commit-linkein.",
      why: "Testaaminen on oma vaatimuksensa, ja virheiden etsiminen ja korjaaminen toinen. Ketju havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti on se muoto, jolla korjaus todennetaan. Regressiotesti tarkoittaa, että vanhat testit ajetaan uudelleen korjauksen jälkeen: korjaus ei saa rikkoa aiemmin toiminutta.",
      done: "Raportissa on 16 tapausta luokiteltuina (normaali 6, rajat 6, virheet 4) odotusarvoin ja lähtein; komennolla ajettavat (T01–T07, T10–T13, T15) ja käsin ajettavat selaintestit (T08, T09, T14, T16) on eroteltu; `composer test` tai `php tests/run.php` ja `npm test` menevät läpi ja tulosteet ovat repossa; kaksi ketjua on kirjattu aidoista bug-issueista täydellisinä.",
      record: "Kirjoita työviikon 14 merkintään: montako testiä meni läpi ensimmäisellä ajolla, mikä ei mennyt ja miksi, kahden ketjun havainnot ja syyt sekä se, mikä regressiotesti paljasti jotain.",
      skills: ["testiraportin kokoaminen", "ajettavat ja käsin ajettavat testit", "virheenkorjausketju", "regressiotestaus"],
      termit: ["regressiotesti"],
      steps: [
        ["Kokoa raportti.", "Listaa T01–T16 yhteen taulukkoon: tunnus, luokka (normaali / raja / virhe), syöte, odotettu tulos ja sen lähde, ajotapa (komento vai selain), tulos, tila. Odotusarvot tulevat viikkojen 4–13 kirjauksista, ei omasta koodista."],
        ["Aja kaikki uudelleen.", "Aja PHP-testit (`composer test` tai `php tests/run.php`) ja Vitest-testit (`npm test`) ja tallenna tulosteet. Aja selaintestit T08, T09, T14 ja T16 julkaistua versiota vasten ja kirjaa kuvakaappaukset."],
        ["Valitse kaksi aitoa havaintoa.", "Avaa bug-issuelista (työviikoilta 4–13). Valitse kaksi havaintoa, joilla on selkeä toistamisohje. Jos lista on tyhjä, kerro ohjaajalle: hän merkitsee vikatehtäviä. Keksittyjä bugeja ei kirjata."],
        ["Kirjaa ketjut täydellisinä.", "Jokaisesta: havainto (issue), toistamisohje askelina, syy (mikä koodissa oli väärin ja miksi), korjauscommit linkkinä, uusintatesti (sama testi läpi) ja regressiotesti (koko testisarja läpi korjauksen jälkeen)."],
        ["Viikkopalaveri ja koodikatselmoinnin sopiminen.", "Sovi ohjaajan kanssa, että hän lukee koodin tämän viikon aikana ja tuo kolme nimettyä havaintoa työviikon 15 maanantaipalaveriin."]
      ],
      help: {
        title: "Testiraportin ja ketjun pohjat",
        tree: "project-docs/\n├─ testiraportti.md\n│  ├─ 1 Yhteenveto: 16 tapausta, läpi/ei läpi, luokat\n│  ├─ 2 Taulukko T01–T16\n│  ├─ 3 Tulosteet: composer test / php tests/run.php, npm test\n│  ├─ 4 Selaintestit kuvakaappauksin\n│  └─ 5 Virheenkorjausketjut 1 ja 2\n└─ (ketju 3 tulee työviikolla 17)\n\nLUOKAT\nnormaali: T01 T02 T05 T06 T08 T11\nrajat:    T03 T04 T10 T12 T13 T14\nvirheet:  T07 T09 T15 T16",
        actions: [
          "Yksi rivi per testi; odotusarvon lähde näkyviin (timeanddate, api-sopimus, oma päätös vk 9).",
          "Tulosteet tekstinä repoon, ei vain kuvakaappauksena.",
          "Ketjun ”syy” on selitys koodista, ei ”oli bugi”.",
          "Regressiotesti = koko sarja läpi korjauksen jälkeen; kirjaa komento ja tulos."
        ],
        code: "VIRHEENKORJAUSKETJU\n1 Havainto: issue #14 ”utsjoki pienillä kirjaimilla → 404” (vk 5)\n2 Toistamisohje: curl …?city=utsjoki&year=2026\n3 Syy: strtolower ei muunna ä:tä ja ö:tä; avain ei täsmännyt\n4 Korjaus: commit 3b7e – mb_strtolower($name, 'UTF-8')\n5 Uusintatesti: T06 läpi\n6 Regressiotesti: composer test → 7/7 läpi, npm test → 5/5 läpi",
        test: "Anna raportti toiselle opiskelijalle ja pyydä häntä ajamaan T06 pelkän raportin ohjeella. Jos hän ei onnistu, toistamisohje on puutteellinen."
      },
      example: "Raportti: ”16 testitapausta, 15 läpi ensimmäisellä ajolla; T13 ei läpi: yöttömän yön jakso tuotti 2 merkkiä → bug #44 → jakson rajaus korjattu commit e12a → T13 läpi → regressio 12/12.” Ketju 1 (#14, ä/ö) ja ketju 2 (#44, leikkausjakso) täydellisinä.",
      notEnough: "Taulukko, jossa kaikki 16 ovat ”läpi” ilman tulosteita, tai ketju, jonka syy on ”korjasin bugin” ilman koodin selitystä ja regressiotestiä."
    },

    15: {
      type: "laatu",
      feature: "Ohjaajan koodikatselmoinnin kolme havaintoa on refaktoroitu ja dokumentoitu, README kertoo käyttöönoton ja rajapinnan, riippuvuustaulukko on tehty tulosteista ja LICENSE on repossa tai kirjattu avoimeksi.",
      excerpt: "Mukana on ohje, jolla saan sen käyntiin kysymättä keneltäkään.",
      connection: "Sovellus toimii; nyt siitä tehdään ylläpidettävä ja dokumentoitu. Refaktorointi tarkoittaa rakenteen parannusta ilman toiminnan muutosta, ja testit todistavat, että toiminta ei muuttunut. Havainnot tulevat ohjaajalta, ei listasta, jonka kirjoitit itse etukäteen.",
      deliverable: "Refaktorointimuistio (kolme havaintoa, ennen ja jälkeen -diffit, perustelut, testit läpi), README käyttäjälle ja kehittäjälle, riippuvuustaulukko lisensseineen, LICENSE-tiedosto tai kirjattu avoin asia.",
      why: "Ylläpidettävä koodi on oma vaatimuksensa, ja se todennetaan parhaiten toisen ihmisen löydöksistä: koodi, jota toinen ei ymmärrä, ei ole ylläpidettävää. README testataan työviikolla 16 ulkopuolisella, joten se kirjoitetaan käyttäjälle, ei arvioijalle.",
      done: "Kolme ohjaajan nimeämää havaintoa on refaktoroitu, jokaisesta on diff-linkki, perustelu ja testiajo läpi; README sisältää käyttöönoton tyhjään ympäristöön, kehityskomennot, rajapinnan kuvauksen esimerkkivastauksella ja riippuvuustaulukon `npm ls --depth=0`- ja `composer show`-tulosteista lisensseineen; LICENSE on repossa tai suunnitelmassa on avoin asia päivämäärällä.",
      record: "Kirjoita työviikon 15 merkintään: ohjaajan kolme havaintoa ja mitä muutit, miten testit todistivat toiminnan säilyneen, README:n rakenne ja riippuvuustaulukon lisenssit sekä LICENSE-tilanne.",
      skills: ["refaktorointi testien suojassa", "koodikatselmoinnin vastaanotto", "README käyttäjälle", "riippuvuuksien ja lisenssien kirjaaminen"],
      termit: ["refaktorointi"],
      steps: [
        ["Maanantai: ohjaajan havainnot.", "Ota viikkopalaverissa vastaan ohjaajan kolme nimettyä havaintoa (tiedosto, rivi, mikä vaikeuttaa lukemista). Kirjaa ne päivämäärällä ja nimellä. Älä puolustele: kysy, mitä hän odotti näkevänsä."],
        ["Refaktoroi yksi kerrallaan.", "Jokaisesta havainnosta oma haara ja commit: aja testit ennen, tee muutos, aja testit jälkeen. Tallenna diff-linkki ja perustelu muistioon. Jos testit eivät kata muutettua kohtaa, kirjoita testi ensin."],
        ["README käyttäjälle ja kehittäjälle.", "Kirjoita kaksi osaa: 1) käyttöönotto tyhjään ympäristöön askel askeleelta (PHP, Node, komennot, portit, build), 2) kehittäjälle: kansiorakenne, kehityskomennot, testien ajo, rajapinnan kuvaus esimerkkipyynnöllä ja -vastauksella. Kirjoita niin, että työviikon 16 testaaja onnistuu ilman sinua."],
        ["Riippuvuustaulukko tulosteista.", "Aja `npm ls --depth=0` client-kansiossa ja `composer show` server-kansiossa. Kirjoita taulukko: paketti, versio, rooli tässä projektissa, lisenssi (tarkista paketin omasta package.json- tai composer.json-tiedostosta, älä muistista)."],
        ["LICENSE ja julkaisu.", "Lisää LICENSE ohjaajan päätöksen mukaan. Jos päätöstä ei ole, kirjaa suunnitelmaan avoin asia päivämäärällä; älä valitse itse. Pull request, julkaisu."]
      ],
      help: {
        title: "Refaktorointimuistion ja README:n rakenne",
        tree: "project-docs/refaktorointi-vk15.md\n├─ Havainto 1: ohjaaja, päivä, tiedosto:rivi, mitä hän odotti\n│  ├─ ennen (koodilainaus tai diff-linkki)\n│  ├─ jälkeen\n│  ├─ perustelu\n│  └─ testit: ennen … / jälkeen … läpi\n├─ Havainto 2 …\n└─ Havainto 3 …\n\nREADME.md\n├─ Mitä Valokaari tekee (3 riviä)\n├─ Käyttöönotto tyhjään ympäristöön (numeroidut askeleet)\n├─ Kehitys: komennot, kansiot, testit\n├─ Rajapinta: GET /api/daylight, esimerkkipyyntö ja -vastaus, virheet\n├─ Riippuvuudet: taulukko lisensseineen\n├─ Tietolähde ja lisenssi (paikkakunnat)\n└─ Lisenssi",
        actions: [
          "Refaktorointi ei muuta toimintaa: jos joudut muuttamaan testiä, se ei ole refaktorointi vaan muutos.",
          "README:n käyttöönotto-osa kirjoitetaan komentoina, jotka voi kopioida: yksi komento per rivi.",
          "Lisenssi tarkistetaan paketin omasta tiedostosta: npm view <paketti> license.",
          "Riippuvuus, jolle ei löydy roolia tässä projektissa, poistetaan."
        ],
        code: "RIIPPUVUUSTAULUKKO\n| Paketti | Versio | Rooli tässä projektissa | Lisenssi |\n| react | 19.x | komponenttikirjasto | MIT |\n| recharts | 2.x | kaavion piirto | MIT |\n| tailwindcss | 4.x | tyyliluokat lomakkeelle ja listalle | MIT |\n| vitest | 2.x | TypeScript-testit | MIT |\n| phpunit/phpunit | 11.x | PHP-testit | BSD-3-Clause |\n\nKÄYTTÖÖNOTON ASKEL\n3. Käynnistä rajapinta:\n   php -S localhost:8000 -t server/public\n   Tarkista: http://localhost:8000/api/health → {\"status\":\"ok\"}",
        test: "Kloonaa repo tyhjään kansioon ja seuraa README:tä sanasta sanaan. Jokainen kohta, jossa joudut muistelemaan, on ohjeen puute."
      },
      example: "Muistio: ”Havainto 1 (ohjaaja ML, 15. työviikon ma): index.php:n reititys ja validointi samassa 80 rivin funktiossa → jaettu route(), validate(), respond() → composer test 7/7 ennen ja jälkeen, diff #52.” README:n käyttöönotto kahdeksana komentona, riippuvuustaulukossa 7 pakettia lisensseineen.",
      notEnough: "Refaktoroinnit, jotka valitsit itse etukäteen ja jotka olit jo tehnyt, README arvioijalle (”tässä projektissa osoitan…”), tai lisenssit kirjattu muistista."
    },

    16: {
      type: "julkaisu",
      feature: "Sisältö on jäädytetty, julkaisuehdokas v1.0-rc1 on julkaistu ja merkitty Git-tagilla, ja nimetty ulkopuolinen henkilö on testannut sen pelkän kirjallisen ohjeen avulla.",
      excerpt: "Mukana on ohje, jolla saan sen käyntiin kysymättä keneltäkään.",
      connection: "README on kirjoitettu; nyt se pannaan koetukselle: ensin itse puhtaassa ympäristössä, sitten ulkopuolisen käsissä. Julkaisuehdokas eli RC (release candidate) on versio, joka voisi olla v1.0, jos testaaja ei löydä estäviä virheitä.",
      deliverable: "Jäädytyspäätös ja issue-luokittelu, tagilla merkitty julkaisuehdokas julkisessa osoitteessa, oma asennuspöytäkirja, korjattu README, ulkopuolisen testauspöytäkirja ja estävien issueiden lista.",
      why: "Julkaisutestaus julkaisuehdokasta vasten jättää kokonaisen viikon puskuria: mitä tahansa testaaja löytää, korjaukselle on aikaa ennen v1.0:aa. Jäädytys estää viimeisten viikkojen valumisen uusiin ominaisuuksiin.",
      done: "v1.0-rc1 on julkisessa osoitteessa ja merkitty tagilla; oma asennuspöytäkirja (toinen kone tai tyhjä kansio) ja ulkopuolisen testauspöytäkirja (nimetty rooli, ajankohta, testaajan omat sanat erillään tulkinnasta) ovat repossa; estävät virheet on kirjattu issueiksi, ei korjattu kiireellä tällä viikolla.",
      record: "Kirjoita työviikon 16 merkintään: jäädytyspäätös ja mitä jätit v1.1-listalle, oman asennuksen epäröintikohdat ja README:hen tehdyt korjaukset sekä ulkopuolisen tärkeimmät havainnot sitaatteina.",
      skills: ["sisältöjäädytys", "Git-tag ja release", "puhdas asennus ohjeella", "julkaisutestauksen järjestäminen"],
      termit: ["RC", "Git-tag"],
      steps: [
        ["Jäädytyspäätös.", "Päätä ja kirjaa: uusia ominaisuuksia ei enää lisätä. Luokittele jäljellä olevat issuet estäviksi (rikkoo P0:n) tai v1.1-listalle."],
        ["Julkaisuehdokas tagilla.", "Julkaise nykyinen main ja merkitse se Git-tagilla v1.0-rc1 (rc = release candidate eli julkaisuehdokas). Vie tag etärepositoryyn ja tee siitä GitHub-release, jonka kuvaus kertoo, mitä versio sisältää."],
        ["Oma puhdas asennus.", "Asenna sovellus toiselle koneelle tai tyhjään kansioon pelkän README:n avulla: PHP, Node, kloonaus, riippuvuudet, build, käynnistys. Pidä pöytäkirjaa jokaisesta kohdasta, jossa epäröit tai jouduit muistelemaan. Korjaa README, ennen kuin annat sen kenellekään."],
        ["Ulkopuolisen julkaisutestaus.", "Anna nimetylle ulkopuoliselle README ja julkinen osoite ilman suullista apua. Testitehtävät kirjallisena: lisää Utsjoki ja Helsinki, valitse vuosi 2028, lue tooltipista yksi päivä, etsi leikkauspiste. Kirjaa hänen sanansa sitaatteina."],
        ["Pöytäkirja ja estävät issueiksi.", "Kirjoita testauspöytäkirja: rooli, ajankohta, sitaatit, oma tulkinta erikseen. Luokittele estävät virheet issueiksi seuraavan viikon korjattaviksi. Älä korjaa kiireellä tällä viikolla."]
      ],
      help: {
        title: "Julkaisun tarkistuslista ja testauspöytäkirja",
        tree: "project-docs/\n├─ asennuspoytakirja-vk16.md   oma puhdas asennus, epäröintikohdat, README-korjaukset\n└─ julkaisutestaus-vk16.md     ulkopuolisen testaus, sitaatit, estävät\n\nTESTAAJAN TEHTÄVÄLISTA (annetaan kirjallisena)\n1 Avaa osoite ja lisää Utsjoki ja Helsinki\n2 Vaihda vuosi 2028:aan\n3 Lue tooltipista, montako tuntia Utsjoella on valoa 15. tammikuuta\n4 Etsi päivä, jona Helsingissä ja Utsjoella on yhtä pitkä päivä\n5 (kehittäjätestaaja) Käynnistä sovellus omalla koneella README:n ohjeilla",
        actions: [
          "git tag -a v1.0-rc1 -m \"Julkaisuehdokas 1\" && git push origin v1.0-rc1, sitten release GitHubissa.",
          "Puhdas asennus = ympäristö, jossa ei ole mitään aiempaa: toinen kone, uusi käyttäjä tai tyhjä kansio ilman node_modules- ja vendor-kansioita.",
          "Älä auta testaajaa suullisesti: jokainen kysymys on ohjeen puute, ei testaajan vika.",
          "Estävä = rikkoo P0:n tai estää käytön; muu menee v1.1-listalle."
        ],
        code: "JULKAISUN TARKISTUSLISTA\n[ ] jäädytyspäätös kirjattu, issuet luokiteltu\n[ ] tuotantobuild syntyy alustalla puhtaasta main-haarasta\n[ ] savutesti julkisessa osoitteessa: paikan lisäys, tooltip, vuosivalinta\n[ ] git tag v1.0-rc1 luotu ja viety, release tehty\n[ ] oma puhdas asennus tehty ja README korjattu\n[ ] ulkopuolisen pöytäkirja repossa, estävät issueina\n\nPÖYTÄKIRJAMERKINTÄ\nVaihe N: mitä tein → mihin pysähdyin → mitä README:hen lisättiin\nTestaajan sitaatti: ”…”\nOma tulkinta: …\nLuokitus: estävä / v1.1",
        test: "Anna README ja osoite testaajalle ilman yhtään suullista lisäystä ja katso kelloa: kuinka kauan alkuun pääseminen kesti."
      },
      example: "Pöytäkirja: ”Vaihe 4: README ei kertonut, että PHP käynnistetään server/public-kansiosta → lisätty -t server/public.” Testaajan sitaatti: ”Mikä tää rc1 tarkoittaa?” → tulkinta: release-kuvaus liian tekninen → v1.1. Estävät: 1 (vuosivalinta ei päivittänyt legendaa) → issue #57.",
      notEnough: "”Asensin itse uudelleen ja toimi”: oma testaus ei ole ulkopuolinen katselmointi, eikä pöytäkirjaton asennus todista mitään."
    },

    17: {
      type: "julkaisu",
      feature: "Julkaisutestauksen estävät virheet on korjattu täydellisenä virheenkorjausketjuna, v1.0 on julkaistu ja merkitty tagilla, ja sovellus on luovutettu asiakkaan roolissa toimivalle ohjaajalle, joka on vastannut kysymyksellä.",
      excerpt: "Valmis tarkoittaa minulle tätä: sovellus on verkossa osoitteessa, jonka voin laittaa sivuillemme.",
      connection: "Edellisen viikon havainnot muuttuvat korjauksiksi, ja julkaisuehdokkaasta tulee v1.0. Luovutusviesti saa vastaanottajan: ohjaaja lukee sen asiakkaan roolissa ja kysyy yhden asiakaskysymyksen, johon vastaat. Loppuviikko on puskuria, jota ei täytetä uusilla ominaisuuksilla.",
      deliverable: "Kolmas virheenkorjausketju, regressioajo, v1.0-tag ja release, savutestin tulos, julkaisutiedote, luovutusviesti sekä asiakkaan kysymys ja vastaus.",
      why: "v1.0 ilman korjattuja estäviä virheitä on vain julkaisuehdokas uudella nimellä. Luovutusviesti ilman vastaanottajaa on kirjoitusharjoitus; kun ohjaaja vastaa kysymyksellä, se on asiakasviestintää.",
      done: "v1.0 on julkisessa osoitteessa ja merkitty tagilla; kolmas ketju on täydellisenä repossa (estävästä virheestä tai bug-listan aidosta havainnosta); regressioajo ja savutesti on kirjattu; julkaisutiedote ja luovutusviesti ovat repossa; ohjaajan asiakaskysymys ja vastauksesi on kirjattu; viikolle jäi puskuriaikaa eikä mitään uutta aloitettu.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät korjattiin ja miten, v1.0:n tagi ja tiedotteen ydin, mitä jätit v1.1-listalle, ohjaajan asiakaskysymys ja vastauksesi.",
      skills: ["julkaisu tuotantoon", "release-käytännöt", "regressiotestaus", "asiakasviestintä"],
      termit: ["savutesti"],
      steps: [
        ["Estävien korjaus ketjuna.", "Korjaa työviikon 16 estävät havainnot täydellisenä ketjuna: havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Jos estäviä ei löytynyt, ota kolmas ketju bug-issuelistan aidosta havainnosta. Keksittyjä ei kirjata."],
        ["Regressioajo.", "Aja koko testisarja (PHP ja Vitest) ja selaintestit ennen julkaisua. Kirjaa tulos."],
        ["v1.0-tag ja release.", "Merkitse versio Git-tagilla v1.0, vie se etärepositoryyn ja tee release. Julkaise tuotantoon."],
        ["Savutesti tuotannossa.", "Savutesti on nopea tarkistus julkaisun jälkeen: lisää paikka, lue tooltip, vaihda vuosi, etsi leikkauspiste julkaistussa v1.0:ssa. Kirjaa tulos."],
        ["Julkaisutiedote ja luovutusviesti.", "Kirjoita julkaisutiedote (mitä sovellus tekee, tunnetut rajoitteet, v1.1-lista) ja luovutusviesti asiakaskielellä: osoite, mitä kuvasta näkee, mitä sovellus ei tee, kehen ottaa yhteyttä. Viittaa työviikon 10 katselmoijan sitaattiin ja siihen, mitä sen perusteella muutettiin."],
        ["Asiakkaan kysymys.", "Lähetä luovutusviesti ohjaajalle asiakkaan roolissa. Hän vastaa yhdellä asiakaskysymyksellä (esimerkiksi ”Voinko lisätä tämän suoraan sivuillemme?”). Vastaa siihen asiakaskielellä ja kirjaa molemmat repoon."]
      ],
      help: {
        title: "Julkaisutiedotteen ja luovutusviestin pohjat",
        tree: "git tag -a v1.0 -m \"Ensimmäinen tuotantoversio\"\ngit push origin v1.0\n→ release GitHubissa\n→ julkaisu tuotantoon\n→ savutesti julkisessa osoitteessa\n→ project-docs/julkaisutiedote.md\n→ project-docs/luovutusviesti.md (+ asiakkaan kysymys ja vastaus)",
        actions: [
          "Korjaa vain estävät virheet; v1.1-lista on olemassa juuri tätä varten.",
          "Aja regressiotestit ennen tagia, älä sen jälkeen.",
          "Kirjoita julkaisutiedote ennen luovutusviestiä: tiedote on tekninen, viesti on asiakkaalle.",
          "Lue luovutusviesti ääneen ja poista jokainen sana, jota matkailuyrittäjä ei käyttäisi itse."
        ],
        code: "JULKAISUTIEDOTTEEN POHJA\n# Valokaari v1.0\nMitä sovellus tekee: 3–5 riviä\nMitä testattiin: 16 testitapausta, 3 virheenkorjausketjua, julkaisutestaus\nTunnetut rajoitteet: rehellisesti\nv1.1-lista: mitä on tulossa\n\nLUOVUTUSVIESTIN POHJA (asiakaskielellä)\n- Osoite, josta sovellus löytyy\n- Mitä kuvasta näkee: 3 virkettä\n- Mitä katselmoinnissa muutettiin ja miksi (sitaatti)\n- Mitä sovellus EI tee\n- Kehen otat yhteyttä, jos jokin ei toimi",
        test: "Anna luovutusviesti luettavaksi jollekulle, joka ei ole nähnyt projektia. Jos hän kysyy, mitä jokin sana tarkoittaa, kirjoita kohta uudelleen."
      },
      example: "Ketju 3: issue #57 ”vuosivalinta ei päivittänyt legendaa” → toistamisohje → syy: legenda luki vanhaa tilaa → commit b3d9 → T14 läpi → regressio 12/12 ja 5/5. Tag v1.0, savutesti läpi. Ohjaajan kysymys: ”Toimiiko tää meidän sivuilla, jos meillä on WordPress?” → vastaus asiakaskielellä repossa.",
      notEnough: "v1.0-tag ilman työviikon 16 havaintojen käsittelyä, tai luovutusviesti, jota kukaan ei lukenut eikä siihen vastattu."
    },

    18: {
      type: "naytto",
      feature: "Mitään uutta ei rakenneta: näyttöaineisto on täsmälinkitetty kaikkiin 32 vaatimukseen, 8–10 minuutin demo on harjoiteltu toiselle henkilölle ja itsearviointi on kirjoitettu kolmesta nimetystä tilanteesta.",
      connection: "Sovellus on luovutettu; viimeinen viikko kokoaa 17 työviikon aineiston niin, että arvioija löytää jokaisen työnäytteen. Itsearviointi sidotaan ihmisiin, jotka olivat mukana: katselmoija, julkaisutestaaja ja ohjaaja.",
      deliverable: "Täsmälinkitetty näyttömatriisi, harjoiteltu demorunko, itsearviointi kolmesta tilanteesta ohjaajan vastakommentilla ja luovutettu näyttöpaketti.",
      why: "Näytössä arvioidaan se, mikä löytyy: osaaminen, jota arvioija ei löydä, ei ole arvioijalle olemassa. Oman toiminnan arviointi tiimin jäsenenä todennetaan suhteessa niihin ihmisiin, joiden kanssa työskentelit, ei yleislauseilla.",
      done: "Jokainen matriisin 32 riviä osoittaa olemassa olevaan aineistoon ja linkki aukeaa; demo on ajettu kellon kanssa vähintään kerran toiselle henkilölle; itsearviointi käsittelee työviikon 10 palautteen, työviikon 16 testaajan epäröinnin ja yhden viikkopalaverin, jossa sovittu muuttui, ja ohjaaja on kirjannut lyhyen vastakommentin.",
      record: "Kirjoita työviikon 18 merkintään: mitkä matriisin kohdat olivat heikoimmin todennettuja ja miten korjasit ne, demon kesto harjoituksessa sekä itsearvioinnin ydin ja ohjaajan kommentti.",
      skills: ["näyttöaineiston kokoaminen", "esittäminen", "itsearviointi suhteessa tiimiin"],
      resources: [["Avaa näyttömatriisi", "#view-naytto", false]],
      steps: [
        ["Matriisin täsmälinkitys.", "Käy kaikki 32 vaatimusta läpi ja liitä jokaiseen työviikko, työnäyte ja toimiva linkki: commit, issue, dokumentti tai kuvakaappaus. Käytä näyttömatriisin rivien viikkomerkintöjä hakemistona."],
        ["Aukkotarkistus.", "Etsi kohdat, joissa linkki puuttuu tai osoittaa epämääräiseen aineistoon. Korjaa ne nyt, kun aikaa vielä on. Älä rakenna mitään uutta: jos työnäyte puuttuu, kirjaa se rehellisesti."],
        ["Demoharjoitus toiselle ihmiselle.", "Harjoittele 8–10 minuutin demo kellon kanssa: paikan lisäys → tooltip → kaamos ja yötön yö Utsjoella → leikkauspiste Helsinki–Rovaniemi → Daylight-moduuli ja sen testit → yksi virheenkorjausketju → Git-historia haaroineen → AI-lokin tarkistettu käyttö."],
        ["Itsearviointi kolmesta tilanteesta.", "Kirjoita project-docs/itsearviointi.md: 1) miten otit vastaan työviikon 10 katselmoijan palautteen ja mitä siitä seurasi, 2) miten reagoit työviikon 16 testaajan epäröintiin, 3) yksi viikkopalaveri, jossa sovittu muuttui: mitä sovittiin, mitä toteutui, mitä tekisit toisin. Pyydä ohjaajalta lyhyt vastakommentti ja liitä se."],
        ["Puskuri ja luovutus.", "Tarkista aineiston aukot vielä kerran toisen henkilön kanssa ja luovuta paketti. Jätä puskuria korjauksille."]
      ],
      example: "Itsearviointi: ”Työviikolla 10 katselmoija ei löytänyt lomaketta. Ensireaktioni oli selittää; kirjasin sen sitaattina ja tein issue #30:n. Työviikolla 16 testaaja pysähtyi PHP:n käynnistykseen, ja ymmärsin, että README oli kirjoitettu minulle, ei hänelle.” Ohjaajan kommentti: ”Palautteen kirjaaminen erillään tulkinnasta parani selvästi viikosta 10 viikkoon 16. ML.”",
      notEnough: "”Opin paljon ja projekti sujui hyvin”, ilman tilanteita, nimiä ja sitä, mitä tekisit toisin, tai matriisi, jossa linkit osoittavat repon etusivulle.",
      paivat: [
        ["Sisältöjäädytys", "Viimeinen hyväksytty versio; matriisin täsmälinkitys alkaa."],
        ["Aineisto", "Päiväkirja, AI-loki, testiraportti ja linkkien tarkistus."],
        ["Harjoittelu", "8–10 minuutin demo kellon kanssa toiselle henkilölle."],
        ["Itsearviointi", "Kolme nimettyä tilannetta ja ohjaajan vastakommentti."],
        ["Luovutus", "Näyttömatriisi täsmälinkitettynä, projektipäiväkirja, AI-loki ja julkaistu v1.0 luovutettu arvioijalle."]
      ]
    }
  },

  /* ---- opettaja-aineisto: näyttösuunnitelma ja dokumentointipohjat ---- */
  opettaja: {
    jakso: "18 työviikkoa · päivätön aikataulu",
    deadline: "18. työviikon perjantai",
    kansiKuvaus: "Päivänvalon visualisointi Suomen paikkakunnille: PHP-rajapinta, React-käyttöliittymä ja julkaisu tuotantoon",
    kansiHuomiot: [
      "Aikataulu on päivätön: työviikko 1 on se viikko, jolla opiskelija aloittaa, ja projekti kestää 18 työviikkoa.",
      "Julkiseen repositoryyn ei laiteta henkilötietoja, koulun tunnisteita eikä muiden nimiä. Tekijänimestä sovitaan ohjaajan kanssa."
    ],
    viimeisetPaivat: [
      ["Ma", "Sisältöjäädytys: viimeinen hyväksytty versio, matriisin täsmälinkitys alkaa"],
      ["Ti", "Aineisto: päiväkirja, AI-loki, testiraportti ja linkkien tarkistus"],
      ["Ke", "Demoharjoitus kellon kanssa (8–10 min) toiselle henkilölle"],
      ["To", "Itsearviointi kolmesta tilanteesta ja ohjaajan vastakommentti"],
      ["Pe", "Luovutus: näyttömatriisi, projektipäiväkirja, AI-loki ja julkaistu v1.0"]
    ],

    pohjat: {
      aloitusVko: 1,
      kysymyksia: 6,
      vertailuVko: 2,
      katselmointiVkot: "10 ja 16",
      testiVko: 14,
      testeja: 16,
      ketjuja: 3,
      lisenssiVko: 8
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma · Valokaari",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena. Peruste: Tieto- ja viestintätekniikan perustutkinto, diaarinumero OPH-6216-2025 (perusteId 9816282). Viikkorunko on hyväksytty pedagogisessa tarkistuksessa (Linnea-portti, kierros 2) ennen sisällön kirjoittamista.",
      kohdeOtsikko: "1 · Näytön kohde ja ympäristö",
      kohde: [
        "Näyttö suoritetaan ohjattuna oppilaitosprojektina: opiskelija toteuttaa Lapin matkailuyritykselle selainsovelluksen, joka näyttää kaaviona päivän pituuden Suomen paikkakunnilla vuoden jokaisena päivänä, vertaa useita paikkoja, näyttää tooltipissa päivän ja keston, korostaa kaamoksen ja yöttömän yön ja merkitsee paikkojen leikkauspisteet. Toimeksiantaja Revontuli Travel on kuvitteellinen; ohjaaja toimii asiakkaan sijaisena rajausta ja priorisointia koskevissa päätöksissä.",
        "Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 11 vaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 vaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 vaatimusta). Yhteensä 32 osaamisvaatimusta.",
        "Tekninen ympäristö: PHP 8.2+ ilman kehystä (backend, yksi rajapinta), React + TypeScript + Vite (frontend), Tailwind CSS työviikolta 7 ja opiskelijan valitsema kaaviokirjasto työviikolta 6. Kaaviokirjasto on ainoa valmis käyttöliittymäkomponentti; lomake ja paikkalista rakennetaan itse. Oletusjulkaisumalli on yksi PHP-palvelin, joka tarjoilee sekä buildatun sovelluksen että rajapinnan; build tehdään alustalla.",
        "Aikataulu on päivätön: 18 työviikkoa opiskelijan omasta aloitusviikosta lukien. Viikkopalaveri ohjaajan kanssa työviikoilla 2–17, bug-issuet työviikolta 4, ominaisuushaarat ja pull requestit työviikolta 6."
      ],
      p0: "Pakollinen perusversio (P0): paikkakunnan nimi koordinaateiksi · päivänvalo joka päivälle rajoissa 0–1440 min · karkausvuosi oikein · usea paikka samassa kaaviossa yhteisellä asteikolla · paikan poisto · selkeä virheilmoitus tuntemattomasta paikasta · tooltip (päivä, paikka, kesto) · kaamos ja yötön yö korostettuina. P1: leikkauspisteet, vuosivalinta, mobiili ja saavutettavuus.",
      roolit: [
        ["Opiskelija", "Toteuttaa sovelluksen, tekee ja perustelee omat tekniset päätökset, kirjoittaa projektipäiväkirjaa ja AI-lokia sekä kokoaa näyttöaineiston. Vastaa siitä, että jokainen työnäyte löytyy repositorysta."],
        ["Ohjaaja / opettaja", "Toimii asiakkaan sijaisena rajaus- ja priorisointipäätöksissä, valitsee ja kokeilee julkaisualustan ennen työviikkoa 1, pitää viikkopalaverit (10 min, voi olla 3–4 opiskelijan ryhmäkierros), tarjoaa kuntaluettelon varapolkuna työviikolle 5, tekee koodikatselmoinnin työviikolla 14, vastaa asiakaskysymyksellä työviikolla 17, kirjoittaa vastakommentin itsearviointiin työviikolla 18 ja päättää ohjaajalle kuuluvat asiat (lisenssi, repositoryn julkisuus, katselmoijien nimeäminen, perusteversio, arvioinnin järjestelyt)."],
        ["Ulkopuolinen katselmoija (työviikko 10)", "Kokeilee väliversiota asiakkaan roolissa kolmen paikan testitehtävällä. Ei ole opiskelijan oma ohjaava opettaja: rooliin sopii työelämäedustaja, toinen opettaja tai toinen opiskelija. Nimeäminen viimeistään työviikolla 8."],
        ["Julkaisutestaaja (työviikko 16)", "Testaa julkaistun julkaisuehdokkaan pelkän README:n avulla ilman suullista apua: lisää paikkoja, vaihtaa vuoden, lukee tooltipin ja leikkauspisteen. Eri henkilö kuin työviikolla 10, jos mahdollista."],
        ["Arvioijat (työviikko 18)", "Ottavat vastaan demon ja näyttöaineiston. Arvioinnin ajankohta ja arvioijat sovitaan ohjaajan kanssa."]
      ],
      tarkistuspisteet: [
        [1, "Ympäristö ja repository", "Käynnistyvä React + Vite -runko ja PHP:n index.php, README käynnistyskomennoilla, julkisen repon tarkistuslista kuitattuna, ohjaaja yhteistyökumppanina (collaborator), vähintään kuusi kysymystä ohjaajalle, toinen henkilö sai rungon käyntiin."],
        [2, "Suunnitelman hyväksyntä", "Ohjaajan vastaukset kirjattuina, P0/P1/P2-priorisointi, laskentatapavertailu omalla koeajolla, paikkakuntatiedon muodon vertailu, rautalangat, komponenttijako ja issue-taulu arvioineen. Hyväksyntä kirjataan ennen työviikkoa 3."],
        [3, "Ensimmäinen julkaisu", "Sovellus ja /api/health julkisessa osoitteessa toisen henkilön laitteella, HealthStatus-komponentti, proxy, api-sopimus.md ja selvitystaulukko repossa, build alustalla ja dist gitignoressa. Varapolku käytössä, jos julkaisu jumitti."],
        [4, "Päivänvalolaskenta", "T01–T04 läpi komennolla, odotusarvot ulkoisesta lähteestä, rajat 0–1440, karkausvuosi 366, vertailu date_sun_info-referenssiin, bug-issuet ansoista."],
        [5, "Rajapinta", "T05–T07 curlilla, normalisointi toimii, validointi 400/404 JSONina, tietolähteen lisenssi README:ssä."],
        [7, "Itse rakennettu näkymä", "Neljä paikkaa samassa kaaviossa yhteisellä asteikolla (T08), duplikaatti hylätään (T09), Tailwind perusteltuna, arvio vs. toteuma -taulukko viikkopalaverien kirjauksista."],
        [9, "Leikkauspisteet", "Määritelmä ja toleranssi suunnitelmassa, T12–T13 läpi, merkit kaaviossa omalla tooltipilla."],
        [10, "Asiakaskatselmointi", "Katselmointimuistio sitaatteineen, tulkinta erikseen, priorisoidut muutokset issueina, tärkein muutos rajattu enintään kahden päivän työksi."],
        [11, "Konflikti ja vuosivalinta", "Kaksi pull requestia, konfliktin ratkaisucommit historiassa (tai ohjaajan varareitti), T14: 2028 → 366 pistettä tuotannossa."],
        [13, "Tietoturva-arvio", "Uhkalista 5–8 riviä omasta sovelluksesta, T15 ajettu curlilla, XSS-testi, Promise.allSettled, salaisuustarkistus."],
        [14, "Testaus", "16 testitapausta kolmessa luokassa odotusarvoin ennen ajoa, ajettavat ja käsin ajettavat eroteltu, kaksi täydellistä ketjua bug-listalta. Ohjaajan koodikatselmointi tehdään tämän viikon aikana."],
        [16, "Julkaisuehdokas ja julkaisutestaus", "v1.0-rc1 tagilla ja julkisessa osoitteessa, oma asennuspöytäkirja, ulkopuolisen testauspöytäkirja, estävät issueina."],
        [17, "v1.0 ja luovutus", "Estävät korjattu kolmantena ketjuna, v1.0 tagilla, savutesti, julkaisutiedote, luovutusviesti ja asiakkaan kysymys vastauksineen."],
        [18, "Näyttöaineisto", "Näyttömatriisi täsmälinkitettynä 32 vaatimukseen, demo harjoiteltuna, itsearviointi kolmesta tilanteesta ohjaajan vastakommentilla."]
      ],
      tyonaytteet: {
        p1: ["1", "VS Code, Viten kehityspalvelin, PHP:n sisäänrakennettu palvelin ja selaimen kehittäjätyökalut käytössä: versiotaulukko, kuvakaappaukset ja käynnistyskomennot README:ssä"],
        p2: ["14, 17 (bug-issuet 4→)", "Kolme täydellistä virheenkorjausketjua: havainto → toisto → syy → korjauscommit → uusintatesti → regressiotesti; raaka-aine bug-issuelistalta"],
        p3: ["14 (kirjaus ja ajot 4, 5, 7, 8, 9, 11, 13)", "Testiraportti: 16 testitapausta odotusarvoineen ennen ajoa; ajettavat PHP- ja Vitest-testit sekä käsin ajettavat selaintestit eroteltuina"],
        p4: ["4 (täydentyy 8–9)", "Päivänvalolaskenta omana PHP-moduulina (funktiot, ehdot, rajatarkistus, karkausvuosi); muotoilu- ja leikkauspistemoduulit TypeScriptillä"],
        p5: ["15", "Kolme refaktorointia ohjaajan koodikatselmoinnin nimetyistä havainnoista, ennen/jälkeen-diffit, perustelut, testit läpi"],
        p6: ["7 (rautalangat 2, täydentyy 12)", "Lomake, paikkalista ja kaavionäkymä rakennettu itse rautalankojen mukaan Tailwindilla; mobiili ja saavutettavuus"],
        p7: ["7, 11 (alku 5)", "Paikan lisäys, poisto, duplikaatin esto ja vuosivalinta käyttäjätarinoiden ja hyväksymiskriteerien mukaan; issue → commit -ketju"],
        p8: ["2→17", "Viikkopalaveri ohjaajan kanssa: sovitut tehtävät, arviot ja toteuma issueihin, ohjaajan nimi ja päivä päiväkirjassa"],
        p9: ["2 (todennus 3, 4, 11)", "Kaksi vertailua ja yhteinen päätös ohjaajan kanssa kirjattuna; yhdessä ratkotut ongelmat: julkaisu, napapiirin laskenta-ansat, merge-konflikti"],
        p10: ["10 (täydentyy 11)", "Katselmointi: ymmärtääkö asiakkaan roolissa oleva kaavion ilman selityksiä; muistio ja priorisoitu muutoslista, todennus muutoksella"],
        p11: ["18", "Itsearviointi kolmesta nimetystä tilanteesta (vk 10 palaute, vk 16 testaajan epäröinti, yksi viikkopalaveri) ja ohjaajan vastakommentti"],
        s1: ["2 (täydentyy 10)", "Ohjaajan vastaukset kysymyslistaan kirjattuina; käyttäjätarinat ja käyttäjäryhmät; rajaus täydennetty katselmoinnissa"],
        s2: ["10, 17", "Katselmointiesittely ilman teknistä sanastoa; luovutusviesti ohjaajalle asiakkaan roolissa ja vastaus asiakaskysymykseen"],
        s3: ["10 ja 16", "Kaksi katselmointia: väliversion asiakaskatselmointi ja julkaisuehdokkaan julkaisutestaus; palaute ja sovitut muutokset kirjattuina"],
        s4: ["2", "P0/P1/P2-priorisointi ohjaajan kanssa; P0-ydin toteutettu ensin"],
        s5: ["2 (jatkuva)", "Käyttäjätarinat pilkottu issueiksi (½–1 pv) hyväksymiskriteereineen; issue-taulu koko projektin ajan"],
        s6: ["2→ (vertailu 7)", "Työmääräarviot ja toteumat issueissa jokaisen viikkopalaverin jälkeen; arvio vs. toteuma -vertailu ja suunnitelman päivitys"],
        s7: ["4, 5, 9, 13", "Päivänvalolaskenta rajoin ja karkausvuosin, haun normalisointi ja validointi, leikkauspisteiden laskenta toleranssilla, yhden paikan virheen käsittely"],
        s8: ["2", "Paikkakuntatiedon muodon vertailu (JSON / SQLite; ulkoinen geokoodaus vain perustellusti) haun, kattavuuden, lisenssin ja verkkoriippuvuuden perusteella"],
        s9: ["5", "Paikkakuntatiedon luku ja haku nimellä Geocoder-moduulissa; SQLite-polulla yhteyskerros, JSON-polulla latausmoduuli ja rakenne; lisenssi kirjattuna"],
        s10: ["3, 6, 11 (5, jos ulkoinen)", "Oman rajapinnan kutsu fetchillä, JSON → kaavion sarja tyypitettynä, lataus- ja virhetilat; uudelleenhaku vuosivalinnalla"],
        s11: ["13", "Tietoturva-arvio uhkalistana (uhka → testi → tulos → toimenpide), T15 syötetaulukko curlilla, XSS-testi, salaisuudet poissa repositorysta"],
        s12: ["1→ (haarat 6→, koonti 11, 15)", "Git koko projektin ajan: commitit, etärepository, ominaisuushaarat, pull requestit, tagit"],
        s13: ["11", "Palautemuutos ja vuosivalinta kahdessa haarassa, pull requestit, merge-konfliktin ratkaisu, yhdistäminen pääversioon"],
        s14: ["3, 16, 17", "Julkaisu valittuun alustaan: ensijulkaisu, julkaisuehdokas v1.0-rc1 ja v1.0 julkisessa osoitteessa"],
        k1: ["1, 3, 7", "React + TypeScript + Vite -projektin luonti; Viten proxy ja tuotantobuildin asetukset; Tailwindin konfigurointi"],
        k2: ["3 (täydentyy 8, 12)", "Selvitystaulukko omista P0-tarinoista: mikä Reactilla ja Vitellä, mikä ulkopuolelta, mistä; kaaviokirjaston näppäimistörajoite ja kiertoreitti"],
        k3: ["3, 6–8, 11–12", "Komponentit, propsit, tila ja hookit (useState, useEffect, oma useLocations), ehdollinen renderöinti, lomakkeen käsittely"],
        k4: ["6, 7", "Kaksi perusteltua ulkoista komponenttia: kaaviokirjasto (vertailu kokeilusarakkeella) ja Tailwind CSS (mitä ratkaisee lomakkeessa ja listassa)"],
        k5: ["2, 6–9, 11–12, 14", "Komponenttijako suunnitelmassa; sovellus toteutettu Reactilla käyttäjätarinoiden mukaan; omat ja kirjastoon liittyvät ratkaisut testattuina"],
        k6: ["3, 16, 17", "Viten tuotantobuild ja PHP-rajapinta julkaistuna sovittuun alustaan: ensijulkaisu, v1.0-rc1 tagilla, v1.0"],
        k7: ["15", "README: käyttöönotto tyhjään ympäristöön, kehityskomennot, rajapinnan kuvaus esimerkkivastauksella, riippuvuustaulukko lisensseineen; testataan työviikolla 16"]
      },
      dokumentaatio: {
        kayttajalle: "README kahdessa osassa: käyttöönotto tyhjään ympäristöön askel askeleelta (PHP, Node, kloonaus, riippuvuudet, build, käynnistys, portit) sekä kehittäjälle kansiorakenne, kehityskomennot, testien ajo ja rajapinnan kuvaus esimerkkipyynnöllä ja -vastauksella. Lisäksi asiakkaan pikaohje luovutusviestissä. Kirjoitetaan käyttäjälle, ei arvioijalle.",
        arviointiin: "Projektipäiväkirja, AI-loki, tekninen suunnitelma ja rajapintasopimus, vertailutaulukot (työviikko 2), selvitystaulukko (3), katselmointimuistio (10), tietoturva-arvio (13), testiraportti ja virheenkorjausketjut (14), refaktorointimuistio (15), asennus- ja julkaisutestauspöytäkirjat (16), julkaisutiedote ja luovutusviesti kysymyksineen (17) sekä täsmälinkitetty näyttömatriisi ja itsearviointi (18).",
        vaatimus: "Käyttöönotto-ohjeen kovavaatimus: ulkopuolinen henkilö saa sovelluksen käyttöön pelkän kirjallisen ohjeen avulla ilman suullista apua. Tämä testataan työviikolla 16 kahdessa vaiheessa: ensin opiskelija itse puhtaassa ympäristössä, sitten ulkopuolinen julkaistulla julkaisuehdokkaalla."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline: se saa selittää virheilmoituksia, ehdottaa testitapauksia, tarkistaa koodia ja auttaa dokumentaation kielessä. Jokainen merkittävä käyttö kirjataan AI-lokiin, jossa on kysymys, mitä käytettiin tai hylättiin, miten tarkistettiin ja aineistoviite.",
        "Ydin tehdään itse: Daylight-laskentamoduuli, intersections.ts, useLocations-hook, komponenttijako, testien odotusarvot, saavutettavuusratkaisut ja CSS. Näitä näyttö nimenomaan arvioi, joten valmiiksi generoitu ratkaisu ilman omaa ymmärrystä ei ole työnäyte.",
        "Viikot on rakennettu niin, ettei niitä voi suorittaa kielimallilla: työviikot 10, 16 ja 17 vaativat nimetyn ulkopuolisen ihmisen omine sanoineen, työviikot 3, 16 ja 17 oman julkisen osoitteen ja alustan lokit, työviikot 4, 5 ja 14 omat testiajot haetuilla odotusarvoilla, työviikko 12 mittausraportit omalta laitteelta ja jokainen viikko kirjatun viikkopalaverin ohjaajan kanssa. Viikkorunko on tarkistettu pedagogisesti kahdella kierroksella ennen kirjoittamista."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "v1.0 julkisessa osoitteessa, Git-tag v1.0 ja release; julkaisutiedote ja luovutusviesti repositoryssa."],
        ["Repository", "Julkinen repository, jossa client/, server/ ja project-docs/ sekä koko commit-historia haaroineen, pull requesteineen ja tageineen."],
        ["Suunnitelma ja päiväkirja", "project-docs/suunnitelma.md, api-sopimus.md, projektipaivakirja.md ja ai-loki.md. Päiväkirjasta on commit joka viikolta."],
        ["Laatuaineisto", "Testiraportti (16 tapausta), kolme virheenkorjausketjua, tietoturva-arvio uhkalistalla, Lighthouse-raportit ennen ja jälkeen, refaktorointimuistio."],
        ["Katselmoinnit", "Katselmointimuistio (työviikko 10), asennuspöytäkirja ja julkaisutestauksen pöytäkirja (16), asiakkaan kysymys ja vastaus (17)."],
        ["Näyttöaineisto", "Täsmälinkitetty näyttömatriisi 32 vaatimukselle, demorunko ja itsearviointi ohjaajan vastakommentilla."]
      ],
      huomiot: [
        ["Julkaisualusta ennen työviikkoa 1", "PHP:tä ei voi ajaa staattisilla alustoilla (GitHub Pages, Netlify). Ohjaaja valitsee alustan (esim. Render tai Fly.io Dockerfilella, Railway, oppilaitoksen PHP-palvelin), kokeilee sen itse PHP 8.2 + staattinen dist -yhdistelmällä ja antaa opiskelijalle testatun polun: build alustalla (Node-build → PHP), client/dist gitignoressa, automaattinen julkaisu main-haarasta, staattisten tiedostojen tarjoilu PHP:stä. Ilman tätä työviikkoa 3 ei voi tehdä, ja committattu dist tuottaa merkityksettömiä konflikteja jokaisessa haarassa työviikolta 6."],
        ["Kuntaluettelo varapolkuna työviikolle 5", "Suomen paikkakuntien koordinaatit avoimella lisenssillä eivät ole yhden latauksen takana. Ohjaaja valmistelee kuntaluettelon koordinaatteineen (noin 309 kuntaa, lähde ja lisenssi kirjattuna, esim. GeoNames CC BY 4.0) ja antaa sen opiskelijalle, jos oma hankinta ei valmistu tiistaihin mennessä. Opiskelijan tietovarastopäätös on muoto ja rakenne, ei datan hankinta."],
        ["Ohjaajan kuorma", "Runko lisää ohjaajalle: alustan testaus, kuntaluettelo, 10 min × opiskelija × 16 viikkoa, koodikatselmointi työviikolla 14, asiakasvastaus 17, vastakommentti 18, mahdollinen commit 11 ja kaksi katselmoijaa. Viikkopalaveri voi olla 3–4 opiskelijan ryhmäkierros, jossa jokaisen issuet kirjataan erikseen: kirjaus on työnäyte, ei kahdenkeskisyys. Ohjaaja lisätään repositoryn yhteistyökumppaniksi (collaborator) työviikolla 1."],
        ["Katselmoijat ja lisenssi työviikkoon 8 mennessä", "Työviikon 10 katselmoija ja työviikon 16 julkaisutestaaja nimetään viimeistään työviikolla 8, samoin lisenssipäätös, jotta LICENSE on repossa työviikolla 15. Asiakkaan roolia ei esitä opiskelijan oma ohjaava opettaja."],
        ["Työviikon 11 konflikti", "Konflikti syntyy vain, jos molemmat haarat luodaan maanantaina samasta main-commitista ja palautemuutos koskee useLocations-tiedostoa. Ohjaaja rajaa katselmoinnin tärkeimmän muutoksen työviikon 10 palaverissa enintään kahden päivän työksi. Jos muutos ei koske tilatiedostoa, ohjaaja tekee sovitun pienen commitin main-haaraan varareittinä; opiskelija ei saa yrittää väkisin ohjata muutosta tilatiedostoon."],
        ["Napapiirin laskenta-ansat ovat odotettuja", "Työviikon 4 ansat (acos-alueen ylitys, refraktio ja Rovaniemen 24 h, date_sun_info-funktion true/false-paluuarvot) ovat aitoja virheenkorjausketjujen raaka-aineita. Kerro opiskelijalle etukäteen, että virhe on odotettu eikä oma vika, ja vaadi bug-issue jokaisesta."],
        ["Aidot bugit, ei keksittyjä", "Virheenkorjausketjut kirjataan vain aidoista havainnoista bug-issuelistalta. Jos lista on tyhjä työviikkoon 14 mennessä, ohjaaja merkitsee vikatehtäviä, joista ketjut ajetaan."],
        ["Päivätön aikataulu", "Sivustolla ei ole kalenteripäivämääriä: viikot ovat työviikkoja 1–18 opiskelijan aloituksesta. Ryhmäkohtaiset päivämäärät sovitaan erikseen, esimerkiksi opintojakson omassa työtilassa."],
        ["Avoimet asiat pysyvät avoimina", "Julkaisualusta, lisenssi, repositoryn julkisuus ja tekijänimi, alaikäisen huoltajan suostumus, katselmoijien roolit, perusteversion siirtymäsääntö ja arvioinnin järjestelyt ovat ohjaajan päätöksiä. Tyhjä kenttä suunnitelmassa on oikea tulos siihen asti, kun asia on sovittu, mutta julkaisualustalla, lisenssillä ja katselmoijilla on määräaika."]
      ]
    }
  }
};
