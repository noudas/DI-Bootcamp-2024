import { useSelector, useDispatch } from "react-redux";
import { selectorPostState, selectorError, selectorStatus, selectorUserIds } from "./selectors";
import { useCallback } from "react";
import { fetchPosts, reactionAdded, setSelectedUser } from "./slice";

export const usePostSelector = () => {
    return useSelector(selectorPostState);
}

export const useErrorSelector = () => {
    return useSelector(selectorError);
}

export const useStatusSelector = () => {
    return useSelector(selectorStatus);
}

export const useFetchPost = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
};

export const useAddReaction = () => {
    const dispatch = useDispatch();
    return useCallback((id, name) => {
        dispatch(reactionAdded({ id, name }));
    }, [dispatch]);
};

export const useSelectedUser = () => {
    return useSelector(selectSelectedUser);
};

export const useSetSelectedUser = () => {
    const dispatch = useDispatch();
    return useCallback((userId) => {
        dispatch(setUserSelected(userId));
    }, [dispatch]);
};