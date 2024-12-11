// In math.js, define a simple custom module that exports functions for addition and multiplication.


function addition(a,b) {
    return a + b
}

function multiplication(a,b) {
    return a * b
}

module.exports = {
    addition,
    multiplication
}