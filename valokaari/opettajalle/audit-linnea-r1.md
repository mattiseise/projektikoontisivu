# Linnean pedagoginen audit · Valokaari-viikkorunko · kierros 1

**Arvioitu:** viikkorunko (18 työviikkoa), ei valmis teksti.
**Kehys:** pedagoginen-runko.md (§ 1–12) ja projektityypit.md, osio Webprojekti.
**Kohderyhmä:** ammatillisen toisen asteen TVT-opiskelijat 17–20 v, joukossa työmuistin, lukemisen ja kielen haasteita sekä vähän Git-kokemusta. Yksin tehtävä projekti, ohjaaja asiakkaan sijaisena.

Yleiskuva ennen taulukkoa: runko on rakenteellisesti kehyksen mukainen (4 vaihetta 5+5+5+3, kolme varattua viikkoa, kaksi ulkopuolista, testit ja ketjut mitoitettu), ja jokaisella viikolla on vähintään yksi AI-ankkuri. **Yhtään viikkoa ei tarvitse hylätä** kielimallilla kuitattavana. Korjattavaa on kuitenkin neljässä asiassa, jotka eivät ole kosmeettisia: viikon 3 julkaisu riippuu ohjaajan päätöksestä, joka on rungossa merkitty avoimeksi; viikot 1, 5 ja 12 ovat kohderyhmälle liian täysiä; React- ja Git-osaaminen hyppäävät pohjustamatta viikoilla 6 ja 11; ja yksin tehdyn projektin tiimivaatimukset (p8, p9, p11, s6) nojaavat yhden viikon tapahtumiin ilman viikoittaista kirjaamista, jolloin niiden työnäyte on jälkikäteen rekonstruoitu.

---

## 1. Viikkotaulukko

Asteikko AI-resilienssille: **vahva** = viikkoa ei voi kuitata ilman omaa laitetta, omaa dataa tai nimettyä ihmistä · **kohtalainen** = ankkuri on olemassa, mutta merkittävä osa tuotoksesta on kielimallin perustyötä · **heikko** = kuitattavissa kopioimalla tehtävänanto → hylättävä.

