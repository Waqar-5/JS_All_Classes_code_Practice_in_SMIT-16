// TOP 10 reduce() Examples Every Developer MUST Know

// TOP 10 reduce() Examples Every Developer MUST Know
const nums = [10, 20, 30, 40];
const sum = nums.reduce((acc, n) => acc + n, 0)
console.log(sum); // 100
// Accumulator starts from 0 and grows step-by-step


// 2️⃣ Product of Numbers (Mind Switch)
const numbers = [2, 3, 4];

const product = numbers.reduce((acc, n) => acc * n, 1);
// const product = numbers.reduce((acc, n) => acc * n, 0); // out put be 0
console.log(product); // 24
// Initial value changes logic (0 vs 1)


// 3️⃣ Find Maximum Value (Interview Favorite)
const maxNum = [24, 12, 99, 3];

const max = maxNum.reduce((acc, n) => {
    return n > acc ? n : acc;
}, maxNum[0]);

console.log(max); // 99
// reduce() can compare, not just add

// 4️⃣ Count Occurrences (Real World Analytics)
const fruits = ["apple", "banana", "apple", "orange"];

const count = fruits.reduce((acc, fruits) => {
    acc[fruits] = (acc[fruits] || 0) + 1;
    return acc
}, {});

console.log(count)
// Accumulator can be an object


// 5️⃣ Group Data (🔥 SUPER IMPORTANT)
const people = [
    {name: "Ali", city: "Karachi"},
    {name: "Sara", city: "Lahore"},
    {name: "Ahmed", city: "Karachi"}
];

const grouped = people.reduce((acc, p) => {
    acc[p.city] = acc[p.city] || [];
    acc[p.city].push(p)
    return acc;
}, {});

console.log(grouped);
// This is backend + frontend GOLD


// 6️⃣ Flatten Array (Pro Thinking)
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), [])

console.log(flat); // [1, 2, 3, 4, 5]
// reduce() can rebuild arrays


// 7️⃣ Remove Duplicates (Clean Logic)

const num = [1,2,2,3,4,4];

const unique = num.reduce((acc, n) => {
    if (!acc.includes(n)) acc.push(n);
    return acc;
}, [])
console.log(unique);

// reduce() can rebuild arrays


// 8️⃣ Shopping Cart Total (REAL PROJECT)
const cart = [
    {item: "Laptop", price:1000},
    {item: "Mouse", price: 50}
];

const total = cart.reduce((sum, p) => sum + p.price, 0)

console.log(total); // 1050
// Used in every e-commerce app

// 9️⃣ Convert Array → Object (Advanced)
const users = [
    {id: 1, name: "Ali"},
    {id: 2, name: "Sara"}
];

const userMap = users.reduce((acc, u) => {
    acc[u.id] = u;
    return acc;
}, {})
// Used for fast lookups

// 🔟 Chain + Reduce (🔥 BOSS LEVEL)
const orders = [
  { price: 100, paid: true },
  { price: 200, paid: false },
  { price: 300, paid: true }
];

const revenue = orders
  .filter(o => o.paid)
  .map(o => o.price)
  .reduce((sum, p) => sum + p, 0);

console.log(revenue); // 400
// Real-world data pipelines

// reduce()  → combine


/*
🏆 When to Use reduce()?

✅ Totals
✅ Analytics
✅ Grouping
✅ Counting
✅ Transforming data
✅ Interviews
✅ React state logic
*/