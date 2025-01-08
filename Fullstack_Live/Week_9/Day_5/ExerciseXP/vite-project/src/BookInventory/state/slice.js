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
    },
    extraReducers(builder){},
});

export const stateReducer = (state) => state.bookReducer;
export const {addBook} = booksSlice.actions;
export default booksSlice.reducer;