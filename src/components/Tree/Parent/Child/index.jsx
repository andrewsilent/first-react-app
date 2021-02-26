import React from 'react';
import { SomeContext } from '../../../../contexts';

const Child = () => {
  return (
    <SomeContext.Consumer>
      {someDeliveredContext => {
        return JSON.stringify(someDeliveredContext);
      }}
    </SomeContext.Consumer>
  );
};

export default Child;
