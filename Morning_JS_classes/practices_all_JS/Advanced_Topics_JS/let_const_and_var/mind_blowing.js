// 1️⃣ Memory Phase vs Code Phase (Behind the Scenes)
console.log("Memory vs Code Phase Example");

// MEMORY PHASE: JS engine sets up space for variables/functions
// var variables → initialized as undefined
// let/const → exist in TDZ (cannot access yet)

var a;        // Memory phase: a = undefined
let b;        // Memory phase: b exists but TDZ
const c = 50; // Must initialize immediately

// CODE PHASE: JS executes code line by line and assigns values
a = 10;       // value assigned
b = 20;       // value assigned
console.log(a, b, c); // Output: 10 20 50

// Tip: Memory Phase → variables prepared; Code Phase → values assigned.




console.log("**********************************");
// 2️⃣ Practical Loop Example (var vs let)
console.log("Loop Example: var vs let");

// Using var → function-scoped → last value retained
for(var i=0; i<3; i++){
    setTimeout(()=> console.log("var i =", i), 100);
}
// Output after 100ms → 3, 3, 3

// Using let → block-scoped → keeps value per iteration
for(let j=0; j<3; j++){
    setTimeout(()=> console.log("let j =", j), 100);
}
// Output after 100ms → 0, 1, 2

// Tip: let preserves each loop iteration value; var does not.

console.log("*******************************************");

// 3️⃣ Scope & Function Execution Context
console.log("Function Execution Context Example");

var globalVar = "I am global var"; // Global scope
let globalLet = "I am global let"; // Global scope but not in window

function greet(name) {
    var localVar = "I am local var"; // Function scope
    let localLet = "I am local let"; // Block scope inside function
    const localConst = "I am local const"; // Block scope inside function

    console.log("Hello", name);       // Access function arguments
    console.log(localVar, localLet, localConst); // Access local variables

    if(true){
        let blockVar = "Block scoped var"; 
        console.log(blockVar);         // Accessible inside block
    }
    // console.log(blockVar); // ❌ Error → blockVar not accessible outside if
}

greet("Waqar"); // Function called → creates execution context → deleted after


// Tip: Each function call creates a new execution context.

console.log("*****************************************");

// 4️⃣ Hoisting & TDZ Combined
console.log("Hoisting & TDZ Example");

// var → hoisted + initialized as undefined
console.log(hoistVar); // undefined
var hoistVar = "I am var";

// let → hoisted but in TDZ → cannot access before declaration
try {
    console.log(hoistLet); // ❌ ReferenceError
} catch(e) { console.log(e.message); }
let hoistLet = "I am let";

// const → hoisted but in TDZ → cannot access before declaration
try {
    console.log(hoistConst); // ❌ ReferenceError
} catch(e) { console.log(e.message); }
const hoistConst = "I am const";
