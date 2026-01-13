# JavaScript `some()` Method - 50 MCQs with Answer Key

## Table of Contents

1. [Introduction](#introduction)
2. [Syntax](#syntax)
3. [50 MCQs](#50-mcqs)
4. [Answer Key](#answer-key)

---

## Introduction

The `some()` method tests whether **at least one element** in the array passes a **callback function**. Returns **true** if a match is found, **false** otherwise.

---

## Syntax

```javascript
array.some(callback(element, index, array), thisArg)
```

---

## 50 MCQs

### Easy (1-10)

1. What does `some()` return if no element passes the test?

   * a) null  b) undefined  c) false  d) -1
2. Correct syntax of `some()`?

   * a) array.some(callback, thisArg)  b) array.some(element)  c) array.some()  d) array.some(callback(element))
3. `some()` is a method of which type?

   * a) String  b) Array  c) Object  d) Number
4. Output?

```javascript
[1,2,3].some(n => n > 2);
```

* a) true  b) false  c) 3  d) 2

5. Output?

```javascript
[1,2,3].some(n => n > 5);
```

* a) true  b) false  c) -1  d) 0

6. How many parameters can the callback of `some()` take?

   * a) 1  b) 2  c) 3  d) 4
7. Does `some()` modify the original array?

   * a) Yes  b) No  c) Only for objects  d) Only for numbers
8. Return value of `some()` for empty array?

   * a) 0  b) undefined  c) false  d) null
9. Output?

```javascript
[10,20,30].some(n => n > 15);
```

* a) true  b) false

10. Callback function can access the array itself?

* a) Yes  b) No

### Moderate (11-30)

11. Output?

```javascript
[1,2,3,4].some(x => x % 2 === 0);
```

12. Find if array `[3,-1,5,-2]` has a negative number?
13. Can `thisArg` affect callback behavior?
14. Which method returns boolean based on all elements?
15. Output?

```javascript
['a','b','c'].some((el, i) => i === 2);
```

16. Can `some()` be chained?
17. Can callback be an arrow function?
18. Does `some()` check all elements if match is found early?
19. Check if `[1,3,5,6,7]` has an even number?
20. Using `some()` on a sparse array skips empty slots?
21. Which of these returns false?

```javascript
[1,2,3].some(n => n > 10);
```

22. Callback function parameters order?
23. Find if object with id=3 exists in `[{id:1},{id:2},{id:3}]`?
24. Does `some()` work on strings?
25. Output?

```javascript
[].some(x => x > 0);
```

26. Can `some()` be used to remove element?
27. Difference between `some()` and `find()`?
28. Can you access array length inside callback?
29. Output?

```javascript
[10,20,30].some((n,i) => i===1);
```

30. `some()` is part of which ECMAScript version?

### Difficult (31-50)

31. Output?

```javascript
[1,2,3,4].some(x => x > 4);
```

32. Using `some()` inside a map?
33. Can `some()` return number?
34. First prime check in `[4,6,7,9]` using `some()`?
35. Output?

```javascript
[,,2,3].some(x => x === undefined);
```

36. Using `some()` with nested arrays?
37. Can callback have default parameters?
38. Output?

```javascript
[1,2,3].some((n,i,arr) => arr[i] === 2);
```

39. Using `some()` with objects having multiple conditions?
40. Output?

```javascript
[0,1,2,3].some(Boolean);
```

41. Using `some()` in CRUD applications?
42. Output?

```javascript
[1,2,3].some(x => x > 0 && x % 2 === 0);
```

43. Can `some()` be polyfilled for older browsers?
44. Output?

```javascript
['a','b','c'].some(x => x==='d');
```

45. Using `some()` with `thisArg` example?
46. Output?

```javascript
[10,20,30].some((n,i) => i === n/10);
```

47. Using `some()` with `splice()` to remove element?
48. Output?

```javascript
[1,3,5,7].some(n => n % 2 === 0);
```

49. Can `some()` be combined with `filter()`?
50. Output?

```javascript
[2,4,6].some((x,i) => i === x/2);
```

---

## Answer Key

1. c 2. a 3. b 4. a 5. b 6. c 7. b 8. c 9. a 10. a
2. true 12. true 13. a 14. every 15. true 16. a 17. a 18. b 19. true 20. a
3. false 22. element,index,array 23. true 24. b 25. false 26. No 27. some returns boolean, find returns element 28. Yes 29. true 30. ES6
4. false 32. Yes 33. No 34. true 35. false 36. Yes 37. Yes 38. true 39. Yes 40. true
5. Yes 42. true 43. Yes 44. false 45. Yes 46. true 47. Yes 48. false 49. Yes 50. true
