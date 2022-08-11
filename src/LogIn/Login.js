import React from "react"
import { Link } from "react-router-dom";
import "./Login.css"
const Login = () =>{
    return (
        <div className = "login-container">
            <div className="login-page">
                <div className="form">
                    <div className="login">
                        <div className="login-header">
                            <h3>SignIN</h3>
                            <p>Please enter your credentials to login.</p>
                        </div>
                    </div>
                    <form className="login-form" action="home.html">
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>signIn</button>
                        <p className="message">Not registered? <Link to ="/register">Create an account</Link></p>
                        <p className="message">Return to home <Link to="/">Home</Link></p>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Login;