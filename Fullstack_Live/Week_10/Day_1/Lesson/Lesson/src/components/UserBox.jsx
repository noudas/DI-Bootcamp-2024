import React from "react";
import { useUserIdsSelector, useSelectedUser, useSetSelectedUser } from "../redux/hooks";

const UserBox = () => {
    const userIds = useUserIdsSelector(); // Get unique user IDs
    const selectedUser = useSelectedUser(); // Get selected user
    const setSelectedUser = useSetSelectedUser(); // Dispatch function to set user

    const handleUserChange = (e) => {
        setSelectedUser(e.target.value); // Update selected user
    };

    return (
        <div>
            <h3>Authors</h3>
            <select value={selectedUser} onChange={handleUserChange}>
                <option value="">All Authors</option>
                {userIds.map((userId) => (
                    <option key={userId} value={userId}>
                        User {userId}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UserBox;
