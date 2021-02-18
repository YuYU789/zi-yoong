/*

YUYu789 修改到期时间，



*/

var body = $response.body; // 声明一个变量body并以响应消息体赋


body=body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":9999999999999');


// var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

$done(body); //结束修改
