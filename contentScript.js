
// Listen for keyup events on the input field
// document.addEventListener("keyup", function (event) {

//   if(chrome.runtime.lastError) {
//     console.log("error")
//   }

//     var inputField = document.activeElement;
//     var  lastChar = inputField.textContent.charAt(inputField.textContent.length - 1)
//     var text = inputField.textContent

//     console.log(lastChar)
    
//     if(lastChar == "!"){
//         (async () => {
//             const response = await chrome.runtime.sendMessage({text: text});
//             // do something with response here, not outside the function
//             console.log(response);
//           })();
//     }
  
// });


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    var inputField = document.activeElement;
    // console.log(inputField)
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: inputField.textContent});
      
  }
);