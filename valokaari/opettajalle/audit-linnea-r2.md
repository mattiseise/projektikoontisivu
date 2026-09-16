# Linnean pedagoginen audit · Valokaari-viikkorunko · kierros 2

**Arvioitu:** korjattu viikkorunko (kierros 2) kokonaisuudessaan, painopisteenä rakenteelliset korjaukset 2, 12, 13, 16 ja 17 sekä korjausten mahdollisesti synnyttämät uudet ongelmat. Kehys sama kuin kierroksella 1.

## 1. Rakenteellisten korjausten tila

| r1-löydös | Tila | Arvio |
| --- | --- | --- |
| **2** julkaisualusta ohjaajan päätöksenä määräajalla + varapolku vk 3 | Tehty kehykseen ja vk 3:een. | Pitää. Varapolku on konkreettinen (torstai, päiväkirjamerkintä, maanantain palaveri). Yksi puute testatussa polussa, ks. löydös 1. |
| **12** viikkopalaveri vakiotehtävänä | Tehty: 10 min, tehtävät + arvio + toteuma issueihin, nimi ja päivä. | Pitää. p8 ja s6 saavat nyt viikoittaisen kirjatun työnäytteen. Ohjaajan kuorma kasvaa, ks. löydös 7. Pieni epäjohdonmukaisuus: vakiotehtävä sanoo vk 3–17, kattavuustaulukko p8/s6 sanoo 2→. |
| **13** bug-issuet vakiotehtävänä vk 4→ | Tehty. | Pitää. vk 14:n ja 17:n ketjuilla on raaka-aine, ja vk 4:n ansat ohjataan suoraan listalle. |
| **16** haarat vk 6→, kaksi haaraa vk 11 | Tehty. | Pitää periaatteessa, mutta konfliktin syntyminen riippuu kahdesta asiasta, joita runko ei sano ääneen (haarojen luontijärjestys; palautemuutoksen kohdistuminen tilatiedostoon). Ks. löydös 2. Lisäksi yhden palvelimen malli + haarat luo ansan, ks. löydös 1. |
| **17** vk 12 yksi kärki, vuosivalinta vk 11 | Tehty; vk 12 on nyt laatu-tyyppinen. | Pitää. vk 12 on täysi mutta yhtenäinen (puhelin + näppäimistö + Lighthouse). Näppäimistön kiertoreitti on pieni ominaisuus laatuviikolla – hyväksyttävä, kun päätös reitistä tehdään vk 8:lla. |

Muut 18 löydöstä (1, 3–11, 14, 15, 18–23) on käsitelty rungon ilmoittamalla tavalla; tarkistin jokaisen viikkotekstistä. Tekoälyn raja, itse rakennettu näkymä, ansat ansoina, kokeilusarake, uhkalista, koodikatselmointi, luovutusviestin vastaanottaja ja itsearvioinnin tilanteet ovat kaikki paikoillaan.

## 2. Erikseen kysytyt viikot

**Vk 1 ilman Tailwindia – riittääkö?** Riittää, eikä ole ohut. Kaksi ajoympäristöä (PHP, Node), Git ja julkinen repo, README jonka nimetty toinen henkilö seuraa, julkisuustarkistuslista ja kysymyslista ovat Git-aloittelijalle täysi viikko. "Nimetty toinen henkilö (luokkakaveri tai ohjaaja)" korjaa r1:n huomion. Ei löydöksiä.

**Vk 3 HealthStatus-komponentin ja api-sopimuksen kanssa – liian täysi?** Täysi, ei liian täysi – yhdellä ehdolla. Julkaisu on riskiosa; `HealthStatus` on n. 20 riviä ja `api-sopimus.md` yksi sivu; k2-taulukko on P0-tarinoiden määrä rivejä. Dokumentit ovat itse asiassa hyödyllisiä juuri tällä viikolla: jos julkaisu jumittaa torstaihin, viikolla on silti valmistuvaa työtä. Ehto: ohjatun työn järjestys pitää olla julkaisu **ensin** (maanantai: julkaisumalli + ensimmäinen julkaisuyritys), komponentti ja proxy keskellä, dokumentit lopussa – muuten varapolun torstai-raja ei ehdi täyttyä. Yhden palvelimen mallissa `fetch('/api/health')` toimii suhteellisena osoitteena sekä dev-proxyn kautta että tuotannossa, mikä poistaa ympäristömuuttujan tarpeen – hyvä sivuvaikutus korjauksesta 3.

**Vk 11 vuosivalinnan kanssa – liian täysi?** Ei liian täysi, mutta **kumimainen** samasta syystä kuin r1:ssä: palautemuutoksen koko on avoin. Vuosivalinta on 1–1,5 päivää (valitsin, `year` hookin tilaan, uudelleenhaku, T14). Haarat on harjoiteltu viisi viikkoa, joten uutta on vain konflikti. Jos palautemuutos on kahden päivän työ, viikko täyttyy sopivasti; jos se on viikon työ, vuosivalinta (toimeksiannon P0) jää alle. Ks. löydös 2.

