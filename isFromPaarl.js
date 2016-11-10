const assert = require('assert');
var isFromPaarl = function(registration){
  var FromPaarl = registration.startsWith('CJ')
  return FromPaarl;
};
assert.equal(isFromPaarl("CJ 20391"),true);
