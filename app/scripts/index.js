
const { exec } = require('child_process');

// exec(`node bsyncProcess`);
const {circlesAllAround } = require('./svgGeneration/svgCircle');
const {svgTemplate, writeSvgFile} = require('./svgGeneration/writeSvgFile');


const numCircles = 100;

const circles = circlesAllAround(numCircles, 200,[500,500]);

const options = {elements: circles, title: numCircles + ' Circles SVG'};


writeSvgFile('C:/myCode/factorizationViz/app/generatedSvgFiles/'+ numCircles + 'Circles.svg', options);


