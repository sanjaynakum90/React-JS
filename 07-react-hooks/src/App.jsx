// import UseState from "./hooks/UseState";

// import { useState } from "react";
import Conditional from "./events/Conditional";
import OnChange from "./events/OnChange";
import OnClick from "./events/OnClick";
import OnSubmit from "./events/OnSubmit";
import PassingArgument from "./events/PassingArgument";
import List from "./lists/List";
import Focus from "./refs/Focus";
import Uncontrolled from "./refs/Uncontrolled";

// import UseEffect from "./hooks/UseEffect";

// import { useState } from "react";
// import LifeCycle from "./hooks/LifeCycle";
// import ObjectUseState from "./hooks/ObjectUseState";

const App = () => {
  // const [show, setShow] = useState(true);

  // const [input, setInput] = useState("");
  return (
    <>
      {/* <UseState /> */}
      {/* <ObjectUseState /> */}

      {/* <button onClick={() => setShow((prev) => !prev)}>
        {show ? "hide" : "show"}{" "}
      </button> */}

      {/* {show && <LifeCycle />} */}

      {/* <UseEffect /> */}

      {/* events */}

      {/* <OnClick /> */}

      {/* <OnChange /> */}

      {/* <OnSubmit /> */}

      {/* passing argument in event using props  */}

      {/* <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <PassingArgument name={input} /> */}

      {/* conditional rendering example */}
      {/* <Conditional /> */}

      {/* lists */}

      {/* <List /> */}

      {/* ref */}
      {/* <Focus /> */}
      <Uncontrolled />
    </>
  );
};

export default App;