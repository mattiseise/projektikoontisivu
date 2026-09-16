# Valokaari – viikkorunko, kierros 2 (Linnean r1-korjaukset tehty)

## Kehys

- **Projekti:** Valokaari – päivänvalon pituuden visualisointi Suomen paikkakunnille. Selainsovellus, jossa käyttäjä kirjoittaa paikkakunnan nimen, lisää sen kaavioon, vertaa useita paikkoja, näkee tooltipissa päivän ja keston ("21. kesäkuuta · Rovaniemi · 23 h 59 min"), näkee kaamoksen (0 min) ja yöttömän yön (1440 min) korostettuina ja leikkauspisteet merkittyinä. Vuosivalinta, karkausvuodet oikein.
- **Asiakas (kuvitteellinen):** Revontuli Travel, Rovaniemen matkailuyritys. Ohjaaja toimii asiakkaan sijaisena; katselmoija (vk 10) ja julkaisutestaaja (vk 16) ovat nimettyjä ulkopuolisia, nimeäminen viimeistään vk 8.
- **Tekniikka (sovittu):** Backend: PHP 8.2+ ilman kehystä, yksi rajapinta `GET /api/daylight?city=&year=`, JSON. Frontend: React + TypeScript + Vite; Tailwind CSS otetaan käyttöön perusteltuna tuontina vk 7, kun ensimmäinen käsin rakennettu näkymä (lomake + paikkalista) sitä tarvitsee. Kaaviokirjasto on ainoa valmis käyttöliittymäkomponentti; komponenttikittejä (MUI, shadcn, Headless UI) ei käytetä. Kansiot `client/`, `server/`, `project-docs/`.
- **Julkaisumalli, oletus:** yksi PHP-palvelin tarjoilee sekä buildatun `client/dist`-kansion että `/api`-reitit (sama osoite, ei CORS-asetuksia, yksi ympäristö). Kaksipalvelinmalli on sallittu vain perustellusti, ja sen lisätyö (CORS, kaksi ympäristöä, kaksi nukkuvaa ilmaispalvelua) sanotaan ääneen vk 3:n esimerkissä.
- **Julkaisualusta on ohjaajan päätös määräajalla:** ohjaaja valitsee ja kokeilee alustan (PHP 8.2 + staattinen dist) ennen vk 1:tä tai viimeistään vk 2:lla ja antaa opiskelijalle testatun polun. Vk 3:lla on kirjattu varapolku (ks. viikko 3).
- **Vakiotehtävät joka viikolla 3–17:** (a) **viikkopalaveri ohjaajan kanssa, 10 min**: sovitut tehtävät, arviot ja edellisen viikon toteuma kirjataan issueihin, ohjaajan nimi ja päivä päiväkirjaan (p8, s6, ja jokaiselle viikolle nimetty ihminen); (b) vk 4:stä alkaen **jokainen havaittu virhe kirjataan heti issueksi tunnisteella `bug`** (mitä odotit, mitä tapahtui) – vk 14:n ja 17:n ketjut otetaan tästä listasta (p2). (c) vk 6:sta alkaen **jokainen ominaisuus tehdään omassa haarassa ja yhdistetään pull requestilla**, jonka opiskelija katselmoi itse (s12, s13:n pohjustus).
- **Tekoälyn raja (projektikohtainen):** itse tehdään `Daylight`-moduuli, `intersections.ts`, `useLocations`-hook, komponenttijako, testien odotusarvot, saavutettavuusratkaisut ja CSS. Tekoäly saa selittää virheitä, ehdottaa testitapauksia ja tarkistaa koodia. Jokainen merkittävä käyttö AI-lokiin.
- **Kesto ja mitoitus:** päivätön, 18 työviikkoa, 4 vaihetta (5+5+5+3). Katselmoinnit vk 10 ja 16. RC vk 16, v1.0 vk 17, näyttö vk 18. ≥ 12 testitapausta (tässä 15: T01–T15, sijoitettu viikoille 4, 5, 7, 8, 9, 11, 13), 3 ketjua (vk 14 kaksi, vk 17 yksi; raaka-aine bug-issueista).
- **Tutkinnon osat (OPH-6216-2025):** p1–p11, s1–s14, k1–k7 = 32.
- **Opiskelijan omat päätökset:** laskentatapa (vk 2 → testataan 4) · paikkakuntatiedon muoto ja rakenne JSON/SQLite (vk 2 → 5; datan hankinnassa ohjaajan varapolku) · julkaisumalli yksi vai kaksi palvelinta (vk 3) · kaaviokirjasto (vk 6) · komponenttijako ja tilanhallinta (vk 7, 15) · leikkauspisteen määritelmä ja toleranssi (vk 9) · rajaus.
- **Ohjaajan päätökset (avoimia asioita, määräajoin):** julkaisualusta (ennen vk 1, viimeistään vk 2) · lisenssi (viimeistään vk 8) · katselmoijat vk 10 ja 16 (viimeistään vk 8) · repon julkisuus, tekijänimi, huoltajan suostumus (vk 1) · perusteversion siirtymäsääntö · arvioinnin järjestelyt vk 18.

