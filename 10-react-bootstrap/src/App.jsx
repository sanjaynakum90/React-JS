import React from 'react'
import Navbar from "./Component/Navbar"
import Carousel from "./Component/Carousel"
import About from './Component/About'
import Packages from './Component/Packages'
import Testimonials from './Component/Testimonials'
import Accordion from "./Component/Accordion"
import Footer from './Component/Footer'

const App = () => {
  return (

    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Carousel />
        <About />
        <Packages />
        <Testimonials />
        <Accordion />
        <Footer/>
      </main>
    </>
  )
}

export default App