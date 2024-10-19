import React from 'react';
import './HelpPage.css';
import Header from './Header';
import Footer from './Footer';

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="help-header">
        <div className="help-text">
          <h1>Hello There!</h1>
          <h2>Help & Support!</h2>
          <p>How can we help you?</p>
        </div>
        <div className="help-image">
          <img src="src/assets/help_page_image_1.png" alt="Help and Support Illustration" />
        </div>
      </div>
      <div className="help-options">
        <div className="option">
          {/* Link to the booking section using an ID */}
          <a href="#booking-section">
            <img src="src\assets\ticket_image_help_page.png" alt="Manage Tickets" />
          </a>
          <p>Manage Tickets</p>
        </div>
        <div className="option">
          <a href="#contact-section">
            <img src="src\assets\touch_image_help_page.png" alt="Get in Touch" />
          </a>
          <p>Get in touch</p>
        </div>
        <div className="option">
          <a href="#feedback-form">
            <img src="src\assets\feedback_image_help_page.png" alt="Feedback" />
          </a>
          <p>Feedback</p>
        </div>
      </div>
    </section>
  );
};

const BookingSection = () => {
  return (
    // Add an ID here to target this section
    <section id="booking-section" className="booking-section">
      <h2>Manage your booking</h2>
      <p>Need to make changes to your event bookings? Use the form below to view, modify, or cancel tickets.<br />
        You can also contact our support team for assistance with any issues.</p>
      <button className="btn-primary">Manage my Booking</button>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact-section" className="contact-section">
      <h2>Contact Us</h2>
      <div className="contact-options">
        <div className="contact-method">
          <img src="src/assets/bulb_image_help_page.png" alt="Email" />
          <p>Send us an email<br />
            support@gmail.com</p>
        </div>
        <div className="contact-method">
          <img src="src/assets/chat_image_help_page.png" alt="Live Chat" />
          <p>Live chat with us</p>
        </div>
        <div className="contact-method">
          <img src="src/assets/call_image_help_page.png" alt="Phone" />
          <p>Call us on<br />
            9327007871</p>
        </div>
      </div>
      <div className='contact-info'>Office hours<br />
        Monday - Friday: 9am - 7pm<br />
        Saturday: 9am - 5pm</div>

        <div className='contact-message'>
          <p>Messaging outside of office hours? Leave us a message and we'll get back to you.</p>
        </div>
    </section>
  );
};

const FeedbackForm = () => {
  return (
    <section id="feedback-form" className="feedback-section">
      <h2>Feedback</h2>
      <p>We value your Feedback!</p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Feedback" required></textarea>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    </section>
  );
};

const HelpPage = () => {
  return (
    <div className="help-page">
      <Header/>
      <HelpSection />
      <BookingSection />
      <ContactSection />
      <FeedbackForm />
      <Footer/>
    </div>
  );
};

export default HelpPage;
