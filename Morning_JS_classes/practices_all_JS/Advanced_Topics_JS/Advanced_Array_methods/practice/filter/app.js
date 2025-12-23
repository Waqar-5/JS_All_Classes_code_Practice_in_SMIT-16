// 🚀 JavaScript filter() — 10 Best Examples with Full Explanation
// Example 1: Filter numbers greater than 10
const numbers = [5, 12, 8, 20];
const greaterThan10 = numbers.filter(n => n > 10);
console.log(greaterThan10); // output: [12, 20]
// ✅ Tip: filter = select elements that pass a test

// Example 2: Get active users from array of objects
const users = [
    {name: "Ali Khan", active: true},
    {name: "Ali ", active: false},
    {name: "Meer", active: true}
];
const activeUsers = users.filter(u => u.active);
console.log(activeUsers);
// Output: [{name:"Alice", active:true}, {name:"Charlie", active:true}]
// ✅ Real-world: Filtering dashboard users

// Example 3: Remove falsy values from array

const arr = [0, 1, false, 2, "", 3, null];
const truthyValues = arr.filter(Boolean);
console.log(truthyValues); // Output: [1,2,3]
// ✅ Tip: Boolean function is a neat trick to remove falsy values

// Example 4: Filter strings containing a substring
const fruits = ["apple", "banana", "mango", "pineapple"];
const aFruits = fruits.filter(f => f.includes("a"));
// const aFruits = fruits.filter(f => f.includes("p")); // output  ['apple', 'pineapple']
console.log(aFruits); // Output: ["apple","banana","mango","pineapple"]
// ✅ Memory: filter = “keep only matching”

// Example 5: Filter even numbers
const nums = [1, 2, 3, 4,5,6];
const evens = nums.filter(n => n % 2 === 0);
console.log(evens); // output: [2, 4 6]
// ✅ Common for numeric filtering

// Example 6: Filter objects based on multiple conditions
const orders = [
    {id:1, status:"pending", total:100},
    {id:2, status:"completed", total:200},
    {id:3, status:"completed", total:50}
];
const highCompleted = orders.filter(o => o.status === "completed" && o.total>100);
console.log(highCompleted); // Output: [{id:2, status:"completed", total:200}]
// ✅ Real-world: Filtering orders

// Example 7: Filter unique values using indexOf trick
const nums2 = [1, 2, 2,3,4,4,5];
const unique = nums2.filter((value, index, self) => self.indexOf(value) === index)
console.log(unique); // Output: [1,2,3,4,5]
// ✅ Memory: filter + indexOf → deduplicate array

// Example 8: Filter by type
const mixed = [1, "2", 3, "4", true, false];
const numbersOnly = mixed.filter(x => typeof x === "number");
console.log(numbersOnly); // output: [1, 3]
// ✅ Tip: Useful for sanitizing data

// Example 9: Filter based on index
const arr2 = [10, 20, 30, 40, 50];
const firstThree = arr2.filter((_, idx) => idx < 3);
console.log(firstThree);  // Output: [10,20,30]
// ✅ Memory: filter can use index

// Example 10: Filter nested arrays
const nested = [[1,2],[3,4],[5]];
const arraysWithTwo = nested.filter(inner => inner.length === 2);
console.log(arraysWithTwo); // Output: [[1,2],[3,4]]
// ✅ Real-world: Filtering API nested data
