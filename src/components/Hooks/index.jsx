import React, { useState, useEffect } from 'react';

const Hooks = () => {
  const [state, setState] = useState(0);

  const handleClick = () => setState(state + 1);

  useEffect(() => {
    console.log('outer');
    document.addEventListener('click', handleClick);
    return () => {
    document.removeEventListener('click', handleClick);

      console.log('inner');
    };
  });
  return (
    <div>
      <h1>hooks</h1>
      <h3>Click: {state}</h3>
    </div>
  );
};

export default Hooks;
