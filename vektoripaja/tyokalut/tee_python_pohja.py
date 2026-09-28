# -*- coding: utf-8 -*-
"""Pakkaa viikon 41 Python-pohjan: pohjat/python-pohja/ → pohjat/vektoripaja-pohja.zip.

Opiskelija purkaa zipin repositoryynsä (Pura kaikki → repositoryn kansio), joten
tiedostot ovat zipin juuressa ilman yläkansiota. .bat- ja .txt-tiedostot saavat
Windowsin rivinvaihdot. Aikaleima on kiinteä, jotta sama pohja tuottaa saman zipin.

Aja: python3 tyokalut/tee_python_pohja.py
"""
import os
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
LAHDE = os.path.join(HERE, "..", "pohjat", "python-pohja")
KOHDE = os.path.join(HERE, "..", "pohjat", "vektoripaja-pohja.zip")
OHITA = {".claude", "__pycache__", ".DS_Store", ".pytest_cache", "build", "dist", ".venv"}
CRLF = (".bat", ".txt")
AIKA = (2026, 9, 28, 0, 0, 0)

tiedostot = []
for juuri, kansiot, nimet in os.walk(LAHDE):
    kansiot[:] = sorted(k for k in kansiot if k not in OHITA)
    for nimi in sorted(nimet):
        if nimi not in OHITA:
            tiedostot.append(os.path.relpath(os.path.join(juuri, nimi), LAHDE).replace(os.sep, "/"))

with zipfile.ZipFile(KOHDE, "w", zipfile.ZIP_DEFLATED) as z:
    for polku in tiedostot:
        data = open(os.path.join(LAHDE, polku), "rb").read()
        if polku.endswith(CRLF):
            data = data.replace(b"\r\n", b"\n").replace(b"\n", b"\r\n")
        info = zipfile.ZipInfo(polku, AIKA)
        info.external_attr = 0o644 << 16
        info.compress_type = zipfile.ZIP_DEFLATED
        z.writestr(info, data)

print(f"pohjat/vektoripaja-pohja.zip: {len(tiedostot)} tiedostoa")
for polku in tiedostot:
    print("  " + polku)
