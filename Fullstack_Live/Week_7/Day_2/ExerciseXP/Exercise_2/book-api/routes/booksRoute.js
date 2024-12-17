const express = require("express");
const { getAllBooks, getBookById, createBook } = require("../controllers/booksController");

const router = express.Router();

// GET all books
router.get("/", getAllBooks);

// GET a single book by ID
router.get("/:bookId", getBookById);

// POST a new book
router.post("/", createBook);

module.exports = router;
