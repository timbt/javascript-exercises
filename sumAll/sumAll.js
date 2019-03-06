const sumAll = function(a, b) {
    if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b < 0){
        return 'ERROR';
    }
    let sum = 0;
    let smallerNumber = a < b ? a : b;
    let largerNumber = a > b ? a : b;
    for(let i = smallerNumber; i <= largerNumber; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
