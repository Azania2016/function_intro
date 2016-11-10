const assert = require('assert');
var isFromGauteng = function(registration){
var FromGauteng = registration.endsWith('GP')
return FromGauteng;
};
assert.equal(isFromGauteng("DR467TYGP"),true);
