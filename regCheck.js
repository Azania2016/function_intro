const assert = require('assert');
var regCheck = function(regNum,location){
  var regCheck = regNum.startsWith(location)
  return regCheck;
};
assert.equal(regCheck('DV 23 NB GP','GP'),false);
assert.equal(regCheck('DV 23 LP GP','MP'),false);
assert.equal(regCheck('CY 189-012','CY'),true);
assert.equal(regCheck('CY 189-012','CY'),true);
