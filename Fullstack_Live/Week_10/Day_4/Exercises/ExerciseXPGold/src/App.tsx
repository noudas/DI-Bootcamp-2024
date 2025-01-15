// Exercise 3: Creating a Data Fetching and Caching System
// Goal
// Build a reusable system in React (with TypeScript) that fetches data from an API, 
// caches the results to prevent redundant network requests, 
// and allows refreshing (re-fetching) when necessary.

// What Is a Caching System?
// A caching system stores data in memory (or another storage mechanism) so that subsequent requests for the same data do not always require a network call. This can significantly improve performance and user experience by reducing loading times and avoiding unnecessary API calls.

// Key points for this exercise:

// Caching: Save fetched data with a timestamp so we know when the data was fetched.
// Max Age: Define how long the cached data is valid (e.g., 5 minutes). Once expired, re-fetch the data.
// Invalidation: Provide a way to manually clear or re-fetch data, even if it’s not yet expired.


// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// How to combine multiple hooks (e.g., useState, useEffect, useMemo) for complex functionality.
// How to implement data caching in TypeScript.
// How to handle loading, error, and success states in a flexible manner.
// How to refresh and invalidate the cache on demand.


// Time Needed
// Approximately 30 minutes.

// Step-by-Step Instructions
// Understand the Data Flow
// You’ll fetch data from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users).
// The first time a user requests data, make a network call and store the response (plus a timestamp) in an in-memory cache.
// On subsequent requests, check whether the cached data is still valid. If it is, use it instead of fetching again.
// If the data is expired or invalid, re-fetch from the API.
// Create a Hook for Data Fetching and Caching
// Hook Name: Create a custom hook (e.g., useDataFetching) that:

// Takes in a url (string) and a config object containing a maxAge property (time in milliseconds).
// Manages loading, error, and data states with useState.
// Maintains a local cache in a useMemo or a ref for storing fetched data.
// Check the Cache:

// Before every fetch, see if the data is already in the cache and if it’s still valid.
// If yes, use the cached data and skip the network request.
// If no, fetch the data from the API.
// Invalidate the Cache:

// Provide a function (e.g., invalidateCache) to remove the cached item.
// After invalidation, re-fetch the data if necessary.
// Refresh the Data:

// Provide a refetch function to allow users to manually re-fetch data, bypassing the cache.
// Handling Different States
// Loading: Show a loading UI when fetching data for the first time or after an invalidation.
// Error: If the API call fails, capture the error and display it. Provide a way to retry.
// Success: Once data is fetched or retrieved from cache, display the data.
// Build a Demonstration Component
// Create a UserList (or any suitable name) component that uses your custom hook to fetch users from https://jsonplaceholder.typicode.com/users.
// Display the loading state, error state, or list of users based on the hook’s return values.
// Include buttons to Refresh (re-fetch data ignoring the cache) and Clear Cache & Refresh (invalidate the cache and then re-fetch).
// Success Criteria
// Proper Caching:

// The same request (url) should not cause repeated network calls within the maxAge time frame.
// Loading and Error States:

// When data is being fetched, show a loading message.
// If the request fails, display an error message.
// Cache Invalidation:

// A user should be able to clear the cache (invalidate) and force a new network call.
// Component Displays All States:

// The demonstration component should show how to trigger each state (loading, error, success).




import './App.css'
import DataTable from './components/DataTable'
import Form from './components/Form'
import { TableColumn } from './interface/types'

// Example data type
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

// Example data
const userData: User[] = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" },
  { id: 3, firstName: "Testimus", lastName: "Maximus", email: "jane@example.com" },
  { id: 4, firstName: "Abraham", lastName: "Lincon", email: "jane@example.com" },
];

// Example column definitions
const userColumns: TableColumn<User>[] = [
  { title: "First Name", key: "firstName", sortable: true },
  { title: "Last Name", key: "lastName", sortable: true },
  { title: "Email", key: "email" },
];


function App() {

  const handleSort = (key: keyof User) => {
    console.log(`Sorting by: ${key}`);
  };

  const handleSelect = (row: User) => {
    console.log("Selected row:", row);
  };

  return (
    <>
    <Form/>
      <DataTable
        data={userData}
        columns={userColumns}
        onSort={handleSort}
        onSelect={handleSelect}
      />
    </>
  )
}

export default App
