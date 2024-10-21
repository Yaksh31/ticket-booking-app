import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import EventList from './EventList';
import './EventPage.css';
import Header from './Header';
import Footer from './Footer';
import Recommended from './Recommended';

function EventPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch events from backend API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/events');
        setEvents(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <SearchBar />
      <div className="content">
        <FilterPanel />
        {loading ? (
          <p>Loading events...</p>
        ) : error ? (
          <p>Error fetching events: {error}</p>
        ) : (
          <EventList events={events} />
        )}
      </div>
      <Recommended /> {/* Display the recommended events */}
      <Footer />
    </div>
  );
}

export default EventPage;
