// JavaScript map() — 10 Best Examples with Full Explanation

// Example 1: Double all numbers in an array
const numbers = [1, 2, 3, 4] // original array
const doubled = numbers.map(n => n * 2); // multiply each element by 2
console.log(doubled); // output: [2, 4, 6, 8]
// ✅ Tip: Map is transformation. Remember: "map = make new array"

// Example 2: Extract names from objects


const users = [
    {id: 1, name: "Khan"},
    {id: 2, name: "Meer"}
];
const names = users.map(u => u.name); // Extract only 'name' field
console.log(names); // output: ["Khan", "Meer"]
// ✅ Real project: Display user names in UI

// Example 3: Add VAT to prices
const products = [
    {name: "Laptop", price: 1000},
    {name: "Mouse", price: 20}
];
const priceWithVAT = products.map(p => ({...p, price: p.price * 1.15}))
console.log(priceWithVAT);
// Output: [{name: "Laptop", price: 1150}, {name: "Mouse", price: 23}]
// ✅ Spread operator keeps original objects intact

// Example 4: Convert strings to uppercase
const words = ["hello", "world"];
const uppercased = words.map(w => w.toUpperCase());
console.log(uppercased); // output: ["HELLO", "WORLD"]
// ✅ Tip: Use for standardizing text

// Example 5: Create array of indexes
const arr = ["a", "b", "c"];
const indexes = arr.map((_, idx) => idx); // '_' ignores value
console.log(indexes); // output: [0, 1, 2]
// ✅ Memory trick: map(_, index) → get position

// Example 6: Add unique IDs to array of objects
const items = [{name: "pen"}, {name: "pencil"}];
const itemsWithId = items.map((item, i) => ({...item, id: i + 1}));
console.log(itemsWithId);
// Output: [{name: "pen", id: 1}, {name: "pencil", id: 2}]
// ✅ Common in React keys

// Example 7: Conditional mapping
const nums = [1, 2, 3, 4];
const squaredIfEven = nums.map(n => n % 2 === 0 ? n ** 2 : n);
console.log(squaredIfEven); // output: [1, 4, 3, 16]
// ✅ Tip: map can handle conditions inline

// Example 8: Extract first letters
const cities = ["London", "Paris", "Toyota"];
const initials = cities.map(c => c[0]);
console.log(initials); // output: ["L", "P", "T"]
// ✅ Memory trick: map transforms elements to something new

// Example 9: Map with function reference
function double(x) {return x * 2;}
const nums2 = [5, 10, 15];
const result = nums2.map(double); // Pass function directly
console.log(result); // Output: [10,20,30]
// ✅ Tip: Can reuse function across multiple arrays

// Example 10: Map nested arrays
const nested = [[1,2], [3, 4]];
const flattenedTwice = nested.map(inner => inner.map(x => x * 10));
console.log(flattenedTwice); // output: [[10,20],[30,40]]
 // ✅ Real project: Nested data transformation


 console.log("*******************************************");
 









