JavaScript Array.prototype.forEach() – Complete Guide

The forEach() method executes a provided function once for each array element. It is used for **iterating over arrays** to perform actions like logging, updating values, or calling functions on each element. Unlike map() or reduce(), it **does not return a new array**.

---

Syntax:

array.forEach(callback(currentValue, index, array))

Callback parameters:
- currentValue → the current element being processed
- index → optional, index of the current element
- array → optional, the array being traversed

---

How forEach() works:

- Iterates over the array **from index 0 to last index**
- Executes the callback **for each element**
- Does **not return a new array**
- Cannot be stopped by return or break (use for-of or for loop if needed)

---

Key rules and points:

- Always use **callback functions** with proper parameters
- Works best for **side-effects** (logging, updating DOM, calling APIs)
- Original array is **not modified unless explicitly changed**
- Does not chain like map() or filter()

---

Examples:

1. Simple iteration:

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
});

// Output: 1 2 3 4 5

2. Using index:

numbers.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// Output:
// Index 0: 1
// Index 1: 2
// Index 2: 3
// Index 3: 4
// Index 4: 5

3. Modifying original array:

const arr = [1, 2, 3];
arr.forEach((num, i, array) => {
  array[i] = num * 2;
});
console.log(arr); // Output: [2, 4, 6]

---

Use cases of forEach():

- Logging elements to console
- Updating DOM elements
- Calling functions on each element
- Performing side-effects
- Cannot be used to return transformed arrays (use map() for that)

---

Comparison with other methods:

- map() → returns a new array of same length
- filter() → returns a filtered array
- reduce() → returns a single value
- forEach() → **returns undefined**, used for side-effects

---

Common mistakes to avoid:

- Expecting a return value from forEach()
- Trying to break out of the loop (cannot use break or return)
- Using forEach() when map(), filter(), or reduce() is more suitable

---

Final takeaway:

- forEach() is **best for side-effects**, not for producing new data
- Understand callback parameters: currentValue, index, array
- Original array remains intact unless explicitly changed
- Always remember: **it does not return anything**
