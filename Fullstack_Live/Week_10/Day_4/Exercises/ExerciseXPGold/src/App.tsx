// Exercise 2: Building a Data Table Component with Advanced TypeScript
// What Is a “Data Table Component”?
// A Data Table Component is a reusable React component that displays tabular data of any type. It typically supports:

// Configurable columns (which properties from your data objects to show, column titles, custom rendering for cells, etc.).
// Sorting (allowing users to sort rows by clicking on column headers).
// Selection (selecting one or more rows).
// Filtering (an optional feature to show/hide rows based on specific criteria).
// Your job is to create this table in a generic and type-safe way, so it can handle different data structures without changing the core table code.



// 👩‍🏫 👩🏿‍🏫 What You’ll learn
// Creating complex, reusable interfaces in TypeScript.
// Implementing generic types for flexible components.
// Handling dynamic data rendering with proper typing.
// Managing row selection using React state.
// Time Needed: 25 minutes



// Step-by-Step Instructions
// 1. Define Data and Column Interfaces
// Create an interface that represents how a column is defined (e.g., title, key, sortable, etc.).
// Create a second interface for your table’s props (e.g., data, columns, onSort, onSelect).
// Hint: Use TypeScript generics to allow the table to handle any data structure. For example, if your data objects contain fields like firstName or email, the table can still work without changing its internal logic.

// 2. Build a Generic Table Component
// In a new component (e.g., DataTable.tsx), define a generic type parameter <T> that extends a base shape (like { id: number | string }).
// Accept props that include:
// data: T[] (the array of data to display),
// columns: TableColumn<T>[] (the column definitions),
// optional callbacks like onSort or onSelect.
// Hint: The key of each column often corresponds to a property in the data item. Use keyof T in TypeScript to ensure type safety.

// 3. Add Sorting Functionality
// Keep track of the current sorting configuration in state (sortConfig).
// If a column is marked sortable, handle click events on the header to toggle sorting direction.
// Trigger a callback (onSort) if you want the parent to handle the actual data sorting (or you can sort internally).
// 4. Add Row Selection
// Maintain selected row IDs in a useState hook (e.g., selectedRows).
// Allow selecting/deselecting individual rows via checkboxes.
// Add a checkbox in the header to select/deselect all rows at once.
// Pass the currently selected items to onSelect, if provided.
// 5. Implement Optional Filtering (Optional Feature)
// If you want filtering, you could add a filter method or callback that decides which rows are visible.
// For instance, you might pass a filter prop or manage it externally—this is flexible.
// 6. Render the Table
// Render a <table> element with <thead> and <tbody>.
// Map over data to create rows, and columns to create cells.
// Use a checkbox in each row for selection and in the header for “select all.”


// Exercise 3: Creating a Data Fetching and Caching System
// Goal
// Build a reusable system in React (with TypeScript) that fetches data from an API, caches the results to prevent redundant network requests, and allows refreshing (re-fetching) when necessary.



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
import Form from './components/Form'

function App() {

  return (
    <>
    <Form/>
    </>
  )
}

export default App
