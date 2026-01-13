# JavaScript `findIndex()` Method - Interview Questions & Answers

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Parameters](#parameters)
4. [Return Value](#return-value)
5. [Examples](#examples)
6. [Comparison with `find()`](#comparison-with-find)
7. [When to Use `findIndex()`](#when-to-use-findindex)
8. [Tips for Exams & Interviews](#tips-for-exams--interviews)
9. [50 Interview Questions & Answers](#50-interview-questions--answers)

---

## Introduction

The `findIndex()` method is an **array method** in JavaScript used to **find the index of the first element** in an array that satisfies a given **condition** (callback function).

If no element satisfies the condition, it returns **-1**.

---

## Syntax

```javascript
array.findIndex(callback(element, index, array), thisArg)
```

---

## Parameters

| Parameter  | Type     | Description                                                                                        |
| ---------- | -------- | -------------------------------------------------------------------------------------------------- |
| `callback` | Function | Function to test each element of the array. It takes 3 arguments: `element`, `index`, and `array`. |
| `thisArg`  | Optional | Value to use as `this` inside the callback function.                                               |

---

## Return Value

* Returns the **index** of the first element that passes the test.
* Returns **-1** if no element satisfies the condition.

---

## Examples

```javascript
const numbers = [10, 20, 30, 40, 50];
const index = numbers.findIndex(num => num > 25);
console.log(index); // Output: 2
```

---

## Comparison with `find()`

| Method        | Returns | Use Case                              |
| ------------- | ------- | ------------------------------------- |
| `find()`      | Element | Get the element itself                |
| `findIndex()` | Index   | Get the position/index of the element |

---

## When to Use `findIndex()`

* When you need the **index** of an element rather than the element itself.
* Useful for **updating or removing** elements in an array.
* Works well with objects in arrays.

---

## Tips for Exams & Interviews

1. `findIndex()` **stops execution once a match is found**.
2. Returns **-1** if no element passes the test.
3. Callback can access `element`, `index`, and `array`.
4. Know the difference between `find()` and `findIndex()`.
5. Often used in **CRUD operations** on arrays of objects.

---

## 50 Interview Questions & Answers on `findIndex()`

1. **What is `findIndex()` in JavaScript?**

   * `findIndex()` is an array method that returns the **index of the first element** satisfying the callback function condition. Returns `-1` if no element matches.

2. **What is the difference between `find()` and `findIndex()`?**

   * `find()` returns the **element** itself.
   * `findIndex()` returns the **index** of the element.

3. **What does `findIndex()` return if no element matches?**

   * Returns `-1`.

4. **Can `findIndex()` be used on empty arrays?**

   * Yes, but it will always return `-1`.

5. **What parameters does the callback take?**

   * `element`, `index`, `array`.

6. **Can `thisArg` be used with `findIndex()`?**

   * Yes, `thisArg` can be provided as the second argument.

7. **Does `findIndex()` modify the original array?**

   * No, it **does not modify** the original array.

8. **Can `findIndex()` be chained with other array methods?**

   * Yes, it can be used with methods like `map()`, `filter()`, etc.

9. **What is a practical use case of `findIndex()`?**

   * Updating or removing a specific element in an array by finding its index first.

10. **Is `findIndex()` available in ES5?**

    * No, it was introduced in ES6 (ES2015).

11. **Can you use `findIndex()` with arrow functions?**

    * Yes, arrow functions are commonly used.

12. **Does `findIndex()` check every element if a match is found early?**

    * No, it stops once a match is found.

13. **Output:**

```javascript
[1,2,3].findIndex(x => x > 2);
```

```
- Answer: 2
```

14. **How to find the first negative number in `[3,-1,5,-2]`?**
- `[3,-1,5,-2].findIndex(n => n < 0)` returns `1`.

15. **Can you use `findIndex()` to remove an element?**

    * Yes, combine with `splice()`:

```javascript
const arr=[1,2,3]; const i=arr.findIndex(n=>n===2); if(i!==-1) arr.splice(i,1);
```

16. **Output:**

```javascript
['a','b','c'].findIndex((el,i)=>i===2);
```

```
- Answer: 2
```

17. **Can callback function have default parameters?**
- Yes, ES6 allows default parameters.

18. **Can `findIndex()` be polyfilled for older browsers?**

    * Yes, using a custom function with `for` loop.

19. **Difference between `indexOf` and `findIndex`?**

    * `indexOf` searches by value.
    * `findIndex` uses a callback for complex conditions.

20. **Can callback access the array inside `findIndex()`?**

    * Yes, third parameter provides the array.

21. **Output:**

```javascript
[10,20,30].findIndex((n,i)=>i===n/10);
```

```
- Answer: 2
```

22. **Output for non-matching condition:**

```javascript
[1,2,3].findIndex(x=>x>10);
```

```
- Answer: -1
```

23. **Can `findIndex()` be used on array of objects?**
- Yes, e.g., `users.findIndex(u=>u.id===2)`

24. **Output:**

```javascript
[,,2,3].findIndex(x=>x===undefined);
```

```
- Answer: -1 (sparse array skips empty slots)
```

25. **Find first prime in `[4,6,7,9]` using `findIndex()`**
- `[4,6,7,9].findIndex(n=>n%2!==0 && n!==1)` returns `2`

26. **Using `findIndex()` with multiple conditions**

    * `arr.findIndex(n=>n>5 && n%2===0)`

27. **Output:**

```javascript
[0,1,2,3].findIndex(Boolean);
```

```
- Answer: 1 (first truthy value)
```

28. **Can `findIndex()` be used inside `map()` or `forEach()`?**
- Yes, can be nested.

29. **Why prefer `findIndex()` over manual `for` loop?**

    * Cleaner, concise, readable code.

30. **Output:**

```javascript
[1,2,3].findIndex((n,i,arr)=>arr[i]===2);
```

```
- Answer: 1
```

31. **Can `findIndex()` return floating numbers?**
- No, it always returns an integer index or -1.

32. **How to update object property using `findIndex()`?**

```javascript
let users=[{id:1},{id:2}]; let i=users.findIndex(u=>u.id===2); if(i!==-1) users[i].name='Bob';
```

33. **Output for empty callback:**

```javascript
[1,2,3].findIndex(()=>false);
```

```
- Answer: -1
```

34. **Can `findIndex()` work on arrays returned by `filter()`?**
- Yes, on any array.

35. **Difference between `findIndex()` and `some()`?**

    * `some()` returns boolean, `findIndex()` returns index.

36. **Output:**

```javascript
['x','y','z'].findIndex(el=>el==='y');
```

```
- Answer: 1
```

37. **Use case in CRUD applications:**
- Locate item index to update/delete.

38. **Can `findIndex()` skip holes in sparse arrays?**

    * Yes, empty slots are skipped.

39. **Output:**

```javascript
[1,3,5,7].findIndex(n=>n%2===0);
```

```
- Answer: -1
```

40. **Using `findIndex()` with complex objects:**

```javascript
users.findIndex(u=>u.age>18 && u.active);
```

41. **Can `findIndex()` be combined with `splice()`?**

    * Yes, to remove an element at returned index.

42. **Output:**

```javascript
[2,4,6].findIndex((x,i)=>i===x/2);
```

```
- Answer: 1
```

43. **Is `findIndex()` faster than `for` loop?**
- Similar, but `for` may be slightly faster for very large arrays.

44. **Can `findIndex()` be used in functional programming style?**

    * Yes, works well with immutable data.

45. **Output:**

```javascript
[10,20,30].findIndex(n=>n===25);
```

```
- Answer: -1
```

46. **Why `findIndex()` is preferred in interviews?**
- Shows understanding of ES6 array methods and clean code.

47. **Output:**

```javascript
[1,2,3,4].findIndex((n,i)=>i%2===0 && n>1);
```

```
- Answer: 2
```

48. **Can `findIndex()` work with `thisArg` for context?**
- Yes, callback can use `this` from `thisArg`.

49. **Output:**

```javascript
['apple','banana'].findIndex(x=>x.startsWith('b'));
```

```
- Answer: 1
```

50. **Best practice for `findIndex()`?**
- Always check for `-1` before using index to avoid errors. Use arrow functions for readability.

---

This README provides **50 logical and professional interview questions with detailed answers** on `findIndex()`, ready to **download as a single click PDF-style reference** for interviews and exams.
