# JavaScript Closures Interactive Playground

This project demonstrates **JavaScript closures** with interactive examples in the browser. It covers private counters, function factories, and memoization, all using closures.

---

## 1️⃣ Private Counter Example

**Concept:** Closures allow variables to remain private and persist state.

**Code:**

```javascript
function createCounter() {
    let count = 0; // private variable
    return function() { // closure
        count++;
        return count;
    };
}
const counter = createCounter();
```

**Usage:**

* Clicking the button increases the counter.
* The inner function remembers `count` even after outer function finishes.

**HTML Elements:**

* Button: `counterBtn`
* Display: `counterValue`

---

## 2️⃣ Multiplier Function Factory

**Concept:** Closures can create specialized functions dynamically.

**Code:**

```javascript
function multiplier(factor) {
    return function(number) { // closure over factor
        return number * factor;
    };
}
```

**Usage:**

* Enter a factor and number to see multiplication.
* Each returned function remembers the `factor` value.

**HTML Elements:**

* Inputs: `factorInput`, `numberInput`
* Button: `multiplyBtn`
* Display: `multiplyResult`

---

## 3️⃣ Memoization Example

**Concept:** Closures can **store computed results** to optimize repeated function calls.

**Code:**

```javascript
function memoize(fn) {
    const cache = {};
    return function(x) { // closure over cache
        if (cache[x] !== undefined) return cache[x];
        const result = fn(x);
        cache[x] = result;
        return result;
    };
}
const square = memoize(x => x * x);
```

**Usage:**

* Enter a number to calculate its square.
* First call calculates, subsequent calls fetch from cache.

**HTML Elements:**

* Input: `memoInput`
* Button: `memoBtn`
* Display: `memoResult`

---

## How it Works

1. **Private Counter:** The counter variable is preserved in the closure.
2. **Multiplier Factory:** Each multiplier function remembers its own factor.
3. **Memoization:** Computed results are cached in a closure for efficiency.

---

## HTML Structure

* Header: Project title and description.
* Main Sections: Each closure example with inputs, buttons, and results.
* Footer: Author credit.

---

## CSS Styling

* Clean, modern design with colored headers, rounded boxes, and hover effects.
* Each example section is styled for clarity.
* Responsive design with max-width and padding.

---

## Key Takeaways

* Closures **preserve private state**.
* Useful for **dynamic function creation, data encapsulation, and optimization**.
* Interactive examples help **visualize closures in real scenarios**.

---

**Author:** Waqar Ali | JavaScript Closures Interactive Examples
