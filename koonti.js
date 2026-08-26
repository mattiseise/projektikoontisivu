/*
 * Näyttöprojektien koontisivu. Lukee window.PROJEKTIT (projektit.js) ja
 * rakentaa listan. Ei riippuvuuksia, ei verkkokutsuja.
 *
 * Projektien lisääminen: skripti scripts/lisaa_koontiin.py tai käsin
 * projektit.js-tiedostoon. Tätä tiedostoa ei tarvitse muokata.
 */
(function () {
  "use strict";

  const KATEGORIAT = [
    { avain: "peli", nimi: "Peliprojektit", lyhyt: "Peli", vari: "var(--peli)",
      kuvaus: "Pelin tekniikka arvioidaan näytössä: pelisilmukka, data pois koodista, tallennus ja julkaistu build." },
    { avain: "web", nimi: "Webprojektit", lyhyt: "Web", vari: "var(--web)",
      kuvaus: "Julkaistu verkkopalvelu: sivurakenne, data, lomakkeet, saavutettavuus ja tuotantojulkaisu." },
    { avain: "ohjelmointi", nimi: "Muut ohjelmointiprojektit", lyhyt: "Ohjelmointi", vari: "var(--ohjelmointi)",
      kuvaus: "Sovellukset, rajapinnat, työkalut ja automaatiot — ajettava toiminto ja sen testit." },
    { avain: "kyber", nimi: "Kyberturvallisuus", lyhyt: "Kyber", vari: "var(--kyber)",
      kuvaus: "Kovennus, valvonta, testaus ja dokumentointi. Aina omassa harjoitusympäristössä ja luvan kanssa." },
    { avain: "ittuki", nimi: "IT-tuki", lyhyt: "IT-tuki", vari: "var(--ittuki)",
      kuvaus: "Laitteet, käyttöjärjestelmät, käyttäjätuki ja tikettityö. Työnäytteet syntyvät oikeista tukitilanteista." },
    { avain: "muu", nimi: "Muut näyttöprojektit", lyhyt: "Muu", vari: "var(--muu)",
      kuvaus: "Projektit, jotka eivät istu muihin ryhmiin — esimerkiksi mediasisältö, asset-paketit ja laitteistotyöt." }
  ];

  const projektit = (window.PROJEKTIT || []).slice();
  const ryhmatEl = document.querySelector("[data-ryhmat]");
  const tyhjaEl = document.querySelector("[data-tyhja]");
  const tuloksetEl = document.querySelector("[data-tulokset]");
  const hakuEl = document.querySelector("[data-haku]");
  const katRow = document.querySelector("[data-kategoriat]");

  let valittuKategoria = "kaikki";
  let valittuTila = "kaikki";
  let haku = "";

  /* ---------- apurit ---------- */

  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const kategoria = (avain) => KATEGORIAT.find((k) => k.avain === avain) || KATEGORIAT[KATEGORIAT.length - 1];

  function hakutekstit(p) {
    return [
      p.nimi, p.kuvaus, p.lukuvuosi, p.ryhma, p.tila,
      kategoria(p.tyyppi).nimi,
      ...(p.tekniikat || []),
      ...(p.tutkinnonOsat || []).map((o) => o.nimi),
      p.tutkinto, p.diaarinumero
    ].filter(Boolean).join(" ").toLowerCase();
  }

  function osuu(p) {
    if (valittuKategoria !== "kaikki" && p.tyyppi !== valittuKategoria) return false;
    if (valittuTila !== "kaikki" && p.tila !== valittuTila) return false;
    if (haku && !hakutekstit(p).includes(haku)) return false;
    return true;
  }

  /* Käynnissä olevat ensin, sitten uusin lukuvuosi, sitten nimi. */
  function jarjesta(a, b) {
    if (a.tila !== b.tila) return a.tila === "kaynnissa" ? -1 : 1;
    const lv = String(b.lukuvuosi || "").localeCompare(String(a.lukuvuosi || ""));
    if (lv) return lv;
    return a.nimi.localeCompare(b.nimi, "fi");
  }

  /* ---------- kortti ---------- */

  function kortti(p) {
    const kat = kategoria(p.tyyppi);
    const kaynnissa = p.tila === "kaynnissa";
    const kuva = p.kuva
      ? `<img src="${esc(p.kuva)}" alt="Kuvakaappaus projektin ${esc(p.nimi)} sivustosta" loading="lazy" width="640" height="400">`
      : `<div class="placeholder">Ei kuvaa</div>`;

    const meta = [p.lukuvuosi, p.viikot, p.ryhma].filter(Boolean)
      .map((m) => `<span>${esc(m)}</span>`).join("");

    const tekniikat = (p.tekniikat || []).length
      ? `<ul class="tekniikat">${p.tekniikat.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`
      : "";

    const linkit = [
      p.sivusto ? `<a class="nappi nappi-ensisijainen" href="${esc(p.sivusto)}">Avaa projekti</a>` : "",
      p.repo ? `<a class="nappi nappi-toissijainen" href="${esc(p.repo)}">Repository</a>` : ""
    ].join("");

    const osat = (p.tutkinnonOsat || []).length
      ? `<h4>Tutkinnon osat</h4><ul>${p.tutkinnonOsat.map((o) =>
          `<li>${esc(o.nimi)}${o.vaatimuksia ? ` <span class="muted">· ${o.vaatimuksia} vaatimusta</span>` : ""}</li>`).join("")}</ul>`
      : "";

    const rivit = [
      ["Tutkinto", p.tutkinto],
      ["Diaarinumero", p.diaarinumero],
      ["Osaamisvaatimuksia", p.vaatimuksia],
      ["Luovutus", p.luovutus]
    ].filter(([, v]) => v)
      .map(([k, v]) => `<div class="rivi"><span>${esc(k)}</span><span>${esc(v)}</span></div>`).join("");

    const opettajalle = (osat || rivit)
      ? `<details class="opettajalle">
           <summary>Opettajalle: tutkinnon osat ja perusteet</summary>
           <div class="opettajalle-sisalto">${osat}${rivit}</div>
         </details>`
      : "";

    return `
      <article class="kortti" data-slug="${esc(p.slug)}">
        <div class="kortti-kuva">
          ${kuva}
          <span class="tyyppi-merkki" style="background:${kat.vari}">${esc(kat.lyhyt || kat.nimi)}</span>
          <span class="tila-merkki${kaynnissa ? " kaynnissa" : ""}">${kaynnissa ? "Käynnissä" : "Päättynyt"}</span>
        </div>
        <div class="kortti-sisalto">
          <h3>${p.sivusto ? `<a href="${esc(p.sivusto)}">${esc(p.nimi)}</a>` : esc(p.nimi)}</h3>
          <p class="kortti-kuvaus">${esc(p.kuvaus)}</p>
          <div class="meta">${meta}</div>
          ${tekniikat}
          <div class="kortti-linkit">${linkit}</div>
          ${opettajalle}
        </div>
      </article>`;
  }

  /* ---------- suodatinnapit ---------- */

  function rakennaKategoriat() {
    const napit = [{ avain: "kaikki", nimi: "Kaikki", vari: "var(--navy)" }, ...KATEGORIAT];
    katRow.innerHTML = napit.map((k) => {
      const n = k.avain === "kaikki" ? projektit.length : projektit.filter((p) => p.tyyppi === k.avain).length;
      return `<button type="button" class="chip${n === 0 ? " tyhja" : ""}" data-kategoria="${k.avain}" aria-pressed="${k.avain === "kaikki"}">
        ${k.avain === "kaikki" ? "" : `<span class="dot" style="background:${k.vari}"></span>`}${esc(k.nimi)}<span class="count">${n}</span>
      </button>`;
    }).join("");
  }

  function paivitaNapit(nimi, arvo) {
    document.querySelectorAll(`[data-${nimi}]`).forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset[nimi] === arvo));
    });
  }

  /* ---------- renderöinti ---------- */

  function render() {
    const nakyvat = projektit.filter(osuu).sort(jarjesta);
    tuloksetEl.textContent = nakyvat.length === projektit.length
      ? `${projektit.length} projektia`
      : `${nakyvat.length} / ${projektit.length} projektia`;

    const ryhmat = KATEGORIAT
      .map((kat) => ({ kat, lista: nakyvat.filter((p) => p.tyyppi === kat.avain) }))
      .filter((r) => r.lista.length);

    ryhmatEl.innerHTML = ryhmat.map(({ kat, lista }) => `
      <section class="ryhma" aria-labelledby="ryhma-${kat.avain}">
        <div class="ryhma-otsikko">
          <span class="mark" style="background:${kat.vari}" aria-hidden="true"></span>
          <h2 id="ryhma-${kat.avain}">${esc(kat.nimi)}</h2>
          <span class="count">${lista.length}</span>
        </div>
        <p class="ryhma-kuvaus">${esc(kat.kuvaus)}</p>
        <div class="kortit">${lista.map(kortti).join("")}</div>
      </section>`).join("");

    tyhjaEl.hidden = nakyvat.length > 0;
    varmistaKuvat();
  }

  /* Puuttuva kuvatiedosto ei saa jättää korttiin rikkinäistä kuvaa. */
  function varmistaKuvat() {
    ryhmatEl.querySelectorAll(".kortti-kuva img").forEach((img) => {
      const korvaa = () => {
        const kehys = img.closest(".kortti-kuva");
        if (!kehys || kehys.querySelector(".placeholder")) return;
        kehys.insertAdjacentHTML("afterbegin", '<div class="placeholder">Ei kuvaa</div>');
        img.remove();
      };
      if (img.complete && img.naturalWidth === 0) korvaa();
      else img.addEventListener("error", korvaa, { once: true });
    });
  }

  function tilastot() {
    const aseta = (avain, arvo) => {
      const el = document.querySelector(`[data-stat="${avain}"]`);
      if (el) el.textContent = arvo;
    };
    aseta("projekteja", projektit.length);
    aseta("kaynnissa", projektit.filter((p) => p.tila === "kaynnissa").length);
    aseta("tyyppeja", new Set(projektit.map((p) => p.tyyppi)).size);
  }

  /* ---------- käynnistys ---------- */

  rakennaKategoriat();
  tilastot();
  render();

  katRow.addEventListener("click", (e) => {
    const nappi = e.target.closest("[data-kategoria]");
    if (!nappi) return;
    valittuKategoria = nappi.dataset.kategoria;
    paivitaNapit("kategoria", valittuKategoria);
    render();
  });

  document.querySelectorAll("[data-tila]").forEach((nappi) => nappi.addEventListener("click", () => {
    valittuTila = nappi.dataset.tila;
    paivitaNapit("tila", valittuTila);
    render();
  }));

  let viive;
  hakuEl.addEventListener("input", () => {
    window.clearTimeout(viive);
    viive = window.setTimeout(() => {
      haku = hakuEl.value.trim().toLowerCase();
      render();
    }, 120);
  });
})();
