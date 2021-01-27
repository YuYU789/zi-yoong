/*
更新时间: 2021-1-26 23:01
YuYu789

*/


var body=$response.body;
body =body.replace(/type\":d/g,'type":0');
  

$done({body：body)});
