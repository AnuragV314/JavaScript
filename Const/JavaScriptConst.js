// Variables defined with const cannot be Redeclared.
// Variables defined with const cannot be Reassigned.
// Variables defined with const have Block Scope.


const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error
console.log(PI);

// You can create a constant array
const cars = ["Saab", "Volvo", "BMW"];

// you can change an element
cars[0] = "Toyota";

// you can add an element
cars.push("Audi");

console.log(cars[3]);

// but you can not assign the array
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR



// Constant Objects

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

console.log(car.type);

// you can NOT reassign the object
// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR