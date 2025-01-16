// Part 2: Define the Data Model (20-30 minutes)
// Create the Book interface
// Implement the BookItem class
// Add serialization methods
// Tasks:

// Create src/model directory
// Create Book.ts file
// Define the Book interface with required properties
// Implement the BookItem class with getters and serialization methods

export interface Book{
    readonly id: number;
    title: string;
    author:string;
}