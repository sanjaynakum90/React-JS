// ex-1

// import { useState } from "react";

// const PassingArgument = () => {
//   const handleClick = (name) => {
//     alert(`hi ${name}`);
//   };

//   return <button onClick={() => handleClick("alice")}>click</button>;
// };

// export default PassingArgument;

// ex-2

// const PassingArgument = () => {
//   const [input, setInput] = useState("");

//   const handleClick = () => {
//     alert(`hi ${input}`);
//   };

//   return (
//     <>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={handleClick}>click</button>
//     </>
//   );
// };

// export default PassingArgument;

// ex-3

const PassingArgument = ({ name }) => {
  const handleClick = (name) => {
    alert(`hi ${name}`);
  };

  return (
    <>
      <button onClick={() => handleClick(name)}>click</button>
    </>
  );
};

export default PassingArgument;
