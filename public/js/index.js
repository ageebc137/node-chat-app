var socket = io();

socket.on('connect', function() {
  console.log("Connected to server");

  socket.emit('createMessage', {
    from: 'jane@aol.com',
    subject: 'Fried Chicken',
    text: 'You are right the chicken is really delicious'
  });

});

socket.on('disconnect', function() {
  console.log("Disconnected from server");
});


socket.on('newMessage', function(message) {
  console.log('Got a message', message);
});
