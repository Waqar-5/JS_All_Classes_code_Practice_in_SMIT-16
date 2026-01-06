/*
About find()

find() is an array method in JavaScript.

It returns the first element in an array that satisfies a condition.

If no element matches, it returns undefined.

Syntax:

array.find((element, index, array) => {
    // return true or false
});
*/

// 1. Find first even number
const numbers = [1, 3, 7, 8, 10];
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // Output: 8
// ✅ Returns the first number that is even.


console.log("*******************************************************");
// 2. Find a string with specific length
const words = ["apple", "banana", "cat", "dog"];
const longWord = words.find(word => word.length > 5);
console.log(longWord); // output: "banana"
// ✅ Useful when filtering based on length.

console.log("**************************************************");
// 3. Find object by property
const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Go"},  
];

const user = users.find(u => u.id === 2);
console.log(user); //  Output: {id: 2, name: "Bob"}
// ✅ Very common in projects where you search for a user/item by ID.


console.log("***********************************************");

// 4. Find first number greater than a value
const scores = [10, 15, 20, 25];
const highScore = scores.find(score => score > 18);
console.log(highScore); // Output: 20
// ✅ Helps in threshold checks like passing scores, discounts, or limits.

console.log("*****************************************************");
// 5. Find first name starting with "C"

const names = ["Alice", "Bob", "Charlie", "David"];
const cName = names.find(name => name.startsWith("C"));
console.log(cName); // Output: "Charlie"
// ✅ Great for search bars or filtering user input.

console.log("*****************************************************");
// 6. Find first negative number
const array = [3, -5, 7, -2];
const negative = array.find(n => n < 0);
console.log(negative); // Output: -5
// ✅ Can be used in finance apps, error checking, etc.

console.log("*********************************************************");
// 7. Find first item in stock

const products = [
  {name: "Laptop", inStock: false},
  {name: "Phone", inStock: true},
  {name: "Tablet", inStock: true}
];

const available = products.find(p => p.inStock);
console.log(available); // Output: {name: "Phone", inStock: true}
// ✅ Useful in e-commerce projects to show available products.

console.log("*********************************************************");
// 8. Find first palindrome in array
const strings = ["abc", "racecar", "level", "hello"];
const palindrome = strings.find(str => str === str.split("").reverse().join(""));
console.log(palindrome); // Output: "racecar"


// ✅ Shows string manipulation with find. 
console.log("****************************************************");
// 9. Find first divisible by multiple numbers
const nums = [10, 12, 15, 20, 25];
const divisible = nums.find(n => n % 5 === 0 && n % 2 === 0);
console.log(divisible); // Output: 20


// ✅ Real-world use: finding numbers divisible by multiple conditions.

console.log("**********************************************************");


// 10. Find first adult from a list
const people = [
  {name: "Tom", age: 16},
  {name: "Jerry", age: 18},
  {name: "Mickey", age: 20}
];

const adult = people.find(person => person.age >= 18);
console.log(adult); // Output: {name: "Jerry", age: 18}
// ✅ Perfect for age verification, filtering candidates, or access control.



// ✅ Key Notes

// find() returns only the first matching element.

// Does not modify the original array.

// If nothing matches, it returns undefined.

// For multiple matches, use filter() instead.
