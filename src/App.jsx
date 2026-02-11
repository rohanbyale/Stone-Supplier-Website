


import React from 'react'
import Hero from './comp/Hero'
import Statement from './comp/Statement'
import St from './comp/St'
import PremiumOfferings from './comp/Offering'
import ProjectsDelivered from './comp/Project'
import WhyUS from './comp/WhyUS'
import Stats from './comp/Stats'
import Application from './comp/Application'
import WhyNaturalStone from './comp/WhyNaturalStone'
import Gallery from './comp/Gallery'
import Client from './comp/Client'
import Testimonial from './comp/Testimonial'
import ContactAndBrand from './comp/Contact'
import Footer from './comp/Footer'
import Nav from './comp/Nav'
import Product from './comp/Product'

const App = () => {
  return (
    <div>
      <Nav />
     
      <Hero />
      <Statement />
      <WhyUS />
      <Stats />
      <Application />
      <St />
       <Product />
      <PremiumOfferings />

      <ProjectsDelivered />
      <WhyNaturalStone />
      <Gallery />
      <Client />
      <Testimonial />
      <ContactAndBrand />
      <Footer />
    </div>
  )
}

export default App