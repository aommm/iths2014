$(document).ready(function() {

  // Person has name and species
  // All Persons have the same donkey kong record

  var Person = function(name) {
    this.name = name;
    this.species = 'human';
  };
  Person.prototype.donkeyKongRecord = 10;

  var p1 = new Person('Mr. K');
  p1.tetrisRecord = '9502888905';

  // Property set in constructor
  console.log(p1.hasOwnProperty('name')); // true
  console.log(p1.name);
  
  // Property set outside of constructor
  console.log(p1.hasOwnProperty('tetrisRecord')); // true
  console.log(p1.tetrisRecord);

  // Property set IN PROTOTYPE!
  console.log(p1.hasOwnProperty('donkeyKongRecord')); // false
  console.log(p1.donkeyKongRecord);

  // Change prototype...
  Person.prototype.donkeyKongRecord = 25;
  // p1's donkeyKongRecord has also changed
  console.log(p1.donkeyKongRecord);    


  console.log(p1);




  var Person2 = function (name) {
    this.name = name;
    console.log('new person, '+name+', '+this.secretName);
  };
  Person2.prototype = {secretName: 'Santa'};

  var person1 = new Person2('A'); // 'Instance created, A'
  person1.secretName = 'AJDSIJF';
  var person2 = new Person2('B'); // 'Instance created, B'



});
