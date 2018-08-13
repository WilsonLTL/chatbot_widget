let url = "https://nlp.asiabots.com/CareClub?Key=f9bbe5f386487c416d4153b9ba307ad7&SessionID=CareClubXXX&Location="

let nlp_noresponse_msg = '不好意思，我不明白你說什麼😥'

let default_home_msg = ''

let default_home_reply_msg = []

let default_reply_msg = {
    question: "Home",
    answer: "ice"
}

let data = {
    "system_id":12312,
    "agent_id":"26yjP",
    "text":""
}

let convo = {}

widget_status = true

let initSetting = function () {

    return Promise.resolve(
        axios.get("https://api.ipify.org?format=json").then(function (res) {
            url += res.data.ip+"&Say="

            axios.get(url+"init").then(function (res) {
                console.log(res.data['Speech'])
                default_home_msg = res.data['Speech']
                res.data['Reply'].forEach(function (e) {
                    default_home_reply_msg.push({question:e,answer:"reply_message"})
                })
                convo = {
                    ice: {
                        says: [default_home_msg],
                        reply: default_home_reply_msg
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
                };

                initBubble()
                return widget_status
            })
        })
    )
}
