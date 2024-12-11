// Require necessary modules
const { greet } = require("./greeting");
const { default: colorfulMessage } = require("./colorful-message");
const { readFile } = require("./read-file");

// Greet the user
console.log(greet("Longbottom"));

// Display the colorful message
console.log(colorfulMessage);

// Read and display the file's content
readFile();