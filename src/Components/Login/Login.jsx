import React, {useState} from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {login} from "../../Service/UserService";

function Login() {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const handleEmailChange = (event)=> {
            setEmail(event.target.value);
        }

        const handlePasswordChange = (event)=> {
            setPassword(event.target.value);
        }

        const handleSubmit = (event) => {
            event.preventDefault();
                const payload = {"email":email, "password":password}
                login(payload);
        }

    return (
        <div className="login-container">
            <h2>Login Form</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                </div>
                <div className="form-group">
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
