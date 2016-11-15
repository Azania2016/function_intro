const assert = require('assert');
var isFromLimpopo = function(registration){
var FromLimpopo = registration.endsWith("L")
return FromLimpopo;
};
assert.equal(isFromLimpopo("DRT 122 L"),true);
