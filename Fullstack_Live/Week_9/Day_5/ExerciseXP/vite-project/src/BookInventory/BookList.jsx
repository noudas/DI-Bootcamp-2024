import { useSelector } from "react-redux"
import { useState } from "react";

import {
    selectorBookState,
    selectorHorrorBooks,
    selectorFantasyBooks,
    selectorScienceFictionBooks,
  } from "../BookInventory/state/hooks";
import BookCard from "./BookCard";

const Booklist = (props) => {
    const [filter, setFilter] = useState("all")

    const allBooks = useSelector(selectorBookState);
    const horrorBooks = useSelector(selectorHorrorBooks);
    const fantasyBooks = useSelector(selectorFantasyBooks);
    const scifyBooks = useSelector(selectorScienceFictionBooks);

    const booksToDisplay =
    filter === "horror"
      ? horrorBooks
      : filter === "fantasy"
      ? fantasyBooks
      : filter === "scify"
      ? scifyBooks
      : allBooks;

    return (
        <>
        <div>
        <button onClick={() => setFilter("all")}>All books</button>
        <button onClick={() => setFilter("horror")}>Horror Books</button>
        <button onClick={() => setFilter("fantasy")}>Fantasy Books</button>
        <button onClick={() => setFilter("scify")}>SciFi Books</button>
        </div>
        
        <div className="books">
            {booksToDisplay.map((book) => (
                <BookCard             
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    genre={book.genre}
                />
            ))}
        </div>
        </>
    )
}

export default Booklist