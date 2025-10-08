import { useEffect } from "react";
import { useState, Usestate } from "react";


const Lifecycle = () => {

    const [count, setcount] = useState(0)

    const [input, setinput] = useState("")

    // useEffect(() => {
    //     console.log("this will print again and again");

    // })


    // useEffect(() => {
    //     console.log("this will print again and again");

    // }, [count])


    useEffect(() => {
        console.log("this will print again and again");

        return () => {
            console.log("this will unmount");

        }

    }, [])

    return (

        <>
            <br />
            <br />
            <br />
            {count}
            <br />

            <button onClick={() => setcount((count) => count + 1)}>increase</button>
            <br />
            <br />
            <br />

            <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />

            <br />

            {input}

        </>
    )
}


export default Lifecycle