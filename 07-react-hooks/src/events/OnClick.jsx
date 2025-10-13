import React from "react";

const OnClick = () => {
  const handleClick = () => {
    alert("button clicked");
  };

  return <button onClick={handleClick}>click</button>;
};

export default OnClick;
