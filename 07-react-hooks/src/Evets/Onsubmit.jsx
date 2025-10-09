import React, { useState } from 'react'

const Onsubmit = () => {
    const [name, setName] = useState("")

    const handlesubmit = (e) => {
        e.preventDefult()
        console.log(name);

    }
    return (
        <>
            <form onSubmit={handlesubmit}></form>
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <button type='submit'>submit</button>
        </>
    )
}

export default Onsubmit