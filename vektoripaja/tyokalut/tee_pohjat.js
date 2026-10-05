/* Kirjoittaa opiskelijan repositoryn dokumenttipohjat sisalto.js:n tiedostokorteista, jotta
   sivun tiedostokortti ja repositoryn tiedosto ovat sama teksti.
     pohjat/python-pohja/project-docs/<tiedosto>              tiedostokortit[id].pohja
     pohjat/python-pohja/project-docs/projektipaivakirja.md   työviikot päivämäärineen
   pohjat/PROJEKTIN-TILA.md, tehtavakortti.md, copilot-instructions.md ja havainto.md ovat omia
   lähteitään (ne tulevat opiskelijan repositoryyn pull requestilla). Aja: node tyokalut/tee_pohjat.js */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(ROOT, "sisalto.js"), "utf8"));
const P = window.NAYTTOPROJEKTI;

/* Linkkimerkinnät pelkäksi tekstiksi (pohja on tavallinen Markdown-tiedosto). */
const LINK_RE = /\[\[([^\]|\n]+?)(?:\|([^\]\n]+))?\]\]|\[([^\]\n]+)\]\(([^)\s]+)\)/g;
const plain = (s) => String(s || "").replace(LINK_RE, (m, target, label, extLabel) => {
  if (extLabel) return extLabel;
  if (label) return label;
  const t = String(target).trim();
  if (/^vk\s*\d+$/i.test(t)) return `viikko ${t.replace(/\D/g, "")}`;
  if (t.startsWith("tiedosto:")) return (P.tiedostokortit[t.slice(9)] || {}).polku || t;
  if (t.startsWith("ohje:")) return ((P.perusohjeet || []).find((o) => o.tunnus === t.slice(5)) || {}).otsikko || t;
  return t;
}).replace(/`([^`]+)`/g, "$1");

/* ISO-viikon työpäivät: "5.–9.10.2026"; lyhyt viikko lyhyetViikot-asetuksen mukaan. */
function isoMonday(year, week) {
  const d = new Date(Date.UTC(year, 0, 4));
  d.setUTCDate(d.getUTCDate() - ((d.getUTCDay() + 6) % 7) + (week - 1) * 7);
  return d;
}
const years = Array.isArray(P.vuosi) ? P.vuosi : [P.vuosi];
const wrap = P.viikot.findIndex((w, i) => i > 0 && w < P.viikot[i - 1]);
const yearOf = (w) => (wrap >= 0 && P.viikot.indexOf(w) >= wrap ? years[1] : years[0]);
function dates(w) {
  const ma = isoMonday(yearOf(w), w);
  const pe = new Date(ma.getTime() + ((Number((P.lyhyetViikot || {})[w]) || 5) - 1) * 86400000);
  const y = pe.getUTCFullYear();
  return ma.getUTCMonth() === pe.getUTCMonth()
    ? `${ma.getUTCDate()}.–${pe.getUTCDate()}.${pe.getUTCMonth() + 1}.${y}`
    : `${ma.getUTCDate()}.${ma.getUTCMonth() + 1}.–${pe.getUTCDate()}.${pe.getUTCMonth() + 1}.${y}`;
}

const written = [];
for (const c of Object.values(P.tiedostokortit || {})) {
  if (!c.pohja) continue;
  const rel = c.polku.endsWith("/") ? `${c.polku}${c.pohjaTiedosto || "LUE_MINUT.md"}` : c.polku;
  const file = path.join(ROOT, "pohjat", "python-pohja", rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, c.pohja.trimEnd() + "\n", "utf8");
  written.push(rel);
}

/* Projektipäiväkirja: jokaiselle työviikolle otsikko päivämäärineen ja viikkokirjauksen kysymykset.
   Otsikon alku "Vko N – nimi" on sama kuin sivun kopioitava hakuteksti (paivakirja.repo.otsikko). */
const loma = new Set(P.lomaViikot || []);
const pk = [
  `# ${P.nimi} – projektipäiväkirja`,
  "",
  "> Kirjoita joka viikon lopussa tämän viikon otsikon alle. Vastaa kolmeen kysymykseen. Tee lopuksi commit ja push.",
  "> Löydät viikon otsikon VS Coden haulla: paina Ctrl+F ja liitä hakuun viikon sivulta kopioitu otsikko.",
  ""
];
for (const w of P.viikot) {
  if (loma.has(w)) continue;
  const g = P.viikkoOhjeet[w] || {};
  pk.push(`## Vko ${w} – ${P.viikkoNimet[w]} (${dates(w)})`);
  if (g.record) pk.push(`> Kirjaa: ${plain(g.record)}`);
  pk.push("", "### Mitä tein ja miten?", "", "### Miksi tein näin?", "", "### Missä työnäyte on?", "");
}
const pkRel = (P.paivakirja && P.paivakirja.polku) || "project-docs/projektipaivakirja.md";
fs.mkdirSync(path.dirname(path.join(ROOT, "pohjat", "python-pohja", pkRel)), { recursive: true });
fs.writeFileSync(path.join(ROOT, "pohjat", "python-pohja", pkRel), pk.join("\n").trimEnd() + "\n", "utf8");
written.push(pkRel);
written.forEach((f) => console.log("pohjat/python-pohja/" + f));
