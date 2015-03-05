$(document).ready(function() {

var items = [{name: 'Niklas', age: 22, interests: ['programming', 'running', 'books', 'bananas'], points: 900},
{name: 'Christer', age: 37, interests: ['geocaching'], points: 30},
{name: 'Ulla', age: 11, interests: ['electricity', 'lights', 'cats'], points: 9512}]

var settings = {
  sortBy: undefined,
  sortAscending: true
}

function renderPage() {
  console.log("rendering");
  var html = "<table border='1'><tr><th><a href='#' id='name'>Namn</a></th><th><a  href='#' id='age'>Ålder</a></th><th><a href='#' id='interests'>Intressen</a></th><th><a href='#' id='points'>Poäng</a></th></tr>"
  items.forEach(function(item) {
    html += renderItem(item);
  })
  html += "</table>"
  $("#content").html(html); 

  // Re-attach events
  $("#rerender").click(renderPage);
  $("#name").click(_.partial(sort, 'name'));
  $("#age").click(_.partial(sort, 'age'));
  $("#interests").click(_.partial(sort, 'interests'));
  $("#points").click(_.partial(sort, 'points'));
}

function renderItem(item) {
  var interests = _.reduce(item.interests, function(str,i) {return (str?str+", ":"")+i}, "");
  return "<tr><td>"+item.name+"</td><td>"+item.age+"</td><td>"+interests+"</td><td>"+item.points+"</td></tr>"
}

function sort(name) {
  console.log("SORTING!");
  // Sort items by the given property name
  items = _.sortBy(items, _.property(name));

  // Change sorting settings (and possibly swap asc/desc)
  if (settings.sortBy === name) {
    if (settings.sortAscending) {
      settings.sortAscending = false;
      items = _(items).reverse().value();
    } else {
      settings.sortAscending = true;
    }
  } else {
    settings.sortBy = name;
  }

  // Re-render page
  renderPage();
}


renderPage();

});