/*
What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).
*/

const person = {
    firstName: "Anurag",
    lastName: "Veram",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName());


"use strict";
let x = this;
console.log(x);


// The Function call() Method
const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Anurag",
    lastName: "Verma",
}

// Return "Anurag Verma":
console.log(person1.fullName.call(person2));

// The Function apply() Method
// The Function bind() Method
const person3 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person3.fullName.bind(member);
console.log(fullName)