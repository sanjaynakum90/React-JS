import React from 'react'
import Header from "./Components/Header"
import Quiz from './Components/Quiz'


const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Quiz />
      </main>
    </>
  )
}

export default App