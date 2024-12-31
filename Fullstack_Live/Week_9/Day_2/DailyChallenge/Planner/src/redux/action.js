export const ADD_TASK = "add_task";
export const REVMOVE_TASK = "remove_task"

export const addTask = (name, date) =>{
    return{
        type: ADD_TASK,
        playload:{name, date},
    }
}
export const removeTask = (id) =>{
    return{
        type: REVMOVE_TASK,
        playload:id,
    }
}
