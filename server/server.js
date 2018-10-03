var path = require("path");
var http = require("http");
var express = require("express");
var socketIO = require("socket.io");

var {generateMessage} = require("./utils/message");
var publicPath = path.join(__dirname,"../public");
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", (socket) => {
  console.log("new User connected");

socket.emit("newMessage", generateMessage("Admin", "Welcome to the chat app!"));

socket.broadcast.emit("newMessage", generateMessage("Admin", "New user joined"));

socket.on("createMessage", (message, callback) => {
  console.log("CreateMessage",message);
  io.emit("newMessage",generateMessage(message.from, message.text)) ;
  callback();
});

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});

// app.get('/', (req, res) => {
//   res.render('index.html');
// });
server.listen(port,() => {
  console.log("Server started");
});
