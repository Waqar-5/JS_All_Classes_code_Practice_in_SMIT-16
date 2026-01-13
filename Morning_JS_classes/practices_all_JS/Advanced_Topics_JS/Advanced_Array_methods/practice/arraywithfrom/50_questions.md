# 📘 JavaScript `Array.from()` – 50 Interview Questions & Detailed Answers

---

## 📌 About This Document

This **PDF-style README.md** contains **50 carefully curated interview questions** focused **only on `Array.from()`** in JavaScript, each with detailed, professional answers.

* ✅ Frequently asked in **front-end & JS interviews**
* ✅ Answers explained **logically and step-by-step**
* ✅ Beginner-friendly but **interview-level depth**
* ✅ Clean formatting for **one-click download & PDF conversion**

---

## 1. What is `Array.from()` in JavaScript?

**Answer:** It is a static method that creates a **new array** from an **iterable or array-like object**.

## 2. When was `Array.from()` introduced?

**Answer:** In **ECMAScript 2015 (ES6)**.

## 3. What types of data can be converted using `Array.from()`?

**Answer:** Strings, Sets, Maps, NodeLists, `arguments` object, and array-like objects with `length`.

## 4. What is the syntax of `Array.from()`?

**Answer:** `Array.from(arrayLike, mapFn?, thisArg?)`

## 5. Does `Array.from()` mutate the original object?

**Answer:** No, it always returns a **new array**.

## 6. What is an array-like object?

**Answer:** An object with indexed elements and a `length` property but is **not a true array**.

## 7. How does `Array.from()` differ from the spread operator?

**Answer:** `Array.from()` supports a **mapping function**, while the spread operator does not.

## 8. Can `Array.from()` accept a mapping function?

**Answer:** Yes, it can **transform values** during array creation.

## 9. Give an example of using a map function with `Array.from()`.

**Answer:**

```js
Array.from([1,2,3], x => x*2); // [2,4,6]
```

## 10. What is the role of `thisArg` in `Array.from()`?

**Answer:** It sets the value of `this` inside the mapping function.

## 11. How can you convert a string into an array of characters?

**Answer:** `Array.from('Hello'); // ['H','e','l','l','o']`

## 12. Can `Array.from()` convert a Set into an array?

**Answer:** Yes, automatically converting Set values to an array.

## 13. How does `Array.from()` handle Maps?

**Answer:** It converts Maps into arrays of **key-value pairs**.

## 14. What happens if `null` or `undefined` is passed?

**Answer:** It throws a **TypeError** because they are not iterable.

## 15. How to create an array of a fixed length?

**Answer:**

```js
Array.from({ length: 5 }, (_, i) => i); // [0,1,2,3,4]
```

## 16. Can `Array.from()` clone an array?

**Answer:** Yes, creating a **shallow copy**.

## 17. What is a shallow copy?

**Answer:** Nested objects share references; only the first level is copied.

## 18. Is `Array.from()` chainable?

**Answer:** Yes, because it returns a real array.

## 19. How does `Array.from()` help in DOM manipulation?

**Answer:** It converts NodeLists to arrays, allowing array methods like `map()`.

## 20. Difference between `Array.from()` and `Array.of()`?

**Answer:** `Array.from()` converts iterables or array-like objects; `Array.of()` creates arrays from arguments.

## 21. Can `Array.from()` convert arguments object?

**Answer:** Yes, for functions to use array methods.

## 22. Can `Array.from()` be used with Sets for uniqueness?

**Answer:** Yes, because Sets already remove duplicates.

## 23. What happens if mapping function returns undefined?

**Answer:** The resulting array will have `undefined` at that index.

## 24. How to reverse an array created from a string?

**Answer:**

```js
Array.from('Hello').reverse(); // ['o','l','l','e','H']
```

## 25. Can `Array.from()` be used with `map()` afterward?

**Answer:** Yes, because it returns a real array.

## 26. Can `Array.from()` be used in functional programming?

**Answer:** Yes, especially when converting iterables.

## 27. What is the behavior with sparse arrays?

**Answer:** Sparse slots are preserved but reordered if mapping.

## 28. What are performance considerations?

**Answer:** Linear time complexity; safe for moderate array sizes.

## 29. Can `Array.from()` be used with BigInt arrays?

**Answer:** Yes, BigInt values are treated normally.

## 30. How to create a range of numbers?

**Answer:**

```js
Array.from({ length: 10 }, (_, i) => i+1); // [1..10]
```

## 31. Can `Array.from()` convert a Map directly to just keys or values?

**Answer:** No, you need `map.keys()` or `map.values()`.

## 32. How does `Array.from()` differ from `Array.prototype.slice()`?

**Answer:** `slice()` works on arrays; `Array.from()` works on iterables and array-like objects.

## 33. What is the output: `Array.from('abc', x => x.toUpperCase())`?

**Answer:** `['A','B','C']`

## 34. What is the output: `Array.from({length:3}, ()=>'Hi')`?

**Answer:** `['Hi','Hi','Hi']`

## 35. How does `Array.from()` handle non-integer lengths?

**Answer:** It floors the length to the nearest integer.

## 36. Can `Array.from()` be used for object iteration?

**Answer:** Only if the object is iterable.

## 37. How does `Array.from()` interact with strict mode?

**Answer:** No difference; behaves the same.

## 38. Can `Array.from()` be polyfilled?

**Answer:** Yes, using loops and `push()` to replicate behavior.

## 39. How to convert NodeList to array with map function?

**Answer:**

```js
Array.from(document.querySelectorAll('div'), el => el.textContent);
```

## 40. What happens if the mapping function throws an error?

**Answer:** `Array.from()` propagates the error and stops execution.

## 41. Can `Array.from()` work on generator functions?

**Answer:** Yes, because generators are iterable.

## 42. Is `Array.from()` deterministic?

**Answer:** Yes, the same input always produces the same output.

## 43. What are interview trap questions about `Array.from()`?

**Answer:**

* Mutating original data
* Using on non-iterable objects
* Confusing with `Array.of()` or spread

## 44. Can `Array.from()` convert a string with emoji?

**Answer:** Yes, each code unit becomes an element.

## 45. How to flatten an array using `Array.from()`?

**Answer:** Requires mapping with `flat()`, `Array.from()` alone doesn’t flatten.

## 46. How to use `Array.from()` to count characters?

**Answer:**

```js
Array.from('hello').length; // 5
```

## 47. How does `Array.from()` behave with Sets containing objects?

**Answer:** It keeps the object references.

## 48. Can `Array.from()` be combined with `filter()`?

**Answer:** Yes, after creation: `Array.from(set).filter(x=>x>2)`

## 49. What is a key advantage over loops?

**Answer:** Cleaner, shorter, readable, and supports mapping.

## 50. Give a one-line professional definition for interviews.

**Answer:** `Array.from()` creates a **new array from an iterable or array-like object with optional mapping, without mutating the source.`
