import React from "react";
// 🌟 Exercise 2: Creating a React Component with TypeScript
// What You Will Learn:

// How to create a functional React component using TypeScript.
// How to define and enforce types for props using TypeScript interfaces.
// How to render JSX while ensuring type safety through TypeScript.
// Time Needed: 15 minutes

// Instructions
// Create a new Greeting.tsx component file
// Define an interface for props including name and messageCount

// Create the component using the defined props
// Implement the component in App.tsx
// Success Criteria:

// Component compiles without TypeScript errors
// Props are properly typed and enforced
// Component renders correctly with provided props

interface Props {
    name: string;
    messageCount: number;
  }
  
  const Greeting: React.FC<Props> = ({ name, messageCount }) => {
    return (
      <div>
        <h1>
          Hello, {name}! You have {messageCount} new {messageCount === 1 ? 'message' : 'messages'}.
        </h1>
      </div>
    );
  };
  
  export default Greeting;