## Viikot

### Vaihe A · Ydin (1–5)

**1 · Aloitus** (pohjustus). Kärki: PHP:n sisäänrakennettu palvelin ja React + Vite -runko käynnistyvät omalla koneella; julkinen repository on olemassa ja tarkistettu. Tuotos: versiotaulukko (PHP, Node, npm, Git), repo + julkisuustarkistuslista ohjaajan kuittauksella, kansiot client/ server/ project-docs/, `server/public/index.php` palauttaa `{"status":"ok"}`, kysymyslista ohjaajalle (≥ 6). **Ei Tailwindia** tällä viikolla. Valmis kun: nimetty toinen henkilö (luokkakaveri tai ohjaaja) saa rungon käyntiin pelkän README:n avulla; ohjaaja on kuitannut tarkistuslistan. Ankkuri: artefakti + ihminen. Työnäytteet: p1, k1, s12 alkaa.

**2 · Suunnitelma ja priorisointi** (pohjustus). Kärki: hyväksytty tekninen suunnitelma: ohjaajan vastaukset kysymyslistaan kirjattuina (nimi, päivä, vastaus), käyttäjätarinat P0/P1/P2, laskentatapavertailu **omalla koeajolla** (`php -r` + `date_sun_info` Helsingille 21.6., tuloste päiväkirjaan), paikkakuntatiedon muodon vertailu (JSON / SQLite; ulkoinen geokoodaus vain perustellusti), rautalangat lomakkeesta, listasta ja kaaviosta, komponenttijako, issue-taulu arvioineen. Rajapintasopimuksesta vain luonnos suunnitelman esitäytetyssä osiossa; varsinainen `api-sopimus.md` vk 3. Valmis kun: ohjaaja on hyväksynyt rajauksen kirjatulla kommentilla; jokaisella P0-tarinalla on issue, kriteerit ja arvio. Ankkuri: ihminen (kirjattu palaveri) + oma koeajo. Työnäytteet: s1, s4, s5, s8, p8, p9, s6 alkaa, k5 alkaa.

**3 · Julkaistu runko** (feature). Kärki: sovellus, jossa on yksi käsin kirjoitettu React-komponentti (`HealthStatus`: hakee `/api/health` fetchillä ja näyttää tilan – propsit, tila, fetch), ja PHP-rajapinnan `/api/health` ovat julkisessa osoitteessa; Viten proxy ohjaa kehityksessä `/api`-kutsut PHP:hen; `api-sopimus.md` (osoite, parametrit, vastaus, virheet 400/404/502) ja k2-selvitys **taulukkona omista P0-tarinoista** (tarina → mikä Reactilla/Vitellä → mikä ulkopuolelta → mistä) kirjoitettu. Julkaisumalli valittu (oletus yksi palvelin) ja perusteltu. **Varapolku:** jos julkinen osoite ei toimi torstaihin mennessä, kirjaa virhe ja alustan loki päiväkirjaan, jatka vk 4:ää ja ohjaaja antaa varapolun maanantain viikkopalaverissa. Valmis kun: toinen henkilö avaa osoitteen ja `/api/health` omalla laitteellaan. Ankkuri: artefakti (osoite, lokit). Työnäytteet: k2, k1 täydentyy, k3 alkaa, s14 ja k6 alkavat.

