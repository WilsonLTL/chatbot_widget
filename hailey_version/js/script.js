// initialize by constructing a named function...
// ...and add text processing plugin:

$(function() {

    let chatWidget = (".chat-widget-container"),
        chatBox = $(".chat-box-container");

    $(chatWidget).click(function(e){

        e.preventDefault();

        $(chatBox).toggleClass("show");
        $(chatWidget).toggleClass("open");
    })

});

let chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
    // the one that we care about is inputCallbackFn()
    // this function returns an object with some data that we can process from user input
    // and understand the context of it

    // this is an example function that matches the text user typed to one of the answer bubbles
    // this function does no natural language processing
    // this is where you may want to connect this script to NLC backend.
    inputCallbackFn: function(o) {

        let reply_message = {
            "msg":{
                says:[],
                reply: []
            }
        }

        // add error conversation block & recall it if no answer matched

        // connect ti nlp server
        let nlp = function(text) {
            console.log("text in script.js:",text)
            data.text=text
            axios.get(url+text).then(function (res) {
                result = res.data
                console.log(result)
                return_say = ""
                if (result["Speech"] !== ""){
                    return_say = result["Speech"]
                    if (result["ImageURL"] !== ""){
                        return_say += "<br ><img style='width:100%;height:100%;margin: 10px 0px 0px 0px;' src="+result["ImageURL"]+"/>"
                    }
                    reply_message.msg.says.push(return_say)
                    // result["Reply"].forEach(function (data) {
                    //     reply_message.msg.reply.push({
                    //         question: data,
                    //         answer: "reply_message"
                    //     })
                    // })
                    console.log("push reply:",reply_message.msg.reply)
                }else{
                    reply_message.msg.says.push(nlp_noresponse_msg)
                }
                chatWindow.talk(reply_message,"msg",text)
            }, function (error) {
                console.log(error)
            })
        }

        // do this if answer found
        let match = function(key) {
            setTimeout(function() {
                chatWindow.talk(convo, key) // restart current convo from point found in the answer
            }, 600)
        }

        // sanitize text for search function
        let strip = function(text) {
            return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
        }

        // search function
        let found = false
        o.convo[o.standingAnswer].reply.forEach(function(e, i) {
            strip(e.question).includes(strip(o.input)) && o.input.length > 0
                ? (found = e.answer)
                : found ? null : (found = false)
        })
        console.log("found",found)
        console.log("input",o.input)
        found ? match(found) : nlp(o.input)
        // found ? match(found) : miss()
    }
}) // done setting up chat-bubble

// conversation object defined separately, but just the same as in the
// "Basic chat-bubble Example" (1-basics.html)


// pass JSON to your function and you're done!
chatWindow.talk(convo)