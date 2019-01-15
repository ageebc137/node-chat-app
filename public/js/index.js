var socket = io();

socket.on('connect', function() {
  console.log("Connected to server");
});

socket.on('disconnect', function() {
  console.log("Disconnected from server");
});


socket.on('newMessage', function(message) {
  console.log('Got a message', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`)

  jQuery('#messages').append(li);
});

socket.on('newUser', function(message) {
  console.log(message.text);
});


$('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'User',
    text: $('[name=message]').val()
  }, function() {

  });

});
