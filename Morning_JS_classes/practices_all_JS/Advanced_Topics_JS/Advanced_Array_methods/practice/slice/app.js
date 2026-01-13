// 1. Basic Array Slice

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes'];

// Slice from index 1 to 3 (3 not included)
const someFruits = fruits.slice(1, 3);

console.log(someFruits); // ['Banana', 'Mango']

// Original array remains unchanged
console.log(fruits); // ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']

// ✅ Key points:

// Slice does not include the end index.

// Original array stays intact.


console.log("***************************************************************");

// 2. Slice from a specific index to the end

const numbers = [10, 20, 30, 40, 50];

// Slice from index 2 to the end
const partNumbers = numbers.slice(2);

console.log(partNumbers); // [30, 40, 50]

console.log("***********************************************************");

// 3. Using Negative Indices
const letters = ['a', 'b', 'c', 'd', 'e'];

// Slice last 3 elements
const lastThree = letters.slice(-3);

console.log(lastThree); // ['c', 'd', 'e']

// Slice using negative start and end
const middle = letters.slice(-4, -1); 
console.log(middle); // ['b', 'c', 'd']

// ✅ Tip:

// -1 → last element, -2 → second last, etc.

// Works with both start and end.

console.log("****************************************************************");
// 4. Copy Entire Array
const originalArray = [1, 2, 3, 4, 5];

// Copy using slice
const copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3, 4, 5]

// Changing the copy does not affect original
copyArray.push(6);
console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(copyArray);     // [1, 2, 3, 4, 5, 6]

// Key point:

// slice() without arguments is a quick way to copy arrays.

console.log("***********************************************");
// 5. Slice Strings

const text = "Hello, World!";

// Slice first 5 characters
const hello = text.slice(0, 5);
console.log(hello); // "Hello"

// Slice from index 6 to end
const world = text.slice(6);
console.log(world); // "World"

// Slice using negative indices
const lastFive = text.slice(-5);
console.log(lastFive); // "World"


console.log("************************************************8");

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];

// Slice first two rows
const firstTwoRows = matrix.slice(0, 2);
console.log(firstTwoRows); // [[1,2],[3,4]]

// Note: shallow copy - inner arrays are still references
firstTwoRows[0][0] = 99;
console.log(matrix); 
// [[99, 2], [3, 4], [5, 6]] → inner arrays are affected

// ✅ Important:

// slice() creates a shallow copy.

// Modifying nested elements will affect the original array.


console.log("****************************************************************");
// 7. Using Slice with Loops
const data = [100, 200, 300, 400, 500];

// Get chunks of 2 elements
for (let i = 0; i < data.length; i += 2) {
  const chunk = data.slice(i, i + 2);
  console.log(chunk);
}

// Output:
// [100, 200]
// [300, 400]
// [500]

// Tip:
// slice() is very useful for chunking arrays.


console.log("********************************************");
// 8. Edge Cases
const arr = [1, 2, 3, 4, 5];

// start > end → returns empty array
console.log(arr.slice(4, 2)); // []

// start or end out of bounds → handled gracefully
console.log(arr.slice(-10, 10)); // [1,2,3,4,5]



/*
✅ Key Takeaways

slice() does not mutate the original array or string.

Returns a new array or string.

Can use negative indices to count from the end.

Useful for copying arrays, extracting portions, chunking, or working with strings.

Creates a shallow copy, so nested objects/arrays are still references.
*/