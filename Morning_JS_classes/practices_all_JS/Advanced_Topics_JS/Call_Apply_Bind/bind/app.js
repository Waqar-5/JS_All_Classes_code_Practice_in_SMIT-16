// JavaScript bind() – Full Examples and Explanations

// Key idea:

// bind() creates a new function with this permanently set to the object you provide.

// Unlike call() or apply(), it does not call the function immediately.

// Arguments can also be pre-set (partial application).

// Memory Trick:
// bind() = Lock the chef in a kitchen + optionally give some ingredients now, other ingredients later


// Example 1: Basic usage of bind()
// Define an object
const person = {
    name: "Waqar"
};

// Function that uses 'this'
function greet(greeting, punctuation){
    console.log(greeting + ", " + this.name + punctuation);
}

// Bind the function to 'person'
const greetPerson = greet.bind(person); 
// greetPerson is a new function where 'this' = person

// Call the new function
greetPerson("Hello", "!"); 
// Output: Hello, Waqar!

// Explanation:
// greet → original function
// bind(person) → creates a new function with 'this' permanently set to 'person'
// greetPerson("Hello", "!") → call the new function with arguments


console.log("**********************************************************");
// Example 2: Partial application with bind()
const person2 = { name: "Ali" };

// Bind function and pre-set first argument
const sayHi = greet.bind(person2, "Hi"); 

// Now only need to pass the second argument
sayHi("!!!"); 
// Output: Hi, Ali!!!

// Explanation:
// bind(person2, "Hi") → permanently sets 'this' = person2 and greeting = "Hi"
// sayHi("!!!") → only pass punctuation, greeting already set

console.log("***********************************************************");
// Example 3: Using bind() in objects

const calculator = {
    factor: 3,
    multiply: function(a, b) {
        return (a * b) * this.factor;
    }
};

// Create a new function with 'this' fixed
const multiplyBy3 = calculator.multiply.bind(calculator);

// Call the new function
console.log(multiplyBy3(4, 5)); 
// Output: 60 → 4*5*3

// Explanation:
// bind(calculator) → 'this' inside multiply is permanently calculator
// multiplyBy3(a,b) → same function but always uses calculator.factor

console.log("********************************************************");

// Example 4: Borrowing methods with bind()
// Array-like object
const arrayLike = {
    0: "x",
    1: "y",
    2: "z",
    length: 3
};

// Bind Array.prototype.join to arrayLike
const joinArrayLike = Array.prototype.join.bind(arrayLike, "-");

// Call the bound function
console.log(joinArrayLike()); 
// Output: x-y-z

// Explanation:
// bind(arrayLike, "-") → permanently sets 'this' = arrayLike and separator = "-"
// joinArrayLike() → calls the bound function without arguments

console.log("********************************************");


// Example 5: Using bind() in event handlers


const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

const user = {
    name: "Waqar",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Without bind, 'this' inside event refers to the button
button.addEventListener("click", user.greet); 
// Output: Hello, undefined

// With bind, 'this' is fixed to user
button.addEventListener("click", user.greet.bind(user)); 
// Output when clicked: Hello, Waqar

// Explanation:
// bind(user) → locks 'this' to user even when function called by event

console.log("*************************************************");
// Example 6: Multiple objects using bind()

function introduce(age, city) {
    console.log("My name is " + this.name + ", I am " + age + " years old, from " + city);
}

const person1 = { name: "Waqar" };
const person2s = { name: "Ali" };

// Create bound functions
const introWaqar = introduce.bind(person1, 25); // pre-set age
const introAli = introduce.bind(person2s, 30);   // pre-set age

// Call bound functions with remaining argument
introWaqar("Karachi"); 
// Output: My name is Waqar, I am 25 years old, from Karachi
introAli("Lahore");   
// Output: My name is Ali, I am 30 years old, from Lahore

// Explanation:
// bind(personX, 25) → locks 'this' = personX and age = 25
// remaining arguments can be passed later

console.log("***************************************************");
// Example 7: Using bind() to fix this for timers

const hero = {
    name: "Flash",
    speed: 100,
    run: function() {
        console.log(this.name + " runs at " + this.speed + " km/h");
    }
};

// Normally, setTimeout loses 'this'
setTimeout(hero.run, 1000); 
// Output: undefined runs at undefined km/h

// Fix 'this' with bind
setTimeout(hero.run.bind(hero), 1000); 
// Output: Flash runs at 100 km/h

// Explanation:
// bind(hero) → ensures 'this' inside run always refers to hero
