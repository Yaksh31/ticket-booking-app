// App.jsx
import React from 'react';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import EventList from './EventList';
import './EventPage.css';
import Header from './Header';
import Footer from './Footer';
import Recommended from './Recommended';

import eventCard1 from '../assets/event_card_1.png';
import eventCard2 from '../assets/event_card_2.png';
import eventCard3 from '../assets/event_card_3.png';
import eventCard4 from '../assets/event_card_4.png';


const events = [
  {
    id: 1,
    image: eventCard1, // Use imported image
    title: 'Yashvi Navratri 2024 with Kinjal Dave',
    date: 'Wed, 3 Oct - 5:00 PM',
    location: 'Vadodara, Gujarat'
  },
  {
    id: 2,
    image: eventCard2, // Use imported image
    title: 'LLC T20 - Konark Suryas Odisha vs Manipal Tigers',
    date: 'Wed, 3 Oct - 5:00 PM',
    location: 'Vadodara, Gujarat'
  },
  {
    id: 3,
    image: eventCard3, // Use imported image
    title: 'Pink 10K Challenge Vadodara',
    date: 'Wed, 3 Oct - 5:00 PM',
    location: 'Vadodara, Gujarat'
  },
  {
    id: 4,
    image: eventCard4, // Use imported image
    title: "Kommune Vadodara's Open Mic",
    date: 'Wed, 3 Oct - 5:00 PM',
    location: 'Vadodara, Gujarat'
  }
];


function EventPage() {
  return (
    <div className="app-container">
      <Header/>
      <SearchBar />
      <div className="content">
        <FilterPanel/>
        <EventList events={events} />
        
      </div>
      <Recommended/>
      <Footer/>
    
    </div>
  );
}

export default EventPage;
