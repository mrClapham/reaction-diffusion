const defaults = {
    width: 200,
    height: 200
}

const makeCanvas = (width, height, opt_class = "") => {
    var canvas = document.createElement("canvas");
    canvas.className = opt_class
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'relative';
    return canvas
};

export const makeGrid = (w, h) => {
    const grid = [];
    for (let x = 0; x < w; x++) {
        grid[x] = [];
        for (let y = 0; y < h; y++) {
            grid[x][y] = { x: x, y: y, r: 0, g: Math.floor(Math.random() * 255), b: 255, a: 255 }
        };
    };
    return grid // if I want a flat array use this [].concat(...grid);
};

const render = (context, data) => {
    for (let i = 0; i < data.length; i++) {
        for (let ii = 0; ii < data[i].length; ii++) {
            const {x,y,r,g,b,a}  = data[i][ii]
            const position = {x,y}
            const colour = {r,g,b,a}
            renderPixel(context, position, colour)
        }
    }
}

const curryRender = (context) => (data) => render(context, data);

const renderPixel = (context, position = { x: 100, y: 100 }, px = { r: 255, g: 0, b: 255, a: 255 }) => {
    context.fillStyle = 'rgba(' + px.r + ',' + px.g + ',' + px.b + ',' + (px.a / 255) + ')';
    context.fillRect(position.x, position.y, 1, 1);
};

export default {
    create: (target, config = {}) => {
        const props = { ...defaults, ...config }
        const grid = makeGrid(props.width, props.height)
        const canvas = makeCanvas(props.width, props.height);
        target.appendChild(canvas);
        const context = canvas.getContext('2d');
        return {
            ...props,
            canvas,
            context,
            render: curryRender(context)
        }
    }
};