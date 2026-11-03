# ProtoPaja – ohjattu näyttöprojekti parille

Ohjattu näyttöprojekti: kaksi opiskelijaa toteuttaa parityönä Unityllä kolme pientä
peliprototyyppiä oppilaitoksen pelimusiikin kurssin harjoitusmateriaaliksi 18 työviikossa.
Asiakkaat ovat Caito ja Toni, ohjaajat Matti ja Antti.

## Mikä tämä sivusto on

Tämä kansio sisältää **ohjaussivuston**, ei pelejä. Sivusto ohjaa parin 18 työviikon läpi:
toimeksianto, kokonaiskuva, suunnitelmalomake, 18 viikkokorttia (77 työvaihetta, 410
osatehtävää), työtapa, termit, projektipäiväkirja, AI-loki, näyttömatriisi (32 vaatimusta)
sekä paperinen työpaketti ja opettajan näyttösuunnitelma.

Opiskelijoiden varsinainen työ (Unity-projektit, `docs/` asiakkaille ja `project-docs/`
ohjausta ja näyttöä varten) tehdään parin **omaan yhteiseen repositoryyn**. Sivuston rasti ei
ole palautus.

### Parityö sivustolla

- Kumpikin käyttää sivustoa omassa selaimessaan. Rastit, päiväkirja, suunnitelma ja AI-loki
  tallentuvat vain siihen selaimeen. Ne eivät ole yhteinen tehtävätaulu, eivätkä ohjaajat näe
  niitä. Yhteinen seuranta on tehtävätaulussa (esimerkiksi Trello), yhteisessä
  työaikataulukossa ja repositoryssa.
- Monikko (Sopikaa, Testatkaa) tarkoittaa yhteistä työtä ja yksikkö (Tee oma…) henkilökohtaista
  osuutta. Jokaisella toteutusviikolla on rytmi: sopikaa kaksi omaa osaa → toteuta oma osasi →
  testatkaa toistenne osat.
- Vastuutaulukko vaihtaa osa-alueet pelien välillä, jotta kumpikin saa oman työnäytteen
  jokaiseen omien tutkinnon osiensa vaatimukseen. Vaatimuksia ei jaeta parin kesken.
- Lisätavoitteet (neljäs ja viides peli) ovat Lisätavoite-laatikoissa, eivät työvaiheina.

## Tutkinnon osat

Näyttömatriisi on koottu ePerusteista: Tieto- ja viestintätekniikan perustutkinto,
diaarinumero OPH-6216-2025 (perusteId 9816282). Samat 32 vaatimusta ovat sanatarkasti myös
aiemmassa perusteessa OPH-4948-2021 (perusteId 7861752). **Kummankin opiskelijan perusteversio
ja suoritettavat tutkinnon osat vahvistetaan opiskelijakohtaisesti** ennen näyttöä.

| Tutkinnon osa | Vaatimuksia | Tunnukset |
| --- | --- | --- |
| Ohjelmointi | 11 | p1–p11 |
| Ohjelmistokehittäjänä toimiminen | 14 | s1–s14 |
| Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla | 7 | k1–k7 |

## Päivätön tila

Viikot 1–18 ovat työviikkoja parin omasta aloituksesta, eivät kalenteriviikkoja. Aikataulu ja
ohjausvastuut ovat ehdotuksia, jotka vahvistetaan aloituksessa.

## Pedagoginen hyväksyntä

Viikkorunko on läpäissyt Linnea-portin (kriteeristönä skillin pedagoginen runko, ePerusteiden 32
vaatimusta ja projektikuvaus). Kierros 1: KORJATTAVA (henkilökohtainen ohjelmointi joka
toteutusviikolla, roolinvaihto, viikon 1 järjestys, tekstitehtävien omat artefaktit).
Kierros 2: **HYVÄKSYTTY 3.11.2026**; kuusi pientä huomiota korjattiin sisällön kirjoitusvaiheessa.

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
```

Tavoitekuva: `bash <skilli>/scripts/lopputulos_kuva.sh project-docs/lopputulos/proto.html assets/lopputulos.jpg`.
Työpaketin PDF: tulosta `tyokalut/tyopaketti-print.html` Chromen headless-tilassa tiedostoksi
`downloads/protopaja-tyopaketti.pdf`. Näyttöseuranta: `node <skilli>/scripts/vie_odotukset.js protopaja`.

## Julkaisu

Julkaistaan koontisivun mukana GitHub Pagesissa:
<https://mattiseise.github.io/projektikoontisivu/protopaja/>.
