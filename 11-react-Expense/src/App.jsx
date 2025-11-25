import React from 'react'
import InputForm from './Components/InputForm'
import ExpenseContext from './Components/ExpenseContext'

const App = () => {
  return (
    <>
      <ExpenseContext>
        <InputForm />
      </ExpenseContext>
    </>
  )
}

export default App