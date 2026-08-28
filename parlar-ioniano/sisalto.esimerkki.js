/*
 * sisalto.js – projektin KOKO sisältödata. Tämä on esimerkki, jossa on kolme
 * viikkoa mallina; oikeassa projektissa jokaisella viikolla on oma lohko.
 *
 * app.js ei sisällä yhtään projektikohtaista merkkijonoa. Jos jotain ei saa
 * sanottua tämän skeeman kautta, skeemaan lisätään kenttä — ei app.js:ään.
 *
 * Pakolliset ylätason kentät: slug, nimi, vuosi, viikot, vaiheet, viikkoNimet,
 * kehykset, viikkoOhjeet. Loput ovat valinnaisia.
 */
window.NAYTTOPROJEKTI = {
  /* ---- perustiedot ---- */
  slug: "esimerkkiprojekti",          // localStorage-avainten etuliite, myös tiedostonimissä
  nimi: "Esimerkkiprojekti",          // näkyy otsikoissa ja latauksissa
  vuosi: 2026,                        // luku tai [2026, 2027] jos jakso ylittää vuodenvaihteen
  viikot: [34, 35, 36],               // KAIKKI viikot järjestyksessä, lomaviikot mukaan lukien
  lomaViikot: [42],                   // ei week-card vaan holiday-card
  aloitusNappi: "Aloita projekti",    // "Aloita paketin rakentaminen", "Aloita pelin teko", …
  apuOtsikko: "Tarvitsen toteutusapua",

  /* ---- vaiheet: viikkonavigaation ja vaihelohkojen jako ---- */
  vaiheet: [
    { tunnus: "A", lyhyt: "Ydin",      otsikko: "Projektin ydin: idea, työkalut ja ensimmäinen tulos", viikot: [34, 35, 36, 37], vari: "#8d5a2b" },
    { tunnus: "B", lyhyt: "Featuret",  otsikko: "Featuret ja katselmointi",                            viikot: [38, 39, 40, 41], vari: "#1a6fae" },
    { tunnus: "C", lyhyt: "Valmiiksi", otsikko: "Valmiiksi: palautemuutos, laatu ja testaus",          viikot: [43, 44, 45, 46], vari: "#c03434" },
    { tunnus: "D", lyhyt: "Julkaisu",  otsikko: "Julkaisu ja näyttö",                                  viikot: [47, 48, 49], vari: "#7c3aed" }
  ],

  /* ---- viikkonavigaation lyhyet nimet: 1–3 sanaa ---- */
  viikkoNimet: {
    34: "Aloitus",
    35: "Suunnitelma",
    36: "Ensimmäinen tulos",
    42: "Syysloma"
  },

  /* ---- viikkotyyppien kehystekstit ----
     Viikkotyyppi kertoo, millä kielellä viikosta puhutaan. Tyypit ovat vapaita,
     mutta pidä ne samoina koko projektissa. Vähintään: feature, pohjustus,
     katselmointi, laatu, julkaisu, naytto. */
  kehykset: {
    feature: {
      kicker: "Viikon tulos",
      connectionLabel: "Näin tulos rakentuu:",
      deliverableLabel: "Valmistuu tällä viikolla",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    pohjustus: {
      kicker: "Pohjustus",
      connectionLabel: "Näin viikko vie projektia eteenpäin:",
      deliverableLabel: "Tällä viikolla valmistuu",
      skillsLabel: "Viikon tekniikka: arvioidaan näytössä"
    },
    katselmointi: {
      kicker: "Katselmointi: työ testissä",
      connectionLabel: "Näin viikko vie projektia eteenpäin:",
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

  /* ---- projektipäiväkirjan asetukset (valinnainen) ---- */
  paivakirja: {
    tiedostonimi: "projektipaivakirja.md",
    polku: "project-docs/projektipaivakirja.md",
    vihjeet: {
      work: "Kerro konkreettiset tiedostot, ratkaisut, tehtävät ja testit.",
      reason: "Kerro päätös, vaihtoehdot, perustelu ja mitä opit.",
      evidence: "Esim. commit-linkki, issue #12 tai testi T05.",
      next: "Mikä on ensimmäinen asia, josta jatkat seuraavalla kerralla?"
    }
  },

  /* ---- suunnitelmadokumentti: GDD, asset-pack-suunnitelma tai tekninen suunnitelma ----
     pakolliset[]  = kenttänimet joita statuslaskuri seuraa (data-plan-field)
     markdown(ctx) = tuottaa ladattavan tiedoston. ctx.arvo(kenttä, oletus),
                     ctx.onTäytetty(kenttä), ctx.raaka (kaikki arvot), ctx.pvm.
     Esitäytetyt osiot kirjoitetaan TÄHÄN ja peilataan index.html:n
     .plan-prefilled-lohkoon — ne kaksi eivät saa erkaantua. */
  suunnitelma: {
    otsikko: "Tekninen suunnitelma",
    tiedostonimi: "suunnitelma.md",
    pakolliset: ["nimi", "tekija", "tavoite", "kohde", "perustelut"],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      `# Tekninen suunnitelma – ${arvo("nimi", "_(nimi puuttuu)_")}`,
      "",
      `Tekijä: ${arvo("tekija")} · Päivitetty: ${pvm}`,
      "",
      "## 1. Konsepti",
      "",
      "Esitäytetty teksti toimeksiannosta.",
      "",
      "## 2. Tavoite omin sanoin",
      "",
      arvo("tavoite"),
      "",
      "## 3. Kohderyhmä",
      "",
      arvo("kohde"),
      "",
      "## 4. Perustelut",
      "",
      arvo("perustelut"),
      "",
      "## 5. Ohjaajan kanssa sovittavat asiat",
      "",
      onTäytetty("lisenssi")
        ? `- Lisenssi: ${arvo("lisenssi")}`
        : "- Lisenssi: EI VIELÄ SOVITTU — avoin asia",
      "",
      "---",
      "",
      "Tallenna tämä tiedosto polkuun `project-docs/suunnitelma.md` ja tee commit.",
      ""
    ].join("\n")
  },

  /* ---- viikkojen ohjaava sisältö ----
     Jokainen kenttä näkyy viikkokortissa. Pakolliset: type, feature, connection,
     deliverable, why, done, record, skills, steps, example, notEnough.
     Valinnaiset: excerpt (ote toimeksiannosta), resources, help. */
  viikkoOhjeet: {
    34: {
      type: "pohjustus",
      feature: "Viikon jälkeen tiedät, mitä tehdään ja kenelle. Tyhjä projekti kääntyy ja on repositoryssa.",
      excerpt: "Haluan pienen sovelluksen, jota voin itse kokeilla selaimessa.",
      connection: "Työ alkaa toimeksiannosta: ennen ensimmäistä riviä päätät, mikä on tavoite, kenelle se tehdään ja millä välineillä.",
      deliverable: "Tarvekartoitus, tyhjä kääntyvä projekti ja Git-repository.",
      why: "Jos avoimet asiat jäävät oletuksiksi, voit rakentaa väärän tuotoksen. Varhainen tekninen testi varmistaa, että ympäristö toimii ennen varsinaista työtä.",
      done: "Toinen henkilö pystyy avaamaan repositoryn ja ymmärtää README:stä, mitä olet tekemässä.",
      record: "Kirjoita Vko 34 -merkintään: toimeksiannon avoimet asiat, kysymyslista, repositoryn linkki ja ensimmäisen commitin tunnus.",
      skills: ["vaatimusten luku", "kehitysympäristö", "versionhallinta"],
      steps: [
        ["Merkitse vaatimukset.", "Alleviivaa toimeksiannosta pakolliset asiat ja kirjoita epäselvät kohdat kysymyksiksi."],
        ["Pidä 15 minuutin aloituskeskustelu.", "Kirjaa jokainen vastaus päätökseksi, avoimeksi asiaksi tai oletukseksi."],
        ["Tee tyhjä tekninen testi.", "Luo projekti ja varmista että se kääntyy ja käynnistyy ennen logiikkaa."],
        ["Tallenna lähtötilanne.", "Lisää README ja .gitignore. Tee commit, jonka viesti kertoo projektin perustamisesta."]
      ],
      // Toteutusapu: näytetään avattavana lohkona. Kaikki neljä kenttää pakollisia jos help on olemassa.
      help: {
        title: "Perusta projekti ja repository",
        tree: "projekti/\n├─ src/\n├─ project-docs/\n├─ README.md\n└─ .gitignore",
        actions: [
          "Luo kansiorakenne ja tyhjä lähdetiedosto.",
          "git init, ensimmäinen commit, luo GitHubiin repository ja push."
        ],
        code: "ALOITUKSEN TARKISTUSLISTA\n[ ] projekti kääntyy\n[ ] README kertoo mitä tehdään\n[ ] .gitignore estää build-kansiot\n[ ] ensimmäinen commit pushattu",
        test: "Kloonaa repository toiseen kansioon ja varmista, että projekti kääntyy pelkän README:n ohjeilla.",
        links: [["GitHub Docs: Repositoryn luominen", "https://docs.github.com/en/repositories"]],
        images: [["assets/vko34-repo.png", "Kuvakaappaus uudesta repositorysta", "Ensimmäinen commit"]]
      },
      example: "README: tavoite, kohderyhmä, käännösohje ja tunnetut puutteet. Commit “Perusta projekti ja kansiorakenne”.",
      notEnough: "”Tein projektin” ilman kysymyslistaa, kohderyhmää ja toimivaa käännöstä ei osoita vaatimusten ymmärtämistä."
    },
    35: {
      type: "pohjustus",
      feature: "Suunnitelma on kirjoitettu ja työ on pilkottu 0,5–1 päivän tehtäviksi.",
      connection: "Suunnitelmasta syntyy tehtävälista, jonka mukaan loput viikot etenevät.",
      deliverable: "Ladattu suunnitelma.md repositoryssa ja priorisoitu tehtävälista.",
      why: "Ilman P0/P1/P2-priorisointia projekti laajenee ja loppuviikot menevät kesken jääneisiin ominaisuuksiin.",
      done: "Jokainen P0-tehtävä on oma issue, jolla on valmis kun -ehto.",
      record: "Kirjoita Vko 35 -merkintään: omat päätökset perusteluineen ja linkki tehtävälistaan.",
      skills: ["suunnittelu", "priorisointi", "työn ositus"],
      resources: [["Avaa suunnitelmalomake", "#suunnitelma", false]],
      steps: [
        ["Täytä suunnitelma.", "Kirjoita omat päätökset ja lataa suunnitelma.md repositoryyn."],
        ["Pilko työ.", "Tee issuet, joissa jokaisessa on valmis kun -ehto."],
        ["Priorisoi.", "Merkitse P0 (pakollinen), P1 (tärkeä) ja P2 (jos aikaa jää)."]
      ],
      example: "Suunnitelma: tavoite, kohderyhmä, 3 päätöstä perusteluineen. 9 issueta, joista 5 on P0.",
      notEnough: "Tekoälyn kirjoittama yleisluontoinen suunnitelma, jota ei ole kytketty omaan toimeksiantoon."
    },
    36: {
      type: "feature",
      feature: "Ensimmäinen oma toiminto on valmis ja testattu.",
      connection: "Suunnitelman ensimmäinen P0-tehtävä toteutetaan alusta loppuun, testi mukaan lukien.",
      deliverable: "Toimiva toiminto, sen testi ja commit.",
      why: "Yksi kokonaan valmis toiminto opettaa enemmän kuin kolme kesken jäänyttä.",
      done: "Toiminto toimii myös reunatapauksessa, ja testin tulos on kirjattu.",
      record: "Kirjoita Vko 36 -merkintään: mitä toteutit, mikä oli vaikeinta ja miten testasit.",
      skills: ["toteutus", "testaus", "commit-hygienia"],
      steps: [
        ["Toteuta pienin toimiva versio.", "Älä lisää mitään, mitä valmis kun -ehto ei vaadi."],
        ["Kirjoita testi ennen korjausta.", "Odotettu tulos ensin, sitten havaittu tulos."],
        ["Committaa pienesti.", "Yksi commit per looginen muutos."]
      ],
      example: "Toiminto T01: syöte → odotettu tulos → toteutunut tulos → commit abc1234.",
      notEnough: "Toiminto, joka toimii vain yhdellä syötteellä eikä ole testattu reunatapauksella."
    }
  }
};
