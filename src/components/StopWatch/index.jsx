import React, { useContext, useEffect, useState } from 'react';
import { format, addMilliseconds } from 'date-fns';
import cx from 'classnames';
import styles from './StopWatch.module.scss';
import { StopWatchContext } from '../../contexts';

const themes = {
  light: 'light',
  dark: 'dark',
};

const StopWatch = props => {
  const [time, setTime] = useState(new Date(0, 0, 0, 0, 0, 0, 0));
  const [isRunning, setIsRunning] = useState(false);
  const [theme, themeSwitch] = useContext(StopWatchContext);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime(time => addMilliseconds(time, 10));
      }, 10);

      return () => clearInterval(id);
    }
  }, [isRunning, time]);

  return (
    <section
      className={cx(styles.screen, { [styles.light]: theme === themes.light, [styles.dark]: theme === themes.dark })}
    >
      <div className={styles.stopWatch}>
        <h1>StopWatch this is</h1>
        <h3>Theme is {theme}</h3>
        <h2>{format(time, 'HH:mm:ss.SS')}</h2>
        <div className={styles.controls}>
          <button className={styles.btn} onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? 'Abort' : 'Launch'}
          </button>
          <button onClick={themeSwitch}>Switch</button>
          <button className={styles.btn}>Clear</button>
        </div>
      </div>
    </section>
  );
};

export default StopWatch;
