import { useState } from "react";
import { Book } from "../types/types";
import AddItemForm from "./AddItemForm";
import booksData from "../data/books.json";
import GenericList from "./GenericList";

const BookApp = () => {
    const [books, setBooks] = useState<Book[]>(booksData);

    // Function to handle adding a new book
    const addBook = (newBook: Book) => {
        setBooks([...books, newBook]);
    };

    // Field configurations for the AddItemForm component
    const bookFields = [
        { name: "title", placeholder: "Enter Book Title", type: "text" },
        { name: "author", placeholder: "Enter Author Name", type: "text" },
    ];

    return (
        <div>
            <h1>Book List</h1>
            <AddItemForm<Book> onAdd={addBook} fields={bookFields} />
            <GenericList
                items={books}
                renderItem={(book) => (
                    <div key={book.id}>
                        <h4>{book.title}</h4>
                        <p>by {book.author}</p>
                    </div>
                )}
            />
        </div>
    );
};

export default BookApp;
