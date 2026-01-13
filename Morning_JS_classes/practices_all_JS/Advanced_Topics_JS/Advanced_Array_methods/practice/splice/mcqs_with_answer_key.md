# JavaScript `splice()` Method – 50 Exam-Focused MCQs

---

## 📌 About This File

This document contains **50 high-quality Multiple Choice Questions (MCQs)** focused **only on the `splice()` method in JavaScript**.

* Designed for **exams, tests, and interviews**
* Options allow **self-attempt before checking answers**
* **Answer Key is placed at the bottom**
* Written in a **PDF-style README format** for easy one-click download

---

## 🧠 MCQs on `splice()`

### 1. What is the primary purpose of `splice()`?

A. Extract a portion of an array
B. Modify an array by adding or removing elements
C. Sort an array
D. Clone an array

### 2. Does `splice()` mutate the original array?

A. Yes
B. No
C. Only if deleteCount is specified
D. Only in strict mode

### 3. Which of the following is the correct syntax?

A. array.splice(start, deleteCount, ...items)
B. array.splice(begin, end)
C. array.splice(item)
D. array.splice()

### 4. What does `deleteCount` parameter do?

A. Specifies how many elements to add
B. Specifies how many elements to remove
C. Specifies the start index
D. Optional return value

### 5. What happens if `deleteCount` is 0?

A. Removes nothing, can add elements
B. Removes everything
C. Throws error
D. Adds nothing

### 6. What does `splice(2,0,'a')` do?

A. Removes element at index 2
B. Inserts 'a' at index 2 without removing elements
C. Replaces element at index 2
D. Throws error

### 7. What does `splice(1,2,'x','y')` do?

A. Removes 1 element and adds x,y
B. Removes 2 elements starting at index 1 and adds x,y
C. Adds x,y at start
D. Removes all elements

### 8. What is returned by `splice()`?

A. The new array after modification
B. The removed elements in an array
C. Number of elements removed
D. Undefined

### 9. Does `splice()` work with negative start index?

A. Yes, counts from the end
B. No
C. Only in ES6
D. Only for strings

### 10. What happens if start index is greater than array length?

A. Inserts at the end
B. Throws error
C. Removes last element
D. No operation

---

### 11. Can `splice()` remove all elements from a certain index?

A. Yes, by omitting deleteCount
B. No
C. Only with negative index
D. Only with strings

### 12. Output: `[1,2,3,4].splice(1,2)`?

A. [2,3]
B. [1,2]
C. [3,4]
D. [1,2,3,4]

### 13. Output array after `[1,2,3,4].splice(1,2)`?

A. [1,4]
B. [2,3,4]
C. [1,2]
D. [3,4]

### 14. Can `splice()` add elements without removing any?

A. Yes
B. No
C. Only with strings
D. Only ES6

### 15. Can `splice()` replace elements?

A. Yes
B. No
C. Only first element
D. Only last element

### 16. Difference between `splice()` and `slice()`?

A. splice() mutates array, slice() doesn’t
B. slice() mutates array, splice() doesn’t
C. Both modify array
D. Both are non-mutating

### 17. What happens if negative start index absolute value > array length?

A. Starts from index 0
B. Error
C. Deletes nothing
D. Adds at start

### 18. Can `splice()` remove the last element?

A. Yes, with `splice(-1,1)`
B. No
C. Only slice can
D. Only pop can

### 19. Can `splice()` remove first element?

A. Yes, `splice(0,1)`
B. No
C. Only shift
D. Only slice

### 20. Can `splice()` handle zero-length arrays?

A. Yes
B. No
C. Only if adding elements
D. Throws error

---

### 21. Output: `[1,2,3,4].splice(0,2,'a')`?

A. [1,2]
B. [3,4]
C. [1,2,3,4]
D. ['a']

### 22. After `[1,2,3,4].splice(0,2,'a')`, the array?

A. ['a',3,4]
B. [1,2,3,4]
C. ['a']
D. [3,4]

### 23. Can `splice()` be used to insert multiple elements?

A. Yes
B. No
C. Only one at a time
D. Only numbers

### 24. Can `splice()` be chained?

A. Not directly, returns array of removed elements
B. Yes
C. Only with strings
D. Only with ES6

### 25. Can `splice()` be used with strings?

A. No
B. Yes
C. Only slice works
D. Only arrays

