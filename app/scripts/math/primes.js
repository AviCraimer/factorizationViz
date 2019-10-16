const {writeFileSync} = require('fs');

function checkSingleFactor (x, p, exp = 0) {
    let quotient  = x / p;
    const factorsEvenly = Number.isInteger(quotient);
    if (factorsEvenly) {
        return checkSingleFactor(quotient, p, exp + 1);
    }
    return exp;
}

// console.log("Check single factor",  checkSingleFactor(4,2))

function getPrimesUpTo (max) {
    const nums = new Array(max).fill(undefined);
    const maxPrime = Math.sqrt(max);

    nums[0] = {
        number: 0,
        isPrime: false,
        isComposite: false,
        factors: null
    }

    nums[1] = {
        number: 1,
        isPrime: false,
        isComposite: false,
        factors: null
    }


    let primes = [];
    let currentPrime = nums.indexOf(undefined);

    // console.log(currentPrime, maxPrime, nums);
    while (currentPrime !== -1 ) {

        primes.push(currentPrime);
        nums[currentPrime] = {
            number: currentPrime,
            primesIndex: primes.length - 1,
            isPrime: true,
            isComposite: false,
            factors: {
                [currentPrime]: 1
            }
        }

        let currentMultiplier = 2;


        while (currentMultiplier * currentPrime <= max && currentPrime < maxPrime) {
            const composite = currentMultiplier * currentPrime;
            if (nums[composite] === undefined) {
                nums[composite] = {
                    number: composite,
                    isPrime: false,
                    isComposite: true,
                    factors: {}
                }
            }
            currentMultiplier++;
        }

        // Set next current prime or end loop if none are undefined
        currentPrime = nums.indexOf(undefined);
        // console.log(currentPrime, "End of outer while loop iteration")
    }//End of outer while loop

    //Factorize
    nums.forEach(num => {
        if (num.isComposite) {
            const primeFactors = Object.keys(num.factors);
            // console.log(num.number, primeFactors)
            let remaining = num.number;
            let primesIndex = 0;
            while (remaining > 1) {
                const p = primes[primesIndex]
                let exp = checkSingleFactor(remaining, p);
                remaining = remaining / p**exp;
                if (exp > 0) {
                    num.factors[p] = exp;
                }
                // console.log(num.number, num.factors, p, exp);
                primesIndex++;
            }
        }
    }  );
    return [nums, primes];
}


let [nums, primes] = getPrimesUpTo(1000);



writeFileSync('./primes.json', JSON.stringify(primes));

writeFileSync('./numbersFactored.json', JSON.stringify(nums));