| Vk | AI-resilienssi | Havaittava kärki | Kuormitus | Eteneminen |
| --- | --- | --- | --- | --- |
| **1** | **Vahva.** Commit-historia, kuvakaappaukset omalta koneelta ja ohjaajan kuittaus julkisuustarkistuslistasta. Kysymyslista yksin olisi heikko (kielimalli tuottaa kuusi kysymystä toimeksiannosta), mutta se ei ole viikon ainoa ankkuri. | Kyllä: `index.php` vastaa `{"status":"ok"}`, runko käynnistyy. "Toinen henkilö saa rungon käyntiin README:llä" – kuka? Ei nimetty. | **Liikaa.** Kaksi ajoympäristöä (Node, PHP), Git + julkinen GitHub, Vite, React, TypeScript, Tailwind, versiotaulukko, julkisuustarkistuslista, kysymyslista – yhdellä viikolla opiskelijalle, jolla on vähän Git-kokemusta. Tailwind on tässä pelkkä asennusrivi, joka ei tee mitään ennen viikkoa 6–7. | Aloitusviikko, ei riippuvuuksia. Ottaa kaiken käyttöön kerralla eikä jätä viikolle 3 mitään muuta kuin julkaisun. |
| **2** | **Kohtalainen.** Käyttäjätarinat, API-sopimus, vertailutaulukot, rautalangat, komponenttijako ja issuet ovat juuri se paketti, jonka kielimalli tuottaa toimeksiannosta yhdellä kehotteella. Ankkurit ovat ohjaajan hyväksyntä ja yhteinen priorisointipalaveri – riittää kehyksen kirjaimeen, mutta viikolla ei ole yhtään havaittavaa artefaktia omalta koneelta. Päätökset testataan onneksi myöhemmin (vk 4, 5, 6). | Kyllä: hyväksytty suunnitelma kirjatulla kommentilla, P0-issuet hyväksymiskriteereineen. | **Raskas muodoltaan:** kuusi dokumenttityyppiä. Työ on samanlaatuista (suunnittelua, kirjoittamista), mutta työmuistihaasteiselle kuusi eri lomaketta yhdellä viikolla on paljon. API-sopimusta ei tarvita ennen viikkoa 5. | Nojaa vk 1:n kysymyslistaan – mutta runko ei sano, että **ohjaajan vastaukset** kirjataan. Ilman niitä s1 (asiakkaan tarpeen selvittäminen) on toimeksiannon toistoa. |
| **3** | **Vahva.** Julkinen osoite ja alustan lokit ovat artefakteja, joita ei voi keksiä. k2-selvitys yksin olisi heikko (yleisessee "mitä React ratkaisee"). | Kyllä: osoite aukeaa toisen laitteella, `/api/health` vastaa. | **Riskialtis, ei pelkästään kuormittava.** Ensimmäinen julkaisu, julkaisumallin valinta, Vite-dev-proxy ja k2-selvitys. Valmis kun -ehto riippuu ohjaajan päätöksestä "oppilaitoksen linja julkaisualustoista", joka on rungossa **avoin asia**. Jos alustaa ei ole päätetty ennen vk 3:a, viikkoa ei voi tehdä. Varasuunnitelmaa ei ole. | **Pohjustamaton kahdesti.** Viikot 1–2 eivät pohjusta julkaisua eivätkä proxyn ideaa (kaksi palvelinta, kaksi porttia, yksi osoite). Lisäksi "tyhjä sovellus" ei pohjusta viikon 6 React-työtä – tässä olisi halpa paikka ensimmäiselle käsin tehdylle komponentille. |
| **4** | **Vahva.** Odotusarvot ulkoisesta lähteestä ennen ajoa, testiajo omalla koneella, oma laskentatapapäätös. Kielimalli kirjoittaa moduulin ja testit yhdellä kehotteella, mutta Utsjoen 0/1440 kaataa naiivin kaavan (acos saa arvon > 1) – opiskelija joutuu debuggaamaan itse. Tämä on aito p2-ketju. | Kyllä: testit menevät läpi komennolla, 2028 → 366 riviä, 2027 → 365. | **Raskas sisällöltään:** deklinaatio, tuntikulma, refraktio, karkausvuodet, PHPUnit/Composer uutena työkaluna, referenssiarvojen haku. Kevenee `date_sun_info`-polulla, mutta sekin palauttaa polaarijaksoilla `true`/`false`, ei aikaleimaa – ansa, jota ei mainita. Rovaniemi 21.6. ≈ 24 h toteutuu vain refraktiokorjauksella (naiivi kaava antaa n. 23 h 40 min, ±3 min ei riitä). Tätäkään ansaa ei mainita. | Nojaa vk 2:n päätökseen – hyvä. Jos vk 3:n julkaisu venyy, viive syö tämän viikon, ja tämä on projektin matemaattisesti raskain viikko. |
| **5** | **Vahva.** curl-tulosteet omasta palvelimesta, tietolähteen lisenssikirjaus, oma tietovarastopäätös. | Kyllä: T05–T07 kirjatuin odotusarvoin. | **Liikaa, erityisesti geokoodausvaihtoehdossa.** Uutta: PHP-reititys, parametrivalidointi, JSON-virhevastaukset HTTP-koodeilla, tiedon lataus (SQLite → PDO uutena), Unicode-normalisointi (ä/ö `mb_`-funktioilla – klassinen ansa), samannimiset paikat. Ulkoinen geokoodaus lisää HTTP-asiakkaan, API-avaimen palvelimen ympäristömuuttujaan, verkkovirheet ja käyttöpolitiikan (Nominatim 1 pyyntö/s, pakollinen User-Agent). **Piilotyö:** mistä saa Suomen paikkakuntien koordinaatit avoimella lisenssillä ja miten ne siivotaan tiedostoksi – tämä on itsessään päivän työ, jota runko ei laske. | Nojaa vk 2 (tietolähde) ja vk 4 (laskenta) – hyvä. Mutta viikot 4 ja 5 ovat projektin kaksi raskainta ja tulevat peräkkäin. |
| **6** | **Vahva.** Oma API, oma vertailu, julkaistu kaavio, backendin sammutuksen virhetila. Kaaviokirjaston vertailutaulukko yksin olisi kielimallin työtä – vaadi vähintään yksi sarake omasta kokeilusta (paketin koko `npm`-tulosteesta, tai koeasennus). | Kyllä: kaavio näkyy julkaistussa versiossa. | **Hyppy React-osaamiseen.** Tämä on ensimmäinen viikko, jolla kirjoitetaan Reactia (vk 1 = scaffold, vk 3 = tyhjä sovellus). Samalla viikolla: fetch + useEffect, TypeScript-tyypit vastaukselle, lataus-/virhetila, kaaviokirjaston API, `VITE_API_URL`-tyyppinen ympäristömuuttuja tuotantoon. | **Pohjustamaton.** k3 "komponentit, propsit, tila, hookit" alkaa tässä ilman mitään edeltävää harjoitusta. Korjaus on halpa: vk 3:n "tyhjä sovellus" sisältää yhden käsin kirjoitetun komponentin. |
| **7** | **Vahva featurena:** oma komponenttijako, neljä paikkaa julkaistussa versiossa. **Heikko s6-osuudeltaan:** "arvio vs. toteuma" edellyttää, että toteutuneet ajat on kirjattu issueihin viikoilta 3–6 – runko ei pyydä tätä missään. Ilman kirjausta vertailu tehdään muistista jälkikäteen, eli keksitään. | Kyllä: Helsinki, Tampere, Rovaniemi, Utsjoki samassa kaaviossa; Tuntematonkylä ei kaada muita. | **Raskas mutta luonteva React-viikko:** kontrolloitu lomake, lista + avaimet, oma hook, rinnakkaiset fetchit osittaisella epäonnistumisella (`Promise.allSettled`), värit, yhteinen asteikko. "Yhden paikan epäonnistuminen ei kaada muita" on virheenkäsittelyä ja kuuluisi vk 13:een. | Nojaa vk 6:een – hyvä. |
| **8** | **Vahva.** Vitest-testit, kuvakaappaus Utsjoen datalla omasta sovelluksesta. | Kyllä. **Mutta:** "tooltip toimii näppäimistöllä" voi olla valitulla kirjastolla mahdotonta (Recharts- ja Chart.js-tooltipit ovat hiiriohjattuja). Valmis kun -ehto voi jäädä saavuttamattomaksi ilman opiskelijan syytä. | Kohtalainen: toinen testiajuri (Vitest PHPUnitin rinnalle), kaavion tooltip-API, `Intl.DateTimeFormat`. | Nojaa vk 4:n ääriarvoihin ja vk 6–7:n kaavioon – hyvä. |
| **9** | **Vahva.** Oma toleranssipäätös, testit omalla datalla, konkreettinen esimerkki Helsinki–Rovaniemi maaliskuussa. | Kyllä: merkki kaaviossa, tooltip nimeää molemmat paikat ja päivän. | **Käsitteellisesti projektin vaikein viikko:** merkinvaihto, toleranssi, peräkkäisten päivien ryhmittely, tasauspäivien "kaikki parit leikkaavat" -ilmiö, polaarijaksojen tasatilanteet (Utsjoki ja Rovaniemi molemmat 1440 viikkoja). Koodia vähän, ajattelua paljon. Sopii, koska on P0 – mutta `help`-osion on kannettava tämä (piirros kahdesta käyrästä maaliskuussa ja kesäkuussa). | Nojaa vk 7:n monisarjaan – hyvä. |
| **10** | **Vahva.** Nimetty ihminen, sitaatit erillään tulkinnasta. | Kyllä: muistio + priorisoitu muutoslista repossa. | Kohtalainen. Huomio: ilmaisalustat nukkuvat (cold start 30–60 s) – katselmoija näkee "rikkinäisen" sovelluksen, jos sitä ei herätetä ennen. | Vaiheen B päätös oikeassa kohdassa. Katselmoijan nimeäminen vk 8 mennessä on kirjattu – hyvä. |
| **11** | **Vahva.** PR ja commit-historia. | Kyllä: muutos tuotannossa, PR yhdistetty. | **Hyppy Git-osaamisessa:** ensimmäinen haara, ensimmäinen PR ja merge-konflikti samalla viikolla opiskelijalle, jolla on vähän Git-kokemusta. Yksin tehdyssä projektissa konflikti **ei synny itsestään** – runko ei sano, miten se tuotetaan. Riski: keksitty konflikti tai jumi. Sisältö riippuu palautteesta: voi olla ohut tai valtava. | Viikot 1–10 ovat ilmeisesti suoraan main-haaraan. Haaratyöskentely pitää aloittaa aiemmin, jotta vk 11 lisää vain konfliktin. |
| **12** | **Vahva.** Kuvakaappaus omalta puhelimelta, Lighthouse-raportit ennen/jälkeen. | Kyllä – mutta **kolme kärkeä**, mikä rikkoo "yksi kärki" -säännön (§ 2). | **Liikaa. Kolme erillistä asiaa:** (1) uusi P0-ominaisuus vuosivalinta, joka vaatii tilan uudelleenjärjestelyn (kaikki paikat haetaan uudelleen); (2) responsiivisuus (taitekohdat, kaavion skaalaus); (3) saavutettavuusauditointi + korjaukset + Lighthouse. Webprojektiprofiili pitää responsiivisuuden ja saavutettavuuden **erillisinä** viikkoina. Uusi ominaisuus vaiheessa C rikkoo vaiheen tarkoituksen (palautemuutos, laatu, testaus). | Vuosivalinta on toimeksiannon P0 ("Vuosivalinta, karkausvuodet oikein") mutta toteutuu vasta vk 12 – ominaisuus, jota vk 10:n katselmoija ei voinut kokeilla. |
| **13** | **Vahva.** Syötetaulukon "saatu vastaus" -sarake omasta palvelimesta. | Kyllä: taulukko ajettu curlilla. | **Kohtalainen käsitteellisesti, kevyt koodillisesti.** Neljä tietoturvakäsitettä uutena (XSS, CORS, salaisuudet, aikakatkaisu), mutta suuri osa on aiemman työn todentamista: 400-vastaukset tehtiin vk 5, React eskapoi XSS:n itsestään. CORS koskee vain kaksipalvelinmallia, aikakatkaisu vain geokoodausta. Kasvaa raskaaksi, jos taulukko paljastaa korjattavaa (esim. `year=999999` → pitkä silmukka). **s11 on "arvioi", ei "testaa":** tarvitaan oman sovelluksen uhkalista, ei pelkkä taulukko – muuten arvio on kielimallin OWASP-yleislista. | Nojaa vk 5:een ja vk 3:n julkaisumalliin – hyvä. |
| **14** | **Vahva.** Aidot bugit ja testiajot. | Kyllä: raportti, `composer test` + `npm test`. | Kohtalainen – kokoava viikko. **Mutta:** T01–T11 on sijoitettu viikoille 4–9, **T12–T14 ei millekään viikolle** → ne kirjoitetaan vk 14 jälkikäteen, mikä rikkoo "odotettu tulos ennen ajoa". Luokkajako on 1 / 5 / 4, ei kolmanneksittain: normaali käyttö on ohut (vain Helsinki 2026). Kaksi ketjua "aidoista havainnoista" – mutta runko ei pyydä bugi-issueita viikoilta 4–13, joten raaka-ainetta ei välttämättä ole. | Nojaa kaikkiin edellisiin. Jos vk 4/5/8/9 testit jätettiin, viikko räjähtää. |
| **15** | **Kohtalainen.** Diffit ovat artefakteja, mutta "laskenta ja muotoilu pois komponenteista" on **jo tehty** vk 8–9 (`format.ts`, `intersections.ts` erillisinä moduuleina) → ensimmäinen refaktorointi voi olla keinotekoinen. README on kielimallin perustyötä (todennetaan onneksi vk 16). Riippuvuustaulukon lisenssit kielimalli hallusinoi sujuvasti. | Kyllä: diffit, README, taulukko, LICENSE. | Kohtalainen–raskas: 3 refaktorointia + kaksi README-yleisöä + riippuvuustaulukko + LICENSE. | Nojaa vk 14:een. Ohjaajan lisenssipäätös pitää olla tehty ennen tätä – se on kirjattu avoimeksi ilman määräaikaa. |
| **16** | **Vahva.** Nimetty ulkopuolinen, pelkkä kirjallinen ohje, pöytäkirja. | Kyllä: rc1-tag, pöytäkirja, estävät issueiksi. | Kohtalainen. "Oma puhdas asennus" PHP + Node -pinolle tarvitsee toisen koneen tai kontin – runko ei sano mikä. | Jäädytys oikeassa paikassa – hyvä. |
| **17** | **Kohtalainen.** Tag, release, regressioajo ja savutesti ovat vahvoja; julkaisutiedote ja luovutusviesti ovat kielimallin perustyötä eikä niillä ole vastaanottajaa (asiakas on kuvitteellinen). Kolmas ketju riippuu siitä, että vk 16 löysi estävän virheen. | Kyllä: v1.0-tag ja release. | Kevyt, jos estäviä ei löytynyt → **täyteviikkoriski**. | Nojaa vk 16:een – hyvä. |
| **18** | **Kohtalainen.** Demo toiselle ja täsmälinkitys ovat vahvoja; **itsearviointi "konkreettisin tilantein"** on p11:n ainoa työnäyte ja se on kielimallilla kirjoitettavissa, ellei sitä sidota nimettyihin tilanteisiin (vk 10 muistio, vk 16 pöytäkirja, ohjaajapalaverit). | Kyllä: matriisi, demo. | Sopiva – mitään uutta ei rakenneta. | Hyvä. |

