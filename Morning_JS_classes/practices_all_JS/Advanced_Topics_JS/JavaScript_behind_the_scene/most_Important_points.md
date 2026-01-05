# ⚙️ JavaScript Behind the Scenes

## Execution Order • What Runs First • Priority Cycle (BEST NOTES)

> **High‑yield exam + interview notes**
> Focused on **WHAT RUNS FIRST when BIG / REAL-WORLD code executes**
> Easy to revise • Easy to remember • Hard to forget

---

## 🧠 WHY THIS TOPIC IS CRITICAL

Most JavaScript bugs, MCQs, and interview traps come from **wrong assumptions about execution order**.

If you master this file, you can:

* Predict output correctly ✅
* Avoid async bugs ✅
* Answer MCQs confidently ✅
* Explain JS like a senior dev ✅

---

## 🔑 GOLDEN RULES (MEMORIZE THESE FIRST)

```text
1️⃣ JavaScript executes SYNCHRONOUS code first
2️⃣ Call Stack is the ONLY place where code runs
3️⃣ Web APIs do async work (timers, fetch, DOM)
4️⃣ Event Loop works ONLY when Call Stack is empty
5️⃣ Microtask Queue has HIGHER priority than Task Queue
6️⃣ Promises & async/await → Microtask Queue
7️⃣ setTimeout / setInterval / DOM events → Task Queue
8️⃣ ALL Microtasks finish before ANY Task runs
9️⃣ Too many microtasks can cause STARVATION
```

---

## 🥇 WHAT RUNS FIRST? (EXAM GOLD ORDER)

```text
1. Global Synchronous Code
2. Microtask Queue (Promises, async/await)
3. Task / Macrotask Queue (setTimeout, DOM events)
```

> ⚠️ **Important**: `setTimeout(fn, 0)` NEVER beats Promises

---

## 🔄 COMPLETE EXECUTION CYCLE (VERY IMPORTANT)

```text
┌────────────────────────────┐
│ 1️⃣ Global Code Enters Stack │
└───────────────┬────────────┘
                ↓
┌────────────────────────────┐
│ 2️⃣ Sync Code Executes       │
└───────────────┬────────────┘
                ↓
┌────────────────────────────┐
│ 3️⃣ Async sent to Web APIs   │
│   (timers, fetch, DOM)      │
└───────────────┬────────────┘
                ↓
┌────────────────────────────┐
│ 4️⃣ Call Stack becomes empty │
└───────────────┬────────────┘
                ↓
┌────────────────────────────┐
│ 5️⃣ Event Loop checks queues │
└───────────────┬────────────┘
                ↓
┌────────────────────────────┐
│ 6️⃣ Microtasks run FIRST     │
│   (Promises, async/await)  │
└───────────────┬────────────┘
                ↓
┌────────────────────────────┐
│ 7️⃣ Tasks run NEXT           │
│   (setTimeout, events)     │
└────────────────────────────┘
```

---

## 🧩 WHEN BIG CODE RUNS — PRIORITY BREAKDOWN

### Assume this BIG code exists:

* Loops
* Promises
* async/await
* setTimeout
* fetch

### Actual Execution Priority:

```text
① Synchronous loops & functions
② Promise.then / await resolution
③ fetch response handlers
④ setTimeout / DOM events
```

> 💡 **Reason**: JS finishes the **entire microtask queue** before touching task queue

---

## ⚡ MICROTASK vs TASK (MOST IMPORTANT DIFFERENCE)

| Feature    | Microtask Queue           | Task Queue             |
| ---------- | ------------------------- | ---------------------- |
| Priority   | ⭐ HIGH                    | ⬇️ LOW                 |
| Examples   | Promise.then, async/await | setTimeout, DOM events |
| Execution  | Runs fully                | Runs one by one        |
| Starvation | ✅ Possible                | ❌ No                   |

---

## 🛑 STARVATION (VERY POPULAR EXAM QUESTION)

### What is Starvation?

```text
When Task Queue callbacks wait too long
because Microtask Queue never becomes empty
```

### Cause:

* Infinite / nested promises
* Continuous async/await chains

### Result:

* setTimeout never runs
* UI feels frozen

---

## 🎯 QUICK MEMORY HACK (1 LINE)

```text
SYNC → PROMISE → TIMEOUT
```

Say this in your head — you’ll never get order wrong again.

---

## 🧪 EXAM TRAPS YOU MUST AVOID

❌ "setTimeout(0) runs immediately"
❌ "Event loop executes code"
❌ "Promises go to task queue"
❌ "JS is multi-threaded"

✅ Correct Thinking:

* Event loop only MOVES tasks
* Only Call Stack executes code

---

## 📌 FINAL REVISION (SAVE THIS)

```text
Call Stack → Executes code
Web APIs → Handle async work
Event Loop → Scheduler
Microtasks → Promises (HIGH priority)
Tasks → Timers & Events (LOW priority)
```

---

## 🏆 FINAL WORD

If you understand this file:

* You can solve **ANY JS execution MCQ**
* You can explain async JS confidently
* You think like a JavaScript engine

🚀 **This is JavaScript Behind the Scenes — MASTERED**


✅ What this README gives you (POWER FEATURES)
🧠 1. Crystal-Clear What Runs First

No confusion, no guessing — exact execution order explained like a JS engine thinks.

Synchronous → Microtasks (Promises) → Tasks (setTimeout)

🔄 2. FULL Execution Cycle (Exam Favorite)

Step-by-step cycle diagram showing:

Call Stack

Web APIs

Event Loop

Microtask Queue

Task Queue

This is directly asked in theory exams & interviews.

⚡ 3. Big-Code Priority Rules (REAL WORLD)

When large apps run with:

loops

async/await

promises

fetch

timers

You now know who wins FIRST and WHY.

🛑 4. Starvation Explained (High-Scoring Topic)

What it is

Why it happens

Why setTimeout never runs sometimes

Most students lose marks here — you won’t.

🧠 5. Memory Hacks + Exam Traps

One-line memory formulas

Wrong beliefs corrected

Interview-safe explanations