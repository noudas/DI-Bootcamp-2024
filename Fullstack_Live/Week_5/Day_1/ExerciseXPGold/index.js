// Exercise 1 : Nested functions
// Using the code below, and before executing it, 
// predict the outcome and explain how you came to this conclusion.

// Change the code below to nested arrow functions.
let landscape = function() { // Function expression created 

    let result = "";

    // Cria linhas retas no tanmanho dado
    let flat = function(x) {
        for(let count = 0; count<x; count++){
            result = result + "_";
        }
    }

    // Cria barras no tanmanho dado
    let mountain = function(x) {
    result = result + "/"
        for(let counter = 0; counter<x; counter++){
            result = result + "'"
        }
    result = result + "\\"
    }

    flat(4);
    mountain(4);
    flat(4)
    return result;
}

landscape() // Output: "____/''''\____"


// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// addToTen(3);


// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)


// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)


// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)