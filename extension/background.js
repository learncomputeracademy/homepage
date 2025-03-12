// Set homepage when browser starts
chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({
    url: "https://homepage.computercenter.in/",
    active: true
  });
});

// Firefox compatibility
if (typeof browser !== "undefined") {
  browser.runtime.onStartup.addListener(() => {
    browser.tabs.create({
      url: "https://homepage.computercenter.in/",
      active: true
    });
  });
}