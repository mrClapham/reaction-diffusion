import { PixiApp } from './components/App/pixi-app'
import CanvasRenderer from './components/canvas-renderer/canvas-renderer'
import { makeGrid } from './components/canvas-renderer/canvas-renderer'
require("../sass/entry.scss");
document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
    //const pa = PixiApp(document.querySelector('#content'), {width:800});
    const width = 320
    const height = 320

    const renderer = CanvasRenderer.create(document.querySelector('#canvas-content'), {width, height})// .init()
    let grid = makeGrid(width, height)
    renderer.render(grid)
}

