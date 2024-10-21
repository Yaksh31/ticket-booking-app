import React from "react";
import { Link, useParams } from "react-router-dom";
import "./EventDetailsSection.css";
import Header from "./Header";
import SimilarEventsDetails from "./SimilarEventsDetails";
import Footer from "./Footer";

// Import your images at the top
import ohHello from "../assets/ohHello.jpg";
import featureEvent2 from "../assets/featureEvent2.jpg";
import stockMarket from "../assets/stockMarket.jpg";

// Event details with imported images
const eventDetails = [
  {
    id: 1,
    title: "Oh Hello! - A stand-up Comedy Special by Talyu Pookie",
    date: "Wed, 3 Oct - 5:00 PM",
    location: "Vadodara, Gujarat",
    price: "₹499",
    description: `Rahul Dua's OH HELLO! is a 60-minute stand-up special that's being hailed as one of the best to come out of the Indian comedy scene.

With witty observations from his life, Rahul takes you on a journey through his "circus" of a household and a rib-tickling story about a wild night in a New Delhi hotel with his girlfriend.

After performing in 25 countries and entertaining over 120,000 people live, he's now bringing this show to the internet for a limited 17-day streaming event on Insider.

Fully family-friendly, this special is perfect to watch with anyone — parents, kids, friends, or even frenemies.

And don't miss the surprise waiting for you at the end!

Rahul has poured years of love and labor into this show, and now it's your turn to enjoy the fun.`,
    imgSrc: ohHello, // Use imported image here
  },
  {
    id: 2,
    title: "Tum Zindagi Ban Gaye - Medzy | Bollywood New Song",
    date: "Thu, 4 Oct - 11:00 AM",
    location: "Ahmedabad, Gujarat",
    price: "₹799",
    description: "Enjoy Medzy's latest Bollywood song 'Tum Zindagi Ban Gaye'...",
    imgSrc: featureEvent2, // Use imported image here
  },
  {
    id: 3,
    title: "Basics of Stock Market by Poojan Sir & Thakkar Sir",
    date: "Sun, 6 Oct - 12:00 PM",
    location: "Modasa, Gujarat",
    price: "₹2999",
    description: "Learn the basics of stock trading with expert speakers...",
    imgSrc: stockMarket, // Use imported image here
  },
];

const EventDetailsSection = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const event = eventDetails.find((event) => event.id === parseInt(id)); // Find event details based on ID

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-page-container">
      <Header />
      <div className="event-details-container">
        <div className="event-details-image">
          <img src={event.imgSrc} alt={event.title} />
        </div>
        <div className="event-details-info">
          <h1>{event.title}</h1>
          <h3>{event.date}</h3>
          <p>{event.location}</p>
          <div className="ticket-section">
            <Link to={`/checkout/${event.id}`} style={{ textDecoration: 'none' }}> {/* Change event._id to event.id */}
              <button className="buy-button-eds">
                <span className="price">{event.price}</span>
                <span className="divider">|</span>
                <span className="buy-text">Book Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="about-section">
        <h2>About</h2>
        <p>{event.description}</p>
      </div>

      <SimilarEventsDetails />
      <Footer />
    </div>
  );
};

export default EventDetailsSection;
