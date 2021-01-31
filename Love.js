var body = $response.body;

let url $request.url;
const yurl = '/api/public';

if (url.indexof(yurl) != -1) {

body=body.replace(/type\":\d+/g,'type":0');

}
  

$done(body);

