import Jsx from "./jsx";
import State from "./State";
import PrevState from "./PrevState";
import Props from "./Props";
import { classComponent, functionalComponent } from "./Component";


function App() {
  return (
    <>
      {/* <h1>hello</h1>;<Jsx /> */}
      {/* <Jsx></Jsx> */}
      {/* <State /> */}
      {/* <PrevState /> */}

      {/* <props greeting={"good morning"} /> */}

      <classComponent />
      <functionalComponent />

    </>
  );
}

export default App;

// arrow function

// const App = () => {
//   return <h1>hello</h1>;
// };

// export default App;