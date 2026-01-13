# JavaScript `slice()` Method – 50 Exam-Focused MCQs

---

## 📌 About This File

This document contains **50 high-quality Multiple Choice Questions (MCQs)** focused **only on the `slice()` method in JavaScript**.

* Designed for **exams, tests, and interviews**
* Options are structured so learners can **try first**
* **Answer Key is placed at the bottom** for self-checking
* Written in a **PDF-style README format** for easy one-click download

---

## 🧠 MCQs on `slice()`

### 1. What does `slice()` do?

A. Modifies the original array
B. Returns a shallow copy of a portion of an array
C. Removes elements from an array
D. Sorts an array

### 2. Does `slice()` mutate the original array?

A. Yes
B. No
C. Only if used with numbers
D. Only in strict mode

### 3. What is the default `begin` index in `slice()`?

A. -1
B. 0
C. 1
D. array.length

### 4. What is the default `end` index in `slice()`?

A. 0
B. -1
C. array.length
D. undefined

### 5. Which of these is correct syntax?

A. array.slice(begin, end)
B. array.slice(end, begin)
C. array.slice(startIndex, deleteCount)
D. array.slice(item)

### 6. If `begin` is negative, what does it mean?

A. Start from beginning
B. Count from the end
C. Throw error
D. Ignore the parameter

### 7. If `end` is negative, what does it mean?

A. Count from the beginning
B. Count from the end
C. End at 0
D. Throw error

### 8. What will `[1,2,3,4,5].slice(1,3)` return?

A. [1,2]
B. [2,3]
C. [2,3,4]
D. [3,4]

### 9. What will `[1,2,3,4,5].slice(-3,-1)` return?

A. [3,4]
B. [2,3]
C. [4,5]
D. [3,4,5]

### 10. What will `[1,2,3].slice()` return?

A. []
B. [1,2,3]
C. [[1,2,3]]
D. undefined

---

### 11. Does `slice()` work on strings?

A. Yes
B. No
C. Only in ES6
D. Only if converted to array

### 12. What will `'JavaScript'.slice(0,4)` return?

A. 'Java'
B. 'JavaS'
C. 'JavaScript'
D. 'Jav'

### 13. Difference between `slice()` and `splice()`?

A. `slice` modifies array, `splice` doesn’t
B. `slice` returns new array, `splice` removes elements
C. No difference
D. `slice` only works on strings

### 14. Can `slice()` be used on NodeLists?

A. Yes
B. No
C. Only with map
D. Only with Array.from()

### 15. What is returned if `begin` >= array.length?

A. Last element
B. []
C. Error
D. Full array

### 16. What happens if `end` > array.length?

A. Returns elements till array end
B. Throws error
C. Returns empty array
D. Ignores parameter

### 17. Can `slice()` handle floating-point indices?

A. No
B. Yes, they are floored to integer
C. Yes, they are rounded
D. Only in strict mode

### 18. Is `slice()` chainable?

A. Yes
B. No
C. Only with strings
D. Only with arrays

### 19. How to copy an entire array using `slice()`?

A. array.slice()
B. array.slice(0)
C. Both A & B
D. array.slice(-array.length)

### 20. Can `slice()` be used with `map()` directly?

A. No
B. Yes, returns new array
C. Only after converting to string
D. Only with numbers

---

### 21. What does `slice(2)` mean?

A. Start at index 2, go to end
B. Start at index 0, end at 2
C. Start at 2, end at 2
D. Error

### 22. What will `[1,2,3,4].slice(-2)` return?

A. [3,4]
B. [2,3]
C. [1,2]
D. [4]

### 23. What will `[1,2,3].slice(1,1)` return?

A. [2]
B. [1]
C. []
D. [1,2]

### 24. What is the behavior with sparse arrays?

A. Sparse slots are ignored
B. Sparse slots are copied
C. Throws error
D. Converts to zeros

### 25. Does `slice()` support multi-dimensional arrays?

A. Yes, shallow copy
B. Yes, deep copy
C. No
D. Only for 2D arrays

