function calculateScrollPercentage() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
  return Math.round(scrollPercentage);
}

function updateScrollInfo() {
  const scrollPercentage = calculateScrollPercentage();
  chrome.runtime.sendMessage({ scrollPercentage: scrollPercentage });
}

window.addEventListener('scroll', updateScrollInfo);
window.addEventListener('load', updateScrollInfo);
