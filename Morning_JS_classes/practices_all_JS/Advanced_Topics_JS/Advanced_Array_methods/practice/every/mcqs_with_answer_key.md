# JavaScript `every()` Method - 50 MCQs with Answer Key

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [50 MCQs](#50-mcqs)
4. [Answer Key](#answer-key)

---

## Introduction

The `every()` method tests whether **all elements** in the array pass a **callback function**. Returns **true** if all elements satisfy the test, otherwise **false**.

---

## Syntax

```javascript
array.every(callback(element, index, array), thisArg)
```

---

## 50 MCQs

### Easy (1-10)

1. What does `every()` return if all elements pass the test?

   * a) true  b) false  c) null  d) undefined
2. What does `every()` return if any element fails the test?

   * a) true  b) false
3. Correct syntax of `every()`?

   * a) array.every(callback, thisArg)  b) array.every(element)  c) array.every()  d) array.every(callback(element))
4. `every()` is a method of which type?

   * a) String  b) Array  c) Object  d) Number
5. Output?

```javascript
[1,2,3].every(n => n > 0);
```

* a) true  b) false

6. Output?

```javascript
[1,2,3].every(n => n > 2);
```

* a) true  b) false

7. How many parameters can the callback of `every()` take?

   * a) 1  b) 2  c) 3  d) 4
8. Does `every()` modify the original array?

   * a) Yes  b) No
9. Return value of `every()` for empty array?

   * a) true  b) false
10. Callback function can access the array itself?

* a) Yes  b) No

### Moderate (11-30)

11. Output?

```javascript
[1,2,3,4].every(x => x < 5);
```

12. Output?

```javascript
[1,2,3,4].every(x => x % 2 === 0);
```

13. Can `thisArg` affect callback behavior?
14. Which method returns boolean if at least one element passes?
15. Output?

```javascript
['a','b','c'].every((el, i) => typeof el === 'string');
```

16. Can `every()` be chained?
17. Can callback be an arrow function?
18. Does `every()` stop iterating early if a failure is found?
19. Check if `[2,4,6,8]` all are even numbers?
20. Using `every()` on a sparse array skips empty slots?
21. Which of these returns false?

```javascript
[1,2,3].every(n => n > 2);
```

22. Callback function parameters order?
23. Find if all objects in `[{id:1},{id:2},{id:3}]` have id > 0?
24. Does `every()` work on strings?
25. Output?

```javascript
[].every(x => x > 0);
```

26. Can `every()` be used to remove element?
27. Difference between `every()` and `some()`?
28. Can you access array length inside callback?
29. Output?

```javascript
[10,20,30].every((n,i) => n/10 === i+1);
```

30. `every()` is part of which ECMAScript version?

### Difficult (31-50)

31. Output?

```javascript
[1,2,3,4].every(x => x > 4);
```

32. Using `every()` inside a map?
33. Can `every()` return number?
34. First even check in `[1,3,5,6,7]` using `every()`?
35. Output?

```javascript
[,,2,3].every(x => x !== undefined);
```

36. Using `every()` with nested arrays?
37. Can callback have default parameters?
38. Output?

```javascript
[1,2,3].every((n,i,arr) => arr[i] === n);
```

39. Using `every()` with objects having multiple conditions?
40. Output?

```javascript
[0,1,2,3].every(Boolean);
```

41. Using `every()` in CRUD applications?
42. Output?

```javascript
[2,4,6].every(n => n % 2 === 0);
```

43. Can `every()` be polyfilled for older browsers?
44. Output?

```javascript
['a','b','c'].every(x => x==='c');
```

45. Using `every()` with `thisArg` example?
46. Output?

```javascript
[10,20,30].every((n,i) => i === n/10-1);
```

47. Using `every()` with `splice()` to remove element?
48. Output?

```javascript
[1,3,5,7].every(n => n % 2 === 0);
```

49. Can `every()` be combined with `filter()`?
50. Output?

```javascript
[2,4,6].every((x,i) => i === x/2-1);
```

---

## Answer Key

1. a 2. b 3. a 4. b 5. a 6. b 7. c 8. b 9. a 10. a
2. true 12. false 13. a 14. some 15. true 16. a 17. a 18. a 19. true 20. a
3. false 22. element,index,array 23. true 24. b 25. true 26. No 27. every checks all, some checks at least one 28. Yes 29. true 30. ES6
4. false 32. Yes 33. No 34. false 35. true 36. Yes 37. Yes 38. true 39. Yes 40. false
5. Yes 42. true 43. Yes 44. false 45. Yes 46. true 47. Yes 48. false 49. Yes 50. true
