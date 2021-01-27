/*
更新时间: 2021-1-26 23:01
YuYu789



*/


var body = {
  "ret": 200,
  "data": {
    "code": 0,
    "msg": "",
    "info": [
      {
        "type": "0",
        "real_type": "2",
        "type_val": "19",
        "type_msg": "本房间为收费房间，需支付0爱意",
        "lottery": {
          "lotteryid": "43",
          "drawmode": "3",
          "lotteryname": "一分六合彩",
          "cycle": 60,
          "lotterygroup": "6",
          "icon_url": "https://cdn.mitaozhibo.org/upload/20200817/9e5647b0d92dc390400306ff3093ec13.png"
        },
        "live_sdk": "0"
      }
    ]
  },
  "msg": ""
}

$done({body:JSON.stringify(body)});
