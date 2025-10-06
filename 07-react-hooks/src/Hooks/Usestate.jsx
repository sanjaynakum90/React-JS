import React, { useState } from "react";

const Usestate = () => {
    const [input, setInput] = useState("")

    const [counter, setCounter] = useState(0)


    const handleincrease = () => {
        setCounter((count) => count + 1)
    }
    return (
        <>
            <div className="container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />

                <br />

                <h1>{input}</h1>


                <h1>counter : {counter}</h1>
                <button onClick={handleincrease}>increase</button>

                <button onClick={() => setCounter((count) => count - 1)}>decrease</button>
            </div>

        </>
    )
}

export default Usestate