// const {mathWebPointConversion} = require('../math/util');
const {circleDivision} = require('../math/divideCircle');


function svgCircle (center, radius, classNames = "", style = "") {
    const [x,y] = center;

    return `
    <circle
        ${ (classNames ? `class="${classNames}"` : "" )}
        ${(style ? `style="${style}"` : "" )}
        cx="${x}" cy="${y}" r="${radius}"
    />`
}

function circlesAllAround (divisions, radius, center) {
    return circleDivision(divisions, radius, center).map(point => {
        return svgCircle(point, radius);
    });
}

//Test

const testCircle = svgCircle([1,1],2, "littleCircle", "fill: red;"  );
// console.log(testCircle);
console.log(circlesAllAround(4,2,[10,10] ));



module.exports = {
    svgCircle,
    circlesAllAround
}