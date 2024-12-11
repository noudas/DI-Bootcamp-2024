// 🌟 Exercise 5: Creating and Using a Custom Module
// Instructions

// Create a directory named math-app.
// Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. 
// Follow the prompts to set up your project.
// Install the lodash package, a utility library, by running npm install lodash in the terminal.
// Create a file named math.js inside the math-app directory.
// Create a file named app.js in the same directory.

// In app.js, require the lodash package and the custom math module.
const _ = require('lodash');

// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
const { addition, multiplication } = require('./math');

// Run app.js using Node.js and verify that the calculations are correct.
// 100% copied from documentation.... I don't understand what am i doing...
console.log("Using Lodash:");
console.log(_.join(['Hello', ' ', 'World'], ''));
console.log(_.toUpper('hello world'));

console.log("\nUsing Custom Math Module:");
console.log(addition(5, 7));
console.log(multiplication(3, 8));

// I am gonna try to break down the code... see if i understand
// Loadsh has a special utility function called _.map()
// What it does is that it takes, much like an object deconstruction, an array from outside and maps it inside, using the array itself and a key which in this case is the num
// then sends it to the function that we are calling, making it multiplication([1,2,3],2)
// So it will become and array of [1*2,2*2,3*2]
const result = _.map([1, 2, 3], num => multiplication(num, 2));
console.log(result);