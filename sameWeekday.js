const assert = require('assert');
var sameWeekday = function(date1,date2){
var d1 = new Date (date1);
var d2 = new Date (date2);
console.log(d2);
var d = d1.getDay() == d2.getDay()
console.log(d1.getDay());
console.log(d2.getDay());
return d;

}
sameWeekday('2016-11-15','2016-11-22')
assert.equal(sameWeekday('2016-11-15','2016-11-22'),true);
