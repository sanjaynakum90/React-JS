import { useState } from "react";
import Props from "./Props";

const State = () => { 

    const[count,setCount] = useState(5)
    //   const handleClick = () => {
    //     setCount(count + 1);
    //   };

    return (
        <>
            <h1>{count}</h1>
            {/* <button onClick={handleClick}>increase</button> */}
            <button onClick={() => setcount(count + 1)}>increase</button>
            
            <Props greeting={"good morning"} count={count}></Props>
        </>

    )
}

export default State;