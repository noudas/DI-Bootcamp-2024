import { useDispatch } from "react-redux";
import { stateReducer } from "./slice";
import { createSelector } from "@reduxjs/toolkit";

// Use this custom hook to get the dispatch function
export const useAppDispatch = () => useDispatch();

// Create a selector to get all books
export const selectorBookState = createSelector([stateReducer], (state) => {
  return state.books;
});

// Create selectors for filtering specific genres of books
export const selectorFantasyBooks = createSelector([selectorBookState], (books) => {
  return books.filter((book) => book.genre.toLowerCase() === "fantasy");
});

export const selectorScienceFictionBooks = createSelector(
  [selectorBookState],
  (books) => {
    return books.filter((book) => book.genre.toLowerCase() === "scify");
  }
);

// If you want a selector for horror books, define it like this:
export const selectorHorrorBooks = createSelector([selectorBookState], (books) => {
  return books.filter((book) => book.genre.toLowerCase() === "horror");
});
