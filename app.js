var http = require('http');
http.createServer(function (req, res) {
       res.writeHead(200, { 'Content-Type': 'text/plain' });
       res.write(req.method + ' ' + req.url + ' HTTP/1.1\r\n');
       for(var key in req.headers)
       {
			 	res.write(key + ": " + req.headers[key] + '\r\n');
       }
       res.write('\r\n')
			 req.pipe(res);
   }).listen(process.env.VMC_APP_PORT || 1337, null);