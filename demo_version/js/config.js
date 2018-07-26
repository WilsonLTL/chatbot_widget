let url = "http://ec2-13-250-42-135.ap-southeast-1.compute.amazonaws.com/GLSHK?Key=0bb18fb84259c567c723ba96188f47ac&AgentID=7&Location=127.0.0.1&Say="

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
                question: "About GLSHK",answer: "reply_message"
            },{
                question: "About EzyCargo",answer: "reply_message"
            },{
                question: "Forget PWD",answer: "reply_message"
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