function updatePopup(percentage) {
  document.getElementById('scrollInfo').textContent = `Page Progress: ${percentage}%`;
  document.getElementById('progressFill').style.width = `${percentage}%`;
}

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getScrollPercentage" }, function(response) {
    if (response && response.scrollPercentage !== undefined) {
      updatePopup(response.scrollPercentage);
    }
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.scrollPercentage !== undefined) {
    updatePopup(request.scrollPercentage);
  }
});
