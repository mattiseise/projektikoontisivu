# Parlar Ioniano – guided demonstration project

Guided demonstration-of-skills project (näyttöprojekti): the student builds and publishes
a hand-coded HTML/CSS/JavaScript site — Bootstrap from a CDN, all language content as JSON
loaded with fetch(), no build step — that presents Ionian (Lingua Ioniana), a constructed
language of their own, page by page across weeks 36–49/2026 — and this site is the guided
path they follow.

The site is fully static. Published as a subfolder of the projektikoontisivu repository: https://mattiseise.github.io/projektikoontisivu/parlar-ioniano/

## Structure

| File | Contents |
| --- | --- |
| `index.html` | page structure, week cards and the evidence matrix |
| `sisalto.js` | ALL project-specific content: weekly guidance, phases, plan template, teacher material |
| `app.js` | generic engine — **never edited per project** |
| `styles.css` | look and feel; only the `:root` palette is project-specific |
| `kuvitukset.json` | texts and colours for the generated SVG illustrations |
| `assets/tyonkulku.svg`, `assets/sovelluksen-osat.svg`, `assets/virheketju.svg` | hand-written illustrations: the learner's workflow, the site's parts, the debugging chain (edit as SVG) |
| `assets/projektin-vaiheet.svg` | the four phases, generated from `vaiheet` with `node tyokalut/tee_vaihekuva.js` |

## Weekly guide (engine v2.7, unified weeks)

Every week has the same order: how the week connects to the whole project, the week goal, the
numbered work steps (`tehtavat` in `sisalto.js`, with parts to tick), help, the end-of-week check and
the project journal. A *work step* is an item on this site, a *GitHub issue* is one change to the
student's site, and the *working method* is the six steps used for every issue. Task ids and their
order are unchanged, so earlier ticks carry over into the parts.

## Local preview

Open `index.html` in a browser, or start a local HTTP server in the repository root.

## Data and privacy

Task state, the project journal, the plan and the AI log are stored only in the user's
browser (localStorage). The site sends nothing to any server.

## Regenerating the materials

```
npm install docx
node tyokalut/tee_lataukset.js        # docx files + tyopaketti-print.html
python3 tyokalut/tee_kuvitukset.py    # SVG illustrations + favicons (requires Pillow)
```

Work pack PDF: print `tyokalut/tyopaketti-print.html` with headless Chrome
(`--print-to-pdf`) to `downloads/parlar-ioniano-tyopaketti.pdf`.

## Quality gates

- Qualification requirements fetched from ePerusteet on 28 Aug 2026
  (Tieto- ja viestintätekniikan perustutkinto, OPH-6216-2025, perusteId 9816282).
- Pedagogical review (Linnea gate, material-pipeline): **approved 28 Aug 2026**
  after one revision round (findings B1–B4 fixed, recommendations S1–S8 applied).
- Consistency check: `node tyokalut/tarkista.js` — zero errors required.
