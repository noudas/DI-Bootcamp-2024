// 🌟 Exercise 4: Creating a React Component with Optional Props
// What You Will Learn:

// How to define an interface with optional props in TypeScript.
// How to handle optional props in a React component.
// How to provide default content when optional props are not available.
// Time Needed: 15 minutes

// Instructions
// Create a new UserCard.tsx component
import React from "react";

// Define interface with optional name, age, and role props
interface Props{
    name?: string;
    age?: number;
    role?: string;
}

const UserCard: React.FC<Props> = ({ name = "John Doe", age = 0, role = "No Role" }) =>{
    return(
        <div className="card">
            <h1>{name}</h1>
            <h2>{age !== 0 ? age : "Ageless"}</h2>
            <h3>{role}</h3>
        </div>
    )
}

export default UserCard
// Implement default values for optional props
// Test component with various prop combinations
// Success Criteria:

// Component works with all props provided
// Component works with some props omitted
// Default values display correctly
// TypeScript properly handles optional props