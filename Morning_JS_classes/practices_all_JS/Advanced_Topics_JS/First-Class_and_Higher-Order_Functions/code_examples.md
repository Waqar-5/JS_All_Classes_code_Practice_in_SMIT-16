# 💻 First-Class and Higher-Order Functions: Code Examples

> This document contains detailed and professional JavaScript examples of First-Class Functions and Higher-Order Functions.
> Each line has comments explaining each part to help you understand and apply later.

---

## 1. First-Class Function Examples

// 1. Assigning a function to a variable
const greet = function(name) { // anonymous function assigned to variable 'greet'
return `Hello, ${name}!`; // returns a greeting string
};
console.log(greet('Alice')); // Calls the function, prints: Hello, Alice!

// 2. Passing a function as an argument
function sayHello(fn) { // function accepts another function as parameter
console.log(fn('Bob')); // calls the passed function with 'Bob'
}
sayHello(greet); // Prints: Hello, Bob!

// 3. Returning a function from a function
function createMultiplier(x) { // function that returns another function
return function(y) { // inner function that uses outer parameter
return x * y; // multiplies x from outer function with y from inner function
};
}
const multiplyBy5 = createMultiplier(5); // multiplyBy5 is a function now
console.log(multiplyBy5(10)); // Prints: 50

// 4. Storing functions in arrays
const functionsArray = [
() => 'First', // arrow function
() => 'Second',
() => 'Third'
];
functionsArray.forEach(fn => console.log(fn())); // Prints: First, Second, Third

---

## 2. Higher-Order Function Examples

// 1. HOF that takes a function as argument
function repeatAction(action, times) { // action is a function, times is number
for(let i=0; i<times; i++) {
action(i); // call the passed function
}
}
repeatAction(index => console.log(`Action ${index+1}`), 3); // Prints Action 1, 2, 3

// 2. HOF that returns a function (closure)
function power(exponent) { // exponent is outer function parameter
return function(base) { // inner function uses outer parameter
return Math.pow(base, exponent); // returns base^exponent
};
}
const square = power(2); // square is a function now
const cube = power(3); // cube is a function now
console.log(square(5)); // 25
console.log(cube(2)); // 8

// 3. Using built-in HOF map
const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n * 2); // map takes function and applies to each element
console.log(doubled); // [2,4,6,8,10]

// 4. Using built-in HOF filter
const evenNumbers = numbers.filter(n => n % 2 === 0); // filter uses callback function
console.log(evenNumbers); // [2,4]

// 5. Using built-in HOF reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // reduce takes callback and initial value
console.log(sum); // 15

// 6. Composing functions with HOF
const compose = (f, g) => x => f(g(x)); // returns a function
const doubleValue = x => x * 2;
const increment = x => x + 1;
const doubleThenIncrement = compose(increment, doubleValue);
console.log(doubleThenIncrement(5)); // (5*2)+1 = 11

// 7. HOF with asynchronous function
function fetchData(callback) { // callback is function
setTimeout(() => {
const data = {name: 'Alice', age: 25};
callback(data); // call passed function after async operation
}, 1000);
}
fetchData(data => console.log(`Name: ${data.name}, Age: ${data.age}`)); // Prints after 1s

// 8. Currying using HOF
const multiply = a => b => a * b; // returns function from function
const multiplyBy3 = multiply(3); // function that multiplies by 3
console.log(multiplyBy3(10)); // 30

// 9. Debounce example using HOF
function debounce(fn, delay) { // HOF that returns a function
let timer;
return function(...args) {
clearTimeout(timer); // clear previous timer
timer = setTimeout(() => fn.apply(this, args), delay); // call function after delay
};
}
const log = debounce(msg => console.log(msg), 500);
log('Hello'); // waits 500ms before printing
