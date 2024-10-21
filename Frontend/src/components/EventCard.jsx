import React from 'react';
import './EventCard.css';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  // Construct the relative path to the assets folder within the src directory
  const eventImage = `/src/assets/${event.imageName}`;

  return (
    <div className="event-card">
      
      <div className="event-image">
        {/* Render the image from the dynamically constructed path */}
        <img src={eventImage} alt={event.title} />
      </div>
      <div className="event-details">
        <h4>{event.title}</h4>
        <h5 className="event-date">{event.date}</h5>
        <h5 className="event-location">{event.location}</h5>
      </div>
    </div>
  );
};

export default EventCard;
