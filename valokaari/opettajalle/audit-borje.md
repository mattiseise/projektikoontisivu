# Börje: kielenhuoltoraportti, Valokaari

Päivä: 16.9.2026
Kohde: opiskelijalle näkyvä suomenkielinen teksti tiedostoissa `sisalto.js` ja `index.html`
Sääntö: `no_semantic_drift = true`. Sisältö, vaatimukset, viikkotehtävät, valmis kun -ehdot ja tunnukset eivät muuttuneet.

## Profiili

`matti/oppimateriaali` + projektin omat käytännöt. Teksti on ohjattua oppimateriaalia ammatillisen toisen asteen opiskelijalle, ja projektilla on omat sävy- ja välimerkkisäännöt (pilkku tai kaksoispiste ajatusviivan sijaan virkkeiden välissä, suomalaiset lainausmerkit, termien ensikäytön selitykset). Projektin säännöt voittivat aina, kun ne poikkesivat yleisohjeesta.

Lähtötilanne oli hyvä: teksti on tiivistä, asiapitoista ja koristelematonta, eikä siinä ollut AI-ismejä (innostusretoriikkaa, tyhjää vahvistusta, listaseiniä). Korjaukset ovat pääosin pilkutusta, muutamaa anglismia ja terminologian yhtenäistämistä.

## Kielelliset korjaukset

Yhteensä 56 kohdistettua korjausta: 33 tiedostossa `sisalto.js`, 23 tiedostossa `index.html`. Kolme index.html:n korjausta toistui jokaisessa 18 viikkokortissa, joten tekstiesiintymiä muuttui 110. Kaikki tehtiin Edit-työkalulla merkkijonon tai elementin sisältöön; rakenteeseen, attribuutteihin, avaimiin, koodiesimerkkeihin tai komentoihin ei koskettu.

### 1. Pilkutus (23 korjausta)

- Pilkku ennen `ennen kuin` -sivulausetta, 9 kohtaa (sisalto.js 295, 321, 415, 544, 631, 674, 705, 843; index.html 199).
  Esim. "Kirjaa jokainen ongelma ennen kuin korjaat mitään" → "Kirjaa jokainen ongelma, ennen kuin korjaat mitään".
- Pilkku päälauseiden väliin, kun subjekti vaihtuu (sisalto.js 297, 597, 662).
  Esim. "Palaute muuttuu koodiksi ja toimeksiannon vuosivalinta toteutuu" → "Palaute muuttuu koodiksi, ja toimeksiannon vuosivalinta toteutuu".
- Pilkku relatiivi- ja kysymyssivulauseen eteen (sisalto.js 296, 354, 494, 683; index.html 1690).
  Esim. "PHP-palvelin joka palauttaa" → "PHP-palvelin, joka palauttaa"; "näet mitkä viikot" → "näet, mitkä viikot"; "valinta ja mikä siitä jää huonommaksi" → "valinta ja se, mikä siitä jää huonommaksi".
- `sitten, kun` ja pilkku ennen `ilman että` (index.html 103).
- "avaa vain jos jäät jumiin" → "avaa vain, jos jäät jumiin" (index.html, 18 viikkokorttia).

### 2. Ajatusviivat virkkeiden välissä (5 korjausta, projektin käytäntö)

- "Sovi ohjaajan kanssa — näitä ei päätetä" → kaksoispiste (index.html 208).
- "Toimeksiannosta – tätä asiakkaan toivetta tämä viikko toteuttaa" → kaksoispiste (18 korttia).
- "kokeile ensin itse" -lisäys ajatusviivan takaa → kaksoispiste (18 korttia).
- "Kentät tallentuvat vain tähän selaimeen — lataus ja …" → puolipiste (18 korttia).
- "Mitä käytit, muutit tai hylkäsit — ja miten tarkistit?" → pilkku (index.html 1723).

### 3. Kongruenssi ja sijamuodot (5 korjausta)

