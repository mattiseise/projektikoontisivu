"""Kiertokulma (viikon 41 mallitoteutus testiajoa varten)."""


def kiertokulma(aika: float, nopeus: float) -> float:
    """Palauttaa kiertokulman asteina: nopeus kierrosta sekunnissa."""
    return aika * nopeus * 360.0
