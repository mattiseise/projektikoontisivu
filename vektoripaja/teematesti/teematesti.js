/* Teematestisivun oma vertailukytkin. Ei kuulu moottoriin eikä valmiiseen sivustoon.
   Vaihtaa otsikoiden värin ja nykyisen askeleen korostuksen, jotta opiskelija voi
   verrata yhtä väriä ja kahta väriä. Valinta tallentuu tähän selaimeen. */
(function () {
  "use strict";
  const KEY = "vektoripaja-teematesti-vertailu";
  const root = document.documentElement;
  const perus = (window.NAYTTOPROJEKTI && window.NAYTTOPROJEKTI.teema && window.NAYTTOPROJEKTI.teema.otsikot) || "#1fa4e3";

  function aseta(arvo) {
    root.style.setProperty("--teema-otsikot", arvo === "yksi" ? perus : "#ffffff");
    root.classList.toggle("vertailu-nyt", arvo === "otsikot-nyt");
    try { localStorage.setItem(KEY, arvo); } catch (_) { /* ei tallennusta */ }
  }

  let alku = "yksi";
  try { alku = localStorage.getItem(KEY) || "yksi"; } catch (_) { /* ei tallennusta */ }
  document.querySelectorAll('[data-vertailu] input[name="vari"]').forEach((input) => {
    input.checked = input.value === alku;
    input.addEventListener("change", () => { if (input.checked) aseta(input.value); });
  });
  aseta(alku);
})();
