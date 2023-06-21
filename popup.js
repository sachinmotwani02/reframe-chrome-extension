
// function getData() {
//     document.getElementById("text-elements").innerHTML = response.string;
//     console.log(response.string)
// }

// document.getElementById('getData').addEventListener('click', getData);

console.log("This is a popup!")

var input = null

var output = null

var z = document.getElementById("loader");

z.style.display = "none";

var y = document.getElementById("getSuggestion");

y.disabled = true;

var x = document.getElementById("contain");

x.style.display = "none";

var copy = document.getElementById("copy");

copy.style.display = "none";

var copied = document.getElementById("copied");

copied.style.display = "none";

document.getElementById("getData").addEventListener("click", getInputData);

document.getElementById("getSuggestion").addEventListener("click", getSuggesion);

document.getElementById("replace").addEventListener("click", copyToClipboard);

document.getElementById("emojify").addEventListener("click", emojify);

function getInputData() {
  (async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {greeting: "hello"});
    // do something with response here, not outside the function
    document.getElementById("text").innerHTML = response.farewell;
    input = response.farewell;
    x.style.display = "block";
    y.disabled = false;
    console.log(input);
  })();
}


function getSuggesion() {
    z.style.display = "block";
    var checkedValue = document.querySelector('.form-check-input:checked').value;
    console.log(checkedValue);
    fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization':
    },
    body: JSON.stringify({
      'model': 'text-davinci-003',
      'prompt': input + '- improve this sentence, tone should be - ' + checkedValue,
      'temperature': 1,
      'max_tokens': 200,
      'top_p': 1,
      'frequency_penalty': 0,
      'presence_penalty': 0
    })
  }).then((response) =>
      {console.log(response)
      response.json()
      .then((data) => {
      console.log(data)
      z.style.display = "none";
      output = data.choices[0].text;
      document.getElementById("final").innerHTML = data.choices[0].text;
      copy.style.display = "block";
  })});
}

async function copyToClipboard() {
    copied.style.display = "block";
    try {
      await navigator.clipboard.writeText(output);
      setTimeout(() => {
        copied.style.display = "none";
      }, 3500);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

function alert() {

}

function emojify() {
  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 
    },
    body: JSON.stringify({
      'model': 'text-davinci-003',
      'prompt': output + '- add emojis(at the end) along with the sentence according to the context.',
      'temperature': 0.8,
      'max_tokens': 200,
      'top_p': 1,
      'frequency_penalty': 0,
      'presence_penalty': 0
    })
  }).then((response) =>
      {console.log(response)
      response.json()
      .then((data) => {
      console.log(data)
      output = data.choices[0].text;
      document.getElementById("final").innerHTML = data.choices[0].text;
  })});
}
