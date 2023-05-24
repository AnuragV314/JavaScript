// Math.random()
console.log(Math.random()); //always returns a number lower than 1.

// Math.random() used with Math.floor() can be used to return random integers.
console.log(Math.floor(Math.random() * 10)); //  Returns a random integer from 0 to 9.
console.log(Math.floor(Math.random() * 11));  //  Returns a random integer from 0 to 10.
console.log(Math.floor(Math.random() * 101)); //  Returns a random integer from 0 to 100.

console.log(Math.floor(Math.random() * 100) + 1);  //  Returns a random integer from 0 to 100.



// A Proper Random Function
// This JavaScript function always returns a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let r = getRndInteger(0, 100);
console.log(r);

// This JavaScript function always returns a random number between min and max (both included):
function getRndInteger2(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let r2 = getRndInteger(0, 100);
console.log(r2); 