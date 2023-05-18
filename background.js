chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {message: "ready"}, function(response) {
      if (response && response.status === "ready") {
        console.log("Content script is ready");
      } else {
        console.log("Content script is not ready");
      }
    });
  });