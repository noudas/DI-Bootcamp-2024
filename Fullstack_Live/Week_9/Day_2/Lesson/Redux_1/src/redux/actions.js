export const INCREMENT = "add";
export const DECREMENT = "minus";
export const TITLECHANGE = "title"

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

export const title = (NEWTITLE) =>{
    return{
        type:TITLECHANGE,
        payload:NEWTITLE,
    }
}