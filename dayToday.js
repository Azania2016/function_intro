const assert = require('assert')
var dayToday = function(today){
  var results = today.endsWith('day');
  var weekDays = ["Sunday","Monday","Tuesday","Wedsnesday","Thursday","Friday","Saturday"]
  console.log (results);
}
assert.equal(dayToday("Monday"));
