let url = "http://192.168.0.134:5000/adapter_en"

let nlp_noresponse_msg = "Sorry, i don't understand <br >(⋟﹏⋞)"

let default_home_msg = "Hello,what can i help you?"

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
                question: "Reset password",answer: "reply_message"
            },{
                question: "What is GLSHK",answer: "reply_message"
            }]
    },
    reply_message: {
        says: [default_home_msg],
        reply: [
            {
                question: "Home",
                answer: "ice"
            }
        ]
    }
}