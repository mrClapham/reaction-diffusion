const defaults = {
    grid: [],
    next: [],
    width: 800,
    height: 200,
    dA: 1,
    dB: 0.5,
    feed: 0.55,
    k: 0.061
}

const props = {...defaults};


import { deepCopyArray } from '../utilities/deep-copy'

const laplaceA = (value)=> {
    return value
}
const laplaceB = (value)=> {
    return value
}

/**
 * Takes a 3d Array - as created by the 'makeGrid()' method and adds the rdA and rdB properties.
 * @param {*} grid 
 */
export const makeRDGrid = (grid) => {
     return grid.map((d,i)=>{
        return d.map((dd,ii)=>{
            return {...dd, rdA:1, rdB:1}
        });
    });
};

const ABToRgb = (a,b)=>{
    const r = Math.floor(255 * a);
    const g = Math.floor(255 * b);
    return {r:r, g:g, b:0}
}

export const rdAFunc = (a, b, grid) =>{
const ret = a +  ( props.dA + laplaceA(1) * a ) -
     ( a * b * b ) + 
     ( props.feed * (1 - a) );
     return ret
}

export const reactionDiffusion = (donerGrid) =>{
    // To save the previous state as I need to refer to it below
    const copyGrid = deepCopyArray(donerGrid)

    return donerGrid.map((d,i)=>{
        return d.map((dd,ii)=>{
            const {rdA, rdB, donerGrid } = copyGrid[i][ii];
            const newA = rdAFunc(rdA, rdB);
            const newB = rdAFunc(rdB, rdA);
            return {...dd, rdA: newA , rdB: newB, ...ABToRgb(newA, newB, copyGrid)};
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

