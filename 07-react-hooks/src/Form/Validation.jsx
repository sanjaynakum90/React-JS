import React from 'react'
import { useState } from 'react'

const Validation = () => {

    const [inputData, setinputData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [error, setErrors] = useState({});


    const handleinputData = (field, e) => {
        setinputData((data) => {
            return {
                ...data,
                [field]: e.target.value,
            }
        })
    }

    const validation = () => {
        const newError = {}

        if (!inputData.name.trim()) {
            newError.name = "name is required"
        }

        if (!inputData.email.includes("@")) {
            newError.email = "invalid email format"
        }
        if (inputData.password.length < 6) {
            newError.password = "password length must be at least 6 character "
        }
        return newError;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validateerror = validation()

        if (Object.keys(validateerror).length > 0) {
            setErrors(validateerror)
            return
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your name' value={inputData.name} onChange={(e) => handleinputData("name", e)} />
                {error.name && <h2 style={{ color: "red" }}>{error.name}</h2>}
                <input type="email" placeholder='enter your email' value={inputData.email} onChange={(e) => handleinputData("email", e)} />
                {error.email && <h2 style={{ color: "red" }}>{error.email}</h2>}

                <input type="password" placeholder='enter your password' value={inputData.password} onChange={(e) => handleinputData("password", e)} />
                {error.password && <h2 style={{ color: "red" }}>{error.password}</h2>}

                <button type='submit'>submit</button>
            </form>

        </>
    )
}

export default Validation