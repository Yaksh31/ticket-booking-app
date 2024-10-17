// components/EventList.jsx
import React from 'react';
import EventCard from './EventCard';
import './EventList.css';

const EventList = ({ events = [] }) => {
    console.log(events)
  // Ensure events is defined or default to an empty array
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map(events => (
            <EventCard  key={events.id} event={events} />
        ))
      ) : (
        <p>No events available</p>
      )}
      <button className="view-more">View more</button>
      
    </div>
  );
};

export default EventList;
