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
    38: "Shell & library",
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

  /* ---- engine UI strings (English site) ---- */
  tekstit: {
    briefExcerptLabel: "The brief at this point",
    briefFullLink: "Full brief ↑",
    briefAnchor: "#toimeksianto",
    weekKicker: "This week's result",
    connectionLabel: "How this moves the project forward:",
    deliverableLabel: "Finished this week",
    whyLabel: "Why this matters",
    skillsLabel: "This week's tech",
    resourcesAria: "This week's templates and tools",
    resourcesLabel: "You will need:",
    helpFallbackTitle: "I need implementation help",
    helpTreeLabel: "Create this structure",
    helpActionsLabel: "Wire it up like this",
    helpCodeLabel: "Use this template or checklist",
    helpTestLabel: "Verification test:",
    stepsCount: (n) => `${n} steps`,
    stepsLead: "Work through these, one step at a time",
    doneLabel: "Done when:",
    exampleLabel: "Example of the expected precision · do not copy the content",
    notEnoughLabel: "This is not enough yet",
    evidenceLabel: "Work sample to the Git repository before ticking:",
    journalPrompt: "Write this before you tick the week as done",
    journalHeading: (w) => `Project journal · week ${w}`,
    journalRecordLabel: "Record these:",
    journalWorkLabel: "What did you do and how?",
    journalReasonLabel: "Why did you do it this way?",
    journalEvidenceLabel: "Exact location of the work sample",
    journalNextLabel: "Next small step",
    journalWorkHint: "Name the concrete files, solutions, issues and tests.",
    journalReasonHint: "The decision, the alternatives, the justification and what you learned.",
    journalEvidenceHint: (w) => `e.g. commit link, issue #12, test T05 or project-docs/evidence/week-${w}/shot.png`,
    journalNextHint: "What is the first thing you will continue from next time?",
    exportWeekButton: "Download this week only (.md)",
    exportJournalButton: "Download the whole project journal",
    journalComplete: "Main fields recorded",
    journalPartial: "In progress – fill in the 3 main fields",
    journalEmpty: "Not recorded yet",
    journalReminder: "Remember the 3 main journal fields",
    journalSummary: (done, total) => `${done} / ${total} weeks recorded`,
    weekFallback: (w) => `Week ${w}`,
    weekAria: (w, phase) => `Week ${w}${phase ? `, phase ${phase}` : ""}`,
    weekAriaHoliday: (w, name) => `Week ${w}, ${name}`,
    holidayFallback: "break",
    weekNavSmall: (w, phase) => (phase ? `${phase} · Week ${w}` : `Week ${w}`),
    progressCopy: (done, total) => `${done} / ${total} tasks done`,
    continueNext: "Continue from the next task",
    continueStart: "Start the project",
    continueDone: "All tasks done",
    planNotStarted: "Not started yet",
    planPartial: (done, total) => `In progress — ${done} / ${total} fields filled`,
    planDone: "Plan complete ✓",
    planEmptyValue: "_(not filled in yet)_",
    dateLocale: "en-GB",
    mdJournalTitle: (name) => `${name} – project journal`,
    mdJournalLead: (path) => `Save this file to \`${path}\` and commit it at the end of every week.`,
    mdWeekHeading: (w, title) => `## Week ${w} – ${title}`,
    mdWeekFeature: "This week's result:",
    mdWeekDeliverable: "This week's deliverable:",
    mdWork: "### What did I do and how?",
    mdReason: "### Why did I do it this way?",
    mdEvidence: "### Exact location of the work sample",
    mdNext: "### Next small step",
    mdNotRecorded: "Not recorded yet.",
    mdWeekFile: (w) => `project-journal-week-${w}.md`,
    mdWeekFileTitle: (name, w) => `# ${name} – week ${w}`,
    aiLogHeading: "## AI log",
    aiLogEmpty: "No entries.",
    aiLogFile: "AI-log.md",
    aiLogFileTitle: (name) => `# ${name} – AI log`,
    aiLogQuestion: "Task or question:",
    aiLogUsed: "Used, changed or rejected:",
    aiLogChecked: "Verification and takeaway:",
    aiLogReference: "Evidence reference:",
    aiLogNoReference: "no reference",
    aiLogPrivacyOk: "Privacy confirmation: I did not enter personal data, secrets or confidential material.",
    aiLogPrivacyMissing: "Privacy confirmation: not confirmed (old entry)",
    logCount: (n) => `${n} ${n === 1 ? "entry" : "entries"}`,
    logEmptyState: "No entries yet.",
    logReferencePrefix: "Evidence:",
    logRemove: "Remove",
    logRemoveAria: "Remove log entry",
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
    kansiKuvaus: "Present your own language: React, data-driven grammar tables and a public release",
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
      "Built with React + Vite. All grammar content lives in JSON files under `public/content/`",
      "and is fetched at runtime — the source of truth is the author's reference PDF.",
      "Published on GitHub Pages. The whole project is in English.",
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
      "## 5. Component library — my decision",
      "",
      `Chosen library: ${arvo("library")}`,
      "",
      `Why (own measurements from the comparison memo): ${arvo("libraryWhy")}`,
      "",
      "The number converter view is built from scratch without library components —",
      "at least one view must be my own work from the ground up.",
      "",
      "## 6. What I will NOT do (scope guard, in my own words)",
      "",
      arvo("scope"),
      "",
      "## 7. Data (pre-filled, binding)",
      "",
      "Content JSON is loaded at runtime with fetch() from `public/content/`. Loading and",
      "error states are implemented in week 39. Every content file is checked against the",
      "reference PDF — an invented form is a bug. A broken-network response is a test case.",
      "",
      "## 8. Quality bar (pre-filled)",
      "",
      "At least 12 planned test cases with the expected result written before the run,",
      "3 complete debugging chains, an accessibility pass with Lighthouse before/after pairs,",
      "a client review in week 44 and an external user test in week 48.",
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
      feature: "After this week an empty but real React app is live at your public GitHub Pages URL, the plan is drafted, and the P0 work is split into issues.",
      excerpt: "Right now it lives in a 58-page reference PDF that only I can navigate.",
      connection: "Everything starts from the brief: before the first component you agree what the site must do, set up the toolchain, and prove the publishing pipeline works while the app is still empty — when a deploy fails now, nothing of value is at risk.",
      deliverable: "Kickoff notes with a question list, a public repository with a privacy check done, a Vite + React app running locally and on your phone, the first deploy live, the technical plan drafted and the P0 backlog as issues.",
      why: "If open questions stay as silent assumptions, you build the wrong site. If the first deploy waits until November, you debug the pipeline at the worst possible moment. And because the repository is public from day one, the privacy check cannot wait.",
      done: "The public URL opens on a device that has never seen the project, and another person understands from the README and the plan what is being built and for whom.",
      record: "Write in the Week 36 entry: the open questions and their answers (decision / open / assumption), the repository link, the first commit hash, and a screenshot of the site on your phone.",
      skills: ["development environment", "version control", "requirements reading", "network sharing"],
      resources: [["Open the plan form", "#suunnitelma", false]],
      steps: [
        ["Read the brief like a contract.", "Underline what is required, then write every unclear point as a question. Bring the questions to a 15-minute kickoff talk with the supervisor and record each answer as a decision, an open item or an assumption."],
        ["Set up the toolchain.", "Install Node LTS, create the Vite + React app, and run it locally. Then run the dev server with --host and open it from your phone on the same Wi-Fi — note what you had to allow (firewall) and why that is safe on the school network."],
        ["Create the public repository.", "Do the privacy check first: no personal data, no school identifiers, agree your public author name. Add a README skeleton and .gitignore, commit, push. Enable 2FA on your GitHub account."],
        ["Publish the empty app.", "Set the Vite base path, deploy to GitHub Pages, and open the public URL on another device. This is the moment the pipeline exists."],
        ["Draft the plan and split the work.", "Fill in the plan form below — the pre-filled sections come from the brief; the decisions are yours. Mark the supervisor's open items open. Turn the P0 views into GitHub issues, each with a done-when condition and a size estimate, prioritised P0/P1/P2."]
      ],
      help: {
        title: "Create, run and publish the empty app — click by click",
        tree: "parlar-ioniano-site/\n├─ public/\n│  └─ content/        ← the language JSON lands here in week 37\n├─ src/\n│  ├─ App.jsx\n│  └─ main.jsx\n├─ tests/\n├─ project-docs/\n├─ index.html\n├─ package.json\n└─ vite.config.js",
        actions: [
          "Install Node LTS from nodejs.org. In a terminal, `node -v` must print a version number.",
          "Run: npm create vite@latest parlar-ioniano-site -- --template react · then cd parlar-ioniano-site · npm install · npm run dev. Open the printed local URL.",
          "Phone test: stop the server, run npm run dev -- --host, and open the Network URL on your phone (same Wi-Fi). If it does not load, your firewall asked a question — answer it and write down what you allowed.",
          "Create the GitHub repository (public), then follow GitHub's 'push an existing repository' commands shown on the new repo page.",
          "In vite.config.js add: base: \"/parlar-ioniano-site/\" (your repo name between the slashes).",
          "Run: npm install gh-pages --save-dev. In package.json scripts add \"deploy\": \"npm run build && gh-pages -d dist\". Run npm run deploy.",
          "In the repository settings, open Pages and set the source to the gh-pages branch. Wait a minute, then open the URL GitHub shows."
        ],
        code: "FIRST DEPLOY CHECKLIST\n[ ] node -v prints a version (LTS)\n[ ] npm run dev shows the Vite start page locally\n[ ] the same page opens on my phone (npm run dev -- --host)\n[ ] repository is public, privacy check done, 2FA on\n[ ] vite.config.js has base: \"/<repo-name>/\"\n[ ] npm run deploy finishes without errors\n[ ] the public URL works on a different device",
        test: "Open the public URL on a device that has never seen the project. The page renders — not a 404 and not a blank screen.",
        links: [
          ["Vite: Deploying a static site", "https://vitejs.dev/guide/static-deploy"],
          ["GitHub Docs: Pages", "https://docs.github.com/en/pages"]
        ]
      },
      example: "Kickoff notes: 8 questions, each marked decision/open/assumption. README: what, for whom, how to run. Commit \"Set up Vite app and Pages deploy\". Phone screenshot in project-docs/evidence/week-36/.",
      notEnough: "\"I created the project\" with no question list, no phone test and no working public URL does not show that you understood the requirements or proved the pipeline."
    },

    37: {
      type: "feature",
      feature: "The first real content is live: the Alphabet & Pronunciation view renders every letter, its IPA value and the digraphs — all from a JSON file, none of it hard-coded.",
      excerpt: "Every table on the site must be checked against my PDF — an invented form is a bug.",
      connection: "This week sets the pattern every later view follows: content lives in public/content/*.json, the view fetches it at runtime, and the PDF is the source of truth. Get this right once and weeks 39–46 reuse it.",
      deliverable: "letters.json typed from the PDF (pages 7, 9–11 and 41), a documented data-store decision in the plan, the Alphabet & Pronunciation view live with loading and error states stubbed, and the content validation script running in Node.",
      why: "If grammar content is hard-coded into components, every correction means editing code, and the data-store requirement has no work sample. If the data is not checked against the PDF, the site teaches a wrong language — and nobody else on Earth can spot it.",
      done: "The public URL shows the alphabet table rendered from letters.json, and node tools/validate-content.mjs exits with \"content OK\" — and fails when you deliberately break one line.",
      record: "Write in the Week 37 entry: why JSON + runtime fetch (the alternatives you rejected), which PDF pages you transcribed, what the validation script caught, and the commit links.",
      skills: ["data modelling", "fetch API", "JSON", "Node scripting"],
      steps: [
        ["Decide and document the data store.", "Content goes to public/content/*.json and is fetched at runtime. Write the decision and its justification into the plan (this is the data-store work sample) — what did you reject and why?"],
        ["Type letters.json from your PDF.", "Pages 7 and 9–11: every letter, IPA, the stressed/unstressed variants, diacritics and digraphs; page 41 notes on capitalisation. Type it yourself — no model knows these values, and every line you type is a line you can verify."],
        ["Build the view on fetch.", "The Alphabet view fetches letters.json, shows a loading state, an error state and then the letter grid. Keep the fetch in one place so week 39 can reuse it."],
        ["Run the validation script.", "Take the ready-made script from the help block, run it, then add ONE check of your own that is true for your data — and prove it works by breaking a line on purpose."],
        ["Verify against the source.", "Read the rendered table against the PDF, letter by letter. Fix, commit, deploy."]
      ],
      help: {
        title: "Content JSON, fetch with states, and the validation script",
        tree: "public/content/letters.json\n{\n  \"required\": [\"letter\", \"ipa\"],\n  \"items\": [\n    { \"letter\": \"A\", \"ipa\": \"[a]\", \"note\": \"\" },\n    { \"letter\": \"C\", \"ipa\": \"[tʃ] before i or e, otherwise [k]\", \"note\": \"\" }\n  ],\n  \"digraphs\": [ { \"letters\": \"ch\", \"ipa\": \"[x]\" } ]\n}\n\nsrc/views/Alphabet.jsx   ← fetch + loading/error/table\ntools/validate-content.mjs",
        actions: [
          "Create public/content/letters.json with the shape above and fill it from YOUR PDF (pages 7, 9–11, 41).",
          "In Alphabet.jsx: useEffect → fetch(import.meta.env.BASE_URL + \"content/letters.json\") → setState. Three renders: \"Loading…\", an error message with the file name, and the table.",
          "Copy the validation script from below into tools/validate-content.mjs and run: node tools/validate-content.mjs.",
          "Add your own check where the TODO is — for example: every ipa value contains \"[\". Break one line in the JSON, run again, watch it fail, fix it back."
        ],
        code: "// tools/validate-content.mjs — run: node tools/validate-content.mjs\nimport { readFileSync } from \"node:fs\";\nconst files = [\"letters\"]; // add a name here when you add a content file\nlet errors = 0;\nfor (const name of files) {\n  const data = JSON.parse(readFileSync(`public/content/${name}.json`, \"utf8\"));\n  if (!Array.isArray(data.items) || data.items.length === 0) {\n    console.error(`${name}: items missing or empty`); errors++;\n  }\n  for (const item of data.items || []) {\n    for (const key of data.required || []) {\n      if (!(key in item) || item[key] === \"\") {\n        console.error(`${name}: an item is missing '${key}'`); errors++;\n      }\n    }\n  }\n  // TODO (your own check): add one rule that is true for YOUR data,\n  // then prove it works by breaking one line on purpose.\n}\nconsole.log(errors ? `${errors} error(s)` : \"content OK\");\nprocess.exit(errors ? 1 : 0);",
        test: "Rename letters.json for a moment and reload the view: you must see your own error message, not a blank page. Rename it back.",
        links: [["MDN: Using the Fetch API", "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"]]
      },
      example: "letters.json with 22 letters + 12 digraphs, each with an IPA value from the PDF. Plan section 7 names the rejected alternative (\"hard-coded arrays in components\") and why. Validation script fails on a planted error, then passes.",
      notEnough: "An alphabet table typed straight into JSX renders the same — but leaves the data-store requirement without a work sample and makes every correction a code edit. AI-generated IPA values that were never checked against the PDF are bugs waiting to be found by the one person who knows the language."
    },

    38: {
      type: "feature",
      feature: "The app has a real shell: navigation, routing, a Home view that explains the language — and a component library chosen on evidence, installed and themed.",
      excerpt: "I want a website where a curious learner can actually find things.",
      connection: "Two content views exist by the end of this week, so the shell stops being theoretical: the navigation has real destinations, and the library decision is measured against your real app, not a toy.",
      deliverable: "A comparison memo of two component libraries plus the no-library option — with your own measurements (bundle size from your build, Lighthouse scores) — the chosen library installed and themed in the language's colours, React Router navigation, and the Home view with the classification, the credit and the terms of use.",
      why: "The component-library requirement is assessed on whether you explored possibilities AND limits — a memo without measurements is an opinion. And without routing now, every later view would be bolted on ad hoc.",
      done: "The comparison memo with your own measured numbers is in project-docs/, the navigation works on the public URL including direct links to sub-pages, and the Home view shows the credit and terms.",
      record: "Write in the Week 38 entry: the three options you compared, your measurements, the decision and its trade-offs, and who you discussed it with.",
      skills: ["component library", "React Router", "theming", "technical comparison"],
      steps: [
        ["Build the baseline measurement.", "Run npm run build on your current app and write down the bundle size. Run Lighthouse on the public URL and write down the scores. These are your 'before' numbers."],
        ["Compare three options.", "Two real component libraries (for example MUI and Chakra UI) and the no-library option. For each: what do its table, tabs and navigation components offer, what does it cost (bundle size after install), what does its documentation say about accessibility, and what are its limits for YOUR grammar tables?"],
        ["Talk it through, then decide.", "Present the memo to the supervisor (client's representative), record their view, then write the decision and justification into the plan. The decision is yours; the discussion is the work sample for solving problems together."],
        ["Install, configure, theme.", "Install the chosen library, configure the theme with the language's blue and gold, and rebuild the app shell: top navigation, routes for the P0 views (empty pages are fine), Home view content."],
        ["Measure again.", "Build, note the new bundle size and Lighthouse scores next to the before-numbers in the memo. Deploy."]
      ],
      help: {
        title: "The comparison memo and the app shell",
        tree: "src/\n├─ App.jsx            ← Router + layout\n├─ theme.js           ← library theme: #1e56a0 blue, gold accents\n├─ components/\n│  └─ NavBar.jsx\n└─ views/\n   ├─ Home.jsx\n   ├─ Alphabet.jsx     ← from week 37\n   └─ (empty stubs for the other P0 views)",
        actions: [
          "npm install react-router-dom. In App.jsx create routes: / (Home), /alphabet, /pronouns, /nouns, /numbers, /phrasebook.",
          "IMPORTANT on GitHub Pages: use HashRouter (or set the Router basename to import.meta.env.BASE_URL) so a page refresh does not 404.",
          "Install the chosen library and its icons package. Create theme.js and apply the theme provider around the app.",
          "Build NavBar with the library's components; mark the active route. Check it collapses sensibly on a phone.",
          "Home view: what Ionian is (from PDF pages 3 and 6), the author credit and terms of use, and links onward."
        ],
        code: "COMPARISON MEMO TEMPLATE (project-docs/library-comparison.md)\n# Component library comparison — <date>\n## Candidates: <lib A> / <lib B> / no library\nFor each candidate:\n- Table, Tabs, Nav components: what exists, what is missing for grammar tables?\n- Accessibility: what does the documentation promise (keyboard, ARIA)?\n- Cost: bundle size of MY build before → after (numbers!)\n- Limits: what would be hard or impossible?\n## My Lighthouse scores (public URL): before … / after …\n## Discussion with the supervisor (date, their view in one sentence)\n## Decision and why:",
        test: "Open a sub-page directly by URL on the public site and refresh — it must render, not 404. Then press Tab through the navigation: focus is visible and every link reachable.",
        links: [["MUI: Getting started", "https://mui.com/material-ui/getting-started/"], ["Chakra UI", "https://chakra-ui.com/docs/get-started"]]
      },
      example: "Memo: MUI adds 78 kB gzip to my build (from 45 kB to 123 kB), offers Table/Tabs/AppBar with documented keyboard support; limit: table density on phones. Decision: MUI, because the grammar tables are the core of this site. Lighthouse before 98/100 → after 94/100.",
      notEnough: "\"I chose MUI because it is popular\" — no measurements from your own build, no limits named, no discussion recorded. A model can write that sentence; it cannot run your build."
    },

    39: {
      type: "feature",
      feature: "The Pronouns view is live: eight pronoun tables (subject, object, possessive, reflexive, imperative, direct/indirect, prepositional, double object) in tabs, all rendered by ONE reusable table component from pronouns.json.",
      excerpt: "how the pronouns change when you talk to a friend or a stranger",
      connection: "This is the biggest single content block in the PDF (11 pages) and the payoff of week 37's pattern: one GrammarTable component, fed by data — and the loading and error states you stubbed become real, tested behaviour.",
      deliverable: "pronouns.json (eight datasets typed from PDF pages 13–18 and 22–26), a reusable GrammarTable component built on the library, tabbed navigation between pronoun types, working loading/error states, and horizontal scrolling for wide tables on a phone.",
      why: "If each table is its own component, you have eight copies to maintain and no reuse work sample. The fetch states are required this week because week 37's binding decision promised them — and the broken-network test in week 47 will target exactly this code.",
      done: "All eight pronoun tables render on the public URL from pronouns.json, switching tabs keeps the URL shareable, tables scroll horizontally on a phone instead of breaking the layout, and unplugging the JSON shows your error state.",
      record: "Write in the Week 39 entry: the shape of pronouns.json and why, how GrammarTable stays generic, which PDF pages you transcribed and how you verified them, plus commits and the phone screenshot.",
      skills: ["reusable components", "props design", "fetch states", "responsive tables"],
      steps: [
        ["Design the data shape first.", "One JSON file, eight datasets: each has an id, a title, column headers and rows. Sketch it on paper before typing — the shape must serve ALL eight tables, or GrammarTable cannot stay generic."],
        ["Type the data from the PDF.", "Pages 13–18 and 22–26. Type, do not generate: the clitic forms and the colloquial prepositional forms exist nowhere else. Add each dataset to the validation script's file list as you go."],
        ["Build GrammarTable once.", "Props: title, columns, rows, an optional note. Use the library's table components inside. If you feel like adding an if for one specific table, the data shape is wrong — fix the data, not the component."],
        ["Wire the tabs and the states.", "Tabs from the library, one per dataset. Loading and error states come from the shared fetch helper — test the error state by renaming the file for a moment."],
        ["Verify and deploy.", "Read each rendered table against its PDF page. Check on your phone that wide tables scroll. Commit per table set, deploy."]
      ],
      help: {
        title: "One table component, eight datasets",
        tree: "public/content/pronouns.json\n{\n  \"sets\": [\n    {\n      \"id\": \"subject\",\n      \"title\": \"Subject pronouns\",\n      \"columns\": [\"Ionian\", \"English\", \"Notes\"],\n      \"rows\": [[\"Jo\", \"I\", \"\"], [\"Tu\", \"You (informal)\", \"\"]]\n    },\n    { \"id\": \"object\", \"title\": \"Object pronouns\", \"columns\": [\"…\"], \"rows\": [] }\n  ]\n}\n\nsrc/components/GrammarTable.jsx\nsrc/views/Pronouns.jsx    ← tabs + fetch + <GrammarTable> per set",
        actions: [
          "Write pronouns.json with the sets array; every set uses the same three keys: id, title, columns, rows.",
          "GrammarTable.jsx receives { title, columns, rows, note } as props and renders the library's table — nothing pronoun-specific inside.",
          "Pronouns.jsx fetches the file once, then renders tabs from sets and the active set's GrammarTable.",
          "Wrap the table in a container with overflow-x auto so phones scroll the table, not the page.",
          "Add \"pronouns\" to the validation script's file list and run it."
        ],
        code: "GRAMMARTABLE CHECKLIST\n[ ] no pronoun-specific words inside the component\n[ ] works with 2 columns and with 7 columns\n[ ] header row uses <th> (screen readers need it)\n[ ] wide table scrolls horizontally on a phone\n[ ] loading state visible on slow network (DevTools throttling)\n[ ] error state shows the file name and a retry hint",
        test: "In DevTools, set network throttling to Slow 3G and reload: you must see the loading state. Then block the JSON request: you must see your error state. Both are screenshots for project-docs/evidence/week-39/.",
        links: [["React docs: Passing props", "https://react.dev/learn/passing-props-to-a-component"]]
      },
      example: "pronouns.json: 8 sets, 62 rows total, each row traceable to a PDF page. GrammarTable: 40 lines, zero content words. Commit series: \"Add subject/object pronoun data\", \"Add GrammarTable\", \"Wire pronoun tabs\".",
      notEnough: "Eight separate hand-written tables that happen to look right — no reusable component, no data file, no loading state. It renders, but three requirements walk away empty."
    },

    40: {
      type: "feature",
      feature: "The Nouns, Articles & Gender view is live: gender rules, plural endings, definite/indefinite articles and the articulated prepositions — sharing the same gender-by-number logic in one AgreementTable. Before the break: v0.5 is tagged and the week-44 review is booked, in writing.",
      excerpt: "which article goes with which gender",
      connection: "Articles make no sense without gender, and every table on PDF pages 8 and 19–21 is the same matrix: gender × number. One mental model, one component — and with four content views live, the site is worth showing to the client.",
      deliverable: "nouns.json and articles.json typed from the PDF, an AgreementTable variant (or GrammarTable reuse) for the gender×number matrices, example sentences from the PDF, the v0.5 git tag, and a written agreement of the review: client's and tester's names, date and place for week 44.",
      why: "This is the last working week before three weeks of break. An unbooked review quietly becomes no review — and the whole C phase is built on its feedback. The tag freezes what the reviewers will see.",
      done: "The four grammar views render correctly on the public URL, v0.5 is tagged, and the review agreement (names + date) is committed in project-docs/.",
      record: "Write in the Week 40 entry: how the gender×number shape drove the data design, what you left FOR the review to judge (do not polish it away), the tag, and the booked review details.",
      skills: ["data modelling", "component reuse", "release tagging"],
      steps: [
        ["Model the matrix.", "Gender × number is the shape of every table here. Design articles.json so the same component renders definite articles, indefinite articles and articulated prepositions without special cases."],
        ["Type and verify the data.", "PDF pages 8 and 19–21, including the elision rules and the neuter-to-feminine plural switch — these details are exactly what a generator would invent wrongly. Verify line by line."],
        ["Compose the view.", "Rules prose first (short), then the tables, then example sentences from the PDF with their translations."],
        ["Tag v0.5.", "git tag v0.5 && git push --tags. Deploy. This is what the reviewers will see — resist polishing it during the break."],
        ["Book the review in writing.", "Agree with the client (supervisor as representative) and the external tester: date, time, place in week 44, and what they will look at. Commit the note to project-docs/review-agreement.md. Send them the public URL."]
      ],
      help: {
        title: "The gender×number data shape and the review booking",
        tree: "public/content/articles.json\n{\n  \"matrices\": [\n    {\n      \"id\": \"definite\",\n      \"title\": \"Definite articles\",\n      \"columns\": [\"\", \"Masculine\", \"Feminine\", \"Neuter\"],\n      \"rows\": [\n        [\"Singular\", \"le / lo / l'\", \"la / l'\", \"lu\"],\n        [\"Plural\", \"li / l'\", \"le / l'\", \"→ feminine plural\"]\n      ],\n      \"note\": \"Neuter merges with the feminine form in the plural.\"\n    }\n  ]\n}",
        actions: [
          "Reuse GrammarTable for every matrix — if it needs a special case, adjust the data, not the component.",
          "Keep each rule note short and attach it to its matrix in the JSON, so the note travels with the data.",
          "Add \"nouns\" and \"articles\" to the validation script and run it.",
          "Write project-docs/review-agreement.md: who (role, not personal details beyond a first name), when, where, what they will test. Commit it."
        ],
        code: "REVIEW AGREEMENT TEMPLATE (project-docs/review-agreement.md)\n# v0.5 review agreement\n- Date and place: <week 44, day, time>\n- Client (language creator's representative): <name/role>\n- External tester (has never seen Ionian): <first name / role>\n- They will look at: finding the alphabet, reading a pronoun table,\n  understanding what the language is — WITHOUT the developer explaining.\n- v0.5 tag: <commit hash> · public URL: <link>",
        test: "Open the v0.5 tag on GitHub and check that the deployed site matches it. The review agreement file is in the repository — not only in chat.",
        links: [["Git basics: Tagging", "https://git-scm.com/book/en/v2/Git-Basics-Tagging"]]
      },
      example: "articles.json: 5 matrices with the elision variants as their own columns, notes attached per matrix. Review agreement names the tester's role and the three things they will try. Tag v0.5 pushed.",
      notEnough: "Four views live but the review \"agreed on some day after the break\" with no names and no date — that is how reviews silently vanish, and phase C loses its foundation."
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
          "Chain 1/3: pick a finding that reproduces reliably. Follow the template below — every arrow is a line you write."
        ],
        code: "DEBUGGING CHAIN TEMPLATE (project-docs/debugging-chains.md)\n## Chain 1 — <short name> (week 44)\n- Observation (tester's words, verbatim): \"…\"\n- Reproduction: steps 1-2-3 that make it happen every time\n- Cause: the actual reason in the code/data (not a guess)\n- Fix: commit <hash> — what changed and why\n- Re-test: same steps, expected vs observed result\n- Regression test: T<nn> added to the matrix so it cannot return silently",
        test: "Give the review log to someone who was not present: they can tell which lines are the tester's words and which are your interpretation, without asking you.",
        links: []
      },
      example: "Log: \"Tester (classmate, 27 Oct): 'Where do I click to hear it?' — did not find pronunciation, expected audio.\" Interpretation: IPA is not self-explanatory; decision: add a 'how to read IPA' note (issue #23), audio stays OUT (client). Chain 1: pronoun tabs lose state on refresh → cause: tab index not in URL → fix commit a1b2c3 → regression test T09.",
      notEnough: "\"The feedback was mostly positive and I fixed some small things\" — no verbatim findings, no decisions, no chain. Nothing here proves anyone else ever touched the site."
    },

    45: {
      type: "feature",
      feature: "The Numbers & Comparison view is live with a number converter built from scratch: type 319, get \"Trecentodecenove\" — pure functions, unit-tested against the PDF before the code ran.",
      excerpt: "how to count to ten thousand",
      connection: "Every other view renders data; this one computes. The converter is the one view built without library components — your own logic, your own tests — and the review feedback from week 44 lands in the same deploy.",
      deliverable: "numbers.json (cardinals, ordinals, the paragoge/apocope rules as data where possible), src/lib/numbers.js with pure functions, a Vitest suite where the expected values were written from the PDF before running, the converter UI built from scratch, the comparison section, and the week-44 feedback change deployed and linked to its finding. Debugging chain 2/3 starts from any real bug found here or in week 46.",
      why: "This is the demonstration's centrepiece: structured programming, testing discipline and the one no-library view all live here. Writing the expected values BEFORE the run is what turns clicking into testing — and no model can produce them, because the rules are yours.",
      done: "On the public URL, at least 0–999 999 converts correctly including the separation and clipping rules, npx vitest run is green with ≥6 converter tests whose expected values cite PDF pages, and the feedback change is live.",
      record: "Write in the Week 45 entry: the function breakdown, the two hardest rules and how you encoded them, the test-first evidence (commit order shows tests before green), and the feedback-change link.",
      skills: ["pure functions", "unit testing", "algorithm design", "test-first"],
      steps: [
        ["Read the rules like a spec.", "PDF pages 42–45: the -milla forms, the dash rule for 120–190/220–290/…, vowel clipping (Cinquantoto), and the paragoge/apocope list. Write each rule as one line in your own words — this list becomes your test plan."],
        ["Write the tests first.", "Take the test template from the help block. For each rule, write 1–2 tests with the expected string FROM THE PDF, cite the page in the test name. Run them: all red. Commit — this commit is the proof of test-first."],
        ["Implement in small functions.", "units → tens → hundreds → thousands, each its own function, composed at the top. When a test goes green, commit. When one stays red, check the PDF before the code — the data can be wrong too."],
        ["Build the UI from scratch.", "Plain input, plain output, your own CSS. No library components in this view — this is the built-by-hand work sample. Handle junk input kindly (empty, letters, negative, too big)."],
        ["Ship the feedback change.", "Implement the week-44 change in the same branch, link the commit to the finding, merge to main, deploy."]
      ],
      help: {
        title: "Function signatures and the test file to start from",
        tree: "src/lib/numbers.js        ← pure functions, no React imports\nsrc/views/Numbers.jsx     ← the from-scratch UI + comparison content\ntests/numbers.test.js     ← Vitest, expected values from the PDF\npublic/content/numbers.json",
        actions: [
          "npm install -D vitest · add \"test\": \"vitest run\" to package.json scripts.",
          "Copy the test file below. Fill the expected strings from YOUR PDF pages 42–45 — one test per rule on your rule list.",
          "Implement numberToIonian step by step: 0–20 lookup → tens with clipping → hundreds → mille/milla → the dash rule last.",
          "The UI: <input> + result + a short 'how it works' note. Your own styles; check focus order and labels (the week-47 audit will look here).",
          "Run npx vitest run and paste the summary into the journal."
        ],
        code: "// tests/numbers.test.js — expected values from the PDF BEFORE implementing\nimport { describe, test, expect } from \"vitest\";\nimport { numberToIonian } from \"../src/lib/numbers.js\";\n\ndescribe(\"cardinals (PDF pp. 42–45)\", () => {\n  test(\"T01 p42: 8\", () => expect(numberToIonian(8)).toBe(\"<from PDF>\"));\n  test(\"T02 p43: 58 vowel clipping\", () => expect(numberToIonian(58)).toBe(\"<from PDF>\"));\n  test(\"T03 p43: 319 dash rule\", () => expect(numberToIonian(319)).toBe(\"<from PDF>\"));\n  test(\"T04 p43: 320 no dash\", () => expect(numberToIonian(320)).toBe(\"<from PDF>\"));\n  test(\"T05 p44: 19000 Nove→No\", () => expect(numberToIonian(19000)).toBe(\"<from PDF>\"));\n  test(\"T06 edge: 0\", () => expect(numberToIonian(0)).toBe(\"<from PDF>\"));\n});\n// Add error cases: negative, NaN, > max — decide and document the behaviour.",
        test: "npx vitest run: green. Then break one rule in the code on purpose, run again: the right test goes red and names the PDF page. Undo.",
        links: [["Vitest: Getting started", "https://vitest.dev/guide/"]]
      },
      example: "Rule list: 9 rules, each one line. tests/numbers.test.js: 11 tests, names cite PDF pages, first commit all-red, third commit all-green. numbers.js: 5 functions, longest 18 lines. UI passes Tab-order check.",
      notEnough: "A converter that happens to work for 1–100, with tests written afterwards to match the code's output instead of the PDF — that tests nothing. If the expected values did not exist before the run, it is not a test, it is a screenshot."
    },

    46: {
      type: "feature",
      feature: "The Phrasebook & Chapter 1 view is live: the café dialogues side by side with an Ionian/English toggle, and a search that filters phrases and vocabulary across the content files.",
      excerpt: "a phrasebook where a beginner can learn my café dialogue",
      connection: "This is the view the external tester will actually use in week 48 — a beginner's path into the language. The search closes the feature list; from here on, the project polishes and proves.",
      deliverable: "phrases.json (basic vocabulary p. 12, greetings and dialogues pp. 51–56), the dialogue viewer with the toggle, a search box that filters across phrases with XSS-safe rendering, the remaining test matrix planned (including the broken-network case), the LICENSE/CREDITS files per the client's decision, and debugging chain 2/3 completed if it started in week 45.",
      why: "Search is where user input meets your rendering for the first time — the security requirement stops being abstract. And the PDF's own pages 57–58 are under construction: the site must say 'coming later' rather than invent content, exactly as the brief demands.",
      done: "A beginner can find 'thank you' by typing 'thank' on the public URL, the dialogues toggle between languages, searching for <img src=x onerror=alert(1)> renders as harmless text, and the full test matrix (≥12 cases) exists with expected results filled in.",
      record: "Write in the Week 46 entry: the search implementation and why it is XSS-safe in React, the 'coming later' decision for pp. 57–58, the LICENSE/CREDITS commits, and the state of chain 2/3.",
      skills: ["search & filtering", "controlled inputs", "XSS awareness", "test planning"],
      steps: [
        ["Type the phrase data.", "PDF page 12 and pages 51–56: phrases with translations and IPA, dialogues as ordered turns with speaker names. Mark pages 57–58 as 'coming later' in the data — one honest placeholder object."],
        ["Build the dialogue viewer.", "Turns rendered in order, one toggle to switch Ionian/English (or show both). Keep it readable on a phone — this is the view a learner holds in one hand in a café."],
        ["Build the search.", "A controlled input filtering the loaded phrase data in memory. Show the match count. React escapes output by default — write into the journal WHY that protects you, and never use dangerouslySetInnerHTML."],
        ["Plan the rest of the matrix.", "Fill the test matrix to ≥12: thirds for normal use / limits / error cases, including the broken-network fetch case and the converter's junk inputs. Expected result column first."],
        ["Commit LICENSE and CREDITS.", "The client's license decision (from the plan's open items) becomes the LICENSE file; CREDITS lists the fonts, the library and the language material's own terms."]
      ],
      help: {
        title: "Filtering with a controlled input",
        tree: "public/content/phrases.json\n{\n  \"phrases\": [\n    { \"ionian\": \"Benfacì\", \"english\": \"Thank you\", \"ipa\": \"[ben.faˈtʃi]\", \"chapter\": 1 }\n  ],\n  \"dialogues\": [\n    {\n      \"id\": \"cafe\",\n      \"title\": \"Doing business in a café\",\n      \"turns\": [ { \"speaker\": \"Antonio\", \"ionian\": \"…\", \"english\": \"…\" } ]\n    }\n  ],\n  \"comingLater\": [\"Polite phrases\", \"Conditional requests\"]\n}",
        actions: [
          "Search state: const [q, setQ] = useState(\"\"). Filter: phrases.filter(p => (p.ionian + \" \" + p.english).toLowerCase().includes(q.toLowerCase())).",
          "Render the results with normal JSX interpolation — React escapes it. Test with the <img onerror> string to prove it.",
          "The toggle is one boolean state; render ionian, english or both from it.",
          "Add \"phrases\" to the validation script; run it."
        ],
        code: "TEST MATRIX SKELETON (project-docs/test-matrix.md)\n| T#  | Start state | Action | Expected (write FIRST) | Observed | Pass |\n|-----|-------------|--------|------------------------|----------|------|\n| T01 | Numbers view | type 319 | Trecentodecenove-style form per PDF | | |\n| T07 | Phrasebook | search \"thank\" | Benfacì row visible, count = 1 | | |\n| T09 | any view | block content JSON (DevTools) | error state with file name | | |\n| T10 | Phrasebook | search \"<img src=x onerror=alert(1)>\" | rendered as text, no dialog | | |\nThirds: T01–T04 normal · T05–T08 limits · T09–T12 errors",
        test: "Type the attack string into the search on the public URL: it must appear as plain text. Screenshot to project-docs/evidence/week-46/.",
        links: [["React docs: Controlled inputs", "https://react.dev/reference/react-dom/components/input"]]
      },
      example: "phrases.json: 38 phrases + 3 dialogues, every line traceable to a PDF page; comingLater names the two under-construction topics. Search shows '3 matches'. LICENSE committed with the client's choice, CREDITS lists Inter font, MUI and the Ionian material's terms.",
      notEnough: "A search that only matches exact full words, no XSS test, and dialogue text copy-pasted with invented 'improvements' the PDF never wrote. The tester in week 48 will type one lowercase word — and the demonstration watches what happens."
    },

    47: {
      type: "laatu",
      feature: "The site passes a real quality bar: the full test matrix is run with results recorded, all three debugging chains are complete, accessibility is verified with before/after Lighthouse pairs, and the code has been refactored while every test stays green.",
      excerpt: "Accuracy matters more than volume.",
      connection: "Everything exists; now you prove it holds. The tests you planned in week 46 get their observed-result column, the chains get their third member, and the refactor shows you can improve code without breaking it — because the tests say so.",
      deliverable: "The test matrix executed (≥12 cases, expected vs observed, thirds covered), debugging chain 3/3 plus chains 1–2 compiled into demonstration shape, Lighthouse before/after pairs for accessibility and performance, keyboard navigation and contrast fixes, an npm audit run with the outcome recorded, a no-secrets check, and a refactor commit series with green tests in between.",
      why: "A claim without a recorded run is an opinion. The demonstration assesses testing as a discipline: expected first, observed second, failures documented — and the a11y pass is what makes the site usable for learners who never touch a mouse.",
      done: "The matrix has every row filled with observed results and dates, three complete chains are in debugging-chains.md, the after-Lighthouse accessibility score is recorded with the before-pair, and npx vitest run plus node tools/validate-content.mjs are both green on main.",
      record: "Write in the Week 47 entry: the failures the matrix caught (there should be some — a matrix that catches nothing was too soft), the chain 3/3 links, the Lighthouse pairs, and what the refactor changed structurally.",
      skills: ["test execution", "accessibility", "refactoring", "security audit"],
      steps: [
        ["Run the matrix for real.", "Execute every test case against the public URL, fill the observed column with dates. A failing row is a gift: it becomes chain material and proof your matrix bites."],
        ["Complete the chains.", "Chain 3/3 from a real matrix failure or review remnant. Compile chains 1–3 into debugging-chains.md in identical format — observation to regression test, no gaps."],
        ["Audit accessibility with pairs.", "Lighthouse on every view: record the before scores. Fix keyboard order, focus visibility, contrast, alt texts, labels and heading levels. Record the after scores next to the before ones — the pair is the work sample."],
        ["Audit security.", "npm audit — record what it found and what you did. Grep the repository for secrets (there must be none to find). Confirm the search's XSS behaviour once more on the deployed site."],
        ["Refactor with a safety net.", "Rename the unclear, extract the duplicated, delete the dead — in small commits, running the tests between each. If a test goes red, the refactor stops until it is green."]
      ],
      help: {
        title: "The accessibility audit, step by step",
        tree: "project-docs/\n├─ test-matrix.md          ← observed column filled, dated\n├─ debugging-chains.md     ← 3 complete chains\n├─ lighthouse/\n│  ├─ before-<view>.png\n│  └─ after-<view>.png\n└─ security-audit.md       ← npm audit outcome + no-secrets check",
        actions: [
          "Lighthouse: Chrome DevTools → Lighthouse tab → Accessibility + Performance, on the PUBLIC URL, per view. Screenshot the scores (before).",
          "Keyboard pass: put the mouse away. Tab through every view — can you reach the tabs, the converter, the search? Is focus always visible?",
          "Contrast: check the gold-on-white texts especially; the library theme may need a darker shade.",
          "Alt and labels: every image has alt (or empty alt for decoration), every input has a label the screen reader announces.",
          "Fix, deploy, re-run Lighthouse (after). The pair goes to project-docs/lighthouse/."
        ],
        code: "QUALITY WEEK CHECKLIST\n[ ] all matrix rows executed, observed + date filled\n[ ] at least one failure found and documented (or the matrix is too soft — say so)\n[ ] chains 1–3 complete, identical format\n[ ] Lighthouse before/after pair per view (a11y + perf)\n[ ] keyboard-only walkthrough passes on every view\n[ ] npm audit run, outcome + action recorded\n[ ] no secrets in the repo (search for 'key', 'token', 'password')\n[ ] refactor commits small, tests green in between",
        test: "Hand your phone to someone with the site open and the keyboard connected — no, better: do the whole converter flow yourself with the keyboard only, screen reader talking. Where you wince, there is a finding.",
        links: [["web.dev: Accessibility", "https://web.dev/learn/accessibility/"]]
      },
      example: "Matrix: 13/13 executed, T09 failed first (error state missing on Pronouns after refactor) → chain 3. Lighthouse a11y: Home 87→100, Numbers 82→98. npm audit: 1 moderate in a dev dependency, updated. Refactor: fetch helper extracted, 3 views simplified, tests green throughout.",
      notEnough: "\"I tested everything and it works\" with an empty observed column, chains that stop at 'fixed it', and a single Lighthouse run with no before-pair. None of that survives one question in the demonstration."
    },

    48: {
      type: "julkaisu",
      feature: "Version 1.0 is released: content frozen, tested in a clean environment, verified by an external user who learned a café dialogue from the site alone — and the repository documentation lets a stranger run the project without asking you anything.",
      excerpt: "a README good enough that another person can get the project running without asking me anything.",
      connection: "The release candidate meets its real test: not your machine, not your explanations — a clean environment and a person who owes you nothing. What they stumble on, you fix; then it is v1.0.",
      deliverable: "A content-frozen release candidate, a clean-environment run (different machine or fresh clone, README steps only), the external user test with the tester's words recorded verbatim and separated from your interpretation, every hesitation turned into an instruction fix, the deployment-path description built from your own artefacts (t11), the finished README and user documentation, and the v1.0 tag + GitHub release.",
      why: "The brief's final requirement is exactly this: someone else, unaided. An instruction verified only by its author is unverified — and the demonstration's release requirement needs the clean-environment proof, not a promise.",
      done: "The tester reached and read the café dialogue using only the site and your written instructions — no spoken help; the clean clone builds and runs with README steps only; v1.0 is tagged, released and live at the public URL.",
      record: "Write in the Week 48 entry: the clean-environment result, the tester's words (verbatim, separated), the instruction fixes their hesitations produced, and the v1.0 release link.",
      skills: ["release management", "user testing", "technical writing", "clean-environment verification"],
      steps: [
        ["Freeze and branch.", "Declare the content frozen: only blocking fixes from here. Tag the release candidate."],
        ["Test in a clean environment.", "Fresh clone on a machine (or account) that has never run the project. Follow the README literally, fixing the README — not your memory — wherever it fails."],
        ["Run the user test.", "A new tester (not the week-44 one, if possible) gets one written task: 'Using this site, learn to order in the café dialogue.' You watch in silence. Record their words verbatim; every hesitation becomes an instruction or UI fix. Note their role and the date — same discipline as week 44."],
        ["Describe the deployment path.", "One page from your own artefacts: the week-36 phone screenshot (LAN), the Pages URL, the HTTPS padlock — localhost → local network → GitHub Pages/CDN. This is the network work sample, in your own images."],
        ["Release v1.0.", "Apply the fixes, tag v1.0, write the GitHub release notes (what is in, what is 'coming later'), deploy, and check the credit and terms are visible one last time."]
      ],
      help: {
        title: "The user test script and the release checklist",
        tree: "project-docs/\n├─ user-test-2026-w48.md   ← tester's words / your interpretation\n├─ deployment-path.md      ← t11: your own screenshots\n└─ release-notes-v1.0.md",
        actions: [
          "Write the tester's task card BEFORE the session: one goal, zero hints. If the card needs explaining, the card failed — fix it first.",
          "Clean environment: git clone into a new folder, follow README top to bottom. Every command you type that is not in the README goes INTO the README.",
          "During the test: silence. Note the exact moment and place of every hesitation.",
          "v1.0: git tag v1.0 && git push --tags, then a GitHub release with the notes. Verify the public URL serves the tagged build."
        ],
        code: "RELEASE CHECKLIST v1.0\n[ ] content frozen — only blocking fixes after RC\n[ ] clean clone runs with README steps only\n[ ] user test done: words verbatim, interpretation separate, role + date\n[ ] every hesitation → an instruction/UI fix, committed\n[ ] deployment-path.md uses MY screenshots (LAN, Pages URL, HTTPS)\n[ ] LICENSE + CREDITS + terms of use visible\n[ ] v1.0 tagged, release notes published, site live",
        test: "Ask the tester afterwards: 'Could you have done it without me in the room?' If the answer needs a footnote, there is one more fix to make.",
        links: [["GitHub Docs: About releases", "https://docs.github.com/en/repositories/releasing-projects-on-github"]]
      },
      example: "Clean clone: failed at step 2 (Node version unstated) → README now names the LTS. Tester (role: student from another group, 26 Nov): \"Which one is the waiter?\" → speaker labels made bolder, commit d4e5f6. v1.0 released with notes listing the two 'coming later' topics.",
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
        ["Build the demo.", "8–10 minutes: the site working (converter + phrasebook), one technical decision you defend (the data model or the library choice), one debugging chain end to end, the Git history, and your verified AI use. Rehearse with a timer, twice."],
        ["Write the self-assessment.", "Honest, requirement-anchored: where is your evidence thinnest, where strongest? The assessor respects accuracy about weakness more than confidence about everything."],
        ["Hand over.", "Friday 4 Dec: public URL, repository, journal, matrix links, demo. Done."]
      ],
      help: {
        title: "The demo structure that fits ten minutes",
        tree: "DEMO 8–10 min\n1. The site live (2 min): converter 319, phrasebook search, a pronoun table\n2. One decision defended (2 min): runtime-fetch data model — why, what it cost\n3. One debugging chain (2 min): observation → regression test, on screen\n4. Git history (1 min): tags v0.5 → v1.0, the feedback-change commit\n5. AI use (1 min): one log entry — asked, verified, tested, learned\n6. Buffer + questions (2 min)",
        actions: [
          "Rehearse against the clock twice; cut until section 6 exists.",
          "Open every tab and file you will show BEFORE the demo starts.",
          "Have the matrix open as your own map — when asked about a requirement, you navigate in one click."
        ],
        code: "HANDOVER CHECKLIST\n[ ] all 44 matrix rows link to an exact location\n[ ] project journal: 11 weeks, 3 main fields each\n[ ] AI log committed, every entry verified\n[ ] demo rehearsed ≤10 min, twice\n[ ] self-assessment written and committed\n[ ] public URL + repo link delivered to the assessor",
        test: "Pick three random matrix rows and reach each work sample in under 15 seconds. If any takes longer, the link is not exact enough.",
        links: []
      },
      example: "Matrix row k2 → project-docs/library-comparison.md (commit 9f8e7d); row p2 → debugging-chains.md#chain-2; row t10 → evidence/week-36/phone.png. Demo rehearsal: 9 min 20 s.",
      notEnough: "A great v1.0 with a matrix that says 'see repository' on every row, and a demo attempted for the first time in front of the assessor. The work deserved better logistics."
    }
  },

  /* ---- teacher material (Finnish — assessment documents follow ePerusteet) ---- */
  opettaja: {
    jakso: "Viikot 36–49 · ei projektityötä viikoilla 41–43 (syysloma vko 42)",
    deadline: "pe 4.12.2026",
    kansiKuvaus: "Oman keksityn kielen esittelysivusto: React, datavetoiset kielioppitaulukot ja julkinen julkaisu",
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
        "Näyttö suoritetaan oppilaitoksen webprojektina viikoilla 36–49/2026 (11 työviikkoa; viikoilla 41–43 ei projektityötä). Opiskelija suunnittelee, toteuttaa ja julkaisee React-sivuston, joka esittelee hänen itse luomansa kielen (Ionian / Lingua Ioniana). Tekniikka: React + Vite (JavaScript), valittu komponenttikirjasto, sisältö JSON-datana ajonaikaisella fetch-latauksella, työkaluketju ja yksikkötestit Nodella (Vitest), julkaisu GitHub Pagesiin. Koko projekti ja tuotos ovat englanniksi; arviointiasiakirjat suomeksi.",
        "Näyttö kattaa neljä tutkinnon osaa perusteesta OPH-6216-2025 (perusteId 9816282): Tieto- ja viestintätekniikan perustehtävät (12 vaatimusta), Ohjelmointi (11), Ohjelmistokehittäjänä toimiminen (14) ja Ohjelmiston toteuttaminen ohjelmistokomponenttikirjastolla (7) — yhteensä 44 vaatimusta. Vaatimusten työnäytteet syntyvät viikoittain ja linkitetään täsmällisesti viikolla 49.",
        "Roolit on kirjattu auki suunnitelmaan: opiskelija toimii sekä kehittäjänä että asiakkaana kielen luojan roolissa; ohjaaja toimii tilaajan edustajana katselmoinneissa; ulkopuolinen testaaja on eri henkilö, joka ei tunne kieltä. Arvioitava osaaminen on webkehitys — kieli itsessään on opiskelijan omaa lähdeaineistoa, jonka oikeellisuuden vain hän voi todentaa."
      ],
      p0: "Pakollinen perusversio (P0): julkaistu sivusto, jossa Home, Alphabet & Pronunciation, Pronouns, Nouns & Articles, Numbers + itse rakennettu numeromuunnin ja Phrasebook; kaikki sisältö JSON-datasta; vähintään 12 testitapausta odotettuine tuloksineen ennen ajoa; 3 virheenkorjausketjua; katselmointi ja käyttäjätesti; v1.0 GitHub Pagesissa.",
      roolit: [
        ["Opiskelija", "Suunnittelee, toteuttaa, testaa ja julkaisee sivuston; kirjoittaa projektipäiväkirjan ja AI-lokin; toimii asiakkaana kielen luojan roolissa."],
        ["Ohjaaja / opettaja", "Tilaajan edustaja katselmoinneissa; vastaa avoimista asioista (lisenssi, oppilaitoksen tietoturvalinja); tarkistuspisteiden laadunvalvonta; arviointi."],
        ["Ulkopuolinen testaaja", "Ei tunne kieltä. Testaa v0.5:n viikolla 44 ja tekee käyttäjätestin viikolla 48 pelkän kirjallisen ohjeen varassa; havainnot kirjataan hänen omilla sanoillaan."]
      ],
      tarkistuspisteet: [
        [36, "Toimeksianto ja ympäristö", "Kysymyslista vastauksineen, julkinen repo tietosuojatarkistuksineen, ensideploy julkisessa osoitteessa, suunnitelmaluonnos ja P0-backlog"],
        [38, "Vertailumuistio", "Kaksi kirjastoa + ei kirjastoa -vaihtoehto, omat mittaukset (bundle, Lighthouse), perusteltu päätös ja keskustelu kirjattu"],
        [40, "v0.5 ennen lomaa", "Neljä sisältönäkymää tuotannossa, v0.5-tagi, sitova sopimus katselmoinnista (nimet + päivä) repositoryssa"],
        [44, "Katselmointi", "Testaajan sanat erillään tulkinnasta, päätös jokaisesta havainnosta, backlog päivitetty, ketju 1/3 valmis, t12:n avoin asia käsitelty"],
        [47, "Testit ja laatu", "Testimatriisi ajettu (≥12), ketjut 1–3 valmiit, Lighthouse ennen/jälkeen -parit, npm audit ja salaisuustarkistus"],
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
        t9: ["36", "Kehitysympäristön pystytys: käyttöjärjestelmä, Node, VS Code, Git"],
        t10: ["36", "Dev-palvelimen jako paikallisverkkoon ja testaus puhelimella; palomuuri- ja tietoturvahuomiot kirjattu"],
        t11: ["48", "Julkaisupolun kuvaus omista artefakteista: localhost → LAN → Pages/CDN/HTTPS"],
        t12: ["36, 44, 47", "Ympäristön suojaus (päivitykset, 2FA), tarkistuspiste ja riippuvuusaudit; oppilaitoksen linjaa vaativa osa on avoin asia"],
        p1: ["36", "Vite + VS Code + ESLint käytössä; ensimmäinen build ja deploy"],
        p2: ["44–47", "Kolme virheenkorjausketjua havainnosta regressiotestiin"],
        p3: ["45, 47", "Muuntimen yksikkötestit ja testimatriisin ajo tuloksineen"],
        p4: ["45", "Muuntimen puhtaat funktiot ja moduulijako (numbers.js)"],
        p5: ["47", "Refaktorointisarja testit vihreinä; nimeäminen ja ESLint"],
        p6: ["38–40", "Näkymät sivukartasta: Home, Alphabet, Pronouns, Nouns & Articles"],
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
        s8: ["37", "Tietovarastopäätös: JSON + ajonaikainen fetch, hylätyt vaihtoehdot perusteltu"],
        s9: ["37, 39", "Fetch-lataus sekä lataus- ja virhetilat toteutettuna ja testattuna"],
        s10: ["39, 46", "Fetch API ja datan muunnokset: ryhmittely, suodatus, haku"],
        s11: ["46, 47", "XSS-turvallinen renderöinti todistettuna, riippuvuusaudit, ei salaisuuksia"],
        s12: ["36–49", "Commit-historia, tagit (v0.5, v1.0), branchit ja PR:t"],
        s13: ["45, 46", "Feature-branch liitetty olemassa olevaan versioon (palautemuutos)"],
        s14: ["36, 48", "Ensideploy ja v1.0-julkaisu GitHub Pagesiin"],
        k1: ["36, 38", "Kehittämisympäristön käyttöönotto ja kirjaston konfigurointi teemoineen"],
        k2: ["38", "Vertailumuistio: mahdollisuudet ja rajoitteet omin mittauksin"],
        k3: ["39, 40", "Taulukot, välilehdet ja navigaatio kirjaston komponenteilla"],
        k4: ["38", "Ulkoiset komponentit npm:stä: kirjasto, ikonit, fontit"],
        k5: ["39–46", "Näkymien suunnittelu, toteutus ja testaus kirjastoa käyttäen"],
        k6: ["48", "Julkaisu asiakkaan ympäristöön (GitHub Pages, julkinen osoite)"],
        k7: ["48", "README ja käyttäjädokumentaatio sovitussa muodossa"]
      },
      dokumentaatio: {
        kayttajalle: "README ja sivuston ohjeet kirjoitetaan englanniksi kielen oppijalle ja projektia ajavalle: mitä sivusto on, miten projekti ajetaan, mistä sisältö tulee.",
        arviointiin: "Projektipäiväkirja, testimatriisi, virheenkorjausketjut, muistiot, AI-loki ja näyttömatriisin linkit project-docs-kansiossa.",
        vaatimus: "Ulkopuolinen henkilö saa projektin käyntiin pelkän README:n avulla ja oppii sivustolta kahviladialogin ilman suullista apua. Jokainen epäröintikohta kirjataan ohjeen korjauslistalle."
      },
      tekoaly: [
        "Tekoäly on sallittu apuväline React-koodissa, virheilmoituksissa ja testi-ideoissa: ymmärrä → tarkista → testaa → kirjaa. Jokainen merkittävä käyttö kirjataan AI-lokiin aineistoviitteineen ja tietosuojavahvistuksineen.",
        "Sisältö on tekoälyn ulottumattomissa: mikään malli ei osaa opiskelijan itse luomaa kieltä. Jokainen kielioppitaulukko, fraasi ja testin odotusarvo tulee opiskelijan omasta PDF:stä ja tarkistetaan sitä vasten — keksitty muoto on bugi. Itse tehtävä ydin: sivuston rakenne, saavutettavuusratkaisut, muunninlogiikka ja testien odotusarvot."
      ],
      palautuspaketti: [
        ["Julkaistu tuotos", "GitHub Pages -osoite ja v1.0-release julkaisumuistiinpanoineen"],
        ["Repository", "src/, public/content/ (JSON-data), tests/, tools/ ja project-docs/"],
        ["Projektipäiväkirja", "project-docs/project-journal.md — 11 viikkoa, kolme pääkenttää jokaisesta"],
        ["Testiaineisto", "Testimatriisi tuloksineen, 3 virheenkorjausketjua, Lighthouse-parit, npm audit -kirjaus"],
        ["AI-loki", "project-docs/AI-log.md aineistoviitteineen"],
        ["Näyttömatriisi", "44 vaatimuksen täsmälinkit työnäytteisiin"]
      ],
      huomiot: [
        ["Perusteen versio", "OPH-6216-2025 (perusteId 9816282, voimassa 1.8.2026 alkaen). Jos ryhmä on aloittanut vanhalla perusteella (OPH-4948-2021), siirtymäsääntö on ohjaajan päätös — kirjattu avoimeksi asiaksi."],
        ["t12 on osittainen", "Laitteiden suojauksen näyttö kertyy osanäytteinä (vko 36 ympäristön suojaus, vko 44 tarkistuspiste, vko 47 riippuvuusaudit). Oppilaitoksen linjaa vaativa osa on avoin asia, joka käsitellään viikon 44 tarkistuspisteessä."],
        ["Tiimivaatimukset yksilöprojektissa", "Tiimi = opiskelija + ohjaaja + asiakasrooli. Tehtävistä sopiminen, yhteinen ongelmanratkaisu ja ratkaisujen arviointi todentuvat viikkosopimisissa, vertailumuistion keskustelussa ja katselmoinneissa."],
        ["s10 rajapinta", "Rajapintanäyte on Fetch API + JSON-datan käsittely (ryhmittely, suodatus, haku). Erillistä ulkoista REST-palvelua ei projektissa ole — jos arvioija edellyttää ulkoista rajapintaa, asia nostetaan esiin viikon 44 tarkistuspisteessä."],
        ["Sisällön tekijänoikeus", "Kielen aineisto on opiskelijan omaa (© 2026). Sivusto täyttää aineiston omien käyttöehtojen 'spread awareness' -ehdon ja näyttää tekijämaininnan. PDF:n keskeneräiset sivut 57–58 on rajattu pois — sivusto sanoo 'coming later'."],
        ["P1-takaraja", "Verbs-näkymä (P1) aloitetaan vain, jos P0 on valmis viikon 46 loppuun mennessä. Interaktiivinen konjugaattori ei kuulu projektiin missään tilanteessa — se on toimeksiannossa erikseen nimetty houkutus."],
        ["Näyttödemo", "8–10 min: tuotos toiminnassa (muunnin, fraasihaku), yksi tekninen päätös perusteluineen, yksi virheenkorjausketju, Git-historia ja tarkistettu tekoälyn käyttö."]
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
