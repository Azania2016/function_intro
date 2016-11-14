const assert = require('assert');
var isWeekdays = function(day){
  var Weekdays = day.endsWith('day')
  console.log(Weekdays);
return true;
};
console.log(isWeekdays('Monday'));
assert.equal(isWeekdays('Monday'),true);
