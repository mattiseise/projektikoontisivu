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
  yhtenaisetViikot: true,
  aloitusNappi: "Aloita Valokaaren teko",
  apuOtsikko: "Tarvitsen toteutusapua",

  /* ---- projektin tavoitekuva (moottori v2.6) ----
   * Näkyy Näin käytät sivua -näkymän alussa, ja sivu avautuu siihen ensimmäisellä
   * kerralla. Kuva on luonnos: project-docs/lopputulos/proto.html kuvattuna 2x-tarkkuudella
   * (ks. project-docs/lopputulos/README.md). Protossa käyrät lasketaan NOAA:n
   * auringonnousuyhtälöllä (−0,833°), joten kuvan arvot ovat oikeita vuodelle 2026.
   * alue = [x, y, leveys, korkeus] prosentteina.
   */
  lopputulos: {
    kuvaus: "Valokaari piirtää Revontuli Travelin sivuille kaavion siitä, kuinka pitkä päivä on vuoden jokaisena päivänä millä tahansa Suomen paikkakunnalla. Käyttäjä vertaa useita paikkoja samassa kaaviossa, ja kaamos ja yötön yö erottuvat siitä heti.",
    /* Aloituksen johdanto kertoo saman, joten kuvauslause näkyy vain työpaketissa. */
    naytaKuvaus: false,
    kuva: "assets/lopputulos.jpg",
    leveys: 1120,
    korkeus: 700,
    alt: "Tavoitekuva valmiista Valokaari-sovelluksesta. Selainikkunassa on kaavio päivän pituudesta vuonna 2026 Helsingissä, Rovaniemellä ja Utsjoella. Kaaviossa yötön yö on korostettu keltaisella ja kaamos violetilla, ja merkit näyttävät kohdat 19.3. ja 26.9., joissa päivä on kaikilla kolmella paikkakunnalla yhtä pitkä. Avoin vihjeruutu kertoo, että 21. kesäkuuta Rovaniemellä ja Utsjoella valoa on 24 h ja Helsingissä 18 h 56 min. Puhelinnäkymässä väärin kirjoitettu ”Rovanimi” antaa selvän virheilmoituksen, ja kun päiväksi on valittu 15.1.2026, Utsjoen kohdalla näkyy 0 min eli kaamos.",
    kohdat: [
      { n: 1, teksti: "Käyttäjä kirjoittaa paikkakunnan nimen, lisää sen kaavioon ja valitsee vuoden.", alue: [30.4, 9.1, 43.8, 10.1] },
      { n: 2, teksti: "Hiiren tai sormen kohdalle avautuu vihjeruutu, jossa näkyvät päivämäärä, paikat ja päivän pituus.", alue: [27.7, 59.0, 21.8, 18.1] },
      { n: 3, teksti: "Kaamos ja yötön yö erottuvat kaaviosta korostettuina jaksoina päivämäärineen.", alue: [51.3, 73.6, 20.4, 20.6] },
      { n: 4, teksti: "Väärin kirjoitetusta paikkakunnasta tulee selvä virheilmoitus, ja sovellus toimii myös puhelimella.", alue: [73.8, 23.1, 22.5, 73.1] }
    ]
  },

  paletti: {
    aksentti: "#c2410c",
    aksenttiTumma: "#9a3412",
    taulukkoSavy: "#fdece3",
    riviSavy: "#fef7f2"
  },

  /* ---- paperiaineiston kielisäädöt: päivätön aikataulu ---- */
  lataukset: {
    resurssienPerusosoite: "https://mattiseise.github.io/projektikoontisivu/valokaari/",
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title,
    aloitusHuomio: "Viikon työvaihe on tämän sivuston työohje. Kun toteutat muutoksen sovellukseen, kirjaa se GitHub-issueksi hyväksymiskriteereineen ja tee siitä commit. Testin tulos kirjataan issueen heti, viikon yhteenveto projektipäiväkirjaan viikon lopussa."
  },

  /* ---- vaiheet (moottori v2.7: numeroidut vaiheet, kuvaus näkyy aloituksessa ja vaihekuvassa) ---- */
  vaiheet: [
    { tunnus: "1", lyhyt: "Valmistelu", otsikko: "Valmistelu ja julkaistu runko", kuvaus: "Otat työkalut käyttöön, teet hyväksytyn suunnitelman ja viet tyhjän sovelluksen julkiseen osoitteeseen. Julkaisu tehdään ensin, koska se on projektin todennäköisin kaatumiskohta.", kuvassa: ["Työkalut → suunnitelma → julkinen osoite", "Julkaisuputki toimii ennen kuin mitään voi rikkoa."], viikot: [1, 2, 3], vari: "#a16207" },
    { tunnus: "2", lyhyt: "Päivänvalodata", otsikko: "Oikea päivänvalodata", kuvaus: "Kirjoitat päivänvalolaskennan testeineen ja paikkakuntahaun. Rajapinta palauttaa minkä tahansa Suomen paikkakunnan vuoden oikein, myös kaamoksen ja yöttömän yön.", kuvassa: ["Laskenta → paikkakuntahaku → rajapinta", "Kaavio saa luotettavan datan."], viikot: [4, 5], vari: "#c2410c" },
    { tunnus: "3", lyhyt: "Kaavio", otsikko: "Kaavio matkailijalle", kuvaus: "Rakennat kaavion, monen paikan vertailun, vihjeruudun ja leikkauspisteet. Asiakkaan edustaja kokeilee väliversiota ja kertoo, mitä muutetaan.", kuvassa: ["Kaavio → monta paikkaa → vihjeruutu → leikkauspisteet", "Väliversio asiakkaan kokeiltavana työviikolla 10."], viikot: [6, 7, 8, 9, 10], vari: "#9f1239" },
    { tunnus: "4", lyhyt: "Viimeistely", otsikko: "Viimeistely ja laatu", kuvaus: "Toteutat vuosivalinnan ja katselmoinnin tärkeimmän muutoksen, teet sovelluksesta mobiilissa ja näppäimistöllä toimivan ja arvioit tietoturvan. Testaus ja dokumentaatio kootaan valmiiksi.", kuvassa: ["Palautemuutos → mobiili → tietoturva → testaus", "Sovellus kestää oikeat käyttäjät ja virheet."], viikot: [11, 12, 13, 14, 15], vari: "#1e3a8a" },
    { tunnus: "5", lyhyt: "Julkaisu ja näyttö", otsikko: "Julkaisu ja näyttö", kuvaus: "Ulkopuolinen testaaja kokeilee julkaisuehdokasta pelkän ohjeen avulla. Korjaat esteet, julkaiset v1.0:n ja esittelet työsi näytössä.", kuvassa: ["Julkaisuehdokas → v1.0 → näyttö", "Asiakas saa osoitteen, jonka voi laittaa sivuilleen."], viikot: [16, 17, 18], vari: "#0f766e" }
  ],
  poikkeamat: {
    vaiheita: "viisi vaihetta: valmistelu ja päivänvalodata ovat eri tuloksia (julkinen osoite vs. oikea data), ja yhdessä ne olisivat viiden viikon vaihe ilman näkyvää välitulosta"
  },
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 844,
    alt: "Valokaaren viisi vaihetta: 1 valmistelu ja julkaistu runko työviikoilla 1–3, 2 oikea päivänvalodata työviikoilla 4–5, 3 kaavio matkailijalle ja asiakaskatselmointi työviikoilla 6–10, 4 viimeistely ja laatu työviikoilla 11–15 sekä 5 julkaisu ja näyttö työviikoilla 16–18."
  },
  vaiheetJohdanto: "Ensin varmistat, että sovellus pääsee verkkoon ja että päivänvalodata on oikein. Vasta sitten rakennat kaavion, jonka varaan kaikki muu tulee. Asiakkaan palaute ohjaa viimeistelyä, ja lopuksi ulkopuolinen testaaja varmistaa, että julkaisu toimii ilman sinua.",
  vaiheetHuomio: "Työviikot ovat järjestysnumeroita, eivät kalenteriviikkoja. Viikkopalaveri ohjaajan kanssa pidetään työviikoilla 2–17.",

  /* ---- opiskelijalle näkyvä työn tasojen nimeäminen (moottori v2.7) ---- */
  tekstit: {
    goalListLabel: "Käyttäjän työnkulku",
    tasksLead: "Tee työvaiheet järjestyksessä. Ensimmäinen keskeneräinen vaihe on auki. Kun toteutat muutoksen sovellukseen, kirjaa se GitHub-issueksi ja tee työ Työtapa-sivun kuudella askeleella."
  },

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
    { termi: "viikkopalaveri", nimi: "Ohjaajan kanssa joka viikko", selite: "10 minuuttia: sovitut tehtävät, arviot ja edellisen viikon toteuma kirjataan issueihin, päivä ja osallistujien roolit päiväkirjaan. Tämä on tiimissä sopimisen työnäyte.", viikko: 2 },
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
    { termi: "tooltip", nimi: "Vihjeruutu", selite: "Ruutu, joka avautuu hiiren tai kosketuksen alle kaaviossa ja näyttää päivän, paikan ja keston, esimerkiksi ”21. kesäkuuta · Rovaniemi · 24 h”.", viikko: 8 },
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
      "## 1. Tavoite (vaatimus, esitäytetty toimeksiannosta)",
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
      "## 2. Asiakas ja käyttäjät (vaatimus, esitäytetty)",
      "",
      "Revontuli Travelin yrittäjä (tilaaja) ja yrityksen asiakkaat, jotka",
      "suunnittelevat Lapin-matkaa. Käyttäjä ei ole tekninen eikä lue numerotaulukoita.",
      "",
      "### Käyttäjät ja heidän tärkein tarpeensa omin sanoin",
      "",
      arvo("kohde"),
      "",
      "## 3. P0-rajaus (vaatimus, esitäytetty)",
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
      "## 4. Rajapintasopimus (luonnos: sovitaan työviikolla 2, tarkennetaan työviikolla 3)",
      "",
      "`GET /api/daylight?city=Helsinki&year=2026` palauttaa JSON-olion: `location`",
      "(name, latitude, longitude), `year` ja `days` (date, daylightMinutes).",
      "Virheet JSONina: 400 virheellinen syöte, 404 paikkaa ei löydy, 502 ulkoinen",
      "palvelu ei vastaa. Tarkka sopimus: `project-docs/api-sopimus.md`.",
      "",
      "## 5. Teknologia ja työtapa (sovittu toteutustapa, esitäytetty)",
      "",
      "PHP 8.2+ ilman kehystä (backend), React + TypeScript + Vite (frontend),",
      "Tailwind CSS työviikolta 7, kaaviokirjasto oman vertailun mukaan. Laskenta,",
      "muotoilu ja leikkauspisteet omissa moduuleissaan. Lomake ja paikkalista",
      "rakennetaan alusta itse. Viikkopalaveri ohjaajan kanssa joka viikko, bug-issuet",
      "työviikolta 4, ominaisuushaarat ja pull requestit työviikolta 6.",
      "",
      "Ehdotus: julkaisumalli on yksi PHP-palvelin ja build alustalla. Toinen malli on",
      "oma päätös, joka perustellaan kohdassa 6.",
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
      "## 7. Avoimet asiat – sovi ohjaajan kanssa, ohjaaja päättää",
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
      feature: "Toinen henkilö kloonaa julkisen repositoryn ja saa PHP-palvelimen ja React-rungon käyntiin pelkän README:n avulla.",
      connection: "Lähtöaineisto on asiakkaan toimeksianto: siitä poimit pakolliset asiat ja epäselvät kohdat kysymyslistaksi. Samalla saat käyntiin sovelluksen kaksi ajoympäristöä, PHP:n ja Noden, ja perustat julkisen repositoryn, jonka Git-historia on työnäytteiden paikka koko projektin ajan. Ohjaajan vastaukset kysymyksiin ovat työviikon 2 suunnitelman pohja.",
      deliverable: "Asennetut työkalut versioineen, julkinen repository tarkistuslistoineen, käynnistyvä React + Vite -runko, PHP-palvelin, joka palauttaa JSON-vastauksen, kansiorakenne ja kysymyslista ohjaajalle.",
      why: "Ilman toimivaa ympäristöä ja repoa yksikään myöhempi viikko ei tuota näyttöaineistoa: Git-historia on versionhallinnan työnäyte, ja sen pitää alkaa ensimmäiseltä työviikolta. Kysymyslista on ainoa tapa saada rajaus ratkeamaan kysymällä, ei arvaamalla.",
      done: "Nimetty toinen henkilö (luokkakaveri tai ohjaaja) saa rungon käyntiin pelkän README:n avulla; ohjaaja on kuitannut julkisen repon tarkistuslistan ja hänet on lisätty repositoryn yhteistyökumppaniksi; kysymyslistassa on vähintään kuusi kysymystä.",
      record: "Kirjoita työviikon 1 merkintään: asennetut työkalut versioineen, repositoryn osoite, ensimmäisen commitin tunnus, kysymyslistan kysymykset, kuka (rooli, esimerkiksi luokkakaveri) sai rungon käyntiin ohjeellasi ja mitkä julkisuusasiat jäivät avoimiksi.",
      skills: ["kehitysympäristö", "Git", "npm ja Vite", "PHP:n sisäänrakennettu palvelin"],
      termit: ["repository", "commit", "push", "backend", "frontend", "API", "JSON", "kehityspalvelin"],
      resources: [["GitHub Desktop: kuvaohje ilman Git-komentoja", "../ohjeet/github-desktop/?projekti=valokaari#asennus", false]],
      tehtavat: {
        "1-1": {
          miksi: "Kysymyslista ratkaisee epäselvät kohdat kysymällä, ei arvaamalla. Ohjaajan vastaukset ovat työviikon 2 suunnitelman pohja.",
          osat: [
            ["Lue toimeksianto", "Lue Toimeksianto-sivu kokonaan ja alleviivaa asiakkaan pakolliset asiat, esimerkiksi vapaasti kirjoitettava paikkakunta, vertailu samassa kuvassa ja toimivuus puhelimella."],
            ["Luo projektikansio", "Luo kansio `valokaari/` ja sen alle kansiot `client/`, `server/` ja `project-docs/`. Kaikki projektin tiedostot tulevat näihin kansioihin."],
            ["Kirjoita kysymykset", "Kirjoita jokaisesta epäselvästä kohdasta kysymys ohjaajalle, joka toimii asiakkaan sijaisena, tiedostoon `project-docs/kysymykset.md`. Esimerkki: mitä tapahtuu, jos kaksi kuntaa on samannimisiä?"],
            ["Lisää sovittavat asiat", "Lisää listaan ohjaajan kanssa sovittavat asiat: lisenssi, repositoryn julkisuus ja tekijänimi. Ne on lueteltu toimeksiannon lopussa."],
            ["Laske kysymykset", "Tarkista, että listassa on vähintään kuusi kysymystä. Ohjaaja vastaa niihin työviikon 2 viikkopalaverissa."]
          ],
          valmis: "`project-docs/kysymykset.md` sisältää vähintään kuusi kysymystä, ja lisenssi, julkisuus ja tekijänimi ovat mukana.",
          tallenna: "`project-docs/kysymykset.md`. Se tulee repositoryyn ensimmäisessä commitissa. Kysymykset myös työviikon 1 päiväkirjaan."
        },
        "1-2": {
          miksi: "Versiotaulukko todistaa, millä ympäristöllä työ on tehty. Se auttaa myös toista henkilöä saamaan rungon käyntiin.",
          osat: [
            ["Asenna työkalut", "Asenna PHP 8.2 tai uudempi, Node LTS, VS Code sekä GitHub Desktop (viikon kuvaohje) tai komentorivin Git."],
            ["Tarkista versiot", "Aja `php -v`, `node -v` ja `npm -v`. Kirjaa GitHub Desktopin versio kohdasta Help → About GitHub Desktop tai komentorivin Gitin versio komennolla `git --version`."],
            ["Kirjaa versiotaulukko", "Kirjoita `README.md`:hen taulukko: työkalu, versio ja tarkistuskomento tai Desktopin Help → About GitHub Desktop. Pelkkä ”asensin” ei riitä työnäytteeksi."],
            ["Aloita versionhallinta", "Lisää nykyinen valokaari-kansio GitHub Desktopiin kuvaohjeen reitillä B. Tarkista Changes-lista ja tee Commit kuvaavalla Summary-viestillä. Mukaan tulevat README ja kysymyslista. Komentorivin Git käy myös."]
          ],
          valmis: "README:n taulukossa on PHP:n, Noden, npm:n ja GitHub Desktopin tai komentorivin Gitin versiot ja tarkistuspaikat. Ensimmäinen sisältöcommit näkyy Desktopin Historyssa tai komennolla `git log`.",
          tallenna: "`README.md` ensimmäisessä commitissa. Asennetut versiot myös työviikon 1 päiväkirjaan.",
          sanat: ["commit"]
        },
        "1-3": {
          miksi: "Valokaaressa on kaksi ajoympäristöä, Node ja PHP. Molempien pitää toimia omalla koneella, ennen kuin niiden välille rakennetaan yhteys työviikolla 3.",
          osat: [
            ["Luo React-runko", "Luo `client/`-kansioon React + TypeScript -projekti Vitellä. Älä asenna Tailwindia vielä: se otetaan käyttöön työviikolla 7, kun sitä tarvitaan."],
            ["Käynnistä kehityspalvelin", "Aja `npm run dev` ja avaa osoite selaimessa. Ota kuvakaappaus näkyvästä rungosta."],
            ["Kirjoita PHP-vastaus", "Luo `server/public/index.php`, joka palauttaa `{\"status\":\"ok\"}` JSON-muodossa oikealla sisältötyypillä `application/json`."],
            ["Käynnistä PHP-palvelin", "Aja `php -S localhost:8000 -t server/public`, avaa `http://localhost:8000` ja ota kuvakaappaus vastauksesta."],
            ["Kirjaa käynnistys", "Kirjoita README:hen molempien palvelinten käynnistyskomennot ja osoitteet. Toinen henkilö käyttää niitä viikon lopussa."],
            ["Lisää .gitignore", "Luo `.gitignore`, joka jättää pois kansiot `node_modules/`, `client/dist/` ja `vendor/` sekä tiedoston `.env`. Tee commit."]
          ],
          valmis: "`npm run dev` näyttää React-rungon, `localhost:8000` palauttaa `{\"status\":\"ok\"}`, ja README kertoo molempien käynnistyksen.",
          tallenna: "Kuvakaappaukset `project-docs/`-kansioon ja koodi commitilla.",
          sanat: ["frontend", "backend", "kehityspalvelin", "JSON"]
        },
        "1-4": {
          miksi: "Julkinen repository on koko projektin työnäytteiden paikka. Toisen henkilön kokeilu näyttää, kertooko README oikeasti, miten runko käynnistyy.",
          osat: [
            ["Tee julkisuustarkistus", "Tarkista, ettei repositoryyn tule henkilötietoja, koulun tunnisteita eikä muiden nimiä."],
            ["Sovi tekijänimi", "Sovi ohjaajan kanssa, millä nimellä esiinnyt, ja kirjaa se suunnitelmalomakkeen Tekijä-kenttään. Jos olet alaikäinen, huoltajan suostumus hoidetaan ohjaajan kautta."],
            ["Luo repository", "Valitse Desktopissa Publish repository ja ohjaajan kanssa sovittu julkisuus. Jo julkaistulle repolle valitse Push origin. Tarkista tiedostot ja sisältöcommit View on GitHub -toiminnolla. Katso kuvaohjeen kohdat 6–7."],
            ["Lisää ohjaaja", "Lisää ohjaaja repositoryn yhteistyökumppaniksi (collaborator). Hän tarvitsee oikeuden työviikoilla 11 ja 15. Pyydä häntä kuittaamaan julkisuustarkistus."],
            ["Pyydä toinen kokeilija", "Pyydä nimettyä toista henkilöä, esimerkiksi luokkakaveria, kloonaamaan repository ja käynnistämään molemmat palvelimet pelkän README:n avulla. Kirjaa hänen roolinsa, älä nimeä, ja se, mihin hän pysähtyi."],
            ["Korjaa README", "Korjaa README kohdasta, johon toinen henkilö pysähtyi, ja vie korjaus repositoryyn."]
          ],
          valmis: "Toinen henkilö sai rungon käyntiin pelkällä README:llä, ja ohjaaja on repositoryn yhteistyökumppani ja on kuitannut julkisuustarkistuksen.",
          tallenna: "Repositoryn osoite, toisen henkilön pysähtymiskohta ja avoimiksi jääneet julkisuusasiat työviikon 1 päiväkirjaan.",
          sanat: ["repository", "push"]
        }
      },
      help: {
        title: "Perusta kehitysympäristö ja repository",
        tree: "valokaari/\n├─ client/               React + TypeScript + Vite\n│  ├─ src/\n│  └─ vite.config.ts\n├─ server/\n│  ├─ public/index.php   palauttaa {\"status\":\"ok\"}\n│  └─ src/               Daylight.php, Geocoder.php (tulevat vk 4–5)\n├─ project-docs/         suunnitelma, päiväkirja, muistiot\n├─ README.md\n└─ .gitignore            node_modules/, client/dist/, vendor/, .env",
        actions: [
          "Kirjaa php -v, node -v ja npm -v sekä GitHub Desktopin versio (Help → About GitHub Desktop) tai git --version README:n taulukkoon.",
          "Luo React-runko: cd client && npm create vite@latest . -- --template react-ts, sitten npm install ja npm run dev.",
          "Luo server/public/index.php: header('Content-Type: application/json'); echo json_encode(['status' => 'ok']);",
          "Käynnistä PHP: php -S localhost:8000 -t server/public ja avaa http://localhost:8000.",
          "Seuraa Desktop-kuvaohjeen reittiä B: nykyinen kansio, Commit, julkisuustarkistukset ja Publish repository (sen jälkeen Push origin). Tarkista lopputulos GitHubista. Komentorivillä sama järjestys: git init ja ensimmäinen commit heti asennuksen jälkeen, GitHub-repository vasta julkisuustarkistuksen jälkeen (git push)."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] PHP-, Node-, npm- ja GitHub Desktopin tai komentorivin Gitin versiot kirjattu README:hen\n[ ] npm run dev avaa React-rungon selaimessa\n[ ] php -S palauttaa {\"status\":\"ok\"} osoitteessa localhost:8000\n[ ] kansiot client/, server/ ja project-docs/ olemassa\n[ ] .gitignore estää node_modules/, client/dist/, vendor/ ja .env\n[ ] repositoryssa ei ole henkilötietoja eikä koulun tunnisteita\n[ ] tekijänimi sovittu ja ohjaaja lisätty collaboratoriksi\n[ ] kysymyslistassa vähintään 6 kysymystä\n[ ] ensimmäinen commit viety etärepositoryyn (push)\n[ ] toinen henkilö sai molemmat palvelimet käyntiin README:llä",
        test: "Kloonaa repository itse toiseen kansioon ja käynnistä molemmat palvelimet pelkän README:n ohjeilla, ennen kuin annat sen toiselle.",
        links: [["GitHub Desktop: lisää nykyinen projektikansio", "../ohjeet/github-desktop/?projekti=valokaari#olemassa"],
          ["Vite: Getting Started", "https://vite.dev/guide/"],
          ["React: Quick Start", "https://react.dev/learn"],
          ["PHP: sisäänrakennettu palvelin", "https://www.php.net/manual/en/features.commandline.webserver.php"],
          ["GitHub Docs: repositoryn luominen", "https://docs.github.com/en/repositories"]
        ]
      },
      example: "Versiotaulukko README:ssä: työkalu → versio → tarkistuskomento (PHP 8.3.6 → php -v). Mukana kuvakaappaukset React-rungosta ja PHP:n JSON-vastauksesta, commit ”Perusta projekti: client, server ja project-docs” ja merkintä ”Testaaja A (luokkakaveri) sai palvelimet käyntiin, pysähtyi kohtaan php -S, koska portti puuttui ohjeesta”.",
      notEnough: "”Asensin kaikki ja kaikki toimii” ilman versionumeroita, kuvakaappauksia, ensimmäistä committia ja toisen henkilön kokeilua: mitään ei voi todentaa jälkikäteen.",
      paivat: [
        ["Tarve", "Lue toimeksianto ja poimi asiakkaan ydinongelma: numeroita ei hahmoteta, kuva tarvitaan. Kirjaa kysymyslista ohjaajalle."],
        ["Työkalut", "Asenna PHP, Node ja GitHub Desktop tai komentorivin Git. Kirjaa versiot README:hen ja tee ensimmäinen commit (Desktopin Commit tai git init)."],
        ["Kaksi palvelinta", "Luo React-runko ja PHP:n index.php. Käynnistä molemmat ja ota kuvakaappaukset."],
        ["Repository", "Tee julkisuustarkistukset, luo sitten GitHub-repository, lisää ohjaaja yhteistyökumppaniksi (collaborator) ja vie commitit sinne (push)."],
        ["Toisen henkilön testi", "Anna README toiselle henkilölle ja kirjaa, mihin hän pysähtyi. Korjaa ohje."]
      ]
    },

    2: {
      type: "pohjustus",
      feature: "Ohjaaja on hyväksynyt suunnitelman, jossa jokaisella pakollisen ytimen tarinalla on issue, hyväksymiskriteerit ja työmääräarvio.",
      excerpt: "Kaamos ja yötön yö ovat meidän myyntiargumenttimme: haluan, että ne erottuvat kuvasta yhdellä katseella.",
      connection: "Työviikon 1 kysymyslista saa ohjaajalta vastaukset, ja toimeksianto muuttuu priorisoiduiksi käyttäjätarinoiksi ja perustelluiksi päätöksiksi. Oma koeajo ratkaisee laskentatavan, ja issue-taulu jakaa työn puolen päivän paloiksi. Hyväksytty suunnitelma on se, jota vasten jokainen seuraava viikko rakennetaan ja arvioidaan.",
      deliverable: "project-docs/suunnitelma.md, ohjaajan vastaukset kysymyksiin, käyttäjätarinat P0/P1/P2-luokin, laskentatapavertailu koeajon tulosteella, paikkakuntatiedon muodon vertailu, rautalangat kolmesta näkymästä, komponenttijako ja issue-taulu arvioineen.",
      why: "Ilman priorisointia ominaisuuslista paisuu; ilman omaa koeajoa laskentatavan valinta on arvaus. Toiminnot jaetaan kolmeen luokkaan: P0 on pakollinen ydin, P1 tärkeä jatko ja P2 valinnainen lisä. Keskeneräinen P0 painaa arvioinnissa enemmän kuin puuttuva P2.",
      done: "project-docs/suunnitelma.md on repossa ja ohjaaja on hyväksynyt rajauksen kirjatulla kommentilla; ohjaajan vastaukset kysymyksiin on kirjattu päivämäärineen; jokaisella P0-tarinalla on GitHub-issue, hyväksymiskriteerit ja arvio tunteina; koeajon tuloste on päiväkirjassa.",
      record: "Kirjoita työviikon 2 merkintään: ohjaajan vastaukset omin sanoin, P0-rajaus, laskentatavan ja paikkakuntatiedon muodon valinta perusteluineen, koeajon tuloste ja linkki issue-tauluun sekä ohjaajan hyväksyntään.",
      skills: ["vaatimusmäärittely", "priorisointi", "vertailu omalla datalla", "työn ositus"],
      termit: ["GitHub-issue", "käyttäjätarina", "P0", "P1", "P2", "rautalanka", "viikkopalaveri"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "2-1": {
          miksi: "Käyttäjätarinat muuttavat toimeksiannon tarkistettaviksi vaatimuksiksi. Priorisointi estää ominaisuuslistan paisumisen.",
          osat: [
            ["Pidä viikkopalaveri", "Käy kysymyslista läpi ohjaajan kanssa. Kirjaa jokaisen kysymyksen alle vastaus omin sanoin, vastaajan rooli (ohjaaja) ja päivä. Kirjaamaton vastaus ei ole työnäyte."],
            ["Varmista julkaisualusta", "Kysy ohjaajalta julkaisualusta ja testattu julkaisupolku ja kirjaa ne suunnitelmalomakkeeseen. Ilman niitä työviikon 3 julkaisua ei voi tehdä."],
            ["Kirjoita käyttäjätarinat", "Kirjoita toimeksiannosta tarinat muodossa ”Matkailijana haluan …, jotta …” tiedostoon `project-docs/kayttajatarinat.md`. Anna jokaiselle 2–4 hyväksymiskriteeriä."],
            ["Priorisoi ohjaajan kanssa", "Merkitse jokainen tarina: pakollinen ydin (P0), tärkeä jatko (P1) tai valinnainen lisä (P2). Ohjaaja toimii asiakkaan sijaisena. Kirjaa perustelu, älä pelkkää kirjainta."]
          ],
          valmis: "Jokaisen kysymyksen alla on ohjaajan vastaus ja päivä, ja jokaisella tarinalla on 2–4 hyväksymiskriteeriä, P-luokka ja perustelu.",
          tallenna: "`project-docs/kysymykset.md` ja `project-docs/kayttajatarinat.md` commitilla. Ohjaajan vastaukset omin sanoin työviikon 2 päiväkirjaan.",
          sanat: ["viikkopalaveri", "käyttäjätarina", "P0", "P1", "P2"],
          esimerkki: "”Matkailijana haluan lisätä Utsjoen kaavioon, jotta näen, milloin siellä on kaamos.” Kriteerit: nimi hyväksytään isoilla ja pienillä kirjaimilla; kaamosjakso näkyy 0 minuutin tasona; sama paikka ei tule kahdesti. Luokka P0, koska kaamos on asiakkaan myyntiargumentti."
        },
        "2-2": {
          miksi: "Ilman omaa koeajoa laskentatavan valinta on arvaus. Tietomuodon valinta ratkaisee, miten työviikon 5 haku nimellä toteutetaan.",
          osat: [
            ["Vertaa laskentatavat", "Vertaa omaa auringonnousuyhtälöä, PHP:n `date_sun_info`-funktiota ja valmista kirjastoa tiedostossa `project-docs/vertailu-laskenta.md`: tarkkuus, käytös napapiirin pohjoispuolella, oma ymmärrys ja testattavuus."],
            ["Aja koeajo", "Aja `date_sun_info` Helsingille 21.6. komennolla `php -r` ja liitä tuloste päiväkirjaan. Vertaa tulosta Ilmatieteen laitoksen tai timeanddate-sivun arvoon."],
            ["Vertaa tietomuodot", "Vertaa JSON-tiedostoa ja SQLite-tietokantaa tiedostossa `project-docs/vertailu-tietomuoto.md`: haku nimellä, ä:n ja ö:n normalisointi ja noin 300 kunnan datamäärä."],
            ["Punnitse ulkoinen haku", "Valitse ulkoinen geokoodausrajapinta vain perustellusti, koska se tuo verkkovirheet ja käyttörajat. Dataa ei hankita vielä: se tehdään työviikolla 5, ja ohjaajalla on silloin varalla kuntaluettelo."],
            ["Päätä ohjaajan kanssa", "Päätä, mikä laskentatapa toteutetaan ja mikä jää referenssiksi, sekä paikkakuntatiedon muoto ja aiottu tietolähde lisensseineen. Kirjaa valinnat perusteluineen suunnitelmalomakkeeseen."]
          ],
          valmis: "Kummassakin vertailutaulukossa on vaihtoehdot, kriteerit ja valinta perusteluineen, ja koeajon tuloste on päiväkirjassa.",
          tallenna: "Vertailutaulukot `project-docs/`-kansioon commitilla. Valinnat suunnitelman kenttiin Laskentatapa ja Paikkakuntatiedon muoto.",
          sanat: ["JSON", "geokoodaus"]
        },
        "2-3": {
          miksi: "Rautalanka näyttää ennen koodia, mitä näkymässä on ja missä. Työviikon 7 toteutus tarkistetaan sitä vasten.",
          osat: [
            ["Piirrä lomake", "Piirrä rautalanka lomakkeesta, jolla paikkakunta lisätään. Tallenna kuva nimellä `project-docs/rautalangat/lomake.png`."],
            ["Piirrä paikkalista", "Piirrä lista kaavioon lisätyistä paikoista poistonappeineen ja tallenna se nimellä `rautalangat/lista.png`."],
            ["Piirrä kaavio", "Piirrä kaavio, jossa näkyvät vihjeruutu, kaamos ja yötön yö, ja tallenna se nimellä `rautalangat/kaavio.png`."],
            ["Nimeä komponentit", "Nimeä näkymän komponentit ja kirjoita kunkin vastuu yhdellä lauseella suunnitelmalomakkeen Komponenttijako-kenttään."]
          ],
          valmis: "Kansiossa `project-docs/rautalangat/` on kolme rautalankaa, ja jokaisella komponentilla on nimi ja yhden lauseen vastuu.",
          tallenna: "Rautalangat commitilla `project-docs/rautalangat/`-kansioon. Komponenttijako suunnitelmaan.",
          sanat: ["rautalanka", "komponentti"]
        },
        "2-4": {
          miksi: "Issue-taulu työmääräarvioineen on viikkopalaverien ja työviikon 7 arvio vs. toteuma -vertailun pohja. Hyväksytty suunnitelma lukitsee rajauksen ennen koodia.",
          osat: [
            ["Pilko issueiksi", "Tee jokaisesta pakollisen ytimen (P0) tarinasta yksi tai useampi GitHub-issue, noin puolen tai yhden päivän kokoinen. Kopioi hyväksymiskriteerit issueen."],
            ["Arvioi työmäärä", "Anna jokaiselle issuelle työmääräarvio tunteina ja P-luokka tunnisteena."],
            ["Täytä suunnitelma", "Täytä suunnitelmalomakkeen viikon 2 kentät: tavoite, käyttäjät, laskentatapa, paikkakuntatiedon muoto ja rajaus. Jätä ohjaajan asiat tyhjiksi, kunnes ne on sovittu."],
            ["Vie suunnitelma repositoryyn", "Lataa `suunnitelma.md`, tallenna se polkuun `project-docs/suunnitelma.md` ja tee commit ja push."],
            ["Pyydä hyväksyntä", "Pyydä ohjaajaa nimeämään tarina, jonka valmistumista ei voi päätellä kriteereistä, ja korjaa se. Pyydä sitten hyväksyntä suunnitelmalle ja sen rajapintaluonnokselle kirjattuna kommenttina, esimerkiksi issueen."]
          ],
          valmis: "Jokaisella P0-tarinalla on issue, hyväksymiskriteerit ja arvio tunteina, ja ohjaajan hyväksyntä on kirjattu kommenttina.",
          tallenna: "`project-docs/suunnitelma.md` commitilla. Linkit issue-tauluun ja ohjaajan hyväksyntään työviikon 2 päiväkirjaan.",
          sanat: ["GitHub-issue", "P0"]
        }
      },
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
      example: "Vertailutaulukko: ”date_sun_info (PHP 8.3) antaa Helsingille 21.6. saman 18 h 56 min kuin referenssi; Utsjoella 21.6. se palauttaa true, ei aikaa → tarvitsen rajatarkistuksen joka tapauksessa. Valitsen oman yhtälön, koska haluan ymmärtää polaarijaksot, ja käytän date_sun_infoa referenssinä.” Ohjaajan kommentti issue #3:ssa: ”Rajaus hyväksytty 2. työviikolla.”",
      notEnough: "Tekoälyn kirjoittama yleinen vertailu (”SQLite on kevyt ja suosittu”) ilman omaa koeajoa, omaa hakua ja ohjaajan kirjattua kommenttia."
    },

    3: {
      type: "feature",
      feature: "Kuka tahansa voi avata Valokaaren julkisesta osoitteesta ja nähdä, että selain saa yhteyden PHP-rajapintaan.",
      excerpt: "Valmis tarkoittaa minulle tätä: sovellus on verkossa osoitteessa, jonka voin laittaa sivuillemme.",
      connection: "Työviikoilla 1–2 syntyivät kehitysympäristö ja hyväksytty suunnitelma, mutta sovellus toimii vasta omalla koneella. Nyt viet rungon julkiseen osoitteeseen ja teet ensimmäisen yhteyden selaimesta PHP-rajapintaan, koska julkaisu on projektin todennäköisin kaatumiskohta ja se on helpointa korjata, kun rikottavaa on vähän. Samaa julkaisuputkea ja rajapintakutsun mallia käytät julkaisuehdokkaaseen asti, ja kaavion data haetaan samalla tavalla työviikolla 6.",
      deliverable: "Julkinen osoite, jossa sovellus ja /api/health vastaavat; HealthStatus-komponentti; vite.config.ts:n proxy-asetus; julkaisumallin perustelu; project-docs/api-sopimus.md; project-docs/react-vite-selvitys.md taulukkona omista P0-tarinoista.",
      why: "Julkaisu on projektin todennäköisin kaatumiskohta, koska PHP:tä ei voi ajaa staattisilla alustoilla. Siksi se tehdään ensimmäisenä ja siihen on varapolku. Yksi palvelin, joka tarjoilee sekä buildatun sovelluksen että rajapinnan samasta osoitteesta, säästää CORS-asetukset, kaksi ympäristöä ja kaksi nukkuvaa ilmaispalvelua.",
      done: "Toinen henkilö avaa julkisen osoitteen ja /api/health omalla laitteellaan ja näkee HealthStatus-komponentin ilmoittavan ”ok”; alustan lokinäkymästä on kuvakaappaus; build tehdään alustalla ja client/dist on gitignoressa; api-sopimus.md ja selvitystaulukko ovat repossa.",
      record: "Kirjoita työviikon 3 merkintään: valittu julkaisumalli ja alusta perusteluineen, mihin julkaisu jumitti ja miten se ratkesi (tai varapolun käyttö), proxy-asetuksen sisältö ja se, mitä selvitystaulukko paljasti ulkopuolelta tulevista osista.",
      skills: ["julkaisu tuotantoon", "Vite-proxy ja build", "React-komponentti ja fetch", "rajapintasopimus"],
      termit: ["proxy", "build", "fetch", "komponentti"],
      tehtavat: {
        "3-1": {
          miksi: "Julkaisu on projektin todennäköisin kaatumiskohta. Kun aloitat sen lähes tyhjällä sovelluksella, virheet löytyvät ennen kuin rikottavaa on paljon.",
          osat: [
            ["Valitse julkaisumalli", "Valitse malli suunnitelman kriteereillä. Oletus on yksi PHP-palvelin, joka tarjoilee `client/dist`-kansion ja `/api`-reitit samasta osoitteesta."],
            ["Seuraa testattua polkua", "Avaa ohjaajan antama testattu julkaisupolku ja tee sen vaiheet omalle repositorylle."],
            ["Tee build alustalla", "Aseta alusta ajamaan `npm ci && npm run build` client-kansiossa. Varmista, että `client/dist/` on .gitignoressa, jotta buildia ei viedä repositoryyn."],
            ["Julkaise heti", "Tee ensimmäinen julkaisuyritys jo viikon ensimmäisenä päivänä, vaikka sovelluksessa ei ole vielä juuri mitään."],
            ["Ota lokista kuva", "Kun julkaisu onnistuu, ota kuvakaappaus alustan lokinäkymästä."]
          ],
          valmis: "Julkinen osoite avaa sovelluksen rungon, build tehdään alustalla ja `client/dist` on .gitignoressa.",
          tallenna: "Julkinen osoite ja julkaisumallin perustelu työviikon 3 päiväkirjaan. Lokin kuvakaappaus `project-docs/`-kansioon.",
          sanat: ["build"]
        },
        "3-2": {
          miksi: "Terveystarkistus kertoo yhdellä kutsulla, että rajapinta vastaa. Proxyn ansiosta selain käyttää kehityksessä samaa osoitetta kuin tuotannossa.",
          osat: [
            ["Reititä pyynnöt", "Kirjoita `server/public/index.php`:hen reititys: `/api`-alkuiset polut ajavat rajapintakoodin, muut polut palauttavat buildatun sovelluksen."],
            ["Palauta tila", "Toteuta `GET /api/health`, joka palauttaa JSONin `{\"status\":\"ok\"}`. Kokeile sitä curlilla osoitteessa `http://localhost:8000/api/health`."],
            ["Lisää proxy", "Lisää `vite.config.ts`:ään proxy, joka ohjaa kehityspalvelimen `/api`-pyynnöt osoitteeseen `http://localhost:8000`."],
            ["Kokeile proxyä", "Avaa `http://localhost:5173/api/health`. Saman JSONin pitää näkyä, vaikka palvelimia on kaksi."]
          ],
          valmis: "`/api/health` vastaa sekä PHP:n osoitteessa localhost:8000 että Viten kautta osoitteessa localhost:5173.",
          tallenna: "Commit ja push. Proxy-asetus näkyy repositoryn `vite.config.ts`-tiedostossa.",
          sanat: ["proxy"]
        },
        "3-3": {
          miksi: "Ensimmäinen oma komponentti harjoittelee samaa kaavaa, jolla työviikolla 6 haetaan kaavion data: hae, pidä tilassa ja näytä.",
          osat: [
            ["Hae tila", "Kirjoita komponentti `HealthStatus`, joka hakee fetchillä osoitteen `/api/health`. Suhteellinen osoite toimii sekä proxyn kautta että tuotannossa."],
            ["Näytä vastaus", "Tallenna vastaus useStatella ja näytä ”Rajapinta: ok” tai selkeä virheteksti."],
            ["Julkaise ja tarkista", "Julkaise muutos ja avaa julkinen osoite. HealthStatusin pitää näyttää ”ok” myös tuotannossa."],
            ["Tarkista julkaisu torstaina", "Jos julkinen osoite ei vielä toimi, kirjaa virhe ja alustan loki päiväkirjaan, tee bug-issue ja jatka työviikkoon 4. Ohjaaja antaa varapolun viikkopalaverissa."]
          ],
          valmis: "HealthStatus näyttää ”Rajapinta: ok” julkisessa osoitteessa, tai julkaisun jumi on kirjattu päiväkirjaan ja bug-issueen lokeineen. Kirjaamatta jäänyt jumi ei riitä.",
          tallenna: "`HealthStatus.tsx` commitilla repositoryyn. Kuvakaappaus tuotannon ”ok”-tilasta työviikon 3 päiväkirjaan.",
          sanat: ["fetch", "komponentti"]
        },
        "3-4": {
          miksi: "Sopimus kertoo ennen koodia, mitä PHP palauttaa ja mitä React odottaa. Selvitys näyttää, mitkä osat teet itse ja mitkä tulevat ulkopuolelta.",
          osat: [
            ["Kirjoita sopimus", "Kirjoita `project-docs/api-sopimus.md`: osoite, parametrit `city` ja `year` sekä vastauksen JSON-muoto esimerkillä."],
            ["Kirjaa virhevastaukset", "Lisää sopimukseen virhevastaukset 400, 404 ja 502 esimerkkeineen. PHP ja React rakennetaan tätä vasten työviikoilla 5 ja 6."],
            ["Tee selvitystaulukko", "Kirjoita `project-docs/react-vite-selvitys.md` taulukkona omista pakollisen ytimen (P0) tarinoista: mikä tehdään Reactilla ja Vitellä, mikä tulee ulkopuolelta ja mistä."],
            ["Pyydä toinen testaaja", "Pyydä toista henkilöä avaamaan julkinen osoite ja `/api/health` omalla laitteellaan. Kirjaa tulos päiväkirjaan."]
          ],
          valmis: "`api-sopimus.md` ja selvitystaulukko ovat repositoryssa, ja toinen henkilö on kuitannut julkisen osoitteen toimivan omalla laitteellaan.",
          tallenna: "Molemmat tiedostot `project-docs/`-kansioon commitilla. Toisen henkilön kuittaus työviikon 3 päiväkirjaan.",
          sanat: ["JSON"]
        }
      },
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
      feature: "Testiajo näyttää, että Daylight laskee Helsingin ja Utsjoen testipäivät oikein, myös kaamoksen 0 minuuttia ja yöttömän yön 1440 minuuttia.",
      excerpt: "Kukaan ei hahmota numeroista, kuinka jyrkästi päivän pituus muuttuu, kun siirtyy Helsingistä napapiirin pohjoispuolelle.",
      connection: "Työviikon 2 laskentatapapäätös muuttuu nyt koodiksi, ja työviikolla 3 julkaistu runko saa ensimmäisen oikean moduulinsa. Odotusarvot haetaan ulkoisesta lähteestä ennen koodia, koska väärä laskenta näkyisi kauniissakin kaaviossa vääränä tietona. Valmis Daylight-moduuli on se, jonka varaan työviikon 5 rajapinta ja kaikki kaaviot rakentuvat.",
      deliverable: "server/src/Daylight.php, testitiedosto ja testiajon tuloste T01–T04 odotusarvoineen ja lähteineen, vertailu date_sun_info-referenssiin ja bug-issuet löydetyistä virheistä.",
      why: "Napapiirin pohjoispuoli rikkoo naiivin kaavan: tuntikulman kosini menee yli yhden, ja tulos on NaN eikä 0 tai 1440. Tämä on odotettu virhe, ei sinun vikasi. Sen löytäminen, kirjaaminen ja korjaaminen on ensimmäinen aito virheenkorjausketjun raaka-aine.",
      done: "Testit T01–T04 menevät läpi komennolla (`composer test` tai `php tests/run.php`); vuosi 2028 palauttaa 366 riviä ja 2027 365; mikään arvo ei ole alle 0 tai yli 1440; poikkeamat referenssiin on kirjattu ja selitetty; löydetyt virheet ovat bug-issueina.",
      record: "Kirjoita työviikon 4 merkintään: mistä odotusarvot haettiin, mikä kaava tai funktio on käytössä, mikä meni ensin pieleen Utsjoella ja miten korjasit sen, testiajon tuloste ja poikkeamat referenssiin.",
      skills: ["rakenteinen ohjelmointi", "yksikkötestit PHP:llä", "rajatapaukset", "referenssiin vertaaminen"],
      termit: ["T01", "yksikkötesti", "Composer", "bug-issue"],
      tehtavat: {
        "4-1": {
          miksi: "Odotusarvo omasta koodista todistaa vain, että koodi tekee saman kuin eilen. Ulkoinen lähde paljastaa, jos laskenta on väärin.",
          osat: [
            ["Hae odotusarvot", "Hae Ilmatieteen laitoksen tai timeanddate-sivun auringonnousu- ja laskuajat ja laske niistä päivänvalo minuutteina."],
            ["Kirjaa testitapaukset", "Kirjaa testitiedostoon: T01 Helsinki 21.6.2026 ≈ 18 h 56 min, T02 Helsinki 21.12.2026 ≈ 5 h 49 min, T03 Utsjoki 21.12.2026 = 0 min ja T04 Utsjoki 21.6.2026 = 1440 min."],
            ["Kirjaa lähde ja toleranssi", "Merkitse jokaiselle testitapaukselle lähde ja toleranssi ±3 min. Numeroi tapaukset T01, T02 ja niin edelleen koko projektin ajan."],
            ["Kirjoita yksikkötestit", "Valitse PHPUnit Composerin kautta tai oma skripti `tests/run.php`. Kirjoita neljä testiä, jotka kutsuvat `Daylight::minutesForDate(lat, lon, date)` ja vertaavat tulosta odotusarvoon."],
            ["Katso testien epäonnistuvan", "Aja testit. Niiden pitää epäonnistua, koska moduulia ei vielä ole. Muuten testi ei mittaa mitään."]
          ],
          valmis: "Testitiedostossa ovat T01–T04 odotusarvoineen, lähteineen ja toleransseineen, ja testiajo epäonnistuu, koska moduuli puuttuu.",
          tallenna: "Testitiedosto omana commitinaan (`tests/DaylightTest.php` tai `tests/run.php`). Odotusarvojen lähde työviikon 4 päiväkirjaan.",
          sanat: ["T01", "yksikkötesti", "Composer"]
        },
        "4-2": {
          miksi: "Tämä on sovelluksen ydinlogiikka: jos laskenta on väärin, kaunis kaavio näyttää väärää tietoa.",
          osat: [
            ["Laske yksi päivä", "Toteuta `Daylight::minutesForDate(lat, lon, date)` valitsemallasi tavalla. Oma yhtälö etenee näin: päivän numero → auringon deklinaatio → tuntikulma → päivänvalo."],
            ["Käsittele polaarijaksot", "Omassa yhtälössä tarkista arvo ennen acos-kutsua. `date_sun_info` palauttaa polaarijaksolla arvon true (aurinko ei laske) tai false (aurinko ei nouse)."],
            ["Rajaa tulos", "Rajaa jokainen tulos välille 0–1440 minuuttia."],
            ["Laske koko vuosi", "Toteuta `Daylight::yearFor(lat, lon, year)`, joka palauttaa listan `{date, daylightMinutes}`. Laske päivien määrä kalenterista, älä oleta 365:tä."],
            ["Tarkista karkausvuosi", "Tarkista, että vuosi 2027 antaa 365 riviä ja vuosi 2028 antaa 366 riviä."]
          ],
          valmis: "`yearFor` palauttaa vuodelle 2027 365 riviä ja vuodelle 2028 366 riviä, eikä mikään arvo ole alle 0 tai yli 1440.",
          tallenna: "`server/src/Daylight.php` omana commitinaan, erillään testeistä. Käytetty kaava tai funktio työviikon 4 päiväkirjaan."
        },
        "4-3": {
          miksi: "Poikkeama referenssiin on joko selitettävä ero tai virhe. Jokainen kirjattu virhe on työviikon 14 virheenkorjausketjujen raaka-ainetta.",
          osat: [
            ["Aja testit", "Aja testit komennolla `composer test` tai `php tests/run.php`, kunnes testitapaukset T01–T04 menevät läpi."],
            ["Kirjaa virheet heti", "Kirjaa jokainen löytynyt virhe heti GitHub-issueksi tunnisteella bug: mitä odotit ja mitä tapahtui. Utsjoen NaN on odotettu virhe, ei sinun vikasi."],
            ["Vertaa referenssiin", "Aja oma laskenta ja `date_sun_info` rinnakkain kolmelle paikalle ja neljälle päivälle. Kirjaa jokainen poikkeama taulukkoon."],
            ["Selitä poikkeamat", "Kirjaa jokaiselle poikkeamalle syy: refraktio, aikavyöhyke tai pyöristys. Selittämättömästä poikkeamasta tehdään bug-issue."],
            ["Käy Utsjoki läpi ohjaajan kanssa", "Näytä viikkopalaverissa, miten Utsjoen tapaus ratkesi, ja kirjaa se päiväkirjaan yhdessä ratkottuna ongelmana."]
          ],
          valmis: "T01–T04 menevät läpi komennolla, poikkeamat referenssiin on selitetty, ja jokainen löydetty virhe on bug-issueena.",
          tallenna: "Testiajon tuloste ja vertailu referenssiin työviikon 4 päiväkirjaan.",
          sanat: ["bug-issue"]
        }
      },
      help: {
        title: "Päivänvalolaskennan ansat ja testipohja",
        tree: "server/\n├─ src/Daylight.php        minutesForDate(), yearFor()\n├─ tests/DaylightTest.php  T01–T04 (PHPUnit) TAI\n├─ tests/run.php           T01–T04 omana skriptinä\n└─ composer.json           \"scripts\": { \"test\": \"phpunit tests\" }\n\nANSAT – NÄMÄ OVAT ODOTETTUJA, EIVÄT OMA VIKA\n1 acos(x), kun x > 1 tai x < -1 → NaN. Napapiirin pohjoispuolella\n  kesällä ja talvella. Ratkaisu: tarkista arvoalue ennen acos-kutsua:\n  x >= 1 → 0 min (kaamos), x <= -1 → 1440 min (yötön yö).\n2 Refraktio: ilmakehä taittaa valon, joten aurinko näkyy ennen kuin se\n  on horisontissa. Ilman -0,833° korjausta Rovaniemi 21.6. antaa\n  n. 23 h 30 min, ei 24 h. Referenssit käyttävät korjausta.\n3 date_sun_info palauttaa polaarijaksoilla true/false, ei aikaleimaa.\n  Tarkista tyyppi ennen kuin lasket erotusta.\n4 Aikavyöhyke: laske päivän pituus, älä kellonaikoja. Erotus\n  nousu → lasku ei riipu vyöhykkeestä, kellonajat riippuvat.",
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
      feature: "Kun kirjoitat curl-komentoon Suomen paikkakunnan, rajapinta palauttaa sen vuoden päivänvalon, ja tuntematon nimi antaa selvän virheilmoituksen.",
      excerpt: "Paikkakunnat eivät saa olla ennalta lukittu lista.",
      connection: "Työviikon 4 Daylight-moduuli laskee päivänvalon koordinaateille, mutta käyttäjä kirjoittaa paikkakunnan nimen. Nyt kytket nimihaun ja laskennan rajapintaan, jonka muoto sovittiin työviikon 3 sopimuksessa. Viikon lopussa rajapinta palauttaa minkä tahansa Suomen paikkakunnan vuoden, ja työviikolla 6 selain piirtää siitä ensimmäisen kaavion.",
      deliverable: "server/src/Geocoder.php, paikkakuntatiedosto lisenssimerkintöineen (JSON tai SQLite), rajapinnan reititys ja validointi index.php:ssä, curl-tulosteet T05–T07.",
      why: "Ilman nimen normalisointia ”utsjoki” ja ”Utsjoki” ovat eri paikkoja, ja ilman validointia rajapinta laskee vuoden 999999 päivät loputtomiin. Tietolähteen lisenssi kirjataan nyt, koska jälkikäteen sitä ei muista.",
      done: "T05 (Helsinki 2026 → 200, 365 riviä, nimi ja koordinaatit), T06 (”utsjoki” pienillä → 200 Utsjoki) ja T07 (”Tuntematonkylä” → 404 JSON-virhe) antavat curlilla kirjatut vastaukset; paikkakuntatiedoston lähde ja lisenssi ovat README:ssä; syötteiden pituus ja vuosiväli tarkistetaan.",
      record: "Kirjoita työviikon 5 merkintään: mistä paikkakuntadata tuli ja millä lisenssillä (tai käytitkö ohjaajan kuntaluetteloa), miten normalisoit nimen, mitkä rajat annoit syötteille ja T05–T07:n tulosteet.",
      skills: ["tietovaraston käyttö", "syötteiden validointi", "JSON-rajapinta", "curl-testaus"],
      termit: ["geokoodaus", "curl"],
      tehtavat: {
        "5-1": {
          miksi: "Sovellus tarvitsee jokaiselle paikkakunnalle koordinaatit. Tietolähteen lisenssi kirjataan heti, koska jälkikäteen sitä ei muista.",
          osat: [
            ["Hanki koordinaatit", "Hanki paikkakuntien koordinaatit avoimesta lähteestä, esimerkiksi GeoNames tai Maanmittauslaitos (lisenssi CC BY 4.0)."],
            ["Tarkista tiistaina", "Jos oma hankinta ei ole valmis tiistaihin mennessä, ota ohjaajan kuntaluettelo käyttöön ja jatka sillä."],
            ["Tallenna valitsemassasi muodossa", "Tallenna data työviikolla 2 valitsemassasi muodossa: `server/data/paikkakunnat.json` tai `server/data/paikkakunnat.sqlite`."],
            ["Kirjaa lähde README:hen", "Kirjaa README:hen heti tietolähde, lisenssi, hakupäivä ja rivien määrä."]
          ],
          valmis: "Paikkakuntatiedosto on repositoryssa, ja README kertoo sen lähteen, lisenssin ja hakupäivän.",
          tallenna: "Paikkakuntatiedosto `server/data/`-kansioon commitilla. Datan alkuperä ja lisenssi, tai ohjaajan kuntaluettelon käyttö, työviikon 5 päiväkirjaan.",
          sanat: ["JSON"]
        },
        "5-2": {
          miksi: "Ilman nimen normalisointia ”utsjoki” ja ”Utsjoki” ovat eri paikkoja, ja asiakas saa virheilmoituksen oikein kirjoitetusta nimestä.",
          osat: [
            ["Kirjoita haku", "Toteuta `Geocoder::find(name)` tiedostoon `server/src/Geocoder.php`. Se palauttaa paikan nimen ja koordinaatit tai null, jos paikkaa ei löydy."],
            ["Normalisoi kirjaimet", "Muuta haettava nimi pieniksi kirjaimiksi funktiolla `mb_strtolower`. Tavallinen `strtolower` ei käsittele ä:tä ja ö:tä oikein."],
            ["Poista välilyönnit", "Poista nimen alusta ja lopusta ylimääräiset välilyönnit. Vertaa tulosta samalla tavalla normalisoituun avaimeen."],
            ["Kokeile hankalat nimet", "Kokeile hakua nimillä ”Utsjoki”, ” utsjoki ” ja ”ÄÄNEKOSKI”. Jokaisen pitää löytää oikea paikka."]
          ],
          valmis: "`Geocoder::find` löytää paikan isoilla ja pienillä kirjaimilla, ä:llä ja ö:llä sekä ylimääräisillä välilyönneillä ja palauttaa tuntemattomalle nimelle null.",
          tallenna: "`server/src/Geocoder.php` commitilla. Normalisoinnin tapa työviikon 5 päiväkirjaan.",
          sanat: ["geokoodaus"]
        },
        "5-3": {
          miksi: "Rajapinta on sopimus selaimen ja PHP:n välillä. Validointi estää esimerkiksi vuoden 999999 laskemisen loputtomiin.",
          osat: [
            ["Validoi syötteet", "Tarkista ennen laskentaa, että `city` ei ole tyhjä eikä yli 100 merkkiä ja että `year` on kokonaisluku välillä 1900–2100."],
            ["Palauta virheet JSONina", "Virheellinen syöte palauttaa HTTP-koodin 400 ja vastauksen `{\"error\": \"…\"}`. Tuntematon paikka palauttaa koodin 404 samassa muodossa."],
            ["Kytke reitti", "Lisää `index.php`:hen reitti `/api/daylight`: lue parametrit, validoi, hae koordinaatit Geocoderilla, laske vuosi Daylightilla ja palauta sopimuksen mukainen vastaus."],
            ["Erota vastuut", "Pidä reititys, validointi, haku ja laskenta erillisinä funktioina, jotta voit testata ja korjata ne yksi kerrallaan."],
            ["Päivitä sopimus", "Kirjaa syötteiden rajat tiedostoon `project-docs/api-sopimus.md`."]
          ],
          valmis: "`/api/daylight` palauttaa sopimuksen mukaisen JSONin, virheellinen syöte antaa koodin 400 ja tuntematon paikka koodin 404, molemmat JSONina.",
          tallenna: "Reitti ja validointi commitilla. Syötteiden rajat `api-sopimus.md`:hen ja työviikon 5 päiväkirjaan.",
          sanat: ["JSON"]
        },
        "5-4": {
          miksi: "Curl testaa rajapinnan suoraan ilman selainta. Näin tiedät myöhemmin, onko virhe PHP:ssä vai selaimen koodissa.",
          osat: [
            ["Kirjaa odotukset", "Kirjaa testitapausten odotetut vastaukset ennen ajoa: T05 Helsinki 2026 → 200 ja 365 riviä, T06 ”utsjoki” → 200 Utsjoki, T07 ”Tuntematonkylä” → 404 ja virheilmoitus."],
            ["Aja curl", "Aja jokainen testitapaus komennolla `curl -i` ja tallenna tuloste."],
            ["Vertaa ja korjaa", "Jos saatu vastaus poikkeaa odotetusta, tee bug-issue, korjaa ja aja testi uudelleen."],
            ["Pidä viikkopalaveri", "Kirjaa toteumat issueihin ja sovi ohjaajan kanssa työviikon 6 kaaviokirjastovertailun kriteerit."]
          ],
          valmis: "T05–T07 antavat curlilla odotetut vastaukset, ja jokaisen tuloste on kirjattu.",
          tallenna: "curl-tulosteet T05–T07 työviikon 5 päiväkirjaan.",
          sanat: ["curl", "bug-issue"]
        }
      },
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
      feature: "Julkaistussa sovelluksessa näkyy Helsingin päivän pituus koko vuodelta viivakaaviona, ja sammutettu rajapinta näyttää käyttäjälle virheilmoituksen.",
      excerpt: "Haluan verkkosivullemme kuvan, joka näyttää päivän pituuden vuoden jokaisena päivänä millä tahansa Suomen paikkakunnalla.",
      connection: "Työviikon 5 rajapinta palauttaa minkä tahansa paikkakunnan vuoden, joten nyt selain alkaa käyttää sitä. Haet datan samalla fetch-kaavalla kuin työviikon 3 HealthStatus-komponentti ja piirrät sen kaaviokirjastolla, jonka valitset oman kokeilun perusteella. Valinta vaikuttaa tooltipiin, merkintöihin ja saavutettavuuteen työviikoilla 8, 9 ja 12, ja tästä viikosta alkaen jokainen ominaisuus tehdään omassa haarassa.",
      deliverable: "Kaaviokirjastovertailu kokeilusarakkeella, client/src/api.ts, DaylightChart-komponentti, ensimmäinen pull request, kuvakaappaus julkaistusta kaaviosta ja T16:n virhetilasta.",
      why: "Kaaviokirjasto on projektin tärkein ulkoinen komponentti: sen valinta vaikuttaa tooltipiin, merkintöihin ja saavutettavuuteen viikoilla 8, 9 ja 12. Vertailu ilman omaa kokeilua on kielimallin taulukko; yksi koeasennus paljastaa, mitä dokumentaatio ei kerro. Rajapintakutsut pidetään omassa moduulissa, jotta kaavio ei tiedä mitään fetchistä.",
      done: "Kaavio näkyy julkaistussa versiossa; api.ts sisältää kaikki rajapintakutsut ja vastauksen TypeScript-tyypin; T16 on kirjattu ja ajettu: kun PHP-palvelin sammutetaan, selain näyttää virheilmoituksen eikä tyhjää sivua; ensimmäinen pull request on yhdistetty itsekatselmoinnin jälkeen.",
      record: "Kirjoita työviikon 6 merkintään: kolme vertailtua kirjastoa ja kokeilusarakkeen havainnot, valinta ja se, mikä siitä jää huonommaksi, api.ts:n rajapinta (funktion nimi ja tyyppi), T16:n tulos ja pull requestin linkki.",
      skills: ["ulkoisen komponentin valinta", "fetch ja TypeScript-tyypit", "React-tila ja ehdollinen renderöinti", "ominaisuushaara ja pull request"],
      termit: ["ominaisuushaara", "pull request"],
      tehtavat: {
        "6-1": {
          miksi: "Kaaviokirjasto on projektin tärkein ulkoinen komponentti. Yksi koeasennus paljastaa, mitä dokumentaatio ei kerro.",
          osat: [
            ["Luo haara", "Luo ominaisuushaara, esimerkiksi `feature/ensimmainen-kaavio`, ja tarkenna issueen hyväksymiskriteerit. Tästä viikosta alkaen `main`-haaraan ei committata suoraan."],
            ["Vertaa kolme kirjastoa", "Vertaa kolmea kirjastoa, esimerkiksi Recharts, Chart.js ja Apache ECharts: lisenssi, React-tuki, tooltip- ja merkintätuki, näppäimistötuki ja dokumentaatio."],
            ["Mittaa koko itse", "Hae jokaisen paketin koko ja lisenssi omasta tulosteesta komennolla `npm view <paketti> dist.unpackedSize license`."],
            ["Tee koeasennus", "Asenna vähintään yksi kirjasto ja piirrä sillä yksi sarja. Kirjaa vertailun kokeilusarakkeeseen, mitä tapahtui ja kauanko se kesti."],
            ["Kirjaa valinta", "Kirjaa valinta ja se, mikä siitä jää huonommaksi, suunnitelman Kaaviokirjasto-kenttään. Lisää riippuvuustaulukkoon rivi: paketti, rooli, versio ja lisenssi."]
          ],
          valmis: "Vertailussa on kolme kirjastoa, omat kokotulosteet ja kokeilusarake, ja valinta on suunnitelmassa ja riippuvuustaulukossa.",
          tallenna: "`project-docs/vertailu-kaaviokirjasto.md` commitilla haaraan. Valinta ja kokeilun havainnot työviikon 6 päiväkirjaan.",
          sanat: ["ominaisuushaara"]
        },
        "6-2": {
          miksi: "Rajapintakutsut pidetään omassa moduulissaan, jotta kaavio ei tiedä mitään fetchistä. Sama rakenne kantaa monen paikan kaavioon työviikolla 7.",
          osat: [
            ["Kirjoita tyyppi", "Kirjoita `client/src/api.ts`:ään TypeScript-tyyppi rajapinnan vastaukselle. Sen pitää vastata `api-sopimus.md`:n muotoa."],
            ["Kirjoita hakufunktio", "Kirjoita `fetchDaylight(city, year)`, joka palauttaa datan tai heittää virheen rajapinnan virheviestillä. Kaikki fetch-kutsut ovat tässä tiedostossa, eivät komponenteissa."],
            ["Piirrä kaavio", "Toteuta `DaylightChart`, joka saa datan propsina ja piirtää viivakaavion: x-akselilla päivä ja y-akselilla tunnit 0–24."],
            ["Näytä lataus ja virhe", "Anna emokomponentin hakea Helsingin data. Se näyttää ensin tekstin ”Ladataan…” ja virheen sattuessa käyttäjälle luettavan virheilmoituksen."]
          ],
          valmis: "Helsingin vuosi piirtyy viivakaavioksi, `api.ts` sisältää kaikki rajapintakutsut ja vastauksen tyypin, ja lataus- ja virhetila näkyvät.",
          tallenna: "`api.ts` ja `DaylightChart` commitilla haaraan. Hakufunktion nimi ja tyyppi työviikon 6 päiväkirjaan.",
          sanat: ["fetch", "komponentti"]
        },
        "6-3": {
          miksi: "Virhetila on osa toimeksiantoa: sovellus ei saa jäädä tyhjäksi. Ensimmäinen pull request aloittaa työtavan, jota käytät loppuun asti.",
          osat: [
            ["Kirjaa T16", "Kirjaa testitapaus T16 ennen ajoa: kun PHP-palvelin on sammutettu, sivu näyttää virheilmoituksen eikä tyhjää kaaviota."],
            ["Aja T16", "Sammuta PHP-palvelin, lataa sivu ja kirjaa tulos. Ota kuvakaappaus virhetilasta."],
            ["Avaa pull request", "Avaa pull request ja kirjoita kuvaukseen, mitä muutit ja miten testasit."],
            ["Katselmoi ja yhdistä", "Lue muutokset läpi kuin toisen tekemänä. Yhdistä pull request `main`-haaraan vasta sen jälkeen."],
            ["Julkaise ja näytä", "Julkaise ja avaa kaavio julkisesta osoitteesta. Näytä se ohjaajalle viikkopalaverissa ja kirjaa toteumat issueihin."]
          ],
          valmis: "T16 on kirjattu ja ajettu, ensimmäinen pull request on yhdistetty itsekatselmoinnin jälkeen, ja kaavio näkyy julkaistussa versiossa.",
          tallenna: "Kuvakaappaukset julkaistusta kaaviosta ja T16:n virhetilasta sekä pull requestin linkki työviikon 6 päiväkirjaan.",
          sanat: ["pull request"]
        }
      },
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
      feature: "Käyttäjä lisää ja poistaa paikkoja lomakkeella, ja Helsinki, Tampere, Rovaniemi ja Utsjoki näkyvät samassa kaaviossa eri väreillä samalla 0–24 h asteikolla.",
      excerpt: "Asiakkaan pitää voida kirjoittaa paikkakunnan nimi, lisätä se kaavioon ja verrata sitä toiseen paikkaan samassa kuvassa, vaikka Helsinkiä Utsjokeen.",
      connection: "Työviikon 6 kaavio näyttää yhden paikan, mutta asiakas haluaa verrata paikkoja samassa kuvassa. Rakennat lomakkeen ja paikkalistan itse Tailwindilla työviikon 2 rautalankojen mukaan ja kokoat paikkojen tilan omaan useLocations-hookiin. Samaa tilaa käyttää työviikon 11 vuosivalinta.",
      deliverable: "Tailwind-asennus perusteluineen, LocationForm- ja LocationList-komponentit, useLocations-hook, T08–T09:n tulokset, arvio vs. toteuma -taulukko viikkopalaverien kirjauksista.",
      why: "Käyttöliittymän toteuttaminen suunnitelmasta on oma vaatimuksensa, ja se todennetaan vain näkymällä, jonka olet rakentanut itse rautalangan mukaan. Yhteinen asteikko on vertailun ehto: jos jokainen sarja skaalautuu omaan maksimiinsa, Utsjoen kaamos ja Helsingin talvi näyttävät samalta.",
      done: "T08: Helsinki, Tampere, Rovaniemi ja Utsjoki näkyvät samassa kaaviossa eri väreillä ja yhteisellä asteikolla; T09: sama paikka toistamiseen hylätään ilmoituksella; paikan voi poistaa listasta; Tailwind on riippuvuustaulukossa perusteltuna; arvio vs. toteuma -taulukko on päiväkirjassa.",
      record: "Kirjoita työviikon 7 merkintään: komponenttien vastuut, mitä Tailwind ratkaisi tässä näkymässä ja mitä ei, miten duplikaatti tunnistetaan, T08–T09:n tulokset ja arvio vs. toteuma -taulukon opetus.",
      skills: ["komponenttijako ja propsit", "oma hook ja tila", "Tailwind perusteltuna tuontina", "arvio vs. toteuma"],
      termit: ["hook"],
      tehtavat: {
        "7-1": {
          miksi: "Käyttöliittymän toteuttaminen suunnitelmasta todennetaan vain näkymällä, jonka olet rakentanut itse rautalangan mukaan.",
          osat: [
            ["Luo haara ja asenna Tailwind", "Luo ominaisuushaara ja asenna Tailwind CSS Viten ohjeen mukaan. Tarkista, että yksi luokka vaikuttaa, ennen kuin kirjoitat lisää."],
            ["Perustele Tailwind", "Kirjaa riippuvuustaulukkoon, mitä Tailwind ratkaisee tässä näkymässä (välit, värit, lomakkeen ulkoasu) ja mitä ei (rakenne, saavutettavuus, tila)."],
            ["Kirjoita useLocations", "Kirjoita hook `useLocations`, joka pitää listan paikoista tiloineen (ladataan, valmis, virhe) ja tarjoaa funktiot `addLocation(name)` ja `removeLocation(name)`."],
            ["Rakenna lomake", "Rakenna rautalangan mukaan `LocationForm`: tekstikenttä, lisäysnappi ja kenttään kytketty label. Älä käytä valmista komponenttikittiä."],
            ["Rakenna lista", "Rakenna `LocationList`, jossa jokaisella paikalla on nimi, värimerkki ja poistonappi. Tarkista, että paikan voi poistaa."],
            ["Päivitä komponenttijako", "Päivitä suunnitelman Komponenttijako-kenttään `LocationForm`, `LocationList` ja `useLocations` sekä kunkin vastuu yhdellä lauseella."]
          ],
          valmis: "Lomakkeella lisätty paikka näkyy listassa ja kaaviossa, ja poistonappi poistaa sen molemmista.",
          tallenna: "Komponentit ja hook commitilla haaraan. Tailwind-perustelu riippuvuustaulukkoon ja komponenttien vastuut työviikon 7 päiväkirjaan.",
          sanat: ["hook", "komponentti"]
        },
        "7-2": {
          miksi: "Yhteinen asteikko on vertailun ehto. Jos jokainen sarja skaalautuu omaan maksimiinsa, Utsjoen kaamos ja Helsingin talvi näyttävät samalta.",
          osat: [
            ["Tunnista duplikaatti", "Vertaa `addLocation`-funktiossa normalisoitua nimeä (välilyönnit pois, pienet kirjaimet) ennen hakua. Sama paikka palauttaa lomakkeelle ilmoituksen eikä tee uutta hakua."],
            ["Anna värit", "Anna jokaiselle paikalle väri kiinteästä paletista lisäysjärjestyksessä. Käytä samaa väriä listassa ja kaaviossa."],
            ["Kiinnitä asteikko", "Kiinnitä kaavion y-akseli välille 0–24 h, jotta kaikki paikat näkyvät samalla asteikolla."],
            ["Kokeile kirjoitusasut", "Lisää ”Utsjoki”, ” utsjoki ” ja ”UTSJOKI”. Listaan saa tulla vain yksi rivi."]
          ],
          valmis: "Sama paikka eri kirjoitusasuilla hylätään ilmoituksella, jokaisella sarjalla on oma väri, ja y-akseli on 0–24 h kaikilla paikoilla.",
          tallenna: "Muutokset commitilla haaraan. Duplikaatin tunnistustapa työviikon 7 päiväkirjaan."
        },
        "7-3": {
          miksi: "Nämä ovat ensimmäiset käsin ajettavat selaintestit. Odotus kirjataan ennen ajoa, jotta tulos ei muovaudu sen mukaan, mitä näit.",
          osat: [
            ["Kirjaa odotukset", "Kirjaa testitapaukset ennen ajoa. T08: Helsinki, Tampere, Rovaniemi ja Utsjoki näkyvät samassa kaaviossa eri väreillä. T09: toinen ”Helsinki” hylätään ilmoituksella ”Helsinki on jo kaaviossa”."],
            ["Aja T08", "Lisää neljä paikkaa ja tarkista värit ja yhteinen asteikko. Ota kuvakaappaus."],
            ["Aja T09", "Lisää Helsinki uudelleen ja tarkista, että lista pysyy neljän rivin pituisena. Ota kuvakaappaus ilmoituksesta."],
            ["Yhdistä ja julkaise", "Avaa pull request, katselmoi se itse, yhdistä ja julkaise."]
          ],
          valmis: "T08 ja T09 on kirjattu ennen ajoa, molemmat menevät läpi, ja kummastakin on kuvakaappaus.",
          tallenna: "T08:n ja T09:n tulokset kuvakaappauksineen työviikon 7 päiväkirjaan.",
          sanat: ["pull request"]
        },
        "7-4": {
          miksi: "Vertailu näyttää, missä arviosi pettävät. Loppuviikkojen arviot osuvat paremmin, kun opit omasta datastasi.",
          osat: [
            ["Kokoa taulukko", "Kokoa viikkopalaverien kirjauksista taulukko: issue, arvio tunteina, toteuma tunteina ja ero."],
            ["Etsi suurin ero", "Kirjaa, missä arvio petti eniten ja miksi."],
            ["Päivitä arviot", "Päivitä suunnitelman ja issueiden työmääräarviot loppuviikoille, jos arvio petti."],
            ["Käy läpi palaverissa", "Käy taulukko läpi ohjaajan kanssa viikkopalaverissa ja kirjaa toteumat issueihin."]
          ],
          valmis: "Arvio vs. toteuma -taulukko on tehty viikkopalaverien kirjauksista, ja suurimman eron syy on kirjattu.",
          tallenna: "Arvio vs. toteuma -taulukko ja sen opetus työviikon 7 päiväkirjaan.",
          sanat: ["viikkopalaveri"]
        }
      },
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
      feature: "Kun matkailija vie hiiren tai sormen kaavion päälle, hän näkee esimerkiksi ”21. kesäkuuta · Rovaniemi · 24 h”, ja kaamos ja yötön yö erottuvat kaaviosta nimettyinä alueina.",
      excerpt: "Kun hän vie hiiren kaavion päälle, hänen pitää nähdä tarkka päivä, paikka ja se, kuinka monta tuntia ja minuuttia valoa sinä päivänä on.",
      connection: "Työviikon 7 kaavio näyttää monta paikkaa oikealla datalla, mutta pelkät minuutit eivät kerro matkailijalle mitään. Nyt kirjoitat muotoilun omaan testattuun moduuliin, lisäät vihjeruudun ja korostat kaamoksen ja yöttömän yön, jotka ovat asiakkaan myyntiargumentti. Samaa format.ts-moduulia käyttävät työviikon 9 leikkauspisteet ja työviikon 12 näppäimistön kiertoreitti.",
      deliverable: "client/src/format.ts ja sen Vitest-testit T10–T11, tooltip-komponentti, kaamoksen ja yöttömän yön korostus, kirjattu näppäimistörajoite ja päätös kiertoreitistä.",
      why: "Muotoilu on logiikkaa, ja logiikka testataan ilman selainta. ”0 min” ja ”24 h” ovat rajatapaukset, jotka menevät helposti väärin (”0 h 0 min”, ”24 h 0 min”). Näppäimistötuki riippuu kirjastosta, joten rajoite kirjataan rehellisesti ja kiertoreitti päätetään nyt, toteutetaan työviikolla 12.",
      done: "T10 ja T11 menevät läpi komennolla `npm test`; tooltip toimii hiirellä ja kosketuksella ja näyttää esimerkiksi ”21. kesäkuuta · Rovaniemi · 24 h”; Utsjoen kaamosjaksot ja yöttömän yön jaksot erottuvat kaaviosta; päiväkirjassa on kirjattu, mitä kirjasto tukee näppäimistöllä, ja päätös kiertoreitistä (datataulukko vai päivävalitsin) perusteluineen.",
      record: "Kirjoita työviikon 8 merkintään: format.ts:n funktiot ja niiden testit, miten tooltip on toteutettu kirjaston keinoin, miten ääripäät korostetaan, ja näppäimistörajoite sekä kiertoreitin valinta perusteluineen.",
      skills: ["muotoilulogiikka moduulina", "Vitest-yksikkötestit", "kaaviokirjaston tooltip ja merkinnät", "rajoitteen kirjaaminen"],
      termit: ["tooltip", "Vitest"],
      tehtavat: {
        "8-1": {
          miksi: "Muotoilu on logiikkaa, ja logiikka testataan ilman selainta. ”0 min” ja ”24 h” ovat rajatapauksia, jotka menevät helposti väärin.",
          osat: [
            ["Luo haara ja asenna Vitest", "Luo ominaisuushaara ja asenna Vitest. Lisää `package.json`:iin skripti `\"test\": \"vitest run\"`."],
            ["Kirjoita T10", "Kirjoita testitapaus T10 tiedostoon `format.test.ts`: `formatMinutes(0)` → ”0 min”, `formatMinutes(61)` → ”1 h 1 min” ja `formatMinutes(1440)` → ”24 h”."],
            ["Kirjoita T11", "Kirjoita testitapaus T11: `formatDate(\"2026-06-21\")` → ”21. kesäkuuta”. Aja testit ja katso niiden epäonnistuvan."],
            ["Toteuta funktiot", "Toteuta molemmat funktiot `format.ts`:ään puhtaina funktioina, jotka eivät koske sivuun eivätkä kaavioon. Käytä kuukausien nimiä partitiivissa."],
            ["Aja testit läpi", "Aja `npm test`, kunnes T10 ja T11 menevät läpi."]
          ],
          valmis: "`npm test` ajaa T10:n ja T11:n läpi, eikä `format.ts` käytä kaaviota eikä sivun elementtejä.",
          tallenna: "`format.ts` ja `format.test.ts` commitilla haaraan. Funktiot ja niiden testit työviikon 8 päiväkirjaan.",
          sanat: ["Vitest", "yksikkötesti"]
        },
        "8-2": {
          miksi: "Asiakas haluaa nähdä tarkan päivän, paikan ja keston. Näppäimistötuki riippuu kirjastosta, joten rajoite kirjataan nyt ja ratkaistaan työviikolla 12.",
          osat: [
            ["Rakenna tooltip", "Toteuta kaaviokirjaston tooltip omalla sisällöllä: päivä, paikka ja kesto `format.ts`:n funktioilla, esimerkiksi ”21. kesäkuuta · Rovaniemi · 24 h”."],
            ["Testaa hiirellä ja sormella", "Testaa tooltip hiirellä ja puhelimen kosketuksella. Paikan nimen pitää näkyä myös silloin, kun sarjoja on neljä."],
            ["Kokeile näppäimistöllä", "Kokeile tooltipia pelkällä näppäimistöllä ja kirjaa, mitä kirjasto tukee ja mitä ei. ”Tab ei siirry pisteisiin” on kelvollinen havainto."],
            ["Päätä kiertoreitti", "Valitse työviikolle 12 kiertoreitti: datataulukko kaavion alla tai päivävalitsin, joka näyttää valitun päivän arvot kaikille paikoille. Kirjaa päätös perusteluineen suunnitelmaan."]
          ],
          valmis: "Tooltip näyttää päivän, paikan ja keston hiirellä ja kosketuksella, ja näppäimistörajoite ja kiertoreitin päätös on kirjattu.",
          tallenna: "Tooltip-komponentti commitilla haaraan. Näppäimistörajoite ja kiertoreitin perustelu suunnitelmaan ja työviikon 8 päiväkirjaan.",
          sanat: ["tooltip"]
        },
        "8-3": {
          miksi: "Kaamos ja yötön yö ovat asiakkaan myyntiargumentti. Niiden pitää erottua kuvasta yhdellä katseella.",
          osat: [
            ["Merkitse ääripäät", "Korosta 0 minuutin ja 1440 minuutin jaksot kirjaston merkintätuella, esimerkiksi viitealueella tai viiteviivalla."],
            ["Nimeä jaksot", "Nimeä jaksot kaaviossa sanoilla ”kaamos” ja ”yötön yö”. Pelkkä väri ei kerro, mitä alue tarkoittaa."],
            ["Testaa Lapin datalla", "Lisää Utsjoki ja Rovaniemi. Rovaniemellä yötön yö on lyhyt ja Utsjoella pitkä, ja Utsjoella näkyy myös kaamos."],
            ["Yhdistä ja julkaise", "Avaa pull request, katselmoi se itse, yhdistä ja julkaise. Näytä ohjaajalle viikkopalaverissa Utsjoen kaavio korostuksineen."],
            ["Tarkista katselmoijat", "Tarkista palaverissa, että ohjaaja on nimennyt työviikkojen 10 ja 16 katselmoijat ja päättänyt lisenssin. Kirjaa ne suunnitelmaan tai avoimiksi asioiksi."]
          ],
          valmis: "Julkaistussa kaaviossa Utsjoen kaamos ja yöttömän yön jaksot erottuvat nimettyinä alueina.",
          tallenna: "Kuvakaappaus Utsjoen kaaviosta korostuksineen työviikon 8 päiväkirjaan.",
          sanat: ["pull request"]
        }
      },
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
      example: "Tooltip: ”21. kesäkuuta · Rovaniemi · 24 h”. Kaaviossa Utsjoen 0-taso ja 1440-taso merkitty alueina ”kaamos” ja ”yötön yö”. Päiväkirja: ”Recharts-tooltip ei aukea näppäimistöllä; valitsen päivävalitsimen viikolle 12, koska 365 × 4 riviä taulukkona on liian pitkä.”",
      notEnough: "Tooltip, joka näyttää ”daylightMinutes: 1439”, ääripäät ilman nimeä, tai muotoilufunktio komponentin sisällä ilman testiä."
    },

    9: {
      type: "feature",
      feature: "Kaavio merkitsee päivät, joina kahden paikan päivä on yhtä pitkä, ja merkin tooltip kertoo esimerkiksi ”19. maaliskuuta · Helsinki ja Rovaniemi · noin 12 h”.",
      excerpt: "Silloin voin sanoa asiakkaalle, että maaliskuun lopulla Rovaniemellä on yhtä valoisaa kuin Helsingissä.",
      connection: "Työviikon 8 kaavio näyttää monen paikan päivänvalon luettavasti, ja nyt lisäät toimeksiannon toiveen: päivät, joina kahdessa paikassa on yhtä pitkä päivä. Koska data on päiväkohtaista, käyrät eivät leikkaa tarkasti vaan ohittavat toisensa, joten määritelmä ja toleranssi ovat sinun päätöksiäsi. Valmiit merkit ovat mukana väliversiossa, jota asiakas kokeilee työviikolla 10.",
      deliverable: "Leikkauspisteen määritelmä ja toleranssi suunnitelmassa, client/src/intersections.ts ja sen testit T12–T13, merkit kaaviossa omalla tooltipilla.",
      why: "Tämä on projektin käsitteellisesti vaikein viikko: tasauspäivien ympärillä kaikki paikat ovat lähellä 12 tuntia, ja yöttömän yön aikana kahdessa Lapin paikassa on molemmissa 1440 minuuttia viikkojen ajan. Ilman peräkkäisten päivien yhdistämistä kaavio täyttyy kymmenistä merkeistä ja lakkaa kertomasta mitään.",
      done: "T12: Helsinki–Rovaniemi antaa leikkauksen maalis- ja syyskuussa, ei kesäkuussa; T13: Utsjoki–Inari antaa yöttömän yön ajalta yhden merkin, ei kymmeniä; testit menevät läpi komennolla; kaaviossa on merkki, jonka tooltip nimeää molemmat paikat ja päivän; määritelmä ja toleranssi ovat suunnitelmassa perusteltuina.",
      record: "Kirjoita työviikon 9 merkintään: valittu määritelmä ja toleranssi perusteluineen, miten peräkkäiset päivät yhdistetään, T12–T13:n tulokset ja se, mitä tasauspäivät tekivät ensimmäiselle versiolle.",
      skills: ["algoritmin määrittely ja toleranssi", "puhdas funktio ja testit", "kaavion merkinnät", "rajatapaukset omalla datalla"],
      termit: ["leikkauspiste", "toleranssi"],
      tehtavat: {
        "9-1": {
          miksi: "Päiväkohtainen data ei leikkaa tarkasti, vaan käyrät ohittavat toisensa. Määritelmä on oma päätöksesi, ja se ratkaisee, mitä kaavio näyttää.",
          osat: [
            ["Piirrä ohitus", "Piirrä paperille Helsingin ja Rovaniemen käyrät maaliskuussa. Merkitse päivät, joiden välissä käyrät vaihtavat järjestystä."],
            ["Piirrä yhteinen jakso", "Piirrä Utsjoen ja Inarin käyrät kesäkuussa. Molemmissa on 1440 minuuttia viikkojen ajan."],
            ["Valitse sääntö", "Päätä, onko leikkaus merkinvaihto, erotus enintään toleranssin verran vai molemmat. Päätä toleranssi minuutteina."],
            ["Perustele esimerkillä", "Kirjoita, montako merkkiä sääntösi tuottaa Utsjoki–Inari-parille kesällä ja miksi se on oikea määrä."],
            ["Kirjaa suunnitelmaan", "Kirjaa määritelmä, toleranssi ja perustelu suunnitelman kenttään Leikkauspisteen määritelmä ja toleranssi."]
          ],
          valmis: "Suunnitelmassa on leikkauspisteen määritelmä, toleranssi minuutteina ja perustelu, joka kertoo Utsjoki–Inari-parin merkkien määrän.",
          tallenna: "Suunnitelma commitilla. Kuva paperipiirroksesta `project-docs/`-kansioon ja päätös työviikon 9 päiväkirjaan.",
          sanat: ["leikkauspiste", "toleranssi"],
          apu: {
            otsikko: "Havainnekuva: miten leikkauspiste syntyy päiväkohtaisesta datasta",
            images: [
              ["assets/leikkauspisteet.svg", "Havainnekuva kahdessa osassa. Osa 1: Helsingin ja Rovaniemen päivänvalo 15.–23. maaliskuuta pisteinä. Rovaniemen päivä on aluksi lyhyempi ja 19.3. yhtä pitkä, sen jälkeen pidempi. Erotus Rovaniemi miinus Helsinki on päivittäin −6, −4, −3, −1, 0, +2, +3, +5 ja +6 minuuttia. Kun toleranssi on esimerkiksi 4 minuuttia, kuusi peräkkäistä päivää 16.–21.3. ovat osumia, ja niistä tehdään yksi merkki jakson keskelle. Osa 2: Utsjoella ja Inarilla on kesällä molemmilla 1440 minuuttia noin 60 päivän ajan. Ilman yhdistämistä syntyisi noin 60 merkkiä, yhdistettynä yksi merkki.", "Havainnekuva leikkauspisteen logiikasta. Luvut ovat pyöristettyjä esimerkkejä, eivät odotusarvoja. Toleranssi on oma päätöksesi."]
            ]
          }
        },
        "9-2": {
          miksi: "Laskenta on puhdas funktio erillään kaaviosta, kuten `format.ts`, joten sen voi testata oikealla datalla ilman selainta.",
          osat: [
            ["Tallenna testiaineisto", "Tallenna rajapinnan vastaukset Helsingille, Rovaniemelle, Utsjoelle ja Inarille vuodelta 2026 kansioon `client/src/test-data/`."],
            ["Kirjoita testit ensin", "Kirjoita testitapaukset Vitestillä ennen ajoa. T12: Helsinki–Rovaniemi antaa merkit maalis- ja syyskuussa, ei kesäkuussa. T13: Utsjoki–Inari antaa yöttömältä yöltä yhden merkin."],
            ["Toteuta funktio", "Toteuta `findIntersections(seriesA, seriesB, toleranceMin)` tiedostoon `intersections.ts`. Se palauttaa listan `{date, minutesA, minutesB}` määritelmäsi mukaan."],
            ["Yhdistä peräkkäiset osumat", "Yhdistä peräkkäiset osumapäivät yhdeksi merkiksi, jonka päivä on jakson ensimmäinen tai keskimmäinen päivä."],
            ["Laske kaikki parit", "Kun paikkoja on enemmän kuin kaksi, laske jokainen pari ja anna merkille molempien paikkojen nimet."],
            ["Aja testit läpi", "Aja `npm test`, kunnes T12 ja T13 menevät läpi."]
          ],
          valmis: "T12 ja T13 menevät läpi komennolla `npm test`, ja Utsjoki–Inari-pari tuottaa yöttömältä yöltä yhden merkin.",
          tallenna: "`intersections.ts`, sen testit ja testiaineisto commitilla haaraan. T12:n ja T13:n tulokset työviikon 9 päiväkirjaan.",
          sanat: ["Vitest"]
        },
        "9-3": {
          miksi: "Asiakas haluaa voida sanoa, että maaliskuun lopulla Rovaniemellä on yhtä valoisaa kuin Helsingissä. Merkki ja sen tooltip näyttävät sen.",
          osat: [
            ["Piirrä merkit", "Piirrä merkit kirjaston merkintätuella, esimerkiksi pisteinä tai viiteviivoina. Jos tukea ei ole, piirrä erillinen sarja, jossa vain leikkauspäivillä on arvo."],
            ["Lisää merkin tooltip", "Anna merkille oma tooltip `format.ts`:n funktioilla, esimerkiksi ”19. maaliskuuta · Helsinki ja Rovaniemi · noin 12 h”."],
            ["Tarkista tasauspäivät", "Lisää Helsinki, Rovaniemi ja Utsjoki. Jos maaliskuussa on enemmän kuin yksi merkki paria kohden, tee bug-issue."],
            ["Yhdistä ja julkaise", "Avaa pull request, katselmoi se itse, yhdistä ja julkaise. Näytä ohjaajalle viikkopalaverissa Helsinki–Rovaniemi-esimerkki."]
          ],
          valmis: "Julkaistussa kaaviossa on Helsinki–Rovaniemi-merkki maaliskuussa, ja sen tooltip nimeää päivän, molemmat paikat ja keston.",
          tallenna: "Kuvakaappaus maaliskuun merkistä ja sen tooltipista työviikon 9 päiväkirjaan.",
          sanat: ["tooltip", "bug-issue"]
        }
      },
      help: {
        title: "Leikkauspisteen laskennan runko",
        tree: "client/src/\n├─ intersections.ts        findIntersections(a, b, tolerance) → Intersection[]\n├─ intersections.test.ts   T12, T13 tallennetulla rajapintadatalla\n└─ test-data/\n   ├─ helsinki-2026.json    curl-tuloste tallennettuna\n   ├─ rovaniemi-2026.json\n   ├─ utsjoki-2026.json\n   └─ inari-2026.json\n\nPIIRROS 1 · Helsinki (─) ja Rovaniemi (···) maalis–syyskuu\n 24h │        ···········\n     │     ···           ···\n 12h │──··─────────────────··──   ← ohittavat toisensa n. 19.3. ja 26.9.\n     │ ··                     ··\n  0h │\n\nPIIRROS 2 · Utsjoki ja Inari kesäkuu: molemmat 1440 viikkoja\n 24h │ ═══════════════════════   ← erotus 0 joka päivä → YKSI merkki, ei n. 60",
        actions: [
          "Käy päivät läpi järjestyksessä: d = a[i] − b[i]. Osuma, kun |d| <= toleranssi tai d:n etumerkki vaihtuu edellisestä päivästä.",
          "Ryhmittele peräkkäiset osumat: uusi merkki alkaa vain, kun edellinen päivä ei ollut osuma.",
          "Kun paikkoja on N, laske parit i < j ja anna jokaiselle merkille molemmat nimet.",
          "Jos tasauspäivät tuottavat merkin joka parille, se on oikea tulos: kaikilla on n. 12 h. Näytä silloin yksi yhteinen merkki tai pienennä toleranssia ja kirjaa päätös."
        ],
        code: "T12 · Helsinki–Rovaniemi 2026, toleranssi N min\nOdotettu: merkki välillä 15.–25.3. ja 18.–28.9.; ei merkkiä kesä–heinäkuussa\nSaatu: … · Tila: …\n\nT13 · Utsjoki–Inari 2026\nOdotettu: yöttömän yön jaksolta (touko–heinäkuu) enintään 1 merkki; kaamoksesta enintään 1 merkki tammikuun alkuun ja 1 joulukuuhun (vuodenvaihde katkaisee kaamoksen kahtia)\nSaatu: … · Tila: …\n\nPALUUARVO\n{ date: \"2026-03-19\", a: \"Helsinki\", b: \"Rovaniemi\", minutesA: 721, minutesB: 721 }",
        test: "Lisää Helsinki, Rovaniemi ja Utsjoki ja laske merkit. Jos maaliskuussa on enemmän kuin kolme merkkiä (yksi per pari), peräkkäisten päivien yhdistäminen ei toimi."
      },
      example: "Suunnitelma: ”Leikkaus = erotus ≤ 10 min tai merkinvaihto. Peräkkäiset osumat yhdistetään ja merkki asetetaan jakson keskipäivälle. Toleranssi 10 min, koska päiväkohtainen muutos keväällä on Rovaniemellä n. 7 min/päivä; pienemmällä toleranssilla ohitus voi jäädä väliin.” T12 ja T13 läpi, kuvakaappaus maaliskuun merkistä tooltipilla.",
      notEnough: "Merkki joka päivälle, jona erotus on pieni (Utsjoki–Inari-parille n. 60 merkkiä yöttömän yön ajalta), toleranssi ilman perustelua, tai laskenta kaaviokomponentin sisällä ilman testiä."
    },

    10: {
      type: "katselmointi",
      feature: "Nimetty ulkopuolinen henkilö on kokeillut julkaistua väliversiota asiakkaan roolissa, ja hänen sanansa ja niistä tehdyt muutokset ovat muistiossa ja issueina.",
      excerpt: "Haluan kokeilla toimivaa väliversiota noin puolivälissä omilla käsilläni: en halua kalvoesitystä vaan oikean sovelluksen, johon lisään kolme paikkaa ja katson, ymmärränkö kuvan ilman selityksiä.",
      connection: "Työviikoilla 6–9 rakensit kaavion, vertailun, vihjeruudun ja leikkauspisteet, ja nyt joku muu kuin sinä käyttää niitä ensimmäistä kertaa. Asiakkaan roolia esittää ohjaajan nimeämä ulkopuolinen henkilö, joka lisää kolme paikkaa julkaistuun väliversioon ilman selityksiä. Hänen havaintonsa ohjaavat vaihetta 4, ja tärkein muutos toteutetaan työviikolla 11.",
      deliverable: "Asiakaskielinen esittely, kolmen paikan testitehtävä, katselmointimuistio (rooli, ajankohta, sitaatit, oma tulkinta erikseen) ja priorisoidut muutosissuet.",
      why: "Palaute, joka kerätään, ennen kuin on myöhäistä muuttaa, on halvin palaute. Testaajan omat sanat erillään tulkinnasta ovat asiakaslähtöisen viestinnän työnäyte: kun kirjoitat ”käyttäjä ei löytänyt poistonappia”, se on tulkintasi; kun kirjoitat ”’Miten tän saa pois?’”, se on havainto.",
      done: "Katselmointimuistio on repossa: katselmoijan rooli ja ajankohta, vähintään viisi sitaattia, oma tulkinta erillään, priorisoidut muutokset issueina P-luokin; ohjaajan kanssa on rajattu tärkein muutos enintään kahden päivän työksi työviikolle 11.",
      record: "Kirjoita työviikon 10 merkintään: kuka katselmoi ja missä roolissa, mitä hän sanoi sanatarkasti, mitä tulkitsit siitä, mikä muutos valittiin työviikolle 11 ja miksi juuri se.",
      skills: ["asiakaslähtöinen viestintä", "katselmoinnin järjestäminen", "palautteen kirjaaminen", "priorisointi palautteesta"],
      tehtavat: {
        "10-1": {
          miksi: "Asiakas haluaa kokeilla oikeaa sovellusta omin käsin. Valmiit tehtävät ja lyhyt esittely antavat hänelle mahdollisuuden onnistua ilman selityksiä.",
          osat: [
            ["Kirjoita esittely", "Kirjoita enintään kolmen virkkeen esittely ilman teknistä sanastoa: mitä kuva kertoo matkailijalle."],
            ["Kirjoita testitehtävät", "Kirjoita paperille kolme tehtävää: lisää Helsinki, Rovaniemi ja Utsjoki; kerro, milloin Utsjoella on kaamos; kerro, milloin Rovaniemellä on yhtä valoisaa kuin Helsingissä."],
            ["Tarkista puhelimella", "Avaa julkinen osoite omalla puhelimella ennen tilaisuutta ja tarkista, että väliversio toimii."],
            ["Herätä alusta", "Avaa julkinen osoite 10 minuuttia ennen tilaisuutta. Ilmaisalustat nukkuvat käyttämättöminä, ja ensimmäinen lataus voi kestää kauan."]
          ],
          valmis: "Esittely on enintään kolme virkettä ilman teknisiä sanoja, testitehtävät ovat paperilla, ja julkinen osoite vastaa ennen tilaisuutta.",
          tallenna: "Esittely ja testitehtävät tiedostoon `project-docs/katselmointi-vk10.md` kohtaan Tehtävät, jotka annettiin."
        },
        "10-2": {
          miksi: "Palaute, joka kerätään ennen kuin on myöhäistä muuttaa, on halvinta. Testaajan omat sanat ovat havaintoja, sinun tulkintasi ei ole.",
          osat: [
            ["Anna osoite ja tehtävät", "Anna nimetylle ulkopuoliselle julkinen osoite ja paperiset tehtävät. Hän esittää asiakasta, eikä hän ole oma ohjaava opettajasi."],
            ["Älä auta", "Älä selitä kesken kokeilun. Jokainen kysymys on sovelluksen puute, ei katselmoijan vika. Kirjaa kysymykset, joihin et vastannut."],
            ["Kirjaa sitaatit", "Kirjoita katselmoijan sanat sanatarkasti sitaatteina sitä mukaa kuin hän puhuu. Merkitse puhujaksi rooli, esimerkiksi asiakkaan edustaja, älä nimeä."],
            ["Kirjaa pysähdykset", "Kirjaa, mihin hän pysähtyi ja kuinka kauan kukin tehtävä kesti."]
          ],
          valmis: "Muistiinpanoissa ovat katselmoijan rooli, ajankohta, vähintään viisi sanatarkkaa sitaattia ja tehtävien kestot.",
          tallenna: "Sitaatit ja kestot heti tiedostoon `project-docs/katselmointi-vk10.md` roolilla merkittyinä. Jos ohjaaja tarvitsee katselmoijan nimen, lähetä se hänelle Teamsissa."
        },
        "10-3": {
          miksi: "Sitaatti ja tulkinta erikseen ovat asiakaslähtöisen viestinnän työnäyte. Rajattu muutos mahtuu työviikkoon 11 vuosivalinnan rinnalle.",
          osat: [
            ["Kirjoita sitaatit ensin", "Kirjoita muistioon ensin sitaatit numeroituina. Kirjoita sitten oma tulkinta ja päätökset erillisiin kappaleisiin, jotka alkavat sanalla ”Tulkinta:”."],
            ["Tee muutoksista issuet", "Tee jokaisesta muutosehdotuksesta GitHub-issue ja anna sille P-luokka: pakollinen (P0), tärkeä (P1) tai valinnainen (P2)."],
            ["Rajaa ohjaajan kanssa", "Valitse viikkopalaverissa ohjaajan kanssa tärkein muutos ja rajaa se enintään kahden päivän työksi. Suurempi muutos jaetaan, ja loppu on P1."],
            ["Tarkista tilatiedosto", "Tarkista, koskeeko valittu muutos tiedostoa `useLocations.ts`. Se ratkaisee, syntyykö työviikolla 11 konflikti vai tarvitaanko ohjaajan varapolkua."],
            ["Päivitä rajaus", "Päivitä suunnitelman Rajaus-kenttä, jos katselmointi muutti sitä, mitä ei toteuteta."]
          ],
          valmis: "Muistiossa ovat rooli, ajankohta, vähintään viisi sitaattia ja tulkinta erillään, muutokset ovat issueina P-luokkineen, ja tärkein muutos on rajattu enintään kahteen päivään.",
          tallenna: "`project-docs/katselmointi-vk10.md` commitilla. Valittu muutos ja sen perustelu työviikon 10 päiväkirjaan.",
          sanat: ["P0", "P1", "P2", "viikkopalaveri"]
        }
      },
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
      feature: "Käyttäjä valitsee vuoden, esimerkiksi karkausvuoden 2028, ja kaikki paikat päivittyvät, ja katselmoinnin tärkein muutos näkyy julkaistussa versiossa.",
      excerpt: "Vuoden pitää olla valittavissa, koska teemme tarjoukset seuraavalle talvelle jo edellisenä keväänä, ja karkausvuoden pitää toimia oikein.",
      connection: "Työviikon 10 katselmointi antoi tärkeimmän muutoksen, ja toimeksiannon vuosivalinta on vielä tekemättä. Molemmat muuttavat työviikolla 7 tehtyä useLocations-tilaa, joten kaksi samasta kohdasta alkavaa haaraa törmää tarkoituksella. Kun konflikti on ratkaistu, sovelluksessa ovat kaikki toiminnot, ja vaiheen 4 muut viikot tekevät niistä käytettäviä ja luotettavia.",
      deliverable: "YearSelect-komponentti, vuoden tila useLocations-hookissa, T14:n tulos, palautemuutos, kaksi pull requestia, konfliktin ratkaisun commit ja muutokset tuotannossa.",
      why: "Merge-konflikti on Git-taidon kohta, jonka moni oppii vasta työelämässä paniikissa. Tässä se tehdään tarkoituksella pienessä mittakaavassa: kaksi haaraa, yksi tiedosto, ohjaaja vierellä. Vuosivalinta tehdään ensin, koska se on toimeksiannon P0 ja palautemuutoksen koko on epävarma.",
      done: "Kaksi pull requestia on yhdistetty; konfliktin ratkaisun commit näkyy historiassa; T14: vuosi 2028 näyttää tuotannossa 366 pistettä ja 2027 365; katselmointimuistion päätös on kuitattu linkillä; jos konfliktia ei syntynyt, ohjaajan commit ja sen ratkaisu on kirjattu.",
      record: "Kirjoita työviikon 11 merkintään: molempien haarojen nimet ja pull requestit, mikä konflikti syntyi ja miten ratkaisit sen (mitä valitsit ja miksi), T14:n tulos ja mikä palautemuutos toteutettiin.",
      skills: ["Git-haarat ja konfliktin ratkaisu", "tilan laajentaminen hookissa", "uudelleenhaku", "pull request -kuvaus"],
      termit: ["merge-konflikti"],
      tehtavat: {
        "11-1": {
          miksi: "Merge-konflikti syntyy vain, jos molemmat haarat alkavat samasta kohdasta ja muuttavat samaa tiedostoa. Harjoittelet sen nyt pienessä mittakaavassa ohjaaja vierelläsi.",
          osat: [
            ["Päivitä main", "Siirry `main`-haaraan ja hae uusin versio komennoilla `git switch main` ja `git pull`."],
            ["Luo vuosivalinnan haara", "Luo haara komennolla `git switch -c feature/vuosivalinta`."],
            ["Luo palautteen haara", "Palaa `main`-haaraan ja luo samasta commitista toinen haara, esimerkiksi `feature/palaute-31`. Numero on katselmoinnin issuen numero."],
            ["Tarkista lähtökohta", "Aja `git log --oneline --graph --all` ja tarkista, että molemmat haarat alkavat samasta commitista. Myöhemmin luotu haara ei tuottaisi konfliktia."]
          ],
          valmis: "Molemmat haarat on luotu maanantaina, ja `git log --graph` näyttää niiden alkavan samasta `main`-commitista.",
          tallenna: "Haarojen nimet ja lähtöcommitin tunnus työviikon 11 päiväkirjaan.",
          sanat: ["ominaisuushaara", "merge-konflikti"],
          apu: {
            otsikko: "Havainnekuva: miksi molemmat haarat luodaan maanantaina",
            images: [
              ["assets/haarat-ja-konflikti.svg", "Havainnekuva kahdesta haarasta. Main-haarasta lähtee maanantaina samasta commitista kaksi haaraa: feature/vuosivalinta ja feature/palaute-31. Vuosivalinta yhdistetään ensin pull requestilla 1. Kun palautehaara yhdistetään pull requestilla 2, Git pysähtyy konfliktiin, koska molemmat haarat muuttivat tiedostoa useLocations.ts. Ratkaisu tehdään käsin omaksi commitiksi. Jos palautehaara luotaisiin vasta pull requestin 1 jälkeen, siinä olisi jo vuosivalinta, eikä konfliktia syntyisi.", "Havainnekuva haarojen järjestyksestä ja konfliktin synnystä. Haarojen nimet ovat esimerkkejä."]
            ]
          }
        },
        "11-2": {
          miksi: "Vuosivalinta on toimeksiannon vaatimus, koska tarjoukset tehdään seuraavalle talvelle jo keväällä. Se tehdään ensin, koska palautemuutoksen koko on epävarma.",
          osat: [
            ["Lisää vuosi tilaan", "Lisää vuosi `useLocations`-hookin tilaan. Vuoden vaihto hakee kaikkien paikkojen datan uudelleen `api.ts`:n kautta ja näyttää lataustilan."],
            ["Rakenna YearSelect", "Rakenna `YearSelect`-komponentti: select-elementti ja siihen kytketty label."],
            ["Kirjaa T14", "Kirjaa testitapaus T14 ennen ajoa: vuosi 2028 → jokaisella sarjalla 366 pistettä, vuosi 2027 → 365 pistettä."],
            ["Yhdistä pull request", "Avaa pull request vuosivalinnasta, katselmoi se itse, yhdistä `main`-haaraan ja julkaise."],
            ["Aja T14 tuotannossa", "Aja T14 julkaistussa versiossa ja kirjaa tulos."]
          ],
          valmis: "Julkaistussa versiossa vuosi 2028 näyttää jokaisella sarjalla 366 pistettä ja vuosi 2027 365 pistettä, ja vuosivalinnan pull request on yhdistetty.",
          tallenna: "T14:n tulos ja pull requestin linkki työviikon 11 päiväkirjaan.",
          sanat: ["pull request", "hook"]
        },
        "11-3": {
          miksi: "Ominaisuuden liittäminen olemassa olevaan versioon hallitusti on oma vaatimuksensa. Moni oppii konfliktin ratkaisun vasta työelämässä kiireen keskellä.",
          osat: [
            ["Toteuta muutos", "Toteuta työviikolla 10 rajattu muutos maanantaina luodussa toisessa haarassa. Älä ohjaa muutosta väkisin tiedostoon `useLocations.ts`."],
            ["Avaa pull request", "Avaa pull request. Git ilmoittaa merge-konfliktista, jos molemmat haarat ovat muuttaneet samaa kohtaa tiedostossa `useLocations.ts`."],
            ["Tarkista konflikti", "Jos konfliktia ei synny, pyydä ohjaajaa tekemään sovittu pieni commit `main`-haaraan ja yhdistä se haaraasi. Kirjaa tämä päiväkirjaan."],
            ["Ratkaise rivi riviltä", "Lue molemmat versiot merkkien `<<<<<<<` ja `>>>>>>>` välistä ja päätä rivi riviltä, mikä jää. Yleensä molemmat muutokset säilyvät."],
            ["Testaa ennen commitia", "Aja `npm test` ja käynnistä sovellus. Tee ratkaisusta commit, jonka viesti kertoo, mitä valitsit."],
            ["Yhdistä ja kuittaa", "Yhdistä toinen pull request, julkaise ja kuittaa katselmointimuistion päätös linkillä. Käy ratkaisu läpi ohjaajan kanssa viikkopalaverissa."]
          ],
          valmis: "Toinen pull request on yhdistetty, konfliktin ratkaisun commit näkyy historiassa, ja katselmointimuistion päätös on kuitattu linkillä.",
          tallenna: "Konfliktin sisältö ja ratkaisun perustelu työviikon 11 päiväkirjaan. Linkki muutokseen katselmointimuistioon.",
          sanat: ["merge-konflikti", "pull request"]
        }
      },
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
      feature: "Matkailija käyttää sovellusta puhelimella ilman vaakasuuntaista rullausta, ja valitun päivän arvot saa luettua myös pelkällä näppäimistöllä.",
      excerpt: "Se toimii myös puhelimella.",
      connection: "Työviikon 11 jälkeen sovelluksessa ovat kaikki toiminnot, ja nyt teet niistä käytettäviä puhelimella ja näppäimistöllä. Toimeksianto vaatii, että sovellus toimii puhelimella, ja työviikolla 8 kirjattu näppäimistörajoite saa nyt ratkaisunsa. Lighthouse-mittaus ennen ja jälkeen osoittaa korjausten vaikutuksen, ennen kuin työviikolla 13 arvioit tietoturvan.",
      deliverable: "Kuvakaappaukset omalta puhelimelta ennen ja jälkeen, Tailwindin taitekohtien korjaukset, kiertoreitin komponentti (datataulukko tai päivävalitsin), Lighthouse-raportit ennen ja jälkeen.",
      why: "Kaavio, joka on 1 200 pikseliä leveä, on puhelimella lukukelvoton, ja tooltip, joka aukeaa vain hiirellä, sulkee näppäimistökäyttäjät ulos. Lighthouse antaa ennen ja jälkeen -luvut, joita ei voi keksiä.",
      done: "Sovellus toimii oikealla puhelimella ilman vaakasuuntaista rullausta; jokainen lomakkeen kenttä on saavutettavissa Tab-näppäimellä ja sillä on label; kiertoreitti näyttää valitun päivän arvot kaikille paikoille ilman hiirtä; Lighthouse-saavutettavuuspisteet ennen ja jälkeen on kirjattu ja jälkeen-luku on korkeampi tai syy on selitetty.",
      record: "Kirjoita työviikon 12 merkintään: mitä puhelimella meni rikki ja miten korjasit, mikä kiertoreitti toteutettiin, Lighthouse-luvut ennen ja jälkeen ja mitkä korjaukset nostivat lukua.",
      skills: ["responsiivinen asettelu Tailwindilla", "näppäinkäyttö ja label-kytkennät", "Lighthouse-mittaus", "kirjaston rajoitteen kiertäminen"],
      termit: ["Lighthouse"],
      tehtavat: {
        "12-1": {
          miksi: "Matkailija katsoo kuvaa usein puhelimella. Mittaus ennen korjauksia antaa luvut, joihin jälkeen-mittausta verrataan.",
          osat: [
            ["Aja Lighthouse ennen", "Aja Lighthouse julkaistulle versiolle: Chromen kehittäjätyökalut → Lighthouse → Accessibility. Tallenna raportti HTML:nä nimellä `lighthouse-ennen.html`."],
            ["Kuvaa puhelimella", "Avaa sovellus omalla puhelimella ja ota kuvakaappaukset. Kirjaa jokainen ongelma, ennen kuin korjaat mitään."],
            ["Korjaa taitekohdilla", "Luo haara ja korjaa asettelu Tailwindin taitekohdilla `sm:` ja `md:`: kapealla näytöllä lomake ja lista allekkain, kaavio koko leveydellä."],
            ["Testaa oikealla laitteella", "Testaa korjaus oikealla puhelimella, ei vain selaimen kapealla ikkunalla. Vaakasuuntaista rullausta ei saa olla. Ota jälkeen-kuvakaappaus."]
          ],
          valmis: "Sovellus toimii oikealla puhelimella ilman vaakasuuntaista rullausta, ja ennen- ja jälkeen-kuvakaappaukset sekä Lighthouse-raportti ennen korjauksia ovat tallessa.",
          tallenna: "Raportti ja kuvakaappaukset kansioon `project-docs/saavutettavuus/`. Puhelimella rikki menneet kohdat työviikon 12 päiväkirjaan.",
          sanat: ["Lighthouse"]
        },
        "12-2": {
          miksi: "Tooltip, joka aukeaa vain hiirellä, sulkee näppäimistön käyttäjät ulos. Työviikolla 8 kirjattu rajoite saa nyt ratkaisunsa.",
          osat: [
            ["Rakenna kiertoreitti", "Toteuta työviikolla 8 valittu kiertoreitti: päivävalitsin tai tiivistetty datataulukko, joka näyttää valitun päivän arvot kaikille paikoille `format.ts`:n muodossa."],
            ["Testaa ilman hiirtä", "Lisää Utsjoki, vaihda vuosi ja lue 15. tammikuuta arvo pelkällä näppäimistöllä."],
            ["Käy läpi Tab-järjestys", "Kulje sovellus läpi Tab-näppäimellä. Järjestyksen pitää olla looginen, ja kohdistuksen pitää näkyä joka kohdassa."],
            ["Tarkista labelit ja napit", "Tarkista, että jokaisella kentällä on kytketty label ja jokaisella napilla kuvaava teksti."],
            ["Tarkista kontrasti ja otsikot", "Tarkista, että tekstin kontrasti on vähintään 4,5:1 ja että sivulla on yksi h1 ja sen alla h2-otsikot."]
          ],
          valmis: "Kiertoreitti näyttää valitun päivän arvot kaikille paikoille ilman hiirtä, ja jokainen kenttä on saavutettavissa Tab-näppäimellä ja sillä on label.",
          tallenna: "Kiertoreitin komponentti commitilla haaraan. Toteutettu kiertoreitti työviikon 12 päiväkirjaan."
        },
        "12-3": {
          miksi: "Ennen ja jälkeen -luvut osoittavat, mitä korjaukset saivat aikaan. Niitä ei voi keksiä jälkikäteen.",
          osat: [
            ["Aja Lighthouse jälkeen", "Aja Lighthouse korjatulle versiolle samalla tavalla ja tallenna raportti nimellä `lighthouse-jalkeen.html`."],
            ["Vertaa lukuja", "Vertaa saavutettavuuspisteitä. Jos jälkeen-luku ei ole korkeampi, kirjaa syy."],
            ["Kirjaa korjaukset", "Kirjaa, mitkä korjaukset nostivat lukua, esimerkiksi label-kytkennät, kontrasti tai näkyvä kohdistus."],
            ["Yhdistä ja julkaise", "Avaa pull request, katselmoi se itse, yhdistä ja julkaise. Käy luvut läpi ohjaajan kanssa viikkopalaverissa."]
          ],
          valmis: "Lighthouse-saavutettavuuspisteet ennen ja jälkeen on kirjattu, ja jälkeen-luku on korkeampi tai syy on selitetty.",
          tallenna: "`lighthouse-jalkeen.html` kansioon `project-docs/saavutettavuus/`. Luvut ennen ja jälkeen työviikon 12 päiväkirjaan.",
          sanat: ["pull request"]
        }
      },
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
      example: "Päiväkirja: ”Lighthouse-saavutettavuus 71 → 96. Korjaukset: label-kytkennät (3), kontrasti listan harmaassa tekstissä, näkyvä kohdistus napeille. Puhelimella kaavio vuoti oikealle 40 px: korjattu w-full ja ResponsiveContainer. Päivävalitsin toteutettu: näyttää 15.1.2026 Utsjoki 0 min, Helsinki 6 h 37 min.”",
      notEnough: "”Testasin puhelimella ja toimii” ilman kuvakaappauksia, tai Lighthouse ajettu vain jälkeen, tai kiertoreitti jätetty pois koska ”kirjasto ei tue”."
    },

    13: {
      type: "laatu",
      feature: "Väärä syöte, script-tagi paikan nimenä tai tuntematon paikka ei kaada sovellusta, ja jokainen testattu uhka on kirjattu uhkalistaan.",
      excerpt: "Jos nimi kirjoitetaan väärin tai sitä ei tunneta, sovelluksen pitää sanoa se selvästi eikä jäädä tyhjäksi.",
      connection: "Sovellus on julkinen, joten kuka tahansa voi lähettää sille mitä tahansa. Työviikon 5 validointi ja työviikon 7 lomake joutuvat nyt koetukselle oman uhkalistan kautta, ja yhden paikan virhe erotetaan muista. Korjattu sovellus on valmis työviikon 14 testiraporttiin.",
      deliverable: "project-docs/tietoturva-arvio.md: uhkalista (uhka, testi, tulos, toimenpide), syötetaulukko T15 curlilla ajettuna, XSS-testin kuvakaappaus, Promise.allSettled-käsittely yhden paikan virheelle, korjauscommitit.",
      why: "Tietoturvan arviointi on oma vaatimuksensa, ja arviointi tarkoittaa omaa uhkalistaa, ei kopioitua yleislistaa. year=999999 voi ajaa palvelimen laskemaan miljoonia päiviä; paikan nimi <script> voi suorittaa koodia, jos se sijoitetaan väärin. Molemmat testataan omalla sovelluksella.",
      done: "Uhkalistassa on 5–8 riviä omasta sovelluksesta muodossa uhka → testi → tulos → toimenpide; T15:n syötetaulukko on ajettu curlilla ja jokainen rivi, jolla saatu poikkesi odotetusta, on korjattu tai issueina; XSS-testi näyttää nimen tekstinä; tuntematon paikka listassa ei kaada muita sarjoja; git log ja tiedostot eivät sisällä avaimia tai salasanoja.",
      record: "Kirjoita työviikon 13 merkintään: uhkalistan rivit ja mitkä niistä paljastivat korjattavaa, T15:n poikkeamat, XSS-testin tulos ja se, miten yhden paikan virhe nyt käsitellään.",
      skills: ["tietoturvan arviointi omalla uhkalistalla", "syötteiden rajaaminen", "XSS-testaus", "virheenkäsittely rinnakkaisissa hauissa"],
      termit: ["XSS", "CORS"],
      tehtavat: {
        "13-1": {
          miksi: "Julkiselle sovellukselle voi lähettää mitä tahansa. Oma uhkalista pakottaa ajattelemaan juuri tätä sovellusta, ei yleistä listaa.",
          osat: [
            ["Kirjoita uhkat", "Kirjoita tiedostoon `project-docs/tietoturva-arvio.md` 5–8 riviä siitä, mikä voi mennä pieleen juuri Valokaaressa, esimerkiksi ylipitkä vuosi, script-tagi paikan nimenä tai ylipitkä nimi."],
            ["Lisää ympäristön uhkat", "Lisää tarvittaessa rivit ulkoisen geokoodauspalvelun katkokselle, salaisuuksille repossa ja CORS-asetukselle, jos sovellus ja rajapinta ovat eri osoitteissa."],
            ["Kirjaa testit ennen ajoa", "Kirjoita jokaiselle riville testi ja odotettu tulos ennen ajoa. Testitapaus T15 on näistä syötteistä koottu taulukko."],
            ["Aja T15 curlilla", "Aja syötteet: tyhjä `city`, 200 merkin `city`, `year=1800`, `year=abc`, `year=999999` ja `city=<script>alert(1)</script>`. Kirjaa HTTP-koodi ja vastaus."],
            ["Vertaa odotettuun", "Merkitse jokaiselle riville, poikkeaako saatu tulos odotetusta."]
          ],
          valmis: "Uhkalistassa on 5–8 riviä muodossa uhka → testi → tulos → toimenpide, ja T15:n jokaisella syötteellä on kirjattu saatu vastaus.",
          tallenna: "`project-docs/tietoturva-arvio.md` commitilla. T15:n poikkeamat työviikon 13 päiväkirjaan.",
          sanat: ["curl", "CORS"]
        },
        "13-2": {
          miksi: "Jos paikan nimi sijoitetaan sivulle väärin, selain voi suorittaa sen koodina. Testi tehdään omalla sovelluksella, ei oletuksella.",
          osat: [
            ["Lisää vaarallinen nimi", "Lisää lomakkeella paikka nimellä `<script>alert(1)</script>`."],
            ["Tarkista vastaus", "Tarkista, että rajapinta palauttaa koodin 404 ja nimi näkyy listassa ja virheilmoituksessa tekstinä. Ilmoitusikkunaa ei saa tulla."],
            ["Etsi ohitukset", "Hae koodista `dangerouslySetInnerHTML`. React suojaa tekstisisällön itse, mutta tämä ominaisuus ohittaa suojan."],
            ["Ota kuvakaappaus", "Ota kuvakaappaus, jossa nimi näkyy tekstinä, ja lisää testi uhkalistan riviksi."]
          ],
          valmis: "Nimi `<script>alert(1)</script>` näkyy listassa ja virheilmoituksessa tekstinä, eikä koodissa ole `dangerouslySetInnerHTML`-kohtaa.",
          tallenna: "XSS-testin kuvakaappaus `project-docs/`-kansioon ja tulos uhkalistaan.",
          sanat: ["XSS"]
        },
        "13-3": {
          miksi: "Yksi väärin kirjoitettu nimi ei saa tyhjentää koko kaaviota. Salaisuus julkisessa repossa on julkinen, vaikka sen poistaisi myöhemmin.",
          osat: [
            ["Erota paikkojen virheet", "Muuta `useLocations` käyttämään `Promise.allSettled`-funktiota tai käsittele jokaisen paikan virhe erikseen. Virhe näkyy listassa sen paikan kohdalla."],
            ["Testaa neljällä paikalla", "Lisää Helsinki, Rovaniemi, ”Tuntematonkylä” ja Utsjoki. Kolmen oikean paikan pitää pysyä kaaviossa."],
            ["Tarkista salaisuudet", "Hae komennon `git log --all -p` tulosteesta ja tiedostoista avaimia ja salasanoja. Varmista, ettei `.env`-tiedosto ole repossa."],
            ["Korjaa poikkeavat rivit", "Korjaa vain uhkalistan rivit, joilla saatu tulos poikkesi odotetusta. Kirjaa muut havainnot issueiksi."],
            ["Käytä jäänyt aika", "Jos aikaa jää, toteuta samannimisten paikkojen käsittely, joka on tärkeä jatko (P1). Muuten kirjaa se issueksi."],
            ["Yhdistä ja julkaise", "Avaa pull request, katselmoi se itse, yhdistä ja julkaise. Käy uhkalista läpi ohjaajan kanssa viikkopalaverissa."]
          ],
          valmis: "Väärin kirjoitettu paikka ei poista muita sarjoja, repossa ei ole avaimia eikä salasanoja, ja jokainen poikkeava uhkalistan rivi on korjattu tai issueena.",
          tallenna: "Korjauscommitit ja salaisuustarkistuksen tulos uhkalistaan. Yhden paikan virheen käsittely työviikon 13 päiväkirjaan.",
          sanat: ["P1", "pull request"]
        }
      },
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
      feature: "Yksi raportti näyttää kaikki 16 testitapausta tuloksineen, ja kaksi aitoa virhettä on korjattu ja todennettu regressiotestillä.",
      excerpt: "Se näyttää Suomen paikkakunnat oikein kaamoksesta yöttömään yöhön.",
      connection: "Testitapaukset T01–T16 on kirjattu ja ajettu työviikoilla 4–13 sitä mukaa kuin toiminnot valmistuivat. Nyt kokoat ne yhdeksi raportiksi, ajat kaiken uudelleen julkaistua versiota vasten ja kirjaat virheenkorjausketjut bug-issuelistan aidoista havainnoista. Raportti on osa aineistoa, jota ulkopuolinen testaaja ja arvioija käyttävät vaiheessa 5.",
      deliverable: "project-docs/testiraportti.md (16 tapausta: luokka, odotettu, saatu, tila, lähde, ajettava vai käsin), testiajojen tulosteet PHP:stä ja Vitestistä, kaksi täydellistä virheenkorjausketjua commit-linkein.",
      why: "Testaaminen on oma vaatimuksensa, ja virheiden etsiminen ja korjaaminen toinen. Ketju havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti on se muoto, jolla korjaus todennetaan. Regressiotesti tarkoittaa, että vanhat testit ajetaan uudelleen korjauksen jälkeen: korjaus ei saa rikkoa aiemmin toiminutta.",
      done: "Raportissa on 16 tapausta luokiteltuina (normaali 6, rajat 6, virheet 4) odotusarvoin ja lähtein; komennolla ajettavat (T01–T07, T10–T13, T15) ja käsin ajettavat selaintestit (T08, T09, T14, T16) on eroteltu; `composer test` tai `php tests/run.php` ja `npm test` menevät läpi ja tulosteet ovat repossa; kaksi ketjua on kirjattu aidoista bug-issueista täydellisinä.",
      record: "Kirjoita työviikon 14 merkintään: montako testiä meni läpi ensimmäisellä ajolla, mikä ei mennyt ja miksi, kahden ketjun havainnot ja syyt sekä se, mikä regressiotesti paljasti jotain.",
      skills: ["testiraportin kokoaminen", "ajettavat ja käsin ajettavat testit", "virheenkorjausketju", "regressiotestaus"],
      termit: ["regressiotesti"],
      tehtavat: {
        "14-1": {
          miksi: "Testaaminen on oma vaatimuksensa. Raportti näyttää yhdellä silmäyksellä, mitä on testattu, millä odotusarvolla ja miten.",
          osat: [
            ["Kokoa taulukko", "Listaa testitapaukset T01–T16 tiedostoon `project-docs/testiraportti.md`: tunnus, luokka, syöte, odotettu tulos, lähde, ajotapa, tulos ja tila."],
            ["Luokittele", "Jaa tapaukset kolmeen luokkaan: normaali käyttö (6), rajat (6) ja virhetilanteet (4)."],
            ["Hae odotusarvot kirjauksista", "Ota odotusarvot ja lähteet työviikkojen 4–13 kirjauksista, ei omasta koodista eikä muistista."],
            ["Erottele ajotavat", "Merkitse komennolla ajettavat (T01–T07, T10–T13, T15) ja käsin ajettavat selaintestit (T08, T09, T14, T16)."]
          ],
          valmis: "Raportissa on 16 testitapausta kolmessa luokassa, jokaisella on odotusarvo ja lähde, ja ajotapa on merkitty.",
          tallenna: "`project-docs/testiraportti.md` commitilla.",
          sanat: ["T01"]
        },
        "14-2": {
          miksi: "Uusintajo julkaistua versiota vasten näyttää, toimiiko aiemmin toiminut yhä. Tuloste tekstinä on työnäyte, pelkkä ”läpi” ei ole.",
          osat: [
            ["Aja PHP-testit", "Aja `composer test` tai `php tests/run.php` ja tallenna tuloste tekstinä raporttiin."],
            ["Aja Vitest-testit", "Aja `npm test` client-kansiossa ja tallenna tuloste tekstinä raporttiin."],
            ["Aja selaintestit", "Aja testitapaukset T08, T09, T14 ja T16 julkaistua versiota vasten ja ota kuvakaappaukset."],
            ["Kirjaa tilat", "Kirjaa raporttiin jokaisen testin tila. Jos jokin ei mene läpi, tee bug-issue."]
          ],
          valmis: "`composer test` tai `php tests/run.php` ja `npm test` menevät läpi, ja tulosteet ja selaintestien kuvakaappaukset ovat raportissa.",
          tallenna: "Tulosteet ja kuvakaappaukset `testiraportti.md`:hen. Ensimmäisen ajon tulos työviikon 14 päiväkirjaan.",
          sanat: ["Vitest", "bug-issue"]
        },
        "14-3": {
          miksi: "Ketju havainnosta regressiotestiin on se muoto, jolla korjaus todennetaan. Työviikon 17 kolmas ketju tehdään samalla tavalla.",
          osat: [
            ["Valitse aidot havainnot", "Valitse bug-issuelistalta työviikoilta 4–13 kaksi havaintoa, joilla on selkeä toistamisohje. Keksittyjä virheitä ei kirjata."],
            ["Tarkista lista", "Jos bug-issuelista on tyhjä, kerro ohjaajalle. Hän merkitsee vikatehtäviä, joista saat aidot havainnot."],
            ["Kirjaa ketjun alku", "Kirjaa kummastakin havainto (issue), toistamisohje askelina ja syy: mikä koodissa oli väärin ja miksi."],
            ["Kirjaa ketjun loppu", "Lisää korjauscommit linkkinä, uusintatesti (sama testi läpi) ja regressiotesti (koko testisarja läpi korjauksen jälkeen)."],
            ["Sovi koodikatselmointi", "Sovi viikkopalaverissa, että ohjaaja lukee koodisi tällä viikolla ja tuo kolme nimettyä havaintoa työviikon 15 maanantaipalaveriin."]
          ],
          valmis: "Raportissa on kaksi ketjua aidoista bug-issueista, ja kummassakin ovat kaikki kuusi osaa havainnosta regressiotestiin.",
          tallenna: "Ketjut `testiraportti.md`:hen commit-linkkeineen. Havainnot ja syyt työviikon 14 päiväkirjaan.",
          sanat: ["regressiotesti", "bug-issue"]
        }
      },
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
      feature: "Joku muu kuin sinä voi lukea koodin ja saada sovelluksen käyntiin README:n avulla, ja ohjaajan kolme havaintoa on korjattu niin, että testit menevät yhä läpi.",
      excerpt: "Mukana on ohje, jolla saan sen käyntiin kysymättä keneltäkään.",
      connection: "Sovellus toimii ja on testattu, ja nyt siitä tehdään ylläpidettävä ja dokumentoitu. Työviikolla 14 sovitun koodikatselmoinnin havainnot refaktoroidaan testien suojassa, ja README kirjoitetaan käyttäjälle. Työviikolla 16 ulkopuolinen testaaja asentaa ja käyttää sovellusta pelkän README:n avulla.",
      deliverable: "Refaktorointimuistio (kolme havaintoa, ennen ja jälkeen -diffit, perustelut, testit läpi), README käyttäjälle ja kehittäjälle, riippuvuustaulukko lisensseineen, LICENSE-tiedosto tai kirjattu avoin asia.",
      why: "Ylläpidettävä koodi on oma vaatimuksensa, ja se todennetaan parhaiten toisen ihmisen löydöksistä: koodi, jota toinen ei ymmärrä, ei ole ylläpidettävää. README testataan työviikolla 16 ulkopuolisella, joten se kirjoitetaan käyttäjälle, ei arvioijalle.",
      done: "Kolme ohjaajan nimeämää havaintoa on refaktoroitu, jokaisesta on diff-linkki, perustelu ja testiajo läpi; README sisältää käyttöönoton tyhjään ympäristöön, kehityskomennot, rajapinnan kuvauksen esimerkkivastauksella ja riippuvuustaulukon `npm ls --depth=0`- ja `composer show`-tulosteista lisensseineen; LICENSE on repossa tai suunnitelmassa on avoin asia päivämäärällä.",
      record: "Kirjoita työviikon 15 merkintään: ohjaajan kolme havaintoa ja mitä muutit, miten testit todistivat toiminnan säilyneen, README:n rakenne ja riippuvuustaulukon lisenssit sekä LICENSE-tilanne.",
      skills: ["refaktorointi testien suojassa", "koodikatselmoinnin vastaanotto", "README käyttäjälle", "riippuvuuksien ja lisenssien kirjaaminen"],
      termit: ["refaktorointi"],
      tehtavat: {
        "15-1": {
          miksi: "Ylläpidettävyys todennetaan parhaiten toisen ihmisen löydöksistä. Testit todistavat, että toiminta ei muuttunut.",
          osat: [
            ["Ota havainnot vastaan", "Kirjaa maanantain viikkopalaverissa ohjaajan kolme havaintoa: tiedosto, rivi ja mikä vaikeuttaa lukemista. Merkitse päivämäärä ja antajaksi rooli ohjaaja."],
            ["Kysy odotus", "Älä puolustele. Kysy jokaisesta havainnosta, mitä ohjaaja odotti näkevänsä."],
            ["Aja testit ennen", "Luo havainnolle oma haara ja aja testit ennen muutosta. Jos testit eivät kata kohtaa, kirjoita testi ensin."],
            ["Refaktoroi ja testaa", "Tee muutos ja aja testit uudelleen. Jos joudut muuttamaan testiä, kyse on toiminnan muutoksesta eikä refaktoroinnista."],
            ["Kirjaa muistioon", "Kirjaa tiedostoon `project-docs/refaktorointi-vk15.md` jokaisesta havainnosta diff-linkki, perustelu ja testiajon tulos ennen ja jälkeen."],
            ["Päivitä komponenttijako", "Päivitä suunnitelman Komponenttijako-kenttä, jos refaktorointi muutti komponenttien vastuita."]
          ],
          valmis: "Kaikki kolme havaintoa on refaktoroitu, ja jokaisesta on muistiossa diff-linkki, perustelu ja testiajo läpi ennen ja jälkeen.",
          tallenna: "`project-docs/refaktorointi-vk15.md` commitilla. Havainnot ja muutokset työviikon 15 päiväkirjaan.",
          sanat: ["refaktorointi", "viikkopalaveri"]
        },
        "15-2": {
          miksi: "README testataan työviikolla 16 ulkopuolisella, joten se kirjoitetaan käyttäjälle, ei arvioijalle. Testaajan pitää onnistua ilman sinua.",
          osat: [
            ["Kirjoita käyttöönotto", "Kirjoita README:hen käyttöönotto tyhjään ympäristöön numeroituina komentoina: PHP, Node, kloonaus, riippuvuudet, build, portit ja käynnistys."],
            ["Kirjoita kehittäjäosa", "Kirjoita kehittäjälle kansiorakenne, kehityskomennot ja testien ajo."],
            ["Kuvaa rajapinta", "Kuvaa `GET /api/daylight` esimerkkipyynnöllä, esimerkkivastauksella ja virhekoodeilla 400, 404 ja 502."],
            ["Aja riippuvuustulosteet", "Aja `npm ls --depth=0` client-kansiossa ja `composer show` server-kansiossa."],
            ["Kokoa riippuvuustaulukko", "Kirjoita taulukko: paketti, versio, rooli tässä projektissa ja lisenssi. Tarkista lisenssi paketin omasta tiedostosta, älä muistista. Poista riippuvuus, jolla ei ole roolia."]
          ],
          valmis: "README sisältää käyttöönoton tyhjään ympäristöön, kehityskomennot, rajapinnan kuvauksen esimerkkivastauksella ja riippuvuustaulukon lisensseineen tulosteista.",
          tallenna: "`README.md` commitilla. README:n rakenne ja riippuvuuksien lisenssit työviikon 15 päiväkirjaan.",
          sanat: ["build"]
        },
        "15-3": {
          miksi: "Lisenssi on ohjaajan kanssa sovittava asia. Ilman sitä kukaan ei tiedä, saako koodia käyttää.",
          osat: [
            ["Tarkista päätös", "Tarkista suunnitelman Lisenssi-kentästä, onko ohjaaja päättänyt lisenssin. Päätöksen piti tulla viimeistään työviikolla 8."],
            ["Lisää tai kirjaa avoimeksi", "Jos päätös on tehty, lisää sen mukainen `LICENSE`-tiedosto. Muuten kirjaa suunnitelmaan avoin asia päivämäärällä. Älä valitse lisenssiä itse."],
            ["Yhdistä ja julkaise", "Avaa viikon muutoksista pull request, katselmoi se itse, yhdistä ja julkaise."]
          ],
          valmis: "`LICENSE` on repossa, tai suunnitelmassa on lisenssi avoimena asiana päivämäärällä.",
          tallenna: "`LICENSE` tai päivitetty `project-docs/suunnitelma.md` commitilla. LICENSE-tilanne työviikon 15 päiväkirjaan.",
          sanat: ["pull request"]
        }
      },
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
      example: "Muistio: ”Havainto 1 (ohjaaja, 15. työviikon ma): index.php:n reititys ja validointi samassa 80 rivin funktiossa → jaettu route(), validate(), respond() → composer test 7/7 ennen ja jälkeen, diff #52.” README:n käyttöönotto kahdeksana komentona, riippuvuustaulukossa 7 pakettia lisensseineen.",
      notEnough: "Refaktoroinnit, jotka valitsit itse etukäteen ja jotka olit jo tehnyt, README arvioijalle (”tässä projektissa osoitan…”), tai lisenssit kirjattu muistista."
    },

    16: {
      type: "julkaisu",
      feature: "Nimetty ulkopuolinen henkilö on saanut julkaisuehdokkaan v1.0-rc1 käyttöön pelkän README:n ja julkisen osoitteen avulla, ja hänen havaintonsa on kirjattu.",
      excerpt: "Mukana on ohje, jolla saan sen käyntiin kysymättä keneltäkään.",
      connection: "Työviikon 15 README ja siistitty koodi pannaan nyt koetukselle: ensin itse puhtaassa ympäristössä, sitten ulkopuolisen testaajan käsissä. Jäädytys estää uusien ominaisuuksien lisäämisen, ja tagilla merkitty julkaisuehdokas on se versio, jota testataan. Testaajan löytämät estävät virheet korjataan työviikolla 17 ennen v1.0:aa.",
      deliverable: "Jäädytyspäätös ja issue-luokittelu, tagilla merkitty julkaisuehdokas julkisessa osoitteessa, oma asennuspöytäkirja, korjattu README, ulkopuolisen testauspöytäkirja ja estävien issueiden lista.",
      why: "Julkaisutestaus julkaisuehdokasta vasten jättää kokonaisen viikon puskuria: mitä tahansa testaaja löytää, korjaukselle on aikaa ennen v1.0:aa. Jäädytys estää viimeisten viikkojen valumisen uusiin ominaisuuksiin.",
      done: "v1.0-rc1 on julkisessa osoitteessa ja merkitty tagilla; oma asennuspöytäkirja (toinen kone tai tyhjä kansio) ja ulkopuolisen testauspöytäkirja (nimetty rooli, ajankohta, testaajan omat sanat erillään tulkinnasta) ovat repossa; estävät virheet on kirjattu issueiksi, ei korjattu kiireellä tällä viikolla.",
      record: "Kirjoita työviikon 16 merkintään: jäädytyspäätös ja mitä jätit v1.1-listalle, oman asennuksen epäröintikohdat ja README:hen tehdyt korjaukset sekä ulkopuolisen tärkeimmät havainnot sitaatteina.",
      skills: ["sisältöjäädytys", "Git-tag ja release", "puhdas asennus ohjeella", "julkaisutestauksen järjestäminen"],
      termit: ["RC", "Git-tag"],
      tehtavat: {
        "16-1": {
          miksi: "Jäädytys estää viimeisten viikkojen valumisen uusiin ominaisuuksiin. Luokittelu kertoo, mitä on pakko korjata ennen v1.0:aa.",
          osat: [
            ["Kirjaa jäädytys", "Kirjaa päätös, ettei uusia ominaisuuksia enää lisätä. Merkitse päätös ja päivä työviikon 16 päiväkirjaan."],
            ["Luokittele issuet", "Merkitse avoin issue estäväksi, jos se rikkoo pakollisen ytimen (P0) tai estää käytön. Muut siirtyvät v1.1-listalle."],
            ["Päivitä rajaus", "Kirjaa v1.1-listalle siirretyt asiat suunnitelman Rajaus-kenttään."]
          ],
          valmis: "Jäädytyspäätös on kirjattu, ja jokainen avoin issue on merkitty estäväksi tai v1.1-listalle.",
          tallenna: "Luokittelu issueiden tunnisteina GitHubissa. Jäädytyspäätös ja v1.1-lista työviikon 16 päiväkirjaan.",
          sanat: ["P0"]
        },
        "16-2": {
          miksi: "Julkaisuehdokas on versio, josta voi tulla v1.0, jos testaaja ei löydä estäviä virheitä. Tag kiinnittää testattavan version.",
          osat: [
            ["Julkaise main", "Julkaise nykyinen `main` ja tarkista, että build syntyy alustalla puhtaasta haarasta."],
            ["Luo tag", "Merkitse versio Git-tagilla `v1.0-rc1` (rc tulee sanoista release candidate eli julkaisuehdokas): `git tag -a v1.0-rc1 -m \"Julkaisuehdokas 1\"`."],
            ["Vie tag", "Vie tag etärepositoryyn komennolla `git push origin v1.0-rc1`."],
            ["Tee release", "Tee tagista GitHub-release, jonka kuvaus kertoo, mitä versio sisältää."],
            ["Kokeile julkista osoitetta", "Avaa julkinen osoite ja kokeile paikan lisäystä, tooltipia ja vuosivalintaa."]
          ],
          valmis: "`v1.0-rc1` on julkisessa osoitteessa, tag on etärepositoryssa, ja releasella on sisältökuvaus.",
          tallenna: "Tag ja release GitHubissa. Releasen linkki työviikon 16 päiväkirjaan.",
          sanat: ["RC", "Git-tag", "build"]
        },
        "16-3": {
          miksi: "Oma koneesi muistaa asioita, joita README ei kerro. Puhdas asennus paljastaa ne, ennen kuin ulkopuolinen testaaja kohtaa ne.",
          osat: [
            ["Valitse puhdas ympäristö", "Käytä toista konetta, uutta käyttäjää tai tyhjää kansiota ilman `node_modules`- ja `vendor`-kansioita."],
            ["Asenna ohjeen mukaan", "Asenna pelkän README:n avulla: PHP, Node, kloonaus, riippuvuudet, build ja käynnistys."],
            ["Pidä pöytäkirjaa", "Kirjaa tiedostoon `project-docs/asennuspoytakirja-vk16.md` jokainen kohta, jossa epäröit tai jouduit muistelemaan."],
            ["Korjaa README", "Korjaa README jokaisesta pöytäkirjan kohdasta, ennen kuin annat sen kenellekään."]
          ],
          valmis: "Asennus onnistui puhtaassa ympäristössä pelkällä README:llä, ja pöytäkirjan jokainen epäröintikohta on korjattu README:hen.",
          tallenna: "`project-docs/asennuspoytakirja-vk16.md` ja korjattu `README.md` commitilla. Epäröintikohdat ja korjaukset työviikon 16 päiväkirjaan."
        },
        "16-4": {
          miksi: "Julkaisuehdokkaan testaus jättää viikon puskurin korjauksille ennen v1.0:aa. Testaajan kysymykset ovat ohjeen puutteita.",
          osat: [
            ["Kirjoita tehtävät", "Kirjoita testaajalle tehtävät: lisää Utsjoki ja Helsinki, vaihda vuodeksi 2028, lue tooltipista yksi päivä ja etsi leikkauspiste."],
            ["Anna ohje ja osoite", "Anna nimetylle ulkopuoliselle README, julkinen osoite ja tehtävät kirjallisina. Älä auta suullisesti."],
            ["Kirjaa sitaatit", "Kirjaa hänen sanansa sitaatteina roolilla merkittyinä, esimerkiksi testaaja A, ja se, kuinka kauan alkuun pääseminen kesti."],
            ["Kirjoita pöytäkirja", "Kirjoita `project-docs/julkaisutestaus-vk16.md`: testaajan rooli, ajankohta, sitaatit ja oma tulkinta erikseen."],
            ["Kirjaa estävät issueiksi", "Kirjaa estävät virheet issueiksi työviikolla 17 korjattaviksi. Älä korjaa niitä kiireellä tällä viikolla."]
          ],
          valmis: "Testauspöytäkirjassa ovat rooli, ajankohta, sitaatit ja tulkinta erillään, ja estävät virheet ovat issueina korjaamatta.",
          tallenna: "`project-docs/julkaisutestaus-vk16.md` commitilla, henkilöt rooleina. Tärkeimmät sitaatit työviikon 16 päiväkirjaan."
        }
      },
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
      feature: "Asiakas saa julkisen osoitteen, josta v1.0 toimii, ja luovutusviestin, johon hän on vastannut kysymyksellä.",
      excerpt: "Valmis tarkoittaa minulle tätä: sovellus on verkossa osoitteessa, jonka voin laittaa sivuillemme.",
      connection: "Työviikon 16 testaajan havainnot muuttuvat korjauksiksi, ja julkaisuehdokkaasta tulee v1.0. Luovutusviesti saa vastaanottajan, kun ohjaaja lukee sen asiakkaan roolissa ja kysyy yhden asiakaskysymyksen. Loppuviikko on puskuria, jota ei täytetä uusilla ominaisuuksilla, joten työviikolla 18 voit keskittyä näyttöön.",
      deliverable: "Kolmas virheenkorjausketju, regressioajo, v1.0-tag ja release, savutestin tulos, julkaisutiedote, luovutusviesti sekä asiakkaan kysymys ja vastaus.",
      why: "v1.0 ilman korjattuja estäviä virheitä on vain julkaisuehdokas uudella nimellä. Luovutusviesti ilman vastaanottajaa on kirjoitusharjoitus; kun ohjaaja vastaa kysymyksellä, se on asiakasviestintää.",
      done: "v1.0 on julkisessa osoitteessa ja merkitty tagilla; kolmas ketju on täydellisenä repossa (estävästä virheestä tai bug-listan aidosta havainnosta); regressioajo ja savutesti on kirjattu; julkaisutiedote ja luovutusviesti ovat repossa; ohjaajan asiakaskysymys ja vastauksesi on kirjattu; viikolle jäi puskuriaikaa eikä mitään uutta aloitettu.",
      record: "Kirjoita työviikon 17 merkintään: mitkä estävät korjattiin ja miten, v1.0:n tagi ja tiedotteen ydin, mitä jätit v1.1-listalle, ohjaajan asiakaskysymys ja vastauksesi.",
      skills: ["julkaisu tuotantoon", "release-käytännöt", "regressiotestaus", "asiakasviestintä"],
      termit: ["savutesti"],
      tehtavat: {
        "17-1": {
          miksi: "v1.0 ilman korjattuja estäviä virheitä on vain julkaisuehdokas uudella nimellä.",
          osat: [
            ["Valitse korjattava", "Ota työviikon 16 estävät issuet. Jos estäviä ei löytynyt, valitse kolmas ketju bug-issuelistan aidosta havainnosta. Keksittyjä virheitä ei kirjata."],
            ["Kirjaa ketjun alku", "Kirjaa havainto, toistamisohje ja syy samalla tavalla kuin työviikon 14 ketjuissa."],
            ["Korjaa ja uusintatestaa", "Tee korjaus omana commitinaan ja aja sama testi uudelleen."],
            ["Aja regressiotestit", "Aja koko testisarja (PHP ja Vitest) ja selaintestit ennen julkaisua ja kirjaa tulos."]
          ],
          valmis: "Kolmas ketju on raportissa havainnosta regressiotestiin, ja koko testisarja menee läpi korjauksen jälkeen.",
          tallenna: "Ketju `testiraportti.md`:hen commit-linkkeineen. Korjatut estävät virheet työviikon 17 päiväkirjaan.",
          sanat: ["regressiotesti", "bug-issue"]
        },
        "17-2": {
          miksi: "Tag kiinnittää version, jonka asiakas saa. Savutesti varmistaa heti julkaisun jälkeen, että tärkeimmät toiminnot toimivat oikeassa osoitteessa.",
          osat: [
            ["Luo tag", "Merkitse versio komennolla `git tag -a v1.0 -m \"Ensimmäinen tuotantoversio\"` ja vie se komennolla `git push origin v1.0`."],
            ["Tee release", "Tee tagista GitHub-release ja julkaise versio tuotantoon."],
            ["Aja savutesti", "Kokeile julkaistussa v1.0:ssa paikan lisäystä, tooltipia, vuoden vaihtoa ja leikkauspistettä."],
            ["Kirjaa tulos", "Kirjaa savutestin tulos ja julkinen osoite. Jos jokin toiminto ei toimi, tee bug-issue."]
          ],
          valmis: "v1.0 on julkisessa osoitteessa ja merkitty tagilla, ja savutestin neljä toimintoa on kirjattu toimiviksi.",
          tallenna: "Tag ja release GitHubissa. Savutestin tulos ja tiedotteen ydin työviikon 17 päiväkirjaan.",
          sanat: ["Git-tag", "savutesti"]
        },
        "17-3": {
          miksi: "Luovutusviesti ilman vastaanottajaa on kirjoitusharjoitus. Kun ohjaaja vastaa asiakkaan roolissa, se on asiakasviestintää.",
          osat: [
            ["Kirjoita julkaisutiedote", "Kirjoita `project-docs/julkaisutiedote.md`: mitä sovellus tekee, mitä testattiin, tunnetut rajoitteet ja v1.1-lista."],
            ["Kirjoita luovutusviesti", "Kirjoita `project-docs/luovutusviesti.md` asiakaskielellä: osoite, mitä kuvasta näkee, mitä sovellus ei tee ja kehen ottaa yhteyttä."],
            ["Viittaa katselmointiin", "Viittaa viestissä työviikon 10 katselmoijan sitaattiin ja kerro, mitä sen perusteella muutettiin."],
            ["Lähetä ohjaajalle", "Lähetä luovutusviesti ohjaajalle, joka toimii asiakkaan roolissa. Hän vastaa yhdellä asiakaskysymyksellä."],
            ["Vastaa asiakkaalle", "Vastaa kysymykseen asiakaskielellä ja kirjaa kysymys ja vastaus luovutusviestin perään."],
            ["Perusta näyttömatriisi", "Luo `project-docs/nayttomatriisi.md`: jokaiselle 32 vaatimukselle rivi, jossa ovat tunnus, työnäytteen linkki ja viikko. Täytä linkit, jotka jo tiedät. Viimeistelet tiedoston työviikolla 18."],
            ["Jätä puskuri", "Käytä loppuviikko korjauksiin ja tarkistuksiin. Älä aloita uusia ominaisuuksia."]
          ],
          valmis: "Julkaisutiedote ja luovutusviesti ovat repossa, ohjaajan asiakaskysymys ja vastauksesi on kirjattu, ja `nayttomatriisi.md` on perustettu.",
          tallenna: "`julkaisutiedote.md`, `luovutusviesti.md` ja `nayttomatriisi.md` kansioon `project-docs/` commitilla. Kysymys ja vastaus työviikon 17 päiväkirjaan."
        }
      },
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
      feature: "Arvioija löytää tiedoston `project-docs/nayttomatriisi.md` linkeistä työnäytteen jokaiseen 32 vaatimukseen, ja 8–10 minuutin demo on harjoiteltu.",
      connection: "Sovellus on luovutettu, joten viimeisellä viikolla ei rakenneta mitään uutta. Kokoat 17 työviikon työnäytteet niin, että arvioija löytää jokaisen, ja harjoittelet demon, joka näyttää sekä käyttäjän työnkulun että sen takana olevan koodin. Itsearviointi sidotaan ihmisiin, jotka olivat mukana: katselmoija, julkaisutestaaja ja ohjaaja.",
      deliverable: "Täsmälinkitetty näyttömatriisi (project-docs/nayttomatriisi.md), harjoiteltu demorunko, itsearviointi kolmesta tilanteesta ohjaajan vastakommentilla ja luovutettu näyttöpaketti.",
      why: "Näytössä arvioidaan se, mikä löytyy: osaaminen, jota arvioija ei löydä, ei ole arvioijalle olemassa. Oman toiminnan arviointi tiimin jäsenenä todennetaan suhteessa niihin ihmisiin, joiden kanssa työskentelit, ei yleislauseilla.",
      done: "Jokainen `nayttomatriisi.md`:n 32 rivistä osoittaa olemassa olevaan aineistoon ja linkki aukeaa; demo on ajettu kellon kanssa vähintään kerran toiselle henkilölle; itsearviointi käsittelee työviikon 10 palautteen, työviikon 16 testaajan epäröinnin ja yhden viikkopalaverin, jossa sovittu muuttui, ja ohjaaja on kirjannut lyhyen vastakommentin.",
      record: "Kirjoita työviikon 18 merkintään: mitkä matriisin kohdat olivat heikoimmin todennettuja ja miten korjasit ne, demon kesto harjoituksessa sekä itsearvioinnin ydin ja ohjaajan kommentti.",
      skills: ["näyttöaineiston kokoaminen", "esittäminen", "itsearviointi suhteessa tiimiin"],
      resources: [["Avaa näyttömatriisi", "#view-naytto", false]],
      tehtavat: {
        "18-1": {
          miksi: "Näytössä arvioidaan se, mikä löytyy. Osaaminen, jota arvioija ei löydä, ei ole hänelle olemassa.",
          osat: [
            ["Täydennä näyttömatriisi", "Täydennä `project-docs/nayttomatriisi.md`:hen jokaiselle 32 vaatimukselle tunnus, työnäytteen linkki (commit, issue, tiedosto, tagi tai kuva) ja viikko. Sama työnäyte saa olla usealla rivillä."],
            ["Avaa jokainen linkki", "Avaa jokainen linkki ja tarkista, että se osoittaa täsmälleen työnäytteeseen eikä repositoryn etusivulle. Sivun näyttömatriisin viikkomerkinnät auttavat löytämään työnäytteet."],
            ["Korjaa aukot", "Korjaa puuttuvat ja epämääräiset linkit. Älä rakenna mitään uutta: jos työnäyte puuttuu, kirjaa se rehellisesti."],
            ["Tarkista aineisto", "Tarkista, että projektipäiväkirja, AI-loki ja testiraportti ovat repossa ajan tasalla."]
          ],
          valmis: "`nayttomatriisi.md`:ssä on 32 riviä, jokainen osoittaa olemassa olevaan työnäytteeseen, ja jokainen linkki aukeaa.",
          tallenna: "`project-docs/nayttomatriisi.md` commitilla. Sivun näyttömatriisin rastit ovat oma muistilistasi. Heikoimmin todennetut kohdat työviikon 18 päiväkirjaan."
        },
        "18-2": {
          miksi: "Demo näyttää arvioijalle, että osaat perustella tekemäsi. Harjoitus toiselle ihmiselle paljastaa kohdat, jotka venyvät tai jäävät epäselviksi.",
          osat: [
            ["Kirjoita demorunko", "Kirjoita demon järjestys: paikan lisäys, tooltip, kaamos ja yötön yö Utsjoella sekä leikkauspiste Helsinki–Rovaniemi."],
            ["Lisää tekninen osa", "Jatka runkoa: Daylight-moduuli ja sen testit, yksi virheenkorjausketju, Git-historia haaroineen ja AI-lokin tarkistettu käyttö."],
            ["Harjoittele kellon kanssa", "Esitä demo kellon kanssa toiselle henkilölle ja kirjaa kesto. Tavoite on 8–10 minuuttia."],
            ["Korjaa runko", "Lyhennä tai selkeytä kohdat, joissa kuulija pysähtyi tai aika venyi."]
          ],
          valmis: "Demo on esitetty kellon kanssa vähintään kerran toiselle henkilölle, ja kesto on kirjattu.",
          tallenna: "Demorunko `project-docs/`-kansioon. Harjoituksen kesto työviikon 18 päiväkirjaan."
        },
        "18-3": {
          miksi: "Oman toiminnan arviointi tiimin jäsenenä todennetaan suhteessa ihmisiin, joiden kanssa työskentelit, ei yleislauseilla.",
          osat: [
            ["Kirjoita palautetilanne", "Kirjoita tiedostoon `project-docs/itsearviointi.md`, miten otit vastaan työviikon 10 katselmoijan palautteen ja mitä siitä seurasi."],
            ["Kirjoita testaustilanne", "Kirjoita, miten reagoit työviikon 16 testaajan epäröintiin."],
            ["Kirjoita palaveritilanne", "Kirjoita yhdestä viikkopalaverista, jossa sovittu muuttui: mitä sovittiin, mitä toteutui ja mitä tekisit toisin."],
            ["Pyydä vastakommentti", "Pyydä ohjaajalta lyhyt vastakommentti ja liitä se itsearviointiin."],
            ["Luovuta paketti", "Tarkista aineiston aukot vielä kerran toisen henkilön kanssa. Luovuta arvioijalle `nayttomatriisi.md`, projektipäiväkirja, AI-loki ja julkaistu v1.0."]
          ],
          valmis: "Itsearviointi käsittelee kolme nimettyä tilannetta, ohjaajan vastakommentti on liitetty, ja näyttöpaketti on luovutettu.",
          tallenna: "`project-docs/itsearviointi.md` commitilla, henkilöt rooleina. Itsearvioinnin ydin ja ohjaajan kommentti työviikon 18 päiväkirjaan.",
          sanat: ["viikkopalaveri"]
        }
      },
      example: "Itsearviointi: ”Työviikolla 10 katselmoija ei löytänyt lomaketta. Ensireaktioni oli selittää; kirjasin sen sitaattina ja tein issue #30:n. Työviikolla 16 testaaja pysähtyi PHP:n käynnistykseen, ja ymmärsin, että README oli kirjoitettu minulle, ei hänelle.” Ohjaajan kommentti: ”Palautteen kirjaaminen erillään tulkinnasta parani selvästi viikosta 10 viikkoon 16.”",
      notEnough: "”Opin paljon ja projekti sujui hyvin”, ilman tilanteita, rooleja ja sitä, mitä tekisit toisin, tai matriisi, jossa linkit osoittavat repon etusivulle.",
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
      "Julkiseen repositoryyn ei laiteta henkilötietoja, koulun tunnisteita eikä muiden nimiä: henkilöistä kirjataan vain rooli, ja nimet lähetetään tarvittaessa ohjaajalle Teamsissa. Tekijänimestä sovitaan ohjaajan kanssa."
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
        ["Ohjaaja / opettaja", "Toimii asiakkaan sijaisena: vastaanottaa kysymyslistan ja viikkopalaverien tilannekatsaukset ja tekee rajaus- ja priorisointipäätökset, valitsee ja kokeilee julkaisualustan ennen työviikkoa 1, pitää viikkopalaverit (10 min, voi olla 3–4 opiskelijan ryhmäkierros), tarjoaa kuntaluettelon varapolkuna työviikolle 5, tekee koodikatselmoinnin työviikolla 14, vastaa asiakaskysymyksellä työviikolla 17, kirjoittaa vastakommentin itsearviointiin työviikolla 18 ja päättää ohjaajalle kuuluvat asiat (lisenssi, repositoryn julkisuus, katselmoijien nimeäminen, perusteversio, arvioinnin järjestelyt)."],
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
        [18, "Näyttöaineisto", "project-docs/nayttomatriisi.md täsmälinkitettynä 32 vaatimukseen (perustettu työviikolla 17), demo harjoiteltuna, itsearviointi kolmesta tilanteesta ohjaajan vastakommentilla."]
      ],
      tyonaytteet: {
        p1: ["1", "VS Code, Viten kehityspalvelin, PHP:n sisäänrakennettu palvelin ja selaimen kehittäjätyökalut käytössä: versiotaulukko, kuvakaappaukset ja käynnistyskomennot README:ssä"],
        p2: ["14, 17 (bug-issuet 4→)", "Kolme täydellistä virheenkorjausketjua: havainto → toisto → syy → korjauscommit → uusintatesti → regressiotesti; raaka-aine bug-issuelistalta"],
        p3: ["14 (kirjaus ja ajot 4, 5, 7, 8, 9, 11, 13)", "Testiraportti: 16 testitapausta odotusarvoineen ennen ajoa; ajettavat PHP- ja Vitest-testit sekä käsin ajettavat selaintestit eroteltuina"],
        p4: ["4 (täydentyy 8–9)", "Päivänvalolaskenta omana PHP-moduulina (funktiot, ehdot, rajatarkistus, karkausvuosi); muotoilu- ja leikkauspistemoduulit TypeScriptillä"],
        p5: ["15", "Kolme refaktorointia ohjaajan koodikatselmoinnin nimetyistä havainnoista, ennen/jälkeen-diffit, perustelut, testit läpi"],
        p6: ["7 (rautalangat 2, täydentyy 12)", "Lomake, paikkalista ja kaavionäkymä rakennettu itse rautalankojen mukaan Tailwindilla; mobiili ja saavutettavuus"],
        p7: ["7, 11 (alku 5)", "Paikan lisäys, poisto, duplikaatin esto ja vuosivalinta käyttäjätarinoiden ja hyväksymiskriteerien mukaan; issue → commit -ketju"],
        p8: ["2→17", "Viikkopalaveri ohjaajan kanssa: sovitut tehtävät, arviot ja toteuma issueihin, päivä ja roolit päiväkirjassa"],
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
        arviointiin: "Projektipäiväkirja, AI-loki, tekninen suunnitelma ja rajapintasopimus, vertailutaulukot (työviikko 2), selvitystaulukko (3), katselmointimuistio (10), tietoturva-arvio (13), testiraportti ja virheenkorjausketjut (14), refaktorointimuistio (15), asennus- ja julkaisutestauspöytäkirjat (16), julkaisutiedote ja luovutusviesti kysymyksineen (17) sekä täsmälinkitetty näyttömatriisi project-docs/nayttomatriisi.md ja itsearviointi (18).",
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
        ["Näyttöaineisto", "Täsmälinkitetty näyttömatriisi project-docs/nayttomatriisi.md 32 vaatimukselle, demorunko ja itsearviointi ohjaajan vastakommentilla."]
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
