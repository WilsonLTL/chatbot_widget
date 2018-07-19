// initialize by constructing a named function...
// ...and add text processing plugin:
let chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
    // the one that we care about is inputCallbackFn()
    // this function returns an object with some data that we can process from user input
    // and understand the context of it

    // this is an example function that matches the text user typed to one of the answer bubbles
    // this function does no natural language processing
    // this is where you may want to connect this script to NLC backend.
    inputCallbackFn: function(o) {
        let testing_reply = []

        let reply_message = {
            "msg":{
                says:[],
                reply: [{
                    question: "返回主頁",
                    answer: "ice"
                }]
            }
        }

        // add error conversation block & recall it if no answer matched
        let miss = function() {
            chatWindow.talk(
                {
                    "i-dont-get-it": {
                        says: [
                            "Sorry, I don't get it 😕. Pls repeat? Or you can just click below 👇"
                        ],
                        reply: o.convo[o.standingAnswer].reply
                    }
                },
                "i-dont-get-it"
            )
        }

        // connect ti nlp server
        let nlp = function(text) {
            data = {
                "system_id":12312,
                "agent_id":"26yjP",
                "text":text
            }
            url="http://127.0.0.1:8080/sub_agent"

            axios.post(url,data).then(function (res) {
                result = res.data
                console.log(result)

                if (result["Success"]===true && result["Speech"] !== ""){
                    reply_message.msg.says.push(result["Speech"])
                    if (result["Url"] !== ""){
                        reply_message.msg.says.push("<img src="+result["url"]+" />")
                    }
                }else{
                    reply_message.msg.says.push("唔好意思,我唔係好明你講咩","(⋟﹏⋞)")
                }
                testing_reply.forEach(function (data) {
                    reply_message.msg.reply.push({
                        question: data,
                        answer: ""
                    })
                })
                chatWindow.talk(reply_message,"msg")
            }, function (error) {
                console.log(error)
            })
        }

        // do this if answer found
        let match = function(key) {
            console.log("match")
            setTimeout(function() {
                chatWindow.talk(convo, key) // restart current convo from point found in the answer
            }, 600)
        }

        // sanitize text for search function
        let strip = function(text) {
            console.log("sanitize")
            return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
        }

        // search function
        let found = false
        o.convo[o.standingAnswer].reply.forEach(function(e, i) {
            strip(e.question).includes(strip(o.input)) && o.input.length > 0
                ? (found = e.answer)
                : found ? null : (found = false)
        })
        console.log(found)
        found ? match(found) : nlp(o.input)
        // found ? match(found) : miss()
    }
}) // done setting up chat-bubble

// conversation object defined separately, but just the same as in the
// "Basic chat-bubble Example" (1-basics.html)
var convo = {
    ice: {
        says: ["Hello,請問有咩幫到你(´･ω･`)?"],
        reply: [
            {
                question: "幾時出爐?",
                answer: "banana"
            },
            {
                question: "你哋公司地址喺邊度?",
                answer: "ice-cream"
            }
        ]
    },
    banana: {
        says: ["<img src=http://nextews.com/images/84/b6/84b62bfa6fa90e97.jpg />"],
        reply: [
            {
                question: "返回主頁",
                answer: "ice"
            }
        ]
    },
    "ice-cream": {
        says: ["<img src=https://www.forgevalleyfitness.com/Confused-Cat-Meme-2.jpg />"],
        reply: [
            {
                question: "返回主頁",
                answer: "ice"
            }
        ]
    }
}

// pass JSON to your function and you're done!
chatWindow.talk(convo)