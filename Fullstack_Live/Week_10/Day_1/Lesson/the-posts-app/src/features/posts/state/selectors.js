import { createSelector } from "@reduxjs/toolkit";

import { stateReducer } from "./slice";
import { selectorAuthorState } from "../../users/state/selectors";

export const selectorPostsState = createSelector([stateReducer], (state) => {
  console.log("selectorPostsState 1");
  return state.posts;
});

export const selectorStatusState = createSelector([stateReducer], (state) => {
  return state.status;
});

export const selectorFilterdPosts = createSelector(
  [selectorPostsState, selectorAuthorState],
  (posts, author) => {
    console.log("selectorFilterdPosts 2");
    if (author == -1) return posts;
    return posts.filter((item) => item.userId == author);
  }
);
