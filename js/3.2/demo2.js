$(document).ready(function() {

  // Load the whole page, and put it into #content
  $("#allButton").on('click', function() {
    console.log("clicked all");
    $("#content").load("emil.html");
  });

  // Load only a fragment of the page, and put it into #content
  // (What fragment? this is specified by the jQuery selector)
  $("#imageButton").on('click', function() {
    console.log("clicked image");
    $("#content").load("emil.html #image");
  });

});