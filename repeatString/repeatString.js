const repeatString = function(baseString, repeats) {
    let result = '';
    try {
        const range = [...Array(repeats).keys()];
        for (let x in range) {
            result += baseString;
        }
        return result;
    } catch (e) {
        return 'ERROR';
    }
}

module.exports = repeatString;
