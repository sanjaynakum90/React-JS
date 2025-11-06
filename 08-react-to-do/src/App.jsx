import React, { useState } from 'react'
import Inputform from './Inputform'

const App = () => {
  const [todoData, setodoData] = useState([])


  const addTodo = (input) => {
    const newData = {
      id: Date.now(),
      task: input.task,
      description: input.description,
    };

    setodoData((prevData) => [...prevData, newData])
  }

  console.log("todoData", todoData);

  return <Inputform addTodo={addTodo} />

}

export default App