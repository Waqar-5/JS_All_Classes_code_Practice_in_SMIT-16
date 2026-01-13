// What is flatMap()?

// flatMap() is a combination of map() + flat() (with depth = 1).

// It maps each element to a new value and flattens the result by 1 level.

// Syntax:

// array.flatMap(callback(currentValue, index, array), thisArg)


// callback → function applied to each element (like map())

// flattening happens only one level deep

// 1. Basic Example

// Original array
const numbers = [1, 2, 3, 4];

// Use flatMap to double each number and wrap in an array
const result = numbers.flatMap(num => [num * 2]);

console.log(result); // Output: [2, 4, 6, 8]

// Explanation:
// map() alone would give [[2],[4],[6],[8]] but flatMap flattens it 1 level

console.log("*****************************************************************");
// 2. Flattening Nested Arrays

const nested = [[1, 2], [3, 4], [5, 6]];

// Use flatMap to add 1 to each number and flatten
const incremented = nested.flatMap(arr => arr.map(x => x + 1));

console.log(incremented); // Output: [2, 3, 4, 5, 6, 7]

// Explanation:
// flatMap maps each sub-array and then flattens one level automatically

console.log("*****************************************************************");
// 3. Using flatMap with Strings
const phrases = ["Hello World", "Good Morning"];

// Split each phrase into words and flatten into a single array
const words = phrases.flatMap(phrase => phrase.split(" "));

console.log(words); 
// Output: ["Hello", "World", "Good", "Morning"]

// Explanation: 
// map + split would give [["Hello","World"],["Good","Morning"]] 
// flatMap flattens to ["Hello", "World", "Good", "Morning"]

console.log("*****************************************************************");
// 4. Filtering + Mapping in One Step
const number = [1, 2, 3, 4, 5, 6];

// Use flatMap to only double even numbers, remove odd ones
const doubledEven = number.flatMap(num => num % 2 === 0 ? [num * 2] : []);

console.log(doubledEven); // Output: [4, 8, 12]

// Explanation:
// - Odd numbers return [], effectively removing them
// - Even numbers are doubled

console.log("*****************************************************************");
// 5. Flattening Deeply Nested Arrays
const nestedDeep = [1, [2, [3, 4]], 5];

// flatMap flattens only 1 level
const flattenedOnce = nestedDeep.flatMap(x => x);

console.log(flattenedOnce); // Output: [1, 2, [3, 4], 5]

// Explanation:
// - Only the first level is flattened
// - Deeper arrays remain nested

console.log("*****************************************************************");

// 6. flatMap for Objects
const users = [
  { name: "Alice", hobbies: ["Reading", "Swimming"] },
  { name: "Bob", hobbies: ["Cycling"] },
  { name: "Charlie", hobbies: [] }
];

// Extract all hobbies into a single array
const allHobbies = users.flatMap(user => user.hobbies);

console.log(allHobbies); 
// Output: ["Reading", "Swimming", "Cycling"]

// Explanation:
// - flatMap is perfect for extracting nested arrays from objects

console.log("*****************************************************************");
// 7. Combining Mapping and Conditional Logic
const wordss = ["sun", "moon", "star"];

// Convert to letters and filter out vowels in one step
const lettersWithoutVowels = wordss.flatMap(word => {
    return word.split("").filter(letter => !"aeiou".includes(letter));
});

console.log(lettersWithoutVowels); 
// Output: ["s","n","m","n","s","t","r"]

// Explanation:
// - Each word split into letters
// - Vowels removed using filter
// - flatMap flattens all letters into a single array


console.log("*****************************************************************");
// 8. Real-World Example: Shopping Cart
const cart = [
    { item: "Shirt", sizes: ["S", "M", "L"] },
    { item: "Pants", sizes: ["M", "L"] },
    { item: "Shoes", sizes: ["42", "43"] }
];

// Generate all item-size combinations
const allOptions = cart.flatMap(product => {
    return product.sizes.map(size => `${product.item} - ${size}`);
});

console.log(allOptions);
/* Output:
[
  'Shirt - S', 'Shirt - M', 'Shirt - L',
  'Pants - M', 'Pants - L',
  'Shoes - 42', 'Shoes - 43'
]
*/

// Explanation:
// - flatMap allows mapping each product into multiple combinations and flattening into one array


/*
Key Takeaways

flatMap() = map() + flat(1)

Useful when you need mapping + flattening in one step

Can filter inside mapping by returning []

Works on arrays of numbers, strings, objects, or nested arrays
*/