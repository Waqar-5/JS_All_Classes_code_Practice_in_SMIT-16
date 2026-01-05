
// 🧑‍🍳 1. Call Stack = Chef (one dish at a time)

// ➡️ Synchronous, blocking, LIFO
// 🧑‍🍳 Example 1: Chef cooks step by step
function chop(){
    console.log("🔪 Chopping vegetables");
}

function cook(){
    console.log("🍳 Cooking food");
    chop(); // must finish first
}

cook();


/* 

Behind the scenes

Call Stack:
cook()
  └─ chop()


📌 Chef cannot cook two dishes at once.
 */


console.log("***************************************");
// 🧑‍🍳 Example 2: Chef gets overloaded (blocking)
// console.log("👨‍🍳 Chef starts work");

// for (let i = 0; i < 3_000_000_000; i++) {
//   // heavy cooking
// }

// console.log("✅ Chef finished");
// 📌 Restaurant (UI) freezes
// 📌 Event loop can’t help
// 📌 Chef (call stack) is busy

console.log("***********************************************");
// 🧑‍🍳 Example 3: LIFO nature
function dessert(){
    console.log("🍰 Dessert ready");
}

function dinner(){
    console.log("🍝 Dinner ready");
    dessert();
}

dinner();

/*
Execution:

dinner → dessert → done


📌 Last called, first finished
*/

console.log("**************************************");


// 🏭 2. Web API = Kitchen Machines (background work)

// ➡️ Browser power, NOT JS
// 🏭 Example 1: Timer machine
console.log("🧾 Order received");

setTimeout(() => {
  console.log("⏲️ Oven finished");
}, 2000);

console.log("🍽️ Serving water");


// 📌 Oven works independently
// 📌 JS doesn’t wait


console.log("***************************************************");
// 🏭 Example 2: Network machine (fetch)
console.log("📦 Order placed");

fetch("/menu")
  .then(() => console.log("📡 Menu received"));

console.log("🪑 Customer seated");

// 📌 Network handled by Web API
// 📌 JS keeps moving

console.log("**********************************************************");
// 🏭 Example 3: Event machine

// button.addEventListener("click", () => {
//   console.log("🖱️ Button clicked");
// });

// 📌 Browser listens
// 📌 JS reacts only when event arrives



console.log("*********************************************");
// 📬 3. Queues = Order Waiting Area (FIFO)
// 📬 Example 1: Task queue (timers)
setTimeout(() => console.log("🍕 Order 1"), 0);
setTimeout(() => console.log("🍔 Order 2"), 0);


// 📌 FIFO → Order 1 then Order 2

console.log("*************************************************");
// 📬 Example 2: Multiple callbacks waiting
setTimeout(() => console.log("🥤 Drink"), 1000);
setTimeout(() => console.log("🍟 Fries"), 1000);


// 📌 Both wait
// 📌 Executed one by one

console.log("**********************************************");
// 📬 Example 3: DOM events queued
// button.addEventListener("click", () => {
//   console.log("👆 Click handled");
// });
// 📌 Clicks wait in queue
// 📌 Executed when stack is fre


console.log("*********************************************");
// 👀 4. Event Loop = Manager (traffic controller)
// 👀 Example 1: Manager checking stack
console.log("👀 Manager checking");

setTimeout(() => console.log("🧹 Cleanup"), 0);

console.log("👨‍🍳 Chef busy");
// 📌 Manager waits
// 📌 Only moves task when stack is empty

console.log("**************************************");

// 👀 Example 2: Manager prefers VIPs

setTimeout(()=> console.log("🕒 Normal order"), 0);

Promise.resolve().then(() => 
  console.log("⚡ VIP order")
)
// Output:

// ⚡ VIP order
// 🕒 Normal order

console.log("****************************************************");
// 👀 Example 3: Continuous monitoring
setTimeout(() => console.log("🍲 Soup"), 0);
console.log("👀 Event loop always watching");

// 📌 Event loop never sleeps

console.log("******************************************************");
// ⚡ 5. Promises = VIP Orders (Microtasks)
// ⚡ Example 1: VIP beats timer
setTimeout(() => console.log("🕒 Regular"), 0);

Promise.resolve().then(() =>
    console.log("⚡ VIP")
)
// 📌 VIP always first


console.log("***********************************");
// ⚡ Example 2: Async/await = VIP lane
async function order() {
    console.log("📥 Order start");
    await Promise.resolve();
    console.log("⚡ Order done");
}

order();
console.log("📃 Bill printed!");

// Output:

// 📥 Order start
// 🧾 Bill printed
// ⚡ Order done

console.log("***************************************");
// ⚡ Example 3: Multiple VIPs

Promise.resolve().then(() => console.log("⚡ VIP 1"));
Promise.resolve().then(() => console.log("⚡ VIP 2"));

// 📌 All VIPs finish before any normal task

console.log("****************************************************");
// 🕒 6. setTimeout = Normal Orders (Macrotasks)
// 🕒 Example 1: Delayed serving
setTimeout(() => {
    console.log("🍛 Food served");
}, 3000);

// 📌 Minimum delay, not exact time

console.log("***************************************");
// 🕒 Example 2: Zero delay ≠ immediate
setTimeout(() => console.log("🕒 Later"), 0);

console.log("⚡ Now");
// 📌 Still waits for stack + microtasks

console.log("*****************************************************");
// 🕒 Example 3: Timers compete
setTimeout(() => console.log("🍕 Pizza"), 0);
setTimeout(() => console.log("🍔 Burger"), 0);
// 📌 FIFO execution

console.log("************************************************");
// 🛑 7. Starvation = VIPs blocking everyone
// 🛑 Example 1: Infinite VIPs
function vipLoop() {
  Promise.resolve().then(vipLoop);
}

vipLoop();

setTimeout(() => console.log("🕒 Never runs"), 0);
// 📌 Task queue starves
// 📌 Browser may hang

console.log("****************************************");


// 🛑 Example 2: UI freeze by promises
Promise.resolve().then(function repeat() {
  Promise.resolve().then(repeat);
});


// 📌 Microtask queue never clears

// 🛑 Example 3: Fix starvation (yield control)
function safeLoop() {
  setTimeout(safeLoop, 0); // yield to event loop
}

safeLoop();


// 📌 Allows other tasks to run
// 📌 Healthy system

// 🧠 FINAL MEMORY SNAPSHOT (FOREVER)
// Chef (Call Stack) → one dish
// Machines (Web API) → background
// VIP Orders (Promises) → first
// Normal Orders (setTimeout) → later
// Manager (Event Loop) → traffic control
// Waiting Area (Queues) → FIFO
// Too many VIPs → STARVATION