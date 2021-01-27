var body=$response.body;
body =body.replace(/"type":"2"/g,'type":0');
  

$done({body：body)});
