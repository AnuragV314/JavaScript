const numbers = [45, 4, 9, 16, 25];
// forEach()
let txt = "";
numbers.forEach(myFucnction);
function myFucnction(value, index, array){
    txt = value;
    console.log(txt);
}

// map()
const numebrs2 = numbers.map(myFucnction2)

function myFucnction2(value, index, array){
    return value*2
}
console.log(numebrs2)

// flatMap()
const myArr = [1,2,3,4,5,6];
const newArr = myArr.flatMap((x)=> x*2);
console.log(newArr);

// filter()
const number = [45, 4, 9, 16, 25];
const over18 = number.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(over18);


// reduce(), reduceRight().
const num = [45, 4, 9, 16, 25];
// let sum = num.reduce(myFunction);
// let sum = num.reduce(myFunction, 100); // accept an initial value

let sum = num.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);


// every()
const num1 = [45, 4, 9, 16, 25];
let allOver18 = num1.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(allOver18);

// some()
const num2 = [45, 4, 9, 16, 25];
let someOver18 = num2.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(someOver18);


// indexOf()
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple", 1);  // 2 --Apple
console.log(position);


// find()
const num3 = [4, 9, 16, 25, 29];
let first = num3.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

// findIndex()

// from()
console.log(Array.from("ABCDEFG"))

// keys()
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruitss.keys();
let text = "";

for (let x of keys) {
  text += x;
}
console.log(text);


// entries()
const f = fruitss.entries();
let text1;
for (let x of f) {
    text1 += x + " ";
}
console.log(text1);


// includes()
console.log(fruitss.includes("Mango"));


// Spread (...)
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);