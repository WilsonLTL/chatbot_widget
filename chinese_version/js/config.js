let url = "http://192.168.0.134:5000/adapter_cn"

let nlp_noresponse_msg = "唔好意思,我唔係好明你講咩 <br >(⋟﹏⋞)"

let default_home_msg = "Hello,請問有咩幫到你(´･ω･`)?"

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
        says: [default_home_msg],
        reply: [
            {
                question: "魚柳包餐跟薯條",answer: "reply_message"
            },
            {
                question: "add more reply in config.js",answer: "reply_message"
            }
            ]
    },
    reply_message: {
        says: [default_home_msg],
        reply: [
            {
                question: "返回主頁",
                answer: "ice"
            }
        ]
    }
}