**4 · Päivänvalolaskenta** (feature). Kärki: PHP-moduuli `Daylight` laskee päivän minuutit koordinaateille ja koko vuoden listan; arvot 0–1440; karkausvuosi 366 päivää. Odotusarvot haetaan ennen ajoa (Ilmatieteen laitos / timeanddate): T01 Helsinki 21.6. ≈ 18 h 56 min, T02 Helsinki 21.12. ≈ 5 h 49 min, T03 Utsjoki 21.12. = 0, T04 Utsjoki 21.6. = 1440; toleranssi ±3 min. Testit ajettavina (PHPUnit Composerin kautta **tai** oma `php tests/run.php` – sama valinta pidetään vk 14:ssä). **Ansat nimetään ansoina** help-osiossa: acos-alueen ylitys napapiirin pohjoispuolella, refraktio ja Rovaniemen 24 h, `date_sun_info`-funktion `true`/`false`-paluuarvot, aikavyöhyke päivän rajalla – virhe on odotettu, ei oma vika; jokainen kirjataan bug-issueksi. Valmis kun: testit menevät läpi komennolla; 2028 → 366 riviä, 2027 → 365. Ankkuri: artefakti + oma päätös. Työnäytteet: p4, s7, p3 alkaa, p2 (ketjun raaka-aine).

**5 · Paikkakuntahaku ja rajapinta** (feature). Kärki: `GET /api/daylight?city=&year=` palauttaa sopimuksen mukaisen JSONin; tuntematon → 404, virheellinen syöte → 400. Paikkakuntadata: **ohjaaja tarjoaa kuntaluettelon koordinaatteineen varapolkuna** (lähde ja lisenssi kirjattuna); oma hankinta avoimesta lähteestä sallittu, jos se valmistuu tiistaihin mennessä; ulkoinen geokoodaus vain perustellusti ja tietoisena vk 13:n lisätyöstä. Opiskelijan tietovarastopäätös on muoto ja rakenne (JSON-tiedosto vai SQLite), ei datan hankinta. Haun normalisointi: isot/pienet, ä/ö (`mb_`-funktiot), välilyönnit. Samannimisten käsittely on P1 → vk 13. Testit T05 Helsinki 2026 → 200 ja 365 riviä, T06 "utsjoki" → 200 Utsjoki, T07 "Tuntematonkylä" → 404, curlilla. Ankkuri: artefakti. Työnäytteet: s9, s7 täydentyy, p7 alkaa (s10, jos ulkoinen rajapinta).

### Vaihe B · Ominaisuudet (6–10)

**6 · Ensimmäinen kaavio** (feature). Kärki: selain hakee Helsingin datan ja piirtää sen viivakaaviona; lataus- ja virhetila näkyvät. Kaaviokirjaston vertailu (koko omasta `npm`-tulosteesta tai koeasennus yhdellä sarjalla – **oma kokeilusarake pakollinen**; lisenssi, React-tuki, tooltip- ja merkintätuki, näppäimistötuki), `api.ts` erillään kaaviosta. **Haaratyöskentely alkaa:** ominaisuushaara + pull request itselle. Valmis kun: kaavio näkyy julkaistussa versiossa; palvelimen sammutus näyttää virheilmoituksen. Ankkuri: oma konteksti + artefakti. Työnäytteet: k4 (kaaviokirjasto), s10, k3, p6 alkaa, s12.

**7 · Monta paikkaa – itse rakennettu näkymä** (feature). Kärki: lomake lisää paikan, lista näyttää paikat poistonapilla, duplikaatti estetään, jokaisella sarjalla oma väri, asteikko 0–24 h, yhden paikan virhe ei kaada muita (`Promise.allSettled`). **Tailwind tuodaan tässä perusteltuna ulkoisena komponenttina** (mitä se ratkaisee tässä näkymässä, mitä ei). Lomake ja lista rakennetaan alusta ilman komponenttikittejä. Tilanhallinta `useLocations`-hookissa. Testit T08 neljä paikkaa (Helsinki, Tampere, Rovaniemi, Utsjoki) samassa kaaviossa, T09 duplikaatti hylätään ja "Tuntematonkylä" ei kaada muita. Arvio vs. toteuma -vertailu viikkopalaverien kirjauksista (s6). Ankkuri: oma konteksti + artefakti. Työnäytteet: p6, p7, k3, k4 (Tailwind), s6.

