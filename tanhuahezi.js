var body = {
  "status" : "200",
  "msg" : "返回成功",
  "data" : {
    "mobile" : "18310565258",
    "status" : 1,
    "is_vip" : 1,
    "member_name" : "aa12345678",
    "parent_id" : 100,
    "user_viptime" : "3366-06-06"
  }
};

$done({body:JSON.stringify(body)});
