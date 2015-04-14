$(document).ready(function() {

  // Spara egenskaper direkt på objektet i konstruktorn...
  var MyComponent = function() {
    this.x = 5;
  }
  var c1 = new MyComponent();
  console.log(c1);

  // ... Eller på instansen:
  c1.hello = "Hi";
  console.log(c1);

  // Spara egenskaper i -klassens prototyp-
  MyComponent.prototype.y = 17;
  console.log(c1);
  // ??? Ser fortfarande ut som att y ligger i c1...
  // ... Men det gör den inte!

  console.log(c1.hasOwnProperty("x")); // true
  console.log(c1.hasOwnProperty("hello")); // true
  console.log(c1.hasOwnProperty("y")); // false


  // JavaScript letar först PÅ objektet,
  // och SEDAN i prototypen:
c1.y = 159;
console.log(c1.y); // 159
console.log(c1.hasOwnProperty("y")); // true

  // TODO overrrida y på instansen
  // visa att prototypen inte konsulteras

  // Att lägga en egenskap direkt på objektet kan såklart göras 
  // direkt i konstruktorn också:

  MySndComponent = function() {
    this.thing = "blobb";
  }
  MySndComponent.prototype.thing = "hej";
  var c2 = new MySndComponent();

  console.log(c2.thing)
  console.log(c2.hasOwnProperty("thing"));

});
