import { ACTIONS } from './constants';

const handlers = {
  [ACTIONS.MENU_OPEN]: (state, action) => {
    return { ...state, isMenuOpened: true };
  },
  [ACTIONS.MENU_CLOSE]: (state, action) => {
    return { ...state, isMenuOpened: false };
  },
};

const appReducer = (state, action) => {
  return handlers[action.type](state, action);
};

export default appReducer;
