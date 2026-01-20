/*
JavaScript call() Examples

Key idea:

call() is very similar to apply()

Difference: arguments are passed comma-separated, not as an array

It changes the this value when calling a function

*/





// Example 1: Basic call() usage

// Define an object
const person = {
    name: "Waqar"
};

// Define a function that uses this.name
function greet(greeting, punctuation){
    // 'this' refers to the object passed in call()
    console.log(greeting + ", " + this.name + punctuation);
}

// Call greet with person as 'this'
greet.call(person, "Hello", "!"); 
// greet(person, "Hello", "!"); 
// Output: Hello, Waqar!

// Explanation:
// greet → the function
// call → tells JavaScript to call the function with specific 'this'
// person → the object that will be 'this'
// "Hello", "!" → arguments passed to the function, comma-separated

console.log("**********************************************************");
// Array-like object
const arrayLike = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

// Borrow Array.prototype.join using call
const result = Array.prototype.join.call(arrayLike, "-"); 
// Output: "a-b-c"

// Explanation:
// Array.prototype.join → the method we want to borrow
// call → call it as if arrayLike is the array
// arrayLike → the 'this' inside join
// "-" → argument passed to join (separator)
console.log(result);


console.log("*****************************************************");

// Example 3: Changing this in a method
const calculator = {
    factor: 2,
    multiply: function(a, b) {
        return (a * b) * this.factor; // Use this.factor
    }
};

// Normally
console.log(calculator.multiply(3, 4)); 
// Output: 24 → 3*4*2

// Using call to override this
const results = calculator.multiply.call({ factor: 5 }, 3, 4); 
// Output: 60 → 3*4*5

// Explanation:
// calculator.multiply → function to call
// call({ factor: 5 }, 3, 4) → call function with 'this' = {factor:5}
// arguments passed as comma-separated
console.log(results);

console.log("********************************************************");
// Example 4: Using call() with constructor-like functions

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// Normally we use 'new' to create object
const p1 = new Person("Waqar", "Ali");
console.log(p1); // {firstName: "Waqar", lastName: "Ali"}

// Using call to initialize another object
const obj = {};
Person.call(obj, "Ali", "Waqar");
console.log(obj); // {firstName: "Ali", lastName: "Waqar"}

// Explanation:
// Person → constructor function
// call(obj, "Ali", "Waqar") → 'this' inside Person becomes obj
// arguments → passed comma-separated


console.log("**********************************************************");

// Example 5: Combining arrays dynamically (alternative to apply)

const arr1 = [10, 20];
const arr2 = [5, 30];

// Normally Math.max(...arr1.concat(arr2))
const max = Math.max.call(null, ...arr1.concat(arr2));
console.log(max); // 30

// Explanation:
// Math.max → function to find maximum
// call(null, ...arr1.concat(arr2)) → 'this' not needed, so null
// spread operator passes array as individual arguments


console.log("******************************************************");
// Example 6: Borrowing methods for strings

const message = "hello world";

// Borrow toUpperCase from String prototype
const upper = String.prototype.toUpperCase.call(message);
console.log(upper); // "HELLO WORLD"

// Explanation:
// String.prototype.toUpperCase → function we want to use
// call(message) → 'this' inside toUpperCase becomes the string message


console.log("********************************************");
// Example 7: Multiple objects using same function

const person1 = { name: "Waqar" };
const person2 = { name: "Ali" };

function introduce(age) {
    console.log("My name is " + this.name + " and I am " + age + " years old");
}

// Call with different objects
introduce.call(person1, 25); // My name is Waqar and I am 25 years old
introduce.call(person2, 30); // My name is Ali and I am 30 years old

// Explanation:
// Same function → works for multiple objects
// call(personX, age) → 'this' changes dynamically
