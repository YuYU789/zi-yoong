var body = $response.body;
body=body.replace(/level\":\d+/g,'level":0').replace(/is_vip\":\d+/g，'is_vip":1').replace(/code\":\d+/g，'code":0')；

  

$done(body);


hostname = iosapi.peiyinxiu.com
