// Arrow Functions – Deep Dive with Best Coding Examples

// ===============================
// 1️⃣ Basic Arrow Functions
// ===============================

const add = (a, b) => a + b;
console.log(add(5, 3)); // 8
// ✅ Comment: Single-line function with implicit return


const greet = () => "Hello World";
console.log(greet()); // Hello World
// ✅ Comment: No parameters, implicit return

const square = x => x * x;
console.log(square(6)); // 36
// ✅ Comment: Single parameter, parentheses can be omitted




console.log("***********************************");
// ===============================
// 2️⃣ Arrow Functions with Multiple Statements
// ===============================

const multiplAndLog = (a, b) => {
    console.log(`Multiplying ${a} and ${b}`);
    return a * b    
};

console.log(multiplAndLog(4, 5)); // 20
// ✅ Comment: Multiple statements need curly braces and explicit return



console.log("**********************************");
// ===============================
// 3️⃣ Arrow Functions with Arrays (Logic Enhancement)
// ===============================

const numbers = [1, 2, 3, 4, 5];

// Map: Double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter: Only of all numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2,4]


// reduce: Sum of all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// ✅ Comment: Arrow functions are perfect for array logic


console.log("*****************************************");

// ===============================
// 4️⃣ Lexical 'this' Example (Interview Favorite)
// ===============================

// function Person(name){
//     this.name = name;
//     this.age = 0;

//     // Arrow function inside setInterval
//     setInterval(() => {
//         this.age++;
//         console.log(`${this.name} is ${this.age} years old`);     
//     }, 1000)
// }
// const p = new Person("Waqar");

// // ✅ Comment: 'this' refers to the Person object due to lexical binding





// ===============================
// 5️⃣ Rest Parameters & Arguments (Logic Enhancement)
// ===============================
const sumAll = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);

console.log(sumAll(1, 2, 3));// 6
console.log(sumAll(10, 20, 30, 40)); // 100


// ✅ Comment: Arrow functions do not have 'arguments', use rest parameters


// ===============================
// 6️⃣ Nested Arrow Functions (Advanced Logic)
// ===============================

const multiply = a => b => a * b;
console.log(multiply(5)(2)); // 10
// ✅ Comment: Currying pattern, arrow functions make it concise

// Interview Tip: You can use nested arrow functions for HOF (Higher-Order Functions)


console.log("**********************************************");
// ===============================
// 7️⃣ Arrow Functions in Object Methods (Tricky Part)
// ===============================

const personObj = {
    name: "Waqar",
    greet: function(){
        // Regular function can access 'this'
        console.log(`Hello, I am ${this.name}`);

        //Arrow function inside method: lexical 'this'
        const inner = () => {
            console.log(`Inside arrow, I am still ${this.name}`);
        }
        inner();
    }
}

personObj.greet();
// Output:
// Hello, I am Waqar
// Inside arrow, I am still Waqar
// ✅ Comment: Use arrow inside methods when you want to preserve 'this'



console.log("**************************************");


// ===============================
// 8️⃣ Interview Challenge Example: Array + Lexical 'this'
// ===============================
const team = {
    name: "Developers",
    numbers: ["Ali", "Sara", "Zaib"],
    showTeam: function(){
        this.numbers.forEach(number => {
            console.log(`${number} is in ${this.name} `);
        });
    }
}

team.showTeam();

// Output:
// Ali is in Developers
// Sara is in Developers
// Zain is in Developers
// ✅ Comment: Arrow function keeps 'this' pointing to the team object


// Implicit vs Explicit Return – small vs large functions

// Lexical this – crucial for callbacks, timers, array methods

// Rest Parameters – replacing arguments in arrow functions

// Array Methods – map, filter, reduce patterns

// Nested Functions & Currying – advanced logic, functional programming

// Object Method Tricks – combining regular + arrow function

// Interview-friendly Examples – timers, callbacks, array + object interactions