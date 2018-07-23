let url = "http://192.168.0.134:5000/adapter_en"

let nlp_noresponse_msg = "Sorry, i don't understand <br >(⋟﹏⋞)"

let data = {
    "system_id":12312,
    "agent_id":"26yjP",
    "text":""
}

let default_reply_msg = {
    question: "Home",
    answer: "ice"
}

let convo = {
    ice: {
        says: ["Hello,what can i help you?"],
        reply: [
            {
                question: "something",answer: "reply_message"
            }]
    },
    reply_message: {
        says: ["<img src=http://nextews.com/images/84/b6/84b62bfa6fa90e97.jpg />"],
        reply: [
            {
                question: "Home",
                answer: "ice"
            }
        ]
    }
}