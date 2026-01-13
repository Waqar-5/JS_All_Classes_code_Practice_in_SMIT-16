# JavaScript `splice()` Method – 50 Interview Questions & Answers (Professional Guide)

---

## 📌 About This Document

This README contains **50 most-asked interview questions** on the **JavaScript `splice()` method**, each with **clear, logical, and professional answers**.

* Written in **simple but expert-level language**
* Covers **basic → advanced → tricky interview scenarios**
* Structured like a **PDF-style study guide**
* Perfect for **one-click download, revision, and interviews**

---

## 🔹 Interview Questions & Answers on `splice()`

---

### 1. What is the `splice()` method in JavaScript?

**Answer:**
`splice()` is an array method used to **add, remove, or replace elements** in an array. It **modifies the original array** and returns an array of removed elements.

---

### 2. Does `splice()` mutate the original array?

**Answer:**
Yes. `splice()` directly changes the original array. This is one of the most important interview points.

---

### 3. What is the syntax of `splice()`?

**Answer:**

```js
array.splice(start, deleteCount, ...items)
```

---

### 4. What does the `start` parameter represent?

**Answer:**
It specifies the index at which the array modification begins. Negative values count from the end.

---

### 5. What is `deleteCount` used for?

**Answer:**
It defines how many elements should be removed starting from the `start` index.

---

### 6. What happens if `deleteCount` is 0?

**Answer:**
No elements are removed, but new elements can still be inserted.

---

### 7. What happens if `deleteCount` is omitted?

**Answer:**
All elements from the `start` index to the end of the array are removed.

---

### 8. What does `splice()` return?

**Answer:**
It returns a **new array containing the removed elements**.

---

### 9. Can `splice()` be used to insert elements only?

**Answer:**
Yes, by setting `deleteCount` to `0`.

---

### 10. Can `splice()` be used to replace elements?

**Answer:**
Yes. Replace elements by removing and inserting new ones in a single operation.

---

### 11. Difference between `slice()` and `splice()`?

**Answer:**
`slice()` does not mutate the array, while `splice()` does.

---

### 12. Can `splice()` work with negative indices?

**Answer:**
Yes. A negative start index counts from the end of the array.

---

### 13. How to remove the last element using `splice()`?

**Answer:**

```js
arr.splice(-1, 1);
```

---

### 14. How to remove the first element using `splice()`?

**Answer:**

```js
arr.splice(0, 1);
```

---

### 15. How to remove all elements from an array using `splice()`?

**Answer:**

```js
arr.splice(0);
```

---

### 16. Can `splice()` insert multiple elements at once?

**Answer:**
Yes, you can insert multiple elements using the spread syntax or multiple arguments.

---

### 17. What happens if `start` is greater than array length?

**Answer:**
Insertion happens at the end of the array.

---

### 18. What happens if negative `start` exceeds array length?

**Answer:**
The operation starts from index `0`.

---

### 19. Is `splice()` suitable for functional programming?

**Answer:**
Not directly, because it mutates data. Clone the array first to use it safely.

---

### 20. Can `splice()` be chained?

**Answer:**
No, because it returns removed elements, not the modified array.

---

### 21. How does `splice()` behave on empty arrays?

**Answer:**
It safely returns an empty array without throwing errors.

---

### 22. Can `splice()` remove elements from the middle of an array?

**Answer:**
Yes, that is one of its main use cases.

---

### 23. What is the time complexity of `splice()`?

**Answer:**
O(n), because elements may need to be shifted in memory.

---

### 24. How is `splice()` different from `pop()`?

**Answer:**
`pop()` removes only the last element, while `splice()` can remove elements from any index.

---

### 25. How is `splice()` different from `shift()`?

**Answer:**
`shift()` removes the first element only, while `splice()` is flexible.

---

### 26. Can `splice()` be used to merge arrays?

**Answer:**
Indirectly, yes, by inserting elements using the spread operator.

---

### 27. How to replace two elements with one element?

**Answer:**

```js
arr.splice(1, 2, 'x');
```

---

### 28. Does `splice()` work on strings?

**Answer:**
No, strings are immutable. It only works on arrays.

---

### 29. Can `splice()` be used with array-like objects?

**Answer:**
Yes, using `call()` or `apply()`.

---

### 30. What happens if `deleteCount` is negative?

**Answer:**
It is treated as `0`, so no elements are removed.

---

### 31. How to insert elements at the end using `splice()`?

**Answer:**

```js
arr.splice(arr.length, 0, 'x');
```

---

### 32. What does `splice(2)` do?

**Answer:**
Removes all elements from index `2` to the end.

---

### 33. Can `splice()` return an empty array?

**Answer:**
Yes, when no elements are removed.

---

### 34. Is `splice()` supported in all browsers?

**Answer:**
Yes, it is fully supported across all modern and older browsers.

---

### 35. Can `splice()` cause bugs in shared state?

**Answer:**
Yes, because it mutates arrays, which can affect shared references.

---

### 36. How to safely use `splice()` without mutation?

**Answer:**
Clone the array first using `slice()` or spread syntax.

---

### 37. Can `splice()` remove zero elements and insert nothing?

**Answer:**
Yes, but it will do nothing.

---

### 38. Why is `splice()` powerful but dangerous?

**Answer:**
Because it mutates data directly, which can cause side effects if not handled carefully.

---

### 39. What is a real-world use case of `splice()`?

**Answer:**
Dynamic lists like todo apps, shopping carts, and dashboards.

---

### 40. Can `splice()` be used inside loops?

**Answer:**
Yes, but with caution because index shifting can cause logical bugs.

---

### 41. What happens to array length after `splice()`?

**Answer:**
Array length changes based on removed or added elements.

---

### 42. Can `splice()` remove duplicate values?

**Answer:**
Yes, when combined with logic to locate duplicates.

---

### 43. Is `splice()` better than `filter()`?

**Answer:**
No. `filter()` is non-mutating and preferred when immutability is required.

---

### 44. Can `splice()` replace the entire array?

**Answer:**
Yes, by removing all elements and inserting new ones.

---

### 45. Does `splice()` preserve order of remaining elements?

**Answer:**
Yes, except where modifications occur.

---

### 46. Can `splice()` remove elements conditionally?

**Answer:**
Yes, but condition logic must be written manually.

---

### 47. Why is `splice()` often tested in interviews?

**Answer:**
Because it tests understanding of **mutation, indexing, and array manipulation**.

---

### 48. What happens if no parameters are passed?

**Answer:**
The array remains unchanged and an empty array is returned.

---

### 49. Can `splice()` be used in real-time applications?

**Answer:**
Yes, but performance should be considered for large arrays.

---

### 50. One-line interview definition of `splice()`?

**Answer:**

> `splice()` modifies an array in-place by adding, removing, or replacing elements and returns the removed elements.

---

## ✅ Final Tip for Interviews

Always mention **mutation**, **return value**, and **difference from `slice()`** — this alone can earn full marks.

---

🎯 **This README is optimized for exams, interviews, and fast revision with a clean PDF-style structure.**
