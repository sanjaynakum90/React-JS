import React from 'react'
import Navbar from "./Component/Navbar"
import Carousel from "./Component/Carousel"
import About from './Component/About'

const App = () => {
  return (

    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Carousel />
        <About />
      </main>
    </>
  )
}

export default App