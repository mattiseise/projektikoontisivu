/*
 * Näyttöprojektien koonti. Yksi olio per projekti.
 *
 * Lisääminen: python3 scripts/lisaa_koontiin.py projekti.json --koonti .
 * (näyttöprojekti-skilli ajaa tämän automaattisesti). Käsin lisättäessä pidä
 * muoto samana — tiedosto on window.PROJEKTIT = <JSON>; eikä siinä saa olla
 * kommentteja JSON-lohkon sisällä.
 *
 * Kentät:
 *   slug           yksilöivä tunnus, sama kuin projektin repositoryssa
 *   nimi           näkyvä nimi
 *   tyyppi         peli | web | ohjelmointi | kyber | ittuki | muu
 *   tila           kaynnissa | paattynyt
 *   kieli          sivuston kieli, jos EI suomi: "en" | "sv" (näkyy kortissa lippumerkkinä)
 *   kuvaus         1–2 virkettä opiskelijalle: mitä tässä tehdään
 *   lukuvuosi      "2026–27"
 *   viikot         "vko 34–49"
 *   kesto          projektin pituus, esim. "14 viikkoa", tyhjä jos ei haluta näyttää
 *   ryhma          opiskelijaryhmän tunnus, tyhjä jos ei haluta näyttää
 *   tekniikat      lista
 *   sivusto        julkaistu GitHub Pages -osoite
 *   repo           repositoryn osoite
 *   kuva           kuvat/<slug>.jpg tai tyhjä
 *   tutkinto       tutkinnon nimi
 *   diaarinumero   ePerusteiden diaarinumero
 *   vaatimuksia    osaamisvaatimusten kokonaismäärä
 *   luovutus       "pe 4.12.2026"
 *   tutkinnonOsat  [{ nimi, vaatimuksia }]
 */
