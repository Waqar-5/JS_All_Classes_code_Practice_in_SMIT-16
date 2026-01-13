// JavaScript includes() Method Examples
// =====================
// 1. Basic Array Includes
// =====================
const fruits = ["apple", "banana", "mango", "grapes"];
console.log(fruits.includes("banana")); // true, "banana" exists in the array
console.log(fruits.includes("cherry")); // false, "cherry" is not in the array


// =====================
// 2. Array Includes with fromIndex
// =====================
console.log(fruits.includes("banana", 2)); // false
// starts checking from index 2 ("mango"), so it does not find "banana"


// =====================
// 3. Array Includes with Numbers
// =====================
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.includes(30)); // true
console.log(numbers.includes(60)); // false


// =====================
// 4. Array Includes with Negative Values
// =====================
const negatives = [-1, -2, -3, -4];
console.log(negatives.includes(-3)); // true
console.log(negatives.includes(-5)); // false


// =====================
// 5. Array Includes with NaN
// =====================
const mixed = [NaN, 0, 1, 2];
console.log(mixed.includes(NaN)); // true
// Important: indexOf(NaN) would fail because NaN !== NaN
// includes() correctly detects NaN


// =====================
// 6. String Includes - Basic
// =====================
const sentence = "Hello, world!";
console.log(sentence.includes("Hello")); // true
console.log(sentence.includes("world")); // true
console.log(sentence.includes("hi"));    // false


// =====================
// 7. String Includes - Case Sensitivity
// =====================
console.log(sentence.includes("hello")); // false, case-sensitive
console.log(sentence.includes("Hello")); // true


// =====================
// 8. String Includes with Position
// =====================
console.log(sentence.includes("world", 8)); // true, starts searching from index 8
console.log(sentence.includes("Hello", 1)); // false, starts searching from index 1


// =====================
// 9. Using Includes in Conditional Statements
// =====================
const shoppingList = ["milk", "bread", "eggs"];
if (shoppingList.includes("eggs")) {
    console.log("You need eggs!"); // prints because "eggs" exists
} else {
    console.log("No eggs needed.");
}


// =====================
// 10. Includes in Loops
// =====================
const colors = ["red", "green", "blue"];
const checkColors = ["blue", "yellow"];
checkColors.forEach(color => {
    if (colors.includes(color)) {
        console.log(`${color} exists in colors`);
    } else {
        console.log(`${color} does NOT exist in colors`);
    }
});
// Output: 
// "blue exists in colors"
// "yellow does NOT exist in colors"


// =====================
// 11. Includes with Objects (tricky!)
// =====================
const users = [{name: "Alice"}, {name: "Bob"}];
// console.log(users.includes({name: "Alice"})); // false
// Why? Because objects are compared by reference, not by value

const alice = users[0];
console.log(users.includes(alice)); // true, same reference


// =====================
// 12. Includes with Boolean Values
// =====================
const flags = [true, false];
console.log(flags.includes(true));  // true
console.log(flags.includes(false)); // true
console.log(flags.includes(null));  // false


// =====================
// 13. Using Includes with Filtering
// =====================
const allFruits = ["apple", "banana", "mango", "grapes", "pear"];
const wantedFruits = ["banana", "pear", "kiwi"];
const foundFruits = wantedFruits.filter(fruit => allFruits.includes(fruit));
console.log(foundFruits); // ["banana", "pear"]


// =====================
// 14. Includes in Real-world Example
// =====================
const userRoles = ["admin", "editor", "subscriber"];
function canEdit(role) {
    if (userRoles.includes(role)) {
        console.log(`${role} can edit content`);
    } else {
        console.log(`${role} cannot edit content`);
    }
}
canEdit("editor");   // "editor can edit content"
canEdit("guest");    // "guest cannot edit content"


// =====================
// 15. Advanced: Checking Multiple Substrings in a String
// =====================
const message = "Welcome to the JavaScript world!";
const keywords = ["JavaScript", "Python", "Ruby"];
keywords.forEach(word => {
    if (message.includes(word)) {
        console.log(`Found ${word} in message`);
    }
});
// Output: "Found JavaScript in message"


/*
Key Takeaways

includes() returns true/false.

Works for arrays and strings, including numbers, booleans, and even NaN.

Case-sensitive for strings.

Objects are checked by reference, not by value.

Very useful in conditions, loops, filtering, and real-world checks.

Can simplify your code instead of using indexOf() !== -1.
*/