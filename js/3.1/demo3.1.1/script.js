
// Example 1: blocks don't matter
/*
var i = 5;
console.log(i);

if (i == 5) {
    var j = 10;
}
console.log(j); // Works! =)
*/

// Example 2: functions do matter
/*
function hej() {
  var i = 5;
}

hej();
console.log(i); // undefined
*/

// Example 3: functions do matter

var hej = function() {
  var i = 5;
}

hej();
console.log(i); // undefined