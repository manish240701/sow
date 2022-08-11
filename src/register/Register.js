import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const Register = () => {
  return (
    <div className="register-container">
      <div class="login-page">
        <div class="form">
          <div class="login">
            <div class="login-header">
              <h3>SignUP</h3>
              <p>
                Please enter your <br />
                credentials to sign UP.
              </p>
            </div>
          </div>
          <form class="login-form" action="home.html">
            <input type="text" placeholder="username" />
            <input type="password" placeholder="new password" />
            <input type="password" placeholder="confirm password" />
            <button>signUp</button>
            <p class="message">
              Already have an account <Link to="/login">LoginIn</Link>
            </p>
            <p class="message">
              Return to home <Link to="/">Home</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
