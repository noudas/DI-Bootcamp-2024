// Step 4: Create a Router Module
// Inside your project directory, create a new directory called routes. 
// Inside the routes directory, create a JavaScript file (e.g., books.js) where you will define routes for managing books using express.Router():

// // routes/books.js
const express = require("express");
const router = express.Router();


// // Sample in-memory database for storing books
// const books = [];
const books = [];
let idCounter = 1

// // Get all books
router.get("/", (req, res) => {
    res.json(books);
})

// // Add a new book
router.post("/",(req, res) => {
    const {title, author, publisher} = req.body;

    if (!title || !author || !publisher) {
        return res.status(400).json({ error: "Title, Author and Publisher are required" });
    }

    const newBook = 
    {
        id:idCounter ++, 
        title, 
        author, 
        publisher
    }

    books.push(newBook);
    res.status(201).json(newBook);
});

// // Update a book by ID
router.put("/:id",( req, res ) => {
    const {id} = req.params;
    const {title, author, publisher} = req.body;

    const book = books.find((b) => b.id === parseInt(id));

    if(title) book.title = title
    if(author) book.author = author
    if(publisher) book.publisher = publisher

    res.json(book)
});

// // Delete a book by ID

router.delete("/:id",( req, res ) => {
    const {id} = req.params;
    const initialLength = books.length;

    books = books.filter((b) => b.id !== parseInt(id));

    if (books.length === initialLength) {
        return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
});

module.exports = router;