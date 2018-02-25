import 'core-js';
import HeaderVanilla from './vanilla_conmponents/vanilla-header.js';
import Factory from './vanilla_conmponents/component-factory'
import RaectionDiffusion from './components/reaction-diffusion/reaction-diffusion'
require("../sass/entry.scss");
document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
    const rd = RaectionDiffusion(document.querySelector('#content'), {width:200});
}

