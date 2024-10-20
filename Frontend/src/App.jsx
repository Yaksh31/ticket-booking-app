import React from "react";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";
import EventPage from "./components/EventPage";
import EventDetailsSection from "./components/EventDetailsSection";
import Checkout from "./components/Checkout";
import HelpPage from "./components/HelpPage";

function App() {
  return (
    <>
      <LoginPage />
      <Signup/>
       <HomePage/> 
      <EventPage/>
      <EventDetailsSection/>
      <Checkout/>
      <HelpPage/>
    </>
  );
}

export default App;
