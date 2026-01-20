# Function Wizard 🔮 – Call, Apply & Bind Simulator

An interactive JavaScript project to learn how `call()`, `apply()`, and `bind()` work using superhero actions.  
This project demonstrates dynamic `this` binding, method borrowing, partial application, and controlling function execution.

---

## Table of Contents

- [Overview](#overview)  
- [Features](#features)  
- [Key Concepts](#key-concepts)  
  - [Call](#call)  
  - [Apply](#apply)  
  - [Bind](#bind)  
- [How it Works](#how-it-works)  
- [Project Structure](#project-structure)  
- [Usage](#usage)  
- [Key Takeaways](#key-takeaways)  

---

## Overview

The **Function Wizard** simulator allows you to experiment with:

- **`call()`** → Executes the function immediately with a specific `this` and comma-separated arguments.  
- **`apply()`** → Executes the function immediately with a specific `this` and arguments as an array.  
- **`bind()`** → Creates a new function permanently bound to a specific `this`, optionally pre-setting arguments for later use.  

It helps you **reuse functions**, **borrow methods**, and **control `this` dynamically**.

---

## Features

- Interactive hero and action selection  
- Demonstrates `call()`, `apply()`, and `bind()` differences  
- Supports multiple objects using the same function  
- Real-time output for actions  

---

## Key Concepts

### Call

- Executes **immediately**  
- Arguments are **comma-separated**  
- Dynamically sets `this`

**Example:**

```javascript
const hero = { name: "Flash", power: "super speed" };

function action(act) {
    console.log(`${this.name} uses ${this.power} to ${act}!`);
}

action.call(hero, "run"); 
// Output: Flash uses super speed to run!
