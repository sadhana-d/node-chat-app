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
socket.on('newLocationMessage', function(message){
  var li = jQuery("<li></li>");
  var a = jQuery("<a target='_blank'>My Current Location</a>");

  li.text(`${message.from}: `);
  a.attr("href", message.url);
  li.append(a);
  jQuery("#messages").append(li);
});
 jQuery("#message-form").on("submit", function(e){
   e.preventDefault();
    socket.emit("createMessage",{
     from: "User",
     text: jQuery("[name=message]").val()
   }, function(){

   });
 });
var locationButton = jQuery("#send-location");
locationButton.on("click",function(){
  if(!navigator.geolocation){
    return alert("Geo location not supported by browsers");
  }
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    socket.emit("createLocationMessage",{
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
    })
  },function(){
    alert('unable to fetch location');
  });
});
