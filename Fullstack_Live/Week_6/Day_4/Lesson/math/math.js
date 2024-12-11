/*
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use this functions in app.js
 */

const multi = (a,b) => {
    return a*b
};

const divide = (a,b) => {
    return a/b
};

const plus = (a,b) => {
    return a+b
};

const minus = (a,b) => {
    return a-b
};

module.exports = {
    multi,
    divide,
    plus,
    minus,
}