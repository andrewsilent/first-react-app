import React from "react";

const Autoclick = (props) => {
  const { autoclickerToggle } = props;
  return (
    <div>
      <button onClick={autoclickerToggle}>autoclick</button>
      <button>unknown</button>
      <button>unknown</button>
    </div>
  );
};

export default Autoclick;
