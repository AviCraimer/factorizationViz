const {round, scalarVectorMultiply, vectorAdd} = require( './util');
const {sin, cos, PI: pi} = Math;
const circle360  = 2 * pi;



function getPointOnUnitCircle (radians) {
    return [ round( cos(radians), 14) , round( sin(radians), 14)];
}


function unitCircleDivision (n) { //Divides the unit cirlce into n parts.
    //Returns an array of 2-place arrays (x, y) coords on the unit circle

    const points = [];
    for (let i = 0; i < n; i++) {
        points.push( getPointOnUnitCircle(circle360 *  (i/n)));
    }
    return points;
}

function circleDivision (divisions, radius = 1, center = [0,0] ) {
    const unitCirclePoints = unitCircleDivision(divisions);

    const transformedPoints =  unitCirclePoints.map(point => {
        const scaled = scalarVectorMultiply(radius,point);
        // console.log("Scaled: ", scaled)
        const andTranslated = vectorAdd(scaled, center);
        return andTranslated;
    } );

    return transformedPoints;
}


//Test
// for (let i = 1; i < 7; i++) {
//     console.log(unitCircleDivision(i));
// }
// unitCircleDivision(4)
// console.log(unitCircleDivision(4))
// console.log(  circleDivision(4, 2, [1,1])  )

module.exports = {
    unitCircleDivision,
    circleDivision
}