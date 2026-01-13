// ================================================
// ARRAY.FROM() METHOD - COMPREHENSIVE EXAMPLES
// ================================================

// Array.from() is used to create a new array from:
// 1. An array-like object (e.g., arguments, NodeList)
// 2. An iterable (e.g., strings, Sets, Maps)
// 3. It can also apply a mapping function while creating the array

// ----------------------------
// 1. Basic Usage with Strings
// ----------------------------
console.log("----- Example 1: String to Array -----");

const str = "Hello";
const strArray = Array.from(str); 
console.log(strArray);
// Output: ['H', 'e', 'l', 'l', 'o']
// Explanation: Each character of the string becomes an element in the array

// ----------------------------
// 2. Converting a Set to an Array
// ----------------------------
console.log("\n----- Example 2: Set to Array -----");

const mySet = new Set([1, 2, 3, 4]);
const setArray = Array.from(mySet);
console.log(setArray);
// Output: [1, 2, 3, 4]
// Explanation: Array.from can convert iterables like Sets into arrays

// ----------------------------
// 3. Converting NodeList to Array (for DOM elements)
// ----------------------------
// Note: Run this in browser environment
console.log("\n----- Example 3: NodeList to Array -----");

// Suppose you have multiple <p> elements in HTML
// const paragraphs = document.querySelectorAll("p");
// const paragraphsArray = Array.from(paragraphs);
// console.log(paragraphsArray);
// Explanation: NodeList is not a true array. Array.from converts it to array.

// ----------------------------
// 4. Using Array.from with a Map Function
// ----------------------------
console.log("\n----- Example 4: Map Function while Creating Array -----");

const numbers = [1, 2, 3, 4];
const squaredNumbers = Array.from(numbers, x => x * x);
console.log(squaredNumbers);
// Output: [1, 4, 9, 16]
// Explanation: The second argument of Array.from is a mapping function applied to each element

// ----------------------------
// 5. Creating an Array from Arguments Object
// ----------------------------
console.log("\n----- Example 5: Arguments to Array -----");

function sumAll() {
    const argsArray = Array.from(arguments); // Convert arguments to array
    console.log(argsArray);
    return argsArray.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4));
// Output: [1, 2, 3, 4]
// Sum: 10
// Explanation: The `arguments` object is array-like but not an array. Array.from converts it to a real array

// ----------------------------
// 6. Creating an Array of Fixed Size
// ----------------------------
console.log("\n----- Example 6: Create Array of Specific Size -----");

const fiveZeros = Array.from({ length: 5 }, () => 0);
console.log(fiveZeros);
// Output: [0, 0, 0, 0, 0]
// Explanation: We can create an array of length N and fill it with values using the map function

// ----------------------------
// 7. Using Array.from with Index
// ----------------------------
console.log("\n----- Example 7: Access Index in Mapping Function -----");

const indexArray = Array.from({ length: 5 }, (_, index) => index + 1);
console.log(indexArray);
// Output: [1, 2, 3, 4, 5]
// Explanation: The second argument of Array.from receives current value and index as parameters

// ----------------------------
// 8. Converting a String of Numbers into Actual Numbers
// ----------------------------
console.log("\n----- Example 8: Convert String Numbers to Numbers -----");

const numStr = "12345";
const numArray = Array.from(numStr, num => Number(num));
console.log(numArray);
// Output: [1, 2, 3, 4, 5]
// Explanation: Array.from can apply a mapping function to transform data while creating array

// ----------------------------
// 9. Flattening an Array-Like Object
// ----------------------------
console.log("\n----- Example 9: Flatten Array-Like Object -----");

const arrayLikeObj = {0: 'a', 1: 'b', 2: 'c', length: 3};
const realArray = Array.from(arrayLikeObj);
console.log(realArray);
// Output: ['a', 'b', 'c']
// Explanation: Array.from converts array-like objects with length property into arrays

// ----------------------------
// 10. Removing Duplicates Using Set + Array.from
// ----------------------------
console.log("\n----- Example 10: Remove Duplicates -----");

const numsWithDuplicates = [1, 2, 3, 2, 1, 4];
const uniqueNums = Array.from(new Set(numsWithDuplicates));
console.log(uniqueNums);
// Output: [1, 2, 3, 4]
// Explanation: Using Set to remove duplicates, then Array.from to convert back to array

// ----------------------------
// 11. Real-World Example: Generate Random Numbers
// ----------------------------
console.log("\n----- Example 11: Generate Random Numbers -----");

const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log(randomNumbers);
// Output: [random numbers between 0-99]
// Explanation: Create array of length 5 and fill with random numbers

// ----------------------------
// 12. Real-World Example: Convert CSV String to Array
// ----------------------------
console.log("\n----- Example 12: CSV to Array -----");

const csv = "apple,banana,cherry";
const csvArray = Array.from(csv.split(','));
console.log(csvArray);
// Output: ['apple', 'banana', 'cherry']
// Explanation: Convert CSV string to array using split and Array.from for uniformity

// ================================================
// END OF ARRAY.FROM() EXAMPLES
// ================================================

