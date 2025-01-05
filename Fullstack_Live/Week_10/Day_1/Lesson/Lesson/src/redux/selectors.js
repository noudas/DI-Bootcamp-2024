import { createSelector } from "@reduxjs/toolkit";
import { stateReducer } from "./slice";

// Selector for posts
export const selectorPostState = createSelector(
    [stateReducer], // Input selector
    (state) => state.posts // Output selector
);

// Selector for status
export const selectorStatus = createSelector(
    [stateReducer], // Input selector
    (state) => state.status // Output selector
);

// Selector for error
export const selectorError = createSelector(
    [stateReducer], // Input selector
    (state) => state.error // Output selector
);
