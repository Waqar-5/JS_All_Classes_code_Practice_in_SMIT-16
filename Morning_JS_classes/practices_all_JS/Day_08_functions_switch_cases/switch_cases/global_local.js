// Global Variables

// Definition: Variables declared outside of any function or block are called global variables.

// Scope: Accessible anywhere in your script (inside functions, loops, or other blocks).

// Risk: Can be accidentally overwritten by functions or blocks, so use with care.

// Example 1: Simple Global Variable


// Global variable declaration
var siteName = "MyWebsite"; // Accessible anywhere

// Named function accessing global variable
function showSite() {
    console.log("Welcome to " + siteName); // Uses global variable
}

showSite(); // Output: Welcome to MyWebsite
console.log(siteName); // Output: MyWebsite



console.log("**************************************************");


// Example 2: Global variable modified inside function

var score = 0; // Global variable

function increaseScore() {
    score += 10; // Modifies global variable
    console.log("Score inside function: " + score);
}

increaseScore(); // Output: Score inside function: 10
console.log("Score outside function: " + score); // Output: Score outside function: 10


console.log("***************************************************");

// Example 3: Risk of overwriting global variable
var user = "Alice";

function changeUser() {
    var user = "Bob"; // Local variable shadows global
    console.log("Inside function: " + user); // Output: Bob
}

changeUser();
console.log("Outside function: " + user); // Output: Alice (global unchanged)



console.log("********************************************");
// 2️⃣ Local Variables

// Definition: Variables declared inside a function or block using var, let, or const are local variables.

// Scope: Only accessible within the block or function they are declared in.

// Safe: Doesn’t affect global variables.

// Example 1: Simple Local Variable


function greetUser() {
    let greeting = "Hello!"; // Local variable
    console.log(greeting); // Accessible inside function
}

greetUser(); // Output: Hello!
console.log(typeof greeting); // Output: undefined (cannot access outside)

console.log("**************************************************");

// Example 2: Local variable in block scope
{
    const name = "Ali"; // Block-scoped local variable
    console.log(name); // Output: Ali
}
// console.log(name); // ❌ ReferenceError: name is not defined


console.log("***********************************************");
// Example 3: Local vs Global variable
var language = "JavaScript"; // Global variable

function showLanguage() {
    var language = "Python"; // Local variable
    console.log("Inside function: " + language); // Output: Python
}

showLanguage();
console.log("Outside function: " + language); // Output: JavaScript


/*
Key Points / Professional Notes

Global Variables

Declared outside functions/blocks.

Accessible everywhere.

Risky if overused; may cause name collisions.

Local Variables

Declared inside functions/blocks.

Only accessible inside their scope.

Preferred for modular, safe code.

Best Practices

Minimize global variables; use local variables inside functions.

Use let or const for local variables to respect block scope.

Always declare variables explicitly to avoid creating accidental globals.
*/