**Yhteenveto:** vahva 13 viikkoa, kohtalainen 5 (vk 2, 15, 17, 18 sekä vk 7:n s6-osuus), heikko 0. Kuormitus liikaa: vk 1, 5, 12; hyppy pohjustamatta: vk 3 (julkaisu), vk 6 (React), vk 11 (Git-haarat).

---

## 2. Kattavuustaulukko: ohuet ja keinotekoiset kytkennät

Sanon suoraan, missä työnäyte ei todenna vaatimusta sellaisena kuin runko sen nyt esittää.

| Vaatimus | Rungon kytkentä | Arvio |
| --- | --- | --- |
| **p8** sopii tehtävistä tiimin kanssa | vk 2 "(jatkuva)" | **Ohut.** "Jatkuva" ilman rytmiä ei tuota työnäytettä. Yksin tehdyssä projektissa tiimi on opiskelija + ohjaaja (asiakas) + katselmoija + julkaisutestaaja. Ilman viikoittaista, kirjattua sopimista ohjaajan kanssa p8:lla on yksi tapahtuma vk 2. |
| **p9** ratkoo ongelmia yhdessä tiimin kanssa | vk 2 vertailut ohjaajan kanssa, todennus 4–5 | **Hyväksyttävä vain, jos palaveri kirjataan** (ohjaajan kysymykset, päätös, päivä, nimi). Nyt se on yksi tapahtuma. Aidot yhdessä ratkotut ongelmat tulevat vk 3 (julkaisu ei toimi), vk 4 (Utsjoki NaN), vk 11 (konflikti) – ne pitää nimetä p9-hetkiksi. |
| **p10** arvioi ratkaisujen toimivuuden yhdessä | vk 10, täydentyy 11 | **Kelvollinen.** Katselmointi on lähin rehellinen vastine yksin tehdyssä projektissa. |
| **p11** arvioi omaa toimintaa tiimin jäsenenä | vk 18 itsearviointi | **Ohut.** Yksin tehdyssä projektissa "tiimin jäsenenä" on todennettava suhteessa niihin ihmisiin, jotka olivat mukana: miten otin vastaan vk 10 palautteen, miten reagoin vk 16 testaajan epäröintiin, miten sovitut tehtävät toteutuivat. Nyt kytkentä on yleinen itsearviointi, jonka kielimalli kirjoittaa. |
| **s6** suunnittelee ja arvioi tehtävien toteuttamista | vk 7 arvio vs. toteuma, alku 2 | **Keinotekoinen nykymuodossa.** Toteumaa ei kerätä viikoilla 3–6, joten vk 7:n vertailu on rekonstruktio. Tarvitaan viikoittainen toteuman kirjaus issueen. |
| **s1** selvittää asiakkaan tarpeet | vk 2, täydentyy 10 | Kelvollinen, **jos** vk 1:n kysymyslistaan saadaan ohjaajan vastaukset kirjattuina vk 2. Muuten vk 2 on toimeksiannon toistoa. |
| **s2** viestii asiakaslähtöisesti | vk 10, 17 | vk 10 vahva (esittely oikealle ihmiselle). vk 17 luovutusviesti **ilman vastaanottajaa** on kirjoitusharjoitus. |
| **s9** toteuttaa yhteyden tietovarastoon | vk 5 | Rehellinen SQLite-polulla; JSON-tiedoston lukeminen on ohut "yhteys". Profiili sallii ("data pois koodista"), mutta sano ääneen, että JSON-polulla s9:n näyttö on tiedoston rakenne + latausmoduuli, ei yhteyskerros. |
| **s11** arvioi tietoturvaa | vk 13 | Testaa, ei arvioi. Puuttuu oman sovelluksen uhkalista (ks. vk 13). |
| **k2** selvittää komponenttikirjaston mahdollisuudet ja rajoitteet | vk 3 selvitys | Kelvollinen vain omiin P0-tarinoihin sidottuna; yleisessee ei ole näyttö. |
| **k4** tuo ulkoisia komponentteja | vk 1 Tailwind, vk 6 kaaviokirjasto | **Tailwind on ohut.** Se on käännösaikainen CSS-apukirjasto, ei komponentti, ja sen asennus vk 1:llä on template-rivi ilman perustelua tai käyttöä. Kaaviokirjasto (vk 6) on rehellinen k4-näyttö: vertailu, valinta, integrointi, rajoitteet. Jos Tailwind halutaan k4:ään, sen tuonti pitää olla perusteltu ja ajoitettu siihen kohtaan, jossa sitä oikeasti tarvitaan (vk 7 lomake + lista). |
| **k5** suunnittelee, toteuttaa ja testaa komponenttikirjastoa käyttäen | vk 2 ja 14 | Kelvollinen mutta puutteellisesti listattu: varsinainen toteutus on vk 6–9 ja 12. Lisää ne taulukkoon. |
| **p5** ylläpidettävä koodi | vk 15 | Kelvollinen, mutta ennalta listatuista refaktoroinneista yksi on jo tehty (ks. vk 15). Ohjaajan koodikatselmointi tekisi tästä aidon ja antaisi nimetyn ihmisen. |
| Muut (p1–p4, p6, p7, s3–s5, s7, s8, s10, s12–s14, k1, k3, k6, k7) | – | Kytkentä pitää. |

