const assert = require('assert');
function getDay(){
  var today = new Date();
  var Day = ["Sunday","Monday","Tuesday","Wedsnesday","Thursday","Friday","Saturday"];
  return Day[today.getDay()];
  };
  console.log(getDay());
  assert.equal(getDay(),"Tuesday");
