import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        addCategory: (state, action) => {
            const id = state.categories.length + 1;
            const {name} = action.payload;
            state.categories.push({id, name});
        },
        editCategory: (state, action) => {
            const {id, changes} = action.payload;
            const category = state.categories.find((category) => category.id === id);
            if(category){
                Object.assign(category,changes)
            }
        },
        deleteCategory: (state, action) => {
            const id = action.payload;
            state.categories = state.categories.filter((category) => category.id !== id);
        },
    },
    extraReducers: (builder) => {},
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export const selectCategoriesState = (state) => state.categoriesReducer;
export default categoriesSlice.reducer;