**Kehyksestä puuttuu** kaksi asiaa, jotka pedagoginen runko vaatii kirjoitettavaksi projektikohtaisesti:
- **Tekoälyn raja** (§ 7: "Tämä rajaus kirjoitetaan projektikohtaisesti auki"). Kehyksessä ei ole yhtään riviä siitä, mikä tässä projektissa tehdään itse (laskentamoduuli, `intersections.ts`, `useLocations`, komponenttijako, testien odotusarvot) ja mitä tekoäly saa tehdä. Ilman tätä AI-loki ei erota sallittua kielletystä.
- **Itse alusta rakennettu näkymä** (Webprojekti: "Vaadi että vähintään yksi näkymä on rakennettu itse alusta"). Runko ei nimeä sitä eikä sano, että valmiita komponenttikittejä (MUI, shadcn) ei käytetä. Tailwind ei ole komponenttikirjasto, mutta raja pitää sanoa ääneen.

---

## 3. Mitoitus

| Mittari | Kehys (15–18 vk) | Runko | Arvio |
| --- | --- | --- | --- |
| Vaiheet | 4, ~27/27/27/19 % | 5+5+5+3 | Täsmää. |
| Varatut viikot | 1, toiseksi viimeinen, viimeinen | 1, 17, 18 | Täsmää. |
| Featureviikkoja | 12–15 | 15 | Täsmää. |
| Testitapauksia | ≥ 12 | 14 | Täsmää määrältään; T12–T14 sijoittamatta (ks. vk 14). |
| Korjausketjuja | 3 | 2 (vk 14) + 1 (vk 17) | Kolmas on **ehdollinen**: riippuu vk 16:n löydöistä. |
| Ulkopuolisia | 2 | vk 10, vk 16 | Täsmää. |
| Pitkän projektin lisäviikot syvyyteen | toinen katselmointi, laatuviikko, RC-vaihe | vk 16, vk 15, vk 16–17 | Täsmää – **paitsi** vuosivalinta vk 12 on featurelistan kasvattamista vaiheessa C, minkä kehys nimeää rajausvirheeksi. |

