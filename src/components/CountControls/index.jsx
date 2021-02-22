import React from "react";

const CountControls = (props) => {
  const { countHandle, resetCounter, countMode } = props;
  return (
    <div>
      <button onClick={countHandle}>{countMode ? "Counter -" : "Counter +"}</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
};

export default CountControls;
