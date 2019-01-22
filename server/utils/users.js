[{
  id: '%4930asdfj3234',
  name: 'Allister',
  room: 'Rick and Morty fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor() {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.users.find((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return user || 'Name not found';
  }
  getUser (id) {
    var user = this.users.find((user) => user.id === id);
    return user ;
  }
  getUserList (room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;
  }
}

module.exports = {Users};
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old`
//   }
// }
//
// var me = new Person('Allister', 25);
// var description = me.getUserDescription();
// console.log(description);