**Täyteviikkoriski:** vk 17 (jos estäviä virheitä ei löydy, jää release + kaksi viestiä) ja vk 11 (jos katselmoinnin tärkein muutos on pieni). Kumpikaan ei ole täyteviikko suunnitelmassa, mutta molemmat ovat sisällöltään kumimaisia – vk 11 voi olla puoli päivää tai kolme viikkoa. vk 13 on puoliksi aiemman työn todentamista, mikä on laatuviikolle oikein.

**Puskuria ei ole vaiheessa A.** Jos vk 3:n julkaisu ei onnistu, viive osuu vk 4–5:een, jotka ovat projektin kaksi raskainta viikkoa. Kehys ei vaadi puskuriviikkoa, mutta rungossa pitää olla kirjattu varapolku vk 3:lle.

---

## 4. Riskit tälle aiheelle, todennäköisyysjärjestyksessä

1. **PHP:n julkaisu julkiseen osoitteeseen (vk 3) kaatuu todennäköisimmin.** Mikään ilmainen staattinen alusta (GitHub Pages, Netlify) ei aja PHP:tä. Vaihtoehdot (Render, Fly.io, Azure App Service, oppilaitoksen palvelin) vaativat Dockerfilen tai alustakohtaisen konfiguraation – 17-vuotiaalle Git-aloittelijalle ensimmäinen kontti ja ensimmäinen julkaisu samalla viikolla on liikaa. Alustapäätös on ohjaajan avoin asia. **Varaa rungossa: ei.** Ohjaajan pitää kokeilla alusta ennen vk 1 ja antaa opiskelijalle testattu polku `help`-osiossa; opiskelijan k6/s14-näyttö on silti itse julkaisu.
2. **Kaksipalvelinmalli** (frontend erillään) tuo CORSin vk 6:sta alkaen, ympäristömuuttujaeron localhost/tuotanto ("toimii mun koneella") ja kaksi nukkuvaa ilmaispalvelua. Yhden PHP-palvelimen malli (PHP tarjoilee `client/dist`) on kohderyhmälle selvästi turvallisempi oletus; runko esittää tämän opiskelijan päätöksenä, ohjaajan pitää ohjata.
3. **Laskennan polaariansat (vk 4):** acos-alueen ylitys Utsjoella, refraktio ja Rovaniemen 24 h, `date_sun_info`-funktion `true`/`false`-palautukset, aikavyöhyke päivän rajalla. Nämä ovat hyviä p2-ketjuja, **jos** opiskelija tietää, että virhe on odotettu eikä oma vika. Runko ei sano tätä.
4. **Paikkakuntadata (vk 5):** Suomen paikkakuntien koordinaatit avoimella lisenssillä eivät ole yhden latauksen takana (MML paikannimirekisteri CC BY 4.0 on valtava; GeoNames CC BY 4.0 vaatii siivousta; Tilastokeskuksen kuntaluettelossa ei ole koordinaatteja). Geokoodausrajapinnat tuovat käyttöpolitiikat ja avaimet. Piilotyö on päivän luokkaa.
5. **Kaaviokirjaston saavutettavuus (vk 8, 12):** näppäimistöllä toimiva tooltip voi olla kirjastolla mahdoton. Valmis kun -ehto tarvitsee korvaavan reitin.
6. **Merge-konflikti yksin (vk 11):** ei synny luonnostaan; ilman ohjetta se keksitään tai jää tekemättä.
7. **Kaksi testiajuria kahdella kielellä** (PHPUnit + Vitest) ja **kaksi pakettihallintaa** (Composer + npm) samalle aloittelijalle. Hyväksyttävä, mutta rungon "oma testiskripti" -varapolku vk 4 pitää säilyttää johdonmukaisesti myös vk 14:ssä.
8. **Kaksi nimettyä ulkopuolista** vk 8 mennessä – kirjattu ohjaajan päätöksiin, mutta ei sanota, mitä tapahtuu, jos ketään ei löydy (ohjaaja nimeää).

