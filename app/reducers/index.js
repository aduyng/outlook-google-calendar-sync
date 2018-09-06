import MICROSOFT_LOGIN_SUCCESS from './handlers/MICROSOFT_LOGIN_SUCCESS';
import MICROSOFT_LOGIN_ERROR from './handlers/MICROSOFT_LOGIN_ERROR';
import MICROSOFT_LOGIN_START from './handlers/MICROSOFT_LOGIN_START';

const HANDLERS = {
  MICROSOFT_LOGIN_SUCCESS,
  MICROSOFT_LOGIN_ERROR,
  MICROSOFT_LOGIN_START
};

const initialState = {};

export default (state = initialState, action) => {
  const reduceFn = HANDLERS[action.type];
  if (!reduceFn) {
    return state;
  }
  return reduceFn(state, action);
};
