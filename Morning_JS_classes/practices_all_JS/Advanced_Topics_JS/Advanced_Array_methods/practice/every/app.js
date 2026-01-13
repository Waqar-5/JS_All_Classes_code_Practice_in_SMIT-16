/*
JavaScript every() Method

Definition: The every() method tests whether all elements in an array pass a provided function/test.

Returns: true if all elements pass the test, otherwise false.

Does not modify the original array.

Syntax:

array.every(callback(element, index, array), thisArg)


callback → function to test each element.

element → current element being processed.

index → index of the current element (optional).

array → the array every() was called on (optional).
*/

// 1. Basic Example – Numbers


const numbers = [2, 4, 6, 8, 10];

// Check if all numbers are even
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // true

// Explanation:

// Callback checks if each number is divisible by 2.

// Every number passes → returns true.

console.log("************************************************************");
// 2. Example – One Fails

const numbers2 = [2, 4, 5, 8, 10];

const allEven2 = numbers2.every(num => num % 2 === 0);

console.log(allEven2); // false

// Explanation:
// 5 is not even → callback fails → every() returns false.

console.log("************************************************************");

// 3. Strings Example
const words = ["apple", "apricot", "ant"];

// Check if all words start with 'a'
const allStartWithA = words.every(word => word[0] === 'a');

console.log(allStartWithA); // true

console.log("*************************************************************");

// 4. Strings Example – Some Fail
const words2 = ["apple", "banana", "apricot"];

const allStartWithA2 = words2.every(word => word[0] === 'a');

console.log(allStartWithA2); // false

console.log("***********************************************************");

// 5. Objects Example
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];

// Check if all users are older than 20
const allAbove20 = users.every(user => user.age > 20);

console.log(allAbove20); // true

console.log("***********************************************************");
// 6. Objects Example – Some Fail
const users2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 18 },
    { name: "Charlie", age: 28 }
];

const allAbove20_2 = users2.every(user => user.age > 20);

console.log(allAbove20_2); // false

console.log("*****************************************************");

// 7. Using Index in Callback

const numbers3 = [10, 20, 30, 40];

const allCorrectIndex = numbers3.every((num, index) => num === (index + 1) * 10);

console.log(allCorrectIndex); // true

// Explanation:
// Checks if each number matches index * 10 + 10.


console.log("******************************************************");
// 8. Using thisArg

const numbers4 = [2, 4, 6];
const obj = {
    divisor: 2
};

// Check if numbers are divisible by obj.divisor
const allDivisible = numbers4.every(function(num) {
    return num % this.divisor === 0;
}, obj);

console.log(allDivisible); // true


console.log("*******************************************************");
// 9. Real-world Example – Form Validation

const formFields = [
    { field: "username", value: "john123" },
    { field: "email", value: "john@example.com" },
    { field: "password", value: "123456" }
];

// Check if all form fields are filled
const allFilled = formFields.every(input => input.value.trim() !== "");

console.log(allFilled); // true

console.log("******************************************************");

// 10. Nested Arrays Example
const matrix = [
    [2, 4, 6],
    [8, 10, 12],
    [14, 16, 18]
];

// Check if all numbers in each row are even
const allEvenMatrix = matrix.every(row => row.every(num => num % 2 === 0));

console.log(allEvenMatrix); // true

// Explanation:
// Used every() inside every() → powerful for multi-dimensional arrays.

console.log("******************************************************");
// 11. Advanced Example – Combination with some()
const users3 = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 30, active: false },
    { name: "Charlie", age: 28, active: true }
];

// Check if all active users are above 20
const allActiveAbove20 = users3
    .filter(user => user.active)
    .every(user => user.age > 20);

console.log(allActiveAbove20); // true

// Explanation:
// Filter first, then check every remaining element → common real-world use case.

/*
Key Points to Remember:

Stops iterating as soon as one element fails → efficient.

Returns boolean only.

Useful for validation, filtering conditions, or checks on arrays.

Can be combined with filter(), map(), some(), etc. for advanced use.
*/