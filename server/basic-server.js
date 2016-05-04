var http = require('http');
var messages = require('./request-handler');
var utils = require('./utils');
var url = require('url');

var port = 3000;

var ip = '127.0.0.1';

var routes = {
  '/classes/messages': messages.requestHandler
};

var server = http.createServer(function(request, response) {

  var route = routes[url.parse(request.url).pathname];
  if (route) {
    route(request, response);
  } else {
    utils.sendResponse(response, '', 404);
  }
});

console.log('Listening on http://' + ip + ':' + port);
server.listen(port, ip);
