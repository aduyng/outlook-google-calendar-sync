import * as Msal from 'msal';
import { MICROSOFT_GRAPH_CLIENT_ID } from '../../config';

export default () => {
  if (!global.msGraphAPIClient) {
    global.msGraphAPIClient = new Msal.UserAgentApplication(MICROSOFT_GRAPH_CLIENT_ID, null,
      function (errorDesc, token, error, tokenType) {
        // Called after loginRedirect or acquireTokenPopup
      });
  }
  return global.msGraphAPIClient;
};
