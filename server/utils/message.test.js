var expect = require('expect');

var {generateMessage} = require('./message');

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
