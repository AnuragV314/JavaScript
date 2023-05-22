// Synonyms:
// Template Literals
// Template Strings
// String Templates
// Back-Tics Syntax


// Back-Tics Syntax
let text = `Hello world`;
console.log(text);


// (works in html)
let text2 =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);


// Interpolation -- ${...}
let fname = "Anurag";
let lname = "Verma";
let text3 = `Welcom ${fname} ${lname}!`;
console.log(text3);


// Expression Substitution
let price = 10;
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);
