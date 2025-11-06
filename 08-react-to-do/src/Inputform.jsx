import React, { useState } from 'react'

const Inputform = ({addTodo}) => {
    const [input, setinput] = useState({
        task: "",
        description: ""
    })

    
    const handleInputData = (identifire, e) => {
        setinput((prev) => {
            return {
                ...prev,
                [identifire]: e.target.value
            };
        })
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault(),

        addTodo(input);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder='task' value={input.task} onChange={(e) => handleInputData("task", e)} />

                <br />
                <br />
                <br />
                <input type="text" placeholder='descreption' value={input.description} onChange={(e) => handleInputData("description", e)} />
                <br />
                <br />
                <br />
                <button type='submit'>add</button>
            </form>

        </>
    )
}

export default Inputform