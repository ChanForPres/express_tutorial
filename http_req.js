// load http module

var http = require('http')


// create http server listening on http://127.0.0.1:8000/
http.createServer(function(request,response) {

// set response when receive message
// 200 is successful response
// content type
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // set the http status
    response.end('HELLO WORLD \n');

} ).listen(8000);

// Print URL to access server
console.log('Server runs at http://127.0.0.1:8000/')
