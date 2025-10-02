import { useState } from "react";

const State = () => {
    const [count, setCount] = useState(5);

    //   const handleClick = () => {
    //     setCount(count + 1);
    //   };

    return (
        <>
            <h1>{count}</h1>
            {/* <button onClick={handleClick}>increase</button> */}
            <button onClick={() => setCount(count + 1)}>increase</button>
        </>
    );
};

export default State;