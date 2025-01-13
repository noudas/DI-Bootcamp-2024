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

import React from "react";
import './App.css'
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <div>
      <Greeting name="John" messageCount={5} />
      <Counter/>
      <UserCard name="Alice" age={30} role="Developer" />
      <UserCard age={25} />
      <UserCard/>
      <UserList/>
    </div>
  );
};

export default App;