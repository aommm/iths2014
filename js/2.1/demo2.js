var a = {name: "Jonathan"};
var b = a;
b.name = "Niklas";

console.log(a.name);

var list = [{name: "Jonathan", age:23}, {name: "Nicke", age:23}];
/*
for(var i in list) {
	console.log("Person "+i+":")
	for(var prop in list[i]) {
		console.log(prop+": "+list[i][prop]);
	}
}*/