**Vk 7 – uusi kuormitusongelma korjauksesta 4.** Tailwind siirtyi vk 1:stä vk 7:lle, joka oli r1:ssä jo "raskas mutta luonteva" React-viikko. Nyt siinä on: kontrolloitu lomake, lista ja avaimet, oma hook, duplikaatin esto, `Promise.allSettled`, värit, asteikko, Tailwindin asennus ja konfiguraatio, Tailwind-luokkien sanasto (lukemis- ja kielihaasteiselle uusi kieli), perustelu k4:ään, arvio vs. toteuma. Se on nyt vaiheen B raskain viikko. Ei estävä – Tailwind vk 7:llä on pedagogisesti oikea paikka ja k4-näyttö on rehellinen – mutta tarvitsee kevennyksen. Ks. löydös 3.

## 3. Jäljellä olevat löydökset

Numeroitu: mitä · mille viikolle · miksi. Löydökset 1–3 pitää huomioida ennen kuin viikot 3, 6–7 ja 11 kirjoitetaan; 4–9 ovat kirjoitusvaiheen täsmennyksiä.

1. **Testattuun julkaisupolkuun kolme pakollista osaa: build alustalla, `client/dist` gitignoreen, automaattinen julkaisu main-haarasta** (Kehys, vk 3). Yhden palvelimen malli tarkoittaa, että PHP tarjoilee buildatun `dist`-kansion. Jos `dist` committataan repoon, **jokainen ominaisuushaara vk 6:sta alkaen tuottaa merkityksettömiä konflikteja build-tiedostoissa** – ja vk 11:n pedagoginen konflikti hukkuu niihin. Siksi build pitää tehdä alustalla (monivaiheinen Dockerfile: Node-build → PHP-image, tai alustan build-komento) ja `dist` on gitignoressa. Sama polku sisältää myös staattisten tiedostojen tarjoilun PHP:stä (`php -S` -reititysskripti kehityksessä, rewrite tuotannossa) – tämä on se kohta, jossa yhden palvelimen malli puree. Miksi: korjaukset 3 ja 16 yhdessä luovat tämän ansan; se ei näy rungossa mutta kaataa viikot 6–11, jos ohjaajan polku ei sitä kata.

2. **Vk 11:n kolme täsmennystä** (vk 10, vk 11). (a) Ohjaaja rajaa katselmoinnin tärkeimmän muutoksen vk 10:n issue-triagessa **enintään kahden päivän työksi**; suurempi jaetaan ja loppu on P1. (b) Ohjatun työn järjestys: vuosivalinta ensin (ma–ti), palautemuutos sen jälkeen, yhdistäminen lopussa – vuosivalinta on toimeksiannon P0, palautemuutos on kumimainen. (c) Konfliktin synty vaatii, että **molemmat haarat luodaan maanantaina samasta main-commitista** ja ensimmäinen yhdistetään ennen toisen PR:ää; jos palautemuutos ei koske `useLocations`-tiedostoa (esim. värit tai tooltipin teksti), ohjaaja päättää maanantain palaverissa, että käytetään varareittiä (ohjaajan commit mainiin) – opiskelija ei saa yrittää väkisin ohjata palautemuutosta tilatiedostoon. Miksi: ilman (c) konflikti ei synny tai se keksitään; ilman (a) ja (b) P0 jää alle.

3. **Kevennä vk 7** (vk 7, vk 13). Kaksi toimenpidettä: (a) `help`-osioon Tailwind-sanastokortti (n. 12 luokkaa, jotka riittävät lomakkeeseen ja listaan) ja valmis konfiguraatioaskelpolku – opiskelija ei etsi luokkia dokumentaatiosta; (b) "yhden paikan virhe ei kaada muita" (`Promise.allSettled`) siirretään vk 13:een virheenkäsittelyyn, jonne se kuuluu; T09 jää duplikaatin estoksi ja "Tuntematonkylä ei kaada muita" on T15:n rivi. Miksi: Tailwind vk 7:llä on oikea paikka, mutta viikko on nyt vaiheen B raskain; allSettled on virheenkäsittelyä, ei näkymän rakentamista.

4. **Verkkovirhe numeroiduksi testiksi ja luokkajako lähemmäs kolmanneksia** (vk 6, vk 14). Vk 6:n valmis kun -ehto "palvelimen sammutus näyttää virheilmoituksen" on testi ilman numeroa – lisää T16 (virhe) vk 6:lle. T14 (2028 → 366 pistettä) on karkausvuoden raja, ei normaalikäyttö → rajat. Tulos 6 / 6 / 4, yhteensä 16. Miksi: § 5 "kolmanneksittain"; nykyinen 7 / 5 / 3 on virheluokassa ohut, ja r1:n listassa ollut verkkovirhe putosi pois.

