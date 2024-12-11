// 🌟 Exercise 3: File Management using CommonJS syntax
// Instructions

// Create a file named fileManager.js.
// Create a file “Hello World.txt” containing the sentence “Hello World !! “
// Create a file “Bye World.txt” containing the sentence “Bye World !! “
// Create another file named app.js.
// In app.js, import the functions from the fileManager.js module.
import { readFile, writeFile } from './fileManager.js';

async function main() {
    try {
        // Use the imported functions to read the content of the “Hello World.txt” text file and 
        const fileContent = await readFile("./HelloWorld.txt");
        console.log(fileContent);
        
        // then write to the “Bye World.txt” with the content “Writing to the file”.
        await writeFile("ByeWorld.txt", "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        console.log("Successfully wrote to ByeWorld.txt");
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

// Run app.js and verify that the file reading and writing operations are successful.
main();
