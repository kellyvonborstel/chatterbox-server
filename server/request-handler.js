var utils = require('./utils');

var objectId = 1;
var messages = [
  // {
  //   text: 'hello world',
  //   username: 'kelly',
  //   objectId: objectId
  // }
];

var actions = {
  GET: function(request, response) {
    utils.sendResponse(response, {results: messages}, 200);
  },
  POST: function(request, response) {
    utils.collectData(request, function(message) {
      message.objectId = objectId++;
      messages.push(message);
      utils.sendResponse(response, {objectId: message.objectId}, 201);
    });
  },
  OPTIONS: function(request, response) {
    utils.sendResponse(response, null, 200);
  }
};

exports.requestHandler = utils.makeActionHandler(actions);
