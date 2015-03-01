$(document).ready(function() {

  var result1 = $("#result1");
  var result2 = $("#result2");
  var result3 = $("#result3");

  // Get HTML from local source
  $.get("emil.html", function(data) {
    console.log("hejhej");
    result1.html(data);
  }, 'html');
  console.log("started emil");

  // Get JSON from -remote- server!
  // (Note: server needs to be configured in a special way for this to work)
  $.get("http://ip.jsontest.com", function(data) {
    // data is an object, with an ip property
    result2.html(data.ip);
  });

  // Get JSON from -remote- server!
  // Send additional information along with our request
  // (Note: server needs to be configured in a special way for this to work)
  $.get("http://md5.jsontest.com", {"text": "hejsan hoppsan"}, function(data) {
    // data is an object, with 2 properties
    result3.append(data.original);
    result3.append("<br>");
    result3.append(data.md5);
  });



});