var moment = require('moment');

// var date = moment();
// date.add(100,'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

var date = moment();
date.subtract(6, 'hours');
console.log(date.format('h:mm a'));
// 10:35 am
// 6:01 am
