
# Reframe - Chrome Extension

Reframe allows you to improve your messages on WhatsApp Web by leveraging the OpenAI ChatGPT API which can help you write better, you can select the tone, it also has a feature to add emojis according to the context of the message.




## Installation

1. Clone the repository or download the source code.
2. Open Google Chrome and go to 'chrome://extensions/'.
3. Enable "Developer mode" by toggling the switch in the top-right corner.
4. Click on "Load unpacked" and select the folder containing the cloned/downloaded source code.
5. The extension should now be installed and ready to use.
## Usage

1. Open WhatsApp Web in your Chrome browser.
2. Click on the extension icon in the toolbar to open the popup screen.
3. Click on the 'Get Text' button to fetch the text from the Whatsap web textbox.
4. Select the desired tone and click on 'Generate Suggestions' button.
5. Your output will be displayed in the popup screen where you can copy text to clipboard or 'Emojify' which adds emojis at the end of the sentence according to the context.
## Configuration

You can redeem a free api key from https://platform.openai.com/. In the popup.js file add your api key in 'Authorization' under the 'headers' object while making the post request.
## Contributing

Contributions are always welcome! Feel free to open issues and submit pull requests.


## Contact

For any inquiries or questions, please contact sachinmotwani60@gmail.com.