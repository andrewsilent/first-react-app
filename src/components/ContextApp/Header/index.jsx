import React from 'react';
import { MyContextApp } from '../../../contexts';

const Header = () => {
  return (
    <MyContextApp.Consumer>
      {value => {
        return value.name;
      }}
    </MyContextApp.Consumer>
  );
};

export default Header;
