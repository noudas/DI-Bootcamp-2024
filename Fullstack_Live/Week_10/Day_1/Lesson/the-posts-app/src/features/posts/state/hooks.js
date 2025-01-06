import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { fetchPosts, addreaction } from "./slice";

import { selectorPostsState, selectorStatusState, selectorFilterdPosts } from "./selectors";

export const usePostsSelector = () => {
  return useSelector(selectorFilterdPosts);
};

export const usePostsStatus = () => {
  return useSelector(selectorStatusState);
};

export const useFetchPosts = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
};

export const useAddReaction = () => {
  const dispatch = useDispatch();
  return useCallback(
    (id, name) => {
      dispatch(addreaction({ id, name }));
    },
    [dispatch]
  );
};
