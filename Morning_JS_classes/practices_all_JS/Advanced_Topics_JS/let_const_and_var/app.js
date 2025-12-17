// 📌 JavaScript Variable Declarations & Execution — Code Examples

// ========================
// 1. VAR: Function Scope & Hoisting
// ========================

console.log("VAR Example: Hoisting with var");
console.log(a); //undefined -> var is hoisted and initialized with undefined

var a = 10;
console.log(a); // 10 -> value assigned in code phase


function varScopeExample(){
    var x = 5;
    if(true){
        var x = 20; // same function-scope variable is updated
        console.log("Inside if block x =", x); // 20
    }

    console.log("Outside if block x=", x); // 20 -> var ignores block scope
}

varScopeExample();



// ========================
// 2. LET: Block Scope & TDZ
// ========================

console.log("*********************************");
console.log("\nLET Example: Block Scope & TDZ");

{
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
        // console.log(b);  // ❌ ReferenceError → TDZ (cannot access before declaration)
let b = 15;
console.log("Inside Block =" + b); // 15 -> accessible inside block
}

// console.log(b);       // ❌ ReferenceError → block scope prevents access outside

let c = 30;
c = 40 // Re-assignment allowed
console.log("Re-assigned c =", c); // 40



// ========================
// 3. CONST: Block Scope & Immutability
// ========================

console.log("*********************************");
console.log("\nCONST Example: Block Scope & Immutability");
console.log("\nCONST Example: Block Scope & Object Mutation");

const pi = 3.14;
// pi = 3.1415; // ❌ TypeError → cannot re-assign a const variable
// pi = 3.1415;      // ❌ Error → cannot reassign const primitive

const user = {name: "Ali", age:25};
user.age = 26; // ✅ Allowed → mutating object property
console.log("Mutated user object =", user);

// user = { name: "Waqar" }; // ❌ Error → cannot reassign const reference



// ========================
// 4. GEC & Function Execution Context Example
// ========================

console.log("*********************************");
console.log("\nGEC & Function Execution Context")

var globalVar = "I am global"; // part of GEC

let globalLet = "I am global let"; // part of GEC but not in window object

function greet(name){
    var localVar = "I am local var" // local to function
    let localLet = "I am local let" // block-scoped in function
    const localConst = "I am local const" // block-scoped in function

    console.log("Hello " + name);
    console.log(localVar, localLet, localConst);
 
    if(true){
        let blockLet = "I am block-scoped inside if"; // block-scoped
        console.log(blockLet);
    }

       // console.log(blockLet); // ❌ Error → blockLet not accessible outside if
}

greet("Ahmed");



// ========================
// 5. Hoisting & TDZ Combined Example
// ========================

console.log("\nHoisting & TDZ Combined Example");

// var hoistVar; // hoisted and initialized with undefined
// var hoistVar; // optional, JS automatically hoists
console.log(hoistVar); // undefined → hoisted var
var hoistVar = "Hoisted Var";

// console.log(hoistLet); // ❌ ReferenceError → TDZ
let hoistLet = "Hoisted Let";

// console.log(hoistConst); // ❌ ReferenceError → TDZ
const hoistConst = "Hoisted Const";



// ========================
// 6. Practical Example: var vs let vs const
// ========================

console.log("\nPractical Example: Loop Behavior");

for(var i = 0; i < 3; i++){
    setTimeout(()=> console.log("var i =", i), 100); // prints 3, 3, 3
}

// Output after 100ms → 3, 3, 3 (var is function-scoped, loop finished by the time callbacks run)

for (let j = 0; j < 3; j++){
    setTimeout(() => console.log("let j =", j), 100);
}

// Output after 100ms → 0, 1, 2 (let is block-scoped, preserves each iteration value)



// ========================
// 7. Memory & Code Phase Demonstration
// ========================

console.log("\nMemory & Code Phase Demonstration");

var memVar;  // memory phase → initialized undefined
let memLet;  // memory phase → exists in TDZ
const memConst = 50; // must assign immediately
function memoryExample() {
    var localVar;
    let localLet;
    const localConst = 100;
    console.log(localVar, localLet, localConst);
}

memoryExample();


















// ✅ Key Reminders from Code

// Var

// Function-scoped, hoisted → undefined, ignores block

// Example: for(var i...) → common interview trap

// Let

// Block-scoped, TDZ, can reassign

// Example: preserves value in loops (for(let j...))

// Const

// Block-scoped, cannot reassign, object properties mutable

// Hoisting

// Var → initialized as undefined

// Let/Const → TDZ

// Execution Context (GEC + Function EC)

// Memory phase → variables initialized / functions stored

// Code phase → values assigned, code runs

// Function calls → new execution context → deleted after execution

// Scope Tips

// Global, function, block → know exactly where each variable is accessible

// var → can pollute global window object