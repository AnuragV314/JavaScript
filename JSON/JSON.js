/*
What is JSON?
JSON stands for JavaScript Object Notation
JSON is a lightweight data interchange format
JSON is language independent 
JSON is "self-describing" and easy to understand
*/

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
console.log(obj.employees[1].firstName + " " +obj.employees[1].lastName);


