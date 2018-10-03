var socket = io();
  socket.on("connect", function() {
    console.log("Connected");
  });

  // socket.emit('createMessage', {
  //    to:'sun@gmail.com',
  //    text: 'Have a nice day!'
  // });

 socket.on("disconnect", function() {
   console.log("Disconnected");
 });

 socket.on('newMessage', function(message){
   console.log(message);
   var li = jQuery("<li></li>");
    li.text(`${message.from}: ${message.text}`);
   jQuery("#messages").append(li);
 });

 // socket.emit('createMessage', {
 //   from: 'Frank',
 //   text: 'Hi there!'
 // }, function() {
 //    console.log("Got it ack! This is from Server");
 // });

 jQuery("#message-form").on("submit", function(e){
   e.preventDefault();
    socket.emit("createMessage",{
     from: "User",
     text: jQuery("[name=message]").val()
   }, function(){

   });
 });
