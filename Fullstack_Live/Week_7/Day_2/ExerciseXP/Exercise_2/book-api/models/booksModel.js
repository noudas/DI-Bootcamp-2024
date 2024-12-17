const db = require("../config/connect");

const getAllBooks = async () => {
    return await db("books").select("*");
};

const getBookById = async (id) => {
    return await db("books").where({ id }).first();
};

const createBook = async (book) => {
    return await db("books").insert(book).returning("*");
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
};
