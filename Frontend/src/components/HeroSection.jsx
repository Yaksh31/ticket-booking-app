import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Reserve your spot! <br />"Book Your Ticket Now"</h1>
        <p>and experience hassle-free booking</p>
      </div>
      <div className="hero-image">
        <img src="src\assets\herosection.png" alt="Ticket Booking" />
      </div>
    </section>
  );
};

export default HeroSection;
