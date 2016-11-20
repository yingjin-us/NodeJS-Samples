var net = require('net');

var server = net.createServer((socket) => {
  console.log("connection from " + socket.remoteAddress);
  socket.end("Hello world\n");
});

server.listen(7000,'127.0.0.1');