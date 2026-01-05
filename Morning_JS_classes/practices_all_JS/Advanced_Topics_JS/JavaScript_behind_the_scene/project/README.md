# JavaScript Execution Visualizer

**A fully interactive web app to visualize JavaScript execution flow**  
*Understand Call Stack, Event Loop, Microtasks, Tasks, Promises, setTimeout, and Starvation in real time!*

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Concepts Visualized](#concepts-visualized)  
- [Installation & Usage](#installation--usage)  
- [How It Works](#how-it-works)  
- [Example Code](#example-code)  
- [Why This Project Is Useful](#why-this-project-is-useful)  
- [Future Enhancements](#future-enhancements)  
- [License](#license)  

---

## Project Overview

JavaScript execution can be tricky to understand, especially **async behavior** like Promises, `setTimeout`, and the Event Loop. This project visually demonstrates:

- **Call Stack:** Functions currently executing  
- **Microtask Queue:** Promises waiting to resolve  
- **Task Queue:** `setTimeout` and other macro tasks  
- **Console Output:** Logs in the order they execute  

This tool helps both **beginners and experienced developers** grasp the **real flow of JavaScript** and remember it forever.

---

## Features

- Fully interactive: Write any JavaScript snippet and see exact execution order  
- Real-time simulation of:
  - Call Stack  
  - Microtask Queue  
  - Task Queue  
  - Console Output  
- Step delay for better understanding  
- Highlight currently executing function or promise  
- Color-coded visualization for stacks and queues  

---

## Concepts Visualized

| Concept                | Description |
|------------------------|-------------|
| **Call Stack**         | Shows functions currently executing (LIFO) |
| **Event Loop**         | Watches Call Stack & Task Queues and pushes tasks to execution |
| **Microtask Queue**    | Stores promises & async/await jobs (FIFO) |
| **Task Queue**         | Stores `setTimeout`, `setInterval`, I/O callbacks (FIFO) |
| **Promises**           | Added to microtask queue when resolved |
| **setTimeout**         | Added to task queue after timer expires |
| **Starvation**         | Microtasks continuously block tasks from executing |
| **Console Output**     | Shows log results in exact order |

---

## Installation & Usage

1. Clone this repository:

```bash
git clone https://github.com/your-username/js-execution-visualizer.git

Open index.html in your browser.

Write JavaScript code in the Code Input panel.

Click Run Code.

Observe:

Call Stack: What executes now

Microtask Queue: Promises waiting

Task Queue: setTimeout tasks

Console Output: Logs in order

How It Works

Call Stack:

Functions are pushed when execution starts

Popped when finished

Microtask Queue:

Promises added here after .then or async resolution

Always executes before Task Queue

Task Queue:

setTimeout, setInterval, I/O callbacks

Executes after Microtasks

Visualization Steps:

STEP_DELAY ensures each action is visible

Each stack/queue update is rendered in the browser

console.log is overridden to show logs and stack behavior

Example Code
console.log('Start');

setTimeout(() => console.log('Timeout 0'), 0);

Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => {
  console.log('Promise 2');
  setTimeout(() => console.log('Timeout inside Promise'), 0);
});

console.log('End');

Expected Visualization:
Stack / Queue	Execution Order
Call Stack	Global Execution → console.log('Start') → ...
Microtask Queue	Promise 1, Promise 2
Task Queue	Timeout 0, Timeout inside Promise
Console Output	Start → End → Promise 1 → Promise 2 → Timeout 0 → Timeout inside Promise
Why This Project Is Useful

Makes JS async behavior visual and easy to understand

Helps beginners learn event loop and task/microtask flow

Useful for interviews to explain JS execution

Can be used as a portfolio project

Future Enhancements

Smooth animations for stack execution

Highlight currently executing item dynamically

Color-coded microtasks vs tasks for clarity

Support for async/await and nested promises fully

Add diagrammatic representation of Event Loop