import React, { useState } from 'react'

const Onchange = () => {
    const [input, setinput] = useState("")
    return (
        <>

            <br />
            <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
            <br />

            {input}
        </>
    )
}

export default Onchange