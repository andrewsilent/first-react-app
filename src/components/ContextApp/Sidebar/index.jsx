import React from 'react';
import { MyContextApp } from '../../../contexts';

const Sidebar = () => {
  return (
    <MyContextApp.Consumer>
      {data => {
        return (data.id);
      }}
    </MyContextApp.Consumer>
  );
};

export default Sidebar;
