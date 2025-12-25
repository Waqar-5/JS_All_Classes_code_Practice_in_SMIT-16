# JavaScript Array.prototype.forEach() – Advanced MCQs

This document contains **carefully designed MCQs** on the JavaScript `forEach()` method.  
Questions are suitable for **exams, interviews, tests, and deep understanding**.

---

## 📘 Instructions
- All questions are based **only on `forEach()`**
- Choose the **most correct answer**
- **Answer Key is at the end** (not mixed with questions)

---

## 🧠 MCQs

### 1. What does `Array.prototype.forEach()` return?
A) A new array  
B) The original array  
C) A boolean  
D) `undefined`

---

### 2. Which type of function is passed to `forEach()`?
A) Constructor function  
B) Callback function  
C) Generator function  
D) Async iterator  

---

### 3. How many parameters can the `forEach()` callback receive at maximum?
A) 1  
B) 2  
C) 3  
D) 4  

---

### 4. What does the first parameter of `forEach()` callback represent?
A) Index  
B) Accumulator  
C) Current value  
D) Array length  

---

### 5. What does the second parameter of `forEach()` callback represent?
A) Value  
B) Index  
C) Array  
D) Result  

---

### 6. What does the third parameter of `forEach()` callback represent?
A) A copy of array  
B) Filtered array  
C) Original array  
D) New array  

---

### 7. Can `forEach()` be stopped using `break`?
A) Yes  
B) No  
C) Only in strict mode  
D) Only with return  

---

### 8. What happens if `return` is used inside `forEach()`?
A) Loop stops  
B) Callback stops for that iteration only  
C) Whole function stops  
D) Error is thrown  

---

### 9. Is `forEach()` synchronous or asynchronous?
A) Asynchronous  
B) Synchronous  
C) Promise-based  
D) Event-driven  

---

### 10. Can `forEach()` handle `async/await` properly?
A) Yes  
B) No  
C) Only in ES6  
D) Only in Node.js  

---

### 11. Which of the following is a correct use of `forEach()`?
A) Creating a new array  
B) Filtering values  
C) Performing side effects  
D) Returning transformed data  

---

### 12. Which method should be used instead of `forEach()` to return a new array?
A) filter()  
B) map()  
C) some()  
D) every()  

---

### 13. What happens if `forEach()` is called on an empty array?
A) Error  
B) Callback runs once  
C) Callback does not run  
D) Returns null  

---

### 14. Does `forEach()` skip empty slots in sparse arrays?
A) Yes  
B) No  
C) Converts them to undefined  
D) Throws error  

---

### 15. Can `forEach()` modify the original array?
A) No, never  
B) Yes, if elements are reassigned  
C) Only in strict mode  
D) Only with thisArg  

---

### 16. Which keyword cannot be used to stop `forEach()`?
A) break  
B) continue  
C) return  
D) All of the above  

---

### 17. What is `thisArg` in `forEach()`?
A) A return value  
B) A callback parameter  
C) Value of `this` inside callback  
D) Index reference  

---

### 18. Where is `thisArg` passed?
A) Inside callback  
B) As second argument to `forEach()`  
C) As third parameter  
D) Inside array  

---

### 19. Can `forEach()` be chained with other array methods?
A) Yes  
B) No  
C) Only with map()  
D) Only with filter()  

---

### 20. Why can `forEach()` not be chained?
A) It throws error  
B) It mutates array  
C) It returns undefined  
D) It is synchronous  

---

### 21. Which of the following is true about `forEach()`?
A) It returns a new array  
B) It stops when condition is met  
C) It is used for side effects  
D) It works only on numbers  

---

### 22. What happens if an error is thrown inside `forEach()` callback?
A) Loop continues  
B) Error is ignored  
C) Loop stops and error propagates  
D) Only current iteration stops  

---

### 23. Can `forEach()` be nested?
A) Yes  
B) No  
C) Only once  
D) Only with reduce()  

---

### 24. Which loop can replace `forEach()` when early exit is required?
A) for  
B) for...of  
C) while  
D) All of the above  

---

### 25. Which statement best describes `forEach()`?
A) Transformation method  
B) Iteration with return  
C) Iteration for side effects  
D) Accumulation method  

---

### 26. What is the output of:
```js
[1,2,3].forEach(n => n * 2);
A) [2,4,6]
B) 6
C) undefined
D) Error

### 27. Which parameter name is commonly used for index?
A) n
B) x
C) i
D) v

### 28. Which parameter name is commonly used for current value?
A) acc
B) n
C) i
D) arr

### 29. Does forEach() work on NodeList in modern browsers?
A) Yes
B) No
C) Only in Node.js
D) Only after conversion

### 30. What programming style is forEach() mostly associated with?
A) Procedural
B) Object-oriented
C) Functional
D) Low-level

✅ Answer Key
1. D

2. B

3. C

4. C

5. B

6. C

7. B

8. B

9. B

10. B

11. C

12. B

13. C

14. A

15. B

16. D

17. C

18. B

19. B

20. C

21. C

22. C

23. A

24. D

25. C

26. C

27. C

28. B

29. A

30. C