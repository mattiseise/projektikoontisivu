# Tavoitekuva (lopputulos)

`proto.html` on luonnos siitä, miltä valmis työ näyttää. Se ei ole toteutus eikä
malli, jota opiskelija kopioi: se on staattinen HTML-sivu (1120×700 CSS-px), josta
otetaan kuva sivuston Näin käytät sivua -näkymän alkuun. Sivu avautuu siihen, kun
opiskelija avaa projektin ensimmäisen kerran (moottori v2.6, `sisalto.js` → `lopputulos`).

Kuvan päivitys protosta:

```bash
bash ~/Kurssit/tyokalut/nayttoprojekti-skill/scripts/lopputulos_kuva.sh project-docs/lopputulos/proto.html assets/lopputulos.jpg
```

Kuva on 2240×1400 px, ja `sisalto.js`:ssä sen koko on 1120×700. Jos muutat protoa,
tarkista `lopputulos.kohdat[].alue`-kehykset (prosentteja kuvan leveydestä ja
korkeudesta) ja aja `node tyokalut/tarkista.js`.

Protossa näkyy vain toimeksiannon pakollinen ydin ja korkeintaan tärkeä jatko. Rajauksen
ulkopuoliset asiat eivät kuulu kuvaan, vaikka ne näyttäisivät hyviltä.
