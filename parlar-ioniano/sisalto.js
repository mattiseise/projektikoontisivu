/*
 * sisalto.js – Parlar Ioniano: the project's COMPLETE content data.
 * app.js is a generic engine and contains no project-specific strings.
 * The site is in English; the engine's UI strings are overridden in `tekstit`
 * and the paper pack strings in `lataukset`. Teacher material stays in Finnish.
 */
window.NAYTTOPROJEKTI = {
  /* ---- basics ---- */
  slug: "parlar-ioniano",
  nimi: "Parlar Ioniano",
  vuosi: 2026,
  viikot: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  lomaViikot: [41, 42, 43],
  aloitusNappi: "Start the project",
  apuOtsikko: "I need implementation help",

  /* ---- phases ---- */
  vaiheet: [
    { tunnus: "A", lyhyt: "Foundations", otsikko: "Foundations: brief, toolchain, plan and a published shell", viikot: [36, 37, 38], vari: "#1e56a0" },
    { tunnus: "B", lyhyt: "Grammar views", otsikko: "Grammar views: data-driven tables and the client review", viikot: [39, 40, 41, 42, 43, 44], vari: "#a87b00" },
    { tunnus: "C", lyhyt: "Finish", otsikko: "Finish: feedback change, quality and testing", viikot: [45, 46, 47], vari: "#b0473a" },
    { tunnus: "D", lyhyt: "Release", otsikko: "Release and demonstration", viikot: [48, 49], vari: "#6d28d9" }
  ],

  /* ---- short names for the week navigation ---- */
  viikkoNimet: {
    36: "Kickoff & deploy",
    37: "Content as data",
    38: "Bootstrap shell",
    39: "Pronouns",
    40: "Nouns & articles",
    41: "No project work",
    42: "Autumn break",
    43: "No project work",
    44: "Client review",
    45: "Number converter",
    46: "Phrasebook & search",
    47: "Quality & testing",
    48: "Release v1.0",
    49: "Demonstration"
  },

  /* ---- engine UI strings (English site) ----
   * Keys match app.js v2's UI_OLETUS exactly (kaksipalstainen layout engine).
   * The engine's own defaults are Finnish; every key is overridden here so
   * the English site never falls back to Finnish UI copy. */
  tekstit: {
    weekKickerFallback: "After this week",
    connectionLabel: "How this moves the project forward:",
    deliverableLabel: "Finished this week",
    whyLabel: "Why this matters",
    skillsLabel: "This week's tech",
    resourcesLabel: "You will need:",
    helpFallbackTitle: "I need implementation help",
    helpTreeLabel: "Create this structure",
    helpActionsLabel: "Wire it up like this",
    helpCodeLabel: "Use this template or checklist",
    helpTestLabel: "Verification test:",
    helpNote: "If you used AI for this, log it in the AI log.",
    stepsLead: (n) => `${n} steps · guided work · work through them in order`,
    dayRhythmLabel: "Weekly day rhythm",
    dayLabel: (n) => `Day ${n}`,
    doneLabel: "Done when",
    evidenceLabel: "Show",
    quoteSource: "From the brief – the client's wish this week fulfills",
    journalRecordPrefix: "Record these:",
    journalComplete: "Main fields recorded",
    journalPartial: "In progress – fill in the fields",
    journalEmpty: "Not recorded yet",
    journalReminder: "Remember the project journal fields",
    journalSummary: (done, total) => `${done} / ${total}`,
    journalCountBig: (done, total) => `${done} / ${total} weeks recorded`,
    weekTileLogged: "recorded",
    weekTileCurrent: "in progress",
    weekTileOpen: "open",
    exportWeekButton: "Download this week only (.md)",
    exportJournalButton: "Download the whole project journal",
    weekFallback: (w) => `Week ${w}`,
    weekAria: (w, phase) => `Week ${w}${phase ? `, phase ${phase}` : ""}`,
    weekAriaHoliday: (w, name) => `Week ${w}, ${name}`,
    holidayFallback: "break",
    progressCopy: (done, total) => `${done} / ${total} tasks done`,
    resumeLabel: "Continue where you left off",
    resumeDone: "All tasks done",
    resumeNote: (w, title) => `Week ${w} · ${title}`,
    planNotStarted: "Not started yet",
    planPartial: (done, total) => `In progress — ${done} / ${total} fields filled`,
    planDone: "Plan complete ✓",
    planEmptyValue: "_(not filled in yet)_",
    dateLocale: "en-GB",
    prevWeek: (w, title) => `← Week ${w}: ${title}`,
    nextWeek: (w, title) => `Week ${w}: ${title} →`,
    prevStart: "At the start",
    nextEnd: "Last week",
    mdJournalTitle: (name) => `${name} – project journal`,
    mdJournalLead: (path) => `Save this file to \`${path}\` and commit it at the end of every week.`,
    mdWeekHeading: (w, title) => `## Week ${w} – ${title}`,
    mdWeekFeature: "This week's result:",
    mdWeekDeliverable: "This week's deliverable:",
    mdWork: "### What did I do and how?",
    mdReason: "### Why did I do it this way?",
    mdEvidence: "### Exact location of the work sample",
    mdNotRecorded: "Not recorded yet.",
    mdWeekFile: (w) => `project-journal-week-${w}.md`,
    mdWeekFileTitle: (name, w) => `# ${name} – week ${w}`,
    aiLogHeading: "## AI log",
    aiLogEmpty: "No entries.",
    aiLogFile: "AI-log.md",
    aiLogFileTitle: (name) => `# ${name} – AI log`,
    aiLogQuestion: "Task or question:",
    aiLogUsed: "Used, changed or rejected:",
    aiLogReference: "Evidence reference:",
    aiLogNoReference: "no reference",
    aiLogPrivacyOk: "Privacy confirmation: I did not enter personal data, secrets or confidential material.",
    aiLogPrivacyMissing: "Privacy confirmation: not confirmed (old entry)",
    logCount: (n) => `${n} ${n === 1 ? "entry" : "entries"}`,
    logEmptyState: "No entries yet.",
    logReferencePrefix: "Evidence:",
    logRemoveAria: "Remove log entry",
    logRemove: "Remove",
    resetConfirm: (plan, files) => `Reset the tasks, the project journal${plan}, the ticks and the AI log in this browser? Download the project journal${files} first if you want to keep your answers.`
  },

  /* ---- paper pack strings (English) ---- */
  lataukset: {
    lang: "en",
    tyopakettiOtsikko: "Paper work pack",
    tyopakettiTiedostoOtsikko: "work pack",
    kansiJohdanto: "This pack is a schedule and a checklist for the moments when the site is not open. The project journal is written on the site and committed to the repository's project-docs folder. A tick in this booklet is not a submission — the work always lives in the Git repository.",
    luovutus: (d) => `handover ${d}`,
    aikatauluOtsikko: "The schedule on one spread",
    aikatauluLyhyt: "Schedule",
    sarakeViikko: "Wk",
    sarakePvm: "Dates",
    sarakeAihe: "Week's topic",
    sarakeVaihe: "Phase",
    eiProjektityota: (title) => `${title} — no project work`,
    palautusHuomio: (d) => `Hand in by ${d}. The site has the detailed instructions, the implementation help and the project journal.`,
    vaiheOtsikko: (tunnus, otsikko) => `Phase ${tunnus} — ${otsikko}`,
    viikkoOtsikko: (num, dates, title) => `Week ${num} · ${dates} — ${title}`,
    valmisKun: "Done when: ",
    valmisKunLabel: "Done when:",
    evidenceLabel: "Work sample to the Git repository before ticking:",
    viimeisetPaivatOtsikko: "The last five days",
    matriisiOtsikko: (n) => `Evidence matrix — ${n} competence requirements`,
    matriisiJohdanto: "Tick only when the requirement has an exact work sample: a link, a commit, a screenshot, a test row or a memo. The same work sample can serve several requirements. Requirement names are shown in Finnish exactly as in the national qualification criteria (ePerusteet).",
    selainHuomio: "Remember: the ticks and text fields on the site are stored only in your browser. They do not reach the teacher and they never replace the work in Git.",
    jakso: "Weeks 36–49 · no project work in weeks 41–43",
    deadline: "Fri 4 Dec 2026",
    kansiKuvaus: "Present your own language: hand-written HTML, CSS and JavaScript, Bootstrap and data-driven grammar tables",
    kansiHuomiot: [
      "The repository is public: no personal data, no school identifiers, no other people's names or faces.",
      "The language material is the author's own. The site shows the credit and the terms of use."
    ],
    viimeisetPaivat: [
      ["Mon 30 Nov", "Content freeze — the last accepted version"],
      ["Tue 1 Dec", "Evidence: journal, tests and matrix links"],
      ["Wed 2 Dec", "Rehearse the 8–10 min demo and the self-assessment"],
      ["Thu 3 Dec", "Buffer — final check with another person"],
      ["Fri 4 Dec", "Demonstration and handover"]
    ]
  },

  /* ---- week-type framings ---- */
  kehykset: {
    pohjustus: {
      kicker: "Groundwork",
      connectionLabel: "How this moves the project forward:",
      deliverableLabel: "Finished this week",
      skillsLabel: "This week's tech: assessed in the demonstration"
    },
    feature: {
      kicker: "This week's result",
      connectionLabel: "How this builds the site:",
      deliverableLabel: "Finished this week",
      skillsLabel: "This week's tech: assessed in the demonstration"
    },
    katselmointi: {
      kicker: "Review: your work in someone else's hands",
      connectionLabel: "How this moves the project forward:",
      deliverableLabel: "Finished this week",
      skillsLabel: "This week's tech: assessed in the demonstration"
    },
    laatu: {
      kicker: "Quality week",
      connectionLabel: "How this moves the project forward:",
      deliverableLabel: "Finished this week",
      skillsLabel: "This week's tech: assessed in the demonstration"
    },
    julkaisu: {
      kicker: "Release week",
      connectionLabel: "How this moves the project forward:",
      deliverableLabel: "Finished this week",
      skillsLabel: "This week's tech: assessed in the demonstration"
    },
    naytto: {
      kicker: "Demonstration week",
      connectionLabel: "How this lands the demonstration:",
      deliverableLabel: "Finished this week",
      skillsLabel: "This week's tech: assessed in the demonstration"
    }
  },

  /* ---- project journal settings ---- */
  paivakirja: {
    tiedostonimi: "project-journal.md",
    polku: "project-docs/project-journal.md",
    vihjeet: {
      work: "Name the concrete files, solutions, issues and tests.",
      reason: "The decision, the alternatives, the justification and what you learned.",
      evidence: "e.g. commit link, issue #12 or test T05.",
      next: "What is the first thing you will continue from next time?"
    }
  },

  /* ---- technical plan ---- */
  suunnitelma: {
    otsikko: "Technical plan",
    tiedostonimi: "technical-plan.md",
    pakolliset: ["author", "goal", "audience", "library", "libraryWhy", "scope"],
    markdown: ({ arvo, onTäytetty, pvm }) => [
      "# Technical plan – Parlar Ioniano",
      "",
      `Author: ${arvo("author")} · Updated: ${pvm}`,
      `Repository: ${arvo("repoUrl", "_(add the repository URL)_")}`,
      "",
      "## 1. Concept (pre-filled from the brief)",
      "",
      "A public reference site for Ionian (Lingua Ioniana), a constructed Romance language.",
      "Hand-written HTML, CSS and JavaScript — no build step and no bundler: the files in the",
      "repository are the files on the web. Bootstrap is loaded from a CDN as the component",
      "library. All grammar content lives in JSON files under `data/` and is fetched at runtime",
      "with fetch() — the source of truth is the author's reference PDF.",
      "Published on GitHub Pages from the main branch. The whole project is in English.",
      "",
      "## 2. Site map and scope (pre-filled from the brief)",
      "",
      "P0 (must ship): Home · Alphabet & Pronunciation · Pronouns · Nouns, Articles & Gender ·",
      "Numbers & Comparison with the number converter · Phrasebook & Chapter 1.",
      "P1 (only if P0 is complete by the end of week 46): Verbs overview.",
      "P2: Word-building (affixes).",
      "OUT of this project: an interactive verb conjugator, user accounts, audio recordings,",
      "and the PDF's under-construction pages 57–58 — the site says \"coming later\" instead.",
      "",
      "## 3. Goal in my own words",
      "",
      arvo("goal"),
      "",
      "## 4. Audience",
      "",
      arvo("audience"),
      "",
      "## 5. Bootstrap — my component decisions",
      "",
      `Components I build on: ${arvo("library")}`,
      "",
      `Possibilities and limits (own measurements from the comparison memo): ${arvo("libraryWhy")}`,
      "",
      "Bootstrap is loaded from a CDN with a pinned version and configured by overriding its",
      "CSS variables in `css/style.css` — the library file itself is never edited.",
      "The number converter page is built from scratch without Bootstrap components —",
      "at least one view must be my own work from the ground up.",
      "",
      "## 6. What I will NOT do (scope guard, in my own words)",
      "",
      arvo("scope"),
      "",
      "## 7. Data (pre-filled, binding)",
      "",
      "Content JSON is loaded at runtime with fetch() from `data/`, through one shared loader",
      "in `js/data.js`. The site is therefore always opened over http:// — never file://.",
      "Loading and error states are implemented in week 37 and proven in week 39. Every content",
      "file is checked against the reference PDF — an invented form is a bug. A broken-network",
      "response is a test case.",
      "",
      "## 8. Quality bar (pre-filled)",
      "",
      "At least 12 planned test cases with the expected result written before the run, run in",
      "the browser from `tests/tests.html`, 3 complete debugging chains, an accessibility pass",
      "with Lighthouse before/after pairs, an HTML validation pass, a client review in week 44",
      "and an external user test in week 48.",
      "",
      "## 9. Roles (pre-filled)",
      "",
      "I am the developer AND the client in the language creator's role. The supervisor acts",
      "as the client's representative in reviews. The external tester is a different person",
      "who has never seen Ionian.",
      "",
      "## 10. Open items — the supervisor owns these",
      "",
      onTäytetty("license")
        ? `- License: ${arvo("license")}`
        : "- License: NOT AGREED YET — open item (do not decide this yourself or with AI)",
      onTäytetty("institutionPolicy")
        ? `- Institution's device-security policy line: ${arvo("institutionPolicy")}`
        : "- Institution's device-security policy line: NOT AGREED YET — open item",
      "",
      "---",
      "",
      "Save this file to `project-docs/technical-plan.md` and commit. Update it when the",
      "supervisor answers an open item.",
      ""
    ].join("\n")
  },

  /* ---- weekly guidance ---- */
  viikkoOhjeet: {
    36: {
      type: "pohjustus",
      feature: "After this week an empty but real site — plain index.html with Bootstrap loaded from a CDN — is live at your public GitHub Pages URL, the plan is drafted, and the P0 work is split into issues.",
      excerpt: "Right now it lives in a 58-page reference PDF that only I can navigate.",
      connection: "Everything starts from the brief: before the first page you agree what the site must do, set up the tools, and prove the publishing path works while the site is still empty — when a deploy fails now, nothing of value is at risk.",
      deliverable: "Kickoff notes with a question list, a public repository with a privacy check done, the site folder served by a local web server and opened on your phone, the first deploy live at the public URL, the technical plan drafted and the P0 backlog as issues.",
      why: "If open questions stay as silent assumptions, you build the wrong site. If the first deploy waits until November, you debug the publishing path at the worst possible moment. And because the repository is public from day one, the privacy check cannot wait.",
      done: "The public URL opens on a device that has never seen the project, and another person understands from the README and the plan what is being built and for whom.",
      record: "Write in the Week 36 entry: the open questions and their answers (decision / open / assumption), the repository link, the first commit hash, and a screenshot of the site on your phone.",
      skills: ["development environment", "version control", "requirements reading", "network sharing"],
      resources: [["Open the plan form", "#view-suunnitelma", false]],
      paivat: [
        ["Need", "Read the brief, underline the requirements and write down every unclear point as a question for the kickoff talk."],
        ["Scope", "Agree the scope: which views are P0, what is explicitly out (the conjugator!), and who reviews the site in week 44."],
        ["Tools", "Install VS Code and Live Server, create the site folder, serve it over http://localhost and open it from your phone over the local network."],
        ["Plan", "Draft the technical plan from the pre-filled sections and split the P0 work into GitHub issues."],
        ["Publish", "Publish the empty site to GitHub Pages from the main branch and verify the public URL works on another device. First commit, first deploy — the publishing path exists."]
      ],
      steps: [
        ["Read the brief like a contract.", "Underline what is required, then write every unclear point as a question. Bring the questions to a 15-minute kickoff talk with the supervisor and record each answer as a decision, an open item or an assumption."],
        ["Set up the tools.", "Install VS Code and the Live Server extension. Create the site folder with index.html, css/style.css and js/main.js — no Node, no npm, no build step. Open the page through the local server, never by double-clicking the file: fetch() cannot read data/*.json over file://."],
        ["Share it to the local network.", "Run a local server on all interfaces and open the page from your phone on the same Wi-Fi. Note what you had to allow (firewall) and why that is safe on the school network."],
        ["Create the public repository and publish.", "Do the privacy check first: no personal data, no school identifiers, agree your public author name. Add a README skeleton, commit, push, switch GitHub Pages on for the main branch and open the public URL on another device. This is the moment the publishing path exists."],
        ["Draft the plan and split the work.", "Fill in the plan form below — the pre-filled sections come from the brief; the decisions are yours. Mark the supervisor's open items open. Turn the P0 pages into GitHub issues, each with a done-when condition and a size estimate, prioritised P0/P1/P2."]
      ],
      help: {
        title: "Create, serve and publish the plain site — click by click",
        tree: "parlar-ioniano-site/\n├─ index.html          ← Home\n├─ alphabet.html       ← week 37\n├─ css/\n│  └─ style.css        ← my own styles, loaded AFTER Bootstrap\n├─ js/\n│  └─ data.js          ← the shared fetch helper (week 37)\n├─ data/               ← the language JSON lands here in week 37\n├─ tests/\n├─ project-docs/\n├─ .nojekyll\n└─ README.md",
        actions: [
          "Install VS Code and the Live Server extension. There is nothing to build: the files you write are the files that go live.",
          "Create index.html with the HTML5 skeleton (<!doctype html>, <html lang=\"en\">, a <title>), and link css/style.css in the head and js/main.js at the end of the body.",
          "Open it with Live Server (right-click → Open with Live Server). The address bar must say http://localhost:… — if it says file://, fetch will fail in week 37.",
          "Phone test: run `python3 -m http.server 8000 --bind 0.0.0.0` in the project folder, then open http://<your-computer's-IP>:8000 on your phone on the same Wi-Fi. If it does not load, your firewall asked a question — answer it and write down what you allowed.",
          "Create the GitHub repository (public), then follow GitHub's 'push an existing repository' commands shown on the new repo page.",
          "Repository → Settings → Pages → Source: Deploy from a branch → main / (root). Commit an empty .nojekyll file in the root, wait a minute, then open the URL GitHub shows."
        ],
        code: "FIRST DEPLOY CHECKLIST\n[ ] index.html opens through http://localhost, not file://\n[ ] the same page opens on my phone (python3 -m http.server --bind 0.0.0.0)\n[ ] repository is public, privacy check done, 2FA on\n[ ] Pages source = main branch / (root), .nojekyll committed\n[ ] the public URL works on a device that has never seen the project\n[ ] page has <html lang=\"en\">, a <title>, and the DevTools console is clean",
        test: "Open the public URL on a device that has never seen the project. The page renders — not a 404 and not a blank screen — and DevTools → Console shows no red errors.",
        links: [
          ["GitHub Docs: Pages", "https://docs.github.com/en/pages"],
          ["MDN: Set up a local testing server", "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/set_up_a_local_testing_server"]
        ]
      },
      example: "Kickoff notes: 8 questions, each marked decision/open/assumption. README: what, for whom, and how to run it locally (Live Server or python3 -m http.server). Commit \"Add site skeleton and publish to Pages\". Phone screenshot in project-docs/evidence/week-36/.",
      notEnough: "\"I created the project\" with no question list, no phone test and no working public URL does not show that you understood the requirements or proved the publishing path."
    },

    37: {
      type: "feature",
      feature: "The first real content is live: the Alphabet & Pronunciation page renders every letter, its IPA value and the digraphs — all fetched from a JSON file, none of it typed into the HTML.",
      excerpt: "Every table on the site must be checked against my PDF — an invented form is a bug.",
      connection: "This week sets the pattern every later page follows: content lives in data/*.json, the page fetches it at runtime with one shared loader, and the PDF is the source of truth. Get this right once and weeks 39–46 reuse it.",
      deliverable: "data/letters.json and the first records of data/words.json typed from the PDF (pages 7, 9–11, 12 and 41), a documented data-store decision in the plan, js/data.js as the one loader every page uses, the Alphabet & Pronunciation page live with real loading and error states, and tools/check-data.html reporting on every data file.",
      why: "If grammar content is typed into the HTML, every correction means editing markup, and the data-store requirement has no work sample. If the data is not checked against the PDF, the site teaches a wrong language — and nobody else on Earth can spot it.",
      done: "The public URL shows the alphabet table rendered from data/letters.json, and tools/check-data.html reports \"content OK\" — and reports an error when you deliberately break one line.",
      record: "Write in the Week 37 entry: why JSON files + runtime fetch (the alternatives you rejected), the four-key record shape you agreed for words.json, which PDF pages you transcribed, what the data check caught, and the commit links.",
      skills: ["data modelling", "fetch API", "JSON", "DOM rendering"],
      steps: [
        ["Decide and document the data store.", "Content goes to data/*.json and is fetched at runtime. Write the decision and its justification into the plan (this is the data-store work sample) — what did you reject (tables typed into the HTML, a database, a CMS) and why?"],
        ["Type letters.json from your PDF.", "Pages 7 and 9–11: every letter, IPA, the stressed/unstressed variants, diacritics and digraphs; page 41 notes on capitalisation. Type it yourself — no model knows these values, and every line you type is a line you can verify."],
        ["Agree one record shape for vocabulary.", "Every word entry gets the same four keys: word, partOfSpeech, translation, example. Start data/words.json with ten words from PDF page 12. Week 46 builds the whole vocabulary page on this shape, so decide it now, not then."],
        ["Build the page on one shared loader.", "js/data.js exports a single loadJSON() that fetches, checks response.ok and throws a readable error. The Alphabet page renders three states into one container: \"Loading…\", an error message that names the file, and the table."],
        ["Check the data, then verify against the source.", "Open tools/check-data.html, add one check of your own, and prove it works by breaking a line on purpose. Then read the rendered table against the PDF, letter by letter. Fix, commit, deploy."]
      ],
      help: {
        title: "The JSON record shape, the shared loader, and the data check",
        tree: "data/letters.json\n{\n  \"required\": [\"letter\", \"ipa\"],\n  \"items\": [\n    { \"letter\": \"A\", \"ipa\": \"[a]\", \"note\": \"\" },\n    { \"letter\": \"C\", \"ipa\": \"[tʃ] before i or e, otherwise [k]\", \"note\": \"\" }\n  ],\n  \"digraphs\": [ { \"letters\": \"ch\", \"ipa\": \"[x]\" } ]\n}\n\ndata/words.json          ← the four-key shape every word entry follows\n{\n  \"required\": [\"word\", \"partOfSpeech\", \"translation\", \"example\"],\n  \"items\": [\n    {\n      \"word\": \"casa\",\n      \"partOfSpeech\": \"noun (f.)\",\n      \"translation\": \"house\",\n      \"example\": \"La casa es granda. — The house is big.\"\n    }\n  ]\n}\n\njs/data.js               ← one loadJSON() for every page\njs/alphabet.js           ← fetch + render, three states\ntools/check-data.html    ← open in the browser: one report line per file",
        actions: [
          "Create data/letters.json and data/words.json with the shapes above and fill them from YOUR PDF (pages 7, 9–11, 12 and 41).",
          "alphabet.html loads its script as a module: <script type=\"module\" src=\"js/alphabet.js\"></script> — that is what lets you import js/data.js without any bundler.",
          "tools/check-data.html: loop over your data files; for each item check that every key listed in data.required exists and is not empty. Print one line per file — \"✓ letters.json — 22 items\" or \"✗ words.json — item 4 is missing translation\".",
          "Add your own check where the TODO is — for example: every ipa value contains \"[\". Break one line in the JSON, reload the check page, watch it fail, fix it back."
        ],
        code: "// js/data.js — the one loader every page uses\nexport async function loadJSON(path) {\n  const res = await fetch(path);\n  if (!res.ok) throw new Error(`${path} did not load (HTTP ${res.status})`);\n  return res.json();\n}\n\n// js/alphabet.js — fetch + render, three states\nimport { loadJSON } from \"./data.js\";\nconst box = document.querySelector(\"#alphabet\");\nbox.textContent = \"Loading…\";\ntry {\n  const data = await loadJSON(\"data/letters.json\");\n  box.replaceChildren(renderTable(data.items));   // your own render function\n} catch (err) {\n  box.textContent = err.message + \" — check the file name and the path.\";\n}",
        test: "Rename data/letters.json for a moment and reload the page through the local server: you must see your own error message with the file name in it, not a blank page and not a silent console error. Rename it back.",
        links: [
          ["MDN: Using the Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"],
          ["MDN: Working with JSON", "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON"]
        ]
      },
      example: "data/letters.json with 22 letters + 12 digraphs, each with an IPA value from the PDF. data/words.json started with 10 entries in the agreed four-key shape. Plan section 7 names the rejected alternative (\"the tables typed straight into the HTML\") and why. The data check fails on a planted error, then passes.",
      notEnough: "An alphabet table typed straight into the HTML renders the same — but leaves the data-store requirement without a work sample and makes every correction an edit in the markup. AI-generated IPA values that were never checked against the PDF are bugs waiting to be found by the one person who knows the language."
    },

    38: {
      type: "feature",
      feature: "The site has a real shell: a Bootstrap navbar and grid on every page, a Home page that explains the language — and Bootstrap taken into use from a CDN, configured in the language's colours, measured, and its limits written down.",
      excerpt: "I want a website where a curious learner can actually find things.",
      connection: "Two content pages exist by the end of this week, so the shell stops being theoretical: the navbar has real destinations, and the component-library decision is measured against your real pages, not a toy.",
      deliverable: "A comparison memo of Bootstrap against one other component library and the no-library option — with your own measurements (transferred KB from the DevTools Network panel, Lighthouse scores) — Bootstrap loaded from the CDN with a pinned version, a theme configured by overriding its CSS variables in css/style.css, the navbar and the grid on every page, and the Home page with the classification, the credit and the terms of use.",
      why: "The component-library requirement is assessed on whether you explored possibilities AND limits — a memo without measurements is an opinion. And without one shared navbar and layout now, every later page would be bolted on ad hoc.",
      done: "The comparison memo with your own measured numbers is in project-docs/, the navbar works from every page on the public URL and collapses correctly on a phone, and the Home page shows the credit and terms.",
      record: "Write in the Week 38 entry: the three options you compared, your measurements, the decision and its trade-offs, which Bootstrap components you will build on and where you will write your own CSS instead, and who you discussed it with.",
      skills: ["Bootstrap", "CDN and version pinning", "responsive grid", "technical comparison"],
      steps: [
        ["Measure the 'before'.", "Open your current site in DevTools → Network, hard-reload, and write down the transferred size and the number of requests. Run Lighthouse on the public URL and write down the scores. These are your before-numbers, from your own pages."],
        ["Compare three options.", "Bootstrap, one other component library (for example Bulma or Pico.css) and the no-library option. For each: what do its navbar, table, card and accordion components give you, what does it cost in transferred KB, what does its documentation promise about accessibility, and what are its limits for YOUR grammar tables?"],
        ["Talk it through, then decide.", "Present the memo to the supervisor (client's representative), record their view, then write the decision into the plan: which components you build on, and where you write your own CSS instead. The decision is yours; the discussion is the work sample for solving problems together."],
        ["Take Bootstrap into use and configure it.", "Add the CSS link in the head and the bundle script at the end of the body, with a pinned version (never @latest) and an integrity hash. Configure the theme by overriding Bootstrap's CSS variables in css/style.css, loaded AFTER Bootstrap — you never edit the library itself."],
        ["Build the shell and measure again.", "The same navbar markup on every page, with aria-current=\"page\" on the current one. Then reload with DevTools open, note the new transferred size and the new Lighthouse scores next to the before-numbers, and deploy."]
      ],
      help: {
        title: "Bootstrap from the CDN, the shared navbar, and the comparison memo",
        tree: "index.html            ← Home\nalphabet.html         ← from week 37\npronouns.html  nouns.html  numbers.html  phrasebook.html\ncss/\n└─ style.css          ← MY overrides, loaded after Bootstrap\njs/\n└─ data.js            ← from week 37\nproject-docs/library-comparison.md",
        actions: [
          "Load the library first and your own stylesheet after it — the last stylesheet wins, and that is how you theme without touching the library.",
          "Put bootstrap.bundle.min.js at the END of <body>: the navbar toggler, the tabs and the accordion all need its JavaScript.",
          "Configure the theme in css/style.css: :root { --bs-primary: #1e56a0; --bs-link-color: #143e78; } plus your own rules for the grammar tables. Never edit the CDN file.",
          "Copy the navbar markup into every page and change only which link carries aria-current=\"page\". Repetition is the price of having no build step — write it into the memo as a named limit.",
          "Memo structure (project-docs/library-comparison.md): one section per candidate — components offered · accessibility promised by the docs · transferred KB in MY site before → after · limits for my grammar tables. Then your Lighthouse before/after pair, the supervisor discussion (date + their view in one sentence), and the decision with its reason."
        ],
        code: "<!-- in <head>: the library first, my own file after it -->\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css\"\n      rel=\"stylesheet\" integrity=\"sha384-…\" crossorigin=\"anonymous\">\n<link href=\"css/style.css\" rel=\"stylesheet\">\n\n<nav class=\"navbar navbar-expand-md bg-body-tertiary border-bottom\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"index.html\">Parlar Ioniano</a>\n    <button class=\"navbar-toggler\" type=\"button\"\n            data-bs-toggle=\"collapse\" data-bs-target=\"#nav\" aria-label=\"Menu\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"nav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"alphabet.html\">Alphabet</a>\n        </li>\n        <li class=\"nav-item\"><a class=\"nav-link\" href=\"pronouns.html\">Pronouns</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- last thing before </body> -->\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js\"></script>",
        test: "Click through the navbar on the public URL from every page: no dead links, and the current page is marked. Then Tab through it — focus is always visible. Then narrow the window until the toggler appears: it opens and closes the menu.",
        links: [
          ["Bootstrap: Get started (CDN)", "https://getbootstrap.com/docs/5.3/getting-started/introduction/"],
          ["Bootstrap: Navbar", "https://getbootstrap.com/docs/5.3/components/navbar/"]
        ]
      },
      example: "Memo: Bootstrap adds 31 kB of CSS and 27 kB of JS to my pages (transferred 48 kB → 106 kB), and gives Navbar / Table / Card / Accordion with documented keyboard support; limits: with no build step I repeat the navbar markup on six pages, and the default table is too dense on a phone. Decision: Bootstrap, because the tables and the navigation are the bulk of this site. Lighthouse before 100/100 → after 96/98.",
      notEnough: "\"I chose Bootstrap because it is popular\" — no measurements from your own pages, no limits named, no discussion recorded. A model can write that sentence; it cannot open your Network panel."
    },

    39: {
      type: "feature",
      feature: "The Pronouns page is live: eight pronoun tables (subject, object, possessive, reflexive, imperative, direct/indirect, prepositional, double object) in Bootstrap tabs, all built by ONE reusable render function from data/grammar.json.",
      excerpt: "how the pronouns change when you talk to a friend or a stranger",
      connection: "This is the biggest single content block in the PDF (11 pages) and the payoff of week 37's pattern: one renderTable() function, fed by data — and the loading and error states you built become real, tested behaviour on a page with eight datasets.",
      deliverable: "The pronouns section of data/grammar.json (eight datasets typed from PDF pages 13–18 and 22–26), a reusable renderTable() in js/render.js that builds a Bootstrap table, Bootstrap tabs between pronoun types, working loading/error states, and horizontal scrolling for wide tables on a phone.",
      why: "If each table is its own block of markup, you have eight copies to maintain and no reuse work sample. The fetch states are required this week because week 37's binding decision promised them — and the broken-network test in week 47 will target exactly this code.",
      done: "All eight pronoun tables render on the public URL from data/grammar.json, the tabs can be operated with the keyboard alone, wide tables scroll horizontally on a phone instead of breaking the layout, and renaming the JSON shows your error state.",
      record: "Write in the Week 39 entry: the shape of the pronouns section and why, how renderTable() stays generic, which PDF pages you transcribed and how you verified them, plus the commits and the phone screenshot.",
      skills: ["reusable functions", "Bootstrap tables and tabs", "fetch states", "responsive tables"],
      steps: [
        ["Design the data shape first.", "One JSON file, one \"pronouns\" array, eight sets: each has an id, a title, column headers and rows. Sketch it on paper before typing — the shape must serve ALL eight tables, or renderTable() cannot stay generic."],
        ["Type the data from the PDF.", "Pages 13–18 and 22–26. Type, do not generate: the clitic forms and the colloquial prepositional forms exist nowhere else. Add the new section to tools/check-data.html as you go."],
        ["Write renderTable() once.", "It takes { title, columns, rows, note } and returns a Bootstrap <table> element — nothing pronoun-specific inside. If you feel like adding an if for one specific table, the data shape is wrong: fix the data, not the function."],
        ["Wire the tabs and the states.", "Bootstrap nav-tabs, one tab and one tab-pane per set; after the fetch, append each rendered table into its pane. Loading and error states come from js/data.js — test the error state by renaming the file for a moment."],
        ["Verify and deploy.", "Read each rendered table against its PDF page. Check on your phone that wide tables scroll. Commit per table set, deploy."]
      ],
      help: {
        title: "One render function, eight datasets, Bootstrap tabs",
        tree: "data/grammar.json\n{\n  \"pronouns\": [\n    {\n      \"id\": \"subject\",\n      \"title\": \"Subject pronouns\",\n      \"columns\": [\"Ionian\", \"English\", \"Notes\"],\n      \"rows\": [[\"Jo\", \"I\", \"\"], [\"Tu\", \"You (informal)\", \"\"]]\n    },\n    { \"id\": \"object\", \"title\": \"Object pronouns\", \"columns\": [\"…\"], \"rows\": [] }\n  ]\n}\n\njs/render.js      ← renderTable(set) → <table>, used by every grammar page\njs/pronouns.js    ← fetch + one renderTable() call per set\npronouns.html     ← the Bootstrap tab markup, one pane per set",
        actions: [
          "Write the pronouns array in data/grammar.json; every set uses the same four keys: id, title, columns, rows.",
          "renderTable() builds the table with document.createElement and textContent — never innerHTML with data. The header row uses <th scope=\"col\"> so screen readers announce it.",
          "pronouns.html: <ul class=\"nav nav-tabs\" role=\"tablist\"> with one button per set (data-bs-toggle=\"tab\"), plus one <div class=\"tab-pane\"> per set for the table.",
          "Wrap every table in <div class=\"table-responsive\"> so a phone scrolls the table, not the page.",
          "Add the pronouns section to tools/check-data.html and run it."
        ],
        code: "// js/render.js — one function, every grammar table\nexport function renderTable({ columns, rows }) {\n  const table = document.createElement(\"table\");\n  table.className = \"table table-striped align-middle\";\n  const head = table.createTHead().insertRow();\n  for (const label of columns) {\n    const th = document.createElement(\"th\");\n    th.scope = \"col\";\n    th.textContent = label;              // textContent, never innerHTML\n    head.append(th);\n  }\n  const body = table.createTBody();\n  for (const row of rows) {\n    const tr = body.insertRow();\n    for (const cell of row) tr.insertCell().textContent = cell;\n  }\n  return table;\n}",
        test: "In DevTools, set network throttling to Slow 3G and reload: you must see the loading state. Then block the JSON request (Network → right-click the row → Block request URL) and reload: you must see your error state. Both are screenshots for project-docs/evidence/week-39/.",
        links: [
          ["Bootstrap: Tables", "https://getbootstrap.com/docs/5.3/content/tables/"],
          ["Bootstrap: Navs and tabs", "https://getbootstrap.com/docs/5.3/components/navs-tabs/"]
        ]
      },
      example: "data/grammar.json: 8 pronoun sets, 62 rows in total, each row traceable to a PDF page. renderTable(): 18 lines, zero content words. Commit series: \"Add subject/object pronoun data\", \"Add renderTable\", \"Wire pronoun tabs\".",
      notEnough: "Eight separate hand-written <table> blocks in the HTML that happen to look right — no reusable function, no data file, no loading state. It renders, but three requirements walk away empty."
    },

    40: {
      type: "feature",
      feature: "The Nouns, Articles & Gender page is live: gender rules, plural endings, definite/indefinite articles and the articulated prepositions — each rule section in a Bootstrap accordion, each matrix built by the same renderTable(). Before the break: v0.5 is tagged and the week-44 review is booked, in writing.",
      excerpt: "which article goes with which gender",
      connection: "Articles make no sense without gender, and every table on PDF pages 8 and 19–21 is the same matrix: gender × number. One mental model, one function — and with four content pages live, the site is worth showing to the client.",
      deliverable: "The nouns and articles sections added to data/grammar.json from the PDF, the gender×number matrices rendered by the week-39 function, the rule sections wrapped in a Bootstrap accordion built from the same data, example sentences from the PDF, the v0.5 git tag, and a written agreement of the review: client's and tester's names, date and place for week 44.",
      why: "This is the last working week before three weeks of break. An unbooked review quietly becomes no review — and the whole C phase is built on its feedback. The tag freezes what the reviewers will see.",
      done: "The four grammar pages render correctly on the public URL, the accordion opens and closes with the keyboard alone, v0.5 is tagged, and the review agreement (names + date) is committed in project-docs/.",
      record: "Write in the Week 40 entry: how the gender×number shape drove the data design, why the accordion earns its place on a long page, what you left FOR the review to judge (do not polish it away), the tag, and the booked review details.",
      skills: ["data modelling", "Bootstrap accordion", "code reuse", "release tagging"],
      steps: [
        ["Model the matrix.", "Gender × number is the shape of every table here. Design the articles section of data/grammar.json so the same function renders definite articles, indefinite articles and articulated prepositions without special cases."],
        ["Type and verify the data.", "PDF pages 8 and 19–21, including the elision rules and the neuter-to-feminine plural switch — these details are exactly what a generator would invent wrongly. Verify line by line."],
        ["Compose the page with an accordion.", "One accordion item per topic: gender rules, plural endings, definite articles, indefinite articles, articulated prepositions. Short prose first, then the matrix, then the PDF's example sentences with their translations. Build the accordion items in a loop from the same array that feeds the tables."],
        ["Tag v0.5.", "git tag v0.5 && git push --tags. Deploy. This is what the reviewers will see — resist polishing it during the break."],
        ["Book the review in writing.", "Agree with the client (supervisor as representative) and the external tester: date, time, place in week 44, and what they will look at. Commit the note to project-docs/review-agreement.md. Send them the public URL."]
      ],
      help: {
        title: "The accordion, the gender×number shape, and the review booking",
        tree: "data/grammar.json  ← the \"articles\" section added this week\n{\n  \"articles\": [\n    {\n      \"id\": \"definite\",\n      \"title\": \"Definite articles\",\n      \"columns\": [\"\", \"Masculine\", \"Feminine\", \"Neuter\"],\n      \"rows\": [\n        [\"Singular\", \"le / lo / l'\", \"la / l'\", \"lu\"],\n        [\"Plural\", \"li / l'\", \"le / l'\", \"→ feminine plural\"]\n      ],\n      \"note\": \"Neuter merges with the feminine form in the plural.\"\n    }\n  ]\n}\n\nproject-docs/review-agreement.md",
        actions: [
          "Reuse renderTable() for every matrix — if it needs a special case, adjust the data, not the function.",
          "Keep each rule note short and attach it to its matrix in the JSON, so the note travels with the data.",
          "Build the accordion from the data too: loop the sections, create one accordion-item per section, and append the rendered table into its accordion-body. Every item needs a unique id — a duplicate id is the classic accordion bug (and week 47's validator will find it).",
          "Add the new sections to tools/check-data.html and run it.",
          "Write project-docs/review-agreement.md: who (role, not personal details beyond a first name), when, where, what they will test. Commit it."
        ],
        code: "<!-- nouns.html — Bootstrap accordion, one item per rule section -->\n<div class=\"accordion\" id=\"grammar\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\"\n              data-bs-toggle=\"collapse\" data-bs-target=\"#sec-definite\"\n              aria-expanded=\"true\" aria-controls=\"sec-definite\">\n        Definite articles\n      </button>\n    </h2>\n    <div id=\"sec-definite\" class=\"accordion-collapse collapse show\"\n         data-bs-parent=\"#grammar\">\n      <div class=\"accordion-body\" data-table=\"definite\">\n        <!-- renderTable() appends the matrix here -->\n      </div>\n    </div>\n  </div>\n</div>\n\nREVIEW AGREEMENT TEMPLATE (project-docs/review-agreement.md)\n# v0.5 review agreement\n- Date and place: <week 44, day, time>\n- Client (language creator's representative): <name/role>\n- External tester (has never seen Ionian): <first name / role>\n- They will look at: finding the alphabet, reading a pronoun table,\n  understanding what the language is — WITHOUT the developer explaining.\n- v0.5 tag: <commit hash> · public URL: <link>",
        test: "Open the v0.5 tag on GitHub and check that the deployed site matches it. Then operate the accordion with the keyboard only: Tab reaches the header button and Enter opens the section. The review agreement file is in the repository — not only in chat.",
        links: [
          ["Bootstrap: Accordion", "https://getbootstrap.com/docs/5.3/components/accordion/"],
          ["Git basics: Tagging", "https://git-scm.com/book/en/v2/Git-Basics-Tagging"]
        ]
      },
      example: "data/grammar.json articles section: 5 matrices with the elision variants as their own columns and a note attached to each; the accordion items generated in a loop from that same array. Review agreement names the tester's role and the three things they will try. Tag v0.5 pushed.",
      notEnough: "Four pages live but the review \"agreed on some day after the break\" with no names and no date — that is how reviews silently vanish, and phase C loses its foundation."
    },

    44: {
      type: "katselmointi",
      feature: "The client and an external tester have used v0.5 at the public URL; their findings are recorded in their own words; the backlog is re-prioritised; the first complete debugging chain is documented from a real review finding.",
      excerpt: "I want to hear, in their words, whether they can find the alphabet, read a pronoun table and understand what this language is — without me explaining anything.",
      connection: "Three weeks away from the code, and now other people meet it. Everything in phase C is derived from what happens in this session — that is why the review is a week, not a meeting.",
      deliverable: "A review log with the tester's findings verbatim and your interpretation separately, the client's decisions on each finding, an updated P0/P1/P2 backlog with new issues, a small fix batch deployed, and debugging chain 1/3 (observation → reproduction → cause → fix commit → re-test → regression test). The t12 open item is checked with the supervisor.",
      why: "Feedback that is paraphrased is feedback lost — you will fix what you thought they meant. And a review without re-planning is theatre: the point is that next week's work changes because of what you heard.",
      done: "The review log is committed with the two voices clearly separated, every finding has a decision (fix / won't fix / P2), and chain 1/3 is complete from a real finding, with its regression test in the matrix.",
      record: "Write in the Week 44 entry: who tested (role, date), the three most surprising findings in the tester's words, what you re-prioritised and why, and the chain 1/3 links.",
      skills: ["review facilitation", "feedback recording", "re-planning", "debugging chain"],
      steps: [
        ["Run the session, mouth shut.", "Give the tester the three tasks from the review agreement and watch. Write down what they say and do — their words, not yours. Every hesitation is a finding."],
        ["Separate the voices.", "In the review log: left column what was said and done (verbatim), right column your interpretation. The client (supervisor as representative) decides on each finding: fix now, later, or not at all."],
        ["Re-plan.", "Turn the accepted findings into issues with done-when conditions, re-prioritise the backlog, and compare your original size estimates with what things actually took — write the delta down."],
        ["Fix a small batch and document chain 1/3.", "Pick one real finding that is a bug. Reproduce it, find the cause, fix it in a commit, re-test, and add a regression test to the matrix. This is the complete chain, written down as it happened."],
        ["Check the t12 open item.", "Ask the supervisor for the institution's line on the device-security evidence, and update the plan's open items."]
      ],
      help: {
        title: "The review log and the debugging chain",
        tree: "project-docs/\n├─ review-2026-w44.md      ← the log, two voices separated\n├─ review-agreement.md     ← from week 40\n└─ debugging-chains.md     ← chain 1/3 starts here",
        actions: [
          "Before the session: print or open the review agreement; prepare the three tasks; have a notes file ready with two columns.",
          "During: no helping, no explaining. If the tester is stuck for two minutes, note WHERE and move on.",
          "After: fill the log the same day while the words are fresh. Ask the client to confirm the decisions in writing (a comment on the issue is enough).",
          "Chain 1/3: pick a finding that reproduces reliably. Follow the template below — every arrow is a line you write.",
          "Keep the DevTools console open while you reproduce: on a fetch-driven site the console usually names the failing file before you have finished guessing."
        ],
        code: "DEBUGGING CHAIN TEMPLATE (project-docs/debugging-chains.md)\n## Chain 1 — <short name> (week 44)\n- Observation (tester's words, verbatim): \"…\"\n- Reproduction: steps 1-2-3 that make it happen every time\n- Cause: the actual reason in the code/data (not a guess)\n- Fix: commit <hash> — what changed and why\n- Re-test: same steps, expected vs observed result\n- Regression test: T<nn> added to the matrix so it cannot return silently",
        test: "Give the review log to someone who was not present: they can tell which lines are the tester's words and which are your interpretation, without asking you.",
        links: []
      },
      example: "Log: \"Tester (classmate, 27 Oct): 'Where do I click to hear it?' — did not find pronunciation, expected audio.\" Interpretation: IPA is not self-explanatory; decision: add a 'how to read IPA' note (issue #23), audio stays OUT (client). Chain 1: the first pronoun tab is empty on a slow connection → cause: the tab was rendered before the fetch resolved → fix commit a1b2c3 → regression test T09 (Slow 3G reload).",
      notEnough: "\"The feedback was mostly positive and I fixed some small things\" — no verbatim findings, no decisions, no chain. Nothing here proves anyone else ever touched the site."
    },

    45: {
      type: "feature",
      feature: "The Numbers & Comparison page is live with a number converter built from scratch: type 319, get \"Trecentodecenove\" — pure functions in js/numbers.js, unit-tested in the browser against the PDF before the code ran.",
      excerpt: "how to count to ten thousand",
      connection: "Every other page renders data; this one computes. The converter is the one part of the site built without Bootstrap components — your own markup, your own CSS, your own logic and your own tests — and the review feedback from week 44 lands in the same deploy.",
      deliverable: "data/numbers.json (cardinals, ordinals, the paragoge/apocope rules as data where possible), js/numbers.js with pure functions and no DOM code, tests/tests.html with a small test runner you wrote yourself and expected values taken from the PDF before running, the converter UI built from scratch, the comparison section, and the week-44 feedback change deployed and linked to its finding. Debugging chain 2/3 starts from any real bug found here or in week 46.",
      why: "This is the demonstration's centrepiece: structured programming, testing discipline and the one built-by-hand view all live here. Writing the expected values BEFORE the run is what turns clicking into testing — and no model can produce them, because the rules are yours.",
      done: "On the public URL, at least 0–999 999 converts correctly including the separation and clipping rules, tests/tests.html reports 0 failed with at least 6 converter tests whose names cite PDF pages, and the feedback change is live.",
      record: "Write in the Week 45 entry: the function breakdown, the two hardest rules and how you encoded them, the test-first evidence (the commit order shows red tests before green ones), and the feedback-change link.",
      skills: ["pure functions", "unit testing", "algorithm design", "test-first"],
      steps: [
        ["Read the rules like a spec.", "PDF pages 42–45: the -milla forms, the dash rule for 120–190/220–290/…, vowel clipping (Cinquantoto), and the paragoge/apocope list. Write each rule as one line in your own words — this list becomes your test plan."],
        ["Write the tests first.", "Take the test file from the help block: about twenty lines of your own, no framework and nothing to install. For each rule write 1–2 tests with the expected string FROM THE PDF and the page number in the test name. Open tests/tests.html: all red. Commit — this commit is the proof of test-first."],
        ["Implement in small functions.", "js/numbers.js is an ES module that exports numberToIonian(): units → tens → hundreds → thousands, each its own function, composed at the top. No DOM, no fetch — that is what makes it testable. When a test goes green, commit. When one stays red, check the PDF before the code: the data can be wrong too."],
        ["Build the UI from scratch.", "A plain <input> with a real <label>, a result element with aria-live=\"polite\", and your own CSS. No Bootstrap components in this one view — this is the built-by-hand work sample. Handle junk input kindly (empty, letters, negative, too big)."],
        ["Ship the feedback change.", "Implement the week-44 change in the same branch, link the commit to the finding, merge to main, deploy."]
      ],
      help: {
        title: "The converter's function split and a test runner you write yourself",
        tree: "js/numbers.js        ← pure functions, no DOM, no fetch\njs/converter.js      ← reads the input, calls numberToIonian, writes the output\nnumbers.html         ← the from-scratch UI + the comparison content\ntests/tests.html     ← <ul id=\"results\"></ul> <p id=\"summary\"></p>\n                       + <script type=\"module\" src=\"numbers.test.js\"></script>\ntests/numbers.test.js\ndata/numbers.json",
        actions: [
          "js/numbers.js exports numberToIonian(n). It must not touch the DOM and must not fetch — that is exactly what lets the test page import it.",
          "Copy the test file below into tests/numbers.test.js and fill the expected strings from YOUR PDF pages 42–45 — one test per rule on your rule list.",
          "Implement numberToIonian step by step: 0–20 lookup → tens with clipping → hundreds → mille/milla → the dash rule last.",
          "The UI: <label for=\"n\">, <input id=\"n\" type=\"number\">, and a result element with aria-live=\"polite\" so a screen reader announces the answer. Your own styles; the week-47 audit will look here.",
          "Open tests/tests.html through the local server after every change and paste the summary line into the journal."
        ],
        code: "// tests/numbers.test.js — expected values from the PDF BEFORE implementing\nimport { numberToIonian } from \"../js/numbers.js\";\n\nlet pass = 0, fail = 0;\nfunction test(name, actual, expected) {\n  const ok = actual === expected;\n  ok ? pass++ : fail++;\n  const li = document.createElement(\"li\");\n  li.textContent = `${ok ? \"PASS\" : \"FAIL\"} ${name} — expected \"${expected}\", got \"${actual}\"`;\n  document.querySelector(\"#results\").append(li);\n}\n\ntest(\"T01 p42: 8\", numberToIonian(8), \"<from PDF>\");\ntest(\"T02 p43: 58 vowel clipping\", numberToIonian(58), \"<from PDF>\");\ntest(\"T03 p43: 319 dash rule\", numberToIonian(319), \"<from PDF>\");\ntest(\"T04 p43: 320 no dash\", numberToIonian(320), \"<from PDF>\");\ntest(\"T05 p44: 19000 Nove→No\", numberToIonian(19000), \"<from PDF>\");\ntest(\"T06 edge: 0\", numberToIonian(0), \"<from PDF>\");\ndocument.querySelector(\"#summary\").textContent = `${pass} passed, ${fail} failed`;\n// Add error cases: negative, NaN, > max — decide and document the behaviour.",
        test: "Open tests/tests.html: 0 failed. Then break one rule in js/numbers.js on purpose and reload: the right test goes red and its name tells you which PDF page to check. Undo.",
        links: [
          ["MDN: JavaScript modules", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"],
          ["MDN: aria-live regions", "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions"]
        ]
      },
      example: "Rule list: 9 rules, each one line. tests/numbers.test.js: 11 tests, names cite PDF pages, the first commit is all-red and the third all-green. js/numbers.js: 5 functions, the longest 18 lines. The converter UI passes the Tab-order check and announces the result through aria-live.",
      notEnough: "A converter that happens to work for 1–100, with tests written afterwards to match the code's output instead of the PDF — that tests nothing. If the expected values did not exist before the run, it is not a test, it is a screenshot."
    },

    46: {
      type: "feature",
      feature: "The Phrasebook & Chapter 1 page is live: the café dialogues side by side with an Ionian/English toggle, the vocabulary as a Bootstrap card grid, and a search box that filters the cards as you type.",
      excerpt: "a phrasebook where a beginner can learn my café dialogue",
      connection: "This is the page the external tester will actually use in week 48 — a beginner's path into the language. The card grid finally puts week 37's four-key word shape to work, and the search closes the feature list; from here on, the project polishes and proves.",
      deliverable: "data/words.json completed and data/phrases.json written (basic vocabulary p. 12, greetings and dialogues pp. 51–56), the vocabulary rendered as a responsive Bootstrap card grid, the dialogue viewer with the toggle, a search box that filters in memory and renders with textContent, the remaining test matrix planned (including the broken-network case), the LICENSE/CREDITS files per the client's decision, and debugging chain 2/3 completed if it started in week 45.",
      why: "Search is where user input meets your rendering for the first time — and in plain JavaScript nothing escapes it for you. The security requirement stops being abstract the moment you choose textContent over innerHTML. And the PDF's own pages 57–58 are under construction: the site must say 'coming later' rather than invent content, exactly as the brief demands.",
      done: "A beginner can find 'thank you' by typing 'thank' on the public URL, the cards filter as you type with a live match count, the dialogues toggle between languages, searching for the T10 attack string (the img-onerror line in the test matrix) renders as harmless text, and the full test matrix (at least 12 cases) exists with the expected results filled in.",
      record: "Write in the Week 46 entry: how the filter works, why textContent makes it XSS-safe and what innerHTML would have done instead, the 'coming later' decision for pp. 57–58, the LICENSE/CREDITS commits, and the state of chain 2/3.",
      skills: ["search and filtering", "Bootstrap cards and grid", "XSS awareness", "test planning"],
      steps: [
        ["Finish the word and phrase data.", "PDF page 12 and pages 51–56: complete data/words.json in the week-37 four-key shape, and write data/phrases.json with the dialogues as ordered turns with speaker names. Mark pages 57–58 as 'coming later' in the data — one honest placeholder entry, no invented content."],
        ["Build the vocabulary card grid.", "One Bootstrap card per word inside a row/col grid: the word as the card title, the part of speech as a muted subtitle, the translation as the text, and the example sentence at the bottom. Three columns on a laptop, one on a phone — the grid classes do that for you."],
        ["Build the dialogue viewer.", "Turns rendered in order, one toggle to switch Ionian/English (or show both). Keep it readable on a phone — this is the page a learner holds in one hand in a café."],
        ["Build the search and prove it is safe.", "One input, one 'input' listener, one filter over the loaded array, then re-render the grid and show the match count. Every card is built with createElement and textContent — never innerHTML with data you did not write. Then type the attack string and prove it."],
        ["Plan the matrix and commit the licences.", "Fill the test matrix to at least 12 cases: thirds for normal use / limits / error cases, including the broken-network fetch case and the converter's junk inputs, expected-result column first. Then commit LICENSE (the client's decision from the plan's open items) and CREDITS (fonts, Bootstrap with its version, and the language material's own terms)."]
      ],
      help: {
        title: "The card grid, the filter, and a search that cannot be tricked",
        tree: "data/words.json   ← finished this week, same four keys as in week 37\n{ \"required\": [\"word\", \"partOfSpeech\", \"translation\", \"example\"],\n  \"items\": [\n    { \"word\": \"Benfacì\", \"partOfSpeech\": \"phrase\", \"translation\": \"Thank you\",\n      \"example\": \"Benfacì, senyor! — Thank you, sir!\" }\n  ] }\n\ndata/phrases.json\n{ \"dialogues\": [\n    { \"id\": \"cafe\", \"title\": \"Doing business in a café\",\n      \"turns\": [ { \"speaker\": \"Antonio\", \"ionian\": \"…\", \"english\": \"…\" } ] }\n  ],\n  \"comingLater\": [\"Polite phrases\", \"Conditional requests\"] }\n\nphrasebook.html   ← <input id=\"search\"> · <p id=\"count\"> · <div id=\"cards\" class=\"row row-cols-1 row-cols-md-3 g-3\">",
        actions: [
          "The grid is Bootstrap's: row row-cols-1 row-cols-md-3 g-3 on the container, one <div class=\"col\"> per card. Bootstrap handles the breakpoints; you handle the data.",
          "Give the search input a real <label> and the count element aria-live=\"polite\", so the result is announced and not just seen.",
          "Every card is built with createElement and textContent. If you ever reach for innerHTML with data in it, stop — that is exactly the T10 test case.",
          "The toggle is one boolean: re-render the dialogue turns from it (Ionian, English, or both).",
          "Add words and phrases to tools/check-data.html and run it."
        ],
        code: "// js/phrasebook.js — one Bootstrap card per word; the data goes in as TEXT\nfunction card(w) {\n  const col = document.createElement(\"div\");\n  col.className = \"col\";\n  const body = document.createElement(\"div\");\n  body.className = \"card card-body h-100\";\n  const fields = [[\"h5 card-title\", w.word], [\"small text-body-secondary\", w.partOfSpeech],\n                  [\"card-text\", w.translation], [\"small fst-italic\", w.example]];\n  for (const [cls, value] of fields) {\n    const p = document.createElement(\"p\");\n    p.className = cls;\n    p.textContent = value;   // textContent, not innerHTML — THIS is the XSS defence\n    body.append(p);\n  }\n  col.append(body);\n  return col;\n}\n\nconst show = (list) => {\n  grid.replaceChildren(...list.map(card));\n  count.textContent = `${list.length} matches`;\n};\nsearch.addEventListener(\"input\", () => show(words.filter((w) =>\n  (w.word + \" \" + w.translation).toLowerCase().includes(search.value.toLowerCase()))));\n\nTEST MATRIX SKELETON (project-docs/test-matrix.md)\n| T#  | Start state  | Action | Expected (write FIRST) | Observed | Pass |\n|-----|--------------|--------|------------------------|----------|------|\n| T01 | numbers.html | type 319 | Trecentodecenove-style form per PDF | | |\n| T07 | phrasebook   | search \"thank\" | Benfacì card visible, count = 1 | | |\n| T09 | any page     | block a data JSON (DevTools) | error state naming the file | | |\n| T10 | phrasebook   | search \"<img src=x onerror=alert(1)>\" | shown as text, no dialog | | |\nThirds: T01–T04 normal use · T05–T08 limits · T09–T12 error cases",
        test: "Type <img src=x onerror=alert(1)> into the search on the public URL: it must appear as plain text and no dialog opens. Screenshot to project-docs/evidence/week-46/.",
        links: [
          ["Bootstrap: Cards", "https://getbootstrap.com/docs/5.3/components/card/"],
          ["MDN: Node.textContent", "https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent"]
        ]
      },
      example: "data/words.json: 38 entries in the four-key shape; data/phrases.json: 3 dialogues, every line traceable to a PDF page, comingLater naming the two under-construction topics. Search shows '3 matches' and the grid drops to one column on a phone. LICENSE committed with the client's choice; CREDITS lists the Inter font, Bootstrap 5.3.3 and the Ionian material's terms.",
      notEnough: "A search that only matches exact full words, no XSS test, and dialogue text copy-pasted with invented 'improvements' the PDF never wrote. The tester in week 48 will type one lowercase word — and the demonstration watches what happens."
    },

    47: {
      type: "laatu",
      feature: "The site passes a real quality bar: the full test matrix is run with results recorded, all three debugging chains are complete, accessibility is verified with before/after Lighthouse pairs, every page validates as HTML, and the code has been refactored while every test stays green.",
      excerpt: "Accuracy matters more than volume.",
      connection: "Everything exists; now you prove it holds. The tests you planned in week 46 get their observed-result column, the chains get their third member, and the refactor shows you can improve code without breaking it — because the tests say so.",
      deliverable: "The test matrix executed (at least 12 cases, expected vs observed, thirds covered), debugging chain 3/3 plus chains 1–2 compiled into demonstration shape, Lighthouse before/after pairs for accessibility and performance, keyboard navigation and contrast fixes, every page through the W3C HTML validator with the findings fixed, a review of what you load from the CDN, a no-secrets check, and a refactor commit series with green tests in between.",
      why: "A claim without a recorded run is an opinion. The demonstration assesses testing as a discipline: expected first, observed second, failures documented — and the accessibility pass is what makes the site usable for learners who never touch a mouse.",
      done: "The matrix has every row filled with observed results and dates, three complete chains are in debugging-chains.md, the after-Lighthouse accessibility score is recorded next to its before-pair, every page validates without errors, and tests/tests.html plus tools/check-data.html are both green on main.",
      record: "Write in the Week 47 entry: the failures the matrix caught (there should be some — a matrix that catches nothing was too soft), the chain 3/3 links, the Lighthouse pairs, what the validator found, and what the refactor changed structurally.",
      skills: ["test execution", "accessibility", "refactoring", "security review"],
      steps: [
        ["Run the matrix for real.", "Execute every test case against the public URL and fill the observed column with dates. A failing row is a gift: it becomes chain material and proof that your matrix bites."],
        ["Complete the chains.", "Chain 3/3 from a real matrix failure or a review remnant. Compile chains 1–3 into debugging-chains.md in identical format — observation to regression test, no gaps."],
        ["Audit accessibility with pairs.", "Lighthouse on every page: record the before scores. Fix keyboard order, focus visibility, contrast, alt texts, labels and heading levels. Record the after scores next to the before ones — the pair is the work sample."],
        ["Validate and review what you load.", "Run every page through the W3C HTML validator and fix what it finds; Bootstrap's markup patterns have required attributes and a duplicate id is a real bug. Then review your external code: the Bootstrap version is pinned (never @latest), the integrity hash is there, and you can say what each external file does. Grep the repository for secrets, and confirm the search's textContent behaviour once more on the deployed site."],
        ["Refactor with a safety net.", "Rename the unclear, extract the duplicated, delete the dead — in small commits, reloading tests/tests.html between each. If a test goes red, the refactor stops until it is green."]
      ],
      help: {
        title: "The accessibility audit and the validation pass, step by step",
        tree: "project-docs/\n├─ test-matrix.md          ← observed column filled, dated\n├─ debugging-chains.md     ← 3 complete chains\n├─ lighthouse/\n│  ├─ before-<page>.png\n│  └─ after-<page>.png\n├─ html-validation.md      ← validator findings per page, before → after\n└─ security-review.md      ← CDN dependencies + no-secrets check",
        actions: [
          "Lighthouse: Chrome DevTools → Lighthouse tab → Accessibility + Performance, on the PUBLIC URL, one page at a time. Screenshot the scores (before).",
          "HTML validation: validator.w3.org → Validate by URI, one page at a time. Paste the findings into html-validation.md BEFORE you fix them, so the before/after pair exists here too.",
          "Keyboard pass: put the mouse away. Tab through every page — can you reach the navbar, the tabs, the accordion, the converter and the search? Is focus always visible?",
          "Contrast: check the gold-on-white texts especially; a Bootstrap colour variable you overrode in css/style.css may need a darker shade.",
          "Alt and labels: every image has alt (or an empty alt for decoration), every input has a <label> the screen reader announces.",
          "Fix, deploy, re-run Lighthouse (after). The pair goes to project-docs/lighthouse/."
        ],
        code: "QUALITY WEEK CHECKLIST\n[ ] all matrix rows executed, observed + date filled\n[ ] at least one failure found and documented (or the matrix is too soft — say so)\n[ ] chains 1–3 complete, identical format\n[ ] Lighthouse before/after pair per page (a11y + perf)\n[ ] every page passes the W3C HTML validator (watch for duplicate ids in the accordion)\n[ ] keyboard-only walkthrough passes: navbar, tabs, accordion, converter, search\n[ ] Bootstrap pinned to an exact version + integrity hash, and I can say what each external file does\n[ ] no secrets in the repo (search for 'key', 'token', 'password')\n[ ] refactor commits small, tests/tests.html green in between",
        test: "Do the whole converter flow yourself with the keyboard only and the screen reader talking, then repeat it on the phrasebook search. Where you wince, there is a finding.",
        links: [
          ["web.dev: Accessibility", "https://web.dev/learn/accessibility/"],
          ["W3C Markup Validation Service", "https://validator.w3.org/"]
        ]
      },
      example: "Matrix: 13/13 executed, T09 failed first (the error state was missing on the pronouns page after the refactor) → chain 3. Lighthouse a11y: Home 87→100, Numbers 82→98. Validator: 6 findings on three pages (a duplicate accordion id, two inputs without labels) → 0. Security review: Bootstrap pinned at 5.3.3 with an integrity hash, no secrets found. Refactor: the fetch helper moved into js/data.js and three pages simplified, tests green throughout.",
      notEnough: "\"I tested everything and it works\" with an empty observed column, chains that stop at 'fixed it', and a single Lighthouse run with no before-pair. None of that survives one question in the demonstration."
    },

    48: {
      type: "julkaisu",
      feature: "Version 1.0 is released: content frozen, tested in a clean environment, verified by an external user who learned a café dialogue from the site alone — and the repository documentation lets a stranger run the project without asking you anything.",
      excerpt: "a README good enough that another person can get the project running without asking me anything.",
      connection: "The release candidate meets its real test: not your machine, not your explanations — a clean environment and a person who owes you nothing. What they stumble on, you fix; then it is v1.0.",
      deliverable: "A content-frozen release candidate, a clean-environment run (a fresh clone on another machine, README steps only), the external user test with the tester's words recorded verbatim and separated from your interpretation, every hesitation turned into an instruction fix, the deployment-path description built from your own artefacts (t11), the finished README and user documentation, and the v1.0 tag + GitHub release.",
      why: "The brief's final requirement is exactly this: someone else, unaided. An instruction verified only by its author is unverified — and the demonstration's release requirement needs the clean-environment proof, not a promise.",
      done: "The tester reached and read the café dialogue using only the site and your written instructions — no spoken help; the fresh clone runs with the README steps only; v1.0 is tagged, released and live at the public URL.",
      record: "Write in the Week 48 entry: the clean-environment result, the tester's words (verbatim, separated), the instruction fixes their hesitations produced, and the v1.0 release link.",
      skills: ["release management", "user testing", "technical writing", "clean-environment verification"],
      steps: [
        ["Freeze and branch.", "Declare the content frozen: only blocking fixes from here. Tag the release candidate."],
        ["Test in a clean environment.", "Fresh clone on a machine (or account) that has never run the project. Follow the README literally — including how to start a local server, because fetch() will not read the data files over file:// — and fix the README, not your memory, wherever it fails."],
        ["Run the user test.", "A new tester (not the week-44 one, if possible) gets one written task: 'Using this site, learn to order in the café dialogue.' You watch in silence. Record their words verbatim; every hesitation becomes an instruction or UI fix. Note their role and the date — same discipline as week 44."],
        ["Describe the deployment path.", "One page from your own artefacts: the week-36 phone screenshot (LAN), the Pages URL, the HTTPS padlock — localhost → local network → GitHub Pages/CDN. This is the network work sample, in your own images."],
        ["Release v1.0.", "Apply the fixes, tag v1.0, write the GitHub release notes (what is in, what is 'coming later'), deploy, and check the credit and terms are visible one last time."]
      ],
      help: {
        title: "The user test script and the release checklist",
        tree: "project-docs/\n├─ user-test-2026-w48.md   ← tester's words / your interpretation\n├─ deployment-path.md      ← t11: your own screenshots\n└─ release-notes-v1.0.md\nREADME.md                  ← clone → start a local server → open http://localhost:…",
        actions: [
          "Write the tester's task card BEFORE the session: one goal, zero hints. If the card needs explaining, the card failed — fix it first.",
          "Clean environment: git clone into a new folder and follow the README top to bottom. Every command you type that is not in the README goes INTO the README.",
          "The README must say why file:// does not work and give two ways to serve the folder (Live Server, python3 -m http.server). That single paragraph is what makes the project runnable by a stranger.",
          "During the test: silence. Note the exact moment and place of every hesitation.",
          "v1.0: git tag v1.0 && git push --tags, then a GitHub release with the notes. Verify the public URL serves the tagged version."
        ],
        code: "RELEASE CHECKLIST v1.0\n[ ] content frozen — only blocking fixes after the RC\n[ ] fresh clone runs with the README steps only (local server included)\n[ ] every page opens from the public URL with a clean DevTools console\n[ ] user test done: words verbatim, interpretation separate, role + date\n[ ] every hesitation → an instruction or UI fix, committed\n[ ] deployment-path.md uses MY screenshots (LAN, Pages URL, HTTPS)\n[ ] LICENSE + CREDITS + terms of use visible\n[ ] v1.0 tagged, release notes published, site live",
        test: "Ask the tester afterwards: 'Could you have done it without me in the room?' If the answer needs a footnote, there is one more fix to make.",
        links: [["GitHub Docs: About releases", "https://docs.github.com/en/repositories/releasing-projects-on-github"]]
      },
      example: "Clean clone: failed at step 2 — the README said \"open index.html\" and every fetch died on file:// → the README now names Live Server and python3 -m http.server. Tester (role: student from another group, 26 Nov): \"Which one is the waiter?\" → speaker labels made bolder, commit d4e5f6. v1.0 released with notes listing the two 'coming later' topics.",
      notEnough: "A v1.0 tag on an untested build, a README verified only by the person who wrote it, and 'my friend liked it' as the user test. The demonstration will ask for the tester's words — have them."
    },

    49: {
      type: "naytto",
      feature: "Nothing new is added. Every one of the 44 requirements points to its exact work sample, the 8–10 minute demo is rehearsed, and the project is handed over.",
      excerpt: "By the fourth of December I want version 1.0 at a public URL.",
      connection: "The work is done; this week makes the competence visible. The evidence was produced week by week — now it is precision-linked so an assessor finds every sample in seconds, not minutes.",
      deliverable: "The evidence matrix below fully linked (a commit, file, screenshot or memo per requirement), the final project journal and AI log committed, the demo rehearsed with a timer, the self-assessment written, and the handover done on Friday 4 Dec.",
      why: "Competence that cannot be found cannot be assessed. The difference between a good project and a good demonstration is thirty minutes of exact linking — and a rehearsed demo that fits its slot.",
      done: "Every matrix row has a working link, the journal covers all 11 weeks, the demo ran inside 10 minutes in rehearsal, and the handover package is complete on Friday.",
      record: "Write in the Week 49 entry: the demo structure with timings, what the self-assessment says about your weakest and strongest requirement, and the final commit hash.",
      skills: ["evidence linking", "demonstration", "self-assessment"],
      steps: [
        ["Link the matrix.", "Go through all 44 rows below. Each gets the exact location: a commit hash, a file path, a screenshot, a memo. 'It is in the repo' is not a location."],
        ["Close the journal and the AI log.", "Download both from this page, commit to project-docs/, and read the AI log once more: every significant use has verification and a takeaway."],
        ["Build the demo.", "8–10 minutes: the site working (converter + phrasebook search), one technical decision you defend (the JSON + fetch data model, or the Bootstrap comparison), one debugging chain end to end, the Git history, and your verified AI use. Rehearse with a timer, twice."],
        ["Write the self-assessment.", "Honest, requirement-anchored: where is your evidence thinnest, where strongest? The assessor respects accuracy about weakness more than confidence about everything."],
        ["Hand over.", "Friday 4 Dec: public URL, repository, journal, matrix links, demo. Done."]
      ],
      help: {
        title: "The demo structure that fits ten minutes",
        tree: "DEMO 8–10 min\n1. The site live (2 min): converter 319, phrasebook search, a pronoun table\n2. One decision defended (2 min): JSON + runtime fetch, and Bootstrap — why, what it cost\n3. One debugging chain (2 min): observation → regression test, on screen\n4. Git history (1 min): tags v0.5 → v1.0, the feedback-change commit\n5. AI use (1 min): one log entry — asked, verified, tested, learned\n6. Buffer + questions (2 min)",
        actions: [
          "Rehearse against the clock twice; cut until section 6 exists.",
          "Open every tab and file you will show BEFORE the demo starts — including tests/tests.html and the comparison memo.",
          "Have the matrix open as your own map — when asked about a requirement, you navigate in one click."
        ],
        code: "HANDOVER CHECKLIST\n[ ] all 44 matrix rows link to an exact location\n[ ] project journal: 11 weeks, 3 main fields each\n[ ] AI log committed, every entry verified\n[ ] demo rehearsed ≤10 min, twice\n[ ] self-assessment written and committed\n[ ] public URL + repo link delivered to the assessor",
        test: "Pick three random matrix rows and reach each work sample in under 15 seconds. If any takes longer, the link is not exact enough.",
        links: []
      },
      example: "Matrix row k2 → project-docs/library-comparison.md (commit 9f8e7d); row p2 → debugging-chains.md#chain-2; row t10 → evidence/week-36/phone.png. Demo rehearsal: 9 min 20 s.",
      notEnough: "A great v1.0 with a matrix that says 'see repository' on every row, and a demo attempted for the first time in front of the assessor. The work deserved better logistics.",
      paivat: [
        ["Mon 30 Nov · Content freeze", "The last accepted version."],
        ["Tue 1 Dec · Evidence", "Journal, tests and matrix links."],
        ["Wed 2 Dec · Rehearsal", "The 8–10 min demo and the self-assessment."],
        ["Thu 3 Dec · Buffer", "Final check with another person."],
        ["Fri 4 Dec · Handover", "Demonstration and handover, Fri 4 Dec."]
      ]
    }
  },

  /* ---- teacher material (Finnish — assessment documents follow ePerusteet) ---- */
  opettaja: {
    jakso: "Viikot 36–49 · ei projektityötä viikoilla 41–43 (syysloma vko 42)",
    deadline: "pe 4.12.2026",
    kansiKuvaus: "Oman keksityn kielen esittelysivusto: käsin kirjoitettu HTML/CSS/JS, Bootstrap ja datavetoiset kielioppitaulukot",
    kansiHuomiot: [
      "Julkinen repository: ei henkilötietoja, ei koulun tunnisteita, ei muiden nimiä eikä kasvoja.",
      "Kielen aineisto on tekijän omaa; sivusto näyttää tekijämaininnan ja käyttöehdot."
    ],
    viimeisetPaivat: [
      ["Ma 30.11.", "Sisältöjäädytys — viimeinen hyväksytty versio"],
      ["Ti 1.12.", "Aineisto: päiväkirja, testit ja matriisilinkit"],
      ["Ke 2.12.", "Demon harjoittelu (8–10 min) ja itsearviointi"],
      ["To 3.12.", "Puskuri — tarkistus toisen henkilön kanssa"],
      ["Pe 4.12.", "Näyttö ja luovutus"]
    ],

    pohjat: {
      aloitusVko: 36,
      kysymyksia: 8,
      vertailuVko: 38,
      katselmointiVkot: "44 ja 48",
      testiVko: 47,
      testeja: 12,
      ketjuja: 3,
      lisenssiVko: 46
    },

    nayttosuunnitelma: {
      kohde: [
        "Näyttö suoritetaan oppilaitoksen webprojektina viikoilla 36–49/2026 (11 työviikkoa; viikoilla 41–43 ei projektityötä). Opiskelija suunnittelee, toteuttaa ja julkaisee staattisen verkkosivuston, joka esittelee hänen itse luomansa kielen (Ionian / Lingua Ioniana). Tekniikka: käsin kirjoitettu HTML ja CSS ilman käännösvaihetta tai bundleria, vanilla JavaScript ES-moduuleina, sisältö JSON-tiedostoina data-kansiossa ja ladattuna ajonaikaisella fetch-kutsulla, Bootstrap 5 komponenttikirjastona CDN:stä (versio kiinnitetty), yksikkötestit selaimessa avattavalla omalla testisivulla, julkaisu GitHub Pagesiin suoraan main-haarasta. Koko projekti ja tuotos ovat englanniksi; arviointiasiakirjat suomeksi.",
        "Näyttö kattaa neljä tutkinnon osaa perusteesta OPH-6216-2025 (perusteId 9816282): Tieto- ja viestintätekniikan perustehtävät (12 vaatimusta), Ohjelmointi (11), Ohjelmistokehittäjänä toimiminen (14) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (7) — yhteensä 44 vaatimusta. Vaatimusten työnäytteet syntyvät viikoittain ja linkitetään täsmällisesti viikolla 49.",
        "Roolit on kirjattu auki suunnitelmaan: opiskelija toimii sekä kehittäjänä että asiakkaana kielen luojan roolissa; ohjaaja toimii tilaajan edustajana katselmoinneissa; ulkopuolinen testaaja on eri henkilö, joka ei tunne kieltä. Arvioitava osaaminen on webkehitys — kieli itsessään on opiskelijan omaa lähdeaineistoa, jonka oikeellisuuden vain hän voi todentaa."
      ],
      p0: "Pakollinen perusversio (P0): julkaistu sivusto, jossa Home, Alphabet & Pronunciation, Pronouns, Nouns & Articles, Numbers + itse rakennettu numeromuunnin (ilman Bootstrap-komponentteja) ja Phrasebook; kaikki sisältö JSON-datasta; vähintään 12 testitapausta odotettuine tuloksineen ennen ajoa; 3 virheenkorjausketjua; katselmointi ja käyttäjätesti; v1.0 GitHub Pagesissa.",
      roolit: [
        ["Opiskelija", "Suunnittelee, toteuttaa, testaa ja julkaisee sivuston; kirjoittaa projektipäiväkirjan ja AI-lokin; toimii asiakkaana kielen luojan roolissa."],
        ["Ohjaaja / opettaja", "Tilaajan edustaja katselmoinneissa; vastaa avoimista asioista (lisenssi, oppilaitoksen tietoturvalinja); tarkistuspisteiden laadunvalvonta; arviointi."],
        ["Ulkopuolinen testaaja", "Ei tunne kieltä. Testaa v0.5:n viikolla 44 ja tekee käyttäjätestin viikolla 48 pelkän kirjallisen ohjeen varassa; havainnot kirjataan hänen omilla sanoillaan."]
      ],
      tarkistuspisteet: [
        [36, "Toimeksianto ja ympäristö", "Kysymyslista vastauksineen, julkinen repo tietosuojatarkistuksineen, ensideploy julkisessa osoitteessa, suunnitelmaluonnos ja P0-backlog"],
        [38, "Vertailumuistio", "Bootstrap + yksi muu kirjasto + ei kirjastoa -vaihtoehto, omat mittaukset (siirretty KB, Lighthouse), perusteltu päätös ja keskustelu kirjattu"],
        [40, "v0.5 ennen lomaa", "Neljä sisältönäkymää tuotannossa, v0.5-tagi, sitova sopimus katselmoinnista (nimet + päivä) repositoryssa"],
        [44, "Katselmointi", "Testaajan sanat erillään tulkinnasta, päätös jokaisesta havainnosta, backlog ajan tasalla, ketju 1/3 valmis, t12:n avoin asia käsitelty"],
        [47, "Testit ja laatu", "Testimatriisi ajettu (≥12), ketjut 1–3 valmiit, Lighthouse ennen/jälkeen -parit, HTML-validointi, CDN-riippuvuuksien tarkistus ja salaisuustarkistus"],
        [48, "Julkaisu", "Puhtaan ympäristön ajo, käyttäjätesti kirjattuna testaajan omilla sanoilla erillään tulkinnasta, julkaisupolun kuvaus omista artefakteista, v1.0-release"],
        [49, "Näyttö", "44 vaatimuksen täsmälinkit, päiväkirja 11 viikolta, demo harjoiteltu, itsearviointi"]
      ],
      tyonaytteet: {
        t1: ["44, 48", "Katselmoinnin ja käyttäjätestin vuorovaikutus; palautteen vastaanotto ja jatkotoimet kirjattuna"],
        t2: ["36, 44", "Aloituskeskustelu ja katselmointi asiakasroolin kanssa; kysymyslista vastauksineen"],
        t3: ["36", "Tarvekartoitus ja perusteltu ratkaisuehdotus suunnitelmassa"],
        t4: ["44, 49", "Palautepyyntö katselmoinnissa; itsearviointi näyttöviikolla"],
        t5: ["36–49", "GitHub-issuet ja sovitut viestintäkanavat käytössä koko projektin ajan"],
        t6: ["38", "Vertailumuistio: alan sanasto ja kirjastovaihtoehtojen vertailu trendeineen"],
        t7: ["37–39", "Englanninkieliset dokumentaatiolähteet päiväkirjassa ja AI-lokissa"],
        t8: ["44–47", "Virheenkorjausketjujen tiedonhaku lähteineen"],
        t9: ["36", "Kehitysympäristön pystytys: käyttöjärjestelmä, VS Code, paikallinen web-palvelin, Git"],
        t10: ["36", "Paikallisen web-palvelimen jako lähiverkkoon ja testaus puhelimella; palomuuri- ja tietoturvahuomiot kirjattu"],
        t11: ["48", "Julkaisupolun kuvaus omista artefakteista: localhost → LAN → Pages/CDN/HTTPS"],
        t12: ["36, 44, 47", "Ympäristön suojaus (päivitykset, 2FA), tarkistuspiste ja riippuvuusaudit; oppilaitoksen linjaa vaativa osa on avoin asia"],
        p1: ["36", "VS Code, Live Server ja selaimen kehittäjätyökalut käytössä; ensimmäinen commit ja deploy"],
        p2: ["44–47", "Kolme virheenkorjausketjua havainnosta regressiotestiin"],
        p3: ["45, 47", "Muuntimen yksikkötestit selaimessa (tests/tests.html) ja testimatriisin ajo tuloksineen"],
        p4: ["45", "Muuntimen puhtaat funktiot ja ES-moduulijako (js/numbers.js)"],
        p5: ["47", "Refaktorointisarja testit vihreinä; nimeäminen ja HTML-validointi"],
        p6: ["38–40", "Sivut sivukartasta: Home, Alphabet, Pronouns, Nouns & Articles"],
        p7: ["45–46", "Muunnin ja haku issueista toteutukseen valmis kun -ehtoineen"],
        p8: ["36, 44", "Viikkosopimiset ohjaajan kanssa; tehtäväjako issueina"],
        p9: ["38, 44", "Kirjastovaihtoehtojen puinti ja katselmoinnin ratkaisut yhdessä"],
        p10: ["44", "Ratkaisujen toimivuuden arviointi katselmoinnissa päätöksineen"],
        p11: ["49", "Itsearviointi ja viikkopäiväkirjan reflektio-osiot"],
        s1: ["36", "Aloituskeskustelu: tarpeet kirjattu päätöksiksi, avoimiksi asioiksi ja oletuksiksi"],
        s2: ["44, 48", "Tekninen asia selitetty asiakkaalle arkikielellä (katselmointi- ja testimuistiot)"],
        s3: ["44", "Version v0.5 katselmointi päätöksineen"],
        s4: ["36", "P0/P1/P2-priorisointi backlogissa perusteluineen"],
        s5: ["36", "Toiminnot jaettu issueiksi, joissa valmis kun -ehto ja kokoarvio"],
        s6: ["36, 44", "Työmääräarvioiden ja toteuman vertailu uudelleensuunnittelussa"],
        s7: ["45–46", "Muunninlogiikka ja hakutoiminto"],
        s8: ["37", "Tietovarastopäätös: JSON-tiedostot data-kansiossa + ajonaikainen fetch, hylätyt vaihtoehdot perusteltu"],
        s9: ["37, 39", "Fetch-lataus sekä lataus- ja virhetilat toteutettuna ja testattuna"],
        s10: ["39, 46", "Fetch API ja datan muunnokset: ryhmittely, suodatus, haku"],
        s11: ["46, 47", "XSS-turvallinen renderöinti (textContent) todistettuna, CDN-riippuvuuksien tarkistus, ei salaisuuksia"],
        s12: ["36–49", "Commit-historia, tagit (v0.5, v1.0), branchit ja PR:t"],
        s13: ["45, 46", "Feature-branch liitetty olemassa olevaan versioon (palautemuutos)"],
        s14: ["36, 48", "Ensideploy ja v1.0-julkaisu GitHub Pagesiin"],
        k1: ["36, 38", "Kehittämisympäristön käyttöönotto sekä Bootstrapin käyttöönotto CDN:stä ja konfigurointi css/style.css:n muuttujaylikirjoituksilla"],
        k2: ["38", "Vertailumuistio: Bootstrapin mahdollisuudet ja rajoitteet omin mittauksin"],
        k3: ["39, 40", "Navbar, taulukot, välilehdet, accordion ja grid Bootstrapin komponenteilla"],
        k4: ["38", "Ulkoiset komponentit CDN:stä: Bootstrap CSS ja JS versio kiinnitettynä, ikonit ja fontit"],
        k5: ["39–46", "Sivujen suunnittelu, toteutus ja testaus Bootstrapia käyttäen"],
        k6: ["48", "Julkaisu asiakkaan ympäristöön (GitHub Pages, julkinen osoite)"],
        k7: ["48", "README ja käyttäjädokumentaatio sovitussa muodossa"]
      },
      dokumentaatio: {
        kayttajalle: "README ja sivuston ohjeet kirjoitetaan englanniksi kielen oppijalle ja projektia ajavalle: mitä sivusto on, miten projekti ajetaan, mistä sisältö tulee.",
        arviointiin: "Projektipäiväkirja, testimatriisi, virheenkorjausketjut, muistiot, AI-loki ja näyttömatriisin linkit project-docs-kansiossa.",
        vaatimus: "Ulkopuolinen henkilö saa projektin käyntiin pelkän README:n avulla ja oppii sivustolta kahviladialogin ilman suullista apua. Jokainen epäröintikohta kirjataan ohjeen korjauslistalle."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline HTML:ssä, CSS:ssä ja JavaScriptissä, virheilmoituksissa ja testi-ideoissa: ymmärrä → tarkista → testaa → kirjaa. Jokainen merkittävä käyttö kirjataan AI-lokiin aineistoviitteineen ja tietosuojavahvistuksineen.",
        "Sisältö on tekoälyn ulottumattomissa: mikään malli ei osaa opiskelijan itse luomaa kieltä. Jokainen kielioppitaulukko, fraasi ja testin odotusarvo tulee opiskelijan omasta PDF:stä ja tarkistetaan sitä vasten — keksitty muoto on bugi. Itse tehtävä ydin: sivuston rakenne, saavutettavuusratkaisut, muunninlogiikka ja testien odotusarvot."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "GitHub Pages -osoite ja v1.0-release julkaisumuistiinpanoineen"],
        ["Repository", "index.html ja sivut, css/, js/, data/ (JSON-data), tests/, tools/ ja project-docs/"],
        ["Projektipäiväkirja", "project-docs/project-journal.md — 11 viikkoa, kolme pääkenttää jokaisesta"],
        ["Testiaineisto", "Testimatriisi tuloksineen, 3 virheenkorjausketjua, Lighthouse-parit, HTML-validoinnin ja CDN-riippuvuuksien kirjaus"],
        ["AI-loki", "project-docs/AI-log.md aineistoviitteineen"],
        ["Näyttömatriisi", "44 vaatimuksen täsmälinkit työnäytteisiin"]
      ],
      huomiot: [
        ["Perusteen versio", "OPH-6216-2025 (perusteId 9816282, voimassa 1.8.2026 alkaen). Jos ryhmä on aloittanut vanhalla perusteella (OPH-4948-2021), siirtymäsääntö on ohjaajan päätös — kirjattu avoimeksi asiaksi."],
        ["t12 on osittainen", "Laitteiden suojauksen näyttö kertyy osanäytteinä (vko 36 ympäristön suojaus, vko 44 tarkistuspiste, vko 47 riippuvuusaudit). Oppilaitoksen linjaa vaativa osa on avoin asia, joka käsitellään viikon 44 tarkistuspisteessä."],
        ["Tiimivaatimukset yksilöprojektissa", "Tiimi = opiskelija + ohjaaja + asiakasrooli. Tehtävistä sopiminen, yhteinen ongelmanratkaisu ja ratkaisujen arviointi todentuvat viikkosopimisissa, vertailumuistion keskustelussa ja katselmoinneissa."],
        ["s10 rajapinta", "Rajapintanäyte on Fetch API + JSON-datan käsittely (ryhmittely, suodatus, haku) data-kansion tiedostoista. Erillistä ulkoista REST-palvelua ei projektissa ole — jos arvioija edellyttää ulkoista rajapintaa, asia nostetaan esiin viikon 44 tarkistuspisteessä."],
        ["Sisällön tekijänoikeus", "Kielen aineisto on opiskelijan omaa (© 2026). Sivusto täyttää aineiston omien käyttöehtojen 'spread awareness' -ehdon ja näyttää tekijämaininnan. PDF:n keskeneräiset sivut 57–58 on rajattu pois — sivusto sanoo 'coming later'."],
        ["P1-takaraja", "Verbs-näkymä (P1) aloitetaan vain, jos P0 on valmis viikon 46 loppuun mennessä. Interaktiivinen konjugaattori ei kuulu projektiin missään tilanteessa — se on toimeksiannossa erikseen nimetty houkutus."],
        ["Näyttödemo", "8–10 min: tuotos toiminnassa (muunnin, fraasihaku), yksi tekninen päätös perusteluineen, yksi virheenkorjausketju, Git-historia ja tarkistettu tekoälyn käyttö."],
        ["Kevyt teknologiavalinta", "Projektissa ei ole käännösvaihetta eikä pakettienhallintaa: HTML, CSS ja JavaScript kirjoitetaan käsin ja Bootstrap tulee CDN:stä. Siksi 'build'-tyyppiset työnäytteet on korvattu kevytstack-vastineilla: sivun paino selaimen Network-paneelista, W3C-HTML-validointi, Lighthouse-parit ja CDN-riippuvuuksien tarkistus (versio kiinnitetty, integrity-tiiviste) npm auditin sijaan. Yksikkötestit ajetaan selaimessa tests/tests.html-sivulta ilman testikirjastoa."]
      ]
    }
  },

  /* ---- docx palette ---- */
  paletti: {
    aksentti: "#1e56a0",
    aksenttiTumma: "#143e78",
    taulukkoSavy: "#e7eef8",
    riviSavy: "#f3f7fc"
  }
};
