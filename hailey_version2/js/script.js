function initBubble () {
    widget_status = true;

    chatWindow = new Bubbles(document.getElementById("chat"), "chatWindow", {
        inputCallbackFn: function(o) {

            let reply_message = {
                "msg":{
                    says:[],
                    reply: []
                }
            };

            let nlp = function(text) {
                widget_status = false;
                console.log("text in Script.js:",text);
                data.text=text
                axios.get(url+text).then(function (res) {
                    result = res.data;
                    console.log(result);
                    return_say = "";
                    if (result["Speech"] !== ""){
                        return_say = result["Speech"];
                        if (result["ImageURL"] !== ""){
                            return_say += "<br ><img style='width:100%;height:100%;margin: 10px 0px 0px 0px;' src="+result["ImageURL"]+"/>"
                        }
                        reply_message.msg.says.push(return_say);
                        console.log("push reply:",reply_message.msg.reply);
                    }else{
                        reply_message.msg.says.push(nlp_noresponse_msg);
                    }
                    chatWindow.talk(reply_message,"msg",text);

                    widget_status = true;
                }, function (error) {
                    console.log(error)
                })
            };

            // do this if answer found
            let match = function(key) {
                setTimeout(function() {
                    chatWindow.talk(convo, key) // restart current convo from point found in the answer
                }, 600)
            };

            // sanitize text for search function
            let strip = function(text) {
                return text.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_'"`~()]/g, "")
            };

            // search function
            let found = false;
            o.convo[o.standingAnswer].reply.forEach(function(e, i) {
                strip(e.question).includes(strip(o.input)) && o.input.length > 0
                    ? (found = e.answer)
                    : found ? null : (found = false)
            });
            console.log("found",found);
            console.log("input",o.input);
            found ? match(found) : nlp(o.input)
            // found ? match(found) : miss()
        }
    });
    console.log("chatWindow:",chatWindow)
    chatWindow.talk(convo);

    return chatWindow;
}

