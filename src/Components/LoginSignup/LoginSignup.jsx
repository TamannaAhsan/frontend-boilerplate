import React, {useState} from "react";
import './LoginSignup.css';

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import {register, login, getLoggedInUser, logout} from "../../Service/UserService";

const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event)=> {
        setUserName(event.target.value);
    }

    const handleEmailChange = (event)=> {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event)=> {
        setPassword(event.target.value);
    }

    const handleSubmit = () => {
        if(action==="Login"){
            const payload = {"email":email, "password":password}
            login(payload);
           // const user = getLoggedInUser();
            //console.log("user"+user.token);

        }else {
            const payload = {"username":userName, "email":email, "password":password}
            register(payload);
        }
    }

    const handleLogOut = () => {
       logout();
    }

    return (
        <div className = 'container'>
            <div className= "header">
                <div className= "text">{action}</div>
                <div className= "underline"></div>
            </div>
            <div className= "inputs">
                {action==="Login"?<div></div>:<div className= "input">
                    <img src={user_icon} alt="" />
                    <input type= "text" placeholder="Username" value={userName} onChange={handleUsernameChange}/>
                </div> }


                <div className= "input">
                    <img src={email_icon} alt="" />
                    <input type= "email" placeholder="Email" value={email} onChange={handleEmailChange}/>
                </div>

                <div className= "input">
                    <img src={password_icon} alt="" />
                    <input type= "password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                </div>
            </div>

            {action==="Sign Up"? <div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}

            <div className="submit-container">
                <div className="submit" onClick={handleSubmit}>
                    submit
                </div>

                <div className="submit" onClick={handleLogOut}>
                    logout
                </div>


            </div>

            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

        </div>
    )
}

export default LoginSignup