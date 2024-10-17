import React from 'react';
import './Recommended.css';

const events = [
  {
    id: 1,
    title: "Oh Hello! - A stand-up Comedy Special by Talyu Pookie",
    date: "Wed, 3 oct - 5:00 PM",
    location: "Vadodadara, Gujarat",
    price: "₹499",
    imgSrc: "src/assets/ohHello.jpg", // Update with actual image path
  },
  {
    id: 2,
    title: "Tum Zindagi Ban Gaye - Medzy | Bollywood New Song",
    date: "Thu, 4 oct - 11:00 AM",
    location: "Ahmedabad, Gujarat",
    price: "₹799",
    imgSrc: "src/assets/featureEvent2.jpg", // Update with actual image path
  },
  {
    id: 3,
    title: "Basics of stock market by Poojan Sir & Thakkar Sir",
    date: "Sun, 6 oct - 12:00 PM",
    location: "Modasa, Gujarat",
    price: "₹2999",
    imgSrc: "src/assets/stockMarket.jpg", // Update with actual image path
  }
];

const Recommended = () => {
  return (
    <section className="recommended-events">
        <div className='recommended-head'>
        <h2>Recommended Events</h2>
        <button className="recommended-view-more">View more</button>
        </div>
        
        <div className="recommended-events-container">
            {events.map((event) => (
            <div key={event.id} className="recommended-event-card1">
                <img src={event.imgSrc} alt={event.title} />
                <div className="recommended-event-details1">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <div className="recommended-event-footer">
                    <span className="recommended-event-price">{event.price}</span>
                    <button className="recommended-buy-now">Book Now</button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </section>
  );
};

export default Recommended;