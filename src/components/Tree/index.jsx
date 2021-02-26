import React, { Component } from 'react';
import Parent from './Parent';
import { SomeContext } from '../../contexts/index';

class Tree extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: 'Andrew',
        age: 25,
      },
    };
  }

  render () {
    const { user } = this.state;
    return (
      <div>
        <h2>Tree</h2>
        <SomeContext.Provider value={user}>
          <Parent />
        </SomeContext.Provider>
      </div>
    );
  }
}

export default Tree;
