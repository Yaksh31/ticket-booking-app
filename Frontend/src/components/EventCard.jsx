// components/EventCard.jsx
import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className='event-image'>
      <img src={event.image} alt={event.title} />
      </div>
      <div className="event-details">
        <h4>{event.title}</h4>
        <h5>{event.date}</h5>
        <h5>{event.location}</h5>
      </div>
    </div>
  );
};

export default EventCard;
