# JavaScript Array.prototype.reduce()

The **`reduce()`** method executes a reducer function on each array element to produce a **single output value**.  
**Syntax:** `array.reduce(callback(accumulator, currentValue[, index[, array]]), initialValue)`  
- `accumulator`: stores accumulated result, `currentValue`: current element.  
- `initialValue` (optional) sets the starting accumulator.  

**Use Cases:** sum values, count occurrences, flatten arrays, or transform data structures.  
**Example:** `const sum = [1,2,3].reduce((acc, val) => acc + val, 0); // 6`


JavaScript Array.prototype.reduce() – Complete Guide

The reduce() method processes an array and returns a **single value** by applying a function on each element and accumulating the result. It is one of the most versatile array methods in JavaScript.

How reduce() works:

- Starts with an **accumulator**.
- Processes elements **one by one**.
- Updates the accumulator on each step.
- Returns the accumulator after the last element.

Syntax:

array.reduce(callback(accumulator, currentValue, index, array), initialValue)

Callback parameters:
- accumulator → holds the running result
- currentValue → current element being processed
- index → optional, index of the current element
- array → optional, the original array

Initial value:
- Sets the starting value of the accumulator
- Always recommended to avoid bugs
- If omitted, the first array element becomes the accumulator

Accumulator rules:
- Can be any data type: number, string, array, object
- Must always be returned in each iteration
- Forgetting to return it results in undefined

Common use cases:
- Summing numbers
- Counting occurrences of items
- Grouping objects by property
- Converting arrays into objects
- Flattening nested arrays
- Replacing multiple loops with one operation

Reduce vs map & filter:
- map() → transforms elements → returns array
- filter() → selects elements → returns array
- reduce() → creates any single value → returns one result

Behavior and performance:
- Executes left to right
- Runs once per element
- Does not mutate the original array
- Works best with pure functions

Common mistakes to avoid:
- Forgetting initial value
- Not returning the accumulator
- Overusing reduce() when map or filter is clearer
- Mutating the accumulator incorrectly

When to use reduce():
- When a **single result** is needed
- When logic involves **accumulation**
- When **functional style** is preferred

Interview key line:
“reduce() converts an array into a single value by accumulating results through a reducer function.”

Final takeaway:
Understand the **accumulator**, **initial value**, and **return statement** to master reduce() in JavaScript.
