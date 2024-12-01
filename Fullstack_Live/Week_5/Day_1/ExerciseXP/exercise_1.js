// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5; // Assigns a to 5
    if(a > 1) { // If 5 > 1 enters block
        a = 3; // a gets reasigned to 3
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne() // Will return that a = 3

// #1.2 What will happen if the variable is declared with const instead of let ?
// Will send a Typerror sice consts cannot be reasigned

//#2
let b = 0; // Assigns 0 to b
function funcTwo() { // Function is created
    b = 5; // b gets reasigned to 5
}

function funcThree() { // Function is created
    alert(`inside the funcThree function ${b}`); // Prints b, b is 0 and a global variable
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared with const instead of let ?
// Will send a Typerror sice consts cannot be reasigned



//#3
function funcFour() { // Function is created
    window.c = "hello"; // Alert in a windows saying hello and assigned to the variable c
    // c will become hello
}


function funcFive() {
    alert(`inside the funcFive function ${c}`); // assigns the c to the string
}

// #3.1 - run in the console:
funcFour() // Assigns c
funcFive() // Uses the assigned c

//#4
let d = 1; // Global d become 1
function funcSix() { 
    let d = "test"; // Local d becomes test
    alert(`inside the funcSix function ${d}`); // alerts local d
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared with const instead of let ?
// Alerts the same thing with local d


//#5
let e = 2; // Global scope
if (true) {
    let e = 5; // Inner scope
    alert(`in the if block ${e}`); // Alert inner scope
}
alert(`outside of the if block ${e}`); // Alert Global scope

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared with const instead of let ?
// Will remain the same