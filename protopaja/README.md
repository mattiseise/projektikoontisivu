# ProtoPaja – ohjattu näyttöprojekti

Ohjattu näyttöprojekti: opiskelija toteuttaa yksin Unityllä kolme pientä peliprototyyppiä
oppilaitoksen pelimusiikin kurssin harjoitusmateriaaliksi 18 työviikossa. Asiakkaat ovat
Caito ja Toni, ohjaajat Matti ja Antti. Musiikkikurssin opiskelijat lisäävät peleihin itse
musiikit ja ääniefektit. Se on heidän harjoituksensa, joten ProtoPajan peleissä ei ole ääniä
eikä äänivalmistelua.

## Mikä tämä sivusto on

Tämä kansio sisältää **ohjaussivuston**, ei pelejä. Sivusto ohjaa opiskelijan 18 työviikon läpi:
toimeksianto, kokonaiskuva, suunnitelmalomake, 18 viikkokorttia (72 työvaihetta, 409 osatehtävää), työtapa, termit, projektipäiväkirja, AI-loki, näyttömatriisi (32 vaatimusta)
sekä paperinen työpaketti ja opettajan näyttösuunnitelma.

Opiskelijan varsinainen työ (Unity-projektit, `docs/` asiakkaille ja `project-docs/`
ohjausta ja näyttöä varten) tehdään hänen **omaan repositoryynsa**. Sivuston rasti ei
ole palautus.

### Yksilöprojekti ja tiimi

- Rastit, päiväkirja, suunnitelma ja AI-loki tallentuvat vain opiskelijan selaimeen. Ohjaajat
  eivät näe niitä. Seuranta on tehtävätaulussa, työaikataulukossa ja repositoryssa.
- Tutkinnon osissa on tiimissä tehtäviä kokonaisuuksia. Tiimin muodostavat opiskelija, ohjaaja
  ja asiakkaat: tehtävistä ja järjestyksestä sovitaan ohjaajan kanssa viikkotarkistuksessa,
  asiakkaat kokeilevat pelejä työviikoilla 6 ja 12, toinen opiskelija tekee vertaisarvion
  työviikolla 9 ja projektin ulkopuolinen henkilö vastaanottotestin työviikolla 16.
- Toteutusviikkojen rytmi: suunnittele (pseudokoodi ja kortit) → toteuta → testaa
  testimatriisilla.
- Lisätavoitteet (neljäs ja viides peli) ovat Lisätavoite-laatikossa, eivät työvaiheina.

## Tutkinnon osat

Näyttömatriisi on koottu ePerusteista: Tieto- ja viestintätekniikan perustutkinto,
diaarinumero OPH-6216-2025 (perusteId 9816282). Samat 32 vaatimusta ovat sanatarkasti myös
aiemmassa perusteessa OPH-4948-2021 (perusteId 7861752). **Opiskelijan perusteversio
ja suoritettavat tutkinnon osat vahvistetaan opiskelijakohtaisesti** ennen näyttöä.

| Tutkinnon osa | Vaatimuksia | Tunnukset |
| --- | --- | --- |
| Ohjelmointi | 11 | p1–p11 |
| Ohjelmistokehittäjänä toimiminen | 14 | s1–s14 |
| Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla | 7 | k1–k7 |

## Päivätön tila

Viikot 1–18 ovat työviikkoja opiskelijan omasta aloituksesta, eivät kalenteriviikkoja. Aikataulu ja
ohjausvastuut ovat ehdotuksia, jotka vahvistetaan aloituksessa.

## Pedagoginen hyväksyntä

Viikkorunko on läpäissyt Linnea-portin (kriteeristönä skillin pedagoginen runko, ePerusteiden 32
vaatimusta ja projektikuvaus). Kierros 1: KORJATTAVA (henkilökohtainen ohjelmointi joka
toteutusviikolla, roolinvaihto, viikon 1 järjestys, tekstitehtävien omat artefaktit).
Kierros 2: **HYVÄKSYTTY 3.11.2026**; kuusi pientä huomiota korjattiin sisällön kirjoitusvaiheessa.

