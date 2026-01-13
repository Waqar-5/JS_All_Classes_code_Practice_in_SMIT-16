# JavaScript `reverse()` Method – 50 Interview Questions & Detailed Answers

---

## 📘 About This Document

This README is designed like a **PDF-style interview guide** for the JavaScript **`reverse()` method**. It contains **50 high-quality interview questions with logical, clear, and professional answers**, focusing on **real interview patterns**, **tricky concepts**, and **best practices**.

---

## 1️⃣ What does the `reverse()` method do in JavaScript?

**Answer:**
The `reverse()` method reverses the order of elements in an array **in place** and returns the same array. It directly modifies the original array.

---

## 2️⃣ Is `reverse()` a mutating method?

**Answer:**
Yes. `reverse()` mutates the original array, which is a very common interview trap.

---

## 3️⃣ What is the return value of `reverse()`?

**Answer:**
It returns a reference to the **same array**, not a new one.

---

## 4️⃣ Explain why `reverse()` is considered risky in React.

**Answer:**
React state should be immutable. Using `reverse()` directly mutates the state array, which can cause unexpected UI behavior.

---

## 5️⃣ How do you reverse an array without mutating the original?

**Answer:**

```js
const reversed = [...arr].reverse();
```

This creates a shallow copy before reversing.

---

## 6️⃣ Can `reverse()` be used on strings directly?

**Answer:**
No. Strings are immutable. You must convert them to arrays first.

---

## 7️⃣ How do you reverse a string using `reverse()`?

**Answer:**

```js
const reversed = str.split('').reverse().join('');
```

---

## 8️⃣ What happens if `reverse()` is called on an empty array?

**Answer:**
It returns an empty array without error.

---

## 9️⃣ Does `reverse()` change array length?

**Answer:**
No. It only changes element order.

---

## 🔟 What is the time complexity of `reverse()`?

**Answer:**
O(n), because each element is swapped once.

---

## 11️⃣ How does `reverse()` behave with nested arrays?

**Answer:**
It reverses only the top-level elements, not deeply nested values.

---

## 12️⃣ What is the output?

```js
[1, [2,3], 4].reverse();
```

**Answer:**

```js
[4, [2,3], 1]
```

---

## 13️⃣ Can `reverse()` be chained with other array methods?

**Answer:**
Yes, because it returns the array itself.

---

## 14️⃣ Explain `reverse()` vs `toReversed()`.

**Answer:**
`reverse()` mutates the array, while `toReversed()` (ES2023) returns a new reversed array.

---

## 15️⃣ Why is `reverse()` called an in-place algorithm?

**Answer:**
Because it rearranges elements within the same memory location.

---

## 16️⃣ What happens when two variables reference the same array and `reverse()` is called?

**Answer:**
Both variables see the reversed array since they point to the same memory.

---

## 17️⃣ How can `reverse()` affect shared data?

**Answer:**
It can unintentionally modify data used elsewhere, causing bugs.

---

## 18️⃣ Is `reverse()` available for typed arrays?

**Answer:**
Yes, typed arrays like `Int32Array` also support `reverse()`.

---

## 19️⃣ How does `reverse()` differ from sorting in descending order?

**Answer:**
`reverse()` only changes order; `sort()` compares values.

---

## 20️⃣ Give a real-world use case of `reverse()`.

**Answer:**
Reversing chat messages to show latest first.

---

## 21️⃣ Can `reverse()` be used in functional programming style?

**Answer:**
Yes, but mutation should be avoided by copying the array first.

---

## 22️⃣ What happens if `reverse()` is used on sparse arrays?

**Answer:**
Empty slots are preserved but reordered.

---

## 23️⃣ Explain `reverse()` with `sort()`.

**Answer:**
Often used together to sort descending:

```js
arr.sort().reverse();
```

---

## 24️⃣ Why should `reverse()` not be used directly on props in React?

**Answer:**
Props must remain immutable; mutation breaks React principles.

---

## 25️⃣ Does `reverse()` work on array-like objects?

**Answer:**
Only if they inherit from `Array.prototype`.

---

## 26️⃣ Can `reverse()` be used inside `reduce()`?

**Answer:**
Yes, but mutation must be handled carefully.

---

## 27️⃣ What is the output?

```js
const a=[1,2];
const b=a.reverse();
b.push(3);
```

**Answer:**
Both `a` and `b` become `[2,1,3]`.

---

## 28️⃣ How do you reverse array iteration without using `reverse()`?

**Answer:**
By iterating from the end using a loop.

---

## 29️⃣ Is `reverse()` stable?

**Answer:**
Yes, since it does not compare elements.

---

## 30️⃣ Can `reverse()` be polyfilled easily?

**Answer:**
Yes, using index swapping.

---

## 31️⃣ Why do interviewers ask about `reverse()` so often?

**Answer:**
To test understanding of **mutation and references**.

---

## 32️⃣ What is the biggest mistake developers make with `reverse()`?

**Answer:**
Assuming it returns a new array.

---

## 33️⃣ How does `reverse()` behave in strict mode?

**Answer:**
Same behavior; strict mode has no effect.

---

## 34️⃣ Can `reverse()` throw errors?

**Answer:**
Rarely, unless used on non-arrays incorrectly.

---

## 35️⃣ What happens if `reverse()` is called on a frozen array?

**Answer:**
It throws a TypeError.

---

## 36️⃣ How does `reverse()` impact performance?

**Answer:**
Linear performance; safe for moderate arrays.

---

## 37️⃣ Is `reverse()` synchronous or asynchronous?

**Answer:**
Synchronous.

---

## 38️⃣ Can `reverse()` be overridden?

**Answer:**
Yes, by modifying `Array.prototype`, but not recommended.

---

## 39️⃣ How do you reverse words in a sentence?

**Answer:**

```js
sentence.split(' ').reverse().join(' ');
```

---

## 40️⃣ Can `reverse()` be used with `map()`?

**Answer:**
Yes, but mapping happens after reversal.

---

## 41️⃣ Explain memory behavior of `reverse()`.

**Answer:**
No extra memory is allocated for elements.

---

## 42️⃣ Why is `reverse()` unsafe in concurrent logic?

**Answer:**
Because it mutates shared data.

---

## 43️⃣ Is `reverse()` deterministic?

**Answer:**
Yes, same input always gives same output.

---

## 44️⃣ How do you debug `reverse()` issues?

**Answer:**
Check references and mutation points.

---

## 45️⃣ Can `reverse()` work with BigInt arrays?

**Answer:**
Yes, BigInt elements are reversed normally.

---

## 46️⃣ What is the ES specification behavior of `reverse()`?

**Answer:**
It swaps indexed elements symmetrically.

---

## 47️⃣ How does `reverse()` affect garbage collection?

**Answer:**
Minimal impact since no new objects created.

---

## 48️⃣ Why is `reverse()` avoided in immutable architectures?

**Answer:**
Because mutation breaks predictability.

---

## 49️⃣ What interview one-liner best defines `reverse()`?

**Answer:**

> `reverse()` reverses an array in place and returns the same array.

---

## 50️⃣ When should `reverse()` be avoided?

**Answer:**
When working with shared, immutable, or state-based data.

---

## 🏁 Final Notes

* **High-frequency interview topic**
* Mutation is the **key concept**
* Perfect for **one-click download**, **revision**, and **interview prep**

---

📥 This README is formatted like a **PDF-style professional guide** for easy learning and sharing.
