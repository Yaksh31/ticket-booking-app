import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h2>Reserve your spot! </h2>
        <h1>"Book Your Ticket Now"</h1>
        <h3>and experience hassle-free booking</h3>
      </div>
      <div className="hero-image">
        <img src="src\assets\herosection.png" alt="Ticket Booking" />
      </div>
    </section>
  );
};

export default HeroSection;
