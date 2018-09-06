import { MICROSOFT_LOGIN_CANCEL } from './consts';

export default () => async (dispatch) => {
  dispatch({
    type: MICROSOFT_LOGIN_CANCEL
  });
  return global.close();
};
