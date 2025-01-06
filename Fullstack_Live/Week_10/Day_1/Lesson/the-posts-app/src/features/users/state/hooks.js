import { useSelector, useDispatch } from "react-redux";
import { selectorUsersState, selectorAuthorState } from "./selectors";
import { fetchUsers, selectedAuthor } from "./slice";
import { useCallback } from "react";

export const useUsersSelector = () => {
  return useSelector(selectorUsersState);
};

export const useSelectedAuthor = () => {
  return useSelector(selectorAuthorState);
};

export const useFetchUsers = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
};

export const useSelectAuthor = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id) => {
      dispatch(selectedAuthor(id));
    },
    [dispatch]
  );
};
