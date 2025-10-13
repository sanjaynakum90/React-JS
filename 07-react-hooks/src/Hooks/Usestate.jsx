import { useState } from "react";

const UseState = () => {
  const [input, setInput] = useState("");

  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter((count) => count + 1);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="please enter your name"
      />

      <br />

      <h1> {input}</h1>

      <br />

      <h1> counter: {counter}</h1>

      <button onClick={handleIncrease}>increase</button>
      <button onClick={() => setCounter((count) => count - 1)}>decrease</button>
    </>
  );
};

export default UseState;
