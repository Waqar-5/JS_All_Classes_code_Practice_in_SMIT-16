# JavaScript Variables & Execution Context — Ultimate Guide

> A professional guide to **var, let, const, hoisting, TDZ, scope, memory & code phase**.
> Designed for **easy understanding, interviews, and quick revision**.

---

## 📑 Table of Contents

1. [Var, Let & Const](#var-let--const)
2. [Hoisting & TDZ](#hoisting--tdz)
3. [Scope & Function Execution Context](#scope--function-execution-context)
4. [Memory Phase vs Code Phase](#memory-phase-vs-code-phase)
5. [Practical Examples](#practical-examples)
6. [Tips & Tricks to Remember](#tips--tricks-to-remember)

---

## 1️⃣ Var, Let & Const

| Feature            | var               | let         | const       |
| ------------------ | ----------------- | ----------- | ----------- |
| Scope              | Function          | Block       | Block       |
| Redeclare          | ✔ Yes             | ❌ No        | ❌ No        |
| Reassign           | ✔ Yes             | ✔ Yes       | ❌ No        |
| Hoisting           | ✔ Yes (undefined) | ✔ Yes (TDZ) | ✔ Yes (TDZ) |
| TDZ                | ❌ No              | ✔ Yes       | ✔ Yes       |
| Attached to window | ✔ Yes             | ❌ No        | ❌ No        |

**Key Points:**

* `var` → function-scoped, can redeclare & reassign, avoid in modern JS.
* `let` → block-scoped, can reassign, safer.
* `const` → block-scoped, cannot reassign, object properties mutable.

---

## 2️⃣ Hoisting & TDZ

**Hoisting:** JS moves declarations to the top conceptually.

* `var` → hoisted and initialized as `undefined`
* `let/const` → hoisted but in **Temporal Dead Zone (TDZ)**

```js
console.log(hoistVar); // undefined
var hoistVar = "I am var";

try { console.log(hoistLet); } catch(e) { console.log(e.message); } // ReferenceError
let hoistLet = "I am let";

try { console.log(hoistConst); } catch(e) { console.log(e.message); } // ReferenceError
const hoistConst = "I am const";
```

**Tip:** var is “safe” before declaration; let & const → TDZ.

---

## 3️⃣ Scope & Function Execution Context

**Scope Types:**

* **Global Scope:** Accessible everywhere.
* **Function Scope:** Variables inside a function.
* **Block Scope:** Variables inside `{}`.

**Execution Context:**

* **Global Execution Context (GEC):** Created when script runs.
* **Function Execution Context (FEC):** Created on function call, deleted after execution.

```js
var globalVar = "I am global var";
let globalLet = "I am global let";

function greet(name) {
    var localVar = "I am local var";    // Function scoped
    let localLet = "I am local let";    // Block scoped
    const localConst = "I am local const"; // Block scoped

    console.log("Hello", name);
    console.log(localVar, localLet, localConst);

    if(true){
        let blockVar = "Block scoped var";
        console.log(blockVar); // Accessible inside block
    }
    // console.log(blockVar); // ❌ Not accessible outside block
}

greet("Waqar");
```

---

## 4️⃣ Memory Phase vs Code Phase

**JavaScript Execution Phases:**

1. **Memory Phase:** JS engine allocates memory.

   * `var` → undefined
   * `let/const` → exist but in TDZ
2. **Code Phase:** Values assigned, code executes

```js
var a;        // Memory phase: a = undefined
let b;        // Memory phase: exists in TDZ
const c = 50; // Memory phase: must initialize immediately

a = 10;      // Code phase: assign value
b = 20;
console.log(a, b, c); // Output: 10 20 50
```

**Tip:** Memory phase → prepares space; Code phase → assigns values.

---

## 5️⃣ Practical Examples

### Loop Behavior: var vs let

```js
for(var i=0; i<3; i++){
    setTimeout(()=> console.log("var i =", i), 100);
}
// Output: 3,3,3 → var is function scoped

for(let j=0; j<3; j++){
    setTimeout(()=> console.log("let j =", j), 100);
}
// Output: 0,1,2 → let is block scoped
```

### Const Object Mutation

```js
const user = { name: "Ali", age: 25 };
user.age = 26; // ✅ Allowed
// user = {};   // ❌ Error
```

---

## 6️⃣ Tips & Tricks to Remember

* **Default:** Use `const` → safe and predictable.
* **Reassign:** Use `let` only when necessary.
* **Avoid:** `var` in modern JS → bugs & global pollution.
* **TDZ:** let/const cannot be accessed before declaration.
* **Hoisting:** var = undefined, let/const → ReferenceError.
* **Scope:** var → function, let/const → block.
* **Memory vs Code Phase:** Memory prepares, code assigns.
* **Loops:** let preserves iteration value; var does not.

---

> This README combines **all essential JS variable concepts** in one place for **interviews, quick revision, and long-term memory**.
