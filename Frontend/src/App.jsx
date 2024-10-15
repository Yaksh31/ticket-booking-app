import React from "react";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import FeaturedEvents from "./components/FeaturedEvents";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <LoginPage />
      <Signup/> */}
      <Header/>
      <HeroSection/>
      <SearchBar/>
      <FeaturedEvents/>
      <Footer/>
    </>
  );
}

export default App;
