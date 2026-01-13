// 🧠 JavaScript sort() — Complete Developer Guide (with real code)

// 1️⃣ Default String Sorting

let names = ["Waqar", "Ali", "Zain", "Sana", "Ayesha"];

// Sort() arranges strings alphabetically (A-Z)
names.sort();

console.log(names);
// Output: [ 'Ayesha', 'Ali', 'Sana', 'Waqar', 'Zain' ]
// 👉 JavaScript sorts strings based on dictionary order

console.log("***********************************************************");

// 2️⃣ Reverse Alphabetical Order
let againNames = ["Waqar", "Ali", "Zain", "Ahmed"];

// First sort A -> Z then reverse Z -> A
againNames.sort().reverse();

console.log(againNames);
// Output: [ 'Zain', 'Waqar', 'Ali', 'Ahmed' ]

console.log("**********************************************************");
// 3️⃣ Sorting Numbers (WRONG WAY ❌

let numbers = [10, 5, 100, 20];

// JavaScript treats numbers as text by default

numbers.sort();

console.log(numbers);
// Output: [ 10, 100, 20, 5 ]
// ❌ 100 comes before 20 and 5 because "1" is smaller than "2" and "5"

// 👉 It compares "10", "100", "20" like words.

console.log("**********************************************************");

// 4️⃣ Sorting Numbers (CORRECT WAY ✅)

let againNumbers = [10, 5, 100, 20];

// a - b => Ascending Order
againNumbers.sort((a, b) => a - b);

console.log(againNumbers);
// Output: [ 5, 10, 20, 100 ]

// 🧠 Rule:

// If result is negative → a comes first

// If result is positive → b comes first

console.log("********************************************************");

// 5️⃣ Descending Number Sorting
let onecAgainNumbers = [10, 5, 100, 20];

// b - a → descending order
onecAgainNumbers.sort((a, b) => b - a);

console.log(onecAgainNumbers);
// [100, 20, 10, 5]

console.log("***********************************************************");



// 6️⃣ Sorting by String Length

let words = ["Apple", "Banana", "Kiwi", "Mango"];

// Sort by length of each word
words.sort((a, b) => a.length - b.length);

console.log(words);
// ["Kiwi", "Apple", "Mango", "Banana"]
// 👉 Shortest word first

console.log("***********************************************************");

// 7️⃣ Reverse by Length

let againWords = ["Apple", "Banana", "Kiwi", "Mango"];

// Longest word first
againWords.sort((a, b) => b.length - a.length);

console.log(words);
// ["Banana", "Mango", "Apple", "Kiwi"]


console.log("***********************************************************");

// 8️⃣ Sorting Objects by Number Property
let students = [
  { name: "Waqar", age: 22 },
  { name: "Ali", age: 18 },
  { name: "Zain", age: 25 }
];

// Sort by age (youngest → oldest)
students.sort((a, b) => a.age - b.age);

console.log(students);
// Output:

// [
//   { name: "Ali", age: 18 },
//   { name: "Waqar", age: 22 },
//   { name: "Zain", age: 25 }
// ]

console.log("***********************************************************");

// 9️⃣ Sorting Objects by Name

let againStudents = [
  { name: "Waqar", age: 22 },
  { name: "Ali", age: 18 },
  { name: "Zain", age: 25 }
];

// localeCompare is best for text sorting
againStudents.sort((a, b) => a.name.localeCompare(b.name));

console.log(againStudents);


console.log("******************************************************");

// 🔟 Case-Insensitive Sorting


let againWord = ["apple", "Banana", "mango", "Orange"];

againWord.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(againWord);
// ["apple", "Banana", "mango", "Orange"]


console.log("******************************************************");

// 1️⃣1️⃣ Sorting Dates
let dates = [
  new Date("2024-05-01"),
  new Date("2023-01-01"),
  new Date("2025-03-10")
];

// Convert dates to numbers and compare
dates.sort((a, b) => a - b);

console.log(dates);


// Output:// [
//   2023-01-01T00:00:00.000Z,
//   2024-05-01T00:00:00.000Z,
//   2025-03-10T00:00:00.000Z
// ]

console.log("******************************************************");

// 1️⃣2️⃣ Sorting Tasks (Your App Use Case)
let tasks = [
  "Buy Milk",
  "Attend Class",
  "Do Homework",
  "Call Mom"
];

// Sort alphabetically
tasks.sort();

console.log(tasks);
// Output: [ 'Attend Class', 'Buy Milk', 'Call Mom', 'Do Homework' ]

// 👉 Perfect for to-do list app

console.log("******************************************************");

// 1️⃣3️⃣ Sort Tasks by Text Length
let task = [
  "Buy Milk",
  "Attend Class",
  "Do Homework",
  "Call Mom"
];

task.sort((a, b) => a.length - b.length);

console.log(task);


/*

🔥 Final Developer Rule
You want to sort	Use
Text	array.sort()
Numbers	(a,b) => a - b
Reverse numbers	(a,b) => b - a
Objects	obj.property
Strings in objects	localeCompare()
Length	a.length - b.length
🧠 In One Line:

sort() rearranges data — and the compare function tells HOW to rearrange it.
*/
