import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const UseAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('Must be used within an auth provider');
    }
    return context;
}

export const AuthProvider = ({ children }) =>{
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}