---

## 5. Korjausehdotukset

Numeroitu: mitä · mille viikolle · miksi. En kirjoita viikkoja uudelleen.

1. **Kirjaa tekoälyn raja kehykseen** (Kehys / vk 1). Itse: `Daylight`-moduuli, `intersections.ts`, `useLocations`, komponenttijako, testien odotusarvot, saavutettavuusratkaisut, CSS. Tekoäly saa: selittää virheitä, ehdottaa testitapauksia, tarkistaa. Miksi: § 7 vaatii projektikohtaisen rajauksen; ilman sitä AI-loki ei erota sallittua kielletystä.

2. **Julkaisualustan päätös pois avoimista asioista ja ennen vk 1:tä** (Kehys, vk 3). Ohjaaja valitsee ja kokeilee alustan itse (PHP 8.2 + staattinen `dist/`), ja vk 3:n `help` sisältää alustakohtaisen polun sekä varapolun: "jos julkinen osoite ei toimi torstaihin mennessä, kirjaa virhe ja alustan loki päiväkirjaan, jatka vk 4:ää, ohjaajan varapolku maanantaina". Miksi: vk 3:n valmis kun -ehto riippuu päätöksestä, jota ei ole; ilman varapolkua viive syö vk 4–5.

3. **Ohjaa oletukseksi yhden palvelimen julkaisumalli** (vk 3). Opiskelijan päätös säilyy, mutta rungon `example`-kohta näyttää yhden palvelimen mallin ja kaksipalvelinmallin lisätyö (CORS, kaksi ympäristöä, kaksi cold startia) sanotaan ääneen. Miksi: riski 2.

