import p5 from 'p5';

const defaults = {
    grid : [],
    next : [],
    width : 800,
    height : 200,
    dA:1,
    dB:0.5,
    feed:0.55,
    k:0.061
}

let grid = [];
let next = [];

const makeGrid = (w,h)=>{
    const grid = [];
    for (let x=0; x<w; x++){
        grid[x] = [];
        for(let y=0; y<h; y++){
            grid[x][y] = {a:0, b: Math.floor( Math.random() * 255 )}
        };
    };
    return grid;
};

const swap = ()=>{
    let temp = grid;
    grid = next;
    next = grid;
};

const laplaceA = ()=> {
    1
}
const laplaceB = ()=> {
    1
}

export default (targDiv, config)=> {
    const props = {...defaults, ...config};
    grid = makeGrid(props.width, props.height)
    next = makeGrid(props.width, props.height)



    const BaseClass = (sketch)=>{
        sketch.setup = ()=>{
            sketch.createCanvas(props.width, props.height);
            sketch.pixelDensity(1);
            sketch.frameRate(2)
        };
        sketch.draw = ()=>{
            sketch.loadPixels() 
            const col = sketch.color(255,255)

            for(let x=0; x<props.width; x++){
                for(let y=0; y<props.height; y++){
                    let a = grid[x][y].a
                    let b = grid[x][y].b
                    next[x][y].a =  a + 
                                    ( props.dA + laplaceA() * a ) -
                                    ( a * b * b ) + 
                                    ( props.feed * (1 - a) );

                    next[x][y].b =  b + 
                                    ( props.dB + laplaceB() * b ) -
                                    ( a * b * b ) - 
                                    ( props.k + props.feed ) *  b ;


                    next[x][y].b = grid[x][y].b * 0.9;
                }
            }

            for(let x=0; x<props.width; x++){
                for(let y=0; y<props.height; y++){
                    let pix = (x + y * props.width) * 4;
                    sketch.pixels[pix+0] = next[x][y].a;
                    sketch.pixels[pix+1] = 0;
                    sketch.pixels[pix+2] = grid[x][y].b;
                    sketch.pixels[pix+3] = 255;
                }
            }

            sketch.updatePixels()
            sketch.ellipse(50, 50, 80, 80);
            swap()
        };
    };


    new p5(BaseClass, targDiv);
}

