const assert = require('assert')
var isFromCapeTown = function (registration){
  var FromCapeTown = registration.startsWith("CA")
  return FromCapeTown;
};
assert.equal(isFromCapeTown("CA 20586"),true);
