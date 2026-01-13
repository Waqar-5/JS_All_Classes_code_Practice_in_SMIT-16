# JavaScript `slice()` Method – 50 Interview Questions & Detailed Answers

---

## 📌 About This Document

This README.md contains **50 professionally curated interview questions** focused exclusively on the **`slice()` method** in JavaScript. Each question includes a **detailed, logical, and professional answer** to help anyone understand the concept easily.

* Designed for **exams and interviews**
* Clear **formatting like a PDF** for easy download and study
* Covers **basic, advanced, and tricky use cases**

---

## 1. What is `slice()` in JavaScript?

**Answer:** `slice()` is a method that returns a **shallow copy of a portion of an array** or string without modifying the original array or string.

## 2. Does `slice()` mutate the original array?

**Answer:** No. `slice()` **always returns a new array**, leaving the original array unchanged.

## 3. What is the syntax of `slice()`?

**Answer:** `array.slice(begin?, end?)` where `begin` is inclusive and `end` is exclusive.

## 4. What happens if `begin` is omitted?

**Answer:** It defaults to `0`, starting from the first element.

## 5. What happens if `end` is omitted?

**Answer:** It defaults to the array’s **length**, slicing until the end.

## 6. What happens when `begin` is negative?

**Answer:** It counts from the **end of the array**, e.g., `slice(-2)` starts two elements from the end.

## 7. What happens when `end` is negative?

**Answer:** It counts backward from the end, e.g., `slice(1,-1)` extracts from index 1 to one before the last element.

## 8. Give an example of basic array slicing.

```js
const arr = [1,2,3,4,5];
arr.slice(1,4); // [2,3,4]
```

## 9. How do you copy an array using `slice()`?

**Answer:** `const copy = arr.slice(); // shallow copy`

## 10. What is a shallow copy?

**Answer:** The first-level elements are copied; nested objects **share references**.

## 11. How to slice strings?

**Answer:** `const str = 'Hello'; str.slice(0,4); // 'Hell'`

## 12. How does `slice()` differ from `splice()`?

**Answer:** `slice()` **does not mutate** the array, `splice()` **removes elements** and changes the original array.

## 13. Can `slice()` work on `arguments` object?

**Answer:** Yes, it can convert the arguments object to an array: `Array.prototype.slice.call(arguments)`.

## 14. Can `slice()` handle negative indices in strings?

**Answer:** Yes, e.g., `'Hello'.slice(-2); // 'lo'`

## 15. How to extract the last element of an array?

**Answer:** `arr.slice(-1); // returns [lastElement]`

## 16. How to extract a portion dynamically in a loop?

**Answer:** You can pass variables as `begin` and `end`, e.g., `arr.slice(start, end)`.

## 17. What is the difference between `slice()` and `concat()`?

**Answer:** `slice()` extracts a portion; `concat()` combines arrays.

## 18. Can `slice()` be chainable?

**Answer:** Yes, because it returns a **real array**.

## 19. How does `slice()` handle sparse arrays?

**Answer:** Sparse slots are **preserved** in the new array.

## 20. Can `slice()` extract multidimensional arrays?

**Answer:** Yes, but only a **shallow copy** of the first level.

## 21. How to remove the first element without mutating?

**Answer:** `arr.slice(1);`

## 22. How to remove the last element without mutating?

**Answer:** `arr.slice(0, -1);`

## 23. Can `slice()` accept floating-point indices?

**Answer:** Yes, they are **floored** to integers.

## 24. How to reverse an array copy?

```js
const copy = arr.slice();
copy.reverse(); // original array remains unchanged
```

## 25. How to extract keys from an array of objects?

**Answer:** `arr.slice(0,3).map(obj => obj.key)`

## 26. Can `slice()` handle zero-length arrays?

**Answer:** Yes, returns an empty array.

## 27. What happens if `begin` >= array length?

**Answer:** Returns an empty array.

## 28. What happens if `end` > array length?

**Answer:** Slices till the end of the array without error.

## 29. Can `slice()` extract elements from a Set?

**Answer:** Not directly; first convert using `Array.from(set).slice()`.

## 30. Can `slice()` be used to convert NodeLists?

**Answer:** Yes, e.g., `Array.prototype.slice.call(document.querySelectorAll('div'))`

## 31. What is the output: `[1,2,3].slice(1,2)`?

**Answer:** `[2]`

## 32. Output: `[1,2,3,4,5].slice(-3,-1)`?

**Answer:** `[3,4]`

## 33. Can `slice()` extract characters for emoji strings?

**Answer:** Yes, but each **code unit** becomes an element, not full emoji.

## 34. Can `slice()` be used for array immutability?

**Answer:** Yes, preferred to avoid modifying the original array.

## 35. Can `slice()` be combined with `map()`?

**Answer:** Yes, e.g., `arr.slice(1,4).map(x => x*2)`

## 36. What happens if `begin` is negative and `abs(begin)` > array length?

**Answer:** Starts from index 0.

## 37. How does `slice()` behave with strings and Unicode?

**Answer:** Returns substring; be careful with surrogate pairs.

## 38. How to slice a 2D array shallow copy?

**Answer:** `matrix.slice(0,2)`; inner arrays remain **references**.

## 39. Can `slice()` be used with `forEach()`?

**Answer:** Yes, e.g., `arr.slice(1,3).forEach(x => console.log(x))`

## 40. Difference between slice(0) and [...arr]?

**Answer:** Both create shallow copy; `slice(0)` is method, `[...arr]` uses spread syntax.

## 41. Output: `'JavaScript'.slice(4)`?

**Answer:** `'Script'`

## 42. Output: `'JavaScript'.slice(-6,-1)`?

**Answer:** `'Scri'`

## 43. Output: `[1,2,3,4].slice(2,2)`?

**Answer:** `[]`

## 44. Can `slice()` be used in functional programming?

**Answer:** Yes, for **immutable array operations**.

## 45. How to slice first 3 elements?

**Answer:** `arr.slice(0,3)`

## 46. How to slice last 3 elements?

**Answer:** `arr.slice(-3)`

## 47. How to slice without knowing array length?

**Answer:** Use negative indices, e.g., `arr.slice(-n)`

## 48. How does `slice()` differ from `filter()`?

**Answer:** `slice()` uses indices; `filter()` uses conditions.

## 49. Can `slice()` extract elements from object-like arrays?

**Answer:** Yes, if `length` property exists.

## 50. One-line professional definition?

**Answer:** `slice()` returns a **shallow copy of a portion of an array or string without modifying the original, supporting positive and negative indices.`
