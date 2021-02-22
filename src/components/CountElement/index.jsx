import React from "react";

const CountElement = (props) => {
  const { count, step, autoclickTimeout } = props;
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Step: {step}</h2>
      <h3>Autoclicker: {autoclickTimeout} seconds</h3>
    </div>
  );
};

export default CountElement;