- Lukusanasubjekti + yksikön verbi: "kaksi käyrää eivät leikkaa … vaan ohittavat" → "kaksi käyrää ei leikkaa … vaan ohittaa" (sisalto.js 595); "kaksi haaraa törmäävät" → "kaksi haaraa törmää" (662).
- "kaksi Lapin paikkaa ovat molemmat 1440 minuuttia viikkoja" → "kahdessa Lapin paikassa on molemmissa 1440 minuuttia viikkojen ajan" (597).
- Partitiiviobjekti verbille *vertaa*: "Vertaa laskentatavat … ja paikkakuntatiedon muodot" → "Vertaa laskentatapoja … ja paikkakuntatiedon muotoja" (index.html 410); "Vertaa … työmääräarviot toteumaan" → "työmääräarvioita" (780).
- Subjektin täydennys passiivilauseeseen: "ohjaaja on kuitannut … ja on lisätty yhteistyökumppaniksi" → "ja hänet on lisätty" (sisalto.js 298); "eivät koske DOMiin" → "ne eivät koske DOMiin" (569).

### 4. Anglismit ja kalkit (5 korjausta)

- "PHP ei aja staattisilla alustoilla" → "PHP:tä ei voi ajaa staattisilla alustoilla" (sisalto.js 382, 1043).
- "joiden päälle koko loppuprojekti rakentuu" → "joiden varaan" (344).
- "asiakkaan ydinkipu" → "asiakkaan ydinongelma" (332).
- "lisää ohjaaja collaboratoriksi" → "yhteistyökumppaniksi (collaborator)", kuten muualla sivustolla (335, 975, 1045).

### 5. Yhdyssanat, oikeinkirjoitus ja vokaaliharmonia (4 korjausta)

- "kaamos- ja yötönyö-jaksot" → "kaamosjaksot ja yöttömän yön jaksot" (sisalto.js 563).
- Lyöntivirhe "kielieasetukseen" → "kieliasetukseen" (580).
- "repositoryssä" → "repositoryssa" (1035); sivusto käyttää muuten takavokaalista taivutusta (repositoryssa, repositoryyn, repositorysta).
- Pleonasmi "siihen asti, kunnes" → "siihen asti, kun" (sisalto.js 261 ja 1051, index.html 1649).

### 6. Selkeys ja viittaukset (5 korjausta)

- index.html 93: pitkä virke jaettu kahtia, verbi "käydään" → "tehdään" ("sopimiset … tehdään hänen … kanssa"), ja sulkuhuomautus siirretty postposition eteen: "hänen tai muun nimetyn henkilön (esimerkiksi työviikkojen 10 ja 16 katselmoijien) kanssa".
- index.html 98: vaihekuvateksti jaettu puolipisteillä, jotta neljä luetteloa erottuvat toisistaan.
- sisalto.js 674: "ohjaaja tekee … commitin main-haaraan ja ratkaiset sen" → "ratkaiset siitä syntyvän konfliktin" (pronomini viittasi committiin).
- sisalto.js 428: "Se on yhdessä ratkottu ongelma, kirjaa se." → kaksoispiste.
- Näytä-rivien alkukirjain yhtenäistetty pieneksi kaksoispisteen jälkeen (index.html 508, 1094, 1167, 1386, 1460, 1533, 1606); muissa 11 kortissa se oli jo pieni tai alkoi koodilla.

### 7. Terminologian yhtenäistäminen (2 korjausta)

- "korvaava reitti" → "kiertoreitti" (index.html 852); muualla sivustolla käytetään vain kiertoreittiä.
- "sijaintilista" → "paikkalista" näyttömatriisin p6-kuvauksessa (index.html 1756); komponentin nimi on muualla paikkalista. Vaatimuksen virallinen nimi (`<strong>`) ei muuttunut.

## Äänen sovitus

Ei muutoksia rekisterin takia. Teksti on jo profiilin mukaista: lyhyet virkkeet, faktat, ei koristelua, opiskelijaa puhutellaan suoraan. Puhekieliset ammattisanat (jumittaa, committaa, buildattu, repo) säilytettiin: ne ovat projektin vakiintunut rekisteri ja kohderyhmälle luontevia.

