var socket = io();
  socket.on('connect', function() {
    console.log("Connected");
  });

  // socket.emit('createMessage', {
  //    to:'sun@gmail.com',
  //    text: 'Have a nice day!'
  // });

 socket.on('disconnect', function() {
   console.log("Disconnected");
 });

 socket.on('newMessage', function(message){
   console.log(message);
 });
