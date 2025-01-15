import React from "react";
import { useDataFetching } from "../utils/useDataFetching";

const UserList = () => {
  const {
    data: users,
    loading,
    error,
    refetch,
    invalidateCache,
  } = useDataFetching("https://jsonplaceholder.typicode.com/users", {
    maxAge: 5 * 60 * 1000, // Cache valid for 5 minutes
  });

  return (
    <div>
      <h1>User List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {users && (
        <ul>
          {users.map((user: { id: number; name: string }) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={refetch}>Refresh</button>
      <button onClick={() => { invalidateCache(); refetch(); }}>
        Clear Cache & Refresh
      </button>
    </div>
  );
};

export default UserList;
