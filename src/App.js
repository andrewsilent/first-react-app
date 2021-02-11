import { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Smith',
      url: 'http://localhost:3000/favicon.ico'
    }
  }
  render() {
    const { firstName, lastName, url } = this.state;
    return (
      <div>
        <Greeting name={firstName} photo={url} />
        <Greeting name='Andrew' photo={url} sayHello />
        <Greeting name='Emily' photo={url} sayHello />
      </div>
    )
  }
}

export default App;
