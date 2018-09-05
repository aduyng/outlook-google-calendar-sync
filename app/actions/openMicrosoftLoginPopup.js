import getMicrosoftGraphAPIClient from '../../shared/libs/microsoft-graph-api/getMicrosoftGraphAPIClient';
import { MICROSOFT_GRAPH_API_SCOPES, MICROSOFT_GRAPH_API_ENDPOINT } from '../../shared/config';
import { MICROSOFT_LOGIN_ERROR } from './consts';

export default () => async (dispatch, getState) => {
  const client = getMicrosoftGraphAPIClient();
  let idToken;
  let accessToken;
  debugger;

  try {
    idToken = await client.loginPopup(MICROSOFT_GRAPH_API_SCOPES);
    try {
      accessToken = await client.acquireTokenSilent(MICROSOFT_GRAPH_API_SCOPES);
      console.log(accessToken);
    } catch (accessTokenError) {
      window.alert(`Error acquiring the token silently: ${accessTokenError}`);
      try {
        accessToken = client.acquireTokenPopup(MICROSOFT_GRAPH_API_ENDPOINT);
        console.log(accessToken);
      } catch (accessTokenPopupError) {
        window.alert(`Error acquiring the token from the popup: ${accessTokenPopupError}`);
      }
    }
  } catch (error) {
    const [code, message] = error.split('|');
    dispatch({
      type: MICROSOFT_LOGIN_ERROR,
      payload: {
        code,
        message
      }
    })
  }
  console.log(dispatch, getState);
};
