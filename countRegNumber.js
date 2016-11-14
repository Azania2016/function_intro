const assert = require('assert')
var countRegNumber = function (string){
  var splitsString = string.split(",");
  var lengthofString = splitsString.length;
  return lengthofString;
}
assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