**8 · Tooltip ja ääripäät** (feature). Kärki: tooltip näyttää päivän, paikan ja keston luettavasti; kaamos (0) ja yötön yö (1440) erottuvat. `format.ts` Vitest-testeillä T10 (0 → "0 min", 1440 → "24 h", 61 → "1 h 1 min"), T11 ("2026-06-21" → "21. kesäkuuta"). Valmis kun: korostukset näkyvät Utsjoen datalla; tooltip toimii hiirellä ja kosketuksella; **näppäimistöstä kirjataan, mitä kirjasto tukee, ja korvaava reitti (datataulukko kaavion alla tai päivävalitsin) toteutetaan vk 12** – kirjattu rajoite on samalla k2-näyttö. Ankkuri: artefakti. Työnäytteet: p3, k3, p4 täydentyy.

**9 · Leikkauspisteet** (feature). Kärki: sovellus laskee ja merkitsee päivät, joina kahden paikan päivänvalo on (lähes) yhtä pitkä. `intersections.ts` puhtaana funktiona: oma määritelmä (merkinvaihto ja/tai erotus ≤ toleranssi), peräkkäisten päivien yhdistäminen yhdeksi merkiksi (tasauspäivien "kaikki leikkaavat" ja polaarijaksojen tasatilanteet). Help sisältää piirroksen kahdesta käyrästä maaliskuussa ja kesäkuussa. Testit T12 Helsinki–Rovaniemi: leikkaus maalis- ja syyskuussa, ei kesäkuussa; T13 Utsjoki–Inari yöttömän yön aikana: yksi merkki jaksolle, ei kymmeniä. Ankkuri: oma päätös + artefakti. Työnäytteet: s7, p4, p3.

**10 · Asiakaskatselmointi** (katselmointi). Kärki: nimetty ulkopuolinen (Revontuli Travelin roolissa) kokeilee julkaistua väliversiota: lisää kolme kohdetta, tulkitsee kaavion ja tooltipin. Herätä nukkuva ilmaisalusta ennen tilaisuutta. Asiakaskielinen esittely; muistio sitaatein, tulkinta erillään, muutokset issueiksi P-luokin. Ankkuri: ihminen. Työnäytteet: s2, s3, p10, s1 täydentyy.

### Vaihe C · Valmiiksi (11–15)

**11 · Vuosivalinta ja palautemuutos kahdessa haarassa** (feature). Kärki: käyttäjä valitsee vuoden ja kaikki paikat haetaan uudelleen (T14: 2028 → 366 pistettä); katselmoinnin tärkein muutos toteutettu; molemmat tehty omissa haaroissa, jotka koskevat samaa tilatiedostoa (`useLocations`), jolloin **merge-konflikti syntyy aidosti** ja ratkaistaan hallitusti; pull requestit yhdistetty ja muutos tuotannossa. Vaihtoehtona ohjaaja tekee pienen commitin mainiin (nimetty ihminen). Ankkuri: artefakti (PR:t, konfliktin commit). Työnäytteet: s13, s10 (uudelleenhaku), p7, p10 täydentyy, s12 koonti.

**12 · Mobiili ja saavutettavuus** (laatu). Yksi kärki: sovellus toimii puhelimella ja näppäimistöllä, Lighthouse ennen/jälkeen. Oikea laite, Tailwindin taitekohdat, kaavion skaalaus, näppäinkäyttö (vk 8:n korvaava reitti toteutetaan), kontrasti, label-kytkennät, otsikkohierarkia. Ankkuri: artefakti (kuvakaappaus omalta puhelimelta, raportit). Työnäytteet: p6 täydentyy, k3, k2 (kirjaston rajoite kiertoreitillä).

**13 · Tietoturva-arvio ja virheenkäsittely** (laatu). Kärki: **oman sovelluksen uhkalista** 5–8 riviä muodossa uhka → testi → tulos → toimenpide (esim. `year=999999` pitkä silmukka, `<script>`-nimi, ylipitkä syöte, ulkoisen palvelun aikakatkaisu, CORS jos kaksi palvelinta, salaisuudet repossa); syötetaulukko T15 curlilla on arvion testiosa; korjataan vain rivit, joilla saatu ≠ odotettu, muut issueiksi. Samannimisten paikkojen käsittely (P1) tehdään tässä, jos aikaa on. Ankkuri: artefakti. Työnäytteet: s11, s7.

