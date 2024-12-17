// 🌟 Exercise 3: Basic API for managing a list of books using Express.js and express.Router.
// Instructions
// In this exercise, you’ll implement CRUD operations (Create, Read, Update, Delete) for books.

// Step 1: Setup

// Create a new directory for your project.
// Navigate to the project directory using your command line.
// Initialize a new Node.js project by running npm init -y.
// Step 2: Install Dependencies
// Install Express.js
// Step 3: Create Your Express Application
// Create a JavaScript file (e.g., app.js) to set up your Express application

const express = require("express");

// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application

const bookRouter = require("./routes/bookRoutes")

const app = express();
const PORT = 3000;

// Step 6: Start Your Server
// Now, you can start your Express server by running:

app.use(express.json());

app.use("/books", bookRouter);

app.get("/healthcheck", (req,res)=>{
    console.log("I am working!");
    
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// node app.js
// Step 7: Test Your API
// You can use tools like Postman or curl to test your API endpoints for managing books:

// GET http://localhost:3000/books (Get all books)
// POST http://localhost:3000/books (Create a new book with a JSON request body)
// PUT http://localhost:3000/books/:id (Update a book by ID with a JSON request body)
// DELETE http://localhost:3000/books/:id (Delete a book by ID)
// This exercise demonstrates a simple book management API built using Express.js and express.Router.