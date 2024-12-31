import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/loginSlice";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        // Set mock email and password when the component mounts
        emailRef.current.value = "mail@abc.com";
        passwordRef.current.value = "123teste";
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        if (userData.email && userData.password) {
            dispatch(loginUser(userData));
        } else {
            console.error("Please provide valid login credentials.");
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

export default Login;
