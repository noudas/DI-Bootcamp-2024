import { useSelector, useDispatch } from "react-redux";
import { selectorUsersState } from "./selectors";
import { fetchUsers } from "./slice";
import { useCallback } from "react";

export const useUsersSelector = () => {
  return useSelector(selectorUsersState);
};

export const useFetchUsers = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
};
