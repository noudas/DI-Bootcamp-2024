import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../redux/loginSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const buttonRef = useRef();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutUser());
    
    // Example of useRef: focusing on the button after logout
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button ref={buttonRef} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