window.PROJEKTIT = [
  {
    "slug": "kahvilakoodi",
    "nimi": "KahvilaKoodi",
    "tyyppi": "peli",
    "tila": "kaynnissa",
    "kuvaus": "Koulun kahvilapeli Unitylla: asiakkaat tilaavat, pelaaja toimittaa, vaikeus kasvaa ja tulokset tallentuvat. Peli julkaistaan WebGL-buildina, jota kuka tahansa voi kokeilla selaimessa.",
    "lukuvuosi": "2026–27",
    "viikot": "vko 34–49",
    "kesto": "14 viikkoa",
    "ryhma": "",
    "tekniikat": [
      "Unity",
      "C#",
      "JSON",
      "PlayerPrefs",
      "Git",
      "WebGL"
    ],
    "sivusto": "https://mattiseise.github.io/pelinayttoprojektit/",
    "repo": "https://github.com/mattiseise/pelinayttoprojektit",
    "kuva": "kuvat/kahvilakoodi.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-4948-2021",
    "vaatimuksia": 32,
    "luovutus": "pe 4.12.2026",
    "tutkinnonOsat": [
      {
        "nimi": "Ohjelmointi",
        "vaatimuksia": 11
      },
      {
        "nimi": "Ohjelmistokehittäjänä toimiminen",
        "vaatimuksia": 14
      },
      {
        "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla",
        "vaatimuksia": 7
      }
    ]
  },
  {
    "slug": "bittibiomi",
    "nimi": "BittiBiomi",
    "tyyppi": "peli",
    "tila": "kaynnissa",
    "kuvaus": "Oma teemapaketti Minecraft Java Editioniin: itse piirretyt tekstuurit, Blockbench-mallit, äänet ja datapaketin skriptit. Valmis paketti julkaistaan avoimella lisenssillä, ja kuka tahansa voi ladata ja asentaa sen.",
    "lukuvuosi": "2026–27",
    "viikot": "vko 34–49",
    "kesto": "14 viikkoa",
    "ryhma": "",
    "tekniikat": [
      "Minecraft Java",
      "Blockbench",
      "Piskel",
      "JSON",
      "mcfunction",
      "Git"
    ],
    "sivusto": "https://mattiseise.github.io/bittibiomi/",
    "repo": "https://github.com/mattiseise/bittibiomi",
    "kuva": "kuvat/bittibiomi.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-4948-2021",
    "vaatimuksia": 32,
    "luovutus": "pe 4.12.2026",
    "tutkinnonOsat": [
      {
        "nimi": "Ohjelmointi",
        "vaatimuksia": 11
      },
      {
        "nimi": "Ohjelmistokehittäjänä toimiminen",
        "vaatimuksia": 14
      },
      {
        "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla",
        "vaatimuksia": 7
      }
    ]
  },
  {
    "slug": "pingpongtanks",
    "nimi": "Ping Pong Tanks",
    "tyyppi": "peli",
    "tila": "kaynnissa",
    "kieli": "en",
    "kuvaus": "Kahden pelaajan tankkiareena samalla näppäimistöllä: kimpoavat ammukset, DFS-generoitu sokkelo ja power-upit. Oma GDD toteutetaan Unitylla MVP:ksi asti. Sivusto ja projektidokumentaatio ovat englanniksi.",
    "lukuvuosi": "2026–27",
    "viikot": "vko 36–49",
    "kesto": "13 työviikkoa",
    "ryhma": "",
    "tekniikat": [
      "Unity",
      "C#",
      "Git",
      "GitHub"
    ],
    "sivusto": "https://mattiseise.github.io/projekti_pingpongtanks/",
    "repo": "https://github.com/mattiseise/projekti_pingpongtanks",
    "kuva": "kuvat/pingpongtanks.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "",
    "vaatimuksia": 0,
    "luovutus": "pe 4.12.2026",
    "tutkinnonOsat": []
  },
  {
    "slug": "parlar-ioniano",
    "nimi": "Parlar Ioniano",
    "tyyppi": "web",
    "tila": "kaynnissa",
    "kieli": "en",
    "kuvaus": "Opiskelija esittelee itse luomansa kielen: käsin kirjoitettu HTML/CSS/JS-sivusto, jossa Bootstrap on komponenttikirjastona, kielioppitaulukot tulevat JSON-datasta fetchillä, numeromuunnin on rakennettu itse alusta ilman kirjastoa ja tuotos julkaistaan GitHub Pagesiin. Ei käännösvaihetta eikä bundleria. Koko projekti englanniksi.",
    "lukuvuosi": "2026–27",
    "viikot": "vko 36–49",
    "kesto": "11 työviikkoa",
    "ryhma": "Joustava",
    "tekniikat": [
      "HTML",
      "CSS",
      "JavaScript",
      "JSON",
      "Bootstrap",
      "Git",
      "GitHub Pages"
    ],
    "sivusto": "https://mattiseise.github.io/projektikoontisivu/parlar-ioniano/",
    "repo": "https://github.com/mattiseise/projektikoontisivu",
    "kuva": "kuvat/parlar-ioniano.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-6216-2025",
    "vaatimuksia": 44,
    "luovutus": "pe 4.12.2026",
    "tutkinnonOsat": [
      {
        "nimi": "Tieto- ja viestintätekniikan perustehtävät",
        "vaatimuksia": 12
      },
      {
        "nimi": "Ohjelmointi",
        "vaatimuksia": 11
      },
      {
        "nimi": "Ohjelmistokehittäjänä toimiminen",
        "vaatimuksia": 14
      },
      {
        "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla",
        "vaatimuksia": 7
      }
    ]
  },
  {
    "slug": "pelihylly",
    "nimi": "PeliHylly",
    "tyyppi": "web",
    "tila": "kaynnissa",
    "kieli": "",
    "kuvaus": "Oma pelikirjastopalvelu Reactilla ja Expressillä: jäsen lisää pelinsä, vaihtaa tilan yhdellä napilla ja profiilisivu kokoaa tilastot ja tilahistorian. Palvelu julkaistaan tuotantoon julkiseen osoitteeseen, jossa kuvitteellisen Pelikellari ry:n jäsenet kokeilevat sitä.",
    "lukuvuosi": "",
    "viikot": "oma aikataulu",
    "kesto": "18 työviikkoa",
    "ryhma": "",
    "tekniikat": [
      "React",
      "Vite",
      "react-router",
      "Node.js",
      "Express",
      "SQLite",
      "Git"
    ],
    "sivusto": "https://mattiseise.github.io/projektikoontisivu/pelihylly/",
    "repo": "https://github.com/mattiseise/projektikoontisivu",
    "kuva": "kuvat/pelihylly.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-6216-2025",
    "vaatimuksia": 32,
    "luovutus": "18. työviikon perjantai",
    "tutkinnonOsat": [
      {
        "nimi": "Ohjelmointi",
        "vaatimuksia": 11
      },
      {
        "nimi": "Ohjelmistokehittäjänä toimiminen",
        "vaatimuksia": 14
      },
      {
        "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla",
        "vaatimuksia": 7
      }
    ]
  },
  {
    "slug": "noppakauppa",
    "nimi": "NoppaKauppa",
    "tyyppi": "web",
    "tila": "kaynnissa",
    "kieli": "",
    "kuvaus": "Lautapeliliikkeen ensimmäinen verkkokauppa: tuotteet kategorioittain, sanahaku, Pinia-ostoskori, tunnukset ja tilaukset ilman maksunvälitystä — sekä henkilökunnan tuotehallinta roolisuojauksella. Vue 3 -frontti ja FastAPI+SQLite-backend julkaistaan tuotantoon, ja tietoturva-arvio tehdään omin hyökkäystestein.",
    "lukuvuosi": "",
    "viikot": "oma aikataulu",
    "kesto": "18 työviikkoa",
    "ryhma": "",
    "tekniikat": [
      "Vue 3",
      "Vite",
      "Pinia",
      "vue-router",
      "Python",
      "FastAPI",
      "SQLite",
      "Git"
    ],
    "sivusto": "https://mattiseise.github.io/projektikoontisivu/noppakauppa/",
    "repo": "https://github.com/mattiseise/projektikoontisivu",
    "kuva": "kuvat/noppakauppa.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-6216-2025",
    "vaatimuksia": 32,
    "luovutus": "18. työviikon perjantai",
    "tutkinnonOsat": [
      {
        "nimi": "Ohjelmointi",
        "vaatimuksia": 11
      },
      {
        "nimi": "Ohjelmistokehittäjänä toimiminen",
        "vaatimuksia": 14
      },
      {
        "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla",
        "vaatimuksia": 7
      }
    ]
  },
  {
    "slug": "tuntitutka",
    "nimi": "TuntiTutka",
    "tyyppi": "web",
    "tila": "kaynnissa",
    "kieli": "",
    "kuvaus": "Rakennat mainostoimistolle työaikaseurannan: työntekijät kirjaavat tunnit tehtävälajeittain ja projektipäällikkö saa aina ajantasaiset yhteenvedot kaavioina. Svelte + Express + SQLite, kaksi käyttäjäroolia ja julkaisu tuotantoon.",
    "lukuvuosi": "",
    "viikot": "oma aikataulu",
    "kesto": "18 työviikkoa",
    "ryhma": "",
    "tekniikat": [
      "Svelte",
      "Vite",
      "Node.js",
      "Express",
      "SQLite",
      "Chart.js",
      "Git"
    ],
    "sivusto": "https://mattiseise.github.io/projektikoontisivu/tuntitutka/",
    "repo": "https://github.com/mattiseise/projektikoontisivu",
    "kuva": "kuvat/tuntitutka.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-6216-2025",
    "vaatimuksia": 32,
    "luovutus": "18. työviikon perjantai",
    "tutkinnonOsat": [
      {
        "nimi": "Ohjelmointi",
        "vaatimuksia": 11
      },
      {
        "nimi": "Ohjelmistokehittäjänä toimiminen",
        "vaatimuksia": 14
      },
      {
        "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla",
        "vaatimuksia": 7
      }
    ]
  }
];