4. **Tailwind pois vk 1:stä → vk 7:lle**, jossa ensimmäinen käsin rakennettu näkymä (lomake + lista) sitä tarvitsee, perusteltuna tuontina. k4 todennetaan ensisijaisesti kaaviokirjastolla (vk 6), Tailwind toissijaisena. Miksi: asennusrivi vk 1:llä ei ole k4-näyttö; vk 1:ssä on jo kaksi ajoympäristöä, Git ja julkinen repo.

5. **Kysymyslistaan ohjaajan vastaukset** (vk 1 → vk 2). vk 2:n tuotoksiin lisätään "ohjaajan vastaukset kysymyslistaan: nimi, päivä, vastaus omin sanoin". Miksi: s1 vaatii asiakkaan tarpeen selvittämisen, ei toimeksiannon toistoa.

6. **Kevennä vk 2 ja anna sille artefakti** (vk 2, vk 3). API-sopimus siirretään vk 3:een k2-selvityksen rinnalle (se on yksi sivu, tarvitaan vasta vk 5). Laskentatapavertailuun lisätään pakollinen oma koeajo: `php -r 'print_r(date_sun_info(...));'` Helsingille 21.6. tulosteena päiväkirjaan. Miksi: vk 2 on ainoa viikko ilman omaa artefaktia; kuusi dokumenttityyppiä on työmuistihaasteiselle liikaa.

7. **vk 3:n "tyhjä sovellus" ei ole tyhjä** (vk 3). Yksi käsin kirjoitettu komponentti, joka hakee `/api/health` ja näyttää tilan (propsit + tila + fetch). Miksi: vk 6 on muuten ensimmäinen React-viikko ja samalla kaaviokirjastoviikko; k3 alkaa pohjustamatta. Tämä myös antaa vk 3:n "toiselle henkilölle" jotain nähtävää.

8. **k2-selvitys taulukoksi omista P0-tarinoista** (vk 3): tarina → mikä osa Reactilla/Vitellä → mikä tulee ulkopuolelta → mistä. Miksi: yleisessee on kielimallin työtä, oma P0-lista ei.

9. **vk 4:n `help` nimeää ansat ansoina, ei ratkaisuina** (vk 4): acos-alue Utsjoella, refraktio ja Rovaniemen 24 h, `date_sun_info`-funktion `true`/`false`. Lisäksi "oma testiskripti" -varapolku pidetään johdonmukaisesti vk 14:ssä (`composer test` **tai** `php tests/run.php`). Miksi: nämä ovat viikon aidot p2-ketjut, ja opiskelijan pitää tietää, että virhe on odotettu.

10. **Rajaa vk 5** (vk 5, vk 13). Ohjaaja tarjoaa valmiin kuntaluettelon koordinaatteineen varapolkuna (n. 309 kuntaa, lähde ja lisenssi kirjattuna); geokoodausvaihtoehto sallitaan vain perustellusti ja tietoisena vk 13:n lisätyöstä; "samannimisten käsittely" siirretään P1:ksi vk 13:een. Opiskelijan tietovarastopäätös on silloin muoto ja rakenne (JSON / SQLite), ei datan hankinta. Miksi: kaksi raskainta viikkoa peräkkäin; datan hankinta on laskematon piilotyö.

11. **Kaaviokirjastovertailuun yksi kokeilusarake** (vk 6): paketin koko omasta `npm`-tulosteesta tai koeasennus yhdellä sarjalla. Miksi: muuten vertailu on kielimallin taulukko.

12. **Viikoittainen ohjaajapalaveri vakiotehtävänä vk 3–17** (kaikki viikot). 10 minuuttia: sovitut tehtävät, arvio, edellisen viikon toteuma kirjataan issueen; ohjaajan nimi ja päivä päiväkirjaan. Miksi: p8, p9 ja s6 ovat nyt yhden viikon tapahtumia; vk 7:n arvio vs. toteuma on keksitty, jos toteumaa ei ole kirjattu. Antaa samalla jokaiselle viikolle nimetyn ihmisen.

13. **Bugi-issuet vakiotehtävänä vk 4:stä alkaen** (vk 4–13): "kirjaa havaittu virhe issueksi heti (label `bug`): mitä odotit, mitä tapahtui". Miksi: vk 14:n kaksi ja vk 17:n kolmas ketju tarvitsevat aitoja havaintoja; muuten ne keksitään tai ohjaaja joutuu merkitsemään vikatehtäviä.

