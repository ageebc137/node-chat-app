const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }]
  })

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id:'123',
      name: 'Allister',
      room: 'RickAndMort'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('3');
    expect(user.name).toBe('Julie');
    expect(users.users.length).toEqual(2);
  });

  it('should not remove user', () => {
    var user = users.removeUser('4');
    expect(user).toBe('Name not found');
    expect(users.users.length).toEqual(3);
  });

  it('should find user', () => {
    var user = users.getUser('2');
    expect(user.name).toEqual('Jen');
  });

  it('should not find user', () => {
    var user = users.getUser('4');
    expect(user).toBe(undefined);
  });


  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
})
