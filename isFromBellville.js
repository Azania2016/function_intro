const assert = require('assert');
var isFromBellville = function(registration){
  var FromBellville = registration.startsWith("CY");
  return FromBellville;
};
assert.equal(isFromBellville("CY 1837"),true);
