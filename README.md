# Näyttöprojektit – koontisivu

Kokoaa toteutetut näyttöprojektit yhdelle selattavalle sivulle: peliprojektit,
webprojektit, muut ohjelmointiprojektit, kyberturvallisuus, IT-tuki ja muut.
Sivu on staattinen ja julkaistaan GitHub Pagesiin repositoryn juuresta.

Projektisivustot ovat omia repositoryjaan. Tämä repo ei sisällä niiden sisältöä,
vain kortit ja linkit.

## Rakenne

| Tiedosto | Mitä sisältää |
| --- | --- |
| `index.html` | sivun runko, otsikko ja suodatinpalkki |
| `projektit.js` | **kaikki data**: yksi olio per projekti |
| `koonti.js` | kategoriat, suodatus, haku ja korttien renderöinti |
| `koonti.css` | ulkoasu |
| `kuvat/` | korttien kuvakaappaukset, `<slug>.jpg` |

## Projektin lisääminen

Näyttöprojekti-skilli tekee tämän automaattisesti uuden projektin lopuksi:

```bash
node  <skilli>/scripts/kuvakaappaus.js  ../uusiprojekti/index.html  kuvat/uusiprojekti.jpg
python3 <skilli>/scripts/lisaa_koontiin.py \
    --koonti . --projekti ../uusiprojekti/project-docs/projekti.json \
    --sivusto https://kayttaja.github.io/uusiprojekti/ \
    --repo https://github.com/kayttaja/uusiprojekti \
    --tyyppi peli --commit
```

Sama slug päivittää olemassa olevan merkinnän, ei lisää toista. Käsin
täydennetyt kentät (esimerkiksi ryhmätunnus) säilyvät päivityksessä.

Käsin lisättäessä muoto on tavallista JSONia `window.PROJEKTIT = [...]`
-määrittelyn sisällä. Kenttien selitykset ovat tiedoston alussa.

## Projektityypit

`peli` · `web` · `ohjelmointi` · `kyber` · `ittuki` · `muu`

Tyyppi ratkaisee kortin ryhmän ja värin. Uusi tyyppi lisätään `koonti.js`:n
`KATEGORIAT`-listaan ja sen väri `koonti.css`:n `:root`-lohkoon.

## Tila

`kaynnissa` tai `paattynyt`. Käynnissä olevat näkyvät ensin. Kun toteutus
päättyy, aja lisäysskripti uudelleen `--tila paattynyt`.

## Kesto

`viikot` on kalenterijakso, esimerkiksi `vko 34–49`. `kesto` on projektin
todellinen pituus, esimerkiksi `14 viikkoa`. Ne eivät ole sama asia, koska
jaksoon osuu lomia. Kesto vaihtelee projekteittain, joten sivu ei oleta
mitään kiinteää viikkomäärää. Molemmat kentät saa jättää tyhjiksi.

## Paikallinen esikatselu

Avaa `index.html` selaimessa. Data luetaan `projektit.js`:stä tavallisena
skriptinä, joten mitään palvelinta ei tarvita.

## Kuvat

`kuvat/<slug>.jpg`, 1200×750, noin 100 kt. Kuva otetaan projektin etusivusta.
Jos kuva puuttuu, kortti näyttää harmaan paikanpitäjän — sivu ei hajoa.
