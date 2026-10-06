"""Render the supplied cube with its actual mesh, camera and rotation function."""
import sys
from pathlib import Path
import pyvista as pv
from PIL import Image

root = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(root / 'pohjat/python-pohja'))
from vektoripaja.kierto import kiertokulma
from vektoripaja.teema import TAUSTA, KOROSTUS

plotter = pv.Plotter(off_screen=True, window_size=(480, 360))
plotter.set_background(TAUSTA)
actor = plotter.add_mesh(pv.Cube(), color=KOROSTUS, show_edges=True)
plotter.camera_position = 'iso'
plotter.show(auto_close=False)
frames = []
for frame in range(50):
    actor.orientation = (0, kiertokulma(frame * 0.16, 0.125), 0)
    plotter.render()
    frames.append(Image.fromarray(plotter.screenshot(return_img=True)).convert('RGB'))
plotter.close()
# Repeat continuously: 50 frames at 160 ms make one eight-second revolution.
frames[0].save(root / 'assets/kuutio-pyorii.gif', save_all=True,
               append_images=frames[1:], duration=160, loop=0, optimize=True)
print('50 frames, 480 x 360, eight-second revolution, continuous loop')
