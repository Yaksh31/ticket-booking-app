import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src\assets\header logo main.png" alt="Logo" />
      </div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#events">Events</a>
        <a href="#support">Support</a>
        <a href="#login">Log in</a>
      </nav>
    </header>
  );
};

export default Header;
