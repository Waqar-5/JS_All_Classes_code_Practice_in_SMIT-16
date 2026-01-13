// 🧠 JavaScript splice() — Master Guide with Powerful Examples

// splice() is the array editor of JavaScript.
// It can remove, insert, replace, move, and update items — all in place.

// Syntax (Golden Rule)
// array.splice(startIndex, deleteCount, item1, item2, ...)


// Think of it as:

// “Go to startIndex, delete deleteCount items, then insert new items (if any).”


// 🧩 1. Remove one item
let users = ["Ali", "Ahmed", "Sami", "Hassan"];

// Remove "Ahmed"
users.splice(1, 1);

console.log(users); // ["Ali", "Sami", "Hassan"]

// Index 1 → Ahmed
// Delete 1 → remove Ahmed

console.log("**********************************************************");



// 🧩 2. Remove multiple items
let numbers = [10, 20, 30, 40, 50, 60];

// Remove 30, 40, 50
numbers.splice(2, 3);

console.log(numbers); // [10, 20, 60]



console.log("*************************************************");

// 🧩 3. Add elements without deleting

let colors = ["Red", "Blue"];

// Insert "Green" and "Yellow" between them
colors.splice(1, 0, "Green", "Yellow");

console.log(colors);
// ["Red", "Green", "Yellow", "Blue"]

// 0 delete → nothing removed
// New items inserted

console.log("**********************************************************");

// 🧩 4. Replace elements

let languages = ["Java", "C++", "Python", "Ruby"];

// Replace C++ and Python with JavaScript and TypeScript

languages.splice(1, 2, "JavaScript", "TypeScript");

console.log(languages);
// ["Java", "JavaScript", "TypeScript", "Ruby"]

console.log("**************************************************");

// 🧩 5. Update value at a specific index

let scores = [50, 60, 70, 80];

// Change 70 -> 75
scores.splice(2, 1, 75);

console.log(scores); // [50, 60, 75, 80]
// 1 item deleted at index 2, replaced with 75

console.log("****************************************************");

// 🧩 6. Insert at the beginning
let queue = ["B", "C"];

// Add "A" at start
queue.splice(0, 0, "A");

console.log(queue);
// ["A", "B", "C"]

console.log("****************************************************");


// 🧩 7. Insert at the end

let fruits = ["Apple", "Banana"];

// Insert at last position
fruits.splice(fruits.length, 0, "Mango");

console.log(fruits);
// ["Apple", "Banana", "Mango"]

console.log("*************************************************************");

// 🧩 8. Remove last item

let stack = [1, 2, 3, 4];

// Remove last element
stack.splice(stack.length - 1, 1);

console.log(stack);
// [1, 2, 3]

console.log("*************************************************************");

// 🧩 9. Remove first item
let line = ["First", "Second", "Third"];

line.splice(0, 1);

console.log(line);
// ["Second", "Third"]

console.log("*************************************************************");

// 🧩 10. Get removed items

let products = ["Phone", "Laptop", "Tablet"];

let removed = products.splice(1, 1);

console.log(removed); // ["Laptop"]
console.log(products); // ["Phone", "Tablet"]


console.log("*************************************************************");


// 🧩 11. Move item inside array

let items = ["A", "B", "C", "D"];

// Remove "B"
let remove = items.splice(1, 1);

// Insert it at index 3
items.splice(3, 0, remove[0]);

console.log(items);
// ["A", "C", "D", "B"]


console.log("********************************************************");
// 🧩 12. Clear part of an array


let data = [1, 2, 3, 4, 5, 6];

// Remove everything after index 2
data.splice(3);

console.log(data);
// [1, 2, 3]


console.log("*****************************************************");

// 🧩 13. Delete all elements


let list = ["x", "y", "z"];

list.splice(0, list.length);

console.log(list);
// []


console.log("**************************************************");


// 🧩 14. Use negative index
let marks = [10, 20, 30, 40, 50];

// Remove second last element
marks.splice(-2, 1);

console.log(marks);
// [10, 20, 30, 50]


console.log("**************************************************");

// 🧩 15. Insert before last item

let cars = ["BMW", "Audi", "Tesla"];

cars.splice(-1, 0, "Toyota");

console.log(cars);
// ["BMW", "Audi", "Toyota", "Tesla"]

/*
🔥 Final Mental Model

splice() = array surgery

You can:

Cut ✂️

Insert ➕

Replace 🔄

Move 🔁
All with one tool.
*/