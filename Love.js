let url = $request.url;
let body = JSON.parse($response.body);

let yurl = '/api/public/';


if (url.indexOf(yurl) != -1) {
	body=body.replace(/type\":\d+/g,'type":0');





}


	body = JSON.stringify(body);

$done({body});
