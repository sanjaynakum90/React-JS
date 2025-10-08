import React, { useState } from 'react'
import Usestate from './Hooks/Usestate'
import Objectusestate from './Hooks/Objectusestate'
import Lifecycle from './Hooks/LifeCycle'


const App = () => {

  const [show, setshow] = useState(true)
  return (
    <>
      {/* <Usestate /> */}
      {/* <Objectusestate /> */}

      {/* <button onClick={() => setshow((prev) => !prev)}>show</button> */}

      {<button onClick={() => setshow((prev) => !prev)}>
        {show ? "hide" : "show"}{" "}
      </button>}

      {show && <Lifecycle />}

      {/* <Lifecycle /> */}
    </>
  )
}

export default App