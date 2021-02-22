import React from 'react';

const StepControls = props => {
  const { changeMode, stepHandle } = props;
  return (
    <div>
      <button onClick={changeMode}>Change mode</button>
      <button
        onClick={() => {
          stepHandle(+1);
        }}
      >
        Step +
      </button>
      <button
        onClick={() => {
          stepHandle(-1);
        }}
      >
        Step -
      </button>
    </div>
  );
};

export default StepControls;