**14 · Testaus** (laatu). Kärki: testiraportti 15 testitapauksesta kolmessa luokassa (normaali 7, rajat 5, virheet 3) odotusarvoineen, jotka kirjattiin viikoilla 4–13 ennen ajoa; ajettavat testit `composer test` tai `php tests/run.php` sekä `npm test`; kaksi täydellistä ketjua bug-issuelistalta. Ankkuri: artefakti (aidot bugit; jos lista on tyhjä, ohjaaja merkitsee vikatehtäviä). Työnäytteet: p3, p2, k5.

**15 · Laatu ja dokumentaatio** (laatu). Kärki: **ohjaaja lukee koodin ja kirjaa kolme nimettyä havaintoa päivämäärällä; opiskelija refaktoroi ne** ennen/jälkeen-diffeineen; README käyttäjälle ja kehittäjälle (käyttöönotto, dev-komennot, rajapinnan kuvaus esimerkkivastauksella); riippuvuustaulukko `npm ls --depth=0`- ja `composer show`-tulosteista lisensseineen; LICENSE (ohjaajan päätös vk 8 mennessä). Ankkuri: ihminen + artefakti. Työnäytteet: p5, k7, s12.

### Vaihe D · Julkaisu (16–18)

**16 · Julkaisuehdokas ja julkaisutestaus** (julkaisu). Kärki: jäädytys, v1.0-rc1 tagilla julkisessa osoitteessa, oma puhdas asennus toisella koneella tai tyhjässä kansiossa/kontissa (ohje sanoo, mikä) pöytäkirjoineen, nimetty ulkopuolinen testaa pelkän kirjallisen ohjeen avulla (Utsjoki + Helsinki, vuosi 2028, tooltip, leikkauspiste), estävät issueiksi. Ankkuri: ihminen. Työnäytteet: s3, s14, k6.

**17 · v1.0 ja luovutus** (julkaisu). Kärki: estävät korjattu täydellisenä ketjuna (jos estäviä ei löytynyt, kolmas ketju otetaan bug-listalta), regressioajo, v1.0-tag ja release, savutesti, julkaisutiedote; **luovutusviesti ohjaajalle asiakkaan roolissa**, ohjaaja vastaa yhdellä asiakaskysymyksellä ja opiskelija vastaa siihen; viestissä viitataan vk 10:n sitaattiin ja siihen, mitä muutettiin. Ankkuri: ihminen + artefakti. Työnäytteet: s14, k6, s2, p2.

**18 · Näyttö** (naytto). Kärki: matriisi täsmälinkitetty 32 vaatimukseen, 8–10 min demo toiselle henkilölle, **itsearviointi sidottu kolmeen nimettyyn tilanteeseen** (vk 10 palaute, vk 16 testaajan epäröinti, yksi viikkopalaveri, jossa sovittu muuttui) ja ohjaajan lyhyt vastakommentti. Työnäytteet: p11.

## Kattavuustaulukko: vaatimus → viikko

