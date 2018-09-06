
export default (state, { payload: { code, message } }) => Object.assign(state, {
  microsoftLoginStatus: 'error',
  microsoftLoginCode: code,
  microsoftLoginMessage: message,
});
