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


import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the User interface for the API data
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data); // Set fetched users in the state
        setLoading(false); // Stop loading once data is fetched
      } catch (err) {
        setError("Failed to fetch users."); // Set error message
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchData();
  }, []);

  // Render
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>{error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
