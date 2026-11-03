/*
 * ProtoPaja – ohjattu näyttöprojekti parille, 18 työviikkoa, päivätön tila.
 *
 * Tämä tiedosto on projektin ainoa sisältötiedosto JavaScriptin puolella.
 * app.js on geneerinen moottori eikä sisällä projektikohtaista tekstiä.
 *
 * Päivätön tila: viikot ovat järjestysnumeroita 1–18 parin omasta aloituksesta,
 * eivät kalenteriviikkoja. Sivustolla ei ole yhtään kalenteripäivämäärää.
 *
 * Parityö: sivuston rastit, päiväkirja, suunnitelma ja AI-loki tallentuvat kunkin
 * opiskelijan omaan selaimeen. Ne eivät ole yhteinen tehtävätaulu, eivätkä ohjaajat
 * näe niitä. Yhteinen työ ja työnäytteet ovat parin yhteisessä repositoryssa.
 *
 * Kielisääntö: monikko (Sopikaa, Testatkaa) = yhteinen työ, yksikkö (Tee oma …,
 * Kirjaa oma …) = henkilökohtainen osuus ja osaaminen.
 *
 * Viikkokorttien staattinen osio "Tältä valmis tulos näyttää" (index.html) toistaa
 * viikon done-tekstin kohdassa "Viikon lopussa kokeilette". Jos muutat done-tekstiä,
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
    kuvaus: "ProtoPajassa teette pelimusiikin kurssille kolme pientä peliä, joihin kurssin opiskelijat tekevät musiikit ja ääniefektit. Jokaisessa pelissä on alkuvalikko, yksi selkeä päämekaniikka, 1–3 minuutin kierros, uudelleenaloitus ja paluu alkuvalikkoon. Pelin pitää olla ymmärrettävä myös ilman ääniä.",
    naytaKuvaus: false,
    kuva: "assets/lopputulos.jpg",
    leveys: 1120,
    korkeus: 700,
    alt: "Luonnoskuva, ei kuvakaappaus valmiista peleistä. Vierekkäin on kolme pientä pelinäkymää. Tasohyppelyssä hahmo hyppää piikkien yli kohti maalilippua, ja yläreunassa lukee Kerätty 3 / 5. Pulmapelissä kaksi laatikkoa on siirretty tavoiteruutuihin ja kolmas on vielä matkalla. Toimintapelissä pelaaja on areenan keskellä vihollisten ympäröimänä, ja ajastin näyttää 0:42. Jokaisen näkymän alla ovat painikkeet Uudelleen ja Alkuvalikkoon. Alareunassa on lista pelitapahtumista, joihin musiikkikurssi voi liittää äänen.",
    kohdat: [
      { n: 1, teksti: "Tasohyppely: hahmo hyppii esteiden yli, kerää esineet ja pääsee maaliin.", alue: [2.2, 15.5, 31.2, 56.5] },
      { n: 2, teksti: "Pulmapeli: laatikot siirretään tavoiteruutuihin, ja alkutilanteen voi palauttaa.", alue: [34.4, 15.5, 31.2, 56.5] },
      { n: 3, teksti: "Toimintapeli: pelaaja selviää areenalla 60 sekuntia yhtä vihollistyyppiä vastaan.", alue: [66.6, 15.5, 31.2, 56.5] },
      { n: 4, teksti: "Jokaisessa pelissä on selkeä loppu, uudelleenaloitus ja paluu alkuvalikkoon.", alue: [2.2, 72.5, 95.6, 7.5] },
      { n: 5, teksti: "Äänitapahtumat on kuvattu niin, että musiikkikurssi löytää ne koodista.", alue: [2.2, 82.0, 95.6, 15.5] }
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
    { tunnus: "1", lyhyt: "Aloitus", otsikko: "Aloitus ja suunnitelma", kuvaus: "Saatte saman Unity-projektin toimimaan kummankin koneella, sovitte kolmesta pelistä ja työnjaosta ja kokoatte ensimmäisen kokeiluversion sovitulle alustalle. Tekninen pohja tehdään ensin, koska kahden tekijän ristiriidat ja alustan ongelmat on halvinta ratkaista, kun peliä ei vielä ole.", kuvassa: ["Yhteinen repository → suunnitelma → kokeiluversio", "Kumpikin on tehnyt oman muutoksen ennen ensimmäistä peliä."], viikot: [1, 2, 3], vari: "#8d5a2b" },
    { tunnus: "2", lyhyt: "Ensimmäinen peli", otsikko: "Ensimmäinen kokonainen prototyyppi", kuvaus: "Rakennatte ensimmäisestä pelistä kokonaisen kierroksen, alkuvalikon, uudelleenaloituksen ja visuaalisen palautteen. Asiakkaat kokeilevat peliä työviikolla 6, ja heidän palautteensa ohjaa kahta seuraavaa peliä.", kuvassa: ["Pelattava kierros → valikot ja palaute → asiakaskokeilu", "Yksi peli valmiina ennen kuin seuraava alkaa."], viikot: [4, 5, 6], vari: "#2f6f8f" },
    { tunnus: "3", lyhyt: "Toinen ja kolmas peli", otsikko: "Toinen ja kolmas prototyyppi", kuvaus: "Teette kaksi seuraavaa peliä samalla rytmillä: ensin päämekaniikka, sitten kokonainen kierros ja lopuksi testaus. Toinen peli vertaisarvioidaan ennen kolmannen aloitusta, ja työviikolla 12 asiakkaat kokeilevat kaikkia kolmea.", kuvassa: ["Mekaniikka → kierros → vertaisarvio, kahdesti", "Asiakkaat kokeilevat kaikkia kolmea työviikolla 12."], viikot: [7, 8, 9, 10, 11, 12], vari: "#6b7f3f" },
    { tunnus: "4", lyhyt: "Luovutusvalmius", otsikko: "Testaus ja luovutusvalmius", kuvaus: "Korjaatte palautteen perusteella valitut asiat, testaatte kaikki kolme peliä koottuina versioina ja kirjoitatte ohjeet jatkotyöstöä varten. Lopuksi joku muu avaa projektit pelkän kirjallisen ohjeen avulla.", kuvassa: ["Korjaukset → testitulokset → ohjeet → vastaanottotesti", "Joku muu saa pelit auki ilman teitä."], viikot: [13, 14, 15, 16], vari: "#7a4f9a" },
    { tunnus: "5", lyhyt: "Luovutus", otsikko: "Luovutus ja näyttö", kuvaus: "Luovutatte asiakkaille sovitun paketin: pelattavat versiot, muokattavat Unity-projektit ja ohjeet. Viimeisellä viikolla kumpikin esittelee omat ratkaisunsa ja tekee niihin muutoksen.", kuvassa: ["Luovutusversio → paketti asiakkaille → oma esittely", "Kumpikin näyttää oman osaamisensa."], viikot: [17, 18], vari: "#0f766e" }
  ],
  poikkeamat: {
    vaiheita: "viisi vaihetta: projektikuvaus jakaa työn viiteen vaiheeseen, ja vaihe 3 kattaa kaksi peliä. Ensimmäinen peli on oma vaiheensa, koska sen asiakaskokeilu ohjaa kahta seuraavaa peliä."
  },
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 844,
    alt: "ProtoPajan viisi vaihetta: 1 aloitus ja suunnitelma työviikoilla 1–3, 2 ensimmäinen kokonainen prototyyppi ja asiakaskokeilu työviikoilla 4–6, 3 toinen ja kolmas prototyyppi, vertaisarvio ja asiakaskatselmointi työviikoilla 7–12, 4 testaus ja luovutusvalmius työviikoilla 13–16 sekä 5 luovutus ja näyttö työviikoilla 17–18."
  },
  vaiheetJohdanto: "Ensin varmistatte, että työ kulkee kahden koneen välillä ja että suunnitelma on sovittu. Sitten teette yhden pelin kerrallaan valmiiksi asti, koska valmis peli opettaa enemmän kuin kolme puolivalmista. Asiakkaiden palaute ohjaa korjauksia, ja lopuksi joku muu varmistaa, että projektit aukeavat ilman teitä.",
  vaiheetHuomio: "Aikataulu on muokattava ehdotus, ei hyväksytty aikataulu. Työviikot ovat järjestysnumeroita omasta aloituksestanne, eivät kalenteriviikkoja. Ohjaajat sovittavat työmäärän lähtötasoonne ja käytettävissä olevaan aikaan. Asiakaskatselmointien ajat työviikoilla 6 ja 12 ovat alustavia.",

  /* ---- moottorin tekstien korvaukset ---- */
  tekstit: {
    tasksLead: "Tee työvaiheet järjestyksessä. Ensimmäinen keskeneräinen työvaihe on auki. Monikko (Sopikaa, Testatkaa) tarkoittaa yhteistä työtä, yksikkö (Tee oma…, Kirjaa oma…) sinun omaa osuuttasi. Kaikki työvaiheet ovat pakollisia.",
    projectConnectionHeading: "Näin viikko vie kokonaisuutta eteenpäin",
    weekGoalHeading: "Tällä viikolla teette tämän",
    weekFinishCheck: "Tehkää sama kokeilu kuin viikon alussa",
    weekFinishEvidence: "Työnäyte talteen",
    mdWork: "### Mitä minä toteutin, ja miten kokeilin sitä?",
    mdReason: "### Mikä ratkaisu oli minun, ja miksi valitsin sen?",
    mdEvidence: "### Mistä oma työnäytteeni löytyy, ja mitä teen seuraavaksi?"
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
      { milloin: "Ennen kuin avaat Unityn", teksti: "Hae parisi viimeisimmät muutokset GitHub Desktopissa: Fetch origin ja sitten Pull origin." },
      { milloin: "Viikon alussa", teksti: "Päivittäkää tehtävätaulu: viikon kortit, kummankin vastuut ja jokaisen kortin valmis kun -ehto." },
      { milloin: "Joka työkerralla", teksti: "Kirjaa työaikasi yhteiseen Excel-taulukkoon: päivämäärä, nimesi, prototyyppi, tehtävä, käytetty aika ja lyhyt tulos." },
      { milloin: "Viikkotarkistus (ehdotus)", teksti: "Käykää ohjaajan kanssa läpi, mitä valmistui, mitä kumpikin teki, mitä toinen testasi, mikä estää etenemistä ja mikä on seuraava tehtävä." },
      { milloin: "Viikon lopussa", teksti: "Tee commit ja push omista muutoksistasi. Kirjoita viikon päiväkirja ja vie se omaan kansioosi." }
    ]
  },

  /* ---- sanasto ----
     Vain tämän projektin käyttämät termit. Jokainen termi selitetään myös siinä
     kohdassa, jossa se tulee ensimmäisen kerran vastaan; tämä lista on kertausta
     varten. `viikko` = työviikko, jolla termi tulee ensi kertaa vastaan. */
  termisto: [
    { termi: "prototyyppi", nimi: "Pieni pelattava peli", selite: "Peli, joka näyttää yhden peli-idean toiminnassa. ProtoPajan prototyypissä on yksi päämekaniikka, yksi pieni kenttä ja 1–3 minuutin kierros." },
    { termi: "päämekaniikka", nimi: "Pelin tärkein toiminto", selite: "Toiminto, jota pelaaja toistaa koko kierroksen ajan, esimerkiksi hyppy, laatikon siirto tai hyökkäys." },
    { termi: "ydinsilmukka", nimi: "Pelin toistuva kierto", selite: "Pelaaja tekee päämekaniikan toiminnon, saa siitä palautetta ja pääsee lähemmäs tavoitetta. Kun silmukka toimii, peli on pelattava." },
    { termi: "äänitapahtuma", nimi: "Kohta, johon ääni voidaan liittää", selite: "Pelin hetki, esimerkiksi hyppy tai maaliin saapuminen, johon musiikkikurssi voi liittää äänen tai musiikin. Te kuvaatte tapahtuman ja sen paikan koodissa. Ääniä ette tee." },
    { termi: "lisätavoite", nimi: "Neljäs tai viides peli", selite: "Ajopeli tai tutkimispeli tehdään vain, jos kolme peliä on testattu ja luovutuskunnossa ja lisätyöstä on sovittu. Lisätavoite ei ole työvaihe, eikä se näy etenemisessä." },
    { termi: "repository", nimi: "Yhteinen koodivarasto", selite: "Versionhallinnan säilytyspaikka, jossa ovat Unity-projektit, dokumentit ja koko muutoshistoria. Työnäyte on aina repositoryssa, ei tällä sivulla.", viikko: 1 },
    { termi: "commit", nimi: "Tallennettu muutos", selite: "Yksi nimetty muutos versionhallinnassa. Commitin viesti kertoo, mitä muutit, ja tekijätieto näyttää, kumpi teistä sen teki.", viikko: 1 },
    { termi: "push ja pull", nimi: "Lähetys ja haku", selite: "Push lähettää omat commitisi GitHubiin. Pull hakee parisi commitit omalle koneellesi. GitHub Desktopissa painikkeet ovat Push origin ja Pull origin.", viikko: 1 },
    { termi: "LTS", nimi: "Long Term Support, pitkään tuettu versio", selite: "Unityn versio, joka saa korjauksia pitkään. Se sopii projektiin, jonka pitää aueta vielä luovutuksen jälkeen. Molemmilla on oltava täsmälleen sama versio.", viikko: 1 },
    { termi: "scene", nimi: "Unityn näkymä tai taso", selite: "Esimerkiksi alkuvalikko tai pelikenttä. Scene tallentuu yhdeksi tiedostoksi, joten samaa sceneä muokkaa kerrallaan vain yksi.", viikko: 1 },
    { termi: "Play-tila", nimi: "Pelin ajo editorissa", selite: "Unity-editorin tila, jossa peli käynnistyy editorin sisällä. Play-tilassa tehdyt Inspector-muutokset häviävät, kun tila lopetetaan.", viikko: 1 },
    { termi: "tehtävätaulu", nimi: "Yhteinen työlista", selite: "Taulu, esimerkiksi Trello, jossa jokainen työtehtävä on kortti: tavoite, vastuuhenkilö, valmis kun -ehto ja linkki työnäytteeseen. Taulusta näkee, kuka tekee mitä.", viikko: 1 },
    { termi: ".gitignore", nimi: "Pois jätettävät tiedostot", selite: "Tiedosto, joka kertoo Gitille, mitä ei tallenneta. Unity-projektista jätetään pois esimerkiksi kansiot Library, Temp ja Builds, koska Unity luo ne itse.", viikko: 1 },
    { termi: "pienin toimiva versio", nimi: "Pelin ensimmäinen valmis muoto", selite: "Versio, jossa päämekaniikka, tavoite ja kierroksen loppu toimivat. Se tehdään ensin. Kaikki muu on lisää.", viikko: 2 },
    { termi: "ristiriita", nimi: "Merge conflict", selite: "Kaksi ihmistä on muuttanut saman tiedoston samaa kohtaa, eikä Git osaa valita, kumpi muutos jää. Unityn scene-tiedoston ristiriita on työläs ratkaista, ja siksi samaa sceneä muokkaa kerrallaan yksi.", viikko: 3 },
    { termi: "GameObject", nimi: "Scenen esine", selite: "Mikä tahansa sceneen lisätty asia: pelaaja, seinä, kamera tai painike. GameObjectin toiminta tulee siihen liitetyistä komponenteista.", viikko: 3 },
    { termi: "komponentti", nimi: "GameObjectin ominaisuus", selite: "GameObjectiin liitetty osa. Esimerkiksi Rigidbody 2D lisää painovoiman, ja oma C#-skriptisi lisää pelin säännön. Komponentteja muokataan Inspector-ikkunassa. Unity on ohjelmistokomponenttikirjasto, koska peli kootaan sen valmiista ja omista komponenteista.", viikko: 3 },
    { termi: "C#-skripti", nimi: "Oma koodi Unityssä", selite: "Tiedosto, johon kirjoitatte pelin toiminnan C#-kielellä. Skripti liitetään GameObjectiin komponenttina.", viikko: 3 },
    { termi: "build", nimi: "Koottu peliversio", selite: "Versio, jonka Unity kokoaa projektista ajettavaksi ilman editoria, esimerkiksi Windows-ohjelmaksi tai selaimessa toimivaksi peliksi. Build testataan aina erikseen, koska se voi toimia eri tavalla kuin editori.", viikko: 3 },
    { termi: "collider", nimi: "Törmäysmuoto", selite: "Komponentti, joka antaa GameObjectille muodon törmäyksiä varten. Trigger-collider ei pysäytä liikettä, vaan ilmoittaa skriptille, kun jokin osuu siihen, esimerkiksi maaliin.", viikko: 4 },
    { termi: "T01", nimi: "Testitapauksen tunnus", selite: "T tarkoittaa testitapausta, ja numero yksilöi sen: T01 on ensimmäinen testitapaus, T02 toinen. Odotettu tulos kirjataan aina ennen ajoa, ja sama tunnus seuraa testiä testimatriisiin.", viikko: 4 },
    { termi: "UI", nimi: "User interface, käyttöliittymä", selite: "Pelin painikkeet, tekstit ja valikot. Unityn GameObject-valikon UI-kohdasta lisätään esimerkiksi painike ja teksti.", viikko: 5 },
    { termi: "asset", nimi: "Valmis aineisto", selite: "Peliin tuotava kuva, sprite eli 2D-pelin kuva, fontti tai muu valmis aineisto. Valmiita assetteja saa käyttää niiden käyttöehtojen mukaan, ja lähde kirjataan assettiluetteloon.", viikko: 5 },
    { termi: "prefab", nimi: "Uudelleenkäytettävä GameObject", selite: "Tallennettu valmis GameObject, jota voi käyttää monessa scenessä. Kun muokkaat prefabia, muutos näkyy kaikissa sen kopioissa. Esimerkiksi alkuvalikon voi tehdä prefabiksi ja käyttää kaikissa peleissä.", viikko: 5 },
    { termi: "tag", nimi: "Versiomerkintä", selite: "Nimi, joka kiinnitetään yhteen commitiin, jotta juuri se versio löytyy myöhemmin. Asiakaskokeilun versio on v0.1 ja luovutusversio v1.0.", viikko: 6 },
    { termi: "JSON", nimi: "Tiedon tekstimuoto", selite: "Tekstimuoto, jolla tietoa tallennetaan tiedostoon nimettyinä kenttinä. Pelin kenttä- tai asetusdata voi olla JSON-tiedostossa, jonka peli lukee käynnistyessään.", viikko: 7 },
    { termi: "ScriptableObject", nimi: "Unityn datatiedosto", selite: "Unityn tapa tallentaa dataa omaksi tiedostokseen projektin sisälle, esimerkiksi kentän asetukset. Dataa muokataan Inspectorissa ilman koodia.", viikko: 7 },
    { termi: "API", nimi: "Ohjelmointirajapinta", selite: "Valmiiden toimintojen joukko, jota oma koodi kutsuu. Unityn API:sta käytätte esimerkiksi fysiikkaa (Physics2D), scenen vaihtoa (SceneManager) ja aikaa (Time).", viikko: 7 },
    { termi: "vertaisarvio", nimi: "Parin työn arviointi", selite: "Testaat parisi toteutuksen sovittuja vaatimuksia vasten ja kirjaat havainnot. Vertaisarvio koskee toteutusta, ei ihmistä.", viikko: 9 },
    { termi: "virheenkorjausketju", nimi: "Virheen koko kulku", selite: "Havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Projektissa tehdään vähintään neljä ketjua, ja kumpikin tekee vähintään kaksi oman koodinsa virheestä.", viikko: 9 },
    { termi: "regressiotesti", nimi: "Ettei korjaus rikkonut muuta", selite: "Korjauksen jälkeen ajettava testi, jolla varmistat, että muu peli toimii yhä. Yleensä se on pelin peruskierros alusta loppuun.", viikko: 9 },
    { termi: "vastaanottotesti", nimi: "Ohjeen testi ulkopuolisella", selite: "Projektin ulkopuolinen henkilö avaa Unity-projektit ja käynnistää pelit pelkän kirjallisen ohjeen avulla. Jokainen kohta, jossa hän epäröi, korjataan ohjeeseen.", viikko: 16 }
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
    polku: "project-docs/omat/OMA-KANSIO/projektipaivakirja.md",
    vihjeet: {
      work: "Kerro, minkä skriptin, scenen tai dokumentin osan teit itse ja miten kokeilit sen toimintaa.",
      reason: "Kerro yksi oma ratkaisusi, vaihtoehto, jota harkitsit, ja miksi valitsit näin.",
      evidence: "Esimerkiksi commit-linkki, testitapaus T05, tehtävätaulun kortti tai tiedoston polku.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla työkerralla?"
    }
  },

  /* ---- paperiaineiston tekstit (päivätön tila) ---- */
  lataukset: {
    resurssienPerusosoite: "https://mattiseise.github.io/projektikoontisivu/protopaja/",
    sarakePvm: "Ajoitus",
    viikkoOtsikko: (num, dates, title) => "Työviikko " + num + " / 18 – " + title,
    aloitusHuomio: "Viikon työvaihe on tämän sivuston työohje. Kirjatkaa jokainen työtehtävä tehtävätaulun kortiksi, jossa on vastuuhenkilö ja valmis kun -ehto. Testin tulos kirjataan testimatriisiin heti. Oma viikkoyhteenveto kirjataan projektipäiväkirjaan viikon lopussa ja työaika yhteiseen Excel-taulukkoon joka työkerralla."
  },

  /* ---- suunnitelmadokumentti (yhteinen) ---- */
  suunnitelma: {
    otsikko: "Projektisuunnitelma: kolme prototyyppiä ja työnjako",
    tiedostonimi: "suunnitelma.md",
    pakolliset: [
      "nimi", "tekijat", "peli1", "peli2", "peli3", "rajaus", "projektijako",
      "nimeaminen", "tyonjako", "scenekaytanto", "seuranta", "testaus"
    ],
    markdown: ({ arvo, onTäytetty, pvm }) => {
      const ohjaaja = (kentta, otsikko, avoin) => onTäytetty(kentta)
        ? `- ${otsikko}: ${arvo(kentta)}`
        : `- ${otsikko}: EI VIELÄ SOVITTU, avoin asia. ${avoin}`;
      return [
        `# Projektisuunnitelma – ${arvo("nimi", "ProtoPaja")}`,
        "",
        `Tekijät: ${arvo("tekijat")} · Päivitetty: ${pvm}`,
        "",
        "Täytetään yhdessä työviikolla 2. Muutokset kirjataan päätöslokiin `project-docs/paatokset.md` päivämäärän kanssa. Vanhoja merkintöjä ei poisteta.",
        "",
        "## 1. Kenelle prototyypit tehdään ja miten niitä käytetään",
        "",
        "Asiakkaat Caito ja Toni käyttävät prototyyppejä oppilaitoksen pelimusiikin kurssin",
        "harjoitusmateriaalina. Kurssin opiskelijat tekevät peleihin musiikit ja ääniefektit",
        "ja liittävät ne peleihin. Prototyyppien pitää toimia ja olla ymmärrettäviä ilman ääniä,",
        "ja toisen tekijän pitää löytää koodista olennaiset pelitapahtumat.",
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
        "Kustakin: päämekaniikka, tavoite, miten kierros alkaa, päättyy ja käynnistyy uudelleen,",
        "sekä pienin toimiva versio.",
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
        "### 3.4 Mitä jätämme pois",
        "",
        arvo("rajaus"),
        "",
        "## 4. Tekninen toteutus",
        "",
        "### 4.1 Erilliset Unity-projektit vai yksi projekti (vertailu päätöslokissa)",
        "",
        arvo("projektijako"),
        "",
        "### 4.2 Scenejen, skriptien ja resurssien nimeäminen ja jäsennys",
        "",
        arvo("nimeaminen"),
        "",
        "## 5. Yhteistyö",
        "",
        "### 5.1 Työnjako ja henkilökohtaiset vastuut",
        "",
        arvo("tyonjako"),
        "",
        "### 5.2 Näin ehkäisemme saman scenen yhtäaikaisen muokkaamisen",
        "",
        arvo("scenekaytanto"),
        "",
        "### 5.3 Tehtävien ja työajan seuranta",
        "",
        arvo("seuranta"),
        "",
        "### 5.4 Testaus ja luovutus",
        "",
        arvo("testaus"),
        "",
        "## 6. Asiakkaiden ja ohjaajien vahvistettavat asiat",
        "",
        ohjaaja("aiheet", "Kolme aihetta (asiakkaat vahvistavat)", "Aiheet ovat suunnittelun lähtökohta, eivät hyväksyttyjä valintoja."),
        ohjaaja("unityversio", "Unity-versio", "Sama versio molemmille ja vastaanottajalle."),
        ohjaaja("alusta", "Kohdealusta", "Esimerkiksi Windows tai selain. Asiakkaat kertovat, millä koneilla kurssi pelaa."),
        ohjaaja("tekoaly", "Tekoälyn käytön pelisäännöt", "Ohjaajat päättävät. Sääntöjä ei kopioida toisesta projektista."),
        ohjaaja("repojulkisuus", "Repositoryn julkisuus ja tekijänimet", "Kunnes asia on sovittu, repository on yksityinen."),
        ohjaaja("lisenssi", "Lisenssi ja luovutustapa", "Miten asiakkaat saavat pelit ja projektit ja millä ehdoilla niitä jatketaan."),
        ohjaaja("perusteversio", "Tutkinnon perusteet ja osat kummallekin", "Ohjaajat vahvistavat perusteversion ja suoritettavat tutkinnon osat opiskelijakohtaisesti."),
        ohjaaja("katselmoinnit", "Katselmointien ajat ja osallistujat", "Ehdotus: asiakaskokeilu työviikolla 6, katselmointi työviikolla 12, vastaanottotesti työviikolla 16. Kirjaa vain roolit, ei nimiä."),
        "",
        "## 7. Ohjausvastuut (ehdotus, vahvistetaan aloituksessa)",
        "",
        "- Matti ja Antti seuraavat viikoittain etenemistä, työnjakoa ja tuen tarvetta.",
        "- Caito ja Toni arvioivat sovituissa välikatselmoinneissa tuotosten soveltuvuutta musiikkikurssille.",
        "- Opiskelijat esittelevät tulokset, kirjaavat palautteen ja ehdottavat jatkotoimet.",
        "",
        "---",
        "",
        "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
        "Kun rajaus tai työnjako muuttuu, kirjaa muutos ensin päätöslokiin ja päivitä sitten tämä tiedosto.",
        ""
      ].join("\n");
    }
  },
  /* ---- viikkojen ohjaava sisältö ----
   * Toteutusviikkojen rytmi: Y "Sopikaa … kaksi omaa osaa" → H "Toteuta oma osasi …" →
   * Y "Testatkaa toistenne osat". Vastuut vaihtuvat pelien välillä vastuutaulukon mukaan
   * (project-docs/vastuutaulukko.md), jotta kumpikin tekee jokaista osa-aluetta. */
  viikkoOhjeet: {
    /* ============ VAIHE 1: ALOITUS JA SUUNNITELMA (1–3) ============ */
    1: {
      type: "pohjustus",
      rutiini: false,
      feature: "Molemmilla on koneellaan sama Unity-kokeiluprojekti, ja kumpikin on tehnyt siihen oman näkyvän muutoksen, joka on tallessa yhteisessä repositoryssa.",
      connection: "Ennen ensimmäistä peliä projekti alkaa kysymyksistä ja yhteisestä työympäristöstä. Tällä viikolla varmistatte, että kahden koneen muutokset kulkevat saman repositoryn kautta, koska jokainen myöhempi viikko nojaa siihen. Kysymysten vastauksista tulee työviikolla 2 suunnitelma.",
      deliverable: "`project-docs/kysymykset.md`, yhteinen repository, Unity-kokeiluprojekti, kummankin oma commit sekä tehtävätaulu ja työaikataulukko.",
      why: "Jos kahden tekijän työ ei kulje versionhallinnan kautta jo nyt, ensimmäisen pelin aikana menetätte töitä ja aikaa ristiriitoihin. Ilman yhteistä historiaa kummankaan oma työ ei myöskään näy näytössä.",
      done: "Kumpikin hakee toisen muutoksen omalle koneelleen ja näkee Play-tilassa molemmat muutokset. Repositoryn historiassa on kummankin oma commit omalla nimellä.",
      record: "Kirjoita työviikon 1 merkintään oma muutoksesi ja sen commit-linkki sekä Unity-versio ja miten tarkistit sen. Kirjoita myös, mitä huomasit hakiessasi parisi muutoksen, ja yksi kysymyslistan kysymys, jonka vastaus muuttaa suunnitelmaa. Näyttömatriisin rivit, joiden työnäyte syntyi: kehitysympäristön käyttö (p1), ympäristön käyttöönotto (k1), versionhallinta (s12) ja asiakkaan tarpeiden selvittäminen (s1).",
      skills: ["kehitysympäristön käyttöönotto (p1, k1)", "versionhallinta (s12)", "asiakkaan tarpeiden selvittäminen (s1)"],
      resources: [["GitHub Desktop: kuvaohje ilman Git-komentoja", "../ohjeet/github-desktop/?projekti=protopaja#asennus", false], ["Työaikataulukon pohja (.csv, avautuu Excelissä)", "downloads/protopaja-tyoaika.csv", true]],
      tehtavat: {
        "1-1": {
          miksi: "Toimeksianto jättää tarkoituksella asioita auki, esimerkiksi kohdealustan ja pelien aiheet. Kysymällä saatte vastaukset, joiden varaan suunnitelma tehdään työviikolla 2.",
          osat: [
            ["Lukekaa toimeksianto", "Lukekaa sivun Toimeksianto-osio yhdessä kokonaan. Merkitkää jokaisen prototyypin kahdeksan vaatimusta."],
            ["Merkitkää epäselvät kohdat", "Merkitkää kohdat, joista ette tiedä, mitä asiakkaat tarkoittavat tai milloin asia on valmis."],
            ["Kirjoittakaa kysymyslista", "Kirjoittakaa tiedostoon `kysymykset.md` vähintään kahdeksan kysymystä. Merkitkää jokaisen kysymyksen perään, onko se asiakkaille vai ohjaajille."],
            ["Tarkistakaa, että kysymys pakottaa päätöksen", "Muotoilkaa kysymykset niin, että vastaus muuttaa jotain toteutuksessa. Katsokaa tehtävän esimerkki."],
            ["Viekää kysymykset vastaajille", "Käykää lista läpi ohjaajan kanssa ja lähettäkää asiakkaille tarkoitetut kysymykset sovitulla tavalla. Kirjatkaa vastaukset kysymysten alle."]
          ],
          valmis: "Kysymyslistassa on vähintään kahdeksan kysymystä, joista jokaisella on vastaanottaja, ja lista on käyty läpi ohjaajan kanssa.",
          tallenna: "Tiedosto polkuun `project-docs/kysymykset.md`, kun repository on perustettu työvaiheessa 3. Yksi tärkeä kysymys omaan päiväkirjaasi.",
          esimerkki: "Kysymys, joka pakottaa päätöksen: ”Pelataanko pelejä musiikkikurssilla Windows-koneilla vai selaimessa?” Vastaus ratkaisee kohdealustan ja sen, miten pelit kootaan.",
          eiRiita: "”Mitä peleihin pitää tehdä?” Kysymys toistaa toimeksiannon eikä johda päätökseen."
        },
        "1-2": {
          miksi: "Unity-projekti avautuu luotettavasti vain samalla versiolla, jolla se on tehty. Siksi molemmilla ja myöhemmin musiikkikurssilla on täsmälleen sama versio.",
          osat: [
            ["Kysy versio ohjaajalta", "Kysy ohjaajalta, mikä Unity-versio asennetaan. Versio on ohjaajan päätös, koska pelit luovutetaan musiikkikurssille samalla versiolla. Suositus on LTS-versio eli pitkään tuettu versio."],
            ["Asenna Unity Hub", "Asenna Unity Hub Unityn lataussivulta ja kirjaudu Unity-tunnuksella. Kysy ohjaajalta, mitä tunnusta käytät."],
            ["Asenna editori", "Valitse Unity Hubissa Installs ja Install Editor. Valitse sitten sovittu versio. Jos sitä ei näy listassa, hae se Unityn versioarkistosta."],
            ["Valitse moduulit", "Valitse asennuksen moduuleista koodieditori ja sovitun kohdealustan build-tuki, esimerkiksi Windows Build Support tai Web Build Support. Jos alusta ei ole tiedossa, lisäät moduulin myöhemmin."],
            ["Asenna GitHub Desktop", "Asenna GitHub Desktop viikon kuvaohjeen mukaan ja kirjaudu GitHub-tunnukseesi."],
            ["Ota versiot talteen", "Kirjaa omaan päiväkirjaasi Unityn tarkka versionumero Unity Hubin Installs-näkymästä ja GitHub Desktopin versio kohdasta Help ja About GitHub Desktop."]
          ],
          valmis: "Unity Hubin Installs-näkymässä näkyy sovittu versio, ja GitHub Desktop on kirjautunut GitHub-tunnukseesi.",
          tallenna: "Versionumerot omaan päiväkirjaasi.",
          sanat: ["LTS"],
          apu: {
            title: "Asennus ja moduulit",
            vinkit: [
              "Versionumero on muotoa 6000.0.40f1: numeroita, pisteitä ja kirjain. Kirjoita se kokonaan; pelkkä ”Unity 6” ei riitä.",
              "Mac-koneella koodieditoriksi sopii Visual Studio Code ja sen Unity-laajennus. Windowsissa Unity Hub voi asentaa Visual Studio Communityn moduulina.",
              "Unity Hubin kirjautuminen tarvitsee Unity-tunnuksen. Opiskelukäyttöön riittää maksuton Personal-lisenssi, mutta kysy ohjaajalta oppilaitoksen linja."
            ],
            test: "Unity Hubin Installs-näkymässä näkyy sama versionumero, jonka ohjaaja antoi.",
            links: [["Unity Hubin lataus", "https://unity.com/download"], ["Unityn versioarkisto", "https://unity.com/releases/editor/archive"], ["GitHub Desktop: asennus", "../ohjeet/github-desktop/?projekti=protopaja#asennus"]]
          }
        },
        "1-3": {
          miksi: "Repository on parin yhteinen koodivarasto. Kun se perustetaan oikein heti, Unityn väliaikaistiedostot ja sähköpostiosoitteet eivät päädy historiaan, josta niitä on vaikea poistaa.",
          osat: [
            ["Sopikaa luoja", "Sopikaa, kumpi luo repositoryn ja kokeiluprojektin. Toinen kloonaa sen tämän työvaiheen lopussa."],
            ["Piilottakaa sähköposti", "Kumpikin avaa GitHubissa Settings ja Emails ja valitsee Keep my email addresses private ennen ensimmäistä committia. Kysykää ohjaajalta, millä nimellä olette tekijöinä."],
            ["Luokaa repository", "Luoja luo GitHubissa repositoryn. Näkyvyydeksi valitaan Private, kunnes ohjaaja päättää julkisuudesta. Add .gitignore -kohtaan valitaan Unity."],
            ["Luokaa kokeiluprojekti", "Luoja kloonaa repositoryn GitHub Desktopilla ja luo Unity Hubissa sovitulla versiolla 2D-projektin nimeltä Kokeilu kloonatun kansion sisään."],
            ["Siirtäkää .gitignore", "Luoja siirtää repositoryn juuressa olevan .gitignore-tiedoston Kokeilu-kansioon, Assets-kansion viereen. Unityn pohja toimii vain kansiossa, jossa projekti on."],
            ["Tarkistakaa ja viekää GitHubiin", "Luoja tarkistaa Changes-listasta, ettei siellä ole Library- tai Temp-kansioita, lisää `project-docs/kysymykset.md`, tekee commitin ja painaa Push origin."],
            ["Kloonatkaa toiselle koneelle", "Toinen kloonaa repositoryn GitHub Desktopilla ja avaa Kokeilu-kansion Unity Hubin Add-toiminnolla. Unity rakentaa Library-kansion itse, mikä voi kestää muutaman minuutin."]
          ],
          valmis: "Repository on GitHubissa yksityisenä, siinä ei ole Library- tai Temp-kansioita, ja kokeiluprojekti aukeaa kummankin koneella.",
          tallenna: "Repositoryn osoite ja ensimmäisen commitin linkki kummankin päiväkirjaan.",
          sanat: ["repository", "commit", "push ja pull", ".gitignore"],
          apu: {
            title: "Repositoryn rakenne työviikolla 1",
            tree: "protopaja/               yhteinen repository (Private)\n├─ Kokeilu/             työviikon 1 Unity-kokeiluprojekti\n│  ├─ Assets/\n│  ├─ Packages/\n│  ├─ ProjectSettings/\n│  └─ .gitignore        Unityn pohja: Library, Temp ja Builds jäävät pois\n├─ project-docs/\n│  ├─ kysymykset.md\n│  └─ omat/             kummankin oma kansio (työvaihe 4)\n└─ README.md",
            vinkit: [
              "Jos Changes-listassa on tuhansia tiedostoja, .gitignore on väärässä kansiossa. Älä tee committia: siirrä tiedosto Assets-kansion viereen, niin lista lyhenee.",
              "Unityn .gitignore-pohjan rivit alkavat vinoviivalla, esimerkiksi /[Ll]ibrary/. Vinoviiva tarkoittaa: juuri siinä kansiossa, jossa .gitignore on.",
              "Jos GitHub on jo ehtinyt saada sähköpostiosoitteesi, kerro ohjaajalle ennen kuin repository muutetaan julkiseksi."
            ],
            test: "Toinen avaa projektin omalla koneellaan, eikä GitHubin tiedostolistassa ole Library-kansiota.",
            links: [["GitHub Desktop: kloonaa repository", "../ohjeet/github-desktop/?projekti=protopaja#kloonaa"], ["GitHub Desktop: commit", "../ohjeet/github-desktop/?projekti=protopaja#commit"]]
          }
        },
        "1-4": {
          miksi: "Ensimmäinen onnistuminen: oma muutos näkyy pelissä ja on tallessa omalla nimelläsi. Samalla harjoittelet kierroksen, jota toistat koko projektin ajan: hae, muuta, kokeile, commit ja push.",
          osat: [
            ["Sopikaa vuorot", "Tehkää muutokset vuorotellen, koska molemmat muokkaavat samaa sceneä. Ensimmäinen tekee muutoksensa ja painaa Push origin, ja toinen aloittaa vasta sen jälkeen."],
            ["Hae parisi muutokset", "Paina GitHub Desktopissa Fetch origin ja sitten Pull origin, jos se näkyy. Avaa projekti vasta tämän jälkeen."],
            ["Tee muutos", "Tee sceneen yksi näkyvä muutos. Valitse esimerkiksi GameObject-valikosta 2D Object, Sprites ja Square ja vaihda neliön väri Inspectorissa."],
            ["Kokeile Play-tilassa", "Paina Play ja tarkista, että muutos näkyy. Lopeta Play-tila ennen muita muutoksia, koska Play-tilassa tehdyt muutokset häviävät."],
            ["Tallenna scene", "Tallenna scene pikanäppäimellä Ctrl+S (Mac: Cmd+S). Tallentamaton scene ei näy GitHub Desktopin Changes-listassa."],
            ["Luo oma kansio", "Luo kansio `project-docs/omat/OMA-KANSIO`, jossa OMA-KANSIO on ohjaajan kanssa sovittu nimesi tai tunnuksesi. Tallenna sinne tyhjä tiedosto `projektipaivakirja.md`."],
            ["Tee commit ja push", "Kirjoita commit-viestiksi, mitä muutit, esimerkiksi Lisää punainen neliö. Paina Commit to main ja Push origin ja kerro parillesi, että vuoro vaihtuu."]
          ],
          valmis: "GitHubin commit-historiassa on oma commitisi omalla nimelläsi, ja muutos näkyy Play-tilassa.",
          tallenna: "Commitin linkki omaan päiväkirjaasi.",
          sanat: ["scene", "Play-tila"],
          apu: {
            title: "Jos push ei onnistu",
            vinkit: [
              "Jos GitHub Desktop ei päästä pushaamaan, koska GitHubissa on uusia muutoksia, paina Pull origin, avaa projekti ja tarkista muutokset. Paina sitten Push origin.",
              "Jos molemmat ehtivät muuttaa samaa sceneä, syntyy ristiriita. Pyytäkää ohjaajalta apua. Työviikolla 3 harjoittelette ristiriidan ratkaisua tarkoituksella."
            ],
            test: "Avaa GitHubissa repositoryn Commits-sivu: oma commitisi näkyy omalla nimelläsi."
          }
        },
        "1-5": {
          miksi: "Tehtävätaulusta näkyy, kuka tekee mitä, ja työaikataulukosta, mihin aika kului. Molemmat ovat työnäytettä kummankin omasta työstä, joten ne otetaan käyttöön ennen ensimmäistä peliä.",
          osat: [
            ["Valitkaa taulu", "Valitkaa tehtävätauluksi Trello tai muu ohjaajan kanssa sovittu taulu. Kutsukaa toinen ja ohjaajat tauluun, jos ohjaajat haluavat seurata sitä."],
            ["Tehkää sarakkeet", "Tehkää tauluun sarakkeet Tulossa, Työn alla, Testattavana ja Valmis."],
            ["Tehkää ensimmäiset kortit", "Tehkää kortti jokaisesta tämän viikon työvaiheesta. Kirjoittakaa korttiin tavoite, vastuuhenkilö ja valmis kun -ehto."],
            ["Luokaa työaikataulukko", "Luokaa yhteinen Excel-taulukko sovittuun paikkaan, esimerkiksi Teamsiin. Viikon pohjassa ovat valmiina sarakkeet päivämäärä, opiskelija, prototyyppi, tehtävä, käytetty aika ja lyhyt tulos."],
            ["Kirjatkaa tämän viikon aika", "Kirjatkaa kumpikin oma työaikanne tältä viikolta. Kirjaa yksi rivi jokaisesta työkerrasta."],
            ["Kertokaa sijainnit", "Kirjoittakaa repositoryn `README.md`-tiedostoon, missä tehtävätaulu ja työaikataulukko ovat. Älkää kirjoittako sinne salasanoja."]
          ],
          valmis: "Taulussa on kortti jokaisesta tämän viikon työvaiheesta vastuuhenkilöineen, ja työaikataulukossa on kummankin rivit tältä viikolta.",
          tallenna: "Kuvakaappaus taulusta polkuun `project-docs/tyonaytteet/viikko-1/tehtavataulu.png` ja päivitetty `README.md`.",
          sanat: ["tehtävätaulu"],
          esimerkki: "Kortti: ”Kokeiluprojekti GitHubiin – vastuu: luoja – valmis kun: toinen avaa projektin omalla koneellaan.”",
          eiRiita: "Kortti ”Unity” ilman vastuuhenkilöä ja valmis kun -ehtoa."
        }
      }
    },

    2: {
      type: "pohjustus",
      feature: "Suunnitelmassa on kolmen pelin mekaniikka, tavoite ja rajaus, vastuutaulukko kertoo kummankin osat jokaisessa pelissä, ja vahvistamattomat asiat on merkitty avoimiksi.",
      excerpt: "Mieluummin kolme valmista ja testattua peliä kuin viisi keskeneräistä.",
      connection: "Työviikon 1 kysymykset saivat vastauksia, ja nyt ne muuttuvat suunnitelmaksi. Päätätte pelien pienimmät toimivat versiot ja sen, kuka tekee mitäkin, koska kumpikin tarvitsee omat työnäytteensä jokaisesta osaamisvaatimuksesta. Ensimmäisen pelin kortit ohjaavat työtä työviikosta 3 alkaen.",
      deliverable: "`project-docs/suunnitelma.md`, `project-docs/paatokset.md`, `project-docs/vastuutaulukko.md` ja ensimmäisen pelin kortit työmääräarvioineen.",
      why: "Ilman rajausta 18 viikkoa valuu yhden pelin hiomiseen. Ilman vastuutaulukkoa toinen teistä voi jäädä ilman omia työnäytteitä.",
      done: "Kumpikin kertoo vuorollaan ilman muistiinpanoja jokaisen pelin pienimmän toimivan version ja omat vastuunsa ensimmäisessä pelissä. Ohjaaja vertaa kerrottua suunnitelmaan ja vastuutaulukkoon, eikä eroja ole.",
      record: "Kirjoita työviikon 2 merkintään, mikä jäi pienimmän toimivan version ulkopuolelle ja miksi, oma osuutesi projektijaon vertailusta, omat vastuusi ensimmäisessä pelissä ja avoimeksi jääneet asiat. Näyttömatriisin rivit: tehtävistä sopiminen (p8), ratkaisuvaihtoehtojen etsiminen (p9), tärkeysjärjestys (s4), toimintojen jakaminen tehtäviksi (s5), tehtävien suunnittelu ja arviointi (s6) ja ohjelmiston suunnittelu komponenttikirjastolla (k5).",
      skills: ["tärkeysjärjestys ja rajaus (s4)", "toimintojen jakaminen tehtäviksi (s5, s6)", "tehtävistä sopiminen (p8)", "ratkaisuvaihtoehtojen vertailu (p9)"],
      resources: [["Avaa suunnitelmalomake", "#view-suunnitelma", false]],
      tehtavat: {
        "2-1": {
          miksi: "Suunnitelma kertoo, milloin kukin peli on valmis. Ilman sitä ensimmäinen peli kasvaa loputtomasti, eikä kolmatta ehditä tehdä.",
          osat: [
            ["Valitkaa kolme aihetta", "Valitkaa toimeksiannon aiheista kolme tai ehdottakaa vastaavan laajuisia. Aiheet ovat lähtökohta, ja asiakkaat vahvistavat ne työvaiheessa 5."],
            ["Kuvatkaa päämekaniikka ja tavoite", "Kirjoittakaa suunnitelmalomakkeelle jokaisesta pelistä, mitä pelaaja tekee toistuvasti ja mihin hän pyrkii."],
            ["Kuvatkaa kierroksen kulku", "Kirjoittakaa, miten kierros alkaa, miten se päättyy ja miten pelaaja aloittaa uudelleen. Tavoitepituus on 1–3 minuuttia."],
            ["Kirjoittakaa pienin toimiva versio", "Kirjoittakaa jokaiselle pelille pienin toimiva versio yhdellä virkkeellä. Katsokaa tehtävän esimerkki."],
            ["Kirjoittakaa, mitä jätätte pois", "Kirjatkaa lomakkeen Mitä jätämme pois -kenttään vähintään kolme houkuttelevaa lisäystä, joita ette tee."],
            ["Ladatkaa suunnitelma", "Täyttäkää lomake yhdellä koneella, ladatkaa `suunnitelma.md` ja tallentakaa se polkuun `project-docs/suunnitelma.md`. Tehkää commit ja push."]
          ],
          valmis: "Suunnitelma kertoo jokaisesta pelistä päämekaniikan, tavoitteen, kierroksen kulun ja pienimmän toimivan version, ja siinä on vähintään kolme pois jätettyä asiaa.",
          tallenna: "`project-docs/suunnitelma.md` repositoryyn.",
          sanat: ["päämekaniikka", "ydinsilmukka", "pienin toimiva versio"],
          esimerkki: "Pienin toimiva versio: ”Pelaaja liikkuu ja hyppää yhdessä kentässä, kerää viisi esinettä ja pääsee maaliin; piikkiin osuminen palauttaa lähtöön.”",
          eiRiita: "”Hauska tasohyppely, jossa on monta kenttää ja hienot grafiikat.” Siinä ei ole tavoitetta, loppua eikä rajausta."
        },
        "2-2": {
          miksi: "Ratkaisu vaikuttaa siihen, miten vältätte ristiriidat, miten jaatte alkuvalikon peleille ja miten musiikkikurssi avaa pelit. Päätös tehdään nyt, koska projektien siirtäminen myöhemmin on työlästä.",
          osat: [
            ["Mitatkaa kokeiluprojekti", "Katsokaa työviikon 1 kokeiluprojektin Library-kansion koko ja mitatkaa, kauanko projektin avaaminen kestää. Kirjatkaa luvut."],
            ["Kirjoittakaa kriteerit", "Luokaa tiedosto `project-docs/paatokset.md` ja kirjoittakaa siihen kriteerit: vastaanottajan avattavuus, ristiriitariski, yhteinen alkuvalikko, levytila ja buildien määrä."],
            ["Arvioikaa vaihtoehdot", "Kirjoittakaa jokaisesta kriteeristä, miten erilliset projektit ja yksi yhteinen projekti eroavat. Käyttäkää mittaamianne lukuja."],
            ["Tehkää päätös", "Valitkaa vaihtoehto ja perustelkaa se kahdella kriteerillä. Kirjatkaa päätös päätöslokiin päivämäärän kanssa ja suunnitelmalomakkeen kenttään."],
            ["Kertokaa ohjaajalle", "Kertokaa päätös ohjaajalle. Jos hän ei vielä vahvista sitä, merkitkää se avoimeksi asiaksi ja jatkakaa valitsemallanne tavalla."]
          ],
          valmis: "Päätöslokissa on vertailu omilla mittauksilla, päätös päivämäärineen ja kaksi perustelua.",
          tallenna: "`project-docs/paatokset.md` repositoryyn.",
          esimerkki: "”Valitsimme erilliset projektit, koska musiikkikurssin opiskelija avaa vain sen pelin, johon hän tekee äänet (kokeiluprojektin avaaminen kesti meillä 2 min 10 s), ja koska ristiriita yhdessä projektissa pysäyttäisi kaikki kolme peliä.”",
          eiRiita: "”Erilliset projektit ovat selkeämpiä.” Perustelussa ei ole kriteeriä eikä omaa havaintoa.",
          apu: {
            title: "Vertailun apu",
            vinkit: [
              "Library-kansion koon näet Windowsissa kansion ominaisuuksista ja Macissa Finderin Näytä tietoja -toiminnolla.",
              "Yhdessä projektissa jokainen peli on omassa kansiossaan Assets-kansion alla, ja Build Profiles -ikkunassa valitaan, mitkä scenet kuhunkin buildiin tulevat.",
              "Erillisissä projekteissa jokainen peli avataan ja kootaan erikseen, ja yhteinen alkuvalikko kopioidaan prefabina."
            ],
            code: "## Päätös: erilliset projektit vai yksi projekti (PÄIVÄMÄÄRÄ)\n\nMittaukset: Library-kansion koko KOKO, avaamisen kesto AIKA\n\n| Kriteeri | Erilliset projektit | Yksi projekti |\n| --- | --- | --- |\n| Vastaanottajan avattavuus | | |\n| Ristiriitariski | | |\n| Yhteinen alkuvalikko | | |\n| Levytila | | |\n| Buildien määrä | | |\n\nPäätös: VAIHTOEHTO, koska PERUSTELU 1 ja PERUSTELU 2.\nOhjaajan vahvistus: vahvistettu / avoin asia"
          }
        },
        "2-3": {
          miksi: "Kortit muuttavat suunnitelman töiksi, joilla on tekijä. Työmääräarvioita verrataan toteumaan työviikolla 6, ja siitä näette, kuinka hyvin osaatte arvioida.",
          osat: [
            ["Valitkaa ensimmäinen peli", "Valitkaa, mikä kolmesta pelistä tehdään ensin. Valitkaa se, jonka päämekaniikka on teille selvin."],
            ["Jakakaa peli toiminnoiksi", "Kirjoittakaa ensimmäisen pelin pienin toimiva versio toiminnoiksi, esimerkiksi liike, hyppy, kerättävä esine, este, maali, alkuvalikko ja loppuruutu."],
            ["Asettakaa tärkeysjärjestys", "Järjestäkää toiminnot niin, että pienimmän toimivan version toiminnot ovat ensin ja lisäykset viimeisinä."],
            ["Tehkää kortit", "Tehkää jokaisesta toiminnosta tehtävätaulun kortti, jossa on tavoite ja valmis kun -ehto."],
            ["Arvioikaa työmäärä", "Kirjoittakaa jokaiseen korttiin arvio työtunneista. Arviota verrataan myöhemmin työaikataulukon toteumaan."]
          ],
          valmis: "Ensimmäisen pelin jokaisella toiminnolla on kortti, jossa on tavoite, valmis kun -ehto ja tuntiarvio, ja kortit ovat tärkeysjärjestyksessä.",
          tallenna: "Kuvakaappaus taulusta polkuun `project-docs/tyonaytteet/viikko-2/kortit.png`.",
          esimerkki: "”Maali päättää kierroksen – valmis kun: pelaaja koskettaa lippua ja ruutuun tulee loppuviesti – arvio 3 h.”",
          eiRiita: "”Tasohyppely – 40 h.” Yksi kortti koko pelistä ei kerro, mitä tehdään ensin."
        },
        "2-4": {
          miksi: "Kumpikin näyttää kaikki omien tutkinnon osiensa vaatimukset omalla työllään. Vaatimuksia ei jaeta parin kesken, vaan vastuut vaihtuvat pelien välillä, jotta kumpikin tekee jokaista osa-aluetta.",
          osat: [
            ["Luokaa vastuutaulukko", "Kopioikaa avun pohja tiedostoon `project-docs/vastuutaulukko.md`."],
            ["Jakakaa ensimmäinen peli", "Kirjoittakaa ensimmäisen pelin sarakkeeseen jokaiselle osa-alueelle tekijän nimi tai sovittu tunnus."],
            ["Vaihtakaa vastuut", "Täyttäkää toisen pelin sarake niin, että kumpikin saa osa-alueet, joita ei tehnyt ensimmäisessä pelissä."],
            ["Tarkistakaa aukot", "Tarkistakaa, että jokainen osa-alue on kummallakin vähintään kerran. Kolmannen pelin sarakkeella täytetään jäljelle jääneet aukot."],
            ["Tarkistakaa näyttömatriisi", "Avatkaa sivun Näyttömatriisi. Tarkistakaa, että kumpikin saa vastuutaulukon osa-alueista oman työnäytteen jokaiseen vaatimukseen."],
            ["Näyttäkää ohjaajalle", "Käykää taulukko läpi ohjaajan kanssa viikkotarkistuksessa ja korjatkaa se, jos joltakulta puuttuu osa-alue."]
          ],
          valmis: "Vastuutaulukossa jokainen osa-alue on kummallakin vähintään kerran, ja ohjaaja on nähnyt taulukon.",
          tallenna: "`project-docs/vastuutaulukko.md` repositoryyn.",
          apu: {
            title: "Vastuutaulukon pohja",
            code: "# Vastuutaulukko\n\nSääntö: jokainen osa-alue vähintään kerran kummallekin.\n\n| Osa-alue | Peli 1 | Peli 2 | Peli 3 |\n| --- | --- | --- | --- |\n| Päämekaniikka | NIMI | NIMI | NIMI |\n| Kierroksen logiikka (päättyminen, ajastin) | NIMI | NIMI | NIMI |\n| Käyttöliittymä (alkuvalikko, ohje, loppuruutu) | NIMI | NIMI | NIMI |\n| Grafiikka ja assetit | NIMI | NIMI | NIMI |\n| Data (kenttä tai asetukset tiedostosta) | ei tässä pelissä | NIMI | NIMI |\n\n| Katselmointi | Työviikko 6 | Työviikko 12 |\n| --- | --- | --- |\n| Esittelee asiakkaille | NIMI | NIMI |\n| Kirjaa palautteen | NIMI | NIMI |",
            vinkit: [
              "Data-rivillä ensimmäinen peli on tyhjä: kenttädata otetaan käyttöön toisessa pelissä ja asetusdata kolmannessa.",
              "Testaatte joka toteutusviikolla toistenne osat, joten testaus ei ole oma rivinsä.",
              "Katselmoinneissa roolit vaihtuvat: työviikon 6 esittelijä kirjaa palautteen työviikolla 12."
            ]
          }
        },
        "2-5": {
          miksi: "Osa päätöksistä kuuluu asiakkaille tai ohjaajille. Kun pyydätte vahvistuksen ajoissa, ehditte muuttaa suunnitelmaa ennen kuin koodia on paljon.",
          osat: [
            ["Listatkaa vahvistettavat", "Katsokaa suunnitelmalomakkeen vahvistettavat kohdat: aiheet, kohdealusta, tekoälyn käyttö, repositoryn julkisuus, lisenssi, tutkinnon perusteet ja katselmoinnit."],
            ["Viekää aiheet asiakkaille", "Lähettäkää asiakkaille kolmen pelin kuvaukset avun viestipohjalla ja kysykää, sopivatko ne musiikkikurssille ja millä alustalla kurssi pelaa."],
            ["Viekää loput ohjaajalle", "Käykää muut vahvistettavat asiat läpi ohjaajan kanssa viikkotarkistuksessa."],
            ["Kirjatkaa vastaukset", "Kirjatkaa saadut vastaukset suunnitelmalomakkeelle ja päätöslokiin. Jättäkää vastaamatta jääneet kentät tyhjiksi. Suunnitelma merkitsee ne silloin avoimiksi. Jatkakaa työtä."]
          ],
          valmis: "Jokainen vahvistettava asia on suunnitelmassa joko vastattuna tai avoimena asiana, ja asiakkaille on lähetetty aiheet.",
          tallenna: "Päivitetty `project-docs/suunnitelma.md` ja päätöslokin merkintä viestin lähetyspäivästä.",
          apu: {
            title: "Viestipohja asiakkaille",
            code: "Hei Caito ja Toni,\n\nsuunnittelemme pelimusiikin kurssille kolme pientä peliä:\n1. PELIN NIMI: MITÄ PELAAJA TEKEE JA MIHIN HÄN PYRKII.\n2. PELIN NIMI: MITÄ PELAAJA TEKEE JA MIHIN HÄN PYRKII.\n3. PELIN NIMI: MITÄ PELAAJA TEKEE JA MIHIN HÄN PYRKII.\n\nKysymme kaksi asiaa:\n- Sopivatko nämä aiheet kurssin harjoituksiin?\n- Pelataanko pelejä kurssilla Windows-koneilla, Maceilla vai selaimessa?\n\nTerveisin NIMET",
            vinkit: ["Jos vastausta ei tule viikon loppuun mennessä, kertokaa ohjaajalle ja jatkakaa suunnitelman mukaan. Asia on avoin, kunnes vastaus tulee."]
          }
        }
      }
    },

    3: {
      type: "pohjustus",
      feature: "Sovitulle alustalle koottu kokeiluversio käynnistyy ilman editoria, kumpikin on yhdistänyt toisen muutokset omaan työhönsä, ja ensimmäisen pelin kokeilukentässä voi kokeilla päämekaniikkaa.",
      connection: "Suunnitelma kertoo, mitä teette ja kuka tekee. Nyt rakennatte pohjan, jonka varaan ensimmäinen peli tehdään: sovitun projektirakenteen, kokeilukentän ja koottavan peliversion. Kun build ja ristiriidan ratkaisu toimivat nyt, työviikolla 4 voitte keskittyä pelin kierrokseen.",
      deliverable: "Sovittu projektirakenne, ensimmäisen pelin kokeilukenttä, kummankin osa päämekaniikasta, ratkaistu harjoitusristiriita ja koottu kokeiluversio.",
      why: "Jos build kokeillaan vasta lopussa, alustan ongelmat tulevat vastaan, kun korjaamiseen ei ole aikaa. Ristiriidan ratkaisu on helpointa opetella tilanteessa, jossa mitään ei voi menettää.",
      done: "Käynnistäkää koottu kokeiluversio ilman Unity-editoria ja liikkukaa kokeilukentässä. Kumpikin näyttää omalla koneellaan toisen viimeisimmän muutoksen, ja historiassa on kummankin commit.",
      record: "Kirjoita työviikon 3 merkintään oma osasi päämekaniikasta ja miten kokeilit sitä, miten ratkaisit harjoitusristiriidan ja mitä build-asetuksia käytitte. Näyttömatriisin rivit: kehitysympäristön käyttöönotto ja konfigurointi (k1), osan liittäminen olemassa olevaan versioon (s13), ongelmien ratkaisu yhdessä (p9) ja toimintojen toteuttaminen suunnitelmasta (p7).",
      skills: ["ympäristön konfigurointi (k1)", "osan liittäminen yhteiseen versioon (s13)", "ongelmien ratkaisu yhdessä (p9)", "päämekaniikan ohjelmointi (p7, k3)"],
      tehtavat: {
        "3-1": {
          miksi: "Rakenne pysyy samana koko projektin ajan, ja musiikkikurssi avaa pelit sen mukaan. Kun kansiot ja nimet sovitaan nyt, molemmat löytävät toistensa tiedostot.",
          osat: [
            ["Luokaa projekti", "Luokaa työviikon 2 päätöksen mukaan ensimmäisen pelin Unity-projekti tai yhteinen projekti repositoryyn sovitulla versiolla. Käyttäkää 2D-pohjaa, esimerkiksi Universal 2D."],
            ["Lisätkää .gitignore", "Kopioikaa Kokeilu-kansion .gitignore jokaisen uuden Unity-projektin kansioon, Assets-kansion viereen."],
            ["Tarkistakaa versionhallinnan asetukset", "Avatkaa Edit-valikosta Project Settings. Tarkistakaa Editor-kohdasta, että Asset Serialization Mode on Force Text, ja Version Control -kohdasta, että Mode on Visible Meta Files."],
            ["Luokaa kansiot", "Luokaa pelin Assets-kansioon sovitut kansiot, esimerkiksi Scenes, Scripts, Prefabs ja Art. Nimetkää ne suunnitelman nimeämissäännön mukaan."],
            ["Kirjatkaa rakenne README:hen", "Kirjoittakaa repositoryn `README.md`-tiedostoon kansiorakenne ja Unity-versio. Tehkää commit ja push."]
          ],
          valmis: "Ensimmäisen pelin projekti aukeaa kummankin koneella sovitulla versiolla, Changes-listassa ei ole Library- tai Temp-kansioita, ja README kertoo rakenteen.",
          tallenna: "Rakennecommit ja päivitetty `README.md` repositoryyn.",
          apu: {
            title: "Kaksi sallittua rakennetta",
            tree: "Vaihtoehto A: erilliset projektit\nprotopaja/\n├─ Tasohyppely/        Unity-projekti ja oma .gitignore\n├─ Pulmapeli/          (työviikolla 7)\n├─ Toimintapeli/       (työviikolla 10)\n├─ docs/               ohjeet asiakkaille\n├─ project-docs/       suunnitelma, testit, palautteet, omat/\n└─ README.md\n\nVaihtoehto B: yksi yhteinen projekti\nprotopaja/\n├─ ProtoPaja/          Unity-projekti ja .gitignore\n│  └─ Assets/\n│     ├─ Yhteiset/     alkuvalikon prefab ja fontit\n│     ├─ Tasohyppely/  Scenes, Scripts, Prefabs, Art\n│     ├─ Pulmapeli/\n│     └─ Toimintapeli/\n├─ docs/\n├─ project-docs/\n└─ README.md",
            vinkit: [
              "Force Text on uusissa Unity-versioissa oletus. Tarkistus vie hetken ja varmistaa, että scene tallentuu Gitille luettavana tekstinä.",
              ".meta-tiedostot kuuluvat versionhallintaan. Ilman niitä viittaukset kuviin ja skripteihin katkeavat toisen koneella.",
              "Kokeilu-kansion saa poistaa luovutusta siivottaessa työviikolla 15. Sen commitit jäävät historiaan työnäytteeksi."
            ]
          }
        },
        "3-2": {
          miksi: "Kun kaksi ihmistä muuttaa samaa kohtaa, Git ei osaa valita, kumpi muutos jää. Harjoittelet ratkaisua turvallisella tekstitiedostolla, jotta tiedät, mitä tehdä, kun ristiriita tulee vastaan pelin aikana.",
          osat: [
            ["Sopikaa rivi", "Sopikaa, että kumpikin muuttaa `README.md`-tiedoston otsikkorivin eri tavalla."],
            ["Tee oma muutoksesi", "Muuta otsikkoriviä ja tee commit, mutta älä vielä paina Push origin."],
            ["Ensimmäinen pushaa", "Ensin toinen teistä painaa Push origin. Sen jälkeen toinen painaa Pull origin, ja GitHub Desktop ilmoittaa ristiriidasta."],
            ["Ratkaise ristiriita", "Avaa tiedosto editorissa. Valitse, kumpi rivi jää, tai yhdistä rivit. Poista Gitin lisäämät kolme merkkiriviä, jotka näet avun koodilaatikosta."],
            ["Viimeistele yhdistäminen", "Palaa GitHub Desktopiin, paina Continue merge ja sitten Push origin."],
            ["Vaihtakaa vuoroa", "Toistakaa harjoitus niin, että toinen teistä ratkaisee ristiriidan."],
            ["Kirjatkaa oppi", "Kirjoittakaa päätöslokiin yhdessä, mitä opitte ja miksi samaa sceneä ei muokata yhtä aikaa."]
          ],
          valmis: "Historiassa on yhdistämiscommit, jonka olet tehnyt itse, eikä `README.md` sisällä Gitin merkkirivejä.",
          tallenna: "Oman yhdistämiscommitisi linkki omaan päiväkirjaasi.",
          sanat: ["ristiriita"],
          apu: {
            title: "Miltä ristiriita näyttää",
            code: "<<<<<<< HEAD\nSinun versiosi rivistä\n=======\nParisi versio rivistä\n>>>>>>> origin/main",
            vinkit: [
              "Kaikki kolme merkkiriviä poistetaan. Jäljelle jää vain se teksti, jonka haluatte tiedostoon.",
              "Scene-tiedostossa vastaava ristiriita voi olla satoja rivejä pitkä. Siksi sovitte, että samaa sceneä muokkaa kerrallaan yksi, ja merkitsette vuoron tehtävätaulun korttiin."
            ],
            links: [["GitHub Desktop: ongelmatilanteet", "../ohjeet/github-desktop/?projekti=protopaja#ongelmat"]]
          }
        },
        "3-3": {
          miksi: "Kokeilukentässä päämekaniikan voi kokeilla ennen kuin peliä on muuten olemassa. Jako kahteen osaan varmistaa, että kumpikin ohjelmoi oman osansa jo ensimmäisessä pelissä.",
          osat: [
            ["Valitkaa scenen omistaja", "Sopikaa, kumpi rakentaa kokeilukentän. Toinen ei muokkaa sceneä sillä aikaa. Merkitkää vuoro tehtävätaulun korttiin."],
            ["Rakentakaa kenttä", "Lisätkää sceneen lattia ja muutama este yksinkertaisina muotoina, esimerkiksi Square-spriteinä. Lisätkää niihin Box Collider 2D -komponentti."],
            ["Lisätkää pelaaja", "Lisätkää pelaajaksi yksi muoto ja siihen komponentit Rigidbody 2D ja Box Collider 2D. Tallentakaa scene, tehkää commit ja push."],
            ["Jakakaa päämekaniikka", "Jakakaa päämekaniikka kahteen osaan vastuutaulukon mukaan. Tasohyppelyssä esimerkiksi osa 1 on liike sivuttain ja osa 2 hyppy."],
            ["Tehkää kortit", "Tehkää kummastakin osasta kortti vastuuhenkilöineen. Kirjoittakaa korttiin, mitä pelaaja tekee ja mitä ruudulla tapahtuu, kun osa toimii."]
          ],
          valmis: "Kokeilukenttä on repositoryssa, pelaaja putoaa lattialle Play-tilassa, ja tehtävätaulussa on kaksi päämekaniikan korttia eri vastuuhenkilöillä ja odotetuilla tuloksilla.",
          tallenna: "Kenttäcommit repositoryyn ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-3/kortit.png`.",
          sanat: ["GameObject", "komponentti"]
        },
        "3-4": {
          miksi: "Tämä on ensimmäinen oma C#-skriptisi peliin. Teet sen omaan tiedostoonsa, jotta voitte työskennellä yhtä aikaa ilman ristiriitoja.",
          osat: [
            ["Hae parisi muutokset", "Paina GitHub Desktopissa Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Luo oma skripti", "Luo Scripts-kansioon C#-skripti, jonka nimi kertoo, mitä se tekee, esimerkiksi PlayerMovement tai PlayerJump."],
            ["Kirjoita toiminto", "Kirjoita skriptiin oman osasi toiminto. Avun koodipohjassa on runko, jonka TODO-kohdat täytät itse."],
            ["Liitä skripti pelaajaan", "Liitä skripti pelaajan GameObjectiin. Jos scene on toisen vuorossa, sovi hetki, jolloin liität skriptin ja tallennat scenen."],
            ["Kokeile Play-tilassa", "Kokeile osaasi ja vertaa tulosta kortin odotettuun tulokseen. Korjaa, kunnes ne vastaavat toisiaan."],
            ["Tee commit ja push", "Tee commit, jonka viesti kertoo toiminnon, ja paina Push origin. Siirrä kortti Testattavana-sarakkeeseen."]
          ],
          valmis: "Oma osasi toimii Play-tilassa kortin odotetun tuloksen mukaan, ja commit on historiassa omalla nimelläsi.",
          tallenna: "Oman commitisi linkki tehtävätaulun korttiin ja omaan päiväkirjaasi.",
          sanat: ["C#-skripti"],
          apu: {
            title: "Koodipohja: liike sivuttain",
            code: "using UnityEngine;\nusing UnityEngine.InputSystem;\n\n// Liitä pelaajaan. Pelaajalla pitää olla Rigidbody 2D -komponentti.\npublic class PlayerMovement : MonoBehaviour\n{\n    [SerializeField] private float speed = 5f;   // säädettävissä Inspectorissa\n    private Rigidbody2D body;\n\n    void Awake()\n    {\n        body = GetComponent<Rigidbody2D>();\n    }\n\n    void Update()\n    {\n        float direction = 0f;\n        // TODO: aseta direction arvoon -1, kun vasen nuolinäppäin on painettuna,\n        //       ja arvoon 1, kun oikea nuolinäppäin on painettuna.\n        //       Vihje: Keyboard.current.leftArrowKey.isPressed\n\n        // TODO: aseta vaakanopeus ja säilytä pystynopeus:\n        //       body.linearVelocity = new Vector2(direction * speed, body.linearVelocity.y);\n    }\n}",
            vinkit: [
              "`[SerializeField]` näyttää yksityisen kentän Inspectorissa, joten nopeutta voi säätää ilman koodimuutosta.",
              "Pohja käyttää Input System -pakettia, joka on uusien Unity 6 -projektien oletus. Asetus on kohdassa Project Settings, Player, Active Input Handling.",
              "Vanhemmissa Unity-versioissa `linearVelocity` on nimeltään `velocity`.",
              "Hyppy: lisää pystynopeutta vain, kun pelaaja on maassa. Maassa olon voi päätellä esimerkiksi metodeilla OnCollisionEnter2D ja OnCollisionExit2D."
            ],
            test: "Paina Play ja pidä nuolinäppäintä pohjassa: pelaaja liikkuu siihen suuntaan ja pysähtyy, kun päästät irti."
          }
        },
        "3-5": {
          miksi: "Build paljastaa ongelmat, joita editorissa ei näy, esimerkiksi puuttuvat scenet tai alustan rajoitukset. Kun kokoaminen onnistuu nyt, sama kulku toimii luovutuksessa.",
          osat: [
            ["Avatkaa build-asetukset", "Avatkaa File-valikosta Build Profiles. Vanhemmissa Unity-versioissa sama ikkuna on nimeltään Build Settings."],
            ["Valitkaa alusta", "Valitkaa sovittu kohdealusta. Jos alustaa ei ole vahvistettu, käyttäkää omaa käyttöjärjestelmäänne ja kirjatkaa se päätöslokiin."],
            ["Lisätkää scene", "Lisätkää kokeilukentän scene Scene List -luetteloon."],
            ["Kootkaa peli", "Painakaa Build ja valitkaa kansioksi Unity-projektin sisälle tehtävä `Builds`-kansio. Builds-kansio ei mene versionhallintaan."],
            ["Käynnistäkää build", "Käynnistäkää koottu peli ilman editoria ja kokeilkaa molempia päämekaniikan osia."],
            ["Kirjatkaa erot", "Kirjatkaa päätöslokiin alusta, build-asetukset ja jokainen ero, jonka huomasitte editorin ja buildin välillä."]
          ],
          valmis: "Koottu kokeiluversio käynnistyy ilman Unity-editoria, ja molemmat päämekaniikan osat toimivat siinä.",
          tallenna: "Kuvakaappaus käynnissä olevasta buildista polkuun `project-docs/tyonaytteet/viikko-3/build.png` ja alustan tiedot päätöslokiin.",
          sanat: ["build"],
          apu: {
            title: "Kun build ei käynnisty",
            vinkit: [
              "Selaimessa toimivaa buildia ei voi avata tuplaklikkaamalla. Käyttäkää Build And Run -painiketta, joka käynnistää paikallisen palvelimen.",
              "Jos build kaatuu tai jää mustaksi, katsokaa Unityn Console-ikkunan virheet ja tarkistakaa, että scene on Scene List -luettelossa.",
              "Jos ohjaaja siirtää tämän työvaiheen työviikolle 4, tehkää se ennen työviikon 4 testausta."
            ],
            test: "Sulkekaa Unity kokonaan ja käynnistäkää peli Builds-kansiosta: pelaaja liikkuu."
          }
        }
      }
    },

    /* ============ VAIHE 2: ENSIMMÄINEN PELI (4–6) ============ */
    4: {
      type: "feature",
      termit: ["T01"],
      feature: "Ensimmäistä peliä voi pelata alusta kierroksen päättymiseen asti, ja lopputulos näkyy ruudulla.",
      excerpt: "Pelaajan pitää ymmärtää, milloin kierros päättyy ja miten siinä kävi.",
      connection: "Päämekaniikkaa on kokeiltu pienessä kentässä. Nyt siitä rakennetaan kokonainen kierros. Valikko ja viimeistellyt grafiikat tulevat työviikolla 5; tällä viikolla ratkaistaan, toimiiko itse peli.",
      deliverable: "Kierroksen päättymisen tunnistus, loppuviesti, `docs/aanitapahtumat.md` ja testimatriisin ensimmäiset testitapaukset.",
      why: "Pelisilmukka tarvitsee toimivan lopun ennen kuin peliä kannattaa viimeistellä. Ilman loppua ei ole kierrosta, jota musiikkikurssi voisi säestää.",
      done: "Käynnistäkää peli ja pelatkaa kierros sovittuun päättymiseen asti. Loppuviesti vastaa tapahtunutta, eikä peli jatku normaalisti sen jälkeen. Uuden testikierroksen saa tällä viikolla aloittaa editorin Play-tilasta. Historiassa on kummankin commit, ja kumpikin on testannut toisen osan.",
      record: "Kirjoita työviikon 4 merkintään oma osasi kierroksen lopusta, miten tunnistit päättymisen ja miksi, kuka testasi osasi ja mitä hän löysi. Näyttömatriisin rivit: toimintalogiikka (s7), rakenteinen ohjelmointi (p4), toiminnot suunnitelmasta (p7), Unityn tärkeimmät työkalut (k3) ja toimintojen testaus (p3).",
      skills: ["toimintalogiikka (s7)", "rakenteinen ohjelmointi (p4, p7)", "Unityn fysiikka ja törmäykset (k3)", "testaus odotettua tulosta vasten (p3)"],
      tehtavat: {
        "4-1": {
          miksi: "Pelaajan pitää huomata, milloin tavoite on saavutettu tai peli hävitty. Kun päättyminen sovitaan ensin, kumpikin tietää, mitä oma osa tekee.",
          osat: [
            ["Valitkaa päättymisehto", "Valitkaa suunnitelmasta ensimmäisen pelin päättymisehto, esimerkiksi pelaaja koskettaa maalia tai osuu piikkiin."],
            ["Kirjoittakaa, mitä näkyy", "Kirjoittakaa, mitä pelaaja tekee ja mitä ruudulla sen jälkeen näkyy, esimerkiksi teksti Maali! ja pelaajan pysähtyminen."],
            ["Jakakaa kahteen osaan", "Osa 1 on päättymisen tunnistus ja osa 2 loppuviesti ja pelin pysäytys. Osa 1 kuuluu vastuutaulukon kierroksen logiikan tekijälle ja osa 2 käyttöliittymän tekijälle."],
            ["Sopikaa liitoskohta", "Sopikaa, millä metodilla osat kytkeytyvät, esimerkiksi osa 1 kutsuu metodia EndRound, jonka osa 2 kirjoittaa."],
            ["Tehkää kortit", "Tehkää kummastakin osasta kortti, jossa ovat vastuuhenkilö, odotettu tulos ja sovittu metodin nimi."]
          ],
          valmis: "Päättymisehto ja kaksi korttia eri vastuuhenkilöille on kirjattu tehtävätauluun, ja liitoskohdan metodin nimi on sovittu.",
          tallenna: "Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-4/kortit.png`."
        },
        "4-2": {
          miksi: "Pelisilmukka tarvitsee toimivan lopun. Teet oman osasi omaan skriptiinsä ja kokeilet sen ennen kuin pyydät paria testaamaan.",
          osat: [
            ["Hae parisi muutokset", "Paina Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Kirjoita oma skripti", "Kirjoita oman osasi skripti, esimerkiksi GoalTrigger (osa 1) tai RoundManager (osa 2). Käytä avun koodipohjaa ja sovittua metodin nimeä."],
            ["Kokeile yksin", "Kokeile osaasi Play-tilassa. Osa 1: Console-ikkunaan tulostuu viesti, kun pelaaja koskettaa maalia. Osa 2: metodin kutsu näyttää loppuviestin ja pysäyttää pelin."],
            ["Estä jatkuminen", "Varmista, ettei kierros jatku normaalisti päättymisen jälkeen eikä loppu käynnisty kahdesti."],
            ["Nimeä pelitapahtuma", "Anna pelitapahtuman metodille nimi, joka kertoo tapahtuman, esimerkiksi ReachGoal. Musiikkikurssi etsii tapahtumat näillä nimillä."],
            ["Tee commit ja push", "Tee commit vain omista tiedostoistasi ja paina Push origin. Siirrä kortti Testattavana-sarakkeeseen."]
          ],
          valmis: "Oma osasi toimii Play-tilassa odotetun tuloksen mukaan, kierros ei jatku päättymisen jälkeen, ja oma commitisi on historiassa.",
          tallenna: "Oman commitisi linkki korttiin ja omaan päiväkirjaasi.",
          sanat: ["collider"],
          apu: {
            title: "Koodipohjat: maali ja kierroksen loppu",
            code: "using UnityEngine;\n\n// Osa 1, tiedosto GoalTrigger.cs. Liitä maaliin.\n// Maalissa on Box Collider 2D, jossa Is Trigger on valittu.\npublic class GoalTrigger : MonoBehaviour\n{\n    [SerializeField] private RoundManager roundManager;   // raahaa Inspectorissa\n\n    void OnTriggerEnter2D(Collider2D other)\n    {\n        // TODO: jatka vain, jos koskettaja on pelaaja: other.CompareTag(\"Player\")\n        // TODO: kutsu roundManager.EndRound(true);\n    }\n}\n\n// Osa 2, oma tiedosto RoundManager.cs. Liitä tyhjään GameObjectiin.\npublic class RoundManager : MonoBehaviour\n{\n    [SerializeField] private GameObject endPanel;   // loppuviestin paneeli\n    private bool roundOver;\n\n    public void EndRound(bool won)\n    {\n        // TODO: jos roundOver on jo true, palaa heti, jotta loppu ei käynnisty kahdesti\n        // TODO: aseta roundOver = true\n        // TODO: näytä endPanel ja aseta sen teksti voiton tai häviön mukaan\n        // TODO: pysäytä peli, esimerkiksi Time.timeScale = 0f;\n    }\n}",
            vinkit: [
              "Jokainen MonoBehaviour-luokka on omassa tiedostossaan, ja tiedoston nimi on sama kuin luokan nimi.",
              "Trigger toimii vain, jos toisella koskettavista on Rigidbody 2D. Pelaajalla se on jo työviikolta 3.",
              "Pelaajan tagi valitaan Inspectorin yläreunan Tag-valikosta. Valmis tagi Player löytyy listasta.",
              "Time.timeScale = 0 pysäyttää fysiikan ja ajan. Arvo palautetaan 1:ksi, kun uusi kierros alkaa työviikolla 5."
            ],
            test: "Kävele maaliin: loppuviesti ilmestyy kerran, ja pelaaja pysähtyy."
          }
        },
        "4-3": {
          miksi: "Musiikkikurssin opiskelija liittää äänet tapahtumiin, joita hän ei ole itse ohjelmoinut. Kun kirjaatte tapahtumat heti niiden synnyttyä, luovutusta varten ei tarvitse muistella.",
          osat: [
            ["Luokaa tiedosto", "Luokaa tiedosto `docs/aanitapahtumat.md` ja kopioikaa siihen avun taulukkopohja."],
            ["Kirjatkaa omat tapahtumat", "Kumpikin kirjoittaa taulukkoon omat pelitapahtumansa työviikoilta 3 ja 4, esimerkiksi hyppy ja maaliin saapuminen."],
            ["Kirjatkaa paikka koodissa", "Kirjoittakaa jokaiselle tapahtumalle tiedosto ja metodi, jossa tapahtuma syntyy."],
            ["Ehdottakaa ääntä", "Kirjoittakaa ehdotus musiikkikurssille, esimerkiksi lyhyt hyppyääni tai voittofanfaari. Ääniä ette tee itse."],
            ["Kokeilkaa, löytyykö kohta", "Toinen lukee taulukosta tapahtuman, ja toinen avaa koodista oikean kohdan. Korjatkaa rivi, jos kohta ei löydy heti."]
          ],
          valmis: "Äänitapahtumataulukossa ovat ensimmäisen pelin tapahtumat tiedostoineen ja metodeineen, ja jokainen tapahtuma löytyi koodista taulukon avulla.",
          tallenna: "`docs/aanitapahtumat.md` repositoryyn.",
          sanat: ["äänitapahtuma"],
          apu: {
            title: "Äänitapahtumien taulukkopohja",
            code: "# Äänitapahtumat\n\n| Peli | Tapahtuma | Milloin syntyy | Missä koodissa (tiedosto ja metodi) | Ehdotus musiikkikurssille |\n| --- | --- | --- | --- | --- |\n| PELIN NIMI | Hyppy | Pelaaja painaa hyppynäppäintä ja on maassa | PlayerJump.cs, Jump() | lyhyt hyppyääni |\n| PELIN NIMI | Maali | Pelaaja koskettaa maalia | GoalTrigger.cs, OnTriggerEnter2D() | voittofanfaari |\n| PELIN NIMI | Taustamusiikki | Pelikenttä on auki | scene PELIKENTÄN NIMI | rauhallinen silmukka |",
            vinkit: ["Kirjatkaa myös taustamusiikin paikat, esimerkiksi alkuvalikko ja pelikenttä. Niissä paikka on scene, ei metodi."]
          }
        },
        "4-4": {
          miksi: "Toinen testaaja löytää tilanteita, joita toteuttaja ei tullut kokeilleeksi. Testitulokset ovat kummankin työnäytettä.",
          osat: [
            ["Luokaa testimatriisi", "Luokaa tiedosto `project-docs/testimatriisi.md` avun pohjasta."],
            ["Kirjoittakaa odotetut tulokset", "Kirjoittakaa ennen ajoa testitapaukset T01 ja T02: onnistunut kierros ja tilanne, jossa päättymisehto ei vielä täyty. Kirjatkaa kummankin odotettu tulos."],
            ["Vaihtakaa testaajaa", "Kumpikin testaa toisen osan. Testin tekijäksi kirjataan testaaja, ei toteuttaja."],
            ["Kirjatkaa tulokset", "Kirjatkaa havaittu tulos. Tehkää jokaisesta virheestä kortti tehtävätauluun."],
            ["Korjatkaa ja testatkaa uudelleen", "Toteuttaja korjaa oman osansa virheen. Ajakaa sama testitapaus uudelleen ja kirjatkaa tulos."]
          ],
          valmis: "Testitapaukset T01 ja T02 ovat testimatriisissa testaajineen ja tuloksineen. Jos virhe jäi korjaamatta, kortti on taulussa keskeneräisenä ja apua on pyydetty.",
          tallenna: "`project-docs/testimatriisi.md`, korjauscommit ja uusintatestin tulos repositoryyn.",
          sanat: ["T01"],
          esimerkki: "Testitapauksen T01 odotettu tulos: ”Kun pelaaja koskettaa lippua, teksti Maali! näkyy kerran ja pelaaja pysähtyy.”",
          eiRiita: "Odotettu tulos ”Toimii”. Odotettu tulos kirjoitetaan ennen ajoa niin, että toinen voi todeta sen.",
          apu: {
            title: "Testimatriisin pohja",
            code: "# Testimatriisi\n\n| Tunnus | Peli | Testin tekijä | Versio (commit) | Alkutilanne | Toiminta | Odotettu tulos | Havaittu tulos | Korjaus ja uusintatesti |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n| T01 | PELIN NIMI | NIMI | COMMIT | Kierros alkaa lähtöpaikasta | Pelaaja kävelee maaliin | Teksti Maali! näkyy kerran ja pelaaja pysähtyy | KIRJOITA AJON JÄLKEEN | |",
            vinkit: ["Versio-sarakkeeseen kirjataan sen commitin lyhyt tunniste, jota testasitte. Se näkyy GitHub Desktopin History-näkymässä."]
          }
        }
      }
    },

    5: {
      type: "feature",
      feature: "Pelin voi käynnistää alkuvalikosta, pelata loppuun, aloittaa uudelleen ja palata alkuvalikkoon, ja pelin tapahtumista näkyy selkeä palaute.",
      excerpt: "Pelaajan pitää päästä peliin ja takaisin valikkoon ilman, että kukaan neuvoo vieressä.",
      connection: "Työviikolla 4 peliin tuli kierros, jonka lopun näkee ruudulla. Nyt kierroksen ympärille rakennetaan alkuvalikko, uudelleenaloitus ja palaute, jotta joku muu kuin te voi pelata. Valikosta tehdään prefab, jota käytätte uudelleen kahdessa seuraavassa pelissä.",
      deliverable: "Alkuvalikko ohjausohjeineen, uudelleenaloitus, paluu alkuvalikkoon, visuaalinen palaute, grafiikkapaketti ja `docs/assetit-ja-lisenssit.md`.",
      why: "Ilman valikkoa ja uudelleenaloitusta asiakkaat eivät pysty kokeilemaan peliä työviikolla 6 ilman teitä.",
      done: "Kulkekaa alkuvalikosta ohjeen kautta kierroksen loppuun, painakaa Uudelleen, pelatkaa kierros loppuun ja palatkaa Alkuvalikkoon. Toistakaa kolme kertaa peräkkäin ilman virhettä. Jokaisesta olennaisesta tapahtumasta näkyy palaute ilman ääntä. Historiassa on kummankin commit, ja kumpikin on testannut toisen osan.",
      record: "Kirjoita työviikon 5 merkintään oma osasi valikoista ja palautteesta, miksi valitsit sen palautteen tai valikon rakenteen, ja kuka testasi osasi. Näyttömatriisin rivit: käyttöliittymä suunnitelmasta (p6), ulkoisten komponenttien tuonti (k4), Unityn työkalut (k3) ja osan liittäminen yhteiseen versioon (s13): oma prefabisi tai scene-osasi, jonka liitit parisi muutosten päälle yhteiseen versioon.",
      skills: ["käyttöliittymä (p6)", "ulkoiset komponentit ja assetit (k4)", "Unityn käyttöliittymä ja scenejen vaihto (k3)", "osan liittäminen yhteiseen versioon (s13)"],
      tehtavat: {
        "5-1": {
          miksi: "Valikko ja palaute ovat se osa peliä, jonka asiakkaat näkevät ensimmäisenä. Kun osat ja scenejen vuorot sovitaan ensin, kumpikin voi rakentaa omaansa yhtä aikaa.",
          osat: [
            ["Kirjoittakaa ohjausohje", "Kirjoittakaa pelin ohjausohje enintään neljällä rivillä: mitä näppäimiä käytetään ja mikä on tavoite."],
            ["Jakakaa kahteen osaan", "Osa 1 on alkuvalikko, ohjausohje ja paluu alkuvalikkoon. Osa 2 on uudelleenaloitus ja visuaalinen palaute. Valitkaa tekijät vastuutaulukon käyttöliittymä- ja logiikkarivien mukaan."],
            ["Valitkaa palautteen kohteet", "Listatkaa tapahtumat, joista pelaaja tarvitsee näkyvän palautteen, esimerkiksi kerätty esine, osuma ja jäljellä olevien esineiden määrä."],
            ["Sopikaa scenejen vuorot", "Alkuvalikko on oma scenensä. Osan 1 tekijä muokkaa tällä viikolla valikkosceneä ja osan 2 tekijä pelikenttää."],
            ["Tehkää kortit", "Tehkää kummastakin osasta kortti, jossa ovat vastuuhenkilö, scene ja odotettu tulos."]
          ],
          valmis: "Ohjausohje on kirjoitettu, kummallakin on kortti omasta osastaan, ja scenejen vuorot on merkitty kortteihin.",
          tallenna: "Ohjausohje ja palautteen kohteet suunnitelman ensimmäisen pelin kuvaukseen. Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-5/kortit.png`."
        },
        "5-2": {
          miksi: "Asiakkaat pelaavat peliä työviikolla 6 ilman teitä. Oma osasi tekee pelistä sellaisen, että sen voi aloittaa, ymmärtää ja pelata uudelleen.",
          osat: [
            ["Hae parisi muutokset", "Paina Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Rakenna oma osasi", "Osa 1: tee alkuvalikkoscene, jossa ovat pelin nimi, Aloita-painike ja ohjausohje. Osa 2: lisää loppuruutuun Uudelleen-painike ja pelikenttään sovittu palaute."],
            ["Kytke painikkeet", "Liitä painikkeiden On Click -kohtaan oman skriptisi metodi, esimerkiksi StartGame, Restart tai BackToMenu."],
            ["Lisää scenet build-luetteloon", "Osa 1: lisää alkuvalikko ja pelikenttä Build Profiles -ikkunan Scene List -luetteloon, alkuvalikko ensimmäiseksi. Osa 2: tarkista, että pelikenttä on luettelossa."],
            ["Tee prefab", "Osa 1: raahaa valikon Canvas Project-ikkunan Prefabs-kansioon. Osa 2: tee loppuruudusta prefab samalla tavalla."],
            ["Kokeile ja vie", "Kokeile osaasi Play-tilassa alkaen alkuvalikosta. Tee commit ja push ja siirrä kortti Testattavana-sarakkeeseen."],
            ["Lisää äänitapahtumat", "Lisää osasi uudet tapahtumat, esimerkiksi painikkeen painallus tai esineen kerääminen, tiedostoon `docs/aanitapahtumat.md`."]
          ],
          valmis: "Oma osasi toimii Play-tilassa alkuvalikosta alkaen, oma prefabisi on Prefabs-kansiossa, ja commit on historiassa omalla nimelläsi.",
          tallenna: "Oman commitisi linkki korttiin ja päiväkirjaan.",
          sanat: ["prefab", "UI"],
          apu: {
            title: "Koodipohja: valikon ja loppuruudun painikkeet",
            code: "using UnityEngine;\nusing UnityEngine.SceneManagement;\n\n// Painikkeiden On Click kutsuu näitä metodeja.\npublic class MenuActions : MonoBehaviour\n{\n    [SerializeField] private string gameScene = \"PELIKENTÄN NIMI\";\n    [SerializeField] private string menuScene = \"ALKUVALIKON NIMI\";\n\n    public void StartGame()\n    {\n        // TODO: lataa pelikenttä: SceneManager.LoadScene(gameScene);\n    }\n\n    public void Restart()\n    {\n        // TODO: palauta aika: Time.timeScale = 1f;\n        // TODO: lataa nykyinen scene uudelleen:\n        //       SceneManager.LoadScene(SceneManager.GetActiveScene().name);\n    }\n\n    public void BackToMenu()\n    {\n        // TODO: palauta aika ja lataa alkuvalikko\n    }\n}",
            vinkit: [
              "Painike luodaan GameObject-valikosta kohdasta UI ja Button - TextMeshPro. Unity lisää samalla Canvasin ja EventSystemin, jos niitä ei ole.",
              "Jos painike ei reagoi, tarkista, että scenessä on yksi EventSystem.",
              "Visuaalinen palaute voi olla esimerkiksi välähdys, kasvava teksti tai laskuri. Pelin pitää olla ymmärrettävä ilman ääntä."
            ],
            test: "Aloita alkuvalikosta, pelaa loppuun ja paina Uudelleen: peli alkaa alusta eikä jää pysähdyksiin."
          }
        },
        "5-3": {
          miksi: "Valmiit grafiikat jättävät enemmän aikaa ohjelmointiin. Käyttöehdot tarkistetaan ennen tuontia, koska pelit luovutetaan musiikkikurssille muokattavina projekteina.",
          osat: [
            ["Valitkaa paketti", "Vastuutaulukon grafiikkavastaava valitsee yhtenäisen grafiikkapaketin, esimerkiksi Kenneyn CC0-lisenssillä julkaistun paketin."],
            ["Tarkistakaa käyttöehdot", "Toinen lukee paketin käyttöehdot ja tarkistaa, saako grafiikoita käyttää ja jakaa muokattavassa Unity-projektissa."],
            ["Kirjatkaa luetteloon", "Luokaa `docs/assetit-ja-lisenssit.md` ja kirjatkaa paketin nimi, lähde, tekijä, lisenssi ja käyttökohde."],
            ["Tuokaa grafiikat", "Grafiikkavastaava tuo kuvat pelin Art-kansioon ja vaihtaa pelaajan, esteiden ja maalin muodot kuviksi."],
            ["Tarkistakaa yhtenäisyys", "Pelatkaa kierros ja tarkistakaa, että grafiikat ovat samaa tyyliä ja pelaaja erottuu taustasta."]
          ],
          valmis: "Pelissä on yhtenäiset grafiikat, ja jokaisella tuodulla paketilla on rivi assettiluettelossa lähteineen ja lisensseineen.",
          tallenna: "`docs/assetit-ja-lisenssit.md` ja grafiikkacommit repositoryyn.",
          sanat: ["asset"],
          apu: {
            title: "Assettiluettelon pohja",
            code: "# Assetit ja lisenssit\n\n| Asset tai paketti | Lähde (osoite) | Tekijä | Lisenssi | Missä pelissä ja mihin |\n| --- | --- | --- | --- | --- |\n| PAKETIN NIMI | OSOITE | TEKIJÄ | LISENSSI | PELI: pelaaja ja laatat |",
            vinkit: [
              "CC0 tarkoittaa, että tekijä on luopunut oikeuksistaan: kuvia saa käyttää ja muokata vapaasti.",
              "Jos käyttöehdot ovat epäselvät, älkää käyttäkö pakettia. Kysykää ohjaajalta."
            ],
            links: [["Kenney: ilmaiset peligrafiikat", "https://kenney.nl/assets"], ["OpenGameArt", "https://opengameart.org/"]]
          }
        },
        "5-4": {
          miksi: "Uudelleenaloitus rikkoutuu usein vasta toisella tai kolmannella kierroksella, esimerkiksi kun aika jää pysähdyksiin. Siksi testaatte useita kierroksia peräkkäin.",
          osat: [
            ["Hakekaa ja avatkaa", "Hakekaa molemmat viimeisimmät muutokset ja avatkaa peli alkuvalikosta."],
            ["Kirjoittakaa testitapaukset", "Kirjoittakaa ennen ajoa testimatriisiin testitapaukset alkuvalikolle, uudelleenaloitukselle, paluulle alkuvalikkoon ja palautteelle odotettuine tuloksineen."],
            ["Testatkaa toisen osa", "Kumpikin testaa toisen osan. Kirjatkaa testaaja ja havaittu tulos."],
            ["Pelatkaa kolme kierrosta", "Pelatkaa kolme kierrosta peräkkäin: Uudelleen kahdesti ja lopuksi Alkuvalikkoon. Kirjatkaa, jääkö peli pysähdyksiin tai näkyykö jotain kahdesti."],
            ["Korjatkaa ja testatkaa uudelleen", "Toteuttaja korjaa oman osansa virheet. Ajakaa samat testitapaukset uudelleen."]
          ],
          valmis: "Testimatriisissa on alkuvalikon, uudelleenaloituksen, paluun ja palautteen testitapaukset testaajineen, ja kolme peräkkäistä kierrosta menee läpi ilman virhettä.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    6: {
      type: "katselmointi",
      feature: "Asiakkaat ovat kokeilleet ensimmäistä peliä, ja palaute, korjaustarpeet ja havaittu soveltuvuus musiikkikurssille on kirjattu.",
      excerpt: "Haluamme kokeilla ensimmäistä peliä jo varhain, ennen kuin kaksi muuta tehdään samalla tavalla.",
      connection: "Ensimmäinen peli on nyt kokonainen: valikko, kierros, loppu ja uudelleenaloitus. Asiakkaat kokeilevat sitä nyt, koska heidän palautteensa ohjaa kahta seuraavaa peliä. Mitä aikaisemmin kuulette, sopiiko peli musiikkikurssille, sitä vähemmän joudutte muuttamaan myöhemmin.",
      deliverable: "Kokeiluversio versiomerkinnällä (tag v0.1), `project-docs/asiakaspalaute.md`, palautteen kortit, kummankin arvio-toteumavertailu ja Unity-havainnot.",
      why: "Ilman asiakkaiden palautetta teette kaksi seuraavaa peliä samoilla oletuksilla, ja mahdollinen väärinymmärrys kolminkertaistuu.",
      done: "Lukekaa palautekirjaus ääneen asiakkaalle tai ohjaajalle ja pyytäkää vahvistus, että kirjaus vastaa sanottua. Jokaisesta korjaustarpeesta on kortti tehtävätaulussa.",
      record: "Kirjoita työviikon 6 merkintään roolisi asiakaskokeilussa, asiakkaan tärkein palaute omin sanoin, suurin ero omien arvioidesi ja toteuman välillä ja yksi Unity-havaintosi. Näyttömatriisin rivit: asiakaslähtöinen viestintä (s2), version katselmointi (s3), tärkeysjärjestys (s4), tehtävien arviointi (s6) ja kirjaston mahdollisuudet ja rajoitteet (k2).",
      skills: ["asiakaslähtöinen viestintä (s2)", "version katselmointi (s3)", "tärkeysjärjestys (s4)", "arvio ja toteuma (s6)", "kirjaston rajoitteet (k2)"],
      tehtavat: {
        "6-1": {
          miksi: "Asiakkaat kokeilevat valmista peliversiota, eivät editoria. Lyhyt esittely kertoo heille, mitä kokeillaan ja mitä heiltä halutaan tietää.",
          osat: [
            ["Kootkaa build", "Kootkaa ensimmäisestä pelistä build sovitulle alustalle ja kokeilkaa se alusta loppuun."],
            ["Merkitkää kokeiluversio", "Merkitkää kokeiltava commit versiomerkinnällä eli tagilla v0.1: napsauttakaa commitia History-näkymässä hiiren kakkospainikkeella, valitkaa Create Tag ja painakaa sitten Push origin."],
            ["Tarkistakaa roolit", "Vastuutaulukon mukaan toinen esittelee ja toinen kirjaa palautteen. Työviikolla 12 roolit vaihtuvat."],
            ["Kirjoittakaa esittely", "Esittelijä kirjoittaa enintään viiden virkkeen esittelyn ilman teknistä sanastoa: mikä peli on, mitä kokeillaan ja mitä halutaan tietää."],
            ["Kirjoittakaa kysymykset", "Kirjoittakaa kolme kysymystä asiakkaille, esimerkiksi mihin pelin hetkiin musiikki ja äänet sopisivat."]
          ],
          valmis: "Build toimii, kokeiluversio on merkitty versiomerkinnällä (tag v0.1), ja esittely ja kolme kysymystä ovat tiedostossa `project-docs/asiakaspalaute.md`.",
          tallenna: "`project-docs/asiakaspalaute.md` ja kokeiluversion versiomerkintä (tag v0.1) repositoryyn.",
          sanat: ["tag"],
          esimerkki: "”Peli on lyhyt tasohyppely: pelaaja kerää viisi tähteä ja ehtii maaliin. Kierros kestää noin kaksi minuuttia. Haluamme tietää, onko kierros sopivan mittainen musiikille ja missä kohdissa ääni auttaisi pelaajaa.”",
          eiRiita: "”Toteutimme Rigidbody 2D:llä ja triggereillä pelisilmukan, jossa RoundManager hoitaa tilan.” Asiakkaat eivät tarvitse tätä tietoa.",
          apu: {
            title: "Jos asiakas ei pääse",
            vinkit: ["Jos asiakas ei pääse paikalle, pyytäkää ohjaajaa nimeämään korvaaja tai sopimaan uusi aika. Kirjatkaa muutos päätöslokiin."]
          }
        },
        "6-2": {
          miksi: "Palaute on hyödyllinen vain, jos se on kirjattu niin kuin asiakas sen sanoi. Oma tulkinta kirjataan erikseen, jotta myöhemmin tiedätte, mikä oli asiakkaan toive ja mikä teidän päätelmänne.",
          osat: [
            ["Esitelkää peli", "Esittelijä lukee valmistellun esittelyn ja antaa asiakkaan pelata ilman neuvoja."],
            ["Seuratkaa pelaamista", "Kirjaaja merkitsee, missä kohdissa asiakas epäröi, kysyy tai jää jumiin."],
            ["Kysykää kysymykset", "Esittelijä kysyy valmistellut kolme kysymystä."],
            ["Kirjatkaa sanatarkasti", "Kirjaaja kirjoittaa vastaukset asiakkaan sanoin lainausmerkkeihin. Kirjatkaa kokeilun päivä ja osallistujien roolit, ei nimiä."],
            ["Kirjatkaa oma tulkinta erikseen", "Kirjoittakaa heti kokeilun jälkeen erilliseen osioon, mitä palaute tarkoittaa peleille ja soveltuuko peli musiikkikurssille."]
          ],
          valmis: "Palautekirjauksessa ovat päivä, roolit, asiakkaan sanat lainauksina ja erillinen tulkintaosio.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` repositoryyn.",
          esimerkki: "Asiakkaan sanat: ”Maaliin tulo tapahtuu niin nopeasti, ettei voittomusiikille jää tilaa.” Oma tulkinta: loppuruutu näkyy vähintään kolme sekuntia ennen painikkeita.",
          eiRiita: "”Asiakkaat tykkäsivät.” Kirjauksesta ei näe, mitä he sanoivat eikä mitä pitää muuttaa."
        },
        "6-3": {
          miksi: "Palaute muuttuu työksi vasta korttina, jolla on tekijä ja valmis kun -ehto. Järjestys ratkaisee, mitkä muutokset tehdään ennen toista peliä.",
          osat: [
            ["Erotelkaa korjaustarpeet", "Käykää palautekirjaus läpi ja alleviivatkaa jokainen kohta, joka vaatii muutoksen."],
            ["Tehkää kortit", "Tehkää jokaisesta korjaustarpeesta kortti, jossa on viittaus palautteeseen ja valmis kun -ehto."],
            ["Arvioikaa vaikutus", "Merkitkää jokaiseen korttiin, koskeeko se vain ensimmäistä peliä vai myös seuraavia pelejä."],
            ["Sopikaa järjestys", "Järjestäkää kortit: ensin kaikkia pelejä koskevat muutokset ja estävät virheet. Muut korjaukset tehdään työviikolla 13."],
            ["Tarkistakaa ohjaajan kanssa", "Käykää järjestys läpi viikkotarkistuksessa ja kirjatkaa päätös päätöslokiin."]
          ],
          valmis: "Jokaisesta korjaustarpeesta on kortti viittauksineen, ja järjestys on kirjattu päätöslokiin.",
          tallenna: "Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-6/palautekortit.png` ja päätöslokin merkintä."
        },
        "6-4": {
          miksi: "Kun vertaat arvioita toteumaan, opit arvioimaan seuraavien pelien työmäärän paremmin. Ero ei ole virhe vaan tietoa.",
          osat: [
            ["Kokoa omat korttisi", "Kokoa ensimmäisen pelin kortit, joissa olit vastuuhenkilö, ja niiden tuntiarviot."],
            ["Laske toteuma", "Laske työaikataulukosta kunkin kortin toteutuneet tunnit."],
            ["Kirjaa erot", "Kirjoita omaan päiväkirjaasi taulukko, jossa ovat kortti, arvio, toteuma ja ero."],
            ["Selitä suurin ero", "Kirjoita yhdellä virkkeellä, miksi suurin ero syntyi."],
            ["Päätä muutos", "Kirjoita, miten arvioit toisen pelin kortit toisin, esimerkiksi niin, että varaat aikaa testaukselle."]
          ],
          valmis: "Omassa päiväkirjassasi on vertailutaulukko ja selitys suurimmalle erolle.",
          tallenna: "Vertailu omaan päiväkirjaasi.",
          esimerkki: "”Valikko: arvio 3 h, toteuma 6 h. Ero syntyi, koska scenen vaihto ei toiminut ennen kuin scene oli build-luettelossa. Toisessa pelissä varaan valikon liittämiseen tunnin.”",
          eiRiita: "”Arviot menivät vähän pieleen.” Siitä ei näe, mikä kortti eikä miksi."
        },
        "6-5": {
          miksi: "Komponenttikirjaston osaamiseen kuuluu tietää, mitä kirjasto tekee helposti ja mikä vaatii kiertotien. Kirjaat omat havaintosi omasta työstäsi, et yleistä tietoa Unitystä.",
          osat: [
            ["Käy läpi oma työsi", "Käy läpi omat commitisi, päiväkirjasi ja testimatriisin merkinnät työviikoilta 1–5."],
            ["Valitse kolme tilannetta", "Valitse kolme tilannetta, joissa Unity rajoitti tai yllätti, esimerkiksi trigger ei toiminut ilman Rigidbody 2D -komponenttia."],
            ["Kirjaa jokainen", "Kirjoita jokaisesta, mitä yritit, mitä Unity teki, miten ratkaisit ja minkä mahdollisuuden tai rajoitteen opit siitä."],
            ["Liitä todiste", "Liitä jokaiseen havaintoon commit-linkki tai kuvakaappaus."]
          ],
          valmis: "Omassa kansiossasi on kolme havaintoa, joissa jokaisessa on oma tilanne, ratkaisu ja commit-linkki tai kuvakaappaus.",
          tallenna: "Tiedosto `project-docs/omat/OMA-KANSIO/unity-havainnot.md` repositoryyn.",
          esimerkki: "”Lisäsin Restart-painikkeen, mutta peli jäi pysähdyksiin. Syy: Time.timeScale jäi nollaksi. Ratkaisu: asetan sen 1:ksi ennen scenen latausta (commit-linkki). Opin, että Time.timeScale säilyy, vaikka scene ladataan uudelleen.”",
          eiRiita: "”Unity on raskas ohjelma ja vaatii hyvän koneen.” Havainto ei liity omaan työhön."
        }
      }
    },

    /* ============ VAIHE 3: TOINEN JA KOLMAS PELI (7–12) ============ */
    7: {
      type: "feature",
      feature: "Toisen pelin päämekaniikka toimii yksinkertaisella pelialueella, ja pelialue luetaan erillisestä datasta.",
      excerpt: "Toisen tekijän pitää voida muuttaa peliä ilman, että koko koodi pitää lukea.",
      connection: "Ensimmäinen peli on kokonainen, ja asiakkaiden palaute on korteissa. Toinen peli tehdään samalla rytmillä, mutta vastuut vaihtuvat. Lisäksi pelialue luetaan nyt erillisestä datasta, jotta kenttää voi muuttaa ilman koodia. Työviikolla 8 samasta datasta palautetaan alkutilanne.",
      deliverable: "Toisen pelin projekti tai kansio, kenttädatan tallennustavan vertailu, kentän luku datasta, päämekaniikka, grafiikat ja testitapaukset.",
      why: "Jos kenttä on kirjoitettu koodiin, sen muuttaminen vaatii ohjelmointia, eikä alkutilanteen palautus onnistu luotettavasti.",
      done: "Esimerkiksi pulmapelissä: siirtäkää laatikko tavoiteruutuun ja yrittäkää siirtää laatikkoa seinää päin. Muuttakaa kenttädatassa yksi ruutu ja käynnistäkää peli: muutos näkyy. Jos teette muuta peliä, sopikaa vastaava kokeilu työvaiheessa 1. Historiassa on kummankin commit, ja kumpikin on testannut toisen osan.",
      record: "Kirjoita työviikon 7 merkintään oma osasi toisesta pelistä, mitä opit tallennustapojen vertailusta ja miten oma koodisi käsittelee virheellistä syötettä. Näyttömatriisin rivit: tietovaraston valinta (s8), yhteys tietovarastoon (s9), rajapinnat ja tiedon käsittely (s10), toiminnot suunnitelmasta (p7), rakenteinen ohjelmointi (p4), Unityn työkalut (k3) ja ulkoisten komponenttien tuonti (k4), jos olit grafiikkavastaava.",
      skills: ["tietovaraston valinta (s8)", "yhteys tietovarastoon (s9)", "tiedon käsittely Unityn rajapinnoilla (s10)", "päämekaniikan ohjelmointi (p4, p7)"],
      tehtavat: {
        "7-1": {
          miksi: "Toinen peli alkaa siitä, mitä ensimmäisestä opittiin. Asiakkaiden palaute ja vastuutaulukon vaihto ratkaisevat, mitä teette ja kuka tekee.",
          osat: [
            ["Lukekaa palaute", "Lukekaa työviikon 6 asiakaspalaute ja merkitkää kohdat, jotka koskevat myös toista peliä."],
            ["Tarkentakaa pienin toimiva versio", "Tarkentakaa suunnitelman toisen pelin pienin toimiva versio palautteen perusteella ja kirjatkaa muutos päätöslokiin."],
            ["Perustakaa pelin projekti", "Luokaa toiselle pelille Unity-projekti tai kansio työviikon 3 rakenteen mukaan. Muistakaa myös .gitignore."],
            ["Jakakaa kahteen osaan", "Osa 1 on pelialueen luku datasta ja osa 2 päämekaniikka, esimerkiksi laatikon siirto ja estynyt siirto. Valitkaa tekijät vastuutaulukon mukaan: vastuut vaihtuvat ensimmäisestä pelistä."],
            ["Sopikaa kokeilu", "Jos peli ei ole pulmapeli, kirjoittakaa viikon kokeilu omalle pelillenne: mitä pelaaja tekee ja miten datan muutos näkyy."],
            ["Tehkää kortit", "Tehkää osista kortit vastuuhenkilöineen, odotettuine tuloksineen ja tuntiarvioineen."]
          ],
          valmis: "Toisen pelin projekti on repositoryssa, pienin toimiva versio on tarkennettu, ja kummallakin on kortti omasta osastaan.",
          tallenna: "Projektin perustamiscommit, päätöslokin merkintä ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-7/kortit.png`."
        },
        "7-2": {
          miksi: "Kun kenttä on datassa eikä koodissa, sen voi muuttaa ilman ohjelmointia ja palauttaa alkutilaan. Valitsette tallennustavan oman kokeilun perusteella, ette arvaamalla.",
          osat: [
            ["Piirtäkää pieni kenttä", "Piirtäkää paperille viisi kertaa viisi ruudun kenttä: seinät, pelaaja, kaksi laatikkoa ja kaksi tavoiteruutua."],
            ["Tehkää tekstiversio", "Kirjoittakaa sama kenttä tekstitiedostoon tai JSON-tiedostoon, esimerkiksi yksi merkki ruutua kohden. Avun pohjassa on esimerkki."],
            ["Tehkää ScriptableObject-versio", "Tehkää sama kenttä ScriptableObjectina avun koodipohjalla ja täyttäkää se Inspectorissa."],
            ["Muuttakaa yksi ruutu", "Siirtäkää molemmissa versioissa yksi laatikko toiseen ruutuun. Kirjatkaa, kumpi oli nopeampi ja kummassa virhe syntyy helpommin."],
            ["Valitkaa ja perustelkaa", "Valitkaa tallennustapa ja kirjatkaa päätöslokiin kokeilun tulos, valinta ja perustelu. Kirjatkaa valinta myös suunnitelmaan."]
          ],
          valmis: "Päätöslokissa on sama kenttä kahdella tavalla, kokemus kummankin muuttamisesta ja perusteltu valinta.",
          tallenna: "Molemmat kokeiluversiot ja päätöslokin merkintä repositoryyn.",
          sanat: ["JSON", "ScriptableObject"],
          esimerkki: "”Teksti: laatikon siirto oli yhden merkin muutos, mutta väärän pituinen rivi sekoitti kentän. ScriptableObject: muutos Inspectorissa vei kauemmin, mutta virhettä ei voinut tehdä. Valitsimme tekstitiedoston, koska musiikkikurssi voi muokata kenttää ilman Unityn osaamista, ja lisäämme rivin pituuden tarkistuksen.”",
          eiRiita: "”ScriptableObject on Unityn suosittelema tapa.” Valinta ei perustu omaan kokeiluun.",
          apu: {
            title: "Pohjat: kenttä tekstinä ja ScriptableObjectina",
            code: "Kenttä tekstinä, tiedosto kentta.txt, yksi merkki ruutua kohden:\n#####\n#P.B#\n#.B.#\n#T.T#\n#####\n\nMerkit: # seinä, P pelaaja, B laatikko, T tavoite, . lattia\n\n// ScriptableObject, tiedosto LevelData.cs\nusing UnityEngine;\n\n[CreateAssetMenu(menuName = \"ProtoPaja/Kenttä\")]\npublic class LevelData : ScriptableObject\n{\n    public string[] rows;   // TODO: täytä Inspectorissa, yksi rivi kenttää kohden\n}",
            vinkit: [
              "ScriptableObject-tiedosto luodaan Project-ikkunassa hiiren kakkospainikkeella: Create, ProtoPaja ja Kenttä.",
              "Tekstitiedosto saadaan peliin TextAsset-kenttänä: raahaa tiedosto Inspectorissa skriptin kenttään."
            ]
          }
        },
        "7-3": {
          miksi: "Oma osasi on toisen pelin ydin: joko pelialue syntyy datasta tai pelaaja liikuttaa sitä. Vastuut vaihtuivat ensimmäisestä pelistä, joten teet nyt osa-alueen, jota et vielä tehnyt.",
          osat: [
            ["Hae parisi muutokset", "Paina Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Kirjoita oma skripti", "Osa 1: kirjoita skripti, joka lukee kentän valitusta datasta ja luo ruudut sceneen. Osa 2: kirjoita pelaajan siirto ja laatikon työntäminen. Käytä avun pohjaa."],
            ["Käsittele virheellinen syöte", "Osa 1: jos datassa on tuntematon merkki, tulosta viesti Console-ikkunaan. Peli ei saa kaatua. Osa 2: estä siirto seinän tai toisen laatikon läpi."],
            ["Kokeile Play-tilassa", "Kokeile osaasi ja vertaa tulosta kortin odotettuun tulokseen."],
            ["Nimeä ja kirjaa tapahtumat", "Nimeä pelitapahtumien metodit tapahtuman mukaan, esimerkiksi PushBox ja BlockedMove, ja lisää ne tiedostoon `docs/aanitapahtumat.md`."],
            ["Tee commit ja push", "Tee commit vain omista tiedostoistasi ja paina Push origin. Siirrä kortti Testattavana-sarakkeeseen."]
          ],
          valmis: "Oma osasi toimii Play-tilassa kortin odotetun tuloksen mukaan, virheellinen syöte ei kaada peliä, ja oma commitisi on historiassa.",
          tallenna: "Oman commitisi linkki korttiin ja omaan päiväkirjaasi.",
          sanat: ["API"],
          apu: {
            title: "Koodipohja: kenttä tekstidatasta",
            code: "using UnityEngine;\n\n// Osa 1, tiedosto LevelLoader.cs: luo kentän tekstidatasta.\npublic class LevelLoader : MonoBehaviour\n{\n    [SerializeField] private TextAsset levelFile;   // raahaa kentta.txt Inspectorissa\n    [SerializeField] private GameObject wallPrefab;\n    [SerializeField] private GameObject boxPrefab;\n\n    void Start()\n    {\n        string[] rows = levelFile.text.Split('\\n');\n        for (int y = 0; y < rows.Length; y++)\n        {\n            string row = rows[y].TrimEnd('\\r');\n            for (int x = 0; x < row.Length; x++)\n            {\n                Vector3 position = new Vector3(x, -y, 0);\n                // TODO: luo ruutu merkin mukaan, esimerkiksi:\n                //       if (row[x] == '#') Instantiate(wallPrefab, position, Quaternion.identity);\n                // TODO: tuntematon merkki: Debug.LogWarning(...) ja jatka seuraavaan ruutuun\n            }\n        }\n    }\n}",
            vinkit: [
              "Instantiate, Debug.LogWarning ja Quaternion kuuluvat Unityn API:in eli valmiisiin toimintoihin, joita oma koodisi kutsuu.",
              "Osa 2: siirrä pelaajaa ruutu kerrallaan. Tarkista ennen siirtoa, mitä kohderuudussa on. Physics2D.OverlapPoint kertoo, onko pisteessä collider.",
              "Windowsissa tekstitiedoston rivinvaihdossa on näkymätön merkki. Pohjan TrimEnd poistaa sen."
            ],
            test: "Muuta kentta.txt-tiedostossa yksi seinämerkki pisteeksi ja käynnistä peli: seinään tulee aukko."
          }
        },
        "7-4": {
          miksi: "Grafiikkavastaava vaihtuu toisessa pelissä, jotta kumpikin tuo valmiita assetteja ja tarkistaa niiden käyttöehdot. Yhtenäinen grafiikka auttaa pelaajaa erottamaan seinät, laatikot ja tavoitteet.",
          osat: [
            ["Valitkaa grafiikat", "Vastuutaulukon grafiikkavastaava valitsee pelille yhtenäiset grafiikat. Saman paketin käyttö kuin ensimmäisessä pelissä on sallittua."],
            ["Tarkistakaa käyttöehdot", "Toinen tarkistaa, että käyttöehdot sallivat jakamisen muokattavassa projektissa."],
            ["Kirjatkaa luetteloon", "Lisätkää jokaisesta uudesta paketista tai kuvasta rivi tiedostoon `docs/assetit-ja-lisenssit.md`."],
            ["Tuokaa ja vaihtakaa", "Grafiikkavastaava tuo kuvat Art-kansioon ja vaihtaa ruutujen prefabeihin oikeat kuvat."],
            ["Tarkistakaa erottuvuus", "Pelatkaa ja tarkistakaa, että pelaaja, laatikot, seinät ja tavoiteruudut erottuvat toisistaan myös muodon perusteella, ei pelkän värin."]
          ],
          valmis: "Toisen pelin grafiikat ovat yhtenäiset, ruututyypit erottuvat muodon perusteella, ja assettiluettelossa on rivi jokaisesta uudesta assetista.",
          tallenna: "Grafiikkacommit ja päivitetty `docs/assetit-ja-lisenssit.md` repositoryyn."
        },
        "7-5": {
          miksi: "Testaaja kokeilee tilanteita, joita toteuttaja ei tullut ajatelleeksi, esimerkiksi laatikon työntämistä toista laatikkoa päin.",
          osat: [
            ["Kirjoittakaa testitapaukset", "Kirjoittakaa ennen ajoa testitapaukset seuraavilla vapailla tunnuksilla, esimerkiksi T10 siirto tyhjään ruutuun, T11 siirto seinää päin ja T12 virheellinen kenttädata. Kirjatkaa odotetut tulokset."],
            ["Testatkaa toisen osa", "Kumpikin testaa toisen osan ja kirjaa itsensä testin tekijäksi."],
            ["Muuttakaa dataa", "Muuttakaa kenttädatassa yksi ruutu ja kokeilkaa, näkyykö muutos käynnistyksessä."],
            ["Kirjatkaa tulokset", "Kirjatkaa havaitut tulokset ja tehkää jokaisesta virheestä kortti."],
            ["Korjatkaa ja testatkaa uudelleen", "Toteuttaja korjaa oman osansa virheet. Ajakaa samat testitapaukset uudelleen."]
          ],
          valmis: "Testimatriisissa ovat toisen pelin testitapaukset testaajineen ja tuloksineen, ja datan muutos näkyi pelissä.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    8: {
      type: "feature",
      feature: "Toisen pelin kierros päättyy ratkaisuun, ja alkuvalikko, ohje, uudelleenaloitus ja alkutilanteeseen palautus toimivat.",
      excerpt: "Pulman voi ratkaista ja palauttaa alkutilanteeseen.",
      connection: "Työviikolla 7 pelialue syntyi datasta, ja päämekaniikka toimi. Nyt pelistä tulee kokonainen kierros: ratkaisun tunnistus, loppuruutu ja paluu alkutilanteeseen samasta datasta. Ensimmäisen pelin valikkoprefab tuodaan mukaan, joten valikkoa ei rakenneta uudelleen.",
      deliverable: "Ratkaisun tunnistus, loppuruutu, alkutilanteeseen palautus datasta, valikkoprefab toisessa pelissä ja testitapaukset.",
      why: "Ilman palautusta pulmapeli jää jumiin ensimmäiseen virhesiirtoon, ja ilman uudelleenkäyttöä peleissä on kolme hieman erilaista valikkoa.",
      done: "Esimerkiksi pulmapelissä: ratkaiskaa pulma, palauttakaa alkutilanne kesken kierroksen, aloittakaa uudelleen ja palatkaa alkuvalikkoon. Jos teette muuta peliä, kokeilkaa vastaavasti kierroksen loppu, uudelleenaloitus ja paluu. Historiassa on kummankin commit, ja kumpikin on testannut toisen osan.",
      record: "Kirjoita työviikon 8 merkintään oma osasi toisen pelin kierroksesta, miten varmistit, että palautus käyttää dataa, ja mitä muutit valikossa. Näyttömatriisin rivit: yhteys tietovarastoon (s9), ylläpidettävä koodi (p5), käyttöliittymä (p6), suunnittelu, toteutus ja testaus komponenttikirjastolla (k5) ja toimintojen testaus (p3).",
      skills: ["yhteys tietovarastoon (s9)", "ylläpidettävä koodi ja uudelleenkäyttö (p5)", "käyttöliittymä (p6)", "testaus (p3, k5)"],
      tehtavat: {
        "8-1": {
          miksi: "Kierroksen loppu ja palautus ovat pulmapelin tärkeimmät toiminnot pelaajalle. Kun työ jaetaan nyt, datana tallennettua kenttää pääsee käyttämään myös se, joka ei lukenut sitä viime viikolla.",
          osat: [
            ["Kirjoittakaa ratkaisun ehto", "Kirjoittakaa, milloin pulma on ratkaistu, esimerkiksi jokaisessa tavoiteruudussa on laatikko, ja mitä pelaaja silloin näkee."],
            ["Jakakaa kahteen osaan", "Osa 1 on ratkaisun tunnistus ja loppuruutu. Osa 2 on alkutilanteeseen palautus datasta. Osan 2 tekee se, joka ei lukenut kenttää datasta työviikolla 7."],
            ["Valitkaa palautuksen näppäin", "Sopikaa, millä näppäimellä pelaaja palauttaa alkutilanteen, ja lisätkää se ohjausohjeeseen."],
            ["Sopikaa scenejen vuorot", "Sopikaa, kumpi muokkaa pelikenttää ja kumpi liittää valikon, ja merkitkää vuorot kortteihin."],
            ["Tehkää kortit", "Tehkää kummastakin osasta kortti vastuuhenkilöineen ja odotettuine tuloksineen."]
          ],
          valmis: "Ratkaisun ehto ja palautuksen näppäin on kirjattu, ja kummallakin on kortti omasta osastaan.",
          tallenna: "Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-8/kortit.png`."
        },
        "8-2": {
          miksi: "Ratkaisun tunnistus tekee pulmasta pelin, ja palautus antaa pelaajalle uuden yrityksen. Teet oman osasi omaan skriptiinsä ja kokeilet sen ennen testausta.",
          osat: [
            ["Hae parisi muutokset", "Paina Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Kirjoita oma skripti", "Osa 1: tarkista jokaisen siirron jälkeen, onko pulma ratkaistu, ja näytä loppuruutu. Osa 2: palauta pelaajan ja laatikoiden paikat, kun sovittua näppäintä painetaan."],
            ["Käytä samaa dataa", "Osa 2: lue alkutilanne samasta kenttädatasta kuin työviikolla 7. Älä kopioi paikkoja koodiin, koska muuten kentän muutos ei näy palautuksessa."],
            ["Estä tuplaloppu", "Osa 1: varmista, ettei loppuruutu aukea kahdesti eikä laatikoita voi siirtää ratkaisun jälkeen."],
            ["Kirjaa tapahtumat", "Lisää uudet pelitapahtumat, esimerkiksi laatikko tavoiteruudussa, ratkaisu ja palautus, tiedostoon `docs/aanitapahtumat.md`."],
            ["Kokeile ja vie", "Kokeile osaasi Play-tilassa, tee commit ja push ja siirrä kortti Testattavana-sarakkeeseen."]
          ],
          valmis: "Oma osasi toimii Play-tilassa odotetun tuloksen mukaan, palautus käyttää kenttädataa, ja oma commitisi on historiassa.",
          tallenna: "Oman commitisi linkki korttiin ja omaan päiväkirjaasi.",
          apu: {
            title: "Koodipohjat: ratkaisu ja palautus",
            code: "// Osa 1, esimerkiksi RoundManagerin metodi. Kutsu jokaisen siirron jälkeen.\npublic void CheckSolved()\n{\n    // TODO: käy läpi kaikki tavoiteruudut\n    // TODO: jos jokaisessa on laatikko, kutsu EndRound(true)\n}\n\n// Osa 2, esimerkiksi LevelLoaderin metodi. Kutsu palautusnäppäimestä.\npublic void ResetLevel()\n{\n    // TODO: poista nykyiset laatikot ja pelaaja (Destroy)\n    // TODO: luo ne uudelleen samasta kenttädatasta kuin Start-metodissa\n    // Vihje: siirrä Startin luontikoodi omaan metodiinsa, jota molemmat kutsuvat.\n}",
            vinkit: [
              "Kun sama koodi tarvitaan kahdessa paikassa, siirrä se omaan metodiinsa. Koodia, jossa ei ole toistoa, on helpompi ylläpitää.",
              "Toinen tapa on ladata koko scene uudelleen. Silloin varmista, että alkutila tulee datasta eikä scenestä."
            ],
            test: "Siirrä kahta laatikkoa ja paina palautusnäppäintä: kaikki palaavat datan mukaisiin paikkoihin."
          }
        },
        "8-3": {
          miksi: "Kun kaikki pelit käyttävät samaa valikkoa, pelaaja oppii sen kerran ja te korjaatte sen yhdessä paikassa. Uudelleenkäyttö tekee koodista ylläpidettävää.",
          osat: [
            ["Tuokaa prefabit", "Tuokaa ensimmäisen pelin valikko- ja loppuruutuprefabit toiseen peliin. Erillisissä projekteissa käyttäkää Assets-valikon Export Package- ja Import Package -toimintoja."],
            ["Vaihtakaa tekstit", "Vaihtakaa prefabin asetuksista pelin nimi ja ohjausohje toisen pelin mukaisiksi. Skriptiä ei tarvitse muuttaa."],
            ["Kytkekää painikkeet", "Tarkistakaa, että Aloita, Uudelleen ja Alkuvalikkoon kutsuvat oikeita metodeja ja että scenet ovat Scene List -luettelossa."],
            ["Kirjatkaa yhteinen osa", "Kirjoittakaa `README.md`-tiedostoon, mistä yhteinen valikko löytyy ja miten se tuodaan uuteen peliin."],
            ["Kokeilkaa kierros", "Kulkekaa alkuvalikosta pelin loppuun ja takaisin alkuvalikkoon."]
          ],
          valmis: "Toinen peli käynnistyy alkuvalikosta, jossa ovat toisen pelin nimi ja ohje, painikkeet toimivat, ja README kertoo, miten valikko tuodaan uuteen peliin.",
          tallenna: "Valikkocommit ja päivitetty `README.md` repositoryyn."
        },
        "8-4": {
          miksi: "Palautus ja uudelleenaloitus rikkoutuvat helposti rajatilanteissa, esimerkiksi heti ratkaisun jälkeen. Kun pari testaa, ne löytyvät ennen asiakkaita.",
          osat: [
            ["Kirjoittakaa testitapaukset", "Kirjoittakaa ennen ajoa testitapaukset ratkaisulle, palautukselle kesken kierroksen, uudelleenaloitukselle ja paluulle alkuvalikkoon."],
            ["Testatkaa toisen osa", "Kumpikin testaa toisen osan ja kirjaa itsensä testin tekijäksi."],
            ["Testatkaa rajatapaus", "Palauttakaa alkutilanne heti ratkaisun jälkeen ja kesken siirron. Kirjatkaa, mitä tapahtuu."],
            ["Pelatkaa kolme kierrosta", "Pelatkaa kolme kierrosta peräkkäin ja palatkaa välillä alkuvalikkoon."],
            ["Korjatkaa ja testatkaa uudelleen", "Toteuttaja korjaa oman osansa virheet. Ajakaa samat testitapaukset uudelleen."]
          ],
          valmis: "Testimatriisissa ovat toisen pelin kierroksen testitapaukset testaajineen, ja kolme peräkkäistä kierrosta menee läpi.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    9: {
      type: "laatu",
      feature: "Toinen peli on vertaisarvioitu ja sen estävät virheet korjattu, asiakkaiden palaute toisesta pelistä on varmistettu, ja kolmannen pelin rajaus on vahvistettu.",
      connection: "Toinen peli on pelattavissa alusta loppuun. Ennen kolmatta peliä kumpikin arvioi toisen toteutuksen ja korjaa oman koodinsa virheen, koska samat virheet toistuisivat muuten kolmannessa pelissä. Kolmannen pelin rajaus vahvistetaan nyt, jotta työviikolla 10 voi aloittaa suoraan.",
      deliverable: "Kummankin vertaisarvio, kummankin virheenkorjausketju, asiakkaiden kommentti toisesta pelistä ja kolmannen pelin vahvistettu rajaus.",
      why: "Ilman vertaisarviota kumpikin tuntee vain oman koodinsa, eikä ratkaisujen toimivuutta ole arvioitu yhdessä. Kolmatta peliä ei kannata aloittaa ennen kuin toisen pelin estävät virheet on korjattu.",
      done: "Ajakaa vertaisarvion testitapaukset uudelleen korjausten jälkeen. Kaikki estäviksi merkityt virheet on korjattu, ja kummallakin on yksi valmis virheenkorjausketju.",
      record: "Kirjoita työviikon 9 merkintään vertaisarviosi tärkein havainto, oman virheenkorjausketjusi syy ja korjaus sekä yksi asia, jonka teet kolmannessa pelissä toisin. Näyttömatriisin rivit: virheiden etsiminen ja korjaaminen (p2), ratkaisujen toimivuuden arviointi yhdessä (p10), testaus (p3), version katselmointi (s3) ja tärkeysjärjestys (s4).",
      skills: ["virheiden etsiminen ja korjaaminen (p2)", "ratkaisujen arviointi yhdessä (p10)", "tärkeysjärjestys ja rajaus (s4)"],
      tehtavat: {
        "9-1": {
          miksi: "Vertaisarviossa arvioit parisi toteutusta sovittuja vaatimuksia vasten. Arvio koskee peliä ja koodia, ei ihmistä, ja se on oma työnäytteesi ratkaisujen arvioinnista.",
          osat: [
            ["Valitse arvioitavat osat", "Katso vastuutaulukosta, mitkä toisen pelin osat parisi teki."],
            ["Pelaa ja kirjaa", "Pelaa kolme kierrosta ja kirjaa jokainen poikkeama prototyypin kahdeksasta vaatimuksesta."],
            ["Lue koodi", "Lue parisi skriptit. Kirjaa yksi asia, joka on helppo ymmärtää, ja yksi, jonka nimeäminen tai rakenne on epäselvä."],
            ["Luokittele havainnot", "Merkitse jokainen havainto: estävä virhe, muu virhe tai parannusehdotus."],
            ["Käy arvio läpi", "Käy arvio läpi parisi kanssa. Hän kertoo, onko havainto ymmärretty oikein."]
          ],
          valmis: "Vertaisarviossa on vähintään kolme luokiteltua havaintoa sekä yksi myönteinen ja yksi kehitettävä koodihuomio, ja arvio on käyty läpi parin kanssa.",
          tallenna: "Tiedosto `project-docs/omat/OMA-KANSIO/vertaisarvio-peli2.md` ja estävistä virheistä kortit tehtävätauluun.",
          sanat: ["vertaisarvio"],
          esimerkki: "”Estävä virhe: kun laatikko työnnetään kulmaan ja painetaan palautusnäppäintä, pelaaja ilmestyy laatikon päälle (toistui kolmella yrityksellä kolmesta). Koodi: metodin nimi Check() ei kerro, mitä tarkistetaan; ehdotan nimeä CheckSolved().”",
          eiRiita: "”Hyvä peli, pari bugia.” Havaintoa ei voi toistaa eikä korjata."
        },
        "9-2": {
          miksi: "Virheenkorjausketju näyttää, että osaat etsiä virheen syyn etkä vain kokeile muutoksia sattumalta. Se on oman ohjelmointiosaamisesi tärkeä työnäyte.",
          osat: [
            ["Valitse virhe", "Valitse vertaisarvion tai testimatriisin virhe, joka on omassa koodissasi."],
            ["Kirjoita toistamisohje", "Kirjoita askel askeleelta, miten virhe saadaan esiin, ja kokeile ohjetta kerran."],
            ["Etsi syy", "Etsi syy esimerkiksi Console-ikkunan viestien tai Debug.Log-tulostusten avulla. Kirjaa syy yhdellä virkkeellä."],
            ["Korjaa", "Korjaa virhe ja tee commit, jonka viesti kertoo korjauksen."],
            ["Testaa uudelleen", "Aja toistamisohje uudelleen: virhe ei enää tule esiin."],
            ["Aja regressiotesti", "Pelaa pelin peruskierros alusta loppuun ja tarkista, ettei korjaus rikkonut muuta."]
          ],
          valmis: "Testimatriisissa on ketju: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti.",
          tallenna: "Ketju testimatriisiin ja korjauscommitin linkki omaan päiväkirjaasi.",
          sanat: ["virheenkorjausketju", "regressiotesti"],
          apu: {
            title: "Ketjun pohja",
            code: "Virheenkorjausketju\n- Havainto: MITÄ TAPAHTUI\n- Toistamisohje: 1. VAIHE 2. VAIHE 3. VAIHE\n- Syy: MIKÄ KOODISSA AIHEUTTI VIRHEEN\n- Korjauscommit: LINKKI\n- Uusintatesti: TULOS\n- Regressiotesti: PERUSKIERROS ALUSTA LOPPUUN, TULOS",
            vinkit: [
              "Jos omasta koodistasi ei löydy aitoa virhettä, pyydä ohjaajalta vikatehtävä. Keksittyä virhettä ei kirjata.",
              "Debug.Log tulostaa viestin Console-ikkunaan. Tulosta muuttujan arvo juuri ennen kohtaa, jossa virhe syntyy."
            ]
          }
        },
        "9-3": {
          miksi: "Asiakkaat eivät kokeile jokaista peliä tapaamisessa, mutta heidän pitää voida kommentoida toista peliä ennen kuin kolmas tehdään samalla tavalla.",
          osat: [
            ["Valmistelkaa kokeiltava", "Kootkaa toisesta pelistä build tai lyhyt video, jossa kierros pelataan alusta loppuun."],
            ["Lähettäkää asiakkaille", "Lähettäkää build tai video asiakkaille sovitulla tavalla ja kysykää kaksi kysymystä: sopiiko peli kurssille ja mihin kohtiin ääni sopisi."],
            ["Kirjatkaa vastaus", "Kirjatkaa vastaus asiakkaan sanoin tiedostoon `project-docs/asiakaspalaute.md` päivämäärän kanssa."],
            ["Kertokaa, jos vastausta ei tule", "Jos vastausta ei tule sovittuun päivään mennessä, kertokaa ohjaajalle. Hän päättää, jatketaanko ilman vastausta."]
          ],
          valmis: "Asiakaspalautteessa on asiakkaan kommentti toisesta pelistä hänen sanoillaan tai ohjaajan päätös jatkaa ilman sitä.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` repositoryyn."
        },
        "9-4": {
          miksi: "Kolmas peli tehdään neljässä viikossa testeineen. Rajaus vahvistetaan ennen aloitusta, jotta peli ei kasva yli aikataulun.",
          osat: [
            ["Lukekaa suunnitelma", "Lukekaa suunnitelman kolmannen pelin kuvaus ja tähänastinen asiakaspalaute."],
            ["Tarkentakaa pienin toimiva versio", "Kirjoittakaa kolmannen pelin pienin toimiva versio ja päättymisehto niin, että ne voi kokeilla."],
            ["Kirjoittakaa pois jätettävät", "Kirjoittakaa kolme asiaa, joita kolmanteen peliin ei tehdä, esimerkiksi toinen vihollistyyppi."],
            ["Arvioikaa työmäärä", "Tehkää kolmannen pelin kortit ja tuntiarviot. Käyttäkää työviikon 6 arvio-toteumavertailun oppia."],
            ["Pyytäkää vahvistus", "Esittäkää rajaus ohjaajalle ja asiakkaille. Kirjatkaa vahvistus tai avoin asia päätöslokiin."]
          ],
          valmis: "Kolmannen pelin pienin toimiva versio, päättymisehto ja pois jätettävät asiat on kirjattu, kortit on arvioitu, ja rajaus on vahvistettu tai merkitty avoimeksi.",
          tallenna: "Päivitetty `project-docs/suunnitelma.md` ja päätöslokin merkintä repositoryyn."
        }
      }
    },

    10: {
      type: "feature",
      feature: "Kolmannen pelin pelaaja liikkuu pelialueella ja käyttää päätoimintoaan, ja vastus reagoi siihen.",
      connection: "Kolmannen pelin rajaus on vahvistettu, ja kahdesta pelistä on opittu, miten päämekaniikka jaetaan kahteen osaan. Vastuutaulukon viimeinen sarake täyttää aukot: kumpikin tekee osa-alueen, jota ei vielä tehnyt. Työviikolla 11 mekaniikasta tulee kokonainen kierros.",
      deliverable: "Kolmannen pelin projekti tai kansio, pelaajan liike ja päätoiminto, vastus ja osuma, asetukset datasta, grafiikat ja testitapaukset.",
      why: "Kolmas peli on viimeinen tilaisuus tehdä osa-alue, joka vastuutaulukossa vielä puuttuu. Ilman sitä jommallekummalle jää aukko näyttöön.",
      done: "Esimerkiksi toimintapelissä: liikkukaa areenalla, hyökätkää viholliseen ja katsokaa, että osuma näkyy, ja antakaa vihollisen osua pelaajaan. Muuttakaa datassa yhtä asetusta, esimerkiksi vihollisen nopeutta, ja katsokaa, että muutos näkyy. Jos teette muuta peliä, sopikaa vastaava kokeilu työvaiheessa 1. Historiassa on kummankin commit, ja kumpikin on testannut toisen osan.",
      record: "Kirjoita työviikon 10 merkintään oma osasi kolmannesta pelistä, mitä Unityn rajapintaa käytit ja miksi, ja miten asetusten muutos datassa näkyi. Näyttömatriisin rivit: toiminnot suunnitelmasta (p7), rakenteinen ohjelmointi (p4), rajapinnat ja tiedon käsittely (s10), yhteys tietovarastoon (s9), Unityn työkalut (k3) ja ulkoisten komponenttien tuonti (k4), jos olit grafiikkavastaava.",
      skills: ["päämekaniikan ohjelmointi (p4, p7)", "rajapinnat ja tiedon käsittely (s10)", "asetukset datasta (s9)", "Unityn työkalut (k3)"],
      tehtavat: {
        "10-1": {
          miksi: "Kolmannessa pelissä täytetään vastuutaulukon aukot. Kun osat jaetaan niiden mukaan, kumpikin saa työnäytteen jokaisesta osa-alueesta.",
          osat: [
            ["Perustakaa pelin projekti", "Luokaa kolmannelle pelille Unity-projekti tai kansio sovitun rakenteen mukaan ja tuokaa valikkoprefab."],
            ["Täyttäkää vastuutaulukon aukot", "Täyttäkää vastuutaulukon kolmannen pelin sarake niin, että jokainen osa-alue on kummallakin vähintään kerran."],
            ["Jakakaa kahteen osaan", "Esimerkiksi toimintapelissä osa 1 on pelaajan liike ja hyökkäys ja osa 2 vihollinen ja osuma. Osan 2 asetukset, esimerkiksi nopeus ja ilmestymisväli, luetaan datasta."],
            ["Valitkaa datan tekijä", "Asetusten luvun datasta tekee se, joka ei lukenut kenttää datasta toisessa pelissä."],
            ["Tehkää kortit", "Tehkää osista kortit vastuuhenkilöineen, odotettuine tuloksineen ja tuntiarvioineen."]
          ],
          valmis: "Kolmannen pelin projekti on repositoryssa, vastuutaulukossa ei ole aukkoja, ja kummallakin on kortti omasta osastaan.",
          tallenna: "Projektin perustamiscommit, päivitetty `project-docs/vastuutaulukko.md` ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-10/kortit.png`."
        },
        "10-2": {
          miksi: "Oma osasi tekee kolmannesta pelistä toimintapelin: pelaaja toimii ja vastus reagoi. Datasta luetut asetukset tekevät pelistä säädettävän ilman koodia.",
          osat: [
            ["Hae parisi muutokset", "Paina Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Kirjoita oma skripti", "Osa 1: kirjoita pelaajan liike ja hyökkäys. Osa 2: kirjoita vihollinen, joka liikkuu pelaajaa kohti ja reagoi osumaan. Käytä avun pohjaa."],
            ["Lue asetukset datasta", "Datan tekijä lukee asetukset ScriptableObjectista tai tiedostosta työviikolla 7 valitulla tavalla. Toinen käyttää samoja asetuksia omassa osassaan, jos niitä tarvitaan."],
            ["Näytä palaute", "Lisää omaan osaasi näkyvä palaute, esimerkiksi välähdys osumassa."],
            ["Kirjaa tapahtumat", "Nimeä ja kirjaa pelitapahtumat, esimerkiksi Attack, Hit ja PlayerDamaged, tiedostoon `docs/aanitapahtumat.md`."],
            ["Kokeile ja vie", "Kokeile osaasi Play-tilassa, tee commit ja push ja siirrä kortti Testattavana-sarakkeeseen."]
          ],
          valmis: "Oma osasi toimii Play-tilassa odotetun tuloksen mukaan, asetuksen muutos datassa näkyy pelissä, ja oma commitisi on historiassa.",
          tallenna: "Oman commitisi linkki korttiin ja omaan päiväkirjaasi.",
          apu: {
            title: "Koodipohja: vihollinen ja asetukset datana",
            code: "using UnityEngine;\n\n// Asetukset datana, tiedosto EnemySettings.cs\n[CreateAssetMenu(menuName = \"ProtoPaja/Vihollisen asetukset\")]\npublic class EnemySettings : ScriptableObject\n{\n    public float speed = 2f;\n    public float spawnInterval = 3f;\n    public int hitPoints = 1;\n}\n\n// Osa 2, oma tiedosto Enemy.cs\npublic class Enemy : MonoBehaviour\n{\n    [SerializeField] private EnemySettings settings;\n    private Transform player;\n    private int hitPoints;\n\n    void Start()\n    {\n        player = GameObject.FindWithTag(\"Player\").transform;\n        hitPoints = settings.hitPoints;\n    }\n\n    void Update()\n    {\n        // TODO: liiku kohti pelaajaa:\n        //       transform.position = Vector2.MoveTowards(transform.position, player.position, settings.speed * Time.deltaTime);\n    }\n\n    public void TakeHit()\n    {\n        // TODO: vähennä hitPoints-arvoa, näytä palaute ja poista vihollinen (Destroy), kun arvo on 0\n    }\n}",
            vinkit: [
              "Jos valitsitte työviikolla 7 tekstitiedoston, lue asetukset JsonUtility.FromJson-metodilla. Se on Unityn API:n valmis toiminto.",
              "Hyökkäys voi olla esimerkiksi lyhytkestoinen trigger-collider pelaajan edessä. Kun se koskettaa vihollista, kutsu vihollisen TakeHit-metodia."
            ],
            test: "Muuta EnemySettings-tiedoston nopeutta Inspectorissa ja paina Play: vihollinen liikkuu uudella nopeudella."
          }
        },
        "10-3": {
          miksi: "Grafiikkavastaava tuo kolmannen pelin assetit, ja toinen tarkistaa käyttöehdot. Näin luovutettavan projektin jokaisen kuvan käyttö on luvallista.",
          osat: [
            ["Valitkaa grafiikat", "Vastuutaulukon grafiikkavastaava valitsee kolmannelle pelille yhtenäiset grafiikat."],
            ["Tarkistakaa käyttöehdot", "Toinen tarkistaa uusien assettien käyttöehdot."],
            ["Kirjatkaa luetteloon", "Lisätkää uudet assetit tiedostoon `docs/assetit-ja-lisenssit.md`."],
            ["Tuokaa ja vaihtakaa", "Grafiikkavastaava tuo kuvat ja vaihtaa pelaajan, vihollisen ja pelialueen muodot kuviksi."]
          ],
          valmis: "Kolmannen pelin grafiikat ovat yhtenäiset, ja assettiluettelossa on rivi jokaisesta uudesta assetista.",
          tallenna: "Grafiikkacommit ja päivitetty `docs/assetit-ja-lisenssit.md` repositoryyn."
        },
        "10-4": {
          miksi: "Toimintapelissä moni asia tapahtuu yhtä aikaa. Testaaja kokeilee tilanteita, joita toteuttaja ei tullut ajatelleeksi.",
          osat: [
            ["Kirjoittakaa testitapaukset", "Kirjoittakaa ennen ajoa testitapaukset liikkeelle, hyökkäykselle, osumalle ja asetuksen muutokselle odotettuine tuloksineen."],
            ["Testatkaa toisen osa", "Kumpikin testaa toisen osan ja kirjaa itsensä testin tekijäksi."],
            ["Testatkaa rajatapaus", "Kokeilkaa esimerkiksi monta vihollista yhtä aikaa tai hyökkäystä seinän läpi ja kirjatkaa tulos."],
            ["Korjatkaa ja testatkaa uudelleen", "Toteuttaja korjaa oman osansa virheet. Ajakaa samat testitapaukset uudelleen."]
          ],
          valmis: "Testimatriisissa ovat kolmannen pelin mekaniikan testitapaukset testaajineen ja tuloksineen.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    11: {
      type: "feature",
      feature: "Kolmannen pelin kierros päättyy selviytymiseen tai häviöön, ja alkuvalikko, ohje, uudelleenaloitus ja palaute toimivat.",
      excerpt: "Yksi kierros kestää noin 1–3 minuuttia, ja sen pitää päättyä selvästi.",
      connection: "Työviikolla 10 kolmannen pelin mekaniikka toimi. Nyt siitä tulee kierros, jolla on kesto ja loppu, ja valikko liitetään samalla tavalla kuin toisessa pelissä. Tämän viikon jälkeen kaikki kolme peliä ovat asiakkaiden kokeiltavissa työviikolla 12.",
      deliverable: "Kierroksen ajastin, voitto ja häviö, loppuruutu, valikko, visuaalinen palaute ja testitapaukset.",
      why: "Ilman kestoa ja loppua toimintapeli on pelkkä hiekkalaatikko, eikä musiikkikurssi voi suunnitella kierrokselle musiikkia.",
      done: "Esimerkiksi toimintapelissä: pelatkaa yksi kierros loppuun, esimerkiksi 60 sekunnin selviytyminen, ja yksi häviöön. Aloittakaa uudelleen ja palatkaa alkuvalikkoon. Jos teette muuta peliä, kokeilkaa vastaavasti molemmat loput. Historiassa on kummankin commit, ja kumpikin on testannut toisen osan.",
      record: "Kirjoita työviikon 11 merkintään oma osasi kolmannen pelin kierroksesta, miten varmistit, että kierros päättyy vain kerran, ja mitä testaaja löysi. Näyttömatriisin rivit: toimintalogiikka (s7), käyttöliittymä (p6), suunnittelu, toteutus ja testaus komponenttikirjastolla (k5) ja toimintojen testaus (p3).",
      skills: ["toimintalogiikka (s7)", "käyttöliittymä (p6)", "komponenttikirjaston käyttö kokonaisuutena (k5)", "testaus (p3)"],
      tehtavat: {
        "11-1": {
          miksi: "Kierroksen loppu ja sen näkyminen ruudulla ovat musiikkikurssille tärkeitä: musiikki voi rakentua kohti loppua. Kun ehdot sovitaan ensin, molemmat osat sopivat yhteen.",
          osat: [
            ["Kirjoittakaa voitto ja häviö", "Kirjoittakaa, milloin kierros päättyy voittoon ja milloin häviöön, esimerkiksi selviytyminen 60 sekuntia tai pelaajan kestävyyden loppuminen."],
            ["Jakakaa kahteen osaan", "Osa 1 on ajastin ja kierroksen päättyminen. Osa 2 on valikko, ohjausohje, uudelleenaloitus ja visuaalinen palaute. Valitkaa tekijät vastuutaulukon mukaan."],
            ["Valitkaa näkyvä aika", "Sopikaa, miten jäljellä oleva aika ja pelaajan kestävyys näkyvät ruudulla."],
            ["Tehkää kortit", "Tehkää kummastakin osasta kortti vastuuhenkilöineen ja odotettuine tuloksineen."]
          ],
          valmis: "Voiton ja häviön ehdot on kirjattu, ja kummallakin on kortti omasta osastaan.",
          tallenna: "Kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-11/kortit.png`."
        },
        "11-2": {
          miksi: "Oma osasi tekee kolmannesta pelistä kierroksen, joka alkaa, kestää ja päättyy. Toteutat sen omaan skriptiinsä ja kokeilet sen ennen testausta.",
          osat: [
            ["Hae parisi muutokset", "Paina Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Kirjoita oma skripti", "Osa 1: kirjoita ajastin, joka päättää kierroksen voittoon, ja häviö, kun pelaajan kestävyys loppuu. Osa 2: liitä valikko, ohje, uudelleenaloitus ja palaute."],
            ["Varmista yksi loppu", "Osa 1: varmista, että kierros päättyy vain kerran, vaikka voitto ja häviö osuisivat samaan hetkeen. Osa 2: varmista, että uudelleenaloitus nollaa ajan ja kestävyyden."],
            ["Kirjaa tapahtumat", "Kirjaa uudet pelitapahtumat, esimerkiksi viimeiset 10 sekuntia, voitto ja häviö, tiedostoon `docs/aanitapahtumat.md`."],
            ["Kokeile ja vie", "Kokeile osaasi Play-tilassa, tee commit ja push ja siirrä kortti Testattavana-sarakkeeseen."]
          ],
          valmis: "Oma osasi toimii Play-tilassa odotetun tuloksen mukaan, kierros päättyy vain kerran, ja oma commitisi on historiassa.",
          tallenna: "Oman commitisi linkki korttiin ja omaan päiväkirjaasi.",
          apu: {
            title: "Koodipohja: kierroksen ajastin",
            code: "using UnityEngine;\n\n// Osa 1, tiedosto RoundTimer.cs\npublic class RoundTimer : MonoBehaviour\n{\n    [SerializeField] private float roundLength = 60f;\n    [SerializeField] private RoundManager roundManager;\n    private float timeLeft;\n\n    void Start()\n    {\n        timeLeft = roundLength;\n    }\n\n    void Update()\n    {\n        // TODO: vähennä timeLeft-arvosta Time.deltaTime\n        // TODO: kun timeLeft on 0 tai alle, kutsu roundManager.EndRound(true) vain kerran\n        // TODO: päivitä aikanäyttö, esimerkiksi Mathf.CeilToInt(timeLeft)\n    }\n}",
            vinkit: [
              "Time.deltaTime on edellisestä ruudunpäivityksestä kulunut aika sekunteina. Kun aika on pysäytetty (Time.timeScale = 0), se on nolla.",
              "Ensimmäisen pelin RoundManagerin EndRound-metodi sopii myös tähän peliin."
            ],
            test: "Aseta roundLength Inspectorissa arvoon 5 ja paina Play: kierros päättyy viiden sekunnin kohdalla kerran."
          }
        },
        "11-3": {
          miksi: "Ajastin ja kaksi erilaista loppua tuottavat rajatilanteita, esimerkiksi häviön viimeisellä sekunnilla. Kun pari testaa, ne löytyvät ennen asiakkaita.",
          osat: [
            ["Kirjoittakaa testitapaukset", "Kirjoittakaa ennen ajoa testitapaukset voitolle, häviölle, uudelleenaloitukselle ja paluulle alkuvalikkoon."],
            ["Testatkaa toisen osa", "Kumpikin testaa toisen osan ja kirjaa itsensä testin tekijäksi."],
            ["Testatkaa rajatapaus", "Kokeilkaa, mitä tapahtuu, jos pelaaja häviää viimeisellä sekunnilla, ja kirjatkaa tulos."],
            ["Pelatkaa kolme kierrosta", "Pelatkaa kolme kierrosta peräkkäin ja tarkistakaa, että aika ja kestävyys alkavat joka kerta alusta."],
            ["Korjatkaa ja testatkaa uudelleen", "Toteuttaja korjaa oman osansa virheet. Ajakaa samat testitapaukset uudelleen."]
          ],
          valmis: "Testimatriisissa ovat kolmannen pelin kierroksen testitapaukset testaajineen, ja kolme peräkkäistä kierrosta menee läpi.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja korjauscommitit repositoryyn."
        }
      }
    },

    12: {
      type: "katselmointi",
      feature: "Asiakkaat ovat kokeilleet kaikkia kolmea peliä, ja tärkeimmät korjaukset ja niiden järjestys on sovittu.",
      excerpt: "Kun kaikki kolme peliä ovat kokeiltavissa, haluamme pelata niitä ja sopia tärkeimmistä korjauksista ennen luovutusta.",
      connection: "Kaikki kolme peliä ovat kokonaisia kierroksia. Asiakkaat kokeilevat niitä nyt yhdessä, koska vasta kokonaisuudesta näkee, sopivatko pelit kurssin harjoituksiksi. Katselmoinnissa sovitut korjaukset tehdään työviikolla 13.",
      deliverable: "Katselmointiversio (tag v0.2), palautekirjaus, korjauskortit sovitussa järjestyksessä, pyyntö vastaanottotestaajasta ja kummankin aukkolista näyttömatriisista.",
      why: "Ilman kokonaiskatselmointia viimeiset viikot menevät korjauksiin, joita asiakkaat eivät tarvitse.",
      done: "Lukekaa katselmoinnin päätökset ääneen asiakkaille tai ohjaajalle ja pyytäkää vahvistus. Jokaisella sovitulla korjauksella on kortti ja vastuuhenkilö, ja kumpikin on listannut omat aukkonsa näyttömatriisista.",
      record: "Kirjoita työviikon 12 merkintään roolisi katselmoinnissa, asiakkaiden tärkein palaute omin sanoin, omat korjausvastuusi ja omat aukkosi näyttömatriisista. Näyttömatriisin rivit: asiakaslähtöinen viestintä (s2), version katselmointi (s3), tärkeysjärjestys (s4) ja oman toiminnan arviointi (p11).",
      skills: ["asiakaslähtöinen viestintä (s2)", "version katselmointi (s3)", "tärkeysjärjestys (s4)", "oman toiminnan arviointi (p11)"],
      tehtavat: {
        "12-1": {
          miksi: "Asiakkaat kokeilevat kaikkia kolmea peliä valmiina versioina. Roolit vaihtuvat työviikosta 6, jotta kumpikin sekä esittelee että kirjaa palautetta.",
          osat: [
            ["Kootkaa buildit", "Kootkaa kaikista kolmesta pelistä build sovitulle alustalle ja kokeilkaa jokainen alusta loppuun."],
            ["Merkitkää katselmointiversio", "Merkitkää katselmoitava commit versiomerkinnällä eli tagilla v0.2 ja painakaa Push origin."],
            ["Vaihtakaa roolit", "Työviikon 6 kirjaaja esittelee nyt, ja esittelijä kirjaa. Tarkistakaa roolit vastuutaulukosta."],
            ["Kirjoittakaa esittely", "Esittelijä kirjoittaa lyhyen esittelyn kolmesta pelistä ilman teknistä sanastoa ja kertoo, mitä työviikon 6 palautteen perusteella muutettiin."],
            ["Kirjoittakaa kysymykset", "Kirjoittakaa kolme kysymystä, esimerkiksi mikä peleistä on kurssille tärkein ja mitä pitää korjata ennen luovutusta."]
          ],
          valmis: "Kaikki kolme buildia toimivat, katselmointiversio on merkitty (tag v0.2), ja esittely ja kysymykset ovat asiakaspalautteen tiedostossa.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` ja katselmointiversion versiomerkintä (tag v0.2) repositoryyn.",
          apu: {
            title: "Jos asiakas ei pääse",
            vinkit: ["Jos asiakas ei pääse paikalle, pyytäkää ohjaajaa nimeämään korvaaja tai sopimaan uusi aika. Kirjatkaa muutos päätöslokiin."]
          }
        },
        "12-2": {
          miksi: "Kirjaus asiakkaiden sanoin on katselmoinnin tärkein tulos: sen perusteella valitaan viimeiset korjaukset. Oma tulkinta pidetään erillään.",
          osat: [
            ["Esitelkää pelit", "Esittelijä lukee esittelyn ja antaa asiakkaiden pelata jokaista peliä ilman neuvoja."],
            ["Seuratkaa pelaamista", "Kirjaaja merkitsee, missä kohdissa asiakkaat epäröivät tai jäävät jumiin."],
            ["Kysykää kysymykset", "Esittelijä kysyy valmistellut kolme kysymystä."],
            ["Kirjatkaa sanatarkasti", "Kirjaaja kirjoittaa vastaukset asiakkaiden sanoin lainausmerkkeihin pelikohtaisesti. Kirjatkaa päivä ja roolit."],
            ["Kirjatkaa tulkinta erikseen", "Kirjoittakaa heti katselmoinnin jälkeen oma tulkintanne erilliseen osioon."]
          ],
          valmis: "Palautekirjauksessa ovat päivä, roolit, pelikohtaiset lainaukset ja erillinen tulkintaosio.",
          tallenna: "Päivitetty `project-docs/asiakaspalaute.md` repositoryyn.",
          esimerkki: "Pelikohtainen lainaus: ”Toimintapelin viimeiset kymmenen sekuntia ovat hyvä paikka musiikin kiihtymiselle, mutta ajastin pitäisi nähdä paremmin.”",
          eiRiita: "”Palaute oli positiivista.” Kirjauksesta ei näe, mitä peliä palaute koski eikä mitä pitää muuttaa."
        },
        "12-3": {
          miksi: "Viimeisille viikoille mahtuu rajallinen määrä korjauksia. Kun järjestys sovitaan asiakkaiden kanssa, korjaatte sen, mikä on kurssille tärkeintä.",
          osat: [
            ["Listatkaa korjaustarpeet", "Listatkaa katselmoinnin korjaustarpeet ja aiemmat avoimet korjauskortit."],
            ["Sopikaa järjestys asiakkaiden kanssa", "Kysykää asiakkailta, mitkä korjaukset ovat kurssin kannalta tärkeimmät, ja järjestäkää kortit sen mukaan."],
            ["Rajatkaa työviikkoon 13", "Valitkaa korjaukset, jotka mahtuvat työviikkoon 13. Muut kirjataan tiedossa oleviksi puutteiksi."],
            ["Kertokaa lisätavoitteista", "Kertokaa asiakkaille, että neljännestä ja viidennestä pelistä päätetään ohjaajan kanssa vasta, kun kolme peliä on testattu työviikolla 14."],
            ["Pyytäkää vastaanottotestaaja", "Pyytäkää ohjaajaa nimeämään työviikon 16 vastaanottotestiin projektin ulkopuolinen henkilö."],
            ["Kirjatkaa päätökset", "Kirjatkaa korjausten järjestys, lisätavoitteiden päätösaika ja vastaanottotestaajan rooli päätöslokiin."]
          ],
          valmis: "Korjauskortit ovat sovitussa järjestyksessä vastuuhenkilöineen, ja päätöslokissa ovat lisätavoitteiden päätösaika ja vastaanottotestaajan rooli.",
          tallenna: "Päätöslokin merkintä ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-12/korjauskortit.png`.",
          sanat: ["lisätavoite"]
        },
        "12-4": {
          miksi: "Puolivälin jälkeen ehtii vielä paikata aukot. Jos jostakin vaatimuksesta puuttuu oma työnäytteesi, sovit nyt, missä tehtävässä se syntyy.",
          osat: [
            ["Avaa näyttömatriisi", "Avaa sivun Näyttömatriisi ja käy läpi omien tutkinnon osiesi vaatimukset."],
            ["Merkitse syntyneet", "Merkitse rasti niihin vaatimuksiin, joista sinulla on jo oma työnäyte repositoryssa."],
            ["Listaa aukot", "Kirjoita tiedostoon `project-docs/omat/OMA-KANSIO/aukot.md` vaatimukset, joista oma työnäyte puuttuu."],
            ["Sovi paikkaus", "Sovi parisi ja ohjaajan kanssa jokaiselle aukolle tehtävä työviikoilta 13–17, jossa työnäyte syntyy."],
            ["Arvioi omaa toimintaasi", "Kirjoita samaan tiedostoon kolme virkettä omasta toiminnastasi tiimissä: mikä on sujunut ja mitä muutat."]
          ],
          valmis: "Aukkolistassa jokaisella puuttuvalla vaatimuksella on sovittu tehtävä, ja itsearvioinnissa on kolme virkettä.",
          tallenna: "`project-docs/omat/OMA-KANSIO/aukot.md` repositoryyn.",
          esimerkki: "”s11 tietoturvan arviointi: ei vielä työnäytettä. Sovittu: teen työviikon 14 tietoturva-arvion toimintapelin data-asetuksista. Omasta toiminnasta: olen pitänyt kortit ajan tasalla, mutta pyydän apua liian myöhään. Kysyn jatkossa, kun olen ollut jumissa 30 minuuttia.”",
          eiRiita: "”Kaikki on kunnossa.” Siitä ei näe, onko matriisi käyty läpi."
        }
      }
    },

    /* ============ VAIHE 4: TESTAUS JA LUOVUTUSVALMIUS (13–16) ============ */
    13: {
      type: "laatu",
      feature: "Palautteen perusteella valitut korjaukset toimivat, ja ne on testattu uudelleen.",
      connection: "Työviikolla 12 asiakkaat valitsivat tärkeimmät korjaukset. Nyt ne tehdään niin, että jokaisella on odotettu tulos ennen korjausta ja uusintatesti sen jälkeen. Korjattu versio on työviikon 14 testauksen pohja.",
      deliverable: "Korjauskortit odotettuine tuloksineen, kummankin korjaukset, kummankin toinen virheenkorjausketju ja uusintatestien tulokset.",
      why: "Korjaus ilman uusintatestiä voi rikkoa toisen pelin osan huomaamatta, koska pelit jakavat valikon ja osan koodista.",
      done: "Ajakaa jokaisen korjauksen testitapaus ja jokaisen pelin peruskierros uudelleen. Kaikki menevät läpi, ja kummallakin on toinen valmis virheenkorjausketju.",
      record: "Kirjoita työviikon 13 merkintään omat korjauksesi, oman virheenkorjausketjusi syy ja se, mitä toisen tekemä uusintatesti paljasti. Näyttömatriisin rivit: virheiden etsiminen ja korjaaminen (p2) ja toimintojen testaus (p3).",
      skills: ["virheiden etsiminen ja korjaaminen (p2)", "testaus ja uusintatestaus (p3)"],
      tehtavat: {
        "13-1": {
          miksi: "Korjaus on valmis vasta, kun sen tuloksen voi todeta. Kun odotettu tulos kirjoitetaan ennen korjausta, toinen voi testata korjauksen ilman selityksiä.",
          osat: [
            ["Avatkaa korjauskortit", "Avatkaa työviikolla 12 valitut korjauskortit tehtävätaulusta."],
            ["Kirjoittakaa odotettu tulos", "Kirjoittakaa jokaiseen korttiin, mitä pelaaja näkee, kun korjaus on valmis."],
            ["Lisätkää testitapaukset", "Lisätkää jokaisesta korjauksesta testimatriisiin testitapaus, jonka odotettu tulos on kirjattu ennen korjausta."],
            ["Jakakaa vastuut", "Jakakaa kortit niin, että kumpikin korjaa omaa koodiaan ja kummallakin on vähintään yksi korjaus."],
            ["Sopikaa scenejen vuorot", "Merkitkää kortteihin, kuka muokkaa mitäkin sceneä ja milloin."]
          ],
          valmis: "Jokaisella valitulla korjauksella on kortti, odotettu tulos, testitapaus ja vastuuhenkilö, ja kummallakin on vähintään yksi korjaus.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` ja kuvakaappaus korteista polkuun `project-docs/tyonaytteet/viikko-13/kortit.png`."
        },
        "13-2": {
          miksi: "Korjaat omasta koodistasi ongelmat, jotka asiakkaat valitsivat. Yhdestä korjauksesta kirjaat täydellisen ketjun, joka näyttää, miten löysit syyn.",
          osat: [
            ["Hae parisi muutokset", "Paina Fetch origin ja Pull origin ennen kuin avaat Unityn."],
            ["Toista ongelma", "Toista korjattava ongelma ennen kuin muutat mitään, ja kirjaa toistamisohje korttiin."],
            ["Etsi syy", "Etsi syy ja kirjaa se korttiin yhdellä virkkeellä."],
            ["Korjaa ja tee commit", "Korjaa yksi kortti kerrallaan ja tee jokaisesta korjauksesta oma commit."],
            ["Aja testitapaus", "Aja kortin testitapaus ja kirjaa tulos testimatriisiin."],
            ["Kirjaa ketju", "Kirjaa vähintään yhdestä korjauksesta täydellinen virheenkorjausketju testimatriisiin."]
          ],
          valmis: "Omat korjauskorttisi ovat Valmis-sarakkeessa, jokaisella on commit ja läpäisty testitapaus, ja yhdestä on täydellinen virheenkorjausketju.",
          tallenna: "Korjauscommitit ja ketju testimatriisiin, linkit omaan päiväkirjaasi.",
          sanat: ["virheenkorjausketju"],
          apu: {
            title: "Jos aitoa virhettä ei ole",
            vinkit: ["Jos omissa korjauskorteissasi ei ole aitoa virhettä vaan pelkkiä parannuksia, pyydä ohjaajalta vikatehtävä ketjua varten. Keksittyä virhettä ei kirjata."]
          }
        },
        "13-3": {
          miksi: "Pelit jakavat valikon ja osan koodista, joten yhden pelin korjaus voi rikkoa toisen. Siksi testaatte toistenne korjaukset ja kaikkien pelien peruskierrokset.",
          osat: [
            ["Hakekaa uusin versio", "Hakekaa molempien korjaukset ja avatkaa jokainen peli."],
            ["Testatkaa toisen korjaukset", "Kumpikin ajaa toisen tekemien korjausten testitapaukset ja kirjaa itsensä testin tekijäksi."],
            ["Ajakaa regressiotestit", "Pelatkaa jokaisen pelin peruskierros alusta loppuun, uudelleenaloitus ja paluu alkuvalikkoon."],
            ["Kirjatkaa tulokset", "Kirjatkaa tulokset testimatriisiin. Tehkää jokaisesta uudesta virheestä kortti."],
            ["Kirjatkaa puutteet", "Kirjatkaa korjaamatta jääneet asiat tiedostoon `docs/testitulokset-ja-puutteet.md` tiedossa olevina puutteina."]
          ],
          valmis: "Jokainen korjaus on uusintatestattu toisen tekemänä, jokaisen pelin peruskierros menee läpi, ja korjaamatta jääneet asiat on kirjattu puutteiksi.",
          tallenna: "Päivitetty testimatriisi ja `docs/testitulokset-ja-puutteet.md` repositoryyn.",
          sanat: ["regressiotesti"]
        }
      }
    },

    14: {
      type: "laatu",
      feature: "Kaikkien kolmen pelin testitulokset on kirjattu, ja aloitus, päättyminen ja toistuvat uudelleenaloitukset toimivat myös kootussa peliversiossa.",
      connection: "Korjaukset on tehty ja testattu editorissa. Nyt testaatte pelit niin kuin musiikkikurssi niitä käyttää: koottuina versioina, useita kierroksia peräkkäin ja rajatapauksissa. Testitulokset kuuluvat luovutukseen, ja ne ratkaisevat, voiko lisätavoitteista keskustella.",
      deliverable: "Täydennetty testimatriisi kaikista peleistä, koottujen versioiden testitulokset, rajatapausten tulokset ja kummankin tietoturva-arvio.",
      why: "Build voi toimia eri tavalla kuin editori. Jos koottua versiota ei testata, asiakkaat löytävät virheet ensimmäisinä.",
      done: "Käynnistäkää jokaisen pelin koottu versio ilman editoria. Pelatkaa kolme kierrosta peräkkäin ja palatkaa alkuvalikkoon joka kerta. Testimatriisissa on jokaisesta pelistä vähintään seitsemän testitapausta tuloksineen.",
      record: "Kirjoita työviikon 14 merkintään, minkä buildin kokosit ja testasit, mikä ero editorin ja buildin välillä löytyi ja mitä tietoturva-arviosi paljasti. Näyttömatriisin rivit: testaus (p3), ratkaisujen toimivuuden arviointi yhdessä (p10), tietoturvan arviointi (s11) sekä suunnittelu, toteutus ja testaus komponenttikirjastolla (k5).",
      skills: ["testaus koottua versiota vasten (p3, k5)", "ratkaisujen arviointi yhdessä (p10)", "tietoturvan arviointi (s11)"],
      tehtavat: {
        "14-1": {
          miksi: "Testimatriisi on luovutuksen osa: musiikkikurssi näkee siitä, mitä on testattu. Jokaisesta pelistä testataan samat seitsemän perusasiaa.",
          osat: [
            ["Tarkistakaa kattavuus", "Tarkistakaa, että jokaisesta pelistä on testitapaus käynnistykselle, ohjausohjeelle, päämekaniikalle, visuaaliselle palautteelle, päättymiselle, uudelleenaloitukselle ja paluulle alkuvalikkoon."],
            ["Kirjoittakaa puuttuvat", "Kirjoittakaa puuttuvat testitapaukset odotettuine tuloksineen ennen ajoa."],
            ["Jakakaa testaajat", "Jakakaa testaus niin, että kumpikin testaa peliä, jota ei pääosin toteuttanut itse."],
            ["Ajakaa ja kirjatkaa", "Ajakaa testitapaukset editorissa ja kirjatkaa testaaja, versio ja tulos."]
          ],
          valmis: "Testimatriisissa on jokaisesta pelistä vähintään seitsemän testitapausta tuloksineen: käynnistys, ohjausohje, päämekaniikka, palaute, päättyminen, uudelleenaloitus ja paluu alkuvalikkoon.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` repositoryyn."
        },
        "14-2": {
          miksi: "Musiikkikurssi pelaa koottuja versioita, ei editoria. Kumpikin kokoaa ja testaa vähintään yhden pelin, jotta molemmat osaavat kokoamisen ennen luovutusta.",
          osat: [
            ["Jakakaa pelit", "Sopikaa, kuka kokoaa minkäkin pelin. Kumpikin kokoaa ja testaa vähintään yhden."],
            ["Kootkaa build", "Kootkaa build sovitulle alustalle Builds-kansioon."],
            ["Sulkekaa Unity", "Sulkekaa Unity-editori kokonaan ennen testausta, jotta testaatte vain koottua versiota."],
            ["Ajakaa testitapaukset buildissa", "Ajakaa pelin testitapaukset buildissa ja kirjatkaa versioksi build ja commit."],
            ["Kirjatkaa erot", "Kirjatkaa jokainen ero editorin ja buildin välillä virheeksi tai puutteeksi."]
          ],
          valmis: "Jokaisen pelin build on testattu ilman editoria, ja tulokset ovat testimatriisissa.",
          tallenna: "Päivitetty testimatriisi ja kuvakaappaus jokaisen pelin buildista kansioon `project-docs/tyonaytteet/viikko-14/`.",
          sanat: ["build"]
        },
        "14-3": {
          miksi: "Musiikkikurssin opiskelija pelaa samaa kierrosta kymmeniä kertoja säveltäessään. Virhe, joka näkyy vasta kymmenennellä kierroksella, haittaa juuri häntä.",
          osat: [
            ["Kirjoittakaa rajatapaukset", "Kirjoittakaa jokaiselle pelille kaksi rajatapausta, esimerkiksi Uudelleen-painikkeen tuplapainallus tai näppäimen painaminen samalla hetkellä, kun kierros päättyy."],
            ["Pelatkaa kymmenen kierrosta", "Pelatkaa jokaisen pelin buildissa kymmenen kierrosta peräkkäin ja tarkistakaa, ettei mikään kasva, hidastu tai jää näkyviin."],
            ["Kokeilkaa ikkunan kokoa", "Kokeilkaa buildia eri ikkunakoossa tai näyttötarkkuudella, jos alusta sen sallii."],
            ["Kirjatkaa tulokset", "Kirjatkaa rajatapausten tulokset testimatriisiin ja tehkää virheistä kortit."]
          ],
          valmis: "Jokaisella pelillä on kaksi rajatapausta tuloksineen, ja kymmenen peräkkäistä kierrosta on pelattu jokaisessa buildissa.",
          tallenna: "Päivitetty `project-docs/testimatriisi.md` repositoryyn.",
          apu: {
            title: "Jos aika ei riitä",
            vinkit: ["Jos ohjaaja siirtää tämän työvaiheen työviikolle 15, tehkää se ennen jatkotyöstöohjeen viimeistelyä."]
          }
        },
        "14-4": {
          miksi: "Luovutettava paketti menee muiden opiskelijoiden koneille. Tarkistat, ettei siinä ole salaisuuksia tai henkilötietoja. Tarkistat myös, ettei virheellinen data kaada peliä.",
          osat: [
            ["Listaa luovutettavat tiedostot", "Avaa GitHub Desktopin Repository-valikosta komentorivi (Open in Command Prompt tai Open in Terminal) ja aja avun komento. Tallenna tuloste."],
            ["Tarkista oma alueesi", "Käy listasta läpi omat tiedostosi. Merkitse, onko niissä nimiä, sähköpostiosoitteita, salasanoja tai muuta, mikä ei kuulu luovutukseen."],
            ["Tarkista ulkoiset paketit", "Avaa Window-valikosta Package Manager ja kirjaa, mitä paketteja omassa pelissäsi on ja mistä ne tulevat."],
            ["Testaa virheellinen data", "Kirjoita testitapaus, jossa pelin data on virheellistä, esimerkiksi kenttätiedostossa on tuntematon merkki. Aja testi ja kirjaa tulos."],
            ["Kirjaa arvio", "Kirjoita tiedostoon `project-docs/omat/OMA-KANSIO/tietoturva-arvio.md` havainnot, riskit ja korjaukset."]
          ],
          valmis: "Tietoturva-arviossa ovat luovutettavien tiedostojen tarkistus, pakettien alkuperä ja virheellisen datan testitapaus tuloksineen.",
          tallenna: "`project-docs/omat/OMA-KANSIO/tietoturva-arvio.md` ja testitapaus testimatriisiin repositoryyn.",
          esimerkki: "”Komento listasi 412 tiedostoa. Kansiosta project-docs löytyi kuvakaappaus, jossa näkyy toisen opiskelijan nimi: poistettu. Paketit: Input System ja TextMeshPro Unityn omasta rekisteristä. Testitapaus T31: kenttätiedostossa merkki X, odotettu tulos varoitus Console-ikkunaan ja peli jatkuu, havaittu tulos sama.”",
          eiRiita: "”Peli toimii ilman verkkoa, joten tietoturvariskejä ei ole.” Arvio ei perustu tarkistukseen.",
          apu: {
            title: "Luovutettavien tiedostojen lista",
            code: "git ls-files",
            vinkit: ["Komento listaa kaikki tiedostot, jotka ovat versionhallinnassa ja siis myös luovutettavassa repositoryssa. Library- ja Builds-kansiot eivät näy listassa, jos .gitignore toimii."]
          }
        }
      }
    },

    15: {
      type: "laatu",
      feature: "Jatkotyöstöohjeet, äänitapahtumien kuvaus ja assettiluettelo ovat valmiita kokeiltaviksi, ja tarpeeton aineisto on poistettu luovutuksesta.",
      excerpt: "Pelimusiikin kurssin opiskelijoiden pitää saada projektit auki ja jatkaa niitä ilman teitä.",
      connection: "Pelit on testattu koottuina versioina. Nyt kirjoitatte ohjeet, joiden avulla musiikkikurssin opiskelija avaa projektin ja löytää kohdat, joihin äänet liitetään. Ohjeet testataan työviikolla 16 projektin ulkopuolisella henkilöllä.",
      deliverable: "`docs/avaaminen-ja-jatkotyosto.md` kummankin osuuksineen, valmis `docs/aanitapahtumat.md`, valmis `docs/assetit-ja-lisenssit.md`, siistitty koodi ja poistettu tarpeeton aineisto.",
      why: "Ilman ohjeita prototyypit ovat musiikkikurssille vain pelattavia pelejä, eivät harjoitusmateriaalia.",
      done: "Toinen teistä valitsee äänitapahtumataulukosta kolme tapahtumaa, ja toinen löytää kunkin toteutuskohdan koodista pelkän taulukon avulla. Vaihtakaa sitten vuoroa. Jokainen kohta löytyy alle minuutissa.",
      record: "Kirjoita työviikon 15 merkintään, minkä osuuden ohjeesta kirjoitit, mitä parisi epäröi sitä kokeillessaan ja mitä muutit omassa koodissasi jatkotyöstöä varten. Näyttömatriisin rivit: dokumentointi sovitulla tavalla (k7), ylläpidettävä koodi (p5) ja asiakaslähtöinen viestintä (s2).",
      skills: ["dokumentointi (k7)", "ylläpidettävä koodi (p5)", "asiakaslähtöinen viestintä (s2)"],
      tehtavat: {
        "15-1": {
          miksi: "Ohje on luovutuksen tärkein dokumentti: vastaanottaja avaa projektin ja jatkaa sitä ilman teitä. Kirjoitat osuuden peleistä tai osista, jotka tunnet parhaiten.",
          osat: [
            ["Sopikaa osuudet", "Sopikaa parisi kanssa, kumpi kirjoittaa minkäkin pelin ohjeen. Kummallakin on vähintään yksi peli."],
            ["Kirjoita avaaminen", "Kirjoita oman pelisi avaamisohje: Unity-versio, mikä kansio avataan Unity Hubissa ja mikä scene käynnistetään."],
            ["Kirjoita rakenne", "Kirjoita, missä pelin scenet, skriptit, prefabit ja data ovat ja mitä tärkeimmät skriptit tekevät."],
            ["Kirjoita pelaaminen", "Kirjoita ohjausohje ja kierroksen kulku pelaajan näkökulmasta."],
            ["Kirjoita jatkotyöstö", "Kirjoita, miten kenttää tai asetuksia muutetaan ja mistä äänitapahtumat löytyvät."],
            ["Kokeile ohjetta", "Pyydä parisi avaamaan peli pelkän ohjeesi avulla ja korjaa kohdat, joissa hän epäröi."]
          ],
          valmis: "Ohjeessa on oma osuutesi, ja parisi on avannut pelin sen avulla kysymättä.",
          tallenna: "`docs/avaaminen-ja-jatkotyosto.md` repositoryyn ja oman osuutesi commit-linkki päiväkirjaan.",
          esimerkki: "”Avaa Unity Hub, valitse Add ja kansio Pulmapeli. Unity-versio on 6000.0.40f1. Avaa scene Assets/Scenes/Valikko ja paina Play. Kenttä on tiedostossa Assets/Data/kentta.txt, jossa merkki # on seinä.”",
          eiRiita: "”Avaa projekti Unityllä.” Vastaanottaja ei tiedä versiota, kansiota eikä sceneä."
        },
        "15-2": {
          miksi: "Äänitapahtumien kuvaus on syy, miksi prototyypit tehdään. Musiikkikurssin opiskelija aloittaa työnsä tästä taulukosta.",
          osat: [
            ["Tarkistakaa kattavuus", "Pelatkaa jokainen peli ja kirjatkaa jokainen hetki, johon ääni tai musiikki sopisi. Verratkaa taulukkoon."],
            ["Täydentäkää puuttuvat", "Lisätkää puuttuvat tapahtumat tiedostoineen ja metodeineen."],
            ["Tarkistakaa nimet", "Tarkistakaa, että taulukon metodien nimet vastaavat koodia. Jos nimi on epäselvä, muuttakaa nimeä koodissa ja taulukossa."],
            ["Kirjoittakaa ohje", "Kirjoittakaa taulukon alkuun kaksi virkettä siitä, miten musiikkikurssi voi liittää äänen tapahtumaan, esimerkiksi lisäämällä AudioSource-komponentin. Ääniä ette tee itse."],
            ["Kokeilkaa, löytyvätkö tapahtumat", "Toinen valitsee kolme tapahtumaa, ja toinen etsii ne koodista pelkän taulukon avulla. Vaihtakaa vuoroa."]
          ],
          valmis: "Taulukossa ovat kaikkien kolmen pelin tapahtumat, nimet vastaavat koodia, ja kolme valittua tapahtumaa löytyi koodista taulukon avulla.",
          tallenna: "Valmis `docs/aanitapahtumat.md` repositoryyn.",
          sanat: ["äänitapahtuma"]
        },
        "15-3": {
          miksi: "Luovutukseen kuuluu vain se, mitä peleissä käytetään, ja jokaisella assetilla on oltava lähde ja käyttöehdot. Ylimääräinen aineisto hämmentää vastaanottajaa.",
          osat: [
            ["Käykää Art-kansiot läpi", "Käykää jokaisen pelin Art-kansio läpi ja tarkistakaa, että jokaisella assetilla on rivi assettiluettelossa."],
            ["Täydentäkää käyttöehdot", "Täydentäkää puuttuvat lähteet ja lisenssit. Jos lähdettä ei löydy, korvatkaa asset luvallisella."],
            ["Poistakaa käyttämättömät", "Poistakaa assetit ja skriptit, joita mikään peli ei käytä, sekä Kokeilu-projekti, jos ohjaaja ei halua säilyttää sitä."],
            ["Kokeilkaa poiston jälkeen", "Avatkaa jokainen peli ja pelatkaa kierros, jotta näette, ettei poisto rikkonut mitään."]
          ],
          valmis: "Jokaisella peleissä käytetyllä assetilla on lähde ja lisenssi luettelossa, käyttämätön aineisto on poistettu, ja pelit toimivat poiston jälkeen.",
          tallenna: "Valmis `docs/assetit-ja-lisenssit.md` ja siivouscommit repositoryyn."
        },
        "15-4": {
          miksi: "Musiikkikurssin opiskelija lukee koodiasi löytääkseen tapahtumat. Kuvaavat nimet ja lyhyet kommentit säästävät hänen aikaansa ja tekevät koodista ylläpidettävää.",
          osat: [
            ["Listaa omat skriptisi", "Listaa skriptit, jotka olet kirjoittanut itse."],
            ["Tarkista nimet", "Tarkista, että muuttujien, metodien ja luokkien nimet kertovat, mitä ne tekevät. Muuta epäselvät nimet."],
            ["Poista kuollut koodi", "Poista kommentoidut kokeilut ja käyttämättömät muuttujat."],
            ["Lisää alkukommentit", "Lisää jokaisen skriptin alkuun kommenttirivi siitä, mitä skripti tekee ja mihin GameObjectiin se liitetään."],
            ["Aja regressiotesti", "Pelaa pelin peruskierros alusta loppuun. Jos muutit metodin nimeä, päivitä se myös äänitapahtumataulukkoon."],
            ["Tee commit ja push", "Tee commit, jonka viesti kertoo siistimisen, ja paina Push origin."]
          ],
          valmis: "Omissa skripteissäsi on kuvaavat nimet ja alkukommentit, kuollut koodi on poistettu, ja pelin peruskierros menee läpi.",
          tallenna: "Siistimiscommit ja yksi ennen ja jälkeen -esimerkki omaan päiväkirjaasi.",
          esimerkki: "Ennen: muuttuja t ja metodi Do(). Jälkeen: muuttuja timeLeft ja metodi EndRound(bool won), ja skriptin alussa kommentti ”Laskee kierroksen ajan ja päättää kierroksen. Liitetään GameManager-objektiin.”",
          eiRiita: "Lisäsit kommentin jokaiselle riville, mutta nimet ovat yhä t ja Do()."
        }
      }
    },

    16: {
      type: "julkaisu",
      feature: "Projektin ulkopuolinen henkilö on avannut Unity-projektit ja käynnistänyt pelit kirjallisen ohjeen avulla, ja havainnot ja korjaukset on kirjattu.",
      connection: "Ohjeet on kirjoitettu ja koodi siistitty. Nyt sisältö jäädytetään luovutusehdokkaaksi, ja projektin ulkopuolinen henkilö kokeilee, saako hän pelit auki ilman teitä. Hänen epäröintinsä kertovat, mitä ohjeeseen pitää vielä korjata ennen luovutusta.",
      deliverable: "Luovutusehdokas (tag v0.9), vastaanottotestin tehtävä, testaajan havainnot hänen sanoinaan ja korjattu ohje.",
      why: "Kirjoittaja ei huomaa ohjeesta puuttuvia asioita, koska hän tietää ne jo. Vain ulkopuolinen voi testata, toimiiko ohje.",
      done: "Testaaja avaa projektit ja käynnistää pelit pelkän kirjallisen ohjeen avulla ilman suullista apua. Jokainen kohta, jossa hän epäröi, on korjattu ohjeeseen tai kirjattu tiedossa olevaksi puutteeksi.",
      record: "Kirjoita työviikon 16 merkintään, missä testaaja epäröi oman osuutesi kohdalla ja miten korjasit ohjeen tai koodin. Näyttömatriisin rivit: asiakaslähtöinen viestintä (s2), dokumentointi (k7) ja virheiden korjaaminen (p2), jos korjasit estävän virheen.",
      skills: ["dokumentoinnin testaus (k7)", "asiakaslähtöinen viestintä (s2)", "virheiden korjaaminen (p2)"],
      tehtavat: {
        "16-1": {
          miksi: "Vastaanottotesti tehdään jäädytettyyn versioon, jotta testaaja kokeilee samaa, mitä luovutetaan. Puhdas klooni varmistaa, ettei testi nojaa teidän koneidenne asetuksiin.",
          osat: [
            ["Jäädyttäkää sisältö", "Sopikaa, ettei peleihin lisätä tämän jälkeen uutta. Korjataan vain estävät virheet ja ohjeet."],
            ["Merkitkää luovutusehdokas", "Merkitkää jäädytetty commit versiomerkinnällä eli tagilla v0.9 ja painakaa Push origin."],
            ["Tehkää puhdas klooni", "Kloonatkaa repository uuteen kansioon tai toiselle koneelle. Testaaja aloittaa tästä kopiosta, ei teidän työkansiostanne."],
            ["Kirjoittakaa testaajan tehtävä", "Kirjoittakaa testaajalle tehtävä: avaa jokainen peli ohjeen mukaan, pelaa kierros ja etsi kaksi äänitapahtumaa koodista taulukon avulla."],
            ["Sopikaa aika ja roolit", "Sopikaa ohjaajan nimeämän testaajan kanssa aika. Sopikaa, kumpi seuraa ja kumpi kirjaa."]
          ],
          valmis: "Luovutusehdokas on merkitty (tag v0.9), puhdas klooni on valmiina, ja testaajan tehtävä on kirjoitettu.",
          tallenna: "Tehtävä tiedostoon `project-docs/vastaanottotesti.md` ja luovutusehdokkaan versiomerkintä (tag v0.9) repositoryyn.",
          sanat: ["vastaanottotesti"]
        },
        "16-2": {
          miksi: "Testaajan epäröinnit ovat ohjeen korjauslista. Ne kirjataan hänen sanoinaan, jotta korjaatte sen, mikä oikeasti oli epäselvää.",
          osat: [
            ["Antakaa ohje ja tehtävä", "Antakaa testaajalle kirjallinen ohje ja tehtävä. Älkää neuvoko suullisesti."],
            ["Seuratkaa hiljaa", "Kirjatkaa jokainen kohta, jossa testaaja epäröi, kysyy tai tekee jotain muuta kuin ohje tarkoittaa."],
            ["Kysykää lopuksi", "Kysykää lopuksi, mikä oli vaikeinta ja mitä ohjeesta puuttui."],
            ["Kirjatkaa sanatarkasti", "Kirjatkaa testaajan vastaukset hänen sanoinaan lainausmerkkeihin. Kirjatkaa myös päivä ja testaajan rooli."],
            ["Luokitelkaa havainnot", "Merkitkää jokainen havainto: ohjeen korjaus, estävä virhe tai tiedossa oleva puute."]
          ],
          valmis: "Vastaanottotestin kirjauksessa ovat päivä, testaajan rooli, epäröintikohdat, testaajan sanat ja luokitellut havainnot.",
          tallenna: "Päivitetty `project-docs/vastaanottotesti.md` repositoryyn.",
          esimerkki: "”Ohjeen kohta 3: testaaja etsi sceneä Scenes-kansiosta, mutta ohjeessa luki vain ’avaa valikko’. Testaaja: ’En tiennyt, mikä näistä on valikko.’ Luokka: ohjeen korjaus.”",
          eiRiita: "”Testaaja sai pelit auki.” Kirjauksesta ei näe, missä hän epäröi."
        },
        "16-3": {
          miksi: "Sisältö on jäädytetty, joten korjaat vain sen, mikä estää käytön, ja ohjeen epäselvät kohdat. Muut havainnot kirjataan tiedossa oleviksi puutteiksi.",
          osat: [
            ["Valitse omat havainnot", "Valitse vastaanottotestin havainnoista ne, jotka koskevat omaa peliäsi tai ohjeen osuuttasi."],
            ["Korjaa ohje", "Korjaa ohjeen epäselvät kohdat niin, ettei testaajan kysymystä enää synny."],
            ["Korjaa estävä virhe", "Jos havainto on estävä virhe omassa koodissasi, korjaa se virheenkorjausketjuna ja aja peruskierros uudelleen."],
            ["Kirjaa puutteet", "Kirjaa muut havainnot tiedostoon `docs/testitulokset-ja-puutteet.md` tiedossa olevina puutteina."],
            ["Tee commit ja push", "Tee commit ja push ja merkitse havainnot käsitellyiksi vastaanottotestin tiedostoon."]
          ],
          valmis: "Jokainen omalle alueellesi osunut havainto on korjattu ohjeeseen, korjattu estävänä virheenä tai kirjattu tiedossa olevaksi puutteeksi.",
          tallenna: "Korjauscommitit ja päivitetty `docs/testitulokset-ja-puutteet.md` repositoryyn, linkit omaan päiväkirjaasi."
        }
      }
    },

    /* ============ VAIHE 5: LUOVUTUS JA NÄYTTÖ (17–18) ============ */
    17: {
      type: "julkaisu",
      feature: "Sovitut korjaukset on tehty, ohjeet vastaavat toteutusta, ja asiakkaat ovat saaneet sovitun luovutuspaketin.",
      excerpt: "Valmis tarkoittaa meille kolmea pelattavaa peliä, muokattavia Unity-projekteja ja ohjeita, joiden avulla jatkamme niitä.",
      connection: "Luovutusehdokas on testattu ulkopuolisella henkilöllä, ja ohje on korjattu. Nyt luovutusversio kootaan ja tarkistetaan puhtaasta kloonista, ja paketti luovutetaan asiakkaille sovitulla tavalla. Luovutuksen jälkeen jäljellä on oman osaamisen esittely.",
      deliverable: "Luovutusversio (tag v1.0), luovutuspaketti, regressiotestin tulos puhtaasta kloonista ja kummankin oman työn kuvaus.",
      why: "Paketti, jota ei ole tarkistettu puhtaasta kloonista, voi toimia vain tekijöiden koneilla.",
      done: "Avatkaa luovutuspaketti puhtaassa kloonissa tai toisella koneella, käynnistäkää jokainen peli ja käykää luovutuslistan kohdat läpi. Jokainen kohta löytyy paketista.",
      record: "Kirjoita työviikon 17 merkintään, minkä pelin luovutusbuildin kokosit, mitä tarkistit ennen luovutusta ja mihin oman työn kuvauksesi linkittää. Näyttömatriisin rivit: julkaisu tuotantoympäristöön (s14), julkaisu asiakkaan ympäristöön (k6), dokumentointi (k7) ja versionhallinta (s12).",
      skills: ["julkaisu asiakkaan ympäristöön (s14, k6)", "dokumentointi (k7)", "versionhallinta (s12)"],
      tehtavat: {
        "17-1": {
          miksi: "Luovutusversioon tehdään vain estävät korjaukset. Puhtaasta kloonista ajettu regressiotesti varmistaa, että luovutettava versio toimii muuallakin kuin teidän koneillanne.",
          osat: [
            ["Tarkistakaa jäljellä olevat", "Tarkistakaa, onko tehtävätaulussa estäviä virheitä. Muita muutoksia ei enää tehdä."],
            ["Korjatkaa estävät", "Korjatkaa estävät virheet. Jokainen korjaus saa oman commitin ja testitapauksen."],
            ["Kloonatkaa puhtaasti", "Kloonatkaa repository uuteen kansioon ja avatkaa jokainen peli sieltä."],
            ["Ajakaa regressiotesti", "Pelatkaa jokaisen pelin peruskierros, uudelleenaloitus ja paluu alkuvalikkoon puhtaasta kloonista."]
          ],
          valmis: "Estäviä virheitä ei ole, ja jokaisen pelin peruskierros menee läpi puhtaasta kloonista.",
          tallenna: "Regressiotestin tulokset `project-docs/testimatriisi.md`-tiedostoon."
        },
        "17-2": {
          miksi: "Kumpikin kokoaa vähintään yhden pelin luovutusversion asiakkaan alustalle. Se on oma työnäytteesi ohjelman julkaisemisesta asiakkaan ympäristöön.",
          osat: [
            ["Valitse pelisi", "Sovi parisi kanssa, mitkä pelit kumpikin kokoaa. Kummallakin on vähintään yksi."],
            ["Tarkista asetukset", "Tarkista Build Profiles -ikkunasta alusta, scenet ja niiden järjestys: alkuvalikko ensimmäisenä."],
            ["Kokoa puhtaasta kloonista", "Kokoa build puhtaasta kloonista, ei omasta työkansiostasi."],
            ["Testaa build", "Käynnistä build ilman editoria ja pelaa kierros, uudelleenaloitus ja paluu alkuvalikkoon."],
            ["Pakkaa build", "Pakkaa build zip-tiedostoksi, jonka nimessä ovat pelin nimi, alusta ja versio, esimerkiksi Pulmapeli-Windows-v1.0.zip."]
          ],
          valmis: "Oman pelisi puhtaasta kloonista koottu build käynnistyy ilman editoria, ja zip-tiedosto on nimetty sovitusti.",
          tallenna: "Zip-tiedosto luovutuspakettiin ja build-asetukset omaan päiväkirjaasi."
        },
        "17-3": {
          miksi: "Luovutus on toimeksiannon täyttymys: asiakkaat saavat pelit, projektit ja ohjeet. Luovutuslista varmistaa, ettei mitään puutu.",
          osat: [
            ["Kootkaa paketti", "Kootkaa luovutuspaketti avun luovutuslistan mukaan."],
            ["Tarkistakaa lista", "Käykää luovutuslista läpi kohta kohdalta ja rastittakaa vain kohdat, jotka löytyvät paketista."],
            ["Merkitkää luovutusversio", "Merkitkää luovutettu commit versiomerkinnällä eli tagilla v1.0 ja painakaa Push origin."],
            ["Luovuttakaa sovitulla tavalla", "Luovuttakaa paketti asiakkaille sovitulla tavalla, esimerkiksi GitHubin julkaisuna eli releasena tai oppilaitoksen jaetussa kansiossa."],
            ["Pyytäkää kuittaus", "Pyytäkää asiakkailta kuittaus, että paketti on vastaanotettu, ja kirjatkaa se päätöslokiin."]
          ],
          valmis: "Luovutuslistan jokainen kohta on paketissa, luovutusversio on merkitty (tag v1.0), ja asiakkaat ovat kuitanneet vastaanoton.",
          tallenna: "Luovutusversion versiomerkintä (tag v1.0) ja päätöslokin kuittausmerkintä repositoryyn.",
          apu: {
            title: "Luovutuslista",
            code: "LUOVUTUSLISTA\n[ ] Kolme pelattavaa versiota sovitulle alustalle (zip-tiedostot)\n[ ] Muokattavat Unity-projektit (repository tai sen kopio)\n[ ] Unity-versio kirjattuna README-tiedostoon ja ohjeeseen\n[ ] docs/avaaminen-ja-jatkotyosto.md: avaaminen, pelaaminen ja jatkotyöstö\n[ ] docs/aanitapahtumat.md: ääni- ja musiikkitapahtumat\n[ ] docs/assetit-ja-lisenssit.md: lähteet ja käyttöehdot\n[ ] docs/testitulokset-ja-puutteet.md: testitulokset ja tiedossa olevat puutteet\n[ ] docs/tekijat.md: kummankin oman työn kuvaus",
            vinkit: [
              "Luovutustapa ja lisenssi ovat ohjaajan päätöksiä. Jos niitä ei ole sovittu, kysykää ennen luovutusta.",
              "Henkilökohtaiset oppimismerkinnät (kansio project-docs/omat) eivät kuulu asiakkaan pakettiin, ellei toisin sovita. Jos luovutatte repositoryn kopiona, poistakaa kansio kopiosta."
            ]
          }
        },
        "17-4": {
          miksi: "Oman työn kuvaus kuuluu luovutukseen: asiakkaat näkevät, kuka teki mitä, ja ohjaajat näkevät oman osuutesi. Kuvaus perustuu Git-historiaan, tehtävätauluun ja työaikaan, ei pelkkiin commit-määriin.",
          osat: [
            ["Kokoa omat osasi", "Käy vastuutaulukko läpi ja listaa jokaisesta pelistä osat, jotka teit."],
            ["Hae täsmälinkit", "Hae jokaiselle osalle commit-linkki ja testitapaus, joka testasi sen."],
            ["Laske työaika", "Laske työaikataulukosta omat tuntisi peleittäin."],
            ["Kirjoita kuvaus", "Kirjoita tiedostoon `docs/tekijat.md` oma osiosi: mitä teit, missä se näkyy ja mitä testasit parisi työstä."],
            ["Tarkistakaa yhdessä", "Lukekaa toistenne osiot ja korjatkaa, jos jokin yhteinen työ puuttuu tai on kahdesti."]
          ],
          valmis: "Tekijät-tiedostossa on oma osiosi, jossa jokaisella osalla on commit-linkki ja testitapaus, ja parisi on lukenut sen.",
          tallenna: "`docs/tekijat.md` repositoryyn.",
          esimerkki: "”Pulmapeli: kentän luku tekstidatasta (commit-linkki, testitapaus T12) ja alkutilanteeseen palautus (commit-linkki, testitapaus T15). Testasin parin toteuttaman ratkaisun tunnistuksen (testitapaus T14). Työaika pulmapelissä 31 h.”",
          eiRiita: "”Tein paljon koodia ja autoin muissa.” Kuvauksesta ei löydy yhtään työnäytettä."
        }
      }
    },

    18: {
      type: "naytto",
      feature: "Kumpikin on näyttänyt omat ratkaisunsa, testinsä ja päätöksensä ja tehnyt muutoksen omaan koodiinsa, ja oma näyttöaineisto on täsmälinkitetty.",
      connection: "Pelit on luovutettu. Viimeisellä viikolla ei lisätä uutta, vaan kumpikin tekee oman osaamisensa löydettäväksi ja näyttää sen. Esittelyssä selität omat ratkaisusi ja muutat niitä ohjaajan pyynnöstä.",
      deliverable: "Kummankin oma näyttömatriisi täsmälinkein, oma esittely, esittelyssä tehty muutos ja itsearviointi.",
      why: "Näyttö arvioi kummankin oman osaamisen. Ilman täsmälinkkejä ja omaa esittelyä yhteisestä työstä ei erotu, mitä kumpikin osaa.",
      done: "Ohjaaja valitsee yhden oman ratkaisusi. Selität sen ja teet siihen pienen muutoksen, ja muutos toimii Play-tilassa. Oman näyttömatriisisi jokaisella rivillä on täsmälinkki tai merkintä täydennettävästä.",
      record: "Kirjoita työviikon 18 merkintään, minkä ratkaisun ohjaaja valitsi, mitä muutit ja mitä vielä täydentäisit. Näyttömatriisin rivit: oman toiminnan arviointi (p11) ja kaikki rivit, joiden täsmälinkit kokosit.",
      skills: ["oman osaamisen esittely", "oman toiminnan arviointi (p11)", "oman koodin selittäminen ja muuttaminen (p4, p5)"],
      paivat: [
        ["Aineisto", "Kokoa oma näyttömatriisi täsmälinkein ja tarkista, että päiväkirja ja AI-loki ovat omassa kansiossasi."],
        ["Esittely", "Valmistele oma 8–10 minuutin esittely: peli toiminnassa, kaksi omaa ratkaisua, korjattu virhe ja Git-historia."],
        ["Harjoittelu", "Harjoittele esittely parisi kanssa ja kokeile pientä muutosta omaan koodiisi."],
        ["Puskuri", "Täydennä puuttuvat linkit ja kysy ohjaajalta, jos jokin on epäselvää."],
        ["Näyttö", "Esittele, tee pyydetty muutos ja kirjoita itsearviointi."]
      ],
      tehtavat: {
        "18-1": {
          miksi: "Näyttömatriisi näyttää arvioijalle, missä osaamisesi työnäyte on. Kumpikin kokoaa oman matriisinsa, koska arviointi on henkilökohtainen.",
          osat: [
            ["Tarkista perusteet", "Tarkista ohjaajalta, minkä tutkinnon perusteiden ja osien mukaan sinut arvioidaan."],
            ["Luo matriisitiedosto", "Kopioi avun pohja tiedostoon `project-docs/omat/OMA-KANSIO/nayttomatriisi.md`."],
            ["Täytä rivit", "Kirjoita jokaiselle omien osiesi vaatimukselle oma tehtäväsi, peli ja täsmälinkki: commit, testitapaus, tiedosto tai tag."],
            ["Merkitse täydennettävät", "Merkitse rivit, joilta työnäyte puuttuu, sarakkeeseen Täydennettävää. Älä keksi työnäytettä."],
            ["Rastita sivulla", "Rastita sivun Näyttömatriisi-näkymässä rivit, joilla on täsmälinkki. Rastit ovat vain sinun muistilistasi."]
          ],
          valmis: "Omassa näyttömatriisissasi on jokaisella rivillä täsmälinkki tai merkintä täydennettävästä.",
          tallenna: "`project-docs/omat/OMA-KANSIO/nayttomatriisi.md` repositoryyn.",
          apu: {
            title: "Oman näyttömatriisin pohja",
            code: "# Oma näyttömatriisi\n\nTutkinnon perusteet: DIAARINUMERO (ohjaaja vahvistaa)\n\n| Tutkinnon osa ja vaatimus | Opiskelija | Oma tehtävä | Prototyyppi | Työnäytteen täsmälinkki | Testi tai esittely | Täydennettävää |\n| --- | --- | --- | --- | --- | --- | --- |\n| Ohjelmointi: testaa ohjelman toimintoja | NIMI | Pulmapelin palautuksen testit | Pulmapeli | LINKKI | testitapaus T15 | |"
          }
        },
        "18-2": {
          miksi: "Esittely näyttää osaamisesi muodossa, jota arvioija voi seurata: peli toiminnassa, oma koodi ja omat testit. Valmistelu tehdään täsmälinkkien varaan.",
          osat: [
            ["Valitse kaksi ratkaisua", "Valitse kaksi omaa ohjelmointiratkaisuasi, jotka osaat selittää parhaiten."],
            ["Valitse korjattu virhe", "Valitse yksi oma virheenkorjausketjusi."],
            ["Rakenna esittely", "Rakenna 8–10 minuutin esittely: peli toiminnassa, kaksi omaa ratkaisua koodissa, korjattu virhe, omat testit ja Git-historia."],
            ["Kerro tekoälyn käyttö", "Jos käytit tekoälyä, kerro miten ja miten tarkistit tuloksen. Ota AI-lokisi mukaan."],
            ["Harjoittele", "Harjoittele esittely kerran parisi kanssa ja pyydä häneltä yksi kysymys, jonka ohjaaja voisi kysyä."]
          ],
          valmis: "Esittelyn runko ja valitut täsmälinkit ovat omassa kansiossasi, ja olet harjoitellut esittelyn kerran.",
          tallenna: "Tiedosto `project-docs/omat/OMA-KANSIO/esittely.md` repositoryyn."
        },
        "18-3": {
          miksi: "Kumpikin näyttää ja selittää omat ohjelmointiratkaisunsa ja muuttaa niitä. Muutos ohjaajan pyynnöstä osoittaa, että ymmärrät oman koodisi.",
          osat: [
            ["Pidä esittely", "Pidä valmisteltu esittely ohjaajille."],
            ["Selitä ratkaisu", "Kun ohjaaja valitsee yhden omista ratkaisuistasi, selitä, mitä koodi tekee ja miksi teit sen näin."],
            ["Tee muutos", "Tee ohjaajan pyytämä pieni muutos omaan koodiisi, esimerkiksi muuta kiinteä arvo Inspectorissa säädettäväksi tai lisää uusi ehto."],
            ["Kokeile muutosta", "Kokeile muutosta Play-tilassa ohjaajan nähden ja kerro, miten testaisit sen."],
            ["Tallenna muutos", "Tee muutoksesta commit ohjaajan ohjeen mukaan."]
          ],
          valmis: "Olet selittänyt ohjaajan valitseman ratkaisun ja tehnyt siihen toimivan muutoksen Play-tilassa.",
          tallenna: "Muutoksen commit-linkki ja ohjaajan kysymykset omaan päiväkirjaasi."
        },
        "18-4": {
          miksi: "Itsearviointi näyttää, että osaat arvioida omaa toimintaasi tiimin jäsenenä. Jokainen väite perustuu omaan esimerkkiin, ei yleiseen tunteeseen.",
          osat: [
            ["Kirjoita onnistuminen", "Kirjoita yksi asia, joka onnistui, ja liitä siihen täsmälinkki."],
            ["Kirjoita vaikeus", "Kirjoita yksi tilanne, jossa tarvitsit apua, ja miten ratkaisit sen."],
            ["Arvioi parityötä", "Kirjoita, miten sovitte tehtävistä ja testasitte toistenne työtä ja mitä tekisit seuraavassa parityössä toisin."],
            ["Arvioi oppimista", "Kirjoita, mitä osaat nyt Unitystä ja versionhallinnasta sellaista, mitä et vielä osannut työviikolla 1."],
            ["Kirjoita tekoälyn käytöstä", "Jos käytit tekoälyä, kirjoita yksi esimerkki AI-lokista: mitä kysyit, mitä muutit ja miten tarkistit."]
          ],
          valmis: "Itsearvioinnissa on viisi kohtaa, jokaisessa on oma esimerkki, ja vähintään kolmessa on täsmälinkki.",
          tallenna: "`project-docs/omat/OMA-KANSIO/itsearviointi.md` ja koko projektipäiväkirja omaan kansioosi repositoryyn.",
          esimerkki: "”Tarvitsin apua, kun pulmapelin palautus jätti laatikot kahdesti sceneen (testitapaus T15). Kysyin parilta vasta päivän jälkeen. Seuraavalla kerralla kysyn, kun olen ollut jumissa puoli tuntia.”",
          eiRiita: "”Projekti meni hyvin, ja opin paljon.” Siinä ei ole yhtään omaa esimerkkiä."
        }
      }
    }
  },

  /* ---- opettajan aineisto: paperinen työpaketti, dokumentointipohjat ja näyttösuunnitelma ---- */
  opettaja: {
    jakso: "Työviikot 1–18",
    deadline: "työviikon 18 lopussa",
    kansiKuvaus: "Kolme Unity-peliprototyyppiä pelimusiikin kurssille, parityönä",
    kansiHuomiot: [
      "Aikataulu on muokattava ehdotus. Työviikot ovat parin omasta aloituksesta, eikä paketissa ole kalenteripäivämääriä.",
      "Repositoryyn ei laiteta henkilötietoja, salasanoja eikä muiden ihmisten nimiä. Henkilöistä kirjataan vain rooli.",
      "Rasti tässä vihossa tai sivustolla ei ole palautus: työnäyte on aina parin yhteisessä Git-repositoryssa."
    ],
    viimeisetPaivat: [
      ["Päivä 1", "Oma näyttömatriisi täsmälinkein"],
      ["Päivä 2", "Oman 8–10 minuutin esittelyn valmistelu"],
      ["Päivä 3", "Harjoittelu parin kanssa ja muutoksen kokeilu omaan koodiin"],
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
      testiLuokat: "Testitapauksia on vähintään 21: seitsemän jokaisesta pelistä (käynnistys, ohjausohje, päämekaniikka, visuaalinen palaute, kierroksen päättyminen, uudelleenaloitus ja paluu alkuvalikkoon). Lisäksi testataan toistuvat kierrokset, rajatapaukset ja koottu peliversio. Kirjaa jokaiselle testin tekijä ja odotettu tulos ennen ajoa.",
      ketjuja: 4,
      lisenssiVko: 5
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma – ProtoPaja",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena. Aikataulu ja ohjausvastuut ovat ehdotuksia, jotka vahvistetaan aloituksessa.",
      kohde: [
        "Näyttö toteutetaan oppilaitosympäristössä ohjattuna projektinäyttönä parityönä. Näyttömatriisi on koottu Tieto- ja viestintätekniikan perustutkinnon voimassa olevasta perusteesta (perusteId 9816282, diaarinumero OPH-6216-2025). Matriisin kolmen tutkinnon osan vaatimukset ovat sanatarkasti samat myös aiemmassa perusteessa OPH-4948-2021 (perusteId 7861752). Kummankin opiskelijan perusteversio ja suoritettavat tutkinnon osat vahvistetaan opiskelijakohtaisesti ennen näyttöä.",
        "Mahdolliset tutkinnon osat: Ohjelmointi (45 osp, 11 osaamisvaatimusta), Ohjelmistokehittäjänä toimiminen (45 osp, 14 osaamisvaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 osaamisvaatimusta), yhteensä 32 osaamisvaatimusta. Vaatimuksia ei jaeta parin kesken: kumpikin näyttää kaikki omien osiensa vaatimukset omalla työllään. Vastuutaulukko (project-docs/vastuutaulukko.md) vaihtaa osa-alueet pelien välillä niin, että kumpikin tekee jokaista osa-aluetta vähintään kerran.",
        "Pari toteuttaa 18 työviikon aikana Unityllä ja C#:lla kolme pientä peliprototyyppiä oppilaitoksen pelimusiikin kurssin harjoitusmateriaaliksi. Asiakkaat ovat Caito ja Toni, ohjaajat Matti ja Antti. Musiikkikurssin opiskelijat tekevät peleihin äänet; näyttöprojektin tekijät eivät tee äänentoistokoodia, vaan pelit toimivat ilman ääniä ja äänitapahtumat dokumentoidaan. Unity on tässä ohjelmistokomponenttikirjasto: pelit kootaan sen valmiista ja omista komponenteista."
      ],
      p0: "Perustavoite: kolme prototyyppiä, joissa jokaisessa on päämekaniikka ja ydinsilmukka, yksi pieni kenttä ja 1–3 minuutin kierros, yhtenäiset grafiikat, alkuvalikko ohjausohjeineen, selkeä kierroksen päättyminen, uudelleenaloitus ja paluu alkuvalikkoon, visuaalinen palaute sekä testattu peliversio ja muokattava Unity-projekti. Lisätavoitteet (neljäs ja viides peli) vain, kun kolme on testattu ja luovutuskunnossa ja ohjaaja on hyväksynyt lisätyön; ne eivät ole sivuston työvaiheita.",
      roolit: [
        ["Opiskelijat (pari)", "Toteuttavat pelit, tekevät yhteiset ja omat perustellut päätöksensä, testaavat toistensa työn, kirjaavat työajan ja tehtävät sekä kokoavat kumpikin oman näyttöaineistonsa."],
        ["Ohjaajat Matti ja Antti (ehdotus)", "Seuraavat viikoittain etenemistä, työnjakoa ja tuen tarvetta. Päättävät Unity-versiosta, tekoälyn käytön pelisäännöistä, repositoryn julkisuudesta ja perusteversiosta, nimeävät vastaanottotestaajan ja korvaavat poissaolevan katselmoijan."],
        ["Asiakkaat Caito ja Toni (ehdotus)", "Vahvistavat aiheet ja kohdealustan sekä arvioivat sovituissa välikatselmoinneissa (työviikot 6 ja 12) tuotosten soveltuvuutta musiikkikurssille. Vastaanottavat luovutuspaketin työviikolla 17."],
        ["Vastaanottotestaaja (työviikko 16)", "Projektin ulkopuolinen henkilö, jonka ohjaaja nimeää viimeistään työviikolla 12. Avaa projektit ja käynnistää pelit pelkän kirjallisen ohjeen avulla ilman suullista apua."],
        ["Arvioija", "Ottaa vastaan kummankin oman 8–10 minuutin esittelyn työviikolla 18, pyytää muutoksen opiskelijan omaan koodiin ja käy läpi opiskelijan oman näyttömatriisin täsmälinkkeineen."]
      ],
      tarkistuspisteet: [
        [1, "Yhteinen repository", "Kummankin oma commit, toisen muutos haettu omalle koneelle, .gitignore oikeassa kansiossa, repository yksityinen kunnes julkisuudesta on päätetty."],
        [2, "Suunnitelma ja vastuutaulukko", "Kolmen pelin pienimmät toimivat versiot, projektijaon vertailu omin mittauksin, ensimmäisen pelin kortit arvioineen ja vastuutaulukko, jossa jokainen osa-alue on kummallakin."],
        [3, "Tekninen pohja", "Build käynnistyy sovitulla alustalla, kummankin oma yhdistämiscommit ristiriitaharjoituksesta ja oma osa päämekaniikasta."],
        [6, "Asiakaskokeilu 1", "Kokeiluversio (tag v0.1), palaute asiakkaan sanoin erillään tulkinnasta, palautekortit, kummankin arvio–toteumavertailu ja Unity-havainnot."],
        [9, "Vertaisarvio", "Kummankin vertaisarvio parin osista ja kummankin ensimmäinen virheenkorjausketju; kolmannen pelin rajaus."],
        [12, "Asiakaskatselmointi", "Kaikki kolme peliä kokeiltu (tag v0.2), korjausten järjestys sovittu, vastaanottotestaaja nimetty, kummankin aukkolista näyttömatriisista."],
        [14, "Testitulokset", "Vähintään seitsemän testitapausta peliä kohden, koottujen versioiden testit, rajatapaukset ja kummankin tietoturva-arvio."],
        [16, "Vastaanottotesti", "Luovutusehdokas (tag v0.9), testaajan havainnot hänen sanoinaan ja havaintojen käsittely."],
        [17, "Luovutus", "Luovutusversio (tag v1.0), luovutuslistan kohdat, asiakkaiden kuittaus ja kummankin oman työn kuvaus."],
        [18, "Näyttö", "Oma näyttömatriisi täsmälinkein, esittely, muutos ohjaajan pyynnöstä ja itsearviointi."]
      ],
      tyonaytteet: {
        p1: ["1, 3", "Oma Unity-asennus ja versiotiedot, oma muutos kokeiluprojektiin ja oma skripti kokeilukenttään"],
        p2: ["9, 13, 16", "Kummankin vähintään kaksi virheenkorjausketjua oman koodin virheestä: havainto, toistamisohje, syy, korjauscommit, uusintatesti ja regressiotesti"],
        p3: ["4, 8, 14", "Testimatriisin testitapaukset, joissa opiskelija on testin tekijä: odotettu tulos ennen ajoa, parin osien testaus ja koottujen versioiden testit"],
        p4: ["4, 7, 10", "Omat skriptit päämekaniikkaan ja kierroksen logiikkaan: metodit, ehdot, silmukat ja kentät, esimerkiksi kentän luku datasta silmukoilla"],
        p5: ["8, 15", "Valikon uudelleenkäyttö prefabina, toiston poisto omaan metodiin ja oman koodin siistiminen nimineen ja alkukommentteineen"],
        p6: ["5, 8, 11", "Oma käyttöliittymäosa vastuutaulukon mukaan: alkuvalikko ja ohje tai loppuruutu, uudelleenaloitus ja palaute suunnitelman mukaan"],
        p7: ["4, 7, 10", "Oma osa päämekaniikasta ja kierroksesta suunnitelman ja kortin odotetun tuloksen mukaan"],
        p8: ["2, 4, 7", "Vastuutaulukko, tehtävätaulun kortit vastuuhenkilöineen ja jokaisen toteutusviikon kahden osan sopiminen"],
        p9: ["2, 3", "Projektijaon vertailu omin mittauksin ja ristiriitaharjoitus, jossa kumpikin ratkaisee ristiriidan"],
        p10: ["9, 14", "Vertaisarvio parin osista ja toistensa pelien testaus koottuina versioina"],
        p11: ["12, 18", "Aukkolista ja kolmen virkkeen arvio omasta toiminnasta työviikolla 12 sekä itsearviointi täsmälinkein työviikolla 18"],
        s1: ["1, 2", "Kysymyslista asiakkaille ja ohjaajille vastauksineen ja aiheiden vahvistuspyyntö asiakkaille"],
        s2: ["6, 12, 15", "Esittely asiakkaille ilman teknistä sanastoa (roolit vaihtuvat työviikkojen 6 ja 12 välillä) ja oma osuus jatkotyöstöohjeesta"],
        s3: ["6, 12", "Asiakaskokeilu ja asiakaskatselmointi: toinen esittelee ja toinen kirjaa palautteen asiakkaan sanoin, roolit vaihtuvat"],
        s4: ["2, 6, 12", "Pienimmän toimivan version rajaus, palautekorttien järjestys ja korjausten järjestys asiakkaiden kanssa"],
        s5: ["2", "Ensimmäisen pelin toiminnot tehtävätaulun korteiksi valmis kun -ehtoineen"],
        s6: ["2, 6", "Tuntiarviot korteissa ja oma arvio–toteumavertailu työaikataulukosta"],
        s7: ["4, 11", "Kierroksen päättymisen logiikka, ratkaisun tunnistus tai ajastin voitto- ja häviöehtoineen, loppu vain kerran"],
        s8: ["7", "Sama kenttä kahdella tallennustavalla (ScriptableObject ja tekstitiedosto tai JSON), muutoskokeilu ja perusteltu valinta päätöslokissa"],
        s9: ["7, 8, 10", "Kentän luku datasta, alkutilanteeseen palautus samasta datasta tai kolmannen pelin asetukset datasta; kumpikin tekee vähintään yhden"],
        s10: ["7, 10", "Unityn API:n käyttö (esimerkiksi Physics2D, SceneManager, JsonUtility) ja datan käsittely virheellisen syötteen kestävästi"],
        s11: ["14", "Oma tietoturva-arvio: luovutettavien tiedostojen tarkistus, ulkoisten pakettien alkuperä ja testitapaus virheellisellä datalla"],
        s12: ["1, 17", "Kummankin commitit koko projektin ajan, versiomerkinnät v0.1, v0.2, v0.9 ja v1.0"],
        s13: ["3, 5", "Oma yhdistämiscommit ristiriitaharjoituksesta ja oman prefabin tai scene-osan liittäminen parin muutosten päälle yhteiseen versioon"],
        s14: ["17", "Oman pelin luovutusbuild puhtaasta kloonista, nimetty paketti ja luovutus asiakkaille sovitulla tavalla"],
        k1: ["1, 3", "Unity Hub, sovittu versio ja moduulit, projektin luonti ja versionhallinta-asetukset (Force Text, Visible Meta Files)"],
        k2: ["6", "Kolme omaa havaintoa Unityn mahdollisuuksista ja rajoitteista commit-linkkeineen tai kuvakaappauksineen"],
        k3: ["4, 7, 10", "Komponentit, colliderit ja triggerit, Rigidbody 2D, Canvas ja painikkeet, prefabit ja Build Profiles omissa osissa"],
        k4: ["5, 7, 10", "Grafiikkapaketin tuonti ja käyttöehtojen tarkistus vastuutaulukon mukaan (grafiikkavastaava vaihtuu), Input System -paketti"],
        k5: ["2, 8, 11, 14", "Pelien suunnittelu, toteutus omina osina ja testaus koottuina versioina komponenttikirjastoa käyttäen"],
        k6: ["17", "Oman pelin build asiakkaan alustalle puhtaasta kloonista ja sen testaus ilman editoria"],
        k7: ["15", "Oma osuus avaamis- ja jatkotyöstöohjeesta, kokeiltu parilla ja työviikolla 16 ulkopuolisella"]
      },
      dokumentaatio: {
        kayttajalle: "Kansio docs/: avaaminen ja jatkotyöstö, äänitapahtumat, assetit ja lisenssit, testitulokset ja tiedossa olevat puutteet sekä tekijät ja oma työ. Kohdeyleisö on pelimusiikin kurssin opiskelija ja opettaja.",
        arviointiin: "Kansio project-docs/: kysymykset, suunnitelma, päätösloki, vastuutaulukko, testimatriisi, asiakaspalaute ja vastaanottotesti. Kummankin oma kansio project-docs/omat/: projektipäiväkirja ja AI-loki, Unity-havainnot, vertaisarvio, aukkolista, tietoturva-arvio, oma näyttömatriisi, esittely ja itsearviointi.",
        vaatimus: "Ohjeen laatu mitataan työviikolla 16: projektin ulkopuolinen henkilö avaa projektit ja käynnistää pelit pelkän kirjallisen ohjeen avulla, ilman suullista apua."
      },
      tekoaly: [
        "Tekoälyn käytön pelisäännöt sovitaan ohjaajien kanssa projektin alussa, eikä sääntöjä kopioida toisesta projektista. Sivusto olettaa, että käyttö voidaan sallia apuvälineenä, mutta ydinosaaminen tehdään itse: kumpikin kirjoittaa, selittää ja muuttaa omat skriptinsä. Jos käyttö sallitaan, merkittävästä käytöstä kirjataan kysymys tai tarve, käytetty apu, oma muutos ja tarkistustapa.",
        "Jokainen viikko vaatii jotain, mitä kielimalli ei tuota: oman repositoryn commitit ja niiden tekijätiedot, Play-tilan ja buildin kokeilut, omat mittaukset ja testitulokset, asiakkaiden ja vastaanottotestaajan sanat sekä työviikon 18 muutoksen omaan koodiin arvioijan nähden."
      ],
      palautuspaketti: [
        ["Asiakkaille luovutettava paketti", "Kolme pelattavaa versiota sovitulle alustalle, muokattavat Unity-projektit, tieto Unity-versiosta ja kansio docs/ (ohjeet, äänitapahtumat, assetit ja lisenssit, testitulokset ja puutteet, tekijät)."],
        ["Yhteinen repository", "Unity-projektit, docs/ ja project-docs/ sekä versiomerkinnät v0.1, v0.2, v0.9 ja v1.0."],
        ["Kummankin oma kansio", "project-docs/omat/OMA-KANSIO: projektipäiväkirja ja AI-loki, oma näyttömatriisi täsmälinkein, itsearviointi ja muut omat dokumentit. Ei asiakkaan pakettiin, ellei toisin sovita."],
        ["Työaikataulukko ja tehtävätaulu", "Yhteinen Excel-taulukko opiskelijakohtaisine riveineen ja tehtävätaulu kortteineen sovitussa paikassa."],
        ["Esittely", "Kummankin oma 8–10 minuutin esittely ja muutos omaan koodiin ohjaajan pyynnöstä."]
      ],
      huomiot: [
        ["Aikataulu ja vastuut ovat ehdotuksia", "Aloituspäivää, viikkotuntimäärää ja palautuspäivää ei ole määritelty. Ohjaajat sovittavat työmäärän lähtötasoon ja aikaan. Asiakaskatselmointien ajat työviikoilla 6 ja 12 ovat alustavia."],
        ["Siirrettävät työvaiheet", "Jos viikkotunnit eivät riitä, nämä voi siirtää viikolla eteenpäin ilman että muut viikot rikkoutuvat: 3-5 build työviikolle 4, 6-5 Unity-havainnot työviikolle 9 ja 14-3 rajatapaukset työviikolle 15. Siirto kirjataan päätöslokiin."],
        ["Perusteversio ja tutkinnon osat", "Matriisin 32 vaatimusta ovat sanatarkasti samat perusteissa OPH-6216-2025 ja OPH-4948-2021. Kummankin opiskelijan perusteversio ja suoritettavat osat vahvistetaan opiskelijakohtaisesti, ja oma näyttömatriisi täytetään vain niiltä osin."],
        ["Heikoimmat istuvuudet", "Tietovaraston valinta ja yhteys (s8, s9) toteutetaan pelin kenttä- tai asetusdatana, koska tallennusjärjestelmä on rajattu pois. Tietoturvan arviointi (s11) on paikallisen pelin luovutuspaketin tarkistus. Julkaisu tuotantoympäristöön (s14) tarkoittaa asiakkaan sovittua alustaa. Ohjaajat vahvistavat, riittävätkö nämä."],
        ["Virheenkorjausketjut", "Kumpikin tekee vähintään kaksi ketjua oman koodinsa virheestä (työviikot 9 ja 13). Keksittyjä virheitä ei kirjata: jos aitoa virhettä ei ole, ohjaaja antaa vikatehtävän."],
        ["Selaimen tallennus ei ole yhteinen taulu", "Sivuston rastit, päiväkirja, suunnitelma ja AI-loki tallentuvat kunkin opiskelijan omaan selaimeen. Ohjaajat eivät näe niitä. Yhteinen seuranta on tehtävätaulussa, työaikataulukossa ja repositoryssa."],
        ["Nimet repositoryssa", "Repositoryyn kirjataan henkilöistä vain rooli. Opiskelijoiden tekijänimet ja repositoryn julkisuus sovitaan ohjaajan kanssa työviikolla 1; siihen asti repository on yksityinen."],
        ["Avoimet asiat", "Lähtötaso ja viikkotunnit, kolmen aiheen hyväksyntä, Unity-versio, kohdealusta, projektien tekninen jako, perusteversiot ja henkilökohtaiset osat, tekoälyn käyttö, tehtävätaulu, katselmointien osallistujat ja ajat, repositoryn julkisuus, tekijänimet, lisenssi ja luovutustapa."]
      ]
    }
  }
};
