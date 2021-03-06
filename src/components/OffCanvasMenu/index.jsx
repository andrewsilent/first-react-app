import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './OffCanvasMenu.module.scss';
import cx from 'classnames';
import { MenuContext } from '../../contexts';

const OffCanvasMenu = props => {
  const {
    state: { isMenuOpened },
    openMenu,
    closeMenu,
  } = useContext(MenuContext);
  console.log(isMenuOpened);

  useEffect(() => {
    if (isMenuOpened) {
      document.addEventListener('click', closeMenu);
    }
    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [isMenuOpened]);

  const classNames = cx(styles.offcanvas, { [styles.show]: isMenuOpened });

  return (
    <>
      <button className={styles.toggleMenu} onClick={openMenu} tabIndex='0'>
        -
      </button>
      <nav className={classNames}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to='/'>Home</Link>
          </li>
          <li className={styles.item}>
            <Link to='/users'>Users</Link>
          </li>
          <li className={styles.item}>
            <Link to='/counter'>Counter</Link>
          </li>
          <li className={styles.item}>
            <Link to='/ArrayElementUsage'>ArrayElementUsage</Link>
          </li>
          <li className={styles.item}>
            <Link to='/context'>Context</Link>
          </li>
          <li className={styles.item}>
            <Link to='/contextapp'>ContextApp</Link>
          </li>
          <li className={styles.item}>
            <Link to='/hoc'>HighOrderCompotent</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default OffCanvasMenu;
