var body=$response.body;
body=body.replace(/type\":\d/g,'type":0');



$done(body);
