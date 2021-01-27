var body = {
  "ret": 200,
  "data": {
    "code": 0,
    "msg": "",
    "info": [{
      "type": "0",
      "real_type": "2",
      "type_val": "0",
      "type_msg": "本房间为收费房间，需支付10爱意",
      "lottery": {
        "lotteryid": "45",
        "drawmode": "3",
        "lotteryname": "一分时时彩",
        "cycle": 60,
        "lotterygroup": "1",
        "icon_url": "https:\/\/d3led6fg3py4x.cloudfront.net\/upload\/20200817\/568b9bba40632188eaade2c8520bcc8a.png"
      },
      "live_sdk": "0"
    }]
  },
  "msg": ""
}

$done({body:JSON.stringify(body)});
