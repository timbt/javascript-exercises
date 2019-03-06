const removeFromArray = function() {
    const args = Array.prototype.slice.call(arguments);
    const array = args[0];
    const elementsToRemove = args.slice(1);
    return array.filter(element => !(elementsToRemove.includes(element)));
}

module.exports = removeFromArray
