function round(value, decimals = 0) {

    const placeShiftForward = Number('1e' + decimals);
    const placeShiftBackward = Number('1e-' + decimals);

    return Math.round(value * placeShiftForward) * placeShiftBackward;

}

function scalarVectorMultiply (n, arrayOfNums) {
    return arrayOfNums.map(x => x * n);
}

function vectorAdd (arr1, arr2) { //Arrays should be same length
    const sum = []
    for (let i = 0; i < arr1.length; i++) {
        sum[i] = arr1[i] + arr2[i];
    }

    return sum;
}

function mathWebPointConversion ([x,y])  {//Flips the sign on the Y coordinate
    return [x, -1 * y];
}


module.exports = {
    round,
    scalarVectorMultiply,
    vectorAdd,
    mathWebPointConversion
}