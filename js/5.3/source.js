var Person = function(name) {
	this.name = name;
};
Person.prototype.sayHello = function() {
	console.log("Hello my name is "+this.name);
};

var Teacher = function(name) {
	Person.call(this, name);
};
Teacher.prototype = new Person();
Teacher.prototype.teach = function() {
	console.log("balbalbal");
};
Teacher.prototype.sayHello = function() {
	Person.prototype.sayHello.call(this);
	console.log("Hello i am a teacher !!!");
};
var t = new Teacher("Jonathan");
t.sayHello();
t.teach();

var p = new Person("Niklas");
p.sayHello();

