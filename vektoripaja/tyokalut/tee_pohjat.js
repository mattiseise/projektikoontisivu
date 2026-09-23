/* Kirjoittaa pohjat/-kansion tiedostot viikon 40 kopioitavista pohjista,
   jotta ladattava tiedosto ja sivun Kopioi-pohja ovat sama teksti.
   pohjat/havainto.md on oma lähteensä (viikko 43). Aja: node tyokalut/tee_pohjat.js */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(ROOT, "sisalto.js"), "utf8"));
const pohjat = window.NAYTTOPROJEKTI.viikkoOhjeet[40].pohjat;
const kohteet = { "PROJEKTIN-TILA.md": "PROJEKTIN-TILA.md", "tehtavakortti.md": "Tehtäväkorttipohja", "copilot-instructions.md": "Ohjeet GitHub Copilotille" };
for (const [tiedosto, alku] of Object.entries(kohteet)) {
  const p = pohjat.find((x) => x.otsikko.startsWith(alku));
  if (!p) throw new Error(`pohjaa ei löytynyt: ${alku}`);
  fs.writeFileSync(path.join(ROOT, "pohjat", tiedosto), p.teksti.trimEnd() + "\n", "utf8");
  console.log("pohjat/" + tiedosto);
}
