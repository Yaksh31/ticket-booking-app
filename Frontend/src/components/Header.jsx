import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import logo from '../assets/logo_main_1.png'; // Correct image import using ES6 import

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> {/* Wrap the logo in a Link component */}
          <img src={logo} alt="Logo" /> {/* Use the imported image */}
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link> {/* Navigates to HomePage */}
        <Link to="/events">Events</Link> {/* Navigates to EventPage */}
        <Link to="/support">Support</Link> {/* Navigates to HelpPage */}
        <Link to="/login">Log in</Link> {/* Navigates to LoginPage */}
      </nav>
    </header>
  );
};

export default Header;
