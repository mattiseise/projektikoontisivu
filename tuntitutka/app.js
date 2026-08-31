/*
 * Näyttöprojekti – geneerinen moottori.
 *
 * TÄTÄ TIEDOSTOA EI MUOKATA PROJEKTIKOHTAISESTI.
 * Kaikki projektikohtainen sisältö tulee sisalto.js:stä (window.NAYTTOPROJEKTI).
 * Jos jotain pitää muokata tässä, se on merkki siitä että sisalto.js:n
 * skeemaan tarvitaan uusi kenttä — korjaa skilliin, ei yksittäiseen projektiin.
 */
(function () {
  "use strict";

  const P = window.NAYTTOPROJEKTI;
  if (!P) {
    console.error("sisalto.js puuttuu tai ei latautunut ennen app.js:ää.");
    return;
  }

  /* ---------- käyttöliittymän tekstit ----------
   * Oletukset ovat suomeksi. Projekti voi korvata minkä tahansa avaimen
   * sisalto.js:n `tekstit`-objektista — näin sama moottori palvelee myös
   * muunkielistä sivustoa ilman projektikohtaisia muutoksia tähän tiedostoon.
   */
  const UI_OLETUS = {
    briefExcerptLabel: "Toimeksianto tässä vaiheessa",
    briefFullLink: "Koko toimeksianto ↑",
    briefAnchor: "#toimeksianto",
    weekKicker: "Viikon kärki",
    connectionLabel: "Näin viikko vie projektia eteenpäin:",
    deliverableLabel: "Tällä viikolla valmistuu",
    whyLabel: "Miksi tämä tehdään",
    skillsLabel: "Viikon tekniikka",
    resourcesAria: "Tämän viikon pohjat ja työkalut",
    resourcesLabel: "Tarvitset nämä:",
    helpFallbackTitle: "Tarvitsen toteutusapua",
    helpTreeLabel: "Luo tämä rakenne",
    helpActionsLabel: "Kytke näin",
    helpCodeLabel: "Käytä tätä työpohjaa tai tarkistuslistaa",
    helpTestLabel: "Tarkistustesti:",
    stepsCount: (n) => `${n} askelta`,
    stepsLead: "Tee näin, yksi askel kerrallaan",
    doneLabel: "Valmis kun:",
    exampleLabel: "Esimerkki odotetusta tarkkuudesta · älä kopioi sisältöä",
    notEnoughLabel: "Tämä ei vielä riitä",
    evidenceLabel: "Työnäyte Git-repositoryyn ennen rastia:",
    journalPrompt: "Kirjoita tähän ennen kuin rastitat viikon valmiiksi",
    journalHeading: (w) => `Projektipäiväkirja · viikko ${w}`,
    journalRecordLabel: "Tallenna nämä tiedot:",
    journalWorkLabel: "Mitä teit ja miten?",
    journalReasonLabel: "Miksi teit näin?",
    journalEvidenceLabel: "Työnäytteen täsmällinen sijainti",
    journalNextLabel: "Seuraava pieni askel",
    journalWorkHint: "Kerro konkreettiset tiedostot, ratkaisut, tehtävät ja testit.",
    journalReasonHint: "Kerro päätös, vaihtoehdot, perustelu ja mitä opit.",
    journalEvidenceHint: (w) => `Esim. commit-linkki, issue #12, testi T05 tai project-docs/evidence/week-${w}/kuva.png`,
    journalNextHint: "Mikä on ensimmäinen asia, josta jatkat seuraavalla kerralla?",
    exportWeekButton: "Lataa vain tämä viikko (.md)",
    exportJournalButton: "Lataa koko projektipäiväkirja",
    journalComplete: "Pääkentät kirjattu",
    journalPartial: "Kesken – täydennä 3 pääkenttää",
    journalEmpty: "Ei vielä kirjattu",
    journalReminder: "Muista projektipäiväkirjan 3 pääkenttää",
    journalSummary: (done, total) => `${done} / ${total} viikkoa kirjattu`,
    weekFallback: (w) => `Viikko ${w}`,
    weekAria: (w, phase) => `Viikko ${w}${phase ? `, vaihe ${phase}` : ""}`,
    weekAriaHoliday: (w, name) => `Viikko ${w}, ${name}`,
    holidayFallback: "loma",
    weekNavSmall: (w, phase) => (phase ? `${phase} · Viikko ${w}` : `Viikko ${w}`),
    progressCopy: (done, total) => `${done} / ${total} tehtävää valmiina`,
    continueNext: "Jatka seuraavasta tehtävästä",
    continueStart: "Aloita projekti",
    continueDone: "Kaikki tehtävät valmiina",
    planNotStarted: "Ei vielä aloitettu",
    planPartial: (done, total) => `Kesken: ${done} / ${total} kenttää täytetty`,
    planDone: "Suunnitelma valmis ✓",
    planEmptyValue: "_(ei vielä täytetty)_",
    dateLocale: "fi-FI",
    mdJournalTitle: (name) => `${name} – projektipäiväkirja`,
    mdJournalLead: (path) => `Tallenna tämä tiedosto polkuun \`${path}\` ja tee commit jokaisen viikon lopussa.`,
    mdWeekHeading: (w, title) => `## Vko ${w} – ${title}`,
    mdWeekFeature: "Viikon kärki:",
    mdWeekDeliverable: "Viikon tuotos:",
    mdWork: "### Mitä tein ja miten?",
    mdReason: "### Miksi tein näin?",
    mdEvidence: "### Työnäytteen täsmällinen sijainti",
    mdNext: "### Seuraava pieni askel",
    mdNotRecorded: "Ei vielä kirjattu.",
    mdWeekFile: (w) => `projektipaivakirja-vko-${w}.md`,
    mdWeekFileTitle: (name, w) => `# ${name} – viikko ${w}`,
    aiLogHeading: "## AI-loki",
    aiLogEmpty: "Ei merkintöjä.",
    aiLogFile: "AI-loki.md",
    aiLogFileTitle: (name) => `# ${name} – AI-loki`,
    aiLogQuestion: "Tehtävä tai kysymys:",
    aiLogUsed: "Käytin, muutin tai hylkäsin:",
    aiLogChecked: "Tarkistus ja oppi:",
    aiLogReference: "Aineistoviite:",
    aiLogNoReference: "ei viitettä",
    aiLogPrivacyOk: "Tietosuojavahvistus: En syöttänyt henkilötietoja, salaisuuksia tai luottamuksellista aineistoa.",
    aiLogPrivacyMissing: "Tietosuojavahvistus: vahvistamatta (vanha merkintä)",
    logCount: (n) => `${n} ${n === 1 ? "merkintä" : "merkintää"}`,
    logEmptyState: "Ei merkintöjä vielä.",
    logReferencePrefix: "Aineisto:",
    logRemove: "Poista",
    logRemoveAria: "Poista lokimerkintä",
    resetConfirm: (plan, files) => `Nollataanko tehtävät, projektipäiväkirja${plan}, rastit ja AI-loki tästä selaimesta? Lataa projektipäiväkirja${files} ensin, jos haluat säilyttää vastaukset.`
  };
  const UI = Object.assign({}, UI_OLETUS, P.tekstit || {});
  const t = (key, ...args) => {
    const value = UI[key];
    return typeof value === "function" ? value(...args) : value;
  };

  const SLUG = P.slug;
  const STORAGE_KEY = `${SLUG}-progress-v1`;
  const EVIDENCE_KEY = `${SLUG}-evidence-v1`;
  const LOG_KEY = `${SLUG}-ai-log-v1`;
  const JOURNAL_KEY = `${SLUG}-journal-v1`;
  const PLAN_KEY = `${SLUG}-suunnitelma-v1`;

  const weekFraming = P.kehykset || {};
  const weekGuidance = P.viikkoOhjeet || {};
  const plan = P.suunnitelma || null;
  const journalCfg = P.paivakirja || {};
  const holidayWeeks = new Set((P.lomaViikot || []).map(Number));
  const weekList = (P.viikot || []).map(Number);
  const phases = P.vaiheet || [];
  const years = Array.isArray(P.vuosi) ? P.vuosi.map(Number) : [Number(P.vuosi)];

  const taskBoxes = [...document.querySelectorAll("[data-task]")];
  const evidenceBoxes = [...document.querySelectorAll("[data-evidence]")];
  const weekCards = [...document.querySelectorAll(".week-card")];

  /* ---------- tallennus ---------- */

  function readStorage(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch (_) { return fallback; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (_) { /* Sivusto toimii myös ilman pysyvää tallennusta. */ }
  }

  function escapeText(value) {
    const div = document.createElement("div");
    div.textContent = value == null ? "" : value;
    return div.innerHTML;
  }

  /* ---------- viikkokorttien rikastus sisalto.js:n datalla ---------- */

  function enhanceWeekCards() {
    weekCards.forEach((card) => {
      const guide = weekGuidance[card.dataset.week];
      if (!guide) return;
      const content = card.querySelector(".week-content");
      const firstTask = content?.querySelector("label");
      const lesson = content?.querySelector(".lesson-instructions");
      const evidence = content?.querySelector(".evidence");
      if (!content || !firstTask || !lesson || !evidence) return;

      const framing = weekFraming[guide.type] || Object.values(weekFraming)[0] || {};
      const context = document.createElement("section");
      context.className = "assignment-context";
      const excerptBlock = guide.excerpt ? `
          <div class="assignment-context-heading"><span>${escapeText(t("briefExcerptLabel"))}</span><a href="${t("briefAnchor")}">${escapeText(t("briefFullLink"))}</a></div>
          <p class="assignment-excerpt">“${guide.excerpt}”</p>` : "";
      context.innerHTML = `
          <p class="feature-statement"><span>${framing.kicker || t("weekKicker")}</span>${guide.feature}</p>
          ${excerptBlock}
          <p class="game-connection"><strong>${framing.connectionLabel || t("connectionLabel")}</strong> ${guide.connection}</p>
          <div class="week-purpose-grid">
            <article><span>${framing.deliverableLabel || t("deliverableLabel")}</span><p>${guide.deliverable}</p></article>
            <article><span>${escapeText(t("whyLabel"))}</span><p>${guide.why}</p></article>
          </div>
          <p class="skill-tags-label">${framing.skillsLabel || t("skillsLabel")}</p>
          <ul class="skill-tags" aria-label="${escapeText(framing.skillsLabel || t("skillsLabel"))}">${(guide.skills || []).map((skill) => `<li>${escapeText(skill)}</li>`).join("")}</ul>`;
      content.insertBefore(context, firstTask);

      const steps = guide.steps || [];
      lesson.querySelector(".lesson-label").innerHTML = `<span>${escapeText(t("stepsCount", steps.length))}</span> ${escapeText(t("stepsLead"))}`;
      lesson.querySelector("ol").innerHTML = steps.map(([title, description]) => `<li><strong>${title}</strong>${description}</li>`).join("");
      lesson.querySelector(".checkpoint").innerHTML = `<strong>${escapeText(t("doneLabel"))}</strong> ${guide.done}`;

      if (guide.resources?.length) {
        const resources = document.createElement("nav");
        resources.className = "resource-actions";
        resources.setAttribute("aria-label", t("resourcesAria"));
        resources.innerHTML = `<strong>${escapeText(t("resourcesLabel"))}</strong>${guide.resources.map(([label, href, download]) => `<a href="${href}"${download ? " download" : ""}>${label}</a>`).join("")}`;
        lesson.insertAdjacentElement("beforebegin", resources);
      }

      if (guide.help) {
        const help = document.createElement("details");
        help.className = "impl-help";
        const helpLinks = guide.help.links?.length ? `<p class="impl-help-links">${guide.help.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${escapeText(label)} ↗</a>`).join("")}</p>` : "";
        const helpImages = guide.help.images?.length ? `<div class="impl-help-images">${guide.help.images.map(([src, alt, caption]) => `<figure><img src="${src}" alt="${escapeText(alt)}" loading="lazy">${caption ? `<figcaption>${escapeText(caption)}</figcaption>` : ""}</figure>`).join("")}</div>` : "";
        help.innerHTML = `
          <summary>${escapeText(P.apuOtsikko || t("helpFallbackTitle"))} <small>${escapeText(guide.help.title)}</small></summary>
          <div class="impl-help-content">
            <div class="impl-help-tree"><p class="help-label">${escapeText(t("helpTreeLabel"))}</p><pre><code>${escapeText(guide.help.tree)}</code></pre></div>
            <div class="impl-help-actions"><p class="help-label">${escapeText(t("helpActionsLabel"))}</p><ol>${guide.help.actions.map((action) => `<li>${escapeText(action)}</li>`).join("")}</ol></div>
            <div class="impl-help-code"><p class="help-label">${escapeText(t("helpCodeLabel"))}</p><pre><code>${escapeText(guide.help.code)}</code></pre></div>
            <p class="impl-help-test"><strong>${escapeText(t("helpTestLabel"))}</strong> ${escapeText(guide.help.test)}</p>
            ${helpImages}
            ${helpLinks}
          </div>`;
        lesson.insertAdjacentElement("afterend", help);
      }

      const expectations = document.createElement("div");
      expectations.className = "expectation-grid";
      expectations.innerHTML = `
        <article class="expected-example"><p class="expectation-label">${escapeText(t("exampleLabel"))}</p><p>${guide.example}</p></article>
        <article class="not-enough"><p class="expectation-label">${escapeText(t("notEnoughLabel"))}</p><p>${guide.notEnough}</p></article>`;
      content.insertBefore(expectations, evidence);

      const week = card.dataset.week;
      const hints = journalCfg.vihjeet || {};
      const journal = document.createElement("section");
      journal.className = "week-journal";
      journal.dataset.weekJournal = week;
      journal.innerHTML = `
        <div class="journal-heading">
          <div><p class="expectation-label">${escapeText(t("journalPrompt"))}</p><h4>${escapeText(t("journalHeading", week))}</h4></div>
          <span data-journal-status>${escapeText(t("journalEmpty"))}</span>
        </div>
        <p class="journal-record"><strong>${escapeText(t("journalRecordLabel"))}</strong> ${guide.record}</p>
        <div class="journal-fields">
          <label>${escapeText(t("journalWorkLabel"))}
            <textarea rows="4" data-journal-field="work" placeholder="${escapeText(hints.work || t("journalWorkHint"))}"></textarea>
          </label>
          <label>${escapeText(t("journalReasonLabel"))}
            <textarea rows="4" data-journal-field="reason" placeholder="${escapeText(hints.reason || t("journalReasonHint"))}"></textarea>
          </label>
          <label>${escapeText(t("journalEvidenceLabel"))}
            <input type="text" data-journal-field="evidence" placeholder="${escapeText(hints.evidence || t("journalEvidenceHint", week))}">
          </label>
          <label>${escapeText(t("journalNextLabel"))}
            <input type="text" data-journal-field="next" placeholder="${escapeText(hints.next || t("journalNextHint"))}">
          </label>
        </div>
        <div class="journal-actions">
          <button class="button button-secondary" type="button" data-export-week="${week}">${escapeText(t("exportWeekButton"))}</button>
          <button class="button button-ghost" type="button" data-export-journal>${escapeText(t("exportJournalButton"))}</button>
        </div>`;
      expectations.insertAdjacentElement("afterend", journal);

      evidence.querySelector("strong").textContent = t("evidenceLabel");
    });
  }

  /* ---------- tila ---------- */

  const savedTasks = readStorage(STORAGE_KEY, {});
  taskBoxes.forEach((box) => { box.checked = Boolean(savedTasks[box.dataset.task]); });

  const savedEvidence = readStorage(EVIDENCE_KEY, {});
  evidenceBoxes.forEach((box) => { box.checked = Boolean(savedEvidence[box.dataset.evidence]); });

  let journalEntries = readStorage(JOURNAL_KEY, {});

  /* ---------- projektipäiväkirja ---------- */

  function journalEntryIsComplete(entry = {}) {
    return [entry.work, entry.reason, entry.evidence].every((value) => String(value || "").trim().length > 0);
  }

  function weekTitle(week) {
    return document.querySelector(`#week-${week} .week-title strong`)?.textContent?.trim() || t("weekFallback", week);
  }

  function updateJournalStatus() {
    let completeCount = 0;
    document.querySelectorAll("[data-week-journal]").forEach((journal) => {
      const week = journal.dataset.weekJournal;
      const entry = journalEntries[week] || {};
      const complete = journalEntryIsComplete(entry);
      const hasText = Object.values(entry).some((value) => String(value || "").trim());
      if (complete) completeCount += 1;
      const status = journal.querySelector("[data-journal-status]");
      if (status) {
        status.textContent = complete ? t("journalComplete") : (hasText ? t("journalPartial") : t("journalEmpty"));
        status.classList.toggle("complete", complete);
      }
    });
    document.querySelectorAll("[data-journal-summary]").forEach((summary) => {
      summary.textContent = t("journalSummary", completeCount, weekCards.length);
    });
  }

  function saveJournalField(field) {
    const journal = field.closest("[data-week-journal]");
    if (!journal) return;
    const week = journal.dataset.weekJournal;
    journalEntries[week] = {
      ...(journalEntries[week] || {}),
      [field.dataset.journalField]: field.value,
      updatedAt: new Date().toISOString()
    };
    writeStorage(JOURNAL_KEY, journalEntries);
    updateJournalStatus();
    updateProgress();
  }

  function weekMarkdown(week) {
    const entry = journalEntries[week] || {};
    const guide = weekGuidance[week];
    return [
      t("mdWeekHeading", week, weekTitle(week)),
      "",
      `**${t("mdWeekFeature")}** ${guide?.feature || ""}`,
      "",
      `**${t("mdWeekDeliverable")}** ${guide?.deliverable || ""}`,
      "",
      t("mdWork"),
      String(entry.work || t("mdNotRecorded")),
      "",
      t("mdReason"),
      String(entry.reason || t("mdNotRecorded")),
      "",
      t("mdEvidence"),
      String(entry.evidence || t("mdNotRecorded")),
      "",
      t("mdNext"),
      String(entry.next || t("mdNotRecorded")),
      ""
    ].join("\n");
  }

  function aiLogMarkdown() {
    const entries = readStorage(LOG_KEY, []);
    if (!entries.length) return `${t("aiLogHeading")}\n\n${t("aiLogEmpty")}\n`;
    return [t("aiLogHeading"), "", ...entries.flatMap((entry, index) => [
      `### ${index + 1}. ${entry.tool}`,
      `- **${t("aiLogQuestion")}** ${entry.question}`,
      `- **${t("aiLogUsed")}** ${entry.used}`,
      `- **${t("aiLogChecked")}** ${entry.checked}`,
      `- **${t("aiLogReference")}** ${entry.reference || t("aiLogNoReference")}`,
      entry.privacy ? `- **${t("aiLogPrivacyOk")}**` : `- **${t("aiLogPrivacyMissing")}**`,
      ""
    ])].join("\n");
  }

  function downloadMarkdown(filename, documentText) {
    const url = URL.createObjectURL(new Blob([documentText], { type: "text/markdown;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const journalFile = journalCfg.tiedostonimi || "projektipaivakirja.md";
  const journalPath = journalCfg.polku || `project-docs/${journalFile}`;

  function exportJournal() {
    const weeks = Object.keys(weekGuidance);
    const documentText = [
      `# ${t("mdJournalTitle", P.nimi)}`,
      "",
      t("mdJournalLead", journalPath),
      "",
      ...weeks.map((week) => weekMarkdown(week)),
      aiLogMarkdown()
    ].join("\n");
    downloadMarkdown(journalFile, documentText);
  }

  function initJournal() {
    document.querySelectorAll("[data-journal-field]").forEach((field) => {
      const week = field.closest("[data-week-journal]")?.dataset.weekJournal;
      field.value = journalEntries[week]?.[field.dataset.journalField] || "";
      field.addEventListener("input", () => saveJournalField(field));
    });
    document.querySelectorAll("[data-export-week]").forEach((button) => button.addEventListener("click", () => {
      const week = button.dataset.exportWeek;
      downloadMarkdown(t("mdWeekFile", week), `${t("mdWeekFileTitle", P.nimi, week)}\n\n${weekMarkdown(week)}`);
    }));
    document.querySelectorAll("[data-export-journal]").forEach((button) => button.addEventListener("click", exportJournal));
    updateJournalStatus();
  }

  /* ---------- suunnitelmadokumentti (GDD / asset-pack-suunnitelma / tekninen suunnitelma) ---------- */

  let planData = readStorage(PLAN_KEY, {});

  function planFilled(fieldName) {
    return String(planData[fieldName] || "").trim().length > 0;
  }

  function planValue(fieldName, fallback = UI.planEmptyValue) {
    return planFilled(fieldName) ? String(planData[fieldName]).trim() : fallback;
  }

  function updatePlanStatus() {
    const status = document.querySelector("[data-plan-status]");
    if (!status || !plan) return;
    const required = plan.pakolliset || [];
    const done = required.filter(planFilled).length;
    status.textContent = done === 0
      ? t("planNotStarted")
      : (done < required.length ? t("planPartial", done, required.length) : t("planDone"));
    status.classList.toggle("complete", done === required.length);
  }

  function planMarkdown() {
    if (!plan?.markdown) return "";
    return plan.markdown({
      arvo: planValue,
      onTäytetty: planFilled,
      raaka: planData,
      pvm: new Date().toLocaleDateString(t("dateLocale"))
    });
  }

  function initPlan() {
    const form = document.querySelector("[data-plan-form]");
    if (!form || !plan) return;
    form.addEventListener("submit", (event) => event.preventDefault());
    form.querySelectorAll("[data-plan-field]").forEach((field) => {
      field.value = planData[field.dataset.planField] || "";
      field.addEventListener("input", () => {
        planData[field.dataset.planField] = field.value;
        writeStorage(PLAN_KEY, planData);
        updatePlanStatus();
      });
    });
    document.querySelectorAll("[data-plan-export]").forEach((button) =>
      button.addEventListener("click", () => downloadMarkdown(plan.tiedostonimi || "suunnitelma.md", planMarkdown())));
    updatePlanStatus();
  }

  /* ---------- viikkonavigaatio ---------- */

  function isoWeek(date) {
    const copy = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    copy.setUTCDate(copy.getUTCDate() + 4 - (copy.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(copy.getUTCFullYear(), 0, 1));
    return Math.ceil((((copy - yearStart) / 86400000) + 1) / 7);
  }

  function phaseOf(week) {
    return phases.find((phase) => phase.viikot.includes(Number(week))) || null;
  }

  function buildWeekNavigation() {
    const holder = document.querySelector("[data-week-links]");
    if (!holder) return;
    const names = P.viikkoNimet || {};
    const phaseStart = {};
    phases.forEach((phase) => { phaseStart[Math.min(...phase.viikot)] = phase; });

    weekList.forEach((week) => {
      const starting = phaseStart[week];
      if (starting) {
        const heading = document.createElement("p");
        heading.className = `week-nav-phase phase-${starting.tunnus.toLowerCase()}`;
        heading.innerHTML = `<span>${escapeText(starting.tunnus)}</span>${escapeText(starting.lyhyt || starting.otsikko)}`;
        holder.appendChild(heading);
      }
      const holiday = holidayWeeks.has(week);
      const phase = phaseOf(week);
      const link = document.createElement("a");
      link.href = `#week-${week}`;
      link.className = "week-link";
      link.dataset.weekLink = String(week);
      const smallLabel = t("weekNavSmall", week, holiday || !phase ? "" : phase.tunnus);
      link.innerHTML = `<span class="week-nav-node">${week}</span><span class="week-nav-copy"><small>${smallLabel}</small><strong>${escapeText(names[week] || t("weekFallback", week))}</strong></span><span class="week-nav-check" aria-hidden="true">✓</span>`;
      link.setAttribute("aria-label", holiday
        ? t("weekAriaHoliday", week, (names[week] || t("holidayFallback")).toLowerCase())
        : t("weekAria", week, phase ? phase.tunnus : ""));
      if (holiday) link.classList.add("holiday");
      else if (phase) link.classList.add(`phase-${phase.tunnus.toLowerCase()}`);
      holder.appendChild(link);
    });
  }

  /* ---------- edistyminen ---------- */

  function updateProgress() {
    const done = taskBoxes.filter((box) => box.checked).length;
    const total = taskBoxes.length;
    const percent = total ? Math.round((done / total) * 100) : 0;
    document.querySelectorAll("[data-progress-number]").forEach((el) => { el.textContent = `${percent}%`; });
    document.querySelectorAll("[data-progress-copy]").forEach((el) => { el.textContent = t("progressCopy", done, total); });
    document.querySelectorAll("[data-progress-bar]").forEach((el) => { el.style.width = `${percent}%`; });
    document.querySelectorAll(".progress-ring").forEach((el) => { el.style.setProperty("--progress", `${percent * 3.6}deg`); });

    weekCards.forEach((card) => {
      const boxes = [...card.querySelectorAll("[data-task]")];
      const complete = boxes.filter((box) => box.checked).length;
      const status = card.querySelector(".week-status");
      if (status) status.textContent = `${complete} / ${boxes.length}`;
      card.classList.toggle("complete", boxes.length > 0 && complete === boxes.length);
      card.classList.toggle("journal-missing", boxes.length > 0 && complete === boxes.length && !journalEntryIsComplete(journalEntries[card.dataset.week]));
      const weekLink = document.querySelector(`[data-week-link="${card.dataset.week}"]`);
      if (weekLink) weekLink.classList.toggle("done", boxes.length > 0 && complete === boxes.length);
    });

    const firstIncomplete = taskBoxes.find((box) => !box.checked);
    document.querySelectorAll("[data-continue]").forEach((button) => {
      button.textContent = firstIncomplete
        ? (done ? t("continueNext") : (P.aloitusNappi || t("continueStart")))
        : t("continueDone");
    });
  }

  function saveTasks() {
    const state = Object.fromEntries(taskBoxes.map((box) => [box.dataset.task, box.checked]));
    writeStorage(STORAGE_KEY, state);
    updateProgress();
  }

  taskBoxes.forEach((box) => box.addEventListener("change", () => {
    saveTasks();
    if (!box.checked) return;
    const card = box.closest(".week-card");
    const status = card?.querySelector("[data-journal-status]");
    if (status && !journalEntryIsComplete(journalEntries[card.dataset.week])) {
      status.textContent = t("journalReminder");
      status.classList.add("attention");
    }
  }));

  function updateEvidence() {
    const state = Object.fromEntries(evidenceBoxes.map((box) => [box.dataset.evidence, box.checked]));
    writeStorage(EVIDENCE_KEY, state);
    const done = evidenceBoxes.filter((box) => box.checked).length;
    const count = document.querySelector("[data-evidence-count]");
    if (count) count.textContent = `${done} / ${evidenceBoxes.length}`;
  }
  evidenceBoxes.forEach((box) => box.addEventListener("change", updateEvidence));

  /* ---------- navigointi ja nollaus ---------- */

  function openWeekTarget(hash) {
    if (!hash || !hash.startsWith("#week-")) return;
    const target = document.querySelector(hash);
    if (target instanceof HTMLDetailsElement) target.open = true;
  }
  document.addEventListener("click", (event) => {
    const link = event.target.closest('a[href*="#week-"]');
    if (link) openWeekTarget(new URL(link.href, window.location.href).hash);
  });
  window.addEventListener("hashchange", () => openWeekTarget(window.location.hash));

  function continuePath() {
    const firstIncomplete = taskBoxes.find((box) => !box.checked);
    const lastWeek = weekList[weekList.length - 1];
    const target = firstIncomplete ? firstIncomplete.closest(".week-card") : document.querySelector(`#week-${lastWeek}`);
    if (!target) return;
    target.open = true;
    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => firstIncomplete?.focus({ preventScroll: true }), 500);
  }
  document.querySelectorAll("[data-continue]").forEach((button) => button.addEventListener("click", continuePath));
  document.querySelectorAll("[data-print]").forEach((button) => button.addEventListener("click", () => window.print()));

  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    const planName = plan?.otsikko ? `, ${plan.otsikko}` : "";
    const files = plan?.tiedostonimi ? ` ja ${plan.tiedostonimi}` : "";
    if (!window.confirm(t("resetConfirm", planName, files))) return;
    [STORAGE_KEY, EVIDENCE_KEY, LOG_KEY, JOURNAL_KEY, PLAN_KEY].forEach((key) => localStorage.removeItem(key));
    journalEntries = {};
    planData = {};
    taskBoxes.forEach((box) => { box.checked = false; });
    evidenceBoxes.forEach((box) => { box.checked = false; });
    document.querySelectorAll("[data-journal-field]").forEach((field) => { field.value = ""; });
    document.querySelectorAll("[data-plan-field]").forEach((field) => { field.value = ""; });
    renderLog();
    updateJournalStatus();
    updatePlanStatus();
    updateProgress();
    updateEvidence();
  });

  /* ---------- AI-loki ---------- */

  let aiLog = readStorage(LOG_KEY, []);
  const logHolder = document.querySelector("[data-ai-entries]");
  const logCount = document.querySelector("[data-log-count]");

  function renderLog() {
    aiLog = readStorage(LOG_KEY, []);
    if (logCount) logCount.textContent = t("logCount", aiLog.length);
    if (!logHolder) return;
    if (!aiLog.length) {
      logHolder.innerHTML = `<p class="empty-state">${escapeText(t("logEmptyState"))}</p>`;
      return;
    }
    logHolder.innerHTML = aiLog.map((entry, index) => `
      <article class="log-entry">
        <strong>${escapeText(entry.tool)}</strong>
        <span>${escapeText(entry.question)}</span>
        <span>${escapeText(entry.used)}</span>
        <span>${escapeText(entry.checked)}<small class="log-reference">${escapeText(t("logReferencePrefix"))} ${escapeText(entry.reference || t("aiLogNoReference"))}</small></span>
        <button type="button" data-remove-log="${index}" aria-label="${escapeText(t("logRemoveAria"))}">${escapeText(t("logRemove"))}</button>
      </article>`).join("");
    logHolder.querySelectorAll("[data-remove-log]").forEach((button) => button.addEventListener("click", () => {
      aiLog.splice(Number(button.dataset.removeLog), 1);
      writeStorage(LOG_KEY, aiLog);
      renderLog();
    }));
  }

  document.querySelector("[data-ai-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    aiLog.push({
      tool: form.get("tool"),
      question: form.get("question"),
      used: form.get("used"),
      checked: form.get("checked"),
      reference: form.get("reference"),
      privacy: form.get("privacy") === "on"
    });
    writeStorage(LOG_KEY, aiLog);
    event.currentTarget.reset();
    renderLog();
  });

  document.querySelector("[data-export-log]")?.addEventListener("click", () => {
    downloadMarkdown(t("aiLogFile"), `${t("aiLogFileTitle", P.nimi)}\n\n${aiLogMarkdown().replace(new RegExp(`^${t("aiLogHeading")}\\n\\n`), "")}`);
  });

  /* ---------- nykyinen viikko ---------- */

  function markCurrentWeek() {
    let current;
    if (P.paivaton) {
      /* Paivaton tila: kuluva viikko lasketaan opiskelijan omasta aloituksesta,
         joka tallentuu selaimeen ensimmaisella kaynnilla. */
      const startKey = `${P.slug}.aloitus`;
      let start = Number(readStorage(startKey, 0));
      if (!start) { start = Date.now(); writeStorage(startKey, start); }
      const elapsed = Math.floor((Date.now() - start) / (7 * 86400000));
      current = weekList[Math.max(0, Math.min(elapsed, weekList.length - 1))];
    } else {
      const now = new Date();
      if (!years.includes(now.getFullYear())) return;
      current = isoWeek(now);
      if (!weekList.includes(current)) return;
    }
    document.querySelector(`#week-${current}`)?.classList.add("current");
    document.querySelector(`[data-week-link="${current}"]`)?.classList.add("current");
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: "0px 0px -30px" });
    items.forEach((item) => observer.observe(item));
  }

  enhanceWeekCards();
  initJournal();
  initPlan();
  buildWeekNavigation();
  openWeekTarget(window.location.hash);
  markCurrentWeek();
  updateProgress();
  updateEvidence();
  renderLog();
  setupReveal();
})();
