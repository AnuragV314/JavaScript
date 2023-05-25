// A Map holds key-value pairs where the keys can be any datatype.

// A Map remembers the original insertion order of the keys.


/*
Essential Map Methods :

Method	 ||   Description
=======================
new Map()	    Creates a new Map
set()	        Sets the value for a key in a Map
get()	        Gets the value for a key in a Map
delete()	    Removes a Map element specified by the key
has()	        Returns true if a key exists in a Map
forEach()	    Calls a function for each key/value pair in a Map
entries()	    Returns an iterator with the [key, value] pairs in a Map
Property	    Description
size	        Returns the number of elements in a Map
*/

// Map() Method
// Create a Map
const fruits = new Map([
    ["Apples", 500],
    ["Bananas", 300],
    ["Orages", 200],
])
console.log(fruits);


// set() Method
// Create a Map
const fruits1 = new Map();

// Set Map Values
fruits1.set("Apples", 500);
fruits1.set("Bananas", 300);
fruits1.set("Oranges", 200);
console.log(fruits1);

// get() Method
console.log(fruits1.get("Apples"))

// size
console.log(fruits1.size);

// delete() Method

fruits1.delete("Apples")
console.log(fruits1);

// has() Method
console.log(fruits1.has("Apples"))

// forEach() Method
fruits.forEach(function(value, key){
    console.log(key, value);
})

// entries() Method
for (const x of fruits.entries()){
    console.log(x);
}