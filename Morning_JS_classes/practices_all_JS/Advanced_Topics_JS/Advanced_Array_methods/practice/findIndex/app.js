// 1. Basic usage with numbers

// Array of numbers
const numbers = [10, 20, 30, 40, 50];

// Find index of first number greater than 25
const index = numbers.findIndex(num => num > 25);

console.log(index); // Output: 2
// Explanation: numbers[2] is 30, the first number greater than 25





// 2. Using findIndex with strings
const fruits = ["apple", "banana", "cherry", "date"];

// Find index of the first fruit starting with 'c'
const fruitIndex = fruits.findIndex(fruit => fruit.startsWith("c"));

console.log(fruitIndex); // Output: 2
// Explanation: 'cherry' starts with 'c' and is at index 2


console.log("**********************************************************************");
// 3. Finding objects in an array


const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// Find index of user with id 2
const userIndex = users.findIndex(user => user.id === 2);

console.log(userIndex); // Output: 1
// Explanation: 'Bob' has id 2 and is at index 1


console.log("**********************************************************************");
// 4. When findIndex returns -1


const number = [5, 10, 15];

// Try to find index of number greater than 20
const indexes = numbers.findIndex(num => num > 20);

console.log(indexes); // Output: -1
// Explanation: No number is greater than 20, so it returns -1


console.log("**********************************************************************");
// 5. Using findIndex with conditions


const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
];

// Find index of first product costing less than 1000
const cheapProductIndex = products.findIndex(product => product.price < 1000);

console.log(cheapProductIndex); // Output: 1
// Explanation: 'Phone' costs 800, first product < 1000

console.log("**********************************************************************");
// 6. Using findIndex with strings and case-insensitive search
const names = ["Alice", "bob", "Charlie", "DAVID"];

// Find index of name 'david' (case-insensitive)
const indexs = names.findIndex(name => name.toLowerCase() === "david");

console.log(indexs); // Output: 3
// Explanation: 'DAVID' matches 'david' ignoring case


console.log("**********************************************************************");
// 7. Using findIndex with arrays inside objects



const teams = [
    { name: "Team A", members: ["Alice", "Bob"] },
    { name: "Team B", members: ["Charlie", "David"] },
    { name: "Team C", members: ["Eve", "Frank"] }
];

// Find index of team that has 'David' as a member
const teamIndex = teams.findIndex(team => team.members.includes("David"));

console.log(teamIndex); // Output: 1
// Explanation: 'Team B' contains 'David'

console.log("**********************************************************************");
// 8. Using findIndex with dynamic conditions
const tasks = [
    { task: "Wash dishes", completed: false },
    { task: "Do laundry", completed: false },
    { task: "Buy groceries", completed: true }
];

// Find index of first incomplete task
const nextTaskIndex = tasks.findIndex(task => !task.completed);

console.log(nextTaskIndex); // Output: 0
// Explanation: 'Wash dishes' is the first task not completed

console.log("**********************************************************************");

// 9. Using findIndex inside a function
function findFirstEven(arr) {
    return arr.findIndex(num => num % 2 === 0);
}

const arr = [1, 3, 7, 8, 10];
console.log(findFirstEven(arr)); // Output: 3
// Explanation: 8 is the first even number at index 3

console.log("***********************************************************");
// 10. Real-world example: Updating an item in an array

let product = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
];

// Suppose we want to update the price of product with id 2
const inde = products.findIndex(p => p.id === 2);

if (index !== -1) {
    product[inde].price = 850; // Update price
}

console.log(product);
// Output: [
//   { id: 1, name: 'Laptop', price: 1200 },
//   { id: 2, name: 'Phone', price: 850 }
// ]
// Explanation: findIndex gives index to update array item

// ✅ Key Takeaways:

// findIndex() returns the index of the first element satisfying the condition.

// If no element matches, it returns -1.

// Works with numbers, strings, objects, nested arrays, and complex conditions.

// Extremely useful in updating or deleting items in arrays.












// Key Takeaways:

// findIndex() returns the index of the first element satisfying the condition.

// If no element matches, it returns -1.

// Works with numbers, strings, objects, nested arrays, and complex conditions.

// Extremely useful in updating or deleting items in arrays.