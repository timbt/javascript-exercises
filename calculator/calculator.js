function add (a, b) {
    return a + b;
}

function subtract (a, b)  {
    return a - b;	
}

function sum (values) {
    return values.reduce(((runningSum, value) => runningSum + value),
            initialValue=0);
}

function multiply (values) {
    return values.reduce((product, value) => product * value);
}

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

function factorial(x) {
    result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
