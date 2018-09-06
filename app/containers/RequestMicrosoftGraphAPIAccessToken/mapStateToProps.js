export default state => ({
  status: state.microsoftLoginStatus,
  code: state.microsoftLoginCode,
  message: state.microsoftLoginMessage,
  accessToken: state.microsoftLoginAccessToken,
  idToken: state.microsoftLoginIdToken,
});
