import React from 'react';

const Autoclick = props => {
  const { autoclickerToggle } = props;
  return (
    <div>
      <button onClick={autoclickerToggle}>autoclick</button>
    </div>
  );
};

export default Autoclick;
