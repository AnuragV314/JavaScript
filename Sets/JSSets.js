// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

/*
Essential Set Methods:

Method	 ||   Description
=============================
new Set()	Creates a new Set
add()	    Adds a new element to the Set
delete()	Removes an element from a Set
has()	    Returns true if a value exists in the Set
forEach()	Invokes a callback for each element in the Set
values()	Returns an iterator with all the values in a Set
Property	Description
size	    Returns the number of elements in a Set
*/

// Create a Set-->
// const letters = new Set(["a","b","c"]);

// Create a Set-->
// const letters = new Set();

// // Add Values to the Set
// letters.add("a");
// letters.add("b");
// letters.add("c");

// Create a Set -->
// const letters = new Set();

// // Create Variables
// const a = "a";
// const b = "b";
// const c = "c";

// // Add Variables to the Set
// letters.add(a);
// letters.add(b);
// letters.add(c);


// forEach() Method
// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
letters.forEach (function(value) {
  console.log(value);
})
console.log(letters.values());