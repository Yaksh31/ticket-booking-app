import React from 'react';
import './SimilarEventsDetails.css';

// Import images
import eventCard1 from '../assets/event_card_5.png';
import eventCard2 from '../assets/event_card_6.png';
import eventCard3 from '../assets/event_card_7.png';

const eventsBookingDetails = [
  {
    id: 1,
    title: "Oh Hello! - A stand-up Comedy Special by Talyu Pookie",
    date: "Wed, 3 Oct - 5:00 PM",
    location: "Vadodara, Gujarat",
    price: "₹499",
    imgSrc: eventCard1, // Use imported image
  },
  {
    id: 2,
    title: "Tum Zindagi Ban Gaye - Medzy | Bollywood New Song",
    date: "Thu, 4 Oct - 11:00 AM",
    location: "Ahmedabad, Gujarat",
    price: "₹799",
    imgSrc: eventCard2, // Use imported image
  },
  {
    id: 3,
    title: "Basics of Stock Market by Poojan Sir & Thakkar Sir",
    date: "Sun, 6 Oct - 12:00 PM",
    location: "Modasa, Gujarat",
    price: "₹2999",
    imgSrc: eventCard3, // Use imported image
  }
];

const SimilarEventsDetails = () => {
  return (
    <section className="featured-events-BookingDetails">
      <h2>YOU MAY LOVE THESE TOO</h2>
      <div className="events-container-BookingDetails">
        {eventsBookingDetails.map((event) => (
          <div key={event.id} className="event-card-BookingDetails">
            <img src={event.imgSrc} alt={event.title} />
            <div className="event-details-BookingDetails">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <div className="event-footer-BookingDetails">
                <span className="event-price-BookingDetails">{event.price}</span>
                <button className="buy-now-BookingDetails">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarEventsDetails;
