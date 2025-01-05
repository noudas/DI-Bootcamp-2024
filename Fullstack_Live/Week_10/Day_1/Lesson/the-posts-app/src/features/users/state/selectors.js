import { createSelector } from "@reduxjs/toolkit";

import { stateReducer } from "./slice";

export const selectorUsersState = createSelector(
  [stateReducer],
  (state) => state.users
);
