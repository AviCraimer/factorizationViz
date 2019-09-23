const {svgCircle, circlesAllAround} = require('./svgCircle');

const numberOfPrimesUnder1000 = 168;

const numColorsInColorCycle = 5;

const circleClassNames = [
 'colorFor2',
 'colorFor3',
 'colorFor5'
]


for (let i = 3; i < numberOfPrimesUnder1000; i++) {
    let cycleNum =  (i - 2) % numColorsInColorCycle;
    cycleNum = (cycleNum === 0) ? numColorsInColorCycle  : cycleNum;
    circleClassNames.push('colorCycle' + cycleNum);
}

console.log(circleClassNames);

// function getCirclesForSinglePrimeFactor (prime, exponent) {
//     const radius = prime;
//     if (exponent === 1) {
//         svgCircle()
//     }

// }