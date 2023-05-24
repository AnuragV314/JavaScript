/*
Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// length
let size = fruits.length;
console.log(size);

// toString()
console.log(fruits.toString());

// pop()
console.log(fruits.pop());

// push()
fruits.push("Kiwi");
console.log(fruits);

// shift()
console.log(fruits.shift());
console.log(fruits);

// unshift()
fruits.unshift("Lemon");
console.log(fruits);

// join()
console.log(fruits.join("*"));

// delete()
delete fruits[0];
console.log(fruits);

// Changing Elements
fruits[0] = "Banana";
console.log(fruits);

// concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1);

// flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat()
console.log(newArr);

// splice()
console.log(fruits);
fruits.splice(2, 0, "Lemon", "abc")
console.log(fruits);

// slice()
// const citrus = fruits.slice(2);
const citrus = fruits.slice(1, 3);
console.log(citrus);