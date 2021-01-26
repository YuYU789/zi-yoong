var body=$response.body;
body =body.replace（/"is_vip\":0/g，'is_vip\":1'）；

$done({body: body});
