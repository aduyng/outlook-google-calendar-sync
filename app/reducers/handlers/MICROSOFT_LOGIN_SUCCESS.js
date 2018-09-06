
export default (state, { payload: { idToken, accessToken } }) => Object.assign(state, {
  microsoftLoginStatus: 'success',
  microsoftLoginIdToken: idToken,
  microsoftLoginAccessToken: accessToken,
});
