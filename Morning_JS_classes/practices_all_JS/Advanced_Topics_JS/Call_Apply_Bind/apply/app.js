// Example 1: Basic Usage of apply()
// Define an object with a property
const person = {
    name: "Waqar"
};

// Define a function that uses this.name
function greet(greeting, punctuation){
    // 'this' refers to the object passed in apply
    console.log(greeting + ", " + this.name + punctuation);
}

// Use apply to call greet with 'person' as 'this'
greet.apply(person, ["Hello", "!"]); 
// greet(person, ["Hello", "!"]); 
// Output: Hello, Waqar!


console.log("**********************************************************");
// Example 2: Using apply() with Math functions
// Array of numbers
const numbers = [5, 6, 2, 3, 7];

// Find maximum using Math.max with apply
const maxNum = Math.max.apply(null, numbers);
// const maxNum = Math.max(null, numbers);
// Output: 7

console.log(maxNum);


console.log("**************************************************************");
// Example 3: Borrowing Methods Using apply()
// Array-like object (arguments object)
const arrayLike = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

// Use Array.prototype.join to join array-like object
const result = Array.prototype.join.apply(arrayLike, ["-"]);
// Output: "a-b-c"

console.log(result);

console.log("***************************************************");
// Example 4: Using apply() with constructor-like functions (advanced)
function Person(first, last) {
    this.firstName = first; // Set first name
    this.lastName = last;   // Set last name
}

const args = ["Waqar", "Ali"];

// Create object using apply
const personObj = {};
Person.apply(personObj, args);

console.log(personObj); 
// Output: { firstName: 'Waqar', lastName: 'Ali' }

console.log("**************************************************************");
// Example 5: Using apply() for max in dynamic arrays

const arr1 = [10, 20, 30];
const arr2 = [5, 40, 25];

// Combine arrays
const combinedMax = Math.max.apply(null, arr1.concat(arr2)); 
// Output: 40

console.log(combinedMax);


console.log("**************************************************************");
// Example 6: Using apply() with this in methods

const calculator = {
    factor: 2,
    multiply: function(a, b) {
        return (a * b) * this.factor; // Use this.factor
    }
};

const results = calculator.multiply.apply({ factor: 5 }, [3, 4]); 
// Output: 60

console.log(results);



