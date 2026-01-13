// 1️⃣ Basic Usage
// Example 1: Check if any number is greater than 10
const numbers = [3, 9, 12, 5];

const hasLargeNumber = numbers.some(num => num > 10);
// .some() checks each element with the callback
// stops at first element where num > 10
console.log(hasLargeNumber); // true

console.log("***************************************************");

// Example 2: Check if any number is even
const nums = [1, 3, 5, 7, 8];

const hasEven = nums.some(num => num % 2 === 0);
// checks if num % 2 === 0 (even number)
// returns true because 8 is even
console.log(hasEven); // true


console.log("***************************************************");

// 2️⃣ With Strings
// Example 3: Check if any string contains the letter 'a'
const fruits = ["apple", "kiwi", "banana", "orange"];

const containsA = fruits.some(fruit => fruit.includes("a"));
// .includes("a") checks if string has 'a'
// returns true if at least one element passes
console.log(containsA); // true

// Example 4: Check if any fruit starts with 'z'
const startsWithZ = fruits.some(fruit => fruit.startsWith("z"));
console.log(startsWithZ); // false
console.log("***************************************************");


// 3️⃣ With Objects

// Example 5: Array of users
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 }
];

// Check if any user is an adult (18+)
const hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult); // true, Bob is 21

// Example 6: Check if any user name is 'David'
const hasDavid = users.some(user => user.name === "David");
console.log(hasDavid); // false


console.log("***************************************************");


// 4️⃣ Advanced Usage: Multiple Conditions
// Example 7: Check if any number is even and greater than 10
const nums2 = [3, 7, 12, 14];

const result = nums2.some(num => num % 2 === 0 && num > 10);
// true because 12 and 14 are even and > 10
console.log(result); // true

// Example 8: Check if any fruit has length > 6 or contains 'e'
const fruits2 = ["kiwi", "apple", "banana"];

const complexCheck = fruits2.some(fruit => fruit.length > 6 || fruit.includes("e"));
// banana.length > 6 OR apple.includes("e") is true
console.log(complexCheck); // true

console.log("********************************************************");
// 5️⃣ Nested Arrays
// Example 9: Nested arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Check if any inner array has number > 8
const hasNumberGreaterThan8 = matrix.some(innerArray => innerArray.some(num => num > 8));
console.log(hasNumberGreaterThan8); // true

console.log("***************************************************************");
// 6️⃣ Using Index and Array Parameters


// Example 10: Using index and array parameters
const letters = ["a", "b", "c", "d"];

const resultWithIndex = letters.some((letter, index, arr) => {
  console.log(`Checking letter: ${letter} at index: ${index} in [${arr}]`);
  return letter === "c";
});

console.log(resultWithIndex); // true

console.log("***************************************************************");

// 7️⃣ Practical Real-World Example

// Example 11: Check if a user is allowed access
const permissions = [
  { role: "admin" },
  { role: "editor" },
  { role: "viewer" }
];

function canAccessDashboard(userRoles) {
  return userRoles.some(user => user.role === "admin" || user.role === "editor");
}

console.log(canAccessDashboard(permissions)); // true


// Example 12: Check if a shopping cart has any out-of-stock items
const cart = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true }
];

const hasOutOfStock = cart.some(item => !item.inStock);
console.log(hasOutOfStock); // true, Mouse is out of stock


console.log("******************************************************************");
// 8️⃣ Difference Between some() and every()
// some() → true if **at least one element passes**
// every() → true if **all elements pass**

const nums3 = [2, 4, 6, 7];

console.log(nums3.some(n => n % 2 === 0)); // true, 2 is even
console.log(nums3.every(n => n % 2 === 0)); // false, 7 is odd


/*
✅ Key Takeaways

.some() → checks if at least one element passes.

Stops checking after first true → faster than looping manually.

Returns boolean (true / false).

Works with numbers, strings, objects, nested arrays, etc.

Perfect for validations, permissions, filters, and early exits.
*/