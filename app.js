var router = require('./router.js');

// Problem: We need simple way to look at user's badge count and JS points from a web browser
//Solution: Use node.js to perform the profile look ups and serve our template via HTTP

// Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');



