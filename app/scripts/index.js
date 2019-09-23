
const { exec } = require('child_process');

// exec(`node bsyncProcess`);
const {circlesAllAround } = require('./svgGeneration/svgCircle');
const {svgTemplate, writeSvgFile} = require('./svgGeneration/writeSvgFile');


const circles = circlesAllAround(7,200,[500,500]);

const options = {elements: circles, title: '7 Circles SVG'};


writeSvgFile('C:/myCode/factorizationViz/app/generatedSvgFiles/7Circles.svg', options);


