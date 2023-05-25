/*
Scope determines the accessibility (visibility) of variables.

JavaScript has 3 types of scope:

Block scope
Function scope
Global scope
*/

// Block scope:

{
    let x = 2;
}
// x can NOT be used here


// Local scope:

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

// code here can NOT use carName


//   Function Scope:

function myFunction() {
    var carName = "Volvo";   // Function Scope
}


// Global Scope: 

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}

var x = 2;       // Global scope
let x = 2;       // Global scope
const x = 2;       // Global scope