14. **Sijoita T12–T14 viikoille ja lihota normaalin käytön luokkaa** (vk 7, 11/12, 13, 14). Esim. T12 duplikaatti (vk 7), T13 vuosivalinta 366 pistettä (vk 11 tai 12), T14 syötetaulukko (vk 13). Normaaliin lisää Tampere 2026, neljä paikkaa, 61 → "1 h 1 min". Miksi: "odotettu tulos ennen ajoa" ei toteudu, jos testit kirjoitetaan vk 14; 1/5/4 ei ole kolmanneksittain.

15. **vk 8 valmis kun -ehto ehdolliseksi näppäimistön osalta** (vk 8, vk 12): "tooltip toimii kosketuksella; näppäimistöstä kirjattu mitä kirjasto tukee ja korvaava reitti (datataulukko kaavion alla tai päivävalitsin), toteutus vk 12". Miksi: ehto voi olla kirjastolla mahdoton – ja kirjattu rajoite on samalla k2-näyttö.

16. **Haaratyöskentely alkaa vk 6:sta** (vk 6–10): feature-haara + PR itselle joka viikko. **vk 11: kaksi haaraa** – palautemuutos ja vuosivalinta – jotka koskevat samaa tilatiedostoa, jolloin konflikti syntyy aidosti; vaihtoehtoisesti ohjaaja tekee pienen commitin mainiin (nimetty ihminen). Miksi: yksin tehdyssä projektissa konflikti ei synny itsestään; ensimmäinen haara ja ensimmäinen konflikti samalla viikolla on hyppy Git-aloittelijalle.

17. **Pura vk 12** (vk 11, vk 12). Vuosivalinta vk 11:een (ks. 16); vk 12 = responsiivisuus + saavutettavuus yhtenä kärkenä ("toimii puhelimella ja näppäimistöllä, Lighthouse ennen/jälkeen"). Jos halutaan, että vk 10:n katselmoija näkee vuosivalinnan, vaihtoehto on vk 8 – silloin vk 8 raskaampi. Miksi: kolme kärkeä; uusi P0-ominaisuus vaiheessa C; profiili erottaa responsiivisuuden ja saavutettavuuden.

18. **vk 13:een tietoturva-arvio, ei pelkkä taulukko** (vk 13): 5–8 riviä omasta sovelluksesta muodossa uhka → testi → tulos → toimenpide; syötetaulukko on tämän testiosa. Rajaus: korjataan vain rivit, joilla saatu ≠ odotettu, muut issueiksi. Miksi: s11 on "arvioi"; ilman omaa uhkalistaa arvio on yleislista.

19. **vk 15:n refaktoroinnit ohjaajan koodikatselmoinnin löydöksistä** (vk 15): ohjaaja lukee koodin ja kirjaa kolme nimettyä havaintoa päivämäärällä, opiskelija refaktoroi ne. Riippuvuustaulukon lähteeksi `npm ls --depth=0` ja `composer show` -tulosteet. LICENSE-päätökselle määräaika (vk 8, samalla kun katselmoijat nimetään). Miksi: ennalta listatuista refaktoroinneista yksi on jo tehty vk 8–9; kielimalli hallusinoi lisenssit; p5 saa nimetyn ihmisen.

20. **vk 17:n luovutusviestille vastaanottaja** (vk 17): viesti osoitetaan ohjaajalle asiakkaan roolissa, ohjaaja vastaa yhdellä asiakaskysymyksellä, opiskelija vastaa siihen; viestissä viitataan vk 10 katselmoijan sitaattiin ja siihen, mitä muutettiin. Jos vk 16 ei löytänyt estäviä virheitä, kolmas ketju otetaan bugilistalta (ks. 13). Miksi: s2 ilman vastaanottajaa on kirjoitusharjoitus; kolmas ketju ei saa riippua sattumasta.

21. **vk 18:n itsearviointi sidotaan kolmeen nimettyyn tilanteeseen** (vk 18): vk 10 palaute, vk 16 testaajan epäröinti, yksi ohjaajapalaveri jossa sovittu muuttui – ja ohjaaja kirjaa lyhyen vastakommentin. Miksi: "arvioi omaa toimintaa tiimin jäsenenä" on yksin tehdyssä projektissa todennettava suhteessa mukana olleisiin ihmisiin.

22. **Nimeä itse rakennettu näkymä kehyksessä** (Kehys, vk 7): lomake + paikkalista rakennetaan alusta ilman komponenttikittejä (MUI, shadcn, Headless UI); kaaviokirjasto on ainoa valmis UI-komponentti. Miksi: Webprojektiprofiilin kova vaatimus.

23. **Muistutus kirjoittajalle, ei rungon vika:** RC, PR, merge-konflikti, CORS, XSS, Lighthouse, curl, tag, hook, proxy, P0 – jokainen selitetään ensikäytössä (§ 12). Kriittisimmät: vk 3 proxy, vk 11 PR ja konflikti, vk 16 rc1 ja tag.

---

## Päätös

Runko on kehyksen mukainen ja AI-resilientti; yhtään viikkoa ei tarvitse hylätä. Korjaukset 2, 12, 13, 16 ja 17 ovat rakenteellisia ja pitää tehdä ennen valmista tekstiä; loput ovat täsmennyksiä, jotka voi tehdä kirjoitusvaiheessa.

KORJATTAVA
