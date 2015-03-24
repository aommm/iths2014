$(document).ready(function() {

// Define an Item (a row in the table)
var Item = function(name, age, interests, points) {
  this.name      = name;
  this.age       = age;
  this.interests = interests;
  this.points    = points;
}
Item.prototype.render = function() {
  var interests = _.reduce(this.interests, function(str,i) {return (str?str+", ":"")+i}, "");
  return "<tr><td>"+this.name+"</td><td>"+this.age+"</td><td>"+interests+"</td><td>"+this.points+"</td></tr>"

}

// Define a Page (the entire table)
var Page = function(items) {
  this.items = items;
  this.settings = {
    sortBy: undefined,
    sortAscending: true
  };
}
Page.prototype.render = function() {
  console.log("rendering");
  var html = "<table border='1'><tr><th><a href='#' id='name'>Namn</a></th><th><a  href='#' id='age'>Ålder</a></th><th><a href='#' id='interests'>Intressen</a></th><th><a href='#' id='points'>Poäng</a></th></tr>"
  this.items.forEach(function(item) {
    html += item.render();
  });
  html += "</table>"
  $("#content").html(html); 

  // Re-attach events
  // $("#rerender").click(renderPage);
  $("#name").click(_.bind(this.sort, this, 'name'));
  $("#age").click(_.bind(this.sort, this, 'age'));
  $("#interests").click(_.bind(this.sort, this, 'interests'));
  $("#points").click(_.bind(this.sort, this, 'points'));
}

Page.prototype.sort = function(name) {
  console.log("SORTING!");
  // Sort items by the given property name
  this.items = _.sortBy(this.items, _.property(name));

  // Change sorting settings (and possibly swap asc/desc)
  if (this.settings.sortBy === name) {
    if (this.settings.sortAscending) {
      this.settings.sortAscending = false;
      this.items = _(this.items).reverse().value();
    } else {
      this.settings.sortAscending = true;
    }
  } else {
    this.settings.sortBy = name;
  }
  // Re-render page
  this.render();
};


// Create rows
var items = [new Item('Niklas', 22, ['programming', 'running', 'books', 'bananas'], 900),
             new Item('Christer', 37, ['geocaching'], 30),
             new Item('Ulla', 11, ['electricity', 'lights', 'cats'], 9512)]
// Create page
var page = new Page(items);
// Show page
page.render();



});

// TODO:
// Add fold which sums all ages
// Generate a list of all interests
// Add searching
// ...
