/* 
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype

The object data type can contain:

1. An object
2. An array
3. A date
*/


// String
let name = "Anurag";
console.log(typeof(name), name);

// number
let length = 16;
let weidth = 7.5;
console.log(typeof(length), length);
console.log(typeof(weidth), weidth);

// BigInt
let x = BigInt("1234567899876543212345678909876543")
console.log(typeof(x), x)

//Boolean
let l = true;
let m = false;
console.log(typeof(l), l);
console.log(typeof(m), m);

// Undefined
let u;
console.log(typeof(u), u);

// null
let a = null;
console.log(typeof(a), a);
console.log(null == undefined); 
// Object
let person = {fname:"ANurag", lname:"Verma"};
console.log(typeof(person), person);

// Array object
let names = ["Anurag", "Shanu", "Python", "Java", "JavaScript"];
console.log(typeof(names), names);

// Date
const date = new Date();
console.log(typeof(date), date);