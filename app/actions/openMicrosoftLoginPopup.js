import getMicrosoftGraphAPIClient from '../../shared/libs/microsoft-graph-api/getMicrosoftGraphAPIClient';
import { MICROSOFT_GRAPH_API_SCOPES, MICROSOFT_GRAPH_API_ENDPOINT } from '../../shared/config';
import { MICROSOFT_LOGIN_ERROR, MICROSOFT_LOGIN_SUCCESS, MICROSOFT_LOGIN_START } from './consts';

export default () => async (dispatch) => {
  const client = getMicrosoftGraphAPIClient();
  let idToken;
  let accessToken;
  let code;
  let message;

  dispatch({
    type: MICROSOFT_LOGIN_START
  });

  try {
    idToken = await client.loginPopup(MICROSOFT_GRAPH_API_SCOPES);
  } catch (error) {
    [code, message] = error.split('|');
    return dispatch({
      type: MICROSOFT_LOGIN_ERROR,
      payload: {
        code,
        message
      }
    });
  }

  try {
    accessToken = await client.acquireTokenSilent(MICROSOFT_GRAPH_API_SCOPES);
    console.log(accessToken);
  } catch (accessTokenError) {
    [code, message] = accessTokenError.split('|');
    return dispatch({
      type: MICROSOFT_LOGIN_ERROR,
      payload: {
        code,
        message
      }
    });
  }

  try {
    accessToken = client.acquireTokenPopup(MICROSOFT_GRAPH_API_ENDPOINT);
  } catch (accessTokenPopupError) {
    [code, message] = accessTokenPopupError.split('|');
    return dispatch({
      type: MICROSOFT_LOGIN_ERROR,
      payload: {
        code,
        message
      }
    });
  }

  return dispatch({
    type: MICROSOFT_LOGIN_SUCCESS,
    payload: {
      idToken,
      accessToken
    }
  });
};
