// Call Stack, Web API, Task Queue (Macro), Event Loop, LIFO, FIFO, setTimeout

// 🧠 Imagine a RESTAURANT KITCHEN

console.log("🍽️ Customer enters restaurant");

// setTimeout is NOT part of JS
// Browser sends this to WEB API (timer section)
setTimeout(function prepareFood(){
      console.log("🍔 Food prepared");

}, 2000)

console.log("🧾 Order taken");

// 1️⃣ Global Execution Context created
// 2️⃣ Call Stack starts executing code


// Call Stack Flow (LIFO)
// |-----------------------------|
// | console.log("Customer")     |
// | console.log("Order taken")  |
// | GEC                         |
// |-----------------------------|

// Web API
// setTimeout → goes to Web API (Timer)

// After 2 seconds
// prepareFood → Task Queue (FIFO)

// Event Loop
// ✔ Call Stack empty?
// ✔ Microtasks? (none)
// ✔ Task Queue? → YES
// → Move prepareFood to Call Stack

// Output
// 🍽️ Customer enters restaurant
// 🧾 Order taken
// 🍔 Food prepared


// 📌 Memory Hook

// “Kitchen (Web API) works in background, waiter (Event Loop) serves when table (Call Stack) is free.”

console.log("***********************************************");


// ⚡ EXAMPLE 2 — “Online Shopping Checkout
// 👉 Covers:
// Microtask Queue, Promise, fetch, async, Priority, Event Loop

console.log("🛒 User clicks checkout");

// fetch is NOT JS → goes to Web API (Network)
fetch("/payment")
.then(function paymentDone(){
    console.log("💳 Payment successful");
});

setTimeout(function showAd(){
  console.log("📢 Showing discount ad");
}, 0);

console.log("📦 Order processing");



/*
🔍 Behind the Scenes
Step 1 — Sync code runs first
🛒 User clicks checkout
📦 Order processing

Step 2 — Web API
fetch → Web API (Network)
setTimeout → Web API (Timer)

Step 3 — Queues
Promise resolved → Microtask Queue
setTimeout callback → Task Queue

Step 4 — Event Loop Priority
Microtask Queue runs FIRST
Task Queue runs AFTER

Output
🛒 User clicks checkout
📦 Order processing
💳 Payment successful
📢 Showing discount ad


📌 Interview Gold Line

“Promises always beat timers.”

📌 Memory Hook

“Payment first, ads later.”
*/


console.log("********************************************");
// 🧠 EXAMPLE 3 — “Starvation & Call Stack Blocking”

// 👉 Covers:
// Starvation, Nested Promises, Microtask Queue domination, Call Stack waiting for none

console.log("🚦 Traffic signal ON");
function TrafficJam(){
    // Promise resolves → Microtask Queue
    Promise.resolve().then(TrafficJam);
}

// start infinite microtasks
TrafficJam();

setTimeout(function greenLight(){
    console.log("🟢 Green light");
}, 0)




/*
🔍 Behind the Scenes
What happens?
trafficJam()
→ Promise resolves
→ goes to Microtask Queue
→ runs again
→ creates ANOTHER microtask
→ infinite loop

Queues Visual
Microtask Queue:
[ promise → promise → promise → infinite ]

Task Queue:
[ greenLight ] ❌ NEVER EXECUTES

Result
🛑 Green light NEVER prints

This is called 👉 STARVATION

📌 Definition (Interview Perfect)

“Starvation occurs when continuous microtasks prevent macro tasks from executing.”

📌 Fix

setTimeout(trafficJam, 0); // yield control


📌 Memory Hook

“Promises eating everything → others starve."
*/

console.log("****************************************************");
// 🧩 BONUS MINI EXAMPLE — Call Stack Blocking (UI Freeze)

// console.log("⏳ Loading...");
// for (let i = 0; i < 5_000_000_000; i++) {
  // Heavy sync work
// }

// console.log("✅ Done");


// 🧠 Why UI freezes?

// Call Stack is busy
// Event Loop can't help
// Web API can't interrupt


// 📌 Rule

// “JavaScript is single-threaded. Call stack waits for none.”


/*
🧾 ALL TERMS COVERED (Checklist ✅)
Concept	Covered
JS Engine	✅
V8	✅
Call Stack	✅
LIFO	✅
Web APIs	✅
setTimeout	✅
fetch	✅
Task Queue (Macro)	✅
Microtask Queue	✅
FIFO	✅
Event Loop	✅
Priority	✅
Promises	✅
async behavior	✅
Starvation	✅
Blocking	✅
🧠 FINAL MEMORY FRAME (FOREVER REMEMBER)

🧑‍🍳 Call Stack = Chef (one dish at a time)
🏭 Web API = Kitchen machines
📬 Queues = Order waiting area
👀 Event Loop = Manager
⚡ Promises = VIP orders
🕒 setTimeout = normal orders
🛑 Starvation = VIPs blocking everyone

*/
