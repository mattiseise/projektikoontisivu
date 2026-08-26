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
 *   kuvaus         1–2 virkettä opiskelijalle: mitä tässä tehdään
 *   lukuvuosi      "2026–27"
 *   viikot         "vko 34–49"
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
    "ryhma": "",
    "tekniikat": ["Unity", "C#", "JSON", "PlayerPrefs", "Git", "WebGL"],
    "sivusto": "https://mattiseise.github.io/pelinayttoprojektit/",
    "repo": "https://github.com/mattiseise/pelinayttoprojektit",
    "kuva": "kuvat/kahvilakoodi.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-4948-2021",
    "vaatimuksia": 32,
    "luovutus": "pe 4.12.2026",
    "tutkinnonOsat": [
      { "nimi": "Ohjelmointi", "vaatimuksia": 11 },
      { "nimi": "Ohjelmistokehittäjänä toimiminen", "vaatimuksia": 14 },
      { "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla", "vaatimuksia": 7 }
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
    "ryhma": "",
    "tekniikat": ["Minecraft Java", "Blockbench", "Piskel", "JSON", "mcfunction", "Git"],
    "sivusto": "https://mattiseise.github.io/bittibiomi/",
    "repo": "https://github.com/mattiseise/bittibiomi",
    "kuva": "kuvat/bittibiomi.jpg",
    "tutkinto": "Tieto- ja viestintätekniikan perustutkinto",
    "diaarinumero": "OPH-4948-2021",
    "vaatimuksia": 32,
    "luovutus": "pe 4.12.2026",
    "tutkinnonOsat": [
      { "nimi": "Ohjelmointi", "vaatimuksia": 11 },
      { "nimi": "Ohjelmistokehittäjänä toimiminen", "vaatimuksia": 14 },
      { "nimi": "Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla", "vaatimuksia": 7 }
    ]
  }
];
