import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState("");

  // useEffect(() => {
  //   console.log("this will print again and again");
  // });

  // useEffect(() => {
  //   console.log("this will print again and again");
  // }, []);

  useEffect(() => {
    console.log("this will print again and again");

    return () => {
      console.log("this will unmount");
    };
  }, [count]);

  return (
    <>
      {count}

      <br />
      <button onClick={() => setCount((count) => count + 1)}>increase</button>
      <br />
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />
      {input}
    </>
  );
};

export default LifeCycle;
