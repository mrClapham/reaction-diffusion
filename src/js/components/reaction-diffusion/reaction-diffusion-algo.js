
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

const laplaceA = () => 1;
const laplaceB = () => 1;

export const reactionDiffusion2D = (grid) =>{
    for (let x = 0; x < props.width; x++) {
        for (let y = 0; y < props.height; y++) {
            let a = grid[x][y].a
            let b = grid[x][y].b
            next[x][y].a = a +
                (props.dA + laplaceA() * a) -
                (a * b * b) +
                (props.feed * (1 - a));
    
            next[x][y].b = b +
                (props.dB + laplaceB() * b) -
                (a * b * b) -
                (props.k + props.feed) * b;
    
    
            next[x][y].b = grid[x][y].b * 0.9;
        }
    }
    
    for (let x = 0; x < props.width; x++) {
        for (let y = 0; y < props.height; y++) {
            let pix = (x + y * props.width) * 4;
            sketch.pixels[pix + 0] = next[x][y].a;
            sketch.pixels[pix + 1] = 0;
            sketch.pixels[pix + 2] = grid[x][y].b;
            sketch.pixels[pix + 3] = 255;
        }
    }
}





