/*
Syntax:
for (expression 1; expression 2; expression 3) {
    // code block to be executed
  }
*/


const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (let i = 0; i<cars.length;i++ ){
    console.log(cars[i]);
}


for (let i=1;i<=10;i++){
    console.log(i)
}


// The For In Loop ====>
/*
Syntax:
for (key in object) {
  // code block to be executed
}
*/
const person = {fname:"Anurag", lname:"Verma", age:22};
for (x in person){
    // console.log(x);
    console.log(person[x]);
}

const numbers = [45, 4, 9, 16, 25];
for (i in numbers){
    // console.log(i);
    console.log(numbers[i]);
}

// Array.forEach()
numbers.forEach(myFunction);
function myFunction(value, index, array){
    console.log(value)
}


// JavaScript For Of ===>
/*
Syntax:
for (variable of iterable) {
  // code block to be executed
}
*/

// Looping over an Array
for (let y of cars){
    console.log(y);
}

// Looping over a String
let language = "JavaScript";
for(let x of language){
    console.log(x);
}