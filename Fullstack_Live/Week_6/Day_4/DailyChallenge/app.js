// Create a directory named daily-challenge.

const { greet } = require("./greeting")

// Task 1: Basic Module System

// Inside the daily-challenge directory, create a file named greeting.js.

// Create another file named app.js in the same directory.

// In app.js, require the greeting.js module and use the greet function to greet a user.
console.log(greet("Longbottom"));

// Run app.js using Node.js and see the greeting message.


// Task 2: Using an NPM Module

const { default: message } = require("./colorful-message");

// Inside the daily-challenge directory, open a terminal and run npm init to initialize a new Node.js project. 
// Follow the prompts to set up your project.

// Install the chalk package by running npm install chalk in the terminal.

// Create a file named colorful-message.js.

// Create another file named app.js.

// In app.js, require the colorful-message.js module and call the function you’ve written to display the colorful message.

// Run app.js using Node.js and see the colorful message.

console.log(message);



// Task 3: Advanced File Operations

// Inside the daily-challenge directory, create a directory named files.

// Inside the files directory, create a file named file-data.txt and add some text content to it.

// Create a file named read-file.js.

// Create another file named app.js.

const { readFile } = require("./read-file");
// In app.js, require the read-file.js module and call the function you’ve written to display the file’s content.
readFile

// Run app.js using Node.js and see the content of the file.


// Challenge Task: Integrating Everything

// Create a file named challenge.js.

// In challenge.js, require the modules from the previous tasks: greeting.js, colorful-message.js, and read-file.js.

// Use the greet function to greet the user, display the colorful message, and read and display the file’s content.

// Run challenge.js using Node.js and see the complete challenge in action.

// By completing this challenge, you’ll have a Node.js application that demonstrates module system usage, 
// integration of NPM modules, and file operations. 
// It’s a comprehensive exercise that brings together concepts from the previous exercises into a single daily challenge.