var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // seconds
  'Content-Type': 'application/json'
};

module.exports = function(request, response) {

  console.log('Serving request type ' + request.method + ' for url ' + request.url);

  var action = actions[request.method];

  if (action) {
    action(request, response);
  }
  else {
    // error handling
  }

};
