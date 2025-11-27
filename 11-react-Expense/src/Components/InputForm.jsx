import React, { useContext, useState, useEffect } from 'react'
import { expense } from './ExpenseContext'

const InputForm = () => {

    const [input, setInput] = useState({
        title: "",
        amount: 0,
        type: "debit",
        category: "",
    })

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })

    }

    const { Add, editValue } = useContext(expense);

    useEffect(() => {
        editValue ? setInput(editValue) : ""
    }, [editValue])


    const handleSubmit = (e) => {
        e.preventDefault();
        
        Add(input)
        setInput({ title: "", amount: 0, type: "", category: "" })
    }
    return (

        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='title' value={input.title} onChange={(e) => handleChange("title", e)} />
                <br />
                <br />
                <input type="number" placeholder='Amount' value={input.amount} onChange={(e) => handleChange("amount", e)} />
                <br />
                <br />
                <div>
                    <span>debit</span>
                    <input type="radio" name="type" id='debit' value="debit" checked={input.type === "debit"} onChange={(e) => handleChange("type", e)} />
                    <span>credit</span>
                    <input type="radio" name='type' id='credit' value="credit" checked={input.type === "credit"} onChange={(e) => handleChange("type", e)} />
                </div>
                <br />
                <br />
                <br />
                <select name="category" id="category" value={input.category} onChange={(e) => handleChange("category", e)}>
                    <option value="">select category</option>
                    <option value="general">general</option>
                    <option value="travel">Travel</option>
                    <option value="food">Food</option>
                    <option value="shopping">Shopping</option>
                </select>
                <br />
                <br />
                <br />
                <button type='submit'>{editValue ? "update" : "Add"}</button>
            </form>
        </>
    )
}

export default InputForm