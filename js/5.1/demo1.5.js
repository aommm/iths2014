$(document).ready(function() {

var Row = function(name, age) {
  this.name = name;
  this.age  = age;
};
Row.prototype.render = function() {
  return "<tr><td>"+this.name+"</td><td>"+this.age+"</td></tr>"
}


var Table = function(rows, el) {
  this.rows = rows;
  this.el   = el;
}
Table.prototype.render = function() {
  var myHtml = "<table border=1><tr><td>Name</td><td>Age</td></tr>";
  for (var rowKey in this.rows) {
    var row = this.rows[rowKey];
    myHtml += row.render();
  }
  myHtml += "</table>";
  this.el.html(myHtml);
}

Table.prototype.swap = function() {
  var temp = this.rows[0];
  this.rows[0] = this.rows[1];
  this.rows[1] = temp;
}



var rows = [
  new Row('Niklas', 22),
  new Row('Agnes', 5),
  new Row('Christer', 37),
  new Row('Dodo', 377)
]
var tableEl = $("#content");
var table = new Table(rows, tableEl);
table.render();


$("button").click(function(){
  table.swap();
  table.render();
})

});
