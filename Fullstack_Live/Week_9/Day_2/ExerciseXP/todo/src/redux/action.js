import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from "./actiontypes";

export const add = (text) =>{
    return{
        type: ADD_TODO,
        payload:{text},
    }
}

export const toggle = (id) =>{
    return{
        type: TOGGLE_TODO,
        payload: {id},
    }
}

export const remove = (id) =>{
    return{
        type: REMOVE_TODO,
        payload: {id},
    }
}