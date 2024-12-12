// Instructions
// In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. 
// Your task is to create routes to manage a collection of books.
// Create a new directory named book-api.
// Inside the book-api directory, initialize a new Node.js project and install the express package.
// Create a new file named app.js in the book-api directory.

// In app.js, import the express module and create an instance of an Express app.
const express = require("express")
const app = express();
app.use(express.json());

// Define a basic data array containing a few book objects. 
// Each book object should have properties like id, title, author, and publishedYear.

const books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813
    },
    {
        id: 5,
        title: "Moby-Dick",
        author: "Herman Melville",
        publishedYear: 1851
    }
];

// Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.
app.listen(5000, () =>{
    console.log("Running on port 5000");
});

// Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.
app.get("/api/books",(req,res) =>{
    res.json(books)
})


// Implement the “Read” route by defining a route at GET /api/books/:bookId. 
// Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. 
// If the book is found, send a JSON response with the book details and a status code of 200 (OK). 
// If the book is not found, send a 404 status with a “Book not found” message.
app.get("/api/books/:bookId",(req,res)=>{
    const {id} = req.params;
    const findBook = books.find(book => book.id == id);
    if(!findBook) return res.status(404).send("Book not found")
    res.json(findBook).status(200)
});

// Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. 
// Inside the route handler, create a new book object with an incremented ID and the data from the request body. 
app.post("/api/books",(req,res) => {
    const {title, author, publishedYear} = req.body;
        
    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: "Title, author and published pear are required" });
    };

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    }

    books.push(newBook);

    // Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).
    res.status(201).json({ message: "Book created successfully", post: newBook });
});

