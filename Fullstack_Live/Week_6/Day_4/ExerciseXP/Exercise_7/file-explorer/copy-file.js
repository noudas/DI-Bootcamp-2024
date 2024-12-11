// In copy-file.js, use the fs module to read the content from a file named source.txt and then 
// write the same content to a new file named destination.txt.

const fs = require('fs');

// Read content from source.txt
fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading source.txt:', err);
    return;
  }

  // Write content to destination.txt
  fs.writeFile('destination.txt', data, (err) => {
    if (err) {
      console.error('Error writing to destination.txt:', err);
    } else {
      console.log('Content copied to destination.txt!');
    }
  });
});
