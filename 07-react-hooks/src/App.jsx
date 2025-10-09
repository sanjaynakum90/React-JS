import React, { useState } from 'react'
import Usestate from './Hooks/Usestate'
import Objectusestate from './Hooks/Objectusestate'
import Lifecycle from './Hooks/LifeCycle'
import UseEffect from './Hooks/UseEffect'
import Onchange from './Evets/Onchange'
import Onclick from './Evets/Onclick'
import Onsubmit from './Evets/Onsubmit'


const App = () => {

  const [show, setshow] = useState(true)
  return (
    <>
      {/* <Usestate /> */}
      {/* <Objectusestate /> */}

      {/* <button onClick={() => setshow((prev) => !prev)}>show</button> */}

      {/* {<button onClick={() => setshow((prev) => !prev)}>{show ? "hide" : "show"}{" "}</button>} */}

      {/* {show && <Lifecycle />} */}

      {/* <Lifecycle /> */}

      {/* <UseEffect /> */}

      {/* <Onchange /> */}

      {/* <Onclick /> */}

      <Onsubmit/>
    </>
  )
}

export default App