

const laplaceA = ()=> {
    1
}
const laplaceB = ()=> {
    1
}

export const makeRDGrid = (w, h) => {
    const grid = [];
    for (let x = 0; x < w; x++) {
        grid[x] = [];
        for (let y = 0; y < h; y++) {
            grid[x][y] = { a:0, b:0 }
        };
    };
    return grid // if I want a flat array use this [].concat(...grid);
};

export const reactionDiffusion = (donerGrid) =>{
    const newGrid = donerGrid.map((d,i)=>{
        return d.map((dd,ii)=>{
            const {}
        });
    });

    // for(let x=0; x<donerGrid.length; x++){
    //     for(let y=0; y<donerGrid.height; y++){
    //         let a = grid[x][y].a
    //         let b = grid[x][y].b
    //         next[x][y].a =  a + 
    //                         ( props.dA + laplaceA() * a ) -
    //                         ( a * b * b ) + 
    //                         ( props.feed * (1 - a) );
    
    //         next[x][y].b =  b + 
    //                         ( props.dB + laplaceB() * b ) -
    //                         ( a * b * b ) - 
    //                         ( props.k + props.feed ) *  b ;
    
    
    //         next[x][y].b = grid[x][y].b * 0.9;
    //     };
    // };
    
    // for(let x=0; x<props.width; x++){
    //     for(let y=0; y<props.height; y++){
    //         let pix = (x + y * props.width) * 4;
    //         sketch.pixels[pix+0] = next[x][y].a;
    //         sketch.pixels[pix+1] = 0;
    //         sketch.pixels[pix+2] = grid[x][y].b;
    //         sketch.pixels[pix+3] = 255;
    //     };
    // };
}

