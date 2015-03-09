$(document).ready(function() {

$("form").submit(function(e) {

  var val = $("input").val();

  // val is of type string...
  // Empty string (''): falsy
  // All other strings: truthy
  if (val) {
    return true;
  } else {
    return false;
  }
  // or: return Boolean(val);
  
});

});
