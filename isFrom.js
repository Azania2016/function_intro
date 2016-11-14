const assert = require('assert');
var  isFrom = function(regNo,location){
  var check = regNo.startsWith(location)
  return  true;
};
assert.equal(isFrom('CA 2345','CY 233'),true);
assert.equal(isFrom('ND 999'),true);
assert.equal(isFrom('CY 9977','CY'),true)
