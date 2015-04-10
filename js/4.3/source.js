var button = $("#translateButton");
var field = $("#inputField");
var result = $("#result");

button.on("click", function() {
   var input = field.val();
   console.log(input);

   $.ajax({
     url: "http://www.colourlovers.com/api/patterns",
     dataType: "jsonp",
     jsonp: "jsonCallback",
     success: function(data) {
     	$("body").append('<img src="'+data[0].imageUrl+'"></img>');
     },
     data: {
     	format: "json",
     	keywords: input
     }
   });

   $.ajax({
     url: "http://www.colourlovers.com/api/colors",
     dataType: "jsonp",
     jsonp: "jsonCallback",
     success: function(data) {
     	$("body").css("background-color", data[0].hex);
     },
     data: {
     	format: "json",
     	keywords: input
     }
   });

   $.ajax({
     url: "https://api.duckduckgo.com/",
     dataType: "jsonp",
     jsonp: "callback",
     success: function(data) {
     	console.log(data);
     	var text = data.RelatedTopics[0].Text;
     	result.text(text);
     },
     data: {
     	format: "json",
     	q: input
     }
   });

   return false;
});