import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList/';
import SelectedUserList from './components/SelectedUserList';

const userDB = [
  {
    id: 1,
    firstName: "Stan",
    lastName: "Smith",
  },
  {
    id: 2,
    firstName: "Francine",
    lastName: "Smith",
  },
  {
    id: 3,
    firstName: "Steve",
    lastName: "Smith",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userDB.map((user) => ({ ...user, isSelected: false })),
    }
  }

  setUsers = (newUsers) => this.setState({ users: newUsers });

  render() {
    const { users } = this.state;
    return (
      <>
        <header>
          <SelectedUserList users={[...users]} />
        </header>
        <main>
          <UserList users={users} setUsers={this.setUsers} />
        </main>
      </>
    )
  }
}

export default App;
