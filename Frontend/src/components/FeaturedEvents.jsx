import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import "./FeaturedEvents.css";

const eventsHomePage = [
  {
    id: 1,
    title: "Oh Hello! - A stand-up Comedy Special by Talyu Pookie",
    date: "Wed, 3 Oct - 5:00 PM",
    location: "Vadodara, Gujarat",
    price: "₹499",
    imgSrc: "src/assets/ohHello.jpg",
  },
  {
    id: 2,
    title: "Tum Zindagi Ban Gaye - Medzy | Bollywood New Song",
    date: "Thu, 4 Oct - 11:00 AM",
    location: "Ahmedabad, Gujarat",
    price: "₹799",
    imgSrc: "src/assets/featureEvent2.jpg",
  },
  {
    id: 3,
    title: "Basics of Stock Market by Poojan Sir & Thakkar Sir",
    date: "Sun, 6 Oct - 12:00 PM",
    location: "Modasa, Gujarat",
    price: "₹2999",
    imgSrc: "src/assets/stockMarket.jpg",
  },
];

const FeaturedEvents = () => {
  return (
    <section className="featured-events-homePage">
      <h2>Featured Events</h2>
      <div className="events-container-homePage">
        {eventsHomePage.map((event) => (
          <div key={event.id} className="event-card-homePage">
            <Link to={`/event/${event.id}`} style={{ textDecoration: "none" }}>
              <img src={event.imgSrc} alt={event.title} />
              <div className="event-details-homePage">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <div className="event-footer-homePage">
                  <span className="event-price-homePage">{event.price}</span>
                  {/* No Link used, just button with click handler */}
                  <button
                    className="buy-now-homePage"
                    // onClick={() => handleNavigate(event.id)}  // Call the handleNavigate function
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedEvents;
