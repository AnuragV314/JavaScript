/* 
JavaScript BigInt variables are used to store big 
integer values that are too big to be represented by a 
normal JavaScript Number.
*/


// Integer Precision

// let x = 999999999999999;
// let y = 9999999999999999;
// console.log(x, y);


// How to Create a BigInt

// let x = 9999999999999999;
// let y = 9999999999999999n;
// console.log(x, y);

// let x = 1234567890123456789012345n;
// let y = BigInt(1234567890123456789012345)
// console.log(x, y);
// console.log(typeof(x));


// BigInt Multiplication Example
// let x = 9007199254740995n;
// let y = 9007199254740995n;
// let z = x * y;
// console.log(z);


// BigInt Division Example
// let x = 5n;
// let y = x / 2;
// Error: Cannot mix BigInt and other types, use explicit conversion.

let x = 5n;
let y = Number(x) / 2;
console.log(y);


// BigInt Hex, Octal and Binary
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n
let bin = 0b100000000000000000000000000000000000000000000000000011n;
console.log(hex, oct, bin);


// Minimum and Maximum Safe Integers
let l = Number.MAX_SAFE_INTEGER;
let m = Number.MIN_SAFE_INTEGER;
console.log(l, m);
// New Number Methods -- Number.isInteger(), Number.isSafeInteger()
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));