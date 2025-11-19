import React from 'react'
import Navbar from "./Component/Navbar"
import Carousel from "./Component/Carousel"
import About from './Component/About'
import Packages from './Component/Packages'

const App = () => {
  return (

    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Carousel />
        <About />
        <Packages/>
      </main>
    </>
  )
}

export default App