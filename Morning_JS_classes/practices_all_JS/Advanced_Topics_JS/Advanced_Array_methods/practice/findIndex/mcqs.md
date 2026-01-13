# JavaScript `findIndex()` Method - MCQs

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [Parameters](#parameters)
4. [Return Value](#return-value)
5. [Examples](#examples)
6. [Comparison with `find()`](#comparison-with-find)
7. [When to Use `findIndex()`](#when-to-use-findindex)
8. [Tips for Exams & Interviews](#tips-for-exams--interviews)
9. [50 MCQs on `findIndex()`](#50-mcqs-on-findindex)

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

## 50 MCQs on `findIndex()`

### Easy (1-10)

1. What does `findIndex()` return if no element satisfies the condition?

   * a) null  b) undefined  c) -1  d) 0
2. Correct syntax of `findIndex()`?

   * a) array.findIndex(callback, thisArg)  b) array.findIndex(element)  c) array.findIndex()  d) array.findIndex(callback(element))
3. `findIndex()` is a method of which type?

   * a) String  b) Array  c) Object  d) Number
4. Output?

```javascript
const arr = [5, 10, 15];
console.log(arr.findIndex(x => x > 10));
```

* a) 1  b) 2  c) 10  d) -1

5. Output?

```javascript
const arr = [1,2,3];
console.log(arr.findIndex(x => x === 2));
```

* a) 1  b) 2  c) 0  d) -1

6. How many parameters can the callback of `findIndex()` take?

   * a) 1  b) 2  c) 3  d) 4
7. Does `findIndex()` modify the original array?

   * a) Yes  b) No  c) Only for objects  d) Only for numbers
8. Return value of `findIndex()` for empty array?

   * a) 0  b) undefined  c) -1  d) null
9. Which of these will work?

```javascript
[10,20,30].findIndex(n => n > 15);
```

* a) Yes  b) No

10. Callback function can access the array itself?

* a) Yes  b) No

### Moderate (11-30)

11. Output?

```javascript
const arr = [1,2,3,4];
console.log(arr.findIndex(x => x % 2 === 0));
```

* a) 0  b) 1  c) 2  d) 3

12. Find the index of first negative number:

```javascript
const nums = [3,-1,5,-2];
```

* a) 0  b) 1  c) 2  d) -1

13. Can `thisArg` affect callback behavior?

* a) Yes  b) No

14. Which method returns element instead of index?

* a) findIndex  b) find  c) filter  d) map

15. Output?

```javascript
const arr = ['a','b','c'];
console.log(arr.findIndex((el, i) => i === 2));
```

* a) 0  b) 1  c) 2  d) -1

16. Can `findIndex()` be chained?

* a) Yes  b) No

17. Can callback be an arrow function?

* a) Yes  b) No

18. Does `findIndex()` check all elements if match is found early?

* a) Yes  b) No

19. Find index of first even number in `[1,3,5,6,7]`

* a) 0  b) 2  c) 3  d) -1

20. Using `findIndex()` on a sparse array skips empty slots?

* a) Yes  b) No

21. Which of these returns -1?

```javascript
[1,2,3].findIndex(n => n > 10);
```

* a) 0  b) -1  c) undefined  d) null

22. Callback function parameters order?

* a) element, array, index  b) index, element, array  c) element, index, array  d) array, index, element

23. Find index of object with id=3:

```javascript
const users = [{id:1},{id:2},{id:3}];
```

* a) 2  b) 1  c) 3  d) -1

24. Does `findIndex()` work on strings?

* a) Yes  b) No

25. Output?

```javascript
[].findIndex(x => x > 0);
```

* a) 0  b) -1  c) undefined  d) null

26. Can `findIndex()` be used to remove element?

* a) Yes  b) No

27. Difference between `indexOf` and `findIndex`?

* a) None  b) Callback vs direct value  c) Returns element  d) Returns array

28. Can you access array length inside callback?

* a) Yes  b) No

29. Output?

```javascript
[10,20,30].findIndex((n,i) => i===1);
```

* a) 0  b) 1  c) 2  d) -1

30. `findIndex()` is part of which ECMAScript version?

* a) ES5  b) ES6  c) ES2015  d) Both b & c

### Difficult (31-50)

31. Output?

```javascript
const arr = [1,2,3,4];
console.log(arr.findIndex(x => x > 4));
```

32. Using `findIndex` to update array element directly?
33. Can `findIndex()` return floating point number?
34. First index of prime number in `[4,6,7,9]`
35. Output?

```javascript
[,,2,3].findIndex(x => x === undefined);
```

36. Using `findIndex()` inside a map?
37. Can callback have default parameters?
38. Output?

```javascript
[1,2,3].findIndex((n,i,arr) => arr[i] === 2);
```

39. Using `findIndex` with nested arrays?
40. Output?

```javascript
const arr = [0,1,2,3];
console.log(arr.findIndex(Boolean));
```

41. Using `findIndex()` on array of objects with multiple conditions?
42. Output?

```javascript
const arr = [1,2,3];
console.log(arr.findIndex(x => x > 0 && x % 2 === 0));
```

43. Can `findIndex()` be polyfilled for older browsers?
44. Output?

```javascript
['a','b','c'].findIndex(x => x==='d');
```

45. Using `findIndex()` with `thisArg` example?
46. Output?

```javascript
[10,20,30].findIndex((n,i) => i === n/10);
```

47. Using `findIndex()` with `splice()` to remove element?
48. Output?

```javascript
[1,3,5,7].findIndex(n => n % 2 === 0);
```

49. Can `findIndex()` be combined with `filter()`?
50. Output?

```javascript
[2,4,6].findIndex((x,i) => i === x/2);
```

### Answer Key

1. c 2. a 3. b 4. b 5. a 6. c 7. b 8. c 9. a 10. a
2. b 12. b 13. a 14. b 15. c 16. a 17. a 18. b 19. c 20. a
3. b 22. c 23. a 24. b 25. b 26. a 27. b 28. a 29. b 30. d
4. -1 32. Yes 33. No 34. 2 35. -1 36. Yes 37. Yes 38. 1 39. Yes 40. 1
5. Yes 42. 1 43. Yes 44. -1 45. Yes 46. 2 47. Yes 48. -1 49. Yes 50. 1
