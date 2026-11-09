/*
 * ProtoPaja – ohjattu näyttöprojekti, yksilöprojekti, 18 työviikkoa, päivätön tila.
 *
 * Tämä tiedosto on projektin ainoa sisältötiedosto JavaScriptin puolella.
 * app.js on geneerinen moottori eikä sisällä projektikohtaista tekstiä.
 *
 * Päivätön tila: viikot ovat järjestysnumeroita 1–18 opiskelijan omasta aloituksesta,
 * eivät kalenteriviikkoja. Sivustolla ei ole yhtään kalenteripäivämäärää.
 *
 * Yksilöprojekti: opiskelija tekee kaikki kolme peliä ja niiden kaikki osat itse.
 * Sivuston rastit, päiväkirja, suunnitelma ja AI-loki tallentuvat opiskelijan omaan
 * selaimeen, eivätkä ohjaajat näe niitä. Työnäytteet ovat opiskelijan omassa repositoryssa.
 * Tiimi = ohjaaja ja asiakkaat; toinen opiskelija tekee vertaisarvion työviikolla 9.
 *
 * Kielisääntö: sinä-muoto ja yksikön imperatiivi kaikkialla (Tee, Kirjoita, Testaa).
 *
 * Viikkokorttien staattinen osio "Tältä valmis tulos näyttää" (index.html) toistaa
 * viikon done-tekstin kohdassa "Viikon lopussa kokeilet". Jos muutat done-tekstiä,
 * muuta sama teksti myös index.html:n viikkokorttiin.
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "protopaja",
  nimi: "ProtoPaja",
  vuosi: 2026,
  paivaton: true,
  viikot: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  yhtenaisetViikot: true,
  tiivisSivupalkki: true,
  aloitusNappi: "Aloita ProtoPajan teko",
  apuOtsikko: "Tarvitsen toteutusapua",

  /* ---- projektin tavoitekuva (moottori v2.6) ----
   * Kuva on luonnos: project-docs/lopputulos/proto.html kuvattuna 2x-tarkkuudella.
   * Se ei ole kuvakaappaus opiskelijoiden peleistä. alue = [x, y, leveys, korkeus] prosentteina.
   */
  lopputulos: {
    otsikko: "Luonnos: tältä valmis kokonaisuus voi näyttää",
    kuvaus: "ProtoPajassa teet pelimusiikin kurssille kolme pientä peliä, joihin kurssin opiskelijat lisäävät itse musiikit ja ääniefektit. Jokaisessa pelissä on alkuvalikko, yksi selkeä päämekaniikka, 1–3 minuutin kierros, uudelleenaloitus ja paluu alkuvalikkoon. Pelin pitää olla ymmärrettävä myös ilman ääniä.",
    naytaKuvaus: false,
    kuva: "assets/lopputulos.jpg",
    leveys: 1120,
    korkeus: 700,
    alt: "Luonnoskuva, ei kuvakaappaus valmiista peleistä. Vierekkäin on kolme pientä pelinäkymää. Tasohyppelyssä hahmo hyppää piikkien yli kohti maalilippua, ja yläreunassa lukee Kerätty 3 / 5. Pulmapelissä kaksi laatikkoa on siirretty tavoiteruutuihin ja kolmas on vielä matkalla. Toimintapelissä pelaaja on areenan keskellä vihollisten ympäröimänä, ja ajastin näyttää 0:42. Jokaisen näkymän alla ovat painikkeet Uudelleen ja Alkuvalikkoon. Alareunassa on ote jatkotyöstöohjeesta: miten projekti avataan ja missä kansioissa scenet, skriptit ja asetukset ovat.",
    kohdat: [
      { n: 1, teksti: "Tasohyppely: hahmo hyppii esteiden yli, kerää esineet ja pääsee maaliin.", alue: [2.2, 15.5, 31.2, 56.5] },
      { n: 2, teksti: "Pulmapeli: laatikot siirretään tavoiteruutuihin, ja alkutilanteen voi palauttaa.", alue: [34.4, 15.5, 31.2, 56.5] },
      { n: 3, teksti: "Toimintapeli: pelaaja selviää areenalla 60 sekuntia yhtä vihollistyyppiä vastaan.", alue: [66.6, 15.5, 31.2, 56.5] },
      { n: 4, teksti: "Jokaisessa pelissä on selkeä loppu, uudelleenaloitus ja paluu alkuvalikkoon.", alue: [2.2, 72.5, 95.6, 7.5] },
      { n: 5, teksti: "Jatkotyöstöohjeesta musiikkikurssin opiskelija näkee, miten projekti avataan ja mistä scenet ja skriptit löytyvät.", alue: [2.2, 82.0, 95.6, 15.5] }
    ]
  },

  paletti: {
    aksentti: "#be185d",
    aksenttiTumma: "#9d174d",
    taulukkoSavy: "#fce7f3",
    riviSavy: "#fdf2f8"
  },

  /* ---- vaiheet (moottori v2.7: numeroidut vaiheet) ----
   * vari = styles.css:n --phase-a … --phase-e (vaihe 1 = a). */
  vaiheet: [
    { tunnus: "1", lyhyt: "Aloitus", otsikko: "Aloitus ja suunnitelma", kuvaus: "Asennat Unityn, teet oman repositoryn ja kokeilet, että osaat tallentaa muutoksesi versionhallintaan. Suunnittelet kolme peliä ja käyt suunnitelman läpi ohjaajan ja asiakkaiden kanssa. Lopuksi teet ensimmäisen kokeiluversion, jota voi pelata ilman Unityä. Teet teknisen pohjan ensin, koska alustan ongelmat on helpompi korjata nyt, kun pelissä on vielä vähän koodia.", kuvassa: ["Oma repository → suunnitelma → kokeiluversio", "Unity ja versionhallinta toimivat ennen ensimmäistä peliä."], viikot: [1, 2, 3], vari: "#8d5a2b" },
    { tunnus: "2", lyhyt: "Ensimmäinen peli", otsikko: "Ensimmäinen kokonainen prototyyppi", kuvaus: "Rakennat ensimmäiseen peliin kokonaisen kierroksen, alkuvalikon, uudelleenaloituksen ja visuaalisen palautteen. Asiakkaat kokeilevat peliä työviikolla 6. Käytät heidän palautettaan, kun teet kaksi seuraavaa peliä.", kuvassa: ["Pelattava kierros → valikot ja palaute → asiakaskokeilu", "Yksi peli valmiina ennen kuin seuraava alkaa."], viikot: [4, 5, 6], vari: "#2f6f8f" },
    { tunnus: "3", lyhyt: "Toinen ja kolmas peli", otsikko: "Toinen ja kolmas prototyyppi", kuvaus: "Teet kaksi seuraavaa peliä samassa järjestyksessä: ensin päämekaniikka, sitten kokonainen kierros ja lopuksi testaus. Toinen opiskelija testaa toisen pelisi vertaisarviossa ennen kuin aloitat kolmannen. Työviikolla 12 asiakkaat kokeilevat kaikkia kolmea peliä.", kuvassa: ["Mekaniikka → kierros → testaus, kahdesti", "Asiakkaat kokeilevat kaikkia kolmea työviikolla 12."], viikot: [7, 8, 9, 10, 11, 12], vari: "#6b7f3f" },
    { tunnus: "4", lyhyt: "Testaus ja ohjeet", otsikko: "Testaus, korjaukset ja ohjeet", kuvaus: "Korjaat asiakkaiden palautteesta valitut asiat, testaat kaikki kolme peliä buildeina eli versioina, joita pelataan ilman Unityä, ja kirjoitat ohjeen jatkotyöstöä varten. Lopuksi joku projektin ulkopuolinen avaa projektit pelkän kirjallisen ohjeesi avulla.", kuvassa: ["Korjaukset → testitulokset → ohjeet → vastaanottotesti", "Joku muu saa pelit auki ilman sinua."], viikot: [13, 14, 15, 16], vari: "#7a4f9a" },
    { tunnus: "5", lyhyt: "Luovutus", otsikko: "Luovutus ja näyttö", kuvaus: "Luovutat asiakkaille sovitun paketin: pelattavat versiot, muokattavat Unity-projektit ja ohjeet. Viimeisellä viikolla esittelet ratkaisusi ja teet niihin muutoksen ohjaajan pyynnöstä.", kuvassa: ["Luovutusversio → paketti asiakkaille → esittely", "Näytät osaamisesi omalla työlläsi."], viikot: [17, 18], vari: "#0f766e" }
  ],
  poikkeamat: {
    vaiheita: "viisi vaihetta: projektikuvaus jakaa työn viiteen vaiheeseen, ja vaihe 3 kattaa kaksi peliä. Ensimmäinen peli on oma vaiheensa, koska opiskelija käyttää sen asiakaskokeilun palautetta kahdessa seuraavassa pelissä."
  },
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 844,
    alt: "ProtoPajan viisi vaihetta: 1 aloitus ja suunnitelma työviikoilla 1–3, 2 ensimmäinen kokonainen prototyyppi ja asiakaskokeilu työviikoilla 4–6, 3 toinen ja kolmas prototyyppi, vertaisarvio ja asiakaskatselmointi työviikoilla 7–12, 4 testaus, korjaukset ja ohjeet työviikoilla 13–16 sekä 5 luovutus ja näyttö työviikoilla 17–18."
  },
  vaiheetJohdanto: "Ensin varmistat, että Unity ja versionhallinta toimivat ja että olet käynyt suunnitelman läpi ohjaajan ja asiakkaiden kanssa. Sitten teet yhden pelin kerrallaan valmiiksi asti, koska valmis peli opettaa enemmän kuin kolme puolivalmista. Asiakkaiden palautteen perusteella päätät, mitä korjaat. Lopuksi joku projektin ulkopuolinen kokeilee, saako hän projektit auki ilman sinua.",
  vaiheetHuomio: "Aikataulu on muokattava ehdotus, ei lopullinen aikataulu. Työviikot ovat järjestysnumeroita omasta aloituksestasi, eivät kalenteriviikkoja. Ohjaajat sovittavat työmäärän lähtötasoosi ja käytettävissä olevaan aikaan. Asiakaskatselmointien ajat työviikoilla 6 ja 12 ovat alustavia.",

  /* ---- moottorin tekstien korvaukset ---- */
  tekstit: {
    tasksLead: "Tee työvaiheet järjestyksessä. Sivu avaa valmiiksi ensimmäisen työvaiheen, jota et ole vielä tehnyt. Kaikki työvaiheet ovat pakollisia.",
    projectConnectionHeading: "Näin viikko vie kokonaisuutta eteenpäin",
    weekGoalHeading: "Tällä viikolla teet tämän",
    weekFinishCheck: "Tee kokeilu, joka on kuvattu viikon alussa",
    weekFinishEvidence: "Työnäyte talteen",
    mdWork: "### Mitä minä toteutin, ja miten kokeilin sitä?",
    mdReason: "### Minkä ratkaisun tein, ja miksi valitsin sen?",
    mdEvidence: "### Mistä työnäytteeni löytyy, ja mitä teen seuraavaksi?"
  },

  /* ---- viikkonavigaation lyhyet nimet ---- */
  viikkoNimet: {
    1: "Aloitus",
    2: "Suunnitelma",
    3: "Tekninen pohja",
    4: "Pelattava kierros",
    5: "Valikot ja palaute",
    6: "Asiakaskokeilu",
    7: "Toinen peli: mekaniikka",
    8: "Toinen peli: kierros",
    9: "Vertaisarvio",
    10: "Kolmas peli: mekaniikka",
    11: "Kolmas peli: kierros",
    12: "Asiakaskatselmointi",
    13: "Palautekorjaukset",
    14: "Testausviikko",
    15: "Jatkotyöstöohjeet",
    16: "Vastaanottotesti",
    17: "Luovutusversio",
    18: "Näyttö"
  },

  /* ---- viikkorutiini: joka viikon rastit, eivät lasketa työvaiheisiin ---- */
  viikkorutiini: {
    otsikko: "Viikkorutiini · ei lasketa työvaiheisiin",
    johdanto: "Nämä toistuvat joka viikko. Rastit näkyvät vain sinun selaimessasi.",
    kohdat: [
      { milloin: "Ennen kuin avaat Unityn", teksti: "Jos teet työtä kahdella koneella, esimerkiksi koulussa ja kotona, hae ensin toisella koneella tekemäsi muutokset. Paina GitHub Desktopissa Fetch origin ja sitten Pull origin." },
      { milloin: "Viikon alussa", teksti: "Päivitä tehtävätaulu. Lisää viikon tehtävät korteiksi ja kirjoita jokaiseen korttiin valmis kun -ehto eli se, mistä näet, että tehtävä on valmis." },
      { milloin: "Joka työkerralla", teksti: "Kirjaa työaikasi Excel-taulukkoon: päivämäärä, peli, tehtävä, käytetty aika ja lyhyt tulos." },
      { milloin: "Viikkotarkistus (ehdotus)", teksti: "Käy ohjaajan kanssa läpi, mitä sait valmiiksi, mikä estää etenemistä ja mitä teet seuraavaksi. Sovi samalla ohjaajan kanssa seuraavan viikon tehtävistä ja niiden järjestyksestä." },
      { milloin: "Viikon lopussa", teksti: "Kirjoita viikon päiväkirjamerkintä ja tallenna päiväkirja polkuun project-docs/projektipaivakirja.md. Tee sitten commit ja push viikon muutoksista." }
    ]
  },

  /* ---- jumiohje: sama toimintaketju joka viikkokortissa (moottori v2.4, josJumissa) ---- */
  josJumissa: {
    otsikko: "Jos kokeilu ei onnistu",
    johdanto: "Toimi tässä järjestyksessä. Jos et pääse eteenpäin 30 minuutissa, pyydä apua. Tämä on jumiraja, ja ohjaaja voi sopia kanssasi toisen rajan.",
    kohdat: [
      { kysymys: "1. Mitä odotit, ja mitä tapahtui?", ohje: "Kirjoita korttiin, mitä odotit tapahtuvan ja mitä oikeasti tapahtui. Kopioi virheilmoitus Console-ikkunasta sanasta sanaan. Usein jo näistä kahdesta näet, missä vika on." },
      { kysymys: "2. Missä kohdassa koodia vika syntyy?", ohje: "Rajaa ongelma. Lisää yksi Debug.Log-rivi ennen kohtaa, jota epäilet, ja toinen sen jälkeen. Katso Console-ikkunasta, mitkä viestit tulostuvat. Kokeile tilannetta, jossa on mahdollisimman vähän muuta, esimerkiksi pelkkä pelaaja ja maali." },
      { kysymys: "3. Oletko kokeillut yhtä perusteltua muutosta?", ohje: "Tee yksi muutos kerrallaan ja kirjaa, miksi kokeilit sitä. Jos muutos ei auta, palauta koodi ennalleen ennen seuraavaa kokeilua." },
      { kysymys: "4. Onko jumiraja ylittynyt?", ohje: "Pyydä apua ohjaajalta. Kopioi alla oleva pohja avunpyyntöösi ja täytä se, niin ohjaaja pääsee heti asiaan.", pohja: "Avunpyyntö\nTyövaihe: TYÖVAIHEEN NUMERO JA NIMI\nMitä yritin: YKSI VIRKE\nOdotettu tulos: MITÄ PITI TAPAHTUA\nHavaittu tulos: MITÄ TAPAHTUI, VIRHEILMOITUS SANASTA SANAAN\nMitä kokeilin ja mitä tapahtui: KOKEILUT\nCommit tai kuvakaappaus: LINKKI" }
    ]
  },

  /* ---- oppimispolun katkoskohdat (moottori v2.8.6, tarkista.js kohta 20) ----
   * Ks. skillin references/katkoskohdat.md. Tunnukset ovat tehtäväkorttien tunnuksia. */
  oppimispolku: {
    lahtotaso: "1-4",
    suunnitteluEnnenKoodia: "pseudokoodi",
    suunnittelunPoikkeukset: { "7-2": "tallennustapojen vertailu: opiskelija kirjoittaa dataa, ei toimintalogiikkaa" },
    selitaJaMuuta: ["3-5", "6-5", "9-5"],
    siirtokokeilu: ["6-2", "16-1"],
    kuorma: {
      poikkeamat: { 1: "aloitusviikko: Gitin, Unityn ja tehtävätaulun peruskäsitteet otetaan käyttöön ohjatusti yksi kerrallaan, ja lähtötasokokeilusta ohjaaja näkee, tarvitseeko opiskelija tukea ennen ohjelmointia" }
    }
  },

  /* ---- sanasto ----
     Vain tämän projektin käyttämät termit. Jokainen termi selitetään myös siinä
     kohdassa, jossa se tulee ensimmäisen kerran vastaan; tämä lista on kertausta
     varten. `viikko` = työviikko, jolla termi tulee ensi kertaa vastaan. */
  termisto: [
    { termi: "prototyyppi", nimi: "Pieni pelattava peli", selite: "Peli, joka näyttää yhden peli-idean toiminnassa. ProtoPajan prototyypissä on yksi päämekaniikka, yksi pieni kenttä ja 1–3 minuutin kierros." },
    { termi: "päämekaniikka", nimi: "Pelin tärkein toiminto", selite: "Toiminto, jota pelaaja toistaa koko kierroksen ajan, esimerkiksi hyppy, laatikon siirto tai hyökkäys." },
    { termi: "ydinsilmukka", nimi: "Pelin toistuva kierto", selite: "Pelaaja tekee päämekaniikan toiminnon, saa siitä palautetta ja pääsee lähemmäs tavoitetta. Kun silmukka toimii, peli on pelattava." },
    { termi: "lisätavoite", nimi: "Neljäs tai viides peli", selite: "Ajopeli tai tutkimispeli, jonka teet vain, jos kolme peliä on testattu ja luovutuskunnossa ja olet sopinut lisätyöstä ohjaajan kanssa. Lisätavoite ei ole työvaihe, eikä se näy etenemisessä." },
    { termi: "repository", nimi: "Oma koodivarasto", selite: "Versionhallinnan säilytyspaikka GitHubissa. Siellä ovat Unity-projektisi, dokumenttisi ja koko muutoshistoria. Repository on sinun omasi, ja se on yksityinen, kunnes ohjaaja päättää toisin. Työnäyte on aina repositoryssa, ei tällä sivulla.", viikko: 1 },
    { termi: "commit", nimi: "Tallennettu muutos", selite: "Yksi tallennettu muutos versionhallinnassa. Kirjoitat jokaiseen commitiin viestin, joka kertoo, mitä muutit, esimerkiksi ”Maali päättää kierroksen”. Commit-historiasta näet myöhemmin, mitä teit ja milloin.", viikko: 1 },
    { termi: "push ja pull", nimi: "Lähetys ja haku", selite: "Push lähettää commitisi omalta koneeltasi GitHubiin. Pull hakee muutokset GitHubista koneellesi. Pullia tarvitset, kun teet työtä kahdella koneella, esimerkiksi koulussa ja kotona. GitHub Desktopissa painikkeet ovat Push origin ja Pull origin.", viikko: 1 },
    { termi: "LTS", nimi: "Long Term Support, pitkään tuettu versio", selite: "Unityn versio, joka saa korjauksia pitkään. Se sopii projektiin, jonka pitää aueta vielä luovutuksen jälkeen. Käytä koko projektin ajan täsmälleen samaa versiota, jonka ohjaaja on päättänyt. Jos vaihdat versiota kesken työn, projekti ei välttämättä toimi enää samalla tavalla.", viikko: 1 },
    { termi: "scene", nimi: "Unityn näkymä tai taso", selite: "Esimerkiksi alkuvalikko tai pelikenttä. Jokainen scene on oma tiedostonsa, ja avaat sen Unityn Project-ikkunasta.", viikko: 1 },
    { termi: "Play-tila", nimi: "Pelin ajo editorissa", selite: "Unity-editorin tila, jossa peli käynnistyy editorin sisällä. Jos muutat Inspectorissa jotain Play-tilan aikana, muutos häviää, kun lopetat Play-tilan.", viikko: 1 },
    { termi: "tehtävätaulu", nimi: "Oma työlista", selite: "Taulu, esimerkiksi Trello, jossa jokainen työtehtävä on kortti. Kortissa on tavoite, valmis kun -ehto ja linkki työnäytteeseen. Taulusta näet, mitä on tehty, mitä on työn alla ja mitä on vielä tekemättä. Käyt taulun läpi ohjaajan kanssa viikkotarkistuksessa.", viikko: 1 },
    { termi: ".gitignore", nimi: "Pois jätettävät tiedostot", selite: "Tiedosto, joka kertoo Gitille, mitä ei tallenneta. Unity-projektista jätetään pois esimerkiksi kansiot Library, Temp ja Builds, koska Unity luo ne itse.", viikko: 1 },
    { termi: "pienin toimiva versio", nimi: "Pelin ensimmäinen valmis muoto", selite: "Versio, jossa päämekaniikka, tavoite ja kierroksen loppu toimivat. Teet sen ensin. Kaikki muu on lisää.", viikko: 2 },
    { termi: "pseudokoodi", nimi: "Koodin suunnitelma tavallisella kielellä", selite: "Lyhyt kuvaus siitä, mitä koodi tekee, kirjoitettuna suomeksi ennen varsinaista koodia, esimerkiksi ”Kun pelaaja koskettaa maalia, kierros päättyy.” Kun kirjoitat pseudokoodin ensin, mietit valmiiksi, mitä tietoa koodi tarvitsee ja millä ehdoilla asiat tapahtuvat.", viikko: 3 },
    { termi: "GameObject", nimi: "Scenen esine", selite: "Mikä tahansa sceneen lisätty asia: pelaaja, seinä, kamera tai painike. GameObjectin toiminta tulee siihen liitetyistä komponenteista.", viikko: 3 },
    { termi: "komponentti", nimi: "GameObjectin ominaisuus", selite: "GameObjectiin liitetty osa. Esimerkiksi Rigidbody 2D lisää painovoiman, ja oma C#-skriptisi lisää pelin säännön. Muokkaat komponentteja Inspector-ikkunassa. Unityä sanotaan ohjelmistokomponenttikirjastoksi, koska peli kootaan sen valmiista komponenteista ja omista skripteistä.", viikko: 3 },
    { termi: "C#-skripti", nimi: "Oma koodi Unityssä", selite: "Tiedosto, johon kirjoitat pelin toiminnan C#-kielellä. Liität skriptin GameObjectiin komponenttina.", viikko: 1 },
    { termi: "build", nimi: "Koottu peliversio", selite: "Versio, jonka Unity kokoaa projektista ja jota voi pelata ilman Unity-editoria, esimerkiksi Windows-ohjelmana tai selaimessa. Testaa build aina erikseen, koska peli voi toimia buildissa eri tavalla kuin editorissa.", viikko: 3 },
    { termi: "collider", nimi: "Törmäysmuoto", selite: "Komponentti, joka antaa GameObjectille muodon törmäyksiä varten. Trigger-collider ei pysäytä liikettä vaan ilmoittaa skriptille, kun jokin osuu siihen, esimerkiksi maaliin.", viikko: 4 },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "T tarkoittaa testitapausta, ja numero yksilöi sen: T01 on ensimmäinen testitapaus, T02 toinen. Kirjoitat odotetun tuloksen aina ennen kuin ajat testin, ja käytät samaa tunnusta testimatriisissa.", viikko: 4 },
    { termi: "UI", nimi: "User interface, käyttöliittymä", selite: "Pelin painikkeet, tekstit ja valikot. Unityssä lisäät esimerkiksi painikkeen tai tekstin GameObject-valikon UI-kohdasta.", viikko: 4 },
    { termi: "asset", nimi: "Valmis aineisto", selite: "Peliin tuotava kuva, sprite eli 2D-pelin kuva, fontti tai muu valmis aineisto. Valmiita assetteja saa käyttää niiden käyttöehtojen mukaan, ja kirjaat jokaisen lähteen assettiluetteloon.", viikko: 5 },
    { termi: "prefab", nimi: "Uudelleenkäytettävä GameObject", selite: "Tallennettu valmis GameObject, jota voi käyttää monessa scenessä. Kun muokkaat prefabia, muutos näkyy kaikissa sen kopioissa. Esimerkiksi alkuvalikon voi tehdä prefabiksi ja käyttää kaikissa peleissä.", viikko: 5 },
    { termi: "haara", nimi: "Branch, erillinen työversio", selite: "Repositoryn erillinen työversio. Kun teet uuden osan, esimerkiksi valikot, omassa haarassa, päähaaran (main) peli pysyy sillä aikaa toimivana. GitHub Desktopissa teet uuden haaran kohdasta Current Branch → New Branch.", viikko: 5 },
    { termi: "yhdistäminen", nimi: "Merge, haaran yhdistäminen päähaaraan", selite: "Kun haarassa tekemäsi osa toimii, yhdistät sen muutokset päähaaraan. GitHub Desktopissa valitset ensin päähaaran (main) ja sitten Branch → Merge into current branch. Sen jälkeen muutokset ovat päähaarassa.", viikko: 5 },
    { termi: "tag", nimi: "Versiomerkintä", selite: "Nimi, jonka liität yhteen commitiin, jotta löydät juuri sen version myöhemmin. Asiakaskokeilun versio on tag v0.1 ja luovutusversio tag v1.0.", viikko: 6 },
    { termi: "JSON", nimi: "Tiedon tekstimuoto", selite: "Tekstimuoto, jolla tietoa tallennetaan tiedostoon nimettyinä kenttinä. Pelin kenttä- tai asetusdata voi olla JSON-tiedostossa, jonka peli lukee käynnistyessään.", viikko: 7 },
    { termi: "ScriptableObject", nimi: "Unityn datatiedosto", selite: "Unityn tapa tallentaa dataa omaksi tiedostokseen projektin sisälle, esimerkiksi kentän asetukset. Voit muokata dataa Inspector-ikkunassa kirjoittamatta koodia.", viikko: 7 },
    { termi: "API", nimi: "Ohjelmointirajapinta", selite: "Valmiiden toimintojen joukko, jota oma koodisi kutsuu. Unityn API:sta käytät esimerkiksi fysiikkaa (Physics2D), scenen vaihtoa (SceneManager) ja aikaa (Time).", viikko: 7 },
    { termi: "vertaisarvio", nimi: "Toisen opiskelijan antama arvio", selite: "Toinen opiskelija testaa pelisi vaatimuslistaa vasten, ja kirjaatte havainnot yhdessä. Vertaisarvio koskee peliä, ei ihmistä.", viikko: 9 },
    { termi: "virheenkorjausketju", nimi: "Virheen koko kulku", selite: "Havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Toistamisohje kertoo, miten virheen saa näkyviin uudelleen. Teet projektissa vähintään kolme ketjua oman koodisi virheistä.", viikko: 9 },
    { termi: "regressiotesti", nimi: "Ettei korjaus rikkonut muuta", selite: "Korjauksen jälkeen ajettava testi, jolla varmistat, että muu peli toimii yhä. Yleensä se on pelin peruskierros alusta loppuun.", viikko: 9 },
    { termi: "rajatapaus", nimi: "Harvinainen mutta mahdollinen tilanne", selite: "Tilanne, jota pelaaja ei yleensä tee mutta voi tehdä, esimerkiksi Uudelleen-painikkeen painaminen kaksi kertaa nopeasti. Rajatapauksista löytyy usein virheitä, joita et huomaa tavallisessa pelaamisessa.", viikko: 14 },
    { termi: "vastaanottotesti", nimi: "Ulkopuolinen testaa ohjeesi", selite: "Projektin ulkopuolinen henkilö avaa Unity-projektit ja käynnistää pelit pelkän kirjallisen ohjeesi avulla. Korjaat ohjeeseen jokaisen kohdan, jossa hän epäröi.", viikko: 16 },
    { termi: "luovutusehdokas", nimi: "Versio, jonka aiot luovuttaa", selite: "Versio, jonka luovutat asiakkaille, jos vastaanottotestissä ei löydy estäviä virheitä. Merkitset sen versiomerkinnällä tag v0.9.", viikko: 16 },
    { termi: "puhdas klooni", nimi: "Uusi kopio repositorysta", selite: "Kopio, jonka haet repositorysta GitHubista uuteen kansioon. Siinä on vain se, mitä olet tallentanut GitHubiin. Puhtaasta kloonista näet, aukeaako projekti myös koneella, jolla et ole tehnyt työtä. GitHub Desktopissa kloonaat repositoryn kohdasta File → Clone repository.", viikko: 16 },
    { termi: "täsmälinkki", nimi: "Linkki suoraan työnäytteeseen", selite: "Linkki, joka vie GitHubissa suoraan oikeaan commitiin tai tiedostoon eikä pelkästään repositoryn etusivulle. Täsmälinkistä arvioija näkee heti, mitä työnäytettä tarkoitat.", viikko: 18 }
  ],

  /* ---- viikkotyyppien kehystekstit ---- */
  kehykset: {
    pohjustus: { kicker: "Pohjustus", connectionLabel: "Näin viikko vie kokonaisuutta eteenpäin:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    feature: { kicker: "Viikon tulos", connectionLabel: "Näin tulos rakentuu:", deliverableLabel: "Valmistuu tällä viikolla", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    katselmointi: { kicker: "Asiakkaat kokeilevat", connectionLabel: "Näin viikko vie kokonaisuutta eteenpäin:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    laatu: { kicker: "Laatuviikko", connectionLabel: "Näin viikko nostaa työn laatua:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    julkaisu: { kicker: "Luovutusviikko", connectionLabel: "Näin viikko vie työn luovutukseen:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    naytto: { kicker: "Näyttöviikko", connectionLabel: "Näin viikko vie näytön maaliin:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" }
  },

  /* ---- projektipäiväkirja (henkilökohtainen) ---- */
  paivakirja: {
    tiedostonimi: "projektipaivakirja.md",
    polku: "project-docs/projektipaivakirja.md",
    vihjeet: {
      work: "Kerro, minkä skriptin, scenen tai dokumentin osan teit ja miten kokeilit, että se toimii.",
      reason: "Kerro yksi ratkaisusi, vaihtoehto, jota harkitsit, ja miksi valitsit näin.",
      evidence: "Esimerkiksi commit-linkki, testitapaus T05, tehtävätaulun kortti tai tiedoston polku.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla työkerralla?"
    }
  },

  /* ---- paperiaineiston tekstit (päivätön tila) ---- */
  lataukset: {
    resurssienPerusosoite: "https://mattiseise.github.io/projektikoontisivu/protopaja/",
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title,
    aloitusHuomio: "Viikon työvaiheiden tarkat ohjeet ovat sivustolla. Kirjaa jokainen työtehtävä tehtävätaulun kortiksi, jossa on valmis kun -ehto. Kirjaa testin tulos testimatriisiin heti, kun olet ajanut testin. Kirjoita viikon yhteenveto projektipäiväkirjaan viikon lopussa ja työaika Excel-taulukkoon joka työkerralla."
  },

  /* ---- suunnitelmadokumentti ---- */
  suunnitelma: {
    otsikko: "Projektisuunnitelma: kolme prototyyppiä ja työtapa",
    tiedostonimi: "suunnitelma.md",
    pakolliset: [
      "nimi", "tekijat", "peli1", "peli2", "peli3", "rajaus", "projektijako",
      "nimeaminen", "seuranta", "testaus"
    ],
    markdown: ({ arvo, onTäytetty, pvm }) => {
      const ohjaaja = (kentta, otsikko, avoin) => onTäytetty(kentta)
        ? `- ${otsikko}: ${arvo(kentta)}`
        : `- ${otsikko}: EI VIELÄ SOVITTU, avoin asia. ${avoin}`;
      return [
        `# Projektisuunnitelma – ${arvo("nimi", "ProtoPaja")}`,
        "",
        `Tekijä: ${arvo("tekijat")} · Päivitetty: ${pvm}`,
        "",
        "Täytä suunnitelma työviikolla 2 ja käy se läpi ohjaajan kanssa. Kun jokin muuttuu, kirjaa muutos päätöslokiin `project-docs/paatokset.md` päivämäärän kanssa. Älä poista vanhoja merkintöjä, niin päätösten historia säilyy.",
        "",
        "## 1. Kenelle prototyypit tehdään ja miten niitä käytetään",
        "",
        "Asiakkaat Caito ja Toni käyttävät prototyyppejä oppilaitoksen pelimusiikin kurssin",
        "harjoitusmateriaalina. Kurssin opiskelijat tekevät peleihin musiikit ja ääniefektit",
        "ja lisäävät ne peleihin itse. Prototyyppien pitää toimia ja olla ymmärrettäviä ilman",
        "ääniä. Koodin pitää olla selkeästi nimetty, ja jatkotyöstöohjeesta pitää näkyä, miten",
        "projektit avataan ja mistä scenet ja skriptit löytyvät.",
        "",
        "## 2. Jokaisen prototyypin vaatimukset (toimeksianto)",
        "",
        "1. Yksi selkeä päämekaniikka ja ydinsilmukka.",
        "2. Yksi pieni kenttä tai pelialue, kierros noin 1–3 minuuttia.",
        "3. Käyttökelpoiset ja yhtenäiset grafiikat; valmiita assetteja käyttöehtojen mukaan.",
        "4. Alkuvalikko, jossa ovat pelin käynnistys ja lyhyt ohjausohje.",
        "5. Selkeä kierroksen päättyminen.",
        "6. Uudelleenaloitus ja paluu alkuvalikkoon.",
        "7. Riittävä visuaalinen palaute.",
        "8. Testattu peliversio ja muokattava Unity-projekti.",
        "",
        "Lisätavoitteet: neljäs ja viides prototyyppi vasta, kun kolme on testattu ja",
        "luovutuskunnossa ja lisätyöstä on sovittu. Ei kuulu projektiin: laaja tarina,",
        "moninpeli, verkkopalvelut, tallennusjärjestelmä, laajat kenttäsarjat, äänentoistokoodi",
        "eikä erillinen äänijärjestelmä.",
        "",
        "## 3. Kolme prototyyppiä",
        "",
        "Kirjoita jokaisesta pelistä päämekaniikka, tavoite, miten kierros alkaa, päättyy ja",
        "käynnistyy uudelleen, sekä pienin toimiva versio.",
        "",
        "### 3.1 Ensimmäinen peli",
        "",
        arvo("peli1"),
        "",
        "### 3.2 Toinen peli",
        "",
        arvo("peli2"),
        "",
        "### 3.3 Kolmas peli",
        "",
        arvo("peli3"),
        "",
        "### 3.4 Mitä jätän pois",
        "",
        arvo("rajaus"),
        "",
        "## 4. Tekninen toteutus",
        "",
        "### 4.1 Yksi vai kolme Unity-projektia (vertailu päätöslokissa)",
        "",
        arvo("projektijako"),
        "",
        "### 4.2 Scenejen, skriptien ja resurssien nimeäminen ja kansiot",
        "",
        arvo("nimeaminen"),
        "",
        "## 5. Työtapa",
        "",
        "### 5.1 Tehtävien ja työajan seuranta",
        "",
        arvo("seuranta"),
        "",
        "### 5.2 Testaus ja luovutus",
        "",
        arvo("testaus"),
        "",
        "## 6. Asiakkaiden ja ohjaajien vahvistettavat asiat",
        "",
        ohjaaja("aiheet", "Kolme aihetta (asiakkaat vahvistavat)", "Aiheet ovat suunnittelun lähtökohta, eivät hyväksyttyjä valintoja."),
        ohjaaja("unityversio", "Unity-versio", "Sama versio koko projektin ajan ja myös vastaanottajalla."),
        ohjaaja("alusta", "Kohdealusta", "Esimerkiksi Windows tai selain. Asiakkaat kertovat, millä koneilla kurssi pelaa."),
        ohjaaja("tekoaly", "Tekoälyn käytön pelisäännöt", "Ohjaajat päättävät. Sääntöjä ei kopioida toisesta projektista."),
        ohjaaja("repojulkisuus", "Repositoryn julkisuus ja tekijänimi", "Kunnes asia on sovittu, repository on yksityinen."),
        ohjaaja("lisenssi", "Lisenssi ja luovutustapa", "Miten asiakkaat saavat pelit ja projektit ja millä ehdoilla niitä jatketaan."),
        ohjaaja("perusteversio", "Tutkinnon perusteet ja suoritettavat osat", "Ohjaajat vahvistavat perusteversion ja suoritettavat tutkinnon osat."),
        ohjaaja("katselmoinnit", "Katselmointien ajat ja osallistujat", "Ehdotus: asiakaskokeilu työviikolla 6, vertaisarvio työviikolla 9, katselmointi työviikolla 12 ja vastaanottotesti työviikolla 16. Kirjaa vain roolit, ei nimiä."),
        "",
        "## 7. Ohjausvastuut (ehdotus, vahvistetaan aloituksessa)",
        "",
        "- Ohjaajat Matti ja Antti seuraavat viikoittain etenemistä ja tuen tarvetta. Viikkotarkistuksessa opiskelija sopii ohjaajan kanssa seuraavista tehtävistä ja niiden järjestyksestä.",
        "- Asiakkaat Caito ja Toni kokeilevat pelejä sovituissa katselmoinneissa ja arvioivat, sopivatko ne musiikkikurssille.",
        "- Opiskelija esittelee tulokset, kirjaa palautteen ja ehdottaa, mitä tehdään seuraavaksi.",
        "",
        "---",
        "",
        "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
        "Kun rajaus tai suunnitelma muuttuu, kirjaa muutos ensin päätöslokiin ja päivitä sitten tämä tiedosto.",
        ""
      ].join("\n");
    }
  },
  /* ---- viikkojen ohjaava sisältö ----
   * Toteutusviikkojen rytmi: suunnittele (pseudokoodi ja tehtävätaulun kortit) → toteuta →
   * testaa testimatriisilla. Opiskelija tekee kaikki kolme peliä ja niiden kaikki osat itse. */
  viikkoOhjeet: {
    /* ============ VAIHE 1: ALOITUS JA SUUNNITELMA (1–3) ============ */
    1: {
      type: "pohjustus",
      rutiini: false,
      feature: "Sinulla on oma repository GitHubissa. Siinä on Unity-kokeiluprojekti, johon olet tehnyt lähtötasokokeilun, ja projekti aukeaa myös silloin, kun kloonaat sen uuteen kansioon.",
      connection: "Ennen ensimmäistä peliä selvität, mitä toimeksiannossa on vielä päättämättä, ja otat työkalut käyttöön. Asennat Unityn ja GitHub Desktopin ja perustat oman repositoryn, koska tarvitset niitä joka viikko projektin loppuun asti. Työviikolla 2 teet kysymysten vastauksista suunnitelman.",
      deliverable: "`project-docs/kysymykset.md`, oma repository, Unity-kokeiluprojekti, lähtötasokokeilu ja sen commit sekä tehtävätaulu ja työaikataulukko.",
      why: "Kun työkalut toimivat jo ennen ensimmäistä peliä, voit keskittyä pelin tekemiseen etkä joudu korjaamaan asennuksia kesken työn. Kun tallennat muutoksen commitiksi ja lähetät sen GitHubiin, se säilyy siellä. Silloin et menetä töitäsi, vaikka kone hajoaisi tai tekisit virheen. Kun osaamistasi arvioidaan näytössä, ohjaaja näkee commit-historiasta, mitä olet tehnyt ja milloin.",
      done: "Kloonaa repositorysi uuteen kansioon ja avaa sieltä Kokeilu-projekti Unity Hubissa. Avaa Lahtotaso-scene ja paina Play: neliö pyörii, ja välilyönti kääntää suunnan. Commitisi näkyvät GitHubin historiassa sinun tekijänimelläsi.",
      record: "Kirjoita työviikon 1 merkintään Unity-versio ja lähtötasokokeilusi commit-linkki. Kerro, mitä opit lähtötasokokeilusta ja ohjaajan palautteesta ja mitä huomasit, kun kloonasit repositoryn uuteen kansioon. Lisää yksi kysymyslistan kysymys, jonka vastaus muuttaa suunnitelmaasi. Näyttömatriisin rivit, joihin sait työnäytteen: kehitysympäristön käyttö (p1), ympäristön käyttöönotto (k1), ohjelmoinnin perusasiat (p4), versionhallinta (s12) ja asiakkaan tarpeiden selvittäminen (s1).",
      skills: [
  "kehitysympäristön käyttöönotto (p1, k1)",
  "ohjelmoinnin perusasiat: arvo ja ehto (p4)",
  "versionhallinta (s12)",
  "asiakkaan tarpeiden selvittäminen (s1)"
],
      resources: [["GitHub Desktop: kuvaohje ilman Git-komentoja", "../ohjeet/github-desktop/?projekti=protopaja#asennus", false], ["Työaikataulukon pohja (.csv, avautuu Excelissä)", "downloads/protopaja-tyoaika.csv", true]],
      tehtavat: {
        "1-1": {
          miksi: "Toimeksiannossa on tarkoituksella asioita, joita ei ole vielä päätetty, esimerkiksi pelien aiheet ja se, millä koneilla musiikkikurssilla pelataan. Kun kysyt niistä nyt, saat vastaukset ennen kuin teet suunnitelman työviikolla 2. Silloin suunnitelmasi perustuu asiakkaiden vastauksiin eikä arvauksiin.",
          osat: [
            ["Lue toimeksianto", "Lue sivun Toimeksianto-osio kokonaan. Etsi siitä kahdeksan vaatimusta, jotka jokaisen pelin pitää täyttää, ja kirjoita ne muistiin."],
            ["Merkitse epäselvät kohdat", "Merkitse kohdat, joista et tiedä, mitä asiakkaat tarkoittavat tai milloin asia on valmis."],
            ["Kirjoita kysymyslista", "Kirjoita tiedostoon `kysymykset.md` vähintään kahdeksan kysymystä. Merkitse jokaisen kysymyksen perään, onko se asiakkaille vai ohjaajalle."],
            ["Tarkista, että vastaus vaikuttaa työhösi", "Muotoile jokainen kysymys niin, että vastauksen perusteella teet jotain toisin. Katso tehtävän esimerkki."],
            ["Vie kysymykset ohjaajalle ja asiakkaille","Käy lista läpi ohjaajan kanssa. Lähetä asiakkaille tarkoitetut kysymykset tavalla, josta sovit ohjaajan kanssa. Kirjoita vastaukset kysymysten alle."]
          ],
          valmis: "Kysymyslistassa on vähintään kahdeksan kysymystä, ja jokaisen perässä lukee, kenelle se on. Olet käynyt listan läpi ohjaajan kanssa.",
          tallenna: "Tiedosto polkuun `project-docs/kysymykset.md`, kun olet perustanut repositoryn myöhemmin tällä viikolla. Yksi tärkeä kysymys päiväkirjaasi.",
          esimerkki: "Hyvä kysymys: ”Pelataanko pelejä musiikkikurssilla Windows-koneilla vai selaimessa?” Vastauksesta tiedät, teetkö peleistä Windows-ohjelmat vai selaimessa toimivat pelit.",
          eiRiita: "”Mitä peleihin pitää tehdä?” Vastaus on jo toimeksiannossa, eikä se auta sinua päättämään mitään."
        },
        "1-2": {
          miksi: "Unity-projekti aukeaa ilman ongelmia vain samalla Unity-versiolla, jolla se on tehty. Jos versio on eri, Unity voi muuttaa projektin tiedostoja tai näyttää virheitä. Siksi sinulla ja myöhemmin musiikkikurssin opiskelijoilla pitää olla täsmälleen sama versio.",
          osat: [
            ["Kysy versio ohjaajalta", "Kysy ohjaajalta, mikä Unity-versio sinun pitää asentaa. Ohjaaja päättää version, koska musiikkikurssin opiskelijat avaavat pelit samalla versiolla. Suositus on LTS-versio eli pitkään tuettu versio."],
            ["Asenna Unity Hub", "Asenna Unity Hub Unityn lataussivulta. Unity Hub on ohjelma, jolla asennat Unityn ja avaat projektit. Kirjaudu Unity-tunnuksella. Kysy ohjaajalta, mitä tunnusta käytät."],
            ["Asenna editori", "Valitse Unity Hubissa Installs ja sitten Install Editor. Valitse ohjaajan antama versio. Jos sitä ei näy listassa, hae se Unityn versioarkistosta."],
            ["Valitse moduulit", "Valitse asennuksen moduuleista koodieditori. Valitse myös sen alustan tuki, jolla pelejä pelataan, esimerkiksi Windows Build Support tai Web Build Support. Jos alusta ei ole vielä tiedossa, lisäät sen myöhemmin."],
            ["Asenna GitHub Desktop", "Asenna GitHub Desktop viikon kuvaohjeen mukaan ja kirjaudu GitHub-tunnukseesi. GitHub Desktop on ohjelma, jolla tallennat muutokset versionhallintaan ilman komentoja."],
            ["Kirjoita versionumerot muistiin", "Kirjoita päiväkirjaasi Unityn tarkka versionumero Unity Hubin Installs-näkymästä. Kirjoita myös GitHub Desktopin versio, jonka löydät Help-valikon kohdasta About GitHub Desktop."]
          ],
          valmis: "Unity Hubin Installs-näkymässä näkyy ohjaajan antama versio, ja olet kirjautunut GitHub Desktopiin GitHub-tunnuksellasi.",
          tallenna: "Versionumerot päiväkirjaasi.",
          sanat: ["LTS"],
          apu: {
            title: "Asennus ja moduulit",
            vinkit: [
              "Versionumero on muotoa 6000.0.40f1: numeroita, pisteitä ja kirjain. Kirjoita se kokonaan, sillä Unity 6:sta on monta versiota, eikä pelkkä ”Unity 6” riitä.",
              "Mac-koneella koodieditoriksi sopii Visual Studio Code ja sen Unity-laajennus. Windowsissa Unity Hub voi asentaa Visual Studio Communityn moduulina.",
              "Macissa GitHub Desktopin versio löytyy GitHub Desktop -valikon kohdasta About GitHub Desktop.",
              "Unity Hubiin kirjaudutaan Unity-tunnuksella. Opiskelukäyttöön riittää maksuton Personal-lisenssi, mutta kysy ohjaajalta, mitä oppilaitoksessa käytetään."
            ],
            test: "Unity Hubin Installs-näkymässä näkyy sama versionumero, jonka ohjaaja antoi.",
            links: [["Unity Hubin lataus", "https://unity.com/download"], ["Unityn versioarkisto", "https://unity.com/releases/editor/archive"], ["GitHub Desktop: asennus", "../ohjeet/github-desktop/?projekti=protopaja#asennus"]]
          }
        },
        "1-3": {
          miksi: "Repository on koodivarasto, johon projektin kaikki versiot tallentuvat. Kun perustat sen oikein heti, Unityn väliaikaiset tiedostot ja sähköpostiosoitteesi eivät päädy versiohistoriaan, josta niitä on vaikea poistaa. Lopuksi tarkistat, että projekti aukeaa myös uudessa kansiossa, koska musiikkikurssin opiskelijoiden pitää aikanaan saada se auki omilla koneillaan.",
          osat: [
            ["Piilota sähköpostiosoitteesi", "Avaa GitHubissa Settings ja Emails ja valitse Keep my email addresses private ennen ensimmäistä committia. Commit on yksi tallennettu muutos. Kysy ohjaajalta, millä nimellä näyt commitien tekijänä."],
            ["Luo repository", "Luo GitHubissa uusi repository. Valitse näkyvyydeksi Private, niin repository pysyy yksityisenä, kunnes ohjaaja päättää toisin. Valitse Add .gitignore -kohtaan Unity."],
            ["Luo kokeiluprojekti", "Kloonaa eli kopioi repository omalle koneellesi GitHub Desktopilla. Luo sitten Unity Hubissa ohjaajan antamalla versiolla 2D-projekti nimeltä Kokeilu kloonatun kansion sisään."],
            ["Siirrä .gitignore oikeaan kansioon", "Siirrä repositoryn pääkansiossa oleva .gitignore-tiedosto Kokeilu-kansioon, Assets-kansion viereen. Tiedostossa luetellaan tiedostot, joita ei tallenneta versionhallintaan. Unityn .gitignore-pohja toimii vain siinä kansiossa, jossa Unity-projekti on."],
            ["Tarkista ja lähetä GitHubiin", "Tarkista GitHub Desktopin Changes-listasta, ettei siellä ole Library- tai Temp-kansioita. Lisää `project-docs/kysymykset.md`, tee commit ja paina Push origin. Push lähettää commitin GitHubiin."],
            ["Kokeile, että projekti aukeaa toisessa paikassa", "Kloonaa repository toiseen kansioon tai koulun koneelle. Avaa sieltä Kokeilu-kansio Unity Hubin Add-toiminnolla. Unity rakentaa Library-kansion itse, mikä voi kestää muutaman minuutin."]
          ],
          valmis: "Repository on GitHubissa yksityisenä, siinä ei ole Library- tai Temp-kansioita, ja kokeiluprojekti aukeaa myös toisesta kansiosta tai toiselta koneelta.",
          tallenna: "Repositoryn osoite ja ensimmäisen commitin linkki päiväkirjaasi.",
          sanat: ["repository", "commit", "push ja pull", ".gitignore"],
          apu: {
            title: "Repositoryn rakenne työviikolla 1",
            tree: "protopaja/               oma repository (Private)\n├─ Kokeilu/             työviikon 1 Unity-kokeiluprojekti\n│  ├─ Assets/\n│  ├─ Packages/\n│  ├─ ProjectSettings/\n│  └─ .gitignore        Unityn pohja: Library, Temp ja Builds jäävät pois\n├─ project-docs/\n│  ├─ kysymykset.md\n│  └─ lahtotaso.md      lähtötasokokeilun selitys\n└─ README.md",
            vinkit: [
              "Jos Changes-listassa on tuhansia tiedostoja, .gitignore on väärässä kansiossa. Älä tee committia: siirrä tiedosto Assets-kansion viereen, niin lista lyhenee.",
              "Unityn .gitignore-pohjan rivit alkavat vinoviivalla, esimerkiksi /[Ll]ibrary/. Vinoviiva tarkoittaa: juuri siinä kansiossa, jossa .gitignore on.",
              "Jos teet töitä kahdella koneella, esimerkiksi koulussa ja kotona, paina toisella koneella ensin Fetch origin ja sitten Pull origin. Pull hakee GitHubista muutokset, jotka lähetit toiselta koneelta.",
              "Jos teit commitin ennen kuin piilotit sähköpostiosoitteesi, osoite näkyy commitin tiedoissa. Kerro siitä ohjaajalle ennen kuin repository muutetaan julkiseksi."
            ],
            test: "Kokeilu-projekti aukeaa toisesta kansiosta tai toiselta koneelta, eikä GitHubin tiedostolistassa ole Library-kansiota.",
            links: [["GitHub Desktop: kloonaa repository", "../ohjeet/github-desktop/?projekti=protopaja#kloonaa"], ["GitHub Desktop: commit", "../ohjeet/github-desktop/?projekti=protopaja#commit"]]
          }
        },
        "1-4": {
          miksi: "Teet pienen ohjelmointikokeilun, jossa muutat valmiissa koodissa yhtä arvoa ja kirjoitat koodiin yhden ehdon. Siitä sinä ja ohjaaja näette, mitkä ohjelmoinnin perusasiat jo osaat ja mitä kannattaa harjoitella ennen kuin aloitat ensimmäisen pelin työviikolla 3.",
          osat: [
            ["Luo oma scene", "Avaa Kokeilu-projekti Unityssä. Luo File-valikon New Scene -toiminnolla uusi scene eli Unityn taso, esimerkiksi pelikenttä tai alkuvalikko. Tallenna se Scenes-kansioon nimellä Lahtotaso."],
            ["Lisää neliö ja valmis skripti", "Lisää sceneen neliö GameObject-valikosta: 2D Object, Sprites ja Square. Luo Assets-kansioon kansio Scripts ja siihen C#-skripti Spinner. Korvaa skriptin sisältö koodipohjalla kohdasta ”Tarvitsen apua tähän työvaiheeseen” ja liitä skripti neliöön."],
            ["Ennusta ja muuta arvoa", "Kirjoita ensin ennuste tiedostoon `project-docs/lahtotaso.md`: mitä tapahtuu, kun speed-arvo kaksinkertaistuu? Muuta arvo Inspector-ikkunassa. Paina sitten Play, jolloin peli käynnistyy editorissa, ja katso, osuiko ennuste."],
            ["Kirjoita ehto", "Täydennä koodipohjan TODO-kohta niin, että neliö pyörii toiseen suuntaan, kun välilyönti on painettuna. Kokeile Play-tilassa."],
            ["Selitä havainnot", "Kirjoita tiedostoon `project-docs/lahtotaso.md` omin sanoin, osuiko ennuste, mitä kirjoittamasi ehto tekee ja mikä oli vaikeaa."],
            ["Tee commit ja push", "Tallenna scene. Tee commit, jonka viesti kertoo, mitä muutit, ja paina Push origin."],
            ["Käy kokeilu läpi ohjaajan kanssa", "Näytä ohjaajalle pyörivä neliö ja selityksesi. Ohjaaja kertoo, teetkö pieniä harjoituksia ennen työviikkoa 3. Kirjoita sovitut harjoitukset samaan tiedostoon."]
          ],
          valmis: "Neliö pyörii Lahtotaso-scenessä, ja välilyönti kääntää suunnan. Commitisi näkyy GitHubin historiassa, ja olet käynyt kokeilun läpi ohjaajan kanssa.",
          tallenna: "Commitin linkki ja tiedoston `project-docs/lahtotaso.md` polku päiväkirjaasi.",
          sanat: ["scene", "Play-tila", "C#-skripti"],
          esimerkki: "”Ennustin, että neliö pyörii kaksi kertaa nopeammin, ja niin kävi. Ehto tarkistaa jokaisella ruudunpäivityksellä, onko välilyönti pohjassa, ja muuttaa suunnan miinusmerkkiseksi. Vaikeinta oli löytää, mihin kohtaan if kirjoitetaan.”",
          eiRiita: "”Kokeilu toimi.” Selityksestä ei näe, ymmärsitkö arvon tai ehdon.",
          apu: {
            title: "Koodipohja: pyörivä neliö",
            code: "using UnityEngine;\nusing UnityEngine.InputSystem;\n\n// Lähtötasokokeilu: liitä neliöön.\npublic class Spinner : MonoBehaviour\n{\n    [SerializeField] private float speed = 90f;   // astetta sekunnissa, säädettävissä Inspectorissa\n\n    void Update()\n    {\n        float direction = 1f;\n        // TODO: jos välilyönti on painettuna, aseta direction arvoon -1.\n        //       Vihje: Keyboard.current.spaceKey.isPressed\n        transform.Rotate(0f, 0f, speed * direction * Time.deltaTime);\n    }\n}",
            vinkit: [
              "Update suoritetaan kerran jokaisella ruudunpäivityksellä. Time.deltaTime on kahden päivityksen välinen aika sekunteina, joten nopeus pysyy samana nopealla ja hitaalla koneella.",
              "Ehto kirjoitetaan muotoon if (ehto) { … }. Aaltosulkeiden sisällä oleva koodi suoritetaan vain, kun ehto on tosi.",
              "Inspector-ikkunassa näet valitun objektin asetukset, esimerkiksi speed-arvon. Play-tilassa tekemäsi muutokset häviävät, kun lopetat Play-tilan.",
              "Jos jokin vaihe tuntuu täysin vieraalta, kirjoita se selitykseen. Se on tärkeää tietoa ohjaajalle, ei virhe."
            ],
            test: "Paina Play: neliö pyörii, ja välilyönnin painaminen kääntää suunnan.",
            links: [
              ["Unity Learn: maksuttomat aloittelijan polut", "https://learn.unity.com/"]
            ]
          }
        },
        "1-5": {
          miksi: "Tehtävätaulusta sinä ja ohjaaja näette nopeasti, mitkä työt ovat tulossa, kesken tai valmiina. Työaikataulukkoon kirjaat, kauanko kukin tehtävä vei aikaa. Työviikolla 6 vertaat näitä aikoja omiin arvioihisi, joten aloita kirjaaminen heti.",
          osat: [
            ["Valitse taulu", "Valitse tehtävätauluksi Trello tai muu taulu, josta sovit ohjaajan kanssa. Kutsu ohjaaja tauluun, jos hän haluaa seurata sitä."],
            ["Tee sarakkeet", "Tee tauluun sarakkeet Tulossa, Työn alla, Testattavana ja Valmis."],
            ["Tee ensimmäiset kortit", "Tee kortti jokaisesta tämän viikon työvaiheesta. Kirjoita korttiin tavoite ja valmis kun -ehto eli se, mistä näet, että työ on valmis."],
            ["Luo työaikataulukko", "Lataa viikon työaikataulukon pohja ja avaa se Excelissä. Tallenna taulukko paikkaan, jonka ohjaaja näkee, esimerkiksi Teamsiin."],
            ["Kirjaa tämän viikon työaika", "Kirjaa taulukkoon tämän viikon työaikasi. Kirjoita yksi rivi jokaisesta työkerrasta."],
            ["Kirjoita sijainnit README-tiedostoon", "Kirjoita repositoryn `README.md`-tiedostoon, missä tehtävätaulu ja työaikataulukko ovat. Älä kirjoita sinne salasanoja."]
          ],
          valmis: "Taulussa on kortti jokaisesta tämän viikon työvaiheesta, ja työaikataulukossa on rivi jokaisesta tämän viikon työkerrastasi.",
          tallenna: "Kuvakaappaus taulusta polkuun `project-docs/tyonaytteet/viikko-1/tehtavataulu.png` ja päivitetty `README.md`.",
          sanat: ["tehtävätaulu"],
          esimerkki: "Kortti: ”Kokeiluprojekti GitHubiin – valmis kun: projekti aukeaa uuteen kansioon kloonattuna.”",
          eiRiita: "Kortti ”Unity”, jossa ei ole tavoitetta eikä valmis kun -ehtoa. Siitä et näe, mitä pitää tehdä ja milloin työ on valmis."
        }
      }
    },

    2: {
      type: "pohjustus",
      feature: "Suunnitelmassa on jokaisen pelin päämekaniikka, tavoite ja rajaus. Ensimmäisen pelin kortit ovat tehtävätaulussa siinä järjestyksessä, josta sovit ohjaajan kanssa, ja olet merkinnyt avoimiksi asiat, joita asiakkaat tai ohjaaja eivät ole vielä vahvistaneet.",
      excerpt: "Mieluummin kolme valmista ja testattua peliä kuin viisi keskeneräistä.",
      connection: "Työviikolla 1 kysyit asiakkailta ja ohjaajalta, mitä toimeksiannossa oli vielä päättämättä. Nyt teet vastausten perusteella suunnitelman: päätät, mikä on kunkin pelin pienin toimiva versio ja teetkö pelit yhteen vai kolmeen Unity-projektiin. Työviikolla 3 aloitat ensimmäisen pelin niistä korteista, jotka teet tällä viikolla.",
      deliverable: "`project-docs/suunnitelma.md`, `project-docs/paatokset.md` ja ensimmäisen pelin kortit tuntiarvioineen ohjaajan kanssa sovitussa järjestyksessä.",
      why: "Jos et rajaa pelejä, käytät helposti koko projektin yhden pelin hiomiseen, eikä kahdelle muulle jää aikaa. Kun olet sopinut suunnitelmasta ja työn järjestyksestä ohjaajan kanssa, tiedät joka viikko, mitä teet seuraavaksi.",
      done: "Kerro ohjaajalle ilman muistiinpanoja jokaisen pelin pienin toimiva versio, teetkö pelit yhteen vai kolmeen Unity-projektiin ja mitkä ensimmäisen pelin kortit teet ensin. Ohjaaja vertaa kertomaasi suunnitelmaan ja tehtävätauluun, ja ne vastaavat toisiaan.",
      record: "Kirjoita työviikon 2 merkintään, mitä jätit pienimmän toimivan version ulkopuolelle ja miksi, minkä vaihtoehdon valitsit Unity-projektien vertailussa ja millä kahdella syyllä, mitkä kortit teet ensin ja mitkä asiat jäivät avoimiksi. Näyttömatriisin rivit: asiakkaan tarpeiden selvittäminen (s1), tehtävistä sopiminen (p8), ratkaisuvaihtoehtojen vertailu (p9), tärkeysjärjestys (s4), toimintojen jakaminen tehtäviksi (s5), tehtävien suunnittelu ja arviointi (s6) ja pelin suunnittelu ennen toteutusta (k5).",
      skills: ["tärkeysjärjestys ja rajaus (s4)", "toimintojen jakaminen tehtäviksi ja tuntiarviot (s5, s6)", "tehtävistä sopiminen ohjaajan kanssa (p8)", "ratkaisuvaihtoehtojen vertailu (p9)", "asiakkaan tarpeiden tarkentaminen (s1)"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "2-1": {
          miksi: "Kun kirjoitat jokaiselle pelille pienimmän toimivan version, tiedät, milloin peli on valmis ja voit siirtyä seuraavaan. Jos et rajaa pelejä, käytät helposti koko projektin yhden pelin hiomiseen, eikä kahdelle muulle jää aikaa.",
          osat: [
            ["Valitse kolme aihetta", "Valitse toimeksiannon aiheista kolme tai ehdota omia, jotka ovat yhtä laajoja. Asiakkaat vahvistavat aiheet, kun lähetät ne heille tämän viikon viimeisessä työvaiheessa."],
            ["Kuvaa päämekaniikka ja tavoite", "Kirjoita suunnitelmalomakkeelle jokaisesta pelistä, mitä pelaaja tekee yhä uudelleen ja mihin hän pyrkii. Päämekaniikka on pelin tärkein toiminto, esimerkiksi hyppy."],
            ["Kuvaa kierroksen kulku", "Kirjoita, miten kierros alkaa, miten se päättyy ja miten pelaaja aloittaa uudelleen. Yhden kierroksen pitää kestää noin 1–3 minuuttia."],
            ["Kirjoita pienin toimiva versio", "Kirjoita jokaiselle pelille pienin toimiva versio yhdellä virkkeellä. Se on pelin ensimmäinen muoto, jossa päämekaniikka, tavoite ja kierroksen loppu toimivat. Katso tehtävän esimerkki."],
            ["Kirjoita, mitä jätät pois", "Kirjoita suunnitelmalomakkeelle vähintään kolme houkuttelevaa lisäystä, joita et tee."],
            ["Tallenna suunnitelma", "Lataa lomakkeelta `suunnitelma.md` ja tallenna se polkuun `project-docs/suunnitelma.md`. Tee commit ja push."]
          ],
          valmis: "Suunnitelmassa on jokaisesta pelistä päämekaniikka, tavoite, kierroksen kulku ja pienin toimiva versio sekä vähintään kolme asiaa, jotka jätät pois.",
          tallenna: "`project-docs/suunnitelma.md` repositoryyn.",
          sanat: ["päämekaniikka", "ydinsilmukka", "pienin toimiva versio"],
          esimerkki: "Pienin toimiva versio: ”Pelaaja liikkuu ja hyppää yhdessä kentässä, kerää viisi esinettä ja pääsee maaliin. Jos pelaaja osuu piikkiin, hän palaa lähtöön.”",
          eiRiita: "”Hauska tasohyppely, jossa on monta kenttää ja hienot grafiikat.” Kuvauksesta ei selviä, mihin pelaaja pyrkii, miten kierros päättyy tai mitä peliin ei tehdä."
        },
        "2-2": {
          miksi: "Voit tehdä jokaisen pelin omaan Unity-projektiinsa tai kaikki kolme peliä samaan projektiin, jossa jokaisella pelillä on oma kansio. Päätä se nyt, koska pelien siirtäminen projektista toiseen myöhemmin vie paljon aikaa. Mieti valintaa myös musiikkikurssin opiskelijoiden kannalta, sillä he avaavat pelit omilla koneillaan ja lisäävät niihin musiikit ja äänet.",
          osat: [
            ["Ota aikaa, kuinka kauan avaaminen kestää", "Kloonaa repositorysi uuteen kansioon ja avaa sieltä Kokeilu-projekti Unity Hubissa. Ota aikaa, kuinka kauan menee, ennen kuin editori on valmis käyttöön."],
            ["Tee vertailutaulukko", "Luo päätösloki eli tiedosto `project-docs/paatokset.md`, johon kirjaat projektin päätökset. Kopioi siihen taulukkopohja kohdasta ”Tarvitsen apua tähän työvaiheeseen” ja kirjoita mittaamasi aika taulukon yläpuolelle."],
            ["Vastaa vertailun kysymyksiin", "Vastaa taulukossa jokaiseen kysymykseen sekä yhden että kolmen projektin kohdalla: Kuinka helposti musiikkikurssin opiskelija saa yhden pelin auki? Miten saat saman alkuvalikon kaikkiin peleihin? Montako buildia eli pelattavaa versiota teet luovutukseen?"],
            ["Päätä ja perustele kahdella syyllä", "Valitse vaihtoehto. Kirjoita päätöslokiin päivämäärä, valintasi ja kaksi syytä, jotka perustuvat vastauksiisi. Kirjoita valinta myös suunnitelmalomakkeelle."],
            ["Päätä, miten nimeät tiedostot", "Kirjoita suunnitelmalomakkeen kenttään ”Scenejen, skriptien ja resurssien nimeäminen”, miten nimeät tiedostot ja kansiot. Esimerkiksi skriptin nimi kertoo, mitä se tekee: PlayerJump tai GoalTrigger."],
            ["Näytä päätös ohjaajalle", "Käy päätös ja syyt läpi ohjaajan kanssa. Jos ohjaaja ei vielä vahvista päätöstä, merkitse se päätöslokiin avoimeksi asiaksi ja jatka valitsemallasi tavalla."]
          ],
          valmis: "Päätöslokissa on mittaamasi aika, vertailutaulukko vastauksineen, päätös päivämäärineen ja kaksi syytä, ja olet näyttänyt päätöksen ohjaajalle.",
          tallenna: "`project-docs/paatokset.md` repositoryyn.",
          esimerkki: "”Valitsin kolme erillistä projektia. Syy 1: musiikkikurssin opiskelija avaa vain sen pelin, johon hän tekee musiikin. Kokeiluprojektin avaaminen kesti minulla jo 2 min 10 s, ja kolmen pelin projekti olisi isompi. Syy 2: teen joka tapauksessa jokaisesta pelistä oman buildin, joten erilliset projektit eivät lisää buildien määrää.”",
          eiRiita: "”Erilliset projektit ovat selkeämpiä.” Perustelusta ei näe, mikä on selkeämpää ja kenelle. Siinä ei ole mittaamaasi aikaa eikä vastauksia vertailun kysymyksiin.",
          apu: {
            title: "Vertailun apu",
            vinkit: [
              "Uuteen kansioon kloonattu projekti aukeaa ensimmäisellä kerralla hitaasti, koska Unity rakentaa ensin Library-kansion eli välimuistin. Musiikkikurssin opiskelija odottaa yhtä kauan, kun hän avaa pelin ensimmäistä kertaa.",
              "Yhdessä projektissa jokainen peli on omassa kansiossaan Assets-kansion alla. Build Profiles -ikkunassa valitset, mitkä scenet tulevat kuhunkin buildiin.",
              "Erillisissä projekteissa avaat ja kokoat jokaisen pelin erikseen. Saman alkuvalikon saat muihin peleihin, kun viet sen prefabina eli valmiina osana toiseen projektiin."
            ],
            code: "## Päätös: yksi vai kolme Unity-projektia (PÄIVÄMÄÄRÄ)\n\nKokeiluprojektin avaaminen uudesta kansiosta kesti: AIKA\n\n| Kysymys | Yksi projekti, jossa on kolme peliä | Kolme erillistä projektia |\n| --- | --- | --- |\n| Kuinka helposti musiikkikurssin opiskelija saa yhden pelin auki? Käytä mittaamaasi aikaa. | | |\n| Miten saat saman alkuvalikon kaikkiin peleihin? | | |\n| Montako buildia teet luovutukseen? | | |\n\nPäätös: VAIHTOEHTO\nSyy 1: SYY\nSyy 2: SYY\nOhjaajan vahvistus: vahvistettu / avoin asia"
          }
        },
        "2-3": {
          miksi: "Kun teet suunnitelmasta kortit, näet, mitä sinun pitää tehdä ja missä järjestyksessä. Työviikolla 6 vertaat tuntiarvioitasi siihen, kauanko työ oikeasti kesti, ja näet, kuinka hyvin osaat arvioida työmäärää.",
          osat: [
            ["Valitse ensimmäinen peli", "Valitse, minkä kolmesta pelistä teet ensin. Valitse se, jonka päämekaniikka on sinulle selvin, niin pääset alkuun nopeasti."],
            ["Jaa peli toiminnoiksi", "Jaa ensimmäisen pelin pienin toimiva versio erillisiksi toiminnoiksi, esimerkiksi liike, hyppy, kerättävä esine, este, maali, alkuvalikko ja loppuruutu."],
            ["Järjestä toiminnot tärkeysjärjestykseen", "Laita listan alkuun päämekaniikka, sitten kierroksen loppu ja vasta sen jälkeen valikot ja grafiikat. Silloin saat pelattavan version mahdollisimman aikaisin."],
            ["Tee kortit", "Tee jokaisesta toiminnosta kortti tehtävätauluun. Kirjoita korttiin tavoite ja valmis kun -ehto eli se, mitä pelissä näkyy, kun toiminto toimii."],
            ["Arvioi työtunnit", "Kirjoita jokaiseen korttiin, montako tuntia arvioit työhön menevän. Työviikolla 6 vertaat arviota tunteihin, jotka kirjaat työaikataulukkoon."]
          ],
          valmis: "Ensimmäisen pelin jokaisella toiminnolla on kortti, jossa on tavoite, valmis kun -ehto ja tuntiarvio, ja kortit ovat siinä järjestyksessä, jossa aiot tehdä ne.",
          tallenna: "Kuvakaappaus taulusta polkuun `project-docs/tyonaytteet/viikko-2/kortit.png`.",
          esimerkki: "”Maali päättää kierroksen – valmis kun: pelaaja koskettaa lippua ja ruutuun tulee loppuviesti – arvio 3 h.”",
          eiRiita: "”Tasohyppely – 40 h.” Kun koko peli on yhdessä kortissa, et näe, mitä teet ensin, etkä huomaa ajoissa, jos jokin osa vie arvioitua enemmän aikaa."
        },
        "2-4": {
          miksi: "Ohjaaja on tiimisi toinen jäsen, ja sovit hänen kanssaan, mitä teet ja missä järjestyksessä. Osasta asioista päättävät asiakkaat tai ohjaaja, esimerkiksi pelien aiheista ja siitä, millä koneilla pelejä pelataan. Kun pyydät vastaukset nyt, ehdit muuttaa suunnitelmaa ennen kuin olet kirjoittanut paljon koodia.",
          osat: [
            ["Listaa vahvistettavat asiat", "Katso suunnitelmalomakkeelta kohdat, jotka asiakkaiden tai ohjaajan pitää vahvistaa: pelien aiheet, pelialusta, tekoälyn käyttö, repositoryn julkisuus, lisenssi, tutkinnon perusteet ja asiakaskokeilujen ajat."],
            ["Lähetä aiheet asiakkaille", "Lähetä asiakkaille kolmen pelin kuvaukset. Käytä viestipohjaa kohdasta ”Tarvitsen apua tähän työvaiheeseen”. Kysy, sopivatko aiheet musiikkikurssille ja millä koneilla kurssilla pelataan."],
            ["Käy suunnitelma läpi ohjaajan kanssa", "Näytä viikkotarkistuksessa eli viikoittaisessa tapaamisessa ohjaajalle suunnitelma ja Unity-projekteja koskeva päätös. Käy samalla läpi muut vahvistettavat asiat."],
            ["Sovi korttien järjestys", "Näytä ohjaajalle ensimmäisen pelin kortit tuntiarvioineen. Sovi yhdessä, missä järjestyksessä teet ne ja mitkä kortit teet työviikolla 3. Siirrä kortit sovittuun järjestykseen."],
            ["Kirjaa vastaukset", "Kirjoita saamasi vastaukset suunnitelmalomakkeelle ja päätöslokiin. Jätä tyhjiksi kentät, joihin et vielä saanut vastausta. Lomake merkitsee ne avoimiksi asioiksi, ja voit jatkaa työtä."],
            ["Tallenna päivitetty suunnitelma", "Lataa `suunnitelma.md` lomakkeelta uudelleen ja tallenna se polkuun `project-docs/suunnitelma.md`. Tee commit ja push."]
          ],
          valmis: "Ohjaaja on nähnyt suunnitelman ja korttien järjestyksen, olet lähettänyt aiheet asiakkaille, ja jokainen vahvistettava asia on suunnitelmassa joko vastattuna tai avoimena asiana.",
          tallenna: "Päivitetty `project-docs/suunnitelma.md` ja päätöslokin merkintä siitä, milloin lähetit viestin asiakkaille.",
          apu: {
            title: "Viestipohja asiakkaille",
            code: "Hei Caito ja Toni,\n\nsuunnittelen pelimusiikin kurssille kolme pientä peliä:\n1. PELIN NIMI: MITÄ PELAAJA TEKEE JA MIHIN HÄN PYRKII.\n2. PELIN NIMI: MITÄ PELAAJA TEKEE JA MIHIN HÄN PYRKII.\n3. PELIN NIMI: MITÄ PELAAJA TEKEE JA MIHIN HÄN PYRKII.\n\nHaluaisin kysyä kaksi asiaa:\n- Sopivatko nämä aiheet kurssin harjoituksiin?\n- Pelataanko pelejä kurssilla Windows-koneilla, Maceilla vai selaimessa?\n\nTerveisin NIMI",
            vinkit: [
              "Jos vastausta ei tule viikon loppuun mennessä, kerro siitä ohjaajalle ja jatka suunnitelman mukaan. Asia on avoin, kunnes vastaus tulee.",
              "Pidä tehtävätaulu auki viikkotarkistuksessa, niin voit siirtää kortit sovittuun järjestykseen heti."
            ]
          }
        }
      }
    },

    3: {
      type: "pohjustus",
      feature: "Ensimmäisen pelin kokeilukentässä voi kokeilla päämekaniikkaa, ja kokeiluversio käynnistyy sovitulla alustalla ilman Unity-editoria.",
      connection: "Työviikolla 2 päätit, mitä teet ja missä järjestyksessä. Nyt aloitat ensimmäisen pelin: teet projektin kansiot, kokeilukentän ja päämekaniikan ja kokeilet, että peli toimii myös ilman Unityä. Kun nämä ovat valmiina, voit työviikolla 4 keskittyä siihen, miten kierros päättyy.",
      deliverable: "Projektirakenne, ensimmäisen pelin kokeilukenttä, päämekaniikka pseudokoodeineen, koottu kokeiluversio ja selitä ja muuta -merkintä.",
      why: "Jos teet buildin ensimmäisen kerran vasta projektin lopussa, et ehdi korjata ongelmia, jotka tulevat vastaan vain buildissa. Alustan ongelmat on helpompi korjata nyt, kun pelissä on vielä vähän koodia.",
      done: "Käynnistä koottu kokeiluversio ilman Unity-editoria ja kokeile kokeilukentässä kaikkia päämekaniikan osia. GitHubin historiassa on commit jokaisesta osasta.",
      record: "Kirjoita työviikon 3 merkintään päämekaniikan osat, yhden osan pseudokoodi ja miten kokeilit sitä. Kerro myös, huomasitko eroja editorin ja buildin välillä, mitä ohjaaja pyysi muuttamaan ja mitä et vielä osannut selittää. Näyttömatriisin rivit: kehitysympäristön käyttö (p1), ympäristön käyttöönotto ja asetukset (k1), rakenteinen ohjelmointi (p4), toimintojen toteuttaminen suunnitelmasta (p7) ja oman toiminnan arviointi (p11).",
      skills: [
  "kehitysympäristön käyttöönotto ja asetukset (p1, k1)",
  "suunnitelmasta koodiksi: pseudokoodi (p7)",
  "päämekaniikan ohjelmointi (p4)",
  "oman koodin selittäminen ja muuttaminen (p11)"
],
      tehtavat: {
        "3-1": {
          miksi: "Teet nyt kansiot, joihin tallennat ensimmäisen pelin scenet, skriptit ja kuvat. Kun kansiot ja nimet ovat selkeät alusta asti, löydät omat tiedostosi nopeasti, ja musiikkikurssin opiskelijat löytävät ne myöhemmin ilman sinua.",
          osat: [
            ["Luo ensimmäisen pelin projekti", "Luo repositoryyn Unity-projekti työviikon 2 päätöksen mukaan: joko ensimmäisen pelin oma projekti tai kolmen pelin yhteinen projekti. Käytä ohjaajan antamaa Unity-versiota ja 2D-pohjaa, esimerkiksi Universal 2D."],
            ["Lisää .gitignore", "Kopioi Kokeilu-kansion .gitignore uuden Unity-projektin kansioon, Assets-kansion viereen. Muuten Unityn väliaikaiset tiedostot menevät versionhallintaan."],
            ["Tarkista versionhallinnan asetukset", "Avaa Edit-valikosta Project Settings. Tarkista Editor-kohdasta, että Asset Serialization Mode on Force Text, ja Version Control -kohdasta, että Mode on Visible Meta Files."],
            ["Luo kansiot", "Luo pelin Assets-kansioon kansiot Scenes, Scripts, Prefabs ja Art. Nimeä tiedostot suunnitelmasi nimeämissäännön mukaan, esimerkiksi niin, että skriptin nimi kertoo, mitä skripti tekee."],
            ["Kirjoita rakenne README-tiedostoon", "Kirjoita repositoryn `README.md`-tiedostoon kansiorakenne ja Unity-versio. Tee commit ja push."]
          ],
          valmis: "Ensimmäisen pelin projekti aukeaa Unity Hubista ohjaajan antamalla versiolla, Changes-listassa ei ole Library- tai Temp-kansioita, ja README kertoo rakenteen.",
          tallenna: "Commit, jossa on projektirakenne, ja päivitetty `README.md` repositoryyn.",
          apu: {
            title: "Kaksi sallittua rakennetta",
            tree: "Vaihtoehto A: kolme erillistä projektia\nprotopaja/\n├─ Tasohyppely/        Unity-projekti ja oma .gitignore\n├─ Pulmapeli/          (työviikolla 7)\n├─ Toimintapeli/       (työviikolla 10)\n├─ docs/               ohjeet asiakkaille\n├─ project-docs/       suunnitelma, päätösloki, testit ja palautteet\n└─ README.md\n\nVaihtoehto B: yksi projekti, jossa on kolme peliä\nprotopaja/\n├─ ProtoPaja/          Unity-projekti ja .gitignore\n│  └─ Assets/\n│     ├─ Yhteiset/     alkuvalikon prefab ja fontit\n│     ├─ Tasohyppely/  Scenes, Scripts, Prefabs, Art\n│     ├─ Pulmapeli/\n│     └─ Toimintapeli/\n├─ docs/\n├─ project-docs/\n└─ README.md",
            vinkit: [
              "Force Text on uusissa Unity-versioissa valmiiksi valittuna. Kun asetus on päällä, Unity tallentaa scenet tekstinä, jota Git osaa vertailla.",
              ".meta-tiedostot kuuluvat versionhallintaan. Jos ne puuttuvat ja avaat projektin toisella koneella, scenestä puuttuu kuvia ja skriptejä.",
              "Voit poistaa Kokeilu-kansion, kun siivoat projektia luovutusta varten työviikolla 15. Sen commitit jäävät silti historiaan työnäytteeksi."
            ]
          }
        },
        "3-2": {
          miksi: "Kokeilukenttä on yksinkertainen scene, jossa voit kokeilla päämekaniikkaa ennen kuin teet oikean kentän ja grafiikat. Kun jaat päämekaniikan pieniin osiin ja teet niistä kortit, voit ohjelmoida ja kokeilla yhden osan kerrallaan.",
          osat: [
            ["Luo kokeilukentän scene", "Luo pelin Scenes-kansioon uusi scene nimeltä Kokeilukentta. Scene on Unityn näkymä tai taso, esimerkiksi pelikenttä."],
            ["Rakenna kenttä", "Lisää sceneen lattia ja muutama este neliöinä (GameObject, 2D Object, Sprites ja Square). Lisää niihin Box Collider 2D -komponentti, jotta pelaaja ei putoa niiden läpi."],
            ["Lisää pelaaja", "Lisää pelaajaksi yksi neliö ja siihen komponentit Rigidbody 2D ja Box Collider 2D. Rigidbody 2D lisää pelaajaan painovoiman. Tallenna scene, tee commit ja push."],
            ["Jaa päämekaniikka osiin", "Jaa päämekaniikka osiin, jotka voit ohjelmoida ja kokeilla yksi kerrallaan. Tasohyppelyssä esimerkiksi osa 1 on liike sivuttain ja osa 2 hyppy."],
            ["Tee osista kortit", "Tee jokaisesta osasta kortti tehtävätauluun. Kirjoita korttiin odotettu tulos: mitä pelaaja tekee ja mitä ruudulla silloin tapahtuu."]
          ],
          valmis: "Kokeilukenttä on repositoryssa, pelaaja putoaa lattialle Play-tilassa, ja tehtävätaulussa on kortti jokaisesta päämekaniikan osasta odotettuine tuloksineen.",
          tallenna: "Kentän commit repositoryyn ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-3/kortit.png`.",
          sanat: ["GameObject", "komponentti"]
        },
        "3-3": {
          miksi: "Kirjoitat nyt ensimmäisen C#-skriptin omaan peliisi. Kun suunnittelet toiminnon ensin pseudokoodina eli tavallisella kielellä, tiedät ennen koodaamista, mitä tietoa tarvitset ja millä ehdolla asia tapahtuu. Silloin koodin kirjoittaminen on helpompaa ja löydät virheet nopeammin.",
          osat: [
            [
  "Suunnittele ennen koodia",
  "Kirjoita korttiin vastaukset neljään kysymykseen: Mitä tietoa tarvitset? Mikä käynnistää toiminnon? Millä ehdolla se tapahtuu? Mitä muuttuu? Kirjoita vastauksista lyhyt pseudokoodi ja ennuste siitä, mitä Play-tilassa tapahtuu."
],
            ["Luo skripti", "Luo Scripts-kansioon C#-skripti, jonka nimi kertoo, mitä se tekee, esimerkiksi PlayerMovement tai PlayerJump."],
            ["Kirjoita toiminto", "Kirjoita skriptiin päämekaniikan ensimmäinen osa. Kohdassa ”Tarvitsen apua tähän työvaiheeseen” on koodipohja, jonka TODO-kohdat täytät itse."],
            ["Liitä skripti pelaajaan", "Valitse pelaaja ja vedä skripti Scripts-kansiosta Inspector-ikkunaan. Tallenna scene."],
            ["Kokeile Play-tilassa", "Kokeile osaa ja vertaa tulosta kortin odotettuun tulokseen. Korjaa koodia, kunnes peli toimii niin kuin kortissa lukee."],
            ["Tee loput osat samalla tavalla", "Tee päämekaniikan seuraava osa, esimerkiksi hyppy, samoilla askelilla: ensin pseudokoodi ja ennuste, sitten skripti ja kokeilu."],
            ["Tee commit ja push", "Tee commit jokaisesta toimivasta osasta. Kirjoita viestiin, mitä osa tekee, ja paina Push origin. Siirrä kortti Testattavana-sarakkeeseen."]
          ],
          valmis: "Päämekaniikan osat toimivat Play-tilassa korttien odotettujen tulosten mukaan, ja jokaisesta osasta on commit historiassa.",
          tallenna: "Commit-linkit tehtävätaulun kortteihin ja päiväkirjaasi.",
          sanat: ["C#-skripti", "pseudokoodi"],
          esimerkki: "Pseudokoodi: ”Kun vasen nuoli on pohjassa, suunta on −1. Kun oikea nuoli on pohjassa, suunta on 1. Muuten suunta on 0. Vaakanopeus on suunta kertaa nopeus.” Ennuste: kun päästän irti, pelaaja pysähtyy.",
          eiRiita: "Pseudokoodi ”Pelaaja liikkuu nuolilla.” Siitä ei näe, mitä tietoa koodi käyttää, millä ehdolla pelaaja liikkuu ja mitä silloin muuttuu.",
          apu: {
            title: "Koodipohja: liike sivuttain",
            code: "using UnityEngine;\nusing UnityEngine.InputSystem;\n\n// Liitä pelaajaan. Pelaajalla pitää olla Rigidbody 2D -komponentti.\npublic class PlayerMovement : MonoBehaviour\n{\n    [SerializeField] private float speed = 5f;   // säädettävissä Inspectorissa\n    private Rigidbody2D body;\n\n    void Awake()\n    {\n        body = GetComponent<Rigidbody2D>();\n    }\n\n    void Update()\n    {\n        float direction = 0f;\n        // TODO: aseta direction arvoon -1, kun vasen nuolinäppäin on painettuna,\n        //       ja arvoon 1, kun oikea nuolinäppäin on painettuna.\n        //       Vihje: Keyboard.current.leftArrowKey.isPressed\n\n        // TODO: aseta vaakanopeus ja säilytä pystynopeus:\n        //       body.linearVelocity = new Vector2(direction * speed, body.linearVelocity.y);\n    }\n}",
            vinkit: [
              "`[SerializeField]` näyttää yksityisen kentän Inspectorissa, joten voit säätää nopeutta muuttamatta koodia.",
              "Pohja käyttää Input System -pakettia, joka on uusien Unity 6 -projektien oletus. Asetus on kohdassa Project Settings, Player, Active Input Handling.",
              "Vanhemmissa Unity-versioissa `linearVelocity` on nimeltään `velocity`.",
              "Hyppy: lisää pystynopeutta vain, kun pelaaja on maassa. Voit päätellä, onko pelaaja maassa, esimerkiksi metodeilla OnCollisionEnter2D ja OnCollisionExit2D."
            ],
            test: "Paina Play ja pidä nuolinäppäintä pohjassa: pelaaja liikkuu siihen suuntaan ja pysähtyy, kun päästät irti."
          }
        },
        "3-4": {
          miksi: "Peli voi toimia Unityssä mutta kaatua, kun siitä tehdään erillinen pelattava versio (build). Esimerkiksi jokin scene voi puuttua buildista. Kun teet buildin jo nyt, opit tekemään sen ja löydät virheet ennen kuin pelit pitää luovuttaa.",
          osat: [
            ["Avaa build-asetukset", "Avaa File-valikosta Build Profiles. Vanhemmissa Unity-versioissa sama ikkuna on nimeltään Build Settings."],
            ["Valitse alusta", "Valitse alusta, jolla musiikkikurssilla pelataan. Jos alustaa ei ole vielä vahvistettu, valitse oma käyttöjärjestelmäsi ja kirjoita valinta päätöslokiin."],
            ["Lisää scene", "Pidä kokeilukentän scene auki ja paina Build Profiles -ikkunan Scene List -kohdassa Add Open Scenes. Unity ottaa buildiin mukaan vain ne scenet, jotka ovat luettelossa."],
            ["Kokoa peli", "Paina Build. Luo Unity-projektin kansioon uusi kansio nimeltä `Builds` ja valitse se. Builds-kansio ei mene versionhallintaan, koska .gitignore jättää sen pois."],
            ["Käynnistä build", "Käynnistä koottu peli ilman editoria ja kokeile kaikkia päämekaniikan osia."],
            ["Kirjaa erot", "Kirjoita päätöslokiin alusta, build-asetukset ja jokainen ero, jonka huomasit editorin ja buildin välillä."]
          ],
          valmis: "Koottu kokeiluversio käynnistyy ilman Unity-editoria, ja kaikki päämekaniikan osat toimivat siinä.",
          tallenna: "Kuvakaappaus käynnissä olevasta buildista polkuun `project-docs/tyonaytteet/viikko-3/build.png` ja alustan tiedot päätöslokiin.",
          sanat: ["build"],
          apu: {
            title: "Kun build ei käynnisty",
            vinkit: [
              "Selaimessa toimivaa buildia ei voi avata tuplaklikkaamalla. Käytä Build And Run -painiketta, joka käynnistää paikallisen palvelimen.",
              "Jos build kaatuu tai jää mustaksi, katso Unityn Console-ikkunan virheet ja tarkista, että scene on Scene List -luettelossa.",
              "Jos ohjaaja siirtää tämän työvaiheen työviikolle 4, tee se ennen työviikon 4 testausta."
            ],
            test: "Sulje Unity kokonaan ja käynnistä peli Builds-kansiosta: pelaaja liikkuu."
          }
        },
        "3-5": {
          miksi: "Vaikka peli toimii, siitä ei näe, ymmärrätkö itse kirjoittamasi koodin. Kun selität koodin ohjaajalle ja muutat sitä hänen nähtensä, huomaat, mitä et vielä ymmärrä, ja ehdit harjoitella sitä ennen kuin koodia on paljon.",
          osat: [
            ["Valitse skripti", "Valitse skripti, jonka kirjoitit itse tällä viikolla. Tee tämä työvaihe viikkotarkistuksessa eli viikoittaisessa tapaamisessa ohjaajan kanssa. Pidä peli auki Unityssä."],
            ["Selitä ohjaajalle", "Selitä ilman muistiinpanoja, mitä skripti tekee: mitä tietoa se käyttää, mikä käynnistää toiminnon ja millä ehdolla."],
            ["Tee pyydetty muutos", "Ohjaaja pyytää pienen muutoksen, esimerkiksi uuden arvon tai ehdon. Tee muutos ja kokeile sitä Play-tilassa ohjaajan nähden."],
            ["Kirjaa tilanne", "Kirjoita tiedostoon `project-docs/selita-ja-muuta.md` päivämäärä, skriptin nimi, pyydetty muutos ja yksi asia, jota et vielä osannut selittää."],
            ["Katso, mistä sinulla on jo työnäyte", "Avaa sivuston Näyttömatriisi-näkymä ja rastita rivit, joihin sinulla on nyt työnäyte. Kirjoita samaan tiedostoon yksi vaatimus, josta työnäyte vielä puuttuu."],
            ["Tee commit ja push", "Tee muutoksesta ja merkinnästä commit ja paina Push origin."]
          ],
          valmis: "Olet selittänyt skriptisi ohjaajalle, pyydetty muutos toimii Play-tilassa, ja selitä ja muuta -tiedostossa on tämän viikon merkintä.",
          tallenna: "`project-docs/selita-ja-muuta.md` ja muutoksen commit-linkki päiväkirjaasi.",
          esimerkki: "”Työviikko 3: PlayerMovement.cs. Selitin, että direction saa arvon −1 tai 1 nuolinäppäimen mukaan ja vaakanopeus lasketaan siitä. Ohjaajan pyytämä muutos: pelaaja ei liiku, kun nopeus on nolla. En osannut selittää, miksi pystynopeus säilytetään. Työnäyte puuttuu vielä: testaa ohjelman toimintoja.”",
          eiRiita: "”Koodi liikuttaa pelaajaa.” Selityksestä ei näe, mitä tietoa koodi käyttää ja millä ehdolla pelaaja liikkuu."
        }
      }
    },

    /* ============ VAIHE 2: ENSIMMÄINEN PELI (4–6) ============ */
    4: {
      type: "feature",
      termit: ["T01"],
      feature: "Ensimmäistä peliä voi pelata alusta kierroksen päättymiseen asti, ja lopputulos näkyy ruudulla.",
      excerpt: "Pelaajan pitää ymmärtää, milloin kierros päättyy ja miten siinä kävi.",
      connection: "Työviikolla 3 kokeilit päämekaniikkaa pienessä kokeilukentässä. Nyt teet siitä kokonaisen kierroksen, jolla on alku ja loppu. Alkuvalikon ja oikeat grafiikat lisäät vasta työviikolla 5. Tällä viikolla keskityt siihen, että itse peli toimii.",
      deliverable: "Kierroksen lopun suunnitelma korttina ja pseudokoodina, kaksi skriptiä, jotka tunnistavat kierroksen lopun ja näyttävät loppuviestin, sekä testimatriisi, jossa ovat ensimmäiset testitapaukset T01 ja T02.",
      why: "Pelaaja ei voi pelata peliä loppuun, ennen kuin peli tunnistaa kierroksen lopun ja näyttää, miten kierroksessa kävi. Teet lopun ennen valikkoja ja grafiikoita, koska niitä ei kannata viimeistellä peliin, jonka kierros ei vielä toimi.",
      done: "Käynnistä peli Play-tilassa ja pelaa kierros loppuun asti. Loppuviesti kertoo oikein, miten kierroksessa kävi, eikä peli jatku normaalisti viestin jälkeen. Teet Uudelleen-painikkeen vasta työviikolla 5, joten tällä viikolla aloitat uuden kierroksen lopettamalla Play-tilan ja käynnistämällä sen uudelleen. Testimatriisissa ovat testitapausten T01 ja T02 tulokset, ja historiassa on commit kierroksen lopusta.",
      record: "Kirjoita työviikon 4 merkintään, miten peli tunnistaa kierroksen lopun, millaisen pseudokoodin kirjoitit ja mitä löysit, kun teit testitapaukset T01 ja T02. Näyttömatriisin rivit: toimintalogiikka (s7), rakenteinen ohjelmointi (p4), toiminnot suunnitelman mukaan (p7), Unityn tärkeimmät toiminnot (k3) ja testaus (p3).",
      skills: ["toimintalogiikka (s7)", "rakenteinen ohjelmointi suunnitelman mukaan (p4, p7)", "colliderit ja triggerit Unityssä (k3)", "testaus odotettua tulosta vasten (p3)"],
      tehtavat: {
        "4-1": {
          miksi: "Ennen kuin kirjoitat koodia, päätät, milloin kierros päättyy ja mitä pelaaja silloin näkee. Kun suunnitelma on valmis, tiedät, mitä skriptien pitää tehdä, ja huomaat helpommin, jos koodi tekee jotain muuta.",
          osat: [
            ["Valitse, milloin kierros päättyy", "Valitse suunnitelmastasi ensimmäisen pelin päättymisehto eli tilanne, jossa kierros loppuu. Esimerkiksi pelaaja koskettaa maalia tai osuu piikkiin."],
            ["Kirjoita, mitä ruudulla näkyy lopussa", "Kirjoita, mitä pelaaja tekee juuri ennen loppua ja mitä ruudulla sen jälkeen näkyy. Esimerkiksi teksti Maali! ilmestyy ja pelaaja pysähtyy."],
            ["Jaa toiminta kahteen skriptiin", "Yksi skripti huomaa, että kierros päättyy, esimerkiksi GoalTrigger. Toinen skripti näyttää loppuviestin ja pysäyttää pelin, esimerkiksi RoundManager. Kun skripti tekee vain yhden asian, löydät virheen helpommin."],
            ["Nimeä metodi, joka lopettaa kierroksen", "Metodi on skriptin nimetty toiminto. Ensimmäinen skripti kutsuu eli käynnistää toisen skriptin metodin, kun kierros päättyy. Anna metodille nimi, joka kertoo, mitä se tekee, esimerkiksi EndRound."],
            ["Tee kortit tehtävätauluun", "Tee tehtävätauluun kaksi korttia: yksi skriptistä, joka huomaa kierroksen lopun, ja yksi skriptistä, joka näyttää loppuviestin. Kirjoita kortteihin metodin nimi, odotettu tulos ja tuntiarvio."],
            ["Kirjoita pseudokoodi", "Vastaa kortteihin neljään kysymykseen: mitä tietoa skripti tarvitsee, mikä käynnistää toiminnon, millä ehdolla se tapahtuu ja mitä muuttuu. Kirjoita vastauksista lyhyt pseudokoodi eli koodin suunnitelma tavallisella suomella."],
            ["Kirjoita ennuste", "Kirjoita jokaiseen korttiin yksi ennuste eli se, mitä odotat näkeväsi, kun kokeilet skriptiä Play-tilassa. Tarkistat ennusteen, kun skripti on valmis."]
          ],
          valmis: "Tehtävätaulussa on kaksi korttia kierroksen lopusta. Korteissa ovat metodin nimi, odotettu tulos, tuntiarvio, pseudokoodi ja ennuste.",
          tallenna: "Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-4/kortit.png`.",
          esimerkki: "Pseudokoodi: ”Kun jokin koskettaa maalia ja se on pelaaja, kutsu EndRound. EndRound: jos kierros on jo päättynyt, älä tee mitään. Muuten merkitse kierros päättyneeksi, näytä teksti Maali! ja pysäytä peli.” Ennuste: kun pelaaja koskettaa maalia, teksti Maali! näkyy kerran.",
          eiRiita: "Pseudokoodi ”Kun pelaaja pääsee maaliin, peli loppuu.” Siitä ei näe, mikä huomaa maaliin pääsyn, millä ehdolla ja mitä ruudulla tapahtuu."
        },
        "4-2": {
          miksi: "Tässä työvaiheessa teet kierroksen lopusta koodia suunnitelmasi mukaan. Kokeilet skriptejä yksi kerrallaan, jotta tiedät virheen sattuessa, missä skriptissä vika on.",
          osat: [
            ["Valmistele maali", "Lisää maaliin Box Collider 2D -komponentti ja valitse siitä Is Trigger. Silloin collider eli törmäysmuoto ei pysäytä pelaajaa, vaan kertoo skriptille, kun pelaaja koskettaa maalia."],
            ["Kirjoita skripti, joka huomaa lopun", "Luo Scripts-kansioon skriptit GoalTrigger ja RoundManager apukohdan koodipohjista. Liitä GoalTrigger maaliin ja täytä sen TODO-kohdat pseudokoodisi mukaan. Kirjoita aluksi metodin kutsun tilalle Debug.Log-rivi, joka tulostaa viestin Console-ikkunaan."],
            ["Kokeile, huomaako skripti lopun", "Kokeile Play-tilassa: kun pelaaja koskettaa maalia, Console-ikkunaan tulostuu viestisi. Jos viestiä ei tule, lue vinkit kohdasta ”Tarvitsen apua tähän työvaiheeseen” ennen kuin jatkat."],
            ["Kirjoita skripti, joka lopettaa kierroksen", "Liitä RoundManager-skripti tyhjään GameObjectiin. Tee loppuviestille paneeli ja teksti, ja raahaa ne Inspectorissa skriptin kenttiin End Panel ja End Text. Täytä TODO-kohdat."],
            ["Kytke skriptit toisiinsa", "Valitse maali ja raahaa Hierarchy-ikkunasta GameObject, jossa RoundManager on, GoalTrigger-skriptin Round Manager -kenttään. Kirjoita sitten Debug.Log-rivin tilalle EndRound-metodin kutsu."],
            ["Varmista, ettei loppu toistu", "Kokeile Play-tilassa, että loppuviesti näkyy kerran ja pelaaja pysähtyy. Vertaa tulosta korttien ennusteisiin ja korjaa koodia, kunnes ne vastaavat toisiaan."],
            ["Tee commit ja push", "Tee commit, jonka viesti kertoo, mitä lisäsit, esimerkiksi ”Kierroksen loppu ja loppuviesti”. Paina Push origin ja siirrä kortit Testattavana-sarakkeeseen."]
          ],
          valmis: "Kierroksen loppu toimii Play-tilassa korttien odotettujen tulosten mukaan. Loppuviesti näkyy vain kerran, kierros ei jatku viestin jälkeen, ja commit on historiassa.",
          tallenna: "Commitin linkki kortteihin ja projektipäiväkirjaan.",
          sanat: ["collider", "UI"],
          apu: {
            title: "Koodipohjat: maali ja kierroksen loppu",
            code: "// Skripti 1, tiedosto GoalTrigger.cs. Liitä maaliin.\n// Maalissa on Box Collider 2D, jossa Is Trigger on valittu.\nusing UnityEngine;\n\npublic class GoalTrigger : MonoBehaviour\n{\n    [SerializeField] private RoundManager roundManager;   // raahaa Inspectorissa\n\n    void OnTriggerEnter2D(Collider2D other)\n    {\n        // TODO: jatka vain, jos koskettaja on pelaaja: other.CompareTag(\"Player\")\n        // TODO: kokeile ensin viestillä: Debug.Log(\"Maali\");\n        // TODO: kun viesti näkyy Console-ikkunassa, kutsu roundManager.EndRound(true);\n    }\n}\n\n// Skripti 2, oma tiedosto RoundManager.cs. Liitä tyhjään GameObjectiin.\nusing UnityEngine;\nusing TMPro;\n\npublic class RoundManager : MonoBehaviour\n{\n    [SerializeField] private GameObject endPanel;   // loppuviestin paneeli\n    [SerializeField] private TMP_Text endText;      // paneelin teksti\n    private bool roundOver;\n\n    public void EndRound(bool won)\n    {\n        // TODO: jos roundOver on jo true, palaa heti, jotta loppu ei käynnisty kahdesti\n        // TODO: aseta roundOver = true\n        // TODO: näytä paneeli: endPanel.SetActive(true);\n        // TODO: aseta teksti voiton tai häviön mukaan, esimerkiksi endText.text = \"Maali!\";\n        // TODO: pysäytä peli, esimerkiksi Time.timeScale = 0f;\n    }\n}",
            vinkit: [
              "Jokainen MonoBehaviour-luokka on omassa tiedostossaan, ja tiedoston nimi on sama kuin luokan nimi.",
              "Trigger toimii vain, jos pelaajalla tai maalilla on Rigidbody 2D -komponentti. Pelaajaan lisäsit sen jo työviikolla 3.",
              "Valitse pelaajalle tunniste Player Inspectorin yläreunan Tag-valikosta. Tunniste on valmiina listassa.",
              "Tyhjän GameObjectin saat GameObject-valikosta kohdasta Create Empty.",
              "Loppuviestin paneelin saat GameObject-valikosta kohdasta UI ja Panel. Lisää paneelin sisään teksti kohdasta UI ja Text - TextMeshPro. Piilota paneeli pelin alussa poistamalla rasti Inspectorin yläreunasta paneelin nimen vierestä.",
              "Kun Time.timeScale on 0, fysiikka ja aika pysähtyvät. Työviikolla 5 palautat arvon 1:ksi, kun uusi kierros alkaa."
            ],
            test: "Kävele maaliin: loppuviesti ilmestyy kerran, ja pelaaja pysähtyy."
          }
        },
        "4-3": {
          miksi: "Testimatriisi on taulukko, johon kirjoitat jokaisen testin: mitä teet, mitä odotat tapahtuvan ja mitä oikeasti tapahtui. Kun kirjoitat odotetun tuloksen ennen kuin kokeilet, huomaat myös pienet erot, jotka muuten jäisivät huomaamatta. Testimatriisi on työnäyte siitä, että osaat testata ohjelmaa.",
          osat: [
            ["Luo testimatriisi", "Luo tiedosto `project-docs/testimatriisi.md` ja kopioi siihen pohja kohdasta ”Tarvitsen apua tähän työvaiheeseen”. Käytät samaa tiedostoa koko projektin ajan kaikkien pelien testeihin."],
            ["Kirjoita odotetut tulokset ensin", "Kirjoita testitapaukset T01 ja T02 ennen kuin kokeilet peliä. Testitapaus T01 on onnistunut kierros. Testitapaus T02 on tilanne, jossa pelaaja on maalin vieressä mutta ei kosketa sitä."],
            ["Tee testit", "Tee testitapaukset Play-tilassa yksi kerrallaan. Kirjoita Havaittu tulos -sarakkeeseen, mitä oikeasti tapahtui, ja Versio-sarakkeeseen sen commitin tunniste, jota testasit."],
            ["Tee virheistä kortit", "Jos havaittu tulos on eri kuin odotettu tulos, tee virheestä kortti tehtävätauluun. Kirjoita korttiin testitapauksen tunnus ja se, mitä tapahtui."],
            ["Korjaa ja testaa uudelleen", "Korjaa virhe ja tee korjauksesta commit. Tee sama testitapaus uudelleen ja kirjoita tulos Korjaus ja uusintatesti -sarakkeeseen."]
          ],
          valmis: "Testimatriisissa ovat testitapaukset T01 ja T02 odotettuine ja havaittuine tuloksineen. Jos virhe jäi korjaamatta, sen kortti on taulussa keskeneräisenä, ja olet pyytänyt apua ohjaajalta.",
          tallenna: "`project-docs/testimatriisi.md`, korjauscommit ja uusintatestin tulos repositoryyn.",
          sanat: ["T01"],
          esimerkki: "Testitapauksen T01 odotettu tulos: ”Kun pelaaja koskettaa lippua, teksti Maali! näkyy kerran ja pelaaja pysähtyy.”",
          eiRiita: "Odotettu tulos ”Toimii”. Kirjoita odotettu tulos ennen testiä niin tarkasti, että joku muukin voi katsoa pelistä, toteutuiko se.",
          apu: {
            title: "Testimatriisin pohja",
            code: "# Testimatriisi\n\n| Tunnus | Peli | Testin tekijä | Versio (commit) | Alkutilanne | Toiminta | Odotettu tulos | Havaittu tulos | Korjaus ja uusintatesti |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| T01 | PELIN NIMI | NIMI | COMMIT | Kierros alkaa lähtöpaikasta | Pelaaja kävelee maaliin | Teksti Maali! näkyy kerran ja pelaaja pysähtyy | KIRJOITA TESTIN JÄLKEEN | |",
            vinkit: [
              "Kirjoita Versio-sarakkeeseen sen commitin lyhyt tunniste, jota testasit. Tunniste on seitsemän merkin koodi, joka näkyy GitHub Desktopin History-välilehdellä, kun valitset commitin.",
              "Testin tekijä -sarakkeeseen kirjoitat itsesi. Työviikolla 9 toinen opiskelija testaa toisen pelisi, ja silloin sarakkeeseen tulee hänen nimensä."
            ]
          }
        }
      }
    },

    5: {
      type: "feature",
      feature: "Pelin voi käynnistää alkuvalikosta, pelata loppuun, aloittaa uudelleen ja palata alkuvalikkoon, ja pelin tapahtumista näkyy selkeä palaute.",
      excerpt: "Pelaajan pitää päästä peliin ja takaisin valikkoon ilman, että kukaan neuvoo vieressä.",
      connection: "Työviikolla 4 teit kierroksen, jonka lopun pelaaja näkee ruudulla. Nyt lisäät kierroksen ympärille alkuvalikon, uudelleenaloituksen ja palautteen, jotta joku muu kuin sinä voi pelata peliä. Teet valikot omassa haarassa eli repositoryn erillisessä työversiossa, jotta päähaarassa on koko ajan toimiva peli. Valikosta teet prefabin, jonka voit myöhemmin lisätä kahteen muuhun peliin.",
      deliverable: "Alkuvalikko ohjausohjeineen, uudelleenaloitus, paluu alkuvalikkoon ja palaute ruudulla, jotka olet tehnyt omassa haarassa ja yhdistänyt päähaaraan, sekä grafiikkapaketti ja `docs/assetit-ja-lisenssit.md`.",
      why: "Asiakkaat kokeilevat peliä työviikolla 6 ilman, että neuvot heitä. Siksi pelin pitää alkaa valikosta, jossa on ohje, ja pelaajan pitää päästä aloittamaan uudelleen ilman Unity-editoria.",
      done: "Aloita alkuvalikosta, lue ohje ja pelaa kierros loppuun. Paina Uudelleen, pelaa kierros taas loppuun ja palaa Alkuvalikkoon. Toista tämä kolme kertaa peräkkäin ilman virhettä. Jokaisesta tärkeästä tapahtumasta, esimerkiksi esineen keräämisestä tai osumasta, näkyy palaute ruudulla, koska pelissä ei ole ääniä. Päähaaran historiassa on commit, jossa yhdistit valikot-haaran päähaaraan.",
      record: "Kirjoita työviikon 5 merkintään, miten teit valikot ja palautteen, miksi valitsit juuri sen palautteen, miten haaran yhdistäminen päähaaraan onnistui ja mitä löysit, kun testasit useita kierroksia peräkkäin. Näyttömatriisin rivit: käyttöliittymä (p6), ulkoiset komponentit (k4), osan liittäminen olemassa olevaan versioon eli haara ja yhdistäminen (s13) ja testaus (p3).",
      skills: ["käyttöliittymä suunnitelman mukaan (p6)", "ulkoiset komponentit ja assetit (k4)", "haara ja yhdistäminen päähaaraan (s13)", "toistuvien kierrosten testaus (p3)"],
      tehtavat: {
        "5-1": {
          miksi: "Alkuvalikko on ensimmäinen asia, jonka asiakkaat näkevät pelistä, ja palautteesta pelaaja ymmärtää, mitä pelissä tapahtuu. Kun päätät ensin, mitä valikoissa lukee ja mistä tapahtumista pelaaja saa palautteen, voit rakentaa ne kerralla etkä joudu tekemään niitä uudelleen.",
          osat: [
            ["Kirjoita ohjausohje", "Kirjoita pelin ohjausohje enintään neljällä rivillä: mitä näppäimiä pelaaja käyttää ja mikä on pelin tavoite. Tämä teksti tulee alkuvalikkoon."],
            ["Piirrä pelin kolme ruutua", "Piirrä paperille kolme ruutua: alkuvalikko, peliruutu ja loppuruutu. Merkitse jokaiseen ruutuun sen painikkeet ja piirrä nuoli siihen ruutuun, johon painike vie."],
            ["Valitse, mistä pelaaja saa palautetta", "Listaa tapahtumat, joista pelaajan pitää nähdä palaute ruudulla, esimerkiksi kerätty esine, osuma ja jäljellä olevien esineiden määrä. Kirjoita jokaisen viereen, miltä palaute näyttää."],
            ["Tee kortit tehtävätauluun", "Tee tehtävätauluun kaksi korttia. Ensimmäisessä on alkuvalikko ja paluu alkuvalikkoon, toisessa uudelleenaloitus ja palaute. Kirjoita kortteihin odotettu tulos ja tuntiarvio."],
            ["Kirjoita pseudokoodi", "Vastaa kortteihin samoihin neljään kysymykseen kuin työviikolla 4: mitä tietoa skripti tarvitsee, mikä käynnistää toiminnon, millä ehdolla se tapahtuu ja mitä muuttuu. Kirjoita vastauksista lyhyt pseudokoodi."]
          ],
          valmis: "Ohjausohje on kirjoitettu, kolmen ruudun piirroksessa näkyvät painikkeet ja nuolet, ja tehtävätaulussa on kaksi korttia odotettuine tuloksineen, tuntiarvioineen ja pseudokoodeineen.",
          tallenna: "Ohjausohje ja palautteen tapahtumat suunnitelmaan ensimmäisen pelin kuvaukseen. Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-5/kortit.png` ja valokuva ruutujen piirroksesta polkuun `project-docs/tyonaytteet/viikko-5/ruudut.jpg`."
        },
        "5-2": {
          miksi: "Teet valikot ja palautteen omassa haarassa. Haara (branch) on repositoryn erillinen työversio, jossa voit muuttaa peliä ilman, että päähaara (main) muuttuu. Näin päähaarassa on koko ajan toimiva peli, ja kun valikot ovat valmiit, yhdistät (merge) ne päähaaraan.",
          osat: [
            ["Tee uusi haara", "Tarkista GitHub Desktopissa, että Current Branch -kohdassa lukee main. Valitse Current Branch ja New Branch, anna nimeksi valikot ja paina Create Branch. Paina sitten Publish branch, jolloin haara näkyy myös GitHubissa."],
            ["Tee alkuvalikko", "Luo Scenes-kansioon alkuvalikolle oma scene ja lisää siihen pelin nimi, Aloita-painike ja ohjausohjeesi. Lisää scene Build Profiles -ikkunan Scene List -luetteloon ensimmäiseksi, jotta build alkaa alkuvalikosta."],
            ["Lisää uudelleenaloitus ja palaute", "Lisää työviikon 4 loppuruutuun painikkeet Uudelleen ja Alkuvalikkoon. Lisää pelikenttään suunnittelemasi palaute, esimerkiksi laskuri kerätyistä esineistä tai välähdys osuman kohdalla."],
            ["Kytke painikkeet", "Luo skripti MenuActions. Kopioi siihen koodipohja kohdasta ”Tarvitsen apua tähän työvaiheeseen” ja täytä TODO-kohdat pseudokoodisi mukaan. Liitä jokaisen painikkeen On Click -kohtaan oikea metodi: StartGame, Restart tai BackToMenu."],
            ["Tee valikoista prefabit", "Raahaa alkuvalikon Canvas ja loppuruudun paneeli Hierarchy-ikkunasta Project-ikkunan Prefabs-kansioon. Silloin niistä tulee prefabeja eli tallennettuja osia, jotka voit lisätä myöhemmin muihin peleihin."],
            ["Kokeile ja tee commit haaraan", "Kokeile Play-tilassa alkuvalikosta alkaen, että jokainen painike vie oikeaan paikkaan. Tee commit ja paina Push origin. Commit tallentuu valikot-haaraan, ei päähaaraan."],
            ["Yhdistä haara päähaaraan", "Tallenna scene ja sulje Unity. Valitse GitHub Desktopissa Current Branch ja sitten main. Valitse Branch-valikosta Merge into current branch, valitse valikot ja paina Create a merge commit. Paina lopuksi Push origin."]
          ],
          valmis: "Valikot, uudelleenaloitus ja palaute toimivat Play-tilassa alkuvalikosta alkaen. Alkuvalikko ja loppuruutu ovat prefabeina Prefabs-kansiossa, ja päähaaran historiassa on commit, jossa yhdistit valikot-haaran päähaaraan.",
          tallenna: "Linkki yhdistämisen commitiin (merge commit) korttiin ja projektipäiväkirjaan.",
          sanat: ["haara", "yhdistäminen", "prefab", "UI"],
          apu: {
            title: "Koodipohja: valikon ja loppuruudun painikkeet",
            code: "using UnityEngine;\nusing UnityEngine.SceneManagement;\n\n// Painikkeiden On Click kutsuu näitä metodeja.\npublic class MenuActions : MonoBehaviour\n{\n    [SerializeField] private string gameScene = \"PELIKENTÄN NIMI\";\n    [SerializeField] private string menuScene = \"ALKUVALIKON NIMI\";\n\n    public void StartGame()\n    {\n        // TODO: lataa pelikenttä: SceneManager.LoadScene(gameScene);\n    }\n\n    public void Restart()\n    {\n        // TODO: palauta aika: Time.timeScale = 1f;\n        // TODO: lataa nykyinen scene uudelleen:\n        //       SceneManager.LoadScene(SceneManager.GetActiveScene().name);\n    }\n\n    public void BackToMenu()\n    {\n        // TODO: palauta aika ja lataa alkuvalikko\n    }\n}",
            vinkit: [
              "Kun luot painikkeen GameObject-valikosta kohdasta UI ja Button - TextMeshPro, Unity lisää sceneen samalla Canvasin ja EventSystemin, jos niitä ei vielä ole. Canvas on pohja, jolle valikon osat tulevat.",
              "Jos painike ei reagoi, tarkista Hierarchy-ikkunasta, että scenessä on yksi EventSystem.",
              "Liitä MenuActions-skripti esimerkiksi Canvasiin. Raahaa Canvas painikkeen On Click -kohtaan ja valitse valikosta MenuActions ja oikea metodi.",
              "Palaute ruudulla voi olla esimerkiksi välähdys, kasvava teksti tai laskuri. Pelaajan pitää ymmärtää pelin tapahtumat ilman ääniä.",
              "Sulje Unity ennen kuin vaihdat haaraa. Kun vaihdat haaraa, GitHub Desktop vaihtaa projektikansion tiedostot sen haaran mukaisiksi. Jos Unity on silloin auki ja scene on tallentamatta, voit menettää muutoksia.",
              "Jos Changes-listassa on muutoksia, joista et ole tehnyt commitia, GitHub Desktop kysyy haaraa vaihtaessasi, mitä niille tehdään. Valitse Cancel, tee ensin commit ja vaihda haaraa vasta sitten.",
              "Älä tee commiteja päähaaraan sillä aikaa, kun valikot ovat kesken omassa haarassa. Silloin yhdistäminen onnistuu ilman ristiriitaa. Jos GitHub Desktop silti ilmoittaa ristiriidasta (conflict), älä jatka, vaan pyydä apua ohjaajalta.",
              "Vanhemmassa GitHub Desktopissa yhdistämisen painikkeessa lukee Merge valikot into main."
            ],
            test: "Aloita alkuvalikosta, pelaa loppuun ja paina Uudelleen: peli alkaa alusta eikä jää pysähdyksiin.",
            links: [["GitHub Docs: haarat GitHub Desktopissa (englanniksi)", "https://docs.github.com/en/desktop/making-changes-in-a-branch/managing-branches-in-github-desktop"], ["GitHub Desktop: ongelmatilanteet", "../ohjeet/github-desktop/?projekti=protopaja#ongelmat"]]
          }
        },
        "5-3": {
          miksi: "Kun käytät valmiita grafiikoita, sinulle jää enemmän aikaa ohjelmointiin. Tarkista käyttöehdot ennen kuin tuot kuvat peliin, koska luovutat pelit musiikkikurssille projekteina, joita muut avaavat ja muokkaavat. Jos käyttöehdot eivät salli grafiikoiden muokkaamista ja jakamista, joudut vaihtamaan ne myöhemmin.",
          osat: [
            ["Valitse grafiikkapaketti", "Valitse yhtenäinen grafiikkapaketti, esimerkiksi Kenneyn paketti, joka on julkaistu CC0-lisenssillä. Yhtenäinen tarkoittaa, että kaikki paketin kuvat ovat samaa tyyliä."],
            ["Lue käyttöehdot", "Lue paketin käyttöehdot eli lisenssi. Tarkista, saako grafiikoita käyttää, muokata ja jakaa osana Unity-projektia, jonka luovutat muille."],
            ["Kirjaa paketti assettiluetteloon", "Luo tiedosto `docs/assetit-ja-lisenssit.md`, johon kirjaat kaikki valmiit aineistot, ja kopioi siihen pohja kohdasta ”Tarvitsen apua tähän työvaiheeseen”. Kirjaa paketin nimi, lähde, tekijä, lisenssi ja se, mihin käytät paketin kuvia."],
            ["Tuo grafiikat peliin", "Tarkista ensin, että GitHub Desktopissa Current Branch on main. Tuo kuvat pelin Art-kansioon ja vaihda pelaajan, esteiden ja maalin yksinkertaiset muodot paketin kuviin."],
            ["Tarkista, että grafiikat sopivat yhteen", "Pelaa kierros ja tarkista, että grafiikat ovat samaa tyyliä ja pelaaja erottuu selvästi taustasta. Tee commit ja paina Push origin."]
          ],
          valmis: "Pelissä on yhtenäiset grafiikat, ja jokaisella tuodulla paketilla on rivi assettiluettelossa lähteineen ja lisensseineen.",
          tallenna: "`docs/assetit-ja-lisenssit.md` ja grafiikkacommit repositoryyn.",
          sanat: ["asset"],
          apu: {
            title: "Assettiluettelon pohja",
            code: "# Assetit ja lisenssit\n\n| Asset tai paketti | Lähde (osoite) | Tekijä | Lisenssi | Missä pelissä ja mihin |\n| --- | --- | --- | --- | --- |\n| PAKETIN NIMI | OSOITE | TEKIJÄ | LISENSSI | PELI: pelaaja ja laatat |",
            vinkit: [
              "CC0 tarkoittaa, että tekijä on luopunut oikeuksistaan: kuvia saa käyttää ja muokata vapaasti.",
              "Jos et ymmärrä paketin käyttöehtoja, älä käytä pakettia ennen kuin olet kysynyt ohjaajalta."
            ],
            links: [["Kenney: ilmaiset peligrafiikat", "https://kenney.nl/assets"], ["OpenGameArt", "https://opengameart.org/"]]
          }
        },
        "5-4": {
          miksi: "Uudelleenaloitus voi toimia ensimmäisellä kerralla mutta mennä rikki toisella tai kolmannella kierroksella. Esimerkiksi peli jää pysähdyksiin, jos Time.timeScale jää uuden kierroksen alussa nollaksi. Siksi testaat useita kierroksia peräkkäin.",
          osat: [
            ["Avaa peli päähaarasta", "Tarkista GitHub Desktopista, että Current Branch on main. Avaa projekti Unityssä ja käynnistä peli alkuvalikosta."],
            ["Kirjoita testitapaukset ennen testiä", "Kirjoita testimatriisiin testitapaukset T03–T06: alkuvalikko, uudelleenaloitus, paluu alkuvalikkoon ja palaute. Kirjoita jokaiselle odotettu tulos ennen kuin testaat."],
            ["Tee testit", "Tee testitapaukset Play-tilassa yksi kerrallaan ja kirjoita jokaisen havaittu tulos testimatriisiin."],
            ["Pelaa kolme kierrosta peräkkäin", "Pelaa kolme kierrosta peräkkäin: paina Uudelleen kaksi kertaa ja lopuksi Alkuvalikkoon. Kirjaa, jääkö peli pysähdyksiin tai näkyykö jokin kahdesti."],
            ["Korjaa ja testaa uudelleen", "Tee jokaisesta virheestä kortti, korjaa virhe ja tee korjauksesta commit. Tee samat testitapaukset uudelleen ja kirjaa tulos."]
          ],
          valmis: "Testimatriisissa ovat alkuvalikon, uudelleenaloituksen, paluun ja palautteen testitapaukset tuloksineen, ja pystyt pelaamaan kolme kierrosta peräkkäin ilman virhettä.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn.",
          esimerkki: "Testitapauksen T04 odotettu tulos: ”Kun painan loppuruudussa Uudelleen, pelaaja on lähtöpaikassa, laskuri näyttää 0 / 5 ja pelaaja liikkuu heti.”",
          eiRiita: "Odotettu tulos ”Uudelleen toimii”. Siitä ei näe, mitä ruudulla pitää näkyä, kun uusi kierros alkaa."
        }
      }
    },

    6: {
      type: "katselmointi",
      feature: "Asiakkaat ovat kokeilleet ensimmäistä peliä. Olet kirjannut heidän palautteensa, tehnyt korjauksista kortit ja kokeillut, osaako asiakas muuttaa pelin asetuksen ohjeesi avulla.",
      excerpt: "Haluamme kokeilla ensimmäistä peliä jo varhain, ennen kuin kaksi muuta tehdään samalla tavalla.",
      connection: "Ensimmäisessä pelissä on nyt valikko, kierros, loppu ja uudelleenaloitus. Asiakkaat kokeilevat sitä nyt, jotta voit käyttää heidän palautettaan, kun teet kaksi seuraavaa peliä. Mitä aiemmin kuulet asiakkaiden muutostoiveet, sitä vähemmän joudut muuttamaan myöhemmin.",
      deliverable: "Kokeiluversio, jolla on tag v0.1, tiedosto `project-docs/asiakaspalaute.md`, johon olet kirjannut palautteen ja asetuksen muuttamisen tuloksen, kortit palautteesta, vertailu tuntiarvioista ja toteutuneista tunneista sekä selitä ja muuta -merkintä.",
      why: "Jos et kysy asiakkailta nyt, teet kaksi seuraavaa peliä samalla tavalla kuin ensimmäisen. Jos olet ymmärtänyt jonkin asiakkaiden toiveen väärin, sama virhe on silloin kaikissa kolmessa pelissä.",
      done: "Avaa palautekirjaus ja tarkista: asiakkaan sanat ovat lainauksina, ja asiakas vahvisti ne oikeiksi, kun luit kirjauksen hänelle ääneen. Jokaisesta palautteen kohdasta, joka vaatii muutosta, on kortti tehtävätaulussa. Kirjauksesta näkyy, löysikö asiakas ohjeesi avulla oikean asetuksen Inspector-ikkunasta ja toimiko muutos Play-tilassa.",
      record: "Kirjoita työviikon 6 merkintään asiakkaiden tärkein palaute omin sanoin, onnistuiko asiakas muuttamaan asetuksen ohjeesi avulla ja mitä ohjeeseen pitää lisätä, suurin ero tuntiarvioidesi ja toteutuneiden tuntien välillä sekä mitä ohjaaja pyysi muuttamaan koodissasi. Näyttömatriisin rivit: asiakaslähtöinen viestintä (s2), katselmointi (s3), tärkeysjärjestys (s4), tuntiarviot ja toteuma (s6), versionhallinta ja tag v0.1 (s12), tehtävistä sopiminen ohjaajan kanssa (p8) ja oma toiminta: selitä ja muuta (p11).",
      skills: ["asiakaslähtöinen viestintä (s2)", "version katselmointi asiakkaiden kanssa (s3)", "tärkeysjärjestys ohjaajan kanssa (s4, p8)", "tuntiarviot ja toteutuneet tunnit (s6)", "versiomerkintä tag v0.1 (s12)", "oman koodin selittäminen (p11)"],
      tehtavat: {
        "6-1": {
          miksi: "Asiakkaat pelaavat peliä buildina eli erillisenä peliversiona, eivät Unity-editorissa. Merkitset version tagilla, jotta löydät myöhemmin juuri sen version, jota asiakkaat kokeilivat. Kun kirjoitat esittelyn, kysymykset ja ohjeen etukäteen, saat kokeilusta vastaukset siihen, mitä haluat tietää.",
          osat: [
            ["Tee pelistä build", "Tee ensimmäisestä pelistä build eli peliversio, jonka voi käynnistää ilman Unityä. Tee se sovitulle alustalle samalla tavalla kuin työviikolla 3 ja pelaa build alusta loppuun."],
            ["Merkitse kokeiluversio tagilla", "Tag on nimi, jonka kiinnität yhteen commitiin. Napsauta GitHub Desktopin History-välilehdellä hiiren kakkospainikkeella sitä commitia, josta teit buildin. Valitse Create Tag, anna nimeksi v0.1 ja paina Push origin."],
            ["Kirjoita esittely", "Luo tiedosto `project-docs/asiakaspalaute.md` ja kopioi siihen pohja kohdasta ”Tarvitsen apua tähän työvaiheeseen”. Kirjoita siihen enintään viiden virkkeen esittely ilman teknisiä sanoja: mikä peli on, mitä asiakkaat kokeilevat ja mitä haluat heiltä tietää."],
            ["Kirjoita kolme kysymystä", "Kirjoita kolme kysymystä, joihin haluat asiakkailta vastauksen. Esimerkiksi: Ymmärsitkö alkuvalikon ohjeesta, mitä pelissä pitää tehdä? Oliko kierros sopivan pituinen?"],
            ["Kirjoita ohje yhden asetuksen muuttamiseen", "Valitse asetus, jonka asiakas voi muuttaa Inspector-ikkunassa, esimerkiksi pelaajan nopeus, hypyn korkeus tai kierroksen kesto. Kirjoita enintään viiden rivin ohje: mistä asetus löytyy, miten sitä muutetaan ja miten muutosta kokeillaan."],
            ["Kokeile ohjetta itse", "Tee muutos itse pelkän ohjeesi avulla ja tarkista Play-tilassa, että muutos näkyy. Palauta asetus sen jälkeen alkuperäiseen arvoonsa."],
            ["Päätä, kuka kirjaa palautteen", "Et voi esitellä peliä ja kirjoittaa kaikkea muistiin samaan aikaan. Kysy ohjaajalta, voiko hän kirjata asiakkaiden sanat kokeilun aikana. Jos hän ei voi, kirjoitat ne itse heti kokeilun jälkeen."]
          ],
          valmis: "Build toimii, kokeiluversiolla on tag v0.1, ja tiedostossa `project-docs/asiakaspalaute.md` ovat esittely, kolme kysymystä ja ohje asetuksen muuttamiseen. Olet kokeillut ohjetta itse ja tiedät, kuka kirjaa palautteen.",
          tallenna: "`project-docs/asiakaspalaute.md` ja tag v0.1 repositoryyn.",
          sanat: ["build", "tag"],
          esimerkki: "”Peli on lyhyt tasohyppely: pelaaja kerää viisi tähteä ja ehtii maaliin. Kierros kestää noin kaksi minuuttia. Haluan tietää, ymmärrättekö ilman neuvoja, mitä pelissä pitää tehdä, ja onko kierros sopivan pituinen.”",
          eiRiita: "”Toteutin Rigidbody 2D:llä ja triggereillä pelisilmukan, jossa RoundManager hoitaa tilan.” Asiakkaat eivät tarvitse tätä tietoa.",
          apu: {
            title: "Asiakaspalautteen pohja",
            code: "# Asiakaspalaute\n\n## Asiakaskokeilu 1 (työviikko 6, tag v0.1)\n\n### Esittely\nENINTÄÄN VIISI VIRKETTÄ ILMAN TEKNISIÄ SANOJA\n\n### Kysymykset asiakkaille\n1. \n2. \n3. \n\n### Ohje: näin muutat yhden asetuksen\n1. Avaa Project-ikkunan Scenes-kansiosta scene PELIKENTÄN NIMI.\n2. Valitse Hierarchy-ikkunasta GAMEOBJECTIN NIMI.\n3. Etsi Inspector-ikkunasta kohta SKRIPTIN NIMI ja kenttä ASETUKSEN NIMI.\n4. Muuta arvo ALKUARVO arvoon UUSI ARVO.\n5. Paina Play ja kokeile: MITÄ PITÄISI NÄKYÄ.\n\n### Kokeilun tiedot\nPäivä: PP.KK.VVVV\nOsallistujat (roolit, ei nimiä): \nKuka kirjasi palautteen: \n\n### Asiakkaan sanat\n- ”…”\n\n### Kohdat, joissa asiakas epäröi tai jäi jumiin\n- \n\n### Asetuksen muuttaminen ohjeen avulla\nLöysikö asiakas oikean kohdan: \nOnnistuiko muutos Play-tilassa: \nMissä kohdassa ohjetta asiakas epäröi: \n\n### Oma tulkinta\n- ",
            vinkit: [
              "Asetus näkyy Inspector-ikkunassa, jos skriptin kenttä on public tai sen edessä on [SerializeField]. Työviikon 3 PlayerMovement-skriptin speed on tällainen asetus.",
              "Asiakas tarvitsee kokeiluun koneen, jossa projekti on auki Unityssä. Kun kokeilu on ohi, voit perua asiakkaan muutoksen GitHub Desktopissa: napsauta muuttunutta tiedostoa Changes-listassa hiiren kakkospainikkeella ja valitse Discard changes.",
              "Säilytä ohje. Tarvitset sitä työviikolla 15, kun kirjoitat avaamis- ja jatkotyöstöohjeen.",
              "Jos asiakas ei pääse paikalle, pyydä ohjaajaa nimeämään korvaaja tai sopimaan uusi aika. Kirjaa muutos päätöslokiin."
            ]
          }
        },
        "6-2": {
          miksi: "Asiakkaan palautteesta on hyötyä vain, jos kirjoitat sen niin kuin asiakas sen sanoi ja kirjoitat oman tulkintasi erikseen. Kun asiakas lopuksi muuttaa ohjeesi avulla yhden asetuksen, näet, löytääkö joku muu oikean kohdan projektista ilman apuasi. Myöhemmin musiikkikurssin opiskelijat avaavat pelisi ja muokkaavat niitä samalla tavalla pelkän ohjeesi avulla.",
          osat: [
            ["Esittele peli", "Lue valmistelemasi esittely asiakkaille. Anna sitten asiakkaan pelata ilman neuvoja."],
            ["Seuraa pelaamista", "Katso, missä kohdissa asiakas epäröi, kysyy tai jää jumiin. Merkitse kohdat lyhyesti muistiin. Auta vasta, jos asiakas ei pääse ollenkaan eteenpäin."],
            ["Kysy kysymykset", "Kysy valmistelemasi kolme kysymystä. Jos ohjaaja kirjaa, hän kirjoittaa vastaukset asiakkaan sanoin. Muuten kuuntele tarkasti ja kirjoita vastaukset heti kokeilun jälkeen."],
            ["Pyydä asiakasta muuttamaan asetus", "Anna asiakkaalle ohjeesi ja pyydä häntä muuttamaan asetus Inspector-ikkunassa ja kokeilemaan muutosta Play-tilassa. Älä neuvo. Kirjaa, löysikö hän kohdan, onnistuiko muutos ja missä kohdassa ohjetta hän epäröi."],
            ["Kirjoita palaute asiakkaan sanoin", "Kirjoita heti kokeilun jälkeen tiedoston `project-docs/asiakaspalaute.md` Asiakkaan sanat -osioon asiakkaan vastaukset lainausmerkkeihin hänen omin sanoinsa. Jos ohjaaja kirjasi, siirrä hänen muistiinpanonsa sinne. Kirjaa päivä ja roolit, älä nimiä."],
            ["Pyydä asiakasta vahvistamaan kirjaus", "Lue kirjaus asiakkaalle ääneen ja kysy, vastaako se sitä, mitä hän sanoi. Korjaa kohdat, joissa asiakas tarkoitti jotain muuta."],
            ["Kirjoita oma tulkintasi erikseen", "Kirjoita Oma tulkinta -osioon, mitä palaute tarkoittaa peleillesi: mitä muutat ensimmäisessä pelissä ja mitä teet toisin kahdessa seuraavassa pelissä."]
          ],
          valmis: "Palautekirjauksessa ovat päivä, roolit, asiakkaan sanat lainauksina ja erillinen osio omasta tulkinnastasi. Kirjauksesta näkyy, löysikö asiakas asetuksen ohjeesi avulla ja onnistuiko muutos, ja asiakas on vahvistanut kirjauksen.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` repositoryyn.",
          esimerkki: "Asiakkaan sanat: ”Maaliin tulo tapahtuu niin nopeasti, etten ehtinyt nähdä, mitä tapahtui.” Oma tulkinta: loppuruutu näkyy vähintään kolme sekuntia ennen painikkeita. Asetuksen muutos: asiakas löysi Jump Force -kentän ohjeen avulla mutta kysyi, pitääkö arvon jälkeen painaa Enter. Muutos onnistui Play-tilassa. Lisään ohjeeseen rivin: paina arvon jälkeen Enter.",
          eiRiita: "”Asiakkaat tykkäsivät.” Kirjauksesta ei näe, mitä he sanoivat eikä mitä pitää muuttaa."
        },
        "6-3": {
          miksi: "Kun teet jokaisesta korjauksesta kortin, näet tehtävätaulusta, mitä sinun pitää muuttaa, eikä mikään asiakkaan toive unohdu. Järjestät kortit ohjaajan kanssa, jotta teet ensin ne korjaukset, jotka pitää tehdä ennen toista peliä.",
          osat: [
            ["Etsi kohdat, jotka vaativat muutosta", "Lue palautekirjaus ja oma tulkintasi tiedostosta `project-docs/asiakaspalaute.md`. Kirjoita sen loppuun listaksi kohdat, jotka vaativat muutosta peliin tai ohjeeseen."],
            ["Tee kortit", "Tee jokaisesta listan kohdasta kortti tehtävätauluun. Kirjoita korttiin, mistä palautteen kohdasta se tulee, ja valmis kun -ehto."],
            ["Merkitse, mitä peliä kortti koskee", "Merkitse jokaiseen korttiin, koskeeko korjaus vain ensimmäistä peliä vai myös kahta seuraavaa peliä."],
            ["Järjestä kortit", "Järjestä kortit niin, että ensimmäisinä ovat kaikkia pelejä koskevat korjaukset ja virheet, jotka estävät pelaamisen. Muut korjaukset teet työviikolla 13."],
            ["Käy järjestys läpi ohjaajan kanssa", "Näytä korttien järjestys ohjaajalle viikkotarkistuksessa. Kirjaa päätöslokiin `project-docs/paatokset.md`, mitä sovit ohjaajan kanssa ja miksi."]
          ],
          valmis: "Jokaisesta muutosta vaativasta kohdasta on kortti, jossa ovat viittaus palautteeseen ja valmis kun -ehto, ja ohjaajan kanssa sovittu järjestys on päätöslokissa.",
          tallenna: "Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-6/palautekortit.png` ja päätöslokin merkintä.",
          esimerkki: "Kortti: ”Loppuruutu näkyy kolme sekuntia ennen painikkeita.” Lähde: asiakaspalaute, työviikko 6, asiakkaan sanat, kohta 2. Koskee kaikkia kolmea peliä. Valmis kun: loppuviesti näkyy kolme sekuntia, ja vasta sitten painikkeet ilmestyvät.",
          eiRiita: "Kortti ”Korjaa loppu”. Siitä ei näe, mitä pitää muuttaa, mistä palautteesta korjaus tulee eikä milloin se on valmis."
        },
        "6-4": {
          miksi: "Vertaat korttien tuntiarvioita siihen, kuinka monta tuntia työhön oikeasti kului. Kun näet, missä arviosi meni pieleen ja miksi, osaat arvioida toisen pelin työt paremmin. Ero ei ole virhe, vaan se kertoo, mitä kannattaa ottaa huomioon seuraavalla kerralla.",
          osat: [
            ["Kokoa ensimmäisen pelin kortit", "Kokoa tehtävätaulusta ensimmäisen pelin kortit ja niiden tuntiarviot."],
            ["Laske toteutuneet tunnit", "Laske työaikataulukosta, kuinka monta tuntia kuhunkin korttiin oikeasti kului."],
            ["Tee vertailutaulukko", "Kirjoita projektipäiväkirjaan taulukko, jossa ovat kortti, arvio, toteutuneet tunnit ja niiden ero."],
            ["Selitä suurin ero", "Valitse kortti, jossa ero oli suurin, ja kirjoita yhdellä virkkeellä, miksi ero syntyi."],
            ["Päätä, mitä teet toisin", "Kirjoita, miten arvioit toisen pelin kortit toisin, esimerkiksi varaat enemmän aikaa testaukselle."]
          ],
          valmis: "Projektipäiväkirjassa on vertailutaulukko ja selitys suurimmalle erolle.",
          tallenna: "Vertailu projektipäiväkirjaan.",
          esimerkki: "”Alkuvalikko: arvio 3 h, toteutui 6 h. Ero syntyi, koska scenen vaihto ei toiminut ennen kuin scene oli build-luettelossa. Toisessa pelissä varaan valikon liittämiseen tunnin.”",
          eiRiita: "”Arviot menivät vähän pieleen.” Siitä ei näe, mikä kortti eikä miksi."
        },
        "6-5": {
          miksi: "Vaikka peli toimii, se ei vielä näytä, että ymmärrät koodisi. Kun selität yhden skriptin ohjaajalle ja teet siihen pienen muutoksen hänen nähtensä, huomaat, mitä et vielä ymmärrä. Nyt ehdit vielä opetella puuttuvat asiat, ennen kuin koodia on paljon.",
          osat: [
            ["Valitse skripti", "Valitse yksi skripti, jonka kirjoitit ensimmäiseen peliin. Tee tämä työvaihe viikkotarkistuksessa ohjaajan kanssa ja pidä peli auki Unityssä."],
            ["Selitä skripti ohjaajalle", "Selitä ilman muistiinpanoja, mitä skripti tekee: mitä tietoa se käyttää, mikä käynnistää toiminnon ja millä ehdolla."],
            ["Tee muutos, jota ohjaaja pyytää", "Ohjaaja pyytää sinua tekemään pienen muutoksen, esimerkiksi uuden arvon tai ehdon. Tee muutos ja kokeile sitä Play-tilassa ohjaajan nähden."],
            ["Kirjaa tilanne", "Kirjaa tiedostoon `project-docs/selita-ja-muuta.md` päivä, skripti, pyydetty muutos ja yksi asia, jota et vielä osannut selittää."],
            ["Tarkista näyttömatriisi", "Avaa sivuston Näyttömatriisi-näkymä ja rastita rivit, joihin sinulla on nyt työnäyte. Kirjaa samaan tiedostoon yksi vaatimus, josta työnäyte vielä puuttuu."],
            ["Tee commit ja push", "Tee muutoksesta ja merkinnästä commit ja paina Push origin."]
          ],
          valmis: "Olet selittänyt skriptisi ohjaajalle, pyydetty muutos toimii Play-tilassa, ja tiedostossa `project-docs/selita-ja-muuta.md` on tämän viikon merkintä.",
          tallenna: "`project-docs/selita-ja-muuta.md` ja muutoksen commit-linkki projektipäiväkirjaan.",
          esimerkki: "”Työviikko 6: RoundManager.cs. Selitin, että roundOver estää lopun käynnistymisen kahdesti. Ohjaajan pyytämä muutos: loppuviesti näkyy kolme sekuntia ennen painikkeita. En osannut selittää, miksi Time.timeScale pitää palauttaa. Työnäyte puuttuu vielä: tietovaraston valinta.”",
          eiRiita: "”Skripti lopettaa kierroksen.” Selitys ei kerro, mitä tietoa skripti käyttää eikä millä ehdolla se toimii."
        }
      }
    },

    /* ============ VAIHE 3: TOINEN JA KOLMAS PELI (7–12) ============ */
    7: {
      type: "feature",
      feature: "Toisen pelin päämekaniikka toimii pienessä kentässä, ja peli lukee kentän erillisestä tiedostosta.",
      excerpt: "Toisen tekijän pitää voida muuttaa peliä ilman, että koko koodi pitää lukea.",
      connection: "Teet toisen pelin samassa järjestyksessä kuin ensimmäisen: ensin suunnittelet, sitten toteutat ja lopuksi testaat. Uutta on se, että peli lukee kentän erillisestä tiedostosta, joten kenttää voi muuttaa koskematta koodiin. Grafiikat lisäät vasta työviikolla 8.",
      deliverable: "Toisen pelin Unity-projekti tai kansio, päätös kentän tallennustavasta, skripti, joka luo kentän datasta, päämekaniikka ja testitapaukset testimatriisissa.",
      why: "Jos kirjoitat kentän suoraan koodiin, jokainen kentän muutos vaatii ohjelmointia. Kun kenttä on erillisessä tiedostossa, sitä voi muuttaa kuka tahansa, myös musiikkikurssin opiskelija. Samasta tiedostosta saat työviikolla 8 kentän alkutilanteen, kun pelaaja haluaa aloittaa pulman alusta.",
      done: "Esimerkiksi pulmapelissä: siirrä laatikko tavoiteruutuun ja yritä työntää laatikkoa seinää päin. Muuta kenttädatassa yhden ruudun merkki ja käynnistä peli uudelleen: muutos näkyy kentässä. Jos toinen pelisi on jokin muu kuin pulmapeli, kirjoita vastaava kokeilu työvaiheessa 1. Historiassa on commit jokaisesta välituloksesta, ja testitulokset ovat testimatriisissa.",
      record: "Kirjoita työviikon 7 merkintään, mitä toteutit toisesta pelistä, mikä välitulos oli vaikein ja miten ratkaisit sen, mitä opit tallennustapojen vertailusta ja mitä koodisi tekee, kun kenttädatassa on tuntematon merkki. Näyttömatriisin rivit: tietovaraston valinta (s8), yhteys tietovarastoon (s9), rajapinnat ja tiedon käsittely (s10), toiminnot suunnitelman mukaan (p7), rakenteinen ohjelmointi (p4), Unityn tärkeimmät toiminnot (k3) ja ratkaisuvaihtoehtojen vertailu ohjaajan kanssa (p9).",
      skills: ["tietovaraston valinta (s8)", "yhteys tietovarastoon (s9)", "tiedon käsittely Unityn rajapinnoilla (s10)", "päämekaniikan ohjelmointi (p4, p7)", "vaihtoehtojen vertailu ohjaajan kanssa (p9)"],
      tehtavat: {
        "7-1": {
          miksi: "Asiakkaat kertoivat työviikolla 6, mikä ensimmäisessä pelissä toimi ja mikä ei. Osa palautteesta koskee myös toista peliä, joten tarkista suunnitelma ennen kuin aloitat koodin. Kun teet viikon töistä kortit, näet, mitä teet ensin ja paljonko aikaa kuhunkin menee.",
          osat: [
            ["Lue asiakkaiden palaute", "Lue työviikon 6 palaute tiedostosta `project-docs/asiakaspalaute.md`. Merkitse kohdat, jotka koskevat myös toista peliä, esimerkiksi ohjeen selkeys tai kierroksen pituus."],
            ["Tarkenna pienin toimiva versio", "Avaa suunnitelmasta toisen pelin kuvaus. Muuta pienintä toimivaa versiota palautteen perusteella, jos tarvitsee. Kirjaa muutos ja sen syy päätöslokiin `project-docs/paatokset.md`."],
            ["Sovita kokeilu omaan peliisi", "Viikon lopussa kokeilet pulmapelissä, että laatikon saa tavoiteruutuun, laatikko ei mene seinän läpi ja kenttätiedostoon tehty muutos näkyy pelissä. Jos toinen pelisi on erilainen, kirjoita vastaava kokeilu suunnitelman toisen pelin kuvaukseen."],
            ["Perusta pelin projekti", "Luo toiselle pelille Unity-projekti tai kansio samalla rakenteella kuin työviikolla 3. Jos teet erillisen projektin, kopioi sen kansioon myös .gitignore-tiedosto."],
            ["Tee kortit", "Tee tehtävätauluun kortit tämän viikon töistä: tallennustapojen vertailu, kentän luominen datasta, pelaajan liike ja laatikon työntäminen. Kirjoita jokaiseen korttiin odotettu tulos ja tuntiarvio."]
          ],
          valmis: "Toisen pelin projekti on repositoryssa, pienin toimiva versio on tarkennettu, ja tehtävätaulussa on viikon kortit odotettuine tuloksineen ja tuntiarvioineen.",
          tallenna: "Projektin perustamiscommit, päätöslokin merkintä ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-7/kortit.png`.",
          sanat: ["pienin toimiva versio"]
        },
        "7-2": {
          miksi: "Kentän voi tallentaa tekstitiedostoon tai Unityn omaan datatiedostoon, jota kutsutaan ScriptableObjectiksi. Kokeilet kahta tapaa pienellä kentällä. Silloin voit valita tavan sen perusteella, mitä itse huomasit, etkä joudu arvaamaan. Samaa tapaa käytät myöhemmin, kun kolmas peli lukee asetuksensa datasta.",
          osat: [
            ["Piirrä pieni kenttä", "Piirrä paperille viisi kertaa viisi ruudun kenttä, jossa ovat seinät, pelaaja, kaksi laatikkoa ja kaksi tavoiteruutua."],
            ["Kirjoita kenttä tekstitiedostoon", "Kirjoita koko kenttä tekstitiedostoon niin, että yksi merkki vastaa yhtä ruutua. Kohdassa ”Tarvitsen apua tähän työvaiheeseen” on esimerkki merkeistä."],
            ["Tee yksi rivi ScriptableObjectina", "Tee vertailua varten vain kentän yksi rivi ScriptableObjectina. Käytä koodipohjaa kohdasta ”Tarvitsen apua tähän työvaiheeseen” ja täytä rivi Inspector-ikkunassa."],
            ["Siirrä samaa laatikkoa kahdella tavalla","Siirrä yhtä laatikkoa yksi ruutu sekä tekstitiedostossa että ScriptableObjectissa. Ota aikaa, kuinka kauan muutoksen tekeminen kestää, ja kirjaa, kummalla tavalla teet helpommin virheen."],
            ["Valitse tallennustapa ja perustele", "Kirjoita päätöslokiin kokeilun tulos, valintasi ja perustelu. Kirjaa valinta myös suunnitelmaan. Jos valitset ScriptableObjectin, siirrä koko kenttä siihen."],
            ["Käy päätös läpi ohjaajan kanssa", "Näytä vertailu ohjaajalle viikkotarkistuksessa ja kerro, miksi valitsit tämän tavan. Kirjaa päätöslokiin, mitä ohjaaja kysyi tai ehdotti ja muutitko päätöstä sen jälkeen."]
          ],
          valmis: "Päätöslokissa on kokeilun tulos kahdesta tallennustavasta, perusteltu valinta ja merkintä siitä, että kävit päätöksen läpi ohjaajan kanssa. Koko kenttä on valitsemassasi muodossa.",
          tallenna: "Kokeiluversiot kahdella tallennustavalla ja päivitetty `project-docs/paatokset.md` repositoryyn.",
          sanat: ["JSON", "ScriptableObject"],
          esimerkki: "”Tekstitiedosto: laatikon siirto oli yhden merkin muutos ja vei kymmenen sekuntia, mutta väärän pituinen rivi sekoitti kentän. ScriptableObject: muutos Inspectorissa vei minuutin, mutta jokainen rivi näkyi omana kohtanaan. Valitsen tekstitiedoston, koska musiikkikurssin opiskelija voi muokata kenttää ilman Unityn osaamista. Lisään koodiin tarkistuksen rivin pituudelle. Ohjaaja kysyi, mitä tapahtuu, jos tiedostossa on tyhjä rivi. Lisäsin sen testitapaukseksi.”",
          eiRiita: "”ScriptableObject on Unityn suosittelema tapa.” Perustelu ei kerro, mitä huomasit omassa kokeilussasi.",
          apu: {
            title: "Pohjat: kenttä tekstinä ja ScriptableObjectina",
            code: "Kenttä tekstinä, tiedosto kentta.txt, yksi merkki ruutua kohden:\n#####\n#P.B#\n#.B.#\n#T.T#\n#####\n\nMerkit: # seinä, P pelaaja, B laatikko, T tavoite, . lattia\n\n// ScriptableObject, tiedosto LevelData.cs\nusing UnityEngine;\n\n[CreateAssetMenu(menuName = \"ProtoPaja/Kenttä\")]\npublic class LevelData : ScriptableObject\n{\n    public string[] rows;   // TODO: täytä Inspectorissa, jokainen kentän rivi omaan kohtaansa\n}",
            vinkit: [
              "Luo ScriptableObject-tiedosto Project-ikkunassa: napsauta hiiren kakkospainiketta ja valitse Create, ProtoPaja ja Kenttä.",
              "Unity käsittelee tekstitiedostoa TextAsset-tyyppinä. Saat tiedoston peliin, kun raahaat sen Inspector-ikkunassa skriptin TextAsset-kenttään.",
              "Kentän ruudukolle riittää tavallinen teksti. Kun kolmannessa pelissä tallennat asetuksia, joilla on nimet, esimerkiksi vihollisen nopeus, tekstitiedosto kannattaa kirjoittaa JSON-muodossa."
            ]
          }
        },
        "7-3": {
          miksi: "Tällä viikolla teet toisen pelin tärkeimmät toiminnot: peli luo kentän kenttädatasta eli tiedostosta, johon tallensit kentän työvaiheessa 2, ja pelaaja siirtää laatikoita. Teet työn neljänä pienenä välituloksena ja kokeilet jokaisen ennen seuraavaa. Kun jokin menee rikki, tiedät silloin, missä välituloksessa virhe syntyi.",
          osat: [
            ["Suunnittele ennen koodia", "Vastaa kortissa neljään kysymykseen: mitä tietoa tarvitaan, mikä käynnistää toiminnon, millä ehdolla se tapahtuu ja mitä muuttuu. Kirjoita vastauksista lyhyt pseudokoodi kentän luomiselle ja laatikon työntämiselle."],
            ["Tee ruuduista prefabit", "Tee jokaisesta kenttädatan merkistä neliö, jolla on oma väri: seinä, lattia, laatikko, tavoite ja pelaaja. Raahaa neliöt Hierarchy-ikkunasta Prefabs-kansioon, jolloin niistä tulee prefabeja, ja poista ne sitten scenestä."],
            ["Luo kenttä datasta", "Luo skripti LevelLoader apukohdan koodipohjasta. Lisää wallPrefab-kentän mallin mukaan kentät floorPrefab, goalPrefab ja playerPrefab ja täytä TODO-kohdat. Liitä skripti tyhjään GameObjectiin ja raahaa kenttätiedosto ja prefabit sen kenttiin."],
            ["Varaudu tuntemattomaan merkkiin", "Kokeile ensin, että kenttä näkyy. Lisää sitten skriptiin kohta, joka kirjoittaa Console-ikkunaan varoituksen, kun kenttädatassa on tuntematon merkki. Peli ei saa kaatua. Kokeile kirjoittamalla dataan esimerkiksi X ja tee commit."],
            ["Liikuta pelaajaa ruutu kerrallaan", "Kirjoita pelaajalle liike: yksi nuolinäppäimen painallus siirtää pelaajaa yhden ruudun. Seinä estää siirron. Kokeile Play-tilassa ja tee commit ennen kuin jatkat."],
            ["Lisää laatikon työntäminen", "Kun pelaaja liikkuu laatikkoa päin, laatikko siirtyy yhden ruudun samaan suuntaan. Laatikko ei mene seinän eikä toisen laatikon läpi. Kokeile Play-tilassa ja tee commit."],
            ["Nimeä metodit ja vie muutokset GitHubiin", "Anna metodeille nimet, jotka kertovat, mitä pelissä tapahtuu, esimerkiksi PushBox ja BlockedMove. Silloin muut löytävät oikean kohdan koodista. Tee lopuksi commit, paina Push origin ja siirrä kortit Testattavana-sarakkeeseen."]
          ],
          valmis: "Kaikki neljä välitulosta toimivat Play-tilassa, tuntematon merkki ei kaada peliä, ja historiassa on commit jokaisesta välituloksesta.",
          tallenna: "Välitulosten commit-linkit tehtävätaulun kortteihin ja projektipäiväkirjaan.",
          sanat: ["API"],
          apu: {
            title: "Koodipohja: kenttä tekstidatasta",
            code: "using UnityEngine;\n\n// Tiedosto LevelLoader.cs: luo kentän tekstidatasta.\npublic class LevelLoader : MonoBehaviour\n{\n    [SerializeField] private TextAsset levelFile;   // raahaa kentta.txt Inspectorissa\n    [SerializeField] private GameObject wallPrefab;\n    [SerializeField] private GameObject boxPrefab;\n\n    void Start()\n    {\n        string[] rows = levelFile.text.Split('\\n');\n        for (int y = 0; y < rows.Length; y++)\n        {\n            string row = rows[y].TrimEnd('\\r');\n            for (int x = 0; x < row.Length; x++)\n            {\n                Vector3 position = new Vector3(x, -y, 0);\n                // TODO: luo ruutu merkin mukaan, esimerkiksi:\n                //       if (row[x] == '#') Instantiate(wallPrefab, position, Quaternion.identity);\n                // TODO: tuntematon merkki: Debug.LogWarning(...) ja jatka seuraavaan ruutuun\n            }\n        }\n    }\n}",
            vinkit: [
              "Instantiate, Debug.LogWarning ja Quaternion kuuluvat Unityn API:in eli valmiisiin toimintoihin, joita oma koodisi kutsuu.",
              "Pelaajan liike: siirrä pelaajaa ruutu kerrallaan. Tarkista ennen siirtoa, mitä kohderuudussa on. Physics2D.OverlapPoint kertoo, onko pisteessä collider. Lisää siksi seinän ja laatikon prefabeihin Box Collider 2D.",
              "Windowsissa tekstitiedoston rivinvaihdossa on näkymätön merkki. Pohjan TrimEnd poistaa sen.",
              "Jos valitsit työvaiheessa 2 ScriptableObjectin, vaihda TextAsset-kenttä LevelData-kentäksi ja käy silmukassa läpi sen rows-taulukon rivit."
            ],
            test: "Muuta kentta.txt-tiedostossa yksi seinämerkki pisteeksi ja käynnistä peli: seinään tulee aukko."
          }
        },
        "7-4": {
          miksi: "Kun kirjoitat odotetun tuloksen ennen testiä, huomaat heti, jos peli tekee jotain muuta. Testaa myös tilanteita, joita et tullut ajatelleeksi koodatessasi, esimerkiksi laatikon työntämistä toista laatikkoa päin. Virheet on helpompi korjata nyt kuin silloin, kun peliin on lisätty kierros ja valikko.",
          osat: [
            ["Lisää testitapaukset", "Lisää testimatriisiin testitapaukset toisen pelin mekaniikalle ja jatka numerointia edellisistä. Jos viimeisin on testitapaus T06, testitapaus T07 on siirto tyhjään ruutuun, testitapaus T08 siirto seinää päin ja testitapaus T09 virheellinen kenttädata."],
            ["Kirjoita odotetut tulokset", "Kirjoita jokaiselle testitapaukselle odotettu tulos ennen kuin testaat. Kirjoita se niin tarkasti, että joku muu voisi todeta, menikö testi läpi."],
            ["Testaa ja kirjaa tulokset", "Testaa jokainen testitapaus Play-tilassa. Kirjaa testimatriisiin havaittu tulos ja testatun commitin tunniste."],
            ["Kokeile kenttädatan muutosta", "Muuta kenttädatassa yhden ruudun merkki, käynnistä peli ja tarkista, että muutos näkyy kentässä."],
            ["Korjaa ja testaa uudelleen", "Tee jokaisesta virheestä kortti. Korjaa virhe, testaa sama testitapaus uudelleen ja kirjaa uusintatestin tulos testimatriisiin."]
          ],
          valmis: "Testimatriisissa ovat toisen pelin mekaniikan testitapaukset odotettuine ja havaittuine tuloksineen, ja kenttädatan muutos näkyi pelissä.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    8: {
      type: "feature",
      feature: "Toisen pelin kierros päättyy, kun pulma on ratkaistu. Pelaaja voi palauttaa alkutilanteen kesken kierroksen, ja alkuvalikko, ohje ja uudelleenaloitus toimivat.",
      excerpt: "Pulman voi ratkaista ja palauttaa alkutilanteeseen.",
      connection: "Työviikolla 7 ohjelmoit pelin luomaan kentän datasta ja sait päämekaniikan toimimaan. Nyt teet toisesta pelistä kokonaisen kierroksen: peli tunnistaa, kun pulma on ratkaistu, näyttää loppuruudun ja palauttaa alkutilanteen samasta kenttädatasta. Alkuvalikkoa et rakenna uudelleen, vaan liität toiseen peliin ensimmäisen pelin valikon.",
      deliverable: "Toisen pelin kokonainen kierros: ratkaisun tunnistus, loppuruutu ja alkutilanteen palautus kenttädatasta. Lisäksi ensimmäisen pelin valikko toisessa pelissä, toisen pelin grafiikat ja kierroksen testitapaukset.",
      why: "Jos pelaaja ei voi palauttaa alkutilannetta, hän jää jumiin heti, kun laatikko menee nurkkaan. Kun käytät ensimmäisen pelin valikkoa uudelleen, kaikissa peleissä on sama valikko, eikä sinun tarvitse rakentaa sitä joka peliin alusta.",
      done: "Esimerkiksi pulmapelissä: aloita alkuvalikosta, palauta alkutilanne kesken kierroksen, ratkaise pulma, aloita uudelleen ja palaa alkuvalikkoon. Jos toinen pelisi on jokin muu kuin pulmapeli, kokeile samalla tavalla kierroksen loppua, uudelleenaloitusta ja paluuta alkuvalikkoon. Kolme kierrosta peräkkäin menee läpi ilman virhettä, ja tulokset ovat testimatriisissa.",
      record: "Kirjoita työviikon 8 merkintään, mitä toteutit toisen pelin kierroksesta, miten varmistit, että alkutilanteen palautus käyttää kenttädataa, ja mitä muutit ensimmäisen pelin valikossa, kun liitit sen toiseen peliin. Näyttömatriisin rivit: yhteys tietovarastoon (s9), ylläpidettävä koodi (p5), käyttöliittymä (p6), testaus (p3), suunnittelu, toteutus ja testaus (k5), ulkoiset komponentit (k4) ja osan liittäminen olemassa olevaan versioon (s13).",
      skills: ["yhteys tietovarastoon (s9)", "ylläpidettävä koodi ja uudelleenkäyttö (p5)", "osan liittäminen olemassa olevaan versioon (s13)", "käyttöliittymä (p6)", "testaus (p3, k5)"],
      tehtavat: {
        "8-1": {
          miksi: "Pulmapelissä pelaaja tarvitsee kaksi asiaa: tiedon siitä, milloin pulma on ratkaistu, ja keinon aloittaa alusta, jos laatikko jää jumiin. Kun kirjoitat ehdot ja pseudokoodin ennen koodia, tiedät koodatessasi, mitä pitää tapahtua, ja voit testata sen.",
          osat: [
            ["Kirjoita, milloin pulma on ratkaistu", "Kirjoita ratkaisun ehto, esimerkiksi ”jokaisessa tavoiteruudussa on laatikko”, ja mitä pelaaja silloin näkee ruudulla."],
            ["Valitse palautusnäppäin", "Päätä, millä näppäimellä pelaaja palauttaa alkutilanteen, esimerkiksi R. Lisää näppäin pelin ohjausohjeeseen."],
            ["Kirjoita pseudokoodi", "Vastaa kortissa neljään kysymykseen sekä ratkaisun tunnistukselle että palautukselle: mitä tietoa tarvitaan, mikä käynnistää toiminnon, millä ehdolla se tapahtuu ja mitä muuttuu. Kirjoita vastauksista lyhyt pseudokoodi."],
            ["Tee kortit", "Tee tehtävätauluun kortit ratkaisun tunnistukselle ja loppuruudulle, alkutilanteen palautukselle, valikon liittämiselle ja grafiikoille. Kirjoita jokaiseen korttiin odotettu tulos ja tuntiarvio."]
          ],
          valmis: "Ratkaisun ehto, palautusnäppäin ja pseudokoodi on kirjoitettu, ja tehtävätaulussa on viikon kortit odotettuine tuloksineen ja tuntiarvioineen.",
          tallenna: "Ohjausohje suunnitelman toisen pelin kuvaukseen ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-8/kortit.png`.",
          sanat: ["pseudokoodi"],
          esimerkki: "Pseudokoodi: ”Kun pelaaja on siirtänyt laatikkoa, käy läpi kaikki tavoiteruudut. Jos jokaisessa on laatikko, kierros päättyy ja loppuruutu näkyy. Kun pelaaja painaa R, poista laatikot ja pelaaja ja luo ne uudelleen kenttädatasta.”",
          eiRiita: "”Kun pulma on ratkaistu, peli loppuu.” Siitä ei näe, miten peli tietää, että pulma on ratkaistu."
        },
        "8-2": {
          miksi: "Kun peli tunnistaa ratkaisun ja näyttää loppuruudun, pelaaja tietää onnistuneensa. Palautus antaa pelaajalle uuden yrityksen ilman, että peli pitää käynnistää uudelleen. Kun palautus hakee alkutilanteen kenttädatasta, kenttädataan tekemäsi muutos näkyy myös silloin, kun pelaaja palauttaa alkutilanteen.",
          osat: [
            ["Tuo kierroksen lopetus ensimmäisestä pelistä", "Jos pelit ovat erillisissä Unity-projekteissa, vie ensimmäisestä pelistä RoundManager-skripti ja loppuruudun prefab Assets-valikon kohdasta Export Package. Tuo ne toiseen peliin Assets-valikon kohdasta Import Package ja sen alta Custom Package."],
            ["Lisää loppuruutu ja RoundManager pelikenttään", "Raahaa loppuruudun prefab pelikentän sceneen. Liitä RoundManager-skripti tyhjään GameObjectiin ja raahaa loppuruudun paneeli ja teksti sen kenttiin End Panel ja End Text samalla tavalla kuin työviikolla 4."],
            ["Pidä pseudokoodi esillä", "Avaa työvaiheessa 1 kirjoittamasi pseudokoodi ja kirjoita koodi sen mukaan. Jos huomaat, että pseudokoodista puuttuu jotain, korjaa myös se."],
            ["Tunnista ratkaisu", "Kirjoita koodi, joka tarkistaa jokaisen siirron jälkeen, onko jokaisessa tavoiteruudussa laatikko. Kun jokaisessa on laatikko, kutsu RoundManagerin EndRound-metodia, joka näyttää loppuruudun. Käytä koodipohjaa kohdasta ”Tarvitsen apua tähän työvaiheeseen”."],
            ["Estä loppuruudun näkyminen kahdesti", "Varmista, ettei loppuruutu avaudu kahdesti eikä laatikoita voi enää siirtää ratkaisun jälkeen."],
            ["Palauta alkutilanne kenttädatasta", "Kirjoita koodi, joka palauttaa pelaajan ja laatikot alkupaikoilleen, kun pelaaja painaa palautusnäppäintä. Hae paikat koodissa samasta kenttädatasta kuin työviikolla 7. Älä kirjoita paikkoja koodiin, koska silloin kentän muutos ei näy palautuksessa."],
            ["Kokeile ja vie muutokset GitHubiin", "Ratkaise pulma Play-tilassa ja palauta alkutilanne kesken kierroksen. Vertaa tulosta pseudokoodiin ja korttien odotettuihin tuloksiin. Tee commit ratkaisun tunnistuksesta ja palautuksesta erikseen. Paina lopuksi Push origin ja siirrä kortit Testattavana-sarakkeeseen."]
          ],
          valmis: "Peli näyttää loppuruudun kerran, kun pulma on ratkaistu, ja palautus lukee alkutilanteen kenttädatasta. Tulokset Play-tilassa vastaavat korttien odotettuja tuloksia.",
          tallenna: "Commit-linkit tehtävätaulun kortteihin ja projektipäiväkirjaan.",
          apu: {
            title: "Koodipohjat: ratkaisu ja palautus",
            code: "// Ratkaisun tunnistus, esimerkiksi RoundManagerin metodi. Kutsu jokaisen siirron jälkeen.\npublic void CheckSolved()\n{\n    // TODO: käy läpi kaikki tavoiteruudut\n    // TODO: jos jokaisessa on laatikko, kutsu EndRound(true)\n}\n\n// Alkutilanteen palautus, esimerkiksi LevelLoaderin metodi. Kutsu palautusnäppäimestä.\npublic void ResetLevel()\n{\n    // TODO: poista nykyiset laatikot ja pelaaja (Destroy)\n    // TODO: luo ne uudelleen samasta kenttädatasta kuin Start-metodissa\n    // Vihje: siirrä Startin luontikoodi omaan metodiinsa, jota sekä Start että ResetLevel kutsuvat.\n}",
            vinkit: [
              "Pidä Export Package -ikkunassa kohta Include dependencies valittuna. Silloin pakettiin tulevat mukaan myös skriptit ja fontit, joita loppuruudun prefab käyttää.",
              "Kun tarvitset samaa koodia kahdessa paikassa, siirrä se omaan metodiinsa ja kutsu metodia näistä kahdesta paikasta. Silloin korjaat koodin vain yhteen kohtaan.",
              "Voit myös ladata koko scenen uudelleen SceneManager.LoadScene-metodilla. Tarkista silloin, että laatikoiden paikat tulevat kenttädatasta eivätkä scenestä."
            ],
            test: "Siirrä kahta laatikkoa ja paina palautusnäppäintä: kaikki palaavat datan mukaisiin paikkoihin."
          }
        },
        "8-3": {
          miksi: "Teit työviikolla 5 ensimmäisen pelin valikosta ja loppuruudusta prefabit eli tallennetut valmiit GameObjectit, joita voi käyttää uudelleen. Kun liität ne toiseen peliin, pelaaja oppii valikon käytön vain kerran, ja sinulta säästyy aikaa. Samalla harjoittelet, miten valmis osa liitetään olemassa olevaan projektiin.",
          osat: [
            ["Siirrä valikon prefab toiseen peliin", "Toit RoundManager-skriptin ja loppuruudun prefabin toiseen peliin jo työvaiheessa 2. Jos pelit ovat erillisissä Unity-projekteissa, tuo nyt samalla tavalla alkuvalikon prefab: Export Package ensimmäisessä pelissä ja Import Package toisessa."],
            ["Lisää valikko alkuvalikon sceneen", "Luo toiselle pelille alkuvalikon scene ja raahaa siihen valikon prefab. Jos pelit ovat samassa projektissa, löydät prefabin yhteisestä kansiosta."],
            ["Vaihda pelin nimi ja ohje", "Vaihda valikon teksteihin toisen pelin nimi ja ohjausohje, jossa on myös palautusnäppäin. Valikon skriptiä ei tarvitse muuttaa."],
            ["Kytke painikkeet ja scenet", "Kirjoita valikon skriptin kenttiin Inspectorissa toisen pelin scenejen nimet. Tarkista, että Aloita, Uudelleen ja Alkuvalikkoon kutsuvat oikeita metodeja ja että scenet ovat Build Profiles -ikkunan Scene List -luettelossa."],
            ["Kirjoita ohje README-tiedostoon", "Kirjoita repositoryn `README.md`-tiedostoon, mistä valikon prefab löytyy ja miten se liitetään uuteen peliin. Tarvitset ohjetta itse työviikolla 11, kun liität valikon kolmanteen peliin."],
            ["Pelaa alkuvalikosta loppuun ja takaisin", "Käynnistä peli alkuvalikosta, pelaa kierros loppuun ja palaa alkuvalikkoon. Tee sitten commit ja push."]
          ],
          valmis: "Toinen peli käynnistyy alkuvalikosta, jossa ovat toisen pelin nimi ja ohje, painikkeet toimivat, ja README kertoo, miten valikko liitetään uuteen peliin.",
          tallenna: "Valikon liittämisen commit ja päivitetty `README.md` repositoryyn.",
          sanat: ["prefab"],
          apu: {
            title: "Kun valikko ei toimi toisessa pelissä",
            vinkit: [
              "Pidä Export Package -ikkunassa kohta Include dependencies valittuna. Silloin valikon skriptit ja fontit tulevat pakettiin mukaan.",
              "Jos painike ei reagoi, tarkista, että alkuvalikon scenessä on yksi EventSystem.",
              "Jos Aloita-painike ei vaihda sceneä, tarkista, että scenen nimi on kirjoitettu Inspectoriin täsmälleen samoin kuin Project-ikkunassa."
            ]
          }
        },
        "8-4": {
          miksi: "Kun grafiikat ovat samaa tyyliä ja ruudut erottuvat toisistaan, pelaaja näkee heti, mikä on seinä, mikä laatikko ja mikä tavoiteruutu. Tarkistat käyttöehdot ennen kuin tuot grafiikat, koska asiakkaat saavat pelit muokattavina projekteina ja jakavat ne kurssin opiskelijoille.",
          osat: [
            ["Valitse grafiikat", "Valitse toiselle pelille yhtenäiset grafiikat. Voit käyttää samaa pakettia kuin ensimmäisessä pelissä."],
            ["Tarkista käyttöehdot", "Lue uuden paketin käyttöehdot ja tarkista, että grafiikoita saa jakaa muokattavassa Unity-projektissa. Jos ehdot ovat epäselvät, kysy ohjaajalta."],
            ["Kirjaa grafiikat luetteloon", "Lisää jokaisesta uudesta paketista tai kuvasta rivi tiedostoon `docs/assetit-ja-lisenssit.md`: nimi, lähde, tekijä, lisenssi ja käyttökohde."],
            ["Tuo kuvat ja vaihda ne ruutuihin", "Tuo kuvat pelin Art-kansioon. Vaihda seinän, lattian, laatikon, tavoiteruudun ja pelaajan prefabeihin oikeat kuvat."],
            ["Tarkista, että ruudut erottuvat", "Pelaa kierros ja tarkista, että pelaaja, laatikot, seinät ja tavoiteruudut erottuvat toisistaan myös muodon perusteella. Kaikki pelaajat eivät erota värejä toisistaan."]
          ],
          valmis: "Toisen pelin grafiikat ovat samaa tyyliä, ruudut erottuvat toisistaan myös muodon perusteella, ja luettelossa `docs/assetit-ja-lisenssit.md` on rivi jokaisesta uudesta assetista.",
          tallenna: "Grafiikoiden commit ja päivitetty `docs/assetit-ja-lisenssit.md` repositoryyn.",
          sanat: ["asset"]
        },
        "8-5": {
          miksi: "Palautus ja uudelleenaloitus menevät helposti rikki erikoistilanteissa, esimerkiksi jos pelaaja painaa palautusnäppäintä heti ratkaisun jälkeen. Kun testaat nämä tilanteet nyt, löydät virheet ennen kuin toinen opiskelija testaa pelisi työviikolla 9.",
          osat: [
            ["Kirjoita testitapaukset ennen testiä", "Lisää testimatriisiin testitapaukset ratkaisulle, palautukselle kesken kierroksen, uudelleenaloitukselle ja paluulle alkuvalikkoon. Kirjoita jokaiselle odotettu tulos ennen kuin testaat."],
            ["Testaa ja kirjaa tulokset", "Testaa jokainen testitapaus Play-tilassa. Kirjaa testimatriisiin havaittu tulos ja testatun commitin tunniste."],
            ["Testaa rajatapaukset", "Rajatapaus on tilanne, jota pelaaja ei yleensä tee, mutta joka voi rikkoa pelin. Paina palautusnäppäintä heti ratkaisun jälkeen ja kesken siirron. Kirjaa, mitä tapahtuu."],
            ["Pelaa kolme kierrosta peräkkäin", "Pelaa kolme kierrosta peräkkäin ja palaa välillä alkuvalikkoon. Kirjaa, jääkö peli pysähdyksiin tai näkyykö jokin kahdesti."],
            ["Korjaa ja testaa uudelleen", "Tee jokaisesta virheestä kortti. Korjaa virhe, testaa sama testitapaus uudelleen ja kirjaa uusintatestin tulos."]
          ],
          valmis: "Testimatriisissa ovat toisen pelin kierroksen testitapaukset tuloksineen, ja kolme kierrosta peräkkäin menee läpi ilman virhettä.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    9: {
      type: "laatu",
      feature: "Toisesta pelistäsi on tehty vertaisarvio, ja olet korjannut virheet, jotka estävät pelaamisen. Asiakkaat ovat kommentoineet toista peliä, ja kolmannen pelin rajaus on vahvistettu.",
      connection: "Toista peliäsi voi nyt pelata alusta loppuun. Tällä viikolla toinen opiskelija testaa sen, ja korjaat virheet, jotka hän löytää. Jos et korjaa niitä nyt, teet samat virheet helposti myös kolmanteen peliin. Rajaat myös kolmannen pelin, jotta voit aloittaa sen suoraan työviikolla 10.",
      deliverable: "Vertaisarvio tiedostossa `project-docs/vertaisarvio.md`, virheenkorjausketju testimatriisissa, asiakkaiden kommentti toisesta pelistä, kolmannen pelin vahvistettu rajaus ja selitä ja muuta -merkintä.",
      why: "Kun olet tehnyt pelin itse, et enää huomaa kaikkia sen ongelmia. Toinen opiskelija pelaa peliä ensimmäistä kertaa ja huomaa asioita, joita et itse tullut kokeilleeksi. Korjaa pelaamisen estävät virheet ennen kolmatta peliä, koska muuten samat virheet toistuvat siinäkin.",
      done: "Kokeile korjausten jälkeen uudelleen jokaista vertaisarviossa löytynyttä virhettä, joka esti pelaamisen: virhe ei enää toistu. Testimatriisissa on yksi valmis virheenkorjausketju, ja vertaisarviossa on kirjattu, mitkä havainnot korjaat.",
      record: "Kirjoita työviikon 9 merkintään vertaisarvion tärkein havainto, virheenkorjausketjusi syy ja korjaus, mitä ohjaaja pyysi muuttamaan koodissasi ja yksi asia, jonka teet kolmannessa pelissä toisin. Näyttömatriisin rivit: virheiden etsiminen ja korjaus (p2), ratkaisujen toimivuuden arviointi yhdessä (p10) ja oma toiminta tiimin jäsenenä (p11).",
      skills: ["virheiden etsiminen ja korjaus (p2)", "ratkaisujen arviointi yhdessä toisen opiskelijan kanssa (p10)", "oman koodin selittäminen ja muuttaminen (p11)"],
      tehtavat: {
        "9-1": {
          miksi: "Vertaisarviossa toinen opiskelija testaa pelisi suunnitelman vaatimuksia vasten ja kertoo, mitä huomasi. Hän pelaa peliä ensimmäistä kertaa, joten hän löytää asioita, joita et itse tullut kokeilleeksi. Arvio koskee peliä, ei sinua eikä häntä.",
          osat: [
            ["Etsi peliisi testaaja", "Etsi toinen opiskelija, joka testaa pelisi. Ohjaaja auttaa löytämään hänet. Sovi testaajan kanssa noin puolen tunnin tapaaminen, jossa hän pelaa peliä ja käytte havainnot läpi."],
            ["Tee vertaisarvion pohja", "Luo tiedosto `project-docs/vertaisarvio.md` ja kopioi siihen pohja kohdasta ”Tarvitsen apua tähän työvaiheeseen”. Pohjassa ovat toimeksiannon kahdeksan vaatimusta jokaiselle pelille. Testaaja arvioi pelin niitä vasten."],
            ["Anna testaajan pelata ilman neuvoja", "Anna testaajan pelata kolme kierrosta alkuvalikosta alkaen. Älä neuvo. Kirjaa itse, missä kohdissa hän epäröi, kysyy tai jää jumiin."],
            ["Käy havainnot läpi yhdessä", "Käy vaatimukset läpi testaajan kanssa yksi kerrallaan. Kysy, mitä hän huomasi, ja kirjaa havainto hänen sanoillaan. Jos hän löysi virheen, pyydä häntä näyttämään se uudelleen."],
            ["Arvioi yksi ratkaisu yhdessä", "Näytä testaajalle, miten toteutit yhden toiminnon, esimerkiksi alkutilanteen palautuksen. Kysy, toimiiko ratkaisu hänen mielestään ja olisiko hän tehnyt sen toisin. Kirjaa vastaus."],
            ["Luokittele havainnot", "Merkitse jokainen havainto: estävä virhe, muu virhe tai parannusehdotus. Estävä virhe estää pelaamisen, esimerkiksi peli kaatuu tai pelaaja jää jumiin."],
            ["Päätä korjaukset", "Kirjoita jokaisen havainnon kohdalle, korjaatko sen tällä viikolla, työviikolla 13 vai et ollenkaan, ja miksi. Estävät virheet korjaat tällä viikolla. Tee niistä kortit tehtävätauluun."]
          ],
          valmis: "Tiedostossa `project-docs/vertaisarvio.md` on vähintään kolme luokiteltua havaintoa, testaajan arvio yhdestä ratkaisustasi ja korjauspäätös jokaiselle havainnolle. Olet käynyt havainnot läpi testaajan kanssa.",
          tallenna: "`project-docs/vertaisarvio.md` repositoryyn ja estävistä virheistä kortit tehtävätauluun.",
          sanat: ["vertaisarvio"],
          esimerkki: "”Vaatimus 6, uudelleenaloitus: kun laatikko on työnnetty nurkkaan ja pelaaja painaa palautusnäppäintä, pelaaja ilmestyy laatikon päälle. Toistui kolmella yrityksellä kolmesta. Luokka: estävä virhe. Päätös: korjaan tällä viikolla.”",
          eiRiita: "”Hyvä peli, muutama bugi.” Havainnosta ei näe, mitä tapahtui, joten virhettä ei voi toistaa eikä korjata.",
          apu: {
            title: "Pohja: vertaisarvio",
            code: "# Vertaisarvio: toinen peli\n\nPäivä: PÄIVÄMÄÄRÄ\nTestattu versio (commit): TUNNISTE\nTestaaja: toinen opiskelija (älä kirjoita nimeä)\n\n## Havainnot vaatimuksittain\n\n| Vaatimus | Mitä testaaja huomasi | Toistui (kertaa / yritykset) | Luokka | Päätös ja perustelu |\n| --- | --- | --- | --- | --- |\n| 1. Yksi selkeä päämekaniikka | | | | |\n| 2. Pieni kenttä, kierros noin 1–3 minuuttia | | | | |\n| 3. Yhtenäiset grafiikat | | | | |\n| 4. Alkuvalikko ja ohjausohje | | | | |\n| 5. Selkeä kierroksen loppu | | | | |\n| 6. Uudelleenaloitus ja paluu alkuvalikkoon | | | | |\n| 7. Riittävä visuaalinen palaute | | | | |\n| 8. Testattu peliversio ja muokattava Unity-projekti | | | | |\n\nLuokka: estävä virhe, muu virhe tai parannusehdotus.\nPäätös: korjaan tällä viikolla, korjaan työviikolla 13 tai en korjaa.\n\n## Yksi ratkaisu arvioituna yhdessä\n\nRatkaisu: MIKÄ TOIMINTO JA MITEN TOTEUTIT SEN\nTestaajan arvio: MITÄ HÄN SANOI\nMitä teen sen perusteella: PÄÄTÖS",
            vinkit: [
              "Vertaisarvio koskee peliä, ei ihmistä. Jos testaaja sanoo esimerkiksi ”tämä on tylsä”, kysy, missä kohdassa ja miksi, ja kirjaa vastaus.",
              "Älä väittele havainnoista. Jos olet eri mieltä, kirjoita perustelu Päätös ja perustelu -sarakkeeseen."
            ]
          }
        },
        "9-2": {
          miksi: "Virheenkorjausketjussa kirjaat virheen koko käsittelyn: miten virhe saadaan esiin, mikä sen aiheutti, miten korjasit sen ja miten tarkistit korjauksen. Ketjusta näkee, että etsit virheen syyn etkä vain kokeillut muutoksia sattumalta. Näytössä tarvitset vähintään kaksi ketjua, ja tämä on ensimmäinen.",
          osat: [
            ["Valitse virhe", "Valitse vertaisarviosta tai testimatriisista yksi virhe, mieluiten virhe, joka estää pelaamisen."],
            ["Kirjoita toistamisohje", "Kirjoita askel askeleelta, miten virhe saadaan esiin. Kokeile ohjetta kerran ja tarkista, että virhe todella tulee esiin."],
            ["Etsi syy", "Etsi syy esimerkiksi Console-ikkunan viestien tai Debug.Log-tulostusten avulla. Kirjoita syy yhdellä virkkeellä."],
            ["Korjaa virhe", "Korjaa virhe ja tee commit, jonka viesti kertoo, mitä korjasit."],
            ["Testaa korjaus", "Tee toistamisohjeen askeleet uudelleen. Virhe ei saa enää tulla esiin."],
            ["Tee regressiotesti", "Regressiotestissä varmistat, ettei korjaus rikkonut muuta peliä. Pelaa pelin peruskierros alusta loppuun ja kirjaa tulos."],
            ["Korjaa muut estävät virheet", "Korjaa myös vertaisarvion muut virheet, jotka estävät pelaamisen. Testaa jokainen korjaus samalla tavalla kuin testaaja löysi virheen, ja merkitse vertaisarvioon, että virhe on korjattu."]
          ],
          valmis: "Testimatriisissa on ketju: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti. Vertaisarviossa jokainen estävä virhe on merkitty korjatuksi.",
          tallenna: "Ketju testimatriisiin ja korjauscommitin linkki projektipäiväkirjaan.",
          sanat: ["virheenkorjausketju", "regressiotesti"],
          apu: {
            title: "Ketjun pohja",
            code: "Virheenkorjausketju\n- Havainto: MITÄ TAPAHTUI\n- Toistamisohje: 1. VAIHE 2. VAIHE 3. VAIHE\n- Syy: MIKÄ KOODISSA AIHEUTTI VIRHEEN\n- Korjauscommit: LINKKI\n- Uusintatesti: TULOS\n- Regressiotesti: PERUSKIERROS ALUSTA LOPPUUN, TULOS",
            vinkit: [
              "Jos pelistäsi ei löydy oikeaa virhettä, pyydä ohjaajalta tehtävä, jossa koodiin on lisätty virhe. Älä keksi virhettä ketjua varten.",
              "Debug.Log tulostaa viestin Console-ikkunaan. Tulosta muuttujan arvo juuri ennen kohtaa, jossa virhe syntyy."
            ]
          }
        },
        "9-3": {
          miksi: "Asiakkaat kokeilevat kaikkia kolmea peliä vasta työviikolla 12. Jos toisessa pelissä on jotain, mikä ei sovi heidän kurssilleen, sinun kannattaa kuulla se nyt. Silloin et tee kolmatta peliä samalla tavalla.",
          osat: [
            ["Valmistele kokeiltava versio", "Tee toisesta pelistä build eli erillinen pelattava versio tai lyhyt video, jossa pelaat kierroksen alusta loppuun."],
            ["Lähetä build tai video asiakkaille", "Lähetä build tai video asiakkaille sovitulla tavalla. Kysy kaksi asiaa: sopiiko peli heidän kurssilleen ja onko siinä jotain, mitä pitäisi muuttaa ennen kuin teet kolmannen pelin."],
            ["Kirjaa vastaus asiakkaan sanoin", "Kirjoita vastaus tiedostoon `project-docs/asiakaspalaute.md` asiakkaan omin sanoin lainausmerkkeihin ja lisää päivämäärä. Kirjoita oma tulkintasi erikseen sen alle."],
            ["Kerro ohjaajalle, jos vastausta ei tule", "Jos vastausta ei tule sovittuun päivään mennessä, kerro ohjaajalle. Ohjaaja päättää, jatkatko ilman vastausta."]
          ],
          valmis: "Tiedostossa `project-docs/asiakaspalaute.md` on asiakkaan kommentti toisesta pelistä hänen sanoillaan tai ohjaajan päätös jatkaa ilman sitä.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` repositoryyn.",
          sanat: ["build"]
        },
        "9-4": {
          miksi: "Teet kolmannen pelin työviikoilla 10 ja 11, ja asiakkaat kokeilevat sitä työviikolla 12. Kun kirjoitat nyt tarkasti, mitä peliin tulee ja mitä jätät pois, peli ei kasva niin suureksi, ettet ehdi tehdä sitä valmiiksi. Ohjaajan ja asiakkaiden vahvistuksesta tiedät, että he odottavat samaa peliä, jota olet tekemässä.",
          osat: [
            ["Lue suunnitelma ja palaute", "Lue suunnitelmasta kolmannen pelin kuvaus ja kaikki tähänastinen asiakaspalaute."],
            ["Kirjoita pienin toimiva versio", "Kirjoita kolmannen pelin pienin toimiva versio ja kierroksen päättymisehto, esimerkiksi ”pelaaja selviää 60 sekuntia”. Kirjoita ne niin tarkasti, että voit myöhemmin kokeilla pelissä, toteutuvatko ne."],
            ["Kirjoita, mitä jätät pois", "Kirjoita kolme asiaa, joita et tee kolmanteen peliin, esimerkiksi toinen vihollistyyppi."],
            ["Arvioi työmäärä", "Tee kolmannesta pelistä kortit tuntiarvioineen. Katso työviikon 6 vertailusta, kuinka paljon arviosi poikkesivat toteutuneista tunneista, ja ota se huomioon."],
            ["Pyydä vahvistus", "Esittele rajaus ohjaajalle viikkotarkistuksessa ja lähetä se asiakkaille. Kirjaa päätöslokiin vahvistus tai asia, joka jäi avoimeksi."]
          ],
          valmis: "Suunnitelmassa on kolmannen pelin pienin toimiva versio, kierroksen päättymisehto ja kolme asiaa, jotka jätät pois. Korteilla on tuntiarviot, ja päätöslokissa on vahvistus tai merkintä avoimesta asiasta.",
          tallenna: "Päivitetty `project-docs/suunnitelma.md` ja päätöslokin merkintä repositoryyn.",
          sanat: ["pienin toimiva versio"]
        },
        "9-5": {
          miksi: "Vaikka peli toimii, se ei vielä näytä, että ymmärrät koodisi. Kun selität skriptin ohjaajalle ja teet siihen pienen muutoksen hänen nähtensä, huomaat, mitä et vielä osaa selittää. Silloin ehdit opetella sen ennen näyttöä.",
          osat: [
            ["Valitse skripti", "Valitse yksi toisen pelin skripteistäsi. Tee tämä työvaihe viikkotarkistuksessa, ja pidä peli auki Unityssä."],
            ["Selitä skripti ohjaajalle", "Selitä ilman muistiinpanoja, mitä skripti tekee: mitä tietoa se käyttää, mikä käynnistää toiminnon ja millä ehdolla toiminto tapahtuu."],
            ["Tee pyydetty muutos", "Ohjaaja pyytää pienen muutoksen, esimerkiksi uuden arvon tai ehdon. Tee muutos ja kokeile sitä Play-tilassa ohjaajan nähden."],
            ["Kirjaa tilanne", "Kirjoita tiedostoon `project-docs/selita-ja-muuta.md` päivä, skripti, pyydetty muutos ja yksi asia, jota et vielä osannut selittää."],
            ["Tarkista näyttömatriisi", "Avaa sivuston Näyttömatriisi-näkymä ja rastita rivit, joihin sinulla on nyt työnäyte. Kirjaa samaan tiedostoon yksi vaatimus, josta työnäyte vielä puuttuu."],
            ["Tee commit ja push", "Tee muutoksesta ja merkinnästä commit ja paina Push origin."]
          ],
          valmis: "Olet selittänyt skriptisi ohjaajalle, pyydetty muutos toimii Play-tilassa, ja tiedostossa `project-docs/selita-ja-muuta.md` on tämän viikon merkintä.",
          tallenna: "`project-docs/selita-ja-muuta.md` ja muutoksen commit-linkki projektipäiväkirjaan.",
          esimerkki: "”Työviikko 9: LevelLoader.cs. Selitin, miten silmukat käyvät kentän rivit ja merkit läpi. Ohjaajan pyytämä muutos: uusi merkki luo kenttään esteen. En osannut selittää TrimEnd-kutsua. Työnäyte, joka puuttui aiemmin, on nyt olemassa: tietovaraston valinta työviikolla 7.”",
          eiRiita: "”Koodi liikuttaa pelaajaa.” Selitys ei kerro, mitä tietoa koodi käyttää eikä millä ehdolla."
        }
      }
    },

    10: {
      type: "feature",
      feature: "Kolmannen pelin päämekaniikka toimii: esimerkiksi toimintapelissä pelaaja liikkuu areenalla ja hyökkää, ja vihollinen reagoi osumaan. Peli lukee asetuksensa, kuten vihollisen nopeuden, datasta.",
      connection: "Rajasit kolmannen pelin työviikolla 9. Nyt teet kolmannen pelin päämekaniikan samalla tavalla kuin kahdessa ensimmäisessä pelissä: ensin suunnittelet, sitten ohjelmoit ja lopuksi testaat. Työviikolla 11 teet mekaniikasta kokonaisen kierroksen, jolla on alku ja loppu.",
      deliverable: "Kolmannen pelin Unity-projekti tai kansio, pelaajan liike ja hyökkäys, vihollinen ja osuma, asetukset datasta, grafiikat ja testitapaukset.",
      why: "Päämekaniikka on se toiminto, jota pelaaja toistaa koko kierroksen ajan. Siksi se pitää saada toimimaan ennen kuin teet pelistä kokonaisen kierroksen. Kun asetukset ovat datassa eikä koodissa, pelin vaikeutta voi säätää ilman ohjelmointia, esimerkiksi muuttamalla vihollisen nopeutta.",
      done: "Esimerkiksi toimintapelissä: liiku areenalla, hyökkää viholliseen ja katso, että osuma näkyy. Anna sitten vihollisen osua pelaajaan ja katso, että siitäkin näkyy palaute. Muuta datassa yhtä asetusta, esimerkiksi vihollisen nopeutta, käynnistä peli uudelleen ja katso, että muutos näkyy. Jos teet muuta peliä, kirjoita vastaava kokeilu työvaiheessa 1. Kolmannen pelin testitapaukset ovat testimatriisissa tuloksineen.",
      record: "Kirjoita työviikon 10 merkintään, mitä teit kolmannen pelin mekaniikasta ja miten asetuksen muutos datassa näkyi pelissä. Kerro myös, mitä Unityn API:n toimintoa käytit, esimerkiksi Vector2.MoveTowards, ja miksi. Näyttömatriisin rivit: toiminnot suunnitelman mukaan (p7), rakenteinen ohjelmointi (p4), rajapinnat ja tiedon käsittely (s10), yhteys tietovarastoon (s9), Unityn tärkeimmät toiminnot (k3) ja ulkoisten komponenttien eli grafiikoiden tuonti (k4).",
      skills: ["päämekaniikan ohjelmointi (p4, p7)", "rajapinnat ja tiedon käsittely (s10)", "asetukset datasta (s9)", "Unityn tärkeimmät toiminnot (k3)", "grafiikoiden tuonti (k4)"],
      tehtavat: {
        "10-1": {
          miksi: "Kun kirjoitat ensin tavallisella kielellä, mitä koodin pitää tehdä, sinun ei tarvitse keksiä kaikkea vasta ohjelmoidessasi. Korteista näet, mitä sinun pitää tehdä tällä viikolla ja missä järjestyksessä.",
          osat: [
            ["Perusta kolmannen pelin projekti", "Luo kolmannelle pelille Unity-projekti tai kansio samalla tavalla kuin kahdelle ensimmäiselle pelille. Jos teet erillisen Unity-projektin, lisää siihen myös .gitignore-tiedosto. Tee commit."],
            ["Päätä, mitä teet tällä viikolla", "Lue työviikolla 9 kirjoittamasi rajaus. Esimerkiksi toimintapeliin riittää tällä viikolla pelaajan liike, yksi hyökkäys ja yksi vihollistyyppi, joka ilmestyy areenalle tasaisin väliajoin ja liikkuu pelaajaa kohti."],
            ["Valitse, mitkä asetukset ovat datassa", "Valitse kaksi tai kolme asetusta, joita haluat voida muuttaa avaamatta koodia, esimerkiksi vihollisen nopeus ja se, kuinka usein uusi vihollinen ilmestyy. Tallennat ne samalla tavalla kuin kenttädatan työviikolla 7."],
            ["Kirjoita kokeilu omalle pelillesi", "Viikon lopussa kokeilet, että pelaaja liikkuu ja hyökkää, osumista näkyy palaute ja datassa muutettu asetus näkyy pelissä. Jos kolmas pelisi on erilainen, kirjoita vastaava kokeilu suunnitelmaan."],
            ["Suunnittele ennen koodia", "Kirjoita hyökkäyksestä ja vihollisesta vastaukset neljään kysymykseen: mitä tietoa tarvitaan, mikä käynnistää toiminnon, millä ehdolla se sallitaan ja mitä muuttuu. Kirjoita vastauksista lyhyt pseudokoodi."],
            ["Tee toiminnoista kortit", "Tee mekaniikan toiminnoista kortit tehtävätauluun tai tarkenna työviikolla 9 tekemiäsi kortteja. Kirjoita jokaiseen korttiin odotettu tulos ja tuntiarvio, ja liitä pseudokoodi oikeaan korttiin."]
          ],
          valmis: "Kolmannen pelin projekti on repositoryssa, hyökkäyksestä ja vihollisesta on pseudokoodi, ja jokaisesta mekaniikan toiminnosta on kortti, jossa on odotettu tulos ja tuntiarvio.",
          tallenna: "Projektin perustamiscommit ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-10/kortit.png`.",
          esimerkki: "Vihollisen osuma: ”Mitä tietoa tarvitaan? Montako osumaa vihollinen vielä kestää. Mikä käynnistää toiminnon? Pelaajan hyökkäys koskettaa vihollista. Millä ehdolla? Vihollinen on vielä pelissä. Mitä muuttuu? Vihollinen välähtää ja kestää yhden osuman vähemmän. Kun osumia ei ole jäljellä, vihollinen katoaa.”"
        },
        "10-2": {
          miksi: "Ohjelmoit nyt sen, minkä suunnittelit työvaiheessa 1. Kokeile jokaista osaa Play-tilassa ennen kuin aloitat seuraavan. Jos jokin lakkaa toimimasta, tiedät silloin, että virhe on viimeksi tekemässäsi osassa.",
          osat: [
            ["Ohjelmoi pelaajan liike ja hyökkäys", "Tee areena ja pelaaja neliöistä. Kirjoita pseudokoodisi mukaan skripti, jolla pelaaja liikkuu nuolinäppäimillä ja hyökkää yhdellä näppäimellä. Valitse pelaajalle Inspectorin Tag-valikosta tunniste Player. Kokeile ja tee commit."],
            ["Tee vihollisen asetuksille datatiedosto", "Tee vihollisen asetuksille ScriptableObject tai tekstitiedosto sen mukaan, minkä tallennustavan valitsit työviikolla 7. Jos valitsit ScriptableObjectin, käytä koodipohjan EnemySettings-skriptiä ja luo siitä asetustiedosto Project-ikkunassa."],
            ["Ohjelmoi vihollinen", "Lisää areenalle vihollinen neliönä. Kirjoita sille skripti, jolla se liikkuu pelaajaa kohti ja katoaa, kun hyökkäys osuu siihen tarpeeksi monta kertaa. Käytä apukohdan koodipohjaa. Raahaa asetustiedosto vihollisen Settings-kenttään. Kokeile Play-tilassa ja tee commit."],
            ["Luo vihollisia tasaisin väliajoin", "Tee vihollisesta prefab ja areenan reunoille muutama tyhjä GameObject. Luo apukohdan koodipohjasta skripti EnemySpawner, liitä se tyhjään GameObjectiin ja raahaa sen kenttiin asetustiedosto, prefab ja reunojen GameObjectit."],
            ["Näytä osumat ruudulla", "Lisää näkyvä palaute, kun hyökkäys osuu viholliseen ja kun vihollinen osuu pelaajaan, esimerkiksi lyhyt välähdys. Pelaajan pitää huomata osuma ilman ääntä."],
            ["Kokeile ja lähetä muutokset GitHubiin", "Pelaa areenalla Play-tilassa noin minuutin ajan. Tee commit, paina Push origin ja siirrä kortit tehtävätaulussa Testattavana-sarakkeeseen."]
          ],
          valmis: "Pelaajan liike, hyökkäys, vihollinen ja osumien palaute toimivat Play-tilassa odotetun tuloksen mukaan. Asetuksen muutos datassa näkyy pelissä, ja jokaisesta osasta on commit historiassa.",
          tallenna: "Commit-linkit kortteihin ja päiväkirjaasi.",
          sanat: ["JSON"],
          apu: {
            title: "Koodipohjat: asetukset datana, vihollinen ja uudet viholliset",
            code: "using UnityEngine;\n\n// Asetukset datana, tiedosto EnemySettings.cs\n[CreateAssetMenu(menuName = \"ProtoPaja/Vihollisen asetukset\")]\npublic class EnemySettings : ScriptableObject\n{\n    public float speed = 2f;           // vihollisen nopeus\n    public float spawnInterval = 3f;   // monenko sekunnin välein uusi vihollinen ilmestyy\n    public int hitPoints = 1;          // montako osumaa vihollinen kestää\n}\n\n// Vihollinen, oma tiedosto Enemy.cs\nusing UnityEngine;\n\npublic class Enemy : MonoBehaviour\n{\n    [SerializeField] private EnemySettings settings;   // raahaa asetustiedosto tähän vihollisen prefabissa\n    private Transform player;\n    private int hitPoints;\n\n    void Start()\n    {\n        player = GameObject.FindWithTag(\"Player\").transform;\n        hitPoints = settings.hitPoints;\n    }\n\n    void Update()\n    {\n        // TODO: liiku kohti pelaajaa:\n        //       transform.position = Vector2.MoveTowards(transform.position, player.position, settings.speed * Time.deltaTime);\n    }\n\n    public void TakeHit()\n    {\n        // TODO: vähennä hitPoints-arvoa, näytä palaute ja poista vihollinen (Destroy), kun arvo on 0\n    }\n}\n\n// Uudet viholliset, oma tiedosto EnemySpawner.cs. Liitä tyhjään GameObjectiin.\nusing UnityEngine;\n\npublic class EnemySpawner : MonoBehaviour\n{\n    [SerializeField] private EnemySettings settings;\n    [SerializeField] private GameObject enemyPrefab;\n    [SerializeField] private Transform[] spawnPoints;   // tyhjiä GameObjecteja areenan reunoilla\n\n    void Start()\n    {\n        // TODO: kutsu SpawnEnemy-metodia datassa olevin väliajoin:\n        //       InvokeRepeating(nameof(SpawnEnemy), 1f, settings.spawnInterval);\n    }\n\n    void SpawnEnemy()\n    {\n        // TODO: valitse satunnainen paikka: spawnPoints[Random.Range(0, spawnPoints.Length)]\n        // TODO: luo vihollinen siihen: Instantiate(enemyPrefab, paikka.position, Quaternion.identity);\n    }\n}",
            vinkit: [
              "Jos valitsit työviikolla 7 tekstitiedoston, kirjoita asetukset JSON-muotoon ja lue ne JsonUtility.FromJson-metodilla. Se on Unityn API:n valmis toiminto.",
              "Hyökkäys voi olla esimerkiksi lyhytkestoinen trigger-collider pelaajan edessä. Kun se koskettaa vihollista, kutsu vihollisen TakeHit-metodia.",
              "Kun vihollinen osuu pelaajaan, Unity kutsuu vihollisen OnCollisionEnter2D-metodia. Tarkista sen sisällä CompareTag-metodilla, että osuma oli pelaajaan.",
              "Anna metodeille nimet, jotka kertovat, mitä ne tekevät, esimerkiksi Attack ja TakeHit. Silloin sinä ja muut, jotka avaavat projektin myöhemmin, löydätte oikean kohdan koodista nopeasti."
            ],
            test: "Muuta EnemySettings-tiedoston nopeutta Inspectorissa ja paina Play: vihollinen liikkuu uudella nopeudella."
          }
        },
        "10-3": {
          miksi: "Kun grafiikat ovat samaa tyyliä ja hahmot erottuvat toisistaan, pelaaja näkee heti, mikä hahmo on hänen ja mikä on vihollinen. Tarkistat käyttöehdot ennen kuin tuot kuvat, koska luovutat pelit asiakkaille muokattavina Unity-projekteina, ja jokaista kuvaa pitää saada käyttää niissä.",
          osat: [
            ["Valitse grafiikat", "Valitse kolmannelle pelille yhtenäiset grafiikat. Voit käyttää samaa grafiikkapakettia kuin aiemmissa peleissä."],
            ["Tarkista käyttöehdot", "Lue jokaisen uuden paketin tai kuvan käyttöehdot. Tarkista, että kuvia saa käyttää ja jakaa muokattavassa Unity-projektissa. Jos ehdot ovat epäselvät, kysy ohjaajalta."],
            ["Kirjaa assetit luetteloon", "Lisää jokaisesta uudesta paketista tai kuvasta rivi tiedostoon `docs/assetit-ja-lisenssit.md`: nimi, lähde, tekijä, lisenssi ja missä pelissä käytät sitä."],
            ["Vaihda muodot kuviksi", "Tuo kuvat pelin Art-kansioon ja vaihda pelaajan, vihollisen ja areenan muodot kuviksi."],
            ["Tarkista, että hahmot erottuvat", "Pelaa hetki ja tarkista, että pelaaja ja viholliset erottuvat toisistaan ja taustasta myös muodon perusteella eikä vain värin perusteella. Tee lopuksi commit."]
          ],
          valmis: "Kolmannen pelin grafiikat ovat yhtenäiset, pelaaja ja viholliset erottuvat toisistaan, ja assettiluettelossa on rivi jokaisesta uudesta assetista.",
          tallenna: "Grafiikkacommit ja päivitetty `docs/assetit-ja-lisenssit.md` repositoryyn."
        },
        "10-4": {
          miksi: "Toimintapelissä moni asia tapahtuu yhtä aikaa. Kun testaat omaa koodiasi, huomaat helposti vain sen, mitä odotat näkeväsi. Kun kirjoitat odotetun tuloksen ennen testiä, huomaat, jos peli tekee jotain muuta. Kokeilet myös tilanteita, joita et suunnitellut.",
          osat: [
            ["Kirjoita testitapaukset ensin", "Kirjoita testimatriisiin testitapaukset liikkeelle, hyökkäykselle, osumalle ja asetuksen muutokselle. Kirjoita jokaiselle odotettu tulos ennen kuin testaat."],
            ["Aja testitapaukset", "Aja jokainen testitapaus Play-tilassa ja kirjaa havaittu tulos. Tee jokaisesta virheestä kortti tehtävätauluun."],
            ["Kokeile rajatapausta", "Kokeile tilannetta, jota et suunnitellut. Esimerkiksi areenalla on monta vihollista yhtä aikaa, tai pelaaja hyökkää seinän läpi. Kirjaa tilanne testitapauksena tuloksineen."],
            ["Korjaa ja testaa uudelleen", "Korjaa löytämäsi virheet ja tee korjauksista commit. Aja samat testitapaukset uudelleen ja kirjaa uusi tulos."]
          ],
          valmis: "Testimatriisissa ovat kolmannen pelin mekaniikan testitapaukset odotettuine ja havaittuine tuloksineen. Jokainen löytämäsi virhe on korjattu ja testattu uudelleen, tai siitä on kortti tehtävätaulussa.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    11: {
      type: "feature",
      feature: "Kolmannen pelin kierros päättyy selviytymiseen tai häviöön, ja alkuvalikko, ohjausohje, uudelleenaloitus ja palaute toimivat.",
      excerpt: "Yksi kierros kestää noin 1–3 minuuttia, ja sen pitää päättyä selvästi.",
      connection: "Työviikolla 10 sait kolmannen pelin mekaniikan toimimaan. Nyt teet siitä kierroksen, jolla on kesto ja loppu, ja liität peliin saman alkuvalikon kuin kahteen ensimmäiseen peliin. Kun tämä viikko on valmis, asiakkaat voivat kokeilla kaikkia kolmea peliä työviikolla 12.",
      deliverable: "Kierroksen ajastin, voitto ja häviö, loppuruutu, alkuvalikko, visuaalinen palaute, testitapaukset ja kolme havaintoa Unityn rajoitteista.",
      why: "Jos kierroksella ei ole kestoa eikä loppua, pelaaja ei tiedä, milloin hän onnistui, eikä peliä voi aloittaa alusta. Asiakkaat kokeilevat peliä työviikolla 12, joten kierroksen pitää toimia alusta loppuun ilman, että kukaan neuvoo.",
      done: "Esimerkiksi toimintapelissä: pelaa yksi kierros loppuun asti, esimerkiksi selviydy 60 sekuntia, ja yksi kierros häviöön. Aloita sitten uudelleen ja palaa alkuvalikkoon. Jos teet muuta peliä, kokeile samalla tavalla kaikkia tapoja, joilla kierros voi päättyä. Kolmannen pelin kierroksen testitapaukset ovat testimatriisissa tuloksineen.",
      record: "Kirjoita työviikon 11 merkintään, miten teit kolmannen pelin kierroksen, miten varmistit, että kierros päättyy vain kerran, mitä virheitä löysit testatessasi ja yksi havainto Unityn rajoitteista. Näyttömatriisin rivit: toimintalogiikka (s7), käyttöliittymä (p6), suunnittelu, toteutus ja testaus Unityllä (k5) sekä Unityn mahdollisuudet ja rajoitteet (k2).",
      skills: ["toimintalogiikka (s7)", "käyttöliittymä (p6)", "suunnittelu, toteutus ja testaus Unityllä (k5)", "Unityn mahdollisuudet ja rajoitteet (k2)"],
      tehtavat: {
        "11-1": {
          miksi: "Pelaajan pitää koko ajan nähdä, kuinka paljon aikaa on jäljellä ja kuinka lähellä häviö on. Kun kirjoitat voiton ja häviön ehdot ennen ohjelmointia, huomaat jo suunnitellessasi tilanteet, joissa voitto ja häviö voisivat tapahtua yhtä aikaa.",
          osat: [
            ["Kirjoita voiton ja häviön ehdot", "Kirjoita, milloin kierros päättyy voittoon ja milloin häviöön. Esimerkiksi pelaaja voittaa, kun hän selviää 60 sekuntia, ja häviää, kun vihollinen on osunut häneen kolme kertaa."],
            ["Päätä, mitä ruudulla näkyy", "Päätä, miten jäljellä oleva aika ja pelaajan kestävyys näkyvät ruudulla. Kestävyys tarkoittaa sitä, montako osumaa pelaaja vielä kestää. Ne voivat näkyä esimerkiksi numerona tai palkkina."],
            ["Suunnittele ennen koodia", "Kirjoita ajastimesta ja häviöstä vastaukset neljään kysymykseen: mitä tietoa tarvitaan, mikä käynnistää toiminnon, millä ehdolla se sallitaan ja mitä muuttuu. Kirjoita vastauksista lyhyt pseudokoodi."],
            ["Mieti, mitä tapahtuu samalla hetkellä", "Kirjoita pseudokoodiin, mitä tapahtuu, jos aika ja kestävyys loppuvat samalla hetkellä. Kierroksen pitää päättyä vain kerran."],
            ["Tee kierroksen osista kortit", "Tee tehtävätauluun kortit kierroksen osista: ajastin, häviö, alkuvalikko ja uudelleenaloitus. Kirjoita jokaiseen korttiin odotettu tulos ja tuntiarvio."]
          ],
          valmis: "Olet kirjoittanut voiton ja häviön ehdot ja pseudokoodin, ja jokaisesta kierroksen osasta on kortti, jossa on odotettu tulos ja tuntiarvio.",
          tallenna: "Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-11/kortit.png`.",
          esimerkki: "”Joka ruudunpäivityksellä: vähennä jäljellä olevaa aikaa. Jos aika on loppu ja kierros on yhä käynnissä, päätä kierros voittoon. Kun vihollinen osuu: vähennä kestävyyttä yhdellä. Jos kestävyys on loppu ja kierros on yhä käynnissä, päätä kierros häviöön.”"
        },
        "11-2": {
          miksi: "Ohjelmoit nyt kierroksen, jonka suunnittelit työvaiheessa 1. Käytät uudelleen ensimmäisen pelin alkuvalikkoa, loppuruutua ja kierroksen lopetusta, joten sinun ei tarvitse tehdä niitä alusta.",
          osat: [
            ["Tuo valikko ja loppuruutu ensimmäisestä pelistä", "Tuo ensimmäisen pelin valikko- ja loppuruutuprefabit ja RoundManager-skripti kolmanteen peliin samalla tavalla kuin työviikolla 8. Vaihda pelin nimi ja ohjausohje kolmannen pelin mukaisiksi."],
            ["Ohjelmoi kierroksen ajastin", "Kirjoita pseudokoodisi mukaan ajastin, joka laskee aikaa alaspäin ja näyttää jäljellä olevan ajan ruudulla. Kun aika loppuu, ajastin päättää kierroksen voittoon. Käytä koodipohjaa kohdasta ”Tarvitsen apua tähän työvaiheeseen”."],
            ["Kytke ajastin peliin", "Luo tyhjä GameObject nimeltä RoundTimer ja liitä siihen RoundTimer-skripti. Raahaa RoundManager-objekti sen Round Manager -kenttään. Kokeile Play-tilassa, että aika laskee ja kierros päättyy, kun aika loppuu."],
            ["Ohjelmoi häviö", "Vähennä pelaajan kestävyyttä, kun vihollinen osuu, ja näytä kestävyys ruudulla. Kun kestävyys loppuu, päätä kierros häviöön."],
            ["Varmista, että kierros päättyy vain kerran", "Kutsu kierroksen lopussa aina RoundManagerin EndRound-metodia. Se tarkistaa, onko kierros jo päättynyt, joten loppuruutu ei aukea kahdesti, vaikka aika ja kestävyys loppuisivat samalla hetkellä."],
            ["Tarkista uudelleenaloitus ja paluu alkuvalikkoon", "Paina loppuruudussa Uudelleen ja tarkista, että aika ja kestävyys alkavat alusta eikä peli jää pysähdyksiin. Kokeile sitten Alkuvalikkoon-painiketta. Jos scene ei vaihdu, tarkista Scene List -luettelo."],
            ["Pelaa kierros ja lähetä muutokset GitHubiin", "Pelaa kierros Play-tilassa alkuvalikosta loppuun. Tee commit, paina Push origin ja siirrä kortit tehtävätaulussa Testattavana-sarakkeeseen."]
          ],
          valmis: "Kierros päättyy Play-tilassa voittoon tai häviöön vain kerran, alkuvalikko ja loppuruudun painikkeet toimivat, ja jokaisesta osasta on commit historiassa.",
          tallenna: "Commit-linkit kortteihin ja päiväkirjaasi.",
          apu: {
            title: "Koodipohja: kierroksen ajastin",
            code: "using UnityEngine;\n\n// Tiedosto RoundTimer.cs\npublic class RoundTimer : MonoBehaviour\n{\n    [SerializeField] private float roundLength = 60f;\n    [SerializeField] private RoundManager roundManager;\n    private float timeLeft;\n\n    void Start()\n    {\n        timeLeft = roundLength;\n    }\n\n    void Update()\n    {\n        // TODO: vähennä timeLeft-arvosta Time.deltaTime\n        // TODO: kun timeLeft on 0 tai alle, kutsu roundManager.EndRound(true) vain kerran\n        // TODO: päivitä aikanäyttö, esimerkiksi Mathf.CeilToInt(timeLeft)\n    }\n}",
            vinkit: [
              "Time.deltaTime on edellisestä ruudunpäivityksestä kulunut aika sekunteina. Kun aika on pysäytetty (Time.timeScale = 0), se on nolla.",
              "Pelaajan kestävyyden voit ohjelmoida samalla tavalla kuin vihollisen TakeHit-metodin: vähennä arvoa osumassa ja kutsu roundManager.EndRound(false), kun arvo on 0.",
              "Jos pelit ovat erillisissä Unity-projekteissa, siirrä prefabit ja skriptit Assets-valikon Export Package- ja Import Package -toiminnoilla."
            ],
            test: "Aseta roundLength Inspectorissa arvoon 5 ja paina Play: kierros päättyy viiden sekunnin kohdalla kerran."
          }
        },
        "11-3": {
          miksi: "Kun peliin tulee ajastin ja kaksi erilaista loppua, virheitä syntyy helposti erikoistilanteissa, esimerkiksi kun pelaaja häviää viimeisellä sekunnilla. Kun testaat nämä tilanteet nyt, löydät virheet ennen kuin asiakkaat pelaavat peliä työviikolla 12.",
          osat: [
            ["Kirjoita testitapaukset ensin", "Kirjoita testimatriisiin testitapaukset voitolle, häviölle, uudelleenaloitukselle ja paluulle alkuvalikkoon. Kirjoita jokaiselle odotettu tulos ennen kuin testaat."],
            ["Aja testitapaukset", "Aja testitapaukset Play-tilassa alkuvalikosta alkaen ja kirjaa havaittu tulos. Voit lyhentää kierroksen kestoa testiä varten Inspectorissa esimerkiksi viiteen sekuntiin, kunhan palautat sen lopuksi."],
            ["Kokeile häviötä viimeisellä sekunnilla", "Anna vihollisen osua pelaajaan juuri ennen kuin aika loppuu. Kirjaa tilanne testitapauksena: loppuruudun pitää aueta vain kerran."],
            ["Pelaa kolme kierrosta peräkkäin", "Pelaa kolme kierrosta peräkkäin ja tarkista, että aika ja kestävyys alkavat joka kerta alusta."],
            ["Korjaa ja testaa uudelleen", "Korjaa löytämäsi virheet ja tee korjauksista commit. Aja samat testitapaukset uudelleen ja kirjaa uusi tulos."]
          ],
          valmis: "Testimatriisissa ovat kolmannen pelin kierroksen testitapaukset tuloksineen, ja kolme peräkkäistä kierrosta menee läpi ilman virhettä.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        },
        "11-4": {
          miksi: "Näytössä arvioidaan, tunnetko Unityn mahdollisuudet ja rajoitteet. Kirjaat kolme tilannetta omasta työstäsi, joissa Unity ei toiminut niin kuin odotit. Yleinen tieto Unitystä ei riitä, koska se ei näytä, mitä sinä olet oppinut.",
          osat: [
            ["Käy läpi oma työsi", "Käy läpi commitisi, päiväkirjasi ja testimatriisin merkinnät työviikoilta 1–11."],
            ["Valitse kolme tilannetta", "Valitse kolme tilannetta, joissa Unity toimi eri tavalla kuin odotit, esimerkiksi trigger ei toiminut, koska pelaajalta puuttui Rigidbody 2D -komponentti."],
            ["Kirjoita jokaisesta tilanteesta", "Kirjoita tiedostoon `project-docs/unity-havainnot.md` jokaisesta tilanteesta, mitä yritit, mitä Unity teki, miten ratkaisit asian ja mitä opit Unitystä."],
            ["Lisää linkki tai kuvakaappaus", "Lisää jokaiseen havaintoon commit-linkki tai kuvakaappaus, josta tilanne näkyy. Tee lopuksi commit ja paina Push origin."]
          ],
          valmis: "Tiedostossa `project-docs/unity-havainnot.md` on kolme havaintoa omasta työstäsi. Jokaisessa on tilanne, ratkaisu ja commit-linkki tai kuvakaappaus.",
          tallenna: "`project-docs/unity-havainnot.md` repositoryyn.",
          esimerkki: "”Lisäsin Restart-painikkeen, mutta peli jäi pysähdyksiin. Syy: Time.timeScale jäi nollaksi. Ratkaisu: asetin sen arvoon 1 ennen kuin scene ladataan uudelleen (commit-linkki). Opin, että Time.timeScale säilyy, vaikka scene ladataan uudelleen.”",
          eiRiita: "”Unity on raskas ohjelma ja vaatii hyvän koneen.” Havainto ei kerro mitään omasta työstäsi."
        }
      }
    },

    12: {
      type: "katselmointi",
      feature: "Asiakkaat ovat kokeilleet kaikkia kolmea peliä, ja olet sopinut heidän kanssaan tärkeimmät korjaukset ja niiden järjestyksen.",
      excerpt: "Kun kaikki kolme peliä ovat kokeiltavissa, haluamme pelata niitä ja sopia tärkeimmistä korjauksista ennen luovutusta.",
      connection: "Kaikissa kolmessa pelissä on nyt kokonainen kierros. Asiakkaat kokeilevat kaikkia kolmea peliä samalla kerralla, koska vasta silloin he näkevät, sopivatko pelit yhdessä kurssin harjoituksiksi. Teet katselmoinnissa sovitut korjaukset työviikolla 13.",
      deliverable: "Katselmointiversio (tag v0.2), asiakkaiden palaute heidän sanoillaan, korjauskortit sovitussa järjestyksessä, pyyntö vastaanottotestaajasta ja lista vaatimuksista, joista sinulta puuttuu vielä työnäyte.",
      why: "Et ehdi korjata kaikkea ennen luovutusta. Kun asiakkaat kertovat, mikä on heille tärkeintä, käytät jäljellä olevan ajan korjauksiin, joita he oikeasti tarvitsevat.",
      done: "Lue katselmoinnin päätökset ääneen asiakkaille tai ohjaajalle ja pyydä vahvistus, että ne vastaavat sitä, mitä sovittiin. Jokaisesta sovitusta korjauksesta on kortti tehtävätaulussa, ja olet listannut näyttömatriisin vaatimukset, joista sinulta puuttuu vielä työnäyte.",
      record: "Kirjoita työviikon 12 merkintään, miten katselmointi sujui, mikä asiakkaiden palautteesta oli mielestäsi tärkeintä, mitkä korjaukset teet työviikolla 13 ja mistä vaatimuksista sinulta puuttuu vielä työnäyte. Näyttömatriisin rivit: asiakaslähtöinen viestintä (s2), version katselmointi (s3), tärkeysjärjestys (s4), versionhallinta (s12), tehtävistä sopiminen ohjaajan kanssa (p8), ratkaisujen toimivuuden arviointi yhdessä (p10) ja oma toiminta tiimin jäsenenä (p11).",
      skills: ["asiakaslähtöinen viestintä (s2)", "version katselmointi (s3, p10)", "tärkeysjärjestys (s4, p8)", "versionhallinta: tag v0.2 (s12)", "oman toiminnan arviointi (p11)"],
      tehtavat: {
        "12-1": {
          miksi: "Asiakkaat pelaavat buildeja eli valmiita peliversioita, joita voi pelata ilman Unityä. Kun merkitset version tagilla v0.2, löydät myöhemmin juuri sen version, jota asiakkaat kokeilivat. Esittelyssä kerrot asiakkaille, mitä on muuttunut ja mitä haluat heiltä tietää.",
          osat: [
            ["Tee jokaisesta pelistä build", "Tee jokaisesta kolmesta pelistä build sovitulle alustalle. Pelaa jokainen build alusta loppuun ennen katselmointia eli tapaamista, jossa asiakkaat pelaavat kaikkia kolmea peliä ja kertovat, mitä pitää korjata."],
            ["Merkitse katselmointiversio", "Merkitse katselmoitava commit versiomerkinnällä eli tagilla v0.2 samalla tavalla kuin työviikolla 6: napsauta commitia History-näkymässä hiiren kakkospainikkeella ja valitse Create Tag. Paina sitten Push origin."],
            ["Kirjoita esittely", "Kirjoita lyhyt esittely kolmesta pelistä ilman teknisiä termejä. Kerro myös, mitä muutit työviikon 6 palautteen perusteella."],
            ["Kirjoita kolme kysymystä", "Kirjoita asiakkaille kolme kysymystä, esimerkiksi mikä peleistä on kurssille tärkein ja mitä pitää korjata ennen luovutusta."],
            ["Päätä, kuka kirjaa palautteen", "Et ehdi esitellä ja kirjoittaa samaan aikaan. Päätä, kirjoitatko palautteen itse heti kokeilun jälkeen vai pyydätkö ohjaajaa kirjaamaan sen katselmoinnin aikana."]
          ],
          valmis: "Kaikki kolme buildia toimivat, katselmointiversio on merkitty tagilla v0.2, esittely ja kysymykset ovat tiedostossa `project-docs/asiakaspalaute.md`, ja tiedät, kuka kirjaa palautteen.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` ja katselmointiversion versiomerkintä (tag v0.2) repositoryyn.",
          apu: {
            title: "Jos asiakas ei pääse",
            vinkit: ["Jos asiakas ei pääse paikalle, pyydä ohjaajaa nimeämään korvaaja tai sopimaan uusi aika. Kirjaa muutos päätöslokiin."]
          }
        },
        "12-2": {
          miksi: "Valitset viimeiset korjaukset sen perusteella, mitä asiakkaat sanoivat. Siksi kirjaat heidän sanansa sellaisinaan ja oman tulkintasi erikseen. Muuten et myöhemmin tiedä, oliko korjaus asiakkaan toive vai oma päätelmäsi.",
          osat: [
            ["Esittele pelit", "Lue esittelysi ja anna asiakkaiden pelata jokaista peliä. Älä neuvo heitä pelatessa, koska haluat nähdä, ymmärtävätkö he pelit ilman apua."],
            ["Seuraa, missä asiakkaat epäröivät", "Katso, missä kohdissa asiakkaat epäröivät tai jäävät jumiin. Merkitse kohdat lyhyesti muistiin, jos ehdit, tai pyydä ohjaajaa merkitsemään ne."],
            ["Kysy kysymyksesi", "Kysy asiakkailta valmistelemasi kolme kysymystä."],
            ["Kirjoita palaute heti kokeilun jälkeen", "Kirjoita asiakkaiden vastaukset lainausmerkkeihin juuri niin kuin he ne sanoivat, peli kerrallaan. Kirjaa myös päivä ja osallistujien roolit, ei nimiä. Jos ohjaaja kirjasi palautteen, kirjoita hänen muistiinpanonsa samaan muotoon."],
            ["Lue palaute ääneen asiakkaille", "Lue kirjaamasi palaute asiakkaille ääneen ja kysy, vastaako se sitä, mitä he tarkoittivat. Korjaa kirjaus heti, jos he tarkentavat jotain."],
            ["Kirjoita oma tulkintasi erikseen", "Kirjoita erilliseen osioon, mitä palaute mielestäsi tarkoittaa jokaiselle pelille ja mitä pitäisi korjata."]
          ],
          valmis: "Palautteen kirjauksessa ovat päivä, roolit, asiakkaiden sanat lainauksina peli kerrallaan ja erillinen tulkintaosio, ja asiakkaat ovat vahvistaneet kirjauksen.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` repositoryyn.",
          esimerkki: "Asiakkaan sanat: ”Toimintapelissä en huomannut, että aika oli loppumassa. Ajastimen pitäisi näkyä paremmin.” Oma tulkinta: ajastin isommaksi ja punaiseksi, kun jäljellä on 10 sekuntia.",
          eiRiita: "”Palaute oli positiivista.” Kirjauksesta ei näe, mitä peliä palaute koski eikä sitä, mitä pitää muuttaa."
        },
        "12-3": {
          miksi: "Ehdit tehdä työviikolla 13 vain osan korjauksista. Kun kysyt asiakkailta, mitkä korjaukset ovat kurssin kannalta tärkeimmät, teet ensin ne, joista heille on eniten hyötyä.",
          osat: [
            ["Listaa korjaustarpeet", "Listaa katselmoinnissa esiin tulleet korjaustarpeet ja tehtävätaulun aiemmat avoimet korjauskortit."],
            ["Kysy asiakkailta järjestys", "Kysy asiakkailta, mitkä korjaukset ovat kurssin kannalta tärkeimmät. Järjestä kortit tehtävätaulussa heidän vastaustensa mukaan."],
            ["Valitse korjaukset työviikolle 13", "Valitse ohjaajan kanssa viikkotarkistuksessa korjaukset, jotka ehdit tehdä työviikolla 13. Tee tehtävätauluun uusi sarake Tiedossa olevat puutteet ja siirrä muut kortit sinne."],
            ["Kerro lisätavoitteista", "Kerro asiakkaille, että neljännestä ja viidennestä pelistä eli lisätavoitteista päätät ohjaajan kanssa vasta, kun olet testannut kolme peliä työviikolla 14."],
            ["Pyydä vastaanottotestaaja", "Pyydä ohjaajaa etsimään työviikon 16 vastaanottotestiin joku, joka ei ole nähnyt projektia. Hän avaa pelit pelkän kirjallisen ohjeesi avulla."],
            ["Kirjaa päätökset päätöslokiin", "Kirjaa päätöslokiin korjausten järjestys, milloin päätät lisätavoitteista ja kuka tekee vastaanottotestin. Kirjaa testaajasta vain rooli, esimerkiksi toisen ryhmän opiskelija, ei nimeä."]
          ],
          valmis: "Korjauskortit ovat tehtävätaulussa sovitussa järjestyksessä, ja päätöslokissa on kirjattuna, milloin päätät lisätavoitteista ja kuka tekee vastaanottotestin.",
          tallenna: "Päätöslokin merkintä ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-12/korjauskortit.png`.",
          sanat: ["lisätavoite"]
        },
        "12-4": {
          miksi: "Tarkistat nyt, mistä näytön vaatimuksista sinulta puuttuu vielä työnäyte. Projektia on jäljellä kuusi työviikkoa, joten ehdit vielä tehdä puuttuvat työnäytteet, kun sovit ohjaajan kanssa, missä työvaiheessa teet ne.",
          osat: [
            ["Avaa näyttömatriisi", "Avaa sivun Näyttömatriisi ja käy läpi omien tutkinnon osiesi vaatimukset."],
            ["Merkitse valmiit työnäytteet", "Merkitse rasti jokaiseen vaatimukseen, josta sinulla on jo työnäyte repositoryssa."],
            ["Listaa puuttuvat työnäytteet", "Kirjoita tiedostoon `project-docs/aukot.md` vaatimukset, joista sinulta puuttuu vielä työnäyte."],
            ["Sovi, missä teet puuttuvat työnäytteet", "Sovi ohjaajan kanssa jokaisesta puuttuvasta työnäytteestä, missä työviikkojen 13–17 työvaiheessa teet sen."],
            ["Arvioi omaa toimintaasi", "Kirjoita samaan tiedostoon kolme virkettä siitä, miten olet toiminut projektissa ohjaajan ja asiakkaiden kanssa: mikä on sujunut ja mitä muutat."]
          ],
          valmis: "Tiedostossa `project-docs/aukot.md` jokaisella puuttuvalla työnäytteellä on sovittu työvaihe, ja oman toiminnan arvioinnissa on kolme virkettä.",
          tallenna: "`project-docs/aukot.md` repositoryyn.",
          esimerkki: "”s11 tietoturvan arviointi: ei vielä työnäytettä. Sovittu: teen työviikon 14 tietoturva-arvion toimintapelin asetustiedostosta. Oma toiminta: olen pitänyt kortit ajan tasalla, mutta pyydän apua liian myöhään. Jatkossa kysyn apua, kun olen ollut jumissa 30 minuuttia.”",
          eiRiita: "”Kaikki on kunnossa.” Merkinnästä ei näe, oletko käynyt näyttömatriisin läpi."
        }
      }
    },

    /* ============ VAIHE 4: TESTAUS JA LUOVUTUS (13–16) ============ */
    13: {
      type: "laatu",
      feature: "Korjaukset, jotka valitsit työviikolla 12, toimivat peleissä. Olet testannut jokaisen korjauksen ja jokaisen pelin peruskierroksen uudelleen.",
      connection: "Työviikolla 12 kysyit asiakkailta, mitkä korjaukset ovat heille tärkeimmät, ja valitsit niistä ne, jotka ehdit tehdä tällä viikolla. Nyt teet ne. Kirjoitat ensin jokaiseen korjauskorttiin, mitä pelissä pitää tapahtua, kun korjaus on valmis, ja testaat korjauksen sen jälkeen. Työviikolla 14 testaat kaikki kolme peliä tästä korjatusta versiosta.",
      deliverable: "Korjauskortit, joissa on odotettu tulos ja testitapaus, tekemäsi korjaukset, toinen virheenkorjausketjusi ja uusintatestien tulokset testimatriisissa.",
      why: "Kun kirjoitat odotetun tuloksen ennen korjausta ja testaat korjauksen sen jälkeen, tiedät varmasti, että korjaus toimii. Ilman uusintatestiä korjaus voi rikkoa jotain muuta, esimerkiksi paluun alkuvalikkoon, etkä huomaa sitä ennen luovutusta.",
      done: "Aja uudelleen jokaisen korjauksen testitapaus ja pelaa jokaisen pelin peruskierros alusta loppuun. Kaikki testit menevät läpi, ja testimatriisissa on toinen valmis virheenkorjausketjusi.",
      record: "Kirjoita työviikon 13 merkintään, mitkä korjaukset teit, mistä toisen virheenkorjausketjusi virhe johtui ja löysitkö uusintatesteissä uusia virheitä. Näyttömatriisin rivi: virheiden etsiminen ja korjaaminen (p2).",
      skills: ["virheiden etsiminen ja korjaaminen (p2)", "korjausten uusintatestaus (p2)"],
      tehtavat: {
        "13-1": {
          miksi: "Ennen kuin muutat koodia, kirjoitat jokaiseen korttiin, mitä pelissä pitää tapahtua, kun korjaus on valmis. Silloin voit korjauksen jälkeen tarkistaa, onnistuiko se, eikä sinun tarvitse arvata. Samasta kuvauksesta teet testitapauksen, jonka voit ajaa uudelleen myöhemmillä viikoilla.",
          osat: [
            ["Avaa valitut korjauskortit", "Avaa tehtävätaulusta korjauskortit, jotka valitsit työviikolla 12 tehtäviksi tällä viikolla."],
            ["Kirjoita odotettu tulos", "Kirjoita jokaiseen korttiin, mitä pelaaja näkee tai mitä pelissä tapahtuu, kun korjaus on valmis. Kirjoita se ennen kuin muutat koodia."],
            ["Lisää testitapaukset testimatriisiin", "Lisää jokaisesta korjauksesta testimatriisiin testitapaus, jossa on sama odotettu tulos kuin kortissa. Jätä havaitun tuloksen sarake vielä tyhjäksi."],
            ["Valitse virhe ketjua varten", "Valitse kortti, jossa peli toimii väärin, ja merkitse siihen, että teet siitä toisen virheenkorjausketjusi. Pelkkä parannusehdotus ei käy ketjuun."]
          ],
          valmis: "Jokaisella valitulla korjauksella on kortti, odotettu tulos ja testitapaus testimatriisissa, ja olet merkinnyt kortin, josta teet virheenkorjausketjun.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-13/kortit.png`.",
          esimerkki: "Kortti: ajastin näkyy huonosti toimintapelissä. Odotettu tulos: ”Ajastin näkyy ruudun yläreunassa isolla fontilla, ja viimeisten kymmenen sekunnin ajan se on punainen.”",
          eiRiita: "”Korjaa ajastin.” Kortista ei näe, miltä korjatun ajastimen pitää näyttää."
        },
        "13-2": {
          miksi: "Korjaat nyt ongelmat, joita asiakkaat pitivät työviikolla 12 tärkeimpinä. Yhdestä korjauksesta kirjoitat virheenkorjausketjun: miten sait virheen esiin, mistä se johtui ja miten tarkistit korjauksen. Näytössä tarvitset vähintään kaksi ketjua, ja ensimmäisen teit työviikolla 9.",
          osat: [
            ["Toista ongelma ensin", "Pelaa peliä niin, että ongelma tulee esiin, ennen kuin muutat mitään. Kirjoita korttiin askel askeleelta, miten ongelman saa esiin."],
            ["Etsi syy", "Etsi koodista, mikä aiheuttaa ongelman. Apuna voit käyttää Console-ikkunan viestejä tai Debug.Log-tulostuksia. Kirjoita syy korttiin yhdellä virkkeellä."],
            ["Korjaa yksi kortti kerrallaan", "Korjaa yksi kortti kerrallaan. Tee jokaisesta korjauksesta oma commit, jonka viestissä kerrot, mitä korjasit."],
            ["Aja kortin testitapaus", "Aja kortin testitapaus ja kirjoita havaittu tulos testimatriisiin. Jos tulos ei vastaa odotettua, korjaus ei ole vielä valmis."],
            ["Kirjoita virheenkorjausketju", "Kirjoita merkitsemästäsi korjauksesta testimatriisiin koko ketju: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti. Käytä pohjaa kohdasta ”Tarvitsen apua tähän työvaiheeseen”."],
            ["Lähetä korjaukset GitHubiin", "Paina GitHub Desktopissa Push origin ja siirrä korjatut kortit tehtävätaulussa Valmis-sarakkeeseen."]
          ],
          valmis: "Korjauskortit ovat Valmis-sarakkeessa, jokaisella korjauksella on oma commit ja läpäisty testitapaus, ja testimatriisissa on toinen virheenkorjausketjusi.",
          tallenna: "Korjauscommitit repositoryyn ja virheenkorjausketju testimatriisiin. Lisää commit-linkit päiväkirjaasi.",
          sanat: ["virheenkorjausketju"],
          apu: {
            title: "Ketjun pohja ja jos oikeaa virhettä ei ole",
            code: "Virheenkorjausketju\n- Havainto: MITÄ TAPAHTUI\n- Toistamisohje: 1. VAIHE 2. VAIHE 3. VAIHE\n- Syy: MIKÄ KOODISSA AIHEUTTI VIRHEEN\n- Korjauscommit: LINKKI\n- Uusintatesti: TULOS\n- Regressiotesti: PERUSKIERROS ALUSTA LOPPUUN, TULOS",
            vinkit: ["Jos korjauskorteissasi ei ole oikeaa virhettä vaan pelkkiä parannuksia, pyydä ohjaajalta vikatehtävä eli valmis virhe, jonka syyn etsit ja korjaat. Älä keksi virhettä ketjua varten."]
          }
        },
        "13-3": {
          miksi: "Testasit jokaisen korjauksen heti sen tekemisen jälkeen. Myöhempi korjaus voi kuitenkin rikkoa aiemman, ja valikon prefabiin tehty muutos näkyy jokaisessa pelissä, jossa samaa prefabia käytetään. Siksi ajat kaikki testit uudelleen vasta, kun kaikki korjaukset ovat valmiina.",
          osat: [
            ["Tarkista, että korjaukset ovat mukana", "Tarkista GitHub Desktopin History-näkymästä, että jokaisesta korjauksesta on commit. Avaa sitten jokainen peli Unityssä."],
            ["Aja korjausten testitapaukset uudelleen", "Aja jokaisen korjauksen testitapaus uudelleen. Kirjoita testimatriisiin testin tekijäksi itsesi ja versioksi viimeisimmän commitin tunnus."],
            ["Pelaa jokainen peli läpi", "Pelaa jokaisen pelin peruskierros alusta loppuun, aloita kierros uudelleen ja palaa alkuvalikkoon. Tätä testiä sanotaan regressiotestiksi: sillä tarkistat, ettei korjaus rikkonut muuta peliä."],
            ["Kirjaa tulokset", "Kirjoita tulokset testimatriisiin. Jos löydät uuden virheen, tee siitä kortti tehtävätauluun."],
            ["Kirjaa korjaamatta jääneet asiat", "Kirjoita tiedostoon `docs/testitulokset-ja-puutteet.md` asiat, joita et ehdi korjata. Ota mukaan myös tehtävätaulun Tiedossa olevat puutteet -sarakkeen kortit. Silloin musiikkikurssin opiskelijat tietävät jo luovutuksessa, mikä peleissä ei vielä toimi."]
          ],
          valmis: "Olet ajanut jokaisen korjauksen testitapauksen uudelleen kaikkien korjausten jälkeen, jokaisen pelin peruskierros menee läpi, ja korjaamatta jääneet asiat ovat tiedostossa `docs/testitulokset-ja-puutteet.md`.",
          tallenna: "Päivitetty testimatriisi ja `docs/testitulokset-ja-puutteet.md` repositoryyn.",
          sanat: ["regressiotesti"]
        }
      }
    },

    14: {
      type: "laatu",
      feature: "Kaikki kolme peliä toimivat myös buildeina eli koottuina versioina: ne käynnistyvät, kierros päättyy oikein ja uuden kierroksen voi aloittaa monta kertaa peräkkäin. Testitulokset ja tietoturva-arviosi ovat valmiit.",
      connection: "Työviikolla 13 korjasit asiakkaiden valitsemat virheet ja testasit korjaukset Unityssä. Nyt testaat pelit niin kuin niitä käytetään luovutuksen jälkeen: buildeina, monta kierrosta peräkkäin ja myös tilanteissa, joita pelaaja ei tavallisesti tee. Kun kaikki kolme peliä menevät testeistä läpi, voit kysyä ohjaajalta, saatko tehdä neljännen pelin.",
      deliverable: "Täydennetty testimatriisi kaikista kolmesta pelistä, buildien testitulokset, rajatapausten tulokset ja tietoturva-arvio tiedostossa `project-docs/tietoturva-arvio.md`.",
      why: "Luovutukseen kuuluu jokaisesta pelistä build eli koottu versio, jota voi pelata ilman Unityä. Musiikkikurssin opiskelijat pelaavat samaa kierrosta monta kertaa ja käyttävät pelejä eri koneilla kuin sinä. Jos et testaa buildeja ja toistuvia kierroksia nyt, he löytävät virheet ensimmäisinä.",
      done: "Sulje Unity ja käynnistä jokaisen pelin build eli koottu peliversio. Pelaa kolme kierrosta peräkkäin ja palaa joka kierroksen jälkeen alkuvalikkoon. Jokainen kierros toimii samalla tavalla, ja testimatriisissa on jokaisesta pelistä vähintään seitsemän testitapausta tuloksineen.",
      record: "Kirjoita työviikon 14 merkintään, missä build toimi eri tavalla kuin peli Unityssä, mitä rajatapausten testeissä tapahtui ja mitä muutit tietoturva-arvion perusteella. Näyttömatriisin rivit: testaus (p3), suunnittelu, toteutus ja testaus Unityllä (k5), julkaisu asiakkaan ympäristöön (k6) ja tietoturvan arviointi (s11).",
      skills: ["pelien testaus buildeina (p3, k5)", "julkaisu asiakkaan ympäristöön (k6)", "tietoturvan arviointi (s11)"],
      tehtavat: {
        "14-1": {
          miksi: "Testaat jokaisesta pelistä samat seitsemän perusasiaa, jotta mikään niistä ei jää testaamatta yhdessäkään pelissä. Testimatriisista näet itse, mitä olet jo testannut ja mitä vielä puuttuu. Testimatriisi on myös työnäytteesi testauksesta.",
          osat: [
            ["Tarkista, mitä olet jo testannut", "Tarkista, onko jokaisesta pelistä testitapaus näille seitsemälle asialle: käynnistys, ohjausohje, päämekaniikka, visuaalinen palaute, kierroksen päättyminen, uudelleenaloitus ja paluu alkuvalikkoon."],
            ["Kirjoita puuttuvat testitapaukset", "Lisää puuttuvat testitapaukset testimatriisiin. Kirjoita jokaiseen odotettu tulos ennen kuin ajat testin."],
            ["Aja testit Unityssä", "Aja testitapaukset Unityn Play-tilassa. Kirjoita jokaiseen testitapaukseen testin tekijä, versio eli commitin tunnus ja havaittu tulos."],
            ["Tee virheistä kortit", "Jos testi ei mene läpi, tee virheestä kortti tehtävätauluun."]
          ],
          valmis: "Testimatriisissa on jokaisesta pelistä vähintään seitsemän testitapausta tuloksineen: käynnistys, ohjausohje, päämekaniikka, visuaalinen palaute, päättyminen, uudelleenaloitus ja paluu alkuvalikkoon.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` repositoryyn."
        },
        "14-2": {
          miksi: "Build on pelin erillinen versio, jota voi pelata ilman Unityä. Peli voi toimia Unityssä oikein mutta buildissa väärin: build voi alkaa pelikentästä eikä alkuvalikosta, tai kenttätiedosto voi puuttua buildista kokonaan. Kun testaat buildit nyt, ehdit korjata tällaiset virheet ennen luovutusta.",
          osat: [
            ["Tarkista build-asetukset", "Avaa File-valikosta Build Profiles. Tarkista, että alustana on asiakkaiden kanssa sovittu alusta ja että alkuvalikon scene on Scene List -luettelossa ensimmäisenä."],
            ["Tee build jokaisesta pelistä", "Paina Build ja valitse kansioksi Unity-projektin `Builds`-kansio. Toista tämä jokaiselle pelille. Jos pelit ovat samassa projektissa, vaihda Scene List -luetteloon kunkin pelin scenet ja tee jokainen build omaan kansioonsa."],
            ["Sulje Unity", "Sulje Unity kokonaan ennen kuin testaat. Silloin testaat varmasti buildia etkä Unityssä auki olevaa peliä."],
            ["Aja testitapaukset buildissa", "Käynnistä build `Builds`-kansiosta ja aja pelin testitapaukset. Kirjoita testimatriisin versiosarakkeeseen sana build ja commitin tunnus."],
            ["Kirjaa erot", "Kirjoita testimatriisiin jokainen kohta, jossa build toimii eri tavalla kuin peli Unityssä. Tee jokaisesta erosta kortti tehtävätauluun."]
          ],
          valmis: "Olet testannut jokaisen pelin buildin Unity suljettuna, ja tulokset ovat testimatriisissa.",
          tallenna: "Päivitetty testimatriisi ja kuvakaappaus jokaisen pelin käynnissä olevasta buildista kansioon `project-docs/tyonaytteet/viikko-14/`.",
          sanat: ["build"],
          apu: {
            title: "Jos build toimii eri tavalla kuin Unityssä",
            vinkit: [
              "Build alkaa aina Scene List -luettelon ensimmäisestä scenestä. Jos build alkaa pelikentästä, siirrä alkuvalikon scene luettelossa ensimmäiseksi.",
              "Jos kenttä tai muu data puuttuu buildista, tarkista, miten peli lukee datatiedoston. Tiedosto, jonka peli lukee suoraan Assets-kansion polusta, ei tule buildiin mukaan. Tee skriptiin TextAsset-tyyppinen kenttä ja vedä tiedosto siihen Inspector-ikkunassa, tai siirrä tiedosto Resources-kansioon.",
              "Selaimessa toimivaa buildia ei voi avata tuplaklikkaamalla. Käytä Build And Run -painiketta, joka käynnistää paikallisen palvelimen."
            ]
          }
        },
        "14-3": {
          miksi: "Musiikkikurssin opiskelija pelaa samaa kierrosta kymmeniä kertoja, kun hän tekee peliin musiikkia ja ääniä. Jos virhe näkyy vasta kymmenennellä kierroksella, se haittaa juuri häntä. Testaat myös rajatapauksia eli tilanteita, joita pelaaja ei tavallisesti tee mutta voi tehdä vahingossa.",
          osat: [
            ["Kirjoita rajatapaukset", "Kirjoita jokaiselle pelille kaksi rajatapausta testimatriisiin. Rajatapaus on tilanne, jota pelaaja ei yleensä tee mutta voi tehdä, esimerkiksi Uudelleen-painikkeen painaminen kaksi kertaa nopeasti."],
            ["Pelaa kymmenen kierrosta peräkkäin", "Pelaa jokaisen pelin buildissa kymmenen kierrosta peräkkäin. Tarkista, että pisteet ja ajastin alkavat joka kierroksella alusta, peli ei hidastu eikä ruudulle jää mitään edelliseltä kierrokselta."],
            ["Kokeile eri ikkunakokoja", "Jos alusta sen sallii, kokeile buildia eri ikkunakoossa tai näytön tarkkuudella. Tarkista, että valikon painikkeet ja tekstit näkyvät kokonaan."],
            ["Aja rajatapaukset ja kirjaa tulokset", "Aja rajatapaukset buildissa ja kirjoita tulokset testimatriisiin. Tee jokaisesta virheestä kortti tehtävätauluun."]
          ],
          valmis: "Jokaisella pelillä on kaksi rajatapausta tuloksineen, ja olet pelannut jokaisen pelin buildissa kymmenen kierrosta peräkkäin.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` repositoryyn.",
          sanat: ["rajatapaus"],
          esimerkki: "”Testitapaus T34, pulmapeli: pelaaja painaa R-näppäintä samalla hetkellä, kun viimeinen laatikko osuu tavoiteruutuun. Odotettu tulos: loppuruutu näkyy kerran, eikä R enää palauta laatikoita. Havaittu tulos: loppuruutu näkyy, mutta laatikot palaavat sen alla alkuun.”",
          eiRiita: "”Pelasin monta kertaa, ja kaikki toimi.” Kirjauksesta ei näe, mitä kokeilit ja montako kierrosta pelasit.",
          apu: {
            title: "Jos aika ei riitä",
            vinkit: ["Kerro ohjaajalle, jos aika ei riitä. Jos ohjaaja siirtää tämän työvaiheen työviikolle 15, tee se ennen kuin viimeistelet avaamis- ja jatkotyöstöohjeen."]
          }
        },
        "14-4": {
          miksi: "Musiikkikurssin opiskelijat avaavat luovuttamasi projektit omilla koneillaan ja muokkaavat niitä. Siksi tarkistat, ettei luovutukseen jää nimiä, sähköpostiosoitteita tai salasanoja ja että ulkoiset paketit tulevat luotettavasta lähteestä. Tarkistat myös, ettei peli kaadu, jos joku kirjoittaa datatiedostoon virheen.",
          osat: [
            ["Luo arvion tiedosto", "Luo tiedosto `project-docs/tietoturva-arvio.md`. Kirjoita siihen jokaisen seuraavan askeleen jälkeen, mitä tarkistit ja mitä löysit."],
            ["Listaa luovutettavat tiedostot", "Avaa GitHub Desktopin Repository-valikosta komentorivi: Open in Command Prompt tai Open in Terminal. Aja komento kohdasta ”Tarvitsen apua tähän työvaiheeseen”. Se listaa kaikki tiedostot, jotka luovutat repositoryn mukana."],
            ["Tarkista tiedostot", "Käy lista läpi ja merkitse tiedostot, joissa on nimiä, sähköpostiosoitteita, salasanoja tai muuta, mikä ei kuulu luovutukseen. Katso erityisesti kuvakaappaukset, koska niissä voi näkyä nimiä."],
            ["Tarkista ulkoiset paketit", "Avaa Window-valikosta Package Manager ja kirjoita arvioon, mitä paketteja peleissäsi on ja mistä ne tulevat."],
            ["Testaa virheellinen data", "Kirjoita testitapaus, jossa pelin datatiedostossa on virhe, esimerkiksi kenttätiedostossa on tuntematon merkki. Aja testi ja kirjoita tulos testimatriisiin."],
            ["Kirjoita, mitä korjasit", "Kirjoita arvion loppuun, mitä korjasit löytämiesi asioiden perusteella, esimerkiksi minkä kuvakaappauksen poistit. Tee lopuksi commit ja paina Push origin."]
          ],
          valmis: "Tietoturva-arviossa kerrot, mitä luovutettavista tiedostoista löytyi, mistä ulkoiset paketit tulevat ja mitä virheellisen datan testissä tapahtui.",
          tallenna: "`project-docs/tietoturva-arvio.md` ja virheellisen datan testitapaus testimatriisiin repositoryyn.",
          esimerkki: "”Komento listasi 412 tiedostoa. Kansiosta project-docs löytyi kuvakaappaus, jossa näkyy toisen opiskelijan nimi: poistin sen. Paketit: Input System ja TextMeshPro Unityn omasta rekisteristä. Testitapaus T31: kenttätiedostossa merkki X, odotettu tulos varoitus Console-ikkunaan ja peli jatkuu, havaittu tulos sama.”",
          eiRiita: "”Peli toimii ilman verkkoa, joten tietoturvariskejä ei ole.” Arviosta ei näe, mitä tarkistit.",
          apu: {
            title: "Luovutettavien tiedostojen lista",
            code: "git ls-files",
            vinkit: ["Komento listaa kaikki tiedostot, jotka ovat versionhallinnassa. Samat tiedostot lähtevät mukaan, kun luovutat repositoryn. Library- ja Builds-kansiot eivät näy listassa, jos .gitignore-tiedosto on kunnossa."]
          }
        }
      }
    },

    15: {
      type: "laatu",
      feature: "Avaamis- ja jatkotyöstöohje, assettiluettelo ja siistitty koodi ovat valmiina, ja olet poistanut projekteista tiedostot, joita pelit eivät käytä.",
      excerpt: "Pelimusiikin kurssin opiskelijoiden pitää saada projektit auki ja jatkaa niitä ilman sinua.",
      connection: "Työviikolla 14 testasit pelit buildeina. Nyt valmistelet projektit musiikkikurssin opiskelijoille, jotka jatkavat niitä omilla koneillaan. Kirjoitat ohjeen, jonka avulla he saavat projektit auki ja löytävät scenet, skriptit ja asetukset, ja poistat projekteista tiedostot, joita pelit eivät käytä. Työviikolla 16 ohjettasi kokeilee joku, joka ei ole nähnyt projektia aiemmin.",
      deliverable: "`docs/avaaminen-ja-jatkotyosto.md`, valmis `docs/assetit-ja-lisenssit.md`, siistitty koodi ja projekteista poistettu käyttämätön aineisto.",
      why: "Musiikkikurssin opiskelijat lisäävät peleihin itse musiikin ja äänet, joten heidän pitää saada Unity-projektit auki ja löytää niistä oikeat kohdat. Jos ohjetta ei ole, he joutuvat arvaamaan, mikä kansio avataan ja missä mikäkin on, eikä heille jää aikaa varsinaiseen harjoitukseen.",
      done: "Kloonaa repository uuteen kansioon ja tee avaamis- ja jatkotyöstöohjeen askeleet täsmälleen niin kuin niissä lukee. Jokainen peli aukeaa ja käynnistyy alkuvalikosta, ja kun muutat ohjeen mukaan yhden asetuksen, esimerkiksi kierroksen keston, muutos näkyy Play-tilassa.",
      record: "Kirjoita työviikon 15 merkintään, mitä korjasit ohjeeseen, kun kokeilit sitä itse, mitä poistit projekteista ja mitä muutit koodissa jatkotyöstöä varten. Näyttömatriisin rivit: dokumentointi sovitulla tavalla (k7), ylläpidettävä koodi (p5) ja asiakaslähtöinen viestintä (s2).",
      skills: ["dokumentointi (k7)", "ylläpidettävä koodi (p5)", "asiakaslähtöinen viestintä (s2)"],
      tehtavat: {
        "15-1": {
          miksi: "Musiikkikurssin opiskelija avaa projektin tämän ohjeen avulla, eikä hän voi kysyä sinulta, jos jokin jää epäselväksi. Siksi ohjeessa pitää lukea tarkasti, mikä kansio avataan, mistä scenet, skriptit ja asetukset löytyvät ja miten asetusta muutetaan. Ohje on myös työnäytteesi dokumentoinnista.",
          osat: [
            ["Lue työviikon 6 havainnot", "Avaa `project-docs/asiakaspalaute.md` ja lue, miten asiakas onnistui työviikolla 6, kun hän muutti asetuksen lyhyen ohjeesi avulla. Ota havainnot huomioon, kun kirjoitat tätä ohjetta."],
            ["Kirjoita, miten projektit avataan", "Kirjoita jokaisesta pelistä Unity-versio, mikä kansio avataan Unity Hubissa ja mikä scene avataan ensin. Kerro, että peli käynnistyy Play-painikkeesta, kun alkuvalikon scene on auki."],
            ["Kirjoita, mistä tiedostot löytyvät", "Kirjoita jokaisesta pelistä, missä kansioissa scenet, skriptit, prefabit ja data ovat. Kerro yhdellä virkkeellä, mitä kukin tärkeä skripti tekee."],
            ["Kirjoita, miten peliä pelataan", "Kirjoita ohjausohje ja kerro pelaajan näkökulmasta, miten kierros alkaa, mikä on tavoite ja miten kierros päättyy."],
            ["Kirjoita, miten asetusta muutetaan", "Valitse jokaisesta pelistä yksi asetus, esimerkiksi kierroksen kesto tai hypyn korkeus. Kirjoita, missä scenessä ja minkä GameObjectin Inspector-ikkunassa asetus on ja mikä kentän nimi on."],
            ["Kokeile ohjetta itse", "Kloonaa repository GitHub Desktopissa uuteen kansioon: File → Clone repository. Tee ohjeen askeleet täsmälleen niin kuin niissä lukee, ja korjaa ohjeeseen jokainen kohta, jossa jouduit arvaamaan."]
          ],
          valmis: "Ohje kertoo jokaisesta pelistä, miten se avataan ja pelataan, missä sen tiedostot ovat ja miten yksi asetus muutetaan. Olet itse tehnyt ohjeen askeleet uuteen kansioon kloonatussa repositoryssa.",
          tallenna: "`docs/avaaminen-ja-jatkotyosto.md` repositoryyn ja commit-linkki päiväkirjaasi.",
          sanat: ["JSON"],
          esimerkki: "”Avaa Unity Hub, valitse Add ja kansio Toimintapeli. Unity-versio on 6000.0.40f1. Avaa scene Assets/Scenes/Valikko ja paina Play. Kierroksen kesto: avaa scene Areena, valitse Hierarchy-ikkunasta RoundTimer ja muuta Inspector-ikkunassa kentän Round Length arvoa. Arvo on sekunteina.”",
          eiRiita: "”Avaa projekti Unityllä ja muuta asetuksia.” Lukija ei tiedä Unity-versiota, kansiota, sceneä eikä sitä, missä asetukset ovat.",
          apu: {
            title: "Ohjeen pohja",
            code: "# Avaaminen ja jatkotyöstö\n\nUnity-versio: VERSIO\n\n## PELIN NIMI\n\n### Avaaminen\n1. Avaa Unity Hub ja valitse Add.\n2. Valitse kansio KANSIO.\n3. Avaa scene SCENE ja paina Play.\n\n### Missä mikäkin on\n- Scenet: KANSIO\n- Skriptit: KANSIO ja tärkeimpien skriptien tehtävät\n- Prefabit: KANSIO\n- Data: TIEDOSTO\n\n### Pelaaminen\n- Ohjaus: NÄPPÄIMET\n- Kierros: MITEN ALKAA, MIKÄ ON TAVOITE, MITEN PÄÄTTYY\n\n### Asetuksen muuttaminen: ASETUS\n1. Avaa scene SCENE.\n2. Valitse Hierarchy-ikkunasta GAMEOBJECT.\n3. Muuta Inspector-ikkunassa kentän KENTTÄ arvoa.\n4. Paina Play ja kokeile muutosta.",
            vinkit: [
              "Inspector-ikkunaan Play-tilassa tehdyt muutokset häviävät, kun Play-tila loppuu. Kirjoita ohjeeseen, että lukija muuttaa asetuksen ennen kuin painaa Play.",
              "Jos asetus on datatiedostossa, esimerkiksi ScriptableObjectissa tai JSON-tiedostossa, kirjoita tiedoston polku ja kentän nimi.",
              "Kirjoita Unityn ikkunoiden ja painikkeiden nimet niin kuin ne näkyvät ruudulla, esimerkiksi Hierarchy, Inspector ja Play."
            ]
          }
        },
        "15-2": {
          miksi: "Musiikkikurssin opiskelijat saavat käyttää pelien kuvia ja muita assetteja vain niiden käyttöehtojen mukaan, joten kirjaat jokaisen assetin lähteen ja lisenssin luetteloon. Kun poistat tiedostot, joita mikään peli ei käytä, he löytävät projekteista oikeat tiedostot nopeammin eivätkä muokkaa vahingossa väärää tiedostoa.",
          osat: [
            ["Käy Art-kansiot läpi", "Käy jokaisen pelin Art-kansio läpi ja tarkista, että jokaisella assetilla on rivi assettiluettelossa eli tiedostossa `docs/assetit-ja-lisenssit.md`."],
            ["Täydennä lähteet ja lisenssit", "Lisää luetteloon puuttuvat lähteet ja lisenssit. Jos et löydä assetin lähdettä, vaihda tilalle asset, jonka käyttöehdot sallivat käytön."],
            ["Tee commit ennen poistoa", "Tee commit ennen kuin poistat mitään. Silloin saat poistetut tiedostot tarvittaessa takaisin GitHub Desktopissa."],
            ["Poista käyttämättömät tiedostot", "Poista Unityn Project-ikkunassa assetit ja skriptit, joita mikään peli ei käytä. Poista myös työviikon 1 Kokeilu-projekti, jos ohjaaja ei halua säilyttää sitä."],
            ["Kokeile pelejä poiston jälkeen", "Avaa jokainen peli ja pelaa kierros alusta loppuun. Tarkista, ettei Console-ikkunassa ole virheilmoituksia puuttuvista tiedostoista."],
            ["Tee siivouksesta commit", "Tee commit, jonka viestissä kerrot, mitä poistit, ja paina Push origin."]
          ],
          valmis: "Jokaisella peleissä käytetyllä assetilla on luettelossa lähde ja lisenssi, olet poistanut käyttämättömät tiedostot, ja jokainen peli toimii poiston jälkeen.",
          tallenna: "Valmis `docs/assetit-ja-lisenssit.md` ja siivouscommit repositoryyn.",
          apu: {
            title: "Jos poisto rikkoo pelin",
            vinkit: [
              "Jos et ole vielä tehnyt poistosta committia, napsauta GitHub Desktopin Changes-välilehdellä poistettua tiedostoa hiiren kakkospainikkeella ja valitse Discard Changes. Tiedosto palaa paikalleen.",
              "Jos olet jo tehnyt poistosta commitin, napsauta committia History-näkymässä hiiren kakkospainikkeella ja valitse Revert Changes in Commit.",
              "Kun poistat tiedoston Unityn Project-ikkunassa, Unity poistaa samalla sen .meta-tiedoston. Jos poistat tiedoston muualla, poista myös samanniminen .meta-tiedosto."
            ]
          }
        },
        "15-3": {
          miksi: "Musiikkikurssin opiskelija lukee koodiasi, kun hän etsii kohtaa, jossa pelaaja esimerkiksi hyppää tai kierros päättyy. Jos skriptien ja metodien nimet kertovat, mitä ne tekevät, hän löytää kohdan lukematta koko koodia. Selkeästä koodista on hyötyä myös sinulle, kun teet viimeiset korjaukset.",
          osat: [
            ["Listaa skriptisi", "Listaa jokaisen pelin skriptit, jotka olet kirjoittanut itse. Valmiiden pakettien skriptejä et muuta."],
            ["Tarkista nimet", "Tarkista, että muuttujien, metodien ja luokkien nimet kertovat, mitä ne tekevät. Muuta epäselvät nimet. Lue ensin avusta, mitä nimen muuttamisessa pitää huomata."],
            ["Poista käyttämätön koodi", "Poista kokeilukoodi, jonka olet jättänyt kommentiksi, ja muuttujat, joita koodi ei käytä."],
            ["Lisää alkukommentit", "Lisää jokaisen skriptin alkuun kommentti, joka kertoo, mitä skripti tekee ja mihin GameObjectiin se liitetään."],
            ["Pelaa jokainen peli läpi uudelleen", "Pelaa jokaisen pelin peruskierros alusta loppuun, jotta näet, ettei siistiminen rikkonut mitään. Jos muutit nimeä, joka mainitaan jatkotyöstöohjeessa, päivitä nimi myös ohjeeseen."],
            ["Tee commit ja lähetä se GitHubiin", "Tee commit, jonka viestissä kerrot, että siistit koodia, ja paina Push origin."]
          ],
          valmis: "Skripteissäsi on kuvaavat nimet ja alkukommentit, olet poistanut käyttämättömän koodin, ja jokaisen pelin peruskierros menee läpi.",
          tallenna: "Siistimiscommit repositoryyn ja yksi ennen ja jälkeen -esimerkki päiväkirjaasi.",
          esimerkki: "Ennen: muuttuja t ja metodi Do(). Jälkeen: muuttuja timeLeft ja metodi EndRound(bool won), ja skriptin alussa kommentti ”Laskee kierroksen ajan ja päättää kierroksen. Liitetään RoundTimer-objektiin.”",
          eiRiita: "Lisäsit kommentin jokaiselle riville, mutta nimet ovat yhä t ja Do(). Lukija ei vieläkään tiedä, mitä ne tekevät.",
          apu: {
            title: "Kun muutat nimeä",
            code: "using UnityEngine.Serialization;\n\n// Inspector-ikkunassa asetettu arvo säilyy, vaikka kentän nimi muuttuu:\n[FormerlySerializedAs(\"t\")]\n[SerializeField] private float timeLeft;",
            vinkit: [
              "Jos muutat sellaisen kentän nimeä, joka näkyy Inspector-ikkunassa, Unity unohtaa kenttään asetetun arvon. Lisää kentän yläpuolelle FormerlySerializedAs-rivi niin kuin koodiesimerkissä, tai aseta arvo Inspector-ikkunassa uudelleen.",
              "Jos muutat luokan nimeä, muuta skriptitiedoston nimi samaksi. Muuten Unity ei pysty käyttämään skriptiä, ja Inspector-ikkunassa näkyy varoitus."
            ]
          }
        }
      }
    },

    16: {
      type: "julkaisu",
      feature: "Vastaanottotestaaja, joka ei ollut nähnyt projektia aiemmin, on avannut Unity-projektit, käynnistänyt pelit ja muuttanut yhden asetuksen pelkän kirjallisen ohjeen avulla. Jokainen hänen havaintonsa on korjattu tai kirjattu tiedossa olevaksi puutteeksi.",
      connection: "Työviikolla 15 kirjoitit ohjeen pelien avaamiseen ja jatkotyöstöön ja siistit koodin. Nyt lopetat uusien asioiden lisäämisen ja merkitset version, jonka aiot luovuttaa. Sitten joku, joka ei ole nähnyt projektiasi, kokeilee, saako hän pelit auki ja yhden asetuksen muutettua pelkän ohjeesi avulla. Kun näet, missä kohdissa hän epäröi, tiedät, mitä ohjeeseen pitää vielä korjata ennen luovutusta.",
      deliverable: "Luovutusehdokas (tag v0.9), testaajalle kirjoitettu tehtävä, testaajan havainnot hänen omin sanoinaan, korjattu avaamis- ja jatkotyöstöohje ja päivitetty luettelo tiedossa olevista puutteista.",
      why: "Kun olet itse kirjoittanut ohjeen, et huomaa, mitä siitä puuttuu, koska tiedät asiat jo valmiiksi. Siksi ohjetta kokeilee joku, joka ei tunne projektia. Hän on samassa tilanteessa kuin musiikkikurssin opiskelija, joka avaa pelit luovutuksen jälkeen.",
      done: "Testaaja avaa projektit ja käynnistää pelit pelkän kirjallisen ohjeen avulla, eikä kukaan neuvo häntä. Hän muuttaa ohjeen avulla yhden asetuksen, esimerkiksi kierroksen keston, ja näkee muutoksen Play-tilassa. Jokainen kohta, jossa hän epäröi, on korjattu ohjeeseen tai kirjattu tiedossa olevaksi puutteeksi.",
      record: "Kirjoita työviikon 16 merkintään, missä kohdissa testaaja epäröi, löysikö hän muutettavan asetuksen ja miten korjasit ohjeen tai koodin. Näyttömatriisin rivit: dokumentointi (k7), versionhallinta (s12) ja virheiden etsiminen ja korjaaminen (p2), jos korjasit estävän virheen.",
      skills: ["ohjeen testaus ja korjaus (k7)", "versionhallinta (s12)", "virheiden etsiminen ja korjaaminen (p2)"],
      tehtavat: {
        "16-1": {
          miksi: "Testaajan pitää kokeilla samaa versiota, jonka luovutat asiakkaille. Siksi lopetat nyt uusien asioiden lisäämisen ja merkitset version tagilla. Testaaja aloittaa repositoryn uudesta kopiosta, joten jos jokin tiedosto on vain sinun työkansiossasi eikä versionhallinnassa, huomaat sen nyt etkä vasta luovutuksessa.",
          osat: [
            ["Lopeta uusien asioiden lisääminen", "Tästä eteenpäin korjaat vain ohjeen epäselvät kohdat ja estävät virheet eli virheet, joiden takia peliä ei voi pelata tai projekti ei aukea. Uusia ominaisuuksia et enää lisää."],
            ["Merkitse luovutusehdokas", "Luovutusehdokas on versio, jonka luovutat, jos testissä ei löydy estäviä virheitä. Napsauta GitHub Desktopin History-näkymässä uusinta commitia hiiren kakkospainikkeella, valitse Create Tag, anna nimeksi v0.9 ja paina Push origin."],
            ["Kloonaa repository uuteen kansioon", "Kloonaa repository GitHub Desktopilla uuteen kansioon tai koulun koneelle. Tällaista kopiota kutsutaan puhtaaksi klooniksi: siinä on vain se, mikä on versionhallinnassa. Testaaja aloittaa siitä eikä sinun työkansiostasi."],
            ["Tarkista ohjeesta asetuksen muuttaminen", "Tarkista, että ohjeessa `docs/avaaminen-ja-jatkotyosto.md` kerrotaan, mistä löytyy yksi pelin asetus, esimerkiksi kierroksen kesto, ja miten sitä muutetaan Inspector-ikkunassa. Lisää kohta ohjeeseen, jos se puuttuu."],
            ["Kirjoita testaajalle tehtävä", "Kirjoita tehtävä: avaa jokainen peli ohjeen mukaan ja pelaa yksi kierros. Muuta sitten ohjeen avulla yhtä asetusta, esimerkiksi kierroksen kestoa, ja kokeile muutosta Play-tilassa."],
            ["Sovi testin aika", "Sovi testaajan kanssa aika ja kone, jolla testi tehdään. Koneella pitää olla Unity Hub. Jos testaajaa ei ole vielä nimetty, pyydä ohjaajaa etsimään joku, joka ei ole nähnyt projektiasi."]
          ],
          valmis: "Luovutusehdokas on merkitty (tag v0.9), puhdas klooni on valmiina, ohjeessa kerrotaan, miten asetus muutetaan, ja testaajan tehtävä on kirjoitettu.",
          tallenna: "Testaajan tehtävä tiedostoon `project-docs/vastaanottotesti.md` ja luovutusehdokkaan versiomerkintä (tag v0.9) repositoryyn.",
          sanat: ["vastaanottotesti", "luovutusehdokas", "puhdas klooni"]
        },
        "16-2": {
          miksi: "Jokainen kohta, jossa testaaja epäröi tai kysyy jotain, on kohta, joka ohjeesta pitää korjata. Kirjoita hänen sanansa muistiin sellaisinaan. Silloin korjaat sen, mikä hänelle oikeasti oli epäselvää, etkä sitä, mitä itse arvaat.",
          osat: [
            ["Anna testaajalle ohje ja tehtävä", "Anna testaajalle kirjallinen ohje ja tehtävä. Älä neuvo häntä puhumalla. Jos hän jää jumiin, kirjaa kohta ja pyydä häntä jatkamaan seuraavasta pelistä."],
            ["Seuraa testaajaa hiljaa", "Kirjoita muistiin jokainen kohta, jossa testaaja epäröi, kysyy jotain tai tekee jotain muuta kuin ohjeessa tarkoitetaan. Merkitse, mitä ohjeen kohtaa hän oli silloin lukemassa."],
            ["Kirjaa, onnistuiko asetuksen muutos", "Kirjaa, löysikö testaaja ohjeen avulla muutettavan asetuksen ja näkyikö muutos Play-tilassa."],
            ["Kysy lopuksi kaksi kysymystä", "Kun testaaja on valmis, kysy häneltä, mikä oli vaikeinta ja mitä ohjeesta puuttui."],
            ["Kirjoita vastaukset testaajan sanoin", "Kirjoita testaajan vastaukset hänen omin sanoinaan lainausmerkkeihin. Kirjaa myös päivä ja testaajan rooli, esimerkiksi ”toisen ryhmän opiskelija”, mutta älä kirjaa nimeä."],
            ["Luokittele havainnot", "Merkitse jokaiseen havaintoon yksi kolmesta: ohjeen korjaus, estävä virhe (peliä ei voi pelata tai projekti ei aukea) tai tiedossa oleva puute (asia, jota et korjaa ennen luovutusta)."]
          ],
          valmis: "Vastaanottotestin kirjauksessa ovat päivä, testaajan rooli, kohdat, joissa hän epäröi, ja hänen vastauksensa lainauksina. Kirjauksesta näkyy myös, onnistuiko asetuksen muutos, ja jokaisella havainnolla on luokka.",
          tallenna: "Päivitetty `project-docs/vastaanottotesti.md` repositoryyn.",
          esimerkki: "”Ohjeen kohta 3: testaaja etsi sceneä Scenes-kansiosta, mutta ohjeessa luki vain ’avaa valikko’. Testaaja: ’En tiennyt, mikä näistä on valikko.’ Luokka: ohjeen korjaus. Asetuksen muutos: testaaja löysi kierroksen keston RoundTimer-objektista ohjeen kohdan 5 avulla ja muutti sen 60 sekunnista 30 sekuntiin. Muutos näkyi Play-tilassa.”",
          eiRiita: "”Testaaja sai pelit auki.” Kirjauksesta ei näe, missä kohdissa hän epäröi tai onnistuiko asetuksen muutos."
        },
        "16-3": {
          miksi: "Jokainen koodimuutos voi rikkoa jotain muuta pelissä, ja luovutukseen on enää viikko. Siksi korjaat nyt vain ohjeen epäselvät kohdat ja estävät virheet. Muut havainnot kirjaat tiedossa oleviksi puutteiksi, jotta asiakkaat tietävät niistä.",
          osat: [
            ["Käy havainnot läpi", "Avaa vastaanottotestin kirjaus ja käy havainnot läpi tässä järjestyksessä: ensin estävät virheet, sitten ohjeen korjaukset ja viimeisenä tiedossa olevat puutteet."],
            ["Korjaa ohjeen epäselvät kohdat", "Korjaa tiedostoon `docs/avaaminen-ja-jatkotyosto.md` jokainen kohta, jossa testaaja epäröi. Kirjoita kohta niin tarkasti, ettei seuraavan lukijan tarvitse kysyä samaa. Lisää esimerkiksi scenen koko polku."],
            ["Korjaa estävät virheet", "Korjaa jokainen estävä virhe virheenkorjausketjuna: toista virhe, etsi syy, korjaa ja testaa korjaus. Pelaa sen jälkeen pelin peruskierros alusta loppuun, jotta näet, ettei korjaus rikkonut muuta (regressiotesti)."],
            ["Kirjaa loput havainnot puutteiksi", "Kirjaa havainnot, joita et korjaa, tiedostoon `docs/testitulokset-ja-puutteet.md` tiedossa olevina puutteina."],
            ["Tee commit ja push", "Tee korjauksista commit ja paina Push origin. Kirjoita vastaanottotestin kirjaukseen jokaisen havainnon kohdalle, miten käsittelit sen."]
          ],
          valmis: "Jokainen vastaanottotestin havainto on korjattu ohjeeseen, korjattu estävänä virheenä tai kirjattu tiedossa olevaksi puutteeksi.",
          tallenna: "Korjauscommitit, korjattu `docs/avaaminen-ja-jatkotyosto.md` ja päivitetty `docs/testitulokset-ja-puutteet.md` repositoryyn sekä commit-linkit projektipäiväkirjaasi.",
          sanat: ["virheenkorjausketju", "regressiotesti"],
          esimerkki: "Ennen: ”Avaa valikko.” Jälkeen: ”Avaa Unity Hubissa kansio Pulmapeli. Avaa Project-ikkunasta scene Assets/Scenes/Valikko ja paina Play.”"
        }
      }
    },

    /* ============ VAIHE 5: LUOVUTUS JA NÄYTTÖ (17–18) ============ */
    17: {
      type: "julkaisu",
      feature: "Pelit toimivat repositoryn puhtaasta kloonista, kolmen pelin luovutusbuildit on koottu, ja asiakkaat ovat saaneet luovutuspaketin ja kuitanneet sen.",
      excerpt: "Valmis tarkoittaa meille kolmea pelattavaa peliä, muokattavia Unity-projekteja ja ohjeita, joiden avulla jatkamme niitä.",
      connection: "Vastaanottotestaaja kokeili luovutusehdokasta työviikolla 16, ja korjasit ohjeen hänen havaintojensa perusteella. Nyt testaat pelit vielä kerran repositoryn uudesta kopiosta, teet jokaisesta pelistä luovutusbuildin ja luovutat paketin asiakkaille. Sen jälkeen jäljellä on enää näyttö työviikolla 18.",
      deliverable: "Regressiotestin tulokset puhtaasta kloonista, kolmen pelin luovutusbuildit zip-tiedostoina, luovutusversio (tag v1.0), luovutuspaketti ja asiakkaiden kuittaus.",
      why: "Peli voi toimia sinun koneellasi, vaikka siitä puuttuu jotain, esimerkiksi tiedosto, joka on vain sinun työkansiossasi eikä versionhallinnassa. Kun testaat ja kokoat pelit repositoryn uudesta kopiosta, näet saman kuin asiakkaat ja ehdit korjata puutteet ennen luovutusta.",
      done: "Avaa luovutuspaketti toisella koneella tai muussa kansiossa kuin työkansiossasi, käynnistä jokainen peli ja käy luovutuslistan kohdat läpi. Jokainen listan kohta löytyy paketista.",
      record: "Kirjoita työviikon 17 merkintään, mitä löysit regressiotestissä, millä asetuksilla kokosit luovutusbuildit ja millä tavalla luovutit paketin asiakkaille. Näyttömatriisin rivit: julkaisu tuotantoympäristöön (s14), julkaisu asiakkaan ympäristöön (k6) ja versionhallinta (s12).",
      skills: ["julkaisu asiakkaan ympäristöön (s14, k6)", "versionhallinta (s12)", "regressiotestaus puhtaasta kloonista"],
      tehtavat: {
        "17-1": {
          miksi: "Työviikon 16 korjaukset ovat voineet rikkoa jotain muuta pelissä. Regressiotestissä pelaat jokaisen pelin perusasiat uudelleen ja tarkistat, että ne toimivat yhä. Teet testin puhtaasta kloonista eli repositoryn uudesta kopiosta, koska asiakkaat saavat pelit repositorysta eivätkä sinun työkansiostasi.",
          osat: [
            ["Tarkista, onko estäviä virheitä jäljellä", "Katso tehtävätaulusta, onko siellä vielä estäviä virheitä eli virheitä, joiden takia peliä ei voi pelata tai projekti ei aukea. Muita muutoksia et enää tee."],
            ["Korjaa estävät virheet", "Korjaa jokainen estävä virhe omana commitinaan ja kirjoita siitä testitapaus testimatriisiin. Paina lopuksi Push origin, jotta korjaukset ovat mukana, kun kloonaat repositoryn."],
            ["Kloonaa repository uuteen kansioon", "Kloonaa repository GitHub Desktopilla kansioon, jossa sitä ei vielä ole. Avaa jokainen peli Unity Hubissa tästä puhtaasta kloonista."],
            ["Aja regressiotesti jokaisessa pelissä", "Pelaa jokaisessa pelissä peruskierros alusta loppuun, aloita kierros uudelleen ja palaa alkuvalikkoon."],
            ["Kirjaa tulokset", "Kirjaa jokaisen pelin tulos ja päivä testimatriisiin ja merkitse, että testasit puhtaasta kloonista."]
          ],
          valmis: "Tehtävätaulussa ei ole estäviä virheitä, ja jokaisen pelin peruskierros, uudelleenaloitus ja paluu alkuvalikkoon toimivat puhtaasta kloonista.",
          tallenna: "Regressiotestin tulokset tiedostoon `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn.",
          sanat: ["regressiotesti", "puhdas klooni"]
        },
        "17-2": {
          miksi: "Musiikkikurssin opiskelijat pelaavat pelejä buildeina eli valmiiksi koottuina versioina, joita ei tarvitse avata Unityssä. Kun kokoat buildit puhtaasta kloonista ja testaat ne ilman Unity-editoria, tiedät, että ne toimivat myös asiakkaiden koneilla. Buildit ovat työnäytteesi siitä, että osaat julkaista ohjelman asiakkaan ympäristöön.",
          osat: [
            ["Avaa ensimmäisen pelin build-asetukset", "Avaa ensimmäinen peli puhtaasta kloonista ja valitse File-valikosta Build Profiles. Vanhemmissa Unity-versioissa ikkunan nimi on Build Settings."],
            ["Tarkista alusta ja scenet", "Tarkista, että alusta on asiakkaiden kanssa sovittu ja että pelin kaikki scenet ovat Scene List -luettelossa. Alkuvalikon pitää olla ensimmäisenä, jotta peli käynnistyy alkuvalikosta."],
            ["Kokoa build", "Paina Build ja valitse kansioksi Builds-kansio puhtaan kloonin sisällä. Älä kokoa buildia omasta työkansiostasi."],
            ["Testaa build ilman Unityä", "Sulje Unity kokonaan. Käynnistä build Builds-kansiosta, pelaa kierros, aloita kierros uudelleen ja palaa alkuvalikkoon."],
            ["Pakkaa build zip-tiedostoksi", "Pakkaa build zip-tiedostoksi, jonka nimessä ovat pelin nimi, alusta ja versio, esimerkiksi Pulmapeli-Windows-v1.0.zip. Silloin asiakkaat tunnistavat tiedoston avaamatta sitä."],
            ["Tee sama kahdelle muulle pelille", "Toista nämä vaiheet kahdelle muulle pelille. Jos pelit ovat samassa projektissa, vaihda Scene List -luetteloon kunkin pelin scenet ja tee jokainen build omaan kansioonsa. Lopuksi sinulla on kolme zip-tiedostoa."]
          ],
          valmis: "Kaikkien kolmen pelin buildit on koottu puhtaasta kloonista, ja ne käynnistyvät ilman Unity-editoria. Jokaisen zip-tiedoston nimessä ovat pelin nimi, alusta ja versio.",
          tallenna: "Kolme zip-tiedostoa samaan kansioon repositoryn ulkopuolelle. Kokoat niistä luovutuspaketin seuraavassa työvaiheessa. Kirjoita lisäksi jokaisen pelin alusta ja scenejen järjestys projektipäiväkirjaasi.",
          sanat: ["build"]
        },
        "17-3": {
          miksi: "Asiakkaat tilasivat kolme pelattavaa peliä, muokattavat Unity-projektit ja ohjeet, joiden avulla he jatkavat pelejä. Kun käyt luovutuslistan läpi kohta kohdalta, huomaat puuttuvan asian ennen kuin asiakkaat huomaavat sen. Lopuksi asiakkaat kuittaavat eli vahvistavat, että he ovat saaneet paketin, ja silloin luovutus on valmis.",
          osat: [
            ["Kokoa luovutuspaketti", "Kokoa luovutuspaketti luovutuslistan mukaan. Lista on tämän työvaiheen kohdassa ”Tarvitsen apua tähän työvaiheeseen”."],
            ["Käy luovutuslista läpi", "Käy luovutuslista läpi kohta kohdalta. Rastita kohta vasta, kun olet löytänyt sen paketista."],
            ["Merkitse luovutusversio", "Napsauta History-näkymässä luovutettavaa commitia hiiren kakkospainikkeella, valitse Create Tag ja anna nimeksi v1.0. Paina sitten Push origin."],
            ["Luovuta paketti sovitulla tavalla", "Luovuta paketti asiakkaille tavalla, josta ohjaaja on päättänyt, esimerkiksi GitHubin julkaisuna (release) tai oppilaitoksen jaetussa kansiossa."],
            ["Pyydä asiakkailta kuittaus", "Pyydä asiakkailta viesti, jossa he vahvistavat saaneensa paketin. Kirjaa kuittaus ja sen päivä päätöslokiin."]
          ],
          valmis: "Luovutuslistan jokainen kohta on paketissa, luovutusversio on merkitty (tag v1.0), ja asiakkaat ovat kuitanneet saaneensa paketin.",
          tallenna: "Luovutusversion versiomerkintä (tag v1.0) ja päätöslokin kuittausmerkintä repositoryyn.",
          apu: {
            title: "Luovutuslista",
            code: "LUOVUTUSLISTA\n[ ] Kolmen pelin buildit sovitulle alustalle (zip-tiedostot)\n[ ] Muokattavat Unity-projektit (repository tai sen kopio)\n[ ] Unity-versio kirjattuna README-tiedostoon ja ohjeeseen\n[ ] docs/avaaminen-ja-jatkotyosto.md: avaaminen, pelaaminen ja jatkotyöstö\n[ ] docs/assetit-ja-lisenssit.md: lähteet ja käyttöehdot\n[ ] docs/testitulokset-ja-puutteet.md: testitulokset ja tiedossa olevat puutteet",
            vinkit: [
              "Ohjaaja päättää, millä tavalla paketti luovutetaan ja millä lisenssillä eli käyttöehdoilla asiakkaat saavat käyttää ja muokata pelejä. Jos niistä ei ole sovittu, kysy ohjaajalta ennen luovutusta.",
              "Kansiossa project-docs ovat projektipäiväkirjasi, AI-lokisi ja muut arviointia varten tehdyt tiedostot. Ne eivät kuulu asiakkaiden pakettiin, ellei ohjaajan kanssa ole toisin sovittu. Jos luovutat repositoryn kopiona, poista kansio project-docs kopiosta."
            ]
          }
        }
      }
    },

    18: {
      type: "naytto",
      feature: "Olet esitellyt ratkaisusi, testisi ja päätöksesi ja tehnyt ohjaajan pyytämän muutoksen koodiisi. Näyttömatriisisi jokaisella rivillä on täsmälinkki työnäytteeseen tai merkintä siitä, että työnäyte puuttuu.",
      connection: "Luovutit pelit asiakkaille työviikolla 17. Viimeisellä viikolla et enää lisää peleihin mitään uutta. Kokoat työnäytteesi niin, että arvioija löytää ne, ja esittelet osaamisesi. Esittelyssä selität ratkaisujasi ja muutat koodiasi ohjaajan pyynnöstä.",
      deliverable: "Näyttömatriisi täsmälinkein, esittelyn runko, esittelyssä tehty muutos ja itsearviointi.",
      why: "Arvioija arvioi osaamisesi sen perusteella, mitä hän näkee näytössä. Jos hän ei löydä työnäytettä, hän ei voi ottaa sitä huomioon, vaikka olisit tehnyt työn. Esittelyssä näytät lisäksi, että ymmärrät oman koodisi ja osaat muuttaa sitä.",
      done: "Ohjaaja valitsee yhden ratkaisusi. Selität, mitä koodi tekee, ja teet siihen pienen muutoksen, joka toimii Play-tilassa. Näyttömatriisisi jokaisella rivillä on täsmälinkki tai merkintä siitä, että työnäyte puuttuu.",
      record: "Kirjoita työviikon 18 merkintään, minkä ratkaisun ohjaaja valitsi, mitä muutit ja mitä työnäytteitä vielä täydentäisit. Näyttömatriisin rivit: oman toiminnan arviointi (p11) ja kaikki rivit, joille kokosit täsmälinkit.",
      skills: ["oman osaamisen esittely", "koodin selittäminen ja muuttaminen", "oman toiminnan arviointi (p11)"],
      paivat: [
        ["Aineisto", "Kokoa näyttömatriisi täsmälinkein ja tarkista, että projektipäiväkirja ja AI-loki ovat repositoryssa kansiossa project-docs."],
        ["Esittely", "Valmistele 8–10 minuutin esittely: peli toiminnassa, kaksi ratkaisuasi koodissa, korjattu virhe ja Git-historia."],
        ["Harjoittelu", "Harjoittele esittely kerran ääneen ja ota aikaa, kuinka kauan se kestää. Kokeile myös tehdä pieni muutos koodiisi ja selitä samalla ääneen, mitä teet."],
        ["Varapäivä", "Täydennä puuttuvat linkit ja kysy ohjaajalta, jos jokin on epäselvää."],
        ["Näyttö", "Pidä esittely, tee ohjaajan pyytämä muutos ja kirjoita itsearviointi."]
      ],
      tehtavat: {
        "18-1": {
          miksi: "Näyttömatriisi on taulukko, jossa jokaisen arvioitavan vaatimuksen kohdalla on linkki työnäytteeseesi. Kun linkki vie suoraan oikeaan commitiin, testitapaukseen tai tiedostoon, arvioija löytää työnäytteen etsimättä. Tällaista linkkiä kutsutaan täsmälinkiksi.",
          osat: [
            ["Tarkista, mitkä tutkinnon osat näytät", "Kysy ohjaajalta, minkä tutkinnon perusteiden mukaan sinut arvioidaan ja mitkä tutkinnon osat näytät tässä projektissa."],
            ["Luo näyttömatriisin tiedosto", "Kopioi pohja tämän työvaiheen kohdasta ”Tarvitsen apua tähän työvaiheeseen” tiedostoon `project-docs/nayttomatriisi.md`. Kopioi sitten sivun Näyttömatriisi-näkymästä omien tutkinnon osiesi jokainen vaatimus taulukkoon omaksi rivikseen."],
            ["Täytä jokainen rivi", "Kirjoita jokaisen vaatimuksen riville tehtävä, jossa näytit sen, peli ja täsmälinkki, esimerkiksi commit, testitapaus, tiedosto tai tag."],
            ["Merkitse puuttuvat työnäytteet", "Jos jostakin vaatimuksesta ei ole työnäytettä, kirjoita se sarakkeeseen Täydennettävää. Älä keksi työnäytettä, jota ei ole."],
            ["Rastita rivit sivulla", "Rastita sivun Näyttömatriisi-näkymässä rivit, joilla on täsmälinkki. Rastit ovat vain sinun muistilistasi. Arvioija katsoo tiedostoa nayttomatriisi.md."]
          ],
          valmis: "Näyttömatriisin jokaisella rivillä on täsmälinkki tai merkintä Täydennettävää-sarakkeessa.",
          tallenna: "`project-docs/nayttomatriisi.md` repositoryyn.",
          sanat: ["täsmälinkki"],
          apu: {
            title: "Näyttömatriisin pohja",
            code: "# Näyttömatriisi\n\nOpiskelija: NIMI\nTutkinnon perusteet: DIAARINUMERO (ohjaaja vahvistaa)\n\n| Tutkinnon osa ja vaatimus | Tehtävä | Peli | Työnäytteen täsmälinkki | Testi tai esittely | Täydennettävää |\n| --- | --- | --- | --- | --- | --- |\n| Ohjelmointi: testaa ohjelman toimintoja | Pulmapelin uudelleenaloituksen testit | Pulmapeli | LINKKI | testitapaus T15 | |"
          }
        },
        "18-2": {
          miksi: "Esittelyssä arvioija näkee pelin toiminnassa ja kuulee, miten selität koodisi ja testisi. Kun valmistelet esittelyn etukäteen ja pidät täsmälinkit valmiina, sinun ei tarvitse etsiä asioita kesken esittelyn.",
          osat: [
            ["Valitse kaksi ratkaisua", "Valitse kaksi ohjelmointiratkaisuasi, jotka osaat selittää parhaiten. Ratkaisu voi olla esimerkiksi skripti tai metodi, joka päättää kierroksen."],
            ["Valitse yksi korjaamasi virhe", "Valitse yksi virheenkorjausketjusi eli virhe, jonka löysit, toistit, korjasit ja testasit uudelleen."],
            ["Kirjoita esittelyn runko", "Kirjoita 8–10 minuutin esittelyn runko: peli toiminnassa, kaksi ratkaisuasi koodissa, korjattu virhe, testisi ja Git-historia. Lisää jokaiseen kohtaan täsmälinkki."],
            ["Kerro tekoälyn käytöstä", "Jos käytit tekoälyä, valmistaudu kertomaan, mihin käytit sitä ja miten tarkistit tuloksen. Ota AI-loki mukaan esittelyyn."],
            ["Harjoittele esittely ääneen", "Harjoittele esittely kerran ääneen ja ota aikaa, kuinka kauan se kestää. Jos esittely kestää yli 10 minuuttia, lyhennä sitä."],
            ["Varaudu kysymyksiin", "Kirjoita esittelyn runkoon kaksi kysymystä, joita ohjaaja voisi kysyä, ja vastaa niihin lyhyesti."]
          ],
          valmis: "Esittelyn runko täsmälinkkeineen on tiedostossa `project-docs/esittely.md`, ja olet harjoitellut esittelyn kerran ääneen.",
          tallenna: "`project-docs/esittely.md` repositoryyn.",
          sanat: ["virheenkorjausketju"],
          esimerkki: "”1. Tasohyppely toiminnassa, 1 min. 2. RoundManager.cs: miten kierros päättyy vain kerran (commit-linkki). 3. Pulmapelin kentän luku tekstitiedostosta (commit-linkki). 4. Korjattu virhe: Uudelleen-painikkeen tuplapainallus aloitti kaksi kierrosta (testitapaus T27). 5. Testimatriisi ja Git-historia.”",
          eiRiita: "”Näytän pelit ja kerron, mitä tein.” Rungosta ei näe, mitä koodia näytät tai mistä se löytyy."
        },
        "18-3": {
          miksi: "Toimiva peli ei yksin näytä, että ymmärrät koodisi. Kun selität ratkaisun ja teet siihen muutoksen ohjaajan pyynnöstä, näytät, että osaat muokata koodia itse. Teit saman harjoituksen jo työviikoilla 3, 6 ja 9.",
          osat: [
            ["Pidä esittely", "Pidä valmistelemasi esittely ohjaajalle. Pidä peli auki Unityssä ja täsmälinkit valmiina."],
            ["Selitä ohjaajan valitsema ratkaisu", "Ohjaaja valitsee yhden ratkaisuistasi. Selitä, mitä koodi tekee ja miksi teit sen juuri näin."],
            ["Tee pyydetty muutos", "Tee ohjaajan pyytämä pieni muutos koodiisi. Muutos voi olla esimerkiksi uusi ehto tai kiinteä arvo, jonka teet Inspector-ikkunassa säädettäväksi."],
            ["Kokeile muutosta Play-tilassa", "Kokeile muutosta Play-tilassa ohjaajan nähden ja kerro, miten testaisit sen."],
            ["Tee muutoksesta commit", "Tee muutoksesta commit ohjaajan ohjeen mukaan ja paina Push origin."]
          ],
          valmis: "Olet selittänyt ohjaajan valitseman ratkaisun ja tehnyt siihen muutoksen, joka toimii Play-tilassa.",
          tallenna: "Muutoksen commit-linkki ja ohjaajan kysymykset projektipäiväkirjaasi."
        },
        "18-4": {
          miksi: "Itsearvioinnissa arvioit, miten toimit tiimin jäsenenä: miten sovit asioista ohjaajan kanssa, miten käytit asiakkaiden palautetta ja miten pyysit apua. Kirjoita jokaisen väitteen tueksi esimerkki omasta työstäsi, koska yleinen tunne, kuten ”meni hyvin”, ei kerro arvioijalle mitään.",
          osat: [
            ["Kirjoita yksi onnistuminen", "Kirjoita yksi asia, joka onnistui, ja lisää siihen täsmälinkki."],
            ["Kirjoita tilanne, jossa tarvitsit apua", "Kirjoita yksi tilanne, jossa jäit jumiin, keneltä pyysit apua ja miten ratkaisit asian."],
            ["Arvioi yhteistyötä", "Kirjoita, miten sovit tehtävistä ja niiden järjestyksestä ohjaajan kanssa ja miten käytit asiakkaiden palautetta ja toisen opiskelijan vertaisarviota. Kirjoita myös, mitä tekisit seuraavassa projektissa toisin."],
            ["Arvioi, mitä opit", "Kirjoita, mitä osaat nyt Unitystä ja versionhallinnasta sellaista, mitä et osannut vielä työviikolla 1. Vertaa lähtötasokokeiluusi tiedostossa `project-docs/lahtotaso.md`."],
            ["Kirjoita tekoälyn käytöstä", "Jos käytit tekoälyä, kirjoita yksi esimerkki AI-lokista: mitä kysyit, mitä muutit vastauksessa ja miten tarkistit, että tulos toimi."]
          ],
          valmis: "Itsearvioinnissa on onnistuminen, avun tarve, yhteistyö ja oppiminen sekä tekoälyn käyttö, jos käytit tekoälyä. Jokaisessa kohdassa on esimerkki omasta työstäsi, ja vähintään kolmessa on täsmälinkki.",
          tallenna: "`project-docs/itsearviointi.md` ja koko projektipäiväkirja tiedostona `project-docs/projektipaivakirja.md` repositoryyn.",
          esimerkki: "”Tarvitsin apua, kun pulmapelin uudelleenaloitus jätti laatikot sceneen kahteen kertaan (testitapaus T15). Kysyin ohjaajalta vasta seuraavana päivänä. Seuraavalla kerralla kysyn, kun olen ollut jumissa puoli tuntia.”",
          eiRiita: "”Projekti meni hyvin, ja opin paljon.” Siinä ei ole yhtään esimerkkiä omasta työstäsi."
        }
      }
    }
  },

  /* ---- opettajan aineisto: paperinen työpaketti, dokumentointipohjat ja näyttösuunnitelma ---- */
  opettaja: {
    jakso: "Työviikot 1–18",
    deadline: "työviikon 18 lopussa",
    kansiKuvaus: "Kolme Unity-peliprototyyppiä pelimusiikin kurssille, yksilöprojektina",
    kansiHuomiot: [
      "Aikataulu on muokattava ehdotus. Työviikot lasketaan opiskelijan omasta aloituksesta, eikä paketissa ole kalenteripäivämääriä.",
      "Repositoryyn ei laiteta henkilötietoja, salasanoja eikä muiden ihmisten nimiä. Henkilöistä kirjataan vain rooli.",
      "Rasti tässä vihossa tai sivustolla ei ole palautus: työnäyte on aina opiskelijan omassa Git-repositoryssa."
    ],
    viimeisetPaivat: [
      ["Päivä 1", "Näyttömatriisi täsmälinkein"],
      ["Päivä 2", "8–10 minuutin esittelyn valmistelu"],
      ["Päivä 3", "Esittelyn harjoittelu ja muutoksen kokeilu omaan koodiin"],
      ["Päivä 4", "Puskuri: puuttuvat linkit ja kysymykset ohjaajalle"],
      ["Päivä 5", "Esittely, muutos ohjaajan pyynnöstä ja itsearviointi"]
    ],

    pohjat: {
      aloitusVko: 1,
      kysymyksia: 8,
      vertailuVko: "2 ja 7",
      katselmointiVkot: "6, 12 ja 16",
      testiVko: 14,
      testeja: 21,
      testiLuokat: "Testitapauksia on vähintään 21: seitsemän jokaisesta pelistä (käynnistys, ohjausohje, päämekaniikka, visuaalinen palaute, kierroksen päättyminen, uudelleenaloitus ja paluu alkuvalikkoon). Lisäksi testataan toistuvat kierrokset, rajatapaukset ja koottu peliversio (build). Kirjaa jokaiselle odotettu tulos ennen ajoa.",
      ketjuja: 3,
      lisenssiVko: 5
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma – ProtoPaja",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena. Aikataulu ja ohjausvastuut ovat ehdotuksia, jotka vahvistetaan aloituksessa.",
      kohde: [
        "Näyttö toteutetaan oppilaitosympäristössä ohjattuna yksilöprojektina. Näyttömatriisi on koottu Tieto- ja viestintätekniikan perustutkinnon voimassa olevasta perusteesta (perusteId 9816282, diaarinumero OPH-6216-2025). Matriisin kolmen tutkinnon osan vaatimukset ovat sanatarkasti samat myös aiemmassa perusteessa OPH-4948-2021 (perusteId 7861752). Opiskelijan perusteversio ja suoritettavat tutkinnon osat vahvistetaan opiskelijakohtaisesti ennen näyttöä.",
        "Mahdolliset tutkinnon osat: Ohjelmointi (45 osp, 11 osaamisvaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 osaamisvaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 osaamisvaatimusta), yhteensä 32 osaamisvaatimusta. Opiskelija tekee kaikki kolme peliä ja niiden kaikki osat itse ja näyttää suoritettavien osiensa vaatimukset omalla työllään. Tiimityön vaatimukset (p8–p11 ja kehitystiimiin viittaavat s-vaatimukset) näytetään työskentelynä ohjaajan, asiakkaiden ja vertaisarvion tekevän toisen opiskelijan kanssa.",
        "Opiskelija toteuttaa 18 työviikon aikana Unityllä ja C#:lla kolme pientä peliprototyyppiä oppilaitoksen pelimusiikin kurssin harjoitusmateriaaliksi. Asiakkaat ovat Caito ja Toni, ohjaajat Matti ja Antti. Musiikkikurssin opiskelijat tekevät peleihin musiikit ja ääniefektit ja lisäävät ne peleihin itse; se on heidän harjoituksensa. Näyttöprojektin tekijä ei tee ääniä eikä äänentoistokoodia. Pelit toimivat ilman ääniä, koodi on selkeästi nimetty, ja avaamis- ja jatkotyöstöohje kertoo, miten projektit avataan ja mistä scenet, skriptit ja asetukset löytyvät. Unity on tässä ohjelmistokomponenttikirjasto: pelit kootaan sen valmiista ja omista komponenteista."
      ],
      p0: "Perustavoite: kolme prototyyppiä, joissa jokaisessa on päämekaniikka ja ydinsilmukka, yksi pieni kenttä ja 1–3 minuutin kierros, yhtenäiset grafiikat, alkuvalikko ohjausohjeineen, selkeä kierroksen päättyminen, uudelleenaloitus ja paluu alkuvalikkoon, visuaalinen palaute sekä testattu peliversio ja muokattava Unity-projekti. Lisätavoitteet (neljäs ja viides peli) vain, kun kolme on testattu ja luovutuskunnossa ja ohjaaja on hyväksynyt lisätyön; ne eivät ole sivuston työvaiheita.",
      roolit: [
        ["Opiskelija", "Toteuttaa kaikki kolme peliä ja niiden kaikki osat, tekee ja perustelee ratkaisunsa, testaa pelinsä, kirjaa työajan ja tehtävät sekä kokoaa näyttöaineistonsa. Sopii viikon tehtävistä ja niiden järjestyksestä ohjaajan kanssa viikkotarkistuksessa."],
        ["Ohjaajat Matti ja Antti (ehdotus)", "Seuraavat viikoittain etenemistä ja tuen tarvetta ja sopivat opiskelijan kanssa viikkotarkistuksessa tehtävistä ja niiden järjestyksestä. Käyvät opiskelijan kanssa läpi projektirakenteen ja tallennustavan vertailun (työviikot 2 ja 7). Päättävät Unity-versiosta, tekoälyn käytön pelisäännöistä, repositoryn julkisuudesta ja perusteversiosta, auttavat löytämään vertaisarvioijan, nimeävät vastaanottotestaajan ja korvaavat poissaolevan katselmoijan."],
        ["Asiakkaat Caito ja Toni (ehdotus)", "Vahvistavat aiheet ja kohdealustan, kokeilevat pelejä sovituissa katselmoinneissa (työviikot 6 ja 12) ja arvioivat, sopivatko ne musiikkikurssille. Asiakas tekee työviikolla 6 siirtokokeilun. Vastaanottavat luovutuspaketin työviikolla 17."],
        ["Toinen opiskelija (työviikko 9)", "Tekee vertaisarvion: testaa opiskelijan toisen pelin vaatimuslistaa vasten ja käy havainnot läpi opiskelijan kanssa. Ohjaaja auttaa löytämään vertaisarvioijan, esimerkiksi toisen näyttöprojektia tekevän opiskelijan."],
        ["Vastaanottotestaaja (työviikko 16)", "Projektin ulkopuolinen henkilö, jonka ohjaaja nimeää viimeistään työviikolla 12. Avaa projektit ja käynnistää pelit pelkän kirjallisen ohjeen avulla ilman suullista apua ja tekee siirtokokeilun: muuttaa ohjeen avulla yhden asetuksen Inspectorissa ja kokeilee muutosta Play-tilassa."],
        ["Arvioija", "Ottaa vastaan opiskelijan 8–10 minuutin esittelyn työviikolla 18, pyytää muutoksen opiskelijan koodiin ja käy läpi opiskelijan näyttömatriisin täsmälinkkeineen."]
      ],
      tarkistuspisteet: [
        [1, "Oma repository ja lähtötaso", "Unity-asennus sovitulla versiolla, oma yksityinen repository, kokeiluprojekti ja ensimmäinen commit ja push, .gitignore oikeassa kansiossa, lähtötasokokeilu ohjaajan kanssa läpikäytynä ja mahdolliset pienharjoitukset sovittuina, tehtävätaulu ja työaikataulukko perustettuina."],
        [2, "Suunnitelma", "Kolmen pelin pienimmät toimivat versiot, päätös yhdestä tai kolmesta Unity-projektista perusteluineen, ensimmäisen pelin kortit tuntiarvioineen, suunnitelma ja korttien järjestys käytyinä läpi ohjaajan kanssa sekä vahvistuspyynnöt avoimiin asioihin."],
        [3, "Tekninen pohja", "Projektirakenne, kokeilukenttä, päämekaniikka pseudokoodeineen, kokeiluversion build käynnistyy sovitulla alustalla ja ensimmäinen selitä ja muuta -tarkistus."],
        [4, "Ensimmäinen kierros", "Kierroksen lopun pseudokoodi ja toteutus sekä testitapaukset T01 ja T02 odotettuine tuloksineen."],
        [5, "Valikot ja palaute", "Alkuvalikko, loppuruutu ja palaute tehty omassa haarassa ja yhdistetty päähaaraan, grafiikkapaketti käyttöehtoineen assettiluettelossa ja toistuvien kierrosten testi."],
        [6, "Asiakaskokeilu 1", "Kokeiluversio (tag v0.1), palaute asiakkaan sanoin erillään omasta tulkinnasta, siirtokokeilu (asiakas muuttaa ohjeen avulla yhden asetuksen Inspectorissa), palautekortit järjestyksessä, arvio–toteumavertailu ja toinen selitä ja muuta -tarkistus."],
        [7, "Toinen peli: mekaniikka", "Toisen pelin pienin toimiva versio ja suunnitelma, sama kenttä kahdella tallennustavalla ja valinta päätöslokissa ohjaajan kanssa läpikäytynä, päämekaniikka ja sen testit."],
        [8, "Toinen peli: kierros", "Toisen pelin kierros suunnitelman mukaan, ensimmäisen pelin valikko liitettynä prefabina toiseen peliin, grafiikat ja koko kierroksen testi."],
        [9, "Vertaisarvio", "Toisen opiskelijan vertaisarvio toisesta pelistä ja havainnot yhdessä läpikäytyinä, ensimmäinen virheenkorjausketju, asiakkaiden palaute toisesta pelistä, kolmannen pelin rajaus vahvistettuna ja kolmas selitä ja muuta -tarkistus."],
        [10, "Kolmas peli: mekaniikka", "Kolmannen pelin mekaniikan pseudokoodi ja toteutus, asetukset datasta, grafiikat ja testit."],
        [11, "Kolmas peli: kierros", "Kolmannen pelin kierros ja valikko, koko kierroksen testi ja kolme havaintoa Unityn mahdollisuuksista ja rajoitteista."],
        [12, "Asiakaskatselmointi", "Katselmointiversio (tag v0.2), kaikki kolme peliä kokeiltu ja palaute kirjattu, korjausten järjestys sovittu asiakkaiden kanssa, vastaanottotestaaja nimetty ja aukkolista näyttömatriisista."],
        [13, "Palautekorjaukset", "Valitut korjaukset odotettuine tuloksineen, toinen virheenkorjausketju, uusintatestit ja pelien peruskierrokset."],
        [14, "Testitulokset", "Vähintään seitsemän testitapausta peliä kohden, buildien testit ilman editoria, rajatapaukset ja toistuvat uudelleenaloitukset sekä tietoturva-arvio."],
        [15, "Jatkotyöstöohje", "Avaamis- ja jatkotyöstöohje, assettiluettelo, tarpeettoman aineiston poisto ja koodin siistiminen jatkotyöstöä varten."],
        [16, "Vastaanottotesti", "Luovutusehdokas (tag v0.9), vastaanottotesti ja siirtokokeilu, testaajan havainnot hänen sanoinaan, havaintojen korjaus ja kolmas virheenkorjausketju."],
        [17, "Luovutus", "Regressiotesti puhtaasta kloonista, luovutusbuildit, luovutusversio (tag v1.0), luovutuspaketti ja asiakkaiden kuittaus."],
        [18, "Näyttö", "Näyttömatriisi täsmälinkein, esittely, muutos ohjaajan pyynnöstä ja itsearviointi."]
      ],
      tyonaytteet: {
        p1: ["1, 3", "Unity-asennus ja versiotiedot, muutos kokeiluprojektiin ja ensimmäinen oma skripti kokeilukenttään"],
        p2: ["9, 13, 16", "Vähintään kolme virheenkorjausketjua oman koodin virheistä: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti"],
        p3: ["4, 5, 8, 14", "Testimatriisin testitapaukset, joihin odotettu tulos on kirjoitettu ennen ajoa: ensimmäisen pelin kierros ja toistuvat kierrokset, toisen pelin koko kierros ja kaikkien pelien testit buildeina"],
        p4: ["1, 3, 4, 7, 10", "Lähtötasokokeilun ehto ja skriptit päämekaniikkaan ja kierroksen logiikkaan: metodit, ehdot, silmukat ja muuttujat, esimerkiksi pelikentän luku datasta silmukalla"],
        p5: ["8, 15", "Valikon uudelleenkäyttö prefabina, toiston poisto omaan metodiin ja koodin siistiminen jatkotyöstöä varten: selkeät nimet ja alkukommentit"],
        p6: ["5, 8, 11", "Alkuvalikko ohjausohjeineen, loppuruutu, uudelleenaloitus ja visuaalinen palaute suunnitelman mukaan kaikissa kolmessa pelissä"],
        p7: ["3, 4, 7, 10", "Päämekaniikka ja kierros suunnitelman, pseudokoodin ja kortin odotetun tuloksen mukaan"],
        p8: ["2, 6, 12", "Tehtävätaulun kortit ja niiden järjestys sovittuna ohjaajan kanssa, viikkotarkistukset sekä palautekorttien ja korjausten järjestys"],
        p9: ["2, 7", "Projektirakenteen vertailu (yksi vai kolme Unity-projektia) ja kenttädatan tallennustapojen vertailu, käyty läpi ohjaajan kanssa ja kirjattu päätöslokiin"],
        p10: ["9, 12", "Vertaisarvio, jossa toinen opiskelija testaa toisen pelin vaatimuslistaa vasten ja havainnot käydään yhdessä läpi, sekä asiakaskatselmointi ja siinä sovitut korjaukset"],
        p11: ["3, 6, 9, 12, 18", "Selitä ja muuta -merkinnät näyttöaineiston tarkistuksineen työviikoilla 3, 6 ja 9, aukkolista ja arvio omasta toiminnasta työviikolla 12 sekä itsearviointi täsmälinkein työviikolla 18"],
        s1: ["1, 2", "Kysymyslista asiakkaille ja ohjaajalle vastauksineen ja aiheiden vahvistuspyyntö asiakkaille"],
        s2: ["6, 12, 15", "Pelien esittely asiakkaille ilman teknistä sanastoa ja jatkotyöstöohje musiikkikurssin opiskelijalle"],
        s3: ["6, 12", "Asiakaskokeilu ja asiakaskatselmointi: pelien esittely ja palaute asiakkaan sanoin, tarkistettuna asiakkaalta"],
        s4: ["2, 6, 12", "Pienimmän toimivan version rajaus, palautekorttien järjestys ja korjausten järjestys asiakkaiden kanssa"],
        s5: ["2", "Ensimmäisen pelin toiminnot tehtävätaulun korteiksi valmis kun -ehtoineen"],
        s6: ["2, 6", "Tuntiarviot korteissa ja arvio–toteumavertailu työaikataulukosta"],
        s7: ["4, 11", "Kierroksen päättymisen logiikka, ratkaisun tunnistus tai ajastin voitto- ja häviöehtoineen, kierros päättyy vain kerran"],
        s8: ["7", "Sama kenttä kahdella tallennustavalla (ScriptableObject ja tekstitiedosto tai JSON), muutoskokeilu ja perusteltu valinta päätöslokissa"],
        s9: ["7, 8, 10", "Kentän luku datasta, alkutilanteeseen palautus samasta datasta ja kolmannen pelin asetukset datasta"],
        s10: ["7, 10", "Unityn API:n käyttö (esimerkiksi Physics2D, SceneManager, JsonUtility) ja datan käsittely niin, ettei virheellinen syöte kaada peliä"],
        s11: ["14", "Tietoturva-arvio: luovutettavien tiedostojen tarkistus, ulkoisten pakettien alkuperä ja testitapaus virheellisellä datalla"],
        s12: ["1, 6, 12, 16, 17", "Commitit koko projektin ajalta ja versiomerkinnät tag v0.1, v0.2, v0.9 ja v1.0"],
        s13: ["5, 8", "Alkuvalikko ja loppuruutu omassa haarassa ja yhdistettynä päähaaraan GitHub Desktopissa sekä ensimmäisen pelin valikko liitettynä prefabina toiseen peliin"],
        s14: ["17", "Luovutusbuildit puhtaasta kloonista, nimetty paketti ja luovutus asiakkaille sovitulla tavalla"],
        k1: ["1, 3", "Unity Hub, sovittu versio ja moduulit, projektin luonti ja versionhallinta-asetukset (Force Text, Visible Meta Files)"],
        k2: ["11", "Kolme havaintoa Unityn mahdollisuuksista ja rajoitteista commit-linkkeineen tai kuvakaappauksineen"],
        k3: ["4, 7, 10", "Komponentit, colliderit ja triggerit, Rigidbody 2D, Canvas ja painikkeet, prefabit ja Build Profiles kaikissa kolmessa pelissä"],
        k4: ["5, 8, 10", "Grafiikkapakettien tuonti ja käyttöehtojen tarkistus sekä Input System -paketti"],
        k5: ["2, 8, 11, 14", "Pelien suunnittelu, toteutus ja testaus buildeina komponenttikirjastoa käyttäen"],
        k6: ["14, 17", "Buildit asiakkaan alustalle puhtaasta kloonista ja niiden testaus ilman editoria"],
        k7: ["15, 16", "Avaamis- ja jatkotyöstöohje, jota on kokeiltu vastaanottotestissä ja siirtokokeilussa"]
      },
      dokumentaatio: {
        kayttajalle: "Kansio docs/: avaaminen ja jatkotyöstö, assetit ja lisenssit sekä testitulokset ja tiedossa olevat puutteet. Kohdeyleisö on pelimusiikin kurssin opiskelija ja opettaja.",
        arviointiin: "Kansio project-docs/: kysymykset, suunnitelma, päätösloki, testimatriisi, asiakaspalaute, vertaisarvio, vastaanottotesti, projektipäiväkirja ja AI-loki, lähtötasokokeilu, selitä ja muuta -merkinnät, Unity-havainnot, aukkolista, tietoturva-arvio, näyttömatriisi, esittely ja itsearviointi.",
        vaatimus: "Ohjeen laatu mitataan työviikolla 16: projektin ulkopuolinen henkilö avaa projektit ja käynnistää pelit pelkän kirjallisen ohjeen avulla, ilman suullista apua."
      },
      tekoaly: [
        "Tekoälyn käytön pelisäännöt sovitaan ohjaajien kanssa projektin alussa, eikä sääntöjä kopioida toisesta projektista. Sivusto olettaa, että käyttö voidaan sallia apuvälineenä, mutta ydinosaaminen tehdään itse: opiskelija kirjoittaa, selittää ja muuttaa skriptinsä itse. Jos käyttö sallitaan, merkittävästä käytöstä kirjataan kysymys tai tarve, käytetty apu, oma muutos ja tarkistustapa.",
        "Jokainen viikko vaatii jotain, mitä kielimalli ei tuota: oman repositoryn commitit, Play-tilan ja buildin kokeilut, omat mittaukset ja testitulokset, asiakkaiden, vertaisarvioijan ja vastaanottotestaajan sanat sekä työviikon 18 muutoksen omaan koodiin arvioijan nähden."
      ],
      palautuspaketti: [
        ["Asiakkaille luovutettava paketti", "Kolme pelattavaa versiota sovitulle alustalle, muokattavat Unity-projektit, tieto Unity-versiosta ja kansio docs/ (avaamis- ja jatkotyöstöohje, assetit ja lisenssit, testitulokset ja puutteet)."],
        ["Repository", "Opiskelijan oma repository: Unity-projektit, docs/ ja project-docs/ sekä versiomerkinnät v0.1, v0.2, v0.9 ja v1.0."],
        ["Arviointia varten kirjoitetut dokumentit", "project-docs/: projektipäiväkirja ja AI-loki, näyttömatriisi täsmälinkein, itsearviointi ja muut opiskelijan omat dokumentit. Ei asiakkaan pakettiin, ellei toisin sovita."],
        ["Työaikataulukko ja tehtävätaulu", "Excel-taulukko työkertoineen ja tehtävätaulu kortteineen sovitussa paikassa."],
        ["Esittely", "Opiskelijan 8–10 minuutin esittely ja muutos omaan koodiin ohjaajan pyynnöstä."]
      ],
      huomiot: [
        ["Aikataulu ja vastuut ovat ehdotuksia", "Aloituspäivää, viikkotuntimäärää ja palautuspäivää ei ole määritelty. Ohjaajat sovittavat työmäärän lähtötasoon ja aikaan. Asiakaskatselmointien ajat työviikoilla 6 ja 12 ovat alustavia."],
        ["Työmäärä yksin", "Opiskelija tekee kaikki kolme peliä yksin, joten ohjaaja pitää jokaisen pelin pienimmän toimivan version pienenä ja voi säätää kolmannen pelin laajuutta työviikon 9 rajauksessa."],
        ["Lähtötasokokeilu", "Työvaiheessa 1-4 opiskelija muuttaa valmiin skriptin arvon, kirjoittaa yhden ehdon ja selittää havaintonsa. Ohjaaja käy kokeilun läpi ja ohjaa tarvittaessa pienharjoituksiin, esimerkiksi Unity Learnin aloittelijapolkuihin, ennen työviikkoa 3. Sovitut harjoitukset kirjataan tiedostoon project-docs/lahtotaso.md."],
        ["Selitä ja muuta", "Työviikoilla 3, 6 ja 9 noin kymmenen minuuttia viikkotarkistuksessa: opiskelija selittää yhden skriptinsä ilman muistiinpanoja ja tekee pyydetyn pienen muutoksen. Pyydä muutos, joka vaatii skriptin ymmärtämistä, ei pelkkää arvon vaihtoa Inspectorissa. Samalla opiskelija tarkistaa näyttömatriisista omat aukkonsa."],
        ["Jumiraja ja avunpyyntö", "Sivuston jumiohjeen oletusraja on 30 minuuttia. Ohjaaja voi sopia toisen rajan. Avunpyynnön pohjassa ovat työvaihe, odotettu ja havaittu tulos sekä tehdyt kokeilut."],
        ["Jatkotyöstön kokeilu", "Asiakas työviikolla 6 ja vastaanottotestaaja työviikolla 16 muuttavat opiskelijan lyhyen ohjeen avulla yhden pelin asetuksen, esimerkiksi kierroksen keston tai hypyn korkeuden, Inspector-ikkunassa ja kokeilevat muutosta Play-tilassa. Opiskelija kirjaa, löysikö kokeilija kohdan ja onnistuiko muutos. Näin nähdään ajoissa, saako musiikkikurssin opiskelija projektin auki ja löytääkö hän sieltä tarvitsemansa kohdan."],
        ["Siirrettävät työvaiheet", "Jos viikkotunnit eivät riitä, nämä voi siirtää viikolla eteenpäin, ilman että muut viikot rikkoutuvat: 3-4 build työviikolle 4, 11-4 Unity-havainnot työviikolle 12 ja 14-3 rajatapaukset työviikolle 15. Siirto kirjataan päätöslokiin."],
        ["Perusteversio ja tutkinnon osat", "Matriisin 32 vaatimusta ovat sanatarkasti samat perusteissa OPH-6216-2025 ja OPH-4948-2021. Opiskelijan perusteversio ja suoritettavat osat vahvistetaan opiskelijakohtaisesti, ja näyttömatriisi täytetään vain niiltä osin."],
        ["Heikoimmin istuvat vaatimukset","Tiimityön vaatimukset (p8–p11) näytetään yksilöprojektissa työskentelynä ohjaajan, asiakkaiden ja vertaisarvioijan kanssa: tehtävistä ja järjestyksestä sovitaan ohjaajan kanssa viikkotarkistuksessa, vaihtoehtovertailut käydään läpi ohjaajan kanssa, ja ratkaisujen toimivuutta arvioidaan vertaisarviossa ja asiakaskatselmoinnissa. Tietovaraston valinta ja yhteys (s8, s9) toteutetaan pelin kenttä- tai asetusdatana, koska tallennusjärjestelmä on rajattu pois. Tietoturvan arviointi (s11) on paikallisen pelin luovutuspaketin tarkistus. Julkaisu tuotantoympäristöön (s14) tarkoittaa asiakkaan sovittua alustaa. Ohjaajat vahvistavat, riittävätkö nämä."],
        ["Virheenkorjausketjut", "Opiskelija tekee vähintään kolme ketjua oman koodinsa virheistä (työviikot 9, 13 ja 16). Keksittyjä virheitä ei kirjata: jos aitoa virhettä ei ole, ohjaaja antaa vikatehtävän."],
        ["Ohjaaja ei näe sivuston rasteja", "Sivuston rastit, päiväkirja, suunnitelma ja AI-loki tallentuvat opiskelijan omaan selaimeen, eivätkä ohjaajat näe niitä. Etenemistä seurataan tehtävätaulusta, työaikataulukosta ja repositorysta."],
        ["Nimet repositoryssa", "Repositoryyn kirjataan henkilöistä vain rooli. Opiskelijan tekijänimi ja repositoryn julkisuus sovitaan ohjaajan kanssa työviikolla 1; siihen asti repository on yksityinen."],
        ["Avoimet asiat", "Lähtötaso ja viikkotunnit, kolmen aiheen hyväksyntä, Unity-versio, kohdealusta, projektirakenne (yksi vai kolme Unity-projektia), perusteversio ja suoritettavat osat, tekoälyn käyttö, tehtävätaulu, vertaisarvioija, katselmointien osallistujat ja ajat, repositoryn julkisuus, tekijänimi, lisenssi ja luovutustapa."]
      ]
    }
  }
};
