// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
import fs from 'fs';

// Implement the readFile function to read the content of a specified file using the fs module.
export function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

// Implement the writeFile function to write content to a specified file using the fs module.
export function writeFile(path, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, content, "utf-8", (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}