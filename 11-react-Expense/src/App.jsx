import React from 'react'
import InputForm from './Components/InputForm'
import ExpenseContext from './Components/ExpenseContext'
import ExpenseList from './Components/ExpenseList'
import ExpenseData from './Components/ExpenseData'


const App = () => {
  return (
    <>
      <ExpenseContext>
        <InputForm />
        <ExpenseList />
      </ExpenseContext>
    </>
  )
}

export default App