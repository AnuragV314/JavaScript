// The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

"use strict"

// x = 3.14; // error
// console.log(x);

let y = 3.14;
console.log(y);

// ------

x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}