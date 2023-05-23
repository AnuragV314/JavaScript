// JavaScript has only one type of number. Numbers can be written with or without decimals.

let x = 3.14; // A Number with decimals
let y = 3;  // A Number without decimals

// Extra large or extra small numbers can be written with scientific (exponent) notation:
let l = 123e5;
let m = 123e-5;
console.log(l, m)


let a = 2;
let b = 3;
let c = a + b;
console.log(c)

let i = "3";
let j = 5;
let k = i + j;
console.log(typeof(k), k);


let o = 10;
let p = 20;
let q = "30";
let r = o + p + q;
console.log(typeof(r), r);

// JavaScript will try to convert strings to numbers in all numeric operations:
let g = "100";
let h = "10";
let d = g/h; // it work (*, -)
console.log(typeof(d), d)

let w = "100";
let t = "10";
let u = w + t;
console.log(typeof(u), u);



// NaN - Not a Number
let v = 100/"Apple";
console.log(typeof(v), v);
console.log(isNaN(v));
console.log(typeof(NaN));



// Infinity(-infinity)
let num = 2;
// execute untile Infinity
while(num != Infinity){
    num = num * num;
    console.log(num);
}

let aa = 2/0;
let bb = -2/0;
console.log(aa, bb);
console.log(typeof(Infinity));



// Hexadecimal
let xx = 0xFF;
console.log(typeof(xx), xx);


// Numbers as Objects
let xxx = 123;
let yyy = new Number(123);

console.log(typeof(xxx), xxx, typeof(yyy), yyy);