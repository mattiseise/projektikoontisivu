"""Pyörivä kuutio Qt-ikkunassa (viikon 41 mallitoteutus testiajoa varten)."""
import sys
import time

import pyvista
from pyvistaqt import QtInteractor
from PySide6.QtCore import QTimer
from PySide6.QtWidgets import QApplication, QMainWindow

from vektoripaja.kierto import kiertokulma
from vektoripaja.teema import KOROSTUS, TAUSTA, lataa_teema


class Ikkuna(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Vektoripaja")
        self.nakyma = QtInteractor(self)
        self.nakyma.set_background(TAUSTA)
        self.kuutio = self.nakyma.add_mesh(pyvista.Cube(), color=KOROSTUS, show_edges=True)
        self.setCentralWidget(self.nakyma.interactor)
        self.alku = time.monotonic()
        self.ajastin = QTimer(self, interval=30, timeout=self.pyorita)
        self.ajastin.start()

    def pyorita(self):
        self.kuutio.orientation = (0, kiertokulma(time.monotonic() - self.alku, 0.25), 0)
        self.nakyma.render()


def kaynnista() -> int:
    app = QApplication.instance() or QApplication(sys.argv)
    lataa_teema(app)
    ikkuna = Ikkuna()
    ikkuna.resize(900, 700)
    ikkuna.show()
    return app.exec()
