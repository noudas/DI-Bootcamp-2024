import { useSelector } from "react-redux";
import { selectorPostState, selectorError, selectorStatus } from "./selectors";

export const usePostSelector = () =>{
    return useSelector(selectorPostState)
}

export const useErrorSelector = () =>{
    return useSelector(selectorError)
}

export const useStatusSelector = () =>{
    return useSelector(selectorStatus)
}