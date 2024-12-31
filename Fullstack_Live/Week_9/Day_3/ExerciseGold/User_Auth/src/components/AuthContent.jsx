import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Logout from "./Logout";

const AuthContent = () => {
  const isAuthenticated = useSelector((state) => state.login.status);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h2>Welcome, User!</h2>
          <p>You are logged in. Enjoy our platform!</p>
          <Logout />
        </>
      ) : (
        <>
          <h2>Please Log In</h2>
          <Login />
        </>
      )}
    </div>
  );
};

export default AuthContent;
