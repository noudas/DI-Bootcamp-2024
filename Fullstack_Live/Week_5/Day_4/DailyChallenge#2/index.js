// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...values) {
    for (let value of values) {
        if (!value) {  // If the value is falsy, return false
            return false;
        }
    }
    return true;  // If all values are truthy, return true
}


// Examples
console.log(allTruthy(true, true, true));

allTruthy(true, true, true) //➞ true

allTruthy(true, false, true) //➞ false

allTruthy(5, 4, 3, 2, 1, 0) //➞ false