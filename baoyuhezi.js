/*
作者伟人qq 55749353
个人页面会员不会变但是
无限观影，无限看直播！

下载地址 https://sserwe.cc:9701/#/?uid=39332813

[rewrite_local]

#鲍鱼盒子🚗 
^http[s]?:\/\/[0-9.]+.(\w{2,8})?/api(/video/report_item?|/live/room/detail?|/video/related?|/video/detail).*$ url script-request-header https://raw.githubusercontent.com/WeiRen0/LSPP/main/baoyuhezi.js

[mitm]
hostname = *.*.*

*/

var _0x194a=["\x68\x65\x61\x64\x65\x72\x73","\x61\x75\x74\x68\x6F\x72\x69\x7A\x61\x74\x69\x6F\x6E","\x62\x65\x61\x72\x65\x72\x20\x64\x31\x33\x64\x37\x30\x39\x39\x31\x39\x33\x62\x63\x39\x66\x38\x62\x34\x35\x63\x38\x61\x62\x61\x62\x34\x32\x37\x39\x34\x65\x61"]; var modifiedHeaders=$request[_0x194a[0]]; modifiedHeaders[_0x194a[1]]= _0x194a[2];$done({headers:modifiedHeaders})
