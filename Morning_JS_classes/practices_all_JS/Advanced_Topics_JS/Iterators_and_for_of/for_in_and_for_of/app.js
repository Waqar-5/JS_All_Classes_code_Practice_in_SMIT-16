// 1️⃣ Practice: Sum all values in an object (for...in)
const scores = { math: 90, english: 85, science: 95 };
let total = 0;

for (const subject in scores) {
    total += scores[subject]; // Access each value using key
}

console.log(`Total score: ${total}`); // 270
// ✅ Focus: Iterating object keys and summing values.


console.log("**************************************");
// ✅ Focus: Iterating object keys and summing values.
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
    console.log(fruit);
}
// Output: apple, banana, cherry
// ✅ Focus: Iterating array values directly with for...of.

console.log("***************************************8");
// 3️⃣ Practice: Count characters in a string (for...of)
const word = 'JAVASCRIPT';
let count = 0;

for (const char of word) {
    count++;
}

console.log(`Number of characters: ${count}`); // 10

// ✅ Focus: Strings are iterable; count characters using for...of.

console.log("************************************");

// ✅ Focus: Strings are iterable; count characters using for...of.
const employee = { name: 'Ali', age: 25, salary: 50000, dept: 'IT' };

for (const key in employee) {
    if (typeof employee[key] === 'number') {
        console.log(`${key}: ${employee[key]}`); // Prints only numeric properties
    }
}


// ✅ Focus: Conditional logic inside for...in loop.
// ✅ Focus: Conditional logic inside for...in loop.
const marks = new Map([
    ['Ali', 88],
    ['Sara', 92],
    ['John', 75]
]);

for (const [name, score] of marks) {
    console.log(`${name} scored ${score}`);
}

// ✅ Focus: Map is directly iterable; destructuring key-value pairs.

console.log("*******************************");
// 6️⃣ Practice: Nested arrays (for...of inside for...of)

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (const row of matrix) {
    for (const val of row) {
        console.log(val); // Prints all values 1 to 9
    }
}

// ✅ Focus: Nested iteration using for...of for 2D arrays.

console.log("*************************************");


// 7️⃣ Practice: Iterate only own properties (for...in)
const parent = { a: 1 };
const child = Object.create(parent);
child.b = 2;
child.c = 3;

for (const key in child) {
    if (child.hasOwnProperty(key)) {
        console.log(key, child[key]); // b 2, c 3
    }
}


console.log("**********************************");

// 8️⃣ Practice: Skip certain array elements (for...of)
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    if (num % 2 === 0) continue; // Skip even numbers
    console.log(num); // Prints 1, 3, 5
}

// ✅ Focus: Conditional filtering in for...of.