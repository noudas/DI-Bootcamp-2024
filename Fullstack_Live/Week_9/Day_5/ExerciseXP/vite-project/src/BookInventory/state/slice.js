import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    status: "",
}

const booksSlice = createSlice({
    name:`books`,
    initialState,
    reducers:{
        addBook: (state, action) => {
            const {title, author, genre} = action.payload;
            const newBook = {
                id: state.books.length + 1,
                title,
                author,
                genre,
            };
            state.books.push(newBook);
        },
        selectBooks: (state) =>{
            return state.books;
        },
        selectHorrorBooks: (state) =>{
            return state.books.filter((book) => book.genre.toLowerCase() === 'horror');
        },
        selectFantasyBooks: (state, action) =>{
            return state.books.filter((book) => book.genre.toLowerCase() === 'fantasy');
        },
        selectScienceFictionBooks: (state, action) =>{
            return state.books.filter((book) => book.genre.toLowerCase() === 'scify');
        },
    },
    extraReducers(builder){},
});

export const stateReducer = (state) => state.bookReducer;
export const {addBook, selectBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks} = booksSlice.actions;
export default booksSlice.reducer;