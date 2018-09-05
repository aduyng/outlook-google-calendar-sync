import isEmpty from 'lodash/isEmpty';
import onBrowserActionClicked from '../libs/browserAction/onBrowserActionClicked';

const { browserAction, storage } = chrome;

async function start() {
  const accessToken = await storage.sync.getAsync(['microsoftGraphAPIAccessToken']);

  if (isEmpty(accessToken)) {
    chrome.browserAction.setBadgeTextAsync({
      text: '!',
    });

    chrome.browserAction.setBadgeBackgroundColor({
      color: 'red',
    });

    storage.local.setAsync({ browserActionOnClickEventType: 'requestMicrosoftGraphAPIAccessToken' });

    return false;
  }

  return true;
}

const syncIntervalHandler = setInterval(start, 1000);
console.log(`sync process has been scheduled: ${syncIntervalHandler}`);

browserAction.onClicked.addListener(onBrowserActionClicked);
