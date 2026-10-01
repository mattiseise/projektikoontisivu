/*
 * sisalto.js – Parlar Ioniano: the project's COMPLETE content data.
 * app.js is a generic engine and contains no project-specific strings.
 * The site is in English; the engine's UI strings are overridden in `tekstit`
 * and the paper pack strings in `lataukset`. Teacher material stays in Finnish.
 *
 * v2.7 (1 Oct 2026): unified weeks. Levels of work, named the same everywhere:
 *   work step      = one numbered item in a week (tehtavat, "Work step 2 / 4")
 *   GitHub issue   = one change to the site in the repository (done-when + size + commit)
 *   working method = the six steps on the Working method page, used once per issue
 * Task ids and their order are unchanged: old ticks carry over into all parts.
 * The phases keep the same week groups as the old A–D, numbered 1–4.
 */
window.NAYTTOPROJEKTI = {
  /* ---- basics ---- */
  slug: "parlar-ioniano",
  nimi: "Parlar Ioniano",
  vuosi: 2026,
  viikot: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  lomaViikot: [41, 42, 43],
  yhtenaisetViikot: true,
  aloitusNappi: "Start the project",
  apuOtsikko: "I need implementation help",

  /* ---- how a learner uses the finished site (moottori v2.6/v2.7) ----
   * The picture is a hand-drawn illustration of the learner's workflow, not a
   * screenshot. The numbers in the SVG match `kohdat`, so no frames (alue). */
  lopputulos: {
    otsikko: "How a learner uses the finished Parlar Ioniano",
    kuvaus: "Parlar Ioniano is a public website for Ionian, the language you created. A learner opens it on a phone or a laptop, looks up pronunciation and grammar tables, converts numbers and learns the café dialogue, and every form comes from your reference PDF.",
    /* The start page lead says the same, so the sentence is shown only in the work pack. */
    naytaKuvaus: false,
    kuva: "assets/tyonkulku.svg",
    leveys: 880,
    korkeus: 700,
    alt: "Illustration of the learner's workflow in four numbered panels. 1: the learner opens the public URL on a phone or a laptop; the Home page says what Ionian is, credits the author, shows the terms of use and has a navbar to every page. 2: the learner looks up how a letter is pronounced on the Alphabet page with its IPA value, reads a pronoun table in tabs and finds which article goes with which gender in an accordion. 3: on the Numbers page the learner types a number such as 319 into the converter and reads it in Ionian words, announced to screen readers. 4: in the Phrasebook the learner types thank into the search, finds the thank you card with a match count, and reads the café dialogue in Ionian, in English or both; unfinished topics say coming later.",
    kohdat: [
      { n: 1, teksti: "The learner opens the public URL on a phone or a laptop. Home says what Ionian is, credits you as the author and shows the terms of use, and the navbar leads to every page." },
      { n: 2, teksti: "The learner looks up how a letter is pronounced, with its IPA value, reads a pronoun table in tabs and finds which article goes with which gender." },
      { n: 3, teksti: "The learner types a number, for example 319, into the converter and reads it in Ionian words. The result is also announced to a screen reader." },
      { n: 4, teksti: "The learner searches the phrasebook, for example for \"thank\", and reads the café dialogue in Ionian, in English or both. Unfinished topics say \"coming later\"." }
    ]
  },

  /* ---- phases (moottori v2.7: numbered, same week groups as the old A–D) ----
   * The weeks of each phase are unchanged, so a student in week 40 is still in
   * the second phase. Colours = styles.css --phase-a … --phase-d. */
  vaiheet: [
    { tunnus: "1", lyhyt: "Foundations", otsikko: "Foundations: a published shell and JSON data",
      kuvaus: "You turn the brief into a plan and GitHub issues, publish an empty site, and set the pattern every page follows: content in JSON files, one shared loader and a Bootstrap shell. They come first because every later page is built on the publishing path, the data pattern and the navbar.",
      kuvassa: ["Brief → plan → first deploy → JSON data → Bootstrap", "Week 38: Home and Alphabet live at the public URL."],
      viikot: [36, 37, 38], vari: "#1e56a0" },
    { tunnus: "2", lyhyt: "Grammar views", otsikko: "Grammar views and the half-way review",
      kuvaus: "You build the Pronouns and the Nouns & Articles pages from data with one reusable render function and tag v0.5 before the break. In week 44 the client's representative and a tester use v0.5, and their findings decide what the last weeks change.",
      kuvassa: ["Pronouns → nouns & articles → v0.5 → review", "Week 44: the findings re-prioritise the backlog."],
      viikot: [39, 40, 41, 42, 43, 44], vari: "#a87b00" },
    { tunnus: "3", lyhyt: "Complete site", otsikko: "Complete site: converter, phrasebook, quality",
      kuvaus: "You build the number converter test-first, the phrasebook with its search and the change the client chose in week 44. Then you run the whole test matrix and the accessibility, validation and security passes, so the site is complete and proven before a stranger tries it.",
      kuvassa: ["Converter → phrasebook & search → test matrix", "Week 47: every must-have page tested and accessible."],
      viikot: [45, 46, 47], vari: "#b0473a" },
    { tunnus: "4", lyhyt: "Release", otsikko: "Release v1.0 and demonstration",
      kuvaus: "A stranger runs the project from your README and an outside tester learns the café dialogue from the site alone. You release v1.0, link every requirement to its work sample and hand over on Friday 4 December.",
      kuvassa: ["RC → clean clone → user test → v1.0 → demo", "Fri 4 Dec: v1.0 public, evidence linked, handed over."],
      viikot: [48, 49], vari: "#6d28d9" }
  ],
  vaihekuva: {
    kuva: "assets/projektin-vaiheet.svg", leveys: 880, korkeus: 800,
    otsikko: "Parlar Ioniano: project phases",
    alt: "The four phases of Parlar Ioniano: 1 foundations, a published shell and content as data, weeks 36–38; 2 grammar views and the half-way review, with the Pronouns and Nouns & Articles pages, v0.5 and the review in week 44, weeks 39–44 with no project work in weeks 41–43; 3 complete site, with the converter, the phrasebook and the quality pass, weeks 45–47; 4 release v1.0 and demonstration, weeks 48–49.",
    tekstit: { kuvaotsikko: "What gets built in each phase?", viikot: "Weeks", tyoviikot: "Work weeks", viikko: "week", viikotLyhyt: "weeks", loma: "Break" }
  },
  vaiheetJohdanto: "The foundations come first, because every page is published through the same path, loads its content through the same loader and sits in the same Bootstrap shell. The grammar views then fill the site with the PDF's tables, and the client's representative and a tester use that half-way version in week 44 before the rest is decided. The converter, the phrasebook and the quality pass make the site complete, and the release phase proves that a stranger can run it and learn from it.",
  vaiheetHuomio: "11 project weeks, 31 Aug – 4 Dec 2026. Weeks 41–43 have no project work (week 42 is the autumn break), so v0.5 is tagged and the review is booked in week 40. v1.0 is released in week 48, and the last week is for linking the evidence, the demonstration and the handover on Friday 4 December.",

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

  /* Glossary: only the terms this project actually uses. Rendered into the
     Glossary view and into the weekly "New terms this week" boxes. Every term
     is also explained in running text where it first comes up. */
  termisto: [
    { termi: "work step", selite: "One numbered item in this site's weekly guide, for example \"Work step 2 / 4\". A work step is not a GitHub issue: one work step can need several issues, and some work steps (a review, a test run) need none.", viikko: 36 },
    { termi: "repository", nimi: "Repo", selite: "The project folder whose whole history Git stores. Your site lives here, and the public copy on GitHub is what GitHub Pages serves." },
    { termi: "commit", selite: "One named, saved change in the repository's history. A commit is the smallest work sample you can point an assessor at." },
    { termi: "issue", nimi: "GitHub issue", selite: "A numbered card in the repository for one change to the site, with its own description, done-when condition and size estimate. The commit that finishes the change closes it. One work step on this site can need several issues." },
    { termi: "branch", selite: "A named line of commits. This project publishes from the main branch and uses a short feature branch for the week-45 feedback change." },
    { termi: "JSON", nimi: "JavaScript Object Notation", selite: "A plain-text format for structured data. Every grammar table on this site is stored as JSON under data/ and read while the page is running." },
    { termi: "fetch()", selite: "The browser call that loads a file — here a JSON file — while the page is open. It works only over http://, which is why the site is always opened through a local web server." },
    { termi: "unit test", selite: "A small automated check that runs one of your functions and compares the result with the value you wrote down beforehand. This project's unit tests run in the browser from tests/tests.html." },
    { termi: "CDN", nimi: "Content delivery network", selite: "A public server that hosts a library's files, so you link to them instead of copying them into your repository. Bootstrap, the icons and the fonts are loaded this way, each with a pinned version." },
    { termi: "bundler", selite: "A tool that packs many source files into one file for the browser. This project has none: the files you write are exactly the files that go live." },
    { termi: "URL", nimi: "Web address", selite: "The address a page is opened from. \"The public URL\" in these instructions always means your GitHub Pages address — the one anyone can open." },
    { termi: "SVG", nimi: "Scalable Vector Graphics", selite: "An image written as text and drawn from shapes, so it stays sharp at any size. The flag and column motif are drawn as your own SVG." },
    { termi: "P0", nimi: "Must-have core", selite: "The pages and features that have to be finished before anything else is started. Here: Home, Alphabet, Pronouns, Nouns & Articles, Numbers with the converter, and the Phrasebook." },
    { termi: "P1", nimi: "Important follow-up", selite: "Work that is started only once every P0 item works. Here: the Verbs overview, and only if P0 is complete by the end of week 46." },
    { termi: "P2", nimi: "Optional extra", selite: "Work that may be dropped without failing the project. Here: word-building." },
    { termi: "XSS", nimi: "Cross-site scripting", selite: "An attack where text a visitor types is rendered as code by the page. Building every element with textContent instead of innerHTML is what stops it here." },
    { termi: "deploy", selite: "Publishing the current version to the public address. In this project a deploy is a push to the main branch, which GitHub Pages then serves.", viikko: 36 },
    { termi: "2FA", nimi: "Two-factor authentication", selite: "A second step on top of the password when you sign in to GitHub. Switched on in week 36 and part of the device-security evidence.", viikko: 36 },
    { termi: "backlog", selite: "The ordered list of everything still to do, kept as issues and sorted P0 first. It is re-prioritised after the week-44 review.", viikko: 36 },
    { termi: "API", nimi: "Application programming interface", selite: "The set of functions one piece of software offers another. The Fetch API is the browser's own interface for loading files; this project talks to no external service.", viikko: 37 },
    { termi: "DOM", nimi: "Document Object Model", selite: "The browser's live tree of everything on the page. Your JavaScript renders the grammar tables by creating DOM elements, not by writing HTML strings.", viikko: 37 },
    { termi: "IPA", nimi: "International Phonetic Alphabet", selite: "The standard symbols for speech sounds, written in square brackets. Every letter's IPA value is typed from the reference PDF and checked against it.", viikko: 37 },
    { termi: "tag", nimi: "Git tag", selite: "A permanent name pinned to one exact commit, such as v0.5 or v1.0. A tag is how you can still show an assessor precisely what the reviewers saw.", viikko: 40 },
    { termi: "T01", nimi: "Test case identifier", selite: "T means test case, and the number is its row in the test matrix project-docs/test-matrix.md: T01 is the first, T02 the second. A unit test in tests/ carries the number of its row in its name. The expected result is written down before the test is run.", viikko: 44 },
    { termi: "regression test", selite: "A test added after a bug is fixed, so the same bug cannot come back unnoticed. Every debugging chain in this project ends in one.", viikko: 44 },
    { termi: "UI", nimi: "User interface", selite: "The part of the site a visitor sees and operates: the input, the button, the result text. The number converter's UI is built by hand, without Bootstrap components.", viikko: 45 },
    { termi: "refactor", selite: "Improving the structure of working code without changing what it does — renaming, extracting, deleting. The unit tests are what make it safe.", viikko: 47 },
    { termi: "RC", nimi: "Release candidate", selite: "A version finished enough to be tested as if it were the release. RC1 is the first one; only blocking fixes go in after it.", viikko: 48 },
    { termi: "LAN", nimi: "Local area network", selite: "The network your own devices share, for example your phone's hotspot. The deployment path runs localhost → LAN → GitHub Pages over HTTPS.", viikko: 48 }
  ],

  /* ---- engine UI strings (English site) ----
   * Keys match app.js v2.7's UI_OLETUS and UI_YHTENAINEN (two-column layout engine,
   * unified weeks). The engine's own defaults are Finnish; every key is overridden
   * here so the English site never falls back to Finnish UI copy. */
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
    progressCopy: (done, total) => `${done} / ${total} work steps done`,
    resumeLabel: "Continue from the next work step",
    resumeDone: "All work steps done",
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
    exampleLabel: "✓ Example of the expected precision · do not copy the content",
    notEnoughLabel: "✗ This is not enough yet",
    glossaryWeekLabel: "New terms this week",
    glossaryWeekLink: "Whole glossary →",
    glossaryWeekChip: (w) => `week ${w}`,
    glossaryWeekChipAria: (w) => `This term comes up for the first time in week ${w}`,
    glossaryCount: (n) => `${n} ${n === 1 ? "term" : "terms"}`,
    glossaryEmpty: "This project has no separate glossary.",
    resetConfirm: (plan, files) => `Reset the work steps, the project journal${plan}, the ticks and the AI log in this browser? Download the project journal${files} first if you want to keep your answers.`,
    helpTipsLabel: "Good to know",
    planMetaDone: "done",
    planMetaEmpty: "updating",
    viewLive: (title) => `Opened: ${title}`,

    /* v2.4 state labels, screenshot guides and copy blocks (used only if enabled) */
    stateDone: "Done",
    stateCurrent: "Now",
    stateFuture: "Coming",
    stateHoliday: "Break",
    stateStepDone: "Done",
    weekNumberShort: (w) => `wk ${w}`,
    kuvaohjeetHeading: "Screenshot guides",
    kuvaohjeWhere: "Where:",
    kuvaohjeOpen: "Open the image large",
    kuvaohjeClose: "Close the image",
    kuvaohjePlaceholder: (kuvaa) => `Screenshot coming: ${kuvaa}`,
    kuvaohjeMeta: (pvm, teema) => [pvm ? `Captured ${pvm}` : "", teema || ""].filter(Boolean).join(" · "),
    kuvaohjeLoadError: "The image did not load. Open the page from its web address, not as a file.",
    kuvaohjeMissing: (id) => `Screenshot guide ${id} not found.`,
    copyDefaultTitle: "Copy this",
    copyButton: "Copy",
    copyDone: "✓ Copied",
    copyLive: (title) => `Copied to the clipboard${title ? `: ${title}` : ""}.`,
    copyFailed: "Copying failed. Select the text and press Ctrl + C.",
    lostHeading: "If you do not know what to do",
    routineHeading: "Weekly routine",
    routineSummary: "Weekly routine",
    cycleHeading: "Working method",
    cycleLead: "Do the steps in order. One round is one GitHub issue.",
    cycleRound: (n) => `Round ${n}`,
    cycleTrackLabel: "Steps of the working method",
    cycleNowLabel: (i, n) => `Next step · ${i} / ${n}`,
    cycleTool: "Tool:",
    cycleOwn: "You do:",
    cycleWhen: "The step is done when",
    cycleNext: "I did this · next step →",
    cyclePrev: "← Previous step",
    cycleFinish: "I did this · round done ✓",
    cycleRoundDoneTitle: (n) => `Round ${n} done`,
    cycleRoundDoneText: "Record the result in the issue. Then start the next GitHub issue from step 1.",
    cycleNewRound: (n) => `Start round ${n} →`,
    cycleLiveStep: (i, name) => `Step ${i}: ${name}`,
    cycleStuck: "I am stuck",
    cycleStuckLead: "Pick the question that describes your situation, open it and follow the instruction.",
    cycleSummary: "Working method · one GitHub issue at a time",
    taskOpenWorkflow: "Use the working method for this change →",

    /* v2.6: the goal picture at the top of the start page */
    goalLabel: "Project goal",
    goalTitle: (nimi) => `How a learner uses the finished ${nimi}`,
    goalListLabel: "How a learner uses the site",
    goalNote: "The illustration shows how a learner uses the finished site. It is not a screenshot of the finished site.",
    goalPlaceholder: "illustration of the finished site",
    goalBrief: "Read the brief",

    /* v2.5 + v2.7: work steps (tehtavat) in unified weeks */
    tasksHeading: "This week's work steps",
    tasksLead: "Do the work steps in order. The first unfinished work step is open. Tick a part as soon as you have done it. When a work step changes the site, do each change as a GitHub issue with the six steps on the Working method page.",
    taskNumber: (i, n) => `Work step ${i} / ${n}`,
    taskWhy: "Why:",
    taskWords: "Terms in this work step",
    taskStepsLabel: (title) => `Parts: ${title}`,
    taskDone: "Done when:",
    taskSave: "Save your work sample:",
    taskProgress: (done, total) => `${done} / ${total}`,
    taskComplete: "Done",
    taskHelpTitle: "I need help with this work step",
    taskHelpNote: "try it yourself first",
    taskOpenAll: "Open all work steps",
    taskOpenCurrent: "Show only the next work step",
    taskLiveDone: (i) => `Work step ${i} done.`,
    resumeTask: (i, n) => `work step ${i} / ${n}`,
    weekBackground: "Why this week exists · background and skills",
    phasePathLabel: "Project phases",
    phaseLink: (n, name) => `${n}. ${name}`,
    projectConnectionHeading: "How this week connects to the whole project",
    weekGoalHeading: "Week goal",
    weekFinishHeading: "End-of-week check",
    weekFinishCheck: "It works when",
    weekFinishEvidence: "Save your work sample",
    weekSkillsSummary: "What competence does this week's work show?",
    dayRhythmSummary: "Day rhythm for the week · open if needed",
    kuvaohjeetSummary: "Screenshot guides · open if needed",
    roadmapHeading: (n) => `The project's ${n} phases`,
    roadmapWeeks: (first, last, dateless) => `${dateless ? "work weeks" : "weeks"} ${first === last ? first : `${first}–${last}`}`,
    roadmapOpen: "Open the first week of this phase →",
    roadmapFigureCaption: "Illustration: the phases and what each one produces. It is not a screenshot. The exact work steps are on the week pages."
  },

  /* ---- paper pack strings (English) ---- */
  lataukset: {
    lang: "en",
    sanastoOtsikko: "Glossary",
    sanastoJohdanto: "The identifiers and technical terms of this project in the order you meet them. Each one is also explained on the site where it first comes up.",
    sanastoViikko: (w) => `week ${w}`,
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
    /* v2.5 + v2.7: work steps and the big picture on paper */
    tehtavaNumero: (i, n) => `Work step ${i} / ${n}`,
    tallennaLabel: "Save your work sample:",
    aloitusOtsikko: "Parlar Ioniano: what you build and how you proceed",
    aloitusVaiheetOtsikko: (n) => `The project's ${n} phases`,
    aloitusVaiheViikot: (first, last, dateless) => `${dateless ? "work weeks" : "weeks"} ${first === last ? first : `${first}–${last}`}`,
    aloitusHuomio: "A work step is one numbered item in this pack and on the site. When a work step changes the site, do each change as a GitHub issue: what to do, a done-when condition, a size estimate and the commit that closes it. Test results go into project-docs/test-matrix.md at once; the weekly summary goes into the project journal at the end of the week.",
    yhteysLabel: "How this week connects to the whole project:",
    tavoiteLabel: "Week goal:",
    lopputarkistusLabel: "End-of-week check:",
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
      evidence: "e.g. a commit link, GitHub issue #12 or test case T05.",
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
      "## 7. Data (pre-filled — agreed implementation)",
      "",
      "Content JSON is loaded at runtime with fetch() from `data/`, through one shared loader",
      "in `js/data.js`. The site is therefore always opened over http:// — never file://.",
      "This data store is the agreed implementation, because every later page is built on it.",
      "In week 37 I justify the agreed choice against at least one alternative. If the comparison",
      "clearly favours another option, the deviation is agreed with the supervisor before the",
      "next implementation week.",
      "Loading and error states are implemented in week 37 and proven in week 39. Every content",
      "file is checked against the reference PDF — an invented form is a bug. A broken-network",
      "response is a test case.",
      "",
      `My justification against the alternatives (week 37): ${arvo("dataWhy")}`,
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
      "as the client's representative: they receive the kickoff questions and represent the",
      "client in the reviews. The external tester is a different person who has never seen Ionian.",
      "In the repository, people appear only by role (supervisor, tester A); names go to the",
      "supervisor in Teams if they are needed.",
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
      termit: ["deploy", "2FA", "backlog"],
      feature: "Anyone can open your empty site at its public GitHub Pages address, and the must-have pages are planned as GitHub issues.",
      excerpt: "Right now it lives in a 58-page reference PDF that only I can navigate.",
      connection: "Everything starts from the brief: before the first page exists, you agree with the supervisor what the site must do and what stays out. You set up the tools and publish the still empty site, because a deploy that fails now puts nothing of value at risk. The plan and the must-have issues you write this week are what weeks 37–40 build and what the week-44 review re-plans.",
      deliverable: "Kickoff notes with a question list, a public repository with a privacy check done, the site folder served by a local web server on your computer, the first deploy published over your phone hotspot and live at the public URL, the technical plan drafted and the P0 backlog — the ordered list of what is still to do — as issues.",
      why: "If open questions stay as silent assumptions, you build the wrong site. If the first deploy waits until November, you debug the publishing path at the worst possible moment. And because the repository is public from day one, the privacy check cannot wait.",
      done: "The public URL opens on a device that has never seen the project, and another person understands from the README and the plan what is being built and for whom.",
      record: "Write in the Week 36 entry: the open questions and their answers (decision / open / assumption), the repository link, the first commit hash, and a screenshot of the public URL open on your phone.",
      skills: ["development environment", "version control", "requirements reading", "network sharing"],
      resources: [["Open the plan form", "#view-suunnitelma", false]],
      paivat: [
        ["Need", "Read the brief, underline the requirements and write down every unclear point as a question for the kickoff talk."],
        ["Scope", "Agree the scope: which views are P0, what is explicitly out (the conjugator!), and who reviews the site in week 44."],
        ["Tools", "Install VS Code and Live Server, create the site folder, serve it over http://localhost and publish over your phone hotspot."],
        ["Plan", "Draft the technical plan from the pre-filled sections and split the P0 work into GitHub issues."],
        ["Publish", "Publish the empty site to GitHub Pages from the main branch and verify the public URL works on another device. First commit, first deploy — the publishing path exists."]
      ],
      tehtavat: {
        "36-1": {
          miksi: "If open questions stay as silent assumptions, you build the wrong site.",
          osat: [
            ["Underline the requirements", "Read the brief like a contract and underline everything the site must do and everything it must not do."],
            ["Write your questions", "Write every unclear point in the brief as a question for the kickoff talk."],
            ["Hold the kickoff talk", "Bring the questions to a 15-minute talk with the supervisor, who acts as the client's representative."],
            ["Agree the scope", "Agree which views are the must-have core (P0), what is out (the verb conjugator, audio, accounts) and who reviews the site in week 44."],
            ["Mark every answer", "In the kickoff notes in `project-docs/`, mark each answer as a decision, an open item or an assumption. People appear only by role."]
          ],
          valmis: "Every question in the kickoff notes has an answer marked decision, open item or assumption, and the must-have scope (P0) is agreed.",
          tallenna: "The kickoff notes with the question list in `project-docs/`. The open questions and their answers go into the week 36 journal entry.",
          sanat: ["P0"]
        },
        "36-2": {
          miksi: "The repository is public from day one, so the privacy check cannot wait, and the local server is what lets the pages load the language data from week 37 on.",
          osat: [
            ["Install the editor and the server", "Install VS Code and the Live Server extension. No Node, no npm and no build step: the files you write are the files that go live."],
            ["Create the site folder", "Create `index.html`, `css/style.css` and `js/main.js`, and the folders `data/`, `tests/` and `project-docs/`."],
            ["Open it through the local server", "Open `index.html` with Live Server. The address bar must say http://localhost, because fetch() cannot read data files over file://."],
            ["Do the privacy check", "Before the first commit: no personal data, no school identifiers, and your public author name agreed with the supervisor."],
            ["Create the public repository", "Add a README skeleton that says what the project is and how to run it, then create the public GitHub repository and push."],
            ["Switch on 2FA", "Turn on two-factor authentication (2FA) for your GitHub account."]
          ],
          valmis: "`index.html` opens through http://localhost, the public repository has a README, the privacy check is done and 2FA is on.",
          tallenna: "The repository link and the first commit hash go into the week 36 journal entry.",
          sanat: ["repository", "fetch()", "2FA"]
        },
        "36-3": {
          miksi: "A first deploy that fails now puts nothing of value at risk, and sharing your phone's connection is the network-sharing work sample.",
          osat: [
            ["Share your phone's connection", "Create a hotspot on your phone with a strong password and connect your computer to it."],
            ["Note the network setup", "Write down the hotspot name, that it uses a strong password (not the password itself), and why your own connection keeps this work off the school network."],
            ["Push over the hotspot", "Commit and push while the computer is on the hotspot. If the push fails, check which network you are really on and write down the fix."],
            ["Switch on GitHub Pages", "Settings → Pages → Deploy from a branch → main / (root), and commit an empty `.nojekyll` file in the root."],
            ["Open the public URL on two devices", "Open the Pages address on your phone and on a device that has never seen the project, and take a screenshot on the phone."]
          ],
          valmis: "The public URL opens on your phone and on a device that has never seen the project, and the DevTools console shows no red errors.",
          tallenna: "The phone screenshot in `project-docs/evidence/week-36/`. The network notes and the screenshot link go into the week 36 journal entry.",
          sanat: ["deploy", "URL", "branch"]
        },
        "36-4": {
          miksi: "The plan and the issues turn the brief into work you can estimate, and after the week-44 review you re-plan against them.",
          osat: [
            ["Fill in the plan", "On the Plan page, write your goal, your audience and your scope guard. The pre-filled sections come from the brief."],
            ["Leave the open items open", "The licence and the device-security policy line stay empty until the supervisor answers them."],
            ["Write one issue per must-have page", "Create a GitHub issue for each must-have page (P0), with a done-when condition and a size estimate."],
            ["Prioritise the backlog", "Sort the issues into must-have (P0), follow-up (P1) and optional (P2), and write down why the order is what it is."],
            ["Commit the plan", "Download technical-plan.md from the Plan page and commit it as `project-docs/technical-plan.md`."]
          ],
          valmis: "The plan draft is committed, and every must-have page (P0) has an issue with a done-when condition and a size estimate.",
          tallenna: "`project-docs/technical-plan.md` committed and the issues in the repository. The issue numbers go into the week 36 journal entry.",
          sanat: ["issue", "P1", "P2", "backlog"]
        }
      },
      help: {
        title: "Create, serve and publish the plain site — click by click",
        tree: "parlar-ioniano-site/\n├─ index.html          ← Home\n├─ alphabet.html       ← week 37\n├─ css/\n│  └─ style.css        ← my own styles, loaded AFTER Bootstrap\n├─ js/\n│  └─ data.js          ← the shared fetch helper (week 37)\n├─ data/               ← the language JSON lands here in week 37\n├─ tests/\n├─ project-docs/\n├─ .nojekyll\n└─ README.md",
        actions: [
          "Install VS Code and the Live Server extension. There is nothing to build: the files you write are the files that go live.",
          "Create index.html with the HTML5 skeleton (<!doctype html>, <html lang=\"en\">, a <title>), and link css/style.css in the head and js/main.js at the end of the body.",
          "Open it with Live Server (right-click → Open with Live Server). The address bar must say http://localhost:… — if it says file://, fetch will fail in week 37.",
          "Hotspot test: with your computer connected to your phone hotspot, push and publish; then open the public Pages URL on the phone. If the push fails, check which network your computer is actually on and write down what you fixed.",
          "Create the GitHub repository (public), then follow GitHub's 'push an existing repository' commands shown on the new repo page.",
          "Repository → Settings → Pages → Source: Deploy from a branch → main / (root). Commit an empty .nojekyll file in the root, wait a minute, then open the URL GitHub shows."
        ],
        code: "FIRST DEPLOY CHECKLIST\n[ ] index.html opens through http://localhost, not file://\n[ ] the first deploy was pushed over my phone hotspot, and the public URL opens on the phone\n[ ] repository is public, privacy check done, 2FA on\n[ ] Pages source = main branch / (root), .nojekyll committed\n[ ] the public URL works on a device that has never seen the project\n[ ] page has <html lang=\"en\">, a <title>, and the DevTools console is clean",
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
      termit: ["API", "DOM", "IPA"],
      feature: "A visitor sees the whole alphabet with its IPA values at the public URL, loaded from data/letters.json and not typed into the HTML.",
      excerpt: "Every table on the site must be checked against my PDF — an invented form is a bug.",
      connection: "Week 36 gave you a published but empty site. Now the content moves into data/*.json files that one shared loader fetches at runtime, with your PDF as the source of truth. Every grammar page in weeks 39–46 reuses this pattern, so you get it right once on the Alphabet page.",
      deliverable: "data/letters.json and the first records of data/words.json typed from the PDF (pages 7, 9–11, 12 and 41), the agreed data store justified in the plan against at least one alternative, js/data.js as the one loader every page uses, the Alphabet & Pronunciation page live with real loading and error states, and tools/check-data.html reporting on every data file.",
      why: "If grammar content is typed into the HTML, every correction means editing markup, and the data-store requirement has no work sample. If the data is not checked against the PDF, the site teaches a wrong language — and nobody else on Earth can spot it.",
      done: "The public URL shows the alphabet table rendered from data/letters.json, and tools/check-data.html reports \"content OK\" — and reports an error when you deliberately break one line.",
      record: "Write in the Week 37 entry: why JSON files + runtime fetch (the alternatives you rejected), the four-key record shape you agreed for words.json, which PDF pages you transcribed, what the data check caught, and the commit links.",
      skills: ["data modelling", "fetch API", "JSON", "DOM rendering"],
      tehtavat: {
        "37-1": {
          miksi: "If grammar content is typed into the HTML, every correction means editing markup, and the data-store requirement has no work sample.",
          osat: [
            ["Justify the agreed data store", "JSON files in `data/`, fetched at runtime, are the agreed implementation. Justify the agreed choice against at least one alternative, such as tables typed into the HTML."],
            ["Write the justification into the plan", "Use the data store field on the Plan page. If the comparison clearly favours another option, the deviation is agreed with the supervisor before the next implementation week."],
            ["Type letters.json from the PDF", "Pages 7 and 9–11: every letter with its IPA value, the stressed and unstressed variants, the diacritics and the digraphs. Add page 41's capitalisation notes."],
            ["Agree one record shape for words", "Every word entry gets the same four keys: word, partOfSpeech, translation and example. Week 46 builds the whole vocabulary on this shape."],
            ["Start words.json", "Type ten words from PDF page 12 into `data/words.json` yourself. No model knows these values, and every line you type is a line you can verify."]
          ],
          valmis: "`data/letters.json` and the first ten records of `data/words.json` are typed from the PDF, and the plan justifies the agreed data store against at least one alternative.",
          tallenna: "The JSON files committed in `data/` and the justification in `project-docs/technical-plan.md`. The PDF pages you typed go into the week 37 journal entry.",
          sanat: ["JSON", "IPA"]
        },
        "37-2": {
          miksi: "This page sets the pattern every later page follows: content in data files, one shared loader, and states a visitor can see.",
          osat: [
            ["Write one shared loader", "`js/data.js` exports one loadJSON() that calls fetch(), checks response.ok and throws an error message that names the file."],
            ["Load the page script as a module", "`alphabet.html` loads `js/alphabet.js` with `<script type=\"module\">`, so it can import `js/data.js` without any bundler."],
            ["Show three states", "Render into one container: \"Loading…\", an error message that names the file, and the table."],
            ["Build the table as elements", "Create the table with createElement and textContent as elements of the Document Object Model (DOM), never as an HTML string."],
            ["Test the error state", "Rename `data/letters.json` for a moment and reload through the local server: your own error message appears. Rename it back."]
          ],
          valmis: "The Alphabet & Pronunciation page renders from `data/letters.json` at the public URL, and a renamed file shows your error message instead of a blank page.",
          tallenna: "`js/data.js` and the Alphabet page committed and deployed. The commit links go into the week 37 journal entry.",
          sanat: ["DOM", "bundler"]
        },
        "37-3": {
          miksi: "Nobody else on Earth can spot a wrong Ionian form, so the data check and your own reading against the PDF are the only safety net.",
          osat: [
            ["Write the data check page", "`tools/check-data.html` loops over your data files, checks that every key listed in `required` exists and is not empty, and prints one line per file."],
            ["Add a check of your own", "For example: every ipa value contains a square bracket."],
            ["Prove that the check bites", "Break one line in a data file on purpose, reload the check page, watch it fail, then fix the line."],
            ["Read the table against the PDF", "Compare the rendered alphabet table with the PDF letter by letter and fix every difference."],
            ["Commit and deploy", "Commit the fixes and push to main, so the public URL shows the checked table."]
          ],
          valmis: "`tools/check-data.html` reports \"content OK\", reports an error when you break one line, and the alphabet table matches the PDF.",
          tallenna: "`tools/check-data.html` committed. What the check caught and its pass/fail report go into the week 37 journal entry."
        }
      },
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
      feature: "A visitor moves between Home and Alphabet with a navbar that works on every page and collapses on a phone, and Home credits you as the author.",
      excerpt: "I want a website where a curious learner can actually find things.",
      connection: "Weeks 36–37 gave you a published site with one data-driven page. Now Bootstrap gives every page the same navbar and grid, and you measure what it costs on your own pages before you rely on it. From week 39 on, every grammar view is built on these components.",
      deliverable: "A comparison memo of Bootstrap against one other component library and the no-library option — with your own measurements (transferred KB from the DevTools Network panel, Lighthouse scores) — Bootstrap loaded from the CDN with a pinned version, a theme configured by overriding its CSS variables in css/style.css, the navbar and the grid on every page, and the Home page with the classification, the credit and the terms of use.",
      why: "The component-library requirement is assessed on whether you explored possibilities AND limits — a memo without measurements is an opinion. And without one shared navbar and layout now, every later page would be bolted on ad hoc.",
      done: "The comparison memo with your own measured numbers is in project-docs/, the navbar works from every page on the public URL and collapses correctly on a phone, and the Home page shows the credit and terms.",
      record: "Write in the Week 38 entry: the three options you compared, your measurements, the decision and its trade-offs, which Bootstrap components you will build on and where you will write your own CSS instead, and the role of the person you discussed it with (for example the supervisor).",
      skills: ["Bootstrap", "CDN and version pinning", "responsive grid", "technical comparison"],
      tehtavat: {
        "38-1": {
          miksi: "The component-library requirement is assessed on possibilities and limits, and a memo without your own measurements is only an opinion.",
          osat: [
            ["Measure the before-numbers", "Open your site in DevTools → Network, hard-reload and write down the transferred size and the number of requests. Run Lighthouse on the public URL and write down the scores."],
            ["Compare three options", "Bootstrap, one other component library (for example Bulma or Pico.css) and no library: the components, the cost in KB, the promised accessibility and the limits for your tables."],
            ["Talk it through", "Present the memo to the supervisor as the client's representative, and record the date and their view in one sentence."],
            ["Write your component decision", "On the Plan page: which Bootstrap components you build on, and where you write your own CSS instead. Bootstrap itself is the agreed implementation."]
          ],
          valmis: "`project-docs/library-comparison.md` covers all three options with your own before-numbers and the supervisor's view, and the plan names your components.",
          tallenna: "`project-docs/library-comparison.md` committed and the decision on the Plan page. The three options and the decision go into the week 38 journal entry."
        },
        "38-2": {
          miksi: "One shared navbar and layout now means every later page slots in instead of being bolted on.",
          osat: [
            ["Link Bootstrap from the CDN", "Link the CSS in the head and the bundle script at the end of the body. Pin an exact version (never @latest) and add the integrity hash the browser checks."],
            ["Theme it without touching the library", "Override Bootstrap's CSS variables in `css/style.css`, which loads after Bootstrap. You never edit the library file."],
            ["Put the same navbar on every page", "Copy the navbar markup into every page and mark the current page with `aria-current=\"page\"`."],
            ["Build the Home page", "Say what Ionian is and how it is classified, and show the author credit and the terms of use."],
            ["Check it on the public URL", "Click through the navbar from every page, Tab through it, and narrow the window until the menu toggler opens and closes."]
          ],
          valmis: "Bootstrap loads from the CDN with a pinned version, the navbar works from every page and collapses on a phone, and Home shows the credit and the terms.",
          tallenna: "The pages and `css/style.css` committed and deployed. Which components you use and where you wrote your own CSS go into the week 38 journal entry.",
          sanat: ["CDN"]
        },
        "38-3": {
          miksi: "The before/after pair from your own pages is the evidence that you explored Bootstrap's possibilities and limits.",
          osat: [
            ["Measure the after-numbers", "Reload the public URL with DevTools → Network open and write down the new transferred size and the number of requests."],
            ["Run Lighthouse again", "Write the new Lighthouse scores next to your before-numbers."],
            ["Name the limits", "Write into the memo what Bootstrap costs you and cannot do, for example the navbar repeated on every page because there is no build step."],
            ["Commit the memo", "Commit the finished memo and deploy."]
          ],
          valmis: "The memo has the before and after numbers side by side and at least one named limit.",
          tallenna: "`project-docs/library-comparison.md` with the before/after pair, committed. Your measurements go into the week 38 journal entry."
        }
      },
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
      feature: "A visitor switches between eight pronoun tables in tabs, with the keyboard or on a phone, all rendered from data/grammar.json.",
      excerpt: "how the pronouns change when you talk to a friend or a stranger",
      connection: "Week 37's pattern now meets the biggest content block in the PDF: eleven pages of pronouns. One reusable renderTable() turns eight datasets into Bootstrap tabs, and the loading and error states become tested behaviour. Week 40 reuses the same function for the articles.",
      deliverable: "The pronouns section of data/grammar.json (eight datasets typed from PDF pages 13–18 and 22–26), a reusable renderTable() in js/render.js that builds a Bootstrap table, Bootstrap tabs between pronoun types, working loading/error states, and horizontal scrolling for wide tables on a phone.",
      why: "If each table is its own block of markup, you have eight copies to maintain and no reuse work sample. The fetch states are required this week because week 37's binding decision promised them — and the broken-network test in week 47 will target exactly this code.",
      done: "All eight pronoun tables render on the public URL from data/grammar.json, the tabs can be operated with the keyboard alone, wide tables scroll horizontally on a phone instead of breaking the layout, and renaming the JSON shows your error state.",
      record: "Write in the Week 39 entry: the shape of the pronouns section and why, how renderTable() stays generic, which PDF pages you transcribed and how you verified them, plus the commits and the phone screenshot.",
      skills: ["reusable functions", "Bootstrap tables and tabs", "fetch states", "responsive tables"],
      tehtavat: {
        "39-1": {
          miksi: "One shape for all eight tables is what lets a single function render them.",
          osat: [
            ["Sketch the shape on paper", "One \"pronouns\" array in `data/grammar.json` with eight sets. Each set has the same four keys: id, title, columns and rows."],
            ["Check that the shape fits all eight", "Make sure the same shape works for every one of the eight tables, or renderTable() cannot stay generic."],
            ["Type the data from the PDF", "Type pages 13–18 and 22–26 yourself. The clitic forms and the colloquial prepositional forms exist nowhere else."],
            ["Add the section to the data check", "Add the pronouns section to `tools/check-data.html` and run it."]
          ],
          valmis: "`data/grammar.json` has eight pronoun sets in the same shape, and `tools/check-data.html` passes.",
          tallenna: "`data/grammar.json` committed. The shape and the PDF pages you typed go into the week 39 journal entry."
        },
        "39-2": {
          miksi: "Eight hand-written tables would be eight copies to maintain, and the reusable function is the code-reuse work sample.",
          osat: [
            ["Write renderTable() once", "`js/render.js` exports renderTable({ title, columns, rows, note }), which returns a Bootstrap table element with nothing pronoun-specific inside."],
            ["Fix the data, not the function", "If you feel like adding an if for one specific table, change the data shape instead."],
            ["Build the tabs", "One Bootstrap tab and one tab pane per pronoun set in `pronouns.html`, operable with the keyboard alone."],
            ["Fill the panes after the fetch", "Append each rendered table into its pane, wrapped in `table-responsive`, so a phone scrolls the table and not the page."],
            ["Verify against the PDF", "Read each rendered table against its PDF page, then commit per table set and deploy."]
          ],
          valmis: "All eight pronoun tables render at the public URL through one renderTable(), the tabs work with the keyboard, and wide tables scroll on a phone.",
          tallenna: "`js/render.js` and the Pronouns page committed. How renderTable() stays generic goes into the week 39 journal entry."
        },
        "39-3": {
          miksi: "The plan promised loading and error states, and the broken-network test in week 47 targets exactly this code.",
          osat: [
            ["Show the loading state", "In DevTools, set network throttling to Slow 3G and reload: \"Loading…\" appears."],
            ["Show the error state", "Block the data file request (Network → right-click the row → Block request URL) and reload: your error message names the file."],
            ["Take both screenshots", "Save them in `project-docs/evidence/week-39/`."],
            ["Check it on your phone", "Open the Pronouns page on your phone: wide tables scroll sideways instead of breaking the layout. Take a screenshot."]
          ],
          valmis: "Both screenshots show your own states, and the phone check passes.",
          tallenna: "The screenshots in `project-docs/evidence/week-39/`, linked in the week 39 journal entry."
        }
      },
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
      termit: ["tag"],
      feature: "A visitor finds which article goes with which gender in an accordion of gender-by-number tables, and v0.5 is tagged and booked for the week-44 review.",
      excerpt: "which article goes with which gender",
      connection: "Week 39's renderTable() now meets the articles: every table on PDF pages 8 and 19–21 is the same gender × number matrix, so one function serves them all. With four content pages live, you tag v0.5, the version the client's representative and a tester will use in week 44. This is the last working week before the break, so the review is booked in writing now.",
      deliverable: "The nouns and articles sections added to data/grammar.json from the PDF, the gender×number matrices rendered by the week-39 function, the rule sections wrapped in a Bootstrap accordion built from the same data, example sentences from the PDF, the v0.5 git tag, and a written agreement of the review: the client's representative and the tester by role, the date and the place for week 44.",
      why: "This is the last working week before three weeks of break. An unbooked review quietly becomes no review — and the whole C phase is built on its feedback. The tag freezes what the reviewers will see.",
      done: "The four grammar pages render correctly on the public URL, the accordion opens and closes with the keyboard alone, v0.5 is tagged, and the review agreement (roles + date) is committed in project-docs/.",
      record: "Write in the Week 40 entry: how the gender×number shape drove the data design, why the accordion earns its place on a long page, what you left FOR the review to judge (do not polish it away), the tag, and the booked review details.",
      skills: ["data modelling", "Bootstrap accordion", "code reuse", "release tagging"],
      tehtavat: {
        "40-1": {
          miksi: "Articles make no sense without gender, and one gender × number shape lets the same function render every table on these pages.",
          osat: [
            ["Model the matrix", "Design the articles section of `data/grammar.json` as gender × number, so renderTable() renders definite and indefinite articles and articulated prepositions without special cases."],
            ["Type the data from the PDF", "Type pages 8 and 19–21 yourself, including the elision rules and the neuter-to-feminine plural switch. A generator would invent exactly these details wrongly."],
            ["Attach the rule notes", "Keep each rule note short and put it next to its matrix in the JSON, so the note travels with the data."],
            ["Verify and run the data check", "Read the data against the PDF line by line, then add the new sections to `tools/check-data.html` and run it."]
          ],
          valmis: "The nouns and articles sections in `data/grammar.json` match PDF pages 8 and 19–21, and `tools/check-data.html` passes.",
          tallenna: "`data/grammar.json` committed. How the gender × number shape drove the data design goes into the week 40 journal entry.",
          sanat: ["JSON"]
        },
        "40-2": {
          miksi: "The accordion keeps a long page readable, and reusing renderTable() proves that your function is really generic.",
          osat: [
            ["Build the accordion from data", "Loop over the sections and create one accordion item per topic: gender rules, plural endings, definite articles, indefinite articles and articulated prepositions."],
            ["Fill each item", "Short prose first, then the matrix from renderTable(), then the PDF's example sentences with their translations."],
            ["Give every item a unique id", "A duplicate id is the classic accordion bug, and the week-47 validator will find it."],
            ["Test with the keyboard", "Tab reaches each header button, and Enter opens and closes its section. Then deploy."]
          ],
          valmis: "The Nouns & Articles page renders every matrix through renderTable() at the public URL, and the accordion works with the keyboard alone.",
          tallenna: "The page committed and deployed. Why the accordion earns its place on a long page goes into the week 40 journal entry."
        },
        "40-3": {
          miksi: "The tag freezes what the reviewers will see, so you can still show an assessor exactly what they tested.",
          osat: [
            ["Check the four content pages", "Home, Alphabet, Pronouns and Nouns & Articles render correctly at the public URL."],
            ["Tag the version", "Run `git tag v0.5` and `git push --tags`. The tag pins the exact commit the reviewers will see."],
            ["Compare the tag with the site", "Open the v0.5 tag on GitHub and check that the deployed site matches it."],
            ["Write down what you leave for the review", "Note what you deliberately leave for the reviewers to judge. Do not polish it away during the break."]
          ],
          valmis: "The v0.5 tag is on GitHub and the deployed site matches it.",
          tallenna: "The tag in the repository. The tag and what you left for the review to judge go into the week 40 journal entry.",
          sanat: ["tag"]
        },
        "40-4": {
          miksi: "An unbooked review quietly becomes no review, and the whole third phase is built on its feedback.",
          osat: [
            ["Agree the date and the place", "Agree a date, a time and a place in week 44 with the supervisor, who represents the client, and with the external tester the supervisor approved."],
            ["Agree what they will try", "Find the alphabet, read a pronoun table and say what the language is, without you explaining anything."],
            ["Write the agreement", "Commit `project-docs/review-agreement.md` with the date, the place, the three tasks and the v0.5 tag. People appear only by role, for example supervisor or tester A."],
            ["Send the public URL", "Send the public URL to the supervisor and the tester. If the supervisor needs names, send them in Teams, not to the repository."]
          ],
          valmis: "`project-docs/review-agreement.md` is committed with the roles, the date, the place and the three tasks.",
          tallenna: "`project-docs/review-agreement.md` committed. The booked review details go into the week 40 journal entry."
        }
      },
      help: {
        title: "The accordion, the gender×number shape, and the review booking",
        tree: "data/grammar.json  ← the \"articles\" section added this week\n{\n  \"articles\": [\n    {\n      \"id\": \"definite\",\n      \"title\": \"Definite articles\",\n      \"columns\": [\"\", \"Masculine\", \"Feminine\", \"Neuter\"],\n      \"rows\": [\n        [\"Singular\", \"le / lo / l'\", \"la / l'\", \"lu\"],\n        [\"Plural\", \"li / l'\", \"le / l'\", \"→ feminine plural\"]\n      ],\n      \"note\": \"Neuter merges with the feminine form in the plural.\"\n    }\n  ]\n}\n\nproject-docs/review-agreement.md",
        actions: [
          "Reuse renderTable() for every matrix — if it needs a special case, adjust the data, not the function.",
          "Keep each rule note short and attach it to its matrix in the JSON, so the note travels with the data.",
          "Build the accordion from the data too: loop the sections, create one accordion-item per section, and append the rendered table into its accordion-body. Every item needs a unique id — a duplicate id is the classic accordion bug (and week 47's validator will find it).",
          "Add the new sections to tools/check-data.html and run it.",
          "Write project-docs/review-agreement.md: who (by role only, for example supervisor or tester A), when, where, what they will test. Commit it. Names, if the supervisor needs them, go in Teams."
        ],
        code: "<!-- nouns.html — Bootstrap accordion, one item per rule section -->\n<div class=\"accordion\" id=\"grammar\">\n  <div class=\"accordion-item\">\n    <h2 class=\"accordion-header\">\n      <button class=\"accordion-button\" type=\"button\"\n              data-bs-toggle=\"collapse\" data-bs-target=\"#sec-definite\"\n              aria-expanded=\"true\" aria-controls=\"sec-definite\">\n        Definite articles\n      </button>\n    </h2>\n    <div id=\"sec-definite\" class=\"accordion-collapse collapse show\"\n         data-bs-parent=\"#grammar\">\n      <div class=\"accordion-body\" data-table=\"definite\">\n        <!-- renderTable() appends the matrix here -->\n      </div>\n    </div>\n  </div>\n</div>\n\nREVIEW AGREEMENT TEMPLATE (project-docs/review-agreement.md)\n# v0.5 review agreement\n- Date and place: <week 44, day, time>\n- Client's representative: <role, e.g. supervisor>\n- External tester (has never seen Ionian): <role, e.g. tester A>\n- They will look at: finding the alphabet, reading a pronoun table,\n  understanding what the language is — WITHOUT the developer explaining.\n- v0.5 tag: <commit hash> · public URL: <link>",
        test: "Open the v0.5 tag on GitHub and check that the deployed site matches it. Then operate the accordion with the keyboard only: Tab reaches the header button and Enter opens the section. The review agreement file is in the repository — not only in chat.",
        links: [
          ["Bootstrap: Accordion", "https://getbootstrap.com/docs/5.3/components/accordion/"],
          ["Git basics: Tagging", "https://git-scm.com/book/en/v2/Git-Basics-Tagging"]
        ]
      },
      example: "data/grammar.json articles section: 5 matrices with the elision variants as their own columns and a note attached to each; the accordion items generated in a loop from that same array. Review agreement names the tester's role and the three things they will try. Tag v0.5 pushed.",
      notEnough: "Four pages live but the review \"agreed on some day after the break\" with nobody agreed and no date — that is how reviews silently vanish, and the third phase loses its foundation."
    },

    44: {
      type: "katselmointi",
      termit: ["T01", "regression test"],
      feature: "The client's representative and a tester have used v0.5 without your help, and every finding has a decision and, if accepted, a GitHub issue.",
      excerpt: "I want to hear, in their words, whether they can find the alphabet, read a pronoun table and understand what this language is — without me explaining anything.",
      connection: "v0.5, tagged before the break, now meets other people: the client's representative and a tester who has never seen Ionian use it at the public URL. Their findings, recorded in their own words, become the issues and priorities for weeks 45–47, and the first debugging chain starts from a real finding.",
      deliverable: "A review log with the tester's findings verbatim and your interpretation separately, the client's decisions on each finding, an updated P0/P1/P2 backlog with new issues, a small fix batch deployed, and debugging chain 1/3 (observation → reproduction → cause → fix commit → re-test → regression test). The t12 open item is checked with the supervisor.",
      why: "Feedback that is paraphrased is feedback lost — you will fix what you thought they meant. And a review without re-planning is theatre: the point is that next week's work changes because of what you heard.",
      done: "The review log is committed with the two voices clearly separated, every finding has a decision (fix / won't fix / P2), and chain 1/3 is complete from a real finding, with its regression test in the matrix.",
      record: "Write in the Week 44 entry: who tested (role, date), the three most surprising findings in the tester's words, what you re-prioritised and why, and the chain 1/3 links.",
      skills: ["review facilitation", "feedback recording", "re-planning", "debugging chain"],
      tehtavat: {
        "44-1": {
          miksi: "Feedback that is paraphrased is feedback lost: you would fix what you thought they meant.",
          osat: [
            ["Prepare the session", "Open the review agreement, prepare the three tasks and a notes file with two columns."],
            ["Watch in silence", "Give the tester the three tasks and do not help or explain. If they are stuck for two minutes, note where and move on."],
            ["Write their words", "Left column: what the tester said and did, in their own words. Right column: your interpretation. Mark people by role, not by name."],
            ["Get a decision on each finding", "The supervisor, as the client's representative, decides on each finding: fix now, later as an optional extra (P2) or not at all."],
            ["Fill in the log the same day", "Commit `project-docs/review-2026-w44.md` while the words are still fresh."]
          ],
          valmis: "`project-docs/review-2026-w44.md` separates the tester's words from your interpretation, and every finding has a decision.",
          tallenna: "`project-docs/review-2026-w44.md` committed. The three most surprising findings in the tester's words, with the tester's role and the date, go into the week 44 journal entry."
        },
        "44-2": {
          miksi: "A review without re-planning is theatre: next week's work changes because of what you heard.",
          osat: [
            ["Write the accepted findings as issues", "One GitHub issue per accepted finding, with a done-when condition and a size estimate."],
            ["Get the decisions in writing", "Ask the supervisor to confirm each decision in writing. A comment on the issue is enough."],
            ["Re-prioritise the backlog", "Re-sort the backlog into must-have (P0), follow-up (P1) and optional (P2) after what you heard."],
            ["Compare the estimates with reality", "Compare your week-36 size estimates with what the work actually took, and write down the difference."]
          ],
          valmis: "Every accepted finding is an issue with a done-when condition, the backlog is re-prioritised, and the estimate-versus-actual difference is written down.",
          tallenna: "The issues in the repository. What you re-prioritised and why, and the estimate comparison, go into the week 44 journal entry.",
          sanat: ["backlog"]
        },
        "44-3": {
          miksi: "The debugging chain is assessed as a whole, and this one starts from a real finding by a real tester.",
          osat: [
            ["Fix the small batch", "Fix the accepted findings that are small, one commit each, and deploy."],
            ["Pick a real bug", "Choose one finding from the review that is a bug and reproduces reliably."],
            ["Reproduce it and find the cause", "Write the steps that make it happen every time, then the actual cause in the code or the data. Keep the DevTools console open while you do it."],
            ["Fix and re-test", "Fix it in a commit and repeat the same steps. Write down the expected and the observed result."],
            ["Add the regression test", "Add a numbered test case, for example T09, to `project-docs/test-matrix.md`, so the bug cannot come back unnoticed."],
            ["Write down your sources", "Note where you searched for the cause, for example MDN or the Bootstrap docs, as the last line of the chain."]
          ],
          valmis: "Chain 1/3 in `project-docs/debugging-chains.md` runs from the tester's words to a regression test, with the fix commit linked.",
          tallenna: "`project-docs/debugging-chains.md` and the regression test row in `project-docs/test-matrix.md`, committed. The chain links go into the week 44 journal entry.",
          sanat: ["T01", "regression test"],
          apu: {
            otsikko: "Illustration: the three debugging chains",
            vinkit: [
              "Every arrow in the chain is one line you write: observation, reproduction, cause, fix commit, re-test, regression test.",
              "The chains come from different places: chain 1 from the review, chain 2 from a real bug in weeks 45–46, chain 3 from a failure in the week-47 matrix run."
            ],
            images: [["assets/virheketju.svg", "Illustration of a debugging chain. Six linked steps: 1 observation, the tester's or your own words verbatim; 2 reproduction, the steps that make it happen every time; 3 cause, the actual reason in the code or the data; 4 fix, one commit that changes it; 5 re-test, the same steps with the expected and the observed result; 6 regression test, a new numbered test case in project-docs/test-matrix.md. Below, the three chains and where they come from: chain 1 in week 44 from a review finding, chain 2 in weeks 45–46 from a real bug in the converter or the phrasebook, chain 3 in week 47 from a failing row in the matrix run. All three are written in project-docs/debugging-chains.md, with the sources you used.", "Illustration of the debugging chain, not a screenshot. The file names are the ones used in the weekly guide."]]
          }
        },
        "44-4": {
          miksi: "The device-security requirement is only partly evidenced so far, and the rest depends on a policy line only the supervisor can give.",
          osat: [
            ["Ask for the institution's line", "Ask the supervisor for the institution's policy line on the device-security evidence, row t12 in the evidence matrix."],
            ["Update the plan", "Write the answer into the open item on the Plan page, or keep it marked open if there is no answer yet."],
            ["Commit the plan", "Download technical-plan.md and commit it as `project-docs/technical-plan.md`."]
          ],
          valmis: "The plan's device-security item shows the supervisor's answer or is still marked open, and the plan is committed.",
          tallenna: "`project-docs/technical-plan.md` committed. The answer, or that it is still open, goes into the week 44 journal entry."
        }
      },
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
        code: "DEBUGGING CHAIN TEMPLATE (project-docs/debugging-chains.md)\n## Chain 1 — <short name> (week 44)\n- Observation (tester's words, verbatim — mark the role, not the name): \"…\"\n- Reproduction: steps 1-2-3 that make it happen every time\n- Cause: the actual reason in the code/data (not a guess)\n- Fix: commit <hash> — what changed and why\n- Re-test: same steps, expected vs observed result\n- Regression test: new numbered test case T<nn> added to project-docs/test-matrix.md so it cannot return silently\n- Sources: where you searched for the cause (MDN, Bootstrap docs, …)",
        test: "Give the review log to someone who was not present: they can tell which lines are the tester's words and which are your interpretation, without asking you.",
        links: []
      },
      example: "Log: \"Tester (classmate, 27 Oct): 'Where do I click to hear it?' — did not find pronunciation, expected audio.\" Interpretation: IPA is not self-explanatory; decision: add a 'how to read IPA' note (issue #23), audio stays OUT (client). Chain 1: the first pronoun tab is empty on a slow connection → cause: the tab was rendered before the fetch resolved → fix commit a1b2c3 → regression test T09 (Slow 3G reload).",
      notEnough: "\"The feedback was mostly positive and I fixed some small things\" — no verbatim findings, no decisions, no chain. Nothing here proves anyone else ever touched the site."
    },

    45: {
      type: "feature",
      termit: ["UI"],
      feature: "A visitor types 319 into the converter and gets \"Trecentodecenove\", computed by pure functions that tests check against the PDF.",
      excerpt: "how to count to ten thousand",
      connection: "Every page so far renders data; this one computes. Your rule list from PDF pages 42–45 becomes tests first, then small pure functions and a converter built without Bootstrap components. The change the client chose in week 44 ships in the same deploy from a short feature branch.",
      deliverable: "data/numbers.json (cardinals, ordinals, the paragoge/apocope rules as data where possible), js/numbers.js with pure functions and no DOM code, tests/tests.html with a small test runner you wrote yourself and expected values taken from the PDF before running, the converter UI built from scratch, the comparison section, and the week-44 feedback change deployed and linked to its finding. Debugging chain 2/3 starts from any real bug found here or in week 46.",
      why: "This is the demonstration's centrepiece: structured programming, testing discipline and the one built-by-hand view all live here. Writing the expected values BEFORE the run is what turns clicking into testing — and no model can produce them, because the rules are yours.",
      done: "On the public URL, at least 0–999 999 converts correctly including the separation and clipping rules, tests/tests.html reports 0 failed with at least 6 converter tests whose names cite PDF pages, and the feedback change is live.",
      record: "Write in the Week 45 entry: the function breakdown, the two hardest rules and how you encoded them, the test-first evidence (the commit order shows red tests before green ones), and the feedback-change link.",
      skills: ["pure functions", "unit testing", "algorithm design", "test-first"],
      tehtavat: {
        "45-1": {
          miksi: "Writing the expected values before the code runs is what turns clicking into testing, and no model can produce them, because the rules are yours.",
          osat: [
            ["Write the rule list", "Read PDF pages 42–45 and write each rule as one line in your own words: the -milla forms, the dash rule, vowel clipping and the paragoge and apocope list."],
            ["Set up the test page", "Create `tests/tests.html` and `tests/numbers.test.js` from the implementation help: a small test runner of your own, with no framework and nothing to install."],
            ["Write one or two tests per rule", "The expected string comes from the PDF, and the test name has its test case number and PDF page, for example \"T03 p43: 319 dash rule\"."],
            ["Commit while everything is red", "Open `tests/tests.html` through the local server: every test fails. Commit now. This commit proves that the tests came first."]
          ],
          valmis: "`tests/numbers.test.js` has at least 6 converter tests whose names cite PDF pages, and a commit shows them all red before the implementation.",
          tallenna: "The all-red commit and `tests/numbers.test.js`. The test-first evidence goes into the week 45 journal entry.",
          sanat: ["unit test", "T01"]
        },
        "45-2": {
          miksi: "Pure functions without DOM code are what make the converter testable, and they are the structured-programming work sample.",
          osat: [
            ["Put the number words in data", "Type `data/numbers.json` from the PDF: the cardinals, the ordinals and the paragoge and apocope rules, as data where possible."],
            ["Split the converter into functions", "`js/numbers.js` is an ES module that exports numberToIonian() and the ordinal helpers. Units, tens, hundreds and thousands are each their own function. No DOM, no fetch."],
            ["Build it rule by rule", "0–20 first, then the tens with vowel clipping, the hundreds, the mille and -milla forms, and the dash rule last."],
            ["Commit each green test", "When a test turns green, commit. When one stays red, check the PDF before the code: the data can be wrong too."],
            ["Check for debugging chain 2/3", "If a bug surprised you here, write it up as chain 2/3 in `project-docs/debugging-chains.md`. If not, note that chain 2 comes from week 46."],
            ["Prove the tests bite", "`tests/tests.html` reports 0 failed. Break one rule on purpose, watch the right test go red, and undo."]
          ],
          valmis: "`tests/tests.html` reports 0 failed, and `js/numbers.js` contains no DOM or fetch code.",
          tallenna: "`js/numbers.js` and `data/numbers.json`, committed test by test. The function breakdown and the two hardest rules go into the week 45 journal entry.",
          sanat: ["DOM"]
        },
        "45-3": {
          miksi: "The converter is the one view built without Bootstrap, and the feedback change merged from a branch shows that you can join a change to an existing version.",
          osat: [
            ["Build the user interface (UI) by hand", "A plain input with a real label, a result element with `aria-live=\"polite\"`, and your own CSS. No Bootstrap components in this one view."],
            ["Handle junk input kindly", "Decide and show what happens with an empty field, letters, a negative number and a number that is too big."],
            ["Add the comparison section", "Add the PDF's comparison content to the Numbers & Comparison page, rendered from data like the other pages."],
            ["Make a feature branch for the feedback change", "Create a short branch for the change the client chose in week 44, and link its commit to the finding's issue."],
            ["Merge and deploy", "Merge the branch into main, deploy, and check that the change is live at the public URL."]
          ],
          valmis: "On the public URL at least 0–999 999 converts correctly, junk input gets a clear message, and the feedback change is live and linked to its finding.",
          tallenna: "The Numbers page and the merge commit. The feedback-change link goes into the week 45 journal entry.",
          sanat: ["UI", "branch"]
        }
      },
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
      feature: "A beginner types \"thank\" into the phrasebook search and finds the \"thank you\" card, and switches the café dialogue between Ionian and English.",
      excerpt: "a phrasebook where a beginner can learn my café dialogue",
      connection: "Week 37's four-key word shape and the shared loader now feed the page the external tester will use in week 48: the word cards, the café dialogue and a search. The search is the first place where a visitor's input meets your rendering, so you build it to be safe. With the feature list closed, the test matrix you plan now is what week 47 runs.",
      deliverable: "data/words.json completed and data/phrases.json written (basic vocabulary p. 12, greetings and dialogues pp. 51–56), the vocabulary rendered as a responsive Bootstrap card grid, the dialogue viewer with the toggle, a search box that filters in memory and renders with textContent, the remaining test matrix planned (including the broken-network case), the LICENSE file with the licence agreed with the supervisor and the CREDITS file, and debugging chain 2/3 completed if it started in week 45 or started from a real bug this week.",
      why: "Search is where user input meets your rendering for the first time — and in plain JavaScript nothing escapes it for you. The security requirement stops being abstract the moment you choose textContent over innerHTML. And the PDF's own pages 57–58 are under construction: the site must say 'coming later' rather than invent content, exactly as the brief demands.",
      done: "A beginner can find 'thank you' by typing 'thank' on the public URL, the cards filter as you type with a live match count, the dialogues toggle between languages, searching for the T10 attack string (the img-onerror line in the test matrix) renders as harmless text, and the full test matrix (at least 12 cases) exists with the expected results filled in.",
      record: "Write in the Week 46 entry: how the filter works, why textContent makes it XSS-safe and what innerHTML would have done instead, the 'coming later' decision for pp. 57–58, the LICENSE/CREDITS commits, and the state of chain 2/3.",
      skills: ["search and filtering", "Bootstrap cards and grid", "XSS awareness", "test planning"],
      tehtavat: {
        "46-1": {
          miksi: "The phrasebook is the page the tester uses in week 48, so its data must be complete and true to the PDF.",
          osat: [
            ["Complete words.json", "Type the rest of PDF page 12 into `data/words.json` in the week-37 four-key shape."],
            ["Write phrases.json", "Type the greetings and the dialogues from pages 51–56 into `data/phrases.json` as ordered turns, each with its speaker."],
            ["Mark what comes later", "Add one honest \"coming later\" entry for the under-construction pages 57–58. Invent nothing."],
            ["Add both files to the data check", "Add the words and the phrases to `tools/check-data.html` and run it."]
          ],
          valmis: "Both files match the PDF, pages 57–58 say \"coming later\", and `tools/check-data.html` passes.",
          tallenna: "`data/words.json` and `data/phrases.json` committed. The \"coming later\" decision goes into the week 46 journal entry.",
          sanat: ["JSON"]
        },
        "46-2": {
          miksi: "The card grid finally puts week 37's four-key word shape to work, and the dialogue is what a beginner comes to learn.",
          osat: [
            ["Render one card per word", "A Bootstrap card with the word as the title, the part of speech as a muted subtitle, then the translation and the example sentence."],
            ["Lay the cards in a grid", "Use `row row-cols-1 row-cols-md-3 g-3`: three columns on a laptop, one on a phone."],
            ["Render the dialogue turns", "Show the turns of each dialogue in order, with the speaker of each line."],
            ["Add the language toggle", "One toggle switches between Ionian, English or both, and re-renders the turns from one boolean."],
            ["Check it in one hand", "Read the dialogue on your phone. It must stay readable, because this is the page a learner holds in one hand in a café."]
          ],
          valmis: "On the public URL the cards drop to one column on a phone, and the dialogue switches between Ionian and English.",
          tallenna: "The Phrasebook page committed and deployed, linked in the week 46 journal entry."
        },
        "46-3": {
          miksi: "Search is where a visitor's input meets your rendering for the first time, and textContent is what stops cross-site scripting (XSS).",
          osat: [
            ["Filter as you type", "One input with a real label, one input listener and one filter over the loaded word array, then re-render the cards."],
            ["Announce the count", "Show the number of matches in an element with `aria-live=\"polite\"`, so it is announced and not just seen."],
            ["Build every card as text", "Create every card with createElement and textContent, never with innerHTML and data you did not write."],
            ["Prove it with test case T10", "Type `<img src=x onerror=alert(1)>` into the search on the public URL: it shows as plain text and no dialog opens."],
            ["Take the screenshot", "Save it in `project-docs/evidence/week-46/`."]
          ],
          valmis: "Typing \"thank\" finds the \"thank you\" card with a live match count, and the attack string renders as harmless text.",
          tallenna: "The screenshot in `project-docs/evidence/week-46/`. How the filter works and why textContent is safe go into the week 46 journal entry.",
          sanat: ["XSS", "T01"]
        },
        "46-4": {
          miksi: "The expected results must exist before week 47 runs them, and the licence files make the site's terms clear before the release.",
          osat: [
            ["Fill the matrix to at least 12 cases", "In `project-docs/test-matrix.md`, about a third each for normal use, limits and error cases, with the expected result written first."],
            ["Include the required cases", "The broken-network fetch case, the converter's junk inputs and the search attack string each get their own row."],
            ["Commit LICENSE", "Use the licence the supervisor agreed in the plan's open items."],
            ["Commit CREDITS", "List the fonts, Bootstrap and Bootstrap Icons with their versions, and the Ionian material's own terms of use."],
            ["Check debugging chain 2/3", "Complete chain 2/3 if it started in week 45, or start it from a real bug found this week, in the same format as chain 1."]
          ],
          valmis: "The test matrix has at least 12 cases with the expected results filled in, LICENSE and CREDITS are committed, and chain 2/3 is written up.",
          tallenna: "`project-docs/test-matrix.md`, `LICENSE` and `CREDITS` committed. The state of chain 2/3 goes into the week 46 journal entry."
        }
      },
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
      example: "data/words.json: 38 entries in the four-key shape; data/phrases.json: 3 dialogues, every line traceable to a PDF page, comingLater naming the two under-construction topics. Search shows '3 matches' and the grid drops to one column on a phone. LICENSE committed with the licence agreed with the supervisor; CREDITS lists the Inter font, Bootstrap 5.3.3, Bootstrap Icons and the Ionian material's terms.",
      notEnough: "A search that only matches exact full words, no XSS test, and dialogue text copy-pasted with invented 'improvements' the PDF never wrote. The tester in week 48 will type one lowercase word — and the demonstration watches what happens."
    },

    47: {
      type: "laatu",
      termit: ["refactor"],
      feature: "A learner can use every page with the keyboard alone, every page validates, and every test case in the matrix has a recorded, dated result.",
      excerpt: "Accuracy matters more than volume.",
      connection: "Every must-have page now exists; this week proves that the site holds. The test matrix planned in week 46 gets its observed results, the third debugging chain comes from a real failure, and the accessibility, validation and security passes make the site ready for an outside tester in week 48.",
      deliverable: "The test matrix executed (at least 12 cases, expected vs observed, thirds covered), debugging chain 3/3 plus chains 1–2 compiled into demonstration shape, Lighthouse before/after pairs for accessibility and performance, keyboard navigation and contrast fixes, every page through the W3C HTML validator with the findings fixed, a review of what you load from the CDN, a no-secrets check, and a refactor commit series with green tests in between.",
      why: "A claim without a recorded run is an opinion. The demonstration assesses testing as a discipline: expected first, observed second, failures documented — and the accessibility pass is what makes the site usable for learners who never touch a mouse.",
      done: "The matrix has every row filled with observed results and dates, three complete chains are in debugging-chains.md, the after-Lighthouse accessibility score is recorded next to its before-pair, every page validates without errors, and tests/tests.html plus tools/check-data.html are both green on main.",
      record: "Write in the Week 47 entry: the failures the matrix caught (there should be some — a matrix that catches nothing was too soft), the chain 3/3 links, the Lighthouse pairs, what the validator found, and what the refactor changed structurally.",
      skills: ["test execution", "accessibility", "refactoring", "security review"],
      tehtavat: {
        "47-1": {
          miksi: "A claim without a recorded run is an opinion: expected first, observed second, failures documented.",
          osat: [
            ["Run every test case", "Run each row of `project-docs/test-matrix.md` against the public URL, not against your local copy."],
            ["Fill in the observed column", "Write the observed result and the date on every row, next to the expected result you wrote earlier."],
            ["Keep the failures", "Mark every failing row and keep it: it is material for chain 3/3 and proof that your matrix bites."],
            ["Check both test pages", "`tests/tests.html` and `tools/check-data.html` are both green on main."]
          ],
          valmis: "Every row has an observed result and a date, the failures are marked, and both test pages are green on main.",
          tallenna: "`project-docs/test-matrix.md` committed. The failures the matrix caught go into the week 47 journal entry."
        },
        "47-2": {
          miksi: "The debugging requirement is assessed on three complete chains, and only one shared format shows that none of them stops at \"fixed it\".",
          osat: [
            ["Pick the bug for chain 3", "Take a real failure from the matrix run or a finding left over from the review."],
            ["Write the whole chain", "Observation, reproduction, cause, fix commit, re-test and regression test, each with its link."],
            ["Compile chains 1–3", "Put all three chains into `project-docs/debugging-chains.md` in the same format, with no gaps."],
            ["Check the sources", "Every chain names where you searched for the cause, for example MDN or the Bootstrap documentation."]
          ],
          valmis: "`project-docs/debugging-chains.md` has three complete chains in the same format, each ending in a regression test in the matrix.",
          tallenna: "`project-docs/debugging-chains.md` committed. The chain 3/3 links go into the week 47 journal entry.",
          sanat: ["regression test"],
          apu: {
            otsikko: "Illustration: the three debugging chains",
            images: [["assets/virheketju.svg", "Illustration of a debugging chain. Six linked steps: 1 observation, the tester's or your own words verbatim; 2 reproduction, the steps that make it happen every time; 3 cause, the actual reason in the code or the data; 4 fix, one commit that changes it; 5 re-test, the same steps with the expected and the observed result; 6 regression test, a new numbered test case in project-docs/test-matrix.md. Below, the three chains and where they come from: chain 1 in week 44 from a review finding, chain 2 in weeks 45–46 from a real bug in the converter or the phrasebook, chain 3 in week 47 from a failing row in the matrix run. All three are written in project-docs/debugging-chains.md, with the sources you used.", "Illustration of the debugging chain, not a screenshot. The file names are the ones used in the weekly guide."]]
          }
        },
        "47-3": {
          miksi: "The accessibility pass makes the site usable for learners who never touch a mouse, and the before/after pair is the work sample.",
          osat: [
            ["Record the before-scores", "Run Lighthouse (Accessibility and Performance) on the public URL one page at a time, and save the screenshots in `project-docs/lighthouse/`."],
            ["Validate every page", "Run each page through validator.w3.org and paste the findings into `project-docs/html-validation.md` before you fix them."],
            ["Do the keyboard pass", "Put the mouse away and Tab through every page: the navbar, the tabs, the accordion, the converter and the search. Focus is always visible."],
            ["Fix what you found", "Keyboard order, focus, contrast (check the gold texts), alt texts, labels, heading levels and the validator's findings, such as duplicate ids."],
            ["Record the after-scores", "Deploy, run Lighthouse and the validator again, and save the after-results next to the before-results."]
          ],
          valmis: "Every page has a Lighthouse before/after pair and passes the W3C HTML validator without errors.",
          tallenna: "`project-docs/lighthouse/` and `project-docs/html-validation.md` committed. The Lighthouse pairs and what the validator found go into the week 47 journal entry."
        },
        "47-4": {
          miksi: "The security review proves that you know what runs on your pages, and the tests are what make a refactor safe.",
          osat: [
            ["Review what you load from the CDN", "Bootstrap is pinned to an exact version with its integrity hash, and you can say what each external file does, including the icons and the font."],
            ["Check for secrets", "Search the repository for words like key, token and password, and confirm that nothing secret is committed."],
            ["Confirm that the search is still safe", "Type the attack string into the search on the deployed site once more: it still shows as plain text."],
            ["Write the security review", "Record the dependencies and both checks in `project-docs/security-review.md`."],
            ["Refactor in small commits", "Rename the unclear, extract the duplicated, delete the dead code, and reload `tests/tests.html` between commits. If a test goes red, stop until it is green."]
          ],
          valmis: "`project-docs/security-review.md` lists every external file with its version, no secrets are found, and the refactor commits have green tests in between.",
          tallenna: "`project-docs/security-review.md` and the refactor commit series. What the refactor changed structurally goes into the week 47 journal entry.",
          sanat: ["CDN", "refactor"]
        }
      },
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
      termit: ["RC", "LAN"],
      feature: "A stranger gets the project running from your README alone, and an outside tester learns the café dialogue from v1.0 without your help.",
      excerpt: "a README good enough that another person can get the project running without asking me anything.",
      connection: "The site is complete and tested; now it meets a clean environment and a person who owes you nothing. A fresh clone tests your README and an outside tester tests the phrasebook, and what they stumble on you fix before v1.0. The released version and its linked evidence are what week 49 demonstrates.",
      deliverable: "A content-frozen release candidate, a clean-environment run (a fresh clone on another machine, README steps only), the external user test with the tester's words recorded verbatim and separated from your interpretation, every hesitation turned into an instruction fix, the deployment-path description built from your own artefacts (t11), the finished README and user documentation, and the v1.0 tag + GitHub release.",
      why: "The brief's final requirement is exactly this: someone else, unaided. An instruction verified only by its author is unverified — and the demonstration's release requirement needs the clean-environment proof, not a promise.",
      done: "The tester reached and read the café dialogue using only the site and your written instructions — no spoken help; the fresh clone runs with the README steps only; v1.0 is tagged, released and live at the public URL.",
      record: "Write in the Week 48 entry: the clean-environment result, the tester's words (verbatim, separated), the instruction fixes their hesitations produced, and the v1.0 release link.",
      skills: ["release management", "user testing", "technical writing", "clean-environment verification"],
      tehtavat: {
        "48-1": {
          miksi: "The release candidate is the exact version that the clean-environment test and the user test check.",
          osat: [
            ["Freeze the content", "From now on only blocking fixes go in. Write this rule at the top of `project-docs/release-notes-v1.0.md`."],
            ["Tag the release candidate", "Tag the release candidate (RC), the version finished enough to be tested as if it were the release, for example `v1.0-rc1`, and push the tag."],
            ["Check the public URL", "Every page opens from the public URL with a clean DevTools console."]
          ],
          valmis: "The release candidate tag is pushed, and the public URL serves it with a clean console.",
          tallenna: "The RC tag in the repository, linked in the week 48 journal entry.",
          sanat: ["RC"]
        },
        "48-2": {
          miksi: "An instruction verified only by its author is unverified, and the release requirement needs the clean-environment proof.",
          osat: [
            ["Clone into a clean place", "Run `git clone` on a machine or an account that has never run the project."],
            ["Follow the README literally", "Every command you type that is not in the README goes into the README."],
            ["Explain the local server", "The README says why file:// does not work and gives two ways to serve the folder: Live Server and `python3 -m http.server`."],
            ["Fix the README, not your memory", "Commit every README fix and run the steps again until they work."]
          ],
          valmis: "The fresh clone runs with the README steps only.",
          tallenna: "The clean-clone notes and the README fix commits. The clean-environment result goes into the week 48 journal entry."
        },
        "48-3": {
          miksi: "The brief's final requirement is someone else, unaided: the tester shows whether the site and your instructions work without you.",
          osat: [
            ["Write the tester's task first", "One written goal and no hints: \"Using this site, learn to order in the café dialogue.\" If the task needs explaining, fix the task."],
            ["Choose the tester", "A tester the supervisor approved, if possible not the week-44 one. In the repository the tester appears by role, for example tester B."],
            ["Watch in silence", "Note the exact moment and place of every hesitation."],
            ["Record their words", "In `project-docs/user-test-2026-w48.md`, the tester's words verbatim on one side and your interpretation on the other, with the role and the date."],
            ["Turn hesitations into fixes", "Every hesitation becomes an instruction or interface fix, committed and linked to the finding."],
            ["Ask the last question", "Ask \"Could you have done it without me in the room?\" and fix what the answer points to."]
          ],
          valmis: "The tester reached and read the café dialogue using only the site and your written instructions, and every hesitation has a fix.",
          tallenna: "`project-docs/user-test-2026-w48.md` and the fix commits. The tester's words and the fixes they produced go into the week 48 journal entry."
        },
        "48-4": {
          miksi: "The deployment path is the network work sample in your own images, and v1.0 is what the client asked for by 4 December.",
          osat: [
            ["Describe the deployment path", "In `project-docs/deployment-path.md`, show localhost → your phone's hotspot, a local area network (LAN) → GitHub Pages over HTTPS, with your own screenshots such as the week-36 phone screenshot."],
            ["Tag v1.0", "Apply the fixes, then run `git tag v1.0` and `git push --tags`."],
            ["Publish the release", "Write the GitHub release notes: what is in and what is \"coming later\". Check that the public URL serves the tagged version."],
            ["Check the credit and the terms", "The author credit, LICENSE, CREDITS and the terms of use are visible one last time."],
            ["Start the linked evidence matrix", "Create `project-docs/evidence-matrix.md`: one row per requirement with its code, the work-sample link and the week. Fill in the rows whose work samples already exist."]
          ],
          valmis: "v1.0 is tagged, released and live at the public URL, `deployment-path.md` uses your own screenshots, and `evidence-matrix.md` exists.",
          tallenna: "`project-docs/deployment-path.md`, `project-docs/release-notes-v1.0.md`, `project-docs/evidence-matrix.md` and the v1.0 release. The release link goes into the week 48 journal entry.",
          sanat: ["LAN", "tag"]
        }
      },
      help: {
        title: "The user test script and the release checklist",
        tree: "project-docs/\n├─ user-test-2026-w48.md   ← tester's words / your interpretation\n├─ deployment-path.md      ← t11: your own screenshots\n└─ release-notes-v1.0.md\nREADME.md                  ← clone → start a local server → open http://localhost:…",
        actions: [
          "Write the tester's task BEFORE the session: one goal, zero hints. If the task needs explaining, the task failed — fix it first.",
          "Clean environment: git clone into a new folder and follow the README top to bottom. Every command you type that is not in the README goes INTO the README.",
          "The README must say why file:// does not work and give two ways to serve the folder (Live Server, python3 -m http.server). That single paragraph is what makes the project runnable by a stranger.",
          "During the test: silence. Note the exact moment and place of every hesitation.",
          "v1.0: git tag v1.0 && git push --tags, then a GitHub release with the notes. Verify the public URL serves the tagged version."
        ],
        code: "RELEASE CHECKLIST v1.0\n[ ] content frozen — only blocking fixes after the RC\n[ ] fresh clone runs with the README steps only (local server included)\n[ ] every page opens from the public URL with a clean DevTools console\n[ ] user test done: words verbatim, interpretation separate, role + date\n[ ] every hesitation → an instruction or UI fix, committed\n[ ] deployment-path.md uses MY screenshots (LAN, Pages URL, HTTPS)\n[ ] LICENSE + CREDITS + terms of use visible\n[ ] v1.0 tagged, release notes published, site live\n[ ] project-docs/evidence-matrix.md started: one row per requirement",
        test: "Ask the tester afterwards: 'Could you have done it without me in the room?' If the answer needs a footnote, there is one more fix to make.",
        links: [["GitHub Docs: About releases", "https://docs.github.com/en/repositories/releasing-projects-on-github"]]
      },
      example: "Clean clone: failed at step 2 — the README said \"open index.html\" and every fetch died on file:// → the README now names Live Server and python3 -m http.server. Tester (role: student from another group, 26 Nov): \"Which one is the waiter?\" → speaker labels made bolder, commit d4e5f6. v1.0 released with notes listing the two 'coming later' topics.",
      notEnough: "A v1.0 tag on an untested build, a README verified only by the person who wrote it, and 'my friend liked it' as the user test. The demonstration will ask for the tester's words — have them."
    },

    49: {
      type: "naytto",
      feature: "An assessor reaches the work sample for any of the 44 requirements in seconds, and your 8–10 minute demo is rehearsed and handed over on Friday 4 December.",
      excerpt: "By the fourth of December I want version 1.0 at a public URL.",
      connection: "Nothing new is built: your work samples have grown week by week since week 36. This week you link each of the 44 requirements to its exact work sample, close the journal and rehearse the demo, so an assessor finds every sample in seconds rather than minutes.",
      deliverable: "project-docs/evidence-matrix.md fully linked (a commit, file, screenshot or memo per requirement), the final project journal and AI log committed, the demo rehearsed with a timer, the self-assessment written, and the handover done on Friday 4 Dec.",
      why: "Competence that cannot be found cannot be assessed. The difference between a good project and a good demonstration is thirty minutes of exact linking — and a rehearsed demo that fits its slot.",
      done: "Every row in project-docs/evidence-matrix.md has a working link, the journal covers all 11 weeks, the demo ran inside 10 minutes in rehearsal, and the handover package is complete on Friday.",
      record: "Write in the Week 49 entry: the demo structure with timings, what the self-assessment says about your weakest and strongest requirement, and the final commit hash.",
      skills: ["evidence linking", "demonstration", "self-assessment"],
      tehtavat: {
        "49-1": {
          miksi: "Competence that cannot be found cannot be assessed, so every requirement needs a link an assessor can open in seconds.",
          osat: [
            ["Finish the evidence matrix file", "Give each of the 44 rows in `project-docs/evidence-matrix.md` its requirement code, the exact work-sample link and the week."],
            ["Use exact locations", "A commit hash, a file path, a screenshot or a memo section. \"It is in the repo\" is not a location. One work sample may serve several rows."],
            ["Tick your own checklist", "Tick each row in the Evidence matrix view when its link works. The ticks are your own memory, not the evidence."],
            ["Test three random rows", "Pick three rows at random and reach each work sample in under 15 seconds. If one takes longer, make its link more exact."]
          ],
          valmis: "All 44 rows in `project-docs/evidence-matrix.md` have a working, exact link.",
          tallenna: "`project-docs/evidence-matrix.md` committed. The final commit hash goes into the week 49 journal entry."
        },
        "49-2": {
          miksi: "The journal, the AI log and the self-assessment show how you worked and how well you judge your own work.",
          osat: [
            ["Download the journal and the AI log", "Download both from this site and commit them as `project-docs/project-journal.md` and `project-docs/AI-log.md`."],
            ["Read the AI log once more", "Every significant use has a verification and a takeaway."],
            ["Check that the journal covers 11 weeks", "Every work week has its three main fields filled in."],
            ["Write the self-assessment", "Honest and anchored in the requirements: where is your evidence thinnest, and where is it strongest? Commit it in `project-docs/`."]
          ],
          valmis: "The journal covers all 11 weeks, the AI log is committed with every entry verified, and the self-assessment is committed.",
          tallenna: "`project-docs/project-journal.md`, `project-docs/AI-log.md` and the self-assessment in `project-docs/`. What it says about your weakest and strongest requirement goes into the week 49 journal entry."
        },
        "49-3": {
          miksi: "A rehearsed demo that fits its slot is the difference between a good project and a good demonstration.",
          osat: [
            ["Build the demo", "8–10 minutes: the site working (converter and phrasebook search), one technical decision you defend, one debugging chain, the Git history and your verified AI use."],
            ["Open everything first", "Open every tab and file you will show before the demo starts, including `tests/tests.html`, the comparison memo and the evidence matrix."],
            ["Rehearse twice with a timer", "Cut until there is time left for questions."],
            ["Hand over on Friday 4 December", "Deliver the public URL, the repository, the journal, the evidence matrix and the demo."]
          ],
          valmis: "The demo ran inside 10 minutes in both rehearsals, and the handover package is delivered on Friday 4 December.",
          tallenna: "The demo structure with its timings goes into the week 49 journal entry."
        }
      },
      help: {
        title: "The demo structure that fits ten minutes",
        tree: "DEMO 8–10 min\n1. The site live (2 min): converter 319, phrasebook search, a pronoun table\n2. One decision defended (2 min): JSON + runtime fetch, and Bootstrap — why, what it cost\n3. One debugging chain (2 min): observation → regression test, on screen\n4. Git history (1 min): tags v0.5 → v1.0, the feedback-change commit\n5. AI use (1 min): one log entry — asked, verified, tested, learned\n6. Buffer + questions (2 min)",
        actions: [
          "Rehearse against the clock twice; cut until section 6 exists.",
          "Open every tab and file you will show BEFORE the demo starts — including tests/tests.html and the comparison memo.",
          "Have the matrix open as your own map — when asked about a requirement, you navigate in one click."
        ],
        code: "HANDOVER CHECKLIST\n[ ] all 44 rows in project-docs/evidence-matrix.md link to an exact location\n[ ] project journal: 11 weeks, 3 main fields each\n[ ] AI log committed, every entry verified\n[ ] demo rehearsed ≤10 min, twice\n[ ] self-assessment written and committed\n[ ] public URL + repo link delivered to the assessor",
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
        ["Ulkopuolinen testaaja", "Ei tunne kieltä. Testaa v0.5:n viikolla 44; viikon 48 käyttäjätestin tekee mieluiten eri henkilö pelkän kirjallisen ohjeen varassa. Havainnot kirjataan testaajan omilla sanoilla; repositoryssa testaaja näkyy vain roolina (testaaja A, B), nimet tarvittaessa ohjaajalle Teamsissa."]
      ],
      tarkistuspisteet: [
        [36, "Toimeksianto ja ympäristö", "Kysymyslista vastauksineen, julkinen repo tietosuojatarkistuksineen, ensideploy julkisessa osoitteessa, suunnitelmaluonnos ja P0-backlog"],
        [38, "Vertailumuistio", "Bootstrap + yksi muu kirjasto + ei kirjastoa -vaihtoehto, omat mittaukset (siirretty KB, Lighthouse), perusteltu päätös ja keskustelu kirjattu"],
        [40, "v0.5 ennen lomaa", "Neljä sisältönäkymää tuotannossa, v0.5-tagi, sitova sopimus katselmoinnista (roolit + päivä) repositoryssa"],
        [44, "Katselmointi", "Testaajan sanat erillään tulkinnasta, päätös jokaisesta havainnosta, backlog ajan tasalla, ketju 1/3 valmis, t12:n avoin asia käsitelty"],
        [47, "Testit ja laatu", "Testimatriisi ajettu (≥12), ketjut 1–3 valmiit, Lighthouse ennen/jälkeen -parit, HTML-validointi, CDN-riippuvuuksien tarkistus ja salaisuustarkistus"],
        [48, "Julkaisu", "Puhtaan ympäristön ajo, käyttäjätesti kirjattuna testaajan omilla sanoilla erillään tulkinnasta, julkaisupolun kuvaus omista artefakteista, v1.0-release"],
        [49, "Näyttö", "44 vaatimuksen täsmälinkit tiedostossa project-docs/evidence-matrix.md (perustettu viikolla 48), päiväkirja 11 viikolta, demo harjoiteltu, itsearviointi"]
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
        t10: ["36", "Puhelimen verkkoyhteyden jako tietokoneelle (hotspot), ensideploy sen kautta ja julkisen osoitteen testaus puhelimella; tietoturvahuomiot (vahva salasana, oma yhteys koulun verkon sijaan) kirjattu"],
        t11: ["48", "Julkaisupolun kuvaus omista artefakteista: localhost → LAN → Pages/CDN/HTTPS"],
        t12: ["36, 44, 47", "Ympäristön suojaus (GitHubin 2FA ja julkisen repon yksityisyystarkistus), tarkistuspiste ja riippuvuusaudit; oppilaitoksen linjaa vaativa osa on avoin asia"],
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
        s12: ["36–49", "Commit-historia, tagit (v0.5, v1.0) ja palautemuutoksen feature-branch"],
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
        arviointiin: "Projektipäiväkirja, testimatriisi, virheenkorjausketjut, muistiot, AI-loki ja linkitetty näyttömatriisi project-docs/evidence-matrix.md project-docs-kansiossa.",
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
        ["Näyttömatriisi", "project-docs/evidence-matrix.md: 44 vaatimuksen täsmälinkit työnäytteisiin (tunnus, linkki, viikko)"]
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
