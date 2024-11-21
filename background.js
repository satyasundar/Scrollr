chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.scrollPercentage !== undefined) {
    const percentage = Math.min(99, Math.max(0, Math.round(request.scrollPercentage)));
    chrome.action.setBadgeText({ text: percentage.toString(), tabId: sender.tab.id });
    chrome.action.setBadgeBackgroundColor({ color: '#4CAF50', tabId: sender.tab.id });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    chrome.action.setBadgeText({ text: '0', tabId: tabId });
    chrome.action.setBadgeBackgroundColor({ color: '#4CAF50', tabId: tabId });
  }
});
