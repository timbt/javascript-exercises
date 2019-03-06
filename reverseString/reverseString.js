const reverseString = function(string) {
    let newString = '';
    for (let char of string) {
        newString = char + newString;
    }
    return newString;
}

module.exports = reverseString
