const booksModel = require("../models/booksModel");

// GET /api/books: Fetch all books
const getAllBooks = async (req, res) => {
    try {
        const books = await booksModel.getAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: "Error fetching books." });
    }
};

// GET /api/books/:bookId: Fetch a book by ID
const getBookById = async (req, res) => {
    try {
        const { bookId } = req.params;
        const book = await booksModel.getBookById(bookId);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ error: "Error fetching the book." });
    }
};

// POST /api/books: Create a new book
const createBook = async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;

        if (!title || !author || !publishedYear) {
            return res.status(400).json({ error: "Title, author, and year are required." });
        }

        const newBook = { title, author, publishedYear };
        const [createdBook] = await booksModel.createBook(newBook);

        res.status(201).json(createdBook);
    } catch (error) {
        res.status(500).json({ error: "Error creating the book." });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
};
