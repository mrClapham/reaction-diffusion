import CanvasRenderer from './components/canvas-renderer/canvas-renderer'
import { makeGrid } from './components/canvas-renderer/canvas-renderer'
import { reactionDiffusion, makeRDGrid } from './algo-renderers/reaction-diffusion'
require("../sass/entry.scss");
document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
    //const pa = PixiApp(document.querySelector('#content'), {width:800});
    const width = 200
    const height = 200
    const renderer = CanvasRenderer.create(document.querySelector('#canvas-content'), {width, height})// .init()
    let grid = makeGrid(width, height);
    let rdGrid = makeRDGrid(grid);
    let rd = reactionDiffusion(rdGrid)


    setInterval(()=>{ 
        rd = reactionDiffusion(rd)
        //console.log(rd)
        renderer.render(rd)

    }, 4000)

}

