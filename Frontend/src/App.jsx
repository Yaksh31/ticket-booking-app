import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import EventPage from "./components/EventPage";
import HelpPage from "./components/HelpPage";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import EventDetailsSection from "./components/EventDetailsSection"; // Make sure this is correctly imported
import Checkout from "./components/Checkout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define Routes for each page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/support" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/event/:id" element={<EventDetailsSection />} /> {/* Dynamic route for event details */}
      </Routes>
    </Router>
  );
}

export default App;
