/*
 * Create a new Folder - math
 * Create a file math.js
 * create 4 function - multi, divide, plus, minus - 2 inputs parametes (a,b)
 * return the a * b, a / b, a + b, a -b
 * Test these functions
 * create a module from math.js
 * use this functions in app.js
 */

export const multi = (a,b) => {
    return a * b;
};

export const divide = (a,b) => {
    if(b === 0){
        throw new Error("Divison cannot be divided by 0");
    };
    return a / b;
};

export const plus = (a,b) => {
    return a + b;
};

export const minus = (a,b) => {
    return a - b;
};

export const mods = (a,b) => {
    return a % b;
};

export default plus;

// module.exports = {
//     multi,
//     divide,
//     plus,
//     minus,
//     mods
// };
