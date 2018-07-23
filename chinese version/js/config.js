let url = "http://192.168.0.134:5000/adapter_cn"

let nlp_noresponse_msg = "唔好意思,我唔係好明你講咩 <br >(⋟﹏⋞)"

let data = {
    "system_id":12312,
    "agent_id":"26yjP",
    "text":""
}

let default_reply_msg = {
    question: "返回主頁",
    answer: "ice"
}


let convo = {
    ice: {
        says: ["Hello,請問有咩幫到你(´･ω･`)?"],
        reply: [
            {
                question: "幾時出爐",answer: "reply_message"
            }]
    },
    reply_message: {
        says: ["<img src=http://nextews.com/images/84/b6/84b62bfa6fa90e97.jpg />"],
        reply: [
            {
                question: "返回主頁",
                answer: "ice"
            }
        ]
    }
}