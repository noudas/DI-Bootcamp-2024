import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectorUserIds, selectSelectedUser, setSelectedUser } from "../redux/hooks";

const UserBox = () => {
    const userIds = useSelector(selectorUserIds);
    const selectedUser = useSelector(selectSelectedUser);
    const dispatch = useDispatch();

    const handleUserChange = (e) => {
        dispatch(setSelectedUser(e.target.value));
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
