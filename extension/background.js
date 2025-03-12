// background.js
chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({
    url: "https://homepage.computercenter.in/"
  });
});