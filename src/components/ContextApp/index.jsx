import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { MyContextApp } from '../../contexts';

class ContextApp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: 'Andrew',
        age: 25
      },
    };
  }

  render () {
    const { user } = this.state;
    return (
      <div>
        <h2>ContextApp</h2>
        <MyContextApp.Provider value={user}>
          <Header />
          <Sidebar />
        </MyContextApp.Provider>
      </div>
    );
  }
}

export default ContextApp;
