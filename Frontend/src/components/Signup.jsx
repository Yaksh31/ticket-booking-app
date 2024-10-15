import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Left side with the image */}
        <div className="signup-image">
          <img src="src\assets\LoginSignup_img.jpg" alt="Signup Illustration" />
        </div>

        {/* Right side with the form */}
        <div className="signup-form">
          <h2>Sign Up</h2>
          <form>
            {/* Full Name input */}
            <div className="input-container">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Full Name" />
            </div>

            {/* Email input */}
            <div className="input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>

            {/* Password input */}
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </div>

            {/* Signup button */}
            <button type="submit" className="signup-button">Sign Up</button>
          </form>

          {/* Links for existing users */}
          <div className="signup-links">
            <a href="#">Already have an account? Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
