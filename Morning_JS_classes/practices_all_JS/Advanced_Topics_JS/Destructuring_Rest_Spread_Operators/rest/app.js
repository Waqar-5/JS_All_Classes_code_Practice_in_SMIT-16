// # 🔁 JavaScript Rest Operator – 10 Real-World Code Examples
// > Professional • Practical • Easy to Remember • Developer Focused

// This file contains **10 carefully chosen real-life code examples** of the **JavaScript Rest Operator (`...`)**.  
// If you understand and remember these examples, **you understand the Rest Operator completely**.

// ---

// ## 1️⃣ Flexible Sum Function (Most Classic Use)

// 📌 **Use Case:** When number of inputs is unknown

// js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

const result = sum(1, 2, 3, 4); // 10
console.log(result);


console.log("********************************************************");

// 2️⃣ Average Calculator (Exam Favorite)

// 📌 Use Case: Dynamic data processing
function average(...values){
    return values.reduce((a, b) => a + b, 0) // values.length
}

const result1 = average(10, 20, 30) // 60
console.log(result1);

// 🧠 Logic: Rest collects → array → math operation.

console.log("********************************************************");

// 3️⃣ Separating Primary Data from Rest (Array)

// 📌 Use Case: Leaderboards, featured items
const scores = [98, 95, 90, 88, 80];

const [topScore, ...otherScores] = scores;
console.log(topScore);     // 98
console.log(otherScores);  // [95, 90, 88, 80]
// 🧠 Pattern: First is special, rest are grouped.

console.log("****************************************************");
// 4️⃣ User Profile Sanitization (Very Real-World)

// 📌 Use Case: Removing sensitive data before sending to frontend


const user = {
    name: "Waqar",
    email: "waqar@gmail.com",
    password: "secret123",
    role: "Developer"
};

const {password, ...safeUser} = user;

console.log(user);
// 🧠 Memory Tip: Rest helps exclude unwanted properties.

console.log("**************************************************");
// 5️⃣ Logger Utility Function

// 📌 Use Case: Debugging & monitoring

function logger(type, ...message){
    console.log(`[${type}]`, message.join(" | "));

}
logger("ERROR", "File missing", "Line 22", "Access denied");
// 🧠 Think: One fixed parameter + rest for flexibility.

console.log("************************************************************");


// 6️⃣ React-Style Props Handling (Industry Level)

// 📌 Use Case: Passing remaining props

// function Button({label, ...props}){
//     return `<button ${Object.keys(props).join(" ")}>${label}</button>`;

// }
// const buttons = Button()
// console.log(buttons);
// 🧠 Real Usage: Rest is heavily used in React components.

console.log("**************************************");
// 7️⃣ API Response Cleanup

// 📌 Use Case: Removing metadata from API response

const response = {
    status: 200,
    message: "Success",
    data: [1, 2, 3] 
};

const {status, message, ...payload} = response;
console.log(response);
// 🧠 Concept: Keep only what you need.

console.log("************************************************");

// 8️⃣ Combining Fixed & Dynamic Parameters

// 📌 Use Case: Pricing systems, orders
function calculateBill(tax, ...price){
    const total = price.reduce((a, b) => a + b, 0);
    return total + tax
}

const result2 = calculateBill(50, 200, 300, 100) // 650
console.log(result2);

// 🧠 Rule Reminder: Rest must come last.

console.log("**************************************************");

// 9️⃣ Arrow Function with Rest (Modern JS)

// 📌 Use Case: Utility helpers
const multiply = (...nums) => nums.reduce((a, b) => a * b, 1)
// const multiply = (...nums) => nums.reduce((a, b) => a * b, 0)

console.log(multiply(2, 3, 4)) // 24;

// 🧠 Important: arguments doesn’t work here, rest does.

console.log("************************************************");

// 🔟 Excluding First Value (Data Processing)
// 📌 Use Case: Skipping headers, flags
function processData(firstValue, ...restData) {
  console.log("Ignored:", firstValue);
  console.log("Processed:", restData);
}

processData("HEADER", 10, 20, 30);
// 🧠 Mindset: One control value, rest is actual data.

