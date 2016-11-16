const assert = require('assert');
var isTuesday = function(day){
  var Today = day.startsWith("Tue")
  return Today;
}
console.log(isTuesday("Tuesday"));
