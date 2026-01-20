/*
Closure in JavaScript

Definition: A closure is a function that remembers and can access variables from its outer (enclosing) function even after that function has finished execution.

Closures are used for data encapsulation, private variables, function factories, memoization, and many other patterns.
*/


// 1️⃣ Basic Closure Example
function outerFunction() {             // outerFunction creates a new scope
    let outerVariable = "Hello";       // variable in the outer function

    function innerFunction() {         // innerFunction is defined inside outerFunction
        console.log(outerVariable);    // innerFunction accesses outerVariable (closure)
    }

    return innerFunction;              // outerFunction returns innerFunction without calling it
}

const myClosure = outerFunction();     // outerFunction runs, returns innerFunction
myClosure();                            // logs "Hello" — innerFunction still remembers outerVariable


// Key Points:

// innerFunction remembers outerVariable even after outerFunction finishes.

// This is closure in action.

console.log("****************************************************");

// 2️⃣ Closure with Parameters

function greet(message) {              // outer function with a parameter
    return function(name) {            // inner function creates closure over 'message'
        console.log(`${message}, ${name}!`); // uses outer function's variable 'message'
    };
}

const sayHello = greet("Hello");       // greet("Hello") returns inner function
sayHello("Alice");                      // logs "Hello, Alice!"
sayHello("Bob");                        // logs "Hello, Bob!"

// Key Points:

// The outer variable message is preserved for multiple calls of sayHello.

// Great for customizable functions.




console.log("****************************************************");

// 3️⃣ Closure for Private Variables
function counter() {                    // outer function
    let count = 0;                      // private variable, not accessible outside

    return function() {                 // inner function closes over 'count'
        count++;                        // modify the private variable
        return count;                   // return updated value
    };
}

const myCounter = counter();            // returns inner function
console.log(myCounter());               // 1
console.log(myCounter());               // 2
console.log(myCounter());               // 3
// ✅ Key Points:

// count is private, only accessible via the returned inner function.

// Classic use of closure for data encapsulation.

console.log("**************************************************");


// 4️⃣ Function Factory using Closure

function multiplier(factor) {           // outer function
    return function(number) {           // inner function closes over 'factor'
        return number * factor;         // uses outer variable
    };
}

const double = multiplier(2);           // creates a function that doubles
const triple = multiplier(3);           // creates a function that triples

console.log(double(5));                  // 10
console.log(triple(5));                  // 15
// Key Points:

// multiplier creates multiple specialized functions with different closures.

// Great for dynamic function creation.


console.log("*************************************************");
// 5️⃣ Closure in Loops (Common Mistake & Fix)

// Problem without closure:
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i);                // all will log 4 (loop finished)
    }, 1000);
}

// Fix using closure:
for (var i = 1; i <= 3; i++) {
    (function(j) {                      // IIFE creates a new closure with 'j'
        setTimeout(function() {
            console.log(j);             // logs 1, 2, 3 correctly
        }, 1000);
    })(i);                               // pass current i to IIFE
}


// Key Points:

// Each iteration needs a separate closure to preserve the loop variable.

// Modern solution: let instead of var automatically fixes it (block-scoped).

console.log("********************************************************");
// 6️⃣ Closure for Memoization (Optimization)

function memoize(fn) {                   // outer function takes a function
    const cache = {};                    // cache object to store results

    return function(x) {                 // inner function closes over 'cache'
        if (cache[x] !== undefined) {   // check if result already cached
            console.log("Fetching from cache");
            return cache[x];            // return cached result
        }
        console.log("Calculating result");
        const result = fn(x);           // call original function
        cache[x] = result;              // store result in cache
        return result;
    };
}

const square = memoize(x => x * x);     // memoized square function

console.log(square(5));                 // Calculating result -> 25
console.log(square(5));                 // Fetching from cache -> 25

// ✅ Key Points:

// Closure keeps the cache alive between function calls.

// Very useful in performance optimization.

console.log("*******************************************************");


// 7️⃣ Advanced Example: Module Pattern using Closures
const userModule = (function() {        // IIFE returns object with methods
    let name = "Waqar";                 // private variable
    let age = 25;                       // private variable

    return {
        getName: function() {           // public method
            return name;                // can access private variable
        },
        setName: function(newName) {    // public method
            name = newName;             // modify private variable
        },
        getAge: function() {
            return age;                 // access private variable
        }
    };
})();

console.log(userModule.getName());      // "Waqar"
userModule.setName("Ali");
console.log(userModule.getName());      // "Ali"
console.log(userModule.age);            // undefined (private)

// ✅ Key Points:

// Closures simulate private and public members (like in classes).

// Foundation of module design patterns in JavaScript.

console.log("*********************************************");

// 8️⃣ Recursive Closures Example
function makeAdder(x) {                  // outer function
    return function add(y) {             // inner function closes over x
        if (y <= 0) return 0;           // base case
        return x + add(y - 1);          // recursive call uses closure
    };
}

const add5 = makeAdder(5);               // creates a closure with x = 5
console.log(add5(3));                    // 5 + 5 + 5 = 15


// Key Points:

// Closure allows the inner function to remember outer variables across recursive calls.