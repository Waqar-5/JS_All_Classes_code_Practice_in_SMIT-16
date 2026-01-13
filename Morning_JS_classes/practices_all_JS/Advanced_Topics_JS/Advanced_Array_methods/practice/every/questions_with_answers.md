# JavaScript `every()` Method - 50 Interview Questions & Detailed Answers

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [50 Interview Questions & Answers](#50-interview-questions--answers)

---

## Introduction

The `every()` method in JavaScript checks whether **all elements** in an array satisfy the provided **callback function**. It returns a **boolean value**: `true` if all elements pass the test, otherwise `false`. It is widely used in **data validation, conditional checks, and interviews**.

---

## Syntax

```javascript
array.every(callback(element, index, array), thisArg)
```

* **callback:** Function to test each element.
* **element:** Current element being processed.
* **index:** Index of the current element.
* **array:** Array on which `every()` was called.
* **thisArg (optional):** Value to use as `this` inside the callback.

---

## 50 Interview Questions & Answers

1. **What is `every()` in JavaScript?**

   * `every()` is an array method that returns `true` if all elements satisfy the condition provided by the callback function.

2. **What does `every()` return for an empty array?**

   * Returns `true`.

3. **Can `every()` modify the original array?**

   * No, it does not modify the original array.

4. **Does `every()` iterate through all elements if a failure is found?**

   * No, it stops immediately once a failing element is encountered.

5. **Difference between `every()` and `some()`?**

   * `every()` checks if all elements pass; `some()` checks if at least one element passes.

6. **Difference between `every()` and `find()`?**

   * `every()` returns a boolean; `find()` returns the first element that passes the test.

7. **Can callback be an arrow function?**

   * Yes, arrow functions are commonly used.

8. **What are the parameters of the callback function?**

   * `element`, `index`, and `array`.

9. **What is `thisArg` used for?**

   * To provide a `this` context inside the callback function.

10. **Output:**

```javascript
[1,2,3].every(n => n > 0);
```

* Answer: `true`

11. **Output:**

```javascript
[1,2,3].every(n => n > 2);
```

* Answer: `false`

12. **Can `every()` work on arrays of objects?**

* Yes, e.g., `users.every(u => u.active)`.

13. **Output:**

```javascript
['apple','banana','cherry'].every(f => typeof f === 'string');
```

* Answer: `true`

14. **Can `every()` be chained with other array methods?**

* Yes, with `map()`, `filter()`, etc.

15. **Output:**

```javascript
[2,4,6,8].every(n => n % 2 === 0);
```

* Answer: `true`

16. **Output:**

```javascript
[1,2,3,4].every(n => n < 5);
```

* Answer: `true`

17. **Output for sparse array:**

```javascript
[,,2,3].every(n => n !== undefined);
```

* Answer: `true` (skips empty slots)

18. **Can `every()` validate form fields?**

* Yes, to check if all fields meet criteria.

19. **Output using index:**

```javascript
[10,20,30].every((n,i) => n/10 === i+1);
```

* Answer: `true`

20. **Does `every()` work on nested arrays?**

* Yes, but you need to iterate nested arrays inside the callback.

21. **Can `every()` be used with `thisArg`?**

* Yes, to provide a specific context.

22. **Output:**

```javascript
[1,3,5].every(n => n % 2 === 0);
```

* Answer: `false`

23. **Use case in CRUD operations:**

* Ensure all objects meet conditions before updating or deleting.

24. **Output:**

```javascript
[0,1,2].every(Boolean);
```

* Answer: `false`

25. **Can callback have default parameters?**

* Yes.

26. **Output:**

```javascript
[1,2,3,4].every((n,i,arr) => arr[i] === n);
```

* Answer: `true`

27. **Output:**

```javascript
[].every(n => n > 0);
```

* Answer: `true`

28. **Difference between `every()` and `filter()`?**

* `every()` returns boolean; `filter()` returns an array of elements passing the test.

29. **Output:**

```javascript
[1,2,3,4].every(n => n < 4);
```

* Answer: `false`

30. **Can `every()` be polyfilled for older browsers?**

* Yes, using a `for` loop.

31. **Output:**

```javascript
['a','b','c'].every(x => x==='c');
```

* Answer: `false`

32. **Using `every()` for multiple conditions:**

```javascript
users.every(u => u.active && u.age > 18);
```

33. **Output:**

```javascript
[10,20,30].every(n => n >= 10);
```

* Answer: `true`

34. **Using `every()` for data validation in forms:**

* Check if all fields are non-empty and valid.

35. **Output:**

```javascript
[1,2,3].every((n,i) => i === n-1);
```

* Answer: `true`

36. **Can `every()` be used in event handling?**

* Yes, to check if all event conditions are met.

37. **Output:**

```javascript
[1,2,3,4].every(n => n > 0 && n < 5);
```

* Answer: `true`

38. **Output:**

```javascript
[1,2,3,4].every(n => n % 2 === 0);
```

* Answer: `false`

39. **Best practice in interviews:**

* Always check for early exit and boolean return.

40. **Output:**

```javascript
[2,4,6].every((n,i) => i === n/2-1);
```

* Answer: `true`

41. **Output:**

```javascript
[1,2,3,4].every((n,i,arr) => arr.includes(n));
```

* Answer: `true`

42. **Using `every()` with objects having nested properties:**

* `users.every(u => u.address.city !== '')`

43. **Output:**

```javascript
[1,3,5,7].every(n => n % 2 === 0);
```

* Answer: `false`

44. **Output:**

```javascript
[10,20,30].every((n,i) => n === (i+1)*10);
```

* Answer: `true`

45. **Using `every()` with string arrays:**

* `words.every(w => w.length > 0)` checks if all words are non-empty.

46. **Output:**

```javascript
[1,2,3].every(n => n < 4);
```

* Answer: `true`

47. **Can `every()` be combined with `map()` or `filter()`?**

* Yes, often used to preprocess data before validation.

48. **Output:**

```javascript
[0,1,2].every(n => n > 0);
```

* Answer: `false`

49. **Output:**

```javascript
['apple','banana'].every(x => x.startsWith('a'));
```

* Answer: `false`

50. **Using `every()` in real-world projects:**

* Validate all form inputs, check dataset integrity, or ensure conditions for all items before executing operations.

---

This README provides **50 professional interview questions with detailed answers** on the `every()` method, formatted for **one-click download**, easy to study, and highly suitable for **exams and interviews**.
