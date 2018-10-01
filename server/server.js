var path = require('path');
var http = require('http');
var express = require('express');
var socketIO = require('socket.io');

var publicPath = path.join(__dirname,"../public");
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("new User connected");

socket.emit('newMessage', {
   from: 'sun@gmail.com',
   text: 'Hey! How are you doing?',
   createdAt: '12'
});

socket.on('createMessage', (message) => {
  console.log(message);
});

  socket.on('disconnect', () => {
    console.log("Disconnected");
  });
});

// app.get('/', (req, res) => {
//   res.render('index.html');
// });
server.listen(port,() => {
  console.log("Server started");
});
