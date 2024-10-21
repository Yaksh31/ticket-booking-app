import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from './Herosection';
import Footer from './Footer';
import FeaturedEvents from './FeaturedEvents';
import Header from './Header';
import SearchBar from './SearchBar';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in (by checking the token)
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if token is not present
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <HeroSection />
      <SearchBar />
      <FeaturedEvents />
      <Footer />
    </div>
  );
};

export default HomePage;
