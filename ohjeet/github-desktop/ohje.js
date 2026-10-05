"use strict";
// Vain nämä seitsemän projektia käyttävät tätä kuvaohjetta. Tuntematon parametri
// jättää yleisen ohjeen näkyviin; parametrista ei muodosteta HTML:ää tai URL:ää.
// tyyppi valitsee projektityypin kansiopuun ja .gitignore-ohjeen: data-vain="web"
// (oletus), "unity" tai "minecraft". Muiden tyyppien lohkot piilotetaan.
// paluu ja paluuTeksti: projekti, joka ei ole koontirepon alikansio.
// Englanninkielinen sivu en/ tunnistetaan html-elementin lang-määritteestä.
const projektit = {
  pelihylly: { nimi: "PeliHylly", client: "client", server: "server" },
  tuntitutka: { nimi: "TuntiTutka", client: "client", server: "server" },
  noppakauppa: { nimi: "NoppaKauppa", client: "frontend", server: "backend" },
  valokaari: { nimi: "Valokaari", client: "client", server: "server" },
  kahvilakoodi: { nimi: "KahvilaKoodi", tyyppi: "unity",
    paluu: "https://mattiseise.github.io/pelinayttoprojektit/#week-34", paluuTeksti: "Palaa: KahvilaKoodi · viikko 34" },
  bittibiomi: { nimi: "BittiBiomi", tyyppi: "minecraft",
    paluu: "https://mattiseise.github.io/bittibiomi/#week-34", paluuTeksti: "Palaa: BittiBiomi · viikko 34" },
  pingpongtanks: { nimi: "Ping Pong Tanks", tyyppi: "unity",
    paluu: "https://mattiseise.github.io/projekti_pingpongtanks/#week-36", paluuTeksti: "Back to Ping Pong Tanks · week 36" }
};
const englanniksi = document.documentElement.lang === "en";
const tunnus = new URLSearchParams(window.location.search).get("projekti");
if (Object.hasOwn(projektit, tunnus)) {
  const projekti = projektit[tunnus];
  document.getElementById("projektihuomio").textContent = englanniksi
    ? `You are using this guide for ${projekti.nimi}. Do the Git steps here and the other work steps from your project’s weekly guide.`
    : `Käytät ohjetta projektissa ${projekti.nimi}. Tee Git-vaiheet tästä ja sovelluksen muut työvaiheet oman projektin viikko-ohjeesta.`;
  // Kielilinkki säilyttää projektin, kun lukija vaihtaa kieltä.
  document.getElementById("kieli").search = `?projekti=${tunnus}`;
  document.querySelectorAll(".project-name").forEach((el) => { el.textContent = tunnus; });
  const tyyppi = projekti.tyyppi || "web";
  document.querySelectorAll("[data-vain]").forEach((el) => { el.hidden = el.dataset.vain !== tyyppi; });
  if (tyyppi === "web") {
    document.getElementById("client-name").textContent = projekti.client;
    document.getElementById("server-name").textContent = projekti.server;
  }
  ["paluu", "paluu-lopussa"].forEach((id) => {
    const linkki = document.getElementById(id);
    linkki.href = projekti.paluu || `${englanniksi ? "../../../" : "../../"}${tunnus}/#week-1`;
    linkki.textContent = projekti.paluuTeksti || (englanniksi ? `Back to ${projekti.nimi} · work week 1` : `Palaa: ${projekti.nimi} · työviikko 1`);
  });
}

// Avaa oikea vaihe myös esikatseluselaimessa, joka käsittelee fragmenttilinkit
// itse. Kuvien mitat on varattu HTML:ssä, joten latautuminen ei siirrä kohdetta.
function avaaVaihe(hash) {
  const kohde = document.getElementById(hash.slice(1));
  if (kohde) kohde.scrollIntoView({ behavior: "instant", block: "start" });
}
document.addEventListener("click", (event) => {
  if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const linkki = event.target.closest('a[href^="#"]');
  if (!linkki) return;
  event.preventDefault();
  const hash = linkki.getAttribute("href");
  history.pushState(null, "", hash);
  avaaVaihe(hash);
});
window.addEventListener("popstate", () => avaaVaihe(window.location.hash));
if (window.location.hash) avaaVaihe(window.location.hash);
