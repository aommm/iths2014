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

  console.log(c1.hasOwnProperty("x"));
  console.log(c1.hasOwnProperty("hello"));
  console.log(c1.hasOwnProperty("y"));


  // JavaScript letar först PÅ objektet,
  // och SEDAN i prototypen:

  // TODO overrrida y på instansen
  // visa att prototypen inte konsulteras

  // TODO skapa ny klass, overrida y i konstruktorn,
  // men ha i prototypen. visa att prototypen inte visas

});
