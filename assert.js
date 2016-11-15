assert = require (assert)
var check = function(greet){
  assert.equal(greet('Bob'), 'Hi, Bob!');
  assert.equal(false,false);
}
