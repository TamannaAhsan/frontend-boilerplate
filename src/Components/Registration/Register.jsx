import React, {useState} from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {register} from "../../Service/UserService";

function Register() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState('');

    const handleUsernameChange = (event)=> {
        setUserName(event.target.value);
    }

    const handleEmailChange = (event)=> {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event)=> {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event)=> {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(password===confirmPassword){
            const payload = {"username":userName, "email":email, "password":password, "confirmPassword": confirmPassword}
            register(payload);
        }else
            console.log("Password and Confirm Password did not match!")
    }

    return (
        <div className="registration-container">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" placeholder="Username" value={userName} onChange={handleUsernameChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="ConfirmPassword" name="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} required/>
                </div>

                <div className="form-group">
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </div>

                <div className="error-message">{passwordError}</div> <div className="error-message">{passwordError}</div>
            </form>
        </div>
    );
}

export default Register;
