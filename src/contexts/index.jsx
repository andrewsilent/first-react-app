import { createContext } from 'react';

export const SomeContext = createContext();
export const MyContextApp = createContext();
export const StopWatchContext = createContext();

export const MenuContext = createContext({isMenuOpened: false});