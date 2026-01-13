// The flat() method flattens nested arrays into a single array up to a specified depth. Default depth is 1.

// 1️⃣ Basic Usage (Default depth 1)

// Nested array
const numbers = [1, 2, [3, 4], 5];

// Use falt() to flatten 1 level
const flatNumbers = numbers.flat();

console.log(flatNumbers); // Output: [1, 2, 3, 4, 5]
// Explanation: Only one level of nesting is flattened

console.log("**********************************************************");
// 2️⃣ Flattening multiple levels (specifying depth)

const nestedNumbers = [1, [2, [3, [4, 5]]]];

// Flatten 1 level
console.log(nestedNumbers.flat(1));
// Output: [1, 2, [3, [4, 5]]]

// Flatten 2 levels
console.log(nestedNumbers.flat(2));
// Output: [1, 2, 3, [4, 5]]

// Flatten completely using Infinity
console.log(nestedNumbers.flat(Infinity));
// Output: [1, 2, 3, 4, 5]
// Explanation: Infinity flattens all levels of nested arrays


console.log("***************************************************************");

// 3️⃣ Flatten arrays with empty slots
const sparseArray = [1, 2, [3, 4]];

// Flatten 1 level
console.log(sparseArray.flat()); // 
// Explanation: flat() removes empty slots at the first level

console.log("*************************************************************");

// 4️⃣ Using flat() on arrays of strings
const words = ["Hello", ["World", "JS"], ["Flat", ["Method"]]];

// Flatten 1 level
console.log(words.flat());
// Output: ["Hello", "World", "JS", "Flat", ["Method"]]

// Flatten all levels
console.log(words.flat(Infinity));
// Output: ["Hello", "World", "JS", "Flat", "Method"]

console.log("***********************************************************");
// 5️⃣ Combining flat() with map() (flatMap)

const numbersToDouble = [1, 2, 3, 4];

// Double each number and flatten result
const doubled = numbersToDouble.flatMap(num => [num, num * 2]);

console.log(doubled);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]
// Explanation: flatMap maps each element and then flattens the result by 1 level

console.log("***********************************************************");
// 6️⃣ Flatten arrays with objects
const data = [
    { name: "Alice", skills: ["JS", "HTML"] },
    { name: "Bob", skills: ["Python", "CSS"] }
];

// Extract and flatten all skills
const allSkills = data.map(person => person.skills).flat();

console.log(allSkills);
// Output: ["JS", "HTML", "Python", "CSS"]

console.log("***********************************************************");

// 7️⃣ Flattening arrays dynamically (unknown depth)
function flattenArray(arr) {
    return arr.flat(Infinity);
}

const deepArray = [1, [2, [3, [4, [5]]]]];

console.log(flattenArray(deepArray));
// Output: [1, 2, 3, 4, 5]
// Explanation: Useful when you don’t know how deeply nested the array is


console.log("************************************************************");
// 8️⃣ Real-life Example: Flattening nested shopping cart items

const cart = [
    { id: 1, items: ["apple", "banana"] },
    { id: 2, items: ["orange", ["mango", "pineapple"]] },
];

// Flatten all items in the cart
const allCartItems = cart.map(c => c.items).flat(Infinity);

console.log(allCartItems);
// Output: ["apple", "banana", "orange", "mango", "pineapple"]


/*
Key Points to Remember About flat()

Default depth is 1.

flat(Infinity) can completely flatten deeply nested arrays.

Works with arrays of any type: numbers, strings, objects.

Removes holes in arrays at the flattened level.

Combine with map() using flatMap() for transformation + flattening.
*/