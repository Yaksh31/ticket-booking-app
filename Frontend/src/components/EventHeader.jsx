// components/EventHeader.jsx
import React from 'react';
import './EventHeader.css'

const EventHeader = ({ title, date, location }) => {
  return (
    <div className="event-header">
      <h2>{title}</h2>
      <p>{date} | {location}</p>
    </div>
  );
};

export default EventHeader;
