// components/EventList.jsx
import React from "react";
import EventCard from "./EventCard";
import "./EventList.css";

const EventList = ({ events = [] }) => {
  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map(
          (
            event // Correctly map events and pass each event to EventCard
          ) => <EventCard key={event._id} event={event} />
        )
      ) : (
        <p>No events available</p>
      )}
      <button className="view-more-eventList">View more</button>
    </div>
  );
};

export default EventList;
