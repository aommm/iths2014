
// Math
var num1 = Math.random();
console.log("Random number:", num1);
var num2 = Math.pow(5,5);
console.log("5^5:", num2);

// Change URL
// window.location ="http://google.se"

// Get document which is shown in window
// (Is used very much by jQuery!)
window.document;
//window.document.body.innerHTML = "hej!";


// Change size of image
$("img").attr('width', window.innerWidth);
$("img").attr('height', window.innerHeight);

// Open popup window
// var wind = window.open();
// wind.document.body.innerHTML = "hej!"

/*
var password = prompt("enter your password, please");
if (password === "bananas") {
  var secretPage = window.open();
  secretPage.document.body.innerHTML = "Welcome to my secret lair!";
}
else {
  var failedPage = window.open();
  failedPage.document.body.innerHTML = "iiinvalid";
}
*/