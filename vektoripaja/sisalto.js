/*
 * sisalto.js – Vektoripajan koko sisältödata.
 *
 * app.js on geneerinen moottori (v2.8) eikä sisällä projektikohtaista tekstiä.
 * Opiskelijalle näkyvä teksti on tässä tiedostossa, index.html:ssä ja
 * kuvakaappaukset.json:ssa.
 *
 * v2.8 selkeysuudistus 5.10.2026 (Matin ja opiskelijan hyväksymä brief): dokumentit ovat
 * repositoryn project-docs-kansiossa, jokainen viittaus on linkki, toistuvat taidot ovat
 * perusohjeissa ja jokainen osatehtävä on muodossa otsikko, missä, tee, näet nyt.
 * tarkista.js tarkistaa tiukassa tilassa (selkeys: "tiukka").
 *
 * Runko: Linnea-portti hyväksyi viikkorungon 23.9.2026 kierroksella 3
 * (material-pipeline-output/vektoripaja/01-runko-v3.md). Ryhmän A tarkennukset
 * on viety tähän sisältöön.
 *
 * Opt-in-ominaisuudet: teema, sykli, josJumissa, viikkorutiini, kuvaohjeet,
 * lyhyetViikot ja poikkeamat. Jakso ylittää vuodenvaihteen: viikot annetaan
 * kalenterijärjestyksessä ja vuosi on [2026, 2027].
 */
/* Kansio, johon opiskelija on kloonannut repositoryn omalla koneellaan (esim. C:\\Users\\nimi\\Documents\\GitHub\\Vektoripaja).
   Tyhjä = ohje neuvoo avaamaan kansion File → Open Recent -listasta. Täydennä, kun polku on tiedossa. */
const KLOONIPOLKU = "";

window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "vektoripaja",
  nimi: "Vektoripaja",
  vuosi: [2026, 2027],
  viikot: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  lomaViikot: [42, 52, 53, 1, 8],
  lyhyetViikot: { 51: 4 },
  tiivisSivupalkki: true,
  aloitusNappi: "Aloita viikosta 40",
  yhtenaisetViikot: true,
  apuOtsikko: "Tarvitsen toteutusapua",

  /* ---- v2.8: selkeys (Matin ja opiskelijan hyväksymä muutosbrief 5.10.2026) ----
     Kirjoitus tehdään vain VS Codessa. Dokumentit ovat valmiina tiedostoina repositoryn
     project-docs-kansiossa (pohjat/python-pohja/project-docs ja pull request opiskelijan
     repositoryyn). Jokainen viittaus on linkki, ja tarkista.js vahtii tiukassa tilassa. */
  selkeys: "tiukka",
  dokumentitRepossa: true,
  /* Oma repository: opiskelija tallentaa osoitteen selaimeen ensimmäisestä GitHub-linkistä. Sivulla ei ole kenenkään osoitetta. */
  repo: "oma",
  nakymaNimet: { kaytto: "Projektin kokonaiskuva", toimeksianto: "Toimeksianto", tyotapa: "Työtapa", termit: "Termit", suunnitelma: "Suunnitelma", paivakirja: "Projektipäiväkirja", ailoki: "AI-loki", naytto: "Näyttömatriisi", galleria: "Galleria" },
  perusohjeetJohdanto: "Nämä taidot toistuvat joka viikko. Viikon työvaiheessa on linkki siihen ohjeeseen, jota tarvitset. Linkki avaa ohjeen, ja Palaa-painike vie takaisin työvaiheeseen.",
  tiedostokortitJohdanto: "Jokainen dokumentti on valmiina tiedostona repositoryn kansiossa project-docs. Kirjoitat sen VS Codessa ja tallennat GitHubiin commitilla ja pushilla. Tiedostokortti kertoo, mitä tiedostoon kirjoitetaan ja milloin.",

  /* Tietoiset mitoituspoikkeamat (tarkista.js raportoi INFO-rivinä). */
  poikkeamat: {
    vaiheita: "viisi vaihetta: vaihe A on harjoitusvaihe, ja viikot 43–51 olisivat yhtenä vaiheena liian pitkä (Linnea r1–r3)",
    viikon43tehtavat: "viikolla 43 on yhdeksän työvaihetta: yhdistelmätehtävät jaettiin yhden asian rasteiksi (Linnea r3, B3), ja selkeysuudistuksessa 5.10.2026 liian pitkät työvaiheet jaettiin niin, että yhdessä työvaiheessa on enintään kahdeksan yhden toimenpiteen osatehtävää"
  },

  paletti: {
    aksentti: "#1fa4e3",
    aksenttiTumma: "#0e6f9e",
    taulukkoSavy: "#e6f4fb",
    riviSavy: "#f3fafd"
  },

  lataukset: {
    tehtavaNumero: (i, n) => `Työvaihe ${i} / ${n}`,
    /* moottori v2.7: työpaketin aloitusosion tekstit datasta (ennen kovakoodattuina moottorissa) */
    aloitusVaiheetOtsikko: () => "Projektin viisi vaihetta",
    aloitusHuomio: "Tee viikon työvaiheet järjestyksessä. Kun rakennat muutosta sovellukseen, tee siitä tehtäväkortti GitHub-issueen ja käytä työsykliä. Kirjaa testitulos issueen ja viikon kirjaus tiedostoon project-docs/projektipaivakirja.md.",
    /* v2.8: linkit paperilla ja dokumentit repositoryssä */
    sivustonOsoite: "https://mattiseise.github.io/projektikoontisivu/vektoripaja/",
    kansiJohdanto: "Tämä paketti on aikataulu ja tarkistuslista tilanteisiin, joissa sivusto ei ole auki. Dokumentit kirjoitetaan VS Codessa repositoryn tiedostoihin, esimerkiksi project-docs/projektipaivakirja.md. Rasti tässä vihossa ei ole palautus: työ on aina Git-repositoryssa.",
    selainHuomio: "Muista: sivuston rastit tallentuvat vain selaimeen. Ne eivät siirry ohjaajalle eivätkä korvaa Gitissä olevaa työtä.",
    dokumentointipohjatJohdanto: (nimi) => `${nimi} · opettajan dokumentointipohjat paperille. Opiskelijan dokumentit ovat valmiina repositoryn tiedostoina, esimerkiksi project-docs/katselmointi.md ja project-docs/julkaisutesti.md.`
  },

  /* ---- opiskelijan teema (brief 6.1). Teematesti hyväksytty 23.9.2026: yksi väri ja tilasymbolit. ---- */
  teema: {
    tausta: "#000000",
    teksti: "#1fa4e3",
    otsikot: "#1fa4e3",
    korostus: "#1fa4e3",
    korostusTeksti: "#000000",
    kehys: "#1fa4e3",
    fontti: "Arial, sans-serif",
    perusfontti: "1.5rem",
    kirjainvali: "1px",
    sanavali: "0.3rem",
    rivikorkeus: 1.6,
    rivinPituus: "60ch",
    reuna: "2px",
    fokus: "3px",
    yksiPalsta: true,
    tilaTekstit: true,
    tuloste: { tausta: "#ffffff", teksti: "#000000", otsikot: "#000000", koko: 18 }
  },

  tekstit: {
    progressCopy: (done, total) => `${done} / ${total} työvaihetta`,
    resumeTask: (i, n) => `työvaihe ${i} / ${n}`,
    resumeDone: "Kaikki työvaiheet valmiina",
    exampleLabel: "✓ Esimerkki riittävästä tarkkuudesta",
    notEnoughLabel: "✗ Tämä ei vielä riitä",
    tasksLead: "Tee viikon työvaiheet järjestyksessä. Rastita osatehtävä, kun sen Näet nyt -kohta pitää paikkansa. Työvaihe on valmis, kun kaikki sen osat on rastitettu. Kun rakennat muutosta sovellukseen, käytä työsykliä.",
    taskNumber: (i, n) => `Työvaihe ${i} / ${n}`,
    taskOpenAll: "Avaa kaikki työvaiheet",
    taskOpenCurrent: "Näytä seuraava työvaihe",
    goalNote: "Havainnekuva näyttää käyttäjän työnkulun. Se ei ole kuvakaappaus valmiista sovelluksesta.",
    goalListLabel: "Käyttäjän työnkulku",
    cycleRoundDoneText: "Kortti on valmis. Jatka tämän viikon seuraavaan työvaiheeseen. Viikon kirjaus kirjoitetaan viikon viimeisenä työpäivänä.",
    stepsLead: (n) => `${n} askelta · tee järjestyksessä`,
    /* v2.8: sivulla ei ole lomakkeita. Siirtonappi näkyy vain, jos selaimen muistissa on vanhaa tekstiä. */
    migrateLead: "Sivulla ei enää ole lomakkeita. Tämän selaimen muistissa on tekstiä, jonka kirjoitit sivun lomakkeisiin ennen 5.10.2026. Siirrät sen tiedostoihin viikon 41 työvaiheessa 2. Painike lataa kaikki tekstit yhtenä tiedostona. Mitään ei poisteta.",
    taskHelpNote: "avaa, jos tarvitset apua",
    helpNote: "Jos käytit tekoälyä, kirjaa se tekoälyn käytön lokiin: työsyklissä askeleessa 6, muuten samana päivänä.",
    migrateButton: "Lataa selaimen muistin tekstit",
    resetConfirm: () => "Nollataanko tästä selaimesta rastit, työsyklin askeleet ja näyttömatriisin merkinnät? Repositoryn tiedostot eivät muutu. Nollaus poistaa myös selaimen muistiin jääneen lomaketekstin. Siirrä se ensin tiedostoihin viikon 41 työvaiheessa 2."
  },

  lopputulos: {
    otsikko: "Piirroksesta muokattavaksi 3D-malliksi",
    kuvaus: "Piirrät Inkscapessa. Vektoripaja tekee piirroksesta 3D-kappaleita, joita käyttäjä voi muokata ja tallentaa. Valmis malli viedään Blenderiin .obj-tiedostona.",
    naytaKuvaus: false,
    kuva: "assets/piirroksesta-malliksi.svg", leveys: 1080, korkeus: 540,
    alt: "Kolme vaihetta: Inkscapessa piirretty puoliprofiili, siitä tehty särmikäs maljakko Vektoripajassa ja sama 3D-malli vietynä Blenderiin.",
    kohdat: [
      { n: 1, teksti: "Piirrä lähtökuva Inkscapessa ja tallenna se SVG-tiedostona." },
      { n: 2, teksti: "Avaa kuva Vektoripajassa. Muodosta 3D-kappaleet, muokkaa osia ja tallenna työ." },
      { n: 3, teksti: "Vie valmis malli .obj-tiedostona Blenderiin tai toiseen 3D-ohjelmaan. .obj-tiedosto on 3D-mallin tiedostomuoto." }
    ]
  },

  /* ---- vaiheet ---- */
  vaiheet: [
    { tunnus: "1", lyhyt: "Valmistelu", otsikko: "Valmistellaan työkalut ja työtapa", kuvaus: "Viikot 40–41: työkalut ja kuutioharjoitus. Opit tekemään, testaamaan ja julkaisemaan. Syysloma viikolla 42.", viikot: [40, 41, 42], vari: "#1fa4e3" },
    { tunnus: "2", lyhyt: "3D-malli", otsikko: "Rakennetaan piirroksesta 3D-malli", kuvaus: "Viikot 43–47: piirroksen tuonti, osat, muodot ja muokkaaminen. Pakollisen ytimen toiminnot syntyvät.", viikot: [43, 44, 45, 46, 47], vari: "#1fa4e3" },
    { tunnus: "3", lyhyt: "Kokeiltava versio", otsikko: "Tehdään ensimmäinen toimiva versio", kuvaus: "Viikot 48–51: kiertopiste, vienti, tallennus ja asiakkaiden kokeilu. Joululoma viikoilla 52–1.", viikot: [48, 49, 50, 51, 52, 53, 1], vari: "#1fa4e3" },
    { tunnus: "4", lyhyt: "Parannukset", otsikko: "Parannetaan asiakkaiden palautteen perusteella", kuvaus: "Viikot 2–5: korjaukset ja sovitut jatkotoiminnot. Palaute ohjaa seuraavia muutoksia.", viikot: [2, 3, 4, 5], vari: "#1fa4e3" },
    { tunnus: "5", lyhyt: "Julkaisu ja näyttö", otsikko: "Julkaisu ja näyttö", kuvaus: "Viikot 6–9: julkaisutesti, v1.0 ja esittely. Talviloma viikolla 8, näyttö viikolla 9.", viikot: [6, 7, 8, 9], vari: "#1fa4e3" }
  ],

  /* ---- viikkonavigaation lyhyet nimet ---- */
  viikkoNimet: {
    40: "Aloitus: työkalut ja projektin rajaus",
    41: "Harjoitus: pyörivä kuutio julki",
    42: "Syysloma",
    43: "Piirroksen tuonti (SVG)",
    44: "Piirroksen ryhmistä mallin osiksi",
    45: "Profiilista pyörähdyskappale (revolve)",
    46: "Viivasta putki ja mallin näkymät",
    47: "Osien siirto, kierto ja skaalaus",
    48: "Kiertopisteen säätäminen (pivot)",
    49: "Mallin vienti Blenderiin (OBJ)",
    50: "Tallennus ja ensimmäinen toimiva versio",
    51: "Asiakkaat kokeilevat ensimmäistä versiota",
    52: "Joululoma",
    53: "Joululoma",
    1: "Joululoma",
    2: "Paluu ja parannusten järjestys",
    3: "Muokatun piirroksen päivittäminen",
    4: "Puutteet ja sovitut parannukset",
    5: "Selkeät säätimet ja näppäimistökäyttö",
    6: "Julkaisun kokeilu toisella koneella",
    7: "Valmis sovellus v1.0",
    8: "Talviloma",
    9: "Projektin esittely ja luovutus"
  },

  /* ---- viikkotyyppien kehystekstit ---- */
  kehykset: {
    pohjustus: { kicker: "Viikon jälkeen", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    feature: { kicker: "Viikon tulos", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    katselmointi: { kicker: "Katselmointi", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    julkaisu: { kicker: "Julkaisuviikko", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" },
    naytto: { kicker: "Näyttöviikko", connectionLabel: "Mihin tämä liittyy:", deliverableLabel: "Tällä viikolla valmistuu", skillsLabel: "Viikon osaaminen: arvioidaan näytössä" }
  },

  /* ---- viikkorutiini: sama joka viikko (runko v3 § 6.1). ensin: rutiini näkyy ennen työvaiheita.
     vainTyosykli: kohta näkyy vain viikoilla, joilla on työsyklitehtävä (moottori v2.8). ---- */
  viikkorutiini: {
    otsikko: "Viikkorutiini: palaveri ja kirjaus",
    ensin: true,
    johdanto: "Nämä rastit eivät ole viikon työvaiheita. Tee maanantain Copilot- ja krediittikohdat ennen työvaihetta 1. Viikkopalaveri on maanantaina tai tiistaina. Jos viikon työvaiheessa on palaverin osatehtävä, tee palaveri siinä kohdassa ja rastita rutiinin palaverikohta samalla. Muut työvaiheet voit aloittaa ennen palaveria. Tee viimeisen työpäivän kohta viikon lopussa.",
    kohdat: [
      { milloin: "Maanantai", vainTyosykli: true, teksti: "Avaa [Microsoft 365 Copilot](https://m365.cloud.microsoft/chat) ja aloita uusi keskustelu: [[kuvaohje:copilot-uusi-keskustelu]]. Liitä siihen tilatiedosto PROJEKTIN-TILA.md: [[kuvaohje:copilot-tilatiedosto]]. Älä lähetä vielä viestiä. Pidä välilehti auki: työsyklin askeleessa 1 jatkat tässä keskustelussa. Jos suljet välilehden, liität tiedoston uudelleen askeleessa 1. Jos tiedostoa PROJEKTIN-TILA.md ei vielä ole koneellasi, tee tämä kohta työsyklin askeleessa 1." },
      { milloin: "Maanantai", vainTyosykli: true, teksti: "Katso krediittien kulutus. Ohje: [[ohje:krediitit]]. Kirjoita luku paperille. Kirjaat sen viikon kirjaukseen kohtaan Mitä tein ja miten?, esimerkiksi Krediitit maanantaina: 14 % käytetty." },
      { milloin: "Maanantai tai tiistai", teksti: {
        funktio: "Käy viikkopalaveri ohjaajan kanssa. Selitä ääneen edellisen työviikon (viikko {edellinenViikko}) funktio: {edellinenFunktio}. Kysy, onko viikon työvaiheissa jotain, mitä pitää sopia. Sopimus kirjataan issueen kommenttina Sovittu viikkopalaverissa pp.kk. (työsyklin askel 2 tai viikon työvaihe kertoo issuen).",
        eiFunktiota: "Käy viikkopalaveri ohjaajan kanssa. Edellisellä työviikolla ei ollut selitettävää funktiota: kerro, mitä teit ja mihin jäit. Kysy, onko viikon työvaiheissa jotain, mitä pitää sopia. Sopimus kirjataan issueen kommenttina Sovittu viikkopalaverissa pp.kk. (työsyklin askel 2 tai viikon työvaihe kertoo issuen)."
      } },
      { milloin: "Viikon viimeinen työpäivä", teksti: "Kirjoita viikon kirjaus tiedostoon [[tiedosto:projektipaivakirja|projektipaivakirja.md]]. Ohje on viikon sivun kohdassa Viikon kirjaus." }
    ]
  },

  /* ---- "Jos et tiedä, mitä tehdä": sama joka viikko (runko v3 § 6.2) ---- */
  josJumissa: {
    otsikko: "Jos et tiedä, mitä tehdä",
    johdanto: "Käy kysymykset läpi järjestyksessä. Kun kysymys sopii tilanteeseesi, toimi sen ohjeen mukaan.",
    kohdat: [
      { kysymys: "1. Onko viikon työvaiheissa rastittamaton osatehtävä?", ohje: "Jatka ensimmäisestä rastittamattomasta osatehtävästä. Jos se on työsyklin askel, avaa [[github:issues?q=is%3Aissue+is%3Aopen+label%3Ateht%C3%A4v%C3%A4kortti|avoimet tehtäväkortit]] ja kortin issue. Jatka ensimmäisestä askeleesta, jonka rasti puuttuu issuen kohdasta Sykli." },
      { kysymys: "2. Kaikki osatehtävät on rastitettu, mutta viikkoa on jäljellä?", ohje: "Jos viikolla on kohta Lisätehtävä, tee se. Jos ei ole, lähetä ohjaajalle Teams-viesti ja kysy lisätehtävää. Ohje: [[ohje:teams]]." },
      { kysymys: "3. Viikko loppuu, ja työ on kesken?", ohje: "Kirjoita viikon kirjaukseen kohtaan Mitä tein ja miten?, mihin jäit. Jos viikolla on työsykli, kirjoita sama tilatiedoston PROJEKTIN-TILA.md kohtaan Seuraavana. Tee commit ja push. Ohje: [[ohje:commit]]. Ohjaaja päättää jatkosta seuraavan viikon palaverissa." },
      {
        kysymys: "4. Mikään kohdista 1–3 ei auta?",
        ohje: "Lähetä ohjaajalle Teams-viesti tällä pohjalla. Ohje: [[ohje:teams]].",
        pohja: { otsikko: "Viesti ohjaajalle", teksti: "Hei, olen jumissa viikolla {viikko}.\nYritin: \nJäin kohtaan: \nRuudulla näkyy: " }
      }
    ]
  },

  /* ---- työsykli: sama joka tehtäväkortissa (brief 5.1–5.2, runko v3 § 5) ---- */
  sykli: {
    otsikko: "Työsykli",
    johdanto: "Yksi kierros on yksi GitHub-issueen kirjattu tehtäväkortti. Kun aloitat uuden kortin, valitse askelpalkista 1 Suunnittele. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros. Kun askel on tehty, valitse askeleen lopussa Tein tämän · seuraava askel. Palaa sitten työvaiheeseen painikkeella Palaa työvaiheeseen ja rastita osatehtävä. Työsykli muistaa askeleen, johon jäit: kun avaat sen uudelleen työvaiheen painikkeesta Käytä työsykliä tämän muutoksen tekemiseen, se aukeaa samaan askeleeseen.",
    askeleet: [
      {
        nimi: "Suunnittele",
        paikka: "selain",
        tyokalu: "Copilot (Microsoft 365, BC:n tunnus)",
        oma: "täytät viestipohjaan ne kohdat, jotka työvaihe käskee: ehdotuksen, testien odotetut tulokset ja funktion kortissa rajapinnan. Rastitat askeleen 1 issuessa vasta askeleessa 2.",
        ohje: [
          "Avaa [Microsoft 365 Copilot](https://m365.cloud.microsoft/chat) selaimessa. Kirjaudu BC:n tunnuksella, jos sivu pyytää.",
          "Jos teit tällä viikolla viikkorutiinin maanantain Copilot-kohdan, jatka siinä keskustelussa ja siirry kohtaan, joka alkaa sanoilla Kopioi viestipohja. Muuten aloita uusi keskustelu: [[kuvaohje:copilot-uusi-keskustelu]].",
          "Liitä keskusteluun tilatiedosto `PROJEKTIN-TILA.md`. Se on repositorysi kansion juuressa: [[kuvaohje:copilot-tilatiedosto]].",
          "Tarkista, että viestikentän yläpuolella näkyy liite PROJEKTIN-TILA.md. Jos ei näy tai muutit tiedostoa liittämisen jälkeen, liitä se uudelleen.",
          "Kopioi viestipohja Kopioi-painikkeella. Napsauta Copilotin viestikenttää ja paina Ctrl+V.",
          "Täytä ne ___-kohdat, jotka työvaihe käskee: maalaa ___ ja kirjoita tilalle. Jätä muut ennalleen: Copilot ohittaa rivit, joissa on vielä ___. Uusi rivi tehdään näppäimillä Shift+Enter, koska pelkkä Enter lähettää viestin.",
          "Lähetä viesti painamalla Enter. Tarkista, että vastauksen kortissa on kuusi otsikkoa sekä osiot Oma tarkistus ja Sykli."
        ],
        pohja: {
          otsikko: "Täytä ja liitä tämä Copilotiin",
          teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko {viikko}: {nimi}\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti tekee vain ___\nKaista (jos työvaihe kertoo): ___\nRajapinta (vain funktion kortissa): funktio ___ saa ___ ja palauttaa ___\nTesti ___: kun syöte on ___, tuloksen pitää olla ___.\nTesti ___: kun syöte on ___, tuloksen pitää olla ___.\nTesti ___: kun syöte on ___, tuloksen pitää olla ___.\nLisäksi: ___\n\nOhita rivit, joissa on vielä ___. Kirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista (Tiedosto, Täydennys tai Agentti) ja perustelu\n## Tiedostot\n## Älä tee (testitiedostot aina tässä)\n## Hyväksymiskriteerit\n## Testi: numero ja nimi, syöte ja odotettu tulos\n## Oma tarkistus\nMuutin kortista ___ / En muuttanut, koska ___\n## Sykli\n- [ ] 1 Suunniteltu\n- [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu\n- [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu\n- [ ] 5 Raportoitu\n- [ ] 6 Kirjattu\n\nKirjoita rajapinta kohdan ## Tavoite loppuun. Jos en kertonut kaistaa, valitse se ja perustele. Kirjoita kaksi viimeistä osiota sellaisinaan. Käytä minun odotettuja tuloksiani sanatarkasti. Älä kirjoita koodia."
        },
        valmis: "kortissa on kuusi otsikkoa, ja testeissä ovat sinun odotetut tuloksesi.",
        jumissa: [
          { kysymys: "Copilot kirjoitti koodia eikä korttia?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Pyydä korttia uudelleen", teksti: "Älä kirjoita koodia. Kirjoita vain tehtäväkortti pyytämässäni muodossa." } },
          { kysymys: "Copilot muutti odotetun tulokseni?", ohje: "Kopioi tämä Copilotille ja liitä oma tulos sen loppuun:", pohja: { otsikko: "Palauta oma odotettu tulos", teksti: "Käytä testissä minun odotettua tulostani sanatarkasti: " } },
          { kysymys: "Kortista puuttuu jotain?", ohje: "Kopioi tämä Copilotille ja kirjoita puuttuva asia sen loppuun:", pohja: { otsikko: "Pyydä lisäys korttiin", teksti: "Lisää korttiin tämä ja anna koko kortti uudelleen samassa muodossa: " } },
          { kysymys: "En osaa kirjoittaa odotettua tulosta?", ohje: "Kirjoita, mitä ruudulla pitää näkyä, kun kortti on valmis. Esimerkiksi: \"Kun käynnistän sovelluksen, kuutio pyörii.\" Luku tai näkyvä asia riittää." },
          { kysymys: "Kortti tuntuu liian isolta?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Pyydä pienempi kortti", teksti: "Kortti on liian iso. Jaa se kahteen korttiin ja anna nyt vain ensimmäinen." } },
          { kysymys: "Copilot ei aukea tai tunnus ei toimi?", ohje: "Lähetä ohjaajalle Teams-viesti: mikä ei toimi ja mitä näet ruudulla. Ohje: [[ohje:teams]]. Tee sillä välin viikon seuraava työvaihe, jossa ei ole työsykliä." }
        ]
      },
      {
        nimi: "Siirrä",
        paikka: "GitHub, selain",
        tyokalu: "GitHub",
        oma: "tarkistat kortin. Korvaat kortin Oma tarkistus -rivin omalla tarkistusrivilläsi. Rastitat askeleet 1 ja 2 issuessa.",
        ohje: [
          "Avaa [[github:issues/new?template=tehtavakortti.md|uusi issue tehtäväkorttipohjalla]]. Tarkka ohje: [[ohje:issue]].",
          "Kopioi kortti Copilotin vastauksesta kopiointipainikkeella: [[kuvaohje:copilot-kopioi-vastaus]]. Kopioi viimeisin kokonainen kortti.",
          "Napsauta issuen kuvauskenttää. Paina Ctrl+A ja sitten Ctrl+V. Copilotin kortti korvaa pohjan tekstin. Jos ennen riviä ## Tavoite tai rivin 6 Kirjattu jälkeen on Copilotin omia lauseita, maalaa ne ja paina Delete.",
          "Tarkista kortti: tavoite (funktion kortissa myös rajapinta), kaista, tiedostot, Älä tee -kohta, hyväksymiskriteerit ja testi numeroineen ja nimineen.",
          "Kopioi tarkistusrivi Kopioi-painikkeella. Maalaa kortin rivi, joka on otsikon ## Oma tarkistus jälkeen. Paina Ctrl+V. Täytä se vaihtoehto, joka pitää paikkansa. Poista toinen vaihtoehto.",
          "Kirjoita otsikkokenttään otsikko, joka alkaa verbillä. Tallenna issue valitsemalla Create.",
          "Tarkista, että issuen oikeassa reunassa kohdassa Labels lukee tehtäväkortti. Jos ei lue, valitse Labels ja tehtäväkortti.",
          "Rastita issuessa kohdat 1 Suunniteltu ja 2 Siirretty: napsauta ruutuja issuen kuvauksessa.",
          "Jos tämä on viikon ensimmäinen kortti, kirjoita issueen kommentti \"Sovittu viikkopalaverissa pp.kk.: ___\". Kirjoita pp.kk. tilalle tämän viikon palaverin päivä ja ___ tilalle yhdellä lauseella, mitä palaverissa sovittiin tästä kortista. Valitse Comment. Jos työvaihe antaa oman kommenttipohjan, käytä sitä. Muissa korteissa kommenttia ei kirjoiteta."
        ],
        pohja: {
          otsikko: "Tarkistusrivi: korvaa tällä Oma tarkistus -kohdan rivi",
          teksti: "Tarkistin kortin: Muutin kortista ___ / En muuttanut, koska ___"
        },
        kuvaohjeet: ["github-uusi-issue"],
        valmis: "issue on tallennettu, siinä on tarkistusrivisi, ja tiedät issuen numeron.",
        jumissa: [
          { kysymys: "Lomake ei näytä tehtäväkorttipohjaa?", ohje: "Tarkista, että tiedosto `.github/ISSUE_TEMPLATE/tehtavakortti.md` on GitHubissa: [[github:tree/main/.github/ISSUE_TEMPLATE|kansio .github/ISSUE_TEMPLATE]]. Liitä sillä välin kortti tyhjään issueen." },
          { kysymys: "Labels-listassa ei ole labelia tehtäväkortti?", ohje: "Luo label kerran. Avaa [[github:labels|repositoryn Labels-sivu]]. Valitse New label, kirjoita nimeksi tehtäväkortti ja valitse Create label. Luo samalla myös label havainto. Valitse sitten issuessa Labels ja tehtäväkortti." },
          { kysymys: "Issues-sivua ei ole?", ohje: "Avaa [[github:settings|repositoryn Settings]]. Laita kohdassa Features rasti kohtaan Issues." }
        ]
      },
      {
        nimi: "Rakenna",
        paikka: "VS Code tai selain",
        tyokalu: "testi Täydennys-kaistalla, toteutus kortin kaistalla",
        oma: "kirjoitat testiin oman odotetun tuloksesi. Päätät jokaisesta tekoälyn vastauksesta: hyväksyn, korjautan tai hylkään. Kirjaat kortin tärkeimmän päätöksen tiedostoon [[tiedosto:ai-loki|ai-loki.md]] askeleessa 6. Rastita 3a issuessa, kun testi on kirjoitettu. Rastita 3b, kun toteutus on valmis.",
        ohje: [
          "Kirjoita testi ensin (3a). Avaa testitiedosto, jonka työvaihe nimeää. Jos tiedostoa ei vielä ole, luo se kansioon tests. Ohje: [[ohje:uusi-tiedosto]].",
          "Uuden testitiedoston ensimmäiselle riville kirjoita import-rivi: `from vektoripaja.moduuli import funktio`. Vaihda moduuli kortin Tiedostot-kohdan tiedoston nimeksi ilman päätettä .py ja funktio rajapinnan funktion nimeksi.",
          "Kirjoita testitiedoston loppuun kommentti. Python-kommentti alkaa merkillä #. Malli kuvitteellisesta Reseptikirjasta: `# Testi 99: hae(reseptit, 'pulla') -> lista, jossa on yksi resepti`.",
          "Kirjoita seuraavalle riville `def test_` ja testin numero ja nimi, mallissa `def test_99_hae_pulla`. Käytä oman testisi numeroa. Hyväksy täydennys. Ohje: [[ohje:taydennys]]. Jos täydennyksen assert-rivillä ei ole omaa odotettua tulostasi, paina Esc ja kirjoita assert-rivi itse.",
          "Jos tulos ei ole luku, kirjoita se testiin tekstinä tai muodossa `True` tai `False`. Riittää: `virheilmoitus = \"Tiedosto ei ole SVG.\"`. Ei riitä: \"virhe tulee\".",
          "Jos työvaihe sanoo, että testi tehdään käsin sovelluksessa, kirjoita odotettu tulos issueen kommentiksi. Rastita silloin 3a ja siirry kohtaan 3b.",
          "Toteuta kortti sitten kortin kaistalla (3b). Kaista lukee kortin kohdassa ## Kaista.",
          "Täydennys-kaistalla avaa kortin tiedosto. Kirjoita muutoskohtaan kommentti, joka kertoo, mitä koodi tekee. Hyväksy täydennys Tab-näppäimellä.",
          "Tiedosto-kaistalla kopioi pohja Tiedosto-kaista ja liitä se samaan Microsoft 365 Copilot -keskusteluun. Täytä tiedoston polku. Kohtaan Tiedoston nykyinen sisältö liitä tiedosto. Ohje: [[ohje:kopioi-tiedosto]]. Jos tiedosto on uusi, kirjoita siihen uusi tiedosto.",
          "Tiedosto-kaistalla kopioi Copilotin vastauksesta vain koodilohko koodilohkon kopiointipainikkeella: [[kuvaohje:copilot-kopioi-vastaus]]. Uusi tiedosto. Ohje: [[ohje:uusi-tiedosto]]. Olemassa oleva tiedosto. Ohje: [[ohje:korvaa-tiedosto]]. Pyydä seuraava tiedosto vasta sitten pohjalla Tiedosto-kaista: seuraava tiedosto.",
          "Agentti-kaistalla avaa VS Coden Chat ja valitse tila Agent: [[kuvaohje:vscode-chat-tilat]]. Liitä kortin Tiedostot-kohdan tiedostot, jotka jo ovat olemassa: [[kuvaohje:vscode-liita-tiedosto]]. Kopioi pohja Agentti-kaista, täytä issuen numero ja lähetä.",
          "Lue muutos, ennen kuin hyväksyt sen. Tiedosto-kaistalla luet koodilohkon ennen liittämistä. Agentti-kaistalla valitse Keep tai Undo: [[kuvaohje:vscode-hyvaksy-muutos]]. Älä hyväksy muutoksia testitiedostoon.",
          "Tallenna tiedostot painamalla Ctrl+S. Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Katso, että muutos näkyy, ja sulje sovelluksen ikkuna."
        ],
        pohja: [
          { otsikko: "Komento: kopioi tämä", teksti: "python main.py" },
          {
            otsikko: "Tiedosto-kaista: liitä tämä Copilotiin",
            teksti: "Toteuta tämän keskustelun viimeisin tehtäväkortti yhteen tiedostoon.\nTiedosto: (kirjoita polku, esimerkiksi vektoripaja/ikkuna.py)\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTiedoston nykyinen sisältö:\n"
          },
          {
            otsikko: "Tiedosto-kaista: seuraava tiedosto",
            teksti: "Toteuta saman kortin seuraava tiedosto samoilla säännöillä.\nTiedosto: (kirjoita polku)\n\nTiedoston nykyinen sisältö:\n"
          },
          {
            otsikko: "Agentti-kaista: liitä tämä GitHub Copilotiin (agenttitila)",
            teksti: "Toteuta issue #(numero) sen tehtäväkortin mukaan. Kortti on GitHubissa issuessa #(numero).\nMuuta vain kortin Tiedostot-kohdassa lueteltuja tiedostoja.\nÄlä muuta testejä.\nÄlä refaktoroi muuta koodia.\nJos tarvitset muutoksia muihin tiedostoihin, lopeta ja kerro, mitä ja miksi."
          }
        ],
        valmis: "muutos on tallennettu, sovellus käynnistyy komennolla `python main.py`, ja tiedät, minkä päätöksen kirjaat askeleessa 6.",
        jumissa: [
          {
            kysymys: "Tuliko virheilmoitus?",
            ohje: "Kopioi virhe terminaalista: maalaa virheen rivit hiirellä ja paina Ctrl+C. Kopioi sitten pohja, liitä se Copilotille ja liitä virhe pohjan loppuun. Jos korjaus ei auta toisella yrityksellä, avaa havaintoissue.",
            pohja: [
              { otsikko: "Kysy virheestä Copilotilta", teksti: "Sain tämän virheen, kun tein tehtäväkorttia issuessa #(numero). Selitä ensin lyhyesti, mikä virheen aiheuttaa. Ehdota sitten korjaus vain kortin tiedostoihin. Älä muuta testejä.\n\nVirhe:\n" }
            ],
            jatko: [
              { kysymys: "Korjaus ei auttanut, ja virhe tuli toisen kerran?", ohje: "Lopeta yrittäminen. Tämä on kahden yrityksen sääntö. Luo havaintoissue. Ohje: [[ohje:havaintoissue]]. Siirry sitten askeleeseen 5." }
            ]
          },
          { kysymys: "Sama asia on epäonnistunut kaksi kertaa?", ohje: "Lopeta yrittäminen. Tämä on kahden yrityksen sääntö. Luo havaintoissue. Ohje: [[ohje:havaintoissue]]. Kirjaa siihen, mitä kokeilit. Siirry sitten askeleeseen 5." },
          { kysymys: "Microsoft 365 Copilot kysyi jotain eikä antanut koodia?", ohje: "Vastaa kysymykseen yhdellä tai kahdella lauseella kortin ja paperisi tietojen perusteella. Pyydä sitten tiedosto uudelleen: Anna nyt koko tiedosto yhtenä koodilohkona. Jos et tiedä vastausta, lähetä kysymys ohjaajalle Teamsissa. Ohje: [[ohje:teams]]." },
          { kysymys: "GitHub Copilot kysyy, miten jokin pitäisi suunnitella?", ohje: "Älä päätä sitä GitHub Copilotissa. Vie kysymys Microsoft 365 Copilotille askeleessa 5. Pyydä päivitetty kortti." },
          { kysymys: "Muutos koskisi testitiedostoa?", ohje: "Hylkää muutos. Testi on sinun odotettu tuloksesi. Sitä ei muuteta koodin mukaan. Kirjaa hylkäys tiedostoon [[tiedosto:ai-loki|ai-loki.md]] askeleessa 6." },
          { kysymys: "Korjaus vaatisi muutoksia kortin ulkopuolelle?", ohje: "Älä hyväksy muutosta. Vie asia Copilotille askeleessa 5. Pyydä uusi kortti." },
          { kysymys: "Harmaata täydennystä ei tule?", ohje: "Odota kaksi sekuntia. Jos täydennystä ei tule, tarkista, että VS Coden alareunan Copilot-kuvakkeessa ei ole viivaa yli. Kirjoita sitten itse rivin alku, esimerkiksi `assert`, ja odota uudelleen. Jos täydennystä ei vieläkään tule, kirjoita testi itse ja kerro asiasta ohjaajalle viikkopalaverissa." },
          {
            kysymys: "Sovellus ei käynnisty ollenkaan?",
            ohje: "Tarkista ensin, että terminaalin rivin alussa lukee (.venv). Ohje: [[ohje:terminaali]]. Aja sitten nämä kaksi komentoa. Ohje: [[ohje:komento]]. Jos tulee virhe, toimi kuten kohdassa \"Tuliko virheilmoitus?\"",
            pohja: [
              { otsikko: "Komento 1: kopioi tämä", teksti: "pip install -r requirements.txt" },
              { otsikko: "Komento 2: kopioi tämä", teksti: "python main.py" }
            ]
          },
          { kysymys: "Terminaalissa lukee `running scripts is disabled`?", ohje: "Windows estää PowerShellissä virtuaaliympäristön käynnistyksen. Avaa terminaali komentokehotteena. Valitse terminaalin +-painikkeen vierestä nuoli ja sitten Command Prompt. Tarkista, että terminaalin rivin alussa lukee (.venv)." },
          { kysymys: "Terminaalissa lukee `ModuleNotFoundError`?", ohje: "Python ei löydä kirjastoa. Syy on yleensä se, että tulkki on väärä tai virtuaaliympäristö ei ole päällä. Valitse projektin tulkki: [[kuvaohje:vscode-tulkki]]. Avaa uusi terminaali ja aja komento uudelleen." },
          { kysymys: "Copilot-kuvakkeen luku on yli 75 % used?", ohje: "Käytä Tiedosto- ja Täydennys-kaistoja kuun loppuun asti. Kerro asiasta ohjaajalle viikkopalaverissa." }
        ]
      },
      {
        nimi: "Tarkista",
        paikka: "VS Code",
        tyokalu: "sinä itse: VS Coden terminaali ja sovellus",
        oma: "etsit testikoodista oman odotetun tuloksesi, ennen kuin ajat testin. Jos tulosta ei löydy tai se on muuttunut, palaa kohtaan 3a ja kirjoita testi uudelleen. Rastita askel 4 issuessa.",
        ohje: [
          "Avaa testitiedosto. Etsi `assert`-rivi, joka tarkistaa oman odotetun tuloksesi. `assert` tarkoittaa: testi vaatii, että tämä pitää paikkansa. Virhettä odottavassa testissä sama rivi alkaa `with pytest.raises`. Rivin numero näkyy editorin vasemmassa reunassa. Jos rivejä on monta, kirjoita kaikkien numerot.",
          "Aja testit. Ohje: [[ohje:pytest]]. Voit myös valita VS Coden Testing-paneelista Run Tests: [[kuvaohje:vscode-testing]].",
          "Jos työvaihe sanoo, että testi tehdään käsin, tee se sovelluksessa. Kirjoita havaittu tulos paperille.",
          "Kirjaa jokainen kortin testi omaksi kommentiksi issueen: kopioi testin kirjauspohja, liitä se issuen kommenttikenttään, täytä se ja valitse Comment. Jos samassa testissä on monta syötettä, kirjaa ne samaan kommenttiin.",
          "Jos testi meni läpi (PASSED), havaittu tulos on sama kuin odotettu tulos. Kirjoita se, ja jätä Tulos-riville sana läpi. Jos testi ei mennyt läpi (FAILED), jätä Tulos-riville ei läpi. Poista pohjan riveiltä vaihtoehto, joka ei pidä paikkaansa.",
          "Rastita issuessa kohta 4 Tarkistettu."
        ],
        pohja: { otsikko: "Testin kirjaus issueen", teksti: "Testi __: (nimi)\nOdotettu tulos: \nMistä odotettu tulos löytyi: testikoodin rivi __ / issuen kommentti (käsin tehty testi)\nHavaittu tulos: \nTulos: läpi / ei läpi" },
        kuvaohjeet: ["vscode-terminaali", "vscode-testing"],
        valmis: "issuessa on oma kommentti jokaisesta kortin testistä, ja siinä ovat odotettu ja havaittu tulos.",
        jumissa: [
          { kysymys: "Testi ei mennyt läpi?", ohje: "Palaa kohtaan 3b. Korjaa toteutus. Älä muuta testiä. Jos sama testi epäonnistuu toisen kerran, luo havaintoissue. Ohje: [[ohje:havaintoissue]]. Siirry sitten askeleeseen 5." },
          { kysymys: "En löydä omaa odotettua tulostani testikoodista?", ohje: "Palaa kohtaan 3a, koska testi ei silloin tarkista sinun tulostasi. Poista testi ja kirjoita se uudelleen kommentista, jossa on oma odotettu tuloksesi. Kirjaa tämä tiedostoon [[tiedosto:ai-loki|ai-loki.md]] askeleessa 6." },
          { kysymys: "`pytest` ei löydä testejä?", ohje: "Tarkista, että testitiedosto on kansiossa `tests`. Tiedoston nimen pitää alkaa merkeillä `test_`. Myös testifunktion nimen pitää alkaa merkeillä `test_`. Jos terminaali ei tunne komentoa `pytest`, tarkista, että terminaalin rivin alussa lukee (.venv). Jos syytä ei löydy, lähetä ohjaajalle Teams-viesti. Ohje: [[ohje:teams]]." }
        ]
      },
      {
        nimi: "Raportoi",
        paikka: "selain",
        tyokalu: "Copilot (sama keskustelu)",
        oma: "kirjoitat itse kaksi lausetta: mitä tapahtui ja riittikö kortin kaista. Rastita askel 5 issuessa.",
        ohje: [
          "Palaa samaan Microsoft 365 Copilot -keskusteluun.",
          "Kopioi viestipohja Kopioi-painikkeella. Liitä se Copilotin viestikenttään.",
          "Täytä pohjan viisi kohtaa: issuen numero, mitä tapahtui, riittikö kaista, testien tulokset ja mitä hylkäsit tai korjautit. Jätä Kaista-riville vain kortin kaista. Korvaa sulkeet ja niiden teksti omalla tiedollasi, esimerkiksi #12. Lähetä viesti.",
          "Copilot antaa tilatiedoston koodilohkona. Kopioi vain se koodilohko koodilohkon kopiointipainikkeella: [[kuvaohje:copilot-kopioi-vastaus]].",
          "Korvaa tiedoston `PROJEKTIN-TILA.md` sisältö. Ohje: [[ohje:korvaa-tiedosto]].",
          "Copilot ehdottaa myös seuraavaa korttia. Käytä sitä vain, jos viikon seuraava työvaihe käskee. Muuten palaa viikon työvaiheisiin."
        ],
        pohja: {
          otsikko: "Täytä ja liitä tämä Copilotiin",
          teksti: "Tehtäväkortti issuessa #(numero) on tehty.\nMitä tapahtui (oma lause): \nKaista: Tiedosto / Täydennys / Agentti. Riittikö se? (oma lause): \nTestien tulokset, esimerkiksi testi 12 läpi: \nMitä hylkäsin tai korjautin ja miksi: \n\n1. Päivitä PROJEKTIN-TILA.md: valmista, seuraavana, tehdyt päätökset ja avoimet kysymykset. Anna koko tiedosto yhtenä koodilohkona.\n2. Anna seuraava tehtäväkortti samassa muodossa. Jos viikon tavoite on valmis, sano se."
        },
        valmis: "tilatiedosto on päivitetty ja tallennettu.",
        jumissa: [
          { kysymys: "Keskustelu on pitkä, ja Copilot unohtaa asioita?", ohje: "Aloita uusi keskustelu: [[kuvaohje:copilot-uusi-keskustelu]]. Liitä tilatiedosto: [[kuvaohje:copilot-tilatiedosto]]. Liitä sitten tämä viesti:", pohja: { otsikko: "Uusi keskustelu", teksti: "Jatkan projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\nViikko {viikko}: {nimi}\nViikon tavoite: {feature}\n\nAnna seuraava tehtäväkortti samassa muodossa kuin ennen." } },
          { kysymys: "Vastauksessa ei ole koodilohkoa?", ohje: "Kopioi tämä Copilotille:", pohja: { otsikko: "Pyydä tilatiedosto koodilohkona", teksti: "Anna päivitetty PROJEKTIN-TILA.md kokonaan yhtenä koodilohkona." } },
          { kysymys: "Copilotin kortti ei liity viikon tavoitteeseen?", ohje: "Kopioi viikon tavoite viikon kohdasta Viikon tavoite. Pyydä korttia uudelleen. Mainitse, mikä kortissa oli väärin." }
        ]
      },
      {
        nimi: "Kirjaa",
        paikka: "VS Code ja GitHub",
        tyokalu: "VS Code ja GitHub",
        oma: "kirjoitat yhden merkinnän tiedostoon [[tiedosto:ai-loki|ai-loki.md]] ja commit-viestin itse, verbi ensin. Rastita askel 6 issuessa ennen committia, koska commit sulkee issuen.",
        ohje: [
          "Avaa tiedosto [[tiedosto:ai-loki|ai-loki.md]]. Ohje: [[ohje:avaa-tiedosto]]. Paina Ctrl+End ja sitten Enter. Kursori on tiedoston lopussa tyhjällä rivillä.",
          "Kopioi lokimerkinnän pohja Kopioi-painikkeella. Palaa VS Codeen ja paina Ctrl+V. Täytä pohja: yksi merkintä tästä kortista. Otsikkoriville tulevat päivä, kaikki kortissa käyttämäsi tekoälytyökalut ja kaista.",
          "Rastita issuessa kohta 6 Kirjattu nyt, ennen committia.",
          "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa ovat kortin tiedostot, testitiedosto (jos kortissa on koodilla tehty testi), `PROJEKTIN-TILA.md` ja [[tiedosto:ai-loki|project-docs/ai-loki.md]]. Kopioi commit-viestin pohja ja täytä se: mitä teit ja issuen numero rivillä `Closes #N`. Korvaa sulkeet ja niiden teksti, esimerkiksi Closes #12.",
          "Tarkista [[github:issues?q=is%3Aissue+is%3Aclosed|suljetuista issueista]], että issue sulkeutui: [[kuvaohje:github-issue-sulkeutuu]]. Jos teit työn haarassa, issue sulkeutuu vasta, kun pull request liitetään päähaaraan. Ohita silloin tämä kohta."
        ],
        pohja: [
          { otsikko: "Lokimerkinnän pohja: kopioi tämä", teksti: "### pp.kk.vvvv · työkalut, kaista\n- Mihin pyysin apua: \n- Päätös: hyväksyn / korjautan / hylkään\n- Peruste: \n- Aineistoviite: issue #__, testi __\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa." },
          { otsikko: "Commit-viestin pohja", teksti: "(mitä tein, verbi ensin)\n\nCloses #(numero)" }
        ],
        kuvaohjeet: ["vscode-commit-push", "github-issue-sulkeutuu"],
        valmis: "commit on GitHubissa, tiedostossa [[tiedosto:ai-loki|ai-loki.md]] on merkintä, ja issue on suljettu. Haarassa issue sulkeutuu vasta mergessä.",
        jumissa: [
          { kysymys: "Push ei onnistu?", ohje: "Valitse VS Coden Source Controlissa Sync Changes uudelleen. Jos VS Code kysyy vahvistusta, valitse OK. Jos virhe jatkuu, lähetä virheilmoituksesta kuva ohjaajalle Teamsissa. Ohje: [[ohje:teams]], kohta Jos lähetät kuvan." },
          { kysymys: "Issue ei sulkeutunut?", ohje: "Tarkista, että commit-viestissä lukee `Closes #N` oikealla numerolla. Tarkista myös, että push meni päähaaraan `main`. Päähaara on repositoryn päälinja, josta julkaisu tehdään." }
        ]
      }
    ]
  },

  /* ---- v2.8: perusohjeet (Työtapa → Näin teet). Toistuva taito opetetaan kerran, ja
     viikkojen työvaiheet linkittävät tänne. Jokaisessa vaiheessa on missä, tee ja näet nyt. ---- */
  perusohjeet: [
    {
      tunnus: "avaa-repository",
      otsikko: "Avaa repository VS Codessa",
      johdanto: "Tee tämä aina, kun aloitat työn. Silloin VS Code näyttää oman repositorysi tiedostot.",
      vaiheet: [
        { missa: "VS Code, ylävalikko", tee: "Valitse File ja sitten Open Recent.", naet: "Lista kansioista, jotka olet avannut aiemmin." },
        { missa: "Open Recent -lista", tee: "Valitse rivi, jossa lukee Vektoripaja.", naet: "Vasemman reunan Explorerissa eli VS Coden tiedostolistassa lukee VEKTORIPAJA. Sen alapuolella ovat repositoryn tiedostot, esimerkiksi README.md." },
        {
          missa: "Jos Vektoripaja ei ole listassa",
          tee: KLOONIPOLKU
            ? `Valitse File ja sitten Open Folder. Avaa kansio \`${KLOONIPOLKU}\` ja valitse Select Folder.`
            : "Valitse File ja sitten Open Folder. Avaa kansio, johon kloonasit eli kopioit repositoryn koneellesi viikolla 40, ja valitse Select Folder.",
          naet: "Explorerissa lukee VEKTORIPAJA. Jos et löydä kansiota, kysy ohjaajalta Teamsissa. Ohje: [[ohje:teams]]."
        }
      ]
    },
    {
      tunnus: "avaa-tiedosto",
      otsikko: "Avaa tiedosto Explorerissa",
      johdanto: "Explorer on VS Coden tiedostolista. Avaa ensin repository. Ohje: [[ohje:avaa-repository]].",
      vaiheet: [
        { missa: "VS Code", tee: "Paina Ctrl+Shift+E.", naet: "Explorer on auki vasemmassa reunassa. Ylimpänä lukee VEKTORIPAJA. Sen alapuolella ovat kansiot ja juuren tiedostot, esimerkiksi README.md." },
        { missa: "Explorer, jos tiedosto on kansiossa", tee: "Napsauta kansion nimeä, esimerkiksi project-docs.", naet: "Kansion tiedostot näkyvät sisennettyinä kansion nimen alapuolella. README.md on juuressa. Sitä varten ei tarvitse avata kansiota." },
        { missa: "Explorer", tee: "Napsauta tiedoston nimeä, esimerkiksi [[tiedosto:suunnitelma|suunnitelma.md]] kansiossa project-docs.", naet: "Tiedosto aukeaa editoriin. Välilehdellä lukee tiedoston nimi." }
      ]
    },
    {
      tunnus: "etsi-otsikko",
      otsikko: "Etsi otsikko tiedostosta",
      johdanto: "Dokumenteissa on monta otsikkoa. Haku vie oikean otsikon kohdalle, eikä tiedostoa tarvitse vierittää. Etsi otsikko ensin. Kopioi liitettävä teksti vasta sen jälkeen, koska haku käyttää samaa leikepöytää. Jos haluat vain lukea otsikon jälkeisen tekstin, tee vaiheet 1–3.",
      vaiheet: [
        { missa: "VS Code, tiedosto auki editorissa", tee: "Paina Ctrl+F.", naet: "Hakukenttä aukeaa editorin oikeaan yläkulmaan." },
        { missa: "Hakukenttä", tee: "Kirjoita otsikon teksti ilman #-merkkejä, esimerkiksi MVP omin sanoin. Jos työvaiheessa on otsikko Kopioi-painikkeella, valitse Kopioi ja paina hakukentässä Ctrl+V. Liitetyt #-merkit saavat jäädä hakuun.", naet: "Osuma näkyy tiedostossa korostettuna. Hakukentän vieressä lukee 1 of 1. Jos lukee No results, tarkista, että avasit oikean tiedoston." },
        { missa: "Hakukenttä", tee: "Paina Enter ja sitten Esc.", naet: "Hakukenttä sulkeutuu. Kursori on otsikon rivillä." },
        { missa: "Otsikon rivi", tee: "Paina alanuolinäppäintä kerran. Jos kursori on nyt rivillä, joka alkaa merkillä >, paina End ja sitten Enter.", naet: "Kursori on tyhjällä rivillä otsikon tai >-ohjerivin jälkeen. Voit kirjoittaa tai liittää tekstin siihen." }
      ]
    },
    {
      tunnus: "markdown",
      otsikko: "Kirjoita Markdownia",
      johdanto: "Dokumenttien tiedostopääte on .md. Ne kirjoitetaan Markdownilla: tavallista tekstiä ja muutama merkki rivin alussa.",
      vaiheet: [
        { missa: "Rivin alku", tee: "Kirjoita `## ` ja otsikon teksti. #-merkkien jälkeen tulee välilyönti.", naet: "Rivi on otsikko. Yksi # on tiedoston pääotsikko, ## on osion otsikko ja ### on alaotsikko." },
        { missa: "Rivin alku", tee: "Kirjoita `- ` ja listan kohta. Viivan jälkeen tulee välilyönti.", naet: "Rivi on listan kohta." },
        { missa: "Rivin alku, numeroitu lista", tee: "Kirjoita `1. ` ja ensimmäinen kohta. Kirjoita seuraavan rivin alkuun `2. ` ja niin edelleen.", naet: "Rivit ovat numeroitu lista." },
        { missa: "Taulukon rivi, joka alkaa ja loppuu merkillä |", tee: "Kirjoita solun teksti kahden |-merkin väliin. Älä poista |-merkkejä.", naet: "Esikatselussa teksti näkyy taulukon solussa." },
        { missa: "Rivi, joka alkaa merkillä >", tee: "Lue rivi. Kirjoita oma tekstisi seuraavalle riville.", naet: "Rivi, joka alkaa merkillä >, on ohjerivi. Se jää paikalleen, ja oma tekstisi on sen jälkeen." },
        { missa: "Kahden kappaleen väli", tee: "Paina Enter kaksi kertaa.", naet: "Kappaleiden välissä on tyhjä rivi. Ilman tyhjää riviä rivit yhdistyvät yhdeksi kappaleeksi." },
        { missa: "Merkki ·", tee: "Kirjoita merkki · näppäilemällä Alt+0183. Voit myös kirjoittaa sen tilalle pilkun.", naet: "Rivillä on erotin, esimerkiksi PySide6 6.9.1 · LGPL-3.0." },
        { missa: "Tiedosto auki editorissa", tee: "Paina Ctrl+Shift+V. Kun olet lukenut esikatselun, sulje se välilehden sulkupainikkeesta.", naet: "Esikatselu näytti otsikot, listat ja kappaleet muotoiltuina. Nyt editorissa näkyy taas tiedoston teksti." },
        { missa: "Tiedosto auki editorissa", tee: "Paina Ctrl+S.", naet: "Välilehden nimen vieressä ei ole enää palloa. Tiedosto on tallennettu." }
      ]
    },
    {
      tunnus: "uusi-tiedosto",
      otsikko: "Luo uusi tiedosto",
      johdanto: "Luo uusi kooditiedosto tai testitiedosto VS Coden Explorerissa.",
      vaiheet: [
        { missa: "VS Code, Explorer", tee: "Napsauta hiiren oikealla painikkeella kansiota, johon tiedosto tulee, esimerkiksi vektoripaja tai tests.", naet: "Valikko aukeaa." },
        { missa: "Valikko", tee: "Valitse New File.", naet: "Kansion alapuolelle tulee nimikenttä." },
        { missa: "Nimikenttä", tee: "Kirjoita tiedoston nimi, esimerkiksi kierto.py. Paina Enter.", naet: "Tiedosto aukeaa tyhjänä editoriin." },
        { missa: "Editori", tee: "Jos sinulla on liitettävä sisältö, paina Ctrl+V. Paina sitten Ctrl+S.", naet: "Välilehden nimen vieressä ei ole palloa. Tiedosto on tallennettu. Jos et liittänyt mitään, tiedosto on tyhjä, ja se on oikein." }
      ]
    },
    {
      tunnus: "korvaa-tiedosto",
      otsikko: "Korvaa tiedoston koko sisältö",
      johdanto: "Tee tämä, kun Copilot antaa olemassa olevasta tiedostosta koko uuden version, esimerkiksi PROJEKTIN-TILA.md tai kooditiedosto. Kopioi ensin uusi sisältö koodilohkon kopiointipainikkeella: [[kuvaohje:copilot-kopioi-vastaus]].",
      vaiheet: [
        { missa: "VS Code, Explorer", tee: "Napsauta tiedoston nimeä. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto aukeaa editoriin. Välilehdellä lukee tiedoston nimi." },
        { missa: "Editori", tee: "Napsauta tiedoston tekstiä. Paina Ctrl+A.", naet: "Koko teksti on maalattu." },
        { missa: "Editori", tee: "Paina Ctrl+V.", naet: "Vanha teksti on vaihtunut uuteen. Tiedoston ensimmäinen rivi on sama kuin Copilotin koodilohkon ensimmäinen rivi." },
        { missa: "Editori", tee: "Paina Ctrl+S.", naet: "Välilehden nimen vieressä ei ole palloa. Tiedosto on tallennettu." }
      ]
    },
    {
      tunnus: "tiedostoikkuna",
      otsikko: "Avaa tai tallenna tiedosto tiedostoikkunassa",
      johdanto: "Sovellukset (Vektoripaja, Inkscape, Blender, selain) avaavat tiedostoikkunan, kun avaat tai tallennat tiedoston. Repositoryn kansioon pääset nopeimmin VS Codesta kopioidulla polulla.",
      vaiheet: [
        { missa: "VS Code, Explorer", tee: "Napsauta hiiren oikealla painikkeella kansiota, jossa tiedosto on tai johon se tallennetaan, esimerkiksi testiaineisto. Valitse Copy Path.", naet: "Kansion polku on leikepöydällä. Mitään ei näy ruudulla." },
        { missa: "Tiedostoikkuna, osoiterivi ylhäällä", tee: "Palaa tiedostoikkunaan tehtäväpalkista. Napsauta osoiteriviä ja paina Ctrl+V ja Enter.", naet: "Ikkunassa näkyvät kansion tiedostot. Osoiterivillä lukee kansion nimi." },
        { missa: "Tiedostoikkuna, avaaminen", tee: "Napsauta tiedostoa ja valitse Avaa (Open).", naet: "Tiedosto aukeaa sovellukseen." },
        { missa: "Tiedostoikkuna, tallentaminen", tee: "Poista kentän Tiedostonimi (File name) teksti. Kirjoita työvaiheen antama nimi ja valitse Tallenna (Save).", naet: "Tiedosto näkyy VS Coden Explorerissa siinä kansiossa." }
      ]
    },
    {
      tunnus: "taydennys",
      otsikko: "Hyväksy GitHub Copilotin täydennys",
      johdanto: "Täydennys on GitHub Copilotin harmaa koodiehdotus VS Codessa. Se syntyy kommentista tai rivin alusta. Täydennys ei kuluta krediittejä. Katso myös [[kuvaohje:vscode-taydennys]].",
      vaiheet: [
        { missa: "VS Code, tiedosto auki editorissa", tee: "Kirjoita kommentti tai rivin alku, esimerkiksi `def test_`. Odota kaksi sekuntia.", naet: "Kursorin kohdalle tulee harmaata tekstiä. Se on ehdotus, ei vielä koodia." },
        { missa: "Harmaa ehdotus", tee: "Lue ehdotus. Paina Tab, jos se on oikein. Paina Esc, jos se on väärin.", naet: "Tab: harmaa teksti muuttuu tavalliseksi koodiksi. Esc: harmaa teksti katoaa." },
        { missa: "Testin assert-rivi", tee: "Jos assert-rivillä ei ole omaa odotettua tulostasi, paina Esc ja kirjoita assert-rivi itse.", naet: "assert-rivillä on oma odotettu tuloksesi." },
        { missa: "Jos harmaata tekstiä ei tule", tee: "Katso VS Coden alareunan Copilot-kuvaketta. Jos sen yli on viiva, napsauta kuvaketta ja valitse täydennysten käyttöönotto (Enable Completions).", naet: "Kuvakkeen yli ei ole viivaa. Jos täydennys ei vieläkään tule, kirjoita rivi itse ja kerro asiasta viikkopalaverissa." },
        { missa: "Lokimerkintä", tee: "Kirjaa täydennyksen käyttö: työsyklissä askeleessa 6, muuten samana päivänä tiedostoon [[tiedosto:ai-loki|ai-loki.md]]. Jos kirjoitit rivin itse ilman täydennystä, merkintää ei tarvita.", naet: "Merkinnässä on päivä, GitHub Copilot ja kaista Täydennys." }
      ]
    },
    {
      tunnus: "kopioi-tiedosto",
      otsikko: "Kopioi tiedoston koko sisältö",
      johdanto: "Tee tämä, kun Copilot tarvitsee tiedoston nykyisen sisällön, esimerkiksi Tiedosto-kaistan pohjan kohtaan Tiedoston nykyinen sisältö.",
      vaiheet: [
        { missa: "VS Code, Explorer", tee: "Napsauta tiedoston nimeä. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto aukeaa editoriin." },
        { missa: "Editori", tee: "Napsauta tiedoston tekstiä. Paina Ctrl+A ja sitten Ctrl+C.", naet: "Koko teksti on maalattu ja leikepöydällä." },
        { missa: "Editori", tee: "Paina ylänuolinäppäintä.", naet: "Maalaus poistuu. Tiedoston teksti on ennallaan." }
      ]
    },
    {
      tunnus: "kopioi-osoite",
      otsikko: "Kopioi osoite, issuen numero tai commitin tunnus",
      johdanto: "Viikon kirjaukseen tarvitaan työnäytteiden numerot ja linkit. Tässä ovat niiden paikat.",
      vaiheet: [
        { missa: "Selain, sivu jonka osoitteen tarvitset", tee: "Napsauta selaimen osoiteriviä. Paina Ctrl+C.", naet: "Koko osoite on maalattu ja leikepöydällä." },
        { missa: "Issuen numero", tee: "Avaa [[github:issues?q=is%3Aissue|repositoryn issuet]]. Kirjoita hakukenttään issuen otsikon sana ja paina Enter.", naet: "Issuen otsikon alapuolella on numero, esimerkiksi #12. Lista näyttää sekä avoimet että suljetut issuet." },
        { missa: "Commitin tunnus", tee: "Avaa [[github:commits|repositoryn commit-lista]]. Etsi rivi, jossa on commit-viestisi.", naet: "Rivin oikeassa reunassa on seitsemän merkin tunnus, esimerkiksi 3f2a9c1. Sen vieressä oleva kopiointipainike kopioi koko 40 merkin tunnuksen. Kumpi tahansa kelpaa." },
        { missa: "Releasen osoite", tee: "Avaa [[github:releases|repositoryn Releases-sivu]]. Napsauta julkaisun nimeä ja kopioi osoite osoiteriviltä.", naet: "Osoitteen lopussa on releases/tag/ ja tagin nimi, esimerkiksi v0.0.41." },
        { missa: "Tiedoston osoite GitHubissa", tee: "Avaa [[github:tree/main|repositoryn tiedostot]]. Napsauta kansiota, esimerkiksi project-docs, ja sitten tiedostoa. Kopioi osoite osoiteriviltä.", naet: "Osoitteessa on blob/main/ ja tiedoston polku, esimerkiksi blob/main/README.md." }
      ]
    },
    {
      tunnus: "havaintoissue",
      otsikko: "Luo havaintoissue",
      johdanto: "Havaintoissue on GitHub-issue virheestä tai puutteesta. Pohja havainto.md tuo siihen neljä otsikkoa ja labelin havainto. Label on issuen tunniste, joka näkyy issuen oikeassa reunassa kohdassa Labels.",
      vaiheet: [
        { missa: "Selain", tee: "Avaa [[github:issues/new?template=havainto.md|uusi issue havaintopohjalla]].", naet: "Otsikkokentässä lukee Havainto: . Kuvauksessa ovat otsikot ## Mitä odotin, ## Mitä tapahtui, ## Toistamisohje ja ## Syy omin sanoin." },
        { missa: "Otsikkokenttä", tee: "Kirjoita sanan Havainto: perään lyhyt kuvaus, esimerkiksi Tuonti kaatuu tyhjään tiedostoon.", naet: "Otsikossa on havainto yhdellä lauseella." },
        { missa: "Kuvauskenttä", tee: "Kirjoita jokaisen otsikon jälkeen omalle rivilleen. Jätä kohta Syy omin sanoin ennalleen, jos syy ei ole vielä selvillä.", naet: "Kohdissa Mitä odotin, Mitä tapahtui ja Toistamisohje on tekstiä." },
        { missa: "Lomakkeen alareuna", tee: "Valitse Create.", naet: "Issue on tallennettu. Otsikon perässä on issuen numero, esimerkiksi #12. Oikeassa reunassa kohdassa Labels lukee havainto. Jos ei lue, valitse Labels ja havainto. Jos labelia ei ole listassa, luo se [[github:labels|repositoryn Labels-sivulla]] valitsemalla New label." }
      ]
    },
    {
      tunnus: "commit",
      otsikko: "Tee commit ja push",
      johdanto: "Commit on yksi nimetty muutos. Push lähettää sen GitHubiin. Vasta silloin ohjaaja näkee muutoksen. Haara on oma työlinja. Päähaara main on repositoryn päälinja. Teet työtä päähaarassa main, ellei työvaihe käske tehdä omaa haaraa.",
      vaiheet: [
        { missa: "VS Code, ylävalikko", tee: "Valitse File ja sitten Save All.", naet: "Yhdenkään välilehden nimen vieressä ei ole palloa. Kaikki muutokset on tallennettu." },
        { missa: "VS Code", tee: "Paina Ctrl+Shift+G.", naet: "Source Control on auki. Changes-listassa ovat tiedostot, joita muutit." },
        { missa: "Source Control, Changes-lista", tee: "Lue lista. Jos siinä on tiedosto, jota et muuttanut ja jota työvaihe ei mainitse, kysy ohjaajalta ennen committia.", naet: "Listassa ovat vain työvaiheen tiedostot. Kirjain M tarkoittaa muutettua tiedostoa ja U uutta tiedostoa. Kansiot .venv, __pycache__ ja .pytest_cache eivät näy, koska tiedosto .gitignore jättää ne pois." },
        { missa: "Työvaiheen commit-viesti", tee: "Jos työvaiheessa on commit-viesti, valitse sen kohdalla Kopioi. Muuten kirjoita viesti itse: mitä teit, verbi ensin.", naet: "Painikkeessa lukee ✓ Kopioitu, tai tiedät, minkä viestin kirjoitat." },
        { missa: "Source Control, Message-kenttä Changes-listan yläpuolella", tee: "Napsauta kenttää. Paina Ctrl+V tai kirjoita viesti.", naet: "Commit-viesti näkyy kentässä. Enter tekee uuden rivin, joten rivi Closes #N tulee omalle rivilleen." },
        { missa: "Source Control", tee: "Valitse Commit. Jos VS Code kysyy, lisätäänkö kaikki muutokset, valitse Yes.", naet: "Changes-lista tyhjenee. Sinisessä painikkeessa lukee nyt Sync Changes." },
        { missa: "Source Control", tee: "Valitse Sync Changes. Jos VS Code kysyy vahvistusta, valitse OK.", naet: "Painike katoaa. Commit on GitHubissa." },
        { missa: "Selain", tee: "Avaa [[github:commits|repositoryn commit-lista]]. Napsauta ylintä commit-viestiä.", naet: "Ylimpänä oli commit-viestisi. Nyt näet commitin tiedostot, ja vihreät rivit ovat uusia. Ne ovat GitHubissa. Jos teit työn haarassa, valitse ensin listan yläpuolelta haarasi." }
      ],
      kuvaohjeet: ["vscode-commit-push"]
    },
    {
      tunnus: "terminaali",
      otsikko: "Avaa terminaali ja tarkista (.venv)",
      johdanto: "Terminaaliin kirjoitetaan komentoja. Viikosta 41 alkaen projektin kirjastot ovat virtuaaliympäristössä, jonka nimi on .venv. Viikolla 40 virtuaaliympäristöä ei vielä ole: tee silloin vain ensimmäinen vaihe.",
      vaiheet: [
        { missa: "VS Code, ylävalikko", tee: "Valitse Terminal ja sitten New Terminal.", naet: "Terminaali aukeaa editorin alapuolelle." },
        { missa: "Terminaalin rivin alku", tee: "Lue rivin alku.", naet: "Viikosta 41 alkaen rivi alkaa (.venv). Silloin virtuaaliympäristö on päällä." },
        { missa: "Jos rivin alussa ei lue (.venv)", tee: "Valitse projektin tulkki [[kuvaohje:vscode-tulkki|kuvaohjeen]] mukaan. Tulkki on ohjelma, joka ajaa Python-koodin.", naet: "Tulkin polussa on .venv." },
        { missa: "VS Code, ylävalikko", tee: "Valitse Terminal ja sitten New Terminal.", naet: "Uuden terminaalin rivi alkaa (.venv)." },
        { missa: "Jos terminaalissa lukee running scripts is disabled", tee: "Valitse terminaalin +-painikkeen vierestä nuoli ja sitten Command Prompt.", naet: "Uusi terminaali on komentokehote. Rivin alussa lukee (.venv)." }
      ],
      kuvaohjeet: ["vscode-terminaali"]
    },
    {
      tunnus: "komento",
      otsikko: "Kopioi ja aja komento",
      johdanto: "Työvaiheen komennot ovat laatikoissa, joissa on Kopioi-painike. Älä kirjoita komentoa itse. Silloin siihen ei tule kirjoitusvirhettä.",
      vaiheet: [
        { missa: "Työvaiheen komentolaatikko", tee: "Valitse Kopioi.", naet: "Painikkeessa lukee ✓ Kopioitu." },
        { missa: "VS Coden terminaali", tee: "Napsauta terminaalia. Paina Ctrl+V.", naet: "Komento näkyy terminaalin rivillä. Jos terminaalia ei ole auki, avaa se ensin. Ohje: [[ohje:terminaali]]." },
        { missa: "Jos työvaiheessa lukee \"Vaihda vain lainausmerkkien sisältö\"", tee: "Siirrä kursori nuolinäppäimillä lainausmerkkien sisään. Kirjoita oma tekstisi esimerkin tilalle.", naet: "Lainausmerkkien sisällä on oma tekstisi. Muu komento on ennallaan." },
        { missa: "Terminaali", tee: "Paina Enter.", naet: "Komennon tuloste näkyy terminaalissa. Kun komento on valmis, rivi alkaa taas (.venv). Komento python main.py on valmis vasta, kun suljet sovelluksen ikkunan: siihen asti terminaali odottaa, ja se on oikein. Pitkää tulostetta voi vierittää hiiren rullalla." }
      ]
    },
    {
      tunnus: "pytest",
      otsikko: "Aja testit",
      johdanto: "Testit ovat kansiossa tests. Komento pytest ajaa ne kaikki.",
      vaiheet: [
        { missa: "Sovelluksen ikkuna", tee: "Jos Vektoripajan ikkuna on auki, sulje se ikkunan sulkupainikkeesta.", naet: "Terminaalin rivi alkaa taas (.venv)." },
        { missa: "Terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Jokaisen testin nimi näkyy omalla rivillään.", koodi: "pytest -v", koodiOtsikko: "Komento: kopioi tämä" },
        { missa: "Tuloste, testin rivi", tee: "Etsi rivi, jossa on testin nimi, esimerkiksi test_1_kiertokulma.", naet: "PASSED tarkoittaa, että testi meni läpi. FAILED tarkoittaa, että testi ei mennyt läpi." },
        { missa: "Tulosteen viimeinen rivi", tee: "Lue luvut.", naet: "Rivillä lukee, montako testiä meni läpi (passed) ja montako ei (failed)." }
      ],
      kuvaohjeet: ["vscode-testing"]
    },
    {
      tunnus: "issue",
      otsikko: "Luo issue tehtäväkorttipohjalla",
      johdanto: "Issue on GitHubin tehtävä. Tehtäväkorttipohja tuo issueen valmiit otsikot.",
      vaiheet: [
        { missa: "Selain", tee: "Avaa [[github:issues/new?template=tehtavakortti.md|uusi issue tehtäväkorttipohjalla]].", naet: "GitHub avaa lomakkeen. Kuvauskentässä ovat pohjan otsikot, esimerkiksi ## Tavoite." },
        { missa: "Microsoft 365 Copilot, kortin vastaus", tee: "Valitse vastauksen alareunasta kopiointipainike: [[kuvaohje:copilot-kopioi-vastaus]]. Kopioi viimeisin kokonainen kortti.", naet: "Kortti on leikepöydällä." },
        { missa: "Lomakkeen kuvauskenttä", tee: "Napsauta kenttää. Paina Ctrl+A ja sitten Ctrl+V.", naet: "Pohjan teksti on vaihtunut Copilotin korttiin. Kortissa on kuusi otsikkoa sekä osiot Oma tarkistus ja Sykli." },
        { missa: "Kuvauskentän alku", tee: "Jos ennen riviä ## Tavoite on Copilotin omia lauseita, maalaa ne ja paina Delete.", naet: "Kuvaus alkaa rivillä ## Tavoite." },
        { missa: "Lomakkeen otsikkokenttä (Add a title)", tee: "Kirjoita kortin otsikko. Aloita verbillä, esimerkiksi Näytä pyörivä kuutio.", naet: "Otsikko näkyy kentässä." },
        { missa: "Lomakkeen alareuna", tee: "Valitse Create.", naet: "Issue on tallennettu. Otsikon perässä on issuen numero, esimerkiksi #3. Tarvitset issuen numeron commit-viestissä. Oikeassa reunassa kohdassa Labels lukee tehtäväkortti. Jos ei lue, valitse Labels ja tehtäväkortti." }
      ],
      kuvaohjeet: ["github-uusi-issue"]
    },
    {
      tunnus: "pull-request",
      otsikko: "Tarkasta ja hyväksy pull request",
      johdanto: "Pull request on pyyntö liittää muutokset päähaaraan main. Hyväksyminen tarkoittaa tässä projektissa mergeä: luet muutokset ja liität ne päähaaraan.",
      vaiheet: [
        { missa: "Selain", tee: "Avaa [[github:pulls|repositoryn Pull requests -sivu]].", naet: "Listassa on avoin pull request, ja sen kohdalla lukee Open. Jos listassa ei ole pull requestia, lähetä ohjaajalle viesti. Ohje: [[ohje:teams]]." },
        { missa: "Pull requests -lista", tee: "Napsauta pull requestin otsikkoa.", naet: "Välilehti Conversation on auki. Kuvauksessa kerrotaan, mitä pull request lisää tai siirtää." },
        { missa: "Välilehti Conversation, kuvaus", tee: "Lue kuvaus.", naet: "Tiedät, mitkä tiedostot pull request tuo ja mitä teet niille myöhemmin." },
        { missa: "Pull requestin sivun yläreuna", tee: "Valitse välilehti Files changed.", naet: "Tiedostojen sisältö näkyy. Vihreät rivit ovat uusia. Tiedostot ovat samat kuin kuvauksessa." },
        { missa: "Pull requestin sivun yläreuna", tee: "Valitse välilehti Conversation. Vieritä sivun loppuun ja valitse vihreä Merge pull request.", naet: "Vihreä painike Confirm merge tulee näkyviin." },
        { missa: "Pull requestin sivun loppu", tee: "Valitse Confirm merge.", naet: "Sivulla lukee Merged. Muutokset ovat päähaarassa main." },
        { missa: "Vain oma pull request haarasta", tee: "Valitse Delete branch. Jatka sitten työvaiheen seuraavasta osatehtävästä.", naet: "Sivulla lukee, että haara on poistettu. Ohjaajan pull requestissa tätä painiketta ei käytetä." },
        { missa: "Vain ohjaajan pull request: VS Code", tee: "Avaa repository. Ohje: [[ohje:avaa-repository]].", naet: "Explorerissa lukee VEKTORIPAJA." },
        { missa: "Vain ohjaajan pull request: VS Code", tee: "Paina Ctrl+Shift+P. Kirjoita Git: Pull ja paina Enter.", naet: "Pull requestin tiedostot näkyvät Explorerissa omalla koneellasi." }
      ]
    },
    {
      tunnus: "teams",
      otsikko: "Lähetä viesti Teamsissa",
      johdanto: "Ohjaaja on Matti Seise. Asiakkaat ovat Matti Seise ja Antti Honkasalo.",
      vaiheet: [
        { missa: "Teams, vasen reuna", tee: "Valitse Chat. Suomenkielisessä Teamsissa sen nimi on Keskustelu.", naet: "Keskustelujen lista." },
        { missa: "Keskustelujen lista", tee: "Valitse keskustelu, jossa ovat juuri viestin vastaanottajat.", naet: "Keskustelu on auki. Ylhäällä lukee vastaanottajan nimi tai molempien nimet." },
        { missa: "Jos keskustelua ei ole", tee: "Valitse New chat. Kirjoita kenttään To jokaisen vastaanottajan nimi ja valitse nimi listasta.", naet: "Kentässä To ovat kaikki vastaanottajat, esimerkiksi Matti Seise ja Antti Honkasalo." },
        { missa: "Viestikenttä alareunassa", tee: "Napsauta kenttää. Paina Ctrl+V.", naet: "Viesti näkyy kentässä." },
        { missa: "Viestikenttä", tee: "Lue viesti ja täydennä tyhjät kohdat. Tee uusi rivi näppäimillä Shift+Enter, koska pelkkä Enter lähettää viestin.", naet: "Viestissä ei ole enää tyhjiä kohtia." },
        { missa: "Viestikenttä", tee: "Paina Enter.", naet: "Viesti näkyy keskustelussa. Se on lähetetty." },
        { missa: "Jos lähetät kuvan", tee: "Paina Windows-näppäin+Shift+S ja vedä hiirellä alue kuvaan. Napsauta Teamsin viestikenttää ja paina Ctrl+V.", naet: "Kuva näkyy viestikentässä. Paina Enter, niin kuva lähtee. Kuvaa ei tallenneta repositoryyn." },
        { missa: "Jos kopioit viestin Teamsista", tee: "Maalaa viestin teksti hiirellä. Paina Ctrl+C.", naet: "Viestin teksti on leikepöydällä." },
        { missa: "Jos aloitat puhelun ja jaat näytön", tee: "Valitse keskustelun oikeasta yläkulmasta videopuhelun painike. Kun puhelu on auki, valitse Jaa (Share) ja jaettava ikkuna, tai pyydä toista tekemään niin.", naet: "Jaettu ikkuna näkyy puhelussa punaisella kehyksellä. Lopeta jako valitsemalla Lopeta jakaminen (Stop sharing)." }
      ]
    },
    {
      tunnus: "actions",
      otsikko: "Tarkista Actions-ajo",
      johdanto: "GitHub Actions tekee julkaisun, kun pushaat tagin eli nimetyn version, esimerkiksi v0.0.41. Ajo eli yksi GitHub Actionsin suorituskerta kestää noin 10 minuuttia.",
      vaiheet: [
        { missa: "Selain", tee: "Avaa [[github:actions|repositoryn Actions-sivu]].", naet: "Lista ajoista. Ylimpänä on uusin ajo." },
        { missa: "Actions-sivu, vasen reuna", tee: "Valitse Julkaisu.", naet: "Vain julkaisun ajot näkyvät. Ajon nimessä on tagi, esimerkiksi Julkaisu v0.0.41." },
        { missa: "Ylin ajo", tee: "Odota, kunnes ajon kohdalla on vihreä tai punainen merkki. Jos merkki ei vaihdu 15 minuutissa, paina F5.", naet: "Vihreä ✓ tarkoittaa, että ajo meni läpi. Punainen ✗ tarkoittaa virhettä." },
        { missa: "Ylin ajo", tee: "Napsauta ajon nimeä. Napsauta sitten vasemmalta kohtaa windows.", naet: "Ajon askeleet näkyvät listana, esimerkiksi Asenna kirjastot ja Aja testit (pytest)." },
        { missa: "Askeleiden lista", tee: "Napsauta askelta Aja itsetesti valmiille .exe:lle. Itsetesti on sovelluksen oma tarkistus, joka ajetaan valmiille Windows-versiolle.", naet: "Askeleen rivit aukeavat. Viimeisellä rivillä lukee ITSETESTI LÄPI." },
        { missa: "Jos ajo on punainen", tee: "Lähetä ohjaajalle Teamsissa kuva punaisesta askeleesta. Ohje: [[ohje:teams]], kohta Jos lähetät kuvan.", naet: "Ohjaaja vastaa. Uutta tagia ei tehdä ennen vastausta. Kuvaa ei tallenneta repositoryyn." }
      ],
      kuvaohjeet: ["github-actions-ajo"]
    },
    {
      tunnus: "release",
      otsikko: "Lataa zip releasesta ja pura se",
      johdanto: "Release on GitHubin julkaisusivu. Siellä on zip-tiedosto, jossa on valmis Windows-versio. Pura zip Lataukset-kansioon, ei repositoryyn.",
      vaiheet: [
        { missa: "Selain", tee: "Avaa [[github:releases|repositoryn Releases-sivu]].", naet: "Ylimpänä on uusin julkaisu. Sen nimessä on tagi, esimerkiksi v0.0.41." },
        { missa: "Ylimmän julkaisun kohta Assets", tee: "Napsauta tiedostoa, jonka nimen lopussa on windows.zip.", naet: "Selain lataa zipin Lataukset-kansioon." },
        { missa: "Resurssienhallinta, Lataukset-kansio", tee: "Napsauta zipiä hiiren oikealla painikkeella. Valitse Pura kaikki ja sitten Pura. Kohdekansiota ei muuteta.", naet: "Purettu kansio aukeaa Lataukset-kansioon. Sen sisällä on kansio Vektoripaja." },
        { missa: "Purettu kansio Vektoripaja", tee: "Kaksoisnapsauta tiedostoa Vektoripaja.exe.", naet: "Sovellus käynnistyy. Jos sen sijaan näkyy sininen SmartScreen-varoitus, sovellus ei ole vielä käynnistynyt." },
        { missa: "Jos näkyy sininen SmartScreen-varoitus \"Windows suojasi tietokonettasi\"", tee: "Valitse Lisätietoja. Valitse sitten Suorita silti.", naet: "Sovellus käynnistyy. Varoitus tulee, koska sovellusta ei ole allekirjoitettu." }
      ],
      kuvaohjeet: ["github-release-lataus", "windows-pura-kaikki", "windows-smartscreen"]
    },
    {
      tunnus: "tagi",
      otsikko: "Julkaise versio tagilla",
      johdanto: "Tagi on nimetty versio, esimerkiksi v0.0.43. Kun pushaat tagin, GitHub Actions tekee releasen. Työvaiheessa ovat oman viikon komennot valmiina.",
      vaiheet: [
        { missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Kaikki on GitHubissa." },
        { missa: "Terminaali", tee: "Aja työvaiheen ensimmäinen komento, esimerkiksi `git tag v0.0.43`. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on nyt omalla koneellasi." },
        { missa: "Terminaali", tee: "Aja työvaiheen toinen komento, esimerkiksi `git push origin v0.0.43`.", naet: "Terminaalissa lukee [new tag] ja tagisi nimi." },
        { missa: "Selain", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo on vihreä." },
        { missa: "Selain", tee: "Avaa [[github:releases|repositoryn Releases-sivu]].", naet: "Ylimpänä on julkaisu, jonka nimessä on tagisi. Kohdassa Assets on zip." },
        { missa: "Jos julkaiset saman viikon version uudelleen", tee: "Käytä komennoissa tagia, jonka loppuun on lisätty -2, esimerkiksi `git tag v0.0.43-2` ja `git push origin v0.0.43-2`.", naet: "Uusi julkaisu syntyy. Samaa tagia ei käytetä kahdesti." }
      ]
    },
    {
      tunnus: "krediitit",
      otsikko: "Katso krediittien kulutus",
      johdanto: "GitHub Copilotilla on 200 krediittiä kuukaudessa. VS Code näyttää, montako prosenttia niistä on käytetty, esimerkiksi 13% used. Yksi prosentti on kaksi krediittiä.",
      vaiheet: [
        { missa: "VS Code, alareunan tilarivin oikea reuna", tee: "Napsauta Copilot-kuvaketta. Kuvake on pieni pää, jolla on suojalasit.", naet: "Ikkuna, jossa on rivi Included credits ja prosenttiluku, esimerkiksi 13% used." },
        { missa: "Sama ikkuna", tee: "Lue Included credits -rivin prosenttiluku. Kirjoita se paperille.", naet: "Luku kertoo, montako prosenttia kuun krediiteistä on käytetty." },
        { missa: "Jos VS Code ei näytä lukua", tee: "Avaa [GitHubin laskutussivu](https://github.com/settings/billing). Valitse Metered usage -kohdasta Copilot.", naet: "Copilotin kulutus tässä kuussa. Kirjoita paperille luku yksikköineen sellaisenaan, esimerkiksi $0.26. Jos sivu ei näytä lukua, kirjoita ei lukua ja kerro asiasta viikkopalaverissa." }
      ],
      kuvaohjeet: ["github-kayttonakyma"]
    },
    {
      tunnus: "kuvakaappaus",
      otsikko: "Ota kuvakaappaus ja tallenna se",
      johdanto: "Tallenna kuva repositoryn kansioon [[tiedosto:kuvat|project-docs/kuvat]] vain, kun työvaihe antaa kuvalle tiedostonimen. Kun kuva on vain ohjaajalle, lähetä se suoraan Teamsissa. Ohje: [[ohje:teams]], kohta Jos lähetät kuvan.",
      vaiheet: [
        { missa: "Ikkuna, josta otat kuvan", tee: "Paina Windows-näppäin+Shift+S.", naet: "Näyttö tummenee. Ylhäällä on kuvakaappaustyökalun valikko." },
        { missa: "Näyttö", tee: "Vedä hiirellä suorakulmio sen alueen ympärille, jonka haluat kuvaan.", naet: "Oikeaan alakulmaan tulee ilmoitus: kuva on leikepöydällä." },
        { missa: "Ilmoitus oikeassa alakulmassa", tee: "Napsauta ilmoitusta. Paina Ctrl+S.", naet: "Tallennusikkuna aukeaa. Jos ilmoitus ehti kadota, paina Windows-näppäin+N ja napsauta ilmoitusta ilmoituskeskuksessa." },
        { missa: "VS Code, Explorer", tee: "Napsauta kansiota kuvat hiiren oikealla painikkeella. Valitse Copy Path.", naet: "Kansion polku on leikepöydällä. Kuva on yhä kuvakaappaustyökalussa." },
        { missa: "Tallennusikkunan osoiterivi ylhäällä", tee: "Palaa tallennusikkunaan tehtäväpalkista. Napsauta osoiteriviä ja paina Ctrl+V ja Enter.", naet: "Ikkunan yläreunassa lukee kuvat." },
        { missa: "Tallennusikkunan kenttä Tiedostonimi", tee: "Kirjoita työvaiheessa annettu nimi, esimerkiksi obj-blenderissa.png. Valitse Tallenna.", naet: "Kuva näkyy VS Coden Explorerissa kansiossa kuvat." }
      ]
    }
  ],

  /* ---- v2.8: tiedostokortit (Työtapa → Dokumentit). Jokainen project-docs-tiedosto on valmiina
     repositoryssa. esimerkki on täytetty malli toisesta aiheesta (kuvitteellinen reseptisovellus
     Reseptikirja), jotta sitä ei voi kopioida sellaisenaan. pohja on tiedoston alkusisältö:
     tyokalut/tee_pohjat.js kirjoittaa sen kansioon pohjat/python-pohja/project-docs. ---- */
  tiedostokortit: {
    suunnitelma: {
      polku: "project-docs/suunnitelma.md",
      milloin: "Viikoilla 40–5. Kirjoita päätös sillä viikolla, joka otsikossa lukee.",
      mitaKirjoitetaan: [
        "Jokaisen otsikon jälkeen on ohjerivi, joka alkaa merkillä >. Kirjoita oma tekstisi ohjerivin jälkeen omalle rivilleen. Ohje: [[ohje:markdown]].",
        "Otsikossa MVP omin sanoin MVP tarkoittaa pakollista ydintä: toimintoja, joiden pitää valmistua ennen joulua.",
        "Kirjoita päätöksen lisäksi peruste: miksi valitsit näin. Kytke peruste pakolliseen ytimeen tai omiin kriteereihisi.",
        "Kirjoita osion C ohjaajan päätökset vasta, kun ohjaaja on päättänyt. Kirjoita päätös ja päivä. Tyhjä kohta on oikein, kunnes asia on sovittu."
      ],
      esimerkki: "### MVP omin sanoin (viikko 40)\n> Mikä kuuluu pakolliseen ytimeen ja miksi? Mitkä asiat odottavat ja miksi?\nPakolliseen ytimeen kuuluvat reseptin lisäys, haku nimellä ja tallennus,\nkoska ilman niitä sovelluksella ei voi tehdä reseptikirjaa.\nKuvien lisäys odottaa, koska reseptin voi kirjoittaa ilman kuvaa.",
      eiRiita: "### MVP omin sanoin (viikko 40)\n> Mikä kuuluu pakolliseen ytimeen ja miksi? Mitkä asiat odottavat ja miksi?\nKaikki tärkeät toiminnot.",
      commitViesti: "Päivitä suunnitelma",
      pohja: [
        "# Vektoripaja – suunnitelma",
        "",
        "> Kirjoita oma tekstisi jokaisen >-ohjerivin jälkeen omalle rivilleen. Älä poista ohjerivejä.",
        "> Kirjoita päätös sillä viikolla, joka otsikossa lukee. Tee jokaisen muutoksen jälkeen commit ja push.",
        "",
        "## A · Perustiedot",
        "> Projektin nimi ja tekijä. Kirjoita ne viikolla 40.",
        "",
        "### Projektin nimi (viikko 40)",
        "> Kirjoita projektin nimi.",
        "",
        "### Tekijä (viikko 40)",
        "> Kirjoita tekijänimi, jonka sovit ohjaajan kanssa.",
        "",
        "## 1 · Tavoite",
        "> Esitäytetty toimeksiannosta. Älä muuta.",
        "",
        "Windowsilla toimiva työpöytäsovellus, joka avaa Inkscapessa piirretyn SVG-tiedoston ja tekee siitä",
        "low-poly-mallin. Layerit ja ryhmät muuttuvat mallin osiksi, puoliprofiilista syntyy pyörähdyskappale",
        "ja viivasta putki. Malli viedään .obj-tiedostoksi niin, että jokainen osa on oma objektinsa.",
        "",
        "## 2 · Asiakkaat ja käyttäjät",
        "> Esitäytetty toimeksiannosta. Älä muuta.",
        "",
        "Asiakkaat ovat Matti Seise ja Antti Honkasalo. Käyttäjät ovat opiskelijoita, jotka piirtävät",
        "sujuvasti Inkscapessa mutta jäävät jumiin perinteisissä 3D-ohjelmissa.",
        "Vaatimukset ja niiden tärkeysjärjestys: https://mattiseise.github.io/projektikoontisivu/vektoripaja/#view-toimeksianto",
        "",
        "## B · Omat päätökset",
        "> Sinun päätöksesi ja perustelusi. Jokaisen otsikon viikko kertoo, milloin kirjoitat.",
        "",
        "### MVP omin sanoin (viikko 40)",
        "> Mikä kuuluu pakolliseen ytimeen ja miksi? Mitkä asiat odottavat ja miksi?",
        "",
        "### Tekninen pohja: hyväksynkö ehdotuksen ja miksi (viikko 41)",
        "> Hyväksytkö toimeksiannon teknisen ehdotuksen? Perustele vähintään kahdella pakollisen ytimen toiminnolla.",
        "",
        "### Käyttöliittymävaatimus (viikko 41)",
        "> Kirjoita taustaväri, tekstin väri, tekstin koko ja painikkeiden koko.",
        "",
        "### Kansiorakenne ja moduulien rajat (viikko 43)",
        "> Kirjoita kansiot ja tiedostot. Kirjoita jokaisen moduulin perään sen yksi vastuu.",
        "",
        "### Dokumentointitapa (viikko 43)",
        "> Kirjoita palaverissa sovittu tapa: README ja käyttöohje. Kirjoita palaverin päivä.",
        "",
        "### Rajapinnat (viikot 44, 48 ja 49)",
        "> Kirjoita jokaisesta viikon funktiosta nimi, syöte ja paluuarvo.",
        "",
        "### Valinnan toiminta (viikko 44)",
        "> Kun käyttäjä napsauttaa osaa, valitaanko lapsi vai koko kappale? Kirjoita päätös ja peruste.",
        "",
        "### Revolven valintatapojen vertailu (viikko 44)",
        "> Vertaa kahta tapaa. Kirjoita kummastakin hyvät ja huonot puolet ja oma suosituksesi.",
        "",
        "### Revolven valintatapa (viikko 45)",
        "> Kirjoita palaverissa sovittu tapa ja palaverin päivä.",
        "",
        "### Profiili akselin väärällä puolella (viikko 45)",
        "> Mitä tehdään, jos profiilin piste on akselin väärällä puolella? Vastaus on testin 11 odotettu tulos.",
        "",
        "### Tallennustapa (viikko 50)",
        "> Vertaa tallennustapoja omilla kriteereilläsi. Kirjoita valinta, peruste ja oman tallennustiedostosi koko.",
        "",
        "### Tärkeän jatkon järjestys (viikko 2)",
        "> Kirjoita toiminnot järjestyksessä. Kirjoita jokaiselle tuntiarvio ja asiakkaan prioriteetti.",
        "",
        "### Osien tunnistus päivityksessä (viikko 3)",
        "> Tunnistetaanko osa nimellä vai tunnisteella? Kirjoita palaverissa sovittu tapa ja peruste.",
        "",
        "### Seuraava toiminto (viikko 4)",
        "> Kirjoita, minkä tärkeän jatkon toiminnon teet ja miksi juuri sen.",
        "",
        "### Käyttöliittymävaatimuksen tarkistus (viikko 5)",
        "> Mitä viikon 41 käyttöliittymävaatimuksesta vielä puuttuu?",
        "",
        "## C · Ohjaajan päätökset",
        "> Kirjoita päätös vasta, kun ohjaaja on päättänyt. Kirjoita myös päivä. Tyhjä kohta on oikein, kunnes asia on sovittu.",
        "",
        "### Krediittien lisärahoitus (lokakuun loppuun mennessä)",
        "> Ohjaajan päätös ja päivä.",
        "",
        "### Pakollisen ytimen myöhästymisen ratkaisu (viikko 47)",
        "> Ohjaajan päätös ja päivä. Tarvitaan vain, jos pakollinen ydin on myöhässä.",
        "",
        "### Katselmoinnin kirjaustapa (ennen viikkoa 51)",
        "> Ohjaajan päätös ja päivä.",
        "",
        "### Julkaisutestaaja (viikko 5)",
        "> Kirjoita vain rooli, esimerkiksi toinen opiskelija. Lähetä nimi ohjaajalle Teamsissa.",
        "",
        "### Lisenssi (ennen viikkoa 6)",
        "> Ohjaajan päätös ja päivä.",
        "",
        "### Näytön ajankohta ja arvioijat (viikko 9)",
        "> Ohjaajan päätös ja päivä.",
        ""
      ].join("\n")
    },
    projektipaivakirja: {
      polku: "project-docs/projektipaivakirja.md",
      milloin: "Joka viikon viimeisenä työpäivänä, yleensä perjantaina.",
      mitaKirjoitetaan: [
        "Etsi tämän viikon otsikko. Viikon sivun kohdassa Viikon kirjaus ovat viikon otsikko ja commit-viesti kopioitavina.",
        "Vastaa otsikon kolmeen kysymykseen: Mitä tein ja miten? Miksi tein näin? Missä työnäyte on?",
        "Kirjoita työnäytteen kohdalle issuen tai testin numero, commitin tunnus tai tiedoston linkki. Kirjoita myös näyttömatriisin vaatimus, esimerkiksi versionhallinta.",
        "Jos viikolla tehtiin funktio, selitä se selityspohjalla. Selityspohja on viikon sivun kohdassa Viikon kirjaus. Kerro, mitä funktio saa, mitä se palauttaa, mitä se valitsee eli tekee if-ehdolla, mitä se toistaa eli tekee silmukalla tai rekursiolla ja mikä testi sen tarkistaa."
      ],
      esimerkki: "## Vko 12 – Reseptin haku (16.–20.3.2026)\n\n### Mitä tein ja miten?\nTein hakukentän, joka suodattaa reseptit nimen mukaan (issue #7).\nFunktio hae(reseptit, sana) saa listan ja hakusanan. Se palauttaa\nreseptit, joiden nimessä sana on. Testi 4 tarkistaa tyhjän haun.\n\n### Miksi tein näin?\nHaku nimellä kuuluu pakolliseen ytimeen. Pyysin GitHub Copilotia korjaamaan\nehdotuksen, joka muutti testitiedostoa.\n\n### Missä työnäyte on?\nIssue #7, commit 3f2a1c9 ja testi 4. Vaatimus: testaus.",
      eiRiita: "## Vko 12 – Reseptin haku (16.–20.3.2026)\n\n### Mitä tein ja miten?\nKoodasin.\n\n### Miksi tein näin?\nPiti tehdä.\n\n### Missä työnäyte on?\nGitHubissa.",
      commitViesti: "Kirjaa viikon (numero) projektipäiväkirja"
    },
    "ai-loki": {
      polku: "project-docs/ai-loki.md",
      milloin: "Työsyklin askeleessa 6: yksi merkintä korttia kohden. Jos käytät tekoälyä työsyklin ulkopuolella, kirjoita merkintä samana päivänä.",
      mitaKirjoitetaan: [
        "Avaa tiedosto ja paina Ctrl+End ja Enter. Liitä merkinnän pohja ja täytä sen kohdat. Pohja on kopioitavana työsyklin askeleessa 6 ja tiedoston kohdassa ## Merkinnän pohja. Jos et käyttänyt työsykliä, kirjoita kaistan tilalle ilman korttia.",
        "Otsikkorivillä ovat päivä, kaikki kortissa käytetyt tekoälytyökalut ja kaista, esimerkiksi ### 7.10.2026 · Copilot ja GitHub Copilot, Tiedosto-kaista. Copilot tarkoittaa Microsoft 365 Copilotia.",
        "Päätös on aina yksi kolmesta: hyväksyn, korjautan tai hylkään. Korjautan tarkoittaa, että pyysit tekoälyä korjaamaan vastaustaan. Kirjoita kortin tärkein päätös ja sille yksi peruste.",
        "Aineistoviite on issuen tai testin numero tai commitin tunnus. Älä kirjoita henkilötietoja, salasanoja tai luottamuksellista aineistoa."
      ],
      esimerkki: "### 12.3.2026 · GitHub Copilot, Agentti-kaista\n- Mihin pyysin apua: Hakukenttä, joka suodattaa reseptit nimen mukaan.\n- Päätös: korjautan\n- Peruste: Ehdotus muutti myös testitiedostoa test_haku.py. Pyysin\n  muuttamaan vain tiedostoa haku.py.\n- Aineistoviite: issue #7, testi 4\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.",
      eiRiita: "### 12.3.2026 · Copilot\n- Mihin pyysin apua: koodi\n- Päätös: ok",
      commitViesti: "Kirjaa AI-lokiin",
      pohja: [
        "# Vektoripaja – AI-loki",
        "",
        "> Kirjoita merkintä heti, kun olet käyttänyt tekoälyä. Uusin merkintä tulee viimeiseksi.",
        "> Älä kirjoita henkilötietoja, salasanoja tai luottamuksellista aineistoa.",
        "",
        "## Merkinnän pohja",
        "> Kopioi nämä kuusi riviä tiedoston loppuun otsikon ## Merkinnät jälkeen ja täytä ne.",
        "",
        "### pp.kk.vvvv · työkalut, kaista",
        "- Mihin pyysin apua: ",
        "- Päätös: hyväksyn / korjautan / hylkään",
        "- Peruste: ",
        "- Aineistoviite: issue #__, testi __",
        "- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.",
        "",
        "## Esimerkkimerkintä",
        "> Malli toisesta aiheesta: kuvitteellinen reseptisovellus. Älä kopioi sisältöä.",
        "",
        "### 12.3.2026 · GitHub Copilot, Agentti-kaista",
        "- Mihin pyysin apua: Hakukenttä, joka suodattaa reseptit nimen mukaan.",
        "- Päätös: korjautan",
        "- Peruste: Ehdotus muutti myös testitiedostoa test_haku.py. Pyysin muuttamaan vain tiedostoa haku.py.",
        "- Aineistoviite: issue #7, testi 4",
        "- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.",
        "",
        "## Merkinnät",
        "> Omat merkintäsi tähän, vanhin ensin.",
        ""
      ].join("\n")
    },
    kysymykset: {
      polku: "project-docs/kysymykset.md",
      milloin: "Viikolla 40 kirjoitat kysymykset. Viikolla 41 kirjoitat asiakkaiden vastaukset.",
      mitaKirjoitetaan: [
        "Kirjoita jokainen kysymys omaksi otsikokseen numeron perään. Kysy asia, jota [[toimeksianto]] ei kerro.",
        "Kirjoita vastaus kysymyksen riville Vastaus, kun asiakas on vastannut. Jos asia jäi auki, kirjoita: auki, sovitaan viikolla __.",
        "Kirjoita vastaajasta vain rooli, koska repository on julkinen. Asiakas 1 on Antti Honkasalo ja asiakas 2 on Matti Seise. Jos ohjaaja kertoo asiakkaan vastauksen, kirjoita vastaajaksi sen asiakkaan rooli."
      ],
      esimerkki: "### 1. Pitääkö reseptin voida tulostaa?\n- Vastaus (viikko 41): Ei ensimmäisessä versiossa. Tulostus on jatkolistalla.\n- Vastaaja: asiakas 1\n\n### 2. Montako reseptiä kirjassa on enintään?\n- Vastaus (viikko 41): Noin 200. Haun pitää toimia nopeasti tällä määrällä.\n- Vastaaja: asiakas 2",
      eiRiita: "### 1. Onko kaikki ok?\n- Vastaus: joo",
      commitViesti: "Kirjoita kysymykset asiakkaille",
      pohja: [
        "# Vektoripaja – kysymykset asiakkaille",
        "",
        "> Kirjoita kysymykset viikolla 40. Kirjoita vastaukset viikolla 41, kun asiakkaat ovat vastanneet.",
        "> Repository on julkinen: kirjoita vastaajasta vain rooli, asiakas 1 tai asiakas 2.",
        "",
        "## Kysymykset ja vastaukset",
        "> Yksi kysymys on yksi otsikko. Vastaus ja vastaaja tulevat kysymyksen jälkeen.",
        "",
        "### 1. (kirjoita kysymys)",
        "- Vastaus (viikko 41): ",
        "- Vastaaja: asiakas 1 / asiakas 2",
        "",
        "### 2. (kirjoita kysymys)",
        "- Vastaus (viikko 41): ",
        "- Vastaaja: asiakas 1 / asiakas 2",
        "",
        "### 3. (kirjoita kysymys)",
        "- Vastaus (viikko 41): ",
        "- Vastaaja: asiakas 1 / asiakas 2",
        ""
      ].join("\n")
    },
    kirjastot: {
      polku: "project-docs/kirjastot.md",
      milloin: "Viikolla 43 svgelementsin rajoitteet. Viikolla 46 putkigeometrian rajoitteet.",
      mitaKirjoitetaan: [
        "Yksi rajoite on yksi otsikko. Kirjoita jokaisesta neljä kohtaa: kirjasto, mitä kokeilin, mitä tapahtui ja mitä teen.",
        "Kokeile rajoite aina omalla tiedostollasi. Kirjoita tiedoston nimi kohtaan Mitä kokeilin."
      ],
      esimerkki: "### Rajoite 1\n- Kirjasto: Pillow\n- Mitä kokeilin: Avasin reseptin kuvan resepti-kakku.heic.\n- Mitä tapahtui: Pillow antoi virheen UnidentifiedImageError.\n- Mitä teen: Hyväksyn vain .jpg- ja .png-kuvat ja kerron sen käyttäjälle.",
      eiRiita: "### Rajoite 1\n- Kirjasto: Pillow\n- Mitä kokeilin: \n- Mitä tapahtui: Pillowilla on rajoitteita.\n- Mitä teen: ",
      commitViesti: "Kirjaa kirjaston rajoite",
      pohja: [
        "# Vektoripaja – kirjastojen rajoitteet",
        "",
        "> Kirjaa jokainen rajoite, jonka kokeilit omalla tiedostollasi. Yksi rajoite on yksi otsikko.",
        "",
        "## Rajoitteet",
        "> Kopioi otsikko ja neljä riviä jokaista uutta rajoitetta varten.",
        "",
        "### Rajoite 1",
        "- Kirjasto: ",
        "- Mitä kokeilin: ",
        "- Mitä tapahtui: ",
        "- Mitä teen: ",
        ""
      ].join("\n")
    },
    tietoturva: {
      polku: "project-docs/tietoturva.md",
      milloin: "Viikolla 50.",
      mitaKirjoitetaan: [
        "Taulukossa on neljä saraketta: uhka, testi, tulos ja toimenpide. Sarakkeet erotetaan merkillä |.",
        "Yksi uhka on yksi rivi. Kaksi ensimmäistä riviä ovat valmiina: haitallinen SVG (testi 4) ja rikottu tallennustiedosto (testi 22). Täytä niistä tulos ja toimenpide."
      ],
      esimerkki: "| Uhka | Testi | Tulos | Toimenpide |\n|---|---|---|---|\n| Reseptitiedostossa on 10 000 merkin nimi | Testi 9 | Sovellus jumittui 4 s | Nimen enimmäispituus 100 merkkiä |\n| Rikottu reseptitiedosto | Testi 12 | Virheilmoitus, ei kaatumista | Ei toimenpiteitä |",
      eiRiita: "| Uhka | Testi | Tulos | Toimenpide |\n|---|---|---|---|\n| Hakkerit | | Turvallinen | |",
      commitViesti: "Kirjoita tietoturva-arvio",
      pohja: [
        "# Vektoripaja – tietoturva-arvio",
        "",
        "> Yksi uhka on yksi rivi. Täytä kaikki neljä saraketta. Sarakkeet erotetaan merkillä |.",
        "",
        "## Uhat",
        "> Kaksi ensimmäistä riviä ovat valmiina. Lisää omat uhkasi niiden jälkeen.",
        "",
        "| Uhka | Testi | Tulos | Toimenpide |",
        "|---|---|---|---|",
        "| Haitallinen SVG, jossa on script-elementti | Testi 4 | | |",
        "| Rikottu tallennustiedosto | Testi 22 | | |",
        ""
      ].join("\n")
    },
    katselmointi: {
      polku: "project-docs/katselmointi.md",
      milloin: "Viikolla 51 katselmoinnin aikana ja heti sen jälkeen.",
      mitaKirjoitetaan: [
        "Katselmoinnissa asiakkaat kokeilevat versiota ja kertovat, mitä muutetaan.",
        "Kirjoita asiakkaiden havainnot omin sanoin tiivistettynä. Kirjoita henkilöistä vain rooli: asiakas 1 on Antti Honkasalo ja asiakas 2 on Matti Seise.",
        "Kirjoita oma tulkintasi eri otsikon alle kuin havainnot.",
        "Kirjoita jokaisesta sovitusta muutoksesta issuen numero ja prioriteetti. Prioriteetti on asiakkaan antama tärkeysnumero, ja 1 on tärkein."
      ],
      esimerkki: "## Asiakkaiden havainnot tiivistettynä\n- Asiakas 1 ei löytänyt hakukenttää. Hän etsi sitä ylhäältä.\n\n## Oma tulkinta\n- Hakukenttä on liian alhaalla ja liian pieni.\n\n## Sovitut muutokset\n- issue #14 · prioriteetti 1: hakukenttä ylös",
      eiRiita: "## Asiakkaiden havainnot tiivistettynä\n- Tykkäsivät.\n\n## Oma tulkinta\n- Hyvä.",
      commitViesti: "Kirjaa katselmointi",
      pohja: [
        "# Vektoripaja – katselmointi",
        "",
        "> Repository on julkinen: kirjoita henkilöistä vain rooli. Lähetä nimet ja sanatarkat lausumat ohjaajalle Teamsissa.",
        "",
        "## Perustiedot",
        "> Päivä, versio ja osallistujien roolit.",
        "",
        "- Päivä: pp.kk.vvvv",
        "- Versio: v0.1 (commit ___)",
        "- Osallistujat: asiakas 1, asiakas 2 (roolit, ei nimiä)",
        "- Missä kokeiltiin: asiakas 1 omalla Windows-koneella releasen zipistä, asiakas 2 opiskelijan koneella",
        "",
        "## Asiakkaiden havainnot tiivistettynä",
        "> Ei nimiä eikä sanatarkkoja lausumia.",
        "",
        "- ",
        "",
        "## Oma tulkinta",
        "> Sinun tulkintasi havainnoista. Pidä se erillään havainnoista.",
        "",
        "- ",
        "",
        "## Sovitut muutokset",
        "> Jokaisesta muutoksesta issuen numero ja prioriteetti.",
        "",
        "- issue #__ · prioriteetti __",
        ""
      ].join("\n")
    },
    julkaisutesti: {
      polku: "project-docs/julkaisutesti.md",
      milloin: "Viikolla 6 julkaisutestin aikana ja heti sen jälkeen.",
      mitaKirjoitetaan: [
        "Kirjoita otsikon Testin vaiheet jälkeen jokaisen vaiheen kohdalle, miten julkaisutestaaja onnistui.",
        "Kirjoita jokainen kohta, jossa testaaja epäröi. Kirjoita se omin sanoin ja roolilla julkaisutestaaja.",
        "Kirjoita korjaukset otsikon ## Korjaukset ohjeeseen jälkeen: jokaisesta korjauksesta oma listan rivi, jossa ovat epäröinnin lyhyt nimi, tiedosto ja kohta sekä mitä muutit."
      ],
      esimerkki: "## Epäröinnit omin sanoin\n- Julkaisutestaaja ei löytänyt Lisää resepti -painiketta. Hän etsi sitä valikosta.\n\n## Korjaukset ohjeeseen\n- README: lisäsin kuvan, jossa painike on merkitty.",
      eiRiita: "## Epäröinnit omin sanoin\n- Meni hyvin.",
      commitViesti: "Kirjaa julkaisutesti",
      pohja: [
        "# Vektoripaja – julkaisutesti",
        "",
        "> Repository on julkinen: kirjoita testaajasta vain rooli. Lähetä nimi ja sanatarkat lausumat ohjaajalle Teamsissa.",
        "",
        "## Perustiedot",
        "> Päivä, versio, testaajan rooli ja kone.",
        "",
        "- Päivä: pp.kk.vvvv",
        "- Versio: v1.0-rc1 (julkaisuehdokas)",
        "- Testaaja: julkaisutestaaja (rooli)",
        "- Kone: Windows, Python asennettuna (kyllä/ei): ",
        "",
        "## Testin vaiheet",
        "> Kirjoita jokaisen vaiheen perään, miten testaaja onnistui.",
        "",
        "0. Zipin lataus releasesta ja purku: ",
        "1. Piirros Inkscapessa: ",
        "2. Tuonti: ",
        "3. Pyörähdyskappale (revolve) tai putki (inflate): ",
        "4. Vienti .obj-tiedostoksi: ",
        "",
        "## Epäröinnit omin sanoin",
        "> Ei sanatarkkoja lausumia.",
        "",
        "- ",
        "",
        "## Korjaukset ohjeeseen",
        "> Jokaisen epäröinnin korjaus README:hen tai käyttöohjeeseen.",
        "",
        "- ",
        ""
      ].join("\n")
    },
    saavutettavuus: {
      polku: "project-docs/saavutettavuus.md",
      milloin: "Viikolla 5: perusmittaus ennen muutoksia ja jälkimittaus niiden jälkeen.",
      mitaKirjoitetaan: [
        "Kirjoita FastPassin tulos ennen muutoksia: virheiden määrä ja kolme ensimmäistä havaintoa. FastPass on Accessibility Insights for Windows -työkalun pikatarkistus.",
        "Kirjoita sama mittaus muutosten jälkeen. Kirjoita, mikä parani ja mikä jäi. Kirjoita jäljelle jääneestä issuen numero. Kirjaa testien 25 ja 26 tulokset kortin issueen, ei tähän tiedostoon.",
        "Malliesimerkissä Lukija tarkoittaa Windowsin ruudunlukijaa. Se lukee näytön sisällön ääneen."
      ],
      esimerkki: "## Ennen muutoksia (viikko 5)\n- Päivä: 2.3.2026\n- Versio tai commit: 3f2a9c1\n- Virheitä: 5\n- Kolme ensimmäistä havaintoa:\n  1. Hakupainikkeelta puuttuu nimi.\n  2. Tekstikentältä puuttuu nimi.\n  3. Kuvakepainikkeelta puuttuu nimi.\n\n## Jälkeen (viikko 5)\n- Päivä: 5.3.2026\n- Virheitä: 0\n- Mikä parani: Hakupainike sai nimen, ja Lukija sanoo \"Hae\".\n- Mikä jäi: Lukija ei kerro hakutulosten määrää, issue #21.",
      eiRiita: "## Ennen muutoksia\n- Virheitä: paljon\n\n## Jälkeen\n- Parani.",
      commitViesti: "Kirjaa saavutettavuusmittaus",
      pohja: [
        "# Vektoripaja – saavutettavuusmittaus",
        "",
        "> Mittaa Accessibility Insights for Windowsin FastPassilla ennen muutoksia ja niiden jälkeen.",
        "",
        "## Ennen muutoksia (viikko 5)",
        "> Perusmittaus ennen kuin muutat sovellusta.",
        "",
        "- Päivä: ",
        "- Versio tai commit: ",
        "- Virheitä: ",
        "- Kolme ensimmäistä havaintoa:",
        "  1. ",
        "  2. ",
        "  3. ",
        "",
        "## Jälkeen (viikko 5)",
        "> Jälkimittaus samalla tavalla muutosten jälkeen.",
        "",
        "- Päivä: ",
        "- Versio tai commit: ",
        "- Virheitä: ",
        "- Mikä parani: ",
        "- Mikä jäi (issue-numero): ",
        "",
        ""
      ].join("\n")
    },
    kuvat: {
      otsikko: "kuvat/",
      polku: "project-docs/kuvat/",
      milloin: "Kun työvaihe pyytää kuvaa, esimerkiksi viikolla 49 kuva Blenderistä.",
      mitaKirjoitetaan: [
        "Tallenna kuvakaappaukset kansioon kuvat. Ohje: [[ohje:kuvakaappaus]].",
        "Nimeä kuva pienillä kirjaimilla ilman välilyöntejä, esimerkiksi obj-blenderissa.png."
      ],
      pohja: "# Kuvat\n\nTallenna projektin kuvat tähän kansioon. Nimeä kuva pienillä kirjaimilla ilman välilyöntejä, esimerkiksi obj-blenderissa.png.\n",
      pohjaTiedosto: "LUE_MINUT.md"
    }
  },

  /* ---- v2.8: siirtymä. Selaimen muistissa oleva teksti ladataan yhtenä tiedostona, jossa lukee
     kohdetiedosto ja otsikko (moottori: siirtymänappi). ---- */
  siirtyma: {
    tiedosto: "vektoripaja-selaimen-tekstit.md",
    suunnitelma: {
      polku: "project-docs/suunnitelma.md",
      kentat: {
        nimi: "Projektin nimi (viikko 40)", tekija: "Tekijä (viikko 40)", mvp: "MVP omin sanoin (viikko 40)",
        tekninenPohja: "Tekninen pohja: hyväksynkö ehdotuksen ja miksi (viikko 41)", kayttoliittyma: "Käyttöliittymävaatimus (viikko 41)",
        rakenne: "Kansiorakenne ja moduulien rajat (viikko 43)", dokumentointi: "Dokumentointitapa (viikko 43)",
        valinta: "Valinnan toiminta (viikko 44)", revolveValinta: "Revolven valintatapa (viikko 45)",
        akseli: "Profiili akselin väärällä puolella (viikko 45)", tallennus: "Tallennustapa (viikko 50)",
        p1Jarjestys: "Tärkeän jatkon järjestys (viikko 2)", tunnistus: "Osien tunnistus päivityksessä (viikko 3)",
        krediitit: "Krediittien lisärahoitus (lokakuun loppuun mennessä)", p0Myohastyminen: "Pakollisen ytimen myöhästymisen ratkaisu (viikko 47)",
        katselmointiKirjaus: "Katselmoinnin kirjaustapa (ennen viikkoa 51)", julkaisutestaaja: "Julkaisutestaaja (viikko 5)",
        lisenssi: "Lisenssi (ennen viikkoa 6)", arviointi: "Näytön ajankohta ja arvioijat (viikko 9)"
      }
    },
    paivakirja: {
      polku: "project-docs/projektipaivakirja.md",
      otsikko: "Vko {viikko} – {nimi}",
      kentat: { work: "Mitä tein ja miten?", reason: "Miksi tein näin?", evidence: "Missä työnäyte on?", next: "Mistä jatkan?" }
    },
    ailoki: { polku: "project-docs/ai-loki.md" }
  },

  /* ---- viikkojen ohjaava sisältö ---- */
  viikkoOhjeet: {
    40: {
      type: "pohjustus",
      rutiini: false,
      josJumissa: false,
      feature: "Työkalut ovat käytössä, projektilla on oma repository ja ensimmäinen versio on rajattu.",
      connection: "Vektoripajassa Inkscapella tehty piirros muuttuu muokattavaksi 3D-malliksi, jonka voi viedä Blenderiin. Tällä viikolla laitat työkalut ja oman repositoryn kuntoon. Lisäksi rajaat ensimmäisen toimivan version. Sen nimi on pakollinen ydin eli MVP. Näin seuraavien viikkojen toteutuksella on selkeä tavoite ja paikka, jossa muutokset säilyvät.",
      deliverable: "Versiotulosteet · GitHub Copilot käytössä · kloonattu ja jaettu repository · pohjat ja dokumentit pull requestista · pakollinen ydin suunnitelmassa · lähetetty kysymyslista · agenttipyynnön hinta.",
      why: "Ilman omaa kuvausta pakollisesta ytimestä Copilot pilkkoo väärää asiaa. Ilman mittausta et tiedä, montako agenttipyyntöä voit tehdä kuukauden krediiteillä.",
      done: "Ohjaaja on kutsuttu repositoryyn, pakollinen ydin on tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa, kysymyslista on lähetetty, ja tiedät agenttipyynnön hinnan.",
      record: "Kohtaan Mitä tein ja miten?: agenttipyynnön hinta (alku- ja loppulukema ja erotus). Kohtaan Miksi tein näin?: pakollisen ytimen perustelu yhdellä tai kahdella omalla virkkeellä ja linkki tiedostoon [[tiedosto:suunnitelma|suunnitelma.md]]. Älä kopioi koko tekstiä tiedostosta. Kohtaan Missä työnäyte on?: repositoryn osoite ja nämä näyttömatriisin vaatimukset: käyttää ohjelmointieditoria tai kehitysympäristöä, selvittää kehitystiimin kanssa asiakkaan tarpeet, asettaa kehitystiimin kanssa toteutettavat toiminnot tärkeysjärjestykseen sekä suunnittelee ja arvioi kehitystiimin kanssa tehtävien toteuttamista.",
      skills: ["Asiakkaan tarpeiden selvittäminen", "Tärkeysjärjestys: pakollinen ydin, tärkeä jatko ja jatkolista", "Kehitysympäristön käyttöönotto", "Versionhallinnan aloitus"],
      termit: ["MVP", "pakollinen ydin", "tärkeä jatko", "jatkolista", "tulkki", "pip", "virtuaaliympäristö", "repository", "kloonaus", "commit", "push", "tilatiedosto", "krediitti"],
      paivat: [
        ["Sopiminen ja asennus", "Sovi tekijänimi ja palaveripäivä. Tarkista työkalut, ota GitHub ja GitHub Copilot käyttöön ja vaihda teemat."],
        ["Repository", "Aseta Git. Luo repository, kloonaa se ja jaa se ohjaajalle."],
        ["Pohjat ja versiot", "Hyväksy ohjaajan pull request. Kirjoita versiot README:hen."],
        ["Pakollinen ydin ja kysymykset", "Lue [[toimeksianto]]. Kirjoita pakollinen ydin tiedostoon [[tiedosto:suunnitelma|suunnitelma.md]]. Lähetä kysymykset asiakkaille."],
        ["Mittaus", "Mittaa agenttipyynnön hinta. Kirjoita viikon kirjaus tiedostoon [[tiedosto:projektipaivakirja|projektipaivakirja.md]]."]
      ],
      tehtavat: {
        "40-1": {
          versio: "2026-10-05",
          miksi: "Seuraavalla viikolla tarvitset toimivan kehitysympäristön.",
          osat: [
            { vanha: 0, otsikko: "Sovi aloitus ohjaajan kanssa", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Tekijänimi näkyy julkisesti commiteissa, ja se voi olla muu kuin oikea nimesi. Kopioi viesti, kirjoita tekstit ___-viivojen tilalle ja poista päivä, joka ei sovi. Lähetä viesti. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Ohjaaja vahvistaa tekijänimen ja palaveripäivän vastauksessaan.", koodi: "Hei Matti,\nehdotan tekijänimekseni: ___\nViikkopalaveri sopii minulle: maanantaina / tiistaina klo ___", koodiOtsikko: "Viesti: kopioi tämä" },
            { vanha: 1, otsikko: "Tarkista VS Code, Inkscape ja Blender", missa: "Windowsin Käynnistä-valikko", tee: "Käynnistä VS Code, Inkscape ja Blender yksi kerrallaan.", naet: "Kaikki kolme ohjelmaa aukeavat. Jos ohjelma puuttuu, lataa sen Windowsin 64-bit-asennusohjelma ja asenna se oletusvalinnoin: [VS Code](https://code.visualstudio.com/download), [Inkscape](https://inkscape.org/release/) tai [Blender](https://www.blender.org/download/)." },
            { vanha: 1, otsikko: "Tarkista Git", missa: "VS Code, terminaali. Ohje: [[ohje:terminaali]]", tee: "Aja komento. Ohje: [[ohje:komento]]. Kirjoita versionumero paperille.", naet: "Terminaalissa lukee git version ja numero, esimerkiksi git version 2.47.1. Viikolla 40 rivin alussa ei lue (.venv), ja se on oikein. Jos lukee git : The term 'git' is not recognized, lataa [git-scm.com](https://git-scm.com/downloads/win)-sivulta 64-bit Git for Windows Setup, asenna se oletusvalinnoin ja käynnistä VS Code uudelleen. Avaa sitten terminaali ja aja komento uudelleen.", koodi: "git --version", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 2, otsikko: "Tarkista Python", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]]. Kirjoita versionumero paperille.", naet: "Terminaalissa lukee Python 3.13 ja numero. Jos lukee Python was not found, jos Microsoft Store aukeaa tai jos versio on muu, lataa [python.org](https://www.python.org/downloads/windows/)-sivulta Python 3.13:n Windows installer (64-bit) ja asenna se [[kuvaohje:python-asennus|kuvaohjeen]] mukaan.", koodi: "python --version", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 3, otsikko: "Varmista pip", missa: "VS Code, terminaali", tee: "Sulje VS Code ja avaa se uudelleen. Avaa terminaali ([[ohje:terminaali]]), aja komento ([[ohje:komento]]) ja kirjoita pipin versionumero paperille.", naet: "Tuloste on esimerkiksi pip 24.3.1 from C:\\...\\pip (python 3.13). Pipin versionumero on heti sanan pip jälkeen, esimerkissä 24.3.1. Rivin lopussa lukee (python 3.13). Jos rivin lopussa lukee jokin muu versio, maalaa tuloste hiirellä, paina Ctrl+C ja lähetä se ohjaajalle. Ohje: [[ohje:teams]].", koodi: "python -m pip --version", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 4, otsikko: "Tarkista Python-laajennus", missa: "VS Code, Extensions", tee: "Paina Ctrl+Shift+X. Kirjoita hakuun Python ja valitse laajennus, jonka julkaisija on Microsoft.", naet: "Laajennuksen kohdalla lukee Uninstall, eli se on asennettu. Jos lukee Install, valitse Install." },
            { vanha: 5, otsikko: "Vaihda VS Coden teema", missa: "VS Code", tee: "Paina Ctrl+K ja sitten Ctrl+T. Valitse listasta Dark High Contrast.", naet: "VS Coden tausta on musta, ja reunat ovat vahvat." }
          ],
          valmis: "VS Code, Inkscape ja Blender käynnistyvät, Gitin, Pythonin ja pipin versiot ovat paperilla, ja VS Coden teema on vaihdettu.",
          tallenna: "Tekijänimi ja palaveripäivä ohjaajan Teams-vastauksessa. Versiot paperilla työvaihetta 5 Kirjaa työkalujen versiot varten.",
          sanat: []
        },
        "40-6": {
          perii: ["40-1"],
          miksi: "Teet repositoryn GitHubiin. Viikon lopussa mittaat GitHub Copilotilla agenttipyynnön hinnan.",
          osat: [
            { otsikko: "Kirjaudu GitHubiin", missa: "Selain", tee: "Avaa [GitHubin kirjautumissivu](https://github.com/login) ja kirjaudu omalla GitHub-tunnuksellasi.", naet: "GitHubin oikeassa yläkulmassa on profiilikuvasi. Jos sinulla ei ole GitHub-tiliä tai kirjautuminen ei onnistu, kysy ohjaajalta Teamsissa. Ohje: [[ohje:teams]]." },
            { otsikko: "Vaihda GitHubin teema", missa: "Selain, GitHub", tee: "Avaa [GitHubin ulkoasuasetukset](https://github.com/settings/appearance). Valitse kohdasta Theme vaihtoehto Dark high contrast.", naet: "GitHubin tausta on musta, ja teksti on korkeakontrastinen." },
            { otsikko: "Asenna GitHub Copilot", missa: "VS Code, Extensions", tee: "Paina Ctrl+Shift+X. Kirjoita hakuun GitHub Copilot Chat ja valitse laajennus, jonka julkaisija on GitHub.", naet: "Laajennuksen kohdalla lukee Uninstall, eli se on asennettu. Jos lukee Install, valitse Install." },
            { otsikko: "Kirjaudu GitHub Copilotiin", missa: "VS Code, alareunan tilarivin oikea reuna", tee: "Napsauta Copilot-kuvaketta: pieni pää, jolla on suojalasit. Jos VS Code pyytää kirjautumaan, valitse kirjautuminen GitHubilla ja salli se selaimessa samalla tunnuksella.", naet: "Kun palaat VS Codeen, Copilot-kuvakkeen päällä ei ole viivaa. Jos kuvaketta ei ole, kysy ohjaajalta Teamsissa. Ohje: [[ohje:teams]]." },
            { otsikko: "Tarkista, että GitHub Copilot on käytössä", missa: "VS Code, alareunan tilarivin oikea reuna", tee: "Napsauta Copilot-kuvaketta uudelleen.", naet: "Aukeavassa ikkunassa on rivi Included credits ja prosenttiluku, esimerkiksi 0% used. Silloin GitHub Copilot on käytössä. Jos kuvaketta ei ole tai rivi puuttuu, kysy ohjaajalta Teamsissa. Ohje: [[ohje:teams]]." }
          ],
          valmis: "Olet kirjautunut GitHubiin, GitHubin teema on vaihdettu, ja Copilot-kuvake näyttää krediittien kulutuksen.",
          tallenna: "Ei tallennettavaa: kirjautuminen ja teema ovat selaimessa ja VS Codessa.",
          sanat: []
        },
        "40-7": {
          perii: ["40-2"],
          miksi: "Git kirjoittaa jokaiseen commitiin tekijän nimen ja sähköpostiosoitteen. Repository on julkinen, joten käytät sovittua tekijänimeä ja GitHubin noreply-osoitetta.",
          osat: [
            { otsikko: "Piilota sähköpostiosoite", missa: "Selain, GitHub", tee: "Avaa [GitHubin sähköpostiasetukset](https://github.com/settings/emails). Valitse Keep my email addresses private.", naet: "Ruudun tekstissä on osoite, joka loppuu tekstiin users.noreply.github.com. Jätä sivu auki. [[kuvaohje:github-noreply|Kuvaohjeen]] kohdat 1–3 näyttävät nämä vaiheet. Kohdan 4 teet seuraavissa osatehtävissä Kopioi-painikkeella." },
            { otsikko: "Liitä sähköpostikomento terminaaliin", missa: "VS Code, terminaali. Ohje: [[ohje:terminaali]]", tee: "Kopioi komento. Napsauta terminaalia ja paina Ctrl+V, mutta älä paina vielä Enter.", naet: "Komento näkyy terminaalin rivillä. Sen lopussa on kaksi lainausmerkkiä, joiden välissä ei ole mitään.", koodi: "git config --global user.email \"\"", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Liitä noreply-osoite komentoon", missa: "Selain, GitHubin sähköpostiasetukset, ja VS Coden terminaali", tee: "Maalaa GitHubissa noreply-osoite hiirellä sen ensimmäisestä merkistä loppuun asti ja paina Ctrl+C. Napsauta terminaalia, paina nuolta vasemmalle kerran ja paina Ctrl+V ja Enter.", naet: "Osoite on lainausmerkkien sisällä, esimerkiksi git config --global user.email \"12345678+tunnus@users.noreply.github.com\". Terminaali ei tulosta mitään." },
            { otsikko: "Tarkista Gitin sähköposti", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee noreply-osoitteesi, joka loppuu tekstiin users.noreply.github.com. Silloin commitit eivät näytä omaa sähköpostiosoitettasi. Jos lukee jotain muuta, tee osatehtävät 2 ja 3 uudelleen.", koodi: "git config --global user.email", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista, että tekijänimi on vahvistettu", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Lue ohjaajan vastaus työvaiheen 1 viestiisi. Jos ohjaaja ei ole vahvistanut tekijänimeä, lähetä tämä muistutus. Ohje: [[ohje:teams]].", naet: "Ohjaaja on vahvistanut tekijänimen. Jos vastausta ei vielä ole, jatka työvaiheesta 4 Perusta projektin repository: avaa työvaihe napsauttamalla sen otsikkoa. Palaa tähän, kun vastaus tulee. Tee työvaihe 3 Aseta Git valmiiksi ennen työvaihetta 5 Kirjaa työkalujen versiot.", koodi: "Hei Matti,\nmuistutus: ehdotin tekijänimekseni ___. Voitko vahvistaa sen? Tarvitsen nimen ennen ensimmäistä committia.", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Liitä nimikomento terminaaliin", missa: "VS Code, terminaali, kun ohjaaja on vahvistanut tekijänimen", tee: "Kopioi komento. Napsauta terminaalia ja paina Ctrl+V, mutta älä paina vielä Enter.", naet: "Komento näkyy terminaalin rivillä. Sen lopussa on sana Tekijänimi lainausmerkkien sisällä.", koodi: "git config --global user.name \"Tekijänimi\"", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Vaihda tekijänimi komentoon", missa: "VS Code, terminaali", tee: "Paina nuolta vasemmalle kerran ja poista sana Tekijänimi Backspace-näppäimellä. Kirjoita ohjaajan vahvistama tekijänimi ja paina Enter.", naet: "Ennen Enteriä rivillä luki esimerkiksi git config --global user.name \"Kuutiomestari\". Lainausmerkit jäivät paikalleen. Terminaali ei tulosta mitään. Nimi on asetettu." }
          ],
          valmis: "Gitin sähköposti on GitHubin noreply-osoite, ja Gitin nimi on sovittu tekijänimi.",
          tallenna: "Ei tallennettavaa tiedostoa: asetukset ovat omalla koneellasi Gitissä.",
          sanat: []
        },
        "40-2": {
          versio: "2026-10-05",
          miksi: "Repository säilyttää työn ja näyttää muutokset ohjaajalle.",
          osat: [
            { vanha: 1, otsikko: "Luo repository", missa: "Selain, GitHub", tee: "Täytä [uuden repositoryn lomake](https://github.com/new): nimi Vektoripaja, Public ja Add a README file. Valitse Create repository.", naet: "Repositoryn etusivu aukeaa. Siinä on tiedosto README.md. Osoiterivillä on github.com/, oma GitHub-tunnuksesi ja /Vektoripaja." },
            { vanha: 2, otsikko: "Kloonaa repository VS Codeen", missa: "VS Code, Source Control", tee: "Tee [[kuvaohje:vscode-kloonaus|kuvaohjeen]] kohdat 1–3. Valitse sitten kansioikkunassa kansio Tiedostot (englanniksi Documents) ja painike Select as Repository Destination, ja kirjoita paperille Tiedostot\\Vektoripaja.", naet: "VS Code kysyy, avataanko kloonattu repository (Would you like to open the cloned repository?). Jos VS Code pyytää ensin kirjautumaan GitHubiin, valitse Allow ja kirjaudu selaimessa samalla tunnuksella." },
            { vanha: 2, otsikko: "Avaa kloonattu repository", missa: "VS Code, kloonauksen jälkeinen kysymys", tee: "Valitse Open. Se on [[kuvaohje:vscode-kloonaus|kuvaohjeen]] kohdan 4 Open-painike. Jos VS Code kysyy Do you trust the authors of the files in this folder?, valitse Yes, I trust the authors.", naet: "VS Coden Explorerissa lukee VEKTORIPAJA ja tiedosto README.md." },
            { vanha: 4, otsikko: "Jaa repository ohjaajalle", missa: "Selain, GitHub", tee: "Avaa [[github:settings/access|repositoryn Collaborators-asetukset]]. Valitse Add people ja kirjoita ohjaajan tunnus mattiseise.", naet: "Ohjaaja näkyy listassa tilassa Pending invite. Voit jatkaa, vaikka ohjaaja ei ole vielä hyväksynyt kutsua. [[kuvaohje:github-collaborators|Katso kuvaohje]]. Sivuston GitHub-linkit vievät tähän repositoryyn. Jos osoiterivillä on eri tunnus kuin omasi tai sivulla lukee 404, lähetä ohjaajalle viesti. Ohje: [[ohje:teams]].", koodi: "Hei Matti,\nVektoripajan sivuston GitHub-linkit vievät tunnukselle, joka ei ole minun. Oma GitHub-tunnukseni on ___.", koodiOtsikko: "Viesti, jos osoitteessa on eri tunnus: kopioi tämä" },
            { vanha: 3, otsikko: "Pyydä pull request, jos sitä ei ole", missa: "Selain, GitHub, ja Teams", tee: "Avaa [[github:pulls|repositoryn Pull requests -sivu]]. Jos listassa ei ole avointa pull requestia, lähetä ohjaajalle viesti. Ohje: [[ohje:teams]].", naet: "Listassa on ohjaajan pull request, tai viesti on lähetetty. Ohjaaja tekee pull requestin, kun hän on hyväksynyt kutsusi. Odottaessasi tee työvaihe 8 Mittaa agentin krediittikulutus. Jos Gitin nimi on asetettu, tee myös työvaihe 5 Kirjaa työkalujen versiot. Avaa työvaihe napsauttamalla sen otsikkoa. Palaa tähän, kun pull request on listassa. Jos se puuttuu yhä, kun nämä työvaiheet ovat valmiit, lähetä sama viesti uudelleen.", koodi: "Hei Matti,\nkutsuin sinut repositoryyni Vektoripaja. Siinä ei vielä ole pull requestia, joka tuo pohjat ja dokumentit. Voitko tehdä sen?", koodiOtsikko: "Viesti, jos pull requestia ei ole: kopioi tämä" },
            { vanha: 3, otsikko: "Hyväksy ohjaajan pull request", missa: "Selain, GitHub, ja VS Code", tee: "Tarkista ja hyväksy ohjaajan pull request, joka tuo pohjat ja dokumentit. Ohje: [[ohje:pull-request]].", naet: "Pull requestin tiedostot näkyvät Explorerissa omalla koneellasi." },
            { vanha: 3, otsikko: "Tarkista, että pull request toi nämä tiedostot", missa: "VS Code, Explorer", tee: "Avaa kansiot .github ja project-docs. Ohje: [[ohje:avaa-tiedosto]].", naet: "Kansiossa .github ovat copilot-instructions.md ja kansio ISSUE_TEMPLATE. Kansiossa project-docs ovat [[tiedosto:suunnitelma|suunnitelma.md]], [[tiedosto:projektipaivakirja|projektipaivakirja.md]], [[tiedosto:ai-loki|ai-loki.md]] ja muut dokumentit. Repositoryn juuressa eli kansioiden kanssa samalla tasolla on PROJEKTIN-TILA.md." }
          ],
          valmis: "Repository on kloonattu VS Codeen, ohjaaja on kutsuttu Collaboratoriksi, ja pull requestin pohjat ja dokumentit ovat repositoryssa.",
          tallenna: "Repository ja pohjat GitHubissa. Repositoryn osoite tulee viikon kirjaukseen viikon viimeisenä työpäivänä.",
          sanat: []
        },
        "40-5": {
          versio: "2026-10-05",
          perii: ["40-1"],
          miksi: "Versiot näyttävät, millä ympäristöllä projekti tehdään. Ne ovat myös kehitysympäristön työnäyte. Tee tämä työvaihe vasta, kun Gitin nimi on asetettu työvaiheessa 3, koska commit tallentaa nimen.",
          osat: [
            { otsikko: "Avaa README", missa: "VS Code, Explorer", tee: "Avaa tiedosto README.md. Ohje: [[ohje:avaa-tiedosto]].", naet: "README.md on auki. Ensimmäisellä rivillä lukee # Vektoripaja." },
            { otsikko: "Kirjoita työkalujen versiot", missa: "README.md, tiedoston loppu", tee: "Paina Ctrl+End ja Enter, kopioi pohja ja liitä se Ctrl+V:llä. Kirjoita ___-kohtiin paperille kirjoittamasi versionumerot. Ohje: [[ohje:markdown]].", naet: "README:n lopussa on otsikko ## Työkalut ja kolme riviä, jotka alkavat merkillä - ja välilyönnillä. Jos versiot puuttuvat paperilta, aja työvaiheen 1 Valmistele työkalut komennot uudelleen.", koodi: "## Työkalut\n- Python ___\n- pip ___\n- Git ___", koodiOtsikko: "Pohja: kopioi ja täytä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston README.md muutokset.", koodi: "Kirjaa työkalujen versiot README:hen", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "README:ssä on Pythonin, pipin ja Gitin versiot GitHubissa.",
          tallenna: "Versiot tiedostossa README.md GitHubissa.",
          esimerkki: "README:n loppuun tulee neljä riviä. Ensimmäisellä rivillä on otsikko ## Työkalut. Sen jälkeen on kolme riviä: - Python 3.13.1, - pip 24.3.1 ja - Git 2.47.1.",
          eiRiita: "Otsikon ## Työkalut jälkeen on vain rivi Kaikki asennettu. Siitä ei näe, mitkä versiot ovat käytössä.",
          sanat: []
        },
        "40-3": {
          versio: "2026-10-05",
          miksi: "Rajaus kertoo, mitä asiakkaille pitää pystyä näyttämään ennen joulua. Jos kirjoitit nimen, tekijän ja pakollisen ytimen jo sivun lomakkeisiin ennen 5.10.2026, älä kirjoita niitä nyt uudelleen. Rastita silloin tämän työvaiheen osatehtävät: siirrät tekstin tiedostoon [[vk 41|viikolla 41]] työvaiheessa 2.",
          osat: [
            { vanha: 0, otsikko: "Lue toimeksiannon rajaus", missa: "Selain, Vektoripajan sivu", tee: "Lue [[toimeksianto#tekninen-ehdotus|toimeksiannon kohta Ehdotettu toteutustapa]]: pakollinen ydin ja tärkeä jatko.", naet: "Tiedät, mitkä toiminnot kuuluvat pakolliseen ytimeen ennen joulua ja mitkä tärkeään jatkoon." },
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä on osio ## A · Perustiedot ja otsikko ### MVP omin sanoin (viikko 40)." },
            { vanha: 0, otsikko: "Kirjoita projektin nimi", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Projektin nimi (viikko 40)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen Vektoripaja.", naet: "Otsikon ohjerivin jälkeen on rivi Vektoripaja.", koodi: "### Projektin nimi (viikko 40)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kirjoita tekijä", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Tekijä (viikko 40)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen tekijänimi, jonka sovit ohjaajan kanssa.", naet: "Otsikon ohjerivin jälkeen on sovittu tekijänimi.", koodi: "### Tekijä (viikko 40)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kirjoita MVP omin sanoin", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### MVP omin sanoin (viikko 40)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen pakollisen ytimen toiminnot 2–3 ryhmänä omin sanoin ja se, miksi tärkeä jatko odottaa. Malli: [[tiedosto:suunnitelma]].", naet: "Otsikon jälkeen on 2–5 omaa virkettä. Niissä on 2–3 toimintojen ryhmää ja sana koska. Jokaista toimintoa ei tarvitse luetella erikseen.", koodi: "### MVP omin sanoin (viikko 40)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 2, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjoita nimi, tekijä ja pakollinen ydin suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Oma kuvaus pakollisesta ytimestä on GitHubissa.",
          tallenna: "Nimi, tekijä ja pakollinen ydin tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan pakollinen ydin: \"Pakolliseen ytimeen kuuluvat reseptin lisäys, haku nimellä ja tallennus, koska ilman niitä reseptikirjaa ei voi käyttää. Kuvien lisäys odottaa, koska reseptin voi kirjoittaa ilman kuvaa.\"",
          eiRiita: "\"Pakolliseen ytimeen kuuluu kaikki, mitä toimeksiannossa lukee kohdassa Pakollinen ydin ennen joulua.\" Lause viittaa listaan, mutta ei kerro omin sanoin, mitä ydin on, eikä sitä, miksi tärkeä jatko odottaa.",
          sanat: ["MVP"]
        },
        "40-8": {
          perii: ["40-3"],
          miksi: "Kysymykset selvittävät asiat, joita [[toimeksianto]] ei kerro. Kysymyksiä ei siirretä selaimesta, joten kirjoita ne tiedostoon nyt. Jos lähetit kysymykset asiakkaille jo ennen 5.10.2026, kirjoita samat kysymykset tiedostoon, tee commit ja push ja ohita osatehtävät 4–6.",
          osat: [
            { otsikko: "Avaa kysymykset", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:kysymykset|project-docs/kysymykset.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä ovat otsikot ### 1. (kirjoita kysymys), ### 2. (kirjoita kysymys) ja ### 3. (kirjoita kysymys)." },
            { otsikko: "Kirjoita kysymykset asiakkaille", missa: "Tiedosto [[tiedosto:kysymykset|kysymykset.md]], otsikot ### 1., ### 2. ja ### 3.", tee: "Kirjoita kysymys jokaisen otsikon tekstin (kirjoita kysymys) tilalle. Jätä merkit ### ja numero paikalleen.", naet: "Tiedostossa on kolme kysymystä otsikoina. Jokainen kysyy asiaa, jota [[toimeksianto]] ei kerro." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:kysymykset|kysymykset.md]] muutokset.", koodi: "Kirjoita kysymykset asiakkaille", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Liitä viestipohja Teamsiin", missa: "Teams, keskustelu, jossa ovat Matti Seise ja Antti Honkasalo", tee: "Kopioi viestipohja. Liitä se keskusteluun, jossa ovat Matti Seise ja Antti Honkasalo, mutta älä lähetä vielä. Ohje: [[ohje:teams]].", naet: "Viestipohja on Teamsin viestikentässä. Siinä ovat rivit 1., 2. ja 3. ilman kysymyksiä.", koodi: "Hei Matti ja Antti,\nkysymyksiä Vektoripajasta:\n1. \n2. \n3. \nKäydäänkö vastaukset läpi viikkopalaverissa?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Liitä kysymykset viestiin", missa: "VS Code, tiedosto [[tiedosto:kysymykset|kysymykset.md]], ja Teams", tee: "Napsauta VS Codessa kysymyksen 1 ensimmäisen sanan eteen ja paina Shift+End ja Ctrl+C. Napsauta Teamsissa rivin 1. loppua, paina Ctrl+V ja tee samoin kysymyksille 2 ja 3.", naet: "Jokaisella numerorivillä on yksi kysymyksesi ilman merkkejä ###. Jos kysymyksiä on enemmän kuin kolme, tee uusi rivi näppäimillä Shift+Enter, koska pelkkä Enter lähettää viestin." },
            { otsikko: "Lähetä kysymykset", missa: "Teams, viestikenttä", tee: "Paina Enter.", naet: "Viesti näkyy keskustelussa. Vastaukset käydään läpi viikon 41 palaverissa." }
          ],
          valmis: "Kysymykset ovat GitHubissa, ja kysymyslista on lähetetty asiakkaille.",
          tallenna: "Kysymykset tiedostossa [[tiedosto:kysymykset|kysymykset.md]] GitHubissa.",
          esimerkki: "Reseptikirjan kysymys: \"### 1. Pitääkö reseptin voida tulostaa?\" Kysymys koskee asiaa, jota reseptikirjan toimeksianto ei kerro, ja vastaus muuttaa sitä, mitä tehdään.",
          eiRiita: "\"### 1. Onko kaikki ok?\" Kysymykseen voi vastata vain kyllä, eikä vastaus kerro, mitä pitää tehdä.",
          sanat: []
        },
        "40-4": {
          versio: "2026-10-05",
          miksi: "Mittaus auttaa valitsemaan toteutustavan käytettävissä olevalla budjetilla.",
          osat: [
            { vanha: 0, otsikko: "Katso kulutus ennen mittausta", missa: "VS Code, alareunan tilarivi", tee: "Katso krediittien kulutus. Ohje: [[ohje:krediitit]]. Kirjoita prosenttiluku paperille.", naet: "Sinulla on luku ennen mittausta, esimerkiksi 11 %." },
            { vanha: 1, otsikko: "Avaa GitHub Copilotin chat", missa: "VS Code", tee: "Avaa repository. Ohje: [[ohje:avaa-repository]]. Paina sitten Ctrl+Alt+I.", naet: "Explorerissa lukee VEKTORIPAJA, ja chat aukeaa VS Coden oikeaan reunaan." },
            { vanha: 2, otsikko: "Vaihda agenttitilaan", missa: "Chat, tilavalikko viestikentän alapuolella", tee: "Chat on jo auki edellisestä osatehtävästä. Aloita [[kuvaohje:vscode-chat-tilat|kuvaohjeen]] kohdasta 2 ja valitse tilaksi Agent.", naet: "Tilavalikossa lukee Agent. Agenttitila muokkaa tiedostoja ja kuluttaa krediittejä. Viikolla 40 käytät sitä kerran mittausta varten. Viikosta 44 alkaen käytät sitä vain Agentti-kaistalla." },
            { vanha: 3, otsikko: "Lähetä mittausviesti", missa: "Chat, viestikenttä", tee: "Kopioi viesti. Liitä se viestikenttään ja paina Enter.", naet: "GitHub Copilot ehdottaa muutosta tiedostoon README.md.", koodi: "Lue README.md ja ehdota sen alkuun yksi lause, joka kertoo, mikä Vektoripaja on. Älä muuta muita tiedostoja.", koodiOtsikko: "Mittauksen viesti: kopioi tämä" },
            { vanha: 3, otsikko: "Hylkää muutos valitsemalla Undo", missa: "Chat, muuttunut tiedosto", tee: "Valitse Undo, koska tämä on vain mittaus. Keep ja Undo ovat chatissa muuttuneen tiedoston kohdalla: [[kuvaohje:vscode-hyvaksy-muutos]].", naet: "README.md on ennallaan. Koska tiedostot eivät muuttuneet, et tee mittauksesta committia etkä merkintää tiedostoon [[tiedosto:ai-loki|ai-loki.md]]." },
            { vanha: 4, otsikko: "Laske agenttipyynnön hinta", missa: "VS Code, alareunan tilarivi", tee: "Katso kulutus uudelleen. Ohje: [[ohje:krediitit]]. Laske uusi luku miinus aiempi luku.", naet: "Erotus on agenttipyynnön hinta prosentteina. Kirjaat alku- ja loppulukeman ja erotuksen viikon kirjaukseen tiedostoon [[tiedosto:projektipaivakirja|projektipaivakirja.md]] kohtaan Mitä tein ja miten?. Jos luku ei muuttunut, kirjaa \"odottaa käyttönäkymää\"." }
          ],
          valmis: "Tiedät agenttipyynnön hinnan prosentteina, tai tiedät, että luku päivittyy myöhemmin. README.md on ennallaan.",
          tallenna: "Alku- ja loppulukema sekä erotus viikon kirjauksen kohtaan Mitä tein ja miten? viikon viimeisenä työpäivänä.",
          sanat: []
        }
      },
      lisatehtavat: [["Tee lisätehtävä.", "Valitse tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] kohdasta MVP omin sanoin viisi termiä. Kirjoita jokaisesta termistä yksi rivi viikon kirjaukseen tiedostoon [[tiedosto:projektipaivakirja|projektipaivakirja.md]] kohtaan Mitä tein ja miten?: termi, suomenkielinen nimi ja lyhyt selitys omin sanoin. Malli toisesta aiheesta: thumbnail – pienoiskuva: kuvan pieni esikatseluversio. Rivit menevät GitHubiin viikon kirjauksen commitissa."]],
      pohjat: [
        { tunnus: "jumissa-40", otsikko: "Jos jäät jumiin: viesti ohjaajalle (Teams)", teksti: "Hei, olen jumissa viikolla 40.\nYritin: \nJäin kohtaan: \nRuudulla näkyy: " }
      ],
      kuvaohjeet: ["python-asennus", "github-noreply", "vscode-kloonaus", "github-collaborators", "vscode-commit-push", "github-kayttonakyma"]
    },
    41: {
      type: "feature",
      feature: "Windowsissa käynnistyy ladattu harjoitussovellus, jossa kuutio pyörii.",
      excerpt: "Haluamme kokeilla jokaista välivaihetta, emme vain katsoa kuvakaappauksia.",
      connection: "Ennen varsinaisia mallinnustoimintoja harjoittelet koko matkan tehtäväkortista testattuun ja ladattavaan sovellukseen. Pyörivä kuutio on pieni harjoitus, jolla varmistat, että kehitysympäristö, testit ja Windows-julkaisu toimivat yhdessä. Samaa työsykliä käytät myöhemmin Vektoripajan jokaisen ominaisuuden rakentamiseen.",
      deliverable: "Dokumentit repositoryssa · päätökset suunnitelmassa · ikkuna, jossa kuutio pyörii · testit 1 ja 2 · release-zip GitHubissa · kaksi issueta suljettuna commit-viestillä.",
      why: "Jos opit työsyklin vasta SVG-tuonnin kanssa, uusi työtapa ja vaikea tehtävä tulevat yhtä aikaa. Silloin et tiedä, johtuuko ongelma työtavasta vai tehtävästä.",
      done: "Releasen zipistä purettu sovellus käynnistyy, ja kuutio pyörii. Actionsin ajo on vihreä, eli itsetesti meni läpi. `pytest` näyttää, että testi 1 menee läpi. Korttien #1 ja #2 issuet on suljettu commitilla.",
      record: "Releasen v0.0.41 osoite, korttien #1 ja #2 issuenumerot, kortin #1 issuen Sovittu viikkopalaverissa -kommentti, testien 1 ja 2 odotetut ja havaitut tulokset (myös lisätesti, jos teit sen), tekninen päätös ja käyttöliittymävaatimus [[tiedosto:suunnitelma|suunnitelmassa]], asiakkaiden vastaukset tiedostossa [[tiedosto:kysymykset|kysymykset.md]], ympäristön tarkistuksen tulos, kirjastot ja lisenssit README:ssä sekä viikon funktio kiertokulma selityspohjalla. Selitystä varten avaa vektoripaja/kierto.py ja etsi Ctrl+F:llä sanat if, for ja while. Jos osumia ei ole, kirjoita \"ei valintaa\" ja \"ei toistoa\". Kirjoita kohtaan Missä työnäyte on? kaikki nämä näyttömatriisin vaatimukset: käyttää ohjelmointieditoria tai kehitysympäristöä, testaa ohjelman toimintoja, sopii tehtävistä tiimin muiden jäsenten kanssa, selvittää kehitystiimin kanssa asiakkaan tarpeet, jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi, käyttää versionhallintaa, julkaisee ohjelman tuotantoympäristöön, ottaa käyttöön ja konfiguroi ohjelmistokomponenttikirjaston käyttöön soveltuvan kehittämisympäristön sekä tuo kehittämisympäristöön ulkoisia komponentteja.",
      funktio: "kiertokulma(aika, nopeus) (testi 1)",
      skills: ["Tehtäväkortti ja hyväksymiskriteerit", "Tekninen pohja: PySide6, PyVista, trimesh ja pytest", "Testi ennen koodia", "Julkaisu releasena GitHub Actionsilla"],
      termit: ["työsykli", "tehtäväkortti", "issue", "kaista", "testi", "tekninen pohja", "requirements.txt", "tagi", "GitHub Actions", "paketointi", "itsetesti", "release", "zip"],
      tehtavat: {
        "41-0": {
          miksi: "Ohjaajan pull request tuo repositoryyn dokumentit, joihin kirjoitat tästä viikosta alkaen VS Codessa. Jos kirjoitit viikolla 40 pakollisen ytimen eli MVP:n omaan tiedostoon MVP.md, siirrät sen tekstin [[tiedosto:suunnitelma|suunnitelmaan]].",
          osat: [
            { otsikko: "Hyväksy ohjaajan pull request", missa: "Selain, GitHub, ja sen jälkeen VS Code", tee: "Jos hyväksyit tämän pull requestin jo viikolla 40, rastita tämä osatehtävä ja siirry osatehtävään 2. Muuten tee pull requestin ohje loppuun asti, myös sen viimeinen vaihe Git: Pull. Ohje: [[ohje:pull-request]].", naet: "Pull requestin sivulla lukee Merged, ja VS Coden Explorerissa on kansio project-docs ja kansio .github. Ohjaajan pull request toi repositoryyn dokumentit ja pohjat." },
            { otsikko: "Tarkista dokumentit", missa: "VS Code, Explorer, kansio project-docs", tee: "Napsauta kansion project-docs nimeä. Ohje: [[ohje:avaa-tiedosto]].", naet: "Kansiossa ovat [[tiedosto:ai-loki|ai-loki.md]], [[tiedosto:julkaisutesti|julkaisutesti.md]], [[tiedosto:katselmointi|katselmointi.md]], [[tiedosto:kirjastot|kirjastot.md]], [[tiedosto:kysymykset|kysymykset.md]], [[tiedosto:projektipaivakirja|projektipaivakirja.md]], [[tiedosto:saavutettavuus|saavutettavuus.md]], [[tiedosto:suunnitelma|suunnitelma.md]] ja [[tiedosto:tietoturva|tietoturva.md]] sekä kansio kuvat. Kansiossa voi olla myös tiedostoja, jotka olivat siellä jo ennen pull requestia, esimerkiksi oma MVP.md tai määrittelytiedosto LowPoly_Vector3D_Specification_Styled.md. Ne saavat jäädä. Jos pull requestin tiedostoja ei näy, tee pull requestin ohjeen viimeinen vaihe Git: Pull uudelleen. Tiedostot on kuvattu [[tyotapa#dokumentit|Työtapa-näkymän osiossa Dokumentit]]." },
            { otsikko: "Etsi otsikko MVP omin sanoin", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]", tee: "Jos sinulla ei ole omaa tiedostoa MVP.md kansiossa project-docs eikä Explorerin ylimmällä tasolla, rastita osatehtävät 3–6. Muuten avaa [[tiedosto:suunnitelma|suunnitelma.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### MVP omin sanoin (viikko 40) ohjerivin jälkeen.", koodi: "### MVP omin sanoin (viikko 40)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kopioi tiedoston MVP.md teksti", missa: "VS Code, tiedosto MVP.md kansiossa project-docs tai Explorerin ylimmällä tasolla", tee: "Kopioi tiedoston MVP.md koko sisältö. Ohje: [[ohje:kopioi-tiedosto]].", naet: "Koko teksti on leikepöydällä, myös rivit, jotka alkavat merkillä #. Tiedoston MVP.md teksti on ennallaan." },
            { otsikko: "Liitä teksti suunnitelmaan", missa: "VS Code, välilehti [[tiedosto:suunnitelma|suunnitelma.md]] editorin yläreunassa", tee: "Valitse välilehti [[tiedosto:suunnitelma|suunnitelma.md]]. Paina Ctrl+V ja sitten Ctrl+S.", naet: "Tiedoston MVP.md teksti on otsikon ### MVP omin sanoin (viikko 40) ohjerivin jälkeen, ja sen #-rivit saavat jäädä. Jos otsikon jälkeen oli jo tekstiä, se jäi paikalleen. Tiedosto MVP.md jää kansioon ennalleen, etkä poista sitä." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa on vain [[tiedosto:suunnitelma|suunnitelma.md]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Siirrä tiedoston MVP.md teksti suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Dokumentit ovat repositoryssa ja omalla koneellasi. Jos sinulla oli tiedosto MVP.md, sen teksti on [[tiedosto:suunnitelma|suunnitelmassa]] GitHubissa.",
          tallenna: "Tiedoston MVP.md teksti tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          sanat: ["pull request", "MVP"]
        },
        "41-7": {
          perii: ["41-0"],
          siirtyma: true,
          miksi: "Viikolla 40 sivulla oli kirjoituskentät [[tiedosto:suunnitelma|suunnitelmalle]], [[tiedosto:projektipaivakirja|päiväkirjalle]] ja [[tiedosto:ai-loki|AI-lokille]]. Niihin kirjoitettu teksti on vain siinä selaimessa, jolla kirjoitit, joten siirrät sen repositoryn tiedostoihin. Etsi aina ensin kohdetiedoston otsikko ja kopioi teksti vasta sen jälkeen, koska haku ja kopiointi käyttävät samaa leikepöytää.",
          osat: [
            { otsikko: "Lataa sivulle kirjoittamasi teksti", missa: "Tämän työvaiheen alku, ennen osatehtävää 1", tee: "Valitse painike Lataa selaimen muistin tekstit. Valitse se vain kerran.", naet: "Selain lataa tiedoston vektoripaja-selaimen-tekstit.md Lataukset-kansioon. Jos painikkeen tilalla lukee, ettei selaimen muistissa ole tekstiä, sivu on rastittanut tämän työvaiheen kaikki osatehtävät valmiiksi. Jatka silloin seuraavasta työvaiheesta." },
            { otsikko: "Avaa ladattu tiedosto VS Codessa", missa: "VS Code, ylävalikko", tee: "Valitse File ja sitten Open File. Valitse vasemmasta reunasta Lataukset ja avaa tiedosto vektoripaja-selaimen-tekstit.md.", naet: "Tiedosto on auki omalla välilehdellään. Jokainen ##-rivi kertoo kohdetiedoston, esimerkiksi ## 1. Tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]], ja sen jälkeen ovat sen tiedoston kohdat. Kohta alkaa ###-rivillä, esimerkiksi ### Otsikon \"MVP omin sanoin (viikko 40)\" alle, ja jatkuu seuraavaan #-merkillä alkavaan riviin asti." },
            { otsikko: "Etsi otsikko suunnitelmasta", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]", tee: "Valitse ladatusta tiedostosta ensimmäinen kohta, jota et ole vielä siirtänyt. Jos se kuuluu tiedostoon [[tiedosto:suunnitelma|suunnitelma.md]], avaa tiedosto ja etsi otsikko, joka on kohdan ###-rivillä lainausmerkkien sisällä. Ohje: [[ohje:etsi-otsikko]].", naet: "Kohta kuuluu tiedostoon, jonka nimi on lähimmällä ##-rivillä kohdan yläpuolella. Kursori on tyhjällä rivillä otsikon >-ohjerivin jälkeen. Muiden tiedostojen kohdissa ohitat tämän osatehtävän." },
            { otsikko: "Etsi kohta päiväkirjasta", missa: "VS Code, tiedosto [[tiedosto:projektipaivakirja|project-docs/projektipaivakirja.md]]", tee: "Jos kohta kuuluu tiedostoon [[tiedosto:projektipaivakirja|projektipaivakirja.md]], avaa se ja hae kohdan viikkoa, esimerkiksi Vko 40. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Paina sitten alanuolinäppäintä, kunnes kursori on tyhjällä rivillä kohdassa mainitun otsikon jälkeen.", naet: "Kun kohta kuuluu tiedostoon [[tiedosto:projektipaivakirja|projektipaivakirja.md]], sen ###-rivi on esimerkiksi ### Otsikon \"Vko 40 – Aloitus: työkalut ja projektin rajaus\" alle, kohtaan \"Mitä tein ja miten?\". Hakusana on Vko ja viikon numero: viikon 40 kohdissa voit kopioida hakusanan. Jos kohdassa on toinen viikko, kirjoita hakuun Vko ja sen viikon numero. Otsikoiden ### Mitä tein ja miten?, ### Miksi tein näin? ja ### Missä työnäyte on? jälkeen ei ole >-riviä, joten kursori on suoraan otsikon jälkeisellä tyhjällä rivillä. Otsikkoa ### Mistä jatkan? ei ole: liitä kohdan Mistä jatkan? teksti otsikon ### Mitä tein ja miten? jälkeen. Jos otsikon jälkeen on jo tekstiä, paina alanuolinäppäintä, kunnes kursori on ensimmäisellä tyhjällä rivillä tekstin jälkeen. Muiden tiedostojen kohdissa ohitat tämän osatehtävän.", koodi: "Vko 40", koodiOtsikko: "Hakusana: kopioi tämä hakuun" },
            { otsikko: "Siirry AI-lokin loppuun", missa: "VS Code, tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]]", tee: "Jos kohta kuuluu tiedostoon [[tiedosto:ai-loki|ai-loki.md]], avaa se ja paina Ctrl+End ja Enter. Kirjoita kohdan ###-rivi, esimerkiksi ### Merkintä 1, ja paina Enter.", naet: "Kursori on tiedoston lopussa tyhjällä rivillä otsikkorivin ### Merkintä 1 jälkeen. Siirretty merkintä jää vanhaan muotoon, ja se on oikein: tiedostokortin [[tiedosto:ai-loki|ai-loki.md]] muotoa käytät uusissa merkinnöissä. Tiedoston [[tiedosto:ai-loki|ai-loki.md]] kohdissa et etsi otsikkoa. Muiden tiedostojen kohdissa ohitat tämän osatehtävän." },
            { otsikko: "Kopioi kohdan teksti", missa: "VS Code, välilehti vektoripaja-selaimen-tekstit.md editorin yläreunassa", tee: "Napsauta ladatussa tiedostossa kohdan ensimmäistä tekstiriviä ja paina Home. Pidä Shift-näppäin pohjassa ja paina nuolta alas, kunnes kursori on seuraavan #-merkillä alkavan rivin alussa, ja paina Ctrl+C.", naet: "Kohdan tekstirivit ovat maalattuina ja leikepöydällä, mutta ###-rivi ei ole. Jos kohta on tiedoston viimeinen, maalaa loppuun asti näppäimillä Shift+Ctrl+End ja paina Ctrl+C." },
            { otsikko: "Liitä teksti kohdetiedostoon", missa: "VS Code, kohdetiedoston välilehti editorin yläreunassa", tee: "Valitse kohdetiedoston välilehti. Jos otsikon jälkeen ei ole jo samaa tekstiä, paina Ctrl+V ja sitten Ctrl+S.", naet: "Teksti on siinä kohdassa, johon veit kursorin osatehtävissä 3–5. Jos sama teksti oli jo otsikon jälkeen, et liittänyt sitä uudelleen. Jos otsikon jälkeen oli muuta tekstiä, se jäi paikalleen. Seuraavaksi teet osatehtävät 3–7 ladatun tiedoston seuraavalle kohdalle. Kun jokainen kohta on siirretty, rastitat osatehtävät 3–7." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa ovat ne dokumentit, joihin liitit tekstiä.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet niiden tiedostojen muutokset, joihin liitit tekstiä. Ladattu tiedosto ei ole Changes-listassa, koska se on Lataukset-kansiossa.", koodi: "Siirrä selaimen tekstit dokumentteihin", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Sivulle kirjoittamasi teksti on dokumenteissa GitHubissa.",
          tallenna: "Siirretyt tekstit tiedostoissa [[tiedosto:suunnitelma|suunnitelma.md]], [[tiedosto:projektipaivakirja|projektipaivakirja.md]] ja [[tiedosto:ai-loki|ai-loki.md]] GitHubissa.",
          sanat: ["MVP"]
        },
        "41-5": {
          perii: ["41-1"],
          miksi: "Asiakkaiden vastaukset ohjaavat harjoitussovellusta ja koko projektia. Kirjaat ne tiedostoon, jotta ne ovat tallessa repositoryssa.",
          osat: [
            { otsikko: "Käy viikkopalaveri", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kerro ohjaajalle, mitä teit viikolla 40 ja mihin jäit, ja kysy, onko korteista #1 ja #2 jotain sovittavaa. Kysy sitten asiakkaiden vastaukset kysymyksiisi ja kirjoita vastaukset, vastaajat ja sopimus paperille.", naet: "Jokaiseen kysymykseen on vastaus tai tieto, että asia on vielä auki. Paperilla on myös palaverin päivä ja se, mitä korteista sovittiin. Jos niistä ei sovittu mitään, teet kortit viikon työvaiheiden mukaan. Kirjoitat sopimuksen kortin #1 issueen kommentiksi Sovittu viikkopalaverissa työvaiheessa Rakenna pyörivä kuutio. Viikolla 40 ei ollut funktiota, joten kerrot vain työstäsi. Tämä palaveri on myös viikkorutiinin palaverikohta, joten rastita se viikkorutiinissa." },
            { otsikko: "Avaa kysymykset", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:kysymykset|project-docs/kysymykset.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedostossa on kolme otsikkoa, esimerkiksi ### 1. (kirjoita kysymys). Jokaisen otsikon jälkeen ovat rivit - Vastaus (viikko 41): ja - Vastaaja: asiakas 1 / asiakas 2. Jos kirjoitit kysymykset tähän tiedostoon jo viikolla 40, otsikoissa on kysymyksesi, ja osatehtävät 3 ja 4 ovat valmiit." },
            { otsikko: "Lisää otsikot lisäkysymyksille", missa: "Tiedosto [[tiedosto:kysymykset|kysymykset.md]], tiedoston loppu", tee: "Jos lähetit asiakkaille enintään kolme kysymystä, rastita tämä osatehtävä. Muuten kopioi lisäkysymyksen pohja, paina tiedostossa Ctrl+End ja Enter ja paina Ctrl+V.", naet: "Tiedoston lopussa on otsikko ### 4. (kirjoita kysymys) ja sen jälkeen rivit Vastaus ja Vastaaja. Jos lähetit yli neljä kysymystä, tee tämä osatehtävä uudelleen jokaiselle lisäkysymykselle ja vaihda uuden otsikon numeroksi seuraava numero, esimerkiksi 5.", koodi: "### 4. (kirjoita kysymys)\n- Vastaus (viikko 41): \n- Vastaaja: asiakas 1 / asiakas 2", koodiOtsikko: "Lisäkysymyksen pohja: kopioi tarvittaessa" },
            { otsikko: "Kirjoita kysymyksesi tiedostoon", missa: "Tiedosto [[tiedosto:kysymykset|kysymykset.md]] ja Teams-viesti, jonka lähetit asiakkaille viikolla 40", tee: "Kopioi Teams-viestistä yksi kysymys. Ohje: [[ohje:teams]], kohta Jos kopioit viestin Teamsista. Napsauta saman numeron otsikossa juuri ennen merkkiä ( ja paina Shift+End ja sitten Ctrl+V.", naet: "Otsikon numeron perässä on kysymyksesi, eikä tekstiä (kirjoita kysymys) ole. Tee sama jokaiselle kysymykselle. Jos lähetit alle kolme kysymystä, maalaa ylimääräiset otsikot riveineen ja paina Delete." },
            { otsikko: "Kirjoita vastaukset", missa: "Tiedosto [[tiedosto:kysymykset|kysymykset.md]], jokaisen kysymyksen rivit Vastaus ja Vastaaja", tee: "Kirjoita rivin - Vastaus (viikko 41): perään asiakkaan vastaus. Napsauta rivillä - Vastaaja: juuri ennen sanaa asiakas, paina Shift+End ja kirjoita vastaajan rooli, asiakas 1 tai asiakas 2.", naet: "Jokaisen kysymyksen jälkeen on vastaus ja rooli, esimerkiksi - Vastaaja: asiakas 2. Jos molemmat asiakkaat vastasivat samaan kysymykseen, Vastaus-rivillä ovat molempien vastaukset ja Vastaaja-rivillä lukee asiakas 1 ja asiakas 2. Asiakas 1 on Antti Honkasalo ja asiakas 2 on Matti Seise. Et kirjoita nimiä, koska repository on julkinen. Jos asia jäi auki, Vastaus-rivillä lukee auki, sovitaan viikolla ja ohjaajan kertoman viikon numero, esimerkiksi auki, sovitaan viikolla 43. Vastaaja-rivi jää silloin ennalleen. Jos ohjaaja ei kertonut viikkoa, kirjoita 43, koska viikko 42 on syysloma." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa on vain [[tiedosto:kysymykset|kysymykset.md]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:kysymykset|kysymykset.md]] muutokset.", koodi: "Kirjaa asiakkaiden vastaukset", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Asiakkaiden vastaukset ovat tiedostossa [[tiedosto:kysymykset|kysymykset.md]] GitHubissa.",
          tallenna: "Vastaukset tiedostossa [[tiedosto:kysymykset|kysymykset.md]] GitHubissa.",
          esimerkki: "Reseptikirjan kysymys ja vastaus:\n### 1. Pitääkö reseptin voida tulostaa?\n- Vastaus (viikko 41): Ei ensimmäisessä versiossa. Tulostus on jatkolistalla.\n- Vastaaja: asiakas 1",
          eiRiita: "### 1. Onko kaikki ok?\n- Vastaus: joo\nKysymys ei kysy mitään tarkkaa, ja vastaajan rooli puuttuu.",
          sanat: []
        },
        "41-8": {
          perii: ["41-1"],
          miksi: "Tekninen päätös ja käyttöliittymävaatimus ohjaavat harjoitussovellusta ja koko projektia. [[toimeksianto|Toimeksianto]] pyytää isot painikkeet ja hyvän kontrastin, ja kortin #1 hyväksymiskriteeri tulee käyttöliittymävaatimuksesta.",
          osat: [
            { otsikko: "Lue tekninen ehdotus", missa: "Vektoripaja-sivusto, [[toimeksianto|Toimeksianto]], kohta Ehdotettu toteutustapa", tee: "Lue [[toimeksianto#tekninen-ehdotus|toimeksiannon kohta Ehdotettu toteutustapa]]: tekninen ehdotus ja pakollinen ydin ennen joulua.", naet: "Tiedät neljä pääkirjastoa: PySide6, PyVista, trimesh ja pytest. Kirjastot pyvistaqt, numpy ja svgelements asennetaan niiden apuna." },
            { otsikko: "Etsi päätöksen otsikko", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### Tekninen pohja: hyväksynkö ehdotuksen ja miksi (viikko 41) ohjerivin jälkeen.", koodi: "### Tekninen pohja: hyväksynkö ehdotuksen ja miksi (viikko 41)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kirjoita päätös teknisestä pohjasta", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko Tekninen pohja: hyväksynkö ehdotuksen ja miksi (viikko 41)", tee: "Kirjoita, hyväksytkö ehdotuksen. Perustele päätös vähintään kahdella pakollisen ytimen toiminnolla ja paina Ctrl+S.", naet: "Otsikon jälkeen on päätös ja peruste, jossa mainitaan pakollisen ytimen toimintoja, esimerkiksi SVG-tuonti ja .obj-vienti." },
            { otsikko: "Lähetä viesti, jos et hyväksy ehdotusta", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Jos hyväksyit ehdotuksen, rastita tämä osatehtävä. Muuten kopioi viesti, täydennä ___-kohdat ja lähetä se ohjaajalle. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Työvaihe Asenna harjoitussovelluksen kirjastot odottaa ohjaajan vastausta. Jatka sillä välin tämän työvaiheen osatehtävästä 5 ja sitten työvaiheesta Pura harjoitussovelluksen pohja. Ohjaajan vastauksen luet osatehtävässä 8.", koodi: "Hei Matti,\nen hyväksy Vektoripajan teknistä ehdotusta sellaisenaan.\nSyy: ___\nEhdotan tilalle: ___\nKirjoitin päätöksen ja perusteen suunnitelmaan.", koodiOtsikko: "Viesti ohjaajalle: kopioi tämä" },
            { otsikko: "Etsi käyttöliittymävaatimuksen otsikko", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]]", tee: "Etsi samasta tiedostosta otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### Käyttöliittymävaatimus (viikko 41) ohjerivin jälkeen.", koodi: "### Käyttöliittymävaatimus (viikko 41)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kirjoita käyttöliittymävaatimus", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko Käyttöliittymävaatimus (viikko 41)", tee: "Kopioi mallirivit ja liitä ne kursorin kohtaan. Vaihda arvot omiksesi tai pidä malliarvot ja paina Ctrl+S.", naet: "Otsikon jälkeen on neljä riviä. Värikoodi on #-merkki ja kuusi merkkiä, esimerkiksi #000000 on musta. Lyhenne px tarkoittaa pikseliä. Jos et ole varma arvoista, pidä malliarvot: mallin värit ovat sovelluksen pohjan värit, ja tarkistat vaatimuksen uudelleen viikolla 5. Kortin #1 hyväksymiskriteeri tulee näistä riveistä.", koodi: "- Taustaväri: #000000\n- Tekstin väri: #1fa4e3\n- Tekstin koko: 18 px\n- Painikkeiden koko: vähintään 48 × 48 px", koodiOtsikko: "Mallirivit: kopioi ja vaihda arvot" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa on vain [[tiedosto:suunnitelma|suunnitelma.md]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa tekninen päätös ja käyttöliittymävaatimus", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Lue ohjaajan vastaus", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Jos et lähettänyt viestiä osatehtävässä 4, rastita tämä osatehtävä. Muuten lue ohjaajan vastaus ja toimi sen mukaan, ennen kuin aloitat työvaiheen Asenna harjoitussovelluksen kirjastot.", naet: "Jos ohjaaja pitää ehdotetun tekniikan, jatkat työvaiheesta Asenna harjoitussovelluksen kirjastot sellaisenaan. Jos ohjaaja muuttaa tekniikkaa, hänen vastauksensa kertoo, mitä teet. Odottaessasi voit tehdä työvaiheet Pura harjoitussovelluksen pohja ja Määrittele kuution testi. Jos vastausta ei ole tullut seuraavana työpäivänä, lähetä muistutus. Ohje: [[ohje:teams]].", koodi: "Hei Matti,\nmuistutan viestistäni Vektoripajan teknisestä ehdotuksesta. Tarvitsen vastauksen, ennen kuin asennan harjoitussovelluksen kirjastot.", koodiOtsikko: "Viesti: kopioi tämä, jos lähetät muistutuksen" }
          ],
          valmis: "Tekninen päätös ja käyttöliittymävaatimus ovat [[tiedosto:suunnitelma|suunnitelmassa]] GitHubissa.",
          tallenna: "Päätökset tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan päätös: \"Hyväksyn ehdotuksen. SQLite tallentaa reseptit, ja Flask näyttää haun selaimessa. Molempia tarvitaan pakolliseen ytimeen: reseptin lisäykseen ja hakuun.\"",
          eiRiita: "\"Hyväksyn, koska Copilot suositteli tätä.\" Perustelussa ei ole yhtään pakollisen ytimen toimintoa.",
          sanat: []
        },
        "41-1": {
          versio: "2026-10-05",
          miksi: "Pohjassa ovat valmiina julkaisun ja itsetestin tiedostot sekä kirjastojen lista requirements.txt. Pohjassa ei ole .exe-tiedostoa: sen tekee GitHub Actions myöhemmin.",
          osat: [
            { vanha: 3, otsikko: "Lataa pohja", missa: "Selain, Vektoripaja-sivusto", tee: "Lataa [vektoripaja-pohja.zip](pohjat/vektoripaja-pohja.zip).", naet: "Selain tallentaa tiedoston vektoripaja-pohja.zip Lataukset-kansioon." },
            { vanha: 3, otsikko: "Avaa repositoryn kansio Resurssienhallinnassa", missa: "VS Code, Explorer", tee: "Napsauta tiedostoa README.md hiiren oikealla painikkeella. Valitse Reveal in File Explorer.", naet: "Resurssienhallinta aukeaa repositoryn kansioon. Siinä näkyy README.md." },
            { vanha: 3, otsikko: "Kopioi kansion polku", missa: "Resurssienhallinnan osoiterivi ikkunan yläreunassa", tee: "Napsauta osoiterivin tyhjää kohtaa kansioiden nimien oikealla puolella. Paina Ctrl+C.", naet: "Osoiterivi muuttuu tekstiksi, esimerkiksi C:\\Users\\…\\Vektoripaja. Polku on leikepöydällä." },
            { vanha: 3, otsikko: "Valitse Pura kaikki", missa: "Resurssienhallinta", tee: "Valitse vasemmasta reunasta Lataukset. Napsauta tiedostoa vektoripaja-pohja.zip hiiren oikealla painikkeella ja valitse Pura kaikki.", naet: "Purkuikkuna aukeaa. Sen yläosassa lukee Valitse kohde ja pura tiedostot, ja kentässä on kohdekansion polku. [[kuvaohje:windows-pura-kaikki|Kuvaohjeen kohdat 1–3]] näyttävät saman ikkunan." },
            { vanha: 3, otsikko: "Vaihda kohdekansioksi repository", missa: "Purkuikkuna Valitse kohde ja pura tiedostot, kohdekansion kenttä", tee: "Napsauta kenttää. Paina Ctrl+A ja sitten Ctrl+V.", naet: "Kentässä on repositoryn kansion polku, sama kuin osoiterivillä." },
            { vanha: 3, otsikko: "Pura pohja", missa: "Purkuikkuna Valitse kohde ja pura tiedostot", tee: "Valitse Pura. Jos Windows kysyy, korvataanko tiedostot, valitse Ohita nämä tiedostot.", naet: "Windows purkaa tiedostot suoraan repositoryn kansioon. Dokumenttisi säilyvät ennallaan." },
            { vanha: 3, otsikko: "Tarkista purku", missa: "VS Code, Explorer", tee: "Katso Explorerin tiedostolistaa.", naet: "Explorerissa ovat kansiot vektoripaja, tests ja esimerkit sekä tiedostot .gitignore, LUE_MINUT.txt, main.py, pytest.ini, rakenna_exe.bat, requirements.txt, tarkista_ymparisto.py ja vektoripaja.spec. Uutta alikansiota ei ole. Jos Explorerissa on uusi kansio, esimerkiksi vektoripaja-pohja, tai tiedostoja puuttuu, purku meni väärään kansioon. Tee silloin osatehtävät 2–6 uudelleen ja poista uusi kansio: napsauta sitä hiiren oikealla painikkeella, valitse Delete ja sitten Move to Recycle Bin." },
            { otsikko: "Tarkista teeman värit", missa: "VS Code, tiedosto vektoripaja/teema.py", tee: "Avaa tiedosto vektoripaja/teema.py. Ohje: [[ohje:avaa-tiedosto]]. Vertaa rivin TAUSTA väriä käyttöliittymävaatimuksesi taustaväriin ja rivin KOROSTUS väriä tekstin väriin.", naet: "Värit ovat samat kuin [[tiedosto:suunnitelma|suunnitelmassa]], esimerkiksi TAUSTA = \"#000000\". Jos värit eivät ole samat, vaihda väri niin, että #-merkki jää lainausmerkkien sisälle, ja paina Ctrl+S. Tekstin kokoa ja painikkeiden kokoa ei ole tässä tiedostossa, etkä tarkista niitä nyt." }
          ],
          valmis: "Pohjan tiedostot ovat repositoryn kansiossa, dokumentit ovat ennallaan, ja teeman värit ovat samat kuin käyttöliittymävaatimuksessasi.",
          tallenna: "Pohjan tiedostot menevät GitHubiin commitilla työvaiheessa Kirjaa kirjastojen lisenssit README:hen.",
          sanat: []
        },
        "41-6": {
          perii: ["41-1"],
          miksi: "Harjoitus tarvitsee saman ympäristön kuin varsinainen sovellus. Asennat kirjastot projektin omaan virtuaaliympäristöön.",
          osat: [
            { otsikko: "Luo virtuaaliympäristö", missa: "VS Code", tee: "Luo virtuaaliympäristö [[kuvaohje:vscode-create-environment|kuvaohjeen]] mukaan.", naet: "Explorerissa on kansio .venv, ja oikeaan alakulmaan tulee ilmoitus valmiista ympäristöstä. Jos komentoa Python: Create Environment ei löydy tai listassa ei ole Python 3.13:a, tee osatehtävä 2." },
            { otsikko: "Korjaa ympäristön luonti", missa: "VS Code, Extensions-näkymä vasemmassa reunassa", tee: "Jos kansio .venv syntyi osatehtävässä 1, rastita tämä osatehtävä. Muuten paina Ctrl+Shift+X ja kirjoita hakukenttään Python.", naet: "Listassa on laajennus Python. Jos sen painikkeessa lukee Install, valitse Install, käynnistä VS Code uudelleen ja tee osatehtävä 1 alusta. Jos osatehtävän 1 listassa ei ollut Python 3.13:a, asenna Python [[kuvaohje:python-asennus|kuvaohjeen]] mukaan ja tee osatehtävä 1 alusta. Jos kansiota .venv ei vieläkään synny, tee osatehtävät 6 ja 7." },
            { otsikko: "Avaa uusi terminaali", missa: "VS Code, ylävalikko", tee: "Avaa terminaali. Ohje: [[ohje:terminaali]].", naet: "Terminaalin rivi alkaa (.venv). Jos terminaalissa lukee running scripts is disabled, tee [[ohje:terminaali|terminaaliohjeen]] viimeinen vaihe." },
            { otsikko: "Asenna kirjastot", missa: "Terminaali", tee: "Aja komento. Ohje: [[ohje:komento]]. Asennus kestää muutaman minuutin.", naet: "Lopussa on rivi, joka alkaa sanoilla Successfully installed, ja sen perässä kirjastojen nimet. Jos sen jälkeen on [notice]-rivejä, ne eivät haittaa. Jos lopussa on rivejä, jotka alkavat sanalla ERROR, tee osatehtävät 6 ja 7.", koodi: "pip install -r requirements.txt", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista ympäristö", missa: "Terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Rivien alussa lukee OK. Viimeisellä rivillä lukee Ympäristö on kunnossa. [[kuvaohje:tarkista-ymparisto|Katso kuvaohje]]. Jos jonkin rivin alussa ei lue OK, tee osatehtävät 6 ja 7.", koodi: "python tarkista_ymparisto.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista Python-versio, jos jokin epäonnistui", missa: "Terminaali", tee: "Jos osatehtävät 1–5 onnistuivat, rastita tämä osatehtävä ja osatehtävä 7. Muuten aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa on rivi, joka alkaa sanalla Python, esimerkiksi Python 3.13.1. Jos terminaali sanoo, ettei komentoa löydy, sekin on tulos. Tarvitset tuloksen osatehtävän 7 viestissä.", koodi: "python --version", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Lähetä virhe ohjaajalle", missa: "Teams, keskustelu ohjaajan kanssa, ja VS Coden terminaali", tee: "Kopioi viesti ja liitä se Teamsiin. Ohje: [[ohje:teams]]. Täydennä ___-kohdat ennen lähettämistä: maalaa tulos ja virherivit terminaalissa hiirellä, paina Ctrl+C ja liitä ne viestiin näppäimillä Ctrl+V.", naet: "Viesti on lähetetty. Jos virherivejä oli paljon, lähetit niistä kuvan ohjeen [[ohje:teams]] kohdan Jos lähetät kuvan mukaan. Jatka sillä välin työvaiheesta Määrittele kuution testi ja palaa tähän työvaiheeseen, kun ohjaaja vastaa. Jos vastausta ei ole tullut seuraavana työpäivänä, lähetä sama viesti uudelleen ja kirjoita sen alkuun Muistutus.", koodi: "Hei Matti,\nviikon 41 työvaihe Asenna harjoitussovelluksen kirjastot ei onnistu.\nOsatehtävä, jossa virhe tuli: ___\nKomento python --version tulostaa: ___\nVirherivit terminaalista: ___", koodiOtsikko: "Viesti: kopioi tämä" }
          ],
          valmis: "Kansio .venv on olemassa, kirjastot on asennettu, ja ympäristön tarkistus näyttää OK.",
          tallenna: "Virtuaaliympäristö jää omalle koneellesi, etkä vie kansiota .venv GitHubiin. Pohjan tiedostot menevät GitHubiin seuraavan työvaiheen commitilla.",
          sanat: ["virtuaaliympäristö", "requirements.txt"]
        },
        "41-9": {
          perii: ["41-1"],
          miksi: "README kertoo, mitä kirjastoja projekti käyttää, missä versioissa ja millä lisensseillä. Saman commitin mukana pohjan tiedostot menevät GitHubiin.",
          osat: [
            { otsikko: "Katso kirjastojen lisenssit", missa: "Terminaali", tee: "Aja komento. Ohje: [[ohje:komento]]. Vieritä terminaalia hiiren rullalla ylöspäin.", naet: "Jokaisen kirjaston kohdalla on rivit Name, Version ja License. Jos License-rivi on tyhjä tai hyvin pitkä, kirjoita lisenssiksi: katso kirjaston sivu.", koodi: "pip show PySide6 pyvista pyvistaqt trimesh numpy svgelements pytest", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Avaa README", missa: "VS Code, Explorer, ylin taso", tee: "Avaa tiedosto README.md. Ohje: [[ohje:avaa-tiedosto]]. Paina Ctrl+End.", naet: "Kursori on tiedoston viimeisellä rivillä. Tiedostossa on viikolla 40 kirjoittamasi otsikko ## Työkalut." },
            { otsikko: "Kirjoita kirjastot ja lisenssit", missa: "README.md, tiedoston loppu", tee: "Paina Enter. Kopioi kirjastopohja, liitä se ja täytä jokaisen rivin versio ja lisenssi terminaalista.", naet: "README:ssä on otsikko ## Kirjastot ja seitsemän riviä, esimerkiksi - PySide6 6.9.1 · LGPL-3.0.", koodi: "## Kirjastot\n- PySide6 ___ · ___\n- pyvista ___ · ___\n- pyvistaqt ___ · ___\n- trimesh ___ · ___\n- numpy ___ · ___\n- svgelements ___ · ___\n- pytest ___ · ___", koodiOtsikko: "Kirjastopohja: kopioi tämä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa ovat pohjan uudet tiedostot (U) ja README.md (M), ja se on oikein.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet pohjan tiedostot ja tiedoston README.md muutokset. Jos Changes-listassa näkyy kansio .venv, älä tee committia. Lähetä silloin ohjaajalle kuva Changes-listasta ohjeen [[ohje:teams]] kohdan Jos lähetät kuvan mukaan ja jatka työvaiheesta Määrittele kuution testi, kunnes ohjaaja vastaa. Jos vastausta ei tule seuraavana työpäivänä, lähetä kuva uudelleen ja kirjoita sen viereen Muistutus.", koodi: "Lisää harjoitussovelluksen pohja ja kirjastojen lisenssit", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "README:ssä ovat kirjastot versioineen ja lisensseineen, ja pohjan tiedostot ovat GitHubissa.",
          tallenna: "Kirjastot ja lisenssit tiedostossa README.md GitHubissa.",
          esimerkki: "Toisen projektin kirjastolista:\n## Kirjastot\n- Flask 3.1.0 · BSD-3-Clause\n- pytest 8.3.4 · MIT",
          eiRiita: "## Kirjastot\nPySide6, pyvista ja trimesh. Lisenssit puuttuvat.",
          sanat: []
        },
        "41-2": {
          versio: "2026-10-05",
          miksi: "Oma odotettu tulos kertoo, mitä kuution koodin pitää tehdä. Kirjoitat sen ennen koodia.",
          osat: [
            { vanha: 0, otsikko: "Päätä, miten kulma lasketaan", missa: "Paperi tai omat muistiinpanot", tee: "Funktio kiertokulma(aika, nopeus) saa ajan sekunteina ja palauttaa kulman asteina. Päätä kaksi asiaa: onko nopeus kierroksia vai asteita sekunnissa, ja kasvaako kulma yli 360:n vai alkaako se alusta.", naet: "Sinulla on kaksi päätöstä paperilla. Kirjoitat ne kortin viestipohjaan työvaiheessa Rakenna pyörivä kuutio." },
            { vanha: 1, otsikko: "Laske testin 1 odotetut tulokset", missa: "Paperi tai omat muistiinpanot", tee: "Laske päätöstesi mukaan, mitä kiertokulma(0, 0.5) ja kiertokulma(3, 0.5) palauttavat. Jos nopeus on kierroksia sekunnissa, muuta tulos asteiksi kertomalla se luvulla 360, koska yksi kierros on 360 astetta.", naet: "Sinulla on paperilla kaksi lukua asteina. Esimerkiksi 2 kierrosta on 2 × 360 = 720 astetta." },
            { otsikko: "Tarkista, alkaako kulma alusta", missa: "Paperi tai omat muistiinpanot", tee: "Jos päätit, että kulma alkaa alusta, katso molemmat luvut. Jos luku on 360 tai suurempi, vähennä siitä 360, kunnes se on alle 360.", naet: "Sinulla on kaksi lukua, jotka ovat testin 1 odotetut tulokset. Esimerkiksi 450 astetta alkaa alusta ja on 90 astetta. Jos päätit, että kulma kasvaa yli 360:n, luvut eivät muutu. Desimaaliluku kirjoitetaan testiin pisteellä, esimerkiksi 2.25, ei 2,25." }
          ],
          valmis: "Testin 1 molemmat odotetut tulokset on päätetty asteina ennen toteutusta.",
          tallenna: "Odotetut tulokset kortin #1 issueen seuraavassa työvaiheessa.",
          esimerkki: "Toinen funktio: matka(aika, nopeus), nopeus metreinä sekunnissa. matka(0, 2) palauttaa 0, ja matka(3, 2) palauttaa 6.",
          eiRiita: "\"Kulma kasvaa ajan mukana.\" Luvut puuttuvat, joten testi ei voi tarkistaa mitään.",
          sanat: ["testi"]
        },
        "41-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Pieni kuutioharjoitus opettaa toteuttamisen ilman SVG-tuonnin vaikeutta.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Samalla painikkeella palaat työsykliin myöhempien osatehtävien alussa." },
            { vanha: 0, otsikko: "Suunnittele kortti #1 (askel 1)", missa: "Työsykli, askel 1 Suunnittele, ja Copilot selaimessa", tee: "Tee askeleen 1 ohjeet viestipohjalla Viikon 41 kortti #1. Täytä kaksi Testi 1 -riviä työvaiheen Määrittele kuution testi luvuilla ja Lisäksi-rivi päätöksilläsi: kierrosta tai astetta, kasvaa tai alkaa alusta.", naet: "Copilot on kirjoittanut kortin, jossa on kuusi otsikkoa sekä osiot Oma tarkistus ja Sykli. Kortin testissä ovat sinun lukusi. Valitse Palaa työvaiheeseen ja jatka osatehtävästä 3." },
            { vanha: 1, otsikko: "Vertaa korttia mallikorttiin", missa: "Työvaiheen lopussa kohta Mallikortti #1 ja toteutusapu, ja Copilot selaimessa", tee: "Avaa kohta Mallikortti #1 ja toteutusapu ja vertaa mallikortin jokaista otsikkoa Copilotin kortin samaan otsikkoon. Jos Copilotin kortista puuttuu jotain, kopioi lisäyspyyntö, kirjoita puuttuva asia sen loppuun ja lähetä se samaan Copilot-keskusteluun.", naet: "Copilotin kortissa ovat samat tiedostot, Älä tee -rivit ja hyväksymiskriteerit kuin mallikortissa, vaikka sanat olisivat eri. Jos pyysit lisäystä, Copilot antoi koko kortin uudelleen. Et liitä mallikorttia issueen.", koodi: "Lisää korttiin tämä ja anna koko kortti uudelleen samassa muodossa: ", koodiOtsikko: "Lisäyspyyntö: kopioi tarvittaessa" },
            { vanha: 0, otsikko: "Siirrä kortti #1 issueksi (askel 2)", missa: "Työsykli, askel 2 Siirrä, ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta ja valitse askeleessa 1 Tein tämän · seuraava askel. Tee askeleen 2 ohjeet ja kirjoita issuen numero paperille. Ohje: [[ohje:issue]].", naet: "Kortin #1 issuessa on Copilotin viimeisin kokonainen kortti, eli lisäyksen jälkeinen kortti, jos pyysit lisäystä. Issuen numero on otsikon perässä, esimerkiksi #3, eikä se ole sama kuin kortin numero #1. Issuessa on rastit kohdissa 1 ja 2 sekä kommentti Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Kirjoita testi 1 (askel 3a)", missa: "VS Code, Explorer, kansio tests", tee: "Kopioi testipohja ja luo kansioon tests tiedosto, jonka nimikenttään kirjoitat test_kierto.py. Ohje: [[ohje:uusi-tiedosto]]. Vaihda ___-kohtiin omat odotetut tuloksesi ja paina Ctrl+S.", naet: "Explorerissa on kansion tests alapuolella tiedosto test_kierto.py. Et kirjoita nimikenttään kansion nimeä, koska napsautit jo kansiota tests. Tiedostossa tests/test_kierto.py on kaksi assert-riviä, joissa ovat omat lukusi. Rastitat issuessa kohdan 3a.", koodi: "from vektoripaja.kierto import kiertokulma\n\n\ndef test_1_kiertokulma():\n    assert kiertokulma(0, 0.5) == ___\n    assert kiertokulma(3, 0.5) == ___", koodiOtsikko: "Testipohja: kopioi tämä" },
            { vanha: 0, otsikko: "Toteuta kortti #1 (askel 3b)", missa: "Työsykli, askel 3 Rakenna, Copilot ja VS Code", tee: "Avaa työsykli työvaiheen painikkeesta ja tee askeleen 3 kortin #1 kohdat: ensin pyyntö 1 tiedostosta kierto.py, sitten pyyntö 2 tiedostosta ikkuna.py. Luo kumpikin tiedosto koodilohkosta kansioon vektoripaja. Ohje: [[ohje:uusi-tiedosto]].", naet: "Työsykli aukesi askeleeseen 3 Rakenna. Kansiossa vektoripaja ovat tiedostot kierto.py ja ikkuna.py. Komento python main.py avaa ikkunan, jossa kuutio pyörii. Rastitat issuessa kohdan 3b. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Tarkista kortti #1 (askel 4)", missa: "Työsykli, askel 4 Tarkista, VS Code ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta ja tee askeleen 4 ohjeet testitiedostolla tests/test_kierto.py. Tarkista sitten hyväksymiskriteerit kohdan Mallikortti #1 ja toteutusapu ohjeilla ja rastita issuessa ne, jotka toteutuvat.", naet: "Testi test_1_kiertokulma on PASSED, ja issuessa on testin 1 kirjaus kommenttina. Kirjauspohjan riville Mistä odotettu tulos löytyi kirjoitit molempien assert-rivien numerot, esimerkiksi testikoodin rivit 5 ja 6. Tulos-rivillä lukee läpi. Issuessa on rastit kriteereissä ja kohdassa 4. Jos jokin kriteeri ei toteudu, toimi kohdan Mallikortti #1 ja toteutusapu ohjeen Jos jokin kriteeri ei toteudu mukaan. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Raportoi ja kirjaa kortti #1 (askeleet 5–6)", missa: "Työsykli, askeleet 5 Raportoi ja 6 Kirjaa", tee: "Avaa työsykli työvaiheen painikkeesta ja tee askeleiden 5 ja 6 ohjeet. Kirjoita [[tiedosto:ai-loki|AI-lokiin]] yksi merkintä kortista #1, ja kirjoita sen otsikkoriville Copilot, Tiedosto-kaista.", naet: "Kortin #1 issue on suljettu, ja tiedoston [[tiedosto:ai-loki|ai-loki.md]] lopussa on merkintä. Askeleen 5 viestin Kaista-rivillä lukee vain Tiedosto. Et käytä Copilotin ehdottamaa seuraavaa korttia, koska teet kortin #2 työvaiheessa Julkaise harjoitussovellus. Kun valitset askeleessa 6 Tein tämän · kierros valmis ✓, työsykli näyttää tekstin Kierros 1 valmis. Valitse silloin Palaa työvaiheeseen." }
          ],
          valmis: "Sovellus näyttää pyörivän kuution, ja testi 1 menee läpi.",
          tallenna: "Koodi ja testi GitHubiin. Testiajon tulos kortin #1 issueen kommenttina.",
          esimerkki: "Testi toisesta funktiosta: assert matka(3, 2) == 6. Luku 6 on oma odotettu tulos, joka kirjoitettiin ennen koodia.",
          eiRiita: "assert kiertokulma(3, 0.5) == kiertokulma(3, 0.5). Testi vertaa funktiota itseensä, joten se menee aina läpi.",
          apu: {
            otsikko: "Mallikortti #1 ja toteutusapu",
            tree: "Vektoripaja/\n├─ .github/\n│  ├─ ISSUE_TEMPLATE/tehtavakortti.md   (pull request)\n│  ├─ ISSUE_TEMPLATE/havainto.md        (pull request)\n│  ├─ copilot-instructions.md           (pull request)\n│  └─ workflows/release.yml             (pohja)\n├─ .venv/                               (luot itse, ei GitHubiin)\n├─ esimerkit/esimerkki.svg              (pohja)\n├─ project-docs/                        (pull request)\n├─ tests/\n│  ├─ LUE_MINUT.md                      (pohja)\n│  └─ test_kierto.py                    (luot itse)\n├─ vektoripaja/\n│  ├─ __init__.py                       (pohja)\n│  ├─ ikkuna.py                         (luot itse)\n│  ├─ itsetesti.py                      (pohja)\n│  ├─ kierto.py                         (luot itse)\n│  ├─ teema.py                          (pohja)\n│  └─ teema.qss                         (pohja)\n├─ .gitignore                           (pohja)\n├─ LUE_MINUT.txt                        (pohja)\n├─ main.py                              (pohja)\n├─ PROJEKTIN-TILA.md                    (pull request)\n├─ pytest.ini                           (pohja)\n├─ rakenna_exe.bat                      (pohja)\n├─ README.md\n├─ requirements.txt                     (pohja)\n├─ tarkista_ymparisto.py                (pohja)\n└─ vektoripaja.spec                     (pohja)",
            actions: [
              "Pohjan `main.py` kutsuu funktiota `kaynnista()` tiedostosta `vektoripaja/ikkuna.py`. Älä muuta tiedostoa `main.py`.",
              "Tarkista kriteeri \"Komento python main.py avaa ikkunan, jossa kuutio pyörii tasaisesti\" kohdan Tarkistustesti ohjeella: aja `python main.py` ja katso, että kuutio pyörii tasaisesti.",
              "Tarkista kriteeri \"Ikkuna käyttää värejä tiedostosta vektoripaja/teema.py\": avaa `vektoripaja/ikkuna.py`, paina Ctrl+F ja kirjoita teema. Osumia pitää olla vähintään yksi. Katso lisäksi, että ikkunan taustaväri on sama kuin käyttöliittymävaatimuksesi taustaväri.",
              "Tarkista kriteeri \"Funktio kiertokulma ei käytä Qt:ta\": avaa `vektoripaja/kierto.py`, paina Ctrl+F ja kirjoita PySide6. Osumia ei saa olla.",
              "Jos jokin kriteeri ei toteudu, älä rastita sitä. Kirjoita samaan Copilot-keskusteluun: Kriteeri (kriteerin teksti) ei toteudu. Anna korjattu tiedosto (tiedoston polku) kokonaan yhtenä koodilohkona. Korvaa tiedoston sisältö koodilohkolla. Ohje: [[ohje:korvaa-tiedosto]]. Tarkista kriteeri sitten uudelleen. Jos sama kriteeri ei toteudu toisellakaan yrityksellä, luo havaintoissue. Ohje: [[ohje:havaintoissue]]."
            ],
            code: "MALLIKORTTI #1\n## Tavoite\nKuutio pyörii sovelluksen ikkunassa.\n## Kaista ja perustelu\nTiedosto. Kaksi tiedostoa, pyydetään yksi kerrallaan.\n## Tiedostot\nvektoripaja/kierto.py, vektoripaja/ikkuna.py\n## Älä tee\nÄlä lisää muita kirjastoja. Älä muuta tiedostoja main.py ja tests/test_kierto.py.\n## Hyväksymiskriteerit\n- [ ] Komento python main.py avaa ikkunan, jossa kuutio pyörii tasaisesti.\n- [ ] Ikkuna käyttää värejä tiedostosta vektoripaja/teema.py.\n- [ ] Funktio kiertokulma ei käytä Qt:ta.\n## Testi\nTesti 1 (kiertokulma): kiertokulma(0, 0.5) → (oma odotettu tuloksesi) ja kiertokulma(3, 0.5) → (oma odotettu tuloksesi)\n## Oma tarkistus\nMuutin kortista ___ / En muuttanut, koska ___\n## Sykli\n- [ ] 1 Suunniteltu\n- [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu\n- [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu\n- [ ] 5 Raportoitu\n- [ ] 6 Kirjattu",
            test: "Aja komento python main.py. Ikkuna aukeaa, ja kuutio pyörii. Sulje ikkuna sen sulkupainikkeesta. Aja sitten pytest -v. Testi test_1_kiertokulma menee läpi."
          },
          sanat: ["tehtäväkortti", "kaista"]
        },
        "41-4": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Julkaisu varmistaa, että sovellusta voi käyttää kehitysympäristön ulkopuolella.",
          osat: [
            { vanha: 0, otsikko: "Aloita työsyklin kierros 2", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki, ja otsikon Työsykli vieressä lukee Kierros 2." },
            { vanha: 0, otsikko: "Suunnittele kortti #2 (askel 1)", missa: "Työsykli, askel 1 Suunnittele, Copilot selaimessa ja työvaiheen lopussa kohta Mallikortti #2 ja julkaisuapu", tee: "Tee askeleen 1 ohjeet kortin #1 Copilot-keskustelussa viestipohjalla Viikon 41 kortti #2 ja täytä Testi 2 -rivi. Valitse sitten Palaa työvaiheeseen ja vertaa korttia kohdan Mallikortti #2 ja julkaisuapu mallikorttiin.", naet: "Copilot on kirjoittanut kortin #2 samaan keskusteluun, ja testin 2 odotettu tulos on kortin kohdassa Testi. Liitit tilatiedoston uudelleen, koska päivitit sen kortin #1 askeleessa 5. Kortissa ovat samat hyväksymiskriteerit ja Älä tee -rivit kuin mallikortissa, vaikka sanat olisivat eri. Jos jotain puuttuu, kopioi lisäyspyyntö, kirjoita puuttuva asia sen loppuun ja lähetä se samaan keskusteluun. Et liitä mallikorttia issueen.", koodi: "Lisää korttiin tämä ja anna koko kortti uudelleen samassa muodossa: ", koodiOtsikko: "Lisäyspyyntö: kopioi tarvittaessa" },
            { vanha: 0, otsikko: "Siirrä kortti #2 issueksi (askeleet 2 ja 3a)", missa: "Työsykli, askel 2 Siirrä, ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta, valitse askeleessa 1 Tein tämän · seuraava askel ja tee askeleen 2 ohjeet. Ohje: [[ohje:issue]]. Kirjoita issuen numero paperille, lisää issueen kommenttipohjalla testin 2 odotettu tulos ja rastita 3a.", naet: "Kortin #2 issue on GitHubissa. Teet testin 2 käsin, joten sen odotettu tulos on issuessa kommenttina: kopioit kommenttipohjan issuen kommenttikenttään, täydensit sen kortin kohdan Testi tuloksella ja valitsit Comment. Issuessa ovat rastit kohdissa 1, 2 ja 3a. Kortin #2 issueen et kirjoita Sovittu-kommenttia. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Testi 2 (julkaisu), käsin tehtävä testi\nOdotettu tulos: ", koodiOtsikko: "Kommentti issueen: kopioi ja täydennä" },
            { vanha: 0, otsikko: "Tee tagi v0.0.41 (askel 3b)", missa: "VS Code, Source Control ja terminaali", tee: "Tarkista, että Changes-lista on tyhjä. Aja sitten komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi. Jos Changes-listassa oli tiedostoja, teit ensin commitin ja pushin.", koodi: "git tag v0.0.41", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Pushaa tagi (askel 3b)", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.41 -> v0.0.41. Tagin push käynnistää GitHub Actionsin julkaisun. Rastitat issuessa kohdan 3b. Avaa lopuksi työsykli työvaiheen painikkeesta, valitse askeleessa 3 Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "git push origin v0.0.41", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Tarkista Actions-ajo (askel 4)", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]]. Kortissa #2 et aja pytestiä omalla koneellasi, koska Actions ajaa testit.", naet: "Ajo Julkaisu v0.0.41 on vihreä. Askeleessa Aja itsetesti valmiille .exe:lle lukee ITSETESTI LÄPI. Jos ajo on punainen, lähetä ohjaajalle viesti ja kuva punaisesta askeleesta ohjeen [[ohje:actions]] viimeisen vaiheen mukaan, äläkä tee uutta tagia ennen vastausta. Kirjoita odottaessasi viikon kirjausta niiltä osin kuin voit. Jos vastausta ei ole tullut seuraavana työpäivänä, lähetä viesti uudelleen ja kirjoita sen alkuun Muistutus.", koodi: "Hei Matti,\nviikon 41 Actions-ajo Julkaisu v0.0.41 on punainen. Liitin kuvan punaisesta askeleesta.\nPunaisen askeleen nimi: ___", koodiOtsikko: "Viesti: kopioi tämä, jos ajo on punainen" },
            { vanha: 1, otsikko: "Tee testi 2 puretusta zipistä (askel 4)", missa: "Selain ja Resurssienhallinta, Lataukset-kansio, sitten työsykli, askel 4 Tarkista", tee: "Lataa ja pura zip Vektoripaja-v0.0.41-windows.zip ja käynnistä Vektoripaja.exe. Ohje: [[ohje:release]]. Avaa sitten työsykli työvaiheen painikkeesta ja kirjoita tulos kortin #2 issueen kommentiksi askeleen 4 testin kirjauspohjalla.", naet: "Vektoripaja.exe käynnistyy ilman VS Codea, ja kuutio pyörii. Et pura Lataukset-kansion toista zipiä vektoripaja-pohja.zip. Kirjauspohjan rivillä Mistä odotettu tulos löytyi jätit vaihtoehdon issuen kommentti (käsin tehty testi). Rastitat issuessa hyväksymiskriteerit, jotka toteutuvat, ja kohdan 4. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 1, otsikko: "Raportoi ja kirjaa kortti #2 (askeleet 5–6)", missa: "Työsykli, askeleet 5 Raportoi ja 6 Kirjaa", tee: "Avaa työsykli työvaiheen painikkeesta ja tee askeleiden 5 ja 6 ohjeet. Kirjoita askeleen 5 Kaista-riville sanojen Tiedosto / Täydennys / Agentti tilalle ei koodia, julkaisu tagilla, ja [[tiedosto:ai-loki|AI-lokin]] otsikkoriville Copilot, ei koodia.", naet: "Kortin #2 issue on suljettu, ja siinä on testin 2 odotettu ja havaittu tulos. [[tiedosto:ai-loki|AI-lokin]] merkinnän kohdassa Mihin pyysin apua lukee kortin #2 suunnittelu. Askeleen 6 Changes-listassa ovat vain PROJEKTIN-TILA.md ja [[tiedosto:ai-loki|ai-loki.md]], koska et muuttanut koodia kortissa #2. [[kuvaohje:github-issue-sulkeutuu|Katso kuvaohje]]." }
          ],
          valmis: "Ladatusta zipistä käynnistetty Vektoripaja.exe näyttää pyörivän kuution.",
          tallenna: "Release v0.0.41 GitHubiin ja testin 2 tulos kortin #2 issueen.",
          apu: {
            otsikko: "Mallikortti #2 ja julkaisuapu",
            actions: [
              "Kortissa #2 et kirjoita koodia. Julkaisun tiedostot ovat pohjassa. Toteutat kortin tekemällä tagin ja pushaamalla sen. Ohje: [[ohje:tagi]].",
              "Tagin push käynnistää GitHub Actionsin. Se ajaa testit, tekee Windows-version ja ajaa sille itsetestin. Windows-version tekemistä kutsutaan paketoinniksi.",
              "Kun ajo on vihreä, Releases-sivulla on zip Vektoripaja-v0.0.41-windows.zip.",
              "Jos ajo on punainen, älä tee uutta tagia ennen ohjaajan vastausta. Teet uuden yrityksen tagilla v0.0.41-2: `git tag v0.0.41-2` ja `git push origin v0.0.41-2`."
            ],
            code: "MALLIKORTTI #2\n## Tavoite\nSovellus julkaistaan releasena, ja ladatusta zipistä käynnistetty Vektoripaja.exe toimii.\n## Kaista ja perustelu\nEi koodia. Julkaisun tiedostot ovat pohjassa. Kortti toteutetaan tagilla v0.0.41.\n## Tiedostot\nEi muutettavia tiedostoja.\n## Älä tee\nÄlä muuta tiedostoja .github/workflows/release.yml ja vektoripaja.spec.\n## Hyväksymiskriteerit\n- [ ] Actions-ajo Julkaisu v0.0.41 on vihreä.\n- [ ] Releases-sivulla on Vektoripaja-v0.0.41-windows.zip.\n- [ ] Puretusta zipistä käynnistetty Vektoripaja.exe näyttää pyörivän kuution.\n## Testi\nTesti 2 (julkaisu): lataa zip releasesta, pura se ja käynnistä Vektoripaja.exe → kuutio pyörii.\n## Oma tarkistus\nMuutin kortista ___ / En muuttanut, koska ___\n## Sykli\n- [ ] 1 Suunniteltu\n- [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu (käsin tehtävä testi: odotettu tulos kommenttina)\n- [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu\n- [ ] 5 Raportoitu\n- [ ] 6 Kirjattu",
            test: "Testi 2 (julkaisu): lataa zip releasesta. Pura se Lataukset-kansioon valitsemalla Pura kaikki. Käynnistä Vektoripaja.exe puretusta kansiosta. Kuution pitää pyöriä. Jos Windows sanoo \"Windows suojasi tietokonettasi\", valitse Lisätietoja ja sitten Suorita silti."
          },
          sanat: ["tagi", "release", "GitHub Actions"]
        }
      },
      lisatehtavat: [["Tee lisätehtävä.", "Lisätesti on ylimääräinen testi ilman numeroa. Mitä odotat, kun aika on negatiivinen, esimerkiksi <code>kiertokulma(-1, 0.5)</code>? Kirjoita odotettu tulos kortin #1 issueen kommentiksi ennen ajoa. Suljettuunkin issueen voi kommentoida. Avaa sitten tiedosto <code>tests/test_kierto.py</code>, paina Ctrl+End ja kaksi kertaa Enter ja kirjoita rivi <code>def test_lisa_negatiivinen_aika():</code> ja seuraavalle riville neljän välilyönnin sisennyksellä <code>assert kiertokulma(-1, 0.5) == </code> ja oma tuloksesi. Aja testit. Ohje: [[ohje:pytest]]. Kirjoita havaittu tulos samaan issueen. Jos lisätesti ei mene läpi, poista se tiedostosta ennen committia, koska Actions ajaa kaikki testit julkaisussa. Tee lopuksi commit ja push. Ohje: [[ohje:commit]]."]],
      kuvaohjeet: ["vscode-create-environment", "vscode-tulkki", "tarkista-ymparisto", "github-actions-ajo", "github-release-lataus", "windows-smartscreen"],
      sykli: {
        oma: {
          1: "täytät viestipohjan ___-kohdat ennen lähettämistä. Viikolla 41 ehdotus, kaista ja rajapinta ovat valmiina: kortissa #1 täytät kaksi Testi 1 -riviä ja Lisäksi-rivin, kortissa #2 Testi 2 -rivin. Rastitat askeleen 1 issuessa askeleessa 2."
        },
        pohjat: {
          1: [
            {
              otsikko: "Viikon 41 kortti #1: täytä ja liitä Copilotiin",
              teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko 41: Harjoitussykli\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti tekee vain pyörivän kuution sovelluksen ikkunaan.\nKaista: Tiedosto. Kaksi tiedostoa, pyydetään yksi kerrallaan.\nRajapinta (vain funktion kortissa): funktio kiertokulma(aika, nopeus) saa ajan sekunteina ja nopeuden ja palauttaa kulman asteina.\nTesti 1: kun syöte on kiertokulma(0, 0.5), tuloksen pitää olla ___.\nTesti 1: kun syöte on kiertokulma(3, 0.5), tuloksen pitää olla ___.\nLisäksi: Nopeuden yksikkö on ___ sekunnissa. 360 asteen jälkeen kulma ___.\n\nOhita rivit, joissa on vielä ___. Kirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista (Tiedosto, Täydennys tai Agentti) ja perustelu\n## Tiedostot\n## Älä tee (testitiedostot aina tässä)\n## Hyväksymiskriteerit\n## Testi: numero ja nimi, syöte ja odotettu tulos\n## Oma tarkistus\nMuutin kortista ___ / En muuttanut, koska ___\n## Sykli\n- [ ] 1 Suunniteltu\n- [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu\n- [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu\n- [ ] 5 Raportoitu\n- [ ] 6 Kirjattu\n\nKirjoita rajapinta kohdan ## Tavoite loppuun. Kirjoita kaksi viimeistä osiota sellaisinaan. Käytä minun odotettuja tuloksiani sanatarkasti. Älä kirjoita koodia."
            },
            {
              otsikko: "Viikon 41 kortti #2: täytä ja liitä Copilotiin",
              teksti: "Teen projektia Vektoripaja. Liitin tilatiedoston PROJEKTIN-TILA.md.\n\nViikko 41: Harjoitussykli\nViikon tavoite: {feature}\n\nMinun ehdotukseni kortiksi: Tämä kortti julkaisee sovelluksen releasena tagilla v0.0.41. Koodia ei kirjoiteta, koska julkaisun tiedostot ovat pohjassa.\nKaista: ei koodia, julkaisu tagilla v0.0.41.\nTesti 2 (käsin): kun lataan zipin releasesta, puran sen ja käynnistän Vektoripaja.exe:n, tuloksen pitää olla ___.\n\nOhita rivit, joissa on vielä ___. Kirjoita tästä yksi tehtäväkortti tässä muodossa:\n\n## Tavoite\n## Kaista ja perustelu\n## Tiedostot\n## Älä tee\n## Hyväksymiskriteerit\n## Testi: numero ja nimi, syöte ja odotettu tulos\n## Oma tarkistus\nMuutin kortista ___ / En muuttanut, koska ___\n## Sykli\n- [ ] 1 Suunniteltu\n- [ ] 2 Siirretty\n- [ ] 3a Testi kirjoitettu (käsin tehtävä testi: odotettu tulos kommenttina)\n- [ ] 3b Toteutettu\n- [ ] 4 Tarkistettu\n- [ ] 5 Raportoitu\n- [ ] 6 Kirjattu\n\nKirjoita kaksi viimeistä osiota sellaisinaan. Käytä minun odotettua tulostani sanatarkasti."
            }
          ],
          3: [
            { otsikko: "Komento: kopioi tämä", teksti: "python main.py" },
            {
              otsikko: "Tiedosto-kaista, pyyntö 1: kierto.py – liitä tämä Copilotiin",
              teksti: "Toteuta tämän keskustelun viimeisin tehtäväkortti yhteen tiedostoon.\nTiedosto: vektoripaja/kierto.py\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Tiedostossa vektoripaja/ikkuna.py pitää olla funktio kaynnista(), jota main.py kutsuu. Värit tulevat tiedostosta vektoripaja/teema.py.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTiedoston nykyinen sisältö:\nuusi tiedosto"
            },
            {
              otsikko: "Tiedosto-kaista, pyyntö 2: ikkuna.py – liitä tämä Copilotiin ja liitä loppuun teema.py",
              teksti: "Toteuta tämän keskustelun viimeisin tehtäväkortti yhteen tiedostoon.\nTiedosto: vektoripaja/ikkuna.py\n\nSäännöt:\n- Muuta vain tätä tiedostoa.\n- Älä muuta testejä.\n- Anna koko muutettu tiedosto yhtenä koodilohkona.\n- Älä lisää uusia kirjastoja.\n- Tiedostossa vektoripaja/ikkuna.py pitää olla funktio kaynnista(), jota main.py kutsuu. Värit tulevat tiedostosta vektoripaja/teema.py.\n- Jos kortti on epäselvä, kysy, ennen kuin kirjoitat koodia.\n\nTiedoston nykyinen sisältö:\nuusi tiedosto\n\nTiedoston vektoripaja/teema.py sisältö:\n"
            }
          ]
        },
        ohjeet: {
          3: [
            "Kortti #1, kohta 3a: kirjoita testi ensin. Testipohja on työvaiheen Rakenna pyörivä kuutio osatehtävässä Kirjoita testi 1. Rastita 3a issuessa.",
            "Kortti #1, kohta 3b: toteuta kortti Tiedosto-kaistalla. Tiedosto-kaista tarkoittaa, että Copilot kirjoittaa koodin yksi tiedosto kerrallaan. Kopioi pohja Tiedosto-kaista, pyyntö 1: kierto.py ja liitä se samaan Microsoft 365 Copilot -keskusteluun. Lähetä viesti.",
            "Kopioi Copilotin vastauksesta vain koodilohko koodilohkon kopiointipainikkeella: [[kuvaohje:copilot-kopioi-vastaus]]. Luo kansioon `vektoripaja` tiedosto, jonka nimikenttään kirjoitat `kierto.py`, ja liitä koodi siihen. Ohje: [[ohje:uusi-tiedosto]].",
            "Kopioi pohja Tiedosto-kaista, pyyntö 2: ikkuna.py ja liitä se samaan keskusteluun, mutta älä lähetä vielä. Kopioi tiedoston `vektoripaja/teema.py` sisältö. Ohje: [[ohje:kopioi-tiedosto]]. Palaa Copilotiin, napsauta viestikenttää ja paina Ctrl+End: kursori on viestin lopussa rivin Tiedoston vektoripaja/teema.py sisältö: jälkeen. Paina Shift+Enter ja Ctrl+V ja lähetä viesti painamalla Enter.",
            "Kopioi vastauksen koodilohko samalla tavalla. Luo kansioon `vektoripaja` tiedosto, jonka nimikenttään kirjoitat `ikkuna.py`, ja liitä koodi siihen. Ohje: [[ohje:uusi-tiedosto]].",
            "Lue jokainen koodilohko, ennen kuin liität sen. Älä hyväksy muutoksia testitiedostoon tai tiedostoon `main.py`.",
            "Tallenna tiedostot painamalla Ctrl+S. Käynnistä sovellus komennolla `python main.py`. Ohje: [[ohje:komento]]. Katso, että kuutio pyörii, ja sulje sovelluksen ikkuna sen sulkupainikkeesta. Rastita 3b issuessa.",
            "Kortti #2: teet testin 2 käsin ja kirjoitat sen odotetun tuloksen kortin #2 issueen kommentiksi ennen kohdan 3a rastia. Kohdassa 3b teet tagin ja pushaat sen. Ohje: [[ohje:tagi]]. Kortissa #2 et kirjoita koodia."
          ]
        },
        lisa: {
          1: "Kortissa #2 jatka kortin #1 Copilot-keskustelussa, vaikka et olisi tehnyt maanantain Copilot-kohtaa. Älä aloita uutta keskustelua, vaan liitä tilatiedosto PROJEKTIN-TILA.md uudelleen samaan keskusteluun, koska päivitit sen kortin #1 askeleessa 5. Jatka sitten kohdasta, joka alkaa sanoilla Kopioi viestipohja.",
          2: "Kortti #1 on viikon ensimmäinen kortti, joten kirjoita sen issueen Sovittu-kommentti. Kirjoita pp.kk. tilalle viikkopalaverin päivä ja ___ tilalle, mitä palaverissa sovittiin korteista #1 ja #2. Jos niistä ei sovittu mitään, kirjoita ___ tilalle: kortit #1 ja #2 tehdään viikon työvaiheiden mukaan. Jos palaveri ei ole vielä ollut, kirjoita kommentti kortin #1 issueen palaverin jälkeen. Kortin #2 issueen et kirjoita Sovittu-kommenttia.",
          3: "Tällä viikolla kirjoitat testin testipohjaan etkä käytä Täydennys-kaistaa, vaikka askeleen Työkalu-rivillä lukee Täydennys-kaista. Otat Täydennys-kaistan käyttöön viikolla 43 ja Agentti-kaistan viikolla 44.",
          4: "Kortissa #1 testissä 1 on kaksi assert-riviä samassa testissä, joten kirjaa ne yhteen kommenttiin. Kirjoita riville Mistä odotettu tulos löytyi molempien assert-rivien numerot, esimerkiksi testikoodin rivit 5 ja 6, ja poista vaihtoehto issuen kommentti (käsin tehty testi). Kortissa #2 teet testin 2 käsin: et avaa testitiedostoa etkä aja pytestiä, koska Actions ajaa testit. Valitse kirjauspohjan rivillä Mistä odotettu tulos löytyi vaihtoehto issuen kommentti (käsin tehty testi).",
          5: "Kortissa #1 kaista on Tiedosto: maalaa Kaista-riviltä teksti / Täydennys / Agentti ja paina Delete, jolloin rivillä lukee Kaista: Tiedosto. Riittikö se? Kortissa #2 kirjoita sanojen Tiedosto / Täydennys / Agentti tilalle ei koodia, julkaisu tagilla. Kerro molemmissa omalla lauseella, riittikö kaista.",
          6: "Kortissa #1 kirjoita merkinnän otsikkoriville Copilot, Tiedosto-kaista. Kortissa #2 kirjoita otsikkoriville Copilot, ei koodia, ja kohtaan Mihin pyysin apua kortin #2 suunnittelu. Kortin #2 Changes-listassa ovat vain PROJEKTIN-TILA.md ja [[tiedosto:ai-loki|ai-loki.md]]."
        },
        jumissa: {
          3: [
            { kysymys: "`python main.py` sanoo, ettei `vektoripaja.ikkuna`-moduulia löydy?", ohje: "Teet tiedoston `vektoripaja/ikkuna.py` kortissa #1. Jos olet jo tehnyt sen, tarkista, että se on kansiossa `vektoripaja` eikä repositoryn juuressa." }
          ],
          4: [
            { kysymys: "Viikko 41: en löydä omaa odotettua tulostani tiedostosta tests/test_kierto.py?", ohje: "Kopioi testipohja uudelleen työvaiheen Rakenna pyörivä kuutio osatehtävästä Kirjoita testi 1. Korvaa tiedoston `tests/test_kierto.py` sisältö sillä. Ohje: [[ohje:korvaa-tiedosto]]. Vaihda ___-kohtiin omat lukusi ja aja testit uudelleen." },
            { kysymys: "Actions-ajo on punainen?", ohje: "Lähetä ohjaajalle Teamsissa kuva punaisesta askeleesta. Ohje: [[ohje:teams]], kohta Jos lähetät kuvan. Älä tallenna kuvaa repositoryyn. Jos punaisen askeleen nimi on Aja testit (pytest), aja `pytest -v` omalla koneellasi. Älä tee uutta tagia ennen ohjaajan vastausta." },
            { kysymys: "Releases-sivulla ei ole zipiä?", ohje: "Pelkkä commit ei tee releasea. Tarkista, että ajoit `git push origin v0.0.41`. Katso [[github:actions|Actions-sivulta]], onko ajo vielä kesken. Ajo kestää noin 10 minuuttia." },
            { kysymys: "Windows sanoo \"Windows suojasi tietokonettasi\"?", ohje: "Tämä on Microsoft Defender SmartScreen. Se varoittaa, koska sovellusta ei ole allekirjoitettu. Valitse Lisätietoja ja sitten Suorita silti." }
          ]
        }
      }
    },
    43: {
      type: "feature",
      feature: "Käyttäjä voi avata oman SVG-piirroksensa Vektoripajassa.",
      excerpt: "Tarvitsemme Windowsilla toimivan työpöytäsovelluksen, joka avaa Inkscapessa piirretyn SVG-tiedoston ja tekee siitä low-poly-mallin.",
      connection: "Vektoripajan lähtöaineisto on käyttäjän Inkscapessa tekemä SVG-piirros. Tällä viikolla tuot sen polut sovellukseen ja tarkistat, että myös virheelliset tiedostot käsitellään hallitusti. Tuonti luo pohjan osien rakenteelle ja myöhemmille 3D-muodoille.",
      deliverable: "Oma testitiedosto Inkscapesta · testit 3–5 · kansiorakenne suunnitelmassa · polut näkymässä · kaksi svgelementsin rajoitetta kirjastot.md:ssä · viikon release.",
      why: "Kaikki myöhemmät viikot tarvitsevat tuodut polut. Jos tuonti on epävarma, myös revolve eli pyörähdyskappale ja inflate eli putki ovat epävarmoja.",
      done: "Oma SVG avautuu tiedostoikkunasta, testit 3–5 menevät läpi, ja tiedostossa [[tiedosto:kirjastot|kirjastot.md]] on kaksi svgelementsin rajoitetta omalla tiedostolla kokeiltuna.",
      record: "Tuonnin kortin issuen numero ja testien 3–5 tulokset, kansiorakenne, moduulien rajat ja palaverissa sovittu dokumentointitapa (linkki tiedostoon [[tiedosto:suunnitelma|suunnitelma.md]]), kaksi svgelementsin rajoitetta omalla tiedostolla kokeiltuna (linkki tiedostoon [[tiedosto:kirjastot|kirjastot.md]]), tuontifunktio selityspohjalla ja releasen v0.0.43 osoite. Selityspohjaa varten avaa vektoripaja/tuonti.py, paina Ctrl+F ja hae sanat if ja for. Kirjoita pohjan Testi-riville testit 3–5. Kirjoita kohtaan Missä työnäyte on? nämä 11 [[naytto|näyttömatriisin]] vaatimusta: testaa ohjelman toimintoja · [[naytto|tulkitsee suunnitelmia ja toteuttaa ohjelmiston toimintoja]] · sopii tehtävistä tiimin muiden jäsenten kanssa · jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi · hyödyntää rajapintoja ja käsittelee tietoa · arvioi ohjelmiston tietoturvaa · käyttää versionhallintaa · julkaisee ohjelman tuotantoympäristöön · selvittää ohjelmistokomponenttikirjaston tarjoamat mahdollisuudet ja rajoitteet · suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen · dokumentoi ohjelmiston sovitulla tavalla.",
      funktio: "tuontifunktio (testit 3–5)",
      skills: ["SVG-tiedoston tuonti", "Moduulien rajat", "Komponenttikirjaston rajoitteet", "Ulkoinen tiedosto turvallisesti"],
      termit: ["täydennys", "moduuli", "havaintoissue", "layer"],
      tehtavat: {
        "43-1": {
          versio: "2026-10-05",
          miksi: "Oma piirros on tuonnin ja myöhempien toimintojen yhteinen testiaineisto.",
          osat: [
            { otsikko: "Aloita uusi piirros", missa: "Inkscape", tee: "Käynnistä Inkscape. Jos näet aloitusikkunan, sulje se sulkupainikkeesta.", naet: "Inkscapen otsikkorivillä lukee New document 1, ja piirtoalueella on tyhjä valkoinen sivu. Jos otsikkorivillä lukee jonkin tiedoston nimi, valitse File ja sitten New." },
            { otsikko: "Avaa Layers and Objects -paneeli", missa: "Inkscape, ylävalikko", tee: "Valitse Layer ja sitten Layers and Objects.", naet: "Paneeli aukeaa ikkunan oikeaan reunaan. Siinä on yksi rivi: Layer 1. Se on uuden piirroksen valmis layer eli taso." },
            { vanha: 0, otsikko: "Nimeä layer Vartaloksi", missa: "Inkscape, Layers and Objects -paneeli", tee: "Kaksoisnapsauta paneelissa nimeä Layer 1. Kirjoita Vartalo ja paina Enter.", naet: "Rivillä lukee Vartalo. Layer on piirroksen ylin ryhmä: kaikki, mitä piirrät, menee sen sisään. [[kuvaohje:inkscape-layerit|Katso kuvaohje]]." },
            { otsikko: "Valitse kynätyökalu", missa: "Inkscape, piirtoalue", tee: "Napsauta piirtoalueen tyhjää kohtaa. Paina sitten B.", naet: "Vasemman reunan työkalupalkissa kynän kuvake on korostettu. Napsautus siirsi näppäimistön kohdistuksen paneelista piirtoalueelle, joten B valitsi kynätyökalun." },
            { vanha: 0, otsikko: "Piirrä kolme polkua", missa: "Inkscape, piirtoalue", tee: "Piirrä kolme erillistä muotoa: napsauta jokaiseen muotoon muutama piste ja lopeta muoto painamalla Enter.", naet: "Paneelissa on Vartalo-rivin sisällä kolme riviä, joiden nimi alkaa sanalla path, esimerkiksi path1. Ne ovat kolme polkua. Jos rivejä ei näy, napsauta nuolta Vartalo-rivin vasemmalla puolella." },
            { vanha: 0, otsikko: "Tee ryhmä Korvat", missa: "Inkscape, Layers and Objects -paneeli", tee: "Napsauta paneelissa ylintä path-riviä ja paina Ctrl+G. Kaksoisnapsauta uutta riviä, jonka nimi alkaa kirjaimella g (esimerkiksi g1), kirjoita Korvat ja paina Enter.", naet: "Paneelissa lukee Korvat samassa kohdassa, jossa polku oli. Korvat on ryhmä, ja sen sisällä on yksi polku: näet sen Korvat-rivin vasemman reunan nuolesta. Jos uutta g-riviä ei tullut, valitse ylävalikosta Object ja sitten Group." },
            { vanha: 0, otsikko: "Tee ryhmä Pää", missa: "Inkscape, Layers and Objects -paneeli", tee: "Napsauta riviä Korvat ja sitten Ctrl-näppäin pohjassa Korvat-rivin jälkeistä path-riviä, joka on yhtä paljon sisennetty kuin Korvat. Paina Ctrl+G ja nimeä uusi g-rivi Pää samalla tavalla kuin Korvat.", naet: "Vartalo-rivin sisällä ovat ryhmä Pää ja yksi polku. Ryhmän Pää sisällä ovat ryhmä Korvat ja yksi polku. Layer on SVG-tiedostossa ryhmä, joten piirroksessa on kolme sisäkkäistä ryhmää: Vartalo, Pää ja Korvat." }
          ],
          valmis: "Piirroksessa on layer Vartalo, sen sisällä sisäkkäiset ryhmät Pää ja Korvat sekä kolme polkua.",
          tallenna: "Piirros on auki Inkscapessa. Älä sulje Inkscapea: tallennat piirroksen työvaiheessa Tallenna tuonnin testiaineisto.",
          sanat: ["layer"]
        },
        "43-7": {
          perii: ["43-1"],
          miksi: "Testit 3–5 lukevat kolme tiedostoa kansiosta testiaineisto. Tallennat tiedostot repositoryyn, jotta testit toimivat myös GitHub Actionsissa.",
          osat: [
            { otsikko: "Luo kansio testiaineisto", missa: "VS Code, Explorer", tee: "Napsauta Explorerin tyhjää kohtaa hiiren oikealla painikkeella. Valitse New Folder, kirjoita nimeksi testiaineisto ja paina Enter.", naet: "Explorerissa on kansio testiaineisto samalla tasolla kuin README.md." },
            { otsikko: "Kopioi kansion polku", missa: "VS Code, Explorer", tee: "Napsauta kansiota testiaineisto hiiren oikealla painikkeella. Valitse Copy Path.", naet: "Valikko sulkeutuu. Kansion polku on nyt leikepöydällä. Näet polun, kun liität sen seuraavassa osatehtävässä." },
            { otsikko: "Tallenna piirros", missa: "Inkscape, File-valikko ja tallennusikkuna", tee: "Palaa Inkscapeen ja valitse File ja sitten Save As. Poista kentän Tiedostonimi teksti, paina Ctrl+V, kirjoita perään \\oma-piirros.svg ja valitse Tallenna.", naet: "Inkscapen otsikkorivillä lukee oma-piirros.svg. VS Coden Explorerissa tiedosto on kansiossa testiaineisto." },
            { otsikko: "Luo testin 4 tiedosto", missa: "VS Code, Explorer, kansio testiaineisto", tee: "Kopioi tiedoston sisältö. Luo kansioon testiaineisto tiedosto haitallinen.svg ja liitä sisältö siihen. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedosto testiaineisto/haitallinen.svg on tallennettu. Siinä on yksi polku (path) ja script-elementti. Skripti on vaaraton malli haitallisesta koodista: testi 4 tarkistaa, että tuonti ei suorita sitä.", koodi: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\">\n  <script>console.log(\"haitallinen skripti\");</script>\n  <path d=\"M 10 10 L 90 10 L 50 90 Z\"/>\n</svg>", koodiOtsikko: "Tiedoston haitallinen.svg sisältö: kopioi tämä" },
            { otsikko: "Luo testin 5 tiedosto", missa: "VS Code, Explorer, kansio testiaineisto", tee: "Kopioi tiedoston sisältö. Luo kansioon testiaineisto tiedosto ei-svg.txt ja liitä sisältö siihen. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedosto testiaineisto/ei-svg.txt on tallennettu. Se on testin 5 väärä tiedosto: tekstitiedosto eikä SVG-piirros.", koodi: "Tämä tiedosto ei ole SVG-piirros.", koodiOtsikko: "Tiedoston ei-svg.txt sisältö: kopioi tämä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa on kolme uutta tiedostoa kansiossa testiaineisto, ja niiden kohdalla on U.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedostot oma-piirros.svg, haitallinen.svg ja ei-svg.txt.", koodi: "Lisää tuonnin testiaineisto", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Kansiossa testiaineisto ovat oma-piirros.svg, haitallinen.svg ja ei-svg.txt, ja ne ovat GitHubissa.",
          tallenna: "Tiedostot testiaineisto/oma-piirros.svg, testiaineisto/haitallinen.svg ja testiaineisto/ei-svg.txt repositoryssa GitHubissa.",
          sanat: []
        },
        "43-2": {
          versio: "2026-10-05",
          miksi: "Tuonnin pitää käsitellä myös väärät ja haitalliset tiedostot. Päätät tuontifunktion rajapinnan ja testien odotetut tulokset ennen toteutusta.",
          osat: [
            { otsikko: "Päätä tuontifunktion rajapinta", missa: "Paperi tai muistiinpanot", tee: "Lue rajapinta koodilaatikosta ja päätä funktiolle nimi: pienet kirjaimet ja verbi ensin, esimerkiksi tuo_svg. Kirjoita paperille nimi, syöte ja paluuarvo.", naet: "Paperilla on funktion nimi, syöte ja paluuarvo. Ne ovat funktion rajapinta. Ilmaus nostaa virheen tarkoittaa, että funktio lopettaa ja antaa virheen, jonka viestin ikkuna näyttää käyttäjälle.", koodi: "Nimi: (päätä itse, esimerkiksi tuo_svg)\nSyöte: tiedoston nimi kansioineen tekstinä, esimerkiksi testiaineisto/oma-piirros.svg\nPaluuarvo: lista piirroksen poluista (svgelementsin Path-elementit)\nVirhe: jos tiedosto ei ole SVG, funktio nostaa virheen ValueError\nTiedosto: vektoripaja/tuonti.py", koodiOtsikko: "Tuontifunktion rajapinta" },
            { vanha: 0, otsikko: "Päätä testin 3 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 3: kolme polkua. Syöte on testiaineisto/oma-piirros.svg, jossa on kolme polkua. Kirjoita paperille testin numero, syöte ja montako polkua listassa pitää olla.", naet: "Paperilla on testin 3 syöte ja luku. Luku on testin 3 odotettu tulos." },
            { vanha: 0, otsikko: "Päätä testin 4 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 4: haitallinen SVG. Syöte on testiaineisto/haitallinen.svg, jossa on yksi polku ja `<script>`-elementti. Kirjoita paperille testin numero, syöte ja montako polkua listassa pitää olla.", naet: "Paperilla on testin 4 syöte ja luku. Oikea tulos on tiedoston polkujen määrä, koska svgelements lukee SVG:n datana eikä suorita skriptiä. Skripti ei siis tee mitään, eikä tuonti kaadu." },
            { vanha: 0, otsikko: "Päätä testin 5 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 5: väärä tiedosto. Syöte on testiaineisto/ei-svg.txt, joka ei ole SVG. Kirjoita paperille testin numero, syöte ja sanatarkasti virheilmoitus, jonka käyttäjä näkee, esimerkiksi `Tiedosto ei ole SVG.`", naet: "Paperilla on virheilmoituksen teksti sanatarkasti ja loppupisteen kanssa. Et kirjoita lainausmerkkejä, koska testin 5 kommentin mallissa ne ovat valmiina. Ajat testin 5 pytestillä: testi antaa tiedoston suoraan tuontifunktiolle. Tiedostoikkunasta et voi valita tiedostoa ei-svg.txt, koska ikkuna näyttää vain .svg-tiedostot." },
            { vanha: 1, otsikko: "Tarkista havaintopohja", missa: "VS Code, Explorer", tee: "Napsauta Explorerissa kansiota .github, sen sisällä kansiota ISSUE_TEMPLATE ja sitten tiedostoa havainto.md. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto .github/ISSUE_TEMPLATE/havainto.md on auki. Siinä ovat otsikot ## Mitä odotin, ## Mitä tapahtui, ## Toistamisohje ja ## Syy omin sanoin. Ohjaajan pull request toi pohjan repositoryyn. Jos tiedostoa ei ole, lähetä koodilaatikon viesti ohjaajalle Teamsissa. Ohje: [[ohje:teams]]. Odottaessasi jatka työvaiheesta Suunnittele sovelluksen rakenne ja palaa tähän, kun vastaus tulee. Jos vastausta ei tule seuraavana työpäivänä, lähetä sama viesti uudelleen.", koodi: "Hei, repositoryssani ei ole tiedostoa .github/ISSUE_TEMPLATE/havainto.md. Miten saan havaintopohjan?", koodiOtsikko: "Viesti: kopioi tämä" },
            { vanha: 1, otsikko: "Katso havaintopohja GitHubissa", missa: "Selain, GitHub", tee: "Avaa [[github:issues/new/choose|uuden issuen pohjavalinta]].", naet: "Listassa ovat pohjat Tehtäväkortti ja Havainto. Kun huomaat virheen, luot Havainto-pohjalla havaintoissuen. Ohje: [[ohje:havaintoissue]]." }
          ],
          valmis: "Tuontifunktion rajapinta sekä testien 3–5 syötteet ja odotetut tulokset on päätetty ennen toteutusta, ja havaintopohja on repositoryssa.",
          tallenna: "Rajapinta ja odotetut tulokset paperilla. Kirjoitat ne tuonnin korttiin ja testeihin työvaiheessa Rakenna SVG-tuonti. Havaintopohja havainto.md on jo GitHubissa.",
          esimerkki: "Toinen funktio: tuo_reseptit(polku) saa tiedoston nimen kansioineen ja palauttaa listan reseptejä. Jos tiedosto ei ole reseptitiedosto, funktio nostaa virheen ValueError.\nTesti 7: syöte kaksi.txt, jossa on kaksi reseptiä → lista, jonka pituus on 2.\nTesti 8: syöte kuva.png → virhe ValueError, jonka viesti on Tiedosto ei ole reseptitiedosto.",
          eiRiita: "\"Tuonti toimii, ja väärä tiedosto antaa virheen.\" Luku ja virheilmoituksen teksti puuttuvat, joten testi ei voi tarkistaa mitään.",
          sanat: ["rajapinta", "havaintoissue"]
        },
        "43-3": {
          versio: "2026-10-05",
          miksi: "Moduulien rajat auttavat rakentamaan myöhemmät toiminnot samaan sovellukseen.",
          osat: [
            { vanha: 1, otsikko: "Sovi dokumentointitapa palaverissa", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kysy ohjaajalta viikkopalaverissa koodilaatikon kaksi kysymystä, vaikka aiemmat työvaiheet olisivat kesken. Kirjoita vastaukset ja palaverin päivä paperille.", naet: "Paperilla ovat molemmat vastaukset ja päivä. Jos palaveri pidettiin jo ilman näitä kysymyksiä, lähetä koodilaatikon teksti ohjaajalle Teamsissa ([[ohje:teams]]) ja kirjoita päiväksi vastausviestin päivä. Odottaessasi jatka osatehtävästä 2. Jos vastausta ei tule seuraavana työpäivänä, lähetä sama viesti uudelleen.", koodi: "Hei, kysyn viikon 43 dokumentointitavasta:\n1. Mitä README:hen kirjoitetaan?\n2. Onko käyttöohje README:ssä vai omassa tiedostossaan? Jos omassa, mikä on tiedoston nimi?", koodiOtsikko: "Kysymykset palaveriin tai Teams-viestiin: kopioi tämä" },
            { vanha: 0, otsikko: "Avaa suunnitelma ja etsi otsikko", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### Kansiorakenne ja moduulien rajat (viikko 43) ohjerivin jälkeen.", koodi: "### Kansiorakenne ja moduulien rajat (viikko 43)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kirjoita kansiorakenne ja moduulien rajat", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Kansiorakenne ja moduulien rajat (viikko 43)", tee: "Kopioi mallirivit ja liitä ne kursorin kohtaan. Lisää samanlainen rivi tiedostoista vektoripaja/kierto.py, vektoripaja/teema.py, vektoripaja/itsetesti.py ja vektoripaja/tuonti.py sekä kansioista tests/ ja testiaineisto/.", naet: "Otsikon jälkeen on lista. Jokaisella rivillä on kansio tai tiedosto ja sen yksi vastuu. Moduuli tarkoittaa kansiota tai tiedostoa, jolla on yksi vastuu. Pohjan tiedostoissa teema.py ja itsetesti.py vastuu lukee tiedoston alussa kolmen lainausmerkin välissä. Tiedostossa kierto.py on viikon 41 funktio kiertokulma, ja tiedostoon vektoripaja/tuonti.py tulee tällä viikolla tuontifunktio. Jos kansiossa vektoripaja on muita .py-tiedostoja kuin __init__.py, kirjoita niistäkin rivi. Repositoryn juuren tiedostoista listaan tulee vain main.py. Muut juuren tiedostot, esimerkiksi tarkista_ymparisto.py, ja kansiot project-docs, .github, .venv ja esimerkit eivät ole sovelluksen koodia, joten ne eivät tule listaan.", koodi: "- main.py: käynnistää sovelluksen\n- vektoripaja/ikkuna.py: näyttää sovelluksen ikkunan", koodiOtsikko: "Mallirivit: kopioi ja jatka" },
            { vanha: 1, otsikko: "Kirjoita dokumentointitapa", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Dokumentointitapa (viikko 43)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita palaverin vastaukset ja palaverin päivä paperiltasi.", naet: "Otsikon jälkeen on kolme asiaa: mitä README:hen kirjoitetaan, missä käyttöohje on ja palaverin päivä. Jos ohjaajan vastausta ei vielä ole, jätä tämä osatehtävä rastittamatta ja jatka osatehtävästä 5. Kun vastaus tulee, tee tämä osatehtävä ja osatehtävä 8 uudelleen.", koodi: "### Dokumentointitapa (viikko 43)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Avaa GitHub Copilotin ohjeet", missa: "VS Code, Explorer", tee: "Avaa tiedosto .github/copilot-instructions.md. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto aukeaa omalle välilehdelleen. Otsikon ## Rakenne jälkeen on rivi (Täydennä viikolla 43: kansiot ja moduulien rajat.)" },
            { otsikko: "Kopioi kansiorakenteen lista", missa: "VS Code, välilehti [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Kansiorakenne ja moduulien rajat (viikko 43)", tee: "Valitse välilehti [[tiedosto:suunnitelma|suunnitelma.md]] ja napsauta kansiorakenteen listan ensimmäisen rivin alkuun. Pidä Shift pohjassa ja paina nuolta alas, kunnes kursori on listan jälkeisellä tyhjällä rivillä, ja paina Ctrl+C.", naet: "Listan kaikki rivit ovat maalattuina, myös viimeinen rivi kokonaan, ja ne ovat leikepöydällä. Otsikko ja ohjerivi, joka alkaa merkillä >, eivät ole maalattuina." },
            { vanha: 0, otsikko: "Liitä rakenne GitHub Copilotin ohjeisiin", missa: "VS Code, välilehti copilot-instructions.md, otsikko ## Rakenne", tee: "Valitse välilehti copilot-instructions.md ja maalaa rivi (Täydennä viikolla 43: …): napsauta rivin alkuun ja paina Shift+End. Paina Ctrl+V ja sitten Ctrl+S.", naet: "Otsikon ## Rakenne jälkeen on sama lista kuin tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]]. Rivi Testit ovat kansiossa tests/ on ennallaan. Välilehden nimen vieressä ei ole palloa." },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa on kaksi tiedostoa: [[tiedosto:suunnitelma|suunnitelma.md]] ja copilot-instructions.md.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedostojen [[tiedosto:suunnitelma|suunnitelma.md]] ja copilot-instructions.md muutokset. Jos teit tämän osatehtävän toisen kerran, kun olit kirjoittanut dokumentointitavan, Changes-listassa oli vain [[tiedosto:suunnitelma|suunnitelma.md]].", koodi: "Kirjaa kansiorakenne ja dokumentointitapa", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Kansiorakenne, moduulien vastuut ja sovittu dokumentointitapa ovat GitHubissa.",
          tallenna: "Päätökset tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] ja rakenne tiedostossa .github/copilot-instructions.md GitHubissa.",
          esimerkki: "Reseptikirjan rakenne:\n### Kansiorakenne ja moduulien rajat (viikko 43)\n- reseptikirja/haku.py: hakee reseptit nimen mukaan\n- reseptikirja/tallennus.py: lukee ja kirjoittaa reseptitiedoston\n- reseptikirja/ikkuna.py: näyttää käyttöliittymän\n- tests/: testit, yksi testitiedosto moduulia kohden\n\n### Dokumentointitapa (viikko 43)\nREADME kertoo asennuksen ja käynnistyksen. Käyttöohjeessa on kuva jokaisesta painikkeesta. Sovittu palaverissa 20.10.2026.",
          eiRiita: "\"Koodi on kansiossa reseptikirja.\" Moduulien vastuut puuttuvat, joten GitHub Copilot ei tiedä, mihin tiedostoon uusi koodi kuuluu.",
          sanat: ["moduuli"]
        },
        "43-4": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Kaikki mallinnustoiminnot tarvitsevat piirroksesta luetut polut.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Jos auki on muu askel, valitse askelpalkista 1 Suunnittele." },
            { vanha: 0, otsikko: "Suunnittele tuonnin kortti (askel 1)", missa: "Työsykli, askel 1 Suunnittele, ja Copilot selaimessa", tee: "Tee askeleen 1 ohjeet. Täytä ___-kohdat näin: ehdotukseen SVG-tuonti Avaa-painikkeella, Kaista-riville Tiedosto, Rajapinta-riville ja kolmelle Testi-riville (testit 3, 4 ja 5) tiedot paperiltasi ja Lisäksi-riville koodilaatikon teksti.", naet: "Ennen lähettämistä viestin kaksi ensimmäistä täytettyä riviä olivat Minun ehdotukseni kortiksi: Tämä kortti tekee vain SVG-tuonnin Avaa-painikkeella ja Kaista (jos työvaihe kertoo): Tiedosto. Viestissä ei ollut enää yhtään ___-kohtaa. Copilot on kirjoittanut kortin, jossa on kuusi otsikkoa sekä osiot Oma tarkistus ja Sykli. Testi-kohdassa ovat testit 3, 4 ja 5 sinun odotetuilla tuloksillasi. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Funktio on tiedostossa vektoripaja/tuonti.py. Painikkeen nimi on Avaa, ja sen tiedostoikkuna näyttää vain .svg-tiedostot. Jos tiedosto ei ole SVG, funktio nostaa virheen ValueError, ja ikkuna näyttää virheen viestin käyttäjälle.", koodiOtsikko: "Lisäksi-rivin teksti: kopioi, maalaa Copilotissa Lisäksi-rivin ___ ja paina Ctrl+V" },
            { vanha: 0, otsikko: "Siirrä kortti issueksi (askel 2)", missa: "Työsykli, askel 2 Siirrä, ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet ([[ohje:issue]]) ja kirjoita issuen numero paperille.", naet: "Kortissa kaista on Tiedosto, Tiedostot-kohdassa ovat vektoripaja/tuonti.py ja vektoripaja/ikkuna.py, Älä tee -kohdassa on tests/test_tuonti.py, ja testeissä 3–5 ovat omat tuloksesi. Tuonnin kortin issuessa ovat rastit 1 Suunniteltu ja 2 Siirretty. Tuonnin kortti on viikon ensimmäinen kortti, joten issuessa on myös kommentti Sovittu viikkopalaverissa, ja siinä on palaverissa sovittu dokumentointitapa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Luo testitiedosto (askel 3a)", missa: "VS Code, Explorer", tee: "Kopioi import-rivit ja luo kansioon tests uusi tiedosto test_tuonti.py. Ohje: [[ohje:uusi-tiedosto]]. Jos funktiosi nimi ei ole tuo_svg, vaihda nimi viimeiselle riville.", naet: "Tiedosto tests/test_tuonti.py on tallennettu, ja siinä ovat import-rivit. Rivi import pytest tarvitaan testissä 5. Kirjoitat testit import-rivien jälkeen. Tämä osatehtävä ja kolme seuraavaa osatehtävää ovat työsyklin kohta 3a, ja niiden ohjeet ovat tässä työvaiheessa. Työsykliä ei tarvitse avata ennen kohtaa 3b.", koodi: "import pytest\n\nfrom vektoripaja.tuonti import tuo_svg", koodiOtsikko: "Import-rivit: kopioi tämä" },
            { vanha: 0, otsikko: "Kirjoita testi 3 (askel 3a)", missa: "Tiedosto tests/test_tuonti.py, tiedoston loppu", tee: "Kopioi kommentin malli, paina tiedostossa Ctrl+End ja Enter ja liitä malli. Vaihda ___ testin 3 tulokseksi, kirjoita seuraavalle riville def test_3_kolme_polkua ja hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Tiedostossa on testifunktio test_3_kolme_polkua, ja sen assert-rivillä on oma lukusi. Täydennys on harmaa koodiehdotus, jonka GitHub Copilot tekee kommentista. Jos assert-rivillä on eri luku, paina Esc ja kirjoita assert-rivi itse.", koodi: "# Testi 3: tuonti tiedostosta testiaineisto/oma-piirros.svg -> lista, jonka pituus on ___", koodiOtsikko: "Kommentin malli: kopioi tämä" },
            { otsikko: "Kirjoita testi 4 (askel 3a)", missa: "Tiedosto tests/test_tuonti.py, tiedoston loppu", tee: "Kopioi kommentin malli, paina tiedostossa Ctrl+End ja Enter ja liitä malli. Vaihda ___ testin 4 tulokseksi, kirjoita seuraavalle riville def test_4_haitallinen_svg ja hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Tiedostossa on testifunktio test_4_haitallinen_svg, ja sen assert-rivillä on oma lukusi.", koodi: "# Testi 4: tuonti tiedostosta testiaineisto/haitallinen.svg -> lista, jonka pituus on ___, eikä skriptiä suoriteta", koodiOtsikko: "Kommentin malli: kopioi tämä" },
            { otsikko: "Kirjoita testi 5 (askel 3a)", missa: "Tiedosto tests/test_tuonti.py, tiedoston loppu", tee: "Kopioi kommentin malli, paina tiedostossa Ctrl+End ja Enter ja liitä malli. Vaihda lainausmerkkien välissä oleva ___ virheilmoitukseksi paperiltasi, kirjoita seuraavalle riville def test_5_ei_svg ja hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Kommentissa virheilmoitus on yksien lainausmerkkien välissä loppupisteen kanssa. Testifunktiossa test_5_ei_svg on rivi `with pytest.raises(ValueError, …)` ja oma virheilmoituksesi. Kaikki kolme testiä on kirjoitettu, joten rastitat nyt issuessa kohdan 3a.", koodi: "# Testi 5: tuonti tiedostosta testiaineisto/ei-svg.txt -> virhe ValueError, jonka viesti on \"___\"", koodiOtsikko: "Kommentin malli: kopioi tämä" },
            { vanha: 1, otsikko: "Toteuta tuonti Tiedosto-kaistalla (askel 3b)", missa: "Työsykli, askel 3 Rakenna, kohta 3b, Copilot ja VS Code", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Tee kohdan 3b Tiedosto-kaistan ohjeet ensin tiedostolle vektoripaja/tuonti.py ja sitten tiedostolle vektoripaja/ikkuna.py.", naet: "Ennen liittämistä luit koodilohkot: tuonti.py:ssä on SVG.parse ja ValueError, ja ikkuna.py:ssä on Avaa-painike. Jos jokin niistä puuttuu, pyydä korjaus samassa keskustelussa ennen liittämistä. Kun käynnistät sovelluksen ja valitset Avaa, tiedostoikkuna näyttää vain .svg-tiedostot. Kun avaat kansiosta testiaineisto tiedoston oma-piirros.svg ([[ohje:tiedostoikkuna]]), sen polut näkyvät sovelluksessa. Rastitat nyt issuessa kohdan 3b. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." }
          ],
          valmis: "Testit 3–5 on kirjoitettu ennen toteutusta, ja oman SVG:n polut näkyvät sovelluksessa. Issuessa on rastit 1–3b.",
          tallenna: "Testit tiedostossa tests/test_tuonti.py ja tuonnin koodi. Ne menevät GitHubiin työvaiheessa Tarkista ja kirjaa SVG-tuonti.",
          esimerkki: "Reseptikirjan testikommentit ja täydennykset, jotka hyväksyin:\n# Testi 7: tuonti tiedostosta kaksi.txt -> lista, jonka pituus on 2\ndef test_7_kaksi_reseptia():\n    assert len(tuo_reseptit('kaksi.txt')) == 2\n\n# Testi 8: tuonti tiedostosta kuva.png -> virhe ValueError, jonka viesti on \"Tiedosto ei ole reseptitiedosto.\"\ndef test_8_kuva():\n    with pytest.raises(ValueError, match=\"Tiedosto ei ole reseptitiedosto.\"):\n        tuo_reseptit('kuva.png')",
          eiRiita: "# testaa tuonti\nKommentista puuttuvat syöte ja odotettu tulos. Silloin täydennys arvaa ne, eikä testi tarkista sinun tulostasi.",
          apu: {
            otsikko: "SVG:n lukeminen turvallisesti",
            tree: "Avaa-painike → QFileDialog.getOpenFileName()   vain .svg\n  → SVG.parse(polku)        svgelements lukee datana, ei suorita mitään\n  → polkujen pisteet        y-arvot käännetään: −y\n  → viivat PyVistaan        yksi viiva per polku",
            actions: [
              "Avaa tiedosto Qt:n tiedostoikkunalla: `QFileDialog.getOpenFileName(self, \"Avaa SVG\", \"\", \"SVG (*.svg)\")`.",
              "Lue SVG svgelementsillä: `SVG.parse(polku)`. Käy läpi `svg.elements()` ja ota talteen `Path`-elementit.",
              "svgelements lukee SVG:n datana. Se ei suorita `<script>`-elementtiä. Tämä on testin 4 syy.",
              "SVG:n y-akseli kasvaa alaspäin, 3D-näkymän ylöspäin. Käännä y-arvot: `-y`.",
              "Tee polun pisteistä viiva: `pyvista.lines_from_points(pisteet)`. Piirrä viiva näkymään: `plotter.add_mesh(viiva)`.",
              "Tarkista tiedoston pääte ja sisältö ennen lukemista. Jos tiedosto ei ole SVG, tuontifunktio nostaa virheen `ValueError`, ja ikkuna näyttää sen viestin käyttäjälle (testi 5)."
            ],
            vinkit: [
              "Tekoälyn käytön tähän korttiin kirjaat [[tiedosto:ai-loki|AI-lokiin]] yhdellä merkinnällä työsyklin askeleessa 6, et heti."
            ],
            links: [
              ["svgelements", "https://github.com/meerk40t/svgelements"],
              ["Qt for Python: QFileDialog", "https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QFileDialog.html"],
              ["PyVista: lines_from_points", "https://docs.pyvista.org/api/utilities/_autosummary/pyvista.lines_from_points.html"]
            ]
          },
          sanat: ["täydennys"]
        },
        "43-8": {
          perii: ["43-4"],
          tyosykli: true,
          miksi: "Testit ja tarkistus näyttävät, että tuonti toimii myös haitallisella ja väärällä tiedostolla.",
          osat: [
            { otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen.", naet: "Työsykli aukeaa. Askel 4 Tarkista on auki. Jos auki on muu askel, valitse askelpalkista 4 Tarkista." },
            { otsikko: "Tarkista testit 3–5 (askel 4)", missa: "Työsykli, askel 4 Tarkista, VS Code ja GitHub", tee: "Tee askeleen 4 ohjeet testitiedostolla tests/test_tuonti.py. Kirjaa testit 3, 4 ja 5 kortin issueen, jokainen omaksi kommentikseen.", naet: "Pytest näyttää rivit test_3_kolme_polkua, test_4_haitallinen_svg ja test_5_ei_svg, ja jokaisella lukee PASSED. Issuessa on kolme testikommenttia, ja kohta 4 on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Käy tarkistuslista läpi", missa: "Tämän työvaiheen lopussa kohta Tuonnin tarkistus · VS Code", tee: "Avaa kohta Tuonnin tarkistus ja käy tarkistuslistan viisi riviä läpi kohdan Hyvä tietää ohjeilla. Merkitse paperille rivit, jotka eivät täyttyneet.", naet: "Tiedät jokaisesta viidestä rivistä, täyttyikö se. Rivin 1 tarkistat seuraavassa osatehtävässä. Et tarvitse listan Kopioi-painiketta: kirjaat tuloksen issueen osatehtävässä Kirjaa tarkistus issueen." },
            { otsikko: "Tee tarkistustesti", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse Avaa ja avaa kansiosta testiaineisto ensin oma-piirros.svg ja sitten haitallinen.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Molemmat tiedostot avautuvat, eikä sovellus kaadu. Ensin näkyvät tiedoston oma-piirros.svg polut ja sitten tiedoston haitallinen.svg kolmio. Jos ensimmäisen piirroksen polut jäävät näkyviin kolmion rinnalle, sekin on oikein. Avaa-ikkunassa ei näy tiedostoa ei-svg.txt, koska ikkuna näyttää vain .svg-tiedostot. Testi 5 tarkisti väärän tiedoston pytestillä.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Kirjaa tarkistus issueen", missa: "Vektoripaja ja selain, tuonnin kortin issue", tee: "Sulje sovellus sulkupainikkeesta ja kopioi kommentin pohja. Avaa [[github:issues|issue-listalta]] tuonnin kortin issue, liitä pohja kommenttikenttään, täytä se ja valitse Comment.", naet: "Tuonnin kortin issuessa on kommentti tarkistuslistasta ja tarkistustestistä. Jos jokin rivi ei täyttynyt, korjaat sen seuraavassa osatehtävässä.", koodi: "Tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ___ (tai: kaikki täyttyivät)\nTarkistustesti: oma-piirros.svg ___ · haitallinen.svg ___ · ei-svg.txt Avaa-ikkunassa ___", koodiOtsikko: "Kommentin pohja: kopioi ja täytä" },
            { otsikko: "Korjaa rivi, joka ei täyttynyt", missa: "Copilot selaimessa (sama keskustelu), VS Code ja tuonnin kortin issue", tee: "Jos kaikki rivit täyttyivät, rastita tämä osatehtävä ja jatka seuraavasta osatehtävästä. Muuten lähetä korjauspyyntö Copilotille, korvaa tiedoston sisältö vastauksella ([[ohje:korvaa-tiedosto]]) ja tee osatehtävät 2–5 uudelleen.", naet: "Korjattu tiedosto on tallennettu, ja issuessa ovat uudet testikommentit ja uusi tarkistuksen kommentti. Askeleen 4 saat auki työsyklin askelpalkista valitsemalla 4 Tarkista. Jos sama rivi ei täyty toisella yrityksellä, luo havaintoissue. Ohje: [[ohje:havaintoissue]].", koodi: "Tuonnin tarkistuslistan rivi ___ ei täyttynyt tiedostossa ___. Mitä puuttuu: ___\nKorjaa vain tämä kohta. Älä muuta testejä. Anna koko korjattu tiedosto yhtenä koodilohkona.", koodiOtsikko: "Korjauspyyntö: kopioi ja täytä" },
            { otsikko: "Raportoi tuonnin kortti (askel 5)", missa: "Työsykli, askel 5 Raportoi, Copilot ja VS Code", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 5. Tee askeleen 5 ohjeet: kirjoita issuen numero paperiltasi, Kaista-riville Tiedosto ja testien tuloksiin testit 3, 4 ja 5.", naet: "Tiedosto PROJEKTIN-TILA.md on päivitetty ja tallennettu. Et tee Copilotin ehdottamaa seuraavaa korttia tällä viikolla, koska viikon muissa työvaiheissa ei ole työsykliä. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Kirjaa tuonnin kortti (askel 6)", missa: "Työsykli, askel 6 Kirjaa, VS Code ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 6. Tee askeleen 6 ohjeet ja kirjoita [[tiedosto:ai-loki|AI-lokin]] merkinnän otsikkoriville Copilot ja GitHub Copilot sekä Täydennys- ja Tiedosto-kaista.", naet: "Changes-listassa olivat kortin tiedostot vektoripaja/tuonti.py ja vektoripaja/ikkuna.py sekä tests/test_tuonti.py, PROJEKTIN-TILA.md ja [[tiedosto:ai-loki|ai-loki.md]]. GitHubin commit-listassa ylimpänä on commit-viestisi, ja kortin issue on suljettu. Valitse lopuksi Tein tämän · kierros valmis ja Palaa työvaiheeseen." }
          ],
          valmis: "Testit 3–5 menevät läpi, testien ja tarkistuksen tulokset ovat issuessa, ja tuonnin kortin issue on suljettu.",
          tallenna: "Tuonnin koodi ja testit GitHubiin. Testien 3–5 tulokset ja tarkistuksen kommentti tuonnin kortin issueen.",
          apu: {
            otsikko: "Tuonnin tarkistus",
            vinkit: [
              "Rivi 1: tarkistat sen tarkistustestissä. Avaa-ikkunassa näkyvät vain .svg-tiedostot.",
              "Rivi 2: avaa vektoripaja/tuonti.py, paina Ctrl+F ja kirjoita SVG.parse. Osuma tarkoittaa, että SVG luetaan svgelementsillä.",
              "Rivi 3: hae tiedostoista vektoripaja/tuonti.py ja vektoripaja/ikkuna.py Ctrl+F:llä kohtaa, jossa y-arvon edessä on miinusmerkki, esimerkiksi `-y`, `-piste.y` tai `-p[1]`. Myös y-arvon kertominen luvulla -1 kelpaa. Jos et löydä kohtaa, kysy Copilotilta samassa keskustelussa: Missä kohdassa koodi kääntää y-arvot? Rivi täyttyy, kun näet kohdan tiedostossa.",
              "Rivi 4: testi 5 meni askeleessa 4 läpi, joten väärä tiedosto antaa virheilmoituksen.",
              "Rivi 5: tiedostossa tests/test_tuonti.py on kolme riviä, jotka alkavat tekstillä def test_.",
              "Et tarvitse listan Kopioi-painiketta. Kirjaat tuloksen tuonnin kortin issueen osatehtävässä Kirjaa tarkistus issueen.",
              "Tekoälyn käytön tähän korttiin kirjaat [[tiedosto:ai-loki|AI-lokiin]] yhdellä merkinnällä työsyklin askeleessa 6, et heti."
            ],
            code: "TUONNIN TARKISTUSLISTA\n[ ] tiedostoikkuna näyttää vain .svg-tiedostot\n[ ] SVG luetaan svgelementsillä, ei omalla tekstinkäsittelyllä\n[ ] y-arvot käännetään\n[ ] muu tiedosto antaa selkeän virheilmoituksen\n[ ] testit 3–5 ovat testitiedostossa omina funktioinaan",
            test: "Avaa sovelluksessa oma-piirros.svg ja haitallinen.svg. Katso, näkyykö ei-svg.txt Avaa-ikkunassa. Kirjaa jokaisen tulos kortin issueen."
          },
          sanat: []
        },
        "43-9": {
          perii: ["43-5"],
          miksi: "Kokeilet kirjaston rajoitteet omalla tiedostolla, ennen kuin kirjaat ne.",
          osat: [
            { otsikko: "Avaa oma piirros", missa: "Inkscape, File-valikko", tee: "Valitse Inkscapessa File, Open Recent ja oma-piirros.svg.", naet: "Inkscapen otsikkorivillä lukee oma-piirros.svg. Jos tiedosto ei ole listassa, valitse File ja Open ja avaa se kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]]." },
            { otsikko: "Kopioi kansion polku", missa: "VS Code, Explorer", tee: "Napsauta kansiota testiaineisto hiiren oikealla painikkeella. Valitse Copy Path.", naet: "Valikko sulkeutuu. Kansion polku on nyt leikepöydällä. Näet polun, kun liität sen seuraavassa osatehtävässä." },
            { otsikko: "Tallenna kopio nimellä rajoitteet.svg", missa: "Inkscape, File-valikko ja tallennusikkuna", tee: "Palaa Inkscapeen ja valitse File ja sitten Save As. Poista kentän Tiedostonimi teksti, paina Ctrl+V, kirjoita perään \\rajoitteet.svg ja valitse Tallenna.", naet: "Inkscapen otsikkorivillä lukee rajoitteet.svg. VS Coden Explorerissa tiedosto on kansiossa testiaineisto. Tiedosto oma-piirros.svg on ennallaan, joten testi 3 toimii yhä." },
            { otsikko: "Lisää suorakulmio", missa: "Inkscape, piirtoalue", tee: "Napsauta piirtoalueen tyhjää kohtaa ja paina R. Vedä hiirellä piirtoalueelle suorakulmio.", naet: "Piirroksessa on suorakulmio. Layers and Objects -paneelissa on uusi rivi, jonka nimi alkaa sanalla rect." },
            { otsikko: "Lisää teksti ja tallenna", missa: "Inkscape, piirtoalue", tee: "Paina T, napsauta piirtoaluetta ja kirjoita jokin sana. Paina Esc ja sitten Ctrl+S.", naet: "Piirroksessa on teksti, ja paneelissa on rivi, jonka nimi alkaa sanalla text. Tiedosto on tallennettu. Suorakulmio ja teksti eivät ole polkuja: SVG:ssä ne ovat elementit rect ja text, ja tuonti ottaa vain polut." },
            { otsikko: "Kokeile tiedostoa Vektoripajassa", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse sovelluksessa Avaa ja avaa kansiosta testiaineisto tiedosto rajoitteet.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Sovellus näyttää piirroksen polut. Näet, näkyvätkö suorakulmio ja teksti samoin kuin Inkscapessa.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Merkitse havainnot ja sulje sovellus", missa: "Paperi ja Vektoripaja", tee: "Merkitse paperille, näkyikö suorakulmio ja näkyikö teksti samoin kuin Inkscapessa. Sulje sitten Vektoripajan ikkuna sulkupainikkeesta.", naet: "Paperilla on kaksi havaintoa. Sinun ei tarvitse selvittää syytä: kirjaat sen, mitä näit. Terminaalin rivi alkaa taas (.venv), joten terminaali on vapaa." }
          ],
          valmis: "Tiedosto rajoitteet.svg on kansiossa testiaineisto, ja olet kokeillut sen Vektoripajassa. Paperilla on havainnot suorakulmiosta ja tekstistä.",
          tallenna: "Kokeilutiedosto testiaineisto/rajoitteet.svg menee GitHubiin työvaiheessa Kirjaa SVG-kirjaston rajoitteet. Havainnot ovat paperilla.",
          sanat: []
        },
        "43-5": {
          versio: "2026-10-05",
          miksi: "Kirjaston rajoitteet pitää tuntea ennen 3D-muotojen toteutusta.",
          osat: [
            { vanha: 0, otsikko: "Avaa kirjastojen rajoitteet", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:kirjastot|project-docs/kirjastot.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedostossa on otsikko ### Rajoite 1 ja neljä riviä: Kirjasto, Mitä kokeilin, Mitä tapahtui ja Mitä teen." },
            { vanha: 0, otsikko: "Kirjoita rajoite 1", missa: "Tiedosto [[tiedosto:kirjastot|kirjastot.md]], otsikko ### Rajoite 1", tee: "Vie kursori kunkin rivin loppuun painamalla End ja kirjoita kaksoispisteen jälkeen: Kirjasto-riville svgelements, Mitä kokeilin -riville suorakulmio tiedostossa rajoitteet.svg ja Mitä tapahtui -riville havainto paperiltasi. Kirjoita Mitä teen -riville, miten käyttäjä tai tuonti selviää rajoitteesta.", naet: "Kaikilla neljällä rivillä on oma tekstisi. Kirjasto on svgelements, koska svgelements lukee piirroksen ja antaa suorakulmion tuonnille omana elementtinään (rect), ei polkuna. Mitä teen -rivillä voi lukea esimerkiksi: Käyttöohje neuvoo muuttamaan muodon poluksi Inkscapessa valinnalla Path ja Object to Path. Et tee koodimuutosta tällä viikolla: jos ratkaisusi on koodimuutos, lisää rivin loppuun sanat oma kortti myöhemmin. Jos suorakulmio näkyi samoin kuin Inkscapessa, Mitä tapahtui -rivillä lukee näkyi samoin ja Mitä teen -rivillä ei muutoksia." },
            { vanha: 0, otsikko: "Kirjoita rajoite 2", missa: "Tiedosto [[tiedosto:kirjastot|kirjastot.md]], tiedoston loppu", tee: "Kopioi rajoitteen 2 pohja, paina tiedostossa Ctrl+End ja Enter ja liitä pohja. Kirjoita Mitä tapahtui -riville tekstin havainto paperiltasi ja Mitä teen -riville ratkaisu.", naet: "Tiedostossa on kaksi rajoitetta, ja molemmissa on kaikki neljä riviä täytettyinä. Teksti on svgelementsille oma elementtinsä (text), ei polku. Jos ratkaisu on koodimuutos, rivin lopussa ovat samat sanat kuin rajoitteessa 1: oma kortti myöhemmin. Jos teksti näkyi samoin kuin Inkscapessa, Mitä tapahtui -rivillä lukee näkyi samoin ja Mitä teen -rivillä ei muutoksia.", koodi: "### Rajoite 2\n- Kirjasto: svgelements\n- Mitä kokeilin: teksti tiedostossa rajoitteet.svg\n- Mitä tapahtui: \n- Mitä teen: ", koodiOtsikko: "Rajoitteen 2 pohja: kopioi tämä" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa ovat [[tiedosto:kirjastot|kirjastot.md]] ja testiaineisto/rajoitteet.svg.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedostojen [[tiedosto:kirjastot|kirjastot.md]] ja rajoitteet.svg muutokset.", koodi: "Kirjaa svgelementsin rajoitteet", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Kaksi itse kokeiltua rajoitetta on kirjattu, ja ne ovat GitHubissa.",
          tallenna: "Rajoitteet tiedostossa [[tiedosto:kirjastot|kirjastot.md]] ja kokeilutiedosto testiaineisto/rajoitteet.svg GitHubissa.",
          esimerkki: "Toisen projektin rajoite:\n### Rajoite 1\n- Kirjasto: csv\n- Mitä kokeilin: Luin Reseptikirjan tiedoston reseptit.csv, jossa sarakkeet on erotettu puolipisteellä.\n- Mitä tapahtui: Jokainen rivi tuli yhtenä kenttänä, koska csv olettaa erottimeksi pilkun.\n- Mitä teen: Annan erottimen itse: delimiter=';'.",
          eiRiita: "\"svgelementsillä on rajoitteita.\" Mitään ei ole kokeiltu omalla tiedostolla.",
          sanat: []
        },
        "43-6": {
          perii: ["43-5"],
          miksi: "Julkaisu tuo viikon version asiakkaiden kokeiltavaksi.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi ja dokumentit ovat GitHubissa." },
            { otsikko: "Tee tagi v0.0.43", missa: "VS Code, terminaali", tee: "Jos Vektoripajan ikkuna on auki, sulje se sulkupainikkeesta. Aja sitten komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.0.43", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.43 -> v0.0.43. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.0.43", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.0.43 on vihreä. Viikon versio on [[github:releases|Releases-sivulla]], ja asiakkaat voivat kokeilla sitä." }
          ],
          valmis: "Release v0.0.43 on GitHubissa, ja Actions-ajo on vihreä.",
          tallenna: "Release v0.0.43 GitHubiin.",
          sanat: []
        }
      },
      kuvaohjeet: ["inkscape-layerit"],
      sykli: {
        lisa: {
          1: "Viikolla 43 täytät rivit ehdotus, Kaista, Rajapinta, kolme Testi-riviä ja Lisäksi. Työvaiheen Rakenna SVG-tuonti osatehtävä Suunnittele tuonnin kortti kertoo, mitä kirjoitat riveille.",
          2: "Tarkista tuonnin kortista nämä: kohdan ## Tavoite lopussa on rajapinta paperiltasi, kaista on Tiedosto, Tiedostot-kohdassa ovat vektoripaja/tuonti.py ja vektoripaja/ikkuna.py, Älä tee -kohdassa on tests/test_tuonti.py, ja testeissä 3–5 ovat omat odotetut tuloksesi. Jos jokin on väärin, korjaa se issuen kuvaukseen ja kirjoita tarkistusriville, mitä muutit. Tuonnin kortti on viikon ensimmäinen kortti, joten kirjoita issueen kommentti Sovittu viikkopalaverissa. Kirjoita kommentin pohjassa pp.kk. tilalle palaverin päivä ja ___ tilalle palaverissa sovittu dokumentointitapa paperiltasi. Jos ohjaajan vastausta ei vielä ole, kirjoita kommentti, kun vastaus tulee.",
          3: "Tällä viikolla kirjoitat testin ensimmäisen kerran Täydennys-kaistalla. Se tarkoittaa, että kirjoitat kommentin ja hyväksyt GitHub Copilotin täydennyksen. Ohje: [[ohje:taydennys]]. Testitiedosto on tests/test_tuonti.py, ja kommenttien mallit ovat työvaiheen Rakenna SVG-tuonti osatehtävissä. Teet toteutuksen Tiedosto-kaistalla: pyydä ensin vektoripaja/tuonti.py ja sitten vektoripaja/ikkuna.py. Kirjoita pohjan Tiedosto-riville polku sulkeiden tilalle. Tiedosto tuonti.py on uusi, joten kirjoita sen pyynnössä kohtaan Tiedoston nykyinen sisältö sanat uusi tiedosto. Tiedosto ikkuna.py on jo olemassa: liitä sen pyynnössä kohtaan Tiedoston nykyinen sisältö tiedoston koko sisältö ([[ohje:kopioi-tiedosto]]). Lue koodilohko ennen liittämistä: tuonti.py:ssä pitää olla SVG.parse ja ValueError ja ikkuna.py:ssä Avaa-painike.",
          4: "Testitiedosto on tests/test_tuonti.py. Testissä 5 tarkistusrivi alkaa with pytest.raises: kirjoita tämän rivin numero kirjauspohjan riville Mistä odotettu tulos löytyi.",
          5: "Viikolla 43 teet yhden kortin. Kaista-riville tulee Tiedosto. Et tee Copilotin ehdottamaa seuraavaa korttia tällä viikolla.",
          6: "Tällä viikolla lokimerkinnän otsikkorivi on muotoa pp.kk.vvvv · Copilot ja GitHub Copilot, Täydennys- ja Tiedosto-kaista. Changes-listassa ovat vektoripaja/tuonti.py, vektoripaja/ikkuna.py, tests/test_tuonti.py, PROJEKTIN-TILA.md ja [[tiedosto:ai-loki|ai-loki.md]]."
        }
      }
    },
    44: {
      type: "feature",
      feature: "Piirroksen layerit ja ryhmät näkyvät mallin nimettyinä osina.",
      excerpt: "Piirroksen layerit ja ryhmät muuttuvat mallin osiksi niin, että pää pysyy kiinni vartalossa, kun vartaloa siirretään.",
      connection: "Piirroksen layerit ja ryhmät kertovat, mistä osista malli koostuu ja mitkä osat kuuluvat yhteen. Tällä viikolla säilytät tämän rakenteen Vektoripajassa, jotta käyttäjä voi käsitellä mallia osina. Sama rakenne tarvitaan myöhemmin osien siirtämiseen ja vientiin Blenderiin.",
      deliverable: "Muunnoksen rajapinta ja testit 6–8 · muunnos puhtaana funktiona · maailmamuunnos ja sen lisätesti · hierarkiapaneeli · valinnan toiminta suunnitelmassa · revolven valintatapojen vertailu · viikon release.",
      why: "Ilman solmupuuta osat eivät seuraa toisiaan. Silloin pää jää paikalleen, kun vartaloa siirretään, eikä .obj-tiedostoon synny osia.",
      done: "Oman tiedostosi kolme sisäkkäistä ryhmää näkyvät paneelissa sisennettyinä: layer Vartalo ja sen sisällä ryhmät Pää ja Korvat. Testit 6–8 ja maailmamuunnoksen lisätesti menevät läpi. Tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] on valinnan toiminta perusteluineen.",
      record: "Viikon funktio selityspohjalla: funktio on tiedostossa vektoripaja/hierarkia.py rivillä, joka alkaa sanalla def ja funktion nimellä. Kirjoita selityspohjan Testi-rivi jokaisesta testistä 6, 7 ja 8. Lisäksi valinnan toiminnan perustelu, hierarkian kortin issuen numero, releasen v0.0.44 osoite ja nämä näyttömatriisin vaatimukset: testaa ohjelman toimintoja, käyttää rakenteista ohjelmointia toteutuksissa, [[naytto|tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia]], sopii tehtävistä tiimin muiden jäsenten kanssa, etsii ratkaisuvaihtoehtoja ja ratkoo ongelmia yhdessä tiimin kanssa, jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi, kehittää ohjelmiston toimintalogiikkaa, käyttää versionhallintaa, julkaisee ohjelman tuotantoympäristöön sekä suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen.",
      funktio: "hierarkian muunnos tiedostossa vektoripaja/hierarkia.py, joka tekee SVG:n ryhmästä solmun (testit 6–8)",
      skills: ["Puun läpikäynti: rekursio tai silmukka", "Puhdas funktio ja rajapinta", "Käyttöliittymän osa kirjattujen päätösten mukaan", "Agentti-kaista: agenttitila"],
      termit: ["solmupuu", "maailmamuunnos", "hierarkiapaneeli", "puhdas funktio", "rajapinta"],
      tehtavat: {
        "44-1": {
          versio: "2026-10-05",
          miksi: "Ryhmärakenne ratkaisee, mitkä osat seuraavat toisiaan.",
          osat: [
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä on otsikko ### Rajapinnat (viikot 44, 48 ja 49)." },
            { otsikko: "Päätä funktion nimi", missa: "Paperi tai muistiinpanot", tee: "Viikon funktio tekee SVG:n ryhmästä solmun. Päätä sille nimi ja kirjoita se paperille: pienet kirjaimet, verbi ensin, sanojen välissä alaviiva eikä kirjaimia ä ja ö, esimerkiksi tuo_reseptit.", naet: "Paperilla on funktion nimi. Solmulla on nimi, lapset ja oma muunnos. Oma muunnos on osan siirto, kierto ja koko suhteessa vanhempaan, ja se tallennetaan 4×4-matriisina." },
            { vanha: 0, otsikko: "Kirjoita hierarkian rajapinta", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Rajapinnat (viikot 44, 48 ja 49)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen funktion nimi, syöte ja paluuarvo: syöte on SVG:n ryhmä, paluuarvo solmu, jolla on nimi, lapset ja oma muunnos.", naet: "Otsikon jälkeen on rivi, jossa on funktion nimi, syöte ja paluuarvo. Nämä kolme asiaa ovat funktion rajapinta.", koodi: "### Rajapinnat (viikot 44, 48 ja 49)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa hierarkian rajapinta", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Katso piirroksen ryhmät", missa: "Inkscape, Layers and Objects -paneeli", tee: "Avaa Inkscapessa tiedosto testiaineisto/oma-piirros.svg valitsemalla File ja Open Recent. Valitse sitten Layer ja Layers and Objects.", naet: "Paneelissa näkyvät viikolla 43 tekemäsi layer Vartalo ja sen sisällä sisäkkäiset ryhmät Pää ja Korvat. Jos ryhmät eivät näy, napsauta nimen Vartalo vasemmalla puolella olevaa nuolta ja sitten nimen Pää nuolta. Jos tiedosto ei ole Open Recent -listassa, valitse File ja Open ja avaa se kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]]. [[kuvaohje:inkscape-layerit|Katso kuvaohje]]." },
            { vanha: 1, otsikko: "Päätä testin 6 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testin 6 syöte on layer Vartalo ryhmineen Pää ja Korvat tiedostosta testiaineisto/oma-piirros.svg. Piirrä paperille solmupuu, jonka funktio palauttaa. Kirjoita puu myös riviksi: vanhempi > lapsi > lapsenlapsi.", naet: "Paperilla on puu. Jokaisesta layerista ja ryhmästä tulee solmu, poluista ei. Puussa näkyvät solmujen nimet ja se, mikä solmu on minkäkin lapsi. Rivimuodossa vanhempi on ensin ja sen lapsi merkin > jälkeen." },
            { vanha: 1, otsikko: "Päätä testin 7 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testin 7 syöte on tyhjä ryhmä, jonka nimi on Tyhjä: ryhmässä ei ole polkuja eikä muita ryhmiä. Kirjoita paperille, mitä funktio palauttaa tälle ryhmälle.", naet: "Paperilla on tulos, jonka testi voi tarkistaa, esimerkiksi solmun nimi ja lasten määrä." },
            { vanha: 1, otsikko: "Päätä testin 8 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testin 8 syöte on nimetön ryhmä: ryhmällä ei ole nimeä, ja sen id on g1. Tässä projektissa nimetön ryhmä saa nimekseen id:n, joten kirjoita paperille solmun nimi.", naet: "Paperilla on solmun nimi. Inkscapen Layers and Objects -paneeli näyttää nimettömän ryhmän id:n, esimerkiksi g42. Kirjoitat testien 6–8 tulokset korttiin työvaiheessa 2 ja testeihin työvaiheessa 3." }
          ],
          valmis: "Rajapinta on GitHubissa, ja testien 6–8 odotetut tulokset on päätetty ennen toteutusta.",
          tallenna: "Rajapinta tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa. Testien odotetut tulokset hierarkian korttiin työvaiheessa 2 ja testeihin työvaiheessa 3.",
          esimerkki: "Reseptikirjan rajapinta: \"hae(reseptit, sana) saa listan reseptejä ja hakusanan. Se palauttaa uuden listan resepteistä, joiden nimessä hakusana on.\" Testin odotettu tulos: \"Kun hakusana on tyhjä, hae palauttaa kaikki reseptit.\"",
          eiRiita: "\"Funktio muuntaa SVG:n hierarkiaksi.\" Syöte ja paluuarvo puuttuvat, eikä testeillä ole odotettuja tuloksia.",
          sanat: ["rajapinta", "solmupuu"]
        },
        "44-2": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Kortti kertoo agentille, mitä agentti tekee, ja testit kertovat, milloin hierarkia on valmis. Tarvitset paperin, jolla ovat funktion nimi ja testien 6–8 tulokset.",
          osat: [
            { vanha: 2, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Jos auki on muu askel, valitse askelpalkista 1 Suunnittele." },
            { vanha: 0, otsikko: "Liitä viestipohja Copilotiin", missa: "Työsykli, askel 1 Suunnittele, ja Copilot selaimessa", tee: "Tee askeleen 1 ohjeet siihen asti, kun viestipohja on Copilotin viestikentässä. Älä vielä täytä tai lähetä viestiä.", naet: "Viestipohja on Copilotin viestikentässä, ja siinä on ___-kohtia. Pidä Copilotin välilehti auki. Valitse työsyklissä Palaa työvaiheeseen, niin näet täytettävät tiedot." },
            { vanha: 0, otsikko: "Täytä ehdotus, kaista ja rajapinta", missa: "Copilot selaimessa, viestipohjan rivit Minun ehdotukseni kortiksi, Kaista ja Rajapinta", tee: "Maalaa ___ ja kirjoita tilalle: ehdotukseen \"osien hierarkian ja hierarkiapaneelin\" ja Kaista-riville \"Agentti, koska kortti muuttaa useaa tiedostoa\". Rajapinta-rivin ___-kohtiin tulevat paperin funktion nimi, \"SVG:n ryhmän\" ja \"solmun, jolla on nimi, lapset ja oma muunnos\".", naet: "Lainausmerkit eivät tule viestiin. Rajapinta-rivillä lukee esimerkiksi: funktio (nimi paperilta) saa SVG:n ryhmän ja palauttaa solmun, jolla on nimi, lapset ja oma muunnos. Rajapinta-rivin tiedot ovat samat kuin tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] otsikon ### Rajapinnat (viikot 44, 48 ja 49) jälkeen." },
            { vanha: 0, otsikko: "Täytä testit 6, 7 ja 8", missa: "Copilot selaimessa, viestipohjan kolme Testi-riviä", tee: "Täytä Testi-rivien ensimmäinen ___-kohta numeroilla 6, 7 ja 8, toinen syötteillä ja kolmas paperin tuloksilla. Kirjoita testin 6 tulos puuna muodossa vanhempi > lapsi > lapsenlapsi.", naet: "Syötteet ovat: testi 6 layer Vartalo tiedostosta testiaineisto/oma-piirros.svg, testi 7 tyhjä ryhmä, jonka nimi on Tyhjä, ja testi 8 ryhmä, jolla ei ole nimeä ja jonka id on g1. Tulokset ovat omat tuloksesi paperilta." },
            { vanha: 0, otsikko: "Liitä Lisäksi-rivin teksti ja lähetä", missa: "Tämä osatehtävä ja Copilot selaimessa", tee: "Kopioi teksti. Maalaa Copilotissa Lisäksi-rivin ___, paina Ctrl+V ja lähetä viesti painamalla Enter.", naet: "Copilot on kirjoittanut kortin, jossa on kuusi otsikkoa sekä osiot Oma tarkistus ja Sykli. Kaista on Agentti, ja kortissa ovat testit 6–8 ja lisätesti sinun tuloksinasi. Avaa työsykli työvaiheen painikkeesta. Valitse Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Lisätesti: kun vanhempaa ei ole siirretty, kierretty eikä skaalattu, lapsen maailmamuunnos on sama kuin sen oma muunnos. Vaatimus: maailmamuunnos on oma puhdas funktio maailmamuunnos ilman Qt:ta eli se ei käytä PySide6:ta. Molemmat funktiot ovat tiedostossa vektoripaja/hierarkia.py. Hierarkiapaneeli näyttää solmupuun.", koodiOtsikko: "Lisäksi-rivin teksti: kopioi tämä" },
            { vanha: 2, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä, ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2: tee sen ohjeet ([[ohje:issue]]).", naet: "Hierarkian kortin issue on GitHubissa, ja otsikon perässä on issuen numero. Hierarkian kortti on viikon ensimmäinen kortti, joten kirjoitit issueen askeleen 2 kommentin Sovittu viikkopalaverissa pp.kk.: ___. Jos palaveri ei ole vielä ollut, kirjoita kommentti samaan issueen palaverin jälkeen. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." }
          ],
          valmis: "Hierarkian kortin issue on GitHubissa, ja siinä ovat testit 6–8 ja lisätesti sinun odotetuilla tuloksillasi.",
          tallenna: "Kortti ja Sovittu viikkopalaverissa -kommentti hierarkian kortin issuessa GitHubissa.",
          sanat: []
        },
        "44-6": {
          perii: ["44-2"],
          tyosykli: true,
          miksi: "Käytät hierarkiaa myöhemmin osien siirtämisessä ja viennissä.",
          osat: [
            { otsikko: "Avaa työsykli askeleeseen 3", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen.", naet: "Työsykli aukeaa. Askel 3 Rakenna on auki. Jos auki on muu askel, valitse askelpalkista 3 Rakenna." },
            { otsikko: "Luo testitiedosto", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, Explorer", tee: "Kopioi testipohja. Napsauta kansiota tests hiiren oikealla painikkeella, valitse New File, kirjoita nimeksi vain test_hierarkia.py ja liitä pohja. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedosto tests/test_hierarkia.py on auki. Ensimmäisellä rivillä on import-rivi, ja sen jälkeen ovat testien 6, 7 ja 8 sekä lisätestin kommentit ja def-rivit. Askeleen 3a import-, kommentti- ja def-rivit ovat nyt valmiina, joten et kirjoita niitä uudelleen.", koodi: "from vektoripaja.hierarkia import ___, maailmamuunnos\n\n\n# Testi 6: ___(layer Vartalo tiedostosta testiaineisto/oma-piirros.svg) -> ___\ndef test_6_kolme_ryhmaa():\n\n\n# Testi 7: ___(tyhjä ryhmä, jonka nimi on Tyhjä ja jossa ei ole polkuja eikä ryhmiä) -> ___\ndef test_7_tyhja_ryhma():\n\n\n# Testi 8: ___(ryhmä, jolla ei ole nimeä ja jonka id on g1) -> ___\ndef test_8_nimeton_ryhma():\n\n\n# Lisätesti: maailmamuunnos, kun vanhempaa ei ole siirretty, kierretty eikä skaalattu -> lapsen maailmamuunnos on sama kuin sen oma muunnos\ndef test_lisatesti_maailmamuunnos():\n", koodiOtsikko: "Testipohja: kopioi tämä" },
            { otsikko: "Kirjoita testit 6–8 ja lisätesti", missa: "Tiedosto tests/test_hierarkia.py", tee: "Kirjoita import-rivin ja kommenttien ensimmäiseen ___-kohtaan paperin funktion nimi ja kommenttien viimeiseen ___-kohtaan paperin tulokset. Paina jokaisen def-rivin lopussa Enter ja hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Jokaisessa testissä on assert-rivi, jossa on oma odotettu tuloksesi. Testin 6 puu on muodossa vanhempi > lapsi > lapsenlapsi. Lisätesti tarkistaa maailmamuunnoksen: osan lopullinen paikka on vanhemman maailmamuunnos kertaa osan oma muunnos. Rastita issuessa kohta 3a." },
            { otsikko: "Toteuta kortti Agentti-kaistalla", missa: "Työsykli, askel 3 Rakenna, kohta 3b · VS Code, GitHub Copilotin chat", tee: "Tee askeleen 3 Agentti-kaistan ohjeet ja askeleen viimeinen kohta: liitä vain kortin Tiedostot-kohdan tiedostot, jotka jo ovat olemassa. Lue jokainen muutos ja valitse Keep tai Undo: [[kuvaohje:vscode-hyvaksy-muutos]].", naet: "Agentti-kaista tarkoittaa GitHub Copilotin agenttitilaa: se muokkaa useaa tiedostoa ja kuluttaa krediittejä. Et liitä testitiedostoa, ja agentti luo uuden tiedoston itse. Jos muutos koskee testitiedostoa, valitsit Undo. Rastita issuessa kohta 3b. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Käynnistä sovellus ja avaa piirros", missa: "Työsykli, askel 4 Tarkista · VS Code, terminaali, ja Vektoripaja", tee: "Aja komento. Ohje: [[ohje:komento]]. Valitse Vektoripajassa painike Avaa ja avaa tiedosto oma-piirros.svg kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]].", naet: "Vektoripaja on auki, ja hierarkiapaneelissa näkyy piirroksesi solmupuu. Jätä sovellus auki seuraavaa osatehtävää varten.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tee tarkistustesti ja tarkistuslista", missa: "Vektoripaja ja Inkscape, sitten kortin issue GitHubissa", tee: "Vertaa hierarkiapaneelia Inkscapen Layers and Objects -paneeliin ja käy läpi tämän työvaiheen laatikon Solmupuu ja maailmamuunnos FUNKTION TARKISTUSLISTA. Kirjoita tulokset kortin issueen kommenttina tämän osatehtävän pohjalla ja valitse Comment.", naet: "Hierarkiapaneelin sisennykset ovat samat kuin Inkscapessa. Kommentti näkyy kortin issuessa. Sulje Vektoripaja ikkunan sulkupainikkeesta. Laatikko Solmupuu ja maailmamuunnos on tämän työvaiheen lopussa.", koodi: "Tarkistustesti: hierarkiapaneelin puu on sama kuin Inkscapen Layers and Objects -paneelissa: kyllä / ei\nTarkistuslista käyty. Rivit, jotka eivät täyttyneet: ", koodiOtsikko: "Kommentti issueen: kopioi tämä" },
            { otsikko: "Tee hierarkian kortti loppuun", missa: "Työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4: tee askeleiden 4–6 ohjeet ja valitse jokaisen askeleen lopussa Tein tämän · seuraava askel.", naet: "Askeleessa 4 kirjasit lisätestin samalla pohjalla kuin testit 6–8, ja pohjan Testi-rivillä on numeron tilalla sana lisätesti. Hierarkian kortin issue on suljettu. Testit 6–8 ja lisätesti menevät läpi. Askeleen 6 merkinnän otsikkorivi tiedostossa [[tiedosto:ai-loki|ai-loki.md]] on esimerkiksi ### 28.10.2026 · Copilot ja GitHub Copilot, Agentti-kaista." }
          ],
          valmis: "Kolme sisäkkäistä ryhmää näkyy sisennettynä, ja hierarkian ja maailmamuunnoksen testit menevät läpi.",
          tallenna: "Koodi ja testit GitHubiin. Testien tulokset hierarkian kortin issueen.",
          esimerkki: "Reseptikirjan lisätesti: \"# Lisätesti: kun annosmäärä on 1, skaalaa_resepti palauttaa samat määrät kuin alkuperäisessä reseptissä.\" Kommentissa on syöte ja odotettu tulos, joten täydennys voi kirjoittaa testin.",
          eiRiita: "\"# testaa maailmamuunnos\" Kommentista puuttuvat syöte ja odotettu tulos, joten testi ei tarkista sinun tulostasi.",
          apu: {
            otsikko: "Solmupuu ja maailmamuunnos",
            tree: "<svg>\n  <g inkscape:groupmode=\"layer\" inkscape:label=\"Vartalo\">\n    <path .../>\n    <g inkscape:label=\"Pää\">\n      <g inkscape:label=\"Korvat\"> <path .../> </g>\n    </g>\n  </g>\n</svg>\n\nSolmu(\"Vartalo\", muunnos=4×4, lapset=[\n  Solmu(\"Pää\", lapset=[Solmu(\"Korvat\")])])\n\nmaailmamuunnos(lapsi) = maailmamuunnos(vanhempi) @ lapsi.muunnos",
            actions: [
              "Kohdan Luo tämä rakenne malli näyttää, millaisen solmupuun koodi tekee viikon 43 piirroksestasi. Agentti kirjoittaa koodin askeleessa 3b, ja testit 6–8 tarkistavat sen. Sinun ei tarvitse kirjoittaa mallia itse.",
              "svgelementsissä ryhmä on `Group`. Layerin nimi on sen `values`-sanakirjassa: `ryhma.values.get(\"{http://www.inkscape.org/namespaces/inkscape}label\")`. Jos nimeä ei ole, käytä `ryhma.id`:tä.",
              "Tee oma luokka `Solmu`: nimi, lapset ja oma muunnos. Muunnos on numpyn 4×4-matriisi, aluksi `numpy.eye(4)`.",
              "Käy puu läpi ryhmä kerrallaan. Jokaisesta ryhmästä tulee solmu, ja sen aliryhmistä tulee solmun lapset.",
              "PyVistan kappaleet eivät ole sisäkkäin. Siksi lapsen paikka lasketaan itse: `vanhemman_maailma @ solmu.muunnos`. Merkki `@` on matriisien kertolasku.",
              "VTK:ssa on myös `vtkAssembly`, joka liikuttaa lapsia mukana. Tässä projektissa käytetään omaa funktiota, koska sen voi testata.",
              "Näytä puu Qt:n `QTreeWidget`-paneelissa. Jokaisesta solmusta tulee `QTreeWidgetItem`.",
              "Puhdas funktio ei muuta saamaansa dataa. Se palauttaa uuden solmun."
            ],
            code: "FUNKTION TARKISTUSLISTA\n[ ] rajapinta kirjoitettu korttiin ennen toteutusta\n[ ] ei sivuvaikutuksia: palauttaa uuden solmun\n[ ] tyhjä ryhmä käsitelty (testi 7)\n[ ] nimetön ryhmä saa nimekseen id:n (testi 8)\n[ ] maailmamuunnos on puhdas funktio ilman Qt:ta, ja sillä on lisätesti\n[ ] paneeli näyttää sisennykset oikein",
            test: "Avaa sovelluksessa tiedosto testiaineisto/oma-piirros.svg painikkeella Avaa. Vertaa hierarkiapaneelin puuta Inkscapen Layers and Objects -paneeliin. Niiden pitää olla samat. Kirjaa tulos issueen osatehtävän Tee tarkistustesti ja tarkistuslista pohjalla.",
            links: [
              ["numpy: matriisien kertolasku (@)", "https://numpy.org/doc/stable/reference/generated/numpy.matmul.html"],
              ["Qt for Python: QTreeWidget", "https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QTreeWidget.html"]
            ]
          },
          sanat: ["maailmamuunnos", "puhdas funktio", "hierarkiapaneeli"]
        },
        "44-3": {
          versio: "2026-10-05",
          miksi: "Valintasääntö ratkaisee, muokkaako käyttäjä osaa vai kokonaisuutta.",
          osat: [
            { vanha: 0, otsikko: "Päätä valinnan toiminta", missa: "Paperi tai muistiinpanot", tee: "Päätä, valitaanko lapsi vai koko kappale, kun käyttäjä napsauttaa osaa: esimerkiksi kun hän napsauttaa osaa Korvat, valitaanko Korvat vai koko Vartalo? Kirjoita päätös ja yksi peruste paperille.", naet: "Paperilla on päätös, lapsi tai koko kappale, ja peruste." },
            { vanha: 1, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä on otsikko ### Valinnan toiminta (viikko 44)." },
            { vanha: 1, otsikko: "Kirjoita valinnan toiminta", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Valinnan toiminta (viikko 44)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen päätös ja peruste.", naet: "Otsikon jälkeen on päätös ja peruste. Perusteessa on sana koska.", koodi: "### Valinnan toiminta (viikko 44)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa valinnan toiminta suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Valinnan toiminta ja sen peruste ovat GitHubissa.",
          tallenna: "Valinnan päätös tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan valinta: \"Kun käyttäjä napsauttaa reseptin kuvaa, valitaan koko resepti, koska kuvaa ei muokata erikseen.\"",
          eiRiita: "\"Valitaan lapsi.\" Peruste puuttuu.",
          sanat: []
        },
        "44-4": {
          versio: "2026-10-05",
          miksi: "Ensi viikolla teet revolven eli pyörähdyskappaleen: profiili pyörähtää akselin ympäri. Profiili on kappaleen toisen puolen ääriviiva, esimerkiksi maljakon puolikas. Valintatapa kertoo, miten käyttäjä valitsee profiilin, josta revolve tehdään.",
          osat: [
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä on otsikko ### Revolven valintatapojen vertailu (viikko 44)." },
            { vanha: 0, otsikko: "Kirjoita tapa 1: valinta ja painike", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Revolven valintatapojen vertailu (viikko 44)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Tapa 1 on, että käyttäjä valitsee profiilin sovelluksessa ja napsauttaa painiketta. Kirjoita ohjerivin jälkeen tavan 1 hyvät ja huonot puolet.", naet: "Otsikon jälkeen on tapa 1 ja sen hyvät ja huonot puolet.", koodi: "### Revolven valintatapojen vertailu (viikko 44)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kirjoita tapa 2: nimimerkintä Inkscapessa", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], tavan 1 jälkeen", tee: "Tapa 2 on, että käyttäjä merkitsee profiilin Inkscapessa nimellä, esimerkiksi layerin nimen perässä `[revolve]`. Paina tavan 1 viimeisen rivin lopussa Enter kaksi kertaa ja kirjoita tavan 2 hyvät ja huonot puolet.", naet: "Otsikon jälkeen ovat molemmat tavat hyvine ja huonoine puolineen." },
            { vanha: 0, otsikko: "Kirjoita suositus", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], tavan 2 jälkeen", tee: "Paina tavan 2 viimeisen rivin lopussa Enter kaksi kertaa. Kirjoita, kumpaa tapaa suosittelet ja miksi.", naet: "Vertailun lopussa on suositus ja peruste. Esität suosituksen [[vk 45|viikon 45]] palaverissa." },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjoita revolven valintatapojen vertailu", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Kaksi valintatapaa on vertailtu, ja suositus on valmis palaveriin.",
          tallenna: "Vertailu tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan vertailu: \"Tapa 1, hakupainike: hyvä, koska haku tehdään vasta, kun käyttäjä haluaa. Huono, koska haku vaatii yhden napsautuksen lisää. Tapa 2, haku kirjoittaessa: hyvä, koska tulos näkyy heti. Huono, koska haku voi hidastua, kun reseptejä on paljon. Suosittelen tapaa 2, koska haku on pakollisen ytimen toiminto ja sen pitää tuntua nopealta.\"",
          eiRiita: "\"Tapa 1 on parempi.\" Hyvät ja huonot puolet puuttuvat, eikä suosituksella ole perustetta.",
          sanat: ["revolve"]
        },
        "44-5": {
          perii: ["44-4"],
          miksi: "Julkaisu tuo hierarkiapaneelin asiakkaiden kokeiltavaksi.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi ja dokumentit ovat GitHubissa." },
            { otsikko: "Tee tagi v0.0.44", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.0.44", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.44 -> v0.0.44. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.0.44", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.0.44 on vihreä. Viikon versio on [[github:releases|Releases-sivulla]]." }
          ],
          valmis: "Release v0.0.44 on GitHubissa, ja Actions-ajo on vihreä.",
          tallenna: "Release v0.0.44 GitHubiin.",
          sanat: []
        }
      },
      kuvaohjeet: ["vscode-chat-tilat", "vscode-liita-tiedosto"],
      sykli: {
        lisa: {
          1: "Viikolla 44 liität viestipohjan Copilotiin ja palaat sitten työvaiheeseen 2 painikkeella Palaa työvaiheeseen. Työvaiheen 2 osatehtävät 3–5 kertovat, mitä kirjoitat ___-kohtiin.",
          3: "Viikolla 44 testitiedosto on tests/test_hierarkia.py, ja testipohja on työvaiheen 3 osatehtävässä Luo testitiedosto. Pohjassa ovat jo import-rivi, kommentit ja def-rivit. Kortin kaista on Agentti.",
          5: "Viikolla 44 teet yhden kortin. Et tee Copilotin ehdottamaa seuraavaa korttia tällä viikolla."
        }
      }
    },
    45: {
      type: "feature",
      feature: "Käyttäjä voi tehdä piirretystä puoliprofiilista pyörähdyskappaleen.",
      excerpt: "Puoliprofiilista pitää syntyä pyörähdyskappale, esimerkiksi maljakko, ja viivasta putki, esimerkiksi johto tai sarvi.",
      connection: "Nyt alat tehdä piirroksesta varsinaisia 3D-kappaleita. Revolve pyöräyttää profiilin akselin ympäri, jolloin siitä voi syntyä esimerkiksi maljakko tai pyörä. Segmenttisäädin ja kameran kierto auttavat käyttäjää muotoilemaan ja tarkastelemaan kappaletta, joka syntyy tästä ensimmäisestä mallinnustoiminnosta.",
      deliverable: "Sovittu valintatapa suunnitelmassa · oma hyväksymiskriteeri profiilille · testit 9–11 · revolve, segmenttisäädin ja orbit · viikon release.",
      why: "Revolve on pakollisen ytimen ensimmäinen oikea 3D-muoto. Ilman sitä maljakkoa, pyörää tai kupolia ei synny.",
      done: "Oma profiilisi pyörähtää kappaleeksi, segmenttisäädin muuttaa segmenttien määrää välillä 3–32, ja testit 9–11 menevät läpi.",
      record: "Viikon funktio selityspohjalla: funktio on tiedostossa vektoripaja/revolve.py rivillä, joka alkaa sanalla def ja funktion nimellä. Kirjoita selityspohjan Testi-rivi testeistä 9 ja 11. Lisäksi sovittu valintatapa ja oma hyväksymiskriteeri akselin väärälle puolelle, pyörähdyskappaleen ja segmenttisäätimen korttien issuenumerot, releasen v0.0.45 osoite ja nämä näyttömatriisin vaatimukset: testaa ohjelman toimintoja, [[naytto|tulkitsee suunnitelmia ja toteuttaa ohjelmiston toimintoja]], sopii tehtävistä tiimin muiden jäsenten kanssa, etsii ratkaisuvaihtoehtoja ja ratkoo ongelmia yhdessä tiimin kanssa, jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi, kehittää ohjelmiston toimintalogiikkaa, käyttää versionhallintaa, julkaisee ohjelman tuotantoympäristöön, käyttää ohjelmistokomponenttikirjaston tärkeimpiä toimintoja ja työkaluja sekä suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen.",
      funktio: "profiilin pisteiden muunnos revolvelle tiedostossa vektoripaja/revolve.py (testit 9 ja 11)",
      skills: ["Ratkaisuvaihtoehdot yhdessä tiimin kanssa", "Toimintalogiikka: profiili kappaleeksi", "Komponenttikirjaston geometria", "Rajatapausten testaus"],
      termit: ["revolve", "orbit", "kysymystila"],
      tehtavat: {
        "45-1": {
          versio: "2026-10-05",
          miksi: "Sovit geometrian rajatapaukset ennen koodin tekemistä.",
          osat: [
            { vanha: 0, otsikko: "Sovi valintatapa palaverissa", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Esitä revolven valintatapojen vertailu ja suosituksesi. Sovi valintatapa ohjaajan kanssa ja kirjoita valintatapa ja palaverin päivä paperille.", naet: "Paperilla on sovittu valintatapa ja palaverin päivä. Jos palaveri on vasta myöhemmin tällä viikolla, tee ennen palaveria työvaiheen 2 osatehtävät 1–3 eli piirrä ja tallenna profiili. Palaa tähän osatehtävään palaverissa." },
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä ovat otsikot ### Revolven valintatapa (viikko 45) ja ### Profiili akselin väärällä puolella (viikko 45)." },
            { vanha: 0, otsikko: "Kirjoita sovittu valintatapa", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Revolven valintatapa (viikko 45)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen palaverissa sovittu tapa ja palaverin päivä.", naet: "Otsikon jälkeen on sovittu valintatapa ja palaverin päivä.", koodi: "### Revolven valintatapa (viikko 45)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Kirjoita akselin väärän puolen hyväksymiskriteeri", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Profiili akselin väärällä puolella (viikko 45)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen, mitä sovellus tekee pisteelle, jonka x on alle 0 eli akselin väärällä puolella, ja mitä käyttäjä silloin näkee.", naet: "Otsikon jälkeen on oma hyväksymiskriteerisi. Akseli on piirroksen sivun vasen reuna, jossa x = 0. Kriteeri on testin 11 odotettu tulos.", koodi: "### Profiili akselin väärällä puolella (viikko 45)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa revolven valintatapa ja akselin väärä puoli", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Valintatapa on sovittu palaverissa, ja oma hyväksymiskriteerisi akselin väärälle puolelle on kirjoitettu. Molemmat ovat GitHubissa.",
          tallenna: "Päätökset tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa. Sovittu tapa ja hyväksymiskriteeri tulevat pyörähdyskappaleen kortin issueen työvaiheessa 5.",
          esimerkki: "Reseptikirjan hyväksymiskriteeri: \"Jos annosmäärä on negatiivinen, sovellus käyttää annosmäärää 1 ja näyttää huomautuksen: Annosmäärä ei voi olla negatiivinen.\"",
          eiRiita: "\"Virheelliset pisteet käsitellään.\" Kriteeristä ei näe, mitä pisteelle tapahtuu eikä mitä käyttäjä näkee.",
          sanat: ["revolve"]
        },
        "45-6": {
          perii: ["45-2"],
          miksi: "Testit 9–11 ja revolve tarvitsevat oman profiilin.",
          osat: [
            { otsikko: "Avaa uusi piirros", missa: "Inkscape", tee: "Käynnistä Inkscape. Valitse File ja sitten New.", naet: "Uusi tyhjä sivu aukeaa. Sivun vasen reuna on pyörähdysakseli, eli siinä x = 0." },
            { otsikko: "Piirrä maljakon puoliprofiili", missa: "Inkscape, piirtoalue", tee: "Valitse kynätyökalu painamalla B. Napsauta ensimmäinen piste sivun alaosaan noin 1 cm sivun vasemmasta reunasta, napsauta muutama piste ylöspäin maljakon reunaa pitkin ja paina Enter.", naet: "Piirtoalueella on avoin viiva, joka on maljakon toinen puolisko. Ensimmäinen piste on maljakon pohja. Kaikki pisteet ovat sivun vasemman reunan oikealla puolella, eikä yksikään ole tasan reunassa." },
            { otsikko: "Tallenna profiili", missa: "Inkscape, File-valikko ja tallennusikkuna", tee: "Valitse File ja sitten Save As. Tallenna piirros nimellä maljakko.svg kansioon testiaineisto. Ohje: [[ohje:tiedostoikkuna]].", naet: "Inkscapen otsikkorivillä lukee maljakko.svg. VS Coden Explorerissa tiedosto on kansiossa testiaineisto." },
            { otsikko: "Merkitse profiili sovitulla tavalla", missa: "Inkscape, tiedosto maljakko.svg, Layers and Objects -paneeli. Jos tiedosto ei ole auki, valitse File ja Open Recent.", tee: "Jos sovittu valintatapa on nimimerkintä, valitse Layer ja sitten Layers and Objects. Kaksoisnapsauta layerin nimeä Layer 1, kirjoita nimi ja sovittu merkintä, esimerkiksi maljakko [revolve], ja paina Enter ja Ctrl+S.", naet: "Uuden piirroksen ainoa layer on paneelin ylimmällä rivillä. Sen nimi oli Layer 1, ja nyt se on esimerkiksi maljakko [revolve]. Inkscape tallensi muutoksen. Jos sovittu tapa on valinta sovelluksessa, et merkitse Inkscapessa mitään: rastita tämä osatehtävä. [[kuvaohje:inkscape-layerit|Katso kuvaohje]]." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston testiaineisto/maljakko.svg.", koodi: "Lisää maljakon puoliprofiili", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Profiili maljakko.svg on piirretty, merkitty sovitulla tavalla ja GitHubissa.",
          tallenna: "Profiili testiaineisto/maljakko.svg GitHubissa.",
          sanat: []
        },
        "45-2": {
          versio: "2026-10-05",
          miksi: "Testit määrittelevät, millainen kappale profiilista syntyy.",
          osat: [
            { vanha: 1, otsikko: "Valitse kysymystila", missa: "VS Code, GitHub Copilotin chat", tee: "Avaa chat painamalla Ctrl+Alt+I. Aloita [[kuvaohje:vscode-chat-tilat|kuvaohjeen]] kohdasta 2 ja valitse tilavalikosta Ask.", naet: "Tilavalikossa lukee Ask. Kysymystila eli Ask-tila vastaa kysymyksiin mutta ei muuta tiedostoja." },
            { vanha: 1, otsikko: "Kysy, miten revolve lukee pisteet", missa: "Chat, viestikenttä", tee: "Kopioi kysymys. Liitä se viestikenttään ja paina Enter.", naet: "GitHub Copilot vastaa chatissa. Tiedostot eivät muutu. Kirjaat kysymyksen tiedostoon [[tiedosto:ai-loki|ai-loki.md]] heti tämän työvaiheen jälkeen.", koodi: "Miten trimesh.creation.revolve lukee profiilin pisteet? Selitä lyhyesti suomeksi. Älä muuta tiedostoja.", koodiOtsikko: "Kysymys: kopioi tämä" },
            { otsikko: "Lue kahden pisteen koordinaatit", missa: "Inkscape, tiedosto maljakko.svg. Jos se ei ole auki, valitse File ja Open Recent.", tee: "Valitse solmutyökalu painamalla N, napsauta viivaa ja napsauta sitten yhtä sen pistettä. Kirjoita työkalurivin kenttien X ja Y luvut paperille, ja tee sama toiselle pisteelle.", naet: "Valittu piste on muita pisteitä suurempi ja erivärinen, ja kentissä X ja Y on luku. Jos kentät ovat harmaat, napsauta pistettä uudelleen. Paperilla on kahden pisteen X ja Y, esimerkiksi X 20 ja Y 250. Yksikkö näkyy kenttien vieressä, esimerkiksi mm. Kirjoitat luvut testiin ilman yksikköä. Inkscapessa y kasvaa alaspäin samoin kuin SVG:ssä." },
            { vanha: 0, otsikko: "Päätä testin 9 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 9: profiilin pisteet. Kirjoita paperille kummastakin pisteestä pari, jonka revolve saa: etäisyys akselista on x, ja korkeus on −y.", naet: "Paperilla on testin 9 syöte ja odotettu tulos, esimerkiksi piste (20, 250) antaa parin (20, −250). Korkeus on miinusmerkkinen, koska SVG:n y kasvaa alaspäin mutta 3D-näkymän korkeus ylöspäin." },
            { vanha: 0, otsikko: "Päätä testin 10 odotetut tulokset", missa: "Paperi tai muistiinpanot", tee: "Testi 10: segmenttien rajat. Käyttäjä antaa määräksi 2 tai 33. Kirjoita paperille, minkä määrän sovellus käyttää kummassakin tapauksessa.", naet: "Paperilla on kaksi lukua. Segmenttien määrä saa olla 3–32." },
            { vanha: 0, otsikko: "Hae testin 11 odotettu tulos", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Profiili akselin väärällä puolella (viikko 45)", tee: "Testin 11 syöte on profiili, jossa on pisteet (−10, 100) ja (20, 250): pisteen (−10, 100) x on alle 0. Etsi otsikko ([[ohje:etsi-otsikko]]) ja kirjoita hyväksymiskriteerisi mukaan paperille, mitä funktio palauttaa näille pisteille.", naet: "Paperilla on testin 11 odotettu tulos eli funktion paluuarvo. Se, mitä käyttäjä silloin näkee, on hyväksymiskriteerin toinen osa, eikä testi tarkista sitä. Kirjoitat testien 9–11 tulokset kortteihin työvaiheissa 5 ja 7 ja testeihin työvaiheissa 6 ja 8.", koodi: "### Profiili akselin väärällä puolella (viikko 45)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Päätä profiilin muunnoksen rajapinta", missa: "Paperi tai muistiinpanot", tee: "Viikon funktio muuntaa profiilin pisteet revolven pareiksi ja käsittelee testin 11 pisteen. Päätä funktiolle nimi: pienet kirjaimet, verbi ensin ja sanojen välissä alaviiva. Kirjoita paperille nimi, syöte ja paluuarvo.", naet: "Paperilla on funktion nimi, syöte ja paluuarvo. Syöte on profiilin pisteet SVG:stä, ja paluuarvo on testin 9 kaltaiset parit. Kirjoitat ne pyörähdyskappaleen kortin viestipohjan Rajapinta-riville." },
            { otsikko: "Päätä rajausfunktion rajapinta", missa: "Paperi tai muistiinpanot", tee: "Testi 10 tarkistaa funktion, joka rajaa segmenttien määrän välille 3–32. Päätä sille nimi samoilla säännöillä kuin viikon funktiolle ja kirjoita paperille nimi, syöte ja paluuarvo.", naet: "Paperilla on rajausfunktion nimi, syöte (käyttäjän antama määrä) ja paluuarvo (määrä 3–32). Kirjoitat ne segmenttisäätimen kortin viestipohjan Rajapinta-riville." }
          ],
          valmis: "Testien 9–11 omat odotetut tulokset sekä viikon funktion ja rajausfunktion rajapinnat on kirjoitettu ennen toteutusta.",
          tallenna: "Odotetut tulokset ja rajapinnat kortteihin työvaiheissa 5 ja 7 ja testeihin työvaiheissa 6 ja 8.",
          esimerkki: "Toinen funktio: rajaa_annokset(maara) pitää annosmäärän välillä 1–12. rajaa_annokset(0) palauttaa 1, ja rajaa_annokset(13) palauttaa 12.",
          eiRiita: "\"Liian pieni ja liian suuri määrä korjataan.\" Luvut puuttuvat, joten testi ei voi tarkistaa mitään.",
          sanat: ["kysymystila"]
        },
        "45-7": {
          perii: ["45-2"],
          miksi: "Kysymystilan käyttö on tekoälyn käyttöä työsyklin ulkopuolella, joten kirjaat sen samana päivänä.",
          osat: [
            { otsikko: "Avaa AI-loki", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]]. Ohje: [[ohje:avaa-tiedosto]]. Paina Ctrl+End ja sitten Enter.", naet: "Kursori on tiedoston lopussa tyhjällä rivillä viimeisen merkinnän jälkeen. Aiempien viikkojen merkinnät jäävät kursorin yläpuolelle, ja se on oikein." },
            { otsikko: "Kirjoita kysymyksen merkintä", missa: "Tiedosto [[tiedosto:ai-loki|ai-loki.md]], tiedoston loppu", tee: "Kopioi merkinnän pohja ja liitä se Ctrl+V:llä. Täytä päivä, päätös ja peruste: auttoiko vastaus päättämään testin 9 parit.", naet: "Tiedoston lopussa on kuuden rivin merkintä. Päätös-rivillä on yksi sana: hyväksyn, korjautan tai hylkään.", koodi: "### pp.kk.vvvv · GitHub Copilot, kysymystila\n- Mihin pyysin apua: Miten trimesh.creation.revolve lukee profiilin pisteet.\n- Päätös: hyväksyn / korjautan / hylkään\n- Peruste: \n- Aineistoviite: testi 9\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.", koodiOtsikko: "Merkinnän pohja: kopioi tämä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:ai-loki|ai-loki.md]] muutokset.", koodi: "Kirjaa AI-lokiin", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Kysymyksen merkintä on tiedostossa [[tiedosto:ai-loki|ai-loki.md]] GitHubissa.",
          tallenna: "Merkintä tiedostossa [[tiedosto:ai-loki|ai-loki.md]] GitHubissa.",
          esimerkki: "### 12.3.2026 · GitHub Copilot, kysymystila\n- Mihin pyysin apua: Miten Pillow kertoo kuvan koon.\n- Päätös: hyväksyn\n- Peruste: Vastaus kertoi, että koko on pari (leveys, korkeus). Sen avulla kirjoitin testin 4 odotetun tuloksen.\n- Aineistoviite: testi 4\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.",
          eiRiita: "### 12.3.2026 · Copilot\n- Mihin pyysin apua: kysyin\n- Päätös: ok\nTyökalu on väärä, eikä merkinnästä näe, mitä kysyit ja miksi päätit niin.",
          sanat: []
        },
        "45-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Pyörähdyskappale on ensimmäinen toiminto, joka muodostaa piirroksesta 3D-kappaleen. Tarvitset paperin, jolla ovat sovittu valintatapa, rajapinta ja testien 9 ja 11 tulokset.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Jos auki on muu askel, valitse askelpalkista 1 Suunnittele." },
            { vanha: 0, otsikko: "Liitä viestipohja Copilotiin", missa: "Työsykli, askel 1 Suunnittele, ja Copilot selaimessa", tee: "Tee askeleen 1 ohjeet siihen asti, kun viestipohja on Copilotin viestikentässä. Älä vielä täytä tai lähetä viestiä.", naet: "Viestipohja on Copilotin viestikentässä, ja siinä on ___-kohtia. Pidä Copilotin välilehti auki. Valitse työsyklissä Palaa työvaiheeseen, niin näet täytettävät tiedot." },
            { vanha: 0, otsikko: "Täytä ehdotus, kaista ja rajapinta", missa: "Copilot selaimessa, viestipohjan rivit Minun ehdotukseni kortiksi, Kaista ja Rajapinta", tee: "Maalaa ___ ja kirjoita tilalle: ehdotukseen \"revolven eli pyörähdyskappaleen profiilista\" ja Rajapinta-riville paperin rajapinta. Kirjoita Kaista-riville itse valitsemasi kaista ja peruste koska-sanalla: [[tyotapa#kolme-kaistaa|Kolme kaistaa]].", naet: "Lainausmerkit eivät tule viestiin. Kaista-rivillä lukee esimerkiksi Tiedosto, koska haluan lukea jokaisen tiedoston erikseen. Rajapinta-rivillä on funktion nimi, syöte (profiilin pisteet) ja paluuarvo (parit)." },
            { vanha: 0, otsikko: "Täytä testit 9 ja 11", missa: "Copilot selaimessa, viestipohjan Testi-rivit", tee: "Täytä ensimmäinen Testi-rivi testille 9 ja toinen testille 11: numero, syöte ja paperin tulos. Testin 11 syöte on pisteet (−10, 100) ja (20, 250), ja tulokseksi tulee hyväksymiskriteerisi.", naet: "Kahdella ensimmäisellä Testi-rivillä ovat testit 9 ja 11 sinun tuloksinasi. Kolmannella Testi-rivillä on yhä ___-merkit, joten Copilot ohittaa sen. Testi 10 tulee segmenttisäätimen korttiin." },
            { vanha: 0, otsikko: "Liitä Lisäksi-rivin teksti ja lähetä", missa: "Tämä osatehtävä ja Copilot selaimessa", tee: "Kopioi teksti. Maalaa Copilotissa Lisäksi-rivin ___, paina Ctrl+V, kirjoita perään paperin sovittu valintatapa ja lähetä viesti painamalla Enter.", naet: "Copilot on kirjoittanut kortin, jossa on kuusi otsikkoa sekä osiot Oma tarkistus ja Sykli. Testi-kohdassa ovat testit 9 ja 11, ja hyväksymiskriteereissä on painike Tee pyörähdyskappale. Avaa työsykli työvaiheen painikkeesta. Valitse Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Profiilin muunnos on tiedostossa vektoripaja/revolve.py. Painikkeen nimi on Tee pyörähdyskappale. Jos sovittu tapa on valinta sovelluksessa, painike tekee pyörähdyskappaleen valitusta profiilista. Jos sovittu tapa on nimimerkintä, painike tekee pyörähdyskappaleen merkitystä profiilista. Sovittu valintatapa on ", koodiOtsikko: "Lisäksi-rivin teksti: kopioi tämä" },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä, ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2: tee sen ohjeet viimeistä kohtaa lukuun ottamatta ([[ohje:issue]]).", naet: "Pyörähdyskappaleen kortin issue on GitHubissa, ja otsikon perässä on issuen numero. Askeleen 2 viimeisen kohdan Sovittu viikkopalaverissa -kommentin kirjoitat seuraavassa osatehtävässä tämän työvaiheen pohjalla." },
            { vanha: 0, otsikko: "Kirjoita sovittu valintatapa issueen", missa: "Selain, pyörähdyskappaleen kortin issue, kommenttikenttä sivun lopussa", tee: "Kopioi kommentti ja liitä se issuen kommenttikenttään. Kirjoita pp.kk. tilalle palaverin päivä ja ___ tilalle sovittu tapa, ja valitse Comment.", naet: "Kommentti näkyy issuessa. Se on viikon Sovittu viikkopalaverissa -kommentti, joten et kirjoita toista kommenttia. Valitse lopuksi työsyklissä Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Sovittu viikkopalaverissa pp.kk.: valintatapa on ___", koodiOtsikko: "Kommentti: kopioi tämä" }
          ],
          valmis: "Pyörähdyskappaleen kortin issue on GitHubissa, ja siinä ovat testit 9 ja 11 sekä sovitun valintatavan kommentti.",
          tallenna: "Kortti ja sovittu valintatapa pyörähdyskappaleen kortin issueen.",
          esimerkki: "Reseptikirjan issue-kommentti: \"Sovittu viikkopalaverissa 12.3.: haku tehdään kirjoittaessa, ei hakupainikkeella.\"",
          eiRiita: "\"Sovittu.\" Kommentista puuttuvat sovittu tapa ja päivä.",
          sanat: []
        },
        "45-8": {
          perii: ["45-3"],
          tyosykli: true,
          miksi: "Kirjoitat testit ennen koodia, jotta ne tarkistavat sinun odotetut tuloksesi.",
          osat: [
            { otsikko: "Avaa työsykli askeleeseen 3", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen.", naet: "Työsykli aukeaa. Askel 3 Rakenna on auki. Jos auki on muu askel, valitse askelpalkista 3 Rakenna." },
            { otsikko: "Luo testitiedosto", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, Explorer", tee: "Kopioi testipohja. Napsauta kansiota tests hiiren oikealla painikkeella, valitse New File, kirjoita nimeksi vain test_revolve.py ja liitä pohja. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedosto tests/test_revolve.py on auki. Ensimmäisellä rivillä on import-rivi, ja sen jälkeen ovat testien 9 ja 11 kommentit ja def-rivit. Askeleen 3a import-, kommentti- ja def-rivit ovat nyt valmiina, joten et kirjoita niitä uudelleen.", koodi: "from vektoripaja.revolve import ___\n\n\n# Testi 9: ___([(___, ___), (___, ___)]) -> [(___, ___), (___, ___)]\ndef test_9_profiilin_pisteet():\n\n\n# Testi 11: ___([(-10, 100), (20, 250)]) -> ___\ndef test_11_akselin_vaara_puoli():\n", koodiOtsikko: "Testipohja: kopioi tämä" },
            { otsikko: "Kirjoita testit 9 ja 11", missa: "Tiedosto tests/test_revolve.py", tee: "Vaihda ___-kohtiin paperin funktion nimi, testin 9 pisteet ja parit sekä testin 11 kohtaan vain se, mitä funktio palauttaa näille pisteille. Paina kummankin def-rivin lopussa Enter ja hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Kummassakin testissä on assert-rivi, jossa on oma odotettu tuloksesi. Miinusmerkki on näppäimistön viiva -. Se, mitä käyttäjä näkee, on kortin hyväksymiskriteeri, eikä pytest tarkista sitä. Rastita issuessa kohta 3a." },
            { otsikko: "Toteuta pyörähdyskappale kortin kaistalla", missa: "Työsykli, askel 3 Rakenna, kohta 3b", tee: "Lue kaista kortin kohdasta ## Kaista. Tee askeleen 3 ohjeet sille kaistalle ja lue jokainen muutos, ennen kuin hyväksyt sen.", naet: "Kortin tiedostot on tallennettu, ja sovellus käynnistyy komennolla python main.py. Rastita issuessa kohta 3b. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Kokeile pyörähdyskappaletta", missa: "Työsykli, askel 4 Tarkista · VS Code, terminaali, ja Vektoripaja", tee: "Aja komento ([[ohje:komento]]) ja avaa tiedosto maljakko.svg kansiosta testiaineisto painikkeella Avaa ([[ohje:tiedostoikkuna]]). Valitse ensin profiili, jos sovittu tapa on valinta sovelluksessa, ja valitse sitten painike Tee pyörähdyskappale.", naet: "Kappale näkyy 3D-näkymässä oikein päin. Sulje Vektoripaja ikkunan sulkupainikkeesta.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Käy tarkistuslista läpi", missa: "Tämän työvaiheen laatikko trimeshin revolve ja profiili, sitten kortin issue GitHubissa", tee: "Avaa tämän työvaiheen lopun laatikko trimeshin revolve ja profiili ja käy sen REVOLVEN TARKISTUSLISTA läpi. Kirjoita tulos kortin issueen kommenttina tämän osatehtävän pohjalla ja valitse Comment.", naet: "Kommentti näkyy kortin issuessa.", koodi: "Tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ", koodiOtsikko: "Kommentti issueen: kopioi tämä" },
            { otsikko: "Tee pyörähdyskappaleen kortti loppuun", missa: "Työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4: tee askeleiden 4–6 ohjeet ja valitse jokaisen askeleen lopussa Tein tämän · seuraava askel.", naet: "Pyörähdyskappaleen kortin issue on suljettu. Profiili maljakko.svg pyörähtää kappaleeksi, ja testit 9 ja 11 menevät läpi. Askeleen 5 jälkeen et käytä Copilotin ehdottamaa seuraavaa korttia, koska suunnittelet segmenttisäätimen kortin työvaiheessa 7." }
          ],
          valmis: "Oma profiili muuttuu kappaleeksi, ja testit 9 ja 11 menevät läpi.",
          tallenna: "Koodi ja testit GitHubiin. Testien 9 ja 11 tulokset pyörähdyskappaleen kortin issueen.",
          esimerkki: "Reseptikirjan testikommentti: \"# Testi 5: skaalaa_maarat([(2, 'dl')], 2) -> [(4, 'dl')]\" Kommentissa ovat funktion nimi, syöte ja odotettu tulos.",
          eiRiita: "\"# Testi 11: väärä piste -> käsitellään\" Syöte ja tulos puuttuvat, joten täydennys arvaa ne.",
          apu: {
            otsikko: "trimeshin revolve ja profiili",
            tree: "SVG-profiili                  trimesh.creation.revolve\nx = etäisyys akselista    →  pisteet: [(x, korkeus), …]\ny = korkeus (käännä: −y)  →  sections = 3…32",
            actions: [
              "Kohdan Luo tämä rakenne kaavio näyttää, miten SVG-profiilin x ja y muuttuvat revolven pareiksi. Sama muunnos on testin 9 odotettu tulos, ja koodi tehdään askeleessa 3b.",
              "Funktio revolve saa profiilin pisteet ja segmenttien määrän: `trimesh.creation.revolve(pisteet, sections=segmentit)`. Pisteet ovat pareja: etäisyys akselista ja korkeus.",
              "SVG:n y-akseli kasvaa alaspäin, 3D-näkymän ylöspäin. Käännä y-arvot.",
              "Piste x = 0 on akselilla. Profiili piirretään akselin toiselle puolelle.",
              "Tuloksena on trimesh-kappale. Näytä se PyVistassa: `plotter.add_mesh(pyvista.wrap(kappale))`."
            ],
            code: "REVOLVEN TARKISTUSLISTA\n[ ] valintatapa sovittu ja kirjattu\n[ ] testin 11 kriteeri kirjattu ennen koodia\n[ ] kappale näkyy oikein päin",
            links: [
              ["trimesh: creation.revolve", "https://trimesh.org/trimesh.creation.html"],
              ["PyVista: Plotter", "https://docs.pyvista.org/api/plotting/_autosummary/pyvista.Plotter.html"]
            ]
          },
          sanat: []
        },
        "45-4": {
          perii: ["45-3"],
          tyosykli: true,
          miksi: "Segmenttisäädin auttaa käyttäjää muotoilemaan pyörähdyskappaletta. Tarvitset paperin, jolla ovat rajausfunktion rajapinta ja testin 10 tulokset.",
          osat: [
            { otsikko: "Aloita työsyklin kierros 2", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki, ja otsikon Työsykli vieressä lukee Kierros 2." },
            { otsikko: "Liitä viestipohja Copilotiin", missa: "Työsykli, askel 1 Suunnittele, ja Copilot selaimessa", tee: "Tee askeleen 1 ohjeet uudella viestipohjalla siihen asti, kun pohja on Copilotin viestikentässä. Älä käytä Copilotin ehdottamaa korttia äläkä vielä lähetä viestiä.", naet: "Viestipohja on Copilotin viestikentässä, ja siinä on ___-kohtia. Valitse työsyklissä Palaa työvaiheeseen, niin näet täytettävät tiedot." },
            { otsikko: "Täytä ehdotus, kaista ja rajapinta", missa: "Copilot selaimessa, viestipohjan rivit Minun ehdotukseni kortiksi, Kaista ja Rajapinta", tee: "Maalaa ___ ja kirjoita tilalle: ehdotukseen \"segmenttisäätimen, joka muuttaa pyörähdyskappaleen segmenttien määrää\" ja Rajapinta-riville paperin rajausfunktion rajapinta. Kirjoita Kaista-riville itse valitsemasi kaista ja peruste koska-sanalla: [[tyotapa#kolme-kaistaa|Kolme kaistaa]].", naet: "Lainausmerkit eivät tule viestiin. Rajapinta-rivillä on rajausfunktion nimi, syöte (käyttäjän antama määrä) ja paluuarvo (määrä 3–32)." },
            { otsikko: "Täytä testi 10 kahdelle riville", missa: "Copilot selaimessa, viestipohjan Testi-rivit", tee: "Täytä kaksi ensimmäistä Testi-riviä testille 10: ensimmäiseen syöte 2 ja toiseen syöte 33 ja kumpaankin paperin tulos.", naet: "Kummallakin rivillä lukee Testi 10: kun syöte on 2 tai 33, tuloksen pitää olla oma lukusi. Kolmannella Testi-rivillä on yhä ___-merkit, joten Copilot ohittaa sen." },
            { otsikko: "Liitä Lisäksi-rivin teksti ja lähetä", missa: "Tämä osatehtävä ja Copilot selaimessa", tee: "Kopioi teksti. Maalaa Copilotissa Lisäksi-rivin ___, paina Ctrl+V ja lähetä viesti painamalla Enter.", naet: "Copilot on kirjoittanut kortin, jossa on kuusi otsikkoa. Siinä segmenttien määrä rajataan välille 3–32 puhtaalla funktiolla, säätimen nimi on Segmentit, ja testissä 10 ovat sinun lukusi. Avaa työsykli työvaiheen painikkeesta. Valitse Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Rajaus on puhdas funktio ilman Qt:ta eli se ei käytä PySide6:ta. Rajausfunktio on tiedostossa vektoripaja/revolve.py. Segmenttisäädin on QSpinBox, ja sen nimi sovelluksessa on Segmentit. Säädin muuttaa pyörähdyskappaleen segmenttien määrää.", koodiOtsikko: "Lisäksi-rivin teksti: kopioi tämä" },
            { otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä, ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2: tee sen ohjeet ([[ohje:issue]]).", naet: "Segmenttisäätimen kortin issue on GitHubissa, ja otsikon perässä on issuen numero. Segmenttisäätimen kortti on viikon toinen kortti, joten et kirjoita askeleen 2 Sovittu viikkopalaverissa -kommenttia. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." }
          ],
          valmis: "Segmenttisäätimen kortin issue on GitHubissa, ja siinä on testi 10 sinun luvuillasi.",
          tallenna: "Kortti segmenttisäätimen kortin issueen GitHubissa.",
          sanat: []
        },
        "45-9": {
          perii: ["45-3"],
          tyosykli: true,
          miksi: "Segmenttisäädin ja kameran kierto auttavat käyttäjää muotoilemaan ja tarkastelemaan pyörähdyskappaletta.",
          osat: [
            { otsikko: "Avaa työsykli askeleeseen 3", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen.", naet: "Työsykli aukeaa. Askel 3 Rakenna on auki. Jos auki on muu askel, valitse askelpalkista 3 Rakenna." },
            { otsikko: "Liitä testin 10 pohja", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, tiedosto tests/test_revolve.py", tee: "Kopioi testipohja. Avaa tiedosto tests/test_revolve.py ([[ohje:avaa-tiedosto]]), paina Ctrl+End ja Enter ja paina Ctrl+V.", naet: "Tiedoston lopussa ovat testin 10 kommentti ja def-rivi. Loit tiedoston pyörähdyskappaleen kortissa, joten et luo uutta tiedostoa.", koodi: "\n# Testi 10: ___(2) -> ___, ___(33) -> ___\ndef test_10_segmenttien_rajat():\n", koodiOtsikko: "Testipohja: kopioi tämä" },
            { otsikko: "Kirjoita testi 10", missa: "Tiedosto tests/test_revolve.py", tee: "Lisää ensimmäisen rivin loppuun pilkku ja rajausfunktion nimi, ja vaihda kommentin ___-kohtiin sama nimi ja paperin tulokset. Paina def-rivin lopussa Enter ja hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Ensimmäisellä rivillä on import-sanan jälkeen kaksi nimeä pilkulla erotettuna: profiilin muunnos ja rajausfunktio. Testissä 10 on assert-rivi kummallekin syötteelle, ja niissä ovat sinun tuloksesi. Rastita issuessa kohta 3a." },
            { otsikko: "Toteuta segmenttisäädin", missa: "Työsykli, askel 3 Rakenna, kohta 3b", tee: "Lue kaista kortin kohdasta ## Kaista. Tee askeleen 3 ohjeet sille kaistalle ja lue jokainen muutos, ennen kuin hyväksyt sen.", naet: "Sovelluksessa on säädin Segmentit. Sen pienin arvo on 3 ja suurin 32. Rastita issuessa kohta 3b. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Käynnistä sovellus ja tee pyörähdyskappale", missa: "Työsykli, askel 4 Tarkista · VS Code, terminaali, ja Vektoripaja", tee: "Aja komento ([[ohje:komento]]) ja avaa tiedosto maljakko.svg kansiosta testiaineisto painikkeella Avaa ([[ohje:tiedostoikkuna]]). Valitse ensin profiili, jos sovittu tapa on valinta sovelluksessa, ja valitse sitten painike Tee pyörähdyskappale.", naet: "Pyörähdyskappale näkyy 3D-näkymässä, ja säädin Segmentit on näkyvissä. Jätä sovellus auki seuraavia osatehtäviä varten.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Kokeile segmenttimääriä", missa: "Vektoripaja, säädin Segmentit", tee: "Aseta säätimeen Segmentit vuorotellen luvut 3, 8 ja 32. Kirjoita paperille, miltä kappale näyttää kullakin luvulla.", naet: "Kappale muuttuu kulmikkaasta pyöreäksi, kun segmenttejä on enemmän." },
            { otsikko: "Kokeile orbitia", missa: "Vektoripaja, 3D-näkymä", tee: "Pidä hiiren vasen painike pohjassa ja vedä 3D-näkymässä. Kirjoita paperille, kiertyykö näkymä, ja sulje sitten Vektoripaja ikkunan sulkupainikkeesta.", naet: "Näkymä kiertyi mallin ympäri. Tätä kiertoa sanotaan orbitiksi, ja se on valmiina PyVistan kamerassa." },
            { otsikko: "Tee segmenttisäätimen kortti loppuun", missa: "Työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta: se aukeaa askeleeseen 4. Tee askeleiden 4–6 ohjeet, ja kirjoita askeleessa 4 testin 10 kirjauksen lisäksi issueen kokeilun kommentti tämän osatehtävän pohjalla.", naet: "Kokeilun kommentissa ovat paperin havainnot ja tämän työvaiheen lopun laatikon Segmenttisäädin ja orbit tarkistuslista. Valitsit jokaisen askeleen lopussa Tein tämän · seuraava askel. Segmenttisäätimen kortin issue on suljettu, ja testit 9–11 menevät läpi.", koodi: "Käsin tehty kokeilu: segmenttimäärät ja orbit\nSyöte: testiaineisto/maljakko.svg, segmenttimäärät 3, 8 ja 32\nOdotettu tulos: kappale muuttuu kulmikkaasta pyöreäksi, kun segmenttejä on enemmän, ja orbit kiertää näkymää hiirellä.\nHavaittu tulos: \nTarkistuslista käyty. Rivit, jotka eivät täyttyneet: \nTulos: läpi / ei läpi", koodiOtsikko: "Kokeilun kommentti issueen: kopioi tämä" }
          ],
          valmis: "Segmenttimäärä muuttuu välillä 3–32, orbit toimii, ja testit 9–11 menevät läpi.",
          tallenna: "Koodi ja testi GitHubiin. Testin 10 tulos ja segmenttimäärien kokeilu segmenttisäätimen kortin issueen.",
          esimerkki: "Reseptikirjan testikommentti: \"# Testi 6: rajaa_annokset(0) -> 1, rajaa_annokset(13) -> 12\" Kommentissa ovat funktion nimi, molemmat rajat ja niiden odotetut tulokset.",
          eiRiita: "\"# testaa rajat\" Luvut puuttuvat, joten täydennys arvaa ne.",
          apu: {
            otsikko: "Segmenttisäädin ja orbit",
            actions: [
              "Segmenttisäädin on Qt:n `QSpinBox`. Tee rajaus 3–32 puhtaana funktiona, jotta testi 10 voi tarkistaa sen.",
              "Orbit on PyVistassa valmiina: näkymää voi kiertää hiirellä. Sinun ei tarvitse tehdä sitä itse."
            ],
            code: "SEGMENTTISÄÄTIMEN TARKISTUSLISTA\n[ ] segmenttien määrä rajataan 3–32 (testi 10)\n[ ] orbit toimii hiirellä",
            test: "Avaa sovelluksessa maljakon puoliprofiili maljakko.svg painikkeella Avaa ja valitse painike Tee pyörähdyskappale. Kokeile säätimellä Segmentit määriä 3, 8 ja 32. Kappaleen pitää muuttua kulmikkaasta pyöreäksi. Kirjaa tulos issueen osatehtävän Tee segmenttisäätimen kortti loppuun kommenttipohjalla.",
            links: [
              ["PyVista: Plotter", "https://docs.pyvista.org/api/plotting/_autosummary/pyvista.Plotter.html"]
            ]
          },
          sanat: ["orbit"]
        },
        "45-5": {
          perii: ["45-3"],
          miksi: "Julkaisu tuo pyörähdyskappaleen asiakkaiden kokeiltavaksi.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi ja dokumentit ovat GitHubissa." },
            { otsikko: "Tee tagi v0.0.45", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.0.45", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.45 -> v0.0.45. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.0.45", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.0.45 on vihreä. Viikon versio on [[github:releases|Releases-sivulla]]." }
          ],
          valmis: "Release v0.0.45 on GitHubissa, ja Actions-ajo on vihreä.",
          tallenna: "Release v0.0.45 GitHubiin.",
          sanat: []
        }
      },
      sykli: {
        lisa: {
          1: "Viikolla 45 teet kaksi korttia: pyörähdyskappaleen kortti työvaiheessa 5 ja segmenttisäätimen kortti työvaiheessa 7. Liitä viestipohja Copilotiin ja palaa sitten työvaiheeseen painikkeella Palaa työvaiheeseen. Työvaihe kertoo, mitä kirjoitat ___-kohtiin.",
          3: "Viikolla 45 testitiedosto on tests/test_revolve.py. Pyörähdyskappaleen kortissa luot tiedoston työvaiheessa 6, ja segmenttisäätimen kortissa lisäät testin 10 tiedoston loppuun työvaiheessa 8. Pohjissa ovat jo import-rivi, kommentit ja def-rivit.",
          5: "Pyörähdyskappaleen kortin jälkeen et käytä Copilotin ehdottamaa korttia: suunnittelet segmenttisäätimen kortin uudella viestipohjalla työvaiheessa 7."
        }
      }
    },
    46: {
      type: "feature",
      feature: "Käyttäjä voi tehdä viivasta putken ja tarkastella mallia suorista näkymistä.",
      excerpt: "Mallia pitää voida katsoa suoraan edestä, sivulta ja ylhäältä.",
      connection: "Revolven rinnalle tarvitaan tapa tehdä piirroksen viivasta putkimainen osa. Tällä viikolla lisäät inflaten eli putken ja sen sivumäärän säädön sekä suorat kameranäkymät ja näkymän lukituksen. Näin Vektoripajalla voi rakentaa erilaisia osia ja tarkastella niitä vakaasta suunnasta.",
      deliverable: "Testit 12–14 · inflate ja sivumäärän säädin · putkigeometrian rajoitteet `kirjastot.md`:ssä · orientaatiowidget ja view lock -painike · viikon release.",
      why: "Putkella tehdään johdot, sarvet ja raajat. Suora näkymä ja view lock tarvitaan tarkkaan työhön: ilman niitä kamera kääntyy vahingossa, kun siirrät osia viikolla 47.",
      done: "Inflate on valmis, kun oma polkusi muuttuu putkeksi, sivumäärän voi valita väliltä 3–8 ja testit 12–13 menevät läpi. Kamera on valmis, kun orientaatiowidgetin akselin napsautus kääntää kameran suoraan akselin suuntaan, view lock estää kierron ja testi 14 menee läpi. Jos kamera siirtyy viikolle 47, siirto on ohjaajan kanssa sovittu vaihtoehto eikä virhe.",
      record: "Kumpi osa valmistui ensin ja siirtyikö kamera viikolle 47, putkigeometrian rajoitteet ja sivumäärän rajaus selityspohjalla. Työnäytteet: putken kortin issuen numero ja sen kommentti Sovittu viikkopalaverissa, kameran kortin issuen numero, [[tiedosto:kirjastot|kirjastot.md]]-commitin tunnus ja releasen v0.0.46 osoite. Kirjoita kohtaan Missä työnäyte on? nämä näyttömatriisin vaatimukset: testaa ohjelman toimintoja; [[naytto|tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia]]; [[naytto|tulkitsee suunnitelmia ja toteuttaa ohjelmiston toimintoja]]; sopii tehtävistä tiimin muiden jäsenten kanssa; jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi; kehittää ohjelmiston toimintalogiikkaa; käyttää versionhallintaa; julkaisee ohjelman tuotantoympäristöön; selvittää ohjelmistokomponenttikirjaston tarjoamat mahdollisuudet ja rajoitteet; käyttää ohjelmistokomponenttikirjaston tärkeimpiä toimintoja ja työkaluja; suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen.",
      funktio: "sivumäärän rajaus (testi 12)",
      skills: ["Toimintalogiikka: polku putkeksi", "Komponenttikirjaston rajoitteet", "Valmiit komponentit: orientaatiowidget", "Käyttöliittymän tila: view lock"],
      termit: ["inflate", "orientaatiowidget", "suora näkymä", "view lock"],
      tehtavat: {
        "46-1": {
          versio: "2026-10-05",
          miksi: "Toinen muodostamistapa ja vakaat näkymät täydentävät mallinnusta.",
          osat: [
            { vanha: 0, otsikko: "Lue, mitä teet ensin", missa: "Selain, Vektoripajan sivu", tee: "Lue [[toimeksianto#pakollinen-ydin|toimeksiannon kohdasta Ehdotettu toteutustapa]] kappale, joka alkaa sanoilla Pakollinen ydin ennen joulua.", naet: "Kappale on kohdan kolmas kappale. Siinä ovat muun muassa putki 3–8 sivulla, suorat näkymät ja kameran lukitus eli view lock. Teet ensin putken eli inflaten ja sitten kameran. Jos kamera ei ole valmis torstaina, kerrot siitä ohjaajalle työvaiheen 4 osatehtävässä 7. Ohjaaja päättää, siirtyykö kamera viikon 47 alkuun." },
            { vanha: 1, otsikko: "Päätä testin 12 odotetut tulokset", missa: "Paperi tai muistiinpanot", tee: "Testi 12 on sivujen rajat: käyttäjä antaa sivumääräksi 2 tai 9. Kirjoita paperille, minkä sivumäärän sovellus käyttää kummassakin tapauksessa.", naet: "Paperilla on kaksi lukua. Putken sivumäärä saa olla 3–8." },
            { otsikko: "Päätä sivumäärän rajauksen rajapinta", missa: "Paperi tai muistiinpanot", tee: "Testi 12 tarkistaa funktion, joka rajaa sivumäärän välille 3–8. Päätä funktiolle nimi ja kirjoita paperille nimi, syöte ja paluuarvo.", naet: "Paperilla on funktion nimi, syöte (käyttäjän antama sivumäärä) ja paluuarvo (sivumäärä 3–8). Nämä kolme ovat funktion rajapinta. Kirjoitat rajapinnan putken kortin Rajapinta-riville." },
            { otsikko: "Päätä viivan muodostuksen rajapinta", missa: "Paperi tai muistiinpanot", tee: "Testi 13 tarkistaa funktion, joka tekee polun pisteistä viivan putkea varten. Päätä funktiolle nimi ja kirjoita paperille nimi, syöte ja paluuarvo.", naet: "Paperilla on toinen rajapinta. Syötteenä ovat polun pisteet ja tieto, onko polku suljettu (True tai False). Paluuarvo on viiva, josta putki tehdään. Kirjoitat tämän rajapinnan putken kortin Lisäksi-riville." },
            { vanha: 1, otsikko: "Päätä testin 13 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 13 on suljettu polku eli polku, joka palaa alkupisteeseensä. Kirjoita paperille syötteeksi suljetun polun pisteet, esimerkiksi neliön (0, 0), (1, 0), (1, 1) ja (0, 1), ja odotetuksi tulokseksi True.", naet: "Paperilla on testin 13 syöte ja odotettu tulos. Neliö on suljettu polku: viimeisestä pisteestä (0, 1) viiva palaa ensimmäiseen pisteeseen (0, 0). True tarkoittaa, että viivan alku- ja loppupiste ovat samassa kohdassa eli viiva on suljettu." },
            { vanha: 1, otsikko: "Päätä testin 14 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 14 on view lock: painike View lock on päällä, ja yrität kiertää näkymää hiirellä. Kirjoita paperille, mitä näkymälle pitää tapahtua.", naet: "Paperilla on testin 14 odotettu tulos. View lock on painike, joka estää kameran kiertymisen. Testi 14 tehdään käsin sovelluksessa." },
            { vanha: 1, otsikko: "Kirjoita putken hyväksymiskriteeri", missa: "Paperi tai muistiinpanot", tee: "Kirjoita paperille, mitä ruudulla näkyy, kun valitset hierarkiapaneelissa osan ja sitten painikkeen Tee putki. Kirjoita vain pakollisen ytimen asioita.", naet: "Paperilla on kriteeri, jonka voi tarkistaa katsomalla sovellusta. Painike Tee putki tekee putken valitun osan poluista, ja säätimellä Sivut valitset sivumäärän 3–8. Painike ja säädin tulevat putken korttiin." },
            { vanha: 1, otsikko: "Kirjoita kameran hyväksymiskriteeri", missa: "Paperi tai muistiinpanot", tee: "Kirjoita paperille, mitä ruudulla tapahtuu, kun napsautat orientaatiowidgetin akselia. Älä lupaa tärkeän jatkon toimintoja, kuten ortografista näkymää.", naet: "Paperilla on kriteeri. Suora näkymä ei ole ortografinen näkymä: suorassa näkymässä kaukana olevat osat näyttävät yhä pienemmiltä. Sanaston selitteessä mainittua määrittelytiedostoa ei tarvitse avata. Kirjoitat kriteerit ja testien 12–14 odotetut tulokset korttien issueihin, kun rakennat putken ja kameran." }
          ],
          valmis: "Sivumäärän rajauksen ja viivan muodostuksen rajapinnat, putken ja kameran hyväksymiskriteerit sekä testien 12–14 odotetut tulokset ovat paperilla.",
          tallenna: "Rajapinnat, kriteerit ja odotetut tulokset putken ja kameran korttien issueihin, kun rakennat ne.",
          esimerkki: "Reseptikirjan rajapinta: rajaa_annokset(maara) saa käyttäjän antaman annosmäärän ja palauttaa luvun 1–12.\nReseptikirjan hyväksymiskriteeri: \"Kun napsautan reseptiä, sen ainesosat näkyvät listana oikealla. Kuvaa ei vielä näytetä. Se on oikein, koska kuvien lisäys kuuluu tärkeään jatkoon.\"",
          eiRiita: "\"Kamera toimii ortografisesti.\" Kriteeristä ei näe, mitä ruudulla tapahtuu, ja se lupaa tärkeän jatkon toiminnon.",
          sanat: ["inflate", "view lock", "rajapinta", "orientaatiowidget", "suora näkymä", "ortografinen näkymä"]
        },
        "46-2": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Putkella käyttäjä voi tehdä esimerkiksi johdon tai sarven.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele putken kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä ehdotus (putki PyVistan tube-suodattimella, painike Tee putki ja säädin Sivut), Rajapinta (sivumäärän rajaus), kolme Testi-riviä (12 syötteellä 2, 12 syötteellä 9 ja 13) ja Lisäksi (viivan rajapinta ja putken hyväksymiskriteeri).", naet: "Copilot on kirjoittanut kortin, jossa on kuusi otsikkoa. Kortissa putki tehdään PyVistan tube-suodattimella, ja siinä ovat painike Tee putki ja säädin Sivut. Lisäksi-rivillä viivan rajapinta on samassa muodossa kuin Rajapinta-rivillä: funktio ___ saa ___ ja palauttaa ___. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet. Ohje: [[ohje:issue]].", naet: "Putken kortin issue on GitHubissa, ja sen numero näkyy otsikon perässä. Putken kortti on viikon ensimmäinen kortti, joten issuessa on myös askeleen 2 kommentti, esimerkiksi Sovittu viikkopalaverissa 9.11.: teen putken ensin ja kameran sen jälkeen. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Kirjoita testit 12 ja 13", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, kansio tests", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Tee kohta 3a: luo tiedosto tests/test_putki.py, liitä siihen import-rivit ([[ohje:uusi-tiedosto]]) ja kirjoita testeille 12 ja 13 kommentit ja testifunktiot.", naet: "Tiedoston alussa on kaksi import-riviä. Niiden ___-kohdissa ovat kortin Tiedostot-kohdan moduuli ja rajapintojen funktiot. Testillä 12 on yksi kommentti ja yksi testifunktio test_12_…, ja kommentissa ovat molemmat syötteet kuten Reseptikirjan mallissa # Testi 99: rajaa_annokset(0) -> 1, rajaa_annokset(13) -> 12. Testin 13 kommentissa ovat neliön pisteet ja tulos True. Issuessa kohta 3a on rastitettu. Valitse lopuksi Palaa työvaiheeseen.", koodi: "from vektoripaja.___ import ___\nfrom vektoripaja.___ import ___", koodiOtsikko: "Import-rivit: kopioi ja täytä ___-kohdat" },
            { vanha: 0, otsikko: "Toteuta putki", missa: "Työsykli, askel 3 Rakenna, kohta 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Toteuta kortti kohdan 3b ohjeilla kortin kaistalla.", naet: "Sovelluksessa on painike Tee putki ja säädin Sivut. Issuessa kohta 3b on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Avaa oma piirros Vektoripajassa", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse sovelluksessa painike Avaa ja avaa tiedosto testiaineisto/oma-piirros.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Sovellus näyttää piirroksesi. Hierarkiapaneelissa ovat sen osat, esimerkiksi Vartalo, Pää ja Korvat.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Kokeile sivumääriä", missa: "Vektoripaja, hierarkiapaneeli ja 3D-näkymä", tee: "Valitse hierarkiapaneelissa yksi osa, esimerkiksi Korvat, ja valitse painike Tee putki. Aseta säädin Sivut ensin arvoon 3 ja sitten arvoon 8.", naet: "Kun sivuja on 3, putki on kolmikulmainen. Kun sivuja on 8, putki on lähes pyöreä." },
            { vanha: 1, otsikko: "Tee putken kortti loppuun", missa: "Työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleet 4–6 järjestyksessä, ja käy askeleessa 4 testien jälkeen kohdan Putki PyVistalla tarkistuslista läpi kommenttipohjalla.", naet: "Putken kortin issue on suljettu, ja testit 12 ja 13 menevät läpi. Issuessa on yksi kommentti kummastakin testistä, ja testin 12 molemmat syötteet ovat samassa kommentissa. Tarkistuslistaa ei tarvitse kopioida. Tarkistuslistan kommentin lopussa ovat rivit, jotka eivät täyttyneet, tai sana ei yhtään.", koodi: "Tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ", koodiOtsikko: "Kommentti issueen: kopioi tämä" }
          ],
          valmis: "Oma polku muuttuu putkeksi, sivumäärä muuttuu välillä 3–8 ja testit 12–13 menevät läpi.",
          tallenna: "Koodi ja testit GitHubiin. Testien 12 ja 13 tulokset ja tarkistuslistan kommentti putken kortin issueen.",
          esimerkki: "Reseptikirjan testikommentti kahdella syötteellä:\n# Testi 99: rajaa_annokset(0) -> 1, rajaa_annokset(13) -> 12\nYhdellä testillä on yksi kommentti, vaikka syötteitä on kaksi. Kommentissa ovat syötteet ja odotetut tulokset, joten täydennys voi kirjoittaa testin.",
          eiRiita: "# testaa putki\nKommentista puuttuvat syöte ja odotettu tulos.",
          apu: {
            otsikko: "Putki PyVistalla",
            tree: "SVG-polku → pisteet (x, −y, 0) → pyvista.lines_from_points(pisteet)\n  → .tube(radius=säde, n_sides=3…8, capping=True)\n  → trimesh-kappale vientiä varten",
            actions: [
              "Tee polun pisteistä viiva: `pyvista.lines_from_points(pisteet)`. Suljetulle polulle lisää `close=True` (testi 13).",
              "Tee viivasta putki: `viiva.tube(radius=säde, n_sides=sivut, capping=True)`. Rajaa sivumäärä välille 3–8 puhtaalla funktiolla (testi 12).",
              "Muunna putki trimesh-kappaleeksi: `trimesh.Trimesh(vertices=putki.points, faces=putki.triangulate().regular_faces)`. Näin vienti viikolla 49 toimii kaikille osille samalla tavalla."
            ],
            code: "PUTKEN TARKISTUSLISTA\n[ ] inflate ensin, kamera sitten\n[ ] sivujen määrä rajattu 3–8 (testi 12)\n[ ] suljettu polku sulkeutuu (testi 13)",
            links: [
              ["PyVista: tube", "https://docs.pyvista.org/api/core/_autosummary/pyvista.PolyDataFilters.tube.html"]
            ]
          },
          sanat: []
        },
        "46-4": {
          perii: ["46-2"],
          miksi: "Rajoitteet kertovat, millaisista poluista putki onnistuu.",
          osat: [
            { otsikko: "Avaa oma piirros Vektoripajassa", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse sovelluksessa painike Avaa ja avaa tiedosto testiaineisto/oma-piirros.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Sovellus näyttää piirroksesi. Hierarkiapaneelissa ovat sen osat.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Kokeile putkea omilla poluillasi", missa: "Vektoripaja, hierarkiapaneeli ja 3D-näkymä", tee: "Tee jokaisesta osasta vuorotellen putki: valitse osa hierarkiapaneelissa, valitse painike Tee putki ja aseta säädin Sivut ensin arvoon 3 ja sitten arvoon 8. Kirjoita paperille jokaisesta poikkeamasta osa, sivumäärä ja mitä näit.", naet: "Poikkeama on esimerkiksi terävä kulma, jossa putki litistyy tai menee ristiin. Jos et huomannut poikkeamaa, kirjoita paperille: Putki seurasi kaikkia polkuja siististi." },
            { otsikko: "Avaa kirjastojen rajoitteet", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:kirjastot|project-docs/kirjastot.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedostossa ovat [[vk 43|viikon 43]] rajoitteet 1 ja 2." },
            { otsikko: "Siirry tiedoston loppuun", missa: "Tiedosto [[tiedosto:kirjastot|kirjastot.md]]", tee: "Paina Ctrl+End ja sitten Enter.", naet: "Kursori on tiedoston lopussa tyhjällä rivillä viimeisen rajoitteen jälkeen." },
            { otsikko: "Kirjoita putkigeometrian rajoite", missa: "Tiedosto [[tiedosto:kirjastot|kirjastot.md]], tiedoston loppu", tee: "Kopioi rajoitepohja ja paina Ctrl+V. Täytä rivit paperisi havainnolla: Mitä tapahtui -riville havainto ja Mitä teen -riville päätös siitä, miten toimit rajoitteen kanssa.", naet: "Tiedostossa on rajoite 3. Kirjasto-rivillä lukee PyVista, ja Mitä kokeilin -rivillä ovat tiedoston nimi oma-piirros.svg, osa ja sivumäärä. Mitä teen -rivin päätös on esimerkiksi Pyöristän terävät kulmat Inkscapessa. Et toteuta päätöstä tällä viikolla. Jos poikkeamaa ei ollut, Mitä tapahtui -rivillä lukee Putki seurasi kaikkia polkuja siististi ja Mitä teen -rivillä Ei muutoksia. Jos huomasit toisen rajoitteen, liitä pohja uudelleen ja vaihda otsikon numeroksi 4.", koodi: "### Rajoite 3\n- Kirjasto: PyVista\n- Mitä kokeilin: \n- Mitä tapahtui: \n- Mitä teen: ", koodiOtsikko: "Rajoitepohja: kopioi tämä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:kirjastot|kirjastot.md]] muutokset.", koodi: "Kirjaa putkigeometrian rajoitteet", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Putkigeometrian rajoitteet on kokeiltu omilla poluilla, ja ne ovat GitHubissa.",
          tallenna: "Rajoitteet tiedostossa [[tiedosto:kirjastot|kirjastot.md]] GitHubissa.",
          esimerkki: "Toisen projektin rajoite:\n### Rajoite 3\n- Kirjasto: Pillow\n- Mitä kokeilin: Pienensin reseptin kuvan kakku.png kokoon 20 × 20 pikseliä.\n- Mitä tapahtui: Kuvan teksti ei enää erottunut.\n- Mitä teen: Pienin sallittu kuvakoko on 200 × 200 pikseliä.",
          eiRiita: "### Rajoite 3\n- Kirjasto: PyVista\n- Mitä kokeilin: \n- Mitä tapahtui: Putkessa on ongelmia.\nKokeilu ja tiedoston nimi puuttuvat, joten kukaan ei voi toistaa havaintoa.",
          sanat: []
        },
        "46-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Suora ja lukittu näkymä auttaa seuraavan viikon tarkassa muokkaamisessa.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele kameran kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (orientaatiowidget ja painike View lock, jonka tila näkyy tekstinä), yksi Testi-rivi testille 14 ja Lisäksi (kameran hyväksymiskriteeri paperiltasi).", naet: "Copilot on kirjoittanut kortin. Siinä ovat orientaatiowidget ja painike View lock. Orientaatiowidget on pieni akselikuvio näkymän kulmassa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet. Ohje: [[ohje:issue]].", naet: "Kameran kortin issue on GitHubissa, ja siinä on testin 14 odotettu tulos. Kameran kortti ei ole viikon ensimmäinen kortti, joten et kirjoita kommenttia Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Toteuta kamera", missa: "Työsykli, askel 3 Rakenna, kohdat 3a ja 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Testi 14 tehdään käsin: kirjoita sen odotettu tulos issueen kommentiksi ja rastita 3a. Toteuta sitten kortti kohdan 3b ohjeilla kortin kaistalla.", naet: "Näkymän kulmassa on orientaatiowidget. Sovelluksessa on painike View lock, jonka tila näkyy tekstinä. Issuessa kohta 3b on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Kokeile orientaatiowidgetiä", missa: "VS Code, terminaali ja Vektoripaja, 3D-näkymän kulma", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Avaa tiedosto testiaineisto/oma-piirros.svg Avaa-painikkeella ([[ohje:tiedostoikkuna]]) ja napsauta orientaatiowidgetin akseleita yksi kerrallaan.", naet: "Jokaisen napsautuksen jälkeen kamera katsoo mallia suoraan napsautetun akselin suunnasta. Kaukana olevat osat näyttävät yhä pienemmiltä, ja se on oikein. Tämä tarkistus on kohdan Orientaatiowidget ja view lock tarkistuslistan ensimmäinen rivi.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Tee testi 14", missa: "Vektoripaja, painike View lock ja 3D-näkymä", tee: "Paina painike View lock päälle. Pidä hiiren vasen painike pohjassa 3D-näkymässä, vedä sivulle ja kirjoita paperille, mitä näkymälle tapahtui.", naet: "Näkymä ei käänny, koska view lock estää kameran kiertymisen. Kirjaat havaitun tuloksen issueen askeleessa 4. Tämä tarkistus on tarkistuslistan toinen rivi." },
            { otsikko: "Kerro ohjaajalle, jos kamera ei valmistu", missa: "Teams, torstaina, jos osatehtävät 4–6 eivät ole vielä valmiit", tee: "Kopioi viesti, täydennä se ja lähetä se ohjaajalle. Ohje: [[ohje:teams]]. Liitä sama teksti kameran kortin issueen kommentiksi.", naet: "Viesti on Teamsissa ja issuessa. Ohjaaja päättää siirrosta. Kun odotat vastausta, jatka kameran tekemistä osatehtävistä 4–6. Jos ohjaaja ei ole vastannut viikon viimeisen työpäivän aamuna, lähetä muistutus: [[pohja:muistutus-46]]. Jos vastausta ei tule sinäkään päivänä, kamera siirtyy viikon 47 alkuun. Jos osatehtävät 4–6 valmistuivat ennen torstaita, rastita tämä osatehtävä.", koodi: "Hei, kamera ei valmistu viikolla 46. Ehdotan, että teen sen viikon 47 alussa.\nKameran kortin issue: #\nMihin jäin: ", koodiOtsikko: "Viesti ohjaajalle: kopioi tämä" },
            { vanha: 0, otsikko: "Tee kameran kortti loppuun", missa: "Jos kamera on valmis: työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleet 4–6 järjestyksessä, ja käy askeleessa 4 testin 14 jälkeen kohdan Orientaatiowidget ja view lock tarkistuslista läpi kommenttipohjalla.", naet: "Kameran kortin issue on suljettu, ja siinä ovat testin 14 odotettu ja havaittu tulos sekä tarkistuslistan kommentti. Tarkistuslistaa ei tarvitse kopioida. Jos kamera siirtyy viikolle 47, jätä tämä osatehtävä rastittamatta ja avaa seuraava työvaihe napsauttamalla sen otsikkoa. Teet tämän osatehtävän [[vk 47|viikolla 47]].", koodi: "Tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ", koodiOtsikko: "Kommentti issueen: kopioi tämä" }
          ],
          valmis: "Orientaatiowidgetin akselin napsautus kääntää näkymän suoraan, view lock estää kierron ja testi 14 menee läpi, tai kameran siirto viikolle 47 on sovittu.",
          tallenna: "Koodi GitHubiin. Kameran testitulos, tarkistuslistan kommentti ja mahdollinen siirtopäätös kameran kortin issueen.",
          apu: {
            otsikko: "Orientaatiowidget ja view lock",
            tree: "näkymä: plotter.add_camera_orientation_widget()\nview lock: plotter.enable_2d_style()   ·   kierto takaisin: plotter.enable_trackball_style()",
            actions: [
              "Orientaatiowidget: `plotter.add_camera_orientation_widget()`. Valmiit kuvakulmat saat myös painikkeisiin: `plotter.view_xy()`, `plotter.view_xz()` ja `plotter.view_yz()`.",
              "View lock vaihtaa hiiren ohjaustavan: `plotter.enable_2d_style()` sallii siirron ja zoomin mutta ei kiertoa. `plotter.enable_trackball_style()` palauttaa kierron."
            ],
            code: "KAMERAN TARKISTUSLISTA\n[ ] orientaatiowidgetin akseli kääntää kameran suoraan akselin suuntaan\n[ ] view lock estää kierron (testi 14) ja näkyy painikkeessa tekstinä",
            test: "Paina painike View lock päälle. Pidä hiiren vasen painike pohjassa 3D-näkymässä ja vedä sivulle. Näkymän ei pidä kääntyä.",
            links: [
              ["PyVista: add_camera_orientation_widget", "https://docs.pyvista.org/api/plotting/_autosummary/pyvista.Plotter.add_camera_orientation_widget.html"]
            ]
          },
          sanat: ["orientaatiowidget", "suora näkymä"]
        },
        "46-6": {
          perii: ["46-3"],
          miksi: "Kun kamera siirtyy, tallennat keskeneräisen työn ja sen tilan. Silloin jatkat viikolla 47 siitä, mihin jäit, ja maanantain Copilot tietää tilanteen.",
          osat: [
            { otsikko: "Avaa tilatiedosto", missa: "Jos kamera siirtyy viikolle 47: VS Code, Explorer", tee: "Avaa tiedosto PROJEKTIN-TILA.md. Ohje: [[ohje:avaa-tiedosto]]. Tiedosto on repositoryn juuressa.", naet: "Tiedosto on auki. Siinä on otsikko ## Seuraavana. Jos kamera valmistui viikolla 46, rastita tämän työvaiheen kaikki osatehtävät tekemättä niitä." },
            { otsikko: "Kirjoita kamera kohtaan Seuraavana", missa: "Jos kamera siirtyy viikolle 47: tiedosto PROJEKTIN-TILA.md, otsikko ## Seuraavana", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Paina alanuolinäppäintä, End ja Enter, ja kirjoita rivi, jossa ovat sanat kamera kesken ja kameran kortin issuen numero.", naet: "Otsikon ## Seuraavana jälkeen on uusi rivi, esimerkiksi - Kamera kesken, issue #14. Tiedosto tallentuu seuraavan osatehtävän commitissa.", koodi: "## Seuraavana", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tee commit ja push ilman Closes-riviä", missa: "Jos kamera siirtyy viikolle 47: VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Käytä tätä commit-viestiä, jossa ei ole riviä Closes #N, koska kameran kortti jatkuu viikolla 47.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet keskeneräisen kameran tiedostot ja tiedoston PROJEKTIN-TILA.md muutokset. Kameran kortin issue on yhä auki. Seuraava työvaihe Julkaise putki ja suorat näkymät aukeaa, kun napsautat sen otsikkoa.", koodi: "Tallenna keskeneräinen kamera viikolle 47", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Keskeneräinen kamera ja tilatiedoston rivi ovat GitHubissa, ja kameran kortin issue on auki. Jos kamera valmistui, tämän työvaiheen osatehtävät on rastitettu tekemättä.",
          tallenna: "Keskeneräinen kameran koodi ja tilatiedosto PROJEKTIN-TILA.md GitHubiin.",
          esimerkki: "Reseptikirjan rivi kohdassa Seuraavana: - Reseptin haku kesken, issue #8.",
          eiRiita: "- kesken\nRivistä ei näe, mikä työ on kesken eikä minkä issuen työ jatkuu.",
          sanat: []
        },
        "46-5": {
          perii: ["46-3"],
          miksi: "Julkaisu tuo putken ja suorat näkymät asiakkaiden kokeiltavaksi.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi ja dokumentit ovat GitHubissa." },
            { otsikko: "Tee tagi v0.0.46", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.0.46", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.46 -> v0.0.46. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.0.46", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.0.46 on vihreä. Viikon versio on [[github:releases|Releases-sivulla]]." }
          ],
          valmis: "Release v0.0.46 on GitHubissa, ja Actions-ajo on vihreä.",
          tallenna: "Release v0.0.46 GitHubiin.",
          sanat: []
        }
      },
      pohjat: [
        { tunnus: "muistutus-46", otsikko: "Muistutus ohjaajalle kamerasta (Teams)", teksti: "Hei, muistutan torstain viestistäni: kamera ei valmistu viikolla 46. Ehdotan, että teen sen viikon 47 alussa. Sopiiko tämä?\nKameran kortin issue: #" }
      ],
      sykli: true
    },
    47: {
      type: "feature",
      feature: "Käyttäjä voi valita, siirtää, kiertää ja skaalata mallin osia.",
      excerpt: "Osia pitää voida valita, siirtää, kiertää ja skaalata.",
      connection: "Kun osien muodot ovat valmiit, käyttäjän pitää voida koota niistä kokonainen malli. Tällä viikolla lisäät osien valinnan, siirron, kierron ja skaalauksen. Aiemmin rakennettu hierarkia varmistaa, että esimerkiksi lapsiosa liikkuu vanhempansa mukana.",
      deliverable: "Pakollisen ytimen tilanne käsitelty palaverissa · testi 15 · valinta, siirto, kierto ja skaalaus transformipaneelissa · viikon release.",
      why: "Transformi tarkoittaa siirtoa, kiertoa ja skaalausta. Ilman transformeja mallin osat jäävät siihen, mihin tuonti ne toi.",
      done: "Osan voi valita [[tiedosto:suunnitelma|suunnitelmasi]] mukaan. Siirto, kierto ja skaalaus toimivat numerokentillä ja pikanäppäimillä. Testi 15 menee läpi, tai siitä on havaintoissue.",
      record: "Pakollisen ytimen tilanne ja palaverin päätös, testin 15 tulos ja maailmamuunnoksen laskenta selityspohjalla. Työnäytteet: transformipaneelin kortin issuen numero ja sen kommentti Sovittu viikkopalaverissa; pikanäppäinten kortin issuen numero; kameran kortin issuen numero, jos kamera siirtyi tälle viikolle; havaintoissuen numero, jos teit sen; README-commitin tunnus; [[tiedosto:suunnitelma|suunnitelma.md]]-commitin tunnus, jos pakollinen ydin oli myöhässä; releasen v0.0.47 osoite. Kirjoita kohtaan Missä työnäyte on? nämä näyttömatriisin vaatimukset: testaa ohjelman toimintoja; [[naytto|tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia]]; [[naytto|tulkitsee suunnitelmia ja toteuttaa ohjelmiston toimintoja]]; sopii tehtävistä tiimin muiden jäsenten kanssa; jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi; kehittää ohjelmiston toimintalogiikkaa; käyttää versionhallintaa; julkaisee ohjelman tuotantoympäristöön; käyttää ohjelmistokomponenttikirjaston tärkeimpiä toimintoja ja työkaluja; suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen.",
      funktio: "maailmamuunnoksen laskenta (testi 15)",
      skills: ["Toiminnot [[tiedosto:suunnitelma|suunnitelman]] mukaan", "Solmupuun käyttö", "Havaintojen kirjaus"],
      termit: ["transformi", "transformipaneeli"],
      tehtavat: {
        "47-1": {
          versio: "2026-10-05",
          miksi: "Pakollisen ytimen pitää olla valmis asiakkaiden kokeiluun [[vk 51|viikolla 51]]. Viikkopalaverissa katsotte ohjaajan kanssa, onko pakollinen ydin aikataulussa.",
          osat: [
            { vanha: 0, otsikko: "Tarkista pakollisen ytimen toiminnot", missa: "Selain, Vektoripajan sivu ja paperi", tee: "Lue [[toimeksianto#pakollinen-ydin|toimeksiannon kohdasta Ehdotettu toteutustapa]] kappale, joka alkaa sanoilla Pakollinen ydin ennen joulua. Kirjoita paperille listan jokainen rivi ja sen perään valmis, kesken tai tulossa.", naet: "Valmis tarkoittaa, että toiminto toimii sovelluksessa omalla piirroksellasi ja toiminnon viikon testit menevät läpi. Kesken tarkoittaa, että toiminnon viikko on menossa tai ohi, mutta toiminto ei ole vielä valmis. Tulossa tarkoittaa, että toiminnon viikko on vasta edessä. Tämän viikon toiminto (valinta, siirto, kierto ja skaalaus) on kesken. Listaa ei tarvitse kopioida. Sinulla on lista palaveria varten.", koodi: "SVG-tuonti · viikko 43\nLayerit ja ryhmät osiksi · viikko 44\nPyörähdyskappale 3–32 segmentillä · viikko 45\nPutki 3–8 sivulla · viikko 46\nSuorat näkymät ja view lock · viikko 46 (tai 47, jos kamera siirtyi)\nValinta, siirto, kierto ja skaalaus · viikko 47\nKiertopiste eli pivot · viikko 48\n.obj-vienti · viikko 49\nTallennus · viikko 50", koodiOtsikko: "Lista: pakollisen ytimen toiminnot ja niiden viikot" },
            { vanha: 0, otsikko: "Kerro tilanne palaverissa", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kerro, mitkä pakollisen ytimen toiminnot ovat valmiita ja mitkä kesken. Kirjoita palaverin päätös paperille.", naet: "Tiedät, onko pakollinen ydin aikataulussa. Jos ei ole, ohjaaja on päättänyt, mikä katselmoidaan keskeneräisenä ja mikä tehdään [[vk 4|viikolla 4]]. Jos pakollinen ydin on aikataulussa, rastita osatehtävät 3–5 tekemättä niitä." },
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "Jos pakollinen ydin on myöhässä: VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Osiossa C on otsikko ### Pakollisen ytimen myöhästymisen ratkaisu (viikko 47)." },
            { vanha: 0, otsikko: "Kirjoita ohjaajan päätös", missa: "Jos pakollinen ydin on myöhässä: tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Pakollisen ytimen myöhästymisen ratkaisu (viikko 47)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen ohjaajan päätös ja palaverin päivä.", naet: "Otsikon jälkeen on päivä ja päätös. Päätöksestä näkee, mikä katselmoidaan keskeneräisenä ja mikä tehdään viikolla 4.", koodi: "### Pakollisen ytimen myöhästymisen ratkaisu (viikko 47)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "Jos pakollinen ydin on myöhässä: VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa pakollisen ytimen myöhästymisen ratkaisu", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { vanha: 0, otsikko: "Tee kamera ensin, jos se siirtyi tälle viikolle", missa: "Jos kamera siirtyi viikolta 46: Vektoripajan sivu ja kameran kortin issue", tee: "Avaa [[vk 46|viikon 46]] työvaihe Rakenna suorat näkymät. Jatka sen ensimmäisestä rastittamattomasta osatehtävästä ja tee työvaihe loppuun ennen tämän viikon kortteja.", naet: "Kun avaat työsyklin kameran työvaiheen painikkeesta, se aukeaa askeleeseen, johon jäit. Kameran kortin issue on suljettu, testi 14 menee läpi, ja viikon 46 työvaiheen osatehtävä 8 Tee kameran kortti loppuun on rastitettu. Jos kamera valmistui jo viikolla 46, rastita tämä osatehtävä." }
          ],
          valmis: "Pakollisen ytimen tilanne on sovittu palaverissa. Jos pakollinen ydin on myöhässä, ohjaajan päätös on GitHubissa.",
          tallenna: "Palaverin päätös transformipaneelin kortin issueen ja viikon kirjaukseen viikon viimeisenä työpäivänä. Jos pakollinen ydin on myöhässä, ohjaajan päätös tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan ratkaisu: \"Ohjaajan päätös 17.11.2026: Reseptin haku katselmoidaan keskeneräisenä. Haun lajittelu tehdään viikolla 4.\"",
          eiRiita: "\"Myöhässä, sovittu.\" Päivä puuttuu, eikä siitä näe, mikä katselmoidaan keskeneräisenä ja mikä tehdään viikolla 4.",
          sanat: []
        },
        "47-4": {
          perii: ["47-1"],
          miksi: "Kun lapsiosa liikkuu vanhempansa mukana, malli pysyy koossa. Päätät odotetun tuloksen ennen koodia.",
          osat: [
            { otsikko: "Päätä vanhemman ja lapsen lähtöpaikat", missa: "Paperi tai muistiinpanot", tee: "Testi 15 käyttää vanhempaa ja sen lasta. Päätä vanhemman paikka x ja lapsen oma siirto vanhemmasta x-suunnassa, esimerkiksi 0 ja 2, ja kirjoita ne paperille.", naet: "Paperilla on kaksi lukua. Lapsen maailmakoordinaatti x ennen siirtoa on niiden summa, esimerkissä 0 + 2 = 2." },
            { otsikko: "Laske testin 15 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testissä vanhempaa siirretään 10 yksikköä x-suunnassa. Laske, mikä lapsen maailmakoordinaatti x on siirron jälkeen, ja kirjoita luku paperille.", naet: "Paperilla ovat testin 15 syöte ja odotettu tulos: vanhemman paikka, lapsen oma siirto, vanhemman siirto 10 sekä lapsen maailmakoordinaatti x ennen siirtoa ja sen jälkeen. Kirjoitat ne kortin viestipohjaan ja testiin, kun rakennat osien muokkaamisen." },
            { otsikko: "Etsi maailmamuunnoksen rajapinta", missa: "VS Code, tiedosto tests/test_hierarkia.py", tee: "Avaa tiedosto tests/test_hierarkia.py ([[ohje:avaa-tiedosto]]) ja etsi hakusana. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Kirjoita paperille testissä kutsutun funktion nimi, syöte ja paluuarvo sekä tiedoston alun import-rivit.", naet: "Kursori on [[vk 44|viikon 44]] maailmamuunnoksen lisätestissä. Testin rivillä, jolla funktiota kutsutaan, ovat funktion nimi ja sulkeissa syöte, esimerkiksi solmu. Paluuarvo on solmun maailmamuunnos eli 4×4-matriisi. Import-rivit ovat tiedoston ensimmäiset rivit, ja ne alkavat sanalla from tai import. Testi 15 kutsuu samaa funktiota lapselle.", koodi: "test_lisatesti_maailmamuunnos", koodiOtsikko: "Hakusana: kopioi tämä hakuun" }
          ],
          valmis: "Testin 15 syöte ja odotettu tulos sekä maailmamuunnoksen rajapinta ja import-rivit ovat paperilla ennen toteutusta.",
          tallenna: "Odotettu tulos ja maailmamuunnoksen rajapinta kortin issueen, kun suunnittelet osien muokkaamisen. Kirjoitat testin kansioon tests työsyklin kohdassa 3a.",
          esimerkki: "Toinen tilanne: hylly ja sen päällä oleva kirja. Hylly on kohdassa x = 0, ja kirja on 2 yksikköä hyllyn alusta eli kohdassa x = 2. Hyllyä siirretään 5 yksikköä x-suunnassa. Odotettu tulos: kirja on kohdassa x = 7.",
          eiRiita: "\"Lapsi liikkuu mukana.\" Luku puuttuu, joten testi ei voi tarkistaa mitään.",
          sanat: ["maailmamuunnos", "rajapinta"]
        },
        "47-2": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Käyttäjä kokoaa mallin sijoittamalla sen osat oikeisiin paikkoihin. Kortti kertoo ensin, miten valinta ja kentät toimivat.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Lue valinnan päätös", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]]", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Lue päätöksesi otsikon jälkeen.", naet: "Tiedät, valitaanko napsautuksella lapsi vai koko kappale. Kirjoitat päätöksen korttiin.", koodi: "### Valinnan toiminta (viikko 44)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Suunnittele transformipaneelin kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (valinnan päätöksesi ja viisi numerokenttää: siirto X, siirto Y, siirto Z, kierto ja skaalaus), Rajapinta (maailmamuunnos paperiltasi) ja yksi Testi-rivi testille 15.", naet: "Copilot on kirjoittanut kortin. Hyväksymiskriteereissä ovat valinta sekä siirto, kierto ja skaalaus numerokentillä. Pivotin kentät tulevat paneeliin vasta [[vk 48|viikolla 48]], vaikka sanaston selite mainitsee ne. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet ([[ohje:issue]]), mutta ohita sen viimeinen kohta, kommentti Sovittu viikkopalaverissa.", naet: "Kortin issue on GitHubissa, ja siinä on testin 15 odotettu tulos. Transformipaneelin kortti on viikon ensimmäinen kortti. Kortin Sovittu viikkopalaverissa -kommentin kirjoitat seuraavassa osatehtävässä. Siinä on valmis kommenttipohja. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Lisää palaverin päätös issueen", missa: "Selain, kortin issue, kenttä Add a comment", tee: "Kopioi kommentti ja liitä se kortin issueen kenttään Add a comment. Kirjoita pp.kk. tilalle palaverin päivä, poista väärä vaihtoehto, täydennä päätös paperiltasi ja valitse Comment.", naet: "Kommentti näkyy issuessa. Siinä ovat palaverin päivä, pakollisen ytimen tilanne ja palaverin päätös.", koodi: "Sovittu viikkopalaverissa pp.kk.: \nPakollinen ydin: aikataulussa / myöhässä\nPalaverin päätös: ", koodiOtsikko: "Kommentti issueen: kopioi tämä" }
          ],
          valmis: "Transformipaneelin kortti on issuena GitHubissa, ja siinä on palaverin päätös.",
          tallenna: "Kortin issue, testin 15 odotettu tulos ja palaverin päätös GitHubissa.",
          sanat: ["transformi", "transformipaneeli"]
        },
        "47-6": {
          perii: ["47-2"],
          tyosykli: true,
          miksi: "Testi 15 ja kokeilu varmistavat, että lapset liikkuvat vanhemman mukana.",
          osat: [
            { otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen.", naet: "Työsykli aukeaa. Askel 3 Rakenna on auki, koska jatkat transformipaneelin korttia." },
            { otsikko: "Kirjoita testi 15", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, kansio tests", tee: "Luo kansioon tests uusi tiedosto test_transformit.py. Ohje: [[ohje:uusi-tiedosto]]. Kirjoita tiedoston alkuun paperisi import-rivit ja tee sitten kohta 3a testille 15 paperisi luvuilla.", naet: "Tiedoston alussa ovat samat import-rivit kuin tiedostossa tests/test_hierarkia.py. Tiedostossa on funktio test_15_…, ja sen kommentissa ovat maailmamuunnoksen funktion nimi, vanhemman paikka, lapsen oma siirto, vanhemman siirto 10 ja lapsen odotettu maailmakoordinaatti x. Issuessa kohta 3a on rastitettu. Valitse lopuksi Palaa työvaiheeseen." },
            { otsikko: "Toteuta transformipaneeli", missa: "Työsykli, askel 3 Rakenna, kohta 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Toteuta kortti kohdan 3b ohjeilla kortin kaistalla.", naet: "Transformipaneelissa ovat kentät siirto X, siirto Y, siirto Z, kierto ja skaalaus. Issuessa kohta 3b on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Kokeile, seuraavatko lapset", missa: "VS Code, terminaali ja Vektoripaja · työvaiheen kohta Transformipaneeli ja lapset", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Tee kohdan Transformipaneeli ja lapset tarkistustesti, ja napsauta lopuksi kenttää siirto X ja paina Tab muutaman kerran.", naet: "Kun siirrät ylintä osaa, sen lapset liikkuvat mukana. Kun siirrät lasta, vanhempi pysyy paikallaan. Tab siirtää kohdistuksen kentästä seuraavaan. Nämä ovat tarkistuslistan rivit lapset seuraavat vanhempaa ja kentät toimivat näppäimistöllä.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista, että maailmamuunnos on yhdessä funktiossa", missa: "VS Code, haku koko projektista", tee: "Paina Ctrl+Shift+F ja kirjoita hakukenttään maailmamuunnoksen funktion nimi paperiltasi. Lue tulokset.", naet: "Tulokset näkyvät vasemmassa reunassa tiedostoittain. Rivi, joka alkaa sanalla def, on vain yhdessä tiedostossa. Muissa tiedostoissa funktiota vain kutsutaan. Silloin tarkistuslistan rivi maailmamuunnos lasketaan yhdessä funktiossa täyttyy. Explorer palaa näkyviin näppäimillä Ctrl+Shift+E." },
            { otsikko: "Tee kortti loppuun", missa: "Työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleet 4–6 järjestyksessä, ja käy askeleessa 4 testin 15 jälkeen kohdan Transformipaneeli ja lapset tarkistuslista läpi kommenttipohjalla.", naet: "Kortin issue on suljettu, ja siinä ovat testin 15 kirjaus ja tarkistuslistan kommentti. Tarkistuslistan sana näppäimistöllä tarkoittaa tässä kortissa kenttiä ja Tab-näppäintä. Pikanäppäimet tarkistat pikanäppäinten kortissa. Tarkistuslistaa ei tarvitse kopioida.", koodi: "Tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ", koodiOtsikko: "Kommentti issueen: kopioi tämä" }
          ],
          valmis: "Valinta, siirto, kierto ja skaalaus toimivat sovitulla tavalla, ja lapset seuraavat vanhempaa.",
          tallenna: "Koodi ja testi GitHubiin. Testin 15 tulos ja tarkistuslistan kommentti kortin issueen. Commit-viestin rivi Closes #N linkittää muutoksen issueen.",
          esimerkki: "Testin 15 kirjaus issuessa: \"Testi 15: vanhempi x +10. Odotin, että lapsen maailmakoordinaatti x muuttuu saman verran. Havaittu: muuttui saman verran. Läpi.\"",
          eiRiita: "\"Lapset seuraavat, testattu.\" Kirjauksesta ei näe syötettä, odotusta eikä havaintoa.",
          apu: {
            otsikko: "Transformipaneeli ja lapset",
            tree: "Solmu \"Vartalo\"      ← transformipaneeli muuttaa tämän omaa muunnosta\n  └─ Solmu \"Pää\"        maailmamuunnos = Vartalon maailma @ Pään oma\n       └─ Solmu \"Korvat\"",
            actions: [
              "Tee paneeliin viisi numerokenttää Qt:n `QDoubleSpinBox`-elementeillä: siirto X, siirto Y, siirto Z, kierto ja skaalaus. Anna jokaiselle kentälle nimi `QLabel`illa.",
              "Kun kentän arvo muuttuu, päivitä valitun solmun oma muunnos. Laske sitten koko puun maailmamuunnokset uudelleen. Aseta ne PyVistan kappaleille: `aktori.user_matrix = maailma`.",
              "Lapsi ei liiku mukana itsestään, koska PyVistan kappaleet eivät ole sisäkkäin. Siksi lapsen paikka lasketaan [[vk 44|viikon 44]] maailmamuunnoksella. Myös testi 15 käyttää sitä.",
              "Raahattavat kahvat 3D-näkymässä kuuluvat tärkeään jatkoon ([[vk 5|viikko 5]])."
            ],
            code: "TRANSFORMIEN TARKISTUSLISTA\n[ ] valinta toimii suunnitelman mukaan\n[ ] siirto, kierto ja skaalaus numerokentillä ja näppäimistöllä\n[ ] lapset seuraavat vanhempaa (testi 15)\n[ ] maailmamuunnos lasketaan yhdessä funktiossa\n[ ] kentillä on nimi, ja ne toimivat näppäimistöllä",
            test: "Avaa tiedosto testiaineisto/oma-piirros.svg. Ohje: [[ohje:tiedostoikkuna]]. Valitse ylin ryhmä, esimerkiksi Vartalo, ja kirjoita kenttään siirto X uusi luku, esimerkiksi 10. Ryhmän lasten, esimerkiksi osien Pää ja Korvat, pitää liikkua mukana. Valitse sitten lapsi ja muuta sen kenttää siirto X. Vanhemman ei pidä liikkua.",
            links: [
              ["Qt for Python: QDoubleSpinBox", "https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QDoubleSpinBox.html"]
            ]
          },
          sanat: []
        },
        "47-5": {
          perii: ["47-2"],
          tyosykli: true,
          miksi: "Pikanäppäimillä osia voi siirtää, kiertää ja skaalata ilman hiirtä.",
          osat: [
            { otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { otsikko: "Suunnittele pikanäppäinten kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Kun viestipohja on Copilotissa, maalaa ehdotus-rivin ___, kopioi esimerkkijoukko Kopioi-painikkeella, paina Ctrl+V ja täytä Testi-rivi yhdellä pikanäppäimellä.", naet: "Testi-rivillä lukee esimerkiksi Testi käsin: kun syöte on Ctrl+R, tuloksen pitää olla, että valittu osa kiertyy 15 astetta. Numeron tilalla on käsin, koska testi tehdään käsin. Omat näppäimet saat kirjoittaa ehdotus-riville esimerkkijoukon sijaan. Copilot on kirjoittanut kortin, ja hyväksymiskriteereissä on jokaisen pikanäppäimen näppäinyhdistelmä ja askeleen koko. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "siirron, kierron ja skaalauksen pikanäppäimet: Ctrl+nuolinäppäimet siirtävät valittua osaa 1 yksikön x- ja y-suunnassa, Ctrl+Page Up ja Ctrl+Page Down 1 yksikön z-suunnassa, Ctrl+R ja Ctrl+Shift+R kiertävät 15 astetta, Ctrl++ ja Ctrl+- skaalaavat 10 %", koodiOtsikko: "Esimerkkijoukko ehdotukseen: kopioi tai muokkaa" },
            { otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet. Ohje: [[ohje:issue]].", naet: "Kortin issue on GitHubissa. Siinä ovat pikanäppäimet ja askeleiden koot. Pikanäppäinten kortti ei ole viikon ensimmäinen kortti, joten et kirjoita kommenttia Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Toteuta pikanäppäimet", missa: "Työsykli, askel 3 Rakenna, kohdat 3a ja 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Pikanäppäinten testi tehdään käsin: kirjoita sen odotettu tulos issueen kommentiksi ja rastita 3a. Toteuta sitten kortti kohdan 3b ohjeilla kortin kaistalla.", naet: "Issuessa on käsin tehtävän testin odotettu tulos. Pikanäppäimet toimivat sovelluksessa. Issuessa kohta 3b on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Tee pikanäppäinten testi", missa: "Työsykli, askel 4 Tarkista · Vektoripaja", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleen 4 ohjeet sovelluksessa painike View lock päällä, ja kirjoita kirjauspohjan riville Testi __ numeron tilalle käsin.", naet: "Sovellus käynnistyy koodilaatikon komennolla. Ohje: [[ohje:komento]]. Osa siirtyy, kiertyy ja skaalautuu pikanäppäimillä, eikä kamera käänny. Issuessa on testin kirjaus, jonka ensimmäisellä rivillä lukee esimerkiksi Testi käsin: pikanäppäimet. Kohta 4 on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Raportoi ja kirjaa kortti", missa: "Työsykli, askeleet 5 Raportoi ja 6 Kirjaa", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 5. Tee askeleet 5 ja 6, ja kirjoita [[tiedosto:ai-loki|AI-lokin]] merkinnän Aineistoviite-riville testin numeron tilalle käsin.", naet: "Kortin issue on suljettu. Changes-listassa ei ollut testitiedostoa, koska testi tehtiin käsin." }
          ],
          valmis: "Siirto, kierto ja skaalaus toimivat pikanäppäimillä, ja kortin issue on suljettu.",
          tallenna: "Koodi GitHubiin. Käsin tehdyn testin tulos kortin issueen.",
          apu: {
            otsikko: "Pikanäppäimet",
            actions: [
              "Pikanäppäin: `QShortcut(QKeySequence(\"Ctrl+Right\"), self)`."
            ]
          },
          sanat: ["view lock"]
        },
        "47-7": {
          perii: ["47-2"],
          miksi: "README kertoo käyttäjälle, mitä pikanäppäimet tekevät.",
          osat: [
            { otsikko: "Avaa README", missa: "VS Code, Explorer", tee: "Avaa tiedosto README.md. Ohje: [[ohje:avaa-tiedosto]]. Paina Ctrl+End ja sitten Enter.", naet: "README.md on auki. Kursori on tiedoston lopussa tyhjällä rivillä." },
            { otsikko: "Kirjoita pikanäppäimet README:hen", missa: "README.md, tiedoston loppu", tee: "Kirjoita otsikko ## Pikanäppäimet. Kirjoita sen jälkeen jokaisesta pikanäppäimestä oma listan rivi, jossa on näppäin ja mitä se tekee. Ohje: [[ohje:markdown]].", naet: "README:ssä on otsikko Pikanäppäimet ja oma listan rivi jokaisesta pikanäppäimestä, esimerkiksi - Ctrl+R: kiertää valittua osaa 15 astetta." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston README.md muutokset.", koodi: "Kirjaa pikanäppäimet README:hen", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Pikanäppäimet ovat tiedostossa README.md GitHubissa.",
          tallenna: "Pikanäppäimet tiedostossa README.md GitHubissa.",
          esimerkki: "Reseptikirjan README:\n## Pikanäppäimet\n- Ctrl+N: uusi resepti\n- Ctrl+F: hae reseptiä\n- Delete: poista valittu resepti",
          eiRiita: "## Pikanäppäimet\nSovelluksessa on pikanäppäimiä.\nRiviltä ei näe, mikä näppäin tekee mitä.",
          sanat: []
        },
        "47-3": {
          versio: "2026-10-05",
          miksi: "Julkaistu väliversio näyttää, toimivatko aiemmat osat yhdessä.",
          osat: [
            { vanha: 0, otsikko: "Aja testit", missa: "VS Code, terminaali", tee: "Aja testit. Ohje: [[ohje:pytest]].", naet: "Testin 15 rivillä, esimerkiksi tests/test_transformit.py::test_15_lapsi_seuraa, lukee PASSED. Tulosteen viimeisellä rivillä ei lue failed." },
            { vanha: 0, otsikko: "Luo havaintoissue, jos testi 15 ei mene läpi", missa: "Jos testi 15 ei mennyt läpi: selain, GitHub", tee: "Luo havaintoissue. Ohje: [[ohje:havaintoissue]]. Kirjoita kohtaan Mitä odotin testin 15 odotettu tulos ja kohtaan Mitä tapahtui havaittu tulos.", naet: "Havaintoissue on GitHubissa, ja sen labelina on havainto. Kaksi yritystä on käytetty: testin 15 ajo kortin askeleessa 4 ja ajo tämän työvaiheen osatehtävässä 1. Siksi et yritä uutta korjausta. Sovit jatkosta ohjaajan kanssa seuraavassa viikkopalaverissa. Jos testi 15 meni läpi tai teit siitä havaintoissuen jo kortin askeleessa 4, rastita tämä osatehtävä tekemättä sitä." },
            { vanha: 1, otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi on GitHubissa." },
            { vanha: 1, otsikko: "Tee tagi v0.0.47", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.0.47", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.47 -> v0.0.47. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.0.47", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.0.47 on vihreä. Viikon versio on [[github:releases|Releases-sivulla]]." }
          ],
          valmis: "Testi 15 menee läpi, tai poikkeamasta on havaintoissue ja jatko on sovittu.",
          tallenna: "Testitulos kortin issueen tai havaintoissue GitHubiin. Release v0.0.47 GitHubiin.",
          sanat: ["havaintoissue"]
        }
      },
      sykli: true
    },
    48: {
      type: "feature",
      feature: "Käyttäjä voi säätää pistettä, jonka ympäri osa kiertää ja skaalautuu.",
      connection: "Osan siirtäminen ja kiertäminen ei vielä riitä, jos liike tapahtuu väärän pisteen ympäri. Tällä viikolla käyttäjä saa valita pivotin eli kierto- ja skaalauspisteen prosenttikentillä. Pivot täydentää osien muokkausta ja tekee esimerkiksi nivelen ympäri kääntymisestä hallittavaa.",
      deliverable: "Pivotin syötteen tarkistuksen rajapinta · testit 16–18 · pivot · pivotin prosenttikentät transformipaneelissa · viikon release.",
      why: "Ilman pivotia korva kiertyy oman keskipisteensä ympäri eikä kiinnityskohdan ympäri. Prosenttisyöttö on tarkempi kuin hiirellä vetäminen.",
      done: "Pivot 50/50/50 on keskipisteessä, prosentit muuttavat pivotin paikkaa, virheellinen syöte käsitellään kriteerisi mukaan, ja testit 16–18 menevät läpi.",
      record: "Pivotin syötteen tarkistus selityspohjalla ja testien 16–18 tulokset. Työnäytteet: [[tiedosto:suunnitelma|suunnitelma.md]]-commitin tunnus (tarkistuksen rajapinta), tarkistuksen kortin issuen numero ja sen kommentti Sovittu viikkopalaverissa, pivotin ja kenttien korttien issuenumerot ja releasen v0.0.48 osoite. Kirjoita kohtaan Missä työnäyte on? nämä näyttömatriisin vaatimukset: testaa ohjelman toimintoja; käyttää rakenteista ohjelmointia toteutuksissa; [[naytto|tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia]]; sopii tehtävistä tiimin muiden jäsenten kanssa; jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi; kehittää ohjelmiston toimintalogiikkaa; käyttää versionhallintaa; julkaisee ohjelman tuotantoympäristöön; käyttää ohjelmistokomponenttikirjaston tärkeimpiä toimintoja ja työkaluja; suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen.",
      funktio: "pivotin syötteen tarkistus (testi 18)",
      skills: ["Valinta: syötteen tarkistus", "Toimintalogiikka: pivotin laskenta", "Käyttöliittymä vaatimuksen mukaan"],
      termit: ["pivot"],
      tehtavat: {
        "48-1": {
          versio: "2026-10-05",
          miksi: "Määrittelet kiertopisteen laskennan ja virheellisen syötteen käsittelyn tarkasti ennen toteutusta.",
          osat: [
            { vanha: 2, otsikko: "Päätä virheellisen syötteen käsittely", missa: "Paperi tai muistiinpanot", tee: "Testin 18 kriteeri on oma valintasi: rajaus tai hylkäys. Valitse vaihtoehdoista yksi ja kirjoita valintasi paperille.", naet: "Paperilla on valintasi. Tekstiä ei voi rajata, joten teksti 'abc' antaa virheen ValueError kummassakin vaihtoehdossa. Virhe ValueError tarkoittaa, että funktio ei palauta lukua vaan ilmoittaa virheestä.", koodi: "Rajaus: −10 → 0 · 150 → 100 · 'abc' → virhe ValueError\nHylkäys: −10 → virhe ValueError · 150 → virhe ValueError · 'abc' → virhe ValueError", koodiOtsikko: "Vaihtoehdot testin 18 kriteeriksi" },
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### Rajapinnat (viikot 44, 48 ja 49) ohjerivin jälkeen. Viikon 44 rajapinta on kursorin alapuolella.", koodi: "### Rajapinnat (viikot 44, 48 ja 49)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kirjoita pivotin tarkistuksen rajapinta", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Rajapinnat (viikot 44, 48 ja 49)", tee: "Kopioi mallirivi ja paina Ctrl+V. Ohje: [[ohje:markdown]]. Kirjoita ___-kohtiin funktion nimi ja paluuarvo kriteerisi mukaan.", naet: "Otsikon jälkeen on viikon 48 rivi, jossa ovat nimi, syöte ja paluuarvo. Paluuarvo noudattaa testin 18 kriteeriäsi: luku 0–100 tai virhe ValueError.", koodi: "- ___ · syöte: pivot-prosentti, jonka käyttäjä kirjoittaa (luku tai teksti) · paluuarvo: ___", koodiOtsikko: "Mallirivi: kopioi ja täytä" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjoita pivotin tarkistuksen rajapinta", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { vanha: 1, otsikko: "Valitse testien kappale", missa: "Paperi tai muistiinpanot", tee: "Päätä testikappaleen rajat x-, y- ja z-suunnassa, esimerkiksi min (0, 0, 0) ja max (2, 4, 6). Kirjoita ne paperille.", naet: "Sinulla on kappaleen rajat. Niillä lasket testien 16 ja 17 odotetut pisteet." },
            { vanha: 1, otsikko: "Laske testien 16 ja 17 odotetut tulokset", missa: "Paperi tai muistiinpanot", tee: "Laske kaavalla pivotin paikka, kun prosentit ovat 50/50/50, 0/0/0 ja 100/100/100. Kirjoita kolme pistettä paperille.", naet: "Testi 16 on pivot keskellä eli 50/50/50. Testi 17 on pivot reunoilla eli 0 % ja 100 %. Sinulla on kolme pistettä muodossa (x, y, z).", koodi: "pivot = min + (max − min) × prosentti / 100\nLaske jokainen akseli erikseen: x, y ja z.\nEsimerkki yhdellä akselilla: min 1, max 5, prosentti 25 → 1 + (5 − 1) × 25 / 100 = 2", koodiOtsikko: "Laskukaava ja esimerkki" },
            { otsikko: "Päätä pivotin laskennan rajapinta", missa: "Paperi tai muistiinpanot", tee: "Testit 16 ja 17 tarkistavat funktion, joka laskee pivotin pisteen. Päätä funktiolle nimi ja kirjoita paperille nimi, syöte ja paluuarvo.", naet: "Paperilla on rajapinta. Syötteenä ovat osan rajat min ja max sekä prosentit X, Y ja Z. Paluuarvo on pivotin piste (x, y, z). Kirjoitat rajapinnan pivotin kortin Rajapinta-riville muodossa funktio ___ saa ___ ja palauttaa ___." },
            { vanha: 1, otsikko: "Päätä testin 18 odotetut tulokset", missa: "Paperi tai muistiinpanot", tee: "Testi 18 kokeilee virheellistä pivot-syötettä: −10, 150 ja teksti 'abc'. Kirjoita paperille jokaisesta syötteestä kriteerisi mukaan, minkä luvun funktio palauttaa tai antaako se virheen ValueError.", naet: "Sinulla on kolme odotettua tulosta. Kirjoitat testien 16–18 odotetut tulokset korttien viestipohjiin ja testeihin seuraavissa työvaiheissa." }
          ],
          valmis: "Rajapinnat ja testien 16–18 odotetut tulokset ovat valmiit ennen toteutusta.",
          tallenna: "Tarkistuksen rajapinta tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa. Laskennan rajapinta ja testien 16–18 odotetut tulokset korttien issueihin seuraavissa työvaiheissa.",
          esimerkki: "Reseptikirjan rajapinta:\n- tarkista_annokset(teksti) · syöte: käyttäjän kirjoittama annosmäärä · paluuarvo: kokonaisluku 1–20 tai virhe ValueError",
          eiRiita: "\"tarkistus(x) tarkistaa syötteen.\" Rivistä ei näe syötettä eikä paluuarvoa.",
          sanat: ["pivot", "rajapinta"]
        },
        "48-2": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Tarkistus estää virheellisen pivot-syötteen, ennen kuin osaa kierretään.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele tarkistuksen kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (syötteen tarkistus puhtaana funktiona ilman Qt:ta), Rajapinta-rivin kolme ___-kohtaa (viikon 48 rivin nimi, syöte ja paluuarvo) ja kolme Testi-riviä testille 18 (syötteet −10, 150 ja 'abc').", naet: "Viikon 48 rivin näet VS Codessa tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] otsikon ### Rajapinnat (viikot 44, 48 ja 49) jälkeen. Kirjoitat rivin osat itse viestipohjan riville funktio ___ saa ___ ja palauttaa ___. Et kopioi riviä. Copilot on kirjoittanut kortin. Hyväksymiskriteereissä lukee, että tarkistus on puhdas funktio ilman Qt:ta. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet. Ohje: [[ohje:issue]].", naet: "Kortin issue on GitHubissa, ja siinä ovat testin 18 odotetut tulokset. Tarkistuksen kortti on viikon ensimmäinen kortti, joten issuessa on myös askeleen 2 kommentti, esimerkiksi Sovittu viikkopalaverissa 23.11.: teen ensin syötteen tarkistuksen ja sitten pivotin laskennan. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Kirjoita testi 18", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, kansio tests", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Tee kohta 3a: luo tiedosto tests/test_pivot.py, liitä siihen import-rivit ([[ohje:uusi-tiedosto]]) ja kirjoita testille 18 kommentti ja testifunktio.", naet: "Tiedoston alussa on kaksi riviä: import pytest ja import-rivi, jonka ___-kohdissa ovat kortin Tiedostot-kohdan moduuli ja rajapintasi funktion nimi. Rivi import pytest tarvitaan, koska testi odottaa virhettä ValueError. Testillä 18 on yksi kommentti ja yksi testifunktio test_18_…. Kommentissa ovat kaikki syötteet −10, 150 ja 'abc' ja niiden odotetut tulokset. Issuessa kohta 3a on rastitettu. Valitse lopuksi Palaa työvaiheeseen.", koodi: "import pytest\nfrom vektoripaja.___ import ___", koodiOtsikko: "Import-rivit: kopioi ja täytä ___-kohdat" },
            { vanha: 0, otsikko: "Tee tarkistuksen kortti loppuun", missa: "Työsykli, askeleet 3–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Tee kohta 3b ja askeleet 4–6 järjestyksessä, ja valitse jokaisen askeleen jälkeen Tein tämän.", naet: "Kortin issue on suljettu, ja testi 18 menee läpi. Issuessa on yksi testin 18 kommentti, jossa ovat kaikki kolme syötettä." }
          ],
          valmis: "Virheellinen syöte käsitellään kriteerisi mukaan, ja testi 18 menee läpi.",
          tallenna: "Tarkistuksen koodi ja testi GitHubiin. Testin 18 tulos kortin issueen.",
          esimerkki: "Selityspohja täytettynä rajausvaihtoehdolla: \"Funktio (oma nimesi) saa prosentin. Se palauttaa luvun 0–100 tai virheen ValueError.\nValitsee (if-ehto): jos syöte ei ole luku, antaa virheen ValueError. Jos luku on alle 0, palauttaa 0. Jos luku on yli 100, palauttaa 100.\nToistaa (silmukka tai rekursio): ei toistoa.\nTesti 18 tarkistaa virheelliset syötteet.\"\nHylkäysvaihtoehdossa luvut alle 0 ja yli 100 antavat virheen ValueError.",
          eiRiita: "\"Funktio tarkistaa syötteen.\" Selityksestä ei näe, mitä tapahtuu arvolle −10 tai tekstille.",
          sanat: ["puhdas funktio"]
        },
        "48-5": {
          perii: ["48-2"],
          tyosykli: true,
          miksi: "Pivotin avulla käyttäjä voi kiertää osaa esimerkiksi nivelen ympäri.",
          osat: [
            { otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { otsikko: "Suunnittele pivotin kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (pivotin laskenta prosenteista ja kierto pivotin ympäri), Rajapinta (laskenta paperiltasi) ja kolme Testi-riviä kappaleen rajoilla: testi 16 (50/50/50) ja testi 17 (0/0/0 ja 100/100/100).", naet: "Copilot on kirjoittanut kortin pivotin laskennasta ja kierrosta pivotin ympäri. Testi-kohdassa ovat kappaleesi rajat ja kolme pistettä paperiltasi. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet. Ohje: [[ohje:issue]].", naet: "Kortin issue on GitHubissa. Siinä ovat testien 16 ja 17 odotetut tulokset. Pivotin kortti ei ole viikon ensimmäinen kortti, joten et kirjoita kommenttia Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Lisää laskennan import-rivi", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, tiedosto tests/test_pivot.py", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Avaa tiedosto tests/test_pivot.py ([[ohje:avaa-tiedosto]]), paina Ctrl+Home, End ja Enter, liitä import-rivi ja täytä sen ___-kohdat.", naet: "Tiedoston alussa on uusi import-rivi, jossa ovat kortin Tiedostot-kohdan moduuli ja laskennan funktion nimi. Testin 18 import-rivit ovat yhä paikallaan. Loit tiedoston testille 18.", koodi: "from vektoripaja.___ import ___", koodiOtsikko: "Import-rivi laskennalle: kopioi ja täytä ___-kohdat" },
            { otsikko: "Kirjoita testit 16 ja 17", missa: "Työsykli, askel 3 Rakenna, kohta 3a · tiedosto tests/test_pivot.py", tee: "Paina Ctrl+End ja Enter. Tee kohta 3a tiedoston loppuun testeille 16 ja 17 askeleen 3 mallin mukaan.", naet: "Tiedoston lopussa ovat funktiot test_16_… ja test_17_…. Testillä 17 on yksi kommentti ja yksi testifunktio. Kommentissa ovat molemmat syötteet 0/0/0 ja 100/100/100. Testien 16 ja 17 kommenteissa ovat laskennan funktion nimi, kappaleen rajat, prosentit ja odotetut pisteet. Issuessa kohta 3a on rastitettu. Valitse lopuksi Palaa työvaiheeseen." },
            { otsikko: "Toteuta pivotin laskenta", missa: "Työsykli, askel 3 Rakenna, kohta 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Toteuta kortti kohdan 3b ohjeilla kortin kaistalla.", naet: "Pivotin laskenta ja kierto pivotin ympäri ovat koodissa. Issuessa kohta 3b on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Tee pivotin kortti loppuun", missa: "Työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleet 4–6 järjestyksessä, ja käy askeleessa 4 testien jälkeen kohdan Pivot prosentteina tarkistuslista läpi kommenttipohjalla.", naet: "Kortin issue on suljettu, ja testit 16–18 menevät läpi. Issuessa on yksi kommentti kummastakin testistä 16 ja 17 sekä tarkistuslistan kommentti. Rivi kentillä on nimi kuuluu seuraavaan työvaiheeseen, joten se on kommentissa rivien joukossa, jotka eivät täyttyneet. Tarkistuslistaa ei tarvitse kopioida. Kiertoa pivotin ympäri kokeilet sovelluksessa seuraavassa työvaiheessa, kun pivotin kentät ovat valmiit.", koodi: "Tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ", koodiOtsikko: "Kommentti issueen: kopioi tämä" }
          ],
          valmis: "Pivot 50/50/50 on keskipisteessä, prosentit muuttavat pivotin paikkaa, ja testit 16–18 menevät läpi.",
          tallenna: "Laskennan koodi ja testit GitHubiin. Testien 16 ja 17 tulokset ja tarkistuslistan kommentti kortin issueen.",
          esimerkki: "Reseptikirjan testikommentti:\n# Testi 9: skaalaa_maara(400, 50) -> 200.0 (400 g jauhoja, puolikas resepti)\nKommentissa ovat syöte ja odotettu tulos lukuna. Python käyttää desimaalipistettä.",
          eiRiita: "# Testi 16: pivot on keskellä\nKommentista puuttuvat kappaleen rajat, prosentit ja odotettu piste, joten testi ei tarkista sinun tulostasi.",
          apu: {
            otsikko: "Pivot prosentteina",
            tree: "rajat = kappale.bounds                  trimesh: rivit min ja max\npivot = min + (max − min) × prosentti / 100\n50/50/50 → keskipiste · 0/0/0 → min-kulma · 100/100/100 → max-kulma",
            actions: [
              "Laske osan rajat: trimesh-kappaleen `kappale.bounds` antaa kaksi riviä, min ja max.",
              "Laske pivot kaikille akseleille kerralla NumPylla: `pivot = min + (max - min) * prosentit / 100`.",
              "Kierto pivotin ympäri: siirrä pivot origoon, kierrä ja siirrä takaisin. Matriiseina: `siirto(pivot) @ kierto @ siirto(-pivot)`. Tämä kuuluu osan omaan muunnokseen."
            ],
            code: "PIVOTIN TARKISTUSLISTA\n[ ] rajapinta korttiin ennen toteutusta\n[ ] tarkistus on puhdas funktio\n[ ] 50/50/50 on keskipiste (testi 16)\n[ ] 0 ja 100 ovat reunat (testi 17)\n[ ] virheellinen syöte kriteerin mukaan (testi 18)\n[ ] kentillä on nimi",
            links: [
              ["trimesh: Trimesh.bounds", "https://trimesh.org/trimesh.base.html"]
            ]
          },
          sanat: []
        },
        "48-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Käyttäjä tarvitsee laskennan lisäksi säätimet kiertopisteen valintaan.",
          osat: [
            { vanha: 0, otsikko: "Lue käyttöliittymävaatimus", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]]", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Kirjoita otsikon jälkeen olevat arvot paperille.", naet: "Paperilla ovat taustaväri, tekstin väri, tekstin koko ja painikkeiden koko. Kirjoitat ne kenttien kortin Lisäksi-riville.", koodi: "### Käyttöliittymävaatimus (viikko 41)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele kenttien kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (prosenttikentät Pivot X, Pivot Y ja Pivot Z), Lisäksi (käyttöliittymävaatimus paperiltasi) ja Testi-rivi (käsin, syöte pivot 50/0/50 ja kierto, tulos osa kiertyy alareunansa ympäri).", naet: "Testi-rivillä lukee Testi käsin, koska testi tehdään käsin eikä sillä ole numeroa. Copilot on kirjoittanut kortin. Hyväksymiskriteereissä lukee, että kentillä on nimi ja ne toimivat näppäimistöllä. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet. Ohje: [[ohje:issue]].", naet: "Kortin issue on GitHubissa. Siinä ovat kentät Pivot X, Pivot Y ja Pivot Z ja käyttöliittymävaatimuksesi. Kenttien kortti ei ole viikon ensimmäinen kortti, joten et kirjoita kommenttia Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Toteuta pivotin kentät", missa: "Työsykli, askel 3 Rakenna, kohdat 3a ja 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Kenttien testi tehdään käsin: kirjoita sen odotettu tulos issueen kommentiksi ja rastita 3a. Toteuta sitten kortti kohdan 3b ohjeilla kortin kaistalla.", naet: "Transformipaneelissa ovat kentät Pivot X, Pivot Y ja Pivot Z. Issuessa kohta 3b on rastitettu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Avaa oma piirros Vektoripajassa", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse sovelluksessa painike Avaa ja avaa tiedosto testiaineisto/oma-piirros.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Sovellus näyttää piirroksesi, ja transformipaneelissa ovat pivotin kentät.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tee kenttien testi käsin", missa: "Vektoripaja, transformipaneeli ja 3D-näkymä", tee: "Valitse osa, esimerkiksi Korvat, ja kirjoita kenttiin Pivot X 50, Pivot Y 0, Pivot Z 50 ja kierto 45. Napsauta sitten kenttää Pivot X, paina Tab kahdesti ja kirjoita havainnot paperille.", naet: "Osa kiertyy alareunansa ympäri. Tab siirtää kohdistuksen kentästä Pivot X kenttään Pivot Y ja sitten kenttään Pivot Z. Tämä kokeilu on kohdan Pivotin kentät tarkistustesti. Kirjaat havaitun tuloksen issueen askeleessa 4." },
            { vanha: 0, otsikko: "Tee kenttien kortti loppuun", missa: "Työsykli, askeleet 4–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleet 4–6 järjestyksessä, ja kirjoita askeleen 4 Testi-riville ja askeleen 6 Aineistoviite-riville numeron tilalle käsin.", naet: "Kortin issue on suljettu. Testin kirjauksen ensimmäisellä rivillä lukee esimerkiksi Testi käsin: pivotin kentät. Transformipaneelissa on kolme nimettyä pivot-kenttää, ja Tab-näppäin siirtää kohdistuksen kentästä toiseen." }
          ],
          valmis: "Prosenttikentät muuttavat kiertopisteen paikkaa sovelluksessa.",
          tallenna: "Käyttöliittymän koodi GitHubiin. Käsin tehdyn testin tulos kortin issueen.",
          apu: {
            otsikko: "Pivotin kentät",
            actions: [
              "Käytä kentissä `QDoubleSpinBox`- ja `QLabel`-elementtejä. Kytke nimi kenttään: `label.setBuddy(kentta)`. Näin ruudunlukija lukee kentän nimen."
            ],
            test: "Avaa tiedosto testiaineisto/oma-piirros.svg. Aseta jollekin osalle, esimerkiksi osalle Korvat, pivot 50/0/50 kentillä Pivot X, Pivot Y ja Pivot Z. Kierrä osaa. Osan pitää kiertyä alareunansa ympäri."
          },
          sanat: []
        },
        "48-4": {
          perii: ["48-3"],
          miksi: "Julkaistu väliversio näyttää, toimivatko pivot ja aiemmat osat yhdessä.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi on GitHubissa." },
            { otsikko: "Tee tagi v0.0.48", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.0.48", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.48 -> v0.0.48. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.0.48", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.0.48 on vihreä. Viikon versio on [[github:releases|Releases-sivulla]]." }
          ],
          valmis: "Release v0.0.48 on GitHubissa, ja Actions-ajo on vihreä.",
          tallenna: "Release v0.0.48 GitHubiin.",
          sanat: []
        }
      },
      sykli: true
    },
    49: {
      type: "feature",
      feature: "Käyttäjä voi viedä mallin Blenderiin niin, että nimetyt osat säilyvät erillisinä.",
      excerpt: "Valmis malli viedään .obj-tiedostoksi niin, että jokainen osa on oma objektinsa.",
      connection: "Vektoripajan mallin pitää olla käytettävissä myös sovelluksen ulkopuolella. Tällä viikolla viet sen .obj-tiedostoksi ja varmistat Blenderissä, että nimetyt osat säilyvät erillisinä. Samalla dokumentoit virheen korjauksen ja lisäät testin, joka auttaa estämään saman virheen palaamisen.",
      deliverable: "Objektijaon rajapinta · testit 19–20 · .obj-vienti · tarkistus VS Codessa ja Blenderissä · virheenkorjausketju 1 ja sen regressiotesti · viikon release.",
      why: "Ilman vientiä malli jää sovellukseen. Asiakas haluaa jatkaa mallia toisessa ohjelmassa.",
      done: "Kolmen osan mallista syntyy .obj-tiedosto, jossa on kolme o-riviä osien nimillä. Tiedosto aukeaa Blenderissä. Testit 19–20 menevät läpi. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa.",
      record: "Objektijako selityspohjalla, viennin kortin issuen numero ja testit 19–20, havaintoissuen numero ja sen virheenkorjausketju 1, regressiotestin nimi, kuva [[tiedosto:kuvat|project-docs/kuvat/obj-blenderissa.png]], releasen v0.0.49 osoite ja näyttömatriisin vaatimukset (rivien nimet): etsii ja korjaa virheitä ohjelmakoodista; testaa ohjelman toimintoja; käyttää rakenteista ohjelmointia toteutuksissa; sopii tehtävistä tiimin muiden jäsenten kanssa; jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi; hyödyntää rajapintoja ja käsittelee tietoa; käyttää versionhallintaa; julkaisee ohjelman tuotantoympäristöön; suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen.",
      funktio: "objektijako (testit 19–20)",
      skills: ["Tiedon käsittely: malli tiedostoksi", "Toisto: osat objekteiksi", "Virheen syy omin sanoin", "Regressiotesti"],
      termit: ["OBJ", "virheenkorjausketju", "regressiotesti", "vikatehtävä"],
      tehtavat: {
        "49-9": {
          perii: ["49-4"],
          miksi: "Regressiotesti tarvitsee virheen, jonka funktiolla on jo testi. Kun valitset virheen ennen viikkopalaveria, ehdit pyytää palaverissa vikatehtävän, jos sopivaa virhettä ei ole.",
          osat: [
            { otsikko: "Listaa havaintoissuet paperille", missa: "Selain, GitHub", tee: "Avaa [[github:issues?q=is%3Aissue+label%3Ahavainto|repositoryn havaintoissuet]]. Listaa paperille jokaisen issuen numero ja otsikko, avoimet ensin ja pienin numero ensin.", naet: "Paperilla on havaintoissueiden lista. Avoimen issuen kuvake on vihreä ja suljetun violetti. Jos listassa ei ole yhtään issueta, rastita tämä ja seuraavat kaksi osatehtävää ja tee osatehtävä 4." },
            { otsikko: "Tarkista, onko virheen funktiolla testi", missa: "VS Code, Explorer, kansio tests", tee: "Etsi koodilaatikon listasta paperin ensimmäisen issuen toiminto ja avaa sen testitiedosto. Ohje: [[ohje:avaa-tiedosto]]. Kirjoita issuen viereen tiedoston nimi ja tiedoston alun from-rivin funktio, tai ei testiä, jos tiedostoa ei ole.", naet: "Issuen vieressä on testitiedosto ja funktio, esimerkiksi test_kierto.py ja kiertokulma, tai merkintä ei testiä. Rivi from vektoripaja.kierto import kiertokulma tarkoittaa, että funktio kiertokulma on moduulissa kierto. Jos issuella ei ole testiä, tarkista paperin seuraava issue samalla tavalla.", koodi: "tests/test_kierto.py · kuution kierto (viikko 41)\ntests/test_tuonti.py · SVG-tuonti (viikko 43)\ntests/test_hierarkia.py · osien hierarkia ja maailmamuunnos (viikot 44 ja 47)\ntests/test_revolve.py · revolve eli pyörähdyskappale (viikko 45)\ntests/test_putki.py · inflate eli putki (viikko 46)\ntests/test_transformit.py · transformit (viikko 47)\ntests/test_pivot.py · pivot (viikko 48)", koodiOtsikko: "Testitiedostot ja toiminnot" },
            { otsikko: "Valitse havaintoissue", missa: "Paperi tai muistiinpanot", tee: "Valitse paperin ensimmäinen avoin issue, jolla on testi, ja ympyröi sen numero. Jos avoimilla issueilla ei ole testiä, valitse samalla tavalla ensimmäinen suljettu issue.", naet: "Paperilla on ympyröity havaintoissuen numero, esimerkiksi #12, ja sen vieressä testitiedosto ja funktio. Tarvitset näitä tietoja työvaiheessa Kirjoita regressiotesti valitusta virheestä. Jos valitsit issuen, rastita seuraava osatehtävä tekemättä sitä." },
            { otsikko: "Pyydä vikatehtävä, jos sopivaa havaintoissueta ei ole", missa: "Vain jos sopivaa havaintoissueta ei ole: viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kerro palaverissa, ettei sopivaa havaintoissueta ole, ja pyydä vikatehtävä. Jos palaveri on jo pidetty, lähetä viesti ohjaajalle. Ohje: [[ohje:teams]].", naet: "Ohjaaja lupaa lähettää vikatehtävän Teamsissa. Vikatehtävä on ohjaajan tekemä tarkoituksellinen virhe. Ohjaajan viestissä kerrotaan, mitä teet sovelluksessa, mikä silloin menee väärin, mitä funktiota virhe koskee ja missä testitiedostossa sen testi on. Jatka työvaiheesta Määrittele viennin testit: käytät vikatehtävää vasta työvaiheessa Kirjoita regressiotesti valitusta virheestä.", koodi: "Hei Matti,\nviikon 49 regressiotestiä varten ei ole sopivaa havaintoissueta. Saanko vikatehtävän?\nKerro, mitä teen sovelluksessa, mikä silloin menee väärin, mitä funktiota virhe koskee ja missä testitiedostossa sen testi on.", koodiOtsikko: "Viesti: kopioi tämä" }
          ],
          valmis: "Korjattava havaintoissue on valittu, tai ohjaaja on luvannut vikatehtävän.",
          tallenna: "Valitun havaintoissuen numero, testitiedosto ja funktio paperilla työvaihetta Kirjoita regressiotesti valitusta virheestä varten.",
          esimerkki: "Reseptikirjan paperi:\n#3 Haku ei löydä isoja kirjaimia (avoin) · test_haku.py · hae ← valittu\n#5 Kuva ei näy (avoin) · ei testiä\n#2 Tallennus kaatuu (suljettu) · test_tallennus.py · tallenna_reseptit",
          eiRiita: "\"Valitsin jonkin issuen.\" Paperista ei näe issuen numeroa, testitiedostoa eikä funktiota.",
          sanat: ["havaintoissue", "vikatehtävä", "regressiotesti"]
        },
        "49-1": {
          versio: "2026-10-05",
          miksi: "Viennin pitää säilyttää asiakkaan tarvitsemat erilliset osat.",
          osat: [
            { vanha: 0, otsikko: "Avaa suunnitelma ja etsi rajapinnat", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3.", naet: "Kursori on otsikon ### Rajapinnat (viikot 44, 48 ja 49) rivillä. Otsikon jälkeen ovat ohjerivi ja viikkojen 44 ja 48 rajapinnat omilla riveillään. Viikon 48 rivillä lukee pivot-prosentti.", koodi: "### Rajapinnat (viikot 44, 48 ja 49)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kirjoita objektijaon rajapinta", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Rajapinnat (viikot 44, 48 ja 49)", tee: "Napsauta riviä, jossa lukee pivot-prosentti, ja paina End ja Enter. Kopioi rivin pohja, paina Ctrl+V ja kirjoita ___ tilalle funktion nimi: pienet kirjaimet, verbi ensin, alaviiva sanojen välissä, ei ä:tä eikä ö:tä.", naet: "Uudella rivillä ovat funktion nimi, syöte ja paluuarvo samassa muodossa kuin Reseptikirjan mallissa: - Viikko 12: jaa_kategorioihin(reseptit) · syöte: lista resepteistä · paluuarvo: sanakirja. Objektijako tekee mallista Scenen, jossa jokainen osa on oma nimetty objekti. Käytät samaa nimeä kortissa ja testeissä.", koodi: "- Viikko 49: ___(malli) · syöte: mallin solmupuu · paluuarvo: trimesh.Scene", koodiOtsikko: "Rivin pohja: kopioi tämä" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjoita objektijaon rajapinta", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Avaa oma piirros Inkscapessa", missa: "Inkscape, ylävalikko", tee: "Käynnistä Inkscape ja valitse File ja sitten Open. Avaa tiedosto oma-piirros.svg kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]].", naet: "Piirros, jonka teit [[vk 43|viikolla 43]], on auki. Inkscapen otsikkorivillä lukee oma-piirros.svg." },
            { otsikko: "Katso osien nimet", missa: "Inkscape, ylävalikko ja paneeli Layers and Objects", tee: "Valitse ylävalikosta Layer ja sitten Layers and Objects: [[kuvaohje:inkscape-layerit]].", naet: "Paneelissa ovat piirroksen layerit ja ryhmät nimineen, esimerkiksi Vartalo, Pää ja Korvat. Ryhmät näkyvät sisennettyinä layerin alapuolella. Jokaisesta layerista ja ryhmästä tulee viennissä yksi objekti." },
            { vanha: 1, otsikko: "Päätä testin 19 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testin 19 syöte on malli tiedostosta testiaineisto/oma-piirros.svg. Kirjoita paperille, montako objektia objektijako tekee ja millä nimillä.", naet: "Paperilla on testin 19 odotettu tulos: objektien määrä ja nimet samoin kirjaimin kuin Layers and Objects -paneelissa, esimerkiksi 3 objektia: Vartalo, Pää ja Korvat." },
            { vanha: 1, otsikko: "Päätä testin 20 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 20 kutsuu objektijakoa mallilla, jossa ei ole osia. Kirjoita paperille virheilmoitus eli virheen ValueError viesti, jonka funktio silloin antaa.", naet: "Paperilla on virheilmoituksen teksti samassa muodossa kuin Reseptikirjan testissä 8. Funktio ei palauta Sceneä, vaan nostaa virheen ValueError, ja ikkuna näyttää virheilmoituksen käyttäjälle. Kirjoitat testien 19 ja 20 odotetut tulokset seuraavassa työvaiheessa korttiin ja testeihin." }
          ],
          valmis: "Objektijaon rajapinta ja testien 19–20 odotetut tulokset on määritelty.",
          tallenna: "Rajapinta tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa. Testien 19 ja 20 odotetut tulokset kortin issueen seuraavassa työvaiheessa. Kirjoitat testit kansioon tests työsyklin kohdassa 3a.",
          esimerkki: "Reseptikirjan rajapinta ja testit:\n- Viikko 12: jaa_kategorioihin(reseptit) · syöte: lista resepteistä · paluuarvo: sanakirja, jossa avain on kategorian nimi\n- Testi 7: kolme reseptiä kahdessa kategoriassa → kaksi avainta, Keitot ja Leivonnaiset\n- Testi 8: tyhjä lista → virhe ValueError, viesti \"Ei reseptejä jaettavaksi.\"",
          eiRiita: "\"jaa(x) jakaa reseptit. Testi: toimii.\" Syöte, paluuarvo ja testin odotettu tulos puuttuvat.",
          sanat: ["OBJ", "rajapinta"]
        },
        "49-2": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Vienti tekee mallista käyttökelpoisen myös toisessa ohjelmassa.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele viennin kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (.obj-vienti, jossa jokainen osa on oma objektinsa), Rajapinta ([[tiedosto:suunnitelma|suunnitelmasi]] viikon 49 rivi), Testi-rivit testeille 19 ja 20 paperilta ja Lisäksi (koodilaatikon teksti).", naet: "Copilot on kirjoittanut kortin. Hyväksymiskriteereissä lukee, että osien nimet säilyvät tiedostossa ja että vienti tehdään painikkeella Vie OBJ. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Vienti tehdään painikkeella Vie OBJ, joka kysyy tallennuspaikan tiedostoikkunalla. Jos mallissa ei ole osia, funktio nostaa virheen ValueError testin 20 viestillä, ja ikkuna näyttää viestin käyttäjälle.", koodiOtsikko: "Lisäksi-rivin teksti: kopioi tämä" },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet ([[ohje:issue]]) ja kirjoita issuen numero paperille.", naet: "Kortin issue on GitHubissa. Siinä ovat testien 19 ja 20 odotetut tulokset. Viennin kortti on viikon ensimmäinen kortti, joten issuessa on myös kommentti Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Luo testitiedosto (askel 3a)", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, Explorer", tee: "Avaa tiedosto tests/test_hierarkia.py, maalaa sen alun import- ja from-rivit ja paina Ctrl+C. Luo kansioon tests uusi tiedosto test_vienti.py ja liitä rivit siihen. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedoston tests/test_vienti.py alussa ovat samat import- ja from-rivit kuin tiedostossa test_hierarkia.py. Niiden funktioilla testit 19 ja 20 tekevät mallin samalla tavalla kuin testit 6 ja 7." },
            { otsikko: "Kirjoita testit 19 ja 20 (askel 3a)", missa: "Tiedosto tests/test_vienti.py, tiedoston loppu", tee: "Paina Ctrl+End ja Enter, kopioi testipohja ja paina Ctrl+V. Vaihda moduuli, funktio ja ___-kohdat askeleen 3 ohjeen ja paperin mukaan, ja hyväksy täydennys def-rivien lopussa. Ohje: [[ohje:taydennys]].", naet: "Testissä 19 on assert-rivi, jossa ovat objektien määrä ja nimet paperilta. Testissä 20 on rivi with pytest.raises(ValueError ja oma virheilmoituksesi. Jos täydennys ei tee mallia testin 6 tai 7 tavalla, paina Esc ja kopioi mallin tekevät rivit testistä 6 tai 7. Kun molemmat testit on kirjoitettu, rastita issuessa kohta 3a.", koodi: "import pytest\nfrom vektoripaja.moduuli import funktio\n\n\n# Testi 19: malli tiedostosta testiaineisto/oma-piirros.svg kuten testissä 6 -> Scene, jossa on ___ objektia: ___\ndef test_19_kolme_osaa():\n\n\n# Testi 20: malli, jossa ei ole osia, kuten testissä 7 -> virhe ValueError, jonka viesti on \"___\"\ndef test_20_tyhja_malli():\n", koodiOtsikko: "Testipohja: kopioi tämä" },
            { vanha: 0, otsikko: "Rakenna vienti (askel 3b)", missa: "Työsykli, askel 3 Rakenna, kohta 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Tee kohdan 3b ohjeet kortin kaistalla ja rastita issuessa 3b.", naet: "Sovellus vie mallin .obj-tiedostoksi painikkeella Vie OBJ. Jos et tiedä, miten vienti tehdään, avaa tämän työvaiheen kohta .obj-vienti trimeshillä ja osien nimet. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 1, otsikko: "Tarkista tulos ennen rastittamista", missa: "Työsykli, askel 4 Tarkista", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleen 4 ohjeet ja kirjaa testit 19 ja 20 issueen kahtena erillisenä kommenttina.", naet: "Testit 19 ja 20 menevät läpi. Jos sama testi epäonnistuu toisen kerran, luo havaintoissue. Ohje: [[ohje:havaintoissue]]. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Tee kortti loppuun", missa: "Työsykli, askeleet 5 Raportoi ja 6 Kirjaa", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 5. Tee askeleiden 5 ja 6 ohjeet järjestyksessä.", naet: "Kortin issue on suljettu, ja viennin koodi on GitHubissa. Valitse askeleen 5 jälkeen Tein tämän · seuraava askel, askeleen 6 jälkeen Tein tämän · kierros valmis ja lopuksi Palaa työvaiheeseen." }
          ],
          valmis: "Viety tiedosto sisältää sovitut osat ja nimet.",
          tallenna: "Viennin koodi ja testitiedosto tests/test_vienti.py GitHubiin. Testien 19 ja 20 tulokset kortin issueen.",
          esimerkki: "Reseptikirjan testikommentit ja täydennykset, jotka hyväksyin:\n# Testi 7: kolme reseptiä kahdessa kategoriassa -> sanakirja, jossa on 2 avainta: Keitot ja Leivonnaiset\ndef test_7_kaksi_kategoriaa():\n    tulos = jaa_kategorioihin(kolme_reseptia())\n    assert sorted(tulos) == [\"Keitot\", \"Leivonnaiset\"]\n\n# Testi 8: tyhjä lista -> virhe ValueError, jonka viesti on \"Ei reseptejä jaettavaksi.\"\ndef test_8_tyhja_lista():\n    with pytest.raises(ValueError, match=\"Ei reseptejä jaettavaksi.\"):\n        jaa_kategorioihin([])",
          eiRiita: "# testaa vienti\nKommentista puuttuvat syöte ja odotettu tulos. Silloin täydennys arvaa ne, eikä testi tarkista sinun tulostasi.",
          apu: {
            otsikko: ".obj-vienti trimeshillä ja osien nimet",
            tree: "o Vartalo\nv …  f …\no Pää\nv …  f …\no Korvat\nv …  f …",
            actions: [
              "Tee vientiä varten `trimesh.Scene()`. Lisää jokainen osa omana geometrianaan: `scene.add_geometry(kappale, geom_name=nimi, node_name=nimi)`.",
              "Käytä kappaleena kopiota, joka on siirretty osan maailmamuunnoksella: `kappale.copy().apply_transform(maailma)`. Näin osat ovat tiedostossa samoilla paikoilla kuin näkymässä.",
              "Vie tiedosto: `scene.export(polku)`. Tiedostopääte `.obj` valitsee muodon. Jokainen geometria saa oman o-rivin.",
              "Kysy tallennuspaikka painikkeen Vie OBJ tiedostoikkunalla: `QFileDialog.getSaveFileName(self, \"Vie OBJ\", \"malli.obj\", \"OBJ (*.obj)\")`.",
              "trimesh ei vie tyhjää mallia, vaan antaa virheen `ValueError`. Siksi objektijako tarkistaa ensin, onko mallissa osia. Jos osia ei ole, se nostaa virheen `ValueError` testin 20 viestillä, ja ikkuna näyttää viestin käyttäjälle."
            ],
            code: "VIENNIN TARKISTUSLISTA\n[ ] rajapinta korttiin ennen toteutusta\n[ ] o-rivejä on yhtä monta kuin osia (testi 19)\n[ ] tyhjä malli käsitelty (testi 20)\n[ ] nimet ovat samat kuin hierarkiapaneelissa\n[ ] tiedosto aukeaa Blenderissä",
            test: "Vie kolmen osan malli. Avaa tiedosto VS Codessa ja hae tekstiä \"o \". Osumia pitää olla kolme.",
            links: [
              ["trimesh: Scene.export", "https://trimesh.org/trimesh.scene.scene.html"]
            ]
          },
          sanat: []
        },
        "49-3": {
          versio: "2026-10-05",
          miksi: "VS Codessa näet, saiko jokainen osa viedyssä tiedostossa oman o-rivinsä.",
          osat: [
            { otsikko: "Avaa oma piirros Vektoripajassa", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse sovelluksessa painike Avaa ja avaa tiedosto oma-piirros.svg kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]].", naet: "Malli näkyy. Hierarkiapaneelissa ovat osat Vartalo, Pää ja Korvat.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Kopioi kansion esimerkit polku", missa: "VS Code, Explorer", tee: "Napsauta kansiota esimerkit hiiren oikealla painikkeella. Valitse Copy Path.", naet: "Kansion polku on leikepöydällä. Kansio esimerkit on repositoryn juuressa, ja siinä on pohjan tiedosto esimerkki.svg." },
            { vanha: 0, otsikko: "Avaa viennin tallennusikkuna", missa: "Vektoripaja", tee: "Valitse Vektoripajassa painike Vie OBJ. Napsauta tallennusikkunan osoiteriviä ja paina Ctrl+V ja Enter.", naet: "Tallennusikkunan otsikossa lukee Vie OBJ. Ikkunan yläreunassa lukee esimerkit." },
            { otsikko: "Tallenna malli.obj", missa: "Tallennusikkunan kenttä Tiedostonimi", tee: "Napsauta kenttää Tiedostonimi ja kirjoita siihen malli.obj. Valitse Tallenna.", naet: "VS Coden Explorerissa on kansiossa esimerkit tiedosto malli.obj." },
            { vanha: 0, otsikko: "Avaa malli VS Codessa", missa: "VS Code, Explorer", tee: "Avaa tiedosto esimerkit/malli.obj. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Rivit alkavat kirjaimilla v, f ja o." },
            { vanha: 1, otsikko: "Laske o-rivit", missa: "VS Code, tiedosto esimerkit/malli.obj", tee: "Paina Ctrl+F ja kirjoita hakuun o ja välilyönti. Paina Enter, kunnes olet nähnyt jokaisen osuman.", naet: "Hakukentän vieressä lukee 1 of 3, ja jokainen osuma on rivin alussa. Kirjaimen o perässä on osan nimi. Tämä haku on toteutusavun tarkistustesti. Jos rivin alussa olevia osumia ei ole kolme, luo havaintoissue. Ohje: [[ohje:havaintoissue]]." }
          ],
          valmis: "Viedyssä tiedostossa esimerkit/malli.obj on kolme o-riviä osien nimillä.",
          tallenna: "Viety malli esimerkit/malli.obj omalla koneellasi. Se menee GitHubiin seuraavan työvaiheen commitissa.",
          sanat: []
        },
        "49-7": {
          perii: ["49-3"],
          miksi: "Pelkkä tiedoston syntyminen ei osoita, että tiedosto toimii toisessa ohjelmassa.",
          osat: [
            { otsikko: "Kopioi kansion esimerkit polku", missa: "VS Code, Explorer", tee: "Napsauta kansiota esimerkit hiiren oikealla painikkeella. Valitse Copy Path.", naet: "Kansion polku on leikepöydällä." },
            { otsikko: "Avaa Blenderin tuontiikkuna", missa: "Blender, ylävalikko", tee: "Käynnistä Blender. Valitse File, sitten Import ja sitten Wavefront (.obj): [[kuvaohje:blender-obj]].", naet: "Blenderin tiedostoikkuna aukeaa. Sen yläreunassa on polkukenttä." },
            { otsikko: "Tuo malli.obj", missa: "Blenderin tiedostoikkuna", tee: "Napsauta polkukenttää, paina Ctrl+A ja Ctrl+V ja sitten Enter. Valitse malli.obj ja sitten Import Wavefront OBJ.", naet: "Malli näkyy Blenderissä. Oikean yläkulman Outlinerissa jokainen mallin osa on oma rivinsä. Rivit Camera, Cube ja Light ovat Blenderin omia oletusobjekteja, eivätkä ne kuulu malliin." },
            { otsikko: "Ota kuvakaappaus Blenderistä", missa: "Blender", tee: "Ota kuvakaappaus, jossa näkyvät malli ja Outliner. Ohje: [[ohje:kuvakaappaus]], vaiheet 1 ja 2.", naet: "Oikeassa alakulmassa on ilmoitus: kuva on leikepöydällä. Tee seuraava osatehtävä heti, kun ilmoitus näkyy." },
            { otsikko: "Tallenna kuva", missa: "Ilmoitus oikeassa alakulmassa ja kuvakaappaustyökalun tallennusikkuna", tee: "Napsauta ilmoitusta ja paina Ctrl+S. Tallenna kuva nimellä obj-blenderissa.png kansioon [[tiedosto:kuvat|project-docs/kuvat/]]. Ohje: [[ohje:kuvakaappaus]], vaiheet 4–6.", naet: "VS Coden Explorerissa on tiedosto [[tiedosto:kuvat|project-docs/kuvat/obj-blenderissa.png]]. Jos ilmoitus ehti kadota, paina Windows-näppäin+N ja napsauta ilmoitusta ilmoituskeskuksessa." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa ovat esimerkit/malli.obj ja obj-blenderissa.png.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedostojen malli.obj ja obj-blenderissa.png muutokset.", koodi: "Lisää viety malli ja kuva Blenderistä", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Käy viennin tarkistuslista läpi", missa: "Työvaihe Rakenna .obj-vienti, kohta .obj-vienti trimeshillä ja osien nimet", tee: "Avaa kohta ja lue viennin tarkistuslista. Kirjoita paperille rivit, jotka eivät täyttyneet.", naet: "Tiedät, täyttyikö jokainen listan rivi. Kirjoitat tuloksen issueen seuraavassa osatehtävässä." },
            { otsikko: "Kirjaa tarkistuksen tulos issueen", missa: "Selain, viennin kortin issue [[github:issues?q=is%3Aissue+is%3Aclosed|suljetuissa issueissa]]", tee: "Kopioi kommentti ja liitä se kenttään Add a comment. Täydennä tyhjät kohdat ja valitse Comment.", naet: "Kommentti näkyy issuessa. Siinä ovat tarkistusten tulokset VS Codesta ja Blenderistä sekä tarkistuslistan tulos.", koodi: "Tarkistus VS Codessa: o-rivejä ___, nimet: ___\nTarkistus Blenderissä: Outlinerissa mallin osia ___ (Camera, Cube ja Light eivät kuulu malliin)\nKuva: project-docs/kuvat/obj-blenderissa.png\nViennin tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ___ (tai: ei yhtään)", koodiOtsikko: "Kommentti issueen: kopioi tämä" }
          ],
          valmis: "Malli avautuu Blenderissä, jokainen osa on Outlinerissa oma rivinsä, ja tarkistusten tulokset ovat viennin kortin issuessa.",
          tallenna: "Viety malli esimerkit/malli.obj ja kuva [[tiedosto:kuvat|project-docs/kuvat/obj-blenderissa.png]] GitHubissa. Tarkistuksen tulos viennin kortin issueen.",
          sanat: []
        },
        "49-4": {
          versio: "2026-10-05",
          miksi: "Regressiotesti toistaa korjatun virheen ja jää testeihin. Se varmistaa, ettei virhe palaa.",
          osat: [
            { vanha: 2, otsikko: "Luo havaintoissue vikatehtävästä", missa: "Vain jos pyysit vikatehtävän: Teams ja selain, GitHub", tee: "Jos ohjaaja teki vikatehtävän pull requestina, hyväksy se. Ohje: [[ohje:pull-request]]. Luo havaintoissue ohjaajan Teams-viestin mukaan ja ympyröi sen numero paperille. Ohje: [[ohje:havaintoissue]].", naet: "Havaintoissue on GitHubissa. Kohdissa Mitä odotin, Mitä tapahtui ja Toistamisohje on ohjaajan kuvaama virhe. Jos ohjaajan viestiä ei ole vielä tullut, lähetä muistutus ([[ohje:teams]]) ja jatka työvaiheesta Julkaise viennin versio. Palaa tähän, kun viesti tulee. Jos valitsit havaintoissuen työvaiheessa Valitse korjattava virhe ennen palaveria, rastita tämä osatehtävä.", koodi: "Hei Matti,\nmuistutan vikatehtävästä viikon 49 regressiotestiä varten.\nKerro, mitä teen sovelluksessa, mikä silloin menee väärin, mitä funktiota virhe koskee ja missä testitiedostossa sen testi on.", koodiOtsikko: "Viesti: kopioi tämä" },
            { vanha: 0, otsikko: "Avaa valitsemasi havaintoissue", missa: "Selain, GitHub", tee: "Avaa [[github:issues?q=is%3Aissue+label%3Ahavainto|repositoryn havaintoissuet]] ja napsauta issueta, jonka numero on ympyröity paperilla.", naet: "Issue on auki. Kohdassa Mitä odotin on oikea tulos, ja kohdassa Toistamisohje ovat vaiheet, joilla virhe syntyy. Tarvitset molempia regressiotestissä." },
            { otsikko: "Kopioi testattavan funktion from-rivi", missa: "VS Code, Explorer, kansio tests", tee: "Avaa paperilla oleva testitiedosto. Ohje: [[ohje:avaa-tiedosto]]. Maalaa tiedoston alusta from-rivi, jossa on virheen funktio, ja paina Ctrl+C.", naet: "Leikepöydällä on from-rivi, esimerkiksi from vektoripaja.kierto import kiertokulma. Regressiotesti kutsuu samaa funktiota virheen syötteellä." },
            { vanha: 1, otsikko: "Luo regressiotestien tiedosto", missa: "VS Code, Explorer, kansio tests", tee: "Luo kansioon tests uusi tiedosto test_regressio.py ja liitä from-rivi sen ensimmäiselle riville. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedosto tests/test_regressio.py on auki editorissa, ja sen ensimmäisellä rivillä on from-rivi. Jos tiedosto oli jo olemassa, avaa se, paina Ctrl+Home ja liitä from-rivi omalle rivilleen." },
            { vanha: 1, otsikko: "Kirjoita regressiotestin kommentti", missa: "Tiedosto tests/test_regressio.py, tiedoston loppu", tee: "Paina Ctrl+End ja kaksi kertaa Enter, kopioi testin pohja ja paina Ctrl+V. Vaihda numero 12 issuen numeroksi ja pohjan muut sanat omiksi tiedoiksesi työvaiheen esimerkin tapaan.", naet: "Tiedostossa ovat from-rivi, kaksi kommenttiriviä ja rivi, jossa on def test_regressio_ ja issuen numero. Virheen syöte on arvo, jonka sovellus antaa funktiolle, kun teet Toistamisohjeen vaiheet, esimerkiksi tiedoston nimi tai luku. Mallia syötteelle näet testitiedoston muista testeistä. Oikea tulos on issuen kohdassa Mitä odotin. Jos et keksi syötettä, toimi kohdan Jos et tiedä, mitä tehdä kysymyksen 4 mukaan.", koodi: "# Regressiotesti #12: virhe yhdellä lauseella.\n# funktio(virheen syöte) palauttaa oikea tulos.\ndef test_regressio_12():", koodiOtsikko: "Testin pohja: kopioi tämä" },
            { otsikko: "Hyväksy testin täydennys", missa: "Tiedosto tests/test_regressio.py, def-rivin loppu", tee: "Napsauta def-rivin loppuun ja paina Enter. Hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Def-rivin jälkeen on assert-rivi, jossa ovat funktio, virheen syöte ja oikea tulos. Jos harmaata ehdotusta ei tule tai siinä on väärä tulos, kirjoita assert-rivi itse työvaiheen esimerkin mukaan." },
            { otsikko: "Kirjaa täydennys AI-lokiin", missa: "VS Code, tiedosto [[tiedosto:ai-loki|ai-loki.md]]", tee: "Avaa tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]] ja paina Ctrl+End ja Enter. Kopioi lokimerkinnän pohja, paina Ctrl+V ja täytä pohja.", naet: "Tiedoston lopussa on merkintä regressiotestin täydennyksestä. Täydennys tehtiin työsyklin ulkopuolella, joten kirjaat sen samana päivänä, ja kaistan tilalla lukee ilman korttia. Jos kirjoitit assert-rivin itse ilman täydennystä, merkintää ei tarvita: rastita tämä osatehtävä.", koodi: "### pp.kk.vvvv · GitHub Copilot, ilman korttia\n- Mihin pyysin apua: regressiotestin assert-rivi havaintoissuen #__ virheestä (täydennys)\n- Päätös: hyväksyn / korjautan / hylkään\n- Peruste: \n- Aineistoviite: issue #__, test_regressio_ ja sama numero\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.", koodiOtsikko: "Lokimerkinnän pohja: kopioi tämä" },
            { vanha: 1, otsikko: "Aja testit", missa: "VS Code, ylävalikko ja terminaali", tee: "Valitse File ja sitten Save All. Aja testit. Ohje: [[ohje:pytest]].", naet: "Jos virhe on jo korjattu, regressiotestin rivillä lukee PASSED. Jos lukee FAILED, virhe on vielä koodissa, ja korjaat sen seuraavassa työvaiheessa. Kirjoita PASSED tai FAILED paperille." }
          ],
          valmis: "Regressiotesti toistaa valitun virheen, ja tiedät, meneekö se läpi.",
          tallenna: "Regressiotesti tiedostossa tests/test_regressio.py ja täydennyksen merkintä tiedostossa [[tiedosto:ai-loki|ai-loki.md]] omalla koneellasi. Ne menevät GitHubiin seuraavassa työvaiheessa.",
          esimerkki: "Reseptikirjan regressiotesti issuesta #9:\nfrom reseptikirja.haku import hae\n\n# Regressiotesti #9: haku ei löytänyt reseptiä isoilla kirjaimilla.\n# hae([\"Kesäkeitto\"], \"KEITTO\") palauttaa [\"Kesäkeitto\"].\ndef test_regressio_9():\n    assert hae([\"Kesäkeitto\"], \"KEITTO\") == [\"Kesäkeitto\"]",
          eiRiita: "def test_regressio():\n    assert True\nTesti ei toista havaintoissuen virhettä, eikä sen nimestä näe issuen numeroa.",
          sanat: ["regressiotesti", "vikatehtävä", "havaintoissue"]
        },
        "49-8": {
          perii: ["49-4"],
          tyosykli: true,
          miksi: "Korjaus ja uusintatesti näyttävät, että virhe on poissa. Regressiotesti GitHubissa estää virheen paluun.",
          osat: [
            { otsikko: "Avaa työsykli, jos regressiotesti ei mennyt läpi", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Jos regressiotesti meni läpi jo työvaiheessa Kirjoita regressiotesti valitusta virheestä, virhe on jo korjattu: rastita tämä ja kolme seuraavaa osatehtävää." },
            { otsikko: "Suunnittele korjauksen kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (havaintoissuen #N virheen korjaus), yksi Testi-rivi (numeron tilalle regressiotestin nimi) ja Lisäksi (Regressiotesti on jo kirjoitettu tiedostoon tests/test_regressio.py).", naet: "Copilot on kirjoittanut kortin. Kortin kohdassa Testi lukee test_regressio_ ja issuen numero, koska regressiotestillä ei ole omaa numeroa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Siirrä kortti issueksi ja rastita 3a", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet ([[ohje:issue]]) ja rastita issuessa myös kohta 3a, koska regressiotesti on jo kirjoitettu.", naet: "Kortin issue on GitHubissa, ja kohdat 1, 2 ja 3a on rastitettu. Korjauksen kortti on viikon toinen kortti, joten et kirjoita kommenttia Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Korjaa virhe ja tee kortti loppuun", missa: "Työsykli, askeleet 3–6", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Tee kohta 3b ja askeleet 4–6, ja lisää askeleen 6 commit-viestin loppuun rivi Closes #N, jossa N on havaintoissuen numero.", naet: "Regressiotesti menee läpi. Kortin issue ja havaintoissue on suljettu. Changes-listassa olivat myös tests/test_regressio.py ja [[tiedosto:ai-loki|ai-loki.md]]. Valitse jokaisen askeleen jälkeen Tein tämän ja lopuksi Palaa työvaiheeseen." },
            { otsikko: "Tee uusintatesti", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Tee havaintoissuen kohdan Toistamisohje vaiheet uudelleen.", naet: "Virhe ei enää toistu. Kirjoitat tuloksen ketjuun työvaiheessa Dokumentoi virheen korjaus. Jos virhe toistuu, toimi kohdan Jos et tiedä, mitä tehdä kysymyksen 4 mukaan.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Jos havaintoissue on yhä auki, vaihda commit-viestin N sen numeroksi, ja muuten poista rivi Closes #N.", naet: "Changes-listassa olivat tests/test_regressio.py ja [[tiedosto:ai-loki|ai-loki.md]]. Jos lista oli tyhjä, tiedostot menivät GitHubiin jo työsyklin commitissa, eikä uutta committia tarvita. GitHubin commit-listassa ylimpänä on commit-viestisi tai työsyklin commit, ja havaintoissue on suljettu.", koodi: "Lisää regressiotesti\n\nCloses #N", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Valitun virheen regressiotesti menee läpi, virhe ei enää toistu, regressiotesti on GitHubissa, ja havaintoissue on suljettu.",
          tallenna: "Regressiotesti tiedostossa tests/test_regressio.py ja täydennyksen merkintä tiedostossa [[tiedosto:ai-loki|ai-loki.md]] GitHubissa. Uusintatestin tulos ketjuun seuraavassa työvaiheessa.",
          sanat: []
        },
        "49-5": {
          perii: ["49-4"],
          miksi: "Virheenkorjausketju näyttää, miten löydät virheen ja estät sen palaamisen.",
          osat: [
            { otsikko: "Avaa havaintoissue", missa: "Selain, GitHub", tee: "Avaa [[github:issues?q=is%3Aissue+label%3Ahavainto|repositoryn havaintoissuet]] ja napsauta issueta, jonka numero on ympyröity paperilla.", naet: "Issue on näkyvissä. Sivun lopussa on kommenttikenttä Add a comment." },
            { otsikko: "Etsi korjauscommit", missa: "Havaintoissue, tapahtumarivit sivun loppupuolella", tee: "Etsi rivi, jossa lukee closed this ja in sekä seitsemän merkin tunnus. Kirjoita tunnus paperille.", naet: "Paperilla on korjauscommitin tunnus, esimerkiksi 3f2a1c9. Korjauscommit on se commit, jonka rivi Closes #N sulki issuen. Jos riviä ei ole tai rivin commitin viesti on Lisää regressiotesti, lähetä viesti ohjaajalle ([[ohje:teams]]) ja jatka osatehtävistä 4 ja 5. Palaa tähän, kun ohjaaja vastaa. Jos vastausta ei ole tullut seuraavana työpäivänä, lähetä sama viesti uudelleen.", koodi: "Hei Matti,\nen löydä havaintoissuen #___ korjauscommitia. Mikä commit korjasi virheen?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Lue korjauksen muutokset", missa: "Selain, korjauscommitin sivu", tee: "Napsauta tunnusta issuen tapahtumarivillä. Lue punaiset ja vihreät rivit.", naet: "Punaiset rivit on poistettu, ja vihreät rivit on lisätty. Niistä näet, mikä koodissa meni väärin. Kirjoitat syyn ketjuun omin sanoin." },
            { otsikko: "Liitä ketjun pohja", missa: "Havaintoissue, kenttä Add a comment", tee: "Palaa havaintoissueen selaimen Takaisin-painikkeella. Kopioi pohja ja liitä se kenttään Add a comment.", naet: "Kentässä on otsikko Virheenkorjausketju ja kuusi numeroitua riviä.", koodi: "## Virheenkorjausketju\n1. Havainto: \n2. Toistamisohje: \n3. Syy omin sanoin: \n4. Korjauscommit: \n5. Uusintatesti: \n6. Regressiotesti: test_regressio_(tämän issuen numero) tiedostossa tests/test_regressio.py", koodiOtsikko: "Ketjun pohja: kopioi tämä" },
            { otsikko: "Kirjoita havainto ja toistamisohje", missa: "Kommenttikenttä, rivit 1 ja 2", tee: "Kirjoita riville 1, mitä havaitsit. Kirjoita riville 2, millä vaiheilla virheen saa toistettua.", naet: "Riveillä 1 ja 2 on oma tekstisi. Tiedot löytyvät issuen kohdista Mitä tapahtui ja Toistamisohje." },
            { otsikko: "Kirjoita syy omin sanoin", missa: "Kommenttikenttä, rivi 3", tee: "Kirjoita riville 3 omin sanoin, mikä koodissa meni väärin ja miksi. Käytä apuna korjauscommitin muutoksia.", naet: "Rivillä 3 on 1–3 omaa virkettä. Issuen kuvauksen kohta Syy omin sanoin saa jäädä ennalleen, koska syy on nyt ketjussa." },
            { otsikko: "Kirjoita korjaus, uusintatesti ja regressiotesti", missa: "Kommenttikenttä, rivit 4–6", tee: "Kirjoita riville 4 korjauscommitin tunnus paperilta ja riville 5 uusintatestin tulos. Vaihda rivin 6 sulut ja niiden teksti issuen numeroksi.", naet: "Rivillä 4 on seitsemän merkin tunnus, esimerkiksi 3f2a1c9. Rivillä 5 lukee, ettei virhe enää toistu. Rivillä 6 lukee esimerkiksi test_regressio_12 tiedostossa tests/test_regressio.py." },
            { otsikko: "Lähetä kommentti", missa: "Kommenttikentän alareuna", tee: "Valitse Comment.", naet: "Kommentti näkyy issuessa. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa." }
          ],
          valmis: "Virheenkorjausketjun kuusi osaa on kirjattu havaintoissueen.",
          tallenna: "Virheenkorjausketju 1 havaintoissuen kommenttina GitHubissa.",
          esimerkki: "Syy omin sanoin: \"Pivot laskettiin maailmakoordinaateissa, vaikka lapsen oma muunnos on vanhemman koordinaatistossa. Siksi lapsi hyppäsi.\"",
          eiRiita: "\"Syy: koodissa oli bugi.\" Kirjauksesta ei näe, mikä meni väärin eikä miksi.",
          sanat: ["virheenkorjausketju"]
        },
        "49-6": {
          perii: ["49-4"],
          miksi: "Julkaistu väliversio näyttää, toimivatko vienti ja aiemmat osat yhdessä.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi on GitHubissa." },
            { otsikko: "Tee tagi v0.0.49", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.0.49", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.0.49 -> v0.0.49. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.0.49", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.0.49 on vihreä. Viikon versio on releasessa. Jos odotit vikatehtävää ja tulit tähän työvaiheeseen odottamaan, palaa työvaiheeseen Kirjoita regressiotesti valitusta virheestä, kun ohjaajan viesti tulee." }
          ],
          valmis: "Release v0.0.49 on GitHubissa, ja Actions-ajo on vihreä.",
          tallenna: "Release v0.0.49 GitHubiin.",
          sanat: []
        }
      },
      kuvaohjeet: ["blender-obj"],
      sykli: true
    },
    50: {
      type: "feature",
      feature: "Käyttäjä voi tallentaa ja avata työnsä. Ensimmäinen toimiva versio v0.1 on ladattavissa.",
      excerpt: "Keskeneräinen työ pitää voida tallentaa ja avata myöhemmin samassa tilassa.",
      connection: "Käyttäjän pitää voida jättää mallinnustyö kesken ja jatkaa sitä myöhemmin samasta tilanteesta. Tallennus ja avaus täydentävät ensimmäisen toimivan version, jossa piirros kulkee tuonnista muokkaukseen ja vientiin. Julkaiset pakollisen ytimen eli MVP:n versiona v0.1, jotta asiakkaat voivat kokeilla koko työnkulkua.",
      deliverable: "Tallennustapojen vertailu suunnitelmassa · testit 21–22 · tallennus ja avaus · tietoturva-arvio · release v0.1.",
      why: "Ilman tallennusta keskeneräinen malli katoaa, kun sovellus suljetaan. Ilman julkaisua asiakkaat eivät voi kokeilla pakollista ydintä eli MVP:tä viikolla 51.",
      done: "Tallennettu työ avautuu samassa tilassa, rikottu tiedosto antaa virheilmoituksen, [[tiedosto:tietoturva|`project-docs/tietoturva.md`]] on repositoryssa, ja releasen v0.1 zipistä purettu sovellus käynnistyy.",
      record: "Avausfunktio selityspohjalla, tallennustavan valinta perusteluineen, oman mallisi tallennustiedoston koko, tallennuksen kortin issuen numero ja testit 21–22, tietoturva-arvion tärkein uhka eli se, jonka seuraus käyttäjälle olisi vakavin, ja sen peruste, releasen v0.1 osoite, käynnistyskokeilun issuen numero ja näyttömatriisin vaatimukset (rivien nimet): testaa ohjelman toimintoja; sopii tehtävistä tiimin muiden jäsenten kanssa; jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi; valitsee ohjelmistoon sopivan tietovaraston; toteuttaa yhteyden tietovarastoon; hyödyntää rajapintoja ja käsittelee tietoa; arvioi ohjelmiston tietoturvaa; käyttää versionhallintaa; julkaisee ohjelman tuotantoympäristöön; suunnittelee, toteuttaa ja testaa ohjelmiston ohjelmistokomponenttikirjastoa käyttäen; julkaisee ohjelmiston asiakkaan ympäristöön.",
      funktio: "avausfunktio, joka lukee tallennustiedoston (testit 21–22)",
      skills: ["Tietovaraston valinta", "Yhteys tietovarastoon", "Tietoturvan arviointi", "Julkaisu ja versiointi"],
      termit: ["JSON", "tietoturva-arvio"],
      tehtavat: {
        "50-1": {
          versio: "2026-10-05",
          miksi: "Tallennustavan pitää sopia oman mallisi tietorakenteeseen.",
          osat: [
            { vanha: 0, otsikko: "Avaa suunnitelma ja etsi tallennustapa", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### Tallennustapa (viikko 50) ohjerivin jälkeen.", koodi: "### Tallennustapa (viikko 50)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Lue JSON-tiedoston malli", missa: "Selain, tämän työvaiheen JSON-malli", tee: "Lue ehdotetun JSON-tiedoston malli. Etsi siitä neljän kriteerin kohdat: polut, parametrit, transformit ja vanhempi–lapsi-suhteet.", naet: "Tiedät kohdat. Polut ovat piirroksen SVG-polut: mallin kohta polku. Parametrit ovat muodon luvut, esimerkiksi segmenttien määrä: kohta segmentit. Transformit ovat osan siirto, kierto ja skaalaus: kohta muunnos. Vanhempi–lapsi-suhteet ovat osan lapset: kohta lapset.", koodi: "{\n  \"versio\": 1,\n  \"osat\": [ { \"nimi\": \"Vartalo\", \"polku\": \"…\", \"muoto\": \"revolve\", \"segmentit\": 12,\n              \"muunnos\": [[…], …], \"lapset\": [ … ] } ]\n}", koodiOtsikko: "Ehdotetun JSON-tiedoston malli" },
            { vanha: 1, otsikko: "Kirjoita JSON-tiedoston rivi", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Tallennustapa (viikko 50)", tee: "Kirjoita kursorin kohdalle rivi, joka alkaa sanalla JSON-tiedosto:. Kerro jokaisesta neljästä kriteeristä, säilyykö se tiedostossa.", naet: "Ohjerivin jälkeen on JSON-tiedoston rivi. Siinä on vastaus jokaiseen neljään kriteeriin." },
            { vanha: 1, otsikko: "Kirjoita QSettingsin rivi", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Tallennustapa (viikko 50)", tee: "Paina JSON-tiedoston rivin lopussa Enter. Kirjoita uudelle riville QSettings: ja vastaa samoihin neljään kriteeriin. QSettings on Qt:n tapa tallentaa asetuksia. Se tallentaa avain–arvo-pareja, esimerkiksi ikkunan koon.", naet: "Ohjerivin jälkeen on kaksi riviä, ja molemmissa on samat neljä kriteeriä. Jos haluat lukea lisää, [Qt:n QSettings-ohje](https://doc.qt.io/qtforpython-6/PySide6/QtCore/QSettings.html) on englanniksi." },
            { otsikko: "Kirjaa Copilotin käyttö AI-lokiin", missa: "Vain jos kysyit vertailusta Copilotilta: VS Code, tiedosto [[tiedosto:ai-loki|ai-loki.md]]", tee: "Avaa tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]] ja paina Ctrl+End ja Enter. Kopioi lokimerkinnän pohja, paina Ctrl+V ja täytä pohja.", naet: "Tiedoston lopussa on merkintä. Kaistan tilalla lukee ilman korttia, koska kysymys ei kuulunut tehtäväkorttiin. Jos et kysynyt Copilotilta, rastita tämä osatehtävä.", koodi: "### pp.kk.vvvv · Copilot, ilman korttia\n- Mihin pyysin apua: QSettingsin vertailu neljällä kriteerillä\n- Päätös: hyväksyn / korjautan / hylkään\n- Peruste: \n- Aineistoviite: suunnitelma.md, otsikko ### Tallennustapa (viikko 50)\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.", koodiOtsikko: "Lokimerkinnän pohja: kopioi tämä" },
            { vanha: 0, otsikko: "Kirjoita valinta ja peruste", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Tallennustapa (viikko 50)", tee: "Napsauta välilehteä [[tiedosto:suunnitelma|suunnitelma.md]], napsauta sitten QSettingsin rivin loppuun ja paina Enter. Kirjoita uudelle riville, kumman tavan valitset, ja perustele valinta kriteereilläsi.", naet: "Ohjerivin jälkeen on kolme riviä. Kolmannella on valinta ja peruste, jossa mainitaan ainakin yksi kriteeri. Viikon ohjeet ja testi 22 on kirjoitettu JSON-tiedostolle." },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-listassa olivat [[tiedosto:suunnitelma|suunnitelma.md]] ja, jos kirjoitit merkinnän, [[tiedosto:ai-loki|ai-loki.md]]. GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjoita tallennustapojen vertailu suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Kerro ohjaajalle, jos valitsit QSettingsin", missa: "Vain jos valitsit QSettingsin: Teams, keskustelu ohjaajan kanssa", tee: "Kopioi viesti, täydennä peruste ja lähetä viesti ohjaajalle. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Odottaessasi tee työvaihe Määrittele tallennuksen testit, mutta aloita työvaihe Rakenna tallennus ja avaus vasta ohjaajan vastauksen jälkeen. Jos vastausta ei ole tullut seuraavana työpäivänä, lähetä sama viesti uudelleen. Jos valitsit JSON-tiedoston, rastita tämä osatehtävä.", koodi: "Hei Matti,\nvalitsin viikon 50 tallennustavaksi QSettingsin, koska ___.\nViikon ohjeet ja testi 22 on kirjoitettu JSON-tiedostolle. Mitä muutan testissä 22 ja työvaiheessa Rakenna tallennus ja avaus?", koodiOtsikko: "Viesti: kopioi tämä" }
          ],
          valmis: "Vaihtoehdot on vertailtu samoilla neljällä kriteerillä, ja valinta on perusteltu.",
          tallenna: "Vertailu ja valinta tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa ja tarvittaessa merkintä tiedostossa [[tiedosto:ai-loki|ai-loki.md]]. Kirjoitat oman tallennustiedostosi koon samaan kohtaan työvaiheessa Mittaa tallennustiedoston koko.",
          esimerkki: "Reseptikirjan vertailun rivit:\nTekstitiedosto: nimet säilyvät, ainekset säilyvät, kuvat eivät säily, kategoriat säilyvät vain tekstinä.\nSQLite-tietokanta: nimet, ainekset, kuvat ja kategoriat säilyvät.\nValinta: SQLite, koska kuvat ovat yksi neljästä kriteeristäni, eikä tekstitiedosto säilytä niitä.",
          eiRiita: "\"JSON, koska se on yleinen.\" Perustelu ei liity omaan malliin eikä omiin kriteereihin.",
          sanat: ["JSON", "transformi"]
        },
        "50-2": {
          versio: "2026-10-05",
          miksi: "Testit määrittelevät, säilyykö työ ja miten rikottu tiedosto käsitellään.",
          osat: [
            { vanha: 0, otsikko: "Päätä testin 21 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 21 tekee tiedostosta testiaineisto/oma-piirros.svg saman mallin kuin testi 19. Se tallentaa mallin ja avaa sen. Kirjoita paperille ne mallin tiedot, joiden pitää olla samat avauksen jälkeen.", naet: "Sinulla on lista tiedoista, joita testi 21 vertaa ennen tallennusta ja avauksen jälkeen. Neljä kriteeriäsi auttaa listan tekemisessä. Testi tallentaa tiedoston pytestin väliaikaiseen kansioon tmp_path, joten tiedosto ei jää repositoryyn." },
            { vanha: 1, otsikko: "Päätä testin 22 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 22 avaa rikotun JSON-tiedoston, josta puuttuu loppu. Kirjoita paperille virheilmoitus, jonka avausfunktio silloin antaa virheenä ValueError.", naet: "Sinulla on virheilmoituksen teksti. Avausfunktio ei palauta rikotusta tiedostosta mitään. Se nostaa virheen ValueError, ja ikkuna näyttää viestin käyttäjälle. Testi kirjoittaa koodilaatikon sisällön tiedostoon kansiossa tmp_path, avaa sen ja tarkistaa virheen rivillä, joka alkaa with pytest.raises. Koodilaatikon sisällöstä puuttuvat lopun merkit ] ja }.", koodi: "{\"versio\": 1, \"osat\": [", koodiOtsikko: "Rikotun tiedoston esimerkki: koko sisältö" },
            { otsikko: "Päätä avaus- ja tallennusfunktion rajapinnat", missa: "Paperi tai muistiinpanot", tee: "Kirjoita paperille avausfunktion nimi, syöte ja paluuarvo: syöte on tiedoston polku ja paluuarvo tiedoston tiedot versio ja osat. Kirjoita samoin tallennusfunktiosta: syöte on malli ja tiedoston polku, eikä se palauta mitään.", naet: "Paperilla on kaksi rajapintaa samassa muodossa kuin Reseptikirjan mallissa: avaa_reseptit(polku) ja tallenna_reseptit(reseptit, polku). Nimet ovat pienillä kirjaimilla ja verbi ensin. Sanojen välissä on alaviiva, eikä nimissä ole kirjaimia ä ja ö. Kirjoitat testien 21 ja 22 odotukset ja rajapinnat seuraavassa työvaiheessa korttiin." }
          ],
          valmis: "Testien 21 ja 22 syötteet ja omat odotetut tulokset sekä avaus- ja tallennusfunktion rajapinnat on päätetty ennen toteutusta.",
          tallenna: "Odotukset ja rajapinnat kortin issueen seuraavassa työvaiheessa. Kirjoitat testit työsyklin kohdassa 3a kansioon tests.",
          esimerkki: "Toinen sovellus: testi tallentaa reseptin Kesäkeitto ja avaa sen. Odotettu tulos: nimi, ainekset ja annosmäärä 4 ovat samat. Rikottu tiedosto: virhe ValueError, viesti \"Tiedosto on rikki. Reseptiä ei avattu.\" Rajapinnat: avaa_reseptit(polku) · syöte: tiedoston polku · paluuarvo: lista resepteistä. tallenna_reseptit(reseptit, polku) · syöte: lista resepteistä ja tiedoston polku · paluuarvo: ei mitään.",
          eiRiita: "\"Tallennus toimii, ja rikottu tiedosto ei toimi.\" Testi ei voi tarkistaa, mitkä tiedot säilyvät eikä mikä virheilmoitus tulee.",
          sanat: ["rajapinta", "JSON"]
        },
        "50-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Käyttäjän pitää voida jatkaa keskeneräistä työtään myöhemmin.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Jos valitsit QSettingsin, aloita tämä työvaihe vasta, kun ohjaaja on vastannut viestiisi." },
            { vanha: 0, otsikko: "Suunnittele tallennuksen kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (tallennus ja avaus JSON-tiedostona), Rajapinta (avausfunktio paperilta), Testi-rivit testeille 21 ja 22 paperilta ja Lisäksi koodilaatikon tekstillä, johon täydennät tallennusfunktion paperilta.", naet: "Copilot on kirjoittanut kortin. Hyväksymiskriteereissä ovat versionumero 1 sekä painikkeet Tallenna työ ja Avaa työ. Versionumerosta vanhan tiedoston tunnistaa myöhemmin. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen.", koodi: "Tiedostoon tallennetaan versionumero 1. Tallennusfunktio ___ saa ___ eikä palauta mitään. Sovellukseen tulee painikkeet Tallenna työ ja Avaa työ. Painike Avaa avaa yhä SVG-tiedoston. Rikotusta tiedostosta avausfunktio nostaa virheen ValueError testin 22 viestillä, ja ikkuna näyttää viestin käyttäjälle.", koodiOtsikko: "Lisäksi-rivin teksti: kopioi tämä" },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet ([[ohje:issue]]) ja kirjoita issuen numero paperille.", naet: "Kortin issue on GitHubissa. Siinä ovat testien 21 ja 22 odotetut tulokset. Kortti on viikon ensimmäinen, joten issuessa on myös kommentti Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Luo testitiedosto (askel 3a)", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, Explorer", tee: "Avaa tiedosto tests/test_vienti.py, maalaa sen alun import- ja from-rivit ja paina Ctrl+C. Luo kansioon tests uusi tiedosto test_tallennus.py ja liitä rivit siihen. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedoston tests/test_tallennus.py alussa ovat samat import- ja from-rivit kuin tiedostossa test_vienti.py. Rivien tuomilla funktioilla testi 21 tekee saman mallin kuin testi 19." },
            { otsikko: "Kirjoita testit 21 ja 22 (askel 3a)", missa: "Tiedosto tests/test_tallennus.py, tiedoston loppu", tee: "Paina Ctrl+End ja Enter, kopioi testipohja ja paina Ctrl+V. Vaihda moduuli, funktiot ja ___-kohdat askeleen 3 ohjeen ja paperin mukaan ja hyväksy täydennys def-rivien lopussa. Ohje: [[ohje:taydennys]].", naet: "Testissä 21 on assert-rivi, joka vertaa paperin tietoja ennen tallennusta ja avauksen jälkeen. Testissä 22 on rivi with pytest.raises(ValueError ja oma virheilmoituksesi. Kansio tmp_path on pytestin väliaikainen kansio: pytest antaa kansion testille, kun tmp_path on testifunktion sulkeissa. Kun molemmat testit on kirjoitettu, issuessa rastitetaan kohta 3a.", koodi: "from vektoripaja.moduuli import tallennusfunktio, avausfunktio\n\n\n# Testi 21: malli tiedostosta testiaineisto/oma-piirros.svg kuten testissä 19, tallennus tiedostoon tmp_path / \"malli.json\" ja avaus -> ___ ovat samat\ndef test_21_tallennus_ja_avaus(tmp_path):\n\n\n# Testi 22: tiedosto tmp_path / \"rikki.json\", jonka sisältö on {\"versio\": 1, \"osat\": [ -> virhe ValueError, jonka viesti on \"___\"\ndef test_22_rikottu_tiedosto(tmp_path):\n", koodiOtsikko: "Testipohja: kopioi tämä" },
            { otsikko: "Rakenna tallennus ja avaus (askel 3b)", missa: "Työsykli, askel 3 Rakenna, kohta 3b", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 3. Tee kohdan 3b ohjeet kortin kaistalla ja rastita issuessa 3b.", naet: "Sovellus tallentaa mallin painikkeella Tallenna työ ja avaa sen painikkeella Avaa työ. Jos et tiedä, miten tallennus tehdään, avaa tämän työvaiheen kohta Tallennus ja avaus: ehdotetun JSON-muodon esimerkki. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Tee kortti loppuun", missa: "Työsykli, askeleet 4 Tarkista, 5 Raportoi ja 6 Kirjaa", tee: "Avaa työsykli työvaiheen painikkeesta. Se aukeaa askeleeseen 4. Tee askeleiden 4–6 ohjeet järjestyksessä.", naet: "Kortin issue on suljettu, ja siinä on oma kommentti kummastakin testistä 21 ja 22. Tallennettu malli avautuu samassa tilassa, ja rikottu tiedosto antaa virheilmoituksen. Valitse jokaisen askeleen jälkeen Tein tämän ja lopuksi Palaa työvaiheeseen." }
          ],
          valmis: "Tallennettu työ avautuu samassa tilassa, ja rikottu tiedosto antaa hallitun virheilmoituksen.",
          tallenna: "Koodi ja testitiedosto tests/test_tallennus.py GitHubiin. Testien 21 ja 22 tulokset kortin issueen.",
          esimerkki: "Reseptikirjan testikommentit ja täydennykset, jotka hyväksyin:\n# Testi 11: resepti Kesäkeitto tallennetaan tiedostoon tmp_path / \"reseptit.json\" ja avataan -> nimi, ainekset ja annosmäärä ovat samat\ndef test_11_tallennus_ja_avaus(tmp_path):\n    polku = tmp_path / \"reseptit.json\"\n    tallenna_reseptit([kesakeitto()], polku)\n    assert avaa_reseptit(polku) == [kesakeitto()]\n\n# Testi 12: rikottu tiedosto -> virhe ValueError, jonka viesti on \"Tiedosto on rikki. Reseptiä ei avattu.\"\ndef test_12_rikottu(tmp_path):\n    polku = tmp_path / \"rikki.json\"\n    polku.write_text(\"[{\")\n    with pytest.raises(ValueError, match=\"Tiedosto on rikki\"):\n        avaa_reseptit(polku)",
          eiRiita: "# testaa tallennus\nKommentista puuttuvat syöte ja odotettu tulos. Silloin täydennys arvaa ne, eikä testi tarkista sinun tulostasi.",
          apu: {
            otsikko: "Tallennus ja avaus: ehdotetun JSON-muodon esimerkki",
            tree: "{\n  \"versio\": 1,\n  \"osat\": [ { \"nimi\": \"Vartalo\", \"polku\": \"…\", \"muoto\": \"revolve\", \"segmentit\": 12,\n              \"muunnos\": [[…], …], \"lapset\": [ … ] } ]\n}",
            actions: [
              "Tallenna oma data, älä trimesh- tai PyVista-olioita: `json.dumps(data, indent=2)`.",
              "Muunnokset ovat numpyn matriiseja. Tallenna ne listoina: `muunnos.tolist()`.",
              "Kysy tallennuspaikka painikkeen Tallenna työ tiedostoikkunalla: `QFileDialog.getSaveFileName(self, \"Tallenna työ\", \"oma-malli.json\", \"Vektoripajan työ (*.json)\")`.",
              "Kysy avattava tiedosto painikkeen Avaa työ tiedostoikkunalla: `QFileDialog.getOpenFileName(self, \"Avaa työ\", \"\", \"Vektoripajan työ (*.json)\")`. Painike Avaa avaa yhä SVG-tiedoston kuten [[vk 43|viikolla 43]].",
              "Lue JSON `try`–`except json.JSONDecodeError` -lohkossa. Nosta except-osassa virhe `ValueError` testin 22 viestillä. Ikkuna näyttää viestin käyttäjälle, eikä sovellus kaadu (testi 22).",
              "Tarkista, että tiedostossa on `versio` ja `osat`, ennen kuin rakennat mallin."
            ],
            code: "TALLENNUKSEN TARKISTUSLISTA\n[ ] tallennetaan oma data, ei trimesh- tai PyVista-olioita\n[ ] versionumero tiedostossa\n[ ] avaus palauttaa saman tilan (testi 21)\n[ ] rikottu tiedosto → virheilmoitus (testi 22)\n[ ] tietoturva-arvio repositoryssa",
            test: "Tallenna malli. Sulje sovellus ja käynnistä se uudelleen. Avaa tiedosto. Mallin pitää näyttää samalta.",
            links: [
              ["Python: json", "https://docs.python.org/3/library/json.html"]
            ]
          },
          sanat: ["JSON"]
        },
        "50-6": {
          perii: ["50-3"],
          miksi: "Oman mallisi tallennustiedoston koko on osa tallennustavan perustelua.",
          osat: [
            { otsikko: "Tuo oma piirros Vektoripajaan", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse sovelluksessa Avaa ja avaa tiedosto oma-piirros.svg kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]].", naet: "Malli näkyy. Hierarkiapaneelissa ovat osat Vartalo, Pää ja Korvat. Painike Avaa avaa SVG-tiedoston, ja painike Avaa työ avaa tallennetun työn.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tallenna malli Tiedostot-kansioon", missa: "Vektoripaja ja tallennusikkuna", tee: "Valitse sovelluksessa painike Tallenna työ. Valitse tallennusikkunan vasemmasta reunasta Tiedostot (Documents), kirjoita tiedostonimeksi oma-malli.json ja valitse Tallenna.", naet: "Tallennus on valmis. Tiedosto oma-malli.json ei ole repositoryssa, joten se ei näy VS Coden Changes-listassa eikä siitä tehdä committia." },
            { otsikko: "Katso tallennustiedoston koko", missa: "Resurssienhallinta, kansio Tiedostot", tee: "Paina Windows-näppäin+E ja valitse vasemmasta reunasta Tiedostot. Napsauta tiedostoa oma-malli.json hiiren oikealla painikkeella ja valitse Ominaisuudet.", naet: "Ikkunan rivillä Koko on tiedoston koko, esimerkiksi 14,2 kt. Jätä ikkuna auki, kunnes olet kirjoittanut luvun." },
            { otsikko: "Avaa suunnitelma ja etsi tallennustapa", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3.", naet: "Kursori on otsikon ### Tallennustapa (viikko 50) rivillä. Otsikon jälkeen ovat ohjerivi, JSON-tiedoston rivi, QSettingsin rivi ja valintasi rivi.", koodi: "### Tallennustapa (viikko 50)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kirjoita tallennustiedoston koko", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Tallennustapa (viikko 50)", tee: "Napsauta valintasi riviä ja paina End ja Enter. Kirjoita uudelle riville oman mallisi tallennustiedoston koko kilotavuina.", naet: "Valintasi rivin jälkeen on rivi, jossa ovat koko ja yksikkö kt. Riviä ei ole valinnan ja QSettingsin rivin välissä." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa tallennustiedoston koko suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Oman mallisi tallennustiedoston koko on [[tiedosto:suunnitelma|suunnitelmassa]] GitHubissa.",
          tallenna: "Tallennustiedoston koko tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa. Tallennustiedosto oma-malli.json jää Tiedostot-kansioon.",
          esimerkki: "Reseptikirjan rivi: \"Oma reseptikirja, 12 reseptiä: tallennustiedosto 9 kt.\"",
          eiRiita: "\"Tiedosto on pieni.\" Luku ja yksikkö puuttuvat.",
          sanat: ["JSON"]
        },
        "50-5": {
          perii: ["50-3"],
          miksi: "Arvio näyttää, miten sovellus käsittelee haitallisen SVG:n ja rikotun tallennustiedoston.",
          osat: [
            { otsikko: "Avaa tietoturva-arvio", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:tietoturva|project-docs/tietoturva.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedostossa on taulukko, jossa ovat sarakkeet Uhka, Testi, Tulos ja Toimenpide. Kaksi riviä on valmiina." },
            { otsikko: "Kirjoita haitallisen SVG:n rivi", missa: "Tiedosto [[tiedosto:tietoturva|tietoturva.md]], rivi Haitallinen SVG, jossa on script-elementti", tee: "Kirjoita sarakkeisiin Tulos ja Toimenpide testin 4 tulos ja toimenpide. Ohje: [[ohje:markdown]], kohta Taulukon rivi. Testin 4 tulos on [[github:issues?q=is%3Aissue+%22Testi+4%22|issuessa, jossa lukee Testi 4]].", naet: "Rivillä on neljä täytettyä saraketta. Sarakkeiden välissä on merkki |." },
            { otsikko: "Kirjoita rikotun tallennuksen rivi", missa: "Tiedosto [[tiedosto:tietoturva|tietoturva.md]], rivi Rikottu tallennustiedosto", tee: "Kirjoita sarakkeisiin Tulos ja Toimenpide testin 22 tulos ja toimenpide. Testin 22 tulos on [[github:issues?q=is%3Aissue+%22Testi+22%22|tallennuksen kortin issuessa]].", naet: "Molemmilla riveillä on neljä täytettyä saraketta." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:tietoturva|tietoturva.md]] muutokset.", koodi: "Kirjoita tietoturva-arvio", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Käy tallennuksen tarkistuslista läpi", missa: "Työvaihe Rakenna tallennus ja avaus, kohta Tallennus ja avaus: ehdotetun JSON-muodon esimerkki", tee: "Avaa kohta ja lue tallennuksen tarkistuslista. Kirjoita paperille rivit, jotka eivät täyttyneet.", naet: "Tiedät, täyttyikö jokainen listan rivi. Viimeinen rivi täyttyi, kun teit tietoturva-arvion commitin." },
            { otsikko: "Kirjaa tarkistuslista issueen", missa: "Selain, tallennuksen kortin issue [[github:issues?q=is%3Aissue+is%3Aclosed|suljetuissa issueissa]]", tee: "Kopioi kommentti ja liitä se kenttään Add a comment. Täydennä tyhjä kohta ja valitse Comment.", naet: "Kommentti näkyy tallennuksen kortin issuessa.", koodi: "Tallennuksen tarkistuslista käyty. Rivit, jotka eivät täyttyneet: ___ (tai: ei yhtään)", koodiOtsikko: "Kommentti issueen: kopioi tämä" }
          ],
          valmis: "Taulukon kahdella ensimmäisellä rivillä on tulos ja toimenpide, arvio on GitHubissa, ja tarkistuslistan tulos on kortin issuessa.",
          tallenna: "Tietoturva-arvio tiedostossa [[tiedosto:tietoturva|tietoturva.md]] GitHubissa. Tarkistuslistan tulos tallennuksen kortin issueen.",
          esimerkki: "Reseptikirjan tietoturva-arvio:\n| Uhka | Testi | Tulos | Toimenpide |\n|---|---|---|---|\n| Reseptitiedostossa on 10 000 merkin nimi | Testi 9 | Sovellus jumittui 4 s | Nimen enimmäispituus 100 merkkiä |\n| Rikottu reseptitiedosto | Testi 12 | Virheilmoitus, ei kaatumista | Ei toimenpiteitä |",
          eiRiita: "| Hakkerit | | Turvallinen | |\nUhka on epämääräinen, ja testi ja toimenpide puuttuvat.",
          sanat: ["tietoturva-arvio", "JSON"]
        },
        "50-4": {
          versio: "2026-10-05",
          miksi: "Asiakkaat tarvitsevat ladattavan version seuraavan viikon kokeiluun.",
          osat: [
            { vanha: 0, otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Viikon koodi ja dokumentit ovat GitHubissa." },
            { vanha: 0, otsikko: "Tee tagi v0.1", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v0.1", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v0.1 -> v0.1. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v0.1", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v0.1 on vihreä. Askeleessa Aja itsetesti valmiille .exe:lle lukee ITSETESTI LÄPI." },
            { vanha: 1, otsikko: "Kokeile releasea puretusta zipistä", missa: "Selain ja Resurssienhallinta", tee: "Lataa zip releasesta, pura se ja käynnistä Vektoripaja.exe puretusta kansiosta. Ohje: [[ohje:release]].", naet: "Vektoripaja.exe käynnistyy ilman VS Codea. Jos se ei käynnisty, kirjaat tuloksen ei läpi seuraavissa osatehtävissä." },
            { vanha: 1, otsikko: "Avaa tyhjä issue", missa: "Selain, GitHub", tee: "Avaa [[github:issues/new/choose|uuden issuen valinta]]. Valitse vaihtoehto, jossa lukee blank issue.", naet: "Issue-lomake aukeaa. Kuvauskenttä on tyhjä." },
            { vanha: 1, otsikko: "Kirjaa käynnistyskokeilun tulos", missa: "Issue-lomake", tee: "Kopioi kuvaus ja liitä se kuvauskenttään. Täydennä havaittu tulos, kirjoita otsikkokenttään Käynnistyskokeilu v0.1 ja valitse Create.", naet: "Issue on GitHubissa, ja siinä on käynnistyskokeilun tulos. Kirjoita issuen numero paperille.", koodi: "Release v0.1: käynnistyskokeilu\nOdotettu tulos: puretusta zipistä käynnistetty Vektoripaja.exe avautuu.\nHavaittu tulos: \nTulos: läpi / ei läpi", koodiOtsikko: "Issuen kuvaus: kopioi tämä" },
            { vanha: 1, otsikko: "Sulje issue tai pyydä apua", missa: "Issuen sivu ja Teams", tee: "Jos tulos on läpi, valitse issuen alareunasta Close issue. Jos tulos on ei läpi, luo havaintoissue ([[ohje:havaintoissue]]) ja lähetä viesti ohjaajalle. Ohje: [[ohje:teams]].", naet: "Läpi: issuen kohdalla lukee Closed, ja tulos jää issueen näkyviin. Ei läpi: issue jää auki, ja ohjaaja vastaa, koska asiakkaat tarvitsevat toimivan version viikolla 51. Odottaessasi kirjoita viikon kirjaus. Jos vastausta ei ole tullut seuraavana työpäivänä, lähetä sama viesti uudelleen.", koodi: "Hei Matti,\nreleasen v0.1 Vektoripaja.exe ei käynnisty puretusta zipistä.\nHavaintoissue: #___\nAsiakkaat kokeilevat versiota viikolla 51. Miten jatkan?", koodiOtsikko: "Viesti: kopioi tämä" }
          ],
          valmis: "Releasen v0.1 zipistä purettu sovellus käynnistyy.",
          tallenna: "Release v0.1 GitHubiin ja käynnistyskokeilun tulos omaan issueensa.",
          sanat: ["MVP"]
        }
      },
      sykli: true
    },
    51: {
      type: "katselmointi",
      feature: "Asiakkaat ovat kokeilleet ensimmäistä versiota, ja seuraavat muutokset on sovittu.",
      excerpt: "Ennen joulua kokeilemme itse ensimmäistä toimivaa versiota ja kerromme, mitä muutetaan.",
      connection: "Pakollinen ydin eli MVP on nyt valmis asiakkaiden kokeiltavaksi, joten tarkistat heidän kanssaan, vastaako se sovittua tarvetta. Katselmoinnin havainnot ja asiakkaiden prioriteetit ohjaavat korjauksia sekä joululoman jälkeistä jatkokehitystä. Tilatiedostoon kirjattu seuraava tehtävä auttaa jatkamaan samasta kohdasta loman jälkeen.",
      deliverable: "Viiden minuutin demo · katselmointiloki rooleilla · havainnot issueina prioriteetteineen · tilatiedoston Seuraavana-kohta viikolle 2.",
      why: "Ilman katselmointia jatkokehitys perustuu arvaukseen. Asiakkaiden prioriteetit ohjaavat, mitkä tärkeän jatkon toiminnot tehdään ensin.",
      done: "Katselmointiloki on tiedostossa [[tiedosto:katselmointi|`project-docs/katselmointi.md`]], jokaisesta muutostoiveesta on issue prioriteetteineen, ja tilatiedoston Seuraavana-kohdassa on viikon 2 ensimmäinen tehtävä issue-numeroineen.",
      record: "Asiakkaiden tärkein havainto eli prioriteetin 1 muutostoive tiivistettynä, oma tulkintasi erikseen, katselmoinnin havaintoissueiden numerot, issue, jossa on kommentti Sovittu viikkopalaverissa, tilatiedoston Seuraavana-kohdan issue ja näyttömatriisin vaatimukset (rivien nimet): sopii tehtävistä tiimin muiden jäsenten kanssa; arvioi ratkaisujen toimivuuden yhdessä tiimin kanssa; viestii tekniset asiat asiakaslähtöisesti; osallistuu version katselmointiin; asettaa kehitystiimin kanssa toteutettavat toiminnot tärkeysjärjestykseen. Viikon viimeinen työpäivä on torstai 17.12.: kirjoita kirjaus silloin.",
      skills: ["Version katselmointi", "Asiakaslähtöinen viestintä", "Palautteen priorisointi"],
      termit: ["katselmointi"],
      tehtavat: {
        "51-1": {
          versio: "2026-10-05",
          miksi: "Asiakkaat tarvitsevat sovitun ajan ja ladattavan version. Ohjaaja päättää, miten katselmointi kirjataan.",
          osat: [
            { otsikko: "Valitse aika ja paikka", missa: "Paperi tai muistiinpanot", tee: "Valitse katselmoinnille aika keskiviikolta 16.12. tai torstain 17.12. aamupäivältä. Valitse paikaksi sama paikka, jossa viikkopalaveri pidetään.", naet: "Paperilla ovat päivä, kellonaika ja paikka. Näin ehdit harjoitella demon ennen katselmointia ja kirjata havainnot ennen viikon loppua." },
            { vanha: 0, otsikko: "Ehdota katselmointiaikaa", missa: "Teams, ryhmäkeskustelu, jossa ovat Matti Seise ja Antti Honkasalo", tee: "Kopioi viesti ja täydennä päivä, kellonaika ja paikka paperilta. Lähetä viesti. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Asiakkaat vahvistavat ajan vastauksessaan. Odottaessasi jatka seuraavasta osatehtävästä. Jos vastausta ei ole tullut seuraavana työpäivänä, lähetä sama viesti uudelleen. Jos aika ei sovi, ehdota samalla viestillä toista aikaa keskiviikolta tai torstain aamupäivältä.", koodi: "Hei Matti ja Antti,\nVektoripajan ensimmäinen versio v0.1 on valmis kokeiltavaksi.\nEhdotan katselmointia: ___ klo ___.\nPaikka: ___. Jos joku teistä ei pääse paikalle, soitan Teams-puhelun tähän keskusteluun ja jaan ruutuni.\nSopiiko aika teille?", koodiOtsikko: "Viesti: kopioi tämä" },
            { vanha: 0, otsikko: "Liitä viesti Antille", missa: "Teams, keskustelu Antti Honkasalon kanssa", tee: "Kopioi viesti ja liitä se viestikenttään. Ohje: [[ohje:teams]]. Älä vielä paina Enter.", naet: "Viesti näkyy viestikentässä. Sen viimeisellä rivillä lukee Latausosoite:. Liität osoitteen seuraavassa osatehtävässä.", koodi: "Hei Antti,\nlataa katselmoinnin versio v0.1 omalle Windows-koneellesi ja pura zip ennen katselmointia.\nKokeilussa voit avata piirroksen esimerkki.svg. Se on puretun kansion Vektoripaja sisällä kansiossa _internal\\esimerkit.\nLatausosoite: ", koodiOtsikko: "Viesti: kopioi tämä" },
            { vanha: 0, otsikko: "Liitä releasen osoite ja lähetä", missa: "Selain, GitHub, ja Teams", tee: "Avaa [[github:releases/tag/v0.1|releasen v0.1 sivu]], napsauta osoiteriviä ja paina Ctrl+C. Palaa Teamsiin, napsauta viestin loppuun ja paina Ctrl+V ja Enter.", naet: "Releasen sivulla lukee v0.1, ja kohdassa Assets on zip. Viesti on lähetetty Antille, ja sen lopussa on osoite, joka loppuu releases/tag/v0.1." },
            { vanha: 0, otsikko: "Avaa suunnitelma ja tarkista kirjaustapa", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3.", naet: "Kursori on otsikon rivillä osiossa C · Ohjaajan päätökset. Jos ohjerivin jälkeen on jo ohjaajan päätös ja päivä, rastita tämä ja kolme seuraavaa osatehtävää.", koodi: "### Katselmoinnin kirjaustapa (ennen viikkoa 51)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kysy ohjaajalta kirjaustapa", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kysy ohjaajalta: kirjataanko havainnot rooleilla tiedostoon [[tiedosto:katselmointi|katselmointi.md]] ja lähetetäänkö nimet ja sanatarkat lausumat ohjaajalle Teamsissa? Kirjoita vastaus ja päivä paperille.", naet: "Paperilla on ohjaajan päätös ja palaverin päivä. Kirjoitat palaverin sopimuksen issueen kommenttina työvaiheessa Muuta havainnot tehtäviksi. Jos ohjaaja päättää toisin, kysy samalla, mitä työvaiheissa Kerää asiakkaiden palaute ja Kirjoita katselmointiloki muutetaan." },
            { vanha: 0, otsikko: "Kirjoita ohjaajan päätös", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Katselmoinnin kirjaustapa (ennen viikkoa 51)", tee: "Napsauta otsikon jälkeistä ohjeriviä, joka alkaa merkillä >, ja paina End ja Enter. Kirjoita uudelle riville ohjaajan päätös ja päivä paperilta.", naet: "Ohjerivin jälkeen on päätös ja päivä, esimerkiksi 14.12.2026." },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa katselmoinnin kirjaustapa suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Katselmointiaika ja paikka on sovittu, Antilla on latausosoite, ja ohjaajan päättämä kirjaustapa on GitHubissa.",
          tallenna: "Aika ja releasen osoite Teams-viesteissä. Kirjaustapa tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan käyttäjätesti: \"Havainnot kirjoitetaan tiedostoon kayttajatesti.md rooleilla käyttäjä 1 ja käyttäjä 2. Nimet lähetetään ohjaajalle Teamsissa. Ohjaajan päätös 3.3.2026.\"",
          eiRiita: "\"Sovittu.\" Merkinnästä ei näe, mitä sovittiin eikä milloin.",
          sanat: []
        },
        "51-5": {
          perii: ["51-1"],
          miksi: "Demo näyttää asiakkaille käyttäjän koko työnkulun viidessä minuutissa omilla piirroksillasi.",
          osat: [
            { otsikko: "Tarkista demon piirrokset", missa: "VS Code, Explorer, kansio testiaineisto", tee: "Napsauta kansiota testiaineisto. Tarkista, että siinä ovat tiedostot oma-piirros.svg ja maljakko.svg.", naet: "Molemmat tiedostot ovat kansiossa. Näytät demossa revolven eli pyörähdyskappaleen tiedostolla maljakko.svg ja muut kohdat tiedostolla oma-piirros.svg. Järjestys on demon rungossa." },
            { otsikko: "Avaa demon piirros Inkscapessa", missa: "Inkscape, ylävalikko", tee: "Käynnistä Inkscape ja valitse File ja sitten Open. Avaa tiedosto oma-piirros.svg kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]].", naet: "Piirros on auki, ja Inkscapen otsikkorivillä lukee oma-piirros.svg. Näytät sen demon kohdassa 2 ennen tuontia." },
            { otsikko: "Lue demon runko", missa: "Selain, tämän työvaiheen demon runko", tee: "Lue demon rungon kuusi otsikkoa. Kirjoita ne paperille, jos tarvitset muistilappua demossa.", naet: "Tiedät demon kohdat järjestyksessä: tavoite, tuonti, revolve ja inflate eli putki, transformit, vienti ja kysymys asiakkaille. Tiedät myös, kumpi tiedosto on auki missäkin kohdassa.", koodi: "1. Tavoite yhdellä lauseella\n2. Tuonti: näytä oma-piirros.svg Inkscapessa ja avaa se Vektoripajan Avaa-painikkeella\n3. Revolve: avaa maljakko.svg ja tee pyörähdyskappale. Inflate: avaa oma-piirros.svg uudelleen ja tee yhdestä polusta putki\n4. Transformit ja pivot\n5. Vienti .obj-tiedostoksi painikkeella Vie OBJ\n6. Kysymys asiakkaille: mitä muutetaan ensin?", koodiOtsikko: "Demon runko (5 min)" },
            { otsikko: "Käynnistä releasen v0.1 Vektoripaja", missa: "Resurssienhallinta, Lataukset-kansio", tee: "Avaa Lataukset-kansiosta kansio Vektoripaja-v0.1-windows ja sen sisältä kansio Vektoripaja. Kaksoisnapsauta tiedostoa Vektoripaja.exe.", naet: "Vektoripaja käynnistyy. Näytät demon tällä releasen versiolla, jota myös asiakkaat kokeilevat. Jos kansiota ei ole, lataa ja pura release v0.1. Ohje: [[ohje:release]]." },
            { otsikko: "Avaa ajastin", missa: "Windowsin Kello-sovellus", tee: "Paina Windows-näppäintä, kirjoita Kello ja paina Enter. Valitse vasemmasta reunasta Ajastin.", naet: "Ajastimien listassa on 5 minuutin ajastin. Jos sitä ei ole, lisää se +-painikkeella: kirjoita minuuteiksi 5 ja valitse Tallenna." },
            { otsikko: "Harjoittele demo ajastettuna", missa: "Vektoripaja, Inkscape ja Kello-sovelluksen ajastin", tee: "Käynnistä 5 minuutin ajastin sen käynnistyspainikkeella. Näytä demon kohdat 1–6 järjestyksessä demon rungon tiedostoilla.", naet: "Demo on valmis, ennen kuin ajastin loppuu. Jos aika loppuu kesken, lyhennä selityksiä ja harjoittele uudelleen." }
          ],
          valmis: "Demon piirrokset on tarkistettu, ja demo mahtuu viiteen minuuttiin releasen v0.1 versiolla.",
          tallenna: "Ei tallennettavaa tiedostoa. Näytät demon katselmoinnissa.",
          sanat: ["revolve", "inflate"]
        },
        "51-2": {
          versio: "2026-10-05",
          miksi: "Asiakkaiden havainnot ohjaavat seuraavan vaiheen parannuksia.",
          osat: [
            { otsikko: "Avaa demon ohjelmat", missa: "Resurssienhallinta ja Inkscape, ennen katselmoinnin alkua", tee: "Avaa Lataukset-kansiosta kansio Vektoripaja-v0.1-windows ja sen sisältä kansio Vektoripaja, ja kaksoisnapsauta tiedostoa Vektoripaja.exe. Avaa Inkscapessa tiedosto oma-piirros.svg kansiosta testiaineisto. Ohje: [[ohje:tiedostoikkuna]].", naet: "Vektoripaja ja Inkscape ovat auki, ja niiden kuvakkeet näkyvät tehtäväpalkissa. Voit nyt jakaa Vektoripajan ikkunan puhelussa." },
            { otsikko: "Jaa näyttö, jos asiakas on etänä", missa: "Vain jos asiakas osallistuu etänä: Teams, katselmoinnin ryhmäkeskustelu", tee: "Aloita videopuhelu ja jaa Vektoripajan ikkuna. Ohje: [[ohje:teams]], kohta Jos aloitat puhelun ja jaat näytön.", naet: "Etänä oleva asiakas näkee Vektoripajan ikkunan. Englanninkielisessä Teamsissa Jaa-painikkeen nimi on Share. Jos kaikki ovat paikalla, rastita tämä osatehtävä." },
            { vanha: 0, otsikko: "Merkitse havainnot paperille koko katselmoinnin ajan", missa: "Paperi tai muistiinpanot, demon, kokeilun ja prioriteettien kysymisen aikana", tee: "Merkitse paperille jokainen havainto ja sen tekijä heti, kun havainto syntyy: asiakas 1 on Antti ja asiakas 2 Matti. Kirjoita tärkeät lausumat sanatarkasti lainausmerkkeihin.", naet: "Paperilla on jokaisesta havainnosta rooli ja kuvaus sekä sanatarkat lausumat. Muistiinpanot ovat vain sinun käytössäsi. Rastita tämä osatehtävä, kun katselmointi on ohi." },
            { vanha: 0, otsikko: "Näytä demo", missa: "Katselmointi asiakkaiden kanssa", tee: "Näytä demo demon rungon mukaan releasen v0.1 Vektoripajalla.", naet: "Asiakkaat ovat nähneet käyttäjän koko työnkulun tuonnista vientiin." },
            { vanha: 0, otsikko: "Anna asiakkaiden kokeilla itse", missa: "Katselmointi asiakkaiden kanssa", tee: "Pyydä asiakkaita tekemään itse tuonti, revolve tai inflate ja vienti. Antti avaa omalla koneellaan piirroksen esimerkki.svg puretusta zipistä, ja Matti käyttää sinun koneellasi demon tiedostoja.", naet: "Molemmat asiakkaat ovat kokeilleet versiota itse. Antin piirros on puretun kansion Vektoripaja sisällä kansiossa _internal\\esimerkit. Jos Antti on etänä, pyydä häntä jakamaan näyttönsä Teams-puhelussa." },
            { vanha: 0, otsikko: "Kysy asiakkaiden prioriteetit", missa: "Katselmoinnin loppu", tee: "Kysy asiakkailta: mitä muutetaan ensin? Merkitse jokaisen muutostoiveen viereen järjestysnumero: 1 on tärkein, 2 seuraava ja niin edelleen.", naet: "Jokaisen muutostoiveen vieressä on eri numero. Kehu ei saa numeroa. Jos asiakkaat ovat eri mieltä järjestyksestä, pyydä heitä sopimaan yksi numero ennen katselmoinnin loppua." },
            { vanha: 0, otsikko: "Lähetä nimet ja lausumat ohjaajalle", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Kopioi viesti ja kirjoita lausumat paperilta viivalla alkaville riveille. Lähetä viesti ohjaajalle. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Roolit ovat samat kuin tiedostokortissa [[tiedosto:katselmointi|katselmointi.md]]. Repositoryyn kirjoitat henkilöistä vain roolit asiakas 1 ja asiakas 2.", koodi: "Hei Matti,\nkatselmoinnin nimet ja sanatarkat lausumat. Näitä ei kirjoiteta julkiseen repositoryyn.\nAsiakas 1: Antti Honkasalo\nAsiakas 2: Matti Seise\nSanatarkat lausumat:\n- ", koodiOtsikko: "Viesti: kopioi tämä" }
          ],
          valmis: "Molemmat asiakkaat ovat kokeilleet versiota, jokaisella muutostoiveella on prioriteetti, ja nimet ja sanatarkat lausumat ovat ohjaajalla.",
          tallenna: "Nimet ja sanatarkat lausumat ohjaajan Teams-keskustelussa. Havainnot ja prioriteetit muistiinpanoissasi seuraavia työvaiheita varten.",
          sanat: []
        },
        "51-6": {
          perii: ["51-2"],
          miksi: "Loki säilyttää asiakkaiden havainnot. Oma tulkintasi pysyy erillään havainnoista.",
          osat: [
            { otsikko: "Avaa katselmointiloki", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:katselmointi|project-docs/katselmointi.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä ovat otsikot ## Perustiedot, ## Asiakkaiden havainnot tiivistettynä, ## Oma tulkinta ja ## Sovitut muutokset." },
            { otsikko: "Kirjoita päivä ja versio", missa: "Tiedosto [[tiedosto:katselmointi|katselmointi.md]], otsikko ## Perustiedot", tee: "Kirjoita Päivä-riville katselmoinnin päivä. Kirjoita Versio-rivin ___-kohtaan commitin tunnus, joka näkyy [[github:releases/tag/v0.1|releasen v0.1 sivulla]] tagin alapuolella.", naet: "Päivä-rivillä on päivämäärä. Versio-rivillä lukee esimerkiksi v0.1 (commit 3f2a1c9)." },
            { otsikko: "Liitä releasen osoite", missa: "Selain ja tiedosto [[tiedosto:katselmointi|katselmointi.md]]", tee: "Kopioi [[github:releases/tag/v0.1|releasen v0.1 sivun]] osoite osoiteriviltä. Liitä se Versio-rivin loppuun.", naet: "Versio-rivin lopussa on osoite, joka loppuu releases/tag/v0.1. Rivit Osallistujat ja Missä kokeiltiin on täytetty pohjassa valmiiksi. Muuta niitä vain, jos kokeilu meni toisin." },
            { otsikko: "Kirjoita havainnot", missa: "Tiedosto [[tiedosto:katselmointi|katselmointi.md]], otsikko ## Asiakkaiden havainnot tiivistettynä", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Napsauta otsikon jälkeisen viivarivin loppuun ja kirjoita havainnot omin sanoin: yksi havainto rivillä, rivin alussa - ja rooli asiakas 1 tai asiakas 2.", naet: "Jokaisella rivillä on rooli ja havainto. Tee uusi rivi Enterillä ja kirjoita sen alkuun - ja välilyönti. Nimiä ja sanatarkkoja lausumia ei ole, koska repository on julkinen.", koodi: "## Asiakkaiden havainnot tiivistettynä", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kirjoita oma tulkinta", missa: "Tiedosto [[tiedosto:katselmointi|katselmointi.md]], otsikko ## Oma tulkinta", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Napsauta otsikon jälkeisen viivarivin loppuun ja kirjoita oma tulkintasi sekä toiveet, jotka ovat [[toimeksianto|toimeksiannon]] jatkolistalla.", naet: "Tulkintasi on eri otsikon jälkeen kuin asiakkaiden havainnot, ja jokainen rivi alkaa merkillä -. Jatkolistan toiveista ei tehdä issueita, koska ne toteutetaan näytön jälkeen.", koodi: "## Oma tulkinta", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:katselmointi|katselmointi.md]] muutokset.", koodi: "Kirjaa katselmointi", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Perustiedot, havainnot roolein ja oma tulkinta ovat erikseen tiedostossa [[tiedosto:katselmointi|katselmointi.md]] GitHubissa.",
          tallenna: "Perustiedot, havainnot roolein ja oma tulkinta tiedostossa [[tiedosto:katselmointi|katselmointi.md]] GitHubissa.",
          esimerkki: "Reseptikirjan katselmointi:\n## Asiakkaiden havainnot tiivistettynä\n- Asiakas 1 ei löytänyt annoskoon säädintä. Hän etsi sitä reseptin yläreunasta.\n\n## Oma tulkinta\n- Säädin on liian pieni ja väärässä paikassa.\n- Asiakas 2 toivoi ostoslistaa. Se on jatkolistalla, ja se toteutetaan näytön jälkeen.",
          eiRiita: "\"Asiakkaat pitivät sovelluksesta. Pieniä korjauksia.\" Lokista ei näe, mitä asiakkaat havaitsivat eikä mitä muutetaan.",
          sanat: []
        },
        "51-3": {
          versio: "2026-10-05",
          miksi: "Palaute muuttuu toteutettaviksi töiksi prioriteettien avulla.",
          osat: [
            { vanha: 0, otsikko: "Avaa havaintopohja ja kirjoita otsikko", missa: "Selain, GitHub", tee: "Avaa [[github:issues/new?template=havainto.md|uusi issue havaintopohjalla]]. Ohje: [[ohje:havaintoissue]]. Kirjoita otsikkokenttään sanan Havainto: perään yksi muutostoive lyhyesti, esimerkiksi segmenttien määrän säädintä ei löydy.", naet: "Lomake on auki, ja otsikossa on muutostoive. Kuvauksessa ovat otsikot ## Mitä odotin, ## Mitä tapahtui, ## Toistamisohje ja ## Syy omin sanoin." },
            { vanha: 0, otsikko: "Kirjoita havainto kuvaukseen", missa: "Lomakkeen kuvauskenttä", tee: "Kirjoita otsikon ## Mitä odotin jälkeen, mitä asiakas odotti. Kirjoita otsikon ## Mitä tapahtui jälkeen, mitä kokeilussa tapahtui.", naet: "Molempien otsikoiden jälkeen on oma tekstisi, ja henkilöstä on vain rooli. Kohdat Toistamisohje ja Syy omin sanoin jäävät ennalleen. Älä poista niiden otsikoita." },
            { vanha: 1, otsikko: "Kirjoita asiakkaan prioriteetti", missa: "Lomakkeen kuvauskentän alku", tee: "Napsauta kuvauskenttää ja paina Ctrl+Home. Kirjoita Asiakkaan prioriteetti: ja numero paperilta, paina Enter kaksi kertaa ja valitse Create.", naet: "Issue on tallennettu. Kuvaus alkaa prioriteetin rivillä, esimerkiksi Asiakkaan prioriteetti: 1. Otsikon perässä on issuen numero, ja oikeassa reunassa kohdassa Labels lukee havainto." },
            { vanha: 0, otsikko: "Tee issue jokaisesta muutostoiveesta", missa: "Selain, GitHub", tee: "Toista osatehtävät 1–3 jokaiselle muutostoiveelle ja kirjoita issuen numero paperille havainnon viereen. Tee issue myös tärkeän jatkon toimintoa koskevasta toiveesta, mutta ei kehusta eikä jatkolistan toiveesta.", naet: "[[github:issues?q=is%3Aissue+is%3Aopen+label%3Ahavainto|Avoimissa havaintoissueissa]] on yksi issue jokaisesta muutostoiveesta, ja paperilla on niiden numerot. Tärkeän jatkon toiveiden järjestys sovitaan [[vk 2|viikolla 2]] näiden prioriteettien avulla. Jatkolistan toiveet kirjoitit katselmointilokin kohtaan Oma tulkinta." },
            { otsikko: "Kirjoita palaverin sopimus issueen", missa: "Selain, prioriteetin 1 havaintoissue, kenttä Add a comment", tee: "Avaa havaintoissue, jonka prioriteetti on 1, kopioi kommentti ja liitä se kenttään Add a comment. Vaihda pp.kk. palaverin päiväksi ja ___ yhdeksi lauseeksi siitä, mitä palaverissa sovittiin katselmoinnista, ja valitse Comment.", naet: "Kommentti näkyy issuessa. Näyttömatriisi vaatii tämän kommentin joka viikolta. Tällä viikolla ei ole työsykliä, joten kommentti kirjoitetaan tähän issueen. Jos havaintoissueita ei tullut, kirjoita kommentti viikon 50 issueen Käynnistyskokeilu v0.1.", koodi: "Sovittu viikkopalaverissa pp.kk.: ___", koodiOtsikko: "Kommentti: kopioi tämä" },
            { vanha: 1, otsikko: "Avaa katselmointiloki ja etsi sovitut muutokset", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:katselmointi|project-docs/katselmointi.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3.", naet: "Kursori on otsikon ## Sovitut muutokset rivillä. Otsikon jälkeen ovat ohjerivi, tyhjä rivi ja mallirivi - issue #__ · prioriteetti __.", koodi: "## Sovitut muutokset", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Kirjoita sovitut muutokset", missa: "Tiedosto [[tiedosto:katselmointi|katselmointi.md]], otsikko ## Sovitut muutokset", tee: "Paina alanuolinäppäintä kolme kertaa ja sitten Home ja Shift+End, niin mallirivi maalautuu. Kirjoita tilalle jokaisesta uudesta havaintoissuesta oma rivi prioriteetin mukaan, 1 ensin, ja paina rivien välissä Enter.", naet: "Mallirivi on poissa. Otsikon jälkeen on yhtä monta riviä kuin uusia havaintoissueita, esimerkiksi - issue #12 · prioriteetti 1 ja sen jälkeen - issue #13 · prioriteetti 2." },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:katselmointi|katselmointi.md]] muutokset.", koodi: "Kirjaa katselmoinnin sovitut muutokset", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Jokaisesta muutostoiveesta on issue ja asiakkaan prioriteetti, palaverin sopimus on issuen kommenttina, ja issueiden numerot ovat tiedostossa [[tiedosto:katselmointi|katselmointi.md]].",
          tallenna: "Havaintoissuet prioriteetteineen ja palaverin sopimuskommentti GitHubissa. Issueiden numerot ja prioriteetit tiedostossa [[tiedosto:katselmointi|katselmointi.md]] GitHubissa.",
          esimerkki: "Reseptikirjan havaintoissue:\nOtsikko: Havainto: annoskoon säädintä ei löydy\nAsiakkaan prioriteetti: 1\n\n## Mitä odotin\nAsiakas 1 odotti säädintä reseptin yläreunaan.\n## Mitä tapahtui\nAsiakas 1 etsi säädintä eikä löytänyt sitä.\n\nKommentti: Sovittu viikkopalaverissa 14.12.: havainnot kirjataan rooleilla, ja nimet lähetetään ohjaajalle Teamsissa.",
          eiRiita: "Otsikko: Korjauksia\nKuvauskenttä on tyhjä. Issuesta ei näe havaintoa eikä asiakkaan prioriteettia.",
          sanat: []
        },
        "51-4": {
          versio: "2026-10-05",
          miksi: "Tilatiedosto säilyttää seuraavan tehtävän loman yli.",
          osat: [
            { vanha: 0, otsikko: "Avaa tilatiedosto ja etsi Seuraavana", missa: "VS Code, Explorer", tee: "Avaa tiedosto PROJEKTIN-TILA.md repositoryn juuresta. Ohje: [[ohje:avaa-tiedosto]]. Etsi hakusana. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3.", naet: "Kursori on rivillä, jossa lukee Seuraavana, esimerkiksi ## Seuraavana. Copilot on voinut muuttaa otsikkoa. Siksi haet pelkkää sanaa. Jos rivi ei ala merkeillä ##, hae uudelleen ja paina hakukentässä Enter, kunnes osuma on ##-rivillä. Jos haku ei löydä sanaa, paina Ctrl+End ja Enter ja kirjoita otsikko ## Seuraavana.", koodi: "Seuraavana", koodiOtsikko: "Hakusana: kopioi tämä hakuun" },
            { otsikko: "Valitse viikon 2 ensimmäinen tehtävä", missa: "Selain, GitHub, ja paperi", tee: "Avaa [[github:issues?q=is%3Aissue+is%3Aopen+label%3Ahavainto|avoimet havaintoissuet]]. Valitse niistä viikon 2 ensimmäinen tehtävä koodilaatikon säännöllä ja kirjoita sen numero paperille.", naet: "Paperilla on yhden avoimen havaintoissuen numero ja otsikko. Pakollisen ytimen toiminnot ovat [[toimeksianto#pakollinen-ydin|toimeksiannon kohdassa Ehdotettu toteutustapa]]. Havaintoissuen ohje: [[ohje:havaintoissue]].", koodi: "1. Avoin havaintoissue pakollisen ytimen toiminnosta, joka ei vielä toimi.\n2. Jos sellaista ei ole: havaintoissue, joka on pieni yhden toiminnon korjaus ja jolla on pienin prioriteettinumero.\n3. Jos pakollisen ytimen toiminto on kesken eikä siitä ole havaintoissueta, tee siitä ensin havaintoissue ja valitse se.", koodiOtsikko: "Valintasääntö" },
            { otsikko: "Maalaa Seuraavana-kohdan rivit", missa: "Tiedosto PROJEKTIN-TILA.md, otsikko ## Seuraavana", tee: "Napsauta otsikon jälkeisen rivin alkuun. Pidä Shift pohjassa ja paina alanuolinäppäintä, kunnes kursori on tyhjällä rivillä seuraavan ##-otsikon edessä.", naet: "Otsikon ## Seuraavana jälkeiset rivit on maalattu. Tyhjä rivi ja seuraava ##-otsikko eivät ole maalattuja." },
            { vanha: 0, otsikko: "Kirjoita viikon 2 ensimmäinen tehtävä", missa: "Tiedosto PROJEKTIN-TILA.md, otsikko ## Seuraavana", tee: "Kopioi rivin pohja, palaa VS Codeen ja paina Ctrl+V ja Enter. Vaihda ___-kohdat korjaukseksi yhdellä lauseella ja issuen numeroksi paperilta.", naet: "Otsikon jälkeen on yksi rivi, esimerkiksi - Viikko 2: segmenttisäädin näkyviin, issue #12, ja sen jälkeen tyhjä rivi ennen seuraavaa ##-otsikkoa. Korjaat rivin havaintoissuen ensimmäisenä [[vk 2|viikolla 2]].", koodi: "- Viikko 2: ___, issue #___", koodiOtsikko: "Rivin pohja: kopioi tämä" },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston PROJEKTIN-TILA.md muutokset.", koodi: "Kirjaa loman jälkeinen jatko tilatiedostoon", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { vanha: 1, otsikko: "Tarkista ennen lomaa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G.", naet: "Changes-lista on tyhjä. Kaikki viikon työ on GitHubissa ennen lomaa. Jos listassa on tiedostoja, tee niistä commit ja push. Ohje: [[ohje:commit]]. Tee viikon kirjaus torstaina 17.12., koska se on viikon viimeinen työpäivä." }
          ],
          valmis: "Seuraavana-kohdassa on viikon 2 ensimmäinen tehtävä ja issuen numero, ja kaikki työ on GitHubissa ennen lomaa.",
          tallenna: "Päivitetty PROJEKTIN-TILA.md repositoryn juuressa GitHubissa.",
          esimerkki: "Reseptikirjan tilatiedosto:\n## Seuraavana\n- Viikko 12: siirrä hakukenttä sivun yläreunaan, issue #14",
          eiRiita: "## Seuraavana\n- Jatka projektia.\nTehtävä ja issuen numero puuttuvat.",
          sanat: []
        }
      }
    },
    2: {
      type: "pohjustus",
      feature: "Aiempi versio toimii loman jälkeen, ja parannusten järjestys on sovittu.",
      connection: "Joululoman jälkeen varmistat ensin, että kehitysympäristö, sovellus ja aiemmat testit toimivat edelleen. Sen jälkeen sovit tärkeän jatkon järjestyksen asiakkaiden katselmointipalautteen perusteella ja teet yhden pienen korjauksen. Näin uudet ominaisuudet rakentuvat toimivan pakollisen ytimen eli MVP:n ja todellisten käyttäjätarpeiden päälle.",
      deliverable: "Testiajon tulos viikon kirjauksessa · tärkeän jatkon järjestys tuntiarvioineen issueissa · yksi pieni korjaus Täydennys-kaistalla.",
      why: "Loman jälkeen ympäristö voi olla rikki ja asiat unohtuneet. Kun kaikki testit menevät läpi, tiedät, että lähtötaso on kunnossa.",
      done: "`python tarkista_ymparisto.py` tulostaa joka rivin alkuun OK, `pytest` näyttää, että kaikki testit menevät läpi, tärkeän jatkon järjestys on sovittu palaverissa, ja korjauksen commit on GitHubissa.",
      record: "Ympäristön tarkistuksen ja testiajon tulokset, krediittien lähtötilanne, tärkeän jatkon järjestys tuntiarvioineen ([[tiedosto:suunnitelma|suunnitelmassa]] ja issueissa), palaverin arvio pakollisen ytimen eli MVP:n ratkaisuista, korjauksen kortin issuen numero ja commitin tunnus. Kirjoita kohtaan Missä työnäyte on? nämä näyttömatriisin vaatimukset: käyttää ohjelmointieditoria tai kehitysympäristöä, sopii tehtävistä tiimin muiden jäsenten kanssa, arvioi ratkaisujen toimivuuden yhdessä tiimin kanssa, asettaa kehitystiimin kanssa toteutettavat toiminnot tärkeysjärjestykseen, jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi sekä suunnittelee ja arvioi kehitystiimin kanssa tehtävien toteuttamista.",
      skills: ["Kehitysympäristön käyttö", "Tärkeysjärjestys", "Työmäärän arviointi"],
      tehtavat: {
        "2-1": {
          versio: "2026-10-05",
          miksi: "Parannukset aloitetaan toimivasta aiemmasta versiosta.",
          osat: [
            { vanha: 0, otsikko: "Avaa repository", missa: "VS Code", tee: "Avaa repository. Ohje: [[ohje:avaa-repository]].", naet: "Explorerissa lukee VEKTORIPAJA. Siinä ovat tiedostot README.md ja PROJEKTIN-TILA.md." },
            { vanha: 0, otsikko: "Avaa terminaali", missa: "VS Code, ylävalikko", tee: "Avaa uusi terminaali. Ohje: [[ohje:terminaali]].", naet: "Terminaalin rivi alkaa (.venv)." },
            { vanha: 0, otsikko: "Tarkista ympäristö", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]]. Kirjoita tulosteen viimeinen rivi paperille.", naet: "Rivien alussa lukee OK. Viimeisellä rivillä lukee Ympäristö on kunnossa. [[kuvaohje:tarkista-ymparisto|Katso kuvaohje]]. Jos jokin rivi alkaa sanalla KORJAA, siirry osatehtävään 6 ja palaa sitten tähän.", koodi: "python tarkista_ymparisto.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Käynnistä sovellus", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]]. Kun Vektoripajan ikkuna on auennut, sulje se ikkunan sulkupainikkeesta.", naet: "Vektoripajan ikkuna aukeaa ilman virheilmoitusta. Kun suljet ikkunan, terminaalin rivi alkaa taas (.venv). Jos terminaaliin tulee virheilmoitus, siirry osatehtävään 6 ja palaa sitten tähän.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Aja kaikki testit", missa: "VS Code, terminaali", tee: "Aja testit. Ohje: [[ohje:pytest]]. Kirjoita tulosteen viimeinen rivi paperille.", naet: "Viimeisellä rivillä lukee passed, eikä rivillä lue failed. Kirjaat paperin kaksi riviä perjantaina viikon kirjaukseen. Jos rivillä lukee failed, siirry osatehtävään 7." },
            { vanha: 0, otsikko: "Korjaa ympäristön tai käynnistyksen virhe", missa: "Vain jos osatehtävässä 3 tai 4 tuli virhe: VS Code, terminaali", tee: "Jos virhe tuli tarkistuksessa, lue terminaalista KORJAA-rivin jälkeinen ohje ja tee se: [[kuvaohje:tarkista-ymparisto|kuvaohjeen]] kohta 4. Jos virhe tuli käynnistyksessä, aja komento. Ohje: [[ohje:komento]].", naet: "Kun ajat virheen antaneen osatehtävän komennon uudelleen, virhettä ei tule. Jos virhe tulee toisen kerran, lähetä ohjaajalle kuva terminaalista. Ohje: [[ohje:teams]], kohta Jos lähetät kuvan. Tee vastausta odottaessasi työvaihe Sovi parannusten järjestys, koska siinä ei tarvita sovellusta, ja palaa tähän, kun ohjaaja vastaa. Jos vastausta ei tule samana päivänä, kirjoita samaan keskusteluun: Hei, ympäristö ei vieläkään toimi, kuva on edellisessä viestissä. Jos osatehtävissä 3 ja 4 ei tullut virhettä, rastita tämä ja jatka.", koodi: "pip install -r requirements.txt", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Kirjaa epäonnistunut testi", missa: "Vain jos osatehtävässä 5 lukee failed: Selain, GitHub ja Teams", tee: "Luo havaintoissue testistä, joka ei mennyt läpi. Ohje: [[ohje:havaintoissue]]. Kopioi viesti, täydennä testin nimi ja issuen numero ja lähetä viesti ohjaajalle. Ohje: [[ohje:teams]].", naet: "Havaintoissue on GitHubissa, ja viestisi näkyy Teamsissa. Issuessa lukee: Mitä odotin: testi menee läpi. Mitä tapahtui: testin nimi ja FAILED. Toistamisohje: aja pytest -v ja katso testin rivi. Issuen numero on otsikon perässä, esimerkiksi #12. Vastausta ei tarvitse odottaa. Epäonnistuneen testin havaintoissue on viikon korjaus: valitset sen työvaiheessa Suunnittele ensimmäinen korjaus, koska viikon lopussa kaikkien testien pitää mennä läpi. Jos kaikki testit menivät läpi, rastita tämä ja jatka.", koodi: "Hei, testi ___ ei mene läpi loman jälkeen. Tein siitä havaintoissuen #___.", koodiOtsikko: "Viesti: kopioi tämä" },
            { vanha: 2, otsikko: "Lue tilatiedosto", missa: "VS Code, tiedosto PROJEKTIN-TILA.md", tee: "Avaa tiedosto PROJEKTIN-TILA.md ([[ohje:avaa-tiedosto]]) ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Kirjoita paperille otsikon jälkeiseltä riviltä havaintoissue ja sen numero.", naet: "Paperilla on havaintoissue, jonka kirjoitit viikolla 51, ja sen numero, esimerkiksi #15. Havaintoissue on viikon korjaus, ellei jokin testi epäonnistunut osatehtävässä 5. Kerrot korjauksen ohjaajalle viikkopalaverissa.", koodi: "## Seuraavana", koodiOtsikko: "Otsikko: kopioi tämä hakuun" }
          ],
          valmis: "Ympäristön tarkistus ja sovellus toimivat, kaikki testit menevät läpi tai epäonnistuneesta testistä on havaintoissue, ja tilatiedosto on luettu.",
          tallenna: "Ympäristön tarkistuksen ja testiajon tulokset viikon kirjaukseen perjantaina.",
          sanat: []
        },
        "2-2": {
          versio: "2026-10-05",
          miksi: "Asiakkaiden palaute ratkaisee, mihin rajattu työaika käytetään.",
          osat: [
            { vanha: 0, otsikko: "Lue tärkeän jatkon toiminnot", missa: "Selain, Vektoripajan sivu", tee: "Lue [[toimeksianto#tekninen-ehdotus|toimeksiannon kohta Ehdotettu toteutustapa]], rivi Tärkeä jatko loman jälkeen. Kirjoita toiminnot paperille numeroituna listana.", naet: "Paperilla on seitsemän toimintoa tässä järjestyksessä: 1 Päivitä SVG, 2 Kierto tasakulmiin, 3 Pieni esikatseluikkuna, 4 Kierto lapselle ja sen alaosille, 5 Oma teema ja isot kahvat, 6 Ortografinen näkymä ja 7 View lockin pikanäppäin. Oma teema ja isot kahvat on yksi toiminto." },
            { vanha: 0, otsikko: "Katso asiakkaiden prioriteetit", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:katselmointi|project-docs/katselmointi.md]] ([[ohje:avaa-tiedosto]]) ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Kirjoita paperille otsikon jälkeisten rivien issueiden numerot ja prioriteetit.", naet: "Paperilla on jokaisen rivin issuen numero ja asiakkaan prioriteetti, esimerkiksi issue #12 · prioriteetti 1. Prioriteetti 1 on asiakkaille tärkein.", koodi: "## Sovitut muutokset", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Merkitse toimintojen prioriteetit", missa: "Selain, GitHub, ja paperi", tee: "Avaa [[github:issues?q=is%3Aissue+is%3Aopen+label%3Ahavainto|avoimet havaintoissuet]] ja lue jokaisen paperillasi olevan issuen otsikko. Jos issue koskee jotakin seitsemästä toiminnosta, kirjoita sen prioriteetti toiminnon viereen.", naet: "Toiminnon vieressä on prioriteetti, jos jokin havaintoissue koskee sitä. Jos kaksi issueta koskee samaa toimintoa, viereen tulee pienempi numero. Muiden toimintojen viereen merkitset viivan –. Jos paperisi issuen numeroa ei ole listassa, issue on suljettu, eikä sen prioriteettia käytetä. Havaintoissue, joka ei koske mitään seitsemästä toiminnosta, ei tule tähän järjestykseen." },
            { vanha: 0, otsikko: "Järjestä toiminnot", missa: "Paperi tai muistiinpanot", tee: "Kirjoita toiminnot uudeksi listaksi prioriteetin mukaan: 1 ensin ja viivalla merkityt viimeiseksi. Jos prioriteetti on sama tai viiva, pidä järjestys samana kuin ensimmäisessä listassasi.", naet: "Paperilla on uusi lista. Jokaisella rivillä on toiminto ja asiakkaan prioriteetti tai viiva." },
            { otsikko: "Arvioi tuntimäärät", missa: "Paperi tai muistiinpanot", tee: "Kirjoita uuden listan jokaisen toiminnon perään tuntiarvio. Vertaa toimintoa johonkin ennen joulua tekemääsi korttiin: onko toiminto pienempi vai isompi?", naet: "Uusi listasi on ehdotuksesi. Jokaisella rivillä on toiminto, tuntiarvio ja asiakkaan prioriteetti tai viiva. Arvio saa olla karkea. Jos et muista, kauanko kortti kesti, arvioi silti: palaverissa sovitte lopulliset tunnit." },
            { vanha: 1, otsikko: "Arvioi pakollisen ytimen ratkaisut palaverissa", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina · VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]]", tee: "Avaa [[tiedosto:suunnitelma|project-docs/suunnitelma.md]] ja lue ohjaajan kanssa kolmen otsikon ratkaisut. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Kirjoita paperille, mitkä pakollisen ytimen eli MVP:n ratkaisut kestävät tärkeän jatkon toiminnot ja mitkä pitää muuttaa.", naet: "Otsikot ovat ### Kansiorakenne ja moduulien rajat (viikko 43), ### Rajapinnat (viikot 44, 48 ja 49) ja ### Tallennustapa (viikko 50). Paperilla on arvio jokaisesta kolmesta. Ohjaaja on palaverissa tiimin jäsenen roolissa. Tämä on myös viikkorutiinin palaveri, joten rastita samalla rutiinin palaverikohta. Kirjaat arvion perjantaina viikon kirjaukseen." },
            { vanha: 1, otsikko: "Sovi järjestys", missa: "Viikkopalaveri ohjaajan kanssa", tee: "Esitä ehdotuksesi ja kerro viikon korjauksen havaintoissue paperiltasi. Kysy ohjaajalta, montako projektituntia viikossa on käytössä, ja sovi järjestys ja tuntiarviot.", naet: "Olette sopineet järjestyksen ja tuntiarviot, ja ohjaaja tietää viikon korjauksen. Ohjaaja on kertonut, montako projektituntia viikossa on. Kirjoitat sopimuksen paperille seuraavassa osatehtävässä." },
            { otsikko: "Kirjoita sopimus paperille", missa: "Paperi tai muistiinpanot, palaverin lopussa", tee: "Kirjoita paperille sovittu järjestys tuntiarvioineen ja palaverin päivä. Kirjoita lisäksi yhdellä lauseella, mitä sovittiin viikon korjauksesta.", naet: "Paperilla on sovittu järjestys tuntiarvioineen, palaverin päivä ja korjauksen sopimus, esimerkiksi korjaan havaintoissuen #15 ensin. Kirjoitat järjestyksen seuraavissa työvaiheissa [[tiedosto:suunnitelma|suunnitelmaan]] ja issueihin. Korjauksen sopimus tulee korjauksen kortin issueen. Projektituntien määrä auttaa sopimaan, montako toimintoa ehdit tehdä. Sitä ei kirjoiteta tiedostoon." }
          ],
          valmis: "Parannusten järjestys ja tuntiarviot on sovittu palaverissa, ja sopimus on paperilla.",
          tallenna: "Sovittu järjestys ja korjauksen sopimus paperilla seuraavia työvaiheita varten. Palaverin arvio pakollisen ytimen ratkaisuista viikon kirjaukseen perjantaina.",
          esimerkki: "Reseptikirjan tärkeän jatkon järjestys:\n1. Reseptin tulostus, 4 h (asiakkaan prioriteetti 1)\n2. Ainesosien skaalaus, 3 h (asiakkaan prioriteetti 2)\n3. Kuvien lisäys, 8 h (asiakkaan prioriteetti –)",
          eiRiita: "\"Jatko: tulostus, skaalaus ja kuvat.\" Järjestyksestä puuttuvat tuntiarviot ja asiakkaan prioriteetti.",
          sanat: ["MVP", "prioriteetti"]
        },
        "2-5": {
          perii: ["2-2"],
          miksi: "Sovittu järjestys kirjoitetaan [[tiedosto:suunnitelma|suunnitelmaan]]. Silloin se on GitHubissa, ja ohjaaja näkee sen.",
          osat: [
            { otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki editorissa. Välilehdellä lukee [[tiedosto:suunnitelma|suunnitelma.md]]." },
            { otsikko: "Kirjoita sovittu järjestys", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Tärkeän jatkon järjestys (viikko 2)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen sovitut toiminnot numeroituna listana ([[ohje:markdown]]): toiminto, tuntiarvio ja asiakkaan prioriteetti.", naet: "Otsikon jälkeen on numeroitu lista samassa järjestyksessä kuin paperillasi. Jokaisella rivillä on toiminto, tunnit ja asiakkaan prioriteetti tai viiva.", koodi: "### Tärkeän jatkon järjestys (viikko 2)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa tärkeän jatkon järjestys suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Sovittu järjestys tuntiarvioineen on [[tiedosto:suunnitelma|suunnitelmassa]] GitHubissa.",
          tallenna: "Järjestys ja tuntiarviot tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan tärkeän jatkon järjestys:\n1. Reseptin tulostus, 4 h (asiakkaan prioriteetti 1)\n2. Ainesosien skaalaus, 3 h (asiakkaan prioriteetti 2)\n3. Kuvien lisäys, 8 h (asiakkaan prioriteetti –)",
          eiRiita: "\"Jatko: tulostus, skaalaus ja kuvat.\" Järjestyksestä puuttuvat tuntiarviot ja asiakkaan prioriteetti.",
          sanat: []
        },
        "2-4": {
          perii: ["2-2"],
          miksi: "Jokaisesta sovitusta toiminnosta tehdään issue. Silloin järjestys ja tuntiarviot näkyvät GitHubissa.",
          osat: [
            { otsikko: "Avaa uusi issue", missa: "Selain, GitHub", tee: "Avaa [[github:issues/new|uusi issue]].", naet: "GitHub avaa lomakkeen, jossa on otsikkokenttä ja kuvauskenttä. Jos GitHub näyttää pohjien listan, valitse Blank issue." },
            { otsikko: "Kirjoita toiminnon nimi", missa: "Lomakkeen otsikkokenttä (Add a title)", tee: "Kirjoita otsikoksi toiminnon nimi verbi ensin: lisää nimen alkuun sana Lisää. Toiminnon Päivitä SVG otsikko on Päivitä SVG, koska se alkaa jo verbillä.", naet: "Otsikko alkaa verbillä, esimerkiksi Lisää kierto tasakulmiin tai Lisää ortografinen näkymä." },
            { otsikko: "Liitä järjestys ja arvio", missa: "Lomakkeen kuvauskenttä", tee: "Kopioi kuvaus ja liitä se kuvauskenttään. Vaihda luvut ja päivä paperisi mukaan.", naet: "Kuvauksessa ovat järjestysnumero, tuntiarvio, asiakkaan prioriteetti tai viiva ja palaverin päivä.", koodi: "Järjestys: 1\nTuntiarvio: 6 h\nAsiakkaan prioriteetti: 1\nSovittu viikkopalaverissa pp.kk.", koodiOtsikko: "Issuen kuvaus: kopioi tämä" },
            { otsikko: "Tallenna issue", missa: "Lomakkeen alareuna", tee: "Valitse Create. Kirjoita issuen numero paperille toiminnon viereen.", naet: "Issue on tallennettu. Otsikon perässä on issuen numero. Suljet issuen myöhemmin sen toiminnon kortin commit-viestissä." },
            { otsikko: "Tee issue jokaisesta toiminnosta", missa: "Selain, GitHub", tee: "Toista osatehtävät 1–4 jokaiselle paperisi sovitun järjestyksen toiminnolle. Rastita tämä vasta, kun viimeinen issue on tallennettu.", naet: "[[github:issues|Repositoryn Issues-sivulla]] on yksi issue jokaisesta sovitun järjestyksen toiminnosta, myös niistä, joihin tunnit eivät ehkä riitä. Jos toiminnosta on jo havaintoissue, teit silti uuden issuen, ja havaintoissue jää ennalleen. Jos palaverissa jokin toiminto jätettiin pois järjestyksestä, siitä ei tehdä issueta. Osatehtävät 1–4 rastitit jo ensimmäisen issuen jälkeen." }
          ],
          valmis: "Jokaisesta sovitusta toiminnosta on issue, jossa ovat järjestys, tuntiarvio ja asiakkaan prioriteetti.",
          tallenna: "Sovitut toiminnot issueina GitHubissa.",
          esimerkki: "Reseptikirjan issue:\nOtsikko: Lisää reseptin tulostus\nJärjestys: 1\nTuntiarvio: 4 h\nAsiakkaan prioriteetti: 1\nSovittu viikkopalaverissa 12.1.",
          eiRiita: "Otsikko: Tulostus\nKuvauskenttä on tyhjä. Issuesta ei näe järjestystä, tuntiarviota eikä prioriteettia.",
          sanat: []
        },
        "2-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Pieni korjaus palauttaa toteutuksen työrytmin loman jälkeen.",
          osat: [
            { vanha: 1, otsikko: "Katso tammikuun krediitit", missa: "Paperi, jolle kirjoitit viikkorutiinin krediittiluvun", tee: "Katso paperilta luku, jonka kirjoitit viikkorutiinin maanantain krediittikohdassa. Jos et vielä katsonut lukua, katso se nyt. Ohje: [[ohje:krediitit]].", naet: "Paperilla on prosenttiluku tai laskutussivun luku yksikköineen, esimerkiksi $0.26. Krediitit nollautuivat 1.1., joten luku on pieni. Se on tammikuun lähtötilanne. Kirjaat sen kerran viikon kirjaukseen, esimerkiksi Krediitit maanantaina: 2 % käytetty (tammikuun lähtötilanne)." },
            { vanha: 0, otsikko: "Valitse korjattava havaintoissue", missa: "Selain, GitHub", tee: "Avaa [[github:issues?q=is%3Aissue+is%3Aopen+label%3Ahavainto|avoimet havaintoissuet]]. Napsauta issueta, jonka numero on paperillasi tilatiedoston kohdasta Seuraavana.", naet: "Issue on auki, ja tiedät sen numeron. Siinä ovat kohdat Mitä odotin ja Toistamisohje. Jos teit työvaiheessa Varmista aiemman version toiminta havaintoissuen epäonnistuneesta testistä, valitse se issue tämän sijaan." },
            { otsikko: "Päätä korjauksen testi", missa: "Havaintoissue ja paperi", tee: "Lue issuen kohdat Toistamisohje ja Mitä odotin. Kirjoita paperille testin syöte, odotettu tulos ja testitapa: koodilla tai käsin.", naet: "Paperilla on syöte, odotettu tulos ja testitapa. Koodilla: virheen saa toistettua kutsumalla funktiota, ja syöte on arvo, jonka funktio saa, esimerkiksi kulma 23°. Käsin: virheen näkee vain sovelluksen ikkunassa, esimerkiksi painikkeen koossa, ja syöte on Toistamisohjeen vaiheet. Koodilla tehty testi on regressiotesti test_regressio_N tiedostossa tests/test_regressio.py, ja N on havaintoissuen numero. Jos korjaat epäonnistunutta testiä, testi on jo olemassa: käytä sen nimeä." },
            { otsikko: "Etsi testattava funktio", missa: "Vain jos testi tehdään koodilla tai korjaat epäonnistunutta testiä: VS Code, Explorer, kansio tests", tee: "Avaa kansiosta tests tiedosto, joka testaa virheen toimintoa, tai tiedosto, jossa epäonnistunut testi on. Kirjoita tiedoston alun from-rivi paperille.", naet: "Paperilla on from-rivi, esimerkiksi from vektoripaja.kierto import kiertokulma. Rivillä ovat moduuli ja funktion nimi. Regressiotesti kutsuu samaa funktiota virheen syötteellä. Jos et löydä sopivaa tiedostoa, Copilot nimeää funktion kortissa. Jos testi tehdään käsin, rastita tämä." },
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele korjauksen kortti", missa: "Työsykli, askel 1 Suunnittele, ja [Microsoft 365 Copilot](https://m365.cloud.microsoft/chat)", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (korjaus omin sanoin), Kaista: Täydennys, yksi Testi-rivi paperiltasi (numeron tilalle test_regressio_N) ja Lisäksi: havaintoissue #N, testitapa ja from-rivi.", naet: "Copilot on kirjoittanut kortin. Kaistana on Täydennys, ja testinä on regressiotesti. N on havaintoissuen numero. Jos paperillasi ei ole from-riviä, kirjoita Lisäksi-riville sen tilalle: nimeä funktio, jota regressiotesti kutsuu. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Luo issue tehtäväkorttipohjalla ja kirjoita sen numero paperille. Ohje: [[ohje:issue]]. Kortti on viikon ensimmäinen: kirjoita askeleen 2 kommenttiin ___ tilalle paperisi korjauksen sopimus.", naet: "Kortin issue on GitHubissa, ja siinä on kommentti, esimerkiksi Sovittu viikkopalaverissa 12.1.: korjaan havaintoissuen #15 ensin. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." }
          ],
          valmis: "Korjattava havaintoissue ja sen testi on valittu, ja korjauksen kortti on issuena GitHubissa.",
          tallenna: "Korjauksen kortti issuena GitHubissa. Krediittien lähtötilanne viikon kirjaukseen perjantaina.",
          sanat: ["regressiotesti"]
        },
        "2-6": {
          perii: ["2-3"],
          tyosykli: true,
          miksi: "Regressiotesti toistaa korjatun virheen ja jää testeihin. Kun se menee läpi, virhe ei palaa huomaamatta.",
          osat: [
            { otsikko: "Avaa työsykli askeleeseen 3", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen.", naet: "Työsykli aukeaa askeleeseen 3 Rakenna, koska se muistaa askeleen, johon jäit työvaiheessa Suunnittele ensimmäinen korjaus." },
            { otsikko: "Kirjaa käsin tehtävän testin odotettu tulos", missa: "Vain jos testi tehdään käsin tai korjaat epäonnistunutta testiä: Selain, kortin issue", tee: "Kirjoita kortin issueen kommentiksi testin syöte ja odotettu tulos paperiltasi ja valitse Comment. Rastita issuessa kohta 3a.", naet: "Kortin issuessa on odotettu tulos, ja kohta 3a on rastitettu. Rastita silloin myös tämän työvaiheen osatehtävät 3–5 ja jatka osatehtävästä 6. Jos testi tehdään koodilla, rastita vain tämä." },
            { otsikko: "Avaa regressiotestien tiedosto", missa: "VS Code, Explorer, kansio tests", tee: "Avaa olemassa oleva tiedosto tests/test_regressio.py. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki editorissa. Siinä on viikon 49 regressiotesti. Jos tiedostoa ei ole, luo se kansioon tests. Ohje: [[ohje:uusi-tiedosto]]." },
            { otsikko: "Kirjoita regressiotestin alku (askel 3a)", missa: "Tiedosto tests/test_regressio.py, tiedoston loppu", tee: "Kopioi testin pohja, paina tiedostossa Ctrl+End ja Enter kaksi kertaa ja liitä pohja. Vaihda pohjan from-rivi paperisi from-riviksi, luku 15 molemmissa kohdissa havaintoissuen numeroksi ja sulkeet teksteineen paperisi tiedoiksi.", naet: "Tiedoston lopussa ovat from-rivi, kommenttirivi ja rivi def test_regressio_, jonka perässä on havaintoissuen numero. Pohjassa ei ole enää sulkeita. Sama from-rivi saa olla tiedostossa kahdesti. Jos paperillasi ei ole from-riviä, moduuli on kortin kohdan ## Tiedostot tiedosto ilman päätettä .py, ja funktio on kohdassa ## Tavoite.", koodi: "from vektoripaja.moduuli import funktio\n\n\n# Regressiotesti #15: (syöte paperiltasi) -> (odotettu tulos paperiltasi)\ndef test_regressio_15", koodiOtsikko: "Testin pohja: kopioi tämä" },
            { otsikko: "Hyväksy testin täydennys", missa: "Tiedosto tests/test_regressio.py, def-rivin loppu", tee: "Napsauta def-rivin loppuun. Hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "def-rivin perässä on (): ja seuraavalla rivillä assert-rivi, jossa on odotettu tuloksesi. Jos assert-rivillä ei ole tulostasi, paina Esc ja kirjoita assert-rivi itse. Issuessa rastitetaan kohta 3a." },
            { otsikko: "Korjaa virhe (askel 3b)", missa: "Työsykli, askel 3 Rakenna, kohta 3b · VS Code", tee: "Tee kohta 3b Täydennys-kaistalla. Muutoskohta on paperisi from-rivin funktio: avaa sen tiedosto ja etsi funktion nimi näppäimillä Ctrl+F.", naet: "Korjaus on tiedostossa, ja tiedosto on tallennettu. Esimerkiksi moduuli vektoripaja.kierto on tiedosto vektoripaja/kierto.py. Issuessa rastitetaan kohta 3b. Jos testi tehdään käsin, muutoskohta on kortin kohdan ## Tiedostot tiedostossa." },
            { otsikko: "Tee korjaus loppuun (askeleet 4–6)", missa: "Työsykli, askeleet 4–6", tee: "Tee askeleet 4–6 järjestyksessä. Lisää askeleen 6 commit-viestiin myös rivi Closes #M, jossa M on havaintoissuen numero.", naet: "Kortin issue ja havaintoissue on suljettu. Korjaus on GitHubissa, ja regressiotesti menee läpi. Jos testi tehtiin käsin, askeleen 4 kirjauspohjan Testi-rivillä lukee käsin ja testin nimi, esimerkiksi Testi käsin: regressiotesti #15. Copilotin ehdottamaa seuraavaa korttia ei tehdä viikolla 2." }
          ],
          valmis: "Valittu korjaus on testattu, ja se on GitHubissa.",
          tallenna: "Korjauscommit ja regressiotesti tiedostossa tests/test_regressio.py GitHubissa. Testitulos kortin issueen.",
          esimerkki: "Reseptikirjan regressiotesti issuesta #9:\nfrom reseptikirja.haku import hae\n\n\n# Regressiotesti #9: hae([\"Kesäkeitto\"], \"KEITTO\") -> [\"Kesäkeitto\"]\ndef test_regressio_9():\n    assert hae([\"Kesäkeitto\"], \"KEITTO\") == [\"Kesäkeitto\"]",
          eiRiita: "def test_regressio():\n    assert True\nTesti ei toista havaintoissuen virhettä, eikä sen nimestä näe issuen numeroa.",
          sanat: []
        }
      },
      sykli: true
    },
    3: {
      type: "feature",
      feature: "Käyttäjä voi päivittää muutetun SVG-piirroksen malliin ja säilyttää osien muokkaukset.",
      excerpt: "Kun piirrosta muokataan Inkscapessa, mallin pitää päivittyä ilman, että kaikki tehdään alusta.",
      connection: "Inkscape-piirros voi muuttua myös sen jälkeen, kun siitä on tehty malli. Nyt lisäät Päivitä SVG -toiminnon ja sovit, miten aiemmat osat tunnistetaan uudesta piirroksesta. Liität toiminnon testattuna aiempaan sovellukseen oman haaran ja pull requestin avulla.",
      deliverable: "Sovittu tunnistustapa · testi 23 · toiminto omassa haarassa · pull request ja merge.",
      why: "Ilman päivitystä jokainen Inkscape-muutos pakottaa tekemään transformit uudelleen. Silloin vektoripohjaisuus menettää hyötynsä.",
      done: "Muokattu SVG päivittyy malliin, transformit säilyvät, kaikki testit menevät läpi, ja pull request on yhdistetty päähaaraan.",
      record: "Tunnistustapa ja sen perustelu, kortin issuen numero ja testin 23 tulos, pull requestin linkki ja päivityksen tunnistusfunktio selityspohjalla. Kirjoita kohtaan Missä työnäyte on? nämä näyttömatriisin vaatimukset: testaa ohjelman toimintoja, sopii tehtävistä tiimin muiden jäsenten kanssa, etsii ratkaisuvaihtoehtoja ja ratkoo ongelmia yhdessä tiimin kanssa, jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi, kehittää ohjelmiston toimintalogiikkaa sekä liittää ohjelman osan olemassa olevaan versioon.",
      funktio: "päivityksen tunnistusfunktio (testi 23)",
      skills: ["Ohjelman osan liittäminen versioon", "Toimintalogiikka: osien tunnistus", "Ongelmanratkaisu yhdessä"],
      termit: ["haara", "pull request", "merge"],
      tehtavat: {
        "3-1": {
          versio: "2026-10-05",
          miksi: "Päivityksen pitää löytää vastaavat osat muuttuneesta piirroksesta.",
          osat: [
            { otsikko: "Avaa piirros Inkscapessa", missa: "Inkscape, File ja Open", tee: "Valitse Inkscapessa File ja Open. Avaa kansiosta testiaineisto tiedosto oma-piirros.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Piirros on auki. Inkscapen otsikkorivillä lukee oma-piirros.svg. Se on oma SVG-piirroksesi [[vk 43|viikolta 43]]." },
            { vanha: 0, otsikko: "Katso osan nimi ja tunniste", missa: "Inkscape, Layers and Objects", tee: "Valitse Layers and Objects -paneelista yksi nimetty ryhmä. Paina Ctrl+Shift+O.", naet: "Object Properties -paneelissa ovat kentät ID ja Label. ID on osan tunniste. Label on nimi, joka näkyy Layers and Objects -paneelissa. Jos Layers and Objects -paneelia ei näy, valitse Layer ja Layers and Objects." },
            { vanha: 0, otsikko: "Sovi tunnistustapa", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Sovi, tunnistetaanko osa uudesta tiedostosta nimellä vai tunnisteella. Kirjoita sovittu tapa, peruste ja palaverin päivä paperille.", naet: "Paperilla on sovittu tapa, peruste, joka liittyy omaan piirrokseesi, ja palaverin päivä. Päivää tarvitset kortin issuen kommentissa. Tämä on myös viikkorutiinin palaveri, joten rastita samalla rutiinin palaverikohta." },
            { vanha: 1, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki editorissa." },
            { vanha: 1, otsikko: "Kirjoita tunnistustapa", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Osien tunnistus päivityksessä (viikko 3)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen sovittu tapa ja peruste: miksi tapa sopii omaan piirrokseesi.", naet: "Otsikon jälkeen ovat sovittu tapa eli nimi tai tunniste sekä peruste, jossa on sana koska.", koodi: "### Osien tunnistus päivityksessä (viikko 3)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa osien tunnistustapa suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Osien tunnistustapa on sovittu, perusteltu ja GitHubissa.",
          tallenna: "Tunnistustapa ja peruste tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan päivitys: \"Tunnistan reseptin sen tunnisteella, koska käyttäjä voi muuttaa reseptin nimeä, mutta tunniste pysyy samana.\"",
          eiRiita: "\"Tunnistan osat nimellä.\" Perustelusta puuttuu, miksi nimi on parempi kuin tunniste omassa työssäsi.",
          sanat: []
        },
        "3-4": {
          perii: ["3-3"],
          miksi: "Haara on oma työlinja. Muutokset eivät vaikuta päähaaraan main, ennen kuin liität ne pull requestilla.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. VS Coden vasemmassa alakulmassa lukee main." },
            { otsikko: "Luo haara paivita-svg", missa: "VS Code, terminaali. Ohje: [[ohje:terminaali]]", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee Switched to a new branch 'paivita-svg'. VS Coden vasemmassa alakulmassa lukee paivita-svg.", koodi: "git switch -c paivita-svg", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Pushaa haara GitHubiin", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new branch] paivita-svg -> paivita-svg. Jatkossa Sync Changes lähettää commitit tähän haaraan.", koodi: "git push -u origin paivita-svg", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Tarkista haara GitHubissa", missa: "Selain, GitHub", tee: "Avaa [[github:branches|repositoryn Branches-sivu]].", naet: "Listassa ovat haarat main ja paivita-svg." }
          ],
          valmis: "Haara paivita-svg on omalla koneellasi ja GitHubissa, ja VS Code on haarassa paivita-svg.",
          tallenna: "Haara paivita-svg GitHubissa.",
          sanat: ["haara"]
        },
        "3-2": {
          versio: "2026-10-05",
          miksi: "Testi varmistaa, etteivät käyttäjän aiemmat muokkaukset katoa.",
          osat: [
            { vanha: 0, otsikko: "Tallenna kopio päivitystä varten", missa: "Inkscape, File ja Save As", tee: "Tarkista, että Inkscapen otsikkorivillä lukee oma-piirros.svg, ja avaa se tarvittaessa kuten työvaiheessa Sovi osien tunnistaminen. Valitse File ja Save As ja tallenna kansioon testiaineisto nimellä paivitys.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Inkscapen otsikkorivillä lukee paivitys.svg. Alkuperäinen tiedosto oma-piirros.svg on ennallaan. Seuraavat muutokset tulevat tiedostoon paivitys.svg. Layers and Objects -paneelissa näkyvät nimetyt osat: [[kuvaohje:inkscape-layerit]]." },
            { vanha: 0, otsikko: "Muokkaa yhden osan muotoa", missa: "Inkscape, Layers and Objects ja Node-työkalu", tee: "Napsauta paneelissa yhden nimetyn ryhmän nuolta ja valitse ryhmän sisältä polku. Vie hiiri piirtoalueelle, paina N ja siirrä yhtä polun pistettä hiirellä.", naet: "Ryhmän muoto muuttui, ja ryhmän nimi on paneelissa ennallaan. Tämä ryhmä on testin muokattu osa." },
            { vanha: 0, otsikko: "Piirrä uusi polku", missa: "Inkscape, kynätyökalu", tee: "Valitse paneelista layer, jossa muokattu ryhmä on. Vie hiiri piirtoalueelle, paina B, piirrä polku napsauttamalla pisteitä ja lopeta Enterillä.", naet: "Paneelissa on layerin alapuolella uusi polku." },
            { otsikko: "Nimeä uusi osa", missa: "Inkscape, Layers and Objects", tee: "Valitse uusi polku paneelista ja ryhmittele se näppäimillä Ctrl+G. Kaksoisnapsauta ryhmän nimeä paneelissa, kirjoita Uusi_osa ja paina Enter.", naet: "Paneelissa on layerin alapuolella sisennettynä ryhmä Uusi_osa. Ryhmästä tulee mallin osa, koska piirroksen layerit ja ryhmät muuttuvat mallin osiksi. [[kuvaohje:inkscape-layerit|Kuvaohjeen]] kohdat 2 ja 3 näyttävät samat vaiheet." },
            { otsikko: "Kirjoita osien nimet ja tunnisteet paperille", missa: "Inkscape, Layers and Objects ja Object Properties", tee: "Valitse paneelista vuorotellen muokattu ryhmä, Uusi_osa ja ryhmä, jonka poistat seuraavaksi, ja paina Ctrl+Shift+O. Kirjoita jokaisesta paperille ID ja Label.", naet: "Paperilla on kolmen osan ID ja Label: muokattu osa, uusi osa ja poistettava osa. Poistettava osa on toinen nimetty ryhmä: se ei ole Uusi_osa, eikä sen sisällä ole muokattua ryhmää." },
            { vanha: 0, otsikko: "Poista yksi osa", missa: "Inkscape, Layers and Objects", tee: "Valitse paneelista ryhmä, jonka kirjoitit paperille poistettavaksi, ja paina Delete. Tallenna tiedosto näppäimillä Ctrl+S.", naet: "Ryhmä puuttuu paneelista. Tiedosto paivitys.svg on tallennettu." },
            { vanha: 1, otsikko: "Kirjoita testin 23 odotetut tulokset", missa: "Paperi tai muistiinpanot", tee: "Kirjoita paperille kolme riviä: mitä päivityksen jälkeen tapahtuu muokatulle, uudelle ja poistetulle osalle. Nimeä jokainen osa [[tiedosto:suunnitelma|suunnitelmasi]] tunnistustavalla: nimellä eli Label tai tunnisteella eli ID.", naet: "Paperilla on kolme odotettua tulosta. Säännöt ovat nämä. Muokattu osa säilyttää oman muunnoksensa. Uusi osa saa oletusmuunnoksen: sitä ei ole siirretty, kierretty eikä skaalattu. Poistettu osa puuttuu uudesta puusta. Oma muunnos on siirto, kierto ja skaalaus, jonka osa on saanut sovelluksessa. Testi antaa muokatulle osalle vanhassa puussa muunnoksen, esimerkiksi siirron 10 x-suunnassa. Kirjoitat tulokset korttiin ja testiin työvaiheessa Rakenna piirroksen päivitys." },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "[[github:commits/paivita-svg|Haaran paivita-svg commit-listassa]] ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston testiaineisto/paivitys.svg. Päähaarassa main sitä ei vielä ole.", koodi: "Lisää päivityksen testiaineisto", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Muokattu testitiedosto on haarassa, ja testin 23 odotetut tulokset on kirjattu ennen toteutusta.",
          tallenna: "Tiedosto testiaineisto/paivitys.svg haarassa paivita-svg GitHubissa. Odotetut tulokset korttiin ja testiin työvaiheessa Rakenna piirroksen päivitys.",
          esimerkki: "Toinen funktio: paivita_reseptit(vanhat, uudet). Resepti Pulla on molemmissa, joten sen oma arvio 5 tähteä säilyy. Uusi resepti Piirakka saa arvion 0. Resepti Kakku puuttuu uusista, joten se poistuu listasta.",
          eiRiita: "\"Muokkaukset säilyvät.\" Tuloksesta ei näe osien nimiä eikä sitä, mitä uudelle ja poistetulle osalle tapahtuu.",
          sanat: ["solmupuu"]
        },
        "3-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Uusi toiminto liitetään aiempaan sovellukseen testattuna.",
          osat: [
            { vanha: 0, otsikko: "Tarkista, että olet haarassa", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "VS Coden vasemmassa alakulmassa lukee paivita-svg. Jos olit jo haarassa, terminaalissa lukee Already on 'paivita-svg'.", koodi: "git switch paivita-svg", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Päätä tunnistusfunktion rajapinta", missa: "Tämän työvaiheen lopussa oleva kohta Päivitä SVG -toiminnon toteutusapu, ja paperi", tee: "Avaa kohta ja lue rivi, joka alkaa sanoilla Tee tunnistuksesta puhdas funktio. Kirjoita paperille funktion nimi verbi ensin, syöte ja paluuarvo.", naet: "Paperilla on rivi, esimerkiksi: funktio (oma nimesi) saa vanhan ja uuden solmupuun ja palauttaa uuden solmupuun omine muunnoksineen. Kirjoitat rivin kortin Rajapinta-riville. Tämä funktio on viikon funktio, jonka selität viikon kirjauksessa." },
            { vanha: 1, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 1, otsikko: "Suunnittele kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (Päivitä SVG -toiminto), Rajapinta paperiltasi, kolme Testi-riviä testille 23 ja Lisäksi: tunnistustapa paperiltasi ja painike Päivitä SVG painikkeen Avaa viereen.", naet: "Copilot on kirjoittanut kortin. Testinä on testi 23 Päivitä SVG ja sinun kolme odotettua tulostasi. Jokaisen Testi-rivin syöte on oma-piirros.svg ja paivitys.svg, ja tulos on yksi paperisi riveistä, esimerkiksi Testi 23: kun syöte on oma-piirros.svg ja paivitys.svg, tuloksen pitää olla Uusi_osa saa oletusmuunnoksen. Kaista-rivin saa jättää ennalleen: Copilot valitsee kaistan ja perustelee sen kohdassa ## Kaista, ja tarkistat valinnan askeleessa 2. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 1, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Luo issue tehtäväkorttipohjalla ja kirjoita sen numero paperille. Ohje: [[ohje:issue]]. Kortti on viikon ensimmäinen: kirjoita askeleen 2 kommenttiin ___ tilalle sovittu tunnistustapa.", naet: "Kortin issue on GitHubissa. Siinä ovat testin 23 odotetut tulokset ja kommentti, esimerkiksi Sovittu viikkopalaverissa 19.1.: osat tunnistetaan nimellä. Viikon 2 issue Päivitä SVG jää vielä auki: suljet sen askeleen 6 commit-viestissä. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Luo testitiedosto (askel 3a)", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, Explorer, kansio tests", tee: "Avaa työsykli työvaiheen painikkeesta: se aukeaa askeleeseen 3. Kopioi testin pohja ja luo kansioon tests uusi tiedosto test_paivitys.py, johon liität pohjan. Ohje: [[ohje:uusi-tiedosto]].", naet: "Tiedosto tests/test_paivitys.py on tallennettu, ja siinä on pohja: kaksi from-riviä, neljä kommenttiriviä ja rivi def test_23_paivita_svg. Ensimmäinen from-rivi tuo viikon 43 tuontifunktion. Jos tuontifunktiosi nimi ei ole tuo_svg, katso nimi tiedoston tests/test_tuonti.py from-riviltä.", koodi: "from vektoripaja.tuonti import tuo_svg\nfrom vektoripaja.(kortin tiedosto ilman .py) import (rajapintasi funktio)\n\n\n# Testi 23: testiaineisto/oma-piirros.svg ja testiaineisto/paivitys.svg, vanhassa puussa muokattu osa on siirretty 10 x-suunnassa\n# -> (paperisi rivi: muokattu osa)\n# -> (paperisi rivi: uusi osa)\n# -> (paperisi rivi: poistettu osa)\ndef test_23_paivita_svg", koodiOtsikko: "Testin pohja: kopioi tämä" },
            { otsikko: "Kirjoita testi 23 (askel 3a)", missa: "Tiedosto tests/test_paivitys.py", tee: "Vaihda pohjan sulkeet teksteineen: kortin tiedosto, rajapintasi funktion nimi ja kolme tulosta paperiltasi. Napsauta def-rivin loppuun ja hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "Pohjassa ei ole enää sulkeita. Testifunktiossa test_23_paivita_svg on assert-rivit, joissa ovat kolme odotettua tulostasi. Jos assert-rivillä ei ole tulostasi, paina Esc ja kirjoita rivi itse. Kortin tiedosto on kortin kohdassa ## Tiedostot mainittu tiedosto, johon rajapintasi funktio tulee. Issuessa rastitetaan kohta 3a." },
            { vanha: 1, otsikko: "Tee kortti loppuun haarassa", missa: "Työsykli, askeleet 3b–6", tee: "Tee askeleet 3b–6 järjestyksessä. Lisää askeleen 6 commit-viestiin myös rivi Closes #M, jossa M on viikon 2 issuen Päivitä SVG numero.", naet: "Commitit ovat GitHubissa haarassa paivita-svg. Kortin issue ja viikon 2 issue ovat vielä auki: ne sulkeutuvat, kun haara liitetään päähaaraan. Ohita haarassa askeleen 6 tarkistus suljetuista issueista. Toteutusapu on tämän työvaiheen lopussa kohdassa Päivitä SVG -toiminnon toteutusapu." }
          ],
          valmis: "SVG päivittyy, osien muokkaukset säilyvät, ja kaikki testit menevät läpi haarassa paivita-svg.",
          tallenna: "Koodi ja testi 23 tiedostossa tests/test_paivitys.py haarassa paivita-svg GitHubissa. Testin tulos kortin issueen.",
          esimerkki: "Toinen funktio: paivita_reseptit(vanhat, uudet) saa vanhan ja uuden reseptilistan ja palauttaa uuden listan, jossa vanhat arviot ovat mukana.\nTestin alku:\n# Testi 9: Pulla molemmissa listoissa, arvio 5 -> uudessa listassa Pullan arvio on 5\ndef test_9_arvio_sailyy",
          eiRiita: "Rajapinta: funktio paivita saa puun ja palauttaa puun. Rajapinnasta ei näe, että funktio tarvitsee sekä vanhan että uuden solmupuun.",
          apu: {
            otsikko: "Päivitä SVG -toiminnon toteutusapu",
            tree: "Päivitä SVG\n  lue tiedosto samalla tuonnilla kuin viikolla 43\n  → uusi solmupuu\n  → sama osa löytyy?   kopioi vanha oma muunnos\n  → uusi osa?          oletusmuunnos\n  → osa puuttuu?       pois puusta",
            actions: [
              "Testi 23 lukee kaksi tiedostoa kansiosta testiaineisto: alkuperäisen piirroksesi oma-piirros.svg ja tiedoston paivitys.svg.",
              "Painike Päivitä SVG on painikkeen Avaa vieressä. Se lukee sovellukseen avatun SVG-tiedoston uudelleen ja päivittää mallin.",
              "Lue muokattu tiedosto samalla tuontifunktiolla kuin [[vk 43|viikolla 43]]. Se on tiedostossa vektoripaja/tuonti.py, ja sen nimi on tiedoston tests/test_tuonti.py from-rivillä, esimerkiksi tuo_svg. Älä tee toista tuontia.",
              "Rakenna uusi solmupuu. Etsi jokaiselle uudelle osalle vastine vanhasta puusta. Käytä tunnistustapaa, jonka kirjasit [[tiedosto:suunnitelma|suunnitelmaan]]. Jos vastine löytyy, kopioi sen oma muunnos uuteen solmuun.",
              "Osa, jolle ei löydy vastinetta, saa oletusmuunnoksen. Osa, joka puuttuu uudesta tiedostosta, poistuu puusta. Molemmat tilanteet ovat testin 23 odotuksissa.",
              "Tee tunnistuksesta puhdas funktio. Syöte on vanha ja uusi puu. Paluuarvo on uusi puu muunnoksineen. Silloin testi 23 ei tarvitse ikkunaa."
            ]
          },
          sanat: ["rajapinta"]
        },
        "3-6": {
          perii: ["3-3"],
          miksi: "Testi 23 tarkistaa tunnistuksen ilman ikkunaa. Tarkistustesti näyttää, että Päivitä SVG toimii myös sovelluksessa.",
          osat: [
            { otsikko: "Aja kaikki testit", missa: "VS Code, terminaali", tee: "Aja testit. Ohje: [[ohje:pytest]].", naet: "Viimeisellä rivillä lukee passed, eikä rivillä lue failed. Myös vanhat testit menevät läpi haarassa paivita-svg. Jos jokin testi ei mene läpi, valitse työsyklin askelpalkista 3 Rakenna, korjaa toteutus kohdassa 3b ja tee askeleet 4–6 uudelleen. Älä muuta testiä." },
            { otsikko: "Tee tarkistuksen kopio", missa: "Inkscape, File-valikko", tee: "Valitse Inkscapessa File, Open Recent ja paivitys.svg. Valitse File ja Save As, valitse ikkunan vasemmasta reunasta Lataukset ja tallenna nimellä tarkistus.svg.", naet: "Inkscapen otsikkorivillä lukee tarkistus.svg. Repositoryn kansio testiaineisto on ennallaan, joten testi 23 ei muutu." },
            { otsikko: "Avaa kopio sovelluksessa", missa: "VS Code, terminaali ja Vektoripaja", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Valitse sovelluksessa Avaa ja avaa Lataukset-kansiosta tiedosto tarkistus.svg.", naet: "Piirroksen osat näkyvät sovelluksessa.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Siirrä yhtä osaa sovelluksessa", missa: "Vektoripaja, transformipaneeli", tee: "Valitse yksi osa. Siirrä sitä transformipaneelin siirtokentällä, esimerkiksi 10 yksikköä x-suunnassa.", naet: "Osa on uudessa paikassa. Muista, minkä osan siirsit." },
            { otsikko: "Muokkaa saman osan polkua", missa: "Inkscape, tiedosto tarkistus.svg", tee: "Jätä Vektoripaja auki ja vaihda Inkscapeen tehtäväpalkista. Muokkaa saman osan polkua Node-työkalulla kuten työvaiheessa Määrittele päivityksen testi ja tallenna näppäimillä Ctrl+S.", naet: "Osan muoto muuttui Inkscapessa, ja tiedosto tarkistus.svg on tallennettu. Vektoripaja on yhä auki tehtäväpalkissa." },
            { otsikko: "Päivitä malli", missa: "Vektoripaja", tee: "Vaihda Vektoripajaan tehtäväpalkista ja valitse painike Päivitä SVG. Katso siirtämääsi osaa ja sulje sitten sovellus ikkunan sulkupainikkeesta.", naet: "Painike Päivitä SVG on painikkeen Avaa vieressä. Osa pysyi siirretyssä paikassa, ja polun muutos näkyi. Jos näin ei käynyt, tarkistustestin tulos on ei läpi." },
            { otsikko: "Kirjaa tarkistustesti issueen", missa: "Selain, GitHub, kortin issuen kommenttikenttä", tee: "Avaa kortin issue [[github:issues|repositoryn Issues-sivulta]]. Kopioi kirjaus, liitä se kommenttikenttään, täytä rivit Havaittu tulos ja Tulos ja valitse Comment.", naet: "Kortin issuessa on tarkistustestin kommentti. Jos tulos on ei läpi, valitse työsyklin askelpalkista 3 Rakenna, korjaa toteutus kohdassa 3b ja tee askeleet 4–6 uudelleen. Tee sitten tarkistustesti uudelleen tämän työvaiheen osatehtävästä 2 alkaen.", koodi: "Tarkistustesti (käsin): Päivitä SVG sovelluksessa\nOdotettu tulos: siirretty osa pysyy paikallaan, ja polun muutos näkyy.\nHavaittu tulos: \nTulos: läpi / ei läpi", koodiOtsikko: "Tarkistustestin kirjaus: kopioi tämä" },
            { otsikko: "Käy tarkistuslista läpi", missa: "Tämän työvaiheen lopussa oleva kohta Päivitä SVG -toiminnon tarkistus, ja kortin issue", tee: "Käy kohdan tarkistuslista läpi. Kirjoita kortin issueen kommentti Tarkistuslista käyty ja niiden rivien teksti, jotka eivät täyttyneet.", naet: "Issuessa on kommentti. Älä liitä koko listaa. Jos kaikki rivit täyttyivät, kommentissa lukee vain Tarkistuslista käyty. Rivi pull request luettu ja yhdistetty täyttyy vasta työvaiheessa Liitä päivitys päähaaraan, joten sitä ei lasketa puuttuvaksi. Älä kirjoita siitä kommenttia, koska pull requestin sivulla lukee silloin Merged." }
          ],
          valmis: "Kaikki testit menevät läpi haarassa, ja tarkistustestin tulos ja tarkistuslistan kommentti ovat kortin issuessa.",
          tallenna: "Tarkistustestin tulos ja tarkistuslistan kommentti kortin issueen.",
          apu: {
            otsikko: "Päivitä SVG -toiminnon tarkistus",
            code: "PÄIVITYKSEN TARKISTUSLISTA\n[ ] tunnistustapa kirjattu suunnitelmaan\n[ ] testi 23: odotus kirjattu ennen koodia\n[ ] transformit säilyvät, uusi osa saa oletuksen\n[ ] kaikki vanhat testit läpi haarassa\n[ ] pull request luettu ja yhdistetty",
            test: "Siirrä yhtä osaa sovelluksessa. Muokkaa sen polkua Inkscapessa. Tallenna tiedosto. Valitse Päivitä SVG. Osan pitää pysyä siirretyssä paikassa, ja polun muutoksen pitää näkyä."
          },
          sanat: []
        },
        "3-5": {
          perii: ["3-3"],
          miksi: "Pull request on pyyntö liittää haara päähaaraan. Luet muutokset itse, ennen kuin teet merge-toiminnon eli liität haaran päähaaraan.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. VS Coden vasemmassa alakulmassa lukee paivita-svg." },
            { otsikko: "Aloita uusi pull request", missa: "Selain, GitHub", tee: "Avaa [[github:pulls|repositoryn Pull requests -sivu]]. Valitse New pull request.", naet: "Sivu Compare changes aukeaa. Siinä on kaksi valikkoa: base ja compare." },
            { otsikko: "Valitse haarat", missa: "Sivu Compare changes", tee: "Valitse base-valikosta main ja compare-valikosta paivita-svg: [[kuvaohje:github-pull-request]].", naet: "Sivulla näkyvät haaran commitit ja muutetut tiedostot. Jos sivulla lukee Can't automatically merge, lähetä viesti ohjaajalle ([[ohje:teams]]) äläkä jatka. Kirjoita odottaessasi viikon kirjausta niiltä osin kuin voit, ja palaa tähän, kun ohjaaja vastaa. Jos vastausta ei tule samana päivänä, lähetä sama viesti uudelleen.", koodi: "Hei, pull requestissa paivita-svg → main lukee Can't automatically merge. Mitä teen?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Luo pull request", missa: "Sivu Compare changes", tee: "Valitse Create pull request. Kirjoita otsikoksi Päivitä SVG ja valitse uudelleen Create pull request.", naet: "Pull requestin sivu aukeaa. Sivulla on vihreä merkki Open ja pull requestin numero." },
            { otsikko: "Lue muutokset", missa: "Pull requestin sivu, välilehti Files changed", tee: "Valitse välilehti Files changed. Lue jokainen muutettu tiedosto.", naet: "Vihreät rivit ovat uusia ja punaiset poistettuja. Listassa ovat kortin tiedostot, tests/test_paivitys.py, testiaineisto/paivitys.svg, PROJEKTIN-TILA.md ja [[tiedosto:ai-loki|project-docs/ai-loki.md]]. Jos listassa on muu tiedosto, lähetä viesti ohjaajalle ([[ohje:teams]]) ja tee merge vasta vastauksen jälkeen. Jos vastausta ei tule samana päivänä, lähetä sama viesti uudelleen.", koodi: "Hei, pull requestissa Päivitä SVG on tiedosto ___, jota kortissa ei mainita. Teenkö mergen?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Tee merge", missa: "Pull requestin sivu, välilehti Conversation", tee: "Tee ohjeen kohdat Merge pull request, Confirm merge ja Delete branch. Ohje: [[ohje:pull-request]].", naet: "Sivulla lukee Merged, ja haara paivita-svg on poistettu GitHubista. Kortin issue ja viikon 2 issue Päivitä SVG ovat nyt [[github:issues?q=is%3Aissue+is%3Aclosed|suljetuissa issueissa]]." },
            { otsikko: "Vaihda päähaaraan", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee Switched to branch 'main'. VS Coden vasemmassa alakulmassa lukee main.", koodi: "git switch main", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Hae päähaaran muutokset", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee Fast-forward ja muutettujen tiedostojen nimet. Päivitä SVG on nyt päähaarassa myös omalla koneellasi.", koodi: "git pull", koodiOtsikko: "Komento: kopioi tämä" }
          ],
          valmis: "Pull request on yhdistetty päähaaraan, ja päähaara on ajan tasalla omalla koneellasi.",
          tallenna: "Yhdistetty pull request GitHubissa. Pull requestin linkki viikon kirjaukseen perjantaina.",
          sanat: ["pull request", "merge"]
        }
      },
      lisatehtavat: [["Lisää halutessasi automaattinen päivitys.", "Tämä on valinnainen, eikä se kuulu Päivitä SVG -korttiin. Tee se vasta, kun painikkeella toimiva päivitys on päähaarassa. Qt:n <code>QFileSystemWatcher</code> huomaa, kun tallennat SVG:n Inkscapessa. Silloin se käynnistää Päivitä SVG -toiminnon itse. Tee automaattisesta päivityksestä oma kortti päähaarassa main: avaa työvaihe Rakenna piirroksen päivitys, valitse sen lopussa painike Käytä työsykliä tämän muutoksen tekemiseen ja valitse Aloita kierros. Muutettava tiedosto on se, jossa painike Päivitä SVG on. Löydät sen VS Codessa näppäimillä Ctrl+Shift+F: kirjoita hakuun Päivitä SVG, niin tulos näyttää tiedoston nimen. Kirjoita tiedoston polku askeleen 1 Lisäksi-riville. Kaista-rivin saa jättää ennalleen: Copilot valitsee kaistan. Tee testi käsin: kirjoita odotettu tulos kortin issueen (kun tallennat SVG:n Inkscapessa, malli päivittyy ilman painiketta) ja kirjaa havaittu tulos samaan issueen. Kirjoita askeleen 4 kirjauspohjan Testi-riville Testi käsin: automaattinen päivitys. Koodin alku: <code>self.vahti = QFileSystemWatcher([polku])</code> ja <code>self.vahti.fileChanged.connect(self.paivita_svg)</code>. Inkscape voi tallentaa korvaamalla tiedoston. Silloin seuranta katkeaa. Lisää polku uudelleen: <code>if polku not in self.vahti.files(): self.vahti.addPath(polku)</code>. Ohje: <a href=\"https://doc.qt.io/qtforpython-6/PySide6/QtCore/QFileSystemWatcher.html\">Qt for Python: QFileSystemWatcher</a>."]],
      kuvaohjeet: ["github-pull-request"],
      sykli: true
    },
    4: {
      type: "feature",
      feature: "Sovittu puute on korjattu tai tärkeän jatkon seuraava toiminto on valmis.",
      connection: "Tällä viikolla varmistat, että Vektoripajan pakollinen ydin on valmis ennen seuraavia laajennuksia. Korjaat ensin sovitut rästit ja etenet sen jälkeen asiakkaiden kanssa päätetyssä tärkeän jatkon järjestyksessä. Uusi testi ja virheenkorjausketju 2 auttavat pitämään myös jatkokehityksen laadun näkyvänä.",
      deliverable: "Pakollisen ytimen rästit omassa haarassa tai seuraava tärkeän jatkon toiminto · testi 24 · virheenkorjausketju 2.",
      why: "Pakollinen ydin painaa arvioinnissa enemmän kuin tärkeä jatko. Teet rästit ensin, jotta pakollinen ydin eli MVP on kokonainen.",
      done: "Pakollisen ytimen rästit on liitetty päähaaraan pull requestilla, tai tärkeän jatkon toiminto toimii ja testi 24 menee läpi. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa.",
      record: "Mitä teit ja miksi juuri sen, kortin testin tulos (testi 24 tai rästin testi), pull requestin linkki, jos teit haaran, sekä virheenkorjausketju 2. Kirjoita kohtaan Missä työnäyte on? nämä näyttömatriisin vaatimukset: etsii ja korjaa virheitä ohjelmakoodista, testaa ohjelman toimintoja, sopii tehtävistä tiimin muiden jäsenten kanssa sekä jakaa kehitystiimin kanssa toteutettavat toiminnot tehtäviksi.",
      skills: ["Priorisointi", "Toimintalogiikka", "Virheenkorjaus"],
      tehtavat: {
        "4-7": {
          perii: ["4-1"],
          miksi: "Sovit viikon tehtävän viikkopalaverissa. Sitä varten kokoat ensin pakollisen ytimen mahdolliset rästit ja tärkeän jatkon seuraavan toiminnon.",
          osat: [
            { otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer, ennen viikkopalaveria", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki editorissa." },
            { otsikko: "Lue pakollisen ytimen myöhästymisen ratkaisu", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Pakollisen ytimen myöhästymisen ratkaisu (viikko 47)", tee: "Etsi otsikko ja lue sen jälkeinen teksti. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Kirjoita paperille jokainen pakollisen ytimen toiminto, joka on mainittu otsikon jälkeen.", naet: "Paperilla ovat toiminnot, jotka viikolla 47 siirrettiin myöhemmäksi. Ne ovat mahdollisia rästejä. Jos otsikon jälkeen on vain >-ohjerivi, pakollinen ydin ei ollut myöhässä, eikä tästä otsikosta tule rästejä.", koodi: "### Pakollisen ytimen myöhästymisen ratkaisu (viikko 47)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Listaa mahdolliset rästit paperille", missa: "Selain, GitHub ja paperi", tee: "Avaa [[github:issues?q=is%3Aissue+is%3Aopen+label%3Ahavainto|avoimet havaintoissuet]] ja vertaa niitä [[toimeksianto#pakollinen-ydin|toimeksiannon riviin Pakollinen ydin ennen joulua]]. Kirjoita paperille jokainen havaintoissue, joka koskee pakollisen ytimen toimintoa, ja sen numero.", naet: "Paperilla ovat mahdolliset rästit: edellisen osatehtävän toiminnot ja pakollisen ytimen havaintoissuet numeroineen, tai tieto, ettei rästejä ole. Rästi on kesken jäänyt pakollisen ytimen toiminto. Palaverissa sovitte, teetkö rästin." },
            { otsikko: "Valitse tärkeän jatkon seuraava toiminto", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Tärkeän jatkon järjestys (viikko 2)", tee: "Etsi otsikko ja lue järjestys. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3. Kirjoita paperille ensimmäinen toiminto, jonka viikon 2 issue on vielä [[github:issues?q=is%3Aissue+is%3Aopen|avoimissa issueissa]], ja issuen numero.", naet: "Paperilla on tärkeän jatkon seuraava toiminto ja sen issuen numero. Toiminto Päivitä SVG tehtiin viikolla 3, joten sen issue on suljettu. Jos sovitte palaverissa rästin, viikon kortti on rästi, ja paperisi tärkeän jatkon toiminto on viikon Lisätehtävä.", koodi: "### Tärkeän jatkon järjestys (viikko 2)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" }
          ],
          valmis: "Paperilla ovat pakollisen ytimen mahdolliset rästit ja tärkeän jatkon seuraava toiminto viikkopalaveria varten.",
          tallenna: "Rästit ja seuraava toiminto paperilla viikkopalaveria varten.",
          sanat: []
        },
        "4-1": {
          versio: "2026-10-05",
          miksi: "Ratkaiset ensimmäisen version puutteet pakollisen ytimen toiminnoissa ennen laajennuksia.",
          osat: [
            { vanha: 0, otsikko: "Käy viikkopalaveri", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Käy paperisi rästit ja tärkeän jatkon toiminto läpi ohjaajan kanssa ja sovi, kumman teet ensin. Kirjoita paperille sopimus, palaverin päivä ja rästin kohdalla myös sovittu testi.", naet: "Paperilla on viikon kortti eli rästi tai tärkeän jatkon toiminto sekä palaverin päivä. Jos teet rästin, paperilla on sen testi ja testitiedosto, esimerkiksi testi 12 tiedostossa tests/test_putki.py, tai tieto, että testi tehdään käsin. Tämä on myös viikkorutiinin palaveri, joten rastita palaveri myös viikkorutiinissa." },
            { otsikko: "Sovi ketjun havaintoissue tai pyydä vikatehtävä", missa: "Sama viikkopalaveri", tee: "Kysy ohjaajalta, minkä havaintoissuen virheestä teet virheenkorjausketjun 2. Jos sopivaa havaintoissueta ei ole, pyydä vikatehtävä ja kirjoita ohjaajan kuvaus paperille.", naet: "Paperilla on ketjun havaintoissuen numero, esimerkiksi tällä viikolla korjattavan rästin issue, tai vikatehtävän kuvaus: mitä teet sovelluksessa ja mikä silloin menee väärin. Vikatehtävä on ohjaajan tekemä tarkoituksellinen virhe. Jos ohjaaja tekee vikatehtävän myöhemmin pull requestina, älä jää odottamaan: jatka seuraavasta osatehtävästä. Luot vikatehtävän havaintoissuen työvaiheessa Estä korjatun virheen paluu." },
            { vanha: 0, otsikko: "Tarkista sovitun tehtävän issue", missa: "Paperi ja selain, GitHub", tee: "Katso paperilta sovitun tehtävän issuen numero: rästin havaintoissue tai toiminnon issue, jonka teit viikolla 2. Jos rästillä ei ole issueta, luo sille havaintoissue. Ohje: [[ohje:havaintoissue]].", naet: "Paperilla on sovitun tehtävän issuen numero, esimerkiksi #27. Rästin havaintoissuessa kohta Mitä odotin on toiminnon oikea toiminta, Mitä tapahtui on puute, ja Toistamisohje kertoo, miten puutteen näkee. Label havainto tulee pohjasta, joten löydät issuen myöhemmin havaintoissueista." },
            { vanha: 0, otsikko: "Avaa tilatiedosto ja etsi Seuraavana", missa: "VS Code, Explorer", tee: "Avaa tiedosto PROJEKTIN-TILA.md. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]], vaiheet 1–3.", naet: "Kursori on otsikon ## Seuraavana rivillä.", koodi: "## Seuraavana", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Kirjoita sovittu tehtävä tilatiedostoon", missa: "Tiedosto PROJEKTIN-TILA.md, otsikko ## Seuraavana", tee: "Kopioi rivin malli, paina tiedostossa alanuolinäppäintä ja Home ja liitä malli. Vaihda sulkeet teksteineen sovituksi tehtäväksi ja issuen numeroksi ja paina Enter.", naet: "Otsikon ## Seuraavana jälkeen on ensimmäisenä viikon 4 tehtävä ja issuen numero, esimerkiksi - Kierto tasakulmiin, issue #27. Vanhat rivit ovat uuden rivin jälkeen. Koska muutit tilatiedostoa, liität tilatiedoston Copilotiin uudelleen työsyklin askeleessa 1.", koodi: "- (sovittu tehtävä), issue #(numero)", koodiOtsikko: "Rivin malli: kopioi tämä" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston PROJEKTIN-TILA.md muutokset.", koodi: "Kirjaa viikon 4 tehtävä tilatiedostoon", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Olet sopinut, teetkö ensin rästin vai tärkeän jatkon seuraavan toiminnon. Myös virheenkorjausketjun havaintoissue tai vikatehtävä on sovittu. Sovittu tehtävä ja sen issue ovat tilatiedostossa.",
          tallenna: "Sovittu tehtävä ja sen issuen numero tiedostossa PROJEKTIN-TILA.md GitHubissa. Sopimus kortin issueen kommenttina työvaiheessa Toteuta sovittu parannus.",
          esimerkki: "Reseptikirjan tilatiedosto:\n## Seuraavana\n- Pakollisen ytimen rästi: haku ei löydä reseptiä, jonka nimessä on iso kirjain, issue #18",
          eiRiita: "## Seuraavana\n- Jatketaan.\nRiviltä puuttuvat tehtävä ja issuen numero.",
          sanat: ["vikatehtävä"]
        },
        "4-2": {
          versio: "2026-10-05",
          miksi: "Seuraava toiminto tarvitsee oman tarkistettavan tavoitteen.",
          osat: [
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki editorissa." },
            { vanha: 0, otsikko: "Kirjoita seuraava toiminto", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Seuraava toiminto (viikko 4)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen paperiltasi, minkä toiminnon teet ja miksi juuri sen. Jos teet ensin rästin, tekstiin tulee myös rästi ja palaverin päivä.", naet: "Otsikon jälkeen on 1–3 omaa virkettä. Niissä on toiminnon nimi ja sana koska.", koodi: "### Seuraava toiminto (viikko 4)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa viikon 4 seuraava toiminto suunnitelmaan", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { vanha: 1, otsikko: "Päätä testin 24 testitapa ja syöte", missa: "Paperi tai muistiinpanot", tee: "Päätä, testaatko tärkeän jatkon toiminnon koodilla vai käsin ja millä syötteellä testi 24 kokeilee toimintoa. Kirjoita testitapa ja syöte paperille.", naet: "Paperilla on testitapa ja syöte. Koodilla tehty testi: tuloksen voi tarkistaa kutsumalla funktiota, ja syöte on yksi tai kaksi arvoa, esimerkiksi kierrossa tasakulmiin kulmat 22° ja 23°. Käsin tehty testi: tuloksen näkee vain sovelluksen ikkunassa, ja syöte on toimenpide, esimerkiksi painat view lockin pikanäppäintä ja yrität kiertää näkymää hiirellä. Testi 24 kuuluu vain tärkeän jatkon toiminnolle. Rästin testi on se, jonka sovit palaverissa." },
            { vanha: 1, otsikko: "Päätä testin 24 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Kirjoita paperille jokaiselle syötteelle, mitä toiminnon pitää palauttaa tai näyttää.", naet: "Paperilla on testin 24 odotettu tulos lukuna tai näkyvänä asiana. Kirjoitat odotetun tuloksen toiminnon korttiin ja testiin, kun teet toiminnon." },
            { otsikko: "Päätä funktion rajapinta", missa: "Vain jos testi 24 tehdään koodilla: paperi tai muistiinpanot", tee: "Kirjoita paperille funktion nimi verbi ensin, syöte ja paluuarvo. Syöte ja paluuarvo ovat samat kuin testin 24 syöte ja odotettu tulos.", naet: "Paperilla on rivi, esimerkiksi Reseptikirjan funktio lisaa_kuva saa tiedoston nimen ja palauttaa True tai False. Kirjoitat rivin kortin Rajapinta-riville. Jos testi 24 tehdään käsin, rastita tämä." }
          ],
          valmis: "Seuraava toiminto on [[tiedosto:suunnitelma|suunnitelmassa]], ja testin 24 testitapa, syöte ja odotettu tulos on päätetty ennen toteutusta.",
          tallenna: "Valinta tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa. Testin 24 syöte, odotettu tulos ja rajapinta paperilla. Ne menevät toiminnon kortin issueen, kun teet toiminnon.",
          esimerkki: "Reseptikirjan seuraava toiminto: \"Teen ensin pakollisen ytimen rästin: haku ei löydä reseptiä, jonka nimessä on iso kirjain. Sovittu palaverissa 26.1. Sitten teen kuvien lisäyksen, koska asiakas antoi sille prioriteetin 1.\"\nTesti 24: lisaa_kuva(\"kakku.png\") palauttaa True, ja lisaa_kuva(\"kakku.heic\") palauttaa False.",
          eiRiita: "\"Teen jatkojuttuja.\" Tekstistä ei näe, mikä tehdään eikä miksi juuri se. Testistä puuttuvat syöte ja odotettu tulos.",
          sanat: []
        },
        "4-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Viet korjauksen tai tärkeän jatkon toiminnon osaksi toimivaa sovellusta.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Tällä kierroksella teet palaverissa sovitun tehtävän: rästin tai tärkeän jatkon toiminnon." },
            { vanha: 0, otsikko: "Suunnittele kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (sovittu tehtävä), Rajapinta paperilta, jos se on siellä, Testi-rivi jokaiselle syötteelle ja Lisäksi: sovitun tehtävän issue #M ja testitapa.", naet: "Copilot on kirjoittanut kortin, jossa on kuusi otsikkoa. M on sovitun tehtävän issuen numero. Kahdesta syötteestä tulee kaksi Testi-riviä, ja molemmissa on sama testin numero. Toiminnon kortissa testi on testi 24. Rästin kortissa testi on se, jonka sovit palaverissa. Kaista-rivin saa jättää ennalleen: Copilot valitsee kaistan ja perustelee sen kohdassa ## Kaista, ja tarkistat valinnan askeleessa 2. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä", tee: "Luo issue tehtäväkorttipohjalla ja kirjoita sen numero paperille. Ohje: [[ohje:issue]]. Kortti on viikon ensimmäinen: kirjoita askeleen 2 kommenttiin ___ tilalle paperisi palaverisopimus.", naet: "Kortin issue on GitHubissa. Siinä on odotettu tulos ja kommentti, esimerkiksi Sovittu viikkopalaverissa 26.1.: teen ensin rästin, issue #18. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Luo haara viikko-4", missa: "VS Code, terminaali", tee: "Jos teet rästin tai kortin Tiedostot-kohdassa on vähintään kaksi tiedostoa, aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee Switched to a new branch 'viikko-4'. VS Coden vasemmassa alakulmassa lukee viikko-4. Testitiedostoa ei lasketa, koska se on kortin kohdassa Älä tee eikä kohdassa Tiedostot. Jos haaraa ei tarvita, rastita tämä ja osatehtävä 5: teet työn päähaarassa main.", koodi: "git switch -c viikko-4", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Pushaa haara GitHubiin", missa: "Vain jos loit haaran: VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new branch] viikko-4 -> viikko-4. Jatkossa Sync Changes lähettää commitit tähän haaraan eikä päähaaraan main.", koodi: "git push -u origin viikko-4", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Kirjoita kortin testi (askel 3a)", missa: "Työsykli, askel 3 Rakenna, kohta 3a · VS Code, kansio tests", tee: "Avaa työsykli työvaiheen painikkeesta: se aukeaa askeleeseen 3. Tee kohta 3a: toiminnon testi 24 uuteen tiedostoon tests/test_jatko.py ([[ohje:uusi-tiedosto]]) tai rästin testi palaverissa sovittuun tiedostoon.", naet: "Testitiedostossa on kortin testi, ja sen assert-rivillä on odotettu tuloksesi. Issuessa kohta 3a on rastitettu. Jos rästin testi oli jo valmiina, rastita 3a heti. Jos teet testin käsin, kirjoita odotettu tulos kortin issueen kommentiksi ja rastita 3a." },
            { vanha: 0, otsikko: "Tee kortti loppuun", missa: "Työsykli, askeleet 3b–6", tee: "Tee askeleet 3b–6 järjestyksessä. Lisää askeleen 6 commit-viestiin myös rivi Closes #M, jossa M on sovitun tehtävän issuen numero.", naet: "Testit menevät läpi, ja muutos on GitHubissa. Jos teit rästin testin käsin eikä sillä ole numeroa, askeleen 4 kirjauspohjan Testi-rivillä lukee käsin ja testin nimi, esimerkiksi Testi käsin: kamera ylänäkymään. Jos teit haaran, kortin issue ja sovitun tehtävän issue ovat vielä auki: ne sulkeutuvat, kun liität haaran päähaaraan seuraavassa työvaiheessa. Askeleen 6 tarkistus suljetuista issueista ohitetaan silloin." }
          ],
          valmis: "Sovittu muutos toimii, ja testit menevät läpi. Rästi tai monen tiedoston muutos on haarassa viikko-4.",
          tallenna: "Muutos GitHubiin, rästi ja monen tiedoston muutos haaraan viikko-4. Toiminnon testi 24 tiedostossa tests/test_jatko.py. Testin tulos kortin issueen.",
          esimerkki: "Reseptikirjan testi 24 tiedostossa tests/test_jatko.py:\n# Testi 24: lisaa_kuva(\"kakku.heic\") -> False\ndef test_24_heic_hylataan():\n    assert lisaa_kuva(\"kakku.heic\") is False",
          eiRiita: "def test_24():\n    assert lisaa_kuva\nTesti ei kokeile syötettä, eikä siinä ole odotettua tulosta.",
          sanat: ["haara"]
        },
        "4-5": {
          perii: ["4-3"],
          miksi: "Liität rästin ja monen tiedoston muutoksen päähaaraan pull requestilla, kun kaikki testit menevät läpi. Pull request on pyyntö liittää haara päähaaraan.",
          osat: [
            { otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. VS Coden vasemmassa alakulmassa lukee viikko-4. Jos et tehnyt haaraa viikko-4, rastita tämän työvaiheen osatehtävät ja siirry seuraavaan työvaiheeseen." },
            { otsikko: "Aja kaikki testit", missa: "VS Code, terminaali", tee: "Aja testit. Ohje: [[ohje:pytest]].", naet: "Kaikki testit menevät läpi: viimeisellä rivillä lukee passed eikä failed. Jos jokin testi ei mene läpi, valitse työsyklin askelpalkista 3 Rakenna, korjaa toteutus kohdassa 3b ja tee askeleet 4–6 uudelleen haarassa viikko-4. Älä muuta testiä. Palaa sitten tähän." },
            { otsikko: "Aloita uusi pull request", missa: "Selain, GitHub", tee: "Avaa [[github:pulls|repositoryn Pull requests -sivu]]. Valitse New pull request.", naet: "Sivu Compare changes aukeaa. Siinä on kaksi valikkoa: base ja compare." },
            { otsikko: "Valitse haarat ja luo pull request", missa: "Sivu Compare changes", tee: "Valitse base-valikosta main ja compare-valikosta viikko-4 [[kuvaohje:github-pull-request|kuvaohjeen]] mukaan. Valitse Create pull request, kirjoita otsikoksi kortin issuen otsikko ja valitse uudelleen Create pull request.", naet: "Pull requestin sivu aukeaa. Sivulla on vihreä merkki Open ja pull requestin numero. Jos sivulla lukee Can't automatically merge, lähetä viesti ohjaajalle ([[ohje:teams]]) äläkä jatka. Kirjoita odottaessasi viikon kirjausta niiltä osin kuin voit, ja palaa tähän, kun ohjaaja vastaa. Jos vastausta ei tule samana päivänä, lähetä sama viesti uudelleen.", koodi: "Hei, pull requestissa viikko-4 → main lukee Can't automatically merge. Mitä teen?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Lue muutokset", missa: "Pull requestin sivu, välilehti Files changed", tee: "Valitse välilehti Files changed. Lue jokainen muutettu tiedosto.", naet: "Vihreät rivit ovat uusia ja punaiset poistettuja. Listassa ovat kortin tiedostot, testitiedosto, PROJEKTIN-TILA.md ja [[tiedosto:ai-loki|project-docs/ai-loki.md]]. Jos listassa on muu tiedosto, lähetä viesti ohjaajalle ([[ohje:teams]]) ja tee merge vasta vastauksen jälkeen. Jos vastausta ei tule samana päivänä, lähetä sama viesti uudelleen.", koodi: "Hei, pull requestissa viikko-4 on tiedosto ___, jota kortissa ei mainita. Teenkö mergen?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Tee merge", missa: "Pull requestin sivu, välilehti Conversation", tee: "Tee ohjeen kohdat Merge pull request, Confirm merge ja Delete branch. Ohje: [[ohje:pull-request]].", naet: "Sivulla lukee Merged, ja haara viikko-4 on poistettu GitHubista. Kortin issue ja sovitun tehtävän issue ovat nyt [[github:issues?q=is%3Aissue+is%3Aclosed|suljetuissa issueissa]]." },
            { otsikko: "Vaihda päähaaraan", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee Switched to branch 'main'. VS Coden vasemmassa alakulmassa lukee main.", koodi: "git switch main", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Hae päähaaran muutokset", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee Fast-forward ja muutettujen tiedostojen nimet. Muutos on päähaarassa myös omalla koneellasi.", koodi: "git pull", koodiOtsikko: "Komento: kopioi tämä" }
          ],
          valmis: "Haara viikko-4 on liitetty päähaaraan pull requestilla, ja päähaara on ajan tasalla omalla koneellasi.",
          tallenna: "Yhdistetty pull request GitHubissa. Pull requestin linkki viikon kirjaukseen perjantaina.",
          sanat: ["pull request", "merge"]
        },
        "4-4": {
          perii: ["4-3"],
          miksi: "Virheenkorjausketju näyttää, miten löydät virheen ja estät sen palaamisen. Regressiotesti on testi, joka toistaa korjatun virheen ja jää testeihin.",
          osat: [
            { otsikko: "Luo havaintoissue vikatehtävästä", missa: "Vain jos pyysit vikatehtävän: selain, GitHub", tee: "Jos ohjaaja teki vikatehtävän pull requestina, hyväksy pull request ensin. Ohje: [[ohje:pull-request]]. Luo sitten havaintoissue ohjaajan kuvauksen mukaan. Ohje: [[ohje:havaintoissue]].", naet: "Havaintoissue on GitHubissa, ja tiedät sen numeron. Mitä odotin on oikea toiminta, Mitä tapahtui on ohjaajan kuvaama virhe, ja Toistamisohje on se, mitä teet sovelluksessa. Jos ohjaaja ei ole vielä antanut vikatehtävää, lähetä hänelle muistutus. Ohje: [[ohje:teams]]. Tee odottaessasi viikon Lisätehtävä, jos teit rästin, tai kirjoita viikon kirjausta. Palaa tähän, kun vastaus tulee. Jos et pyytänyt vikatehtävää, rastita tämä.", koodi: "Hei, odotan vikatehtävää virheenkorjausketjua 2 varten. Voitko lähettää sen kuvauksen tai pull requestin?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Valitse havaintoissue", missa: "Selain, GitHub", tee: "Avaa [[github:issues?q=is%3Aissue+label%3Ahavainto|repositoryn havaintoissuet]]. Valitse issue, jonka sovit palaverissa, tai vikatehtävän havaintoissue.", naet: "Issue on auki, ja tiedät sen numeron. Havaintoissue on issue, johon on kirjattu virhe. Viikon 49 ketjun issue ja viikon 2 korjauksen issue eivät kelpaa, koska niissä on jo regressiotesti. Issue ei kelpaa myöskään, jos siinä on jo kommentti Virheenkorjausketju. Jos palaverissa ei sovittu issueta, valitse tällä viikolla korjatun rästin havaintoissue. Jos rästiä ei ollut, valitse avoin havaintoissue, jonka numero on pienin ja jonka virheen saa toistettua kutsumalla funktiota." },
            { otsikko: "Tee uusintatesti", missa: "VS Code, terminaali ja Vektoripajan ikkuna", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Tee issuen Toistamisohje, kirjoita paperille, toistuuko virhe, ja sulje sovelluksen ikkuna.", naet: "Paperilla on uusintatestin tulos: virhe toistuu tai ei toistu. Toistamisohjeen tekemistä kutsutaan uusintatestiksi. Jos havainto koskee testiä eikä ikkunaa, aja sen sijaan testit. Ohje: [[ohje:pytest]]. Jos virhe toistuu, korjaat sen työvaiheessa Korjaa virhe, jos se toistuu, ja teet uusintatestin silloin uudelleen.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Etsi testattava funktio", missa: "VS Code, Explorer, kansio tests", tee: "Avaa kansiosta tests tiedosto, joka testaa virheen toimintoa. Kirjoita tiedoston alun from-rivi paperille.", naet: "Paperilla on from-rivi, esimerkiksi from vektoripaja.kierto import kiertokulma. Rivillä ovat moduuli ja funktion nimi. Regressiotesti kutsuu samaa funktiota virheen syötteellä. Rästin funktio on myös rästin kortin kohdassa ## Tavoite, ja vikatehtävän pull requestin välilehdellä Files changed näkyy vikatehtävän tiedosto. Jos et löydä funktiota, lähetä viesti ohjaajalle ([[ohje:teams]]) ja tee odottaessasi viikon Lisätehtävä, jos teit rästin, tai kirjoita viikon kirjausta. Palaa tähän, kun vastaus tulee.", koodi: "Hei, en tiedä, mitä funktiota havaintoissuen #___ virhe koskee. Mistä tiedostosta etsin?", koodiOtsikko: "Viesti: kopioi tämä" },
            { otsikko: "Avaa regressiotestien tiedosto", missa: "VS Code, Explorer, kansio tests", tee: "Avaa olemassa oleva tiedosto tests/test_regressio.py. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä on viikon 49 regressiotesti ja viikon 2 regressiotesti, jos teit sen koodilla." },
            { otsikko: "Kirjoita regressiotestin alku", missa: "Tiedosto tests/test_regressio.py, tiedoston loppu", tee: "Kopioi testin pohja, paina tiedostossa Ctrl+End ja Enter kaksi kertaa ja liitä pohja. Vaihda pohjan from-rivi paperisi from-riviksi, luku 18 molemmissa kohdissa havaintoissuen numeroksi ja sulkeet teksteineen issuen tiedoiksi.", naet: "Tiedoston lopussa ovat from-rivi, kommenttirivi ja rivi, jossa on def test_regressio_ ja havaintoissuen numero. Pohjassa ei ole enää sulkeita. Sama from-rivi saa olla tiedostossa kahdesti. Oikea tulos on havaintoissuen kohdassa Mitä odotin. Teet testin koodilla, koska ketjun rivi 6 on testifunktio.", koodi: "from vektoripaja.moduuli import funktio\n\n\n# Regressiotesti #18: (syöte, jolla virhe tuli) -> (oikea tulos kohdasta Mitä odotin)\ndef test_regressio_18", koodiOtsikko: "Testin pohja: kopioi tämä" },
            { otsikko: "Hyväksy testin täydennys", missa: "Tiedosto tests/test_regressio.py, def-rivin loppu", tee: "Napsauta def-rivin loppuun. Hyväksy täydennys. Ohje: [[ohje:taydennys]].", naet: "def-rivin perässä on (): ja seuraavalla rivillä assert-rivi, jossa on oikea tulos eli havaintoissuen kohta Mitä odotin. Jos assert-rivillä ei ole oikeaa tulosta, paina Esc ja kirjoita assert-rivi itse. Täydennys on tekoälyn käyttöä: kirjaat sen tiedostoon [[tiedosto:ai-loki|ai-loki.md]] työvaiheessa Dokumentoi virheen korjaus." },
            { otsikko: "Aja testit", missa: "VS Code, terminaali", tee: "Aja testit. Ohje: [[ohje:pytest]].", naet: "Jos virhe on korjattu, regressiotestin rivillä lukee PASSED, ja myös vanhat testit menevät läpi. Jos lukee FAILED, virhe on vielä koodissa: korjaat sen seuraavassa työvaiheessa." }
          ],
          valmis: "Valitun havaintoissuen regressiotesti on tiedostossa tests/test_regressio.py, ja uusintatestin tulos on paperilla.",
          tallenna: "Regressiotesti tiedostossa tests/test_regressio.py. Se menee GitHubiin korjauksen commitissa tai työvaiheessa Dokumentoi virheen korjaus.",
          esimerkki: "Reseptikirjan regressiotesti issuesta #18:\nfrom reseptikirja.haku import hae\n\n\n# Regressiotesti #18: hae([\"Kakku\"], \"kakku\") -> [\"Kakku\"]\ndef test_regressio_18():\n    assert hae([\"Kakku\"], \"kakku\") == [\"Kakku\"]",
          eiRiita: "def test_regressio():\n    assert True\nTesti ei toista havaintoissuen virhettä, eikä sen nimestä näe issuen numeroa.",
          sanat: ["regressiotesti", "vikatehtävä"]
        },
        "4-8": {
          perii: ["4-4"],
          tyosykli: true,
          miksi: "Jos virhe toistuu, korjaat sen työsyklillä. Regressiotesti on jo kirjoitettu, joten se on kortin testi.",
          osat: [
            { otsikko: "Avaa työsykli, jos virhe toistuu", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki. Jos uusintatestissä virhe ei toistunut ja regressiotesti meni läpi, rastita tämän työvaiheen kaikki osatehtävät ja siirry työvaiheeseen Dokumentoi virheen korjaus." },
            { otsikko: "Suunnittele korjauksen kortti", missa: "Työsykli, askel 1 Suunnittele", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (havaintoissuen #N virheen korjaus), yksi Testi-rivi (numeron tilalle regressiotestin nimi) ja Lisäksi: Regressiotesti on jo kirjoitettu tiedostoon tests/test_regressio.py.", naet: "Copilot on kirjoittanut kortin. Kortin kohdassa Testi lukee test_regressio_ ja issuen numero, koska regressiotestillä ei ole omaa numeroa. Testi-rivin syöte ja tulos ovat regressiotestin kommenttirivillä. Kaista-rivin saa jättää ennalleen: Copilot valitsee kaistan. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Siirrä kortti issueksi ja rastita 3a", missa: "Työsykli, askel 2 Siirrä", tee: "Tee askeleen 2 ohjeet. Ohje: [[ohje:issue]]. Rastita issuessa myös kohta 3a, koska regressiotesti on jo kirjoitettu.", naet: "Kortin issue on GitHubissa, ja kohdat 1, 2 ja 3a on rastitettu. Kortti ei ole viikon ensimmäinen, joten et kirjoita kommenttia Sovittu viikkopalaverissa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { otsikko: "Korjaa virhe ja tee kortti loppuun", missa: "Työsykli, askeleet 3–6", tee: "Avaa työsykli työvaiheen painikkeesta ja tee askeleen 3 kohta 3b ja askeleet 4–6. Kirjoita askeleen 6 commit-viestiin myös rivi Closes #N, jossa N on havaintoissuen numero.", naet: "Työsykli aukesi askeleeseen 3, koska se muistaa askeleen, johon jäit. Nyt regressiotesti menee läpi, ja kortin issue ja havaintoissue on suljettu." },
            { otsikko: "Tee uusintatesti uudelleen", missa: "VS Code, terminaali ja Vektoripajan ikkuna", tee: "Käynnistä sovellus komennolla. Ohje: [[ohje:komento]]. Tee havaintoissuen Toistamisohje uudelleen, kirjoita tulos paperille ja sulje sovelluksen ikkuna.", naet: "Virhe ei enää toistu. Paperilla on uusintatestin uusi tulos. Kirjoitat tuloksen virheenkorjausketjun riville 5 työvaiheessa Dokumentoi virheen korjaus.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" }
          ],
          valmis: "Virhe on korjattu, regressiotesti menee läpi, ja korjauksen jälkeisen uusintatestin tulos on paperilla. Jos virhe ei toistunut, ohitit tämän työvaiheen.",
          tallenna: "Korjauscommit GitHubissa ja testin tulos kortin issueen. Uusintatestin tulos paperilla virheenkorjausketjua varten.",
          sanat: []
        },
        "4-6": {
          perii: ["4-4"],
          miksi: "Virheenkorjausketju näyttää koko korjauksen yhdessä kohdassa. [[tiedosto:ai-loki|AI-lokin]] merkintä kertoo, missä käytit tekoälyä työsyklin ulkopuolella.",
          osat: [
            { otsikko: "Avaa AI-loki", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]]. Ohje: [[ohje:avaa-tiedosto]]. Paina Ctrl+End ja sitten Enter.", naet: "Kursori on tiedoston lopussa tyhjällä rivillä." },
            { otsikko: "Kirjoita täydennyksen merkintä", missa: "Tiedosto [[tiedosto:ai-loki|ai-loki.md]], tiedoston loppu", tee: "Kopioi pohja ja liitä se näppäimillä Ctrl+V. Täytä pohja regressiotestin täydennyksestä: päivä, mihin pyysit apua, päätös, peruste ja issuen numero.", naet: "Tiedoston lopussa on merkintä, jonka otsikkorivillä ovat päivä, GitHub Copilot ja Täydennys-kaista. Jos korjasit virheen työsyklillä, sen kortin merkintä on jo tiedostossa, ja tämä on toinen merkintä.", koodi: "### pp.kk.vvvv · GitHub Copilot, Täydennys-kaista\n- Mihin pyysin apua: \n- Päätös: hyväksyn / korjautan / hylkään\n- Peruste: \n- Aineistoviite: issue #__, regressiotesti\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.", koodiOtsikko: "Lokimerkinnän pohja: kopioi tämä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:ai-loki|ai-loki.md]] muutokset ja tiedoston tests/test_regressio.py, jos et ollut vielä vienyt sitä GitHubiin.", koodi: "Lisää regressiotesti virheenkorjausketjuun 2", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Kopioi ketjun pohja issueen", missa: "Selain, GitHub, havaintoissuen kommenttikenttä", tee: "Avaa valitsemasi havaintoissue [[github:issues?q=is%3Aissue+label%3Ahavainto|repositoryn havaintoissueista]]. Kopioi pohja ja liitä se kommenttikenttään näppäimillä Ctrl+V.", naet: "Kommenttikentässä on otsikko Virheenkorjausketju ja kuusi numeroitua riviä.", koodi: "## Virheenkorjausketju\n1. Havainto: \n2. Toistamisohje: \n3. Syy omin sanoin: \n4. Korjauscommit: \n5. Uusintatesti: \n6. Regressiotesti: test_regressio_(tämän issuen numero) tiedostossa tests/test_regressio.py", koodiOtsikko: "Virheenkorjausketju: kopioi tämä" },
            { otsikko: "Kirjoita havainto, toistamisohje ja syy", missa: "Havaintoissuen kommenttikenttä, rivit 1–3", tee: "Kirjoita riveille 1 ja 2 issuen kohdat Mitä tapahtui ja Toistamisohje omin sanoin. Kirjoita riville 3, mikä koodissa meni väärin ja miksi.", naet: "Riveillä 1–3 on oma tekstisi. Rivistä 3 näkee, mikä meni väärin ja miksi. Syyn näet korjauscommitin muutoksista: avaa [[github:commits/main|päähaaran commit-listasta]] commit, jonka viestissä on rivi Closes # ja tämän havaintoissuen numero. Punaiset rivit ovat vanha koodi, ja vihreät rivit ovat korjaus." },
            { otsikko: "Kirjoita korjaus ja testit", missa: "Havaintoissuen kommenttikenttä, rivit 4–6", tee: "Kirjoita riville 4 korjauscommitin tunnus [[github:commits/main|päähaaran commit-listasta]]. Ohje: [[ohje:kopioi-osoite]]. Kirjoita riville 5 uusintatestin tulos paperiltasi ja riville 6 sulkeiden tilalle issuen numero.", naet: "Korjauscommit on commit, jonka viestissä on rivi Closes # ja tämän havaintoissuen numero. Kun avaat commitin listasta, näet viestin koko tekstin. Rivillä 4 on seitsemän merkin tunnus, esimerkiksi 4e1d2a7. Rivillä 5 on viimeisimmän uusintatestin tulos." },
            { otsikko: "Lähetä kommentti", missa: "Kommenttikentän alareuna", tee: "Valitse Comment.", naet: "Kommentti näkyy issuessa. Virheenkorjausketjun kuusi osaa ovat havaintoissuessa: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti." }
          ],
          valmis: "Havaintoissuessa on virheenkorjausketjun kuusi osaa, ja [[tiedosto:ai-loki|AI-lokissa]] on regressiotestin täydennyksen merkintä.",
          tallenna: "Ketju havaintoissueen kommenttina, merkintä tiedostossa [[tiedosto:ai-loki|ai-loki.md]] ja regressiotesti tiedostossa tests/test_regressio.py GitHubissa.",
          esimerkki: "Reseptikirjan ketju:\n## Virheenkorjausketju\n1. Havainto: Haku ei löydä reseptiä Kakku, kun hakusana on kakku.\n2. Toistamisohje: Lisää resepti Kakku. Kirjoita hakuun kakku. Tulos on tyhjä.\n3. Syy omin sanoin: Haku vertasi nimiä kirjainkoko huomioiden. Siksi pieni k ei vastannut isoa K:ta.\n4. Korjauscommit: 4e1d2a7\n5. Uusintatesti: Toistin ohjeen. Kakku löytyi.\n6. Regressiotesti: test_regressio_18 tiedostossa tests/test_regressio.py",
          eiRiita: "3. Syy omin sanoin: koodissa oli bugi.\nKirjauksesta ei näe, mikä meni väärin eikä miksi.",
          sanat: ["virheenkorjausketju"]
        }
      },
      lisatehtavat: [["Tee tärkeän jatkon toiminto, jos viikon kortti oli rästi.", "Tee tämä vasta, kun rästi on liitetty päähaaraan ja virheenkorjausketju 2 on kirjattu. Avaa työvaihe Toteuta sovittu parannus, valitse sen lopussa painike Käytä työsykliä tämän muutoksen tekemiseen ja valitse Aloita kierros. Tee kortti samoin kuin työvaiheessa Toteuta sovittu parannus. Testi on testi 24: testitapa, syöte, odotettu tulos ja rajapinta ovat paperillasi. Kirjoita testi uuteen tiedostoon <code>tests/test_jatko.py</code> ja testin tulos kortin issueen. Lisää askeleen 6 commit-viestiin rivi <code>Closes #M</code>, jossa M on toiminnon issuen numero viikolta 2. Jos kortin Tiedostot-kohdassa on vähintään kaksi tiedostoa, tee haara nimellä <code>viikko-4-jatko</code> ja liitä se päähaaraan pull requestilla samoin kuin työvaiheessa Liitä haara päähaaraan."]],
      sykli: true
    },
    5: {
      type: "feature",
      feature: "Sovelluksen säätimiä voi käyttää selkeämmin näppäimistöllä ja Lukijalla.",
      excerpt: "Työkalun pitää olla selkeä: iso tila piirtämiselle, isot painikkeet ja hyvä kontrasti.",
      connection: "Valmiista mallinnustoiminnoista on hyötyä vain, jos käyttäjä pystyy käyttämään niiden säätimiä. Tällä viikolla teet säätimistä isommat, parannat näppäimistökäyttöä ja kokeilet sovellusta Lukijalla. Mittaukset ennen muutoksia ja niiden jälkeen näyttävät, miten muutokset parantavat Vektoripajan käytettävyyttä.",
      deliverable: "FastPass-perusmittaus · testit 25–26 · isot säätimet ja näppäimistökäyttö · FastPass-jälkimittaus.",
      why: "Saavutettavuus on asiakkaan vaatimus. Ilman mittausta et voi näyttää, mikä parani.",
      done: "FastPassin tulokset ennen ja jälkeen on kirjattu tiedostoon [[tiedosto:saavutettavuus|saavutettavuus.md]]. Jälkimittauksessa ei ole uusia virheitä. Testit 25–26 menevät läpi näppäimistöllä ja Lukijalla, ja löydetyt puutteet on korjattu tai kirjattu issueiksi.",
      record: "FastPassin tulokset ennen ja jälkeen, testit 25–26, kortin issuen kommentti Sovittu viikkopalaverissa ja [[naytto|näyttömatriisin]] vaatimukset: testaa ohjelman toimintoja, [[naytto|tulkitsee suunnitelmia ja toteuttaa käyttöliittymän tai sen osia]] sekä sopii tehtävistä tiimin muiden jäsenten kanssa.",
      skills: ["Käyttöliittymä vaatimuksen mukaan", "Saavutettavuuden testaus", "Mittaaminen ennen ja jälkeen"],
      termit: ["ruudunlukija", "Accessibility Insights", "kahva"],
      tehtavat: {
        "5-5": {
          miksi: "Sovit julkaisutestaajan ja lisenssin ohjaajan kanssa viimeistään tällä viikolla, koska julkaisutesti tehdään viikolla 6. Et päätä niitä itse etkä tekoälyllä.",
          osat: [
            { otsikko: "Kysy julkaisutestaaja ja lisenssi palaverissa", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kysy ohjaajalta, kuka on julkaisutestaaja ja mikä lisenssi sovellukselle tulee. Kirjoita vastaukset ja palaverin päivä paperille.", naet: "Paperilla on julkaisutestaajan nimi ja rooli, esimerkiksi toinen opiskelija, sekä lisenssi tai tieto, ettei lisenssiä ole vielä päätetty. Palaverin päivän tarvitset myös työvaiheessa Paranna säätimien käyttöä. Tämä on myös viikkorutiinin palaveri, joten rastita palaveri myös viikkorutiinissa." },
            { otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### Julkaisutestaaja (viikko 5) ohjerivin jälkeen. Otsikko on osiossa ## C · Ohjaajan päätökset.", koodi: "### Julkaisutestaaja (viikko 5)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kirjoita julkaisutestaajan rooli", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Julkaisutestaaja (viikko 5)", tee: "Kirjoita kursorin kohdalle julkaisutestaajan rooli ja palaverin päivä.", naet: "Otsikon jälkeen on rooli ja päivä, esimerkiksi toinen opiskelija, sovittu 2.2.2027. Et kirjoita nimeä, koska repository on julkinen." },
            { otsikko: "Kirjoita lisenssi", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Lisenssi (ennen viikkoa 6)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen ohjaajan päättämä lisenssi ja päivä.", naet: "Otsikon jälkeen on lisenssi ja päivä. Kirjaat lisenssin vain tämän otsikon alle: et tee erillistä lisenssitiedostoa, ellei ohjaaja niin päätä. Jos ohjaaja ei ole vielä päättänyt lisenssiä, jätä kohta tyhjäksi: kysyt lisenssiä viestissä osatehtävässä 6.", koodi: "### Lisenssi (ennen viikkoa 6)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa julkaisutestaaja ja lisenssi", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Lähetä julkaisutestaajan nimi ohjaajalle", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Kopioi viesti, täydennä julkaisutestaajan nimi ja lähetä viesti ohjaajalle. Ohje: [[ohje:teams]]. Jos ohjaaja päätti lisenssin palaverissa, poista viestin viimeinen rivi ennen lähettämistä.", naet: "Viesti on lähetetty. Viikolla 6 löydät julkaisutestaajan nimen tästä viestistä. Jos kysyit lisenssiä, jatka odottaessasi työvaiheesta Asenna Accessibility Insights ja palaa osatehtävään 7, kun ohjaaja vastaa. Jos vastausta ei ole torstaina, lähetä samaan keskusteluun muistutus: [[pohja:muistutus-5]].", koodi: "Hei Matti,\nviikon 5 palaverissa sovittu julkaisutestaaja on: ___\nKirjoitin repositoryyn vain roolin.\nMikä lisenssi Vektoripajalle tulee? Kirjoitan sen suunnitelmaan ennen viikkoa 6.", koodiOtsikko: "Viesti ohjaajalle: kopioi tämä" },
            { otsikko: "Kirjoita lisenssi, kun ohjaaja vastaa", missa: "Vain jos kysyit lisenssiä viestissä: tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Lisenssi (ennen viikkoa 6)", tee: "Kun ohjaaja vastaa, avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen ohjaajan kertoma lisenssi ja vastauksen päivä.", naet: "Otsikon jälkeen on lisenssi ja päivä, esimerkiksi MIT, ohjaaja vastasi 3.2.2027. Jos ohjaaja päätti lisenssin jo palaverissa, rastita tämä ja seuraava osatehtävä.", koodi: "### Lisenssi (ennen viikkoa 6)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tee commit ja push", missa: "Vain jos kirjoitit lisenssin edellisessä osatehtävässä: VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa lisenssi", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Julkaisutestaajan rooli ja lisenssi ovat GitHubissa. Julkaisutestaajan nimi on ohjaajalla Teamsissa. Jos ohjaaja ei ole vastannut lisenssistä viikon loppuun mennessä, viikon kirjauksessa lukee, että lisenssi odottaa vastausta.",
          tallenna: "Julkaisutestaajan rooli ja lisenssi tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa. Julkaisutestaajan nimi ohjaajalle Teamsissa.",
          esimerkki: "Reseptikirjan ohjaajan päätökset:\n### Julkaisutestaaja (viikko 5)\n> Kirjoita vain rooli, esimerkiksi toinen opiskelija. Nimi lähetetään ohjaajalle Teamsissa.\ntoinen opiskelija, sovittu viikkopalaverissa 2.2.2027\n\n### Lisenssi (ennen viikkoa 6)\n> Ohjaajan päätös ja päivä.\nMIT, ohjaaja päätti 2.2.2027",
          eiRiita: "### Julkaisutestaaja (viikko 5)\nMikko Virtanen\nTestaajan nimi on julkisessa repositoryssa, ja päivä puuttuu.",
          sanat: []
        },
        "5-7": {
          perii: ["5-1"],
          miksi: "Teet perusmittauksen Accessibility Insights for Windows -ohjelmalla. Asennat ohjelman kerran ennen mittausta.",
          osat: [
            { otsikko: "Tarkista, onko ohjelma jo asennettu", missa: "Windowsin Käynnistä-valikko", tee: "Avaa Käynnistä-valikko ja kirjoita Accessibility Insights.", naet: "Jos listassa näkyy Accessibility Insights for Windows, ohjelma on jo asennettu: rastita tämän työvaiheen kaikki osatehtävät. Jos listassa ei näy ohjelmaa, jatka seuraavasta osatehtävästä." },
            { otsikko: "Lataa asennustiedosto", missa: "Selain", tee: "Avaa [Accessibility Insightsin lataussivu](https://accessibilityinsights.io/downloads/). Valitse Windows-kohdasta Download for Windows.", naet: "Selain lataa tiedoston AccessibilityInsights.msi Lataukset-kansioon. Tiedoston nimi näkyy selaimen latauslistassa." },
            { otsikko: "Asenna ohjelma", missa: "Resurssienhallinta, Lataukset-kansio ja asennusikkuna", tee: "Kaksoisnapsauta Lataukset-kansiossa tiedostoa AccessibilityInsights.msi. Valitse asennusikkunassa Next, kunnes painikkeessa lukee Install, ja valitse sitten Install ja lopuksi Finish.", naet: "Työpöydällä on Accessibility Insights for Windows -kuvake, ja ohjelma on Käynnistä-valikossa. Jos Next ei ole valittavissa, rastita ensin ruutu, jossa lukee I accept the terms in the License Agreement. Jos Windows kysyy, saako sovellus tehdä muutoksia laitteeseen, valitse Kyllä. Jos Windows pyytää ylläpitäjän tunnusta ja salasanaa, älä jatka, vaan lähetä ohjaajalle viesti. Ohje: [[ohje:teams]]." }
          ],
          valmis: "Accessibility Insights for Windows on asennettu, ja se löytyy Käynnistä-valikosta.",
          tallenna: "Ei tallennettavaa: ohjelma on asennettu omalle koneellesi.",
          sanat: ["Accessibility Insights"]
        },
        "5-1": {
          versio: "2026-10-05",
          miksi: "Perusmittaus näyttää, mitä käyttöliittymässä pitää parantaa. FastPass on Accessibility Insightsin pikatarkistus. Sen automaattinen tarkistus on tämän viikon perusmittaus.",
          osat: [
            { vanha: 0, otsikko: "Käynnistä sovellus", missa: "VS Code, terminaali. Ohje: [[ohje:terminaali]]", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Vektoripajan ikkuna aukeaa. Pidä ikkuna auki mittauksen ajan.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Avaa Accessibility Insights", missa: "Windowsin Käynnistä-valikko ja Accessibility Insightsin ikkuna", tee: "Käynnistä Accessibility Insights for Windows Käynnistä-valikosta. Valitse kohdasta What to select vaihtoehto Entire app. Kohta on ikkunan yläreunan komentopalkissa eli painikerivissä.", naet: "Kohdassa What to select lukee Entire app: tarkistus koskee koko Vektoripajan ikkunaa. FastPassia ei tarvitse etsiä valikosta, koska näppäimet Shift+F8 käynnistävät sen seuraavassa osatehtävässä. Tämä osatehtävä ja seuraava osatehtävä ovat [[kuvaohje:accessibility-insights-fastpass|kuvaohjeen]] kohdat 1 ja 2. Jos ikkunassa ei näy kohtaa What to select, lähetä ohjaajalle kuva ikkunasta. Ohje: [[ohje:teams]], kohta Jos lähetät kuvan." },
            { vanha: 1, otsikko: "Aja FastPassin automaattinen tarkistus", missa: "Vektoripajan ikkuna", tee: "Pidä Alt-näppäin pohjassa ja paina Tab, kunnes Vektoripaja on valittuna. Päästä Alt irti ja paina Shift+F8.", naet: "Accessibility Insights tulee eteen. Vasemmalla lukee FastPass ja sen alapuolella Automated Checks ja Tab Stops. Kohdassa AUTOMATED CHECKS lukee virheiden määrä, esimerkiksi 12 failures were detected, ja sen jälkeen on lista havainnoista. [[kuvaohje:accessibility-insights-fastpass|Kuvaohjeen]] kohtaa 4 Tab Stops et tee nyt, koska tarkistat Tab-järjestyksen testissä 25." },
            { vanha: 1, otsikko: "Avaa saavutettavuusmittaus", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:saavutettavuus|project-docs/saavutettavuus.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on otsikon ## Ennen muutoksia (viikko 5) ohjerivin jälkeen. Ohjerivin alapuolella ovat valmiit rivit - Päivä:, - Versio tai commit:, - Virheitä: ja - Kolme ensimmäistä havaintoa: sekä numeroidut rivit 1., 2. ja 3.", koodi: "## Ennen muutoksia (viikko 5)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Kirjoita päivä ja commitin tunnus", missa: "Tiedosto [[tiedosto:saavutettavuus|saavutettavuus.md]], otsikon ## Ennen muutoksia (viikko 5) rivit", tee: "Siirry nuolinäppäimillä rivin - Päivä: loppuun ja kirjoita tämän päivän päivämäärä. Liitä rivin - Versio tai commit: loppuun ylimmän commitin tunnus. Ohje: [[ohje:kopioi-osoite]], kohta Commitin tunnus.", naet: "Rivillä Päivä on päivämäärä, esimerkiksi 1.2.2027. Rivillä Versio tai commit on tunnus, esimerkiksi 4e1d2a7. Jos kopiointipainike antoi 40 merkin tunnuksen, se kelpaa sellaisenaan." },
            { vanha: 1, otsikko: "Kirjoita virheet ja kolme havaintoa", missa: "Sama otsikko, rivi - Virheitä: ja rivit 1.–3.", tee: "Kirjoita rivin - Virheitä: loppuun luku kohdasta AUTOMATED CHECKS. Kirjoita rivien 1., 2. ja 3. perään FastPassin listan kolme ensimmäistä sääntöriviä englanniksi ja jokaisen perään lyhyt suomennos.", naet: "Yksi havainto on yksi listan sääntörivi. Jos rivin alle avautuu säätimiä, et kirjoita niitä erikseen. Yleisimpien rivien suomennokset ovat Kopioi-laatikossa. Jos riviä ei ole laatikossa, kirjoita suomennokseksi omin sanoin, mitä säätimeltä puuttuu, tai sanat en osaa suomentaa. Jos listassa on alle kolme riviä, loput numerot jäävät tyhjiksi. Jos virheitä on 0, rivillä 1 lukee Ei havaintoja.", koodi: "The Name property of a focusable element must not be null. = säätimeltä puuttuu nimi\nThe Name property of a focusable element must not be an empty string. = säätimen nimi on tyhjä\nThe Name property must not include the element's control type. = nimessä on säätimen tyyppi, esimerkiksi button\nFocusable sibling elements must not have the same Name and LocalizedControlType. = kahdella vierekkäisellä säätimellä on sama nimi\nThe IsKeyboardFocusable property for the given element should be true based on its ControlType. = säätimeen ei pääse näppäimistöllä", koodiOtsikko: "Suomennokset: yleisimmät FastPassin rivit" },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:saavutettavuus|saavutettavuus.md]] muutokset.", koodi: "Kirjaa saavutettavuuden perusmittaus", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "FastPassin tulokset ennen muutoksia ovat tiedostossa [[tiedosto:saavutettavuus|saavutettavuus.md]] GitHubissa.",
          tallenna: "Perusmittaus tiedostossa [[tiedosto:saavutettavuus|saavutettavuus.md]] GitHubissa. Havainnot kortin issueen, kun teet säätimet työsyklillä.",
          esimerkki: "Reseptikirjan perusmittaus:\n## Ennen muutoksia (viikko 5)\n- Päivä: 1.2.2027\n- Versio tai commit: 4e1d2a7\n- Virheitä: 5\n- Kolme ensimmäistä havaintoa:\n  1. The Name property of a focusable element must not be null. = hakupainikkeelta puuttuu nimi\n  2. The Name property must not include the element's control type. = nimessä on sana button\n  3. Focusable sibling elements must not have the same Name and LocalizedControlType. = kahdella painikkeella on sama nimi",
          eiRiita: "## Ennen muutoksia (viikko 5)\n- Virheitä: paljon\nLuku ja havainnot puuttuvat, joten jälkimittausta ei voi verrata mihinkään.",
          sanat: ["Accessibility Insights"]
        },
        "5-2": {
          versio: "2026-10-05",
          miksi: "Muutat käyttöliittymän tavoitteen toistettaviksi kokeiluiksi. Ensin tarkistat, mitä viikon 41 käyttöliittymävaatimuksesta vielä puuttuu.",
          osat: [
            { vanha: 0, otsikko: "Avaa suunnitelma", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on otsikon ### Käyttöliittymävaatimus (viikko 41) ohjerivin jälkeen. Ohjerivin alapuolella ovat viikolla 41 kirjoittamasi neljä riviä.", koodi: "### Käyttöliittymävaatimus (viikko 41)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Lue käyttöliittymävaatimus", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Käyttöliittymävaatimus (viikko 41)", tee: "Lue neljä arvoa: taustaväri, tekstin väri, tekstin koko ja painikkeiden koko. Kirjoita ne paperille.", naet: "Paperilla on neljä arvoa, esimerkiksi Painikkeiden koko: vähintään 48 × 48 px." },
            { otsikko: "Avaa sovelluksen teema", missa: "VS Code, Explorer, kansio vektoripaja", tee: "Avaa tiedosto vektoripaja/teema.qss. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Siinä ovat kohdat QWidget ja QPushButton. Tiedosto teema.qss määrää sovelluksen värit ja koot." },
            { vanha: 0, otsikko: "Vertaa värejä ja tekstin kokoa", missa: "Tiedosto vektoripaja/teema.qss, kohta QWidget, ja paperi", tee: "Etsi QWidget-kohdasta rivit background-color (taustaväri), color (tekstin väri) ja font-size (tekstin koko). Kirjoita paperille jokaisen vaatimuksen perään teeman arvo ja sana täyttyy tai puuttuu.", naet: "Väri täyttyy, kun teeman väri on sama kuin vaatimuksessa: esimerkiksi #000000 ja black tarkoittavat molemmat mustaa. Tekstin koko täyttyy, kun teeman luku on vähintään vaatimuksen luku samalla yksiköllä. Jos et ole varma, onko väri sama, tai jos yksiköt ovat eri, esimerkiksi pt ja px, merkitse puuttuu. Jos teemassa ei ole riviä, arvo puuttuu." },
            { vanha: 0, otsikko: "Vertaa painikkeiden kokoa", missa: "Tiedosto vektoripaja/teema.qss, kohta QPushButton, ja paperi", tee: "Etsi QPushButton-kohdasta rivit min-height (korkeus) ja min-width (leveys). Kirjoita paperille painikkeiden koon perään teeman arvot ja sana täyttyy tai puuttuu.", naet: "Jos vaatimuksessa on yksi luku, vertaat sitä korkeuteen min-height. Jos lukuja on kaksi, esimerkiksi 48 × 48 px, vertaat ensimmäistä leveyteen min-width ja toista korkeuteen min-height. Koko täyttyy, kun teeman luku on vähintään vaatimuksen luku. Jos teemassa ei ole riviä, sen rivin koko puuttuu." },
            { vanha: 0, otsikko: "Kirjoita, mitä vaatimuksesta puuttuu", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Käyttöliittymävaatimuksen tarkistus (viikko 5)", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita ohjerivin jälkeen jokainen paperin puuttuva arvo listan kohdaksi: rivin alkuun - ja välilyönti ([[ohje:markdown]]).", naet: "Otsikon jälkeen on lista, esimerkiksi - Painikkeiden koko: vaatimus 48 px, teemassa 40 px. Jos kaikki arvot täyttyivät, listassa on yksi kohta - Ei puutteita. Paperin puuttuvat arvot tarvitset työvaiheessa Paranna säätimien käyttöä.", koodi: "### Käyttöliittymävaatimuksen tarkistus (viikko 5)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa käyttöliittymävaatimuksen tarkistus", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Käyttöliittymävaatimuksen tarkistus on GitHubissa.",
          tallenna: "Tarkistus tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan tarkistus:\n### Käyttöliittymävaatimuksen tarkistus (viikko 5)\n> Mitä viikon 41 käyttöliittymävaatimuksesta vielä puuttuu?\n- Painikkeiden koko puuttuu: vaatimus on 40 pikseliä, mutta hakupainike on 24 pikseliä.",
          eiRiita: "- Jotain puuttuu.\nRiviltä ei näe, mikä arvo puuttuu eikä paljonko.",
          sanat: []
        },
        "5-6": {
          perii: ["5-2"],
          miksi: "Teet testit 25 ja 26 käsin sovelluksessa. Päätät niiden odotetut tulokset ja kokoat kortin lähtötiedot paperille, ennen kuin muutat koodia.",
          osat: [
            { otsikko: "Listaa sovelluksen painikkeet", missa: "VS Code, terminaali ja Vektoripajan ikkuna", tee: "Käynnistä sovellus. Ohje: [[ohje:komento]]. Kirjoita paperille jokainen painike järjestyksessä ylhäältä alas ja vasemmalta oikealle.", naet: "Paperilla on lista painikkeista. Listaan kuuluvat vain painikkeet: transformipaneelin numerokentät eivät kuulu siihen, koska testaat ne testissä 25. Jos painikkeessa on vain kuvake, vie hiiri sen päälle ja lue vihjeteksti. Jos vihjettä ei tule, kokeile painiketta ja kirjoita, mitä tapahtui. Voit pitää ikkunan auki seuraavissa osatehtävissä.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Päätä testin 25 odotettu tulos", missa: "Paperi ja Vektoripajan ikkuna", tee: "Kirjoita paperille testin 25 vaiheet: tuo testiaineisto/oma-piirros.svg, tee revolve, siirrä osaa transformipaneelissa ja vie .obj. Kirjoita jokaisen perään näppäimet ja näkyvä tulos. Tab vie seuraavaan säätimeen, Shift+Tab edelliseen, ja välilyönti painaa painiketta.", naet: "Paperilla on testin 25 odotettu tulos: neljä vaihetta näppäimineen, esimerkiksi 1. Tab Avaa-painikkeeseen ja välilyönti: tiedostoikkuna aukeaa. Käytä painikkeiden nimiä paperin listalta. Teet testin 25 kokonaan ilman hiirtä. Revolve eli pyörähdyskappale tehdään profiilista." },
            { otsikko: "Päätä testin 26 odotettu tulos", missa: "Paperi tai muistiinpanot", tee: "Testi 26 tarkistaa painikkeiden nimet Lukijalla. Kirjoita listan jokaisen painikkeen perään nimi, jonka Lukijan pitää sanoa, samalla kielellä kuin painikkeiden tekstit.", naet: "Paperilla on testin 26 odotettu tulos: jokaisen painikkeen nimi. Kuvakepainikkeen nimi kertoo, mitä painike tekee, esimerkiksi View lock. Lukija on Windowsin ruudunlukija." },
            { otsikko: "Kirjoita perusmittauksen havainnot paperille", missa: "VS Code, tiedosto [[tiedosto:saavutettavuus|saavutettavuus.md]]", tee: "Avaa tiedosto [[tiedosto:saavutettavuus|project-docs/saavutettavuus.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita paperille otsikon jälkeiset rivit 1., 2. ja 3.", naet: "Paperilla ovat perusmittauksen kolme havaintoa. Kirjoitat ne kortin Lisäksi-riville seuraavassa työvaiheessa.", koodi: "## Ennen muutoksia (viikko 5)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tarkista, kuuluvatko isot kahvat korttiin", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]]", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Jos otsikon jälkeisessä listassa on isot kahvat, kirjoita paperille kahvat mukaan.", naet: "Tiedät, kuuluvatko isot kahvat tämän viikon korttiin. Kahva on tartuntakohta 3D-näkymässä. Jos listassa ei ole isoja kahvoja, et kirjoita paperille mitään.", koodi: "### Tärkeän jatkon järjestys (viikko 2)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" }
          ],
          valmis: "Testien 25 ja 26 odotetut tulokset, perusmittauksen kolme havaintoa ja tieto isoista kahvoista ovat paperilla.",
          tallenna: "Testien 25 ja 26 odotetut tulokset kortin issueen seuraavassa työvaiheessa.",
          esimerkki: "Reseptikirjan testit:\nTesti 25: 1. Tab vie hakukenttään. Kirjoitan kakku ja painan Enter, ja tulokset näkyvät. 2. Tab vie Lisää resepti -painikkeeseen, ja välilyönti avaa lomakkeen. Jokaisessa kohdassa näkyy fokuskehys.\nTesti 26: Lukija sanoo hakupainikkeen kohdalla Hae ja lisäyspainikkeen kohdalla Lisää resepti.",
          eiRiita: "\"Testi 25: näppäimistö toimii.\" Tekstistä ei näe, mitä painikkeita testataan eikä mitä pitää tapahtua.",
          sanat: ["ruudunlukija", "revolve", "kahva"]
        },
        "5-3": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Selkeät säätimet auttavat käyttäjää käyttämään mallinnustoimintoja.",
          osat: [
            { vanha: 1, otsikko: "Poimi kortin hyväksymiskriteerit", missa: "Tämän työvaiheen loppu: kohta Saavutettavuus Qt:ssa (avaa, jos tarvitset apua)", tee: "Avaa kohta ja lue sen tarkistuslista. Kirjoita paperille listan neljä viimeistä kohtaa: ne ovat kortin hyväksymiskriteerit.", naet: "Paperilla ovat kriteerit: kaikki toiminnot näppäimistöllä (testi 25), jokaisella painikkeella nimi (testi 26), Tab-järjestys looginen ja säätimet isot teemassa. Listan ensimmäisen kohdan, FastPass ennen ja jälkeen, teet työvaiheissa Mittaa saavutettavuus ja Tarkista muutosten vaikutus, joten se ei ole kortin kriteeri. Jos paperilla lukee kahvat mukaan, kirjoita viidenneksi kriteeriksi isot kahvat." },
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele kortti", missa: "Työsykli, askel 1 Suunnittele, ja Copilot selaimessa", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (Tämä kortti tekee vain isommat säätimet, painikkeiden nimet ja Tab-järjestyksen), Testi-rivit testeille 25 ja 26 paperilta ja Lisäksi-rivi paperilta.", naet: "Testin 25 syöte on koko polku näppäimistöllä ja testin 26 syöte Tab painikkeesta toiseen Lukija päällä. Lisäksi-rivillä ovat paperin hyväksymiskriteerit, perusmittauksen kolme havaintoa, käyttöliittymävaatimuksen puuttuvat arvot lukuineen ja lause Testit 25 ja 26 tehdään käsin. Jos paperilla lukee kahvat mukaan, ehdotuksen lopussa on myös sanat ja isot kahvat. Rajapinta-rivi on ennallaan, koska kortti ei ole funktion kortti. Copilotin kortissa on kuusi otsikkoa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti issueksi", missa: "Työsykli, askel 2 Siirrä, ja GitHub", tee: "Avaa työsykli työvaiheen painikkeesta: se aukeaa askeleeseen 2. Tee askeleen 2 ohjeet ja kirjoita issuen numero paperille. Ohje: [[ohje:issue]].", naet: "Kortin issue on GitHubissa, ja sen numero on paperilla. Hyväksymiskriteereissä ovat paperin kriteerit, ja issuessa ovat testien 25 ja 26 odotetut tulokset. Tämä on viikon ensimmäinen kortti, joten issuessa on myös askeleen 2 kommentti Sovittu viikkopalaverissa pp.kk.: ___. Kohdan pp.kk. tilalla on palaverin päivä paperilta. Kohdan ___ tilalla on lause siitä, mitä palaverissa sovittiin tästä kortista, esimerkiksi teen isommat säätimet ja näppäimistökäytön tällä viikolla. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Rakenna säätimet", missa: "Työsykli, askel 3 Rakenna", tee: "Avaa työsykli työvaiheen painikkeesta. Tee askeleen 3 ohjeet: teet testit 25 ja 26 käsin, joten kirjoita niiden odotetut tulokset paperilta issueen yhdeksi kommentiksi, rastita 3a ja aloita kohdasta 3b.", naet: "Työsykli aukesi askeleeseen 3. Issuessa on kommentti, jossa testien 25 ja 26 odotetut tulokset ovat samoin sanoin kuin kortin kohdassa ## Testi. Et muuta kortin kohtaa ## Testi. Sovellus käynnistyy komennolla python main.py, ja painikkeet ja transformipaneelin kentät ovat isommat. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 1, otsikko: "Tee testi 25 näppäimistöllä", missa: "VS Code, terminaali ja Vektoripajan ikkuna", tee: "Käynnistä sovellus. Ohje: [[ohje:komento]]. Tee hiirtä käyttämättä paperin neljä vaihetta ja kirjoita jokaisen perään paperille onnistui tai kohta, jossa jäit jumiin.", naet: "Paperilla on testin 25 havaittu tulos. Testi 25 on myös toteutusavun tarkistustesti. Jos vaihe ei onnistu, toimi kuten työsyklin askeleen 4 kohdassa Testi ei mennyt läpi?: korjaa toteutus kohdassa 3b ja tee testi uudelleen. Jos sama vaihe epäonnistuu toisen kerran, kirjoita paperille ei läpi ja luo havaintoissue. Ohje: [[ohje:havaintoissue]].", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Tee testi 26 Lukijalla", missa: "Vektoripajan ikkuna ja Lukija", tee: "Käynnistä Lukija näppäimillä Ctrl + Windows-näppäin + Enter. Siirry Tab-näppäimellä painikkeesta toiseen ja kirjoita jokaisen kohdalle paperille, mitä Lukija sanoo.", naet: "Paperilla on testin 26 havaittu tulos: jokaisen painikkeen kohdalla nimi, jonka Lukija sanoi. Lukija sammuu samoilla näppäimillä. Jos Lukija sanoo väärän nimen, toimi kuten testissä 25: korjaa toteutus kohdassa 3b, ja luo havaintoissue, jos testi epäonnistuu toisen kerran." },
            { vanha: 0, otsikko: "Raportoi ja kirjaa kortti", missa: "Työsykli, askeleet 4 Tarkista, 5 Raportoi ja 6 Kirjaa", tee: "Avaa työsykli työvaiheen painikkeesta: se aukeaa askeleeseen 4. Tee askeleiden 4–6 ohjeet ja kirjaa askeleessa 4 testit 25 ja 26 paperin tuloksilla omiksi kommenteikseen, mutta älä tee testejä uudelleen.", naet: "Tulos-rivillä on läpi, jos paperilla on onnistui jokaisessa vaiheessa. Muuten Tulos-rivillä on ei läpi. Kortin issue on suljettu rivillä Closes #N, jossa N on issuen numero. Et tee Copilotin ehdottamaa seuraavaa korttia. Jatka työvaiheeseen Tarkista muutosten vaikutus." }
          ],
          valmis: "Sovitut säätimet ja näppäimistökäyttö on toteutettu. Testien 25 ja 26 tulokset ovat kortin issuessa.",
          tallenna: "Koodi GitHubiin ja testien 25 ja 26 tulokset kortin issueen.",
          apu: {
            otsikko: "Saavutettavuus Qt:ssa",
            tree: "Ikkuna\n├─ painikkeet            nimi Lukijalle: setAccessibleName\n├─ transformipaneeli     kentät Tab-järjestyksessä: setTabOrder\n├─ view lock             tila näkyy: setCheckable(True)\n└─ vektoripaja/teema.qss isommat säätimet ja fontti",
            actions: [
              "Anna jokaiselle kuvakepainikkeelle nimi: `painike.setAccessibleName(\"View lock\")`. Lukija lukee tämän nimen.",
              "Aseta Tab-järjestys: `QWidget.setTabOrder(kentta_x, kentta_y)`. Tab-näppäimen pitää kulkea kentästä toiseen samassa järjestyksessä kuin paneeli luetaan.",
              "Suurenna säätimet teemassa. Lisää tiedostoon `vektoripaja/teema.qss` esimerkiksi `QPushButton, QDoubleSpinBox { min-height: 40px; font-size: 16px; }`.",
              "Jos painikkeella on kaksi tilaa, päällä ja pois, tee siitä valintapainike: `painike.setCheckable(True)`. Silloin Lukija kertoo myös tilan.",
              "Accessibility Insights tarkistaa Qt:n säätimet, mutta ei 3D-näkymän sisältöä. Siksi näppäimistötesti ja Lukija ovat yhtä tärkeitä kuin FastPass."
            ],
            code: "SAAVUTETTAVUUDEN TARKISTUSLISTA\n[ ] FastPass ennen ja jälkeen kirjattu\n[ ] kaikki toiminnot näppäimistöllä (testi 25)\n[ ] jokaisella painikkeella nimi (testi 26)\n[ ] Tab-järjestys looginen\n[ ] säätimet isot teemassa",
            test: "Laita hiiri sivuun. Tee koko polku pelkällä näppäimistöllä: tuo SVG, tee revolve, siirrä osaa transformipaneelissa ja vie .obj.",
            links: [
              ["Accessibility Insights for Windows", "https://accessibilityinsights.io/docs/windows/overview/"],
              ["Qt for Python: QWidget", "https://doc.qt.io/qtforpython-6/PySide6/QtWidgets/QWidget.html"]
            ]
          },
          sanat: ["kahva"]
        },
        "5-4": {
          versio: "2026-10-05",
          miksi: "Jälkimittaus näyttää parannuksen vaikutuksen.",
          osat: [
            { vanha: 0, otsikko: "Käynnistä sovellus", missa: "VS Code, terminaali. Ohje: [[ohje:terminaali]]", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Vektoripajan ikkuna aukeaa uusine säätimineen.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Aja FastPass uudelleen", missa: "Accessibility Insights for Windows ja Vektoripajan ikkuna", tee: "Käynnistä Accessibility Insights for Windows ja tarkista, että kohdassa What to select lukee Entire app. Siirry Vektoripajaan näppäimillä Alt+Tab ja paina Shift+F8.", naet: "Kohdassa AUTOMATED CHECKS lukee virheiden määrä muutosten jälkeen, ja sen jälkeen on lista havainnoista. Vaiheet ovat samat kuin perusmittauksessa: [[kuvaohje:accessibility-insights-fastpass|Katso kuvaohje]]." },
            { vanha: 1, otsikko: "Avaa saavutettavuusmittaus", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:saavutettavuus|project-docs/saavutettavuus.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on otsikon ## Jälkeen (viikko 5) ohjerivin jälkeen. Ohjerivin alapuolella ovat valmiit rivit - Päivä:, - Versio tai commit:, - Virheitä:, - Mikä parani: ja - Mikä jäi (issue-numero):.", koodi: "## Jälkeen (viikko 5)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Kirjoita jälkimittaus", missa: "Tiedosto [[tiedosto:saavutettavuus|saavutettavuus.md]], otsikon ## Jälkeen (viikko 5) rivit", tee: "Täytä rivit Päivä, Versio tai commit ja Virheitä samalla tavalla kuin perusmittauksessa. Ohje: [[ohje:kopioi-osoite]], kohta Commitin tunnus. Kirjoita riville Mikä parani, mikä muuttui verrattuna perusmittaukseen.", naet: "Riveillä ovat päivä, commitin tunnus, virheiden määrä ja se, mikä parani. Täytät rivin Mikä jäi osatehtävässä 7. Vertaa vain virheiden määrää: jos luku on suurempi kuin perusmittauksessa, muutos toi uuden virheen, ja teet osatehtävät 5 ja 6. Muuten rastita osatehtävät 5 ja 6." },
            { otsikko: "Korjaa uusi virhe uudella kortilla", missa: "Vain jos virheitä on enemmän kuin perusmittauksessa: työvaihe Paranna säätimien käyttöä ja työsykli", tee: "Valitse työvaiheen Paranna säätimien käyttöä lopusta painike Käytä työsykliä tämän muutoksen tekemiseen ja sitten Aloita kierros. Tee askeleet 1–6: ehdotus on Tämä kortti tekee vain korjauksen FastPassin uuteen havaintoon, ja Lisäksi-rivillä on havainnon rivi.", naet: "Uuden kortin issue on suljettu. Askeleen 1 Testi-rivillä numeron tilalla on käsin, syöte on FastPass-ajo ja tulos on, ettei havaintoa enää näy. Uusi kortti ei ole viikon ensimmäinen, joten et kirjoita askeleen 2 kommenttia Sovittu viikkopalaverissa. Palaa lopuksi tähän työvaiheeseen." },
            { otsikko: "Mittaa uudelleen korjauksen jälkeen", missa: "Vain jos teit edellisen osatehtävän: Accessibility Insights ja tiedosto [[tiedosto:saavutettavuus|saavutettavuus.md]]", tee: "Aja FastPass uudelleen kuten osatehtävässä 2. Vaihda rivin Virheitä luku uuden ajon lukuun ja täydennä rivi Mikä parani.", naet: "Rivillä Virheitä on uusin luku, ja se on enintään perusmittauksen luku. Jos et tehnyt edellistä osatehtävää, rastita tämä osatehtävä." },
            { vanha: 1, otsikko: "Kirjaa jäljelle jääneet puutteet issueiksi", missa: "Selain, GitHub ja tiedosto [[tiedosto:saavutettavuus|saavutettavuus.md]]", tee: "Tee jokaisesta korjaamatta jääneestä puutteesta havaintoissue. Ohje: [[ohje:havaintoissue]]. Kirjoita issueiden numerot riville Mikä jäi tai, jos korjasit kaiken, sanat Ei mitään.", naet: "Jokaisella korjaamatta jääneellä puutteella on havaintoissue, ja sen numero on rivillä Mikä jäi. Puute on FastPassin jäljelle jäänyt havainto tai testin 25 tai 26 kohta, joka ei mennyt läpi. Jos puutteesta on jo havaintoissue, koska testi epäonnistui kahdesti, kirjoita sen numero äläkä tee uutta." },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:saavutettavuus|saavutettavuus.md]] muutokset.", koodi: "Kirjaa saavutettavuuden jälkimittaus", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Jälkimittaus ja vertailu ovat GitHubissa. Jälkimittauksessa ei ole uusia virheitä, ja jokainen jäljelle jäänyt puute on kirjattu issueksi.",
          tallenna: "Jälkimittaus ja vertailu tiedostossa [[tiedosto:saavutettavuus|saavutettavuus.md]] GitHubissa. Jäljelle jääneet puutteet issueihin.",
          esimerkki: "Reseptikirjan jälkimittaus:\n## Jälkeen (viikko 5)\n- Päivä: 4.2.2027\n- Versio tai commit: 9c3e5f1\n- Virheitä: 0 (ennen 7)\n- Mikä parani: Kahdelta painikkeelta puuttui nimi, ja Lukija sanoi niistä vain sanan painike. Nyt Lukija sanoo Hae ja Lisää resepti.\n- Mikä jäi (issue-numero): Lukija ei kerro, kun suosikkivalinnan tila vaihtuu, issue #31.",
          eiRiita: "\"Saavutettavuus parani.\" Kirjauksesta puuttuvat luvut ja se, mikä muuttui.",
          sanat: []
        }
      },
      pohjat: [
        { tunnus: "muistutus-5", otsikko: "Muistutus ohjaajalle: lisenssi (Teams)", teksti: "Hei Matti,\nmuistutan viestistäni pp.kk.: mikä lisenssi Vektoripajalle tulee?\nTarvitsen sen ennen viikkoa 6." }
      ],
      kuvaohjeet: ["accessibility-insights-fastpass"],
      sykli: true
    },
    6: {
      type: "julkaisu",
      feature: "Toinen käyttäjä pystyy kulkemaan ohjeen avulla latauksesta omaan malliin ja vientiin.",
      excerpt: "Valmis tarkoittaa meille tätä: työkalun voi ladata GitHubista ja käynnistää Windows-koneella ilman Pythonia, oma piirroksemme muuttuu malliksi, .obj aukeaa toisessa ohjelmassa, ja mukana on ohje, jolla joku muu saa työkalun käyttöön kysymättä meiltä.",
      connection: "Vektoripajan pitää toimia myös ihmiselle, joka ei tunne sen kehitystä tai jolla ei ole Python-kehitysympäristöä. Tällä viikolla julkaisutestaaja kulkee ohjeen avulla koko polun latauksesta omaan piirrokseen ja .obj-vientiin. Julkaisuehdokkaan kokeilu paljastaa viimeiset esteet sovelluksessa ja käyttöohjeessa ennen v1.0:aa.",
      deliverable: "Tagi v1.0-rc1 · README ja käyttöohje · julkaisutestin epäröintilista.",
      why: "Jos ohje toimii vain sinulle, asiakas ei saa työkalua käyttöön. Jokainen epäröinti on yksi kohta ohjeen korjauslistassa.",
      done: "Julkaisutestaajan .obj-tiedosto aukeaa, ja epäröinnit on listattu tiedostoon [[tiedosto:julkaisutesti|julkaisutesti.md]]. Testaajan nimi ja sanatarkat lausumat on lähetetty ohjaajalle Teamsissa. Repositoryyn on kirjattu vain rooli.",
      record: "Julkaisutestin tärkein epäröintikohta roolilla kirjattuna, ohjeeseen tehty korjaus, tagi v1.0-rc1, issuen kommentti Sovittu viikkopalaverissa ja näyttömatriisin vaatimukset: dokumentoi ohjelmiston sovitulla tavalla, viestii tekniset asiat asiakaslähtöisesti, julkaisee ohjelman tuotantoympäristöön, käyttää versionhallintaa ja sopii tehtävistä tiimin muiden jäsenten kanssa.",
      skills: ["Dokumentointi sovitulla tavalla", "Julkaisuehdokas", "Asiakaslähtöinen viestintä"],
      termit: ["RC", "sisältöjäädytys"],
      tehtavat: {
        "6-1": {
          versio: "2026-10-05",
          miksi: "Julkaisuehdokas eli RC on versio, joka testataan ennen v1.0:aa. Julkaisuehdokkaassa keskityt toimivuuteen ja ohjeeseen.",
          osat: [
            { vanha: 0, otsikko: "Sovi testiaika ja kone", missa: "Teams, keskustelu julkaisutestaajan kanssa, maanantaina", tee: "Kopioi viesti ja täydennä aika: ehdota keskiviikkoa 10.2.2027 tai myöhempää tämän viikon päivää, koska release v1.0-rc1 ja README ovat silloin valmiit. Lähetä viesti julkaisutestaajalle. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Testaajan nimi on viestissä, jonka lähetit ohjaajalle [[vk 5|viikolla 5]]. Jatka odottaessasi seuraavista osatehtävistä: kirjoitat testaajan vastauksen osatehtävässä 7. Jos vastausta ei ole seuraavana työpäivänä, lähetä samaan keskusteluun muistutus: [[pohja:muistutus-6]].", koodi: "Hei,\nvoitko kokeilla Vektoripajan julkaisua ohjeen avulla?\nEhdotan aikaa: ___\nTarvitsen Windows-koneen, jossa on Inkscape mutta ei Pythonia.\nOnko koneellasi Inkscape? Onko koneellasi Python asennettuna?", koodiOtsikko: "Viesti julkaisutestaajalle: kopioi tämä" },
            { otsikko: "Kirjoita palaverin sopimus paperille", missa: "Viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kysy palaverissa, onko julkaisutestissä jotain, mitä pitää sopia. Kirjoita paperille palaverin päivä ja yhdellä lauseella, mitä sovittiin.", naet: "Paperilla on päivä ja sopimus, esimerkiksi 8.2.: julkaisutesti tehdään keskiviikkona 10.2. Kirjoitat sopimuksen issueen työvaiheessa Korjaa ohje julkaisutestin perusteella. Tämä on myös viikkorutiinin palaveri, joten rastita palaveri myös viikkorutiinissa." },
            { vanha: 1, otsikko: "Jäädytä sisältö ja tee tagi v1.0-rc1", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]]. Älä lisää tästä eteenpäin uusia ominaisuuksia, vaan korjaa vain estäviä virheitä.", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi. Sisältö on jäädytetty: tätä kutsutaan sisältöjäädytykseksi.", koodi: "git tag v1.0-rc1", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v1.0-rc1 -> v1.0-rc1. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v1.0-rc1", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 1, otsikko: "Tarkista Actions-ajo ja release", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v1.0-rc1 on vihreä. [[github:releases|Releases-sivulla]] on julkaisu v1.0-rc1, ja kohdassa Assets on zip." },
            { vanha: 0, otsikko: "Avaa julkaisutesti", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:julkaisutesti|project-docs/julkaisutesti.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Otsikon ## Perustiedot jälkeen ovat valmiit rivit - Päivä: pp.kk.vvvv, - Versio: v1.0-rc1, - Testaaja: julkaisutestaaja (rooli) ja - Kone: Windows, Python asennettuna (kyllä/ei):." },
            { vanha: 0, otsikko: "Kirjoita testin perustiedot", missa: "Kun testaaja on vastannut: tiedosto [[tiedosto:julkaisutesti|julkaisutesti.md]], otsikko ## Perustiedot", tee: "Kirjoita rivillä Päivä tekstin pp.kk.vvvv tilalle sovittu testipäivä. Kirjoita rivin Kone loppuun kyllä tai ei sen mukaan, onko testaajan koneella Python.", naet: "Rivit Versio ja Testaaja olivat valmiina, etkä muuttanut niitä. Testaajan nimeä ei ole, koska repository on julkinen. Jos koneella on Python, testi tehdään silti, ja riville tulee kyllä. Jos koneella ei ole Inkscapea, kysy ohjaajalta Teamsissa ennen testiä. Ohje: [[ohje:teams]]. Jos testaaja ei ole vielä vastannut, jatka työvaiheesta Kirjoita lataus- ja käynnistysohje ja palaa tähän, kun vastaus tulee." },
            { vanha: 0, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:julkaisutesti|julkaisutesti.md]] muutokset.", koodi: "Kirjaa julkaisutestin järjestelyt", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Testiaika ja Windows-kone on sovittu, palaverin sopimus on paperilla, sisältö on jäädytetty, ja release v1.0-rc1 on GitHubissa.",
          tallenna: "Tagi v1.0-rc1 ja release GitHubiin. Testijärjestelyt tiedostossa [[tiedosto:julkaisutesti|julkaisutesti.md]] GitHubissa.",
          esimerkki: "Reseptikirjan julkaisutestin perustiedot:\n- Päivä: 10.2.2027\n- Versio: v1.0-rc1\n- Testaaja: julkaisutestaaja (rooli)\n- Kone: Windows, Python asennettuna (kyllä/ei): ei",
          eiRiita: "- Testaaja: Mikko Virtanen\n- Kone: läppäri\nTestaajan nimi on julkisessa repositoryssa, ja koneen tiedosta puuttuu Python.",
          sanat: ["RC", "sisältöjäädytys"]
        },
        "6-2": {
          versio: "2026-10-05",
          miksi: "Uuden käyttäjän pitää saada sovellus käyttöön ohjeen avulla. Ensin kirjoitat, miten sovellus ladataan ja käynnistetään.",
          osat: [
            { vanha: 0, otsikko: "Lue sovittu dokumentointitapa", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]]", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Lue otsikon jälkeen kirjoittamasi tapa.", naet: "Tiedät, mitä README:hen kirjoitetaan ja onko käyttöohje README:ssä vai omassa tiedostossaan. Jos dokumentointitapaa ei ole kirjattu tai siitä puuttuu käyttöohjetiedoston nimi tai kansio, kirjoita käyttöohje README:hen. Tarvitset tämän tiedon myös työvaiheessa Kirjoita piirtämisen ja mallintamisen ohje.", koodi: "### Dokumentointitapa (viikko 43)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 0, otsikko: "Avaa README", missa: "VS Code, Explorer", tee: "Avaa tiedosto README.md. Ohje: [[ohje:avaa-tiedosto]].", naet: "README.md on auki. Ensimmäisellä rivillä lukee # Vektoripaja. Tiedostossa ovat myös otsikot ## Työkalut ja ## Kirjastot." },
            { otsikko: "Siirry otsikon Työkalut eteen", missa: "README.md", tee: "Valitse Kopioi ja paina README:ssä Ctrl+F, Ctrl+V, Enter ja Esc. Paina sitten Home, kaksi kertaa Enter ja kaksi kertaa ylänuolinäppäintä.", naet: "Kursori on tyhjällä rivillä ennen otsikkoa ## Työkalut. Uudet otsikot tulevat tähän, joten käyttäjä näkee ne ennen työkaluja ja kirjastoja.", koodi: "## Työkalut", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { vanha: 1, otsikko: "Kirjoita lataus ja käynnistys", missa: "README.md, tyhjä rivi ennen otsikkoa ## Työkalut", tee: "Valitse rungon kohdalla Kopioi ja paina README:ssä Ctrl+V. Täydennä ___-kohdat omin sanoin. Ohje: [[ohje:markdown]].", naet: "README:ssä on otsikko Lataus ja käynnistys ja neljä numeroitua vaihetta. Lataus-kohdassa on [[github:releases|Releases-sivun]] osoite ([[ohje:kopioi-osoite]]) ja tieto, että ladataan tiedosto, jonka nimi loppuu windows.zip. Näin ohje toimii sekä versiolle v1.0-rc1 että v1.0. SmartScreen-kohdassa painikkeet ovat suomeksi ja englanniksi: Lisätietoja (More info) ja Suorita silti (Run anyway). Zipissä on lisäksi pohjan valmis ohje LUE_MINUT.txt, jota et muuta.", koodi: "## Lataus ja käynnistys\n1. Lataus: ___\n2. Purku: ___\n3. Käynnistys: ___\n4. Jos Windows sanoo \"Windows suojasi tietokonettasi\": ___", koodiOtsikko: "Runko: kopioi ja täydennä" },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa on README.md.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston README.md muutokset. Repositoryn etusivulla näkyy otsikko Lataus ja käynnistys.", koodi: "Kirjoita README:n lataus- ja käynnistysohje", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "README:ssä on lataus- ja käynnistysohje, joka toimii versioille v1.0-rc1 ja v1.0.",
          tallenna: "README.md:n lataus- ja käynnistysohje GitHubissa.",
          esimerkki: "Reseptikirjan README:\n## Lataus ja käynnistys\n1. Lataus: Avaa Releases-sivu ja lataa tiedosto, jonka nimi loppuu windows.zip.\n2. Purku: Napsauta zipiä hiiren oikealla painikkeella ja valitse Pura kaikki.\n3. Käynnistys: Kaksoisnapsauta tiedostoa Reseptikirja.exe.\n4. Jos Windows sanoo \"Windows suojasi tietokonettasi\": valitse Lisätietoja (More info) ja sitten Suorita silti (Run anyway).",
          eiRiita: "## Käyttö\nLataa ja käytä.\nOhjeesta ei näe, mistä zip ladataan eikä miten se puretaan.",
          sanat: []
        },
        "6-6": {
          perii: ["6-2"],
          miksi: "Julkaisutestaajan pitää osata nimetä piirros, tehdä malli ja viedä se ilman sinun apuasi. Käyttöohje kertoo nämä vaiheet sovelluksen omilla painikkeiden nimillä.",
          osat: [
            { otsikko: "Lue sovittu revolven valintatapa", missa: "VS Code, tiedosto [[tiedosto:suunnitelma|suunnitelma.md]]", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]] ja etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita paperille otsikon jälkeen oleva sovittu tapa ja nimimerkintä.", naet: "Paperilla on sovittu tapa, esimerkiksi nimimerkintä [revolve] layerin nimen perässä, tai tieto, että profiili valitaan sovelluksessa.", koodi: "### Revolven valintatapa (viikko 45)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Avaa tai luo käyttöohje", missa: "VS Code, Explorer", tee: "Jos käyttöohje on README:ssä, avaa README.md. Ohje: [[ohje:avaa-tiedosto]]. Muuten avaa tai luo dokumentointitavassa sovittu käyttöohjetiedosto sovittuun kansioon. Ohje: [[ohje:uusi-tiedosto]].", naet: "Käyttöohje on auki omalla välilehdellään. Et liitä uuteen tiedostoon mitään, vaan tallennat sen tyhjänä painamalla Ctrl+S. Dokumentointitavan luit työvaiheessa Kirjoita lataus- ja käynnistysohje. Jos tiedostoa ei ollut sovittu, käyttöohje on README:ssä." },
            { otsikko: "Vie kursori kirjoituskohtaan", missa: "README.md tai käyttöohjetiedosto", tee: "Jos käyttöohje on README:ssä, napsauta rivin `4. Jos Windows sanoo` loppua ja paina End ja kaksi kertaa Enter. Jos käyttöohje on omassa tiedostossaan, paina Ctrl+End ja kaksi kertaa Enter.", naet: "Kursori on tyhjällä rivillä Lataus ja käynnistys -osion jälkeen tai käyttöohjetiedoston lopussa. Edellisen tekstin ja kursorin välissä on tyhjä rivi. README:ssä otsikko ## Työkalut on kursorin alapuolella." },
            { otsikko: "Kirjoita Inkscapen nimeämissäännöt", missa: "Käyttöohje, kursorin kohta", tee: "Valitse rungon kohdalla Kopioi ja paina Ctrl+V. Täydennä ___-kohdat: jokainen layer ja ryhmä on mallin oma osa, ja nimimerkintä on paperilta.", naet: "Säännöissä lukee, että layerin tai ryhmän nimi Inkscapessa on osan nimi mallissa ja että layerin sisällä oleva ryhmä on layerin osan lapsi. Nimimerkintä-rivillä on sovittu merkintä, esimerkiksi maljakko [revolve]. Jos sovittu tapa on valinta sovelluksessa, rivillä lukee, että profiili valitaan sovelluksessa eikä Inkscapessa merkitä mitään. [[kuvaohje:inkscape-layerit|Katso kuvaohje]] layerien nimeämisestä.", koodi: "## Piirroksen nimeäminen Inkscapessa\n- Layer: ___\n- Ryhmä: ___\n- Nimimerkintä: ___", koodiOtsikko: "Runko: kopioi ja täydennä" },
            { otsikko: "Kirjoita painikkeiden nimet paperille", missa: "VS Code, terminaali ja Vektoripajan ikkuna", tee: "Käynnistä sovellus. Ohje: [[ohje:komento]]. Kirjoita paperille tuonnin, revolven, inflaten ja viennin painikkeiden nimet täsmälleen niin kuin sovelluksessa lukee.", naet: "Paperilla ovat painikkeiden nimet, esimerkiksi Avaa. Jos sinulla on viikon 5 painikelista, voit käyttää sitä. Kun nimet ovat paperilla, voit sulkea ikkunan sulkupainikkeesta.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { otsikko: "Kirjoita mallintaminen ja vienti", missa: "Käyttöohje, nimeämissääntöjen jälkeen", tee: "Napsauta rivin - Nimimerkintä: loppua ja paina End ja kaksi kertaa Enter. Kopioi runko, liitä se näppäimillä Ctrl+V ja täydennä ___-kohdat paperin painikkeiden nimillä.", naet: "Käyttöohjeessa on koko polku tuonnista revolveen eli pyörähdyskappaleeseen tai inflateen eli putkeen ja .obj-vientiin. Painikkeiden nimet ovat samat kuin sovelluksessa. Julkaisutestaaja voi kulkea polun ilman sinun apuasi.", koodi: "## Mallintaminen ja vienti\n1. Tuonti: ___\n2. Revolve eli pyörähdyskappale tai inflate eli putki: ___\n3. Vienti .obj-tiedostoksi: ___", koodiOtsikko: "Runko: kopioi ja täydennä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa on README.md ja käyttöohje, jos se on omassa tiedostossaan.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston README.md tai käyttöohjeen muutokset.", koodi: "Kirjoita käyttöohje", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Ohje kattaa piirroksen nimeämisen, mallintamisen ja viennin sovelluksen painikkeiden nimillä.",
          tallenna: "README.md ja käyttöohje GitHubissa.",
          esimerkki: "Reseptikirjan käyttöohje:\n## Reseptin nimeäminen\n- Resepti: kirjoita nimi ilman erikoismerkkejä, esimerkiksi Mustikkapiirakka.\n- Ainesosa: kirjoita ensin määrä ja sitten aine, esimerkiksi 2 dl maitoa.\n\n## Reseptin lisääminen ja tallennus\n1. Lisäys: valitse Lisää resepti ja kirjoita nimi.\n2. Ainesosat: valitse Lisää ainesosa jokaiselle riville.\n3. Tallennus: valitse Tallenna.",
          eiRiita: "## Mallintaminen\nTee malli ja vie se.\nOhjeesta ei näe painikkeiden nimiä eikä sitä, miten layerit ja ryhmät nimetään.",
          sanat: ["revolve", "inflate"]
        },
        "6-3": {
          versio: "2026-10-05",
          miksi: "Ulkopuolinen kokeilu paljastaa julkaisemisen viimeiset esteet.",
          osat: [
            { vanha: 0, otsikko: "Lähetä README:n osoite", missa: "Selain ja Teams", tee: "Avaa [[github:blob/main/README.md|README GitHubissa]] ja kopioi osoite. Ohje: [[ohje:kopioi-osoite]]. Lähetä vain osoite julkaisutestaajalle. Ohje: [[ohje:teams]].", naet: "Testaajalla on README:n osoite. Hän ei saa sinulta muita ohjeita." },
            { vanha: 0, otsikko: "Seuraa julkaisutestiä", missa: "Julkaisutestaajan Windows-kone: istut testaajan vieressä", tee: "Seuraa, kun testaaja kulkee polun vaiheet 0–4: zipin lataus ja purku, piirros Inkscapessa, tuonti, revolve tai inflate ja vienti .obj. Älä neuvo, vaan kirjoita paperille kohdat, joissa hän epäröi, ja hänen sanansa sellaisinaan.", naet: "Paperilla ovat epäröintikohdat ja testaajan sanatarkat lausumat. Testaaja on vienyt mallin .obj-tiedostoksi, tai tiedät, mihin vaiheeseen hän jäi. Jos et pääse paikalle, pyydä testaajaa jakamaan näyttönsä Teams-puhelussa. Ohje: [[ohje:teams]], kohta Jos aloitat puhelun ja jaat näytön." },
            { vanha: 0, otsikko: "Pyydä testaajan .obj-tiedosto", missa: "Teams, keskustelu julkaisutestaajan kanssa", tee: "Kopioi viesti ja lähetä se julkaisutestaajalle. Ohje: [[ohje:teams]].", naet: "Testaaja lähettää .obj-tiedoston keskusteluun. Tiedosto näkyy viestissä nimensä kanssa. Jos tiedosto ei tule samana päivänä, jatka odottaessasi työvaiheesta Kirjaa julkaisutestin tulokset ja palaa osatehtävään 4, kun tiedosto tulee. Jos tiedostoa ei ole seuraavana työpäivänä, lähetä samaan keskusteluun muistutus: [[pohja:muistutus-6]].", koodi: "Kiitos testistä! Voitko lähettää tähän keskusteluun .obj-tiedoston, jonka veit Vektoripajasta?", koodiOtsikko: "Viesti julkaisutestaajalle: kopioi tämä" },
            { otsikko: "Tallenna .obj-tiedosto koneellesi", missa: "Teams, testaajan viesti, jossa on tiedosto", tee: "Vie hiiri tiedoston päälle ja valitse kolme pistettä (Lisää vaihtoehtoja, More options). Valitse Lataa (Download).", naet: "Tiedosto on Lataukset-kansiossa. Sen nimi loppuu .obj." },
            { vanha: 0, otsikko: "Avaa .obj-tiedosto Blenderissä", missa: "Blender omalla koneellasi", tee: "Avaa tiedosto Blenderissä [[kuvaohje:blender-obj|kuvaohjeen]] mukaan. Valitse tiedostoikkunasta Lataukset-kansio.", naet: "Malli aukeaa Blenderissä. Outlinerissa jokainen osa on oma rivinsä." },
            { vanha: 1, otsikko: "Lähetä nimi ja lausumat ohjaajalle", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Kopioi viesti ja täydennä testaajan nimi ja paperin lausumat. Lähetä viesti ohjaajalle. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Jokainen lausuma on omalla rivillään: teet uuden rivin näppäimillä Shift+Enter. Testaajan nimi ja sanatarkat lausumat ovat vain Teamsissa.", koodi: "Hei Matti,\njulkaisutestin testaaja oli: ___\nTestaajan sanatarkat lausumat:\n- ___", koodiOtsikko: "Viesti ohjaajalle: kopioi tämä" }
          ],
          valmis: "Julkaisutesti on tehty, testaajan .obj-tiedosto aukeaa, ja testaajan nimi ja lausumat ovat ohjaajalla.",
          tallenna: "Testaajan nimi ja sanatarkat lausumat ohjaajalle Teamsissa. Kirjaat paperin epäröinnit seuraavassa työvaiheessa.",
          sanat: []
        },
        "6-5": {
          perii: ["6-3"],
          miksi: "Repository on julkinen, joten kirjaat julkaisutestiin testaajasta vain roolin ja epäröinnit omin sanoin.",
          osat: [
            { otsikko: "Avaa julkaisutesti", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:julkaisutesti|project-docs/julkaisutesti.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on otsikon ## Testin vaiheet ohjerivin jälkeen. Ohjerivin alapuolella ovat valmiit rivit 0.–4.: Zipin lataus releasesta ja purku, Piirros Inkscapessa, Tuonti, Revolve tai inflate ja Vienti .obj.", koodi: "## Testin vaiheet", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kirjoita polun tulokset", missa: "Tiedosto [[tiedosto:julkaisutesti|julkaisutesti.md]], otsikon ## Testin vaiheet rivit 0.–4.", tee: "Kirjoita kaikkien viiden rivin loppuun, miten testaaja onnistui. Kirjoita testaajasta vain rooli julkaisutestaaja.", naet: "Jokaisen vaiheen perässä on tulos, esimerkiksi onnistui tai jäi kesken." },
            { otsikko: "Kirjoita epäröinnit omin sanoin", missa: "Tiedosto [[tiedosto:julkaisutesti|julkaisutesti.md]], otsikko ## Epäröinnit omin sanoin", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita jokainen paperin epäröinti omin sanoin omalle rivilleen, joka alkaa merkillä - ja välilyönnillä.", naet: "Jokainen epäröinti on listan kohtana omalla rivillään. Tiedostossa ei ole testaajan nimeä eikä sanatarkkoja lausumia. Voit poistaa pohjan tyhjän - -rivin.", koodi: "## Epäröinnit omin sanoin", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:julkaisutesti|julkaisutesti.md]] muutokset.", koodi: "Kirjaa julkaisutesti", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Polku ja kaikki epäröinnit on kirjattu roolilla GitHubiin.",
          tallenna: "Polku ja epäröinnit roolilla tiedostossa [[tiedosto:julkaisutesti|julkaisutesti.md]] GitHubissa.",
          esimerkki: "Reseptikirjan julkaisutesti:\n## Epäröinnit omin sanoin\n- Julkaisutestaaja ei tiennyt, kirjoitetaanko ainesosan määrä nimen eteen vai perään. Hän kokeili molempia.",
          eiRiita: "\"Testi meni hyvin.\" Kirjauksesta ei näe, missä testaaja epäröi.",
          sanat: []
        },
        "6-4": {
          perii: ["6-3"],
          miksi: "Jokainen epäröinti on yksi kohta ohjeen korjauslistassa. Estävä virhe on virhe, joka esti testaajaa etenemästä. Korjaat estävän virheen ennen v1.0:aa.",
          osat: [
            { otsikko: "Avaa julkaisutesti", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:julkaisutesti|project-docs/julkaisutesti.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Otsikon ## Epäröinnit omin sanoin jälkeen ovat testaajan epäröinnit." },
            { otsikko: "Avaa README ja käyttöohje", missa: "VS Code, Explorer", tee: "Avaa tiedosto README.md. Ohje: [[ohje:avaa-tiedosto]]. Jos käyttöohje on omassa tiedostossaan, avaa myös käyttöohjetiedosto.", naet: "README.md ja käyttöohje ovat auki omilla välilehdillään." },
            { otsikko: "Korjaa ohje epäröintien kohdalta", missa: "README.md tai käyttöohje", tee: "Lue epäröinnit yksi kerrallaan. Korjaa jokaisen kohdalta ohjetta niin, ettei testaajan tarvitsisi epäröidä.", naet: "Jokaiseen epäröintiin on korjaus ohjeessa, esimerkiksi tarkempi vaihe tai esimerkki. Jos epäröinnin syy on sovelluksessa eikä epäröinti estänyt etenemistä, korjaa vain ohje: kerro, miten sovellusta käytetään siinä kohdassa. Et muuta sovellusta, koska sisältö on jäädytetty. Kirjaat estävät virheet osatehtävässä 6." },
            { otsikko: "Kirjoita korjaukset julkaisutestiin", missa: "Tiedosto [[tiedosto:julkaisutesti|julkaisutesti.md]], otsikko ## Korjaukset ohjeeseen", tee: "Etsi otsikko. Ohje: [[ohje:etsi-otsikko]]. Kirjoita jokaisesta epäröinnistä samassa järjestyksessä oma listan rivi: epäröinnin lyhyt nimi, tiedosto ja kohta sekä mitä muutit.", naet: "Jokaista epäröintiä vastaa yksi korjausrivi, esimerkiksi - Ainesosan määrä: README, kohta Ainesosat: lisäsin esimerkin. Voit poistaa pohjan tyhjän - -rivin.", koodi: "## Korjaukset ohjeeseen", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa ovat README.md, [[tiedosto:julkaisutesti|julkaisutesti.md]] ja käyttöohje, jos se on omassa tiedostossaan.", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedostojen README.md ja [[tiedosto:julkaisutesti|julkaisutesti.md]] muutokset.", koodi: "Korjaa ohje julkaisutestin perusteella", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Tee estävistä virheistä havaintoissuet", missa: "Selain, GitHub", tee: "Tee jokaisesta estävästä virheestä havaintoissue. Ohje: [[ohje:havaintoissue]]. Kirjoita kuvauksen viimeiselle riville Korjataan viikolla 7, ennen kuin valitset Create.", naet: "Jokaisesta estävästä virheestä on havaintoissue, jossa on label havainto ja rivi Korjataan viikolla 7. Viikolla 7 haet issuet tällä rivillä. Jos estäviä virheitä ei ollut, rastita tämä osatehtävä." },
            { otsikko: "Kirjoita palaverin sopimus issueen", missa: "Selain, GitHub, issuen kommenttikenttä sivun lopussa", tee: "Avaa ensimmäinen osatehtävässä 6 tekemäsi havaintoissue tai, jos et tehnyt niitä, [[github:issues?q=is%3Aissue+label%3Ateht%C3%A4v%C3%A4kortti|tehtäväkorttien listan]] ylin issue. Kopioi kommentti, liitä se kommenttikenttään, täydennä paperin päivällä ja sopimuksella ja valitse Comment.", naet: "Issuessa on kommentti, esimerkiksi Sovittu viikkopalaverissa 8.2.: julkaisutesti tehdään keskiviikkona 10.2. Päivä ja sopimus ovat paperilta työvaiheesta Valmistele julkaisuehdokas. Kommentti on viikon 6 työnäyte [[naytto|näyttömatriisin]] rivillä sopii tehtävistä tiimin muiden jäsenten kanssa.", koodi: "Sovittu viikkopalaverissa pp.kk.: ___", koodiOtsikko: "Kommentti: kopioi tämä" }
          ],
          valmis: "Ohje on korjattu jokaisen epäröinnin kohdalta, estävistä virheistä on havaintoissuet viikolle 7, ja palaverin sopimus on issuen kommenttina.",
          tallenna: "Korjattu README.md ja käyttöohje sekä korjauslista tiedostossa [[tiedosto:julkaisutesti|julkaisutesti.md]] GitHubissa. Estävät virheet havaintoissueihin ja palaverin sopimus issuen kommentiksi.",
          esimerkki: "Reseptikirjan korjaus:\n## Korjaukset ohjeeseen\n- Ainesosan määrä: README, kohta Ainesosat: lisäsin esimerkin ainesosarivistä: 2 dl maitoa.",
          eiRiita: "## Korjaukset ohjeeseen\n- Korjasin ohjetta.\nRiviltä ei näe, mitä kohtaa korjasit eikä mihin epäröintiin korjaus liittyy.",
          sanat: ["havaintoissue"]
        }
      },
      pohjat: [
        { tunnus: "muistutus-6", otsikko: "Muistutus julkaisutestaajalle (Teams)", teksti: "Hei,\nmuistutan viestistäni pp.kk. Vektoripajan julkaisutestistä.\nKysyin: ___\nVoitko vastata tänään tai huomenna?" }
      ]
    },
    7: {
      type: "julkaisu",
      feature: "Vektoripaja v1.0 on julkaistu, ja asiakkaat ovat vahvistaneet toimivuuden.",
      excerpt: "Valmis tarkoittaa meille tätä: työkalun voi ladata GitHubista ja käynnistää Windows-koneella ilman Pythonia, oma piirroksemme muuttuu malliksi, .obj aukeaa toisessa ohjelmassa, ja mukana on ohje, jolla joku muu saa työkalun käyttöön kysymättä meiltä.",
      connection: "Korjaat julkaisutestissä löytyneet esteet, jotta Vektoripajan voi luovuttaa asiakkaiden käyttöön. Julkaiset version v1.0 ja pyydät asiakkaita vahvistamaan sovelluksen toimivuuden. Samalla kokoat työnäytteiden linkit, jotta projektin ratkaisut ja oma osaamisesi löytyvät näyttöä varten.",
      deliverable: "Virheenkorjausketju 3 · tagi v1.0 ja release-teksti · asiakkaiden vahvistus · linkitetty näyttömatriisi.",
      why: "Julkaisu ilman korjauksia jättää asiakkaalle tunnetut viat. Ilman linkitystä arvioija ei löydä työnäytteitä.",
      done: "Estävät issuet on suljettu. Release v1.0 ja sen zip näkyvät GitHubissa. Antti on vahvistanut toimivuuden omalla Windows-koneellaan, ja Matti on nähnyt sovelluksen demossa tai sinun koneellasi. [[naytto|Näyttömatriisin]] riveille on linkki [[tiedosto:projektipaivakirja|projektipäiväkirjassa]]. Rivin, jonka vaatimus on arvioi omaa toimintaa tiimin jäsenenä, linkität viikolla 9.",
      record: "Virheenkorjausketju 3, asiakkaiden vahvistus, korjauskortin issuen kommentti Sovittu viikkopalaverissa ja näyttömatriisin vaatimukset: etsii ja korjaa virheitä ohjelmakoodista, käyttää versionhallintaa, julkaisee ohjelman tuotantoympäristöön, julkaisee ohjelmiston asiakkaan ympäristöön ja sopii tehtävistä tiimin muiden jäsenten kanssa.",
      skills: ["Virheenkorjaus", "Julkaisu tuotantoon", "Näyttöaineiston kokoaminen"],
      termit: ["työnäyte", "näyttömatriisi"],
      tehtavat: {
        "7-5": {
          perii: ["7-1"],
          miksi: "Ensin selvität, mitkä virheet korjaat ennen v1.0:aa. Jos julkaisutestissä ei löytynyt estäviä virheitä, ohjaaja antaa vikatehtävän.",
          osat: [
            { otsikko: "Etsi estävät virheet", missa: "Selain, GitHub, ennen viikkopalaveria", tee: "Avaa [[github:issues?q=is%3Aissue+is%3Aopen+label%3Ahavainto+%22Korjataan+viikolla+7%22|avoimet havaintoissuet, joissa lukee Korjataan viikolla 7]]. Kirjoita listan jokaisen issuen numero paperille.", naet: "Lista näyttää vain avoimet havaintoissuet, joiden kuvauksessa on rivi Korjataan viikolla 7. Korjaat jokaisen niistä omalla työsyklin kierroksella. Palaverissa kerrot, onko listalla virheitä. Jos lista ei ole tyhjä, rastita osatehtävät 2–4." },
            { otsikko: "Pyydä vikatehtävä, jos lista on tyhjä", missa: "Vain jos lista oli tyhjä: viikkopalaveri ohjaajan kanssa maanantaina tai tiistaina", tee: "Kerro palaverissa, ettei estäviä virheitä ole, ja pyydä ohjaajalta vikatehtävä. Kirjoita paperille ohjaajan kuvaus: mitä teet sovelluksessa, mitä pitäisi tapahtua ja mitä tapahtuu.", naet: "Paperilla on vikatehtävän kuvaus kolmena kohtana. Vikatehtävä on ohjaajan tekemä tarkoituksellinen virhe, ja korjaat sen kuten estävän virheen. Tämä on myös viikkorutiinin palaveri, joten rastita palaveri myös viikkorutiinissa. Jos palaveri on jo pidetty, lähetä viesti ohjaajalle. Ohje: [[ohje:teams]]. Jos ohjaaja tekee vikatehtävän pull requestina myöhemmin, jatka odottaessasi työvaiheesta Kokoa työnäytteiden linkit ja palaa osatehtävään 3, kun pull request on valmis. Jos pull requestia ei ole kahdessa työpäivässä, lähetä ohjaajalle muistutus: [[pohja:muistutus-7]].", koodi: "Hei Matti,\nviikon 6 julkaisutestissä ei löytynyt estäviä virheitä.\nVoitko antaa vikatehtävän virheenkorjausketjua 3 varten?", koodiOtsikko: "Viesti ohjaajalle: kopioi tämä" },
            { otsikko: "Hae vikatehtävä koneellesi", missa: "Vain jos ohjaaja teki vikatehtävän pull requestina: selain ja VS Code", tee: "Tarkista ja hyväksy ohjaajan pull request ja hae muutos koneellesi. Ohje: [[ohje:pull-request]].", naet: "Pull requestin sivulla lukee Merged, ja VS Code on hakenut muutoksen komennolla Git: Pull. Jos ohjaaja ei tehnyt pull requestia, rastita tämä osatehtävä." },
            { otsikko: "Luo havaintoissue vikatehtävästä", missa: "Vain jos pyysit vikatehtävän: selain, GitHub", tee: "Luo havaintoissue paperin kuvauksesta. Ohje: [[ohje:havaintoissue]]. Kirjoita issuen numero paperille.", naet: "Havaintoissue on GitHubissa. Kohdassa Toistamisohje on, mitä teet sovelluksessa. Kohdassa Mitä odotin on, mitä pitäisi tapahtua. Kohdassa Mitä tapahtui on, mitä tapahtuu. Kohta Syy omin sanoin on vielä ennallaan. Jos lista ei ollut tyhjä, rastita tämä osatehtävä." }
          ],
          valmis: "Paperilla on jokaisen korjattavan havaintoissuen numero.",
          tallenna: "Vikatehtävän havaintoissue GitHubiin, jos pyysit vikatehtävän.",
          sanat: ["havaintoissue", "vikatehtävä"]
        },
        "7-1": {
          versio: "2026-10-05",
          tyosykli: true,
          miksi: "Asiakkaalle luovutettavan version pitää läpäistä julkaisutesti. Korjaat jokaisen paperin virheen omalla työsyklin kierroksella.",
          osat: [
            { vanha: 0, otsikko: "Avaa työsykli", missa: "Tämän työvaiheen loppu, osatehtävien jälkeen", tee: "Valitse painike Käytä työsykliä tämän muutoksen tekemiseen. Jos työsykli näyttää valmiin kierroksen, valitse Aloita kierros.", naet: "Työsykli aukeaa. Askel 1 Suunnittele on auki." },
            { vanha: 0, otsikko: "Suunnittele korjauskortti", missa: "Työsykli, askel 1 Suunnittele, ja Copilot selaimessa", tee: "Tee askeleen 1 ohjeet. Täytä rivit: ehdotus (Tämä kortti tekee vain korjauksen havaintoissueen #N virheeseen), yksi Testi-rivi ja Lisäksi-rivi.", naet: "Testi-rivillä numeron tilalla on käsin, syöte on havaintoissuen toistamisohje ja tulos havaintoissuen Mitä odotin. Testin nimi on uusintatesti #N, jossa N on havaintoissuen numero. Lisäksi-rivillä ovat havaintoissuen kohdat Mitä odotin ja Mitä tapahtui sekä lause Testi tehdään käsin. Voit kopioida kohdat havaintoissuesta: maalaa teksti ja paina Ctrl+C. Rajapinta-rivi on ennallaan. Copilotin korjauskortissa on kuusi otsikkoa. Valitse lopuksi Tein tämän · seuraava askel ja Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Siirrä kortti ja rakenna korjaus", missa: "Työsykli, askeleet 2 Siirrä ja 3 Rakenna", tee: "Avaa työsykli työvaiheen painikkeesta. Tee askeleiden 2 ja 3 ohjeet: teet testin käsin, joten kirjoita odotettu tulos eli havaintoissuen Mitä odotin kortin issueen kommentiksi, rastita 3a ja korjaa kohdassa 3b.", naet: "Työsykli aukesi askeleeseen 2. Kortin issue on GitHubissa, ja siinä on odotettu tulos kommenttina. Viikon ensimmäisen korjauskortin issuessa on myös askeleen 2 kommentti Sovittu viikkopalaverissa pp.kk.: ___. Kohdan pp.kk. tilalla on tämän viikon palaverin päivä. Kohdan ___ tilalla on lause siitä, mitä sovittiin, esimerkiksi korjaan estävät virheet ennen v1.0:aa. Korjaus on tehty. Valitse kummankin askeleen jälkeen Tein tämän · seuraava askel ja lopuksi Palaa työvaiheeseen." },
            { vanha: 0, otsikko: "Tee uusintatesti", missa: "VS Code, terminaali ja Vektoripajan ikkuna", tee: "Käynnistä korjattu versio. Ohje: [[ohje:komento]]. Tee havaintoissuen toistamisohje uudelleen ja kirjoita tulos havaintoissueen kommentiksi.", naet: "Virhe ei enää toistu. Havaintoissuessa on kommentti, jossa on uusintatestin tulos. Uusintatesti on myös kortin käsin tehty testi: kirjaat saman tuloksen kortin issueen seuraavassa osatehtävässä etkä testaa uudelleen. Jos virhe toistuu, toimi kuten työsyklin askeleen 4 kohdassa Testi ei mennyt läpi?: korjaa kohdassa 3b ja tee uusintatesti uudelleen.", koodi: "python main.py", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Raportoi ja kirjaa korjaus", missa: "Työsykli, askeleet 4 Tarkista, 5 Raportoi ja 6 Kirjaa", tee: "Avaa työsykli työvaiheen painikkeesta ja tee askeleiden 4–6 ohjeet. Kirjoita askeleen 6 commit-viestiin kaksi riviä Closes #N: toinen kortin issuelle ja toinen havaintoissuelle.", naet: "Työsykli aukesi askeleeseen 4. Askeleen 4 kirjauksessa ensimmäisellä rivillä lukee Testi käsin: uusintatesti #N, ja havaittu tulos on uusintatestin tulos. Kortin issue ja havaintoissue on suljettu. Molemmissa näkyy korjauscommit." },
            { vanha: 0, otsikko: "Korjaa muut estävät virheet", missa: "Työsykli, kun kierros on valmis", tee: "Avaa työsykli työvaiheen painikkeesta ja valitse Aloita kierros. Tee osatehtävien 2–5 vaiheet paperin seuraavalle issuelle ja toista, kunnes jokainen paperin issue on suljettu.", naet: "Et rastita osatehtäviä 2–5 uudelleen. Työsykli näyttää kierroksen numeron, ja kortin issuen kohta Sykli näyttää askeleet. Et kirjoita kommenttia Sovittu viikkopalaverissa toiseen korttiin. Kaikki paperin issuet on suljettu. Jos korjattavia issueita oli vain yksi, rastita tämä osatehtävä." }
          ],
          valmis: "Estävät havainnot tai vikatehtävä on korjattu, ja niiden issuet on suljettu.",
          tallenna: "Korjauscommitit GitHubiin. Uusintatestien tulokset havaintoissueihin ja kortin issueen.",
          sanat: ["havaintoissue"]
        },
        "7-4": {
          perii: ["7-1"],
          miksi: "Virheenkorjausketju 3 näyttää, että osaat löytää virheen syyn ja estää virheen palaamisen. Regressiotesti on testi, joka toistaa korjatun virheen ja jää testeihin.",
          osat: [
            { otsikko: "Valitse korjattu virhe", missa: "Selain, GitHub", tee: "Avaa [[github:issues?q=is%3Aissue+is%3Aclosed+label%3Ahavainto|suljetut havaintoissuet]], niistä tällä viikolla korjattu issue ja sen korjauscommit: napsauta rivin closed this as completed in perässä olevaa tunnusta. Kirjoita paperille issuen numero, tiedoston nimi ja muutetun funktion def-rivi.", naet: "Commitin sivulla näkyvät muutetut rivit: vihreät lisättiin ja punaiset poistettiin. Virheen saa toistettua kutsumalla funktiota, jos muutos on funktiossa, jossa on return-rivi. Jos muutos on vain teemassa tai ikkunan asettelussa, valitse toinen issue. Jos korjasit vikatehtävän, valitse sen havaintoissue. Jos sopivaa issueta ei ole, kysy ohjaajalta Teamsissa ennen kuin jatkat. Ohje: [[ohje:teams]]." },
            { otsikko: "Avaa regressiotestien tiedosto", missa: "VS Code, Explorer, kansio tests", tee: "Avaa tiedosto tests/test_regressio.py. Ohje: [[ohje:avaa-tiedosto]]. Paina Ctrl+End ja Enter.", naet: "Tiedosto on auki, ja kursori on tyhjällä rivillä tiedoston lopussa. Tiedostossa ovat viikkojen 49, 2 ja 4 regressiotestit, joten et luo uutta tiedostoa." },
            { otsikko: "Kirjoita regressiotesti", missa: "Tiedosto tests/test_regressio.py, tiedoston loppu", tee: "Liitä malli. Vaihda NUMERO issuen numeroksi, MODUULI tiedoston nimeksi ilman päätettä .py, FUNKTIO funktion nimeksi ja sulkeiden tekstit omiksesi, ja hyväksy def-rivin jälkeen täydennys. Ohje: [[ohje:taydennys]].", naet: "Rivit, jotka alkavat merkillä #, ovat Python-kommentteja. Funktiokutsu on funktion nimi ja sulkeissa virheen syöte, esimerkiksi tarkista_nimi(\"\"). Syötteet ovat samassa järjestyksessä kuin paperin def-rivillä. Import-rivi toimii, vaikka sama funktio olisi tuotu jo tiedoston alussa. Jos tiedosto on alikansiossa, MODUULI on kansio ja tiedosto pisteellä erotettuna, esimerkiksi geometria.revolve. Tiedostossa on uusi testifunktio, esimerkiksi test_regressio_23, ja sen assert-rivillä on oikea tulos eli havaintoissuen kohta Mitä odotin.", koodi: "# Regressiotesti #NUMERO: (virhe yhdellä lauseella)\nfrom vektoripaja.MODUULI import FUNKTIO\n# (funktiokutsu virheen syötteellä) palauttaa (oikea tulos)\ndef test_regressio_NUMERO():", koodiOtsikko: "Testin malli: kopioi tämä" },
            { otsikko: "Aja testit", missa: "VS Code, terminaali", tee: "Aja testit. Ohje: [[ohje:pytest]].", naet: "Regressiotestin rivillä lukee PASSED. Myös vanhat testit menevät läpi. Jos regressiotestin rivillä lukee FAILED, tarkista, että assert-rivillä on havaintoissuen Mitä odotin. Älä muuta korjausta itse. Jos testi ei vieläkään mene läpi, lähetä ohjaajalle kuva FAILED-rivistä. Ohje: [[ohje:teams]], kohta Jos lähetät kuvan." },
            { otsikko: "Kirjaa täydennys AI-lokiin", missa: "VS Code, tiedosto [[tiedosto:ai-loki|ai-loki.md]], tiedoston loppu", tee: "Avaa tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]] ja paina Ctrl+End ja Enter. Liitä lokimerkintä ja täytä sen kohdat.", naet: "Tiedoston lopussa on merkintä, jonka otsikkorivillä ovat päivä, GitHub Copilot ja Täydennys-kaista. Päätös on hyväksyn, korjautan tai hylkään, ja sillä on peruste. Täydennys on tekoälyn käyttöä työsyklin ulkopuolella, joten kirjaat sen samana päivänä.", koodi: "### pp.kk.vvvv · GitHub Copilot, Täydennys-kaista\n- Mihin pyysin apua: regressiotesti test_regressio_NUMERO\n- Päätös: hyväksyn / korjautan / hylkään\n- Peruste: \n- Aineistoviite: issue #NUMERO, testi test_regressio_NUMERO\n- Tietosuoja: En syöttänyt henkilötietoja, salasanoja tai luottamuksellista aineistoa.", koodiOtsikko: "Lokimerkintä: kopioi tämä" },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]]. Changes-listassa ovat tests/test_regressio.py ja [[tiedosto:ai-loki|project-docs/ai-loki.md]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedostojen tests/test_regressio.py ja [[tiedosto:ai-loki|ai-loki.md]] muutokset.", koodi: "Lisää regressiotesti virheenkorjausketjuun 3", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Kopioi ketjun pohja issueen", missa: "Selain, GitHub, havaintoissuen kommenttikenttä", tee: "Kopioi pohja. Liitä se havaintoissuen kommenttikenttään näppäimillä Ctrl+V.", naet: "Kommenttikentässä on otsikko Virheenkorjausketju ja kuusi numeroitua riviä.", koodi: "## Virheenkorjausketju\n1. Havainto: \n2. Toistamisohje: \n3. Syy omin sanoin: \n4. Korjauscommit: \n5. Uusintatesti: \n6. Regressiotesti: test_regressio_(tämän issuen numero) tiedostossa tests/test_regressio.py", koodiOtsikko: "Virheenkorjausketju: kopioi tämä" },
            { otsikko: "Kirjoita ketjun kuusi osaa", missa: "Havaintoissuen kommenttikenttä", tee: "Kirjoita jokaisen rivin perään oma tekstisi ja valitse lopuksi Comment. Syyn saat korjauscommitin muutetuista riveistä, ja korjauscommitin tunnus löytyy näin. Ohje: [[ohje:kopioi-osoite]], kohta Commitin tunnus.", naet: "Issuessa on kommentti, jossa kaikki kuusi osaa on täytetty: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti. Syy omin sanoin kertoo, mikä rivi muuttui ja miksi vanha rivi aiheutti virheen. Uusintatesti on havaintoissuen uusintatestin kommentti." }
          ],
          valmis: "Havaintoissuessa on virheenkorjausketjun kuusi osaa, regressiotesti menee läpi, ja täydennys on kirjattu.",
          tallenna: "Ketju havaintoissueen kommenttina, regressiotesti tiedostossa tests/test_regressio.py ja lokimerkintä tiedostossa [[tiedosto:ai-loki|ai-loki.md]] GitHubissa.",
          esimerkki: "Reseptikirjan ketju:\n## Virheenkorjausketju\n1. Havainto: Sovellus kaatuu, kun reseptin nimi on tyhjä.\n2. Toistamisohje: Valitse Lisää resepti. Jätä nimi tyhjäksi. Valitse Tallenna.\n3. Syy omin sanoin: Tallennus käytti nimen ensimmäistä kirjainta tiedostonimessä. Tyhjässä nimessä ensimmäistä kirjainta ei ole.\n4. Korjauscommit: 7b2f9e0\n5. Uusintatesti: Toistin ohjeen. Sovellus näytti virheilmoituksen Anna reseptille nimi eikä kaatunut.\n6. Regressiotesti: test_regressio_23 tiedostossa tests/test_regressio.py\n\nRegressiotestin alku:\n# Regressiotesti #23: tallennus kaatui tyhjään nimeen.\nfrom reseptikirja.nimi import tarkista_nimi\n# tarkista_nimi(\"\") palauttaa \"Anna reseptille nimi\"",
          eiRiita: "3. Syy omin sanoin: koodissa oli bugi.\nKirjauksesta ei näe, mikä meni väärin eikä miksi.",
          sanat: ["virheenkorjausketju", "regressiotesti"]
        },
        "7-2": {
          versio: "2026-10-05",
          miksi: "Asiakkaan vahvistus päättää sovelluksen toteutusvaiheen.",
          osat: [
            { vanha: 0, otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Korjaukset ja regressiotestit ovat GitHubissa." },
            { vanha: 0, otsikko: "Tee tagi v1.0", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaali ei tulosta mitään. Tagi on omalla koneellasi.", koodi: "git tag v1.0", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Pushaa tagi", missa: "VS Code, terminaali", tee: "Aja komento. Ohje: [[ohje:komento]].", naet: "Terminaalissa lukee [new tag] v1.0 -> v1.0. Tagin push käynnistää GitHub Actionsin julkaisun.", koodi: "git push origin v1.0", koodiOtsikko: "Komento: kopioi tämä" },
            { vanha: 0, otsikko: "Tarkista Actions-ajo", missa: "Selain, GitHub", tee: "Tarkista ajo. Ohje: [[ohje:actions]].", naet: "Ajo Julkaisu v1.0 on vihreä. Askeleessa Aja itsetesti valmiille .exe:lle lukee ITSETESTI LÄPI." },
            { vanha: 0, otsikko: "Kirjoita release-teksti", missa: "Selain, GitHub, julkaisun v1.0 sivu", tee: "Avaa [[github:releases/tag/v1.0|julkaisun v1.0 sivu]] ja valitse julkaisun otsikon oikealta puolelta kynäkuvake (Edit). Kirjoita kuvauskentän alkuun, mitä versiossa on, ja valitse sivun lopusta Update release.", naet: "Julkaisun v1.0 sivulla näkyy kuvauksesi. Actionsin valmis rivi, joka alkaa sanoilla Lataa zip, on kuvauksen lopussa. Kohdassa Assets on zip. Älä valitse kynäkuvakkeen vieressä olevaa roskakorikuvaketta: se poistaa julkaisun." },
            { vanha: 1, otsikko: "Lähetä releasen osoite asiakkaille", missa: "Teams, keskustelu, jossa ovat Matti Seise ja Antti Honkasalo", tee: "Kopioi viesti ja täydennä releasen osoite, README-linkki sekä päivä ja kellonaika, jolloin näytät sovelluksen Matille. Lähetä viesti. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty. Releasen osoitteen saat näin. Ohje: [[ohje:kopioi-osoite]], kohta Releasen osoite. README-linkki on [[github:blob/main/README.md|README GitHubissa]] -sivun osoite. Ehdotit Matille tämän viikon päivää julkaisun jälkeen, viimeistään perjantaina 19.2. Jatka odottaessasi työvaiheesta Kokoa työnäytteiden linkit ja palaa osatehtävään 7, kun Antti vastaa.", koodi: "Hei Matti ja Antti,\nVektoripaja v1.0 on julkaistu: (releasen osoite)\nOhje: (README-linkki)\nAntti: voitko vahvistaa, että zipistä purettu sovellus toimii Windows-koneellasi?\nMatti: voinko näyttää sovelluksen sinulle omalla koneellani pp.kk. klo __?", koodiOtsikko: "Viesti asiakkaille: kopioi tämä" },
            { vanha: 1, otsikko: "Lue Antin vahvistus", missa: "Teams, sama keskustelu", tee: "Kun Antti vastaa, lue, toimiiko zipistä purettu sovellus hänen Windows-koneellaan. Kirjoita paperille asiakas 1 ja vastauksen päivä.", naet: "Antti on vahvistanut, että sovellus toimii, ja paperilla lukee esimerkiksi asiakas 1 vahvisti Teamsissa 17.2. Jos hän ei ole vastannut kahdessa työpäivässä, lähetä samaan keskusteluun muistutus: [[pohja:muistutus-7]]. Jos vastausta ei ole vielä perjantaina, kirjoita viikon kirjaukseen, että vahvistus puuttuu. Jos Antti kertoo, ettei sovellus toimi, luo hänen kuvauksestaan havaintoissue ([[ohje:havaintoissue]]) ja lähetä sen numero ohjaajalle. Ohjaaja päättää korjauksesta." },
            { vanha: 1, otsikko: "Näytä sovellus Matille", missa: "Oma koneesi, Matin kanssa sovittuna aikana", tee: "Lataa ja pura v1.0:n zip ja käynnistä Vektoripaja.exe. Ohje: [[ohje:release]]. Näytä Matille polku tuonnista revolveen tai inflateen ja .obj-vientiin, ja kirjoita paperille asiakas 2 ja päivä.", naet: "Matti on nähnyt version v1.0 toiminnassa omalla koneellasi ja vahvistanut toimivuuden. Paperilla lukee esimerkiksi asiakas 2 vahvisti omalla koneellani 18.2. Matilla on Mac, eikä Mac-versiota tehdä. Jos Matti ehdotti toista aikaa, näytit sovelluksen sinä aikana. Jos Matti ei ole vastannut aikaehdotukseen kahdessa työpäivässä, lähetä muistutus: [[pohja:muistutus-7]]." }
          ],
          valmis: "Release v1.0 on ladattavissa, ja asiakkaat ovat vahvistaneet toimivuuden.",
          tallenna: "Release v1.0 GitHubiin. Asiakkaiden vahvistukset rooleilla viikon kirjaukseen perjantaina, esimerkiksi Asiakas 1 vahvisti toimivuuden Teamsissa 17.2. ja asiakas 2 omalla koneellani 18.2.",
          esimerkki: "Reseptikirjan release-teksti:\nReseptikirja v1.0\n- Reseptin lisäys, haku nimellä ja tallennus\n- Kuvien lisäys (.jpg ja .png)\nLataa Reseptikirja-v1.0-windows.zip, pura se ja käynnistä Reseptikirja.exe. Ohje on README:ssä.",
          eiRiita: "\"Uusi versio.\" Tekstistä ei näe, mitä versiossa on eikä miten sen saa käyttöön.",
          sanat: []
        },
        "7-3": {
          versio: "2026-10-05",
          miksi: "Arvioijan pitää löytää työn tulokset ja niitä osoittavat näytteet. Työnäyte on yksi tuotos, joka osoittaa osaamisesi: commit, issue, testi, kuva tai muistio.",
          osat: [
            { vanha: 0, otsikko: "Avaa näyttömatriisi", missa: "Selain, Vektoripajan sivu", tee: "Avaa [[naytto|näyttömatriisi]]. Lue ensimmäisen rivin vaatimus ja viikot, jotka rivillä mainitaan.", naet: "Näyttömatriisi on auki. Jokainen rivi on yksi tutkinnon vaatimus. Rivin alussa on vaatimuksen nimi, esimerkiksi testaa ohjelman toimintoja, ja sen perässä viikot, joilla työnäyte syntyi." },
            { vanha: 1, otsikko: "Avaa projektipäiväkirja", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:projektipaivakirja|project-docs/projektipaivakirja.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Jokaisen viikon otsikon jälkeen on kysymys Missä työnäyte on?" },
            { vanha: 1, otsikko: "Etsi rivin viikko", missa: "VS Code, tiedosto [[tiedosto:projektipaivakirja|projektipaivakirja.md]]", tee: "Paina Ctrl+F ja kirjoita hakuun Vko, välilyönti, rivin ensimmäinen viikko ja vielä välilyönti, esimerkiksi Vko 4 ja välilyönti. Paina Enter ja Esc.", naet: "Ennen Esciä hakukentän vieressä luki 1 of 1. Kursori on viikon otsikossa. Välilyönti numeron perässä estää osumat viikkoihin 40–49." },
            { vanha: 1, otsikko: "Kirjoita puuttuva linkki", missa: "Tiedosto [[tiedosto:projektipaivakirja|projektipaivakirja.md]], viikon kohta Missä työnäyte on?", tee: "Jos kohdassa ei ole rivin työnäytettä tai se on epätarkka, kirjoita täsmällinen työnäyte: issuen numero, testin numero, commitin tunnus tai tiedoston linkki ([[ohje:kopioi-osoite]]). Kirjoita perään Vaatimus: ja vaatimus samalla nimellä kuin matriisin rivin alussa.", naet: "Kohdassa on täsmällinen työnäyte ja vaatimus, esimerkiksi Issue #12 ja testi 5. Vaatimus: testaa ohjelman toimintoja. GitHub muuttaa issuen numeron ja commitin tunnuksen linkeiksi, joten ne kelpaavat linkkinä. Epätarkka työnäyte on esimerkiksi pelkkä sana GitHubissa. Viikon työnäyte on kerrottu viikon sivun kohdassa Tallenna nämä tiedot. Jos kohdassa on jo vaatimuksen lyhyt nimi, esimerkiksi Vaatimus: testaus, se kelpaa. Jos et löydä viikon työnäytettä GitHubista, hae rivin seuraava viikko osatehtävän 3 tavalla." },
            { vanha: 0, otsikko: "Rastita matriisin rivi", missa: "Selain, [[naytto|näyttömatriisi]]", tee: "Rastita rivi, kun sen työnäyte on linkitetty [[tiedosto:projektipaivakirja|projektipäiväkirjassa]].", naet: "Rivin ruutu on rastitettu. Rivi on valmis, kun yhden sen viikon kohdassa on täsmällinen työnäyte. Näyttömatriisin alussa luku kasvaa yhdellä, esimerkiksi 1 / 31. Jos millään rivin viikolla ei ole työnäytettä, jätä rivi rastittamatta ja kysy ohjaajalta Teamsissa. Ohje: [[ohje:teams]]." },
            { vanha: 0, otsikko: "Käy kaikki rivit läpi", missa: "Selain ja VS Code", tee: "Tee osatehtävien 3–5 vaiheet jokaiselle näyttömatriisin riville ylhäältä alas.", naet: "Et rastita osatehtäviä 3–5 uudelleen, koska matriisin rastit näyttävät, mitkä rivit on käyty. Näyttömatriisin alussa lukee 30 / 31. Rivi, jonka vaatimus on arvioi omaa toimintaa tiimin jäsenenä, jää rastittamatta, koska sen työnäyte eli itsearviointi tehdään [[vk 9|viikolla 9]]. Muille riveille on täsmällinen linkki [[tiedosto:projektipaivakirja|projektipäiväkirjassa]]." },
            { vanha: 1, otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:projektipaivakirja|projektipaivakirja.md]] muutokset.", koodi: "Linkitä työnäytteet näyttömatriisin vaatimuksiin", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "[[naytto|Näyttömatriisin]] riveille on täsmällinen linkki [[tiedosto:projektipaivakirja|projektipäiväkirjassa]], ja rivit on rastitettu. Vain rivi, jonka vaatimus on arvioi omaa toimintaa tiimin jäsenenä, odottaa viikkoa 9.",
          tallenna: "Linkit ja koko [[tiedosto:projektipaivakirja|projektipaivakirja.md]] GitHubissa.",
          esimerkki: "Viikon 3 kohta Missä työnäyte on?\nPull request #24 ja merge-commit a1b2c3d. Vaatimus: liittää ohjelman osan olemassa olevaan versioon.",
          eiRiita: "\"Tehty.\" Kohdasta puuttuu linkki työnäytteeseen.",
          sanat: ["työnäyte", "näyttömatriisi"]
        }
      },
      pohjat: [
        { tunnus: "muistutus-7", otsikko: "Muistutusviesti (Teams)", teksti: "Hei,\nmuistutan viestistäni pp.kk.\nKysyin: ___\nVoitko vastata tänään tai huomenna?" }
      ],
      sykli: true
    },
    9: {
      type: "naytto",
      rutiini: false,
      feature: "Valmis sovellus, työskentelysi ja oma osaamisesi on esitelty, ja aineisto on luovutettu.",
      connection: "Projektin päätöksessä näytät sekä valmiin Vektoripajan että sen, miten rakensit sovelluksen. Demo yhdistää käyttäjän työnkulun, yhden teknisen ratkaisun, virheenkorjauksen ja versionhallinnan konkreettiseksi kokonaisuudeksi. Itsearviointi ja linkitetty aineisto täydentävät luovutuksen, jonka teet asiakkaalle ja arvioijalle.",
      deliverable: "Jäädytetty repository · harjoiteltu demo · itsearviointi ohjaajalle · luovutettu näyttöaineisto.",
      why: "Arvioija näkee osaamisesi vain, jos työnäytteet löytyvät ja osaat selittää ne.",
      done: "Demo on pidetty 8–10 minuutissa, ja kaikki viisi osaa on näytetty. Itsearviointi on lähetetty ohjaajalle Teamsissa, ja aineisto on luovutettu perjantaina.",
      record: "Demon viisi osaa ja kesto, itsearvioinnin kolmen tilanteen päivät ja issue-numerot, itsearvioinnin lähetyspäivä, lause luovutetaan tänään 5.3.2027 sekä näyttömatriisin vaatimus: arvioi omaa toimintaa tiimin jäsenenä.",
      skills: ["Oman toiminnan arviointi", "Teknisen ratkaisun selittäminen", "Näyttöaineiston luovutus"],
      paivat: [
        ["Jäädytys", "Jäädytä sisältö. Vahvista näytön aika ja arvioijat ja sovi harjoituksen kuuntelija. Tarkista, että jokainen työnäyte on repositoryssa."],
        ["Aineisto", "Tarkista [[tiedosto:projektipaivakirja|projektipäiväkirja]], [[tiedosto:ai-loki|AI-loki]] ja [[naytto|näyttömatriisin]] linkit."],
        ["Demon harjoittelu", "Harjoittele demo ajastettuna kuuntelijan kanssa."],
        ["Puskuri", "Korjaa, mikä harjoituksessa jäi kesken. Kirjoita itsearviointi."],
        ["Demo ja luovutus", "Pidä demo. Kirjoita viikon kirjaus. Luovuta aineisto."]
      ],
      tehtavat: {
        "9-4": {
          miksi: "Näytön aika, paikka ja arvioijat ovat ohjaajan päätös viikolla 9. Tällä viikolla ei ole viikkorutiinia eikä palaveria, joten vahvistat ajan, paikan ja arvioijat maanantaina Teamsissa.",
          osat: [
            { otsikko: "Kysy näytön aika, paikka ja arvioijat", missa: "Maanantai 1.3.2027, Teams, keskustelu ohjaajan kanssa", tee: "Kopioi viesti ja lähetä se ohjaajalle. Ohje: [[ohje:teams]].", naet: "Ohjaaja vastaa ja kertoo ajan, paikan ja arvioijat rooleineen. Jatka odottaessasi työvaiheesta Tarkista viikkojen kirjausten työnäytteet ja palaa osatehtävään 2, kun vastaus tulee. Jos vastausta ei ole tiistaina, lähetä samaan keskusteluun muistutus: [[pohja:muistutus-9]].", koodi: "Hei Matti,\nvahvistatko näytön ajan, paikan ja arvioijat?\nKerro arvioijista myös roolit, koska kirjoitan julkiseen repositoryyn vain roolit.\nVektoripajan sivulla demo on perjantaina 5.3.2027.", koodiOtsikko: "Viesti ohjaajalle: kopioi tämä" },
            { otsikko: "Avaa suunnitelma", missa: "Kun ohjaaja on vastannut: VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:suunnitelma|project-docs/suunnitelma.md]]. Ohje: [[ohje:avaa-tiedosto]]. Etsi otsikko. Ohje: [[ohje:etsi-otsikko]].", naet: "Kursori on tyhjällä rivillä otsikon ### Näytön ajankohta ja arvioijat (viikko 9) ohjerivin jälkeen.", koodi: "### Näytön ajankohta ja arvioijat (viikko 9)", koodiOtsikko: "Otsikko: kopioi tämä hakuun" },
            { otsikko: "Kirjoita näytön ajankohta ja arvioijat", missa: "Tiedosto [[tiedosto:suunnitelma|suunnitelma.md]], otsikko ### Näytön ajankohta ja arvioijat (viikko 9)", tee: "Kirjoita kursorin kohdalle ohjaajan vahvistama aika ja paikka, arvioijien roolit ja ohjaajan vastauksen päivä.", naet: "Otsikon jälkeen ovat aika, paikka, arvioijien roolit ja päivä. Et kirjoita arvioijien nimiä, koska repository on julkinen. Jos ohjaaja kertoi vain nimet, kirjoita roolin tilalle arvioija 1 ja arvioija 2." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:suunnitelma|suunnitelma.md]] muutokset.", koodi: "Kirjaa näytön ajankohta ja arvioijat", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Näytön aika, paikka ja arvioijat on vahvistettu ja kirjattu GitHubiin.",
          tallenna: "Näytön ajankohta ja arvioijien roolit tiedostossa [[tiedosto:suunnitelma|suunnitelma.md]] GitHubissa.",
          esimerkki: "Reseptikirjan näyttö:\n### Näytön ajankohta ja arvioijat (viikko 9)\n> Ohjaajan päätös ja päivä.\nPerjantai 12.3.2027 klo 10, luokka B204. Arvioijat: ohjaaja ja asiakkaan edustaja. Ohjaaja vahvisti 8.3.2027.",
          eiRiita: "### Näytön ajankohta ja arvioijat (viikko 9)\nPerjantaina.\nKellonaika, paikka, arvioijat ja päivä puuttuvat.",
          sanat: []
        },
        "9-1": {
          versio: "2026-10-05",
          miksi: "Valmistelet näytön valmiin sovelluksen ja löydettävän aineiston pohjalta. Jokainen [[tiedosto:projektipaivakirja|päiväkirjan]] työnäyte pitää löytyä GitHubista.",
          osat: [
            { vanha: 0, otsikko: "Jäädytä sisältö", missa: "Maanantai 1.3.2027, oma työ", tee: "Älä lisää enää ominaisuuksia. Tällä viikolla teet vain aineiston tarkistuksen, demon ja luovutuksen.", naet: "Sisältö on jäädytetty. Sovellukseen ei tule enää uusia ominaisuuksia." },
            { vanha: 1, otsikko: "Tarkista, että kaikki on GitHubissa", missa: "VS Code, Source Control", tee: "Paina Ctrl+Shift+G. Jos Changes-listassa on tiedostoja, tee commit ja push. Ohje: [[ohje:commit]].", naet: "Changes-lista on tyhjä. Kaikki työ on GitHubissa." },
            { vanha: 1, otsikko: "Avaa projektipäiväkirja", missa: "Tiistai 2.3.2027, VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:projektipaivakirja|project-docs/projektipaivakirja.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Jokaisella viikolla on kohta Missä työnäyte on? Seuraavat neljä osatehtävää tarkistavat kohdan issuet, commitit, testit ja tiedostot." },
            { vanha: 1, otsikko: "Tarkista issuet", missa: "Selain, GitHub", tee: "Avaa jokaista mainittua issueta varten [[github:issues|repositoryn Issues-sivu]]. Napsauta osoiteriviä, paina End, kirjoita kauttaviiva ja issuen numero, esimerkiksi /12, ja paina Enter.", naet: "Issuen sivu aukeaa, ja otsikon perässä on sama numero, esimerkiksi #12. Pull requestin numero toimii samalla tavalla. Jos sivulla lukee 404, numero on väärin." },
            { vanha: 1, otsikko: "Tarkista commitit", missa: "Selain, GitHub", tee: "Avaa [[github:commits/main|repositoryn commit-lista]]. Paina Ctrl+F ja kirjoita [[tiedosto:projektipaivakirja|päiväkirjassa]] mainitun commitin tunnuksen seitsemän ensimmäistä merkkiä.", naet: "Tunnus on korostettuna listan rivillä. Commit-lista näyttää tunnuksesta vain seitsemän ensimmäistä merkkiä, joten 40 merkin tunnus löytyy sen seitsemällä ensimmäisellä merkillä. Jos tunnusta ei löydy, valitse sivun lopusta seuraava sivu (Next tai Older) ja hae uudelleen. Jos tunnusta ei löydy miltään sivulta, se on väärin." },
            { vanha: 1, otsikko: "Tarkista koodilla tehdyt testit ja tiedostot", missa: "VS Code", tee: "Testi: paina Ctrl+Shift+F ja kirjoita testifunktion nimen alku, esimerkiksi test_5_. Tiedosto: paina Ctrl+P ja kirjoita tiedoston nimi.", naet: "Hakupaneeli näyttää testin tiedoston ja rivin. Ctrl+P:n lista näyttää tiedoston, jos se on olemassa. Changes-lista oli tyhjä, joten sama tiedosto on myös GitHubissa. Käsin tehdyt testit tarkistat seuraavassa osatehtävässä." },
            { otsikko: "Tarkista käsin tehdyt testit", missa: "Selain, GitHub", tee: "Avaa jokaisen käsin tehdyn testin issue: testit 25 ja 26 ja korjauskorttien uusintatestit. Etsi issuesta testin kirjauskommentti, jonka ensimmäisellä rivillä lukee Testi.", naet: "Issuessa on kommentti, jossa ovat testin odotettu ja havaittu tulos. Jos [[tiedosto:projektipaivakirja|päiväkirjassa]] ei ole issuen numeroa, kirjoita [[github:issues?q=is%3Aissue|repositoryn issueiden]] hakukenttään testin nimi, esimerkiksi Testi 25, ja paina Enter. Haku löytää myös kommentit." },
            { vanha: 1, otsikko: "Korjaa väärät numerot", missa: "Tiedosto [[tiedosto:projektipaivakirja|projektipaivakirja.md]]", tee: "Jos jokin numero tai tunnus oli väärin, korjaa se oikeaksi. Ohje: [[ohje:kopioi-osoite]]. Tee sitten commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:projektipaivakirja|projektipaivakirja.md]] muutokset. Jos kaikki löytyi, Changes-lista on tyhjä, etkä tee committia. Jos työnäyte puuttuu kokonaan, lähetä ohjaajalle Teams-viesti. Ohje: [[ohje:teams]].", koodi: "Korjaa työnäytteiden numerot", koodiOtsikko: "Commit-viesti: kopioi tämä" }
          ],
          valmis: "Sisältö on jäädytetty, ja jokainen [[tiedosto:projektipaivakirja|päiväkirjan]] työnäyte löytyy GitHubista.",
          tallenna: "Repositoryn osoite ja aineiston linkit viikon kirjaukseen perjantaina.",
          sanat: []
        },
        "9-5": {
          perii: ["9-1"],
          miksi: "Näyttöön tarvitaan vähintään kolme perusteltua hylkäystä tai korjautusta ja kolme virheenkorjausketjua. Näyttömatriisin jokaisella rivillä pitää olla työnäyte.",
          osat: [
            { otsikko: "Avaa AI-loki", missa: "VS Code, Explorer", tee: "Avaa tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]]. Ohje: [[ohje:avaa-tiedosto]].", naet: "Tiedosto on auki. Omat merkintäsi ovat otsikon ## Merkinnät jälkeen." },
            { otsikko: "Tarkista päätökset ja perusteet", missa: "Tiedosto [[tiedosto:ai-loki|ai-loki.md]], otsikon ## Merkinnät jälkeen", tee: "Lue jokainen merkintä. Täydennä merkintään päätös tai peruste, jos se puuttuu.", naet: "Jokaisessa merkinnässä on päätös hyväksyn, korjautan tai hylkään ja yksi peruste." },
            { otsikko: "Laske hylkäykset ja korjautukset", missa: "Tiedosto [[tiedosto:ai-loki|ai-loki.md]]", tee: "Hae Ctrl+F:llä ensin Päätös: hylkään ja sitten Päätös: korjautan, ja kirjoita kummankin osumien määrä paperille. Laske luvut yhteen ja vähennä yksi, koska tiedoston esimerkkimerkinnässä on rivi Päätös: korjautan.", naet: "Hakukentän vieressä oleva 1 of 2 tarkoittaa kahta osumaa. Tuloksen pitää olla vähintään 3. Jos tulos on pienempi, kerro asiasta ohjaajalle Teamsissa. Ohje: [[ohje:teams]]." },
            { otsikko: "Tarkista virheenkorjausketjut", missa: "Selain, GitHub", tee: "Avaa [[github:issues?q=is%3Aissue+Virheenkorjausketju|issuet, joissa on sana Virheenkorjausketju]]. Laske listan issuet.", naet: "Listassa on kolme issueta: viikkojen 49, 4 ja 7 ketjut. Jos issueita on vähemmän, kerro asiasta ohjaajalle Teamsissa. Ohje: [[ohje:teams]]." },
            { otsikko: "Tee commit ja push", missa: "VS Code, Source Control", tee: "Jos täydensit merkintöjä, tee commit ja push. Ohje: [[ohje:commit]].", naet: "GitHubin commit-listassa ylimpänä on commit-viestisi. Kun avaat sen, näet tiedoston [[tiedosto:ai-loki|ai-loki.md]] muutokset. Jos et muuttanut mitään, rastita tämä osatehtävä.", koodi: "Täydennä AI-lokin perusteet", koodiOtsikko: "Commit-viesti: kopioi tämä" },
            { otsikko: "Tarkista näyttömatriisi", missa: "Selain, Vektoripajan sivu", tee: "Avaa [[naytto|näyttömatriisi]]. Tarkista, että jokainen rivi on rastitettu, paitsi rivi, jonka vaatimus on arvioi omaa toimintaa tiimin jäsenenä.", naet: "Näyttömatriisin alussa lukee 30 / 31. Rivin, jonka vaatimus on arvioi omaa toimintaa tiimin jäsenenä, rastitat perjantaina työvaiheessa Arvioi ja luovuta työsi, kun itsearviointi on tehty ja viikon kirjaus on GitHubissa. Jos jokin muu rivi on rastittamatta, linkitä sen työnäyte kuten [[vk 7|viikolla 7]] työvaiheessa Kokoa työnäytteiden linkit." }
          ],
          valmis: "[[tiedosto:ai-loki|AI-lokin]] jokaisessa merkinnässä on päätös ja peruste. Hylkäyksiä ja korjautuksia on vähintään kolme, ja ketjuja on kolme. [[naytto|Näyttömatriisin]] rivit on rastitettu, paitsi rivi, jonka vaatimus on arvioi omaa toimintaa tiimin jäsenenä.",
          tallenna: "Tarkistettu [[tiedosto:ai-loki|ai-loki.md]] GitHubissa. Aineiston linkit viikon kirjaukseen perjantaina.",
          sanat: []
        },
        "9-2": {
          versio: "2026-10-05",
          miksi: "Demo yhdistää käyttäjän työnkulun ja oman osaamisesi. Valmistelet ensin demon viiden osan näytettävät asiat.",
          osat: [
            { otsikko: "Sovi harjoituksen kuuntelija", missa: "Maanantai 1.3.2027", tee: "Pyydä yhtä henkilöä kuuntelemaan demon harjoitusta keskiviikkona 3.3.2027. Kuuntelijaksi kelpaa kuka tahansa, esimerkiksi toinen opiskelija.", naet: "Sinulla on kuuntelija ja kellonaika keskiviikolle. Jos et löydä kuuntelijaa, kysy ohjaajalta Teamsissa. Ohje: [[ohje:teams]]." },
            { vanha: 0, otsikko: "Avaa demon runko", missa: "Viikon sivun loppu, työvaiheiden jälkeen: kohta Demon runko (8–10 min)", tee: "Avaa demon runko: [[pohja:demon-runko-9]]. Lue viisi osaa ja niiden ajat.", naet: "Tiedät demon viisi osaa: tuotos, tekninen ratkaisu, korjattu virhe, Git-historia ja työnkulku yhdellä kortilla. Aikaa on yhteensä 8–10 minuuttia." },
            { otsikko: "Valmistele tuotoksen näyttö", missa: "Selain, Resurssienhallinta ja Vektoripaja", tee: "Lataa ja pura v1.0:n zip ja käynnistä Vektoripaja.exe. Ohje: [[ohje:release]]. Tuo sovellukseen piirros testiaineisto/oma-piirros.svg. Ohje: [[ohje:tiedostoikkuna]].", naet: "Piirros näkyy mallina. Demon osassa 1 näytät tämän version ja polun oma piirros → malli → .obj. Kun olet kokeillut polun, voit sulkea sovelluksen sulkupainikkeesta." },
            { vanha: 0, otsikko: "Valitse tekninen ratkaisu ja korjattu virhe", missa: "Paperi tai muistiinpanot", tee: "Valitse demoon yksi selittämistäsi funktioista: hierarkian muunnos (viikko 44), pivotin syötteen tarkistus (viikko 48) tai OBJ-objektijako (viikko 49). Valitse yksi korjattu virhe [[github:issues?q=is%3Aissue+is%3Aclosed+label%3Ahavainto+Virheenkorjausketju|suljetuista havaintoissueista, joissa on virheenkorjausketju]].", naet: "Paperilla on funktion nimi ja havaintoissuen numero. Funktion selitys on sen viikon kirjauksessa tiedostossa [[tiedosto:projektipaivakirja|projektipaivakirja.md]]. Havaintoissuen ketjussa on virheen syy omin sanoin." },
            { otsikko: "Avaa Git-historian sivut", missa: "Selain, GitHub", tee: "Avaa omille välilehdilleen [[github:issues?q=is%3Aissue|issuet]], [[github:commits/main|commit-lista]], [[github:pulls?q=is%3Apr|pull requestit]] ja [[github:tags|tagit]].", naet: "Neljä välilehteä on auki. Pull requestien listassa on viikon 3 Päivitä SVG -pull request, ja tagien listassa ovat muun muassa v0.1, v1.0-rc1 ja v1.0. Näytät nämä demon osassa 4." },
            { vanha: 1, otsikko: "Valitse työnkulun kortti", missa: "VS Code, tiedosto [[tiedosto:ai-loki|ai-loki.md]]", tee: "Etsi [[tiedosto:ai-loki|AI-lokista]] merkintä, jonka otsikkorivillä on GitHub Copilot, jonka päätös on hylkään tai korjautan ja jonka Aineistoviite on tehtäväkortin issue. Kirjoita paperille merkinnän päivä ja issuen numero.", naet: "Paperilla on kortin issuen numero ja merkinnän päivä. Tehtäväkortin issue on työsyklissä tehty kortti. Havaintoissue ei kelpaa, koska siinä ei ole otsikoita ## Tavoite ja ## Testi. Microsoft 365 Copilotin kortin muutos ei kelpaa, koska demon runko näyttää GitHub Copilotin ehdotuksen perustellun hylkäyksen tai korjautuksen. Jos sopivaa merkintää ei ole, kysy ohjaajalta Teamsissa, minkä kortin näytät. Ohje: [[ohje:teams]]." },
            { otsikko: "Avaa työnkulun sivut", missa: "Selain ja VS Code", tee: "Avaa selaimessa kortin issue ja napsauta tapahtumarivin closed this as completed in perässä olevaa commitin tunnusta. Avaa VS Codessa [[tiedosto:ai-loki|ai-loki.md]] ja hae Ctrl+F:llä merkinnän päivä.", naet: "Issuen oikeassa reunassa kohdassa Labels lukee tehtäväkortti, ja issuessa näkyvät oma rajaus kohdassa ## Tavoite ja odotettu tulos kohdassa ## Testi. Commitin sivulla näkyvät muutetut tiedostot. Lokimerkinnässä näkyvät GitHub Copilotin ehdotus, päätös ja peruste. Jos Labels-kohdassa lukee havainto, palaa osatehtävään 6 ja valitse toinen merkintä." },
            { vanha: 1, otsikko: "Harjoittele työnkulun osa", missa: "Selain ja VS Code, avatut sivut", tee: "Näytä kortin polku järjestyksessä: oma rajaus ja odotettu tulos, issue, GitHub Copilot, perusteltu hylkäys tai korjautus ja commit.", naet: "Osaat näyttää polun noin kahdessa minuutissa." }
          ],
          valmis: "Demon viiden osan näytettävät asiat on valittu, ja sovellus ja sivut ovat valmiina.",
          tallenna: "Demon runko ja valitut työnäytteet viikon kirjaukseen perjantaina.",
          esimerkki: "Tekninen ratkaisu omin sanoin: \"Hierarkian muunnos kutsuu itseään jokaiselle ryhmälle. Siksi korvat pysyvät pään lapsina, ja .obj-tiedostossa ne ovat omia objektejaan.\"",
          eiRiita: "\"Tein 3D-mallintimen Pythonilla.\" Demosta puuttuvat ratkaisu, korjattu virhe, historia ja työnkulku.",
          sanat: []
        },
        "9-7": {
          perii: ["9-2"],
          miksi: "Ajastettu harjoitus näyttää, mahtuuko demo 8–10 minuuttiin ja mikä kohta jää epäselväksi.",
          osat: [
            { otsikko: "Harjoittele demo ajastettuna", missa: "Keskiviikko 3.3.2027, sovittu kuuntelija", tee: "Käynnistä ajastin. Näytä demon viisi osaa kuuntelijalle järjestyksessä valmistelemillasi sivuilla ja sovelluksella.", naet: "Tiedät demon keston. Tiedät myös kohdan, joka kesti liian kauan tai jäi epäselväksi." },
            { otsikko: "Korjaa harjoituksen puutteet", missa: "Torstai 4.3.2027", tee: "Korjaa kohta, joka kesti liian kauan tai jäi epäselväksi. Harjoittele demo uudelleen ajastettuna.", naet: "Koko demo mahtuu 8–10 minuuttiin, ja kaikki viisi osaa näkyvät." }
          ],
          valmis: "Ajastettu 8–10 minuutin demo sisältää sovitut viisi osaa.",
          tallenna: "Demon kesto ja harjoittelun havainto viikon kirjaukseen perjantaina.",
          sanat: []
        },
        "9-3": {
          versio: "2026-10-05",
          miksi: "Itsearviointi ja luovutus päättävät projektin. Repository on julkinen, joten lähetät itsearvioinnin ohjaajalle Teamsissa.",
          osat: [
            { vanha: 0, otsikko: "Valitse kolme tilannetta", missa: "Torstai 4.3.2027, VS Code, tiedostot [[tiedosto:projektipaivakirja|projektipaivakirja.md]] ja [[tiedosto:ai-loki|ai-loki.md]]", tee: "Valitse eri viikoilta kolme tilannetta, joissa teit itse päätöksen ja joista on issue. Kirjoita jokaisen päivä ja issuen numero paperille.", naet: "Paperilla on kolme tilannetta. Jokaisesta on päivä ja issuen numero. Jos [[tiedosto:projektipaivakirja|päiväkirjassa]] on vain viikon otsikko, päivä löytyy [[tiedosto:ai-loki|AI-lokin]] merkinnästä tai issuen sivulta." },
            { vanha: 0, otsikko: "Avaa tyhjä välilehti ja liitä pohja", missa: "VS Code", tee: "Paina Ctrl+N, niin tyhjä välilehti Untitled-1 aukeaa. Kopioi pohja ja liitä se välilehdelle näppäimillä Ctrl+V.", naet: "Välilehdellä on pohja, jossa on kolme tilannetta. Et tallenna välilehteä, koska itsearviointi ei kuulu julkiseen repositoryyn.", koodi: "# Itsearviointi\n## Tilanne 1 (pp.kk., issue #__)\nMitä tapahtui: \nMitä tein: \nMitä tekisin toisin: \n\n## Tilanne 2 (pp.kk., issue #__)\nMitä tapahtui: \nMitä tein: \nMitä tekisin toisin: \n\n## Tilanne 3 (pp.kk., issue #__)\nMitä tapahtui: \nMitä tein: \nMitä tekisin toisin: ", koodiOtsikko: "Itsearvioinnin pohja: kopioi tämä" },
            { vanha: 0, otsikko: "Kirjoita itsearviointi", missa: "VS Code, välilehti Untitled-1", tee: "Kirjoita jokaisen tilanteen otsikkoon päivä ja issuen numero. Vastaa jokaisessa tilanteessa kolmeen kysymykseen omin sanoin.", naet: "Jokaisessa tilanteessa on päivä, issuen numero ja vastaukset kohtiin Mitä tapahtui, Mitä tein ja Mitä tekisin toisin." },
            { vanha: 0, otsikko: "Lähetä itsearviointi ohjaajalle", missa: "Teams, keskustelu ohjaajan kanssa", tee: "Paina välilehdellä Ctrl+A ja Ctrl+C. Lähetä teksti ohjaajalle. Ohje: [[ohje:teams]].", naet: "Itsearviointi näkyy keskustelussa. Se on ohjaajalla eikä julkisessa repositoryssa. Lähetyspäivä on tämän päivän päivämäärä: tarvitset sen viikon kirjauksessa ja luovutusviestissä." },
            { vanha: 0, otsikko: "Sulje välilehti tallentamatta", missa: "VS Code, välilehti Untitled-1", tee: "Sulje välilehti. Valitse Don't Save.", naet: "Välilehti on suljettu. Itsearviointi on vain Teamsissa." },
            { vanha: 1, otsikko: "Pidä demo", missa: "Perjantai 5.3.2027, näyttötilaisuus ohjaajan vahvistamassa ajassa ja paikassa", tee: "Pidä demo demon rungon mukaan: [[pohja:demon-runko-9]].", naet: "Demo kesti 8–10 minuuttia, ja näytit kaikki viisi osaa. Seuraavaksi kirjoitat viikon kirjauksen. Ohje on viikon sivun kohdassa Viikon kirjaus. Koska luovutusviesti lähtee kirjauksen jälkeen, kirjaukseen tulee lause luovutetaan tänään 5.3.2027." },
            { otsikko: "Rastita näyttömatriisin viimeinen rivi", missa: "Selain, [[naytto|näyttömatriisi]], perjantai 5.3.2027 viikon kirjauksen jälkeen", tee: "Kun viikon kirjaus on GitHubissa, avaa [[naytto|näyttömatriisi]] ja rastita rivi, jonka vaatimus on arvioi omaa toimintaa tiimin jäsenenä.", naet: "Näyttömatriisin alussa lukee 31 / 31. Rivin työnäyte on viikon 9 kirjauksen kohdassa Missä työnäyte on?: itsearvioinnin kolmen tilanteen päivät ja issue-numerot." },
            { vanha: 1, otsikko: "Luovuta aineisto", missa: "Teams, keskustelu, jossa ovat Matti Seise ja Antti Honkasalo, perjantai 5.3.2027 demon jälkeen", tee: "Kopioi viesti ja täydennä osoitteet ja itsearvioinnin lähetyspäivä. Lähetä viesti asiakkaille. Ohje: [[ohje:teams]].", naet: "Viesti on lähetetty perjantaina 5.3.2027, ja näyttöaineisto on luovutettu. Repositoryn osoite on [[github:/|repositoryn etusivun]] osoite, ja releasen osoite löytyy näin. Ohje: [[ohje:kopioi-osoite]], kohta Releasen osoite. Järjestys on demo, viikon kirjaus, näyttömatriisin viimeinen rivi ja tämä viesti, koska luovutettavassa repositoryssa pitää olla myös viimeinen kirjaus. Jos arvioija on joku muu kuin Matti tai Antti, kysy ohjaajalta, lähetätkö viestin myös hänelle.", koodi: "Hei Matti ja Antti,\nluovutan Vektoripajan näyttöaineiston.\nRepository: (repositoryn osoite)\nRelease v1.0: (releasen osoite)\nItsearviointi on lähetetty ohjaajalle pp.kk.", koodiOtsikko: "Luovutusviesti: kopioi tämä" }
          ],
          valmis: "Itsearviointi on lähetetty ohjaajalle, näyttömatriisissa lukee 31 / 31, ja sovellus sekä aineisto on esitelty ja luovutettu asiakkaille.",
          tallenna: "Itsearviointi ohjaajalle Teamsissa, ei repositoryyn. Itsearvioinnin lähetyspäivä ja lause luovutetaan tänään 5.3.2027 viikon kirjaukseen perjantaina ennen luovutusviestiä.",
          esimerkki: "Reseptikirjan tilanne:\n## Tilanne 1 (12.3., issue #7)\nMitä tapahtui: GitHub Copilot ehdotti muutosta myös testitiedostoon.\nMitä tein: Hylkäsin ehdotuksen ja pyysin muuttamaan vain tiedostoa haku.py.\nMitä tekisin toisin: Kirjoittaisin testitiedoston kortin Älä tee -kohtaan heti alussa.",
          eiRiita: "## Tilanne 1\nMitä tapahtui: Kaikki meni hyvin.\nPäivä ja issuen numero puuttuvat, eikä tekstistä näe, mitä teit.",
          sanat: []
        }
      },
      pohjat: [
        { tunnus: "demon-runko-9", otsikko: "Demon runko (8–10 min)", teksti: "1. Tuotos toiminnassa: oma piirros → malli → .obj (2 min)\n2. Yksi tekninen ratkaisu omin sanoin (2 min)\n3. Yksi korjattu virhe ja sen syy (1–2 min)\n4. Git-historia: issuet, commitit, pull request, tagit (1–2 min)\n5. Työnkulku yhdellä kortilla: rajaus ja odotettu tulos → issue → GitHub Copilot → perusteltu hylkäys tai korjautus → commit (2 min)" },
        { tunnus: "muistutus-9", otsikko: "Muistutus ohjaajalle: näytön aika (Teams)", teksti: "Hei Matti,\nmuistutan viestistäni pp.kk.: vahvistatko näytön ajan, paikan ja arvioijien roolit?\nKirjoitan ne suunnitelmaan tällä viikolla." }
      ]
    }
  },

  /* ---- sanasto: vain tämän projektin termit (runko v3 § 4, merkitykset v2:n mukaan) ----
     Jokainen termi selitetään myös ensimmäisen käytön kohdassa. */
  termisto: [
    { termi: "Copilot", nimi: "Microsoft 365 Copilot", selite: "Tekoäly selaimessa BC:n tunnuksella. Suunnittelee ja pilkkoo viikon tavoitteen tehtäväkorteiksi. Tässä projektissa sana Copilot tarkoittaa aina tätä.", viikko: 40 },
    { termi: "GitHub Copilot", nimi: "koodityökalu VS Codessa", selite: "Tekoäly, joka toteuttaa tehtäväkortin VS Codessa. Tässä projektissa sana GitHub Copilot tarkoittaa aina tätä.", viikko: 40 },
    { termi: "MVP", nimi: "Minimum Viable Product", selite: "Lyhenne sanoista Minimum Viable Product. Tässä projektissa MVP on sama kuin pakollinen ydin. [[tiedosto:suunnitelma|Suunnitelman]] otsikon MVP omin sanoin jälkeen kirjoitat, mitä pakolliseen ytimeen kuuluu.", viikko: 40 },
    { termi: "pakollinen ydin", selite: "Toiminnot, joiden pitää valmistua ennen joulua. Ilman niitä tuotosta ei ole. Lyhenne MVP tarkoittaa samaa. Toiminnot luetellaan [[toimeksianto#tekninen-ehdotus|toimeksiannon teknisessä ehdotuksessa]].", viikko: 40 },
    { termi: "tärkeä jatko", selite: "Toiminnot, jotka tehdään joululoman jälkeen, kun pakollinen ydin toimii.", viikko: 40 },
    { termi: "jatkolista", selite: "Toiminnot, jotka jäävät tämän näytön jälkeen tehtäviksi. Ne eivät ole hylättyjä.", viikko: 40 },
    { termi: "rajaus", selite: "Se, mitä projektissa tehdään ja mitä ei tehdä. Rajaus näkyy [[toimeksianto|toimeksiannossa]]: pakollinen ydin, tärkeä jatko ja jatkolista.", viikko: 40 },
    { termi: "SVG", nimi: "vektorikuva", selite: "Kuvan tiedostomuoto, jossa kuva koostuu poluista. Inkscape tallentaa piirrokset SVG-tiedostoiksi.", viikko: 40 },
    { termi: "low-poly", selite: "3D-malli, jossa on vähän monikulmioita. Pinnat näkyvät tasaisina, kulmikkaina paloina.", viikko: 40 },
    { termi: "tulkki", nimi: "Python-tulkki", selite: "Ohjelma, joka ajaa Python-koodin. Komento `python` käynnistää tulkin. Tässä projektissa käytetään Python 3.13:a.", viikko: 40 },
    { termi: "pip", nimi: "Pythonin paketinhallinta", selite: "Työkalu, joka asentaa Python-kirjastoja. Se tulee Pythonin mukana. Kirjastot asennetaan komennolla `pip install` virtuaaliympäristöön.", viikko: 40 },
    { termi: "virtuaaliympäristö", nimi: ".venv", selite: "Projektin oma Python-kansio `.venv`. Projektin kirjastot asennetaan sinne, joten ne eivät sekoitu koneen muihin Python-projekteihin. Kun virtuaaliympäristö on päällä, terminaalin rivin alussa lukee (.venv). Se luodaan viikolla 41.", viikko: 40 },
    { termi: "repository", nimi: "Git-repository", selite: "Projektin kansio GitHubissa. Siellä on koodi, historia ja issuet. Kaikki työnäytteet ovat repositoryssa.", viikko: 40 },
    { termi: "juuri", nimi: "repositoryn juuri", selite: "Repositoryn ylin kansio. Siinä ovat esimerkiksi README.md ja PROJEKTIN-TILA.md.", viikko: 40 },
    { termi: "README", selite: "Repositoryn etusivun ohje. Kertoo, mikä työkalu on ja miten sen saa käyttöön.", viikko: 40 },
    { termi: "kloonaus", selite: "Repositoryn kopiointi omalle koneelle. VS Code ja GitHub Copilot käsittelevät kloonattua kansiota.", viikko: 40 },
    { termi: "Git", selite: "Versionhallintaohjelma omalla koneellasi. Git tallentaa commitit. GitHub on verkkopalvelu, jossa repositorysi on, ja push lähettää commitit sinne.", viikko: 40 },
    { termi: "Explorer", nimi: "VS Coden tiedostolista", selite: "VS Coden vasemman reunan lista, jossa näkyvät repositoryn kansiot ja tiedostot. Se avautuu näppäimillä Ctrl+Shift+E.", viikko: 40 },
    { termi: "commit", selite: "Yksi nimetty muutos Gitissä. Commitilla on viesti ja tunnus.", viikko: 40 },
    { termi: "push", selite: "Commitien lähetys omalta koneelta GitHubiin.", viikko: 40 },
    { termi: "Collaborator", selite: "Henkilö, jolle repository on jaettu. Ohjaaja näkee ja voi kommentoida repositorya.", viikko: 40 },
    { termi: "tilatiedosto", nimi: "PROJEKTIN-TILA.md", selite: "Tiedosto, jossa on kohdat Valmista, Seuraavana, Tehdyt päätökset ja Avoimet kysymykset. Liität sen Copilotiin. Älä anna sitä GitHub Copilotille.", viikko: 40 },
    { termi: "viestipohja", selite: "Valmis viesti, jonka kopioit ja täydennät. Sivun Kopioi-nappi kopioi sen.", viikko: 40 },
    { termi: "krediitti", nimi: "GitHub Copilotin käyttöraha", selite: "200 krediittiä kuukaudessa. Yksi krediitti on 0,01 USD. Agenttitila kuluttaa niitä. Täydennykset ovat ilmaisia. Krediitit nollautuvat kuun 1. päivänä, eikä käyttämättömiä krediittejä siirry seuraavaan kuuhun.", viikko: 40 },
    { termi: "agenttitila", nimi: "Agent", selite: "GitHub Copilotin tila, joka muokkaa useaa tiedostoa. Kuluttaa krediittejä.", viikko: 40 },
    { termi: "käyttönäkymä", selite: "GitHubin sivu, jolla krediittien kulutus näkyy.", viikko: 40 },
    { termi: "projektipäiväkirja", selite: "Viikon kirjaus tiedostoon [[tiedosto:projektipaivakirja|project-docs/projektipaivakirja.md]]: mitä teit, miksi ja missä työnäyte on. Kirjoitetaan joka viikon viimeisenä työpäivänä.", viikko: 40 },
    { termi: "AI-loki", selite: "Tiedosto [[tiedosto:ai-loki|project-docs/ai-loki.md]], johon kirjaat tekoälyn käytön: mihin pyysit apua, hyväksyitkö, korjautitko vai hylkäsitkö ja miksi.", viikko: 40 },
    { termi: "korjautus", nimi: "korjautan", selite: "Pyydät tekoälyä korjaamaan vastaustaan. Korjautus on yksi kolmesta päätöksestä: hyväksyn, korjautan tai hylkään.", viikko: 40 },
    { termi: "viikon sivu", selite: "Yhden viikon ohje sivustolla. Se avautuu sivupalkin viikkolistasta. Siinä ovat viikon tavoite, viikkorutiini, työvaiheet ja kohta Viikon kirjaus.", viikko: 40 },
    { termi: "työvaihe", selite: "Viikon sivun yksi tehtävä. Työvaiheessa on osatehtäviä, ja jokaisessa niistä ovat kohdat Missä, Tee ja Näet nyt. Rastita osatehtävä, kun sen Näet nyt -kohta pitää paikkansa.", viikko: 40 },
    { termi: "viikkopalaveri", selite: "Viikon tapaaminen ohjaajan kanssa maanantaina tai tiistaina. Tiimi tarkoittaa tässä projektissa sinua ja ohjaajaa.", viikko: 40 },
    { termi: "työsykli", nimi: "kuusi askelta", selite: "Suunnittele, Siirrä, Rakenna, Tarkista, Raportoi ja Kirjaa. Sama jokaisessa tehtäväkortissa.", viikko: 41 },
    { termi: "tehtäväkortti", selite: "Yksi rajattu muutos sovellukseen. Kortissa on kuusi otsikkoa: tavoite, kaista, tiedostot, Älä tee -kohta, hyväksymiskriteerit ja testi. Tehtäväkortti kirjoitetaan issueen.", viikko: 41 },
    { termi: "hyväksymiskriteeri", selite: "Havaittava ehto, jonka pitää toteutua, jotta kortti on valmis. Esimerkiksi: kuutio näkyy ja pyörii.", viikko: 41 },
    { termi: "issue", nimi: "GitHub-issue", selite: "GitHubin tehtävä. Tehtäväkortti kirjoitetaan issueen, ja issuella on label tehtäväkortti. Issue suljetaan commit-viestin rivillä `Closes #N`, jossa N on issuen numero.", viikko: 41 },
    { termi: "label", nimi: "issuen tunniste", selite: "Tunniste, joka näkyy issuen oikeassa reunassa kohdassa Labels. Tässä projektissa labelit ovat tehtäväkortti ja havainto.", viikko: 41 },
    { termi: "mallikortti", selite: "Valmis esimerkkikortti, johon omaa korttia verrataan. Viikolla 41 siinä on myös testipohja.", viikko: 41 },
    { termi: "kaista", nimi: "Tiedosto, Täydennys tai Agentti", selite: "Toteutustapa. Tiedosto-kaista: Copilot kirjoittaa koodin yksi tiedosto kerrallaan. Täydennys-kaista (viikosta 43): kommentti ja täydennys VS Codessa, myös testit. Agentti-kaista (viikosta 44): GitHub Copilotin agenttitila useaan tiedostoon.", viikko: 41 },
    { termi: "testi", nimi: "numeroitu testitapaus", selite: "Testillä on numero ja nimi, esimerkiksi testi 1: kiertokulma. Numero kertoo järjestyksen: testi 1 on ensimmäinen, testi 2 toinen. Odotettu tulos kirjataan, ennen kuin koodi tehdään. Lisätesti on ylimääräinen testi ilman numeroa.", viikko: 41 },
    { termi: "tekninen pohja", nimi: "PySide6, PyVista, trimesh ja pytest", selite: "Sovelluksen perusta. PySide6 (Qt) tekee ikkunan ja painikkeet. PyVista piirtää 3D-näkymän. trimesh tekee 3D-kappaleet ja .obj-tiedoston. pytest ajaa testit.", viikko: 41 },
    { termi: "requirements.txt", nimi: "kirjastolista", selite: "Tiedosto, jossa ovat projektin kirjastot versioineen. Kirjastot asennetaan komennolla `pip install -r requirements.txt`. Uusi kirjasto lisätään tänne vain ohjaajan luvalla.", viikko: 41 },
    { termi: "tagi", selite: "Nimetty versio Gitissä, esimerkiksi v0.0.41, v0.1 tai v1.0. Tagin push käynnistää julkaisun.", viikko: 41 },
    { termi: "GitHub Actions", selite: "GitHubin automaatio. Kun pushaat tagin, automaatio ajaa testit ja tekee Windows-version. Sitten se ajaa Windows-versiolle itsetestin ja lisää zipin releaseen.", viikko: 41 },
    { termi: "ajo", nimi: "Actions-ajo", selite: "Yksi GitHub Actionsin suorituskerta. Ajo alkaa, kun pushaat tagin. Vihreä ✓ tarkoittaa, että ajo meni läpi, ja punainen ✗ tarkoittaa virhettä.", viikko: 41 },
    { termi: "paketointi", selite: "Sovellus ja sen kirjastot kootaan kansioksi, joka toimii ilman Pythonia. Tässä projektissa paketoinnin tekee PyInstaller tiedoston `vektoripaja.spec` ohjeilla.", viikko: 41 },
    { termi: "itsetesti", selite: "Sovelluksen oma tarkistus: `Vektoripaja.exe --itsetesti`. Se lukee esimerkki-SVG:n ja tekee siitä 3D-kappaleet ja .obj-tiedoston. Ikkunaa ei avata. GitHub Actions ajaa sen jokaiselle julkaisulle.", viikko: 41 },
    { termi: "release", nimi: "julkaisusivu", selite: "GitHubin sivu, josta valmiin version voi ladata. Tässä projektissa releasessa on zip, jossa on Windows-versio.", viikko: 41 },
    { termi: "zip", nimi: "pakattu kansio", selite: "Yksi tiedosto, jonka sisällä on kansio. Pura zip ennen käyttöä: hiiren oikea painike ja Pura kaikki.", viikko: 41 },
    { termi: "main", nimi: "päähaara", selite: "Repositoryn päälinja. Julkaisu tehdään päähaarasta.", viikko: 41 },
    { termi: "kahden yrityksen sääntö", selite: "Kun sama asia epäonnistuu kahdesti, lopetetaan yrittäminen ja palataan Copilotille.", viikko: 41 },
    { termi: "täydennys", selite: "GitHub Copilotin harmaa koodiehdotus VS Codessa. Hyväksytään Tab-näppäimellä. Ei kuluta krediittejä.", viikko: 43 },
    { termi: "moduuli", selite: "Kansio tai tiedosto, jolla on yksi vastuu. Esimerkiksi tuonti on eri moduuli kuin vienti.", viikko: 43 },
    { termi: "arkkitehtuuripäätös", selite: "Päätös sovelluksen rakenteesta: kansiot, moduulit ja rajapinnat. Sinä teet arkkitehtuuripäätökset, et tekoäly.", viikko: 43 },
    { termi: "havaintoissue", nimi: "label havainto", selite: "Issue, johon kirjataan virhe: mitä odotit, mitä tapahtui ja miten virheen saa toistettua. Suljetaan korjauscommitilla.", viikko: 43 },
    { termi: "layer", nimi: "Inkscapen taso", selite: "Inkscapen piirroksen taso. Layerin nimestä tulee mallin osan nimi.", viikko: 43 },
    { termi: "solmupuu", nimi: "vanhempi–lapsi-puu", selite: "Mallin rakenne, jossa jokainen osa on solmu. Solmulla on nimi, lapset ja oma muunnos. Kun vanhempi liikkuu, lapset liikkuvat mukana, koska lapsen paikka lasketaan vanhemman kautta.", viikko: 44 },
    { termi: "lapsi", nimi: "vanhempi ja lapsi", selite: "Osa, joka liikkuu toisen osan mukana. Esimerkiksi pää on vartalon lapsi: kun vartaloa siirretään, pää liikkuu mukana.", viikko: 44 },
    { termi: "maailmamuunnos", selite: "Osan lopullinen paikka, kierto ja koko 3D-näkymässä. Lasketaan näin: vanhemman maailmamuunnos kertaa osan oma muunnos.", viikko: 44 },
    { termi: "hierarkiapaneeli", selite: "Sovelluksen paneeli, joka näyttää solmupuun osat sisennettyinä.", viikko: 44 },
    { termi: "puhdas funktio", selite: "Funktio, joka ei muuta mitään itsensä ulkopuolella. Sama syöte antaa aina saman tuloksen.", viikko: 44 },
    { termi: "rajapinta", selite: "Funktion nimi, syöte ja paluuarvo. Rajapinta kirjoitetaan korttiin ennen toteutusta.", viikko: 44 },
    { termi: "revolve", nimi: "pyörähdyskappale", selite: "Puoliprofiili pyörähtää akselin ympäri, ja siitä syntyy kappale, esimerkiksi maljakko.", viikko: 45 },
    { termi: "orbit", selite: "Näkymän kierto hiirellä mallin ympäri.", viikko: 45 },
    { termi: "kysymystila", nimi: "Ask", selite: "GitHub Copilotin tila, joka vastaa kysymyksiin mutta ei muuta tiedostoja.", viikko: 45 },
    { termi: "inflate", nimi: "putki", selite: "Viivapolusta tulee putki, jossa on 3–8 sivua. Esimerkiksi johto tai sarvi.", viikko: 46 },
    { termi: "orientaatiowidget", nimi: "kameran suuntakuvio", selite: "Pieni akselikuvio näkymän kulmassa. Kun napsautat sen akselia, kamera kääntyy katsomaan mallia suoraan akselin suunnasta.", viikko: 46 },
    { termi: "suora näkymä", selite: "Katsot mallia tasan yhden akselin suunnasta, kuin pöydän reunalta tai ylhäältä. Määrittelytiedostossa LowPoly_Vector3D_Specification_Styled.md (kansio project-docs, kohta 3.2) tämän nimi on Orthographic Plane Snap. Suora näkymä ei ole ortografinen näkymä.", viikko: 46 },
    { termi: "ortografinen näkymä", selite: "Näkymä, jossa kaukana olevat osat eivät pienene kuten valokuvassa. Tehdään tärkeässä jatkossa. Pakollisessa ytimessä kaukana olevat osat näyttävät pienemmiltä, ja se on oikein.", viikko: 46 },
    { termi: "view lock", selite: "Painike, joka estää kameran kiertymisen, kun teet tarkkaa työtä.", viikko: 46 },
    { termi: "transformi", selite: "Osan siirto, kierto ja skaalaus.", viikko: 47 },
    { termi: "transformipaneeli", selite: "Paneeli, jossa osan siirto X, Y ja Z, kierto ja skaalaus syötetään numerokenttiin. Viikolla 48 siihen tulevat kiertopisteen eli pivotin kentät. Paneeli toimii myös näppäimistöllä.", viikko: 47 },
    { termi: "pivot", selite: "Piste, jonka ympäri kappale kiertää ja skaalautuu. Oletuksena keskipisteessä.", viikko: 48 },
    { termi: "OBJ", nimi: ".obj-tiedosto", selite: "3D-tiedostomuoto. Jokainen osa alkaa rivillä, jonka alussa on o-kirjain.", viikko: 49 },
    { termi: "virheenkorjausketju", selite: "Havainto → toistamisohje → syy → korjauscommit → uusintatesti → regressiotesti. Projektissa tehdään kolme ketjua.", viikko: 49 },
    { termi: "regressiotesti", selite: "Testi, joka toistaa korjatun virheen ja jää testeihin. Se varmistaa, ettei virhe palaa.", viikko: 49 },
    { termi: "vikatehtävä", selite: "Ohjaajan tekemä tarkoituksellinen virhe. Siitä tehdään virheenkorjausketju, jos aitoa havaintoa ei ole.", viikko: 49 },
    { termi: "JSON", nimi: "tallennusmuoto", selite: "Tekstimuotoinen tiedosto, johon projektin tiedot tallennetaan ja josta ne avataan uudelleen.", viikko: 50 },
    { termi: "tietoturva-arvio", selite: "Taulukko: uhka, testi, tulos ja toimenpide. Tässä projektissa uhkia ovat esimerkiksi haitallinen SVG ja rikottu JSON.", viikko: 50 },
    { termi: "katselmointi", selite: "Asiakas kokeilee versiota ja kertoo, mitä muutetaan. Asiakkaan sanat kirjataan erillään omasta tulkinnasta.", viikko: 51 },
    { termi: "prioriteetti", selite: "Asiakkaan antama tärkeysnumero. 1 on tärkein. Prioriteetti kirjataan jokaiseen katselmoinnissa sovittuun muutokseen ja tärkeän jatkon toimintoihin.", viikko: 51 },
    { termi: "haara", selite: "Oma työlinja. Muutokset eivät vaikuta päähaaraan, ennen kuin haara liitetään.", viikko: 3 },
    { termi: "pull request", nimi: "muutospyyntö", selite: "Muutospyyntö, jolla haara liitetään päähaaraan. Luet muutokset ennen liittämistä.", viikko: 3 },
    { termi: "merge", selite: "Haaran liittäminen päähaaraan.", viikko: 3 },
    { termi: "kahva", selite: "Tartuntakohta 3D-näkymässä. Kahvasta vetämällä osaa siirretään, kierretään tai skaalataan.", viikko: 5 },
    { termi: "ruudunlukija", nimi: "Lukija", selite: "Ohjelma, joka lukee näytön sisällön ääneen. Windowsin oma ruudunlukija on Lukija (Narrator). Se käynnistyy ja sammuu näppäimillä Ctrl + Windows-näppäin + Enter.", viikko: 5 },
    { termi: "Accessibility Insights", nimi: "Accessibility Insights for Windows", selite: "Microsoftin ilmainen työkalu, joka tarkistaa Windows-sovelluksen ikkunan saavutettavuuden. Sen pikatarkistus FastPass listaa löydetyt virheet, esimerkiksi painikkeen, jolta puuttuu nimi.", viikko: 5 },
    { termi: "RC", nimi: "julkaisuehdokas, release candidate", selite: "Versio, jossa sisältö on jäädytetty ja joka testataan ennen v1.0:aa. Tagi on v1.0-rc1.", viikko: 6 },
    { termi: "sisältöjäädytys", selite: "Uusia ominaisuuksia ei enää lisätä. Vain estävät virheet korjataan.", viikko: 6 },
    { termi: "julkaisutesti", selite: "Toinen henkilö kokeilee sovellusta omalla Windows-koneellaan ennen versiota v1.0. Hän on julkaisutestaaja. Tulokset kirjataan tiedostoon [[tiedosto:julkaisutesti|julkaisutesti.md]].", viikko: 6 },
    { termi: "työnäyte", selite: "Yksi tuotos, joka osoittaa osaamisesi: commit, issue, testi, kuva tai muistio.", viikko: 7 },
    { termi: "näyttömatriisi", selite: "Sivuston [[naytto|näyttömatriisi]] on lista tutkinnon vaatimuksista. Jokaisella rivillä on linkki työnäytteeseen.", viikko: 7 }
  ],

  /* ---- projektipäiväkirja: tiedosto repositoryssa (v2.8). repo = viikkokortin päiväkirjaosion ohje. ---- */
  paivakirja: {
    tiedostonimi: "projektipaivakirja.md",
    polku: "project-docs/projektipaivakirja.md",
    repo: {
      johdanto: "Kirjoita viikon kirjaus viikon viimeisenä työpäivänä tiedostoon [[tiedosto:projektipaivakirja|projektipaivakirja.md]]. Viikon otsikko on kopioitavana. Liitä se VS Coden hakuun, niin löydät oikean kohdan.",
      otsikko: "Vko {viikko} – {nimi}",
      vaiheet: [
        "Avaa tiedosto [[tiedosto:projektipaivakirja|project-docs/projektipaivakirja.md]]. Ohje: [[ohje:avaa-tiedosto]].",
        "Kopioi viikon otsikko Kopioi-painikkeella. Paina VS Codessa Ctrl+F, paina Ctrl+V ja sitten Enter. Paina Esc. Kursori on viikon otsikossa.",
        "Paina alanuolinäppäintä, kunnes kursori on tyhjällä rivillä otsikon ### Mitä tein ja miten? jälkeen. Näiden otsikoiden jälkeen ei ole >-riviä. Jos otsikon jälkeen on jo tekstiä, vie kursori sen viimeisen rivin loppuun ja paina Enter.",
        {
          funktio: "Kirjoita vastaukset kolmen kysymyksen alle. Mitä tein ja miten?: mitä teit, maanantain krediittiluku ja viikon funktion selitys selityspohjalla. Viikon funktio on {funktio}. Miksi tein näin?: päätökset ja perustelut. Missä työnäyte on?: Tallenna nämä tiedot -listan työnäytteiden numerot ja linkit sekä näyttömatriisin vaatimukset. Malli: [[tiedosto:projektipaivakirja]].",
          eiFunktiota: "Kirjoita vastaukset kolmen kysymyksen alle. Mitä tein ja miten?: mitä teit ja maanantain krediittiluku, jos katsoit sen. Tällä viikolla ei ole funktiota, joten selityspohjaa ei tarvita. Miksi tein näin?: päätökset ja perustelut. Missä työnäyte on?: Tallenna nämä tiedot -listan työnäytteiden numerot ja linkit sekä näyttömatriisin vaatimukset. Malli: [[tiedosto:projektipaivakirja]]."
        },
        "Numerot ja linkit löydät näin. Ohje: [[ohje:kopioi-osoite]].",
        "Tee commit ja push. Ohje: [[ohje:commit]]. Commit-viesti on kopioitavana."
      ],
      pohjat: [
        { otsikko: "Selityspohja funktiolle: kopioi ja täytä", vainFunktio: true, teksti: "Funktio ___ saa ___. Se palauttaa ___.\nValitsee (if-ehto): ___ (tai: ei valintaa)\nToistaa (silmukka tai rekursio): ___ (tai: ei toistoa)\nTesti ___ tarkistaa ___." },
        { otsikko: "Commit-viesti: kopioi tämä", teksti: "Kirjaa viikon {viikko} projektipäiväkirja" }
      ]
    }
  },

  /* ---- suunnitelma: dokumentti on repositoryssa (tiedostokortti suunnitelma). Tämä lohko antaa
     vain nimen ja tiedostonimen; siirtymän otsikot ovat siirtyma-lohkossa. ---- */
  suunnitelma: {
    otsikko: "Suunnitelma",
    tiedostonimi: "suunnitelma.md"
  },

  /* ---- opettaja-aineisto: näyttösuunnitelma ja dokumentointipohjat ---- */
  opettaja: {
    jakso: "Vk 40/2026–vk 9/2027 · syysloma vk 42 · joululoma 18.12.–10.1. · talviloma vk 8",
    deadline: "pe 5.3.2027",
    kansiKuvaus: "Low-poly 3D-mallinnin Windows-työpöytäsovelluksena (Python): Inkscapen SVG → 3D-malli → .obj. Tekoälyavusteinen työtapa: Microsoft 365 Copilot suunnittelee ja auttaa Tiedosto-kaistalla. GitHub Copilot avustaa VS Codessa.",
    kansiHuomiot: [
      "Repository on julkinen. Sinne ei laiteta henkilötietoja, testaajien nimiä eikä itsearviointia. Ne lähetetään ohjaajalle Teamsissa.",
      "Viikkopalaveri ohjaajan kanssa on maanantaina tai tiistaina. Päivä sovitaan viikolla 40.",
      "Dokumentit kirjoitetaan VS Codessa repositoryn project-docs-tiedostoihin, esimerkiksi project-docs/suunnitelma.md. Sivun ohjeet ovat Työtapa-näkymässä (Näin teet ja Dokumentit)."
    ],
    viimeisetPaivat: [
      ["Ma 1.3.", "Sisältöjäädytys: työnäytteet repositoryssa"],
      ["Ti 2.3.", "Aineisto: päiväkirja, AI-loki ja näyttömatriisin linkit"],
      ["Ke 3.3.", "Demon harjoittelu ajastettuna toiselle henkilölle"],
      ["To 4.3.", "Puskuri ja itsearviointi Teamsissa ohjaajalle"],
      ["Pe 5.3.", "Demo ja luovutus"]
    ],

    pohjat: {
      aloitusVko: 40,
      kysymyksia: 6,
      vertailuVko: 50,
      katselmointiVkot: "51 ja 6",
      testiVko: 49,
      testeja: 26,
      ketjuja: 3,
      lisenssiVko: 6
    },

    nayttosuunnitelma: {
      otsikko: "Näyttösuunnitelma · Vektoripaja",
      tiedosto: "nayttosuunnitelma.docx",
      johdanto: "Opettajan lähdeaineisto. Vaatimukset on luettu sivuston näyttömatriisista, joten tämä asiakirja pysyy sivuston kanssa yhdenmukaisena. Peruste: Tieto- ja viestintätekniikan perustutkinto, diaarinumero OPH-6216-2025 (perusteId 9816282). Viikkorunko on hyväksytty pedagogisessa tarkistuksessa (Linnea-portti, kierros 3, 23.9.2026) ennen sisällön kirjoittamista.",
      kohdeOtsikko: "1 · Näytön kohde ja ympäristö",
      kohde: [
        "Näyttö suoritetaan ohjattuna oppilaitosprojektina. Opiskelija toteuttaa low-poly 3D-mallintimen Windows-työpöytäsovelluksena, joka tekee Inkscapen SVG-piirroksesta 3D-mallin (revolve ja inflate), muuntaa layerit ja ryhmät vanhempi–lapsi-puuksi, tukee transformeja ja pivotia, näyttää mallin suorista näkymistä ja vie mallin .obj-tiedostoksi osat erillisinä. Toimeksiantajat ovat Matti Seise ja Antti Honkasalo. Matti Seise on myös ohjaaja.",
        "Näyttö kattaa kolme tutkinnon osaa: Ohjelmointi (45 osp, 10 vaatimusta tässä näytössä), Ohjelmistokehittäjänä toimiminen (45 osp, 14 vaatimusta) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (30 osp, 7 vaatimusta). Yhteensä 31 osaamisvaatimusta. Ohjelmoinnin vaatimus \"kirjoittaa ylläpidettävää ohjelmakoodia\" (p5) osoitetaan muulla tavalla ohjaajan päätöksellä 23.9.2026, koska koodin kirjoittaa tässä työtavassa pääosin tekoäly.",
        "Tekninen ympäristö: Python 3.13, PySide6 (Qt), PyVista ja pyvistaqt (VTK), trimesh ja numpy, svgelements, testit pytestillä. Julkaisu: GitHub Actions (windows-latest) tekee versiotagista PyInstallerilla Windows-version (onedir), ajaa pytestin ja valmiille .exe:lle itsetestin (--itsetesti) ja lisää zipin GitHubin releaseen. Valmis versio toimii ilman Pythonia. macOS-versiota ei tehdä. Opiskelija saa julkaisun, itsetestin ja kirjastolistan tiedostot viikon 41 pohjana (pohjat/vektoripaja-pohja.zip). Saavutettavuus mitataan Accessibility Insights for Windowsilla (FastPass), näppäimistötestillä ja Windowsin Lukijalla. Tekoälytyökalut: Microsoft 365 Copilot (BC, suunnittelu, pilkkominen ja Tiedosto-kaistan toteutus) ja GitHub Copilot (Student, toteutus VS Codessa). GitHub Copilotin budjetti on 200 krediittiä kuukaudessa.",
        "Aikataulu on päivätty: vk 40/2026 (ma 28.9.) – vk 9/2027 (pe 5.3.), 18 työviikkoa. Lomat vk 42, joululoma 18.12.–10.1. (vk 51 on neljä työpäivää) ja talviloma vk 8."
      ],
      p0: "Pakollinen ydin (P0, ennen joulua): SVG-tuonti · layerit ja ryhmät solmupuuksi · revolve 3–32 segmenttiä · inflate 3–8 sivua · valinta, siirto, kierto ja skaalaus, lapset seuraavat, pivot keskipisteessä ja prosentteina · orbit, suorat näkymät orientaatiowidgetistä ja view lock -painike · .obj-vienti osat erillisinä · tallennus ja avaus (JSON on ehdotus, valinta perustellaan viikolla 50). Tärkeä jatko (P1): Päivitä SVG, kulmasnappaus, pieni esikatseluikkuna (PiP), kierron kohderajaukset, oma teema ja isot kahvat, ortografinen näkymä, view lockin pikanäppäin.",
      roolit: [
        ["Opiskelija", "Pilkkoo tavoitteet tehtäväkorteiksi, tekee arkkitehtuuripäätökset, kirjoittaa testien odotetut arvot ennen toteutusta, hyväksyy, korjauttaa tai hylkää tekoälyn tuotoksen perustellen, selittää virheen syyn ja funktiot omin sanoin sekä kokoaa näyttöaineiston. Koodin kirjoittaa pääosin tekoäly."],
        ["Ohjaaja (Matti Seise)", "Viikkopalaveri ma tai ti (sovitut kortit issue-kommentteina, edellisen viikon funktio ääneen), pakollisen ytimen (P0) tarkistuspiste vk 47, vikatehtävä tarvittaessa, ohjaajan päätökset (tekijänimi, lisenssi, krediitit, katselmoinnin kirjaustapa, julkaisutestaaja, arviointi). Toimii tiimin jäsenen roolissa vk 2:n ratkaisuarviossa."],
        ["Asiakkaat (Matti Seise ja Antti Honkasalo)", "Vastaavat kysymyslistaan vk 40–41, katselmoivat MVP:n vk 51 (Antti release-zipistä omalla Windows-koneellaan, Matti opiskelijan koneella) ja antavat tärkeän jatkon (P1) prioriteetit. Vk 7 Antti vahvistaa, että v1.0-release toimii hänen Windows-koneellaan; Matti (Mac) vahvistaa demon tai opiskelijan koneen kautta. Kun Matti toimii asiakkaana, se kerrotaan tehtävässä."],
        ["Julkaisutestaaja (toinen opiskelija, vk 6)", "Kulkee README:n avulla koko polun Inkscape-piirroksesta .obj-tiedostoon ilman suullista apua. Nimi ja sanat toimitetaan ohjaajalle Teamsissa; repositoryyn kirjataan rooli. Nimetään viimeistään vk 5."],
        ["Arvioijat (vk 9)", "Ottavat vastaan demon ja näyttöaineiston. Ajankohta ja arvioijat sovitaan ohjaajan kanssa."]
      ],
      tarkistuspisteet: [
        [40, "Ympäristö ja repository", "Versiot, julkinen repository noreply-sähköpostilla, ohjaaja Collaboratorina, kolme pohjatiedostoa, suunnitelma.md omin sanoin, kysymyslista lähetetty, agenttipyynnön hinta kirjattu."],
        [41, "Harjoitussykli", "Kaksi issueta syklin tarkistuslistoineen, testin 1 (T01) oma arvo testikoodissa ennen toteutusta, tarkista_ymparisto.py läpi, release-zip v0.0.41 purettuna käynnistyy (testi 2, T02) ja itsetesti läpi Actionsissa, päätös teknisestä pohjasta B-osiossa."],
        [44, "Hierarkia ja Agentti-kaista (C)", "Testit 6–8 (T06–T08), puhdas muunnosfunktio rajapintoineen, maailmamuunnos puhtaana funktiona lisätesteineen, hierarkiapaneeli (QTreeWidget), valinnan toiminta B-osiossa. Agentti-kaistan (C) krediittikulutus kirjattuna."],
        [47, "Pakollisen ytimen (P0) tarkistuspiste", "Onko pakollinen ydin aikataulussa? Jos ei, ohjaaja päättää, mikä katselmoidaan keskeneräisenä ja mikä tehdään vk 4:llä omassa haarassa pull requestilla."],
        [49, "Vienti ja ketju 1", "Testit 19–20 (T19–T20), o-rivit trimeshin viennistä ja tarkistus Blenderissä, ensimmäinen virheenkorjausketju kuudella osalla ja regressiotestillä. Vikatehtävä, jos aitoa havaintoa ei ole."],
        [50, "MVP v0.1", "Tallennusvertailu omilla kriteereillä, testit 21–22 (T21–T22), tietoturva-arvio, tagi v0.1 ja release-zip, itsetesti läpi."],
        [51, "Katselmointi", "Antti kokeillut v0.1-zipiä omalla Windows-koneellaan, katselmointiloki rooleilla, asiakkaiden sanat erillään tulkinnasta, havainnot issueina prioriteetein, tilatiedosto lomaa varten."],
        [3, "Pull request", "Päivitä SVG omassa haarassa, testi 23 (T23), kaikki testit läpi ennen mergeä, pull request yhdistetty."],
        [6, "Julkaisuehdokas", "v1.0-rc1, README ja käyttöohje, julkaisutestaajan pöytäkirja epäröinteineen."],
        [7, "v1.0", "Estävät korjattu, ketju 3, tagi v1.0, asiakkaiden vahvistus, näyttömatriisi linkitetty."],
        [9, "Näyttö", "Demo 8–10 min viidellä osalla (mukana työnkulku yhdellä kortilla), itsearviointi Teamsissa, aineisto luovutettu."]
      ],
      tyonaytteet: {
        p1: ["40, 41, 2", "VS Code, GitHub Copilot, Python-virtuaaliympäristö ja pytest käytössä: versiot README:ssä, sovelluksen käynnistys ja testiajot, paluuviikon ajo"],
        p2: ["49, 4, 7 (havainnot 43→)", "Kolme virheenkorjausketjua havaintoissueista: havainto, toistamisohje, syy omin sanoin, korjauscommit, uusintatesti ja regressiotesti"],
        p3: ["41, 43–50, 3–5", "Testit 1–26 (T01–T26) ja lisätestit, myös maailmamuunnoksen lisätesti vk 44: odotettu tulos kirjoitettu itse testikoodiin ennen toteutusta, tulokset issueissa"],
        p4: ["44→45, 48→49, 49→50", "Rajapinta ennen toteutusta, selityspohja kolmesta funktiosta (hierarkian muunnos, pivotin syötteen tarkistus, OBJ-objektijako) sekä maailmamuunnos puhtaana funktiona (vk 44), selitys ääneen seuraavan viikon palaverissa (ohjaajan päätös 23.9.2026)"],
        p6: ["41, 44, 46, 47–48, 5", "Hierarkiapaneeli, view lock, transformipaneeli (QDoubleSpinBox ja pikanäppäimet) ja isot kahvat käyttöliittymävaatimuksen mukaan; Accessibility Insights ennen ja jälkeen"],
        p7: ["43, 45, 46, 47", "MVP-kuvauksesta kortit ja toiminnot: tuonti, revolve, inflate ja transformit hyväksymiskriteerien mukaan"],
        p8: ["41→7", "Issue-kommentit \"Sovittu viikkopalaverissa pp.kk.\" joka viikolta"],
        p9: ["44–45, 3", "Revolven valintatavan vertailu ja yhteinen päätös, osien tunnistustapa päivityksessä"],
        p10: ["51, 2", "Katselmointi asiakkaiden kanssa; ohjaaja tiimin roolissa arvioi MVP:n ratkaisut tärkeää jatkoa (P1) varten"],
        p11: ["9", "Itsearviointi kolmesta tilanteesta Teamsissa ohjaajalle; päiväkirjassa vain päivä ja issue"],
        s1: ["40, 41", "Kysymyslista asiakkaille, vastaukset kirjattuina kysymykset.md:hen, MVP omin sanoin"],
        s2: ["51, 6", "Demo katselmoinnissa, README ja käyttöohje käyttäjälle"],
        s3: ["51", "Katselmointiloki: asiakkaiden sanat, oma tulkinta, sovitut muutokset"],
        s4: ["40, 51, 2", "Karsinta pakolliseen ytimeen, tärkeään jatkoon ja jatkolistaan (P0/P1/P2) perusteluineen, asiakkaiden prioriteetit, tärkeän jatkon järjestys"],
        s5: ["41→", "Tehtäväkortit hyväksymiskriteereineen, oma rajausehdotus ja tarkistusrivi issueissa"],
        s6: ["40, 41→, 2", "Kaistan valinta ja toteuman vertailu RAPORTOI-askeleessa, krediittimittaus, tärkeän jatkon (P1) tuntiarviot"],
        s7: ["44–48, 3", "Hierarkia, revolve, inflate, transformit, pivot ja päivitys"],
        s8: ["50", "Tallennustapojen vertailu oman suunnitelman kriteereillä ja oman mallin tallennustiedoston koko"],
        s9: ["50", "JSON-tallennus ja avaus, versionumero ja rakenteen tarkistus"],
        s10: ["43, 49, 50", "QFileDialog, svgelements, trimesh-vienti ja JSON"],
        s11: ["43, 50", "Testi 4 (T04): haitallinen SVG, testi 22 (T22): rikottu tallennus, tietoturva-arvio uhka–testi–tulos–toimenpide"],
        s12: ["40→7", "Commitit rivillä Closes #N, tagit: harjoitus v0.0.41, viikkoversiot v0.0.43–v0.0.49, v0.1, v1.0-rc1 ja v1.0"],
        s13: ["3 (rästit 4)", "Haara, pull request ja merge päähaaraan kaikki testit läpi"],
        s14: ["41, 43–50, 7", "Releasen rakentaminen ja julkaisu GitHub Actionsilla (PyInstaller, itsetesti, zip): harjoitus v0.0.41, viikkoversiot v0.0.43–v0.0.49, MVP v0.1 ja v1.0"],
        k1: ["41", "PySide6 + PyVista + trimesh + pytest -pohja opiskelijan omin komennoin"],
        k2: ["43, 46", "kirjastot.md: svgelementsin ja putkigeometrian rajoitteet omilla tiedostoilla kokeiltuina"],
        k3: ["45–48", "trimeshin revolve, PyVistan tube-suodatin, kamera ja orientaatiowidget, Qt:n transformipaneeli"],
        k4: ["41", "pip-paketit omin komennoin, requirements.txt"],
        k5: ["43–50", "MVP v0.1 komponenttikirjastolla testeineen"],
        k6: ["50, 7", "Release asiakkaiden käyttöön; Antti vahvistaa v1.0:n omalla Windows-koneellaan, Matti demon tai opiskelijan koneen kautta"],
        k7: ["43, 6", "Dokumentointitapa sovittu vk 43, README ja käyttöohje vk 6"]
      },
      dokumentaatio: {
        kayttajalle: "README ja käyttöohje: työkalun avaaminen, Inkscapen nimeämissäännöt (layerit, ryhmät, mahdolliset nimimerkinnät), tuonti, revolve, inflate, transformit, pivot, kamera, vienti ja tallennus. Kirjoitetaan käyttäjälle, ei arvioijalle.",
        arviointiin: "Projektipäiväkirja vaatimustunnuksineen, AI-loki hyväksy/korjauta/hylkää-päätöksineen, suunnitelma A/B/C, issuet syklin tarkistuslistoineen, kirjastot.md, tietoturva.md, katselmointi.md, julkaisutesti.md, virheenkorjausketjut havaintoissueissa sekä linkitetty näyttömatriisi. Itsearviointi Teamsissa.",
        vaatimus: "Käyttöönotto-ohjeen kovavaatimus: toinen opiskelija kulkee README:n avulla koko polun Inkscape-piirroksesta .obj-tiedostoon ilman suullista apua (vk 6)."
      },
      tekoaly: [
        "Tekoälyrajaus poikkeaa rungosta tarkoituksella: koodin kirjoittaa pääosin tekoäly. Ydinosaaminen, jota näyttö arvioi, on vaatimusten pilkkominen tehtäväkorteiksi, arkkitehtuuripäätökset, testien odotetut arvot ennen toteutusta, tekoälyn tuotoksen hylkääminen tai korjauttaminen perustellusti, virheen syyn selittäminen, Git- ja issue-työskentely sekä koodin selittäminen (viikon funktio selityspohjalla ja ääneen palaverissa, demossa yksi tekninen ratkaisu).",
        "Työsykli: Suunnittele (Copilot) → Siirrä (GitHub) → Rakenna (testi ensin kaistalla B, toteutus kaistalla A, B tai C) → Tarkista (itse, oma arvo haetaan testikoodista) → Raportoi (Copilot) → Kirjaa. Jokainen tekoälyn vastaus kirjataan AI-lokiin päätöksellä hyväksyn, korjautan tai hylkään. Näyttöön vähintään kolme perusteltua hylkäystä tai korjautusta, demoon yksi.",
        "Viikot on rakennettu niin, ettei niitä voi suorittaa kopioimalla tehtävänantoa kielimalliin: joka viikko viikkopalaveri ohjaajan kanssa, oma Inkscape-tiedosto ja omat päätökset B-osiossa, omat testiarvot, issuet ja commitit GitHubissa, katselmointi asiakkaiden kanssa vk 51 ja julkaisutesti toisella opiskelijalla vk 6."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "v1.0-release: zip, itsetesti läpi, release-teksti ja tagi v1.0."],
        ["Repository", "Julkinen repository: koodi, testit, issuet syklin tarkistuslistoineen, pull request ja tagit v0.1, v1.0-rc1 ja v1.0."],
        ["Suunnitelma ja päiväkirja", "project-docs/suunnitelma.md, kysymykset.md, projektipaivakirja.md ja ai-loki.md. Päiväkirjasta commit joka viikolta."],
        ["Laatuaineisto", "Testit 1–26 (T01–T26) issueissa, kolme virheenkorjausketjua, kirjastot.md, tietoturva.md, Accessibility Insights ennen ja jälkeen."],
        ["Katselmoinnit", "katselmointi.md (vk 51) ja julkaisutesti.md (vk 6) rooleilla; nimet ja sanatarkat lausumat Teamsissa ohjaajalla."],
        ["Näyttöaineisto", "Linkitetty näyttömatriisi 31 vaatimukselle, demo ja itsearviointi (Teams)."]
      ],
      huomiot: [
        ["Ennen 28.9.2026", "GitHub Education -vahvistus ja Copilot Student -tilaus (vahvistus voi kestää päiviä), opiskelijan GitHub-tunnus ja tekijänimi, asennusoikeudet (VS Code ja Python-laajennus, Git, Python 3.13, Inkscape, Blender; Windowsissa myös Accessibility Insights for Windows), demorepository kuvaohjeiden kuvakaappauksia varten."],
        ["Kuvaohjeiden kuvakaappaukset", "kuvakaappaukset.json listaa kuvattavat näkymät, alt-tekstit ja numeroidut kohdat. Kuvat otetaan GitHubin Dark high contrast- ja VS Coden Dark High Contrast -teemassa, M365 Copilot BC:n tenantista, rajattuina yhteen kohtaan. Kuvan lisäämisen jälkeen kohtien alueet (alue: x, y, leveys, korkeus prosentteina) asetetaan kuvan mukaan. tarkista.js varoittaa puuttuvista kuvista."],
        ["p5 osoitetaan muulla tavalla", "Vaatimus \"kirjoittaa ylläpidettävää ohjelmakoodia\" ei ole matriisissa rastina (ohjaajan päätös 23.9.2026). Osoitustapa sovitaan erikseen."],
        ["Krediitit", "200 krediittiä kuukaudessa ei välttämättä riitä agenttitilaan. Lisärahoitus (lisäkrediitit vai BC:n organisaatiolisenssi) on avoin ohjaajan päätös, takaraja lokakuun loppu. Alle 25 % jäljellä → kaistat A ja B kuun loppuun."],
        ["Pakollisen ytimen (P0) tarkistuspiste vk 47", "Jos pakollinen ydin on myöhässä, ohjaaja päättää viikon 47 palaverissa, mikä katselmoidaan keskeneräisenä ja mikä tehdään vk 4:llä omassa haarassa pull requestilla."],
        ["Aidot bugit", "Virheenkorjausketjut tehdään havaintoissueista. Jos aitoja havaintoja ei ole, ohjaaja antaa vikatehtävän. Keksittyjä bugeja ei kirjata."],
        ["Julkisuuden raja", "Itsearviointi, ohjaajan kommentti sekä testaajien ja katselmoijien nimet ja sanatarkat lausumat eivät kuulu julkiseen repositoryyn. Ne lähetetään Teamsissa tai sähköpostilla. Repositoryyn kirjataan roolit."],
        ["Opettajan tarkistusavain", "Testien odotetut tulokset eivät näy sivulla. Tarkistusavain on pedagogisessa rungossa (01-runko-v3.md § 13)."]
      ]
    }
  }
};
