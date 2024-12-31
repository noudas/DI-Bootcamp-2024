import { ADD_TASK, REVMOVE_TASK } from "./action";

const initialState = {
    tasks:[]
}

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newTask = [...state.tasks]
            newTask.push({
                id: uuidv4(),
                name:action.payload.name,
                date:action.payload.date,
                active:true,
            })
            return {...state, tasks: newTask}
            break;
        
        case REVMOVE_TASK:
            break;
    
        default:
            return state;
    }
}