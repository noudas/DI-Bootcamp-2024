// Exercise 3: Creating a Data Fetching and Caching System
// Goal
// Build a reusable system in React (with TypeScript) that fetches data from an API, 
// caches the results to prevent redundant network requests, 
// and allows refreshing (re-fetching) when necessary.

// What Is a Caching System?
// A caching system stores data in memory (or another storage mechanism) so that subsequent requests for the same data do not always require a network call. 
// This can significantly improve performance and user experience by reducing loading times and avoiding unnecessary API calls.

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
import { useState, useEffect, useRef } from "react";

type CacheEntry<T> = {
  data: T;
  timestamp: number;
};

type FetchConfig = {
  maxAge: number; // Cache duration in milliseconds
};

export const useDataFetching = <T>(
  url: string,
  config: FetchConfig
) => {
  const cache = useRef<Record<string, CacheEntry<T>>>({});
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (forceRefresh = false) => {
    setLoading(true);
    setError(null);

    // Check cache
    const cachedEntry = cache.current[url];
    const isCacheValid =
      cachedEntry && Date.now() - cachedEntry.timestamp < config.maxAge;

    if (isCacheValid && !forceRefresh) {
      setData(cachedEntry.data);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      const fetchedData: T = await response.json();
      setData(fetchedData);

      // Save to cache
      cache.current[url] = { data: fetchedData, timestamp: Date.now() };
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const invalidateCache = () => {
    delete cache.current[url];
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(true),
    invalidateCache,
  };
};


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
