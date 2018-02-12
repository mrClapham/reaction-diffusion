const _defaults = {
    headline: "headline default",
    strapline: "strapline default",
    colour: 'rgba(255,0,255,1)'
}
const _template = props => {
    const { headline, strapline, colour } = { ..._defaults, ...props };
    return `<hr /><div style="color: ${colour}" }>factory:<br/>
            ${headline}</div>
            <div>${strapline}</div>`
}

const _render = (target, config, template = _template) => target.innerHTML = template(config);

export default (target, config) => {
    let { headline, strapline, colour } = { ..._defaults, ...config };
    const render = () => _render(target, { headline, strapline, colour })
    
    return {
        ..._defaults,
        ...config,
        render: render,
        setHeadline: (value) => { 
            headline = value; 
            render();
        },
        getHeadline: () => { return headline },
        setStrapline: (value) => { 
            strapline = value; 
            render();
        },
        getStrapline: () => { return strapline },
        setColour: (value) => { 
            colour = value; 
            render();
        },
        setColour: () => { return colour }
    }

}
