const assert = require('assert');
var isFromLImpompo = function(registration){
var FromLimpompo = registration.endsWith('L')
return FromLimpompo;
};
assert.equal(isFromLImpompo("DRT 122 L"),true);
