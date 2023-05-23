/*
Method	Description

toString()	Returns a number as a string
toExponential()	Returns a number written in exponential notation
toFixed()	Returns a number written with a number of decimals
toPrecision()	Returns a number written with a specified length
ValueOf()	Returns a number as a number
*/


// The toString() Method : The toString() method returns a number as a string.
let x = 123;
console.log(typeof (x), x);
let y = x.toString();
console.log(typeof (y), y);

// The toExponential() Method: toExponential() returns a string, with a number rounded and written using exponential notation.
let xx = 9.656;
console.log(xx.toExponential(2));
console.log(xx.toExponential(4));
console.log(xx.toExponential(6));

// The toFixed() Method : toFixed() returns a string, with the number written with a specified number of decimals:
let xxx = 9.565;
console.log(xxx.toFixed(0));
console.log(xxx.toFixed(2));
console.log(xxx.toFixed(4));

// The toPrecision() Method : toPrecision() returns a string, with a number written with a specified length:
let xxxx = 9.656;
console.log(xxxx.toPrecision());
console.log(xxxx.toPrecision(2));
console.log(xxxx.toPrecision(4));
console.log(xxxx.toPrecision(6));

// The valueOf() Method : valueOf() returns a number as a number.
let xxxxx = 123;
console.log(xxxxx.valueOf())
console.log((100 + 23).valueOf())



// Converting Variables to Numbers
/*
Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
*/
console.log("Converting Variables to Numbers.")
// The Number() Method
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));

// The Number() Method Used on Dates
console.log(Number(new Date("1970-01-02"))) //The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:


// The parseInt() Method
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

// The parseFloat() Method
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));



// Number Object Methods
/*
Number.isInteger()	Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	Converts a string to a number
Number.parseInt()	Converts a string to a whole number
 */
console.log("Number Object Methods");

console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));

// The Number.isSafeInteger() Method

console.log(Number.isSafeInteger(10));
console.log(Number.isSafeInteger(12345678901234567890));

// Minimum and Maximum Safe Integers
let a = Number.MAX_SAFE_INTEGER;
let b = Number.MIN_SAFE_INTEGER;