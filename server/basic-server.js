var http = require('http');
var handleRequest = require('./request-handler');
var urlParser = require('url');
var utils = require('./utils');

var port = 3000;

var ip = '127.0.0.1';

var routes = {
  '/classes/chatterbox': handleRequest
};

var server = http.createServer(function(request, response) {

  var urlParts = urlParser.parse(request.url);

  var route = routes[urlParts.pathname];

  if (route) {
    route(request, response);
  }

  handleRequest(request, response);
});

console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);
