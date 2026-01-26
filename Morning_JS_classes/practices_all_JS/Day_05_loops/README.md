# JavaScript For Loops: Complete Guide

This `README.md` is a **comprehensive guide** for beginners and intermediate learners to understand **JavaScript for loops**, including advanced usage with flags, Booleans, array length, breaks, and nested loops. It includes **key points, examples, and exam-focused tips**.

---

## Topics Covered

18. For Loops
19. For Loops: Flags, Booleans, Array Length, and Breaks
20. For Loops Nested

---

## 18. For Loops

### Key Points

* A `for` loop is used to execute a block of code a **specific number of times**.
* Syntax: `for (initialization; condition; increment) { // code }`
* Initialization runs **once** at the start.
* Condition is **checked before each iteration**.
* Increment (or decrement) updates the loop variable.
* Used for arrays, counting, and repetitive tasks.

### Syntax

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

Output:

```
0
1
2
3
4
```

**Exam Tip:** Always check the loop condition to prevent **infinite loops**.

---

## 19. For Loops: Flags, Booleans, Array Length, and Breaks

### Key Points

* **Flags**: Boolean variables used to indicate a condition is met.
* Can combine **flags with loops** to control execution.
* Use `array.length` to iterate through arrays dynamically.
* `break` stops the loop immediately.
* `continue` skips the current iteration and moves to the next.

### Examples

```javascript
// Using array length
let fruits = ['Apple', 'Banana', 'Cherry'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using a flag
let numbers = [1, 2, 3, 4, 5];
let found = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        found = true;
        break;
    }
}
console.log('Number 3 found:', found);

// Using continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
```

Output:

```
Apple
Banana
Cherry
Number 3 found: true
1
2
4
5
```

**Exam Tip:** Always use `array.length` instead of hardcoding numbers to prevent errors.

---

## 20. For Loops Nested

### Key Points

* **Nested loops** are loops inside loops.
* Useful for **2D arrays, patterns, tables**.
* Outer loop runs once for each iteration of inner loop.
* Can use `break` and `continue` inside inner or outer loops.

### Examples

```javascript
// Nested loop example
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }
}

// Multiplication table
for (let i = 1; i <= 3; i++) {
    let row = '';
    for (let j = 1; j <= 3; j++) {
        row += i * j + '\t';
    }
    console.log(row);
}
```

Output:

```
i=1, j=1
i=1, j=2
i=1, j=3
i=2, j=1
i=2, j=2
i=2, j=3
i=3, j=1
i=3, j=2
i=3, j=3
1	2	3	
2	4	6	
3	6	9	
```

**Exam Tips:**

* Track which loop is the outer and which is the inner.
* Use nested loops for multidimensional arrays and pattern printing.
* Be cautious with `break` in nested loops; it only breaks the loop where it’s called.

---

## ✅ Summary Tips for Exams

1. `for` loops are controlled by **initialization, condition, and increment/decrement**.
2. Use **array.length** to loop through arrays safely.
3. **Flags and Booleans** help manage loop logic and stop conditions.
4. `break` stops a loop immediately; `continue` skips to next iteration.
5. **Nested loops** are essential for multi-dimensional arrays and patterns.
6. Always check for **off-by-one errors** in loop conditions.

*End of JavaScript For Loops README*
