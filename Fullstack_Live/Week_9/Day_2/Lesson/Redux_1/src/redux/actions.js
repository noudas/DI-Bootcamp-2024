export const INCREMENT = "add";
export const DECREMENT = "minus";

export const add = () =>{
    return {
        type:INCREMENT,
    }
}


export const minus = () =>{
    return {
        type:DECREMENT,
    }
}