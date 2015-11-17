var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

// Save connected function's info with path
var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/hello"] = requestHandlers.hello;

server.start(router.route, handle);
