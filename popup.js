chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getScrollPercentage" }, function(response) {
    updatePopup(response.scrollPercentage);
  });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.scrollPercentage !== undefined) {
    updatePopup(request.scrollPercentage);
  }
});

function updatePopup(percentage) {
  document.getElementById('scrollInfo').textContent = `Scroll progress: ${percentage}%`;
  document.getElementById('progressFill').style.width = `${percentage}%`;
}
