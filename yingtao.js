var body=$response.body;
body =body.replace(/type\":"3"/，"type":"0");



$done({body: body});
