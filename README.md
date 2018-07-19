#front_end_chatbot_plugin 

 A easiest chatbot plugin in your front-end website base on chat-bubble
 
## Setup
```
1. Modify the NLP Url link:
   script.js -> function nlp (line 40) -> url ="..."
   script.js -> function nlp (line 40) -> axios chang to "GET" (Option)
   script.js -> function nlp (line 40) -> "data" (for my own Nlp only,can be delete)
2. Modify the icon the the bot:
   index.html -> line 26 -> src="..."
   PS1: about the size of the image, modify the style
   PS2: If you want to modify the css of the icon, please view frame.css -> chat-widget-avatar
```

## Data Json Format(Nlp):
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
            "Source": 1,
            "phrase": "TRAINING_PHRASE"
        }
    ],
    "Score": 1,
    "Speech": "SPEECH_RESULT",
    "Url": "IMAGE_URL",
    "Success": true,
    "Threshold": 0.6
}
```

## Source Code:
### CSS:
#### frame.css:
The main css of the bot UI, including the icon, live chat widget.

#### input.css:
The css of the bubble display, textarea.

#### reply.css
The css of the user reply bubble, it relate to say.css, so before modify it, please also take a look of say.css too.

#### say.css
The main css of the bubble of saying and reply(replay base on say.css).

#### setup.css,typing.css
The basic setting css, should be no need to modify in 99%.

### JS:
#### Bubbles.js
The main JS of bubble control, should not modify it in most time.

#### script.js
The JS to identify user input and connect to nlp, for even front end control, please modify in this page