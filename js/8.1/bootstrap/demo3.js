var saveButton = $("#save");
var editButton = $("#bedit");
var switchButton = $("#bswitch");
var upButton = $("#moveUp");
var downButton = $("#moveDown");
var textField = $("#input");
var colorField = $("#color");
var names = [];
var colors = [];

var selected = -1;

upButton.on("click", function() {
   if(selected > 0) {
      var temp = names[selected - 1];
      names[selected - 1] = names[selected];
      names[selected] = temp;

      temp = colors[selected - 1];
      colors[selected - 1] = colors[selected];
      colors[selected] = temp;
      
      selected--;
      
      printNames();
   }
   return false;
});

downButton.on("click", function() {
   if(selected < (names.length-1)) {
      var temp = names[selected + 1];
      names[selected + 1] = names[selected];
      names[selected] = temp;

      temp = colors[selected + 1];
      colors[selected + 1] = colors[selected];
      colors[selected] = temp;
      
      selected++;
      
      printNames();
   }
   return false;
});

saveButton.on("click", function() {
	names.push(textField.val());	
   colors.push(colorField.val());
	printNames();

   textField.text("");
   
	return false;
});

editButton.on("click", function() {
	names[selected] = textField.val();
   colors[selected] = colorField.val();

	printNames();
	return false;
});

switchButton.on("click", function() {
   var temp = names[Number($("#switch1").val())];
   names[Number($("#switch1").val())] = names[Number($("#switch2").val())];
   names[Number($("#switch2").val())] = temp;
   
   temp = colors[Number($("#switch1").val())];
   colors[Number($("#switch1").val())] = colors[Number($("#switch2").val())];
   colors[Number($("#switch2").val())] = temp;
   
   console.log();
   printNames();
   return false;
});

function printNames() {
	var output = $("#output");
	output.html("");
	for (var i = 0; i < names.length; i++) {
		output.append("<div id=\""+i+"\"> "+(i)+". "+names[i]+"</div>");
      $("#"+i).css("background-color", colors[i]);
      
      if(selected === i) {
         $("#"+i).css("background-color","green");
      }
      
      $("#"+i).on("click", listClick);
	}
}

function listClick() {
   selected = Number($(this).attr("id"));
   console.log($(this).text());
   textField.val(names[selected]);
   colorField.val(colors[selected]);
   printNames();
}