### 26. Can `slice()` extract last element?

A. slice(-1)
B. slice(array.length-1)
C. Both A & B
D. None

### 27. Can `slice()` be used to remove elements?

A. Yes
B. No, use splice()
C. Only in ES6
D. Only with strings

### 28. Output of `[1,2,3,4].slice(1,100)`?

A. [2,3,4]
B. Error
C. [1,2,3,4]
D. [2,3]

### 29. What happens if `begin` is negative and absolute value > array.length?

A. Starts at 0
B. Error
C. Returns empty array
D. Starts at 1

### 30. Can `slice()` be applied to `arguments` object?

A. Yes
B. No
C. Only in ES5
D. Only with numbers

---

### 31. Output: `[1,2,3].slice(-5,2)`?

A. [1,2]
B. [2,3]
C. []
D. [3]

### 32. Output: `[1,2,3,4,5].slice(-2,-5)`?

A. []
B. [3,4,5]
C. [4,5]
D. [5]

### 33. Can `slice()` be used on strings to remove last character?

A. str.slice(0,-1)
B. str.slice(1)
C. str.slice(-1)
D. str.slice()

### 34. Difference between `slice()` and `concat()`?

A. slice modifies original
B. concat merges arrays, slice extracts portion
C. slice returns new array, concat returns same
D. No difference

### 35. How does `slice()` behave with empty array?

A. Returns []
B. Error
C. Undefined
D. Null

### 36. What is a shallow copy in context of slice?

A. Only first-level elements are copied
B. Deep copy
C. Copies elements & nested objects
D. Mutates original

### 37. Can `slice()` be used with `Set`?

A. No, need Array.from()
B. Yes directly
C. Only in ES6
D. Only with numbers

### 38. Can slice extract characters from string?

A. Yes
B. No
C. Only in ES5
D. Only with array

### 39. Does `slice()` work with negative indices in strings?

A. Yes
B. No
C. Only with array
D. Only in ES6

### 40. Can `slice()` be used to clone array of objects?

A. Shallow copy
B. Deep copy
C. Only numbers
D. Not possible

### 41. Output: `[1,2,3].slice(0,0)`?

A. []
B. [1]
C. [1,2]
D. Error

### 42. Output: `'Hello'.slice(-2)`?

A. 'lo'
B. 'He'
C. 'el'
D. 'o'

### 43. Can `slice()` accept floating-point indices?

A. Yes, they are floored
B. Rounded
C. Error
D. Ignored

### 44. Can `slice()` extract elements dynamically in loop?

A. Yes
B. No
C. Only with strings
D. Only ES6

### 45. Can you use `slice()` on multidimensional array?

A. Shallow copy works
B. Deep copy works
C. Only 2D array
D. Not possible

### 46. Output: `[1,2,3,4].slice(2)`?

A. [3,4]
B. [1,2]
C. [2]
D. [4]

### 47. Output: `[1,2,3].slice(-1)`?

A. [3]
B. [1]
C. [2]
D. [1,2]

### 48. Difference between slice and filter?

A. slice mutates array
B. filter modifies array
C. slice extracts by indices, filter uses condition
D. No difference

### 49. Output: `[1,2,3].slice(3)`?

A. []
B. [3]
C. [1,2,3]
D. Error

### 50. What is the best one-line professional definition for interviews?

A. slice() modifies array in place
B. slice() returns a shallow copy of a portion of an array or string without modifying the original
C. slice() removes elements
D. slice() sorts array

---

## ✅ Answer Key

1. B
2. B
3. B
4. C
5. A
6. B
7. B
8. B
9. A
10. B
11. A
12. A
13. B
14. D
15. B
16. A
17. B
18. A
19. C
20. B
21. A
22. A
23. C
24. B
25. A
26. C
27. B
28. A
29. A
30. A
31. A
32. A
33. A
34. B
35. A
36. A
37. A
38. A
39. A
40. A
41. A
42. A
43. A
44. A
45. A
46. A
47. A
48. C
49. A
50. B
