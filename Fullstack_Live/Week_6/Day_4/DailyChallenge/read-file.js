// In read-file.js, require the fs module and read the content from the file-data.txt file. 
// Display the content in the terminal.

const fs = require("fs");

const readFile = fs.readFile('file-data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }
  console.log(data);
});

module.exports = {
    readFile
}