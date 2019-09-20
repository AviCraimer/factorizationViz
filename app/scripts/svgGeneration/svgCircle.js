const {mathWebPointConversion} = require('../math/util');

function svgCircle (center, radius, classNames = "", style = "") {
    [x,y] = mathWebPointConversion(center);
    return `
    <circle
        ${ (classNames ? `class="${classNames}"` : "" )}
        ${(style ? `style="${style}"` : "" )}
        cx="${x}" cy="${y}" r="${radius}"
    />`
}

//Test

const testCircle = svgCircle([1,1],2, "littleCircle", "fill: red;"  );
console.log(testCircle);

module.exports = {
    svgCircle
}