import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ArrayElementUsage from './pages/ArrayElementUsage';
import Context from './pages/Context';
import ContextAppPage from './pages/ContextAppPage';
import Counter from './components/Counter';
import OffCanvasMenu from './components/OffCanvasMenu';
import HighOrderCompotent from './pages/HighOrderCompotent';
import UsersLoader from './components/UsersLoader';
import { ACTIONS } from './constants';
import { MenuContext } from './contexts';
import reducer from './appReducer';
import './App.css';

const App = props => {
  const [state, dispatch] = useReducer(reducer, { isMenuOpened: false });
  const openMenu = () => dispatch({ type: ACTIONS.MENU_OPEN });
  const closeMenu = () => dispatch({ type: ACTIONS.MENU_CLOSE });
  return (
    <MenuContext.Provider value={{state, openMenu, closeMenu}}>
      <BrowserRouter>
        <OffCanvasMenu />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/offcanvas' component={OffCanvasMenu} />
          <Route path='/users' component={UsersLoader} />
          <Route path='/counter' component={Counter} />
          <Route path='/ArrayElementUsage' component={ArrayElementUsage} />
          <Route path='/context' component={Context} />
          <Route path='/contextapp' component={ContextAppPage} />
          <Route path='/hoc' component={HighOrderCompotent} />
          <Route path='/*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </MenuContext.Provider>
  );
};

const Home = () => (
  <section className='page'>
    <h1>Awesome Homepage</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vero
      illum tempore eum nihil quaerat quos iure dicta, eius harum odio
      distinctio consequuntur accusamus et veritatis magni, omnis reprehenderit
      exercitationem veniam asperiores debitis vel voluptate? Magni ullam soluta
      quidem provident. Velit sunt amet perspiciatis accusantium assumenda,
      nihil fugiat magnam itaque!
    </p>
  </section>
);

const NotFound = props => {
  console.log(props);
  setTimeout(() => {
    props.history.push('/');
  }, 3000);
  return (
    <>
      <h1>error 404 - page not found</h1>
      <h2>you will be redirected to a homepage ..</h2>
    </>
  );
};

export default App;
