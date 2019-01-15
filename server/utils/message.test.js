var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
      var from = 'chicken';
      var text = 'hello there!'
      var message = generateMessage(from, text);
      expect(message).toHaveProperty('from', from);
      expect(message).toHaveProperty('text', text);
      expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'chickenPox',
        latitude = 96,
        longitude = 123;
    var locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage).toHaveProperty('from', from);
        expect(locationMessage).toHaveProperty('url', `https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(typeof locationMessage.createdAt).toBe('number');

  })
});
