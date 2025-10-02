import React, { useState } from "react";

const PrevState = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((count) => count + 1);
    };

    // const increment = () => {
    //   setCount(count + 1);
    // };

    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    increment(), increment(), increment(), increment(), increment();
                }}
            >
                +5
            </button>
            <button onClick={increment}>+1</button>
        </>
    );
};

export default PrevState;