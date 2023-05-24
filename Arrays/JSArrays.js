// Arrays are a special type of objects.
// An array is a special variable, which can hold more than one value:

/*
Syntax:
const array_name = [item1, item2, ...];  
*/

// It is a common practice to declare arrays with the const keyword.


// Creating an Array ===>

//  method1
// const cars = ["Saab", "Volvo", "BMW"];

// method2
// const cars = [];
// cars[0] = "Saab";
// cars[1] = "Volvo";
// cars[2] = "BMW";

//  method3
// Using the JavaScript Keyword new
const cars = new Array("Saab", "Volvo", "BMW");

// Accessing Array Elements
car = cars[0];
console.log(car);
console.log(cars[1]);

// Changing an Array Element
cars[0] = "Opel";
console.log(cars);


// Converting an Array to a String
console.log(cars.toString());


// Arrays are Objects :

// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// Array:
const person = ["Anurag", "Verma", 22];
console.log(person);
//Object
const personn = {fname:"Anurag", lname:"Verma", age:22};
console.log(personn);



// Adding Array Elements
const fruits  = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log(fruits[fruits.length-1])
console.log(fruits[3]);


/*
The Difference Between Arrays and Objects:==>

In JavaScript, arrays use numbered indexes.  
In JavaScript, objects use named indexes.
*/


// JavaScript new Array()

// These two different statements both create a new array containing 6 numbers:

const points = new Array(40, 100, 1, 5, 25, 10);
const pointss = [40, 100, 1, 5, 25, 10];


// A Common Error

const a = [40];
// is not the same as:
const aa = new Array(40);


// How to Recognize an Array

// -- Array.isArray():
// -- fruits instanceof Array;

