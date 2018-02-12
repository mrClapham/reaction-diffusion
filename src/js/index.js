import 'core-js';
import HeaderVanilla from './vanilla_conmponents/vanilla-header.js';
import Factory from './vanilla_conmponents/component-factory'
require("../sass/entry.scss");
document.addEventListener("DOMContentLoaded", function () {
    init();
});

function init() {
// Pure JS renderer.

    
    const f1 = Factory(document.querySelector('#content-vanilla'), {headline: "passed headline..."});

    f1.setHeadline("NEW VALUES")
    const f2 = Factory(document.querySelector('#content-vanilla2'), {strapline: "passed strapline", colour: '#00ff00'});
    console.log("f1 ",f1 );
    f1.render()
    f2.render()
    console.log("f2 ",f2 );

    setInterval(()=>{ f1.setHeadline("-NEW VALUES "+Math.random())}, 500)
    setInterval(()=>{ f1.setStrapline("-STRAPLINE  "+Math.random())}, 800)

    console.log("f1.getHeadline() ",f1.getHeadline() );
   // console.log("f2 ",f2 );

    // f1.render(document.querySelector('#content-vanilla'), {newStuff: "new stuff"})
    // f1.setHeadline("Hello headline ")
}

