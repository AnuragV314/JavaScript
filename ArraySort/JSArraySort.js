// The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort();
console.log(fruits);

fruits.reverse()
console.log(fruits);


// Numeric Sort
// By default, the sort() function sorts values as strings.

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a,b){return a-b})
console.log(points);


// Sorting an Array in Random Order
const pointss = [40, 100, 1, 5, 25, 10];
pointss.sort(function(){return 0.5 * Math.random()});
console.log(pointss)
