import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>Evento</h4>
          <p>Easily book tickets for your favorite events with our secure and user-friendly platform.</p>
        </div>
        <div>
          <h4>About us</h4>
          <p>Our Story</p>
        </div>
        <div>
          <h4>Contact us</h4>
          <p>Email: dev.yakeh@gmail.com</p>
          <p>Phone: +919322070871</p>
          <div className="social-icons">
            <img src="src\assets\WhatsAppLogo.png" alt="WhatsApp" />
            <img src="src\assets\instaLogo.png" alt="Instagram" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
