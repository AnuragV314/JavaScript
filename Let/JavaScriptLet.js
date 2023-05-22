// Variables defined with let can not be redeclared.
// Variables defined with let must be declared before use.
// Variables defined with let have block scope.


let x = "Anurag"
// x = "Shubham" // run
// let x = "Shubham" // error

var l = 3;
console.log(l)
var l = 12;
console.log(l)

{
    let y = 10
}


{
    var z = 10;
}

console.log(x)

// console.log(y) // y can NOT be used here

console.log(z)  // z CAN be used here