## Sanastohuomiot (ei korjattu)

- Kehystekstien otsikko vaihtelee viikkotyypin mukaan: `feature`-viikoilla "Valmistuu tällä viikolla", muilla "Tällä viikolla valmistuu" (sisalto.js 71 vs. 77, 83, 89, 95, 101). Todennäköisesti tarkoituksellinen, joten jätin sen.
- "repo" ja "repository" esiintyvät rinnakkain. Sanasto listaa molemmat ("Git-repository, repo"), joten kyse ei ole epäjohdonmukaisuudesta.

## Semanttiset epäselvyydet (ei korjattu, käyttäjä päättää)

1. **sisalto.js 136**, termistö `pull request`: "Katselmoit sen itse ennen yhdistämistä; työviikolla 11 se ratkaisee konfliktin." Pull request ei ratkaise konfliktia, vaan opiskelija ratkaisee sen pull requestin yhteydessä. Tarkoitus lienee "työviikolla 11 sen yhteydessä ratkaistaan konflikti" tai "se tuo konfliktin näkyviin", mutta en arvannut.
2. **index.html 213** (ja suunnitelman kenttä 1674): "antaa testatun polun ennen työviikkoa 1, viimeistään työviikolla 2" on sisäisesti ristiriitainen aikataulu. Muualla sanotaan "ennen työviikkoa 1" (sisalto.js 969, 1043) ja suunnitelman tulosteessa "tarvitaan ennen työviikkoa 3" (265). Aikataulu on ohjaajan päätös, joten en yhtenäistänyt.
3. **sisalto.js 417**: "ensimmäinen aito virheenkorjausketjun raaka-aine" voi tarkoittaa myös "ensimmäisen aidon virheenkorjausketjun raaka-aine". Molemmat lukutavat toimivat, jätin ennalleen.

## Tarkoituksella muuttamatta jätetty

- Otsikkotason ajatusviivat erottimina: `<title>`, "Työviikko N / 18 – otsikko", suunnitelman markdown-otsikot ("### Kaaviokirjasto – työviikko 6", "Avoimet asiat – ohjaaja omistaa" sekä sen vastine index.html 1649) ja placeholder "Valokaari – päivänvalon pituus…". Projektin sääntö koskee virkkeiden välisiä ajatusviivoja, ei otsikkoerottimia.
- `help.actions`-rivien ajatusviiva komennon ja selityksen välissä (sisalto.js 545, 683, 717).
- index.html 88: erittäin pitkä johdantokappale. Jakaminen vaatisi uuden `<p>`-elementin, mikä on rakenteellinen muutos.
- "Esim." päiväkirjan vihjetekstissä (sisalto.js 160) ja "sitä mukaa" (638): hyväksyttäviä, ei koskettu.
- Kaikki lukitut tunnukset ja termit (T01–T16, P0/P1/P2, p1–p11, s1–s14, k1–k7, RC, v1.0-rc1, komponentti- ja tiedostonimet), ePerusteiden vaatimusnimet, termistö-taulukon `termi`-avaimet, koodilohkot, komennot, polut ja URL-osoitteet.

## Rakenteelliset riskit

Ei havaittu. `node tyokalut/tarkista.js`: 0 virhettä, 4 huomautusta (puuttuvat `downloads/`-tiedostot, tunnettu tilanne). `sisalto.js` latautuu (`ok`). Termien ensikäytön selitykset (eli, sulut) säilyivät, joten automaattinen termistötarkistus pysyi vihreänä.

## Valmis julkaistavaksi?

Kyllä. Kolme semanttista epäselvyyttä eivät estä julkaisua, mutta kohta 2 (julkaisualustan määräaika) kannattaa yhtenäistää ohjaajan päätöksen mukaan ennen kuin opiskelijat aloittavat.
