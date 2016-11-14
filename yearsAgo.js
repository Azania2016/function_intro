const assert = require('assert')
var yearsAgo = function(y1,y2){
var year1  = new Date(y1);
var year2  = new Date (y2);
var results = Number(year1.getFullYear()-year2.getFullYear());
console.log(results);
return results;
};
yearsAgo('2011-06-09','2016-06-09');
assert.equal(yearsAgo('2011-06-09','2012-12-08'),-1);
