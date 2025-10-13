import React, { useRef } from "react";

const Focus = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputRef} />

            <button onClick={handleClick}>click to focus</button>
        </>
    );
};

export default Focus;