5. **Kiertoreitin päätös vk 8:lla, toteutus vk 12:lla** (vk 8). Runko sanoo "korvaava reitti toteutetaan vk 12" mutta ei sano, milloin reitti valitaan. Päätös (datataulukko vai päivävalitsin) kirjataan vk 8:n k2-rajoitteen yhteyteen perusteluineen, jotta vk 12 vain toteuttaa. Miksi: päivävalitsin on pieni komponentti tilalla, datataulukko 365 × N riviä tarvitsee tiivistyksen – valinta vaikuttaa vk 12:n kuormaan.

6. **Vk 3:n ohjatun työn järjestys** (vk 3): julkaisumalli ja ensimmäinen julkaisuyritys maanantaina, komponentti ja proxy ti–ke, torstai varapolun tarkistus, api-sopimus ja k2-taulukko lopussa. Lisäksi valmis kun -ehdon "toinen henkilö" nimetään kuten vk 1:llä. Miksi: torstain varapolkuraja ei ehdi täyttyä, jos julkaisu aloitetaan keskiviikkona.

7. **Ohjaajan kuorma näkyväksi kehykseen** (Kehys). Korjaukset lisäsivät ohjaajalle: alustan testaus ennen vk 1:tä, kuntaluettelo, 10 min × opiskelija × 15 viikkoa, koodikatselmointi vk 14–15, asiakasvastaus vk 17, vastakommentti vk 18, mahdollinen commit vk 11, kaksi katselmoijaa. Kahdellakymmenellä opiskelijalla pelkät palaverit ovat yli kolme tuntia viikossa. Sallitaan eksplisiittisesti, että viikkopalaveri voi olla 3–4 opiskelijan ryhmäkierros, jossa jokaisen issuet kirjataan erikseen (kirjaus on työnäyte, ei kahdenkeskisyys). Koodikatselmointi tehdään vk 14:n aikana ja löydökset annetaan vk 15:n maanantaipalaverissa. Ohjaaja lisätään repon collaboratoriksi vk 1:llä (tarvitaan vk 11:n varareittiin ja vk 15:n PR-kommentteihin). Miksi: jos ohjaaja ei jaksa rytmiä, p8 ja s6 palaavat r1:n tilaan; parempi mitoittaa ääneen.

8. **Harmonisoi viikkopalaverin alku** (Kehys, kattavuustaulukko): vakiotehtävä sanoo 3–17, taulukko p8 ja s6 sanovat 2→. Vk 2:n priorisointipalaveri on ensimmäinen kirjattu palaveri, joten "2→17" on oikea ja vakiotehtävän teksti korjataan. Miksi: § 12 – tunnukset ja säännöt eivät saa olla ristiriidassa keskenään.

9. **Valmis kun -ehdot viikoille 11–18 kirjoitusvaiheessa** (vk 11–18). Runko antaa ne viikoille 1–9 mutta ei 11–18. Kirjoittajalle: jokaiselle havaittava ehto, esim. vk 11 "kaksi PR:ää yhdistetty, konfliktin ratkaisucommit historiassa, 2028 näyttää 366 pistettä tuotannossa"; vk 14 erotellaan ajettavat (T01–T07, T10–T13, T15) ja käsin ajettavat selaintestit (T08, T09, T14, T16) raportissa. Miksi: § 2 kohta 3; ei rungon puute vaan muistutus, koska runko on epäsymmetrinen.

## 4. Kokonaisarvio

AI-resilienssi: kaikilla 18 viikolla on nyt vähintään yksi ankkuri, ja kierroksen 1 kohtalaiset viikot (2, 15, 17, 18) ovat nousseet: vk 2:lla on oma koeajo ja kirjattu palaveri, vk 15:llä ohjaajan nimetyt löydökset, vk 17:llä vastaanottaja ja vastaus, vk 18:lla nimetyt tilanteet ja ohjaajan kommentti. Yhtään viikkoa ei voi kuitata kopioimalla tehtävänantoa kielimalliin. Tiimivaatimukset p8, p9, p11 ja s6 todentuvat nyt viikoittaisesta kirjauksesta, ei yhden viikon tapahtumasta. Mitoitus (18 vk, 5+5+5+3, 15–16 testiä, 3 ketjua raaka-aineella, 2 ulkopuolista) täsmää kehykseen.

Jäljellä olevat löydökset eivät vaadi viikkojen uudelleenjärjestelyä: 1 ja 2 ovat kehyksen ja vk 11:n ohjatun työn täsmennyksiä, 3 on yhden tehtävän siirto vk 7 → 13, loput ovat kirjoitusvaiheen ohjeita. Ne pitää viedä kirjoittajalle tämän raportin mukana, ja löydös 1 on ehto, jonka ohjaajan testatun polun on täytettävä ennen vk 3:n kirjoittamista.

HYVÄKSYTTY
