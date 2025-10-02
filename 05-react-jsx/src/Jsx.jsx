// without jsx

import React from "react";

// const Jsx = () => {
//   const element = React.createElement(
//     "h1",
//     null,
//     "this is without jsx example"
//   );

//   return React.createElement("div", null, element);
// };

// export default Jsx;

// with jsx

// const Jsx = () => {
//   const element = <h1>this is jsx example</h1>;

//   const element2 = <h2>this is element 2</h2>;

//   return (
//     <div>
//       {element}
//       {element2}
//     </div>
//   );
// };

// export default Jsx;

// with React.fragment

// const Jsx = () => {
//   const element = <h1>this is jsx example</h1>;

//   const element2 = <h2>this is element 2</h2>;

//   return (
//     <React.Fragment>
//       {element}
//       {element2}
//     </React.Fragment>
//   );
// };

// export default Jsx;

const Jsx = () => {
  const element = <h1>this is jsx example</h1>;

  const element2 = <h2>this is element 2</h2>;

  return (
    <>
      {element}
      {element2}
    </>
  );
};

export default Jsx;