import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { loginUser, setUser } from "../redux/loginSlice";

const Login = (props) =>{
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
    
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    
        if (email && password) {
          const user = {
            name: "user",
            email: email,
            id: new Date().getTime(),
          };
    
          dispatch(setUser(user));
          dispatch(loginUser());
        } else {
          alert("Please fill in both fields.");
        }
    };

    
    return (
        <div>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label>Email:</label>
                <input
                    type="email"
                    ref={emailRef}
                    placeholder="Enter your email"
                    required
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    ref={passwordRef}
                    placeholder="Enter your password"
                    required
                />
            </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login