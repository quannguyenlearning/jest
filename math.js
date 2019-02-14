const math = require('mathjs')

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function sqrt(a) {
    return math.sqrt(a);
}

module.exports = { add, subtract, sqrt };