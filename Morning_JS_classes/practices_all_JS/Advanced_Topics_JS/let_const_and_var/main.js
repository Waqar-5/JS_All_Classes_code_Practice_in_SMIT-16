// 1. VAR — Function Scope & Hoisting
console.log("VAR Example: Hoisting and Scope");

// Hoisting: variable declared with var is lifted to top and initialized as undefined
console.log(a); // undefined (hoisted)
var a = 10;
console.log(a); // 10 (value assigned in code phase)

// Function scope example
function varScopeDemo() {
    var x = 5;
    if(true) {
        var x = 20; // same function-scoped variable
        console.log("Inside if block:", x); // 20
    }
    console.log("Outside if block:", x); // 20 → var ignores block scope
}

varScopeDemo();




console.log("*******************************************");


// 2. LET — Block Scope & TDZ
console.log("\nLET Example: Block Scope & TDZ");

// TDZ (Temporal Dead Zone)
{
    // console.log(b); // ❌ ReferenceError (cannot access before declaration)
    let b = 15; 
    console.log("Inside block:", b); // 15
}
// console.log(b); // ❌ ReferenceError → block scope

// Reassignment is allowed
let c = 30;
c = 40;
console.log("Reassigned c:", c);


console.log("**********************************************");
// 3. CONST — Block Scope & Immutability

console.log("\nCONST Example: Block Scope & Object Mutation");

const pi = 3.14;
// pi = 3.1415; // ❌ Error → cannot reassign

// Object properties can mutate
const user = { name: "Ali", age: 25 };
user.age = 26; // ✅ Allowed
console.log("Updated user object:", user);

// user = {}; // ❌ Error → cannot reassign reference

console.log("****************************************");
// 4. Hoisting & TDZ Combined

console.log("\nHoisting & TDZ Example");

console.log(hoistVar); // undefined → var hoisted
var hoistVar = "I am var";

try {
    console.log(hoistLet); // ❌ ReferenceError → TDZ
} catch(e) { console.log(e.message); }
let hoistLet = "I am let";

try {
    console.log(hoistConst); // ❌ ReferenceError → TDZ
} catch(e) { console.log(e.message); }
const hoistConst = "I am const";

console.log("*************************************");
// 5. Scope & Function Execution Context

console.log("\nFunction Execution Context Example");

var globalVar = "I am global var";
let globalLet = "I am global let";

function greet(name) {
    var localVar = "I am local var";
    let localLet = "I am local let";
    const localConst = "I am local const";

    console.log(`Hello ${name}`);
    console.log(localVar, localLet, localConst);

    if(true){
        let blockLet = "I am block-scoped inside if";
        console.log(blockLet); // accessible inside block
    }
    // console.log(blockLet); // ❌ Error → outside block not accessible
}

greet("Waqar");

console.log("**********************************");
// 6. Practical Loop Example (var vs let)
console.log("\nLoop Behavior Example");

for(var i=0; i<3; i++){
    setTimeout(()=> console.log("var i =", i), 100);
}
// Output after 100ms → 3, 3, 3

for(let j=0; j<3; j++){
    setTimeout(()=> console.log("let j =", j), 100);
}
// Output after 100ms → 0, 1, 2



console.log("**********************************************");

// 7. Memory Phase vs Code Phase (Behind the Scenes)
console.log("\nMemory & Code Phase Example");

// Memory Phase
var memVar;      // initialized undefined
let memLet;      // exists in TDZ
const memConst = 50; // must initialize immediately

function memoryDemo() {
    var localVar;
    let localLet;
    const localConst = 100;
    console.log(localVar, localLet, localConst);
}

memoryDemo();
