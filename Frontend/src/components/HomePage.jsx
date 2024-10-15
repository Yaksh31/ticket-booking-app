import React from 'react'
import HeroSection from './Herosection'
import Footer from './Footer'
import FeaturedEvents from './FeaturedEvents'
import Header from './Header'
import SearchBar from './SearchBar'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <HeroSection />
      <SearchBar />
      <FeaturedEvents />
      <Footer />
    
    </div>
  )
}

export default HomePage
