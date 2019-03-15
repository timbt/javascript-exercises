const cleanString = string => string.replace(/[^0-9a-z]/gi, '').toLowerCase();

const palindromes = function(originalString) {
    const string = cleanString(originalString);
    if (string.length < 2) {
        return true;
    } else if (string[0] === string[string.length - 1]) {
        return palindromes(string.substring(1, string.length - 1));
    }   else {
        return false;
    }
}

module.exports = palindromes
