import React from 'react';
import './EventDetailsSection.css';
import Header from './Header';
import SimilarEventsDetails from './SimilarEventsDetails';
import Footer from './Footer';


const EventDetailsSection = () => {
  return (
    <div className="event-page-container">
      <Header />

      {/* Event Details Section */}
      <div className="event-details-container">
        <div className="event-details-image">
          <img src="src\assets\ohHello.jpg" alt="Event Poster" />
        </div>
        <div className="event-details-info">
          <h1>Oh Hello! - A stand-up Comedy Special by Talyu Pookie 🎀</h1>
          <h3>Comedy</h3>
          <p><i className="fa fa-calendar"></i> Wed, 3 Oct - 5:00 PM</p>
          <p><i className="fa fa-map-marker"></i> Vadodara, Gujarat</p>
          <div className="ticket-section">
            {/* <span>₹499</span> */}
            <button className="buy-button-eds">
              <span className="price">₹499</span>
              <span className="divider">|</span>
              <span className="buy-text">Book Now</span>
            </button>

          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section">
        <h2>About</h2>
        <p>Rahul Dua's *OH HELLO!* is a 60-minute stand-up special that's being hailed as one of the best to come out of the Indian comedy scene.</p>
        <p>With witty observations from his life, Rahul takes you on a journey through his "circus" of a household and a rib-tickling story about a wild night in a New Delhi hotel with his girlfriend.</p>
        <p>After performing in 25 countries and entertaining over 120,000 people live, he's now bringing this show to the internet for a limited 17-day streaming event on Insider.</p>
        <p>Fully family-friendly, this special is perfect to watch with anyone — parents, kids, friends, or even frenemies.</p>
        <p>And don't miss the surprise waiting for you at the end!</p>
        <p>Rahul has poured years of love and labor into this show, and now it's your turn to enjoy the fun.</p>
      </div>
      <SimilarEventsDetails />
      <Footer />





    </div>
  );
};

export default EventDetailsSection;