| Tunnus | Vaatimus | Viikko, jolla työnäyte syntyy |
| --- | --- | --- |
| p1 | ohjelmointieditori / kehitysympäristö | 1 |
| p2 | etsii ja korjaa virheitä | 14, 17 ketjut; bug-issuet vk 4→ |
| p3 | testaa ohjelman toimintoja | 14; T01–T15 kirjattu ja ajettu 4, 5, 7, 8, 9, 11, 13 |
| p4 | rakenteinen ohjelmointi | 4, täydentyy 8–9 |
| p5 | ylläpidettävä koodi | 15 (ohjaajan koodikatselmoinnin löydökset) |
| p6 | käyttöliittymä suunnitelmasta | 7 (rautalangat vk 2), täydentyy 12 |
| p7 | toiminnot suunnitelmasta | 7, 11; alku 5 |
| p8 | sopii tehtävistä tiimin kanssa | viikkopalaveri 2→17, kirjattu |
| p9 | ratkoo ongelmia yhdessä | 2 vertailut; nimetyt hetket 3 (julkaisu), 4 (polaariansat), 11 (konflikti) |
| p10 | arvioi ratkaisujen toimivuutta yhdessä | 10, täydentyy 11 |
| p11 | arvioi omaa toimintaa tiimin jäsenenä | 18, kolme nimettyä tilannetta + ohjaajan kommentti |
| s1 | selvittää asiakkaan tarpeet | 2 (ohjaajan vastaukset kirjattuina), täydentyy 10 |
| s2 | viestii asiakaslähtöisesti | 10, 17 (viesti ohjaajalle asiakkaan roolissa, vastaus kysymykseen) |
| s3 | osallistuu katselmointiin | 10, 16 |
| s4 | tärkeysjärjestys | 2 |
| s5 | tehtäviksi jakaminen | 2, jatkuva |
| s6 | suunnittelee ja arvioi toteuttamista | viikkopalaverien arvio/toteuma 2→, vertailu 7 |
| s7 | toimintalogiikka | 4, 5, 9, 13 |
| s8 | tietovaraston valinta | 2 (JSON vai SQLite; perustelu omalla datalla) |
| s9 | yhteys tietovarastoon | 5 (SQLite-polulla yhteyskerros; JSON-polulla latausmoduuli ja rakenne – sanotaan ääneen) |
| s10 | rajapinnat ja tiedon käsittely | 3 (health), 6, 11; 5 jos ulkoinen geokoodaus |
| s11 | tietoturvan arviointi | 13 (uhkalista + testit) |
| s12 | versionhallinta | 1→; haarat 6→; koonti 11, 15 |
| s13 | osan liittäminen olemassa olevaan versioon | 11 |
| s14 | julkaisu tuotantoon | 3, 16, 17 |
| k1 | kehitysympäristön käyttöönotto ja konfigurointi | 1, 3 (proxy, build), 7 (Tailwind-konfiguraatio) |
| k2 | kirjaston mahdollisuudet ja rajoitteet | 3 (taulukko P0-tarinoista), 8/12 (tooltip-rajoite ja kiertoreitti) |
| k3 | kirjaston tärkeimmät toiminnot | 3, 6–8, 11–12 |
| k4 | ulkoiset komponentit | 6 (kaaviokirjasto), 7 (Tailwind) |
| k5 | suunnittelee, toteuttaa, testaa kirjastolla | 2, 6–9, 11–12, 14 |
| k6 | julkaisu asiakkaan ympäristöön | 3, 16, 17 |
| k7 | dokumentointi | 15 |

Kaikilla 32 vaatimuksella on viikko. Testitapaukset: T01–T04 vk 4 · T05–T07 vk 5 · T08–T09 vk 7 · T10–T11 vk 8 · T12–T13 vk 9 · T14 vk 11 · T15 vk 13. Luokat: normaali T01, T02, T05, T06, T08, T11, T14 (7) · rajat T03, T04, T10, T12, T13 (5) · virheet T07, T09, T15 (3).

## Linnean r1-löydösten käsittely

1 tekoälyn raja → kehykseen · 2 alusta ohjaajan päätös määräajalla + varapolku vk 3 · 3 yhden palvelimen oletus · 4 Tailwind vk 7 · 5 ohjaajan vastaukset vk 2 · 6 api-sopimus vk 3, koeajo vk 2 · 7 HealthStatus-komponentti vk 3 · 8 k2 taulukoksi · 9 ansat ansoina vk 4, testiskripti-varapolku myös vk 14 · 10 kuntaluettelo-varapolku, samannimiset → vk 13 · 11 kokeilusarake vk 6 · 12 viikkopalaveri vakiona · 13 bug-issuet vakiona · 14 T12–T15 sijoitettu, normaali 7 kpl · 15 tooltip-ehto ehdollinen, kiertoreitti vk 12 · 16 haarat vk 6→, kaksi haaraa vk 11 · 17 vk 12 yksi kärki · 18 uhkalista vk 13 · 19 koodikatselmointi vk 15, taulukko tulosteista, LICENSE vk 8 · 20 luovutusviestin vastaanottaja · 21 itsearviointi kolmeen tilanteeseen · 22 itse rakennettu näkymä nimetty · 23 termit ensikäytössä (kirjoitusvaihe, tarkista.js kohta 13 vahtii).