### 26. Output: `[1,2,3].splice(3,0,'x')`?

A. [1,2,3,'x']
B. ['x']
C. [1,2,3]
D. Error

### 27. Output: `[1,2,3,4].splice(-2,1)`?

A. [3]
B. [4]
C. [2]
D. [1]

### 28. Can `splice()` remove all elements?

A. Yes, `splice(0)`
B. No
C. Only slice
D. Only pop

### 29. Can `splice()` work with array-like objects?

A. Yes, with call/apply
B. No
C. Only arrays
D. Only ES6

### 30. Can you remove elements and keep track of them?

A. Yes, the returned array contains removed elements
B. No
C. Only slice
D. Only push/pop

### 31. Output: `[1,2,3,4].splice(1)`?

A. [2,3,4]
B. [1]
C. [1,2,3,4]
D. []

### 32. Output array after `[1,2,3,4].splice(1)`?

A. [1]
B. [2,3,4]
C. []
D. [1,2,3,4]

### 33. Can `splice()` remove no elements but insert?

A. Yes, deleteCount = 0
B. No
C. Only slice
D. Only pop

### 34. Output: `[1,2,3,4].splice(1,2,'x')`?

A. Removed: [2,3], Array: [1,'x',4]
B. Removed: [1,2], Array: ['x',3,4]
C. Removed: [], Array: [1,'x',2,3,4]
D. Removed: [3,4], Array: [1,2,'x']

### 35. Can `splice()` insert elements at the end?

A. Yes, using start = array.length
B. No
C. Only slice
D. Only push

### 36. Can `splice()` remove elements from negative start index?

A. Yes
B. No
C. Only first element
D. Only last element

### 37. Output: `[1,2,3].splice(0,0,'a','b')`?

A. [1,2,3] and added ['a','b']
B. ['a','b',1,2,3]
C. ['a','b']
D. Error

### 38. Can `splice()` return empty array?

A. Yes, if deleteCount = 0
B. No
C. Only slice
D. Never

### 39. Output: `[1,2,3,4].splice(2,1,'x','y')`?

A. Removes 1 element at index 2, array becomes [1,2,'x','y',4]
B. Removes 2 elements
C. Only adds elements
D. Error

### 40. Can `splice()` remove elements starting from index 0?

A. Yes
B. No
C. Only slice
D. Only pop

### 41. Difference between splice and pop?

A. pop removes last element, splice can remove any
B. pop returns undefined, splice returns array
C. splice cannot remove last element
D. pop inserts elements

### 42. Difference between splice and shift?

A. shift removes first element, splice can remove any
B. shift mutates array, splice doesn’t
C. splice removes last only
D. shift returns array

### 43. Can `splice()` add elements without deleting?

A. Yes, deleteCount = 0
B. No
C. Only slice
D. Only push

### 44. Can `splice()` replace multiple elements?

A. Yes, specify deleteCount >1 and items >1
B. No
C. Only one element
D. Only last element

### 45. Can you use splice in functional programming safely?

A. Yes, if you clone array first
B. No
C. Only slice
D. Only map

### 46. Output: `[1,2,3].splice(5,2,'x')`?

A. Adds 'x' at end, returns []
B. Error
C. Removes last 2 elements
D. Adds 'x' at start

### 47. Output: `[1,2,3,4,5].splice(2)`?

A. Removes elements from index 2 to end [3,4,5]
B. Removes index 0
C. Returns []
D. Error

### 48. Can `splice()` be used to merge arrays?

A. Indirectly by inserting an array using spread
B. Directly
C. No
D. Only concat

### 49. Can `splice()` remove elements from empty array?

A. Returns []
B. Error
C. Removes undefined
D. Cannot be used

### 50. One-line interview definition?

A. splice() extracts array portion
B. splice() modifies an array by removing, adding, or replacing elements and returns removed elements
C. splice() clones array
D. splice() sorts array

---

## ✅ Answer Key

1. B
2. A
3. A
4. B
5. A
6. B
7. B
8. B
9. A
10. A
11. A
12. A
13. A
14. A
15. A
16. A
17. A
18. A
19. A
20. A
21. A
22. A
23. A
24. A
25. A
26. A
27. A
28. A
29. A
30. A
31. A
32. A
33. A
34. A
35. A
36. A
37. B
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
48. A
49. A
50. B
