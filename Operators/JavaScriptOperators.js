// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators


// Arithmetic Operators (+,-,*,**,/,%,++,--)
let a = 3;
let x = (12 + 4) * a;
console.log(x);


// Assignment Operators (=, +=,-=,*=,/=,%=,**=)
let y = 10;
y += 5;
console.log(y);


// Comparison Operators (==,===,!=,!==, >,<,>=,<=,?)

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log(text1 < text2);

let aa = 3;
let bb = 4;
let result2 = aa > bb;
console.log(result2);


// Logical Operators (&&, ||, !)
console.log(0 && 1);
console.log(1 && 3);
console.log(null && true);
console.log(1 && 2 && 3 && 4);


console.log(0 || 1);
console.log(1 || 3);
console.log(null || true);
console.log(-1 || -2 || -3 || -4);

let nHi = 1;
console.log(!nHi);


// Type Operators (typeof, instanceof)

let l = 15;
let m = "Anurag"
let n = "";
let o = null;
console.log("Type of a = " + (typeof l));
console.log("Type of b = " + (typeof m));
console.log("Type of c = " + (typeof n));
console.log("Type of d = " + (typeof o));


// Bitwise Operators (&, |, ~, ^, <<, >>, >>>)
A = 6, B = 1;
console.log(A & B);
console.log(A | B);
console.log(A ^ B);
console.log(~A);
console.log(A << B);
console.log(A >> B);
console.log(A >>> B);


// Ternary Operators
let marks = 40;
let result3 = marks > 34 ? "Pass" : "Fail";
console.log(result3);
