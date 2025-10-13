import React, { useRef } from "react";

const Focus = () => {
  const inputRef = useRef(null);

  const handleRef = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleRef}>click to focus</button>
    </>
  );
};

export default Focus;