**Ingrid, Oskar ja Linnea 9.–11.11.2026 (skillin vaihe 5b).** Yksilöprojektiversion tarkastivat
Ingrid (oppimisen tuen esteet, S2; kolme osaa) ja Oskar (tutkintoperusteet OPH-6216-2025; yksi ajo
jokaista tutkinnon osaa kohden). Revisio 4861af2: kaikki kuusi APPROVED_WITH_NOTES, Linnea r1 KORJATTAVA,
r2 KORJATTAVA (viikon 1 täsmälinkit). Revisio ed07d4b: uusi Ingrid- ja Oskar-ajo, kaikki kuusi
APPROVED_WITH_NOTES, Oskar 32/32 vaatimusta suhteella supports. **Linnea r3: HYVÄKSYTTY HUOMAUTUKSIN
11.11.2026**, ja huomautukset korjattiin samana päivänä. Ajokansiot:
`~/Documents/agentti-muistiinpanot/ingrid-oskar/tarkastukset/protopaja-4861af2-20261109-1905/` ja
`…/protopaja-ed07d4b-20261110-2138/` (raportit, run.json, linnea-r1–r3.md). Ohjaajille jäävät
kysymykset (tiimin määritelmä, Unity-versio, tekoälysäännöt, viikkotunnit, perusteversio, luovutustapa
ym.) ovat tiedostossa linnea-r3.md. Roolien hyväksyntä ei ole julkaisulupa, vaan opettaja päättää.

**Muutos 9.11.2026.** Kollegan palautteen perusteella ProtoPaja muutettiin pariprojektista
yksilöprojektiksi, äänivalmistelu poistettiin (äänitapahtumataulukko, `docs/aanitapahtumat.md`)
ja kaikki tehtävätekstit kirjoitettiin uudelleen selkeämmiksi. Kielen tarkistusohje:
`claude-kehikko`-repon `skills/borje-kielenhuolto/references/tehtavakieli.md`.

## Oppimispolun katkoskohdat

`sisalto.js`:n `oppimispolku`-kenttä kertoo tarkistusskriptille (kohta 20, moottori v2.8.6), missä
kuusi tunnettua katkoskohtaa on hoidettu: lähtötasokokeilu 1-4, pseudokoodi jokaisen
ohjelmointitehtävän alussa, selitä ja muuta -tarkistukset 3-5, 6-5 ja 9-5, jumiohje ja
jatkotyöstökokeilut 6-2 ja 16-1. Ohje ja tarkastuksen pohja: skillin `references/katkoskohdat.md`.

## Rakenne

| Tiedosto | Mitä sisältää |
| --- | --- |
| `index.html` | sivuston rakenne, viikkokortit ja näyttömatriisi |
| `sisalto.js` | projektin sisältödata: viikkojen työvaiheet, vaiheet, suunnitelma, sanasto, opettaja-aineisto |
| `app.js`, `styles.css`, `tyokalut/` | yhteinen moottori v2.8.5, **ei muokata projektikohtaisesti** (styles.css: vain `:root`-paletti) |
| `kuvitukset.json` | yleisten SVG-kuvitusten tekstit ja värit |
| `assets/viikot/viikko-NN.svg` | viikkojen tavoitekuvat (luonnoksia), generoidaan |
| `assets/lopputulos.jpg` | tavoitekuva (luonnos) protosta `project-docs/lopputulos/proto.html` |
| `project-docs/kuvat/tee_kuvat.py` | tekee viikkojen tavoitekuvat ja tavoitekuvan proton |
| `project-docs/projekti.json` | konfiguraatio ja koontikortin tiedot |
| `odotukset.json` | tehtävänanto koneluettavana näyttöseurantaa varten, generoidaan |

**Viikkokortin osio "Tältä valmis tulos näyttää"** on index.html:ssä staattinen lohko heti viikon
otsikon jälkeen. Sen kohta "Viikon lopussa kokeilette" on sama teksti kuin `sisalto.js`:n viikon
`done`, joka näkyy myös viikon lopputarkistuksessa. Jos muutat toista, muuta myös toista.

## Materiaalien generointi

```
python3 project-docs/kuvat/tee_kuvat.py    # viikkojen tavoitekuvat + tavoitekuvan proto
python3 tyokalut/tee_kuvitukset.py         # yleiset SVG-kuvitukset + faviconit (Pillow)
node tyokalut/tee_vaihekuva.js             # vaihekuva sisalto.js:n vaiheista
npm install docx && node tyokalut/tee_lataukset.js   # docx-tiedostot + tyopaketti-print.html
node tyokalut/tarkista.js                  # savutesti: index.html ja sisalto.js synkassa
node tyokalut/tarkista.js --katkokset      # oppimispolun katkoskohdat ja viikkojen kuormataulukko
```

Tavoitekuva: `bash <skilli>/scripts/lopputulos_kuva.sh project-docs/lopputulos/proto.html assets/lopputulos.jpg`.
Työpaketin PDF: tulosta `tyokalut/tyopaketti-print.html` Chromen headless-tilassa tiedostoksi
`downloads/protopaja-tyopaketti.pdf`. Näyttöseuranta: `node <skilli>/scripts/vie_odotukset.js protopaja`.

## Julkaisu

Julkaistaan koontisivun mukana GitHub Pagesissa:
<https://mattiseise.github.io/projektikoontisivu/protopaja/>.
