$(document).ready(function() {


var inputs = $("form input").toArray();
var errorSpan = $("#error");

$("form").submit(function(e) {

  // Function which checks if a DOM input element is empty or not
  var nonEmpty = function(input) {return $(input).val();}
  
  // All elements are okay:
  if (_(inputs).every(nonEmpty)) {
    // Allow through
    errorSpan.hide();
    return true;
  }
  // Some elements are not okay:
  else {
    // Function which creates error message
    var buildError = function(msg, input) {
      // New message is total message + current field name, if invalid
      var fieldName = $(input).attr('name')
       ,  errorMsg  = msg + (nonEmpty(input)? "" : (fieldName + ", "));
      return errorMsg;
    }
    // Generate error message
    var totalError = _(inputs).reduce(buildError, "Error in fields: ");
    console.log(totalError);
    totalError = totalError.slice(0, totalError.length -2);
    console.log(totalError);
    // Show error message
    errorSpan.text(totalError);
    errorSpan.show();
    // Do not allow through
    return false;
  }

  
});

});
