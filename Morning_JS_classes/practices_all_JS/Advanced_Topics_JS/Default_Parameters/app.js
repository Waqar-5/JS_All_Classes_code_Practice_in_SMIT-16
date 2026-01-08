// Default Parameters in JavaScript - Advanced Examples

// 1️⃣ Basic Default Parameter

function greet(name = "Guest") { // define function greet with default parameter name as "Guest"
    console.log(`Hello, ${name}`);  // log greeting message with the name
}

greet("Ali") // 
// call greet with "Alice" -> Output: Hello, Ali!
greet();        // call greet without argument -> uses default -> Output: Hello, Guest!


console.log("*******************************************");
function createUser(name = "Anonymous", age = 18) { // name defaults to "Anonymous", age defaults to 18
    console.log(`Name: ${name}, Age: ${age}`); // log user details
}

createUser("Khan", 25); // Output: Name: Khan, Age: 25
createUser("Meer"); // Output: Name: Meer, Age: 18
createUser(); // Output: Name: Anonymous, Age: 18


console.log("********************************************");

// 3️⃣ Default Parameter with Expressions
function multiply(a, b = a * 2) { // b defaults to a*2 if undefined
    return a * b // return multiplication result
}

console.log(multiply(5, 3)); // Output: 15 - Both provided
console.log(multiply(5)); // Output: 50 -> b = a * 2 = 10


console.log("****************************************************");


// 4️⃣ Function as Default Value
function getRandomNumber() { // function that returns random integer
    return Math.floor(Math.random() * 100) // returns integer between 0-99
}


function showNumber(num = getRandomNumber()) { // default num = random number if undefined
    console.log(num); // print number
}

showNumber(); // Output: random number
showNumber(50); // Output: 50


console.log("****************************************************************");
// 5️⃣ Using Default Parameter with Other Parameter
function add(a, b = a + 10) { // b defaults to a + 10
    return a + b; // return sum
}

console.log(add(5, 5)); // Output: 10 -> b provided
console.log(add(5));    // Output: 20 -> b = 5+10



console.log("********************************************************************");
// 6️⃣ Default Parameters with Objects
function printUser({name = "Guest", age = 0} = {}) { // object destructuring with defaults
    console.log(`Name: ${name}, Age: ${age}`); // print object details    
}

printUser({name: "Ali", age: 25}); // Output: Name: Ali, Age: 25
printUser({name: "Sara"});         // Output: Name: Sara, Age: 0
printUser();                        // Output: Name: Guest, Age: 0

console.log("***********************************************************");


// 7️⃣ Default Parameters with Arrays
function sumArray(arr = [1, 2, 3]) { // default array
    return arr.reduce((a, b) => a + b, 0); // sum array
}

console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray());             // Output: 6



console.log("**********************************************************");
// 8️⃣ Combining Default with Rest Parameters
function combine(a = "Hello", ...words) { // a has default, rest collected in  words array
    return [a, ...words].join(" "); // join all words
}



console.log(combine("Hi", "there", "friend")); // Output: Hi there friend
console.log(combine());                         // Output: Hello


console.log("****************************************************************");
// 9️⃣ Using Functions as Dependent Defaults
function generateGreeting(name = "Guest", message= `Hello ${name}`) { // message depends on name
    console.log(message); // print message    
}

generateGreeting("Ali"); // Output: Hello Ali
generateGreeting();      // Output: Hello Gues

console.log("************************************************************************");


// 🔟 Default Parameter with Conditional Expression
function greetUser(name = "Guest", time = new Date().getHours() < 12 ? "Morning" : "Evening"){ // Default time based on system
    console.log(`Good ${time}, ${name}`); // print greeting  
} 


greetUser("Sara"); // Output depends on current hour
greetUser();       // uses defaults

console.log("*************************************************");



// 11️⃣ Complex Real-World Example: API Function
function fetchData(endpoint = "/api/users", method = "GET", headers = {"Content-Type": "application/json"}){
    console.log(`Fetching from ${endpoint} using ${method}`);
    console.log("Headers:", headers);
}

fetchData("/api/posts", "POST"); // custom endpoint & method
fetchData();                     // uses all defaults



console.log("********************************************************************");
// 12️⃣ Using Default Parameters in Arrow Functions
const greetArrow = (name = "Guest") => console.log(`Hello, ${name}`); // default parameter in arrow function
greetArrow("Ali"); // Output: Hello, Ali
greetArrow();      // Output: Hello, Guest

console.log("********************************************");


// 13️⃣ Default Parameter with Expression from Variable
let defaultMultiplier = 5;
function multiplyByDefault(a, b = a * defaultMultiplier){
    return a * b; // return multiplication
}
console.log(multiplyByDefault(2));      // 2 * (2*5) = 20
console.log(multiplyByDefault(2, 3));   // 2 * 3 = 6


console.log("*********************************************************");



// 14️⃣ Avoid Overwriting Default with Falsy Values
function showScore(score = 100) {
  console.log(score); // default used only if undefined
}

showScore(0);      // Output: 0 (default not used)
showScore(null);   // Output: null
showScore(undefined); // Output: 100



console.log("****************************************************************");

// 15️⃣ Real-World Example: User Registration
function registerUser(username = "Anonymous", role = "guest", active = true) {
  console.log(`User: ${username}, Role: ${role}, Active: ${active}`);
}
