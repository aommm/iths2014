
var numOranges = prompt("how many oranges?");
var price      = prompt("how much?");

var totalPrice = numOranges*price;
console.log("total price:"+totalPrice);
if (!isNaN(totalPrice)) {
	if (totalPrice > 250) {
		alert("kan int köpa!");
	}
	else {
		alert("kan köpa (inandnings-jo)!");	
	}
}