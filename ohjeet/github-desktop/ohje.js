"use strict";
// Vain nämä neljä projektia käyttävät tätä kuvaohjetta. Tuntematon parametri
// jättää yleisen ohjeen näkyviin; parametrista ei muodosteta HTML:ää tai URL:ää.
const projektit = {
  pelihylly: { nimi: "PeliHylly", client: "client", server: "server" },
  tuntitutka: { nimi: "TuntiTutka", client: "client", server: "server" },
  noppakauppa: { nimi: "NoppaKauppa", client: "frontend", server: "backend" },
  valokaari: { nimi: "Valokaari", client: "client", server: "server" }
};
const tunnus = new URLSearchParams(window.location.search).get("projekti");
if (Object.hasOwn(projektit, tunnus)) {
  const projekti = projektit[tunnus];
  document.getElementById("projektihuomio").textContent = `Käytät ohjetta projektissa ${projekti.nimi}. Tee Git-vaiheet tästä ja sovelluksen muut työvaiheet oman projektin viikko-ohjeesta.`;
  document.querySelectorAll(".project-name").forEach((el) => { el.textContent = tunnus; });
  document.getElementById("client-name").textContent = projekti.client;
  document.getElementById("server-name").textContent = projekti.server;
  ["paluu", "paluu-lopussa"].forEach((id) => {
    const linkki = document.getElementById(id);
    linkki.href = `../../${tunnus}/#week-1`;
    linkki.textContent = `Palaa: ${projekti.nimi} · työviikko 1`;
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
