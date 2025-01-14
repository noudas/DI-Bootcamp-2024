import { useState } from "react";
import axios from 'axios';

const APIBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors('');

        try {
            const response = await axios.post(`${APIBaseUrl}/api/user/login`,{
                email,
                password
            }, { withCredentials: true }
        );
            const {user, token} = response.data;
            console.log({user, token});
            navigate("/dashboard")
            
        } catch (error) {
            setErrors(error.response?.data?.message || "Login Failed");
        }

    }

    return (
        <>
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                        id="email"
                        name="email"
                        type="email"
                        onChange={(e) =>setEmail(e.target.value)}
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                        id="password"
                        name="password"
                        type="password"
                        onChange={(e) =>setPassword(e.target.value)}
                        required
                        />
                    </div>
                    <button type="submit"> Login </button>
                    {error ? <div className="error-message">{error}</div>: null}
                </form>
            </div>
        </>
    )
}

export default Login