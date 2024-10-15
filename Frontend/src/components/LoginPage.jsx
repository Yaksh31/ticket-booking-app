import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-image">
          <img src="src\assets\LoginSignup_img.jpg" alt="" />
        </div>
        <div className="login-form">
          <h2>Log In</h2>
          <form>
            <div className="input-container">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="login-button">Log In</button>
          </form>
          <div className="login-links">
            <a href="#">Forgot Your Password? Reset Password</a><br/>
            <a href="#">New User? Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
