import { createContext, useContext, useEffect, useState } from "react";

// Create a context to manage authentication state and functionality
const AuthContext = createContext();

// Custom hook to access the authentication context
export const UseAuth = () => {
    // Access the context value
    const context = useContext(AuthContext);

    // Throw an error if the hook is used outside of the AuthProvider
    if (!context) {
        throw new Error('Must be used within an auth provider');
    }

    // Return the context value for use in consuming components
    return context;
}

// Authentication provider to wrap the application or parts of it
export const AuthProvider = ({ children }) => {
    // Provide an empty value for now; you can extend this to include
    // state and functions for authentication, such as login/logout
    return (
        <AuthContext.Provider value={{}}>
            {children} {/* Render child components wrapped by the provider */}
        </AuthContext.Provider>
    );
}
