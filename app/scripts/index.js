
const { exec } = require('child_process');

// exec(`node bsyncProcess`);
const {circlesAllAround } = require('./svgGeneration/svgCircle');
const {svgTemplate} = require('./svgGeneration/makeSvgFile');


const circles = circlesAllAround(7,20,[50,50]);

const svgMarkup = svgTemplate({elements: circles})
console.log(svgMarkup);