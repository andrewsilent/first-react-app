import React, { useState } from 'react';
import StopWatch from '../components/StopWatch';
import { StopWatchContext } from '../contexts';

const themes = {
  light: 'light',
  dark: 'dark',
};

const StopWatchPage = props => {
  const [theme, setTheme] = useState(themes.light);

  const themeSwitch = () => {
    setTheme(theme => {
      return theme === themes.light ? themes.dark : themes.light;
    });
  };

  return (
    <StopWatchContext.Provider value={[theme, themeSwitch]}>
      <StopWatch />
    </StopWatchContext.Provider>
  );
};

export default StopWatchPage;
