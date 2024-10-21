import React from 'react';
import './EventCard.css';

// Make sure the path here matches the location of your images in the assets folder
const ASSETS_PATH = '/assets/';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        {/* Construct the full path dynamically */}
        <img src={`${ASSETS_PATH}${event.imageName}`} alt={event.title} />
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


