// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// Function to complete the product of p1 and p2
function myFunction(p1, p2) {
    console.log("kya hal chal hai bhai k...");
    return p1 * p2;
}

let a = myFunction(2, 5);
console.log("Something...");
console.log(a);

// Convert Fahrenheit to Celsius

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);
console.log(value);
let x = "The temperature is " + value + " Celsius.";
console.log(x);

// Local Variables

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName