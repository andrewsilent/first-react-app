import React from 'react';

const Mode = props => {
  const { changeMode } = props;
  return <button onClick={changeMode}>Change count mode</button>;
};

export default Mode;
