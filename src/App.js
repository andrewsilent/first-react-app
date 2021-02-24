import React from 'react';
import UsersLoader from './components/UsersLoader';
import Counter from './components/Counter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from 'react-router-dom';

const App = props => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contacts' component={Contacts} />
        {/* <Contacts />
        </Route> */}
        <Route path='/users'>
          <UsersLoader />
        </Route>
        <Route path='/counter' component={Counter} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;
const NotFound = props => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/');
  }, 5000);
  return <div>error 404 - page not found</div>;
};
export default App;
