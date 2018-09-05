export default () => {
  const url = chrome.runtime.getURL('app.html#/requestMicrosoftAccessToken');
  return chrome.tabs.create({ url });
};
