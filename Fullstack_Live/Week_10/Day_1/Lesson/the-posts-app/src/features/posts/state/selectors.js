import { createSelector } from "@reduxjs/toolkit";

import { stateReducer } from "./slice";

export const selectorPostsState = createSelector([stateReducer], (state) => {
  return state.posts;
});

export const selectorStatusState = createSelector([stateReducer], (state) => {
  return state.status;
});
