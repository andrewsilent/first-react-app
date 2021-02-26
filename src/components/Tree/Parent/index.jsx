import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Parent</h2>
        <Child />
      </div>
    );
  }
}

export default Parent;
