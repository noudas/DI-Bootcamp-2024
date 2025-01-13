// 🌟 Exercise 1: Creating a New React Project with TypeScript using Vite
// What You Will Learn:

// How to set up a new React project with TypeScript using Vite.
// How to use the create-vite tool to initialize a project.
// How to install necessary dependencies and start the development server.
// Time Needed: 10 minutes

// Instructions
// Create a new Vite project with React and TypeScript template
// Install all necessary dependencies
// Start the development server
// Verify the project is running correctly
// Success Criteria:

// Vite + React welcome page visible in browser
// TypeScript configuration files present
// Development server running without errors


// 🌟 Exercise 4: Creating a React Component with Optional Props
// What You Will Learn:

// How to define an interface with optional props in TypeScript.
// How to handle optional props in a React component.
// How to provide default content when optional props are not available.
// Time Needed: 15 minutes

// Instructions
// Create a new UserCard.tsx component
// Define interface with optional name, age, and role props
// Implement default values for optional props
// Test component with various prop combinations
// Success Criteria:

// Component works with all props provided
// Component works with some props omitted
// Default values display correctly
// TypeScript properly handles optional props


// 🌟 Exercise 5: Using useEffect Hook with TypeScript in React
// What You Will Learn:

// How to use the useEffect hook in a functional React component.
// How to fetch data from an API using useEffect.
// How to handle loading state and display data in the component.
// Time Needed: 20 minutes

// Instructions
// Create a new UserList.tsx component
// Define User interface for API data
// Implement loading and error states
// Fetch and display user data from the API https://jsonplaceholder.typicode.com/users. Use the useEffect hook to fetch data from the API when the component mounts.
// Handle potential errors properly
// Display the fetched data in the component.
// Success Criteria:

// Data fetches and displays correctly
// Loading state shows while fetching
// Errors are properly handled and displayed
// All API data is properly typed

import React from "react";
import './App.css'
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="John" messageCount={5} />
      <Counter/>
    </div>
  );
};

export default App;