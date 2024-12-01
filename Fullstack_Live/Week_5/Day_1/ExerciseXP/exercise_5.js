// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// Function delcaration
function grams_to_kg(kg) {
    return kg*1000
}

let kg = grams_to_kg(10)

// Function expression
const kg2 = function (kg) {
    return kg*1000
}

kg2(10)


// Function decaration are used to create a reasable function that can be reassigned to any variable or just called. 
// It is hoisted, meaning it can be used before it is declared in the code.
//

// Function expression are a function stored inside of a variable that automatically gets assigned to that variable
// It is not hoisted, meaning it cannot be used before it is defined.
