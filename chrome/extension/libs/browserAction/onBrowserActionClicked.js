import isFunction from 'lodash/isFunction';
import HANDLERS from './handlers';

export default async (tab) => {
  const { browserAction, storage } = chrome;
  const { browserActionOnClickEventType } = await storage.local.getAsync(['browserActionOnClickEventType']);

  const handler = HANDLERS[browserActionOnClickEventType];

  if (isFunction(handler)) {
    return handler({ tab, browserActionOnClickEventType });
  }

  console.error(`Unknown browserAction event type: ${browserActionOnClickEventType}`);
};
