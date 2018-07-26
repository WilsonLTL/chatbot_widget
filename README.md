# front_end_chatbot_plugin 

 A easiest chatbot plugin for your front-end website base on chat-bubble
 
## Setup
```
1. Modify the NLP Url link:
   config.js -> url = "..." 
   config.js -> data = {...} -> delete it (If you not using my NLP)
   script.js -> function nlp (line 40) -> axios change to "GET" (Optional)
   Bubble.js -> function nlp_say,nlp_reply -> axios change to "GET" (Optional)
2. Modify the icon the the bot:
   index.html -> line 17 -> src="..."
   PS1: about the size of the image, modify the style
   PS2: If you want to modify the css of the icon, please view frame.css -> chat-widget-avatar
3. Modify the config setting:
   config.js -> nlp_noresponse_msg = "..." -> the default msg when can't identify
   config.js -> default_reply_msg = "..." -> answer must be "ice"
   config.js -> convo = {...} -> "ice" be the home msg, reply_message is no need to modify
4. Modify background of chatbot widget:
   frame.css -> .chat-box-container -> background-image
5. Start Server:
   cd /home/ubuntu/chatbot_widget/demo_version -> sudo npm install http-server -g -> http-server
```

## Data Json Format(NLP):
```json
{
    "Agent": "AGENT_NAME",
    "Intent": "INTENT_NAME",
    "ResolvedQuery": "USER_INPUT",
    "Responses": [
        "RESPONSE_TEXT"
    ],
    "Result": [
        {
            "Intent": "INTENT_NAME",
            "Score": 1,
            "phrase": "TRAINING_PHRASE"
        }
    ],
    "Score": 1,
    "Speech": "SPEECH_RESULT",
    "ImageURL": "IMAGE_URL",
    "Reply":["REPLY_MSG1","REPLY_MSG2"],
    "Success": true,
    "Threshold": 0.6
}
```

## Source Code (CSS):
All css is include in frame, so just need to call frame.css in html

### frame.css:
The main css of the bot UI, including the icon, live chat widget.

### input.css:
The css of the bubble display, textarea.

### reply.css
The css of the user reply bubble, it relate to say.css, so before modify it, please also take a look of say.css too.

### say.css
The main css of the bubble of saying and reply(replay base on say.css).

### setup.css,typing.css
The basic setting css, should be no need to modify in 99%.

## Source Code (JS):

### config.js
The config JS of the system, modify it follow by the Setup

#### Bubbles.js
The main JS of bubble control, should not modify it in most time.

### script.js
The JS to identify user input and connect to nlp, for any front end control, please modify in this page

Prepare connect to front end panel