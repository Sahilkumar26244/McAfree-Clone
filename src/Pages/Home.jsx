import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroSection from '../Components/HeroSection'
import ContactSection from '../Components/ContactSection'
import ActivateButton from '../Components/SubComponents/ActivateButton'
import Testimonials from '../Components/Testimonials'
import BestThings from '../Components/BestThings'

function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ActivateButton/>
      <Testimonials/>
      <BestThings/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home