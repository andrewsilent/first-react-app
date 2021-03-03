import React, { useState } from 'react';
// import Form from './components/Form';
import Hooks from './components/Hooks';
import ContextAppPage from './pages/ContextAppPage';
import StopWatchPage from './pages/StopWatch';

const App = props => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <StopWatchPage />
    // <>
    //   <button
    //     onClick={() => {
    //       setIsVisible(!isVisible);
    //     }}
    //   >
    //     switch
    //   </button>
    //   {isVisible && <Hooks />}
    // </>
  );
};

export default App;
