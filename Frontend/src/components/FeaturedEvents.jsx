import React from 'react';
import './FeaturedEvents.css';

const eventsHomePage = [
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

const FeaturedEvents = () => {
  return (
    <section className="featured-events-homePage">
      <h2>Featured Events</h2>
      <div className="events-container-homePage">
        {eventsHomePage.map((event) => (
          <div key={event.id} className="event-card-homePage">
            <img src={event.imgSrc} alt={event.title} />
            <div className="event-details-homePage">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <div className="event-footer-homePage">
                <span className="event-price-homePage">{event.price}</span>
                <button className="buy-now-homePage">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;